---
title: Šta još nije izgrađeno
summary: Šta ova rana verzija DetailCraft-a još ne može da radi i šta da uradiš umesto toga danas.
keywords: ograničenja, nedostaci, nedostaje, plan razvoja, nije podržano, uskoro, planirano, zaobilazno rešenje, todo
from: ea411885
---

DetailCraft je rana verzija. Ova stranica navodi šta još ne radi, da bi mogao da planiraš oko toga. Ništa ovde nije obećanje o datumu.

## Modelovanje

| Još nije | Umesto toga, danas |
|---|---|
| Vučenje jednog kraja elementa (istezanje) | Izmeni {{ui:Početak}} ili {{ui:Kraj}} pod {{ui:Krajevi (x, y, z mm)}} u panelu {{ui:Svojstva}} |
| Filter izbora (samo grede, samo jedan profil) | Prevuci prozor, pa {{key:Shift}}+klik da izvadiš delove |
| Umnožavanje izbora u niz; rotacija oko nagnute ose; ogledanje u nagnutoj ravni | Kopiraj i nalepi sa pomakom, ili {{ui:Dupliraj}}; rotacija i ogledanje rade u osnovi ([Izbor prozorom, pomeranje, rotiranje, ogledanje, promena više delova](topic:select-and-change)) |
| Tačke van mreže pri kliku | Postavi na mrežu, pa ukucaj krajnje koordinate |
| Kote duž numerisanih linija mreže; sačuvani pogledi; radne ravni | Koristi {{ui:3D}}, ili {{ui:Dodaj prema mreži}} |
| Rupe nacrtane kao pravi rezovi u 3D prikazu | Rupe se vide kao tamni čepovi; prave su u svakom izvozu |
| Zaobljeni ili kosi izrezi, drugi rezovi i spojnice | Samo upravni izrezi na I-profilima |
| Rupe koje dodaješ na uglovima i okruglim cevima | Rupe na uglovima dolaze samo od [čvornih limova dijagonala](topic:brace-gussets) |
| Unos u inčima | Unesi milimetre (25.4 po inču) |
| Izmena ili uklanjanje prilagođenog profila | Dodaj ispravljen profil pod novim nazivom |

## Stepenice

| Još nije | Umesto toga, danas |
|---|---|
| Ograde, podeste, nožice, rešetkasta gazišta, spiralne i dvokrake stepenice | Samo ravni kraci; vidi [Stepenice](topic:stairs) |
| Krajnji rezovi tetiva prema međuspratnim konstrukcijama | Tetive sa upravnim rezom; odseci ih u softveru tvoje radionice |

## Veze

DetailCraft pravi šest veza: čvorni lim dijagonale (vidi [Čvorni limovi dijagonala](topic:brace-gussets)); zavrtnjem spojen nastavak između dva dela jednog I-profila (vidi [Nastavci](topic:splices)); ugaoni spoj između dva I-profila koji se sustižu pod uglom, samo rez ili sa zavrtnjenim krajnjim limovima (vidi [Ugaoni spojevi](topic:mitres)); ravan ili produžen zavrtnjen krajnji lim od nivoa, uspravne I-grede do pojasa ili rebra I-stuba; priključni lim grede (upravan, kosi ili nagnut) do pojasa ili rebra stuba; i podložni lim stuba sa četiri sidrena štapa.

| Još nije | Umesto toga, danas |
|---|---|
| Kosi ili nagnuti krajnji limovi | Koristi [priključne limove](topic:shear-tabs), koji primaju kose i nagnute grede |
| Priključni uglovi; popunjavajući limovi nastavka i nastavci između različitih veličina; ugaoni čvorni limovi zavareni za gredu i stub; čvorni limovi sa skosom | Razradi ih u drugom softveru, ili dodaj limove i rupe ručno kao slobodne delove; vidi [Nastavci](topic:splices), [Čvorni limovi dijagonala](topic:brace-gussets) |
| Skošeni ili suženi ukrućivači podložnog lima; rupe za malter; udubljenje u temelju za smičuću klinu | Pravougaoni ukrućivači; vidi [Podložni limovi](topic:base-plates) |
| Ojačanja spoja (haunch); gerovani spojevi zavareni čeono; ukrućivači u liniji sa pojasevima drugog elementa | [Ugaoni spoj](topic:mitres) sa krajnjim limovima i ukrućivačima rebra, ili običan ugaoni rez; ostale limove dodaj ručno kao slobodne delove |
| Provere proračuna veze (čvrstoće) | Proveri veze sa proračunima svog inženjera; DetailCraft samo upozorava na rastojanje do ivice i razmak |
| Ovalne rupe | Samo okrugle rupe |

## Analiza

| Još nije | Umesto toga, danas |
|---|---|
| Provere proračuna osim čeličnih I-profila: cevi, uglovi, U-profili, zavareni oblici, vitki ili klase 4 delovi, uvijanje, veze; beton: vitkost pri pomeranju, uvijanje, seizmičko detaljisanje, ploče i zidovi | Kartica {{ui:Analiza}} proverava čelične I-profile prema AISC 360 ili EN 1993-1-1 ([Proveri čelične elemente prema projektnom propisu](topic:design-checks)); ostalo ostavlja označeno kao „nije proverano“; sve pregleda inženjer |
| Analiza izvijanja, vibracije | Drugi red je samo P-Delta (elastičan); nema analize izvijanja (modalna, spektar odgovora, istorija u vremenu i pushover su u kartici Analiza) |
| Provere proračuna koje je inženjer pregledao | Do tada su pomoć: proveri dva ili tri elementa ručno ili u sopstvenom softveru inženjera, pre nego što se osloniš na njih |
| Opterećenja od sprata, vetra i snega izračunata za tebe iz površina | Unesi opterećenja na elemente ručno, u kN/m ili kN |
| Pomeranja elemenata, ekscentrični spojevi, dijagonale samo na zatezanje, limovi i temelji u okviru | Elementi se analiziraju po svojim radnim linijama; dijagonale nose zatezanje i pritisak |

