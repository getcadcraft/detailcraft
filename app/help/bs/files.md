---
title: Otvaranje, spašavanje i izvoz datoteka
summary: Datoteka modela DetailCraft, svaki izvoz koji ona piše, gdje datoteke završavaju i šta se razlikuje po pregledniku i vezi.
keywords: otvori, spasi, izvoz, preuzimanje, datoteka, json, ifc, nc1, dstv, csv, pdf, zip, formati, uvoz
from: 6fbc8e8f
---

DetailCraft ima jednu svoju datoteku, model, i pet izvoza. Svako spašavanje i svaki izvoz je preuzimanje. Ništa se ne prenosi i ništa se ne čuva na serveru.

## Datoteka modela

Model DetailCraft se spašava kao `<name>.detailcraft.json`, gdje je `<name>` naziv modela u panelu {{ui:Model}}. Sadrži mreže, nivoe, elemente (sa njihovim rupama i izrezima), veze i njihove postavke, temelje i vaše prilagođene profile.

Dijelovi, oznake, vijci, zavari i šipke se ne spašavaju: DetailCraft ih ponovo izračunava iz modela svaki put kad se otvori. Zato je datoteka modela mala.

### Spasi

1. Upišite naziv u polje {{ui:Naziv}} na vrhu panela {{ui:Model}}.
2. Odaberite {{ui:Spasi}} u grupi {{ui:Datoteka}} ili pritisnite {{key:Mod+S}}.
3. Preglednik preuzima `<name>.detailcraft.json`. Statusna traka kaže "Spašeno … (preuzeto)", a tačka na početku naslova kartice preglednika nestaje.

Svako spašavanje je novo preuzimanje. Preglednik ne prepisuje datoteku koju ste otvorili; zavisno od svojih postavki dodaje broj na naziv, na primjer `Frame (1).detailcraft.json`, ili pita gdje da spasi. Vlastite verzije čuvajte preimenovanjem preuzetih datoteka.

:::chromium
Chrome i Edge spašavaju u vaš folder Preuzimanja, osim ako je uključena opcija **Pitaj gdje da spasi svaku datoteku prije preuzimanja** u postavkama preuzimanja preglednika. Uključite je ako želite svaki put izabrati folder i naziv datoteke.
:::

:::firefox
Firefox spašava u vaš folder Preuzimanja, ili pita svaki put ako je u njegovim postavkama uključena opcija **Uvijek pitaj gdje da spasim datoteke**.
:::

:::safari
Safari spašava u vaš folder Preuzimanja. Da promijenite folder, otvorite **Safari, Postavke, Opšte, Lokacija za preuzimanje datoteka**.
:::

### Otvori

1. Odaberite {{ui:Otvori}} u grupi {{ui:Datoteka}} ili pritisnite {{key:Mod+O}}.
2. Izaberite datoteku `.detailcraft.json`.

Ili prevucite datoteku iz {{pick:mac=Finder|windows=File Explorer|linux=vaš upravitelj datoteka}} i ispustite je na prikaz. Dok prevlačite, prikaz kaže "Prevuci DetailCraft model da ga otvoriš".

Ako otvoreni model ima nespašene izmjene, DetailCraft prvo pita: {{ui:Otkaži}}, {{ui:Odbaci promjene}} ili {{ui:Prvo spasi}}.

DetailCraft provjerava svako polje datoteke prije nego ga upotrijebi. Ono što ne može upotrijebiti se izostavlja, a statusna traka kaže šta, na primjer "2 elementa nisu bila ispravna i izostavljena su." Model spašen novijom verzijom DetailCraft-a se odbija uz poruku, umjesto da se otvori napola ispravno.

### Šta se otvara

