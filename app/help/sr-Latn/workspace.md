---
title: Obilazak ekrana
summary: Svaka traka, panel i kartica u DetailCraft po njihovom nazivu na ekranu i čemu služe.
keywords: ekran, raspored, traka sa alatkama, paneli, svojstva, statusna traka, izveštaji, interfejs, ui, kartice
from: 454f74fd
---

DetailCraft ispunjava prozor pregledača ispod trake aplikacije. Odozgo nadole: traka sa alatkama, zatim tri kolone (panel {{ui:Model}}, prikaz, panel {{ui:Svojstva}}), pa kartice izveštaja, pa statusna traka.

## Traka aplikacije

Tanka traka na samom vrhu pripada sajtu CadCraft, a ne modelu. Prikazuje naziv i verziju aplikacije, link na {{ui:O programu DetailCraft}}, {{ui:Pomoć}} (ili {{key:F1}}) za ovu pomoć, {{ui:Sačuvaj za rad van mreže}}, dugme režima ekrana i prekidač {{ui:Papir}} / {{ui:Model}}.

- {{ui:Sačuvaj za rad van mreže}} čuva DetailCraft, njegov 3D prikaz i ovu pomoć u vašem pregledaču, pa se otvara bez veze. Kada je sačuvano, prikazuje {{ui:Spremno za rad van mreže}}; tada kliknite na njega za {{ui:Sačuvaj ponovo (preuzmi najnoviju verziju)}} ili {{ui:Ukloni kopiju za rad van mreže}}. Pogledajte [Rad van mreže](common:offline).
- {{ui:Papir}} daje svetao ekran, a {{ui:Model}} taman. 3D prikaz odmah prati; ništa u vašem modelu se ne menja.
- Dugme režima ekrana i {{key:Ctrl+Shift+F}} smenjuju normalni prikaz, ceo ekran i ceo ekran sa skrivenim trakama. {{key:Ctrl+Shift+F}} koristi taster Control na svakom računaru, uključujući Mac. Kada su trake skrivene, pokažite na gornju ivicu ekrana (ili je dodirnite) da se vrate. {{key:Esc}} izlazi iz celog ekrana.

## Traka sa alatkama

Traka sa alatkama ima pet grupa. Zadržite pokazivač na dugmetu da vidite šta radi i njegov taster.

| Grupa | Dugmad | Šta rade |
|---|---|---|
| {{ui:Datoteka}} | {{ui:Novi}}, {{ui:Otvori}}, {{ui:Uvoz IFC}}, {{ui:Sačuvaj}}, {{ui:Primer}} | Pokreću model, otvaraju sačuvanu `.detailcraft.json` ili IFC datoteku, čuvaju model ili otvaraju primer okvira |
| {{ui:Postavi}} | {{ui:Izaberi}}, {{ui:Greda}}, {{ui:Stub}}, {{ui:Dijagonala}}, {{ui:Lim}}, {{ui:Temelj}}, {{ui:Stepenište}} | Alat koji sledeći klik u prikazu koristi |
| {{ui:Poveži}} | {{ui:Čeoni limovi}}, {{ui:Bazni lim}}, i u {{ui:Više}}: {{ui:Smičući limovi}}, {{ui:Nastavak}}, {{ui:Čvorni lim}}, {{ui:Slično}} | Dodaje vezu izabranoj gredi, stubu ili dijagonali, ili kopira izabranu vezu na svaki sličan spoj |
| {{ui:Uredi}} | {{ui:Opozovi}}, {{ui:Ponovi}}, {{ui:Kopiraj}}, {{ui:Nalepi}}, {{ui:Više}} | Korak nazad i napred kroz izmene; kopira izbor i nalepljuje ga. {{ui:Više}} otvara meni sa {{ui:Iseci}}, {{ui:Kopiraj}}, {{ui:Nalepi}}, {{ui:Nalepi na mestu}}, {{ui:Dupliraj}}, {{ui:Izbriši}}, {{ui:Izaberi sve}} i {{ui:Ukloni izbor}}, svaki sa svojim tasterom |
| {{ui:Izlaz}} | {{ui:IFC}}, {{ui:NC datoteke}}, {{ui:BOM}}, {{ui:Radionički crtež}}, {{ui:Crteži}}, i u {{ui:Više}}: {{ui:Savijanje}}, {{ui:Izveštaj o težini po fazama}}, {{ui:KISS datoteka za softver za izradu}} | Preuzima izvoz ili otvara listove crteža |

Dugmad i stavke menija koje trenutno ne mogu da rade su zasivljene, a zadržavanje pokazivača na njima kaže zašto. {{ui:Čeoni limovi}} traži izabranu gredu, {{ui:Bazni lim}} izabrani stub, {{ui:Slično}} izabranu vezu, {{ui:Radionički crtež}} izabran deo tipa I-profil ili lim, {{ui:Kopiraj}} izabran element ili temelj, a {{ui:Nalepi}} nešto kopirano. Pogledajte [Kopiranje, nalepljivanje i dupliranje](topic:copy-paste).

## Panel Model (levo)

- {{ui:Model}}: {{ui:Naziv}} modela. On daje naziv svakoj datoteci koju sačuvate ili izvezete.
- {{ui:Mreže}}: linije mreže i njihovi razmaci, i {{ui:Primeni mreže}}. Pogledajte [Podesite mreže i nivoe](topic:grids-and-levels).
- {{ui:Nivoi}}: jedan red po nivou (naziv i kota u mm), {{ui:Dodaj nivo}} i {{ui:Primeni nivoe}}.
- {{ui:Prilagođeni profil}}: napravite sopstveni parametarski presek. Zatvoren je dok ga ne otvorite.
- {{ui:Oznake delova}}: svaka oznaka dela u modelu sa profilom, dužinom i brojem. Kliknite oznaku da izaberete prvi deo sa njom.

