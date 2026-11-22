# Farkle — uputstvo

**Šta je:** igra kockicama farkle za telefon. Igra se protiv kompjutera (lak, srednji, težak) ili 2–4 igrača na istom telefonu. Pravila se mogu podesiti: cilj, ulaz, četiri/pet/šest istih (fiksno ili dupliranje), tri para, mala kenta, kazna za tri farkla i poslednja šansa. Ima zvuk, vibraciju, tamnu i svetlu temu, statistiku i posvetu na početnom ekranu. Radi i bez interneta.

**Adresa za telefon:** https://farkle-app.andrija-radmilovic1990.workers.dev — worker `farkle-app` prenosi `/Aplikacije/farkle/` sa Pages. Na github.io stranica preusmerava na tu adresu (osim sa `?proba`).

**Posveta:** ne stoji u repou. Link `<adresa>/Aplikacije/farkle/#posveta=<base64url teksta>` je upiše u telefon pri prvom otvaranju, a posle se skine iz adrese. Može da se menja i u Podešavanjima.

**Podaci:** samo u telefonu (`localStorage`): `farkle_partija_v1` (partija u toku, nastavlja se posle zatvaranja), `farkle_podesavanja_v1`, `farkle_stat_v1`. Nema baze.

**Fajlovi:**
- `engine.js` — pravila, bodovanje, tok partije, kompjuter. Bez DOM-a; isti fajl koriste aplikacija i testovi.
- `index.html` — izgled i ponašanje (3D kockice, zvuk iz WebAudio, bez spoljnih biblioteka).
- `manifest.json`, `sw.js` (keš; kod izmene podići `CACHE`), ikone.

**Testovi:**
- `node farkle/testovi/test-engine.js` — bodovanje (oba načina), tačne verovatnoće farkla (iscrpno), tok partije, ulaz, vruće kockice, poslednja šansa, kazna, kompjuter (160 celih partija). Očekivano: SVE PROŠLO.
- `node farkle/testovi/test-ekran.js http://localhost:8765 [folder-za-slike]` — prava aplikacija u Chromium-u na ekranu Pixel 7: posveta, podešavanja, cela partija protiv teškog kompjutera, nastavak posle osvežavanja, strane kockica. Lokalno: folder sa simlinkom `Aplikacije` → koren repoa, pa `python3 -m http.server 8765` u njemu.

**Dogradnja:** deo 2 (igra preko interneta) — worker drži sto, kockice baca worker. Pravila i bodovanje ostaju u `engine.js`.
