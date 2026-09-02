/**
 * Dual-Mode (16:9 Landscape & 9:16 Portrait) Scroll-Driven 3D Frame Animation
 * Satvhika — Digital Product & SaaS Company
 */

(function () {
  'use strict';

  const TOTAL_FRAMES = 300;

  // Mode configurations
  const MODES = {
    landscape: {
      dir: 'background-lanskape',
      width: 1280,
      height: 720
    },
    portrait: {
      dir: 'background-porto',
      width: 720,
      height: 1280
    }
  };

  // Caches for each mode
  const caches = {
    landscape: new Map(),
    portrait: new Map()
  };

  // State
  let currentMode = getActiveMode();
  let currentFrame = 1;
  let targetFrame = 1;
  let isTicking = false;
  let isCanvasVisible = true;
  let lastDrawnFrame = -1;
  let lastDrawnMode = '';

  // DOM Elements
  let canvas = null;
  let ctx = null;
  let stage = null;

  function getActiveMode() {
    if (window.innerWidth <= 768 || window.innerHeight > window.innerWidth) {
      return 'portrait';
    }
    return 'landscape';
  }

  function padZero(num, size) {
    let s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
  }

  function getFrameSrc(mode, index) {
    const config = MODES[mode];
    return `${config.dir}/ezgif-frame-${padZero(index, 3)}.png`;
  }

  // Preload an individual frame for a mode
  function preloadFrame(mode, index, onComplete) {
    const cache = caches[mode];
    if (cache.has(index)) {
      if (onComplete) onComplete(cache.get(index));
      return cache.get(index);
    }
    const img = new Image();
    img.src = getFrameSrc(mode, index);
    img.onload = function () {
      cache.set(index, img);
      if (onComplete) onComplete(img);
    };
    return img;
  }

  // Progressive Batched Preloader
  function initPreloaderForMode(mode) {
    const cache = caches[mode];

    // 1. Frame 1 immediate load
    preloadFrame(mode, 1, () => {
      if (currentMode === mode) {
        drawFrame(Math.round(currentFrame));
        if (canvas) canvas.classList.add('loaded');
      }
    });

    // 2. Preload first 30 frames with priority
    for (let i = 2; i <= 30; i++) {
      preloadFrame(mode, i);
    }

    // 3. Preload keyframes across 300 range (every 5th frame for fast scroll preview)
    setTimeout(() => {
      for (let i = 35; i <= TOTAL_FRAMES; i += 5) {
        preloadFrame(mode, i);
      }
    }, 150);

    // 4. Progressively fill remaining frames
    let currentBatchIndex = 31;
    function loadNextBatch() {
      if (currentBatchIndex > TOTAL_FRAMES) return;
      const batchEnd = Math.min(TOTAL_FRAMES, currentBatchIndex + 15);
      for (let i = currentBatchIndex; i <= batchEnd; i++) {
        if (!cache.has(i)) {
          preloadFrame(mode, i);
        }
      }
      currentBatchIndex = batchEnd + 1;
      if (window.requestIdleCallback) {
        window.requestIdleCallback(loadNextBatch, { timeout: 350 });
      } else {
        setTimeout(loadNextBatch, 120);
      }
    }

    setTimeout(loadNextBatch, 400);
  }

  // Get closest loaded frame
  function getClosestAvailableFrame(mode, frameNumber) {
    const cache = caches[mode];
    if (cache.has(frameNumber)) return cache.get(frameNumber);

    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const prev = frameNumber - offset;
      const next = frameNumber + offset;
      if (prev >= 1 && cache.has(prev)) return cache.get(prev);
      if (next <= TOTAL_FRAMES && cache.has(next)) return cache.get(next);
    }
    return cache.get(1);
  }

  // Draw frame to canvas
  function drawFrame(frameNumber) {
    if (!ctx || !canvas) return;

    const img = getClosestAvailableFrame(currentMode, frameNumber);
    if (!img || !img.complete || img.naturalWidth === 0) return;

    if (lastDrawnFrame === frameNumber && lastDrawnMode === currentMode) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    lastDrawnFrame = frameNumber;
    lastDrawnMode = currentMode;
  }

  // Calculate target frame from scroll
  function updateScrollProgress() {
    if (!stage) return;

    const stageRect = stage.getBoundingClientRect();
    const stageTop = stageRect.top;
    const stageHeight = stageRect.height;
    const viewportHeight = window.innerHeight;

    // Check visibility
    if (stageTop > viewportHeight || stageTop + stageHeight < 0) {
      if (isCanvasVisible) {
        isCanvasVisible = false;
        if (canvas) canvas.style.opacity = '0';
      }
      return;
    }

    if (!isCanvasVisible) {
      isCanvasVisible = true;
      if (canvas) canvas.style.opacity = '';
    }

    // Global stage scroll progress (0 to 1 across hero + layanan)
    const totalScrollableDistance = stageHeight - viewportHeight;
    const currentScrollDistance = -stageTop;

    let progress = 0;
    if (totalScrollableDistance > 0) {
      progress = currentScrollDistance / totalScrollableDistance;
    }

    progress = Math.min(1, Math.max(0, progress));

    // Map to frame 1 - 300
    targetFrame = Math.min(TOTAL_FRAMES, Math.max(1, Math.round(progress * (TOTAL_FRAMES - 1)) + 1));
  }

  // Smooth render loop with LERP momentum
  function renderLoop() {
    const diff = targetFrame - currentFrame;
    if (Math.abs(diff) > 0.05) {
      currentFrame += diff * 0.22;
      drawFrame(Math.round(currentFrame));
    } else if (Math.round(currentFrame) !== Math.round(targetFrame)) {
      currentFrame = targetFrame;
      drawFrame(Math.round(currentFrame));
    }
    requestAnimationFrame(renderLoop);
  }

  function onScroll() {
    if (!isTicking) {
      requestAnimationFrame(() => {
        updateScrollProgress();
        isTicking = false;
      });
      isTicking = true;
    }
  }

  function onResize() {
    const newMode = getActiveMode();
    if (newMode !== currentMode) {
      currentMode = newMode;
      const config = MODES[currentMode];
      if (canvas) {
        canvas.width = config.width;
        canvas.height = config.height;
      }
      lastDrawnFrame = -1;
      initPreloaderForMode(currentMode);
    } else if (canvas) {
      const config = MODES[currentMode];
      if (canvas.width !== config.width || canvas.height !== config.height) {
        canvas.width = config.width;
        canvas.height = config.height;
      }
      lastDrawnFrame = -1;
      drawFrame(Math.round(currentFrame));
    }
    updateScrollProgress();
  }

  function init() {
    canvas = document.getElementById('hero-scroll-canvas') || document.getElementById('mobile-scroll-canvas');
    stage = document.getElementById('hero-layanan-stage');

    if (!canvas || !stage) return;

    ctx = canvas.getContext('2d', { alpha: false });

    // Mode setup
    currentMode = getActiveMode();
    const config = MODES[currentMode];
    canvas.width = config.width;
    canvas.height = config.height;

    // Start preloader
    initPreloaderForMode(currentMode);

    // Idle preload alternate mode
    setTimeout(() => {
      const altMode = currentMode === 'landscape' ? 'portrait' : 'landscape';
      preloadFrame(altMode, 1);
    }, 2000);

    // Event listeners
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('orientationchange', onResize, { passive: true });

    // Initial calculations
    updateScrollProgress();

    // Start render loop
    requestAnimationFrame(renderLoop);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
