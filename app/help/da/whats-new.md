---
title: Nyheder i 0.7
summary: DetailCraft får dimensioneringskontrol af stålprofiler efter en norm med lastkombinationer fra normen, USD-eksport af ståldelen, mere til AI-assistenter og en Steel-ribbon med store og små knapper.
keywords: nyheder, hvad er nyt, udgivelsesnoter, ændringslog, ændringer, 0.7, version, nye funktioner, dimensioneringskontrol, ståldimensionering, udnyttelse, lastkombinationer, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, nationalt anneks, nyttelast på tag, nedbøjningsgrænse, usd, usda, usdc, usdz, openusd, assistent, mcp, steel-ribbon, bånd, delt knap, enheder, kompakt, paneler, dialogbokse, portugisisk
from: 17d1e0bb
---

Det her er, hvad der ændrede sig i DetailCraft 0.7 i forhold til 0.6. Rammeanalysen fra 0.6 har nu et andet trin: at kontrollere stålprofilerne mod en dimensioneringsnorm.

## Nyt

### Geringssamlinger (0.7.1)

- **To I-profiler, der mødes i en vinkel**, som et rammehjørne eller en kip: markér begge, vælg {{ui:Gering}} i menuen {{ui:Mere}} i gruppen {{ui:Forbind}}, og begge ender skæres i det plan, der halverer vinklen. Endeplader boltet sammen og stivere i krop er afkrydsningsfelter i den nye dialogboks Gering, hvis nummererede felter svarer til en tegning af din samling, der laves, mens du skriver. Geringen følger stålprofilerne, når de flyttes, og fortsætter ind i tegninger, NC-filer (skrå skær), IFC og styklisten. Se [Geringssamlinger](topic:mitres).

### Dimensioneringskontrol

