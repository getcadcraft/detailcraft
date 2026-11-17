---
title: Voetplaten en ankerbouten toevoegen
summary: Plaats een gelaste voetplaat met vier ankerbouten onder een kolom, stel de maten in en kopieer hem naar elke gelijke kolom.
keywords: voetplaat, voetplaten, ankerbout, ankerbouten, verankeringsbouten, kolomvoet, funderingsbouten, gelijke
from: 619ebc64
---

Een voetplaatverbinding plaatst een plaat onder de kolom, korter de kolom met de plaatdikte in, last de twee aan elkaar en voegt vier ankerbouten toe door gaten in de plaat.

:::warning
De maten zijn startwaarden, geen ontwerp. DetailCraft controleert geen oplegging, sterkte van de ankerbouten of inbeddingslengte.
:::

## Een voetplaat toevoegen

1. Kies {{ui:Selecteren}} ({{key:V}}) en klik op een kolom. Die moet verticaal zijn.
2. Kies {{ui:Voetplaat}} in de groep {{ui:Verbinden}}, of {{ui:Voetplaat toevoegen}} in het paneel {{ui:Eigenschappen}}.
3. De statusbalk meldt "Voetplaat toegevoegd met vier ankerbouten." De nieuwe verbinding is geselecteerd.

Een kolom kan één voetplaat hebben. Heeft ze er al een, dan meldt de statusbalk "Deze kolom heeft al een voetplaat."

## Aanpassen

Selecteer de voetplaat (klik op de plaat of een ankerbout). Onder {{ui:Plaat, bouten en las (mm)}}:

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Plaatdikte | 25 | De kolom wordt met zoveel ingekort |
| Plaatlengte | 450 | Langs de kolomdiepte |
| Plaatbreedte | 400 | Dwars op de kolom |
| Diameter ankerbout | 20 | Maat van de ankerbout |
| Gatdiameter | 33 | Gat in de plaat |
| Boutkwaliteit | F1554 Gr 36 | De kwaliteit van de ankerbout, als tekst |
| Ankerboutafstand (langs diepte) | 350 | Tussen de hartlijnen van de ankerbouten, langs de plaatlengte |
| Ankerboutafstand (dwars) | 300 | Tussen de hartlijnen van de ankerbouten, dwars |
| Uitsteeksel ankerbout boven plaat | 100 | Van de bovenkant van de plaat tot de bovenkant van de ankerbout |
| Inbeddingslengte ankerbout onder plaat | 450 | Van de onderkant van de plaat omlaag in het beton |
| Hoeklasmaat | 8 | Rondom de kolomvoet |
| Plaatmateriaal | A36 | Tekst |
| Mortelspleet | 0 | Ruimte tussen de bovenkant van het beton en de onderkant van de plaat |
| Stijvers | Geen | Kies Geen, 2 (in lijn met het lijf) of 4 (ook haaks erop); zie hieronder |
| Stijverdikte, hoogte | 12, 150 | |
| Diepte schuifnok | 0 | Hoe ver de nok onder de plaat reikt; 0 = geen nok |
| Dikte, breedte schuifnok | 25, 150 | |
| Plaatsluitringen | Geen | Op elke ankerbout, of geen |
| Maat, dikte sluitring | 0, 0 | 0 = het minimum uit AISC Design Guide 1 voor de ankerbout |

Lengte ankerbout = inbeddingslengte + mortelspleet + plaatdikte + uitsteeksel. Met de standaardwaarden is dat 575 mm.

## Voetplaatdetails: mortel, stijvers, schuifnok, sluitringen

Alle vier staan uit op een nieuwe voetplaat, en op voetplaten uit modellen van vóór DetailCraft 0.4.

- **Mortelspleet.** De plaat ligt zoveel boven de bovenkant van het beton, en de ankerbouten worden er zoveel langer door. AISC Design Guide 1 (2.10) adviseert 1 in. op een afgewerkte vloer en 1½ tot 2 in. op een fundering of pijler; meer voor grote platen en platen met een schuifnok.
- **Stijvers.** Verticale platen die aan de kolom en de plaat worden gelast, van het kolomvlak tot de plaatrand, als rechthoeken (nog geen afschuining of taps toelopend). **2** staan in lijn met het lijf, voorbij elke flens; **4** voegt er twee haaks op het lijf toe, tussen de flenzen, tot aan de zijkanten van de plaat. Bij een buiskolom staan ze in het midden van elk vlak. Elke stijver is aan beide zijden gelast aan de kolom en de plaat.
- **Schuifnok.** Een plaat die rondom onder de voetplaat is gelast, in lijn met de kolomdiepte, gecentreerd. DetailCraft waarschuwt als de nok niet dieper is dan de mortelspleet. De nok snijdt geen uitsparing in de fundering; daarom laat de [clashcontrole](topic:clash-check) de nok en de fundering daarbuiten.
- **Plaatsluitringen.** Een vierkante plaatsluitring op elke ankerbout, liggend op de voetplaat, en in de samenstelling van de kolom als los vermeld (meegeleverd met de kolom, niet gelast: Design Guide 1, 2.6). Bij maat en dikte 0 neemt DetailCraft de minimale sluitring uit AISC Design Guide 1, 2e ed., tabel 2.3 voor de ankerbout; een metrische ankerbout krijgt de volgende inchmaat (een M20 krijgt de rij 7/8 in.: 2½ in. × 5/16 in.). Het paneel met eigenschappen toont de gebruikte maat. Het gat van de sluitring is de diameter van de ankerbout + 1/16 in.: dat is een keuze van DetailCraft, de tabel geeft er geen. DetailCraft waarschuwt wanneer de ankerbouten misschien niet ver genoeg uitsteken voor de sluitring en een moer (uitsteeksel kleiner dan dikte sluitring + diameter ankerbout).

Design Guide 1, tabel 2.3, beveelt ook het ankergat in de plaat aan: 1-5/16 in. voor een ¾ in. ankerbout, 1-9/16 in. voor ⅞ in., 1-13/16 in. voor 1 in. DetailCraft wijzigt uw gatmaat niet.

Waarschuwingen verschijnen ook wanneer de ankergaten dichter dan 1.2 × de gatdiameter bij de plaatrand liggen, wanneer de ankerbouten binnen de kolomcontour vallen, of wanneer de plaat kleiner is dan de kolom.

## Kopiëren naar gelijke kolommen

1. Selecteer de voetplaat.
2. Kies {{ui:Toepassen op gelijke (n)}}, of {{ui:Gelijke}} in het menu {{ui:Meer}} van de groep {{ui:Verbinden}}.
3. Elke verticale kolom met hetzelfde profiel die geen voetplaat heeft en niet op een andere kolom staat, krijgt een kopie.

## Voetplaten en funderingen

Een voetplaat heeft geen fundering nodig, en een fundering weet niets van de voetplaat erboven: de ankerbouten zijn niet verbonden met de wapening van de fundering. Plaats funderingen met {{ui:Fundering}}; zie [Funderingen plaatsen met wapening](topic:footings-and-rebar).
