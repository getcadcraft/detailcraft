---
title: Obilazak zaslona
summary: Svaka traka, ploča i kartica u DetailCraftu po nazivu na zaslonu i čemu služi.
keywords: zaslon, raspored, alatna traka, ploče, svojstva, statusna traka, izvješća, sučelje, ui, kartice
from: 454f74fd
---

DetailCraft ispunjava prozor preglednika ispod trake aplikacije. Odozgo prema dolje: alatna traka, zatim tri stupca (ploča {{ui:Model}}, prikaz, ploča {{ui:Svojstva}}), zatim kartice izvješća, zatim statusna traka.

## Traka aplikacije

Uska traka na samom vrhu pripada web-mjestu CadCraft, a ne modelu. Prikazuje naziv i verziju aplikacije, vezu na {{ui:O aplikaciji DetailCraft}}, {{ui:Pomoć}} (ili {{key:F1}}) za ovu pomoć, {{ui:Spremi za offline}}, gumb načina zaslona i prekidač {{ui:Papir}} / {{ui:Model}}.

- {{ui:Spremi za offline}} čuva DetailCraft, njegov 3D prikaz i ovu pomoć u vašem pregledniku da se otvara bez veze. Kad je spremljen, glasi {{ui:Spremno za offline}}; kliknite ga tada za {{ui:Spremi ponovno (preuzmi najnoviju verziju)}} ili {{ui:Ukloni offline kopiju}}. Vidi [Rad offline](common:offline).
- {{ui:Papir}} daje svijetao zaslon, a {{ui:Model}} taman. 3D prikaz odmah prati; ništa u vašem modelu se ne mijenja.
- Gumb načina zaslona i {{key:Ctrl+Shift+F}} mijenjaju uobičajeni način, cijeli zaslon i cijeli zaslon sa skrivenim trakama. {{key:Ctrl+Shift+F}} koristi tipku Control na svakom računalu, uključujući Mac. Sa skrivenim trakama usmjerite pokazivač na gornji rub zaslona (ili ga dodirnite) da ih vratite. {{key:Esc}} napušta cijeli zaslon.

## Alatna traka

Alatna traka ima pet skupina. Zadržite pokazivač na gumbu da vidite što radi i njegovu tipku.

| Skupina | Gumbi | Što rade |
|---|---|---|
| {{ui:Datoteka}} | {{ui:Novo}}, {{ui:Otvori}}, {{ui:Uvezi IFC}}, {{ui:Spremi}}, {{ui:Primjer}} | Započeti model, otvoriti spremljeni `.detailcraft.json` ili IFC datoteku, spremiti jedan ili otvoriti primjer okvira |
| {{ui:Postavljanje}} | {{ui:Odaberi}}, {{ui:Greda}}, {{ui:Stup}}, {{ui:Spreg}}, {{ui:Ploča}}, {{ui:Temelj}}, {{ui:Stubište}} | Alat koji koristi sljedeći klik u prikazu |
| {{ui:Povezivanje}} | {{ui:Čeone ploče}}, {{ui:Podložna ploča}}, a u {{ui:Više}}: {{ui:Posmične pločice}}, {{ui:Nastavak}}, {{ui:Čvorna ploča}}, {{ui:Slično}} | Dodati spoj odabranoj gredi, stupu ili spregu ili kopirati odabrani spoj na svaki sličan spoj |
| {{ui:Uređivanje}} | {{ui:Poništi}}, {{ui:Ponovi}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Više}} | Koračati natrag i naprijed kroz izmjene; kopirati odabir i zalijepiti ga. {{ui:Više}} otvara izbornik s {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Zalijepi na isto mjesto}}, {{ui:Dupliciraj}}, {{ui:Izbriši}}, {{ui:Odaberi sve}} i {{ui:Poništi odabir}}, svaki sa svojom tipkom |
| {{ui:Izlaz}} | {{ui:IFC}}, {{ui:NC datoteke}}, {{ui:BOM}}, {{ui:Radionički crtež}}, {{ui:Crteži}}, a u {{ui:Više}}: {{ui:Savijanje}}, {{ui:Izvješće o masi po fazi}}, {{ui:KISS datoteka za softver za izradu}} | Preuzeti izvoz ili otvoriti listove crteža |

Gumbi i stavke izbornika koji trenutno ne mogu djelovati zasivljeni su, a zadržavanje pokazivača na jednom kaže zašto. {{ui:Čeone ploče}} trebaju odabranu gredu, {{ui:Podložna ploča}} odabrani stup, {{ui:Slično}} odabrani spoj, {{ui:Radionički crtež}} odabrani I-profil ili ploču, {{ui:Kopiraj}} odabrani štap ili temelj, a {{ui:Zalijepi}} nešto kopirano. Vidi [Kopiranje, lijepljenje i dupliciranje](topic:copy-paste).

## Ploča Model (lijevo)

- {{ui:Model}}: {{ui:Naziv}} modela. Imenuje svaku datoteku koju spremite ili izvezete.
- {{ui:Mreže}}: linije mreže i njihovi razmaci te {{ui:Primijeni mreže}}. Vidi [Postavljanje mreža i razina](topic:grids-and-levels).
- {{ui:Razine}}: jedan redak po razini (naziv i visina u mm), {{ui:Dodaj razinu}} i {{ui:Primijeni razine}}.
- {{ui:Prilagođeni profil}}: izradite vlastiti parametarski presjek. Zatvoreno dok ga ne otvorite.
- {{ui:Oznake pozicija}}: svaka oznaka dijela u modelu s njezinim profilom, duljinom i brojem komada. Kliknite oznaku da odaberete prvi dio s njom.

