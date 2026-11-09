---
title: Obilazak ekrana
summary: Svaka traka, panel i kartica u DetailCraft po nazivu na ekranu i čemu služi.
keywords: ekran, raspored, traka sa alatima, paneli, svojstva, statusna traka, izvještaji, sučelje, ui, kartice
from: 94f81073
---

DetailCraft popunjava prozor preglednika ispod trake aplikacije. Odozgo nadolje: traka sa alatima, pa tri kolone (panel {{ui:Model}}, prikaz, panel {{ui:Svojstva}}), zatim kartice izvještaja, pa statusna traka.

## Traka aplikacije

Tanka traka na samom vrhu pripada sajtu CadCraft, a ne modelu. Prikazuje naziv i verziju aplikacije, vezu do {{ui:O programu DetailCraft}}, {{ui:Pomoć}} (ili {{key:F1}}) za ovu pomoć, {{ui:Spasi za rad van mreže}}, dugme režima ekrana i prekidač {{ui:Papir}} / {{ui:Model}}.

- {{ui:Spasi za rad van mreže}} čuva DetailCraft, njegov 3D prikaz i ovu pomoć u vašem pregledniku, pa se otvara bez veze. Kada se spasi, piše {{ui:Spremno za rad van mreže}}; kliknite tada na njega za {{ui:Spasi ponovo (preuzmi najnoviju verziju)}} ili {{ui:Ukloni kopiju za rad van mreže}}. Vidi [Rad van mreže](common:offline).
- {{ui:Papir}} daje svijetao ekran, a {{ui:Model}} tamni. 3D prikaz odmah prati; ništa u vašem modelu se ne mijenja.
- Dugme režima ekrana i {{key:Ctrl+Shift+F}} mijenjaju redom: normalno, puni ekran i puni ekran sa sakrivenim trakama. {{key:Ctrl+Shift+F}} koristi taster Control na svakom računaru, uključujući Mac. Kad su trake sakrivene, pokažite na gornju ivicu ekrana (ili je dodirnite) da ih vratite. {{key:Esc}} izlazi iz punog ekrana.

## Traka sa alatima

Traka sa alatima ima pet grupa. Zadržite pokazivač na dugmetu da vidite šta radi i njegovu tipku.

| Grupa | Dugmad | Šta rade |
|---|---|---|
| {{ui:Datoteka}} | {{ui:Novi}}, {{ui:Otvori}}, {{ui:Uvezi IFC}}, {{ui:Spasi}}, {{ui:Primjer}} | Pokreću model, otvaraju spašenu `.detailcraft.json` ili IFC datoteku, spašavaju jednu, ili otvaraju primjer okvira |
| {{ui:Postavljanje}} | {{ui:Odaberi}}, {{ui:Greda}}, {{ui:Stub}}, {{ui:Dijagonala}}, {{ui:Lim}}, {{ui:Temelj}}, {{ui:Stepenice}} | Alat koji sljedeći klik u prikazu koristi |
| {{ui:Povezivanje}} | {{ui:Čeone ploče}}, {{ui:Temeljna ploča}}, i u {{ui:Više}}: {{ui:Smične ploče}}, {{ui:Nastavak}}, {{ui:Čvorni lim}}, {{ui:Slično}} | Dodaju vezu na odabranu gredu, stub ili dijagonalu, ili kopiraju odabranu vezu na svaki sličan spoj |
| {{ui:Uređivanje}} | {{ui:Poništi}}, {{ui:Ponovi}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Više}} | Korak nazad i naprijed kroz izmjene; kopiraju odabir i lijepe ga. {{ui:Više}} otvara meni sa {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Zalijepi na mjesto}}, {{ui:Dupliraj}}, {{ui:Izbriši}}, {{ui:Odaberi sve}} i {{ui:Poništi odabir}}, svaka sa svojom tipkom |
| {{ui:Izlaz}} | {{ui:IFC}}, {{ui:NC datoteke}}, {{ui:BOM}}, {{ui:Radionički crtež}}, {{ui:Crteži}}, i u {{ui:Više}}: {{ui:Savijanje}}, {{ui:Izvještaj o težini po fazama}}, {{ui:KISS datoteka za softver za izradu}} | Preuzimaju izvoz ili otvaraju listove crteža |

Dugmad i stavke menija koje ne mogu djelovati u tom trenutku su zasivljene, a zadržavanje pokazivača kaže zašto. {{ui:Čeone ploče}} traže odabranu gredu, {{ui:Temeljna ploča}} odabrani stub, {{ui:Slično}} odabranu vezu, {{ui:Radionički crtež}} model sa dijelovima, {{ui:Kopiraj}} odabrani element ili temelj, a {{ui:Zalijepi}} nešto kopirano. Vidi [Kopiranje, lijepljenje i dupliranje](topic:copy-paste).

## Panel Model (lijevo)

- {{ui:Model}}: {{ui:Naziv}} modela. Njime se nazivaju svaka datoteka koju spasite ili izvezete.
- {{ui:Mreže}}: linije mreže i njihovi razmaci, i {{ui:Primijeni mreže}}. Vidi [Postavljanje mreža i nivoa](topic:grids-and-levels).
- {{ui:Nivoi}}: jedan red po nivou (naziv i kota u mm), {{ui:Dodaj nivo}} i {{ui:Primijeni nivoe}}.
- {{ui:Prilagođeni profil}}: napravite vlastiti parametarski presjek. Zatvoren je dok ga ne otvorite.
- {{ui:Oznake dijelova}}: svaka oznaka dijela u modelu sa njenim profilom, dužinom i količinom. Kliknite na oznaku da odaberete prvi dio sa njom.

