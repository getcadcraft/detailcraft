---
title: Otvaranje, spašavanje i izvoz datoteka
summary: Datoteka modela DetailCraft, svaki izvoz koji ona zapisuje, mjesta na kojima se datoteke spašavaju i šta se razlikuje po pregledaču i vezi.
keywords: otvori, spasi, izvezi, preuzmi, datoteka, json, ifc, nc1, dstv, csv, pdf, zip, formati, uvezi
from: bd715ea3
---

DetailCraft ima jednu vlastitu datoteku, model, i pet izvoza. Svako spašavanje i svaki izvoz je preuzimanje. Ništa se ne otprema i ništa se ne čuva na serveru.

## Datoteka modela

Model DetailCraft-a se spašava kao `<name>.detailcraft.json`, gdje je `<name>` naziv modela u panelu {{ui:Model}}. Sadrži mreže, nivoe, elemente (s njihovim rupama i izrezima), veze i njihove postavke, temelje i vaše prilagođene profile.

Dijelovi, oznake, vijci, zavari i šipke se ne spremaju: DetailCraft ih ponovo izračunava iz modela svaki put kad se model otvori. Zato je datoteka modela mala.

### Spasi

1. Upišite naziv u polje {{ui:Naziv}} na vrhu panela {{ui:Model}}.
2. Odaberite {{ui:Spasi}} u grupi {{ui:Datoteka}}, ili pritisnite {{key:Mod+S}}.
3. Pregledač preuzima `<name>.detailcraft.json`. Statusna traka piše "Spašeno … (preuzeto)", a tačka na početku naslova kartice pregledača nestaje.

Svako spašavanje je novo preuzimanje. Pregledač ne prepisuje datoteku koju ste otvorili; zavisno od postavki, dodaje broj u naziv, kao `Frame (1).detailcraft.json`, ili pita gdje da je spasi. Vlastite verzije čuvajte preimenovanjem preuzetih datoteka.

:::chromium
Chrome i Edge spašavaju u vaš folder Preuzimanja, osim ako je uključeno **Pitaj gdje da spasi svaku datoteku prije preuzimanja** u postavkama preuzimanja pregledača. Uključite to ako želite svaki put izabrati folder i naziv datoteke.
:::

:::firefox
Firefox spašava u folder Preuzimanja, ili pita svaki put ako je uključeno **Uvijek pitaj gdje da spasim datoteke** u njegovim postavkama.
:::

:::safari
Safari spašava u folder Preuzimanja. Da promijenite folder, otvorite **Safari, Postavke, Opšte, Lokacija za preuzimanje datoteka**.
:::

### Otvori

1. Odaberite {{ui:Otvori}} u grupi {{ui:Datoteka}}, ili pritisnite {{key:Mod+O}}.
2. Izaberite datoteku `.detailcraft.json`.

Ili prevucite datoteku iz {{pick:mac=Finder|windows=File Explorer|linux=upravitelja datoteka}} i ispustite je na prikaz. Prikaz piše "Ispustite DetailCraft model da ga otvorite" dok prevlačite.

Ako otvoreni model ima nespašene promjene, DetailCraft prvo pita: {{ui:Otkaži}}, {{ui:Odbaci promjene}} ili {{ui:Prvo spasi}}.

DetailCraft provjerava svako polje datoteke prije nego ga upotrijebi. Ono što ne može upotrijebiti se izostavi, a statusna traka kaže šta, na primjer "2 elementa nisu valjana i izostavljena su." Model spašen novijom verzijom DetailCraft-a se odbija uz poruku, umjesto da se otvori polovično ispravno.

### Šta se otvara