{{ui:Mreže}}, {{ui:Razine}} i {{ui:Prilagođeni profil}} se sklapaju: kliknite njihove naslove.

## Prikaz (sredina)

Prikaz pokazuje model u 3D-u. Iznad njega traka prikaza ima tri gumba i popis:

- {{ui:3D}}: slobodno okrećite model.
- {{ui:Tlocrt}}: gledajte ravno dolje na jednu razinu. Popis razina pojavljuje se pored gumba. Sve što je više od 1,5 m iznad razine se odrezuje da razinu možete jasno vidjeti i kliknuti.
- {{ui:Pročelje}}: gledajte ravno na jednu slovom označenu liniju mreže (Mreža A, Mreža B …). Pojavljuje se popis slovom označenih mreža. Prikazuje se samo čelik unutar 1 m od te linije.
- Gumb prilagodbe na desnom kraju trake prikaza zumira da se vidi cijeli model.

Male točke označavaju svako sjecište mreža na svakoj razini. Dok je alat za postavljanje uključen, točka najbliža pokazivaču zasvijetli, a statusna traka je imenuje, na primjer „A/2 na: Razina 1“. Boje razlikuju vrste štapova: stupovi, grede, spregovi i ploče imaju svaki svoju boju, vijci i šipke drugu, temelji su prozirni, a armatura se crta kao cijevi. Provrti se prikazuju kao tamni čepovi; izrezi su urezani.

Kako okretati, pomicati i zumirati: [Kretanje 3D prikazom](topic:navigate-3d).

Kada je model prazan, prikaz pokazuje kratak popis „Započnite model“. Spremljenu datoteku modela možete ispustiti i bilo gdje na prikazu da je otvorite.

## Ploča Svojstva (desno)

Što ova ploča prikazuje ovisi o onome što radite, a njezin naslov kaže što: „Model“, „Postavi gredu“, „Greda b2“, „Priključak s čeonom pločom“, „Podložna ploča“, „Temelj F1“, „Odabrano: 3“ ili „Zalijepi“.

- **Ništa nije odabrano:** sažetak modela (štapovi, spojevi, temelji, dijelovi, oznake, vijci, masa čelika i armature, mreže, razine).
- **Uključen je alat za postavljanje:** mogućnosti za sljedeći komad (profil, materijal, položaj, zakret, a za stupove {{ui:Do}}), sažetak odabranog profila i obrazac {{ui:Dodaj po mreži}} za postavljanje bez klikanja u prikazu.
- **Odabran je štap:** njegov naziv, profil, materijal, položaj, zakret, koordinate njegovih dvaju krajeva, oznake, duljina rezanja i masa, provrti i izrezi te gumbi za spojeve, njegov radionički crtež i {{ui:Izbriši}}.
- **Odabran je spoj:** svaka postavka ploče, vijka i zavara, vijci i zavar koje stvara, njegova upozorenja i {{ui:Primijeni na slične}}.
- **Odabran je temelj:** njegov položaj i veličina, donja mreža, ispusti armature i oznake šipki koje koristi.
- **Odabrano je više stvari:** koliko štapova svake vrste, spojeva i temelja, njihova masa čelika te {{ui:Kopiraj}}, {{ui:Dupliciraj}} i {{ui:Izbriši}}.
- **Lijepljenje:** što je u međuspremniku te obrasci za lijepljenje prema upisanom pomaku ili na sjecište mreža koje birate s popisa.

Numerička polja stupaju na snagu kad pritisnete {{key:Enter}} ili napustite polje. Svaka promjena je jedan korak koji možete poništiti.

## Kartice izvješća (dolje)

- {{ui:Problemi}}: sve što DetailCraft nije mogao izgraditi ili želi da provjerite, s gumbom {{ui:Odaberi}} na svakom retku. Kartica prikazuje broj u zagradama.
- {{ui:Sastavnica}}: dijelovi, sklopovi te vijci i sidreni vijci, s masama i vezom {{ui:Preuzmi CSV}}. Kliknite oznaku dijela da odaberete taj dio.
- {{ui:Plan savijanja}}: svaka oznaka šipke u svakom temelju, s vezom {{ui:Preuzmi CSV}}.

Kada je kartica fokusirana, {{key:Left}} i {{key:Right}} prelaze između kartica.

## Statusna traka

Traka uz dno ima tri dijela: sjecište mreža ispod pokazivača dok postavljate, posljednju poruku (što se upravo dogodilo ili zašto je nešto odbijeno) i tekuće zbrojeve dijelova, vijaka, mase čelika i mase armature. Kada se čini da neka radnja ne radi ništa, prvo pročitajte poruku ovdje.

Naslov kartice preglednika počinje točkom (•) dok model ima promjena koje niste spremili.

## Na uskom zaslonu

Ispod otprilike 760 piksela širine stupci se slažu jedan na drugi: alatna traka, prikaz, statusna traka, {{ui:Svojstva}}, kartice izvješća, a ploča {{ui:Model}} zadnja. Pomaknite stranicu da dođete do njih. DetailCraft je raspoređen za zaslon računala ili prijenosnog računala; mobitel je dobar za gledanje, a ne za detaljiranje.
