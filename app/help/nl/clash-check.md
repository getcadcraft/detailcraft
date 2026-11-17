---
title: Controleren op clashes
summary: Zoek liggers, platen en funderingen die in elkaar steken, met uitzondering van de delen die een verbinding bedoeld is om te raken, en ga naar elke clash.
keywords: clash, clashcontrole, botsing, interferentie, overlap, snijden, harde clash, coördinatie, modelcontrole
from: 04d72d3b
---

Open het tabblad {{ui:Botsingen}} onder de weergave en kies {{ui:Nu controleren}}. DetailCraft bekijkt elk paar onderdelen in de getoonde fasen: staal in staal, en staal in een fundering. Het tabblad toont elke clash, de diepste eerst, met:

- de twee onderdelen, via het onderdeelmerk (of het merk van de fundering) en het profiel;
- **Overlap (mm)**: hoe ver een punt van het ene onderdeel binnen het andere ligt, tot het dichtstbijzijnde vlak;
- **Nabij**: het rasterkruispunt en het niveau waar het ligt, of de coördinaten;
- {{ui:Tonen}}: selecteert beide onderdelen en brengt de plek naar het midden van de weergave.

De titel van het tabblad toont hoeveel clashes de laatste controle vond. De controle loopt niet vanzelf: na een wijziging in het model meldt de lijst dat, en {{ui:Nu controleren}} voert hem opnieuw uit.

## Wat geen clash is

- Onderdelen die elkaar alleen raken: een plaat tegen een flens, een voetplaat op zijn fundering, twee liggers uiteinde aan uiteinde. **Tolerantie (mm)** bepaalt hoe ver twee onderdelen in elkaar mogen steken voordat het telt (1 mm om mee te beginnen; tot 50).
- Onderdelen die een verbinding verbindt: een kopplaat met zijn ligger en met de kolomflens waaraan hij is gebout, de ligger en de kolom van die knoop, een voetplaat met zijn kolom, de platen van een las met beide stukken, een verband met zijn knoopplaat (de sleuf van een buis wordt niet in het model gesneden). De verbinding bedoelt dat ze elkaar raken.
- De schuifnok van een voetplaat in de fundering eronder (hij zit in een mortelpocket).
- Bouten en ankerbouten (ze gaan door gaten) en wapening.
- Onderdelen in verborgen fasen. Zie [Fasen](topic:phases).

Een verband of ligger die in een kolom loopt zonder verbinding tussen beide, **is** een clash: die knoop heeft nog een verbinding nodig. Het verband van het voorbeeldframe laat dat zien: het heeft geen knoopplaat. Selecteer het en kies {{ui:Knoopplaat}} ([Knoopplaten voor verbanden](topic:brace-gussets)), dan verdwijnen de clashes.

## Goed om te weten

- Overlap meet de diepte in materiaal, dus een ligger die in het dunne lijf of de flens van een kolom loopt toont maar enkele millimeters, ook als hij ver doorloopt.
- Onderdelen worden gecontroleerd zoals ze zijn gesneden: coping en het terugsnijden van een ligger bij zijn kopplaten worden meegenomen. Gaten niet.
