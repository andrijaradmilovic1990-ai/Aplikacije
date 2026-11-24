// node farkle/testovi/test-online.js [osnova] [folder-za-slike] — igra preko interneta: dva telefona (Pixel 7) za istim stolom.
// Osnova mora da ima i sto (worker sa Durable Object-om): lokalno `wrangler dev` (vidi UPUTSTVO), živo https://farkle-app.andrija-radmilovic1990.workers.dev
const { chromium, devices } = require('playwright');
const OSNOVA = (process.argv[2] || 'http://localhost:8787') + '/Aplikacije/farkle/';
const SLIKE = process.argv[3] || null;
let prosli = 0, pali = 0;
const ok = (u, o) => { if (u) prosli++; else { pali++; console.log('PALO: ' + o); } };
const cekaj = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const b = await chromium.launch();
  const greske = [];
  async function telefon(ime, pol) {
    const ctx = await b.newContext({ ...devices['Pixel 7'] });
    const p = await ctx.newPage();
    p.on('pageerror', e => greske.push(ime + ': ' + e.message));
    p.on('console', m => { if (m.type() === 'error' && !/fonts\.g|ERR_|Failed to load resource/.test(m.text())) greske.push(ime + ': ' + m.text()); });
    await p.goto(OSNOVA);
    await p.waitForTimeout(700);
    if (await p.isVisible('#prozorRuka')) await p.click('#izborRukePrvi button >> nth=' + (pol === 'm' ? 1 : 0));
    await p.waitForTimeout(300);
    p.ime = ime; p.ctx = ctx;
    return p;
  }
  const slika = async (p, ime) => { if (SLIKE) await p.screenshot({ path: SLIKE + '/' + ime + '.png' }); };
  const A = await telefon('Andrija', 'm');
  const K = await telefon('Katarina', 'z');

  // Andrija: igra do 3.000 (kraća partija), pa pravi sto
  await A.click('text=Podešavanja');
  await A.click('#segBrzina [data-v=brza]');
  await A.click('[data-pravilo=cilj] [data-v="3000"]');
  await A.click('#podesNazad'); await A.waitForTimeout(400);
  ok(await A.isVisible('#dugmeOnline'), 'početna: dugme „Preko interneta"');
  await A.click('#dugmeOnline');
  await A.fill('#onlIme', 'Andrija');
  ok((await A.textContent('#onlPravila')).includes('do 3.000'), 'vide se pravila domaćina');
  await A.click('#onlNapravi');
  await A.waitForFunction(() => /^[A-Z]{4}$/.test(document.querySelector('#onlKodVeliki').textContent) && document.querySelectorAll('#onlIgraci .onl-igrac').length === 1, null, { timeout: 8000 });
  const KOD = await A.textContent('#onlKodVeliki');
  ok(/^[A-Z]{4}$/.test(KOD), 'sto napravljen, kod ' + KOD);
  ok(await A.isDisabled('#onlPocni'), 'sam za stolom: „Počni" zaključano');
  await slika(A, 'o1-sto-domacin');

  // Katarina: pogrešan kod pa pravi
  await K.click('#dugmeOnline');
  await K.fill('#onlIme', 'Katarina');
  await K.fill('#onlKod', 'QQQQ'); await K.click('#onlUdji');
  await K.waitForTimeout(1200);
  ok((await K.textContent('#tost')).includes('Nema stola') && await K.isVisible('#onlUlaz'), 'nepostojeći kod: poruka, ostaje na unosu');
  await K.fill('#onlKod', KOD.toLowerCase()); await K.click('#onlUdji');
  await K.waitForFunction(() => document.querySelectorAll('#onlIgraci .onl-igrac').length === 2, null, { timeout: 8000 });
  ok((await K.textContent('#onlStatus')).includes('Čeka se da Andrija'), 'Katarina čeka domaćina');
  ok(!(await K.isVisible('#onlPocni')), 'Katarina nema „Počni"');
  await A.waitForFunction(() => document.querySelectorAll('#onlIgraci .onl-igrac').length === 2, null, { timeout: 8000 });
  ok(await A.isEnabled('#onlPocni'), 'domaćin vidi Katarinu, „Počni" otključano');
  await slika(K, 'o2-sto-gost');

  await A.click('#onlPocni');
  await A.waitForFunction(() => window.__farkle.ekran() === 'igra', null, { timeout: 8000 });
  await K.waitForFunction(() => window.__farkle.ekran() === 'igra', null, { timeout: 8000 });
  ok(true, 'oba telefona u igri');

  const stanje = p => p.evaluate(() => { const g = window.__farkle.stanje(), o = window.__farkle.onl(); return g && { g, ja: o && o.ja, moj: g.igraci[g.naPotezu].ko === (o && o.ja), zauzet: window.__farkle.zauzet() }; });
  const isti = async () => { const a = await stanje(A), k = await stanje(K); return a && k && JSON.stringify(a.g) === JSON.stringify(k.g) && !a.zauzet && !k.zauzet; };
  const sacekajIsto = async () => { const t = Date.now(); while (Date.now() - t < 10000) { if (await isti()) return true; await cekaj(120); } return false; };

  let koraka = 0, izborUzivo = false, tudjaDugmad = false, autoDalje = false, farkli = 0, slikaBira = false, slikaTudji = false, rukaTudja = false, prekid = false;
  const t0 = Date.now();
  while (Date.now() - t0 < 360000) {
    if (!(await sacekajIsto())) { ok(false, 'telefoni se slažu (korak ' + koraka + ')'); break; }
    const sa = await stanje(A);
    if (sa.g.kraj) break;
    const ja = sa.moj ? A : K, on = sa.moj ? K : A;
    const t = sa.g.potez;
    koraka++;
    if (!tudjaDugmad) {
      tudjaDugmad = (await on.isDisabled('#dugmeBaci')) && (await on.textContent('#dugmeBaci')).includes(ja.ime) && (await on.isDisabled('#dugmeUpisi'));
      if (!tudjaDugmad) ok(false, 'onaj ko nije na potezu: zaključana dugmad sa imenom (' + await on.textContent('#dugmeBaci') + ')');
    }
    // prekid veze usred partije: Katarina osveži stranicu (kao da je zatvorila aplikaciju) i vrati se
    if (!prekid && koraka === 6) {
      prekid = true;
      await K.reload(); await K.waitForTimeout(900);
      await A.waitForFunction(() => document.querySelector('#rezultati').textContent.includes('nije povezan'), null, { timeout: 8000 }).then(() => ok(true, 'domaćin vidi da Katarina nije povezana'), () => ok(false, 'domaćin vidi da Katarina nije povezana'));
      ok(await K.isVisible('#dugmeNazadSto') && (await K.textContent('#dugmeNazadSto')).includes(KOD), 'posle osvežavanja: „Nazad za sto ' + KOD + '"');
      await K.click('#dugmeNazadSto');
      await K.waitForFunction(() => window.__farkle.ekran() === 'igra', null, { timeout: 8000 }).then(() => ok(true, 'Katarina se vratila u istu partiju'), () => ok(false, 'Katarina se vratila u istu partiju'));
      await A.waitForFunction(() => !document.querySelector('#rezultati').textContent.includes('nije povezan'), null, { timeout: 8000 }).then(() => ok(true, 'domaćin vidi da je ponovo tu'), () => ok(false, 'domaćin vidi da je ponovo tu'));
      continue;
    }
    if (t.faza === 'baci') { await ja.click('#dugmeBaci'); await cekaj(300);
      if (!rukaTudja && ja === K) { rukaTudja = await A.evaluate(() => document.querySelector('#rukaScena').classList.contains('gore')); if (rukaTudja) await slika(A, 'o4-njena-ruka-baca'); }
      await cekaj(900); continue; }
    if (t.faza === 'farkle') {
      farkli++;
      if (!autoDalje && ja === K) {
        // Katarina ne pritisne „Dalje": Andrijin telefon posle 5 s sam pomeri partiju
        const pre = sa.g.dnevnik.length;
        await cekaj(6500);
        autoDalje = (await stanje(A)).g.dnevnik.length === pre + 1;
        ok(autoDalje, 'posle farkla koji se ne potvrdi, drugi telefon sam nastavi posle 5 s');
        continue;
      }
      await ja.click('#dugmeBaci'); await cekaj(300); continue;
    }
    // bira: uzmi kao srednji kompjuter, dodirima
    const o = await ja.evaluate(() => window.Farkle.odlukaKompjutera(window.__farkle.stanje(), 'srednji'));
    for (const i of o.indeksi) await ja.click('#polje .kocka >> nth=' + i, { force: true });
    if (!izborUzivo) {
      await cekaj(500);
      const kodNjega = await on.$$eval('#polje .kocka.izabrana', e => e.length);
      izborUzivo = kodNjega === o.indeksi.length;
      if (!slikaTudji) { await slika(on, 'o5-vidi-njen-izbor'); slikaTudji = true; }
    }
    if (!slikaBira) { await slika(ja, 'o3-moj-izbor'); slikaBira = true; }
    if (o.akcija === 'upisi' && await ja.isEnabled('#dugmeUpisi')) await ja.click('#dugmeUpisi');
    else await ja.click('#dugmeBaci');
    await cekaj(400);
  }
  ok(izborUzivo, 'izabrane kockice se vide i na drugom telefonu');
  ok(tudjaDugmad, 'dugmad zaključana onome ko nije na potezu');
  ok(rukaTudja, 'kad ona baca, na njegovom telefonu izađe ruka');
  const kasaPre = { A: await A.evaluate(() => window.__farkle.kasa().zetoni), K: await K.evaluate(() => window.__farkle.kasa().zetoni) };
  await A.waitForSelector('#prozorKraj.vidljiv', { timeout: 15000 }).catch(() => {});
  await K.waitForSelector('#prozorKraj.vidljiv', { timeout: 15000 }).catch(() => {});
  ok(await A.isVisible('#prozorKraj') && await K.isVisible('#prozorKraj'), `kraj partije na oba telefona (${koraka} koraka, ${farkli} farkla)`);
  const g = (await stanje(A)).g;
  const pobA = g.igraci[g.kraj.pobednik].ko === 0;
  const tA = await A.textContent('#krajPobednik'), tK = await K.textContent('#krajPobednik');
  ok(pobA ? (tA === 'Pobeda!' && tK === 'Andrija pobeđuje!') : (tK === 'Pobeda!' && tA === 'Katarina pobeđuje!'), 'naslovi kraja: ' + tA + ' / ' + tK);
  await slika(pobA ? A : K, 'o6-pobeda');
  const zA = await A.evaluate(() => window.__farkle.kasa().zetoni), zK = await K.evaluate(() => window.__farkle.kasa().zetoni);
  // pobeda 50, poraz 15, + 20 za prvu partiju u danu
  ok(zA - 100 === (pobA ? 70 : 35) && zK - 100 === (pobA ? 35 : 70), 'žetoni: pobeda 50 / poraz 15 (+20 prvi put danas): ' + zA + ' / ' + zK);
  ok(await A.evaluate(() => !localStorage.getItem('farkle_partija_v1')), 'online partija ne pravi lokalnu „Nastavi partiju"');

  // revanš: Katarina traži, oboje u novoj partiji, isplata se ne ponavlja
  await K.click('#krajRevans');
  await A.waitForFunction(() => { const g = window.__farkle.stanje(); return g && g.br === 2 && !g.kraj; }, null, { timeout: 8000 }).then(() => ok(true, 'revanš stigao domaćinu'), () => ok(false, 'revanš stigao domaćinu'));
  await cekaj(800);
  ok(!(await A.isVisible('#prozorKraj')) && !(await K.isVisible('#prozorKraj')), 'prozor kraja zatvoren na oba');
  const g2 = (await stanje(A)).g;
  ok(g2.igraci[0].ko !== g.igraci[0].ko, 'u revanšu počinje drugi');
  ok(await A.evaluate(() => window.__farkle.kasa().zetoni) === zA, 'revanš ne isplaćuje ponovo');

  // izlazak: Andrija ide na početnu, Katarina vidi da nije povezan
  await A.click('#igraNazad'); await A.waitForTimeout(500);
  ok(await A.isVisible('#pocetna') && await A.isVisible('#dugmeNazadSto'), 'iz partije na početnu: dugme „Nazad za sto"');
  await A.click('#dugmeNazadSto');
  await A.waitForFunction(() => window.__farkle.ekran() === 'igra', null, { timeout: 8000 }).then(() => ok(true, 'nazad za sto: ista partija'), () => ok(false, 'nazad za sto: ista partija'));

  ok(greske.length === 0, 'bez JS grešaka' + (greske.length ? ': ' + greske.slice(0, 3).join(' | ') : ''));
  await b.close();
  console.log(pali ? `PALO ${pali} — prošlo ${prosli}` : `SVE PROŠLO — prošlo ${prosli}`);
  process.exit(pali ? 1 : 0);
})().catch(e => { console.log('PUKLO', e); process.exit(1); });
