/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — HTML, CSS and script of the exported movie file; its words come in through `words` (erection-ui.js reads them from the language file) */
/**
 * erection-html.js — the erection movie as one HTML file (0.8 round 2, EG.72). No DOM here: it builds a string.
 *
 *   erectionHtml({ title, data (erection.js movieData), words, lang }) → string
 *
 * The file plays offline in any browser, on a phone too: a canvas, no libraries, nothing fetched (a Content-Security-Policy forbids every
 * request, like the standalone viewer of 0.7 RT.4, whose rules it follows), no account, no tracking. Drag turns the model, two fingers
 * pinch and slide it, the bar scrubs the time, the buttons play and change speed. Every pick shows its member, weight, radius and share of
 * the crane's chart. The model is drawn as plain boxes (each part's section box along its centre line), not the true profiles: a movie of
 * the order and the picks, not a drawing.
 */
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const SEPARATORS = new RegExp('[' + String.fromCharCode(0x2028) + String.fromCharCode(0x2029) + ']', 'g');
const jsonIn = (v) => JSON.stringify(v).replace(/</g, '\\u003c').replace(SEPARATORS, (c) => '\\u' + c.charCodeAt(0).toString(16));

export const MOVIE_WORDS = {
  play: 'Play', pause: 'Pause', restart: 'Restart', speed: 'Speed', pick: 'Pick {n} of {total}', done: 'Done', phase: 'Phase {n}', crane: 'Crane', time: 'Minute {m}',
  weight: 'Weight', radius: 'Radius', chart: 'Of the chart', hook: 'hooking on', carry: 'lifting and swinging', set: 'setting', release: 'released',
  status_ok: 'Within the chart', status_high: 'Over your margin', status_over: 'Over the chart', status_out: 'Past the chart', status_hook: 'Hook too low',
  note: 'Planned from your crane chart and the model\'s weights. Not a lift plan.', empty: 'Nothing to lift.',
};

