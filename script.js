'use strict';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const safe = (v) => String(v ?? '').replace(/[&<>\"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[ch]));

const CONTENT = {
  name: 'Md. Rokon Yeamony Shafin',
  email: 'shafinahosan111@gmail.com',
  studentEmail: '252-15-447@diu.edu.bd',
  studentId: '252-15-447',
  github: 'rokon-shafin2974',
  githubUrl: 'https://github.com/rokon-shafin2974',
  linkedin: 'https://www.linkedin.com/in/md-rokon-yeamony-shafin-a51825408/',
  formspreeEndpoint: 'https://formspree.io/f/xkjgpyba',

  heroSnippets: [
    {
      file: 'huffman_compress.cpp',
      code: `// Huffman core · C++20
Node* buildHuffman(const string& data) {
  auto freq = countFrequency(data);
  priority_queue<Node*, vector<Node*>, Cmp> pq;

  for (auto& [ch, n] : freq)
    pq.push(new Node{ch, n});

  while (pq.size() > 1) {
    auto* left  = pq.top(); pq.pop();
    auto* right = pq.top(); pq.pop();
    pq.push(new Node{'\\0', left->freq + right->freq,
                     left, right});
  }
  return pq.top();  // root
}
// Property tests passed: 250 / 250`
    },
    {
      file: 'AnalysisStudio.java',
      code: `// Evaluation pipeline · Java
public class RatingService {

  public double averageFor(Long personId) {
    List<Rating> rows = repo.findByPerson(personId);
    if (rows.isEmpty()) return 0.0;

    double sum = rows.stream()
      .mapToInt(Rating::getScore)
      .sum();
    return Math.round((sum / rows.size()) * 100.0) / 100.0;
  }
  // Persisted via PostgreSQL / Neon
}`
    },
    {
      file: 'ammeter.ino',
      code: `// ADS1115 digital ammeter · Arduino Nano
#include <Adafruit_ADS1X15.h>
#include <LiquidCrystal_I2C.h>

Adafruit_ADS1115 ads;
LiquidCrystal_I2C lcd(0x27, 16, 2);
const float SHUNT = 0.10f;  // 0.1Ω

void loop() {
  int16_t raw = ads.readADC_Differential_0_1();
  float volts = ads.computeVolts(raw);
  float amps  = volts / SHUNT;

  lcd.setCursor(0, 0);
  lcd.print("I = ");
  lcd.print(amps, 3);
  lcd.print(" A");
  delay(200);
}`
    }
  ],

  education: [
    {
      period: '2025 — Present',
      stage: 'Current',
      title: 'B.Sc. in Computer Science & Engineering',
      place: 'Daffodil International University',
      location: 'Dhaka, Bangladesh',
      details: 'Student ID 252-15-447 · Currently in Semester 5. Focused on programming fundamentals, OOP, data structures, algorithms and applied software projects.',
      tags: ['CSE', 'Semester 5', 'OOP', 'DSA', 'Algorithms']
    },
    {
      period: '2021 — 2023',
      stage: 'Done',
      title: 'Higher Secondary Certificate (HSC) — Science',
      place: 'Notre Dame College',
      location: 'Dhaka Board',
      details: 'GPA 5.00. Member of Notre Dame Science Club; participated in the Annual Science Fair.',
      tags: ['Science', 'Dhaka Board', 'GPA 5.00', 'HSC']
    },
    {
      period: '2016 — 2021',
      stage: 'Done',
      title: 'Secondary School Certificate (SSC) — Science',
      place: 'Shamsul Haque Khan School and College',
      location: 'Dhaka Board',
      details: 'GPA 5.00. Science stream.',
      tags: ['Science', 'Dhaka Board', 'GPA 5.00', 'SSC']
    }
  ],

  academicResults: [
    { label: 'Current degree', value: 'B.Sc. CSE', detail: 'Daffodil International University · Semester 5' },
    { label: 'HSC', value: '5.00', detail: 'Dhaka Board · 2023 · Notre Dame College' },
    { label: 'SSC', value: '5.00', detail: 'Dhaka Board · 2021 · Shamsul Haque Khan School and College' }
  ],

  coCurricular: [
    { title: 'Part-time backup designer', organization: 'Notre Dame Science Club', detail: 'Graphic design' },
    { title: 'Part-time backup designer', organization: 'Narayanganj Student Association', detail: 'Graphic design' },
    { title: 'College festivals and programs', organization: 'Collaborative event work', detail: 'Worked with friends on several events, including National Science Fest and Brain Rain.' },
    { title: 'Associate General Secretary · Annual Science Fest', organization: 'Notre Dame Science Club · 2023', detail: 'Received Honourable Mention.' },
    { title: 'Organizer · Annual Science Fest', organization: 'Notre Dame Science Club · 2022', detail: 'Received Organizing Award.' },
    { title: 'Volunteer · Annual Science Fest', organization: 'Notre Dame Science Club · 2021', detail: 'Received Volunteer Award.' },
    { title: 'Lifetime member', organization: 'Notre Dame Science Club', detail: 'Participated in the Annual Science Fair.' }
  ],

  competitiveProgramming: [
    { platform: 'Beecrowd', handle: 'Active', value: '30+', unit: 'solved', detail: 'Continuing DSA practice' },
    { platform: 'Current focus', handle: 'DSA', value: 'Ongoing', unit: 'learning', detail: 'Data structures & algorithms' }
  ],

  showcaseStats: [
    { value: '3', suffix: '', label: 'Completed projects' },
    { value: '250', suffix: '+', label: 'Huffman property checks' },
    { value: '85', suffix: '%', label: 'Reduction on test data' },
    { value: '5', suffix: '', label: 'Programming languages explored' }
  ],

  projects: [
    {
      id: 'analysis',
      title: 'Analysis Studio',
      year: '2026',
      stage: 'Deployed / working',
      category: 'Web',
      status: 'shipped',
      summary: 'Image-based evaluation platform for structured rating workflows.',
      description: 'A DIU CSE individual project that manages people and image sets, evaluator registration/login, 1–10 ratings, per-person averages, administrative controls and export-oriented workflows. The deployed architecture uses Flask, PostgreSQL/Neon, Cloudinary and Render.',
      tags: ['Flask', 'Python', 'PostgreSQL', 'Cloudinary', 'Render', 'HTML', 'CSS', 'JavaScript'],
      metrics: [['1–10', 'Rating scale'], ['Individual', 'CSE project'], ['Cloudinary', 'Persistent media']],
      links: [['Live app', 'https://shafin-face-rater.onrender.com/login.html'], ['GitHub profile', 'https://github.com/rokon-shafin2974']],
      gallery: [['assets/projects/analysis-login.jpg', 'Login interface'], ['assets/projects/analysis-admin-dashboard.jpg', 'Admin dashboard']]
    },
    {
      id: 'huffman',
      title: 'Huffman Hide & Compress',
      year: '2026',
      stage: 'Deployed / working',
      category: 'Algorithms',
      status: 'shipped',
      summary: 'Huffman compression workbench with visualization, secure packages and steganography.',
      description: 'A larger engineering implementation around deterministic byte-level Huffman coding. Includes C++20 encode/decode, strict validation, animated tree construction, compression analytics, .huff archives, browser-local AES-GCM/PBKDF2 HMSG packages, RGB-LSB PNG steganography, Batch Lab, Secure Vault and learning workflows.',
      tags: ['C++20', 'Huffman', 'Algorithms', 'Data Structures', 'JavaScript', 'Web Crypto', 'CMake'],
      metrics: [['250', 'Property tests passed'], ['85%', 'Best payload reduction'], ['C++20', 'Core engine']],
      links: [['Live app', 'https://huffman-hide-shafin.onrender.com/#home'], ['GitHub', 'https://github.com/rokon-shafin2974/huffman-hide-final']],
      gallery: [
        ['assets/projects/huffman-home.jpg', 'Main dashboard'],
        ['assets/projects/huffman-visualizer.jpg', 'Huffman tree visualizer'],
        ['assets/projects/huffman-encrypt.jpg', 'Secure file workflow'],
        ['assets/projects/huffman-secure-vault.jpg', 'Secure Vault'],
        ['assets/projects/huffman-reports.jpg', 'Reports & exports'],
        ['assets/projects/huffman-admin-accounts.jpg', 'Admin accounts']
      ]
    },
    {
      id: 'electronics',
      title: 'Arduino & Electronics Experiments',
      year: '2026',
      stage: 'Incomplete / hardware track',
      category: 'Hardware',
      status: 'progress',
      summary: 'Hands-on experiments with Bluetooth, relays, sensors and measurement circuits.',
      description: 'An evolving hardware learning track including Arduino Uno/Nano, HC-05/HC-06 Bluetooth communication, relay control and sensor/electronics experiments. Individual ideas are kept separate from the completed ADS1115 Digital Ammeter project.',
      tags: ['Arduino', 'HC-05', 'HC-06', 'Relay', 'Electronics'],
      metrics: [['DIY', 'Hardware'], ['Bluetooth', 'HC-05/HC-06'], ['Status', 'Incomplete']],
      links: []
    },
    {
      id: 'ammeter',
      title: 'ADS1115 Digital Ammeter',
      year: '2026',
      stage: 'Completed project',
      category: 'Hardware',
      status: 'shipped',
      summary: 'Completed digital current-measurement project built around an ADS1115 ADC and shunt resistor.',
      description: 'A completed hardware project using an Arduino Nano, ADS1115 ADC, 16×2 I2C LCD and a 0.1Ω shunt resistor to build a digital ammeter. It represents hands-on circuit design, ADC measurement, display integration and practical electronics work.',
      tags: ['Arduino Nano', 'ADS1115', 'I2C LCD', '0.1Ω Shunt', 'Electronics'],
      metrics: [['Completed', 'Project status'], ['ADS1115', 'ADC'], ['16×2', 'I2C display']],
      links: []
    },
    {
      id: 'productivity',
      title: 'Personal Productivity App',
      year: '2026',
      stage: 'Planned / not built',
      category: 'Apps',
      status: 'planned',
      summary: 'Planned personal app for academic, personal and skill-development tracking.',
      description: 'Planned only — not presented as a finished application. The concept combines todos, reminders, university routine, academic and skill tasks, monthly mini-project assignments, progress history and a database-backed personal workflow.',
      tags: ['Python', 'HTML', 'CSS', 'Database', 'Productivity'],
      metrics: [['Planned', 'Status'], ['Academic', 'Routine'], ['Growth', 'Tracking']],
      links: []
    },
    {
      id: 'assistant',
      title: 'Personal AI Assistant',
      year: '2026',
      stage: 'Planned / not built',
      category: 'AI',
      status: 'planned',
      summary: 'Planned cross-platform local AI assistant for Windows and Fedora.',
      description: 'Planned only — not built as a finished assistant. The concept explores local Ollama models, text/voice commands, modern UI and OS-level actions across Windows and Fedora.',
      tags: ['Python', 'Ollama', 'Windows', 'Fedora', 'Voice', 'Automation'],
      metrics: [['Planned', 'Status'], ['Local', 'AI direction'], ['Cross-platform', 'Goal']],
      links: []
    }
  ],

  skills: [
    { group: 'Programming', items: ['C', 'C++', 'Java', 'Python', 'JavaScript'] },
    { group: 'Computer Science', items: ['OOP', 'Data Structures', 'Algorithms', 'Complexity', 'Problem Solving'] },
    { group: 'Web & backend', items: ['HTML', 'CSS', 'Flask', 'PostgreSQL', 'REST-style APIs'] },
    { group: 'Tools & systems', items: ['Git/GitHub', 'Linux', 'Fedora', 'Windows', 'CMake', 'Ollama'] },
    { group: 'Design', items: ['Graphic design'] },
    { group: 'Hardware', items: ['Arduino', 'HC-05/HC-06', 'Relays', 'ADS1115', 'Electronics'] },
    { group: 'Deployment', items: ['Render', 'Neon', 'Cloudinary', 'GitHub'] }
  ]
};

let activeFilter = 'All';
let query = '';
let overlayReturnFocus = null;

function storageGet(k, d){ try { return localStorage.getItem(k) ?? d; } catch { return d; } }
function storageSet(k, v){ try { localStorage.setItem(k, v); } catch {} }
function toast(msg){
  const t = $('#toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => t.classList.remove('show'), 2600);
}

function renderShowcase(){
  const host = $('#showcaseStats');
  if (!host) return;
  host.innerHTML = CONTENT.showcaseStats.map(s => `
    <div class="showcase-stat">
      <b>${safe(s.value)}<span>${safe(s.suffix)}</span></b>
      <small>${safe(s.label)}</small>
    </div>
  `).join('');
}

function renderFilters(){
  const host = $('#filters');
  if (!host) return;
  const cats = ['All', ...new Set(CONTENT.projects.map(p => p.category))];
  host.innerHTML = cats.map(f => {
    const count = f === 'All' ? CONTENT.projects.length : CONTENT.projects.filter(p => p.category === f).length;
    return `<button type="button" class="filter ${activeFilter === f ? 'active' : ''}" data-filter="${safe(f)}" aria-pressed="${activeFilter === f}">${safe(f)} <b>${count}</b></button>`;
  }).join('');
}

function renderProjects(){
  const grid = $('#projectGrid');
  if (!grid) return;
  const q = query.toLowerCase();
  const list = CONTENT.projects.filter(p =>
    (activeFilter === 'All' || p.category === activeFilter) &&
    (`${p.title} ${p.summary} ${p.description} ${p.tags.join(' ')}`.toLowerCase().includes(q))
  );
  grid.innerHTML = list.length ? list.map(p => `
    <article class="project-card ${p.status}">
      ${p.gallery?.[0] ? `<div class="project-card-image"><img src="${safe(p.gallery[0][0])}" alt="${safe(p.gallery[0][1])}" loading="lazy"></div>` : `<div class="project-card-art ${safe(p.status)}" aria-hidden="true"><span>${safe(p.category)}</span><strong>${safe(p.title)}</strong><small>${safe(p.year)} · project notes</small></div>`}
      <div class="project-top">
        <span class="status-pill ${p.status}"><i></i>${safe(p.stage)}</span>
        <span class="year-label">${safe(p.year)}</span>
      </div>
      <h3>${safe(p.title)}</h3>
      <p>${safe(p.summary)}</p>
      <div class="tag-list">${p.tags.slice(0, 4).map(t => `<span>${safe(t)}</span>`).join('')}</div>
      <div class="project-card-actions">
        <button type="button" class="project-details" data-project="${p.id}" aria-label="Open case study for ${safe(p.title)}">Case study <span>↗</span></button>
        ${p.links.slice(0, 2).map(link => `<a href="${safe(link[1])}" target="_blank" rel="noopener noreferrer">${safe(link[0])} ↗</a>`).join('')}
      </div>
    </article>
  `).join('') : '<div class="empty-state">No projects match this filter.</div>';

  const rc = $('#resultCount');
  if (rc) rc.textContent = `Showing ${list.length} of ${CONTENT.projects.length} projects`;

  $$('[data-project]', grid).forEach(el => {
    el.addEventListener('click', () => openProject(el.dataset.project));
  });
}

function openProject(id){
  const p = CONTENT.projects.find(x => x.id === id);
  if (!p) return;
  const gallery = p.gallery?.length ? `<div class="modal-gallery">${p.gallery.map(g =>
    `<figure><img src="${safe(g[0])}" alt="${safe(g[1])}" loading="lazy"><figcaption>${safe(g[1])}</figcaption></figure>`
  ).join('')}</div>` : '';

  $('#projectModalContent').innerHTML = `
    <p class="eyebrow">${safe(p.category)} · ${safe(p.year)}</p>
    <h2 id="projectModalTitle">${safe(p.title)}</h2>
    <span class="status-pill ${p.status}"><i></i>${safe(p.stage)}</span>
    <p class="modal-description">${safe(p.description)}</p>
    <div class="modal-metrics">${p.metrics.map(m =>
      `<div><b>${safe(m[0])}</b><span>${safe(m[1])}</span></div>`
    ).join('')}</div>
    ${gallery}
    <div class="modal-tags">${p.tags.map(t => `<span>${safe(t)}</span>`).join('')}</div>
    <div class="modal-actions">
      ${p.links.map(l => `<a class="button primary" href="${safe(l[1])}" target="_blank" rel="noopener noreferrer">${safe(l[0])} ↗</a>`).join('')}
      <button class="button secondary" data-close type="button">Close</button>
    </div>
  `;
  $('#projectModal').classList.remove('hidden');
  overlayReturnFocus = document.activeElement;
  document.body.classList.add('locked');
  $('.modal-close')?.focus();
}

function closeOverlays(){
  const wasOpen = $$('.overlay').some(x => !x.classList.contains('hidden'));
  $$('.overlay').forEach(x => x.classList.add('hidden'));
  document.body.classList.remove('locked');
  if (wasOpen && overlayReturnFocus instanceof HTMLElement) overlayReturnFocus.focus();
  overlayReturnFocus = null;
}

function initProjects(){
  renderFilters();
  renderProjects();
  const f = $('#filters');
  if (f) f.addEventListener('click', e => {
    const b = e.target.closest('[data-filter]');
    if (!b) return;
    activeFilter = b.dataset.filter;
    renderFilters();
    renderProjects();
    [...f.querySelectorAll('[data-filter]')].find(x => x.dataset.filter === activeFilter)?.focus();
  });
  const search = $('#projectSearch');
  if (search) search.addEventListener('input', e => {
    query = e.target.value;
    renderProjects();
  });
}

function initTheme(){
  const btn = $('#themeBtn');
  if (!btn) return;
  const saved = storageGet('portfolio-theme', 'dark');
  document.body.classList.toggle('light', saved === 'light');
  const sync = () => {
    const light = document.body.classList.contains('light');
    btn.setAttribute('aria-label', `Switch to ${light ? 'dark' : 'light'} theme`);
    btn.setAttribute('aria-pressed', String(light));
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', light ? '#f2f1eb' : '#0e131b');
  };
  sync();
  btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    storageSet('portfolio-theme', document.body.classList.contains('light') ? 'light' : 'dark');
    sync();
  });
}

function initNav(){
  const menu = $('#menuBtn'), nav = $('#nav');
  if (!menu || !nav) return;
  const closeMenu = () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open menu');
  };
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  $$('#nav a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  document.addEventListener('click', e => {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !menu.contains(e.target)) closeMenu();
  });

  const sections = $$('#about, #education, #work, #playground, #skills, #contact');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      $$('#nav a').forEach(link => {
        if (link.getAttribute('href') === `#${visible.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0, .25, .5] });
    sections.forEach(section => observer.observe(section));
  }
}

function initReveal(){
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    $$('.reveal').forEach(x => x.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  }), { threshold: 0.06 });
  $$('.reveal').forEach(x => io.observe(x));
}

function initScroll(){
  const update = () => {
    $('#header')?.classList.toggle('scrolled', scrollY > 20);
    const max = document.documentElement.scrollHeight - innerHeight;
    document.documentElement.style.setProperty('--scroll-progress', `${max > 0 ? (scrollY / max) * 100 : 0}%`);
  };
  addEventListener('scroll', update, { passive: true });
  update();
}

function initVideoCV(){
  const section = $('#videoCv');
  const source = section?.dataset.videoSrc?.trim();
  const pastedValue = section?.dataset.videoUrl?.trim();
  // Accept either a plain URL or a Markdown link copied from chat.
  const hostedUrl = pastedValue?.match(/\]\((https?:\/\/[^)\s]+)\)/)?.[1] || pastedValue;
  if (!section || (!source && !hostedUrl)) return;
  const frame = document.createElement('div');
  frame.className = 'video-frame';
  if (hostedUrl) {
    let videoId = '';
    try {
      const url = new URL(hostedUrl);
      if (url.hostname === 'youtu.be') videoId = url.pathname.split('/').filter(Boolean)[0] || '';
      if (['youtube.com', 'www.youtube.com', 'm.youtube.com'].includes(url.hostname)) {
        if (url.pathname === '/watch') videoId = url.searchParams.get('v') || '';
        else if (url.pathname.startsWith('/embed/')) videoId = url.pathname.split('/')[2] || '';
      }
    } catch {}
    if (!/^[A-Za-z0-9_-]{11}$/.test(videoId)) return;
    const player = document.createElement('iframe');
    player.src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
    player.title = 'Video résumé of Md. Rokon Yeamony Shafin';
    player.loading = 'lazy';
    player.referrerPolicy = 'strict-origin-when-cross-origin';
    player.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    player.allowFullscreen = true;
    frame.append(player);
    section.replaceChildren(frame);
    return;
  }
  const video = document.createElement('video');
  video.controls = true;
  video.preload = 'metadata';
  video.playsInline = true;
  video.setAttribute('aria-label', 'Video résumé');
  const videoSource = document.createElement('source');
  videoSource.src = source;
  video.append(videoSource);
  frame.append(video);
  section.replaceChildren(frame);
}

function highlight(line){
  let s = safe(line);
  s = s.replace(/(\/\/[^\n]*)/g, '<span class="tok-com">$1</span>');
  s = s.replace(/(#include[^\n]*)/g, '<span class="tok-kw">$1</span>');
  s = s.replace(/&quot;([^&]*)&quot;/g, '<span class="tok-str">&quot;$1&quot;</span>');
  s = s.replace(/\b(\d+(?:\.\d+)?f?)\b/g, '<span class="tok-num">$1</span>');
  s = s.replace(/\b(void|class|public|return|if|for|while|const|auto|new|double|float|int|string|Math|sizeof|true|false|nullptr|import|namespace|struct|vector|priority_queue|List|Rating|RatingService)\b/g, '<span class="tok-kw">$1</span>');
  return s;
}

async function runHeroStage(){
  const code = $('#stageCode');
  const fileLabel = $('#stageFile');
  if (!code || !fileLabel) return;

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const s = CONTENT.heroSnippets[0];
    fileLabel.textContent = s.file;
    code.innerHTML = highlight(s.code);
    return;
  }

  let i = 0;
  while (true) {
    const s = CONTENT.heroSnippets[i % CONTENT.heroSnippets.length];
    fileLabel.textContent = s.file;
    code.innerHTML = highlight(s.code);
    await new Promise(r => setTimeout(r, 5500));
    i++;
  }
}

function initTicker(){
  const el = $('#tickerTrack');
  if (!el) return;
  const items = ['C++', 'Java', 'C', 'Python', 'Data Structures', 'Algorithms', 'OOP',
    'Web Development', 'Linux', 'Ollama', 'Arduino', 'Electronics', 'Git/GitHub', 'Problem Solving'];
  el.innerHTML = [...items, ...items].map(x => `<span>${safe(x)} <i>✦</i></span>`).join('');
}

async function copyText(text){
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }
  const ta = document.createElement('textarea');
  ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  const ok = document.execCommand('copy');
  ta.remove();
  return ok;
}

function buildHuffman(text){
  const bytes = new TextEncoder().encode(text);
  if (!bytes.length) return null;

  const frequencies = new Map();
  for (const byte of bytes) frequencies.set(byte, (frequencies.get(byte) || 0) + 1);
  let order = 0;
  const queue = [...frequencies].map(([byte, frequency]) => ({
    byte, frequency, minByte: byte, order: order++, left: null, right: null
  }));
  const compare = (a, b) => a.frequency - b.frequency || a.minByte - b.minByte || a.order - b.order;

  while (queue.length > 1) {
    queue.sort(compare);
    const left = queue.shift();
    const right = queue.shift();
    queue.push({
      byte: null, frequency: left.frequency + right.frequency,
      minByte: Math.min(left.minByte, right.minByte), order: order++, left, right
    });
  }

  const root = queue[0];
  const codes = new Map();
  const visit = (node, prefix) => {
    if (node.byte !== null) {
      codes.set(node.byte, prefix || '0');
      return;
    }
    visit(node.left, prefix + '0');
    visit(node.right, prefix + '1');
  };
  visit(root, '');
  const bits = Array.from(bytes, byte => codes.get(byte)).join('');
  return { bytes, frequencies, codes, root, bits };
}

function decodeHuffmanBits(bits, root){
  const output = [];
  if (root.byte !== null) {
    if ([...bits].some(bit => bit !== '0')) throw new Error('Invalid single-symbol bitstream.');
    for (let i = 0; i < bits.length; i++) output.push(root.byte);
  } else {
    let node = root;
    for (const bit of bits) {
      if (bit !== '0' && bit !== '1') throw new Error('Bitstream contains a character other than 0 or 1.');
      node = bit === '0' ? node.left : node.right;
      if (!node) throw new Error('Bitstream does not match this Huffman tree.');
      if (node.byte !== null) {
        output.push(node.byte);
        node = root;
      }
    }
    if (node !== root) throw new Error('Bitstream ends in the middle of a code.');
  }
  return new TextDecoder('utf-8', { fatal: true }).decode(Uint8Array.from(output));
}

function initHuffmanPlayground(){
  const input = $('#huffmanInput');
  const table = $('#huffmanCodes');
  const bitstream = $('#huffmanBitstream');
  const copyButton = $('#copyBits');
  const decodeButton = $('#decodeBits');
  if (!input || !table || !bitstream || !copyButton || !decodeButton) return;

  let current = null;
  const byteName = byte => {
    if (byte === 32) return 'SPACE';
    if (byte === 9) return 'TAB';
    if (byte === 10) return 'LF';
    if (byte === 13) return 'CR';
    if (byte >= 33 && byte <= 126 && byte !== 39 && byte !== 92) return `'${String.fromCharCode(byte)}'`;
    return `0x${byte.toString(16).padStart(2, '0').toUpperCase()}`;
  };
  const render = () => {
    const text = input.value;
    current = buildHuffman(text);
    const rawBytes = current?.bytes.length || 0;
    $('#inputByteCount').textContent = `${rawBytes} ${rawBytes === 1 ? 'byte' : 'bytes'}`;
    $('#rawBytes').textContent = `${rawBytes} B`;
    $('#encodedBits').textContent = `${current?.bits.length || 0} bits`;
    $('#symbolCount').textContent = `${current?.frequencies.size || 0} ${current?.frequencies.size === 1 ? 'symbol' : 'symbols'}`;
    $('#decodedPanel').hidden = true;
    $('#decodeStatus').textContent = '';
    copyButton.disabled = !current;
    decodeButton.disabled = !current;

    if (!current) {
      $('#payloadChange').textContent = '—';
      table.innerHTML = '<tr><td colspan="3">Enter a message to build the tree.</td></tr>';
      bitstream.textContent = 'Your encoded bits will appear here.';
      return;
    }

    const change = (1 - current.bits.length / (rawBytes * 8)) * 100;
    $('#payloadChange').textContent = change > 0.05 ? `${change.toFixed(1)}% smaller` : change < -0.05 ? `${Math.abs(change).toFixed(1)}% larger` : 'Same bit count';
    table.innerHTML = [...current.frequencies.entries()].sort((a, b) => a[0] - b[0]).map(([byte, count]) =>
      `<tr><td>${safe(byteName(byte))}</td><td>${count}</td><td>${current.codes.get(byte)}</td></tr>`
    ).join('');
    bitstream.textContent = current.bits.match(/.{1,8}/g)?.join(' ') || '';
  };

  input.addEventListener('input', render);
  $$('[data-sample]').forEach(button => button.addEventListener('click', () => {
    input.value = button.dataset.sample;
    render();
    input.focus();
  }));
  copyButton.addEventListener('click', async () => {
    if (!current) return;
    try {
      if (await copyText(current.bits)) toast('Encoded bits copied');
      else toast('Copy unavailable');
    } catch { toast('Copy unavailable'); }
  });
  decodeButton.addEventListener('click', () => {
    if (!current) return;
    try {
      $('#decodedText').textContent = decodeHuffmanBits(current.bits, current.root);
      $('#decodedPanel').hidden = false;
      $('#decodeStatus').textContent = 'Decoded successfully';
    } catch (error) {
      $('#decodeStatus').textContent = error.message;
    }
  });

  input.value = 'BANANA_BANDANA';
  render();
}

function initCopy(){
  const b = $('#copyEmail');
  if (!b) return;
  b.addEventListener('click', async e => {
    try {
      if (await copyText(e.currentTarget.dataset.copy)) toast('Email copied');
    } catch { toast('Copy unavailable'); }
  });
}

function formData(){
  const f = new FormData($('#contactForm'));
  return {
    name: String(f.get('name') || '').trim(),
    email: String(f.get('email') || '').trim(),
    message: String(f.get('message') || '').trim()
  };
}

function openMailClient(data){
  const subject = encodeURIComponent(`Portfolio message from ${data.name}`);
  const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`);
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTENT.email)}&su=${subject}&body=${body}`, '_blank', 'noopener');
}

function initContact(){
  const form = $('#contactForm');
  const status = $('#formStatus');
  if (!form || !status) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const d = formData();
    if (d.name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) || d.message.length < 10) {
      status.textContent = 'Please enter a valid name, email and a message of at least 10 characters.';
      status.style.color = 'var(--danger)';
      return;
    }
    status.textContent = 'Sending…';
    status.style.color = '';
    try {
      const res = await fetch(CONTENT.formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      });
      if (res.ok) {
        status.textContent = 'Message sent — thanks! I will reply soon.';
        status.style.color = 'var(--green)';
        form.reset();
        toast('Message sent ✓');
      } else {
        const data = await res.json().catch(() => ({}));
        status.textContent = data?.errors?.[0]?.message || 'Something went wrong. Try opening Gmail instead.';
        status.style.color = 'var(--danger)';
      }
    } catch {
      status.textContent = 'Network issue. Use "Open Gmail" instead.';
      status.style.color = 'var(--danger)';
    }
  });

  $('#openGmailBtn')?.addEventListener('click', () => {
    const d = formData();
    if (d.name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) || d.message.length < 10) {
      status.textContent = 'Fill in your name, email and message first.';
      status.style.color = 'var(--danger)';
      return;
    }
    status.textContent = 'Opening Gmail compose…';
    status.style.color = '';
    openMailClient(d);
  });

  $('#printBtn')?.addEventListener('click', () => window.print());
}

async function githubData(){
  const status = $('#githubStatus');
  const stats = $('#githubStats');
  if (!status || !stats) return;
  try {
    const r = await fetch(`https://api.github.com/users/${CONTENT.github}`, { headers: { Accept: 'application/vnd.github+json' } });
    if (!r.ok) throw new Error();
    const d = await r.json();
    let stars = 0;
    const rr = await fetch(`https://api.github.com/users/${CONTENT.github}/repos?per_page=100`, { headers: { Accept: 'application/vnd.github+json' } });
    if (rr.ok) {
      const repos = await rr.json();
      stars = repos.reduce((n, x) => n + (x.stargazers_count || 0), 0);
    }
    status.textContent = 'Public profile data loaded live from GitHub.';
    stats.innerHTML = `
      <div><b>${d.public_repos}</b><span>Repos</span></div>
      <div><b>${stars}</b><span>Stars</span></div>
      <div><b>${d.followers}</b><span>Followers</span></div>
      <div><b>${d.following}</b><span>Following</span></div>
    `;
  } catch {
    status.textContent = 'GitHub stats could not be loaded right now. The profile link still works.';
    stats.innerHTML = '<div><b>↗</b><span>GitHub</span></div><div><b>—</b><span>Offline</span></div><div><b>—</b><span>Offline</span></div><div><b>—</b><span>Offline</span></div>';
  }
}

