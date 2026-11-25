'use strict';
/* ================= DATA ================= */
const DISHES = {
  nasigoreng: { name:'Nasi Goreng', station:'wok', cook:4, burn:3, score:10, coins:5,
    svg:'<svg viewBox="0 0 64 64"><ellipse cx="32" cy="44" rx="26" ry="9" fill="#e8e8e8" stroke="#9aa0a6" stroke-width="2"/><ellipse cx="32" cy="41" rx="22" ry="7" fill="#f5f5f5"/><path d="M16 38 Q18 24 32 22 Q46 24 48 38 Q40 42 32 42 Q24 42 16 38" fill="#e8913a"/><circle cx="26" cy="30" r="2" fill="#58d68d"/><circle cx="36" cy="28" r="2" fill="#ff5a4e"/><circle cx="31" cy="34" r="2" fill="#ffd23f"/><ellipse cx="32" cy="20" rx="7" ry="4.5" fill="#fff" stroke="#e8b64c" stroke-width="1.5"/><circle cx="32" cy="20" r="2.6" fill="#f7c948"/></svg>' },
  miegoreng: { name:'Mie Goreng', station:'wok', cook:4, burn:3, score:10, coins:5,
    svg:'<svg viewBox="0 0 64 64"><ellipse cx="32" cy="44" rx="26" ry="9" fill="#e8e8e8" stroke="#9aa0a6" stroke-width="2"/><ellipse cx="32" cy="41" rx="22" ry="7" fill="#f5f5f5"/><path d="M18 36 q4 -6 8 0 t8 0 t8 0 t8 0" stroke="#e8913a" stroke-width="3.4" fill="none" stroke-linecap="round"/><path d="M20 30 q4 -6 8 0 t8 0 t8 0" stroke="#f5a623" stroke-width="3.4" fill="none" stroke-linecap="round"/><circle cx="24" cy="26" r="2.2" fill="#58d68d"/><circle cx="40" cy="26" r="2.2" fill="#ff5a4e"/><path d="M46 22 l4 -6 M50 24 l6 -3" stroke="#58d68d" stroke-width="2.4" stroke-linecap="round"/></svg>' },
  sateayam: { name:'Sate Ayam', station:'grill', cook:6, burn:3, score:15, coins:8,
    svg:'<svg viewBox="0 0 64 64"><ellipse cx="32" cy="46" rx="24" ry="8" fill="#e8e8e8" stroke="#9aa0a6" stroke-width="2"/><line x1="18" y1="14" x2="30" y2="46" stroke="#c89b6a" stroke-width="2.6" stroke-linecap="round"/><line x1="34" y1="14" x2="44" y2="46" stroke="#c89b6a" stroke-width="2.6" stroke-linecap="round"/><rect x="20" y="20" width="9" height="8" rx="2" fill="#b06a2c"/><rect x="23" y="30" width="9" height="8" rx="2" fill="#c07a33"/><rect x="34" y="20" width="9" height="8" rx="2" fill="#b06a2c"/><rect x="37" y="30" width="9" height="8" rx="2" fill="#c07a33"/><path d="M22 52 q10 6 20 0" stroke="#8a5a2b" stroke-width="3" fill="none" stroke-linecap="round"/></svg>' },
  gorengan: { name:'Gorengan', station:'fryer', cook:3, burn:2.5, score:8, coins:4,
    svg:'<svg viewBox="0 0 64 64"><ellipse cx="32" cy="44" rx="26" ry="9" fill="#e8e8e8" stroke="#9aa0a6" stroke-width="2"/><ellipse cx="32" cy="41" rx="22" ry="7" fill="#f5f5f5"/><ellipse cx="24" cy="34" rx="8" ry="6" fill="#e8a33d"/><ellipse cx="38" cy="32" rx="8" ry="6" fill="#f0b45a"/><ellipse cx="31" cy="38" rx="8" ry="5.5" fill="#d98f2b"/><circle cx="22" cy="32" r="1.6" fill="#8a5a2b"/><circle cx="39" cy="30" r="1.6" fill="#8a5a2b"/><circle cx="31" cy="36" r="1.6" fill="#8a5a2b"/></svg>' },
  esteh: { name:'Es Teh', station:'dispenser', cook:2, burn:0, score:6, coins:3,
    svg:'<svg viewBox="0 0 64 64"><path d="M20 14 h24 l-3 40 a4 4 0 0 1 -4 4 h-10 a4 4 0 0 1 -4 -4 z" fill="#dfeef5" stroke="#9aa0a6" stroke-width="2"/><path d="M22 22 h20 l-2 30 a3 3 0 0 1 -3 3 h-10 a3 3 0 0 1 -3 -3 z" fill="#c96a1e"/><rect x="25" y="26" width="7" height="7" rx="1.5" fill="#bfe8f5" stroke="#7fc4de" stroke-width="1.4" transform="rotate(12 28 29)"/><rect x="34" y="32" width="7" height="7" rx="1.5" fill="#bfe8f5" stroke="#7fc4de" stroke-width="1.4" transform="rotate(-10 37 35)"/><line x1="40" y1="6" x2="34" y2="26" stroke="#ff5a7a" stroke-width="3.4" stroke-linecap="round"/><ellipse cx="32" cy="14" rx="12" ry="3" fill="#f5f5f5"/></svg>' }
};
const STATIONS = [
  { id:'wok', name:'WOK', dishes:['nasigoreng','miegoreng'],
    icon:'<svg viewBox="0 0 64 64"><path d="M8 30 Q32 58 56 30 L52 24 Q32 44 12 24 Z" fill="#3d3d3d" stroke="#888" stroke-width="2"/><line x1="56" y1="28" x2="62" y2="20" stroke="#8b5a2b" stroke-width="4" stroke-linecap="round"/><path d="M22 30 q4 -6 8 0 t8 0" stroke="#ff9f1c" stroke-width="3" fill="none" stroke-linecap="round"/></svg>' },
  { id:'grill', name:'GRILL', dishes:['sateayam'],
    icon:'<svg viewBox="0 0 64 64"><rect x="8" y="34" width="48" height="14" rx="4" fill="#4a4a4a" stroke="#888" stroke-width="2"/><line x1="16" y1="38" x2="48" y2="38" stroke="#ff6b35" stroke-width="3" stroke-linecap="round"/><line x1="16" y1="43" x2="48" y2="43" stroke="#ff9f1c" stroke-width="3" stroke-linecap="round"/><path d="M20 26 q4 -8 8 0 M36 26 q4 -8 8 0" stroke="#ff5a4e" stroke-width="3" fill="none" stroke-linecap="round"/></svg>' },
  { id:'fryer', name:'FRYER', dishes:['gorengan'],
    icon:'<svg viewBox="0 0 64 64"><path d="M14 22 h36 l-4 30 a4 4 0 0 1 -4 4 h-20 a4 4 0 0 1 -4 -4 z" fill="#5a5a5a" stroke="#888" stroke-width="2"/><circle cx="24" cy="30" r="4" fill="#ffd23f"/><circle cx="36" cy="36" r="4" fill="#ffd23f"/><circle cx="30" cy="42" r="4" fill="#ffb347"/><path d="M20 22 q4 -6 8 0 t8 0 t8 0" stroke="#ff9f1c" stroke-width="2.6" fill="none" stroke-linecap="round"/></svg>' },
  { id:'dispenser', name:'DRINKS', dishes:['esteh'],
    icon:'<svg viewBox="0 0 64 64"><rect x="18" y="12" width="28" height="34" rx="6" fill="#dfeef5" stroke="#9aa0a6" stroke-width="2"/><rect x="22" y="24" width="20" height="18" rx="3" fill="#c96a1e"/><circle cx="32" cy="52" r="4" fill="#9aa0a6"/><line x1="32" y1="46" x2="32" y2="50" stroke="#9aa0a6" stroke-width="3"/></svg>' }
];
const FACES = [
  { skin:'#f2c89b', hair:'#2b2b2b', shirt:'#e74c3c', style:'short' },
  { skin:'#d9a066', hair:'#1a1a1a', shirt:'#3498db', style:'bun' },
  { skin:'#f7d7b0', hair:'#6b3a1e', shirt:'#27ae60', style:'long' },
  { skin:'#c98a5a', hair:'#111111', shirt:'#9b59b6', style:'cap' }
];
const NAMES = ['Budi','Sari','Agus','Dewi','Rina','Joko','Maya','Andi','Putri','Rizky','Lina','Fajar'];
const LEVEL_CFG = [
  { spawn:6.0, patience:26, orderMax:1 },
  { spawn:5.0, patience:21, orderMax:2 },
  { spawn:4.0, patience:17, orderMax:2 }
];
const ROUND_TIME = 90;

