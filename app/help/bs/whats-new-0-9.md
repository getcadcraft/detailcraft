---
title: Šta je novo u 0.9
summary: Dimenzije čelika iz UK Blue Book i nejednaki uglovi, radionički crteži za svaki dio u jednom PDF skupu, Moji profili za prilagođene presjeke, P-Delta i prirodne frekvencije, opterećenja vjetrom po ASCE 7, seizmički lokalitet i kombinacije, te kursori uživo uz Prati.
keywords: šta je novo, what's new, bilješke o izdanju, dnevnik promjena, 0.9, UK čelik, blue book, ub, uc, pfc, shs, rhs, chs, nejednaki ugao, radionički crtež, radionički crteži, skup listova, oznaka dijela, pdf, moji profili, prilagođeni profil, p-delta, drugi red, prirodna frekvencija, konačni elementi, modalna masa, opterećenje vjetrom, asce 7, seizmika, klasa lokaliteta, usgs, kombinacije opterećenja, lrfd, asd, uživo, kursori, prati, ljudi, oblačići, bilješke o izdanju, dnevnik izmjena, 0.8, 0.8.1, verzija, nove funkcije, montaža, dizalica, tablica opterećenja, film, autopilot, veze, armatura, zagušenje, temelj, temeljna ploča, slijeganje, okvir, drvo, lagani čelik, lista rezanja, izvodljivost, pristup zavaru, dobavljač, zaliha, rok isporuke, šta prvo puca, beton, seizmika, ploča, jezici, asistent
from: 4c95a2de
---

Ovo je ono što se promijenilo u DetailCraft 0.9 u odnosu na 0.8.1. Verzija 0.9 donosi dimenzije UK čelika, radionički crtež za svaki dio odjednom, veću karticu {{ui:Analysis}} za okvire i prikaz tuđih kursora kad radite zajedno.

## Novo

### UK čelik i radionički crteži

- **Dimenzije UK čelika.** Liste profila sada sadrže 976 dimenzija iz Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS i RHS, s hladno oblikovanim šupljim profilima odvojenim (njihovi nazivi počinju s CF). Nazivi se pišu prvo po porodici, kao UB305x165x40 ili SHS100x100x5.0, a unos onako kako to kažu crteži također radi: 305x165x40 UB, L100x100x10, SHS100x5. Vidi [Katalog profila](topic:profile-catalog).
- **Nejednaki uglovi.** UEA uglovi zadržavaju oba kraka kroz IFC uvoz i izvoz i kroz NC datoteke, a ogledalo okreće komad s kraja na kraj.
- **Svi radionički crteži odjednom.** Izaberite {{ui:Shop drawing}} u grupi {{ui:Output}} bez ičega odabranog. Prozor navodi svaku oznaku dijela, prikazuje pregled bilo koje od njih, a {{ui:Preuzmi sve}} sprema jedan PDF s jednom stranicom po oznaci, svaka naslovljena "List 3 od 42". {{ui:Download this sheet}} sprema onaj koji gledate. Sada i U-profili, uglovi i šuplji profili dobijaju listove. Vidi [Izrada radioničkih crteža](topic:shop-drawings).
- **Moji profili.** Prilagođeni profil se sada može čuvati za svaki novi model. U obrascu Prilagođeni profil ostavite označeno {{ui:Zadrži u „Moji profili“}}; lista {{ui:My profiles}} ispod njega ima {{ui:Keep}}, {{ui:Use here}} i {{ui:Remove}}. Lista se čuva u ovom pregledaču (do 200), a ne na vašem računu. Vidi [Ploče i profili](topic:plates-and-profiles).

### Analiza

- **Drugi red (P-Delta).** Označite {{ui:Drugi red (P-Delta)}} pored {{ui:Run}} na kartici {{ui:Analysis}} i uzdužne sile djeluju na deformisani okvir. Ploče i kruti podovi ostaju prvog reda, uz upozorenje. Vidi [Sile, reakcije i progibi](topic:frame-analysis).
- **Prirodne frekvencije.** Blok {{ui:Finite elements: natural frequencies}} ispod rezultata nalazi najniže oblike istog modela, s periodom i efektivnom modalnom masom, i prikazuje oblik na modelu. Vidi [Sile, reakcije i progibi](topic:frame-analysis).
- **Opterećenje vjetrom i seizmički lokalitet.** Tri nova bloka na kartici {{ui:Analysis}}: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} i {{ui:ASCE 7 load combinations}}. Vidi [Vjetar, seizmički lokalitet i ASCE 7 kombinacije](topic:wind-seismic-combinations).

### Zajednički rad

- **Kursori i imena.** U Live sesiji pokazivač svake osobe crta se u modelu s njenim imenom i bojom, a ono što je odabrala dobija okvir.
- **Prati osobu.** Otvorite {{ui:Učesnici}} u sesiji i izaberite {{ui:Follow}} uz ime; vaš pogled se pomjera s njihovim. Domaćin može izabrati {{ui:Ask everyone to follow me}}. Vidi [Praćenje osobe u Live sesiji](topic:follow-in-live).

