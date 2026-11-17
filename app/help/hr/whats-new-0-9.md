---
title: Što je novo u verziji 0.9
summary: Dimenzije britanskog čelika iz Blue Book tablica i nejednaki kutnici, radionički crteži za svaki dio u jednom PDF skupu, Moji profili za prilagođene presjeke, P-Delta i vlastite frekvencije, opterećenja vjetrom prema ASCE 7, seizmička lokacija i kombinacije, te pokazivači uživo s funkcijom Prati.
keywords: što je novo, bilješke o izdanju, dnevnik promjena, 0.9, britanski čelik, blue book, ub, uc, pfc, shs, rhs, chs, nejednaki kutnik, radionički crtež, skup listova, oznaka pozicije, pdf, moji profili, prilagođeni profil, p-delta, drugi red, vlastita frekvencija, konačni elementi, modalna masa, opterećenje vjetrom, asce 7, potres, razred lokacije, usgs, kombinacije opterećenja, lrfd, asd, uživo, pokazivači, prati, sudionici, pomoćnik, 0.8, 0.8.1, verzija, nove značajke, montaža, dizalica, tablica nosivosti, film, autopilot, priključci, armatura, gustoća, temelj, okvir, drvo, lagani čelični, popis za rezanje, izvodljivost, dobavljač, vrijeme isporuke, što se prvo lomi, beton, potres, ploča, jezici, pomoćnik
from: 4c95a2de
---

Ovo su promjene u programu DetailCraft 0.9 u odnosu na 0.8.1. Verzija 0.9 donosi dimenzije britanskog čelika, radionički crtež za svaki dio odjednom, veću karticu {{ui:Analiza}} za okvire i prikaz pokazivača drugih osoba kad radite zajedno.

## Novo

### Britanski čelik i radionički crteži

- **Dimenzije britanskog čelika.** Popisi profila sada sadrže 976 dimenzija iz Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS i RHS, a hladno oblikovani šuplji profili držani su odvojeno (njihovi nazivi počinju s CF). Nazivi se pišu prvo obitelj, primjerice UB305x165x40 ili SHS100x100x5.0, a upisivanje onako kako to pišu nacrti također radi: 305x165x40 UB, L100x100x10, SHS100x5. Vidi [Katalog profila](topic:profile-catalog).
- **Nejednaki kutnici.** UEA kutnici zadržavaju obje krake kroz IFC ulaz i izlaz te kroz NC datoteke, a zrcaljenje okreće komad s kraja na kraj.
- **Svi radionički crteži odjednom.** Odaberite {{ui:Radionički crtež}} u grupi {{ui:Izlaz}} kad nije ništa odabrano. Prozor prikazuje svaku oznaku pozicije, pregledava bilo koju od njih, a {{ui:Preuzmi sve}} sprema jedan PDF sa stranicom za svaku oznaku, naslovljenom kao „List 3 od 42“. {{ui:Preuzmi PDF}} sprema onaj koji gledate. U-profili, kutnici i šuplji profili sada također dobivaju listove. Vidi [Izrada radioničkih crteža](topic:shop-drawings).
- **Moji profili.** Prilagođeni profil sada se može zadržati za svaki novi model. U obrascu Prilagođeni profil ostavite označenim {{ui:Zadrži u Mojim profilima}}; popis {{ui:Moji profili}} ispod njega ima {{ui:Zadrži}}, {{ui:Koristi ovdje}} i {{ui:Ukloni}}. Popis se čuva u ovom pregledniku (do 200), a ne u vašem računu. Vidi [Ploče i profili](topic:plates-and-profiles).

### Analiza

- **Drugi red (P-Delta).** Označite {{ui:Drugi red (P-Delta)}} uz {{ui:Pokreni}} na kartici {{ui:Analiza}} i aksijalne sile djeluju na deformirani okvir. Ploče i kruti stropovi ostaju prvog reda, uz upozorenje. Vidi [Sile, reakcije i progibi](topic:frame-analysis).
- **Vlastite frekvencije.** Blok {{ui:Konačni elementi: vlastite frekvencije}} ispod rezultata pronalazi najniže oblike istog modela, s periodom i efektivnom modalnom masom, i prikazuje oblik na modelu. Vidi [Sile, reakcije i progibi](topic:frame-analysis).
- **Opterećenja vjetrom i seizmička lokacija.** Tri nova bloka na kartici {{ui:Analiza}}: {{ui:Opterećenje vjetrom (ASCE 7, metoda smjernog djelovanja)}}, {{ui:Seizmičko mjesto i sustav (ASCE 7)}} i {{ui:ASCE 7 kombinacije opterećenja}}. Vidi [Vjetar, seizmička lokacija i kombinacije ASCE 7](topic:wind-seismic-combinations).

### Zajednički rad

- **Pokazivači i imena.** U sesiji Live pokazivač svake osobe crta se u modelu s njezinim imenom i bojom, a ono što je odabrala dobiva okvir.
- **Praćenje osobe.** Otvorite {{ui:Sudionici}} u sesiji i odaberite {{ui:Prati}} uz ime; vaš prikaz pomiče se s njezinim. Domaćin može odabrati {{ui:Zamoli sve da me prate}}. Vidi [Praćenje osobe u sesiji Live](topic:follow-in-live).

