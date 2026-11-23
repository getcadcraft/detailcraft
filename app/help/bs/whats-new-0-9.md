---
title: Šta je novo u 0.9 (ranije)
summary: Britanske čelične dimenzije iz Blue Booka i nejednaki uglovi, radionički crteži za svaki dio u jednom skupu PDF-ova, Moji profili za prilagođene presjeke, P-Delta i prirodne frekvencije, opterećenja vjetrom po ASCE 7, seizmička lokacija i kombinacije, te kursori uživo i Prati.
keywords: šta je novo 0.9, ranije izdanje, šta je novo, napomene o izdanju, dnevnik promjena, 0.9, britanski čelik, blue book, UB, UC, PFC, SHS, RHS, CHS, nejednaki ugao, radionički crtež, radionički crteži, skup listova, oznaka dijela, PDF, moji profili, prilagođeni profil, P-Delta, drugi red, prirodna frekvencija, konačni elementi, modalna masa, opterećenje vjetrom, ASCE 7, seizmika, klasa lokacije, USGS, kombinacije opterećenja, LRFD, ASD, uživo, kursori, prati, učesnici, opisi alata, promjene, 0.8, 0.8.1, verzija, nove funkcije, montaža, dizalica, dijagram nosivosti, video, autopilot, spojevi, armatura, zagušenje, temelji, pristup zavaru, dobavljač, zaliha, rok isporuke, šta prvo puca, beton, seizmika, ploča, jezici, asistent
from: ab0c7f05
---

Ovo je šta se promijenilo u DetailCraft 0.9, u odnosu na 0.8.1. Verzija 0.9 donosi britanske čelične dimenzije, radionički crtež za svaki dio odjednom, veću karticu {{ui:Analiza}} za okvire i pregled kursora drugih kada radite zajedno.

## Novo

### Britanski čelik i radionički crteži

- **Britanske čelične dimenzije.** Liste profila sada sadrže 976 dimenzija iz Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS i RHS, s hladno oblikovanim šupljim presjecima držanim odvojeno (njihovi nazivi počinju sa CF). Nazivi se pišu prvo po porodici, kao UB305x165x40 ili SHS100x100x5.0, a upisivanje onako kako to pišu crteži također radi: 305x165x40 UB, L100x100x10, SHS100x5. Vidi [Katalog profila](topic:profile-catalog).
- **Nejednaki uglovi.** UEA uglovi zadržavaju oba kraka kroz IFC ulaz i izlaz i kroz NC datoteke, a zrcaljenje okreće dio s kraja na kraj.
- **Svi radionički crteži odjednom.** Izaberite {{ui:Radionički crtež}} u grupi {{ui:Izlaz}} bez odabranog objekta. Prozor navodi svaku oznaku dijela, prikazuje pregled bilo koje od njih, a {{ui:Preuzmi sve}} snima jedan PDF sa stranicom za svaku oznaku, naslovljenom "List 3 od 42". {{ui:Preuzmi PDF}} snima onaj koji gledate. U-profili, uglovi i šuplji presjeci sada također dobijaju listove. Vidi [Izrada radioničkih crteža](topic:shop-drawings).
- **Moji profili.** Prilagođeni profil se sada može čuvati za svaki novi model. U obrascu Prilagođeni profil ostavite označeno {{ui:Zadrži u Mojim profilima}}; lista {{ui:Moji profili}} ispod nje ima {{ui:Zadrži}}, {{ui:Koristi ovdje}} i {{ui:Ukloni}}. Lista se čuva u ovom pregledniku (do 200), a ne u vašem računu. Vidi [Ploče i profili](topic:plates-and-profiles).

### Analiza

- **Drugi red (P-Delta).** Označite {{ui:Drugi red (P-Delta)}} pored {{ui:Pokreni}} u kartici {{ui:Analiza}} i aksijalne sile djeluju na deformisani okvir. Ploče i kruti podovi ostaju prvog reda, uz upozorenje. Vidi [Sile, reakcije i progibi](topic:frame-analysis).
- **Prirodne frekvencije.** Blok {{ui:Konačni elementi: vlastite frekvencije}} ispod rezultata nalazi najniže oblike istog modela, sa periodom i efektivnom modalnom masom, i prikazuje oblik na modelu. Vidi [Sile, reakcije i progibi](topic:frame-analysis).
- **Opterećenje vjetrom i seizmička lokacija.** Tri nova bloka u kartici {{ui:Analiza}}: {{ui:Opterećenje vjetrom (ASCE 7, direkcijski postupak)}}, {{ui:Seizmički lokalitet i sistem (ASCE 7)}} i {{ui:ASCE 7 kombinacije opterećenja}}. Vidi [Vjetar, seizmička lokacija i ASCE 7 kombinacije](topic:wind-seismic-combinations).

### Zajednički rad

