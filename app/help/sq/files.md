---
title: Hapja, ruajtja dhe eksportimi i skedarëve
summary: Skedari i modelit DetailCraft, çdo eksport që shkruan, ku shkojnë skedarët, dhe çfarë ndryshon sipas shfletuesit dhe lidhjes.
keywords: hap, ruaj, eksporto, shkarko, skedar, json, ifc, nc1, dstv, csv, pdf, zip, formatet, importo
from: bd715ea3
---

DetailCraft ka një skedar të vetin, modelin, dhe pesë eksportime. Çdo ruajtje dhe çdo eksportim është një shkarkim. Asgjë nuk ngarkohet, dhe asgjë nuk mbahet në një server.

## Skedari i modelit

Një model DetailCraft ruhet si `<name>.detailcraft.json`, ku `<name>` është emri i modelit në panelin {{ui:Model}}. Ai përmban rrjetet, nivelet, elementët (me vrimat dhe prerjet e tyre), lidhjet dhe cilësimet e tyre, themelet dhe profilet e tua të personalizuara.

Pjesët, shenjat, bulonat, saldimet dhe shufrat nuk ruhen: DetailCraft i llogarit përsëri nga modeli sa herë hapet. Prandaj një skedar modeli është i vogël.

### Ruaj

1. Shkruaj një emër në fushën {{ui:Name}} në krye të panelit {{ui:Model}}.
2. Zgjidh {{ui:Save}} te grupi {{ui:File}}, ose shtyp {{key:Mod+S}}.
3. Shfletuesi shkarkon `<name>.detailcraft.json`. Shiriti i statusit shfaq "Ruajtur … (shkarkuar)", dhe pika në fillim të titullit të skedës së shfletuesit zhduket.

Çdo ruajtje është një shkarkim i ri. Shfletuesi nuk e mbishkruan skedarin që hapët; sipas cilësimeve të tij shton një numër te emri, si `Frame (1).detailcraft.json`, ose pyet se ku të ruhet. Mbaji versionet e tua duke riemërtuar shkarkimet.

:::chromium
Chrome dhe Edge ruajnë në dosjen tënde Downloads, përveç nëse **Pyet ku të ruhet çdo skedar përpara shkarkimit** është aktiv në cilësimet e shkarkimit të shfletuesit. Aktivizoje nëse dëshiron të zgjedhësh një dosje dhe emër skedari çdo herë.
:::

:::firefox
Firefox ruan në dosjen Downloads, ose pyet çdo herë nëse **Pyet gjithmonë ku të ruhen skedarët** është aktiv në cilësimet e tij.
:::

:::safari
Safari ruan në dosjen Downloads. Për ta ndryshuar dosjen, hap **Safari, Cilësimet, Të përgjithshme, Vendndodhja e shkarkimit të skedarëve**.
:::

### Hap

1. Zgjidh {{ui:Open}} te grupi {{ui:File}}, ose shtyp {{key:Mod+O}}.
2. Zgjidh një skedar `.detailcraft.json`.

Ose tërhiq skedarin nga {{pick:mac=Finder|windows=File Explorer|linux=menaxheri juaj i skedarëve}} dhe lëshoje mbi pamje. Pamja shfaq "Lësho një model DetailCraft për ta hapur" ndërkohë që tërheq.

Nëse modeli i hapur ka ndryshime të pa ruajtura, DetailCraft pyet së pari: {{ui:Cancel}}, {{ui:Discard changes}} ose {{ui:Save first}}.

DetailCraft kontrollon çdo fushë të një skedari përpara se ta përdorë. Çfarëdo që nuk mund të përdoret lihet jashtë, dhe shiriti i statusit thotë çfarë, p.sh. "2 elementë nuk ishin të vlefshëm dhe u lanë jashtë." Një model i ruajtur nga një DetailCraft më i ri refuzohet me një mesazh, në vend që të hapet gjysmë i saktë.

### Çfarë hapet

