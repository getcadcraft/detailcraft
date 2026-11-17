---
title: Kopjo, ngjit dhe dyfisho
summary: Përzgjidh disa elementë, kopjoji me vrimat, prerjet dhe lidhjet e tyre, dhe ngjiti në një kryqëzim rrjeti, me zhvendosje, në vend ose në një skedë tjetër. Prit, dyfisho, fshi dhe përzgjidh të gjitha.
keywords: kopjo, ngjit, prit, dyfisho, kujtesa e përkohshme, ngjit në vend, përzgjidh të gjitha, mos përzgjidh asnjë, përzgjedhje e shumëfishtë, shift klik, disa, përsërit një fushë, kopjo një kornizë, zhvendosje, fshi disa, menuja e redaktimit, menuja më shumë
from: f25f1829
---

Grupi {{ui:Ndrysho}} në shiritin e veglave ka {{ui:Zhbëj}}, {{ui:Ribëj}}, {{ui:Kopjo}} dhe {{ui:Ngjit}}. Menuja e tij {{ui:Më shumë}} përmban pjesën tjetër: {{ui:Prit}}, {{ui:Kopjo}}, {{ui:Ngjit}}, {{ui:Ngjit në vend}}, {{ui:Dyfisho}}, {{ui:Fshi}}, {{ui:Përzgjidh të gjitha}} dhe {{ui:Mos përzgjidh asnjë}}, secili me tastin e vet. Një buton ose element menuje që nuk mund të veprojë tani është i zbehur; kalo mbi të për të lexuar arsyen (për shembull "ende nuk është kopjuar asgjë").

Çdo ngjitje, prerje, dyfishim dhe fshirje është një hap: një {{key:Mod+Z}} i kthen të gjitha.

## Përzgjidh disa elementë

- Kliko një element për ta përzgjedhur. Mbaj {{key:Shift}} (ose {{key:Ctrl}}, ose {{key:Mod}}) dhe kliko më shumë elementë për t'i shtuar; kliko një të përzgjedhur në të njëjtën mënyrë për ta hequr.
- {{key:Mod+A}} ose {{ui:Përzgjidh të gjitha}} përzgjedh çdo element, lidhje dhe themel.
- {{key:Esc}} ose {{ui:Mos përzgjidh asnjë}} pastron përzgjedhjen.

Me disa gjëra të përzgjedhura, paneli {{ui:Vetitë}} titullohet "4 të përzgjedhura" (ose sa janë) dhe liston elementët sipas llojit, lidhjet, themelet dhe peshën bruto të çelikut, me butonat {{ui:Kopjo}}, {{ui:Dyfisho}} dhe {{ui:Fshi}}.

## Kopjo

1. Përzgjidh elementët dhe themelet që dëshiron.
2. Zgjidh {{ui:Kopjo}} ose shtyp {{key:Mod+C}}.

Çfarë vjen me kopjen:

- Çdo element i plotë: profili, materiali, skajet, pozicioni, rrotullimi, emri, vrimat dhe prerjet. Një profil i personalizuar që përdor kopjohet gjithashtu.
- Çdo themel i plotë: madhësia, betoni, rrjeti i poshtëm dhe shufrat e nisjes.
- Pllakat e skajit dhe pllakat e bazës, por vetëm kur çdo element që lidh një lidhje është kopjuar: pllaka e skajit të një trari ka nevojë për trarin dhe kolonën e tij. Shiriti i statusit tregon sa lidhje u lanë jashtë. Për të lënë lidhje jashtë me qëllim, hiq shenjën te **Kopjo pllakat e skajit dhe të bazës bashkë me elementët e tyre** te [Cilësimet e DetailCraft](topic:settings).

Një lidhje e veçantë nuk mund të kopjohet; në vend të kësaj përzgjidh elementët e saj. Për t'i dhënë nyjeve të tjera të njëjtën lidhje, përdor {{ui:Të ngjashme}} (shih [Pllaka skaji](topic:end-plates#copy-it-to-every-similar-joint)).

Kopja mbetet në këtë shfletues derisa të kopjosh diçka tjetër. Një skedë ose dritare tjetër e DetailCraft në të njëjtin shfletues mund ta ngjisë, kështu që mund të kopjosh një kornizë nga një model dhe ta ngjisësh në një tjetër.

## Ngjit në një kryqëzim rrjeti

1. Zgjidh {{ui:Ngjit}} ose shtyp {{key:Mod+V}}.
2. Lëviz treguesin mbi pamjen. Një kontur me vija të çara i kopjes ndjek kryqëzimin e rrjetit më të afërt me treguesin.
3. Kliko një kryqëzim. Pika bazë e kopjes (qoshja e saj më e ulët: x, y dhe z më të vegjël të gjithçkaje të kopjuar) vendoset atje.

