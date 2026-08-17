/* ============================================================
   Finexy Dashboard — interactions
   ============================================================ */

/* ---------- Profit & Loss bar chart ---------- */
(function renderProfitLoss() {
  const svg   = document.getElementById('profitLossChart');
  if (!svg) return;
  const bars  = svg.querySelector('#bars');
  const xlbl  = svg.querySelector('#xlabels');

  const data = [
    { m: 'Jan', profit: 38, loss: 22 },
    { m: 'Feb', profit: 45, loss: 18 },
    { m: 'Mar', profit: 35, loss: 20 },
    { m: 'Apr', profit: 40, loss: 22 },
    { m: 'May', profit: 48, loss: 30 },
    { m: 'Jun', profit: 30, loss: 25 },
    { m: 'Jul', profit: 45, loss: 28 },
    { m: 'Aug', profit: 42, loss: 18 },
  ];

  const W = 720, H = 280;
  const padL = 36, padR = 16, padT = 16, padB = 36;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const yMax = 50;
  const colW = innerW / data.length;
  const barW = 14;

  // defs: gradients
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  defs.innerHTML = `
    <linearGradient id="gGreen" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"  stop-color="#a8ec4a"/>
      <stop offset="100%" stop-color="#5da70a"/>
    </linearGradient>
    <linearGradient id="gDark" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"  stop-color="#3a3c44"/>
      <stop offset="100%" stop-color="#1f2126"/>
    </linearGradient>
  `;
  svg.appendChild(defs);

  const yToPx = v => padT + innerH - (v / yMax) * innerH;

  data.forEach((d, i) => {
    const cx = padL + colW * i + colW / 2;
    const baseY = yToPx(0);

    // Profit (green) — stacked on top of Loss
    const lossH  = (d.loss  / yMax) * innerH;
    const profitH= (d.profit/ yMax) * innerH;

    const lossY  = baseY - lossH;
    const profitY= lossY - profitH;

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    // Loss bar
    const r1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    r1.setAttribute('x', cx - barW - 2);
    r1.setAttribute('width', barW);
    r1.setAttribute('y', lossY);
    r1.setAttribute('height', lossH);
    r1.setAttribute('rx', 3);
    r1.setAttribute('class', 'bar-rect bar-dark');
    r1.style.animationDelay = `${i * 60}ms`;
    g.appendChild(r1);

    // Profit bar
    const r2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    r2.setAttribute('x', cx + 2);
    r2.setAttribute('width', barW);
    r2.setAttribute('y', profitY);
    r2.setAttribute('height', profitH);
    r2.setAttribute('rx', 3);
    r2.setAttribute('class', 'bar-rect bar-green');
    r2.style.animationDelay = `${i * 60 + 30}ms`;
    g.appendChild(r2);

    bars.appendChild(g);

    // x label
    const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    t.setAttribute('x', cx);
    t.setAttribute('y', H - 14);
    t.textContent = d.m;
    xlbl.appendChild(t);
  });
})();

/* ---------- Recent activities table ---------- */
const activities = [
  { id: 'INV_000076', name: 'Mobile App Purchase', icon: 'mobile',  price: 25500, status: 'Completed', date: '17 Apr, 2026 03:45 PM' },
  { id: 'INV_000075', name: 'Hotel Booking',       icon: 'hotel',   price: 32750, status: 'Pending',   date: '15 Apr, 2026 11:30 AM' },
  { id: 'INV_000074', name: 'Flight Ticket Booking',icon:'plane',   price: 40200, status: 'Completed', date: '15 Apr, 2026 12:00 PM' },
  { id: 'INV_000073', name: 'Grocery Purchase',    icon: 'cart',    price: 50200, status: 'In Progress', date: '14 Apr, 2026 09:15 PM' },
  { id: 'INV_000072', name: 'Software License',    icon: 'soft',    price: 15900, status: 'Completed', date: '10 Apr, 2026 06:00 AM' },
  { id: 'INV_000071', name: 'Restaurant Booking',  icon: 'fork',    price: 8500,  status: 'Completed', date: '08 Apr, 2026 07:30 PM' },
  { id: 'INV_000070', name: 'Electric Bill',       icon: 'bolt',    price: 12340, status: 'Pending',   date: '05 Apr, 2026 10:00 AM' },
];

const ICONS = {
  mobile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
  hotel:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21V12h6v9"/></svg>',
  plane:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5L3 8 9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 4 6 .3-.7c.4-.2.6-.6.5-1.1z"/></svg>',
  cart:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>',
  soft:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  fork:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2v8a2 2 0 0 0 4 0V2"/><path d="M8 10v12"/><path d="M16 2v20"/><path d="M16 7c0-2 2-3 4-3"/></svg>',
  bolt:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
};