Vlastite datoteke modela (`.json`, do 50 MB) i IFC datoteke (`.ifc`, IFC2X3 ili IFC4, do 200 MB). IFC datoteka, otvorena ili uvezena s {{ui:Uvezi IFC}}, postaje novi model svojih greda, stubova, elemenata, limova, mreža i nivoa, sa rupama i izrezima u njima i vijcima kao slobodnim vijcima; izvještaj kaže šta je izostavljeno. Vidi [Izvoz IFC](topic:ifc-export#import). DWG, DXF ili model nekog drugog programa za detaljisanje se još ne otvara; pokušaj prikazuje "DetailCraft otvara vlastite modele (.detailcraft.json) i IFC datoteke (.ifc)."

## Izgubljeni rad, nedavne datoteke, desktop aplikacija

- Dok model ima promjene koje niste spasili, DetailCraft čuva kopiju u ovom pregledaču. Ako se kartica ili pregledač zaustave prije nego spasite, pri sljedećem otvaranju DetailCraft pita **Oporaviti vaš rad?**: oporavite kopiju ili je odbacite. Vidi [Oporavak vašeg rada](common:recover).
- Modeli koje ste nedavno otvorili navedeni su na početnom ekranu kada pregledač dopušta DetailCraft-u da ih ponovo otvori; kliknite jedan da ga ponovo otvorite.
- U desktop aplikaciji, {{ui:Spasi}} upisuje model nazad u datoteku koju ste otvorili (u pregledaču preuzima kopiju), a dvostruki klik na DetailCraft model ili IFC datoteku otvara je u DetailCraft-u.

## Izvozi

Svi izvozi koriste naziv modela. Birajte ih u grupi {{ui:Izlaz}}.

| Dugme | Datoteka | Šta je u njoj |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: spratovi, mreže, svaki čelični dio kao profilna ekstruzija s rupama i izrezima, sklopovi, vijci i sidrene šipke, temelji i svaka šipka. Vidi [Izvoz IFC](topic:ifc-export). |
| {{ui:NC datoteke}} | `<name> NC.zip` | Jedna DSTV `.nc1` datoteka po oznaci dijela. Vidi [Slanje NC datoteka u radionicu](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Tri tabele u jednoj datoteci: dijelovi, sklopovi, te vijci i sidrene šipke. Vidi [Oznake i spisak materijala](topic:marks-and-bom). |
| {{ui:Savijanje}} | `<name> bending schedule.csv` | Svaka oznaka šipke u temeljima. Vidi [Temelji i armatura](topic:footings-and-rebar). |
| {{ui:Radionički crtež}} | `<name> <mark>.pdf` | Jedan list (A3 osim ako izaberete drugu veličinu) za izabrani dio (I-profili i limovi). Vidi [Izrada radioničkog crteža](topic:shop-drawings). |
| {{ui:Crteži}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` ili `.dxf`, više njih u `<name> drawings DWG.zip` (ili `DXF.zip`) | Osnove, izgledi i sklopni crteži na veličini lista koju ste izabrali; DWG i DXF u punoj veličini, 1 jedinica = 1 mm na papiru. Vidi [Opšti raspored i sklopni crteži](topic:drawings). |

### Napomene o CSV datotekama

- Počinju oznakom redoslijeda bajtova da tabelarni programi ispravno čitaju slova s dijakritikom.
- Ćelija koja počinje s `=`, `+`, `-` ili `@` (a nije običan broj) dobija vodeći apostrof, pa je tabelarni program nikada ne izvršava kao formulu.
- Dužine su u milimetrima, a težine u kilogramima.

### Napomene o PDF-u

Tekst u PDF-u koristi standardni font Helvetica. Znakovi koje on nema (van skupa zapadnoevropskih) ispisuju se kao "?", a statusna traka kaže koliko ih je.

## Jedinice

DetailCraft radi u milimetrima u cijelosti: mreže, nivoi, koordinate, profili, rupe i svaki izvoz. Nazivi profila zadržavaju svoj objavljeni oblik (W12x50 je američka oznaka, iako su dimenzije prikazane u mm). Unos u inčima još nije dostupan.

## Online i offline

Otvaranje, spašavanje i izvoz se odvijaju u vašem pregledaču, pa rade jednako s vezom ili bez nje, kad se DetailCraft jednom učita.

Da biste kasnije koristili DetailCraft bez veze, dok ste na mreži izaberite {{ui:Spasi za rad van mreže}} u traci aplikacije. Dugme broji ("Spašavam 3 od 20") i zatim piše {{ui:Spremno za rad van mreže}}. Spašena kopija uključuje biblioteku 3D grafike (oko 2,6 MB) i ovu pomoć, pa kad je jednom spašena, 3D prikaz, svi izvozi i pomoć rade bez veze. Detalji i šta i dalje traži vezu: [Rad van mreže](common:offline).

:::offline
Niste na mreži. Ako traka aplikacije pokazuje {{ui:Spremno za rad van mreže}}, otvaranje, spašavanje i izvoz rade kao obično. Ako ne pokazuje, ostavite ovu karticu otvorenom, ne osvježavajte je dok ne budete ponovo na mreži i odmah spasite model.
:::

Spremanje u oblak još nije dostupno, a desktop verzije još nisu izašle. Napravite rezervnu kopiju svojih `.detailcraft.json` datoteka kao što pravite rezervnu kopiju bilo koje druge radne datoteke. Više u [Gdje idu vaše datoteke](common:your-files).

## Nespašeni rad

DetailCraft čuva model samo u otvorenoj kartici. Ako zatvorite ili osvježite karticu s nespašenim promjenama, pregledač pita želite li napustiti stranicu; tekst te poruke je pregledačev. Spašavajte s {{key:Mod+S}} često.
