---
title: Stomspaneler i trä och lättprofilstål
summary: Rama in vägg-, golv- och takpaneler i trä eller lättprofilstål, med varje del, en kapplista, en verkstadsritning och virket att köpa.
keywords: stomme, inramning, trä, virke, lättprofilstål, kallformad, regel, bjälke, sparre, överliggare, kantregel, fönsterregel, kortregel, kapplista, verkstadsritning, panel
from: 3e38ffb9
---

Fliken {{ui:Stomme}} ramar in paneler du beskriver och ger dig det som en stomlag och en virkesförsäljare behöver. Panelerna sparas i modellfilen.

:::warning
Dimensionerna, avstånden och överliggarna är dina. DetailCraft kontrollerar inte att en regel med det avståndet bär väggen eller att en överliggare spänner över öppningen: det är för din kods tabeller och din ingenjör.
:::

## Lägg till en panel

Välj {{ui:Lägg till en vägg}}, {{ui:Lägg till ett golv}} eller {{ui:Lägg till ett tak}}, och fyll sedan i måtten i millimeter, materialet (trä eller lättprofilstål) och elementstorleken. Trädimensioner är de nominella namnen med sina hyvlade mått (2×4 är 38 × 89 mm). Stålreglar namnges efter djup och tjocklek, till exempel `C92-1.2`.

## Väggar

En vägg har en bottensyll, en eller flera överstycken (en skena för stål), ändregler, regler med det avstånd du anger, och för varje öppning: två kantregler, två fönsterregler, en överliggare i den storlek och med det antal lager du väljer, samt kortregler över överliggaren (och under ett fönsters tröskel). Ange för varje öppning dess avstånd från vänster ände, dess bredd, och dess råa öppningsöverkant och -underkant, mätt från golvunderlaget; en dörr har underkant 0.

## Golv och tak

Ett golv har bjälkar över sin bredd längs spannet, kantbjälkar i båda ändar och, om du markerar det, blockning vid mittspannet. En takpanel är ett sadeltak: ett par sparrar med det avstånd du anger (deras längd inkluderar takfotens utsprång längs takfallet) och en nockbräda.

## Vad du får

Varje panel visar sina delar på en skalenlig ritning med varje del märkt, en kapplista per märkning och en summa. Tabellen {{ui:Virke att köpa}} placerar alla panelers kapningar i lagerlängder, den kortaste som rymmer varje stycks kapningar. {{ui:Spara verkstadsritningen (SVG)}} skriver ritningen; knappen {{ui:CSV}} skriver alla kapplistor och lagerlistan.

## Placera en panel i modellen

Under varje panel anger du var den ska sitta (x, y, z i millimeter och vinkeln) och trycker på {{ui:Placera som element}}: varje del blir ett element i modellen, med den hyvlade profilen i sin storlek och materialets vikt (cirka 500 kg/m³ för träet, stål för reglarna). En vägg går längs vinkeln från sin nedre vänstra ände med sin underkant vid z; ett golvs bjälkar ligger med sin undersida vid z; ett sadeltaks gavelfasad går längs vinkeln med z vid ytterväggens överkant. Varje lager av överliggaren är ett element bredvid varandra. Trycker du igen ersätts de element som tidigare placerats, och {{ui:Ta bort de placerade elementen}} tar bort dem; varje sådant är ett steg i ångra. Analysen utelämnar dessa element: de är inte stålelement i stommen.

## PDF-blad

{{ui:PDF-blad}} sparar en A3-sida för varje panel: panelen i skala med varje del märkt, de totala måtten, kapplistan och ett ritningshuvud.

Problem i panelen {{ui:Problem}}: en öppning för nära ändan av en vägg eller en annan öppning, en överliggare som inte ryms under överstyckena, en del längre än det längsta virket.

Panelen {{ui:Problem}} listar också **Gränssnitt (LOD 350)** för väggpaneler och betongväggar: en öppning som går förbi vägens ände eller överkant, två öppningar som överlappar varandra, och en öppning i en betongvägg som är bredare än 1000 mm utan kantjärn. Det är råd, samma regler som BimCrafts granskning använder; bredden är CadCrafts startvärde, inte en standard.
