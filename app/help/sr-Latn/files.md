---
title: Otvaranje, čuvanje i izvoz datoteka
summary: Datoteka modela DetailCraft, svaki izvoz koji on pravi, mesto gde datoteke završe i šta se razlikuje po pregledaču i vezi.
keywords: otvori, sačuvaj, izvezi, preuzmi, datoteka, json, ifc, nc1, dstv, csv, pdf, zip, formati, uvezi
from: bd715ea3
---

DetailCraft ima jednu sopstvenu datoteku, model, i pet izvoza. Svako čuvanje i svaki izvoz je preuzimanje. Ništa se ne otprema i ništa se ne čuva na serveru.

## Datoteka modela

Model se čuva kao `<name>.detailcraft.json`, gde je `<name>` naziv modela u panelu {{ui:Model}}. Datoteka sadrži mreže, nivoe, elemente (sa njihovim rupama i izrezima), veze i njihova podešavanja, temelje i vaše prilagođene profile.

Delovi, oznake, zavrtnji, varovi i šipke armature se ne čuvaju: DetailCraft ih ponovo izračunava iz modela svaki put kada se model otvori. Zato je datoteka modela mala.

### Sačuvaj

1. Upišite naziv u polje {{ui:Naziv}} na vrhu panela {{ui:Model}}.
2. Izaberite {{ui:Sačuvaj}} u grupi {{ui:Datoteka}} ili pritisnite {{key:Mod+S}}.
3. Pregledač preuzima `<name>.detailcraft.json`. Statusna traka kaže „Sačuvano … (preuzeto)”, a tačka na početku naslova kartice pregledača nestaje.

Svako čuvanje je novo preuzimanje. Pregledač ne prepisuje datoteku koju ste otvorili; zavisno od podešavanja, dodaje broj uz naziv, na primer `Frame (1).detailcraft.json`, ili pita gde da sačuva datoteku. Svoje verzije čuvajte preimenovanjem preuzetih datoteka.

:::chromium
Chrome i Edge čuvaju u fasciklu Preuzimanja, osim ako je uključeno **Pitaj gde da se sačuva svaka datoteka pre preuzimanja** u podešavanjima preuzimanja pregledača. Uključite ga ako želite da svaki put izaberete fasciklu i naziv datoteke.
:::

:::firefox
Firefox čuva u fasciklu Preuzimanja, ili pita svaki put ako je u njegovim podešavanjima uključeno **Uvek pitaj gde da se čuvaju datoteke**.
:::

:::safari
Safari čuva u fasciklu Preuzimanja. Da promenite fasciklu, otvorite **Safari, Podešavanja, Opšte, Mesto za preuzimanje datoteka**.
:::

### Otvori

1. Izaberite {{ui:Otvori}} u grupi {{ui:Datoteka}} ili pritisnite {{key:Mod+O}}.
2. Izaberite datoteku `.detailcraft.json`.

Ili prevucite datoteku iz {{pick:mac=Finder|windows=File Explorer|linux=vašeg upravljača datotekama}} i ispustite je na prikaz. Dok prevlačite, prikaz kaže „Ispusti DetailCraft model da ga otvoriš”.

Ako otvoreni model ima nesačuvane izmene, DetailCraft prvo pita: {{ui:Otkaži}}, {{ui:Odbaci izmene}} ili {{ui:Prvo sačuvaj}}.

DetailCraft proverava svako polje datoteke pre upotrebe. Ono što ne može da upotrebi se izostavlja, a statusna traka kaže šta, na primer „2 elementa nisu ispravna i izostavljena su.” Model sačuvan novijom verzijom DetailCraft-a se odbija uz poruku, umesto da se otvori polovično ispravno.

### Šta se otvara

