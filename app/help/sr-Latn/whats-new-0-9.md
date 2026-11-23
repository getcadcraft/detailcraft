---
title: Šta je novo u 0.9 (ranije)
summary: Veličine UK čeličnih profila i nejednaki uglovi, radionički crteži za svaki deo u jednom PDF skupu, Moji profili za prilagođene preseke, P-Delta i sopstvene frekvencije, opterećenja vetrom po ASCE 7, seizmička lokacija i kombinacije, kao i kursori uživo sa praćenjem.
keywords: šta je novo 0.9, ranije izdanje, šta je novo, beleške o izdanju, dnevnik promena, 0.9, UK čelik, blue book, ub, uc, pfc, shs, rhs, chs, nejednak ugao, radionički crtež, radionički crteži, skup listova, oznaka dela, pdf, moji profili, prilagođeni profil, p-delta, drugi red, sopstvena frekvencija, konačni elementi, modalna masa, opterećenje vetrom, asce 7, seizmika, klasa lokacije, usgs, kombinacije opterećenja, lrfd, asd, uživo, kursori, praćenje, ljudi, opisi alatki, 0.8, 0.8.1, verzija, nove funkcije, montaža, dizalica, dijagram nosivosti, film, autopilot, veze, armatura, zgusnutost, temelj, mat, sleganje, okvir, drvo, laki čelični profili, lista sečenja, izvodljivost, pristup varu, dobavljač, zaliha, rok isporuke, šta puca prvo, beton, ploča, jezici, asistent
from: ab0c7f05
---

Ovo je šta se promenilo u DetailCraft 0.9 u odnosu na 0.8.1. Verzija 0.9 donosi veličine UK čelika, radionički crtež za svaki deo odjednom, veću karticu {{ui:Analiza}} za okvire i prikaz kursora drugih ljudi kad radite zajedno.

## Novo

### UK čelik i radionički crteži

- **Veličine UK čelika.** Liste profila sada sadrže 976 veličina iz Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS i RHS, pri čemu su hladno oblikovani šuplji preseci odvojeni (njihovi nazivi počinju sa CF). Nazivi se pišu prvo porodicom, kao UB305x165x40 ili SHS100x100x5.0, a kucanje onako kako to pišu crteži takođe radi: 305x165x40 UB, L100x100x10, SHS100x5. Vidi [Katalog profila](topic:profile-catalog).
- **Nejednaki uglovi.** UEA uglovi zadržavaju oba kraka kroz IFC uvoz i izvoz i kroz NC datoteke, a ogledalo okreće komad s kraja na kraj.
- **Svi radionički crteži odjednom.** Izaberite {{ui:Radionički crtež}} u grupi {{ui:Izlaz}} kad ništa nije izabrano. Prozor navodi svaku oznaku dela, prikazuje pregled bilo koje od njih, a {{ui:Preuzmi sve}} čuva jedan PDF sa stranicom po oznaci, svaka naslovljena kao „List 3 od 42“. {{ui:Preuzmi PDF}} čuva onaj koji gledate. U-profili, uglovi i šuplji preseci sada takođe dobijaju listove. Vidi [Izrada radioničkih crteža](topic:shop-drawings).
- **Moji profili.** Prilagođeni profil sada može da se sačuva za svaki novi model. U obrascu Prilagođeni profil ostavite štiklirano {{ui:Zadrži u mojim profilima}}; lista {{ui:Moji profili}} ispod nje ima {{ui:Zadrži}}, {{ui:Koristi ovde}} i {{ui:Ukloni}}. Lista se čuva u ovom pregledaču (do 200), a ne u vašem nalogu. Vidi [Limovi i profili](topic:plates-and-profiles).

### Analiza

- **Drugi red (P-Delta).** Štiklirajte {{ui:Drugi red (P-Delta)}} pored Pokreni na kartici {{ui:Analiza}} i aksijalne sile deluju na deformisani okvir. Limovi i kruti podovi ostaju prvog reda, uz upozorenje. Vidi [Sile, reakcije i progibi](topic:frame-analysis).
- **Sopstvene frekvencije.** Blok {{ui:Konačni elementi: sopstvene frekvencije}} ispod rezultata nalazi najniže oblike istog modela, sa periodom i efektivnom modalnom masom, i prikazuje oblik na modelu. Vidi [Sile, reakcije i progibi](topic:frame-analysis).
- **Vetar i seizmička lokacija.** Tri nova bloka na kartici {{ui:Analiza}}: {{ui:Opterećenja vetrom (ASCE 7, usmereni postupak)}}, {{ui:Seizmička lokacija i sistem (ASCE 7)}} i {{ui:ASCE 7 kombinacije opterećenja}}. Vidi [Vetar, seizmička lokacija i ASCE 7 kombinacije](topic:wind-seismic-combinations).

### Zajednički rad

