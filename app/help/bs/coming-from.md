---
title: Dolazak iz drugog softvera za detaljisanje
summary: Kako navike punog paketa za detaljisanje odgovaraju DetailCraft-u i razlike zbog kojih iskusni detaljeri pogriješe.
keywords: prelazak, migracija, poznato, tok rada, poređenje, razlike, numerisanje, komponente, katalog, crteži, navike
from: 39639a5d
---

Ako detaljišete u Tekla Structures, većina DetailCraft-a će vam izgledati poznato: mreže, nivoi, profili iz kataloga, dijelovi i sklopovi, spojevi, numerisanje, NC datoteke, IFC. Razmjera je veoma različita: Tekla Structures je potpun proizvodni sistem, a DetailCraft je mala, rana aplikacija u pretraživaču koja radi nekoliko poslova od početka do kraja. Ova stranica pokazuje gdje se vaše navike prenose, a gdje ne.

:::tip
Ako vaše ruke poznaju traku Tekla Structures, izaberi stil menija {{ui:Čelična traka}} u {{ui:Postavke}} › {{ui:DetailCraft}} › {{ui:Meniji, tipke i miš}}: kartice Modeliranje, Detaljisanje, Uređivanje, Crteži, Izrada i Pogled, a srednje dugme pomjera pogled. Ako dolazite iz AutoCAD-a i volite da kucate naredbe, {{ui:Klasični nacrt}} dodaje komandnu liniju (BEAM, COLUMN, ENDPLATE, ZOOM …). Vidi [Meniji, tipke i miš](topic:menus-keys-and-mouse).
:::

## Brza mapa

| Navikli ste na | U DetailCraft-u |
|---|---|
| Pravljenje mreža sa koordinatama u dijaloškom okviru | {{ui:Mreže}} u lijevom panelu: oznake i razmaci između linija, a ne apsolutne koordinate. Numerisane linije idu jednim smjerom, slovne drugim |
| Nivoi kao Z koordinate mreže | Poseban spisak {{ui:Nivoi}}, naziv i kota po redu, primijenjen sa {{ui:Primijeni nivoe}} |
| Biranje tačaka bilo gdje sa hvatanjem | Klikovi se hvataju samo za presjeke mreže. Tačke van mreže se unose u {{ui:Krajevi (x, y, z mm)}} elementa |
| Naredbe za stub, gredu i ploču | {{ui:Stub}} ({{key:C}}), {{ui:Greda}} ({{key:B}}), {{ui:Dijagonala}} ({{key:R}}), {{ui:Lim}} ({{key:P}}), {{ui:Temelj}} ({{key:F}}) |
| Dijaloški okvir sa svojstvima dijela (dupli klik na dio) | Jedan klik: panel {{ui:Svojstva}} desno je uvijek aktivan; nema dijaloga i nema dugmeta Izmijeni ili Primijeni |
| Položaj u ravni, rotacija i postavke dubine | {{ui:Položaj}} (vrh čelika, centrirano ili dno na liniji) i {{ui:Rotacija (°)}}. Nema odvojenih horizontalnih pomjeraja |
| Katalog profila | Fiksni spisak od 2.311 objavljenih dimenzija (AISC W, S, C, L, HSS, Pipe; evropski IPE, HEA, HEB, UPN; britanski UB, UC, PFC, EA, UEA, SHS, RHS, CHS i hladno oblikovani šuplji profili), plus parametarske ploče i vaši {{ui:Prilagođeni profil}} presjeci |
| Katalog materijala | Sedam razreda na spisku: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Primjena komponente spoja i njen dijalog | Odaberi gredu, odaberi {{ui:Čeone ploče}}. Postavke se pojavljuju u panelu {{ui:Svojstva}}. Postoje samo dva spoja (čeona ploča na prirubnicu stuba, temeljna ploča) |
| Automatsko povezivanje ili kopiranje spoja na slične spojeve | Odaberi vezu, odaberi {{ui:Primijeni na slične (n)}} |
| Numerisanje sa serijama i početnim brojevima | Nema naredbe: oznake se ažuriraju same nakon svake promjene, sa fiksnim prefiksima c, b, br, p i C, B, BR, P |
| Dijalozi za vijke i rupe | Rupe se unose po licu i položaju. Vijci dolaze samo iz spojeva |
| Alati za odsijecanje, uklapanje i odsijecanje mnogouglom | Useci (gore ili dolje, na bilo kom kraju) samo na I-profilima. Odsijecanja spojeva su automatska |
| Izvještaji i šabloni | Tri fiksna izvještaja u karticama na dnu i CSV preuzimanja |
| Izrada crteža i spisak crteža | Jedan radionički crtež po oznaci dijela, svi napravljeni odjednom, prikazani pa preuzeti kao jedan PDF ili list po list. Ništa se ne čuva niti uređuje |
| Izvoz NC datoteka | {{ui:NC datoteke}}: jedna DSTV datoteka po oznaci dijela, samo I-profili i ploče, zapakovano |
| Izvoz IFC-a | {{ui:IFC}}: IFC4 cijelog modela, sa armaturom |
| Armatura u bilo kom betonskom dijelu | Armatura samo u pravougaonim temeljima, američke veličine šipki, sa donjom mrežom i čekajućim šipkama |
| Model sačuvan u projektnoj fascikli, više korisnika | Jedna datoteka `.detailcraft.json` koju preuzmete. Jedan korisnik, na vašem računaru |
| Historija poništavanja | {{key:Mod+Z}} i {{key:Mod+Y}}, do 200 koraka, čuva se dok ne otvorite ili ne počnete drugi model |

