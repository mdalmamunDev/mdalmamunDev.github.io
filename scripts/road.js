(function () {

  /* ---------- Timeline Data ---------- */
  const TIMELINE = [
    { type: 'project', key: 'wms', y: 0.05, side: 'left' },
    { type: 'project', key: 'auto-revive', y: 0.08, side: 'right' },
    { type: 'master', date: '04/2025', label: 'Join Betopia', color: '#10b981', y: 0.14, side: 'right' },
    // { type: 'master', date: '04/2025', label: 'End TMSS Internship', color: '#f97316', y: 0.20, side: 'left' },
    { type: 'project', key: 'file-manager', y: 0.26, side: 'left' },
    { type: 'project', key: 'skill-syntax', y: 0.31, side: 'right' },
    { type: 'master', date: '06/2024', label: 'Join TMSS Intern', color: '#facc15', y: 0.37, side: 'left' },
    { type: 'project', key: 'time-bridge', y: 0.43, side: 'right' },
    { type: 'project', key: 'fun-tan', y: 0.48, side: 'left' },
    { type: 'project', key: 'fashion-bazaar', y: 0.52, side: 'right' },
    { type: 'project', key: 'dream-dwell', y: 0.56, side: 'left' },
    { type: 'project', key: 'am-play-web', y: 0.60, side: 'right' },
    { type: 'master', date: '09/2020', label: 'Start CST Education', color: '#a78bfa', y: 0.64, side: 'right' },
    { type: 'project', key: 'am-play', y: 0.69, side: 'left' },
    { type: 'project', key: 'tisi-aircraft', y: 0.73, side: 'right' },
    { type: 'project', key: 'contact', y: 0.76, side: 'left' },
    { type: 'project', key: 'unit-converter', y: 0.79, side: 'right' },
    { type: 'project', key: 'programmers-villa', y: 0.83, side: 'left' },
    { type: 'master', date: '2018', label: 'SSC Complete', color: '#60a5fa', y: 0.88, side: 'left' },
    { type: 'master', date: '08/2002', label: 'The Beginning', color: '#f472b6', y: 1.00, side: 'right' },
  ];

  /* Map master points for theme-color logic (only the ones with theme color) */
  const THEME_MASTERS = TIMELINE.filter(t => t.type === 'master').reverse(); // bottom→top order for "passed" logic

  /* Accent colors in order of traversal (top → bottom = present → past) */
  const ACCENT_SEQUENCE = [
    { before: 0.08, color: 'rgba(255,255,255,.55)', glow: 'rgba(255,255,255,.04)' },
    { before: 0.20, color: '#10b981', glow: 'rgba(16,185,129,.12)' },
    { before: 0.37, color: '#f97316', glow: 'rgba(249,115,22,.12)' },
    { before: 0.64, color: '#facc15', glow: 'rgba(250,204,21,.1)' },
    { before: 1.01, color: '#a78bfa', glow: 'rgba(167,139,250,.12)' },
  ];

  /* Build project lookup from projects array */
  const projMap = {};
  if (typeof projects !== 'undefined') {
    projects.forEach(p => { projMap[p.key] = p; });
  }

  /* ---------- DOM refs ---------- */
  const section = document.getElementById('road-journey');
  const sticky = document.getElementById('rjSticky');
  const road = document.getElementById('rjRoad');
  const tracker = document.getElementById('rjTracker');
  const nodesEl = document.getElementById('rjNodes');
  const detailEl = document.getElementById('rjDetail');
  const ambientEl = document.getElementById('rjAmbient');
  const progressEl = document.getElementById('rjProgressBar');
  const hintEl = document.getElementById('rjScrollHint');

  /* ---------- Set section height (2px per timeline unit * viewport height) ---------- */
  const SCROLL_FACTOR = 6; // 6× viewport height total scroll
  function setHeight() {
    section.style.height = (window.innerHeight * SCROLL_FACTOR) + 'px';
  }
  setHeight();
  window.addEventListener('resize', setHeight);

  /* ---------- Render timeline nodes ---------- */
  function imgSrc(key) {
    const p = projMap[key];
    if (!p) return 'projects/def.png';
    return p.image ? `projects/${key}/${p.image}` : 'projects/def.png';
  }

  TIMELINE.forEach((item, idx) => {
    if (item.type === 'master') {
      const el = document.createElement('div');
      el.className = 'rj-master';
      el.id = `rjM${idx}`;
      el.style.cssText = `top:${item.y * 100}%; color:${item.color}`;

      const infoSide = item.side === 'right' ? 'right' : 'left';
      const dotStyle = `border-color:${item.color}; color:${item.color}`;

      el.innerHTML = `
                ${infoSide === 'right'
          ? `<div class="rj-master-dot" style="${dotStyle}"></div>`
          : ``}
                <div class="rj-master-info ${infoSide}" style="--mp-color:${item.color}">
                    <span class="rj-master-date">${item.date}</span>
                    <span class="rj-master-label">${item.label}</span>
                </div>
                ${infoSide === 'left'
          ? `<div class="rj-master-dot" style="${dotStyle}"></div>`
          : ``}
            `;
      road.appendChild(el);

    } else if (item.type === 'project') {
      const p = projMap[item.key];
      if (!p) return;

      const el = document.createElement('div');
      el.className = `rj-node ${item.side}`;
      el.id = `rjN${idx}`;
      /* Position relative to the SCENE (full width), vertically matching road y */
      el.style.cssText = `top: calc(${item.y * 100}%); transform: translateY(-50%);`;
      el.dataset.key = item.key;
      el.dataset.side = item.side;

      el.innerHTML = `
                <div class="rj-node-junction"></div>
                <div class="rj-node-line"></div>
                <div class="rj-node-card">
                    <img class="rj-node-thumb" src="${imgSrc(item.key)}" alt="${p.name}"
                         onerror="this.src='projects/def.png'">
                    <span class="rj-node-name">${p.name}</span>
                </div>
            `;

      /* hover / click */
      el.addEventListener('mouseenter', () => showDetail(item.key, item.side, el));
      el.addEventListener('mouseleave', () => { if (!pinnedKey) clearDetail(); });
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        if (pinnedKey === item.key) { pinnedKey = null; clearDetail(); }
        else { pinnedKey = item.key; showDetail(item.key, item.side, el); }
      });

      /* Append to scene directly so left/right positions are relative to full width */
      document.getElementById('rjScene').appendChild(el);
    }
  });

  /* ---------- Detail card ---------- */
  let pinnedKey = null;
  let currentDetailKey = null;

  function showDetail(key, side, nodeEl) {
    const p = projMap[key];
    if (!p || currentDetailKey === key) return;
    currentDetailKey = key;

    const panelSide = side === 'right' ? 'right-side' : 'left-side';
    detailEl.className = `rj-detail-panel ${panelSide}`;

    /* Position detail panel vertically aligned with node */
    const sceneRect = document.getElementById('rjScene').getBoundingClientRect();
    const nodeRect = nodeEl.getBoundingClientRect();
    let topPx = nodeRect.top - sceneRect.top - 60;
    topPx = Math.max(8, Math.min(topPx, sceneRect.height - 280));
    detailEl.style.top = topPx + 'px';

    const TYPE_ANDROID = 1;
    const viewLabel = p.type === TYPE_ANDROID ? 'APK' : 'View';

    detailEl.innerHTML = `
            <img class="rj-detail-img" src="${imgSrc(key)}" alt="${p.name}"
                 onerror="this.style.display='none'">
            <div class="rj-detail-body">
                <div class="rj-detail-name">${p.name}</div>
                <div class="rj-detail-stack">${p.duration || ''}</div>
                <div class="rj-detail-desc">${p.description || ''}</div>
                <div class="rj-detail-btns">
                    ${p.repo ? `<a href="${p.repo}" target="_blank" class="rj-detail-btn gh">GitHub</a>` : ''}
                    ${p.link ? `<a href="${p.link}" target="_blank" class="rj-detail-btn view">${viewLabel}</a>` : ''}
                    ${p.about ? `<a href="project.html?key=${key}" class="rj-detail-btn more">More →</a>` : ''}
                </div>
            </div>
        `;

    requestAnimationFrame(() => {
      detailEl.classList.add('visible');
    });
  }

  function clearDetail() {
    currentDetailKey = null;
    detailEl.classList.remove('visible');
  }

  document.addEventListener('click', () => { pinnedKey = null; clearDetail(); });

  /* ---------- Scroll handler ---------- */
  let currentAccentIdx = 0;
  let activeNodeEl = null;
  let scrollRAF = null;

  function onScroll() {
    if (scrollRAF) cancelAnimationFrame(scrollRAF);
    scrollRAF = requestAnimationFrame(update);
  }

  function update() {
    const sTop = section.offsetTop;
    const sH = section.offsetHeight;
    const winH = window.innerHeight;
    const rawProg = (window.scrollY - sTop) / (sH - winH);
    const prog = Math.max(0, Math.min(1, rawProg));

    /* Move tracker */
    tracker.style.top = (prog * 100) + '%';

    /* Move ambient glow */
    if (ambientEl) {
      ambientEl.style.top = (prog * 100) + '%';
      ambientEl.style.transform = `translateX(-50%) translateY(-50%)`;
    }

    /* Progress bar */
    if (progressEl) progressEl.style.width = (prog * 100) + '%';

    /* Hide scroll hint after first scroll */
    if (prog > 0.02 && hintEl) hintEl.classList.add('hidden');

    /* Determine accent color based on position */
    let accentColor = ACCENT_SEQUENCE[0].color;
    let accentGlow = ACCENT_SEQUENCE[0].glow;
    for (let i = 0; i < ACCENT_SEQUENCE.length; i++) {
      if (prog < ACCENT_SEQUENCE[i].before) {
        accentColor = ACCENT_SEQUENCE[i].color;
        accentGlow = ACCENT_SEQUENCE[i].glow;
        break;
      }
    }
    section.style.setProperty('--rj-accent', accentColor);
    section.style.setProperty('--rj-accent-glow', accentGlow);

    /* Mark master points as crossed */
    TIMELINE.forEach((item, idx) => {
      if (item.type !== 'master') return;
      const el = document.getElementById(`rjM${idx}`);
      if (!el) return;
      if (prog >= item.y) {
        el.classList.add('crossed');
      } else {
        el.classList.remove('crossed');
      }
    });

    /* Find nearest project node to tracker */
    let nearestEl = null;
    let nearestDist = Infinity;
    let nearestKey = null;
    let nearestSide = null;

    TIMELINE.forEach((item, idx) => {
      if (item.type !== 'project') return;
      const dist = Math.abs(prog - item.y);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearestKey = item.key;
        nearestSide = item.side;
        nearestEl = document.getElementById(`rjN${idx}`);
      }
    });

    /* Activate nearest project (within threshold) */
    const THRESHOLD = 0.06;
    if (nearestEl && nearestDist < THRESHOLD) {
      if (activeNodeEl !== nearestEl) {
        if (activeNodeEl) activeNodeEl.classList.remove('active');
        activeNodeEl = nearestEl;
        activeNodeEl.classList.add('active');
        if (!pinnedKey) showDetail(nearestKey, nearestSide, nearestEl);
      }
    } else {
      if (activeNodeEl) { activeNodeEl.classList.remove('active'); activeNodeEl = null; }
      if (!pinnedKey) clearDetail();
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  update(); // initial

})();