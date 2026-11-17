---
title: Wat is er nieuw in 0.9
summary: Britse staalmaten uit de Blue Book en ongelijkbenige hoekprofielen, werkplaatstekeningen voor elk onderdeel in één PDF-set, Mijn profielen voor eigen doorsneden, P-Delta en eigenfrequenties, ASCE 7-windbelastingen, seismische locatie en combinaties, en live cursors met Volgen.
keywords: wat is er nieuw, release notes, uitgavenotities, changelog, 0.9, Brits staal, blue book, ub, uc, pfc, shs, rhs, chs, ongelijkbenig hoekprofiel, werkplaatstekening, werkplaatstekeningen, bladenset, onderdeelmerk, pdf, mijn profielen, eigen profiel, p-delta, tweede orde, eigenfrequentie, eindige elementen, modale massa, windbelasting, asce 7, seismisch, grondklasse, usgs, belastingcombinaties, lrfd, asd, live, cursors, volgen, personen, tooltips, wat is er nieuw, wijzigingen, 0.8, 0.8.1, versie, nieuwe functies, montage, kraan, lasttabel, film, autopilot, verbindingen, wapening, congestie, fundering, funderingsblok, plaatfundering, zetting, skeletbouw, houtconstructie, dunwandig staal, snijlijst, bouwbaarheid, lastoegankelijkheid, leverancier, voorraad, levertijd, wat begeeft het eerst, beton, seismisch, vloer, talen, assistent
from: 4c95a2de
---

Dit is wat er veranderd is in DetailCraft 0.9, vergeleken met 0.8.1. 0.9 brengt de Britse staalmaten, een werkplaatstekening voor elk onderdeel in één keer, een groter tabblad {{ui:Analyse}} voor raamwerken, en het zien van elkaars cursors wanneer u samenwerkt.

## Nieuw

### Brits staal en werkplaatstekeningen

- **Britse staalmaten.** De profiellijsten bevatten nu 976 maten uit de Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS en RHS, met de koudgevormde holle profielen apart gehouden (hun namen beginnen met CF). Namen staan met de familie eerst, zoals UB305x165x40 of SHS100x100x5.0, en typen zoals tekeningen het zeggen werkt ook: 305x165x40 UB, L100x100x10, SHS100x5. Zie [Profielcatalogus](topic:profile-catalog).
- **Ongelijkbenige hoekprofielen.** UEA-hoekprofielen behouden beide benen via IFC in- en uitvoer en via NC-bestanden, en een spiegeling keert het stuk om, uiteinde voor uiteinde.
- **Alle werkplaatstekeningen tegelijk.** Kies {{ui:Werkplaatstekening}} in de groep {{ui:Uitvoer}} met niets geselecteerd. Het venster somt elk onderdeelmerk op, toont een voorbeeld van elk ervan, en {{ui:Alles downloaden}} slaat één PDF op met een pagina per merk, elk met als titel "Blad 3 van 42". {{ui:PDF downloaden}} slaat het blad op dat u bekijkt. Ook U-profielen, hoekprofielen en holle profielen krijgen nu bladen. Zie [Werkplaatstekeningen maken](topic:shop-drawings).
- **Mijn profielen.** Een eigen profiel kan nu voor elk nieuw model worden bewaard. Laat in het formulier Eigen profiel {{ui:Bewaren in Mijn profielen}} aangevinkt; de lijst {{ui:Mijn profielen}} daaronder heeft {{ui:Bewaren}}, {{ui:Hier gebruiken}} en {{ui:Verwijderen}}. De lijst wordt in deze browser bewaard (tot 200), niet in uw account. Zie [Platen en profielen](topic:plates-and-profiles).

### Analyse

