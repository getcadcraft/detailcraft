---
title: Hap, ruaj dhe eksporto skedarët
summary: Skedari i modelit DetailCraft, çdo eksport që shkruan, ku shkojnë skedarët dhe çfarë ndryshon sipas shfletuesit dhe lidhjes.
keywords: hap, ruaj, eksporto, shkarko, skedar, json, ifc, nc1, dstv, csv, pdf, zip, formate, importo
from: 6fbc8e8f
---

DetailCraft ka një skedar të vetin, modelin, dhe pesë eksporte. Çdo ruajtje dhe çdo eksport është një shkarkim. Asgjë nuk ngarkohet dhe asgjë nuk mbahet në server.

## Skedari i modelit

Një model DetailCraft ruhet si `<name>.detailcraft.json`, ku `<name>` është emri i modelit në panelin {{ui:Modeli}}. Ai përmban rrjetet, nivelet, elementët (me vrimat dhe prerjet e tyre), lidhjet dhe cilësimet e tyre, themelet dhe profilet e tua të personalizuara.

Pjesët, shenjat, bulonat, saldimet dhe shufrat nuk ruhen: DetailCraft i rillogarit nga modeli sa herë hapet. Ndaj një skedar modeli është i vogël.

### Ruaj

1. Shkruaj një emër në fushën {{ui:Emri}} në krye të panelit {{ui:Modeli}}.
2. Zgjidh {{ui:Ruaj}} në grupin {{ui:Skedar}}, ose shtyp {{key:Mod+S}}.
3. Shfletuesi shkarkon `<name>.detailcraft.json`. Shiriti i statusit shkruan "U ruajt … (u shkarkua)", dhe pika në fillim të titullit të skedës së shfletuesit zhduket.

Çdo ruajtje është një shkarkim i ri. Shfletuesi nuk e mbishkruan skedarin që hape; sipas cilësimeve të tij shton një numër në emër, si `Frame (1).detailcraft.json`, ose pyet ku ta ruajë. Mbaje versionet e tua duke i riemërtuar shkarkimet.

:::chromium
Chrome dhe Edge ruajnë në dosjen tënde Shkarkimet, përveç nëse **Pyet ku të ruhet çdo skedar para shkarkimit** është aktiv te cilësimet e shkarkimit të shfletuesit. Aktivizoje nëse dëshiron të zgjedhësh një dosje dhe emër skedari çdo herë.
:::

:::firefox
Firefox ruan në dosjen tënde Shkarkimet, ose pyet çdo herë nëse **Gjithmonë pyet ku të ruhen skedarët** është aktiv te cilësimet e tij.
:::

:::safari
Safari ruan në dosjen tënde Shkarkimet. Për ta ndryshuar dosjen, hap **Safari, Cilësimet, Të përgjithshme, Vendi i shkarkimit të skedarëve**.
:::

### Hap

1. Zgjidh {{ui:Hap}} në grupin {{ui:Skedar}}, ose shtyp {{key:Mod+O}}.
2. Zgjidh një skedar `.detailcraft.json`.

Ose tërhiq skedarin nga {{pick:mac=Finder|windows=File Explorer|linux=menaxheri juaj i skedarëve}} dhe lëshoje mbi pamje. Pamja shkruan "Lësho një model DetailCraft për ta hapur" ndërsa e tërheq.

Nëse modeli i hapur ka ndryshime të pa ruajtura, DetailCraft pyet së pari: {{ui:Anulo}}, {{ui:Hidh ndryshimet}} ose {{ui:Ruaj së pari}}.

DetailCraft kontrollon çdo fushë të skedarit përpara se ta përdorë. Çdo gjë që nuk mund ta përdorë lihet jashtë dhe shiriti i statusit thotë çfarë, për shembull "2 elemente nuk ishin të vlefshme dhe u lanë jashtë." Një model i ruajtur nga një DetailCraft më i ri refuzohet me një mesazh, në vend që të hapet gjysmë i saktë.

### Çfarë hapet

