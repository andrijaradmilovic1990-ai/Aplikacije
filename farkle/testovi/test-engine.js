// node farkle/testovi/test-engine.js — bodovanje, tok partije, kompjuter. Izlaz ≠ 0 kad nešto padne.
const F = require('../engine.js');
let prosli = 0, pali = 0;
function ok(uslov, opis) { if (uslov) prosli++; else { pali++; console.log('PALO: ' + opis); } }
function jed(a, b, opis) { ok(a === b, opis + ' (dobijeno ' + a + ', očekivano ' + b + ')'); }

const PODR = F.pravila();
const FIX = F.pravila({ visestruke: 'fiksno' });
jed(PODR.visestruke, 'zbir', 'podrazumevano: svaka sledeća kockica doda trojku');
jed(F.bodujIzbor([4, 4, 4, 4], PODR), 800, 'četiri četvorke = 800'); jed(F.bodujIzbor([6, 6, 6, 6, 6], PODR), 1800, 'pet šestica = 1800');
jed(F.bodujIzbor([5, 5, 5, 5, 5, 5], PODR), 2000, 'šest petica = 2000'); jed(F.bodujIzbor([1, 1, 1, 1, 1], PODR), 3000, 'pet keceva = 3000');
jed(F.bodujIzbor([1, 1, 1, 1], PODR), 2000, 'četiri keca = 2000'); jed(F.bodujIzbor([2, 2, 2, 2], PODR), 400, 'četiri dvojke = 400');
jed(F.bodujIzbor([1, 1, 1, 1, 6, 6], PODR), 0, 'četiri keca + dve šestice: šestice ne mogu (nisu tri para)');
jed(F.bodujIzbor([1, 1, 1, 1, 5, 5], PODR), 2100, 'četiri keca + dve petice = 2100');
jed(F.bodujIzbor([1, 1, 1, 1], FIX), 1100, 'fiksno (opcija): četiri keca kao trojka + kec');
jed(PODR.minUpis, 300, 'podrazumevano: upis od 300 svaki potez'); jed(PODR.triPara, 750, 'podrazumevano: tri para 750'); jed(PODR.ulaz, 0, 'podrazumevano: bez posebnog ulaza');
const DUP = F.pravila({ visestruke: 'dupliranje' });
const B = (k, r) => F.bodujIzbor(k, r || FIX);

// --- pojedinačne i trojke
jed(B([1]), 100, 'jedinica'); jed(B([5]), 50, 'petica'); jed(B([1, 5]), 150, '1+5');
jed(B([2]), 0, 'dvojka sama ne boduje'); jed(B([1, 2]), 0, 'izbor sa kockicom koja ne boduje');
jed(B([1, 1, 1]), 1000, 'tri jedinice'); jed(B([2, 2, 2]), 200, 'tri dvojke'); jed(B([3, 3, 3]), 300, 'tri trojke');
jed(B([4, 4, 4]), 400, 'tri četvorke'); jed(B([5, 5, 5]), 500, 'tri petice'); jed(B([6, 6, 6]), 600, 'tri šestice');
jed(B([1, 1, 1, 5]), 1050, 'tri jedinice + 5'); jed(B([5, 5, 5, 5]), 1000, 'četiri petice fiksno');
jed(B([1, 1]), 200, 'dve jedinice'); jed(B([5, 5, 1, 1]), 300, 'dve petice i dve jedinice');
// --- fiksno
jed(B([2, 2, 2, 2]), 1000, '4 iste fiksno'); jed(B([3, 3, 3, 3, 3]), 2000, '5 istih fiksno'); jed(B([4, 4, 4, 4, 4, 4]), 3000, '6 istih fiksno');
jed(B([1, 1, 1, 1]), 1100, '4 jedinice fiksno: 1000 < 3×1+1 → tri jedinice + jedinica = 1100');
jed(B([1, 2, 3, 4, 5, 6]), 1500, 'kenta'); jed(B([2, 2, 3, 3, 4, 4]), 750, 'tri para 750'); jed(B([6, 4, 2, 6, 2, 4]), 750, 'tri para bilo kojim redom');
jed(B([2, 2, 2, 2, 3, 3]), 1500, 'četiri iste + par (veće od tri para)'); jed(B([2, 2, 2, 3, 3, 3]), 2500, 'dve trojke');
jed(B([1, 1, 5, 5, 6, 6]), 750, 'tri para 750 veće od 1+1+5+5 = 300'); jed(B([1, 1, 5, 5, 1, 1]), 1500, 'četiri jedinice + par petica: 1500 (više od 1200 i od tri para)');
jed(B([2, 2, 3, 3, 4, 6]), 0, 'ništa ne boduje u 6');
jed(B([1, 2, 3, 4, 5]), 0, 'mala kenta isključena: 2, 3 i 4 ne boduju, pa izbor ne važi');
jed(F.bodujIzbor([1, 2, 3, 4, 5], F.pravila({ malaKenta: true })), 500, 'mala kenta 1-5');
jed(F.bodujIzbor([2, 3, 4, 5, 6], F.pravila({ malaKenta: true })), 750, 'mala kenta 2-6');
jed(F.bodujIzbor([1, 2, 3, 4, 5, 5], F.pravila({ malaKenta: true })), 550, 'mala kenta + petica');
jed(F.bodujIzbor([2, 2, 3, 3, 4, 4], F.pravila({ triPara: 0 })), 0, 'tri para isključena');
jed(F.bodujIzbor([2, 2, 3, 3, 4, 4], F.pravila({ triPara: 1500 })), 1500, 'tri para 1500 kad se tako podesi');
// --- dupliranje
jed(B([2, 2, 2, 2], DUP), 400, '4 dvojke duplo'); jed(B([2, 2, 2, 2, 2], DUP), 800, '5 dvojki duplo');
jed(B([2, 2, 2, 2, 2, 2], DUP), 1600, '6 dvojki duplo'); jed(B([1, 1, 1, 1], DUP), 2000, '4 jedinice duplo');
jed(B([1, 1, 1, 1, 1, 1], DUP), 8000, '6 jedinica duplo'); jed(B([6, 6, 6, 6, 6], DUP), 2400, '5 šestica duplo');
jed(B([2, 2, 2, 3, 3, 3], DUP), 500, 'dve trojke u dupliranju = 200+300 (nema bonusa)');
jed(B([2, 2, 2, 2, 3, 3], DUP), 0, 'četiri+par u dupliranju nisu tri para (trojke ne boduju)');
// --- izbor mora biti podskup ispravnih vrednosti
let baca = false; try { F.bodujIzbor([7], FIX); } catch (e) { baca = true; } ok(baca, 'kockica 7 baca grešku');