/* ================= STATE ================= */
let S = null;
let audioCtx = null, muted = false;
let lastTick = 0, rafId = null, toastTimer = null;

function newState() {
  return {
    running:false, paused:false, timeLeft:ROUND_TIME, level:1,
    score:0, coins:0, combo:0, bestCombo:0, served:0, lost:0,
    customers:[], spawnIn:2.5,
    stations:{}, tray:[], selected:-1,
    highScore: parseInt(localStorage.getItem('warungRushHigh')||'0',10) || 0
  };
}
function initStations() {
  const o = {};
  for (const st of STATIONS) o[st.id] = { dish:null, progress:0, phase:'idle' }; // phase: idle|cooking|ready|burnt
  return o;
}

/* ================= AUDIO (WebAudio, no files) ================= */
function ensureAudio() {
  if (!audioCtx) { try { audioCtx = new (window.AudioContext||window.webkitAudioContext)(); } catch(e){} }
  if (audioCtx && audioCtx.state === 'suspended') { const p = audioCtx.resume(); if (p && p.catch) p.catch(()=>{}); }
}
function tone(freq, dur, type, vol, when) {
  if (!audioCtx || muted) return;
  const t = audioCtx.currentTime + (when||0);
  const o = audioCtx.createOscillator(), g = audioCtx.createGain();
  o.type = type||'sine'; o.frequency.value = freq;
  g.gain.setValueAtTime(vol||0.18, t);
  g.gain.exponentialRampToValueAtTime(0.001, t+dur);
  o.connect(g); g.connect(audioCtx.destination);
  o.start(t); o.stop(t+dur+0.02);
}
function noiseBurst(dur, freq, vol) {
  if (!audioCtx || muted) return;
  const len = Math.floor(audioCtx.sampleRate * dur);
  const buf = audioCtx.createBuffer(1, len, audioCtx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i=0;i<len;i++) d[i] = (Math.random()*2-1) * (1 - i/len);
  const src = audioCtx.createBufferSource(); src.buffer = buf;
  const f = audioCtx.createBiquadFilter(); f.type='bandpass'; f.frequency.value = freq||3500; f.Q.value = 0.8;
  const g = audioCtx.createGain(); g.gain.value = vol||0.25;
  src.connect(f); f.connect(g); g.connect(audioCtx.destination);
  src.start();
}
const sfx = {
  pop(){ tone(600, .07, 'square', .08); },
  sizzle(){ noiseBurst(.5, 4200, .22); noiseBurst(.3, 2600, .12); },
  ding(){ tone(880,.12,'sine',.2); tone(1318,.18,'sine',.18,.09); },
  buzz(){ tone(140,.25,'sawtooth',.16); tone(110,.25,'sawtooth',.14,.02); },
  level(){ tone(523,.1,'sine',.18); tone(659,.1,'sine',.18,.1); tone(784,.2,'sine',.2,.2); },
  trash(){ noiseBurst(.25, 900, .2); },
  over(){ tone(392,.2,'sine',.18); tone(330,.2,'sine',.18,.18); tone(262,.4,'sine',.2,.36); }
};

