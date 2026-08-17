/* AIOT Hub console — full interactive (mock) logic */

/* ============================================================
 * 1. i18n
 * ========================================================== */
const i18n = {
  en: {
    'app.title': 'AIOT Hub — Console',
    'app.brand': 'AIOT Hub',
    'nav.overview': 'Overview', 'nav.devices': 'Devices', 'nav.scenes': 'Scenes',
    'nav.energy': 'Energy', 'nav.gateways': 'Gateways', 'nav.settings': 'Settings',
    'profile.name': 'Oripio Studio', 'profile.email': 'oripiostudio@gmail…',
    'greeting.title': 'Good morning, Oripio',
    'greeting.subtitle': 'Monitor your connected devices, track telemetry, and control your smart space.',
    'panel.devices.title': 'Connected Devices',
    'panel.devices.trend': 'online vs last week',
    'panel.devices.add': 'Add Device', 'panel.devices.scan': 'Scan',
    'panel.devices.deviceGroups': 'Device Groups', 'panel.devices.groupCount': '',
    'region.global': 'Global', 'region.us': 'US East', 'region.eu': 'EU West', 'region.asia': 'Asia Pacific',
    'stats.throughput': 'Data Throughput', 'stats.energy': 'Energy Use', 'stats.events': 'Events', 'stats.uptime': 'Uptime', 'stats.thisMonth': 'now',
    'chart.title': 'Telemetry Stream', 'chart.subtitle': 'Aggregated sensor readings over time',
    'chart.legendTitle': 'Ingress vs Egress', 'chart.ingress': 'Ingress', 'chart.egress': 'Egress',
    'limit.title': 'Monthly Bandwidth Limit', 'limit.used': 'used of',
    'cards.title': 'Gateways', 'cards.add': 'Add new',
    'activities.title': 'Recent Activities', 'activities.searchPlaceholder': 'Search', 'activities.filter': 'Filter',
    'activities.col.id': 'Device ID', 'activities.col.activity': 'Event', 'activities.col.value': 'Value',
    'activities.col.status': 'Status', 'activities.col.time': 'Time', 'activities.noResults': 'No activities found',
    'view.devices.title': 'Device Management', 'view.devices.all': 'All', 'view.devices.online': 'Online',
    'view.sensors.title': 'Sensor Telemetry', 'view.live': 'Live',
    'view.auto.title': 'Scenes & Automation', 'view.auto.add': 'New Scene',
    'view.gw.title': 'Gateways',
    'view.energy.title': 'Energy Statistics', 'view.energy.realTime': 'Real-time Consumption', 'view.energy.watt': 'Watts',
    'view.energy.today': 'Today', 'view.energy.peak': 'Peak', 'view.energy.cost': 'Est. Cost', 'view.energy.co2': 'CO₂', 'view.energy.byDevice': 'Consumption by Device',
    'view.settings.title': 'Settings',
    'view.alerts.title': 'Alerts', 'view.alerts.clearAll': 'Clear all', 'view.alerts.empty': 'No alerts — all systems nominal.',
    'view.notif.title': 'Notifications', 'view.notif.empty': 'No new notifications.',
    'type.sensor': 'Sensor', 'type.camera': 'Camera', 'type.thermostat': 'Thermostat', 'type.light': 'Smart Light',
    'type.lock': 'Smart Lock', 'type.gateway': 'Gateway', 'type.plug': 'Smart Plug',
    'toast.themeLight': 'Light theme enabled', 'toast.themeDark': 'Dark theme enabled',
    'theme.menu': 'Theme', 'theme.light': 'Light', 'theme.dark': 'Dark',
    'theme.light.name': 'Light', 'theme.light-sepia.name': 'Sepia', 'theme.light-nord.name': 'Nord',
    'theme.dark.name': 'Dark', 'theme.dark-midnight.name': 'Midnight', 'theme.dark-forest.name': 'Forest',
    'toast.lang': 'Language switched to English',
    'toast.addDevice': 'New device added to network', 'toast.scan': 'Scan complete — no new devices found', 'toast.scanning': 'Scanning for nearby devices…',
    'toast.region': 'Region set to', 'toast.gateway': 'Gateway registered successfully',
    'toast.deviceToggle': 'Device state changed', 'toast.filter': 'Filter applied', 'toast.cleared': 'Selection cleared',
    'toast.profile': 'Signed in as Oripio Studio', 'toast.notif': 'No new notifications', 'toast.alert': 'All systems nominal',
    'toast.sceneOn': 'Scene activated', 'toast.sceneOff': 'Scene deactivated', 'toast.sceneAdd': 'Scene created', 'toast.sceneDel': 'Scene deleted',
    'toast.alertAck': 'Alert acknowledged', 'toast.alertClear': 'Alerts cleared',
    'toast.help': 'Docs open in a new tab (demo)', 'toast.logout': 'Signed out (demo)',
    'toast.searchEmpty': 'No results found',
    'modal.addDevice.title': 'Add a Device', 'modal.addDevice.name': 'Device name', 'modal.addDevice.type': 'Type',
    'modal.addDevice.type.placeholder': 'Select a type', 'modal.addDevice.group': 'Room',
    'modal.addDevice.group.placeholder': 'Select a room', 'modal.addDevice.submit': 'Add Device',
    'modal.addGateway.title': 'Register Gateway', 'modal.addGateway.name': 'Gateway name', 'modal.addGateway.zone': 'Zone',
    'modal.addGateway.zone.placeholder': 'Select a zone', 'modal.addGateway.submit': 'Register',
    'modal.device.title': 'Device Control', 'modal.cancel': 'Cancel', 'modal.save': 'Save',
    'modal.scene.title': 'New Scene', 'modal.scene.name': 'Scene name', 'modal.scene.desc': 'Description',
    'modal.scene.devices': 'Devices in scene',
    'modal.settings.title': 'Preferences',
    'unit.c': '°C', 'unit.pct': '%', 'unit.w': 'W', 'unit.lx': 'lx', 'unit.rh': '%',
    'status.on': 'On', 'status.off': 'Off', 'status.online': 'Online', 'status.offline': 'Offline',
  },
  zh: {
    'app.title': 'AIOT Hub — 控制台',
    'app.brand': 'AIOT Hub',
    'nav.overview': '总览', 'nav.devices': '设备', 'nav.scenes': '场景',
    'nav.energy': '能耗', 'nav.gateways': '网关', 'nav.settings': '设置',
    'profile.name': 'Oripio 工作室', 'profile.email': 'oripiostudio@gmail…',
    'greeting.title': '早上好，Oripio',
    'greeting.subtitle': '监控已连接设备、追踪遥测数据并控制你的智能空间。',
    'panel.devices.title': '已连接设备',
    'panel.devices.trend': '较上周在线数',
    'panel.devices.add': '添加设备', 'panel.devices.scan': '扫描',
    'panel.devices.deviceGroups': '设备分组', 'panel.devices.groupCount': '',
    'region.global': '全球', 'region.us': '美国东部', 'region.eu': '欧洲西部', 'region.asia': '亚太区',
    'stats.throughput': '数据吞吐', 'stats.energy': '能耗', 'stats.events': '事件数', 'stats.uptime': '在线率', 'stats.thisMonth': '当前',
    'chart.title': '遥测数据流', 'chart.subtitle': '一段时间内的聚合传感器读数',
    'chart.legendTitle': '入口 vs 出口', 'chart.ingress': '入口', 'chart.egress': '出口',
    'limit.title': '月度带宽上限', 'limit.used': '已用 / 共',
    'cards.title': '网关', 'cards.add': '新增',
    'activities.title': '近期活动', 'activities.searchPlaceholder': '搜索', 'activities.filter': '筛选',
    'activities.col.id': '设备 ID', 'activities.col.activity': '事件', 'activities.col.value': '数值',
    'activities.col.status': '状态', 'activities.col.time': '时间', 'activities.noResults': '未找到活动记录',
    'view.devices.title': '设备管理', 'view.devices.all': '全部', 'view.devices.online': '在线',
    'view.sensors.title': '传感器遥测', 'view.live': '实时',
    'view.auto.title': '场景与自动化', 'view.auto.add': '新建场景',
    'view.gw.title': '网关',
    'view.energy.title': '能耗统计', 'view.energy.realTime': '实时功耗', 'view.energy.watt': '瓦',
    'view.energy.today': '今日', 'view.energy.peak': '峰值', 'view.energy.cost': '预估费用', 'view.energy.co2': '碳排放', 'view.energy.byDevice': '设备能耗分布',
    'view.settings.title': '设置',
    'view.alerts.title': '告警', 'view.alerts.clearAll': '全部清除', 'view.alerts.empty': '无告警 — 所有系统运行正常。',
    'view.notif.title': '通知', 'view.notif.empty': '暂无新通知。',
    'type.sensor': '传感器', 'type.camera': '摄像头', 'type.thermostat': '温控器', 'type.light': '智能灯',
    'type.lock': '智能锁', 'type.gateway': '网关', 'type.plug': '智能插座',
    'toast.themeLight': '已切换为浅色主题', 'toast.themeDark': '已切换为深色主题',
    'theme.menu': '主题', 'theme.light': '浅色', 'theme.dark': '深色',
    'theme.light.name': '明亮', 'theme.light-sepia.name': '羊皮纸', 'theme.light-nord.name': '北欧',
    'theme.dark.name': '暗黑', 'theme.dark-midnight.name': '午夜', 'theme.dark-forest.name': '森林',
    'toast.lang': '语言已切换为中文',
    'toast.addDevice': '新设备已加入网络', 'toast.scan': '扫描完成 — 未发现新设备', 'toast.scanning': '正在扫描附近设备…',
    'toast.region': '区域已切换至', 'toast.gateway': '网关注册成功',
    'toast.deviceToggle': '设备状态已变更', 'toast.filter': '筛选条件已应用', 'toast.cleared': '已清空选择',
    'toast.profile': '当前登录：Oripio 工作室', 'toast.notif': '暂无新通知', 'toast.alert': '所有系统运行正常',
    'toast.sceneOn': '场景已激活', 'toast.sceneOff': '场景已关闭', 'toast.sceneAdd': '场景已创建', 'toast.sceneDel': '场景已删除',
    'toast.alertAck': '告警已确认', 'toast.alertClear': '告警已清除',
    'toast.help': '文档已在新标签页打开（演示）', 'toast.logout': '已登出（演示）',
    'toast.searchEmpty': '未找到结果',
    'modal.addDevice.title': '添加设备', 'modal.addDevice.name': '设备名称', 'modal.addDevice.type': '类型',
    'modal.addDevice.type.placeholder': '请选择类型', 'modal.addDevice.group': '房间',
    'modal.addDevice.group.placeholder': '请选择房间', 'modal.addDevice.submit': '添加设备',
    'modal.addGateway.title': '注册网关', 'modal.addGateway.name': '网关名称', 'modal.addGateway.zone': '区域',
    'modal.addGateway.zone.placeholder': '请选择区域', 'modal.addGateway.submit': '注册',
    'modal.device.title': '设备控制', 'modal.cancel': '取消', 'modal.save': '保存',
    'modal.scene.title': '新建场景', 'modal.scene.name': '场景名称', 'modal.scene.desc': '描述',
    'modal.scene.devices': '场景内设备',
    'modal.settings.title': '偏好设置',
    'unit.c': '°C', 'unit.pct': '%', 'unit.w': 'W', 'unit.lx': 'lx', 'unit.rh': '%',
    'status.on': '开', 'status.off': '关', 'status.online': '在线', 'status.offline': '离线',
  }
};
let currentLang = localStorage.getItem('aiot-lang') || 'en';
let currentTheme = localStorage.getItem('aiot-theme') || 'light';
const t = k => (i18n[currentLang] && i18n[currentLang][k]) || k;

