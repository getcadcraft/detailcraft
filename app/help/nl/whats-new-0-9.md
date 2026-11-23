---
title: Wat is er nieuw in 0.9 (eerder)
summary: UK-staalmaten uit de Blue Book en ongelijkbenige hoekprofielen, werkplaatstekeningen voor elk onderdeel in één PDF-set, Mijn profielen voor eigen doorsneden, P-Delta en eigenfrequenties, windbelastingen volgens ASCE 7, seismische locatie en combinaties, en live cursors met Volgen.
keywords: wat is er nieuw 0.9, eerdere uitgave, wat is er nieuw, uitgavenotities, wijzigingslog, 0.9, UK-staal, Blue Book, ub, uc, pfc, shs, rhs, chs, ongelijkbenig hoekprofiel, werkplaatstekening, werkplaatstekeningen, bladenset, onderdeelmerk, pdf, mijn profielen, eigen profiel, P-Delta, tweede orde, eigenfrequentie, eindige elementen, modale massa, windbelasting, ASCE 7, seismisch, grondklasse, USGS, belastingcombinaties, LRFD, ASD, live, cursors, volgen, personen, tooltips, wat is er nieuw, uitgavenotities, wijzigingen, 0.8, 0.8.1, versie, nieuwe functies, montage, kraan, belastingtabel, film, autopilot, verbindingen, wapening, congestie, fundering, funderingsvoet, zetting, funderingsmat, skeletbouw, hout, dunwandig, snijlijst, bouwbaarheid, lasbereikbaarheid, leverancier, voorraad, levertijd, wat begeeft het eerst, live, beton, seismisch, vloerplaat, talen, assistent
from: ab0c7f05
---

Dit is wat er in DetailCraft 0.9 is veranderd, vergeleken met 0.8.1. 0.9 brengt de UK-staalmaten, een werkplaatstekening voor elk onderdeel in één keer, een groter tabblad {{ui:Analyse}} voor frames, en een weergave van elkaars cursors wanneer u samenwerkt.

## Nieuw

### UK-staal en werkplaatstekeningen

- **UK-staalmaten.** De profiellijsten bevatten nu 976 maten uit de Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS en RHS, met de koudgevormde holle profielen apart gehouden (hun namen beginnen met CF). Namen staan familie voorop, zoals UB305x165x40 of SHS100x100x5.0, en typen zoals in tekeningen werkt ook: 305x165x40 UB, L100x100x10, SHS100x5. Zie [Profielcatalogus](topic:profile-catalog).
- **Ongelijkbenige hoekprofielen.** UEA-hoekprofielen behouden beide benen bij IFC in en uit en bij NC-bestanden, en een spiegeling draait het stuk om, van uiteinde naar uiteinde.
- **Alle werkplaatstekeningen tegelijk.** Kies {{ui:Werkplaatstekening}} in de groep {{ui:Uitvoer}} terwijl niets is geselecteerd. Het venster geeft elk onderdeelmerk weer, toont een voorbeeld van elk ervan, en {{ui:Alles downloaden}} slaat één PDF op met een pagina per merk, elk met de titel "Blad 3 van 42". {{ui:PDF downloaden}} slaat het blad op dat u bekijkt. Kanalen, hoekprofielen en holle profielen krijgen nu ook bladen. Zie [Werkplaatstekeningen maken](topic:shop-drawings).
- **Mijn profielen.** Een eigen profiel kan nu bij elk nieuw model bewaard blijven. Laat in het formulier Eigen profiel {{ui:Bewaren in Mijn profielen}} aangevinkt; de lijst {{ui:Mijn profielen}} eronder heeft {{ui:Bewaren}}, {{ui:Hier gebruiken}} en {{ui:Verwijderen}}. De lijst wordt in deze browser bewaard (tot 200), niet in uw account. Zie [Platen en profielen](topic:plates-and-profiles).

### Analyse

