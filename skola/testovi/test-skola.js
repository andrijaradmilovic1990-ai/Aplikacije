const {chromium}=require(process.env.PW);
// Pokretanje (iz korena repoa Aplikacije): python3 -m http.server 8766 & pa U=http://localhost:8766/skola/?proba PW=$(npm root -g)/playwright node skola/testovi/test-skola.js
const U=process.env.U||'http://localhost:8766/skola/?proba';
(async()=>{
const b=await chromium.launch();const p=await b.newPage({viewport:{width:375,height:740}});
const err=[];p.on('pageerror',e=>err.push(e.message));
let ok_=0,pal=0;const ok=(n,c)=>{c?ok_++:pal++;console.log((c?'PROŠLO ':'PALO   ')+n)};
const db=()=>p.evaluate(()=>JSON.parse(localStorage.getItem('skola-proba')||'{}'));
await p.goto(U);await p.evaluate(()=>localStorage.clear());await p.goto(U);await p.waitForSelector('#btn-nastavi');
// spisak lekcija čita se iz samog sajta (lokalno ili uživo): napisane po redu priče, i prva nenapisana
const SP=await p.evaluate(async()=>{const m=await import(new URL('lekcije.js',location.href).href);const sve=m.OBLASTI.flatMap(o=>o.lekcije);
 const nap=new Set(sve.filter(l=>l.delovi).map(l=>l.id));return {obl:m.OBLASTI.length,uk:sve.length,red:m.RED.filter(id=>nap.has(id)),nenap:m.RED.filter(id=>!nap.has(id)),kart:sve.filter(l=>l.delovi).reduce((s,l)=>s+l.kartice.length,0)}});
console.log(`sajt: napisano ${SP.red.length}, piše se ${SP.nenap.length}, kartica ${SP.kart}`);
ok('početna: prva lekcija je Veliki prasak', (await p.textContent('#btn-nastavi').then(()=>p.content())).includes('Veliki prasak'));
ok(`mapa: ${SP.obl} oblasti`, (await p.$$('.obl')).length===SP.obl);
ok('nema ponavljanja na startu', !(await p.$('#btn-pon')));
await p.click('#btn-nastavi');
await p.screenshot({path:'/tmp/skola-snimak.png'});ok('kuka: Dalje zaključano dok ne pogodiš', await p.isDisabled('#dalje'));
await p.click('.opc[data-i="0"]');
ok('kuka: posle izbora Dalje radi', !(await p.isDisabled('#dalje')));
ok('baza: pogodak upisan', (await db()).lekcije['1-1'].pogodak===0);
await p.click('#dalje');
ok('deo 1 prikazan', (await p.textContent('.dn')).includes('Svemir ima početak'));
await p.click('#dublje');await p.waitForTimeout(50);
p.once('dialog',d=>d.accept('Fali slika svemira'));await p.click('#primedba');await p.waitForTimeout(100);
ok('primedba zapisana', Object.values((await db()).primedbe||{})[0]?.tekst==='Fali slika svemira');
await p.click('#dalje');
await p.screenshot({path:'/tmp/skola-snimak.png'});ok('provera posle dela', (await p.textContent('.pitanje')).includes('Veliki prasak'));
await p.click('.opc[data-i="0"]');
await p.screenshot({path:'/tmp/skola-snimak.png'});ok('pogrešan odgovor: crveno + tačno zeleno + zašto', (await p.$('.opc.netacno'))&&(await p.$('.opc.tacno'))&&(await p.textContent('.zasto')).includes('Nije'));
ok('baza: provera upisana netačno', (await db()).lekcije['1-1'].provere[0].tacno===false);
await p.click('#dalje');
// prekid na pola — reload
await p.reload();await p.waitForSelector('#btn-nastavi');
ok('reload: Nastavi', (await p.textContent('#btn-nastavi'))==='Nastavi');
await p.click('#btn-nastavi');
ok('vraća na isti korak (deo 2)', (await p.textContent('.dn')).includes('tri dokaza'));
// prođi ostale delove tačno
for(let i=0;i<20;i++){
 if(await p.$('.dn')){await p.click('#dalje');continue}
 if(await p.$('.opc')&&(await p.content()).includes('Brza provera')){
   if(await p.$('.opc:not([disabled])'))await p.click('.opc[data-i="2"]');await p.click('#dalje');continue}
 break;
}
ok('stigao do prisećanja', (await p.content()).includes('Bez gledanja u tekst'));
await p.click('#dalje');
ok('prisećanje: ne pušta prazno', (await p.textContent('#por')).includes('bar nešto'));
await p.fill('#sec','Svemir je star 13,8 milijardi godina, širi se prostor, galaksije beže.');
await p.click('#dalje');
ok('ključne ideje prikazane (5)', (await p.$$('.kljuc')).length===5);
await p.click('.kljuc[data-i="0"]');await p.click('.kljuc[data-i="1"]');
ok('baza: označene 2 ideje', Object.values((await db()).lekcije['1-1'].imao).filter(Boolean).length===2);
await p.click('#dalje');
ok('razgovor: 2 pitanja', (await p.$$('textarea')).length===2);
await p.fill('textarea[data-i="0"]','Prostor se rasteže kao testo.');
await p.click('#dalje');
ok('razgovor: traži oba odgovora', (await p.textContent('#por')).includes('oba'));
await p.fill('textarea[data-i="1"]','Lakše, jer sve ima početak.');
await p.click('#dalje');await p.waitForSelector('#btn-helena');
ok('pregled: lekcija pređena + dugme Helena', (await p.content()).includes('Lekcija pređena'));
let d=await db();
ok('baza: završeno + odgovori + sećanje', !!d.lekcije['1-1'].zavrseno&&d.lekcije['1-1'].odgovori[1].includes('Lakše')&&d.lekcije['1-1'].secanje.includes('13,8'));
ok('baza: 5 kartica, kutija 0, sutra', Object.keys(d.kartice).length===5&&Object.values(d.kartice).every(k=>k.kutija===0));
ok('baza: stanje → 1-2', d.stanje.lekcija==='1-2');
ok('baza: dublje zapisano', Object.values(d.dublje)[0].lekcija==='1-1');
ok('pregled: provere 3/5 iz prve (prva i treća pogrešne)', (await p.content()).includes('Brze provere: 3/5'));await p.screenshot({path:'/tmp/skola-snimak.png',fullPage:true});
// dugme Helena: klipbord + novi tab
const [pop]=await Promise.all([p.waitForEvent('popup').catch(()=>null),p.click('#btn-helena')]);
ok('Helena: otvara claude.ai/new?q=… sa lekcijom', pop&&decodeURIComponent(pop.url()).includes('1-1'));
if(pop)await pop.close();
ok('baza: helena/poziv upisan', (await db()).helena.poziv.lekcija==='1-1');
{const zh=(await db()).za_helenu;
ok('za_helenu: uputstvo + poslednja 1-1', zh&&zh.uputstvo.includes('UPUTSTVO ZA HELENU')&&zh.poslednja.id==='1-1');
ok('za_helenu: sećanje, imao 2 / propustio 3, pitanja sa odgovorima', zh.poslednja.secanje.includes('13,8')&&zh.poslednja.imao.length===2&&zh.poslednja.propustio.length===3&&zh.poslednja.pitanja[1].odgovor.includes('Lakše'));
ok(`za_helenu: provere 3/5, pogrešio 2 pitanja, pređeno 1/${SP.uk}, sledeća 1-2`, zh.poslednja.provere_iz_prve==='3/5'&&zh.poslednja.pogresio.length===2&&zh.predjeno===`1/${SP.uk}`&&zh.sledeca.includes('Zvezde'));
ok('za_helenu: dublje 1', zh.dublje.length===1);
ok('za_helenu: mali (< 4000 znakova)', JSON.stringify(zh).length<4000);
console.log('   za_helenu znakova:',JSON.stringify(zh).length);}
// ponavljanje: pomeri kartice na danas
await p.evaluate(()=>{const d=JSON.parse(localStorage.getItem('skola-proba'));Object.values(d.kartice).forEach(k=>k.sledece='2000-01-01');localStorage.setItem('skola-proba',JSON.stringify(d))});
await p.goto(U);await p.waitForSelector('#btn-pon');
ok('početna: ponavljanje 5 kartica prvo', (await p.textContent('.card.istaknuto')).includes('5'));
await p.click('#btn-pon');
await p.click('#okreni');await p.click('#ne');   // prva: nisam
for(let i=0;i<4;i++){await p.click('#okreni');await p.click('#da')}
ok('promašena kartica se vraća na kraj', (await p.$('#okreni'))!==null);
await p.click('#okreni');await p.click('#da');
ok('gotovo za danas', (await p.content()).includes('Gotovo za danas'));
d=await db();const k=Object.values(d.kartice);
ok('kutije: 4 kartice u kutiji 1 (+3 dana), 1 u kutiji 0 (sutra)', k.filter(x=>x.kutija===1).length===4&&k.filter(x=>x.kutija===0).length===1);
// Helenin komentar se vidi
await p.evaluate(()=>{const d=JSON.parse(localStorage.getItem('skola-proba'));d.komentari={'1-1':{datum:'2026-10-09 18:00',tekst:'Testo sa grožđem — tačno tako.'}};localStorage.setItem('skola-proba',JSON.stringify(d))});
await p.goto(U);await p.waitForSelector('.obl');await p.click('.obl[data-o="1"]');
ok('oblast: 1-1 ✅ + 💬 Helena, 1-2 otvorena', (await p.textContent('.les[data-id="1-1"]')).includes('Helena'));
await p.click('.les[data-id="1-1"]');
ok('pregled: Helenin komentar', (await p.content()).includes('grožđem'));
// nenapisana oblast (dok god neka postoji)
if(SP.nenap.length){const nid=SP.nenap[0];
await p.goto(U);await p.click(`.obl[data-o="${nid.split('-')[0]}"]`);
ok(`oblast ${nid.split('-')[0]}: ${nid} „piše se", ne otvara se`, (await p.textContent(`.les[data-id="${nid}"]`)).includes('piše se'));
await p.click(`.les[data-id="${nid}"]`);ok('klik na nenapisanu ne radi ništa', (await p.$(`.les[data-id="${nid}"]`))!==null);}
else ok('nema nenapisanih lekcija', true);
// metod
await p.goto(U);await p.click('#btn-metod');ok('ekran metod', (await p.content()).includes('Ponavljanje sa razmakom'));
// sve napisane lekcije prolaze do kraja
const ids=SP.red.filter(id=>id!=='1-1');
for(const id of ids){
 await p.goto(U);await p.waitForSelector('.obl');await p.click(`.obl[data-o="${id.split('-')[0]}"]`);await p.click(`.les[data-id="${id}"]`);
 await p.click('.opc[data-i="1"]');await p.click('#dalje');
 let n=0;for(let i=0;i<30;i++){
  if(await p.$('.dn')){await p.click('#dalje');n++;continue}
  if(await p.$('.opc')&&(await p.content()).includes('Brza provera')){await p.click('.opc[data-i="0"]');await p.click('#dalje');continue}
  break}
 await p.fill('#sec','nesto sto pamtim iz lekcije');await p.click('#dalje');await p.click('#dalje');
 for(const t of await p.$$('textarea'))await t.fill('odgovor');
 await p.click('#dalje');await p.waitForSelector('#btn-helena');
 ok(`${id} prođena do kraja (${n} delova)`, true);
}
d=await db();
ok(`baza: ${SP.red.length} završenih, ${SP.kart} kartica`, Object.values(d.lekcije).filter(x=>x.zavrseno).length===SP.red.length&&Object.keys(d.kartice).length===SP.kart);
await p.goto(U);await p.waitForSelector('.card');
if(SP.nenap.length)ok(`sledeća: prva nenapisana „još se piše"`, (await p.content()).includes('još se piše'));
else ok('početna: „Sve je pređeno"', (await p.content()).includes('Sve je pređeno'));
const sw=await p.evaluate(()=>document.documentElement.scrollWidth);ok('bez horizontalnog skrola na 375px', sw<=375);
await p.goto(U.replace('?proba',''));await p.waitForTimeout(3000);ok('bez probe: traži prijavu (ili je prijavljen)', await p.isVisible('#btn-google'));
ok('bez JS grešaka', err.length===0);if(err.length)console.log(err);
console.log(`UKUPNO ${ok_}/${ok_+pal}`);
await b.close();})();
