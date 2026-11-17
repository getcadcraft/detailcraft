---
title: Mapa zgusnutosti armature
summary: Pogledaj koliko je armatura gusta na svakom temelju da beton prođe, uz agregat i vibrator koje navedeš.
keywords: armatura, zgusnutost, razmak, čist razmak, ugradnja betona, agregat, vibrator, ostavljene šipke, kuke, temelj, mreža
from: 40d029e6
---

Kartica {{ui:Zgusnutost}} crta toplotnu mapu svakog temelja gledanog odozgo. Svetloplavo je slobodno; žuto i narandžasto je sve gušće; crveno je gušće nego što šipke traže. Tamne ćelije su same šipke.

## Šta mapa meri

Beton prolazi kroz čelik sloj po sloj i može da se kreće u stranu između slojeva. Zato mapa u svakoj tački uzima najuži slobodan prolaz u bilo kom sloju: između šipki donjeg sloja, između sledećeg sloja šipki i između kuka ostavljenih šipki na vrhu. Ostavljene šipke stoje kroz sve njih.

## Šta se smatra gustim

Potreba je veća od 25 mm i prečnika šipke (ACI 318-19 25.2.1), ili, za BS 4449 šipke, veća od prečnika šipke i 20 mm (EN 1992-1-1 8.2). Dva polja je podižu:

- {{ui:Najveći agregat}}: potreba postaje 4/3 veličine agregata (ACI) ili agregat plus 5 mm (EN).
- {{ui:Glava vibratora}}: potreba je najmanje prečnik glave.

Oba počinju sa 0, što znači nepoznato: DetailCraft ne zna tvoju mešavinu ni tvoju pumpu.

## Problemi

Temelj sa mestom koje je gušće od potrebe navodi se na panelu {{ui:Problemi}}, sa pronađenim otvorom i potrebnim otvorom. {{ui:Izaberi}} pored mape bira temelj.

Mapa ne vidi vezice, spojnice, kanale za instalacije ni sopstvene šipke stuba.
