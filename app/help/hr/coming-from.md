---
title: Dolazak iz drugih programa za detaljiranje
summary: Kako se navike punog programa za detaljiranje prenose u DetailCraft i koje razlike iznenade iskusne detaljere.
keywords: prelazak, migracija, poznato, tijek rada, usporedba, razlike, numeriranje, komponente, katalog, crteži, navike
from: 39639a5d
---

Ako detaljirate u Tekla Structures, većina DetailCraft-a će vam biti poznata: mreže, etaže, profili iz kataloga, dijelovi i sklopovi, spojevi, numeriranje, NC datoteke, IFC. Mjerilo je vrlo različito: Tekla Structures je potpun proizvodni sustav, a DetailCraft je mala, rana aplikacija za preglednik koja obavlja nekoliko poslova od početka do kraja. Ova stranica pokazuje gdje se vaše navike prenose, a gdje ne.

:::tip
Ako vaše ruke znaju vrpcu Tekla Structures, odaberite stil izbornika {{ui:Čelična vrpca}} u {{ui:Postavke}} › {{ui:DetailCraft}} › {{ui:Izbornici, tipke i miš}}: kartice Modeliranje, Detaljiranje, Uređivanje, Crteži, Izrada i Prikaz, a srednja tipka pomiče prikaz. Ako dolazite iz AutoCAD-a i volite upisivati naredbe, {{ui:Klasično crtanje}} dodaje naredbeni redak (BEAM, COLUMN, ENDPLATE, ZOOM …). Vidi [Izbornici, tipke i miš](topic:menus-keys-and-mouse).
:::

## Brzi pregled

| Na što ste navikli | U DetailCraft-u |
|---|---|
| Stvaranje mreža s koordinatama u dijalogu mreže | {{ui:Mreže}} u lijevom panelu: oznake i razmaci između linija, a ne apsolutne koordinate. Brojčane linije idu jednim smjerom, a slovne drugim |
| Etaže kao Z koordinate mreže | Zaseban popis {{ui:Razine}}, naziv i kota po retku, primijenjen s {{ui:Primijeni razine}} |
| Odabir točaka bilo gdje pomoću hvatanja | Klikovi se hvataju samo na presjecišta mreže. Točke izvan mreže upisuju se u {{ui:Krajevi (x, y, z mm)}} štapa |
| Naredbe za stup, gredu i ploču | {{ui:Stup}} ({{key:C}}), {{ui:Greda}} ({{key:B}}), {{ui:Spreg}} ({{key:R}}), {{ui:Ploča}} ({{key:P}}), {{ui:Temelj}} ({{key:F}}) |
| Dijalog svojstava dijela (dvostruki klik na dio) | Jedan klik: panel {{ui:Svojstva}} desno uvijek je aktivan; nema dijaloga ni gumba Izmijeni ili Primijeni |
| Položaj u ravnini, zakretanje i postavke dubine | {{ui:Položaj}} (vrh čelika, sredina ili dno na liniji) i {{ui:Zakretanje (°)}}. Nema zasebnih vodoravnih pomaka |
| Katalog profila | Fiksni popis od 2,311 objavljenih veličina (AISC W, S, C, L, HSS, Pipe; europski IPE, HEA, HEB, UPN; UK UB, UC, PFC, EA, UEA, SHS, RHS, CHS i hladno oblikovani šuplji profili), plus parametarske ploče i vaši vlastiti {{ui:Prilagođeni profil}} presjeci |
| Katalog materijala | Sedam kvaliteta na popisu: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Primjena komponente spoja i njezinog dijaloga | Odaberite gredu, pa {{ui:Čeone ploče}}. Postavke se pojavljuju u panelu {{ui:Svojstva}}. Postoje samo dva spoja (čeona ploča na pojasnicu stupa, podložna ploča) |
| Automatsko spajanje ili kopiranje spoja na slične spojeve | Odaberite spoj, pa {{ui:Primijeni na slične (n)}} |
| Numeriranje s nizovima i početnim brojevima | Nema naredbe: oznake se same ažuriraju nakon svake promjene, s fiksnim prefiksima c, b, br, p i C, B, BR, P |
| Dijalozi za vijke i rupe | Rupe se upisuju po licu i položaju. Vijci dolaze samo iz spojeva |
| Alati za rezanje, uklapanje i rezanje poligonom | Izrezi (gore ili dolje, na bilo kojem kraju) samo na I profilima. Skraćivanja spojeva su automatska |
| Izvješća i predlošci | Tri fiksna izvješća u karticama pri dnu i CSV preuzimanja |
| Izrada crteža i popis crteža | Jedan radionički crtež po oznaci dijela, sve izrađeno odjednom, pregledano pa preuzeto kao jedan PDF ili list po list. Ništa se ne čuva ni uređuje |
| Izvoz NC datoteka | {{ui:NC datoteke}}: jedna DSTV datoteka po oznaci dijela, samo I profili i ploče, zapakirano |
| Izvoz IFC-a | {{ui:IFC}}: IFC4 cijelog modela, s armaturom |
| Armatura u bilo kojem betonskom dijelu | Armatura samo u pravokutnim temeljnim pločama, američke veličine šipki, s donjom mrežom i ispustima |
| Model spremljen u mapi projekta, više korisnika | Jedna `.detailcraft.json` datoteka koju preuzimate. Jedan korisnik, na vašem računalu |
| Povijest poništavanja | {{key:Mod+Z}} i {{key:Mod+Y}}, do 200 koraka, čuva se dok ne otvorite ili ne započnete drugi model |

