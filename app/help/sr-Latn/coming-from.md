---
title: Dolaziš iz drugog softvera za detaljisanje
summary: Kako navike punog paketa za detaljisanje odgovaraju DetailCraft-u i razlike zbog kojih iskusni detaljeri greše.
keywords: prelazak, prenos, poznato, tok rada, poređenje, razlike, numeracija, komponente, katalog, crteži, navike
from: 39639a5d
---

Ako detaljišeš u Tekla Structures, većina DetailCraft-a će ti biti poznata: mreže, nivoi, profili iz kataloga, delovi i sklopovi, veze, numeracija, NC datoteke, IFC. Razmera je veoma različita: Tekla Structures je pun proizvodni sistem, a DetailCraft je mala, rana aplikacija u pregledaču koja radi nekoliko poslova od početka do kraja. Ova stranica pokazuje gde tvoje navike ostaju, a gde ne.

:::tip
Ako ti ruke znaju traku Tekla Structures, izaberi stil menija {{ui:Čelična traka}} u {{ui:Podešavanja}} › {{ui:DetailCraft}} › {{ui:Meniji, tasteri i miš}}: kartice Modeliranje, Detaljisanje, Izmena, Crteži, Izrada i Prikaz, a srednje dugme pomera pogled. Ako dolaziš iz AutoCAD-a i voliš da kucaš komande, {{ui:Klasični nacrt}} dodaje komandnu liniju (BEAM, COLUMN, ENDPLATE, ZOOM …). Vidi [Meniji, tasteri i miš](topic:menus-keys-and-mouse).
:::

## Brza mapa

| Navikao si se na | U DetailCraft-u |
|---|---|
| Pravljenje mreža sa koordinatama u dijalogu mreže | {{ui:Mreže}} u levom panelu: oznake i razmaci između linija, a ne apsolutne koordinate. Brojčane linije idu jednim pravcem, slovne drugim |
| Nivoi kao Z koordinate mreže | Poseban spisak {{ui:Nivoi}}, naziv i kota po redu, primenjen sa {{ui:Primeni nivoe}} |
| Biranje tačaka bilo gde sa hvatanjem | Klikovi se hvataju samo na preseke mreže. Tačke van mreže se unose u {{ui:Krajevi (x, y, z mm)}} elementa |
| Komande za stub, gredu i lim | {{ui:Stub}} ({{key:C}}), {{ui:Greda}} ({{key:B}}), {{ui:Dijagonala}} ({{key:R}}), {{ui:Lim}} ({{key:P}}), {{ui:Temelj}} ({{key:F}}) |
| Dijalog sa svojstvima dela (dvostruki klik na deo) | Jedan klik: panel {{ui:Svojstva}} desno je uvek aktivan; nema dijaloga i nema dugmeta Izmeni ili Primeni |
| Položaj u ravni, obrtanje i podešavanja dubine | {{ui:Položaj}} (vrh čelika, centrirano ili dno na liniji) i {{ui:Rotation (°)}}. Nema zasebnih horizontalnih pomeranja |
| Katalog profila | Fiksna lista od 2,311 objavljenih dimenzija (AISC W, S, C, L, HSS, Pipe; evropski IPE, HEA, HEB, UPN; UK UB, UC, PFC, EA, UEA, SHS, RHS, CHS i hladno oblikovani šuplji preseci), plus parametarski limovi i tvoji {{ui:Prilagođeni profil}} preseci |
| Katalog materijala | Sedam klasa na listi: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Primena komponente veze i njen dijalog | Izaberi gredu, izaberi {{ui:Krajnji limovi}}. Podešavanja se pojavljuju u panelu {{ui:Svojstva}}. Postoje samo dve veze (krajnji lim na pojasnicu stuba, bazni lim) |
| Automatska veza ili kopiranje spoja na slične spojeve | Izaberi vezu, izaberi {{ui:Primeni na slične (n)}} |
| Numerisanje sa serijama i početnim brojevima | Nema komande: oznake se osveže same posle svake promene, sa fiksnim prefiksima c, b, br, p i C, B, BR, P |
| Dijalozi za zavrtnje i rupe | Rupe se unose po licu i položaju. Zavrtnji dolaze samo iz veza |
| Alati za sečenje, uklapanje i višeugaono sečenje | Izrezi (gore ili dole, na bilo kom kraju) samo na I-profilima. Skraćenja zbog veza su automatska |
| Izveštaji i šabloni | Tri fiksna izveštaja u karticama pri dnu i preuzimanje CSV-a |
| Izrada crteža i lista crteža | Jedan radionički crtež po oznaci dela, sve napravljeno odjednom, pregledano pa preuzeto kao jedan PDF ili list po list. Ništa se ne čuva niti menja |
| Izvoz NC datoteka | {{ui:NC datoteke}}: jedna DSTV datoteka po oznaci dela, samo I-profili i limovi, spakovano u zip |
| Izvoz IFC-a | {{ui:IFC}}: IFC4 celog modela, sa armaturom |
| Armatura u bilo kom betonskom delu | Armatura samo u pravougaonim temeljnim stopama, američke veličine šipki, sa donjom mrežom i početnim šipkama |
| Model sačuvan u fascikli projekta, više korisnika | Jedna datoteka `.detailcraft.json` koju preuzimaš. Jedan korisnik, na tvom računaru |
| Istorija opoziva | {{key:Mod+Z}} i {{key:Mod+Y}}, do 200 koraka, čuva se dok ne otvoriš ili ne započneš drugi model |