const PLAYER = String.raw`
(function () {
  var D = JSON.parse(document.getElementById('data').textContent), W = JSON.parse(document.getElementById('words').textContent);
  var cv = document.getElementById('cv'), cx = cv.getContext('2d'), cap = document.getElementById('cap'), bar = document.getElementById('bar'), btn = document.getElementById('play'), spd = document.getElementById('spd');
  var fmt = function (s, v) { return s.replace(/\{(\w+)\}/g, function (_, k) { return v[k] != null ? v[k] : ''; }); };
  var total = D.minutes || 1, perSec = total / Math.max(20, Math.min(120, D.picks.length * 2.5)), speeds = [1, 2, 4, 8], si = 0;
  var T = 0, playing = false, last = 0, yaw = -0.8, pitch = 0.5, zoom = 1, panx = 0, pany = 0, dpr = 1, w = 0, h = 0;
  // the model's centre and size
  var lo = [1e9, 1e9, 1e9], hi = [-1e9, -1e9, -1e9];
  D.members.forEach(function (m) { [m.a, m.b].forEach(function (p) { for (var i = 0; i < 3; i++) { lo[i] = Math.min(lo[i], p[i]); hi[i] = Math.max(hi[i], p[i]); } }); });
  D.cranes.forEach(function (c) { lo[0] = Math.min(lo[0], c.at[0]); hi[0] = Math.max(hi[0], c.at[0]); lo[1] = Math.min(lo[1], c.at[1]); hi[1] = Math.max(hi[1], c.at[1]); hi[2] = Math.max(hi[2], c.hookHeight || 0); });
  D.picks.forEach(function (p) { lo[0] = Math.min(lo[0], p.from[0]); hi[0] = Math.max(hi[0], p.from[0]); lo[1] = Math.min(lo[1], p.from[1]); hi[1] = Math.max(hi[1], p.from[1]); });
  if (lo[0] > hi[0]) { lo = [0, 0, 0]; hi = [1000, 1000, 1000]; }
  var C = [(lo[0] + hi[0]) / 2, (lo[1] + hi[1]) / 2, (lo[2] + hi[2]) / 2], R = Math.max(hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2], 1000);
  var byPick = {}; D.picks.forEach(function (p) { byPick[p.n] = p; });
  var COL = { column: '#3b6ea8', beam: '#b5651d', brace: '#7a4e9c', plate: '#4a8a5a', stringer: '#4a8a5a' }, CR = ['#c0392b', '#2471a3', '#1e8449', '#b9770e'];
  function proj(p) {
    var x = p[0] - C[0], y = p[1] - C[1], z = p[2] - C[2];
    var cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
    var x1 = x * cy - y * sy, y1 = x * sy + y * cy;
    var s = Math.min(w, h) / (R * 1.5) * zoom;
    return [w / 2 + panx + x1 * s, h / 2 + pany - (z * cp + y1 * sp) * s, y1 * cp - z * sp];
  }
  function ease(s) { return s * s * (3 - 2 * s); }
  // where pick p is at minute T: null (not yet), or an offset [dx, dy, dz] from its set position, and its phase
  function state(p) {
    if (T < p.t0) return { s: 'wait' };
    var dur = Math.max(1e-6, p.t1 - p.t0), f = (T - p.t0);
    var lay = [p.from[0] - p.cg[0], p.from[1] - p.cg[1], -p.cg[2] + 0];
    if (f < p.h) return { s: 'hook', o: lay, f: f / Math.max(p.h, 1e-6) };
    var tt = f - p.h;
    if (tt < p.tr) { var k = ease(tt / Math.max(p.tr, 1e-6)); return { s: 'carry', o: [lay[0] * (1 - k), lay[1] * (1 - k), lay[2] * (1 - k) + Math.sin(Math.PI * k) * 800], k: k }; }
    if (T < p.t1) return { s: 'set', o: [0, 0, 0] };
    return { s: 'done', o: [0, 0, 0] };
  }
  function corners(m, o) {
    var ax = m.a, bx = m.b, hw = m.w / 2, hd = m.d / 2, out = [];
    for (var e = 0; e < 2; e++) for (var i = -1; i <= 1; i += 2) for (var j = -1; j <= 1; j += 2) {
      var P = e ? bx : ax;
      out.push([P[0] + o[0] + m.u[0] * hw * i + m.v[0] * (hd * j + m.voff), P[1] + o[1] + m.u[1] * hw * i + m.v[1] * (hd * j + m.voff), P[2] + o[2] + m.u[2] * hw * i + m.v[2] * (hd * j + m.voff)]);
    }
    return out;
  }
  var FACES = [[0, 1, 3, 2], [4, 5, 7, 6], [0, 1, 5, 4], [2, 3, 7, 6], [0, 2, 6, 4], [1, 3, 7, 5]];
  function shade(hex, k) { var n = parseInt(hex.slice(1), 16), r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255; return 'rgb(' + Math.round(r * k) + ',' + Math.round(g * k) + ',' + Math.round(b * k) + ')'; }
  function line(a, b, col, wd) { var p = proj(a), q = proj(b); cx.strokeStyle = col; cx.lineWidth = wd; cx.beginPath(); cx.moveTo(p[0], p[1]); cx.lineTo(q[0], q[1]); cx.stroke(); }
  var drawn = 0;
  function draw() {
    cx.setTransform(dpr, 0, 0, dpr, 0, 0); cx.clearRect(0, 0, w, h);
    // ground grid under the model
    var g = Math.pow(10, Math.round(Math.log10(R / 8))), x0 = Math.floor((lo[0] - R * 0.3) / g) * g, x1 = hi[0] + R * 0.3, y0 = Math.floor((lo[1] - R * 0.3) / g) * g, y1 = hi[1] + R * 0.3;
    for (var x = x0; x <= x1; x += g) line([x, y0, 0], [x, y1, 0], 'rgba(120,130,140,.25)', 1);
    for (var y = y0; y <= y1; y += g) line([x0, y, 0], [x1, y, 0], 'rgba(120,130,140,.25)', 1);
    var live = null, items = [];
    D.members.forEach(function (m) {
      var p = byPick[m.pick], st = state(p);
      if (st.s === 'wait') { items.push({ m: m, o: [0, 0, 0], ghost: true, z: 0 }); return; }
      if (st.s === 'hook' && st.f >= 0) { items.push({ m: m, o: st.o, live: true }); live = p; return; }
      if (st.s === 'carry' || st.s === 'set') { items.push({ m: m, o: st.o, live: true }); live = p; return; }
      items.push({ m: m, o: [0, 0, 0] });
    });
    items.forEach(function (it) { var cs = corners(it.m, it.o), z = 0, ps = cs.map(proj); ps.forEach(function (q) { z += q[2]; }); it.cs = cs; it.ps = ps; it.z = z / 8; });
    items.sort(function (a, b) { return b.z - a.z; });
    items.forEach(function (it) {
      var base = it.live ? '#e8a317' : (COL[it.m.type] || '#888'), ps = it.ps;
      if (it.ghost) { cx.strokeStyle = 'rgba(120,130,140,.45)'; cx.lineWidth = 1; FACES.forEach(function (f) { cx.beginPath(); f.forEach(function (i, k) { k ? cx.lineTo(ps[i][0], ps[i][1]) : cx.moveTo(ps[i][0], ps[i][1]); }); cx.closePath(); cx.stroke(); }); return; }
      var order = FACES.map(function (f, i) { var z = 0; f.forEach(function (k) { z += ps[k][2]; }); return [z / 4, i]; }).sort(function (a, b) { return b[0] - a[0]; });
      order.forEach(function (o, n) {
        var f = FACES[o[1]]; cx.beginPath(); f.forEach(function (i, k) { k ? cx.lineTo(ps[i][0], ps[i][1]) : cx.moveTo(ps[i][0], ps[i][1]); }); cx.closePath();
        cx.fillStyle = shade(base, 0.62 + 0.38 * (n / 5)); cx.fill(); cx.strokeStyle = 'rgba(0,0,0,.35)'; cx.lineWidth = 0.8; cx.stroke();
      });
    });
    // cranes: mast, boom to the hook of the pick it works, hook line to the load
    D.cranes.forEach(function (c, ci) {
      var col = CR[ci % CR.length], top = c.hookHeight || R * 0.8;
      line([c.at[0], c.at[1], 0], [c.at[0], c.at[1], top], col, 3);
      var work = null; D.picks.forEach(function (p) { if (p.crane === c.id && T >= p.t0 && T < p.t1) work = p; });
      var hook = [c.at[0] + 1200, c.at[1], top];
      if (work) { var st = state(work), o = st.o || [0, 0, 0]; hook = [work.cg[0] + o[0], work.cg[1] + o[1], Math.min(top, work.top + 2500 + o[2] + (work.cg[2] - 0))]; line(hook, [work.cg[0] + o[0], work.cg[1] + o[1], work.cg[2] + o[2]], '#222', 1.5); }
      line([c.at[0], c.at[1], top], hook, col, 3);
      var q = proj([c.at[0], c.at[1], 0]); cx.fillStyle = col; cx.beginPath(); cx.arc(q[0], q[1], 5, 0, 6.3); cx.fill();
    });
    // caption
    var cur = live || D.picks.filter(function (p) { return T >= p.t0; }).pop();
    var html;
    if (!D.picks.length) html = W.empty;
    else if (!cur) html = fmt(W.time, { m: Math.floor(T) });
    else {
      var st = state(cur), what = st.s === 'hook' ? W.hook : st.s === 'carry' ? W.carry : st.s === 'set' ? W.set : W.release;
      html = '<b>' + fmt(W.pick, { n: cur.n, total: D.picks.length }) + '</b> ' + esc(cur.mark) + ' ' + esc(cur.profile || '') + ' · ' + fmt(W.phase, { n: cur.phase }) + '<br>' +
        W.weight + ' ' + cur.kg + ' kg · ' + W.radius + ' ' + cur.radius + ' m · ' + W.chart + ' ' + (cur.pct == null ? '–' : cur.pct + '%') + ' · <span class="s-' + cur.status + '">' + W['status_' + cur.status] + '</span><br>' + what + ' · ' + fmt(W.time, { m: Math.floor(T) });
    }
    if (cap._h !== html) { cap.innerHTML = html; cap._h = html; }
    bar.value = String(Math.round(T / total * 1000)); drawn++;
  }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function resize() { dpr = window.devicePixelRatio || 1; w = cv.clientWidth; h = cv.clientHeight; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); draw(); }
  function tick(now) {
    if (playing) { var dt = Math.min(0.1, (now - last) / 1000); T += dt * perSec * speeds[si]; if (T >= total) { T = total; playing = false; btn.textContent = W.restart; } draw(); }
    last = now; requestAnimationFrame(tick);
  }
  btn.onclick = function () { if (T >= total) T = 0; playing = !playing; btn.textContent = playing ? W.pause : W.play; };
  spd.onclick = function () { si = (si + 1) % speeds.length; spd.textContent = speeds[si] + '×'; };
  bar.oninput = function () { T = Number(bar.value) / 1000 * total; draw(); };
  // pointers: one drags (turns), two pinch (zoom) and slide (pan); the wheel zooms
  var pts = {}, pinch = 0, mid = null;
  cv.onpointerdown = function (e) { cv.setPointerCapture(e.pointerId); pts[e.pointerId] = [e.clientX, e.clientY]; var k = Object.keys(pts); if (k.length === 2) { pinch = Math.hypot(pts[k[0]][0] - pts[k[1]][0], pts[k[0]][1] - pts[k[1]][1]); mid = [(pts[k[0]][0] + pts[k[1]][0]) / 2, (pts[k[0]][1] + pts[k[1]][1]) / 2]; } };
  cv.onpointermove = function (e) {
    if (!pts[e.pointerId]) return; var k = Object.keys(pts), old = pts[e.pointerId]; pts[e.pointerId] = [e.clientX, e.clientY];
    if (k.length === 1) { yaw -= (e.clientX - old[0]) * 0.008; pitch = Math.max(0.05, Math.min(1.5, pitch + (e.clientY - old[1]) * 0.006)); }
    else if (k.length === 2) { var d = Math.hypot(pts[k[0]][0] - pts[k[1]][0], pts[k[0]][1] - pts[k[1]][1]), m = [(pts[k[0]][0] + pts[k[1]][0]) / 2, (pts[k[0]][1] + pts[k[1]][1]) / 2]; if (pinch) zoom = Math.max(0.2, Math.min(8, zoom * d / pinch)); panx += m[0] - mid[0]; pany += m[1] - mid[1]; pinch = d; mid = m; }
    draw();
  };
  cv.onpointerup = cv.onpointercancel = function (e) { delete pts[e.pointerId]; pinch = 0; };
  cv.onwheel = function (e) { e.preventDefault(); zoom = Math.max(0.2, Math.min(8, zoom * (e.deltaY < 0 ? 1.1 : 0.9))); draw(); };
  window.addEventListener('resize', resize);
  window.__erection = { set: function (t) { T = t; draw(); }, total: total, picks: D.picks.length, drawn: function () { return drawn; }, state: function () { return { T: T, playing: playing, yaw: yaw, pitch: pitch, zoom: zoom }; } };
  btn.textContent = W.play; spd.textContent = '1×'; resize(); requestAnimationFrame(tick);
})();
`;