/* ================= SVG helpers ================= */
function faceSVG(cust) {
  const f = FACES[cust.faceIdx];
  let hair = '';
  if (f.style==='short') hair = '<path d="M18 30 Q18 10 32 10 Q46 10 46 30 Q42 20 32 20 Q22 20 18 30" fill="'+f.hair+'"/>';
  if (f.style==='bun') hair = '<path d="M18 30 Q18 10 32 10 Q46 10 46 30 Q42 20 32 20 Q22 20 18 30" fill="'+f.hair+'"/><circle cx="32" cy="10" r="6" fill="'+f.hair+'"/>';
  if (f.style==='long') hair = '<path d="M16 46 Q14 10 32 10 Q50 10 48 46 L44 46 Q46 22 32 20 Q18 22 20 46 Z" fill="'+f.hair+'"/>';
  if (f.style==='cap') hair = '<path d="M16 26 Q16 8 32 8 Q48 8 48 26 L44 26 Q44 16 32 16 Q20 16 20 26 Z" fill="#e74c3c"/><rect x="14" y="24" width="36" height="4" rx="2" fill="#c0392b"/>';
  const mood = cust.patience < cust.patienceMax*0.35 ? 'M26 42 Q32 37 38 42' : 'M25 41 Q32 47 39 41';
  return '<svg class="face" viewBox="0 0 64 64"><rect x="10" y="48" width="44" height="16" rx="7" fill="'+f.shirt+'"/><circle cx="32" cy="30" r="16" fill="'+f.skin+'"/>'+hair+'<circle cx="26" cy="29" r="2.2" fill="#222"/><circle cx="38" cy="29" r="2.2" fill="#222"/><path d="'+mood+'" stroke="#7a3b12" stroke-width="2.2" fill="none" stroke-linecap="round"/><circle cx="21" cy="36" r="2.6" fill="#f5a3a3" opacity=".6"/><circle cx="43" cy="36" r="2.6" fill="#f5a3a3" opacity=".6"/></svg>';
}
function dishSVG(id, size) {
  return DISHES[id].svg;
}

