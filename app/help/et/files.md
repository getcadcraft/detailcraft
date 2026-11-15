---
title: Failide avamine, salvestamine ja eksportimine
summary: DetailCrafti mudelifail, iga eksport, mida see kirjutab, kuhu failid lähevad ning mis erineb brauseri ja ühenduse järgi.
keywords: ava, salvesta, ekspordi, laadi alla, fail, json, ifc, nc1, dstv, csv, pdf, zip, formaadid, impordi
from: 6fbc8e8f
---

DetailCraftil on oma fail, mudel, ja viis eksporti. Iga salvestus ja iga eksport on allalaadimine. Midagi ei laadita üles ega hoita serveris.

## Mudelifail

DetailCrafti mudel salvestatakse failina `<name>.detailcraft.json`, kus `<name>` on mudeli nimi paneelil {{ui:Mudel}}. See sisaldab ruudustikke, tasandeid, elemente (koos nende avade ja lõigetega), ühendusi ja nende sätteid, vundamente ning sinu kohandatud profiile.

Detailid, märgised, poldid, keevised ja armatuurvardad ei ole salvestatud: DetailCraft arvutab need mudelist uuesti iga kord, kui see avaneb. Seetõttu on mudelifail väike.

### Salvesta

1. Kirjuta nimi väljale {{ui:Nimi}} paneeli {{ui:Mudel}} ülaosas.
2. Vali grupis {{ui:Fail}} {{ui:Salvesta}} või vajuta {{key:Mod+S}}.
3. Brauser laadib alla faili `<name>.detailcraft.json`. Olekuribal on tekst „Salvestatud … (allalaaditud)“ ja brauseri vahelehe pealkirja alguses olev punkt kaob.

Iga salvestus on uus allalaadimine. Brauser ei kirjuta avatud faili üle; sõltuvalt brauseri sätetest lisab ta nimele numbri, näiteks `Frame (1).detailcraft.json`, või küsib, kuhu salvestada. Hoia oma versioone alles, nimetades allalaaditud failid ümber.

:::chromium
Chrome ja Edge salvestavad failid kausta Allalaadimised, välja arvatud juhul, kui brauseri allalaadimise sätetes on sisse lülitatud **Küsi enne iga faili allalaadimist, kuhu see salvestada**. Lülita see sisse, kui soovid igal korral valida kausta ja failinime.
:::

:::firefox
Firefox salvestab kausta Allalaadimised või küsib igal korral, kui sätetes on sisse lülitatud **Küsi alati, kuhu failid salvestada**.
:::

:::safari
Safari salvestab kausta Allalaadimised. Kausta muutmiseks ava **Safari, Sätted, Üldine, Faili allalaadimise asukoht**.
:::

### Ava

1. Vali grupis {{ui:Fail}} {{ui:Ava}} või vajuta {{key:Mod+O}}.
2. Vali `.detailcraft.json` fail.

Või lohista fail rakendusest {{pick:mac=Finder|windows=Failihaldur|linux=sinu failihaldur}} ja aseta see vaatesse. Lohistamise ajal kuvab vaade teksti „Lohista DetailCrafti mudel avamiseks“.

Kui avatud mudelil on salvestamata muudatusi, küsib DetailCraft kõigepealt: {{ui:Loobu}}, {{ui:Loobu muudatustest}} või {{ui:Salvesta esmalt}}.

DetailCraft kontrollib iga faili välja enne selle kasutamist. Kõik, mida ta ei saa kasutada, jäetakse välja ja olekuribal öeldakse, mis see oli, näiteks „2 elementi ei olnud kehtivad ja jäeti välja.“ Uuema DetailCrafti versiooniga salvestatud mudel lükatakse tagasi koos teatega, selle asemel et seda poolikult avada.

### Mida see avab