- **Tweede orde (P-Delta).** Vink {{ui:Tweede orde (P-Delta)}} aan naast Uitvoeren in het tabblad {{ui:Analyse}}, dan werken de normaalkrachten op het vervormde frame. Platen en stijve vloeren blijven van de eerste orde, met een waarschuwing. Zie [Krachten, reacties en doorbuigingen](topic:frame-analysis).
- **Eigenfrequenties.** Het blok {{ui:Eindige elementen: eigenfrequenties}} onder de resultaten zoekt de laagste modi van hetzelfde model, met periode en effectieve modale massa, en toont een modus op het model. Zie [Krachten, reacties en doorbuigingen](topic:frame-analysis).
- **Windbelastingen en seismische locatie.** Drie nieuwe blokken in het tabblad {{ui:Analyse}}: {{ui:Windbelastingen (ASCE 7, richtingsprocedure)}}, {{ui:Seismische locatie en systeem (ASCE 7)}} en {{ui:ASCE 7-belastingcombinaties}}. Zie [Wind, seismische locatie en ASCE 7-combinaties](topic:wind-seismic-combinations).

### Samenwerken

- **Cursors en namen.** In een Live-sessie wordt de aanwijzer van elke persoon in het model getekend met hun naam en kleur, en wat zij hebben geselecteerd krijgt een kader.
- **Een persoon volgen.** Open {{ui:Personen}} in de sessie en kies {{ui:Volgen}} bij een naam; uw weergave beweegt mee met die van hen. De host kan {{ui:Iedereen vragen mij te volgen}} kiezen. Zie [Een persoon volgen in een Live-sessie](topic:follow-in-live).

### In elke app

- Tooltips zijn Bootstrap-tooltips, de startkaart heeft een sluitknop, tabbalken scrollen zijwaarts wanneer ze niet passen, en het browsertabblad toont de naam van het open document, gevolgd door DetailCraft en CadCraft.

## Opgelost

- Een eigen profiel ging verloren wanneer u een nieuw model begon.
- Kanalen, hoekprofielen en holle profielen ontbraken in de werkplaatstekenset.

## Eerlijke beperkingen

- De wind-, seismische en eindige-elementenblokken zijn controlehulpmiddelen. Uw ingenieur controleert de resultaten; het zijn geen normcontroles. De USGS-opzoeking is getest op een vervanger, niet op de live dienst.
- Eindige elementen en P-Delta zijn gecontroleerd tegen berekeningen met de hand en gesloten oplossingen, niet tegen een echt gebouw. Knikanalyse is nog niet beschikbaar.
- Geen Britse staalbouwer heeft de UK-maten nog geprobeerd, en NC-bestanden voor ongelijkbenige hoekprofielen zijn nog niet op een machine uitgevoerd.
- De werkplaatstekenset is alleen PDF.
- Talen naast Engels zijn machinale concepten.
- De Windows-installatieprogramma's zijn niet van een codehandtekening voorzien (Meer informatie, dan Toch uitvoeren); het macOS-schijfbeeld is niet genotariseerd (klik met de rechtermuisknop, dan Open).

Eerdere wijzigingen staan in de 0.8- en 0.8.1-notities verderop op deze pagina.

## Eerder: 0.8 en 0.8.1

Dit is wat er in DetailCraft 0.8 (1 november 2026) en 0.8.1 (2 november 2026) is veranderd, vergeleken met 0.7. 0.7 controleerde stalen staven; 0.8 plant de hijsoperaties, stelt verbindingen voor, controleert de funderingen en de wapening, en maakt de skeletbouw voor houten en dunwandige wanden, vloeren en daken.

### Nieuw

**Montage**

- **Montageplan en film.** Beschrijf in het tabblad {{ui:Montage}} een kraan (waar hij staat, zijn hoogste haak, het hijsgerei dat niet in de belastingtabel staat) en typ de rijen van zijn belastingtabel. DetailCraft hijst het model per samenstelling, in fasevolgorde en laag voor laag, en controleert elke hijsing tegen de tabel op de bijbehorende radius en tegen de marge die u instelt. {{ui:Film opslaan}} schrijft één HTML-bestand dat offline in elke browser afspeelt, ook op een telefoon. Hijsingen die boven de tabel, erover of te hoog zijn, staan in {{ui:Problemen}}. Het is een plan uit uw getallen, geen hijsplan. Zie [Montageplan en film](topic:erection-movie).