- **Kursori i imena.** U sesiji uživo pokazivač svake osobe crta se u modelu sa njenim imenom i bojom, a ono što je izabrala dobija okvir.
- **Praćenje osobe.** Otvorite {{ui:Ljudi}} u sesiji i izaberite {{ui:Prati}} pored imena; vaš prikaz se pomera zajedno sa njihovim. Domaćin može da izabere {{ui:Zamoli sve da prate mene}}. Vidi [Praćenje osobe u sesiji uživo](topic:follow-in-live).

### U svakoj aplikaciji

- Opisi alatki su Bootstrap opisi, kartica sa savetom na početku ima dugme za zatvaranje, trake kartica se pomeraju bočno kad ne staju, a naziv kartice pregledača navodi otvoreni dokument, pa DetailCraft i CadCraft.

## Ispravljeno

- Prilagođeni profil se gubio kad ste počeli novi model.
- U-profili, uglovi i šuplji preseci nedostajali su u skupu radioničkih crteža.

## Iskrena ograničenja

- Blokovi za vetar, seizmiku i konačne elemente su pomoćna sredstva za proveru. Vaš inženjer pregleda rezultate; to nije provera prema propisu. Pretraga USGS-a je testirana na zameni, a ne na pravoj usluzi.
- Konačni elementi i P-Delta su provereni prema ručnim i zatvorenim rešenjima, a ne prema stvarnoj zgradi. Analiza izvijanja nije napravljena.
- Nijedan UK proizvođač još nije probao UK veličine, a NC datoteke za nejednake uglove nisu pokretane na mašini.
- Skup radioničkih crteža je samo u PDF formatu.
- Jezici osim engleskog su mašinski nacrti.
- Instalateri za Windows nisu potpisani kodom (Više informacija, pa Ipak pokreni); disk slika za macOS nije notarizovana (desni klik, pa Otvori).

Ranije promene su u beleškama za 0.8 i 0.8.1 niže na ovoj stranici.

## Ranije: 0.8 i 0.8.1

Ovo je šta se promenilo u DetailCraft 0.8 (1. novembar 2026) i 0.8.1 (2. novembar 2026), u odnosu na 0.7. Verzija 0.7 je proveravala čelične elemente; 0.8 planira dizanja, predlaže veze, proverava temelje i armaturu i formira drvene i lagane zidove, podove i krovove.

### Novo

**Montaža**

- **Plan montaže i film.** Na kartici {{ui:Montaža}} opišite dizalicu (gde stoji, njen najviši kuka, opremu za vezivanje koja nije u dijagramu) i upišite redove njenog dijagrama nosivosti. DetailCraft podiže model jedan sklop po jedan, po redosledu faza i sprat po sprat, i proverava svako dizanje prema dijagramu za njegov radijus i prema marginama koje postavite. {{ui:Sačuvaj film}} upisuje jednu HTML datoteku koja radi van mreže u bilo kom pregledaču, pa i na telefonu. Dizanja koja su iznad dijagrama, van njega ili previsoka nalaze se u {{ui:Problemi}}. To je plan iz vaših brojeva, a ne plan dizanja. Vidi [Plan montaže i film](topic:erection-movie).

**Veze**

- **Automatski pilot za veze.** Kartica {{ui:Automatski pilot}} pregleda svaki spoj bez veze i predlaže vezu prema presecima: podne ploče, smičuće pločice, krajnje ploče za grede koje označite kao momentne, nastavke i rebra. Zadajte ravnomerno opterećenje ili jednu krajnju silu smicanja, pa broj zavrtnja prati projektnu nosivost zavrtnja. {{ui:Dodaj sve}} dodaje predloge kao jedan korak opozivanja. To su početne vrednosti za pregled, a ne projekat veze.
- **Provere izvodljivosti.** {{ui:Problemi}} za zavrtanj koji ključ ne može da dosegne, zavrtnje suviše blizu za nasadnik, ugaone varove van njihovih granica veličine i šuplje preseke koji zadržavaju vodu. Pristup varu je nov: obodni ugaoni var koji gorionik zavarivača ne može da dosegne prikazuje se sa delom koji smeta i udelom zahvaćenog vara. Vidi [Provere izvodljivosti](topic:constructability).

**Temelji i armatura**

- **Provere temelja.** Kartica {{ui:Temelj}} proverava temeljne stope, spojene temelje i temeljne ploče na tlu koje opišete: nosivost tla, klizanje i prevrtanje pod eksploatacionim opterećenjima; savijanje, smicanje, proboj, usidrenje i minimalnu armaturu pod faktorisanim opterećenjima (ACI 318-19). Stub blizu ivice ili ugla proverava se sa presekom odsečenim ivicom temelja. Sleganje dolazi iz modula tla, fleksibilna ploča rešava se na oprugama iz modula podloge, a grupe pilota i potporni zidovi imaju sopstvene panele. Opterećenja stubova mogu se upisati ili uzeti iz {{ui:Analiza}}. Vidi [Provere temelja](topic:foundation-checks).
- **Karta zgusnutosti armature.** Kartica {{ui:Zgusnutost}} crta toplotnu kartu svakog temelja gledano odozgo: gde šipke ostavljaju premalo prostora da beton dospe dole, u odnosu na pravilo slobodnog razmaka i, ako ih zadate, najkrupniji agregat i glavu vibratora. Vidi [Karta zgusnutosti armature](topic:rebar-congestion).

