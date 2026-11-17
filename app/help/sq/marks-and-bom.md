---
title: Kontrollo shenjat dhe listën e materialeve
summary: Lexo shenjat e pjesës dhe të montimit që i jep DetailCraft çdo pjese, kontrollo listën e materialeve dhe shkarkoje si CSV.
keywords: shenja, numërim, shenja e pjesës, shenja e montimit, shenja e copës, bom, lista e materialeve, peshat, lista e bulonave, csv, numërim
from: caa2ee80
---

DetailCraft i shënon modelin vetë. Nuk ka komandë numërimi dhe nuk ka çfarë të ekzekutohet: pas çdo ndryshimi llogarit cilat pjesë janë i njëjti copë çeliku dhe u jep një shenjë të vetme.

## Ku shfaqen shenjat

- Lista {{ui:Part marks}} te paneli {{ui:Model}}: çdo shenjë me profilin, gjatësinë dhe numrin. Kliko një për të zgjedhur pjesën e parë me atë shenjë.
- Paneli {{ui:Properties}} i një elementi të zgjedhur (dhe lista **Shenjat e elementëve** në panelin e majtë): {{ui:Part mark}} dhe {{ui:Assembly}}. Titulli i panelit mban gjithashtu shenjën, për shembull "Tra b1".
- Skeda {{ui:Bill of materials}}, CSV-ja, emrat e skedarëve NC, vizatimet e punëtorisë dhe eksporti IFC (si etiketë e çdo elementi).

## Si shënohen pjesët

- **Shenjat e pjesëve:** c për kolonat, b për trarët, br për diagonalet, st për mbajtëset e shkallëve, p për pllakat (përfshirë pllakat e skajit dhe të bazës). Pastaj një numër: c1, c2, b1, p1 … Kur pjesët ndodhen në më shumë se një fazë, numri i fazës vjen i pari, për shembull 2-b1.
- **Shenjat e montimeve:** C, B, BR ose P. Një montim është një element kryesor dhe pllakat e saldosura në të, si një trari me dy pllakat e skajeve, ose një kolonë me pllakën e bazës.
- Dy pjesë ndajnë një shenjë kur kanë të njëjtin profil, material dhe gjatësi prerjeje, dhe të njëjtat vrima dhe prerje, të gjitha brenda 1 mm, edhe nëse njëra është kthyer nga skaji në skaj ose përmbys në raport me tjetrën.
- Numërimi fillon me kolonat, pastaj trarët, diagonalet dhe pllakat; brenda secilës grup, sipas emrit të profilit, pastaj ato më të gjatat e para.

Rregullat e plota, përfshirë cilat rrotullime llogariten për kanalet dhe këndoret: [Rregullat e shenjave](topic:mark-rules).

:::warning
Shenjat llogariten nga e para pas çdo ndryshimi, kështu që mund të riemërtohen. Shtimi i një pjese, ndryshimi i një profili ose shtimi i një vrime mund ta zhvendosë b3 në b4. Konsidero shenjat si të fundit vetëm kur modeli të jetë i përfunduar, dhe bëj listën BOM, skedarët NC dhe vizatimet e punëtorisë nga i njëjti model i ruajtur.
:::

## Lexo listën e materialeve

Hap skedën {{ui:Bill of materials}} në fund. Ka tre tabela.

**Pjesët**, me peshën totale të çelikut në titull:

| Kolona | Kuptimi |
|---|---|
| Shenja e pjesës | Kliko për të zgjedhur pjesën e parë me këtë shenjë |
| Lloji | trarë, kolonë, diagonale, mbajtëse ose pllakë |
| Profili | Për shembull W16x26 ose PL20x180 |
| Materiali | Klasa që vendosët |
| Gjatësia (mm) | Gjatësia e prerjes, pas lidhjeve |
| Numri | Sa janë |
| Pesha për njësi (kg) | Masa e profilit për metër × gjatësia |
| Pesha totale (kg) | Pesha për njësi × numri |

Rreshti i fundit jep numrin dhe peshën totale.

**Montimet:** çdo shenjë montimi, pjesa e saj kryesore, të gjitha pjesët e saj (për shembull "b1 + p1 + p1"), numri, pesha për njësi dhe pesha totale.

**Bulonat dhe shufrat e ankorimit:** të grupuara sipas llojit, diametrit, gjatësisë dhe klasës, me numër.

:::note
Peshat janë bruto: vrimat dhe prerjet nuk zbriten. Bulonat, dadot, rondelet dhe saldimet nuk janë në peshën e çelikut.
:::

## Shkarkoje

Zgjidh {{ui:Download CSV}} në skedë, ose {{ui:BOM}} te grupi {{ui:Output}}. Skedari `<name> BOM.csv` mban tre tabelat njëra pas tjetrës, secila nën titullin e vet, me një rresht bosh midis tyre. Hapet në çdo program fletësh llogaritëse.

## Kontrollo përpara se ta dërgosh

1. Hap skedën {{ui:Problems}} dhe pastro çdo rresht. Një lidhje që nuk mundi të ndërtohet nuk shton pllakë, vrima ose bulona, kështu që BOM do të ishte e pakompletuar.
2. Kërko shenja që nuk i prisje. Dy trarë që mendon se janë të njëjtë, por me shenja të ndryshme, zakonisht ndryshojnë për një vrimë, një prerje ose një gjatësi prerjeje; zgjidh secilin dhe krahasoji.
3. Ruaje modelin, pastaj bëj çdo eksport nga ajo gjendje e ruajtur.
