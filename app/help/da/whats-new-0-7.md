---
title: Nyheder i 0.7 (tidligere)
summary: Dimensioneringskontrol af stålprofiler i I-profil med lastkombinationer fra ASCE 7 eller EN 1990 og stangkontrol efter AISC 360 eller EN 1993-1-1, USD-eksport af stålmodellen, et assistentværktøj til USD, et Stålbånd med store og små knapper, paneler der kan skjules væk, og dialogbokse der kan flyttes.
keywords: nyheder 0.7, tidligere udgivelse, udgivelsesnoter, changelog, ændringer, 0.7, version, nye funktioner, dimensioneringskontrol, stålkonstruktion, udnyttelsesgrad, udnyttelse, lastkombinationer, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, nationalt anneks, tagnyttelast, nedbøjningsgrænse, usd, usda, usdc, usdz, openusd, assistent, mcp, stålbånd, båndet, delt knap, enheder, kompakt, paneler, dialogbokse, portugisisk
from: 54a7a8f0
---

Dette er ændringerne i DetailCraft 0.7 sammenlignet med 0.6. Rammeanalysen i 0.6 har nu et andet trin: kontrol af stålprofilerne efter en dimensioneringsnorm.

## Nyt

### Geringssamlinger (0.7.1)

- **To I-profiler, der mødes i en vinkel**, fx et portalknæ eller en rygning: vælg begge, vælg {{ui:Geringssamling}} i menuen {{ui:Mere}} i gruppen {{ui:Forbind}}, og begge ender skæres i det plan, der halverer vinklen. Endeplader, der er boltet sammen, og stivere i livet er afkrydsningsfelter i den nye dialogboks Geringssamling, hvis nummererede felter svarer til en tegning af din samling, som laves, mens du skriver. Geringen følger stålprofilerne, når de flyttes, og overføres til tegninger, NC-filer (skæve snit), IFC og stykliste. Se [Geringssamlinger](topic:mitres).

### Dimensioneringskontrol