- **Tweede orde (P-Delta).** Vink {{ui:Tweede orde (P-Delta)}} aan naast {{ui:Uitvoeren}} op het tabblad {{ui:Analyse}}, dan werken de normaalkrachten op het vervormde raamwerk. Platen en stijve vloeren blijven van de eerste orde, met een waarschuwing. Zie [Krachten, reacties en doorbuigingen](topic:frame-analysis).
- **Eigenfrequenties.** Het blok {{ui:Eindige elementen: eigenfrequenties}} onder de resultaten zoekt de laagste eigenmodi van hetzelfde model, met periode en effectieve modale massa, en toont een modus op het model. Zie [Krachten, reacties en doorbuigingen](topic:frame-analysis).
- **Windbelastingen en seismische locatie.** Drie nieuwe blokken op het tabblad {{ui:Analyse}}: {{ui:Windbelastingen (ASCE 7, richtingsprocedure)}}, {{ui:Seismische locatie en systeem (ASCE 7)}} en {{ui:ASCE 7-belastingcombinaties}}. Zie [Wind, seismische locatie en ASCE 7-combinaties](topic:wind-seismic-combinations).

### Samen werken

- **Cursors en namen.** In een Live-sessie wordt de aanwijzer van elke persoon in het model getekend met hun naam en kleur, en wat ze selecteerden krijgt een kader.
- **Een persoon volgen.** Open {{ui:Personen}} in de sessie en kies {{ui:Volgen}} bij een naam; uw weergave beweegt mee met die van hen. De host kan {{ui:Iedereen vragen mij te volgen}} kiezen. Zie [Een persoon volgen in een Live-sessie](topic:follow-in-live).

### In elke app

- Tooltips zijn Bootstrap-tooltips, de startkaart met tips heeft een sluitknop, tabbalken scrollen zijdelings wanneer ze niet passen, en het browsertabblad noemt het open document, gevolgd door DetailCraft en CadCraft.

## Opgelost

- Een eigen profiel ging verloren wanneer u een nieuw model startte.
- U-profielen, hoekprofielen en holle profielen ontbraken in de werkplaatstekenset.

## Eerlijke beperkingen

- De wind-, seismische en eindige-elementenblokken zijn controlehulpmiddelen. Uw constructeur beoordeelt de resultaten; het zijn geen normcontrole. De USGS-opzoeking is getest op een stand-in, niet op de live dienst.
- Eindige elementen en P-Delta zijn gecontroleerd met de hand en met gesloten oplossingen, niet met een echt gebouw. Knikanalyse is nog niet beschikbaar.
- Nog geen Britse fabrikant heeft de Britse maten geprobeerd, en NC-bestanden voor ongelijkbenige hoekprofielen zijn nog niet op een machine gedraaid.
- De werkplaatstekenset is alleen PDF.
- Talen naast het Engels zijn machineconcepten.
- De Windows-installaties zijn niet met een code ondertekend (Meer informatie, daarna Toch uitvoeren); het macOS-schijfbeeld is niet genotariseerd (met de rechtermuisknop, daarna Openen).

Eerdere wijzigingen staan in de 0.8- en 0.8.1-notities verderop op deze pagina.

## Eerder: 0.8 en 0.8.1

Dit is wat er veranderd is in DetailCraft 0.8 (1 november 2026) en 0.8.1 (2 november 2026), vergeleken met 0.7. 0.7 controleerde stalen staven; 0.8 plant de hijsbewerkingen, stelt de verbindingen voor, controleert de funderingen en de wapening, en bouwt het skelet op voor houtconstructie- en dunwandige wanden, vloeren en daken.

### Nieuw

**Montage**

- **Montageplan en film.** Beschrijf op het tabblad {{ui:Montage}} een kraan (waar hij staat, zijn hoogste haak, het hijsgerei dat niet in de lasttabel staat) en typ de rijen van zijn lasttabel. DetailCraft hijst het model per samenstelling, in fasevolgorde en laag voor laag, en controleert elke hijs tegen de tabel bij zijn radius en tegen de marge die u instelt. {{ui:Film opslaan}} schrijft één HTML-bestand dat offline in elke browser speelt, ook op een telefoon. Hijsbewerkingen die boven de tabel, er voorbij of te hoog zijn, staan in {{ui:Problemen}}. Het is een plan uit uw getallen, geen hijsplan. Zie [Montageplan en film](topic:erection-movie).

