---
title: Lasverbindingen
summary: Verbind twee stukken van een ligger- of kolomuiteinde van uiteinde tot uiteinde, met geboute flens- en lijfafdekplaten.
keywords: lasverbinding, ligger-lasverbinding, kolom-lasverbinding, afdekplaat, laskopplaat, flensplaat, lijfplaat, geboute verbinding, verbinding, hijsen, verbinden
from: 97d141c2
---

Een geboute verbinding verbindt twee stukken van één I-profiel van uiteinde tot uiteinde: een afdekplaat buiten elke flens en een plaat aan elke kant van het lijf, dwars door beide stukken heen met bouten vastgezet. DetailCraft snijdt de stukken terug tot de opening, plaatst de vier platen, boort de gaten in de platen en in beide stukken, voegt de bouten toe en waarschuwt voor randafstanden, hartafstanden en passing.

## Waar het werkt

- Twee liggers, of twee kolomstukken, van **hetzelfde I-profiel**, die **uiteinde tot uiteinde in lijn** samenkomen: de uiteinden niet meer dan 50 mm uit elkaar, de stukken evenwijdig en op één lijn (binnen 1 mm). Elk stuk mag in elke richting getekend zijn.
- Horizontale, hellende en verticale stukken werken allemaal.
- Twee stukken met een verschillende hoogte of flensbreedte worden geweigerd, net als U-profielen, hoekprofielen en buizen.

## Verbindingen toevoegen

1. Teken de twee stukken zo dat ze uiteinde tot uiteinde samenkomen. Om een al getekend onderdeel te splitsen, tekent u het opnieuw als twee stukken.
2. Selecteer één (of beide) en kies {{ui:Las}} in het menu {{ui:Meer}} van de groep {{ui:Verbinden}}.
3. Elke vrije verbinding van de geselecteerde stukken met een ander stuk van hetzelfde profiel krijgt een verbinding. De statusbalk geeft aan hoeveel er zijn.

Selecteer de verbinding (klik op een van de platen) om de instellingen ervan te wijzigen in het rechterpaneel. {{ui:Toepassen op gelijke (n)}} kopieert haar naar elke andere vrije verbinding tussen stukken van hetzelfde profiel.

## Instellingen (mm)

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Opening tussen de uiteinden | 10 | Elk stuk wordt met de helft daarvan teruggesneden |
| Boutdiameter, gat, kwaliteit, lengtetoeslag | 20, 22, A325, 30 | Zoals bij eindplaten |
| Dikte flensplaat | 12 | De plaat is even breed als de flens |
| Boutrijen flens (elke kant) | 3 | Rijen over de flens aan elke kant van de verbinding |
| Boutafstand flens | 75 | Langs het onderdeel |
| Dwarsafstand bouten flens | 0 | Tussen de twee boutlijnen; 0 = flensbreedte min 80 |
| Eindafstand flens | 40 | Van het uiteinde van het onderdeel tot de eerste bout, en van de laatste bout tot het uiteinde van de plaat |
| Dikte lijfplaat | 8 | Één aan elke kant van het lijf |
| Boutrijen lijf | 3 | Omhoog langs het lijf, gecentreerd |
| Boutkolommen lijf (elke kant) | 2 | Langs het onderdeel aan elke kant van de verbinding |
| Boutafstand lijf, omhoog / langs het onderdeel | 75, 75 | |
| Eindafstand lijf | 40 | Zoals bij de flenzen |
| Hoogte lijfplaat | 0 | 0 = het vrije lijf tussen de overgangen, min 10 boven en onder |
| Plaatmateriaal | A36 | Tekst |

Plaatlengten volgen uit de bouten: flensplaat = opening + 2 × (2 × eindafstand + (rijen − 1) × afstand); de lijfplaten net zo met hun kolommen. Met de standaardwaarden zijn de flensplaten 470 lang.

## Goed om te weten

- De platen horen bij het **eerst getekende stuk** van de twee (in de eigenschappen heet dit het eerste stuk): ze verschijnen op de montagetekening daarvan en worden mee geleverd, gebout, niet gelast. De montagetekening van het tweede stuk toont alleen de gaten.
- Flensbouten klemmen de flens en zijn plaat vast; lijfbouten klemmen het lijf en beide lijfplaten vast. De boutlengten staan apart in de eigenschappen.
- Waarschuwingen gebruiken dezelfde EN 1993-1-8-minimumwaarden als de andere verbindingen (eind- en randafstand 1.2 × gat, hartafstand 2.2 × gat langs en 2.4 × gat dwars), plus een lijfplaat die dieper is dan het vrije lijf, en flensbouten die te dicht bij het lijf liggen voor de overgang.
- DetailCraft ontwerpt de verbinding niet (geen sterkteberekening) en maakt geen vulplaten voor stukken met verschillende dikte.
- Het kopiëren van beide stukken kopieert ook hun verbinding; het verwijderen van een van beide stukken verwijdert haar.
