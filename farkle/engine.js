/* Farkle — pravila, bodovanje, tok partije i kompjuterski igrač.
   Čist JavaScript bez DOM-a: isti fajl koristi aplikacija (window.Farkle) i testovi (require). */
(function (koren) {
  'use strict';

  var PODRAZUMEVANA = {
    cilj: 10000,          // do koliko se igra
    ulaz: 500,            // koliko mora u jednom potezu da bi se „ušlo" (0 = bez ulaza)
    visestruke: 'fiksno', // 'fiksno' (4 iste 1000, 5 iste 2000, 6 istih 3000) ili 'dupliranje' (svaka sledeća ×2)
    kenta: 1500,          // 1-2-3-4-5-6
    triPara: 1500,        // 0 = ne važi
    cetiriIPar: 1500,     // samo uz 'fiksno'; 0 = ne važi
    dveTrojke: 2500,      // samo uz 'fiksno'; 0 = ne važi
    malaKenta: false,     // 1-5 = 500, 2-6 = 750
    kaznaTriFarkla: 0,    // npr. 1000; 0 = bez kazne
    poslednjiKrug: true   // kad neko pređe cilj, ostali imaju još po jedan potez
  };

  function pravila(p) {
    var r = {}, k;
    for (k in PODRAZUMEVANA) r[k] = PODRAZUMEVANA[k];
    if (p) for (k in p) if (Object.prototype.hasOwnProperty.call(PODRAZUMEVANA, k)) r[k] = p[k];
    return r;
  }

  function brojevi(kockice) {
    var c = [0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < kockice.length; i++) {
      var v = kockice[i];
      if (v !== (v | 0) || v < 1 || v > 6) throw new Error('Neispravna kockica: ' + v);
      c[v]++;
    }
    return c;
  }

  function trojka(v) { return v === 1 ? 1000 : v * 100; }

  function nIstih(v, n, r) {
    if (r.visestruke === 'dupliranje') return trojka(v) * Math.pow(2, n - 3);
    return n === 3 ? trojka(v) : (n - 3) * 1000;
  }

  /* Najveći zbir kad SVAKA kockica iz izbora mora da donosi poene; 0 ako bar jedna ne donosi.
     Kombinacije sa svih šest kockica važe samo kad je izbor tačno šest kockica (celo bacanje). */
  function bodujIzbor(kockice, p) {
    var r = pravila(p);
    if (!kockice || !kockice.length) return 0;
    var c = brojevi(kockice);
    var memo = {};
    var NEMA = -1;

    function rek(c) {
      var kljuc = c.join(','), i, v, n;
      if (kljuc in memo) return memo[kljuc];
      var ukupno = 0;
      for (i = 1; i <= 6; i++) ukupno += c[i];
      if (ukupno === 0) return (memo[kljuc] = 0);
      var naj = NEMA;
      function probaj(vrednost, ostatak) {
        var dalje = rek(ostatak);
        if (dalje !== NEMA && vrednost + dalje > naj) naj = vrednost + dalje;
      }
      for (v = 1; v <= 6; v++) {
        for (n = 3; n <= c[v]; n++) {
          var o = c.slice(); o[v] -= n; probaj(nIstih(v, n, r), o);
        }
      }
      if (c[1] > 0) { var o1 = c.slice(); o1[1]--; probaj(100, o1); }
      if (c[5] > 0) { var o5 = c.slice(); o5[5]--; probaj(50, o5); }
      if (r.malaKenta) {
        if (c[1] && c[2] && c[3] && c[4] && c[5]) { var m1 = c.slice(); for (v = 1; v <= 5; v++) m1[v]--; probaj(500, m1); }
        if (c[2] && c[3] && c[4] && c[5] && c[6]) { var m2 = c.slice(); for (v = 2; v <= 6; v++) m2[v]--; probaj(750, m2); }
      }
      return (memo[kljuc] = naj);
    }

    var najbolje = rek(c);
    if (kockice.length === 6) {
      var parovi = 0, trojke = 0, cetvorke = 0, dvojke = 0, sve = true;
      for (var v = 1; v <= 6; v++) {
        if (c[v] !== 1) sve = false;
        if (c[v] === 2) { parovi++; dvojke++; }
        if (c[v] === 4) { parovi += 2; cetvorke++; }
        if (c[v] === 6) parovi += 3;
        if (c[v] === 3) trojke++;
      }
      if (sve && r.kenta > 0) najbolje = Math.max(najbolje, r.kenta);
      if (parovi === 3 && r.triPara > 0) najbolje = Math.max(najbolje, r.triPara);
      if (r.visestruke === 'fiksno') {
        if (cetvorke === 1 && dvojke === 1 && r.cetiriIPar > 0) najbolje = Math.max(najbolje, r.cetiriIPar);
        if (trojke === 2 && r.dveTrojke > 0) najbolje = Math.max(najbolje, r.dveTrojke);
      }
    }
    return najbolje === NEMA ? 0 : najbolje;
  }

  /* Svi različiti izbori (po vrednostima) koji donose poene: [{indeksi, vrednosti, poeni}] */
  function izboriKojiBoduju(bacanje, p) {
    var r = pravila(p), n = bacanje.length, vidjeno = {}, out = [];
    for (var maska = 1; maska < (1 << n); maska++) {
      var idx = [], vr = [];
      for (var i = 0; i < n; i++) if (maska & (1 << i)) { idx.push(i); vr.push(bacanje[i]); }
      var kljuc = vr.slice().sort().join('');
      if (vidjeno[kljuc]) continue;
      vidjeno[kljuc] = 1;
      var poeni = bodujIzbor(vr, r);
      if (poeni > 0) out.push({ indeksi: idx, vrednosti: vr, poeni: poeni });
    }
    return out;
  }

  function jeFarkle(bacanje, p) {
    var r = pravila(p);
    for (var i = 0; i < bacanje.length; i++) if (bacanje[i] === 1 || bacanje[i] === 5) return false;
    return izboriKojiBoduju(bacanje, r).length === 0;
  }

  /* ---------- slučajnost ---------- */
  function kriptoKocka() {
    var c = (typeof crypto !== 'undefined' && crypto.getRandomValues) ? crypto : null;
    if (!c && typeof require === 'function') { try { c = require('crypto').webcrypto; } catch (e) { c = null; } }
    if (!c) return 1 + Math.floor(Math.random() * 6);
    var b = new Uint8Array(1);
    do { c.getRandomValues(b); } while (b[0] >= 252); // 252 = 42·6, bez pristrasnosti
    return 1 + (b[0] % 6);
  }

  function semeKocka(seme) { // za testove: ponovljiv niz
    var s = (seme >>> 0) || 1;
    return function () {
      s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0;
      return 1 + (s % 6);
    };
  }

  /* ---------- partija ---------- */
  function novaPartija(igraci, p) {
    if (!igraci || igraci.length < 1 || igraci.length > 6) throw new Error('Igrača mora biti 1–6');
    return {
      v: 1,
      pravila: pravila(p),
      igraci: igraci.map(function (g) {
        return { ime: g.ime, tip: g.tip || 'covek', nivo: g.nivo || null, poeni: 0, naTabli: false, farkliZaredom: 0, najPotez: 0 };
      }),
      naPotezu: 0,
      krug: 1,
      potez: noviPotez(),
      okidac: null,     // ko je prvi prešao cilj
      kraj: null,       // { pobednik: indeks }
      dnevnik: []       // [{igrac, poeni, farkle}]
    };
  }

  function noviPotez() {
    return { faza: 'baci', bacanje: [], sacuvano: [], poeni: 0, slobodnih: 6, vruce: false };
  }

  function kopija(o) { return JSON.parse(JSON.stringify(o)); }

  function proveriIzbor(g, indeksi) {
    var b = g.potez.bacanje, vid = {};
    if (!indeksi || !indeksi.length) return { ok: false, razlog: 'Izaberi bar jednu kockicu koja donosi poene.' };
    for (var i = 0; i < indeksi.length; i++) {
      var x = indeksi[i];
      if (x !== (x | 0) || x < 0 || x >= b.length || vid[x]) return { ok: false, razlog: 'Neispravan izbor.' };
      vid[x] = 1;
    }
    var vr = indeksi.map(function (i) { return b[i]; });
    var poeni = bodujIzbor(vr, g.pravila);
    if (poeni <= 0) return { ok: false, razlog: 'Svaka izabrana kockica mora da donosi poene.' };
    return { ok: true, poeni: poeni, vrednosti: vr };
  }

  function baci(g0, kocka, indeksi) {
    var g = kopija(g0), t = g.potez;
    if (g.kraj) throw new Error('Partija je gotova');
    if (t.faza === 'bira') {
      var pr = proveriIzbor(g, indeksi);
      if (!pr.ok) throw new Error(pr.razlog);
      t.poeni += pr.poeni;
      t.sacuvano.push(pr.vrednosti);
      t.slobodnih = t.bacanje.length - indeksi.length;
      t.vruce = false;
      if (t.slobodnih === 0) { t.slobodnih = 6; t.vruce = true; t.sacuvano = []; }
    } else if (t.faza !== 'baci') throw new Error('Sada se ne baca');
    kocka = kocka || kriptoKocka;
    t.bacanje = [];
    for (var i = 0; i < t.slobodnih; i++) t.bacanje.push(kocka());
    if (jeFarkle(t.bacanje, g.pravila)) {
      t.faza = 'farkle';
      t.izgubljeno = t.poeni;
      t.poeni = 0;
    } else t.faza = 'bira';
    return g;
  }

  function mozeUpis(g, indeksi) {
    var t = g.potez, ja = g.igraci[g.naPotezu];
    if (g.kraj || t.faza !== 'bira') return { ok: false, razlog: '' };
    var pr = proveriIzbor(g, indeksi);
    if (!pr.ok) return pr;
    var ukupno = t.poeni + pr.poeni;
    if (!ja.naTabli && ukupno < g.pravila.ulaz)
      return { ok: false, razlog: 'Za ulazak treba bar ' + g.pravila.ulaz + ' u jednom potezu.', ukupno: ukupno };
    return { ok: true, ukupno: ukupno, poeni: pr.poeni };
  }

  function zavrsiPotez(g) {
    var n = g.igraci.length;
    g.naPotezu = (g.naPotezu + 1) % n;
    if (g.naPotezu === 0) g.krug++;
    g.potez = noviPotez();
    if (g.okidac !== null && g.naPotezu === g.okidac) proglasi(g);
  }

  function proglasi(g) {
    var naj = 0;
    for (var i = 1; i < g.igraci.length; i++) if (g.igraci[i].poeni > g.igraci[naj].poeni) naj = i;
    g.kraj = { pobednik: naj };
    g.potez.faza = 'kraj';
  }

  function upisi(g0, indeksi) {
    var g = kopija(g0), m = mozeUpis(g, indeksi);
    if (!m.ok) throw new Error(m.razlog || 'Upis nije moguć');
    var ja = g.igraci[g.naPotezu];
    ja.poeni += m.ukupno;
    ja.naTabli = true;
    ja.farkliZaredom = 0;
    if (m.ukupno > ja.najPotez) ja.najPotez = m.ukupno;
    g.dnevnik.push({ igrac: g.naPotezu, poeni: m.ukupno, farkle: false, krug: g.krug });
    if (ja.poeni >= g.pravila.cilj && g.okidac === null) {
      if (!g.pravila.poslednjiKrug || g.igraci.length === 1) { proglasi(g); return g; }
      g.okidac = g.naPotezu;
    }
    zavrsiPotez(g);
    return g;
  }

  function posleFarkla(g0) {
    var g = kopija(g0);
    if (g.potez.faza !== 'farkle') throw new Error('Nije farkle');
    var ja = g.igraci[g.naPotezu], kazna = 0;
    ja.farkliZaredom++;
    if (g.pravila.kaznaTriFarkla > 0 && ja.farkliZaredom >= 3) {
      kazna = Math.min(ja.poeni, g.pravila.kaznaTriFarkla);
      ja.poeni -= kazna;
      ja.farkliZaredom = 0;
    }
    g.dnevnik.push({ igrac: g.naPotezu, poeni: 0, farkle: true, kazna: kazna, krug: g.krug });
    zavrsiPotez(g);
    return g;
  }

  /* ---------- kompjuter ---------- */
  var VEROVATNOCA_FARKLA = [1, 2 / 3, 4 / 9, 5 / 18, 0.157, 0.077, 0.0231];
  var PRAG = { lak: [0, 250, 300, 350, 400, 500, 99999], srednji: [0, 300, 300, 400, 700, 1500, 99999], tezak: [0, 300, 300, 400, 1000, 2500, 99999] };

  function izborHeuristika(izbori, bacanjeDuzina, tezina) {
    var naj = null, najV = -1;
    for (var i = 0; i < izbori.length; i++) {
      var ostaje = bacanjeDuzina - izbori[i].indeksi.length;
      if (ostaje === 0) ostaje = 6;
      var v = izbori[i].poeni + tezina * ostaje;
      if (v > najV) { najV = v; naj = izbori[i]; }
    }
    return naj;
  }

  // Simulacija nastavka poteza: vraća koliko se u proseku upiše (0 kad farkle).
  function simuliraj(poeni, slobodnih, r, minUpis, kocka) {
    var prag = PRAG.tezak;
    for (var korak = 0; korak < 40; korak++) {
      var b = [];
      for (var i = 0; i < slobodnih; i++) b.push(kocka());
      var izb = izboriKojiBoduju(b, r);
      if (!izb.length) return 0;
      var x = izborHeuristika(izb, b.length, 60);
      poeni += x.poeni;
      slobodnih = b.length - x.indeksi.length;
      if (slobodnih === 0) slobodnih = 6;
      if (poeni >= minUpis && poeni >= prag[slobodnih]) return poeni;
    }
    return poeni;
  }

  /* Odluka za igrača na potezu kad je faza 'bira': { indeksi, akcija: 'baci' | 'upisi' } */
  function odlukaKompjutera(g, nivo, kocka) {
    kocka = kocka || kriptoKocka;
    nivo = nivo || 'srednji';
    var t = g.potez, r = g.pravila, ja = g.igraci[g.naPotezu];
    var izbori = izboriKojiBoduju(t.bacanje, r);
    if (!izbori.length) return null;
    var minUpis = ja.naTabli ? 0 : r.ulaz;
    var vodja = 0;
    g.igraci.forEach(function (x, i) { if (i !== g.naPotezu && x.poeni > vodja) vodja = x.poeni; });
    var poslednjaPrilika = g.okidac !== null; // neko je prešao cilj: ovo mi je poslednji potez
    var potrebno = poslednjaPrilika ? Math.max(minUpis, vodja - ja.poeni + 1) : minUpis;

    function vredi(izbor) {
      var p = t.poeni + izbor.poeni;
      var ost = t.bacanje.length - izbor.indeksi.length;
      if (ost === 0) ost = 6;
      return { p: p, ost: ost, mozeUpis: p >= potrebno };
    }

    var najveci = izbori.reduce(function (a, b) { return b.poeni > a.poeni ? b : a; });

    if (nivo === 'lak') {
      var x = najveci, s = vredi(x), prag = PRAG.lak[s.ost] + (kocka() - 1) * 40;
      var upisi = s.mozeUpis && (s.p >= prag || (!poslednjaPrilika && ja.poeni + s.p >= r.cilj));
      return { indeksi: x.indeksi, akcija: upisi ? 'upisi' : 'baci' };
    }

    if (nivo === 'srednji') {
      var y = izborHeuristika(izbori, t.bacanje.length, 50), sy = vredi(y);
      // ako bi upisivao, upiši najveći izbor
      var sn = vredi(najveci);
      if (sn.mozeUpis && (sn.p >= PRAG.srednji[sn.ost] || (!poslednjaPrilika && ja.poeni + sn.p >= r.cilj)) && sn.ost !== 6)
        return { indeksi: najveci.indeksi, akcija: 'upisi' };
      if (sy.mozeUpis && sy.p >= PRAG.srednji[sy.ost]) return { indeksi: y.indeksi, akcija: sy.ost === 6 ? 'baci' : 'upisi' };
      return { indeksi: y.indeksi, akcija: 'baci' };
    }

    // težak: za svaki izbor uporedi „upiši odmah" sa simulacijom nastavka
    var SIM = 160, najbolja = null;
    for (var i = 0; i < izbori.length; i++) {
      var sv = vredi(izbori[i]);
      var upis = sv.mozeUpis ? sv.p : -1;
      if (sv.mozeUpis && !poslednjaPrilika && ja.poeni + sv.p >= r.cilj) upis = sv.p + 100000; // pobeda/okidanje
      var zbir = 0, uspeh = 0;
      for (var k = 0; k < SIM; k++) {
        var rez = simuliraj(sv.p, sv.ost, r, potrebno, kocka);
        if (rez >= potrebno && rez > 0) { zbir += rez; uspeh++; }
      }
      var nastavak = zbir / SIM;
      if (poslednjaPrilika) nastavak = uspeh / SIM * 100000; // jedino važi preći vođu
      if (poslednjaPrilika && sv.mozeUpis) upis = 100000;
      // kad je mnogo iza, malo hrabrije
      var zaostatak = vodja - ja.poeni;
      if (zaostatak > r.cilj * 0.3 && !poslednjaPrilika) nastavak *= 1.08;
      var kandidati = [{ akcija: 'upisi', v: upis }, { akcija: 'baci', v: nastavak }];
      for (var j = 0; j < 2; j++) {
        if (kandidati[j].v < 0) continue;
        if (!najbolja || kandidati[j].v > najbolja.v) najbolja = { indeksi: izbori[i].indeksi, akcija: kandidati[j].akcija, v: kandidati[j].v };
      }
    }
    return { indeksi: najbolja.indeksi, akcija: najbolja.akcija };
  }

  var Farkle = {
    PODRAZUMEVANA: PODRAZUMEVANA, pravila: pravila,
    bodujIzbor: bodujIzbor, izboriKojiBoduju: izboriKojiBoduju, jeFarkle: jeFarkle,
    kriptoKocka: kriptoKocka, semeKocka: semeKocka,
    novaPartija: novaPartija, baci: baci, upisi: upisi, mozeUpis: mozeUpis, proveriIzbor: proveriIzbor,
    posleFarkla: posleFarkla, odlukaKompjutera: odlukaKompjutera,
    VEROVATNOCA_FARKLA: VEROVATNOCA_FARKLA
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = Farkle;
  else koren.Farkle = Farkle;
})(this);
