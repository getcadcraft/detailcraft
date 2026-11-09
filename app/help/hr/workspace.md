---
title: Pregled zaslona
summary: Svaka traka, panel i kartica u DetailCraftu prema nazivu na zaslonu i čemu služi.
keywords: zaslon, raspored, alatna traka, paneli, svojstva, statusna traka, izvješća, sučelje, ui, kartice
from: 94f81073
---

DetailCraft ispunjava prozor preglednika ispod trake aplikacije. Odozgo prema dolje: alatna traka, zatim tri stupca ({{ui:Model}} panel, prikaz, panel {{ui:Svojstva}}), zatim kartice izvješća, pa statusna traka.

## Traka aplikacije

Tanka traka na samom vrhu pripada web-mjestu CadCraft, a ne modelu. Prikazuje naziv i verziju aplikacije, poveznicu na {{ui:O programu DetailCraft}}, {{ui:Pomoć}} (ili {{key:F1}}) za ovu pomoć, {{ui:Spremi za offline}}, gumb načina prikaza zaslona i prekidač {{ui:Papir}} / {{ui:Model}}.

- {{ui:Spremi za offline}} zadržava DetailCraft, njegov 3D prikaz i ovu pomoć u pregledniku da se otvore bez veze. Nakon spremanja pokazuje {{ui:Spremno za offline}}; kliknite ga zatim za {{ui:Spremi ponovno (preuzmi najnoviju verziju)}} ili {{ui:Ukloni offline kopiju}}. Vidi [Rad offline](common:offline).
- {{ui:Papir}} daje svijetao zaslon, a {{ui:Model}} taman. 3D prikaz odmah se prilagođava; ništa u vašem modelu se ne mijenja.
- Gumb načina prikaza zaslona i {{key:Ctrl+Shift+F}} izmjenjuju normalni prikaz, cijeli zaslon i cijeli zaslon sa skrivenim trakama. {{key:Ctrl+Shift+F}} koristi tipku Control na svakom računalu, uključujući Mac. Kad su trake skrivene, pokažite na gornji rub zaslona (ili ga dodirnite) da se vrate. {{key:Esc}} izlazi iz cijelog zaslona.

## Alatna traka

Alatna traka ima pet grupa. Zadržite pokazivač na gumbu da vidite što radi i koja mu je tipka.

| Grupa | Gumbi | Što rade |
|---|---|---|
| {{ui:Datoteka}} | {{ui:Novo}}, {{ui:Otvori}}, {{ui:Uvezi IFC}}, {{ui:Spremi}}, {{ui:Primjer}} | Pokreću novi model, otvaraju spremljenu `.detailcraft.json` ili IFC datoteku, spremaju model ili otvaraju primjer okvira |
| {{ui:Postavljanje}} | {{ui:Odaberi}}, {{ui:Greda}}, {{ui:Stup}}, {{ui:Spreg}}, {{ui:Ploča}}, {{ui:Temelj}}, {{ui:Stubište}} | Alat koji sljedeći klik u prikazu koristi |
| {{ui:Povezivanje}} | {{ui:Čeone ploče}}, {{ui:Podložna ploča}}, a u {{ui:Više}}: {{ui:Posmične pločice}}, {{ui:Nastavak}}, {{ui:Čvorna ploča}}, {{ui:Slično}} | Dodaje spoj odabranoj gredi, stupu ili spregu, ili kopira odabrani spoj na svaki sličan spoj |
| {{ui:Uređivanje}} | {{ui:Poništi}}, {{ui:Ponovi}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Više}} | Koraci unatrag i unaprijed kroz izmjene; kopira odabir i lijepi ga. {{ui:Više}} otvara izbornik s {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Zalijepi na isto mjesto}}, {{ui:Dupliciraj}}, {{ui:Izbriši}}, {{ui:Odaberi sve}} i {{ui:Poništi odabir}}, svaki s tipkom |
| {{ui:Izlaz}} | {{ui:IFC}}, {{ui:NC datoteke}}, {{ui:BOM}}, {{ui:Radionički crtež}}, {{ui:Crteži}}, a u {{ui:Više}}: {{ui:Savijanje}}, {{ui:Izvješće o masi po fazi}}, {{ui:KISS datoteka za softver za izradu}} | Preuzima izvoz ili otvara listove crteža |

Gumbi i stavke izbornika koji ne mogu djelovati trenutno su zasivljeni, a zadržavanje pokazivača kaže zašto. {{ui:Čeone ploče}} traži odabranu gredu, {{ui:Podložna ploča}} odabrani stup, {{ui:Slično}} odabrani spoj, {{ui:Radionički crtež}} model s dijelovima, {{ui:Kopiraj}} odabrani štap ili temelj, a {{ui:Zalijepi}} nešto kopirano. Vidi [Kopiranje, lijepljenje i dupliciranje](topic:copy-paste).

## Panel Model (lijevo)

- {{ui:Model}}: {{ui:Naziv}} modela. Daje naziv svakoj datoteci koju spremite ili izvezete.
- {{ui:Mreže}}: linije mreže i njihovi razmaci, te {{ui:Primijeni mreže}}. Vidi [Postavljanje mreža i razina](topic:grids-and-levels).
- {{ui:Razine}}: jedan redak po razini (naziv i kota u mm), {{ui:Dodaj razinu}} i {{ui:Primijeni razine}}.
- {{ui:Prilagođeni profil}}: izradite vlastiti parametarski presjek. Zatvoren je dok ga ne otvorite.
- {{ui:Oznake pozicija}}: svaka oznaka dijela u modelu, s profilom, duljinom i brojem. Kliknite oznaku da odaberete prvi dio s njom.

