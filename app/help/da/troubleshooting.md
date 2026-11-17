---
title: Fejlfinding
summary: Hvad DetailCraft's meddelelser betyder, og hvad du gør ved dem, fra en manglende 3D-visning til forbindelser, der ikke kan bygges.
keywords: problem, fejl, virker ikke, hjælp, rettelse, meddelelse, afvist, webgl, tom, advarsel, kan ikke, emne
from: f8c3b2b1
---

De fleste afvisninger forklares i statuslinjen nederst på skærmen eller på fanen {{ui:Problemer}}. Læs dem først. Meddelelserne nedenfor er citeret, som DetailCraft viser dem.

## Der mangler 3D-visning

**»Denne browser kunne ikke starte 3D-grafik (WebGL). Modellen, rapporterne og eksporterne virker stadig.«**

Browseren kunne ikke starte WebGL, den 3D-grafik DetailCraft tegner med.

1. Opdatér browseren til den nyeste version.
2. Slå hardwareacceleration til og genstart browseren (se nedenfor).
3. Opdatér din grafikdriver, eller prøv en anden browser. Fjernskrivebord og virtuelle maskiner har ofte ingen WebGL.
4. Imens kan du stadig arbejde: placer stålprofiler med formularen {{ui:Tilføj efter gitter}}, læs rapporterne og eksportér. Kun klik i visningen kræver WebGL.

:::chromium
For at slå hardwareacceleration til skal du åbne **Indstillinger, System** og slå **Brug grafikaccelerering, når det er tilgængeligt** til, og derefter starte forfra.
:::

:::firefox
For at slå hardwareacceleration til skal du åbne **Indstillinger, Generelt, Ydeevne**, fjerne markeringen ved **Brug anbefalede indstillinger for ydeevne** og sætte kryds ved **Brug hardwareacceleration, når det er tilgængeligt**. Genstart Firefox.
:::

:::safari
Safari har WebGL slået til som standard. Opdatér macOS, hvis visningen stadig ikke starter, og kontrollér at ingen udvidelse blokerer den.
:::

Mere i [Browsere og computere](common:browsers).

## Klik i visningen gør ingenting

- **Intet skæringspunkt tæt på klikket.** Placeringsværktøjer fanger kun gitterskæringspunkter. Et klik væk fra alle prikkerne gør ingenting. Flyt tættere på, til prikken lyser op.
- **Værktøjet er {{ui:Vælg}}, og du klikkede på tomt rum.** Det fravælger.
- **Du trak.** Et tryk og en udløsning mere end få pixels fra hinanden er et træk: det drejer eller panorerer visningen.
- **Dele er skåret væk.** I {{ui:Plan}} og {{ui:Facade}} er stål uden for snittet skjult og kan ikke klikkes. Skift til {{ui:3D}}.
- **Skæringspunktet er på forkert niveau.** I {{ui:3D}} kan skæringspunkter på flere niveauer overlappe på skærmen; klikket tager det nærmeste. Brug {{ui:Plan}} eller {{ui:Facade}}.

## Meddelelser ved placering

| Meddelelse | Hvad du gør |
|---|---|
| Der er intet niveau over Level 2, som søjlen kan nå. Tilføj et niveau først. | Tilføj et niveau i {{ui:Niveauer}}, eller klik på et lavere niveau |
| Vælg et andet skæringspunkt for den anden ende. | Du klikkede to gange på samme punkt |
| De to ender er samme punkt. | I {{ui:Tilføj efter gitter}} er valgene »From« og »To« de samme |
| Tilføj gitterlinjer til venstre for at placere stålprofiler. | Modellen har ingen gitterlinjer i én retning |
| Ukendt profil »…« | Profilen findes ikke i kataloget eller modellens egne profiler. Vælg en fra listen |
| Skriv et tal. | Et talfelt blev ladt tomt eller indeholder tekst |

## Forbindelser kan ikke bygges

### »Denne bjælke ender ikke på en søjlelinje.«

Endeplader kræver, at bjælkens ende ligger præcis på en lodret søjles linje, mellem dens bund og top (inden for 1 mm). Kontrollér bjælkens {{ui:Ender (x, y, z mm)}} og søjlens placering.