Vlastite datoteke modela (`.json`, do 50 MB) i IFC datoteke (`.ifc`, IFC2X3 ili IFC4, do 200 MB). IFC datoteka, otvorena ili uvezena pomoću {{ui:Uvezi IFC}}, postaje novi model svojih greda, stubova, elemenata, ploča, mreža i nivoa, sa rupama i izrezima i vijcima kao slobodnim vijcima; izvještaj navodi šta je izostavljeno. Vidi [Izvoz IFC](topic:ifc-export#import). Ne otvara DWG, DXF ili model nekog drugog programa za detaljisanje još; pokušaj prikazuje "DetailCraft otvara vlastite modele (.detailcraft.json) i IFC datoteke (.ifc)."

## Izgubljeni rad, nedavne datoteke, desktop aplikacija

- Dok model ima izmjene koje niste spasili, DetailCraft čuva kopiju u ovom pregledniku. Ako se kartica ili preglednik zatvore prije nego spasite, sljedeći put kad otvorite DetailCraft pita **Vrati vaš rad?**: vrati kopiju ili je odbaci. Vidi [Vraćanje vašeg rada](common:recover).
- Modeli koje ste nedavno otvarali nalaze se na početnom ekranu kad preglednik dozvoljava DetailCraft-u da ih ponovo otvori; kliknite na jedan da ga ponovo otvorite.
- U desktop aplikaciji, {{ui:Spasi}} upisuje model nazad u datoteku koju ste otvorili (u pregledniku preuzima kopiju), a dvoklik na DetailCraft model ili IFC datoteku je otvara u DetailCraft-u.

## Izvozi

Svi izvozi koriste naziv modela. Birajte ih u grupi {{ui:Izlaz}}.

| Dugme | Datoteka | Šta je u njoj |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: spratovi, mreže, svaki čelični dio kao ekstruzija profila sa rupama i izrezima, sklopovi, vijci i sidrene šipke, temelji i svaka šipka. Vidi [Izvoz IFC](topic:ifc-export). |
| {{ui:NC datoteke}} | `<name> NC.zip` | Jedna DSTV `.nc1` datoteka po oznaci dijela. Vidi [Pošalji NC datoteke u radionicu](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Tri tabele u jednoj datoteci: dijelovi, sklopovi, i vijci i sidrene šipke. Vidi [Oznake i spisak materijala](topic:marks-and-bom). |
| {{ui:Savijanje}} | `<name> bending schedule.csv` | Svaka oznaka šipke u temeljima. Vidi [Temelji i armatura](topic:footings-and-rebar). |
| {{ui:Radionički crtež}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` sadrži list po oznaci dijela; {{ui:Preuzmi PDF}} daje prikazani list (A3, osim ako ste izabrali drugu veličinu). Vidi [Izrada radioničkih crteža](topic:shop-drawings). |
| {{ui:Crteži}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` ili `.dxf`, više njih u `<name> drawings DWG.zip` (ili `DXF.zip`) | Osnove, izgledi i sklopni crteži na veličini lista koju ste izabrali; DWG i DXF u punoj veličini, 1 jedinica = 1 mm na papiru. Vidi [Opšti raspored i sklopni crteži](topic:drawings). |

### Napomene o CSV datotekama

- Počinju oznakom redoslijeda bajtova (byte-order mark), da programi za tabele pravilno čitaju slova sa dijakriticima.
- Ćelija koja počinje sa `=`, `+`, `-` ili `@` (i nije običan broj) dobija vodeći apostrof, pa je tabelarni program nikada ne izvršava kao formulu.
- Dužine su u milimetrima, a težine u kilogramima.

### Napomene o PDF-u

Tekst u PDF-u koristi standardni font Helvetica. Znakovi koje on nema (van zapadnoevropskog skupa) štampaju se kao "?", a statusna traka kaže koliko ih je.

## Jedinice

DetailCraft radi u milimetrima u cijelosti: mreže, nivoi, koordinate, profili, rupe i svi izvozi. Nazivi profila zadržavaju svoj objavljeni oblik (W12x50 je američka oznaka, iako su dimenzije prikazane u mm). Unos u inčima još nije dostupan.

## Na mreži i van mreže

Otvaranje, spašavanje i izvoz se odvijaju u vašem pregledniku, pa rade isto, sa vezom ili bez nje, kad se DetailCraft jednom učita.

Da biste kasnije koristili DetailCraft bez veze, dok ste na mreži u traci aplikacije odaberite {{ui:Spasi za rad van mreže}}. Dugme broji ("Spašavanje 3 od 20") i zatim piše {{ui:Spremno za rad van mreže}}. Spašena kopija uključuje biblioteku 3D grafike (oko 2,6 MB) i ovu pomoć, pa kad se jednom spasi, 3D prikaz, svi izvozi i pomoć rade bez veze. Detalji i šta još traži vezu: [Rad van mreže](common:offline).

:::offline
Van ste mreže. Ako traka aplikacije pokazuje {{ui:Spremno za rad van mreže}}, otvaranje, spašavanje i izvoz rade kao i obično. Ako ne pokazuje, ostavite ovu karticu otvorenom, ne osvježavajte je dok ne budete ponovo na mreži, i odmah spasite model.
:::

Spremanje u oblak još nije dostupno, a desktop verzija još ne postoji. Napravite sigurnosnu kopiju svojih `.detailcraft.json` datoteka kao i bilo koje druge radne datoteke. Više u [Gdje idu vaše datoteke](common:your-files).

## Nespašeni rad

DetailCraft čuva model samo u otvorenoj kartici. Ako zatvorite ili osvježite karticu sa nespašenim izmjenama, preglednik pita želite li napustiti stranicu; tekst je preglednikov. Često spašavajte pomoću {{key:Mod+S}}.