// --- farkle: tačne verovatnoće (iscrpno, sva bacanja)
function sva(n) { const out = []; const r = (p) => { if (p.length === n) { out.push(p.slice()); return; } for (let v = 1; v <= 6; v++) { p.push(v); r(p); p.pop(); } }; r([]); return out; }
const ocek = { 1: 4, 2: 16, 3: 60, 4: 204, 5: 600 };
for (let n = 1; n <= 6; n++) {
  const sve = sva(n); let f = 0, nesklad = 0;
  for (const b of sve) {
    const fa = F.jeFarkle(b, FIX); if (fa) f++;
    // nezavisna provera: farkle ⇔ nijedan podskup ne boduje
    let ima = false; for (let m = 1; m < (1 << n) && !ima; m++) { const s = []; for (let i = 0; i < n; i++) if (m & (1 << i)) s.push(b[i]); if (F.bodujIzbor(s, FIX) > 0) ima = true; }
    if (ima === fa) nesklad++;
  }
  jed(nesklad, 0, 'farkle ⇔ nijedan podskup ne boduje, ' + n + ' kockica');
  if (ocek[n] !== undefined) jed(f, ocek[n], 'broj farkle bacanja sa ' + n + ' kockica');
  if (n === 6) { console.log('  6 kockica: farkle ' + f + '/46656 = ' + (100 * f / 46656).toFixed(2) + '%'); ok(f > 0 && f < 1100, '6 kockica farkle retko'); }
}

// --- bodovanje izbora iz bacanja: svaka kombinacija iz bacanja
const izb = F.izboriKojiBoduju([1, 5, 2, 2, 3, 4], FIX);
ok(izb.some(x => x.poeni === 150 && x.indeksi.length === 2), 'izbor 1+5 postoji');
ok(izb.every(x => x.poeni > 0), 'svi izbori boduju');

// --- kriptokocka: ravnomerna
const br = [0, 0, 0, 0, 0, 0, 0]; for (let i = 0; i < 60000; i++) br[F.kriptoKocka()]++;
ok(br.slice(1).every(x => x > 9500 && x < 10500), 'kriptokocka ravnomerna: ' + br.slice(1).join(','));

