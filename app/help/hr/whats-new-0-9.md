---
title: Novosti u 0.9 (ranije)
summary: Veličine britanskog čelika iz Blue Book i nejednaki kutnici, radionički crteži za svaki dio u jednom skupu PDF-a, Moji profili za prilagođene presjeke, P-Delta i vlastite frekvencije, opterećenja vjetrom prema ASCE 7, seizmička lokacija i kombinacije te živi kursori s praćenjem.
keywords: novosti 0.9, raniji izdanje, novosti, što je novo, bilješke o izdanju, dnevnik promjena, 0.9, britanski čelik, blue book, ub, uc, pfc, shs, rhs, chs, nejednaki kutnik, radionički crtež, radionički crteži, skup listova, oznaka pozicije, pdf, moji profili, prilagođeni profil, p-delta, drugi red, vlastita frekvencija, konačni elementi, modalna masa, opterećenje vjetrom, asce 7, potres, klasa lokacije, usgs, kombinacije opterećenja, lrfd, asd, uživo, kursori, praćenje, ljudi, savjeti, 0.8, 0.8.1, verzija, nove značajke, montaža, dizalica, dijagram nosivosti, film, autopilot, veze, armatura, zgušnjavanje, temelj, temeljna ploča, slijeganje, konstrukcija, drvo, lagani čelični profili, popis za rezanje, izvedivost, pristup zavaru, dobavljač, zaliha, rok isporuke, što prvo puca, beton, potres, ploča, jezici, asistent
from: ab0c7f05
---

Ovo je što se promijenilo u DetailCraft 0.9 u odnosu na 0.8.1. 0.9 donosi veličine britanskog čelika, radionički crtež za svaki dio odjednom, veću karticu {{ui:Analiza}} za okvire i pregled kursora drugih ljudi kad radite zajedno.

## Novo

### Britanski čelik i radionički crteži

- **Veličine britanskog čelika.** Popisi profila sada sadrže 976 veličina iz Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS i RHS, a hladno oblikovani šuplji presjeci držani su odvojeno (njihovi nazivi počinju s CF). Nazivi se pišu prvo po obitelji, kao UB305x165x40 ili SHS100x100x5.0, a upisivanje na način kako ga pišu crteži također radi: 305x165x40 UB, L100x100x10, SHS100x5. Vidi [Katalog profila](topic:profile-catalog).
- **Nejednaki kutnici.** UEA kutnici zadržavaju oba krila kroz IFC uvoz i izvoz te kroz NC datoteke, a zrcaljenje okreće dio s kraja na kraj.
- **Svi radionički crteži odjednom.** Odaberite {{ui:Radionički crtež}} u grupi {{ui:Izlaz}} kad ništa nije odabrano. Prozor navodi svaku oznaku pozicije, prikazuje pregled bilo koje od njih, a {{ui:Preuzmi sve}} sprema jedan PDF sa stranicom za svaku oznaku, naslovljenu „List 3 od 42“. {{ui:Preuzmi PDF}} sprema onaj koji gledate. Kanali, kutnici i šuplji presjeci sada također dobivaju listove. Vidi [Izrada radioničkih crteža](topic:shop-drawings).
- **Moji profili.** Prilagođeni profil sada se može zadržati za svaki novi model. U obrascu Prilagođeni profil ostavite označeno {{ui:Zadrži u Moji profili}}; popis {{ui:Moji profili}} ispod njega ima {{ui:Zadrži}}, {{ui:Koristi ovdje}} i {{ui:Ukloni}}. Popis se čuva u ovom pregledniku (do 200), a ne na vašem računu. Vidi [Ploče i profili](topic:plates-and-profiles).

### Analiza

- **Drugi red (P-Delta).** Označite {{ui:Drugi red (P-Delta)}} uz Pokreni na kartici {{ui:Analiza}} i uzdužne sile djeluju na deformirani okvir. Ploče i kruti katovi ostaju prvog reda, uz upozorenje. Vidi [Sile, reakcije i progibi](topic:frame-analysis).
- **Vlastite frekvencije.** Blok {{ui:Konačni elementi: vlastite frekvencije}} pod rezultatima pronalazi najniže oblike istog modela, s periodom i efektivnom modalnom masom, i prikazuje oblik na modelu. Vidi [Sile, reakcije i progibi](topic:frame-analysis).
- **Opterećenje vjetrom i seizmička lokacija.** Tri nova bloka na kartici {{ui:Analiza}}: {{ui:Opterećenje vjetrom (ASCE 7, metoda smjernog djelovanja)}}, {{ui:Seizmičko mjesto i sustav (ASCE 7)}} i {{ui:ASCE 7 kombinacije opterećenja}}. Vidi [Vjetar, seizmička lokacija i ASCE 7 kombinacije](topic:wind-seismic-combinations).

### Zajednički rad

- **Kursori i imena.** U sesiji Uživo pokazivač svake osobe crta se u modelu s njezinim imenom i bojom, a ono što je odabrala dobiva okvir.
- **Praćenje osobe.** Otvorite {{ui:Ljudi}} u sesiji i odaberite {{ui:Prati}} uz ime; vaš se prikaz pomiče s njihovim. Domaćin može odabrati {{ui:Zamoli sve da me prate}}. Vidi [Praćenje osobe u sesiji Uživo](topic:follow-in-live).

