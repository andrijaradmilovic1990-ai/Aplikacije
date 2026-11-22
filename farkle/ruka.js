/* Farkle — ruka koja baca kockice (SVG) i katalog ukrasa za prodavnicu.
   Ruka se vidi odozgo (nadlanica), prsti gore. Ženska i muška, četiri boje kože.
   Čist JS; window.Ruka (aplikacija) ili require (testovi). */
(function (koren) {
  'use strict';

  var KOZA = {
    svetla:     { ime: 'Svetla',     a: '#f8dcc8', b: '#e8b99c', c: '#c99478' },
    srednja:    { ime: 'Srednja',    a: '#ecc3a0', b: '#d49f78', c: '#ad7a55' },
    maslinasta: { ime: 'Maslinasta', a: '#d3a578', b: '#b5855a', c: '#8e623d' },
    tamna:      { ime: 'Tamna',      a: '#9a6544', b: '#7b4b2f', c: '#59331d' }
  };

  // geometrija u viewBox 0 0 200 320; prsti: c = sredina, s = širina, d = dužina, u = ugao
  var MERE = {
    z: {
      dlan: { l: 58, d: 142, gore: 148, dole: 258 }, zglob: { l: 70, d: 130 },
      prsti: [{ c: 72, s: 17, d: 80, u: -7 }, { c: 92.5, s: 18, d: 90, u: -1.5 }, { c: 112.5, s: 17, d: 84, u: 4 }, { c: 131, s: 14.5, d: 64, u: 11 }],
      palac: { x: 64, y: 226, s: 20, d: 66, u: -40 },
      nokat: { duz: 21, iz: 4.5, uzi: 5 }
    },
    m: {
      dlan: { l: 51, d: 149, gore: 150, dole: 262 }, zglob: { l: 62, d: 138 },
      prsti: [{ c: 67, s: 22, d: 72, u: -6 }, { c: 91.5, s: 23, d: 81, u: -1 }, { c: 116, s: 22, d: 76, u: 4 }, { c: 138, s: 18.5, d: 58, u: 10 }],
      palac: { x: 58, y: 228, s: 25, d: 62, u: -38 },
      nokat: { duz: 13, iz: 0.5, uzi: 6.5 }
    }
  };
  var BAZA = 160; // y gde prsti izlaze iz dlana

  /* ---------- katalog ---------- */
  // tip: nokti | prsten | zglob | tetovaza · pol: z | m | (oba) · poklon: dobija se samo linkom
  var PREDMETI = [
    { id: 'n-prirodni', tip: 'nokti', pol: 'z', ime: 'Prirodni', cena: 0 },
    { id: 'n-crvena', tip: 'nokti', pol: 'z', ime: 'Klasična crvena', cena: 60, boja: '#c1121f' },
    { id: 'n-nude', tip: 'nokti', pol: 'z', ime: 'Nude', cena: 60, boja: '#d8a28a' },
    { id: 'n-roze', tip: 'nokti', pol: 'z', ime: 'Pastel roze', cena: 80, boja: '#f3a3bf' },
    { id: 'n-bordo', tip: 'nokti', pol: 'z', ime: 'Bordo', cena: 90, boja: '#6a0d22' },
    { id: 'n-lila', tip: 'nokti', pol: 'z', ime: 'Lila', cena: 90, boja: '#b79ad8' },
    { id: 'n-crna', tip: 'nokti', pol: 'z', ime: 'Crna', cena: 100, boja: '#141416' },
    { id: 'n-francuski', tip: 'nokti', pol: 'z', ime: 'Francuski', cena: 160, sara: 'francuski' },
    { id: 'n-tufne', tip: 'nokti', pol: 'z', ime: 'Tufne', cena: 200, sara: 'tufne' },
    { id: 'n-ombre', tip: 'nokti', pol: 'z', ime: 'Ombre', cena: 240, sara: 'ombre' },
    { id: 'n-sljokice', tip: 'nokti', pol: 'z', ime: 'Šljokice', cena: 280, sara: 'sljokice' },
    { id: 'n-zlatni', tip: 'nokti', pol: 'z', ime: 'Zlatni', cena: 340, sara: 'zlatni' },
    { id: 'n-leopard', tip: 'nokti', pol: 'z', ime: 'Leopard', cena: 400, sara: 'leopard' },
    { id: 'n-srce', tip: 'nokti', pol: 'z', ime: 'Srce', cena: 0, sara: 'srce', poklon: true },

    { id: 'p-nema', tip: 'prsten', ime: 'Bez prstena', cena: 0 },
    { id: 'p-srebrni', tip: 'prsten', ime: 'Srebrni prsten', cena: 120, metal: 'srebro' },
    { id: 'p-zlatni', tip: 'prsten', ime: 'Zlatni prsten', cena: 200, metal: 'zlato' },
    { id: 'p-rubin', tip: 'prsten', ime: 'Prsten sa rubinom', cena: 380, metal: 'zlato', kamen: '#c3102c' },
    { id: 'p-dijamant', tip: 'prsten', pol: 'z', ime: 'Prsten sa dijamantom', cena: 520, metal: 'srebro', kamen: '#e9f6ff' },
    { id: 'p-pecatnjak', tip: 'prsten', pol: 'm', ime: 'Srebrni pečatnjak', cena: 320, metal: 'srebro', pecat: true },
    { id: 'p-crni', tip: 'prsten', pol: 'm', ime: 'Crni prsten', cena: 220, metal: 'crni' },

    { id: 'z-nema', tip: 'zglob', ime: 'Ništa', cena: 0 },
    { id: 'z-zlatna', tip: 'zglob', pol: 'z', ime: 'Zlatna narukvica', cena: 180, vrsta: 'lanac', metal: 'zlato' },
    { id: 'z-srebrna', tip: 'zglob', ime: 'Srebrni lanac', cena: 160, vrsta: 'lanac', metal: 'srebro' },
    { id: 'z-perle', tip: 'zglob', ime: 'Perlice', cena: 140, vrsta: 'perle' },
    { id: 'z-biseri', tip: 'zglob', pol: 'z', ime: 'Biserna narukvica', cena: 280, vrsta: 'biseri' },
    { id: 'z-privesci', tip: 'zglob', pol: 'z', ime: 'Narukvica sa privescima', cena: 360, vrsta: 'privesci' },
    { id: 'z-koza', tip: 'zglob', pol: 'm', ime: 'Kožna narukvica', cena: 150, vrsta: 'koza' },
    { id: 'z-sat-koza', tip: 'zglob', ime: 'Sat sa kožnim kaišem', cena: 300, vrsta: 'sat', kais: '#5a3720', okvir: 'srebro' },
    { id: 'z-sat-celik', tip: 'zglob', ime: 'Čelični sat', cena: 450, vrsta: 'sat', kais: 'celik', okvir: 'srebro' },
    { id: 'z-sat-zlatni', tip: 'zglob', ime: 'Zlatni sat', cena: 600, vrsta: 'sat', kais: 'zlato', okvir: 'zlato' },
    { id: 'z-poklon', tip: 'zglob', ime: 'Poklon narukvica', cena: 0, vrsta: 'poklon', metal: 'zlato', poklon: true },

    { id: 't-nema', tip: 'tetovaza', ime: 'Bez tetovaže', cena: 0 },
    { id: 't-kocka', tip: 'tetovaza', ime: 'Kockica', cena: 150, crtez: 'kocka' },
    { id: 't-srce', tip: 'tetovaza', ime: 'Srce', cena: 150, crtez: 'srce' },
    { id: 't-sidro', tip: 'tetovaza', ime: 'Sidro', cena: 200, crtez: 'sidro' },
    { id: 't-pik', tip: 'tetovaza', ime: 'As pik', cena: 220, crtez: 'pik' },
    { id: 't-ruza', tip: 'tetovaza', ime: 'Ruža', cena: 260, crtez: 'ruza' },
    { id: 't-zvezda', tip: 'tetovaza', ime: 'Zvezda', cena: 180, crtez: 'zvezda' }
  ];
  var PO_ID = {};
  PREDMETI.forEach(function (p) { PO_ID[p.id] = p; });
  var PODRAZUMEVANO = { nokti: 'n-prirodni', prsten: 'p-nema', zglob: 'z-nema', tetovaza: 't-nema' };

  function zaPol(p, pol) { return !p.pol || p.pol === pol; }

  /* ---------- novčići ---------- */
  var NAGRADA = { pobeda: { lak: 25, srednji: 50, tezak: 100 }, poraz: 10, lokalno: 15, dnevni: 20 };
  function nagrada(ishod, nivo) {
    if (ishod === 'pobeda') return NAGRADA.pobeda[nivo] || 25;
    if (ishod === 'poraz') return NAGRADA.poraz;
    return NAGRADA.lokalno;
  }

  /* ---------- crtanje ---------- */
  var METAL = {
    zlato: ['#fff3c4', '#e6c25a', '#a87a1f'],
    srebro: ['#ffffff', '#cfd3da', '#8a919c'],
    crni: ['#6c6f75', '#2b2d31', '#111214'],
    celik: ['#f2f4f7', '#a9b0ba', '#6c737d']
  };
  function grad(id, boje, vert) {
    return '<linearGradient id="' + id + '" x1="0" y1="0" x2="' + (vert ? 0 : 1) + '" y2="' + (vert ? 1 : 0) + '">' +
      '<stop offset="0" stop-color="' + boje[0] + '"/><stop offset=".5" stop-color="' + boje[1] + '"/><stop offset="1" stop-color="' + boje[2] + '"/></linearGradient>';
  }

  function definicije(px, koza) {
    var d = '';
    d += '<linearGradient id="' + px + 'k" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="' + koza.b + '"/><stop offset=".45" stop-color="' + koza.a + '"/><stop offset="1" stop-color="' + koza.b + '"/></linearGradient>';
    d += '<linearGradient id="' + px + 'kz" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="' + koza.b + '"/><stop offset=".5" stop-color="' + koza.a + '"/><stop offset="1" stop-color="' + koza.b + '"/></linearGradient>';
    d += '<radialGradient id="' + px + 'kd" cx=".5" cy=".35" r=".75"><stop offset="0" stop-color="' + koza.a + '"/><stop offset="1" stop-color="' + koza.b + '"/></radialGradient>';
    Object.keys(METAL).forEach(function (m) { d += grad(px + 'm-' + m, METAL[m], true); d += grad(px + 'mh-' + m, METAL[m], false); });
    // šare noktiju
    d += '<linearGradient id="' + px + 'francuski" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".3" stop-color="#fbf8f4"/><stop offset=".34" stop-color="#f4cfc4"/><stop offset="1" stop-color="#eebcae"/></linearGradient>';
    d += '<linearGradient id="' + px + 'ombre" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d1286e"/><stop offset=".55" stop-color="#f07aa6"/><stop offset="1" stop-color="#fde0ea"/></linearGradient>';
    d += '<linearGradient id="' + px + 'zlatni" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff1b8"/><stop offset=".4" stop-color="#e0b443"/><stop offset=".7" stop-color="#fbe7a1"/><stop offset="1" stop-color="#a9781c"/></linearGradient>';
    d += '<linearGradient id="' + px + 'srce" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e0243f"/><stop offset="1" stop-color="#9c0b22"/></linearGradient>';
    d += '<pattern id="' + px + 'tufne" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="6" fill="#d7263d"/><circle cx="1.5" cy="1.5" r="1.1" fill="#fff"/><circle cx="4.5" cy="4.5" r="1.1" fill="#fff"/></pattern>';
    d += '<pattern id="' + px + 'sljokice" width="5" height="5" patternUnits="userSpaceOnUse"><rect width="5" height="5" fill="#9fa4b5"/><circle cx="1" cy="1.2" r=".7" fill="#fff"/><circle cx="3.6" cy="2.4" r=".55" fill="#f3e9ff"/><circle cx="2" cy="4" r=".6" fill="#dfe6ff"/><circle cx="4.3" cy="4.4" r=".35" fill="#fff"/></pattern>';
    d += '<pattern id="' + px + 'leopard" width="9" height="9" patternUnits="userSpaceOnUse"><rect width="9" height="9" fill="#dcae6a"/><path d="M1 2.2a1.4 1.1 0 1 0 2.6 0" fill="none" stroke="#3b2414" stroke-width=".9"/><circle cx="2.3" cy="2.5" r=".55" fill="#7a4a22"/><path d="M5.6 6.4a1.5 1.2 0 1 0 2.8 .1" fill="none" stroke="#3b2414" stroke-width=".9"/><circle cx="7" cy="6.8" r=".55" fill="#7a4a22"/><circle cx="7.6" cy="1.6" r=".7" fill="#3b2414"/><circle cx="1.8" cy="7.4" r=".6" fill="#3b2414"/></pattern>';
    return '<defs>' + d + '</defs>';
  }

  function fillNokta(px, p, pol) {
    if (!p || p.id === 'n-prirodni' || pol === 'm') return pol === 'm' ? '#efc9b8' : '#f2c4b4';
    if (p.boja) return p.boja;
    return 'url(#' + px + p.sara + ')';
  }

  function nokat(px, x, vrh, s, m, fill, sara) {
    var w = s - m.nokat.uzi, h = m.nokat.duz, y = vrh - m.nokat.iz;
    var rx = Math.min(w / 2, m === MERE.z ? w / 2 : 4);
    var o = '<g class="nokat">';
    o += '<rect x="' + (x - w / 2) + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + rx + '" fill="' + fill + '" stroke="rgba(0,0,0,.18)" stroke-width=".6"/>';
    if (sara === 'srce') o += '<path transform="translate(' + x + ',' + (y + h * .52) + ') scale(' + (w / 16) + ')" d="M0 3.2C-3.5 .8-4.2-1.6-2.6-2.8-1.4-3.6-.4-3 0-2.1.4-3 1.4-3.6 2.6-2.8 4.2-1.6 3.5 .8 0 3.2Z" fill="#fff" opacity=".92"/>';
    o += '<rect x="' + (x - w / 2 + w * .2) + '" y="' + (y + 2) + '" width="' + (w * .22) + '" height="' + (h * .55) + '" rx="' + (w * .11) + '" fill="#fff" opacity=".35"/>';
    o += '</g>';
    return o;
  }

  function prsten(px, x, y, s, p, pol) {
    var w = s + 3, h = pol === 'm' ? 7 : 5.5, m = METAL[p.metal] ? p.metal : 'zlato';
    var o = '<g class="prsten">';
    if (p.pecat) {
      o += '<rect x="' + (x - w / 2) + '" y="' + (y - 2) + '" width="' + w + '" height="' + (h + 4) + '" rx="3" fill="url(#' + px + 'mh-' + m + ')" stroke="rgba(0,0,0,.25)" stroke-width=".6"/>';
      o += '<ellipse cx="' + x + '" cy="' + (y + h / 2) + '" rx="' + (s * .32) + '" ry="' + (h * .55) + '" fill="#3a2a12" stroke="url(#' + px + 'm-' + m + ')" stroke-width="1.4"/>';
    } else {
      o += '<rect x="' + (x - w / 2) + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (h / 2) + '" fill="url(#' + px + 'mh-' + m + ')" stroke="rgba(0,0,0,.25)" stroke-width=".6"/>';
    }
    if (p.kamen) {
      o += '<circle cx="' + x + '" cy="' + (y + h / 2) + '" r="' + (s * .26) + '" fill="url(#' + px + 'm-' + m + ')"/>';
      o += '<circle cx="' + x + '" cy="' + (y + h / 2) + '" r="' + (s * .19) + '" fill="' + p.kamen + '" stroke="rgba(0,0,0,.25)" stroke-width=".5"/>';
      o += '<circle cx="' + (x - s * .06) + '" cy="' + (y + h / 2 - s * .07) + '" r="' + (s * .06) + '" fill="#fff" opacity=".9"/>';
      if (p.kamen === '#e9f6ff') o += '<path class="iskra" d="M' + (x + s * .3) + ' ' + (y - 3) + 'l1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1z" fill="#fff"/>';
    }
    return o + '</g>';
  }

  function zglob(px, p, mz, y) {
    if (!p || p.id === 'z-nema') return '';
    var l = mz.l - 2, d = mz.d + 2, w = d - l, o = '<g class="zglob-ukras">';
    var m = METAL[p.metal] ? p.metal : 'zlato';
    if (p.vrsta === 'lanac' || p.vrsta === 'poklon') {
      o += '<rect x="' + l + '" y="' + y + '" width="' + w + '" height="6" rx="3" fill="url(#' + px + 'm-' + m + ')" stroke="rgba(0,0,0,.25)" stroke-width=".5"/>';
      for (var i = l + 4; i < d - 2; i += 6) o += '<ellipse cx="' + i + '" cy="' + (y + 3) + '" rx="2.6" ry="1.7" fill="none" stroke="rgba(90,60,10,.45)" stroke-width=".6"/>';
      if (p.vrsta === 'poklon') {
        var cx = (l + d) / 2;
        o += '<line x1="' + cx + '" y1="' + (y + 6) + '" x2="' + cx + '" y2="' + (y + 10) + '" stroke="url(#' + px + 'm-zlato)" stroke-width="1.2"/>';
        o += '<path transform="translate(' + cx + ',' + (y + 14) + ') scale(1.5)" d="M0 3.2C-3.5 .8-4.2-1.6-2.6-2.8-1.4-3.6-.4-3 0-2.1.4-3 1.4-3.6 2.6-2.8 4.2-1.6 3.5 .8 0 3.2Z" fill="#d61f3c" stroke="#a8781c" stroke-width=".6"/>';
      }
    } else if (p.vrsta === 'biseri' || p.vrsta === 'perle') {
      var boje = p.vrsta === 'biseri' ? ['#fffdf7'] : ['#2f6fb0', '#e2b13c', '#c8463b', '#3f9a6b', '#f2f2f2'];
      var k = 0;
      for (var j = l + 4; j <= d - 4; j += 7.6) {
        o += '<circle cx="' + j + '" cy="' + (y + 3.5) + '" r="3.6" fill="' + boje[k++ % boje.length] + '" stroke="rgba(0,0,0,.2)" stroke-width=".5"/>';
        o += '<circle cx="' + (j - 1.1) + '" cy="' + (y + 2.3) + '" r="1" fill="#fff" opacity=".8"/>';
      }
    } else if (p.vrsta === 'privesci') {
      o += '<rect x="' + l + '" y="' + y + '" width="' + w + '" height="4" rx="2" fill="url(#' + px + 'm-srebro)" stroke="rgba(0,0,0,.25)" stroke-width=".5"/>';
      [[.22, '#e05a8b', 'c'], [.42, '#7fc1e8', 'z'], [.62, '#f0c94b', 'c'], [.8, '#b48ad8', 'z']].forEach(function (q) {
        var x = l + w * q[0];
        o += '<line x1="' + x + '" y1="' + (y + 4) + '" x2="' + x + '" y2="' + (y + 7) + '" stroke="#9aa1ab" stroke-width=".8"/>';
        if (q[2] === 'c') o += '<circle cx="' + x + '" cy="' + (y + 9.5) + '" r="2.8" fill="' + q[1] + '" stroke="rgba(0,0,0,.2)" stroke-width=".4"/>';
        else o += '<path transform="translate(' + x + ',' + (y + 9.5) + ')" d="M0-3 .9-.9 3-.9 1.3.4 2 2.7 0 1.3-2 2.7-1.3.4-3-.9-.9-.9Z" fill="' + q[1] + '"/>';
      });
    } else if (p.vrsta === 'koza') {
      o += '<rect x="' + l + '" y="' + y + '" width="' + w + '" height="10" rx="3" fill="#5b3a22" stroke="#2e1d10" stroke-width=".6"/>';
      o += '<line x1="' + (l + 3) + '" y1="' + (y + 2.5) + '" x2="' + (d - 3) + '" y2="' + (y + 2.5) + '" stroke="#c9a77a" stroke-width=".6" stroke-dasharray="2 1.6"/>';
      o += '<line x1="' + (l + 3) + '" y1="' + (y + 7.5) + '" x2="' + (d - 3) + '" y2="' + (y + 7.5) + '" stroke="#c9a77a" stroke-width=".6" stroke-dasharray="2 1.6"/>';
    } else if (p.vrsta === 'sat') {
      var kais = p.kais === 'celik' ? 'url(#' + px + 'm-celik)' : p.kais === 'zlato' ? 'url(#' + px + 'm-zlato)' : p.kais;
      var cx2 = (l + d) / 2, r = 15;
      o += '<rect x="' + l + '" y="' + (y - 3) + '" width="' + w + '" height="13" rx="3" fill="' + kais + '" stroke="rgba(0,0,0,.3)" stroke-width=".6"/>';
      if (p.kais === 'celik' || p.kais === 'zlato') for (var t = l + 5; t < d - 3; t += 5) o += '<line x1="' + t + '" y1="' + (y - 3) + '" x2="' + t + '" y2="' + (y + 10) + '" stroke="rgba(0,0,0,.18)" stroke-width=".5"/>';
      o += '<circle cx="' + cx2 + '" cy="' + (y + 3.5) + '" r="' + r + '" fill="url(#' + px + 'm-' + p.okvir + ')" stroke="rgba(0,0,0,.35)" stroke-width=".7"/>';
      o += '<circle cx="' + cx2 + '" cy="' + (y + 3.5) + '" r="' + (r - 3) + '" fill="' + (p.okvir === 'zlato' ? '#fbf5e6' : '#1d2430') + '"/>';
      for (var a = 0; a < 12; a++) {
        var ug = a * Math.PI / 6, r1 = r - 4.2, r2 = r - (a % 3 ? 5.2 : 6.4);
        o += '<line x1="' + (cx2 + Math.sin(ug) * r1) + '" y1="' + (y + 3.5 - Math.cos(ug) * r1) + '" x2="' + (cx2 + Math.sin(ug) * r2) + '" y2="' + (y + 3.5 - Math.cos(ug) * r2) + '" stroke="' + (p.okvir === 'zlato' ? '#7a5a1a' : '#d9dee6') + '" stroke-width="' + (a % 3 ? .6 : 1) + '"/>';
      }
      var kaz = p.okvir === 'zlato' ? '#3b2a0e' : '#f3f5f8';
      o += '<line x1="' + cx2 + '" y1="' + (y + 3.5) + '" x2="' + (cx2 + 4.5) + '" y2="' + (y - 1.5) + '" stroke="' + kaz + '" stroke-width="1.3" stroke-linecap="round"/>';
      o += '<line x1="' + cx2 + '" y1="' + (y + 3.5) + '" x2="' + (cx2 - 2) + '" y2="' + (y - 5.5) + '" stroke="' + kaz + '" stroke-width=".9" stroke-linecap="round"/>';
      o += '<circle cx="' + cx2 + '" cy="' + (y + 3.5) + '" r="1" fill="#c0392b"/>';
    }
    return o + '</g>';
  }

  function tetovaza(p, x, y, pol) {
    if (!p || !p.crtez) return '';
    var s = pol === 'm' ? 1.15 : .95, b = 'rgba(28,40,62,.62)', o = '<g class="tetovaza" transform="translate(' + x + ',' + y + ') scale(' + s + ')" fill="none" stroke="' + b + '" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">';
    if (p.crtez === 'kocka') o += '<rect x="-9" y="-9" width="18" height="18" rx="3.5"/><circle cx="-4" cy="-4" r="1.4" fill="' + b + '"/><circle cx="0" cy="0" r="1.4" fill="' + b + '"/><circle cx="4" cy="4" r="1.4" fill="' + b + '"/>';
    if (p.crtez === 'srce') o += '<path d="M0 8C-9 2-10.5-4-6.6-7-3.6-9.2-1-7.6 0-5.4 1-7.6 3.6-9.2 6.6-7 10.5-4 9 2 0 8Z"/>';
    if (p.crtez === 'sidro') o += '<circle cx="0" cy="-9" r="2.4"/><path d="M0-6.6V9M-5-3H5M-9 2C-8 7-4 9.5 0 9.5S8 7 9 2M-9 2l-2 2M9 2l2 2"/>';
    if (p.crtez === 'pik') o += '<path d="M0-10C-4-5-10-2-8 3-6.6 6.6-2.4 6-1 3.4-1.4 6.6-2.6 8.6-4.4 10H4.4C2.6 8.6 1.4 6.6 1 3.4 2.4 6 6.6 6.6 8 3 10-2 4-5 0-10Z" fill="' + b + '"/>';
    if (p.crtez === 'ruza') o += '<path d="M0-1.5C1.5-1.5 2-0.3 1.2.8-0.2 2.1-2.8 1.2-2.6-1.2-2.4-3.8 1.2-5 3.4-3.2 5.6-1.2 4.8 3 1.4 4.2-2.2 5.4-6.2 3.2-6-1.2-5.8-5.8-1.6-8 2.6-7.2"/><path d="M0 4.6V12M0 8.4C-3 6.6-6 7.4-7 9.2-4.6 10.4-2 10 0 8.4M0 9.8C2.6 8.4 5 8.8 6 10.4"/>';
    if (p.crtez === 'zvezda') o += '<path d="M0-10 2.9-3.1 10.2-2.9 4.6 1.8 6.5 9 0 4.8-6.5 9-4.6 1.8-10.2-2.9-2.9-3.1Z"/>';
    return o + '</g>';
  }

  var brojac = 0;
  /* ruka(opcije) → SVG string. opcije: { pol:'z'|'m', koza:'svetla'…, nosi:{nokti,prsten,zglob,tetovaza} } */
  function nacrtaj(op) {
    op = op || {};
    var pol = op.pol === 'm' ? 'm' : 'z', m = MERE[pol], koza = KOZA[op.koza] || KOZA.svetla;
    var nosi = op.nosi || {}, px = 'r' + (++brojac) + '-';
    var pN = PO_ID[nosi.nokti], pP = PO_ID[nosi.prsten], pZ = PO_ID[nosi.zglob], pT = PO_ID[nosi.tetovaza];
    var fN = fillNokta(px, pN, pol), sara = pN && pN.sara;
    var D = m.dlan, Z = m.zglob;
    var o = '<svg class="ruka-svg" viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' + definicije(px, koza);
    // podlaktica
    o += '<path d="M' + (Z.l - 2) + ' 236 C' + (Z.l - 4) + ' 270 ' + (Z.l - 6) + ' 300 ' + (Z.l - 8) + ' 330 L' + (Z.d + 8) + ' 330 C' + (Z.d + 6) + ' 300 ' + (Z.d + 4) + ' 270 ' + (Z.d + 2) + ' 236Z" fill="url(#' + px + 'kz)"/>';
    // palac (iza dlana)
    var P = m.palac;
    o += '<g transform="rotate(' + P.u + ' ' + P.x + ' ' + P.y + ')"><g class="palac" style="transform-origin:' + P.x + 'px ' + P.y + 'px">';
    o += '<rect x="' + (P.x - P.s / 2) + '" y="' + (P.y - P.d) + '" width="' + P.s + '" height="' + (P.d + 12) + '" rx="' + (P.s / 2) + '" fill="url(#' + px + 'k)" stroke="' + koza.c + '" stroke-opacity=".35" stroke-width=".8"/>';
    o += '<path d="M' + (P.x - P.s * .3) + ' ' + (P.y - P.d * .45) + ' q' + (P.s * .3) + ' 2.5 ' + (P.s * .6) + ' 0" stroke="' + koza.c + '" stroke-opacity=".45" fill="none" stroke-width=".8"/>';
    o += nokat(px, P.x, P.y - P.d, P.s, m, fN, sara);
    o += '</g></g>';
    // dlan (nadlanica)
    o += '<path d="M' + D.l + ' ' + (D.gore + 14) + ' C' + D.l + ' ' + (D.gore + 2) + ' ' + (D.l + 8) + ' ' + D.gore + ' ' + (D.l + 18) + ' ' + D.gore +
      ' L' + (D.d - 16) + ' ' + (D.gore - 2) + ' C' + (D.d - 4) + ' ' + (D.gore - 1) + ' ' + D.d + ' ' + (D.gore + 8) + ' ' + D.d + ' ' + (D.gore + 18) +
      ' C' + (D.d + 1) + ' ' + (D.gore + 50) + ' ' + (D.d - 2) + ' ' + (D.dole - 30) + ' ' + (Z.d + 2) + ' ' + D.dole +
      ' L' + (Z.l - 2) + ' ' + D.dole + ' C' + (D.l + 2) + ' ' + (D.dole - 30) + ' ' + (D.l - 1) + ' ' + (D.gore + 50) + ' ' + D.l + ' ' + (D.gore + 14) + 'Z" fill="url(#' + px + 'kd)" stroke="' + koza.c + '" stroke-opacity=".35" stroke-width=".8"/>';
    // tetive na nadlanici (diskretno)
    m.prsti.forEach(function (f, i) {
      if (i === 3) return;
      o += '<path d="M' + f.c + ' ' + (BAZA + 6) + ' Q' + (f.c + (100 - f.c) * .25) + ' ' + (BAZA + 40) + ' ' + (100 + (f.c - 100) * .35) + ' ' + (D.dole - 22) + '" stroke="' + koza.c + '" stroke-opacity=".13" stroke-width="2.4" fill="none" stroke-linecap="round"/>';
    });
    o += tetovaza(pT, 101, BAZA + 46, pol);
    // prsti
    m.prsti.forEach(function (f, i) {
      var vrh = BAZA - f.d;
      o += '<g transform="rotate(' + f.u + ' ' + f.c + ' ' + (BAZA + 8) + ')"><g class="prst" style="transform-origin:' + f.c + 'px ' + (BAZA + 8) + 'px">';
      o += '<rect x="' + (f.c - f.s / 2) + '" y="' + vrh + '" width="' + f.s + '" height="' + (f.d + 16) + '" rx="' + (f.s / 2) + '" fill="url(#' + px + 'k)" stroke="' + koza.c + '" stroke-opacity=".35" stroke-width=".8"/>';
      [0.36, 0.67].forEach(function (t) {
        var yy = BAZA - f.d * t;
        o += '<path d="M' + (f.c - f.s * .28) + ' ' + yy + ' q' + (f.s * .28) + ' 2 ' + (f.s * .56) + ' 0" stroke="' + koza.c + '" stroke-opacity=".4" fill="none" stroke-width=".8"/>';
      });
      o += nokat(px, f.c, vrh, f.s, m, fN, sara);
      if (i === 2 && pP && pP.id !== 'p-nema') o += prsten(px, f.c, BAZA - f.d * .3, f.s, pP, pol);
      o += '</g></g>';
      // zglobovi prstiju (kvrge) — senka preko spoja sa dlanom
      o += '<ellipse cx="' + f.c + '" cy="' + (BAZA + 6) + '" rx="' + (f.s * .42) + '" ry="3.2" fill="' + koza.c + '" opacity=".14"/>';
    });
    o += zglob(px, pZ, Z, 282);
    return o + '</svg>';
  }

  /* Ukrasi preko fotografije ruke: sidra su u pikselima slike {x, y, s (širina), u (ugao)} */
  function ukrasiNaFoto(op, sidra, W, H) {
    var nosi = op.nosi || {}, px = 'f' + (++brojac) + '-', pol = op.pol === 'm' ? 'm' : 'z';
    var pP = PO_ID[nosi.prsten], pZ = PO_ID[nosi.zglob], pT = PO_ID[nosi.tetovaza];
    var o = '<svg class="ukrasi" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' + definicije(px, KOZA.svetla);
    function g(sd, sirina, sadrzaj, klasa) {
      var k = sd.s / sirina;
      return '<g' + (klasa ? ' class="' + klasa + '"' : '') + ' transform="translate(' + sd.x + ',' + sd.y + ') rotate(' + (sd.u || 0) + ') scale(' + k + ')">' + sadrzaj + '</g>';
    }
    if (sidra.tetovaza && pT && pT.crtez) o += g(sidra.tetovaza, 24, tetovaza(pT, 0, 0, 'z'), 'tet-foto');
    if (sidra.zglob && pZ && pZ.id !== 'z-nema') o += g(sidra.zglob, 104, zglob(px, pZ, { l: -50, d: 50 }, -3));
    if (sidra.prsten && pP && pP.id !== 'p-nema') o += g(sidra.prsten, 20, prsten(px, 0, -3, 17, pP, pol));
    return o + '</svg>';
  }

  var Ruka = { ukrasiNaFoto: ukrasiNaFoto, KOZA: KOZA, PREDMETI: PREDMETI, PO_ID: PO_ID, PODRAZUMEVANO: PODRAZUMEVANO, zaPol: zaPol, nagrada: nagrada, NAGRADA: NAGRADA, nacrtaj: nacrtaj };
  if (typeof module !== 'undefined' && module.exports) module.exports = Ruka;
  else koren.Ruka = Ruka;
})(this);
