# Kuća — uputstvo

**Šta je:** 3D sobe gornje kuće i spisak stavki po sobi (šta se kupuje ili radi, cena, urađeno ili ne). Google prijava, ista baza kao Budžet (`budzet-f3992`).

**Adresa za telefon:** https://kuca-app.andrija-radmilovic1990.workers.dev (worker `kuca-app` samo prenosi fajlove sa Pages). Na github.io stranica sama preusmerava na tu adresu, osim sa `?proba`.

**Fajlovi:** `index.html` (cela aplikacija), `manifest.json` i `sw.js` (instalacija na telefonu).

**Ovde je samo program.** Mere soba, nameštaj, stavke i cene NISU u ovom (javnom) repou — žive samo u bazi, iza prijave:

| putanja | šta |
|---|---|
| `kuca/sobe/<id>` | jedna soba: naziv, mere, zidovi sa otvorima (`zidovi`), ono što stoji na zidu (`naZidu`), nameštaj (`komadi`), pogledi kamere; `red` = redosled dugmadi |
| `kuca/stavke/<id>` | jedna stavka: `soba`, `naziv`, `opis`, `zid`, `model`, `x`, `y`, `cena`, `cenaOko`, `stanje` (`plan` / `gotovo`), `red` |

Iz aplikacije se piše samo `kuca/stavke/<id>/stanje` (dugme „urađeno"). Budžet (`budzet/…`) aplikacija ne čita i ne piše.

**Popravka / dogradnja:** izmena u `index.html` → proba lokalno (`python3 -m http.server`, `http://localhost:8000/kuca/?proba`; bez prijave se vidi samo ekran za prijavu) → push na `main` → za par minuta na telefonu. Nova soba ili stavka = novi unos u bazi, kod se ne menja (osim za nov oblik nameštaja u `MODELS`). Izvor soba i postupak su u privatnom repou Kuca.