{{ui:Mreže}}, {{ui:Nivoi}} i {{ui:Prilagođeni profil}} se sklapaju: kliknite na njihove naslove.

## Prikaz (sredina)

Prikaz pokazuje model u 3D. Iznad njega, traka prikaza ima tri dugmeta i jednu listu:

- {{ui:3D}}: slobodno okrećete model.
- {{ui:Osnova}}: gledate ravno dolje na jedan nivo. Pored dugmadi se pojavljuje lista nivoa. Sve što je više od 1,5 m iznad nivoa je odsječeno da biste jasno vidjeli i kliknuli nivo.
- {{ui:Izgled}}: gledate ravno u jednu slovnu liniju mreže (Mreža A, Mreža B …). Pojavljuje se lista slovnih mreža. Prikazan je samo čelik unutar 1 m od te linije.
- Dugme za uklapanje na desnom kraju trake prikaza uvećava da prikaže cijeli model.

Male tačke označavaju svaki presjek mreže na svakom nivou. Dok je alat za postavljanje uključen, tačka najbliža pokazivaču se osvijetli, a statusna traka je imenuje, na primjer "A/2 na Nivou 1". Boje razlikuju vrste elemenata: stubovi, grede, dijagonale i ploče imaju svoju boju, vijci i šipke drugu, temelji su prozirni, a armatura je prikazana kao cijevi. Rupe su prikazane kao tamni čepovi; izrezi su izrezani.

Kako okretati, pomjerati i uvećavati: [Kretanje po 3D prikazu](topic:navigate-3d).

Kad je model prazan, prikaz pokazuje kratku listu "Počni model". Spašeni model možete otvoriti i prevlačenjem na prikaz.

## Panel Svojstva (desno)

Šta ovaj panel pokazuje zavisi od onoga što radite, a njegov naslov kaže šta: "Model", "Postavi gredu", "Greda b2", "Veza čeone ploče", "Temeljna ploča", "Temelj F1", "3 odabrana" ili "Zalijepi".

- **Ništa nije odabrano:** sažetak modela (elementi, veze, temelji, dijelovi, oznake, vijci, težina čelika i armature, mreže, nivoi).
- **Uključen alat za postavljanje:** opcije za sljedeći komad (profil, materijal, položaj, rotacija, a za stubove {{ui:Do}}), sažetak izabranog profila i obrazac {{ui:Dodaj po mreži}} za postavljanje bez klikanja u prikazu.
- **Odabran element:** njegov naziv, profil, materijal, položaj, rotacija, koordinate dva kraja, njegove oznake, dužina reza i težina, njegove rupe i izrezi, i dugmad za veze, njegov radionički crtež i {{ui:Izbriši}}.
- **Odabrana veza:** svaka postavka ploče, vijka i zavara, vijci i zavar koje pravi, njena upozorenja i {{ui:Primijeni na slične}}.
- **Odabran temelj:** njegov položaj i veličina, donja mreža, polazne šipke i oznake šipki koje koristi.
- **Odabrano više stvari:** koliko je elemenata svake vrste, veza i temelja, njihova težina čelika, i {{ui:Kopiraj}}, {{ui:Dupliraj}} i {{ui:Izbriši}}.
- **Lijepljenje:** šta je na privremenoj memoriji, i obrasci za lijepljenje po unesenom pomaku ili na presjek mreže koji birate sa lista.

Polja za brojeve stupaju na snagu kad pritisnete {{key:Enter}} ili napustite polje. Svaka izmjena je jedan korak koji možete poništiti.

## Kartice izvještaja (dno)

- {{ui:Problemi}}: sve što DetailCraft nije mogao izraditi ili što želi da provjerite, sa dugmetom {{ui:Odaberi}} na svakom redu. Kartica pokazuje broj u zagradama.
- {{ui:Spisak materijala}}: dijelovi, sklopovi, i vijci i sidrene šipke, sa težinama i vezom {{ui:Preuzmi CSV}}. Kliknite na oznaku dijela da odaberete taj dio.
- {{ui:Spisak savijanja}}: svaka oznaka šipke u svakom temelju, sa vezom {{ui:Preuzmi CSV}}.

Kad je kartica u fokusu, {{key:Left}} i {{key:Right}} se kreću između kartica.

## Statusna traka

Traka uz dno ima tri dijela: presjek mreže ispod pokazivača dok postavljate, najnoviju poruku (šta se upravo dogodilo ili zašto je nešto odbijeno), i tekuće zbirove dijelova, vijaka, težine čelika i težine armature. Kad se čini da radnja ništa ne radi, prvo pročitajte poruku ovdje.

Naslov kartice preglednika počinje tačkom (•) dok model ima izmjene koje niste spasili.

## Na uskom ekranu

Ispod oko 760 piksela širine, kolone se slažu: traka sa alatima, prikaz, statusna traka, {{ui:Svojstva}}, kartice izvještaja, pa panel {{ui:Model}} na kraju. Pomjerajte stranicu da dođete do njih. DetailCraft je prilagođen za desktop ili laptop ekran; telefon služi za gledanje, a ne za detaljisanje.
