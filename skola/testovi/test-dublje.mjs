// za_helenu.dublje: isti deo lekcije samo jednom, i za stare zapise (ključ po vremenu), poslednjih 5 po datumu.
// Pokretanje (iz korena repoa Aplikacije): node skola/testovi/test-dublje.mjs
import fs from "node:fs";
const red = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8").match(/const dub=.*?;\n/)[0];
const dub = S => new Function("S", red + "return dub;")(S);
let pal = 0; const ok = (n, c) => { console.log((c ? "PROŠLO " : "PALO   ") + n); if (!c) pal++; };
const z = (lekcija, deo, datum) => ({ lekcija, deo, datum });
// stanje baze 19.10.2026 (skola/dublje): isti deo tri puta, ključevi po vremenu
const STARO = { "1791566915827": z("1-1", "Svemir ima početak", "2026-10-09 19:28"), "1791566918434": z("1-1", "Svemir ima početak", "2026-10-09 19:28"),
  "1791566934567": z("1-1", "Svemir ima početak", "2026-10-09 19:28") };
ok("stari trostruki zapis → 1", dub({ dublje: STARO }).length === 1);
ok("prazno → []", dub({}).length === 0);
ok("stari + nov ključ za isti deo → 1, noviji datum", (r => r.length === 1 && r[0].datum === "2026-10-20 10:00")(dub({ dublje: { ...STARO, "1-1_0": z("1-1", "Svemir ima početak", "2026-10-20 10:00") } })));
const mnogo = {}; for (let i = 1; i <= 7; i++) mnogo["2-" + i + "_0"] = z("2-" + i, "deo", "2026-10-1" + i + " 08:00");
mnogo["10-1_0"] = z("10-1", "deo", "2026-10-01 08:00");   // leksički poslednji ključ, ali najstariji datum
const r = dub({ dublje: mnogo });
ok("poslednjih 5 po datumu, ne po ključu", r.length === 5 && r[0].lekcija === "2-3" && r[4].lekcija === "2-7" && !r.some(x => x.lekcija === "10-1"));
console.log(pal ? "PALO: " + pal : "SVE PROŠLO"); process.exit(pal ? 1 : 0);
