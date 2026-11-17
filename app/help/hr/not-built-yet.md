---
title: Što još nije izrađeno
summary: Što ova rana verzija programa DetailCraft još ne može i što za sada učiniti umjesto toga.
keywords: ograničenja, nedostaje, plan razvoja, nije podržano, dolazi, planirano, zaobilazno rješenje, todo
from: ea411885
---

DetailCraft je rana verzija. Ova stranica navodi što još ne radi, kako biste mogli planirati. Ništa ovdje nije obećanje datuma.

## Modeliranje

| Još nije | Umjesto toga, za sada |
|---|---|
| Povlačenje jednog kraja štapa (rastezanje) | Uredite {{ui:Početak}} ili {{ui:Kraj}} pod {{ui:Krajevi (x, y, z mm)}} na ploči {{ui:Svojstva}} |
| Filtar odabira (samo grede, samo jedan profil) | Povucite prozor, pa {{key:Shift}}+klik za uklanjanje dijelova |
| Niz za odabir; zakretanje oko nagnute osi; zrcaljenje u nagnutoj ravnini | Kopirajte i zalijepite s pomakom ili {{ui:Dupliciraj}}; zakretanje i zrcaljenje rade u tlocrtu ([Odabir prozorom, pomicanje, zakretanje, zrcaljenje, promjena više objekata](topic:select-and-change)) |
| Točke izvan mreže pri klikanju | Postavite na mrežu, pa upišite krajnje koordinate |
| Pročelja duž brojčanih osi mreže; spremljeni pogledi; radne ravnine | Upotrijebite {{ui:3D}} ili {{ui:Dodaj po mreži}} |
| Provrti prikazani kao stvarni rezovi u 3D prikazu | Provrti se prikazuju kao tamni čepovi; stvarni su u svakom izvozu |
| Zaobljeni ili kosi izrezi, ostali rezovi i spojnice | Samo okomiti izrezi na I-profilima |
| Provrti koje dodajete na kutnicima i okruglim cijevima | Provrti na kutnicima dolaze samo iz [čvornih ploča](topic:brace-gussets) |
| Unos u palcima (imperijalne mjere) | Unesite milimetre (25.4 po palcu) |
| Uređivanje ili uklanjanje prilagođenog profila | Dodajte ispravljeni profil pod novim nazivom |

## Stubišta

| Još nije | Umjesto toga, za sada |
|---|---|
| Ograde, podesti, nožne ploče, gazišta od rešetke, spiralna i dvokraka stubišta | Samo ravni kraci; vidi [Stubišta](topic:stairs) |
| Rezovi na krajevima tetiva prema podovima | Tetive s okomitim rezom; izrežite ih u softveru vaše radionice |

## Veze

DetailCraft izrađuje šest veza: čvornu ploču sprega (vidi [Čvorne ploče spregova](topic:brace-gussets)); vijčani nastavak između dva dijela jednog I-profila (vidi [Nastavci](topic:splices)); kosi spoj između dva I-profila koji se spajaju pod kutom, samo rezan ili s vijčanim čeonim pločama (vidi [Kosi spojevi](topic:mitres)); vijčanu ravnu ili produljenu čeonu ploču od vodoravne, uspravne I-grede do pojasa ili hrpta I-stupa; smičnu ploču s grede (okomite, kose ili nagnute) do pojasa ili hrpta stupa; i podložnu ploču stupa s četiri sidrena vijka.

| Još nije | Umjesto toga, za sada |
|---|---|
| Kose ili nagnute čeone ploče | Upotrijebite [smične ploče](topic:shear-tabs), koje podnose kose i nagnute grede |
| Pridržni kutnici; ispunjavajuće ploče nastavaka i nastavci između različitih dimenzija; kutne čvorne ploče zavarene na gredu i stup, skošene čvorne ploče | Detaljirajte ih u drugom softveru ili dodajte ploče i provrte ručno kao slobodne dijelove; vidi [Nastavci](topic:splices), [Čvorne ploče spregova](topic:brace-gussets) |
| Skošene ili suženje ukrute podložne ploče; provrti za injektiranje; ležište temelja za smični zub | Pravokutne ukrute; vidi [Podložne ploče](topic:base-plates) |
| Ojačanja spoja (haunch); zavareni kosi spojevi sučeonim zavarom; ukrute u ravnini s pojasevima drugog štapa | [Kosi spoj](topic:mitres) s čeonim pločama i ukrutama hrpta, ili običan kosi rez; ostale ploče dodajte ručno kao slobodne dijelove |
| Provjere nosivosti veza (čvrstoće) | Provjerite veze vlastitim proračunima inženjera; DetailCraft upozorava samo na razmak od ruba i razmak vijaka |
| Provrti s utorom | Samo okrugli provrti |

## Analiza

| Još nije | Umjesto toga, za sada |
|---|---|
| Provjere nosivosti osim čeličnih I-profila: cijevi, kutnici, U-profili, zavareni oblici, vitki ili razreda 4, torzija, veze; beton: vitkost zbog pomaka, torzija, seizmičko detaljiranje, ploče i zidovi | Kartica {{ui:Analiza}} provjerava čelične I-profile prema AISC 360 ili EN 1993-1-1 ([Provjera čeličnih štapova prema projektnoj normi](topic:design-checks)); ostalo ostavlja označeno kao „nije provjereno“; sve pregledava inženjer |
| Analiza izvijanja, vibracija | Drugi red je samo P-Delta (elastično); nema analize izvijanja (modalna, spektar odgovora, vremenska povijest i pushover su na kartici {{ui:Analiza}}) |
| Provjere nosivosti koje je pregledao inženjer | Do tada su pomoćno sredstvo: provjerite dva ili tri štapa ručno ili u vlastitom softveru inženjera prije nego se oslonite na njih |
| Opterećenja od podova, vjetra i snijega izračunata za vas iz površina | Opterećenja na štapove unesite ručno, u kN/m ili kN |
| Pomaci štapova, ekscentrični spojevi, spregovi samo na vlak, ploče i temelji u okviru | Štapovi se analiziraju na svojim radnim linijama; spregovi nose vlak i tlak |

