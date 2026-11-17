---
title: Eksporto IFC për koordinim
summary: Shkruan një skedar IFC4 të gjithë modelit, çelik, bulona, themele dhe armaturë, për ta ndarë me arkitektët, inxhinierët dhe programe të tjera.
keywords: ifc, ifc4, ifc2x3, bim, eksport, import, importo ifc, vrima, bulona, bulona të lirë, hapje, lidhëse, koordinim, shkëmbim modeli, step, openbim, përplasje, shikues
from: cfcb0cd6
---

Eksporti IFC shkruan gjithë modelin si një skedar të vetëm IFC4 që mund ta hapin programet BIM dhe shikuesit IFC.

## Eksporto

1. Zgjidh {{ui:IFC}} te grupi {{ui:Output}}.
2. Shfletuesi shkarkon `<name>.ifc`. Shiriti i gjendjes thotë çfarë u fut, për shembull: "IFC4 u eksportua: 25 pjesë, 88 lidhës, 7 themele, 132 shufra armature."

Nëse modeli nuk ka pjesë, themele ose shufra, shiriti i gjendjes thotë: "Asgjë për të eksportuar ende."

## Çfarë ka në skedar

| Në DetailCraft | Në skedarin IFC |
|---|---|
| Çdo nivel | Një kat ndërtese (IfcBuildingStorey), nën një projekt, një sit dhe një ndërtesë |
| Rrjetat | Një IfcGrid me boshtet dhe etiketat e tij |
| Kolona, trarë, diagonale | IfcColumn, IfcBeam, IfcMember (diagonale), secili një ekstrudim i një forme profili standard me përmasat e tij reale |
| Pllaka, pllaka skaji, pllaka baze | IfcPlate |
| Vrima dhe prerje | Hapje (IfcOpeningElement) të prera nga pjesa |
| Një element dhe pllakat e tij të saldosura | Një montim (IfcElementAssembly) me shenjën e montimit |
| Bulona dhe shufra ankorimi | IfcMechanicalFastener me diametër dhe gjatësi |
| Themele | IfcFooting (themel bllok), me tekstin e betonit si material |
| Çdo shufër | IfcReinforcingBar me shenjën, diametrin, sipërfaqen dhe gjatësinë e shufrës, e shtrirë përgjatë vijës së saj reale qendrore me harqe reale në përkulje |

Etiketa e çdo pjese është shenja e saj. Çdo element mban gjithashtu një grup vetish "DetailCraft" me shenjat, profilin dhe peshën e tij. Çdo element ndodhet në katin më të lartë që është në ose nën pikën e tij më të ulët. Materialet grupohen sipas klasës.

## ID të qëndrueshme për eksportet e reja

ID-ja IFC (GlobalId) e çdo elementi llogaritet nga emri i modelit dhe ID-ja e vetë elementit në model. Eksporto të njëjtin model dy herë dhe ID-të përputhen, kështu që programet që krahasojnë versionet mund të dallojnë çfarë ka ndryshuar.

:::warning
Riemërimi i modelit ndryshon çdo ID. Mbaje emrin e modelit të njëjtë midis botimeve të një projekti.
:::

## Kontrolloje

Skedarët IFC të DetailCraft lexohen përsëri nga një lexues IFC i pavarur në grupin e tij të testeve. Programet ndryshojnë në mënyrën si lexojnë IFC, ndaj hape skedarin në programin që përdor ekipi juaj përpara se të mbështeteni në të. Aplikacioni BimCraft i CadCraft hap gjithashtu skedarët IFC.

## Jo ende

- Sjellja e lidhjeve, themeleve dhe armaturës nga një skedar IFC. {{ui:Import IFC}} sjell trarë, kolona, elementë, pllaka, rrjete, nivele, vrima, prerje dhe bulona, dhe liston çfarë la jashtë.
- Të dhëna analitike ose të analizës strukturore.
- Çdo gjë përveç pamjes referencë IFC4.

## Importo

{{ui:Import IFC}} te grupi {{ui:File}} (ose duke lëshuar një skedar `.ifc` mbi pamje) krijon një model të ri nga një skedar IFC2X3 ose IFC4:

- **Trarë, kolona, elementë (diagonale) dhe pllaka** trupi i të cilëve është një profil i ekstruduar që DetailCraft e njeh, i përputhur me katalogun ose i mbajtur si profil i personalizuar; **rrjete** dhe **nivele** nga rrjeti dhe katet e skedarit.
- **Vrima:** çdo hapje rrethore (IfcOpeningElement që boshatis një pjesë të futur) pingul me një nga sipërfaqet e pjesës: shpina ose flanxhat e një profili I ose kanali, muret e një tubi, një pllakë, krahët e një këndoreje. Një vrimë që kalon përmes të dy mureve të një tubi hyn vetëm një herë.
- **Prerje:** një hapje drejtkëndore që zë gjithë gjerësinë e një profili I ose kanali nga një skaj, poshtë nga lart ose lart nga poshtë.
- **Bulona:** çdo IfcMechanicalFastener ose IfcFastener, me diametrin, gjatësinë, klasën dhe llojin (bulon ose shufër ankorimi), si një **bulon i lirë**. Bulonat e lirë shfaqen në pamje, listën e materialeve dhe eksportin IFC, dhe qëndrojnë aty ku janë kur zhvendosni elementët. Paneli {{ui:Properties}}, kur nuk është zgjedhur asgjë, i numëron dhe ka {{ui:Remove loose bolts}} për kur shtoni lidhje në vend të tyre.

Raporti liston gjithçka tjetër sipas klasës me arsyen pse u la jashtë: muret dhe soletat, themelet dhe shufrat, vrimat me prerje gjatësore, vrimat në tuba rrethorë, lidhjet (një skedar IFC mban pllakat dhe bulonat e tyre, jo rregullin që i krijoi).