const ICON_BG = {
  mobile: '#eaf3ff',
  hotel:  '#fff0e6',
  plane:  '#eaf3ff',
  cart:   '#fff8e0',
  soft:   '#fde6e6',
  fork:   '#f1ecff',
  bolt:   '#fff5d6',
};
const ICON_COLOR = {
  mobile: '#3a8ee6',
  hotel:  '#f59e0b',
  plane:  '#3a8ee6',
  cart:   '#f59e0b',
  soft:   '#ef4444',
  fork:   '#8b5cf6',
  bolt:   '#f59e0b',
};

const STATUS_CLASS = {
  'Completed':   'status-completed',
  'Pending':     'status-pending',
  'In Progress': 'status-progress',
};

function fmt(n) {
  return '$' + n.toLocaleString('en-US');
}

function renderTable(list) {
  const tbody = document.getElementById('activityBody');
  if (!tbody) return;
  tbody.innerHTML = list.map((a, i) => `
    <tr data-id="${a.id}">
      <td class="td-check"><input type="checkbox" class="row-check" aria-label="Select row ${a.id}"/></td>
      <td><span class="muted">${a.id}</span></td>
      <td>
        <span class="cell-activity">
          <span class="activity-ico" style="background:${ICON_BG[a.icon]}; color:${ICON_COLOR[a.icon]}">
            ${ICONS[a.icon]}
          </span>
          ${a.name}
        </span>
      </td>
      <td><strong style="font-family:var(--font-mono);font-variant-numeric:tabular-nums">${fmt(a.price)}</strong></td>
      <td><span class="status ${STATUS_CLASS[a.status]}"><span class="dot"></span>${a.status}</span></td>
      <td class="muted">${a.date}</td>
      <td class="td-end">
        <button class="row-action" aria-label="More actions">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </button>
      </td>
    </tr>
  `).join('');
}
renderTable(activities);

/* ---------- Search filter ---------- */
const search = document.getElementById('activitySearch');
if (search) {
  search.addEventListener('input', e => {
    const q = e.target.value.toLowerCase().trim();
    const filtered = activities.filter(a =>
      a.id.toLowerCase().includes(q) ||
      a.name.toLowerCase().includes(q) ||
      a.status.toLowerCase().includes(q)
    );
    renderTable(filtered);
  });
}

/* ---------- Select all ---------- */
const selectAll = document.getElementById('selectAll');
if (selectAll) {
  selectAll.addEventListener('change', e => {
    document.querySelectorAll('.row-check').forEach(c => c.checked = e.target.checked);
  });
}

/* ---------- Live data refresh simulation ---------- */
function refreshStats() {
  const stats = document.querySelectorAll('.stat-amount');
  if (!stats.length) return;
  const baseValues = [950, 700, 1050, 850];
  stats.forEach((el, i) => {
    const drift = (Math.random() - 0.5) * 30;
    const next  = Math.max(0, baseValues[i] + drift);
    el.textContent = '$' + Math.round(next).toLocaleString('en-US');
  });

  // Spending limit progress (between 20% – 35%)
  const fill = document.querySelector('.progress-fill');
  if (fill) {
    const pct = 20 + Math.random() * 15;
    fill.style.width = pct.toFixed(1) + '%';
    const nowEl = document.querySelector('.limit-now');
    if (nowEl) {
      const total = 5500;
      nowEl.textContent = '$' + Math.round(total * pct / 100).toLocaleString('en-US') + '.00';
    }
  }
}
setInterval(refreshStats, 6000);

/* ---------- Nav active toggle ---------- */
document.querySelectorAll('.topnav a, .sidebar-link').forEach(el => {
  el.addEventListener('click', e => {
    if (el.classList.contains('sidebar-toggle')) return;
    e.preventDefault();
    const group = el.closest('.topnav, .sidebar-nav, .sidebar-bottom');
    if (!group) return;
    group.querySelectorAll('a').forEach(a => a.classList.remove('active'));
    el.classList.add('active');
  });
});

/* ---------- Currency pill toggle ---------- */
const currencyPill = document.querySelector('.currency-pill');
if (currencyPill) {
  currencyPill.addEventListener('click', () => {
    const opts = ['USD', 'EUR', 'GBP'];
    const flagClass = { USD: 'flag-us', EUR: 'flag-eu', GBP: 'flag-gb' };
    const cur = currencyPill.querySelector('span:nth-of-type(2)');
    const flag = currencyPill.querySelector('.flag');
    const idx = opts.indexOf(cur.textContent);
    const next = opts[(idx + 1) % opts.length];
    cur.textContent = next;
    flag.className = 'flag ' + flagClass[next];
  });
}