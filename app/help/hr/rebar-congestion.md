---
title: Karta gustoće armature
summary: Pogledajte koliko je armatura gusta na svakom temelju da bi beton mogao proći, uz agregat i vibrator koje unesete.
keywords: armatura, gustoća, razmak, slobodni razmak, polaganje betona, agregat, vibrator, ispusti, kuke, temelj, mreža
from: 40d029e6
---

Kartica {{ui:Gustoća}} crta toplinsku kartu svakog temelja gledanog odozgo. Svijetloplava je otvoreno; žuta i narančasta postaju gusti; crvena je gušća nego što šipke traže. Tamna polja su same šipke.

## Što karta mjeri

Beton prolazi kroz čelik sloj po sloj i može se pomicati u stranu između slojeva. Zato karta na svakoj točki uzima najuži slobodni razmak u bilo kojem sloju: između šipki donje mreže, između sljedećeg sloja šipki i između krakova kuka ispusta na vrhu. Ispusti prolaze kroz sve njih.

## Što se smatra gustim

Potreba je veća od 25 mm i promjera šipke (ACI 318-19 25.2.1), ili, za šipke BS 4449, veća od promjera šipke i 20 mm (EN 1992-1-1 8.2). Dva okvira je podižu:

- {{ui:Najveći agregat}}: potreba postaje 4/3 veličine agregata (ACI) ili agregat plus 5 mm (EN).
- {{ui:Glava vibratora}}: potreba je najmanje promjer glave.

Oba počinju s 0, što znači nepoznato: DetailCraft ne zna vašu mješavinu ni vašu pumpu.

## Problemi

Temelj s mjestom gušćim od potrebe navodi se na ploči {{ui:Problemi}} s pronađenim otvorom i potrebnim otvorom. {{ui:Odaberi}} pored karte odabire temelj.

Karta ne vidi vezice, spojnice, kanale niti vlastite šipke stupa.