/* ============================================================
 * 2. Helpers: toast / modal / drawer
 * ========================================================== */
function toast(message, type = 'success') {
  const wrap = document.getElementById('toastWrap');
  if (!wrap) return;
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  const icon = type === 'success' ? '✓' : type === 'warn' ? '!' : 'i';
  el.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
  wrap.appendChild(el);
  setTimeout(() => { el.classList.add('out'); el.addEventListener('animationend', () => el.remove(), { once: true }); }, 2600);
}
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalFoot = document.getElementById('modalFoot');
function openModal({ title, body, foot }) {
  modalTitle.textContent = title; modalBody.innerHTML = body; modalFoot.innerHTML = foot || '';
  modalOverlay.hidden = false;
}
function closeModal() { modalOverlay.hidden = true; modalBody.innerHTML = ''; modalFoot.innerHTML = ''; }
document.getElementById('modalClose')?.addEventListener('click', closeModal);
modalOverlay?.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

const drawerOverlay = document.getElementById('drawerOverlay');
const drawerTitle = document.getElementById('drawerTitle');
const drawerBody = document.getElementById('drawerBody');
function openDrawer(title, bodyHtml) {
  drawerTitle.textContent = title; drawerBody.innerHTML = bodyHtml; drawerOverlay.hidden = false;
}
function closeDrawer() { drawerOverlay.hidden = true; }
document.getElementById('drawerClose')?.addEventListener('click', closeDrawer);
drawerOverlay?.addEventListener('click', e => { if (e.target === drawerOverlay) closeDrawer(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { if (!modalOverlay.hidden) closeModal(); if (!drawerOverlay.hidden) closeDrawer(); }
});

/* ============================================================
 * 3. Central mock data model
 * ========================================================== */
const TYPE_META = {
  sensor:    { color: ['#e9f4ff', '#42a5f5'], icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M5 12a7 7 0 0 1 14 0M2 12a10 10 0 0 1 20 0" stroke-linecap="round"/></svg>', unit: '°C' },
  camera:    { color: ['#e9eef8', '#3f72b8'], icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="3" width="16" height="13" rx="2"/><path d="M8 8h8M8 12h5M2 20h20" stroke-linecap="round" stroke-linejoin="round"/></svg>', unit: '' },
  thermostat: { color: ['#ffe9ec', '#e65363'], icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 14V5a2 2 0 0 0-4 0v9a4 4 0 1 0 4 0Z" stroke-linecap="round" stroke-linejoin="round"/></svg>', unit: '°C' },
  light:     { color: ['#fff8d9', '#d8a917'], icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3 11v2h6v-2a6 6 0 0 0-3-11Z" stroke-linecap="round" stroke-linejoin="round"/></svg>', unit: '%' },
  lock:      { color: ['#f1edff', '#8d7bd8'], icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4" stroke-linecap="round"/></svg>', unit: '' },
  plug:      { color: ['#e8f9ef', '#20b46a'], icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 0 1-10 0Z" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 16v6" stroke-linecap="round"/></svg>', unit: 'W' },
  gateway:   { color: ['#e6f1fd', '#42a5f5'], icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 21V9l8-6 8 6v12M9 21v-6h6v6" stroke-linecap="round" stroke-linejoin="round"/></svg>', unit: '' },
};
const ROOMS = ['Living Room', 'Bedroom', 'Kitchen', 'Office', 'Garage', 'Garden'];
function rnd(min, max) { return Math.random() * (max - min) + min; }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

let DEV_ID = 100;
function makeDevice(type, room, online = true) {
  const meta = TYPE_META[type];
  const base = {
    id: 'DV-' + String(++DEV_ID).padStart(4, '0'),
    type, room, online,
    name: t('type.' + type) + ' · ' + room,
  };
  if (type === 'light') base.level = Math.round(rnd(20, 100));
  if (type === 'thermostat') base.temp = Math.round(rnd(18, 26));
  if (type === 'sensor') base.value = +rnd(18, 30).toFixed(1);
  if (type === 'plug') base.load = Math.round(rnd(5, 120));
  base.readout = readoutOf(base);
  return base;
}
function readoutOf(d) {
  if (!d.online) return { label: t('status.offline'), val: '—' };
  if (d.type === 'light') return { label: t('unit.pct'), val: d.level + '%' };
  if (d.type === 'thermostat') return { label: t('unit.c'), val: d.temp + '°' };
  if (d.type === 'sensor') return { label: t('unit.c'), val: d.value + '°' };
  if (d.type === 'plug') return { label: t('unit.w'), val: d.load + 'W' };
  if (d.type === 'lock') return { label: '', val: d.online ? t('status.online') : t('status.offline') };
  if (d.type === 'camera') return { label: '', val: '1080p' };
  return { label: '', val: t('status.online') };
}

let devices = [
  makeDevice('sensor', 'Living Room'), makeDevice('sensor', 'Bedroom'),
  makeDevice('light', 'Living Room'), makeDevice('light', 'Bedroom'), makeDevice('light', 'Kitchen'),
  makeDevice('thermostat', 'Living Room'), makeDevice('thermostat', 'Bedroom'),
  makeDevice('camera', 'Garage'), makeDevice('camera', 'Office'),
  makeDevice('lock', 'Front Door'), makeDevice('lock', 'Office'),
  makeDevice('plug', 'Kitchen'), makeDevice('plug', 'Office'),
  makeDevice('sensor', 'Garden', false), makeDevice('plug', 'Garage', false),
];

let gateways = [
  { id: 'GW-6782', zone: 'US East', online: true, tags: ['Zigbee', 'Wi-Fi'], load: 62 },
  { id: 'GW-4356', zone: 'EU West', online: true, tags: ['Z-Wave'], load: 41 },
];
let scenes = [
  { id: 'S1', name: 'Home Mode', desc: 'Lights on, thermostat 22°C', devices: ['light', 'thermostat'], active: true },
  { id: 'S2', name: 'Away Mode', desc: 'All lights off, lock doors', devices: ['light', 'lock'], active: false },
  { id: 'S3', name: 'Movie Night', desc: 'Dim lights to 20%', devices: ['light'], active: false },
];
let activities = [
  { id: 'SNS_0076', name: 'Temperature Spike', icon: 'sensor', value: '31.4°C', status: 'Completed', date: '17 Apr, 03:45 PM', checked: false },
  { id: 'CAM_0075', name: 'Motion Detected', icon: 'camera', value: '1080p', status: 'Pending', date: '15 Apr, 11:30 AM', checked: false },
  { id: 'LGT_0074', name: 'Light Turned On', icon: 'light', value: '80%', status: 'Completed', date: '15 Apr, 12:00 PM', checked: false },
  { id: 'GW__0073', name: 'Firmware Update', icon: 'gateway', value: 'v2.3.1', status: 'In Progress', date: '14 Apr, 09:15 PM', checked: true },
  { id: 'SNS_0072', name: 'Humidity Reading', icon: 'sensor', value: '54%', status: 'Completed', date: '10 Apr, 06:00 AM', checked: false },
];
let alerts = [
  { id: 'A1', level: 'critical', title: 'Gateway GW-6782 offline', meta: 'US East · 2 min ago', device: 'GW-6782' },
  { id: 'A2', level: 'warning', title: 'High temperature: 31.4°C', meta: 'Living Room sensor · 8 min ago', device: 'SNS_0076' },
  { id: 'A3', level: 'info', title: 'Firmware update available', meta: '3 devices · 1 hr ago', device: null },
];
const ACT_ICON = { mobile: TYPE_META.sensor.icon, hotel: TYPE_META.camera.icon, plane: TYPE_META.light.icon, grocery: TYPE_META.gateway.icon, software: TYPE_META.thermostat.icon };
const iconStyles = {}; Object.keys(TYPE_META).forEach(k => iconStyles[k] = TYPE_META[k].color);
const statusClasses = { Completed: 'status-completed', Pending: 'status-pending', 'In Progress': 'status-progress' };
const fmtStatus = s => currentLang === 'zh'
  ? ({ Completed: '已完成', Pending: '待处理', 'In Progress': '进行中' }[s] || s) : s;

/* live telemetry buffers */
let energySeries = Array.from({ length: 30 }, () => Math.round(rnd(400, 700)));
let sensorSpark = {};
devices.filter(d => d.type === 'sensor').forEach(d => { sensorSpark[d.id] = Array.from({ length: 16 }, () => +rnd(18, 30).toFixed(1)); });

/* ============================================================
 * 4. Apply language & theme
 * ========================================================== */
function applyLang() {
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  document.dispatchEvent(new CustomEvent('langchange'));
}
function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  document.getElementById('themeToggleBtn')?.setAttribute('aria-expanded', 'false');
  document.querySelectorAll('.theme-swatch').forEach(s => s.classList.toggle('active', s.dataset.theme === currentTheme));
}

/* ============================================================
 * 5. Chart (overview telemetry)
 * ========================================================== */
const chartData = [
  { month: 'Jan', profit: 35, loss: 22 }, { month: 'Feb', profit: 42, loss: 18 }, { month: 'Mar', profit: 36, loss: 16 },
  { month: 'Apr', profit: 40, loss: 22 }, { month: 'May', profit: 44, loss: 24 }, { month: 'Jun', profit: 50, loss: 30 },
  { month: 'Jul', profit: 43, loss: 27 }, { month: 'Aug', profit: 34, loss: 17 },
];
function renderChart() {
  const bars = document.getElementById('bars'), labels = document.getElementById('xlabels');
  if (!bars || !labels) return;
  bars.innerHTML = ''; labels.innerHTML = '';
  const ns = 'http://www.w3.org/2000/svg';
  const left = 56, right = 580, top = 32, bottom = 216, max = 50;
  const gw = (right - left) / chartData.length, bw = 21, gap = 7;
  const yFor = v => bottom - (v / max) * (bottom - top);
  chartData.forEach((it, i) => {
    const c = left + gw * i + gw / 2;
    const p = document.createElementNS(ns, 'rect'); p.setAttribute('x', c - bw - gap / 2); p.setAttribute('y', yFor(it.profit)); p.setAttribute('width', bw); p.setAttribute('height', bottom - yFor(it.profit)); p.setAttribute('rx', 7); p.setAttribute('class', 'profit-bar');
    const l = document.createElementNS(ns, 'rect'); l.setAttribute('x', c + gap / 2); l.setAttribute('y', yFor(it.loss)); l.setAttribute('width', bw); l.setAttribute('height', bottom - yFor(it.loss)); l.setAttribute('rx', 7); l.setAttribute('class', 'loss-bar');
    const tx = document.createElementNS(ns, 'text'); tx.setAttribute('x', c); tx.setAttribute('y', 239); tx.textContent = it.month;
    bars.append(p, l); labels.append(tx);
  });
}

/* ============================================================
 * 6. Overview: device groups, stats, gateways, activities
 * ========================================================== */
function renderDeviceGroups() {
  const list = document.getElementById('deviceGroups'); if (!list) return;
  const groups = {};
  devices.forEach(d => { (groups[d.room] = groups[d.room] || []).push(d); });
  const entries = Object.entries(groups);
  list.innerHTML = entries.map(([room, ds], i) => {
    const online = ds.filter(d => d.online).length;
    return `<div class="wallet-item" data-room="${i}">
      <span class="flag flag-us" aria-hidden="true"></span>
      <div><div class="wallet-code">${room} <button type="button" aria-label="options">⋮</button></div>
      <strong>${ds.length} ${t('nav.devices')}</strong><span>${online} ${t('status.online')} · ${ds.length - online} ${t('status.offline')}</span></div>
      <em class="status-pill ${online ? 'active' : 'inactive'}">${online ? t('status.online') : t('status.offline')}</em></div>`;
  }).join('');
  list.querySelectorAll('.wallet-item').forEach(item => item.addEventListener('click', () => {
    const [room] = entries[+item.dataset.room]; openRoomDevices(room);
  }));
  const gc = document.getElementById('groupCount');
  if (gc) gc.textContent = entries.length + ' ' + (currentLang === 'zh' ? '个房间' : 'rooms');
  document.getElementById('deviceTotal').textContent = devices.length;
  const online = devices.filter(d => d.online).length;
  const trend = document.getElementById('onlineTrend');
  if (trend) trend.textContent = `▲ ${Math.round((online / devices.length) * 100)}%`;
}
function openRoomDevices(room) {
  const ds = devices.filter(d => d.room === room);
  openModal({ title: room, body: ds.map(d => deviceRowHtml(d)).join(''), foot: `<button class="btn btn-secondary" type="button" data-close>${t('modal.cancel')}</button>` });
  modalFoot.querySelector('[data-close]')?.addEventListener('click', closeModal);
  wireDeviceRows(modalBody);
}

function renderGateways() {
  const list = document.getElementById('gatewayList'); if (!list) return;
  list.innerHTML = gateways.map((gw, i) => `
    <div class="payment-card ${i % 2 === 0 ? 'black-card' : 'green-card'}" data-gw="${i}">
      <div class="card-top"><span>${gw.online ? t('status.online') : t('status.offline')}</span><div class="card-network"><i></i><i></i></div></div>
      <div class="card-number"><small>Gateway ID</small><strong>•••• •••• •••• ${gw.id.slice(-4)}</strong></div>
      <div class="gateway-tags">${gw.tags.map(tag => `<span class="gateway-tag">${tag}</span>`).join('')}</div>
    </div>`).join('');
  list.querySelectorAll('.payment-card').forEach(card => card.addEventListener('click', () => {
    const gw = gateways[+card.dataset.gw];
    openGatewayModal(gw);
  }));
}
function openGatewayModal(gw) {
  openModal({
    title: gw.id + ' · ' + gw.zone,
    body: `<p>${gw.online ? t('status.online') : t('status.offline')} · ${gw.tags.join(' / ')}</p>
      <div class="modal-field"><label>Load</label><div class="gw-bars">${Array.from({length:12}, (_,i)=>`<i style="height:${Math.round(rnd(20,100))}%"></i>`).join('')}</div></div>`,
    foot: `<button class="btn btn-secondary" type="button" data-close>${t('modal.cancel')}</button>`
  });
  modalFoot.querySelector('[data-close]')?.addEventListener('click', closeModal);
}

const activityBody = document.getElementById('activityBody');
const searchInput = document.getElementById('activitySearch');
const selectAll = document.getElementById('selectAll');
let activeFilter = null;
function renderActivities(items) {
  if (!activityBody) return;
  if (!items.length) { activityBody.innerHTML = `<tr class="empty-row"><td colspan="7">${t('activities.noResults')}</td></tr>`; return; }
  activityBody.innerHTML = items.map(it => {
    const [bg, color] = iconStyles[it.icon] || ['#eee', '#888'];
    return `<tr>
      <td><input class="row-check" type="checkbox" aria-label="Select ${it.id}" ${it.checked ? 'checked' : ''}></td>
      <td><span class="order-id">${it.id}</span></td>
      <td><span class="activity-name"><span class="activity-icon" style="background:${bg};color:${color}">${ACT_ICON[it.icon] || ''}</span><span>${it.name}</span></span></td>
      <td><span class="price">${it.value}</span></td>
      <td><span class="status-label ${statusClasses[it.status]}">${fmtStatus(it.status)}</span></td>
      <td><span class="date-cell">${it.date}</span></td>
      <td><button class="row-action" type="button" aria-label="More for ${it.id}">⋯</button></td></tr>`;
  }).join('');
}
function getFiltered() {
  const q = (searchInput?.value || '').trim().toLowerCase();
  return activities.filter(it => {
    const mq = [it.id, it.name, it.status, it.date].some(v => v.toLowerCase().includes(q));
    const mf = !activeFilter || it.status === activeFilter;
    return mq && mf;
  });
}
function syncSelectAll() {
  if (!selectAll) return;
  const checks = [...document.querySelectorAll('.row-check')];
  selectAll.checked = checks.length > 0 && checks.every(c => c.checked);
}
searchInput?.addEventListener('input', () => { renderActivities(getFiltered()); syncSelectAll(); });
selectAll?.addEventListener('change', e => document.querySelectorAll('.row-check').forEach(c => c.checked = e.target.checked));
activityBody?.addEventListener('change', e => { if (e.target.matches('.row-check')) syncSelectAll(); });
activityBody?.addEventListener('click', e => {
  const btn = e.target.closest('.row-action');
  if (btn) { const id = btn.closest('tr')?.querySelector('.order-id')?.textContent || ''; toast((currentLang === 'zh' ? '查看 ' : 'Inspect ') + id, 'info'); }
});
document.getElementById('filterBtn')?.addEventListener('click', e => {
  const order = [null, 'Completed', 'Pending', 'In Progress'];
  activeFilter = order[(order.indexOf(activeFilter) + 1) % order.length];
  e.currentTarget.classList.toggle('is-active', !!activeFilter);
  toast(activeFilter ? t('toast.filter') + ': ' + fmtStatus(activeFilter) : t('toast.cleared'), 'info');
  renderActivities(getFiltered()); syncSelectAll();
});

/* overview stats (live) */
function renderStats() {
  const online = devices.filter(d => d.online).length;
  const tp = document.getElementById('statThroughput'); if (tp) tp.textContent = Math.round(rnd(820, 1080));
  const en = document.getElementById('statEnergy'); if (en) en.textContent = Math.round(rnd(580, 760));
  const ev = document.getElementById('statEvents'); if (ev) ev.textContent = activities.length * 12 + Math.round(rnd(0, 40));
  const up = document.getElementById('statUptime'); if (up) up.textContent = (99 + rnd(0, 0.9)).toFixed(1);
}

/* ============================================================
 * 7. Devices view
 * ========================================================== */
let devFilter = 'all';
function deviceRowHtml(d) {
  const meta = TYPE_META[d.type];
  const [bg, color] = meta.color;
  let ctrl = '';
  if (d.type === 'light') ctrl = `<div class="range-row"><label>${t('unit.pct')}</label><input type="range" min="0" max="100" value="${d.level}" data-level="${d.id}"><span class="range-val">${d.level}%</span></div>`;
  if (d.type === 'thermostat') ctrl = `<div class="range-row"><label>${t('unit.c')}</label><input type="range" min="10" max="32" value="${d.temp}" data-temp="${d.id}"><span class="range-val">${d.temp}°</span></div>`;
  return `<div class="dev-row" data-dev="${d.id}">
    <span class="device-ico" style="background:${bg};color:${color}">${meta.icon}</span>
    <div class="dev-meta"><strong>${d.name}</strong><span>${d.id} · ${d.room} · ${meta.unit ? readoutOf(d).val : ''}</span></div>
    <span class="switch ${d.online ? 'on' : ''}" role="switch" aria-checked="${d.online}" data-toggle="${d.id}" tabindex="0"></span>
  </div>${ctrl ? `<div style="padding:0 0 6px 44px">${ctrl}</div>` : ''}`;
}
function renderDeviceGrid() {
  const grid = document.getElementById('deviceGrid'); if (!grid) return;
  const list = devFilter === 'online' ? devices.filter(d => d.online) : devices;
  grid.innerHTML = list.map(d => {
    const meta = TYPE_META[d.type]; const [bg, color] = meta.color;
    const ro = readoutOf(d);
    let ctrl = '';
    if (d.online && d.type === 'light') ctrl = `<div class="range-row"><label>${t('unit.pct')}</label><input type="range" min="0" max="100" value="${d.level}" data-level="${d.id}"><span class="range-val">${d.level}%</span></div>`;
    if (d.online && d.type === 'thermostat') ctrl = `<div class="range-row"><label>${t('unit.c')}</label><input type="range" min="10" max="32" value="${d.temp}" data-temp="${d.id}"><span class="range-val">${d.temp}°</span></div>`;
    return `<div class="device-card ${d.online ? '' : 'offline'}" data-card="${d.id}">
      <div class="device-card-top">
        <div style="display:flex;gap:9px;align-items:center">
          <span class="device-ico" style="background:${bg};color:${color}">${meta.icon}</span>
          <div><h4>${d.name}</h4><div class="dev-sub">${d.id} · ${d.room}</div></div>
        </div>
        <span class="device-state ${d.online ? 'on' : 'off'}">${d.online ? t('status.online') : t('status.offline')}</span>
      </div>
      <div class="device-readout"><div><span>${t('stats.energy')}</span><strong>${ro.val}</strong></div><div><span>${t('type.' + d.type)}</span><strong>${d.online ? '●' : '○'}</strong></div></div>
      <div class="device-controls">
        <span class="switch ${d.online ? 'on' : ''}" role="switch" aria-checked="${d.online}" data-toggle="${d.id}" tabindex="0"></span>
        <span style="font-size:10px;color:var(--muted)">${d.online ? t('status.on') : t('status.off')}</span>
      </div>
      ${ctrl}
    </div>`;
  }).join('');
  wireDeviceGrid(grid);
}
function wireDeviceGrid(grid) {
  grid.querySelectorAll('[data-toggle]').forEach(sw => {
    const toggle = () => {
      const d = devices.find(x => x.id === sw.dataset.toggle); if (!d) return;
      d.online = !d.online; d.readout = readoutOf(d);
      sw.classList.toggle('on', d.online); sw.setAttribute('aria-checked', d.online);
      const card = sw.closest('.device-card'); if (card) { card.classList.toggle('offline', !d.online); const st = card.querySelector('.device-state'); if (st) { st.className = 'device-state ' + (d.online ? 'on' : 'off'); st.textContent = d.online ? t('status.online') : t('status.offline'); } }
      renderDeviceGroups();
      toast(t('toast.deviceToggle'), 'info');
    };
    sw.addEventListener('click', toggle);
    sw.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
  });
  grid.querySelectorAll('[data-level]').forEach(r => r.addEventListener('input', () => {
    const d = devices.find(x => x.id === r.dataset.level); if (!d) return;
    d.level = +r.value; r.nextElementSibling.textContent = d.level + '%';
  }));
  grid.querySelectorAll('[data-temp]').forEach(r => r.addEventListener('input', () => {
    const d = devices.find(x => x.id === r.dataset.temp); if (!d) return;
    d.temp = +r.value; r.nextElementSibling.textContent = d.temp + '°';
  }));
  grid.querySelectorAll('[data-card]').forEach(c => c.addEventListener('click', e => {
    if (e.target.closest('input, .switch')) return;
    const d = devices.find(x => x.id === c.dataset.card); if (d) openDeviceModal(d);
  }));
}
function wireDeviceRows(container) {
  container.querySelectorAll('[data-toggle]').forEach(sw => {
    const toggle = () => {
      const d = devices.find(x => x.id === sw.dataset.toggle); if (!d) return;
      d.online = !d.online; d.readout = readoutOf(d); sw.classList.toggle('on', d.online); sw.setAttribute('aria-checked', d.online);
      renderDeviceGrid(); renderDeviceGroups(); toast(t('toast.deviceToggle'), 'info');
    };
    sw.addEventListener('click', toggle);
    sw.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
  });
}
function openDeviceModal(d) {
  const meta = TYPE_META[d.type];
  openModal({
    title: d.name,
    body: `<p>${d.id} · ${d.room} · ${d.online ? t('status.online') : t('status.offline')}</p>
      <div class="modal-field"><label>${t('type.' + d.type)}</label>
      <div style="display:flex;align-items:center;gap:10px">
        <span class="switch ${d.online ? 'on' : ''}" role="switch" aria-checked="${d.online}" id="dmToggle" tabindex="0"></span>
        <span style="font-size:11px;color:var(--muted)">${d.online ? t('status.on') : t('status.off')}</span></div></div>
      ${d.online && d.type === 'light' ? `<div class="modal-field"><label>${t('unit.pct')}</label><input type="range" min="0" max="100" value="${d.level}" id="dmLevel"></div>` : ''}
      ${d.online && d.type === 'thermostat' ? `<div class="modal-field"><label>${t('unit.c')}</label><input type="range" min="10" max="32" value="${d.temp}" id="dmTemp"></div>` : ''}`,
    foot: `<button class="btn btn-secondary" type="button" data-close>${t('modal.cancel')}</button>`
  });
  modalFoot.querySelector('[data-close]')?.addEventListener('click', closeModal);
  const tg = document.getElementById('dmToggle');
  tg?.addEventListener('click', () => { d.online = !d.online; tg.classList.toggle('on', d.online); tg.setAttribute('aria-checked', d.online); renderDeviceGrid(); renderDeviceGroups(); });
  document.getElementById('dmLevel')?.addEventListener('input', e => d.level = +e.target.value);
  document.getElementById('dmTemp')?.addEventListener('input', e => d.temp = +e.target.value);
}
document.getElementById('devFilterAll')?.addEventListener('click', () => { devFilter = 'all'; renderDeviceGrid(); });
document.getElementById('devFilterOnline')?.addEventListener('click', () => { devFilter = 'online'; renderDeviceGrid(); });

/* ============================================================
 * 8. Sensors view
 * ========================================================== */
function renderSensors() {
  const grid = document.getElementById('sensorGrid'); if (!grid) return;
  const sens = devices.filter(d => d.type === 'sensor');
  grid.innerHTML = sens.map(d => {
    const series = sensorSpark[d.id] || [];
    const pts = series.map((v, i) => `${(i / (series.length - 1)) * 180 + 10},${40 - (v - 15) * 2.2}`).join(' ');
    const warn = d.value > 29;
    return `<div class="sensor-card">
      <div class="s-head"><span class="s-name">${d.room} ${t('type.sensor')}</span><span class="sensor-status ${warn ? 'warn' : 'ok'}">${warn ? '!' : '✓'}</span></div>
      <div class="s-val">${d.value}<small> ${t('unit.c')}</small></div>
      <div class="s-spark"><svg viewBox="0 0 200 44" preserveAspectRatio="none"><polyline class="sensor-spark-line" points="${pts}"/></svg></div>
      <div style="font-size:9px;color:var(--muted)">${d.id} · ${d.online ? t('status.online') : t('status.offline')}</div>
    </div>`;
  }).join('');
}

/* ============================================================
 * 9. Automation / Scenes view
 * ========================================================== */
function renderScenes() {
  const grid = document.getElementById('sceneGrid'); if (!grid) return;
  grid.innerHTML = scenes.map(s => `
    <div class="scene-card ${s.active ? 'active' : ''}" data-scene="${s.id}">
      <h4>${s.name}</h4>
      <div class="s-desc">${s.desc}</div>
      <div class="scene-mini">${s.devices.map(dt => `<span>${t('type.' + dt)}</span>`).join('')}</div>
      <div class="s-actions">
        <span class="switch ${s.active ? 'on' : ''}" role="switch" aria-checked="${s.active}" data-scene-toggle="${s.id}" tabindex="0"></span>
        <button class="scene-del" type="button" data-scene-del="${s.id}" aria-label="Delete">🗑</button>
      </div>
    </div>`).join('');
  grid.querySelectorAll('[data-scene-toggle]').forEach(sw => {
    const toggle = () => {
      const s = scenes.find(x => x.id === sw.dataset.sceneToggle); if (!s) return;
      s.active = !s.active; sw.classList.toggle('on', s.active); sw.setAttribute('aria-checked', s.active);
      sw.closest('.scene-card').classList.toggle('active', s.active);
      toast(s.active ? t('toast.sceneOn') : t('toast.sceneOff'), 'info');
    };
    sw.addEventListener('click', toggle);
    sw.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
  });
  grid.querySelectorAll('[data-scene-del]').forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation();
    const id = btn.dataset.sceneDel; scenes = scenes.filter(s => s.id !== id);
    renderScenes(); toast(t('toast.sceneDel'), 'warn');
  }));
}
document.getElementById('addSceneBtn')?.addEventListener('click', () => {
  const typeOpts = ['sensor', 'camera', 'thermostat', 'light', 'lock', 'plug'].map(k => `<option value="${k}">${t('type.' + k)}</option>`).join('');
  openModal({
    title: t('modal.scene.title'),
    body: `<div class="modal-field"><label>${t('modal.scene.name')}</label><input id="scName" type="text" placeholder="${t('modal.scene.name')}"></div>
      <div class="modal-field"><label>${t('modal.scene.desc')}</label><input id="scDesc" type="text" placeholder="${t('modal.scene.desc')}"></div>
      <div class="modal-field"><label>${t('modal.scene.devices')}</label><select id="scDev" multiple size="4">${typeOpts}</select></div>`,
    foot: `<button class="btn btn-secondary" type="button" data-close>${t('modal.cancel')}</button><button class="btn btn-primary" type="button" id="scSubmit">${t('modal.save')}</button>`
  });
  modalFoot.querySelector('[data-close]')?.addEventListener('click', closeModal);
  document.getElementById('scSubmit')?.addEventListener('click', () => {
    const name = document.getElementById('scName').value.trim() || 'New Scene';
    const desc = document.getElementById('scDesc').value.trim() || '—';
    const sel = [...document.getElementById('scDev').selectedOptions].map(o => o.value);
    scenes.push({ id: 'S' + (scenes.length + 1), name, desc, devices: sel.length ? sel : ['light'], active: false });
    renderScenes(); closeModal(); toast(t('toast.sceneAdd'), 'success');
  });
});

/* ============================================================
 * 10. Gateways view
 * ========================================================== */
function renderGatewaysView() {
  const grid = document.getElementById('gwGrid'); if (!grid) return;
  grid.innerHTML = gateways.map((gw, i) => `
    <div class="gw-card" data-gwv="${i}">
      <div class="gw-top"><h4>${gw.id}</h4><span class="device-state ${gw.online ? 'on' : 'off'}">${gw.online ? t('status.online') : t('status.offline')}</span></div>
      <div class="gw-meta"><div><span>Zone</span><strong>${gw.zone}</strong></div><div><span>Load</span><strong>${gw.load}%</strong></div></div>
      <div class="gw-bars">${Array.from({length:14}, () => `<i style="height:${Math.round(rnd(20,100))}%"></i>`).join('')}</div>
      <div style="display:flex;gap:5px">${gw.tags.map(tag => `<span class="gateway-tag" style="background:var(--surface-soft);color:var(--text-soft)">${tag}</span>`).join('')}</div>
    </div>`).join('');
  grid.querySelectorAll('[data-gwv]').forEach(card => card.addEventListener('click', () => openGatewayModal(gateways[+card.dataset.gwv])));
}

/* ============================================================
 * 11. Energy view
 * ========================================================== */
function renderEnergyChart() {
  const g = document.getElementById('energyPath'); if (!g) return;
  g.innerHTML = '';
  const ns = 'http://www.w3.org/2000/svg';
  const w = 600, h = 260, max = 800, min = 300;
  const step = w / (energySeries.length - 1);
  const pt = (v, i) => `${(i * step).toFixed(1)},${(h - ((v - min) / (max - min)) * h).toFixed(1)}`;
  const line = document.createElementNS(ns, 'polyline'); line.setAttribute('points', energySeries.map(pt).join(' ')); line.setAttribute('class', 'energy-path-line');
  const area = document.createElementNS(ns, 'polygon'); area.setAttribute('points', `0,${h} ${energySeries.map(pt).join(' ')} ${w},${h}`); area.setAttribute('class', 'energy-path-area');
  g.append(area, line);
}
function renderEnergyStats() {
  const today = (energySeries.reduce((a, b) => a + b, 0) / 1000 * 0.25).toFixed(1);
  const peak = Math.max(...energySeries);
  const cost = (today * 0.18).toFixed(2);
  const co2 = (today * 0.42).toFixed(1);
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set('energyToday', today); set('energyPeak', peak); set('energyCost', cost); set('energyCo2', co2);
  const bd = document.getElementById('energyBreakdown'); if (!bd) return;
  const dist = devices.filter(d => d.online && d.type === 'plug').map(d => ({ name: d.name, w: d.load }));
  const total = dist.reduce((a, b) => a + b.w, 0) || 1;
  bd.innerHTML = dist.map(d => `<div class="eb-row"><span class="eb-name">${d.name}</span><span class="eb-track"><span class="eb-fill" style="width:${(d.w / total * 100).toFixed(0)}%"></span></span><span class="eb-val">${d.w} W</span></div>`).join('') || `<div class="empty-note">—</div>`;
}

/* ============================================================
 * 12. Settings view
 * ========================================================== */
function renderSettings() {
  const list = document.getElementById('settingsList'); if (!list) return;
  list.innerHTML = `
    <div class="setting-row"><div><div class="s-label">${t('nav.settings')} · ${currentLang === 'zh' ? '语言' : 'Language'}</div><div class="s-desc">UI language</div></div>
      <select id="setLang"><option value="en"${currentLang === 'en' ? ' selected' : ''}>English</option><option value="zh"${currentLang === 'zh' ? ' selected' : ''}>中文</option></select></div>
    <div class="setting-row"><div><div class="s-label">${currentLang === 'zh' ? '主题' : 'Theme'}</div><div class="s-desc">Light / Dark</div></div>
      <select id="setTheme"><option value="light"${currentTheme === 'light' ? ' selected' : ''}>${t('status.off') === '关' ? '浅色' : 'Light'}</option><option value="dark"${currentTheme === 'dark' ? ' selected' : ''}>${t('status.off') === '关' ? '深色' : 'Dark'}</option></select></div>
    <div class="setting-row"><div><div class="s-label">${currentLang === 'zh' ? '区域' : 'Region'}</div><div class="s-desc">Default region</div></div>
      <select id="setRegion"><option>US East</option><option>EU West</option><option>Asia Pacific</option></select></div>
    <div class="setting-row"><div><div class="s-label">${currentLang === 'zh' ? '工作区名称' : 'Workspace name'}</div><div class="s-desc">Shown in header</div></div>
      <input type="text" id="setWs" value="${t('app.brand')}"></div>`;
  document.getElementById('setLang')?.addEventListener('change', e => setLang(e.target.value));
  document.getElementById('setTheme')?.addEventListener('change', e => setTheme(e.target.value));
}
function setLang(l) { currentLang = l; localStorage.setItem('aiot-lang', l); applyLang(); rerenderAll(); }
function setTheme(th) {
  currentTheme = th; localStorage.setItem('aiot-theme', th); applyTheme();
  const isDark = th.startsWith('dark');
  toast(isDark ? t('toast.themeDark') : t('toast.themeLight'), 'info');
}

/* ============================================================
 * 13. Alerts & notifications
 * ========================================================== */
function alertHtml(a) {
  const ico = { critical: '⛔', warning: '⚠', info: 'ℹ' }[a.level] || 'ℹ';
  return `<div class="alert-item">
    <span class="alert-ico ${a.level}">${ico}</span>
    <div class="a-body"><div class="a-title">${a.title}</div><div class="a-meta">${a.meta}</div></div>
    <button class="a-act" type="button" data-ack="${a.id}">${currentLang === 'zh' ? '确认' : 'Ack'}</button></div>`;
}
function renderAlerts() {
  const dot = document.getElementById('alertDot');
  if (dot) dot.hidden = alerts.length === 0;
  document.getElementById('notifDot').hidden = alerts.length === 0;
}
function openAlerts() {
  const body = alerts.length ? alerts.map(alertHtml).join('') : `<div class="empty-note">${t('view.alerts.empty')}</div>`;
  openDrawer(t('view.alerts.title'), body);
  drawerBody.querySelectorAll('[data-ack]').forEach(b => b.addEventListener('click', () => {
    alerts = alerts.filter(a => a.id !== b.dataset.ack); renderAlerts(); openAlerts(); toast(t('toast.alertAck'), 'info');
  }));
}
function openNotif() {
  const items = activities.slice(0, 6).map(a => `<div class="alert-item"><span class="alert-ico info">ℹ</span><div class="a-body"><div class="a-title">${a.name}</div><div class="a-meta">${a.id} · ${a.date}</div></div></div>`).join('');
  openDrawer(t('view.notif.title'), items || `<div class="empty-note">${t('view.notif.empty')}</div>`);
}
document.getElementById('drawerClear')?.addEventListener('click', () => { alerts = []; renderAlerts(); openAlerts(); toast(t('toast.alertClear'), 'info'); });

/* ============================================================
 * 14. Global search
 * ========================================================== */
function openSearch() {
  openModal({
    title: '🔍 ' + (currentLang === 'zh' ? '全局搜索' : 'Search'),
    body: `<div class="modal-field"><input id="searchInputGlobal" type="text" placeholder="${t('activities.searchPlaceholder')}…" autofocus></div><div class="result-list" id="searchResults"></div>`,
    foot: `<button class="btn btn-secondary" type="button" data-close>${t('modal.cancel')}</button>`
  });
  modalFoot.querySelector('[data-close]')?.addEventListener('click', closeModal);
  const inp = document.getElementById('searchInputGlobal');
  const res = document.getElementById('searchResults');
  const run = () => {
    const q = inp.value.trim().toLowerCase();
    if (!q) { res.innerHTML = '<div class="empty-note">' + (currentLang === 'zh' ? '输入以搜索设备 / 场景 / 网关' : 'Type to search devices / scenes / gateways') + '</div>'; return; }
    const r = [];
    devices.forEach(d => { if ((d.name + d.id + d.room).toLowerCase().includes(q)) r.push({ ico: TYPE_META[d.type].icon, title: d.name, sub: d.id, go: () => { switchView('devices'); } }); });
    scenes.forEach(s => { if (s.name.toLowerCase().includes(q)) r.push({ ico: '✦', title: s.name, sub: 'Scene', go: () => switchView('automation') }); });
    gateways.forEach(g => { if (g.id.toLowerCase().includes(q)) r.push({ ico: TYPE_META.gateway.icon, title: g.id, sub: g.zone, go: () => switchView('gateways') }); });
    if (!r.length) { res.innerHTML = '<div class="empty-note">' + t('toast.searchEmpty') + '</div>'; return; }
    res.innerHTML = r.map((x, i) => `<div class="result-item" data-i="${i}"><span class="r-ico" style="background:var(--surface-soft);color:var(--text-soft)">${x.ico}</span><div class="r-main"><strong>${x.title}</strong><span>${x.sub}</span></div></div>`).join('');
    res.querySelectorAll('.result-item').forEach(el => el.addEventListener('click', () => { const x = r[+el.dataset.i]; closeModal(); x.go(); toast((currentLang === 'zh' ? '打开 ' : 'Open ') + x.title, 'info'); }));
  };
  inp?.addEventListener('input', run); run();
}

/* ============================================================
 * 15. Theme toggle (single button) + lang + top actions
 * ========================================================== */
/* Theme catalog: key -> {family, preview colors} */
const THEMES = [
  { key: 'light',          group: 'light', preview: ['#ffffff', '#f7f8f9', '#b7f245'] },
  { key: 'light-sepia',    group: 'light', preview: ['#fbf7f0', '#f6efe4', '#e7b84a'] },
  { key: 'light-nord',     group: 'light', preview: ['#f4f7fb', '#eef2f7', '#88c0d0'] },
  { key: 'dark',           group: 'dark',  preview: ['#16181c', '#1c1f24', '#b7f245'] },
  { key: 'dark-midnight',  group: 'dark',  preview: ['#121728', '#182037', '#7aa2f7'] },
  { key: 'dark-forest',    group: 'dark',  preview: ['#122019', '#182a21', '#84d99b'] },
];
const themeMenu = document.getElementById('themeMenu');
function buildThemeMenu() {
  ['light', 'dark'].forEach(group => {
    const box = document.getElementById(group === 'light' ? 'themeOptsLight' : 'themeOptsDark');
    if (!box) return;
    box.innerHTML = '';
    THEMES.filter(th => th.group === group).forEach(th => {
      const btn = document.createElement('button');
      btn.type = 'button'; btn.className = 'theme-swatch'; btn.dataset.theme = th.key;
      btn.setAttribute('role', 'menuitemradio'); btn.setAttribute('aria-checked', 'false');
      btn.innerHTML =
        `<div class="theme-preview">${th.preview.map(c => `<span style="background:${c}"></span>`).join('')}</div>` +
        `<span class="theme-name" data-i18n="theme.${th.key}.name">${t('theme.' + th.key + '.name')}</span>` +
        `<span class="check-dot" ${th.key === currentTheme ? '' : 'hidden'}>✓</span>`;
      btn.addEventListener('click', () => { setTheme(th.key); closeThemeMenu(); });
      box.appendChild(btn);
    });
  });
}
function openThemeMenu() {
  if (!themeMenu) return;
  buildThemeMenu();
  themeMenu.classList.add('open');
  document.getElementById('themeToggleBtn')?.setAttribute('aria-expanded', 'true');
}
function closeThemeMenu() {
  if (!themeMenu) return;
  themeMenu.classList.remove('open');
  document.getElementById('themeToggleBtn')?.setAttribute('aria-expanded', 'false');
}
document.getElementById('themeToggleBtn')?.addEventListener('click', (e) => {
  e.stopPropagation();
  themeMenu?.classList.contains('open') ? closeThemeMenu() : openThemeMenu();
});
document.getElementById('themeMenuClose')?.addEventListener('click', (e) => { e.stopPropagation(); closeThemeMenu(); });
themeMenu?.addEventListener('click', (e) => e.stopPropagation());
document.addEventListener('click', (e) => {
  if (themeMenu?.classList.contains('open') && !themeMenu.contains(e.target) && e.target.id !== 'themeToggleBtn') closeThemeMenu();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeThemeMenu(); });
document.getElementById('langBtn')?.addEventListener('click', () => setLang(currentLang === 'en' ? 'zh' : 'en'));
document.getElementById('searchBtn')?.addEventListener('click', openSearch);
document.getElementById('notifBtn')?.addEventListener('click', openNotif);
document.getElementById('alertBtn')?.addEventListener('click', openAlerts);
document.getElementById('profileBtn')?.addEventListener('click', () => toast(t('toast.profile'), 'info'));
document.getElementById('helpBtn')?.addEventListener('click', () => toast(t('toast.help'), 'info'));
document.getElementById('logoutBtn')?.addEventListener('click', e => { e.preventDefault(); toast(t('toast.logout'), 'warn'); });
document.getElementById('brandHome')?.addEventListener('click', e => { e.preventDefault(); switchView('overview'); });

/* ============================================================
 * 16. Devices card actions (overview)
 * ========================================================== */
document.getElementById('regionPill')?.addEventListener('click', () => {
  const regions = [{ key: 'global', flag: 'flag-us' }, { key: 'us', flag: 'flag-us' }, { key: 'eu', flag: 'flag-eu' }, { key: 'asia', flag: 'flag-gb' }];
  const label = document.querySelector('#regionPill span:nth-of-type(2)');
  const flag = document.querySelector('#regionPill .flag');
  const cur = regions.find(r => label.textContent === t('region.' + r.key)) || regions[0];
  const next = regions[(regions.indexOf(cur) + 1) % regions.length];
  label.textContent = t('region.' + next.key); flag.className = `flag ${next.flag}`;
  toast(t('toast.region') + ' ' + t('region.' + next.key), 'info');
});
document.getElementById('addDeviceBtn')?.addEventListener('click', openAddDevice);
document.getElementById('devAddTop')?.addEventListener('click', openAddDevice);
function openAddDevice() {
  const typeOpts = ['sensor', 'camera', 'thermostat', 'light', 'lock', 'plug', 'gateway'].map(k => `<option value="${k}">${t('type.' + k)}</option>`).join('');
  const roomOpts = ROOMS.map(r => `<option value="${r}">${r}</option>`).join('');
  openModal({
    title: t('modal.addDevice.title'),
    body: `<div class="modal-field"><label>${t('modal.addDevice.name')}</label><input id="devName" type="text" placeholder="${t('modal.addDevice.name')}"></div>
      <div class="modal-field"><label>${t('modal.addDevice.type')}</label><select id="devType">${typeOpts}</select></div>
      <div class="modal-field"><label>${t('modal.addDevice.group')}</label><select id="devRoom">${roomOpts}</select></div>`,
    foot: `<button class="btn btn-secondary" type="button" data-close>${t('modal.cancel')}</button><button class="btn btn-primary" type="button" id="devSubmit">${t('modal.addDevice.submit')}</button>`
  });
  modalFoot.querySelector('[data-close]')?.addEventListener('click', closeModal);
  document.getElementById('devSubmit')?.addEventListener('click', () => {
    const name = document.getElementById('devName').value.trim();
    const type = document.getElementById('devType').value;
    const room = document.getElementById('devRoom').value;
    const d = makeDevice(type, room); if (name) d.name = name;
    devices.push(d);
    renderDeviceGroups(); renderDeviceGrid(); renderSensors(); renderEnergyStats();
    closeModal(); toast(t('toast.addDevice'), 'success');
  });
}
document.getElementById('scanBtn')?.addEventListener('click', e => {
  const btn = e.currentTarget; btn.classList.add('is-busy'); toast(t('toast.scanning'), 'info');
  setTimeout(() => { btn.classList.remove('is-busy'); toast(t('toast.scan'), 'warn'); }, 1600);
});
document.getElementById('addGatewayBtn')?.addEventListener('click', openAddGateway);
document.getElementById('gwAddTop')?.addEventListener('click', openAddGateway);
function openAddGateway() {
  const zoneOpts = ['US East', 'EU West', 'Asia Pacific'].map(z => `<option value="${z}">${z}</option>`).join('');
  openModal({
    title: t('modal.addGateway.title'),
    body: `<div class="modal-field"><label>${t('modal.addGateway.name')}</label><input id="gwName" type="text" placeholder="${t('modal.addGateway.name')}"></div>
      <div class="modal-field"><label>${t('modal.addGateway.zone')}</label><select id="gwZone">${zoneOpts}</select></div>`,
    foot: `<button class="btn btn-secondary" type="button" data-close>${t('modal.cancel')}</button><button class="btn btn-primary" type="button" id="gwSubmit">${t('modal.addGateway.submit')}</button>`
  });
  modalFoot.querySelector('[data-close]')?.addEventListener('click', closeModal);
  document.getElementById('gwSubmit')?.addEventListener('click', () => {
    const name = document.getElementById('gwName').value.trim();
    const zone = document.getElementById('gwZone').value;
    const id = 'GW-' + Math.floor(rnd(1000, 9999));
    gateways.push({ id, zone, online: true, tags: ['Wi-Fi'], load: Math.round(rnd(20, 80)) });
    renderGateways(); renderGatewaysView(); closeModal(); toast(t('toast.gateway') + (name ? ' · ' + name : ''), 'success');
  });
}

/* ============================================================
 * 17. View switching (rail + topnav) — keeps page state
 * ========================================================== */
const VIEW_PANELS = ['overview', 'devices', 'sensors', 'automation', 'gateways', 'energy', 'settings'];
let currentView = 'overview';
function switchView(view) {
  if (!VIEW_PANELS.includes(view)) view = 'overview';
  currentView = view;
  VIEW_PANELS.forEach(v => {
    const p = document.querySelector(`[data-view-panel="${v}"]`);
    if (p) p.hidden = v !== view;
  });
  document.querySelectorAll('[data-view]').forEach(link => link.classList.toggle('active', link.dataset.view === view));
  if (view === 'devices') renderDeviceGrid();
  if (view === 'sensors') renderSensors();
  if (view === 'automation') renderScenes();
  if (view === 'gateways') renderGatewaysView();
  if (view === 'energy') { renderEnergyChart(); renderEnergyStats(); }
  if (view === 'settings') renderSettings();
  renderSubnav(view);
}
document.querySelectorAll('[data-view]').forEach(link => link.addEventListener('click', e => { e.preventDefault(); switchView(link.dataset.view); }));

/* Top bar renders sub-functions of the active side-rail module */
const SUBNAV = {
  overview: [],
  devices: [
    { id: 'all', label: 'view.devices.all', act: () => { devFilter = 'all'; renderDeviceGrid(); markSub('all'); } },
    { id: 'online', label: 'view.devices.online', act: () => { devFilter = 'online'; renderDeviceGrid(); markSub('online'); } },
    { sep: true },
    { id: 'add', label: 'panel.devices.add', primary: true, act: () => openAddDevice() },
  ],
  sensors: [
    { id: 'live', label: 'view.live', badge: true },
    { sep: true },
    { id: 'refresh', label: 'modal.save', act: () => { renderSensors(); toast(currentLang === 'zh' ? '已刷新遥测' : 'Telemetry refreshed', 'info'); } },
  ],
  automation: [
    { id: 'new', label: 'view.auto.add', primary: true, act: () => document.getElementById('addSceneBtn')?.click() },
  ],
  gateways: [
    { id: 'add', label: 'cards.add', primary: true, act: () => openAddGateway() },
  ],
  energy: [
    { id: 'today', label: 'view.energy.today', act: () => { markSub('today'); renderEnergyStats(); } },
    { id: 'week', label: 'nav.overview', act: () => { markSub('week'); renderEnergyStats(); } },
  ],
  settings: [],
};
function markSub(id) {
  document.querySelectorAll('#subnav .sub-tab').forEach(b => b.classList.toggle('active', b.dataset.sub === id));
}
function renderSubnav(view) {
  const nav = document.getElementById('subnav'); if (!nav) return;
  const items = SUBNAV[view] || [];
  nav.innerHTML = items.map(it => {
    if (it.sep) return '<span class="sub-sep"></span>';
    const cls = 'sub-tab' + (it.primary ? ' sub-action primary' : '') + (it.badge ? ' sub-action' : '');
    const active = (view === 'devices' && devFilter === it.id) || (view === 'energy' && (it.id === 'today')) ? ' active' : '';
    return `<button class="${cls} ${active}" type="button" data-sub="${it.id}">${it.badge ? '<span class="live-dot"></span>' : ''}${t(it.label)}</button>`;
  }).join('');
  nav.querySelectorAll('[data-sub]').forEach(btn => {
    const it = items.find(x => x.id === btn.dataset.sub);
    if (it && it.act) btn.addEventListener('click', it.act);
  });
}

/* ============================================================
 * 18. Live tick (mock realtime)
 * ========================================================== */
function tick() {
  // telemetry numbers
  renderStats();
  // energy series
  energySeries.push(Math.round(rnd(380, 720))); energySeries.shift();
  if (currentView === 'energy') { renderEnergyChart(); renderEnergyStats(); }
  // sensors
  devices.filter(d => d.type === 'sensor' && d.online).forEach(d => {
    d.value = +(d.value + rnd(-0.6, 0.6)).toFixed(1);
    (sensorSpark[d.id] = sensorSpark[d.id] || []).push(d.value); sensorSpark[d.id].shift();
  });
  if (currentView === 'sensors') renderSensors();
  // occasionally push a new activity + alert
  if (Math.random() < 0.25) {
    const d = pick(devices.filter(x => x.online));
    if (d) {
      activities.unshift({ id: d.id + '_' + Math.floor(rnd(100, 999)), name: d.name + ' update', icon: d.type, value: readoutOf(d).val, status: 'Completed', date: 'just now', checked: false });
      activities = activities.slice(0, 20);
      if (currentView === 'overview') renderActivities(getFiltered());
    }
  }
  if (Math.random() < 0.1) {
    const d = pick(devices);
    alerts.unshift({ id: 'A' + Math.floor(rnd(100, 999)), level: pick(['warning', 'info', 'critical']), title: d.name + ' event', meta: d.room + ' · ' + (currentLang === 'zh' ? '刚刚' : 'just now'), device: d.id });
    alerts = alerts.slice(0, 8); renderAlerts();
  }
}

/* ============================================================
 * 19. Re-render all (after language/theme change)
 * ========================================================== */
function rerenderAll() {
  renderChart(); renderDeviceGroups(); renderGateways(); renderActivities(getFiltered()); syncSelectAll();
  renderDeviceGrid(); renderSensors(); renderScenes(); renderGatewaysView(); renderEnergyChart(); renderEnergyStats(); renderSettings(); renderAlerts();
  renderSubnav(currentView);
}
document.addEventListener('langchange', () => { rerenderAll(); });

/* ============================================================
 * 20. Bootstrap
 * ========================================================== */
applyTheme(); applyLang();
renderChart(); renderDeviceGroups(); renderGateways(); renderActivities(getFiltered()); syncSelectAll();
renderDeviceGrid(); renderSensors(); renderScenes(); renderGatewaysView(); renderEnergyChart(); renderEnergyStats(); renderSettings(); renderAlerts();
setInterval(tick, 2500);
