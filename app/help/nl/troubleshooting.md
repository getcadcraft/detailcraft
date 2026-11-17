---
title: Problemen oplossen
summary: Wat de berichten van DetailCraft betekenen en wat u moet doen, van een ontbrekende 3D-weergave tot verbindingen die niet gebouwd worden.
keywords: probleem, fout, werkt niet, help, oplossen, bericht, geweigerd, webgl, leeg, waarschuwing, kan niet, issue
from: f8c3b2b1
---

De meeste weigeringen worden uitgelegd in de statusbalk onderaan het scherm, of op het tabblad {{ui:Problemen}}. Lees die eerst. De berichten hieronder worden geciteerd zoals DetailCraft ze toont.

## De 3D-weergave ontbreekt

**"Deze browser kon de 3D-grafiek (WebGL) niet starten. Het model, de rapporten en de exports werken nog wel."**

De browser kon WebGL niet starten, de 3D-grafiek waarmee DetailCraft tekent.

1. Werk de browser bij naar de nieuwste versie.
2. Zet hardwareversnelling aan en start de browser opnieuw (zie hieronder).
3. Werk uw grafische stuurprogramma bij, of probeer een andere browser. Externe bureaubladen en virtuele machines hebben vaak geen WebGL.
4. Ondertussen kunt u nog steeds werken: plaats onderdelen met het formulier {{ui:Toevoegen via raster}}, lees de rapporten en exporteer. Alleen klikken in de weergave heeft WebGL nodig.

:::chromium
Om hardwareversnelling aan te zetten, opent u **Instellingen, Systeem**, zet u **Hardwareversnelling gebruiken indien beschikbaar** aan en start u Chrome opnieuw.
:::

:::firefox
Om hardwareversnelling aan te zetten, opent u **Instellingen, Algemeen, Prestaties**, haalt u het vinkje weg bij **Aanbevolen prestatie-instellingen gebruiken** en vinkt u **Hardwareversnelling gebruiken indien beschikbaar** aan. Start Firefox opnieuw.
:::

:::safari
Safari heeft WebGL standaard aan. Werk macOS bij als de weergave nog steeds niet start, en controleer dat geen extensie het blokkeert.
:::

Meer in [Browsers en computers](common:browsers).

## Klikken in de weergave doet niets

- **Geen kruising bij de klik.** Plaatshulpmiddelen snappen alleen naar rasterkruisingen. Een klik weg van elke stip doet niets. Ga dichterbij tot de stip oplicht.
- **Het hulpmiddel is {{ui:Selecteren}} en u klikte op lege ruimte.** Dat wist de selectie.
- **U heeft gesleept.** Een indrukken en loslaten meer dan een paar pixels uit elkaar is een slepen: het draait of verschuift de weergave.
- **Het onderdeel is weggesneden.** In {{ui:Plattegrond}} en {{ui:Gevel}} is staal buiten de snede verborgen en kan er niet op worden geklikt. Schakel over naar {{ui:3D}}.
- **De kruising ligt op de verkeerde verdieping.** In {{ui:3D}} kunnen kruisingen op meerdere niveaus elkaar op het scherm overlappen; de klik neemt de dichtstbijzijnde. Gebruik {{ui:Plattegrond}} of {{ui:Gevel}}.

## Berichten bij het plaatsen

| Bericht | Wat u moet doen |
|---|---|
| Er is geen niveau boven Niveau 2 dat de kolom kan bereiken. Voeg eerst een niveau toe. | Voeg een niveau toe in {{ui:Niveaus}}, of klik op een lager niveau |
| Kies een andere kruising voor het andere uiteinde. | U klikte twee keer op hetzelfde punt |
| De twee uiteinden zijn hetzelfde punt. | In {{ui:Toevoegen via raster}} zijn de keuzes "Van" en "Naar" gelijk |
| Voeg rasterlijnen links toe om onderdelen te plaatsen. | Het model heeft in één richting geen rasterlijnen |
| Onbekend profiel "…" | Het profiel staat niet in de catalogus of de eigen profielen van het model. Kies er een uit de lijst |
| Typ een getal. | Een getalveld is leeg gelaten of bevat tekst |

## Verbindingen worden niet gebouwd

### "Deze ligger eindigt niet op een kolomlijn."

Eindplaten hebben nodig dat het uiteinde van de ligger precies op de lijn van een verticale kolom ligt, tussen de onderkant en de bovenkant (binnen 1 mm). Controleer de {{ui:Uiteinden (x, y, z mm)}} van de ligger en de positie van de kolom.