Sopstvene datoteke modela (`.json`, do 50 MB) i IFC datoteke (`.ifc`, IFC2X3 ili IFC4, do 200 MB). IFC datoteka, otvorena ili uvedena pomoću {{ui:Uvoz IFC}}, postaje novi model svojih greda, stubova, elemenata, limova, mreža i nivoa, sa rupama i izrezima u njima i zavrtnjima kao slobodnim zavrtnjima; izveštaj kaže šta je izostavljeno. Pogledajte [Izvoz IFC](topic:ifc-export#import). Ne otvara još DWG, DXF ni model nekog drugog programa za detaljisanje; pokušaj prikazuje „DetailCraft otvara sopstvene modele (.detailcraft.json) i IFC datoteke (.ifc).”

## Izgubljeni rad, nedavne datoteke, desktop aplikacija

- Dok model ima izmene koje niste sačuvali, DetailCraft čuva kopiju u ovom pregledaču. Ako se kartica ili pregledač zatvore pre čuvanja, sledeći put kada otvorite DetailCraft pita **Vratiti rad?**: povratite kopiju ili je odbacite. Pogledajte [Povrati rad](common:recover).
- Modeli koje ste nedavno otvorili navedeni su na početnom ekranu kada pregledač dozvoljava DetailCraft-u da ih ponovo otvori; kliknite jedan da ga ponovo otvorite.
- U desktop aplikaciji, {{ui:Sačuvaj}} upisuje model nazad u datoteku koju ste otvorili (u pregledaču preuzima kopiju), a dvostruki klik na DetailCraft model ili IFC datoteku otvara je u DetailCraft-u.

## Izvozi

Svi izvozi koriste naziv modela. Birajte ih u grupi {{ui:Izlaz}}.

| Dugme | Datoteka | Šta sadrži |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: spratovi, mreže, svaki čelični deo kao izvlačenje profila sa rupama i izrezima, sklopovi, zavrtnji i sidreni štapovi, temelji i svaka šipka. Pogledajte [Izvoz IFC](topic:ifc-export). |
| {{ui:NC datoteke}} | `<name> NC.zip` | Jedna DSTV `.nc1` datoteka po oznaci dela. Pogledajte [Pošaljite NC datoteke radionici](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Tri tabele u jednoj datoteci: delovi, sklopovi, i zavrtnji i sidreni štapovi. Pogledajte [Oznake i spisak materijala](topic:marks-and-bom). |
| {{ui:Savijanje}} | `<name> bending schedule.csv` | Svaka oznaka šipke u temeljima. Pogledajte [Temelji i armatura](topic:footings-and-rebar). |
| {{ui:Radionički crtež}} | `<name> <mark>.pdf` | Jedan list (A3, osim ako izaberete drugu veličinu) za izabrani deo (I-profili i limovi). Pogledajte [Napravite radionički crtež](topic:shop-drawings). |
| {{ui:Crteži}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` ili `.dxf`, više njih u `<name> drawings DWG.zip` (ili `DXF.zip`) | Osnove, izgledi i crteži sklopova na veličini lista koju ste izabrali; DWG i DXF u punoj veličini, 1 jedinica = 1 mm na papiru. Pogledajte [Opšti raspored i crteži sklopova](topic:drawings). |

### Napomene o CSV datotekama

- Počinju oznakom redosleda bajtova (byte-order mark), tako da tabelarni programi ispravno čitaju slova sa dijakriticima.
- Ćelija koja počinje sa `=`, `+`, `-` ili `@` (i nije običan broj) dobija vodeći apostrof, tako da je tabelarni program nikada ne izvršava kao formulu.
- Dužine su u milimetrima, a težine u kilogramima.

### Napomene o PDF-u

Tekst u PDF-u koristi standardni font Helvetica. Znakovi koje font nema (van zapadnoevropskog skupa) štampaju se kao „?”, a statusna traka kaže koliko ih ima.

## Jedinice

DetailCraft radi u milimetrima svuda: mreže, nivoi, koordinate, profili, rupe i svaki izvoz. Nazivi profila zadržavaju svoj objavljeni oblik (W12x50 je američka oznaka, iako su dimenzije prikazane u mm). Unos u inčima još nije podržan.

## Na mreži i van mreže

Otvaranje, čuvanje i izvoz se odvijaju u vašem pregledaču, pa rade isto sa vezom ili bez nje, kada se DetailCraft jednom učita.

Da biste kasnije koristili DetailCraft bez veze, izaberite {{ui:Sačuvaj za rad van mreže}} na traci aplikacije dok ste na mreži. Dugme broji („Čuvanje 3 od 20”), a zatim prikazuje {{ui:Spremno za rad van mreže}}. Sačuvana kopija uključuje biblioteku 3D grafike (oko 2.6 MB) i ovu pomoć, pa kada se jednom sačuva, 3D prikaz, svaki izvoz i pomoć rade bez veze. Detalji i ono što i dalje traži vezu: [Rad van mreže](common:offline).

:::offline
Niste na mreži. Ako traka aplikacije prikazuje {{ui:Spremno za rad van mreže}}, otvaranje, čuvanje i izvoz rade kao obično. Ako ne prikazuje, ostavite ovu karticu otvorenu, ne ponovo je učitavajte dok se ne vratite na mrežu i odmah sačuvajte model.
:::

Čuvanje u oblaku još nije dostupno, a desktop verzije još ne postoje. Pravite rezervne kopije datoteka `.detailcraft.json` kao i svaku drugu radnu datoteku. Više u [Gde idu vaše datoteke](common:your-files).

## Nesačuvan rad

DetailCraft čuva model samo u otvorenoj kartici. Ako zatvorite ili ponovo učitate karticu sa nesačuvanim izmenama, pregledač pita da li želite da napustite stranicu; tekst je pregledačev. Često čuvajte sa {{key:Mod+S}}.
