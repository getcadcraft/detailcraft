---
title: Otvaranje, spremanje i izvoz datoteka
summary: DetailCraftova datoteka modela, svaki izvoz koji zapisuje, kamo datoteke idu i što se razlikuje po pregledniku i vezi.
keywords: otvori, spremi, izvoz, preuzimanje, datoteka, json, ifc, nc1, dstv, csv, pdf, zip, formati, uvoz
from: bd715ea3
---

DetailCraft ima jednu vlastitu datoteku, model, i pet izvoza. Svako spremanje i svaki izvoz je preuzimanje. Ništa se ne učitava i ništa se ne čuva na poslužitelju.

## Datoteka modela

DetailCraft model sprema se kao `<naziv>.detailcraft.json`, gdje je `<naziv>` naziv modela na ploči {{ui:Model}}. Sadrži mreže, razine, štapove (s njihovim provrtima i izrezima), spojeve i njihove postavke, temelje i vaše prilagođene profile.

Dijelovi, oznake, vijci, zavari i šipke se ne pohranjuju: DetailCraft ih ponovno izračunava iz modela svaki put kad se otvori. Zato je datoteka modela mala.

### Spremanje

1. Upišite naziv u polje {{ui:Naziv}} pri vrhu ploče {{ui:Model}}.
2. Odaberite {{ui:Spremi}} u skupini {{ui:Datoteka}} ili pritisnite {{key:Mod+S}}.
3. Preglednik preuzima `<naziv>.detailcraft.json`. Statusna traka kaže „Spremljeno: … (preuzeto)“, a točka na početku naslova kartice preglednika nestaje.

Svako spremanje je novo preuzimanje. Preglednik ne prepisuje datoteku koju ste otvorili; ovisno o svojim postavkama dodaje broj nazivu, kao `Frame (1).detailcraft.json`, ili pita kamo spremiti. Vlastite verzije čuvajte preimenovanjem preuzimanja.

:::chromium
Chrome i Edge spremaju u vašu mapu Preuzimanja osim ako je u postavkama preuzimanja preglednika uključeno **Pitaj gdje spremiti svaku datoteku prije preuzimanja**. Uključite to ako želite svaki put birati mapu i naziv datoteke.
:::

:::firefox
Firefox sprema u vašu mapu Preuzimanja ili pita svaki put ako je u njegovim postavkama uključeno **Uvijek pitaj gdje spremiti datoteke**.
:::

:::safari
Safari sprema u vašu mapu Preuzimanja. Da promijenite mapu, otvorite **Safari, Postavke, Općenito, Lokacija preuzetih datoteka**.
:::

### Otvaranje

1. Odaberite {{ui:Otvori}} u skupini {{ui:Datoteka}} ili pritisnite {{key:Mod+O}}.
2. Odaberite `.detailcraft.json` datoteku.

Ili povucite datoteku iz {{pick:mac=Findera|windows=Explorera|linux=vašeg upravitelja datoteka}} i ispustite je na prikaz. Prikaz kaže „Ispustite DetailCraft model ili IFC datoteku da je otvorite“ dok povlačite.

Ako otvoreni model ima nespremljenih promjena, DetailCraft prvo pita: {{ui:Odustani}}, {{ui:Odbaci promjene}} ili {{ui:Prvo spremi}}.

DetailCraft provjerava svako polje datoteke prije nego što je upotrijebi. Sve što ne može upotrijebiti izostavlja se, a statusna traka kaže što, na primjer „2 štapa nisu bila valjana i izostavljena su.“ Model spremljen novijim DetailCraftom odbija se porukom umjesto da se otvori napola ispravno.

### Što otvara