### "Deze ligger raakt een kolomlijf of komt onder een hoek"

Of in {{ui:Problemen}}: "Liggers die op een kolomlijf aansluiten zijn nog niet beschikbaar: draai de kolom 90° of gebruik een andere verbinding."

De ligger sluit aan op het kolomlijf. Selecteer de kolom en zet {{ui:Draaiing (°)}} op 90, en probeer het opnieuw. Scheve verbindingen zijn nog niet beschikbaar.

### "Eindplaten worden alleen gemaakt voor horizontale liggers (deze ligger loopt schuin)."

Beide uiteinden van de ligger moeten op dezelfde hoogte liggen.

### "Eindplaten vereisen een rechtopstaande ligger (rotatie 0)."

Zet de {{ui:Draaiing (°)}} van de ligger terug op 0.

### "Eindplaten vereisen een I-profielligger." / "Eindplaten vereisen een I-profielkolom."

Alleen I-profielen (W, IPE, HEA, HEB of een eigen I) krijgen eindplaten.

### "Het uiteinde van de ligger ligt niet meer op de kolomlijn."

U heeft de ligger of de kolom verplaatst nadat de verbinding was toegevoegd. Verplaats hem terug, of verwijder de verbinding.

### "Verbindingen snijden dit onderdeel tot niets terug."

De verbindingen aan beide uiteinden snijden het onderdeel verder terug dan de lengte ervan, bijvoorbeeld een zeer korte ligger tussen twee diepe kolommen. Controleer de uiteinden van het onderdeel en de plaatdikte.

### "Geen andere vergelijkbare verbindingen … zonder verbinding."

{{ui:Gelijke}} kopieert alleen naar verbindingen met hetzelfde ligger-profiel, kolomprofiel en type verbinding (ligger in een flens), die nog geen verbinding hebben.

### "Beide uiteinden hebben al verbindingen." / "Deze kolom heeft al een voetplaat."

Selecteer de bestaande verbinding om die te wijzigen, of verwijder die eerst.

## Waarschuwingen op het tabblad Problemen

Waarschuwingen houden een verbinding of fundering niet tegen; ze vragen u om het na te kijken. De rand- en hartafstandwaarschuwingen gebruiken de minimumwaarden uit EN 1993-1-8 tabel 3.3 (rand 1.2 × gat, hartafstand 2.2 × gat, dwarsafstand 2.4 × gat). Als uw project andere regels gebruikt, geldt de waarschuwing misschien niet; DetailCraft ontwerpt verbindingen niet.

"Een gat ligt buiten het uiteinde van het onderdeel" betekent dat de x van een gat kleiner is dan 0 of groter dan de snijlengte. Onthoud dat x vanaf het begin van de snede is gemeten, nadat verbindingen het onderdeel hebben teruggesneden.

## Wijzigingen aan funderingen worden geweigerd

| Bericht | Wat u moet doen |
|---|---|
| De dekking laat geen ruimte voor staven in deze fundering. | Maak de fundering groter of de dekking kleiner |
| De fundering is te ondiep voor twee lagen staven binnen de dekking. | Maak haar dieper of verminder de dekking |
| De aansluitwapening past niet in de fundering met 75 mm dekking. | Minder aansluitstaven, kleinere hartafstand, of een grotere fundering |
| De staafafstand moet 50–1000 mm zijn. | Typ een afstand in dat bereik |
| De lengte moet 300–50000 mm zijn. | Funderingsmaten hebben grenzen: lengte en breedte 300 tot 50000, diepte 150 tot 10000 |

## Rasters en niveaus worden geweigerd

| Bericht | Wat u moet doen |
|---|---|
| Genummerde rasters: geef één afstand tussen elk paar lijnen (4). | Tel uw tussenruimtes: vijf lijnen hebben vier afstanden nodig |
| Letterrasters: afstanden moeten positieve millimeters zijn. | Geen nullen, negatieve waarden of tekst |
| Genummerde rasters: rasterlabels moeten verschillend zijn. | Twee lijnen hebben hetzelfde label |
| Maximaal 60 rasterlijnen per richting. | Splits het model |
| Houd minstens één niveau aan. | U heeft elke niveaurij verwijderd |
| Elk niveau moet een naam hebben. / Twee niveaus heten "…". | Geef elk niveau een andere naam |

## Openen van een bestand mislukt