### »Denne bjælke møder en søjles liv eller i en vinkel«

Eller i {{ui:Problemer}}: »Bjælker, der går ind i en søjles liv, er endnu ikke lavet: drej søjlen 90° eller brug en anden forbindelse.«

Bjælken går ind i søjlens liv. Vælg søjlen og sæt {{ui:Rotation (°)}} til 90, og prøv igen. Skæve samlinger er ikke lavet endnu.

### »Endeplader er kun lavet til vandrette bjælker (denne bjælke er skrå).«

Begge ender af bjælken skal ligge i samme højde.

### »Endeplader kræver, at bjælken står lodret (rotation 0).«

Sæt bjælkens {{ui:Rotation (°)}} tilbage til 0.

### »Endeplader kræver en bjælke med I-profil.« / »Endeplader kræver en søjle med I-profil.«

Kun I-profiler (W, IPE, HEA, HEB eller en egen I-profil) kan få endeplader.

### »Bjælkeenden er ikke længere på søjlelinjen.«

Du flyttede bjælken eller søjlen, efter forbindelsen blev tilføjet. Flyt den tilbage, eller slet forbindelsen.

### »Forbindelser skærer dette element ned til intet.«

Forbindelserne i begge ender skærer elementet længere tilbage end dets længde, for eksempel en meget kort bjælke mellem to dybe søjler. Kontrollér elementets ender og pladetykkelsen.

### »Ingen andre samlinger som denne … er uden forbindelse.«

{{ui:Tilsvarende}} kopierer kun til samlinger med samme bjælkeprofil, søjleprofil og forbindelsestype, bjælke ind i en flange, der endnu ikke har en forbindelse.

### »Begge ender har allerede forbindelser.« / »Denne søjle har allerede en fodplade.«

Vælg den eksisterende forbindelse for at ændre den, eller slet den først.

## Advarsler på fanen Problemer

Advarsler stopper ikke en forbindelse eller et fundament fra at blive bygget; de beder dig kontrollere det. Kant- og afstandsadvarslerne bruger minimumsværdierne i EN 1993-1-8 tabel 3.3 (kant 1,2 × hul, afstand 2,2 × hul, boltlinjeafstand 2,4 × hul). Hvis dit projekt bruger andre regler, gælder advarslen måske ikke; DetailCraft dimensionerer ikke forbindelser.

»et hul ligger uden for enden af delen« betyder, at et huls x er mindre end 0 eller større end skærelængden. Husk at x måles fra skærestart, efter forbindelserne har skåret delen tilbage.

## Fundamentændringer afvises

| Meddelelse | Hvad du gør |
|---|---|
| Dækningen efterlader ingen plads til armering i dette fundament. | Gør fundamentet større eller dækningen mindre |
| Fundamentet er for lavt til to lag armering inden for dækningen. | Gør det dybere eller reducér dækningen |
| Startarmeringen passer ikke inde i fundamentet med 75 mm dækning. | Færre startjern, tættere afstand eller et større fundament |
| Armeringsafstanden skal være 50–1000 mm. | Skriv en afstand inden for det interval |
| Længden skal være 300–50000 mm. | Fundamentstørrelser har grænser: længde og bredde 300 til 50000, dybde 150 til 10000 |

## Gitter og niveauer afvises

| Meddelelse | Hvad du gør |
|---|---|
| Nummererede gitter: angiv én afstand mellem hvert par linjer (4). | Tæl dine mellemrum: fem linjer kræver fire afstande |
| Bogstavgitter: afstandene skal være positive millimeter. | Ingen nuller, negative tal eller tekst |
| Nummererede gitter: gitternavnene skal være forskellige. | To linjer har samme navn |
| Højst 60 gitterlinjer i hver retning. | Del modellen op |
| Behold mindst ét niveau. | Du fjernede alle niveaurækker |
| Hvert niveau skal have et navn. / To niveauer hedder »…«. | Giv hvert niveau et forskelligt navn |

## Åbning af en fil mislykkes