Oma mudelifaile (`.json`, kuni 50 MB) ja IFC-faile (`.ifc`, IFC2X3 või IFC4, kuni 200 MB). IFC-fail, mis avatakse või imporditakse {{ui:Impordi IFC}} abil, muutub uueks mudeliks oma taladest, postidest, elementidest, plaatidest, ruudustikest ja tasanditest; avad ja lõiked lõigatakse sisse ning poldid tulevad lahtiste poltidena. Aruanne loetleb, mis jäeti välja. Vt [IFC eksport](topic:ifc-export#import). See ei ava veel DWG- ega DXF-faile ega ühegi teise detailimisprogrammi mudelit; proovimisel kuvatakse „DetailCraft avab ainult oma mudeleid (.detailcraft.json) ja IFC-faile (.ifc).“

## Kadunud töö, hiljutised failid ja töölauarakendus

- Kui mudelis on salvestamata muudatusi, hoiab DetailCraft selle koopiat selles brauseris. Kui vaheleht või brauser lõpetab enne salvestamist, küsib DetailCraft järgmisel avamisel **Kas taastan su töö?**: taasta koopia või loobu sellest. Vt [Töö taastamine](common:recover).
- Hiljuti avatud mudelid on loetletud algusekraanil, kui brauser lubab DetailCraftil need uuesti avada; klõpsa ühel neist, et see uuesti avada.
- Töölauarakenduses kirjutab {{ui:Salvesta}} mudeli tagasi faili, mille avasid (brauseris laadib see alla koopia), ja DetailCrafti mudeli või IFC-faili topeltklõps avab selle DetailCraftis.

## Eksportid

Kõik eksportid kasutavad mudeli nime. Vali need grupis {{ui:Väljund}}.

| Nupp | Fail | Mis selles on |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: korrused, ruudustikud, iga terasdetail profiilina väljapressituna koos avade ja lõigetega, koosted, poldid ja ankurvardad, vundamendid ja iga armatuurivarras. Vt [IFC eksport](topic:ifc-export). |
| {{ui:NC-failid}} | `<name> NC.zip` | Üks DSTV `.nc1` fail detailimärgise kohta. Vt [NC-failide saatmine töökotta](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Kolm tabelit ühes failis: detailid, koosted ning poldid ja ankurvardad. Vt [Märgised ja materjalinimekiri](topic:marks-and-bom). |
| {{ui:Painutamine}} | `<name> bending schedule.csv` | Iga armatuurimärgis vundamentides. Vt [Vundamendid ja armatuur](topic:footings-and-rebar). |
| {{ui:Tööjoonis}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` sisaldab lehte iga detailimärgise kohta; {{ui:Laadi PDF alla}} annab praegu näidatud lehe (A3, kui sa ei valinud teist suurust). Vt [Tööjooniste tegemine](topic:shop-drawings). |
| {{ui:Joonised}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` või `.dxf`, mitu failis `<name> drawings DWG.zip` (või `DXF.zip`) | Plaanid, vaated ja koostejoonised valitud lehe suuruses; DWG ja DXF täissuuruses, 1 ühik = 1 mm paberil. Vt [Üldpaigutuse ja koostejoonised](topic:drawings). |

### Märkused CSV-failide kohta

- Need algavad baitjärjestusmärgiga, et tabelarvutusprogrammid loeksid täpitähti õigesti.
- Lahter, mis algab märgiga `=`, `+`, `-` või `@` (ja pole lihtne number), saab ette ülakoma, et tabelarvutusprogramm ei käivitaks seda valemina.
- Pikkused on millimeetrites ja kaalud kilogrammides.

### Märkused PDF-i kohta

PDF-i tekst kasutab standardset Helvetica fonti. Märgid, mida see ei sisalda (väljaspool Lääne-Euroopa tähestikku), trükitakse küsimärgina „?“ ja olekuriba ütleb, mitu neid oli.

## Ühikud

DetailCraft töötab kõikjal millimeetrites: ruudustikud, tasandid, koordinaadid, profiilid, avad ja kõik eksportid. Profiilinimed säilitavad avaldatud kuju (W12x50 on USA tähis, kuigi mõõtmed on näidatud mm-des). Tollisisestust ei ole veel.

## Võrgus ja võrguta

Avamine, salvestamine ja eksport toimuvad kõik brauseris, nii et need töötavad ühtemoodi koos ühendusega või ilma, kui DetailCraft on laadinud.

Et kasutada DetailCraftit hiljem ilma ühenduseta, vali rakenduse ribal {{ui:Salvesta võrguks}}, kui oled võrgus. Nupp loeb üles („Salvestan 3/20“) ja muutub siis nupuks {{ui:Valmis ka võrguta}}. Salvestatud koopia sisaldab 3D-graafika teeki (umbes 2.6 MB) ja seda abi, nii et kui see on salvestatud, töötavad 3D-vaade, kõik eksportid ja abi ka võrguta.

:::offline
Oled võrguta. Kui rakenduse ribal on {{ui:Valmis ka võrguta}}, töötavad avamine, salvestamine ja eksport tavapäraselt. Kui ei ole, jäta see vaheleht avatuks, ära laadi seda uuesti enne, kui oled jälle võrgus, ja salvesta mudel kohe.
:::

Pilvesalvestus ei ole veel saadaval ja töölauaversioone ei ole veel. Varunda oma `.detailcraft.json` failid samamoodi nagu iga teise töö faili. Rohkem: [Kuhu su failid lähevad](common:your-files).

## Salvestamata töö

DetailCraft hoiab mudelit ainult avatud vahekaardis. Kui sulged või laadid vahekaardi uuesti salvestamata muudatustega, küsib brauser, kas lahkuda lehelt; sõnastus on brauseri enda. Salvesta sageli klahviga {{key:Mod+S}}.
