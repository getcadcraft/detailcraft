---
title: Mapa zagušenja armature
summary: Vidi koliko je armatura tijesna da beton prođe u svakom temelju, uz agregat i vibrator koje unosiš.
keywords: armatura, zagušenje, razmak, čist razmak, ugradnja betona, agregat, vibrator, čekaći, kuke, temelj, mreža
from: 40d029e6
---

Kartica {{ui:Congestion}} crta toplotnu mapu svakog temelja gledanog odozgo. Blijedoplavo je otvoreno; žuta i narandžasta postaju tijesne; crvena je tješnja nego što šipke traže. Tamne ćelije su same šipke.

## Šta mapa mjeri

Beton prolazi kroz čelik sloj po sloj i može se pomjerati u stranu između slojeva. Zato mapa u svakoj tački uzima najuži slobodni razmak u bilo kojem sloju: između šipki donje mreže, između sljedećeg sloja šipki i između krakova kuka čekaćih šipki na vrhu. Čekaći prolaze kroz sve njih.

## Šta se smatra tijesnim

Potreba je veća od 25 mm i prečnika šipke (ACI 318-19 25.2.1), ili, za BS 4449 šipke, veća od prečnika šipke i 20 mm (EN 1992-1-1 8.2). Dva polja je podižu:

- {{ui:Largest aggregate}}: potreba postaje 4/3 veličine agregata (ACI) ili agregat plus 5 mm (EN).
- {{ui:Vibrator head}}: potreba je najmanje prečnik glave vibratora.

Oba počinju sa 0, što znači nepoznato: DetailCraft ne zna tvoju mješavinu ni tvoju pumpu.

## Problemi

Temelj sa mjestom tješnjim od potrebe se navodi na panelu {{ui:Problems}} sa pronađenim otvorom i potrebnim otvorom. {{ui:Select}} pored mape odabire temelj.

Mapa ne vidi vezice, spojnice, kanale za instalacije ni sopstvene šipke stuba.