Modelet e veta (`.json`, deri në 50 MB) dhe skedarët IFC (`.ifc`, IFC2X3 ose IFC4, deri në 200 MB). Një skedar IFC, i hapur ose i sjellë me {{ui:Import IFC}}, bëhet një model i ri me trarët, kolonat, elementët, pllakat, rrjetet dhe nivelet e tij, me vrimat dhe prerjet e prera në to dhe bulonat e tij si bulona të lirë; një raport liston çfarë u la jashtë. Shih [Eksportimi IFC](topic:ifc-export#import). Nuk hap ende DWG, DXF ose modelin e ndonjë programi tjetër detajimi; përpjekja shfaq "DetailCraft hap modelet e veta (.detailcraft.json) dhe skedarët IFC (.ifc)."

## Puna e humbur, skedarët e fundit, aplikacioni desktop

- Ndërsa modeli ka ndryshime që nuk i ke ruajtur, DetailCraft mban një kopje në këtë shfletues. Nëse skeda ose shfletuesi ndalon përpara se të ruash, herën tjetër që hap DetailCraft pyet **Rikthe punën tënde?**: rikthe kopjen, ose lëre të shkojë. Shih [Rikthe punën tënde](common:recover).
- Modelet që ke hapur së fundi listohen në ekranin e fillimit kur shfletuesi e lejon DetailCraft t'i hapë përsëri; kliko një për ta rihapur.
- Në aplikacionin desktop, {{ui:Save}} e shkruan modelin përsëri te skedari që hape (në shfletues shkarkon një kopje), dhe dyklikimi mbi një model DetailCraft ose një skedar IFC e hap në DetailCraft.

## Eksportimet

Të gjitha eksportimet e përdorin emrin e modelit. Zgjidhi te grupi {{ui:Output}}.

| Butoni | Skedari | Çfarë përmban |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: katet, rrjetet, çdo pjesë çeliku si ekstruzion profili me vrimat dhe prerjet e saj, montimet, bulonat dhe shufrat e ankorimit, themelet dhe çdo shufër. Shih [Eksporto IFC](topic:ifc-export). |
| {{ui:NC files}} | `<name> NC.zip` | Një skedar DSTV `.nc1` për çdo shenjë pjese. Shih [Dërgo skedarët NC në punëtori](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Tri tabela në një skedar: pjesët, montimet, dhe bulonat dhe shufrat e ankorimit. Shih [Shenjat dhe lista e materialeve](topic:marks-and-bom). |
| {{ui:Bending}} | `<name> bending schedule.csv` | Çdo shenjë shufre në themelet. Shih [Themelet dhe armatura](topic:footings-and-rebar). |
| {{ui:Shop drawing}} | `<name> <mark>.pdf` | Një fletë (A3 përveç nëse zgjodhe një madhësi tjetër) për pjesën e zgjedhur (profile I dhe pllaka). Shih [Bëj një vizatim punëtorie](topic:shop-drawings). |
| {{ui:Drawings}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` ose `.dxf`, disa në `<name> drawings DWG.zip` (ose `DXF.zip`) | Planimetritë, fasadat dhe vizatimet e montimit në madhësinë e fletës që zgjodhe; DWG dhe DXF në madhësi të plotë, 1 njësi = 1 mm në letër. Shih [Vizatimet e përgjithshme të vendosjes dhe montimit](topic:drawings). |

### Shënime për skedarët CSV

- Fillojnë me një shenjë rendi bajtesh, që programet e fletëllogaritjes ti lexojnë saktë shkronjat me theks.
- Një qelizë që fillon me `=`, `+`, `-` ose `@` (dhe nuk është një numër i thjeshtë) merr një apostrof në fillim, që fletëllogaritësi kurrë ta ekzekutojë si formulë.
- Gjatësitë janë në milimetra dhe peshat në kilogramë.

### Shënime për PDF-in

Teksti në PDF përdor shkronjën standarde Helvetica. Karakteret që nuk i ka (jashtë grupit Evropian Perëndimor) shtypen si "?", dhe shiriti i statusit thotë sa janë.

## Njësitë

DetailCraft punon në milimetra kudo: rrjetet, nivelet, koordinatat, profilet, vrimat dhe çdo eksport. Emrat e profileve ruajnë formën e tyre të publikuar (W12x50 është një emërtim amerikan edhe pse dimensionet shfaqen në mm). Ende nuk ka hyrje në njësi imperiale.

## Online dhe offline

Hapja, ruajtja dhe eksportimi ndodhin të gjitha në shfletuesin tënd, kështu që funksionojnë njësoj me ose pa lidhje, sapo DetailCraft është ngarkuar.

Për ta përdorur DetailCraft më vonë pa asnjë lidhje, zgjidh {{ui:Save for offline}} në shiritin e aplikacionit ndërkohë që je online. Butoni numëron ("Po ruhet 3 nga 20") dhe pastaj shfaq {{ui:Offline ready}}. Kopja e ruajtur përfshin bibliotekën e grafikës 3D (rreth 2.6 MB) dhe këtë ndihmë, kështu që sapo ruhet, pamja 3D, çdo eksport dhe ndihma funksionojnë offline. Detajet, dhe çfarë ka ende nevojë për lidhje: [Puna offline](common:offline).

:::offline
Je offline. Nëse shiriti i aplikacionit shfaq {{ui:Offline ready}}, hapja, ruajtja dhe eksportimi funksionojnë si zakonisht. Nëse jo, mbaje këtë skedë të hapur, mos e rifresko derisa të kthehesh online, dhe ruaje modelin tani.
:::

Ruajtja në cloud nuk është ende e disponueshme, dhe nuk ka ende versione desktop. Bëj kopje rezervë të skedarëve `.detailcraft.json` ashtu si bën me çdo skedar tjetër pune. Më shumë te [Ku shkojnë skedarët e tu](common:your-files).

## Puna e pa ruajtur

DetailCraft mban modelin vetëm në skedën e hapur. Nëse mbyll ose rifreskon skedën me ndryshime të pa ruajtura, shfletuesi pyet nëse do të largohesh nga faqja; fjalët e tij janë të shfletuesit. Ruaje shpesh me {{key:Mod+S}}.