**Verbindingen**

- **Verbindingsautopilot.** Het tabblad {{ui:Autopilot}} bekijkt elke verbinding zonder verbinding en stelt er een voor op basis van de profielen: voetplaten, schuifplaatjes, kopplaten voor de liggers die u als momentliggers markeert, lasverbindingen en knoopplaten. Geef een gelijkmatige belasting of één dwarskracht aan het uiteinde op, dan volgt het aantal bouten de ontwerpsterkte van de bout. {{ui:Alles toevoegen}} voegt de voorstellen toe als één stap ongedaan maken. Het zijn beginwaarden om te beoordelen, geen verbindingsontwerp.
- **Controles op bouwbaarheid.** {{ui:Problemen}} voor een bout die een moersleutel niet bereikt, bouten die te dicht bij de dop staan, kehlassen buiten hun maatgrenzen en holle profielen die water vasthouden. Lastoegankelijkheid is nieuw: een rondlopende kehlas die de brander van een lasser niet bereikt, staat erin met het deel dat in de weg zit en het deel van de las dat erdoor getroffen wordt. Zie [Controles op bouwbaarheid](topic:constructability).

**Funderingen en wapening**

- **Funderingscontroles.** Het tabblad {{ui:Fundering}} controleert funderingsblokken, gecombineerde funderingen en plaatfunderingen op de grond die u beschrijft: draagvermogen, glijden en kantelen onder gebruiksbelastingen; buiging, dwarskracht, ponsen, verankering en minimale wapening uit de belastingen met veiligheidsfactoren (ACI 318-19). Een kolom nabij een rand of hoek wordt gecontroleerd met de doorsnede die door de rand van het funderingsblok wordt afgesneden. De zetting komt uit de modulus van de grond, een flexibele plaatfundering wordt opgelost op veren uit een ondergrondmodulus, en paalgroepen en keermuren hebben eigen panelen. Kolombelastingen kunt u typen of overnemen uit {{ui:Analyse}}. Zie [Funderingscontroles](topic:foundation-checks).
- **Congestiekaart wapening.** Het tabblad {{ui:Congestie}} tekent een warmtekaart van elk funderingsblok gezien van bovenaf: waar de staven te weinig ruimte laten voor beton om naar beneden te komen, afgezet tegen de regel voor vrije hartafstand en, als u ze opgeeft, het grootste toeslagmateriaal en de trilkop. Zie [Congestiekaart wapening](topic:rebar-congestion).

**Skeletbouw en levering**

- **Houtconstructie en dunwandig skelet.** Het tabblad {{ui:Skeletbouw}} bouwt wand-, vloer- en dakpanelen op met elk stuk, een snijlijst, de voorraad om te kopen en een werkplaatstekening op schaal. {{ui:Als staven plaatsen}} zet de stukken in het model, en {{ui:PDF-bladen}} slaat één blad per paneel op. De maten, hartafstanden en kopbalken zijn van u: DetailCraft controleert niet of ze de belasting dragen. Zie [Houtconstructie- en dunwandige skeletpanelen](topic:framing-panels).
- **Leveranciersvoorraad en levertijden.** Het tabblad {{ui:Levering}} leest de voorraadlijst van een leverancier (CSV) en toont, voor elke doorsnede die de snijlijst koopt, of er genoeg op voorraad is en hoe lang de wachttijd is. Tekorten en late doorsneden staan in {{ui:Problemen}}. Er wordt niets besteld. Zie [Voorraad van leveranciers en levertijden](topic:supplier-stock).

**Analyse en ontwerp**

