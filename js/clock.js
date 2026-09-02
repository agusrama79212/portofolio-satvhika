/* ==========================================================================
   BALI (WITA / GMT+8) REALTIME CLOCK & STATUS
   ========================================================================== */

function initBaliClock() {
  const clockElement = document.getElementById('bali-live-time');
  const mobileClockElement = document.getElementById('mobile-bali-time');
  const statusElement = document.getElementById('office-status');

  function updateTime() {
    try {
      const now = new Date();
      // Format time in Bali timezone (Asia/Makassar - WITA / UTC+8)
      const options = {
        timeZone: 'Asia/Makassar',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      
      const formatter = new Intl.DateTimeFormat('en-GB', options);
      const timeStr = formatter.format(now);
      const formattedText = `${timeStr} WITA (GMT+8)`;
      
      if (clockElement) {
        clockElement.textContent = formattedText;
      }
      if (mobileClockElement) {
        mobileClockElement.textContent = formattedText;
      }

      // Check working hours (09:00 - 18:00 WITA, Mon-Fri)
      const witaHoursOptions = { timeZone: 'Asia/Makassar', hour: 'numeric', hour12: false };
      const witaDayOptions = { timeZone: 'Asia/Makassar', weekday: 'short' };
      
      const hour = parseInt(new Intl.DateTimeFormat('en-GB', witaHoursOptions).format(now), 10);
      const day = new Intl.DateTimeFormat('en-US', witaDayOptions).format(now);
      const isWeekday = !['Sat', 'Sun'].includes(day);
      const isOpen = isWeekday && hour >= 9 && hour < 18;

      if (statusElement) {
        if (isOpen) {
          statusElement.textContent = 'Kantor Buka • Siap Diskusi';
          statusElement.className = 'status-badge status-open';
        } else {
          statusElement.textContent = 'Tersedia untuk Proyek Baru';
          statusElement.className = 'status-badge status-available';
        }
      }
    } catch (e) {
      console.warn('Clock timezone formatting fallback', e);
    }
  }

  updateTime();
  setInterval(updateTime, 1000);
}

document.addEventListener('DOMContentLoaded', initBaliClock);
