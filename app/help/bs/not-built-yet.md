---
title: Šta još nije izgrađeno
summary: Šta ova rana verzija DetailCraft-a još ne može da uradi i šta raditi umjesto toga danas.
keywords: ograničenja, nedostaci, nedostaje, plan razvoja, nije podržano, dolazi, planirano, zaobilazno rješenje, todo
from: ea411885
---

DetailCraft je rana verzija. Ova stranica navodi šta još ne radi, da možete planirati oko toga. Ništa ovdje nije obećanje datuma.

## Modeliranje

| Još nije | Umjesto toga, danas |
|---|---|
| Povlačenje jednog kraja elementa (rastezanje) | Uredi {{ui:Start}} ili {{ui:End}} pod {{ui:Ends (x, y, z mm)}} u panelu {{ui:Properties}} |
| Filter odabira (samo grede, samo jedan profil) | Povuci prozor, pa {{key:Shift}}+klik da izvučeš dijelove |
| Niz odabira; rotacija oko nagnute ose; zrcaljenje u nagnutoj ravni | Kopiraj i zalijepi s pomakom, ili {{ui:Duplicate}}; rotacija i zrcaljenje rade u tlocrtu ([Odaberi prozorom, pomjeri, rotiraj, zrcali, promijeni više](topic:select-and-change)) |
| Tačke van mreže pri kliku | Postavi na mrežu, pa unesi koordinate krajeva |
| Izgledi duž numerisanih osovina; sačuvani pogledi; radne ravni | Koristi {{ui:3D}} ili {{ui:Add by grid}} |
| Rupe nacrtane kao stvarni rezovi u 3D prikazu | Rupe se prikazuju kao tamni čepovi; stvarne su u svakom izvozu |
| Zaobljeni ili kosi izrezi, ostali rezovi i spojnice | Samo pravi izrezi na I-profilima |
| Rupe koje dodaješ uglovima i okruglim cijevima | Rupe na uglovima dolaze samo iz [ugaonih ploča](topic:brace-gussets) |
| Unos u inčima | Unesi milimetre (25,4 po inču) |
| Uređivanje ili uklanjanje prilagođenog profila | Dodaj ispravljen profil pod novim nazivom |

## Stepenice

| Još nije | Umjesto toga, danas |
|---|---|
| Ograde, podesti, nožne ploče, rešetkasti gazi, spiralne i dvokrake stepenice | Samo ravni kraci; vidi [Stepenice](topic:stairs) |
| Krajnji rezovi stringera uz podove | Stringeri sa ravnim rezom; izreži ih u softveru svoje radionice |

## Veze

DetailCraft pravi šest veza: ugaonu ploču (vidi [Ugaone ploče](topic:brace-gussets)); vijčani spoj između dva dijela jednog I-profila (vidi [Spojevi](topic:splices)); zakošeni spoj između dva I-profila koji se sastaju pod uglom, samo rez ili sa vijčanim krajnjim pločama (vidi [Zakošeni spojevi](topic:mitres)); ravnu ili produženu vijčanu krajnju ploču od nivoa, uspravne I-grede do pojasnice ili rebra I-stuba; smičući jezičak od grede (pravog, kosog ili nagnutog) do pojasnice ili rebra stuba; i temeljnu ploču stuba sa četiri sidrena štapa.

| Još nije | Umjesto toga, danas |
|---|---|
| Kose ili nagnute krajnje ploče | Koristi [smičuće jezičke](topic:shear-tabs), koji podnose kose i nagnute grede |
| Ugaoni nosači; ispune spojeva i spojevi između različitih veličina; ugaone ploče zavarene za gredu i stub, zakošene ugaone ploče | Detaljiši ih u drugom softveru, ili dodaj ploče i rupe ručno kao slobodne dijelove; vidi [Spojevi](topic:splices), [Ugaone ploče](topic:brace-gussets) |
| Zakošene ili sužene ukrute baze; rupe za injektiranje; jama temelja za smičući klin | Pravougaone ukrute; vidi [Temeljne ploče](topic:base-plates) |
| Podupiranja (haunches); zavareni zakosi sa sučeljnim zavarom; ukrute u liniji sa pojasnicama drugog elementa | [Zakošeni spoj](topic:mitres) sa krajnjim pločama i rebrenim ukrutama, ili običan zakošeni rez; ostale ploče dodaj ručno kao slobodne dijelove |
| Provjere čvrstoće veza | Provjeri veze proračunima svog inženjera; DetailCraft samo upozorava na razmak od ivice i razmak |
| Rupe u obliku proreza | Samo okrugle rupe |

## Analiza

| Još nije | Umjesto toga, danas |
|---|---|
| Provjere projekta osim za čelične I-profile: cijevi, uglovi, kanali, zavareni oblici, vitki ili klase 4 dijelovi, torzija, veze; beton: vitkost pri bočnom pomjeranju, torzija, seizmičko detaljisanje, ploče i zidovi | Kartica {{ui:Analysis}} provjerava čelične I-profile prema AISC 360 ili EN 1993-1-1 ([Provjeri čelične elemente prema projektnom standardu](topic:design-checks)); ostalo ostavlja označeno kao "nije provjereno"; sve pregleda inženjer |
| Analiza izvijanja, vibracija | Drugi red je samo P-Delta (elastičan); nema analize izvijanja (modalna, spektar odziva, vremenski zapis i pushover su u kartici {{ui:Analysis}}) |
| Provjere projekta koje je pregledao inženjer | Do tada su samo pomoć: provjeri dva ili tri elementa ručno ili u vlastitom softveru inženjera prije nego se oslonite na njih |
| Opterećenja za podove, vjetar i snijeg izračunata iz površina | Stavi opterećenja na elemente ručno, u kN/m ili kN |
| Pomjeranja elemenata, ekscentrični spojevi, dijagonale koje primaju samo zatezanje, ploče i temelji u okviru | Elementi se analiziraju na svojim radnim linijama; dijagonale prenose zatezanje i pritisak |

