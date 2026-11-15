---
title: Otvaranje, spremanje i izvoz datoteka
summary: Datoteka modela DetailCraft, svaki izvoz koji ona stvara, mjesta na kojima se datoteke spremaju i razlike među preglednicima i vezama.
keywords: otvori, spremi, izvoz, preuzmi, datoteka, json, ifc, nc1, dstv, csv, pdf, zip, formati, uvoz
from: 6fbc8e8f
---

DetailCraft ima jednu vlastitu datoteku, model, i pet izvoza. Svako spremanje i svaki izvoz preuzimaju se kao datoteka. Ništa se ne učitava i ništa se ne čuva na poslužitelju.

## Datoteka modela

Model DetailCraft sprema se kao `<name>.detailcraft.json`, pri čemu je `<name>` naziv modela u panelu {{ui:Model}}. Sadrži mreže, razine, štapove (s njihovim provrtima i izrezima), spojeve i njihove postavke, temelje i vaše prilagođene profile.

Dijelovi, oznake, vijci, zavari i šipke nisu pohranjeni: DetailCraft ih ponovno izračunava iz modela svaki put kad se otvori. Zato je datoteka modela mala.

### Spremanje

1. Upišite naziv u polje {{ui:Naziv}} na vrhu panela {{ui:Model}}.
2. Odaberite {{ui:Spremi}} u grupi {{ui:Datoteka}} ili pritisnite {{key:Mod+S}}.
3. Preglednik preuzima `<name>.detailcraft.json`. Statusna traka kaže „Spremljeno … (preuzeto)”, a točka na početku naslova kartice preglednika nestaje.

Svako spremanje je novo preuzimanje. Preglednik ne prepisuje datoteku koju ste otvorili; ovisno o postavkama, dodaje broj uz naziv, primjerice `Frame (1).detailcraft.json`, ili pita gdje da je spremi. Vlastite verzije zadržite preimenovanjem preuzetih datoteka.

:::chromium
Chrome i Edge spremaju u mapu Preuzimanja, osim ako je u postavkama preuzimanja preglednika uključeno **Pitaj gdje spremiti svaku datoteku prije preuzimanja**. Uključite to ako želite svaki put odabrati mapu i naziv datoteke.
:::

:::firefox
Firefox sprema u mapu Preuzimanja ili pita svaki put ako je u njegovim postavkama uključeno **Uvijek pitaj gdje spremiti datoteke**.
:::

:::safari
Safari sprema u mapu Preuzimanja. Za promjenu mape otvorite **Safari, Postavke, Općenito, Mjesto preuzimanja datoteka**.
:::

### Otvaranje

1. Odaberite {{ui:Otvori}} u grupi {{ui:Datoteka}} ili pritisnite {{key:Mod+O}}.
2. Odaberite datoteku `.detailcraft.json`.

Ili povucite datoteku iz {{pick:mac=Finder|windows=File Explorer|linux=vašeg upravitelja datotekama}} i ispustite je na prikaz. Dok je povlačite, prikaz kaže „Ispustite model DetailCraft da ga otvorite”.

Ako otvoreni model ima nespremljene promjene, DetailCraft prvo pita: {{ui:Odustani}}, {{ui:Odbaci promjene}} ili {{ui:Prvo spremi}}.

DetailCraft provjerava svako polje datoteke prije upotrebe. Što ne može upotrijebiti, izostavlja se, a statusna traka kaže što je to, primjerice „2 štapa nisu valjana i izostavljena su.” Model spremljen novijim DetailCraftom odbija se uz poruku, umjesto da se otvori polovično ispravno.

### Što se otvara

