---
title: Een rondleiding door het scherm
summary: Elke balk, elk paneel en elk tabblad van DetailCraft bij zijn naam op het scherm, en waar elk voor dient.
keywords: scherm, indeling, werkbalk, panelen, eigenschappen, statusbalk, rapporten, interface, ui, tabbladen
from: 94f81073
---

DetailCraft vult het browservenster onder de app-balk. Van boven naar beneden: de werkbalk, dan drie kolommen (het paneel {{ui:Model}}, de weergave, het paneel {{ui:Eigenschappen}}), dan de rapporttabbladen, dan de statusbalk.

## De app-balk

De dunne balk helemaal bovenaan hoort bij de CadCraft-site, niet bij het model. Hij toont de appnaam en versie, een link naar {{ui:Over DetailCraft}}, {{ui:Help}} (of {{key:F1}}) voor deze help, {{ui:Opslaan voor offline gebruik}}, de knop voor de schermmodus en de schakelaar {{ui:Papier}} / {{ui:Model}}.

- {{ui:Opslaan voor offline gebruik}} bewaart DetailCraft, zijn 3D-weergave en deze help in uw browser, zodat het opent zonder verbinding. Na het opslaan toont hij {{ui:Klaar voor offline gebruik}}; klik er dan op voor {{ui:Opnieuw opslaan (de nieuwste versie ophalen)}} of {{ui:De offlinekopie verwijderen}}. Zie [Offline werken](common:offline).
- {{ui:Papier}} geeft een licht scherm en {{ui:Model}} een donker. De 3D-weergave volgt meteen; niets in uw model verandert.
- De knop voor de schermmodus en {{key:Ctrl+Shift+F}} wisselen tussen normaal, volledig scherm, en volledig scherm met verborgen balken. {{key:Ctrl+Shift+F}} gebruikt op elke computer de Control-toets, ook op een Mac. Met verborgen balken wijst u naar de bovenrand van het scherm (of tikt u erop) om ze terug te halen. {{key:Esc}} verlaat het volledige scherm.

## De werkbalk

De werkbalk heeft vijf groepen. Houd de muis boven een knop om te zien wat hij doet en welke sneltoets hij heeft.

| Groep | Knoppen | Wat ze doen |
|---|---|---|
| {{ui:Bestand}} | {{ui:Nieuw}}, {{ui:Openen}}, {{ui:IFC importeren}}, {{ui:Opslaan}}, {{ui:Voorbeeld}} | Een model starten, een opgeslagen `.detailcraft.json` of IFC-bestand openen, er een opslaan, of het voorbeeldframe openen |
| {{ui:Plaatsen}} | {{ui:Selecteren}}, {{ui:Ligger}}, {{ui:Kolom}}, {{ui:Verband}}, {{ui:Plaat}}, {{ui:Fundering}}, {{ui:Trap}} | Het gereedschap dat de volgende klik in de weergave gebruikt |
| {{ui:Verbinden}} | {{ui:Kopplaten}}, {{ui:Voetplaat}}, en in {{ui:Meer}}: {{ui:Schuiforen}}, {{ui:Las}}, {{ui:Knoopplaat}}, {{ui:Gelijke}} | Een verbinding toevoegen aan de geselecteerde ligger, kolom of verband, of de geselecteerde verbinding naar elk gelijk knooppunt kopiëren |
| {{ui:Bewerken}} | {{ui:Ongedaan maken}}, {{ui:Opnieuw}}, {{ui:Kopiëren}}, {{ui:Plakken}}, {{ui:Meer}} | Stap terug en vooruit door bewerkingen; de selectie kopiëren en plakken. {{ui:Meer}} opent een menu met {{ui:Knippen}}, {{ui:Kopiëren}}, {{ui:Plakken}}, {{ui:Op dezelfde plaats plakken}}, {{ui:Dupliceren}}, {{ui:Verwijderen}}, {{ui:Alles selecteren}} en {{ui:Niets selecteren}}, elk met zijn sneltoets |
| {{ui:Uitvoer}} | {{ui:IFC}}, {{ui:NC-bestanden}}, {{ui:Stuklijst}}, {{ui:Werkplaatstekening}}, {{ui:Tekeningen}}, en in {{ui:Meer}}: {{ui:Buigen}}, {{ui:Gewichtsrapport per fase}}, {{ui:KISS-bestand voor fabricagesoftware}} | Een export downloaden, of de tekenbladen openen |

Knoppen en menu-items die nu niet kunnen werken, zijn grijs, en als u erboven houdt, zegt een melding waarom. {{ui:Kopplaten}} heeft een geselecteerde ligger nodig, {{ui:Voetplaat}} een geselecteerde kolom, {{ui:Gelijke}} een geselecteerde verbinding, {{ui:Werkplaatstekening}} een model met onderdelen, {{ui:Kopiëren}} een geselecteerd element of een geselecteerde fundering, en {{ui:Plakken}} iets dat is gekopieerd. Zie [Kopiëren, plakken en dupliceren](topic:copy-paste).

## Het paneel Model (links)

- {{ui:Model}}: de modelnaam {{ui:Naam}}. Die noemt elk bestand dat u opslaat of exporteert.
- {{ui:Rasters}}: de rasterlijnen en hun afstanden, en {{ui:Rasters toepassen}}. Zie [Rasters en niveaus instellen](topic:grids-and-levels).
- {{ui:Niveaus}}: één rij per niveau (naam en hoogte in mm), {{ui:Niveau toevoegen}} en {{ui:Niveaus toepassen}}.
- {{ui:Eigen profiel}}: maak uw eigen parametrische doorsnede. Gesloten tot u het opent.
- {{ui:Onderdeelmerken}}: elk onderdeelmerk in het model met zijn profiel, lengte en aantal. Klik op een merk om het eerste onderdeel met dat merk te selecteren.

