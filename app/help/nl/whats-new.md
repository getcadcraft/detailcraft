---
title: Wat is er nieuw in 0.8 en 0.8.1
summary: Een montagefilm op basis van de belastingstabel van een kraan, een verbindingsautopilot, een wapeningsdrukkaart, funderingscontroles, paneelen voor houten en lichtgewicht skeletbouw, controles op bouwbaarheid en lasbereikbaarheid, leverancierssvoorraad, wat het eerst breekt, een live herberekening, meer betoncontroles en de oplossingen in 0.8.1.
keywords: wat is er nieuw, release-opmerkingen, wijzigingenlijst, wijzigingen, 0.8, 0.8.1, versie, nieuwe functies, montage, kraan, belastingstabel, film, autopilot, verbindingen, wapening, drukte, fundering, funderingsplaat, skeletbouw, houtbouw, lichtgewicht, snijlijst, bouwbaarheid, lastoegang, leverancier, voorraad, levertijd, wat breekt het eerst, live, beton, seismisch, vloer, talen, assistent
from: 6e33e052
---

Dit is wat er is veranderd in DetailCraft 0.8 (1 november 2026) en 0.8.1 (2 november 2026), vergeleken met 0.7. In 0.7 werden staalelementen gecontroleerd; in 0.8 worden hijsoperaties gepland, worden verbindingen voorgesteld, worden funderingen en wapening gecontroleerd, en worden houten en lichtgewicht wanden, vloeren en daken geframed.

## Nieuw

### Montage

- **Montageplan en film.** Beschrijf in het tabblad {{ui:Montage}} een kraan (waar die staat, zijn hoogste haak, het hijsgerei dat niet in de tabel staat) en typ de rijen van zijn belastingstabel. DetailCraft tilt het model per assemblage, in fasevolgorde en laag voor laag, en controleert elke hijsoperatie tegen de tabel op zijn radius en tegen de marge die u instelt. {{ui:Film opslaan}} schrijft één HTML-bestand dat offline speelt in elke browser, ook op een telefoon. Hijsoperaties die boven de tabel, er voorbij of te hoog zijn, staan in {{ui:Problemen}}. Het is een plan op basis van uw getallen, geen hijsplan. Zie [Montageplan en film](topic:erection-movie).

### Verbindingen

- **Verbindingsautopilot.** Het tabblad {{ui:Autopilot}} kijkt naar elke verbinding zonder verbinding en stelt er een voor op basis van de vormen: voetplaten, schuiforen, kopplaten voor de liggers die u als momentliggers aanmerkt, lassen en knoopplaten. Geef een gelijkmatige belasting of één dwarskracht aan het uiteinde, en het aantal bouten volgt de ontwerpsterkte van de bout. {{ui:Alles toevoegen}} voegt de voorstellen toe als één stap ongedaan maken. Het zijn startwaarden om na te kijken, geen verbindingsontwerp.
- **Controles op bouwbaarheid.** {{ui:Problemen}} voor een bout die een sleutel niet kan bereiken, bouten te dicht op elkaar voor de dop, hoekverbindingen buiten hun maatgrenzen en holle profielen die water vasthouden. Lastoegang is nieuw: een rondlopende hoeklas die de toorts van een lasser niet kan bereiken, wordt vermeld met het onderdeel dat in de weg zit en het deel van de las dat erdoor wordt getroffen. Zie [Controles op bouwbaarheid](topic:constructability).

### Funderingen en wapening

- **Funderingscontroles.** Het tabblad {{ui:Fundering}} controleert funderingen, gecombineerde funderingen en platen op de grond die u beschrijft: draagkracht, glijden en kantelen onder gebruiksbelastingen; buiging, dwarskracht, ponsing, verankering en minimale wapening onder gefactoreerde belastingen (ACI 318-19). Een kolom bij een rand of hoek wordt gecontroleerd met de doorsnede die wordt afgesneden door de rand van de fundering. Zetting komt uit de stijfheidsmodulus van de grond, een flexibele plaat wordt opgelost op veren uit een ondergrondmodulus, en paalgroepen en keerwanden hebben eigen panelen. Kolombelastingen kunnen worden getypt of uit de {{ui:Analyse}} worden overgenomen. Zie [Funderingscontroles](topic:foundation-checks).
- **Wapeningsdrukkaart.** Het tabblad {{ui:Congestie}} tekent een warmtekaart van elke fundering vanuit bovenaanzicht: waar de staven te weinig ruimte laten voor beton om naar beneden te komen, afgezet tegen de regel voor vrije hart-op-hart-afstand en, als u ze opgeeft, het grootste toeslagmateriaal en de trilnaald. Zie [Wapeningsdrukkaart](topic:rebar-congestion).

### Skeletbouw en levering

