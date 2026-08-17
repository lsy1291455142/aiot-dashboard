/* Finexy dashboard interactions */

const chartData = [
  { month: 'Jan', profit: 35, loss: 22 },
  { month: 'Feb', profit: 42, loss: 18 },
  { month: 'Mar', profit: 36, loss: 16 },
  { month: 'Apr', profit: 40, loss: 22 },
  { month: 'May', profit: 44, loss: 24 },
  { month: 'Jun', profit: 50, loss: 30 },
  { month: 'Jul', profit: 43, loss: 27 },
  { month: 'Aug', profit: 34, loss: 17 },
];

function renderProfitLossChart() {
  const svg = document.getElementById('profitLossChart');
  const bars = document.getElementById('bars');
  const labels = document.getElementById('xlabels');
  if (!svg || !bars || !labels) return;

  const namespace = 'http://www.w3.org/2000/svg';
  const left = 56;
  const right = 580;
  const top = 32;
  const bottom = 216;
  const maxValue = 50;
  const groupWidth = (right - left) / chartData.length;
  const barWidth = 21;
  const gap = 7;

  const yFor = value => bottom - (value / maxValue) * (bottom - top);

  chartData.forEach((item, index) => {
    const center = left + groupWidth * index + groupWidth / 2;
    const profitHeight = bottom - yFor(item.profit);
    const lossHeight = bottom - yFor(item.loss);

    const profit = document.createElementNS(namespace, 'rect');
    profit.setAttribute('x', center - barWidth - gap / 2);
    profit.setAttribute('y', yFor(item.profit));
    profit.setAttribute('width', barWidth);
    profit.setAttribute('height', profitHeight);
    profit.setAttribute('rx', 7);
    profit.setAttribute('class', 'profit-bar');

    const loss = document.createElementNS(namespace, 'rect');
    loss.setAttribute('x', center + gap / 2);
    loss.setAttribute('y', yFor(item.loss));
    loss.setAttribute('width', barWidth);
    loss.setAttribute('height', lossHeight);
    loss.setAttribute('rx', 7);
    loss.setAttribute('class', 'loss-bar');

    const label = document.createElementNS(namespace, 'text');
    label.setAttribute('x', center);
    label.setAttribute('y', 239);
    label.textContent = item.month;

    bars.append(profit, loss);
    labels.append(label);
  });
}

const activities = [
  { id: 'INV_000076', name: 'Mobile App Purchase', icon: 'mobile', price: 25500, status: 'Completed', date: '17 Apr, 2026 03:45 PM' },
  { id: 'INV_000075', name: 'Hotel Booking', icon: 'hotel', price: 32750, status: 'Pending', date: '15 Apr, 2026 11:30 AM' },
  { id: 'INV_000074', name: 'Flight Ticket Booking', icon: 'plane', price: 40200, status: 'Completed', date: '15 Apr, 2026 12:00 PM' },
  { id: 'INV_000073', name: 'Grocery Purchase', icon: 'grocery', price: 50200, status: 'In Progress', date: '14 Apr, 2026 09:15 PM', checked: true },
  { id: 'INV_000072', name: 'Software License', icon: 'software', price: 15900, status: 'Completed', date: '10 Apr, 2026 06:00 AM' },
];

const icons = {
  mobile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M12 18h.01"/></svg>',
  hotel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M3 21h18"/></svg>',
  plane: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5L3 8l6 4-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 4 6 .3-.7c.4-.2.6-.6.5-1.1Z"/></svg>',
  grocery: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 14 12M7 4l13 14M12 2v20M2 12h20" opacity=".35"/><path d="m12 2 2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2Z"/></svg>',
  software: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 6-6 6 6 6M16 6l6 6-6 6"/></svg>',
};

const iconStyles = {
  mobile: ['#e9f4ff', '#42a5f5'],
  hotel: ['#e9eef8', '#3f72b8'],
  plane: ['#f1edff', '#8d7bd8'],
  grocery: ['#fff8d9', '#d8a917'],
  software: ['#ffe9ec', '#e65363'],
};

const statusClasses = {
  Completed: 'status-completed',
  Pending: 'status-pending',
  'In Progress': 'status-progress',
};

const activityBody = document.getElementById('activityBody');
const searchInput = document.getElementById('activitySearch');
const selectAll = document.getElementById('selectAll');

function formatPrice(value) {
  return `$${value.toLocaleString('en-US')}`;
}

function renderActivities(items) {
  if (!activityBody) return;

  if (!items.length) {
    activityBody.innerHTML = '<tr class="empty-row"><td colspan="7">No activities found</td></tr>';
    return;
  }

  activityBody.innerHTML = items.map(item => {
    const [background, color] = iconStyles[item.icon];
    return `
      <tr>
        <td><input class="row-check" type="checkbox" aria-label="Select ${item.id}" ${item.checked ? 'checked' : ''}></td>
        <td><span class="order-id">${item.id}</span></td>
        <td>
          <span class="activity-name">
            <span class="activity-icon" style="background:${background};color:${color}">${icons[item.icon]}</span>
            <span>${item.name}</span>
          </span>
        </td>
        <td><span class="price">${formatPrice(item.price)}</span></td>
        <td><span class="status-label ${statusClasses[item.status]}">${item.status}</span></td>
        <td><span class="date-cell">${item.date}</span></td>
        <td><button class="row-action" type="button" aria-label="More actions for ${item.id}">⋯</button></td>
      </tr>
    `;
  }).join('');
}

function syncSelectAll() {
  if (!selectAll) return;
  const checks = [...document.querySelectorAll('.row-check')];
  selectAll.checked = checks.length > 0 && checks.every(check => check.checked);
}

searchInput?.addEventListener('input', event => {
  const query = event.target.value.trim().toLowerCase();
  const filtered = activities.filter(item => [item.id, item.name, item.status, item.date]
    .some(value => value.toLowerCase().includes(query)));
  renderActivities(filtered);
  syncSelectAll();
});

selectAll?.addEventListener('change', event => {
  document.querySelectorAll('.row-check').forEach(check => {
    check.checked = event.target.checked;
  });
});

activityBody?.addEventListener('change', event => {
  if (event.target.matches('.row-check')) syncSelectAll();
});

document.querySelectorAll('.topnav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    document.querySelectorAll('.topnav a').forEach(item => item.classList.remove('active'));
    link.classList.add('active');
  });
});

document.querySelectorAll('.rail-nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    document.querySelectorAll('.rail-nav a').forEach(item => item.classList.remove('active'));
    link.classList.add('active');
  });
});

const currencyPill = document.querySelector('.currency-pill');
currencyPill?.addEventListener('click', () => {
  const currencies = ['USD', 'EUR', 'GBP'];
  const flags = { USD: 'flag-us', EUR: 'flag-eu', GBP: 'flag-gb' };
  const label = currencyPill.querySelector('span:nth-of-type(2)');
  const flag = currencyPill.querySelector('.flag');
  const next = currencies[(currencies.indexOf(label.textContent) + 1) % currencies.length];
  label.textContent = next;
  flag.className = `flag ${flags[next]}`;
});

renderProfitLossChart();
renderActivities(activities);
syncSelectAll();
