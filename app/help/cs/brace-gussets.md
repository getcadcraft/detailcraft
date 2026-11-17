---
title: Styčníkové plechy ztužidel
summary: Připojte konec ztužidla ke sloupci nebo nosníku styčníkovým plechem: úhelníky a ploché pásy přišroubované, trubky zasunuté a svařené.
keywords: styčníkový plech, ztužidlo, ztužení, svislé ztužení, úhelníkové ztužidlo, plochý pás, páska, ztužidlo HSS, nožový plech, zasunutá trubka, připojení
from: 22f6598d
---

Styčníkový plech ztužidla je plech dílensky svařený se sloupcem (nebo nosníkem), na který ztužidlo dosedá, v rovině ztužidla. DetailCraft ořeže ztužidlo na konci tak, aby nezasahovalo do ničeho ve spoji, umístí a dimenzuje styčník a spojí s ním ztužidlo: **úhelník** nebo **plochý pás** s jednou řadou šroubů, nebo **trubku** (čtvercovou, obdélníkovou nebo kruhovou HSS) nasunutou přes styčník a svařenou.

## Kde to funguje

- Konec ztužidla leží na ose sloupce nebo nosníku (do 1 mm) a ztužidlo není téměř rovnoběžné s touto osou. Sloupec je podpora, je-li tam; jinak nosník.
- Styčník leží v rovině ztužidla a v ose podpory. **Úhelník** musí mít jedno rameno v této rovině, **plochý pás** svou plochu: otáčejte ztužidlem ({{ui:Natočení (°)}}), dokud to neplatí. Pokud jsou ramena úhelníku v 45° k rovině, DetailCraft to oznámí a nic nevytvoří.
- Profily I a U jako ztužidla se nepřipojují.

## Přidání styčníků

1. Vyberte jedno nebo více ztužidel.
2. Zvolte {{ui:Styčník}} ve skupině {{ui:Spojit}} v nabídce {{ui:Více}}.
3. Každý konec vybraných ztužidel, který dosedá na sloupec nebo nosník a nemá styčník, dostane styčník.

Vyberte styčník (klikněte na plech), chcete-li změnit jeho nastavení. {{ui:Použít na podobné (n)}} zkopíruje styčník na každý volný konec ztužidla se stejným profilem ztužidla a podpory.

## Co DetailCraft spočítá

- **Zkrácení.** Ztužidlo se na tomto konci zkrátí, až jeho rohy projdou volně, o {{ui:Vůle ztužidla}} (25) od každého prvku ve spoji (vedle něj, nebo za jeho koncem, pokud prvek tam končí) a od patního plechu pod sloupcem.
- **Šrouby (úhelníky, ploché pásy).** {{ui:Šrouby}} (3) v jedné řadě podél ztužidla, první {{ui:Okrajová vzdálenost šroubu}} (40) od řezaného konce, v {{ui:Rozteč šroubů}} (75). U úhelníku procházejí ramenem v rovině styčníku, {{ui:Příčná rozteč šroubů}} od paty (0 = střed ramene); u plochého pásu na jeho střední ose (nebo mimo ni o tuto rozteč). Délka sevření = rameno nebo plochý pás + styčník.
- **Styčník.** Obdélník: od líce podpory ven za poslední šroub o okrajovou vzdálenost a podél podpory, kolik šrouby potřebují. Přiléhá k zadní straně ramene úhelníku (nebo k ploše plochého pásu). U trubky prochází středem trubky, pod {{ui:Přeplátování trubky na styčníku}} (200) trubky, s místem pro svary.
- **Spoje.** U paty sloupce je styčník veden dolů na patní plech. Když nosník protíná spoj (ztužidlo vede do rohu nosník–sloupec), styčník zůstává pod nebo nad nosníkem. Pokud tím šrouby nebo přeplátování ztratí okrajovou vzdálenost, DetailCraft varuje.
- **Svary.** Styčník k podpoře, z obou stran. Trubka ke styčníku, čtyři čáry podél přeplátování.

## Dobré vědět

- Styčník patří do sestavy podpory (dílensky svařeno). Ztužidlo se dodává s vyvrtanými otvory a jde do vlastního souboru NC.
- Zářez trubky se v modelu neřeže; [kontrola kolizí](topic:clash-check) ztužidlo i jeho styčník nevyhodnocuje.
- Styčník není svařen s nosníkem, kterého se dotýká, a rohové styčníky svařené s nosníkem i sloupcem, zkosené rohy a uspořádání pracovních bodů pro metodu Uniform Force Method zatím nejsou hotové.
- DetailCraft styčník ani šrouby nenavrhuje (žádné kontroly pevnosti); varování se týkají rozestupů a uložení.