### U svim aplikacijama

- Savjeti su Bootstrap savjeti, kartica s početnim savjetom ima gumb za zatvaranje, trake kartica se pomiču vodoravno kad ne stanu, a naziv kartice preglednika prikazuje otvoreni dokument, a zatim DetailCraft i CadCraft.

## Ispravljeno

- Prilagođeni profil se gubio kad ste započeli novi model.
- Kanali, kutnici i šuplji presjeci nedostajali su u skupu radioničkih crteža.

## Iskreni limiti

- Blokovi za vjetar, potres i konačne elemente pomoćna su sredstva za provjeru. Vaš inženjer pregledava rezultate; nisu provjera prema propisu. Pretraga USGS-a testirana je na zamjenskoj usluzi, a ne na živoj usluzi.
- Konačni elementi i P-Delta provjereni su prema ručnim i zatvorenim rješenjima, a ne prema stvarnoj zgradi. Analiza izvijanja nije izrađena.
- Nijedan britanski proizvođač još nije isprobao britanske veličine, a NC datoteke za nejednake kutnike nisu se izvršile na stroju.
- Skup radioničkih crteža dostupan je samo kao PDF.
- Jezici osim engleskog su strojni nacrti.
- Windows instalacijski programi nisu digitalno potpisani (Više informacija, zatim Ipak pokreni); macOS disk slika nije notarizirana (desni klik, zatim Otvori).

Ranije promjene nalaze se u bilješkama za 0.8 i 0.8.1 niže na ovoj stranici.

## Ranije: 0.8 i 0.8.1

Ovo je što se promijenilo u DetailCraft 0.8 (1. studenoga 2026.) i 0.8.1 (2. studenoga 2026.) u odnosu na 0.7. 0.7 je provjeravao čelične štapove; 0.8 planira dizanja, predlaže spojeve, provjerava temelje i armaturu te izrađuje okvire za drvene i lagane čelične zidove, podove i krovove.

### Novo

**Montaža**

- **Plan montaže i film.** Na kartici {{ui:Montaža}} opišite dizalicu (gdje stoji, njezinu najvišu kuku, opremu koja nije u dijagramu) i upišite retke njezina dijagrama nosivosti. DetailCraft diže model po jedan sklop, prema redoslijedu faza i sloj po sloj, i provjerava svako dizanje prema dijagramu na njegovom dosegu i prema rezervi koju postavite. {{ui:Spremi film}} zapisuje jednu HTML datoteku koja se reproducira izvan mreže u bilo kojem pregledniku, pa i na telefonu. Dizanja koja su iznad dijagrama, izvan njega ili previsoka nalaze se u {{ui:Problemi}}. Ovo je plan prema vašim brojevima, a ne plan dizanja. Vidi [Plan montaže i film](topic:erection-movie).

**Veze**

- **Autopilot veza.** Kartica {{ui:Autopilot}} pregledava svaki spoj bez veze i predlaže vezu prema oblicima: temeljne ploče, posmične pločice, čeone ploče za grede koje označite kao momentne grede, nastavke i ukrute. Zadajte jednoliko opterećenje ili jednu poprečnu silu na kraju, a broj vijaka slijedi projektnu nosivost vijka. {{ui:Dodaj sve}} dodaje prijedloge kao jedan korak poništavanja. To su početne vrijednosti za pregled, a ne projekt veze.
- **Provjere izvedivosti.** {{ui:Problemi}} za vijak koji ključ ne doseže, vijke preblizu za nasadni ključ, kutne zavare izvan granica veličine i šuplje presjeke koji zadržavaju vodu. Pristup zavaru je nov: kutni zavar oko cijelog spoja koji plamenik zavarivača ne doseže navodi se s dijelom koji smeta i udjelom zavara koji je zahvaćen. Vidi [Provjere izvedivosti](topic:constructability).

**Temelji i armatura**

- **Provjere temelja.** Kartica {{ui:Temelj}} provjerava temelje, kombinirane temelje i temeljne ploče na tlu koje opišete: nosivost, klizanje i prevrtanje od radnih opterećenja; savijanje, posmik, probijanje, razvoj i minimalnu armaturu iz faktoriziranih opterećenja (ACI 318-19). Stup blizu ruba ili kuta provjerava se s presjekom odrezanim rubom temelja. Slijeganje dolazi iz modula tla, fleksibilna ploča rješava se na oprugama iz modula podloge, a skupine pilota i potporni zidovi imaju vlastite panele. Opterećenja stupova mogu se upisati ili preuzeti iz {{ui:Analiza}}. Vidi [Provjere temelja](topic:foundation-checks).
- **Karta zgušnjavanja armature.** Kartica {{ui:Zgušnjavanje}} crta toplinsku kartu svakog temelja gledanog odozgo: gdje šipke ostavljaju premalo prostora da beton dođe do dna, prema pravilu čistog razmaka i, ako ih unesete, najvećem agregatu i glavi vibratora. Vidi [Karta zgušnjavanja armature](topic:rebar-congestion).