### U svim aplikacijama

- Oblačići s opisom su Bootstrap oblačići, kartica s dobrodošlicom na početku ima dugme za zatvaranje, trake kartica se pomjeraju u stranu kad ne stanu, a naziv kartice pregledača imenuje otvoreni dokument, pa DetailCraft i CadCraft.

## Ispravljeno

- Prilagođeni profil se gubio kad biste započeli novi model.
- U-profili, uglovi i šuplji profili nedostajali su u skupu radioničkih crteža.

## Iskrena ograničenja

- Blokovi za vjetar, seizmiku i konačne elemente su pomoćna sredstva za provjeru. Vaš inženjer pregleda rezultate; oni nisu provjera prema normativu. Pretraga USGS-a testirana je na zamjenskom servisu, a ne na stvarnom.
- Konačni elementi i P-Delta provjereni su u odnosu na ručna i zatvorena rješenja, a ne na stvarnoj zgradi. Analiza izvijanja nije izrađena.
- Još nijedan britanski proizvođač nije isprobao UK dimenzije, a NC datoteke za nejednake uglove nisu radile na mašini.
- Skup radioničkih crteža je samo u PDF-u.
- Jezici osim engleskog su nacrti dobijeni mašinskim prevođenjem.
- Windows instalateri nisu potpisani kodom ({{ui:More info}}, zatim {{ui:Run anyway}}); macOS disk slika nije notarizovana (desni klik, zatim {{ui:Open}}).

Ranije promjene su u bilješkama za 0.8 i 0.8.1 niže na ovoj stranici.

## Ranije: 0.8 i 0.8.1

Ovo je ono što se promijenilo u DetailCraft 0.8 (1. novembar 2026) i 0.8.1 (2. novembar 2026) u odnosu na 0.7. Verzija 0.7 provjeravala je čelične elemente; 0.8 planira podizanja, predlaže veze, provjerava temelje i armaturu, te okvira drvene i lagane zidove, podove i krovove.

### Novo

**Montaža**

- **Plan montaže i video.** Na kartici {{ui:Erection}} opišite dizalicu (gdje stoji, njen najviši kuka, opremu koja nije u tablici) i upišite redove njene tablice opterećenja. DetailCraft podiže model po jedan sklop, po redoslijedu faza i sloj po sloj, i provjerava svako podizanje u odnosu na tablicu za njegov radijus i u odnosu na granicu koju postavite. {{ui:Save movie}} zapisuje jednu HTML datoteku koja se van mreže pušta u bilo kojem pregledaču, pa i na telefonu. Podizanja koja su iznad tablice, izvan nje ili previsoka nalaze se u {{ui:Problems}}. To je plan prema vašim brojevima, a ne plan podizanja. Vidi [Plan montaže i video](topic:erection-movie).

**Veze**

- **Autopilot veza.** Kartica {{ui:Autopilot}} pregleda svaki spoj koji nema vezu i predlaže jednu prema oblicima: temeljne ploče, smičuće pločice, čeone ploče za grede koje označite kao momentne, nastavke i čvorne limove. Zadajte ravnomjerno opterećenje ili jednu smičuću silu na kraju, i broj vijaka slijedi projektnu čvrstoću vijka. {{ui:Add them all}} dodaje prijedloge kao jedan korak poništavanja. To su početne vrijednosti za pregled, a ne projekat veze.
- **Provjere izvodljivosti.** {{ui:Problems}} za vijak do kojeg ključ ne može doći, vijke previše blizu za nasadni ključ, ugaone zavare izvan njihovih granica veličine i šuplje profile koji zadržavaju vodu. Pristup zavaru je nov: ugaoni zavar po cijelom obimu do kojeg ne može doći plamenik zavarivača navodi se uz dio koji smeta i udio zavara na koji utiče. Vidi [Provjere izvodljivosti](topic:constructability).

**Temelji i armatura**

- **Provjere temelja.** Kartica {{ui:Foundation}} provjerava temelje, kombinovane temelje i temeljne ploče na tlu koje opišete: nosivost, klizanje i prevrtanje od radnih opterećenja; savijanje, smicanje, probijanje, razvijanje i minimalnu armaturu od računskih opterećenja (ACI 318-19). Stub blizu ivice ili ugla provjerava se s presjekom odsječenim ivicom temelja. Slijeganje dolazi iz modula tla, fleksibilna ploča rješava se na oprugama iz modula podloge, a grupe pilota i potporni zidovi imaju vlastite panele. Opterećenja stubova mogu se upisati ili preuzeti iz {{ui:Analysis}}. Vidi [Provjere temelja](topic:foundation-checks).
- **Karta zagušenja armature.** Kartica {{ui:Congestion}} crta toplotnu kartu svakog temelja gledano odozgo: gdje šipke ostavljaju premalo prostora da beton dođe do dna, prema pravilu slobodnog razmaka i, ako ih unesete, najveće frakcije agregata i glave vibratora. Vidi [Karta zagušenja armature](topic:rebar-congestion).