/* ================= DOM BUILD ================= */
const $ = id => document.getElementById(id);
const customersEl = $('customers'), stationsEl = $('stations'), trayEl = $('tray');

function buildStations() {
  stationsEl.innerHTML = '';
  for (const st of STATIONS) {
    const div = document.createElement('div');
    div.className = 'station'; div.id = 'st-' + st.id;
    div.innerHTML = '<h3>' + st.icon + st.name + '</h3>' +
      '<div class="cookbtns">' + st.dishes.map(d =>
        '<button class="cookbtn" data-station="'+st.id+'" data-dish="'+d+'">'+DISHES[d].svg+'<span>'+DISHES[d].name+'</span></button>').join('') + '</div>' +
      '<div class="cookarea"><div class="pot"></div><div class="status">Ready</div><div class="prog"><div></div></div></div>';
    div.querySelector('.cookarea').addEventListener('click', () => onStationClick(st.id));
    stationsEl.appendChild(div);
  }
  stationsEl.querySelectorAll('.cookbtn').forEach(b =>
    b.addEventListener('click', e => { e.stopPropagation(); startCooking(b.dataset.station, b.dataset.dish); }));
}
function buildTray() {
  trayEl.innerHTML = '';
  for (let i=0;i<4;i++) {
    const s = document.createElement('div');
    s.className = 'trayslot'; s.id = 'tray-'+i; s.textContent = 'Empty';
    s.addEventListener('click', () => selectTray(i));
    trayEl.appendChild(s);
  }
}
function buildMenuRow() {
  $('menuRow').innerHTML = Object.keys(DISHES).map(id =>
    '<div class="dishchip">'+DISHES[id].svg+'<span>'+DISHES[id].name+'<br><small style="color:#ffd98a">'+DISHES[id].cook+'s cook</small></span></div>').join('');
}

/* ================= CUSTOMERS ================= */
let custSeq = 0;
function spawnCustomer() {
  if (S.customers.length >= 4) return;
  const cfg = LEVEL_CFG[S.level-1];
  const nItems = cfg.orderMax === 1 ? 1 : (Math.random() < 0.55 ? 1 : 2);
  const order = [];
  const keys = Object.keys(DISHES);
  for (let i=0;i<nItems;i++) order.push(keys[Math.floor(Math.random()*keys.length)]);
  const c = {
    id: ++custSeq, name: NAMES[Math.floor(Math.random()*NAMES.length)],
    faceIdx: Math.floor(Math.random()*FACES.length),
    order: order.map(d => ({ dish:d, done:false })),
    patienceMax: cfg.patience, patience: cfg.patience
  };
  S.customers.push(c);
  renderCustomers();
}
function renderCustomers() {
  customersEl.innerHTML = '';
  for (let i=0;i<4;i++) {
    const c = S.customers[i];
    const div = document.createElement('div');
    if (!c) { div.className = 'cust empty'; div.innerHTML = '<div class="cname" style="margin-top:90px;color:#caa">Waiting for customers...</div>'; }
    else {
      div.className = 'cust'; div.dataset.cid = c.id;
      div.innerHTML = faceSVG(c) + '<div class="cname">'+c.name+'</div>' +
        '<div class="order">' + c.order.map(o =>
          '<div class="orditem'+(o.done?' done':'')+'">'+DISHES[o.dish].svg+'</div>').join('') + '</div>' +
        '<div class="patience"><div style="width:'+(c.patience/c.patienceMax*100)+'%"></div></div>' +
        '<div class="mood"></div><div class="tableline"></div>';
      div.addEventListener('click', () => serveCustomer(c.id));
    }
    customersEl.appendChild(div);
  }
}
function updateCustomerBars() {
  for (const el of customersEl.children) {
    const cid = el.dataset && el.dataset.cid;
    if (!cid) continue;
    const c = S.customers.find(x => x.id == cid);
    if (!c) continue;
    const bar = el.querySelector('.patience');
    const fill = bar.firstElementChild;
    const pct = Math.max(0, c.patience / c.patienceMax * 100);
    fill.style.width = pct + '%';
    bar.className = 'patience' + (pct < 30 ? ' low' : pct < 60 ? ' mid' : '');
    const mood = el.querySelector('.mood');
    mood.textContent = pct < 30 ? 'Getting angry!' : pct < 60 ? 'Still waiting...' : 'Take your time';
  }
}