// --- tok partije sa nameštenim kockicama
function niz(...v) { let i = 0; return () => { if (i >= v.length) throw new Error('nestalo kockica'); return v[i++]; }; }
let g = F.novaPartija([{ ime: 'A' }, { ime: 'B' }], { ulaz: 500, minUpis: 0 });
g = F.baci(g, niz(1, 1, 1, 2, 3, 4));
jed(g.potez.faza, 'bira', 'posle bacanja bira');
ok(!F.mozeUpis(g, [3]).ok, 'izbor dvojke nije dozvoljen');
let greska = ''; try { F.upisi(g, [0]); } catch (e) { greska = e.message; } ok(/ulazak/i.test(greska), 'ulaz 500: 100 nije dovoljno');
g = F.upisi(g, [0, 1, 2]); jed(g.igraci[0].poeni, 1000, 'upisano 1000'); jed(g.naPotezu, 1, 'potez prelazi na B');
// farkle B
g = F.baci(g, niz(2, 3, 4, 6, 2, 3)); jed(g.potez.faza, 'farkle', 'farkle prepoznat');
g = F.posleFarkla(g); jed(g.naPotezu, 0, 'posle farkla nazad na A'); jed(g.krug, 2, 'drugi krug');
// vruće kockice: A uzme sve
g = F.baci(g, niz(1, 1, 5, 5, 6, 6)); g = F.baci(g, niz(2, 3, 4, 6, 2, 3), [0, 1, 2, 3, 4, 5]);
jed(g.potez.faza, 'farkle', 'posle vrućih kockica baca šest i padne');
jed(g.potez.izgubljeno, 750, 'izgubljeno 750 (tri para)');
g = F.posleFarkla(g); jed(g.igraci[0].poeni, 1000, 'poeni posle farkla netaknuti');
g = F.baci(g, niz(5, 2, 2, 3, 4, 6)); g = F.baci(g, niz(1, 1, 1, 2, 3), [0]);
jed(g.potez.slobodnih, 5, 'ostalo 5 kockica'); jed(g.potez.poeni, 50, 'u potezu 50');
g = F.upisi(g, [0, 1, 2]); jed(g.igraci[1].poeni, 1050, 'B ušao sa 1050');
// hot dice ručno
g = F.baci(g, niz(1, 2, 3, 4, 5, 6)); g = F.baci(g, niz(5, 2, 2, 3, 4, 6), [0, 1, 2, 3, 4, 5]);
jed(g.potez.slobodnih, 6, 'vruće: opet 6'); ok(g.potez.vruce, 'zastavica vruće');
g = F.upisi(g, [0]); jed(g.igraci[0].poeni, 2550, 'A 1000+1500+50');

// --- upis od 300 u svakom potezu
g = F.novaPartija([{ ime: 'A' }, { ime: 'B' }]);
g = F.baci(g, niz(1, 1, 1, 2, 3, 4)); g = F.upisi(g, [0, 1, 2]); jed(g.igraci[0].poeni, 1000, 'A upisao 1000');
g = F.baci(g, niz(5, 2, 2, 3, 4, 6));
let m = F.mozeUpis(g, [0]); ok(!m.ok && /300/.test(m.razlog), 'B sa 50 ne može da upiše: ' + m.razlog);
greska = ''; try { F.upisi(g, [0]); } catch (e) { greska = e.message; } ok(/300/.test(greska), 'upis ispod 300 odbijen');
g = F.baci(g, niz(5, 5, 2, 3, 4), [0]);
m = F.mozeUpis(g, [0, 1]); ok(!m.ok, '150 i dalje ispod 300');
g = F.baci(g, niz(1, 1, 3), [0, 1]);
m = F.mozeUpis(g, [0, 1]); ok(m.ok && m.ukupno === 350, 'sa 350 upis dozvoljen');
g = F.upisi(g, [0, 1]); jed(g.igraci[1].poeni, 350, 'B upisao 350');
g = F.baci(g, niz(1, 5, 5, 2, 3, 4)); m = F.mozeUpis(g, [0, 1, 2]); ok(!m.ok, 'i kad je već na tabli: 200 ne može');
g = F.baci(g, niz(1, 2, 3), [0, 1, 2]); m = F.mozeUpis(g, [0]); ok(m.ok && m.ukupno === 300, 'tačno 300 može');
const stara = F.novaPartija([{ ime: 'A' }, { ime: 'B' }]); delete stara.pravila.minUpis;
const s2 = F.baci(stara, niz(5, 2, 2, 3, 4, 6)); ok(F.mozeUpis(s2, [0]).ok, 'stara sačuvana partija (bez minUpis) radi kao pre');

