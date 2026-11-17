---
title: Šta je novo u 0.9
summary: Britanski čelični profili iz Blue Book-a i nejednaki uglovnici, radionički crteži za svaki deo u jednom PDF setu, Moji profili za prilagođene preseke, P-Delta i sopstvene frekvencije, ASCE 7 opterećenja vetrom, seizmička lokacija i kombinacije, i žive kursore sa Prati.
keywords: šta je novo, beleške o izdanju, dnevnik promena, 0.9, britanski čelik, blue book, ub, uc, pfc, shs, rhs, chs, nejednaki ugao, radionički crtež, radionički crteži, set listova, oznaka dela, pdf, moji profili, prilagođeni profil, p-delta, drugi red, sopstvena frekvencija, konačni elementi, modalna masa, opterećenje vetrom, asce 7, seizmika, klasa lokacije, usgs, kombinacije opterećenja, lrfd, asd, uživo, kursori, prati, ljudi, opisi alatki, beleške o izdanju, dnevnik promena, promene, 0.8, 0.8.1, verzija, nove funkcije, montaža, dizalica, dijagram nosivosti, film, autopilot, veze, armatura, zgusnutost, temelj, temeljna ploča, slijeganje, okvir, drvo, lagani čelični profili, lista sečenja, konstruktivnost, pristup zavaru, dobavljač, zaliha, rok isporuke, šta pukne prvo, uživo, beton, seizmika, ploča, jezici, asistent
from: 4c95a2de
---

Ovo je ono što se promenilo u DetailCraft 0.9 u poređenju sa 0.8.1. Verzija 0.9 donosi britanske čelične profile, radionički crtež za svaki deo odjednom, veću karticu {{ui:Analysis}} za okvire i prikaz kursora drugih ljudi kada radite zajedno.

## Novo

### Britanski čelik i radionički crteži

- **Britanske čelične veličine.** Liste profila sada sadrže 976 veličina iz Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS i RHS, sa hladno oblikovanim šupljim presecima odvojenim (njihova imena počinju sa CF). Imena se pišu prvo po porodici, na primer UB305x165x40 ili SHS100x100x5.0, a kucanje na način kako ga crteži pišu takođe radi: 305x165x40 UB, L100x100x10, SHS100x5. Pogledaj [Katalog profila](topic:profile-catalog).
- **Nejednaki uglovnici.** UEA uglovnici zadržavaju obe krake kroz IFC ulaz i izlaz i kroz NC datoteke, a ogledalo okreće komad s kraja na kraj.
- **Svi radionički crteži odjednom.** Izaberi {{ui:Shop drawing}} u grupi {{ui:Output}} kad ništa nije izabrano. Prozor navodi svaku oznaku dela, prikazuje pregled bilo koje od njih, a {{ui:Download all}} sačuva jedan PDF sa stranicom za svaku oznaku, naslovljenom „List 3 od 42“. {{ui:Download this sheet}} sačuva onaj koji gledate. Kanali, uglovnici i šuplji preseci sada takođe dobijaju listove. Pogledaj [Pravljenje radioničkih crteža](topic:shop-drawings).
- **Moji profili.** Prilagođeni profil sada može da se sačuva za svaki novi model. U obrascu Prilagođeni profil ostavi štiklirano {{ui:Keep in My profiles}}; lista {{ui:My profiles}} ispod nje ima {{ui:Keep}}, {{ui:Use here}} i {{ui:Remove}}. Lista se čuva u ovom pregledaču (do 200), a ne u tvom nalogu. Pogledaj [Ploče i profili](topic:plates-and-profiles).

### Analiza

- **Drugi red (P-Delta).** Štikliraj {{ui:Second order (P-Delta)}} pored Pokreni na kartici {{ui:Analysis}} i aksijalne sile deluju na deformisani okvir. Ploče i kruti podovi ostaju prvog reda, uz upozorenje. Pogledaj [Sile, reakcije i progibi](topic:frame-analysis).
- **Sopstvene frekvencije.** Blok {{ui:Finite elements: natural frequencies}} ispod rezultata nalazi najniže oblike istog modela, sa periodom i efektivnom modalnom masom, i prikazuje oblik na modelu. Pogledaj [Sile, reakcije i progibi](topic:frame-analysis).
- **Opterećenja vetrom i seizmička lokacija.** Tri nova bloka na kartici {{ui:Analysis}}: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} i {{ui:ASCE 7 load combinations}}. Pogledaj [Vetar, seizmička lokacija i kombinacije ASCE 7](topic:wind-seismic-combinations).

### Zajednički rad

- **Kursori i imena.** U Live sesiji pokazivač svake osobe se crta u modelu sa njenim imenom i bojom, a ono što je izabrala dobija okvir.
- **Prati osobu.** Otvori {{ui:People}} u sesiji i izaberi {{ui:Follow}} pored imena; tvoj prikaz se pomera sa njihovim. Domaćin može da izabere {{ui:Ask everyone to follow me}}. Pogledaj [Praćenje osobe u Live sesiji](topic:follow-in-live).

