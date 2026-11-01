---
title: Nytt i 0.7
summary: Dimensjoneringskontroller av I-profiler i stål med lastkombinasjoner fra ASCE 7 eller EN 1990 og stavkontroller etter AISC 360 eller EN 1993-1-1, USD-eksport av stålmodellen, et assistentverktøy for USD, et Stål-bånd med store og små knapper, paneler som ryddes bort og dialoger som kan flyttes.
keywords: nytt, hva er nytt, utgivelsesnotater, endringslogg, endringer, 0.7, versjon, nye funksjoner, dimensjoneringskontroller, stålprosjektering, utnyttelse, lastkombinasjoner, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurokode, nasjonalt tillegg, nyttelast på tak, nedbøyningsgrense, usd, usda, usdc, usdz, openusd, assistent, mcp, stålbånd, bånd, delt knapp, enheter, kompakt, paneler, dialoger, portugisisk
from: 17d1e0bb
---

Dette er det som er endret i DetailCraft 0.7 sammenlignet med 0.6. Rammeanalysen i 0.6 har nå et andre trinn: å kontrollere stålstavene mot en dimensjoneringsstandard.

## Nytt

### Gjæringsforbindelser (0.7.1)

- **To I-profiler som møtes i en vinkel**, for eksempel et rammehjørne eller en møne: velg begge, velg {{ui:Gjæring}} i menyen {{ui:Mer}} i gruppen {{ui:Forbind}}, og begge ender kuttes i planet som halverer vinkelen. Endeplater boltet sammen og stegavstivere er avmerkingsbokser i den nye dialogen Gjæring, der de nummererte feltene samsvarer med en tegning av forbindelsen din som lages mens du skriver. Gjæringen følger stavene når de flyttes, og går videre til tegninger, NC-filer (skråkutt), IFC og stykklisten. Se [Gjæringsforbindelser](topic:mitres).

### Dimensjoneringskontroller

