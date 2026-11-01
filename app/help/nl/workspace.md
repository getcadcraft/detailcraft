---
title: Een rondleiding langs het scherm
summary: Elke balk, elk paneel en elk tabblad in DetailCraft met de naam zoals die op het scherm staat, en waar elk voor dient.
keywords: scherm, indeling, werkbalk, panelen, eigenschappen, statusbalk, rapporten, interface, ui, tabbladen
from: 454f74fd
---

DetailCraft vult het browservenster onder de appbalk. Van boven naar beneden: de werkbalk, dan drie kolommen (het paneel {{ui:Model}}, de weergave, het paneel {{ui:Eigenschappen}}), dan de rapporttabbladen, dan de statusbalk.

## De appbalk

De smalle balk helemaal bovenaan hoort bij de CadCraft-site, niet bij het model. Hij toont de naam en versie van de app, een koppeling naar {{ui:Over DetailCraft}}, {{ui:Help}} (of {{key:F1}}) voor deze Help, {{ui:Opslaan voor offline gebruik}}, de knop voor de schermmodus en de schakelaar {{ui:Papier}} / {{ui:Model}}.

- {{ui:Opslaan voor offline gebruik}} bewaart DetailCraft, zijn 3D-weergave en deze Help in uw browser zodat het zonder verbinding opent. Na het opslaan staat er {{ui:Klaar voor offline gebruik}}; klik er dan op voor {{ui:Opnieuw opslaan (de nieuwste versie ophalen)}} of {{ui:De offlinekopie verwijderen}}. Zie [Offline werken](common:offline).
- {{ui:Papier}} geeft een licht scherm en {{ui:Model}} een donker. De 3D-weergave volgt meteen; er verandert niets in uw model.
- De knop voor de schermmodus en {{key:Ctrl+Shift+F}} schakelen tussen normaal, volledig scherm en volledig scherm met verborgen balken. {{key:Ctrl+Shift+F}} gebruikt op elke computer de Control-toets, ook op een Mac. Zijn de balken verborgen, wijs dan de bovenrand van het scherm aan (of tik erop) om ze terug te halen. {{key:Esc}} verlaat volledig scherm.

## De werkbalk

De werkbalk heeft vijf groepen. Wijs een knop aan om te zien wat hij doet en zijn toets.

| Groep | Knoppen | Wat ze doen |
|---|---|---|
| {{ui:Bestand}} | {{ui:Nieuw}}, {{ui:Openen}}, {{ui:IFC importeren}}, {{ui:Opslaan}}, {{ui:Voorbeeld}} | Een model beginnen, een opgeslagen `.detailcraft.json` of een IFC-bestand openen, er een opslaan of het voorbeeldraamwerk openen |
| {{ui:Plaatsen}} | {{ui:Selecteren}}, {{ui:Ligger}}, {{ui:Kolom}}, {{ui:Verband}}, {{ui:Plaat}}, {{ui:Fundering}}, {{ui:Trap}} | Het gereedschap dat de volgende klik in de weergave gebruikt |
| {{ui:Verbinden}} | {{ui:Kopplaten}}, {{ui:Voetplaat}}, en in {{ui:Meer}}: {{ui:Lasplaten (dwarskracht)}}, {{ui:Lasverbinding}}, {{ui:Knoopplaat}}, {{ui:Gelijke}} | Een verbinding toevoegen aan de geselecteerde ligger, kolom of verband, of de geselecteerde verbinding kopiëren naar elke aansluiting die erop lijkt |
| {{ui:Bewerken}} | {{ui:Ongedaan maken}}, {{ui:Opnieuw}}, {{ui:Kopiëren}}, {{ui:Plakken}}, {{ui:Meer}} | Vooruit en achteruit door bewerkingen; de selectie kopiëren en plakken. {{ui:Meer}} opent een menu met {{ui:Knippen}}, {{ui:Kopiëren}}, {{ui:Plakken}}, {{ui:Op dezelfde plaats plakken}}, {{ui:Dupliceren}}, {{ui:Verwijderen}}, {{ui:Alles selecteren}} en {{ui:Niets selecteren}}, elk met zijn toets |
| {{ui:Uitvoer}} | {{ui:IFC}}, {{ui:NC-bestanden}}, {{ui:Stuklijst}}, {{ui:Werkplaatstekening}}, {{ui:Tekeningen}}, en in {{ui:Meer}}: {{ui:Buigen}}, {{ui:Gewichtsrapport per fase}}, {{ui:KISS-bestand voor fabricagesoftware}} | Een export downloaden, of de tekenbladen openen |

Knoppen en menu-items die nu niets kunnen doen, zijn grijs, en erboven zweven zegt waarom. {{ui:Kopplaten}} heeft een geselecteerde ligger nodig, {{ui:Voetplaat}} een geselecteerde kolom, {{ui:Gelijke}} een geselecteerde verbinding, {{ui:Werkplaatstekening}} een geselecteerd I-profiel of plaatonderdeel, {{ui:Kopiëren}} een geselecteerde staaf of fundering, en {{ui:Plakken}} iets dat is gekopieerd. Zie [Kopiëren, plakken en dupliceren](topic:copy-paste).

## Het paneel Model (links)

- {{ui:Model}}: de {{ui:Naam}} van het model. Hij geeft de naam aan elk bestand dat u opslaat of exporteert.
- {{ui:Rasters}}: de rasterlijnen en hun afstanden, en {{ui:Rasters toepassen}}. Zie [Rasters en niveaus instellen](topic:grids-and-levels).
- {{ui:Niveaus}}: één rij per niveau (naam en hoogte in mm), {{ui:Niveau toevoegen}} en {{ui:Niveaus toepassen}}.
- {{ui:Eigen profiel}}: maak uw eigen parametrische doorsnede. Dicht totdat u hem opent.
- {{ui:Onderdeelmerken}}: elk onderdeelmerk in het model met zijn profiel, lengte en aantal. Klik op een merk om het eerste onderdeel ermee te selecteren.

