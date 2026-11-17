---
title: Spojky
summary: Spojte dva kusy nosníku nebo sloupu na sraz pomocí šroubovaných krycích plechů pásnic a stojiny.
keywords: spojka, spojka nosníku, spojka sloupu, krycí plech, spojovací plech, plech pásnice, plech stojiny, šroubovaný spoj, spoj, zvedání, spojit
from: 97d141c2
---

Šroubovaná spojka spojí dva kusy jednoho I-profilu na sraz: krycí plech na vnější straně každé pásnice a plech na každé straně stojiny, přišroubované skrz oba kusy. DetailCraft zkrátí kusy na mezeru, umístí čtyři plechy, vyvrtá otvory v plechách i v obou kusech, přidá šrouby a upozorní na okrajové vzdálenosti, rozteče a uložení.

## Kde to funguje

- Dva nosníky nebo dva úseky sloupu stejného **I-profilu**, navazující na sebe **v jedné přímce**: konce nejvýše 50 mm od sebe, kusy rovnoběžné a na jedné přímce (v toleranci 1 mm). Kterýkoli kus může být nakreslen v kterémkoli směru.
- Fungují vodorovné, šikmé i svislé kusy.
- Dva kusy různé výšky nebo šířky pásnice se odmítnou, stejně jako U-profily, úhelníky a trubky.

## Přidání spojek

1. Nakreslete oba kusy tak, aby na sebe navazovaly koncem na konec. Chcete-li rozdělit již nakreslený prvek, nakreslete jej znovu jako dva kusy.
2. Vyberte jeden (nebo oba) kusy a zvolte {{ui:Spojka}} ve skupině {{ui:Spojit}} v nabídce {{ui:Více}}.
3. Každý volný spoj vybraných kusů s jiným kusem stejného profilu dostane spojku. Stavový řádek ukáže, kolik jich bylo.

Spojku vyberte (klikněte na některý její plech) a změňte její nastavení v pravém panelu. {{ui:Použít na podobné (n)}} ji zkopíruje na každý další volný spoj mezi kusy stejného profilu.

## Nastavení (mm)

| Nastavení | Výchozí | Co dělá |
|---|---|---|
| Mezera mezi konci | 10 | Každý kus se zkrátí o polovinu této hodnoty |
| Průměr šroubu, otvor, jakost, přídavek délky | 20, 22, A325, 30 | Stejně jako u koncových plechů |
| Tloušťka plechu pásnice | 12 | Plech je stejně široký jako pásnice |
| Řady šroubů pásnice (na každé straně) | 3 | Řady přes pásnici na každé straně spoje |
| Rozteč šroubů pásnice | 75 | Podél prvku |
| Vzdálenost šroubových řad pásnice | 0 | Mezi dvěma řadami šroubů; 0 = šířka pásnice mínus 80 |
| Okrajová vzdálenost pásnice | 40 | Od konce prvku k prvnímu šroubu a od posledního šroubu ke konci plechu |
| Tloušťka plechu stojiny | 8 | Jeden na každé straně stojiny |
| Řady šroubů stojiny | 3 | Nahoru po stojině, vycentrované |
| Sloupce šroubů stojiny (na každé straně) | 2 | Podél prvku na každé straně spoje |
| Rozteč šroubů stojiny, nahoru po stojině / podél prvku | 75, 75 | |
| Okrajová vzdálenost stojiny | 40 | Stejně jako u pásnic |
| Výška plechu stojiny | 0 | 0 = volná stojina mezi zaoblením mínus 10 nahoře a dole |
| Materiál plechu | A36 | Text |

Délky plechů vyplývají ze šroubů: plech pásnice = mezera + 2 × (2 × okrajová vzdálenost + (řady − 1) × rozteč); plechy stojiny obdobně se sloupci. Při výchozích hodnotách jsou plechy pásnic dlouhé 470.

## Dobré vědět

- Plechy patří **prvnímu nakreslenému** z obou kusů (jeho vlastnosti ho nazývají první kus): zobrazí se na jeho výkresu sestavy a dodají se s ním, přišroubované, nikoli svařené. Výkres sestavy druhého kusu zobrazuje jen jeho otvory.
- Šrouby pásnice svírají pásnici a její plech; šrouby stojiny svírají stojinu a oba plechy stojiny. Délky šroubů jsou uvedeny zvlášť ve vlastnostech.
- Upozornění používají stejná minima EN 1993-1-8 jako ostatní spoje (okrajová a koncová vzdálenost 1.2 × otvor, rozteč 2.2 × otvor podél a 2.4 × otvor napříč), plus plech stojiny hlubší než volná stojina a šrouby pásnice příliš blízko stojiny vzhledem k zaoblení.
- DetailCraft spojku nenavrhuje (bez pevnostní kontroly) a nevytváří výplňové plechy pro kusy různé tloušťky.
- Kopírování obou kusů zkopíruje i jejich spojku; smazání kteréhokoli kusu spojku smaže.