| Bericht | Oorzaak |
|---|---|
| DetailCraft opent eigen modellen (.detailcraft.json). IFC-import is nog niet beschikbaar. | Het bestand is geen `.json`-bestand |
| Dit is geen DetailCraft-model (geen JSON). | Het bestand is beschadigd of is een ander JSON-bestand |
| Dit is geen DetailCraft-model. | Een JSON-bestand van een ander programma |
| Dit model is opgeslagen door een nieuwere DetailCraft (formaat 2). | Open het in de nieuwere DetailCraft die het heeft opgeslagen |
| Dat bestand is te groot voor een DetailCraft-model. | Groter dan 50 MB |

Wanneer een bestand opent met waarschuwingen zoals "2 onderdelen waren niet geldig en zijn weggelaten.", is de rest van het model in orde. Sla het origineel niet over voordat u hebt gecontroleerd wat is weggelaten.

## Exports

| Bericht | Oorzaak |
|---|---|
| Nog niets om te exporteren. | {{ui:IFC}} met een leeg model |
| Geen I- of plaatonderdelen om NC-bestanden voor te schrijven. | Alleen U-profielen, hoekprofielen of buizen in het model |
| Niet geschreven (tot nu toe alleen I-profielen en platen): … | Die merken zijn geen I-profielen of platen; de rest is geschreven |
| Geen funderingen, dus geen staven om te plannen. | {{ui:Buigen}} zonder funderingen |
| … teken(s) buiten het PDF-lettertype afgedrukt als "?". | De modelnaam of een kwaliteit heeft tekens die het PDF-lettertype mist |

{{ui:Werkplaatstekening}} is grijs weergegeven: het model heeft nog geen onderdelen.

## Downloads verschijnen niet

Elke opslag en export is een download van de browser. Controleer de downloadlijst van uw browser. Als de browser vraagt voordat hij meerdere bestanden downloadt, of downloads van deze site blokkeert, sta ze dan toe. In Safari controleert u de downloadknop in de werkbalk.

## Toetsen werken niet

- De cursor staat in een tekst- of getalveld: hulpmiddeltoetsen en {{key:Delete}} worden daar genegeerd zodat u kunt typen. Druk op {{key:Tab}} of klik in de weergave.
- Er staat een dialoogvenster open: sluit het eerst.
- De browser heeft het toetsenbord (bijvoorbeeld de adresbalk): klik in DetailCraft.
- {{key:Ctrl+Shift+F}} gebruikt Control, ook op een Mac.

## Offlineproblemen

De knop {{ui:Opslaan voor offline gebruik}} in de appbalk toont in welke staat de offlinekopie is. Hoe opslaan werkt: [Offline werken](common:offline).

| De knop toont | Wat het betekent | Wat u moet doen |
|---|---|---|
| {{ui:Opslaan voor offline gebruik}} | Nog geen offlinekopie in deze browser | Kies het terwijl u online bent |
| Opslaan 5 van 20 | Opslaan is bezig | Wacht op {{ui:Klaar voor offline gebruik}}; houd het tabblad open |
| {{ui:Klaar voor offline gebruik}} | DetailCraft, de 3D-weergave, elke export en deze help werken zonder verbinding | Niets. Klik erop voor {{ui:Opnieuw opslaan (de nieuwste versie ophalen)}} of {{ui:De offlinekopie verwijderen}} |
| {{ui:Kon niet opslaan}} | Sommige bestanden zijn niet gedownload | Controleer uw verbinding en klik erop om het opnieuw te proberen |
| {{ui:Offline gebruik is niet beschikbaar}} | Dit venster kan geen offlinekopie bewaren: privévensters en sommige beheerde computers blokkeren dat | Gebruik een normaal venster, of werk online |

Als u offline bent en de knop niet {{ui:Klaar voor offline gebruik}} zegt, laad het tabblad niet opnieuw en sluit het niet: wat al is geladen blijft werken. Sla uw model op met {{key:Mod+S}} en wacht tot u weer online bent.

## Niet-opgeslagen werk

Als de browser vraagt of u de pagina wilt verlaten, heeft DetailCraft niet-opgeslagen wijzigingen. Kies om op de pagina te blijven en druk daarna op {{key:Mod+S}}. DetailCraft kan een model niet herstellen nadat het tabblad is gesloten.

## Nog steeds vast

Noteer wat u deed en het exacte bericht, en laat het ons weten via de [ondersteuningspagina](https://getcadcraft.com/support).