## Armatura

| Još nije | Umjesto toga, danas |
|---|---|
| Okrugli stubovi, spirale, nagnute ili zakrivljene grede, ploče osim pravougaonih, zidovi koji nisu ravni | Pravougaone grede, stubovi, ploče i zidovi ([Detaljiši armirani beton](topic:reinforced-concrete)) |
| Šipke savijene u preklop, preklopi u šahovnici, preklopi postavljeni po izboru | Preklopi na jednakim koracima, svaka šipka preklopljena u jednom presjeku (ACI klasa B, EN α6 = 1,5) |
| Ugaone šipke na otvorima, poprečna armatura za proboj, seizmičko detaljisanje (ACI 318-19 poglavlje 18) | Pojasevi sa obje strane otvora; ostalo provjeri sam |
| Čitanje sopstvenih datoteka programa za konstrukcijski proračun | Izvezi IFC iz njega: njegove IfcReinforcingBar ulaze kao šipke ([Šipke iz IFC datoteke](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Oblici savijanja osim ravnog, jednog savoja i U; ACI 315 tipovi za ravne šipke i šipke sa jednom kukom | Tri oblika se ispisuju kao BS 8666 00, 11, 21 ili ACI Type 2; vidi [Referenca armature](topic:rebar-reference) |
| Metričke šipke osim BS 4449 H8–H40 (npr. CSA 10M–35M) | ASTM meke metričke oznake #10–#36, ili BS šipke |

## Crteži i izvozi

| Još nije | Umjesto toga, danas |
|---|---|
| Uspravni listovi, A0 i listovi tvoje veličine; pogledi opšteg rasporeda na kosim mrežama | Pejzažni A4 do A1 i ANSI B do D ([Crteži opšteg rasporeda i sklopa](topic:drawings)); skaliraj PDF za štampanje na drugoj veličini |
| Oznake zavara na pojedinačnim radioničkim crtežima; oznake osim ugaonih zavara | Sklopni crteži nose oznake ugaonih zavara; radionički crtež daje zavar kao tekst |
| Uređivanje crteža u aplikaciji | Promijeni model i ponovo napravi crtež; označi PDF u PDF aplikaciji kao što je MarkupCraft |
| Crteži kao DWG sa objektima dimenzija, ili model u punoj razmjeri u prostoru modela sa listovima kao rasporedima | Svaki list je DWG ili DXF pune veličine papira, dimenzije kao linije i brojevi ([Crteži opšteg rasporeda i sklopa](topic:drawings#download)) |
| Rupe za NC u okruglim cijevima, izrezi na uglovima i okruglim cijevima u NC datotekama | Ne zapisuje se; vidi [Polja NC datoteke](topic:nc1-fields) |
| Zakošenja, oznake i unutrašnji konturi u NC datotekama | Trenutno nema |
| Rupe za vijke, vijci, zavari i temelji u USD izvozu | Nalaze se u IFC, NC i BOM izlazima; vidi [Izvoz čeličnog modela u USD](topic:usd) |
| Uvoz veza, temelja, proreznih ili pravougaonih rupa i rupa u okruglim cijevima iz IFC datoteke | {{ui:Import IFC}} uvozi grede, stubove, elemente, ploče, mreže, nivoe, okrugle rupe, izreze, vijke i armaturne šipke, a njegov izvještaj navodi šta je ostavljeno |
| Prilagođeni rasporedi izvještaja | Tri CSV datoteke |

## Paneli

| Još nije | Umjesto toga, danas |
|---|---|
| Pomjeranje izvještaja pri dnu ({{ui:Problems}}, {{ui:Bill of materials}}, {{ui:Bending schedule}}) | Pomjeraju se samo paneli {{ui:Model}} i {{ui:Properties}}. Vidi [Raspored panela](common:arrange-panels) |

## Zajednički rad i spremanje

| Još nije | Umjesto toga, danas |
|---|---|
| Sinhronizacija i spremanje u oblaku između računara | Spasi `.detailcraft.json` datoteke i dijeli ih kao bilo koju datoteku. Spremanje u oblaku još nije dostupno |
| Tuđi kursori i oznake "uređuje" u sesiji Live TeamWork; mreže, nivoi i faze spojeni stavku po stavku | Izmjene se i dalje spajaju (mreže, nivoi i faze idu cijeli, kasnija izmjena pobjeđuje); vidi [Zajedno detaljiši jednu konstrukciju uživo](topic:work-live) |
| Pozivnice za Live TeamWork sesiju preko interneta | Pridruži se kratkim kodom na istoj mreži |

## Platforme

- DetailCraft je napravljen za ekran desktopa, laptopa ili tableta. Radi i na telefonu: model zadržava ekran i panele, a izvještaji se otvaraju kao listovi sa trake pri dnu, ali za panele ima malo prostora.
- Rad van mreže zahtijeva prethodno spremanje DetailCraft-a za rad van mreže, pomoću {{ui:Save for offline}} u traci aplikacije; kad piše {{ui:Offline ready}}, sve u ovoj verziji radi bez veze. Vidi [Rad van mreže](common:offline).

Ako neki od ovih nedostataka blokira vaš rad, javite nam preko [stranice za podršku](https://getcadcraft.com/support); to nam pomaže da odlučimo šta dalje graditi.
