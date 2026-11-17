---
title: Mapa zahustenia výstuže
summary: Zistite, ako tesne výstuž nechá priestor pre betón, aby sa dostal dole, pri kamenive a vibrátore, ktoré zadáte.
keywords: výstuž, zahustenie, rozostup, čistý rozostup, ukladanie betónu, kamenivo, vibrátor, čakacie pruty, háky, základ, sieť
from: 40d029e6
---

Karta {{ui:Zahustenie}} kreslí tepelnú mapu každého základu pri pohľade zhora. Bledomodrá je voľné miesto; žltá a oranžová znamenajú tesnosť; červená je tesnejšia, než pruty vyžadujú. Tmavé bunky sú samotné pruty.

## Čo mapa meria

Betón prechádza výstužou vrstvu po vrstve a medzi vrstvami sa môže pohybovať do strán. Preto mapa v každom bode berie najužšiu voľnú medzeru v ktorejkoľvek vrstve: medzi prútmi spodnej siete, medzi ďalšou vrstvou prútov a medzi ramenami hákov čakacích prútov hore. Čakacie pruty prechádzajú cez všetky tieto vrstvy.

## Čo sa považuje za tesné

Potreba je väčšia z hodnôt 25 mm a priemeru prúta (ACI 318-19 25.2.1), alebo pri prútoch BS 4449 väčšia z hodnôt priemer prúta a 20 mm (EN 1992-1-1 8.2). Dve polia ju zvyšujú:

- {{ui:Najväčšie kamenivo}}: potreba sa stane 4/3 veľkosti kameniva (ACI) alebo kamenivo plus 5 mm (EN).
- {{ui:Hlavica vibrátora}}: potreba je aspoň priemer hlavice vibrátora.

Obe začínajú na 0, čo znamená neznáme: DetailCraft nepozná vašu zmes ani vaše čerpadlo.

## Problémy

Základ, na ktorom je miesto tesnejšie, než je potrebné, sa uvedie na paneli {{ui:Problémy}} s nájdenou a potrebnou medzerou. Tlačidlo {{ui:Vybrať}} vedľa mapy vyberie základ.

Mapa nevidí viazacie drôty, spojky, kanály ani vlastné pruty stĺpa.
