---
title: Preskúmanie ukážkového rámu
summary: Otvorte vstavaný dvojpoľový rám a použite ho na pochopenie toho, čo DetailCraft vytvára, od značiek až po súbory NC.
keywords: ukážka, príklad, demo, rám, učiť sa, prehliadka, vyskúšať
from: 5c5944dd
---

Ukážkový rám je malý, úplný model: každý druh prvku, ktorý DetailCraft vytvára, sa v ňom objaví aspoň raz. Je to najrýchlejší spôsob, ako sa naučiť aplikáciu a otestovať export skôr, než sa na neho spoľahnete.

## Otvorenie

1. V skupine {{ui:Súbor}} vyberte {{ui:Ukážka}}.
2. Ak váš aktuálny model obsahuje neuložené zmeny, vyberte {{ui:Najprv uložiť}} alebo {{ui:Zahodiť zmeny}}.
3. Stavový riadok hlási "Ukážkový rám: 6 stĺpov s pätnými doskami, 4 nosníky s čelnými doskami, diagonála, 7 pätiek s výstužou."

Ukážka sa otvorí ako nový model s názvom "Ukážkový rám". Nič iné nemení a nemá čo vrátiť späť.

## Čo obsahuje

- **Osi** 1, 2, 3 po 6000 mm a A, B po 7000 mm. **Úrovne** Úroveň 1 na 0 a Úroveň 2 na 4000.
- **Šesť stĺpov**, W12x50, od Úrovne 1 po Úroveň 2 na každom priesečníku, každý na pätnej doske 25 mm so štyrmi kotevnými tyčami.
- **Štyri nosníky**, W16x26, na Úrovni 2 pozdĺž osí A a B, horná hrana ocele na úrovni, s čelnou doskou priskrutkovanou zarovno na oboch koncoch (spolu osem).
- **Jedna diagonála**, HSS4x4x1/4, od A/1 na Úrovni 1 hore k A/2 na Úrovni 2.
- **Šesť plošných pätiek**, 2000 x 2000 x 600, jedna pod každým stĺpom, so spodnou výstužnou sieťou s hákmi v oboch smeroch.
- **Ešte jedna pätka** vedľa rámu, 2400 x 1800 x 600, so šiestimi čakacími prútmi s hákmi vztýčenými pre betónový pilier.

## Čo vyskúšať

1. Kliknite na nosník. Prečítajte si jeho {{ui:Značka dielca}}, {{ui:Zostava}}, {{ui:Rezná dĺžka}} a {{ui:Skrátenie}}: rezná dĺžka je kratšia než rozstup osí 6000 mm, pretože každá čelná doska skráti nosník o polovicu hĺbky stĺpa plus hrúbku dosky.
2. Kliknite na stĺp. Pod {{ui:Otvory}} sú uvedené otvory, ktoré čelné dosky vytvorili v jeho prírube ("8 otvorov z spojov"; stredové stĺpy majú 16, jednu sadu v každej prírube).
3. V zozname {{ui:Značky dielcov}} vľavo vidíte, že všetky štyri nosníky zdieľajú jednu značku: sú to ten istý kus ocele. Rohové stĺpy tiež zdieľajú značku, hoci ich otvory smerujú opačne, lebo stĺp otočený koncami je ten istý kus. Stredové stĺpy s otvormi v oboch prírubách dostanú inú značku.
4. Kliknite na čelnú dosku (alebo na jednu z jej skrutiek). Panel {{ui:Vlastnosti}} zobrazí nastavenia dosky, skrutiek a zvaru, skrutky, ktoré vytvára (s dĺžkou vypočítanou z upnutia), a všetky upozornenia na vzdialenosť od okraja.
5. Otvorte kartu {{ui:Kusovník}}. Diely, zostavy (nosník s dvoma čelnými doskami je jedna zostava), skrutky a kotevné tyče sú uvedené s hmotnosťami. Mali by ste vidieť šesť značiek dielcov: c1 (dva stredové stĺpy) a c2 (štyri rohové stĺpy), obe W12x50 pri 3975 mm; b1, štyri nosníky W16x26 pri 5650 mm; br1, diagonála; p1, osem čelných dosiek PL20x180; a p2, šesť pätných dosiek PL25x400. Spojovací materiál tvorí 64 skrutiek 20 x 70 A325 a 24 kotevných tyčí 20 x 575.
6. Otvorte kartu {{ui:Výkaz ohýbania}}. Šesť rovnakých pätiek zdieľa značky prútov; pätka piliera pridáva vlastné.
7. Kliknite na diagonálu a pozrite sa do skupiny {{ui:Výstup}}: {{ui:Dielenský výkres}} je neaktívny, pretože dielenské výkresy zatiaľ pokrývajú iba I-profily a plechy.
8. Vyberte {{ui:Súbory NC}}. Archív ZIP obsahuje súbor pre každú značku I-profilu a plechu; stavový riadok uvedie značku diagonály ako nezapísanú.
9. Vyberte {{ui:IFC}} a súbor otvorte v ľubovoľnom prehliadači IFC, aby ste overili, ako ho číta váš ostatný softvér.

## Použitie ako východiskový bod

Ukážka je bežný model. Zmeňte ju, potom ju premenujte v poli {{ui:Názov}} a uložte pod novým názvom pomocou {{key:Mod+S}}.
