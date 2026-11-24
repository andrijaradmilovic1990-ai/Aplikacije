# Farkle — uputstvo

**Šta je:** igra kockicama farkle za telefon. Igra se protiv kompjutera (lak, srednji, težak), 2–4 igrača na istom telefonu, ili preko interneta (2–4 telefona za istim stolom, uživo). Pravila se mogu podesiti: cilj, najmanje za upis u svakom potezu (podrazumevano 300 — Andrijino pravilo), ulaz za prvi upis, četiri/pet/šest istih (fiksno ili dupliranje), tri para, mala kenta, kazna za tri farkla i poslednja šansa. Ima zvuk, vibraciju, tamnu i svetlu temu, statistiku i posvetu na početnom ekranu. Radi i bez interneta.

**Adresa za telefon:** https://farkle-app.andrija-radmilovic1990.workers.dev — worker `farkle-app` prenosi `/Aplikacije/farkle/` sa Pages. Na github.io stranica preusmerava na tu adresu (osim sa `?proba`).

**Posveta:** ne stoji u repou. Link `<adresa>/Aplikacije/farkle/#posveta=<base64url teksta>` je upiše u telefon pri prvom otvaranju, a posle se skine iz adrese. Može da se menja i u Podešavanjima.

**Ruka i prodavnica (od 22.11.2026):** pri bacanju se pojavi ruka (ženska ili muška, 4 boje kože) koja protrese i baci kockice; isključuje se u Podešavanjima. Žetoni (🪙) se dobijaju za partije: pobeda protiv kompjutera 25/50/100 (lak/srednji/težak), poraz 10, partija na istom telefonu 15, prva partija u danu +20; na startu 100. U Prodavnici se kupuju nokti (samo ženska ruka), prstenje, narukvice i satovi, tetovaže; ukras se prvo proba na ruci pa kupi. Poklon ukrasi (nokti „Srce", „Poklon narukvica") ne prodaju se: otključava ih link sa posvetom ili `#poklon`.

**Fotografije ruku (od 22.11.2026):** muška ruka je fotografija (otvorena + pesnica; generisana u ChatGPT-u na zelenoj pozadini #00B140, pa izrezana po zelenoj boji). Slike NISU u ovom repou (`farkle/ruke/` je u `.gitignore`): služi ih worker `farkle-app` na putanji `/Aplikacije/farkle/ruke/*.webp` (kod sa ugrađenim slikama je u privatnom repou helena-sistem, `primena/workeri/farkle-app.js`). Opis u `index.html` → `FOTO` (veličina, koliko viri, sidra za prsten/sat/tetovažu u pikselima slike). Ruka bez fotografije (za sada ženska) ostaje nacrtana (`ruka.js`). Lokalna proba: slike ručno u `farkle/ruke/`.

**Ukrasi na fotografskoj ruci (od 22.11.2026):** ne crtaju se, nego su slojevi slike. Postupak: u ChatGPT se ubaci slika ruke iz igre (zelena pozadina) uz tekst „Use this exact image. Add … Keep everything else identical …“; nova slika se poravna sa starom (OpenCV ORB + afino), razlika + boja metala daju masku ukrasa, zelena se skida, sloj se smanji na veličinu slike ruke. Sloj ide u worker (`ruke/m-<ukras>-o.webp`, `-p.webp`), a u `index.html` → `FOTO.<pol>.slojevi['<id ukrasa>']` = {src, x, y, w, h} u pikselima slike ruke. Na fotografskoj ruci prodavnica prikazuje samo ukrase koji imaju sloj (`ukrasPostoji`).

**Preko interneta (od 24.11.2026):** jedan napravi sto (kod od 4 slova, igra se po NJEGOVIM pravilima), drugi upiše kod ili otvori link `<adresa>/Aplikacije/farkle/#sto=ABCD`. Domaćin pokreće partiju kad svi sednu. Sto drži worker `farkle-app`: Durable Object `Sto` (binding `STO`), WebSocket na `/Aplikacije/farkle/sto/<KOD>`. **Kockice baca samo sto**; telefon šalje nameru (`baci`, `upisi`, `dalje`, `izbor` — izabrane kockice se vide drugima uživo), a sto proverava potez istim `engine.js` i svima šalje stanje. Kad veza pukne, telefon se sam vraća na isto mesto (id u `farkle_id`); na početnoj stoji „Nazad za sto ABCD" (12 h). Posle farkla koji niko ne potvrdi, sto sam ide dalje posle 6 s (alarm Durable Object-a). Revanš: počinje sledeći za stolom. Žetoni: pobeda 50, poraz 15 (+20 prva partija u danu). Sto bez poteza 12 h — kod se oslobađa; posle 48 h se briše.
**Važno:** worker nosi svoju kopiju `engine.js` (ugrađuje se pri gradnji, alat u privatnom repou helena-sistem). Izmena pravila u `engine.js` = ponovo izgraditi i poslati worker, inače sto i telefon broje različito.

**Podaci:** samo u telefonu (`localStorage`): `farkle_partija_v1` (partija u toku, nastavlja se posle zatvaranja), `farkle_podesavanja_v1`, `farkle_stat_v1`, `farkle_kasa_v1` (žetoni, kupljeno, šta se nosi, ruka). Nema baze.

**Fajlovi:**
- `engine.js` — pravila, bodovanje, tok partije, kompjuter. Bez DOM-a; isti fajl koriste aplikacija i testovi.
- `ruka.js` — crtež ruke (SVG) i katalog ukrasa (`PREDMETI`, cene, nagrade). Nov ukras = red u `PREDMETI` (+ crtež u `nokat`/`prsten`/`zglob`/`tetovaza` ako je nova vrsta).
- `index.html` — izgled i ponašanje (3D kockice, zvuk iz WebAudio, bez spoljnih biblioteka).
- `manifest.json`, `sw.js` (keš; kod izmene podići `CACHE`), ikone.

**Testovi:**
- `node farkle/testovi/test-engine.js` — bodovanje (oba načina), tačne verovatnoće farkla (iscrpno), tok partije, upis od 300, ulaz, vruće kockice, poslednja šansa, kazna, kompjuter (160 celih partija). Očekivano: SVE PROŠLO.
- `node farkle/testovi/test-online.js <osnova>` — dva telefona za istim stolom: pravljenje stola, pogrešan kod, ulazak, početak, cela partija dodirima, izbor uživo kod drugog, njena ruka na njegovom ekranu, osvežavanje usred partije i povratak, „dalje" posle 6 s (sto sam), kraj, žetoni, revanš, „Nazad za sto". Lokalno: `wrangler dev` sa `IZVOR=http://localhost:8765` i Durable Object-om `Sto` (worker iz helena-sistem), pa osnova `http://localhost:8787`.
- `node farkle/testovi/test-ekran.js http://localhost:8765 [folder-za-slike]` — prava aplikacija u Chromium-u na ekranu Pixel 7: posveta, podešavanja, cela partija protiv teškog kompjutera, nastavak posle osvežavanja, strane kockica, ruka pri bacanju, žetoni posle partije, prodavnica (kupi, stavi, poklon). Lokalno: folder sa simlinkom `Aplikacije` → koren repoa, pa `python3 -m http.server 8765` u njemu.

**Dogradnja:** deo 2 (igra preko interneta) — worker drži sto, kockice baca worker. Pravila i bodovanje ostaju u `engine.js`.