- **Wat begeeft het eerst?** Op het tabblad {{ui:Analyse}} vindt de knop de bepalende sterktecombinatie, de zwakste staaf, hoe ver de belastingen kunnen oplopen voordat de eerste staaf zijn grens bereikt, en de zwakste kopplaat of het zwakste schuifplaatje waar de schuifsterkte van de bouten bekend is. Het heeft eerst de combinaties en een ontwerpnorm nodig. Oplegdruk, blokafschuiving, lassen en hefboomwerking worden niet gecontroleerd. Uw verbonden assistent kan hetzelfde vragen.
- **Live.** Vink {{ui:Live: na elke bewerking opnieuw oplossen}} aan, dan wordt het raamwerk na elke bewerking opnieuw opgelost.
- **Meer beton.** Een slanke kolom in een niet-verplaatsbaar raamwerk wordt ontworpen op zijn vergrote moment (ACI 318-19 6.6.4.5). De seismische periode kan uit de analyse worden genomen volgens de methode van Rayleigh. Een vloer van platen krijgt de wapening die elke laag nodig heeft uit de momenten, en de eenrichtingsdwarskracht. Zie [Betonelementen controleren en seismische belastingen maken](topic:concrete-and-seismic).
- **Ter controle door een constructeur.** De resultaten van fundering, beton en Wat begeeft het eerst zijn hulpmiddelen. Windbelastingen zijn nog niet beschikbaar.

**In elke app**

- **Talen.** De help is in 54 talen. De talen naast het Engels zijn machineconcepten totdat een moedertaalspreker ze leest; tien zijn nieuw (Litouws, Lets, Bosnisch, Marathi, Telugu, Albanees, Afrikaans, Filipijns, Swahili, Oezbeks).
- **Werkbalkrijen.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Werkbalkrijen}} kiest omslaan, 2 rijen of 1 rij. Een balk die al past blijft zoals hij is; de rest scrolt zijdelings.
- **Eigenschappenraster.** De velden van het funderingsblok gebruiken het gedeelde raster: inklapbare categorieën en een compacte dichtheid. Getypte rekenkunde zoals 2*450 werkt nog steeds.
- **Invoerapparaten.** Trackpad, pen, 3D-muis, controller en MIDI kunnen de apps bedienen. Zie [Navigeren in 3D](topic:navigate-3d).
- **Paneel Problemen.** De waarschuwingen van de nieuwe controles hierboven verschijnen in hetzelfde paneel {{ui:Problemen}} als voorheen.
- **Verbind uw AI.** Uw eigen assistent, verbonden via CadCraft Studio, werkt met alle acht apps en ziet alleen wat u toestaat. Verbinden met één klik, de gehoste connector en uw eigen API-sleutel in Studio komen nog. Zie [DetailCraft gebruiken met een AI-assistent](topic:use-with-ai-assistants).

### Opgelost in 0.8.1

- **Talen in Studio.** Studio en de verpakte edities kunnen tijdens het draaien van taal wisselen; eerder waren ze alleen Engels. Het is nog niet op elk platform getest: laat ons weten als de taal niet verandert.
- **Selecteren met kruisvenster.** De 0.8.1-installaties bevatten het gedrag van selecteren met een venster dat in de 0.8-webversie al goed was; een oudere installatie niet.
- **Tablets in staand formaat.** Overgebleven rasterhoogte gaat naar het canvas, en de bladindeling begint bij 760 px of minder.

### Nog niet in deze versie

- **NC naar een machine sturen** is nog niet uitgebracht.
- **Windbelastingen** voor beton zijn nog niet beschikbaar, en de controles van beton en fundering zijn ter beoordeling door een constructeur.
- **Ondertekening met een code.** De Windows-installaties en de macOS .dmg zijn niet ondertekend, dus Windows kan waarschuwen, en macOS vraagt om met de rechtermuisknop te klikken, daarna Openen.

Eerdere wijzigingen staan in [Wat is er nieuw in 0.7](topic:whats-new-0-7).
