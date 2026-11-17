---
title: Liggers met kopplaten aan kolommen verbinden
summary: Voeg bouten-kopplaten toe waar een ligger een kolomflens of lijf raakt, stel plaat, bouten en las in, en kopieer de verbinding naar elke gelijke verbinding.
keywords: kopplaat, eindplaat, momentverbinding, bouten-verbinding, verbinding, bouten, las, verlengde kopplaat, vlak, gelijk, verbinding kopiëren, onderdeel
from: 21e028b2
---

Een kopplaatverbinding las een plaat aan het uiteinde van de ligger en bout die aan de kolomflens of het lijf. DetailCraft plaatst de plaat, snijdt de ligger terug, boort passende gaten in de plaat en de kolomflens, voegt de bouten en de las toe, en controleert randafstanden en hartafstanden.

:::warning
DetailCraft ontwerpt geen verbindingen. De instellingen zijn startwaarden die u moet aanpassen; niets controleert de sterkte. De waarschuwingen voor randafstand en hartafstand gebruiken de minimumwaarden van EN 1993-1-8 tabel 3.3, die kunnen afwijken van de regels waarmee u werkt.
:::

## Wat het kan verbinden

- Een **horizontale** ligger (beide uiteinden op dezelfde hoogte), rechtop (rotatie 0), met een I-profiel.
- In de **flens** of het **lijf** van een **verticale** I-profielkolom, haaks erop.
- Het uiteinde van de ligger moet op de lijn van de kolom liggen, tussen de onderkant en de bovenkant van de kolom.

Scheve of hellende liggers en profielen die geen I-profiel zijn, worden geweigerd met een reden: gebruik daarvoor [shear tabs](topic:shear-tabs). Bij een lijf moeten de plaat en de liggerflenzen tussen de kolomflenzen passen; DetailCraft waarschuwt wanneer dat niet zo is.

:::tip
Bij rotatie 0 liggen de kolomflenzen langs de genummerde rasterrichting (x). Een ligger van A naar B komt op het lijf en krijgt een kopplaat op het lijf.
:::

## Kopplaten aan een ligger toevoegen

1. Kies {{ui:Select}} ({{key:V}}) en klik op de ligger.
2. Kies {{ui:End plates}} in de groep {{ui:Connect}}, of {{ui:Add end plates}} in het paneel {{ui:Properties}}.
3. Elk vrij uiteinde van de ligger dat haaks een kolomflens of lijf raakt, krijgt een plaat. De statusbalk zegt "2 kopplaten toegevoegd. Selecteer er een om plaat, bouten en las te wijzigen; {{ui:Similar}} kopieert hem naar gelijke verbindingen."
4. De eerste nieuwe kopplaat wordt geselecteerd en haar instellingen staan in het paneel {{ui:Properties}}.

Als er niets gebeurt, lees de statusbalk:

- "Deze ligger eindigt niet op een kolomlijn. Kopplaten komen waar een liggeruiteinde een verticale kolom raakt."
- "Deze ligger raakt een kolom onder een hoek of helt: kopplaten zijn gemaakt voor haakse, horizontale verbindingen. Gebruik Shear tabs."
- "Beide uiteinden hebben al een verbinding."

## Plaat, bouten en las wijzigen

Klik op de kopplaat (of op een van zijn bouten) om de verbinding te selecteren. Onder {{ui:Plate, bolts and weld (mm)}}:

| Instelling | Standaard | Wat het doet |
|---|---|---|
| Plaatdikte | 20 | De dikte van de plaat; ook hoe ver de ligger voorbij de flens wordt teruggesneden |
| Plaatbreedte | 180 | Dwars over de verbinding |
| Verlenging boven de ligger | 0 | Boven de bovenflens; boven 0 wordt het een verlengde kopplaat |
| Verlenging onder de ligger | 0 | Onder de onderflens |
| Boutdiameter | 20 | Nominale boutmaat |
| Gatdiameter | 22 | Uw speling in de plaat en de kolomflens |
| Boutkwaliteit | A325 | Tekst; wordt in de materiaallijst afgedrukt |
| Boutrijen | 4 | Rijen van twee bouten, gecentreerd op de plaathoogte |
| Rijafstand | 75 | Verticale afstand tussen de rijen |
| Spoor | 100 | Horizontale afstand tussen de twee bouten van een rij |
| Boutlengtetoeslag | 30 | Toegevoegd aan de klemlengte voor de moer, sluitring en draad; zie hieronder |
| Hoeklasmaat | 8 | Rondom het liggeruiteinde |
| Plaatmateriaal | A36 | Tekst |