**Verbindingen**

- **Verbindingsautopiloot.** Het tabblad {{ui:Autopilot}} bekijkt elk knooppunt zonder verbinding en stelt er een voor op basis van de profielen: voetplaten, lijfplaten, kopplaten voor de liggers die u als momentliggers aanduidt, lasverbindingen en knoopplaten. Geef een gelijkmatige belasting of één eindkracht op, en het aantal bouten volgt uit de ontwerpsterkte van de bout. {{ui:Alles toevoegen}} voegt de voorstellen toe als één stap ongedaan maken. Het zijn beginwaarden om na te kijken, geen verbindingsontwerp.
- **Controles op bouwbaarheid.** {{ui:Problemen}} voor een bout waar een steeksleutel niet bij kan, bouten te dicht op de dop, hoeklassen buiten hun maatgrenzen en holle profielen die water vasthouden. Lasbereikbaarheid is nieuw: een rondlopende hoeklas die de lasbrander van een lasser niet bereikt, wordt vermeld met het onderdeel dat in de weg zit en het aandeel van de las dat erdoor wordt getroffen. Zie [Controles op bouwbaarheid](topic:constructability).

**Fundering en wapening**

- **Funderingscontroles.** Het tabblad {{ui:Fundering}} controleert funderingsvoeten, gecombineerde funderingen en matten op de grond die u beschrijft: draagkracht, glijden en kantelen onder gebruiksbelastingen; buiging, dwarskracht, doorponsing, verankering en minimaal staal onder gefactoreerde belastingen (ACI 318-19). Een kolom dicht bij een rand of hoek wordt gecontroleerd met de doorsnede die door de rand van de fundering wordt afgesneden. Zetting komt uit de elasticiteitsmodulus van de grond, een flexibele mat wordt opgelost op veren uit een ondergrondmodulus, en paalgroepen en keermuren hebben eigen panelen. Kolombelastingen kunnen worden ingetypt of uit de {{ui:Analyse}} komen. Zie [Funderingscontroles](topic:foundation-checks).
- **Wapeningscongestiekaart.** Het tabblad {{ui:Congestie}} tekent een warmtekaart van elke fundering van bovenaf: waar de staven te weinig ruimte laten voor beton om naar beneden te komen, afgezet tegen de regel voor vrije tussenafstand en, als u ze opgeeft, het grootste granulaat en de trilkop. Zie [Wapeningscongestiekaart](topic:rebar-congestion).

**Skeletbouw en levering**

- **Houten en dunwandige skeletbouw.** Het tabblad {{ui:Skeletbouw}} bouwt wand-, vloer- en dakpanelen op met elk stuk, een snijlijst, de voorraad die u moet kopen en een werkplaatstekening op schaal. {{ui:Als staven plaatsen}} zet de stukken in het model, en {{ui:PDF-bladen}} slaat één blad per paneel op. De maten, afstanden en kopbalken zijn van u: DetailCraft controleert niet of ze de belasting dragen. Zie [Houten en dunwandige skeletpanelen](topic:framing-panels).
- **Voorraad van leveranciers en levertijden.** Het tabblad {{ui:Levering}} leest de voorraadlijst van een leverancier (CSV) en toont voor elke doorsnede die de snijlijst koopt, of er genoeg op voorraad is en hoe lang de wachttijd is. Tekorten en late doorsnedes staan in {{ui:Problemen}}. Er wordt niets besteld. Zie [Voorraad van leveranciers en levertijden](topic:supplier-stock).

**Analyse en ontwerp**

