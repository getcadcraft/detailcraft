---
title: Opna, vista og flytja út skrár
summary: Líkansskrá DetailCraft, hver útflutningsskrá sem hún skrifar, hvert skrárnar fara og hvað er ólíkt eftir vafra og tengingu.
keywords: opna, vista, flytja út, sækja, skrá, json, ifc, nc1, dstv, csv, pdf, zip, skráarsnið, flytja inn
from: 6fbc8e8f
---

DetailCraft hefur eina eigin skrá, líkanið, og fimm útflutningsskrár. Hver vistun og hver útflutningur er niðurhal. Ekkert er sent upp og ekkert er geymt á þjóni.

## Líkansskráin

Líkan í DetailCraft er vistað sem `<name>.detailcraft.json`, þar sem `<name>` er heiti líkansins í spjaldinu {{ui:Líkan}}. Í henni eru netlínur, kótar, burðarhlutar (með götum og úrtökum), tengingar og stillingar þeirra, undirstöður og sérsniðnu sniðin þín.

Hlutir, merkingar, boltar, suður og stengur eru ekki vistuð: DetailCraft reiknar þau út aftur úr líkaninu í hvert skipti sem það opnast. Þess vegna er líkanaskráin lítil.

### Vista

1. Skrifaðu heiti í reitinn {{ui:Heiti}} efst í spjaldinu {{ui:Líkan}}.
2. Veldu {{ui:Vista}} í hópnum {{ui:Skrá}} eða ýttu á {{key:Mod+S}}.
3. Vafrinn sækir `<name>.detailcraft.json`. Stöðustikan segir „Vistað … (sótt)“ og punkturinn fremst í titli vafraflipans hverfur.

Hver vistun er nýtt niðurhal. Vafrinn skrifar ekki yfir skrána sem þú opnaðir; eftir stillingum bætir hann tölu við heitið, til dæmis `Frame (1).detailcraft.json`, eða spyr hvar eigi að vista. Geymdu þínar eigin útgáfur með því að endurnefna niðurhölin.

:::chromium
Chrome og Edge vista í möppuna Niðurhal nema **Spyrja hvar á að vista hverja skrá áður en hún er sótt** sé virkt í niðurhalsstillingum vafrans. Kveiktu á því ef þú vilt velja möppu og skráarheiti í hvert skipti.
:::

:::firefox
Firefox vistar í möppuna Niðurhal, eða spyr í hvert skipti ef **Spyrja alltaf hvar skrár eru vistaðar** er virkt í stillingum þess.
:::

:::safari
Safari vistar í möppuna Niðurhal. Til að breyta möppunni skaltu opna **Safari, Stillingar, Almennt, Staðsetning niðurhals skráa**.
:::

### Opna

1. Veldu {{ui:Opna}} í hópnum {{ui:Skrá}} eða ýttu á {{key:Mod+O}}.
2. Veldu `.detailcraft.json`-skrá.

Þú getur líka dregið skrána úr {{pick:mac=Finder|windows=File Explorer|linux=skráastjóranum þínum}} og sleppt henni á sýnina. Sýnin segir „Slepptu DetailCraft-líkani til að opna það“ meðan þú dregur.

Ef opna líkanið hefur óvistaðar breytingar spyr DetailCraft fyrst: {{ui:Hætta við}}, {{ui:Henda breytingum}} eða {{ui:Vista fyrst}}.

DetailCraft athugar hvern reit skrárinnar áður en hann er notaður. Það sem ekki er hægt að nota er sleppt og stöðustikan segir hvað, til dæmis „2 burðarhlutar voru ógildir og var sleppt.“ Líkani sem nýrri útgáfa DetailCraft vistaði er hafnað með skilaboðum í stað þess að vera opnað hálfrétt.

### Hvað það opnar