{{ui:Rasters}}, {{ui:Niveaus}} en {{ui:Eigen profiel}} klappen weg: klik op hun koppen.

## De weergave (midden)

De weergave toont het model in 3D. Erboven heeft de weergavebalk drie knoppen en een lijst:

- {{ui:3D}}: draai vrij rond het model.
- {{ui:Plattegrond}}: kijk recht omlaag op één niveau. Naast de knoppen verschijnt een lijst met niveaus. Alles meer dan 1,5 m boven het niveau wordt weggesneden zodat u het niveau duidelijk kunt zien en erop kunt klikken.
- {{ui:Gevel}}: kijk recht naar één gelabelde rasterlijn (Raster A, Raster B …). Er verschijnt een lijst met gelabelde rasters. Alleen het staal binnen 1 m van die lijn wordt getoond.
- De knop Passend maken aan het rechteruiteinde van de weergavebalk zoomt om het hele model te tonen.

Kleine stippen markeren elke rasterkruising op elk niveau. Terwijl een plaatsingsgereedschap aanstaat, licht de stip het dichtst bij de aanwijzer op en noemt de statusbalk hem, bijvoorbeeld "A/2 op Niveau 1". Kleuren onderscheiden de staaftypen: kolommen, liggers, verbanden en platen hebben elk een eigen kleur, bouten en staven een andere, funderingen zijn doorzichtig en wapening wordt als buizen getekend. Gaten verschijnen als donkere pluggen; coperingen zijn uitgesneden.

Hoe u draait, verschuift en zoomt: [U verplaatsen in de 3D-weergave](topic:navigate-3d).

Is het model leeg, dan toont de weergave een korte lijst "Begin een model". U kunt ook een opgeslagen modelbestand overal op de weergave neerzetten om het te openen.

## Het paneel Eigenschappen (rechts)

Wat dit paneel toont, hangt af van wat u doet, en de kop zegt wat: "Model", "Een ligger plaatsen", "Ligger b2", "Kopplaatverbinding", "Voetplaat", "Fundering F1", "3 geselecteerd" of "Plakken".

- **Niets geselecteerd:** een samenvatting van het model (staven, verbindingen, funderingen, onderdelen, merken, bouten, staal- en wapeningsgewicht, rasters, niveaus).
- **Een plaatsingsgereedschap aan:** de opties voor het volgende stuk (profiel, materiaal, positie, rotatie en, voor kolommen, {{ui:Tot}}), een samenvatting van het gekozen profiel en een formulier {{ui:Toevoegen via raster}} om te plaatsen zonder in de weergave te klikken.
- **Een staaf geselecteerd:** zijn naam, profiel, materiaal, positie, rotatie, de coördinaten van zijn twee uiteinden, zijn merken, zaaglengte en gewicht, zijn gaten en coperingen, en knoppen voor verbindingen, zijn werkplaatstekening en {{ui:Verwijderen}}.
- **Een verbinding geselecteerd:** elke instelling van plaat, bout en las, de bouten en las die hij maakt, zijn waarschuwingen en {{ui:Op gelijke toepassen}}.
- **Een fundering geselecteerd:** zijn positie en maat, de onderwapening, de aansluitwapening en de staafmerken die hij gebruikt.
- **Meerdere dingen geselecteerd:** hoeveel staven van elk type, verbindingen en funderingen, hun staalgewicht, en {{ui:Kopiëren}}, {{ui:Dupliceren}} en {{ui:Verwijderen}}.
- **Plakken:** wat er op het klembord staat, en formulieren om te plakken met een getypte verschuiving of op een rasterkruising die u uit lijsten kiest.

Getalvelden werken door als u op {{key:Enter}} drukt of het veld verlaat. Elke wijziging is één stap die u ongedaan kunt maken.

## De rapporttabbladen (onder)

- {{ui:Problemen}}: alles wat DetailCraft niet kon bouwen of wat u moet controleren, met op elke regel een knop {{ui:Selecteren}}. Het tabblad toont het aantal tussen haakjes.
- {{ui:Stuklijst}}: onderdelen, samenstellingen, en bouten en ankerbouten, met gewichten en een koppeling {{ui:CSV downloaden}}. Klik op een onderdeelmerk om dat onderdeel te selecteren.
- {{ui:Buigstaat}}: elk staafmerk in elke fundering, met een koppeling {{ui:CSV downloaden}}.

Met een tabblad in focus verplaatsen {{key:Left}} en {{key:Right}} u tussen tabbladen.

## De statusbalk

De balk langs de onderkant heeft drie delen: de rasterkruising onder de aanwijzer tijdens het plaatsen, het laatste bericht (wat er net gebeurde, of waarom iets werd geweigerd) en lopende totalen van onderdelen, bouten, staalgewicht en wapeningsgewicht. Lijkt een actie niets te doen, lees dan eerst het bericht hier.

De titel van het browsertabblad begint met een punt (•) zolang het model wijzigingen heeft die u niet hebt opgeslagen.

## Op een smal scherm

Onder circa 760 pixels breed stapelen de kolommen: werkbalk, weergave, statusbalk, {{ui:Eigenschappen}}, rapporttabbladen en als laatste het paneel {{ui:Model}}. Scrol door de pagina om erbij te komen. DetailCraft is ingedeeld voor een desktop- of laptopscherm; een telefoon werkt om te kijken, niet om te detailleren.
