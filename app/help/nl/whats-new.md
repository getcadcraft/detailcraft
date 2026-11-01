---
title: Wat is er nieuw in 0.7
summary: Ontwerpcontroles van stalen I-profielen met belastingcombinaties uit ASCE 7 of EN 1990 en staafcontroles volgens AISC 360 of EN 1993-1-1, USD-export van het staalmodel, een assistentgereedschap voor USD, een lint Staal met grote en kleine knoppen, panelen die netjes opzij gaan en dialoogvensters die verplaatsen.
keywords: wat is er nieuw, release-opmerkingen, wijzigingslogboek, wijzigingen, 0.7, versie, nieuwe functies, ontwerpcontroles, staalontwerp, benuttingsgraad, belastingcombinaties, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, Nationale Bijlage, dakbelasting, doorbuigingsgrens, usd, usda, usdc, usdz, openusd, assistent, mcp, lint staal, lint, splitknop, eenheden, compact, panelen, dialoogvensters, portugees
from: 17d1e0bb
---

Dit is wat er in DetailCraft 0.7 is veranderd ten opzichte van 0.6. De raamwerkanalyse van 0.6 heeft nu een tweede stap: de stalen staven toetsen aan een ontwerpnorm.

## Nieuw

### Verstekverbindingen (0.7.1)

- **Twee I-profielen die onder een hoek samenkomen**, zoals een portaalhoek of een nok: selecteer beide, kies {{ui:Verstek}} in het menu {{ui:Meer}} van de groep {{ui:Verbinden}}, en beide uiteinden worden gezaagd in het vlak dat de hoek middendoor deelt. Aan elkaar gebouwde kopplaten en lijfstijvers zijn aanvinkvakjes in het nieuwe dialoogvenster Verstek, waarvan de genummerde velden passen bij een tekening van uw verbinding die tijdens het typen wordt gemaakt. Het verstek volgt de staven als ze verplaatsen en gaat door naar tekeningen, NC-bestanden (schuine zaagsneden), IFC en de stuklijst. Zie [Verstekverbindingen](topic:mitres).

### Ontwerpcontroles

