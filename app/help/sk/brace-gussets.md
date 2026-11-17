---
title: Styčníkové plechy diagonál
summary: Pripojte koniec diagonály k stĺpu alebo nosníku styčníkovým plechom: uholníky a ploché tyče priskrutkované, rúrky zasunuté do drážky a zvárané.
keywords: styčníkový plech, styčníková doska, diagonála, zvislé zaistenie, uholníková diagonála, plochá tyč, pás, diagonála HSS, nožový plech, rúrka s drážkou, spoj
from: 22f6598d
---

Styčníkový plech diagonály je plech zvarený v dielni k stĺpu (alebo nosníku), na ktorý diagonála dosadá, v rovine diagonály. DetailCraft skráti diagonálu v spoji tak, aby nezasahovala do ničoho, umiestni a nadimenzuje plech a pripojí k nemu diagonálu: **uholník** alebo **plochú tyč** s jedným radom skrutiek, alebo **rúrku** (štvorcový, obdĺžnikový alebo okrúhly HSS) nasunutú cez plech a zvarenú.

## Kde to funguje

- Koniec diagonály leží na osi stĺpa alebo nosníka (do 1 mm) a diagonála nie je takmer rovnobežná s touto osou. Stĺp je podpora, ak tam je; inak nosník.
- Plech leží v rovine diagonály a osi podpory. **Uholník** musí mať jedno rameno v tejto rovine a **plochá tyč** svoju plochu: otočte diagonálu (jej {{ui:Rotation (°)}}), kým to nebude platiť. Ak sú ramená uholníka v 45° voči rovine, DetailCraft to oznámi a nič nevytvorí.
- I-profily a U-profily ako diagonály sa nepripájajú.

## Pridanie plechov

1. Vyberte jednu alebo viac diagonál.
2. Zvoľte {{ui:Gusset}} v ponuke {{ui:More}} skupiny {{ui:Connect}}.
3. Každý koniec vybraných diagonál, ktorý dosadá na stĺp alebo nosník a nemá plech, dostane plech.

Vyberte plech (kliknite na dosku), ak chcete zmeniť jeho nastavenia. {{ui:Apply to similar (n)}} skopíruje plech na každý voľný koniec diagonály s rovnakými profilmi diagonály a podpory.

## Čo DetailCraft vypočíta

- **Skrátenie.** Diagonála sa na tomto konci skráti, kým jej rohy nevyjdú z cesty, o {{ui:Brace clearance}} (25), o každý prvok v spoji (vedľa neho, alebo za jeho koncom, ak tam prvok končí) a o pätnú dosku pod stĺpom.
- **Skrutky (uholníky, ploché tyče).** {{ui:Bolts}} (3) v jednom rade pozdĺž diagonály, prvá {{ui:Bolt end distance}} (40) od rezaného konca, s {{ui:Bolt pitch}} (75). Pri uholníku prechádzajú ramenom v rovine plechu, {{ui:Bolt gauge}} od päty (0 = stred ramena); pri plochej tyči na jej strednej osi (alebo mimo nej o rozchod). Úchop skrutky = rameno alebo plochá tyč + plech.
- **Plech.** Obdĺžnik: od líca podpory von za poslednú skrutku o vzdialenosť konca a pozdĺž podpory toľko, koľko skrutky potrebujú. Leží na zadnej strane ramena uholníka (alebo na ploche plochej tyče). Pri rúrke prebieha cez stred rúrky, pod {{ui:Tube lap on the gusset}} (200) presahu rúrky, s miestom pre zvary.
- **Spoje.** Pri päte stĺpa sa plech vedie dolu na pätnú dosku. Kde nosník pretína spoj (diagonála smerom hore do rohu nosník-stĺp), plech zostane pod alebo nad nosníkom. Ak tým skrutky alebo presah stratia svoju vzdialenosť konca, DetailCraft upozorní.
- **Zvary.** Plech k podpore, z oboch strán. Rúrka k plechu, štyri čiary pozdĺž presahu.

## Dobré vedieť

- Plech patrí do zostavy podpory (zvarená v dielni). Diagonála sa dodáva s vyvŕtanými otvormi a ide do vlastného súboru NC.
- Drážka rúrky sa v modeli nevyrezáva; [kontrola kolízií](topic:clash-check) necháva diagonálu a jej plech bez zmeny.
- Plech nie je zvarený k nosníku, ktorého sa dotýka. Rohové plechy zvárané k nosníku aj stĺpu, zrazené rohy a rozloženie pracovných bodov spoja Uniform Force Method zatiaľ nie sú vytvorené.
- DetailCraft plech ani skrutky nenavrhuje (bez kontroly pevnosti); upozornenia sa týkajú rozstupov a dosadania.
