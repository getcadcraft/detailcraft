---
title: Failide avamine, salvestamine ja eksportimine
summary: DetailCraft-i mudelifail, iga eksport, kuhu failid lähevad ning mis erineb brauseri ja ühenduse järgi.
keywords: ava, salvesta, ekspordi, laadi alla, fail, json, ifc, nc1, dstv, csv, pdf, zip, vormingud, impordi
from: bd715ea3
---

DetailCraft-il on oma üks fail, mudel, ja viis eksporti. Iga salvestamine ja iga eksport on allalaadimine. Midagi ei laadita üles ega hoita serveris.

## Mudelifail

DetailCraft-i mudel salvestatakse nimega `<name>.detailcraft.json`, kus `<name>` on mudeli nimi paneelil {{ui:Mudel}}. Fail sisaldab ruudustikke, tasandeid, elemente (koos nende aukude ja väljalõigetega), ühendusi ja nende sätteid, vundamente ning sinu kohandatud profiile.

Detailid, detailimärgised, poldid, keevised ja armatuurvardad ei ole salvestatud: DetailCraft arvutab need mudelist uuesti iga kord, kui see avaneb. Sellepärast on mudelifail väike.

### Salvesta

1. Sisesta nimi paneeli {{ui:Mudel}} ülaosas olevale väljale {{ui:Nimi}}.
2. Vali rühmas {{ui:Fail}} {{ui:Salvesta}} või vajuta {{key:Mod+S}}.
3. Brauser laadib alla faili `<name>.detailcraft.json`. Olekuriba ütleb „Salvestatud … (allalaaditud)“ ja punkt brauseri vahekaardi pealkirja alguses kaob.

Iga salvestamine on uus allalaadimine. Brauser ei kirjuta avatud faili üle; sõltuvalt oma sätetest lisab ta nimele numbri, näiteks `Frame (1).detailcraft.json`, või küsib, kuhu salvestada. Hoia oma versioonid alles, nimetades allalaadimised ümber.

:::chromium
Chrome ja Edge salvestavad failid sinu allalaadimiste kausta, välja arvatud juhul, kui brauseri allalaadimise sätetes on sisse lülitatud **Ask where to save each file before downloading** („Küsi enne iga faili allalaadimist, kuhu see salvestada“). Lülita see sisse, kui soovid igal korral valida kausta ja failinime.
:::

:::firefox
Firefox salvestab failid sinu allalaadimiste kausta või küsib igal korral, kui sätetes on sisse lülitatud **Always ask you where to save files** („Küsi alati, kuhu failid salvestada“).
:::

:::safari
Safari salvestab failid allalaadimiste kausta. Kausta muutmiseks ava **Safari, Sätted, Üldine, Failide allalaadimise asukoht**.
:::

### Ava

1. Vali rühmas {{ui:Fail}} {{ui:Ava}} või vajuta {{key:Mod+O}}.
2. Vali `.detailcraft.json`-fail.

Või lohista fail asukohast {{pick:mac=Finder|windows=File Explorer|linux=sinu failihaldur}} ja lase see vaatesse. Lohistamise ajal ütleb vaade „Lohista DetailCraft-i mudel siia, et see avada“.

Kui avatud mudelil on salvestamata muudatusi, küsib DetailCraft enne: {{ui:Loobu}}, {{ui:Loobu muudatustest}} või {{ui:Salvesta esmalt}}.

DetailCraft kontrollib faili iga välja enne selle kasutamist. Kõik, mida ta ei saa kasutada, jäetakse välja ja olekuriba ütleb, mis see oli, näiteks „2 elementi ei olnud korrektsed ja jäeti välja.“ Uuema DetailCraft-iga salvestatud mudel keeldutakse avamast ja kuvatakse teade, selle asemel et avada pooleldi.

### Mida see avab

