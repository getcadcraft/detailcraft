---
title: Přehled výztuže
summary: Průměry prutů, rozměry háků, kódy tvarů, délky řezu a sloupce výkazu ohybů, které DetailCraft používá.
keywords: výztuž, průměry prutů, háky, průměr ohybu, kódy tvarů, délka řezu, výkaz ohybů, seznam prutů, astm a615, aci 318
from: 1583535e
---

## Průměry prutů

Podle ASTM A615/A615M, tabulka 1 (označení v palcové soustavě). Milimetry a kg/m jsou přesné přepočty publikovaných hodnot v palcích a lb/ft. Seznamy zobrazují každý průměr ve tvaru například „#5 (15.9 mm)".

| Prut | Průměr (mm) | Hmotnost (kg/m) | Plocha (mm²) | Vnitřní průměr ohybu | Rameno háku 90°, od vnějšku k vnějšku (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

V [Nastavení DetailCraft](topic:settings) ({{ui:Výztuž}}) mohou **názvy prutů ASTM** zobrazit tyto pruty pod jejich měkkými metrickými názvy A615M: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (tytéž pruty; ACI 315-99, tabulka 1, uvádí oba názvy).

### Metrické pruty (BS 4449)

| Prut | Průměr (mm) | kg/m | Min. poloměr ohybu r (mm) | Rameno háku = převis konce P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Hmotnost je nominální průřez krát 7850 kg/m³. Poloměr a převis konce jsou minima podle BS 8666:2020 (jeho tabulka minimálních rozměrů; dřívější průměr je 2r). Patky z prutů BS dostanou ramena háků P a délky řezu podle vzorců BS 8666 níže. Volba evropské oceli v nastavení založí nové patky se sítěmi H16 a startovacími pruty H20 v betonu C30/37.

## Háky

Pruty ASTM: standardní háky 90° podle ACI 318-19, tabulka 25.3.1: vnitřní průměr ohybu 6 db pro #3 až #8 a 8 db pro #9 až #11, s přímým prodloužením 12 db za ohybem. Rameno háku, měřené od vnějšku k vnějšku, je polovina průměru ohybu + db + 12 db.

Pokud se háku prutu sítě nevejde do hloubky patky uvnitř krytí, DetailCraft rameno zkrátí tak, aby se vešlo, a zobrazí varování.

## Tvary

DetailCraft ukládá tři tvary. Výkaz ohybů je tiskne jako kódy DetailCraftu, jako typy podle ACI 315 nebo jako kódy tvarů podle BS 8666: zvolte **Kódy tvarů výkazu ohybů** v [Nastavení DetailCraft](topic:settings) ({{ui:Výztuž}}).

| Kód | Tvar | Rozměry |
|---|---|---|
| S | Přímý | A = délka |
| L | Jeden ohyb 90° | A = hlavní rameno, B = rameno háku, obě od vnějšku k vnějšku |
| U | Dva ohyby 90° na téže straně | A = střed, B a C = dvě ramena, od vnějšku k vnějšku |

Sítové pruty s {{ui:Háky na koncích}} zapnutými jsou U, bez nich S. Startovací pruty s {{ui:Háky dole}} zapnutými jsou L, bez nich S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (obr. 10) |
|---|---|---|
| S | 00, L = A | bez typového čísla |
| L | 11, L = A + B − 0.5r − d | bez typového čísla: obrázek nemá prut s jedním háčkem |
| U | 21, A a C ramena, B střed: L = A + B + C − r − 2d | Typ 2, háky A a G, přímý B |

U kódů BS 8666 nebo ACI 315 sloupce A, B a C ve výkazu následují písmenování dané normy (střed U je B).

## Délka řezu

U prutů BS 4449 je délka řezu podle vzorce BS 8666 pro kód tvaru prutu (viz výše). U prutů ASTM je to přesná délka osy prutu: rovné části plus ohyby jako oblouky o poloměru rovném polovině průměru ohybu plus polovině průměru prutu. Nepočítá se z tabulky odečtů za ohyb, takže se může od výkazu, který tabulku používá, lišit o několik milimetrů.

## Rozložení

- Spodní síť: pruty podél L tvoří spodní vrstvu, pruty podél B na nich leží. Každá sada je rovnoměrně rozložena po patce uvnitř krytí, s roztečí, kterou zadáte, nebo hustší, a alespoň se dvěma pruty.
- Startovací pruty: mřížka prutů podél L a podél B v roztečích, které zadáte, vycentrovaná na patku, stojící na síti a přečnívající nad horní hranu o převis, který zadáte. Každý háček směřuje ven.

## Kontroly

| Kontrola | Pravidlo | Výsledek |
|---|---|---|
| Místo pro pruty | Krytí na obou stranách nechává místo pro pruty | Odmítnuto, pokud ne |
| Hloubka pro dvě vrstvy | Hloubka minus dvě krytí pojme obě vrstvy sítě | Odmítnuto, pokud ne |
| Startovací pruty se vejdou | Mřížka startovacích prutů se vejde do krytí | Odmítnuto, pokud ne |
| Volná vzdálenost | Alespoň větší z hodnot 25.4 mm a db (ACI 318-19, 25.2.1; velikost kameniva se neověřuje) | Varování |
| Hloubka háku | Rameno háku se vejde do hloubky uvnitř krytí | Varování, rameno zkráceno |
| Háky startovacích prutů | Háky zůstanou mimo krytí | Varování |

## Sloupce výkazu ohybů

Karta {{ui:Výkaz ohybů}} a její CSV mají tyto sloupce: Označení výztuže, Velikost, Tvar, A (mm), B (mm), C (mm), Počet, Délka řezu (mm), Celková délka (m), kg/m, Hmotnost kusu (kg), Celková hmotnost (kg), Použito pro. Poslední řádek sčítá počet, délku a hmotnost.
