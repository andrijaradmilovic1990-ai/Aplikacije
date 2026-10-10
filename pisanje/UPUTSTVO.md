# Pisalnica — uputstvo

**Šta je:** aplikacija za pisanje: priče po poglavljima, brojač reči, niz dana pisanja, izvoz u .md, Word i PDF, dugme „Razradi sa Helenom" (otvara claude.ai).

**Adresa:** https://andrijaradmilovic1990-ai.github.io/Aplikacije/pisanje/ (stara `/Pisanje/` preusmerava ovde).

**VAŽNO — gde su tekstovi:** u telefonu, u memoriji browsera (`localStorage`, ključ `pisalnica_data_v1`), vezano za adresu `andrijaradmilovic1990-ai.github.io`. Nema baze ni oblaka. Zato:
- Pisalnica **ostaje na github.io** — ne dobija svoj worker kao Škola i Brzi unos; na drugoj adresi tekstovi se ne bi videli.
- Brisanje podataka sajta / browsera briše i tekstove. Rezerva = izvoz (.md / Word / PDF).
- `KEY` se ne menja nikad, inače stari tekstovi „nestaju" (ostaju pod starim ključem).

**Fajlovi:** `index.html` (cela aplikacija), `manifest.json` (id/scope/start_url `/Aplikacije/pisanje/`), `sw.js` (keš za rad bez interneta — kod izmene podići broj u `CACHE`), ikone.

**Popravka / dogradnja:** izmena u `index.html` → proba lokalno (`python3 -m http.server` iz korena repoa, `http://localhost:8000/pisanje/`) → podići `CACHE` u `sw.js` → push na `main`.

**Istorija:** do 10.10.2026 u svom repou **Pisanje**; preseljena ovde (isti sajt, isti tekstovi; proba: stari tekst vidljiv na novoj adresi, 7/7).