/* ================= COOKING ================= */
function startCooking(stId, dishId) {
  if (!S.running || S.paused) return;
  const st = S.stations[stId];
  if (st.phase !== 'idle') return;
  st.dish = dishId; st.progress = 0; st.phase = 'cooking';
  sfx.sizzle(); sfx.pop();
  updateStation(stId);
}
function onStationClick(stId) {
  if (!S.running || S.paused) return;
  const st = S.stations[stId];
  if (st.phase === 'burnt') { st.phase='idle'; st.dish=null; st.progress=0; sfx.trash(); toast('Burnt food trashed!'); updateStation(stId); }
  else if (st.phase === 'ready') { collectFromStation(stId); }
}
function collectFromStation(stId) {
  const st = S.stations[stId];
  if (S.tray.length >= 4) { toast('Tray is full! Serve a dish first.'); sfx.buzz(); return; }
  S.tray.push(st.dish);
  st.phase='idle'; st.dish=null; st.progress=0;
  sfx.pop(); renderTray(); updateStation(stId);
}
function updateStation(stId) {
  const st = S.stations[stId];
  const el = $('st-'+stId);
  if (!el) return;
  const area = el.querySelector('.cookarea');
  const pot = area.querySelector('.pot');
  const status = area.querySelector('.status');
  const prog = area.querySelector('.prog');
  const bar = prog.firstElementChild;
  const d = DISHES[st.dish];
  el.querySelectorAll('.cookbtn').forEach(b => b.disabled = (st.phase !== 'idle'));
  if (st.phase === 'idle') {
    pot.innerHTML = ''; status.textContent = 'Ready'; status.className='status';
    prog.classList.remove('burn'); bar.style.width = '0%';
    const steam = el.querySelector('.steam'); if (steam) steam.remove();
  } else if (st.phase === 'cooking') {
    pot.innerHTML = d.svg;
    status.textContent = 'Cooking ' + d.name + '...'; status.className='status';
    prog.classList.remove('burn');
    bar.style.width = Math.min(100, st.progress / d.cook * 100) + '%';
    if (!el.querySelector('.steam')) { const s=document.createElement('div'); s.className='steam'; s.textContent='~'; el.appendChild(s); }
  } else if (st.phase === 'ready') {
    pot.innerHTML = d.svg;
    status.textContent = d.name + ' READY! Tap to collect'; status.className='status ready';
    prog.classList.remove('burn'); bar.style.width = '100%';
    const steam = el.querySelector('.steam'); if (steam) steam.remove();
  } else if (st.phase === 'burnt') {
    pot.innerHTML = '<svg viewBox="0 0 64 64"><ellipse cx="32" cy="44" rx="24" ry="8" fill="#222"/><path d="M16 40 Q18 22 32 22 Q46 22 48 40 Q40 44 32 44 Q24 44 16 40" fill="#1a1a1a"/><circle cx="26" cy="30" r="2" fill="#555"/><circle cx="36" cy="28" r="2" fill="#555"/><path d="M26 36 q6 -3 12 0" stroke="#555" stroke-width="2" fill="none"/></svg>';
    status.textContent = 'BURNT! Tap to trash'; status.className='status burnt';
    prog.classList.add('burn'); bar.style.width = '100%';
    const steam = el.querySelector('.steam'); if (steam) steam.remove();
  }
}