### U svim aplikacijama

- Opisi alatki su Bootstrap opisi, kartica početnog saveta ima dugme za zatvaranje, trake kartica se pomeraju u stranu kad ne stanu, a naziv kartice pregledača prikazuje otvoreni dokument, zatim DetailCraft i CadCraft.

## Ispravljeno

- Prilagođeni profil se gubio kad ste započeli novi model.
- Kanali, uglovnici i šuplji preseci nedostajali su u setu radioničkih crteža.

## Iskreno o ograničenjima

- Blokovi za vetar, seizmiku i konačne elemente su pomoćni alati za proveru. Vaš inženjer pregledava rezultate; to nije provera prema propisu. Pretraga USGS-a je testirana na zameni, a ne na živoj usluzi.
- Konačni elementi i P-Delta su provereni prema ručnim i zatvorenim rešenjima, a ne prema stvarnoj zgradi. Analiza izvijanja nije urađena.
- Nijedan britanski izrađivač još nije probao britanske veličine, a NC datoteke za nejednake uglovnike nisu pokrenute na mašini.
- Set radioničkih crteža je samo PDF.
- Jezici osim engleskog su nacrti mašinskog prevoda.
- Windows instalacije nisu potpisane kodom (Više informacija, pa Ipak pokreni); macOS disk slika nije notarizovana (desni klik, pa Open).

Ranije izmene su u beleškama za 0.8 i 0.8.1 niže na ovoj stranici.

## Ranije: 0.8 i 0.8.1

Ovo je ono što se promenilo u DetailCraft 0.8 (1. novembar 2026) i 0.8.1 (2. novembar 2026) u poređenju sa 0.7. Verzija 0.7 je proveravala čelične elemente; 0.8 planira dizanja, predlaže spojeve, proverava temelje i armaturu, i pravi okvire za drvene i lagane zidove, podove i krovove.

### Novo

**Montaža**

- **Plan montaže i film.** Na kartici {{ui:Erection}} opiši dizalicu (gde stoji, najvišu kuku, opremu koja nije u dijagramu) i unesi redove njenog dijagrama nosivosti. DetailCraft podiže model po jedan sklop, po redosledu faza i sprat po sprat, i proverava svako dizanje prema dijagramu za njegov radijus i prema rezervi koju postaviš. {{ui:Save movie}} upisuje jednu HTML datoteku koja se pušta van mreže u bilo kom pregledaču, i na telefonu. Dizanja koja su preko dijagrama, van njega ili previsoka nalaze se u {{ui:Problems}}. To je plan prema tvojim brojevima, a ne plan dizanja. Pogledaj [Plan montaže i film](topic:erection-movie).

**Veze**

- **Autopilot veza.** Kartica {{ui:Autopilot}} gleda svaki spoj bez veze i predlaže jednu prema oblicima: osnovne ploče, smičuće jezičke, čeone ploče za grede koje označiš kao momentne, nastavke i čvorne limove. Zadaj ravnomerno opterećenje ili jednu krajnju silu smicanja, a broj zavrtnjeva prati projektnu nosivost zavrtnja. {{ui:Add them all}} dodaje predloge kao jedan korak poništavanja. To su početne vrednosti za pregled, a ne projekat veze.
- **Provere konstruktivnosti.** {{ui:Problems}} za zavrtanj koji ključ ne dosegne, zavrtnje previše blizu za nasadni ključ, ugaone zavare van granica veličine i šuplje preseke koji zadržavaju vodu. Pristup zavaru je nov: ugaoni zavar oko celog spoja koji vrh zavarivačevog pištolja ne dosegne navodi se sa delom koji smeta i udelom zavara koji je pogođen. Pogledaj [Provere konstruktivnosti](topic:constructability).

**Temelji i armatura**

- **Provere temelja.** Kartica {{ui:Foundation}} proverava temelje, kombinovane temelje i temeljne ploče na tlu koji opišeš: nosivost, klizanje i preturanje od radnih opterećenja; savijanje, smicanje, probijanje, razvijanje i minimalni čelik iz faktorisanih opterećenja (ACI 318-19). Stub blizu ivice ili ugla proverava se sa presekom odsečenim ivicom temelja. Slijeganje dolazi iz modula tla, fleksibilna temeljna ploča rešava se na oprugama iz modula podloge, a grupe pilota i potporni zidovi imaju sopstvene panele. Opterećenja stubova mogu se uneti ili preuzeti iz {{ui:Analysis}}. Pogledaj [Provere temelja](topic:foundation-checks).
- **Mapa zgusnutosti armature.** Kartica {{ui:Congestion}} crta toplotnu mapu svakog temelja gledano odozgo: gde šipke ostavljaju premalo mesta da beton prođe dole, prema pravilu čistog razmaka i, ako ih zadaš, najvećem agregatu i glavi vibratora. Pogledaj [Mapa zgusnutosti armature](topic:rebar-congestion).