export function erectionHtml({ title = '', data, words = {}, lang = 'en' }) {
  const W = { ...MOVIE_WORDS, ...words };
  return `<!doctype html>
<html lang="${esc(lang)}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data:; style-src 'unsafe-inline'; script-src 'unsafe-inline'">
<title>${esc(title || 'Erection')}</title>
<style>
:root{color-scheme:light dark;--bg:#f4f1ea;--ink:#1b1d21;--line:#c9c4b8;--act:#1f4f8f}
@media (prefers-color-scheme:dark){:root{--bg:#15181d;--ink:#e8e6e0;--line:#3a3f47;--act:#6fa3e8}}
html,body{margin:0;height:100%;background:var(--bg);color:var(--ink);font:15px/1.4 system-ui,sans-serif}
body{display:flex;flex-direction:column}
header{padding:.5rem 1rem;border-bottom:1px solid var(--line);font-weight:600}
#cv{flex:1;min-height:0;width:100%;touch-action:none;display:block}
#cap{padding:.5rem 1rem;min-height:4.2em;border-top:1px solid var(--line);font-size:.9rem}
.s-ok{color:#1e8449}.s-high{color:#b9770e}.s-over,.s-out,.s-hook{color:#c0392b;font-weight:600}
footer{display:flex;gap:.5rem;align-items:center;padding:.5rem 1rem calc(.5rem + env(safe-area-inset-bottom));border-top:1px solid var(--line)}
button{min-height:2.75rem;min-width:4.5rem;border:1px solid var(--act);background:transparent;color:var(--act);border-radius:2px;font:inherit}
input[type=range]{flex:1;min-height:2.75rem}
small{display:block;padding:0 1rem .5rem;opacity:.7}
</style></head><body>
<header>${esc(title)}</header>
<canvas id="cv"></canvas>
<div id="cap"></div>
<footer><button id="play" type="button"></button><input id="bar" type="range" min="0" max="1000" value="0" aria-label="${esc(W.time.replace('{m}', ''))}"><button id="spd" type="button" aria-label="${esc(W.speed)}"></button></footer>
<small>${esc(W.note)}</small>
<script type="application/json" id="data">${jsonIn(data)}</script>
<script type="application/json" id="words">${jsonIn(W)}</script>
<script>${PLAYER}</script>
</body></html>`;
}
