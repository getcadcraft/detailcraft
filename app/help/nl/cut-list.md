---
title: Snijlijst
summary: Schik de liggers, kolommen, verbanden en trapbomen in voorraadlengten met zaagsnede, en zie hoeveel staven u moet kopen en hoeveel verlies er is.
keywords: snijlijst, schikken, voorraadlengte, staaf, zaagsnede, zaag, reststuk, restant, verlies, combineren, inkoop, meerdere
from: 81d06ce5
---

Het tabblad {{ui:Cut list}}, onder het aanzicht, bepaalt hoe de lineaire onderdelen van het model uit voorraadstaven gesneden kunnen worden: hoeveel staven van elke lengte u per profiel en materiaal moet kopen, wat op elke staaf komt en het verlies.

## Voorraad instellen

Bovenaan het tabblad:

- **Voorraadlengten (mm):** de lengten die u kunt kopen, gescheiden door spaties, bijvoorbeeld `6000 12000`, of staven van 20 ft en 40 ft als `6096 12192`. Maximaal acht.
- **Zaagsnede (mm):** wat elke snede wegneemt (in het begin 3).
- **Eindafsnijding (mm):** snijdt het uiteinde van elke staaf af vóór het eerste stuk (in het begin 0).
- **Reststukken bewaren vanaf (mm):** een reststuk van minstens deze lengte gaat terug naar de voorraad; een kortere is afval (in het begin 500).

Deze worden in deze browser bewaard, net als de andere [instellingen](topic:settings).

## Hoe het schikken werkt

- Elke ligger, kolom, verband en trapboom, per onderdeelmarkering en aantal; platen worden uit plaatmateriaal gesneden en worden hier niet geschikt.
- Elk profiel en materiaal afzonderlijk.
- De langste stukken eerst, elk in de eerste staaf waar het in past; een nieuwe staaf begint met de langste voorraadlengte. Daarna wordt elke staaf gekocht als de kortste voorraadlengte die nog al zijn sneden toelaat.
- Elke snede neemt de zaagsnede (niet na een snede die precies aan het einde van de staaf eindigt); elke staaf verliest de eindafsnijding.
- Een stuk dat langer is dan elke voorraadlengte wordt onder **Langer dan elke voorraad** vermeld en niet geschikt: splits het (zie [Splitsingen](topic:splices)) of voeg een langere voorraadlengte toe.

## Lezen

- **Samenvatting:** per profiel en materiaal de stukken, de te kopen staven (bijvoorbeeld "2 × 12000, 1 × 6000"), de gekochte en gebruikte meters en het verlies.
- **Staven en hun sneden:** elke staaf, zijn voorraadlengte, zijn sneden als onderdeelmarkering en lengte, en het reststuk, bewaard of als afval.

{{ui:Download CSV}} slaat beide tabellen op als `<naam> snijlijst.csv`.

DetailCraft schikt platen niet op plaatmateriaal en mengt geen profielen of materialen op één staaf.