- **Kursori i imena.** U sesiji uživo pokazivač svake osobe se crta u modelu sa njenim imenom i bojom, a ono što je izabrala dobija okvir.
- **Prati osobu.** Otvorite {{ui:Učesnici}} u sesiji i izaberite {{ui:Prati}} pored imena; vaš pogled se pomjera zajedno s njihovim. Domaćin može izabrati {{ui:Traži od svih da prate mene}}. Vidi [Prati osobu u sesiji uživo](topic:follow-in-live).

### U svim aplikacijama

- Opisi alata su Bootstrap opisi alata, kartica početnog savjeta ima dugme za zatvaranje, trake kartica se pomjeraju bočno kada ne stanu, a naziv kartice u pregledniku navodi otvoreni dokument, zatim DetailCraft i CadCraft.

## Ispravljeno

- Prilagođeni profil se gubio kada ste započeli novi model.
- U skupu radioničkih crteža nedostajali su U-profili, uglovi i šuplji presjeci.

## Iskrena ograničenja

- Blokovi vjetra, seizmike i konačnih elemenata su pomoćna sredstva za provjeru. Vaš inženjer pregleda rezultate; to nije provjera prema normativu. USGS pretraga je testirana na zamjeni, a ne na stvarnoj usluzi.
- Konačni elementi i P-Delta su provjereni prema ručnim i zatvorenim rješenjima, a ne prema stvarnoj zgradi. Analiza izvijanja nije izgrađena.
- Nijedan britanski proizvođač još nije isprobao britanske dimenzije, a NC datoteke za nejednake uglove nisu pokretane na mašini.
- Skup radioničkih crteža je samo PDF.
- Jezici osim engleskog su nacrti prevedeni mašinom.
- Windows instalateri nisu digitalno potpisani (Više informacija, pa Ipak pokreni); macOS disk image nije notarizovan (desni klik, pa Otvori).

Ranije promjene su u napomenama za 0.8 i 0.8.1 niže na ovoj stranici.

## Ranije: 0.8 i 0.8.1

Ovo je šta se promijenilo u DetailCraft 0.8 (1. novembar 2026) i 0.8.1 (2. novembar 2026), u odnosu na 0.7. Verzija 0.7 je provjeravala čelične elemente; 0.8 planira dizanja, predlaže spojeve, provjerava temelje i armaturu, i uokvirava drvene i lagane zidove, podove i krovove.

### Novo

**Montaža**

- **Plan montaže i video.** U kartici {{ui:Montaža}} opišite dizalicu (gdje stoji, njen najviši kuka, oprema koja nije u dijagramu) i upišite redove njenog dijagrama nosivosti. DetailCraft podiže model jedan sklop po sklop, po redoslijedu faza i sloj po sloj, i provjerava svako dizanje prema dijagramu na njegovom dosegu i prema rezervi koju ste postavili. {{ui:Sačuvaj video}} piše jednu HTML datoteku koja se reproducira van mreže u svakom pregledniku, i na telefonu. Dizanja koja su preko dijagrama, izvan njega ili previsoka su u {{ui:Problemi}}. To je plan iz vaših brojeva, a ne plan dizanja. Vidi [Plan montaže i video](topic:erection-movie).

**Spojevi**

- **Autopilot spojeva.** Kartica {{ui:Autopilot}} gleda svaki spoj bez veze i predlaže ga iz oblika: osnovne ploče, smične limove, krajnje ploče za grede koje označite kao momentne, nastavke i rebra. Zadajte ravnomjerno opterećenje ili jednu krajnju silu smicanja, a broj vijaka slijedi projektnu nosivost vijka. {{ui:Dodaj sve}} dodaje prijedloge kao jedan korak poništavanja. To su početne vrijednosti za pregled, a ne projekt spoja.
- **Provjere konstruktivnosti.** {{ui:Problemi}} za vijak do kojeg ključ ne može doći, vijke preblizu za nasadni ključ, ugaone zavare van njihovih granica veličine i šuplje presjeke koji zadržavaju vodu. Pristup zavaru je nov: ugaoni zavar oko cijelog spoja do kojeg ne dopire plamenik zavarivača navodi se sa dijelom koji smeta i udjelom zahvaćenog zavara. Vidi [Provjere konstruktivnosti](topic:constructability).

**Temelji i armatura**

- **Provjere temelja.** Kartica {{ui:Temelji}} provjerava temeljne stope, kombinovane stope i temeljne ploče na tlu koje opišete: nosivost, klizanje i prevrtanje od radnih opterećenja; savijanje, smicanje, probijanje, razvoj i minimalni čelik iz faktorisanih opterećenja (ACI 318-19). Stub blizu ivice ili ugla provjerava se sa presjekom odsječenim ivicom temelja. Slijeganje dolazi iz modula tla, fleksibilna ploča se rješava na oprugama iz modula podloge, a grupe pilota i potporni zidovi imaju svoje panele. Opterećenja stubova mogu se upisati ili uzeti iz {{ui:Analiza}}. Vidi [Provjere temelja](topic:foundation-checks).
- **Mapa zagušenja armature.** Kartica {{ui:Zagušenje}} crta mapu toplote svake temeljne stope gledano odozgo: gdje šipke ostavljaju premalo prostora da beton dođe do dna, prema pravilu čistog razmaka i, ako ih upišete, najvećem agregatu i glavi vibratora. Vidi [Mapa zagušenja armature](topic:rebar-congestion).