**Okvir i zalihe**

- **Drvena i lagana konstrukcija.** Kartica {{ui:Framing}} izrađuje zidne, podne i krovne panele sa svakim komadom, listu rezanja, građu za kupovinu i radionički crtež u razmjeri. {{ui:Place as members}} stavlja komade u model, a {{ui:PDF sheets}} sprema jedan list za svaki panel. Dimenzije, razmak i nadvoji su vaši: DetailCraft ne provjerava da li nose opterećenje. Vidi [Paneli drvene i lagane konstrukcije](topic:framing-panels).
- **Zalihe dobavljača i rokovi isporuke.** Kartica {{ui:Supply}} čita listu zaliha dobavljača (CSV) i za svaki presjek koji lista rezanja kupuje pokazuje ima li dovoljno na zalihi i koliko traje čekanje. Manjkovi i kasni presjeci su u {{ui:Problems}}. Ništa se ne naručuje. Vidi [Zalihe dobavljača i rokovi isporuke](topic:supplier-stock).

**Analiza i projektovanje**

- **Šta prvo puca?** Na kartici {{ui:Analysis}} dugme nalazi kombinaciju nosivosti koja je merodavna, najslabiji element, koliko se opterećenja mogu povećati prije nego što prvi element dostigne svoju granicu, te najslabiju čeonu ploču ili smičuću pločicu gdje je poznata smična čvrstoća njihovih vijaka. Prvo su potrebne kombinacije i projektni normativ. Pritisak, smicanje bloka, zavari i poluga se ne provjeravaju. Vaš povezani asistent može tražiti isto.
- **Uživo.** Označite {{ui:Live: solve again after each edit}} i okvir se ponovo rješava nakon svake izmjene.
- **Još o betonu.** Vitki stub u okviru bez pomjeranja projektuje se za svoj uvećani moment (ACI 318-19 6.6.4.5). Seizmički period može se uzeti iz analize Rejlijevom metodom. Ploča od ploča dobija armaturu koju svaki sloj treba iz svojih momenata, i jednosmjerno smicanje. Vidi [Provjera betonskih elemenata i izrada seizmičkih opterećenja](topic:concrete-and-seismic).
- **Za provjeru inženjera.** Rezultati temelja, betona i Šta prvo puca su pomoćna sredstva. Opterećenja vjetrom nisu izrađena.

**U svim aplikacijama**

- **Jezici.** Pomoć je na 54 jezika. Oni osim engleskog su nacrti dobijeni mašinskim prevođenjem dok ih izvorni govornik ne pročita; deset je novo (litvanski, letonski, bosanski, marati, telugu, albanski, afrikaans, filipinski, svahili, uzbečki).
- **Redovi alatne trake.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} bira prelamanje, 2 reda ili 1 red. Traka koja već stane ostaje kakva jeste; ostale se pomjeraju u stranu.
- **Mreža svojstava.** Polja temelja koriste zajedničku mrežu: kategorije koje se mogu sklopiti i zbijena gustina. Upisana aritmetika, kao 2*450, i dalje radi.
- **Ulazni uređaji.** Tačpedom, olovkom, 3D mišem, kontrolerom i MIDI-jem mogu se upravljati aplikacije. Vidi [Kretanje u 3D](topic:navigate-3d).
- **Panel s problemima.** Upozorenja novih provjera iznad pojavljuju se u istom panelu {{ui:Problems}} kao ranije.
- **Povežite svoj AI.** Vaš vlastiti asistent, povezan preko CadCraft Studio, radi sa svih osam aplikacija i vidi samo ono što dozvolite. Povezivanje jednim klikom, hostovani konektor i vlastiti API ključ u Studiju tek dolaze. Vidi [Koristite DetailCraft s AI asistentom](topic:use-with-ai-assistants).

### Ispravljeno u 0.8.1

- **Jezici u Studiju.** Studio i spakovana izdanja mogu mijenjati jezik za vrijeme rada; ranije su bila samo na engleskom. Još nije testirano na svim platformama: javite nam ako se jezik ne mijenja.
- **Odabir ukrštajućim prozorom.** Instalateri 0.8.1 već nose ispravno ponašanje odabira prozorom iz web verzije 0.8; stariji instalater ga nije imao.
- **Tableti u uspravnom položaju.** Višak visine mreže ide na platno, a raspored lista počinje na 760 px ili manje.

### Još nije u ovoj verziji

- **Slanje NC na mašinu** nije objavljeno.
- **Opterećenja vjetrom** za beton nisu izrađena, a provjere betona i temelja su za pregled inženjera.
- **Potpisivanje kodom.** Windows instalateri i macOS .dmg nisu potpisani, pa Windows može upozoriti, a macOS traži desni klik, zatim Otvori.

Ranije promjene su u [Šta je novo u 0.7](topic:whats-new-0-7).