// --- poslednji krug
g = F.novaPartija([{ ime: 'A' }, { ime: 'B' }, { ime: 'C' }], { cilj: 1000, ulaz: 0, minUpis: 0 });
g = F.baci(g, niz(1, 1, 1, 2, 3, 4)); g = F.upisi(g, [0, 1, 2]);
jed(g.okidac, 0, 'A okinuo kraj'); ok(!g.kraj, 'još nije kraj');
g = F.baci(g, niz(5, 2, 3, 4, 6, 2)); g = F.upisi(g, [0]); ok(!g.kraj, 'B odigrao poslednji');
g = F.baci(g, niz(1, 1, 1, 1, 2, 3)); g = F.upisi(g, [0, 1, 2, 3]);
ok(g.kraj && g.kraj.pobednik === 2, 'C prestigao u poslednjem krugu i pobedio');
g = F.novaPartija([{ ime: 'A' }, { ime: 'B' }], { cilj: 1000, ulaz: 0, minUpis: 0, poslednjiKrug: false });
g = F.baci(g, niz(1, 1, 1, 2, 3, 4)); g = F.upisi(g, [0, 1, 2]); ok(g.kraj && g.kraj.pobednik === 0, 'bez poslednjeg kruga: odmah pobeda');

// --- kazna za tri farkla
g = F.novaPartija([{ ime: 'A' }, { ime: 'B' }], { ulaz: 0, minUpis: 0, kaznaTriFarkla: 1000 });
g = F.baci(g, niz(1, 1, 1, 2, 3, 4)); g = F.upisi(g, [0, 1, 2]);
for (let k = 0; k < 3; k++) {
  g = F.baci(g, niz(2, 3, 4, 6, 2, 3)); g = F.posleFarkla(g); // B
  if (k < 2) { g = F.baci(g, niz(2, 3, 4, 6, 2, 3)); g = F.posleFarkla(g); } // A
}
jed(g.igraci[1].poeni, 0, 'kazna ne spušta ispod nule');
g = F.baci(g, niz(2, 3, 4, 6, 2, 3)); g = F.posleFarkla(g);
jed(g.igraci[0].poeni, 0, 'A posle tri farkla izgubio 1000');

// --- nepromenljivost stanja
const pre = JSON.stringify(g); F.baci(g, niz(1, 2, 3, 4, 5, 6)); jed(JSON.stringify(g), pre, 'baci ne menja ulazno stanje');

// --- kompjuter: cele partije, svi nivoi, nijedna nedozvoljena odluka
function odigraj(nivoi, seme, pr) {
  const k = F.semeKocka(seme);
  let g = F.novaPartija(nivoi.map((n, i) => ({ ime: 'K' + i, tip: 'bot', nivo: n })), pr);
  let koraka = 0;
  while (!g.kraj) {
    if (++koraka > 20000) throw new Error('partija se ne završava');
    if (g.potez.faza === 'baci') g = F.baci(g, k);
    else if (g.potez.faza === 'farkle') g = F.posleFarkla(g);
    else {
      const o = F.odlukaKompjutera(g, g.igraci[g.naPotezu].nivo, k);
      if (!o) throw new Error('nema odluke');
      if (o.akcija === 'upisi') g = F.upisi(g, o.indeksi); else g = F.baci(g, k, o.indeksi);
    }
  }
  return g;
}
let pobedeTezak = 0, partija = 0, pobedeSrednji = 0;
const t0 = Date.now();
for (let s = 1; s <= 80; s++) {
  const prvi = s % 2;
  const g1 = odigraj(prvi ? ['tezak', 'lak'] : ['lak', 'tezak'], s * 7919);
  partija++; if (g1.kraj.pobednik === (prvi ? 0 : 1)) pobedeTezak++;
  const g2 = odigraj(prvi ? ['srednji', 'lak'] : ['lak', 'srednji'], s * 104729, { visestruke: 'dupliranje', malaKenta: true, kaznaTriFarkla: 1000 });
  if (g2.kraj.pobednik === (prvi ? 0 : 1)) pobedeSrednji++;
  ok(g1.igraci.some(x => x.poeni >= 10000), 'neko je stigao do cilja');
}
console.log('  težak protiv lakog: ' + pobedeTezak + '/' + partija + ' · srednji protiv lakog: ' + pobedeSrednji + '/' + partija + ' · ' + (Date.now() - t0) + ' ms');
ok(pobedeTezak > partija * 0.55, 'težak češće pobeđuje lakog');
ok(pobedeSrednji > partija * 0.5, 'srednji češće pobeđuje lakog');
// brzina odluke teškog
const k = F.semeKocka(5); let gg = F.novaPartija([{ ime: 'a' }, { ime: 'b' }]); gg = F.baci(gg, k);
const t1 = Date.now(); for (let i = 0; i < 20; i++) F.odlukaKompjutera(gg, 'tezak', k); const ms = (Date.now() - t1) / 20;
console.log('  težak: ' + ms.toFixed(1) + ' ms po odluci'); ok(ms < 150, 'težak odlučuje brzo');

console.log((pali ? 'PALO ' + pali : 'SVE PROŠLO') + ' — prošlo ' + prosli);
process.exit(pali ? 1 : 0);