Eigin líkanaskrár (`.json`, allt að 50 MB) og IFC-skrár (`.ifc`, IFC2X3 eða IFC4, allt að 200 MB). IFC-skrá, opnuð eða sótt með {{ui:Flytja inn IFC}}, verður að nýju líkani af bitum, súlum, burðarhlutum, plötum, netlínum og kótum, með götum og úrtökum skornum í þá og boltum sem lausum boltum; skýrsla listar það sem var sleppt. Sjá [IFC-útflutningur](topic:ifc-export#import). Það opnar ekki enn DWG, DXF eða líkan úr öðru teikniforriti; ef reynt er birtist „DetailCraft opnar eigin líkön (.detailcraft.json) og IFC-skrár (.ifc).“

## Týnd vinna, nýlegar skrár og skjáborðsforritið

- Á meðan líkanið hefur breytingar sem þú hefur ekki vistað geymir DetailCraft afrit í þessum vafra. Ef flipinn eða vafrinn hættir áður en þú vistar spyr DetailCraft næst þegar þú opnar það **Endurheimta vinnuna þína?**: endurheimtu afritið eða slepptu því. Sjá [Endurheimta vinnuna þína](common:recover).
- Líkön sem þú opnaðir nýlega birtast á upphafsskjánum þegar vafrinn leyfir DetailCraft að opna þau aftur; smelltu á eitt til að opna það.
- Í skjáborðsforritinu skrifar {{ui:Vista}} líkanið aftur í skrána sem þú opnaðir (í vafranum sækir það afrit), og tvísmellur á DetailCraft-líkan eða IFC-skrá opnar hana í DetailCraft.

## Útflutningur

Allar útflutningsskrár nota heiti líkansins. Veldu þær í hópnum {{ui:Útkoma}}.

| Hnappur | Skrá | Hvað er í henni |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: hæðir, netlínur, sérhver stálhluti sem sniðútdráttur með götum og úrtökum, samsetningar, boltar og akkerisstengur, undirstöður og sérhver stöng. Sjá [Flytja út IFC](topic:ifc-export). |
| {{ui:NC-skrár}} | `<name> NC.zip` | Ein DSTV `.nc1`-skrá fyrir hverja hlutamerkingu. Sjá [Senda NC-skrár á verkstæðið](topic:nc-export). |
| {{ui:Efnislisti}} | `<name> BOM.csv` | Þrjár töflur í einni skrá: hlutar, samsetningar og boltar og akkerisstengur. Sjá [Merkingar og efnislistinn](topic:marks-and-bom). |
| {{ui:Beygjulisti}} | `<name> bending schedule.csv` | Sérhver stangarmerking í undirstöðunum. Sjá [Undirstöður og steypustyrktarjárn](topic:footings-and-rebar). |
| {{ui:Verkstæðisteikning}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` geymir eitt blað fyrir hverja hlutamerkingu; {{ui:Sækja PDF}} gefur blaðið sem sést (A3 nema þú hafir valið aðra stærð). Sjá [Gerð verkstæðisteikninga](topic:shop-drawings). |
| {{ui:Teikningar}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` eða `.dxf`, nokkrar í `<name> drawings DWG.zip` (eða `DXF.zip`) | Grunnmyndir, útlit og samsetningarteikningar á þeirri blaðstærð sem þú valdir; DWG og DXF í fullri stærð, 1 eining = 1 mm á pappírnum. Sjá [Grunnmyndir og samsetningarteikningar](topic:drawings). |

### Athugasemdir um CSV-skrár

- Þær byrja á merki um bætaröð (byte-order mark) svo að töflureiknar lesi stafi með hreim rétt.
- Reitur sem byrjar á `=`, `+`, `-` eða `@` (og er ekki venjuleg tala) fær upphafskommu, svo töflureiknir keyri hann aldrei sem formúlu.
- Lengdir eru í millimetrum og þyngdir í kílógrömmum.

### Athugasemdir um PDF-skrána

Texti í PDF-skránni notar staðlaða Helvetica-leturgerð. Stafir sem hún hefur ekki (utan vesturevrópska stafasettsins) prentast sem „?“, og stöðustikan segir þér hversu margir þeir eru.

## Einingar

DetailCraft vinnur í millimetrum alls staðar: netlínur, kótar, hnit, snið, göt og allar útflutningsskrár. Heiti sniða halda birtu formi sínu (W12x50 er bandarískt auðkenni þótt mál þess séu sýnd í mm). Enn er engin innsláttur í breskum einingum (imperial).

## Á netinu og án nettengingar

Opnun, vistun og útflutningur fara fram í vafranum þínum, svo þau virka eins með eða án nettengingar þegar DetailCraft hefur hlaðist.

Til að nota DetailCraft síðar án nettengingar skaltu velja {{ui:Vista til notkunar án nettengingar}} í forritastikunni meðan þú ert á netinu. Hnappurinn telur upp („Vistar 3 af 20“) og sýnir síðan {{ui:Tilbúið án nettengingar}}. Vistaða afritið inniheldur þrívíddarsafnið (um 2.6 MB) og þessa hjálp, þannig að þegar það er vistað virka þrívíddarsýnin, allur útflutningur og hjálpin án nettengingar. Nánar, og hvað þarf enn nettengingu: [Vinna án nettengingar](common:offline).

:::offline
Þú ert án nettengingar. Ef forritastikan sýnir {{ui:Tilbúið án nettengingar}} virka opnun, vistun og útflutningur eins og venjulega. Ef ekki, hafðu flipann opinn, ekki endurhlaða hann fyrr en þú ert aftur á netinu, og vistaðu líkanið núna.
:::

Skýjavistun er ekki enn í boði og engar skjáborðsútgáfur eru enn til. Taktu öryggisafrit af `.detailcraft.json`-skránum þínum eins og af hvaða annarri vinnuskrá sem er. Meira í [Hvert skrárnar þínar fara](common:your-files).

## Óvistuð vinna

DetailCraft geymir líkanið aðeins í opna flipanum. Ef þú lokar flipanum eða endurhleður honum með óvistuðum breytingum spyr vafrinn hvort þú viljir yfirgefa síðuna; orðalagið er vafrans sjálfs. Vistaðu oft með {{key:Mod+S}}.
