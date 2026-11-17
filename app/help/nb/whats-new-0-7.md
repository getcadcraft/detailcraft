---
title: Hva er nytt i 0.7 (tidligere)
summary: Dimensjoneringskontroller av I-profiler med lastkombinasjoner fra ASCE 7 eller EN 1990 og stavkontroller mot AISC 360 eller EN 1993-1-1, USD-eksport av stålmodellen, et assistentverktøy for USD, et stålbånd med store og små knapper, paneler som ryddes bort og dialogbokser som kan flyttes.
keywords: hva er nytt 0.7, tidligere utgave, utgivelsesnotater, endringslogg, endringer, 0.7, versjon, nye funksjoner, dimensjoneringskontroller, stålkonstruksjon, utnyttelse, lastkombinasjoner, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurokode, nasjonalt tillegg, takets nyttelast, nedbøyningsgrense, usd, usda, usdc, usdz, openusd, assistent, mcp, stålbånd, bånd, delt knapp, enheter, kompakt, paneler, dialogbokser, portugisisk
from: 54a7a8f0
---

Dette er endringene i DetailCraft 0.7, sammenlignet med 0.6. Rammeanalysen i 0.6 har nå et andre trinn: kontroll av stålstavene mot en dimensjoneringsstandard.

## Nytt

### Gjæringsforbindelser (0.7.1)

- **To I-profiler som møtes i en vinkel**, for eksempel et portalknekk eller en møne: velg begge, velg {{ui:Gjæring}} i menyen {{ui:Mer}} i gruppen {{ui:Forbind}}, og begge ender kuttes i planet som halverer vinkelen. Endeplater som er boltet sammen, og steganstivere er avkrysningsbokser i den nye dialogboksen Gjæring, der de nummererte feltene samsvarer med en tegning av forbindelsen som lages mens du skriver. Gjæringen følger stavene når de flyttes, og gjelder i tegninger, NC-filer (skråkutt), IFC og stykklisten. Se [Gjæringsforbindelser](topic:mitres).

### Dimensjoneringskontroller