Modelet e veta (`.json`, deri në 50 MB) dhe skedarët IFC (`.ifc`, IFC2X3 ose IFC4, deri në 200 MB). Një skedar IFC, i hapur ose i sjellë me {{ui:Importo IFC}}, bëhet një model i ri me trarët, kolonat, elementët, pllakat, rrjetet dhe nivelet e tij, me vrimat dhe prerjet e prera në to dhe bulonat e tij si bulona të lirë; një raport shpjegon çfarë u la jashtë. Shih [Eksporti IFC](topic:ifc-export#import). Nuk hap ende DWG, DXF ose modelin e ndonjë programi tjetër detajimi; përpjekja shfaq "DetailCraft hap modelet e veta (.detailcraft.json) dhe skedarët IFC (.ifc)."

## Punë e humbur, skedarë të fundit, aplikacioni desktop

- Ndërsa modeli ka ndryshime që nuk i ke ruajtur, DetailCraft mban një kopje në këtë shfletues. Nëse skeda ose shfletuesi ndalon përpara se të ruash, herën tjetër që hap DetailCraft pyet **Rikthe punën tënde?**: rikthe kopjen, ose lëre të shkojë. Shih [Rikthe punën tënde](common:recover).
- Modelet që hape së fundmi shfaqen në ekranin e fillimit kur shfletuesi lejon DetailCraft t'i hapë përsëri; kliko një për ta rihapur.
- Në aplikacionin desktop, {{ui:Ruaj}} e shkruan modelin përsëri te skedari që hape (në shfletues shkarkon një kopje), dhe klikimi dy herë mbi një model DetailCraft ose skedar IFC e hap atë në DetailCraft.

## Eksportet

Të gjitha eksportet përdorin emrin e modelit. Zgjidhi në grupin {{ui:Dalja}}.

| Buton | Skedari | Çfarë ka brenda |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: katet, rrjetet, çdo pjesë çeliku si ekstrudim profili me vrimat dhe prerjet e saj, montimet, bulonat dhe shufrat e ankorimit, themelet dhe çdo shufër. Shih [Eksporto IFC](topic:ifc-export). |
| {{ui:Skedarët NC}} | `<name> NC.zip` | Një skedar DSTV `.nc1` për çdo shenjë pjese. Shih [Dërgo skedarët NC në punëtori](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Tri tabela në një skedar: pjesët, montimet, dhe bulonat me shufrat e ankorimit. Shih [Shenjat dhe lista e materialeve](topic:marks-and-bom). |
| {{ui:Përkulja}} | `<name> bending schedule.csv` | Çdo shenjë shufre në themele. Shih [Themelet dhe armatura](topic:footings-and-rebar). |
| {{ui:Vizatimi i punëtorisë}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` mban një fletë për çdo shenjë pjese; {{ui:Shkarko PDF}} jep atë që shihet (A3 përveç nëse zgjodhe madhësi tjetër). Shih [Bëj vizatime punëtorie](topic:shop-drawings). |
| {{ui:Vizatimet}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` ose `.dxf`, disa në `<name> drawings DWG.zip` (ose `DXF.zip`) | Planimetritë, fasadat dhe vizatimet e montimit në madhësinë e fletës që zgjodhe; DWG dhe DXF në madhësi të plotë, 1 njësi = 1 mm në letër. Shih [Vizatimet e përgjithshme të vendosjes dhe montimit](topic:drawings). |

### Shënime për skedarët CSV

- Fillojnë me një shenjë rendi bajtësh, që programet e fletëllogaritjes të lexojnë saktë shkronjat me theks.
- Një qelizë që fillon me `=`, `+`, `-` ose `@` (dhe nuk është numër i thjeshtë) merr një apostrof në fillim, që fletëllogaritja të mos e ekzekutojë si formulë.
- Gjatësitë janë në milimetra dhe peshat në kilogramë.

### Shënime për PDF-në

Teksti në PDF përdor shkronjat standarde Helvetica. Karakteret që nuk i ka (jashtë grupit Evropian Perëndimor) shtypen si "?", dhe shiriti i statusit të tregon sa janë.

## Njësitë

DetailCraft punon në milimetra kudo: rrjetet, nivelet, koordinatat, profilet, vrimat dhe çdo eksport. Emrat e profileve ruajnë formën e tyre të publikuar (W12x50 është një përcaktim amerikan edhe pse dimensionet shfaqen në mm). Ende nuk ka hyrje imperiale.

## Online dhe offline

Hapja, ruajtja dhe eksportimi ndodhin të gjitha në shfletuesin tënd, kështu funksionojnë njëlloj me ose pa lidhje, pasi DetailCraft të jetë ngarkuar.

Për ta përdorur DetailCraft pa lidhje më vonë, zgjidh {{ui:Ruaje për jashtë linje}} në shiritin e aplikacionit ndërsa je online. Butoni numëron ("Po ruhet 3 nga 20") dhe pastaj shkruan {{ui:Gati jashtë linje}}. Kopja e ruajtur përfshin bibliotekën grafike 3D (rreth 2.6 MB) dhe këtë ndihmë, kështu që pasi ruhet, pamja 3D, çdo eksport dhe ndihma funksionojnë offline. Detajet, dhe ç'kërkon ende lidhje: [Puna offline](common:offline).

:::offline
Je offline. Nëse shiriti i aplikacionit shfaq {{ui:Gati jashtë linje}}, hapja, ruajtja dhe eksportimi funksionojnë si zakonisht. Nëse jo, mbaje këtë skedë të hapur, mos e rifresko derisa të rikthehesh online, dhe ruaje modelin tani.
:::

Ruajtja në cloud nuk është ende e disponueshme, dhe nuk ka ende versione desktop. Bëj kopje rezervë të skedarëve `.detailcraft.json` ashtu si bën me çdo skedar tjetër pune. Më shumë te [Ku shkojnë skedarët e tu](common:your-files).

## Punë e pa ruajtur

DetailCraft e mban modelin vetëm në skedën e hapur. Nëse mbyll ose rifreskon skedën me ndryshime të pa ruajtura, shfletuesi pyet nëse do të largohesh nga faqja; fjalët janë ato të shfletuesit. Ruaje shpesh me {{key:Mod+S}}.