{{ui:Mreže}}, {{ui:Razine}} i {{ui:Prilagođeni profil}} se sklapaju: kliknite na njihove naslove.

## Prikaz (sredina)

Prikaz pokazuje model u 3D-u. Iznad njega traka prikaza ima tri gumba i popis:

- {{ui:3D}}: slobodno okrećite model.
- {{ui:Tlocrt}}: gledajte ravno odozgo na jednu razinu. Pored gumba pojavljuje se popis razina. Sve što je više od 1.5 m iznad razine odrezano je da biste razinu jasno vidjeli i kliknuli.
- {{ui:Pročelje}}: gledajte ravno na jednu slovnu liniju mreže (Mreža A, Mreža B …). Pojavljuje se popis slovnih mreža. Prikazan je samo čelik unutar 1 m od te linije.
- Gumb prilagodbe na desnom kraju trake prikaza zumira da pokaže cijeli model.

Male točkice označavaju svako presjecište mreže na svakoj razini. Dok je alat za postavljanje uključen, točka najbliža pokazivaču svijetli, a statusna traka je imenuje, primjerice „A/2 na Razini 1”. Boje razlikuju vrste članova: stupovi, grede, spregovi i ploče imaju svaki svoju boju, vijci i sidreni vijci drugu, temelji su prozirni, a armatura je prikazana kao cijevi. Provrti se prikazuju kao tamni čepovi; izrezi su urezani.

Kako okretati, pomicati i zumirati: [Kretanje po 3D prikazu](topic:navigate-3d).

Kad je model prazan, prikaz pokazuje kratak popis „Počnite model”. Spremljenu datoteku modela možete i ispustiti bilo gdje na prikaz da je otvorite.

## Panel Svojstva (desno)

Što pokazuje ovaj panel ovisi o tome što radite, a njegov naslov kaže što: „Model”, „Postavljanje grede”, „Greda b2”, „Spoj čeonom pločom”, „Podložna ploča”, „Temelj F1”, „3 odabrano” ili „Zalijepi”.

- **Ništa nije odabrano:** sažetak modela (štapovi, spojevi, temelji, dijelovi, oznake, vijci, masa čelika i armature, mreže, razine).
- **Alat za postavljanje uključen:** opcije za sljedeći komad (profil, materijal, položaj, rotacija, a za stupove {{ui:Do}}), sažetak odabranog profila i obrazac {{ui:Dodaj po mreži}} za postavljanje bez klika u prikazu.
- **Odabran štap:** njegov naziv, profil, materijal, položaj, rotacija, koordinate dvaju krajeva, njegove oznake, duljina za rezanje i masa, njegovi provrti i izrezi, te gumbi za spojeve, njegov radionički crtež i {{ui:Izbriši}}.
- **Odabran spoj:** svaka postavka ploče, vijka i zavara, vijci i zavar koje stvara, njegova upozorenja i {{ui:Primijeni na slične}}.
- **Odabran temelj:** njegov položaj i veličina, donja mreža, početne šipke i oznake šipki koje koristi.
- **Odabrano više stvari:** koliko je štapova svake vrste, spojeva i temelja, njihova masa čelika, te {{ui:Kopiraj}}, {{ui:Dupliciraj}} i {{ui:Izbriši}}.
- **Lijepljenje:** što je na međuspremniku, te obrasci za lijepljenje pomakom koji upišete ili na presjecište mreže koje odaberete s popisa.

Polja s brojevima primjenjuju se kad pritisnete {{key:Enter}} ili napustite polje. Svaka izmjena je jedan korak koji možete poništiti.

## Kartice izvješća (dolje)

- {{ui:Problemi}}: sve što DetailCraft nije mogao izraditi ili što želi da provjerite, s gumbom {{ui:Odaberi}} uz svaki redak. Kartica pokazuje broj u zagradama.
- {{ui:Sastavnica}}: dijelovi, sklopovi, te vijci i sidreni vijci, s masama i poveznicom {{ui:Preuzmi CSV}}. Kliknite oznaku dijela da odaberete taj dio.
- {{ui:Plan savijanja}}: svaka oznaka šipke u svakom temelju, s poveznicom {{ui:Preuzmi CSV}}.

Kad je kartica u fokusu, {{key:Left}} i {{key:Right}} pomiču se među karticama.

## Statusna traka

Traka pri dnu ima tri dijela: presjecište mreže pod pokazivačem dok postavljate, najnoviju poruku (što se upravo dogodilo ili zašto je nešto odbijeno) te zbrojeve dijelova, vijaka, mase čelika i mase armature. Kad se čini da radnja ne radi ništa, prvo pročitajte poruku ovdje.

Naslov kartice preglednika počinje točkom (•) dok model ima promjene koje niste spremili.

## Na uskom zaslonu

Ispod otprilike 760 piksela širine stupci se slažu: alatna traka, prikaz, statusna traka, {{ui:Svojstva}}, kartice izvješća, pa panel {{ui:Model}} na kraju. Pomičite stranicu da do njih dođete. DetailCraft je raspoređen za stolno računalo ili prijenosno računalo; telefon služi za pregled, a ne za detaljiranje.