## Razlike zbog kojih ljudi griješe

### Oznake se mijenjaju same

Nema koraka numerisanja. Oznake se ponovo računaju nakon svake promjene, pa su uvijek tačne, ali se mogu i prenumerisati: dodate stub i jučerašnji c3 sada može biti c4. Nema "historije numerisanja" koja čuva stare oznake. Završite model, pa onda izdajte spisak materijala (BOM), NC datoteke i radioničke crteže zajedno iz jedne sačuvane datoteke.

### Srednji taster miša zumira; ne pomjera pogled

U 3D pogledu: prevlačenje lijevim tasterom okreće, desnim pomjera, točkić zumira, a prevlačenje srednjim tasterom također zumira. Držanje {{key:Shift}} uz prevlačenje lijevim također pomjera. Točkić zumira prema sredini pogleda, a ne prema pokazivaču. Nema izbora centra rotacije: model se okreće oko sredine pogleda. Vidi [Kretanje po 3D pogledu](topic:navigate-3d).

### Stubovi po zadanom gledaju u jednom smjeru

Na rotaciji 0 pojasnice stuba gledaju duž smjera numerisanih mreža. Grede koje idu između slovnih linija mreže ulaze u rebro, a čeone ploče su tu odbijene ("Grede koje ulaze u rebro stuba još nisu urađene"). Zarotiraj te stubove za 90° prije dodavanja spojeva.

### Pogledi samo na slovnim linijama

{{ui:Izgled}} gleda samo duž slovnih linija mreže. Nema pogleda duž numerisanih linija, nema sačuvanih pogleda i nema radnih ravni. Koristi {{ui:3D}} ili {{ui:Dodaj po mreži}} za okvire na numerisanim linijama.

### Izbor, kopiranje i pomjeranje

Izaberi više dijelova sa {{key:Shift}}+klik ili {{key:Mod+A}}, zatim kopiraj, isijeci, zalijepi (na presjeku mreže, na upisani pomak ili na istom mjestu) i dupliraj, uključujući spojeve ([Kopiranje, lijepljenje i dupliranje](topic:copy-paste)). Nema izbora prozorom, nema filtera izbora, nema pomjeranja, zrcaljenja ili niza, a svojstva se mijenjaju jedan po jedan element u panelu {{ui:Svojstva}}.

### Mreže ne vuku elemente sa sobom

Elementi zadržavaju svoje koordinate kada promijenite razmak mreže; ništa se ne pomjera sa linijama mreže. Promijenite mrežu prije postavljanja čelika ili kasnije uredite krajnje koordinate svakog elementa.

### Spojevi se ne proračunavaju

Dva spoja postavljaju ploče, rupe, vijke i zavare iz brojeva koje date. Nema nikakve provjere proračuna, samo upozorenja o ivicama i razmacima (iz EN 1993-1-8 tabela 3.3).

### Rupe se ne urezuju u 3D pogledu

Rupe se prikazuju kao tamni čepovi. Prave su rupe u NC datotekama, radioničkim crtežima i IFC datoteci. Useci se urezuju u pogledu.

### Težine su bruto

Težina čelika ne oduzima rupe ni useke, a težina vijaka nije uključena.

### Samo milimetri

Sve se unosi i prikazuje u milimetrima, čak i za AISC oblike. Nazivi profila zadržavaju objavljeni oblik (W12x50, HSS6x6x1/4).

### Nema crteža za upravljanje

Nema spiska crteža, uređivača crteža, općeg rasporeda ili crteža sklopa. Radionički crtež se pravi kada ga zatražite i preuzima se; da ga promijenite, promijenite model i ponovo ga napravite.

### Radi u pretraživaču

Čuvanje preuzima datoteku. Prečice koje pretraživač zadržava za sebe ne mogu se koristiti. Vaši modeli nikada ne napuštaju vaš računar: vidi [Kuda idu vaše datoteke](common:your-files).

## Šta i dalje raditi u trenutnom softveru

Danas je DetailCraft pogodan za male okvire, provjeru ideja, nastavu, ili pravljenje NC datoteka i radioničkih crteža za jednostavne grede i stubove. Složene spojeve, opšte rasporede, montažne crteže, projekte sa više korisnika i sve što je navedeno u [Šta još nije urađeno](topic:not-built-yet) zadržite u softveru koji već koristite.