- **Houten en lichtgewicht skeletbouw.** Het tabblad {{ui:Skeletbouw}} frame wand-, vloer- en dakpanelen met elk stuk, een snijlijst, de voorraad om te kopen en een werkplaatstekening op schaal. {{ui:Als staven plaatsen}} zet de stukken in het model, en {{ui:PDF-bladen}} slaat één blad per paneel op. De maten, hartafstanden en kopbalken zijn van u: DetailCraft controleert niet of ze de belasting dragen. Zie [Houten en lichtgewicht skeletbouwpanelen](topic:framing-panels).
- **Leverancierssvoorraad en levertijden.** Het tabblad {{ui:Levering}} leest de voorraadlijst van een leverancier (CSV) en toont, voor elke profielsoort die de snijlijst koopt, of er genoeg op voorraad is en hoe lang de wachttijd is. Tekorten en late profielen staan in {{ui:Problemen}}. Er wordt niets besteld. Zie [Leverancierssvoorraad en levertijden](topic:supplier-stock).

### Analyse en ontwerp

- **Wat breekt het eerst?** In het tabblad {{ui:Analyse}} vindt de knop de belastingcombinatie die bepalend is, het zwakste element, hoe ver de belastingen kunnen groeien voordat het eerste element zijn grens bereikt, en de zwakste kopplaat of dwarskrachtplaat waar de afschuifsterkte van de bouten bekend is. Daarvoor zijn eerst de combinaties en een ontwerpnorm nodig. Oplegging, blokafschuiving, lassen en hefboomwerking worden niet gecontroleerd. Uw verbonden assistent kan hetzelfde vragen.
- **Live.** Vink {{ui:Live: na elke bewerking opnieuw oplossen}} aan en het raamwerk wordt na elke bewerking opnieuw berekend.
- **Beton, meer.** Een slanke kolom in een niet-verplaatsbaar raamwerk wordt ontworpen voor zijn vergrote moment (ACI 318-19 6.6.4.5). De seismische periode kan uit de analyse worden genomen met de methode van Rayleigh. Een vloer van platen krijgt het staal dat elke laag nodig heeft uit zijn momenten, en de eenzijdige dwarskracht. Zie [Betonelementen controleren en seismische belastingen maken](topic:concrete-and-seismic).
- **Voor een ingenieur om te controleren.** De resultaten van funderingen, beton en Wat breekt het eerst zijn hulpmiddelen. Windbelastingen zijn nog niet beschikbaar.

### In elke app

- **Talen.** De help is in 54 talen. Die naast Engels zijn machinale concepten totdat een moedertaalspreker ze heeft gelezen; tien zijn nieuw (Litouws, Lets, Bosnisch, Marathi, Telugu, Albanees, Afrikaans, Filipijns, Swahili, Oezbeeks).
- **Werkbalkrijen.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Werkbalkrijen}} kiest omslaan, 2 rijen of 1 rij. Een balk die al past, blijft zoals hij is; de rest scrolt zijwaarts.
- **Eigenschappenraster.** De velden van de fundering gebruiken het gedeelde raster: inklapbare categorieën en een compacte dichtheid. Getypte rekenkunde zoals 2*450 werkt nog steeds.
- **Invoerapparaten.** Trackpad, pen, 3D-muis, controller en MIDI kunnen de apps bedienen. Zie [Navigeren in 3D](topic:navigate-3d).
- **Paneel Problemen.** De waarschuwingen van de nieuwe controles hierboven verschijnen in hetzelfde paneel {{ui:Problemen}} als voorheen.
- **Koppel uw AI.** Uw eigen assistent, verbonden via CadCraft Studio, werkt met alle acht de apps en ziet alleen wat u toestaat. Verbinden met één klik, de gehoste connector en uw eigen API-sleutel in Studio komen nog. Zie [DetailCraft gebruiken met een AI-assistent](topic:use-with-ai-assistants).

## Opgelost in 0.8.1

- **Talen in Studio.** Studio en de verpakte edities kunnen tijdens het draaien van taal wisselen; voorheen was het alleen Engels. Het is nog niet op elk platform getest: laat ons weten als de taal niet verandert.
- **Venster-selectie.** De 0.8.1-installatiebestanden hebben het selecteren met een kruisvenster al correct uit de 0.8-webversie; een oudere installatie deed dat niet.
- **Tablets in staand formaat.** Overgebleven rasterhoogte gaat naar het canvas, en de bladindeling begint bij 760 px of minder.

## Nog niet in deze versie

- **NC naar een machine sturen** is nog niet uitgebracht.
- **Windbelastingen** voor beton zijn nog niet beschikbaar, en de beton- en funderingscontroles zijn voor een ingenieur om na te kijken.
- **Code-ondertekening.** De Windows-installatiebestanden en de macOS .dmg zijn niet ondertekend, dus Windows kan waarschuwen en macOS vraagt om met de rechtermuisknop te klikken, en dan Openen.

Eerdere wijzigingen staan in [Wat is er nieuw in 0.7](topic:whats-new-0-7).