**Okvir i snabdevanje**

- **Drveni i laki čelični okvir.** Kartica {{ui:Okvir}} formira okvire zidnih, podnih i krovnih panela sa svakim komadom, listom sečenja, zalihom za kupovinu i radioničkim crtežom u razmeri. {{ui:Postavi kao štapove}} stavlja komade u model, a {{ui:PDF listovi}} čuva jedan list za svaki panel. Dimenzije, razmak i nadvratnici su vaši: DetailCraft ne proverava da li nose opterećenje. Vidi [Paneli drvenog i lakog čeličnog okvira](topic:framing-panels).
- **Zalihe dobavljača i rokovi isporuke.** Kartica {{ui:Snabdevanje}} čita spisak zaliha dobavljača (CSV) i za svaki presek koji lista sečenja kupuje pokazuje da li ima dovoljno na zalihi i koliko traje čekanje. Manjkovi i kasni preseci su u {{ui:Problemi}}. Ništa se ne naručuje. Vidi [Zalihe dobavljača i rokovi isporuke](topic:supplier-stock).

**Analiza i projektovanje**

- **Šta puca prvo?** Na kartici {{ui:Analiza}} dugme nalazi merodavnu kombinaciju nosivosti, najslabiji element, koliko opterećenja mogu da porastu pre nego što prvi element dostigne svoju granicu, i najslabiju krajnju ploču ili smičuću pločicu tamo gde je poznata smičuća nosivost njihovih zavrtnja. Prvo su potrebne kombinacije i projektni propis. Pritisak na rupu, smicanje bloka, varovi i poluženje nisu provereni. Vaš povezani asistent može da traži isto.
- **Uživo.** Štiklirajte {{ui:Uživo: ponovo rešavaj posle svake izmene}} i okvir se ponovo rešava posle svake izmene.
- **Još o betonu.** Vitak stub u okviru bez pomeranja projektuje se za svoj uvećani moment (ACI 318-19 6.6.4.5). Seizmički period može se uzeti iz analize Rejlijevom metodom. Ploča od limova dobija čelik koji svaki sloj treba iz svojih momenata, kao i jednosmerno smicanje. Vidi [Proveri betonske elemente i napravi seizmička opterećenja](topic:concrete-and-seismic).
- **Za proveru inženjera.** Rezultati temelja, betona i Šta puca prvo su pomoćna sredstva. Opterećenja vetrom nisu napravljena.

**U svakoj aplikaciji**

- **Jezici.** Pomoć je na 54 jezika. Ostali osim engleskog su mašinski nacrti dok ih ne pročita izvorni govornik; deset je novo (litvanski, letonski, bosanski, marati, telugu, albanski, afrikans, filipinski, svahili, uzbečki).
- **Redovi alatki.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Redovi alatki}} bira prelom, 2 reda ili 1 red. Traka koja već staje ostaje kakva jeste; ostale se pomeraju bočno.
- **Tabela svojstava.** Polja temelja koriste zajedničku tabelu: kategorije koje se mogu sklopiti i zbijeniji raspored. Upisana aritmetika, poput 2*450, i dalje radi.
- **Ulazni uređaji.** Tačped, olovka, 3D miš, kontroler i MIDI mogu da upravljaju aplikacijama. Vidi [Kretanje u 3D](topic:navigate-3d).
- **Panel problema.** Upozorenja novih provera iznad pojavljuju se u istom panelu {{ui:Problemi}} kao i ranije.
- **Povežite svoj AI.** Vaš asistent, povezan preko CadCraft Studio, radi sa svih osam aplikacija i vidi samo ono što dozvolite. Povezivanje jednim klikom, hostovani konektor i vaš sopstveni API ključ u Studiju tek dolaze. Vidi [Koristite DetailCraft sa AI asistentom](topic:use-with-ai-assistants).

### Ispravljeno u 0.8.1

- **Jezici u Studiju.** Studio i spakovana izdanja mogu da promene jezik u toku rada; ranije su bili samo na engleskom. Još nije testirano na svim platformama: javite nam ako se jezik ne menja.
- **Izbor ukrštajućim prozorom.** Instalateri 0.8.1 već nose ispravno ponašanje izbora prozorom iz web verzije 0.8; stariji instaler ga nije imao.
- **Tableti u uspravnom položaju.** Višak visine mreže ide na platno, a raspored lista počinje na 760 px ili manje.

### Još nije u ovoj verziji

- **Slanje NC na mašinu** nije objavljeno.
- **Opterećenja vetrom** za beton nisu napravljena, a provere betona i temelja su za pregled inženjera.
- **Potpisivanje kodom.** Instalateri za Windows i macOS .dmg nisu potpisani, pa Windows može da upozori, a macOS traži desni klik, pa Otvori.

Ranije promene su u [Šta je novo u 0.7](topic:whats-new-0-7).