/* ================= TRAY & SERVING ================= */
function renderTray() {
  for (let i=0;i<4;i++) {
    const slot = $('tray-'+i);
    const dishId = S.tray[i];
    slot.className = 'trayslot' + (dishId ? ' full' : '') + (S.selected === i ? ' selected' : '');
    slot.innerHTML = dishId ? DISHES[dishId].svg + '<span>' + DISHES[dishId].name + '</span>' : 'Empty';
  }
}
function selectTray(i) {
  if (!S.running || S.paused) return;
  if (!S.tray[i]) { S.selected = -1; renderTray(); return; }
  S.selected = (S.selected === i) ? -1 : i;
  sfx.pop(); renderTray();
}
function serveCustomer(cid) {
  if (!S.running || S.paused) return;
  const c = S.customers.find(x => x.id === cid);
  if (!c) return;
  const el = customersEl.querySelector('[data-cid="'+cid+'"]');
  if (S.selected < 0 || !S.tray[S.selected]) { toast('Pick a dish from the tray first!'); return; }
  const dishId = S.tray[S.selected];
  const slot = c.order.find(o => !o.done && o.dish === dishId);
  if (!slot) {
    // wrong dish
    S.combo = 0; c.patience = Math.max(0, c.patience - 2);
    sfx.buzz(); floater(el, 'WRONG DISH!', true);
    if (el) { el.classList.remove('angry'); void el.offsetWidth; el.classList.add('angry'); }
    updateHUD(); return;
  }
  slot.done = true;
  S.tray.splice(S.selected, 1); S.selected = -1;
  S.combo++; S.bestCombo = Math.max(S.bestCombo, S.combo);
  const mult = Math.min(S.combo, 5);
  const d = DISHES[dishId];
  const pts = d.score * mult, cn = d.coins;
  S.score += pts; S.coins += cn; S.served++;
  sfx.ding(); floater(el, '+'+pts+'  •  '+cn+' coins', false);
  if (el) { el.classList.remove('serving'); void el.offsetWidth; el.classList.add('serving'); }
  renderTray(); renderCustomers(); updateHUD();
  if (c.order.every(o => o.done)) {
    S.score += 15; S.coins += 5;
    toast(c.name + ' is happy! +15 bonus');
    setTimeout(() => { S.customers = S.customers.filter(x => x.id !== cid); renderCustomers(); }, 350);
    updateHUD();
  }
}
function loseCustomer(c) {
  S.customers = S.customers.filter(x => x.id !== c.id);
  S.lost++; S.combo = 0; S.score = Math.max(0, S.score - 5);
  sfx.buzz(); toast(c.name + ' walked away! -5');
  renderCustomers(); updateHUD();
}