{{ui:Mreže}}, {{ui:Nivoi}} i {{ui:Prilagođeni profil}} se sklapaju: kliknite na njihove naslove.

## Prikaz (sredina)

Prikaz pokazuje model u 3D. Iznad njega, traka prikaza ima tri dugmeta i jednu listu:

- {{ui:3D}}: slobodno okrećite model.
- {{ui:Osnova}}: gledajte pravo dole na jedan nivo. Pored dugmadi se pojavljuje lista nivoa. Sve što je više od 1.5 m iznad nivoa je odsečeno, da biste jasno videli i kliknuli nivo.
- {{ui:Izgled}}: gledajte pravo u jednu slovnu liniju mreže (Mreža A, Mreža B …). Pojavljuje se lista slovnih mreža. Prikazan je samo čelik unutar 1 m od te linije.
- Dugme za uklapanje na desnom kraju trake prikaza zumira tako da prikaže ceo model.

Male tačke označavaju svaki presek mreže na svakom nivou. Dok je alat za postavljanje uključen, tačka najbliža pokazivaču se osvetli, a statusna traka je imenuje, na primer „A/2 na Nivo 1”. Boje razlikuju vrste elemenata: stubovi, grede, dijagonale i limovi imaju svoju boju, zavrtnji i sidra drugu, temelji su providni, a armatura je prikazana kao cevi. Rupe se prikazuju kao tamni čepovi; izrezi su isečeni.

Kako okretati, pomerati i zumirati: [Krećite se po 3D prikazu](topic:navigate-3d).

Kada je model prazan, prikaz pokazuje kratku listu „Započni model”. Sačuvanu datoteku modela možete i da ispustite bilo gde na prikaz da je otvorite.

## Panel Svojstva (desno)

Šta ovaj panel prikazuje zavisi od onoga što radite, a njegov naslov kaže šta: „Model”, „Postavi gredu”, „Greda b2”, „Veza čeonim limom”, „Bazni lim”, „Temelj F1”, „3 izabrano” ili „Nalepi”.

- **Ništa izabrano:** pregled modela (elementi, veze, temelji, delovi, oznake, zavrtnji, težina čelika i armature, mreže, nivoi).
- **Alat za postavljanje uključen:** opcije za sledeći deo (profil, materijal, položaj, rotacija, a za stubove {{ui:Do}}), pregled izabranog profila i obrazac {{ui:Dodaj prema mreži}} za postavljanje bez klikanja u prikazu.
- **Izabran element:** njegov naziv, profil, materijal, položaj, rotacija, koordinate dva kraja, njegove oznake, dužina sečenja i težina, rupe i izrezi, i dugmad za veze, njegov radionički crtež i {{ui:Izbriši}}.
- **Izabrana veza:** svako podešavanje limova, zavrtnja i zavara, zavrtnji i zavar koje pravi, njena upozorenja i {{ui:Primeni na slične}}.
- **Izabran temelj:** njegov položaj i veličina, donja mreža, početne šipke i oznake šipki koje koristi.
- **Više izabranih stvari:** koliko elemenata svake vrste, veza i temelja, njihova težina čelika, i {{ui:Kopiraj}}, {{ui:Dupliraj}} i {{ui:Izbriši}}.
- **Nalepljivanje:** šta je u {{ui:Ostava}}, i obrasci za nalepljivanje po unetom pomeraju ili na presek mreže koji birate iz lista.

Polja za brojeve stupaju na snagu kada pritisnete {{key:Enter}} ili napustite polje. Svaka promena je jedan korak koji možete da opozovete.

## Kartice izveštaja (dole)

- {{ui:Problemi}}: sve što DetailCraft nije mogao da napravi ili što želi da proverite, sa dugmetom {{ui:Izaberi}} u svakom redu. Kartica pokazuje broj u zagradama.
- {{ui:Spisak materijala}}: delovi, sklopovi, i zavrtnji i sidreni štapovi, sa težinama i linkom {{ui:Preuzmi CSV}}. Kliknite oznaku dela da izaberete taj deo.
- {{ui:Raspored savijanja}}: svaka oznaka šipke u svakom temelju, sa linkom {{ui:Preuzmi CSV}}.

Kada je kartica u fokusu, {{key:Left}} i {{key:Right}} pomeraju se između kartica.

## Statusna traka

Traka duž dna ima tri dela: presek mreže pod pokazivačem dok postavljate, poslednju poruku (šta se upravo dogodilo ili zašto je nešto odbijeno), i zbirove delova, zavrtnja, težine čelika i težine armature. Kada se čini da radnja ne radi ništa, prvo pročitajte poruku ovde.

Naslov kartice pregledača počinje tačkom (•) dok model ima izmene koje niste sačuvali.

## Na uskom ekranu

Ispod oko 760 piksela širine, kolone se slažu: traka sa alatkama, prikaz, statusna traka, {{ui:Svojstva}}, kartice izveštaja, pa panel {{ui:Model}} na kraju. Pomerajte stranicu da dođete do njih. DetailCraft je postavljen za ekran stonog računara ili laptopa; telefon radi za gledanje, ne za detaljisanje.
