# Farkle — uputstvo

**Šta je:** igra kockicama farkle za telefon. Igra se protiv kompjutera (lak, srednji, težak) ili 2–4 igrača na istom telefonu. Pravila se mogu podesiti: cilj, najmanje za upis u svakom potezu (podrazumevano 300 — Andrijino pravilo), ulaz za prvi upis, četiri/pet/šest istih (fiksno ili dupliranje), tri para, mala kenta, kazna za tri farkla i poslednja šansa. Ima zvuk, vibraciju, tamnu i svetlu temu, statistiku i posvetu na početnom ekranu. Radi i bez interneta.

**Adresa za telefon:** https://farkle-app.andrija-radmilovic1990.workers.dev — worker `farkle-app` prenosi `/Aplikacije/farkle/` sa Pages. Na github.io stranica preusmerava na tu adresu (osim sa `?proba`).

**Posveta:** ne stoji u repou. Link `<adresa>/Aplikacije/farkle/#posveta=<base64url teksta>` je upiše u telefon pri prvom otvaranju, a posle se skine iz adrese. Može da se menja i u Podešavanjima.

**Ruka i prodavnica (od 22.11.2026):** pri bacanju se pojavi ruka (ženska ili muška, 4 boje kože) koja protrese i baci kockice; isključuje se u Podešavanjima. Žetoni (🪙) se dobijaju za partije: pobeda protiv kompjutera 25/50/100 (lak/srednji/težak), poraz 10, partija na istom telefonu 15, prva partija u danu +20; na startu 100. U Prodavnici se kupuju nokti (samo ženska ruka), prstenje, narukvice i satovi, tetovaže; ukras se prvo proba na ruci pa kupi. Poklon ukrasi (nokti „Srce", „Poklon narukvica") ne prodaju se: otključava ih link sa posvetom ili `#poklon`.

**Podaci:** samo u telefonu (`localStorage`): `farkle_partija_v1` (partija u toku, nastavlja se posle zatvaranja), `farkle_podesavanja_v1`, `farkle_stat_v1`, `farkle_kasa_v1` (žetoni, kupljeno, šta se nosi, ruka). Nema baze.

**Fajlovi:**
- `engine.js` — pravila, bodovanje, tok partije, kompjuter. Bez DOM-a; isti fajl koriste aplikacija i testovi.
- `ruka.js` — crtež ruke (SVG) i katalog ukrasa (`PREDMETI`, cene, nagrade). Nov ukras = red u `PREDMETI` (+ crtež u `nokat`/`prsten`/`zglob`/`tetovaza` ako je nova vrsta).
- `index.html` — izgled i ponašanje (3D kockice, zvuk iz WebAudio, bez spoljnih biblioteka).
- `manifest.json`, `sw.js` (keš; kod izmene podići `CACHE`), ikone.

**Testovi:**
- `node farkle/testovi/test-engine.js` — bodovanje (oba načina), tačne verovatnoće farkla (iscrpno), tok partije, upis od 300, ulaz, vruće kockice, poslednja šansa, kazna, kompjuter (160 celih partija). Očekivano: SVE PROŠLO.
- `node farkle/testovi/test-ekran.js http://localhost:8765 [folder-za-slike]` — prava aplikacija u Chromium-u na ekranu Pixel 7: posveta, podešavanja, cela partija protiv teškog kompjutera, nastavak posle osvežavanja, strane kockica, ruka pri bacanju, žetoni posle partije, prodavnica (kupi, stavi, poklon). Lokalno: folder sa simlinkom `Aplikacije` → koren repoa, pa `python3 -m http.server 8765` u njemu.

**Dogradnja:** deo 2 (igra preko interneta) — worker drži sto, kockice baca worker. Pravila i bodovanje ostaju u `engine.js`.
