---
title: Lidh diagonalet me pllaka lidhëse
summary: Lidh skajin e një diagonale me një kolonë ose tra me një pllakë lidhëse: këndore dhe shirita të sheshtë të bulonuar, tuba me prerje të saldosur.
keywords: pllakë lidhëse, gusset, gusset plate, diagonale, lidhje me diagonale, diagonale vertikale, këndore, shirit i sheshtë, strap, tub HSS, pllakë thike, tub me prerje, lidh
from: 22f6598d
---

Një pllakë lidhëse e diagonales është një pllakë e saldosur në punëtori në kolonën (ose trarin) ku mbështetet diagonalja, në planin e diagonales. DetailCraft e pret diagonalen prapa, e pozicionon dhe e përmason pllakën lidhëse, dhe e bashkon diagonalen me të: një **këndore** ose një **shirit i sheshtë** me një rresht bulonash, ose një **tub** (katror, drejtkëndësh ose rreth HSS) i futur mbi pllakën lidhëse përmes një prerjeje dhe i saldosur.

## Ku funksionon

- Skaji i diagonales shtrihet në vijën e një kolone ose trau (brenda 1 mm), dhe diagonalja nuk është pothuajse paralele me atë vijë. Kolona është mbështetja aty ku ka një; përndryshe trau.
- Pllaka lidhëse shtrihet në planin e diagonales dhe në vijën e mbështetjes. Një **këndore** duhet të ketë një krah në atë plan, dhe një **shirit i sheshtë** sipërfaqen e tij: rrotullo diagonalen (te {{ui:Rotation (°)}}) derisa ta bëjë. Me krahët e këndores në 45° ndaj planit, DetailCraft e thotë këtë dhe nuk ndërton asgjë.
- Profilet I dhe kanalet si diagonale nuk lidhen.

## Shto pllaka lidhëse

1. Zgjidh një ose më shumë diagonale.
2. Zgjidh {{ui:Gusset}} te menyja {{ui:More}} e grupit {{ui:Connect}}.
3. Çdo skaj i diagonaleve të zgjedhura që mbështetet në një kolonë ose tra dhe nuk ka pllakë lidhëse merr një.

Zgjidh një pllakë lidhëse (kliko pllakën) për të ndryshuar cilësimet e saj. {{ui:Apply to similar (n)}} e kopjon te çdo skaj i lirë diagonale me të njëjtat profile diagonale dhe mbështetjeje.

## Çfarë llogarit DetailCraft

- **Prerje prapa.** Diagonalja shkurtohet në atë skaj derisa cepat e saj të lirohen, me {{ui:Brace clearance}} (25), çdo element te lidhja (pranë saj, ose përtej skajit të saj kur elementi mbaron aty) dhe një pllakë baze nën kolonë.
- **Bulonat (këndore, shirita).** {{ui:Bolts}} (3) në një rresht përgjatë diagonales, i pari {{ui:Bolt end distance}} (40) nga skaji i prerë, me {{ui:Bolt pitch}} (75). Te një këndore ato kalojnë përmes krahut në planin e pllakës lidhëse, {{ui:Bolt gauge}} nga thembra (0 = mesi i krahut); te një shirit i sheshtë në vijën e tij qendrore (ose larg saj me gjerësinë). Gjatësia e mbajtjes së bulonit = krahu ose shiriti + pllaka lidhëse.
- **Pllaka lidhëse.** Një drejtkëndësh: nga faqja e mbështetjes jashtë përtej bulonit të fundit me distancën e skajit, dhe përgjatë mbështetjes aq sa kërkojnë bulonat. Ajo qëndron te prapa krahut të këndores (ose faqja e shiritit). Për një tub, ajo kalon përmes mesit të tubit, nën {{ui:Tube lap on the gusset}} (200) të tubit, me hapësirë për saldimet.
- **Lidhjet.** Te baza e kolonës pllaka lidhëse zbret mbi pllakën e bazës. Aty ku një tra e kalon lidhjen (një diagonale që ngjitet në cepin trau-kolonë), pllaka lidhëse mbetet nën ose mbi trau. Nëse kjo i le bulonat ose mbivendosjen pa distancën e tyre të skajit, DetailCraft paralajmëron.
- **Saldimet.** Pllaka lidhëse te mbështetja e saj, në të dy anët. Tubi te pllaka lidhëse, katër vija përgjatë mbivendosjes.

## Vlen të dish

- Pllaka lidhëse i përket montimit të mbështetjes (e saldosur në punëtori). Diagonalja dërgohet me vrimat e shpuara dhe shkon te skedari i vet NC.
- Prerja e tubit nuk pritet në model; [kontrolli i përplasjeve](topic:clash-check) i lë diagonalen dhe pllakën e saj jashtë.
- Pllaka lidhëse nuk saldohet me një tra me të cilin prek, dhe pllakat lidhëse të cepit të saldosura si te trau ashtu edhe te kolona, cepat me thyerje dhe skema e pikës së punës të një lidhjeje Uniform Force Method nuk janë bërë ende.
- DetailCraft nuk projekton pllakën lidhëse as bulonat (pa kontrolle forcash); paralajmërimet janë për hapësirën dhe përshtatjen.