## Armatura

| Još nije | Umjesto toga, za sada |
|---|---|
| Okrugli stupovi, spirale, nagnute ili zakrivljene grede, ploče koje nisu pravokutne, zidovi koji nisu ravni | Pravokutne grede, stupovi, ploče i zidovi ([Detaljiranje armiranog betona](topic:reinforced-concrete)) |
| Šipke savijene za preklop, naizmjenični preklopi, preklopi postavljeni po želji | Preklopi u jednakim koracima, svaka šipka preklopljena u istom presjeku (ACI razred B, EN α6 = 1.5) |
| Kutne šipke na otvorima, armatura za proboj, seizmičko detaljiranje (ACI 318-19 poglavlje 18) | Ukrute s obje strane otvora; ostalo provjerite sami |
| Čitanje vlastitih datoteka programa za konstrukcijski proračun | Izvezite IFC iz njega: njegovi IfcReinforcingBar ulaze kao šipke ([Šipke iz IFC datoteke](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Oblici šipki osim ravnih, jednog savoja i U; ACI 315 tipovi za ravne šipke i šipke s jednom kukom | Tri oblika ispisuju se kao BS 8666 00, 11, 21 ili ACI Tip 2; vidi [Referenca armature](topic:rebar-reference) |
| Metričke šipke osim BS 4449 H8–H40 (npr. CSA 10M–35M) | Nazivi ASTM mekih metričkih šipki #10–#36, ili BS šipke |

## Crteži i izvozi

| Još nije | Umjesto toga, za sada |
|---|---|
| Listovi u uspravnoj orijentaciji, A0 i listovi vaše veličine; prikazi općeg rasporeda na kosim mrežama | Vodoravni listovi A4 do A1 i ANSI B do D ([Crteži općeg rasporeda i sklopa](topic:drawings)); skalirajte PDF za ispis na drugoj veličini |
| Oznake zavara na radioničkim crtežima pojedinačnih dijelova; oznake osim kutnih zavara | Crteži sklopa nose oznake kutnih zavara; radionički crtež daje zavar kao tekst |
| Uređivanje crteža u aplikaciji | Promijenite model i ponovno napravite crtež; označite PDF u aplikaciji za PDF, npr. MarkupCraft |
| Crteži kao DWG s objektima kota ili model u punoj veličini u prostoru modela s listovima kao layoutima | Svaki list je DWG ili DXF pune veličine papira, kote kao linije i brojke ([Crteži općeg rasporeda i sklopa](topic:drawings#download)) |
| Provrti u okruglim cijevima, izrezi na kutnicima i okruglim cijevima u NC datotekama | Nisu zapisani; vidi [Polja NC datoteke](topic:nc1-fields) |
| Skošenja, oznake i unutarnje konture u NC datotekama | Trenutno nema |
| Provrti za vijke, vijci, zavari i temelji u USD izvozu | Nalaze se u IFC, NC i BOM izlazima; vidi [Izvoz čeličnog modela u USD](topic:usd) |
| Uvoz veza, temelja, provrta s utorom ili pravokutnih provrta i provrta u okruglim cijevima iz IFC datoteke | {{ui:Uvezi IFC}} uvozi grede, stupove, štapove, ploče, mreže, razine, okrugle provrte, izreze, vijke i armaturne šipke, a njegovo izvješće navodi što nije uvezeno |
| Prilagođeni rasporedi izvješća | Tri CSV datoteke |

## Ploče

| Još nije | Umjesto toga, za sada |
|---|---|
| Premještanje izvješća na dnu ({{ui:Problemi}}, {{ui:Sastavnica}}, {{ui:Plan savijanja}}) | Samo ploče {{ui:Model}} i {{ui:Svojstva}} se mogu premještati. Vidi [Raspored ploča](common:arrange-panels) |

## Zajednički rad i spremanje

| Još nije | Umjesto toga, za sada |
|---|---|
| Spremanje u oblak i sinkronizacija među računalima | Spremite `.detailcraft.json` datoteke i dijelite ih kao bilo koju datoteku. Spremanje u oblak još nije dostupno |
| Tuđi kursori i oznake „uređuje“ u sesiji Live TeamWork; mreže, razine i faze spajane stavku po stavku | Promjene se i dalje spajaju (mreže, razine i faze idu cijele, kasnija promjena pobjeđuje); vidi [Zajedno uređujte jednu konstrukciju uživo](topic:work-live) |
| Pozivnice za sesiju Live TeamWork preko interneta | Pridružite se kratkim kodom na istoj mreži |

## Platforme

- DetailCraft je napravljen za zaslon stolnog računala, prijenosnog računala ili tableta. Radi i na telefonu: model zadržava zaslon, a ploče i izvješća otvaraju se kao listovi iz trake pri dnu, ali za ploče ima malo mjesta.
- Za rad offline najprije je potrebno spremiti DetailCraft za rad offline, pomoću {{ui:Spremi za offline}} na traci aplikacije; kad piše {{ui:Spremno za offline}}, sve u ovoj verziji radi bez veze. Vidi [Rad offline](common:offline).

Ako vam neki od ovih nedostataka blokira rad, javite nam se preko [stranice za podršku](https://getcadcraft.com/support); to nam pomaže odlučiti što sljedeće izraditi.