**Okvir i nabavka**

- **Drveni i lagani čelični okvir.** Kartica {{ui:Okvir}} uokviruje panele zidova, podova i krovova sa svakim dijelom, listom rezanja, zalihom za kupnju i radioničkim crtežom u razmjeri. {{ui:Postavi kao elemente}} stavlja dijelove u model, a {{ui:PDF listovi}} snima jedan list za svaki panel. Dimenzije, razmaci i nadprozornici su vaši: DetailCraft ne provjerava da li nose opterećenje. Vidi [Paneli okvira od drveta i lakog čelika](topic:framing-panels).
- **Zaliha dobavljača i rokovi isporuke.** Kartica {{ui:Nabavka}} učitava listu zaliha dobavljača (CSV) i za svaki presjek koji lista rezanja kupuje pokazuje ima li dovoljno na zalihi i koliko traje čekanje. Kratki komadi i zakasneli presjeci su u {{ui:Problemi}}. Ništa se ne naručuje. Vidi [Zaliha dobavljača i rokovi](topic:supplier-stock).

**Analiza i projekt**

- **Šta prvo puca?** U kartici {{ui:Analiza}} dugme pronalazi kombinaciju nosivosti koja je merodavna, najslabiji element, koliko se opterećenja mogu povećati prije nego prvi element dostigne granicu, i najslabiju krajnju ploču ili smični lim tamo gdje je poznata smična nosivost njihovih vijaka. Prvo su potrebne kombinacije i projektni normativ. Ležanje, blok smicanje, zavari i izvlačenje nisu provjereni. Vaš povezani asistent može tražiti isto.
- **Uživo.** Označite {{ui:Uživo: ponovo riješi nakon svake izmjene}} i okvir se ponovo rješava nakon svake izmjene.
- **Beton, više.** Vitki stub u okviru bez pomaka projektuje se za svoj uvećani moment (ACI 318-19 6.6.4.5). Seizmički period može se uzeti iz analize Rayleighovom metodom. Ploča od ploča dobija čelik koji svaki sloj treba iz svojih momenata, i jednosmjerno smicanje. Vidi [Provjeri betonske elemente i napravi seizmička opterećenja](topic:concrete-and-seismic).
- **Za inženjera da provjeri.** Rezultati temelja, betona i funkcije „Šta prvo puca?“ su pomoćna sredstva. Opterećenja vjetrom nisu izgrađena.

**U svim aplikacijama**

- **Jezici.** Pomoć je na 54 jezika. Oni osim engleskog su nacrti prevedeni mašinom dok ih ne pročita izvorni govornik; deset je novo (litvanski, latvijski, bosanski, marati, telugu, albanski, afrikaans, filipinski, svahili, uzbečki).
- **Redovi alatne trake.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Redovi alatne trake}} bira prelom, 2 reda ili 1 red. Traka koja već stane ostaje kakva jeste; ostale se pomjeraju bočno.
- **Mreža svojstava.** Polja temelja koriste zajedničku mrežu: sklopive kategorije i kompaktnu gustinu. Upisana aritmetika, kao 2*450, i dalje radi.
- **Ulazni uređaji.** Touchpad, olovka, 3D miš, kontroler i MIDI mogu upravljati aplikacijama. Vidi [Kretanje u 3D](topic:navigate-3d).
- **Panel problema.** Upozorenja novih provjera iz gore navedenog pojavljuju se u istom panelu {{ui:Problemi}} kao i ranije.
- **Povežite svog AI.** Vaš vlastiti asistent, povezan preko CadCraft Studio, radi sa svih osam aplikacija i vidi samo ono što dozvolite. Povezivanje jednim klikom, hostovani konektor i vaš vlastiti API ključ u Studiju tek dolaze. Vidi [Koristite DetailCraft sa AI asistentom](topic:use-with-ai-assistants).

### Ispravljeno u 0.8.1

- **Jezici u Studiju.** Studio i spakovana izdanja mogu mijenjati jezik za vrijeme rada; ranije su bili samo na engleskom. Još nije testirano na svim platformama: javite nam ako se jezik ne mijenja.
- **Izbor prozorom koji ukršta.** Instalateri 0.8.1 nose ispravno ponašanje izbora prozorom koje je već bilo u web izdanju 0.8; stariji instalater ga nije imao.
- **Tableti u portretu.** Višak visine mreže ide platnu, a raspored lista počinje na 760 px ili manje.

### Nije još u ovoj verziji

- **Slanje NC na mašinu** nije objavljeno.
- **Opterećenja vjetrom** za beton nisu izgrađena, a provjere betona i temelja su za inženjera da pregleda.
- **Potpisivanje koda.** Windows instalateri i macOS .dmg nisu potpisani, pa Windows može upozoriti, a macOS traži desni klik, pa Otvori.

Ranije promjene su u [Šta je novo u 0.7](topic:whats-new-0-7).
