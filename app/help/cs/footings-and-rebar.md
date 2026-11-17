---
title: Umístění patek s výztuží
summary: Umístěte obdélníkové plošné patky se spodní sítí a výčnělky prutů, zkontrolujte je a stáhněte výkaz ohybů.
keywords: patka, plošná patka, základ, výztuž, armatura, pruty, síť, výčnělky, trny, výkaz ohybů, seznam prutů, beton, háky, krytí
from: 41a048be
---

Toto téma se týká obdélníkových plošných patek. Trámy, sloupy, desky a stěny jsou v [Detail železobetonu](topic:reinforced-concrete). Každá patka dostane spodní síť v obou směrech a, pokud ji chcete, výčnělky prutů vystupující z patky nahoru. Pruty jsou americké velikosti #3 až #11.

## Umístění patky

1. Zvolte {{ui:Půdorys}} a vyberte úroveň horní hrany patky.
2. Zvolte {{ui:Patka}} ve skupině {{ui:Umístit}}, nebo stiskněte {{key:F}}.
3. Nastavte patku v panelu {{ui:Vlastnosti}} (viz níže), nebo ponechte výchozí hodnoty.
4. Klikněte na průsečík os. Patka bude vystředěna na tomto průsečíku, její horní hrana bude v úrovni. Stavový řádek hlásí například „Patka 2000 x 2000 x 600 pod A/1.“

Můžete také použít formulář {{ui:Přidat podle os}} ve spodní části panelu.

Patka je vykreslena průhledně, abyste viděli její pruty, které jsou zobrazeny jako plné trubice.

## Nastavení patky

| Pole | Výchozí | Poznámky |
|---|---|---|
| Délka L (mm) | 2000 | Podél x; 300 až 50000 |
| Šířka B (mm) | 2000 | Podél y; 300 až 50000 |
| Hloubka H (mm) | 600 | 150 až 10000 |
| Beton | 4000 psi | Text, vytištěný v exportu IFC |

**Spodní síť**

| Pole | Výchozí | Poznámky |
|---|---|---|
| Dlouhé pruty | #5 | Pruty podél L, spodní vrstva |
| Rozteč (mm) | 250 | Největší přípustná rozteč; pruty jsou rozmístěny rovnoměrně s touto roztečí nebo menší |
| Krátké pruty | #5 | Pruty podél B, položené na dlouhých prutech |
| Rozteč (mm) | 250 | Stejně jako výše |
| Krytí (mm) | 75 | Čisté krytí na každé straně |
| Koncové háky | Zapnuto | Obě konce každého prutu sítě se ohnou nahoru do standardního háku 90° (tvar U); vypnuto dává rovné pruty (tvar S) |

**Výčnělky**

| Pole | Výchozí | Poznámky |
|---|---|---|
| Výčnělky | Zapnuto | Vypněte je u patky bez výčnělků |
| Prut | #6 | |
| Pruty podél L / Pruty podél B | 2 / 2 | Mříž prutů vystředěná na patce |
| Rozteč podél L / Rozteč podél B | 250 / 250 | Mezi středy prutů |
| Výstup nad horní hranou | 600 | Jak daleko pruty vystupují nad horní hranu patky |
| Spodní háček | Zapnuto | Háček 90° směřující ven, opřený o síť (tvar L) |

Pod poli DetailCraft zobrazuje rameno háku pro dlouhé pruty, například „Rameno háku pro #5: 254 mm vně na vně.“

## Změna umístěné patky

Vyberte patku (klikněte na její beton mimo sloupy, nebo na jeden z jejích prutů). Dostanete stejná pole plus {{ui:Střed x}}, {{ui:Střed y}}, {{ui:Horní z}} a {{ui:Natočení (°)}}. Pod nimi tabulka uvádí pruty této patky s jejich značkami, počty a délkami a objem betonu v krychlových metrech.

Každá změna se před uložením kontroluje. Změna, kterou nelze provést, se odmítne a stavový řádek uvede důvod, například „Krytí nenechává v této patce místo pro pruty.“, „Patka je příliš mělká pro dvě vrstvy prutů uvnitř krytí.“ nebo „Výčnělky se s krytím 75 mm nevejdou do patky.“

Změny, které lze provést, ale potřebují kontrolu, jsou uvedeny pod patkou a na záložce {{ui:Problémy}}:

- Pruty #11 s roztečí 59.6 mm nechávají čistou mezeru menší než 35.8 mm (ACI 318-19 25.2.1). Čistá mezera mezi pruty musí být nejméně průměr prutu a nejméně 25.4 mm.
- Háky #5 potřebují hloubku 254 mm; uvnitř krytí se vejde jen 150 mm. Ramena háků se pak zkrátí, aby se vešla, takže už nejsou standardní háky.
- Háky výčnělků zasahují do krytí.
- Výčnělky jsou blíže, než je nejmenší přípustná čistá rozteč.

## Značky prutů a výkaz ohybů

Shodné pruty (stejná velikost, tvar a rozměry na milimetr) sdílejí značku prutu napříč všemi patkami. Značky se píší jako `<číslo prutu>F<n>`: 5F1, 5F2 pro pruty #5, 6F1 pro první prut #6 atd. Patky se stejnou velikostí, betonem, sítí a výčnělky sdílejí značku patky: F1, F2 …

1. Otevřete záložku {{ui:Výkaz ohybů}} ve spodní části. Každý řádek je jedna značka prutu: velikost, tvar, rozměry A, B a C, počet, délka řezu, celková délka, hmotnost na metr, hmotnost jednoho kusu, celková hmotnost a k čemu prut slouží.
2. Zvolte {{ui:Stáhnout CSV}} na záložce, nebo {{ui:Ohýbání}} v nabídce {{ui:Více}} ve skupině {{ui:Výstup}}, pro `<name> bending schedule.csv`.

Tvary jsou vlastní kódy DetailCraftu, ne kódy nějaké normy: S rovný, L jeden ohyb, U dva ohyby. Rozměry jsou vně na vně; délka řezu je přesná délka středové čáry přes ohyby. Viz [Referenční údaje o výztuži](topic:rebar-reference).

## Co DetailCraft nekontroluje

- Délky vývoje a přesahů a to, zda jsou výčnělky dost dlouhé pro sloup nad nimi.
- Část pravidla čisté rozteče týkající se velikosti kameniva (nezná směs).
- Cokoli o sloupu nebo patním plechu nad patkou: patky a ocel jsou oddělené.

Viz také [Co ještě není hotovo](topic:not-built-yet).