- **Lastkombinationer fra normen.** I fanen {{ui:Analyse}} har den nye blok {{ui:Dimensioneringskontrol}} en {{ui:Dimensioneringsnorm}}: ASCE 7 + AISC 360 (US, LRFD) eller EN 1990 + EN 1993-1-1 (Eurocode). Angiv hvert lasttilfælde sin type (egenlast, nyttelast, den nye tagnyttelast, sne, vind, jordskælv), tryk på {{ui:Lav kombinationer}}, og DetailCraft skriver normens styrke- og anvendelsesgrænsekombinationer for dine tilfælde. De kombinationer, du selv har skrevet, bliver. Se [Lav kombinationerne](topic:design-checks#make-the-combinations).
- **Værdier fra det nationale anneks.** For Eurocode starter faktorerne ved de anbefalede værdier; {{ui:Værdier fra det nationale anneks}} lader dig angive dit lands værdier, og de gemmes i modellen. Se [Lav kombinationerne](topic:design-checks#make-the-combinations).
- **Kontrollér stålprofiler.** {{ui:Kontrollér stålprofiler}} kontrollerer hver stål-I-profil for træk, tryk med knæk, bøjning med sidelæns vipning, forskydning, bøjning med normalkraft og nedbøjning mod den {{ui:Nedbøjningsgrænse}}, du har angivet. Tabellen viser hver stålprofils udnyttelse, den kontrol der er bestemmende, og dens kombination, og stålprofilerne farves i modellen (blå, grøn, okker, rød, grå for ikke kontrolleret). Se [Kontrollér stålprofilerne](topic:design-checks#check-the-members).
- **I rapporten.** {{ui:Rapport (PDF)}} og {{ui:Rapport (CSV)}} tilføjer normudgaverne, indstillingerne, udnyttelse pr. stålprofil og hver anvendt paragraf. Se [Rapporten](topic:design-checks#the-report).
- **Et hjælpemiddel, indtil en ingeniør har gennemgået det.** Det bruger kun førsteordens-kræfter. Rørprofiler, vinkelprofiler, U-profiler, svejste profiler og slanke dele eller dele i klasse 4 står som »ikke kontrolleret« med årsagen; vridning, forbindelser og beton kontrolleres ikke. Se [Hvad der ikke kontrolleres](topic:design-checks#what-is-not-checked).

### USD

- **Eksportér stålmodellen som USD.** {{ui:USD}} i gruppen {{ui:Uddata}} skriver modellen som {{ui:Tekst (.usda)}}, {{ui:Binær (.usdc)}} eller {{ui:Pakke (.usdz)}} til renderingsprogrammer og scenesamling: hver samling indeholder sine dele, hver del er sit tværsnit ført ud langs sin længde med udskæringer, og hver bærer sit positionsnummer, profil, stålkvalitet, længde og vægt. Boltehuller, bolte, svejsninger og fundamenter er ikke med i USD-meshene. Se [Eksportér stålmodellen som USD](topic:usd).

### AI-assistenter

- **USD til assistenter.** Din egen assistent, forbundet via CadCraft Studio, kan eksportere modellen som USD (`usd_export`), og i Studio skrive den til en mappe, du har givet adgang til. Se [Hvad en assistent kan bede om](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Ændret

- **Stålbåndet** har store og små knapper: en stor {{ui:Bjælke}} ved siden af små {{ui:Søjle}}, {{ui:Afstivning}} og {{ui:Plade}} under {{ui:Modellering}} › {{ui:Stålprofiler}}; en stor {{ui:Endeplader}} under {{ui:Detaljering}} › {{ui:Forbindelser}}, med {{ui:Stød}} og {{ui:Samleplade}} om én delt knap; en stor {{ui:Sæt ind}} under {{ui:Rediger}} › {{ui:Udklipsholder}}, med {{ui:Sæt ind på samme sted}} og {{ui:Duplikér}} bag gruppens pil. {{ui:Fremstilling}} › {{ui:Udveksling}} har {{ui:Eksportér USD}} ved siden af IFC. De øvrige menustile ser ud, som de gjorde. Se [Menuer, taster og mus](topic:menus-keys-and-mouse#the-three-styles).
- [Analysér rammen](topic:frame-analysis) peger nu på dimensioneringskontrollen, og dens kombinationer kan laves ud fra normen.

## I alle apps

- **Enheder.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Enheder}} har én liste hver for længde, areal, volumen, vinkel og hældning, med de præcise størrelser, enhedernes definitioner giver (den amerikanske landmålerfod er sin egen enhed). Slå de enheder fra, du aldrig bruger, så forlader de enhedslisterne; markér en med stjerne, og nyt arbejde starter i den. En fil beholder altid sin egen enhed. DetailCrafts egne felter følger ikke listerne endnu: dets længder skrives stadig i millimeter. Se [Enheder, indtastede værdier og enhedslisterne](common:unit-lists).
- **Tættere layout og paneler, der kan skjules.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Layouttæthed}} › {{ui:Kompakt}} får plads til mere på skærmen (touchskærme og telefoner beholder deres store knapper). Hvert sidepanel har en smal titellinje: træk den for at fastgøre eller frigøre panelet, slip den på en anden panels linje for at dele én ramme som faner, fastgør den for at lade den glide væk til kanten, eller skjul den og hent den tilbage fra kanten. Se [Arrangér panelerne](common:arrange-panels#make-the-layout-denser).
- **Dialogbokse kan flyttes.** Træk en dialogboks i titellinjen væk fra tegningen; den vender tilbage til, hvor du slap den. Dobbeltklik på titellinjen for at centrere den igen. Se [Flyt en dialogboks](common:arrange-panels#move-a-dialog).
- **Opskrifter til AI-assistenter.** Ti gennemprøvede forespørgsler til din egen assistent (ryd op i en tegning, plot et sæt, kontrollér tegninger, stil spørgsmål til en model, summér et mængdeudtræk, prøv en delvariant …), hver med de værktøjer den kalder og de tilladelser, den har brug for, og hver afspillet af vores tests. Appsene indeholder ingen AI. Se [Opskrifter til AI-assistenter](common:assistants-recipes).
- **Sprog.** **Português (Portugal)** er nyt i {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Sprog}}. **Português (Portugal)**, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nu alle appenes ord som udkast, der endnu ikke er gennemgået af en modersmålstaler. Hjælpeemnerne er på engelsk.
- **CadCraft Studio** oplyser, hvorfor en opdateringskontrol fejlede (ingen fil til dit system endnu, intet netværk, en ugyldig signatur), i stedet for blot »Færdig«, og holder op med at vise et Nyheder-kort, du har lukket, indtil der kommer en nyere udgivelse.

## Ikke i denne version endnu

- **0.7 er ikke kodesigneret.** Signering og Microsoft Store-pakken blev flyttet til 0.8, fordi certifikatvalideringen endnu ikke er kommet igennem. Kontrollér SHA-256-værdien ved siden af hver fil på getcadcraft.com/download. På Windows, hvis SmartScreen stopper installationsprogrammet, vælg {{ui:Flere oplysninger}} og derefter {{ui:Kør alligevel}}. På en Mac skal du første gang højreklikke på CadCraft Studio og vælge {{ui:Åbn}}. CadCraft Studio findes endnu ikke i en app-butik, og der er endnu ingen iPad- eller iPhone-version.
- Vinkel- og hældningslisterne i {{ui:Enheder}} gemmes, men ingen felter læser dem endnu.
- **Dimensioneringskontrollen er endnu ikke gennemgået af en ingeniør.** Vores tests sammenligner den med trykte tabelværdier og formler regnet i hånden, endnu ikke med designvejledningens regneeksempler. Indtil en gennemgang er den et hjælpemiddel: kontrollér de stålprofiler, der betyder noget, i hånden.
- Dimensioneringskontrollen bruger førsteordens-kræfter (ingen andenordens-effekter) og kontrollerer kun I-profiler. Ikke lavet endnu: rørprofiler, vinkelprofiler, U-profiler, svejste profiler, slanke (AISC) eller klasse 4 (Eurocode) dele i bøjning, vridning, forskydningsknæk sammen med bøjning, forbindelser, udmattelse, brand, jordskælvsdetaljering og beton. En slank del i tryk udelades fra trykkontrollerne, og stålprofilen står som »består, delvist kontrolleret«.
- Rammeanalysen er stadig førsteordens og lineær, og en ingeniør har endnu ikke prøvet den på et rigtigt projekt.
- Boltehuller, bolte, svejsninger og fundamenter er ikke med i USD-eksporten.

Alt andet står i [Hvad der ikke er lavet endnu](topic:not-built-yet).
