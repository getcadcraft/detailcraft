---
title: Kaart van wapeningscongestie
summary: Zie hoe krap de wapening elke fundering laat voor het beton om naar beneden te komen, met het toeslagmateriaal en de trilnaald die u opgeeft.
keywords: wapening, congestie, afstand, vrije afstand, betonstorten, toeslagmateriaal, trilnaald, aansluitwapening, haken, fundering, wapeningsmat
from: 40d029e6
---

Het tabblad {{ui:Congestie}} tekent een warmtekaart van elke fundering, gezien van bovenaf. Lichtblauw is open; geel en oranje worden krap; rood is krapper dan de staven vragen. Donkere vlakken zijn de staven zelf.

## Wat de kaart meet

Beton zakt door het staal laag na laag en kan zijdelings tussen de lagen bewegen. Dus op elk punt neemt de kaart de smalste vrije ruimte in elke laag: tussen de staven van de onderste mat, tussen de volgende laag staven, en tussen de haakpoten van de aansluitstaven bovenop. De aansluitstaven staan door alle lagen heen.

## Wat als krap telt

De eis is het grootste van 25 mm en de staafdiameter (ACI 318-19 25.2.1), of, voor BS 4449-staven, het grootste van de staafdiameter en 20 mm (EN 1992-1-1 8.2). Twee vakken verhogen die eis:

- {{ui:Grootste toeslagmateriaal}}: de eis wordt 4/3 van de toeslagmateriaalmaat (ACI), of het toeslagmateriaal plus 5 mm (EN).
- {{ui:Trilnaaldkop}}: de eis is minstens de diameter van de kop.

Beide beginnen op 0, wat betekent: onbekend. DetailCraft kent uw mengsel en uw pomp niet.

## Problemen

Een fundering met een plek die krapper is dan de eis, staat in het paneel {{ui:Problemen}}, met de gevonden opening en de benodigde opening. {{ui:Selecteren}} naast een kaart selecteert de fundering.

De kaart ziet geen beugels, koppelingen, kanalen of de eigen staven van de kolom.
