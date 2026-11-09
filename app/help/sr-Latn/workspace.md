---
title: Obilazak ekrana
summary: Svaka traka, panel i kartica u DetailCraft po nazivu na ekranu i čemu služi.
keywords: ekran, raspored, traka sa alatkama, paneli, svojstva, statusna traka, izveštaji, interfejs, ui, kartice
from: 94f81073
---

DetailCraft ispunjava prozor pregledača ispod trake aplikacije. Odozgo nadole: traka sa alatkama, zatim tri kolone (panel {{ui:Model}}, prikaz, panel {{ui:Svojstva}}), zatim kartice izveštaja, pa statusna traka.

## Traka aplikacije

Tanka traka na samom vrhu pripada sajtu CadCraft, a ne modelu. Prikazuje naziv aplikacije i verziju, vezu do {{ui:O programu DetailCraft}}, {{ui:Pomoć}} (ili {{key:F1}}) za ovu pomoć, {{ui:Sačuvaj za rad van mreže}}, dugme za režim ekrana i prekidač {{ui:Papir}} / {{ui:Model}}.

- {{ui:Sačuvaj za rad van mreže}} čuva DetailCraft, njegov 3D prikaz i ovu pomoć u vašem pregledaču, pa se otvara bez veze. Kad je sačuvano, prikazuje {{ui:Spremno za rad van mreže}}; kliknite na njega tada za {{ui:Sačuvaj ponovo (preuzmi najnoviju verziju)}} ili {{ui:Ukloni kopiju za rad van mreže}}. Pogledajte [Rad van mreže](common:offline).
- {{ui:Papir}} daje svetao ekran, a {{ui:Model}} taman. 3D prikaz prati odmah; ništa u vašem modelu se ne menja.
- Dugme za režim ekrana i {{key:Ctrl+Shift+F}} smenjuju normalan prikaz, ceo ekran i ceo ekran sa skrivenim trakama. {{key:Ctrl+Shift+F}} koristi taster Control na svakom računaru, uključujući Mac. Kad su trake skrivene, pokažite na gornju ivicu ekrana (ili je dodirnite) da se vrate. {{key:Esc}} izlazi iz celog ekrana.

## Traka sa alatkama

Traka sa alatkama ima pet grupa. Pređite mišem preko dugmeta da vidite šta radi i njegov taster.

| Grupa | Dugmad | Šta rade |
|---|---|---|
| {{ui:Datoteka}} | {{ui:Novi}}, {{ui:Otvori}}, {{ui:Uvoz IFC}}, {{ui:Sačuvaj}}, {{ui:Primer}} | Pokreću model, otvaraju sačuvanu `.detailcraft.json` ili IFC datoteku, čuvaju jednu ili otvaraju primer okvira |
| {{ui:Postavi}} | {{ui:Izaberi}}, {{ui:Greda}}, {{ui:Stub}}, {{ui:Dijagonala}}, {{ui:Lim}}, {{ui:Temelj}}, {{ui:Stepenište}} | Alat koji sledeći klik u prikazu koristi |
| {{ui:Poveži}} | {{ui:Čeoni limovi}}, {{ui:Bazni lim}}, i u {{ui:Više}}: {{ui:Smičući limovi}}, {{ui:Nastavak}}, {{ui:Čvorni lim}}, {{ui:Slično}} | Dodaju vezu izabranoj gredi, stubu ili dijagonali, ili kopiraju izabranu vezu na svaki sličan spoj |
| {{ui:Uredi}} | {{ui:Opozovi}}, {{ui:Ponovi}}, {{ui:Kopiraj}}, {{ui:Nalepi}}, {{ui:Više}} | Korak unazad i unapred kroz izmene; kopiraju izbor i nalepljuju ga. {{ui:Više}} otvara meni sa {{ui:Iseci}}, {{ui:Kopiraj}}, {{ui:Nalepi}}, {{ui:Nalepi na mestu}}, {{ui:Dupliraj}}, {{ui:Izbriši}}, {{ui:Izaberi sve}} i {{ui:Ukloni izbor}}, svaki sa svojim tasterom |
| {{ui:Izlaz}} | {{ui:IFC}}, {{ui:NC datoteke}}, {{ui:BOM}}, {{ui:Radionički crtež}}, {{ui:Crteži}}, i u {{ui:Više}}: {{ui:Savijanje}}, {{ui:Izveštaj o težini po fazama}}, {{ui:KISS datoteka za softver za izradu}} | Preuzimaju izvoz ili otvaraju listove crteža |

Dugmad i stavke menija koje trenutno ne mogu da rade su zasivljene, a prelazak mišem preko njih kaže zašto. {{ui:Čeoni limovi}} treba izabranu gredu, {{ui:Bazni lim}} izabrani stub, {{ui:Slično}} izabranu vezu, {{ui:Radionički crtež}} model sa delovima, {{ui:Kopiraj}} izabrani štap ili temelj, a {{ui:Nalepi}} nešto kopirano. Pogledajte [Kopiranje, lepljenje i dupliranje](topic:copy-paste).

## Panel Model (levo)

- {{ui:Model}}: {{ui:Naziv}} modela. On imenuje svaku datoteku koju sačuvate ili izvezete.
- {{ui:Mreže}}: linije mreže i njihovi razmaci, i {{ui:Primeni mreže}}. Pogledajte [Postavljanje mreža i nivoa](topic:grids-and-levels).
- {{ui:Nivoi}}: jedan red po nivou (naziv i kota u mm), {{ui:Dodaj nivo}} i {{ui:Primeni nivoe}}.
- {{ui:Prilagođeni profil}}: napravite sopstveni parametarski presek. Zatvoren je dok ga ne otvorite.
- {{ui:Oznake delova}}: svaka oznaka dela u modelu sa profilom, dužinom i brojem. Kliknite na oznaku da izaberete prvi deo sa njom.