**Okviri i nabava**

- **Okviri od drva i lakih čeličnih profila.** Kartica {{ui:Okvir}} izrađuje okvire zidnih, podnih i krovnih panela sa svakim dijelom, popisom za rezanje, zalihom za kupnju i radioničkim crtežom u mjerilu. {{ui:Postavi kao štapove}} stavlja dijelove u model, a {{ui:PDF listovi}} sprema po jedan list za svaki panel. Veličine, razmaci i nadvoji su vaši: DetailCraft ne provjerava nose li opterećenje. Vidi [Okviri od drva i lakih čeličnih profila](topic:framing-panels).
- **Zaliha dobavljača i rokovi isporuke.** Kartica {{ui:Nabava}} čita popis zaliha dobavljača (CSV) i za svaki presjek koji popis za rezanje kupuje pokazuje ima li ga dovoljno na zalihi i koliko dugo se čeka. Manjkovi i zakašnjeli presjeci nalaze se u {{ui:Problemi}}. Ništa se ne naručuje. Vidi [Zaliha dobavljača i rokovi isporuke](topic:supplier-stock).

**Analiza i projektiranje**

- **Što prvo puca?** Na kartici {{ui:Analiza}} gumb pronalazi kombinaciju nosivosti koja je mjerodavna, najslabiji štap, koliko se opterećenja mogu povećati prije nego prvi štap dosegne granicu i najslabiju čeonu ploču ili posmičnu pločicu tamo gdje je poznata posmična nosivost njihovih vijaka. Potrebne su prvo kombinacije i projektni propis. Ležaj, posmično kidanje bloka, zavari i odizanje nisu provjereni. Vaš povezani asistent može tražiti isto.
- **Uživo.** Označite {{ui:Uživo: ponovno riješi nakon svake izmjene}} i okvir se ponovno rješava nakon svake izmjene.
- **Beton, više.** Vitak stup u okviru bez bočnog pomaka projektira se za svoj uvećani moment (ACI 318-19 6.6.4.5). Seizmički period može se uzeti iz analize Rayleighovom metodom. Ploča izrađena od ploha dobiva čelik koji svaki sloj treba prema svojim momentima i jednosmjernom posmiku. Vidi [Provjera betonskih elemenata i izrada seizmičkih opterećenja](topic:concrete-and-seismic).
- **Za provjeru inženjera.** Rezultati temelja, betona i Što prvo puca? pomoćna su sredstva. Opterećenja vjetrom nisu izrađena.

**U svim aplikacijama**

- **Jezici.** Pomoć je na 54 jezika. Jezici osim engleskog su strojni nacrti dok ih izvorni govornik ne pregleda; deset je novo (litavski, latvijski, bosanski, marathi, telugu, albanski, afrikaans, filipinski, svahili, uzbečki).
- **Redci alatne trake.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Redci alatne trake}} bira prijelom, 2 retka ili 1 redak. Traka koja već stane ostaje kakva jest; ostale se pomiču vodoravno.
- **Mreža svojstava.** Polja temelja koriste zajedničku mrežu: sklopive kategorije i kompaktna gustoća. Upisana aritmetika poput 2*450 i dalje radi.
- **Ulazni uređaji.** Touchpad, olovka, 3D miš, kontroler i MIDI mogu upravljati aplikacijama. Vidi [Kretanje u 3D](topic:navigate-3d).
- **Ploča problema.** Upozorenja novih provjera iznad pojavljuju se u istoj ploči {{ui:Problemi}} kao i prije.
- **Povežite svoj AI.** Vaš vlastiti asistent, povezan preko CadCraft Studija, radi sa svih osam aplikacija i vidi samo ono što dopustite. Povezivanje jednim klikom, hostirani konektor i vlastiti API ključ u Studiju tek dolaze. Vidi [Upotreba DetailCraft s AI asistentom](topic:use-with-ai-assistants).

### Ispravljeno u 0.8.1

- **Jezici u Studiju.** Studio i paketirana izdanja mogu mijenjati jezik za vrijeme rada; prije su bili samo na engleskom. Još nije testirano na svim platformama: javite nam ako se jezik ne mijenja.
- **Odabir prozorom koji siječe.** Instalacijski programi 0.8.1 nose ispravno ponašanje odabira prozorom koje je već bilo u web izdanju 0.8; stariji instalacijski program nije ga imao.
- **Tableti u uspravnom položaju.** Višak visine rešetke ide platnu, a raspored listova počinje na 760 px ili manje.

### Nije još u ovom izdanju

- **Slanje NC-a na stroj** nije objavljeno.
- **Opterećenja vjetrom** za beton nisu izrađena, a provjere betona i temelja su za pregled od strane inženjera.
- **Digitalni potpis.** Windows instalacijski programi i macOS .dmg nisu potpisani, pa Windows može upozoriti, a macOS traži desni klik, zatim Otvori.

Ranije promjene nalaze se u [Novosti u 0.7](topic:whats-new-0-7).