### U svakoj aplikaciji

- Savjeti na gumbima su Bootstrap savjeti, kartica početnog savjeta ima gumb za zatvaranje, trake kartica pomiču se u stranu kad ne stanu, a naziv kartice preglednika prikazuje otvoreni dokument, zatim DetailCraft i CadCraft.

## Ispravljeno

- Prilagođeni profil se gubio kad ste započeli novi model.
- U-profili, kutnici i šuplji profili nisu bili u skupu radioničkih crteža.

## Iskrena ograničenja

- Blokovi za vjetar, potres i konačne elemente su pomoćna sredstva za provjeru. Vaš inženjer pregledava rezultate; nisu provjera prema propisu. Pretraga USGS-a testirana je na zamjenskoj usluzi, a ne na uživo usluzi.
- Konačni elementi i P-Delta provjereni su prema ručnim i zatvorenim rješenjima, a ne prema stvarnoj zgradi. Analiza izvijanja nije izrađena.
- Nijedan britanski proizvođač konstrukcija još nije isprobao britanske dimenzije, a NC datoteke za nejednake kutnike nisu pokrenute na stroju.
- Skup radioničkih crteža je samo PDF.
- Jezici osim engleskog su strojne radne verzije.
- Windows instalateri nisu potpisani kodom ({{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}); macOS disk slika (.dmg) nije notarizirana (desni klik, zatim {{ui:Otvori}}).

Ranije promjene nalaze se u bilješkama za 0.8 i 0.8.1 niže na ovoj stranici.

## Ranije: 0.8 i 0.8.1

Ovo su promjene u programu DetailCraft 0.8 (1. studenoga 2026.) i 0.8.1 (2. studenoga 2026.) u odnosu na 0.7. Verzija 0.7 provjeravala je čelične štapove; 0.8 planira dizanja, predlaže priključke, provjerava temelje i armaturu te izrađuje okvire za drvene i lagane čelične zidove, stropove i krovove.

### Novo

**Montaža**

- **Plan montaže i film.** Na kartici {{ui:Montaža}} opišite dizalicu (gdje stoji, njezinu najvišu kuku i opremu za vezivanje koja nije u tablici nosivosti) i upišite retke njezine tablice nosivosti. DetailCraft podiže model jedan sklop u vremenu, prema redoslijedu faza i razinu po razinu, te provjerava svako dizanje prema tablici za njegov radijus i prema rezervi koju postavite. {{ui:Spremi film}} zapisuje jednu HTML datoteku koja radi bez mreže u bilo kojem pregledniku, pa i na telefonu. Dizanja koja su iznad tablice, iza nje ili previsoka nalaze se u {{ui:Problemi}}. To je plan prema vašim brojkama, a ne plan dizanja. Vidi [Plan montaže i film](topic:erection-movie).

**Priključci**

- **Autopilot priključaka.** Kartica {{ui:Autopilot}} pregledava svaki spoj bez priključka i predlaže ga prema profilima: bazne ploče, smične ploče, čeone ploče za grede koje označite kao momentne, nastavke i čvorne ploče. Zadajte jednoliko opterećenje ili poprečnu silu na jednom kraju, a broj vijaka slijedi projektnu čvrstoću vijka. {{ui:Dodaj sve}} dodaje prijedloge kao jedan korak poništavanja. To su početne vrijednosti za pregled, a ne projekt priključka.
- **Provjere izvodljivosti.** {{ui:Problemi}} za vijak do kojeg ključ ne dosegne, vijke preblizu za nasadni ključ, kutne zavare izvan granica veličine i šuplje profile koji zadržavaju vodu. Pristup zavaru je nov: kružni kutni zavar do kojeg ne dosegne plamenik zavarivača navodi se s dijelom koji smeta i udjelom zahvaćenog zavara. Vidi [Provjere izvodljivosti](topic:constructability).

**Temelji i armatura**

- **Provjere temelja.** Kartica {{ui:Temelji}} provjerava temeljne stope, spojene temeljne stope i temeljne ploče na tlu koje opišete: nosivost, klizanje i prevrtanje od uporabnih opterećenja; savijanje, posmik, proboj, sidrenje i minimalnu armaturu od računskih opterećenja (ACI 318-19). Stup blizu ruba ili kuta provjerava se s presjekom odrezanim rubom temelja. Slijeganje dolazi iz modula tla, fleksibilna ploča rješava se na oprugama iz modula podloge, a skupine pilota i potporni zidovi imaju vlastite panele. Opterećenja stupova mogu se upisati ili uzeti iz {{ui:Analiza}}. Vidi [Provjere temelja](topic:foundation-checks).
- **Karta gustoće armature.** Kartica {{ui:Gustoća}} crta toplinsku kartu svake temeljne stope gledano odozgo: gdje šipke ostavljaju premalo prostora da beton dođe do dna, prema pravilu čistog razmaka i, ako ih zadate, najvećem agregatu i glavi vibratora. Vidi [Karta gustoće armature](topic:rebar-congestion).

**Okvir i nabava**

- **Drvena i lagana čelična konstrukcija.** Kartica {{ui:Okvir}} izrađuje okvire zidnih, podnih i krovnih panela sa svakim komadom, popisom za rezanje, građom za nabavu i radioničkim crtežom u mjerilu. {{ui:Postavi kao štapove}} stavlja komade u model, a {{ui:PDF listovi}} sprema jedan list za svaki panel. Dimenzije, razmaci i nadvoji su vaši: DetailCraft ne provjerava nose li oni opterećenje. Vidi [Paneli za drvenu i laganu čeličnu konstrukciju](topic:framing-panels).
- **Zalihe dobavljača i rokovi isporuke.** Kartica {{ui:Nabava}} čita popis zaliha dobavljača (CSV) i za svaki profil koji popis za rezanje kupuje pokazuje ima li ga dovoljno na zalihi i koliko se čeka. Manjkovi i kasni profili nalaze se u {{ui:Problemi}}. Ništa se ne naručuje. Vidi [Zalihe dobavljača i rokovi isporuke](topic:supplier-stock).

**Analiza i proračun**

- **Što se prvo lomi?** Na kartici {{ui:Analiza}} gumb pronalazi kombinaciju čvrstoće koja je mjerodavna, najslabiji štap, koliko se opterećenja mogu povećati prije nego prvi štap dosegne svoju granicu, te najslabiju čeonu ploču ili smičnu ploču gdje je poznata posmična čvrstoća njihovih vijaka. Najprije su potrebne kombinacije i projektni propis. Ležaj, blok smicanja, zavari i poluga nisu provjereni. Vaš povezani pomoćnik može zatražiti isto.
- **Uživo.** Označite {{ui:Uživo: ponovno riješi nakon svake izmjene}} i okvir se ponovno rješava nakon svake izmjene.
- **Beton, još.** Vitki stup u okviru bez pomaka projektira se za svoj uvećani moment (ACI 318-19 6.6.4.5). Potresni period može se preuzeti iz analize Rayleighovom metodom. Ploča izrađena od ploča dobiva armaturu koju svaki sloj treba iz svojih momenata, te jednosmjerni posmik. Vidi [Provjera betonskih elemenata i izrada potresnih opterećenja](topic:concrete-and-seismic).
- **Za provjeru inženjera.** Rezultati temelja, betona i Što se prvo lomi su pomoćna sredstva. Opterećenja vjetrom nisu izrađena.

**U svakoj aplikaciji**

- **Jezici.** Pomoć je na 54 jezika. Ostali osim engleskog su strojne radne verzije dok ih ne pročita izvorni govornik; deset je novo (litavski, latvijski, bosanski, marathi, telugu, albanski, afrikaans, filipinski, svahili, uzbečki).
- **Redci alatne trake.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Redci alatne trake}} bira prijelom, 2 retka ili 1 redak. Traka koja već stane ostaje kakva je; ostale se pomiču u stranu.
- **Mreža svojstava.** Polja temeljne stope koriste zajedničku mrežu: sažimljive kategorije i zbijenu gustoću. Upisana aritmetika poput 2*450 i dalje radi.
- **Ulazni uređaji.** Dodirna ploča, olovka, 3D miš, kontroler i MIDI mogu upravljati aplikacijama. Vidi [Kretanje u 3D](topic:navigate-3d).
- **Ploča Problemi.** Upozorenja novih provjera iznad pojavljuju se u istoj ploči {{ui:Problemi}} kao i prije.
- **Povežite svog pomoćnika.** Vaš vlastiti pomoćnik, povezan kroz CadCraft Studio, radi sa svih osam aplikacija i vidi samo ono što dopustite. Povezivanje jednim klikom, hostirani konektor i vlastiti API ključ u Studiju tek dolaze. Vidi [Upotreba DetailCraft-a s pomoćnikom umjetne inteligencije](topic:use-with-ai-assistants).

### Ispravljeno u 0.8.1

- **Jezici u Studiju.** Studio i spakirana izdanja mogu promijeniti jezik tijekom rada; prije su bili samo na engleskom. Još nije provjereno na svim platformama: javite nam ako se jezik ne mijenja.
- **Odabir prozorom s križanjem.** Instalateri 0.8.1 već imaju ispravno ponašanje odabira prozorom kao i web verzija 0.8; stariji instalater ga nije imao.
- **Tableti u uspravnom položaju.** Višak visine mreže ide na platno, a raspored lista počinje na 760 px ili manje.

### Još nije u ovoj verziji

- **Slanje NC na stroj** nije objavljeno.
- **Opterećenja vjetrom** za beton nisu izrađena, a provjere betona i temelja su za pregled inženjera.
- **Potpisivanje kodom.** Windows instalateri i macOS .dmg nisu potpisani, pa Windows može upozoriti, a macOS traži desni klik, pa Otvori.

Ranije promjene nalaze se u [Što je novo u verziji 0.7](topic:whats-new-0-7).