{{ui:Mreže}}, {{ui:Nivoi}} i {{ui:Prilagođeni profil}} se sklapaju: kliknite na njihove naslove.

## Prikaz (sredina)

Prikaz pokazuje model u 3D. Iznad njega, traka prikaza ima tri dugmeta i listu:

- {{ui:3D}}: slobodno okrećite model.
- {{ui:Osnova}}: gledajte pravo odozgo na jedan nivo. Pored dugmadi pojavljuje se lista nivoa. Sve što je više od 1,5 m iznad nivoa je odsečeno da biste jasno videli i kliknuli nivo.
- {{ui:Izgled}}: gledajte pravo u jednu slovnu liniju mreže (Mreža A, Mreža B …). Pojavljuje se lista slovnih mreža. Prikazan je samo čelik unutar 1 m od te linije.
- Dugme za uklapanje na desnom kraju trake prikaza uvećava tako da se vidi ceo model.

Male tačke označavaju svaki presek mreže na svakom nivou. Dok je alat za postavljanje uključen, tačka najbliža pokazivaču svetli, a statusna traka je imenuje, na primer „A/2 na Nivo 1”. Boje razlikuju tipove delova: stubovi, grede, dijagonale i limovi imaju svoju boju, zavrtnji i šipke drugu, temelji su providni, a armatura je prikazana kao cevi. Rupe se vide kao tamni čepovi; izrezi su isečeni.

Kako okretati, pomerati i uvećavati: [Kretanje po 3D prikazu](topic:navigate-3d).

Kad je model prazan, prikaz pokazuje kratku listu „Počni model”. Sačuvanu datoteku modela možete prevući bilo gde na prikaz da je otvorite.

## Panel Svojstva (desno)

Šta ovaj panel prikazuje zavisi od toga šta radite, a njegov naslov kaže šta: „Model”, „Postavi gredu”, „Greda b2”, „Veza čeonim limom”, „Bazni lim”, „Temelj F1”, „3 izabrana” ili „Nalepi”.

- **Ništa nije izabrano:** pregled modela (štapovi, veze, temelji, delovi, oznake, zavrtnji, težina čelika i armature, mreže, nivoi).
- **Alat za postavljanje uključen:** opcije za sledeći deo (profil, materijal, položaj, rotacija i, za stubove, {{ui:Do}}), pregled izabranog profila i obrazac {{ui:Dodaj prema mreži}} za postavljanje bez klikanja u prikazu.
- **Izabran štap:** njegov naziv, profil, materijal, položaj, rotacija, koordinate njegova dva kraja, oznake, dužina sečenja i težina, njegove rupe i izrezi, i dugmad za veze, za njegov radionički crtež i za {{ui:Izbriši}}.
- **Izabrana veza:** svako podešavanje lima, zavrtnja i zavara, zavrtnji i zavar koje pravi, njena upozorenja i {{ui:Primeni na slične}}.
- **Izabran temelj:** njegov položaj i veličina, donja mreža, početne šipke i oznake šipki koje koristi.
- **Izabrano više stvari:** koliko štapova svakog tipa, veza i temelja, njihova težina čelika i {{ui:Kopiraj}}, {{ui:Dupliraj}} i {{ui:Izbriši}}.
- **Lepljenje:** šta je u međuspremniku, i obrasci za lepljenje po otkucanom pomeraju ili na presek mreže koji izaberete sa lista.

Polja za brojeve stupaju na snagu kad pritisnete {{key:Enter}} ili napustite polje. Svaka izmena je jedan korak koji možete opozvati.

## Kartice izveštaja (dole)

- {{ui:Problemi}}: sve što DetailCraft nije mogao da izgradi ili što želi da proverite, sa dugmetom {{ui:Izaberi}} u svakom redu. Kartica pokazuje broj u zagradama.
- {{ui:Spisak materijala}}: delovi, sklopovi, zavrtnji i sidrene šipke, sa težinama i vezom {{ui:Preuzmi CSV}}. Kliknite na oznaku dela da izaberete taj deo.
- {{ui:Raspored savijanja}}: svaka oznaka šipke u svakom temelju, sa vezom {{ui:Preuzmi CSV}}.

Sa fokusiranom karticom, {{key:Left}} i {{key:Right}} prelaze između kartica.

## Statusna traka

Traka duž dna ima tri dela: presek mreže ispod pokazivača dok postavljate, poslednju poruku (šta se upravo desilo ili zašto je nešto odbijeno), i zbirove delova, zavrtnja, težine čelika i težine armature. Kad čini se da radnja ne radi ništa, prvo pročitajte poruku ovde.

Naslov kartice pregledača počinje tačkom (•) dok model ima izmene koje niste sačuvali.

## Na uskom ekranu

Ispod oko 760 piksela širine, kolone se slažu: traka sa alatkama, prikaz, statusna traka, {{ui:Svojstva}}, kartice izveštaja, pa panel {{ui:Model}} na kraju. Pomerajte stranicu da stignete do njih. DetailCraft je raspoređen za ekran stonog računara ili laptopa; telefon služi za gledanje, a ne za detaljisanje.