Elementët e ngjitur janë të përzgjedhur pas kësaj, kështu që mund të ngjitësh përsëri diku tjetër, ose t'i ndryshosh. {{key:Esc}} anulon ngjitjen; kopja mbetet në kujtesën e përkohshme. {{ui:Planimetria}} dhe {{ui:Fasada}} e bëjnë më të lehtë goditjen e kryqëzimit të duhur.

:::tip
Për të përsëritur një fushë, përzgjidh elementët e fushës (ose gjithçka me {{key:Mod+A}}), kopjo, ngjit, dhe kliko kryqëzimin një fushë më tej nga vendi ku ishte qoshja më e ulët e kopjes.
:::

## Ngjit nga tastiera

Ndërsa ngjit, paneli {{ui:Vetitë}} tregon çfarë është në kujtesën e përkohshme dhe dy formularë:

- {{ui:Ngjit me zhvendosje (mm, nga origjinali)}}: shkruaj x, y dhe z dhe zgjidh {{ui:Ngjit me këtë zhvendosje}}. Fillon me zhvendosjen nga [Cilësimet e DetailCraft](topic:settings).
- {{ui:Ngjit në një kryqëzim rrjeti}}: zgjidh një rrjet me shkronja, një rrjet me numra dhe një nivel, dhe zgjidh {{ui:Ngjit këtu}}. Pika bazë vendoset atje.

## Ngjit në vend

{{ui:Ngjit në vend}} ({{key:Mod+Shift+V}}) e vendos kopjen në koordinatat e sakta nga u kopjua. Përdore pas {{ui:Prit}}, ose për të sjellë elementë nga një model tjetër në të njëjtin vend. Nëse origjinalet janë ende aty, kopja del mbi ta dhe shiriti i statusit të paralajmëron: zhvendos kopjet sipas {{ui:Fillimi}} dhe {{ui:Fundi}} te {{ui:Vetitë}}, ose zhbëj.

## Dyfisho

{{ui:Dyfisho}} ({{key:Mod+D}}) kopjon përzgjedhjen dhe e ngjit menjëherë, e zhvendosur sipas zhvendosjes te [Cilësimet e DetailCraft](topic:settings) (6000 mm përgjatë x në fillim). Nuk ndryshon atë që është në kujtesën e përkohshme. Kopjet janë të përzgjedhura pas kësaj, kështu që shtypja e {{key:Mod+D}} përsëri bën tjetrën prej tyre.

## Prit dhe fshi

- {{ui:Prit}} ({{key:Mod+X}}) kopjon përzgjedhjen, pastaj e fshin. Ngjite aty ku i takon.
- {{ui:Fshi}} ({{key:Delete}} ose {{key:Backspace}}) fshin përzgjedhjen. Fshirja e një elementi fshin edhe lidhjet e tij.

## Shenjat pas ngjitjes

Shenjat e elementeve dhe të montimeve nuk ruhen kurrë; DetailCraft i numëron ato përsëri nga modeli pas çdo ndryshimi ([Si jepen shenjat](topic:mark-rules)). Kështu që:

- Një kopje që është e njëjta copë me origjinalin (i njëjti profil, klasë, gjatësi prerjeje, vrima dhe prerje) ndan shenjën e origjinalit, dhe numërimi te {{ui:Shenjat e elementeve}} dhe lista e materialeve rritet.
- Një kopje që del ndryshe merr një shenjë të vetën. Një trarë i ngjitur pa pllakat e skajit, për shembull, nuk pritet prapa, pra është një copë tjetër. Shenjat numërohen përsëri në të gjithë modelin, kështu që numrat e elementeve të tjerë mund të ndryshojnë gjithashtu.

Çdo element, vrimë, prerje, lidhje dhe themel i ngjitur merr një ID të re, kështu që asgjë në model nuk ndahet kurrë mes një kopjeje dhe origjinalit.

## Nëse kujtesa e përkohshme refuzohet

Ajo që është në kujtesën e përkohshme kontrollohet po aq me kujdes sa një skedar modeli që hap: çdo gjë që nuk është një element i vlefshëm i DetailCraft hiqet, dhe shiriti i statusit thotë çfarë. Një kujtesë e mbushur nga një DetailCraft më i ri, ose nga diçka tjetër, refuzohet me një mesazh dhe nuk ngjitet asgjë. Nëse një dritare private nuk mund ta mbajë kopjen në depozitimin e shfletuesit, kopja funksionon ende në atë skedë.
