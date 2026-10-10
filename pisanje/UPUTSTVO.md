# Pisalnica — uputstvo

**Šta je:** aplikacija za pisanje: priče po poglavljima, brojač reči, niz dana pisanja, izvoz u .md, Word i PDF, dugme „Razradi sa Helenom" (otvara claude.ai).

**Adresa za telefon:** https://pisanje-app.andrija-radmilovic1990.workers.dev (worker `pisanje-app` prenosi `/Aplikacije/pisanje/` sa Pages). Na github.io stranica preusmerava na tu adresu (osim sa `?proba`); stara `/Pisanje/` takođe.

**VAŽNO — gde su tekstovi:** u telefonu, u memoriji browsera (`localStorage`, ključ `pisalnica_data_v1`), vezano za ADRESU. Nema baze ni oblaka.
- Od 10.10.2026 adresa je `pisanje-app` (svoja, jer telefon ne pušta dve instalirane aplikacije sa github.io, a tamo je Budžet).
- **Prenos sa github.io (jednom):** kad se Pisalnica otvori na github.io, tekstovi odande idu u adresu (`#prenos=`) i nova ih doda — samo priče i poglavlja kojih na novoj nema; postojeće ne dira. Na github.io ostaje kopija i oznaka `pisalnica_prenet`, pa se prenos ne ponavlja (obrisano na novoj ne vaskrsava). Ponovni prenos na zahtev: `github.io/Aplikacije/pisanje/?prenesi`. Test: 15/15 (dve adrese, kvačice, bez duplikata, kopija netaknuta).
- Brisanje podataka sajta / browsera briše i tekstove. Rezerva = izvoz (.md / Word / PDF).
- `KEY` se ne menja nikad.

**Fajlovi:** `index.html` (cela aplikacija), `manifest.json` (id/scope/start_url `/Aplikacije/pisanje/`), `sw.js` (keš za rad bez interneta — kod izmene podići broj u `CACHE`), ikone.

**Popravka / dogradnja:** izmena u `index.html` → proba lokalno (`python3 -m http.server` iz korena repoa, `http://localhost:8000/pisanje/`) → podići `CACHE` u `sw.js` → push na `main`.

**Istorija:** do 10.10.2026 u svom repou **Pisanje**; preseljena ovde (isti sajt, isti tekstovi; proba: stari tekst vidljiv na novoj adresi, 7/7).
