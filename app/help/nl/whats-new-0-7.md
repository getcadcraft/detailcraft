---
title: Wat is er nieuw in 0.7 (eerder)
summary: Ontwerpcontroles van stalen I-profielen met belastingcombinaties volgens ASCE 7 of EN 1990 en staafcontroles volgens AISC 360 of EN 1993-1-1, USD-export van het stalen model, een assistenthulpmiddel voor USD, een Steel-lint met grote en kleine knoppen, panelen die zich opruimen en dialoogvensters die verschuiven.
keywords: wat is er nieuw 0.7, eerdere uitgave, uitgavenotities, changelog, wijzigingen, 0.7, versie, nieuwe functies, ontwerpcontroles, staalontwerp, benutting, utilisation, utilization, belastingcombinaties, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, Nationale Bijlage, dakbelasting live, doorbuigingsgrens, usd, usda, usdc, usdz, openusd, assistent, mcp, Steel-lint, lint, gesplitste knop, eenheden, compact, panelen, dialoogvensters, Portugees
from: 54a7a8f0
---

Dit is wat er veranderd is in DetailCraft 0.7, vergeleken met 0.6. De raamwerkanalyse van 0.6 heeft nu een tweede stap: het controleren van de stalen staven volgens een ontwerpnorm.

## Nieuw

### Verstekverbindingen (0.7.1)

- **Twee I-profielen die onder een hoek samenkomen**, zoals een portaalknie of een nok: selecteer beide, kies {{ui:Verstek}} in het menu {{ui:Meer}} van de groep {{ui:Verbinden}}, en beide uiteinden worden doorgesneden op het vlak dat de hoek halveert. Kopplaten die aan elkaar gebout zijn en lijfstijvers zijn vinkvakjes in het nieuwe dialoogvenster {{ui:Verstek}}, waarvan de genummerde velden overeenkomen met een tekening van uw verbinding die terwijl u typt wordt gemaakt. De verstek volgt de staven wanneer ze verplaatst worden en werkt door in tekeningen, NC-bestanden (scheve sneden), IFC en de materiaallijst. Zie [Verstekverbindingen](topic:mitres).

### Ontwerpcontroles

