// Gost (drugi nalog): ?proba&gost — odvojen napredak, bez Helene
const {chromium}=require(process.env.PW);
// Pokretanje (iz korena repoa Aplikacije): python3 -m http.server 8767 & pa PW=$(npm root -g)/playwright node skola/testovi/test-gost.js
const U=process.env.U||'http://localhost:8767/skola/';
(async()=>{
const b=await chromium.launch();const p=await b.newPage({viewport:{width:375,height:740}});
const err=[];p.on('pageerror',e=>err.push(e.message));
let a=0,f=0;const ok=(n,c)=>{c?a++:f++;console.log((c?'PROŠLO ':'PALO   ')+n)};
await p.goto(U+'?proba');await p.evaluate(()=>localStorage.clear());
// vlasnik pređe prvi korak
await p.goto(U+'?proba');await p.click('#btn-nastavi');await p.click('.opc[data-i="0"]');await p.click('#dalje');
await p.goto(U+'?proba&gost');await p.waitForSelector('#btn-nastavi');
ok('gost: kreće od početka (Počni), ne vidi napredak vlasnika', (await p.textContent('#btn-nastavi'))==='Počni');
await p.click('#btn-nastavi');await p.click('.opc[data-i="2"]');await p.click('#dalje');
for(let i=0;i<30;i++){if(await p.$('.dn')){await p.click('#dalje');continue}
 if(await p.$('.opc')&&(await p.content()).includes('Brza provera')){await p.click('.opc[data-i="1"]');await p.click('#dalje');continue}break}
await p.fill('#sec','nesto sto pamtim');await p.click('#dalje');
ok('gost: ključne ideje bez pominjanja Helene', !(await p.textContent('.sub')).includes('Helen'));
await p.click('#dalje');
ok('gost: „Za razmišljanje" umesto Helene', (await p.innerText('#app')).includes('ZA RAZMIŠLJANJE')||(await p.innerText('#app')).includes('Za razmišljanje'));
for(const t of await p.$$('textarea'))await t.fill('odgovor');await p.click('#dalje');await p.waitForSelector('#ponovo');
ok('gost: pregled bez dugmeta Helena', !(await p.$('#btn-helena'))&&(await p.content()).includes('Lekcija pređena'));
const d=await p.evaluate(()=>({a:JSON.parse(localStorage.getItem('skola-proba')||'{}'),g:JSON.parse(localStorage.getItem('skola-proba-gost')||'{}')}));
ok('gost: nema za_helenu', !d.g.za_helenu);
ok('odvojene baze: gost završio 1-1, vlasnik nije', !!d.g.lekcije['1-1'].zavrseno&&!d.a.lekcije['1-1'].zavrseno);
await p.goto(U+'?proba&gost');await p.click('#btn-metod');ok('gost: metod bez Helene', !(await p.innerText('#app')).includes('Helen'));
await p.goto(U+'?proba');await p.waitForSelector('#btn-nastavi');ok('vlasnik: i dalje na svom koraku (Nastavi)', (await p.textContent('#btn-nastavi'))==='Nastavi');
ok('bez JS grešaka', err.length===0);if(err.length)console.log(err);
console.log(`UKUPNO ${a}/${a+f}`);await b.close();})();
