# Škola — uputstvo

**Šta je:** aplikacija za samoobrazovanje: 14 oblasti × 5 lekcija (spisak u `KURIKULUM.md`), učenje sa pogađanjem, proverom, prisećanjem i ponavljanjem kartica.

**Adresa za telefon:** https://skola-app.andrija-radmilovic1990.workers.dev (worker `skola-app` prenosi `/Aplikacije/skola/` sa Pages). Proba bez prijave i sa lokalnom bazom: dodati `?proba`.

**Fajlovi:** `index.html` (aplikacija), `lekcije.js` (sav sadržaj + `RED`, redosled učenja), `manifest.json` (id/scope/start_url `/Aplikacije/skola/`), `sw.js`, `KURIKULUM.md` (spisak oblasti i lekcija), `testovi/`.

## Kako uči (ne menjati bez razloga)

- Lekcija: pogodi pre čitanja → delovi sa proverom odmah (odgovori izmešani) → prisećanje bez gledanja → ključne ideje → 2 pitanja za razgovor → 5 kartica u ponavljanje.
- Ponavljanje: kutije 0–5, razmaci 1, 3, 7, 21, 60, 120 dana; promašena kartica se vraća na kraj reda; prvo ponavljanje sutra.
- Početna: prvo ponavljanje, pa sledeća lekcija po `RED`.
- Izvori metoda: probni test pre učenja (Kornell, Hays i Bjork 2009), prisećanje i razmak (Dunlosky i dr. 2013; Roediger i Karpicke), uzastopno ponovno učenje (Rawson i Dunlosky).

## Baza (`skola/` u Budžet bazi)

| putanja | ko piše | šta |
|---|---|---|
| `skola/stanje` | aplikacija | gde je stao `{lekcija, korak}` |
| `skola/lekcije/<id>` | aplikacija | pogodak, provere, prisećanje, odgovori, `zavrseno` |
| `skola/kartice/<lekcija>_<i>` | aplikacija | `{kutija, sledece, poslednje, znao}` |
| `skola/dublje/<ts>` | aplikacija | „Hoću više o ovome" |
| `skola/primedbe/<ts>` | aplikacija | „Imam primedbu" `{lekcija, deo, tekst, datum}` |
| `skola/za_helenu` | aplikacija | sažetak za asistenta (~2.400 znakova), osvežava se sam |
| `skola/komentari/<id>` | asistent | `{datum, tekst}` — vidi se u aplikaciji |
| `skola_gost/<uid>/…` | aplikacija | svaki drugi nalog: svoj napredak, bez asistenta |

## Primedba ili nova lekcija

1. Pročitaj primedbe: `skola/primedbe` u bazi.
2. Izmena u `lekcije.js` (nova oblast dobija sledeći slobodan id da se ne pomeri napredak; mesto u redu priče se podesi u `RED`), pa u `KURIKULUM.md`.
3. Pravila sadržaja: samo osnove, sistematski (pojmovi, podela, redosled), tek onda rasprave; sporne teme sa više strana (svaka prvo kako je vidi pristalica). Lekcija: kuka, 4–5 delova sa proverom, 4–5 ključnih ideja, 5 kartica, 2 pitanja.
4. Testovi (iz korena repoa):
   - `node skola/testovi/struktura.mjs` → „struktura OK"
   - `python3 -m http.server 8766 &` pa `U=http://localhost:8766/skola/?proba PW=$(npm root -g)/playwright node skola/testovi/test-skola.js` → sve PROŠLO
   - gost: isto na 8767 sa `skola/testovi/test-gost.js`
5. Push na `main`; posle par minuta isti test uživo: `U='https://skola-app.andrija-radmilovic1990.workers.dev/?proba'`.