- **Lastkombinationer fra normen.** I fanen {{ui:Analyse}} har den nye blok {{ui:Dimensioneringskontrol}} en {{ui:Dimensioneringsnorm}}: ASCE 7 + AISC 360 (USA, LRFD) eller EN 1990 + EN 1993-1-1 (Eurocode). Giv hvert lasttilfælde dets slags (egenlast, nyttelast, den nye nyttelast på tag, sne, vind, jordskælv), tryk på {{ui:Lav kombinationer}}, og DetailCraft skriver normens styrke- og anvendelseskombinationer af dine tilfælde. De kombinationer, du selv skrev, bliver. Se [Lav kombinationerne](topic:design-checks#make-the-combinations).
- **Værdier fra det nationale anneks.** For Eurocode starter faktorerne ved de anbefalede værdier; {{ui:Værdier fra det nationale anneks}} lader dig skrive dit lands, og de gemmes i modellen. Se [Lav kombinationerne](topic:design-checks#make-the-combinations).
- **Kontrollér stålprofiler.** {{ui:Kontrollér stålprofiler}} kontrollerer hver stål-I-profil for træk, tryk med knæk, bøjning med kipning, forskydning, bøjning med normalkraft og nedbøjning mod den {{ui:Nedbøjningsgrænse}}, du angiver. Tabellen viser hver stålprofils udnyttelse, den kontrol der er afgørende og dens kombination, og stålprofilerne farves på modellen (blå, grøn, okker, rød, grå for ikke kontrolleret). Se [Kontrollér stålprofilerne](topic:design-checks#check-the-members).
- **I rapporten.** {{ui:Rapport (PDF)}} og {{ui:Rapport (CSV)}} tilføjer normudgaverne, indstillingerne, udnyttelse pr. stålprofil og hver brugt paragraf. Se [Rapporten](topic:design-checks#the-report).
- **En hjælp, til en ingeniør har gennemgået den.** Den bruger kun førsteordenskræfter. Rør, vinkelstål, U-profiler, svejsede profiler og slanke dele eller dele i klasse 4 siger "not checked" med årsagen; vridning, forbindelser og beton kontrolleres ikke. Se [Hvad der ikke kontrolleres](topic:design-checks#what-is-not-checked).

### USD

- **Eksportér stålmodellen som USD.** {{ui:USD}} i gruppen {{ui:Uddata}} skriver modellen som {{ui:Tekst (.usda)}}, {{ui:Binær (.usdc)}} eller {{ui:Pakke (.usdz)}} til renderingsprogrammer og sammensætning af scener: hver samling rummer sine dele, hver del er sit tværsnit ført langs sin længde med udskæringer skåret, og hver bærer sit positionsnummer, sin profil, kvalitet, længde og vægt. Bolthuller, bolte, svejsninger og fundamenter er ikke med i USD-nettene. Se [Eksportér stålmodellen som USD](topic:usd).

### AI-assistenter

- **USD til assistenter.** Din egen assistent, forbundet gennem CadCraft Studio, kan eksportere modellen som USD (`usd_export`) og i Studio skrive den til en mappe, du har tilladt. Se [Hvad en assistent kan bede om](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Ændret

- **Steel-ribbonen** har store og små knapper: en stor {{ui:Bjælke}} ved siden af små {{ui:Søjle}}, {{ui:Afstivning}} og {{ui:Plade}} under {{ui:Modellering}} › {{ui:Stålprofiler}}; en stor {{ui:Endeplader}} under {{ui:Detaljering}} › {{ui:Forbindelser}}, med {{ui:Stød}} og {{ui:Samleplade}} i én delt knap; en stor {{ui:Sæt ind}} under {{ui:Rediger}} › {{ui:Udklipsholder}}, med {{ui:Sæt ind på samme sted}} og {{ui:Duplikér}} bag gruppens pil. {{ui:Fremstilling}} › {{ui:Udveksling}} har {{ui:Eksportér USD}} ved siden af IFC. De andre menustile ser ud som før. Se [Menuer, taster og mus](topic:menus-keys-and-mouse#the-three-styles).
- [Analysér rammen](topic:frame-analysis) peger nu på dimensioneringskontrollen, og dens kombinationer kan laves efter normen.

## I alle apps

- **Enheder.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Enheder}} har én liste hver for længde, areal, rumfang, vinkel og hældning, med de præcise størrelser, enhedernes definitioner giver (den amerikanske opmålingsfod er sin egen enhed). Slå de enheder fra, du aldrig bruger, og de forlader enhedslisterne; sæt en stjerne ved én, og nyt arbejde starter i den. En fil beholder altid sin egen enhed. DetailCrafts egne felter følger ikke listerne endnu: dens længder skrives stadig i millimeter. Se [Enheder, indtastede værdier og enhedslister](common:unit-lists).
- **Et tættere layout og paneler, der ryddes af vejen.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Layouttæthed}} › {{ui:Kompakt}} får mere på skærmen (touchskærme og telefoner beholder deres store knapper). Hvert sidepanel har en slank titellinje: træk i den for at fastgøre eller frigøre panelet, slip den på et andet paneles linje for at dele ramme som faner, fastgør den, så den glider ud til kanten, eller skjul den og få den tilbage fra kanten. Se [Ordn panelerne](common:arrange-panels#make-the-layout-denser).
- **Dialogbokse flyttes.** Træk en dialogboks i titellinjen væk fra tegningen; den kommer tilbage, hvor du lod den. Dobbeltklik på titellinjen for at centrere den igen. Se [Flyt en dialogboks](common:arrange-panels#move-a-dialog).
- **Opskrifter til AI-assistenter.** Ti gennemarbejdede forespørgsler til din egen assistent (ryd op i en tegning, plot et sæt, kontrollér tegninger, stil en model spørgsmål, summér et mængdeudtræk, prøv en delvariant …), hver med de værktøjer, den kalder, og de tilladelser, den har brug for, og hver afspillet igen af vores tests. Apps'ene indeholder ingen AI. Se [Opskrifter til AI-assistenter](common:assistants-recipes).
- **Sprog.** **Português (Portugal)** er nyt i {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Sprog}}. Det, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nu hvert ord i apps'ene, som kladder, der endnu ikke er gennemlæst af en modersmålstalende. Hjælpeemner er på engelsk.
- **CadCraft Studio** siger, hvorfor en opdateringskontrol mislykkedes (ingen fil til dit system endnu, intet netværk, en dårlig signatur) i stedet for blot "Færdig", og holder op med at bringe et Nyheder-kort tilbage, du lukkede, indtil der er en nyere udgivelse.

## Ikke i denne version endnu

- **0.7 er ikke kodesigneret.** Signering og Microsoft Store-pakken er flyttet til 0.8, fordi certifikatvalideringen ikke er kommet igennem endnu. Kontrollér SHA-256 ved siden af hver fil på getcadcraft.com/download. På Windows, hvis SmartScreen stopper installationsprogrammet, vælger du {{ui:Flere oplysninger}} og derefter {{ui:Kør alligevel}}. På en Mac højreklikker du første gang på CadCraft Studio og vælger {{ui:Åbn}}. CadCraft Studio er ikke i en app store endnu, og der er ingen iPad- eller iPhone-build endnu.
- Vinkel- og hældningslisterne i {{ui:Enheder}} gemmes, men intet felt læser dem endnu.
- **Dimensioneringskontrollerne er endnu ikke gennemgået af en ingeniør.** Vores tests sammenligner dem med trykte tabelværdier og formler regnet i hånden, endnu ikke med en dimensioneringsvejlednings gennemregnede eksempler. Indtil en gennemgang er de en hjælp: kontrollér stålprofiler, der har betydning, i hånden.
- Dimensioneringskontrollerne bruger førsteordenskræfter (ingen andenordenseffekter) og kontrollerer kun I-profiler. Ikke bygget: rør, vinkelstål, U-profiler, svejsede profiler, slanke (AISC) eller klasse 4-dele (Eurocode) i bøjning, vridning, forskydningsbuling sammen med bøjning, forbindelser, udmattelse, brand, jordskælvsdetaljering og beton. En slank del i tryk udelader trykkontrollerne, og stålprofilen siger "passes, partly checked".
- Rammeanalysen er stadig førsteordens og lineær, og den er endnu ikke prøvet af en ingeniør på et rigtigt job.
- Bolthuller, bolte, svejsninger og fundamenter er ikke med i USD-eksporten.

Alt andet står i [Hvad der ikke er bygget endnu](topic:not-built-yet).