## Razlike koje zbunjuju ljude

### Oznake se mijenjaju same od sebe

Nema koraka numeriranja. Oznake se ponovno izračunavaju nakon svake promjene, pa su uvijek aktualne, ali se mogu i prenumerirati: dodate stup i jučerašnji c3 sada može biti c4. Ne postoji „povijest numeriranja“ za čuvanje starih oznaka. Završite model, a zatim izdajte sastavnicu (BOM), NC datoteke i radioničke crteže zajedno iz jedne spremljene datoteke.

### Srednja tipka miša zumira; ne pomiče

U 3D prikazu: povlačenje lijevom tipkom okreće, povlačenje desnom pomiče, kotačić zumira, a povlačenje srednjom tipkom također zumira. Držanje {{key:Shift}} uz povlačenje lijevom tipkom također pomiče. Kotačić zumira prema sredini prikaza, a ne prema pokazivaču. Nema odabira središta rotacije: model se okreće oko sredine prikaza. Vidi [Kretanje oko 3D prikaza](topic:navigate-3d).

### Stupovi zadano gledaju u jednom smjeru

Pri zakretanju 0, pojasnice stupa gledaju duž smjera brojčane mreže. Grede koje idu između slovnih linija mrežu uklapaju u hrbat, a čeone ploče su tamo odbijene („Grede koje se uklapaju u hrbat stupa još nisu izrađene“). Zakrenite te stupove za 90° prije dodavanja spojeva.

### Pogledi samo na slovnim linijama

{{ui:Pročelje}} gleda samo duž slovnih linija mreže. Nema pogleda duž brojčanih linija, nema spremljenih pogleda i nema radnih ravnina. Za okvire na brojčanim linijama koristite {{ui:3D}} ili {{ui:Dodaj po mreži}}.

### Odabir, kopiranje i pomicanje

Odaberite više dijelova s {{key:Shift}}+klik ili {{key:Mod+A}}, zatim ih kopirajte, izrežite, zalijepite (na presjecište mreže, na upisani pomak ili na istom mjestu) ili dupliciraje, uključujući spojeve ([Kopiranje, lijepljenje i dupliciranje](topic:copy-paste)). Nema odabira prozorom, filtra odabira, pomicanja, zrcaljenja ni niza; svojstva se mijenjaju jedan štap po jedan u panelu {{ui:Svojstva}}.

### Mreže ne vuku štapove sa sobom

Štapovi zadržavaju svoje koordinate kada promijenite razmak mreže; ništa se ne pomiče s linijama mreže. Promijenite mrežu prije postavljanja čelika ili kasnije uredite krajnje koordinate svakog štapa.

### Spojevi se ne proračunavaju

Dva spoja postavljaju ploče, rupe, vijke i zavare iz brojeva koje zadate. Nema provjere proračuna bilo koje vrste, samo upozorenja o rubovima i razmacima (iz EN 1993-1-8 Tablica 3.3).

### Rupe se ne režu u 3D prikazu

Rupe se prikazuju kao tamni čepovi. To su prave rupe u NC datotekama, radioničkim crtežima i IFC datoteci. Izrezi se režu u prikazu.

### Težine su bruto

Težina čelika ne oduzima rupe ni izreze, a težina vijaka nije uključena.

### Samo milimetri

Sve se upisuje i prikazuje u milimetrima, čak i za AISC profile. Nazivi profila zadržavaju svoj objavljeni oblik (W12x50, HSS6x6x1/4).

### Nema crteža za upravljanje

Nema popisa crteža, uređivača crteža, općeg rasporeda ni sklopnih crteža. Radionički crtež nastaje kada ga zatražite i preuzima se; za promjenu, promijenite model i izradite ga ponovno.

### Radi u pregledniku

Spremanje preuzima datoteku. Tipkovnički prečaci koje preglednik zadržava za sebe ne mogu se koristiti. Vaši modeli nikada ne napuštaju vaše računalo: vidi [Kamo idu vaše datoteke](common:your-files).

## Što nastavite raditi u trenutačnom softveru

Danas DetailCraft odgovara za male okvire, provjeru ideje, podučavanje ili izradu NC datoteka i radioničkih crteža za jednostavne radove s gredama i stupovima. Složene spojeve, opće rasporede crteža, montažne crteže, višekorisničke projekte i sve što je navedeno u [Što još nije izrađeno](topic:not-built-yet) zadržite u softveru koji već koristite.