Oma mudelifaile (`.json`, kuni 50 MB) ja IFC-faile (`.ifc`, IFC2X3 või IFC4, kuni 200 MB). IFC-fail, mis avatakse või tuuakse sisse nupuga {{ui:Impordi IFC}}, muutub uueks mudeliks oma talade, postide, elementide, plaatide, ruudustike ja tasandite põhjal, kusjuures augud ja väljalõiked on sisse lõigatud ning poldid on vabade poltidena; aruanne loetleb, mis jäeti välja. Vt [IFC-eksport](topic:ifc-export#import). DWG-d, DXF-e ega ühegi teise detailimisprogrammi mudeleid see veel ei ava; proovimisel ilmub teade „DetailCraft avab ainult oma mudeleid (.detailcraft.json) ja IFC-faile (.ifc).“

## Kadunud töö, hiljutised failid, töölauarakendus

- Kui mudelil on salvestamata muudatusi, hoiab DetailCraft selle brauseris koopiat. Kui vahekaart või brauser lakkab enne salvestamist, küsib DetailCraft järgmisel avamisel **Kas taastada sinu töö?**: taasta koopia või loobu sellest. Vt [Töö taastamine](common:recover).
- Hiljuti avatud mudelid on alustusekraanil loetletud, kui brauser lubab DetailCraft-il need uuesti avada; klõpsa ühel neist, et see uuesti avada.
- Töölauarakenduses kirjutab {{ui:Salvesta}} mudeli tagasi avatud faili (brauseris laadib alla koopia) ning DetailCraft-i mudeli või IFC-faili topeltklõps avab selle DetailCraft-is.

## Eksportid

Kõik eksportid kasutavad mudeli nime. Vali need rühmas {{ui:Väljund}}.

| Nupp | Fail | Mis on sees |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: tasandid, ruudustikud, iga terasdetail profiilina koos aukude ja väljalõigetega, koostud, poldid ja ankurvardad, vundamendid ning iga armatuurvarras. Vt [IFC-eksport](topic:ifc-export). |
| {{ui:NC-failid}} | `<name> NC.zip` | Üks DSTV-fail `.nc1` iga detailimärgise kohta. Vt [NC-failide saatmine tootmisse](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Kolm tabelit ühes failis: detailid, koostud ning poldid ja ankurvardad. Vt [Märgised ja materjalinimekiri](topic:marks-and-bom). |
| {{ui:Painutamine}} | `<name> bending schedule.csv` | Iga varda märgis vundamentides. Vt [Vundamendid ja armatuur](topic:footings-and-rebar). |
| {{ui:Tööjoonis}} | `<name> <mark>.pdf` | Üks leht (A3, kui sa ei valinud teist suurust) valitud detailile (I-profiilid ja plaadid). Vt [Tööjoonise tegemine](topic:shop-drawings). |
| {{ui:Joonised}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` või `.dxf`, mitu failis `<name> drawings DWG.zip` (või `DXF.zip`) | Plaanid, vaated ja koostejoonised valitud lehemõõdus; DWG ja DXF täismõõdus, 1 ühik = 1 mm paberil. Vt [Üldpaigutuse ja koostejoonised](topic:drawings). |

### Märkused CSV-failide kohta

- Need algavad baitjärjestuse märgiga, et tabelarvutusprogrammid loeksid täpitähti õigesti.
- Lahter, mis algab märgiga `=`, `+`, `-` või `@` (ja ei ole lihtne arv), saab ees ülakoma, et tabelarvutus seda valemina ei käivitaks.
- Pikkused on mm ja kaalud kg.

### Märkused PDF-i kohta

PDF-i tekst kasutab standardset Helvetica fonti. Märgid, mida sellel ei ole (väljaspool Lääne-Euroopa märgistikku), trükitakse kui „?“ ja olekuriba ütleb, mitu neid on.

## Ühikud

DetailCraft töötab kõikjal millimeetrites: ruudustikud, tasandid, koordinaadid, profiilid, augud ja iga eksport. Profiilinimed säilitavad avaldatud kuju (W12x50 on USA tähis, kuigi selle mõõtmed on näidatud mm-des). Tolli-naela sisestust veel ei ole.

## Võrgus ja võrguta

Avamine, salvestamine ja eksportimine toimuvad kõik sinu brauseris, seega töötavad need ühtemoodi ühendusega või ilma, kui DetailCraft on laaditud.

Et DetailCraft-i hiljem ilma ühenduseta kasutada, vali rakenduse ribal võrgus olles {{ui:Salvesta võrguks}}. Nupp loeb „Salvestamine 3 of 20“ ja seejärel loeb {{ui:Valmis ka võrguta}}. Salvestatud koopia sisaldab 3D-graafika teeki (umbes 2.6 MB) ja seda abi, seega kui see on salvestatud, töötavad 3D-vaade, iga eksport ja abi ilma võrguta. Üksikasjad ja see, mis vajab ikka ühendust: [Töö võrguta](common:offline).

:::offline
Oled võrguta. Kui rakenduse riba näitab {{ui:Valmis ka võrguta}}, töötavad avamine, salvestamine ja eksportimine tavapäraselt. Kui ei näita, jäta see vahekaart lahti, ära laadi seda uuesti enne, kui oled taas võrgus, ja salvesta oma mudel kohe.
:::

Pilvesalvestus ei ole veel saadaval ja töölaudversioone ei ole veel. Varunda oma `.detailcraft.json` failid nagu iga muu töö fail. Lisaks: [Kuhu sinu failid lähevad](common:your-files).

## Salvestamata töö

DetailCraft hoiab mudelit ainult avatud vahekaardil. Kui sulged või laadid vahekaardi salvestamata muudatustega, küsib brauser, kas lahkuda lehelt; selle sõnastus on brauseri enda. Salvesta sageli klahviga {{key:Mod+S}}.
