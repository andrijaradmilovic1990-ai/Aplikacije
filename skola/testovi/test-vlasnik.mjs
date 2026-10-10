// Test: vlasnik Škole se prepoznaje po SHA-256 otisku mejla (mejl ne stoji u javnom repou).
// Pokretanje iz korena repoa: VLASNIK_EMAIL=<Andrijin mejl> node skola/testovi/test-vlasnik.mjs
import fs from "node:fs";
let pad = 0; const ok = (ime, u) => { console.log((u ? "PROŠLO " : "PALO   ") + ime); if (!u) pad++; };
const html = fs.readFileSync("skola/index.html", "utf8");
const sha = html.match(/const VLASNIK_SHA = '([0-9a-f]{64})';/);
const fn = html.match(/async function sha256\(t\)\{[^\n]*\}/);
ok("VLASNIK_SHA postoji (64 hex)", !!sha);
ok("funkcija sha256 postoji", !!fn);
ok("u index.html nema mejla u čistom tekstu", !/[a-z0-9._%+-]+@gmail\.com/i.test(html));
ok("prepoznavanje ide preko otiska", /SA_HELENOM = \(await sha256\(String\(korisnik\.email\|\|''\)\.trim\(\)\.toLowerCase\(\)\)\)===VLASNIK_SHA;/.test(html));
const sha256 = new Function("return (" + fn[0] + ")")();
const isti = async e => (await sha256(String(e || "").trim().toLowerCase())) === sha[1];
const pravi = process.env.VLASNIK_EMAIL;
ok("VLASNIK_EMAIL zadat (bez njega test nije izveden)", !!pravi);
if (pravi) {
  ok("pravi mejl → vlasnik", await isti(pravi));
  ok("pravi mejl velikim slovima i sa razmakom → vlasnik", await isti("  " + pravi.toUpperCase() + " "));
  ok("drugi mejl → nije vlasnik (gost)", !(await isti("neko.drugi@gmail.com")));
  ok("prazan mejl → nije vlasnik", !(await isti("")));
}
let svi = [];
for (const f of ["skola/index.html", "skola/lekcije.js", "brzi/index.html", "pisanje/index.html", "README.md", "skola/UPUTSTVO.md", "brzi/UPUTSTVO.md", "pisanje/UPUTSTVO.md"])
  if (fs.existsSync(f) && /[a-z0-9._%+-]+@gmail\.com/i.test(fs.readFileSync(f, "utf8"))) svi.push(f);
ok("nijedan fajl aplikacija ne nosi gmail adresu" + (svi.length ? " (" + svi.join(", ") + ")" : ""), svi.length === 0);
console.log(pad ? "UKUPNO PALO: " + pad : "SVE PROŠLO"); process.exit(pad ? 1 : 0);