- **Lastkombinasjoner fra normen.** I fanen {{ui:Analyse}} har den nye blokken {{ui:Dimensjoneringskontroller}} en {{ui:Dimensjoneringsstandard}}: ASCE 7 + AISC 360 (USA, LRFD) eller EN 1990 + EN 1993-1-1 (Eurokode). Angi type for hver lastsak (egenlast, nyttelast, den nye takets nyttelast, snø, vind, jordskjelv), velg {{ui:Lag kombinasjoner}}, og DetailCraft skriver normens brudd- og bruksgrensekombinasjoner av lastsakene dine. Kombinasjonene du selv har skrevet, blir stående. Se [Lag kombinasjonene](topic:design-checks#make-the-combinations).
- **Verdier fra nasjonalt tillegg.** For Eurokoden starter faktorene på de anbefalte verdiene. {{ui:Verdier fra nasjonalt tillegg}} lar deg skrive inn verdiene for ditt land, og de lagres i modellen. Se [Lag kombinasjonene](topic:design-checks#make-the-combinations).
- **Kontroller staver.** {{ui:Kontroller staver}} kontrollerer hver I-profil for strekk, trykk med knekking, bøying med sideveis vipping, skjær, bøying med aksialkraft og nedbøyning mot {{ui:Nedbøyningsgrense}} du har satt. Tabellen viser utnyttelsen for hver stav, kontrollen som styrer og kombinasjonen den hører til. Stavene farges i modellen (blå, grønn, okker, rød, grå for ikke kontrollert). Se [Kontroller stavene](topic:design-checks#check-the-members).
- **I rapporten.** {{ui:Rapport (PDF)}} og {{ui:Rapport (CSV)}} legger til normutgavene, innstillingene, utnyttelse per stav og alle punktene som er brukt. Se [Rapporten](topic:design-checks#the-report).
- **Et hjelpemiddel til en ingeniør har gjennomgått det.** Det bruker bare førsteordens krefter. Rør, vinkelprofiler, U-profiler, sveisede profiler og slanke deler eller deler i klasse 4 får «ikke kontrollert», med begrunnelsen. Vridning, forbindelser og betong er ikke kontrollert. Se [Hva som ikke er kontrollert](topic:design-checks#what-is-not-checked).

### USD

- **Eksporter stålmodellen som USD.** {{ui:USD}} i gruppen {{ui:Utdata}} skriver modellen som {{ui:Tekst (.usda)}}, {{ui:Binær (.usdc)}} eller {{ui:Pakke (.usdz)}} for gjengivelsesprogrammer og sammenstilling av scener. Hver sammenstilling har sine deler, hver del er profilen sin langs hele lengden med utklinkinger kuttet, og hver bærer delenummer, profil, stålkvalitet, lengde og vekt. Boltehull, bolter, sveiser og fundamenter finnes ikke i USD-nettene. Se [Eksporter stålmodellen som USD](topic:usd).

### KI-assistenter

- **USD for assistenter.** Din egen assistent, koblet til gjennom CadCraft Studio, kan eksportere modellen som USD (`usd_export`), og i Studio skrive den til en mappe du har tillatt. Se [Hva en assistent kan be om](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Endret

- **Stålbåndet** har store og små knapper: en stor {{ui:Bjelke}} ved siden av små {{ui:Søyle}}, {{ui:Avstivning}} og {{ui:Plate}} på {{ui:Modellering}} › {{ui:Staver}}; en stor {{ui:Endeplater}} på {{ui:Detaljering}} › {{ui:Forbindelser}}, der {{ui:Skjøt}} og {{ui:Knutepunktsplate}} deler én delt knapp; en stor {{ui:Lim inn}} på {{ui:Rediger}} › {{ui:Utklippstavle}}, med {{ui:Lim inn på samme sted}} og {{ui:Dupliser}} bak gruppens pil. {{ui:Produksjon}} › {{ui:Utveksling}} har {{ui:Eksporter USD}} ved siden av IFC. De andre menystilene ser ut som før. Se [Menyer, taster og mus](topic:menus-keys-and-mouse#the-three-styles).
- [Analyser rammen](topic:frame-analysis) viser nå til dimensjoneringskontrollene, og kombinasjonene kan lages etter normen.

## I alle apper

- **Enheter.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Enheter}} har én liste hver for lengde, areal, volum, vinkel og helning, med de nøyaktige størrelsene enhetsdefinisjonene gir (US survey foot er en egen enhet). Slå av enhetene du aldri bruker, så forsvinner de fra enhetslistene. Merk en med stjerne, så starter nytt arbeid i den. En fil beholder alltid sin egen enhet. DetailCraft sine egne bokser følger ikke listene ennå: lengdene der skrives fortsatt i millimeter. Se [Enheter, skrevne verdier og enhetslistene](common:unit-lists).
- **Tettere oppsett og paneler som ryddes bort.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Layouttetthet}} › {{ui:Kompakt}} får plass til mer på skjermen (berøringsskjermer og telefoner beholder de store knappene). Hvert sidepanel har en smal tittellinje: dra den for å feste eller frigjøre panelet, slipp det på et annet panels linje for å dele én ramme som faner, fest det slik at det glir bort til kanten, eller skjul det og hent det frem igjen fra kanten. Se [Ordne panelene](common:arrange-panels#make-the-layout-denser).
- **Dialogbokser kan flyttes.** Dra en dialogboks etter tittellinjen ut av veien for tegningen; den kommer tilbake dit du slapp den. Dobbeltklikk på tittellinjen for å sentrere den igjen. Se [Flytt en dialogboks](common:arrange-panels#move-a-dialog).
- **Oppskrifter for KI-assistenter.** Ti utprøvde forespørsler til din egen assistent (rydde opp i en tegning, plotte et sett, kontrollere tegninger, stille spørsmål om en modell, summere et mengdeuttak, prøve en delvariant …), hver med verktøyene den kaller og tillatelsene den trenger, og hver kjørt på nytt av testene våre. Appene inneholder ingen KI. Se [Oppskrifter for KI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** er nytt i {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Språk}}. Det, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nå alle ordene i appene, som utkast som ennå ikke er gjennomgått av en morsmålstalende. Hjelpeemnene er på engelsk.
- **CadCraft Studio** sier hvorfor en oppdateringssjekk mislyktes (ingen fil for systemet ditt ennå, ingen nettforbindelse, feil signatur) i stedet for bare «Ferdig». Den slutter også å hente frem igjen et kort «Hva er nytt» du har lukket, før det finnes en nyere utgivelse.

## Ikke i denne versjonen ennå

- **0.7 er ikke kodesignert.** Signering og Microsoft Store-pakken ble flyttet til 0.8, fordi sertifikatvalideringen ennå ikke er klar. Kontroller SHA-256-verdien ved siden av hver fil på getcadcraft.com/download. På Windows, hvis SmartScreen stopper installasjonsprogrammet, velg {{ui:Mer informasjon}}, og så {{ui:Kjør likevel}}. På en Mac velger du første gang: høyreklikk på CadCraft Studio og velg {{ui:Åpne}}. CadCraft Studio finnes ikke i en appbutikk ennå, og det finnes ingen iPad- eller iPhone-versjon ennå.
- Vinkel- og helningslistene i {{ui:Enheter}} lagres, men ingen boks leser dem ennå.
- **Dimensjoneringskontrollene er ikke gjennomgått av en ingeniør ennå.** Testene våre sammenligner dem med trykte tabellverdier og formler regnet for hånd, ikke ennå med eksemplene i en veiledning for dimensjonering. Inntil en gjennomgang er de et hjelpemiddel: kontroller de viktige stavene for hånd.
- Dimensjoneringskontrollene bruker førsteordens krefter (ingen andreordenseffekter) og kontrollerer bare I-profiler. Ikke bygget ennå: rør, vinkelprofiler, U-profiler, sveisede profiler, slanke (AISC) eller klasse 4-deler (Eurokode) i bøying, vridning, skjærknekking sammen med bøying, forbindelser, utmatting, brann, seismisk detaljering og betong. En slank del i trykk tar ut trykkontrollene, og staven står som «består, delvis kontrollert».
- Rammeanalysen er fortsatt førsteordens og lineær, og den er ikke prøvd ut av en ingeniør i et ekte prosjekt ennå.
- Boltehull, bolter, sveiser og fundamenter er ikke med i USD-eksporten.

Alt annet står i [Hva som ikke er bygget ennå](topic:not-built-yet).
