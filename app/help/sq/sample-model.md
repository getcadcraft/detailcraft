---
title: Eksploro kornizën shembull
summary: Hap kornizën e integruar me dy hapje dhe përdore për të mësuar çfarë krijon DetailCraft, nga shenjat deri te skedarët NC.
keywords: shembull, mostër, demo, kornizë, mëso, turne, provo
from: 5c5944dd
---

Kornizë shembull është një model i vogël, i plotë: çdo lloj gjëje që ndërton DetailCraft shfaqet të paktën një herë. Është mënyra më e shpejtë për të mësuar aplikacionin dhe për të testuar një eksport para se të mbështeteni në të.

## Hapeni

1. Zgjidhni {{ui:Shembull}} te grupi {{ui:Skedar}}.
2. Nëse modeli juaj aktual ka ndryshime të pa ruajtura, zgjidhni {{ui:Ruaj së pari}} ose {{ui:Hidh ndryshimet}}.
3. Shiriti i statusit thotë "Kornizë shembull: 6 kolona me pllaka themeli, 4 trarë me pllaka skaji, një diagonale, 7 themele me armaturë."

Shembulli hapet si model i ri me emrin "Kornizë shembull". Nuk ndryshon asgjë tjetër dhe nuk ka çfarë të zhbëjë.

## Çfarë ka brenda

- **Rrjeta** 1, 2, 3 në 6000 mm dhe A, B në 7000 mm. **Nivelet** Level 1 në 0 dhe Level 2 në 4000.
- **Gjashtë kolona**, W12x50, nga Level 1 deri në Level 2 në çdo kryqëzim, secila mbi një pllakë themeli 25 mm me katër bulona ankorimi.
- **Katër trarë**, W16x26, në Level 2 përgjatë vijave të rrjetës A dhe B, maja e çelikut në nivel, me një pllakë skaji të bulonuar të rrafshët në të dy skajet (tetë gjithsej).
- **Një diagonale**, HSS4x4x1/4, nga A/1 në Level 1 deri te A/2 në Level 2.
- **Gjashtë themele bazë**, 2000 x 2000 x 600, nga një nën çdo kolonë, me një rrjetë të poshtme me grepa në të dy drejtimet.
- **Një themel shtesë** pranë kornizës, 2400 x 1800 x 600, me gjashtë shufra nisëse me grepa që dalin lart për një pilon betoni.

## Gjëra për të provuar

1. Klikoni një trarë. Lexoni {{ui:Shenja e pjesës}}, {{ui:Montimi}}, {{ui:Gjatësia e prerjes}} dhe {{ui:Shkurtimi mbrapa}}: gjatësia e prerjes është më e shkurtër se hapësira e rrjetës 6000 mm sepse çdo pllakë skaji e shkurton trarin mbrapsht me gjysmën e thellësisë së kolonës plus trashësinë e pllakës.
2. Klikoni një kolonë. Nën {{ui:Vrimat}} listohen vrimat që bënë pllakat e skajit në flanxhën e saj ("8 vrima nga lidhjet"; kolonat e mesit kanë 16, një grup në çdo flanxhë).
3. Te lista {{ui:Shenjat e elementëve}} në të majtë, shihni se të katër trarët ndajnë një shenjë: janë i njëjti copë çeliku. Kolonat e qosheve ndajnë gjithashtu një shenjë, edhe pse vrimat e tyre drejtohen në drejtime të kundërta, sepse një kolonë e kthyer nga fundi në fund është e njëjta copë. Kolonat e mesit, me vrima në të dy flanxhat, marrin një shenjë tjetër.
4. Klikoni një pllakë skaji (ose një nga bulonat e saj). Paneli {{ui:Vetitë}} shfaq cilësimet e pllakës, bulonit dhe saldimit, bulonat që krijon (me gjatësinë e llogaritur nga shtrëngimi) dhe çdo paralajmërim të distancës nga skaji.
5. Hapni skedën {{ui:Lista e materialeve}}. Pjesët, montimet (një trarë me dy pllakat e skajit është një montim), dhe bulonat dhe shufrat e ankorimit listohen me peshat. Duhet të shihni gjashtë shenja pjesësh: c1 (dy kolonat e mesit) dhe c2 (katër kolonat e qosheve), të dyja W12x50 në 3975 mm; b1, katër trarët W16x26 në 5650 mm; br1, diagonalja; p1, tetë pllaka skaji PL20x180; dhe p2, gjashtë pllaka baze PL25x400. Elementët e lidhjes janë 64 bulona 20 x 70 A325 dhe 24 shufra ankorimi 20 x 575.
6. Hapni skedën {{ui:Tabela e përkuljes}}. Gjashtë themelet identikë ndajnë shenjat e shufrave; themeli i pilonit shton të vetin.
7. Klikoni diagonalen dhe shikoni grupin {{ui:Dalja}}: {{ui:Vizatimi i punëtorisë}} është i çaktivizuar, sepse vizatimet e punëtorisë mbulojnë deri tani vetëm profilet me formë I dhe pllakat.
8. Zgjidhni {{ui:Skedarët NC}}. Arkivi zip mban një skedar për çdo shenjë profili me formë I dhe pllake; shiriti i statusit e liston shenjën e diagonales si të pashkruar.
9. Zgjidhni {{ui:IFC}} dhe hapni skedarin në çdo shikues IFC për të kontrolluar si e lexon softueri juaj tjetër.

## Përdoreni si pikënisje

Shembulli është një model i zakonshëm. Ndryshojeni, pastaj riemërojeni te fusha {{ui:Emri}} dhe ruajeni me emrin e ri me {{key:Mod+S}}.
