/* ==========================================================================
   MAIN APPLICATION SCRIPT
   Satvhika — Digital Product & SaaS Company
   ========================================================================== */

// Case Study Data for Modals based on Knowledge Base
// Case Study Data for Modals based on Knowledge Base
const CASE_STUDIES = {
  latsu: {
    title: 'Latsu Canggu',
    tag: 'Website F&B & Productive Sanctuary · 2026',
    subtitle: 'Website coffee shop & sanctuary produktif di jantung Canggu, Bali dengan pengalaman digital visual sinematik.',
    overview: 'Latsu Canggu adalah representasi digital premium untuk coffee shop dan workspace produktif di Canggu, Bali. Menghadirkan atmosfer tenang (sanctuary), storytelling mendalam tentang perkebunan kopi pilihan, katalog menu interaktif, serta integrasi pemesanan WhatsApp langsung.',
    challenge: 'Persaingan ketat kafe di kawasan Shortcut Canggu membutuhkan identitas visual website yang memukau wisatawan internasional, digital nomad, dan pengunjung lokal dengan performa loading ultra-cepat di smartphone.',
    solution: 'Satvhika merancang website bertema warm-luxury dark & cream aesthetic, tipografi editorial elegan, storytelling terarah, serta layout menu 3 kolom terstruktur dengan tombol pemesanan WhatsApp instan.',
    gallery: [
      {
        src: 'assets/projects/latsu/latsu-hero.png',
        title: '01. Hero Section — Luxury in Every Sip',
        desc: 'Tampilan pembuka bernuansa luxury dark dengan visual kopi sinematik dan call-to-action pemesanan instan.'
      },
      {
        src: 'assets/projects/latsu/latsu-story.png',
        title: '02. Story Section — Hening di Tengah Shortcut',
        desc: 'Storytelling editorial memperkenalkan productive sanctuary bagi digital nomad lengkap dengan metrik rating 4.9.'
      },
      {
        src: 'assets/projects/latsu/latsu-menu.png',
        title: '03. The Menu Section — Crafted with Passion',
        desc: 'Struktur menu 3 kategori (Coffee, Non-Coffee, Food) yang teratur, rapi, dan responsif di seluruh resolusi layar.'
      }
    ],
    metrics: [
      { label: 'Peningkatan Reservasi WA', value: '+85%' },
      { label: 'Rating Google Maps', value: '4.9 / 5.0' },
      { label: 'Kecepatan Muat Mobile', value: '0.4 Detik' }
    ],
    tech: ['Luxury Editorial Web', 'Interactive Menu System', 'WhatsApp Direct Order', 'SEO Local Bali', 'Responsive HD']
  },
  lesstresso: {
    title: 'Lesstresso',
    tag: 'Website F&B & Modern Coffee House · 2026',
    subtitle: 'Website coffee house modern di Denpasar, Bali dengan pengalaman digital interaktif dan navigasi menu terstruktur.',
    overview: 'Lesstresso adalah coffee house populer di Denpasar Barat yang menawarkan ruang produktif nyaman bagi komunitas nugas dan nongki. Satvhika merancang website yang menghadirkan atmosfer hangat, showcase fasilitas lengkap (Free Wi-Fi, Laptop Friendly, Free Parking), informasi jam operasional, dan katalog Signature Menu interaktif.',
    challenge: 'Tingginya antrian pertanyaan manual pelanggan seputar ketersediaan colokan listrik, menu signature, harga, dan lokasi cabang di media sosial.',
    solution: 'Membangun landing page terstruktur dengan fitur visual fasilitas, integrasi Google Maps navigasi 1-klik, daftar menu transparan lengkap dengan kategori ukuran (S, M, L), dan tombol WhatsApp direct contact.',
    gallery: [
      {
        src: 'assets/projects/lesstresso/lesstresso-hero.png',
        title: '01. Hero Section — Less Stress, More Espresso',
        desc: 'Visual pembuka yang memikat dengan rating Google 4.9 (336+ Reviews) dan tombol akses cepat menu & lokasi.'
      },
      {
        src: 'assets/projects/lesstresso/lesstresso-about.png',
        title: '02. About & Facilities — Ruang Produktivitas Nyaman',
        desc: 'Highlight 4 fasilitas utama (Wi-Fi Cepat, Stopkontak, Parkir Luas, Outdoor) serta jam operasional hingga larut malam.'
      },
      {
        src: 'assets/projects/lesstresso/lesstresso-menu.png',
        title: '03. Signature Menu — Pilihan Biji Kopi Terbaik',
        desc: 'Tabel menu digital terstruktur untuk Coffee, Non-Coffee, dan Makanan dengan varian harga transparan.'
      }
    ],
    metrics: [
      { label: 'Rating Ulasan Google', value: '4.9 (336+)' },
      { label: 'Kecepatan Akses Mobile', value: '0.3 Detik' },
      { label: 'Peningkatan Pesanan Online', value: '+78%' }
    ],
    tech: ['Modern Responsive Web', 'Digital Menu Architecture', 'Local SEO Denpasar', 'Instant WhatsApp Hook', 'Ultra HD Visuals']
  },
  samudra: {
    title: 'The Wedding of Bagus & Ayu',
    tag: 'Interactive Balinese Wedding Invitation · 2027',
    subtitle: 'Undangan pernikahan digital adat Bali (Pawiwahan) yang sinematik, interaktif, dan bernuansa etnik modern.',
    overview: 'Platform undangan digital personal untuk momen pawiwahan agung I Putu Bagus & Ni Kadek Ayu di Gianyar, Bali. Dilengkapi fitur buka undangan interaktif, animasi tumpukan kartu foto (card stack), hitung mundur hari H, integrasi Dudonan Acara dengan Google Maps, musik latar, serta galeri foto prewedding beresolusi tinggi.',
    gallery: [
      {
        src: 'assets/projects/bagus-ayu/bagus-ayu-cover.png',
        title: '01. Cover & Buka Undangan — Nuansa Elegan Tradisional',
        desc: 'Tampilan pembuka eksklusif dengan ornamen bunga emas khas Bali, nama tamu spesial terpersonalisasi, dan tombol Buka Undangan interaktif.'
      },
      {
        src: 'assets/projects/bagus-ayu/bagus-ayu-story.jpg',
        title: '02. Animasi Card Stack — Interaksi Foto Sinematik',
        desc: 'Efek interaktif swipe & stack kartu foto prewedding kedua mempelai dalam balutan busana adat Bali payas agung di pura heritage.'
      },
      {
        src: 'assets/projects/bagus-ayu/bagus-ayu-countdown.jpg',
        title: '03. Countdown Hari H — Detail Pasangan Mempelai',
        desc: 'Hitung mundur presisi (Hari, Jam, Menit, Detik) menuju hari bahagia dengan tombol Simpan ke Kalender dan pemutar audio musik romantis.'
      },
      {
        src: 'assets/projects/bagus-ayu/bagus-ayu-acara.png',
        title: '04. Dudonan Acara & Peta — Panduan Lokasi Presisi',
        desc: 'Jadwal rangkaian upacara Pawiwahan (Akad) & Resepsi lengkap dengan navigasi langsung menuju lokasi via Google Maps Gianyar.'
      },
      {
        src: 'assets/projects/bagus-ayu/bagus-ayu-gallery.png',
        title: '05. Galeri Prewedding — Masonry Grid Kualitas Tinggi',
        desc: 'Tampilan galeri foto prewedding responsif dengan animasi transisi halus untuk mengabadikan momen kebersamaan kedua mempelai.'
      }
    ],
    challenge: 'Menciptakan undangan digital pernikahan adat Bali yang sakral namun interaktif, ringan saat dibuka di berbagai perangkat mobile, dan mempermudah tamu menemukan lokasi acara.',
    solution: 'Mengembangkan web undangan dengan optimasi aset gambar Ultra HD, animasi transisi CSS3 yang mulus, pemutar musik web audio, serta integrasi peta Google Maps real-time.',
    metrics: [
      { label: 'Tingkat Kepuasan Tamu', value: '100%' },
      { label: 'Kecepatan Akses Mobile', value: '0.3 Detik' },
      { label: 'Navigasi Peta Google Maps', value: 'Akurat 100%' }
    ],
    tech: ['Interactive Card Stack', 'Web Audio Background', 'Google Maps Live API', 'Countdown Sync Engine', 'Responsive Masonry Grid']
  },
  loka: {
    title: 'MicroTools — Client-Side SaaS Utilities',
    tag: 'Web Utilities & Client-Side SaaS Platform · 2026',
    subtitle: 'Kumpulan utilitas pengolah file & dokumen digital modern yang bekerja 100% di browser pengguna tanpa antri server.',
    overview: 'MicroTools adalah platform SaaS utilitas harian berkecepatan tinggi yang memproses file PDF, kompresi gambar, dan kode QR secara instan langsung di sisi client (browser). Mengusung arsitektur zero-server-storage sehingga menjamin privasi data 100%, hemat kuota, dan tanpa latency antrian server.',
    gallery: [
      {
        src: 'assets/projects/microtools/microtools-hero.png',
        title: '01. Hero & Tools Ecosystem — Selesaikan Tugas Tanpa Antri Server',
        desc: 'Katalog 6 alat produktivitas utama (Perapi Teks PDF, Kompresor Foto, QR Generator, Split PDF, Merge PDF, JPG/PNG to PDF).'
      },
      {
        src: 'assets/projects/microtools/microtools-pdf-cleaner.png',
        title: '02. Perapi Teks PDF — Koreksi Spasi & Baris Berantakan',
        desc: 'Editor interaktif dua kolom (Teks Asli vs Teks Dirapikan) untuk membersihkan hasil copas PDF secara instan dilengkapi tombol satu-klik Copy to Clipboard.'
      },
      {
        src: 'assets/projects/microtools/microtools-compressor.png',
        title: '03. Kompresor Foto Instan — Kompresi Cepat Tanpa Upload',
        desc: 'Area Drag & Drop cerdas untuk memperkecil ukuran foto JPG, PNG, WebP di bawah 200KB tanpa menurunkan ketajaman gambar.'
      },
      {
        src: 'assets/projects/microtools/microtools-qr.png',
        title: '04. QR Code Generator — Kustomisasi Warna & Resolusi Tinggi',
        desc: 'Generator kode QR interaktif untuk URL, teks, atau kontak dengan fitur live preview, kustomisasi warna HEX, dan resolusi HD 512x512.'
      },
      {
        src: 'assets/projects/microtools/microtools-pdf-split.png',
        title: '05. Pisah (Split) PDF Instan — Ekstraksi Halaman Cepat',
        desc: 'Pemecah halaman file PDF dokumen kerja secara lokal di browser yang 100% aman dan menjaga kerahasiaan dokumen penting pengguna.'
      }
    ],
    challenge: 'Aplikasi utilitas online pada umumnya mengharuskan pengguna mengunggah dokumen ke server pihak ketiga yang lambat, rentan kebocoran privasi, dan memakan kuota besar.',
    solution: 'Membangun arsitektur 100% Client-Side Web Workers dan WebAssembly — memproses file langsung di memori browser lokal dengan kecepatan sub-detik tanpa beban biaya server backend.',
    metrics: [
      { label: 'Kecepatan Pemrosesan', value: '< 0.1 Detik' },
      { label: 'Privasi Data Pengguna', value: '100% Lokal' },
      { label: 'Beban Biaya Server', value: '$0 / Bulan' }
    ],
    tech: ['Client-Side Web Workers', 'WebAssembly PDF Engine', 'Canvas QR Generator', 'Zero-Server Architecture', 'Local Memory Processing']
  },
  academictools: {
    title: 'AcademicTools — Academic & Research Calculator',
    tag: 'Academic Computing & Statistical SaaS · 2026',
    subtitle: 'Platform kalkulasi statistik dan instrumen uji penelitian interaktif untuk mahasiswa dan akademisi.',
    overview: 'AcademicTools adalah platform web instan yang membantu mahasiswa, peneliti, dan UX researcher menghitung uji System Usability Scale (SUS ISO 9241), User Experience Questionnaire (UEQ 26 Item), User Acceptance Testing (UAT Likert 4 & 5 Poin), serta Rumus Slovin untuk penentuan sampel minimal penelitian. Dilengkapi fitur import file CSV dari Google Forms dan visualisasi skor otomatis yang siap disalin ke naskah skripsi/jurnal.',
    gallery: [
      {
        src: 'assets/projects/academictools/academictools-hero.png',
        title: '01. Hero & Academic Suite — Kalkulator Akademik Untuk Mahasiswa',
        desc: 'Dashboard utama dengan akses instan ke seluruh kalkulator statistik penelitian (SUS, UEQ, UAT, Slovin, dan IPK).'
      },
      {
        src: 'assets/projects/academictools/academictools-sus.png',
        title: '02. Kalkulator SUS — Standar ISO 9241 & Import CSV GForms',
        desc: 'Uji 10 pertanyaan standar SUS dengan sistem konversi skor ganjil/genap otomatis, bar progres, dan interpretasi grade kelayakan sistem.'
      },
      {
        src: 'assets/projects/academictools/academictools-ueq.png',
        title: '03. Kalkulator UEQ — 26 Pasangan Kata Sifat & 6 Skala Pengujian',
        desc: 'Analisis 6 skala UEQ (Daya Tarik, Kejelasan, Efisiensi, Ketepatan, Stimulasi, Kebaruan) dengan formula transformasi skor otomatis.'
      },
      {
        src: 'assets/projects/academictools/academictools-uat.png',
        title: '04. Kalkulator UAT — Skala Likert 4 & 5 Poin Multi Responden',
        desc: 'Perhitungan persentase kelayakan sistem, kustomisasi jumlah responden & butir pertanyaan, serta interpretasi standar penerimaan pengguna.'
      },
      {
        src: 'assets/projects/academictools/academictools-slovin.png',
        title: '05. Rumus Slovin — Penentuan Ukuran Sampel Penelitian Kuantitatif',
        desc: 'Kalkulasi presisi sampel minimal populasi berhingga dengan preset margin error (1%, 5%, 10%, atau custom) beserta sitasi ilmiah referensi buku.'
      }
    ],
    challenge: 'Mahasiswa dan peneliti sering kesulitan menghitung formula uji statistik secara manual di Excel yang rentan kesalahan rumus serta memakan waktu berjam-jam.',
    solution: 'Menyediakan kalkulator berbasis web interaktif dengan parser CSV Google Forms cerdas yang memvalidasi data dan menampilkan hasil olah skor dalam hitungan detik.',
    metrics: [
      { label: 'Akurasi Perhitungan', value: '100% Sesuai Standar ISO' },
      { label: 'Waktu Analisis Data', value: '< 3 Detik' },
      { label: 'Kemudahan Penggunaan', value: 'Tanpa Login / Gratis' }
    ],
    tech: ['Statistical Compute Engine', 'Client-Side CSV Parser', 'ISO 9241 Evaluation Standard', 'UEQ Data Model', 'Real-time Chart Visualizer']
  },
  workdeck: {
    title: 'Work Deck — Stream Deck & Remote Antigravity Terminal',
    tag: 'Hardware Automation & Remote Dev SaaS · 2026',
    subtitle: 'Platform web kontroler laptop dari smartphone dengan integrasi WebSocket real-time, pairing instan QR Code, dan terminal Antigravity CLI jarak jauh.',
    overview: 'Work Deck adalah aplikasi web inovatif yang mentransformasi smartphone pengguna (iPhone/Android) menjadi virtual Stream Deck nirkabel dan terminal interaktif untuk mengontrol laptop secara instan. Pengguna dapat mengatur kecerahan layar, volume suara, shortcut Discord/aplikasi, perpindahan virtual desktop, hingga mengeksekusi prompt AI Antigravity CLI langsung dari genggaman ponsel hanya dengan scan QR Code di terminal tanpa perlu instalasi rumit.',
    gallery: [
      {
        src: 'assets/projects/workdeck/workdeck-deck.jpg',
        title: '01. Stream Deck Controller — Kontrol Hardware & Shortcut Cepat',
        desc: 'Antarmuka dark mode modern dengan slider brightness, volume, kontrol mic Discord (Mute/Deafen), Mode Kerja, dan navigasi layar desktop.'
      },
      {
        src: 'assets/projects/workdeck/workdeck-qr.png',
        title: '02. QR Code Terminal Pairing — Zero-Config Wireless Bridge',
        desc: 'Sistem pairing otomatis via QR Code terminal yang langsung menghubungkan smartphone ke laptop dalam jaringan lokal tanpa konfigurasi IP manual.'
      },
      {
        src: 'assets/projects/workdeck/workdeck-terminal.png',
        title: '03. Remote Antigravity Terminal — Kontrol AI CLI Jarak Jauh',
        desc: 'Sesi terminal interaktif langsung di smartphone untuk mengoperasikan Antigravity CLI (Google AI / Gemini 3.7 Flash) lengkap dengan tombol bantu Esc, Tab, Arrow, dan Paste.'
      }
    ],
    challenge: 'Hardware Stream Deck fisik memiliki harga tinggi dan terbatas pada tombol statis, tanpa kemampuan menjalankan sesi terminal AI atau kontrol sistem interaktif dari jarak jauh.',
    solution: 'Membangun arsitektur Node.js & WebSocket lokal dengan PTY Terminal bridge, auto-generated terminal QR Code, dan antarmuka web mobile PWA berkecepatan tinggi.',
    metrics: [
      { label: 'Latency Kontrol', value: '< 5ms (WebSocket)' },
      { label: 'Waktu Pairing', value: 'Instan via QR Code' },
      { label: 'Integrasi AI', value: 'Antigravity CLI Support' }
    ],
    tech: ['WebSocket Real-Time Sync', 'Node.js Local Bridge', 'PTY Terminal Streamer', 'Antigravity CLI Integration', 'QR Auto-Discovery']
  },
  satvikha_agent: {
    title: 'Satvikha Multi-Agent AI (Moneytree)',
    tag: 'AI Agent Platform & LLM Orchestration · 2026',
    subtitle: 'Platform pembuatan dan manajemen chatbot AI multi-agent dengan integrasi mulus ke WhatsApp, Telegram, dan Website via API.',
    overview: 'Satvikha Multi-Agent AI (sebelumnya Moneytree) adalah platform orkestrasi AI mutakhir yang memungkinkan pengguna membuat, mengonfigurasi, dan mengelola banyak agen AI sekaligus. Dilengkapi antarmuka visual (UI) modern, platform ini memberikan kontrol penuh atas Model LLM, Temperature, System Prompts, Knowledge Base (RAG), hingga integrasi Tool Calling untuk setiap agen. Masing-masing agen menyediakan endpoint API instan untuk langsung dihubungkan ke berbagai channel komunikasi pelanggan seperti WhatsApp dan Telegram tanpa perlu menulis ulang logika AI.',
    gallery: [
      {
        src: 'assets/projects/satvikha-agent/satvikha-agent-hero.png',
        title: '01. Dashboard Utama — Manajemen Multi-Agent',
        desc: 'Tampilan antarmuka utama yang bersih dengan sapaan interaktif, daftar fungsionalitas (Synthesize Data, Creative Brainstorm, Check Facts), dan navigasi agen.'
      },
      {
        src: 'assets/projects/satvikha-agent/satvikha-agent-settings.png',
        title: '02. Konfigurasi Agen & Parameter LLM',
        desc: 'Panel kontrol terpusat untuk mengatur System Prompt, memilih tipe model LLM (contoh: gemini-1.5-flash), mengatur Temperature, dan menyimpan perubahan secara instan.'
      },
      {
        src: 'assets/projects/satvikha-agent/satvikha-agent-knowledge.png',
        title: '03. Knowledge Base & RAG Management',
        desc: 'Sistem manajemen data di mana pengguna dapat mengunggah file dokumen referensi atau menyalin teks untuk memperkuat pemahaman konteks spesifik agen AI.'
      },
      {
        src: 'assets/projects/satvikha-agent/satvikha-agent-playground.png',
        title: '04. Chat Playground Interaktif',
        desc: 'Lingkungan uji coba (sandbox) bawaan untuk langsung berinteraksi dengan agen yang baru saja dikonfigurasi guna memastikan respons sesuai dengan guardrails.'
      }
    ],
    challenge: 'Membangun ekosistem chatbot multi-agen dengan konteks dan aturan yang berbeda-beda seringkali membutuhkan infrastruktur koding yang sangat kompleks, terutama untuk integrasi RAG dan API eksternal.',
    solution: 'Menghadirkan UI manajemen sentral dengan arsitektur terpisah per agen (isolated scope). Setiap agen dikemas menjadi satu entitas API siap pakai yang mempermudah deployment ke channel apapun tanpa perlu mengubah sistem internal klien.',
    metrics: [
      { label: 'Deployment Channel', value: 'API Instan' },
      { label: 'Manajemen Data', value: 'Visual RAG' },
      { label: 'Konfigurasi LLM', value: 'No-Code Setup' }
    ],
    tech: ['Multi-Agent Architecture', 'Visual LLM Configurator', 'RAG Document Parser', 'API Integration Bridge', 'Tool Calling UI']
  },
  seken_scan: {
    title: 'Seken / Scan — iPhone Second Inspection & Diagnostic Suite',
    tag: 'Hardware Inspection & Mobile Diagnostic Tool · 2026',
    subtitle: 'Aplikasi web panduan mandiri inspeksi iPhone second bertahap untuk mendeteksi rekondisi bodi, layar tiruan, status part iOS, dan keabsahan garansi resmi saat transaksi COD.',
    overview: 'Seken / Scan adalah web application diagnostik cerdas yang dirancang khusus untuk melindungi pembeli iPhone second dari risiko unit rekondisi, part kanibalan non-resmi, hingga masalah blokir sinyal IMEI saat transaksi COD (Cash on Delivery). Pengguna dapat memilih model iPhone spesifik (dari seri klasik hingga flagship terbaru iPhone 17 Pro Max), dan sistem secara adaptif memuat parameter hardware unik tipe tersebut — mulai dari kode model A-series, material sasis (Titanium Grade 5 vs Aluminium Anodized), sensor Camera Control, hingga indikator riwayat servis iOS. Sistem memandu pembeli melewati 4 tahap inspeksi terarah di lapangan dengan checklist status real-time (Aman / Masalah / Belum).',
    gallery: [
      {
        src: 'assets/projects/seken-scan/seken-scan-hero.png',
        title: '01. Beranda & Standar Pemeriksaan Unit COD',
        desc: 'Hero interface dengan pesan edukasi "Jangan Beli iPhone Bekas Hanya dari Tampilannya", ringkasan 3 pilar inspeksi utama (Deteksi Bongkar, Layar & True Tone, Garansi PA/A), serta estimasi waktu pemeriksaan (±7 menit).'
      },
      {
        src: 'assets/projects/seken-scan/seken-scan-models.png',
        title: '02. Tahap 1: Seleksi Model iPhone Adaptif',
        desc: 'Katalog interaktif pemilihan model iPhone dari seri X/SE hingga iPhone 17 Pro Max dengan filter seri instan, pencarian model cepat, dan badge hardware spesifik per perangkat (chipset, material bodi, modul kamera).'
      },
      {
        src: 'assets/projects/seken-scan/seken-scan-specs.png',
        title: '03. Panduan Teknis & Urutan 4 Tahap Diagnostik',
        desc: 'Ringkasan spesifikasi teknis unit terpilih, catatan kritis titik rawan servis dari data lapangan, serta navigasi 4 tahap diagnostik (Body & Fisik, Kamera, Nomor Model, Layar) hingga ringkasan akhir.'
      },
      {
        src: 'assets/projects/seken-scan/seken-scan-checklist.png',
        title: '04. Checklist Pemeriksaan Fisik & Komponen Kritis',
        desc: 'Checklist interaktif di lapangan untuk mengecek kerataan sasis aluminium, dua baut pentalobe bawah (deteksi bekas bongkar teknisi), port USB-C 3.0 (10 Gbps), haptic Action Button, dan sensor Camera Control dengan status verifikasi langsung.'
      }
    ],
    challenge: 'Membeli iPhone second saat transaksi COD memiliki risiko penipuan tinggi: fisik tampak mulus namun komponen telah ditukar, layar tiruan tanpa True Tone, dua baut pentalobe lecet bekas obeng teknisi, atau unit inter ilegal yang rentan blokir sinyal.',
    solution: 'Membangun aplikasi panduan diagnostik lapangan berbasis web yang ultra-responsif di smartphone pembeli tanpa install aplikasi. Sistem mengotomatisasi checklist parameter sesuai tipe iPhone target dengan instruksi visual cara mendeteksi tanda-tanda rekondisi secara presisi.',
    metrics: [
      { label: 'Urutan Diagnostik', value: '4 Tahap Terarah' },
      { label: 'Poin Pemeriksaan', value: '24+ Cek Fisik' },
      { label: 'Database Model', value: 'iPhone X s/d 17 Pro' }
    ],
    tech: ['Dynamic Model Architecture', 'Hardware-Adaptive Checklist', 'Apple-Inspired UI System', 'Zero-Install Web App', 'Interactive Inspection Engine']
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll blur effect
  const siteHeader = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }, { passive: true });

  // 2. Fullscreen Mobile Navigation Drawer Handlers
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileDrawerClose = document.getElementById('mobile-drawer-close');

  function openMobileDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    if (mobileToggle) {
      mobileToggle.classList.add('active');
      mobileToggle.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    if (mobileToggle) {
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeMobileDrawer();
      } else {
        openMobileDrawer();
      }
    });
  }

  if (mobileDrawerClose) {
    mobileDrawerClose.addEventListener('click', closeMobileDrawer);
  }

  // Close mobile nav when clicking a link inside it
  if (mobileDrawer) {
    mobileDrawer.querySelectorAll('.mobile-nav-item, .btn-full-mobile').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileDrawer();
      });
    });
  }

  // 3. Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // 4. Case Study Modal Handlers
  const modalOverlay = document.getElementById('case-study-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalContent = document.getElementById('modal-dynamic-content');

  function openCaseStudy(key) {
    const data = CASE_STUDIES[key];
    if (!data || !modalContent || !modalOverlay) return;

    modalContent.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 1.75rem;">
        <div>
          <span style="font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-muted); display: block; margin-bottom: 0.4rem;">${data.tag}</span>
          <h2 style="font-family: var(--font-serif); font-size: clamp(1.75rem, 4.5vw, 2.75rem); font-weight: 400; color: var(--text-primary); margin-bottom: 0.65rem; line-height: 1.15;">${data.title}</h2>
          <p style="font-size: 0.98rem; line-height: 1.6; color: var(--text-secondary);">${data.subtitle}</p>
        </div>

        ${data.gallery ? `
        <div>
          <h3 style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 0.85rem;">Galeri Tampilan Website (${data.gallery.length} Halaman)</h3>
          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            ${data.gallery.map(item => `
              <div style="background: #111113; border: 1px solid var(--border-primary); border-radius: var(--radius-md); overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                <img src="${item.src}" alt="${item.title}" style="width: 100%; height: auto; display: block; object-fit: cover;">
                <div style="padding: 0.85rem 1.1rem; background: #16161a; border-top: 1px solid rgba(255,255,255,0.06);">
                  <div style="font-size: 0.88rem; font-weight: 700; color: #ffffff; margin-bottom: 0.25rem;">${item.title}</div>
                  <div style="font-size: 0.8rem; color: #b4b4c0; line-height: 1.45;">${item.desc}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}

        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-primary); border-radius: var(--radius-md); padding: 1.35rem;">
          <h3 style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 0.65rem;">Gambaran Umum Solusi</h3>
          <p style="font-size: 0.92rem; line-height: 1.65; color: var(--text-primary);">${data.overview}</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
          <div style="background: #191919; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem;">
            <h4 style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255, 255, 255, 0.6); margin-bottom: 0.4rem;">Tantangan Klien</h4>
            <p style="font-size: 0.85rem; line-height: 1.55; color: var(--text-secondary);">${data.challenge}</p>
          </div>
          <div style="background: #191919; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem;">
            <h4 style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #ffffff; margin-bottom: 0.4rem;">Pendekatan Satvhika</h4>
            <p style="font-size: 0.85rem; line-height: 1.55; color: var(--text-secondary);">${data.solution}</p>
          </div>
        </div>

        <div>
          <h3 style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 0.85rem;">Dampak Terukur & Nilai Bisnis</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 0.85rem;">
            ${data.metrics.map(m => `
              <div style="background: #111111; border: 1px solid var(--border-primary); border-radius: var(--radius-sm); padding: 1.1rem 1rem;">
                <div style="font-size: 1.6rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.2rem; letter-spacing: -0.02em;">${m.value}</div>
                <div style="font-size: 0.72rem; color: var(--text-muted); font-weight: 500;">${m.label}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <h3 style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 0.65rem;">Teknologi & Fitur Inti</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 0.45rem;">
            ${data.tech.map(t => `
              <span style="font-size: 0.72rem; font-weight: 600; background: rgba(255,255,255,0.06); color: var(--text-primary); padding: 0.3rem 0.75rem; border-radius: var(--radius-full); border: 1px solid var(--border-subtle);">${t}</span>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      modalOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  // Trigger buttons for case studies
  document.querySelectorAll('[data-case-study]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // If clicking inside a gallery thumbnail item, don't trigger the modal
      if (e.target.closest('.gallery-thumb-item')) return;
      e.preventDefault();
      const key = btn.getAttribute('data-case-study');
      openCaseStudy(key);
    });
  });

  // Interactive Project Gallery Thumbnails Switcher
  document.querySelectorAll('.gallery-thumb-item').forEach(thumb => {
    thumb.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      const targetSrc = thumb.getAttribute('data-img-src');
      const targetAlt = thumb.getAttribute('data-img-alt');
      const galleryWindow = thumb.closest('.project-gallery-window');
      if (!galleryWindow) return;

      const mainImg = galleryWindow.querySelector('.gallery-main-img');
      if (mainImg && targetSrc) {
        mainImg.style.opacity = '0.3';
        mainImg.style.transform = 'scale(0.98)';
        setTimeout(() => {
          mainImg.src = targetSrc;
          mainImg.alt = targetAlt || '';
          mainImg.style.opacity = '1';
          mainImg.style.transform = 'scale(1)';
        }, 120);
      }

      galleryWindow.querySelectorAll('.gallery-thumb-item').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  // 4. Carousel Scroll-Reveal Observer
  const carouselItems = document.querySelectorAll('.carousel-item');
  if (carouselItems.length > 0) {
    const carouselObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          carouselObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    carouselItems.forEach((item, idx) => {
      item.style.transitionDelay = `${idx * 0.08}s`;
      carouselObserver.observe(item);
    });
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeMobileDrawer();
    }
  });

  // 5. Interactive FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close other FAQs
        faqItems.forEach(i => {
          if (i !== item) {
            i.classList.remove('open');
            const otherBtn = i.querySelector('.faq-question-btn');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });
        // Toggle current
        if (isOpen) {
          item.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // 6. Toast Notification for Email Copy
  const toast = document.getElementById('toast-notification');
  function showToast(message) {
    if (!toast) return;
    toast.querySelector('.toast-text').textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // Handle email copy / click
  document.querySelectorAll('.copy-email-action').forEach(el => {
    el.addEventListener('click', (e) => {
      const email = 'hello@satvhika.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email hello@satvhika.com berhasil disalin!');
      }).catch(() => {
        showToast('hello@satvhika.com');
      });
    });
  });
});
