---
title: Pregled ekrana
summary: Svaka traka, panel i kartica u DetailCraft-u po nazivu na ekranu i čemu služi.
keywords: ekran, raspored, traka s alatima, paneli, svojstva, statusna traka, izvještaji, sučelje, ui, kartice
from: 454f74fd
---

DetailCraft ispunjava prozor pregledača ispod trake aplikacije. Odozgo nadolje: traka s alatima, zatim tri kolone (panel {{ui:Model}}, prikaz, panel {{ui:Svojstva}}), zatim kartice izvještaja, pa statusna traka.

## Traka aplikacije

Tanka traka na samom vrhu pripada sajtu CadCraft, ne modelu. Prikazuje naziv i verziju aplikacije, link do {{ui:O aplikaciji DetailCraft}}, {{ui:Pomoć}} (ili {{key:F1}}) za ovu pomoć, {{ui:Spasi za rad van mreže}}, dugme za režim ekrana i prekidač {{ui:Papir}} / {{ui:Model}}.

- {{ui:Spasi za rad van mreže}} čuva DetailCraft, njegov 3D prikaz i ovu pomoć u vašem pregledaču, pa se otvara bez veze. Piše {{ui:Spremno za rad van mreže}} kad je spašeno; kliknite ga tada za {{ui:Spasi ponovo (preuzmi najnoviju verziju)}} ili {{ui:Ukloni kopiju za rad van mreže}}. Vidi [Rad van mreže](common:offline).
- {{ui:Papir}} daje svijetao ekran, a {{ui:Model}} taman. 3D prikaz se odmah prilagođava; ništa u vašem modelu se ne mijenja.
- Dugme za režim ekrana i {{key:Ctrl+Shift+F}} prelaze kroz normalni, cijeli ekran i cijeli ekran sa sakrivenim trakama. {{key:Ctrl+Shift+F}} koristi tipku Control na svakom računaru, uključujući Mac. Kad su trake sakrivene, pokažite na gornju ivicu ekrana (ili je dodirnite) da se vrate. {{key:Esc}} izlazi iz cijelog ekrana.

## Traka s alatima

Traka s alatima ima pet grupa. Pređite mišem preko dugmeta da vidite šta radi i njegovu tipku.

| Grupa | Dugmad | Šta rade |
|---|---|---|
| {{ui:Datoteka}} | {{ui:Novi}}, {{ui:Otvori}}, {{ui:Uvezi IFC}}, {{ui:Spasi}}, {{ui:Primjer}} | Započinju model, otvaraju spašenu `.detailcraft.json` ili IFC datoteku, spašavaju model ili otvaraju primjer okvira |
| {{ui:Postavljanje}} | {{ui:Odaberi}}, {{ui:Greda}}, {{ui:Stub}}, {{ui:Dijagonala}}, {{ui:Lim}}, {{ui:Temelj}}, {{ui:Stepenice}} | Alat koji sljedeći klik u prikazu koristi |
| {{ui:Povezivanje}} | {{ui:Čeone ploče}}, {{ui:Temeljna ploča}}, a u {{ui:Više}}: {{ui:Smične ploče}}, {{ui:Nastavak}}, {{ui:Čvorni lim}}, {{ui:Slično}} | Dodaje vezu izabranoj gredi, stubu ili dijagonali, ili kopira izabranu vezu na svaki sličan spoj |
| {{ui:Uređivanje}} | {{ui:Poništi}}, {{ui:Ponovi}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Više}} | Korak nazad i naprijed kroz izmjene; kopira izabrano i lijepi ga. {{ui:Više}} otvara meni s {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Zalijepi na mjesto}}, {{ui:Dupliraj}}, {{ui:Izbriši}}, {{ui:Odaberi sve}} i {{ui:Poništi odabir}}, svaki sa svojom tipkom |
| {{ui:Izlaz}} | {{ui:IFC}}, {{ui:NC datoteke}}, {{ui:BOM}}, {{ui:Radionički crtež}}, {{ui:Crteži}}, a u {{ui:Više}}: {{ui:Savijanje}}, {{ui:Izvještaj o težini po fazama}}, {{ui:KISS datoteka za softver za izradu}} | Preuzima izvoz ili otvara listove crteža |

Dugmad i stavke menija koje trenutno ne mogu da djeluju su posivljene, a prelazak mišem kaže zašto. {{ui:Čeone ploče}} traži izabranu gredu, {{ui:Temeljna ploča}} izabrani stub, {{ui:Slično}} izabranu vezu, {{ui:Radionički crtež}} izabran I-profil ili dio lima, {{ui:Kopiraj}} izabrani element ili temelj, a {{ui:Zalijepi}} nešto kopirano. Vidi [Kopiranje, lijepljenje i dupliranje](topic:copy-paste).

## Panel Model (lijevo)

- {{ui:Model}}: {{ui:Naziv}} modela. Daje ime svakoj datoteci koju spasite ili izvezete.
- {{ui:Mreže}}: linije mreže i njihovi razmaci, i {{ui:Primijeni mreže}}. Vidi [Postavljanje mreža i nivoa](topic:grids-and-levels).
- {{ui:Nivoi}}: jedan red po nivou (naziv i kota u mm), {{ui:Dodaj nivo}} i {{ui:Primijeni nivoe}}.
- {{ui:Prilagođeni profil}}: napravite vlastiti parametarski presjek. Zatvoren dok ga ne otvorite.
- {{ui:Oznake dijelova}}: svaka oznaka dijela u modelu s njenim profilom, dužinom i brojem. Kliknite oznaku da izaberete prvi dio s njom.

