---
title: Výztuž obdélníkového betonového sloupu
summary: Zpracovaný příklad detailování obdélníkového betonového sloupu v DetailCraftu: umístěte jej, dejte mu podélné pruty a třmínky, přečtěte kontroly, přesah nad ním a označení prutů a nakreslete jeho dílenský list.
keywords: betonový sloup, obdélníkový sloup, výztuž sloupu, podélné pruty, svislé pruty, třmínky, sponky, příčné sponky, přesah, spoj výztuže, startovací pruty, stupeň vyztužení sloupu, 1 procento, 8 procent, rozteč třmínků, ACI 318-19 25.7.2, EN 1992-1-1 9.5, dílenský výkres, označení prutů, 8C1, 3C2
from: aee2a3ca
---

Tento návod provede jedním čtvercovým sloupem od nuly až k zkontrolovanému, nakreslenému a zapsanému detailu. Obecná pravidla pro nosníky, desky a stěny jsou v [Detailování železobetonu](topic:reinforced-concrete); tohle je část pro sloup, s čísly, která si můžete zopakovat.

:::warning
DetailCraft detailuje pruty, které mu zadáte. Nenavrhuje je. Pruty níže jsou výchozí hodnoty pro příklad, ne doporučení: velikost, počet a rozteč volí odpovědný inženýr.
:::

## Co zde sloup znamená

Obdélníkový sloup má šířku (podél své místní osy x) a hloubku napříč (podél místní osy y), čisté krytí ke třmínkům, podélné pruty na každé straně a uzavřené třmínky. Otočení otočí celek; strany zůstávají "strana šířky" a "strana hloubky".

- Podélné pruty se zadávají jako počet na straně šířky a počet na straně hloubky. Rohové pruty se počítají na obou, takže 3 a 3 dají 8 prutů; 4 a 4 dají 12.
- Třmínky jsou uzavřené obdélníky se dvěma háky v jednom rohu, 135° nebo 90°. První třmínek je ve stanovené vzdálenosti nad podlahou (a pod dalším), koncové zóny mají hustější rozteč, střed širší.
- Co pruty dělají nahoře: pokračují a přesahují s pruty nad nimi, zahnou se 90° háky do podlahy, nebo končí pod horní hranou.

## Příklad sloupu

Sloup 400 × 400 mm, 3600 mm mezi podlažím nad a pod ním, podélné pruty #8, třmínky #3, čisté krytí 40 mm, f'c 28 MPa, fy 420 MPa, ACI 318-19, vnitřní.

1. Otevřete kartu {{ui:Concrete}} a nastavte osy a úrovně, na kterých sloup stojí (levý panel).
2. V {{ui:Add by grid}} zvolte {{ui:Concrete column}}, vyberte průsečík os a dvě úrovně, nastavte {{ui:Width (mm)}} a {{ui:Depth across (mm)}} na 400 a zvolte {{ui:Add}}.
3. Na panelu {{ui:Properties}} nastavte:
   - {{ui:Clear cover (mm)}} 40;
   - {{ui:Longitudinal bars}} #8, {{ui:Bars on a width face}} 3, {{ui:Bars on a depth face}} 3;
   - {{ui:Ties}} #3, {{ui:Hooks}} 135°, {{ui:Spacing between (mm)}} 300, {{ui:End zone length (mm)}} 600, {{ui:Spacing in the end zones (mm)}} 150, {{ui:First one from the face (mm)}} 50;
   - {{ui:Bars at the top}} {{ui:Run on and lap with the bars above}}.

Každá změna je jeden krok zpět.

### Výsledek

| Část | Výsledek |
|---|---|
| Podélné pruty | 8 prutů #8 (kruh 3 × 3), každý dlouhý 4375 mm: sloup 3600 mm plus přesah 775 mm nad ním |
| Přesah | 757 mm potřeba pro přesah v tlaku (ACI 318-19 25.5.5.1, fy 420), 775 mm zajištěno: potřeba zaokrouhlena nahoru na nejbližších 25 mm |
| Třmínky | 17 třmínků #3, každý o délce řezu asi 1359 mm, rozteč 150 mm ve dvou koncových zónách po 600 mm a 300 mm mezi nimi |
| Stupeň vyztužení | 2.5 % hrubého průřezu (limity 1 % až 8 %, ACI 318-19 10.6.1.1) |
| Čistá vzdálenost prutů | 112 mm (potřeba nejméně 40 mm, ACI 318-19 25.2.3) |
| Rozteč třmínků | 300 mm (dovoleno 400 mm: nejmenší z 16 průměrů prutů, 48 průměrů třmínku a menší strany, ACI 318-19 25.7.2.1) |
| Velikost třmínku | #3 (dovoleno od 9.5 mm, ACI 318-19 25.7.2.2) |

Všechny jsou v seznamu {{ui:Checks}} prvku; přesah je také v {{ui:Laps and anchorage}}.

## Příčné sponky

S jedním obvodovým třmínkem jsou drženy jen rohové pruty. ACI 318-19 25.7.2.3 dovoluje střednímu prutu na straně zůstat bez podepření, je-li do 150 mm čisté vzdálenosti od rohového prutu. S 3 pruty na straně, jako výše, to splněno je. Se 4 nebo více pruty na straně splněno není a DetailCraft to hlásí jako varování ({{ui:Checks}} a Problémy): potřebné jsou "příčné sponky". **Příčné sponky zatím nejsou nakresleny**: přidejte je ve výkresu ručně, nebo zvolte méně prutů na straně.

Pro EN 1992-1-1 DetailCraft kontroluje průměr prutu (nejméně 8 mm), počet prutů (nejméně 4), plochu oceli (0.2 % až 4 % průřezu), čistou vzdálenost a rozteč třmínků (9.5.2 a 9.5.3).

## Přesah, patka a sloup pod ním

- Kde **pod sloupem stojí patka modelu**, sloup přesahuje se startovacími pruty patky a jejich přesah se také kontroluje.
- Kde **pod ním stojí jiný sloup modelu**, přesahuje s pruty toho sloupu.
- Zadejte vlastní {{ui:Lap length (mm, 0 = as needed)}} pro přepsání; kratší, než je potřeba, je problém a v tabulce je označen *.
- Přesahy v tlaku se používají ve výchozím stavu ({{ui:Compression lap}} v nastavení); zvolte {{ui:Tension lap}}, když může být sloup v tahu.

## Označení, výkaz a dílenský list

Stejné pruty sdílejí jedno označení: podélné pruty výše uvedeného sloupu jsou 8C1, jeho třmínky 17C2 (nejprve číslo, pak písmeno druhu C pro sloup a pořadové číslo). Objeví se na kartě {{ui:Bending schedule}} s délkou řezu a hmotností a v CSV z {{ui:Output}} › {{ui:More}} › {{ui:Bending}}.

Zvolte {{ui:Shop drawing}} vedle sloupu pro list se sloupem v pohledu (každý prut, jeho označení, zóny třmínků a přesah okótované) a řezem uprostřed, následovaný listem ohýbání prutů. Uložte {{ui:This sheet as PDF}}.

## Co tento návod nedělá

- Kulaté sloupy a spirály a sloupy, které nejsou obdélníkové: ještě nejsou hotové.
- Rohové a příčné sponky uvnitř průřezu a seismické detailování (ACI 318-19 kapitola 18): ještě nejsou hotové.
- Spoje na místech, která zvolíte, nebo střídavé: všechny pruty přesahují v jednom řezu.
- Zda jsou pruty pro zatížení dostatečné: to je návrh inženýra.
