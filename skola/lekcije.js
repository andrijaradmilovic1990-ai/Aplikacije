// Škola — sadržaj (kurikulum v2, 09.10.2026). Lekcije se pišu jednom, ovde.
// Oblast '13' (20. vek, dodata 09.10.) stoji posle oblasti 6; id 13 da se ne pomere id-jevi i napredak.
// Oblast '14' (Geografija sveta, dodata 09.10.) stoji pre oblasti 9, iz istog razloga.
// Napredak, odgovori i kartice su u bazi (skola/...), ne ovde.
//
// Lekcija: kuka (pogodi pre čitanja) → delovi (svaki sa proverom odmah) →
// prisećanje bez gledanja → ključne ideje (sam proveriš šta si imao) →
// razgovor (pitanja za Helenu) → kartice idu u ponavljanje (1, 3, 7, 21, 60 dana).
//
// Polja: kuka {p, o:[...], t}, delovi [{n, t, pr:{p, o:[...], t, z}}],
// kljucno [...], kartice [{p, o}], razgovor [...]. t = indeks tačne opcije, z = zašto.
// Lekcija bez polja delovi = još se piše.

export const OBLASTI = [
{id:'1', naziv:'Kosmos i materija', ikona:'🌌', era:'pre 13,8 mlrd god.', lekcije:[

{id:'1-1', naslov:'Veliki prasak — koliko je svemir star i velik',
kuka:{p:'Šta misliš, koliko je star svemir?', o:['Oko 6.000 godina','Oko 4,5 milijardi godina','Oko 13,8 milijardi godina','Oduvek postoji'], t:2},
delovi:[
{n:'Svemir ima početak', t:`Pre oko 13,8 milijardi godina sve što danas postoji — svaka zvezda, svaki atom tvog tela — bilo je sabijeno u stanje neverovatno vrelo i gusto. Od tada se širi i hladi. To zovemo Veliki prasak.

Najčešća zabluda: da je to bila eksplozija u praznom prostoru, kao bomba. Nije. Nije bilo „spolja" u koje bi nešto eksplodiralo. Širio se SAM PROSTOR.

Slika koja pomaže: testo sa suvim grožđem koje narasta u rerni. Kako testo raste, svako zrno se udaljava od svakog drugog. Nijedno nije centar. Tako i galaksije: svaka vidi da joj se sve ostale udaljavaju.

Ime „Big Bang" je 1949. dao astronom Fred Hojl — podrugljivo, jer u to nije verovao. Ime je ostalo, a dokazi su ga pregazili.`,
pr:{p:'Šta je, u stvari, Veliki prasak?', o:['Eksplozija ogromne bombe u praznom prostoru','Širenje samog prostora iz vrelog, gustog stanja','Sudar dve ogromne galaksije'], t:1, z:'Nije bilo praznog prostora u koji bi nešto eksplodiralo — prostor se sam širi, kao testo sa grožđem.'}},
{n:'Kako to znamo — tri dokaza', t:`Niko nije bio tamo. Ali tri nezavisna traga vode na isto mesto:

1. GALAKSIJE SE UDALJAVAJU. Edvin Habl je 1929. video da se skoro sve galaksije udaljavaju od nas, i to što dalje — to brže. Svetlost galaksije koja beži „pocrveni", kao što sirena hitne pomoći promeni ton kad prođe pored tebe. Ako film vratiš unazad, sve se skuplja u jednu tačku.

2. EHO POČETKA. Svemir je u početku bio vreo i svetleo je. Ta svetlost se do danas ohladila u slabo mikrotalasno zračenje koje dolazi iz svih pravaca. Otkriveno je 1965. slučajno: dvojica inženjera su mislila da im smetnje u anteni prave golubovi.

3. RECEPT ZA MATERIJU. Teorija predviđa da je iz prvih minuta izašlo oko tri četvrtine vodonika i četvrtina helijuma. Kad izmerimo stare zvezde i gas — tačno to nalazimo.`,
pr:{p:'Šta od ovoga NIJE dokaz Velikog praska?', o:['Galaksije se udaljavaju od nas','Slabo zračenje koje dolazi iz svih pravaca','Zemlja je okrugla'], t:2, z:'Okruglost Zemlje nema veze sa početkom svemira. Tri dokaza su udaljavanje galaksija, eho početka (pozadinsko zračenje) i odnos vodonika i helijuma.'}},
{n:'Koliko je veliko', t:`Brojke su tolike da ih mozak ne hvata, zato merimo vremenom koje treba svetlosti — a ona prelazi 300.000 km u sekundi.

• Od Meseca do nas: malo više od 1 sekunde.
• Od Sunca: 8 minuta. Sunce koje vidiš je Sunce od pre 8 minuta.
• Najbliža zvezda posle Sunca: 4,2 godine svetlosti.
• Naša galaksija, Mlečni put: oko 100.000 godina svetlosti preko, sa 100–400 milijardi zvezda.
• Vidljivi svemir: oko 93 milijarde godina svetlosti preko, sa stotinama milijardi galaksija.

Odavde sledi nešto lepo: GLEDATI DALEKO ZNAČI GLEDATI U PROŠLOST. Zvezda koju večeras vidiš možda više i ne postoji; do tebe tek stiže njena stara svetlost.`,
pr:{p:'Gledaš zvezdu udaljenu 1.000 godina svetlosti. Šta vidiš?', o:['Kako izgleda upravo sada','Kako je izgledala pre 1.000 godina','Kako će izgledati za 1.000 godina'], t:1, z:'Svetlosti je trebalo 1.000 godina da stigne do tebe, pa vidiš zvezdu kakva je bila kad je ta svetlost krenula.'}},
{n:'Kalendar svemira', t:`Karl Sejgan je smislio trik: sabij celu istoriju svemira u jednu kalendarsku godinu.

• 1. januar, ponoć: Veliki prasak.
• Proleće: oblikuje se naš Mlečni put.
• Početak septembra: nastaju Sunce i Zemlja.
• Kraj septembra: prvi život na Zemlji.
• 25. decembar: dinosaurusi.
• 31. decembar, 23:48: pojavljuje se čovek kao vrsta.
• Poslednjih 11 sekundi pred ponoć: sva pisana istorija — piramide, Rim, Srbija, ti.

Ovo nije da te ponizi, nego da ti da razmeru. Sve o čemu ćemo pričati u istoriji, religijama, ekonomiji — dešava se u tih poslednjih nekoliko sekundi.`,
pr:{p:'U „kalendaru svemira", kad se pojavljuje čovek?', o:['U julu','Na Božić, 25. decembra','U poslednjih dvanaest minuta 31. decembra'], t:2, z:'Čovek stiže 31. decembra oko 23:48, a cela pisana istorija staje u poslednjih oko 11 sekundi.'}},
{n:'Šta ne znamo', t:`Pošteno je reći i gde znanje staje.

• ŠTA JE BILO „PRE"? Možda pitanje nema smisla, jer vreme počinje sa svemirom — kao da pitaš šta je severno od Severnog pola. A možda ima. Ne znamo.
• TAMNA MATERIJA I TAMNA ENERGIJA. Sve što vidimo — zvezde, planete, gas, ljudi — čini samo oko 5% svemira. Oko 27% je „tamna materija": vidimo da privlači gravitacijom, ali ne znamo šta je. Oko 68% je „tamna energija", nešto što ubrzava širenje svemira. Imamo imena, nemamo odgovore.
• DA LI POSTOJE DRUGI SVEMIRI? Neke teorije to dozvoljavaju, ali za sad nema načina da se proveri.

Kad nauka kaže „ne znamo", to nije slabost. To je razlika između nje i priče koja ima odgovor za sve.`,
pr:{p:'Koliki deo svemira čini obična materija — sve što vidimo?', o:['Oko 95%','Oko polovine','Oko 5%'], t:2, z:'Samo oko 5%. Ostalo su tamna materija (oko 27%) i tamna energija (oko 68%), za koje još ne znamo šta su.'}}
],
kljucno:['Svemir je star oko 13,8 milijardi godina i počeo je iz vrelog, gustog stanja.','Veliki prasak je širenje samog prostora, ne eksplozija u praznom.','Tri dokaza: galaksije se udaljavaju, eho početka (pozadinsko zračenje), odnos vodonika i helijuma.','Svetlosti treba vreme da stigne — gledati daleko znači gledati u prošlost.','Obična materija je samo oko 5% svemira; tamna materija i energija su nepoznanice.'],
kartice:[
{p:'Koliko je star svemir?', o:'Oko 13,8 milijardi godina.'},
{p:'Zašto Veliki prasak nije eksplozija kao bomba?', o:'Jer se širi sam prostor — nema praznog „spolja" u koje bi nešto eksplodiralo.'},
{p:'Navedi tri dokaza Velikog praska.', o:'Galaksije se udaljavaju (Habl), pozadinsko mikrotalasno zračenje, odnos vodonika i helijuma.'},
{p:'Zašto vidimo zvezde kakve su bile, a ne kakve jesu?', o:'Svetlosti treba vreme da stigne do nas — daleko znači prošlost.'},
{p:'Koliki deo svemira je obična materija?', o:'Oko 5%.'}
],
razgovor:['Objasni Veliki prasak nekome ko nikad nije čuo za njega — bez stručnih reči.','Da li ti je lakše ili teže da prihvatiš da svemir ima početak? Zašto?']},

{id:'1-2', naslov:'Zvezde i galaksije — fabrike elemenata',
kuka:{p:'Odakle potiče gvožđe u tvojoj krvi?', o:['Nastalo je na Zemlji, u stenama','Iz unutrašnjosti zvezda koje su davno umrle','Direktno iz Velikog praska'], t:1},
delovi:[
{n:'Kako se pali zvezda', t:`Posle Velikog praska postojali su skoro samo vodonik i helijum. Ogromni oblaci gasa. Gravitacija ih je polako skupljala, i kako se gas sabijao, zagrevao se.

Kad u središtu oblaka temperatura dostigne oko 10 miliona stepeni, desi se nešto novo: jezgra vodonika počnu da se SPAJAJU u helijum i pri tom oslobađaju ogromnu energiju. To je FUZIJA. Zvezda se upalila.

Zvezda je ravnoteža dve sile: gravitacija pritiska ka unutra, energija fuzije gura ka spolja. Dok traje gorivo, ravnoteža drži.

Naše Sunce svake sekunde pretvori oko 600 miliona tona vodonika u helijum. I tako 4,6 milijardi godina.`,
pr:{p:'Šta daje energiju zvezdi?', o:['Gori, kao vatra u peći','Fuzija — spajanje lakih jezgara u teža','Električna struja iz svemira'], t:1, z:'Zvezda ne gori (za vatru treba kiseonik). U njenom jezgru se jezgra vodonika spajaju u helijum i oslobađaju energiju.'}},
{n:'Život i smrt zvezde', t:`Kako zvezda živi i umire zavisi skoro samo od jednog: koliko je TEŠKA.

• MALE ZVEZDE štede gorivo i žive bilionima godina — duže nego što svemir postoji.
• ZVEZDE KAO SUNCE žive oko 10 milijardi godina. Sunce je na polovini. Na kraju će se naduti u crvenog džina, progutati Merkur i Veneru, a ostaće beli patuljak — ugašeni žar veličine Zemlje.
• OGROMNE ZVEZDE gore kao lude i žive samo nekoliko miliona godina. Završe u eksploziji koja se zove SUPERNOVA — na nekoliko nedelja sija jače od cele galaksije. Iza ostane neutronska zvezda ili crna rupa.

Pravilo koje važi i van astronomije: što jače goriš, kraće traješ.`,
pr:{p:'Koja zvezda živi najkraće?', o:['Mala zvezda','Zvezda kao Sunce','Ogromna zvezda'], t:2, z:'Ogromne zvezde troše gorivo neverovatno brzo i žive samo nekoliko miliona godina.'}},
{n:'Fabrike elemenata', t:`Ovo je možda najlepša stvar u celoj oblasti.

U jezgru zvezde fuzija ne staje na helijumu. Kako zvezda stari, pravi sve teže elemente: ugljenik, kiseonik, azot, silicijum… sve do gvožđa. Teže od gvožđa — zlato, srebro, uran — nastaju u eksplozijama supernova i u sudarima mrtvih neutronskih zvezda.

Kad zvezda umre, eksplozija razbaca te elemente po svemiru. Od tog praha nastaju novi oblaci, nove zvezde i planete.

Zato: kalcijum u tvojim kostima, gvožđe u tvojoj krvi, kiseonik koji upravo udišeš i ugljenik od kog je napravljena svaka tvoja ćelija — skuvani su u zvezdama koje su umrle pre nego što je Sunce postojalo. Sejgan: „Napravljeni smo od zvezdane prašine." To nije pesnička slika. To je hemija.`,
pr:{p:'Gde je nastalo zlato?', o:['U Zemljinom jezgru','U eksplozijama i sudarima mrtvih zvezda','U Velikom prasku'], t:1, z:'Elementi teži od gvožđa, kao zlato, nastaju u supernovama i sudarima neutronskih zvezda. Veliki prasak je dao skoro samo vodonik i helijum.'}},
{n:'Galaksije i crne rupe', t:`Zvezde ne lebde same. Gravitacija ih drži u ogromnim ostrvima — GALAKSIJAMA.

Naša je Mlečni put: spirala sa 100–400 milijardi zvezda. Mi smo u jednom kraku, oko 26.000 godina svetlosti od centra. Ona bleda pruga na nebu van grada — to je pogled na sopstvenu galaksiju sa strane.

U centru skoro svake velike galaksije je SUPERMASIVNA CRNA RUPA. Naša je teška kao oko 4 miliona Sunaca.

Šta je crna rupa: telo toliko gusto da mu ni svetlost ne može pobeći. Zabluda je da je to usisivač koji guta sve. Iz daljine privlači kao i bilo šta iste mase — kad bi Sunce postalo crna rupa iste mase, Zemlja bi nastavila da kruži isto (samo bi bilo mračno i hladno).

Za oko 4–5 milijardi godina Mlečni put će se sudariti sa susednom galaksijom Andromedom.`,
pr:{p:'Šta je crna rupa?', o:['Rupa u prostoru koja usisava sve oko sebe','Telo toliko gusto da ni svetlost ne može da mu pobegne','Prazan prostor između galaksija'], t:1, z:'Crna rupa je ekstremno gusto telo. Iz daljine privlači kao bilo koje telo iste mase — nije usisivač.'}},
{n:'Naš kutak: Sunčev sistem', t:`Pre 4,6 milijardi godina oblak gasa i prašine — ostataka starih zvezda — skupio se u Sunce. Ostatak se okretao oko njega i slepio u planete.

• Sunce nosi 99,8% mase celog sistema.
• Blizu Sunca su male, kamenite planete: Merkur, Venera, Zemlja, Mars.
• Dalje su gasoviti divovi: Jupiter, Saturn, Uran, Neptun.
• Ukupno 8 planeta. Pluton je 2006. preimenovan u patuljastu planetu — nije se smanjio, samo smo bolje definisali šta je planeta.

Do danas je pronađeno više hiljada planeta oko drugih zvezda. Planete su pravilo, ne izuzetak. Da li negde ima života — ne znamo. To je jedno od najvećih otvorenih pitanja.`,
pr:{p:'Koliko planeta ima Sunčev sistem?', o:['9','8','12'], t:1, z:'Osam: Merkur, Venera, Zemlja, Mars, Jupiter, Saturn, Uran, Neptun. Pluton je od 2006. patuljasta planeta.'}}
],
kljucno:['Zvezde sijaju zbog fuzije — spajanja vodonika u helijum.','Masa određuje život zvezde: velike žive kratko i završe kao supernova.','Elementi teži od helijuma skuvani su u zvezdama — napravljeni smo od zvezdane prašine.','Galaksije su ostrva zvezda; u centru velikih je supermasivna crna rupa.','Sunčev sistem je star 4,6 milijardi godina i ima 8 planeta.'],
kartice:[
{p:'Šta je fuzija u zvezdi?', o:'Spajanje lakih jezgara (vodonik) u teža (helijum), uz oslobađanje energije.'},
{p:'Od čega zavisi kako zvezda živi i umire?', o:'Od mase. Velike žive kratko i eksplodiraju kao supernova.'},
{p:'Odakle potiču kalcijum, gvožđe i kiseonik u tvom telu?', o:'Iz zvezda koje su umrle pre nastanka Sunca.'},
{p:'Da li crna rupa „usisava" sve oko sebe?', o:'Ne — iz daljine privlači kao bilo koje telo iste mase.'},
{p:'Koliko je star Sunčev sistem i koliko ima planeta?', o:'Oko 4,6 milijardi godina; 8 planeta.'}
],
razgovor:['Šta ti znači rečenica „napravljeni smo od zvezdane prašine"? Menja li nešto u tome kako gledaš na sebe?','Objasni svojim rečima zašto velike zvezde žive kraće od malih.']},

{id:'1-3', naslov:'Atom i elementi — od čega je sve napravljeno',
kuka:{p:'Kad bi atom uvećao do veličine fudbalskog stadiona, koliko bi bilo njegovo jezgro?', o:['Skoro kao ceo stadion','Kao fudbalski gol','Kao zrno graška na centru terena'], t:2},
delovi:[
{n:'Sve je od atoma', t:`Pre 2.400 godina grčki filozof Demokrit je rekao: ako nešto deliš i deliš, na kraju stigneš do komadića koji se ne može dalje deliti. Nazvao ga je ATOMOS — „nedeljiv".

To je bila samo misao. Dokaz je stigao tek oko 1800–1900: hemičari su videli da se supstance uvek spajaju u tačnim razmerama, kao da su sastavljene od sitnih jedinica.

Koliko su mali? U debljini jedne vlasi kose stane nekoliko stotina hiljada atoma poređanih u niz. U jednoj kapi vode ima ih više nego što ima zrna peska na svim plažama Zemlje.

Danas znamo da atom ipak ima delove. Ali ime je ostalo.`,
pr:{p:'Ko je prvi izneo ideju atoma?', o:['Isak Njutn','Demokrit, grčki filozof','Albert Ajnštajn'], t:1, z:'Demokrit, pre oko 2.400 godina — kao čistu misao. Dokazi su stigli tek oko 1800–1900.'}},
{n:'Šta je unutra', t:`Atom ima:
• JEZGRO u sredini — od PROTONA (pozitivni naboj) i NEUTRONA (bez naboja);
• ELEKTRONE (negativni naboj) koji se kreću oko jezgra.

Jezgro je sićušno: ako je atom stadion, jezgro je zrno graška na centru terena. Sve ostalo je praznina. I ti si, kad se sabere, skoro sav prazan prostor — samo što elektromagnetna sila čini da se stvari ne propadaju jedna kroz drugu.

Najvažnije pravilo: BROJ PROTONA određuje koji je element.
1 proton = vodonik · 6 = ugljenik · 8 = kiseonik · 26 = gvožđe · 79 = zlato.

Promeni broj protona — dobiješ drugi element. Alhemičari su vekovima pokušavali da od olova naprave zlato i nisu mogli. Zvezde mogu.`,
pr:{p:'Šta određuje koji je element u pitanju?', o:['Broj elektrona','Broj protona u jezgru','Veličina atoma'], t:1, z:'Broj protona je „lična karta" elementa: 6 je uvek ugljenik, 79 je uvek zlato.'}},
{n:'Periodni sistem', t:`1869. ruski hemičar Dmitrij Mendeljejev je, kaže priča, ispisao elemente na kartice i slagao ih kao pasijans — po težini i po tome kako se ponašaju.

Video je da se svojstva ponavljaju u pravilnim razmacima. Napravio je tabelu i ostavio PRAZNA MESTA, uz tvrdnju: tu postoje elementi koje još nismo otkrili, i biće otprilike ovakvi. Za nekoliko godina su ih našli — tačno onakve kakve je predvideo. To je nauka u najboljem izdanju: ne samo da opisuje, nego predviđa.

Danas znamo za 118 elemenata; oko 90 postoji u prirodi, ostali su napravljeni u laboratorijama.

Elementi u istoj koloni se ponašaju slično. Primer: helijum, neon, argon skoro ni sa čim ne reaguju („plemeniti gasovi"), a natrijum i kalijum burno reaguju sa vodom.`,
pr:{p:'Po čemu je Mendeljejev najpoznatiji?', o:['Otkrio je atom','Složio je elemente u tabelu i predvideo one koji još nisu bili otkriveni','Napravio je prvu atomsku bombu'], t:1, z:'Njegova tabela je imala prazna mesta za elemente koje niko nije video — i oni su kasnije pronađeni.'}},
{n:'Kako se atomi spajaju', t:`Atomi retko stoje sami. Spajaju se u MOLEKULE tako što dele ili predaju elektrone.

• Voda: dva atoma vodonika + jedan kiseonika (H₂O).
• Ugljen-dioksid koji izdišeš: jedan ugljenik + dva kiseonika (CO₂).

Isti atomi, drugačiji raspored — potpuno druga stvar. Grafit u olovci i dijamant su OBA čist ugljenik. Razlika je samo u tome kako su atomi složeni.

HEMIJSKA REAKCIJA je samo preraspodela atoma. Ništa ne nestaje. Lavoazje, otac moderne hemije: „Ništa se ne gubi, ništa se ne stvara, sve se menja."

Kad drvo gori, ne nestaje. Atomi drveta se spoje sa kiseonikom iz vazduha i odu u vazduh kao ugljen-dioksid i vodena para. Ostane pepeo. A biljka je taj ugljenik nekad uzela iz vazduha — vatra ga samo vraća.`,
pr:{p:'Grafit u olovci i dijamant su…', o:['Potpuno različiti elementi','Isti element — ugljenik — samo drugačije složen','Dijamant je grafit sa primesama zlata'], t:1, z:'Oba su čist ugljenik. Različit raspored atoma daje potpuno različita svojstva.'}},
{n:'Čvrsto, tečno, gas — i šta je toplota', t:`Ista supstanca može biti čvrsta, tečna ili gas — led, voda, para. Šta se menja? Samo koliko se brzo atomi i molekuli kreću.

TOPLOTA = KRETANJE. Što se čestice brže kreću i sudaraju, to je nešto toplije.
• U ledu molekuli stoje u rešetki i samo drhte.
• U vodi klize jedni pored drugih.
• U pari lete na sve strane.

Postoji najniža moguća temperatura, kad se kretanje skoro sasvim smiri: APSOLUTNA NULA, −273,15 °C. Hladnije ne postoji.

Četvrto stanje je PLAZMA: toliko vrelo da atomi izgube elektrone. Od nje su zvezde, munje i svetlo u neonskoj cevi.

I za kraj, ti: telo je oko 60% voda, a po broju atoma uglavnom si vodonik, kiseonik, ugljenik i azot. Isti sastojci kao u zvezdama, složeni na jako čudan način.`,
pr:{p:'Šta je toplota?', o:['Posebna nevidljiva supstanca','Kretanje atoma i molekula','Vrsta svetlosti'], t:1, z:'Toplota je kretanje čestica. Što se brže kreću, to je toplije; na apsolutnoj nuli kretanje skoro staje.'}}
],
kljucno:['Sve je od atoma: jezgro (protoni i neutroni) i elektroni oko njega; atom je skoro sav prazan.','Broj protona određuje element (6 ugljenik, 8 kiseonik, 79 zlato).','Mendeljejev je složio periodni sistem i predvideo neotkrivene elemente.','Hemijska reakcija je preraspodela atoma — ništa ne nestaje, sve se menja.','Toplota je kretanje čestica; agregatno stanje zavisi od tog kretanja.'],
kartice:[
{p:'Od čega se sastoji atom?', o:'Od jezgra (protoni i neutroni) i elektrona oko njega.'},
{p:'Šta određuje koji je element?', o:'Broj protona u jezgru.'},
{p:'Šta je Mendeljejev predvideo?', o:'Postojanje i svojstva elemenata koji još nisu bili otkriveni.'},
{p:'Kad drvo izgori, gde odu njegovi atomi?', o:'U vazduh, kao ugljen-dioksid i vodena para; ostatak je pepeo. Ništa ne nestaje.'},
{p:'Šta je toplota?', o:'Kretanje atoma i molekula.'}
],
razgovor:['Lavoazje kaže: „ništa se ne gubi, sve se menja." Gde u svakodnevici to vidiš — u kuhinji, u peći, u autu?','Objasni nekome zašto grafit i dijamant mogu biti od istog materijala.']},

{id:'1-4', naslov:'Sile i energija — šta pokreće svet',
kuka:{p:'Na Mesecu, gde nema vazduha, ispustiš čekić i pero istovremeno. Šta pada brže?', o:['Čekić','Pero','Padaju jednako brzo'], t:2},
delovi:[
{n:'Njutn i kretanje', t:`1687. Isak Njutn je u jednoj knjizi objasnio kretanje svega — od jabuke do planeta. Tri zakona:

1. INERCIJA. Telo koje miruje ostaje da miruje, a telo koje se kreće nastavlja da se kreće — dok ga neka sila ne promeni. Zato te pojas spasava: kad auto naglo stane, ti nastavljaš napred.

2. SILA = MASA × UBRZANJE. Da pokreneš prazna kolica treba malo sile, a puna — mnogo. Što je nešto teže, to ga je teže ubrzati ili zaustaviti.

3. AKCIJA I REAKCIJA. Svaka sila ima jednaku silu u suprotnom smeru. Puška trza unazad. Raketa izbacuje gas nadole i ide nagore — ne treba joj ništa „od čega da se odbije".`,
pr:{p:'Zašto poletiš napred kad taksi naglo zakoči?', o:['Neka sila te gura napred','Tvoje telo nastavlja kretanje — inercija','Vazduh u autu te potisne'], t:1, z:'Ništa te ne gura. Auto je stao, a tvoje telo po inerciji nastavlja da se kreće dok ga pojas ne zaustavi.'}},
{n:'Gravitacija', t:`Njutnov veliki uvid: sila koja obara jabuku sa drveta i sila koja drži Mesec u orbiti — ISTA JE. Mesec zapravo stalno „pada" ka Zemlji, ali se kreće toliko brzo u stranu da je stalno promašuje.

Pravilo: svako telo privlači svako drugo. Što je veća masa, jače privlači; što je dalje, slabije.

Važna razlika:
• MASA je koliko materije imaš. Ista je svuda.
• TEŽINA je sila kojom te gravitacija vuče. Na Mesecu si šest puta lakši, a masa ti je ista.

Galilej je pre Njutna pokazao da sva tela padaju jednako brzo, bez obzira na težinu — samo ih vazduh razlikuje. Astronaut je to 1971. pokazao na Mesecu: čekić i pero su pali zajedno.`,
pr:{p:'Koja je razlika između mase i težine?', o:['Nema razlike, to je isto','Masa je količina materije, a težina sila kojom te gravitacija vuče','Težina je ista svuda, masa se menja'], t:1, z:'Na Mesecu ti je masa ista, a težina šest puta manja — jer je tamo gravitacija slabija.'}},
{n:'Četiri osnovne sile', t:`Sve što se u svemiru dešava svodi se na samo četiri sile:

1. GRAVITACIJA — najslabija, ali deluje na ogromne daljine. Drži planete, zvezde i galaksije.
2. ELEKTROMAGNETNA — drži atome i molekule zajedno. Ona je struja, magnet, svetlost, hemija. I zato ne propadneš kroz stolicu: elektroni stolice i tvoji se odbijaju.
3. JAKA NUKLEARNA — najjača, ali deluje samo unutar jezgra. Drži protone zajedno, iako se oni kao isto naelektrisani odbijaju.
4. SLABA NUKLEARNA — zadužena za radioaktivnost i omogućava fuziju u Suncu.

Svaki pokret, svaki dodir, svaka misao u tvojoj glavi — neka kombinacija ove četiri.`,
pr:{p:'Zašto ne propadneš kroz stolicu?', o:['Zbog gravitacije','Zbog elektromagnetne sile između atoma','Zbog jake nuklearne sile'], t:1, z:'Elektroni u atomima stolice i u tvom telu se odbijaju — to je elektromagnetna sila.'}},
{n:'Energija se ne gubi', t:`ENERGIJA je sposobnost da se nešto uradi — pokrene, zagreje, osvetli.

Javlja se u mnogo oblika: energija kretanja, položaja (kamen na litici), toplote, hemijska (u hrani, benzinu, bateriji), električna, nuklearna.

Jedan od najčvršćih zakona u celoj nauci: ENERGIJA SE NE STVARA I NE NESTAJE — SAMO PRELAZI IZ JEDNOG OBLIKA U DRUGI.

• Benzin (hemijska) → kretanje auta + toplota motora.
• Kad zakočiš, kretanje ne nestaje — pređe u toplotu kočnica.
• Hrana (hemijska) → toplota tvog tela i rad mišića. Kalorija je samo jedinica za energiju.

Kad neko nudi mašinu koja daje više energije nego što troši — znaš da laže. Zakon to ne dozvoljava.`,
pr:{p:'Gde ode energija kretanja kad auto zakoči?', o:['Nestane','Pređe u toplotu kočnica','Vrati se u rezervoar kao benzin'], t:1, z:'Energija ne nestaje — kretanje se trenjem pretvori u toplotu kočnica i točkova.'}},
{n:'Entropija: zašto vreme ide napred', t:`Ima još jedan zakon, možda najdublji: DRUGI ZAKON TERMODINAMIKE. Kaže da NERED (entropija) sam od sebe uvek raste.

• Topla kafa se hladi. Nikad se sama ne zagreje.
• Čaša se razbije u komade. Komadi se nikad sami ne sastave.
• Soba se sama razbaca, a nikad se sama ne sredi.

Zato vreme ima smer. Zato pamtimo prošlost, a ne budućnost. Zato nijedna mašina nije savršena — uvek se nešto izgubi kao toplota.

A život? Život je ostrvo reda: od haosa pravi ćelije, tela, mozgove. Ali ne krši zakon — plaća taj red energijom koja stiže sa Sunca, i iza sebe ostavlja još više nereda. Svako od nas je kratak, skup, lep izuzetak.`,
pr:{p:'Šta kaže drugi zakon termodinamike?', o:['Energija na kraju nestaje','Nered sam od sebe raste','Sve se vremenom vraća u početno stanje'], t:1, z:'Entropija (nered) u zatvorenom sistemu raste. Zato se kafa hladi, a vreme ide samo napred.'}}
],
kljucno:['Njutnova tri zakona: inercija, sila = masa × ubrzanje, akcija i reakcija.','Gravitacija je ista sila za jabuku i Mesec; masa nije isto što i težina.','Četiri osnovne sile: gravitacija, elektromagnetna, jaka i slaba nuklearna.','Energija se ne stvara i ne nestaje — samo menja oblik.','Nered (entropija) sam raste — zato vreme ima smer; život je ostrvo reda plaćeno energijom Sunca.'],
kartice:[
{p:'Šta je inercija?', o:'Telo nastavlja da miruje ili da se kreće dok ga sila ne promeni.'},
{p:'Masa ili težina — šta se menja na Mesecu?', o:'Težina. Masa ostaje ista.'},
{p:'Koje su četiri osnovne sile?', o:'Gravitacija, elektromagnetna, jaka nuklearna, slaba nuklearna.'},
{p:'Šta kaže zakon održanja energije?', o:'Energija se ne stvara i ne nestaje, samo prelazi iz oblika u oblik.'},
{p:'Zašto se topla kafa hladi, a nikad sama ne zagreje?', o:'Drugi zakon termodinamike — nered (entropija) sam od sebe raste.'}
],
razgovor:['Sve teži neredu, a život je kratko ostrvo reda. Čitaš li to kao tužnu ili kao lepu činjenicu — i zašto?','Objasni inerciju na nekom primeru iz svog dana.']},

{id:'1-5', naslov:'Svetlost, relativnost i kvanti — samo ideja',
kuka:{p:'Šta misliš: da li vreme teče isto brzo za svakoga, svuda?', o:['Da, sat je sat','Ne — zavisi od brzine i gravitacije','Teče isto, samo ga ljudi različito osećaju'], t:1},
delovi:[
{n:'Šta je svetlost', t:`Svetlost je ELEKTROMAGNETNI TALAS — talas električnog i magnetnog polja koji putuje kroz prostor, i kroz prazan.

Ono što oči vide je samo mali deo jednog ogromnog spektra. Isti talas, različite dužine:
radio → mikrotalasi → infracrveno (toplota) → VIDLJIVA SVETLOST → ultraljubičasto → rendgen → gama zraci.

Radio u autu, mikrotalasna, daljinski upravljač, rendgen kod lekara — sve je to „svetlost" koju ne vidimo.

Boje su različite talasne dužine. Bela svetlost je mešavina svih boja — Njutn je to pokazao prizmom, a duga je isto to, samo na kapima kiše.

Brzina svetlosti je oko 300.000 km u sekundi. Ništa ne ide brže. To je granica brzine samog svemira.`,
pr:{p:'Radio talasi i svetlost su…', o:['Potpuno različite stvari','Ista vrsta talasa, samo različite dužine','Radio talasi su vrsta zvuka'], t:1, z:'I radio i vidljiva svetlost su elektromagnetni talasi — razlikuju se samo po talasnoj dužini.'}},
{n:'Ajnštajn I: vreme nije apsolutno', t:`1905. Albert Ajnštajn, službenik u zavodu za patente, uzeo je jednu neobičnu činjenicu ozbiljno: brzina svetlosti je ISTA za svakoga, bez obzira koliko se brzo kreće.

Ako je brzina svetlosti fiksna, nešto drugo mora da popusti — i popusti VREME. Što se brže krećeš, tvoj sat kuca sporije u odnosu na nekoga ko miruje. Pri običnim brzinama razlika je sićušna, ali je izmerena: atomski satovi nošeni avionom oko sveta pokazali su razliku tačno kakvu teorija predviđa.

Iz iste teorije izlazi najpoznatija formula na svetu: E = mc². Masa i energija su dva lica iste stvari, a c² je ogroman broj — pa i mrvica mase krije strašnu energiju. Tako sija Sunce. Tako radi i atomska bomba.`,
pr:{p:'Šta znači E = mc²?', o:['Energija putuje brže od mase','Masa se može pretvoriti u ogromnu količinu energije','Svetlost ima veliku masu'], t:1, z:'Masa i energija su isto; zato i mala masa, pretvorena, daje ogromnu energiju — kao u Suncu.'}},
{n:'Ajnštajn II: gravitacija je krivina', t:`1915. Ajnštajn ide dalje: gravitacija nije sila koja „vuče". Masa KRIVI PROSTOR I VREME oko sebe, a tela se kreću po tim krivinama.

Slika: na zategnutu trambulinu staviš tešku kuglu i ona napravi udubljenje. Kliker koji pustiš kotrlja se oko kugle — ne zato što ga ona vuče, nego zato što je površina zakrivljena.

Posledica: gravitacija usporava vreme. Što si bliže velikoj masi, sat sporije kuca.

Zvuči kao filozofija, ali ti to nosiš u džepu. GPS sateliti su visoko, gde je gravitacija slabija, i brzo se kreću. Njihovi satovi zato idu drugačije nego na Zemlji. Da inženjeri to ne ispravljaju po Ajnštajnu, navigacija u telefonu bi grešila oko 10 kilometara svakog dana.`,
pr:{p:'Zašto GPS mora da računa sa Ajnštajnovom teorijom?', o:['Zbog vremenskih zona na Zemlji','Satovi na satelitima kucaju drugačije nego na Zemlji','Zbog oblaka koji ometaju signal'], t:1, z:'Zbog brzine i slabije gravitacije gore, satelitski satovi idu drugačije; bez ispravke greška bi rasla oko 10 km dnevno.'}},
{n:'Kvanti: na dnu nema sigurnosti', t:`Kad se spustiš do atoma i manje, svet počinje da se ponaša čudno. Tu važi KVANTNA MEHANIKA (razvijena 1900–1930: Plank, Bor, Hajzenberg, Šredinger).

Tri ideje, samo da znaš da postoje:
• Energija ne teče glatko nego dolazi u PAKETIĆIMA — kvantima.
• Svetlost je i talas i čestica (foton), zavisno od toga kako je meriš.
• Čestica nema tačno određen položaj dok je ne izmeriš. Teorija ne kaže „gde je", nego „sa kojom verovatnoćom je gde".

Čudno je, i Ajnštajn ju je mrzeo („Bog ne baca kocku"). Ali to je najtačnije proverena teorija u istoriji. Na njoj rade tranzistori, laseri, LED sijalice, ekran i čip u telefonu iz kog ovo čitaš.

Fejnman: „Mislim da mogu slobodno da kažem da niko ne razume kvantnu mehaniku."`,
pr:{p:'Šta važi u kvantnom svetu?', o:['Sve je potpuno predvidljivo, samo je sitno','Možemo znati samo verovatnoće','To je čista teorija bez ikakve primene'], t:1, z:'Kvantna mehanika daje verovatnoće, ne izvesnosti — a ipak na njoj radi sva savremena elektronika.'}},
{n:'Velika zagonetka i kraj oblasti', t:`Fizika danas ima dve savršene teorije koje se ne slažu:
• RELATIVNOST savršeno opisuje veliko — planete, zvezde, galaksije, gravitaciju.
• KVANTNA MEHANIKA savršeno opisuje malo — atome i čestice.

Gde se veliko i malo sretnu — u crnoj rupi ili u prvom trenutku Velikog praska — one daju besmislene odgovore. „Teoriju svega" koja bi ih spojila fizičari traže već sto godina. Ko je nađe, ulazi u istoriju odmah pored Njutna i Ajnštajna.

Sad imaš kostur cele oblasti:
svemir počinje Velikim praskom → zvezde kuvaju elemente → od elemenata su atomi i sve stvari → sve pokreću četiri sile i energija koja se ne gubi → a na dnu svega su svetlost, zakrivljeno vreme i kvantna nesigurnost.

Sledeće: kako je od tog zvezdanog praha nastala jedna planeta — Zemlja.`,
pr:{p:'Koji je najveći otvoreni problem fizike?', o:['Da li gravitacija postoji','Kako spojiti relativnost i kvantnu mehaniku','Kolika je tačno brzina svetlosti'], t:1, z:'Obe teorije rade savršeno svaka u svom svetu, ali se ne slažu međusobno — „teorija svega" se još traži.'}}
],
kljucno:['Svetlost je elektromagnetni talas; vidljivo je mali deo spektra; ništa nije brže od nje.','Specijalna relativnost: brzina svetlosti je ista za sve, pa vreme zavisi od brzine; E = mc².','Opšta relativnost: masa krivi prostor i vreme; gravitacija usporava vreme (GPS to mora da ispravlja).','Kvantna mehanika: energija u paketićima, samo verovatnoće — a na njoj radi elektronika.','Relativnost i kvanti se ne slažu; teorija svega se još traži.'],
kartice:[
{p:'Šta je zajedničko radio talasima, svetlosti i rendgenu?', o:'Svi su elektromagnetni talasi, samo različitih dužina.'},
{p:'Šta znači E = mc²?', o:'Masa i energija su isto; mala masa krije ogromnu energiju.'},
{p:'Kako Ajnštajn objašnjava gravitaciju?', o:'Masa krivi prostor i vreme, a tela se kreću po tim krivinama.'},
{p:'Šta kvantna mehanika kaže o položaju čestice?', o:'Daje samo verovatnoće dok se čestica ne izmeri.'},
{p:'Koje dve teorije fizika ne ume da spoji?', o:'Opštu relativnost (veliko) i kvantnu mehaniku (malo).'}
],
razgovor:['Kvanti kažu da na dnu stvarnosti nema sigurnosti, samo verovatnoće. Da li te to plaši ili oslobađa?','Objasni nekome, bez formula, zašto sat na GPS satelitu ne ide isto kao sat na zemlji.']}
]},

{id:'2', naziv:'Zemlja', ikona:'🌍', era:'pre 4,6 mlrd god.', lekcije:[
{id:'2-1', naslov:'Kako je nastala Zemlja i šta je u njoj',
kuka:{p:'Koliko je stara planeta Zemlja?', o:['Oko 10.000 godina','Oko 4,5 milijardi godina','Oko 13,8 milijardi godina'], t:1},
delovi:[
{n:'Rođenje od prašine', t:`Pre oko 4,5 milijardi godina oko mladog Sunca kružio je disk gasa i prašine — ostaci starih zvezda iz prošle oblasti.

Zrnca su se lepila u grudvice, grudvice u kamenje, kamenje u tela velika kilometrima. Ta tela su se sudarala i spajala. Svaki sudar je oslobađao toplotu, pa je mlada Zemlja bila užarena, rastopljena kugla, bombardovana sa svih strana.

Kako znamo koliko je stara? Neki elementi se raspadaju stalnom brzinom — uran polako prelazi u olovo, kao pesak u peščanom satu. Kad izmeriš koliko je urana ostalo, a koliko olova nastalo, znaš koliko je sat radio. Najstariji meteoriti (ostaci istog diska) su stari oko 4,57 milijardi godina; najstariji zrnci minerala na Zemlji, nađeni u Australiji, oko 4,4 milijarde.`,
pr:{p:'Kako znamo koliko je Zemlja stara?', o:['Po brzini radioaktivnog raspada u stenama i meteoritima','Po broju slojeva zemlje u dubokom bunaru','Iz najstarijih zapisa starih naroda'], t:0, z:'Radioaktivni elementi (npr. uran → olovo) raspadaju se stalnom brzinom, pa rade kao sat u steni.'}},
{n:'Sudar koji je napravio Mesec', t:`Ubrzo posle nastanka, Zemlja je doživela najveći udarac u svojoj istoriji. Telo veličine Marsa (naučnici ga zovu Teja) udarilo je u nju iskosa.

Deo Zemlje i Teje rasprsnuo se u svemir, oblak se okretao oko Zemlje i za kratko vreme slepio u — MESEC. Zato je Mesec po sastavu skoro kao Zemljin omotač.

Mesec nije ukras:
• Stabilizuje nagib Zemljine ose, pa su godišnja doba stabilna milionima godina.
• Pravi plimu i oseku.
• Polako se udaljava — oko 3,8 cm godišnje (izmereno laserom odbijenim od ogledala koja su ostavili astronauti).`,
pr:{p:'Kako je, najverovatnije, nastao Mesec?', o:['Zemlja ga je uhvatila dok je prolazio','Od materijala izbačenog u sudaru Zemlje i tela veličine Marsa','Nastao je zajedno sa Suncem, pa ga je Zemlja privukla'], t:1, z:'Sudar sa „Tejom" izbacio je materijal koji se slepio u Mesec — zato liči na Zemljin omotač.'}},
{n:'Šta je ispod nas', t:`Zemlja je kao breskva, u slojevima:

• KORA — tanka, 5 do 70 km. Prema celoj Zemlji tanja je od ljuske na jabuci. Na njoj je sve što znamo.
• PLAŠT — oko 2.900 km vrele stene. Čvrst je, ali kroz milione godina teče, kao vosak ili asfalt na suncu.
• SPOLJAŠNJE JEZGRO — tečno gvožđe i nikl.
• UNUTRAŠNJE JEZGRO — čvrsto gvožđe, vrelo oko 5.000 °C, skoro kao površina Sunca. Čvrsto je samo zato što je pritisak strašan.

Najdublja rupa koju je čovek iskopao ima oko 12 km — ni kroz koru nismo prošli. Kako onda znamo? Po ZEMLJOTRESIMA. Njihovi talasi prolaze kroz celu planetu, menjaju brzinu na granicama slojeva, a jedna vrsta talasa uopšte ne prolazi kroz tečnost. Tako je otkriveno da je spoljašnje jezgro tečno — kao ultrazvuk planete.`,
pr:{p:'Kako znamo šta je u središtu Zemlje?', o:['Iskopali smo bušotinu do jezgra','Po tome kako zemljotresni talasi putuju kroz unutrašnjost','Po lavi koja izbija iz vulkana'], t:1, z:'Najdublja bušotina ima samo oko 12 km. Talasi zemljotresa su „ultrazvuk" planete — menjaju se na granicama slojeva.'}},
{n:'Nevidljivi štit', t:`Tečno gvožđe u spoljašnjem jezgru se stalno meša i okreće. Pokretni metal stvara MAGNETNO POLJE — Zemlja je ogroman magnet. Zato kompas pokazuje sever.

To polje je štit. Sa Sunca stalno duva „Sunčev vetar" — mlaz naelektrisanih čestica. Magnetno polje ga skreće oko planete. Gde čestice ipak uđu, kod polova, nebo svetli: POLARNA SVETLOST.

Bez štita bi Sunčev vetar vremenom oduvao atmosferu. Mars je to izgubio: jezgro mu se ohladilo, polje nestalo, atmosfera se proredila, voda nestala.

Zanimljivost: polovi se povremeno OBRNU — sever postane jug. Poslednji put pre oko 780.000 godina. Znamo to iz stena: dok se lava hladi, sitni magnetni minerali u njoj se okrenu po polju i tako „zamrznu" pravac.`,
pr:{p:'Šta stvara Zemljino magnetno polje?', o:['Kretanje tečnog gvožđa u spoljašnjem jezgru','Gvozdena ruda u Zemljinoj kori','Privlačenje Meseca'], t:0, z:'Pokretni rastopljeni metal u jezgru radi kao dinamo i pravi magnetno polje.'}},
{n:'Planeta koja se menja', t:`Zemlja nije uvek bila ovakva. Ona nije stvar, nego proces.

• Prvo: užarena kugla bez okeana.
• Kad se ohladila, vodena para je pala kao kiše koje su trajale vekovima — nastali su okeani (deo vode su doneli i asteroidi).
• Rana atmosfera nije imala kiseonika. Kiseonik su napravili sićušni mikroorganizmi (cijanobakterije) fotosintezom. Pre oko 2,4 milijarde godina kiseonika je naglo postalo dovoljno da promeni celu planetu.
• Bilo je perioda kad je Zemlja verovatno bila skoro sva pod ledom („Zemlja grudva snega"), i perioda kad je bila toplija nego danas.

U 18. veku škotski geolog Haton je gledao slojeve stena i shvatio koliko sporo nastaju. Napisao je o vremenu Zemlje: „nema traga početku, nema izgleda kraju." Rođen je pojam DUBOKO VREME — vreme toliko dugo da ljudski život u njemu nije ni treptaj.`,
pr:{p:'Odakle kiseonik u vazduhu?', o:['Bio je u atmosferi od samog početka','Proizveli su ga mikroorganizmi fotosintezom','Izbacili su ga vulkani'], t:1, z:'Rana atmosfera nije imala kiseonika; napravile su ga cijanobakterije, a pre oko 2,4 milijarde godina ga je postalo dovoljno da promeni planetu.'}}
],
kljucno:['Zemlja je stara oko 4,5 milijardi godina; starost znamo po radioaktivnom „satu" u stenama.','Mesec je nastao iz sudara Zemlje sa telom veličine Marsa.','Slojevi: kora (tanka), plašt, tečno spoljašnje i čvrsto unutrašnje jezgro — znamo ih po zemljotresnim talasima.','Tečno gvožđe u jezgru pravi magnetno polje koje štiti atmosferu.','Kiseonik su napravili mikroorganizmi; Zemlja je proces koji traje u dubokom vremenu.'],
kartice:[
{p:'Koliko je stara Zemlja i kako to znamo?', o:'Oko 4,5 milijardi godina — po radioaktivnom raspadu (npr. uran → olovo).'},
{p:'Kako je nastao Mesec?', o:'Iz materijala izbačenog u sudaru Zemlje i tela veličine Marsa.'},
{p:'Koji su slojevi Zemlje?', o:'Kora, plašt, spoljašnje (tečno) i unutrašnje (čvrsto) jezgro.'},
{p:'Čemu služi Zemljino magnetno polje?', o:'Štiti od Sunčevog vetra i čuva atmosferu; pravi ga tečno gvožđe u jezgru.'},
{p:'Ko je napravio kiseonik u vazduhu?', o:'Mikroorganizmi (cijanobakterije) fotosintezom.'}
],
razgovor:['Zemlja je proces, ne stvar. Šta se u tvom životu menja tako sporo da to ne primećuješ dok ne pogledaš unazad?','Objasni nekome kako znamo šta je u Zemljinom jezgru, a da niko nije kopao do njega.']},

{id:'2-2', naslov:'Tektonske ploče — kontinenti, planine, zemljotresi, vulkani',
kuka:{p:'Da li se kontinenti pomeraju?', o:['Ne, stoje gde su oduvek','Da, nekoliko centimetara godišnje','Da, nekoliko kilometara godišnje'], t:1},
delovi:[
{n:'Ideja kojoj su se smejali', t:`1912. nemački meteorolog Alfred Vegener je primetio ono što svako vidi na karti: obale Južne Amerike i Afrike se uklapaju kao delovi slagalice.

Ali nije stao na obliku. Na obe strane okeana našao je iste stene i iste fosile — čak i fosile malog gmizavca koji nikako nije mogao da prepliva okean. Zaključio je: kontinenti su nekad bili jedan, PANGEA, i od tada se razmiču.

Geolozi su mu se smejali. Ne zato što nije imao dokaze, nego zato što nije umeo da objasni ŠTA pokreće kontinente. Umro je 1930. na Grenlandu, na ekspediciji, neshvaćen.

Potvrda je stigla tek 1960-ih, kad su izmerili dno okeana i videli da tamo nastaje nova kora. Vegener je bio u pravu pola veka pre ostalih.`,
pr:{p:'Zašto Vegenerova ideja dugo nije prihvaćena?', o:['Nije imao nijedan dokaz','Nije umeo da objasni šta pokreće kontinente','Bio je protiv Darvinove teorije'], t:1, z:'Imao je fosile, stene i oblik obala, ali ne i mehanizam. Mehanizam (širenje okeanskog dna) otkriven je tek 1960-ih.'}},
{n:'Ploče koje plutaju', t:`Danas znamo: Zemljina kora sa gornjim delom plašta nije jedan komad, nego je ispucala na oko 15 velikih TEKTONSKIH PLOČA. One leže na mekšem, vrelom plaštu i polako se pomeraju.

Koliko brzo? Od 2 do 10 centimetara godišnje — otprilike brzinom kojom ti rastu nokti. Malo za jedan život, ogromno za sto miliona godina.

Šta ih pokreće? Toplota iz unutrašnjosti Zemlje. Plašt se kreće u ogromnim, sporim strujama, kao voda koja ključa u šerpi, a hladne, teške ploče na nekim mestima tonu nazad u dubinu i vuku ostatak za sobom.`,
pr:{p:'Kojom brzinom se kreću tektonske ploče?', o:['Brzinom rasta noktiju — nekoliko cm godišnje','Nekoliko metara godišnje','Toliko sporo da se ne može izmeriti'], t:0, z:'Od 2 do 10 cm godišnje — sateliti to danas mere direktno.'}},
{n:'Gde se ploče sreću', t:`Sve zanimljivo se dešava na ivicama ploča. Tri vrste granica:

1. RAZILAŽENJE. Ploče se razmiču, odozdo izlazi magma i pravi novu koru. Usred Atlantika ide ogroman podvodni planinski venac. Island leži baš na njemu — tamo možeš stajati jednom nogom na severnoameričkoj, a drugom na evroazijskoj ploči.

2. SUDAR. Kad se okeanska ploča sudari sa kontinentalnom, teža okeanska podvlači se pod nju i topi — iznad niču vulkani (Ande). Kad se sudare dva kontinenta, nijedan ne tone, pa se zgužvaju u planine. Indija je udarila u Aziju i podigla HIMALAJE — i Mont Everest i danas raste po nekoliko milimetara godišnje.

3. KLIZANJE. Ploče se taru jedna o drugu bočno. Najpoznatiji primer je rased San Andreas u Kaliforniji.`,
pr:{p:'Kako su nastali Himalaji?', o:['Iz jednog ogromnog vulkana','Sudarom indijske i evroazijske ploče','Erozijom jedne visoravni'], t:1, z:'Dva kontinenta su se sudarila; nijedan nije potonuo, pa se kora zgužvala u najviše planine na svetu.'}},
{n:'Zemljotresi', t:`Ploče se ne kreću glatko. Na granicama se zakače, a napon raste godinama, decenijama, vekovima — kao kad saviješ štap. Kad stena popusti, sva energija se oslobodi odjednom: ZEMLJOTRES.

Mesto pucanja u dubini je ŽARIŠTE, a tačka na površini iznad njega EPICENTAR.

Jačina (magnituda) je skala koja raste u skokovima: svaki ceo broj više znači oko 32 puta više energije. Zemljotres jačine 7 nije „malo jači" od šestice — oslobađa oko 32 puta više energije.

Balkan se trese jer afrička ploča, sa manjom jadranskom pločom ispred sebe, gura ka Evroaziji. Zato su jaki zemljotresi pogađali i Skoplje (1963), i Crnu Goru (1979), a Kraljevo 2010.

Zemljotres se ne može tačno predvideti — ni dan, ni godina. Ali se zna gde je opasno, i može se graditi tako da kuće izdrže.`,
pr:{p:'Zemljotres jačine 7 u odnosu na zemljotres jačine 6 oslobađa…', o:['Duplo više energije','Oko 32 puta više energije','Samo oko 10% više energije'], t:1, z:'Skala raste u skokovima: svaki ceo broj je oko 32 puta više energije.'}},
{n:'Vulkani i kruženje stena', t:`Vulkani niču uglavnom na granicama ploča, ali i iznad „vrućih tačaka" gde iz dubine stalno izbija vrelo — tako su nastala Havajska ostrva.

Velike erupcije menjaju i klimu. 1815. eksplodirao je vulkan Tambora u Indoneziji. Pepeo i gasovi u visokoj atmosferi zaklonili su Sunce, pa je 1816. u Evropi i Americi ostala upamćena kao „GODINA BEZ LETA" — sneg u junu, propali usevi, glad.

Stene takođe kruže, samo mnogo sporije:
lava se ohladi u stenu → kiša, led i vetar je usitne u pesak i mulj → taloži se u slojeve i stvrdne → pritisak i toplota je pretvore u novu stenu → potone i istopi se → izbije kao lava.

I kontinenti će se ponovo spojiti: za oko 200–250 miliona godina, nova Pangea.`,
pr:{p:'Šta je bila „godina bez leta" 1816?', o:['Godina posle velikog rata','Posledica erupcije vulkana Tambora koja je ohladila klimu','Godina kad je Zemlja bila najdalje od Sunca'], t:1, z:'Pepeo i gasovi iz Tambore (1815) zaklonili su Sunce — u Evropi i Americi leto 1816. skoro nije ni došlo.'}}
],
kljucno:['Kontinenti se pomeraju — Vegener je bio u pravu, dokaz je stigao tek 1960-ih.','Kora je ispucala na oko 15 ploča koje se kreću nekoliko cm godišnje.','Na granicama: razilaženje (nova kora), sudar (planine i vulkani), klizanje.','Zemljotresi su naglo oslobađanje napona; svaki stepen jačine je oko 32 puta više energije.','Vulkani menjaju i klimu; stene kruže, a kontinenti će se opet spojiti.'],
kartice:[
{p:'Šta je Pangea?', o:'Nekadašnji jedinstveni superkontinent od kog su nastali današnji kontinenti.'},
{p:'Koliko brzo se kreću tektonske ploče?', o:'Nekoliko cm godišnje — kao rast noktiju.'},
{p:'Kako nastaju planine kao Himalaji?', o:'Sudarom dve kontinentalne ploče.'},
{p:'Koliko više energije ima zemljotres jačine 7 od šestice?', o:'Oko 32 puta više.'},
{p:'Zašto Balkan ima zemljotrese?', o:'Afrička (i jadranska) ploča gura ka Evroaziji.'}
],
razgovor:['Ploče se kreću brzinom noktiju, a podižu Himalaje. Gde u životu vidiš da male, stalne stvari prave velike promene?','Vegener je bio u pravu, a nisu mu verovali jer nije imao mehanizam. Da li je bilo pošteno ne verovati mu? Zašto?']},

{id:'2-3', naslov:'Atmosfera i okeani — vreme nije isto što i klima',
kuka:{p:'Koja je razlika između vremena i klime?', o:['Nema razlike, to su dve reči za isto','Vreme je stanje danas, klima je prosek kroz decenije','Klima se odnosi samo na temperaturu'], t:1},
delovi:[
{n:'Tanak pokrivač', t:`Atmosfera izgleda beskrajno kad gledaš u nebo, ali je zapravo tanka. Skoro sav vazduh je u donjih tridesetak kilometara — manje od razdaljine Beograd–Smederevo, samo uvis.

Sastav vazduha:
• AZOT — oko 78%
• KISEONIK — oko 21%
• argon — skoro 1%
• UGLJEN-DIOKSID — samo oko 0,04%. Malo, ali ćemo videti da je presudan.

Slojevi:
• TROPOSFERA, donjih 10–15 km: tu je sve vreme — oblaci, kiša, vetar.
• STRATOSFERA iznad nje: tu je OZONSKI OMOTAČ, koji upija veći deo opasnog ultraljubičastog zračenja sa Sunca.`,
pr:{p:'Kog gasa ima najviše u vazduhu?', o:['Kiseonika','Azota','Ugljen-dioksida'], t:1, z:'Azota je oko 78%, kiseonika oko 21%, a ugljen-dioksida svega oko 0,04%.'}},
{n:'Prirodna staklena bašta', t:`Sunčeva svetlost prolazi kroz vazduh i greje tlo i more. Zagrejana površina tu toplotu zrači nazad, ali kao nevidljivo infracrveno zračenje.

Neki gasovi — VODENA PARA, UGLJEN-DIOKSID, METAN — propuštaju svetlost, ali deo infracrvene toplote hvataju i vraćaju dole. Kao ćebe. To je EFEKAT STAKLENE BAŠTE.

I on je dobar! Bez njega bi prosečna temperatura na Zemlji bila oko −18 °C — sve pod ledom. Sa njim je oko +15 °C.

Problem nije efekat, nego koliko je ćebe debelo. Venera ima atmosferu skoro od samog ugljen-dioksida i na površini joj je oko 460 °C — toplija je od Merkura, iako je dalje od Sunca. O tome kako mi podebljavamo naše ćebe — sledeća lekcija.`,
pr:{p:'Kakva bi bila Zemlja bez prirodnog efekta staklene bašte?', o:['Toplija nego danas','Zaleđena — prosečno oko −18 °C','Ista kao danas'], t:1, z:'Gasovi kao vodena para i CO₂ zadržavaju toplotu; bez njih bi prosek bio oko −18 °C umesto +15 °C.'}},
{n:'Šta pokreće vreme', t:`Sunce ne greje Zemlju ravnomerno: ekvator dobija mnogo više nego polovi. Topao vazduh je lakši i diže se, hladan se spušta i struji na njegovo mesto — to je VETAR. Okretanje Zemlje skreće te struje, pa se vazduh vrti u ogromne vrtloge: cikloni (kiša) i anticikloni (vedro).

Voda je drugi motor: isparava, diže se, hladi, pretvara u kapljice — OBLAK — i pada kao kiša ili sneg.

A GODIŠNJA DOBA? Nisu zato što smo leti bliže Suncu. Zapravo, Zemlja je Suncu najbliža početkom januara! Godišnja doba postoje zato što je Zemljina osa NAGNUTA oko 23,5°. Leti je naša polulopta nagnuta ka Suncu — zraci padaju strmije i dan je duži. Zimi obrnuto. Zato je u Australiji Božić leti.`,
pr:{p:'Zašto postoje godišnja doba?', o:['Jer je Zemlja leti bliže Suncu','Zbog nagiba Zemljine ose','Zbog Meseca'], t:1, z:'Nagib ose (oko 23,5°) menja koliko strmo padaju zraci i koliko traje dan. Zemlja je Suncu najbliža baš u januaru.'}},
{n:'Okeani: toplotni akumulator', t:`Okeani pokrivaju oko 71% Zemlje i najveći su regulator klime.

• Upijaju ogromnu toplotu i dobar deo ugljen-dioksida koji pustimo u vazduh.
• Kreću se: morske struje rade kao pokretna traka koja nosi toplotu oko planete. GOLFSKA STRUJA nosi toplu vodu iz Meksičkog zaliva ka Evropi — zato je London mnogo topliji od mesta u Kanadi na istoj geografskoj širini.
• Na severu Atlantika voda se hladi, postaje teža (hladna je i slana), tone i kreće dubinama ka jugu. Ceo krug te duboke cirkulacije traje oko hiljadu godina.
• Sitni morski organizmi (fitoplankton) prave oko polovine kiseonika na planeti. Svaki drugi udah duguješ moru.`,
pr:{p:'Zašto je zapadna Evropa toplija od Kanade na istoj geografskoj širini?', o:['Zbog Golfske struje koja donosi toplu vodu','Zbog zaštite planina','Zbog veće nadmorske visine'], t:0, z:'Golfska struja nosi toplu vodu iz tropskih krajeva preko Atlantika ka Evropi.'}},
{n:'Vreme nije klima', t:`Ovo je jedna od najkorisnijih razlika u celoj školi.

• VREME je šta se dešava danas i ove nedelje: pada kiša, 12 °C, duva košava.
• KLIMA je prosek vremena kroz najmanje 30 godina: kakva je ovde obično zima, koliko obično padne kiše.

Kratko: „Klima je ono što očekuješ, a vreme je ono što dobiješ."

Zato jedna hladna zima ne dokazuje da nema zagrevanja, i jedan vreo dan ne dokazuje da ga ima. Klima se vidi tek u decenijama.

I zašto prognoza ne vredi posle desetak dana, a klimu ipak možemo da predvidimo? Atmosfera je HAOTIČNA: sitna razlika danas preraste u ogromnu za dve nedelje (meteorolog Lorenc je to nazvao „efekat leptira"). Ali to je kao kocka: ne znaš koji broj će pasti u sledećem bacanju, a znaš prosek iz hiljadu bacanja.`,
pr:{p:'Ova zima je bila neuobičajeno hladna. Šta to govori o klimi?', o:['Da nema globalnog zagrevanja','Skoro ništa — klima je prosek kroz decenije','Da dolazi novo ledeno doba'], t:1, z:'Jedna sezona je vreme, ne klima. Klima se vidi tek u prosecima kroz 30 i više godina.'}}
],
kljucno:['Atmosfera je tanka: azot 78%, kiseonik 21%, CO₂ oko 0,04%; ozon nas štiti od UV zračenja.','Prirodni efekat staklene bašte drži Zemlju na +15 °C umesto −18 °C.','Vreme pokreću nejednako grejanje i voda; godišnja doba su zbog nagiba ose.','Okeani čuvaju toplotu i CO₂, nose toplotu strujama i daju oko pola kiseonika.','Vreme je danas, klima je prosek decenija; prognoza je ograničena jer je atmosfera haotična.'],
kartice:[
{p:'Koja je razlika između vremena i klime?', o:'Vreme je stanje danas; klima je prosek kroz 30+ godina.'},
{p:'Šta je efekat staklene bašte?', o:'Gasovi (vodena para, CO₂, metan) zadržavaju deo toplote koju Zemlja zrači.'},
{p:'Zašto postoje godišnja doba?', o:'Zbog nagiba Zemljine ose od oko 23,5°.'},
{p:'Šta radi Golfska struja?', o:'Nosi toplu vodu ka Evropi i greje je.'},
{p:'Ko pravi oko polovine kiseonika na Zemlji?', o:'Fitoplankton u okeanima.'}
],
razgovor:['„Klima je ono što očekuješ, vreme je ono što dobiješ." Da li to važi i za ljude — gde?','Objasni nekome zašto postoje godišnja doba, a da ne kažeš „bliže Suncu".']},

{id:'2-4', naslov:'Klimatske promene — šta je dokazano, a šta sporno',
kuka:{p:'Koliko se Zemlja zagrejala od kraja 19. veka?', o:['Oko 0,1 °C','Oko 1,2–1,3 °C','Oko 5 °C'], t:1},
delovi:[
{n:'Šta je izmereno', t:`Krenimo od onoga što se ne tumači, nego meri:

• TEMPERATURA. Termometri na kopnu i moru, sateliti i plutače u okeanima pokazuju isto: svet je danas za oko 1,2–1,3 °C topliji nego krajem 19. veka. 2024. je bila prva cela godina oko 1,5 °C iznad tog nivoa.
• UGLJEN-DIOKSID. Pre industrije vazduh je imao oko 280 delova na milion, danas oko 420. Na vulkanu Mauna Loa na Havajima meri se svakog dana od 1958. — ta kriva samo raste.
• LED I MORE. Glečeri se povlače skoro svuda, led na Arktiku leti je mnogo tanji, a nivo mora je od 1900. porastao oko 20 cm.
• EKSTREMI. Toplotni talasi su češći i jači.

Oko ovoga nema ozbiljne naučne rasprave. To su merenja.`,
pr:{p:'Koliko je ugljen-dioksida bilo u vazduhu pre industrije, a koliko danas?', o:['Oko 280, danas oko 420 delova na milion','Isto kao danas','Oko 1.000, danas manje'], t:0, z:'Sa oko 280 na oko 420 delova na milion — porast od blizu polovine, izmeren direktno.'}},
{n:'Kako znamo da smo to mi', t:`Da se Zemlja greje — izmereno je. Da smo uzrok mi — to se zaključuje, ali iz više nezavisnih tragova:

1. FIZIKA JE STARA. Džon Tindal je još 1859. u laboratoriji pokazao da CO₂ zadržava toplotu. Šveđanin Arenijus je 1896. izračunao da će spaljivanje uglja zagrejati planetu. To nije nova ideja.
2. POTPIS. Ugljenik iz uglja, nafte i gasa ima svoj hemijski otisak (drugačiji odnos „lakih" i „teških" atoma ugljenika). Taj otisak raste u vazduhu — višak CO₂ je iz fosilnih goriva.
3. NIJE SUNCE. Sateliti mere Sunce od kraja 1970-ih — nije postalo jače.
4. OBRAZAC. Donji sloj atmosfere se greje, a stratosfera iznad hladi. Tako izgleda deblje ćebe gasova, a ne jače Sunce (ono bi grejalo sve slojeve).`,
pr:{p:'Šta pokazuje da višak CO₂ u vazduhu dolazi od fosilnih goriva?', o:['Njegov hemijski potpis u vazduhu','Boja neba','To niko ne zna'], t:0, z:'Ugljenik iz fosilnih goriva ima prepoznatljiv odnos vrsta atoma, i baš taj otisak raste u vazduhu.'}},
{n:'„Klima se uvek menjala"', t:`To je tačno. Bilo je ledenih doba i toplijih perioda. Zemlja ulazi u ledena doba i izlazi iz njih zbog sporih promena svoje putanje oko Sunca, u ciklusima od oko 100.000 godina.

Ali dve stvari su sada drugačije:

1. BRZINA. Na izlazu iz poslednjeg ledenog doba temperatura je rasla nekoliko stepeni kroz hiljade godina. Sada se 1,2 °C desilo za oko 150 godina — desetinama puta brže.
2. UZROK. Za prirodne promene postoji prirodan uzrok. Sada su prirodni uzroci (Sunce, putanja, vulkani) provereni i ne objašnjavaju porast; CO₂ objašnjava.

Poređenje: šumski požari se dešavaju i prirodno, od munje. To ne znači da nijedan požar nije podmetnut. Pitanje je šta je izazvalo baš ovaj.`,
pr:{p:'„Klima se uvek menjala." Šta je tačan odgovor?', o:['Tačno, pa je i sadašnja promena prirodna','Tačno, ali je sadašnja promena mnogo brža i ima poznat uzrok','Netačno, klima se nikad nije menjala'], t:1, z:'Prirodne promene su postojale, ali su bile mnogo sporije; za sadašnju su prirodni uzroci provereni i ne objašnjavaju je.'}},
{n:'Šta je zaista sporno', t:`Pošteno je reći i gde se naučnici spore, i gde je neizvesnost stvarna:

• KOLIKO TAČNO. Koliko će se Zemlja zagrejati kad se CO₂ udvostruči? Najverovatnije između 2,5 i 4 °C. Gornja i donja granica su važne i nisu zakucane.
• PRELOMNE TAČKE. Da li i kada bi se ledeni pokrivač Grenlanda ili prašuma Amazona mogli „prelomiti" i nastaviti da se menjaju sami od sebe — tu je neizvesnost velika.
• LOKALNO. Koji region dobija sušu, a koji poplave — teže je predvideti nego globalni prosek.
• ŠTA RADITI I KO PLAĆA. Ovo je najveća rasprava, ali ona nije naučna nego politička i ekonomska: koliko brzo menjati energetiku, ko snosi troškove, bogate ili siromašne zemlje.

Česta greška u raspravama: kad je „rešenje sporno", ljudi kažu „nauka je sporna". To nisu iste stvari.`,
pr:{p:'Šta je najviše sporno u vezi sa klimatskim promenama?', o:['Da li se Zemlja uopšte greje','Šta tačno uraditi i ko to plaća','Da li CO₂ zadržava toplotu'], t:1, z:'Zagrevanje i fizika CO₂ su izmereni; najveći spor je politički i ekonomski — šta raditi i ko snosi troškove.'}},
{n:'Šta to znači ovde', t:`Evropa se greje brže od svetskog proseka, a Balkan to već oseća:

• toplotni talasi duži i češći,
• sušna leta koja seku useve i spuštaju reke,
• ali i jake kiše odjednom — poplave u maju 2014. bile su najgore u zabeleženoj istoriji Srbije.

Između „smak sveta" i „sve je izmišljeno" stoji dosadna, ali tačna sredina: to je STVARAN RIZIK KOJIM SE MOŽE UPRAVLJATI. Dva načina:
1. SMANJIVANJE — manje sagorevanja uglja, nafte i gasa (struja, grejanje, saobraćaj).
2. PRILAGOĐAVANJE — bolje upravljanje vodom, gradnja koja izdrži vrućinu, otpornije sorte u poljoprivredi.

Kao i kod zdravlja: ni panika ni poricanje ne leče, leče merenje i razumne odluke.`,
pr:{p:'Kako se Evropa greje u odnosu na svetski prosek?', o:['Sporije','Brže','Uopšte se ne greje'], t:1, z:'Evropa je kontinent koji se greje najbrže — zato su toplotni talasi i suše na Balkanu već primetni.'}}
],
kljucno:['Izmereno: zagrevanje oko 1,2–1,3 °C, CO₂ sa 280 na 420 ppm, led se topi, more raste.','Da smo uzrok mi: stara fizika CO₂, hemijski potpis fosilnih goriva, Sunce nije jače, obrazac slojeva.','Klima se i ranije menjala, ali mnogo sporije i sa prirodnim uzrokom.','Sporno je koliko tačno, prelomne tačke, lokalni uticaji — i najviše šta raditi i ko plaća.','Rizik kojim se upravlja: smanjivanje emisija i prilagođavanje.'],
kartice:[
{p:'Koliko se Zemlja zagrejala od kraja 19. veka?', o:'Oko 1,2–1,3 °C.'},
{p:'Koliko je CO₂ bilo pre industrije, a koliko danas?', o:'Oko 280 → oko 420 delova na milion.'},
{p:'Navedi dva dokaza da smo mi uzrok zagrevanja.', o:'Hemijski potpis fosilnih goriva u CO₂; Sunce nije jače (i stratosfera se hladi).'},
{p:'Šta je pravi odgovor na „klima se uvek menjala"?', o:'Tačno, ali sadašnja promena je mnogo brža i ima poznat uzrok.'},
{p:'Koja dva načina postoje za odgovor na klimatske promene?', o:'Smanjivanje emisija i prilagođavanje.'}
],
razgovor:['Kako razlikuješ „nauka je sporna" od „rešenje je sporno" u nekoj raspravi koju si čuo — o klimi ili bilo čemu drugom?','Šta bi kratko odgovorio nekome ko kaže: „klima se uvek menjala, ovo je sve politika"?']},

{id:'2-5', naslov:'Resursi — voda, energija, hrana, sirovine',
kuka:{p:'Koliki deo sve vode na Zemlji je slatka voda koju ljudi lako mogu da koriste?', o:['Oko 30%','Oko 10%','Manje od 1%'], t:2},
delovi:[
{n:'Voda', t:`Zemlja je „plava planeta", ali:
• 97,5% vode je slano.
• Od ono malo slatke, većina je zarobljena u ledu i duboko pod zemljom.
• Ljudima lako dostupno — reke, jezera, plitka podzemna voda — ostaje MANJE OD 1%.

Ko je troši? Najviše POLJOPRIVREDA — oko 70% slatke vode u svetu ide na navodnjavanje.

Postoji i „skrivena voda" u stvarima: za kilogram govedine potroši se oko 15.000 litara vode (za hranu stoke), a za šoljicu kafe oko 130 litara.

Problem retko je to što vode „nema" na planeti. Problem je gde je, kad je ima, i koliko je zagađena.`,
pr:{p:'Ko troši najviše slatke vode u svetu?', o:['Domaćinstva','Industrija','Poljoprivreda'], t:2, z:'Oko 70% slatke vode ide na navodnjavanje i poljoprivredu.'}},
{n:'Energija', t:`Oko 80% energije koju svet troši i danas dolazi iz FOSILNIH GORIVA: nafte, uglja i gasa.

Šta su ona zapravo? Sunčeva energija iz davnih vremena. Biljke i sitni morski organizmi su pre više miliona godina fotosintezom uhvatili sunčevu svetlost, zatrpani su, a pritisak i toplota su ih pretvorili u ugalj, naftu i gas. Kad sipaš gorivo, spaljuješ drevnu sunčevu svetlost — i puštaš ugljenik koji je bio zaključan milionima godina.

Srbija oko dve trećine struje dobija iz LIGNITA (Kolubara, Kostolac) — jeftino, ali prljavo.

Ostali izvori:
• OBNOVLJIVI — sunce, vetar, voda. Struja iz sunca i vetra je danas u mnogim zemljama najjeftiniji novi izvor, ali zavisi od vremena, pa traži skladištenje.
• NUKLEARNA — bez CO₂ i stalna, ali sa otpadom, skupom gradnjom i velikim strahom javnosti.`,
pr:{p:'Šta su, u suštini, fosilna goriva?', o:['Sunčeva energija uskladištena u ostacima organizama pre više miliona godina','Gorivo koje Zemlja stalno pravi u jezgru','Ostaci dinosaurusa'], t:0, z:'Uglavnom ostaci biljaka i sitnih morskih organizama koji su nekad uhvatili sunčevu energiju. (Dinosaurusi su tu zabluda.)'}},
{n:'Hrana', t:`Danas svet proizvodi više hrane po čoveku nego ikad u istoriji. Kako?

ZELENA REVOLUCIJA (1950–1970): nove, rodnije sorte pšenice i pirinča (Norman Borlaug, Nobelova nagrada za mir), navodnjavanje i — pre svega — VEŠTAČKO ĐUBRIVO.

Ključ je HABER-BOŠ postupak (početak 20. veka): azot se uzima direktno iz vazduha i pretvara u đubrivo. Procenjuje se da bez njega skoro polovina ljudi danas ne bi imala šta da jede. Malo koji izum je toliko promenio svet, a malo ko je čuo za njega.

Ako hrane ima dovoljno, zašto i dalje postoji glad? Uglavnom zbog RATA, SIROMAŠTVA i RASPODELE — ne zbog manjka. Istovremeno se oko trećine proizvedene hrane baci ili pokvari.`,
pr:{p:'Šta radi Haber-Boš postupak?', o:['Pravi veštačko đubrivo od azota iz vazduha','Čisti vodu za piće','Pravi gorivo od biljaka'], t:0, z:'Uzima azot iz vazduha i pretvara ga u đubrivo — temelj današnje proizvodnje hrane.'}},
{n:'Sirovine', t:`Sve što koristiš je negde iskopano.

• METALI: gvožđe (čelik), bakar (žice — Bor je bakar), aluminijum, a sve više LITIJUM i kobalt za baterije telefona i električnih auta.
• PESAK: posle vode, najviše korišćena sirovina na svetu — od njega je beton, staklo, čipovi. Nije svaki pesak dobar: pustinjski je previše gladak za beton, pa se pesak vadi iz reka i mora.
• RETKI ELEMENTI: za magnete, motore, elektroniku. Najviše ih vadi i prerađuje Kina — zato su sirovine i geopolitika (oblast 9).

Srbija ima svoja sporna pitanja: rudnik litijuma u dolini Jadra deli ljude na one koji gledaju posao i novac i one koji gledaju vodu i zemlju. U ovoj lekciji važno je samo da vidiš da je to pitanje o resursima: šta dobijaš, šta gubiš, i ko odlučuje.`,
pr:{p:'Koja sirovina se, posle vode, najviše koristi na svetu?', o:['Nafta','Pesak','Gvožđe'], t:1, z:'Pesak i šljunak — za beton, staklo i elektroniku. I nije svaki pesak upotrebljiv.'}},
{n:'Hoće li nestati?', t:`1798. sveštenik Tomas Maltus je predvideo: stanovništvo raste brže od proizvodnje hrane, pa će glad uvek vraćati broj ljudi nazad. Pogrešio je — nije predvideo koliko će tehnologija povećati prinose.

Ali pitanje je ostalo, i postoje dve škole:

• PESIMISTI: resursi su ograničeni, a rast beskonačan — negde se mora udariti u zid (knjiga „Granice rasta", 1972).
• OPTIMISTI: najveći resurs je ljudska domišljatost; kad nečega ponestane, poskupi, pa se nađe zamena. Ekonomista Džulijan Sajmon se 1980. kladio sa biologom Erlihom da će pet metala za deset godina pojeftiniti, a ne poskupeti — i dobio je.

Istina je verovatno između: tehnologija rešava mnogo — hranu, energiju, sirovine — ali ne sve. Ribe u moru, plodno zemljište i klima ne mogu se „izmisliti" nanovo.`,
pr:{p:'Zašto se Maltusovo predviđanje o gladi nije ostvarilo?', o:['Jer je stanovništvo prestalo da raste','Jer je tehnologija višestruko povećala proizvodnju hrane','Jer su ljudi počeli manje da jedu'], t:1, z:'Đubrivo, nove sorte i mašine povećali su prinose brže od rasta stanovništva — što Maltus nije mogao da predvidi.'}}
],
kljucno:['Manje od 1% vode je lako dostupna slatka voda; najviše troši poljoprivreda.','Oko 80% energije je iz fosilnih goriva — drevne sunčeve energije; obnovljivi rastu.','Hrane ima više nego ikad (Zelena revolucija, Haber-Boš); glad je pitanje rata i raspodele.','Sve je iskopano negde: metali, pesak, retki elementi — sirovine su i geopolitika.','Pesimisti vs. optimisti: tehnologija rešava mnogo, ali ne sve.'],
kartice:[
{p:'Koliki deo vode je lako dostupna slatka voda?', o:'Manje od 1%.'},
{p:'Odakle svet dobija većinu energije?', o:'Oko 80% iz fosilnih goriva (nafta, ugalj, gas).'},
{p:'Šta je Haber-Boš postupak?', o:'Pravljenje veštačkog đubriva od azota iz vazduha.'},
{p:'Zašto je pesak važna sirovina?', o:'Od njega su beton, staklo i čipovi; posle vode najviše se koristi.'},
{p:'Šta je Maltus predvideo i zašto je pogrešio?', o:'Da će glad zaustavljati rast stanovništva; tehnologija je povećala proizvodnju hrane.'}
],
razgovor:['Ko ti je bliži — pesimisti („granice postoje") ili optimisti („ljudi uvek nađu rešenje")? Zašto?','Navedi jednu stvar u kući koju svakodnevno trošiš, a nikad ne pomisliš odakle dolazi. Odakle dolazi?']}
]},
{id:'3', naziv:'Život', ikona:'🧬', era:'pre 3,8 mlrd god.', lekcije:[
{id:'3-1', naslov:'Šta je život — ćelija',
kuka:{p:'Otprilike koliko ćelija ima ljudsko telo?', o:['Oko milion','Oko 7 milijardi','Oko 30.000 milijardi'], t:2},
delovi:[
{n:'Šta uopšte znači „živo"', t:`Zvuči lako, ali nauka nema savršenu definiciju života. NASA koristi radnu: život je hemijski sistem koji sam sebe održava i može da evoluira.

Lakše je nabrojati šta živo radi:
• troši energiju i pretvara materiju (METABOLIZAM),
• raste i obnavlja se,
• razmnožava se,
• reaguje na okolinu,
• prenosi osobine na potomke — sa sitnim promenama.

Granični slučaj su VIRUSI. Imaju gene i menjaju se, ali sami ne troše energiju i ne mogu da se razmnože — moraju da uđu u ćeliju i iskoriste njenu „fabriku". Da li su živi? Biolozi se i danas spore. Dobar je primer da priroda ne mora da poštuje naše kutije.`,
pr:{p:'Zašto se za viruse kaže da su na granici života?', o:['Jer su premali da bi se videli','Jer sami ne troše energiju i ne mogu da se razmnože bez ćelije','Jer nemaju gene'], t:1, z:'Imaju gene i menjaju se, ali bez tuđe ćelije ne mogu ni da se „hrane" ni da se razmnože.'}},
{n:'Ćelija — najmanje živo', t:`1665. Englez Robert Huk je pod jednim od prvih mikroskopa gledao komadić plute i video sitne odaje. Podsetile su ga na sobice monaha — „ćelije". Ime je ostalo.

Dvesta godina kasnije, oko 1840–1850, sklopljena je ĆELIJSKA TEORIJA:
1. Sva živa bića su sastavljena od ćelija.
2. Ćelija je najmanja jedinica života.
3. Svaka ćelija nastaje samo iz druge ćelije.

Svaka ćelija ima MEMBRANU — tanak omotač koji bira šta ulazi, a šta izlazi. Unutra je voda puna proteina i drugih molekula, i DNK, recept po kome ćelija radi.

Telo odraslog čoveka ima oko 30.000 milijardi ćelija, oko 200 vrsta (nervne, mišićne, krvne, koštane…) — i otprilike isto toliko bakterija koje žive u tebi, najviše u crevima.`,
pr:{p:'Šta kaže ćelijska teorija?', o:['Sva živa bića su od ćelija, a svaka ćelija nastaje iz druge ćelije','Ćelije nastaju same iz neživih materija','Samo životinje imaju ćelije'], t:0, z:'Sve živo je od ćelija, ćelija je najmanja jedinica života i nastaje samo iz druge ćelije.'}},
{n:'Dve vrste ćelija', t:`Sve ćelije na Zemlji spadaju u dve velike grupe:

• PROKARIOTI — bakterije i arheje. Male, jednostavne, bez jedra; DNK im slobodno pliva. Bili su prvi i milijardama godina jedini.
• EUKARIOTI — biljke, životinje, gljive. Veće ćelije sa JEDROM (u kom čuvaju DNK) i sa „organima" ćelije.

Najzanimljiviji organ ćelije su MITOHONDRIJE — elektrane koje od hrane i kiseonika prave energiju. Imaju sopstvenu, malu DNK. Zašto? Zato što su nekada bile slobodne bakterije! Pre oko dve milijarde godina jedna ćelija je progutala bakteriju, ali je nije svarila — dve su počele da žive zajedno. Tu ideju je izborila Lin Margulis, kojoj su se dugo smejali.

Kad dišeš, hraniš potomke drevnih bakterija koje žive u tvojim ćelijama.`,
pr:{p:'Odakle, najverovatnije, potiču mitohondrije?', o:['Iz jedra ćelije','Od bakterija koje su nekad živele samostalno','Iz hrane koju jedemo'], t:1, z:'Imaju svoju DNK jer su nekad bile slobodne bakterije koje je druga ćelija progutala i zadržala.'}},
{n:'Kako ćelija radi', t:`Zamisli ćeliju kao grad:

• MEMBRANA — zidine sa kapijama.
• JEDRO — arhiva u kojoj stoje planovi (DNK).
• RIBOZOMI — fabrike koje po planovima prave proizvode.
• PROTEINI — radnici i alati. Skoro sav posao u ćeliji obavljaju proteini: ubrzavaju reakcije (ENZIMI), grade, prenose poruke (hormoni), brane (antitela), pomeraju (mišići).
• MITOHONDRIJE — elektrane.
• ATP — novac kojim se plaća svaki posao. Ćelija ga stalno pravi i troši.

Ti, sada, dok čitaš: u svakoj tvojoj ćeliji hiljade proteina rade svoj posao, a ti ni za jedan ne znaš.`,
pr:{p:'Šta su proteini u ćeliji?', o:['Samo rezerva hrane','Radnici i alati koji obavljaju skoro sve poslove','Omotač ćelije'], t:1, z:'Proteini su enzimi, gradivni delovi, prenosioci poruka, antitela — skoro sav posao ćelije.'}},
{n:'Kako je počelo?', t:`Kako je od nežive hemije nastala prva ćelija? Iskreno: NE ZNAMO TAČNO. To je jedna od najvećih otvorenih tajni nauke. Ali ima tragova:

• 1953. Stenli Miler i Harold Juri su u staklenu posudu stavili gasove kakvi su verovatno bili na mladoj Zemlji, dodali vodu i električne varnice kao munje. Za nekoliko dana nastale su AMINOKISELINE — gradivni delovi proteina. Život nisu napravili, ali su pokazali da se njegovi sastojci prave sami.
• Hipoteza „RNK sveta": rani molekul RNK je mogao istovremeno da nosi informaciju i da ubrzava reakcije — i kokoška i jaje u jednom.
• Mesto rođenja možda su vrući izvori na dnu okeana, gde je bilo energije i minerala.

Najstariji pouzdani tragovi života su stari oko 3,5 milijarde godina — što znači da je život počeo „brzo", čim se Zemlja smirila.`,
pr:{p:'Šta je pokazao eksperiment Milera i Jurija?', o:['Da su napravili živu ćeliju','Da se gradivni delovi života mogu sami stvoriti u uslovima rane Zemlje','Da je život došao iz svemira'], t:1, z:'Iz gasova, vode i varnica nastale su aminokiseline — sastojci života, ne i sam život.'}}
],
kljucno:['Život nema savršenu definiciju; virusi su granični slučaj.','Ćelijska teorija: sve živo je od ćelija, svaka ćelija nastaje iz ćelije.','Prokarioti (bakterije) nemaju jedro; eukarioti imaju; mitohondrije su nekad bile bakterije.','Proteini obavljaju skoro sav posao u ćeliji; ATP je njen „novac".','Kako je život počeo ne znamo tačno; sastojci se prave sami (Miler–Juri).'],
kartice:[
{p:'Zašto su virusi na granici života?', o:'Sami ne troše energiju i ne razmnožavaju se bez ćelije domaćina.'},
{p:'Šta kaže ćelijska teorija?', o:'Sve živo je od ćelija; svaka ćelija nastaje iz druge ćelije.'},
{p:'Razlika između prokariota i eukariota?', o:'Prokarioti (bakterije) nemaju jedro; eukarioti (biljke, životinje, gljive) imaju.'},
{p:'Odakle potiču mitohondrije?', o:'Od bakterija koje je druga ćelija davno progutala i zadržala.'},
{p:'Šta je pokazao eksperiment Milera i Jurija?', o:'Da gradivni delovi života (aminokiseline) nastaju sami u uslovima rane Zemlje.'}
],
razgovor:['Da li je virus živ? Zauzmi stav i odbrani ga.','Ćelija kao grad — smisli svoju sliku ćelije iz svog sveta (posao, kuća, smena).']},

{id:'3-2', naslov:'DNK i geni — recept za organizam',
kuka:{p:'Koliko DNK deliš sa šimpanzom?', o:['Oko 50%','Oko 75%','Oko 98–99%'], t:2},
delovi:[
{n:'Zavojnica sa četiri slova', t:`1953. Džejms Votson i Frensis Krik su objavili oblik DNK: DVOSTRUKA ZAVOJNICA, kao uvrnute merdevine. Ključni snimak, napravljen rendgenskim zracima, dobili su od Rozalind Frenklin, kojoj se zasluga dugo nije priznavala.

DNK je zapis pisan azbukom od samo ČETIRI SLOVA: A, T, G i C. Na merdevinama se uvek sparuju isto: A sa T, G sa C. Zato kad se merdevine rasparaju po sredini, svaka polovina je kalup za novu — tako se DNK kopira kad se ćelija deli.

Tvoj zapis (GENOM) ima oko 3 milijarde slova. Odštampan, bio bi biblioteka od hiljadu debelih knjiga. Gotovo svaka tvoja ćelija nosi ceo komplet, a kad bi se DNK jedne ćelije razvukla, bila bi duga oko 2 metra.`,
pr:{p:'Koliko „slova" ima azbuka DNK?', o:['2','4','20'], t:1, z:'Četiri: A, T, G i C; sparuju se A–T i G–C.'}},
{n:'Gen: jedan recept', t:`GEN je deo DNK koji je recept za jedan protein (ponekad za nekoliko). Ćelija čita recept u dva koraka:
1. PREPIS: deo DNK se prepiše u poruku od RNK.
2. PREVOD: ribozom čita poruku po tri slova i za svaku trojku dodaje jednu aminokiselinu. Lanac aminokiselina se savije u protein.

Čovek ima oko 20.000 gena — mnogo manje nego što se mislilo pre nego što je genom pročitan 2003. Pirinač ih ima više! Razlika nije u broju recepata, nego u tome kada, gde i koliko se koji pali — ostatak DNK su velikim delom prekidači i regulatori.

I jedna velika stvar: KOD JE ISTI za skoro sav život. Ista trojka znači istu aminokiselinu kod bakterije, pečurke i tebe. Zato bakterija može da pravi ljudski insulin za dijabetičare — i zato je to jedan od najjačih dokaza da sav život ima zajedničkog pretka.`,
pr:{p:'Koliko otprilike gena ima čovek?', o:['Oko 20.000','Oko 2 miliona','Oko 500'], t:0, z:'Oko 20.000 — manje od pirinča. Složenost dolazi od toga kako se geni pale i gase.'}},
{n:'Nasleđivanje — Mendelov grašak', t:`Pravila nasleđivanja otkrio je 1860-ih Gregor Mendel, monah koji je u manastirskoj bašti ukrštao grašak. Niko ga nije čitao 35 godina.

Šta je video:
• Osobine se prenose kao celine, ne mešaju se kao boje.
• Od svakog roditelja dobijaš PO JEDNU kopiju gena.
• Neke kopije su DOMINANTNE (pokažu se i kad imaš samo jednu), druge RECESIVNE (pokažu se samo kad imaš dve).

Zato dvoje roditelja sa smeđim očima može dobiti dete plavih očiju: oboje nose skrivenu „plavu" kopiju i oboje je predaju detetu. (Boja očiju je u stvarnosti složenija i zavisi od više gena, ali princip je isti.)

Polovinu gena dobiješ od majke, polovinu od oca. Braća i sestre dele, u proseku, polovinu.`,
pr:{p:'Kako dvoje smeđookih roditelja mogu dobiti plavooko dete?', o:['Nikako, to je nemoguće','Oboje nose skrivenu (recesivnu) kopiju i oboje je predaju detetu','Boja očiju se ne nasleđuje'], t:1, z:'Recesivna kopija se ne vidi kod roditelja, ali kad dete dobije dve takve — pokaže se.'}},
{n:'Mutacije — greške u prepisu', t:`Kad se 3 milijarde slova kopira, desi se poneka greška. To je MUTACIJA. Svako dete se rodi sa nekoliko desetina novih mutacija kojih nema ni kod jednog roditelja.

• Većina mutacija ne radi ništa primetno.
• Neke su štetne — uzrok su naslednih bolesti ili raka.
• Retke su korisne — npr. mutacija koja odraslima omogućava da vare mleko proširila se u narodima koji su gajili stoku.

Mutacije nastaju nasumično, a pospešuju ih zračenje i neke hemikalije (dim cigarete, recimo).

Za evoluciju, mutacije su SIROVINA — izvor svake nove razlike. Bez grešaka u prepisu, život bi stajao u mestu.`,
pr:{p:'Šta su mutacije za evoluciju?', o:['Uvek štetne greške','Sirovina — izvor novih razlika','Nešto što se dešava samo od zračenja'], t:1, z:'Većina je neutralna, neke štetne, retke korisne — ali bez njih ne bi bilo novih osobina.'}},
{n:'Geni nisu sudbina', t:`Popularno je reći „to mu je u genima". Istina je složenija.

Većina osobina — visina, težina, sklonost bolestima srca, pa i inteligencija i temperament — zavisi i od GENA i od SREDINE: ishrane, navika, iskustva, slučaja. Jednojajčani blizanci imaju istu DNK, a postaju različiti ljudi.

Postoje i hemijski „prekidači" na DNK koji pale i gase gene, a na neke utiče sredina (EPIGENETIKA). Oprez: u popularnim tekstovima se o ovome mnogo preteruje.

I sad smo naučili da DNK i MENJAMO. CRISPR (2012, Nobelova nagrada 2020. Šarpentje i Dudni) su molekularne makaze koje seku DNK na tačno izabranom mestu. Već postoji odobreno lečenje jedne nasledne bolesti krvi. Ali 2018. u Kini je jedan naučnik menjao DNK embrionima — i završio u zatvoru. Moć je stigla pre dogovora šta sme.`,
pr:{p:'Šta je CRISPR?', o:['Bolest gena','Alat za precizno menjanje DNK','Vrsta ćelije'], t:1, z:'Molekularne makaze koje seku DNK na izabranom mestu — za lečenje, ali i sa velikim etičkim pitanjima.'}}
],
kljucno:['DNK je dvostruka zavojnica sa azbukom od 4 slova (A–T, G–C); genom ima oko 3 milijarde slova.','Gen je recept za protein: DNK → RNK → protein; kod je isti za skoro sav život.','Mendel: od svakog roditelja po jedna kopija; dominantno i recesivno.','Mutacije su greške u prepisu — uglavnom neutralne, a sirovina evolucije.','Geni nisu sudbina: osobine zavise i od sredine; CRISPR omogućava menjanje DNK.'],
kartice:[
{p:'Koja su četiri slova DNK i kako se sparuju?', o:'A, T, G, C; A sa T, G sa C.'},
{p:'Kojim putem gen postaje protein?', o:'DNK → (prepis) RNK → (prevod) protein.'},
{p:'Zašto je isti genetski kod dokaz zajedničkog porekla?', o:'Ista trojka slova znači istu aminokiselinu kod skoro svih živih bića.'},
{p:'Šta je recesivna osobina?', o:'Osobina koja se pokaže samo kad imaš dve takve kopije gena.'},
{p:'Šta je CRISPR?', o:'Alat za precizno sečenje i menjanje DNK.'}
],
razgovor:['Koliko misliš da je tvoj karakter od gena, a koliko od života koji si proživeo? Daj primer na sebi.','Objasni nekome put od DNK do proteina jednom slikom iz svakodnevice.']},

{id:'3-3', naslov:'Evolucija prirodnom selekcijom',
kuka:{p:'Šta je zapravo tvrdio Darvin?', o:['Da čovek potiče od šimpanze','Da sva živa bića imaju zajedničke pretke i menjaju se prirodnom selekcijom','Da uvek pobeđuje najjači'], t:1},
delovi:[
{n:'Putovanje i knjiga', t:`1831. mladi Čarls Darvin se ukrcao na brod Bigl kao prirodnjak na putovanje oko sveta koje je trajalo pet godina.

Na ostrvima Galapagos video je zebe (ptičice) koje su na svakom ostrvu imale drugačiji kljun — debeo za tvrdo seme, tanak za insekte. Kao da je jedna vrsta stigla na ostrva pa se na svakom prilagodila drugačije.

Darvin je posle toga 20 godina skupljao dokaze, oklevao i ćutao, svestan koliko je ideja opasna. Požurio ga je pismo mladog prirodnjaka Alfreda Rasela Volasa, koji je u Indoneziji sam došao do iste ideje. Predstavili su je zajedno 1858, a 1859. je izašla Darvinova knjiga „O POREKLU VRSTA".`,
pr:{p:'Ko je, nezavisno od Darvina, došao do iste ideje?', o:['Gregor Mendel','Alfred Rasel Volas','Isak Njutn'], t:1, z:'Volas je do iste ideje došao u Indoneziji; predstavili su je zajedno 1858.'}},
{n:'Mehanizam u tri sastojka', t:`PRIRODNA SELEKCIJA traži samo tri stvari:

1. RAZLIKE. Jedinke iste vrste se razlikuju — po veličini, boji, brzini, otpornosti.
2. NASLEĐIVANJE. Deo tih razlika se prenosi na potomke (danas znamo: kroz gene).
3. VIŠAK POTOMAKA. Rađa se više nego što može da preživi i da se razmnoži.

Ishod: oni čije razlike slučajno bolje odgovaraju sredini češće prežive i ostave više potomaka. Generacija za generacijom, korisne osobine postaju češće. Kroz dovoljno vremena — nove vrste.

Ključne stvari: NEMA CILJA i NEMA PLANA. Ništa ne „pokušava" da postane bolje. I „preživljavanje najsposobnijih" ne znači najjačih: „sposoban" ovde znači NAJBOLJE PRILAGOĐEN toj sredini, onaj koji ostavi najviše potomaka. Ponekad je to najmanji, najsporiji ili najprikriveniji.`,
pr:{p:'Šta u evoluciji znači „najsposobniji"?', o:['Najjači','Najbolje prilagođen da u toj sredini preživi i ostavi potomke','Najpametniji'], t:1, z:'„Sposoban" znači uspešan u ostavljanju potomaka u datoj sredini — ne snaga.'}},
{n:'Evolucija pred očima', t:`Evolucija nije samo daleka prošlost. Vidimo je:

• BAKTERIJE I ANTIBIOTICI. Kad uzmeš antibiotik, većina bakterija umre, ali par otpornijih preživi. Ako prekineš lečenje ranije, baš one se namnože — i sledeći put lek ne deluje. Zato se pije ceo ciklus. Otporne bakterije su danas jedan od najvećih problema medicine.
• BREZOV MOLJAC. U Engleskoj su pre industrije preovlađivali svetli moljci, neprimetni na svetloj kori breze. Kad je čađ iz fabrika zacrnela drveće, za nekoliko decenija preovladali su tamni — svetle su ptice lakše videle. Kad je vazduh očišćen, vratili su se svetli.
• PAS. Svi psi, od čivave do doge, potiču od vuka. To je VEŠTAČKA SELEKCIJA — mi smo birali ko se razmnožava. Za par hiljada godina dobili smo ogromne razlike. Zamisli šta priroda može za milione.`,
pr:{p:'Zašto treba popiti ceo ciklus antibiotika?', o:['Da bi lek bio jeftiniji','Da ne bi preživele i namnožile se otpornije bakterije','Jer je tako ukusnije'], t:1, z:'Prekid lečenja ostavlja baš najotpornije bakterije — to je prirodna selekcija na delu.'}},
{n:'Dokazi', t:`Evoluciju potvrđuje nekoliko potpuno nezavisnih vrsta dokaza:

• FOSILI. Slojevi stena pokazuju redosled, a nađeni su i prelazni oblici: Tiktaalik, riba sa zglobovima kao noge, pre oko 375 miliona godina; arheopteriks, dinosaurus sa perjem i krilima.
• GRAĐA TELA. Ruka čoveka, krilo slepog miša, peraje kita i noga mačke imaju ISTE kosti u istom rasporedu, samo drugačije oblikovane. Inženjer to ne bi tako napravio; nasledstvo bi.
• DNK. Što su vrste bliže po fosilima i građi, to su im sličnije DNK. Drvo srodstva napravljeno iz DNK se slaže sa drvetom iz fosila.
• POSMATRANJE. Bakterije, virusi, insekti otporni na pesticide — menjaju se pred nama.

Kada se toliko nezavisnih tragova slaže, to je u nauci najjači mogući dokaz.`,
pr:{p:'Šta je zajedničko ruci čoveka, krilu slepog miša i peraju kita?', o:['Ništa','Isti raspored kostiju, nasleđen od zajedničkog pretka','Svi služe za plivanje'], t:1, z:'Iste kosti, različito oblikovane — trag zajedničkog pretka.'}},
{n:'Česte zablude', t:`• „TO JE SAMO TEORIJA." U svakodnevnom govoru teorija znači nagađanje. U nauci znači suprotno: dobro proveren sistem objašnjenja koji povezuje ogroman broj činjenica. I gravitacija je „teorija".
• „ČOVEK JE OD MAJMUNA." Nije. Čovek i šimpanza imaju ZAJEDNIČKOG PRETKA koji je živeo pre oko 6–7 miliona godina. Šimpanza nam je rođak, ne pradeda.
• „EVOLUCIJA IDE KA NEČEM BOLJEM." Ne ide. Nema vrhunca ni cilja — samo prilagođavanje sredini koja se menja. Bakterija nije „niža" od čoveka; ona je uspešnija.
• „EVOLUCIJA I VERA SE ISKLJUČUJU." Za mnoge vernike ne. Katolička crkva, na primer, prihvata evoluciju kao naučno objašnjenje kako se život razvijao. Pitanje „zašto uopšte postoji nešto" nauka ostavlja otvorenim.`,
pr:{p:'Šta znači reč „teorija" u nauci?', o:['Nagađanje bez dokaza','Dobro provereno objašnjenje koje povezuje mnoge činjenice','Nešto što još nije dokazano'], t:1, z:'U nauci je teorija najviši stepen objašnjenja — kao teorija gravitacije.'}}
],
kljucno:['Darvin i Volas: sva živa bića imaju zajedničke pretke i menjaju se prirodnom selekcijom (1859).','Tri sastojka: razlike, nasleđivanje, višak potomaka; nema cilja ni plana.','„Najsposobniji" = najbolje prilagođen, ne najjači.','Vidi se i danas: bakterije otporne na antibiotike, brezov moljac, psi od vuka.','Dokazi: fosili, građa tela, DNK, posmatranje; čovek i šimpanza imaju zajedničkog pretka.'],
kartice:[
{p:'Koja su tri sastojka prirodne selekcije?', o:'Razlike među jedinkama, nasleđivanje, više potomaka nego što može preživeti.'},
{p:'Šta znači „najsposobniji" u evoluciji?', o:'Najbolje prilagođen sredini — onaj koji ostavi najviše potomaka.'},
{p:'Zašto se pije ceo ciklus antibiotika?', o:'Da ne prežive i ne namnože se otpornije bakterije.'},
{p:'Da li čovek potiče od šimpanze?', o:'Ne — imamo zajedničkog pretka od pre oko 6–7 miliona godina.'},
{p:'Šta je „teorija" u nauci?', o:'Dobro provereno objašnjenje koje povezuje mnoge činjenice.'}
],
razgovor:['Gde u društvu — na poslu, na tržištu, na internetu — vidiš nešto nalik prirodnoj selekciji? A gde to poređenje ne važi?','Objasni otpornost bakterija na antibiotike nekome ko ne veruje u evoluciju.']},

{id:'3-4', naslov:'Drvo života — od bakterije do čoveka',
kuka:{p:'Koliki deo svih vrsta koje su ikad živele na Zemlji je izumro?', o:['Oko 10%','Oko polovine','Više od 99%'], t:2},
delovi:[
{n:'Tri milijarde godina mikroba', t:`Kad pomisliš na istoriju života, pomisliš na dinosauruse. A najveći deo te istorije bio je NEVIDLJIV.

Oko 3 milijarde godina život na Zemlji bio je samo mikroskopski: bakterije, arheje, kasnije jednoćelijski eukarioti. Pravili su pokrivače po plićacima, a cijanobakterije su polako punile vazduh kiseonikom.

Prva višećelijska bića javljaju se pre oko milijardu godina, a prve prave životinje pre oko 600 miliona godina.

Ako bi celu istoriju Zemlje sabio u jedan dan, životinje bi se pojavile tek oko devet uveče, a čovek u poslednjih nekoliko sekundi pred ponoć.`,
pr:{p:'Koliko dugo je život na Zemlji bio samo mikroskopski?', o:['Nekoliko miliona godina','Oko 3 milijarde godina','Svega nekoliko hiljada godina'], t:1, z:'Oko 3 milijarde godina — većina istorije života je istorija mikroba.'}},
{n:'Eksplozija i izlazak na kopno', t:`Pre oko 540 miliona godina desila se KAMBRIJSKA EKSPLOZIJA: za samo dvadesetak miliona godina pojavljuju se skoro sve glavne grupe životinja koje postoje i danas. Pojavljuju se oči, ljušture, zubi, grabljivci i plen. Trka je počela.

Onda kopno:
• Biljke izlaze iz vode pre oko 470 miliona godina — prvo mahovine, pa paprati, pa drveće.
• Za njima insekti.
• Pre oko 375 miliona godina riba sa zglobovima u perajima (Tiktaalik) puzi po plićaku. Od njenih rođaka potiču svi kopneni kičmenjaci — vodozemci, gmizavci, ptice, sisari. Ti.

Kosti tvoje ruke su, u osnovi, kosti te peraje.`,
pr:{p:'Šta je kambrijska eksplozija?', o:['Eksplozija vulkana koja je uništila život','Brza pojava većine glavnih grupa životinja pre oko 540 miliona godina','Udar asteroida'], t:1, z:'Za dvadesetak miliona godina pojavile su se skoro sve glavne grupe životinja.'}},
{n:'Velika izumiranja', t:`Više od 99% svih vrsta koje su ikad živele — izumrlo je. Izumiranje je pravilo, ne izuzetak. Ali pet puta je bilo naglo i masovno:

• NAJVEĆE, pre oko 252 miliona godina (kraj perma): ogromne vulkanske erupcije u današnjem Sibiru zagrejale su planetu i zatrovale more. Nestalo je oko 90% morskih vrsta. Život je skoro nestao.
• POSLEDNJE, pre 66 miliona godina: asteroid širok oko 10 km udario je kod današnjeg Meksika. Tama, hladnoća, požari. Nestali su veliki dinosaurusi i oko tri četvrtine vrsta.

Ali NISU NESTALI SVI DINOSAURUSI. PTICE SU DINOSAURUSI — potomci malih pernatih grabljivaca. Golub na tvom prozoru je rođak tiranosaurusa.

Izumiranja su i otvarala vrata: posle asteroida, sitni sisari koji su se krili po senkama dobili su ceo svet.`,
pr:{p:'Koja grupa dinosaurusa je preživela do danas?', o:['Krokodili','Ptice','Nijedna'], t:1, z:'Ptice su potomci malih pernatih dinosaurusa. Krokodili su rođaci, ali nisu dinosaurusi.'}},
{n:'Sisari, primati, mi', t:`Posle dinosaurusa sisari se šire na sve strane: kitovi se vraćaju u more, slepi miševi lete, pojavljuju se konji, mačke, majmuni.

PRIMATI — grupa kojoj pripadamo — žive na drveću, imaju ruke koje hvataju, oči napred i veliki mozak. Iz njih se razvijaju majmuni, pa veliki majmuni: orangutan, gorila, šimpanza i bonobo. I ljudska loza, koja se od šimpanzi odvaja pre oko 6–7 miliona godina (više o tome u oblasti 6).

Sva živa bića danas biolozi dele na TRI VELIKE GRANE:
1. bakterije,
2. arheje,
3. eukarioti — u koje spadaju biljke, gljive i životinje.

Iznenađenje: GLJIVE SU BLIŽE ŽIVOTINJAMA NEGO BILJKAMA. Pečurka ti je bliži rođak od salate.`,
pr:{p:'Kome su gljive bliže po srodstvu?', o:['Biljkama','Životinjama','Bakterijama'], t:1, z:'Gljive i životinje imaju bližeg zajedničkog pretka nego gljive i biljke.'}},
{n:'Šesto izumiranje?', t:`Mnogi biolozi kažu da smo danas usred šestog velikog izumiranja — ovaj put bez asteroida.

Šta se zna:
• Vrste danas nestaju mnogo brže od prirodnog, „pozadinskog" tempa — procene idu od desetina do stotina puta brže.
• Glavni uzrok nije klima, nego GUBITAK STANIŠTA — šume posečene za njive, pašnjake i gradove. Slede lov i ribolov, unete strane vrste, zagađenje, a sve više i klima.

Šta je sporno: tačne brojke. Koliko vrsta uopšte postoji ne znamo (većina insekata i mikroba nije ni opisana), pa je teško reći koliko ih nestaje. Ali pravac nije sporan.

Zašto bi te bilo briga? Zato što ekosistemi daju hranu, vodu, oprašivanje, plodno tlo — o tome sledeća lekcija.`,
pr:{p:'Šta je danas najveći uzrok nestajanja vrsta?', o:['Gubitak staništa','Klimatske promene','Lov'], t:0, z:'Pre svega uništavanje staništa — šume pretvorene u njive, pašnjake i gradove.'}}
],
kljucno:['Oko 3 milijarde godina život je bio samo mikroskopski; životinje kasne.','Kambrijska eksplozija pre oko 540 miliona godina; biljke i životinje izlaze na kopno.','Pet velikih izumiranja; poslednje (asteroid, pre 66 miliona) — ptice su preživeli dinosaurusi.','Tri grane života: bakterije, arheje, eukarioti; gljive su bliže životinjama.','Danas vrste nestaju mnogo brže od prirodnog tempa — najviše zbog gubitka staništa.'],
kartice:[
{p:'Koliki deo svih vrsta je izumro?', o:'Više od 99%.'},
{p:'Šta je kambrijska eksplozija?', o:'Brza pojava većine glavnih grupa životinja pre oko 540 miliona godina.'},
{p:'Šta je uništilo dinosauruse pre 66 miliona godina — i ko je preživeo?', o:'Udar asteroida; preživele su ptice.'},
{p:'Koje su tri velike grane života?', o:'Bakterije, arheje, eukarioti.'},
{p:'Šta je danas najveći uzrok izumiranja?', o:'Gubitak staništa.'}
],
razgovor:['Više od 99% vrsta je nestalo. Kako to menja tvoj pogled na sigurnost bilo koje vrste — i naše?','Šta te je u ovoj lekciji najviše iznenadilo i zašto?']},

{id:'3-5', naslov:'Ekosistemi — ko koga jede i zašto je to bitno',
kuka:{p:'Šta bi se desilo kad bi nestale pčele i drugi oprašivači?', o:['Skoro ništa, vetar bi sve oprašio','Mnoge biljke i usevi bi rađali mnogo slabije','Za godinu bi se pojavile nove vrste koje ih zamenjuju'], t:1},
delovi:[
{n:'Ko koga jede', t:`EKOSISTEM je sve živo na jednom mestu — u šumi, reci, livadi — zajedno sa neživim (voda, tlo, klima) i svim vezama među njima.

Osnova je LANAC ISHRANE:
1. PROIZVOĐAČI — biljke i alge prave hranu iz svetlosti.
2. BILJOJEDI — zec, jelen, skakavac.
3. MESOJEDI — lisica, vuk, jastreb.
4. RAZLAGAČI — gljive, bakterije, crvi. Razlažu sve mrtvo i vraćaju hranljive materije u tlo, odakle ih biljke ponovo uzimaju.

Bez razlagača bi se svet zatrpao mrtvim lišćem i telima, a biljkama bi ponestalo hrane.

Pravilo koje vredi zapamtiti: ENERGIJA TEČE (od Sunca, kroz lanac, i nestaje kao toplota), a MATERIJA KRUŽI (isti atomi idu u krug).`,
pr:{p:'Šta rade razlagači u ekosistemu?', o:['Jedu samo žive biljke','Razlažu mrtvo i vraćaju hranljive materije u tlo','Prave hranu iz svetlosti'], t:1, z:'Gljive, bakterije i crvi zatvaraju krug — bez njih biljke ne bi imale hranljivih materija.'}},
{n:'Fotosinteza i piramida', t:`Skoro sve što jedeš počelo je kao svetlost. FOTOSINTEZA:
ugljen-dioksid + voda + sunčeva svetlost → šećer + kiseonik.

Biljka od šećera gradi telo, a kiseonik pušta. Hleb, meso, mleko, pa i benzin — sve je to, na kraju, uhvaćena sunčeva svetlost.

Ali na svakoj stepenici lanca najveći deo energije se izgubi (troši se na život i odlazi kao toplota). Dalje prelazi otprilike samo DESETINA. Zato:
• trave ima mnogo, zečeva manje, a vukova malo — vrh piramide je uzak;
• za kilogram mesa treba mnogo kilograma biljne hrane, pa biljna ishrana manje opterećuje zemlju i vodu.

To nije moralna propoved, nego račun energije.`,
pr:{p:'Zašto ima mnogo manje vukova nego zečeva?', o:['Zato što vukove ljudi love','Zato što se na svakoj stepenici lanca većina energije izgubi','Zato što vukovi žive kraće'], t:1, z:'Dalje prelazi samo oko desetina energije, pa vrh piramide može da nahrani malo grabljivaca.'}},
{n:'Ključne vrste', t:`Neke vrste drže ceo ekosistem na okupu — kao kamen na vrhu svoda. Zovu se KLJUČNE VRSTE.

• VUKOVI U JELOUSTONU. Istrebljeni su početkom 20. veka, a 1995. vraćeni u američki park. Jeleni su počeli da izbegavaju otvorene obale, pa su se tu oporavile vrbe, za njima dabrovi i ptice. Koliko je tačno vukovima zasluga, naučnici još mere — ali promena je bila velika.
• OPRAŠIVAČI. Pčele, bumbari, leptiri, muve. Oko tri četvrtine najvažnijih useva u svetu bar delimično zavisi od njih — voće, povrće, kafa, kakao. Bez njih, prinosi bi pali, a hrana poskupela.
• MORSKE VIDRE jedu morske ježeve; kad vidre nestanu, ježevi pojedu podvodne šume algi, a sa njima nestanu i ribe.

Ukloni jednu kariku — i ne znaš unapred šta će sve pasti.`,
pr:{p:'Šta je „ključna vrsta"?', o:['Najbrojnija vrsta u ekosistemu','Vrsta čiji nestanak menja ceo ekosistem','Vrsta koja je najstarija'], t:1, z:'Ključna vrsta nije nužno brojna, ali bez nje se cela mreža odnosa menja.'}},
{n:'Veliki krugovi', t:`Materija na Zemlji kruži u velikim krugovima.

KRUG UGLJENIKA: ugljenik iz vazduha (CO₂) biljke ugrade u telo → životinje ga pojedu → disanjem i truljenjem se vraća u vazduh. Deo potone i ostane zaključan milionima godina — u krečnjaku, uglju, nafti, gasu.

Tu se povezuje sa lekcijom o klimi: spaljivanjem fosilnih goriva mi za stotinak godina vraćamo u vazduh ugljenik koji je bio zaključan milionima godina. Krug se nije pokvario, nego smo ga naglo ubrzali na jednom mestu.

KRUG AZOTA: azota ima pun vazduh, ali ga biljke ne mogu uzeti direktno. Posao rade bakterije u tlu (naročito na korenu leguminoza: pasulja, graška, deteline — zato seljaci sade detelinu da „odmori" njivu). Danas veliki deo azota u poljima unosimo veštačkim đubrivom (Haber-Boš iz oblasti 2).

Sve je povezano: tlo, biljke, vazduh, more, klima, tvoj tanjir.`,
pr:{p:'Šta su fosilna goriva u krugu ugljenika?', o:['Ugljenik koji nikad nije bio deo kruga','Ugljenik zaključan milionima godina koji sada brzo vraćamo u vazduh','Nova vrsta ugljenika'], t:1, z:'Fosilna goriva su „zaključani" deo kruga; spaljivanjem ga naglo vraćamo u vazduh.'}},
{n:'Besplatne usluge — i kraj oblasti', t:`Ekosistemi nam svakog dana rade poslove koje nikad ne platimo:
• prave kiseonik i čiste vazduh,
• filtriraju vodu (šuma i močvara su najbolji prečistači),
• oprašuju useve,
• prave plodno tlo (za jedan centimetar tla trebaju decenije do vekovi),
• hrane nas ribom, divljim plodovima, lekovitim biljem,
• zadržavaju poplave i sprečavaju klizišta.

Da ih moramo praviti mašinama, koštalo bi više od cele svetske ekonomije. Zato ih zovu USLUGE EKOSISTEMA.

Kraj oblasti „Život". Sada imaš kostur: šta je ćelija → kako DNK nosi recept → kako se vrste menjaju prirodnom selekcijom → kako je drvo života raslo kroz milijarde godina i izumiranja → i kako je sve to danas povezano u mrežu.

Sledeće: jedno posebno živo biće, iznutra — tvoje telo.`,
pr:{p:'Zašto se kaže da priroda daje „besplatne usluge"?', o:['Jer je zakonom zaštićena','Jer ono što radi (vazduh, voda, oprašivanje, tlo) bi skupo koštalo da to pravimo sami','Jer ne zavisi od ljudi'], t:1, z:'Prečišćavanje vode, oprašivanje, plodno tlo — da ih plaćamo, bili bi ogroman trošak.'}}
],
kljucno:['Ekosistem: proizvođači, biljojedi, mesojedi, razlagači; energija teče, materija kruži.','Fotosinteza je osnova skoro sve hrane; na svakoj stepenici dalje ide samo oko desetina energije.','Ključne vrste (vukovi, oprašivači) drže ceo sistem — oko 3/4 važnih useva zavisi od oprašivača.','Ugljenik i azot kruže; fosilna goriva su zaključan ugljenik koji naglo vraćamo u vazduh.','Ekosistemi daju besplatne usluge: vazduh, voda, oprašivanje, tlo.'],
kartice:[
{p:'Koja su četiri člana lanca ishrane?', o:'Proizvođači, biljojedi, mesojedi, razlagači.'},
{p:'Koliko energije prelazi na sledeću stepenicu lanca?', o:'Otprilike samo desetina.'},
{p:'Šta je ključna vrsta? Primer?', o:'Vrsta čiji nestanak menja ceo ekosistem — vukovi u Jeloustonu, oprašivači.'},
{p:'Ko u prirodi hvata azot iz vazduha?', o:'Bakterije u tlu, naročito na korenu leguminoza (pasulj, grašak, detelina).'},
{p:'Navedi tri usluge ekosistema.', o:'Npr. prečišćavanje vode, oprašivanje, plodno tlo (i kiseonik, zaštita od poplava).'}
],
razgovor:['Prati današnji obrok unazad: od tvog tanjira do Sunca. Koliko stepenica ima?','Ko je „ključna vrsta" u ekipi na poslu — neko čiji bi odlazak promenio sve? Šta to govori o ekosistemima?']}
]},
{id:'4', naziv:'Telo i zdravlje', ikona:'🫀', era:'ti, iznutra', lekcije:[
{id:'4-1', naslov:'Telo kao sistem — srce, krv, pluća, organi',
kuka:{p:'Otprilike koliko puta dnevno kucne tvoje srce?', o:['Oko 10.000','Oko 100.000','Oko milion'], t:1},
delovi:[
{n:'Odeljenja jedne fabrike', t:`Telo je složeno u spratove:
ćelije → TKIVA (mišićno, nervno, koštano…) → ORGANI (srce, jetra) → SISTEMI.

Glavni sistemi: krvotok, disanje, varenje, nervni sistem, hormoni, imuni sistem, kosti i mišići, bubrezi i izlučivanje, koža.

Nijedan ne radi sam. Kad trčiš, mišićima treba više kiseonika — pluća dišu brže, srce kuca jače, krvni sudovi se šire, koža se znoji da te ohladi. Sve to bez tvoje odluke.

Ta stalna briga da sve ostane u ravnoteži zove se HOMEOSTAZA: temperatura oko 37 °C, šećer u krvi, količina vode, kiselost krvi — sve se drži u uskim granicama, kao sa termostatom. Bolest je često baš to: ravnoteža koja ne može da se vrati.`,
pr:{p:'Šta je homeostaza?', o:['Rast tela','Održavanje stalne unutrašnje ravnoteže','Vrsta hormona'], t:1, z:'Telo stalno vraća temperaturu, šećer, vodu i kiselost u uske granice — kao termostat.'}},
{n:'Srce i krv', t:`Srce je mišić veličine pesnice koji u mirovanju pumpa oko 5 litara krvi u minuti — sve što imaš, svakog minuta. Oko 100.000 otkucaja dnevno, bez pauze, do kraja života.

Krv ide u dva kruga:
• MALI KRUG: srce → pluća (uzme kiseonik, ostavi ugljen-dioksid) → srce.
• VELIKI KRUG: srce → celo telo → srce.

ARTERIJE nose krv od srca, VENE ka srcu, a sitni KAPILARI između njih razmenjuju sve sa ćelijama. Svi sudovi zajedno, poređani u nit, obišli bi Zemlju više puta.

U krvi su: crvena krvna zrnca (nose kiseonik pomoću HEMOGLOBINA, u kome je gvožđe — ono iz zvezda!), bela zrnca (odbrana), pločice (zaustavljaju krvarenje) i tečnost, plazma.

KRVNI PRITISAK ima dva broja: gornji je pritisak kad srce stisne, donji kad se opusti između dva otkucaja. Oko 120/80 je uobičajeno. Visok pritisak ne boli, ali godinama tiho oštećuje sudove, srce, mozak i bubrege — zato se meri.`,
pr:{p:'Šta znače dva broja krvnog pritiska?', o:['Gornji je puls, donji temperatura','Gornji je pritisak kad srce steže, donji kad se opušta','Gornji je za levu, donji za desnu ruku'], t:1, z:'Sistolni (gornji) — kad srce izbacuje krv; dijastolni (donji) — između otkucaja.'}},
{n:'Pluća', t:`U mirovanju udahneš 12 do 20 puta u minuti. Vazduh ide niz dušnik koji se grana kao drvo naglavačke, do stotina miliona sićušnih kesica — ALVEOLA. Raširene, imale bi površinu manjeg stana.

Kroz tanke zidove alveola kiseonik prelazi u krv, a UGLJEN-DIOKSID iz krvi u vazduh. Odakle taj CO₂? Iz tvojih ćelija — to je „izduvni gas" mitohondrija koje su sagorele hranu (lekcija o ćeliji).

Zanimljivost: ono što te tera da udahneš kad zadržiš dah nije manjak kiseonika, nego VIŠAK UGLJEN-DIOKSIDA u krvi. Mozak meri CO₂ i on pali alarm.`,
pr:{p:'Šta te najviše tera da udahneš kad zadržiš dah?', o:['Manjak kiseonika','Porast ugljen-dioksida u krvi','Bol u plućima'], t:1, z:'Mozak meri pre svega CO₂ u krvi — kad poraste, alarm za udah se pali.'}},
{n:'Jetra i bubrezi — čistači', t:`JETRA je najveći unutrašnji organ i hemijska laboratorija tela, sa stotinama poslova:
• prerađuje ono što si pojeo i čuva rezervu šećera;
• razgrađuje otrove, ALKOHOL i većinu lekova (zato se mnogi lekovi ne mešaju sa alkoholom);
• pravi žuč za varenje masti i mnoge proteine krvi.
Jetra je jedini unutrašnji organ koji može ponovo da izraste kad joj se ukloni deo.

BUBREZI su dva filtera veličine pesnice. Svakog dana kroz njih prođe oko 180 litara tečnosti iz krvi; skoro sve vrate nazad, a oko litar i po izbace kao mokraću, sa otpadom. Usput regulišu vodu, so i krvni pritisak.

Kad pitaš lekara „da li ovaj lek sme uz onaj", najčešće pitaš o jetri i bubrezima.`,
pr:{p:'Koji organ razgrađuje alkohol i većinu lekova?', o:['Bubrezi','Jetra','Pluća'], t:1, z:'Jetra je glavna hemijska laboratorija — razgrađuje alkohol, otrove i lekove.'}},
{n:'Hormoni — spora pošta', t:`Telo ima dva sistema za poruke:
• NERVNI — brz kao telefonski poziv, ali kratak;
• HORMONSKI — hemijske poruke koje putuju krvlju; sporiji kao pošta, ali deluju dugo.

Važni hormoni:
• ADRENALIN — „bori se ili beži": srce ubrza, mišići dobiju krv, varenje stane.
• INSULIN — pomaže šećeru iz krvi da uđe u ćelije. Kad ga nema ili ćelije ne reaguju — DIJABETES.
• KORTIZOL — hormon dugog stresa.
• TIROKSIN iz štitne žlezde — određuje brzinu celog metabolizma.
• MELATONIN — raste u mraku i javlja telu da je vreme za san.
• Polni hormoni — razvoj, plodnost, trudnoća.

Kad nešto „nije u redu sa hormonima", često je to štitna žlezda ili šećer — dve najčešće kontrole kod lekara.`,
pr:{p:'Šta radi insulin?', o:['Ubrzava srce','Pomaže šećeru iz krvi da uđe u ćelije','Javlja da je vreme za san'], t:1, z:'Bez insulina (ili kad ćelije ne reaguju na njega) šećer ostaje u krvi — to je dijabetes.'}}
],
kljucno:['Telo je složeno u ćelije, tkiva, organe i sisteme koji stalno sarađuju; homeostaza drži ravnotežu.','Srce pumpa krv u dva kruga; pritisak ima gornju (stezanje) i donju (opuštanje) vrednost.','Pluća razmenjuju kiseonik i CO₂; na udah nas tera višak CO₂.','Jetra razgrađuje alkohol, otrove i lekove; bubrezi filtriraju krv.','Hormoni su spora pošta: adrenalin, insulin, kortizol, tiroksin, melatonin.'],
kartice:[
{p:'Šta je homeostaza?', o:'Održavanje stalne unutrašnje ravnoteže (temperatura, šećer, voda).'},
{p:'Šta znače dva broja pritiska?', o:'Gornji — kad srce steže; donji — kad se opušta.'},
{p:'Zašto ne možemo dugo da zadržimo dah?', o:'Raste CO₂ u krvi i mozak pali alarm.'},
{p:'Šta radi jetra?', o:'Prerađuje hranu, čuva šećer, razgrađuje alkohol, otrove i lekove, pravi žuč.'},
{p:'Koja je razlika između nervnih i hormonskih poruka?', o:'Nervne su brze i kratke; hormoni putuju krvlju, sporiji su i deluju duže.'}
],
razgovor:['Objasni homeostazu na primeru iz svog dana — smena, vrućina, umor.','Koji organ ili sistem te je u ovoj lekciji najviše iznenadio i zašto?']},

{id:'4-2', naslov:'Hrana, metabolizam i energija',
kuka:{p:'Koliko energije celog tela troši mozak, iako je samo oko 2% težine?', o:['Oko 2%','Oko 20%','Oko 50%'], t:1},
delovi:[
{n:'Od čega je hrana', t:`Hrana nam daje dve stvari: ENERGIJU i GRAĐU.

Tri velike grupe (MAKRONUTRIJENTI):
• UGLJENI HIDRATI — šećeri i skrob (hleb, testo, krompir, voće). Brza energija. Oko 4 kalorije po gramu.
• MASTI — ulje, puter, orasi, masno meso. Gusta rezerva energije: oko 9 kalorija po gramu, više nego duplo.
• PROTEINI — meso, jaja, mleko, pasulj. Pre svega gradivo (mišići, enzimi, antitela). Oko 4 kalorije po gramu.

Uz to: VITAMINI i MINERALI (male količine, a bez njih bolesti — skorbut bez vitamina C, slabokrvnost bez gvožđa), VLAKNA (za creva i bakterije u njima) i VODA.

KALORIJA je samo jedinica za energiju — ista ona energija koja se ne gubi, samo menja oblik (oblast 1).`,
pr:{p:'Koja grupa hrane ima najviše energije po gramu?', o:['Ugljeni hidrati','Masti','Proteini'], t:1, z:'Masti imaju oko 9 kalorija po gramu, a ugljeni hidrati i proteini oko 4.'}},
{n:'Put hrane', t:`• USTA: zubi usitnjavaju, a enzim u pljuvački već počinje da razlaže skrob (zato hleb, kad ga dugo žvaćeš, postane sladak).
• ŽELUDAC: jaka kiselina ubija većinu mikroba i počinje razlaganje proteina.
• TANKO CREVO: dugo nekoliko metara, iznutra naborano u milione sitnih resica. Tu se upija NAJVEĆI DEO hrane u krv.
• DEBELO CREVO: upija vodu i soli, a u njemu živi ogroman broj bakterija — MIKROBIOM. One razlažu vlakna koja mi ne možemo i prave neke vitamine. Nauka o mikrobiomu je mlada; mnogo se obećava, a mnogo manje je dokazano.

Ceo put traje od jednog do tri dana.`,
pr:{p:'Gde se upija najveći deo hrane?', o:['U želucu','U tankom crevu','U debelom crevu'], t:1, z:'Tanko crevo, sa milionima resica, upija najveći deo hranljivih materija u krv.'}},
{n:'Gde ide energija', t:`METABOLIZAM je zbir svih hemijskih procesa u telu. Na šta troši energiju?

• OSNOVNI METABOLIZAM — sam život u mirovanju: srce, disanje, mozak, održavanje toplote. To je najveći deo, oko dve trećine dnevne potrošnje. Samo mozak, iako je 2% težine, troši oko 20%.
• KRETANJE — od šetnje do rada. Kod većine ljudi manji deo nego što misle.
• VARENJE same hrane — desetak procenata.

Osnovno pravilo: ako uneseš više energije nego što potrošiš, višak se čuva — najviše kao masno tkivo. Ali telo nije prost kalkulator: san, stres, hormoni i vrsta hrane menjaju koliko si gladan i koliko trošiš. Zato „samo jedi manje" zvuči lako, a nije.`,
pr:{p:'Na šta telo troši najveći deo energije?', o:['Na fizički rad i vežbanje','Na osnovni metabolizam — rad organa u mirovanju','Na varenje hrane'], t:1, z:'Oko dve trećine ide na sam život u mirovanju: srce, disanje, mozak, toplotu.'}},
{n:'Šećer u krvi', t:`Posle obroka šećer u krvi raste. Gušterača tada pušta INSULIN, koji ga „sklanja" u ćelije i u rezervu. Za par sati nivo se vrati.

Ali brzina je bitna:
• BRZI ŠEĆERI — sok, gazirano piće, beli hleb, kolači — naglo podignu šećer, insulin ga naglo obori, i ubrzo si opet gladan i umoran.
• VLAKNA, PROTEINI i MASTI usporavaju upijanje, pa je talas blaži i sitost duža.

DIJABETES TIPA 2 (najčešći): ćelije vremenom sve slabije reaguju na insulin, pa šećer ostaje visok. Povezan je sa viškom kilograma, manjkom kretanja i genima. Dobra vest: navikama se može sprečiti ili znatno odložiti.`,
pr:{p:'Zašto posle slatkog brzo opet ogladniš?', o:['Jer slatko nema kalorija','Jer šećer naglo skoči pa naglo padne','Jer šećer smanjuje želudac'], t:1, z:'Brz skok šećera izaziva brz talas insulina i pad — a pad se oseća kao glad i umor.'}},
{n:'Šta nauka zaista zna', t:`O ishrani ima više mišljenja nego o fudbalu. Šta je ipak prilično sigurno:

• Važan je OBRAZAC, ne jedna namirnica. Više povrća, voća, mahunarki (pasulj, sočivo), integralnih žitarica i orašastih plodova; manje prerađenog mesa (salame, viršle), zaslađenih pića i jako prerađene hrane.
• Nema čudotvorne namirnice ni dijete koja svima odgovara.
• Naslovi „kafa leči" ili „jaja ubijaju" uglavnom dolaze iz slabih studija — o tome kako ih čitati u poslednjoj lekciji ove oblasti.
• KADA jedeš takođe je bitno: noćni rad remeti unutrašnji sat, a sa njim i to kako telo prerađuje šećer. Zato je kod smena korisno imati stalne obroke i ne jesti teško usred noći (više o unutrašnjem satu u lekciji o snu).

Kratko pravilo novinara Majkla Polana: „Jedi hranu. Ne previše. Uglavnom biljke."`,
pr:{p:'Šta je najpouzdaniji zaključak nauke o ishrani?', o:['Postoji jedna čudotvorna namirnica','Ukupni obrazac (više biljne, manje prerađene hrane) važniji je od pojedinačne namirnice','Kalorije nisu bitne'], t:1, z:'Studije se najbolje slažu oko obrasca ishrane, a ne oko „super-namirnica".'}}
],
kljucno:['Makronutrijenti: ugljeni hidrati i proteini oko 4 kcal/g, masti oko 9 kcal/g; plus vitamini, minerali, vlakna, voda.','Najveći deo hrane se upija u tankom crevu; u debelom žive bakterije (mikrobiom).','Najviše energije ide na osnovni metabolizam; mozak troši oko 20%.','Brzi šećeri daju skok i pad; dijabetes tipa 2 se navikama može sprečiti ili odložiti.','Važan je obrazac ishrane, ne čudotvorna namirnica; bitno je i kada jedeš.'],
kartice:[
{p:'Koliko kalorija po gramu imaju masti, a koliko ugljeni hidrati i proteini?', o:'Masti oko 9; ugljeni hidrati i proteini oko 4.'},
{p:'Gde se upija najveći deo hrane?', o:'U tankom crevu.'},
{p:'Na šta telo troši najviše energije?', o:'Na osnovni metabolizam — rad organa u mirovanju.'},
{p:'Šta je dijabetes tipa 2?', o:'Ćelije slabije reaguju na insulin, pa šećer u krvi ostaje visok.'},
{p:'Polanovo pravilo o ishrani?', o:'„Jedi hranu. Ne previše. Uglavnom biljke."'}
],
razgovor:['Kako smene utiču na to kada i šta jedeš? Šta si primetio na sebi?','Seti se jedne „istine" o hrani koju si čuo. Da li je, posle ove lekcije, i dalje vidiš isto?']},

{id:'4-3', naslov:'Imunitet — bakterije, virusi, vakcine, antibiotici',
kuka:{p:'Da li antibiotik pomaže kod gripa?', o:['Da, uvek','Ne — grip izaziva virus, a antibiotik deluje na bakterije','Samo ako je jak antibiotik'], t:1},
delovi:[
{n:'Nevidljivi neprijatelji — i prijatelji', t:`Uzročnici bolesti su četiri vrste:
• BAKTERIJE — sitne žive ćelije. Ogromna većina je bezopasna ili korisna, ali neke izazivaju upalu grla, pluća, mokraćnih puteva.
• VIRUSI — nisu ćelije; ulaze u naše ćelije i teraju ih da prave nove viruse (prehlada, grip, korona, boginje).
• GLJIVICE i PARAZITI.

Da bolesti izazivaju klice, nije se znalo do 19. veka — mislilo se da dolaze od „lošeg vazduha". Luj Paster i Robert Koh su dokazali teoriju klica.

Malo pre njih, mađarski lekar Ignac Semelvajs je 1847. primetio da porodilje mnogo češće umiru na odeljenju gde lekari dolaze pravo iz mrtvačnice. Naredio je pranje ruku hlorom — smrtnost je pala. Kolege su ga ismejale, a on je umro zaboravljen. Danas je pranje ruku osnova medicine.`,
pr:{p:'Ko je uveo pranje ruku u bolnici i zbog toga bio ismejan?', o:['Luj Paster','Ignac Semelvajs','Aleksandar Fleming'], t:1, z:'Semelvajs je 1847. pranjem ruku smanjio smrtnost porodilja, ali mu kolege nisu verovale.'}},
{n:'Prva linija odbrane', t:`Pre nego što uljez uopšte uđe, dočekaju ga zidovi: KOŽA, SLUZ u nosu i plućima, KISELINA u želucu, enzimi u suzama i pljuvački.

Ako ipak uđe, kreće UROĐENI IMUNITET — brz, ali grub:
• bela krvna zrnca koja gutaju sve što ne prepoznaju kao svoje;
• UPALA: crvenilo, toplota, otok, bol. Sudovi se šire da dovedu pojačanje — to je znak borbe, ne kvar;
• GROZNICA: telo namerno podigne temperaturu, jer mnogi mikrobi tada slabije rastu, a odbrana radi brže.

Groznica je, dakle, oružje, a ne neprijatelj — iako je, kad je previsoka, treba spuštati.`,
pr:{p:'Šta je groznica?', o:['Greška tela','Znak da se telo bori i oruđe odbrane','Uvek opasno stanje koje odmah treba spustiti'], t:1, z:'Povišena temperatura otežava mikrobima i ubrzava odbranu; spušta se kad je previsoka ili iscrpljuje.'}},
{n:'Odbrana koja pamti', t:`Druga linija je STEČENI IMUNITET — spor na početku, ali precizan, i PAMTI.

• B-LIMFOCITI prave ANTITELA — proteine koji se kače tačno na jednog uljeza, kao ključ u bravu, i obeleže ga za uništenje.
• T-LIMFOCITI pronalaze i ubijaju naše ćelije koje su zaražene virusom.
• Posle pobede ostanu MEMORIJSKE ĆELIJE. Kad isti uljez dođe ponovo, odbrana kreće za par dana umesto za nedelju-dve — često toliko brzo da i ne primetiš da si bio izložen.

Zato se neke bolesti, kao male boginje, dobijaju jednom u životu. A grip svake godine? Jer se virus gripa stalno menja — svake godine nosi malo drugačiju „bravu".`,
pr:{p:'Zašto se male boginje dobijaju samo jednom?', o:['Jer virus nestane iz sveta','Jer imuni sistem pamti uljeza pomoću memorijskih ćelija','Jer telo postane prejako'], t:1, z:'Memorijske ćelije prepoznaju isti virus i odbrana kreće mnogo brže.'}},
{n:'Vakcine', t:`Vakcina je TRENING bez prave bolesti: telu se pokaže oslabljen ili mrtav uljez, njegov deo, ili uputstvo da ćelije same naprave jedan njegov deo. Imuni sistem napravi memorijske ćelije — i spreman je kad dođe pravi.

• 1796. Edvard Džener je primetio da muzilje koje su preležale blage kravlje boginje ne dobijaju smrtonosne velike boginje — i napravio prvu vakcinu.
• Velike boginje su vakcinacijom IZBRISANE sa lica Zemlje 1980. Jugoslavija je 1972. imala jednu od poslednjih velikih epidemija u Evropi; zaustavljena je masovnom vakcinacijom miliona ljudi za nekoliko nedelja.
• KOLEKTIVNI IMUNITET: kad je dovoljno ljudi vakcinisano, bolest ne može da se širi — pa su zaštićeni i oni koji ne smeju da prime vakcinu (bebe, bolesni).

Nuspojave postoje, uglavnom blage, a retke ozbiljne se prate. Priča o vakcinama i autizmu potiče iz jedne studije iz 1998. koja je bila lažirana — povučena je, a autor je izgubio lekarsku dozvolu. Veze nema.`,
pr:{p:'Kako radi vakcina?', o:['Direktno ubija viruse u krvi','Trenira imuni sistem da prepozna uljeza bez prave bolesti','Zamenjuje imuni sistem'], t:1, z:'Vakcina pravi memorijske ćelije, pa je odbrana spremna kad dođe pravi uzročnik.'}},
{n:'Antibiotici', t:`1928. Aleksandar Fleming se vratio sa odmora i u jednoj zaboravljenoj posudi sa bakterijama našao buđ — a oko nje bakterije mrtve. Ta buđ je pravila PENICILIN. Od 1940-ih antibiotici su spasli stotine miliona života: upala pluća, zaražena rana i porođaj prestali su da budu česte smrtne presude.

Ali:
• Antibiotici deluju samo na BAKTERIJE. Na viruse ne — znači ne pomažu kod prehlade ni gripa.
• Svako nepotrebno uzimanje i svaki prekinut ciklus gaje OTPORNE bakterije (prirodna selekcija iz oblasti 3). Već danas postoje infekcije za koje skoro nijedan antibiotik ne deluje.

Pravila su prosta: antibiotik samo kad ga lekar propiše, tačno kako je propisano, do kraja.`,
pr:{p:'Zašto antibiotik ne pomaže kod prehlade?', o:['Jer je prehlada preblaga','Jer prehladu izazivaju virusi, a antibiotici deluju na bakterije','Jer se mora uzeti injekcijom'], t:1, z:'Antibiotici napadaju delove bakterija kojih virusi nemaju.'}}
],
kljucno:['Uzročnici: bakterije, virusi, gljivice, paraziti; teorija klica (Paster, Koh), pranje ruku (Semelvajs).','Prva linija: koža, sluz, kiselina; upala i groznica su znaci borbe.','Stečeni imunitet: antitela i T-ćelije; memorijske ćelije pamte uljeza.','Vakcina je trening bez bolesti; velike boginje izbrisane 1980; autizam — lažirana studija.','Antibiotici samo na bakterije; zloupotreba gaji otporne bakterije.'],
kartice:[
{p:'Razlika između bakterije i virusa?', o:'Bakterija je živa ćelija; virus nije ćelija i razmnožava se samo u našim ćelijama.'},
{p:'Čemu služi groznica?', o:'Otežava rast mikroba i ubrzava odbranu tela.'},
{p:'Šta rade memorijske ćelije?', o:'Pamte uljeza, pa je odbrana pri sledećem susretu mnogo brža.'},
{p:'Šta je kolektivni imunitet?', o:'Kad je dovoljno ljudi imuno, bolest ne može da se širi — zaštićeni su i nevakcinisani.'},
{p:'Zašto antibiotik ne deluje na grip?', o:'Grip je virus; antibiotici deluju samo na bakterije.'}
],
razgovor:['Semelvajsu nisu verovali iako je bio u pravu. Zašto ljudi odbijaju dokaz koji im ne prija?','Kako bi kratko objasnio nekome razliku između bakterije i virusa i zašto mu antibiotik za grip ne treba?']},

{id:'4-4', naslov:'Mozak, nervi i san',
kuka:{p:'Otprilike koliko nervnih ćelija (neurona) ima ljudski mozak?', o:['Oko 10 miliona','Oko milijardu','Oko 86 milijardi'], t:2},
delovi:[
{n:'Neuron', t:`NEURON je ćelija koja prenosi poruke električnim signalima. Ima „antene" (dendrite) koje primaju poruke i jedan dugačak „kabl" (akson) koji ih šalje dalje — ponekad metar dug, od kičme do nožnog prsta.

Između dva neurona je sićušan razmak, SINAPSA. Električni signal ga ne preskače, nego se na kraju pretvori u hemiju: pušta se NEUROTRANSMITER (dopamin, serotonin, adrenalin…) koji prepliva razmak i pali ili gasi sledeći neuron. Većina lekova za psihu i mnoge droge rade baš ovde.

U mozgu je oko 86 milijardi neurona i stotine hiljada milijardi veza među njima. Mozak je oko 2% težine tela, a troši oko 20% energije — skupo odeljenje.`,
pr:{p:'Kako se poruka prenosi preko sinapse?', o:['Električnom varnicom koja preskoči','Hemijskim prenosiocima — neurotransmiterima','Krvlju'], t:1, z:'Električni signal se na kraju neurona pretvori u hemijsku poruku koja prepliva razmak.'}},
{n:'Delovi mozga', t:`Mozak je građen kao kuća koja se dograđivala:

• MOŽDANO STABLO — najstariji deo, spojen sa kičmom. Disanje, rad srca, budnost. Radi sam.
• MALI MOZAK — pozadi, ispod. Ravnoteža i fini pokreti (vožnja, kucanje, hodanje).
• LIMBIČKI SISTEM — duboko unutra. AMIGDALA pali strah i alarm; HIPOKAMPUS upisuje nova sećanja.
• KORA — naborani spoljni sloj. Opažanje, jezik, mišljenje, planiranje. Prednji deo, iza čela (PREFRONTALNA KORA), je kočnica i planer: odlaže zadovoljstvo, procenjuje posledice. Poslednja sazri — tek oko 25. godine. Zato su mladi skloniji riziku.

Mit: „koristimo samo 10% mozga". Ne — snimci pokazuju da tokom dana radi ceo mozak, samo ne sve odjednom.`,
pr:{p:'Da li koristimo samo 10% mozga?', o:['Da, ostalo je rezerva','Ne, to je mit — radi ceo mozak, samo ne sve odjednom','Da, ali samo dok spavamo'], t:1, z:'Snimanja pokazuju aktivnost u svim delovima mozga tokom dana.'}},
{n:'Mozak se menja', t:`Dugo se verovalo da je mozak odraslog čoveka gotov. Nije. PLASTIČNOST znači da se veze stalno jačaju, slabe i prave nove, celog života.

Pravilo koje se pamti: „Neuroni koji pale zajedno — povezuju se zajedno." Što više nešto radiš, veza je jača i brža.

Poznata studija: londonski taksisti, koji godinama uče hiljade ulica napamet, imaju zadnji deo hipokampusa (prostorno pamćenje) veći nego ljudi koji ne voze — i to veći što duže voze.

Zato je učenje doslovno PREUREĐIVANJE mozga. I zato ova aplikacija traži prisećanje i ponavljanje: svaki put kad nešto izvučeš iz glave, utabavaš stazu.`,
pr:{p:'Šta je plastičnost mozga?', o:['Mozak je mekan','Sposobnost mozga da menja veze celog života','Mozak raste samo do 25. godine'], t:1, z:'Veze među neuronima jačaju, slabe i nastaju nove — učenje je fizička promena mozga.'}},
{n:'Šta radi san', t:`San nije isključen mozak. Mozak tada radi drugačije, u ciklusima od oko 90 minuta:

• DUBOKI SAN — telo se obnavlja, luči se hormon rasta, a mozak se „pere": tečnost između ćelija ispira otpadne materije koje se nagomilaju tokom dana.
• REM SAN — oči se brzo kreću, sanjamo najživlje. Mozak sređuje sećanja i emocije iz dana.

Odraslima treba 7 do 9 sati. Posle neprospavane noći pati sve: pažnja, pamćenje, raspoloženje, šećer u krvi, imunitet, pritisak.

Podatak koji vredi zapamtiti: posle 17–19 sati bez sna, brzina reakcija je otprilike kao sa pola promila alkohola u krvi. Umoran vozač je pijan vozač.`,
pr:{p:'Šta mozak radi tokom dubokog sna?', o:['Ništa, odmara se potpuno','Ispira otpadne materije, a telo se obnavlja','Samo sanja'], t:1, z:'U dubokom snu mozak se „pere", a telo luči hormon rasta i obnavlja se.'}},
{n:'Unutrašnji sat i smene', t:`U mozgu postoji UNUTRAŠNJI SAT koji otkucava oko 24 sata i određuje kada si pospan, gladan, budan, kada raste temperatura i hormoni. Najjači signal koji ga podešava je SVETLO: jutarnje svetlo ga „navije", a u mraku raste MELATONIN, hormon sna.

Rad u smenama stalno pomera taj sat — kao da stalno putuješ kroz vremenske zone, a da nikud ne ideš. Zato je treća smena teška i kad se naspavaš.

Šta pomaže, po istraživanjima o radu u smenama:
• dnevni san u potpunom mraku i tišini (zavese koje ne propuštaju svetlo, čepovi za uši);
• jako svetlo na početku noćne smene, a PRIGUŠENO SVETLO na putu kući posle nje (naočare za sunce ujutru pomažu da telo ne pomisli da je dan);
• kofein na početku smene, ne pred kraj;
• što stalniji obroci i što stalnije vreme spavanja kad god je moguće.

Kraj ne znači savršen san, nego manje štete.`,
pr:{p:'Šta najjače podešava unutrašnji sat?', o:['Hrana','Svetlo','Kafa'], t:1, z:'Svetlo je glavni signal; u mraku raste melatonin. Zato se posle noćne smene preporučuje prigušeno svetlo.'}}
],
kljucno:['Neuroni šalju električne signale, a preko sinapse hemijske (neurotransmiteri); oko 86 milijardi neurona.','Delovi: stablo (automatika), mali mozak (pokret), limbički (strah, pamćenje), kora (mišljenje); prefrontalna kora sazreva oko 25.','Plastičnost: veze se menjaju celog života — učenje je fizička promena mozga.','San ima duboku fazu (čišćenje, obnova) i REM (sećanja, emocije); 17–19 sati bez sna ≈ pola promila.','Unutrašnji sat podešava svetlo; kod smena pomažu mrak za san, svetlo na početku i prigušeno posle noćne smene.'],
kartice:[
{p:'Šta je sinapsa?', o:'Razmak između neurona preko koga poruku nose neurotransmiteri.'},
{p:'Šta radi prefrontalna kora i kad sazri?', o:'Planira i koči impulse; sazreva oko 25. godine.'},
{p:'Šta je plastičnost mozga?', o:'Sposobnost mozga da menja veze celog života.'},
{p:'Čemu služi duboki san?', o:'Obnovi tela i „ispiranju" otpada iz mozga.'},
{p:'Šta najjače podešava unutrašnji sat?', o:'Svetlo.'}
],
razgovor:['Kako ti smene utiču na san i raspoloženje — šta si već primetio da pomaže, a šta ne?','Taksistima raste hipokampus. Koja tvoja svakodnevna veština je verovatno promenila tvoj mozak?']},

{id:'4-5', naslov:'Kako medicina zna šta radi — studije, lekovi, placebo',
kuka:{p:'Komšiji je pomogao neki čaj protiv prehlade. Da li to dokazuje da čaj deluje?', o:['Da, pomogao mu je','Ne — prehlada prolazi i sama, a moguć je i placebo','Da, ako je pio više dana'], t:1},
delovi:[
{n:'Zašto priča nije dokaz', t:`„Meni je pomoglo" je najubedljivija rečenica na svetu — i jedna od najmanje pouzdanih. Zašto?

• MNOGO BOLESTI PROĐE SAMO. Prehlada, bol u leđima, glavobolja — šta god da uzmeš, za nekoliko dana bude bolje.
• POVRATAK KA SREDINI. Lekaru ili travaru odeš kad ti je najgore. Posle najgoreg obično dođe bolje — svejedno šta si uzeo.
• PLACEBO (sledeći deo).

Vekovima su lekari puštali krv bolesnima — i „videli" da pomaže, jer su ljudi i tako ozdravljali. Džordž Vašington je verovatno umro i od toga.

Zato medicini trebaju poređenja, a ne priče.`,
pr:{p:'Zašto „meni je pomoglo" nije dokaz da lek deluje?', o:['Jer ljudi lažu','Jer mnoge bolesti prođu same, a deluje i placebo','Jer je samo jedan lek dozvoljen'], t:1, z:'Bez poređenja ne znaš da li je pomogao lek, vreme ili očekivanje.'}},
{n:'Placebo i nocebo', t:`PLACEBO je lažni lek — šećerna pilula, injekcija vode — koji ipak ume da pomogne, jer mozak OČEKUJE pomoć. Najjači je kod bola, mučnine, umora, nesanice.

Čudnovato:
• skupa „pilula" deluje bolje od jeftine;
• dve pilule bolje od jedne;
• injekcija bolje od pilule.

Postoji i obrnuto, NOCEBO: kad očekuješ štetu, ona dolazi. Ljudi koji pročitaju dugačku listu nuspojava češće ih i osete — i kad su dobili šećernu pilulu.

Ali važno: placebo menja DOŽIVLJAJ (bol, mučninu), ne leči tumor, infekciju ni slomljenu kost.`,
pr:{p:'Šta je nocebo?', o:['Lek bez nuspojava','Kad očekivanje štete izazove simptome','Jača vrsta placeba'], t:1, z:'Očekivanje loših efekata ume da ih izazove — i kad je pilula lažna.'}},
{n:'Pošteno poređenje', t:`Najbolje oruđe medicine je RANDOMIZOVANA KONTROLISANA STUDIJA:
1. Uzmeš veliki broj bolesnih.
2. NASUMIČNO ih podeliš u dve grupe (kockom, ne po svom izboru), da bi grupe bile slične u svemu.
3. Jedna dobija lek, druga placebo ili postojeći lek.
4. DVOSTRUKO SLEPO: ni pacijent ni lekar ne zna ko je šta dobio — da očekivanje ne kvari rezultat.
5. Uporediš ishode.

Prvi poznati takav ogled: 1747. brodski lekar Džejms Lind je mornare bolesne od skorbuta podelio u parove i davao im različite „lekove". Za nekoliko dana ozdravili su samo oni koji su dobijali pomorandže i limun. (Trebalo je još pedesetak godina da britanska mornarica to uvede.)`,
pr:{p:'Šta znači „dvostruko slepa" studija?', o:['Učesnici su slepi','Ni pacijent ni lekar ne znaju ko dobija pravi lek','Studija je urađena dva puta'], t:1, z:'Kad niko ne zna ko šta dobija, očekivanja ne mogu da utiču na rezultat.'}},
{n:'Kako čitati naslov o zdravlju', t:`„Ljudi koji piju vino žive duže!" Tri pitanja pre nego što poveruješ:

1. KORELACIJA ILI UZROK? Možda vino piju ljudi koji su bogatiji, imaju bolju hranu i lekare. Ako je studija samo POSMATRALA ljude, ne zna se šta je uzrok (detaljno u lekciji „Naučni metod").
2. RELATIVNO ILI APSOLUTNO? „Rizik dupliran!" zvuči strašno. Ali ako je rizik bio 1 na 10.000, sad je 2 na 10.000. Uvek pitaj: od koliko na koliko?
3. JEDNA STUDIJA ILI VIŠE? Jedna studija je jedan glas. Pouzdanije su velike analize koje sabiraju mnogo studija (npr. organizacija Kokrejn to radi sistematski).

I četvrto: ko je studiju platio i ko od naslova ima korist?`,
pr:{p:'„Novi lek smanjuje rizik za 50%!" Šta prvo treba pitati?', o:['Koliko lek košta','Koliki je rizik bio na početku — od koliko na koliko','Ko je napisao naslov'], t:1, z:'Pad sa 2 na 1 od 1.000 i pad sa 40 na 20 od 100 su oba „50%", ali nisu isto.'}},
{n:'Put leka do apoteke — i kraj oblasti', t:`Pre nego što lek stigne u apoteku:
1. LABORATORIJA i ŽIVOTINJE — da li uopšte deluje i da li je otrovan.
2. FAZA 1 — mali broj zdravih dobrovoljaca: da li je bezbedan, kako se ponaša u telu.
3. FAZA 2 — stotine bolesnih: da li deluje i u kojoj dozi.
4. FAZA 3 — hiljade bolesnih, poređenje sa placebom ili postojećim lekom.
5. ODOBRENJE agencije, pa FAZA 4 — praćenje posle izlaska, kada se otkriju i retke nuspojave.

Traje 10 do 15 godina, i velika većina kandidata padne usput.

GENERIČKI LEK ima istu aktivnu supstancu kao originalni i mora da dokaže da se u telu ponaša isto — samo je jeftiniji jer je patent istekao.

Kraj oblasti „Telo i zdravlje". Kostur: telo kao sistem u ravnoteži → hrana i energija → odbrana od mikroba → mozak i san → i kako znamo šta zaista leči. Sledeće: ono što taj mozak proizvodi — um.`,
pr:{p:'Šta je generički lek?', o:['Slabija kopija originalnog leka','Lek sa istom aktivnom supstancom kao originalni, samo jeftiniji','Lek bez dozvole'], t:1, z:'Ista supstanca i dokazano isto ponašanje u telu; jeftiniji je jer je patent istekao.'}}
],
kljucno:['Priča „meni je pomoglo" nije dokaz: bolesti prolaze same, povratak ka sredini, placebo.','Placebo menja doživljaj (bol, mučnina), ne leči uzrok; nocebo — očekivanje štete izaziva simptome.','Randomizovana dvostruko slepa studija je zlatni standard (Lind i skorbut, 1747).','Kod naslova pitaj: korelacija ili uzrok, relativni ili apsolutni rizik, jedna ili mnogo studija.','Lek ide kroz faze 1–4 za 10–15 godina; generički lek ima istu supstancu.'],
kartice:[
{p:'Tri razloga zašto „meni je pomoglo" nije dokaz?', o:'Bolest prođe sama, povratak ka sredini, placebo.'},
{p:'Šta je nocebo?', o:'Očekivanje štete koje izazove simptome.'},
{p:'Šta je randomizovana dvostruko slepa studija?', o:'Nasumična podela u grupe, a ni pacijent ni lekar ne zna ko dobija pravi lek.'},
{p:'Šta pitaš kad čuješ „rizik dupliran"?', o:'Od koliko na koliko — koliki je apsolutni rizik.'},
{p:'Koliko traje razvoj novog leka?', o:'Oko 10–15 godina, kroz faze; većina kandidata padne.'}
],
razgovor:['Seti se jednog naslova ili saveta o zdravlju koji si čuo. Kako bi ga sada proverio?','Zašto ljudi više veruju priči komšije nego studiji na hiljadu ljudi? Da li i ti?']}
]},
{id:'5', naziv:'Um', ikona:'🧠', era:'ti, iznutra', lekcije:[
{id:'5-1', naslov:'Šta je psihologija — mozak, um i svest',
kuka:{p:'Koliko je stara psihologija kao nauka sa laboratorijama i eksperimentima?', o:['Oko 2.500 godina','Oko 150 godina','Oko 50 godina'], t:1},
delovi:[
{n:'Od filozofije do laboratorije', t:`Pitanja o duši, misli i osećanju stara su koliko i filozofija: Platon je delio dušu na razum, volju i strast, Dekart je um i telo video kao dve različite stvari.

Ali kao NAUKA, sa merenjem, psihologija je mlada. 1879. Vilhelm Vunt je u Lajpcigu otvorio prvu psihološku laboratoriju i počeo da meri, recimo, koliko brzo ljudi reaguju na zvuk ili svetlo.

Danas je psihologija nauka o PONAŠANJU i DOŽIVLJAJU: kako opažamo, učimo, pamtimo, osećamo, odlučujemo, kako se razvijamo i kako se ponašamo među drugima.`,
pr:{p:'Šta se desilo 1879. u Lajpcigu?', o:['Frojd je objavio prvu knjigu','Vunt je otvorio prvu psihološku laboratoriju','Otkriven je neuron'], t:1, z:'Vunt je počeo da meri ono što se ranije samo razmišljalo — psihologija je postala eksperimentalna nauka.'}},
{n:'Velike škole u jednoj liniji', t:`• PSIHOANALIZA — Sigmund Frojd, kraj 19. veka. Veliki deo psihe je NESVESTAN; potisnute želje i iskustva iz detinjstva oblikuju nas. Ogroman uticaj na kulturu i umetnost, ali većina njegovih konkretnih tvrdnji nije naučno potvrđena.
• BIHEVIORIZAM — Votson, Skiner, prva polovina 20. veka. „Ne nagađaj šta je u glavi, meri ponašanje." Učenje kroz nagradu i kaznu.
• KOGNITIVNA PSIHOLOGIJA — od 1950-ih. Um kao obrada informacija: pažnja, pamćenje, jezik, odlučivanje. Danas osnova.
• Plus: biološka i neuronauka (mozak), evoluciona (zašto smo takvi), socijalna (kako nas menjaju drugi), razvojna (od bebe do starosti).

Svaka škola je videla deo slona. Danas se kombinuju.`,
pr:{p:'Šta je biheviorizam proučavao?', o:['Snove i nesvesno','Samo vidljivo ponašanje i učenje kroz nagradu i kaznu','Gene'], t:1, z:'Bihevioristi su hteli da mere samo ono što se vidi — ponašanje — i kako ga oblikuju nagrade i kazne.'}},
{n:'Um i mozak', t:`Kako iz mokrog, sivog tkiva nastaje doživljaj — ukus kafe, crvena boja, tuga? To je PROBLEM UMA I TELA, a filozof Dejvid Čalmers ga je nazvao „TEŠKI PROBLEM SVESTI". Niko ga nije rešio.

Ono što je jasno: um zavisi od mozga. Najpoznatiji dokaz je slučaj FINIJASA GEJDŽA. 1848. gvozdena šipka mu je kod eksplozije na pruzi prošla kroz glavu, kroz čeoni deo mozga. Preživeo je, hodao i govorio — ali se promenio: od pouzdanog, odmerenog predradnika postao je nestrpljiv i nepouzdan. Prijatelji su rekli: „Gejdž više nije Gejdž."

Danas isto vidimo kod moždanog udara ili demencije: kad se menja mozak, menja se i ličnost. Ali KAKO materija postaje doživljaj — i dalje ne znamo.`,
pr:{p:'Šta je pokazao slučaj Finijasa Gejdža?', o:['Da mozak nije bitan za ličnost','Da oštećenje čeonog dela mozga može promeniti ličnost','Da se mozak potpuno oporavlja'], t:1, z:'Posle povrede čeonog režnja Gejdž je preživeo, ali mu se ličnost promenila — dokaz veze uma i mozga.'}},
{n:'Svesno i nesvesno', t:`Najveći deo onoga što mozak radi — ne vidiš. Vožnja poznatom rutom, prepoznavanje lica, pravila gramatike dok govoriš: sve automatski.

Psiholog Danijel Kaneman (Nobelova nagrada 2002) govori o dva načina mišljenja:
• SISTEM 1 — brz, automatski, intuitivan, bez napora.
• SISTEM 2 — spor, svestan, naporan, logičan.
Više o njima u lekciji o greškama u odlučivanju.

A PAŽNJA je usko grlo. U čuvenom ogledu (1999) ljudi gledaju snimak i broje koliko puta igrači u belom dodaju loptu. Usred snimka kroz igrače prođe čovek u kostimu gorile i lupi se u grudi. Oko polovine gledalaca — ne vidi gorilu.

Nismo kamera. Vidimo ono na šta pazimo.`,
pr:{p:'Šta je pokazao ogled sa „nevidljivom gorilom"?', o:['Da su ljudi slabog vida','Da kad smo usredsređeni na jedno, ne vidimo ni očigledno drugo','Da je snimak bio loš'], t:1, z:'Pažnja je ograničena — oko polovine ljudi ne primeti gorilu dok broji dodavanja.'}},
{n:'Kako psihologija zna šta zna', t:`Psihologija koristi oglede, ankete, posmatranje, praćenje ljudi kroz godine i snimanje mozga. Ali ima posebnu muku: ljudi nisu atomi. Menjaju se kad znaju da ih posmatraš, ne znaju zašto rade ono što rade, a u anketama ulepšavaju.

2015. velika grupa naučnika pokušala je da ponovi 100 objavljenih psiholoških ogleda. Isti rezultat dobili su u nešto više od trećine. To se zove KRIZA PONOVLJIVOSTI. Dobra vest: nauka je sama otkrila svoju slabost i sada se pooštrava.

Za tebe pouka: oprez sa „psihologija kaže" iz novina i sa testovima ličnosti sa interneta. Popularni test koji ljude deli u 16 tipova (MBTI) slabo je pouzdan — isti čovek posle par nedelja često dobije drugi tip. Model koji psiholozi smatraju najpouzdanijim je „VELIKIH PET" crta ličnosti: otvorenost, savesnost, ekstraverzija, prijatnost i emocionalna stabilnost (njena suprotnost se zove neuroticizam).`,
pr:{p:'Koji model ličnosti psiholozi smatraju najpouzdanijim?', o:['Horoskop','Test sa 16 tipova (MBTI)','„Velikih pet" crta ličnosti'], t:2, z:'Velikih pet (otvorenost, savesnost, ekstraverzija, prijatnost, emocionalna stabilnost) ima najviše naučne potvrde.'}}
],
kljucno:['Psihologija je nauka o ponašanju i doživljaju; kao eksperimentalna nauka počinje 1879. (Vunt).','Škole: psihoanaliza (Frojd), biheviorizam, kognitivna psihologija; danas se kombinuju.','Um zavisi od mozga (Finijas Gejdž), ali kako nastaje svest — „teški problem" — ne znamo.','Većina rada mozga je nesvesna; pažnja je ograničena (nevidljiva gorila).','Kriza ponovljivosti: oprez sa „psihologija kaže"; najpouzdaniji model ličnosti je Velikih pet.'],
kartice:[
{p:'Kada i gde je počela eksperimentalna psihologija?', o:'1879, Vuntova laboratorija u Lajpcigu.'},
{p:'Šta je „teški problem svesti"?', o:'Kako iz rada mozga nastaje doživljaj (Čalmers).'},
{p:'Šta pokazuje slučaj Finijasa Gejdža?', o:'Da oštećenje mozga (čeonog dela) može promeniti ličnost.'},
{p:'Šta je pokazao ogled sa nevidljivom gorilom?', o:'Da kad smo usredsređeni, ne vidimo ni očigledne stvari.'},
{p:'Kojih je „Velikih pet" crta ličnosti?', o:'Otvorenost, savesnost, ekstraverzija, prijatnost, emocionalna stabilnost.'}
],
razgovor:['Da li misliš da je svest samo rad mozga, ili nešto više? Zauzmi stav i obrazloži.','Seti se situacije kad nisi video nešto očigledno jer si bio usredsređen na drugo.']},

{id:'5-2', naslov:'Pamćenje i učenje',
kuka:{p:'Koliki deo novog gradiva otprilike zaboraviš za jedan dan, ako ga ne ponavljaš?', o:['Skoro ništa','Veliki deo — često i više od polovine','Baš sve'], t:1},
delovi:[
{n:'Tri skladišta', t:`Pamćenje nije jedna kutija, nego više njih:

• SENZORNO — delić sekunde. Trag slike posle treptaja.
• RADNO (kratkoročno) — „radni sto" svesti. Malo stane: oko 4 stvari odjednom (ranije se govorilo „7 plus-minus 2"). Zato broj telefona pamtiš u grupama.
• DUGOROČNO — bez poznate granice. Deli se na:
  – ono što možeš da ispričaš: činjenice („Pariz je glavni grad Francuske") i događaje („leto u Bečićima");
  – ono što znaš da radiš, a ne umeš da objasniš: vožnja, plivanje, kucanje na tastaturi.

Učenje je, u suštini, prebacivanje sa radnog stola u dugoročno skladište — i pravljenje puta da se ponovo nađe.`,
pr:{p:'Koliko stvari otprilike staje u radnu memoriju odjednom?', o:['Oko 4','Oko 100','Nema granice'], t:0, z:'Radna memorija je uska — oko 4 jedinice; zato grupišemo (brojeve, reči).'}},
{n:'Kriva zaboravljanja', t:`1885. nemački psiholog Herman Ebinghaus je radio ogled na samom sebi: učio je napamet besmislene slogove (ZOF, BIK, DAX…) i merio koliko pamti posle sata, dana, nedelje.

Dobio je KRIVU ZABORAVLJANJA: zaboravljanje je najbrže odmah posle učenja — za dan ode veliki deo — a posle se usporava.

I otkrio je lek: svako PONAVLJANJE posle razmaka izravna krivu. Posle drugog ponavljanja zaborav je sporiji, posle trećeg još sporiji.

Prepoznaješ? To je tačno ono što rade kartice u ovoj aplikaciji: vraćaju ti pitanje posle 1, 3, 7, 21 dana — baš kad bi inače počelo da bledi.`,
pr:{p:'Šta izravnava krivu zaboravljanja?', o:['Jedno dugo učenje u komadu','Ponavljanje sa razmakom','Učenje noću'], t:1, z:'Svako ponavljanje posle pauze usporava zaborav — to je osnova kartica u ovoj aplikaciji.'}},
{n:'Sećanje se ne snima — nego se gradi', t:`Pamćenje nije video-snimak. Svaki put kad se nečega setiš, ti to sećanje ponovo SASTAVIŠ — i malo izmeniš.

Psihološkinja Elizabet Loftus je pokazala koliko je to krhko:
• Kad ljude posle snimka sudara pitaš koliko su brzo kola „razbila" se jedna o drugu, procenjuju veću brzinu nego kad pitaš koliko su brzo „udarila" — a neki se posle „sećaju" i razbijenog stakla kojeg nije bilo.
• U drugom ogledu, uz pomoć rođaka, ljudima je pričano o izmišljenom događaju iz detinjstva — kako su se izgubili u tržnom centru. Otprilike svaki četvrti je počeo da ga se „seća", sa detaljima.

Zato su i živa, sigurna sećanja ponekad netačna, i zato svedoci greše. To ne znači da je sve laž — nego da sigurnost nije dokaz tačnosti.`,
pr:{p:'Šta je pokazala Elizabet Loftus?', o:['Da je pamćenje savršeno','Da se lažna sećanja mogu usaditi i da se sećanja menjaju','Da deca bolje pamte od odraslih'], t:1, z:'Sećanja se pri svakom prisećanju ponovo grade — mogu se izmeniti, pa i izmisliti.'}},
{n:'Šta stvarno pomaže učenju', t:`Ono što deluje (dobro potvrđeno):
• PRISEĆANJE — izvući iz glave, bez gledanja. Najjače oruđe.
• RAZMAK — više kratkih sesija umesto jedne duge.
• MEŠANJE — ne jedna tema do iznemoglosti, nego naizmenično.
• OBJAŠNJAVANJE svojim rečima — kao da učiš nekog drugog.
• SAN posle učenja — mozak tada sređuje naučeno.
• ZNAČENJE i EMOCIJA — pamti se ono što je povezano sa nečim što već znaš ili ti je važno.

Ono što deluje slabo, iako svi rade: ponovno čitanje, podvlačenje, prepisivanje.

A „STILOVI UČENJA" („ja sam vizuelni tip")? Ljudi zaista imaju sklonosti, ali istraživanja nisu našla da učenje „po svom stilu" daje bolje rezultate. Bolje je učiti na način koji gradivu odgovara — mapu gledaj, muziku slušaj, a sve izvlači iz glave.`,
pr:{p:'„Ja sam vizuelni tip, pa učim samo iz slika." Šta kaže nauka?', o:['Tačno, svako treba da uči svojim stilom','Nema dokaza da učenje po „stilu" daje bolje rezultate','Vizuelni tipovi uče najbrže'], t:1, z:'Sklonosti postoje, ali prilagođavanje „stilu" nije pokazalo korist; najviše pomažu prisećanje i razmak.'}},
{n:'Navike: kako učimo ponašanje', t:`Učimo i ponašanja, ne samo činjenice.

• PAVLOV (oko 1900): psi su slinili na zvuk koji je redovno najavljivao hranu. Učenje povezivanjem — zato ti miris neke kuhinje vrati detinjstvo.
• SKINER (sredina 20. veka): ponašanje koje bude nagrađeno — ponavlja se. A najjače drži nagrada koja stiže NASUMIČNO: nekad da, nekad ne. Na tome rade kockarski automati — i telefon. Svaki put kad ga pogledaš, možda je stigla poruka, možda nije. Zato ga gledaš sto puta dnevno.

Navika ima tri dela: ZNAK → RUTINA → NAGRADA (umor posle smene → telefon u krevetu → malo zabave). Znak i nagradu teško je izbrisati, ali RUTINA se može zameniti nečim drugim što daje sličnu nagradu.`,
pr:{p:'Zašto su kockarski automati i notifikacije na telefonu tako zarazni?', o:['Jer su šareni','Jer nagrada stiže nasumično, a to najjače drži naviku','Jer su besplatni'], t:1, z:'Nasumična nagrada (Skiner) najjače učvršćuje ponašanje — mozak stalno „proverava".'}}
],
kljucno:['Pamćenje: senzorno, radno (oko 4 stvari) i dugoročno (činjenice, događaji, veštine).','Kriva zaboravljanja (Ebinghaus): najbrže se zaboravlja odmah; ponavljanje sa razmakom je izravnava.','Sećanja se pri svakom prisećanju ponovo grade — mogu biti izmenjena ili izmišljena (Loftus).','Pomaže: prisećanje, razmak, mešanje, objašnjavanje, san, značenje; „stilovi učenja" su mit.','Navike: znak → rutina → nagrada; nasumična nagrada najjače drži.'],
kartice:[
{p:'Koliko otprilike staje u radnu memoriju?', o:'Oko 4 stvari odjednom.'},
{p:'Šta je kriva zaboravljanja i šta je izravnava?', o:'Brz zaborav odmah posle učenja; izravnava je ponavljanje sa razmakom.'},
{p:'Šta je pokazala Elizabet Loftus?', o:'Da se sećanja menjaju i da se lažna sećanja mogu usaditi.'},
{p:'Koja dva postupka najviše pomažu učenju?', o:'Prisećanje (bez gledanja) i ponavljanje sa razmakom.'},
{p:'Koja tri dela ima navika?', o:'Znak → rutina → nagrada.'}
],
razgovor:['Kao pisac: imaš li sećanje za koje si siguran da je tačno — a možda nije? Šta bi se promenilo da nije?','Koja tvoja navika radi po šemi znak → rutina → nagrada? Šta bi mogla biti druga rutina?']},

{id:'5-3', naslov:'Emocije i motivacija',
kuka:{p:'Koliko osnovnih izraza emocija na licu, po psihologu Polu Ekmanu, prepoznaju ljudi u svim kulturama?', o:['2','Oko 6','Oko 50'], t:1},
delovi:[
{n:'Čemu služe emocije', t:`Emocije nisu ukras ni slabost. To su brzi programi koji telo i mozak u deliću sekunde pripremaju za akciju:
• STRAH — pripremi se da bežiš ili da se smrzneš.
• BES — pripremi se da se boriš, odbraniš granicu.
• GAĐENJE — skloni se od pokvarenog i otrovnog.
• TUGA — uspori, povuci se, pozovi pomoć.
• RADOST — ponovi to, ostani blizu.
• IZNENAĐENJE — stani i pogledaj.

Pol Ekman je 1960-ih pokazao da ovih šest izraza lica prepoznaju ljudi u celom svetu, čak i u zajednicama bez kontakta sa Zapadom. Novija istraživanja kažu da je kultura ipak važnija nego što je on mislio: kako i kada pokazujemo emocije mnogo zavisi od toga gde smo odrasli.`,
pr:{p:'Čemu, evoluciono, služe emocije?', o:['Da nas usporavaju u odlukama','Da brzo pripreme telo i mozak za akciju','Ničemu, to je ostatak prošlosti'], t:1, z:'Strah, bes, gađenje i ostale emocije u deliću sekunde pripremaju telo za ono što situacija traži.'}},
{n:'Telo pre misli', t:`Hodaš kroz travu i vidiš nešto dugo i savijeno. Skočiš — pre nego što shvatiš da je to štap.

AMIGDALA (iz lekcije o mozgu) reaguje brže od svesnog mišljenja: srce ubrza, mišići se zategnu, adrenalin krene. Tek posle kora kaže „štap je, smiri se".

Psiholog Vilijam Džejms je još 1884. tvrdio nešto što zvuči naopako: „Ne bežimo zato što se plašimo — plašimo se zato što bežimo." Preterao je, ali je bio u pravu da su telo i osećanje neodvojivi: telo nije samo posledica emocije, nego njen deo.

Jedan koristan nalaz: kad jaku emociju IMENUJEŠ rečima („ovo je bes", „ovo je strah od gubitka"), aktivnost amigdale se smiri. Reči su ručna kočnica.`,
pr:{p:'Šta, po istraživanjima, pomaže da se jaka emocija smiri?', o:['Da je ignorišeš','Da je imenuješ rečima','Da o njoj ne misliš'], t:1, z:'Imenovanje emocije smanjuje aktivnost amigdale — reči deluju kao kočnica.'}},
{n:'Stres', t:`STRES je reakcija tela na zahtev ili pretnju. Sam po sebi nije loš:
• KRATAK stres izoštri pažnju i da snagu — ispit, važan razgovor, hitan slučaj.
• DUGOTRAJAN stres je problem: KORTIZOL ostaje povišen, pa trpe san, imunitet, pritisak, pamćenje i raspoloženje.

Šta stres čini najštetnijim? Ne samo koliko je težak, nego da li imaš OSEĆAJ KONTROLE i da li vidiš kraj. Isti posao je mnogo teži kad ne možeš ništa da promeniš i ne znaš dokle traje.

Šta pomaže, prema istraživanjima:
• kretanje (i šetnja),
• san,
• ljudi oko tebe — razgovor, dodir, pripadnost,
• vraćanje bar malog dela kontrole: plan, spisak, jedan korak koji zavisi od tebe.

Stoici bi rekli isto: razdvoji ono što zavisi od tebe od onoga što ne zavisi.`,
pr:{p:'Šta stres najviše čini štetnim?', o:['Da je kratak i jak','Osećaj da nemaš kontrolu i da ne vidiš kraj','Da se dešava ujutru'], t:1, z:'Dugotrajan stres bez osećaja kontrole drži kortizol povišenim i iscrpljuje telo.'}},
{n:'Šta nas pokreće', t:`Poznata MASLOVLJEVA PIRAMIDA kaže: prvo telo (hrana, san), pa sigurnost, pa pripadnost, pa poštovanje, pa ostvarenje sebe. Lepa slika, ali istraživanja ne potvrđuju da potrebe idu strogo stepenicu po stepenicu — ljudi stvaraju i u siromaštvu.

Danas je bolje potvrđena TEORIJA SAMOODREĐENJA (Deci i Rajan). Ljudi su najmotivisaniji kad su zadovoljene tri potrebe:
1. AUTONOMIJA — da ja biram.
2. KOMPETENCIJA — da umem i napredujem.
3. POVEZANOST — da pripadam, da nekome znači.

Razlikuju se dve vrste motivacije:
• UNUTRAŠNJA — radiš jer ti je samo po sebi zanimljivo ili važno.
• SPOLJAŠNJA — radiš zbog nagrade, plate, pohvale, straha.

Zamka: spoljašnja nagrada ume da ugasi unutrašnju. Deca koja su dobijala nagradu za crtanje, posle su manje crtala sama od sebe. Kad posao postane samo plata — gubi se ono zbog čega si ga voleo.`,
pr:{p:'Koje tri potrebe, po teoriji samoodređenja, pokreću ljude?', o:['Hrana, san, novac','Autonomija, kompetencija, povezanost','Moć, slava, sigurnost'], t:1, z:'Kad imaš izbor, napredak i pripadnost, motivacija je najjača i najtrajnija.'}},
{n:'Šta je sreća — i šta nije', t:`HEDONISTIČKA ADAPTACIJA: navikneš se na skoro sve. Nova kola, povišica, nova kuća — raduju neko vreme, pa postanu „normalno". Isto važi, srećom, i za mnoge nedaće: ljudi se oporave više nego što očekuju.

Šta onda dugoročno ide uz zadovoljstvo životom?
• NAJDUŽA STUDIJA ODRASLIH (Harvard, prati ljude više od 80 godina, od 1938): najbolji pokazatelj zdravog i srećnog života nije novac ni slava, nego KVALITET ODNOSA sa ljudima. Usamljenost je štetna kao pušenje.
• SMISAO — osećaj da ono što radiš nešto znači.
• ZDRAVLJE i san.
• NOVAC — pomaže, naročito kad izvlači iz brige i nesigurnosti; preko toga sve manje.

Nije mnogo drugačije od onoga što su govorili Aristotel (prijateljstvo i vrlina) i stoici. Nauka je stigla tamo gde je filozofija već bila — samo sa brojevima.`,
pr:{p:'Šta je, po najdužoj studiji odraslih (Harvard), najbolji pokazatelj srećnog i zdravog života?', o:['Novac','Kvalitet odnosa sa ljudima','Uspeh na poslu'], t:1, z:'Bliski, dobri odnosi bolje predviđaju zdravlje i sreću od novca i uspeha.'}}
],
kljucno:['Emocije su brzi programi za akciju; šest osnovnih izraza (Ekman), ali kultura je važnija nego što se mislilo.','Telo reaguje pre svesti (amigdala); imenovanje emocije je smiruje.','Kratak stres pomaže, dugotrajan šteti; najgori je bez osećaja kontrole.','Teorija samoodređenja: autonomija, kompetencija, povezanost; spoljašnja nagrada može ugasiti unutrašnju.','Navikavamo se na skoro sve; najbolji pokazatelj srećnog života su dobri odnosi.'],
kartice:[
{p:'Šest osnovnih emocija po Ekmanu?', o:'Radost, tuga, strah, bes, gađenje, iznenađenje.'},
{p:'Šta smiruje jaku emociju?', o:'Da je imenuješ rečima.'},
{p:'Šta stres čini najštetnijim?', o:'Kad traje dugo i nemaš osećaj kontrole.'},
{p:'Tri potrebe iz teorije samoodređenja?', o:'Autonomija, kompetencija, povezanost.'},
{p:'Šta je hedonistička adaptacija?', o:'Navikavanje na dobro i loše, pa se vraćamo na svoj uobičajeni nivo zadovoljstva.'}
],
razgovor:['Šta te pokreće da pišeš — unutrašnja ili spoljašnja motivacija? Šta bi se desilo kad bi pisanje postalo samo posao?','Na šta si se navikao pa više ne primećuješ koliko je dobro — ili koliko je loše?']},

{id:'5-4', naslov:'Zašto grešimo u odlukama',
kuka:{p:'Palica i loptica koštaju zajedno 110 dinara. Palica je 100 dinara skuplja od loptice. Koliko košta loptica?', o:['10 dinara','5 dinara','1 dinar'], t:1},
delovi:[
{n:'Dva sistema', t:`Ako ti je prvo palo na pamet „10 dinara" — nisi sam. Većini ljudi padne. Ali onda bi palica bila 110, a zajedno 120. Tačno je 5 i 105.

Danijel Kaneman (psiholog sa Nobelovom nagradom za ekonomiju 2002) to objašnjava sa dva sistema:
• SISTEM 1 — brz, automatski, bez napora. Prepoznaje lice, oseti opasnost, „zna" da je odgovor 10.
• SISTEM 2 — spor, naporan, logičan. Proverava. Ali je lenj i uključuje se tek kad mora.

Sistem 1 je odličan — bez njega ne bismo preživeli dan. Ali greši PREDVIDIVO, uvek na isti način. Te stalne greške zovu se KOGNITIVNE PRISTRASNOSTI. Upoznajmo najvažnije.`,
pr:{p:'Zašto većini prvo padne na pamet da loptica košta 10?', o:['Zbog loše matematike','Jer brzi, intuitivni sistem 1 skoči na odgovor pre provere','Jer je pitanje pogrešno'], t:1, z:'Sistem 1 nudi lak, „očigledan" odgovor, a lenji sistem 2 ga ne proveri.'}},
{n:'Tražimo ono što već mislimo', t:`PRISTRASNOST POTVRĐIVANJA: tražimo, primećujemo i pamtimo ono što potvrđuje ono u šta već verujemo — a ono što ne potvrđuje, preskočimo ili omalovažimo.

• Ko misli da je neki političar lopov, pamti svaku njegovu aferu; ko ga voli, pamti svaki uspeh.
• Ko veruje da „mlad mesec donosi kišu", pamti kišne mladine, a zaboravi suve.

Internet je ovo pojačao do krajnosti: algoritmi ti nude još više onoga na šta si već kliknuo. Svako živi u svom ogledalu.

Najbolji lek je naporan, ali deluje: NAMERNO TRAŽI NAJJAČI ARGUMENT PROTIV SEBE. Ne slabašnu karikaturu suprotne strane (slamnati čovek iz lekcije o logici), nego najbolju verziju.`,
pr:{p:'Šta je pristrasnost potvrđivanja?', o:['Kad tražimo dokaze protiv sebe','Kad tražimo i pamtimo ono što potvrđuje ono što već verujemo','Kad potvrdimo tuđe mišljenje iz pristojnosti'], t:1, z:'Prirodno skupljamo „dokaze" za ono što već mislimo; lek je namerno tražiti najjači protivargument.'}},
{n:'Sidro i ono čega se lako setimo', t:`SIDRENJE: prvi broj koji čuješ vuče tvoju procenu, i kad nema veze sa stvari.
• „Bilo 5.000, sada samo 2.999!" — 2.999 deluje jeftino jer je pored 5.000.
• U ogledima, ljudi kojima se prvo pokaže veliki broj procenjuju više, i kad znaju da je broj izvučen nasumično.
Kod pregovora: ko prvi kaže broj, baca sidro.

DOSTUPNOST: ono čega se lako setimo, mislimo da je češće.
• Posle vesti o padu aviona ljudi se plaše letenja, a nastavljaju da voze — iako je put kolima mnogo opasniji.
• Posle nekoliko priča o krađama u kraju, deluje da je kriminal porastao, i kad nije.

Vesti biraju ono što je retko i dramatično — zato nam slika sveta iz vesti sistematski greši.`,
pr:{p:'Zašto „sniženo sa 5.000 na 2.999" deluje kao dobar posao?', o:['Jer je zaista uvek jeftino','Jer prvi broj (5.000) služi kao sidro za procenu','Jer volimo neparne brojeve'], t:1, z:'Prvi broj „usidri" procenu — 2.999 izgleda malo u poređenju sa 5.000, bez obzira na pravu vrednost.'}},
{n:'Gubitak boli više', t:`AVERZIJA PREMA GUBITKU: gubitak od 1.000 dinara boli otprilike DVOSTRUKO više nego što dobitak od 1.000 raduje.

Iz toga slede tipične greške:
• POTOPLJENI TROŠAK: „Već sam uložio toliko, ne mogu sad da odustanem." Gledaš loš film do kraja jer si platio kartu; popravljaš auto koji stalno kvari jer si već dao toliko para. Ali uloženo je potrošeno svejedno — pitanje je samo šta je pametno od SADA.
• KOCKAREVA ZABLUDA: posle pet crvenih na ruletu „mora da dođe crno". Ne mora. Kuglica nema pamćenje; šansa je svaki put ista.
• Zadržavanje loših odluka da ne bi morao da priznaš gubitak.

Pitanje koje razbija potopljeni trošak: „Da sad krećem od nule, da li bih ovo izabrao?"`,
pr:{p:'Šta je kockareva zabluda?', o:['Verovanje da se kockom može zaraditi','Verovanje da posle niza crvenih „mora" doći crno','Strah od gubitka'], t:1, z:'Svako bacanje je nezavisno — kuglica ne pamti prošla. Šansa ostaje ista.'}},
{n:'Kako da se braniš', t:`Pristrasnosti ne možeš izbrisati — ugrađene su. Ali ih možeš uhvatiti, naročito kod važnih odluka:

1. USPORI. Ako odluka može da sačeka — prespavaj. Sistem 2 je lenj, daj mu vremena.
2. ZAPIŠI zašto odlučuješ. Lakše je uočiti rupu na papiru nego u glavi.
3. PITAJ: „Šta bi me uverilo da grešim?" Ako ništa — ne razmišljaš, nego braniš.
4. OSNOVNA STOPA: koliko često se ovo inače dešava? (Koliko novih kafića preživi pet godina? Malo — i tvoj je, u početku, jedan od njih.)
5. PITAJ NEKOGA KO SE NE SLAŽE — ne da te ubedi, nego da vidiš šta ne vidiš.
6. „Da krećem od nule, da li bih ovo izabrao?" — protiv potopljenog troška.

Kraj nije u tome da budeš savršeno racionalan, nego da napraviš malo manje skupih grešaka.`,
pr:{p:'Šta je dobra zaštita od sopstvenih pristrasnosti?', o:['Uvek verovati prvom osećaju','Pitati „šta bi me uverilo da grešim?"','Odlučivati što brže'], t:1, z:'Ako ništa ne bi moglo da te uveri da grešiš — ne odlučuješ, nego braniš unapred zauzet stav.'}}
],
kljucno:['Sistem 1 je brz i intuitivan, sistem 2 spor i proverava; sistem 1 greši predvidivo (Kaneman).','Pristrasnost potvrđivanja: tražimo ono što već mislimo; lek je najjači protivargument.','Sidrenje (prvi broj vuče procenu) i dostupnost (lako setivo deluje češće).','Gubitak boli oko dvostruko više od dobitka: potopljeni trošak, kockareva zabluda.','Odbrana: uspori, zapiši, pitaj šta bi te razuverilo, osnovna stopa, tuđe mišljenje.'],
kartice:[
{p:'Koja je razlika između sistema 1 i sistema 2?', o:'Sistem 1 je brz i intuitivan; sistem 2 spor, naporan i logičan.'},
{p:'Šta je pristrasnost potvrđivanja?', o:'Tražimo i pamtimo ono što potvrđuje ono što već verujemo.'},
{p:'Šta je sidrenje?', o:'Prvi broj koji čujemo vuče našu procenu.'},
{p:'Šta je potopljeni trošak?', o:'Nastavljanje nečega samo zato što smo već mnogo uložili.'},
{p:'Koje pitanje štiti od potopljenog troška?', o:'„Da krećem od nule, da li bih ovo izabrao?"'}
],
razgovor:['Seti se odluke kad si nastavio nešto samo zato što si već mnogo uložio. Šta bi danas uradio?','U kojoj temi si najskloniji da tražiš samo potvrdu? Budi iskren.']},

{id:'5-5', naslov:'Jezik — šta je, kako ga dete uči, kako se menja',
kuka:{p:'Otprilike koliko jezika se danas govori u svetu?', o:['Oko 200','Oko 7.000','Oko 50.000'], t:1},
delovi:[
{n:'Šta je jezik', t:`Mnoge životinje komuniciraju: pčela plesom pokaže gde je cveće, majmuni imaju različite krike za orla i za zmiju. Ali ljudski jezik ima nešto što nijedna nema: od KONAČNOG broja reči i pravila pravi BESKONAČNO MNOGO rečenica — i one koje niko nikad nije izgovorio. Ovu rečenicu verovatno niko pre tebe nije pročitao, a ipak je razumeš.

Još jedna osobina: reči su PROIZVOLJNE. Reč „pas" nema u sebi ništa pseće — Englez kaže „dog", Nemac „Hund". Dogovor zajednice, ne priroda.

Danas se u svetu govori oko 7.000 jezika. Polovina ljudi govori samo dvadesetak najvećih, a veliki deo malih jezika je ugrožen — kad umre poslednji govornik, nestaje ceo način da se svet imenuje.`,
pr:{p:'Šta ljudski jezik razlikuje od komunikacije životinja?', o:['Ljudi koriste zvuk','Od konačno mnogo reči i pravila pravi beskonačno mnogo novih rečenica','Ljudi imaju više signala za opasnost'], t:1, z:'Gramatika omogućava da se kombinuje beskonačno — i da razumeš rečenicu koju nikad nisi čuo.'}},
{n:'Spratovi jezika', t:`Lingvistika — nauka o jeziku — gleda jezik po spratovima:

• GLASOVI (fonetika i fonologija). Srpski ima 30 glasova i, zahvaljujući Vuku, skoro savršeno pismo: „Piši kao što govoriš."
• OBLICI REČI (morfologija): pas, psa, psu, psom — sedam padeža. Englezu košmar, nama normalno.
• REČENICE (sintaksa): kako se reči slažu. „Pas je ujeo čoveka" i „Čoveka je ujeo pas" — iste reči, isto značenje, drugi naglasak.
• ZNAČENJE (semantika).
• UPOTREBA (pragmatika): „Imaš li sat?" ne pita da li poseduješ sat, nego koliko je sati. Značenje zavisi od situacije i namere — nešto što pisac radi stalno, kroz podtekst.`,
pr:{p:'Šta proučava pragmatika?', o:['Glasove','Oblike reči','Kako značenje zavisi od situacije i namere'], t:2, z:'„Imaš li sat?" — pravo značenje (koliko je sati) daje situacija, ne same reči.'}},
{n:'Jezici rođaci', t:`1786. britanski sudija u Indiji, Vilijam Džons, primetio je da su stari indijski sanskrit, grčki i latinski toliko slični da moraju imati zajedničkog pretka.

Tako je otkrivena INDOEVROPSKA porodica — srpski, ruski, engleski, nemački, francuski, grčki, persijski, hindi — svi potiču od jednog jezika koji se govorio pre oko 6.000 godina. Pogledaj:
mati — mother — Mutter · tri — three — drei · noć — night — Nacht · brat — brother — Bruder.

Jezici se stalno menjaju, kao i vrste. Iz staroslovenskog su izrasli današnji slovenski jezici. Nema „pokvarenog" jezika, samo promene — svaka generacija misli da mlađi kvare jezik, i svaka se vara.

Srpski, hrvatski, bosanski i crnogorski su lingvistički veoma bliski i govornici se bez muke razumeju. Da li su to jedan ili više jezika — to je u velikoj meri pitanje politike i identiteta, ne same lingvistike.`,
pr:{p:'Šta je zajedničko srpskom, engleskom i hindiju?', o:['Ništa','Pripadaju istoj, indoevropskoj porodici jezika','Isto pismo'], t:1, z:'Svi potiču od jezika koji se govorio pre oko 6.000 godina — zato mati, mother i Mutter liče.'}},
{n:'Kako dete uči jezik', t:`Dete do četvrte-pete godine savlada složenu gramatiku — bez ijednog časa, bez udžbenika. Kako?

Ključni trag su GREŠKE. Dete kaže „ja sam idao" ili „dođao sam". To nikad nije čulo od odraslih! Znači da ne ponavlja samo, nego samo IZVODI PRAVILA i primenjuje ih i tamo gde jezik pravi izuzetak.

Dve velike struje objašnjenja:
• Noam Čomski: čovek se rađa sa urođenom sposobnošću za jezik, a iskustvo samo podešava detalje.
• Drugi: dečji mozak je izuzetan statističar — iz hiljada sati slušanja izvlači obrasce.
Verovatno oboje.

Bebe na rođenju razlikuju glasove svih jezika sveta; oko prve godine se „suze" na glasove svog jezika. A što više reči beba čuje upućenih NJOJ — u razgovoru, pričanju, čitanju — to joj se jezik bolje razvija. Najbolja oprema za to je glas roditelja.`,
pr:{p:'Šta pokazuju dečje greške kao „ja sam idao"?', o:['Da dete loše čuje','Da dete samo izvodi pravila gramatike, a ne samo ponavlja','Da je gramatika nebitna'], t:1, z:'Takve oblike dete nije čulo — samo je primenilo pravilo tamo gde jezik ima izuzetak.'}},
{n:'Jezik i misao — i kraj oblasti', t:`Da li jezik kojim govoriš menja to kako misliš? To je stara HIPOTEZA SAPIRA I VORFA.

• Jaka verzija — jezik ODREĐUJE šta možeš da misliš — odbačena je. Možeš misliti i ono za šta nemaš reč; zato uopšte izmišljamo nove reči.
• Blaga verzija — jezik UTIČE na pažnju, opažanje i pamćenje — ima potvrde. Ruski ima dve odvojene osnovne reči za svetloplavu i tamnoplavu, i Rusi u ogledima brže razlikuju te nijanse. Neki jezici opisuju prostor strane sveta („šolja ti je severno od tanjira"), pa njihovi govornici uvek znaju gde je sever.

Za pisca: reči nisu samo odelo misli. Ponekad je reč ta koja tek napravi misao.

Kraj oblasti „Um". Kostur: kako psihologija proučava um → kako pamtimo i učimo → šta nas pokreće i kako osećamo → zašto predvidivo grešimo → i jezik, kojim sve to mislimo i delimo.

Sledeće: kako je taj um, za 300.000 godina, napravio istoriju.`,
pr:{p:'Šta istraživanja kažu o tome da li jezik utiče na mišljenje?', o:['Jezik potpuno određuje šta možemo da mislimo','Jezik ne određuje mišljenje, ali utiče na pažnju i opažanje','Jezik nema nikakve veze sa mišljenjem'], t:1, z:'Jaka verzija Sapir-Vorfove hipoteze je odbačena; blaga — uticaj na pažnju i opažanje — ima potvrde.'}}
],
kljucno:['Jezik od konačnih reči i pravila pravi beskonačno mnogo rečenica; reči su proizvoljne; oko 7.000 jezika.','Spratovi: glasovi, oblici, rečenice, značenje, upotreba (pragmatika).','Indoevropska porodica: srpski, engleski, hindi imaju zajedničkog pretka od pre oko 6.000 godina; jezici se stalno menjaju.','Dete izvodi pravila (greške „idao"); urođena sposobnost i statističko učenje; bebi pomaže mnogo reči upućenih njoj.','Jezik ne određuje mišljenje, ali utiče na pažnju i opažanje.'],
kartice:[
{p:'Šta je posebno u ljudskom jeziku?', o:'Od konačno mnogo reči i pravila pravi beskonačno mnogo novih rečenica.'},
{p:'Šta proučava pragmatika?', o:'Kako značenje zavisi od situacije i namere.'},
{p:'Koja porodica jezika povezuje srpski, engleski i hindi?', o:'Indoevropska.'},
{p:'Šta pokazuju dečje greške kao „idao"?', o:'Da dete samo izvodi pravila gramatike.'},
{p:'Šta danas važi za Sapir-Vorfovu hipotezu?', o:'Jezik ne određuje mišljenje, ali utiče na pažnju i opažanje.'}
],
razgovor:['Kao pisac: da li ti se desilo da reč promeni misao, a ne obrnuto? Daj primer.','Kako bi nekome objasnio da „pokvaren jezik" ne postoji, nego samo jezik koji se menja?']}
]},
{id:'6', naziv:'Kako smo stigli dovde', ikona:'🏛️', era:'300.000 god. → 1900.', lekcije:[
{id:'6-1', naslov:'Poreklo čoveka i lovci-sakupljači',
kuka:{p:'Koliko dugo, otprilike, postoji naša vrsta — Homo sapiens?', o:['Oko 6.000 godina','Oko 300.000 godina','Oko 3 miliona godina'], t:1},
delovi:[
{n:'Rođaci, ne potomci majmuna', t:`Najčešća zabluda: „čovek je postao od majmuna". Nije. Čovek i šimpanza imaju ZAJEDNIČKOG PRETKA koji je živeo u Africi pre oko 6–7 miliona godina. Od njega su se razdvojile dve loze: jedna je vodila do šimpanzi, druga do nas. Šimpanza nam je rođak, ne deda.

Na našoj liniji bilo je mnogo vrsta. Nisu išle u jednom redu, „jedna za drugom", nego kao grane žbuna — neke su živele istovremeno, većina je izumrla bez potomaka.

Prvo je došao USPRAVAN HOD, tek kasnije VELIKI MOZAK. Najpoznatija fosilna „baka" je LUSI, australopitek iz Etiopije, stara oko 3,2 miliona godina: hodala je na dve noge, a mozak joj je bio veličine šimpanzinog.`,
pr:{p:'Kakav je odnos čoveka i šimpanze?', o:['Čovek je nastao od šimpanze','Imaju zajedničkog pretka od pre 6–7 miliona godina','Nisu nikako povezani'], t:1, z:'Šimpanza nam je rođak — obe vrste potiču od istog pretka, pa su se loze razdvojile.'}},
{n:'Od kamena do vatre', t:`Rod HOMO („čovek") pojavljuje se pre oko 2,5 miliona godina, sa prvim kamenim alatkama — oštrim odbijenim komadima kamena za sečenje mesa.

HOMO EREKTUS (pre oko 1,9 miliona godina) imao je telo skoro kao naše, pravio bolje alatke i prvi je izašao iz Afrike — stigao je do Kine i Jave.

Najveći skok: VATRA. Tragovi upotrebe vatre stari su oko milion godina, a redovna upotreba je tu pre oko 400.000 godina. Vatra greje, tera zveri, a najviše od svega — KUVA. Kuvana hrana se lakše vari, pa telo dobija više energije uz manje creva. Neki naučnici misle da je baš to hranilo sve veći mozak.

Naša vrsta, HOMO SAPIENS, pojavljuje se u Africi pre oko 300.000 godina (najstariji nalazi su iz Maroka).`,
pr:{p:'Zašto je vatra bila toliki skok?', o:['Samo zbog svetla noću','Kuvana hrana daje više energije, a vatra još greje i štiti','Zbog pravljenja metala'], t:1, z:'Kuvanje olakšava varenje i daje više energije — a vatra usput greje i tera zveri.'}},
{n:'Izlazak iz Afrike', t:`Pre oko 60–70.000 godina male grupe sapijensa krenule su iz Afrike i za desetine hiljada godina naselile ceo svet: Aziju, Evropu, Australiju (pre oko 50.000 godina, preko mora!), a Ameriku poslednju, pre najmanje 15–20.000 godina, preko kopna koje je tada spajalo Sibir i Aljasku.

Nisu bili sami. U Evropi i zapadnoj Aziji živeli su NEANDERTALCI — snažni, sa mozgom velikim kao naš, sahranjivali su mrtve i pravili nakit. Nestali su pre oko 40.000 godina. Ali ne potpuno: sapijensi i neandertalci su imali zajedničku decu. Svaki čovek čiji su preci van Afrike nosi oko 1–2% neandertalske DNK.

I još nešto: svi ljudi danas su genetski vrlo bliski — mnogo bliži nego dve grupe šimpanzi iz susednih šuma. Razlike koje nas „dele" na rase su tanak sloj na površini.`,
pr:{p:'Šta se desilo sa neandertalcima?', o:['Izumrli su bez traga','Nestali su pre oko 40.000 godina, ali deo njihove DNK nosimo i mi','Žive i danas u planinama'], t:1, z:'Sapijensi i neandertalci su imali zajedničku decu — zato ljudi van Afrike nose 1–2% neandertalske DNK.'}},
{n:'Kako su živeli lovci-sakupljači', t:`Više od 95% vremena koje postojimo, ljudi su bili LOVCI-SAKUPLJAČI: lov, ribolov, skupljanje plodova, korenja i meda. Živeli su u malim grupama od nekoliko desetina ljudi, selili se za hranom i imali malo stvari — sve što imaš, moraš da nosiš.

Istraživanja današnjih lovaca-sakupljača pokazuju: ishrana raznovrsna, a uglavnom veća jednakost nego kasnije — nema kraljeva, nema bogataša. Ali i surovo: mnogo dece je umiralo, a sukobi između grupa nisu bili retki. Ni raj, ni pakao.

Pre oko 40–50.000 godina eksplodira simbolički svet: pećinski crteži (Šove u Francuskoj, preko 30.000 godina; još stariji na ostrvu Sulavesi), figurice, frule od kosti, nakit. Ljudi pričaju priče, crtaju i — verovatno — veruju.

Naše telo i um su uglavnom oblikovani za taj život. Zato volimo slatko i masno (retko i dragoceno tada), zato smo dobri u malim grupama i čitanju lica, a lošiji u brojkama i dugom sedenju.`,
pr:{p:'Koliki deo ljudske istorije smo bili lovci-sakupljači?', o:['Oko polovine','Više od 95%','Oko 10%'], t:1, z:'Poljoprivreda je stara samo oko 12.000 godina, a vrsta oko 300.000 — ostalo je bio lov i sakupljanje.'}},
{n:'Lepenski Vir — i kraj jednog sveta', t:`Na Dunavu, u Đerdapu, nalazi se LEPENSKI VIR — naselje ribara i lovaca, naseljavano hiljadama godina. Najpoznatija faza, stara oko 8.000 godina, ostavila je kuće trapeznog oblika, ognjišta, i čuvene kamene skulpture sa ljudskim licem i ribljim crtama. Jedna od najvažnijih praistorijskih lokacija u Evropi.

Lepenski Vir je zanimljiv i zato što se vidi PRELAZ: kasniji slojevi pokazuju dolazak ratara i stočara. Svet lovaca polako se gasi i počinje nešto novo.

Kostur do sada: zajednički predak sa šimpanzom → uspravan hod → alatke i vatra → sapijens u Africi → naselili ceo svet → umetnost i simboli. Sve to bez ijednog grada i ijedne njive.

Sledeće: zašto smo posle 290.000 godina lutanja odjednom seli i počeli da oremo.`,
pr:{p:'Šta je Lepenski Vir?', o:['Rimski grad','Praistorijsko naselje ribara i lovaca na Dunavu, sa kućama i skulpturama starim oko 8.000 godina','Srednjovekovni manastir'], t:1, z:'Lepenski Vir u Đerdapu je mezolitsko naselje sa poznatim kamenim skulpturama i tragovima prelaza na zemljoradnju.'}}
],
kljucno:['Čovek i šimpanza imaju zajedničkog pretka od pre 6–7 miliona godina; prvo uspravan hod, pa veliki mozak.','Alatke (2,5 mil. god.), vatra i kuvanje; Homo sapiens u Africi pre oko 300.000 godina.','Izlazak iz Afrike pre 60–70.000 godina; neandertalci nestali pre oko 40.000, a deo njihove DNK nosimo.','Više od 95% istorije smo bili lovci-sakupljači u malim grupama; telo i um su oblikovani za taj život.','Lepenski Vir na Dunavu: naselje ribara i lovaca (najpoznatija faza oko 8.000 godina), sa tragovima prelaza na zemljoradnju.'],
kartice:[
{p:'Koliko je stara vrsta Homo sapiens?', o:'Oko 300.000 godina.'},
{p:'Kada su se razdvojile loze čoveka i šimpanze?', o:'Pre oko 6–7 miliona godina, od zajedničkog pretka.'},
{p:'Koliko neandertalske DNK nose ljudi čiji su preci van Afrike?', o:'Oko 1–2%.'},
{p:'Zašto je kuvanje bilo važno za evoluciju čoveka?', o:'Kuvana hrana daje više energije uz lakše varenje — verovatno je hranila veći mozak.'},
{p:'Šta je Lepenski Vir?', o:'Naselje ribara i lovaca u Đerdapu; kuće i skulpture stare oko 8.000 godina.'}
],
razgovor:['Šta u tvom svakodnevnom životu najjasnije pokazuje da nam je telo „napravljeno" za lovce-sakupljače?','Da li misliš da su lovci-sakupljači bili srećniji od nas? Šta bi ti nedostajalo, a šta ne?']},
{id:'6-2', naslov:'Poljoprivreda, gradovi, pismo — prve civilizacije',
kuka:{p:'Zašto je, po tvom mišljenju, izmišljeno pismo?', o:['Da se zapišu pesme i mitovi','Da se vodi evidencija — žito, stoka, porezi','Da se pišu pisma'], t:1},
delovi:[
{n:'Najveća promena: njiva', t:`Pre oko 12.000 godina, kad se završilo poslednje ledeno doba, ljudi u PLODNOM POLUMESECU (današnji Irak, Sirija, Turska, Izrael) počeli su da seju pšenicu i ječam i da drže koze i ovce. To je NEOLITSKA REVOLUCIJA.

Nije se desila samo jednom. Nezavisno, na više mesta: u Kini (pirinač, proso), u Mezoamerici (kukuruz), u Andima (krompir), na Novoj Gvineji, u Africi. Kad jednom postane moguće, ljudi to otkrivaju svuda.

Zanimljivo: u Turskoj postoji GEBEKLI TEPE, ogromni kameni hram star oko 11.500 godina — stariji od poljoprivrede u tom kraju. Možda su ljudi prvo počeli da se okupljaju zbog verovanja, a tek onda da seju da bi nahranili okupljene.`,
pr:{p:'Gde je poljoprivreda počela?', o:['Samo u Egiptu','Na više mesta nezavisno — prvo u Plodnom polumesecu, pa u Kini, Americi i drugde','U Evropi'], t:1, z:'Plodni polumesec je najraniji, ali su Kina, Mezoamerika, Andi i drugi do nje stigli sami.'}},
{n:'Cena napretka', t:`Poljoprivreda je dala VIŠE HRANE PO KOMADU ZEMLJE, pa je ljudi bilo mnogo više. Ali pojedinac nije uvek živeo bolje:

• ishrana je postala jednoličnija (nekoliko žitarica), pa su prvi ratari često bili niži i bolesniji od lovaca;
• život uz stoku i u gužvi doneo je ZARAZNE BOLESTI (mnoge su prešle sa životinja);
• rad je bio težak i od jutra do mraka;
• pojavio se VIŠAK — žito koje može da se čuva. A višak može da se otme, nasledi i gomila. Rađaju se bogati i siromašni, ratovi oko zemlje i ambara.

Zato neki istoričari kažu da je poljoprivreda bila „zamka": kad jednom imaš deset puta više ljudi, ne možeš nazad u lov.

U Srbiji je to vreme VINČE (oko 5.400–4.500. p. n. e.) — velika naselja, keramika, figurice. Na Pločniku kod Prokuplja nađeni su jedni od najstarijih tragova topljenja bakra na svetu, stari oko 7.000 godina.`,
pr:{p:'Zašto se kaže da je poljoprivreda donela i nejednakost?', o:['Zbog lošeg vremena','Zbog viška hrane koji može da se gomila, nasleđuje i otima','Zato što su ratari bili lenji'], t:1, z:'Višak žita može da se čuva i poseduje — iz toga nastaju bogati i siromašni, vlast i ratovi.'}},
{n:'Gradovi i država', t:`Sa viškom hrane, ne mora svako da ore. Pojavljuju se SPECIJALISTE: zanatlije, sveštenici, vojnici, činovnici. I prvi GRADOVI — najpre u MESOPOTAMIJI, između Tigra i Eufrata. Uruk je oko 3.200. p. n. e. imao desetine hiljada stanovnika.

Uporedo nastaju velike civilizacije uz velike reke, jer reka znači vodu za navodnjavanje:
• EGIPAT uz Nil — piramide u Gizi oko 2.560. p. n. e.;
• Dolina INDA (Harapa, Mohendžo-Daro) — gradovi sa ulicama pod pravim uglom i kanalizacijom;
• KINA uz Žutu reku.

Grad traži organizaciju: ko upravlja kanalima, ko deli žito, ko sudi. Tako se rađa DRŽAVA — vladar, činovnici, porez, vojska i zakon. Jedan od najstarijih sačuvanih zakonika je HAMURABIJEV (Vavilon, oko 1.750. p. n. e.) — urezan u kamen, sa čuvenim „oko za oko", ali i sa različitim kaznama za robove i gospodare.`,
pr:{p:'Zašto su prve civilizacije nastale uz velike reke?', o:['Zbog ribe','Reke su davale vodu za navodnjavanje i plodnu zemlju','Zbog lepog pogleda'], t:1, z:'Navodnjavanje uz Tigar, Eufrat, Nil, Ind i Žutu reku davalo je velike viškove hrane.'}},
{n:'Pismo — knjigovodstvo koje je promenilo sve', t:`Pismo NIJE izmišljeno za pesme. Najstariji zapisi (Sumer, oko 3.200. p. n. e.) su — spiskovi: koliko džakova ječma, koliko ovaca, ko kome duguje. Pisalo se trščanom pisaljkom po mekoj glini, otud KLINASTO PISMO.

Pismo je izmišljeno nezavisno bar tri puta: u Mesopotamiji (pa skoro odmah u Egiptu — hijeroglifi), u Kini (oko 1.200. p. n. e.) i u Mezoamerici.

Prva pisma su imala stotine znakova — učili su ih samo pisari, godinama. Onda su FENIČANI (oko 1.000. p. n. e.) napravili ALFABET: dvadesetak znakova, jedan za jedan glas. Od njega je grčko pismo, od grčkog latinica i — kasnije — ćirilica.

Kad se jednom piše, znanje više ne zavisi od pamćenja jednog starca. Može da se gomila, prenosi, proverava. Odatle počinje ISTORIJA u užem smislu; sve pre toga je praistorija.`,
pr:{p:'Šta su bili najstariji pisani zapisi?', o:['Ljubavne pesme','Spiskovi i računi — žito, stoka, dugovi','Molitve'], t:1, z:'Pismo je u Sumeru nastalo iz knjigovodstva; književnost je došla kasnije.'}},
{n:'Bronza, gvožđe i prvi slom', t:`Ljudi su naučili da tope bakar, pa da ga mešaju sa kalajem u BRONZU (oko 3.300. p. n. e.) — tvrđu, za oružje i alat. Kasnije, GVOŽĐE (oko 1.200. p. n. e.) — teže za obradu, ali ruda ga ima svuda, pa je jeftinije.

Oko 1.200–1.150. p. n. e. desio se SLOM KASNOG BRONZANOG DOBA: u par decenija propalo je više velikih država istočnog Mediterana (Hetiti, mikenska Grčka), a Egipat je oslabio. Uzroci su verovatno udruženi — suše, zemljotresi, pobune, napadi „naroda sa mora", pucanje trgovine od koje su svi zavisili. Lekcija koja važi i danas: sistem koji je čvrsto povezan može i da padne zajedno.

Kostur: njiva → višak → gradovi i specijalisti → država, zakon i porez → pismo → metal. Sve to za oko 8.000 godina — tren u odnosu na 300.000.

Sledeće: antika — vreme kad su se na nekoliko mesta odjednom rodile ideje sa kojima i danas živimo.`,
pr:{p:'Šta pokazuje slom kasnog bronzanog doba?', o:['Da je gvožđe bolje od bronze','Da međusobno povezani sistemi mogu da padnu zajedno kad se nevolje udruže','Da su Hetiti bili najjači'], t:1, z:'Suše, ratovi i prekid trgovine su se sabrali — pale su države koje su zavisile jedna od druge.'}}
],
kljucno:['Neolitska revolucija pre oko 12.000 godina: Plodni polumesec, pa nezavisno Kina, Amerika i drugi.','Poljoprivreda: više ljudi i višak hrane, ali i bolesti, težak rad i nejednakost.','Prvi gradovi i države uz velike reke (Mesopotamija, Egipat, Ind, Kina); Hamurabijev zakonik.','Pismo nastaje iz knjigovodstva (Sumer, oko 3.200. p. n. e.); Feničani daju alfabet → grčko → latinica i ćirilica.','Bronza, pa gvožđe; slom oko 1.200. p. n. e. pokazuje da povezani sistemi padaju zajedno. Kod nas: Vinča i bakar sa Pločnika.'],
kartice:[
{p:'Kada i gde počinje poljoprivreda?', o:'Pre oko 12.000 godina, prvo u Plodnom polumesecu.'},
{p:'Zbog čega je izmišljeno pismo?', o:'Zbog evidencije — računi, žito, stoka, dugovi (Sumer, oko 3.200. p. n. e.).'},
{p:'Ko je napravio alfabet od kog potiču grčko pismo, latinica i ćirilica?', o:'Feničani, oko 1.000. p. n. e.'},
{p:'Koja praistorijska kultura je bila na tlu Srbije oko 5.000. p. n. e.?', o:'Vinča (i topljenje bakra na Pločniku).'},
{p:'Šta je „cena" poljoprivrede?', o:'Bolesti, težak rad, jednolična ishrana i nejednakost zbog viška koji se gomila.'}
],
razgovor:['Da li je poljoprivreda bila napredak ili zamka? Gde bi ti stao u toj raspravi?','Pismo je počelo kao knjigovodstvo, a završilo kao Bukovski. Šta misliš, šta je danas „knjigovodstvo" koje će jednog dana postati umetnost?']},
{id:'6-3', naslov:'Antika — Grčka, Rim, Persija, Indija, Kina',
kuka:{p:'Koliko je rimskih careva rođeno na tlu današnje Srbije?', o:['Nijedan','Dvojica','Oko sedamnaest'], t:2},
delovi:[
{n:'Osovinsko doba', t:`Između otprilike 800. i 200. p. n. e., na nekoliko mesta u svetu, nezavisno, javljaju se misli koje i danas nosimo: u Grčkoj filozofi, u Indiji Buda, u Kini Konfučije i Lao Ce, u Persiji Zaratustrina vera, kod Jevreja proroci. Filozof Karl Jaspers je to nazvao OSOVINSKO DOBA.

Zajedničko: pitanja se pomeraju sa „kako umiliti bogove" na „kako treba živeti", „šta je pravedno", „šta je istina". Nije baš jasno zašto tada — možda zbog gradova, trgovine i novca, koji su ljude stavili jedne naspram drugih.

Kroz ovu lekciju gledaj pet velikih svetova antike. Nisu bili izolovani: trgovina, ratovi i ideje putovali su između njih.`,
pr:{p:'Šta je „osovinsko doba"?', o:['Doba izuma točka','Period oko 800–200. p. n. e. kada se na više mesta rađaju velike filozofske i verske ideje','Doba kad je Zemlja promenila osu'], t:1, z:'Grčka filozofija, Buda, Konfučije, proroci — nezavisno, u istim vekovima.'}},
{n:'Persija i Grčka', t:`PERSIJA: Kir Veliki oko 550. p. n. e. stvara najveće carstvo do tada — od Egipta i Male Azije do Indije. Persijanci su vladali pametno: puštali narode da zadrže svoju veru i običaje, gradili Kraljevski put i poštu na konjima. (Kir je pustio Jevreje da se vrate iz vavilonskog ropstva.)

GRČKA nije bila jedna država, nego stotine GRADOVA-DRŽAVA (polis). U ATINI je oko 508. p. n. e. uvedena DEMOKRATIJA — vlast naroda: građani su sami glasali na skupštini. Ali „građani" su bili samo slobodni muškarci; žene, robovi i stranci nisu.

Kad je Persija napala, grčki gradovi su se ujedinili i pobedili (Maraton 490., Salamina 480. p. n. e.). Usledio je zlatni vek Atine: Sokrat, Platon, Aristotel, tragedija, Partenon, istorija kao nauka (Herodot), medicina (Hipokrat).

Onda ALEKSANDAR MAKEDONSKI (vladao 336–323. p. n. e.): za desetak godina osvojio Persiju do Indije. Umro je sa 32 godine, carstvo se raspalo, ali grčki jezik i kultura proširili su se celim istokom — to je HELENIZAM.`,
pr:{p:'Ko je imao pravo glasa u atinskoj demokratiji?', o:['Svi stanovnici','Samo slobodni muški građani','Samo bogati'], t:1, z:'Žene, robovi i stranci nisu glasali — demokratija je bila prava novost, ali uska.'}},
{n:'Rim', t:`RIM je počeo kao gradić u Italiji (po predanju osnovan 753. p. n. e.). Oko 509. p. n. e. proterao je kralja i postao REPUBLIKA: vlast su delili dva godišnja konzula i Senat. Republika je osvojila celo Sredozemlje, ali su je razjeli građanski ratovi. Cezar je ubijen 44. p. n. e., a njegov naslednik AVGUST je 27. p. n. e. postao prvi CAR.

Na vrhuncu (oko 117. n. e.) carstvo se protezalo od Britanije do Mesopotamije. Rim je ostavio: PUTEVE, akvadukte, beton, LATINSKI jezik (iz njega su italijanski, španski, francuski, rumunski) i RIMSKO PRAVO — temelj prava većine Evrope, pa i našeg.

I Srbija: oko sedamnaest rimskih careva rođeno je na tlu današnje Srbije (broj zavisi od toga kako se računa). Najpoznatiji je KONSTANTIN VELIKI, rođen u Nišu (Naisus). SIRMIJUM (Sremska Mitrovica) bio je jedna od prestonica carstva, a FELIKS ROMULIANA kod Zaječara je Galerijeva palata pod zaštitom UNESKA.

Konstantin je 313. Milanskim ediktom dozvolio hrišćanstvo, a 330. preneo prestonicu u Konstantinopolj. Carstvo je 395. podeljeno na zapadno i istočno; ZAPADNO je palo 476., ISTOČNO (Vizantija) trajalo je još skoro hiljadu godina.`,
pr:{p:'Šta je Konstantin Veliki, rođen u Nišu, uradio za hrišćanstvo?', o:['Zabranio ga','Milanskim ediktom 313. ga dozvolio','Napisao Bibliju'], t:1, z:'Edikt iz 313. je hrišćanima dao slobodu veroispovesti; kasnije hrišćanstvo postaje državna vera.'}},
{n:'Indija i Kina', t:`INDIJA: car AŠOKA (3. vek p. n. e.) iz dinastije Maurja ujedinio je skoro ceo potkontinent — pa se, užasnut krvoprolićem posle jedne bitke, okrenuo budizmu i nenasilju i poslao monahe po Aziji. Kasnije (oko 5–7. veka n. e.) indijski matematičari razvijaju DESETIČNI SISTEM SA NULOM — brojeve koje danas zovemo „arapskim", jer su ih Evropljani dobili od Arapa.

KINA: posle vekova „zaraćenih država", ČIN ŠI HUANG 221. p. n. e. ujedinjuje zemlju i postaje prvi car. Ujednačio je pismo, mere, novac i širinu osovina na kolima; spajao je zidove u zaštitni pojas (začetak Kineskog zida); sahranjen je sa vojskom od hiljade glinenih ratnika. Vladao je surovo i dinastija mu je trajala samo 15 godina.

Dinastija HAN (206. p. n. e. – 220. n. e.) je zlatno doba: država činovnika vaspitanih na KONFUČIJEVIM idejama (poštovanje, red, obrazovanje), PAPIR, i PUT SVILE — trgovački putevi kojima je kineska svila stizala čak do Rima. Han i Rim su bili savremenici i znali su jedno za drugo — ali uglavnom iz druge ruke, preko trgovaca.`,
pr:{p:'Odakle potiče desetični sistem sa nulom koji danas koristimo?', o:['Iz Rima','Iz Indije (preko Arapa do Evrope)','Iz Grčke'], t:1, z:'Indijski matematičari su ga razvili; Arapi preneli — zato „arapski" brojevi.'}},
{n:'Šta je antika ostavila', t:`Da sažmemo nasleđe koje i danas koristiš, a da ne znaš:
• iz GRČKE: filozofija, demokratija, pozorište, olimpijske igre, geometrija;
• iz RIMA: pravo, latinica, kalendar (jul i avgust su po Cezaru i Avgustu), mreža gradova (mnogi evropski gradovi, i Beograd — Singidunum, bili su rimski);
• iz PERSIJE: ideja carstva mnogih naroda i vera;
• iz INDIJE: nula i brojevi, budizam;
• iz KINE: papir, država činovnika, ideja da se služba dobija ispitom.

Zašto je Zapadno rimsko carstvo palo? Na to postoji preko dvesta objašnjenja. Danas istoričari uglavnom kažu: nije pad jednog dana, nego više vekova slabljenja — građanski ratovi, pritisak naroda sa granica, kuge, novac koji gubi vrednost, podela carstva. Istok je bio bogatiji i odoleo je.

Sledeće: srednji vek — kad su Vizantija, islamski svet i Mongoli bili centar, a Evropa periferija. I gde su tu bili Srbi.`,
pr:{p:'Zašto je palo Zapadno rimsko carstvo, po današnjim istoričarima?', o:['Jedan veliki napad 476.','Vekovima slabljenja — građanski ratovi, pritisak sa granica, kuge, slab novac','Zbog hrišćanstva i ničeg drugog'], t:1, z:'Godina 476. je samo kraj dugog procesa sa više uzroka; istočni deo je opstao.'}}
],
kljucno:['Osovinsko doba (oko 800–200. p. n. e.): filozofi, Buda, Konfučije, proroci — nezavisno, u istim vekovima.','Persija: prvo carstvo mnogih naroda; Atina: demokratija samo za slobodne muške građane; Aleksandar → helenizam.','Rim: republika → carstvo (Avgust, 27. p. n. e.); putevi, latinski, rimsko pravo; Zapad pao 476., Istok trajao do 1453.','Oko 17 rimskih careva rođeno na tlu Srbije; Konstantin (Niš) dozvolio hrišćanstvo 313.','Indija: Ašoka i budizam, nula i desetični sistem; Kina: Čin Ši Huang ujedinio 221. p. n. e., Han: papir, konfučijanska država, Put svile.'],
kartice:[
{p:'Kada je u Atini uvedena demokratija i ko je glasao?', o:'Oko 508. p. n. e.; samo slobodni muški građani.'},
{p:'Ko je bio prvi rimski car i od kada?', o:'Avgust, od 27. p. n. e.'},
{p:'Koji car rođen u Nišu je dozvolio hrišćanstvo i kada?', o:'Konstantin Veliki, Milanski edikt 313.'},
{p:'Kada je palo Zapadno rimsko carstvo?', o:'476. godine (Istočno — Vizantija — 1453.).'},
{p:'Ko je prvi ujedinio Kinu?', o:'Čin Ši Huang, 221. p. n. e.'}
],
razgovor:['Atinska demokratija nije puštala žene i robove da glasaju. Koga bi današnja demokratija, gledano za 500 godina, mogla da „zaboravlja"?','Rim je pao sporo, iznutra i spolja. Vidiš li neki savremeni sistem koji slabi na sličan način?']},
{id:'6-4', naslov:'Srednji vek — Vizantija, islamski svet, Mongoli, Evropa',
kuka:{p:'Koje je najveće kopneno carstvo u istoriji (bez prekida)?', o:['Rimsko','Mongolsko','Osmansko'], t:1},
delovi:[
{n:'Vizantija — Rim koji je ostao', t:`Kad je Zapad pao, ISTOČNO RIMSKO CARSTVO je živelo dalje, sa prestonicom u KONSTANTINOPOLJU. Sami su sebe zvali Rimljanima; ime „Vizantija" su im dali kasnije istoričari. Govorili su grčki, verovali pravoslavno.

Car JUSTINIJAN (vladao 527–565) sagradio je crkvu AJA SOFIJA i sredio rimsko pravo u jedan zbornik (Corpus iuris civilis) — preko njega je rimsko pravo stiglo do moderne Evrope.

Godine 1054. hrišćanstvo se podelilo na istočno (PRAVOSLAVNO) i zapadno (KATOLIČKO) — VELIKI RASKOL. Razlozi: ko je glavni (papa u Rimu ili jednaki patrijarsi), jezik, obredi, ali i politika.

Godine 1204. krstaši Četvrtog krstaškog rata — hrišćani sa Zapada — opljačkali su Konstantinopolj. Vizantija se više nikad nije oporavila. Pala je pod Osmanlije 1453. — za mnoge istoričare to je kraj srednjeg veka.`,
pr:{p:'Šta je Veliki raskol 1054?', o:['Podela Rimskog carstva','Podela hrišćanstva na pravoslavno i katoličko','Rat Vizantije i Persije'], t:1, z:'Istočna i zapadna crkva su se razišle oko vlasti pape, obreda i politike.'}},
{n:'Islamski svet', t:`MUHAMED (oko 570–632) propoveda u Arabiji novu veru, ISLAM. Godine 622. seli se iz Meke u Medinu (HIDŽRA) — odatle počinje islamski kalendar. Za samo sto godina posle njegove smrti, kalifat se proteže od Španije (711.) do Indije.

U 8–10. veku BAGDAD je jedan od najvećih gradova sveta, a „Kuća mudrosti" mesto gde se prevode grčki filozofi i lekari. Islamski učenjaci razvijaju ALGEBRU (reč dolazi od arapskog al-džabr, a „algoritam" od imena matematičara Al-Hvarizmija), astronomiju, medicinu, optiku; preko njih Evropa ponovo dobija Aristotela i dobija indijske brojeve.

Krstaški ratovi (1096–1291): pohodi hrišćanske Evrope da osvoji Jerusalim. Hrišćani ih pamte kao sveti rat, muslimani kao najezdu; obe strane su činile i junaštva i pokolje. Na kraju je Sveta zemlja ostala muslimanska.

Od 14. veka raste nova islamska sila — OSMANLIJE, koji će osvojiti Balkan.`,
pr:{p:'Kako je Evropa ponovo dobila Aristotela i indijske brojeve?', o:['Iz Kine','Preko islamskog sveta — prevoda i učenjaka','Nikad ih nije izgubila'], t:1, z:'Islamski učenjaci su čuvali, prevodili i razvijali grčko i indijsko znanje; Evropa ga je preuzela preko Španije i Sicilije.'}},
{n:'Mongoli i kuga', t:`DŽINGIS-KAN (Temudžin) je 1206. ujedinio mongolska plemena, a on i njegovi naslednici napravili su NAJVEĆE KOPNENO CARSTVO u istoriji — od Koreje do istočne Evrope; pohodi su stizali i do Poljske i Mađarske. Osvajali su brzo i surovo; gradovi koji su se opirali bili su sravnjeni.

Ali kad je carstvo stalo, Putem svile se moglo putovati bezbedno kao nikad — „Mongolski mir". Marko Polo je tako stigao u Kinu. Robe, ideje (barut, papir, kompas su stizali na zapad)… i zaraze.

Sredinom 14. veka (1347–1351) kuga — CRNA SMRT — došla je tim putevima u Evropu i ubila otprilike trećinu do polovinu stanovništva. Posledice: manjak radnika, pa skuplji rad; slabljenje feudalnih obaveza; strah, progoni (Jevreja su okrivljivali), ali i nova pitanja o veri i životu.`,
pr:{p:'Kako je Crna smrt stigla do Evrope?', o:['Morem iz Amerike','Trgovačkim putevima iz Azije, koje su Mongoli učinili prohodnim','Iz Afrike preko Sahare'], t:1, z:'Bezbedni putevi su prenosili robu i ljude — i bakteriju kuge.'}},
{n:'Zapadna Evropa', t:`Na Zapadu je posle Rima nastalo mnoštvo germanskih kraljevina. KARLO VELIKI je krunisan za cara na Božić 800. i ujedinio veliki deo zapadne Evrope.

Društvo je bilo FEUDALNO: kralj daje zemlju plemićima, plemići mu duguju vojnu službu; seljaci (KMETOVI) rade zemlju gospodara i ne smeju da je napuste. Okvir svega bila je CRKVA — ona je držala škole, knjige, kalendar i moral, a papa se otimao o vlast sa carevima.

„Mračni srednji vek" je uglavnom mit. Iz tog vremena su: UNIVERZITETI (Bolonja oko 1088, Pariz, Oksford), gotske katedrale, vetrenjače, plug, naočare, mehanički satovi, i ideja da i vladar mora poštovati zakon (Magna karta, Engleska, 1215).

Ipak: većina ljudi je bila nepismena, živela na selu i retko putovala dalje od susednog sela.`,
pr:{p:'Da li je srednji vek bio samo „mračno doba"?', o:['Da, ništa novo nije nastalo','Ne — nastali su univerziteti, katedrale, satovi, Magna karta','Da, jer nije bilo knjiga'], t:1, z:'„Mračni srednji vek" je pojednostavljenje — bilo je teško, ali i mnogo novog.'}},
{n:'Gde su Srbi', t:`Sloveni dolaze na Balkan u 6. i 7. veku. Srbi primaju hrišćanstvo od Vizantije, pa su na granici dva sveta — istoka i zapada.

PISMO: braća Ćirilo i Metodije 863. kreću u misiju među Slovene i sastavljaju GLAGOLJICU; njihovi učenici u Bugarskoj krajem 9. veka prave ĆIRILICU, nazvanu po Ćirilu.

NEMANJIĆI (oko 200 godina): STEFAN NEMANJA ujedinjuje srpske zemlje; njegov sin SAVA 1219. dobija samostalnu (autokefalnu) srpsku crkvu i postaje prvi arhiepiskop; Savin brat Stefan je 1217. krunisan kao „Prvovenčani" kralj. Iz tog vremena su Studenica, Žiča, Mileševa, Sopoćani. Car DUŠAN (car od 1346) proširuje državu do Grčke i donosi ZAKONIK (1349, dopunjen 1354).

Posle Dušanove smrti država se rasparčala. KOSOVSKA BITKA 1389: poginuli su i knez Lazar i sultan Murat. Vojno je bila nerešena ili teška za obe strane, a dugoročno je Srbiju oslabila; vremenom je postala središnja priča srpskog pamćenja (kosovski zavet) — istoričari razlikuju samu bitku od kasnijeg mita. Srbija je kao despotovina trajala do pada Smedereva 1459.

Kraj oblasti je blizu: sledeće je kako je mali deo sveta — Zapadna Evropa — za četiri veka stigao do vrha.`,
pr:{p:'Šta je Sava Nemanjić postigao 1219?', o:['Krunisan je za kralja','Dobio samostalnu srpsku crkvu i postao prvi arhiepiskop','Napisao zakonik'], t:1, z:'Autokefalnost 1219. — Stefan Prvovenčani je krunisan 1217., a Dušanov zakonik je iz 1349.'}}
],
kljucno:['Vizantija = istočno Rimsko carstvo do 1453; Justinijan, Aja Sofija, zbornik prava; raskol 1054; krstaši opljačkali Carigrad 1204.','Islam od 7. veka; Bagdad i Kuća mudrosti; algebra; preko islamskog sveta Evropa dobija Aristotela i indijske brojeve.','Mongoli (Džingis-kan, 1206): najveće kopneno carstvo; putevima stiže i Crna smrt (1347–1351), umire trećina do polovina Evrope.','Zapad: Karlo Veliki (800), feudalizam, Crkva; ali i univerziteti, katedrale, Magna karta — „mračni vek" je mit.','Srbi: ćirilica (učenici Ćirila i Metodija), Nemanjići, Sava 1219, Dušanov zakonik 1349, Kosovo 1389, pad Smedereva 1459.'],
kartice:[
{p:'Šta je Veliki raskol i kada?', o:'Podela hrišćanstva na pravoslavno i katoličko, 1054.'},
{p:'Kada je pala Vizantija?', o:'1453, pod Osmanlije.'},
{p:'Odakle dolaze reči „algebra" i „algoritam"?', o:'Iz arapskog — al-džabr i ime matematičara Al-Hvarizmija.'},
{p:'Koliko je Evropljana ubila Crna smrt?', o:'Otprilike trećinu do polovinu (1347–1351).'},
{p:'Kada je srpska crkva postala samostalna i ko je bio prvi arhiepiskop?', o:'1219, Sveti Sava.'}
],
razgovor:['Srbi su od početka između Istoka i Zapada. Da li to vidiš i danas — u sebi, u ljudima oko sebe?','Kosovska bitka i kosovski mit nisu ista stvar. Zašto narodima trebaju takve priče — i kad pomažu, a kad smetaju?']},
{id:'6-5', naslov:'Otkrića, naučna i industrijska revolucija',
kuka:{p:'Oko 1800. godine na Zemlji je živelo oko milijardu ljudi. Koliko danas?', o:['Oko 2 milijarde','Oko 4 milijarde','Preko 8 milijardi'], t:2},
delovi:[
{n:'Štamparija i preporod', t:`Oko 1450. JOHAN GUTENBERG u Majncu pravi ŠTAMPARIJU sa pokretnim slovima. Pre toga se knjiga prepisivala rukom mesecima; posle — hiljade primeraka. Za pedeset godina Evropa je odštampala milione knjiga. Znanje je prestalo da bude retkost.

Istovremeno, u Italiji, RENESANSA („preporod"): povratak antičkim uzorima, čovek u centru — Leonardo, Mikelanđelo, Rafael. (Više o tome u oblasti „Umetnost i priče".)

Štamparija je omogućila i REFORMACIJU: Martin Luter 1517. napada prodaju oproštaja grehova; njegovi spisi se šire štampom brže nego što crkva može da ih zabrani. Zapadno hrišćanstvo se deli na katolike i protestante, a sledi vek verskih ratova.

Mi smo bili rani: prva štampana knjiga na srpskoj redakciji crkvenoslovenskog jezika, OKTOIH, štampana je 1494. u Cetinju, u štampariji Crnojevića.`,
pr:{p:'Zašto je štamparija bila tako važna?', o:['Knjige su postale lepše','Knjige su postale jeftine i brze — znanje i ideje su se širili kao nikad','Zbog papira'], t:1, z:'Hiljade primeraka umesto jednog prepisa — reformacija i nauka bez toga ne bi išle tako brzo.'}},
{n:'Velika otkrića — i njihova cena', t:`Osmanlije su držale puteve na istok, pa su Evropljani tražili put morem do Indije i začina:
• KOLUMBO 1492. stiže u Ameriku (mislio je da je u Aziji);
• VASKO DA GAMA 1498. oplovljava Afriku do Indije;
• Magelanova ekspedicija (1519–1522) prvi put oplovljava svet.

Usledila je KOLUMBOVSKA RAZMENA: Evropa dobija krompir, kukuruz, paradajz, papriku, duvan — bez Amerike ne bi bilo ni ajvara ni sarme sa kukuruznim hlebom. Amerika dobija konje, goveda, pšenicu… i BOLESTI. Velike boginje i druge zaraze ubile su veliki deo starosedelaca — u nekim krajevima i do devet desetina.

Potom ROPSTVO: preko Atlantika je za oko tri i po veka prevezeno oko 12 miliona Afrikanaca, za rad na plantažama šećera, duvana i pamuka. Evropske kolonije pokrivaju svet. Bogatstvo Evrope u ovom periodu ima i ovu stranu.`,
pr:{p:'Šta je najviše ubijalo starosedeoce Amerike posle 1492?', o:['Samo ratovi','Zarazne bolesti donete iz Evrope, uz ratove i prinudni rad','Glad zbog suše'], t:1, z:'Nisu imali otpornost na boginje i druge evropske zaraze; uz to ratovi i prinudni rad.'}},
{n:'Naučna revolucija', t:`Za oko 150 godina promenio se način na koji ljudi saznaju svet:
• KOPERNIK (1543): Zemlja se okreće oko Sunca, ne obrnuto;
• GALILEJ (oko 1610) kroz teleskop vidi Jupiterove mesece i mene Venere; 1633. crkveni sud ga primorava da se odrekne učenja;
• NJUTN (1687): isti zakoni kretanja i gravitacije važe i za jabuku i za planete.

Novo nije bilo samo ŠTA su otkrili, nego KAKO: ne veruj autoritetu, nego MERI, OGLEDAJ i proveravaj. (Više u lekciji „Naučni metod".)

Iz toga je izraslo PROSVETITELJSTVO (18. vek): ako razum može da objasni prirodu, može da sredi i društvo. Prava čoveka, verska tolerancija, podela vlasti. Te ideje stoje iza AMERIČKE (1776) i FRANCUSKE REVOLUCIJE (1789) — i iza nacionalnih pokreta 19. veka.

Kod nas: PRVI SRPSKI USTANAK 1804. (Karađorđe), DRUGI 1815. (Miloš Obrenović); Srbija postaje kneževina sa autonomijom, a punu međunarodno priznatu nezavisnost dobija na BERLINSKOM KONGRESU 1878. Vuk Karadžić reformiše jezik i pismo („piši kao što govoriš").`,
pr:{p:'Šta je bilo najnovije u naučnoj revoluciji?', o:['Otkriće teleskopa','Način saznavanja: meri, ogledaj, proveri — umesto da veruješ autoritetu','Povratak Aristotelu'], t:1, z:'Kopernik, Galilej i Njutn su važni, ali najveća promena je metod — dokaz preko merenja i ogleda.'}},
{n:'Industrijska revolucija', t:`Od oko 1760. u ENGLESKOJ počinje ono što je promenilo život više od svega posle poljoprivrede. MAŠINE preuzimaju posao ruku: prvo u tekstilu, pa sve. PARNA MAŠINA (Džejms Vat ju je usavršio oko 1770-ih) pokreće fabrike, pa VOZOVE (prva javna parna železnica 1825) i brodove. Gorivo: UGALJ.

Zašto baš Engleska? Spoj više stvari: mnogo uglja blizu površine, skupa radna snaga (pa se isplati mašina), banke, kolonije i trgovina, zaštićeni patenti, stabilna vlast.

Posledice:
• ljudi se sele sa sela u GRADOVE i FABRIKE; radni dan 12–14 sati, deca u rudnicima — iz toga se rađaju sindikati, socijalizam, Marks;
• proizvodnja i stanovništvo rastu kao nikad: oko 1800. milijardu ljudi, oko 1900. preko milijardu i po;
• prvi put u istoriji, zemlje koje se industrijalizuju izlaze iz večitog siromaštva.

Krajem 19. veka DRUGA industrijska revolucija: čelik, hemija, nafta i — STRUJA. Tu je i NIKOLA TESLA: naizmenična struja kojom se danas napajaju kuće širom sveta.`,
pr:{p:'Šta je pokretalo prvu industrijsku revoluciju?', o:['Struja i nafta','Parna mašina na ugalj','Vetrenjače'], t:1, z:'Ugalj i para pokreću fabrike, vozove i brodove; struja i nafta dolaze u drugoj revoluciji, krajem 19. veka.'}},
{n:'Zašto Evropa — i kraj oblasti', t:`Pitanje koje muči istoričare: zašto je baš Zapadna Evropa, koja je 1000. godine bila periferija, do 1900. zavladala većim delom sveta? Kina je imala papir, barut, kompas i štampu pre nje.

Glavni odgovori (verovatno svi delimično tačni):
• GEOGRAFIJA i podeljenost — mnogo manjih država koje se takmiče; kad jedan vladar zabrani, drugi dozvoli (Kolumbo je dobio brodove tek u Španiji);
• INSTITUCIJE — zaštita imovine, banke, ugovori, patenti;
• NAUKA kao sistem — otkrića se objavljuju i proveravaju;
• SREĆA I NASILJE — ugalj blizu površine, i bogatstvo iz kolonija i ropstva.

Kostur oblasti: lovci-sakupljači → njiva, gradovi, pismo → antika i velike ideje → srednji vek tri sveta → štampa, otkrića, nauka, mašine. Za 300.000 godina od vatre do struje.

Sledeće: 20. vek — dva svetska rata, Hladni rat i naša zemlja od 1918. do danas.`,
pr:{p:'Šta je, po jednom od objašnjenja, pomoglo Evropi što je bila podeljena na mnoge države?', o:['Ništa, podela je samo smetala','Takmičenje — kad jedan vladar zabrani, drugi dozvoli','Zbog jednog jezika'], t:1, z:'Kolumbo je odbijen u Portugaliji, a dobio brodove u Španiji; ideje su imale gde da pobegnu.'}}
],
kljucno:['Gutenbergova štampa (oko 1450) širi znanje; renesansa; reformacija 1517 (Luter). Kod nas Oktoih 1494, Cetinje.','Otkrića: Kolumbo 1492, Vasko da Gama 1498, Magelan 1519–22; kolumbovska razmena — krompir i kukuruz, ali i bolesti, kolonije i ropstvo (~12 miliona Afrikanaca).','Naučna revolucija: Kopernik, Galilej, Njutn — metod merenja i ogleda; prosvetiteljstvo → revolucije 1776 i 1789.','Srbija: ustanci 1804 i 1815, puna nezavisnost 1878 (Berlinski kongres), Vukova reforma.','Industrijska revolucija od oko 1760, Engleska: para i ugalj, fabrike, gradovi, rast stanovništva; kasnije struja (i Tesla).'],
kartice:[
{p:'Kada je Gutenberg napravio štampariju?', o:'Oko 1450.'},
{p:'Šta je kolumbovska razmena?', o:'Razmena biljaka, životinja i bolesti između Amerike i Starog sveta posle 1492.'},
{p:'Šta je Njutn pokazao 1687?', o:'Da isti zakoni kretanja i gravitacije važe na Zemlji i na nebu.'},
{p:'Kada je Srbija dobila punu međunarodno priznatu nezavisnost?', o:'1878, na Berlinskom kongresu.'},
{p:'Gde i kada počinje industrijska revolucija i šta je pokreće?', o:'Engleska, oko 1760; parna mašina na ugalj.'}
],
razgovor:['Da si živeo 1850. u Engleskoj — selo ili fabrika? I kako bi o tome pisao?','Bogatstvo Evrope ima i ružnu stranu: kolonije i ropstvo. Kako se, po tebi, pošteno priča o ponosu i o sramoti u istoj istoriji?']}
]},

{id:'13', naziv:'20. vek', ikona:'📻', era:'1900 → danas', lekcije:[

{id:'13-1', naslov:'Prvi svetski rat i rađanje novog sveta',
kuka:{p:'Koliko je, po većini procena, stanovništva Srbija izgubila u Prvom svetskom ratu?', o:['Oko 2%','Oko 10%','Između petine i četvrtine'], t:2},
delovi:[
{n:'Svet 1900. i zašto je pukao', t:`Oko 1900. Evropa je na vrhu sveta: industrija, kolonije, nauka, železnice. Ljudi veruju u napredak. Ali ispod površine:
• SAVEZI — Nemačka i Austrougarska s jedne strane, Francuska, Rusija i Britanija (Antanta) s druge; lokalni sukob lako postaje opšti;
• TRKA U NAORUŽANJU i planovi za brz rat;
• NACIONALIZMI — narodi u velikim carstvima (Austrougarskoj, Osmanskom, Ruskom) traže svoje države;
• Balkan posle balkanskih ratova (1912–1913): Srbija ojačala, Austrougarska u strahu od nje.

Istoričari se i danas spore oko krivice: jedni ističu nemačke ambicije, drugi austrougarsku želju da slomi Srbiju, treći da su se sve velike sile „mesečarski" uvukle u rat (Kristofer Klark). Većina se slaže da nije bilo jednog uzroka.`,
pr:{p:'Zašto je lokalni sukob 1914. postao svetski rat?', o:['Slučajno','Zbog sistema saveza, trke u naoružanju i nacionalizama — svaka sila je povukla svoje saveznike','Jer je Srbija napala Evropu'], t:1, z:'Savezi su lokalni rat Austrougarske i Srbije za nekoliko dana pretvorili u rat velikih sila.'}},
{n:'Sarajevo i rat', t:`28. juna 1914. u Sarajevu GAVRILO PRINCIP, član organizacije Mlada Bosna, ubija austrougarskog prestolonaslednika FRANCA FERDINANDA. Austrougarska optužuje Srbiju, šalje ultimatum, i 28. jula objavljuje rat. Za nekoliko dana uključuju se Rusija, Nemačka, Francuska i Britanija.

Princip je za jedne oslobodilac koji je pucao na okupatora Bosne, za druge terorista. Obe slike postoje i danas — u Beogradu i Sarajevu različito.

Rat na zapadu postaje ROVOVSKI: milioni ljudi u blatu, mitraljezi, bodljikava žica, otrovni gasovi. U bici na Somi 1916. samo prvog dana poginulo je i ranjeno blizu 60.000 britanskih vojnika. Front se mesecima pomera po nekoliko kilometara.

Ukupno je u ratu poginulo oko 15–20 miliona ljudi, vojnika i civila.`,
pr:{p:'Šta je bio neposredni povod rata?', o:['Napad Nemačke na Francusku','Atentat na Franca Ferdinanda u Sarajevu 28. juna 1914.','Ruska revolucija'], t:1, z:'Princip je ubio prestolonaslednika; Austrougarska je posle ultimatuma objavila rat Srbiji 28. jula.'}},
{n:'Srbija u ratu', t:`Srbija je 1914. iznenadila svet: pobede na CERU (avgust) i na KOLUBARI (novembar–decembar) bile su prve savezničke pobede u ratu.

1915. napadaju je zajedno Austrougarska, Nemačka i Bugarska. Vojska, kralj, vlada i deo naroda povlače se zimi preko planina ALBANIJE do mora — ALBANSKA GOLGOTA. Desetine hiljada umiru od gladi, hladnoće i bolesti. Preživeli se oporavljaju na KRFU (Plava grobnica — more u koje su sahranjivani umrli).

1918. srpska vojska sa saveznicima probija SOLUNSKI FRONT i za nekoliko nedelja oslobađa zemlju.

Cena je bila strašna: po većini procena Srbija je izgubila između petine i četvrtine stanovništva — u borbama, od epidemija (tifus 1915) i gladi. Procentualno među najvećim gubicima u ratu.`,
pr:{p:'Šta je Albanska golgota?', o:['Bitka na Ceru','Povlačenje srpske vojske i naroda preko albanskih planina zimi 1915.','Proboj Solunskog fronta'], t:1, z:'Posle napada tri sile, povlačenje do mora i Krfa koštalo je desetine hiljada života.'}},
{n:'Kraj carstava', t:`Rat je srušio četiri carstva:
• RUSKO — 1917. revolucija; u oktobru vlast preuzimaju BOLJŠEVICI (Lenjin). Sledi građanski rat i 1922. Sovjetski Savez — prva komunistička država.
• NEMAČKO — car abdicira, Nemačka postaje republika (Vajmarska).
• AUSTROUGARSKO — raspada se na Austriju, Mađarsku, Čehoslovačku, Poljsku (delom) i jugoslovenske zemlje.
• OSMANSKO — od njega ostaje Turska (republika 1923, Ataturk), a Bliski istok dele Britanija i Francuska — granice koje i danas izazivaju sukobe.

1. DECEMBRA 1918. nastaje KRALJEVINA SRBA, HRVATA I SLOVENACA — prva Jugoslavija (o njoj posebna lekcija).

Mir je potpisan u VERSAJU 1919. Nemačka je proglašena krivom, izgubila je teritorije i morala da plaća velike odštete. Mnogi istoričari smatraju da je takav mir — ponižavajući a nedovoljno čvrst — pomogao da za 20 godina dođe novi rat.`,
pr:{p:'Šta je nastalo 1. decembra 1918?', o:['SFR Jugoslavija','Kraljevina Srba, Hrvata i Slovenaca','Kraljevina Srbija'], t:1, z:'Prva zajednička država južnih Slovena, od 1929. zvana Kraljevina Jugoslavija.'}},
{n:'Novi svet — i šta sledi', t:`Posle 1918. svet više nije isti:
• ŠPANSKI GRIP (1918–1920) ubio je više ljudi nego sam rat — procene oko 50 miliona;
• ŽENE u mnogim zemljama dobijaju pravo glasa (radile su u fabrikama dok su muškarci bili na frontu);
• MASOVNA POLITIKA — milioni bivših vojnika, radnika i razočaranih traže nove odgovore: komunizam, fašizam, demokratiju;
• SAD izlaze kao najbogatija zemlja; Evropa je zadužena i iscrpljena;
• stvara se DRUŠTVO NARODA (preteča UN) — ali bez SAD i bez moći.

Kostur lekcije: savezi, naoružanje i nacionalizmi → Sarajevo 1914 → rovovi → Cer i Kolubara, Albanska golgota, Solunski front → pad četiri carstva, revolucija u Rusiji, Kraljevina SHS → Versaj, španski grip.

Sledeće: kako je za samo dvadeset godina od „rata koji će okončati sve ratove" došlo do još goreg.`,
pr:{p:'Šta je ubilo više ljudi od samog Prvog svetskog rata?', o:['Glad 1919.','Španski grip (1918–1920)','Ruski građanski rat'], t:1, z:'Pandemija gripa ubila je po procenama oko 50 miliona ljudi.'}}
],
kljucno:['Uzroci rata: savezi, trka u naoružanju, nacionalizmi, Balkan — istoričari se spore oko krivice.','Sarajevo 28. 6. 1914 (Princip, Franc Ferdinand) → rat 28. 7.; rovovski rat; 15–20 miliona mrtvih.','Srbija: Cer i Kolubara (1914), Albanska golgota i Krf (1915), proboj Solunskog fronta (1918); izgubila petinu do četvrtinu stanovništva.','Pala četiri carstva; Oktobarska revolucija 1917 → SSSR; Kraljevina SHS 1. 12. 1918; Versaj 1919.','Španski grip (~50 miliona), pravo glasa ženama, masovna politika, Društvo naroda.'],
kartice:[
{p:'Šta se desilo 28. juna 1914?', o:'Gavrilo Princip je u Sarajevu ubio Franca Ferdinanda.'},
{p:'Koje su prve savezničke pobede u Prvom svetskom ratu?', o:'Srpske pobede na Ceru i Kolubari 1914.'},
{p:'Šta je Albanska golgota?', o:'Povlačenje srpske vojske i naroda preko Albanije zimi 1915.'},
{p:'Koja četiri carstva su pala posle Prvog svetskog rata?', o:'Rusko, Nemačko, Austrougarsko, Osmansko.'},
{p:'Kada je nastala Kraljevina SHS?', o:'1. decembra 1918.'}
],
razgovor:['Gavrilo Princip — oslobodilac ili terorista? Kako bi pošteno objasnio obe strane?','Šta se u tvojoj porodici pričalo o ratovima — i koliko je to bila istorija, a koliko porodični mit?']},

{id:'13-2', naslov:'Između ratova i Drugi svetski rat',
kuka:{p:'Otprilike koliko je ljudi poginulo u Drugom svetskom ratu?', o:['Oko 5 miliona','Oko 20 miliona','Između 70 i 85 miliona'], t:2},
delovi:[
{n:'Uspon diktatura', t:`Između ratova (1918–1939) demokratije su u mnogim zemljama propale:
• U SSSR-u STALJIN gradi totalitarnu državu: prisilna kolektivizacija, glad (u Ukrajini 1932–33 — HOLODOMOR, milioni mrtvih), logori GULAG, veliki procesi i streljanja.
• U Italiji MUSOLINI (1922) uvodi FAŠIZAM.
• Velika depresija (1929) gura Nemačku u bedu i bes; HITLER 1933. dolazi na vlast — legalno, preko izbora i dogovora elita — i za par meseci ukida demokratiju. Nacizam: krajnji nacionalizam, kult vođe i RASIZAM — Jevreji proglašeni krivcima za sve.

Zapadne demokratije su popuštale (Minhenski sporazum 1938 — Hitleru data čehoslovačka Sudetska oblast „za mir"). U avgustu 1939. Hitler i Staljin potpisuju pakt o nenapadanju i tajno dele istočnu Evropu.

1. SEPTEMBRA 1939. Nemačka napada Poljsku. Britanija i Francuska objavljuju rat.`,
pr:{p:'Kako je Hitler došao na vlast?', o:['Vojnim pučem','Legalno, preko izbora i dogovora elita, pa je onda ukinuo demokratiju','Silom iz inostranstva'], t:1, z:'Godina 1933. pokazuje da demokratija može biti ukinuta i iznutra, kroz sopstvene institucije.'}},
{n:'Rat u svetu', t:`Kratko, kao kostur:
• 1939–1940 — Nemačka osvaja Poljsku, pa Francusku za šest nedelja; Britanija ostaje sama (bitka za Britaniju u vazduhu).
• JUN 1941 — Nemačka napada SSSR. Najveći i najkrvaviji front u istoriji; SSSR gubi oko 27 miliona ljudi.
• DECEMBAR 1941 — Japan napada američku bazu PERL HARBOR; SAD ulaze u rat.
• Prelomi: STALJINGRAD (1942–43) na istoku, El Alamejn u Africi, Midvej na Pacifiku.
• JUN 1944 — iskrcavanje saveznika u NORMANDIJI.
• MAJ 1945 — pad Berlina, Nemačka kapitulira (8/9. maja).
• AVGUST 1945 — SAD bacaju ATOMSKE BOMBE na HIROŠIMU (6. avgusta) i NAGASAKI (9. avgusta); Japan kapitulira.

Ukupno je poginulo između 70 i 85 miliona ljudi — većina civili. Rasprava o atomskim bombama traje i danas: da li su skratile rat i spasle živote, ili su bile zločin nad civilima?`,
pr:{p:'Koja zemlja je imala najveće gubitke u Drugom svetskom ratu?', o:['SAD','Sovjetski Savez — oko 27 miliona','Francuska'], t:1, z:'Istočni front je bio najveći i najkrvaviji; SSSR je izgubio oko 27 miliona ljudi.'}},
{n:'Holokaust', t:`HOLOKAUST (na hebrejskom ŠOA) je sistematsko, industrijski organizovano ubijanje oko ŠEST MILIONA JEVREJA od strane nacističke Nemačke i njenih saradnika — otprilike dve trećine Jevreja Evrope. Ubijani su i Romi (romski genocid — Porajmos), osobe sa invaliditetom, politički protivnici i drugi.

Kako je bilo moguće? Ne odjednom. Korak po korak: govor mržnje → zakoni koji Jevrejima oduzimaju prava (1935) → pogromi (Kristalna noć, 1938) → geta → streljanja na istoku → logori smrti sa gasnim komorama (AUŠVIC, Treblinka). Učestvovali su hiljade „običnih" ljudi — činovnika, železničara, policajaca.

U okupiranoj Srbiji je skoro cela jevrejska zajednica ubijena već do proleća 1942. — streljanjima i u logoru na SAJMIŠTU u Beogradu.

Posle rata su u NIRNBERGU nacističke vođe suđene za zločine protiv mira i čovečnosti. Iz tog iskustva rođeni su pojmovi GENOCID (Rafael Lemkin) i Konvencija o genocidu (1948).`,
pr:{p:'Kako je Holokaust postao moguć?', o:['Odjednom, jednom naredbom','Korak po korak — od govora mržnje i zakona do logora smrti, uz učešće mnogo „običnih" ljudi','Bez znanja ikoga u Nemačkoj'], t:1, z:'Svaki korak je pripremao sledeći; zato se upozorava već na prve.'}},
{n:'Jugoslavija 1941–1945', t:`6. APRILA 1941. Nemačka bombarduje Beograd; za manje od dve nedelje Kraljevina Jugoslavija kapitulira i deli se među okupatorima (Nemačka, Italija, Mađarska, Bugarska, Albanija pod Italijom).

Stvara se NEZAVISNA DRŽAVA HRVATSKA (ustaše, Ante Pavelić), saveznik Hitlera, koja sprovodi GENOCID nad Srbima, Jevrejima i Romima. Najveći logor je JASENOVAC. Broj žrtava Jasenovca je predmet dugih sporova; Spomen-područje Jasenovac ima poimenični spisak od oko 83.000 žrtava, a mnoge procene su više.

U okupiranoj Srbiji Nemci za svakog ubijenog vojnika streljaju stotinu civila: KRAGUJEVAC (oktobar 1941, oko 2.800 streljanih), Kraljevo, logori Banjica i Sajmište.

Otpor su pružala dva pokreta:
• ČETNICI (Dragoljub Draža Mihailović) — rojalisti, vezani za kralja u izbeglištvu;
• PARTIZANI (Josip Broz TITO, Komunistička partija) — sa programom nove, socijalističke Jugoslavije.
Brzo su postali i ljuti protivnici: rat je bio istovremeno okupacija, otpor i GRAĐANSKI RAT. Delovi četničkog pokreta sarađivali su sa okupatorima protiv partizana, a obe strane su činile i zločine nad civilima. Saveznici su 1943. prešli na podršku partizanima. Ocena četnika i partizana i danas deli Srbiju; zakonom iz 2004. oba pokreta priznata su kao antifašistička, a Mihailović je 2015. sudski rehabilitovan — što mnogi istoričari osporavaju.

Beograd je oslobođen 20. oktobra 1944, uz Crvenu armiju. U Jugoslaviji je u ratu poginulo oko milion ljudi. Posle pobede komunisti su se surovo obračunali sa stvarnim i navodnim protivnicima.`,
pr:{p:'Zašto se rat u Jugoslaviji 1941–45. naziva i građanskim ratom?', o:['Jer nije bilo okupatora','Jer su se uz borbu protiv okupatora međusobno borili i domaći pokreti — partizani, četnici, ustaše','Jer se vodio samo u gradovima'], t:1, z:'Okupacija, otpor i obračun domaćih strana preplitali su se istovremeno.'}},
{n:'Šta je ostalo — i kraj', t:`Posle 1945:
• Evropa u ruševinama; desetine miliona izbeglica i preseljenih;
• dve nove SUPERSILE — SAD i SSSR; Evropa podeljena „gvozdenom zavesom";
• nastaju UN (1945) i ideja ljudskih prava (1948) — „nikad više";
• atomsko oružje menja rat zauvek;
• počinje kraj kolonijalnih carstava.

Lekcija koju je 20. vek platio skupo: demokratija nije večna, a mržnja počinje rečima. I: „obični ljudi" mogu učestvovati u užasu kad im se kaže da je to normalno — ali mogu i da spasavaju: desetine hiljada ljudi u Evropi, među njima i više od stotinu iz Srbije, proglašeno je „Pravednicima među narodima" jer su skrivali Jevreje.

Kostur lekcije: diktature između ratova (Staljin, Musolini, Hitler) → 1939 → istočni front, Perl Harbor, Staljingrad, Normandija → Holokaust → atomske bombe → Jugoslavija: okupacija, NDH i Jasenovac, četnici i partizani, građanski rat.

Sledeće: Hladni rat — kako su dve supersile podelile svet, a nisu zaratile direktno.`,
pr:{p:'Ko su „Pravednici među narodima"?', o:['Saveznički generali','Ljudi koji su rizikujući život spasavali Jevreje tokom Holokausta','Sudije u Nirnbergu'], t:1, z:'Izrael tako odaje počast spasiocima; među njima je i više od stotinu ljudi iz Srbije.'}}
],
kljucno:['Između ratova: Staljinov teror (Holodomor, Gulag), Musolini, Hitler (1933, legalno pa diktatura); Minhen 1938; pakt Hitler–Staljin.','Rat 1939–1945: Poljska, Francuska, napad na SSSR (27 miliona mrtvih), Perl Harbor, Staljingrad, Normandija, Hirošima i Nagasaki; 70–85 miliona mrtvih.','Holokaust: oko 6 miliona Jevreja ubijeno korak po korak; Romi i drugi; Nirnberg i pojam genocida.','Jugoslavija: 6. 4. 1941, podela; NDH i genocid (Jasenovac); represalije (Kragujevac); četnici i partizani — otpor i građanski rat; oko milion mrtvih; Beograd oslobođen 20. 10. 1944.','Posle 1945: supersile, UN i ljudska prava, atomsko doba, kraj kolonija.'],
kartice:[
{p:'Kada je počeo Drugi svetski rat?', o:'1. septembra 1939, napadom Nemačke na Poljsku.'},
{p:'Šta je Holokaust?', o:'Sistematsko ubijanje oko 6 miliona Jevreja od strane nacističke Nemačke i saradnika.'},
{p:'Kada je napadnuta Jugoslavija?', o:'6. aprila 1941.'},
{p:'Ko su bili glavni pokreti otpora u Jugoslaviji?', o:'Četnici (Mihailović) i partizani (Tito) — i međusobno su ratovali.'},
{p:'Kada su bačene atomske bombe?', o:'6. avgusta 1945. na Hirošimu i 9. avgusta na Nagasaki.'}
],
razgovor:['Kako se u tvojoj porodici pamte četnici i partizani — i da li se to slaže sa onim što si sad pročitao?','Kad bi pisao priču o „običnom čoveku" 1941. — kakav bi izbor morao da napravi, i šta bi ti uradio?']},

{id:'13-3', naslov:'Hladni rat i dekolonizacija',
kuka:{p:'Gde je 1961. održan prvi samit Pokreta nesvrstanih?', o:['U Kairu','U Beogradu','U Nju Delhiju'], t:1},
delovi:[
{n:'Dve supersile', t:`Posle 1945. SAD i SSSR su jedine prave supersile, sa suprotnim sistemima: tržište i višestranačje protiv planske privrede i jedne partije. Pošto obe brzo imaju ATOMSKU BOMBU (SSSR od 1949), direktan rat bi bio samoubistvo. Zato je rat „HLADAN": takmičenje u naoružanju, uticaju, propagandi, nauci, sportu — i ratovi preko drugih (posredni ratovi).

Evropa je podeljena „GVOZDENOM ZAVESOM": zapad u NATO-u (1949), istok u Varšavskom paktu (1955), pod sovjetskom kontrolom. Kad su se Mađarska (1956) i Čehoslovačka (1968) pokušale osloboditi, sovjetski tenkovi su ih slomili.

NEMAČKA je podeljena na dve države, a BERLIN, usred istočne, na dva dela. Godine 1961. podignut je BERLINSKI ZID da građani Istoka ne beže na Zapad — simbol celog Hladnog rata.`,
pr:{p:'Zašto se Hladni rat nije pretvorio u direktan rat supersila?', o:['Jer su bile prijatelji','Zbog nuklearnog oružja — direktan rat bi uništio obe','Jer nisu imale vojsku'], t:1, z:'Nuklearno odvraćanje: rat bi bio samoubistvo, pa se sukob vodio posredno.'}},
{n:'Na ivici', t:`Hladni rat je imao i vruće tačke:
• KOREJA (1950–1953) — sever (uz SSSR i Kinu) napada jug (uz SAD i UN); milioni mrtvih; poluostrvo podeljeno do danas.
• KUBANSKA KRIZA (oktobar 1962) — SSSR postavlja rakete na Kubi, 150 km od SAD. Trinaest dana svet je bio najbliže nuklearnom ratu. Rešeno tajnim dogovorom: sovjetske rakete sa Kube, američke iz Turske.
• VIJETNAM (do 1975) — SAD gube rat protiv komunističkog severa; preko milion mrtvih; u Americi talas protesta.
• AVGANISTAN (1979–1989) — sovjetska intervencija; SAD naoružavaju mudžahedine (odatle i kasnija priča o talibanima i Al Kaidi).

Takmičilo se i u svemiru: SPUTNJIK (1957, prvi satelit), JURIJ GAGARIN (1961, prvi čovek u svemiru), NIL ARMSTRONG na Mesecu (1969).`,
pr:{p:'Šta je bila Kubanska kriza?', o:['Revolucija na Kubi','Trinaest dana 1962. kada je svet bio najbliži nuklearnom ratu zbog sovjetskih raketa na Kubi','Rat SAD i Kube'], t:1, z:'Rešena je dogovorom — rakete sa Kube za rakete iz Turske.'}},
{n:'Kraj kolonija', t:`Za tridesetak godina posle rata gotovo sve kolonije postaju nezavisne države — DEKOLONIZACIJA:
• INDIJA 1947 (Gandi i nenasilni otpor) — podeljena na Indiju i Pakistan, uz pokolje i preseljenje oko 15 miliona ljudi;
• KINA 1949 — komunisti (Mao) pobeđuju u građanskom ratu: Narodna Republika Kina;
• AFRIKA — 1960. je „godina Afrike": sedamnaest država postaje nezavisno; Alžir posle krvavog rata sa Francuskom (1954–1962);
• Bliski istok — 1948. država IZRAEL; Palestinci pamte tu godinu kao NAKBU („katastrofu") — izgon i bekstvo stotina hiljada ljudi; sukob traje do danas.

Nove države često nasleđuju veštačke granice, slabe institucije i siromaštvo — i postaju poprište nadmetanja supersila. Neke su uspele (Južna Koreja, Singapur, Bocvana), mnoge su završile u diktaturama i građanskim ratovima.`,
pr:{p:'Šta je dekolonizacija?', o:['Osnivanje novih kolonija','Sticanje nezavisnosti bivših kolonija posle Drugog svetskog rata','Rat Evrope i Amerike'], t:1, z:'Indija 1947, „godina Afrike" 1960 — za tri decenije nestala su kolonijalna carstva.'}},
{n:'Nesvrstani — Jugoslavija između', t:`Jugoslavija je 1948. uradila nešto jedinstveno: TITO se razišao sa STALJINOM (Rezolucija Informbiroa). Zemlja je preživela pritisak, ali je i u zemlji stvarno ili navodno „prosovjetske" ljude slala u logor na GOLOM OTOKU.

Ni na Istoku ni na Zapadu, Jugoslavija je sa Indijom (Nehru), Egiptom (Naser), Indonezijom (Sukarno) i Ganom (Nkruma) pokrenula POKRET NESVRSTANIH. Prvi samit održan je u BEOGRADU 1961. Pokret je okupio većinu novih država sveta.

To je Jugoslaviji donelo ugled, pomoć i sa Istoka i sa Zapada, trgovinu sa Afrikom i Azijom i pasoš sa kojim se putovalo skoro svuda. Stariji ljudi to i danas pamte kao doba kad se „bilo neko u svetu".`,
pr:{p:'Šta je bio Pokret nesvrstanih?', o:['Vojni savez sa SSSR-om','Grupa država koje nisu htele u nijedan blok, sa prvim samitom u Beogradu 1961.','Deo NATO-a'], t:1, z:'Jugoslavija, Indija, Egipat, Indonezija i Gana su ga pokrenule kao treći put.'}},
{n:'Kraj Hladnog rata — i kraj', t:`U 1980-im je sovjetska planska privreda zaostajala sve više, a trka u naoružanju je bila preskupa. MIHAIL GORBAČOV (od 1985) pokušava reforme: otvorenost (glasnost) i preuređenje (perestrojka). Ali čim su ljudi smeli da govore, sistem je počeo da puca.

1989. u istočnoj Evropi komunistički režimi padaju jedan za drugim, uglavnom mirno („plišana revolucija" u Čehoslovačkoj), krvavo u Rumuniji. 9. NOVEMBRA 1989. pada BERLINSKI ZID. Nemačka se ujedinjuje 1990. Krajem 1991. SOVJETSKI SAVEZ se raspada na 15 država.

Za jedne je to bila pobeda slobode i demokratije; za mnoge u Rusiji — poniženje i haos 1990-ih (siromaštvo, kriminal, pad životnog veka). I to drugo pamćenje objašnjava deo današnje ruske politike.

Kostur lekcije: supersile i nuklearno odvraćanje → gvozdena zavesa, NATO i Varšavski pakt, Berlinski zid → Koreja, Kuba, Vijetnam, Avganistan → svemirska trka → dekolonizacija → nesvrstani (Beograd 1961) → Gorbačov, 1989, 1991.

Sledeće: naša zemlja kroz ceo vek — Jugoslavija od nastanka do raspada.`,
pr:{p:'Kada je pao Berlinski zid?', o:['1961.','9. novembra 1989.','1991.'], t:1, z:'Zid je podignut 1961, pao 1989; SSSR se raspao krajem 1991.'}}
],
kljucno:['Hladni rat (1947–1991): SAD i SSSR, nuklearno odvraćanje, posredni ratovi; NATO (1949) i Varšavski pakt (1955); Berlinski zid 1961–1989.','Vruće tačke: Koreja, Kubanska kriza 1962, Vijetnam, Avganistan; svemirska trka (Sputnjik, Gagarin, Mesec 1969).','Dekolonizacija: Indija 1947, Kina 1949, „godina Afrike" 1960; Izrael 1948 i Nakba.','Jugoslavija: raskol sa Staljinom 1948 (i Goli otok); Pokret nesvrstanih, prvi samit u Beogradu 1961.','Gorbačov, 1989, pad zida, raspad SSSR-a 1991 — za jedne pobeda slobode, za mnoge Ruse poniženje.'],
kartice:[
{p:'Zašto je Hladni rat bio „hladan"?', o:'Zbog nuklearnog oružja supersile nisu ratovale direktno, nego posredno.'},
{p:'Šta je bila Kubanska kriza?', o:'Oktobar 1962 — sovjetske rakete na Kubi; svet najbliži nuklearnom ratu.'},
{p:'Kada se Tito razišao sa Staljinom?', o:'1948 (Rezolucija Informbiroa).'},
{p:'Gde i kada je bio prvi samit nesvrstanih?', o:'U Beogradu, 1961.'},
{p:'Kada se raspao Sovjetski Savez?', o:'Krajem 1991.'}
],
razgovor:['Kako su tvoji stariji pamtili Jugoslaviju nesvrstanih — i šta misliš, koliko je u tome istine, a koliko nostalgije?','Pad zida je za jedne pobeda, za druge poniženje. Kako ista istorija proizvodi tako različita sećanja?']},

{id:'13-4', naslov:'Jugoslavija — od nastanka do raspada',
kuka:{p:'Koliko je dugo, ukupno, postojala neka Jugoslavija (od 1918. do 2003. ili 2006)?', o:['Oko 20 godina','Oko 45 godina','Oko 85 godina'], t:2},
delovi:[
{n:'Prva Jugoslavija (1918–1941)', t:`Ideja jugoslovenstva — da su južni Sloveni jedan narod ili bar srodni narodi koji treba da žive zajedno — rasla je u 19. veku. Posle Prvog svetskog rata 1. decembra 1918. nastaje KRALJEVINA SRBA, HRVATA I SLOVENACA, sa srpskom dinastijom Karađorđevića.

Od početka glavni sukob: CENTRALIZAM (jaka vlast iz Beograda, uglavnom stav srpskih stranaka) protiv FEDERALIZMA (široka samouprava, stav hrvatskih stranaka). 1928. u skupštini je ubijen vođa Hrvatske seljačke stranke STJEPAN RADIĆ. 1929. kralj ALEKSANDAR uvodi diktaturu i menja ime u KRALJEVINA JUGOSLAVIJA. 1934. kralj je ubijen u MARSELJU (atentat su organizovali ustaše i makedonski VMRO).

1939. sporazum Cvetković–Maček stvara Banovinu Hrvatsku — kasni pokušaj dogovora. 25. marta 1941. vlada pristupa Trojnom paktu; 27. marta oficiri prave puč uz demonstracije („bolje rat nego pakt"); 6. aprila Hitler napada.`,
pr:{p:'Koji je bio glavni unutrašnji spor prve Jugoslavije?', o:['Oko jezika','Centralizam (jaka vlast iz Beograda) protiv federalizma (samouprava)','Oko vere'], t:1, z:'Srpske stranke su uglavnom bile za centralizam, hrvatske za federalizam — spor koji je obeležio celu državu.'}},
{n:'Druga Jugoslavija — Titova (1945–1980)', t:`Posle rata komunisti stvaraju FEDERATIVNU NARODNU REPUBLIKU JUGOSLAVIJU (kasnije SFRJ): šest republika (Srbija, Hrvatska, Slovenija, Bosna i Hercegovina, Crna Gora, Makedonija) i, u Srbiji, dve pokrajine (Vojvodina, Kosovo). Vlast ima jedna partija, a vrh — TITO, do smrti.

Faze:
• 1945–48 — po sovjetskom uzoru: nacionalizacija, obračun sa protivnicima, kolektivizacija;
• 1948 — raskol sa Staljinom; Goli otok;
• od 1950 — SAMOUPRAVLJANJE, otvaranje ka Zapadu, nesvrstani; od 1960-ih otvorene granice i odlazak radnika u Nemačku i dalje („gastarbajteri");
• 1960-e i 70-e — rast standarda: stanovi, letovanja, fiće, crveni pasoš; ali i gušenje kritike (Đilas, „hrvatsko proleće" 1971, „liberali" u Srbiji 1972);
• USTAV 1974 — republike i pokrajine dobijaju veliku samostalnost; Kosovo i Vojvodina skoro ravni republikama. Mnogi u Srbiji su to doživeli kao slabljenje Srbije; drugi kao jedini način da se država drži na okupu.

„Bratstvo i jedinstvo" je bilo i stvarno (mešoviti brakovi, zajednički život, sport, muzika) i nametnuto (o ratnim zločinima 1941–45 među narodima se javno malo govorilo).`,
pr:{p:'Šta je doneo Ustav iz 1974?', o:['Ukidanje republika','Veliku samostalnost republikama i pokrajinama, Kosovu i Vojvodini skoro kao republikama','Višestranačje'], t:1, z:'Decentralizacija — jedni je vide kao razlog raspada, drugi kao pokušaj da se on spreči.'}},
{n:'Kriza 1980-ih', t:`TITO umire 4. maja 1980. Ostaje kolektivno predsedništvo — i nerešeni problemi:
• EKONOMIJA: ogroman spoljni dug (oko 20 milijardi dolara), inflacija, nezaposlenost, nestašice (benzin na bonove, redukcije struje);
• KOSOVO: 1981. demonstracije Albanaca za status republike; srpsko stanovništvo se iseljava i oseća ugroženo;
• NACIONALIZMI rastu u svim republikama. Memorandum SANU (1986, nacrt) u Srbiji; u Sloveniji i Hrvatskoj pokreti za samostalnost;
• SLOBODAN MILOŠEVIĆ (od 1987) u Srbiji preuzima vlast i, preko masovnih mitinga („antibirokratska revolucija"), smenjuje rukovodstva Vojvodine, Kosova i Crne Gore; 1989. pokrajinama se oduzima veći deo autonomije;
• 1989–1990: pad komunizma u Evropi; prvi višestranački izbori 1990. u svim republikama pobeđuju uglavnom nacionalne stranke (u Hrvatskoj Tuđman, u Srbiji Milošević).

Zašto se Jugoslavija raspala? Istoričari navode: ekonomski slom, nacionalizme svih strana, Ustav 1974 i neslaganje oko budućeg uređenja (savez država ili jača federacija), kraj Hladnog rata, Titovu smrt bez naslednika, uticaj stranih sila. Oko TEŽINE pojedinih uzroka i ODGOVORNOSTI vođa spor traje i različito se predaje u školama svake od bivših republika.`,
pr:{p:'Šta je, po istoričarima, uzrokovalo raspad Jugoslavije?', o:['Samo jedan čovek','Više uzroka zajedno: ekonomski slom, nacionalizmi, ustavno uređenje, kraj Hladnog rata, nestanak Tita','Samo strane sile'], t:1, z:'Istoričari se slažu da je uzroka više; spor je oko njihove težine i odgovornosti.'}},
{n:'Ratovi 1991–1999', t:`Ovo je najbolnija lekcija. Činjenice, bez ulepšavanja ijedne strane:

• SLOVENIJA (jun–jul 1991) — kratak rat, oko 60 poginulih; JNA se povlači.
• HRVATSKA (1991–1995) — Srbi u Krajini odbijaju da ostanu u nezavisnoj Hrvatskoj, uz podršku JNA i Beograda. Opsada i razaranje VUKOVARA (1991) i zločin na Ovčari (oko 200 ubijenih zarobljenika); granatiranje Dubrovnika; zločini nad Srbima u Gospiću, Medačkom džepu i drugde. Avgusta 1995. akcija OLUJA: Hrvatska vraća Krajinu, oko 200.000 Srba izbegne ili bude proterano, uz ubistva civila koji su ostali. U Hrvatskoj je to praznik pobede, u Srbiji dan sećanja na stradanje.
• BOSNA I HERCEGOVINA (1992–1995) — najkrvaviji rat: oko 100.000 mrtvih, više od dva miliona raseljenih. Rat sve tri strane (Srbi, Bošnjaci, Hrvati; neko vreme i Bošnjaci i Hrvati jedni protiv drugih). OPSADA SARAJEVA skoro četiri godine. Logori (Omarska, Čelebići i drugi). U julu 1995. posle pada SREBRENICE snage Vojske Republike Srpske ubile su oko 8.000 bošnjačkih muškaraca i dečaka. Haški tribunal i Međunarodni sud pravde kvalifikovali su to kao genocid (MSP 2007: Srbija nije odgovorna za izvršenje, ali jeste za to što ga nije sprečila); u Srbiji i Republici Srpskoj zločin se uglavnom priznaje, ali se ta kvalifikacija osporava. Rat je završen DEJTONSKIM SPORAZUMOM (1995): BiH sa dva entiteta — Federacijom BiH i Republikom Srpskom.
• KOSOVO (1998–1999) — sukob OVK i srpskih snaga, pa NATO bombardovanje 1999 (lekcija 9-5); proterivanje stotina hiljada Albanaca tokom rata, a posle juna 1999. odlazak oko 200.000 Srba i drugih nealbanaca sa Kosova.

Haški tribunal (1993–2017) osudio je pripadnike svih strana, najviše srpske; mnogi u Srbiji ga vide kao pristrasan, mnogi drugde kao nedovoljno strog. Sve strane imaju svoje žrtve i svoje zločince — i sve strane najčešće pamte prvo svoje žrtve.`,
pr:{p:'Kako je završen rat u Bosni i Hercegovini?', o:['Pobedom jedne strane','Dejtonskim sporazumom 1995 — BiH sa dva entiteta','Ulaskom u EU'], t:1, z:'Dejton je zaustavio rat i napravio složenu državu: Federaciju BiH i Republiku Srpsku.'}},
{n:'Kraj jedne zemlje — i kraj', t:`Kako se Jugoslavija gasila:
• 1991–1992 — nezavisnost Slovenije, Hrvatske, Makedonije i BiH;
• 1992 — Srbija i Crna Gora formiraju SAVEZNU REPUBLIKU JUGOSLAVIJU; sankcije UN, hiperinflacija (lekcija 8-2);
• 5. OKTOBAR 2000 — masovni protesti i pad Miloševića, posle izbora; Milošević je 2001. izručen Hagu, umro 2006. pre presude;
• 12. MART 2003 — ubijen premijer ZORAN ĐINĐIĆ; iste godine SRJ postaje Državna zajednica SRBIJA I CRNA GORA;
• 2006 — Crna Gora na referendumu bira nezavisnost; Srbija je ponovo samostalna država, posle 88 godina.
• 2008 — Kosovo proglašava nezavisnost (lekcija 9-5).

Zbirno: neka Jugoslavija je postojala 85–88 godina, zavisno od toga šta se broji. Sedam država danas stoji na njenom prostoru.

Kostur lekcije: prva Jugoslavija (centralizam protiv federalizma, diktatura 1929, Marselj 1934, 27. mart) → Titova (samoupravljanje, nesvrstani, Ustav 1974) → kriza 1980-ih (dug, Kosovo, nacionalizmi, Milošević, 1990) → ratovi 1991–1999 → 5. oktobar, Đinđić, 2006.

Pravilo za ovu lekciju više nego za ijednu drugu: kada neko priča o 1990-im, pitaj šta preskače.`,
pr:{p:'Kada je Srbija ponovo postala samostalna država?', o:['1992.','2000.','2006, kad je Crna Gora izabrala nezavisnost'], t:2, z:'Posle referenduma u Crnoj Gori 2006. Srbija je ponovo samostalna, prvi put posle 1918.'}}
],
kljucno:['Kraljevina SHS (1. 12. 1918): centralizam protiv federalizma; Radić 1928, diktatura 1929, Marselj 1934, 27. mart 1941.','Titova Jugoslavija: šest republika i dve pokrajine; raskol sa Staljinom 1948, samoupravljanje, nesvrstani, Ustav 1974.','Kriza 1980-ih: dug i inflacija, Kosovo 1981, nacionalizmi, Milošević, višestranački izbori 1990; uzroka raspada više, spor o težini i odgovornosti.','Ratovi 1991–1999: Slovenija, Hrvatska (Vukovar, Oluja), BiH (Sarajevo, Srebrenica, Dejton), Kosovo — žrtve i zločinci na svim stranama.','5. oktobar 2000, Đinđić 2003, Crna Gora 2006 → samostalna Srbija; Kosovo 2008.'],
kartice:[
{p:'Kada je kralj Aleksandar uveo diktaturu i promenio ime države?', o:'1929. — Kraljevina Jugoslavija.'},
{p:'Šta je bio Ustav iz 1974?', o:'Ustav koji je republikama i pokrajinama dao veliku samostalnost.'},
{p:'Kada je umro Tito?', o:'4. maja 1980.'},
{p:'Šta je Dejtonski sporazum?', o:'Mirovni sporazum 1995. kojim je završen rat u BiH (dva entiteta).'},
{p:'Šta se desilo 5. oktobra 2000?', o:'Pad Slobodana Miloševića posle izbora i masovnih protesta.'}
],
razgovor:['Šta si o 1990-im naučio u školi ili kod kuće — i šta ti je u ovoj lekciji bilo novo ili neprijatno?','Kad bi pisao priču o ratu 1990-ih, čije oči bi izabrao — i zašto baš njegove?']},

{id:'13-5', naslov:'Svet od 1991. do danas',
kuka:{p:'Šta od ovoga se desilo pre — pad Berlinskog zida ili pojava veba?', o:['Veb je stariji','Skoro istovremeno: zid 1989, veb 1989–1991','Zid je pao posle 2000.'], t:1},
delovi:[
{n:'Optimizam 1990-ih', t:`Posle 1991. mnogi su verovali da je istorija velikih sukoba završena. Politikolog Frensis Fukujama je 1989. pisao o „KRAJU ISTORIJE": liberalna demokratija i tržište su pobedili i drugih ozbiljnih protivnika nemaju.

Tako je i izgledalo:
• SAD su jedina supersila;
• GLOBALIZACIJA (lekcija 8-5): Kina se otvara, Indija se reformiše, trgovina cveta;
• INTERNET ulazi u kuće;
• EVROPSKA UNIJA se širi na istok (2004, 2007) i uvodi evro (1999/2002);
• u Južnoj Africi pada aparthejd, NELSON MANDELA postaje predsednik (1994).

Ali isto desetleće je donelo i ratove u Jugoslaviji i GENOCID U RUANDI (1994, oko 800.000 ubijenih Tutsija i umerenih Hutua za oko sto dana) — dok je svet gledao. Istorija se nije završila.`,
pr:{p:'Šta je Fukujama mislio pod „krajem istorije"?', o:['Da će svet nestati','Da su liberalna demokratija i tržište pobedili i da nemaju ozbiljnu alternativu','Da se istorija više ne uči'], t:1, z:'Bila je to teza o pobedi jednog modela — događaji posle 2000. su je ozbiljno uzdrmali.'}},
{n:'11. septembar i ratovi', t:`11. SEPTEMBRA 2001. teroristi Al Kaide otimaju četiri putnička aviona; dva udaraju u Svetski trgovinski centar u Njujorku, jedan u Pentagon, četvrti pada u Pensilvaniji. Gine skoro 3.000 ljudi.

Posledice:
• SAD napadaju AVGANISTAN (2001), gde su vladali talibani koji su štitili Al Kaidu; posle 20 godina SAD se povlače (2021), a talibani se vraćaju na vlast;
• 2003. SAD i saveznici napadaju IRAK, uz tvrdnju da Sadam Husein ima oružje za masovno uništenje — oružje nije pronađeno; sledi dug haos, stotine hiljada mrtvih i rađanje „Islamske države";
• „rat protiv terorizma": nadzor, aerodromske kontrole, zatvor Gvantanamo, rasprava o mučenju.

Za mnoge u svetu Irak je postao primer kako i demokratija može da započne rat na lažnoj osnovi; za druge — da je svrgavanje diktatora bilo opravdano, ali izvedeno katastrofalno.`,
pr:{p:'Šta je bio zvanični razlog napada na Irak 2003. i šta se pokazalo?', o:['Nafta, i to je potvrđeno','Navodno oružje za masovno uništenje — koje nije pronađeno','Napad Iraka na SAD'], t:1, z:'Glavni razlog se pokazao netačnim — zato je rat u Iraku i danas primer obaveštajne i političke greške.'}},
{n:'Krize i preokreti', t:`• 2008 — svetska ekonomska kriza (lekcija 8-4); u mnogim zemljama poverenje u elite opada, raste populizam.
• 2010–2011 — ARAPSKO PROLEĆE: protesti protiv diktatura u Tunisu, Egiptu, Libiji, Siriji… Nade su se uglavnom izjalovile: u Siriji građanski rat sa stotinama hiljada mrtvih i milionima izbeglica — mnogi su 2015. prošli i kroz Srbiju („balkanska ruta").
• USPON KINE — od siromašne zemlje do druge privrede sveta i tehnološke sile; SAD je vide kao glavnog suparnika.
• Društvene mreže i pametni telefoni menjaju politiku: brzo okupljanje protesta, ali i dezinformacije i polarizacija.
• 2016 — Bregzit i izbor Donalda Trampa: znaci pobune dela birača protiv globalizacije i elita.
• 2020 — PANDEMIJA KOVIDA-19: zatvaranje celog sveta; zvanično oko 7 miliona umrlih, a procene ukupnog viška smrtnosti su višestruko veće; vakcine razvijene za manje od godinu dana.`,
pr:{p:'Kako se završilo Arapsko proleće u većini zemalja?', o:['Stabilnim demokratijama svuda','Uglavnom razočaranjem — povratkom diktatura ili građanskim ratovima (Sirija, Libija)','Ništa se nije desilo'], t:1, z:'Tunis je dugo bio izuzetak; u Siriji i Libiji izbili su ratovi, u Egiptu se vratila vojska.'}},
{n:'Ratovi danas', t:`Dva sukoba su posle 2020. najviše oblikovala vesti — i podelila mišljenja. Ovde samo osnove, jer se stanje menja:

• UKRAJINA: 2014. Rusija pripaja Krim i podržava pobunjenike na istoku Ukrajine; 24. FEBRUARA 2022. Rusija pokreće sveobuhvatni napad na Ukrajinu. Rusija to predstavlja kao odgovor na širenje NATO-a i zaštitu ruskog stanovništva; Ukrajina, većina zapadnih država i većina članica UN u Generalnoj skupštini (2022) osudile su ga kao agresiju. Srbija je glasala za tu rezoluciju UN, ali nije uvela sankcije Rusiji. Rat je doneo stotine hiljada mrtvih i ranjenih i milione izbeglica.
• IZRAEL I GAZA: 7. OKTOBRA 2023. Hamas napada Izrael, ubija oko 1.200 ljudi i odvodi oko 250 talaca. Izrael odgovara ratom u Gazi; po podacima zdravstvenih vlasti Gaze, ubijeno je desetine hiljada ljudi, velika većina Gaze je razorena, a humanitarna kriza je ogromna. Izrael ističe pravo na odbranu i borbu protiv Hamasa; kritičari, uključujući UN agencije i mnoge države, optužuju Izrael za nesrazmernu silu i kršenje međunarodnog prava; pred Međunarodnim sudom pravde vodi se postupak.

Za oba sukoba važi pravilo iz lekcije 12-5: proveri izvor, čitaj više strana, pitaj se ko ti šta i zašto govori.`,
pr:{p:'Koji je dobar način da se prate ovakvi sukobi?', o:['Verovati jednom izvoru koji ti se dopada','Proveravati izvore i čitati više strana','Ne pratiti ništa'], t:1, z:'U ratu je istina prva žrtva — zato bočno čitanje i više izvora.'}},
{n:'Kraj oblasti — dug vek u kratkoj liniji', t:`Kostur 20. veka (i početka 21.):
1. 1914–1918 — Prvi svetski rat, pad carstava, revolucija u Rusiji, prva Jugoslavija;
2. 1918–1945 — diktature, Drugi svetski rat, Holokaust, atomska bomba;
3. 1945–1991 — Hladni rat, dekolonizacija, nesvrstani, pad zida;
4. naša zemlja — od Kraljevine SHS do samostalne Srbije;
5. od 1991 — globalizacija i internet, 11. septembar, krize, uspon Kine, pandemija, novi ratovi.

Šta se kroz ceo vek ponavlja? Tehnologija daje sve veću moć — i za dobro i za zlo. Demokratija nije zagarantovana. Velike sile i dalje vuku male. I svaki narod pamti prvo svoje žrtve.

Srbija u 21. veku: posle 2000. demokratske promene, kandidatura za EU, vojna neutralnost, odnosi sa Zapadom, Rusijom i Kinom (lekcija 9-5), odlazak mladih na rad u inostranstvo, i rasprave o prošlosti koje nisu završene.

Sledeće: alat — verovatnoća i rizik. Pa religije: šta su ljudi verovali kroz sve to vreme.`,
pr:{p:'Šta se, po ovoj oblasti, ponavlja kroz ceo 20. vek?', o:['Ništa, svaki period je drugačiji','Rast moći tehnologije, krhkost demokratije, uticaj velikih sila i pamćenje prvo svojih žrtava','Samo ratovi na Balkanu'], t:1, z:'Ovi obrasci se vide od 1914. do danas.'}}
],
kljucno:['Posle 1991: „kraj istorije", globalizacija, internet, širenje EU, Mandela — ali i Ruanda 1994 i ratovi u Jugoslaviji.','11. septembar 2001 → Avganistan (2001–2021), Irak 2003 (oružje nije nađeno), rat protiv terorizma.','2008, Arapsko proleće i Sirija (balkanska ruta 2015), uspon Kine, Bregzit i Tramp 2016, kovid 2020.','Ukrajina (Krim 2014, napad 24. 2. 2022) i Izrael–Gaza (7. 10. 2023 i rat) — različita tumačenja; proveri izvore.','Kroz vek: moć tehnologije, krhka demokratija, velike sile, svako pamti svoje žrtve.'],
kartice:[
{p:'Šta je Fukujamin „kraj istorije"?', o:'Teza da su liberalna demokratija i tržište pobedili bez ozbiljne alternative (1989).'},
{p:'Šta se desilo 11. septembra 2001?', o:'Teroristi Al Kaide napali su SAD otetim avionima; skoro 3.000 mrtvih.'},
{p:'Zašto je rat u Iraku 2003. sporan?', o:'Glavni razlog — oružje za masovno uništenje — nije pronađen.'},
{p:'Šta je bilo Arapsko proleće?', o:'Talas protesta protiv diktatura 2010–2011; uglavnom se završio razočaranjem ili ratovima.'},
{p:'Kada je Rusija pokrenula sveobuhvatni napad na Ukrajinu?', o:'24. februara 2022.'}
],
razgovor:['Koji događaj iz ovog perioda pamtiš kao „onaj gde si bio kad se desio" — i kako je promenio tvoj pogled na svet?','Fukujama je mislio da je istorija gotova. Šta bi ti predvideo za sledećih 30 godina — i koliko bi ti verovao?']}
]},

{id:'7', naziv:'Religije i velike ideje', ikona:'🕯️', era:'ideje', lekcije:[
{id:'7-1', naslov:'Šta je religija; Istok — hinduizam, budizam, kineska tradicija',
kuka:{p:'Da li sve religije veruju u boga ili bogove?', o:['Da, to je definicija religije','Ne — neke, kao rani budizam, ne stavljaju boga stvoritelja u centar','Ne, nijedna istočna religija nema bogove'], t:1},
delovi:[
{n:'Šta je religija', t:`Teško je dati definiciju koja pokriva sve. Naučnici koji proučavaju religije (to je posebna nauka — RELIGIOLOGIJA, koja ne pita „koja je istinita", nego opisuje šta ljudi veruju i rade) obično gledaju nekoliko sastojaka:
• VEROVANJE u sveto — bog, bogovi, duhovi, ili neki večni zakon;
• OBREDI — molitva, post, praznici, žrtve;
• PRIČE — o postanku sveta, o precima, o kraju;
• MORAL — kako treba živeti;
• ZAJEDNICA — crkva, uma, sangha; ljudi koji veruju zajedno.

Religija postoji u svakoj poznatoj kulturi. Najstariji tragovi su sahrane sa predmetima, stare desetine hiljada godina. Danas oko tri četvrtine ljudi na svetu pripada nekoj religiji; najveće su hrišćanstvo (oko 2,3 milijarde), islam (oko 1,9–2), hinduizam (oko 1,2) i budizam (oko 320 miliona). Najbrže raste grupa onih koji ne pripadaju nijednoj — oko 1,9 milijardi.`,
pr:{p:'Šta proučava religiologija?', o:['Koja je religija istinita','Šta ljudi veruju i rade — opisuje religije, ne sudi o njima','Samo hrišćanstvo'], t:1, z:'Nauka o religijama opisuje i poredi; pitanje istinitosti ostavlja vernicima i filozofima.'}},
{n:'Hinduizam', t:`HINDUIZAM je najstarija živa velika religija — nema osnivača ni jedan datum početka; korene ima u VEDAMA, svetim spisima nastalim pre oko 3.000 godina u Indiji. Više je porodica tradicija nego jedna crkva.

Ključni pojmovi:
• BRAHMAN — jedna sveobuhvatna stvarnost iza svega; mnogi bogovi (Višnu, Šiva, boginja Devi…) su njena lica. Zato hinduizam može da izgleda i kao mnogoboštvo i kao jednoboštvo.
• SAMSARA — krug ponovnih rađanja.
• KARMA — svako delo ima posledice, i u ovom i u sledećem životu.
• MOKŠA — oslobođenje iz kruga; cilj.
• DARMA — dužnost, pravi red, ono što ti je činiti.

Sa hinduizmom je istorijski povezan KASTINSKI sistem — podela društva po rođenju. Indijski ustav danas zabranjuje diskriminaciju po kasti, ali ona u praksi i dalje postoji. Mnogi hinduisti kažu da kaste nisu suština vere.

Danas: oko 1,2 milijarde, većinom u Indiji i Nepalu.`,
pr:{p:'Šta je karma?', o:['Sudbina koju bogovi odrede pri rođenju','Zakon da svako delo ima posledice, u ovom i sledećem životu','Molitva pred spavanje'], t:1, z:'Karma je zakon uzroka i posledice delovanja; vezan je za krug ponovnih rađanja (samsaru).'}},
{n:'Budizam', t:`Sidarta Gautama, princ iz severne Indije (živeo oko 5. veka p. n. e.), napustio je bogatstvo da bi razumeo patnju. Kad je, po predanju, posle meditacije „probuđen", postao je BUDA — „probuđeni".

Njegovo učenje počinje od ČETIRI PLEMENITE ISTINE:
1. život nosi patnju (nezadovoljstvo, prolaznost);
2. patnju izaziva žudnja i vezivanje;
3. patnja može da prestane;
4. put do toga je PLEMENITI OSMOSTRUKI PUT — ispravno gledanje, namera, govor, delanje, život, trud, pažnja i sabranost.

Cilj je NIRVANA — „gašenje" žudnje i izlazak iz kruga rađanja. Buda je odbacio krajnosti: ni raskoš, ni mučenje tela — SREDNJI PUT.

Budizam ne zavisi od boga stvoritelja; zato ga neki zovu i filozofijom. Ali u praksi ima hramove, obrede, molitve i svece. Dve velike grane: TERAVADA (Šri Lanka, Tajland) i MAHAJANA (Kina, Japan, Koreja — tu je i zen), plus tibetanski budizam.

Meditacija sabranosti (mindfulness), koja je danas popularna i na Zapadu, potiče baš odavde.`,
pr:{p:'Šta je, po Budi, uzrok patnje?', o:['Bogovi','Žudnja i vezivanje','Siromaštvo'], t:1, z:'Druga plemenita istina: patnju izaziva žudnja — zato je put da se žudnja ugasi.'}},
{n:'Kineska tradicija', t:`U Kini se tri učenja vekovima prepliću, a čovek često živi po sva tri:

• KONFUČIJANIZAM (Konfučije, 551–479. p. n. e.) — pre svega etika i red u društvu: poštovanje roditelja i predaka, odnos vladara i podanika, obrazovanje, „ne čini drugome ono što ne želiš sebi". Manje o bogovima, više o tome kako biti dobar čovek u porodici i državi.
• TAOIZAM (Lao Ce, „Tao te đing") — DAO, „put", prirodni tok stvari. Mudro je ne forsirati, teći kao voda koja je meka a ipak probije kamen. Jin i jang: suprotnosti koje se dopunjuju.
• BUDIZAM — stigao iz Indije oko 1. veka n. e. i postao kineski (zen je u Kini nastao kao čan).

Uz to, narodna vera: poštovanje predaka, duhovi, praznici.

Japan ima svoju staru tradiciju, ŠINTO — poštovanje duhova (kami) u prirodi, precima i mestima — koja se meša sa budizmom.`,
pr:{p:'Šta je u središtu konfučijanizma?', o:['Bog stvoritelj','Etika i red u porodici i društvu','Meditacija u samoći'], t:1, z:'Konfučije uči kako biti dobar sin, otac, činovnik i vladar — manje o bogovima, više o odnosima.'}},
{n:'Kako o ovome razmišljati', t:`Neke stvari se ponavljaju u svim ovim tradicijama: ZLATNO PRAVILO (ne čini drugome ono što ne želiš sebi) u nekom obliku postoji skoro svuda. Isto tako i ideja da je sebičnost izvor zla, i da čovek treba da savlada sebe.

Ali razlike su stvarne: hinduizam i budizam vide vreme kao KRUG (rađanja se ponavljaju), dok avramovske religije (sledeća lekcija) vide vreme kao LINIJU — od stvaranja ka kraju.

Mudro pravilo za ovu oblast: kad opisuješ tuđu veru, opiši je tako da bi se vernik prepoznao. Ne poredi tuđi najgori primer sa svojim najboljim idealom.

I još jedno razlikovanje: religija kao VERA (u šta neko veruje), kao KULTURA (praznici, hrana, običaji) i kao IDENTITET (kojem narodu ili grupi pripadaš). Na Balkanu se ova tri često mešaju — čovek može biti „pravoslavac" po identitetu, a da ne veruje.

Sledeće: tri vere koje potiču od Avrama — i od kojih je izrastao veći deo sveta u kome živimo.`,
pr:{p:'Kako hinduizam i budizam obično vide vreme?', o:['Kao liniju od stvaranja do kraja','Kao krug ponovnih rađanja','Kao nešto nevažno'], t:1, z:'Kružno vreme (samsara) — za razliku od linearnog vremena avramovskih religija.'}}
],
kljucno:['Religija obično ima verovanje u sveto, obrede, priče, moral i zajednicu; oko tri četvrtine ljudi pripada nekoj.','Hinduizam: bez osnivača, Vede; brahman, samsara, karma, mokša, darma; istorijski vezan za kaste.','Budizam: Buda (5. vek p. n. e.), četiri plemenite istine, osmostruki put, nirvana; bez boga stvoritelja u središtu.','Kina: konfučijanizam (etika, red), taoizam (dao, jin-jang), budizam — prepliću se; Japan: šinto.','Zlatno pravilo je skoro svuda; vreme kao krug (Istok) ili linija (avramovske vere); vera, kultura i identitet nisu isto.'],
kartice:[
{p:'Šta su samsara i karma?', o:'Samsara — krug ponovnih rađanja; karma — zakon da svako delo ima posledice.'},
{p:'Koje su četiri plemenite istine budizma (ukratko)?', o:'Postoji patnja; izaziva je žudnja; može da prestane; put je osmostruki put.'},
{p:'Šta znači „Buda"?', o:'„Probuđeni".'},
{p:'Šta je dao u taoizmu?', o:'„Put" — prirodni tok stvari koji ne treba forsirati.'},
{p:'Koje je zajedničko etičko pravilo skoro svih religija?', o:'Zlatno pravilo — ne čini drugome ono što ne želiš sebi.'}
],
razgovor:['Budizam kaže da patnju pravi žudnja. Slažeš li se — ili je žudnja i ono što te tera da pišeš?','Vera, kultura, identitet: šta je od toga za tebe religija u kojoj si odrastao?']},
{id:'7-2', naslov:'Avramove religije — judaizam, hrišćanstvo, islam',
kuka:{p:'Da li jevreji, hrišćani i muslimani veruju u istog Boga?', o:['Ne, svaka vera ima potpuno drugog boga','Sve tri sebe vide kao veru u jednog Boga Avramovog, ali ga različito shvataju','Samo hrišćani i muslimani'], t:1},
delovi:[
{n:'Zajednički koren', t:`Tri religije sebe vezuju za AVRAMA (Abrahama, Ibrahima) — praoca koji je, po predanju, pre oko 4.000 godina ostavio rodni grad u Mesopotamiji i poverovao u JEDNOG BOGA. Zato se zovu AVRAMOVSKE (abrahamske).

Zajedničko im je:
• MONOTEIZAM — samo jedan Bog, stvoritelj svega;
• Bog se OBJAVLJUJE ljudima preko proroka i svetih knjiga;
• vreme je LINIJA: stvaranje → istorija → kraj vremena i sud;
• mnogi isti likovi: Adam, Noje, Avram, Mojsije, David…

Zajedno ih danas ispoveda više od polovine čovečanstva. Ali razlike su važne — i oko njih je bilo i ratova i suživota.`,
pr:{p:'Šta je monoteizam?', o:['Verovanje u više bogova','Verovanje u jednog Boga','Neverovanje'], t:1, z:'Mono = jedan, teos = bog. Sve tri avramovske religije su monoteističke.'}},
{n:'Judaizam', t:`JUDAIZAM je najstarija od tri. Srž: Bog je sa narodom Izraela sklopio SAVEZ, a preko MOJSIJA dao ZAKON — TORU (pet Mojsijevih knjiga), sa Deset zapovesti u središtu. Hebrejska Biblija (TANAH) za hrišćane je Stari zavet.

Važnije od verovanja je ŽIVETI ZAKON: subota (šabat) kao dan odmora, propisi o hrani (košer), praznici kao Pesah (izlazak iz Egipta). Posle razaranja Jerusalimskog hrama (70. n. e.) središte vere postaju sinagoga, rabin i učenje — TALMUD, ogromna zbirka rasprava o zakonu.

Jevreji vekovima žive raseljeni (DIJASPORA) i često su progonjeni. Najstrašnije: HOLOKAUST — nacisti su u Drugom svetskom ratu ubili oko šest miliona Jevreja. Godine 1948. osnovana je država Izrael.

Danas: oko 15 miliona Jevreja, najviše u Izraelu i SAD. Mali broj, ogroman uticaj — iz judaizma su izrasle i druge dve vere.`,
pr:{p:'Šta je Tora?', o:['Jevrejski hram','Zakon — pet Mojsijevih knjiga, srž judaizma','Jevrejski praznik'], t:1, z:'Tora je Zakon dat preko Mojsija; za hrišćane deo Starog zaveta.'}},
{n:'Hrišćanstvo', t:`Isus iz Nazareta, Jevrejin, propovedao je u Palestini početkom 1. veka i razapet je oko 30. godine pod rimskom vlašću. Njegovi sledbenici veruju da je VASKRSAO i da je HRISTOS (grčki: „pomazanik", isto što i hebrejski „mesija") — Sin Božji.

Srž vere:
• SVETA TROJICA — jedan Bog u tri lica: Otac, Sin i Sveti Duh;
• Bog je postao čovek u Isusu, i njegovom smrću i vaskrsenjem čovek je spasen;
• zapovest LJUBAVI — prema Bogu i bližnjem, pa i prema neprijatelju.

Sveta knjiga je BIBLIJA: Stari zavet (jevrejski spisi) + Novi zavet (četiri jevanđelja, pisma apostola). Apostol Pavle širi veru među nejevrejima; posle Konstantina (313) postaje vera carstva.

Tri velike grane: PRAVOSLAVLJE (istok, samostalne crkve — srpska, ruska, grčka…), KATOLICIZAM (papa u Rimu; razdvojeni 1054) i PROTESTANTIZAM (od Lutera, 1517; bez pape, akcenat na Bibliji i ličnoj veri). Danas oko 2,3 milijarde — najveća religija sveta.`,
pr:{p:'Šta znači reč „Hristos"?', o:['Bog','Pomazanik — isto što i „mesija"','Učitelj'], t:1, z:'Grčka reč za hebrejsko „mesija" — pomazanik koga je Bog poslao.'}},
{n:'Islam', t:`Muslimani veruju da je Bog (arapski: ALAH — reč koju za Boga koriste i arapski hrišćani) preko anđela Džibrila (Gavrila) objavio poruku MUHAMEDU, trgovcu iz Meke, od 610. godine. Ta objava je KURAN. Muhamed je za muslimane POSLEDNJI PROROK, „pečat" proroka — posle Avrama, Mojsija i Isusa (koga islam poštuje kao velikog proroka, ali ne kao Sina Božjeg).

Islam znači „predanje" (Bogu). Svaki musliman ima PET STUBOVA:
1. ŠEHADET — svedočenje: „Nema boga osim Boga, a Muhamed je njegov poslanik";
2. NAMAZ — molitva pet puta dnevno;
3. ZEKAT — davanje dela imovine siromašnima;
4. POST u mesecu ramazanu, od zore do zalaska sunca;
5. HADŽ — hodočašće u Meku, bar jednom u životu ako može.

Posle Muhamedove smrti spor oko naslednika podelio je islam na SUNITE (oko 85–90%) i ŠIITE (najviše u Iranu i Iraku). Danas: oko 1,9 milijardi, druga religija sveta. Najviše muslimana nije u arapskom svetu, nego u Indoneziji, Pakistanu, Indiji i Bangladešu.`,
pr:{p:'Kako islam gleda na Isusa?', o:['Ne pominje ga','Kao velikog proroka, ali ne kao Sina Božjeg','Kao Boga'], t:1, z:'Za muslimane je Isus (Isa) prorok, a Muhamed poslednji prorok.'}},
{n:'Na Balkanu — i kraj', t:`Na Balkanu se sve tri susreću: PRAVOSLAVNI (Srbi, Crnogorci, Makedonci, Grci, Bugari, Rumuni), KATOLICI (Hrvati, Slovenci, deo Mađara i Albanaca), MUSLIMANI (Bošnjaci, većina Albanaca, Turci) i — vekovima — JEVREJI, posebno sefardski, prognani iz Španije 1492. i primljeni u Osmanskom carstvu. Beogradski Dorćol je imao jevrejsku četvrt; najveći deo te zajednice uništen je u Holokaustu.

Zato je ovde religija često pomešana sa IDENTITETOM naroda: razlika između Srba, Hrvata i Bošnjaka istorijski je najviše bila verska. To je jedan od razloga zašto su verske razlike u ratovima 1990-ih imale tako veliku težinu — a i zašto postoje primeri dugog zajedničkog života, komšiluka i mešovitih brakova.

Kostur oblasti: šta je religija → Istok (krug, oslobođenje) → avramovske vere (jedan Bog, objava, linija vremena) → filozofija → kako znamo → etika. Religija i filozofija su dva velika odgovora na ista pitanja: šta je svet, šta je dobro, kako živeti.

Sledeće: novac — izum koji je možda promenio ljudsko ponašanje više od ijednog boga.`,
pr:{p:'Zašto je religija na Balkanu tako vezana za narod?', o:['Jer su svi vernici','Jer su se narodi istorijski najviše razlikovali po veri, pa je vera postala deo identiteta','Jer država tako propisuje'], t:1, z:'Razlika Srba, Hrvata i Bošnjaka istorijski je pre svega verska — zato vera i identitet idu zajedno.'}}
],
kljucno:['Avramovske vere: jedan Bog, objava preko proroka i knjiga, vreme kao linija ka kraju i sudu.','Judaizam: savez i Tora (Mojsije), život po zakonu (šabat, košer), Talmud; Holokaust; oko 15 miliona.','Hrišćanstvo: Isus kao Hristos, Sveta Trojica, ljubav; Biblija (Stari + Novi zavet); pravoslavni, katolici (1054), protestanti (1517); oko 2,3 milijarde.','Islam: Muhamed poslednji prorok, Kuran, pet stubova; suniti i šiiti; oko 1,9 milijardi, najviše u Aziji.','Na Balkanu vera = identitet naroda; i sukobi i dug suživot.'],
kartice:[
{p:'Šta je zajedničko judaizmu, hrišćanstvu i islamu?', o:'Jedan Bog, objava preko proroka, poreklo od Avrama, linearno vreme.'},
{p:'Šta je Tora?', o:'Jevrejski Zakon — pet Mojsijevih knjiga.'},
{p:'Koje su tri velike grane hrišćanstva?', o:'Pravoslavlje, katolicizam, protestantizam.'},
{p:'Koji su pet stubova islama?', o:'Šehadet (svedočenje), namaz (molitva), zekat (davanje), post u ramazanu, hadž.'},
{p:'Zašto se islam podelio na sunite i šiite?', o:'Zbog spora oko Muhamedovog naslednika.'}
],
razgovor:['Šta od pravoslavlja živi u tebi, i kad ne veruješ — običaj, slika, rečenica, osećaj?','Zašto se, po tebi, ljudi koji veruju u istog Avramovog Boga toliko svađaju — zbog vere, ili zbog nečeg drugog obučenog u veru?']},

{id:'7-3', naslov:'Šta je filozofija i njenih pet grana',
kuka:{p:'Šta misliš, šta znači reč „filozofija"?', o:['Nauka o mišljenju','Ljubav prema mudrosti','Učenje starih Grka'], t:1},
delovi:[
{n:'Reč i početak', t:`Filozofija na grčkom znači „ljubav prema mudrosti" (philos — onaj koji voli, sophia — mudrost). Ne „posedovanje mudrosti", nego ljubav prema njoj. Filozof je onaj koji traži, ne onaj koji je našao.

Počela je u grčkim gradovima oko 600. godine pre nove ere. Prvi filozof koga pamtimo je Tales iz Mileta. Njegov odgovor je bio pogrešan („sve je od vode"), ali je pitanje bilo novo: od čega je svet — a da to ne objasnimo bogovima i mitom?

Platon i Aristotel su rekli istu stvar: filozofija počinje ČUĐENJEM. Kad ti nešto što svi uzimaju zdravo za gotovo odjednom postane čudno. Zašto uopšte postoji nešto, a ne ništa? Šta je vreme? Zašto je nešto pravedno?`,
pr:{p:'Šta je bilo novo kod Talesa?', o:['Tačan odgovor da je sve od atoma','Pitanje od čega je svet, bez objašnjavanja bogovima','Prva napisana knjiga'], t:1, z:'Odgovor („sve je od vode") je bio pogrešan, ali je način bio nov: objasniti svet razlogom, a ne mitom.'}},
{n:'Filozofija, nauka, vera', t:`NAUKA pita kako svet radi i odgovara posmatranjem, merenjem i eksperimentom. Tvrdnja važi dok je eksperiment ne obori.

VERA odgovara na velika pitanja otkrovenjem i predanjem. Odgovor se prihvata, ne dokazuje; oslonac je poverenje, ne argument.

FILOZOFIJA pita velika pitanja kao vera, ali odgovara kao nauka — razlogom. Samo što nema laboratoriju, pa joj je oruđe ARGUMENT. I pita ono što nauka ne pita: šta je uopšte dokaz, šta je uzrok, da li je dobro ono što je korisno.

Skoro sve nauke su nekad bile filozofija. Fizika se zvala „prirodna filozofija" sve do Njutna. Kad neko pitanje dobije metod za merenje, ode iz filozofije i postane nauka. Filozofiji ostaju pitanja za koja merenje ne postoji.`,
pr:{p:'Čime filozofija odgovara na pitanja?', o:['Eksperimentom u laboratoriji','Otkrovenjem i predanjem','Razlogom i argumentom'], t:2, z:'Pita velika pitanja kao vera, ali odgovara kao nauka — razlogom; samo bez laboratorije, argumentom.'}},
{n:'Sokrat i metod', t:`Tri osnovna alata filozofa:
1. ANALIZA POJMA. Šta tačno znači „hrabar"? Onaj ko se ne boji — ili onaj ko se boji pa ipak ide?
2. ARGUMENT. Ne „ja tako osećam", nego „zato što A i B, sledi C".
3. PROTIVPRIMER. Jedan slučaj koji obara opšte pravilo. „Laž je uvek loša" — a laž ubici koji pita gde ti se krije prijatelj?

Sokrat (Atina, 5. vek pre n. e.) je ovo radio na ulici. Pitao je ljude šta je pravda, hrabrost, vrlina — i pokazivao im da ne znaju ono što misle da znaju. Odatle „znam da ništa ne znam": ne skromnost, nego početna tačka. Toliko je dosadio Atini da su ga osudili na smrt. Nije napisao ništa; znamo ga iz Platonovih dijaloga.`,
pr:{p:'Šta je Sokrat hteo sa „znam da ništa ne znam"?', o:['Da je znanje nemoguće','Da je svest o sopstvenom neznanju početak pravog traženja','Da je bio skroman čovek'], t:1, z:'To je početna tačka: ko misli da zna, ne traži. Sokrat je pokazivao ljudima da ne znaju ono što misle da znaju.'}},
{n:'Pet grana', t:`Filozofija je podeljena po vrsti pitanja:

1. METAFIZIKA — šta postoji. Da li postoji duša? Da li je volja slobodna? Šta je vreme?
2. EPISTEMOLOGIJA — šta i kako znamo. Razlika između verovanja i znanja; možemo li verovati čulima.
3. LOGIKA — kako pravilno zaključujemo. Ne pita da li je tvrdnja tačna, nego da li iz razloga zaista sledi zaključak.
4. ETIKA — kako treba delati. Šta čini postupak ispravnim: namera, posledica, karakter?
5. ESTETIKA — šta je lepo i šta je umetnost. Zašto nas tužna priča privlači umesto da nas odbije? (Aristotel: katarza — pročišćenje kroz sažaljenje i strah.)

Svaki put kad kao pisac odlučiš da kraj mora da boli — radiš estetiku, samo bez naslova.`,
pr:{p:'Kojoj grani pripada pitanje „da li je volja slobodna"?', o:['Etici','Metafizici','Estetici'], t:1, z:'Pitanje šta postoji i kakva je priroda stvari (pa i volje) je metafizika.'}},
{n:'Mapa u jednoj liniji', t:`Samo skelet, da znaš gde si kad neko ime padne:

• ANTIKA: Sokrat, Platon (svet ideja), Aristotel (logika, etika, nauka); stoici — kontroliši ono što zavisi od tebe, ostalo pusti.
• SREDNJI VEK: vera i razum — Avgustin, Toma Akvinski.
• NOVI VEK (17–18. vek): Dekart („mislim, dakle jesam"), Lok i Hjum (sve znanje iz iskustva), Kant (spaja jedno i drugo).
• 19. VEK: Hegel, Marks (istorija i društvo), Niče („Bog je mrtav" — šta sad sa vrednostima?).
• 20. VEK: egzistencijalisti (Sartr, Kami — smisao nije dat, pravi ga čovek), analitička filozofija (jezik i logika).

Ne moraš ovo da pamtiš napamet. Vraćaćemo se na imena kad zatreba.`,
pr:{p:'Ko je rekao „mislim, dakle jesam"?', o:['Niče','Dekart','Sokrat'], t:1, z:'Dekart, 17. vek — o tome je sledeća lekcija.'}}
],
kljucno:['Filozofija = ljubav prema mudrosti; počinje čuđenjem (Tales, oko 600. pre n. e.).','Nauka meri, vera prihvata, filozofija pita velika pitanja i odgovara argumentom.','Alati: analiza pojma, argument, protivprimer — Sokratov metod.','Pet grana: metafizika, epistemologija, logika, etika, estetika.'],
kartice:[
{p:'Šta znači reč „filozofija"?', o:'Ljubav prema mudrosti.'},
{p:'Po čemu se filozofija razlikuje od nauke i od vere?', o:'Pita velika pitanja kao vera, ali odgovara razlogom kao nauka — bez laboratorije, argumentom.'},
{p:'Koja su tri alata filozofa?', o:'Analiza pojma, argument, protivprimer.'},
{p:'Nabroj pet grana filozofije.', o:'Metafizika, epistemologija, logika, etika, estetika.'},
{p:'Šta je katarza?', o:'Pročišćenje kroz sažaljenje i strah koje doživimo uz tragičnu priču (Aristotel).'}
],
razgovor:['Navedi jedno pitanje iz svog života koje je filozofsko, i reci zašto ga nauka ne može rešiti.','Uzmi jedan kraj koji si napisao. Koje estetsko pitanje si tu rešavao?']},

{id:'7-4', naslov:'Razum ili iskustvo — kako znamo',
kuka:{p:'Odakle, po tebi, dolazi pravo znanje?', o:['Iz razuma — iz glave','Iz iskustva — kroz čula','Iz oba, nekako zajedno'], t:2},
delovi:[
{n:'Pitanje', t:`Odakle nam znanje? Dva velika odgovora su se sudarala kroz ceo 17. i 18. vek:

RACIONALIZAM: pravo znanje dolazi iz RAZUMA. Čula varaju; samo ono što razum jasno uvidi je sigurno. Uzor je matematika: da je 2 + 2 = 4 ne znaš zato što si brojao jabuke, nego zato što ne može drugačije.

EMPIRIZAM: sve znanje dolazi iz ISKUSTVA, kroz čula. Razum samo slaže ono što su čula donela. Bez iskustva, u glavi nema ničega.

Obe strane su imale jak argument i slabu tačku. Zato je spor trajao dva veka.`,
pr:{p:'Šta tvrdi empirizam?', o:['Pravo znanje dolazi iz razuma','Sve znanje dolazi iz iskustva, kroz čula','Znanje je nemoguće'], t:1, z:'Empiristi kažu: bez iskustva u glavi nema ničega — razum samo slaže ono što su čula donela.'}},
{n:'Dekart: sumnjaj u sve', t:`Dekart (Francuska, 17. vek) je hteo znanje sigurno kao matematika. Metod: sumnjaj u sve u šta se uopšte može posumnjati.

• Čula? Varaju me (štap u vodi izgleda slomljen).
• Da sam budan? Možda sanjam.
• Matematika? Možda me neki zli demon vara i kad sabiram.

Ali jedno ne mogu da dovedem u sumnju: da sumnjam. Ako sumnjam, mislim; ako mislim, postojim. „MISLIM, DAKLE JESAM."

Na toj jednoj sigurnoj tački pokušao je da sagradi sve ostalo, razumom. Verovao je i u UROĐENE IDEJE: neke pojmove (broj, beskonačno, Bog) nismo dobili iz iskustva, nego ih nosimo sa sobom.`,
pr:{p:'U šta Dekart NE može da posumnja?', o:['Da su čula pouzdana','Da sumnja — dakle da misli i postoji','Da je matematika tačna'], t:1, z:'Sama sumnja dokazuje mišljenje, a mišljenje postojanje: „mislim, dakle jesam".'}},
{n:'Lok i Hjum: prazna tabla', t:`Lok (Engleska, 17. vek): urođenih ideja nema. Um deteta je TABULA RASA — prazna tabla. Sve upisuje iskustvo.

Hjum (Škotska, 18. vek) je empirizam doveo do kraja, i tu je postalo neprijatno:
• UZROČNOST: nikad ne vidimo da jedna stvar „izaziva" drugu. Vidimo samo da jedna stalno ide posle druge. Uzrok je navika uma.
• PROBLEM INDUKCIJE: to što je sunce izlazilo do sad ne dokazuje da će sutra. Svako takvo zaključivanje pretpostavlja da će budućnost ličiti na prošlost — a to se ne može dokazati bez kruga.

Ako je samo iskustvo izvor, onda je i nauka zasnovana na navici, ne na dokazu.`,
pr:{p:'Šta je, po Hjumu, uzrok?', o:['Nešto što jasno vidimo u svetu','Navika uma — vidimo samo da jedno ide posle drugog','Božja volja'], t:1, z:'Ne opažamo „izazivanje", samo redosled. Pojam uzroka je navika koju um stvori.'}},
{n:'Kant: naočare uma', t:`Kant (Nemačka, 18. vek) je rekao da ga je Hjum „probudio iz dogmatskog dremeža". Njegovo rešenje je spoj:

Sve znanje POČINJE sa iskustvom, ali ne POTIČE sve iz iskustva. Um nije prazna tabla, nego više kao NAOČARE: iskustvo stiže, a um ga sam slaže u prostor, vreme i uzrok. Zato su ti oblici sigurni — nisu u svetu, nego u načinu na koji ga gledamo.

„Misli bez sadržaja su prazne, opažaji bez pojmova su slepi."

Cena: svet „po sebi", kakav je bez naših naočara, ne možemo da znamo. Znamo samo svet kakav nam se pojavljuje.`,
pr:{p:'Šta je Kantovo rešenje?', o:['Pobedio je racionalizam','Znanje počinje iskustvom, ali ga um uobličava svojim „naočarima"','Ništa se ne može znati'], t:1, z:'Iskustvo daje sadržaj, um daje oblik (prostor, vreme, uzrok) — jedno bez drugog ne ide.'}},
{n:'Šta je ostalo danas', t:`Danas većina misli da su obe strane delimično u pravu:

• Nauka je spoj: hipoteza (razum) + eksperiment (iskustvo).
• Psihologija i biologija su pokazale da dete NIJE prazna tabla — ima urođene sklonosti, recimo za jezik. Ali sadržaj dolazi iz iskustva.
• Hjumov problem indukcije nije rešen. Samo smo naučili da živimo s njim.

Jedna slika: racionalista veruje glavi, empirista očima, a Kant kaže da oči bez glave ne vide, a glava bez očiju nema šta da gleda.`,
pr:{p:'Kako radi nauka, po današnjem shvatanju?', o:['Samo razumom','Samo iskustvom','Spojem hipoteze (razum) i eksperimenta (iskustvo)'], t:2, z:'Razum predloži, iskustvo proveri — zato su obe strane delimično bile u pravu.'}}
],
kljucno:['Racionalizam: znanje iz razuma (Dekart); empirizam: znanje iz iskustva (Lok, Hjum).','Dekart: „mislim, dakle jesam" — jedina sigurna tačka posle sumnje u sve.','Hjum: uzrok je navika uma; problem indukcije nije rešen.','Kant: iskustvo daje sadržaj, um daje oblik — naočare kroz koje gledamo.'],
kartice:[
{p:'Racionalizam vs. empirizam — u jednoj rečenici?', o:'Racionalizam: znanje iz razuma. Empirizam: znanje iz iskustva.'},
{p:'Zašto Dekart ne može da posumnja da postoji?', o:'Jer sama sumnja je mišljenje, a ko misli — postoji.'},
{p:'Šta je problem indukcije?', o:'Iz toga što se nešto uvek dešavalo ne sledi sigurno da će se desiti opet.'},
{p:'Šta je tabula rasa?', o:'Lokova ideja da je um deteta prazna tabla koju ispisuje iskustvo.'},
{p:'Kantova rečenica o mislima i opažajima?', o:'„Misli bez sadržaja su prazne, opažaji bez pojmova su slepi."'}
],
razgovor:['Hjum kaže da je uzrok samo navika uma. Slažeš li se? Daj primer iz života za ili protiv.','Šta u tvom pisanju dolazi iz iskustva, a šta iz glave?']},

{id:'7-5', naslov:'Etika — tri pristupa',
kuka:{p:'Prijatelj te pita da li mu je priča dobra. Nije. Šta je ispravno?', o:['Reći istinu, uvek','Reći ono što će mu najviše pomoći','Zavisi od toga kakav prijatelj želiš da budeš'], t:2},
delovi:[
{n:'Tri pitanja', t:`Kad procenjuješ da li je nešto ispravno, možeš da gledaš na tri mesta:

1. KAKAV si čovek kad to uradiš? → ETIKA VRLINE
2. Šta će iz toga PROIZAĆI? → KONSEKVENCIJALIZAM (etika posledica)
3. Da li je to tvoja DUŽNOST, po pravilu koje važi za sve? → DEONTOLOGIJA (etika dužnosti)

Nijedan nije „tačan". To su tri sočiva. Većina ljudi koristi sva tri, samo ne zna kad koje. (I pitanje sa početka je imalo smisla na sva tri načina.)`,
pr:{p:'Koji pristup pita „šta će iz toga proizaći"?', o:['Etika vrline','Konsekvencijalizam','Deontologija'], t:1, z:'Konsekvencijalizam sudi po posledicama; etika vrline po karakteru; deontologija po dužnosti.'}},
{n:'Vrlina — Aristotel', t:`Aristotel ne pita „šta da uradim", nego „kakav da budem". Cilj života je EUDAIMONIJA — ne sreća kao osećaj, nego dobro proživljen život, procvat.

Do nje se stiže VRLINAMA: hrabrost, umerenost, pravednost, velikodušnost, prijateljstvo. Svaka vrlina je SREDINA između dve krajnosti:
• hrabrost je između kukavičluka i ludosti;
• velikodušnost između škrtosti i rasipništva.

Vrlina se ne uči iz knjige nego VEŽBOM, kao zanat: postaješ pravedan radeći pravedne stvari. Zato kod Aristotela nema pravila za sve; dobar čovek u datoj situaciji vidi šta treba. To mu je i mana: šta ako ne vidi?`,
pr:{p:'Šta je hrabrost po Aristotelu?', o:['Odsustvo straha','Sredina između kukavičluka i ludosti','Spremnost da se pogine'], t:1, z:'Svaka vrlina je sredina između dve krajnosti — hrabrost između kukavičluka i ludosti.'}},
{n:'Posledice — Bentam i Mil', t:`Bentam i Mil (Engleska, 18–19. vek): ispravno je ono što donosi NAJVIŠE DOBRA ZA NAJVEĆI BROJ ljudi. To se zove UTILITARIZAM.

Namera nije bitna, bitan je ishod. Laž je loša samo ako napravi više štete nego koristi.

Snaga: jasno je, praktično, i svi se računaju jednako.

Slabost, klasičan primer: hirurg ima pet pacijenata kojima treba organ i jednog zdravog čoveka u čekaonici. Po čistom računu, jedan za pet je dobra razmena. Svima je jasno da nije u redu. Znači da sam ishod nije sve.`,
pr:{p:'Šta je slaba tačka utilitarizma u primeru sa hirurgom?', o:['Ne računa sa brojem spasenih','Po čistom računu opravdava nešto što svi osećamo kao zlo','Previše gleda na nameru'], t:1, z:'Račun „jedan za pet" izlazi dobro, a ipak je jasno da nije u redu — ishod nije sve.'}},
{n:'Dužnost — Kant', t:`Kant: postupak je ispravan ako je učinjen IZ DUŽNOSTI, po pravilu koje bi moglo da važi za svakog. Posledice ne odlučuju.

KATEGORIČKI IMPERATIV, dve verzije:
1. Radi samo po pravilu za koje bi mogao hteti da postane opšti zakon. (Ako bi svi lagali kad im odgovara, reči bi izgubile vrednost — dakle ne laži.)
2. Postupaj sa čovekom uvek i kao sa CILJEM, nikad samo kao sa SREDSTVOM. (Zato hirurg ne sme: zdrav čovek bi bio samo sredstvo.)

Snaga: ljudsko dostojanstvo je neprikosnoveno.
Slabost: Kant je tvrdio da ne smeš slagati ni ubicu koji pita gde ti se krije prijatelj. Pravilo bez izuzetka ume da bude okrutno.`,
pr:{p:'Zašto hirurg po Kantu ne sme da uzme organe zdravom čoveku?', o:['Jer bi posledice bile loše','Jer bi čoveka koristio samo kao sredstvo','Jer to zakon zabranjuje'], t:1, z:'Druga verzija kategoričkog imperativa: čovek je uvek i cilj, nikad samo sredstvo.'}},
{n:'Jedna dilema, tri odgovora', t:`Vratimo se na pitanje sa početka: prijatelj pita da li mu je priča dobra. Nije.

• VRLINA: šta bi uradio iskren i dobar prijatelj? Istinu, ali sa merom i u pravom trenutku — sredina između surovosti i ulizivanja.
• POSLEDICE: šta donosi više dobra? Ako ga istina popravi kao pisca — reci. Ako će samo da odustane — možda ne sad.
• DUŽNOST: laž je laž. Ne smeš je koristiti ni da ga zaštitiš, jer ga onda tretiraš kao dete, a ne kao čoveka koji zaslužuje istinu.

Ovde sva tri vode ka istini, ali drugim putem. U drugim slučajevima se razilaze. Kad se slože — verovatno si u pravu. Kad se raziđu — tu je prava dilema.`,
pr:{p:'Kada su tri pristupa najkorisnija zajedno?', o:['Nikad, treba izabrati jedan','Kad se slože, verovatno si u pravu; kad se raziđu, vidiš pravu dilemu','Samo u medicini'], t:1, z:'Tri sočiva na istu situaciju: slaganje daje sigurnost, razilaženje pokazuje gde je teško.'}}
],
kljucno:['Tri pristupa: vrlina (kakav si), posledice (šta proizlazi), dužnost (pravilo za sve).','Aristotel: vrlina je sredina između krajnosti i uči se vežbom; cilj je eudaimonija.','Utilitarizam: najviše dobra za najviše ljudi — slab kad račun opravda zlo.','Kant: radi po pravilu koje bi važilo za sve; čovek nikad samo sredstvo.'],
kartice:[
{p:'Tri pristupa u etici?', o:'Etika vrline, konsekvencijalizam (posledice), deontologija (dužnost).'},
{p:'Šta je eudaimonija?', o:'Aristotelov cilj života — dobro proživljen život, procvat, ne samo osećaj sreće.'},
{p:'Šta je utilitarizam?', o:'Ispravno je ono što donosi najviše dobra najvećem broju ljudi.'},
{p:'Dve verzije Kantovog kategoričkog imperativa?', o:'Radi po pravilu koje bi moglo biti opšti zakon; čovek je uvek i cilj, nikad samo sredstvo.'},
{p:'Koja je slaba tačka Kantove etike?', o:'Pravilo bez izuzetka ume da bude okrutno (ne laži ni ubicu).'}
],
razgovor:['Uzmi jednu stvarnu odluku iz svog života. Koji od tri pristupa si tada koristio, i da li bi danas drugačije?','Koji ti je pristup najbliži, a koji ti najviše smeta? Zašto?']}
]},

{id:'8', naziv:'Novac i ekonomija', ikona:'💶', era:'danas', lekcije:[
{id:'8-1', naslov:'Oskudnost, izbor, cena — ponuda i potražnja',
kuka:{p:'Ako država zabrani da hleb košta više od 20 dinara, a pekarima je skuplje da ga proizvedu — šta će se najverovatnije desiti?', o:['Hleb će biti jeftin i svega će biti dosta','Hleba će nestati iz prodavnica ili će se prodavati „ispod pulta"','Ništa se neće promeniti'], t:1},
delovi:[
{n:'Oskudnost — zašto ekonomija uopšte postoji', t:`Ekonomija ne počinje od novca, nego od jedne činjenice: želja ima više nego stvari, vremena i snage. To je OSKUDNOST.

Zato stalno BIRAMO. A svaki izbor nešto košta, i kad ne plaćaš parama. OPORTUNITETNI TROŠAK je ono najbolje čega se odrekneš kad nešto izabereš. Slobodno veče posle smene: ako ga provedeš pišući, cena nije nula — cena je san, ili društvo, ili serija koju nisi gledao.

Ekonomija je zato, najkraće, nauka o tome kako ljudi i društva biraju kad ne mogu sve. Deli se na:
• MIKROEKONOMIJU — pojedinac, domaćinstvo, firma, jedno tržište (cena hleba, tvoja plata);
• MAKROEKONOMIJU — cela država i svet (inflacija, nezaposlenost, rast, kamate).`,
pr:{p:'Šta je oportunitetni trošak?', o:['Cena na etiketi','Ono najbolje čega se odrekneš kad nešto izabereš','Porez na izbor'], t:1, z:'Svaki izbor ima cenu u propuštenoj drugoj mogućnosti — i kad ne plaćaš novcem.'}},
{n:'Podela rada i trgovina', t:`Adam Smit je 1776. u knjizi „Bogatstvo naroda" opisao fabriku čioda: jedan radnik sam napravi možda dvadesetak čioda dnevno, a deset radnika, kad podele posao na korake (jedan seče žicu, drugi oštri…), napravi desetine hiljada.

To je PODELA RADA: kad se svako specijalizuje za ono što radi najbolje i onda razmenjujemo, svi imamo više. Ti ne praviš sam svoje cipele, telefon i hleb — a imaš sve troje.

Smit je dodao još jednu čuvenu misao — „NEVIDLJIVU RUKU": pekar ne peče hleb iz dobrote, nego da bi zaradio; ali tražeći svoju korist, nahrani grad. Tržište ponekad usklađuje sebične interese u zajedničku korist, a da to niko ne planira.

Važno: Smit NIJE tvrdio da je tržište uvek dobro. Upozoravao je na trgovce koji se dogovaraju da podignu cene i smatrao da država mora da obezbedi pravdu, odbranu i javne radove.`,
pr:{p:'Šta je Smit hteo da pokaže primerom fabrike čioda?', o:['Da su fabrike loše','Da podela rada višestruko povećava proizvodnju','Da su čiode skupe'], t:1, z:'Specijalizacija i razmena — deset radnika sa podeljenim poslom napravi hiljade puta više.'}},
{n:'Ponuda i potražnja', t:`Kako se formira CENA? Dve sile:

• POTRAŽNJA — koliko kupci žele da kupe. Što je nešto jeftinije, kupuje se više.
• PONUDA — koliko prodavci žele da prodaju. Što je cena viša, više se isplati proizvoditi, pa se nudi više.

Gde se te dve sile sretnu, tu je RAVNOTEŽNA CENA: koliko ljudi hoće da kupi po toj ceni, toliko se i nudi.

Kad se nešto pomeri, cena reaguje:
• loša godina za maline (manja ponuda) → maline poskupe;
• svi odjednom hoće klima-uređaj u toplotnom talasu (veća potražnja) → poskupe i majstori;
• nova fabrika ponudi više → cena padne.

Cena je, tako gledano, PORUKA: visoka cena kaže „ovoga fali — štedi ga i proizvodi više", niska kaže „ovoga ima dosta".`,
pr:{p:'Šta se obično desi sa cenom kad ponuda opadne, a potražnja ostane ista?', o:['Cena padne','Cena poraste','Cena ostane ista'], t:1, z:'Manje robe za istu želju kupaca — cena raste dok se ponuda i potražnja ne izjednače.'}},
{n:'Kad se cena „zakuca"', t:`Šta ako država propiše najvišu cenu, ispod ravnotežne? Kupci hoće više (jeftino je), a proizvođači nude manje (ne isplati se). Rezultat: NESTAŠICA — redovi, prazne police, prodaja „ispod pulta" i crno tržište. To se viđalo mnogo puta u istoriji, i kod nas u krizama (ulje, šećer, brašno).

I obrnuto: propisana najniža cena iznad ravnotežne pravi VIŠAK. Klasičan primer su otkupne cene poljoprivrednih proizvoda.

Da li to znači da država nikad ne treba da ograniči cene? Ne nužno — u ratu, u krizi, za lekove, oko toga postoji prava rasprava. Ali ekonomisti se uglavnom slažu da ograničenje cene NE PRAVI ROBU: ako je nema dovoljno, ograničenje samo menja ko je dobija (ko pre stigne, ko ima vezu).

Takođe važno: ne reaguje svaka roba isto. Kad poskupi hleb ili struja, ljudi kupuju skoro isto — moraju. Kad poskupi skupi sat, kupuje se mnogo manje. To se zove ELASTIČNOST.`,
pr:{p:'Šta obično donosi najviša propisana cena ispod ravnotežne?', o:['Više robe','Nestašicu — redove i crno tržište','Pad potražnje'], t:1, z:'Kupci hoće više, proizvođači nude manje — robe fali.'}},
{n:'Podsticaji — i šta dalje', t:`Ako iz ekonomije poneseš samo jednu misao, neka bude ova: LJUDI REAGUJU NA PODSTICAJE. Promeni nagradu ili kaznu — promeniće se i ponašanje, ponekad na neočekivan način.

Poznata (možda ulepšana) priča iz kolonijalne Indije: vlast je plaćala nagradu za svaku ubijenu kobru, da bi ih bilo manje. Ljudi su počeli da gaje kobre radi nagrade. Kad je vlast to shvatila i ukinula nagradu, gajene kobre su puštene — i kobri je bilo više nego pre. To se zove EFEKAT KOBRE.

Kostur lekcije: oskudnost → izbor i oportunitetni trošak → podela rada i razmena → cena iz ponude i potražnje → zakucana cena pravi nestašicu → ljudi reaguju na podsticaje.

Sledeće: novac — šta je on uopšte, odakle dolazi i zašto gubi vrednost.`,
pr:{p:'Šta je „efekat kobre"?', o:['Opasnost od zmija','Mera koja proizvede suprotan efekat jer ljudi reaguju na podsticaj na neočekivan način','Nagla promena cena'], t:1, z:'Nagrada za ubijene kobre navela je ljude da ih gaje — kobri je na kraju bilo više.'}}
],
kljucno:['Oskudnost tera na izbor; svaki izbor ima oportunitetni trošak — ono najbolje čega se odrekneš.','Podela rada i razmena (Smit, 1776) višestruko povećavaju proizvodnju; „nevidljiva ruka" — ali Smit nije tvrdio da je tržište uvek dobro.','Cena nastaje gde se sretnu ponuda i potražnja; cena je poruka o tome čega fali.','Najviša propisana cena ispod ravnotežne pravi nestašicu; ograničenje ne pravi robu.','Ljudi reaguju na podsticaje — ponekad suprotno nameri (efekat kobre).'],
kartice:[
{p:'Šta je oportunitetni trošak?', o:'Ono najbolje čega se odrekneš kad nešto izabereš.'},
{p:'Ko je napisao „Bogatstvo naroda" i kada?', o:'Adam Smit, 1776.'},
{p:'Šta je ravnotežna cena?', o:'Cena po kojoj je količina koju kupci žele jednaka količini koja se nudi.'},
{p:'Šta pravi propisana cena ispod ravnotežne?', o:'Nestašicu.'},
{p:'Šta je elastičnost potražnje?', o:'Koliko se kupovina menja kad se promeni cena — kod neophodnih stvari malo, kod luksuza mnogo.'}
],
razgovor:['Koji je najveći oportunitetni trošak u tvom životu sada — čega se odričeš da bi imao nešto drugo?','Smeni ili poslu: koji podsticaj tamo pravi suprotno od onoga što je šef hteo?']},
{id:'8-2', naslov:'Novac, banke, inflacija',
kuka:{p:'Koliko je, otprilike, bila mesečna inflacija u SR Jugoslaviji u januaru 1994?', o:['Oko 50%','Oko 1.000%','Više od 300 miliona odsto'], t:2},
delovi:[
{n:'Šta je novac', t:`Bez novca trgovina je RAZMENA (trampa): imaš jaja, treba ti obuća. Problem — obućar mora baš tada da želi baš jaja. Novac rešava taj problem: svi ga primaju jer znaju da ga i drugi primaju.

Novac ima tri posla:
1. SREDSTVO RAZMENE — plaćaš njim;
2. MERA VREDNOSTI — sve ima cenu u istim jedinicama, pa možeš da porediš;
3. ČUVANJE VREDNOSTI — možeš da ga sačuvaš za sutra (dobro, ako nema inflacije).

Kroz istoriju novac je bio svašta: školjke, so, stoka, zrnevlje, pa metal. Prvi kovani novac pojavljuje se u LIDIJI (današnja Turska) oko 600. p. n. e. Papirni novac prvi su masovno koristili Kinezi, oko 11. veka.

Najvažnije: vrednost novca je u POVERENJU. Papirna novčanica sama po sebi ne vredi ništa; vredi jer svi veruju da će je drugi primiti.`,
pr:{p:'Na čemu, na kraju, počiva vrednost papirnog novca?', o:['Na zlatu u trezoru','Na poverenju da će ga svi primati','Na kvalitetu papira'], t:1, z:'Danas novac nije vezan za zlato; vredi dok ljudi veruju da će ga drugi prihvatiti.'}},
{n:'Od zlata do „fijat" novca', t:`Dugo je novac bio vezan za ZLATO: država je obećavala da možeš novčanicu da zameniš za određenu količinu zlata (ZLATNI STANDARD). To je držalo novac stabilnim, ali i krutim — u krizi država nije mogla da štampa više.

SAD su 1971. prekinule vezu dolara i zlata; od tada skoro sav novac na svetu je „FIJAT" novac — vredi zato što ga država propisuje kao zakonsko sredstvo plaćanja i zato što mu ljudi veruju.

Danas je najveći deo novca — samo BROJ na računu. U većini zemalja gotovina je mali deo ukupnog novca; ostalo su depoziti u bankama.

A kriptovalute (bitkoin, 2009)? Pokušaj da se napravi novac bez države i banaka. Za sada služe više kao špekulativna imovina nego kao novac za svakodnevno plaćanje — vrednost im previše skače da bi bile dobra „mera vrednosti". Oko njihove budućnosti mišljenja su podeljena.`,
pr:{p:'Šta se promenilo 1971?', o:['Uveden je evro','SAD su prekinule vezu dolara i zlata','Izmišljen je bitkoin'], t:1, z:'Kraj zlatnog standarda: od tada je novac „fijat" — vredi zbog zakona i poverenja.'}},
{n:'Banke i centralna banka', t:`Šta banka radi? Uzima depozite i daje KREDITE. Na kredit naplaćuje veću kamatu nego što plaća na štednju — razlika je njena zarada.

Iznenađenje za mnoge: kad banka da kredit, ona ne uzima tuđ novac iz sefa — ona većinom NAPRAVI nov novac, upisom na tvoj račun. (Tako to objašnjava i Engleska centralna banka.) Zato krediti povećavaju količinu novca, a otplata je smanjuje.

Da banke ne bi preterale, postoji CENTRALNA BANKA (kod nas Narodna banka Srbije, u evrozoni ECB, u SAD „Fed"). Ona:
• određuje osnovnu (REFERENTNU) KAMATU — kad je podigne, krediti poskupe, troši se manje, inflacija se smiruje; kad je spusti, obrnuto;
• nadzire banke;
• čuva vrednost novca.

Kamatu na tvoj kredit, dakle, delom određuje odluka centralne banke. Zato se vest „NBS podigla referentnu kamatnu stopu" vidi na rati.`,
pr:{p:'Šta obično radi centralna banka kad hoće da smiri inflaciju?', o:['Spusti kamatu','Podigne referentnu kamatu, pa krediti poskupe i troši se manje','Odštampa više novca'], t:1, z:'Viša kamata hladi potrošnju i kredite — cene sporije rastu.'}},
{n:'Inflacija', t:`INFLACIJA je opšti rast cena — isti novac kupuje sve manje.

Glavni uzroci:
• previše novca juri premalo robe (država štampa da pokrije troškove, krediti bujaju);
• poskupe troškovi proizvodnje (nafta, gas, hrana posle loše godine);
• očekivanja — ako svi očekuju poskupljenje, traže veće plate i dižu cene unapred, pa se to ostvari.

Ko gubi: ŠTEDIŠE i ljudi sa fiksnim primanjima (penzije, plate koje kasne za cenama). Ko dobija: DUŽNICI — dug se „istopi" (zato je inflacija nekad zgodna i prezaduženim državama).

Zato centralne banke ciljaju malu, stabilnu inflaciju — u razvijenim zemljama oko 2%, NBS oko 3%, uz dozvoljeno odstupanje. Ni pad cena (deflacija) nije dobar: ljudi odlažu kupovinu jer će biti jeftinije, pa privreda staje.`,
pr:{p:'Ko najviše gubi od inflacije?', o:['Dužnici','Štediše i ljudi sa fiksnim primanjima','Država'], t:1, z:'Ušteđevina i fiksna primanja kupuju sve manje, dok se dužnicima dug realno smanjuje.'}},
{n:'Hiperinflacija — naša lekcija', t:`Kad inflacija pobegne potpuno, to je HIPERINFLACIJA (dogovorno: preko 50% mesečno). Primeri: Nemačka 1923 (ljudi su nosili novac kolicima), Mađarska 1946 (najgora u istoriji), Zimbabve 2008.

I SR JUGOSLAVIJA 1992–1994 — jedna od najgorih ikada. Uz rat, sankcije i raspad zemlje, država je štampala novac da pokrije troškove. U januaru 1994. mesečna inflacija je bila oko 313 MILIONA procenata; cene su se udvostručavale svakih par sati. Štampane su novčanice od 500 milijardi dinara. Plata je trošena istog dana, a račun se računao u nemačkim markama. Hiperinflaciju je zaustavio program „Avramovića" u januaru 1994: novi dinar vezan za marku.

Lekcija koju svaki ekonomista pamti: kad država pokušava da štampanjem novca plati ono za šta nema — novac propada, a sa njim i ušteđevina ljudi.

Sledeće: država i tržište — šta ko treba da radi, i kuda idu porezi.`,
pr:{p:'Šta je glavni uzrok hiperinflacije u SRJ 1993–94?', o:['Pad cene nafte','Masovno štampanje novca da se pokriju državni troškovi, uz rat i sankcije','Previše štednje'], t:1, z:'Kad država štampa novac umesto da ima prihode, novac gubi vrednost iz sata u sat.'}}
],
kljucno:['Novac rešava problem trampe; služi za razmenu, merenje i čuvanje vrednosti; počiva na poverenju.','Zlatni standard do 1971; danas „fijat" novac, uglavnom broj na računu; kripto — više špekulacija nego novac (sporno).','Banke kreditima većinom stvaraju nov novac; centralna banka (NBS) referentnom kamatom kontroliše kredite i inflaciju.','Inflacija: previše novca, skuplji troškovi, očekivanja; gube štediše, dobijaju dužnici; cilj oko 2–3%.','Hiperinflacija u SRJ (januar 1994, ~313 miliona % mesečno) — štampanje novca bez pokrića uništava ušteđevinu.'],
kartice:[
{p:'Koja su tri posla novca?', o:'Sredstvo razmene, mera vrednosti, čuvanje vrednosti.'},
{p:'Gde i kada se pojavio prvi kovani novac?', o:'U Lidiji (današnja Turska), oko 600. p. n. e.'},
{p:'Šta radi centralna banka kad podigne referentnu kamatu?', o:'Poskupljuje kredite, smanjuje potrošnju i smiruje inflaciju.'},
{p:'Ko dobija, a ko gubi od inflacije?', o:'Dobijaju dužnici, gube štediše i ljudi sa fiksnim primanjima.'},
{p:'Kolika je bila mesečna inflacija u SRJ u januaru 1994?', o:'Oko 313 miliona procenata.'}
],
razgovor:['Šta pamtiš (ili pamte tvoji) iz 1993? Kako hiperinflacija menja to kako ljudi posle gledaju na novac i na državu?','Da li ti je bitnije da novac čuvaš ili da ga potrošiš na ono što ti sada znači? Zašto?']},
{id:'8-3', naslov:'Tržište i država — porezi i javni dug',
kuka:{p:'Šta je najveći pojedinačni izvor prihoda budžeta Srbije?', o:['Akcize na gorivo','PDV — porez na potrošnju','Porez na imovinu'], t:1},
delovi:[
{n:'Gde tržište ne radi', t:`Tržište dobro radi kad kupac i prodavac sami snose posledice svoje razmene. Ali postoje situacije u kojima to ne važi — ekonomisti ih zovu TRŽIŠNI NEUSPESI:

• EKSTERNALIJE — trošak (ili korist) pada na nekog trećeg. Fabrika zagađuje vazduh, a kašlje ceo grad; cena njenog proizvoda to ne uključuje.
• JAVNA DOBRA — od njih se niko ne može isključiti, pa niko neće dobrovoljno da plati: vojska, svetionik, ulična rasveta, čist vazduh.
• MONOPOL — samo jedan prodavac, može da diže cenu po volji.
• NEJEDNAKO ZNANJE — prodavac polovnog auta zna više od tebe; lekar zna više od pacijenta.

Na ovim mestima uglavnom postoji saglasnost da država ima posla. Rasprava je oko toga KOLIKO i KAKO.`,
pr:{p:'Šta je eksternalija?', o:['Spoljna trgovina','Trošak ili korist koja pada na nekog ko nije učestvovao u razmeni','Strani investitor'], t:1, z:'Zagađenje je klasičan primer — plaća ga komšiluk, ne kupac i prodavac.'}},
{n:'Šta radi država', t:`Moderna država u ekonomiji radi nekoliko stvari:
1. pravila igre — zakoni, ugovori, sudovi, zaštita imovine;
2. javna dobra — odbrana, policija, putevi;
3. ispravlja tržišne neuspehe — propisi o zagađenju, zaštita potrošača, kontrola monopola;
4. PRERASPODELA — penzije, socijalna pomoć, besplatno školstvo i zdravstvo;
5. stabilizacija — u krizi troši više da ublaži pad.

Oko ovoga se političke strane najviše spore. Jedni kažu: država je spora, skupa i podložna korupciji — neka radi samo najnužnije, ljudi bolje znaju šta će sa svojim novcem. Drugi: bez jake države tržište proizvodi velike nejednakosti i nesigurnost — zdravlje i školovanje ne smeju zavisiti od debljine novčanika. Većina zemalja je negde između, i to „negde" se stalno pomera.`,
pr:{p:'Oko čega se političke strane u ekonomiji najviše spore?', o:['Da li država treba da postoji','Koliko i kako država treba da se meša i preraspodeljuje','Da li treba novac'], t:1, z:'Skoro svi prihvataju pravila i javna dobra; spor je oko obima države i preraspodele.'}},
{n:'Porezi', t:`Država se uglavnom finansira porezima. Glavne vrste:
• porez na DOHODAK (platu) i DOPRINOSI (za penziju i zdravstvo) — kod nas se odbijaju od bruto plate pre nego što je dobiješ;
• porez na POTROŠNJU — kod nas PDV (opšta stopa 20%, za osnovne namirnice i neke druge stvari 10%) i AKCIZE (gorivo, cigarete, alkohol);
• porez na DOBIT firmi;
• porez na IMOVINU (stan, kuća).

Dve ideje oko kojih se spori:
• PROGRESIVAN porez — ko više zarađuje, plaća veći procenat (pravednije, kažu jedni; kažnjava trud, kažu drugi);
• PROPORCIONALAN (ravan) — svi isti procenat.

Porez na potrošnju je lakše naplatiti, ali relativno više pogađa siromašnije — oni troše skoro sve što zarade.`,
pr:{p:'Šta je progresivan porez?', o:['Svi plaćaju isti iznos','Ko više zarađuje, plaća veći procenat','Porez koji raste svake godine'], t:1, z:'Stopa raste sa dohotkom; kod ravnog poreza procenat je isti za sve.'}},
{n:'Budžet i javni dug', t:`BUDŽET države je kao kućni, samo veći: prihodi (porezi) i rashodi (plate, penzije, putevi, kamate). Kad su rashodi veći od prihoda — DEFICIT, i država se ZADUŽUJE (prodaje obveznice). Zbir svih tih dugova je JAVNI DUG.

Javni dug se meri u odnosu na BDP (koliko zemlja proizvede za godinu). Japan ima dug preko dvostrukog BDP-a i nije u krizi; Grčka je 2010. sa manjim dugom upala u veliku krizu jer su joj poverioci prestali da veruju. Pouka: nije bitan samo broj, nego POVERENJE i da li privreda raste brže od kamate.

Zašto se država uopšte zadužuje? Da gradi nešto što traje (put, bolnica — plaćaju i oni koji će ih koristiti) i da u krizi ne mora naglo da seče plate i penzije. Problem nastaje kad se zadužuje da bi pokrila tekuću potrošnju godinama — kao domaćinstvo koje kreditom plaća struju.

Kućni budžet i državni se razlikuju u jednom: država može sama da utiče na svoje prihode (porezima) i — u svojoj valuti — da štampa novac. Što je, videli smo 1993, opasan izlaz.`,
pr:{p:'Zašto Japan sa dugom preko 200% BDP-a nije u krizi, a Grčka je bila sa manjim?', o:['Japan ne plaća kamate','Bitni su poverenje poverilaca i to da li privreda raste brže od kamate, ne samo broj','Grčka nije imala dug'], t:1, z:'Japan se zadužuje uglavnom kod svojih građana u svojoj valuti; Grčka je izgubila poverenje stranih poverilaca.'}},
{n:'Dva velika pogleda', t:`U 20. veku ekonomija se oko države podelila na dva velika tabora — i ta rasprava traje:

• DŽON MEJNARD KEJNZ (posle Velike depresije 1930-ih): u krizi ljudi i firme prestanu da troše, pa kriza hrani samu sebe. Tada država treba da troši više (i zaduži se), da „upali motor". U dobrim godinama — da vrati dug.
• FRIDRIH HAJEK i MILTON FRIDMAN: država ne zna dovoljno da upravlja privredom; njeno mešanje često pravi veće probleme (inflaciju, rasipanje, zavisnost). Bolje stabilna pravila, stabilan novac i slobodno tržište.

U praksi se obe ideje koriste: 2008. i 2020. skoro sve države su u krizi trošile kejnzijanski, a protiv inflacije 1980-ih i 2022. centralne banke su delovale kako bi Fridman preporučio.

Sledeće: zašto neke zemlje rastu, zašto dolaze krize i šta je sa nejednakošću.`,
pr:{p:'Šta je, po Kejnzu, uloga države u krizi?', o:['Da štedi i čeka','Da troši više i tako pokrene privredu','Da zabrani uvoz'], t:1, z:'Kad svi prestanu da troše, država treba da uskoči potrošnjom; u dobrim godinama da vrati dug.'}}
],
kljucno:['Tržišni neuspesi: eksternalije, javna dobra, monopol, nejednako znanje — tu država ima posla; spor je oko obima.','Država: pravila, javna dobra, ispravke tržišta, preraspodela, stabilizacija.','Porezi: dohodak i doprinosi, PDV (20%/10%) i akcize, dobit, imovina; progresivan vs ravan.','Deficit → zaduživanje → javni dug (u % BDP-a); bitni su poverenje i rast, ne samo broj.','Kejnz (država troši u krizi) protiv Hajeka i Fridmana (stabilna pravila, manje mešanja) — u praksi se koriste oba.'],
kartice:[
{p:'Šta je javno dobro?', o:'Dobro od kog se niko ne može isključiti, pa ga tržište slabo obezbeđuje (odbrana, rasveta).'},
{p:'Kolika je opšta stopa PDV-a u Srbiji?', o:'20% (posebna 10%).'},
{p:'Šta je budžetski deficit?', o:'Kada su rashodi države veći od prihoda u godini.'},
{p:'U odnosu na šta se meri javni dug?', o:'U odnosu na BDP — koliko zemlja proizvede za godinu.'},
{p:'Šta je Kejnz preporučivao u krizi?', o:'Da država troši više i pokrene privredu.'}
],
razgovor:['Gde bi ti povukao granicu: šta država MORA da obezbedi svakom, a šta je stvar svakog pojedinca?','Da li bi radije plaćao veći porez za bolje zdravstvo i školstvo, ili manji pa sam biraš? Zašto?']},
{id:'8-4', naslov:'Rast, krize, nejednakost',
kuka:{p:'Koliki je deo čovečanstva živeo u krajnjem siromaštvu 1990, a koliki pred 2020?', o:['Isto, oko 10%','Oko 38% → oko 9%','Oko 9% → oko 38%'], t:1},
delovi:[
{n:'Šta je BDP', t:`BRUTO DOMAĆI PROIZVOD (BDP) je vrednost svega što se u zemlji proizvede za godinu (robe i usluge). Kad se podeli sa brojem stanovnika — BDP PO STANOVNIKU, gruba mera koliko je zemlja bogata.

BDP je koristan, ali ima rupe:
• ne meri RASPODELU — prosek može da raste dok većina stoji;
• ne meri neplaćen rad (domaćinstvo, briga o deci i roditeljima);
• ne meri štetu (zagađenje) — popravka posle poplave čak POVEĆA BDP;
• ne meri slobodno vreme, zdravlje, sreću.

Zato se uz BDP gledaju i drugi pokazatelji: očekivani životni vek, obrazovanje, nejednakost, zadovoljstvo životom.

Kad se porede zemlje, BDP se često preračunava po PARITETU KUPOVNE MOĆI — jer 100 evra u Srbiji kupi više nego u Švajcarskoj.`,
pr:{p:'Šta BDP NE meri?', o:['Vrednost proizvedenih usluga','Raspodelu, neplaćen rad i štetu po okolinu','Vrednost proizvedene robe'], t:1, z:'BDP sabira tržišnu proizvodnju; ne kaže ko je dobio i po koju cenu.'}},
{n:'Zašto neke zemlje rastu', t:`Pre 1800. skoro svi ljudi na svetu bili su siromašni. Danas je razlika između najbogatijih i najsiromašnijih zemalja i do pedeset puta. Zašto?

Rast dolazi iz:
• KAPITALA — mašine, putevi, fabrike;
• RADA i znanja — obrazovani, zdravi ljudi;
• TEHNOLOGIJE — novi način da se sa istim uradi više (to je na dugi rok najvažnije);
• INSTITUCIJA — da li ugovor važi, da li sud radi, da li će ti neko oteti ono što si stekao, koliko je korupcije. Mnogi ekonomisti (npr. Adžemoglu i Robinson, „Zašto nacije propadaju", Nobelova nagrada 2024) misle da je ovo ključno.

I jedno matematičko pravilo: SLOŽENI RAST. Zemlja koja raste 2% godišnje udvostruči BDP za oko 35 godina; koja raste 7% — za oko 10. (PRAVILO 70: podeli 70 sa stopom rasta.) Zato Kina i Južna Koreja za dve-tri generacije pređu put koji je Evropa prelazila vekovima.`,
pr:{p:'Za koliko godina se udvostruči privreda koja raste 7% godišnje?', o:['Za oko 70 godina','Za oko 10 godina','Za oko 3 godine'], t:1, z:'Pravilo 70: 70 / 7 = 10 godina.'}},
{n:'Krize', t:`Privreda ne raste ravno, nego u talasima: rast → prepumpavanje → pad → oporavak. To je PRIVREDNI CIKLUS. Pad od bar dva tromesečja zaredom zove se RECESIJA.

Velike krize obično počinju od BALONA: cena nečega (akcija, stanova) raste jer svi kupuju verujući da će još rasti — dok ne prestane. Onda svi prodaju odjednom.

• VELIKA DEPRESIJA: krah berze u Njujorku 1929, propast hiljada banaka; nezaposlenost u SAD oko 25%; posledice su doprinele usponu nacizma u Nemačkoj.
• KRIZA 2008: američke banke su davale stambene kredite ljudima koji ih nisu mogli vraćati, pa te kredite pakovale i prodavale dalje kao „sigurne". Kad su cene kuća pale, sve se srušilo; banka LEMAN BRADERS propala je 15. septembra 2008. Kriza se prelila na ceo svet, pa i na nas.

Zajedničko: preterano zaduživanje, verovanje da „ovaj put je drugačije", i rizik koji niko ne vidi jer je skriven u složenim proizvodima.`,
pr:{p:'Kako obično nastaje balon?', o:['Država propiše visoke cene','Cena raste jer svi kupuju verujući da će još rasti — dok ne prestane','Zbog loše žetve'], t:1, z:'Kupuje se zbog očekivanog rasta, ne zbog stvarne vrednosti — pa pad bude nagao.'}},
{n:'Nejednakost', t:`Dve priče koje su obe tačne:

1. IZMEĐU ZEMALJA nejednakost se od oko 1990. SMANJUJE. Kina, Indija i druge rastu brže od bogatih zemalja. Krajnje siromaštvo (po Svetskoj banci, život sa manje od oko 2 dolara dnevno) palo je sa oko 38% čovečanstva 1990. na oko 9% pred pandemiju. To je jedna od najvećih promena u istoriji, a malo ko je zna.
2. UNUTAR mnogih zemalja nejednakost RASTE — najbogatiji deo dobija sve veći deo kolača (posebno u SAD od 1980-ih).

Meri se najčešće GINIJEVIM KOEFICIJENTOM: 0 = svi imaju isto, 1 = jedan ima sve. Skandinavija je oko 0,25–0,3; SAD oko 0,4; Južna Afrika iznad 0,6.

Rasprava: koliko je nejednakosti „u redu"? Jedni kažu: nejednakost je cena podsticaja — bez nagrade za rizik i trud nema ni rasta. Drugi (npr. Toma Piketi, „Kapital u 21. veku"): kad bogatstvo raste brže od plata, bogatstvo se nasleđuje i zatvara u krug, a to kvari i demokratiju. Treći: nije bitna nejednakost, nego da siromašni žive bolje i da deca imaju šansu.`,
pr:{p:'Šta se dešavalo sa krajnjim siromaštvom u svetu od 1990. do 2019?', o:['Poraslo je','Palo je sa oko 38% na oko 9% čovečanstva','Ostalo je isto'], t:1, z:'Brz rast Kine, Indije i drugih zemalja izvukao je više od milijardu ljudi iz krajnjeg siromaštva.'}},
{n:'Šta iz ovoga za sebe', t:`Nekoliko ekonomskih ideja ima smisla i za kućni budžet:
• SLOŽENA KAMATA radi i za tebe i protiv tebe: mala ušteda dugo uložena raste, a skup kratkoročni kredit (minus na kartici) raste protiv tebe isto tako uporno.
• BALON se oseća i u malom: „svi kupuju, mora da je dobro" nije razlog.
• Krize dolaze — rezerva od nekoliko plata na strani je ekonomski najzdravija navika domaćinstva.

Kostur lekcije: BDP i njegove rupe → rast iz kapitala, rada, tehnologije i institucija → složeni rast → ciklusi, baloni i krize (1929, 2008) → nejednakost: između zemalja pada, unutar raste, a rasprava je o tome koliko je pravedno.

Sledeće: svet kao jedno tržište — trgovina, globalizacija i veliko pitanje 20. veka: kapitalizam ili socijalizam.`,
pr:{p:'Zašto se minus na kartici smatra lošim dugom?', o:['Jer se ne može otplatiti','Jer visoka kamata raste složeno, isto kao ušteda — samo protiv tebe','Jer je zabranjen'], t:1, z:'Složena kamata ne bira stranu: kod štednje radi za tebe, kod skupog duga protiv tebe.'}}
],
kljucno:['BDP meri proizvodnju, ali ne raspodelu, neplaćen rad, štetu ni sreću.','Rast iz kapitala, rada, tehnologije i institucija; pravilo 70 — složeni rast udvostručuje brzo.','Krize iz balona i prezaduženja: 1929 (Velika depresija), 2008 (krediti u SAD, Leman Braders).','Između zemalja nejednakost pada (krajnje siromaštvo ~38% → ~9%), unutar mnogih raste; Gini 0–1.','Rasprava: nejednakost kao podsticaj ili kao zatvoren krug (Piketi) — ili je bitnije da siromašni žive bolje.'],
kartice:[
{p:'Šta je BDP?', o:'Vrednost svih roba i usluga proizvedenih u zemlji za godinu.'},
{p:'Šta je pravilo 70?', o:'70 podeljeno sa stopom rasta = za koliko godina se nešto udvostruči.'},
{p:'Šta je recesija?', o:'Pad privrede bar dva tromesečja zaredom.'},
{p:'Šta je pokrenulo krizu 2008?', o:'Loši stambeni krediti u SAD, upakovani i prodavani kao sigurni; pad cena kuća.'},
{p:'Šta meri Ginijev koeficijent?', o:'Nejednakost — 0 svi isto, 1 jedan ima sve.'}
],
razgovor:['Da li je nejednakost sama po sebi problem, ili je problem samo siromaštvo? Gde ti stojiš?','Da li si osetio neku krizu (2008, 2020, poskupljenja) na sopstvenoj koži? Šta te je naučila?']},
{id:'8-5', naslov:'Globalna ekonomija — trgovina; kapitalizam i socijalizam',
kuka:{p:'Ako je jedna zemlja bolja od druge u proizvodnji SVEGA — da li joj se isplati da trguje sa njom?', o:['Ne, neka sve proizvodi sama','Da — isplati se obema, ako se svaka specijalizuje za ono u čemu je relativno najbolja','Samo ako je druga zemlja bogatija'], t:1},
delovi:[
{n:'Zašto zemlje trguju', t:`Najlepša ideja u ekonomiji, a protiv intuicije: KOMPARATIVNA PREDNOST (Dejvid Rikardo, 1817).

Primer: advokatica kuca brže od svoje sekretarice. Da li treba sama da kuca? Ne — njen sat je vredniji u sudnici. Isplati se obema da se svaka bavi onim u čemu je RELATIVNO najbolja i da razmenjuju.

Isto zemlje: čak i kad je jedna bolja u svemu, obe dobijaju ako se specijalizuju i trguju. Zato skoro nijedna zemlja ne pravi sama sve što troši. Telefon u tvom džepu ima delove iz desetak zemalja.

Zato većina ekonomista smatra da je slobodnija trgovina, gledano ukupno, dobra za obe strane. Ali „ukupno" ne znači „za svakoga".`,
pr:{p:'Šta kaže komparativna prednost?', o:['Trgovati samo sa slabijima','Isplati se specijalizovati za ono u čemu si relativno najbolji i razmenjivati, čak i kad je druga strana bolja u svemu','Uvoz je uvek štetan'], t:1, z:'Kao advokatica i sekretarica — obema se isplati podela posla, iako advokatica kuca brže.'}},
{n:'Globalizacija — dobitnici i gubitnici', t:`Posle 1990. svet se povezao kao nikad: kontejnerski brodovi, internet, pad carina, Kina u Svetskoj trgovinskoj organizaciji (2001). To je GLOBALIZACIJA.

Dobitnici: stotine miliona ljudi u Aziji izašlo je iz siromaštva; robe su postale jeftinije za sve; firme prodaju celom svetu.

Gubitnici: radnici u fabrikama bogatih zemalja čiji su poslovi preseljeni tamo gde je rad jeftiniji (npr. industrijski gradovi u SAD), i domaće firme koje nisu izdržale konkurenciju. Ukupna korist je velika, ali je RASUTA (svi plaćamo malo manje), a šteta je KONCENTRISANA (cela varoš ostane bez fabrike). Zato je otpor glasan.

Od oko 2016. vraćaju se CARINE (porez na uvoz) i „trgovinski ratovi" — posebno između SAD i Kine — i priča o vraćanju proizvodnje kući. Pandemija 2020. je pokazala i slabost: kad sve zavisi od jednog dalekog dobavljača, jedno zatvaranje zaustavi pola sveta.`,
pr:{p:'Zašto je otpor globalizaciji glasan iako je ukupna korist velika?', o:['Jer korist ne postoji','Korist je rasuta na sve, a šteta skoncentrisana na određene radnike i krajeve','Jer je zabranjena'], t:1, z:'Svi dobijaju malo jeftinije robe, a jedna varoš izgubi celu fabriku — ti glasovi se čuju.'}},
{n:'Kapitalizam i socijalizam — pojmovi', t:`Prvo pojmovi, pa rasprava.

KAPITALIZAM: sredstva za proizvodnju (fabrike, zemlja, firme) su uglavnom u PRIVATNOM vlasništvu; šta će se proizvoditi i po kojoj ceni određuje uglavnom TRŽIŠTE; pokretač je profit.

SOCIJALIZAM: sredstva za proizvodnju su u DRUŠTVENOM ili DRŽAVNOM vlasništvu; cilj je jednakost i da plodovi rada pripadnu radnicima. KOMUNIZAM je, kod Marksa, krajnji cilj — društvo bez klasa, novca i države; partije koje su sebe zvale komunističkim vladale su „socijalizmom" kao putem do njega.

KARL MARKS (19. vek, „Kapital") je gledao fabrike industrijske revolucije: radnik stvara vrednost, a vlasnik uzima višak; kapitalizam će, mislio je, zbog svojih protivrečnosti propasti i ustupiti mesto socijalizmu.

U praksi skoro sve današnje zemlje su MEŠOVITE PRIVREDE: tržište i privatno vlasništvo + država koja oporezuje, reguliše i obezbeđuje školu, zdravstvo, penzije. Razlika je u meri.`,
pr:{p:'Šta je glavna razlika između kapitalizma i socijalizma?', o:['Da li postoji novac','Ko poseduje sredstva za proizvodnju i ko odlučuje — tržište i privatnici ili društvo i država','Da li postoje porezi'], t:1, z:'Kapitalizam: privatno vlasništvo i tržište; socijalizam: društveno/državno vlasništvo i plan ili raspodela.'}},
{n:'Šta se desilo u praksi', t:`20. vek je bio veliki ogled.

• SSSR (od 1917) i istočni blok: PLANSKA PRIVREDA — država odlučuje šta se proizvodi i po kojoj ceni. Brza industrijalizacija, opismenjavanje, besplatno školstvo i zdravstvo; ali i nestašice, redovi, slaba inovacija, gušenje sloboda i milioni žrtava represije i gladi (posebno pod Staljinom). Sistem se urušio 1989–1991.
• KINA je pod Mao Cedongom prošla katastrofu (glad 1959–61, desetine miliona mrtvih); od 1978. Deng Sjaoping uvodi TRŽIŠTE uz vlast Komunističke partije — sledi najbrži rast u istoriji.
• JUGOSLAVIJA je išla svojim putem: SAMOUPRAVLJANJE (od 1950) — firme u „društvenom" vlasništvu, kojima formalno upravljaju radnički saveti, uz delimično tržište, otvorene granice i rad u inostranstvu. Životni standard je bio viši nego u istočnom bloku, ali i rastuća nezaposlenost, dug i inflacija 1980-ih.
• SKANDINAVSKI MODEL: tržišna, kapitalistička privreda + visoki porezi i jaka socijalna država. Često se pogrešno zove „socijalizam".

Danas je rasprava manje „kapitalizam ILI socijalizam", a više: koliko tržišta, koliko države, i kako ih spojiti. Ljudi iz različitih tabora iz istih činjenica izvlače različite pouke — i to je u redu da znaš.`,
pr:{p:'Kako se zvao jugoslovenski ekonomski model?', o:['Planska privreda po sovjetskom uzoru','Samoupravljanje — društveno vlasništvo, radnički saveti i delimično tržište','Skandinavski model'], t:1, z:'Od 1950. Jugoslavija razvija samoupravni socijalizam, različit i od sovjetskog i od zapadnog modela.'}},
{n:'Kraj oblasti', t:`Kostur oblasti „Novac i ekonomija":
1. oskudnost tera na izbor; cena nastaje iz ponude i potražnje i nosi poruku;
2. novac počiva na poverenju; banke ga stvaraju kreditom; centralna banka čuva njegovu vrednost; hiperinflacija je ono kad poverenje pukne;
3. tržište ima neuspehe; država ih ispravlja i preraspodeljuje — spor je koliko;
4. rast iz tehnologije i institucija; krize iz balona i duga; nejednakost između zemalja pada, unutar raste;
5. trgovina koristi obema stranama, ali ne svakome; kapitalizam i socijalizam — 20. vek je bio ogled, a danas su skoro sve zemlje mešavina.

Jedna rečenica za pamćenje: ekonomija nije nauka o novcu, nego o izborima ljudi kad nemaju dovoljno svega.

Sledeće: alat — naučni metod: kako se nešto zaista dokazuje. Pa onda vlast, pravo i svet.`,
pr:{p:'Kako bi u jednoj rečenici opisao ekonomiju?', o:['Nauka o novcu i bankama','Nauka o izborima ljudi i društava kad nemaju dovoljno svega','Nauka o berzi'], t:1, z:'Oskudnost i izbor su srž; novac je samo jedan od alata.'}}
],
kljucno:['Komparativna prednost (Rikardo): trgovina se isplati obema stranama i kad je jedna bolja u svemu.','Globalizacija: velika ukupna korist (Azija iz siromaštva, jeftinije robe), ali koncentrisani gubitnici; povratak carina.','Kapitalizam: privatno vlasništvo i tržište; socijalizam: društveno/državno vlasništvo; Marks; danas mešovite privrede.','SSSR plan (industrija i školstvo, ali nestašice i represija, pad 1991); Kina tržište od 1978; Jugoslavija samoupravljanje; Skandinavija = tržište + socijalna država.','Ekonomija je nauka o izboru u oskudici.'],
kartice:[
{p:'Šta je komparativna prednost?', o:'Isplati se specijalizovati za ono u čemu si relativno najbolji i razmenjivati.'},
{p:'Zašto je otpor globalizaciji jak iako je ukupna korist velika?', o:'Korist je rasuta, a šteta koncentrisana na određene radnike i krajeve.'},
{p:'Šta je mešovita privreda?', o:'Tržište i privatno vlasništvo uz državu koja oporezuje, reguliše i pruža javne usluge.'},
{p:'Šta je jugoslovensko samoupravljanje?', o:'Društveno vlasništvo, radnički saveti i delimično tržište (od 1950).'},
{p:'Da li je skandinavski model socijalizam?', o:'Ne — to je tržišna privreda sa visokim porezima i jakom socijalnom državom.'}
],
razgovor:['Šta od jugoslovenskog modela ljudi oko tebe pamte sa nostalgijom, a šta se zaboravlja? Šta misliš ti?','Da možeš da biraš jednu stvar koju bi država u Srbiji radila bolje, a jednu koju bi prepustio tržištu — šta bi izabrao?']}
]},
{id:'14', naziv:'Geografija sveta', ikona:'🗺️', era:'danas', lekcije:[

{id:'14-1', naslov:'Karta, kontinenti i okeani',
kuka:{p:'Na većini zidnih karata Grenland izgleda veliko kao Afrika. Koliko je Afrika zapravo veća?', o:['Isto su velike','Oko 2 puta','Oko 14 puta'], t:2},
delovi:[
{n:'Mreža na lopti', t:`Da bi se tačno reklo gde je nešto na Zemlji, preko lopte je „nabačena" zamišljena mreža:
• PARALELE (geografska ŠIRINA) — krugovi oko Zemlje, paralelni sa EKVATOROM. Ekvator je 0°, severni pol 90° severno, južni 90° južno.
• MERIDIJANI (geografska DUŽINA) — polukrugovi od pola do pola. Nulti meridijan prolazi kroz GRINIČ u Londonu (dogovor iz 1884); ide se do 180° istočno i zapadno.

Beograd je otprilike na 45° severne širine (na pola puta od ekvatora do pola) i 20° istočne dužine. Zato navigacija u telefonu daje dva broja — širinu i dužinu.

Meridijani određuju i VREMENSKE ZONE: Zemlja se okrene za 24 sata, pa svakih 15° dužine — jedan sat razlike. Srbija je u srednjoevropskoj zoni (GMT+1, leti +2).`,
pr:{p:'Šta pokazuje geografska širina?', o:['Koliko je mesto istočno od Griniča','Koliko je mesto severno ili južno od ekvatora','Nadmorsku visinu'], t:1, z:'Širina se meri od ekvatora (0°) do polova (90°); dužina od Griniča.'}},
{n:'Svaka karta laže', t:`Loptu ne možeš da ispeglaš na papir bez kidanja ili istezanja. Zato svaka ravna karta nešto iskrivljuje — oblik, površinu ili razdaljinu. Načini prenošenja zovu se PROJEKCIJE.

Najpoznatija je MERKATOROVA (1569), napravljena za moreplovce: čuva pravce i oblike, ali što je nešto bliže polovima, to je naduvanije. Zato Grenland izgleda kao Afrika, a Afrika je oko 14 puta veća. I Evropa i Rusija izgledaju veće nego što jesu, a Afrika i Južna Amerika manje.

Mapa koju koristi telefon (Gugl mape) je takođe vrsta Merkatora — dobra za ulice, loša za poređenje država.

Pouka iz lekcije o ubeđivanju: i karta je izbor. Šta je u sredini, šta je gore, šta je naduvano — utiče na to kako zamišljamo svet.`,
pr:{p:'Zašto Grenland na zidnoj karti izgleda ogromno?', o:['Jer jeste ogroman','Merkatorova projekcija naduvava sve što je blizu polova','Zbog leda'], t:1, z:'Lopta se ne može ispeglati bez iskrivljenja; Merkator čuva oblike, ali žrtvuje površinu.'}},
{n:'Kopno i voda', t:`Zemlja ima površinu oko 510 miliona km². Od toga je oko 71% VODA, a samo 29% KOPNO. Bolje bi se zvala Voda nego Zemlja.

Pet OKEANA, od najvećeg:
1. TIHI — veći od celog kopna zajedno; u njemu je Marijanski rov, najdublje mesto na Zemlji, oko 11 km;
2. ATLANTSKI — između Amerike i Evrope i Afrike;
3. INDIJSKI;
4. JUŽNI — oko Antarktika;
5. SEVERNI LEDENI.

Mora su delovi okeana uz kopno (Sredozemno, Crno, Jadransko…). Okeani su povezani — u stvari je to jedan svetski okean, a imena su ljudska podela.`,
pr:{p:'Koliki deo površine Zemlje je voda?', o:['Oko polovine','Oko 71%','Oko 90%'], t:1, z:'Kopno je samo oko 29% — Tihi okean je sam veći od svog kopna zajedno.'}},
{n:'Kontinenti', t:`Najčešće se broji SEDAM KONTINENATA, od najvećeg:
1. AZIJA — oko 30% kopna i skoro 60% ljudi;
2. AFRIKA — druga i po površini i po broju ljudi; najmlađa po stanovništvu;
3. SEVERNA AMERIKA — sa Srednjom Amerikom i Karibima;
4. JUŽNA AMERIKA;
5. ANTARKTIK — bez stalnih stanovnika, pod ledom debelim mestimično i preko 4 km;
6. EVROPA — zapravo zapadno poluostrvo Evroazije; granica sa Azijom je dogovor (Ural, Kavkaz, Bosfor);
7. AUSTRALIJA (sa Okeanijom) — najmanji.

U nekim zemljama uče šest (spoje Ameriku u jednu ili Evropu i Aziju u Evroaziju). Kontinenti nisu „prirodna" činjenica do kraja — to su delom geološke ploče, a delom istorijske navike.`,
pr:{p:'Koji kontinent ima skoro 60% ljudi na svetu?', o:['Afrika','Azija','Evropa'], t:1, z:'Azija — samo Indija i Kina imaju po oko 1,4 milijarde stanovnika.'}},
{n:'Kako ovo zapamtiti — i šta sledi', t:`Trik za glavu: zamisli globus i „obiđi" ga od kuće:
• na zapad: Jadransko more, Italija, pa Atlantik, pa Amerike;
• na istok: Crno more, Turska, Bliski istok, pa ogromna Azija do Tihog okeana;
• na jug: Sredozemno more, pa Afrika preko ekvatora;
• na sever: srednja Evropa, Skandinavija, pa Severni ledeni okean.

Srbija je u JUGOISTOČNOJ EVROPI, na Balkanskom poluostrvu, bez izlaza na more; Dunav je naša veza sa Crnim morem i srednjom Evropom.

Kostur lekcije: širina i dužina (ekvator, Grinič, vremenske zone) → svaka karta iskrivljuje (Merkator) → 71% vode, pet okeana → sedam kontinenata.

Sledeće: lice planete — planine, reke, pustinje i klimatske zone.`,
pr:{p:'Šta je naša prirodna veza sa Crnim morem i srednjom Evropom?', o:['Morava','Dunav','Sava'], t:1, z:'Dunav teče od Nemačke do Crnog mora — kroz Srbiju oko 588 km.'}}
],
kljucno:['Geografska širina (od ekvatora) i dužina (od Griniča); 15° dužine = 1 sat; Beograd ≈ 45° S, 20° I.','Svaka ravna karta iskrivljuje; Merkator naduvava polove — Afrika je oko 14 puta veća od Grenlanda.','Oko 71% Zemlje je voda; pet okeana — Tihi je veći od celog kopna; Marijanski rov oko 11 km.','Sedam kontinenata: Azija, Afrika, S. Amerika, J. Amerika, Antarktik, Evropa, Australija; Azija ima skoro 60% ljudi.','Srbija: jugoistočna Evropa, Balkan, bez mora; Dunav kao veza.'],
kartice:[
{p:'Šta je nulti meridijan i kuda prolazi?', o:'Početak merenja geografske dužine; prolazi kroz Grinič u Londonu.'},
{p:'Zašto Grenland na kartama izgleda kao Afrika?', o:'Merkatorova projekcija naduvava oblasti blizu polova; Afrika je oko 14 puta veća.'},
{p:'Koliki deo Zemlje pokriva voda?', o:'Oko 71%.'},
{p:'Koji je najveći okean?', o:'Tihi — veći od celog kopna zajedno.'},
{p:'Navedi sedam kontinenata.', o:'Azija, Afrika, Severna Amerika, Južna Amerika, Antarktik, Evropa, Australija.'}
],
razgovor:['Gde si do sada bio najdalje od kuće — i koliko je to, kad pogledaš globus, zapravo blizu?','Koje mesto na karti bi voleo da vidiš uživo, i zašto baš to?']},

{id:'14-2', naslov:'Lice planete — planine, reke, pustinje, klima',
kuka:{p:'Koja je najveća pustinja na svetu?', o:['Sahara','Gobi','Antarktik'], t:2},
delovi:[
{n:'Planine', t:`Visoke planine nastaju gde se ploče sudaraju (oblast 2). Najviše su u Aziji:
• HIMALAJI — sudar Indije i Azije, koji traje i danas; tu je MONT EVEREST, 8.849 m, najviši vrh sveta. Svih četrnaest vrhova preko 8.000 m su u Himalajima i susednom Karakorumu.
• ANDI — najduži venac na svetu, duž cele Južne Amerike.
• STENOVITE PLANINE — zapad Severne Amerike.
• ALPI — najviši u Evropi u užem smislu (Mon Blan, oko 4.800 m); KAVKAZ, na granici Evrope i Azije, ima i više vrhove (Elbrus, 5.642 m).
• Kod nas: KARPATI i Balkanske planine na istoku, DINARIDI na zapadu.

Planine prave klimu: zaustavljaju oblake (s jedne strane kiša, s druge pustinja), čuvaju sneg i led koji leti hrani reke. Skoro dve milijarde ljudi u Aziji zavisi od vode koja počinje u Himalajima.`,
pr:{p:'Kako su nastali Himalaji?', o:['Od vulkana','Sudarom indijske i azijske ploče','Erozijom'], t:1, z:'Indija se i danas utiskuje u Aziju — planine i dalje rastu.'}},
{n:'Reke i jezera', t:`Najduže reke:
• NIL (Afrika, oko 6.650 km) i AMAZON (Južna Amerika) — koja je duža, zavisi od toga gde se meri izvor; spor traje.
• AMAZON je ubedljivo najveća po količini vode — nosi oko petinu sve rečne vode koja se uliva u okeane.
• Velike azijske reke: JANGCE, Žuta reka, Ganges, Ind, Mekong — uz njih su nastale civilizacije (oblast 6).
• U Evropi: VOLGA najduža, DUNAV drugi — teče kroz 10 država i 4 prestonice (Beč, Bratislava, Budimpešta, Beograd).

Jezera:
• KASPIJSKO more je u stvari najveće jezero na svetu (slano).
• BAJKAL u Sibiru — najdublje (preko 1.600 m) i najstarije; drži oko petine sve nezamrznute slatke površinske vode na planeti.
• Velika jezera između SAD i Kanade.

Samo oko 2,5% vode na Zemlji je slatko, a većina toga je zaleđena (Antarktik, Grenland) ili pod zemljom.`,
pr:{p:'Koja reka nosi najviše vode na svetu?', o:['Nil','Amazon','Dunav'], t:1, z:'Oko petina sve rečne vode koja stiže u okeane dolazi iz Amazona; oko dužine Nila i Amazona se spori.'}},
{n:'Pustinje i šume', t:`PUSTINJA nije pesak nego manjak padavina — manje od oko 250 mm godišnje. Zato je najveća pustinja ANTARKTIK (hladna), pa Arktik, a tek onda SAHARA (najveća topla, veličine skoro cele SAD). Druge: Arabijska, Gobi, Kalahari, australijske pustinje, Atakama u Čileu (najsuvlja — ima mesta gde godinama ne padne kiša).

ŠUME:
• TROPSKE KIŠNE ŠUME (Amazonija, Kongo, Indonezija) — najbogatije životom; na malo prostora više vrsta nego u celoj Evropi;
• LISTOPADNE ŠUME umerenog pojasa (kao kod nas — hrast, bukva);
• TAJGA — ogromne četinarske šume Rusije i Kanade, najveća šuma na kopnu.

Između: STEPE i PRERIJE (trave, žitnice sveta — Ukrajina, američki srednji zapad, Vojvodina je deo istog tipa), SAVANE (Afrika — lavovi i žirafe), TUNDRA (smrznuto tlo na severu).`,
pr:{p:'Šta određuje da li je nešto pustinja?', o:['Pesak','Vrlo malo padavina — manje od oko 250 mm godišnje','Visoka temperatura'], t:1, z:'Zato je Antarktik najveća pustinja na svetu — hladna, ali suva.'}},
{n:'Klimatski pojasevi', t:`Najprostija podela klime ide po širini, od ekvatora ka polovima:
• TROPSKI pojas — oko ekvatora: toplo cele godine; ili stalne kiše (kišne šume), ili sušna i kišna sezona (savane, monsuni u Indiji).
• SUPTROPSKI — oko 20–35°: tu su velike tople pustinje, ali i SREDOZEMNA klima (suva vrela leta, blage kišne zime — Grčka, Italija, crnogorsko primorje).
• UMERENI — oko 35–60°: četiri godišnja doba. Srbija je ovde, sa umereno-kontinentalnom klimom: topla leta, hladne zime, kiša raspoređena tokom godine.
• SUBPOLARNI i POLARNI — kratka leta, duge zime, tundra i led.

Uz širinu, klimu menjaju još: NADMORSKA VISINA (svakih 100 m oko 0,6 °C hladnije — zato je Kopaonik hladniji od Kraljeva), BLIZINA MORA (more ublažava: London ima blažu zimu od Moskve), MORSKE STRUJE (Golfska struja greje zapadnu Evropu) i planine koje zaustavljaju oblake.`,
pr:{p:'Zašto je na planini hladnije?', o:['Bliže je Suncu, pa je hladnije','Sa visinom vazduh je ređi i hladniji — oko 0,6 °C na svakih 100 m','Zbog snega'], t:1, z:'Što je viša nadmorska visina, to je hladnije — zato je vrh Kopaonika hladniji od doline ispod.'}},
{n:'Kraj — lice planete', t:`Kostur lekcije:
• planine na granicama ploča: Himalaji (Everest 8.849 m), Andi, Alpi, Kavkaz; kod nas Karpati, Balkanske planine, Dinaridi;
• reke: Nil i Amazon (najveći), Dunav drugi u Evropi; jezera: Kaspijsko (najveće), Bajkal (najdublje);
• slatke vode je samo 2,5%, i većina je zaleđena;
• pustinja = malo kiše (Antarktik, Sahara); šume: kišne, listopadne, tajga; stepe, savane, tundra;
• klima: tropski, suptropski, umereni, polarni pojas — plus visina, more, struje i planine.

Ovo je pozornica. Sledeće: glumci — koliko nas ima, gde živimo i kako se to menja.`,
pr:{p:'Koliko je, otprilike, slatke vode na Zemlji?', o:['Oko 2,5% sve vode, i većina je zaleđena','Oko polovine','Oko 25%'], t:0, z:'Slatka voda je retka; većina je u ledu i pod zemljom — zato su reke i jezera tako dragoceni.'}}
],
kljucno:['Najviše planine na granicama ploča: Himalaji (Everest 8.849 m), Andi (najduži venac), Alpi, Kavkaz.','Nil i Amazon su najduže (spor); Amazon nosi najviše vode; Dunav drugi u Evropi; Kaspijsko najveće, Bajkal najdublje jezero.','Pustinja = manje od ~250 mm kiše: najveća je Antarktik, najveća topla Sahara; slatke vode samo ~2,5%.','Biomi: kišne šume, listopadne šume, tajga, stepe, savane, tundra.','Klimatski pojasevi po širini; klimu menjaju i visina (~0,6 °C na 100 m), more, struje i planine.'],
kartice:[
{p:'Koliko je visok Mont Everest?', o:'8.849 m.'},
{p:'Koja reka nosi najviše vode?', o:'Amazon — oko petine sve rečne vode koja stiže u okeane.'},
{p:'Koja je najveća pustinja na svetu?', o:'Antarktik (najveća topla je Sahara).'},
{p:'Koje je najdublje jezero na svetu?', o:'Bajkal u Sibiru.'},
{p:'Kakvu klimu ima Srbija?', o:'Umereno-kontinentalnu: topla leta, hladne zime, četiri godišnja doba.'}
],
razgovor:['Koji pejzaž te najviše vuče — more, planina, ravnica ili grad? Šta misliš, odakle ta sklonost?','Da možeš da živiš u bilo kom klimatskom pojasu, koji bi izabrao — i šta bi ti falilo?']},

{id:'14-3', naslov:'Ljudi na planeti — koliko nas je i gde živimo',
kuka:{p:'Koliko je otprilike ljudi danas na Zemlji?', o:['Oko 6 milijardi','Preko 8 milijardi','Oko 12 milijardi'], t:1},
delovi:[
{n:'Koliko nas je', t:`Danas na Zemlji živi preko 8 MILIJARDI ljudi. Kako smo stigli dovde:
• oko 1800. — 1 milijarda;
• 1927. — 2 milijarde;
• 1960. — 3; 1974. — 4; 1987. — 5; 1999. — 6; 2011. — 7; 2022. — 8 milijardi.

Najveći skok je bio u 20. veku — zbog vakcina, antibiotika, čiste vode i više hrane ljudi su prestali da masovno umiru mladi.

Ali rast se USPORAVA. Prognoze UN govore da će broj ljudi verovatno dostići vrhunac od nešto preko 10 milijardi u drugoj polovini ovog veka, pa početi da opada.

Najmnogoljudnije zemlje: INDIJA i KINA (po oko 1,4 milijarde; Indija je Kinu prestigla 2023), pa SAD, Indonezija, Pakistan, Nigerija, Brazil.`,
pr:{p:'Šta se dešava sa rastom broja ljudi?', o:['Ubrzava se','Usporava se — vrhunac se očekuje u drugoj polovini veka','Već opada svuda'], t:1, z:'Rast je najbrži bio u 20. veku; prognoze UN predviđaju vrhunac nešto preko 10 milijardi.'}},
{n:'Demografski prelaz', t:`Zašto rast usporava? Sve zemlje prolaze kroz isti obrazac — DEMOGRAFSKI PRELAZ:
1. Visoka rođenja, visoka smrtnost — stanovništvo stoji (tako je bilo hiljadama godina).
2. Smrtnost pada (medicina, higijena), rođenja i dalje visoka — EKSPLOZIJA stanovništva.
3. Rođenja padaju — deca preživljavaju, žene se školuju i rade, ljudi se sele u gradove, deca postaju skupa umesto da rade na njivi.
4. Niska rođenja, niska smrtnost — stanovništvo stoji ili opada i STARI.

Za održavanje broja stanovnika potrebno je oko 2,1 deteta po ženi. Danas je u većini sveta ispod toga — u Južnoj Koreji ispod 1, u Srbiji oko 1,5–1,6. U delu Afrike je još 4–6.

Zato je svet podeljen na MLADE (Afrika — polovina ljudi mlađa od oko 19 godina) i STARE zemlje (Evropa, Japan — polovina starija od preko 40). Stare zemlje imaju problem: ko će raditi i plaćati penzije? Odgovori su: kasnija penzija, mašine, doseljenici — i oko svakog se vodi politička rasprava.`,
pr:{p:'Koliko je dece po ženi potrebno da broj stanovnika ostane isti?', o:['Oko 1','Oko 2,1','Oko 4'], t:1, z:'Dvoje da zamene roditelje, plus malo zbog dece koja ne dožive odraslo doba.'}},
{n:'Gradovi', t:`Godine 2007. prvi put u istoriji više ljudi je živelo u GRADOVIMA nego na selu. Danas je to oko 57%, a raste.

Najveća gradska područja imaju po 30–40 miliona ljudi — DŽAKARTA, DAKA, TOKIO (redosled zavisi od toga gde se povlači granica grada). Zatim Nju Delhi, Šangaj, Kairo, Manila, Sao Paulo…

Zašto ljudi idu u grad? Posao, plata, škole, bolnice, sloboda, anonimnost. Grad je mašina za susrete: ideje, trgovina i nove firme nastaju gde je mnogo ljudi blizu.

Cena: gužva, skupi stanovi, zagađenje, a u siromašnim zemljama ogromna divlja naselja (u svetu više od milijardu ljudi živi u njima).

Srbija prati isti obrazac: sela se prazne (mnoga imaju samo starce), a rastu Beograd, Novi Sad i nekoliko većih gradova.`,
pr:{p:'Šta se prvi put desilo 2007. godine?', o:['Prestao je rast stanovništva','Više ljudi je živelo u gradovima nego na selu','Indija je prestigla Kinu'], t:1, z:'Od 2007. svet je pretežno gradski; danas oko 57% ljudi živi u gradovima.'}},
{n:'Jezici i seobe', t:`JEZICI — po broju ljudi kojima je to MATERNJI jezik: kineski (mandarinski, oko milijardu), španski, engleski, hindi, arapski, portugalski, bengalski, ruski. Po UKUPNOM broju govornika (sa onima koji ga uče) prvi je ENGLESKI — oko milijardu i po; on je danas jezik nauke, interneta, avijacije i biznisa.

SEOBE — oko 3–4% ljudi na svetu živi van zemlje u kojoj je rođeno (preko 280 miliona). Razlozi: posao i plata (najčešće), rat i progon (izbeglice), porodica, školovanje, klima.

Najveći tokovi: iz Latinske Amerike u SAD, iz Azije i Afrike u Evropu i zemlje Persijskog zaliva, iz istočne u zapadnu Evropu.

Srbija je zemlja ISELJAVANJA: od gastarbajtera 1960-ih do mladih danas — Nemačka, Austrija, Švajcarska, SAD. Novac koji dijaspora šalje kući (doznake) jedan je od velikih priliva novca u Srbiju.`,
pr:{p:'Koji je jezik prvi po ukupnom broju govornika?', o:['Kineski','Engleski — oko milijardu i po ljudi sa onima koji ga uče','Španski'], t:1, z:'Kineski je prvi kao maternji, ali engleski je prvi kad se računaju i oni koji ga govore kao drugi jezik.'}},
{n:'Kraj — gde smo', t:`Kostur lekcije:
• preko 8 milijardi; Indija i Kina po oko 1,4 milijarde; rast usporava, vrhunac oko 10+ milijardi;
• demografski prelaz: smrtnost pada, pa rođenja; 2,1 dete po ženi; mlada Afrika, stara Evropa;
• od 2007. većina ljudi živi u gradovima; najveći gradovi 30–40 miliona;
• engleski je opšti jezik; preko 280 miliona migranata; Srbija — zemlja iseljavanja.

Jedna rečenica: čovečanstvo je za dva veka postalo osam puta brojnije, gradsko i staro — i to menja sve, od cene stana do politike.

Sledeće: obilazak sveta po regionima — koje su zemlje gde i po čemu se pamte.`,
pr:{p:'Koliko puta je čovečanstvo poraslo od 1800. do danas?', o:['Dva puta','Oko osam puta','Sto puta'], t:1, z:'Od oko milijardu (1800) do preko 8 milijardi danas.'}}
],
kljucno:['Preko 8 milijardi ljudi (1 milijarda oko 1800); rast usporava, vrhunac oko 10+ milijardi u drugoj polovini veka.','Najmnogoljudnije: Indija, Kina (po ~1,4 milijarde), SAD, Indonezija, Pakistan.','Demografski prelaz; za održanje treba ~2,1 dete po ženi; Srbija ~1,5; mlada Afrika, stara Evropa i Japan.','Od 2007. većina ljudi u gradovima (danas ~57%); najveći gradovi 30–40 miliona.','Engleski prvi po ukupnom broju govornika; preko 280 miliona migranata; Srbija — zemlja iseljavanja.'],
kartice:[
{p:'Koliko ljudi živi na Zemlji?', o:'Preko 8 milijardi.'},
{p:'Koje su dve najmnogoljudnije zemlje?', o:'Indija i Kina, po oko 1,4 milijarde.'},
{p:'Šta je demografski prelaz?', o:'Prelaz od visoke rodnosti i smrtnosti ka niskoj — prvo pada smrtnost, pa rođenja.'},
{p:'Koliko dece po ženi održava broj stanovnika?', o:'Oko 2,1.'},
{p:'Od kada većina ljudi živi u gradovima?', o:'Od 2007.'}
],
razgovor:['Koliko ljudi iz tvog kraja ili generacije je otišlo u inostranstvo — i šta misliš, šta bi ih vratilo?','Grad ili selo — gde bi voleo da tvoja porodica živi za deset godina, i zašto?']},

{id:'14-4', naslov:'Svet po regionima — države i šta treba znati',
kuka:{p:'Koja je država najveća po površini?', o:['Kanada','Kina','Rusija'], t:2},
delovi:[
{n:'Koliko ima država', t:`U UN je 193 države članice, plus dve posmatračice (Vatikan i Palestina) — zato se kaže da na svetu ima „oko 195 država". Tačan broj zavisi od priznanja: Tajvan, Kosovo i još nekoliko teritorija imaju svoju vlast, ali ih ne priznaju svi (lekcija 9-5).

Najveće po površini: RUSIJA (oko 17 miliona km² — skoro dvostruko veća od sledeće), KANADA, SAD, KINA, BRAZIL, AUSTRALIJA, INDIJA.
Najmanje: VATIKAN (manji od pola kvadratnog kilometra — manje od mnogih beogradskih naselja), Monako, San Marino.

Po bogatstvu (privreda u celini): SAD, Kina, Nemačka, Japan, Indija. Po bogatstvu po stanovniku na vrhu su male zemlje — Luksemburg, Švajcarska, Norveška, Singapur, Irska, Katar.`,
pr:{p:'Koliko je otprilike država na svetu?', o:['Oko 50','Oko 195','Oko 500'], t:1, z:'193 članice UN plus dve posmatračice; tačan broj zavisi od priznanja.'}},
{n:'Evropa', t:`Oko 45 država na malom prostoru. Grubo:
• ZAPADNA: Francuska (Pariz), Velika Britanija (London), Nemačka (Berlin — najveća privreda Evrope), Beneluks (Belgija — Brisel, sedište EU i NATO; Holandija — Amsterdam; Luksemburg), Švajcarska (Bern) i Austrija (Beč).
• JUŽNA (sredozemna): Španija (Madrid), Portugal (Lisabon), Italija (Rim), Grčka (Atina).
• SEVERNA: Švedska (Stokholm), Norveška (Oslo), Danska (Kopenhagen), Finska (Helsinki), Island (Rejkjavik).
• ISTOČNA i SREDNJA: Poljska (Varšava), Češka (Prag), Slovačka (Bratislava), Mađarska (Budimpešta), Rumunija (Bukurešt), Bugarska (Sofija), baltičke države, Ukrajina (Kijev), Belorusija (Minsk), Moldavija (Kišinjev).
• RUSIJA (Moskva) — najveća zemlja sveta, preko Evrope i cele severne Azije.
• BALKAN — posebna lekcija.

Rečenica za pamćenje: Evropa je mala, gusta i stara — više od dve hiljade godina ratova i dogovora na prostoru manjem od Kanade.`,
pr:{p:'Koja zemlja ima najveću privredu u Evropi?', o:['Francuska','Nemačka','Italija'], t:1, z:'Nemačka — i zato je najvažnija destinacija za radnike sa Balkana.'}},
{n:'Azija i Bliski istok', t:`• ISTOČNA AZIJA: KINA (Peking), JAPAN (Tokio), Južna Koreja (Seul), Severna Koreja (Pjongjang), Mongolija; Tajvan (Tajpej) — sporan status.
• JUŽNA AZIJA: INDIJA (Nju Delhi), Pakistan (Islamabad), Bangladeš (Daka), Šri Lanka, Nepal (Himalaji).
• JUGOISTOČNA: INDONEZIJA (Džakarta; više od 17.000 ostrva, najviše muslimana na svetu), Tajland (Bangkok), Vijetnam (Hanoj), Filipini (Manila), Malezija, Singapur.
• CENTRALNA: Kazahstan (najveća država bez izlaza na more), Uzbekistan i ostali „-stani".
• BLISKI ISTOK: Turska (Ankara; Istanbul je najveći grad, na dva kontinenta), Iran (Teheran), Irak (Bagdad), Sirija (Damask), Saudijska Arabija (Rijad; Meka), Izrael (vlada u Jerusalimu, čiji je status sporan; većina ambasada u Tel Avivu), Palestinske teritorije, Jordan, Liban, zalivske države (UAE — Dubai, Katar, Kuvajt). Ovde je oko polovine poznatih svetskih rezervi nafte.`,
pr:{p:'Koja zemlja ima najviše muslimana na svetu?', o:['Saudijska Arabija','Indonezija','Turska'], t:1, z:'Indonezija — preko 230 miliona muslimana; većina muslimana sveta nije Arapi.'}},
{n:'Afrika, Amerike i Okeanija', t:`AFRIKA — 54 države, najmlađe stanovništvo sveta:
• sever (arapski, uz Sredozemlje): EGIPAT (Kairo; Nil, piramide), Maroko, Alžir (najveća afrička država), Tunis, Libija;
• ispod Sahare: NIGERIJA (najmnogoljudnija, preko 200 miliona; prestonica Abudža, najveći grad Lagos), Etiopija (Adis Abeba, sedište Afričke unije), Kenija (Najrobi), DR Kongo, Tanzanija, Gana, JUŽNA AFRIKA (najrazvijenija privreda; tri prestonice).

AMERIKE:
• SAD (Vašington; najveći grad Njujork), KANADA (Otava), MEKSIKO (Meksiko Siti);
• Srednja Amerika i Karibi (Kuba — Havana, Panama i kanal);
• Južna: BRAZIL (Brazilija; najveći gradovi Sao Paulo i Rio; govori se portugalski), ARGENTINA (Buenos Ajres), Kolumbija (Bogota), Peru (Lima), Čile (Santjago), Venecuela (Karakas).

OKEANIJA: AUSTRALIJA (prestonica Kanbera — ne Sidnej!), Novi Zeland (Velington), i hiljade pacifičkih ostrva.

Zamka za kviz: mnoge prestonice nisu najveći grad — Kanbera, Otava, Vašington, Brazilija, Ankara, Abudža.`,
pr:{p:'Koja je prestonica Australije?', o:['Sidnej','Kanbera','Melburn'], t:1, z:'Kanbera je napravljena kao kompromis između Sidneja i Melburna.'}},
{n:'Kraj — kako pamtiti svet', t:`Ne moraš znati svih 195 prestonica. Bolje je imati MAPU U GLAVI sa sidrima:
• najveće: Rusija, Kanada, SAD, Kina, Brazil, Australija;
• najmnogoljudnije: Indija, Kina, SAD, Indonezija, Pakistan, Nigerija, Brazil;
• najbogatije privrede: SAD, Kina, Nemačka, Japan, Indija;
• žarišta: Bliski istok, Ukrajina, Tajvan, Kašmir, Sahel u Africi.

Kad čuješ vest iz neke zemlje, uradi jednu stvar: pogledaj je na karti. Ko su joj susedi, da li ima more, koje velike reke ili planine — pola vesti se odmah objasni (sećaš se geopolitike, 9-4).

Kostur lekcije: oko 195 država (spor oko priznanja); najveće, najmnogoljudnije, najbogatije; Evropa po regionima; Azija i Bliski istok; Afrika (54), Amerike, Okeanija; prestonice-zamke.

Sledeće: naš kraj — Srbija i Balkan na karti.`,
pr:{p:'Šta je dobra navika kad čuješ vest iz neke zemlje?', o:['Preskočiti je','Pogledati zemlju na karti — susede, more, reke, planine','Zapamtiti prestonicu'], t:1, z:'Položaj objašnjava mnogo: ko kome smeta, ko od koga zavisi, kuda idu putevi.'}}
],
kljucno:['Oko 195 država (193 u UN + Vatikan i Palestina); spor oko Tajvana, Kosova i drugih.','Najveća: Rusija (~17 miliona km²), Kanada, SAD, Kina; najmanja: Vatikan; najveće privrede: SAD, Kina, Nemačka, Japan, Indija.','Evropa: zapad, jug, sever, istok i srednja, Balkan; Rusija preko dva kontinenta.','Azija: Kina, Japan, Indija, Indonezija (najviše muslimana); Bliski istok — nafta i žarišta.','Afrika 54 države (Nigerija najmnogoljudnija); Amerike; Australija — Kanbera; mnoge prestonice nisu najveći grad.'],
kartice:[
{p:'Koja je najveća država po površini?', o:'Rusija, oko 17 miliona km².'},
{p:'Koliko država ima Afrika?', o:'54.'},
{p:'Koja je najmnogoljudnija zemlja Afrike?', o:'Nigerija.'},
{p:'Navedi tri prestonice koje nisu najveći grad svoje zemlje.', o:'Npr. Kanbera, Otava, Vašington, Brazilija, Ankara, Abudža.'},
{p:'Koja zemlja ima najviše muslimana?', o:'Indonezija.'}
],
razgovor:['Koju zemlju bi voleo da upoznaš bolje — i šta o njoj sad zapravo znaš, a šta su samo slike iz filmova?','Kad sledeći put čuješ vest iz sveta, probaj: pogledaj kartu pre nego što pročitaš tekst. Šta misliš da ćeš primetiti?']},

{id:'14-5', naslov:'Srbija i Balkan na karti',
kuka:{p:'Koji je najviši vrh Srbije van Kosova?', o:['Pančićev vrh na Kopaoniku','Midžor na Staroj planini','Zlatibor'], t:1},
delovi:[
{n:'Balkansko poluostrvo', t:`BALKANSKO POLUOSTRVO je na jugoistoku Evrope, između Jadranskog, Jonskog, Egejskog i Crnog mora. Ime dolazi od turske reči za planinu (balkan) — i zaista je pretežno planinsko. Severna granica nije oštra; najčešće se uzima linija Kupa–Sava–Dunav.

Države koje su cele ili delom na Balkanu: Srbija, Crna Gora, BiH, Hrvatska (delom), Slovenija (mali deo), Severna Makedonija, Albanija, Grčka, Bugarska, Rumunija (mali deo), evropski deo Turske; i Kosovo, čiji je status sporan.

„ZAPADNI BALKAN" je politički izraz EU: zemlje bivše Jugoslavije koje nisu u EU, plus Albanija.

Najviši vrh Balkana je Musala (2.925 m) u Bugarskoj, a najveće reke Dunav, Sava, Morava i Marica.`,
pr:{p:'Odakle potiče ime „Balkan"?', o:['Od imena jednog kralja','Od turske reči za planinu','Od latinske reči za more'], t:1, z:'Poluostrvo je pretežno planinsko — otud ime.'}},
{n:'Srbija — osnovni podaci', t:`SRBIJA nema izlaz na more. Površina sa Kosovom i Metohijom je oko 88.500 km², bez njega oko 77.500 km². Sa Kosovom je malo veća od Austrije, a manja od Mađarske.

Stanovnika je po popisu 2022. oko 6,6 miliona (bez Kosova, gde popis nije sproveden) — više od pola miliona manje nego 2011. Broj opada zbog niskog rađanja i iseljavanja (lekcija 14-3).

Najveći gradovi: BEOGRAD (oko 1,7 miliona u gradu), NOVI SAD, NIŠ, Kragujevac, Subotica.

Susedi: Mađarska, Rumunija, Bugarska, Severna Makedonija, Crna Gora, Bosna i Hercegovina, Hrvatska — i, preko Kosova, Albanija. Srbija smatra granicu sa Albanijom svojom, a Priština tu teritoriju smatra kosovskom (lekcija 9-5).`,
pr:{p:'Koliko je stanovnika imala Srbija na popisu 2022. (bez Kosova)?', o:['Oko 9 miliona','Oko 6,6 miliona','Oko 4 miliona'], t:1, z:'Više od pola miliona manje nego 2011. — zbog niskog rađanja i iseljavanja.'}},
{n:'Reljef — sever ravan, jug planinski', t:`Srbija se grubo deli na ravan sever i brdovito-planinski centar i jug.

• VOJVODINA — PANONSKA NIZIJA, dno nekadašnjeg PANONSKOG MORA, koje je isteklo pre nekoliko miliona godina. Najplodnija zemlja u državi — žitnica. Iz ravnice se dižu FRUŠKA GORA (nekad ostrvo u tom moru) i Vršački breg. Ima i peščara — Deliblatska peščara, „evropska Sahara" u malom.
• CENTRALNA SRBIJA — ŠUMADIJA (brežuljci, voćnjaci, nekada guste šume — otud ime), POMORAVLJE.
• ZAPAD — Dinarske planine: Zlatibor, Tara (nacionalni park, Drina i njen kanjon), Golija.
• ISTOK — Karpatsko-balkanske planine: Stara planina sa MIDŽOROM (2.169 m, najviši vrh van Kosova), Rtanj.
• JUG — KOPAONIK (Pančićev vrh 2.017 m, najveći ski-centar), Šar planina na Kosovu. Najviši vrh na celoj teritoriji koju Srbija smatra svojom je ĐERAVICA (2.656 m) na Kosovu.

ĐERDAP — klisura kojom se Dunav probija kroz Karpate, duga oko 100 km, jedna od najvećih u Evropi; tu je i Lepenski Vir (lekcija 6-1) i hidroelektrana Đerdap.`,
pr:{p:'Šta je Vojvodina geološki?', o:['Bivši vulkan','Dno nekadašnjeg Panonskog mora — zato je ravna i plodna','Deo Alpa'], t:1, z:'Panonsko more je isteklo pre nekoliko miliona godina i ostavilo plodno ravno dno.'}},
{n:'Reke', t:`Skoro sve vode Srbije teku ka DUNAVU, pa u Crno more.
• DUNAV — kroz Srbiju oko 588 km; ulazi kod Bezdana, izlazi kroz Đerdap.
• SAVA — uliva se u Dunav u Beogradu, ispod Kalemegdana — zato je Beograd tu gde jeste: tvrđava na ušću dve reke.
• TISA — kroz Vojvodinu.
• MORAVA — najveća reka koja ceo tok ima u Srbiji. Nastaje kod Stalaća spajanjem JUŽNE MORAVE (pored Vranja i Niša) i ZAPADNE MORAVE (kroz Čačak, Kraljevo); kao VELIKA MORAVA teče na sever do Dunava. Dolina Morave je glavni put kroz Srbiju — autoput i pruga (sećaš se Koridora 10, lekcija 9-4).
• DRINA — granica sa BiH; Ibar, Timok, Lim.

Jezera su uglavnom veštačka: Đerdapsko (najveće), Perućac, Vlasinsko; među najvećim prirodnim je Palićko kod Subotice.`,
pr:{p:'Kako nastaje Velika Morava?', o:['Izvire na Kopaoniku','Spajanjem Južne i Zapadne Morave kod Stalaća','Odvaja se od Dunava'], t:1, z:'Južna (pored Vranja i Niša) i Zapadna (kroz Čačak i Kraljevo) spajaju se kod Stalaća.'}},
{n:'Kraj oblasti — mapa u glavi', t:`Kostur oblasti „Geografija sveta":
1. karta i mreža (širina, dužina), iskrivljenje karte, 71% vode, pet okeana, sedam kontinenata;
2. planine, reke, pustinje, šume, klimatski pojasevi;
3. preko 8 milijardi ljudi, demografski prelaz, gradovi, jezici, seobe;
4. oko 195 država — najveće, najmnogoljudnije, najbogatije, regioni, prestonice-zamke;
5. Balkan i Srbija: sever ravan (Panonska nizija), jug planinski, Dunav–Sava–Morava, Đerdap.

Jedna vežba za kraj: zatvori oči i nacrtaj u glavi put od kuće do mora — kojim rekama i dolinama ideš, preko kojih planina, kroz koje države. Ako možeš to, imaš mapu u glavi.

Sledeće: vlast, pravo i svet — sad kad znaš gde je šta, lakše ćeš videti zašto se ko oko čega spori.`,
pr:{p:'Šta je najbolji dokaz da imaš „mapu u glavi"?', o:['Da znaš sve prestonice napamet','Da možeš da zamisliš put — reke, planine, države — od jednog mesta do drugog','Da imaš atlas'], t:1, z:'Znanje geografije je slika odnosa: šta je pored čega i kuda se ide.'}}
],
kljucno:['Balkan: ime od turske reči za planinu; severna granica Kupa–Sava–Dunav; „Zapadni Balkan" je politički izraz EU.','Srbija: bez mora; ~88.500 km² sa Kosovom (~77.500 bez); popis 2022 ~6,6 miliona; Beograd, Novi Sad, Niš.','Sever ravan (Panonska nizija, dno nekadašnjeg mora; Fruška gora), centar Šumadija, zapad Dinaridi, istok Stara planina (Midžor 2.169 m), jug Kopaonik; Đeravica 2.656 m na Kosovu.','Reke ka Dunavu: Dunav (~588 km), Sava (ušće u Beogradu), Tisa, Morava (Južna + Zapadna kod Stalaća), Drina; Đerdap.','Mapa u glavi = odnosi: šta je pored čega i kuda se ide.'],
kartice:[
{p:'Odakle ime Balkan?', o:'Od turske reči za planinu.'},
{p:'Koliko stanovnika ima Srbija po popisu 2022?', o:'Oko 6,6 miliona (bez Kosova).'},
{p:'Koji je najviši vrh Srbije van Kosova?', o:'Midžor na Staroj planini, 2.169 m.'},
{p:'Šta je Vojvodina geološki?', o:'Dno nekadašnjeg Panonskog mora.'},
{p:'Gde nastaje Velika Morava?', o:'Kod Stalaća, spajanjem Južne i Zapadne Morave.'}
],
razgovor:['Koji kraj Srbije znaš najbolje, a u koji nikad nisi kročio — i zašto?','Da strancu treba da opišeš Srbiju u tri rečenice preko karte — šta bi rekao?']}
]},

{id:'9', naziv:'Vlast, pravo i svet', ikona:'⚖️', era:'danas', lekcije:[
{id:'9-1', naslov:'Šta je država — oblici vlasti',
kuka:{p:'Po čemu se, po čuvenoj definiciji Maksa Vebera, država razlikuje od bande?', o:['Država je veća','Država ima monopol na ZAKONITU upotrebu sile na svojoj teritoriji','Država naplaćuje poreze, banda ne'], t:1},
delovi:[
{n:'Šta je država', t:`DRŽAVA, u modernom smislu, ima četiri sastojka:
1. TERITORIJU sa granicama;
2. STANOVNIŠTVO;
3. VLAST koja donosi i sprovodi pravila;
4. SUVERENITET — niko spolja nema vlast nad njom; i, u praksi, PRIZNANJE drugih država.

Sociolog Maks Veber dao je definiciju koja se najčešće navodi: država je zajednica koja na svojoj teritoriji ima MONOPOL NA ZAKONITU UPOTREBU SILE. Policija sme da te uhapsi, a komšija ne sme — razlika je u zakonitosti, ne u snazi.

Ideja suverenih država koje se ne mešaju jedna drugoj u unutrašnje stvari uglavnom se vezuje za VESTFALSKI MIR (1648), posle Tridesetogodišnjeg rata. Do tada je Evropa bila mreža carstava, crkve, gradova i feudalaca sa preklopljenim vlastima.

NACIJA i DRŽAVA nisu isto: nacija je zajednica ljudi koji osećaju da pripadaju zajedno (jezik, istorija, kultura); država je politička organizacija. Ima nacija bez države (Kurdi) i država sa više nacija (Švajcarska).`,
pr:{p:'Šta je, po Veberu, ključna odlika države?', o:['Zastava i himna','Monopol na zakonitu upotrebu sile na svojoj teritoriji','Veliki broj stanovnika'], t:1, z:'Ne snaga, nego zakonitost: samo država sme da primenjuje silu, i to po pravilima.'}},
{n:'Ko vlada — monarhija i republika', t:`Prvo pitanje: KO je na čelu države?
• MONARHIJA — vladar po nasleđu (kralj, car). APSOLUTNA: vladar ima svu vlast (danas retko — npr. Saudijska Arabija). USTAVNA: kralj je simbol, a vladaju parlament i vlada (Velika Britanija, Švedska, Španija).
• REPUBLIKA — šef države se bira na određeno vreme (lat. res publica, „javna stvar").

Drugo, važnije pitanje: KAKO se vlada?
• DEMOKRATIJA — vlast se bira na slobodnim izborima, postoji opozicija, slobodni mediji, nezavisni sudovi, i vlast se može smeniti mirno.
• AUTOKRATIJA — vlast je skoncentrisana u jednoj osobi ili grupi i ne može se mirno smeniti. DIKTATURA je njen grublji oblik; TOTALITARIZAM ide do kraja i hoće da kontroliše ceo život građana — misli, umetnost, porodicu (nacistička Nemačka, Staljinov SSSR).

Između je mnogo nijansi: postoje zemlje sa izborima koje nisu sasvim slobodni ni pošteni (stručnjaci ih zovu „hibridni režimi"). Zato monarhija može biti demokratska (Švedska), a republika autokratska.`,
pr:{p:'Može li monarhija biti demokratija?', o:['Ne, nikako','Da — ustavna monarhija, gde kralj je simbol a vladaju izabrani','Samo ako je kralj izabran'], t:1, z:'Švedska, Norveška, Velika Britanija — kralj je simbol, vlast je kod izabranog parlamenta.'}},
{n:'Podela vlasti', t:`Najvažnija ideja moderne države: vlast ne sme biti u jednoj ruci. Francuski pisac MONTESKJE (1748) je predložio PODELU VLASTI na tri grane koje se međusobno kontrolišu:

• ZAKONODAVNA — donosi zakone (skupština, parlament);
• IZVRŠNA — sprovodi zakone i upravlja (vlada, ministarstva, predsednik);
• SUDSKA — sudi po zakonima, nezavisno od prve dve.

Logika: svaka grana koči drugu. Skupština može da smeni vladu; sud može da poništi nezakonit akt vlade; vlada predlaže budžet, ali ga usvaja skupština. Kad se sve tri spoje u jednoj osobi ili partiji, građanin nema kome da se žali.

Uz to, u demokratiji važe i nezavisni MEDIJI i slobodno CIVILNO DRUŠTVO — nekad zvani „četvrta vlast".`,
pr:{p:'Zašto se vlast deli na tri grane?', o:['Da bude više službenika','Da se grane međusobno kontrolišu i niko nema svu vlast','Zbog tradicije'], t:1, z:'Monteskje: vlast koja nije podeljena se zloupotrebi; grane se međusobno koče.'}},
{n:'Kako su uređene demokratije', t:`Demokratije se razlikuju po tome kako su raspoređene grane:
• PARLAMENTARNI sistem — građani biraju skupštinu, a skupština bira vladu i premijera, koji joj odgovara (Nemačka, Velika Britanija, Italija). Predsednik, ako postoji, ima malo vlasti.
• PREDSEDNIČKI — predsednik se bira direktno i on je i šef države i šef izvršne vlasti (SAD, Brazil).
• POLUPREDSEDNIČKI — direktno izabran predsednik sa jakim ovlašćenjima + premijer odgovoran skupštini (Francuska).

SRBIJA je po Ustavu iz 2006. PARLAMENTARNA republika: Narodna skupština (250 poslanika) bira vladu; predsednik republike se bira neposredno, ali ima ograničena ovlašćenja. (Koliko se praksa poklapa sa ustavnim slovom — o tome se u Srbiji vodi politička rasprava.)

I još jedna podela: UNITARNA država (jedna centralna vlast, uz lokalnu samoupravu) i FEDERACIJA (savezne jedinice sa svojim vlastima — SAD, Nemačka, nekada Jugoslavija).`,
pr:{p:'Kakav je sistem po Ustavu Srbije?', o:['Predsednički','Parlamentarna republika — skupština bira vladu','Ustavna monarhija'], t:1, z:'Ustav iz 2006: skupština od 250 poslanika bira vladu; predsednik je biran neposredno, sa ograničenim ovlašćenjima.'}},
{n:'Zašto demokratija — i njene slabosti', t:`Zašto se danas smatra da je demokratija najbolji oblik vlasti? Čerčilova poznata šala: „Demokratija je najgori oblik vlasti — osim svih ostalih koji su probani."

Argumenti za: vlast se može mirno smeniti; greške se ispravljaju jer postoji kritika; prava pojedinca su zaštićena; ljudi pristaju na zakone u čijem donošenju učestvuju.

Slabosti o kojima se ozbiljno raspravlja:
• TIRANIJA VEĆINE — većina može da gazi manjinu (zato postoje ustav i prava koja se ne glasaju);
• kratkoročnost — političari misle na sledeće izbore, a ne na sledeću generaciju;
• POPULIZAM i demagogija — lako je zavesti masu jednostavnim obećanjima (to su znali još Platon i Aristotel);
• neznanje birača o složenim temama.

Kostur: država = teritorija, narod, vlast, suverenitet; monarhija/republika kaže KO, demokratija/autokratija kaže KAKO; podela vlasti; parlamentarni/predsednički sistem.

Sledeće: pravo — pravila igre, ustav i ljudska prava.`,
pr:{p:'Šta je „tiranija većine"?', o:['Vlast jednog čoveka','Kad većina zloupotrebi demokratiju da gazi prava manjine','Previše stranaka'], t:1, z:'Zato postoje ustav i osnovna prava koja se ne mogu ukinuti prostom većinom glasova.'}}
],
kljucno:['Država: teritorija, stanovništvo, vlast, suverenitet; Veber — monopol na zakonitu silu; nacija ≠ država.','Monarhija/republika (ko je na čelu) nije isto što i demokratija/autokratija (kako se vlada); totalitarizam kontroliše ceo život.','Podela vlasti (Monteskje): zakonodavna, izvršna, sudska — međusobno se koče.','Parlamentarni, predsednički, polupredsednički sistem; Srbija — parlamentarna republika (Ustav 2006, 250 poslanika).','Demokratija: mirna smena i ispravljanje grešaka; slabosti — tiranija većine, kratkoročnost, populizam.'],
kartice:[
{p:'Kako Veber definiše državu?', o:'Zajednica sa monopolom na zakonitu upotrebu sile na svojoj teritoriji.'},
{p:'Koje su tri grane vlasti?', o:'Zakonodavna, izvršna, sudska.'},
{p:'Ko je predložio podelu vlasti?', o:'Monteskje (1748).'},
{p:'Koja je razlika između parlamentarnog i predsedničkog sistema?', o:'U parlamentarnom skupština bira vladu; u predsedničkom direktno izabran predsednik vodi izvršnu vlast.'},
{p:'Šta je totalitarizam?', o:'Vlast koja hoće da kontroliše ceo život građana, ne samo politiku.'}
],
razgovor:['Čerčil kaže da je demokratija najgora — osim svih ostalih. Slažeš li se, ili vidiš nešto bolje?','Šta bi ti bio prvi znak da vlast više ne može mirno da se smeni?']},
{id:'9-2', naslov:'Pravo, ustav, ljudska prava',
kuka:{p:'Koji je najstariji pisani nacionalni ustav koji je i danas na snazi?', o:['Britanski','Američki (1787)','Francuski (1789)'], t:1},
delovi:[
{n:'Šta je pravo', t:`PRAVO su pravila ponašanja koja donosi država i koja se, ako ih prekršiš, mogu sprovesti silom (kazna, prinudna naplata). Po tome se razlikuje od MORALA (sramota, savest) i OBIČAJA (šta se „radi").

Pravo i moral se preklapaju (ne ubij), ali nisu isto: nešto može biti nemoralno a zakonito (prevariti prijatelja u sitnici), i zakonito a nemoralno (zakoni o rasnoj segregaciji). Zato se pravnici i filozofi vekovima spore: da li je zakon „pravo" samo zato što ga je država donela (PRAVNI POZITIVIZAM), ili postoje pravila iznad države koja nijedan zakon ne sme da prekrši (PRIRODNO PRAVO)? Posle Nirnberga 1945. — kad su nacisti branili zločine „naređenjima i zakonima" — prevladalo je da ne sme sve što je propisano.

Velike podele:
• JAVNO pravo (država i građanin: ustavno, krivično, upravno) i PRIVATNO (građani među sobom: ugovori, nasleđe, porodica);
• KRIVIČNO (zločini i kazne) i GRAĐANSKO (sporovi i naknada štete).`,
pr:{p:'Po čemu se pravo razlikuje od morala?', o:['Pravo je uvek pravedno','Pravo donosi država i može se sprovesti silom','Moral je pisan'], t:1, z:'Kršenje morala donosi sramotu; kršenje prava — državnu sankciju.'}},
{n:'Dve pravne porodice', t:`Dve velike tradicije prava u svetu:

• KONTINENTALNO (rimsko-germansko) pravo — pravo je zapisano u ZAKONICIMA, sudija primenjuje zakon. Koreni u rimskom pravu i Justinijanovom zborniku, a moderni oblik u Napoleonovom građanskom zakoniku (1804). Ovde spadaju Srbija, Francuska, Nemačka i veći deo Evrope i sveta.
• ANGLOSAKSONSKO (common law) — veliki deo prava čine ranije SUDSKE ODLUKE (PRECEDENTI); sudija koji sudi sličan slučaj mora da prati ranije presude. Engleska, SAD, Australija, Kanada (osim Kvebeka), Indija.

Zato u američkim filmovima advokati stalno citiraju stare slučajeve — kod nas se citiraju članovi zakona.

Kod nas je pravo imalo dugu istoriju: Zakonopravilo Svetog Save (1219), Dušanov zakonik (1349/1354), a prvi srpski ustav je SRETENJSKI (1835), koji je knez Miloš brzo ukinuo — mnogima je bio previše liberalan.`,
pr:{p:'Šta je precedent?', o:['Novi zakon','Ranija sudska odluka koju sudije prate u sličnim slučajevima','Pravni savet'], t:1, z:'U anglosaksonskom pravu presude stvaraju pravo; u kontinentalnom osnova je pisani zakonik.'}},
{n:'Ustav i hijerarhija pravila', t:`USTAV je najviši pravni akt države — „zakon nad zakonima". On određuje:
• kako je država uređena (grane vlasti, kako se biraju, koliko traju);
• osnovna prava i slobode građana;
• kako se menja (obično teže od običnog zakona — posebna većina, referendum).

Pravila stoje u HIJERARHIJI: ustav → zakoni → uredbe i pravilnici (podzakonski akti) → pojedinačne odluke (rešenje o porezu, presuda). Niže pravilo ne sme biti suprotno višem. Ko to proverava? USTAVNI SUD — može da poništi zakon koji je protivan ustavu.

Važne ideje ugrađene u moderno pravo:
• VLADAVINA PRAVA — i vlast mora da poštuje zakon, ne samo građani;
• PRETPOSTAVKA NEVINOSTI — nevin si dok se krivica ne dokaže;
• NEMA KAZNE BEZ ZAKONA — ne može se kazniti za nešto što nije bilo zabranjeno kad je učinjeno;
• JEDNAKOST pred zakonom.

Najstariji pisani nacionalni ustav koji je i danas na snazi je američki (1787). Velika Britanija nema jedan pisani ustav — njen je sastavljen od zakona, presuda i običaja. Srbija ima Ustav iz 2006.`,
pr:{p:'Ko kod nas može da poništi zakon koji je suprotan ustavu?', o:['Predsednik','Ustavni sud','Vlada'], t:1, z:'Ustavni sud čuva hijerarhiju: niže pravilo ne sme biti suprotno višem.'}},
{n:'Ljudska prava', t:`Ideja da svaki čovek ima PRAVA samim tim što je čovek — ne zato što mu ih je dao kralj — razvijala se korak po korak:
• MAGNA KARTA (Engleska, 1215) — i kralj je pod zakonom (tada samo za plemiće);
• Engleska povelja o pravima (1689);
• Američka deklaracija nezavisnosti (1776): „svi ljudi su stvoreni jednaki" (a ropstvo je trajalo još skoro 90 godina);
• Francuska deklaracija o pravima čoveka i građanina (1789).

Posle užasa Drugog svetskog rata, UN su 1948. usvojile OPŠTU DEKLARACIJU O PRAVIMA ČOVEKA: pravo na život, slobodu, zabrana mučenja i ropstva, sloboda misli, vere i govora, pravično suđenje, ali i pravo na rad, obrazovanje i zdravlje. U Evropi postoji i EVROPSKA KONVENCIJA o ljudskim pravima (1950), sa sudom u STRAZBURU, kome se mogu žaliti i građani Srbije kad iscrpe domaće sudove.

Prava se često dele na GRAĐANSKA I POLITIČKA (sloboda govora, glas, pravično suđenje — država te ostavlja na miru) i EKONOMSKA I SOCIJALNA (rad, školovanje, zdravstvo — država nešto mora da obezbedi).`,
pr:{p:'Kada su UN usvojile Opštu deklaraciju o pravima čoveka?', o:['1789.','1948.','1991.'], t:1, z:'Posle Drugog svetskog rata, 1948.; 1789. je francuska deklaracija.'}},
{n:'Gde se prava sudaraju', t:`Prava nisu bezgranična — i sudaraju se međusobno. Tu su prave rasprave:
• SLOBODA GOVORA protiv zaštite od mržnje i laži — gde je granica? SAD dopuštaju skoro sve, mnoge evropske zemlje zabranjuju govor mržnje ili negiranje genocida.
• SLOBODA protiv BEZBEDNOSTI — nadzor telefona i interneta zbog terorizma, mere tokom pandemije.
• PRIVATNOST protiv JAVNOG INTERESA.
• UNIVERZALNOST — važe li ista prava svuda, ili su „zapadni izum" koji se nameće drugim kulturama? Kritičari sa raznih strana tvrde ovo drugo; branioci odgovaraju da zabranu mučenja i ropstva traže ljudi u svakoj kulturi.

Kostur: pravo = pravila sa državnom sankcijom; kontinentalno (zakonik) i anglosaksonsko (precedent); ustav na vrhu, ustavni sud ga čuva; vladavina prava, pretpostavka nevinosti; ljudska prava od Magna karte do 1948.

Sledeće: ideologije — zašto se ljudi u politici dele na levo i desno, i šta to zapravo znači.`,
pr:{p:'Koji je primer sudara dva prava?', o:['Pravo na rad i pravo na odmor ne mogu da se sudare','Sloboda govora i zaštita od govora mržnje','Nema sudara prava'], t:1, z:'Gde je granica slobode govora — različite zemlje je povlače različito.'}}
],
kljucno:['Pravo = pravila države sa sankcijom; nije isto što i moral; pozitivizam protiv prirodnog prava.','Kontinentalno pravo (zakonici, Srbija) i anglosaksonsko (precedenti, Engleska, SAD).','Ustav na vrhu hijerarhije; ustavni sud; vladavina prava, pretpostavka nevinosti, nema kazne bez zakona.','Ljudska prava: Magna karta 1215 → 1776 → 1789 → Opšta deklaracija UN 1948; Evropska konvencija i Strazbur.','Prava se sudaraju (govor i mržnja, sloboda i bezbednost); spor oko univerzalnosti.'],
kartice:[
{p:'Šta je vladavina prava?', o:'I vlast mora da poštuje zakon, ne samo građani.'},
{p:'Šta je pretpostavka nevinosti?', o:'Svako je nevin dok mu se krivica ne dokaže.'},
{p:'Koji je bio prvi srpski ustav?', o:'Sretenjski ustav, 1835.'},
{p:'Kada je usvojena Opšta deklaracija o pravima čoveka?', o:'1948, u UN.'},
{p:'Kojoj pravnoj porodici pripada Srbija?', o:'Kontinentalnoj (rimsko-germanskoj) — pravo u zakonicima.'}
],
razgovor:['Gde bi ti povukao granicu slobode govora — šta sme da se kaže, a šta ne?','Da li si nekad video da je nešto zakonito a duboko nepravedno? Šta je čoveku činiti tada?']},
{id:'9-3', naslov:'Ideologije — levica, desnica i ostale',
kuka:{p:'Odakle potiču izrazi „levica" i „desnica"?', o:['Iz Biblije','Iz francuske skupštine 1789 — gde su ko sedeli','Iz engleskog parlamenta 1900'], t:1},
delovi:[
{n:'Levo i desno', t:`Za vreme Francuske revolucije 1789, u skupštini su pristalice kralja i starog poretka sedele DESNO od predsedavajućeg, a pristalice promena LEVO. Imena su ostala.

Najprostije:
• LEVICA naglašava JEDNAKOST i promenu: smanjiti razlike, zaštititi slabije, više uloge za državu u ekonomiji.
• DESNICA naglašava RED, TRADICIJU i (često) slobodno tržište: čuvati ono što se pokazalo dobrim, menjati polako, manje mešanja države u privredu.

Ali jedna linija nije dovoljna. Politikolozi često crtaju DVE OSE:
1. EKONOMSKA — više države ili više tržišta;
2. DRUŠTVENA — više lične slobode ili više autoriteta i tradicije.

Tako neko može biti ekonomski levo a društveno konzervativan, ili ekonomski desno a društveno liberalan. Mnoge stranke u Srbiji i svetu ne staju uredno u jedan kvadrat.

Pravilo ove lekcije: svaku ideologiju prvo opiši onako kako bi je opisao njen pristalica, pa tek onda kritike.`,
pr:{p:'Zašto jedna osa levo–desno nije dovoljna?', o:['Jer postoji i centar','Jer se ekonomski i društveni stavovi ne poklapaju uvek — trebaju dve ose','Jer su sve stranke iste'], t:1, z:'Neko može biti za jaku državu u ekonomiji, a za tradiciju u društvu — jedna linija to ne hvata.'}},
{n:'Liberalizam i konzervativizam', t:`LIBERALIZAM (od lat. liber — slobodan; Džon Lok, 17. vek): u središtu je POJEDINAC i njegova prava — život, sloboda, imovina. Vlast postoji da štiti ta prava i ograničena je ustavom. Iz liberalizma su: podela vlasti, sloboda govora i vere, tržišna ekonomija, ravnopravnost pred zakonom.
Važno: „liberal" danas znači različito. U Evropi „klasični liberal" je za slobodno tržište; u SAD „liberal" je levo od centra (za veću ulogu države). Isti naziv, skoro suprotno značenje.

KONZERVATIVIZAM (Edmund Berk, kraj 18. veka, kao odgovor na Francusku revoluciju): društvo nije mašina koju razum može da rastavi i ponovo sastavi. Tradicija, porodica, vera, nacija i institucije nose mudrost generacija. Menjati — da, ali POSTEPENO i oprezno.
Pristalice: čuva ono što drži društvo na okupu. Kritičari: brani nepravde samo zato što su stare.

Kritika liberalizma: zanemaruje zajednicu i ostavlja slabije da se sami snalaze; odgovor liberala: zajednica ne sme da gazi pojedinca.`,
pr:{p:'Šta je u središtu liberalizma?', o:['Nacija','Pojedinac i njegova prava i slobode','Crkva'], t:1, z:'Lok: vlast postoji da štiti prava pojedinca i mora biti ograničena.'}},
{n:'Socijalizam i socijaldemokratija', t:`Iz industrijske revolucije i bede radnika rodio se SOCIJALIZAM (19. vek): problem je nejednakost koju stvara privatno vlasništvo nad fabrikama; rešenje je društveno vlasništvo i jednakost. Marks je dao najuticajniju verziju.

Socijalizam se podelio na dva puta:
• REVOLUCIONARNI — preuzeti vlast silom i ukinuti kapitalizam (Lenjin, 1917; komunističke partije 20. veka). Vodio je do jednopartijskih država — sa opismenjavanjem i industrijalizacijom, ali i represijom i nestašicama (videli smo u ekonomiji).
• SOCIJALDEMOKRATIJA — kroz izbore, ne revoluciju; zadržati tržište, ali ga ukrotiti: sindikati, osmočasovni radni dan, penzije, javno zdravstvo i školstvo, progresivni porezi. Socijaldemokrate su posle 1945. izgradile državu blagostanja u velikom delu Evrope.

Pristalice levice kažu: većina prava koja radnik danas uzima zdravo za gotovo izborila je levica. Kritičari: visoki porezi i jaka država guše preduzetništvo, a radikalne verzije su završile u diktaturi.`,
pr:{p:'Čime se socijaldemokratija razlikuje od revolucionarnog socijalizma?', o:['Nema razlike','Ide kroz izbore i zadržava tržište, ali ga reguliše i gradi socijalnu državu','Hoće da ukine novac'], t:1, z:'Socijaldemokrati su prihvatili demokratiju i tržište, a borili se za radnička prava i državu blagostanja.'}},
{n:'Nacionalizam, fašizam i populizam', t:`NACIONALIZAM: nacija je osnovna politička zajednica i treba da ima svoju državu. U 19. veku bio je oslobodilački — ujedinjenje Italije i Nemačke, oslobođenje balkanskih naroda od Osmanlija, pa i srpski ustanci. U 20. veku pokazao je i drugo lice: kad se nacija postavi iznad svega, drugi postaju neprijatelji. Ljudi se i danas spore gde je granica između PATRIOTIZMA (ljubav prema svome) i NACIONALIZMA koji isključuje druge.

FAŠIZAM (Musolini, Italija 1922) i NACIZAM (Hitler, Nemačka 1933): krajnji nacionalizam, kult vođe, jednopartijska država, nasilje kao sredstvo, kod nacista rasizam do genocida. Poraženi 1945; danas se gotovo svuda smatraju krajnjim zlom 20. veka, zajedno sa zločinima staljinizma.

POPULIZAM nije puna ideologija, nego STIL: „čist narod" protiv „korumpirane elite", a vođa kaže da on jedini govori u ime naroda. Postoji i levi i desni populizam. Pristalice: daje glas onima koje elite ignorišu. Kritičari: lako prelazi u napad na sudove, medije i opoziciju.

Postoje i drugi: ANARHIZAM (bez države), ZELENA politika (priroda i klima u središtu), LIBERTERIJANIZAM (krajnje minimalna država).`,
pr:{p:'Šta je populizam?', o:['Popularna stranka','Stil politike: „čist narod" protiv „korumpirane elite", sa vođom koji jedini govori u ime naroda','Ideologija samo levice'], t:1, z:'Populizam može biti i levi i desni — prepoznaje se po suprotstavljanju naroda i elite.'}},
{n:'Kako o ovome razmišljati', t:`Nekoliko alata da ne upadneš u zamku:
• Ideologija je PAKET odgovora; ti ne moraš da kupiš ceo paket. Možeš misliti da država treba da obezbedi zdravstvo, a da porodica i tradicija vrede.
• Svaka velika ideologija ima JEZGRO VREDNOSTI koje je dobro (jednakost, sloboda, red, pripadnost) i KRAJNOST u kojoj je postala opasna.
• Jonatan Hajt (psiholog) pokazuje da levica i desnica često ne razlikuju činjenice nego TEŽINU vrednosti: levica više ističe brigu i pravednost, desnica uz to i lojalnost, autoritet i svetost. Zato se svađaju kao da govore različite jezike.
• Test poštenja: možeš li stav protivnika da opišeš tako da bi on rekao „da, to mislim"? Ako ne možeš, još ga ne razumeš.

Kostur: levo/desno iz 1789; dve ose (ekonomija, društvo); liberalizam (pojedinac), konzervativizam (tradicija), socijalizam i socijaldemokratija (jednakost), nacionalizam (nacija), fašizam (krajnost), populizam (stil).

Sledeće: geopolitika — zašto geografija i resursi i dalje određuju ko je jak.`,
pr:{p:'Šta je „test poštenja" u raspravi?', o:['Pobediti protivnika','Opisati njegov stav tako da bi se on u tome prepoznao','Ne razgovarati sa protivnikom'], t:1, z:'Ako ne možeš da opišeš tuđi stav onako kako ga on vidi, raspravljaš sa slamnatim čovekom.'}}
],
kljucno:['Levica/desnica iz 1789; levica — jednakost i promena, desnica — red, tradicija, tržište; bolje dve ose (ekonomska i društvena).','Liberalizam: pojedinac i prava (Lok); „liberal" u Evropi i SAD znači različito; konzervativizam: tradicija i postepena promena (Berk).','Socijalizam: revolucionarni (Lenjin) i socijaldemokratija (izbori, država blagostanja).','Nacionalizam: oslobodilački i isključujući; fašizam i nacizam kao krajnost; populizam = stil „narod protiv elite".','Ne moraš kupiti ceo paket; test poštenja — opiši protivnika tako da se prepozna.'],
kartice:[
{p:'Odakle dolaze nazivi levica i desnica?', o:'Iz rasporeda sedenja u francuskoj skupštini 1789.'},
{p:'Ko je otac konzervativizma i kada?', o:'Edmund Berk, kraj 18. veka.'},
{p:'Šta je socijaldemokratija?', o:'Socijalizam kroz izbore: tržište uz sindikate, socijalnu državu i progresivne poreze.'},
{p:'Koje su tri odlike fašizma?', o:'Krajnji nacionalizam, kult vođe i jednopartijska država nasilja.'},
{p:'Šta je populizam?', o:'Stil politike: „čist narod" protiv „korumpirane elite".'}
],
razgovor:['Koju vrednost iz „suprotnog tabora" od tvog možeš iskreno da poštuješ?','Gde je za tebe granica između ljubavi prema svom narodu i nacionalizma koji isključuje druge?']},
{id:'9-4', naslov:'Geopolitika — geografija, resursi, velike sile',
kuka:{p:'Kroz koji moreuz prolazi otprilike petina svetske nafte?', o:['Gibraltar','Ormuski moreuz (Persijski zaliv)','Bosfor'], t:1},
delovi:[
{n:'Šta je geopolitika', t:`GEOPOLITIKA proučava kako GEOGRAFIJA — položaj, reljef, more, reke, klima, resursi — utiče na moć i politiku država.

Neke stvari se ne menjaju sa vladama: Rusija nema mnogo toplih luka i ima ravnice bez prirodnih prepreka sa zapada (odatle su dolazili Napoleon i Hitler) — pa je vekovima opsednuta tamponskim zonama. Velika Britanija je ostrvo — pa je gradila flotu umesto velike kopnene vojske. SAD imaju dva okeana kao rov i slabe susede — pa decenijama nisu morale da strahuju od invazije.

Klasici geopolitike:
• Alfred Mahan (1890): ko vlada MORIMA, vlada svetom — trgovina ide morem.
• Halford Makinder (1904): ključ je „SRCE SVETA" — unutrašnjost Evroazije; ko vlada njom, vlada svetom.

Ove teorije su uprošćene i ponekad zloupotrebljene (nacisti su ih koristili za „životni prostor"), ali pokazuju trajni značaj karte.`,
pr:{p:'Šta proučava geopolitika?', o:['Samo granice','Kako geografija i resursi utiču na moć i politiku država','Istoriju ratova'], t:1, z:'Položaj, more, reljef i resursi oblikuju strah i ambicije država, bez obzira na to ko vlada.'}},
{n:'Uska grla i resursi', t:`Svetska trgovina prolazi kroz nekoliko USKIH GRLA:
• ORMUSKI MOREUZ — izlaz iz Persijskog zaliva, otprilike petina svetske nafte;
• MALAKSKI MOREUZ — između Malezije i Indonezije, glavni put trgovine Kine;
• SUECKI KANAL — Evropa–Azija; kad se 2021. jedan brod zaglavio, stala je trgovina vredna milijarde dnevno;
• BOSFOR i Dardaneli — jedini izlaz Crnog mora;
• PANAMSKI KANAL.

RESURSI:
• NAFTA i GAS — 20. vek je bio vek nafte; ko ih ima (Saudijska Arabija, Rusija, SAD, Iran) ima uticaj, a ko ih uvozi (Evropa, Kina) ranjiv je. Evropa je to osetila 2022.
• RETKI METALI (litijum, kobalt, retke zemlje) — za baterije, telefone, vetrenjače; Kina dominira njihovom preradom. To je „nafta 21. veka".
• VODA — reke koje teku kroz više država (Nil, Tigar i Eufrat, Ind) izvor su napetosti.
• ČIPOVI — najnapredniji se prave uglavnom na TAJVANU, što ga čini jednom od najosetljivijih tačaka sveta.`,
pr:{p:'Zašto je Tajvan važan u geopolitici čipova?', o:['Zbog nafte','Tamo se pravi većina najnaprednijih čipova na svetu','Zbog ribarstva'], t:1, z:'Koncentracija proizvodnje najnaprednijih čipova čini Tajvan ključnim za celu svetsku privredu.'}},
{n:'Velike sile', t:`VELIKA SILA je država koja može da utiče na zbivanja daleko od svojih granica — vojskom, ekonomijom, tehnologijom, kulturom.

Kratka slika (početkom 2020-ih):
• SAD — najjača vojska i privreda, dolar kao svetska valuta, saveznici po celom svetu, kultura (film, internet).
• KINA — druga privreda sveta (a po paritetu kupovne moći prva), „fabrika sveta", brzo raste i vojno; projekat „Pojas i put" (putevi, luke, železnice — i u Srbiji).
• RUSIJA — najveća teritorija, ogromni resursi i najveći nuklearni arsenal uz SAD; privreda po tržišnim cenama otprilike veličine italijanske.
• EVROPSKA UNIJA — ogromno tržište i pravila koja mora da prati ko hoće da joj prodaje, ali slabija vojno i sporija u odlučivanju.
• INDIJA — najmnogoljudnija zemlja sveta (od 2023), brzo raste.

Posle Hladnog rata (1991) svet je bio JEDNOPOLARAN (SAD); danas se sve češće govori o MULTIPOLARNOM svetu sa više centara moći. Oko toga koliko se to već desilo — mišljenja se razlikuju.`,
pr:{p:'Kako se zove svet sa više centara moći?', o:['Jednopolaran','Multipolaran','Bipolaran'], t:1, z:'Bipolaran je bio Hladni rat (SAD–SSSR), jednopolaran posle 1991, a danas se govori o multipolarnom.'}},
{n:'Kako se objašnjava ponašanje država', t:`Dve velike škole u međunarodnim odnosima:

• REALIZAM: svet nema policiju iznad država — to je ANARHIJA u tehničkom smislu. Zato svaka država pre svega brine o svom opstanku i moći; savezi su privremeni, interesi trajni. Ključ je RAVNOTEŽA SNAGA: kad jedna sila previše ojača, ostale se udružuju protiv nje. Realisti kažu: velike sile se uvek ponašaju kao velike sile.
• LIBERALIZAM (u međunarodnim odnosima): države mogu trajno da sarađuju kroz trgovinu, međunarodne organizacije i pravila; demokratije međusobno skoro nikad ne ratuju; međuzavisnost čini rat skupim.

Iste događaje dve škole tumače različito. Primer: širenje NATO-a na istok — liberali kažu da su te zemlje same birale i da im je to pravo; neki realisti (npr. Džon Miršajmer) tvrde da je to predvidivo izazvalo reakciju Rusije. Treći kažu da je ponašanje Rusije samostalan izbor njenih vođa. Čitaj sve tri strane.

Nuklearno oružje (danas ga ima devet država) dodaje još jedno pravilo: velike sile izbegavaju direktan rat jer bi bio samoubistvo — pa se sukobljavaju posredno.`,
pr:{p:'Šta je osnovna pretpostavka realizma?', o:['Sve države žele mir','Nema vlasti iznad država, pa svaka brine pre svega o svom opstanku i moći','Trgovina sprečava sve ratove'], t:1, z:'Bez „svetske policije" države se oslanjaju na sebe i na ravnotežu snaga.'}},
{n:'Balkan na karti', t:`Zašto je Balkan vekovima bio „bure baruta"?

• RASKRŠĆE: kopneni put između Srednje Evrope i Bliskog istoka. Dolina Morave i Vardara je najlakši prolaz od Dunava do Egejskog mora — njom su išli Rimljani, krstaši, Osmanlije, a danas Koridor 10 i pruga.
• GRANICA CARSTAVA I VERA: Rim i Vizantija, katolički i pravoslavni svet, Osmanlije i Habzburgovci. Svaka velika sila je ovde imala interes — i svoje saveznike.
• PLANINE dele prostor na doline i male zajednice, pa su se narodi i vere izmešali, a male države ostale zavisne od velikih.

Zato se u istoriji Balkana stalno ponavlja obrazac: lokalni sukobi u koje se umešaju velike sile, i velike sile koje balkanske narode koriste kao figure. Sarajevski atentat 1914. je postao povod za Prvi svetski rat upravo zato što su iza Srbije i Austrougarske stajale velike sile.

Kostur: geografija (more, ravnice, ostrva) oblikuje strah i ambiciju; uska grla i resursi (nafta, retki metali, čipovi); velike sile i multipolarni svet; realizam i liberalizam; Balkan kao raskršće.

Sledeće: svet danas — UN, NATO, EU, BRICS, i gde je u svemu tome Srbija.`,
pr:{p:'Zašto je dolina Morave i Vardara geopolitički važna?', o:['Zbog rudnika','Najlakši je kopneni prolaz od Dunava do Egejskog mora','Zbog granice sa Rusijom'], t:1, z:'Rimski putevi, osmanski pohodi i današnji Koridor 10 idu istom dolinom.'}}
],
kljucno:['Geopolitika: geografija i resursi oblikuju moć (Rusija bez toplih luka, Britanija ostrvo, SAD između okeana); Mahan i Makinder.','Uska grla: Ormuz, Malaka, Suec, Bosfor, Panama; resursi: nafta i gas, retki metali, voda, čipovi (Tajvan).','Velike sile: SAD, Kina, Rusija, EU, Indija; od jednopolarnog ka multipolarnom svetu.','Realizam (opstanak, ravnoteža snaga) i liberalizam (saradnja, trgovina, institucije) — isti događaj, različita tumačenja.','Balkan: raskršće puteva, carstava i vera; dolina Morave i Vardara; male države zavisne od velikih.'],
kartice:[
{p:'Šta je Makinderovo „srce sveta"?', o:'Unutrašnjost Evroazije — po njemu ključ svetske moći.'},
{p:'Koji moreuz je najvažniji za naftu?', o:'Ormuski — otprilike petina svetske nafte.'},
{p:'Šta je ravnoteža snaga?', o:'Kad jedna sila previše ojača, ostale se udružuju protiv nje.'},
{p:'Koja zemlja je najmnogoljudnija od 2023?', o:'Indija.'},
{p:'Zašto je Balkan „bure baruta"?', o:'Raskršće puteva i granica carstava i vera, sa interesima velikih sila.'}
],
razgovor:['Kad čitaš vesti o nekom sukobu — da li te ubedljivije zvuči realista („sve je interes") ili liberal („pravila i saradnja")?','Šta misliš: koliko mala zemlja kao Srbija stvarno može da bira, a koliko je bira karta?']},
{id:'9-5', naslov:'Svet danas — UN, NATO, EU, BRICS i Balkan',
kuka:{p:'Koliko država ima pravo veta u Savetu bezbednosti UN?', o:['Sve članice','Pet','Petnaest'], t:1},
delovi:[
{n:'Ujedinjene nacije', t:`UJEDINJENE NACIJE (UN) osnovane su 1945, posle Drugog svetskog rata, da spreče novi svetski rat. Danas imaju 193 države članice; sedište je u Njujorku.

Glavni delovi:
• GENERALNA SKUPŠTINA — sve države, svaka jedan glas; donosi preporuke, ne naređenja.
• SAVET BEZBEDNOSTI — 15 članica, od toga 5 STALNIH sa pravom VETA: SAD, Rusija, Kina, Velika Britanija i Francuska (pobednice Drugog svetskog rata). Samo Savet može da donese obavezujuće odluke — sankcije ili upotrebu sile. Ali dovoljno je da jedna od petorice kaže „ne".
• Agencije: UNICEF (deca), Svetska zdravstvena organizacija, UNESKO (kultura i obrazovanje), UNHCR (izbeglice) i druge.
• MEĐUNARODNI SUD PRAVDE u Hagu (sporovi među državama).

Kritika: veto paralizuje Savet kad je u pitanju interes neke od velikih sila; raspodela moći iz 1945. ne odgovara današnjem svetu (Indija, Brazil, Afrika nemaju stalno mesto). Odbrana: UN su forum na kome i neprijatelji razgovaraju, a agencije svakodnevno spasavaju živote.`,
pr:{p:'Šta znači veto u Savetu bezbednosti?', o:['Sve članice moraju da se slože','Svaka od 5 stalnih članica može sama da blokira odluku','Generalni sekretar ima poslednju reč'], t:1, z:'SAD, Rusija, Kina, Britanija i Francuska — dovoljno je jedno „ne" da odluka padne.'}},
{n:'NATO', t:`NATO (Severnoatlantski savez) osnovan je 1949, u Hladnom ratu, kao vojni savez SAD, Kanade i zapadnoevropskih država protiv SSSR-a. Srž je ČLAN 5: napad na jednu članicu smatra se napadom na sve. (Prvi i jedini put aktiviran posle napada na SAD 11. septembra 2001.)

Posle 1991. NATO se širio na istok — prvo bivše članice Varšavskog pakta, pa baltičke države; Finska (2023) i Švedska (2024) su ušle posle ruskog napada na Ukrajinu. Danas ima 32 članice. U regionu su članice Hrvatska, Slovenija, Albanija, Crna Gora i Severna Makedonija.

Za Srbiju je NATO posebno teška tema: 1999. NATO je, bez odobrenja Saveta bezbednosti UN, 78 dana bombardovao SR Jugoslaviju zbog sukoba na Kosovu. NATO i njegove članice su to obrazlagali humanitarnim razlozima — sprečavanjem progona Albanaca; Srbija, Rusija, Kina i mnogi pravnici smatraju to kršenjem međunarodnog prava i agresijom. Poginulo je i mnogo civila. Obe priče postoje i u Srbiji se pamte različito od zapada.

Srbija je 2007. skupštinskom rezolucijom proglasila VOJNU NEUTRALNOST: ne ulazi ni u NATO ni u druge vojne saveze, ali sa NATO-om sarađuje kroz program Partnerstvo za mir.`,
pr:{p:'Šta je član 5 NATO-a?', o:['Pravo veta','Napad na jednu članicu smatra se napadom na sve','Obaveza da se kupuje američko oružje'], t:1, z:'Kolektivna odbrana — srž saveza; aktiviran samo posle 11. septembra 2001.'}},
{n:'Evropska unija', t:`EVROPSKA UNIJA počela je ekonomski: 1951. šest zemalja (Francuska, Zapadna Nemačka, Italija, Belgija, Holandija, Luksemburg) udružilo je ugalj i čelik — sirovine za rat — da bi rat među njima postao „ne samo nezamisliv, nego i fizički nemoguć". Iz toga su nastali Rimski ugovori (1957), pa MASTRIHT (1993) i ime Evropska unija.

Šta EU jeste: zajedničko tržište (roba, ljudi, novac i usluge kreću se slobodno), zajednička pravila, budžet i fondovi za siromašnije oblasti, i — za većinu članica — zajednički novac, EVRO. Danas 27 članica (Velika Britanija je izašla 2020 — BREGZIT).

Šta EU nije: država. Nema svoju vojsku, a o važnim stvarima (spoljna politika, porezi, proširenje) odlučuje jednoglasno — zato je spora.

SRBIJA je kandidat za članstvo od 2012, a pregovori su počeli 2014. U regionu: Slovenija (2004) i Hrvatska (2013) su članice; Crna Gora, Albanija, Severna Makedonija, BiH, Moldavija i Ukrajina su kandidati. Za Srbiju je jedan od ključnih uslova normalizacija odnosa sa Prištinom. EU je i najveći trgovinski partner i najveći investitor u Srbiji. Podrška članstvu među građanima Srbije poslednjih godina je otprilike podeljena.`,
pr:{p:'Kako je počela Evropska unija?', o:['Kao vojni savez','Udruživanjem uglja i čelika šest zemalja 1951, da rat među njima postane nemoguć','Uvođenjem evra'], t:1, z:'Ekonomsko povezivanje kao put do mira — evro je došao tek 1999/2002.'}},
{n:'BRICS i ostali', t:`BRICS je skraćenica od Brazil, Rusija, Indija, Kina (prvi samit 2009) i Južna Afrika (2010). To nije vojni savez niti zajedničko tržište, nego KLUB velikih zemalja izvan zapadnog kruga koje žele veći glas u svetu — u MMF-u, Svetskoj banci, trgovini, i manje zavisnosti od dolara. Imaju i svoju razvojnu banku.

Od 2024. BRICS se proširio (među novim članicama su Egipat, Etiopija, Iran, Ujedinjeni Arapski Emirati, a 2025. Indonezija) i mnoge zemlje traže da pristupe. Zajedno čine skoro polovinu čovečanstva i veliki deo svetske privrede (oko četvrtine po tržišnim cenama, više po kupovnoj moći).

Slabost: članice imaju vrlo različite interese — Indija i Kina su suparnice, a demokratije i autokratije sede za istim stolom. Pristalice vide BRICS kao početak pravednijeg, multipolarnog sveta; skeptici kao labav klub bez zajedničkog cilja.

Srbija nije članica BRICS-a. Ima dobre odnose sa Kinom (velika ulaganja — Smederevo, Bor, Zrenjanin, putevi) i Rusijom (gas, podrška po pitanju Kosova u Savetu bezbednosti), dok joj je EU glavni ekonomski partner. Ta politika se često opisuje kao „sedenje na više stolica" — pristalice je zovu mudrom, kritičari neodrživom.`,
pr:{p:'Šta je BRICS?', o:['Vojni savez kao NATO','Klub velikih zemalja izvan zapadnog kruga koje traže veći glas u svetu','Zajedničko tržište sa zajedničkim novcem'], t:1, z:'Nema zajedničku vojsku ni tržište — povezuje ih želja za drugačijom raspodelom moći.'}},
{n:'Balkan danas — i kraj oblasti', t:`Kosovo je za Srbiju centralno pitanje spoljne politike. Posle rata 1999. Kosovo je bilo pod upravom UN (Rezolucija 1244). Kosovske institucije su 2008. proglasile nezavisnost. Srbija je ne priznaje i smatra Kosovo delom svoje teritorije po Ustavu; nezavisnost je priznalo oko polovine članica UN (tačan broj je sporan, jer su neke priznanja povukle), među njima SAD i većina država EU, a ne priznaju je, između ostalih, Rusija, Kina, Indija, Brazil i pet članica EU (Španija, Grčka, Kipar, Rumunija, Slovačka). Pregovori uz posredovanje EU traju od 2011.

Ostala otvorena pitanja regiona: unutrašnje uređenje BiH (Dejtonski sporazum, 1995), odnosi naroda posle ratova 1990-ih, odlazak mladih na zapad.

Kostur oblasti „Vlast, pravo i svet":
1. država, oblici vlasti, podela vlasti;
2. pravo, ustav, ljudska prava;
3. ideologije — dve ose, više paketa;
4. geopolitika — karta, resursi, velike sile;
5. organizacije — UN (veto), NATO (član 5), EU (tržište i pravila), BRICS (klub) — i Srbija između.

Za ovakve teme jedno pravilo važi više nego igde: proveri izvor, saslušaj obe strane, i pitaj se ko ima interes da ti nešto kaže baš tako.

Sledeće: umetnost i priče — od pećinskog crteža do Bukovskog.`,
pr:{p:'Kakav je međunarodni status Kosova?', o:['Priznali su ga svi','Nezavisnost je priznalo oko polovine članica UN; Srbija, Rusija, Kina i pet članica EU je ne priznaju','Niko ga nije priznao'], t:1, z:'Pitanje je otvoreno: deo sveta priznaje nezavisnost, deo ne, a pregovori uz posredovanje EU traju od 2011.'}}
],
kljucno:['UN (1945, 193 članice): Generalna skupština i Savet bezbednosti sa 5 stalnih članica i vetom.','NATO (1949): član 5; širenje na istok, 32 članice; bombardovanje 1999 različito se tumači; Srbija vojno neutralna od 2007.','EU: od uglja i čelika (1951) do 27 članica, zajedničko tržište i evro; Srbija kandidat od 2012, pregovori od 2014.','BRICS: klub velikih zemalja van Zapada, proširen od 2024; Srbija nije članica, sarađuje sa EU, Kinom i Rusijom.','Kosovo: nezavisnost 2008, priznata od oko polovine članica UN; Srbija ne priznaje; pregovori uz EU od 2011.'],
kartice:[
{p:'Koje su stalne članice Saveta bezbednosti UN?', o:'SAD, Rusija, Kina, Velika Britanija, Francuska.'},
{p:'Šta je član 5 NATO-a?', o:'Napad na jednu članicu je napad na sve.'},
{p:'Od kada je Srbija vojno neutralna?', o:'Od 2007 (rezolucija Narodne skupštine).'},
{p:'Kako je počela EU?', o:'Zajednicom za ugalj i čelik šest zemalja, 1951.'},
{p:'Od čega dolazi naziv BRICS?', o:'Brazil, Rusija, Indija, Kina, Južna Afrika (South Africa).'}
],
razgovor:['Kako bi ti objasnio strancu zašto je 1999. u Srbiji drugačije zapamćena nego na Zapadu — a da budeš pošten prema obe strane?','Da sutra biraš: EU, neutralnost kakva je sad, ili nešto treće? Šta bi ti presudilo?']}
]},
{id:'10', naziv:'Umetnost i priče', ikona:'🎭', era:'ideje', lekcije:[
{id:'10-1', naslov:'Šta je umetnost i čemu služi',
kuka:{p:'Marsel Dišan je 1917. na izložbu poslao običan pisoar i potpisao ga. Šta se desilo kasnije?', o:['Zaboravljen je kao šala','Stručnjaci su ga 2004. proglasili jednim od najuticajnijih umetničkih dela 20. veka','Zabranjen je zakonom'], t:1},
delovi:[
{n:'Umetnost je stara koliko i mi', t:`Pre nego što smo imali njive, gradove i pismo — crtali smo. Pećinski crteži stari desetine hiljada godina, figurice, ogrlice od školjki, frule od kosti. Nema poznate ljudske kulture bez neke umetnosti: pesme, plesa, priče, ukrasa.

Zašto? Umetnost ne hrani i ne greje. Postoji više objašnjenja (verovatno se dopunjuju):
• POVEZIVANJE — zajedničko pevanje, ples i priča prave od pojedinaca grupu;
• PRIČA KAO VEŽBA — kroz priču proživljavamo tuđe situacije bez rizika, kao letački simulator za život;
• POKAZIVANJE — veština i mašta su znak sposobnosti, kao paunov rep (ovo je spornije);
• IGRA UMA — mozak voli obrasce, ritam i iznenađenje.

Ono što je sigurno: umetnost je jedna od stvari koje nas najdublje čine ljudima.`,
pr:{p:'Šta pokazuju pećinski crteži stari desetine hiljada godina?', o:['Da je umetnost nastala sa gradovima','Da je umetnost starija od poljoprivrede i gradova','Da su samo neki narodi pravili umetnost'], t:1, z:'Lovci-sakupljači su crtali, svirali i pravili nakit — umetnost je stara koliko i moderan čovek.'}},
{n:'Tri odgovora na pitanje „šta je umetnost"', t:`Filozofi su predlagali različite definicije, i svaka hvata deo istine:

1. PODRAŽAVANJE (mimezis) — Platon i Aristotel: umetnost prikazuje svet. Platon joj zato nije verovao (kopija kopije, daleko od istine); Aristotel ju je branio — kroz podražavanje učimo, a tragedija nas pročišćava.
2. IZRAŽAVANJE — Lav Tolstoj (1897): umetnost je kad umetnik u sebi probudi osećanje i prenese ga drugome tako da ga i on oseti. Ako te nije „zarazila" — nije uspela.
3. FORMA — umetnost je ono što nam daje doživljaj kroz oblik, boju, ritam, kompoziciju, čak i kad ništa ne prikazuje (apstraktno slikarstvo, muzika bez reči).

Dišanov pisoar (1917) otvorio je četvrti odgovor: umetnost je ono što SVET UMETNOSTI (umetnici, galerije, kritičari) prihvati kao umetnost i o čemu vodi razgovor. Mnogima je to i danas provokacija, a ne odgovor.`,
pr:{p:'Šta je umetnost po Tolstoju?', o:['Verno podražavanje prirode','Prenošenje osećanja sa umetnika na drugoga, tako da ga i on oseti','Ono što stoji u galeriji'], t:1, z:'Tolstoj: umetnost „zarazi" osećanjem — ako ga ne preneseš, nisi uspeo.'}},
{n:'Čemu služi', t:`Umetnost je kroz istoriju radila mnogo poslova:
• OBRED i vera — ikone, hramovi, crkvena muzika, maske;
• MOĆ — portreti vladara, palate, spomenici, propaganda;
• PAMĆENJE — epovi i pesme koje čuvaju istoriju naroda;
• LEPOTA i zadovoljstvo — ono što nas raduje bez ikakve koristi;
• IZRAŽAVANJE — da kažeš ono što ne može drugačije da se kaže;
• KRITIKA — da pokaže ono što društvo neće da vidi (Gojine slike rata, satira, angažovana književnost);
• SMISAO — pomaže da preživimo ono što ne razumemo: smrt, gubitak, ljubav.

Aristotel je za tragediju uveo reč KATARZA — pročišćenje: gledajući tuđu patnju, oslobađamo se sopstvenog straha i sažaljenja i izlazimo lakši. Zašto volimo tužne priče i mračne pesme? Možda baš zato.`,
pr:{p:'Šta je katarza?', o:['Vrsta pozorišta','Pročišćenje — oslobađanje osećanja kroz doživljaj tuđe patnje u delu','Kraj priče'], t:1, z:'Aristotel: tragedija budi strah i sažaljenje i tako nas od njih pročišćava.'}},
{n:'Ukus — da li je lepota u oku posmatrača', t:`Dva stara stava:
• Lepota je SUBJEKTIVNA — „o ukusima ne vredi raspravljati".
• Ali: neke knjige, slike i muzika vekovima pogađaju ljude iz različitih kultura. Šekspir se igra i u Japanu, Bah se sluša u Africi.

Filozof Dejvid Hjum (18. vek) predložio je srednji put: ukus je lični, ali nisu svi ukusi jednako izvežbani. Dobar sud ima onaj ko je mnogo video, poredi, nema predrasuda i pažljivo gleda — kao što iskusni degustator vina primeti ono što početnik ne oseti. Vreme je najbolji kritičar: ono što preživi vekove verovatno ima nešto u sebi.

Imanuel Kant je dodao: kad kažemo „ovo je lepo", ne mislimo samo „meni se sviđa" — nekako očekujemo da bi i drugi trebalo da se slože. Zato se o ukusu ipak raspravlja.

Praktično: „ne sviđa mi se" i „nije dobro" nisu ista rečenica. Možeš da poštuješ delo koje ne voliš.`,
pr:{p:'Šta je Hjum rekao o ukusu?', o:['Svi ukusi su jednako dobri','Ukus je lični, ali izvežban ukus — iskustvo, poređenje, pažnja — daje bolji sud','Lepotu određuje crkva'], t:1, z:'Kao kod degustatora: iskustvo i pažnja daju pouzdaniji sud, a vreme prosuđuje najbolje.'}},
{n:'Kako gledati — i šta sledi', t:`Nekoliko pitanja koja otvaraju skoro svako delo (sliku, pesmu, film, knjigu):
1. Šta VIDIM / čujem? (pre tumačenja — samo opiši)
2. Šta OSEĆAM i čime je to postignuto? (boja, ritam, reč, tišina)
3. ŠTA HOĆE da kaže — i šta kaže a da možda nije hteo?
4. KADA i GDE je nastalo, i protiv čega je pisano ili slikano?
5. Šta bi NEDOSTAJALO da ga nema?

Kostur lekcije: umetnost je stara koliko i mi; definicije — podražavanje, izražavanje, forma, „svet umetnosti"; služi obredu, moći, pamćenju, lepoti, kritici i smislu; katarza; ukus je ličan, ali se vežba.

Sledeće: najstarije priče — mit, ep i tragedija — od kojih je sve krenulo. (I ispostaviće se da su srpski guslari pomogli da se razume Homer.)`,
pr:{p:'Koje je prvo pitanje pre tumačenja dela?', o:['Koliko vredi','Šta zaista vidim ili čujem — samo opis','Ko je autor'], t:1, z:'Prvo pažljivo opiši; tumačenje bez gledanja je nagađanje.'}}
],
kljucno:['Umetnost postoji u svakoj kulturi i starija je od gradova; objašnjenja: povezivanje, priča kao vežba, pokazivanje, igra uma.','Definicije: podražavanje (Platon, Aristotel), izražavanje (Tolstoj), forma, „svet umetnosti" (Dišan 1917).','Služi obredu, moći, pamćenju, lepoti, izražavanju, kritici i smislu; katarza = pročišćenje.','Ukus je ličan, ali se vežba (Hjum); „ne sviđa mi se" nije isto što i „nije dobro".','Gledanje: opiši → oseti → šta kaže → kad i protiv čega → šta bi falilo.'],
kartice:[
{p:'Šta je mimezis?', o:'Podražavanje — umetnost kao prikaz sveta (Platon, Aristotel).'},
{p:'Kako Tolstoj definiše umetnost?', o:'Kao prenošenje osećanja sa umetnika na drugoga.'},
{p:'Šta je Dišan izložio 1917. i zašto je važno?', o:'Pisoar („Fontana") — otvorio pitanje da li je umetnost ono što svet umetnosti prihvati.'},
{p:'Šta je katarza?', o:'Pročišćenje osećanja kroz doživljaj tuđe patnje u delu.'},
{p:'Šta je Hjum rekao o ukusu?', o:'Ukus je ličan, ali izvežban ukus daje bolji sud; vreme je najbolji kritičar.'}
],
razgovor:['Kad pišeš — koji od tri odgovora je tvoj: podražavaš, izražavaš ili gradiš formu? Ili sve troje?','Zašto, po tebi, ljudi vole tužne i mračne priče? Šta ti daje Bukovski što ti vesela knjiga ne da?']},
{id:'10-2', naslov:'Mit, ep i tragedija',
kuka:{p:'Koji je najstariji poznati veliki književni ep na svetu?', o:['Ilijada','Ep o Gilgamešu','Mahabharata'], t:1},
delovi:[
{n:'Mit — priča koja objašnjava', t:`MIT je sveta priča zajednice o postanku sveta, bogovima, prvim ljudima i junacima. Ne laž (to je kasnije značenje reči), nego način da se objasni: zašto postoji smrt, odakle zlo, zašto se smenjuju godišnja doba, zašto je naš narod ovde.

Mitovi rade četiri posla:
• objašnjavaju svet (Prometej donosi vatru ljudima);
• daju smisao obredima i praznicima;
• uče moralu (Ikar koji je leteo previsoko);
• drže zajednicu na okupu — „to smo mi".

Iste slike se ponavljaju širom sveta: POTOP (Mesopotamija, Biblija, Indija), bogovi koji umiru i vaskrsavaju, junak koji silazi u podzemlje, krađa vatre. Psiholog Karl Jung je mislio da postoje zajednički ARHETIPOVI u ljudskoj psihi; drugi objašnjavaju sličnosti preuzimanjem i sličnim iskustvima.

Džozef Kembel je u knjizi „Junak sa hiljadu lica" (1949) opisao MONOMIT — zajednički kostur junačke priče: poziv → odlazak → iskušenja → najveća proba → povratak promenjen. Holivud ga je kasnije svesno koristio (Ratovi zvezda). Kritičari kažu da je pojednostavio ogromnu raznolikost mitova.`,
pr:{p:'Šta je Kembelov monomit?', o:['Mit jednog naroda','Zajednički kostur junačke priče: poziv, odlazak, iskušenja, povratak promenjen','Mit o potopu'], t:1, z:'Kembel je u mitovima sveta našao isti obrazac junačkog puta; Holivud ga koristi i danas.'}},
{n:'Gilgameš i Homer', t:`Najstariji veliki ep je EP O GILGAMEŠU iz Mesopotamije — najstarije pesme o njemu zapisane su pre oko 4.000 godina. Gilgameš, moćni kralj Uruka, gubi prijatelja Enkidua i, užasnut smrću, kreće u potragu za besmrtnošću. Ne nalazi je. Vraća se i shvata da ono što ostaje — jesu grad koji je sagradio i priča o njemu. U epu postoji i priča o POTOPU, veoma slična biblijskoj o Noju.

HOMER (Grčka, verovatno 8. vek p. n. e.):
• ILIJADA — nekoliko nedelja Trojanskog rata; Ahilejev gnev, smrt Hektora. Ep o slavi, ratu i ceni slave.
• ODISEJA — Odisejev desetogodišnji povratak kući na Itaku, ženi Penelopi. Ep o lukavstvu, lutanju i povratku.

Iz Indije: MAHABHARATA (najduži ep na svetu) i RAMAJANA; iz Persije — Ferdusijeva „Šahnama".

Svi veliki epovi pitaju isto: šta je junaštvo, šta je smrt, šta ostaje posle nas.`,
pr:{p:'Šta Gilgameš na kraju shvata?', o:['Da je postao besmrtan','Da besmrtnosti nema — ostaje ono što si stvorio i priča o tebi','Da su bogovi zli'], t:1, z:'Ne nalazi biljku besmrtnosti; vraća se Uruku i u gradu i priči vidi ono što traje.'}},
{n:'Usmena tradicija — i srpski guslari', t:`Homer verovatno nije „pisao" u našem smislu. Njegovi epovi su nastali u USMENOJ tradiciji — pevači su ih vekovima pevali napamet, svaki put malo drugačije, i tek kasnije su zapisani.

Kako se to zna? Ovde dolazimo mi. Američki naučnici MILMAN PERI i ALBERT LORD su 1930-ih putovali po Jugoslaviji i snimali GUSLARE — poslednju živu evropsku tradiciju dugih usmenih epova. Videli su kako pevač, ne znajući da čita, peva pesme od hiljada stihova: služi se gotovim FORMULAMA („a na noge lake skočio", „bijela vila", „knjigu piše"), ponovljenim scenama i ritmom deseterca, i svaki put iznova sklapa pesmu. Isti alati se vide kod Homera („ružoprsta Zora", „brzonogi Ahilej"). Guslar Avdo Međedović spevao im je ep duži od Odiseje.

Srpske epske pesme sakupio je VUK KARADŽIĆ početkom 19. veka; divili su im se Gete i braća Grim. Ciklusi: pre Kosova, KOSOVSKI (Lazar, Miloš Obilić, Kosovka devojka), MARKO KRALJEVIĆ, hajduci i uskoci, ustanci. U epu je istorija pretvorena u mit — Marko Kraljević je istorijski bio turski vazal, a u pesmi je junak koji pije vino sa šarcem.`,
pr:{p:'Kako su srpski guslari pomogli nauci o Homeru?', o:['Preveli su Homera','Peri i Lord su na njima videli kako se dugi ep peva napamet uz formule — i tako objasnili Homera','Napisali su Ilijadu'], t:1, z:'Formule, ponovljene scene i ritam koje su koristili guslari nalaze se i kod Homera — dokaz usmenog nastanka.'}},
{n:'Grčka tragedija', t:`U Atini 5. veka p. n. e. iz obreda u čast boga Dionisa nastala je TRAGEDIJA. Tri velika pisca:
• ESHIL — „Orestija": krvna osveta koja se prenosi kroz pokolenja dok je ne prekine sud;
• SOFOKLE — „Kralj Edip" (čovek koji bežeći od proročanstva upravo njega ispuni: ubije oca i oženi majku, ne znajući) i „Antigona" (sestra koja sahranjuje brata protivno kraljevoj zabrani — božji zakon protiv državnog);
• EURIPID — „Medeja": ljudska strast, prevara i osveta; najmoderniji od trojice.

Aristotel je u „Poetici" opisao šta tragediju čini dobrom:
• junak nije ni sasvim dobar ni sasvim zao, i pada zbog GREŠKE (hamartija), ne zbog zloće;
• OBRT (peripetija) — sreća se okrene u nesreću;
• PREPOZNAVANJE — junak shvati istinu, prekasno;
• i na kraju KATARZA kod gledalaca.

Tragedija ne kaže „zli su kažnjeni". Kaže nešto teže: i dobri propadaju — zbog sudbine, slepila, sopstvene veličine.`,
pr:{p:'Zašto pada tragični junak po Aristotelu?', o:['Jer je zao','Zbog greške (hamartija), a ne zbog zloće','Slučajno'], t:1, z:'Junak je kao mi — ni svetac ni zlikovac — pa nas njegov pad pogađa i pročišćava.'}},
{n:'Šta je ostalo — i kraj', t:`Mit, ep i tragedija nisu muzejski predmeti. Žive u svemu:
• Edipov kompleks — Frojd je uzeo ime iz Sofokla;
• „Ahilova peta", „Trojanski konj" (i kompjuterski virus), „odiseja", „Pandorina kutija", „sizifovski posao";
• svaka priča o povratku kući, svaka priča o junaku koji zna da će izgubiti, a ide — od Odiseje do vesterna i kriminalističke priče.

I srpska tradicija: „kosovski zavet" — izbor carstva nebeskog umesto zemaljskog — oblikovao je kako mnogi generacijama razumeju poraz, žrtvu i čast. Njegoš, Andrić, Pekić i mnogi drugi su razgovarali sa njim, slagali se i svađali.

Kostur lekcije: mit objašnjava svet i drži zajednicu; Kembelov monomit; Gilgameš — prva velika priča o smrti; Homer i usmena tradicija (Peri, Lord i guslari); tragedija — dobri ljudi koji padaju, i katarza.

Sledeće: roman — mladi oblik koji je od svih ovih starih priča napravio unutrašnji svet pojedinca.`,
pr:{p:'Odakle je Frojd uzeo naziv „Edipov kompleks"?', o:['Iz Biblije','Iz Sofoklove tragedije „Kralj Edip"','Iz Homera'], t:1, z:'Edip, ne znajući, ubija oca i ženi se majkom — Frojd je tako nazvao dečje osećanje prema roditeljima.'}}
],
kljucno:['Mit je sveta priča koja objašnjava svet, daje smisao obredima, uči moralu i drži zajednicu; monomit (Kembel).','Gilgameš (Mesopotamija, oko 4.000 godina) — prva velika priča o smrti i prijateljstvu; Homer: Ilijada i Odiseja.','Usmena tradicija: Peri i Lord su na srpskim guslarima (formule, deseterac) objasnili kako je nastao Homer; Vuk sakupio epske pesme.','Grčka tragedija: Eshil, Sofokle (Edip, Antigona), Euripid; Aristotel: greška, obrt, prepoznavanje, katarza.','Mit i ep žive u jeziku i pričama danas (Edipov kompleks, Trojanski konj, kosovski zavet).'],
kartice:[
{p:'Koji je najstariji veliki ep i o čemu je?', o:'Ep o Gilgamešu — kralj koji posle smrti prijatelja traži besmrtnost i ne nalazi je.'},
{p:'Koja dva epa se pripisuju Homeru?', o:'Ilijada i Odiseja.'},
{p:'Ko su Peri i Lord i šta su otkrili?', o:'Američki naučnici koji su 1930-ih na guslarima pokazali kako se usmeni ep peva pomoću formula — ključ za Homera.'},
{p:'Ko su tri velika grčka tragičara?', o:'Eshil, Sofokle, Euripid.'},
{p:'Šta je hamartija?', o:'Tragična greška junaka koja dovodi do pada.'}
],
razgovor:['Koji mit ili epski lik ti je najbliži, i zašto baš on?','Tragedija kaže da i dobri propadaju. Tvoje priče imaju gorko-slatke krajeve — šta je, po tebi, razlika između tragedije i obične nesreće u priči?']},
{id:'10-3', naslov:'Roman i epohe književnosti u jednoj liniji',
kuka:{p:'Koji se roman najčešće naziva prvim modernim romanom Evrope?', o:['„Rat i mir"','„Don Kihot" (1605)','„Ana Karenjina"'], t:1},
delovi:[
{n:'Šta je roman', t:`ROMAN je duga priča u prozi o izmišljenim ljudima — ali najvažnije: o UNUTRAŠNJEM svetu pojedinca. Ep je pevao o junaku i narodu; roman priča o običnom čoveku, njegovim mislima, sumnjama, lažima i promenama.

Prvi veliki „roman" po nekim merilima je japanska „PRIČA O GENĐIJU" (Murasaki Šikibu, oko 1000. godine). U Evropi se za prvi moderni roman najčešće uzima SERVANTESOV „DON KIHOT" (1605. i 1615): siromašni plemić koji je od čitanja viteških romana poludeo, polazi u svet da bude vitez — i sve vreme se sudara sa stvarnošću. Smešno i tužno istovremeno; ruga se starim pričama, a stvara novu.

Zašto roman cveta baš u novom veku? Štamparija i jeftine knjige, rast gradova i srednjeg sloja, više pismenih — i više ljudi koji imaju privatan život vredan pričanja.`,
pr:{p:'Po čemu se roman najviše razlikuje od epa?', o:['Roman je kraći','Roman priča o unutrašnjem svetu običnog pojedinca, ep o junaku i narodu','Roman je uvek u stihu'], t:1, z:'Ep peva o junaštvu zajednice; roman ulazi u glavu jednog čoveka.'}},
{n:'Od renesanse do romantizma', t:`Velike epohe se smenjuju, i svaka je delom pobuna protiv prethodne.

• RENESANSA (15–16. vek): čovek u centru, povratak antici. U književnosti — ŠEKSPIR (Hamlet, Magbet, Kralj Lir, Romeo i Julija): ljudska duša u svoj svojoj protivrečnosti. Kod nas: dubrovačka književnost (Marin Držić).
• BAROK (17. vek): kontrasti, prolaznost, raskoš i strah od smrti.
• KLASICIZAM i PROSVETITELJSTVO (17–18. vek): red, razum, pravila; satira (Volter, „Kandid"; Svift, „Guliverova putovanja"). Kod nas Dositej Obradović.
• ROMANTIZAM (kraj 18. – sredina 19. veka): pobuna protiv razuma — OSEĆANJE, priroda, mašta, narod, buntovni pojedinac. Gete (Verter), Bajron, Puškin, Igo. Romantizam je otkrio narodnu poeziju i naciju. Kod nas: NJEGOŠ („Gorski vijenac", 1847), Branko Radičević, i Vukov rad.`,
pr:{p:'Šta je u središtu romantizma?', o:['Razum i pravila','Osećanje, priroda, mašta, narod i buntovni pojedinac','Prikaz društva kakvo jeste'], t:1, z:'Romantizam je pobuna protiv prosvetiteljskog razuma; tu su Bajron, Puškin i Njegoš.'}},
{n:'Realizam — veliki 19. vek', t:`Sredinom 19. veka, REALIZAM: prikaži društvo i ljude onakve kakvi jesu — novac, klase, brak, posao, preljube, siromaštvo. Roman postaje ogledalo celog društva.
• BALZAK — „Ljudska komedija": stotine likova Pariza, sve se vrti oko novca;
• FLOBER — „Gospođa Bovari": žena koja je čitala previše romana i ne može da podnese običan život (nešto kao Don Kihot, samo bez smeha);
• DIKENS — siromašni London, deca u fabrikama;
• TOLSTOJ — „Rat i mir", „Ana Karenjina";
• DOSTOJEVSKI — „Zločin i kazna", „Braća Karamazovi": realizam koji silazi u podrum duše — krivica, vera, sumnja, zločin. Za mnoge pisce 20. veka on je preteča moderne psihologije u književnosti.

Kod nas: Borisav Stanković („Nečista krv"), Laza Lazarević, Stevan Sremac („Zona Zamfirova"), Radoje Domanović (satira).

Iz realizma je izrastao NATURALIZAM (Zola): čovek kao proizvod nasleđa i sredine, bez ulepšavanja — i bede i prljavštine.`,
pr:{p:'Šta je bio cilj realizma?', o:['Bekstvo u maštu','Prikazati društvo i ljude onakve kakvi jesu','Pisati samo u stihu'], t:1, z:'Balzak, Flober, Tolstoj, Dostojevski — novac, klase, brak i duša, bez romantičnog ulepšavanja.'}},
{n:'Modernizam i posle', t:`Početkom 20. veka — Frojd, Ajnštajn, Prvi svetski rat — svet više ne izgleda čvrsto. Književnost to oseća. MODERNIZAM:
• TOK SVESTI — misli onako kako zaista teku, bez reda (Džems DŽOJS, „Uliks", 1922; Virdžinija VULF);
• PRUST — „U traganju za izgubljenim vremenom": kolačić umočen u čaj vraća celo detinjstvo;
• KAFKA — „Proces", „Preobražaj": čovek u apsurdnom svetu koji ga melje bez objašnjenja;
• kod nas: Miloš CRNJANSKI („Seobe", „Dnevnik o Čarnojeviću"), Rastko Petrović.

Posle 1945: egzistencijalizam (Kami, „Stranac"), pa POSTMODERNIZAM — igra sa samom pričom, citatima, više istina (Borhes, Eko, „Ime ruže"; kod nas Milorad PAVIĆ, „Hazarski rečnik", roman-leksikon koji se čita kojim god redom). MAGIJSKI REALIZAM: Markes, „Sto godina samoće" (1967) — čuda ispričana kao svakodnevica.

Američka linija koju dobro znaš: HEMINGVEJ (kratka rečenica, ono najvažnije prećutano — „ledeni breg"), pa Bukovski i Karver — ogoljena svakodnevica, rad, piće, usamljenost.

Srpski nobelovac: IVO ANDRIĆ (Nobelova nagrada 1961; „Na Drini ćuprija", „Prokleta avlija"). I Danilo KIŠ („Grobnica za Borisa Davidoviča", „Bašta, pepeo").`,
pr:{p:'Šta je „tok svesti"?', o:['Naučni opis mozga','Tehnika koja prikazuje misli onako kako zaista teku, bez reda','Vrsta rime'], t:1, z:'Džojs i Vulf pišu misao kako skače — modernizam ulazi još dublje u glavu.'}},
{n:'Linija u jednoj rečenici — i kraj', t:`Da se zapamti kao kostur:
ep (zajednica, junak) → renesansa (čovek u centru, Šekspir) → barok i klasicizam (prolaznost, pa red) → ROMANTIZAM (osećanje, pobuna, narod) → REALIZAM (društvo kakvo jeste, novac i duša) → MODERNIZAM (svet se raspada, tok svesti, apsurd) → POSTMODERNIZAM (igra sa pričom, više istina).

Svaka epoha je pobuna protiv prethodne — romantizam protiv razuma, realizam protiv romantičnog ulepšavanja, modernizam protiv realističkog „pouzdanog pripovedača".

Za pisca, nekoliko alata koje je roman izmislio:
• PRIPOVEDAČ — ko priča? (sveznajući, ja-pripovedač, nepouzdani pripovedač koji laže ili ne zna);
• TAČKA GLEDIŠTA — kroz čije oči gledamo;
• PODTEKST — ono što se ne kaže (Hemingvej, Čehov);
• VREME — linearno, unazad, isprekidano.

Sledeće: slike i zgrade — kako su se kroz iste epohe menjali slikarstvo i arhitektura.`,
pr:{p:'Šta je nepouzdani pripovedač?', o:['Pripovedač koji ne zna pravopis','Pripovedač kome čitalac ne može potpuno da veruje — laže, greši ili ne vidi','Sveznajući pripovedač'], t:1, z:'Modernizam je razbio poverenje u pripovedača — čitalac mora sam da sklopi istinu.'}}
],
kljucno:['Roman = unutrašnji svet pojedinca; Genđi (oko 1000), u Evropi „Don Kihot" (1605/1615).','Renesansa (Šekspir) → barok → klasicizam i prosvetiteljstvo → romantizam (osećanje, narod; Njegoš 1847).','Realizam: Balzak, Flober, Dikens, Tolstoj, Dostojevski; kod nas Stanković, Sremac, Domanović.','Modernizam: Džojs, Vulf, Prust, Kafka, Crnjanski; posle 1945: egzistencijalizam, postmodernizam (Pavić), magijski realizam (Markes); Hemingvej → Bukovski i Karver.','Andrić — Nobel 1961; alati romana: pripovedač, tačka gledišta, podtekst, vreme.'],
kartice:[
{p:'Ko je napisao „Don Kihota" i kada?', o:'Servantes, 1605. i 1615.'},
{p:'Koje su glavne odlike romantizma?', o:'Osećanje, priroda, mašta, narod, buntovni pojedinac.'},
{p:'Šta je realizam u književnosti?', o:'Prikaz društva i ljudi onakvih kakvi jesu (19. vek).'},
{p:'Ko je dobio Nobelovu nagradu za književnost iz Srbije i kada?', o:'Ivo Andrić, 1961.'},
{p:'Šta je Hemingvejev „ledeni breg"?', o:'Najvažnije ostaje ispod površine — prećutano, u podtekstu.'}
],
razgovor:['Gde bi u ovoj liniji smestio sebe kao pisca — kojoj epohi pripada tvoj glas?','Bukovski i Karver dolaze iz realizma, a ne iz modernizma. Šta misliš, zašto im je baš ogoljena svakodnevica bila dovoljna?']},
{id:'10-4', naslov:'Slikarstvo i arhitektura kroz epohe',
kuka:{p:'Fresku „Beli anđeo" mnogi smatraju jednim od remek-dela evropskog srednjeg veka. Gde se nalazi?', o:['U Rimu','U manastiru Mileševa','U Parizu'], t:1},
delovi:[
{n:'Antika i srednji vek', t:`ANTIKA:
• EGIPAT — piramide i hramovi za večnost; ljudi naslikani uvek isto, glava iz profila, oko spreda — slika nije trebalo da bude „verna", nego jasna i večna.
• GRČKA — ideal lepote i proporcije: skulpture idealnih tela; hramovi sa STUBOVIMA (dorski — prost, jonski — sa uvojcima, korintski — sa lišćem). Partenon u Atini.
• RIM — inženjeri: LUK, SVOD, KUPOLA i beton. Panteon u Rimu ima betonsku kupolu staru skoro 1.900 godina, i danas najveću od nearmiranog betona na svetu.

SREDNJI VEK:
• VIZANTIJA — mozaici sa zlatnom pozadinom, IKONE: ne prikaz sveta nego prozor u nebo, zato ravne, svečane, bez dubine.
• SRPSKO SREDNJOVEKOVNO SLIKARSTVO — freske u manastirima: „BELI ANĐEO" u Mileševi (13. vek), Sopoćani (oko 1265) — freske tako žive da ih istoričari umetnosti ubrajaju u vrh evropske umetnosti svog vremena, pre italijanske renesanse. Studenica, Dečani i Gračanica su pod zaštitom UNESKA.
• ZAPAD — ROMANIKA (debeli zidovi, mali prozori, polukružni lukovi) pa GOTIKA (od 12. veka): šiljati luk i potporni lukovi omogućili su visoke, tanke zidove i ogromne VITRAŽE — katedrala puna svetla (Notr Dam, Šartr, Keln).`,
pr:{p:'Šta je gotika omogućila u arhitekturi?', o:['Niske zgrade debelih zidova','Visoke katedrale sa tankim zidovima i ogromnim vitražima — puno svetla','Kupolu od betona'], t:1, z:'Šiljati luk i potporni lukovi rasteretili su zidove, pa su mogli da budu visoki i staklom ispunjeni.'}},
{n:'Renesansa i barok', t:`RENESANSA (Italija, 15–16. vek) — dva otkrića:
• LINEARNA PERSPEKTIVA (Bruneleski, oko 1420): matematički način da se na ravnoj površini nacrta dubina. Slika postaje prozor u svet, a ne ikona.
• čovek, telo i priroda proučeni do kraja: anatomija, svetlo, senka.
Velika trojka: LEONARDO („Mona Liza", „Tajna večera"), MIKELANĐELO (David, tavanica Sikstinske kapele 1508–1512), RAFAEL („Atinska škola"). Na severu: Direr, Van Ajk (ulje na platnu).

BAROK (17. vek) — drama i pokret: snažan kontrast svetla i tame, kao reflektor u mraku.
• KARAVAĐO — svetac kao obični čovek prljavih stopala, osvetljen iz mraka;
• REMBRANT — autoportreti kroz ceo život, do starosti, bez ulepšavanja;
• VELASKES — „Dvorske dame";
• arhitektura: Trg Svetog Petra, Versaj — moć i raskoš.`,
pr:{p:'Šta je linearna perspektiva?', o:['Slikanje svetlim bojama','Matematički način da se na ravnoj slici prikaže dubina','Slikanje na zidu'], t:1, z:'Bruneleski je oko 1420. pokazao kako linije teže tački nestajanja — slika postaje prozor.'}},
{n:'19. vek — od akademije do impresionizma', t:`Do sredine 19. veka slikarstvom vladaju AKADEMIJE: istorijske i mitološke scene, savršena tehnika.

• ROMANTIZAM — osećanje i drama: Delakroa („Sloboda predvodi narod"), Turner (oluje i svetlost), Goja (užasi rata).
• REALIZAM — Kurbe: slikaj radnike i sahrane na selu, ne bogove.

Onda je stigla FOTOGRAFIJA (1839) — ona je verno prikazivanje uradila bolje i jeftinije. Slikarstvo je moralo da pita: čemu onda ja?

Odgovor je bio IMPRESIONIZAM. Mone, Renoar, Dega slikaju napolju, brzo, sitnim potezima čiste boje — ne predmet, nego SVETLO i trenutni utisak. Ime dolazi od Moneove slike „Impresija, izlazak sunca" (1872); kritičar je to mislio podrugljivo. Prva njihova izložba bila je 1874.

POSTIMPRESIONISTI idu dalje, svaki na svoju stranu: VAN GOG (boja kao osećanje — „Zvezdana noć"; za života prodao jedva neku sliku), SEZAN (priroda svedena na valjak, kuglu i kupu — put ka kubizmu), Gogen.

Kod nas: Paja Jovanović (akademski realizam, „Seoba Srba"), Nadežda Petrović (fovizam, snažna boja; umrla kao bolničarka 1915).`,
pr:{p:'Zašto je fotografija promenila slikarstvo?', o:['Jer je zabranila slikanje','Jer je verno prikazivanje radila bolje, pa je slikarstvo tražilo novo — svetlo, utisak, osećanje','Nije ga promenila'], t:1, z:'Kad mašina beleži stvarnost, slikar pita šta samo on može — i nastaju impresionizam i dalje.'}},
{n:'20. vek', t:`Za pedeset godina slikarstvo je napustilo prikaz sveta:
• KUBIZAM (Pikaso, Brak, oko 1907): predmet razbijen i viđen iz više uglova odjednom. Pikasova „Gernika" (1937) — bombardovanje grada u Španiji, krik protiv rata.
• APSTRAKCIJA (Kandinski, Maljevič, Mondrijan): slika ne prikazuje ništa — samo boja, linija, oblik, kao muzika. Maljevičev „Crni kvadrat" (1915).
• NADREALIZAM (Dali, Magrit): san i nesvesno po Frojdu — satovi koji se tope.
• APSTRAKTNI EKSPRESIONIZAM (Polok — boja prolivena po platnu na podu), pa POP-ART (Endi Vorhol — Kola, Merilin, konzerva supe: umetnost od reklame i masovne kulture).

Kod nas: Sava Šumanović, Milena Pavlović Barili, Petar Lubarda, Marina Abramović (umetnost performansa — telo kao delo).

Česta rečenica pred apstraktnom slikom: „to bi i moje dete nacrtalo". Odgovor iz lekcije o umetnosti: pitanje nije samo „može li se nacrtati", nego zašto je to bilo novo tada i šta je otvorilo.`,
pr:{p:'Šta radi kubizam?', o:['Slika svetlo u prirodi','Razbija predmet i prikazuje ga iz više uglova odjednom','Slika snove'], t:1, z:'Pikaso i Brak — kao da obilaziš predmet i sve strane vidiš istovremeno.'}},
{n:'Moderna arhitektura — i kraj', t:`Čelik, armirani beton, staklo i lift (krajem 19. veka) promenili su grad: prvi NEBODERI u Čikagu i Njujorku.

Moderna arhitektura (20. vek) kaže: dosta ukrasa.
• „FORMA PRATI FUNKCIJU" (Luis Salivan): zgrada izgleda kako je to potrebno za ono čemu služi.
• BAUHAUS (Nemačka, 1919) — škola koja je spojila umetnost, zanat i industriju: prost, funkcionalan dizajn koji danas vidiš i u IKEA nameštaju.
• LE KORBIZJE — „kuća je mašina za stanovanje"; zgrade na stubovima, ravni krovovi, trake prozora. Njegove ideje su oblikovale i NOVI BEOGRAD: blokovi, zelenilo između, odvojeni saobraćaj; „Geneks kula" i Muzej savremene umetnosti su primeri jugoslovenskog modernizma koji danas izazivaju divljenje stranih arhitekata.
• Pa reakcija: POSTMODERNA arhitektura (ukras, boja, ironija se vraćaju) i danas „zelena" arhitektura.

Kostur lekcije: Egipat (večnost) → Grčka (proporcija) → Rim (luk i kupola) → ikona i freska (nebo) → gotika (svetlo) → renesansa (perspektiva) → barok (drama) → impresionizam (svetlo i trenutak, posle fotografije) → kubizam i apstrakcija (razbijanje prikaza) → moderna arhitektura (funkcija).

Sledeće: muzika — od Baha do roka.`,
pr:{p:'Šta znači „forma prati funkciju"?', o:['Zgrada mora biti lepa','Zgrada treba da izgleda onako kako zahteva ono čemu služi, bez suvišnog ukrasa','Svaka zgrada mora imati stubove'], t:1, z:'Moto moderne arhitekture (Salivan): prvo namena, pa iz nje oblik.'}}
],
kljucno:['Antika: Egipat (večnost), Grčka (proporcija, stubovi), Rim (luk, svod, kupola — Panteon).','Srednji vek: ikona i mozaik; srpske freske (Beli anđeo, Sopoćani) u vrhu evropske umetnosti; romanika → gotika (vitraži, svetlo).','Renesansa: perspektiva, Leonardo, Mikelanđelo, Rafael; barok: svetlo i tama (Karavađo, Rembrant).','Posle fotografije (1839): impresionizam (Mone, 1872/1874), postimpresionizam (Van Gog, Sezan); 20. vek: kubizam, apstrakcija, nadrealizam, pop-art.','Moderna arhitektura: forma prati funkciju, Bauhaus, Le Korbizje — i Novi Beograd.'],
kartice:[
{p:'Gde je freska „Beli anđeo"?', o:'U manastiru Mileševa (13. vek).'},
{p:'Šta je gotika donela arhitekturi?', o:'Šiljati luk, visoke tanke zidove i velike vitraže — katedralu punu svetla.'},
{p:'Ko je oslikao tavanicu Sikstinske kapele?', o:'Mikelanđelo (1508–1512).'},
{p:'Odakle ime impresionizam?', o:'Od Moneove slike „Impresija, izlazak sunca" (1872).'},
{p:'Šta je Bauhaus?', o:'Nemačka škola (1919) koja je spojila umetnost, zanat i industriju — funkcionalan dizajn.'}
],
razgovor:['Koja slika ili zgrada te je stvarno zaustavila — i šta se tad desilo u tebi?','Novi Beograd: ružni blokovi ili utopija od betona? Šta vidiš kad prođeš tuda?']},
{id:'10-5', naslov:'Muzika — od klasike do roka',
kuka:{p:'Šta se dešava sa tonom kad mu se frekvencija udvostruči?', o:['Postane disonantan','Čujemo „isti" ton, samo oktavu više','Postane tiši'], t:1},
delovi:[
{n:'Od čega je muzika', t:`Muzika je zvuk organizovan u vremenu. Četiri osnovna sastojka:
• RITAM — raspored trajanja i naglasaka; ono na šta lupkaš nogom.
• MELODIJA — niz tonova različite visine; ono što pevušiš.
• HARMONIJA — više tonova istovremeno (akordi); ono što daje „boju" — durski akord zvuči svetlo, molski tužno.
• BOJA ZVUKA — po čemu razlikuješ violinu od trube iako sviraju isti ton.

Visina tona je FREKVENCIJA treperenja. Kad se frekvencija udvostruči, čujemo isti ton, više — OKTAVU. Još je Pitagora primetio da prijatni sazvuci odgovaraju prostim odnosima (2:1, 3:2). Zapadna muzika deli oktavu na 12 polustepena.

Muzika deluje direktno na telo: istraživanja pokazuju da u trenucima najjačeg doživljaja („trnci niz kičmu") mozak oslobađa DOPAMIN — isti hemijski signal nagrade kao kod hrane ili ljubavi. I to u iščekivanju vrhunca, ne samo u njemu.`,
pr:{p:'Šta je harmonija?', o:['Brzina pesme','Više tonova istovremeno — akordi','Glasnoća'], t:1, z:'Ritam je vreme, melodija niz tonova, harmonija tonovi zajedno.'}},
{n:'Klasična muzika — epohe', t:`„Klasična" muzika (umetnička muzika Zapada) ima svoju liniju epoha:
• SREDNJI VEK — gregorijanski koral: jedan glas, crkva, bez instrumenata.
• BAROK (oko 1600–1750) — VIVALDI („Četiri godišnja doba"), BAH (1685–1750): složeno preplitanje više melodija istovremeno (kontrapunkt), matematika i vera.
• KLASICIZAM (oko 1750–1820) — jasnoća, ravnoteža, forma: HAJDN, MOCART (1756–1791; za 35 godina života preko 600 dela), rani BETOVEN. Simfonija i sonata dobijaju svoj oblik.
• ROMANTIZAM (19. vek) — osećanje, strast, nacija: BETOVEN je most (Deveta simfonija, pisana kad je bio potpuno gluv — „Oda radosti" je danas himna EU), pa Šopen, Šubert, Verdi i Vagner (opera), Čajkovski.
• 20. VEK — pravila se ruše: STRAVINSKI („Posvećenje proleća", 1913 — na premijeri u Parizu publika se pobunila), Šenberg (muzika bez tonaliteta), pa filmska muzika.

Kod nas: Stevan MOKRANJAC („Rukoveti" — narodne pesme u horskoj obradi), Josif Marinković.`,
pr:{p:'Koja je posebnost Betovenove Devete simfonije?', o:['Napisana je za pet minuta','Napisao ju je kad je bio potpuno gluv; „Oda radosti" je danas himna EU','Nema melodiju'], t:1, z:'Betoven je komponovao Devetu ne čujući je — muziku je „slušao" u glavi.'}},
{n:'Bluz i džez — muzika koja je promenila 20. vek', t:`Gotovo sva popularna muzika 20. veka ima koren na jednom mestu: kod potomaka afričkih robova na jugu SAD.

• BLUZ (kraj 19. – početak 20. veka) — iz radnih pesama, duhovne muzike i afričkih ritmova. Jednostavan oblik (najčešće 12 taktova, tri akorda), „plave note" koje vise između dura i mola, i tekstovi o bedi, ljubavi, putu i izdaji. Bluz je muzika koja tugu ne leči, nego je kaže.
• DŽEZ (Nju Orleans, početak 20. veka) — bluz + marševi + IMPROVIZACIJA: muzičar izmišlja na licu mesta. Luj Armstrong, Djuk Elington, kasnije Čarli Parker, Majls Dejvis, Džon Koltrejn.

Tehnika je promenila sve: GRAMOFONSKA PLOČA i RADIO (1920-ih) — prvi put muzika može da se sluša bez svirača u sobi, i ista pesma stiže do miliona ljudi. Pojavljuje se ZVEZDA.`,
pr:{p:'Šta je posebno u džezu?', o:['Svira se samo po notama','Improvizacija — muzičar izmišlja na licu mesta','Nema ritam'], t:1, z:'Džez spaja bluz i marševe, a srce mu je improvizacija.'}},
{n:'Rok i posle', t:`ROKENROL (sredina 1950-ih): bluz i ritam, električna gitara, mladost i pobuna. Čak Beri, Elvis Prisli, Litl Ričard. Prvi put muzika pripada TINEJDŽERIMA — i roditelji je mrze.

1960-e: BITLSI (od jednostavnih ljubavnih pesama do studijskih eksperimenata), ROLING STOUNSI (prljaviji, bliži bluzu), Bob Dilan (tekst kao poezija — 2016. dobio Nobelovu nagradu za književnost), Džimi Hendriks. Rok postaje glas generacije i protesta.

Zatim grananje: HARD ROK i METAL (Led Cepelin, Blek Sabat), PANK (sredina 1970-ih — tri akorda, bes, „uradi sam"; Sex Pistols, Ramones), NOVI TALAS, HIP-HOP (Bronks, 1970-ih — ritam i reč, DJ i reper), elektronska muzika.

Jugoslavija je imala jednu od najživljih rok scena van Zapada: BIJELO DUGME, RIBLJA ČORBA, Smak, YU grupa; početkom 1980-ih NOVI TALAS — Električni orgazam, Idoli, Šarlo Akrobata, pa EKV i Partibrejkers. Pesme su često nosile i ono što se nije smelo reći direktno.`,
pr:{p:'Iz čega je nastao rokenrol?', o:['Iz klasične muzike','Iz bluza i „ritam i bluz" muzike, uz električnu gitaru','Iz narodne muzike Evrope'], t:1, z:'Koreni roka su u afroameričkom bluzu; 1950-ih postaje muzika mladih.'}},
{n:'Kraj oblasti', t:`Zašto nam muzika toliko znači?
• Pamćenje: pesma iz 17. godine vraća te tamo bolje od fotografije — muzika i emocije su povezane u mozgu.
• Zajednica: navijačka pesma, slava, koncert, kafana — muzika od pojedinaca pravi „mi".
• Osećanje bez reči: muzika kaže ono što ne znaš da kažeš.

Kostur lekcije: ritam, melodija, harmonija, boja; oktava = dvostruka frekvencija; klasika — barok (Bah), klasicizam (Mocart), romantizam (Betoven, Šopen), 20. vek (Stravinski); bluz i džez iz afroameričke tradicije; rok, pank, hip-hop; jugoslovenski rok i novi talas.

Kostur cele oblasti „Umetnost i priče": umetnost je stara koliko i mi i služi smislu → mit, ep i tragedija → roman od Don Kihota do Bukovskog → slike i zgrade od piramide do Novog Beograda → muzika od Baha do Električnog orgazma.

Sledeće (poslednji alat pa poslednja oblast): kako te ubeđuju — pa tehnologija: od vatre do veštačke inteligencije.`,
pr:{p:'Zašto pesma iz mladosti vraća sećanja jače od fotografije?', o:['Slučajno','Muzika je u mozgu tesno povezana sa emocijama i pamćenjem','Jer je glasna'], t:1, z:'Muzika budi emocije, a emocije učvršćuju sećanja — pesma vraća ceo trenutak.'}}
],
kljucno:['Muzika = ritam, melodija, harmonija, boja; oktava je dvostruka frekvencija; vrhunac doživljaja oslobađa dopamin.','Klasika: srednji vek (koral) → barok (Bah, Vivaldi) → klasicizam (Hajdn, Mocart) → romantizam (Betoven, Šopen, Verdi) → 20. vek (Stravinski); kod nas Mokranjac.','Bluz i džez iz afroameričke tradicije; improvizacija; ploča i radio stvaraju zvezde.','Rokenrol (1950-ih), Bitlsi i Stounsi, Dilan, metal, pank, hip-hop; jugoslovenski rok i novi talas.','Muzika veže pamćenje, osećanja i zajednicu.'],
kartice:[
{p:'Koja su četiri sastojka muzike?', o:'Ritam, melodija, harmonija, boja zvuka.'},
{p:'Šta je oktava?', o:'Ton dvostruko veće frekvencije — „isti" ton, više.'},
{p:'Koji kompozitor je Devetu simfoniju napisao gluv?', o:'Betoven.'},
{p:'Gde su koreni bluza i džeza?', o:'U muzici afroameričke zajednice na jugu SAD.'},
{p:'Koji muzičar je dobio Nobelovu nagradu za književnost?', o:'Bob Dilan, 2016.'}
],
razgovor:['Koja pesma te vraća u neko tačno vreme i mesto — i šta ti donese?','Bluz „ne leči tugu, nego je kaže". Da li i tvoje pisanje radi isto?']}
]},
{id:'11', naziv:'Tehnologija', ikona:'💻', era:'danas → sutra', lekcije:[
{id:'11-1', naslov:'Kako tehnologija menja ljude — od vatre do struje',
kuka:{p:'Ko je, po Platonu, upozoravao da će PISMO ljudima oslabiti pamćenje?', o:['Niko, to je moderna briga','Sokrat','Aristotel'], t:1},
delovi:[
{n:'Tehnologija nije samo mašina', t:`TEHNOLOGIJA je svako znanje pretvoreno u alat ili postupak koji nam proširuje moć: kameni nož, vatra, plug, pismo, sat, štampa, parna mašina, vakcina, telefon. I jezik, i novac, i kalendar su na neki način tehnologije.

Kroz celu ovu školu videli smo nekoliko skokova koji su promenili SVE, ne samo jedan posao:
• VATRA — kuvanje, toplina, noć;
• POLJOPRIVREDA — sedeći život, višak, gradovi;
• PISMO — pamćenje van glave, država, zakon;
• ŠTAMPA — znanje za mnoge;
• PARA i UGALJ — mašine umesto mišića;
• STRUJA — energija koja se šalje žicom bilo gde.

Ekonomisti takve zovu TEHNOLOGIJE OPŠTE NAMENE: ne rešavaju jedan problem, nego menjaju način na koji se radi skoro sve. Struja, računar i internet su takve. Pitanje za poslednje lekcije: da li je i veštačka inteligencija?`,
pr:{p:'Šta je „tehnologija opšte namene"?', o:['Tehnologija za domaćinstvo','Tehnologija koja menja način na koji se radi skoro sve — kao struja ili pismo','Jeftina tehnologija'], t:1, z:'Ne rešava jedan problem, nego prožme celu privredu i život.'}},
{n:'Struja', t:`Struja je bila poznata kao čudo (munja, varnica), ali je postala sila tek u 19. veku:
• MAJKL FARADEJ (1831) otkriva elektromagnetnu indukciju: magnet koji se kreće kroz kalem pravi struju. Na tome i danas radi skoro svaka elektrana.
• EDISON (1879) pravi upotrebljivu sijalicu i prve električne mreže — na jednosmernu struju.
• NIKOLA TESLA razvija sistem NAIZMENIČNE STRUJE i motor na nju; sa Vestinghausom pobeđuje u „ratu struja" jer se naizmenična struja lako transformiše i šalje na velike daljine. Hidroelektrana na Nijagari (1895–1896) radila je na njegovom sistemu.

Struja je za pola veka promenila život: svetlo noću (radni dan i noćni život), fabrike sa električnim motorima, frižider (hrana traje), lift (neboderi), radio, telefon.

Ekonomista Ha-Džun Čang tvrdi da je VEŠ-MAŠINA promenila svet više od interneta — oslobodila je sate i sate, uglavnom ženskog, rada i pomogla da žene masovno pođu na posao i u škole. Može se raspravljati, ali poenta stoji: najveće promene često prave „dosadne" stvari.`,
pr:{p:'Zašto je naizmenična struja pobedila?', o:['Bila je bezbednija od svega','Lako se transformiše i prenosi na velike daljine','Edison ju je izumeo'], t:1, z:'Transformatori podignu napon za prenos i spuste ga za kuću — Teslin sistem je zato pobedio.'}},
{n:'Svaka nova tehnologija — novi strah', t:`Strah od nove tehnologije je star koliko i tehnologija.

• Platon u „Fedru" prenosi SOKRATA: pismo će ljudima doneti zaborav, jer se neće sećati iznutra, nego oslanjati na spoljne znakove; imaće privid znanja bez znanja. (Ironija: znamo to jer je Platon — zapisao.)
• Kad su se pojavili romani, moralisti su upozoravali da kvare mlade, posebno devojke.
• LUDISTI (Engleska, 1811–1816) — tkači su razbijali mašine koje su im uzimale posao. Danas se „ludista" kaže za svakoga ko se plaši tehnike, ali oni nisu bili glupi: mašina jeste uništila njihov zanat.
• Radio, televizija, video-igre, mobilni — svaki put talas straha za decu.

Pouka nije „strahovi su uvek smešni". Sokrat je bio delimično u pravu — ne pamtimo više duge pesme napamet kao guslari. Pouka je: svaka tehnologija nešto DAJE, a nešto UZIMA, i to se obično vidi tek posle.`,
pr:{p:'Ko su bili ludisti?', o:['Ljudi koji vole igre','Engleski tkači koji su razbijali mašine što su im uzimale posao (1811–1816)','Pronalazači mašina'], t:1, z:'Nisu bili protiv tehnike iz gluposti — mašine su im zaista uništavale zanat.'}},
{n:'Alat menja onoga ko ga koristi', t:`Kanadski mislilac Maršal Makluan (1964) je rekao: „MEDIJ JE PORUKA". Nije najvažnije šta gledaš na televiziji, nego šta televizija kao takva radi sa ljudima — kako menja pažnju, porodicu, politiku. Isto se može reći za telefon u džepu.

Istoričar tehnologije Melvin Krancberg je postavio pravilo: „Tehnologija nije ni dobra ni loša — ali nije ni neutralna." Nož i hleb seče i ubija; ali društvo sa noževima nije isto kao društvo bez njih.

Primeri kako alat menja nas:
• SAT je u fabrikama napravio „radno vreme" i naviku da se život deli na sate;
• AUTOMOBIL je oblikovao gradove (predgrađa, parkinzi, šoping-centri);
• GPS je promenio to kako pamtimo prostor — oni koji se stalno oslanjaju na navigaciju lošije pamte put (sećaš se taksista i hipokampusa?);
• društvene mreže menjaju pažnju i to kako vidimo druge.`,
pr:{p:'Šta znači Krancbergovo pravilo?', o:['Tehnologija je uvek dobra','Tehnologija nije ni dobra ni loša, ali nije ni neutralna — menja društvo koje je koristi','Tehnologija je uvek loša'], t:1, z:'Alat ne bira stranu, ali društvo sa njim više nije isto kao bez njega.'}},
{n:'Bilans — i šta sledi', t:`Posle svih rasprava, nekoliko brojki koje treba znati:
• očekivani životni vek na svetu je oko 1800. bio oko 30 godina (najviše zbog smrti dece), a danas preko 70;
• većina ljudi danas ima struju, telefon i pitku vodu — 1900. skoro niko;
• većina tog napretka dolazi iz NAUKE pretvorene u TEHNOLOGIJU: vakcine, đubriva, struja, kanalizacija, antibiotici.

I cena: klimatske promene (od uglja i nafte), zagađenje, nuklearno oružje, zavisnost od ekrana, poslovi koji nestaju.

Kostur lekcije: tehnologija = znanje pretvoreno u alat; velike tehnologije opšte namene (vatra, pismo, štampa, para, struja); Faradej, Edison, Tesla; svaka nova tehnika donosi strah (Sokrat, ludisti) — i nešto da, a nešto uzme; „medij je poruka"; nije ni dobra ni loša, ni neutralna.

Sledeće: mašina na kojoj sve to danas počiva — računar. Kako radi, prosto?`,
pr:{p:'Šta je najviše produžilo životni vek od 1800. do danas?', o:['Bolja klima','Nauka pretvorena u tehnologiju — vakcine, voda, kanalizacija, antibiotici, đubriva','Manje rada'], t:1, z:'Životni vek se više nego udvostručio — najviše zbog manje smrti dece i boljeg zdravlja.'}}
],
kljucno:['Tehnologija = znanje pretvoreno u alat; tehnologije opšte namene (vatra, pismo, štampa, para, struja) menjaju sve.','Struja: Faradej (indukcija, 1831), Edison (sijalica, 1879), Tesla (naizmenična struja, Nijagara).','Svaka nova tehnologija rađa strah — Sokrat protiv pisma, ludisti; nešto daje, a nešto uzima.','„Medij je poruka" (Makluan); tehnologija nije ni dobra ni loša, ni neutralna (Krancberg).','Životni vek sa ~30 na preko 70 godina — iz nauke pretvorene u tehnologiju; cena: klima, zagađenje, zavisnost.'],
kartice:[
{p:'Šta je otkrio Faradej 1831?', o:'Elektromagnetnu indukciju — pokretni magnet pravi struju.'},
{p:'Zašto je Teslin sistem pobedio u „ratu struja"?', o:'Naizmenična struja se lako transformiše i prenosi na velike daljine.'},
{p:'Ko su bili ludisti?', o:'Engleski tkači (1811–1816) koji su razbijali mašine.'},
{p:'Šta znači „medij je poruka"?', o:'Sam medij menja ljude i društvo, više nego sadržaj koji prenosi (Makluan).'},
{p:'Koliki je bio životni vek oko 1800, a koliki danas?', o:'Oko 30 godina; danas preko 70.'}
],
razgovor:['Koja tehnologija je TEBI nešto dala, a nešto uzela — i šta?','Sokrat je mislio da pismo kvari pamćenje. Šta danas telefon radi tvojoj pažnji i pisanju?']},
{id:'11-2', naslov:'Kako radi računar',
kuka:{p:'Koliko „slova" ima jezik na kome računar na kraju sve radi?', o:['26','Dva — 0 i 1','Deset'], t:1},
delovi:[
{n:'Sve su nule i jedinice', t:`Računar u dubini zna samo za dva stanja: struja ima / nema. To zapisujemo kao 1 i 0. Jedna takva cifra je BIT. Osam bitova čine BAJT.

Sa dovoljno bitova može se zapisati bilo šta:
• BROJ — u dvojnom (binarnom) sistemu: 0, 1, 10, 11, 100… (101 je 5: jedna četvorka, nijedna dvojka, jedna jedinica);
• SLOVO — svako slovo ima dogovoreni broj (u tabeli UNIKOD ima mesta i za ćirilicu, kineske znakove i emodžije);
• SLIKA — mreža tačkica (pikseli), svaka sa tri broja: koliko crvene, zelene, plave;
• ZVUK — talas izmeren hiljadama puta u sekundi, svaki put jedan broj.

Tako i ova lekcija, tvoja fotografija i pesma koju slušaš — sve su to, na kraju, dugi nizovi nula i jedinica. Kilobajt je hiljadu bajtova, megabajt milion, gigabajt milijarda. Jedna pesma je nekoliko megabajta; telefon danas drži stotine gigabajta.`,
pr:{p:'Šta je bit?', o:['Mali program','Najmanja jedinica podatka — 0 ili 1','Osam slova'], t:1, z:'Bit je jedno da/ne stanje; osam bitova je bajt.'}},
{n:'Tranzistor — prekidač koji je promenio svet', t:`Kako mašina „misli" nulama i jedinicama? Pomoću PREKIDAČA. Prekidač pušta struju ili ne — 1 ili 0. Spoj nekoliko prekidača na pametan način i dobiješ LOGIČKA KOLA: „i" (prođe samo ako su oba uključena), „ili", „ne". Od takvih kola se mogu napraviti sabiranje, poređenje, pamćenje — sve što računar radi.

Prvi računari (ENIAC, 1945) imali su hiljade staklenih elektronskih cevi, zauzimali celu salu i stalno pregorevali.

TRANZISTOR (1947, Belove laboratorije) je mali poluprovodnički prekidač bez pokretnih delova. Onda su ih naučili da prave stotine, pa milione, pa milijarde na jednom komadiću silicijuma — ČIPU. Današnji procesor u telefonu ima desetine milijardi tranzistora, svaki manji od većine virusa.

Gordon Mur je 1965. primetio da se broj tranzistora na čipu udvostručava otprilike svake dve godine (MUROV ZAKON). To je decenijama važilo — zato je telefon u džepu jači od računara koji su ljude odveli na Mesec.`,
pr:{p:'Šta je tranzistor u računaru?', o:['Baterija','Sićušan prekidač koji pušta ili ne pušta struju — 1 ili 0','Ekran'], t:1, z:'Milijarde tranzistora-prekidača u logičkim kolima rade sve račune.'}},
{n:'Delovi računara', t:`Svaki računar — i laptop, i telefon, i računar u autu ili veš-mašini — ima iste osnovne delove:
• PROCESOR (CPU) — „mozak" koji izvršava naredbe, milijarde u sekundi. Prost posao (saberi, uporedi, premesti), ali neverovatno brzo.
• RADNA MEMORIJA (RAM) — sto na kome procesor radi: brza, ali se briše kad nestane struje.
• SKLADIŠTE (disk, SSD) — fioka: sporije, ali čuva i kad je ugašeno.
• ULAZ i IZLAZ — tastatura, ekran osetljiv na dodir, mikrofon, kamera, zvučnik, mreža.

Zašto je računar spor kad je otvoreno mnogo stvari? Često zbog RAM-a: kad je sto pun, procesor mora da premešta stvari u fioku i nazad.

Ideja da jedna mašina može da radi BILO KOJI zadatak, samo ako joj daš pravi spisak naredbi, potiče od matematičara ALANA TJURINGA (1936) — „univerzalna mašina". A prvi zamišljeni program napisala je ADA LAVLEJS 1843, za mašinu koja nikad nije dovršena.`,
pr:{p:'Čemu služi RAM?', o:['Trajnom čuvanju fajlova','Brzom radnom prostoru procesora — briše se kad se ugasi','Prikazu slike'], t:1, z:'RAM je sto, disk je fioka: sto je brz ali se prazni kad nestane struje.'}},
{n:'Program — recept za mašinu', t:`PROGRAM je spisak naredbi koji kaže računaru šta da radi, korak po korak. Računar ne razume šta hoćeš — radi tačno ono što piše. Zato su greške u programu (BAGOVI) toliko česte: mašina ne zna da si „mislio drugačije". (Čuvena anegdota: 1947. u jednom računaru nađen je pravi moljac zaglavljen u releju — i zalepljen u dnevnik kao „prvi pravi bag".)

ALGORITAM je ideja programa — postupak koji vodi do rešenja, kao recept. „Kako naći najkraći put do posla" je algoritam; aplikacija za navigaciju je program koji ga izvršava.

Ljudi ne pišu programe u nulama i jedinicama, nego u PROGRAMSKIM JEZICIMA (Python, JavaScript, C…), koji se onda prevode u mašinski jezik. Na primer, ova aplikacija za školu je napisana u JavaScript-u.

Računar je napravljen u SLOJEVIMA: tranzistori → logička kola → procesor → operativni sistem (Windows, Android, iOS — koji deli procesor i memoriju između aplikacija) → aplikacije → ono što ti dodiruješ. Svaki sloj sakriva složenost onog ispod. Zato možeš da koristiš telefon, a da ništa od ovoga ne znaš.`,
pr:{p:'Šta je algoritam?', o:['Vrsta računara','Postupak, kao recept, koji vodi do rešenja','Greška u programu'], t:1, z:'Algoritam je ideja; program je taj postupak zapisan za određenu mašinu.'}},
{n:'Od sale do džepa — i kraj', t:`Kratka istorija:
• 1945 — ENIAC: sala, 30 tona;
• 1960-e — veliki računari u firmama i vojsci; NASA;
• 1970-e — mikroprocesor (ceo procesor na jednom čipu, 1971);
• 1981 — IBM PC; 1984 — Mekintoš sa mišem i prozorima; računar ulazi u kuće;
• 1990-e — internet;
• 2007 — AjFon i pametni telefon: računar sa ekranom na dodir, kamerom, GPS-om i internetom, stalno u džepu.

Danas je računar u skoro svemu: u autu, frižideru, satu, kasi u prodavnici, u mašinama na tvom poslu.

Kostur lekcije: sve su 0 i 1 (bit, bajt); tranzistor kao prekidač, logička kola, čip, Murov zakon; procesor, RAM, skladište, ulaz-izlaz; Tjuring — univerzalna mašina; program i algoritam; slojevi koji sakrivaju složenost.

Sledeće: kako su se računari povezali u mrežu — i šta mreža zna o tebi.`,
pr:{p:'Šta je Murov zakon?', o:['Zakon o zaštiti podataka','Zapažanje da se broj tranzistora na čipu udvostručava otprilike svake dve godine','Pravilo o brzini interneta'], t:1, z:'Gordon Mur, 1965 — zato su računari decenijama postajali brži i jeftiniji.'}}
],
kljucno:['Sve u računaru su bitovi (0 i 1); 8 bitova = bajt; slova, slike i zvuk su brojevi.','Tranzistor je prekidač; logička kola; milijarde tranzistora na čipu; Murov zakon (udvostručavanje oko 2 godine).','Delovi: procesor (izvršava), RAM (radni sto), skladište (fioka), ulaz-izlaz.','Program = spisak naredbi; algoritam = postupak; Tjuring (univerzalna mašina, 1936), Ada Lavlejs (1843).','Slojevi: tranzistori → kola → procesor → operativni sistem → aplikacije; ENIAC 1945 → PC 1981 → pametni telefon 2007.'],
kartice:[
{p:'Koliko bitova ima bajt?', o:'Osam.'},
{p:'Šta je tranzistor?', o:'Sićušan prekidač koji pušta ili ne pušta struju — osnova svakog čipa.'},
{p:'Šta kaže Murov zakon?', o:'Broj tranzistora na čipu se udvostručava otprilike svake dve godine.'},
{p:'Koja je razlika između RAM-a i skladišta?', o:'RAM je brz radni prostor koji se briše kad nestane struje; skladište čuva trajno.'},
{p:'Šta je algoritam?', o:'Postupak, kao recept, koji vodi do rešenja.'}
],
razgovor:['Računar radi tačno ono što piše, a ne ono što si mislio. Gde u životu ljudi takođe čuju samo ono što si rekao, a ne ono što si mislio?','Koju mašinu na svom poslu bi voleo da razumeš iznutra?']},
{id:'11-3', naslov:'Internet i podaci — ko šta zna o tebi',
kuka:{p:'Da li su internet i veb (WWW) ista stvar?', o:['Da, to su dva imena za isto','Ne — internet je mreža računara, a veb je jedna usluga na njoj (stranice sa linkovima)','Ne — veb je stariji od interneta'], t:1},
delovi:[
{n:'Kako radi internet', t:`INTERNET je mreža mreža — milijarde uređaja povezanih kablovima (i ispod okeana), optikom, radio-talasima i satelitima, koji se razumeju jer govore isti „jezik" (protokol TCP/IP).

Kako putuje poruka? Podeli se na male PAKETE. Svaki paket nosi adresu i nađe svoj put kroz mrežu, kao pisma koja idu različitim poštama; na kraju se ponovo slože. Ako jedan put padne, paketi idu drugim — zato je mreža otporna.

Svaki uređaj na mreži ima IP ADRESU (broj). Ti ukucaš ime (npr. wikipedia.org), a sistem DNS — „telefonski imenik interneta" — pretvori ime u broj servera.

Istorija ukratko: ARPANET, mreža koju je finansirala američka vojska i koja je povezivala univerzitete (prva poruka 1969); TCP/IP od 1983. Internet je dugo bio za naučnike i vojsku.`,
pr:{p:'Kako putuju podaci kroz internet?', o:['Celi, jednim kablom','Podeljeni na male pakete koji mogu ići različitim putevima, pa se slože na kraju','Preko jednog centralnog računara'], t:1, z:'Paketi se šalju odvojeno i slažu na odredištu — zato mreža radi i kad deo padne.'}},
{n:'Veb i telefon', t:`VEB (World Wide Web) je 1989–1991. u CERN-u (Švajcarska) izmislio TIM BERNERS-LI: stranice povezane LINKOVIMA, koje se otvaraju u pregledaču. Berners-Li ga nije patentirao — dao ga je svetu besplatno. Zato je veb eksplodirao.

Internet je ono ispod (mreža); veb je jedna usluga na njemu. Druge usluge: mejl, video-pozivi, igre, aplikacije.

Posle toga:
• kraj 1990-ih — pretraživači (Gugl, 1998), elektronska trgovina;
• 2000-e — društvene mreže (Fejsbuk 2004, Jutjub 2005, Tviter 2006);
• 2007. pametni telefon — internet stalno u džepu;
• danas — više od dve trećine čovečanstva je na internetu.`,
pr:{p:'Ko je izmislio veb?', o:['Bil Gejts','Tim Berners-Li u CERN-u, 1989–1991','Američka vojska 1969'], t:1, z:'Vojska je finansirala ARPANET (internet); veb je Berners-Lijev izum na toj mreži.'}},
{n:'Ako je besplatno — ti si proizvod', t:`Gugl, Fejsbuk, Instagram, Tiktok — besplatni su. Kako zarađuju milijarde? Prodaju REKLAMIRANJE, a vrednost reklame je u tome koliko dobro znaju ko si ti.

Šta sve o tebi skupljaju (i ono što ne kažeš direktno):
• šta tražiš, gledaš, lajkuješ i koliko dugo se zadržiš na objavi;
• LOKACIJU — telefon zna gde spavaš, gde radiš, kad ideš na posao;
• kontakte, kupovine, uređaj, pa čak i brzinu kucanja;
• METAPODATKE — ne šta si rekao, nego kome, kad, koliko dugo i odakle. Iz metapodataka se može saznati mnogo — ko ti je bitan, kad spavaš, da li si bolestan.

Iz toga se ZAKLJUČUJE više nego što si dao: godine, pol, prihodi, politički stav, raspoloženje, životne promene (selidba, novi posao, porodica). Posrednici (data brokeri) kupuju i prodaju takve profile.

I još: aplikacije su dizajnirane da te zadrže — beskrajno skrolovanje, obaveštenja, „lajkovi" koji dolaze kao dobitak na aparatu. Tvoja pažnja je roba.`,
pr:{p:'Šta su metapodaci?', o:['Sadržaj poruke','Podaci o poruci: kome, kada, koliko, odakle','Lozinke'], t:1, z:'Čak i bez sadržaja, iz metapodataka se može sklopiti tvoj život.'}},
{n:'Ko te štiti — i ko gleda', t:`EVROPSKA UNIJA je 2018. uvela GDPR — opštu uredbu o zaštiti podataka: firma mora da kaže šta skuplja i zašto, da traži pristanak, da ti pokaže šta zna o tebi i da obriše na zahtev; kazne su ogromne. Zato iskaču oni prozorčići „prihvati kolačiće". Srbija je iste godine donela Zakon o zaštiti podataka o ličnosti, napravljen po uzoru na GDPR.

Država takođe gleda: EDVARD SNOUDEN je 2013. otkrio da američka obaveštajna služba masovno skuplja podatke o telefonskim pozivima i internetu, i svojih građana i stranaca. Rasprava traje: bezbednost ili privatnost? Snouden je za jedne heroj, za druge izdajnik.

Kolačići (cookies) su mali fajlovi koje sajt ostavi u tvom pregledaču da te prepozna. Neki su potrebni (da ostaneš prijavljen), a neki služe praćenju sa sajta na sajt.`,
pr:{p:'Šta je GDPR?', o:['Američki zakon o internetu','Evropska uredba (2018) koja ograničava kako firme skupljaju i koriste lične podatke','Vrsta virusa'], t:1, z:'Pravo da znaš šta se skuplja, da daš ili uskratiš pristanak i da tražiš brisanje.'}},
{n:'Šta da radiš — i kraj', t:`Ne moraš da bežiš u šumu. Nekoliko navika koje stvarno pomažu:
• DVOSTEPENA PRIJAVA (lozinka + kod na telefonu) za mejl i važne naloge — najveća korist za najmanje truda;
• različite lozinke za različite sajtove (menadžer lozinki ih pamti);
• PECANJE (fišing): poruka koja žuri („nalog će biti blokiran", „kliknite da preuzmete paket") i traži lozinku ili karticu — prevara. Banka i pošta ti nikad ne traže lozinku porukom;
• proveri koje aplikacije imaju pristup lokaciji, mikrofonu i kontaktima — i ugasi ono što ne treba;
• pre nego što objaviš: da li bi ovo pokazao strancu, šefu, detetu za 15 godina? Internet retko zaboravlja.

Kostur lekcije: internet = mreža mreža, paketi, IP i DNS; veb (Berners-Li, 1989–91) je usluga na njemu; besplatne usluge plaćamo podacima i pažnjom; metapodaci otkrivaju mnogo; GDPR i srpski zakon; dvostepena prijava i oprez od pecanja.

Sledeće: veštačka inteligencija — šta jeste, a šta nije.`,
pr:{p:'Koja navika najviše štiti nalog za najmanje truda?', o:['Česta promena slike profila','Dvostepena prijava — lozinka plus kod na telefonu','Brisanje istorije svaki dan'], t:1, z:'I kad lozinka procuri, bez koda sa tvog telefona napadač ne ulazi.'}}
],
kljucno:['Internet = mreža mreža; podaci putuju u paketima; IP adresa i DNS („imenik"); ARPANET 1969, TCP/IP 1983.','Veb (Berners-Li, CERN, 1989–91) je usluga na internetu, dat svetu besplatno.','Besplatne usluge zarađuju na reklamama — plaćamo podacima i pažnjom; metapodaci otkrivaju mnogo; iz podataka se zaključuje i ono što nisi rekao.','GDPR (EU, 2018) i srpski zakon iste godine; Snouden (2013) — masovni državni nadzor; rasprava bezbednost ili privatnost.','Zaštita: dvostepena prijava, različite lozinke, oprez od pecanja, dozvole aplikacija.'],
kartice:[
{p:'Koja je razlika između interneta i veba?', o:'Internet je mreža računara; veb je usluga na njemu — stranice sa linkovima.'},
{p:'Šta radi DNS?', o:'Pretvara ime sajta u IP adresu servera — „imenik interneta".'},
{p:'Ko je izmislio veb i gde?', o:'Tim Berners-Li, u CERN-u, 1989–1991.'},
{p:'Šta znači „ako je besplatno, ti si proizvod"?', o:'Besplatne usluge zarađuju prodajući reklame zasnovane na tvojim podacima i pažnji.'},
{p:'Šta je pecanje (fišing)?', o:'Lažna poruka koja žuri i traži lozinku ili podatke kartice.'}
],
razgovor:['Šta misliš, šta bi tvoj telefon mogao da zaključi o tebi samo iz toga gde se kretao prošle nedelje?','Bezbednost ili privatnost — koliko bi dao od jednog da dobiješ drugo?']},
{id:'11-4', naslov:'Veštačka inteligencija — šta je, a šta nije',
kuka:{p:'Kako veliki jezički model (kao ChatGPT ili Claude) piše odgovor?', o:['Pretražuje gotove odgovore u bazi','Reč po reč predviđa šta najverovatnije sledi, na osnovu obrazaca naučenih iz ogromne količine teksta','Neko ga kuca u pozadini'], t:1},
delovi:[
{n:'Šta je veštačka inteligencija', t:`VEŠTAČKA INTELIGENCIJA (AI, VI) je široko ime za računarske sisteme koji rade poslove za koje bi čoveku trebala inteligencija: prepoznaju lice, prevode, igraju šah, voze, pišu, odgovaraju na pitanja.

Kratka istorija:
• 1950 — ALAN TJURING pita „mogu li mašine da misle?" i predlaže test: ako kroz razgovor ne možeš da razlikuješ mašinu od čoveka…
• 1956 — konferencija u Dartmutu, gde je nastao izraz „veštačka inteligencija". Optimizam: rešićemo to za jednu generaciju.
• Usledile su „ZIME VEŠTAČKE INTELIGENCIJE" — obećanja se nisu ispunila, novac je presušio (1970-e, kraj 1980-ih).
• 1997 — IBM-ov Deep Blue pobeđuje svetskog šampiona u šahu Kasparova.
• 2012 → — DUBOKO UČENJE: nagli skok u prepoznavanju slika i govora.
• 2016 — AlphaGo pobeđuje najboljeg igrača igre go.
• 2022 — ChatGPT; veliki jezički modeli ulaze u svakodnevicu.

Važno razlikovanje: USKA AI radi jednu stvar (prepoznaje tablice, preporučuje filmove); OPŠTA AI — koja bi mogla sve što čovek — još ne postoji, i oko toga kada (i da li) će doći, stručnjaci se oštro razilaze.`,
pr:{p:'Koja je razlika između uske i opšte veštačke inteligencije?', o:['Uska je sporija','Uska radi jedan posao; opšta bi mogla sve što i čovek — i još ne postoji','Opšta je stara, uska nova'], t:1, z:'Šah, prevod, prepoznavanje lica — uske su; opšta AI je cilj i predmet rasprave.'}},
{n:'Kako mašina uči', t:`Stara AI: ljudi su pisali PRAVILA („ako je X, uradi Y"). Za šah to radi; za prepoznavanje mačke na slici — ne. Pokušaj da napišeš pravila šta je mačka!

MAŠINSKO UČENJE okreće stvar: ne pišeš pravila, nego mašini daš hiljade PRIMERA (slike sa natpisom „mačka" / „nije mačka"), a ona sama podesi milione unutrašnjih brojeva dok ne počne da pogađa. Kao dete koje nauči šta je pas gledajući pse, a ne čitajući definiciju.

NEURONSKE MREŽE su vrsta takvog sistema, labavo inspirisana mozgom: slojevi „veštačkih neurona" povezanih vezama različite jačine. Učenje je podešavanje jačine veza — milijardi njih. (Sećaš se: „neuroni koji pale zajedno, povezuju se zajedno".)

Zašto je eksplodiralo baš posle 2010? Tri stvari zajedno: OGROMNI PODACI (internet), BRZI ČIPOVI (grafičke kartice napravljene za igrice pokazale su se savršene za ovo) i bolji algoritmi.`,
pr:{p:'Šta je suština mašinskog učenja?', o:['Programer napiše sva pravila','Mašina iz mnogo primera sama podesi svoje unutrašnje brojeve dok ne nauči da pogađa','Mašina čita udžbenike'], t:1, z:'Ne pravila, nego primeri: sistem uči obrasce iz podataka.'}},
{n:'Veliki jezički modeli', t:`VELIKI JEZIČKI MODEL (ChatGPT, Claude, Gemini…) je neuronska mreža obučena na ogromnoj količini teksta: knjige, sajtovi, članci, kod. Njen osnovni zadatak je jednostavan: na osnovu teksta do sada, predvidi kako se nastavlja — reč po reč (tačnije, deo reči po deo reči).

Zvuči prosto, ali da bi dobro predvideo nastavak rečenice o fizici, istoriji ili tuzi, model mora da u sebi „upakuje" mnogo obrazaca o svetu i jeziku. Zato može da prevodi, objašnjava, piše pesmu, programira. Posle osnovne obuke, ljudi ga dodatno uče da bude koristan, da prati uputstva i da izbegava štetu.

Šta jezički model NIJE:
• nije PRETRAŽIVAČ — ne „gleda" odgovor u bazi (osim kad mu se da alat za pretragu ili pristup tvojim beleškama);
• ne pamti razgovore sam po sebi — „memorija" se dodaje posebno — beleške i podaci koje mu aplikacija daje;
• nije nepogrešiv — može samouvereno da kaže nešto što zvuči tačno, a nije. To se zove HALUCINACIJA. Zato je dobro pravilo i za model i za korisnika: „ne izmišljaj — pitaj i proveri".

Da li takav model RAZUME ili samo vešto predviđa? Oko toga se ozbiljni naučnici i filozofi spore. Iskrenije je reći: ne znamo tačno, i pitanje zavisi i od toga šta mislimo pod „razumeti".`,
pr:{p:'Šta je „halucinacija" jezičkog modela?', o:['Kvar ekrana','Kad model samouvereno kaže nešto što zvuči tačno, a nije','Kad model odbije da odgovori'], t:1, z:'Model predviđa verovatan tekst — a verovatan nije uvek istinit. Zato se važne stvari proveravaju.'}},
{n:'Za šta je dobra, a gde treba opreza', t:`Gde AI već sada mnogo pomaže:
• medicina — čitanje snimaka, otkrivanje oblika proteina (AlphaFold — Nobelova nagrada za hemiju 2024);
• prevod, pisanje, učenje, programiranje;
• nauka — pretraga ogromnih podataka.

Rizici o kojima se ozbiljno raspravlja:
• LAŽI i DIPFEJKOVI — lažne slike, glasovi i snimci koje je teško razlikovati od pravih; prevaranti već kloniraju glasove rodbine;
• PRISTRASNOST — model nasledi predrasude iz podataka na kojima je učio;
• POSLOVI — neki poslovi će nestati ili se promeniti; ekonomisti se ne slažu koliko brzo i koliko;
• KONCENTRACIJA MOĆI — najjače modele može da napravi samo nekoliko ogromnih firmi i država;
• dugoročni rizici moćnijih sistema kojima se ne zna kako da se upravlja — za neke istraživače glavna briga, za druge preterivanje.

EU je 2024. usvojila prvi veliki zakon o veštačkoj inteligenciji (AI Act), koji zahteve određuje prema riziku.

Zdravo pravilo: koristi AI kao pametnog pomoćnika, ne kao proročište. Proveri ono što je važno — zdravlje, novac, pravo.`,
pr:{p:'Šta je dipfejk?', o:['Vrsta računara','Lažan snimak, slika ili glas napravljen pomoću AI, koji izgleda kao pravi','Greška u programu'], t:1, z:'AI može uverljivo da lažira lice i glas — zato i „glas rođaka" na telefonu treba proveriti.'}},
{n:'Kraj — šta je, a šta nije', t:`Da sažmemo:
AI JESTE:
• skup alata koji iz podataka uče obrasce;
• u nekim poslovima već bolja od ljudi (šah, prepoznavanje određenih snimaka), u drugima još slaba;
• tehnologija koja će verovatno, kao struja, prožeti mnoge poslove.

AI NIJE (bar za sada):
• nepogrešiva — halucinira i nasleđuje predrasude;
• svesna na način na koji je čovek — ili bar nema dokaza za to, a pitanje je otvoreno;
• neutralna — odražava podatke i odluke ljudi koji je prave;
• zamena za tvoj sud.

Kostur lekcije: od Tjuringa (1950) i Dartmuta (1956) preko „zima" do dubokog učenja (2012) i jezičkih modela (2022); pravila → učenje iz primera → neuronske mreže; jezički model predviđa nastavak teksta; halucinacije; koristi i rizici; AI Act.

Sledeće, poslednja lekcija cele škole: energija i tehnologije budućnosti — i pogled unazad na celu priču.`,
pr:{p:'Koje je zdravo pravilo za korišćenje AI?', o:['Verovati joj potpuno','Koristiti je kao pomoćnika, a važno (zdravlje, novac, pravo) proveriti','Nikad je ne koristiti'], t:1, z:'AI je moćan alat, ali greši samouvereno — tvoj sud ostaje tvoj.'}}
],
kljucno:['AI = sistemi koji rade poslove za koje treba inteligencija; uska postoji, opšta još ne (sporno kad i da li).','Tjuring (1950), Dartmut (1956), „zime", Deep Blue (1997), duboko učenje (2012), AlphaGo (2016), jezički modeli (2022).','Mašinsko učenje: iz primera, ne iz pravila; neuronske mreže; podaci + brzi čipovi + algoritmi.','Jezički model predviđa nastavak teksta; nije pretraživač ni nepogrešiv — halucinira; da li „razume" — otvoreno.','Koristi (medicina, AlphaFold, prevod) i rizici (dipfejk, pristrasnost, poslovi, moć); AI Act EU 2024; koristi je kao pomoćnika, ne proročište.'],
kartice:[
{p:'Šta je Tjuringov test?', o:'Ako kroz razgovor ne možeš da razlikuješ mašinu od čoveka, mašina „misli" (Tjuring, 1950).'},
{p:'Po čemu se mašinsko učenje razlikuje od stare AI?', o:'Uči iz primera umesto iz pravila koja napišu ljudi.'},
{p:'Kako jezički model piše odgovor?', o:'Predviđa nastavak teksta deo po deo, na osnovu naučenih obrazaca.'},
{p:'Šta je halucinacija AI?', o:'Samouverena tvrdnja koja zvuči tačno, a nije.'},
{p:'Šta je dipfejk?', o:'Lažan snimak, slika ili glas napravljen pomoću AI.'}
],
razgovor:['Gde ti AI asistent najviše koristi, a gde mu ne bi verovao bez provere?','Da li misliš da AI može da napiše dobru priču — i šta bi joj, po tebi, uvek falilo?']},
{id:'11-5', naslov:'Energija i tehnologije budućnosti',
kuka:{p:'Za koliko je otprilike pojeftinila struja iz solarnih panela između 2010. i 2020?', o:['Za oko 10%','Za oko 50%','Za oko 90%'], t:2},
delovi:[
{n:'Svet radi na energiju', t:`Sve što radimo troši ENERGIJU — hrana, toplota, prevoz, fabrike, struja, internet. Bogatstvo zemalja skoro savršeno prati koliko energije troše.

Odakle je dobijamo danas? Otprilike 80% ukupne energije sveta još uvek dolazi iz FOSILNIH GORIVA — nafte, uglja i gasa — koja su u stvari sunčeva energija uskladištena u biljkama pre više miliona godina. Problem (oblast 2): sagorevanjem puštaju CO₂, koji zagreva planetu, i zagađuju vazduh.

SRBIJA: većina struje dolazi iz uglja (lignit — Kolubara, Kostolac; termoelektrane u Obrenovcu i Kostolcu), a oko četvrtine i više iz hidroelektrana (Đerdap, Drina). Zato je vazduh zimi u mnogim gradovima među najzagađenijima u Evropi — doprinose i ložišta u kućama.

Zadatak 21. veka: obezbediti VIŠE energije (milijarde ljudi još je treba) uz MANJE CO₂. To je inženjerski problem bez presedana.`,
pr:{p:'Koliko energije sveta danas otprilike dolazi iz fosilnih goriva?', o:['Oko 20%','Oko 50%','Oko 80%'], t:2, z:'Nafta, ugalj i gas i dalje čine oko četiri petine ukupne energije, iako obnovljivi brzo rastu.'}},
{n:'Sunce, vetar i baterije', t:`Najveće iznenađenje poslednjih 15 godina: OBNOVLJIVA ENERGIJA je postala JEFTINA.
• Struja iz SOLARNIH PANELA pojeftinila je oko 90% između 2010. i 2020. Na mnogim mestima je danas najjeftiniji način da se napravi nova struja.
• VETAR — takođe mnogo jeftiniji, posebno na moru.
• Problem: sunce ne sija noću, vetar ne duva po narudžbini. Zato su ključne BATERIJE — litijum-jonske baterije su pojeftinile takođe oko 90% od 2010. — i bolje mreže koje prebacuju struju preko granica.

ELEKTRIČNI AUTOMOBILI rastu brzo, posebno u Kini i Evropi; toplotne pumpe zamenjuju grejanje na gas i ugalj.

Učenje iz prošlosti (lekcija o rastu): što se neka tehnologija više proizvodi, to postaje jeftinija — svako udvostručenje proizvodnje solarnih panela spuštalo im je cenu za oko petinu. Zato je promena brža nego što su predviđanja pre deset godina mislila. Ali i dalje — sporija nego što bi klima tražila.`,
pr:{p:'Šta je glavni problem sunca i vetra?', o:['Preskupi su','Nisu stalni — zato trebaju baterije i bolje mreže','Zagađuju'], t:1, z:'Proizvodnja zavisi od vremena; skladištenje i prenos rešavaju taj problem.'}},
{n:'Nuklearna energija — fisija i fuzija', t:`FISIJA — cepanje teških atoma (uranijum): ogromna energija bez CO₂, stabilna dan i noć. Francuska iz nje dobija oko dve trećine struje.
Protiv: nesreće — ČERNOBILJ (1986), FUKUŠIMA (2011) — i otpad koji ostaje opasan hiljadama godina; elektrane su skupe i grade se dugo.
Za: po proizvedenoj struji, nuklearna energija ima jedan od najmanjih brojeva smrti i najmanje CO₂ od svih izvora (ugalj ubija mnogo više, polako, kroz zagađen vazduh).
Srbija je posle Černobilja (1989) zabranila gradnju nuklearnih elektrana; zabrana je ukinuta krajem 2024, i o eventualnoj elektrani se tek razgovara.

FUZIJA — spajanje lakih atoma, kao u Suncu. Gorivo iz vode, skoro bez opasnog otpada, bez mogućnosti „bežanja" reakcije. Laboratorija u Kaliforniji je 2022. prvi put iz fuzije dobila više energije nego što je laser uneo u gorivo. Ali do elektrane je još dug put — šala kaže da je fuzija „uvek 30 godina daleko".`,
pr:{p:'Koja je razlika između fisije i fuzije?', o:['Nema razlike','Fisija cepa teške atome (današnje elektrane); fuzija spaja lake, kao Sunce (još nije u elektranama)','Fuzija je starija'], t:1, z:'Fisija radi decenijama; fuzija je obećanje — 2022. prvi „neto dobitak" u laboratoriji.'}},
{n:'Tehnologije koje dolaze', t:`Nekoliko oblasti za koje mnogi stručnjaci veruju da će oblikovati sledeće decenije (uz oprez — predviđanja tehnologije su notorno loša):

• BIOTEHNOLOGIJA — CRISPR (Nobelova nagrada 2020, Dudna i Šarpentje): „makaze" za precizno menjanje DNK; prve terapije naslednih bolesti krvi već su odobrene. mRNK vakcine (protiv kovida 2020) — platforma koja se ispituje i za rak. Etička pitanja: menjanje ljudskih embriona.
• VEŠTAČKA INTELIGENCIJA — prošla lekcija.
• KVANTNI RAČUNARI — koriste kvantna pravila (lekcija 1-5) za određene vrste zadataka; još eksperimentalni.
• SVEMIR — rakete za višekratnu upotrebu pojeftinile su lansiranje; sateliti za internet; planovi za povratak na Mesec.
• NOVI MATERIJALI i baterije, pametnije mreže.

Zajedničko pitanje svih: ne „da li je moguće", nego KO će kontrolisati, KOME će koristiti i KO će platiti cenu. To su pitanja iz oblasti „Vlast, pravo i svet" i „Novac i ekonomija" — tehnika ih ne rešava sama.`,
pr:{p:'Šta je CRISPR?', o:['Kvantni računar','Alat za precizno menjanje DNK — „genetske makaze"','Nova vrsta baterije'], t:1, z:'Dudna i Šarpentje, Nobelova nagrada 2020; prve terapije već postoje.'}},
{n:'Kraj škole — cela priča u jednom dahu', t:`Ovo je poslednja lekcija priče. Hajde unazad, kao kostur:

1. KOSMOS — pre 13,8 milijardi godina prostor se širi; zvezde kuju elemente; sve je od atoma.
2. ZEMLJA — pre 4,6 milijardi godina; ploče, okeani, klima.
3. ŽIVOT — ćelija, DNK, evolucija prirodnom selekcijom.
4. TELO — sistem organa, hrana, imunitet, mozak i san.
5. UM — pamćenje, emocije, pristrasnosti, jezik.
6. ISTORIJA — lovci-sakupljači, njiva, gradovi i pismo, antika, srednji vek, nauka i mašine.
   + 20. VEK — svetski ratovi, Hladni rat, Jugoslavija od nastanka do raspada, svet posle 1991.
7. IDEJE — religije i filozofija: šta je svet, šta je dobro.
8. NOVAC — izbor u oskudici, poverenje, tržište i država.
   + GEOGRAFIJA — karta, kontinenti, klima, ljudi, države, Srbija na karti.
9. VLAST — država, pravo, ideologije, karta sveta.
10. UMETNOST — priča, slika, muzika: smisao.
11. TEHNOLOGIJA — od vatre do veštačke inteligencije.
I kroz sve: ALATI MIŠLJENJA — logika, brojevi, verovatnoća, naučni metod, otpornost na manipulaciju.

Jedna rečenica: od praska do tvog telefona, priča je o tome kako materija, pa život, pa um sve više znaju o sebi — i kako sa svakim novim znanjem dolazi i nova odgovornost.

Kartice će se i dalje vraćati na ponavljanje. A gde god poželiš da kopaš dublje — „Hoću više o ovome".`,
pr:{p:'Šta povezuje celu priču ove škole?', o:['Samo datumi','Materija, pa život, pa um sve više znaju o sebi — i svako znanje nosi novu odgovornost','Ništa, to su odvojene teme'], t:1, z:'Big History: od Velikog praska do tehnologije — rastuća složenost i znanje.'}}
],
kljucno:['Oko 80% energije sveta još iz fosilnih goriva; Srbija — ugalj (većina struje) i hidro; zadatak: više energije, manje CO₂.','Sunce i vetar pojeftinili oko 90% (2010–2020), baterije takođe; problem je stalnost — baterije i mreže.','Fisija: bez CO₂, stabilna, ali nesreće, otpad i cena; Srbija ukinula zabranu krajem 2024; fuzija — 2022. prvi neto dobitak u laboratoriji.','Budućnost: CRISPR i mRNK, AI, kvantni računari, svemir — pitanje je ko kontroliše i kome koristi.','Cela priča: kosmos → Zemlja → život → telo → um → istorija → 20. vek → ideje → novac → geografija → vlast → umetnost → tehnologija, uz alate mišljenja.'],
kartice:[
{p:'Koliki deo energije sveta danas daju fosilna goriva?', o:'Oko 80%.'},
{p:'Za koliko su pojeftinili solarni paneli 2010–2020?', o:'Oko 90%.'},
{p:'Koja je razlika između fisije i fuzije?', o:'Fisija cepa teške atome; fuzija spaja lake, kao u Suncu.'},
{p:'Odakle Srbija dobija najviše struje?', o:'Iz uglja (lignit), pa iz hidroelektrana.'},
{p:'Šta je CRISPR?', o:'Alat za precizno menjanje DNK (Nobel 2020).'}
],
razgovor:['Šta je od cele ove škole najviše promenilo kako gledaš na svet — jedna stvar?','Deca koja se danas rađaju odrastaće u svetu AI i nove energije. Šta je ono što bi trebalo da nauče od ljudi, a ne od mašina?']}
]},

{id:'12', naziv:'Alati mišljenja', ikona:'🔧', era:'kroz celu priču', lekcije:[
{id:'12-1', naslov:'Logika i argument',
kuka:{p:'„Sve ribe lete. Kit je riba. Dakle, kit leti." Da li je ovaj zaključak logički ispravno izveden?', o:['Ne, jer kit ne leti','Da — forma je ispravna, samo su premise lažne','Ne može se reći'], t:1},
delovi:[
{n:'Šta je argument', t:`U svakodnevici „argument" znači svađa. U filozofiji znači niz tvrdnji gde jedne (PREMISE) podupiru drugu (ZAKLJUČAK).

1. Svi ljudi su smrtni. (premisa)
2. Sokrat je čovek. (premisa)
3. Dakle, Sokrat je smrtan. (zaključak)

Kad čuješ nečiji stav, prvi korak je da ga razložiš: šta je zaključak, a koji su razlozi? Ljudi često iznesu samo zaključak, a razlozi ostanu prećutani. U prećutanim premisama se kriju greške.`,
pr:{p:'Šta je premisa?', o:['Konačan zaključak','Tvrdnja koja treba da podupre zaključak','Pitanje na koje se odgovara'], t:1, z:'Premise su razlozi, zaključak je ono što iz njih treba da sledi.'}},
{n:'Dedukcija, indukcija, abdukcija', t:`DEDUKCIJA: od opšteg ka posebnom. Ako su premise istinite, zaključak MORA biti istinit. Sigurna je, ali ne daje novo znanje — samo razvije ono što je već bilo u premisama.

INDUKCIJA: od posebnog ka opštem. „Sunce je izašlo svakog jutra koje pamtimo, dakle izaći će i sutra." Daje novo znanje, ali samo verovatno. Na njoj počiva skoro sva nauka i svakodnevni život.

ABDUKCIJA: zaključak na najbolje objašnjenje. Ulica je mokra — verovatno je padala kiša. Tako rade detektivi i lekari.`,
pr:{p:'„Svaki put kad pijem kafu posle 18h, ne mogu da spavam — znači kafa me drži budnim." Koje je ovo zaključivanje?', o:['Dedukcija','Indukcija','Nije zaključivanje'], t:1, z:'Od mnogo pojedinačnih slučajeva ka opštem pravilu — indukcija. Verovatno je tačno, ali nije sigurno.'}},
{n:'Valjano nije isto što i istinito', t:`Najvažnija stvar u lekciji — i odgovor na pitanje sa početka.

Argument je VALJAN kad zaključak sledi iz premisa, bez obzira da li su premise tačne.
• Sve ribe lete. Kit je riba. Dakle, kit leti. → VALJANO (forma savršena), ali su premise lažne, pa je i zaključak lažan.

Argument je ISPRAVAN kad je valjan I premise su istinite. Samo to garantuje istinit zaključak.

I obrnuto: istinit zaključak iz loše forme.
• Neki ljudi su pisci. Bukovski je čovek. Dakle, Bukovski je pisac. → Zaključak tačan, ali ne sledi iz premisa. Slučajno pogođen.

Kod svakog argumenta pitaš dve odvojene stvari: da li forma drži, i da li su premise tačne.`,
pr:{p:'„Svi pisci piju. Bukovski je pisac. Dakle, Bukovski pije." Šta važi?', o:['Valjan je, ali prva premisa nije tačna, pa nije ispravan','Nije valjan','Ispravan je, jer je zaključak tačan'], t:0, z:'Forma drži (valjan), ali „svi pisci piju" nije istina — pa argument nije ispravan, čak i ako je zaključak slučajno tačan.'}},
{n:'Česte greške', t:`Greške u zaključivanju zovu se ZABLUDE. Tri najčešće:

• NAPAD NA ČOVEKA: umesto argumenta napadaš onoga ko ga iznosi. „Šta ti znaš o zdravlju, pušiš." Možda puši, ali to ne govori da li je u pravu.
• SLAMNATI ČOVEK: izvrneš tuđi stav u slabiju verziju i oboriš nju. „Hoćeš manje poreza? Znači hoćeš da bolnice propadnu."
• LAŽNA DILEMA: ponudiš samo dve mogućnosti kad ih ima više. „Ili si sa nama ili protiv nas."

Ima ih desetine; poslednja lekcija ove linije („Kako te ubeđuju") ide dublje. Za sad: prepoznaj ih kad ih čuješ na televiziji. A čućeš ih svaki dan.`,
pr:{p:'„Ili podržavaš ovu vladu, ili mrziš svoju zemlju." Koja je ovo zabluda?', o:['Napad na čoveka','Slamnati čovek','Lažna dilema'], t:2, z:'Nudi samo dve mogućnosti, a ima ih mnogo više — lažna dilema.'}}
],
kljucno:['Argument = premise + zaključak; greške se kriju u prećutanim premisama.','Dedukcija je sigurna, indukcija verovatna, abdukcija — najbolje objašnjenje.','Valjano (forma drži) nije isto što i istinito; ispravan = valjan + istinite premise.','Tri zablude: napad na čoveka, slamnati čovek, lažna dilema.'],
kartice:[
{p:'Šta je premisa, a šta zaključak?', o:'Premisa je razlog; zaključak je ono što iz razloga treba da sledi.'},
{p:'Razlika između dedukcije i indukcije?', o:'Dedukcija: od opšteg ka posebnom, sigurna. Indukcija: od posebnog ka opštem, samo verovatna.'},
{p:'Kad je argument valjan, a kad ispravan?', o:'Valjan kad zaključak sledi iz premisa; ispravan kad je valjan i premise su istinite.'},
{p:'Šta je slamnati čovek?', o:'Izvrtanje tuđeg stava u slabiju verziju da bi se lakše oborio.'},
{p:'Šta je lažna dilema?', o:'Nuđenje samo dve mogućnosti kad ih ima više.'}
],
razgovor:['Seti se jedne rasprave (TV, posao, internet) gde je neko upotrebio jednu od tri zablude. Koju i kako?','Daj svoj primer indukcije iz posla ili kuće i reci zašto zaključak nije siguran.']},
{id:'12-2', naslov:'Brojevi koji varaju — procenti, proseci, velike brojke',
kuka:{p:'U gradu A prošle godine je bilo 100 krađa, u gradu B 50. Gde je opasnije?', o:['U gradu A','U gradu B','Ne može se reći bez broja stanovnika'], t:2},
delovi:[
{n:'U odnosu na šta?', t:`Broj sam po sebi skoro nikad ništa ne govori. Uvek pitaj: U ODNOSU NA ŠTA?

• 100 krađa u gradu od milion ljudi je mnogo bezbednije od 50 u gradu od 10.000. Poredi se BROJ NA 1.000 ili 100.000 STANOVNIKA.
• „Najviše saobraćajnih nesreća desi se po lepom vremenu!" Znači li da je magla bezbednija? Ne — po lepom vremenu se mnogo više vozi.
• „Većina nesreća se desi nadomak kuće." Pa da — tu se najviše i vozi.

Novinari i političari često daju samo jedan broj, bez onog drugog. Kad čuješ broj, u glavi dodaj: „od koliko?"`,
pr:{p:'„Najviše nesreća se desi po lepom vremenu." Da li je magla bezbednija?', o:['Da, brojevi to pokazuju','Ne — po lepom vremenu se mnogo više vozi','Ne može se reći ništa'], t:1, z:'Bez podatka koliko se vozi po lepom, a koliko po maglovitom vremenu, sam broj nesreća ne govori o opasnosti.'}},
{n:'Zamke procenata', t:`Procenti zvuče precizno, a lako varaju.

1. GORE PA DOLE NIJE ISTO. Cena 100 dinara poskupi 50% → 150. Pa pojeftini 50% → 75. Nisi na početku! Procenat se uvek računa od trenutne vrednosti.

2. PROCENAT I PROCENTNI POEN. Kamata poraste sa 2% na 3%. To je rast od jednog PROCENTNOG POENA — ali od 50 PROCENATA (jer je 1 polovina od 2). Obe rečenice su tačne; ko hoće da uplaši, reći će „50%", a ko hoće da umiri, „samo jedan poen".

3. PROCENAT OD MALOG BROJA. „Broj slučajeva porastao 200%!" — sa 1 na 3. Kad je osnova mala, procenti divljaju.`,
pr:{p:'Cena 100, poskupi 50%, pa pojeftini 50%. Kolika je?', o:['100','75','125'], t:1, z:'100 → 150 → 75. Pojeftinjenje od 50% računa se od 150, ne od 100.'}},
{n:'Prosek i medijana', t:`U kafani sedi devet radnika, svaki ima platu 80.000. Uđe milijarder. PROSEČNA plata u kafani skoči na nekoliko miliona — a niko nije bogatiji nego pre minut.

Zato postoji MEDIJANA: poređaš sve od najmanjeg do najvećeg i uzmeš onog u SREDINI. U kafani je medijana i dalje 80.000. Medijana je mnogo bolja slika „tipičnog" kad ima nekoliko ogromnih vrednosti.

Plate su baš takve: nekolicina zarađuje mnogo, pa je PROSEČNA plata viša od onoga što zarađuje „obični" čovek. U Srbiji je medijalna plata osetno niža od prosečne — zato mnogi kad čuju prosek kažu „ko to prima?". Imaju pravo.`,
pr:{p:'Devet ljudi ima platu 80.000, a deseti je milijarder. Šta bolje opisuje tipičnu platu?', o:['Prosek','Medijana','Ni jedno ni drugo'], t:1, z:'Medijana (vrednost u sredini) se ne pomera zbog jednog milijardera; prosek leti u nebo.'}},
{n:'Velike brojke', t:`Milion, milijarda, bilion — mozak ih sve oseti kao „puno". Probaj ovako, u sekundama:

• MILION sekundi = oko 11 i po DANA.
• MILIJARDA sekundi = oko 32 GODINE.
• BILION (hiljadu milijardi) sekundi = oko 32.000 GODINA — duže od cele pisane istorije.

Između milijarde i miliona nije „malo više" — razlika je kao između jedanaest dana i jednog života.

I trik za državne brojke: PODELI PO GLAVI. „Država daje milijardu evra" — Srbija ima oko 6,6 miliona ljudi, znači oko 150 evra po stanovniku. Odjednom znaš da li je to mnogo ili malo.`,
pr:{p:'Koliko traje milijardu sekundi?', o:['Oko 11 dana','Oko 32 godine','Oko 3 godine'], t:1, z:'Milion sekundi je oko 11 dana, a milijarda oko 32 godine — hiljadu puta više.'}},
{n:'Grafikoni koji lažu', t:`Grafikon može biti tačan i istovremeno lagati:

• ODSEČENA OSA. Stubovi 51 i 49 izgledaju kao tri prema jedan ako osa ne počinje od nule, nego od 48. Uvek pogledaj odakle kreće osa.
• BIRANI PERIOD. Ako hoćeš da pokažeš rast, kreneš od najniže tačke; ako hoćeš pad — od najviše. Isti podaci, suprotna priča.
• MALI UZORAK. „80% ispitanih zadovoljno" — od pet ljudi?
• PROSEK BEZ RASPONA. Prosečno je bilo 20 °C — između 19 i 21, ili između 0 i 40?

Pet pitanja za svaki broj u vestima:
1. U odnosu na šta?
2. Procenat od koliko?
3. Prosek ili medijana?
4. Koliki uzorak i koji period?
5. Ko meri i šta dobija od toga?`,
pr:{p:'Stub od 51 i stub od 49 na grafikonu izgledaju kao tri prema jedan. Kako je to moguće?', o:['Brojevi su pogrešni','Osa ne počinje od nule','Grafikon je okrenut'], t:1, z:'Kad osa kreće od 48, razlika od 2 izgleda ogromno. Uvek pogledaj početak ose.'}}
],
kljucno:['Broj bez „u odnosu na šta" ne govori ništa — poredi na 1.000 ili 100.000.','Procenti: gore-pa-dole nije isto; procentni poen nije procenat; procenti od malih brojeva divljaju.','Medijana je bolja slika tipičnog od proseka kad ima ekstremnih vrednosti (plate).','Milion sekundi ≈ 11 dana, milijarda ≈ 32 godine; državne brojke podeli po glavi.','Grafikoni varaju odsečenom osom, biranim periodom, malim uzorkom.'],
kartice:[
{p:'Prvo pitanje za svaki broj u vestima?', o:'U odnosu na šta?'},
{p:'Kamata sa 2% na 3% — koliko je porasla?', o:'Jedan procentni poen, ali 50%.'},
{p:'Razlika između proseka i medijane?', o:'Prosek je zbir podeljen brojem; medijana je vrednost u sredini — otporna na ekstreme.'},
{p:'Koliko traju milion i milijarda sekundi?', o:'Milion ≈ 11 dana; milijarda ≈ 32 godine.'},
{p:'Najčešći trik sa grafikonom?', o:'Osa koja ne počinje od nule.'}
],
razgovor:['Nađi u vestima ove nedelje jedan broj bez „u odnosu na šta". Šta ti fali da bi ga razumeo?','Objasni nekome razliku između prosečne i medijalne plate, na primeru koji on razume.']},
{id:'12-3', naslov:'Verovatnoća i rizik',
kuka:{p:'Novčić je pao pismo pet puta zaredom. Šta je verovatnije u šestom bacanju?', o:['Glava — „red je"','Pismo — „ide mu"','Isto: pola-pola'], t:2},
delovi:[
{n:'Šta je verovatnoća', t:`VEROVATNOĆA je broj od 0 do 1 (ili od 0% do 100%) koji kaže koliko je nešto očekivano: 0 — nemoguće, 1 — sigurno, 0,5 — pola-pola.

Najprostiji način da se računa: povoljni ishodi / svi mogući ishodi. Kocka ima 6 strana; šestica je 1 od 6, oko 17%. Dve kocke: zbir 7 se može dobiti na 6 načina od 36 — zato je sedmica najčešći zbir.

Kada se nešto ponavlja mnogo puta, ZAKON VELIKIH BROJEVA kaže da se udeo približava pravoj verovatnoći. Bacaj novčić 10 puta — možeš dobiti 7 glava. Bacaj 10.000 puta — biće vrlo blizu pola.

To je i razlog zašto KOCKARNICA uvek dobija: svaka igra ima malu prednost za kuću; pojedinac može da dobije večeras, ali na hiljadama igara i igrača kuća sigurno zarađuje.`,
pr:{p:'Šta kaže zakon velikih brojeva?', o:['Veliki brojevi su sigurniji','Što se nešto više puta ponovi, to je udeo bliži pravoj verovatnoći','Posle niza gubitaka sledi dobitak'], t:1, z:'Na malo bacanja sve je moguće; na mnogo — udeo se smiri oko prave verovatnoće.'}},
{n:'Kockarska zabluda', t:`Novčić nema pamćenje. Posle pet pisama, šesto bacanje je i dalje pola-pola. Verovanje da „mora doći glava jer je red" zove se KOCKARSKA ZABLUDA.

Najpoznatiji slučaj: kazino u Monte Karlu, 1913 — na ruletu je crna pala 26 puta zaredom. Ljudi su sve vreme ulagali na crvenu, sve više, uvereni da „mora". Izgubili su milione.

Obrnuta greška je „VRUĆA RUKA": „ide mi — nastaviću". U igrama na sreću ni to ne postoji.

Zašto mozak greši? Traži OBRASCE i u slučajnosti (sećaš se lekcije o pristrasnostima). Pravi slučajni niz izgleda „neslučajno" — ima više dugih nizova nego što očekujemo. Kad ljude zamoliš da izmisle slučajan niz bacanja, retko stave više od tri ista zaredom; prava slučajnost to radi često.`,
pr:{p:'Rulet je pao crno 10 puta zaredom. Kolika je šansa za crveno sledeći put?', o:['Mnogo veća nego inače','Ista kao inače — rulet nema pamćenje','Nula'], t:1, z:'Svako okretanje je nezavisno; „red je" je kockarska zabluda.'}},
{n:'Očekivana vrednost — zašto se loto ne isplati', t:`OČEKIVANA VREDNOST je prosek onoga što dobiješ kad se nešto ponovi mnogo puta: svaki ishod pomnožen svojom verovatnoćom, pa sabran.

Loto 7/39 (izvlači se 7 od 39 brojeva): šansa za sedmicu jednim tiketom je 1 prema 15.380.937. Srbija ima oko 6,6 miliona stanovnika; zamisli šešir sa 15 miliona imena — više od dve Srbije — iz kog se izvlači baš tvoje. Ako bi uplaćivao jednu kombinaciju svakog izvlačenja, dvaput nedeljno, sedmicu bi u proseku čekao oko 150.000 godina.

Igre na sreću su napravljene tako da je očekivana vrednost za igrača NEGATIVNA — u proseku vraćaju manje nego što se uplati. Nije zabranjeno kupiti tiket radi zabave i maštanja; to je cena karte za san. Ali to nije ulaganje.

Isti alat služi i za prave odluke: osiguranje (malo plaćaš sigurno da ne bi platio mnogo s malom šansom), garancija za uređaj (često se ne isplati), pa i: da li ići na pregled kad je trošak mali a mogući gubitak veliki.`,
pr:{p:'Zašto se igre na sreću na dugi rok ne isplate igraču?', o:['Jer su nameštene','Jer im je očekivana vrednost za igrača negativna — u proseku vraćaju manje od uplate','Jer niko nikad ne dobije'], t:1, z:'Neko dobije, ali na milione uplata isplata je uvek manja od uplate — razlika je zarada priređivača.'}},
{n:'Lažno pozitivan test', t:`Najvažnija i najmanje intuitivna lekcija o verovatnoći. Zamisli:
• neku bolest ima 1 od 100 ljudi;
• test otkrije 90% bolesnih;
• ali kod zdravih greši u 9% slučajeva (kaže „pozitivan" iako nisu bolesni).
Test ti je pozitivan. Kolika je šansa da si stvarno bolestan? Većina — i mnogi lekari — kaže oko 90%. Tačno je oko 9%!

Računaj na 1.000 ljudi:
• bolesnih je 10; test nađe 9 od njih;
• zdravih je 990; test greškom kaže „pozitivan" kod njih oko 89;
• ukupno pozitivnih: 9 + 89 = 98, a bolesnih među njima — samo 9.

Pouka: kad je nešto RETKO, čak i dobar test daje mnogo lažnih uzbuna. Zato se posle pozitivnog skrining testa obično radi drugi, precizniji test, a lekar uzima u obzir da li uopšte imaš razloga za sumnju. I trik: kad te brojevi zbune, računaj na 1.000 LJUDI umesto u procentima — tako i lekari mnogo ređe greše (Gerd Gigerencer).`,
pr:{p:'Kod retke bolesti, šta najčešće znači pozitivan rezultat prvog testa?', o:['Skoro sigurno si bolestan','Moguće je, ali mnogi pozitivni su lažna uzbuna — treba potvrda drugim testom','Test ne radi'], t:1, z:'Kad je bolest retka, zdravih ima toliko da i mala greška testa među njima napravi više pozitivnih od pravih bolesnika.'}},
{n:'Kako se plašimo pogrešnih stvari', t:`Ljudi loše procenjuju RIZIK, i to predvidivo:
• Plašimo se onoga što je STRAŠNO i RETKO (avion, ajkula, teroristi), a ne onoga što je ČESTO i POZNATO (auto, pušenje, sedenje, visok pritisak).
• Plašimo se više onoga što ne kontrolišemo (putnik) nego onoga što kontrolišemo (vozač).
• Ono što smo skoro videli u vestima deluje češće nego što jeste (dostupnost, lekcija 5-4).

Primer: posle napada 11. septembra 2001. mnogi Amerikanci su umesto aviona seli u auta. Gigerencer je procenio da je zbog toga u narednoj godini u saobraćaju poginulo oko 1.500 ljudi više nego inače — više nego putnika u otetim avionima.

I APSOLUTNI vs RELATIVNI rizik (sećaš se 12-2): „lek DUPLIRA rizik od tromboze" zvuči strašno; ako je to sa 1 na 10.000 na 2 na 10.000 — razlika je jedan čovek na deset hiljada. Uvek pitaj: od koliko na koliko?

Kostur lekcije: verovatnoća 0–1; zakon velikih brojeva; kockarska zabluda; očekivana vrednost (loto 1 prema 15 miliona); lažno pozitivni testovi — računaj na 1.000 ljudi; plašimo se retkog i strašnog, a ne čestog i poznatog.

Sledeće: religije — šta su ljudi kroz istoriju verovali.`,
pr:{p:'„Rizik je dupliran" — šta prvo treba pitati?', o:['Ko je to rekao','Od koliko na koliko — koliki je apsolutni rizik','Ništa, dupliran je dupliran'], t:1, z:'Dupliranje sa 1 na 2 od 10.000 i sa 10 na 20 od 100 nije isto — odlučuje apsolutni broj.'}}
],
kljucno:['Verovatnoća 0–1 = povoljni / mogući ishodi; zakon velikih brojeva — na mnogo ponavljanja udeo se smiri.','Kockarska zabluda: slučajni događaji nemaju pamćenje (Monte Karlo 1913); mozak traži obrasce i u slučajnosti.','Očekivana vrednost: igre na sreću su u minusu za igrača; loto 7/39 = 1 prema 15.380.937.','Lažno pozitivni: kod retke bolesti i dobar test daje mnogo lažnih uzbuna — računaj na 1.000 ljudi.','Plašimo se retkog i strašnog umesto čestog i poznatog; uvek pitaj apsolutni rizik — od koliko na koliko.'],
kartice:[
{p:'Šta je kockarska zabluda?', o:'Verovanje da posle niza istih ishoda „mora" doći drugi — iako su događaji nezavisni.'},
{p:'Šta je očekivana vrednost?', o:'Prosečan ishod na mnogo ponavljanja: svaki ishod puta njegova verovatnoća, sabrano.'},
{p:'Kolika je šansa za sedmicu u lotu 7/39 jednim tiketom?', o:'1 prema 15.380.937.'},
{p:'Najbolji trik da ne pogrešiš sa testovima i procentima?', o:'Računaj na 1.000 ljudi umesto u procentima.'},
{p:'Koja je razlika između relativnog i apsolutnog rizika?', o:'Relativni kaže „duplo", apsolutni „sa 1 na 2 od 10.000".'}
],
razgovor:['Čega se ti plašiš više nego što statistika kaže da treba — a šta potcenjuješ?','Da li te je ikada „uhvatila" kockarska zabluda — u igri, u ljubavi, u poslu?']},
{id:'12-4', naslov:'Naučni metod — kako se nešto dokazuje',
kuka:{p:'U gradovima gde se prodaje više sladoleda više se ljudi i udavi. Šta to znači?', o:['Sladoled izaziva davljenje','Verovatno ništa direktno — oboje raste leti, kad je toplo','Davljenici jedu sladoled'], t:1},
delovi:[
{n:'Krug nauke', t:`Naučni metod nije jedna formula, nego navika koja ide u krug:
1. POSMATRAŠ nešto što ne razumeš;
2. postaviš HIPOTEZU — moguće objašnjenje;
3. iz nje izvedeš PREDVIĐANJE — šta bi moralo da se desi ako je hipoteza tačna;
4. PROVERIŠ ogledom ili merenjem;
5. ako predviđanje padne — hipoteza ide na doradu ili u kantu; ako prođe — ostaje, ali nikad „zauvek".

Lep primer iz istorije: lekar IGNAC ZEMELVAJS u Beču 1847. primećuje da u porodilištu gde rade lekari umire mnogo više porodilja nego tamo gde rade babice. Hipoteza: lekari dolaze sa obdukcija i na rukama nose „nešto" od mrtvih. Predviđanje: ako lekari peru ruke hlornim krečom, smrtnost će pasti. Proverio je — smrtnost je pala sa preko 10% na oko 1–2%. (Kolege mu nisu verovale; tek kasnije, sa otkrićem bakterija, je postalo jasno zašto je bio u pravu. Pouka i o tome kako i naučnici odbijaju ono što im kvari sliku.)`,
pr:{p:'Šta je hipoteza?', o:['Dokazana činjenica','Moguće objašnjenje iz kog se izvodi predviđanje koje se proverava','Mišljenje autoriteta'], t:1, z:'Hipoteza nije još znanje — vredi onoliko koliko preživi proveru svojih predviđanja.'}},
{n:'Opovrgljivost — Poperov test', t:`Filozof KARL POPER (20. vek) je pitao: šta razlikuje nauku od onoga što samo liči na nauku?

Odgovor: naučna tvrdnja mora biti OPOVRGLJIVA — mora postojati zamisliv ishod koji bi pokazao da je netačna. „Svi labudovi su beli" je naučna tvrdnja: jedan crni labud je obara (i bio je pronađen, u Australiji).

Tvrdnja koja se uklapa u BAŠ SVAKI ishod — nije jaka, nego prazna. Horoskop koji kaže „ove nedelje očekuj promene" ne može da padne, pa ništa i ne kaže. Teorija zavere u kojoj je svaki dokaz protiv nje „dokaz kako su sve sakrili" — takođe.

Ajnštajnova teorija je rizikovala: predvidela je tačno koliko će se svetlost zvezde savijati pored Sunca. Da je merenje (1919) pokazalo drugačije, pala bi. Nije pala. To je dobra nauka: kladi se na nešto što može da izgubi.

Posledica: nauka ne „dokazuje" konačno kao matematika. Ona gomila teorije koje su preživele mnogo pokušaja obaranja. Što je pokušaja više, poverenje je veće — ali vrata za ispravku ostaju otvorena.`,
pr:{p:'Zašto horoskop „očekuj promene" nije naučna tvrdnja?', o:['Jer je star','Jer ga nijedan ishod ne može opovrgnuti — uklapa se u sve','Jer ga pišu astrolozi'], t:1, z:'Tvrdnja koja ne može da padne ništa i ne govori — Poperov kriterijum opovrgljivosti.'}},
{n:'Korelacija nije uzrok', t:`KORELACIJA znači da dve stvari idu zajedno (kad raste jedno, raste i drugo). To NE znači da jedno izaziva drugo. Tri česte zamke:

1. TREĆI UZROK (zbunjujući činilac). Sladoled i davljenja idu zajedno — zbog leta. U nekim krajevima Evrope gde ima više rodâ rađa se više dece — jer su to seoski krajevi, gde su porodice veće.
2. OBRNUTI SMER. „Ljudi koji idu u bolnicu češće umiru" — ne zato što bolnica ubija, nego zato što u bolnicu idu bolesni.
3. SLUČAJNOST. Ako uporediš dovoljno mnogo stvari, neke će se poklopiti slučajno. Postoje cele zbirke smešnih poklapanja (broj filmova Nikolasa Kejdža i broj utopljenih u bazenima u SAD kroz godine).

Kako se onda dokazuje uzrok? Najbolje — OGLEDOM SA KONTROLNOM GRUPOM, gde se ljudi NASUMIČNO dele na one koji dobijaju lek i one koji ne dobijaju (lekcija 4-5). Nasumična podela izjednači sve ostale razlike, pa ostaje samo ono što ispitujemo. Kad ogled nije moguć (pušenje — ne možeš nasumično terati ljude da puše), uzrok se gradi iz više nezavisnih dokaza koji svi pokazuju isto, kao kod pušenja i raka pluća.`,
pr:{p:'Ljudi koji piju više kafe žive duže. Šta je dobro prvo pitanje?', o:['Koliko kafe da pijem','Da li postoji treći uzrok — npr. da li su ljudi koji piju kafu drugačiji po zdravlju, poslu, navikama','Ništa, kafa produžava život'], t:1, z:'Korelacija nije uzrok: pre zaključka traži treći činilac, obrnut smer ili slučajnost.'}},
{n:'Ponavljanje i provera', t:`Jedno istraživanje nije dokaz. Nauka se oslanja na:
• RECENZIJU — pre objave, drugi stručnjaci traže greške (ne hvata sve, ali pomaže);
• PONOVLJIVOST — drugi tim, ista metoda, isti rezultat? Ako ne — oprez.

KRIZA PONOVLJIVOSTI: 2015. veliki projekat je pokušao da ponovi 100 objavljenih istraživanja iz psihologije — jasno se ponovilo tek oko trećine. Slični problemi nađeni su i u medicini. Razlozi: mali uzorci, objavljuje se ono što je „zanimljivo", pritisak da se objavljuje, sitno „štelovanje" podataka dok ne ispadne značajno.

Da li to znači „nauci se ne može verovati"? Ne — to znači da nauka RADI: sama je otkrila sopstvene greške i uvela popravke (unapred prijavljena istraživanja, veći uzorci, objavljivanje podataka).

Praktično pravilo: jedna nova studija u novinama („naučnici otkrili da čokolada…") — zanimljivo, ali slabo. SAGLASNOST mnogih istraživanja i stručnih tela (npr. o vakcinama, o klimi, o pušenju) — to je ono čemu se veruje.`,
pr:{p:'Šta je pokazala kriza ponovljivosti?', o:['Da je nauka bezvredna','Da se mnoga pojedinačna istraživanja ne ponove — zato vredi saglasnost mnogih, a ne jedna studija','Da psihologija nije nauka'], t:1, z:'Nauka je sama otkrila problem i uvela popravke; pojedinačna studija je slab dokaz.'}},
{n:'Kako proceniti tvrdnju — i kraj', t:`Kratka lestvica dokaza, od najslabijeg ka najjačem:
1. „Meni je pomoglo", „čuo sam" — lična priča;
2. mišljenje stručnjaka bez podataka;
3. jedno istraživanje koje posmatra (korelacija);
4. ogled sa kontrolnom grupom, nasumično podeljenom;
5. pregled MNOGO takvih ogleda zajedno (meta-analiza) i saglasnost struke.

Pet pitanja za svaku „naučnu" vest:
• Ko je istraživao i ko je platio?
• Na koliko ljudi (ili samo na miševima)?
• Da li je bila kontrolna grupa?
• Korelacija ili ogled?
• Da li se slaže sa drugim istraživanjima?

DŽON SNOU je 1854. u Londonu ucrtao na mapu svaki slučaj kolere i video da se gomilaju oko jedne pumpe za vodu u ulici Brod. Vlasti su na njegov zahtev skinule ručku pumpe, a njegovi dokazi su postepeno promenili shvatanje kolere: širi se prljavom vodom, ne „lošim vazduhom". Posmatranje, hipoteza, provera — pre nego što je iko video bakteriju kolere.

Kostur lekcije: krug — posmatranje, hipoteza, predviđanje, provera; Poper — opovrgljivost; korelacija nije uzrok (treći uzrok, obrnut smer, slučajnost); kontrolna grupa; ponovljivost; lestvica dokaza.

Sledeće: geografija sveta — karta u glavi, pa vlast, pravo i svet.`,
pr:{p:'Šta je najjači dokaz na lestvici?', o:['Lična priča poznatog čoveka','Pregled mnogo ogleda sa kontrolnom grupom i saglasnost struke','Jedno novo istraživanje'], t:1, z:'Što više nezavisnih ogleda pokazuje isto, to je zaključak sigurniji.'}}
],
kljucno:['Krug nauke: posmatranje → hipoteza → predviđanje → provera → dorada (Zemelvajs i pranje ruku, 1847).','Poper: naučna tvrdnja mora biti opovrgljiva; ono što se uklapa u svaki ishod ništa ne kaže.','Korelacija nije uzrok: treći uzrok, obrnut smer, slučajnost; uzrok najbolje pokazuje nasumičan ogled sa kontrolnom grupom.','Jedna studija je slaba; ponovljivost i saglasnost su jake; kriza ponovljivosti — nauka sama ispravlja greške.','Lestvica dokaza od lične priče do meta-analize; pet pitanja za svaku naučnu vest (Snou i kolera, 1854).'],
kartice:[
{p:'Šta je opovrgljivost (Poper)?', o:'Naučna tvrdnja mora imati zamisliv ishod koji bi je oborio.'},
{p:'Koja su tri razloga zašto korelacija ne mora biti uzrok?', o:'Treći uzrok, obrnut smer, slučajnost.'},
{p:'Šta je otkrio Zemelvajs?', o:'Da pranje ruku lekara drastično smanjuje smrtnost porodilja (1847).'},
{p:'Šta je kriza ponovljivosti?', o:'Otkriće da se mnoga objavljena istraživanja ne ponove kad ih drugi provere.'},
{p:'Šta je najjači dokaz u nauci?', o:'Saglasnost mnogo ogleda sa kontrolnom grupom (meta-analiza) i struke.'}
],
razgovor:['Koje svoje uverenje bi mogao da proveriš kao naučnik — šta bi ga oborilo?','Navedi jednu „korelaciju" iz svog života (posao, san, raspoloženje) za koju si mislio da je uzrok — a možda je treći činilac.']},
{id:'12-5', naslov:'Kako te ubeđuju — retorika, propaganda, manipulacija',
kuka:{p:'Šta se desi kad čuješ istu netačnu tvrdnju više puta?', o:['Sve manje joj veruješ','Počinje da ti zvuči istinitije — čak i kad znaš da nije','Ništa'], t:1},
delovi:[
{n:'Retorika — tri dugmeta (Aristotel)', t:`Ubeđivanje nije samo po sebi loše — tako advokat brani nevinog, a lekar ubedi pušača da prestane. Aristotel je u „Retorici" opisao tri sredstva ubeđivanja:

• ETOS — ko govori: poverenje u govornika (stručnost, poštenje, „jedan od nas");
• PATOS — osećanja publike: strah, ponos, bes, sažaljenje, nada;
• LOGOS — argument: činjenice, logika, primeri.

Dobar govor obično koristi sva tri. Manipulacija počinje kad se patosom i etosom PREKRIJE slab ili nikakav logos: „Veruj mi, ja sam stručnjak, a oni hoće da ti naude" — bez ijednog proverljivog podatka.

Pitanja koja vrate logos u igru: Šta je tačno tvrdnja? Šta je dokaz? Kako bih znao da nije tačno?`,
pr:{p:'Šta je patos u retorici?', o:['Logika argumenta','Ubeđivanje preko osećanja publike','Poverenje u govornika'], t:1, z:'Etos — govornik, patos — osećanja, logos — argument (Aristotel).'}},
{n:'Šest prečica (Čaldini)', t:`Psiholog Robert Čaldini je proučavao prodavce, regrutere i prevarante i našao šest prečica kojima nas ubeđuju — jer mozak njima štedi vreme:

1. RECIPROCITET — dobio si nešto (besplatan uzorak, uslugu), pa osećaš dug.
2. DOSLEDNOST — kad jednom kažeš „da" na malo, lakše kažeš „da" na veće.
3. DRUŠTVENI DOKAZ — „svi to kupuju", „najprodavanije", puna kafana.
4. AUTORITET — beli mantil, titula, uniforma, poznato lice.
5. SIMPATIJA — lakše kažemo „da" onima koje volimo i koji liče na nas.
6. OSKUDNOST — „samo danas", „poslednja 2 komada", „ograničeno izdanje".

Sve ovo su često razumne prečice. Problem je kad ih neko svesno okida da bi preskočio tvoje razmišljanje. Prepoznaš li prečicu — dobiješ sekund da pitaš: da li bih ovo hteo i bez nje?`,
pr:{p:'Natpis „samo danas, poslednja 2 komada" koristi koju prečicu?', o:['Autoritet','Oskudnost','Reciprocitet'], t:1, z:'Ono čega ima malo deluje vrednije — i požuruje odluku pre razmišljanja.'}},
{n:'Propaganda', t:`PROPAGANDA je organizovano ubeđivanje masa, obično u korist vlasti, partije ili pokreta. Njeni alati se vekovima ne menjaju:
• PONAVLJANJE — ista poruka, svuda, stalno. Istraživanja pokazuju EFEKAT ILUZIJE ISTINE: rečenica koju si čuo više puta zvuči istinitije, čak i kad znaš da je netačna, jer je mozak lako obradi.
• JEDNOSTAVAN SLOGAN umesto složene stvarnosti.
• SLIKA NEPRIJATELJA — „oni" (stranci, izdajnici, manjina, elita) su krivi za sve; spoljna pretnja zbija redove i ućutkuje kritiku.
• OSEĆANJA — strah i ponos jači su od argumenata.
• KONTROLA KANALA — ko drži medije, bira i šta se NE kaže. Ćutanje je propaganda koliko i laž.

Nacistička propaganda i staljinistički kult ličnosti su najpoznatiji primeri; ali alati se koriste u svim sistemima i u svim ratovima — i danas, i na svim stranama. Pošten test: prepoznaješ li iste trikove kad dolaze od strane koja ti je bliska?`,
pr:{p:'Šta je efekat iluzije istine?', o:['Istina se uvek otkrije','Ponovljena tvrdnja deluje istinitije, čak i kad je netačna','Laž se brzo zaboravi'], t:1, z:'Ono što je poznato mozak lakše obradi — i to brka sa istinitim. Zato propaganda ponavlja.'}},
{n:'Trikovi u raspravi i na mreži', t:`Pored grešaka iz lekcije o logici (napad na čoveka, slamnati čovek, lažna dilema), često ćeš sresti:
• „A ŠTA JE SA…" (kvazi-kontra, eng. whataboutism) — umesto odgovora na kritiku, uperi prst na tuđu krivicu. Tuđa greška ne briše tvoju.
• BIRANJE TREŠANJA — pokaži samo podatke koji ti idu u prilog, ćuti o ostalima.
• ZATRPAVANJE — izgovori deset netačnih tvrdnji za minut; za opovrgavanje svake treba deset minuta.
• NAGLASAK I NASLOV — tačne činjenice, a lažan utisak („Posle vakcine umro čovek" — od saobraćajne nesreće).
• LAŽNA RAVNOTEŽA — „ima dve strane", kad na jednoj stoji jedan čovek, a na drugoj hiljadu istraživanja.
• MAMAC ZA KLIK I BES — sadržaj koji te razbesni širi se brže, jer algoritmi nagrađuju reakciju. Ako te nešto na mreži jako naljuti, to je trenutak da usporiš.
• DUBOKI LAŽNJACI (dipfejk) — glas i lice napravljeni veštačkom inteligencijom.`,
pr:{p:'Šta je „a šta je sa…"?', o:['Pošteno pitanje','Skretanje sa kritike na tuđu krivicu umesto odgovora','Dokaz'], t:1, z:'Tuđa greška ne odgovara na pitanje o tvojoj — to je samo promena teme.'}},
{n:'Odbrana — i kraj', t:`Šta stvarno pomaže (ovo je proveravano u istraživanjima):
• STANI. Pre deljenja — sekund. Najviše laži se širi iz brzine, ne iz zlobe.
• ISTRAŽI IZVOR. Ko ovo kaže? Šta je to za sajt? Ne čitaj samo stranicu — otvori novi prozor i proveri ko stoji iza nje (tako rade profesionalni proveravači činjenica — „bočno čitanje").
• NAĐI BOLJE IZVEŠTAVANJE. Da li to prenose i drugi, ozbiljni izvori, sa različitih strana?
• VRATI SE NA ORIGINAL. Šta tačno piše u studiji, ceo snimak, cela rečenica — ne isečak.

I „VAKCINA PROTIV MANIPULACIJE": istraživanja (npr. Sander van der Linden) pokazuju da ljudi koji unapred upoznaju trikove — kao ti sada — ređe nasedaju kad ih sretnu. Doza slabog virusa da se razvije otpornost.

Kostur lekcije: etos, patos, logos; Čaldinijevih šest prečica; propaganda — ponavljanje, slogan, neprijatelj, osećanje, kontrola kanala; trikovi u raspravi i na mreži; odbrana — stani, izvor, drugi izvori, original.

Kostur „Alata mišljenja": logika → brojevi → verovatnoća → naučni metod → otpornost na manipulaciju. Zajedno: kako da misliš sam.

Sledeće: tehnologija — od vatre do veštačke inteligencije.`,
pr:{p:'Šta je „bočno čitanje"?', o:['Čitanje brže','Proveravanje ko stoji iza izvora tako što ga potražiš na drugim mestima, umesto da veruješ samoj stranici','Čitanje samo naslova'], t:1, z:'Profesionalni proveravači činjenica odmah izađu sa sajta i provere ko je on — umesto da ga analiziraju iznutra.'}}
],
kljucno:['Retorika: etos (govornik), patos (osećanja), logos (argument); manipulacija prekriva slab logos.','Čaldini: reciprocitet, doslednost, društveni dokaz, autoritet, simpatija, oskudnost.','Propaganda: ponavljanje (iluzija istine), slogan, slika neprijatelja, strah i ponos, kontrola kanala — na svim stranama.','Trikovi: „a šta je sa…", biranje trešanja, zatrpavanje, lažna ravnoteža, bes kao mamac, dipfejk.','Odbrana: stani, istraži izvor (bočno čitanje), nađi druge izvore, vrati se na original; poznavanje trikova „vakciniše".'],
kartice:[
{p:'Šta su etos, patos i logos?', o:'Poverenje u govornika, osećanja publike, argument.'},
{p:'Navedi Čaldinijevih šest prečica.', o:'Reciprocitet, doslednost, društveni dokaz, autoritet, simpatija, oskudnost.'},
{p:'Zašto propaganda ponavlja?', o:'Zbog efekta iluzije istine — ponovljeno zvuči istinitije.'},
{p:'Šta je biranje trešanja?', o:'Pokazivanje samo podataka koji idu u prilog, uz ćutanje o ostalima.'},
{p:'Koja su četiri koraka odbrane od dezinformacija?', o:'Stani, istraži izvor, nađi druge izvore, vrati se na original.'}
],
razgovor:['Koja je poslednja stvar koju si kupio ili poverovao zbog neke od Čaldinijevih prečica?','Kad bi pisao lik manipulatora — koje trikove bi mu dao, i kako bi ga čitalac prozreo?']}
]}
];

// Redosled učenja: priča 1→11, a „Alati mišljenja" posle svake druge oblasti.
export const RED = (() => {
  const o = id => OBLASTI.find(x => x.id === id).lekcije.map(l => l.id);
  const a = o('12');
  return [...o('1'), ...o('2'), a[0], ...o('3'), ...o('4'), a[1], ...o('5'), ...o('6'), ...o('13'), a[2],
          ...o('7'), ...o('8'), a[3], ...o('14'), ...o('9'), ...o('10'), a[4], ...o('11')];
})();

// Razmaci ponavljanja u danima, po „kutiji" kartice (0 = nova ili promašena).
export const RAZMACI = [1, 3, 7, 21, 60, 120];
