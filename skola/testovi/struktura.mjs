// Provera strukture lekcija (iz korena repoa Aplikacije): node skola/testovi/struktura.mjs [skola/lekcije.js]
// Za svaku napisanu lekciju: kuka (p, o, t u opsegu), 4–5 delova sa proverom (p, o, t, z),
// 4–5 ključnih ideja, 5 kartica {p, o}, 2 pitanja za razgovor; id-jevi jedinstveni; RED pokriva sve.
import {pathToFileURL} from 'url';
const f = process.argv[2] || 'skola/lekcije.js';
const {OBLASTI, RED} = await import(pathToFileURL(f).href);
let gr = [], nap = 0, nenap = [], kart = 0; const ids = new Set();
const opc = (x, gde) => { if (!x || !x.p || !Array.isArray(x.o) || x.o.length < 2 || !(x.t >= 0 && x.t < x.o.length)) gr.push(gde + ': pitanje/opcije/tačan'); };
for (const ob of OBLASTI) for (const l of ob.lekcije) {
  if (ids.has(l.id)) gr.push('dupli id ' + l.id); ids.add(l.id);
  if (!l.delovi) { nenap.push(l.id); continue; }
  nap++;
  opc(l.kuka, l.id + ' kuka');
  if (l.delovi.length < 4 || l.delovi.length > 5) gr.push(l.id + ': delova ' + l.delovi.length);
  l.delovi.forEach((d, i) => { if (!d.n || !d.t) gr.push(l.id + ' deo ' + i); opc(d.pr, l.id + ' deo ' + i); if (!d.pr || !d.pr.z) gr.push(l.id + ' deo ' + i + ': nema zašto'); });
  if (!(l.kljucno && l.kljucno.length >= 4 && l.kljucno.length <= 5)) gr.push(l.id + ': ključnih ' + (l.kljucno || []).length);
  if (!(l.kartice && l.kartice.length === 5 && l.kartice.every(k => k.p && k.o))) gr.push(l.id + ': kartice');
  kart += (l.kartice || []).length;
  if (!(l.razgovor && l.razgovor.length === 2)) gr.push(l.id + ': razgovor');
}
if (RED.length !== ids.size || new Set(RED).size !== ids.size) gr.push('RED ne pokriva sve lekcije');
console.log(`napisano ${nap}/${ids.size}, kartica ${kart}, piše se: ${nenap.join(' ') || '—'}`);
console.log(gr.length ? 'GREŠKE:\n' + gr.join('\n') : 'struktura OK');
process.exit(gr.length ? 1 : 0);
