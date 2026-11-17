---
title: Verstekverbindingen
summary: Verbind twee I-profielstaven die onder een hoek samenkomen: beide uiteinden afgesneden op het vlak dat de hoek halveert, met kopplaten, bouten en stijvers als u die wilt.
keywords: verstek, miter, verstekverbinding, knie, hoekverbinding, portaalframe, nok, hoek, hoeksnede, schuine snede, kopplaat, geboute kopplaat, stijver, verbinden
from: cd8380d4
---

Een verstek verbindt twee I-profielstaven waarvan de uiteinden onder een hoek samenkomen, zoals de knie van een portaalframe, een nok, of twee liggers die in plattegrond een hoek maken. DetailCraft snijdt beide uiteinden op het vlak dat de hoek tussen beide halveert, zodat de twee snijvlakken op elkaar aansluiten. Als u wilt, voegt het een kopplaat toe aan elk afgesneden uiteinde, bout het de twee platen aan elkaar en plaatst het een paar lijfstijvers in elke staaf.

## Waar het werkt

- Twee **I-profielen** (IPE, HEA, HEB, W en dergelijke) waarvan de **uiteinden op hetzelfde knooppunt samenkomen**. Elke staaf kan in elke richting zijn getekend.
- De hoek tussen de staven moet minstens 15° zijn. Staven in één lijn worden geweigerd: gebruik een [lasverbinding](topic:splices).
- De gewone snede (zonder platen) werkt hoe de staven ook samenkomen. **Kopplaten** vereisen dat de twee staven samenkomen in het vlak van hun lijven, zoals bij een portaalknie of een nok. Twee liggers die in plattegrond een hoek maken, komen samen in het vlak van hun flenzen, dus die krijgen alleen de gewone snede.
- Staven van verschillende maten worden verbonden, maar met een waarschuwing: hun snijvlakken sluiten niet op elkaar aan.

## Een verstek toevoegen

1. Selecteer de twee staven: klik op de ene, en klik daarna met {{key:Shift}} op de andere.
2. Kies {{ui:Verstek}} in het menu {{ui:Meer}} van de groep {{ui:Verbinden}}. Het dialoogvenster Verstek opent.
3. Stel de genummerde velden in. De tekening ernaast wordt gemaakt uit uw getallen terwijl u typt, en de genummerde cirkels laten zien wat elk veld instelt.
4. Kies {{ui:Het verstek toevoegen}}. Als u meer dan twee staven hebt geselecteerd, krijgt elk vrij knooppunt daartussen hetzelfde verstek.

Om een verstek later te wijzigen, selecteert u het (klik op een van de platen) en kiest u {{ui:Verstekdialoogvenster met voorbeeld}} in het rechterpaneel, of u wijzigt de instellingen daar direct. Een gewone snede heeft geen platen om op te klikken: selecteer de twee staven en kies {{ui:Verstek}} opnieuw, dan opent het dialoogvenster op dat verstek. {{ui:Op vergelijkbare toepassen (n)}} kopieert het naar elk vrij knooppunt tussen staven van dezelfde twee profielen onder dezelfde hoek.

## De genummerde velden (mm)

| Nr. | Instelling | Standaard | Wat het doet |
|---|---|---|---|
| 1 | Ruimte tussen de platen (of de snijuiteinden) | 0 | Vrije ruimte in de verbinding. Elke kant houdt de helft ervan |
| 2 | Kopplaten, plaatdikte | aan, 20 | Een kopplaat rondom gelast aan elk afgesneden uiteinde. Uitvinken voor een gewone snede |
| 3 | Boutenrijen, rijafstand, dwarsafstand, buitenste rij | 4, 0, 0, uit | Rijafstand 0 verdeelt de rijen gelijkmatig tussen de flenzen. Dwarsafstand 0 = half de plaatbreedte, minstens 2.4 × het gat. De buitenste rij gaat in het verlengstuk van de plaat, voorbij de buitenste flens |
| 4 | Plaat voorbij de buitenste flens | 0 | Hoe ver de platen voorbij de buitenste flens reiken, langs de snede |
| 5 | Plaat voorbij de binnenste flens | 0 | Hetzelfde aan de binnenkant |
| 6 | Lijfstijvers, afstand voorbij de snede | uit, 50 | Een paar in elke staaf, aan beide kanten van het lijf, haaks op de staaf, deze afstand voorbij het verre uiteinde van de snede |
| 7 | Stijverdikte | 10 | |

Onder {{ui:Bouten}}: boutdiameter, gat, kwaliteit en lengtetoeslag (20, 22, A325, 30), zoals bij kopplaten. Onder {{ui:Platen en lassen}}: plaatbreedte (0 = de flensbreedte), hoeklasmaat (8) en plaatmateriaal (A36).

## Wat u krijgt

- **De sneden.** Het uiteinde van elke staaf wordt gesneden op zijn vlak. De lengte in lijsten, tekeningen en NC-bestanden is de **totale lengte**, van het rechte uiteinde tot het verste punt van de snede.
- **De platen** horen bij hun eigen staaf: de samenstelling van elke staaf is de staaf, zijn kopplaat en zijn stijvers. De bouten zijn bouten van de verbinding op de bouwplaats: de stuklijst telt ze eenmaal, en de samenstellingstekening van elke staaf noemt ze losse bouten.
- **Tekeningen** tonen de schuine uiteinden en de platen; de werkplaatstekening van een verstekstaaf vermeldt de hoek van elke snede ten opzichte van haaks.
- **NC-bestanden** (DSTV) bevatten de schuine snedehoeken in de kop, zoals de norm vraagt, en contouren die de snede volgen. Controleer ze in de NC-viewer van uw werkplaats voordat u gaat snijden, zoals bij elk NC-bestand.
- **IFC** knipt de extrusie van elke staaf af op zijn snijvlak, zodat andere programma's de echte snede tonen.
- **Merken:** een verstekstaaf is een ander stuk dan een recht gesneden staaf van dezelfde lengte. Twee staven met dezelfde sneden delen een merk, zoals de twee sparren van een nok.

## Goed om te weten

- Het verstek blijft actief. Verplaats of wijzig de afmeting van een van beide staven, en de snede, platen en bouten volgen. Verwijder een van beide staven, dan verdwijnt het verstek, en het uiteinde van de andere staaf is weer recht.
- Waarschuwingen gebruiken dezelfde minimumwaarden uit EN 1993-1-8 als de andere verbindingen (uiteinde- en randafstand 1.2 × het gat, rijafstand 2.2 × het gat, dwarsafstand 2.4 × het gat), plus boutenrijen die te dicht bij een flens liggen, platen die smaller zijn dan de flenzen, en stijvers zonder ruimte.
- De waarden zijn beginwaarden, geen ontwerp. DetailCraft toetst de sterkte van de verbinding niet, en maakt geen voute, geen gelast verstek met stompe las, en geen stijvers die in lijn liggen met de flenzen van de andere staaf.
