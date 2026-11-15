---
title: Otvaranje, čuvanje i izvoz datoteka
summary: Datoteka modela DetailCraft, svaki izvoz koji ona pravi, mesto na koje datoteke idu i šta se razlikuje po pregledaču i vezi.
keywords: otvori, sačuvaj, izvezi, preuzmi, datoteka, json, ifc, nc1, dstv, csv, pdf, zip, formati, uvezi
from: 6fbc8e8f
---

DetailCraft ima jednu sopstvenu datoteku, model, i pet izvoza. Svako čuvanje i svaki izvoz je preuzimanje. Ništa se ne otprema, a ništa se ne čuva na serveru.

## Datoteka modela

Model se čuva kao `<name>.detailcraft.json`, gde je `<name>` naziv modela u panelu {{ui:Model}}. Sadrži mreže, nivoe, štapove (sa njihovim rupama i izrezima), veze i njihova podešavanja, temelje i vaše prilagođene profile.

Delovi, oznake, zavrtnji, zavari i šipke se ne čuvaju: DetailCraft ih ponovo izračunava iz modela svaki put kad se model otvori. Zato je datoteka modela mala.

### Čuvanje

1. Ukucajte naziv u polje {{ui:Naziv}} na vrhu panela {{ui:Model}}.
2. Izaberite {{ui:Sačuvaj}} u grupi {{ui:Datoteka}} ili pritisnite {{key:Mod+S}}.
3. Pregledač preuzima `<name>.detailcraft.json`. Statusna traka kaže „Sačuvano … (preuzeto)”, a tačka na početku naslova kartice pregledača nestaje.

Svako čuvanje je novo preuzimanje. Pregledač ne prepisuje datoteku koju ste otvorili; u zavisnosti od podešavanja, dodaje broj u naziv, na primer `Frame (1).detailcraft.json`, ili pita gde da sačuva. Svoje verzije čuvajte preimenovanjem preuzetih datoteka.

:::chromium
Chrome i Edge čuvaju u fasciklu Preuzimanja, osim ako je uključena opcija **Pitaj gde da se sačuva svaka datoteka pre preuzimanja** u podešavanjima preuzimanja pregledača. Uključite je ako želite da svaki put izaberete fasciklu i naziv datoteke.
:::

:::firefox
Firefox čuva u fasciklu Preuzimanja, ili pita svaki put ako je uključena opcija **Uvek pitaj gde da sačuvam datoteke** u njegovim podešavanjima.
:::

:::safari
Safari čuva u fasciklu Preuzimanja. Da promenite fasciklu, otvorite **Safari, Podešavanja, Opšte, Lokacija preuzetih datoteka**.
:::

### Otvaranje

1. Izaberite {{ui:Otvori}} u grupi {{ui:Datoteka}} ili pritisnite {{key:Mod+O}}.
2. Izaberite datoteku `.detailcraft.json`.

Ili prevucite datoteku iz {{pick:mac=Finder|windows=Istraživač datoteka|linux=vašeg upravljača datotekama}} i pustite je na prikaz. Dok prevlačite, prikaz kaže „Prevucite DetailCraft model da ga otvorite”.

Ako otvoreni model ima nesačuvane izmene, DetailCraft prvo pita: {{ui:Otkaži}}, {{ui:Odbaci izmene}} ili {{ui:Prvo sačuvaj}}.

DetailCraft proverava svako polje datoteke pre upotrebe. Ono što ne može da upotrebi se izostavlja, a statusna traka kaže šta je, na primer „2 štapa nisu bila ispravna i izostavljena su.” Model sačuvan u novijoj verziji DetailCraft se odbija uz poruku, umesto da se otvori polovično ispravan.

### Šta se otvara