## Razlike zbog kojih ljudi greše

### Oznake se menjaju same od sebe

Nema koraka numerisanja. Oznake se preračunavaju posle svake promene, pa su uvek tačne, ali se mogu i prenumerisati: dodaš stub, i c3 od juče sada može biti c4. Nema „istorije numerisanja“ koja čuva stare oznake. Završi model, pa tek onda izdaj BOM, NC datoteke i radioničke crteže zajedno iz jedne sačuvane datoteke.

### Srednje dugme miša uvećava; ne pomera

U 3D prikazu: levi prevlak okreće, desni prevlak pomera, točkić uvećava, a prevlak srednjim dugmetom takođe uvećava. Držanje {{key:Shift}} uz levi prevlak takođe pomera. Točkić uvećava prema sredini prikaza, a ne prema pokazivaču. Nema biranja centra rotacije: model se okreće oko sredine prikaza. Vidi [Kretanje po 3D prikazu](topic:navigate-3d).

### Stubovi po podrazumevanju gledaju na jednu stranu

Na obrtanju 0 pojasnice stuba gledaju duž pravca brojčanih mreža. Grede koje idu između slovnih linija uklapaju se u rebro, a krajnji limovi tamo se odbijaju („Grede koje se uklapaju u rebro stuba još nisu urađene“). Okreni te stubove za 90° pre dodavanja veza.

### Izgledi samo na slovnim linijama

{{ui:Izgled}} gleda samo duž slovnih linija mreže. Nema pogleda duž brojčanih linija, nema sačuvanih pogleda i nema radnih ravni. Koristi {{ui:3D}} ili {{ui:Dodaj prema mreži}} za okvire na brojčanim linijama.

### Izbor, kopiranje i pomeranje

Izaberi više delova sa {{key:Shift}}+klik ili {{key:Mod+A}}, pa ih kopiraj, iseci, nalepi (na preseku mreže, na otkucanom pomaku ili na mestu) i dupliraj, zajedno sa vezama ([Kopiranje, lepljenje i dupliranje](topic:copy-paste)). Nema izbora prozorom, nema filtera izbora, nema pomeranja, ogledanja ili niza, a svojstva se menjaju jedan deo po jedan u panelu {{ui:Svojstva}}.

### Mreže ne vuku elemente sa sobom

Elementi zadržavaju svoje koordinate kada promeniš razmak mreže; ništa se ne pomera sa linijama mreže. Promeni mrežu pre postavljanja čelika ili kasnije ručno izmeni koordinate krajeva svakog elementa.

### Veze se ne projektuju

Dve veze postavljaju limove, rupe, zavrtnje i varove iz brojeva koje daš. Nema provere projekta bilo koje vrste, samo upozorenja o ivici i razmaku (iz EN 1993-1-8 Tabela 3.3).

### Rupe se ne seku u 3D prikazu

Rupe se prikazuju kao tamni čepovi. Prave su rupe u NC datotekama, radioničkim crtežima i IFC datoteci. Izrezi se seku u prikazu.

### Težine su bruto

Težina čelika ne oduzima rupe ni izreze, a težina zavrtnjeva nije uključena.

### Samo milimetri

Sve se unosi i prikazuje u milimetrima, čak i za AISC oblike. Nazivi profila zadržavaju objavljeni oblik (W12x50, HSS6x6x1/4).

### Nema crteža za upravljanje

Nema liste crteža, nema urednika crteža, nema opštih rasporeda ni sklopnih crteža. Radionički crtež se pravi kada ga zatražiš i preuzima se; da ga promeniš, promeni model i napravi ga ponovo.

### Radi u pregledaču

Čuvanje preuzima datoteku. Prečice koje pregledač zadržava za sebe ne mogu da se koriste. Tvoji modeli nikad ne napuštaju tvoj računar: vidi [Gde idu tvoje datoteke](common:your-files).

## Šta i dalje radi u softveru koji koristiš

Danas DetailCraft odgovara malim okvirima, proveri ideje, nastavi i proizvodnji NC datoteka i radioničkih crteža za jednostavne grede i stubove. Složene veze, opšte crteže rasporeda, montažne crteže, projekte sa više korisnika i sve što je navedeno u [Šta još nije urađeno](topic:not-built-yet) zadrži u softveru koji sada koristiš.
