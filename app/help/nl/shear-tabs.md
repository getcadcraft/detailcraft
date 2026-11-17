---
title: Schuiforen
summary: Bout het lijf van een balk aan een plaat die in de werkplaats op een kolomflens of -lijf is gelast, ook waar de balk in plattegrond schuin op de kolom aansluit of hellend is.
keywords: schuifoor, enkele plaat, vinplaat, eenvoudige verbinding, lijfverbinding, scheef, schuin, hellend, schuine balk, bouten, verbinden
from: 18afc8ab
---

Een schuifoor (enkele plaat, vinplaat) is een plaat die in de werkplaats op de kolom is gelast; op de bouwplaats wordt het lijf van de balk er met één verticale rij bouten aan gebout. DetailCraft plaatst de schuifoor, snijdt de balk terug zodat hij vrij van de kolom is, boort de gaten in de schuifoor en in het lijf van de balk, voegt de bouten en de las toe, en waarschuwt bij randafstanden en passing.

## Waar het werkt

- Een balk (I-profiel of U-profiel) waarvan het einde op de lijn van een **verticale** I-profiel-kolom ligt en aansluit op diens **flens** of **lijf**.
- **Recht, scheef in plattegrond, of hellend**: de schuifoor volgt het lijf van de balk, en de balk is zo teruggesneden dat zijn dichtstbijzijnde hoek de vrije ruimte tot de kolom houdt. Een balk die steiler dan 60° loopt of daalt, wordt geweigerd.

## Schuiforen toevoegen

1. Selecteer de balk.
2. Open in de groep {{ui:Verbinden}} {{ui:Meer}} en kies {{ui:Schuiforen}} (of kies {{ui:Schuiforen toevoegen}} in het paneel {{ui:Eigenschappen}}).
3. Elk vrij uiteinde van de balk dat een kolom raakt, krijgt een schuifoor. Elk balkuiteinde neemt één verbinding: een schuifoor of een eindplaat.

Selecteer een schuifoor (klik erop, of een bout) om zijn instellingen te zien en te wijzigen. {{ui:Toepassen op vergelijkbare}} kopieert hem, als schuifoor, naar elk vergelijkbaar knooppunt dat nog geen verbinding heeft.

## Instellingen (mm)

| Instelling | Start bij | Betekenis |
|---|---|---|
| Plaatdikte | 10 | De dikte van de schuifoor |
| Plaatbreedte | 115 | Hoe ver de schuifoor uit het kolomvlak steekt, langs de balk |
| Boutdiameter, Gatdiameter, Boutkwaliteit | 20, 22, A325 | Zoals bij eindplaten |
| Boutrijen, Rijafstand | 3, 75 | De bouten in de verticale rij |
| Randafstand (bovenste en onderste bouten) | 38 | Van de bovenste en onderste bouten tot de uiteinden van de schuifoor; de schuifoor is rijen × afstand + 2 × dit diep |
| Boutgroep verhoogd met | 0 | 0 centreert de bouten op de balkhoogte |
| Vrije ruimte tot de kolom | 13 | De vrije ruimte tussen de kolom en de dichtstbijzijnde hoek van de balk |
| Boutlijn vanaf het kolomvlak | 65 | Langs de balk, van het kolomvlak tot de bouten |
| Toeslag boutlengte | 30 | Opgeteld bij de grip (schuifoor + lijf van de balk), naar boven afgerond op 5 mm |
| Maat hoeklas | 6 | Aan beide zijden van de schuifoor naar de kolom |

## Goed om te weten

- De schuifoor hoort bij de samenstelling van de kolom (in de werkplaats gelast); de samenstelling van de balk heeft alleen gaten.
- Een scheve of hellende balk wordt verder teruggesneden dan een rechte, zodat zijn dichtstbijzijnde hoek de vrije ruimte houdt. DetailCraft snijdt balken recht af: de fabrikant snijdt het uiteinde op maat. De rand van de schuifoor bij de kolom wordt ook recht getekend.
- DetailCraft controleert de sterkte niet. Waarschuwingen gebruiken de minimumwaarden uit EN 1993-1-8 tabel 3.3 voor randafstanden en steek, en melden wanneer de schuifoor dieper is dan het lijf van de balk tussen zijn hoekafrondingen, of wanneer de bouten te dicht bij het afgesneden balkuiteinde zitten.
- De [clashcontrole](topic:clash-check) laat een schuifoor en de leden die hij verbindt buiten beschouwing: ze horen elkaar te raken.