Vlastite datoteke modela (`.json`, do 50 MB) i IFC datoteke (`.ifc`, IFC2X3 ili IFC4, do 200 MB). IFC datoteka, otvorena ili unesena s {{ui:Uvezi IFC}}, postaje novi model njezinih greda, stupova, štapova, ploča, mreža i razina, s provrtima i izrezima urezanima u njih i njezinim vijcima kao slobodnim vijcima; izvješće navodi što je izostavljeno. Vidi [IFC izvoz](topic:ifc-export#import). Još ne otvara DWG, DXF ni model bilo kojeg drugog programa za detaljiranje; pokušaj prikazuje „DetailCraft otvara vlastite modele (.detailcraft.json) i IFC datoteke (.ifc).“

## Izgubljeni rad, nedavne datoteke, aplikacija za radnu površinu

- Dok model ima promjena koje niste spremili, DetailCraft čuva kopiju u ovom pregledniku. Ako se kartica ili preglednik zaustave prije nego što spremite, pri sljedećem otvaranju DetailCrafta pita **Oporaviti svoj rad?**: oporavite kopiju ili je pustite. Vidi [Oporavak vašeg rada](common:recover).
- Modeli koje ste nedavno otvarali navedeni su na početnom zaslonu kada preglednik dopušta DetailCraftu da ih ponovno otvori; kliknite jedan da ga ponovno otvorite.
- U aplikaciji za radnu površinu {{ui:Spremi}} zapisuje model natrag u datoteku koju ste otvorili (u pregledniku preuzima kopiju), a dvostruki klik na DetailCraft model ili IFC datoteku otvara je u DetailCraftu.

## Izvozi

Svi izvozi koriste naziv modela. Odaberite ih u skupini {{ui:Izlaz}}.

| Gumb | Datoteka | Što sadrži |
|---|---|---|
| {{ui:IFC}} | `<naziv>.ifc` | IFC4: etaže, mreže, svaki čelični dio kao izvlačenje profila s provrtima i izrezima, sklopovi, vijci i sidreni vijci, temelji i svaka šipka. Vidi [Izvoz IFC-a](topic:ifc-export). |
| {{ui:NC datoteke}} | `<naziv> NC.zip` | Jedna DSTV `.nc1` datoteka po oznaci dijela. Vidi [Slanje NC datoteka u radionicu](topic:nc-export). |
| {{ui:BOM}} | `<naziv> BOM.csv` | Tri tablice u jednoj datoteci: dijelovi, sklopovi te vijci i sidreni vijci. Vidi [Oznake i sastavnica](topic:marks-and-bom). |
| {{ui:Savijanje}} | `<naziv> bending schedule.csv` | Svaka oznaka šipke u temeljima. Vidi [Temelji i armatura](topic:footings-and-rebar). |
| {{ui:Radionički crtež}} | `<naziv> <oznaka>.pdf` | Jedan list (A3 osim ako ste odabrali drugu veličinu) za odabrani dio (I-profili i ploče). Vidi [Izrada radioničkog crteža](topic:shop-drawings). |
| {{ui:Crteži}} | `<naziv> drawings.pdf`, `<naziv> <list>.pdf`; `<naziv> <list>.dwg` ili `.dxf`, nekoliko u `<naziv> drawings DWG.zip` (ili `DXF.zip`) | Tlocrti, pročelja i crteži sklopova u veličini lista koju ste odabrali; DWG i DXF u punoj veličini, 1 jedinica = 1 mm na papiru. Vidi [Opći raspored i crteži sklopova](topic:drawings). |

### Napomene o CSV datotekama

- Počinju oznakom redoslijeda bajtova da programi za proračunske tablice ispravno čitaju znakove s dijakriticima.
- Ćelija koja počinje s `=`, `+`, `-` ili `@` (a nije običan broj) dobiva vodeći apostrof, pa je proračunska tablica nikada ne izvodi kao formulu.
- Duljine su u milimetrima, a mase u kilogramima.

### Napomene o PDF-u

Tekst u PDF-u koristi standardni font Helvetica. Znakovi koje nema (izvan zapadnoeuropskog skupa) ispisuju se kao „?“, a statusna traka kaže koliko ih je.

## Jedinice

DetailCraft radi u milimetrima posvuda: mreže, razine, koordinate, profili, provrti i svaki izvoz. Nazivi profila zadržavaju objavljeni oblik (W12x50 je američka oznaka iako su njegove dimenzije prikazane u mm). Još nema unosa u imperijalnim jedinicama.

## Online i offline

Otvaranje, spremanje i izvoz događaju se u vašem pregledniku, pa rade jednako sa vezom i bez nje nakon što se DetailCraft učita.

Da DetailCraft kasnije koristite bez veze, odaberite {{ui:Spremi za offline}} na traci aplikacije dok ste online. Gumb broji naprijed („Spremanje 3 od 20“) i zatim glasi {{ui:Spremno za offline}}. Spremljena kopija uključuje knjižnicu 3D grafike (oko 2,6 MB) i ovu pomoć, pa kad je spremljena, 3D prikaz, svaki izvoz i pomoć rade offline. Pojedinosti i što i dalje treba vezu: [Rad offline](common:offline).

:::offline
Offline ste. Ako traka aplikacije prikazuje {{ui:Spremno za offline}}, otvaranje, spremanje i izvoz rade kao i inače. Ako ne, ostavite ovu karticu otvorenom, ne osvježavajte je dok se ne vratite online i odmah spremite svoj model.
:::

Spremanje u oblaku još nije dostupno, a verzije za radnu površinu još ne postoje. Sigurnosno kopirajte svoje `.detailcraft.json` datoteke kao i svaku drugu radnu datoteku. Više u [Kamo idu vaše datoteke](common:your-files).

## Nespremljen rad

DetailCraft čuva model samo u otvorenoj kartici. Ako zatvorite ili osvježite karticu s nespremljenim promjenama, preglednik pita želite li napustiti stranicu; njegov tekst je tekst samog preglednika. Često spremajte s {{key:Mod+S}}.