{{ui:Mreže}}, {{ui:Nivoi}} i {{ui:Prilagođeni profil}} se sklapaju: kliknite na njihove naslove.

## Prikaz (sredina)

Prikaz pokazuje model u 3D. Iznad njega, traka prikaza ima tri dugmeta i jednu listu:

- {{ui:3D}}: slobodno okrećite model.
- {{ui:Osnova}}: gledajte pravo odozgo na jedan nivo. Pored dugmadi se pojavljuje lista nivoa. Sve što je više od 1,5 m iznad nivoa se odsijeca, da biste jasno vidjeli i kliknuli nivo.
- {{ui:Izgled}}: gledajte pravo u jednu slovnu liniju mreže (Mreža A, Mreža B …). Pojavljuje se lista slovnih mreža. Prikazuje se samo čelik unutar 1 m od te linije.
- Dugme za uklapanje na desnom kraju trake prikaza zumira da pokaže cijeli model.

Male tačkice označavaju svaki presjek mreže na svakom nivou. Dok je alat za postavljanje uključen, tačka najbliža pokazivaču svijetli, a statusna traka je imenuje, na primjer "A/2 na Nivo 1". Boje razlikuju tipove elemenata: stubovi, grede, dijagonale i limovi imaju svoju boju, vijci i šipke drugu, temelji su prozirni, a armatura je nacrtana kao cijevi. Rupe se prikazuju kao tamni čepovi; izrezi su odsječeni.

Kako okretati, pomjerati i zumirati: [Krećite se po 3D prikazu](topic:navigate-3d).

Kad je model prazan, prikaz pokazuje kratku listu "Započni model". Možete i prevući spašenu datoteku modela bilo gdje na prikaz da je otvorite.

## Panel Svojstva (desno)

Šta ovaj panel pokazuje zavisi od toga šta radite, a naslov kaže šta: "Model", "Postavi gredu", "Greda b2", "Veza čeone ploče", "Temeljna ploča", "Temelj F1", "3 izabrano" ili "Zalijepi".

- **Ništa nije izabrano:** sažetak modela (elementi, veze, temelji, dijelovi, oznake, vijci, težina čelika i armature, mreže, nivoi).
- **Alat za postavljanje uključen:** opcije za sljedeći dio (profil, materijal, položaj, rotacija, a za stubove {{ui:Do}}), sažetak izabranog profila i obrazac {{ui:Dodaj po mreži}} za postavljanje bez klikanja na prikaz.
- **Element izabran:** njegov naziv, profil, materijal, položaj, rotacija, koordinate njegova dva kraja, njegove oznake, dužina reza i težina, njegove rupe i izrezi, i dugmad za veze, za njegov radionički crtež i {{ui:Izbriši}}.
- **Veza izabrana:** svaka postavka čeone ploče, vijka i zavara, vijci i zavar koje pravi, njena upozorenja, i {{ui:Primijeni na slične}}.
- **Temelj izabran:** njegov položaj i veličina, donja mreža, početne šipke i oznake šipki koje koristi.
- **Više stvari izabrano:** koliko elemenata svake vrste, veza i temelja, njihova težina čelika, i {{ui:Kopiraj}}, {{ui:Dupliraj}} i {{ui:Izbriši}}.
- **Lijepljenje:** šta je na međuspremniku i obrasci za lijepljenje po unesenom pomaku ili na presjek mreže koji izaberete s lista.

Polja s brojevima stupaju na snagu kad pritisnete {{key:Enter}} ili napustite polje. Svaka promjena je jedan korak koji možete poništiti.

## Kartice izvještaja (dolje)

- {{ui:Problemi}}: sve što DetailCraft nije mogao izraditi ili što želi da provjerite, s dugmetom {{ui:Odaberi}} uz svaki red. Kartica pokazuje broj u zagradama.
- {{ui:Spisak materijala}}: dijelovi, sklopovi, te vijci i sidrene šipke, s težinama i linkom {{ui:Preuzmi CSV}}. Kliknite oznaku dijela da izaberete taj dio.
- {{ui:Spisak savijanja}}: svaka oznaka šipke u svakom temelju, s linkom {{ui:Preuzmi CSV}}.

Kad je kartica u fokusu, {{key:Left}} i {{key:Right}} pomjeraju između kartica.

## Statusna traka

Traka duž dna ima tri dijela: presjek mreže pod pokazivačem dok postavljate, najnoviju poruku (šta se upravo dogodilo ili zašto je nešto odbijeno), i zbirne vrijednosti dijelova, vijaka, težine čelika i težine armature. Kad se čini da radnja ne radi ništa, prvo pročitajte poruku ovdje.

Naslov kartice pregledača počinje tačkom (•) dok model ima promjene koje niste spasili.

## Na uskom ekranu

Ispod oko 760 piksela širine, kolone se slažu: traka s alatima, prikaz, statusna traka, {{ui:Svojstva}}, kartice izvještaja, pa panel {{ui:Model}} posljednji. Pomjerajte stranicu da ih dosegnete. DetailCraft je raspoređen za desktop ili laptop ekran; telefon služi za gledanje, ne za detaljisanje.
