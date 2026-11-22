// node farkle/testovi/test-ekran.js [osnova] [folder-za-slike] — prava aplikacija u Chromium-u (Playwright), ekran telefona.
// Osnova: adresa na kojoj se vidi /Aplikacije/farkle/ (lokalno: koren sa simlinkom Aplikacije -> repo, pa python3 -m http.server 8765).
const { chromium, devices } = require('playwright');
const OSNOVA = (process.argv[2] || 'http://localhost:8765') + '/Aplikacije/farkle/';
const SLIKE = process.argv[3] || null;
let prosli = 0, pali = 0;
const ok = (u, o) => { if (u) prosli++; else { pali++; console.log('PALO: ' + o); } };

(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ ...devices['Pixel 7'] });
  const p = await ctx.newPage();
  const greske = [];
  p.on('pageerror', e => greske.push(e.message));
  p.on('console', m => { if (m.type() === 'error' && !/fonts\.g|ERR_|Failed to load resource/.test(m.text())) greske.push(m.text()); });
  const slika = async ime => { if (SLIKE) await p.screenshot({ path: SLIKE + '/' + ime + '.png' }); };

  // posveta iz linka
  const posveta = 'Za tebe, da ti kockice idu.';
  const b64 = Buffer.from(posveta, 'utf8').toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  await p.goto(OSNOVA + '#posveta=' + b64);
  await p.waitForTimeout(800);
  ok((await p.textContent('#posvetaTekst')) === posveta, 'posveta iz linka prikazana');
  ok(!(await p.evaluate(() => location.hash)), 'posveta skinuta iz adrese');
  await slika('1-pocetna');

  // podešavanja: brzo, do 3000, bez ulaza
  await p.click('text=Podešavanja');
  await p.click('#segBrzina [data-v=brza]');
  await p.click('[data-pravilo=cilj] [data-v="3000"]');
  await p.click('[data-pravilo=ulaz] [data-v="0"]');
  ok(await p.evaluate(() => document.querySelector('[data-pravilo=minUpis] .izabran').dataset.v) === '300', 'podrazumevano: upis od 300');
  await slika('2-podesavanja');
  await p.click('#podesNazad');
  await p.waitForTimeout(400);
  ok(await p.isVisible('#pocetna'), 'nazad na početnu');

  await p.click('text=Pravila i bodovi');
  ok((await p.$$('#tabelaBodova tr')).length >= 10, 'tabela bodova');
  await slika('3-pravila');
  await p.click('#pravilaNazad'); await p.waitForTimeout(400);

  // cela partija protiv teškog kompjutera; „čovek" igra preko pravih dodira
  await p.click('#dugmeKompjuter');
  await p.fill('#imeTi', 'Igračica');
  await p.click('#segNivo [data-v=tezak]');
  await p.click('#segPrvi [data-v=ja]');
  await p.click('#dugmePocni');
  await p.waitForTimeout(500);
  ok(await p.isVisible('#igra'), 'ekran igre');
  await slika('4-igra-start');
  let snimljenoBira = false, snimljenFarkle = false, koraka = 0;
  const t0 = Date.now();
  while (Date.now() - t0 < 300000) {
    if (await p.isVisible('#prozorKraj')) break;
    const st = await p.evaluate(() => { const g = window.__farkle.stanje(); return g && { faza: g.potez.faza, bot: g.igraci[g.naPotezu].tip === 'bot', kraj: !!g.kraj }; });
    if (!st || st.kraj || st.bot || await p.evaluate(() => window.__farkle.zauzet())) { await p.waitForTimeout(250); continue; }
    const baciOn = await p.isEnabled('#dugmeBaci');
    if (st.faza === 'baci' && baciOn) { await p.click('#dugmeBaci'); await p.waitForTimeout(1500); koraka++; continue; }
    if (st.faza === 'farkle' && baciOn) { if (!snimljenFarkle) { await slika('6-farkle'); snimljenFarkle = true; } await p.click('#dugmeBaci'); await p.waitForTimeout(300); continue; }
    if (st.faza === 'bira' && !(await p.evaluate(() => document.querySelector('#dugmeBaci').innerHTML.includes('Kompjuter')))) {
      const o = await p.evaluate(() => window.Farkle.odlukaKompjutera(window.__farkle.stanje(), 'srednji'));
      for (const i of o.indeksi) await p.click('#polje .kocka >> nth=' + i, { force: true });
      const izabrano = await p.$$eval('#polje .kocka.izabrana', e => e.length);
      ok(izabrano === o.indeksi.length, 'dodir izabrao ' + izabrano + ' od ' + o.indeksi.length + ' kockica');
      if (izabrano !== o.indeksi.length) console.log('  DIJAG', JSON.stringify(o), await p.evaluate(() => JSON.stringify({ g: window.__farkle.stanje().potez, n: document.querySelectorAll('#polje .kocka').length, izabrane: [...document.querySelectorAll('#polje .kocka')].map((k, i) => k.classList.contains('izabrana') ? i : -1).filter(i => i >= 0), boxes: [...document.querySelectorAll('#polje .kocka')].map(k => { const r = k.getBoundingClientRect(); return [Math.round(r.x), Math.round(r.y), Math.round(r.width)]; }) })));
      if (!snimljenoBira) { await p.waitForTimeout(300); await slika('5-izbor'); snimljenoBira = true; }
      const dug = o.akcija === 'upisi' && await p.isEnabled('#dugmeUpisi') ? '#dugmeUpisi' : '#dugmeBaci';
      await p.click(dug); await p.waitForTimeout(dug === '#dugmeBaci' ? 1500 : 600); koraka++;
      continue;
    }
    await p.waitForTimeout(250);
  }
  ok(await p.isVisible('#prozorKraj'), 'partija protiv kompjutera završena (' + koraka + ' poteza čoveka)');
  await p.waitForTimeout(900);
  await slika('7-kraj');
  const g = await p.evaluate(() => window.__farkle.stanje());
  ok(g.kraj && g.igraci.some(x => x.poeni >= 3000), 'neko je prešao 3000');
  const zbir = [0, 0]; g.dnevnik.forEach(d => zbir[d.igrac] += d.poeni);
  ok(zbir[0] === g.igraci[0].poeni && zbir[1] === g.igraci[1].poeni, 'dnevnik se slaže sa poenima');
  await p.click('#krajPocetna'); await p.waitForTimeout(500);
  ok((await p.textContent('#statistika')).includes('Protiv kompjutera'), 'statistika upisana');

  // čuvanje: partija na istom telefonu, baci, osveži stranu, nastavi
  await p.click('#dugmeLokalno');
  await p.click('#dugmePocni'); await p.waitForTimeout(400);
  await p.click('#dugmeBaci'); await p.waitForTimeout(1600);
  const pre = await p.evaluate(() => JSON.stringify(window.__farkle.stanje().potez));
  await p.reload(); await p.waitForTimeout(800);
  ok(await p.isVisible('#dugmeNastavi'), 'posle osvežavanja: Nastavi partiju');
  await p.click('#dugmeNastavi'); await p.waitForTimeout(500);
  const posle = await p.evaluate(() => JSON.stringify(window.__farkle.stanje().potez));
  ok(pre === posle, 'partija nastavljena tačno gde je stala');

  // upis od 300: sa 150 u potezu „Upiši" je zaključano i piše zašto
  await p.evaluate(() => { const g = window.__farkle.stanje(); g.pravila.minUpis = 300; g.potez = { faza: 'bira', bacanje: [5, 2, 3, 4, 6, 2], sacuvano: [[1]], poeni: 100, slobodnih: 6, vruce: false }; window.__farkle.postavi(g); });
  await p.click('#polje .kocka >> nth=0', { force: true }); await p.waitForTimeout(200);
  ok(!(await p.isEnabled('#dugmeUpisi')), '150 u potezu: Upiši zaključano');
  ok(/300/.test(await p.textContent('#savet')), 'savet kaže da treba 300');
  ok(await p.isEnabled('#dugmeBaci'), 'bacanje dalje dozvoljeno');
  await p.evaluate(() => { const g = window.__farkle.stanje(); g.potez = { faza: 'bira', bacanje: [1, 1, 3, 4, 6, 2], sacuvano: [[1]], poeni: 100, slobodnih: 6, vruce: false }; window.__farkle.postavi(g); });
  await p.click('#polje .kocka >> nth=0', { force: true }); await p.click('#polje .kocka >> nth=1', { force: true }); await p.waitForTimeout(200);
  ok(await p.isEnabled('#dugmeUpisi'), '300 u potezu: Upiši otključano');

  // kockice pokazuju pravu stranu: poznato bacanje 1..6
  await p.evaluate(() => { const g = window.__farkle.stanje(); g.potez = { faza: 'bira', bacanje: [1, 2, 3, 4, 5, 6], sacuvano: [[5], [1, 1, 1]], poeni: 1050, slobodnih: 6, vruce: false }; window.__farkle.postavi(g); });
  await p.waitForTimeout(500);
  await slika('8-strane-1-do-6');
  await p.evaluate(() => document.documentElement.setAttribute('data-tema', 'svetla'));
  await p.waitForTimeout(300);
  await slika('9-svetla');

  // stara podešavanja (ulaz 500) prelaze na novo pravilo
  await p.evaluate(() => { localStorage.setItem('farkle_podesavanja_v1', JSON.stringify({ pravila: { ulaz: 500, cilj: 10000 } })); });
  await p.reload(); await p.waitForTimeout(700);
  const pr = await p.evaluate(() => JSON.parse(localStorage.getItem('farkle_podesavanja_v1')).pravila);
  ok(pr.ulaz === 0 && pr.minUpis === 300 && pr.triPara === 750, 'stara podešavanja prevedena: ulaz ' + pr.ulaz + ', upis od ' + pr.minUpis);

  ok(greske.length === 0, 'bez grešaka u konzoli: ' + greske.join(' | '));
  await b.close();
  console.log((pali ? 'PALO ' + pali : 'SVE PROŠLO') + ' — prošlo ' + prosli);
  process.exit(pali ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