- **Lastkombinasjoner fra standarden.** I fanen {{ui:Analyse}} har den nye blokken {{ui:Dimensjoneringskontroller}} en {{ui:Dimensjoneringsstandard}}: ASCE 7 + AISC 360 (USA, LRFD) eller EN 1990 + EN 1993-1-1 (Eurokode). Gi hvert lasttilfelle sin type (permanent, nyttelast, den nye nyttelasten på tak, snø, vind, seismisk), trykk {{ui:Lag kombinasjoner}}, og DetailCraft skriver standardens bruddgrense- og bruksgrensekombinasjoner av tilfellene dine. Kombinasjonene du skrev selv, blir stående. Se [Lag kombinasjonene](topic:design-checks#make-the-combinations).
- **Verdier fra nasjonalt tillegg.** For Eurokoden starter faktorene på de anbefalte verdiene; {{ui:Verdier fra nasjonalt tillegg}} lar deg skrive landets egne, og de lagres i modellen. Se [Lag kombinasjonene](topic:design-checks#make-the-combinations).
- **Kontroller staver.** {{ui:Kontroller staver}} kontrollerer hvert I-profil i stål for strekk, trykk med knekking, bøying med kippning, skjær, bøying med aksialkraft og nedbøyning mot {{ui:Nedbøyningsgrense (L / …)}} du setter. Tabellen viser hver stavs utnyttelse, kontrollen som er styrende og kombinasjonen, og stavene farges på modellen (blå, grønn, oker, rød, grå for ikke kontrollert). Se [Kontroller stavene](topic:design-checks#check-the-members).
- **I rapporten.** {{ui:Rapport (PDF)}} og {{ui:Rapport (CSV)}} legger til standardutgavene, innstillingene, utnyttelse per stav og hver paragraf som er brukt. Se [Rapporten](topic:design-checks#the-report).
- **Et hjelpemiddel til en ingeniør har gjennomgått det.** Det bruker bare førsteordens krefter. Rør, vinkelstål, U-profiler, sveisede profiler og slanke deler eller deler i klasse 4 viser «ikke kontrollert», med årsaken; torsjon, forbindelser og betong kontrolleres ikke. Se [Hva som ikke kontrolleres](topic:design-checks#what-is-not-checked).

### USD

- **Eksporter stålmodellen som USD.** {{ui:USD}} i gruppen {{ui:Utdata}} skriver modellen som {{ui:Tekst (.usda)}}, {{ui:Binær (.usdc)}} eller {{ui:Pakke (.usdz)}} for renderprogrammer og scenesammenstilling: hver sammenstilling holder delene sine, hver del er tverrsnittet sitt ført langs lengden med utklinkninger kuttet, og hver bærer delenummer, profil, kvalitet, lengde og vekt. Bolthull, bolter, sveiser og fundamenter er ikke i USD-nettene. Se [Eksporter stålmodellen som USD](topic:usd).

### AI-assistenter

- **USD for assistenter.** Din egen assistent, koblet til gjennom CadCraft Studio, kan eksportere modellen som USD (`usd_export`), og i Studio skrive den til en mappe du har tillatt. Se [Hva en assistent kan be om](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Endret

- **Stål-båndet** har store og små knapper: en stor {{ui:Bjelke}} ved siden av små {{ui:Søyle}}, {{ui:Avstivning}} og {{ui:Plate}} i {{ui:Modellering}} › {{ui:Staver}}; en stor {{ui:Endeplater}} i {{ui:Detaljering}} › {{ui:Forbindelser}}, med {{ui:Skjøt}} og {{ui:Knutepunktsplate}} på én delt knapp; en stor {{ui:Lim inn}} i {{ui:Rediger}} › {{ui:Utklippstavle}}, med {{ui:Lim inn på samme sted}} og {{ui:Dupliser}} bak gruppens pil. {{ui:Produksjon}} › {{ui:Utveksling}} har {{ui:Eksporter USD}} ved siden av IFC. De andre menystilene ser ut som før. Se [Menyer, taster og mus](topic:menus-keys-and-mouse#the-three-styles).
- [Analyser rammen](topic:frame-analysis) peker nå til dimensjoneringskontrollene, og kombinasjonene kan lages etter standarden.

## I alle apper

- **Enheter.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Enheter}} har én liste hver for lengde, areal, volum, vinkel og helling, med de eksakte størrelsene enhetenes definisjoner gir (den amerikanske målefoten er sin egen enhet). Slå av enhetene du aldri bruker, så forlater de enhetslistene; sett stjerne på én, så starter nytt arbeid i den. En fil beholder alltid sin egen enhet. DetailCrafts egne bokser følger ikke listene ennå: lengdene skrives fortsatt i millimeter. Se [Enheter, innskrevne verdier og enhetslistene](common:unit-lists).
- **Et tettere oppsett og paneler som ryddes bort.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Layouttetthet}} › {{ui:Kompakt}} får plass til mer på skjermen (berøringsskjermer og telefoner beholder de store knappene). Hvert sidepanel har en smal tittellinje: dra den for å feste eller frigjøre panelet, slipp den på et annet panels linje for å dele én ramme som faner, fest det for å gli bort til kanten, eller skjul det og hent det tilbake fra kanten. Se [Ordne panelene](common:arrange-panels#make-the-layout-denser).
- **Dialoger flyttes.** Dra en dialog etter tittellinjen ut av veien for tegningen; den kommer tilbake der du lot den stå. Dobbeltklikk tittellinjen for å sentrere den igjen. Se [Flytt en dialog](common:arrange-panels#move-a-dialog).
- **Oppskrifter for AI-assistenter.** Ti gjennomarbeidede forespørsler til din egen assistent (rydd en tegning, plott et sett, kontroller tegninger, still en modell spørsmål, summer et mengdeuttak, prøv en delvariant …), hver med verktøyene den kaller og tillatelsene den trenger, og hver avspilt av testene våre. Appene inneholder ingen AI. Se [Oppskrifter for AI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** er nytt i {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Språk}}. Det, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nå hvert ord i appene, som utkast som ennå ikke er gjennomgått av en morsmålsbruker. Hjelpeemnene er på engelsk.
- **CadCraft Studio** sier hvorfor en oppdateringskontroll feilet (ingen fil for systemet ditt ennå, ingen nettverk, en ugyldig signatur) i stedet for bare «Ferdig», og slutter å hente tilbake et Nytt-kort du lukket før det finnes en nyere utgivelse.

## Ikke i denne versjonen ennå

- **0.7 er ikke kodesignert.** Signering, og Microsoft Store-pakken, ble flyttet til 0.8 fordi sertifikatvalideringen ikke har kommet gjennom ennå. Kontroller SHA-256 ved siden av hver fil på getcadcraft.com/download. På Windows, hvis SmartScreen stopper installasjonsprogrammet, velg {{ui:Mer informasjon}}, deretter {{ui:Kjør likevel}}. På en Mac høyreklikker du CadCraft Studio første gang og velger {{ui:Åpne}}. CadCraft Studio er ikke i en appbutikk ennå, og det finnes ingen iPad- eller iPhone-versjon ennå.
- Vinkel- og hellingslistene i {{ui:Enheter}} lagres, men ingen boks leser dem ennå.
- **Dimensjoneringskontrollene er ikke gjennomgått av en ingeniør ennå.** Testene våre sammenligner dem med trykte tabellverdier og formler regnet for hånd, ennå ikke med en dimensjoneringsveiledningens regneeksempler. Inntil en gjennomgang er de et hjelpemiddel: kontroller staver som betyr noe, for hånd.
- Dimensjoneringskontrollene bruker førsteordens krefter (ingen andreordens effekter) og kontrollerer bare I-profiler. Ikke bygget: rør, vinkelstål, U-profiler, sveisede profiler, slanke (AISC) deler eller deler i klasse 4 (Eurokode) i bøying, torsjon, skjærbuling sammen med bøying, forbindelser, utmatting, brann, seismisk detaljering og betong. En slank del i trykk utelater trykkontrollene, og staven viser «oppfyller, delvis kontrollert».
- Rammeanalysen er fortsatt førsteordens og lineær, og er ikke prøvd av en ingeniør på en virkelig jobb ennå.
- Bolthull, bolter, sveiser og fundamenter er ikke i USD-eksporten.

Alt annet står i [Hva som ikke er bygget ennå](topic:not-built-yet).
