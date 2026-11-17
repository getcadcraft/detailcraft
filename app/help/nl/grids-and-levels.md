---
title: Rasters en niveaus instellen
summary: Typ de rasterlijnen, hun afstanden en de niveaus waarop elke staaf wordt geplaatst.
keywords: raster, rasters, assen, rasterlijnen, niveaus, hoogten, verdiepingen, vloeren, afstanden, instellen
from: 9cad233c
---

Elke staaf in DetailCraft wordt geplaatst op een rasterkruising op een niveau. Stel eerst de rasters en niveaus in; u kunt ze later wijzigen.

## Hoe rasters hier werken

- **Genummerde lijnen** lopen de ene kant op, **lijnen met letters** de andere. De namen zijn alleen gewoonte: een label mag elke tekst van maximaal 8 tekens zijn (1, 2, 3 of A1, A2, of 10, 20).
- U typt de labels en de afstanden ertussen, geen coördinaten. De eerste lijn van elke reeks ligt op 0.
- Genummerde lijnen zijn lijnen met een constante x; lijnen met letters zijn lijnen met een constante y. Een balk van raster 1 naar raster 2 loopt dus langs x, en een balk van A naar B loopt langs y.
- Alle waarden zijn in millimeters.

Een nieuw model begint met genummerde lijnen 1 2 3 op 6000 6000, lijnen met letters A B op 6000 en twee niveaus.

## De rasters instellen

1. Open in het paneel {{ui:Model}} links {{ui:Rasters}} als het is ingeklapt.
2. Typ in {{ui:Genummerde lijnen}} de labels, gescheiden door spaties, bijvoorbeeld `1 2 3 4 5`.
3. Typ in het veld {{ui:Afstanden}} eronder één afstand voor elke tussenruimte, bijvoorbeeld `6000 6000 7500 6000`. Vier tussenruimten voor vijf lijnen.
4. Doe hetzelfde bij {{ui:Gelettterde lijnen}} en de bijbehorende {{ui:Afstanden}}, bijvoorbeeld `A B C` en `8000 8000`.
5. Kies {{ui:Rasters toepassen}}.

De statusbalk toont "Rasters bijgewerkt." en de weergave zoomt naar het nieuwe raster. Komma's werken ook als scheidingsteken.

Klopt er iets niet, dan verandert er niets en zegt de statusbalk waarom, bijvoorbeeld "Genummerde rasters: geef één afstand tussen elk paar lijnen (4)." Andere controles: afstanden moeten positieve millimeters zijn, labels moeten verschillen, en er mogen hoogstens 60 lijnen per richting zijn.

:::note
Staven behouden hun coördinaten wanneer rasters verschuiven. Als u een afstand wijzigt nadat u staal hebt geplaatst, blijft het staal waar het was en ligt het niet meer op het raster. Wijzig eerst het raster, of verplaats staven door hun eindcoördinaten te bewerken.
:::

## De niveaus instellen

1. Open {{ui:Niveaus}} in het paneel {{ui:Model}}.
2. Elke rij heeft een niveaunaam en zijn hoogte in millimeters. Bewerk ze naar wens.
3. Kies {{ui:Niveau toevoegen}} voor een extra rij. Die krijgt de naam "Niveau 3" (enzovoort) en wordt 4000 mm boven het hoogste niveau geplaatst; wijzig beide als dat nodig is.
4. Kies de knop × aan het eind van de rij om een niveau te verwijderen.
5. Kies {{ui:Niveaus toepassen}}.

Er verandert niets totdat u {{ui:Niveaus toepassen}} kiest. Niveaus worden bij het toepassen gesorteerd op hoogte. Elk niveau heeft een naam nodig, twee niveaus kunnen geen naam delen, en u moet minstens één niveau houden.

Niveaus mogen onder nul liggen (een kelder op `-3500`) en hoeven niet gelijkmatig verdeeld te zijn.

## Hoe niveaus worden gebruikt

- Een kolom die op een niveau wordt geplaatst, loopt door tot het volgende niveau, of tot het niveau dat u kiest in {{ui:Tot}}.
- Balken en platen worden geplaatst tussen twee kruisingen op het niveau dat u aanklikt.
- Funderingen worden geplaatst met hun bovenkant op het niveau dat u aanklikt.
- {{ui:Plattegrond}} kijkt steeds naar één niveau van bovenaf.
- De IFC-export maakt per niveau één bouwlaag.

## Ongedaan maken

Wijzigingen aan rasters en niveaus zijn bewerkingen zoals alle andere: met {{key:Mod+Z}} zet u het vorige raster terug.

## Volgende

[Kolommen, balken en verbanden plaatsen](topic:place-members)