Vlastite datoteke modela (`.json`, do 50 MB) i IFC datoteke (`.ifc`, IFC2X3 ili IFC4, do 200 MB). IFC datoteka, otvorena ili uvezena naredbom {{ui:Uvezi IFC}}, postaje novi model njezinih greda, stupova, štapova, ploča, mreža i razina, s provrtima i izrezima te vijcima kao slobodnim vijcima; izvješće navodi što je izostavljeno. Vidi [Izvoz IFC-a](topic:ifc-export#import). Ne otvara DWG, DXF ni modele nekog drugog programa za detaljiranje; pokušaj prikazuje poruku „DetailCraft otvara vlastite modele (.detailcraft.json) i IFC datoteke (.ifc).”

## Izgubljeni rad, nedavne datoteke, desktop aplikacija

- Dok model ima promjene koje niste spremili, DetailCraft čuva kopiju u ovom pregledniku. Ako se kartica ili preglednik zaustave prije spremanja, sljedeći put kad otvorite DetailCraft pita **Oporavite svoj rad?**: oporavite kopiju ili je odbacite. Vidi [Oporavak rada](common:recover).
- Modeli koje ste nedavno otvarali navedeni su na početnom zaslonu kad preglednik dopušta DetailCraftu da ih ponovno otvori; kliknite jedan da ga ponovno otvorite.
- U desktop aplikaciji {{ui:Spremi}} zapisuje model natrag u datoteku koju ste otvorili (u pregledniku preuzima kopiju), a dvostruki klik na model DetailCraft ili IFC datoteku otvara je u DetailCraftu.

## Izvozi

Svi izvozi koriste naziv modela. Odaberite ih u grupi {{ui:Izlaz}}.

| Gumb | Datoteka | Sadržaj |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: etaže, mreže, svaki čelični dio kao ekstruzija profila s njegovim provrtima i izrezima, sklopovi, vijci i sidreni vijci, temelji i svaka šipka. Vidi [Izvoz IFC-a](topic:ifc-export). |
| {{ui:NC datoteke}} | `<name> NC.zip` | Jedna DSTV `.nc1` datoteka po oznaci dijela. Vidi [Slanje NC datoteka u radionicu](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Tri tablice u jednoj datoteci: dijelovi, sklopovi, te vijci i sidreni vijci. Vidi [Oznake i sastavnica](topic:marks-and-bom). |
| {{ui:Savijanje}} | `<name> bending schedule.csv` | Svaka oznaka šipke u temeljima. Vidi [Temelji i armatura](topic:footings-and-rebar). |
| {{ui:Radionički crtež}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` sadrži list po oznaci dijela; {{ui:Preuzmi PDF}} daje prikazani (A3, osim ako ste odabrali drugu veličinu). Vidi [Izrada radioničkih crteža](topic:shop-drawings). |
| {{ui:Crteži}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` ili `.dxf`, više njih u `<name> drawings DWG.zip` (ili `DXF.zip`) | Tlocrti, pročelja i crteži sklopova na veličini lista koju ste odabrali; DWG i DXF u punoj veličini, 1 jedinica = 1 mm na papiru. Vidi [Opći raspored i crteži sklopova](topic:drawings). |

### Napomene o CSV datotekama

- Počinju oznakom redoslijeda bajtova, pa programi za tablice ispravno čitaju znakove s dijakritikom.
- Ćelija koja počinje znakom `=`, `+`, `-` ili `@` (a nije običan broj) dobiva vodeći apostrof, pa je tablični program nikad ne izvršava kao formulu.
- Duljine su u milimetrima, a mase u kilogramima.

### Napomene o PDF-u

Tekst u PDF-u koristi standardni font Helvetica. Znakovi koje nema (izvan skupa zapadnoeuropskih znakova) ispisuju se kao „?”, a statusna traka kaže koliko ih je.

## Jedinice

DetailCraft radi u milimetrima u cijelom programu: mreže, razine, koordinate, profili, provrti i svaki izvoz. Nazivi profila zadržavaju svoj objavljeni oblik (W12x50 je američka oznaka, iako su dimenzije prikazane u mm). Unos u palcima još nije podržan.

## Online i offline

Otvaranje, spremanje i izvoz odvijaju se u vašem pregledniku, pa rade jednako s vezom ili bez nje, nakon što se DetailCraft učita.

Da biste kasnije koristili DetailCraft bez veze, dok ste na mreži odaberite {{ui:Spremi za offline}} u traci aplikacije. Gumb broji („Spremanje 3 od 20”), a zatim pokazuje {{ui:Spremno za offline}}. Spremljena kopija uključuje biblioteku 3D grafike (oko 2.6 MB) i ovu pomoć, pa nakon spremanja rade 3D prikaz, svi izvozi i pomoć bez veze. Pojedinosti i što i dalje traži vezu: [Rad offline](common:offline).

:::offline
Niste na mreži. Ako traka aplikacije pokazuje {{ui:Spremno za offline}}, otvaranje, spremanje i izvoz rade kao i obično. Ako ne pokazuje, ostavite ovu karticu otvorenom, nemojte je ponovno učitavati dok se ne vratite na mrežu i odmah spremite model.
:::

Spremanje u oblak još nije dostupno, a desktop verzija još ne postoji. Sigurnosno kopirajte datoteke `.detailcraft.json` kao i bilo koju drugu radnu datoteku. Više u [Gdje se čuvaju vaše datoteke](common:your-files).

## Nespremljeni rad

DetailCraft čuva model samo u otvorenoj kartici. Ako zatvorite ili ponovno učitate karticu s nespremljenim promjenama, preglednik pita želite li napustiti stranicu; njegov tekst je preglednikov. Često spremajte pomoću {{key:Mod+S}}.