function initProfileFallback(){
  const img = $('#profilePhoto');
  if (!img) return;
  img.addEventListener('error', () => {
    img.src = 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 760"><rect width="600" height="760" fill="#171f2b"/><text x="300" y="360" text-anchor="middle" font-family="Arial" font-size="120" fill="#ff8058">RS</text><text x="300" y="430" text-anchor="middle" font-family="Arial" font-size="24" fill="#b0bac6">Md. Rokon Yeamony Shafin</text></svg>`);
  });
}

function renderEducation(){
  const tl = document.getElementById('eduTimeline');
  if (tl && Array.isArray(CONTENT.education)) {
    tl.innerHTML = CONTENT.education.map(e => `
      <article>
        <div class="edu-dot ${e.stage === 'Current' ? 'current' : e.stage === 'Done' ? 'done' : ''}"></div>
        <div>
          <span class="edu-period">${safe(e.period)}</span>
          <h3>${safe(e.title)}</h3>
          <div class="edu-place">${safe(e.place)} · ${safe(e.location)}</div>
          <p>${safe(e.details)}</p>
          ${Array.isArray(e.tags) && e.tags.length ? `<div class="edu-tags">${e.tags.map(t => `<span>${safe(t)}</span>`).join('')}</div>` : ''}
        </div>
      </article>
    `).join('');
  }
  const rg = document.getElementById('academicResults');
  if (rg && Array.isArray(CONTENT.academicResults)) {
    rg.innerHTML = CONTENT.academicResults.map(r => `
      <div>
        <small>${safe(r.label)}</small>
        <b>${safe(r.value)}</b>
        <em>${safe(r.detail)}</em>
      </div>
    `).join('');
  }
}