Sopstvene datoteke modela (`.json`, do 50 MB) i IFC datoteke (`.ifc`, IFC2X3 ili IFC4, do 200 MB). IFC datoteka, otvorena ili uvezena pomoću {{ui:Uvoz IFC}}, postaje novi model od svojih greda, stubova, štapova, limova, mreža i nivoa, sa rupama i izrezima koji su u njima isečeni, a njeni zavrtnji su slobodni zavrtnji; izveštaj navodi šta je izostavljeno. Pogledajte [Izvoz IFC](topic:ifc-export#import). DWG, DXF ili model nekog drugog programa za detaljisanje se još ne otvaraju; pokušaj prikazuje poruku „DetailCraft otvara sopstvene modele (.detailcraft.json) i IFC datoteke (.ifc).”

## Izgubljen rad, nedavne datoteke, aplikacija za računar

- Dok model ima izmene koje niste sačuvali, DetailCraft čuva kopiju u ovom pregledaču. Ako se kartica ili pregledač zaustave pre čuvanja, sledeći put kad otvorite DetailCraft pita **Oporaviti vaš rad?**: oporavite kopiju ili je odbacite. Pogledajte [Oporavak rada](common:recover).
- Modeli koje ste nedavno otvarali prikazani su na početnom ekranu kad pregledač dozvoljava DetailCraft da ih ponovo otvori; kliknite na jedan da ga ponovo otvorite.
- U aplikaciji za računar, {{ui:Sačuvaj}} upisuje model nazad u datoteku koju ste otvorili (u pregledaču preuzima kopiju), a dvoklik na DetailCraft model ili IFC datoteku otvara je u DetailCraft.

## Izvozi

Svi izvozi koriste naziv modela. Birajte ih u grupi {{ui:Izlaz}}.

| Dugme | Datoteka | Šta sadrži |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: spratovi, mreže, svaki čelični deo kao izvučen profil sa rupama i izrezima, sklopovi, zavrtnji i sidrene šipke, temelji i svaka šipka. Pogledajte [Izvoz IFC](topic:ifc-export). |
| {{ui:NC datoteke}} | `<name> NC.zip` | Jedna DSTV `.nc1` datoteka po oznaci dela. Pogledajte [Slanje NC datoteka u radionicu](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Tri tabele u jednoj datoteci: delovi, sklopovi, i zavrtnji i sidrene šipke. Pogledajte [Oznake i spisak materijala](topic:marks-and-bom). |
| {{ui:Savijanje}} | `<name> bending schedule.csv` | Svaka oznaka šipke u temeljima. Pogledajte [Temelji i armatura](topic:footings-and-rebar). |
| {{ui:Radionički crtež}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` sadrži list za svaku oznaku dela; {{ui:Preuzmi PDF}} daje prikazani list (A3, ako niste izabrali drugu veličinu). Pogledajte [Izrada radioničkih crteža](topic:shop-drawings). |
| {{ui:Crteži}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` ili `.dxf`, više u `<name> drawings DWG.zip` (ili `DXF.zip`) | Osnove, izgledi i sklopni crteži na veličini lista koju ste izabrali; DWG i DXF u punoj veličini, 1 jedinica = 1 mm na papiru. Pogledajte [Opšti raspored i sklopni crteži](topic:drawings). |

### Napomene o CSV datotekama

- Počinju oznakom redosleda bajtova (BOM) da bi tabelarni programi ispravno čitali slova sa dijakriticima.
- Ćelija koja počinje sa `=`, `+`, `-` ili `@` (i nije običan broj) dobija vodeći apostrof, pa je tabelarni program nikada ne izvršava kao formulu.
- Dužine su u milimetrima, a težine u kilogramima.

### Napomene o PDF-u

Tekst u PDF-u koristi standardni font Helvetica. Znakovi koje nema (van zapadnoevropskog skupa) štampaju se kao „?”, a statusna traka kaže koliko ih je.

## Jedinice

DetailCraft radi u milimetrima u svemu: mreže, nivoi, koordinate, profili, rupe i svi izvozi. Nazivi profila zadržavaju objavljen oblik (W12x50 je američka oznaka, iako su njene dimenzije prikazane u mm). Unos u inčima još nije moguć.

## Na mreži i van mreže

Otvaranje, čuvanje i izvoz se odvijaju u vašem pregledaču, pa rade isto sa vezom ili bez nje, kad je DetailCraft učitan.

Da biste kasnije koristili DetailCraft bez veze, izaberite {{ui:Sačuvaj za rad van mreže}} u traci aplikacije dok ste na mreži. Dugme broji („Čuvanje 3 od 20”), a zatim prikazuje {{ui:Spremno za rad van mreže}}. Sačuvana kopija sadrži biblioteku 3D grafike (oko 2,6 MB) i ovu pomoć, pa kad se sačuva, 3D prikaz, svi izvozi i pomoć rade van mreže. Detalji i šta još traži vezu: [Rad van mreže](common:offline).

:::offline
Niste na mreži. Ako traka aplikacije prikazuje {{ui:Spremno za rad van mreže}}, otvaranje, čuvanje i izvoz rade kao obično. Ako ne prikazuje, ostavite ovu karticu otvorenu, ne osvežavajte je dok ne budete ponovo na mreži i sačuvajte model odmah.
:::

Čuvanje u oblaku još nije dostupno, a još nema ni verzija za računar. Pravite rezervne kopije svojih `.detailcraft.json` datoteka kao što pravite rezervne kopije bilo koje druge radne datoteke. Više u [Gde idu vaše datoteke](common:your-files).

## Nesačuvan rad

DetailCraft čuva model samo u otvorenoj kartici. Ako zatvorite ili osvežite karticu sa nesačuvanim izmenama, pregledač pita da li želite da napustite stranicu; tekst je pregledačev. Čuvajte često pomoću {{key:Mod+S}}.
