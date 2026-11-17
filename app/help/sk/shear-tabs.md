---
title: Šmykové plechy
summary: Pripojte stojinu nosníka skrutkami k plechu zváranému v dielni na prírubu alebo stojinu stĺpa, aj tam, kde nosník stretáva stĺp pod uhlom v pôdoryse alebo je sklonený.
keywords: šmykový plech, jednoduchý plech, rebrový plech, jednoduchý spoj, spoj stojiny, šikmý, skosený, sklonený, uhlovo postavený nosník, skrutkovaný, spájať
from: 18afc8ab
---

Šmykový plech (jednoduchý plech, rebrový plech) je plech zváraný ku stĺpu v dielni; na stavbe sa k nemu priskrutkuje stojina nosníka jedným zvislým radom skrutiek. DetailCraft umiestni plech, skráti nosník tak, aby bol voľný od stĺpa, vyvŕta otvory v plechu a v stojine nosníka, pridá skrutky a zvar a upozorní na vzdialenosti od okraja a na zapasovanie.

## Kde to funguje

- Nosník (I-profil alebo U-profil), ktorého koniec leží na osi **zvislého** I-stĺpa a stretáva sa s jeho **prírubou** alebo jeho **stojinou**.
- **Kolmý, šikmý v pôdoryse alebo sklonený**: plech nasleduje stojinu nosníka a nosník sa skráti tak, aby jeho najbližší roh zachoval medzeru voči stĺpu. Nosník stúpajúci alebo klesajúci uhlom viac než 60° sa odmietne.

## Pridanie šmykových plechov

1. Vyberte nosník.
2. V skupine {{ui:Spoje}} otvorte {{ui:Viac}} a vyberte {{ui:Šmykové plechy}} (alebo vyberte {{ui:Pridať šmykové plechy}} na paneli {{ui:Vlastnosti}}).
3. Každý voľný koniec nosníka, ktorý stretáva stĺp, dostane plech. Každý koniec nosníka prijíma jeden spoj: šmykový plech alebo čelnú dosku.

Vyberte plech (kliknite naň alebo na skrutku), aby ste videli a zmenili jeho nastavenia. {{ui:Použiť na podobné}} ho skopíruje ako šmykový plech do každého podobného spoja, ktorý ešte nemá spoj.

## Nastavenia (mm)

| Nastavenie | Začína na | Význam |
|---|---|---|
| Hrúbka plechu | 10 | Hrúbka plechu |
| Šírka plechu | 115 | Ako ďaleko plech siaha od líca stĺpa pozdĺž nosníka |
| Priemer skrutky, Priemer otvoru, Trieda skrutky | 20, 22, A325 | Ako pri čelných doskách |
| Počet radov skrutiek, Rozstup radov | 3, 75 | Skrutky vo zvislom rade |
| Vzdialenosť od okraja (horné a dolné skrutky) | 38 | Od horných a dolných skrutiek ku koncom plechu; plech je hlboký rady × rozstup + 2 × túto hodnotu |
| Zdvihnutie skupiny skrutiek | 0 | 0 vycentruje skrutky na výšku nosníka |
| Medzera voči stĺpu | 13 | Voľná medzera medzi stĺpom a najbližším rohom nosníka |
| Vzdialenosť skrutkovej osi od líca stĺpa | 65 | Pozdĺž nosníka, od líca stĺpa po skrutky |
| Prídavok dĺžky skrutky | 30 | Pripočítaný k upnutiu (plech + stojina nosníka), zaokrúhlený nahor na 5 mm |
| Veľkosť kútového zvaru | 6 | Oba boky plechu ku stĺpu |

## Dobre vedieť

- Plech je súčasťou zostavy stĺpa (zváraný v dielni); zostava nosníka má iba svoje otvory.
- Šikmý alebo sklonený nosník sa skracuje viac než kolmý, aby jeho najbližší roh zachoval medzeru. DetailCraft reže nosníky kolmo: koniec upraví dielňa podľa potreby. Hrana plechu pri stĺpe sa tiež kreslí kolmo.
- DetailCraft nekontroluje pevnosť. Upozornenia používajú minimá z EN 1993-1-8, tabuľka 3.3 pre vzdialenosti od okraja a rozstupy a uvádzajú, kedy je plech hlbší než stojina nosníka medzi jej zaobleniami, alebo kedy skrutky sedia príliš blízko rezu konca nosníka.
- [Kontrola kolízií](topic:clash-check) vynecháva plech a prvky, ktoré spája: majú sa stretnúť.