**Okviri i snabdevanje**

- **Drveni i lagani čelični okviri.** Kartica {{ui:Framing}} pravi okvire zidnih, podnih i krovnih panela sa svakim komadom, listom sečenja, zalihom koju treba kupiti i radioničkim crtežom u razmeri. {{ui:Place as members}} stavlja komade u model, a {{ui:PDF sheets}} čuva jedan list za svaki panel. Dimenzije, razmaci i nadvratnici su tvoji: DetailCraft ne proverava da li nose opterećenje. Pogledaj [Paneli drvenih i lakih čeličnih okvira](topic:framing-panels).
- **Zalihe dobavljača i rokovi.** Kartica {{ui:Supply}} čita listu zaliha dobavljača (CSV) i za svaki presek koji lista sečenja kupuje prikazuje da li ima dovoljno na zalihi i koliko dugo se čeka. Manjkovi i kasni preseci su u {{ui:Problems}}. Ništa se ne naručuje. Pogledaj [Zalihe dobavljača i rokovi](topic:supplier-stock).

**Analiza i projektovanje**

- **Šta pukne prvo?** Na kartici {{ui:Analysis}} dugme nalazi kombinaciju nosivosti koja je merodavna, najslabiji element, koliko opterećenja mogu da porastu pre nego što prvi element dostigne granicu, i najslabiju krajnju ploču ili smičući jezičak gde je poznata nosivost na smicanje njihovih zavrtnjeva. Potrebne su prvo kombinacije i projektni propis. Ležišni pritisak, smicanje blokom, zavari i odvajanje nisu provereni. Tvoj povezani asistent može da traži isto.
- **Uživo.** Štikliraj {{ui:Live: solve again after each edit}} i okvir se ponovo rešava posle svake izmene.
- **Beton, više.** Vitki stub u okviru bez pomeranja projektuje se za svoj uvećani moment (ACI 318-19 6.6.4.5). Seizmički period može da se uzme iz analize Rejlijevom metodom. Ploča od ploča dobija čelik koji svaki sloj treba iz svojih momenata, i jednosmerno smicanje. Pogledaj [Provera betonskih elemenata i pravljenje seizmičkih opterećenja](topic:concrete-and-seismic).
- **Za inženjera da proveri.** Rezultati za temelje, beton i Šta pukne prvo su pomoćni alati. Opterećenja vetrom nisu urađena.

**U svim aplikacijama**

- **Jezici.** Pomoć je na 54 jezika. Oni osim engleskog su nacrti mašinskog prevoda dok ih izvorni govornik ne pročita; deset je novo (litvanski, letonski, bosanski, marati, telugu, albanski, afrikans, filipinski, svahili, uzbečki).
- **Redovi alatki.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} bira prelom, 2 reda ili 1 red. Traka koja već staje ostaje kakva jeste; ostale se pomeraju u stranu.
- **Mreža svojstava.** Polja temelja koriste zajedničku mrežu: sažimljive kategorije i zbijenu gustinu. Aritmetika unesena kao 2*450 i dalje radi.
- **Ulazni uređaji.** Tačpad, olovka, 3D miš, kontroler i MIDI mogu da upravljaju aplikacijama. Pogledaj [Kretanje u 3D](topic:navigate-3d).
- **Panel Problemi.** Upozorenja novih provera iznad pojavljuju se u istom panelu {{ui:Problems}} kao ranije.
- **Poveži svog AI.** Tvoj sopstveni asistent, povezan preko CadCraft Studija, radi sa svih osam aplikacija i vidi samo ono što dozvoliš. Povezivanje jednim klikom, hostovani konektor i tvoj sopstveni API ključ u Studiju još dolaze. Pogledaj [Korišćenje DetailCraft-a sa AI asistentom](topic:use-with-ai-assistants).

### Ispravljeno u 0.8.1

- **Jezici u Studiju.** Studio i upakovana izdanja mogu da promene jezik tokom rada; ranije su bila samo na engleskom. Još nije testirano na svim platformama: javi nam ako se jezik ne menja.
- **Izbor prozorom koji prelazi.** Instalacije 0.8.1 nose ponašanje izbora prozorom koje je već bilo ispravno u web verziji 0.8; starija instalacija nije.
- **Tableti u uspravnom položaju.** Slobodna visina mreže ide platnu, a raspored lista počinje na 760 px ili manje.

### Još nije u ovoj verziji

- **Slanje NC na mašinu** nije objavljeno.
- **Opterećenja vetrom** za beton nisu urađena, a provere betona i temelja su za inženjera da pregleda.
- **Potpisivanje kodom.** Windows instalacije i macOS .dmg nisu potpisani, pa Windows može da upozori, a macOS traži desni klik, pa Open.

Ranije izmene su u [Šta je novo u 0.7](topic:whats-new-0-7).