Typ een nieuwe waarde en druk op {{key:Enter}} of {{key:Tab}}. De plaat, gaten, bouten en de gesneden lengte van de ligger worden meteen bijgewerkt. Elke wijziging is één stap voor ongedaan maken.

Onder de instellingen ziet u wat de verbinding maakt:

- {{ui:Bolts}}: bijvoorbeeld "8 × 20 × 70 A325 (klemlengte 36.2)".
- {{ui:Weld}}: maat, plaats en lengte.
- {{ui:Plate}}: maat en onderdeelmarkering.

### Hoe de getallen worden berekend

- De ligger wordt teruggesneden met de halve kolomdiepte (bij een lijf: de halve lijfdikte) plus de plaatdikte, zodat de plaat op het vlak ligt.
- De plaathoogte is de liggerhoogte plus de twee verlengingen.
- Boutlengte = klemlengte (plaatdikte + kolomflens- of lijfdikte) + toeslag, naar boven afgerond op de volgende 5 mm.
- De getoonde lasslengte is de omtrek van de liggerdoorsnede.

### Waarschuwingen

De verbinding wordt nog steeds gebouwd, maar deze verschijnen eronder en in het tabblad {{ui:Problems}}:

- Boutrijen of bouten dichter bij de plaatrand dan 1.2 × de gatdiameter.
- Rijafstand kleiner dan 2.2 × de gatdiameter, of spoor kleiner dan 2.4 × de gatdiameter.
- Gaten die in het kolomlijf of de kolomhoeklas lopen, of buiten de kolomflens.
- Een plaat die breder is dan de kolomflens, of (bij een lijf) breder dan de ruimte tussen de flenzen; liggerflenzen die er niet tussen passen.
- Een boutrij te dicht bij een liggerflens, of een spoor te krap voor het liggerlijf en zijn las.

## Kopieer naar elke gelijke verbinding

1. Selecteer de verbinding die u hebt ingesteld.
2. Kies {{ui:Apply to similar (n)}} in het paneel {{ui:Properties}}, of {{ui:Similar}} in het menu {{ui:More}} van de groep {{ui:Connect}}. Het getal tussen haakjes is hoeveel verbindingen het krijgen.
3. Elke verbinding met hetzelfde liggerprofiel en kolomprofiel, met de ligger aan hetzelfde soort vlak, die nog geen verbinding heeft, krijgt een kopie met dezelfde instellingen. De statusbalk zegt hoeveel.

Kopieën zijn onafhankelijk: later wijzigen van de ene verandert de andere niet. Verbindingen die al een verbinding hebben, blijven ongemoeid; verwijder die eerst als u ze wilt vervangen.

## Verplaatsen en verwijderen

Verbindingen worden elke keer dat het model verandert opnieuw gemaakt uit hun instellingen, dus het verplaatsen of van formaat veranderen van een ligger of kolom neemt zijn kopplaten mee. Als een wijziging betekent dat de verbinding niet meer past, blijft de verbinding in het model staan en vertelt het tabblad {{ui:Problems}} waarom, bijvoorbeeld "Het liggeruiteinde ligt niet meer op de kolomlijn."

Om een verbinding te verwijderen, selecteert u hem en drukt op {{key:Delete}}. Het verwijderen van de ligger of de kolom verwijdert ook zijn verbindingen.

Volgende: [Voetplaten en ankerstaven toevoegen](topic:base-plates).