{{ui:Rasters}}, {{ui:Niveaus}} en {{ui:Eigen profiel}} klappen weg: klik op hun koppen.

## De weergave (midden)

De weergave toont het model in 3D. Boven de weergave staan drie knoppen en een lijst:

- {{ui:3D}}: draai vrij rond het model.
- {{ui:Plattegrond}}: kijk recht naar beneden op één niveau. Naast de knoppen verschijnt een lijst van niveaus. Alles meer dan 1.5 m boven het niveau wordt weggesneden, zodat u het niveau duidelijk kunt zien en aanklikken.
- {{ui:Gevel}}: kijk recht naar één letterrasterlijn (Raster A, Raster B …). Er verschijnt een lijst van letterrasters. Alleen het staal binnen 1 m van die lijn wordt getoond.
- De passend-maken-knop aan het rechteruiteinde van de weergavebalk zoomt in op het hele model.

Kleine stipjes markeren elk rasterkruispunt op elk niveau. Terwijl een plaatsgereedschap aan staat, licht het stipje dat het dichtst bij de aanwijzer ligt op, en de statusbalk noemt het, bijvoorbeeld "A/2 op Niveau 1". Kleuren onderscheiden de elementtypen: kolommen, liggers, verbanden en platen hebben elk een eigen kleur, bouten en staven een andere, funderingen zijn doorzichtig en wapening wordt als buisjes getekend. Gaten verschijnen als donkere pluggen; uitsparingen zijn uitgesneden.

Hoe u draait, verschuift en zoomt: [Bewegen in de 3D-weergave](topic:navigate-3d).

Als het model leeg is, toont de weergave een korte lijst "Een model starten". U kunt ook een opgeslagen modelbestand overal op de weergave neerzetten om het te openen.

## Het paneel Eigenschappen (rechts)

Wat dit paneel toont, hangt af van wat u doet, en de kop zegt welk: "Model", "Een ligger plaatsen", "Ligger b2", "Kopplaatverbinding", "Voetplaat", "Fundering F1", "3 geselecteerd" of "Plakken".

- **Niets geselecteerd:** een samenvatting van het model (elementen, verbindingen, funderingen, onderdelen, merken, bouten, en gewicht van staal en wapening, rasters, niveaus).
- **Een plaatsgereedschap aan:** de opties voor het volgende stuk (profiel, materiaal, positie, rotatie, en voor kolommen {{ui:Tot}}), een samenvatting van het gekozen profiel, en een formulier {{ui:Toevoegen via raster}} om te plaatsen zonder in de weergave te klikken.
- **Een element geselecteerd:** zijn naam, profiel, materiaal, positie, rotatie, de coördinaten van zijn twee uiteinden, zijn merken, zaaglengte en gewicht, zijn gaten en uitsparingen, en knoppen voor verbindingen, zijn werkplaatstekening en {{ui:Verwijderen}}.
- **Een verbinding geselecteerd:** elke instelling van platen, bouten en las, de bouten en las die ze maakt, de waarschuwingen, en {{ui:Toepassen op gelijke}}.
- **Een fundering geselecteerd:** haar positie en afmeting, de onderlaag, de startstaven, en de staafmerken die ze gebruikt.
- **Meerdere dingen geselecteerd:** hoeveel elementen van elk type, verbindingen en funderingen, hun staalgewicht, en {{ui:Kopiëren}}, {{ui:Dupliceren}} en {{ui:Verwijderen}}.
- **Plakken:** wat op het klembord staat, en formulieren om te plakken met een getypte verschuiving of op een rasterkruispunt dat u uit lijsten kiest.

Getalvelden worden toegepast wanneer u {{key:Enter}} drukt of het veld verlaat. Elke wijziging is één stap die u ongedaan kunt maken.

## De rapporttabbladen (onderaan)

- {{ui:Problemen}}: alles wat DetailCraft niet kon bouwen of wat u moet controleren, met een knop {{ui:Selecteren}} op elke regel. Het tabblad toont het aantal tussen haakjes.
- {{ui:Stuklijst}}: onderdelen, samenstellingen, en bouten en ankerstaven, met gewichten en een link {{ui:CSV downloaden}}. Klik op een onderdeelmerk om dat onderdeel te selecteren.
- {{ui:Buigstaat}}: elk staafmerk in elke fundering, met een link {{ui:CSV downloaden}}.

Met een tabblad in focus verplaatsen {{key:Left}} en {{key:Right}} u tussen de tabbladen.

## De statusbalk

De balk langs de onderkant heeft drie delen: het rasterkruispunt onder de aanwijzer tijdens het plaatsen, het laatste bericht (wat er net gebeurde, of waarom iets is geweigerd), en lopende totalen van onderdelen, bouten, staalgewicht en wapeningsgewicht. Wanneer een actie niets lijkt te doen, lees dan eerst het bericht hier.

De titel van het browsertabblad begint met een stip (•) zolang het model wijzigingen heeft die u niet heeft opgeslagen.

## Op een smal scherm

Onder ongeveer 760 pixels breed, stapelen de kolommen zich: werkbalk, weergave, statusbalk, {{ui:Eigenschappen}}, rapporttabbladen, en het paneel {{ui:Model}} als laatste. Scroll de pagina om erbij te komen. DetailCraft is ingericht voor een desktop- of laptopscherm; een telefoon werkt om naar te kijken, niet om te detailleren.
