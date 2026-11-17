---
title: Pravidlá značiek
summary: Presne kedy dve súčiastky alebo dve zostavy zdieľajú značku, ako sa značky číslujú a ako fungujú značky pätiek a výstuže.
keywords: značky, číslovanie, značka dielca, značka zostavy, značka kusu, predpona, tolerancia, rovnaké súčiastky, značky výstuže, značky pätiek
from: ce02c98e
---

DetailCraft prepočíta každú značku po každej zmene. Nič sa neukladá, takže značky vždy popisujú model tak, ako je teraz. Pozrite [Kontrola značiek a kusovníka](topic:marks-and-bom), ako ich používať.

## Značky dielcov

Dve súčiastky zdieľajú značku dielca, keď sa zhodujú všetky tieto body:

1. Typ súčiastky (nosník, stĺp, diagonála alebo doska).
2. Názov profilu (nezáleží na veľkosti písmen).
3. Materiál (nezáleží na veľkosti písmen).
4. Dĺžka rezu, v rámci 1 mm.
5. Každý otvor: strana, poloha pozdĺž a naprieč, v rámci 1 mm, a priemer v rámci 0.1 mm.
6. Každé vyrezanie: koniec, strana, dĺžka a hĺbka, v rámci 1 mm.

{{ui:Názov}} prvku sa nepočíta. Nepočíta sa ani jeho poloha v modeli, jeho otočenie, ani to, akým smerom bol nakreslený, pokiaľ je samotná súčiastka rovnaká.

### Otočené súčiastky

Súčiastka sa porovnáva každým spôsobom, akým sa dá prevrátiť tak, aby jej prierez zapadol sám do seba. Ak niektorý z nich spôsobí zhodu s inou súčiastkou, zdieľajú značku.

| Tvar | Otočenia, ktoré sa počítajú |
|---|---|
| I-profily, obdĺžnikové HSS, dosky | Koniec za koniec (okolo zvislej osi), koniec za koniec (okolo vodorovnej osi) a hore nohami okolo vlastnej dĺžky |
| U-profily | Koniec za koniec iba okolo vodorovnej osi, takže stojina zostane na tej istej strane |
| Uholníky, okrúhle HSS | Žiadne: porovnávajú sa tak, ako sú položené |

Takže nosník s otvorom blízko ľavého konca sa zhoduje s nosníkom s rovnakým otvorom blízko pravého konca a stĺp s otvormi v jednej pásnici sa zhoduje so stĺpom s rovnakými otvormi v druhej pásnici.

### Číslovanie

| Typ | Predpona súčiastky | Predpona zostavy |
|---|---|---|
| Stĺp | c | C |
| Nosník | b | B |
| Diagonála | br | BR |
| Doska (umiestnená, čelná alebo pätná) | p | P |

Značky sa číslujú od 1 v rámci každej predpony. Poradie je: stĺpy, potom nosníky, diagonály a dosky; v rámci typu podľa názvu profilu v prirodzenom poradí (W8x10 pred W12x26); potom najprv dlhšie súčiastky.

Keďže číslovanie nasleduje toto poradie, pridanie alebo zmena jednej súčiastky môže posunúť čísla iných.

## Značky zostáv

- Každá súčiastka, ktorá nie je zvarená s inou súčiastkou, je hlavnou súčiastkou vlastnej zostavy.
- Čelné dosky sú zvarené k svojmu nosníku a pätné dosky k svojmu stĺpu, takže patria do zostavy tohto prvku.
- Dve zostavy zdieľajú značku, keď ich hlavné súčiastky zdieľajú značku dielca a ich pripojené súčiastky majú rovnaké značky na rovnakých miestach (v rámci 1 mm), pričom sa povoľujú rovnaké otočenia ako pri hlavnej súčiastke.
- Predpona zostavy sa riadi hlavnou súčiastkou: nosník s dvoma čelnými doskami je zostava B.

Dosky, ktoré umiestnite nástrojom {{ui:Doska}}, nie sú zvarené s ničím, takže každá je vlastnou zostavou P.

## Značky pätiek

Pätky s rovnakou dĺžkou, šírkou, hĺbkou, textom betónu, spodnou sieťou a začínajúcimi prútmi zdieľajú značku: F1, F2 … v poradí, v akom boli umiestnené. Poloha a otočenie sa nepočítajú.

## Značky prútov

Prúty s rovnakou veľkosťou, tvarom a rozmermi A, B a C (zaokrúhlenými na milimeter) zdieľajú značku naprieč všetkými pätkami. Značka je číslo prúta, F a počítadlo pre každú veľkosť prúta: 5F1, 5F2, 6F1. Dlhý prút a krátky prút štvorcovej pätky sú ten istý prút a zdieľajú značku; stĺpec {{ui:Použitie}} v tabuľke uvádza obe použitia.