- **Wat begeeft het eerst?** In het tabblad {{ui:Analyse}} vindt de knop de sterktecombinatie die bepalend is, de zwakste staaf, hoe ver de belastingen kunnen groeien voordat de eerste staaf zijn grens bereikt, en de zwakste kopplaat of lijfplaat waarvan de afschuifsterkte van de bouten bekend is. Er zijn eerst combinaties en een ontwerpnorm nodig. Oplegging, blokafschuiving, lassen en hefboomwerking worden niet gecontroleerd. Uw verbonden assistent kan hetzelfde vragen.
- **Live.** Vink {{ui:Live: na elke bewerking opnieuw oplossen}} aan en het frame wordt na elke bewerking opnieuw opgelost.
- **Beton, meer.** Een slanke kolom in een niet-zijdelings verschuifbaar frame wordt ontworpen voor zijn vergrote moment (ACI 318-19 6.6.4.5). De seismische periode kan uit de analyse worden gehaald met de methode van Rayleigh. Een vloer van platen krijgt het staal dat elke laag nodig heeft uit zijn momenten, en de eenrichtingsdwarskracht. Zie [Betonelementen controleren en seismische belastingen maken](topic:concrete-and-seismic).
- **Voor een ingenieur om te controleren.** De resultaten van fundering, beton en Wat begeeft het eerst? zijn hulpmiddelen. Windbelastingen zijn nog niet beschikbaar.

**In elke app**

- **Talen.** De help staat in 54 talen. De talen naast Engels zijn machinale concepten totdat een moedertaalspreker ze heeft gelezen; tien zijn nieuw (Litouws, Lets, Bosnisch, Marathi, Telugu, Albanees, Afrikaans, Filipijns, Swahili, Oezbeeks).
- **Werkbalkrijen.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Werkbalkrijen}} kiest tussen omslaan, 2 rijen of 1 rij. Een balk die al past blijft zoals hij is; de rest scrolt zijwaarts.
- **Eigenschappenrooster.** De velden van de fundering gebruiken het gedeelde rooster: samenvouwbare categorieën en een compacte dichtheid. Ingetypte rekenkunde zoals 2*450 werkt nog steeds.
- **Invoerapparaten.** Trackpad, pen, 3D-muis, controller en MIDI kunnen de apps aansturen. Zie [Navigeren in 3D](topic:navigate-3d).
- **Probleempaneel.** De waarschuwingen van de nieuwe controles hierboven verschijnen in hetzelfde paneel {{ui:Problemen}} als voorheen.
- **Verbind uw AI.** Uw eigen assistent, verbonden via CadCraft Studio, werkt met alle acht apps en ziet alleen wat u toestaat. Eén-klik-verbinding, de gehoste connector en uw eigen API-sleutel in Studio komen nog. Zie [DetailCraft gebruiken met een AI-assistent](topic:use-with-ai-assistants).

### Nog niet in deze versie

- **NC naar een machine sturen** is nog niet uitgebracht.
- **Windbelastingen** voor beton zijn nog niet beschikbaar, en de beton- en funderingscontroles zijn bedoeld om door een ingenieur te worden nagekeken.
- **Code-ondertekening.** De Windows-installatieprogramma's en het macOS .dmg zijn niet ondertekend, dus Windows kan waarschuwen, en macOS vraagt om met de rechtermuisknop te klikken, dan Open.

### Opgelost in 0.8.1

- **Talen in Studio.** Studio en de verpakte edities kunnen tijdens het gebruik van de app van taal wisselen; voorheen waren ze alleen in het Engels. Het is nog niet op elk platform getest: laat ons weten als de taal niet verandert.
- **Selecteren met kruisvenster.** De 0.8.1-installatieprogramma's bevatten het selecteren op venster al correct, zoals in de 0.8-webversie; een oudere installatie deed dat niet.
- **Tablets in staand formaat.** Overtollige rasterhoogte gaat naar het canvas, en de bladindeling begint bij 760 px of minder.

Eerdere wijzigingen staan in [Wat is er nieuw in 0.7](topic:whats-new-0-7).