## Armatura

| Još nije | Umesto toga, danas |
|---|---|
| Okrugli stubovi, spirale, nagnute ili krivudave grede, ploče osim pravougaonih, zidovi koji nisu ravni | Pravougaone grede, stubovi, ploče i zidovi ([Detaljisanje armiranog betona](topic:reinforced-concrete)) |
| Šipke savijene u preklop, naizmenični preklopi, preklopi postavljeni po izboru | Preklopi u jednakim koracima, svaka šipka preklopljena u jednom preseku (ACI klasa B, EN α6 = 1.5) |
| Ugaone šipke na otvorima, armatura protiv proboja, seizmičko detaljisanje (ACI 318-19 poglavlje 18) | Ojačanja sa obe strane otvora; ostalo proveri sam |
| Čitanje sopstvenih datoteka softvera za statički proračun | Izvezi IFC iz njega: njegovi IfcReinforcingBar ulaze kao šipke ([Šipke iz IFC datoteke](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Oblici savijanja osim ravnog, jednog savijanja i U; ACI 315 tipovi za ravne šipke i šipke sa jednom kukom | Tri oblika se ispisuju kao BS 8666 00, 11, 21 ili ACI Type 2; vidi [Referenca armature](topic:rebar-reference) |
| Metričke šipke osim BS 4449 H8–H40 (npr. CSA 10M–35M) | ASTM soft-metric nazivi #10–#36, ili BS šipke |

## Crteži i izvozi

| Još nije | Umesto toga, danas |
|---|---|
| Vertikalni listovi, A0 i listovi po tvojoj meri; prikazi opšteg rasporeda na kosim mrežama | Položeni A4 do A1 i ANSI B do D ([Crteži opšteg rasporeda i sklopa](topic:drawings)); razmeri PDF za štampu na drugoj veličini |
| Oznake zavara na pojedinačnim radioničkim crtežima; oznake osim ugaonih zavara | Crteži sklopa imaju oznake ugaonih zavara; radionički crtež zavar daje kao tekst |
| Izmena crteža u aplikaciji | Izmeni model i napravi crtež ponovo; označi PDF u PDF aplikaciji, kao što je MarkupCraft |
| Crteži kao DWG sa objektima kota, ili model u punoj razmeri u prostoru modela sa listovima kao rasporedima | Svaki list je DWG ili DXF pune veličine papira, sa kotama kao linijama i brojevima ([Crteži opšteg rasporeda i sklopa](topic:drawings#download)) |
| Rupe za NC u okruglim cevima, izrezi na uglovima i okruglim cevima u NC datotekama | Nisu upisani; vidi [Polja NC datoteke](topic:nc1-fields) |
| Skosi, oznake i unutrašnji konturi u NC datotekama | Trenutno nema |
| Rupe za zavrtnje, zavrtnji, zavari i temelji u USD izvozu | Nalaze se u IFC, NC i BOM izlazima; vidi [Izvoz čeličnog modela u USD](topic:usd) |
| Uvođenje veza, temelja, ovalnih ili pravougaonih rupa i rupa u okruglim cevima iz IFC datoteke | {{ui:Uvoz IFC}} uvodi grede, stubove, elemente, limove, mreže, nivoe, okrugle rupe, izreze, zavrtnje i armaturne šipke, a njegov izveštaj navodi šta je ostavio |
| Prilagođeni rasporedi izveštaja | Tri CSV datoteke |

## Paneli

| Još nije | Umesto toga, danas |
|---|---|
| Pomeranje izveštaja pri dnu ({{ui:Problemi}}, {{ui:Spisak materijala}}, {{ui:Raspored savijanja}}) | Pomeraju se samo paneli {{ui:Model}} i {{ui:Svojstva}}. Vidi [Raspored panela](common:arrange-panels) |

## Zajednički rad i čuvanje

| Još nije | Umesto toga, danas |
|---|---|
| Čuvanje u oblaku i sinhronizacija između računara | Sačuvaj `.detailcraft.json` datoteke i deli ih kao svaku datoteku. Čuvanje u oblaku još nije dostupno |
| Tuđi kursori i oznake „uređuje“ u sesiji Live TeamWork; mreže, nivoi i faze spojeni stavka po stavku | Izmene se i dalje spajaju (mreže, nivoi i faze se prenose celi, važi kasnija izmena); vidi [Zajedno detaljišite jednu konstrukciju uživo](topic:work-live) |
| Pozivnice za sesiju Live TeamWork preko interneta | Pridruži se kratkim kodom na istoj mreži |

## Platforme

- DetailCraft je napravljen za ekran stolnog računara, laptopa ili tableta. Radi i na telefonu: model zadržava ekran i panele, a izveštaji se otvaraju kao listovi s trake pri dnu, ali za panele ima malo mesta.
- Rad van mreže zahteva prvo DetailCraft sačuvan za rad van mreže, pomoću {{ui:Sačuvaj za rad van mreže}} u traci aplikacije; kada piše {{ui:Spremno za rad van mreže}}, sve u ovoj verziji radi bez veze. Vidi [Rad van mreže](common:offline).

Ako neki od ovih nedostataka blokira tvoj rad, javi nam preko [stranice za podršku](https://getcadcraft.com/support); to nam pomaže da odlučimo šta da napravimo sledeće.