- **Belastingcombinaties volgens de norm.** Op het tabblad {{ui:Analyse}} heeft het nieuwe blok {{ui:Ontwerpcontroles}} een {{ui:Ontwerpnorm}}: ASCE 7 + AISC 360 (VS, LRFD) of EN 1990 + EN 1993-1-1 (Eurocode). Geef elk belastinggeval zijn soort (permanent, veranderlijk, de nieuwe dakbelasting, sneeuw, wind, seismisch), druk op {{ui:Combinaties maken}}, en DetailCraft schrijft de sterkte- en bruikbaarheidscombinaties van de norm voor uw gevallen uit. De combinaties die u zelf typte blijven staan. Zie [De combinaties maken](topic:design-checks#make-the-combinations).
- **Waarden van de Nationale Bijlage.** Voor de Eurocode beginnen de factoren bij de aanbevolen waarden; met {{ui:Waarden van de Nationale Bijlage}} typt u die van uw land, en ze worden in het model opgeslagen. Zie [De combinaties maken](topic:design-checks#make-the-combinations).
- **Staven controleren.** {{ui:Staven controleren}} controleert elk stalen I-profiel op trek, druk met knik, buiging met kipping, dwarskracht, buiging met normaalkracht en doorbuiging ten opzichte van de {{ui:Doorbuigingsgrens}} die u instelt. De tabel toont de benutting van elke staaf, de controle die bepalend is en de combinatie daarvan, en de staven krijgen kleuren in het model (blauw, groen, okergeel, rood, grijs voor niet gecontroleerd). Zie [Staven controleren](topic:design-checks#check-the-members).
- **In het rapport.** {{ui:Rapport (PDF)}} en {{ui:Rapport (CSV)}} voegen de normeditities, de instellingen, de benutting per staaf en elk gebruikt artikel toe. Zie [Het rapport](topic:design-checks#the-report).
- **Een hulpmiddel tot een constructeur het heeft beoordeeld.** Er worden alleen krachten van de eerste orde gebruikt. Buizen, hoekprofielen, U-profielen, gelaste profielen en slanke of klasse 4-delen krijgen "niet gecontroleerd" met de reden erbij; torsie, verbindingen en beton worden niet gecontroleerd. Zie [Wat niet wordt gecontroleerd](topic:design-checks#what-is-not-checked).

### USD

- **Het stalen model exporteren als USD.** {{ui:USD}} in de groep {{ui:Uitvoer}} schrijft het model als {{ui:Tekst (.usda)}}, {{ui:Binair (.usdc)}} of {{ui:Pakket (.usdz)}} voor renderprogramma's en sceneopbouw: elke samenstelling bevat zijn onderdelen, elk onderdeel is zijn profiel over de lengte met coping erin, en elk draagt zijn onderdeelmerk, profiel, staalkwaliteit, lengte en gewicht. Boorgaten, bouten, lassen en funderingen zitten niet in de USD-meshes. Zie [Het stalen model exporteren als USD](topic:usd).

### AI-assistenten

- **USD voor assistenten.** Uw eigen assistent, verbonden via CadCraft Studio, kan het model als USD exporteren (`usd_export`), en in Studio naar een map schrijven die u heeft toegestaan. Zie [Wat een assistent kan vragen](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Gewijzigd

- **Het Steel-lint** heeft grote en kleine knoppen: een grote {{ui:Ligger}} naast kleine {{ui:Kolom}}, {{ui:Verband}} en {{ui:Plaat}} op {{ui:Modelleren}} › {{ui:Staven}}; een grote {{ui:Kopplaten}} op {{ui:Detaillering}} › {{ui:Verbindingen}}, met {{ui:Las}} en {{ui:Knoopplaat}} die één gesplitste knop delen; een grote {{ui:Plakken}} op {{ui:Bewerken}} › {{ui:Klembord}}, met {{ui:Op dezelfde plaats plakken}} en {{ui:Dupliceren}} achter de pijl van de groep. {{ui:Fabricage}} › {{ui:Uitwisseling}} heeft {{ui:USD exporteren}} naast IFC. De andere menustijlen zien er zoals voorheen uit. Zie [Menu's, toetsen en muis](topic:menus-keys-and-mouse#the-three-styles).
- [Het raamwerk analyseren](topic:frame-analysis) verwijst nu naar de ontwerpcontroles, en de combinaties ervan kunnen volgens de norm worden gemaakt.

## In elke app

- **Eenheden.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Eenheden}} heeft per lengte, oppervlakte, volume, hoek en helling één lijst, met de exacte maten die de definities van de eenheden geven (de US survey foot is een eigen eenheid). Schakel de eenheden die u nooit gebruikt uit, dan verdwijnen ze uit de eenheidslijsten; markeer er één met een ster en nieuw werk begint erin. Een bestand behoudt altijd zijn eigen eenheid. De eigen vakjes van DetailCraft volgen de lijsten nog niet: lengten worden daar nog in millimeters getypt. Zie [Eenheden, getypte waarden en de eenheidslijsten](common:unit-lists).
- **Een compactere indeling en panelen die zich opruimen.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Opmaakdichtheid}} › {{ui:Compact}} past meer op het scherm (aanraakschermen en telefoons houden hun grote knoppen). Elk zijpaneel heeft een smalle titelbalk: sleep die om het paneel vast te zetten of zwevend te maken, zet het op de balk van een ander paneel om één kader als tabbladen te delen, maak het automatisch verbergend zodat het naar de rand schuift, of verberg het en haal het weer terug vanaf de rand. Zie [De panelen indelen](common:arrange-panels#make-the-layout-denser).
- **Dialoogvensters verplaatsen.** Sleep een dialoogvenster aan de titelbalk uit de weg van de tekening; het komt terug waar u het liet. Dubbelklik op de titelbalk om het weer in het midden te zetten. Zie [Een dialoogvenster verplaatsen](common:arrange-panels#move-a-dialog).
- **Recepten voor AI-assistenten.** Tien uitgewerkte verzoeken aan uw eigen assistent (een tekening opruimen, een bladenset plotten, tekeningen controleren, een model vragen stellen, een opmeting optellen, een variant van een onderdeel proberen…), elk met de hulpmiddelen die het aanroept en de rechten die het nodig heeft, en elk door onze tests opnieuw afgespeeld. De apps bevatten geen AI. Zie [Recepten voor AI-assistenten](common:assistants-recipes).
- **Talen.** **Português (Portugal)** is nieuw in {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Taal}}. Deze taal en **Português (Brasil)**, **Español (México)** en **Bahasa Indonesia** hebben nu elk woord van de apps, als concepten die nog niet door een moedertaalspreker zijn gelezen. De help-onderwerpen zijn in het Engels.
- **CadCraft Studio** zegt waarom een controle op updates is mislukt (nog geen bestand voor uw systeem, geen netwerk, een ongeldige handtekening) in plaats van alleen "Gereed", en haalt een gesloten kaart Wat is er nieuw niet meer terug totdat er een nieuwere uitgave is.

## Nog niet in deze versie

- **0.7 is niet met een code ondertekend.** Het ondertekenen en het Microsoft Store-pakket zijn naar 0.8 verschoven, omdat de validatie van het certificaat nog niet is binnengekomen. Controleer de SHA-256 naast elk bestand op getcadcraft.com/download. Als SmartScreen op Windows de installatie tegenhoudt, kies dan {{ui:Meer informatie}}, daarna {{ui:Toch uitvoeren}}. Op een Mac kiest u bij de eerste keer met de rechtermuisknop CadCraft Studio en kiest u {{ui:Openen}}. CadCraft Studio staat nog niet in een appwinkel, en er is nog geen iPad- of iPhone-versie.
- De lijsten voor hoek en helling in {{ui:Eenheden}} worden opgeslagen, maar nog geen vakje leest ze.
- **De ontwerpcontroles zijn nog niet door een constructeur beoordeeld.** Onze tests vergelijken ze met gedrukte tabelwaarden en met met de hand uitgewerkte formules, nog niet met de uitgewerkte voorbeelden van een ontwerphandboek. Tot een beoordeling zijn ze een hulpmiddel: controleer belangrijke staven met de hand.
- De ontwerpcontroles gebruiken krachten van de eerste orde (geen effecten van de tweede orde) en controleren alleen I-profielen. Nog niet beschikbaar: buizen, hoekprofielen, U-profielen, gelaste profielen, slanke (AISC) of klasse 4-delen (Eurocode) op buiging, torsie, schuifknik samen met buiging, verbindingen, vermoeiing, brand, seismische detaillering en beton. Een slank deel op druk laat de drukcontroles weg, en de staaf krijgt "voldoet, gedeeltelijk gecontroleerd".
- De raamwerkanalyse is nog steeds van de eerste orde en lineair, en een constructeur heeft haar nog niet op een echt project geprobeerd.
- Boorgaten, bouten, lassen en funderingen zitten niet in de USD-export.

Al het overige staat in [Wat nog niet beschikbaar is](topic:not-built-yet).