/* ================= HUD / FX ================= */
function updateHUD() {
  $('score').textContent = S.score;
  $('coins').textContent = S.coins;
  $('combo').textContent = 'x' + Math.max(1, Math.min(S.combo, 5));
  $('comboStat').classList.toggle('hot', S.combo >= 3);
  $('level').textContent = S.level;
  $('time').textContent = Math.ceil(S.timeLeft);
  $('timeStat').classList.toggle('warn', S.timeLeft <= 10);
}
function toast(msg) {
  const t = $('toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 1600);
}
function floater(anchorEl, text, bad) {
  if (!anchorEl) return;
  const r = anchorEl.getBoundingClientRect();
  const stage = $('stage').getBoundingClientRect();
  const scale = stage.width / 1280 || 1;
  const f = document.createElement('div');
  f.className = 'floater' + (bad ? ' bad' : '');
  f.textContent = text;
  f.style.left = ((r.left - stage.left) / scale + r.width / scale / 2 - 40) + 'px';
  f.style.top = ((r.top - stage.top) / scale + 10) + 'px';
  $('floaters').appendChild(f);
  setTimeout(() => f.remove(), 1000);
}

/* ================= GAME LOOP ================= */
function tick(ts) {
  if (!S.running) return;
  if (S.paused) { lastTick = ts; rafId = requestAnimationFrame(tick); return; }
  const dt = Math.min(0.1, (ts - lastTick) / 1000 || 0);
  lastTick = ts;

  // timer + level
  S.timeLeft -= dt;
  const lvl = S.timeLeft > 60 ? 1 : S.timeLeft > 30 ? 2 : 3;
  if (lvl !== S.level) {
    S.level = lvl;
    toast('LEVEL ' + lvl + '! Faster customers!');
    sfx.level();
  }
  if (S.timeLeft <= 0) { S.timeLeft = 0; updateHUD(); endGame(); return; }

  // spawn customers
  S.spawnIn -= dt;
  if (S.spawnIn <= 0) {
    spawnCustomer();
    S.spawnIn = LEVEL_CFG[S.level-1].spawn * (0.85 + Math.random()*0.3);
  }

  // customers patience
  for (const c of [...S.customers]) {
    c.patience -= dt;
    if (c.patience <= 0) loseCustomer(c);
  }
  updateCustomerBars();

  // stations
  for (const stId of Object.keys(S.stations)) {
    const st = S.stations[stId];
    if (st.phase === 'cooking') {
      const d = DISHES[st.dish];
      st.progress += dt;
      if (st.progress >= d.cook) {
        st.phase = 'ready';
        // auto-collect if tray has room
        if (S.tray.length < 4) {
          S.tray.push(st.dish);
          st.phase='idle'; st.dish=null; st.progress=0;
          sfx.pop(); renderTray();
        } else {
          sfx.ding();
        }
      }
      updateStation(stId);
    } else if (st.phase === 'ready') {
      const d = DISHES[st.dish];
      st.progress += dt;
      if (d.burn > 0 && st.progress >= d.cook + d.burn) {
        st.phase = 'burnt'; sfx.buzz(); toast(d.name + ' burnt!');
      }
      updateStation(stId);
    }
  }
  updateHUD();
  rafId = requestAnimationFrame(tick);
}

/* ================= FLOW ================= */
function showOnly(id) {
  ['startScreen','pauseScreen','overScreen'].forEach(x => $(x).classList.toggle('hidden', x !== id));
  const inGame = id === null;
  $('hud').classList.toggle('hidden', !inGame);
  $('customers').classList.toggle('hidden', !inGame);
  $('stations').classList.toggle('hidden', !inGame);
  $('traybar').classList.toggle('hidden', !inGame);
}
function startGame() {
  ensureAudio();
  S = newState();
  S.stations = initStations();
  S.running = true; S.paused = false;
  buildStations(); buildTray(); renderCustomers(); renderTray(); updateHUD();
  showOnly(null);
  $('muteBtn').textContent = muted ? 'SOUND: OFF' : 'SOUND: ON';
  spawnCustomer();
  lastTick = performance.now();
  cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(tick);
  toast('Serve your first customer!');
}
function endGame() {
  S.running = false;
  cancelAnimationFrame(rafId);
  sfx.over();
  const isBest = S.score > S.highScore;
  if (isBest) { S.highScore = S.score; localStorage.setItem('warungRushHigh', String(S.score)); }
  $('finalScore').textContent = S.score;
  $('finalCoins').textContent = S.coins;
  $('finalServed').textContent = S.served;
  $('finalCombo').textContent = 'x' + Math.max(1, S.bestCombo);
  $('finalLost').textContent = S.lost;
  $('bestOver').textContent = S.highScore;
  $('newBest').classList.toggle('hidden', !isBest);
  showOnly('overScreen');
}
function togglePause() {
  if (!S || !S.running) return;
  S.paused = !S.paused;
  $('pauseBtn').textContent = S.paused ? 'RESUME' : 'PAUSE';
  if (S.paused) { showOnly('pauseScreen'); } else { showOnly(null); lastTick = performance.now(); }
}
function toggleMute() {
  muted = !muted;
  $('muteBtn').textContent = muted ? 'SOUND: OFF' : 'SOUND: ON';
  if (!muted) { ensureAudio(); sfx.pop(); }
}

/* ================= SCALE TO FIT ================= */
function fitStage() {
  const s = Math.min(window.innerWidth / 1280, window.innerHeight / 720);
  $('stage').style.transform = 'scale(' + s + ')';
}
window.addEventListener('resize', fitStage);

/* ================= WIRING ================= */
$('startBtn').addEventListener('click', startGame);
$('againBtn').addEventListener('click', startGame);
$('resumeBtn').addEventListener('click', togglePause);
$('pauseBtn').addEventListener('click', togglePause);
$('restartBtn').addEventListener('click', () => { if (S && S.running) startGame(); });
$('muteBtn').addEventListener('click', toggleMute);
document.addEventListener('keydown', e => {
  if (e.key === 'p' || e.key === 'P') togglePause();
  if (e.key === 'm' || e.key === 'M') toggleMute();
});
buildMenuRow();
$('bestStart').textContent = parseInt(localStorage.getItem('warungRushHigh')||'0',10) || 0;
fitStage();
window.__warung = { get state(){ return S; }, DISHES: DISHES, startGame: startGame };