function renderCredentials(){
  const list = $('#certList');
  const count = $('#certCount');
  if (list && Array.isArray(CONTENT.coCurricular)) {
    if (count) count.textContent = `${CONTENT.coCurricular.length} experiences`;
    list.innerHTML = CONTENT.coCurricular.map((activity, index) => `
        <div class="cert-item">
          <div class="cert-badge">${String(index + 1).padStart(2, '0')}</div>
          <div class="cert-body">
            <h4>${safe(activity.title)}</h4>
            <span class="issuer">${safe(activity.organization)}</span>
            <p class="activity-detail">${safe(activity.detail)}</p>
          </div>
        </div>
      `).join('');
  }
  const grid = $('#cpGrid');
  if (grid && Array.isArray(CONTENT.competitiveProgramming)) {
    grid.innerHTML = CONTENT.competitiveProgramming.map(c => `
      <div class="cp-card">
        <small>${safe(c.platform)}</small>
        <b>${safe(c.value)}</b>
        <span>${safe(c.handle)} · ${safe(c.unit)}</span>
        <em>${safe(c.detail)}</em>
      </div>
    `).join('');
  }
}

function renderSkills(){
  const host = $('#skillsGrid');
  if (!host || !Array.isArray(CONTENT.skills)) return;
  host.innerHTML = CONTENT.skills.map(s => `
    <article>
      <h3>${safe(s.group)}</h3>
      <div>${s.items.map(i => `<span>${safe(i)}</span>`).join('')}</div>
    </article>
  `).join('');
}

function init(){
  document.addEventListener('click', e => {
    if (e.target.matches('[data-close]') || e.target.id === 'projectModal') closeOverlays();
  });
  document.addEventListener('keydown', e => {
    const modal = $('#projectModal');
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) closeOverlays();
    if (e.key !== 'Tab' || !modal || modal.classList.contains('hidden')) return;
    const items = $$('button, a[href], input, textarea, [tabindex]:not([tabindex="-1"])', modal).filter(x => !x.disabled && x.offsetParent !== null);
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  $('#year').textContent = new Date().getFullYear();

  initProjects();
  initHuffmanPlayground();
  initTheme();
  initNav();
  initReveal();
  initScroll();
  initTicker();
  initCopy();
  initContact();
  initProfileFallback();
  initVideoCV();
  githubData();
  renderShowcase();
  renderEducation();
  renderCredentials();
  renderSkills();
  runHeroStage();
}

init();