- **Belastingcombinaties uit de norm.** In het tabblad {{ui:Analyse}} heeft het nieuwe blok {{ui:Ontwerpcontroles}} een {{ui:Ontwerpnorm}}: ASCE 7 + AISC 360 (VS, LRFD) of EN 1990 + EN 1993-1-1 (Eurocode). Geef elk belastinggeval zijn soort (permanent, veranderlijk, de nieuwe dakbelasting, sneeuw, wind, seismisch), druk op {{ui:Combinaties maken}}, en DetailCraft schrijft de sterkte- en bruikbaarheidscombinaties van de norm voor uw gevallen. De combinaties die u zelf typte, blijven. Zie [De combinaties maken](topic:design-checks#make-the-combinations).
- **Waarden van de Nationale Bijlage.** Voor de Eurocode beginnen de factoren bij de aanbevolen waarden; met {{ui:Waarden van de Nationale Bijlage}} typt u die van uw land, en ze worden in het model opgeslagen. Zie [De combinaties maken](topic:design-checks#make-the-combinations).
- **Staven controleren.** {{ui:Staven controleren}} toetst elk stalen I-profiel op trek, druk met knik, buiging met kip, dwarskracht, buiging met normaalkracht en doorbuiging aan de {{ui:Doorbuigingsgrens}} die u instelt. De tabel toont de benuttingsgraad van elke staaf, de maatgevende controle en de combinatie ervan, en de staven zijn op het model gekleurd (blauw, groen, oker, rood, grijs voor niet gecontroleerd). Zie [De staven controleren](topic:design-checks#check-the-members).
- **In het rapport.** {{ui:Rapport (PDF)}} en {{ui:Rapport (CSV)}} voegen de uitgaven van de norm, de instellingen, de benuttingsgraad per staaf en elk gebruikt artikel toe. Zie [Het rapport](topic:design-checks#the-report).
- **Een hulpmiddel totdat een ingenieur het heeft beoordeeld.** Het gebruikt alleen eerste-orde krachten. Buizen, hoekprofielen, kanaalprofielen, gelaste profielen en slanke of klasse 4-onderdelen tonen "niet gecontroleerd", met de reden; torsie, verbindingen en beton worden niet gecontroleerd. Zie [Wat niet wordt gecontroleerd](topic:design-checks#what-is-not-checked).

### USD

- **Het staalmodel als USD exporteren.** {{ui:USD}} in de groep {{ui:Uitvoer}} schrijft het model als {{ui:Tekst (.usda)}}, {{ui:Binair (.usdc)}} of {{ui:Pakket (.usdz)}} voor renderprogramma's en scene-opbouw: elke samenstelling bevat zijn onderdelen, elk onderdeel is zijn doorsnede over zijn lengte met coperingen uitgesneden, en elk draagt zijn onderdeelmerk, profiel, kwaliteit, lengte en gewicht. Boutgaten, bouten, lassen en funderingen zitten niet in de USD-meshes. Zie [Het staalmodel als USD exporteren](topic:usd).

### AI-assistenten

- **USD voor assistenten.** Uw eigen assistent, verbonden via CadCraft Studio, kan het model als USD exporteren (`usd_export`), en in Studio naar een map schrijven die u hebt toegestaan. Zie [Waar een assistent om kan vragen](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Gewijzigd

- **Het lint Staal** heeft grote en kleine knoppen: een grote {{ui:Ligger}} naast kleine {{ui:Kolom}}, {{ui:Verband}} en {{ui:Plaat}} op {{ui:Modelleren}} › {{ui:Staven}}; een grote {{ui:Kopplaten}} op {{ui:Detaillering}} › {{ui:Verbindingen}}, met {{ui:Lasverbinding}} en {{ui:Knoopplaat}} die één splitknop delen; een grote {{ui:Plakken}} op {{ui:Bewerken}} › {{ui:Klembord}}, met {{ui:Op dezelfde plaats plakken}} en {{ui:Dupliceren}} achter het pijltje van de groep. {{ui:Fabricage}} › {{ui:Uitwisseling}} heeft {{ui:USD exporteren}} naast IFC. De andere menustijlen zien eruit als voorheen. Zie [Menu's, toetsen en muis](topic:menus-keys-and-mouse#the-three-styles).
- [Het raamwerk analyseren](topic:frame-analysis) wijst nu naar de ontwerpcontroles, en de combinaties kunnen door de norm worden gemaakt.

## In elke app

- **Eenheden.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Eenheden}} heeft een lijst voor lengte, oppervlakte, volume, hoek en helling, met de exacte maten die de definities van de eenheden geven (de US survey foot is een eigen eenheid). Zet de eenheden uit die u nooit gebruikt en ze verdwijnen uit de eenhedenlijsten; geef er één een ster en nieuw werk begint daarin. Een bestand behoudt altijd zijn eigen eenheid. De eigen vakken van DetailCraft volgen de lijsten nog niet: de lengtes worden nog in millimeters getypt. Zie [Eenheden, getypte waarden en de eenhedenlijsten](common:unit-lists).
- **Een dichtere indeling en panelen die netjes opzij gaan.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Opmaakdichtheid}} › {{ui:Compact}} past meer op het scherm (aanraakschermen en telefoons houden hun grote knoppen). Elk zijpaneel heeft een smalle titelbalk: sleep hem om het paneel vast te zetten of zwevend te maken, zet hem neer op de balk van een ander paneel om één kader als tabbladen te delen, speld hem vast zodat hij naar de rand schuift, of verberg hem en haal hem terug vanaf de rand. Zie [De panelen indelen](common:arrange-panels#make-the-layout-denser).
- **Dialoogvensters verplaatsen.** Sleep een dialoogvenster aan zijn titelbalk uit de weg van de tekening; het komt terug waar u het liet. Dubbelklik op de titelbalk om het weer te centreren. Zie [Een dialoogvenster verplaatsen](common:arrange-panels#move-a-dialog).
- **Recepten voor AI-assistenten.** Tien uitgewerkte verzoeken voor uw eigen assistent (een tekening opruimen, een set plotten, tekeningen controleren, een model vragen stellen, een opmeting optellen, een onderdeelvariant proberen…), elk met de gereedschappen die het aanroept en de rechten die het nodig heeft, en elk opnieuw afgespeeld door onze tests. De apps bevatten geen AI. Zie [Recepten voor AI-assistenten](common:assistants-recipes).
- **Talen.** **Português (Portugal)** is nieuw in {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Taal}}. Die, **Português (Brasil)**, **Español (México)** en **Bahasa Indonesia** hebben nu elk woord van de apps, als concepten die nog niet door een moedertaalspreker zijn beoordeeld. De helponderwerpen zijn in het Engels.
- **CadCraft Studio** zegt waarom een updatecontrole mislukte (nog geen bestand voor uw systeem, geen netwerk, een ongeldige handtekening) in plaats van alleen "Gereed", en brengt een gesloten kaart Wat is er nieuw niet meer terug totdat er een nieuwere uitgave is.

## Nog niet in deze versie

- **0.7 is niet code-ondertekend.** Ondertekenen en het Microsoft Store-pakket zijn verplaatst naar 0.8 omdat de validatie van het certificaat nog niet is gelukt. Controleer de SHA-256 naast elk bestand op getcadcraft.com/download. Als SmartScreen op Windows het installatieprogramma tegenhoudt, kiest u {{ui:Meer info}} en daarna {{ui:Toch uitvoeren}}. Klik op een Mac de eerste keer met de rechtermuisknop op CadCraft Studio en kies {{ui:Openen}}. CadCraft Studio staat nog niet in een appwinkel en er is nog geen build voor iPad of iPhone.
- De lijsten voor hoek en helling in {{ui:Eenheden}} worden opgeslagen, maar geen enkel veld leest ze nog.
- **De ontwerpcontroles zijn nog niet door een ingenieur beoordeeld.** Onze tests vergelijken ze met gedrukte tabelwaarden en met de hand uitgewerkte formules, nog niet met de uitgewerkte voorbeelden van een ontwerphandleiding. Tot een beoordeling zijn ze een hulpmiddel: controleer staven die ertoe doen met de hand.
- De ontwerpcontroles gebruiken eerste-orde krachten (geen tweede-orde effecten) en controleren alleen I-profielen. Niet gebouwd: buizen, hoekprofielen, kanaalprofielen, gelaste profielen, slanke (AISC) of klasse 4 (Eurocode) onderdelen op buiging, torsie, schuifknik samen met buiging, verbindingen, vermoeiing, brand, seismische detaillering en beton. Een slank onderdeel op druk laat de drukcontroles weg, en de staaf toont "voldoet, gedeeltelijk gecontroleerd".
- De raamwerkanalyse is nog steeds eerste-orde en lineair, en is nog niet door een ingenieur op een echte klus geprobeerd.
- Boutgaten, bouten, lassen en funderingen zitten niet in de USD-export.

Al het andere staat in [Wat nog niet is gebouwd](topic:not-built-yet).