| Meddelelse | Årsag |
|---|---|
| DetailCraft åbner sine egne modeller (.detailcraft.json). Import af IFC er endnu ikke lavet. | Filen er ikke en `.json`-fil |
| Dette er ikke en DetailCraft-model (ikke JSON). | Filen er beskadiget eller er en anden JSON-fil |
| Dette er ikke en DetailCraft-model. | En JSON-fil fra et andet program |
| Denne model blev gemt af en nyere DetailCraft (format 2). | Åbn den i den nyere DetailCraft, der gemte den |
| Filen er for stor til at være en DetailCraft-model. | Over 50 MB |

Når en fil åbnes med advarsler som »2 members were not valid and left out.«, er resten af modellen i orden. Overskriv ikke originalen, før du har kontrolleret, hvad der blev udeladt.

## Eksporter

| Meddelelse | Årsag |
|---|---|
| Intet at eksportere endnu. | {{ui:IFC}} med en tom model |
| Ingen I-profil- eller pladedele at skrive NC-filer for. | Kun kanaler, vinkeljern eller rør i modellen |
| Ikke skrevet (indtil nu kun I-profiler og plader): … | Disse mærker er ikke I-profiler eller plader; resten blev skrevet |
| Ingen fundamenter, så ingen armering at lave en liste over. | {{ui:Bukning}} uden fundamenter |
| … tegn uden for PDF-skrifttypen blev udskrevet som »?«. | Modelnavnet eller en kvalitet har tegn, PDF-skrifttypen mangler |

{{ui:Værkstedstegning}} er nedtonet: modellen har endnu ingen dele.

## Downloads vises ikke

Hver gemning og eksport er en browserdownload. Kontrollér browserens downloadliste. Hvis browseren spørger, før den henter flere filer, eller blokerer downloads fra denne side, så tillad dem. I Safari skal du kigge på downloadknappen i værktøjslinjen.

## Taster gør ingenting

- Markøren står i et tekst- eller talfelt: værktøjstaster og {{key:Delete}} ignoreres der, så du kan skrive. Tryk på {{key:Tab}} eller klik i visningen.
- En dialog er åben: luk den først.
- Browseren har tastaturet (for eksempel adressefeltet): klik inde i DetailCraft.
- {{key:Ctrl+Shift+F}} bruger Ctrl, også på en Mac.

## Problemer offline

Knappen {{ui:Gem til offline brug}} i appbjælken viser, hvilken tilstand den offline kopi er i. Sådan fungerer gemning: [Arbejde offline](common:offline).

| Knappen viser | Hvad det betyder | Hvad du gør |
|---|---|---|
| {{ui:Gem til offline brug}} | Der er endnu ingen offline kopi i denne browser | Vælg den, mens du er online |
| Gemmer 5 af 20 | Gemningen er i gang | Vent på {{ui:Klar offline}}; hold fanen åben |
| {{ui:Klar offline}} | DetailCraft, dens 3D-visning, alle eksporter og denne hjælp virker uden forbindelse | Intet. Klik på den for {{ui:Gem igen (hent den nyeste version)}} eller {{ui:Fjern offlinekopien}} |
| {{ui:Kunne ikke gemme}} | Nogle filer blev ikke downloadet | Kontrollér din forbindelse og klik for at prøve igen |
| {{ui:Offline er ikke tilgængelig}} | Dette vindue kan ikke gemme en offline kopi: private vinduer og nogle administrerede computere blokerer det | Brug et almindeligt vindue, eller arbejd online |

Hvis du er offline, og knappen ikke viser {{ui:Klar offline}}, så genindlæs ikke og luk ikke fanen: det der er indlæst, bliver ved med at virke. Gem din model med {{key:Mod+S}}, og vent, til du er online igen.

## Ikke-gemt arbejde

Hvis browseren spørger, om du vil forlade siden, har DetailCraft ikke-gemte ændringer. Vælg at blive, og tryk derefter på {{key:Mod+S}}. DetailCraft kan ikke gendanne en model, når fanen er lukket.

## Stadig problemer

Notér hvad du gjorde og den nøjagtige meddelelse, og fortæl os det via [supportsiden](https://getcadcraft.com/support).
