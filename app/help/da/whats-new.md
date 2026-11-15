---
title: Nyheder i 0.8 og 0.8.1
summary: En montagefilm ud fra en krans lastdiagram, en forbindelsesautopilot, et kort over armeringstrængsel, fundamentskontroller, rammepaneler i træ og tyndt stål, kontrol af konstruerbarhed og svejseadgang, leverandørlager, hvad der går i stykker først, live-genberegning, flere betonkontroller og rettelserne i 0.8.1.
keywords: nyheder, hvad er nyt, udgivelsesnoter, ændringslog, ændringer, 0.8, 0.8.1, version, nye funktioner, montage, kran, lastdiagram, film, autopilot, forbindelser, armering, trængsel, fundament, punktfundament, fundamentplade, sætning, rammeværk, træ, tyndt stål, tilskæringsliste, konstruerbarhed, svejseadgang, leverandør, lager, leveringstid, hvad går i stykker først, live, beton, seismisk, dæk, sprog, assistent
from: 6e33e052
---

Dette er, hvad der ændrede sig i DetailCraft 0.8 (1. november 2026) og 0.8.1 (2. november 2026), sammenlignet med 0.7. 0.7 kontrollerede stålelementer; 0.8 planlægger løftene, foreslår forbindelserne, kontrollerer fundamenterne og armeringen og opbygger rammer i træ og tyndt stål til vægge, gulve og tage.

## Nyt

### Montage

- **Montageplan og film.** I fanen {{ui:Erection}} beskriver du en kran (hvor den står, dens højeste krog, og rigningen, der ikke er i diagrammet) og indtaster rækkerne i dens lastdiagram. DetailCraft løfter modellen én samling ad gangen, i fasernes rækkefølge og lag for lag, og kontrollerer hvert løft mod diagrammet ved dens radius og mod den margin, du har angivet. {{ui:Save movie}} skriver én HTML-fil, der afspilles offline i enhver browser, også på en telefon. Løft, der ligger over diagrammet, uden for det eller for højt, står under {{ui:Problems}}. Det er en plan ud fra dine tal, ikke en løfteplan. Se [Montageplan og film](topic:erection-movie).

### Forbindelser

- **Forbindelsesautopilot.** Fanen {{ui:Autopilot}} kigger på hver samling, der ikke har en forbindelse, og foreslår en ud fra profilerne: fodplader, forskydningsplader, endeplader til de bjælker, du markerer som momentbjælker, stød og samleplader. Angiv en jævnt fordelt last eller én endeforskydning, så følger antallet af bolte boltens dimensionerende styrke. {{ui:Add them all}} tilføjer forslagene som ét fortrydelsestrin. De er udgangsværdier, der skal gennemgås, ikke en forbindelsesberegning.
- **Kontrol af konstruerbarhed.** {{ui:Problems}} for en bolt, som en skruenøgle ikke kan nå, bolte for tæt på til nøglen, kehlsvejsninger uden for deres størrelsesgrænser og hule profiler, der holder vand. Svejseadgang er nyt: en rundtgående kehlsvejsning, som en svejsers brænder ikke kan nå, vises med delen i vejen og den andel af svejsningen, der berøres. Se [Kontrol af konstruerbarhed](topic:constructability).

### Fundamenter og armering

- **Fundamentkontroller.** Fanen {{ui:Foundation}} kontrollerer punktfundamenter, kombinerede fundamenter og fundamentplader på den jord, du beskriver: bæreevne, glidning og væltning fra driftslaster; bøjning, forskydning, gennemstansning, forankring og minimumsarmering fra dimensionerede laster (ACI 318-19). En søjle tæt på en kant eller et hjørne kontrolleres med snittet beskåret af fundamentets kant. Sætning beregnes ud fra jordens elasticitetsmodul, en fleksibel fundamentplade løses på fjedre ud fra en undergrundsmodul, og pælegrupper og støttemure har egne paneler. Søjlelaster kan indtastes eller hentes fra {{ui:Analysis}}. Se [Fundamentkontroller](topic:foundation-checks).
- **Kort over armeringstrængsel.** Fanen {{ui:Congestion}} tegner et varmekort over hvert fundament, set oppefra: der hvor armeringen efterlader for lidt plads til, at betonen kan komme ned, mod reglen for fri afstand og, hvis du angiver dem, største tilslag og vibratorhovedet. Se [Kort over armeringstrængsel](topic:rebar-congestion).

### Rammeværk og leverance

- **Rammer i træ og tyndt stål.** Fanen {{ui:Framing}} opbygger væg-, gulv- og tagpaneler med alle stykker, en tilskæringsliste, det lager du skal købe, og en værkstedstegning i skala. {{ui:Place as members}} placerer stykkerne i modellen, og {{ui:PDF sheets}} gemmer ét ark for hvert panel. Dimensioner, afstande og overliggere er dine: DetailCraft kontrollerer ikke, at de bærer lasten. Se [Rammepaneler i træ og tyndt stål](topic:framing-panels).
- **Leverandørlager og leveringstider.** Fanen {{ui:Supply}} læser en leverandørs lagerliste (CSV) og viser for hvert profil, som tilskæringslisten køber, om der er nok på lager, og hvor lang ventetiden er. Mangler og sene profiler står under {{ui:Problems}}. Intet bliver bestilt. Se [Leverandørlager og leveringstider](topic:supplier-stock).

### Analyse og dimensionering

- **Hvad går i stykker først?** I fanen {{ui:Analysis}} finder knappen den styrende lastkombination, den svageste del, hvor langt lasterne kan vokse, før den første del når sin grænse, og den svageste endeplade eller forskydningsplade, hvor boltenes forskydningsstyrke er kendt. Den kræver først kombinationerne og en dimensioneringsnorm. Bæreevne, blokforskydning, svejsninger og prying kontrolleres ikke. Din tilsluttede assistent kan spørge om det samme.
- **Live.** Sæt kryds i {{ui:Live: solve again after each edit}}, og rammen beregnes igen efter hver redigering.
- **Beton og mere.** En slank søjle i en ikke-sidestabil ramme dimensioneres for sit forstærkede moment (ACI 318-19 6.6.4.5). Den seismiske periode kan tages fra analysen med Rayleigh-metoden. En dæk lavet af plader får det stål, hvert lag har brug for, ud fra dets momenter, og den ensrettede forskydning. Se [Kontrollér betonelementer og lav seismiske laster](topic:concrete-and-seismic).
- **Til kontrol af en ingeniør.** Resultaterne for fundament, beton og Hvad går i stykker først er hjælpemidler. Vindlaster er ikke bygget.

### I alle apps

- **Sprog.** Hjælpen findes på 54 sprog. De, der er ud over engelsk, er maskinoversættelser, indtil en indfødt taler har læst dem; ti er nye (litauisk, lettisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili og usbekisk).
- **Værktøjslinjens rækker.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} vælger ombrydning, 2 rækker eller 1 række. En linje, der allerede passer, bliver, som den er; resten kan rulles sidelæns.
- **Egenskabsgitter.** Fundamentets felter bruger det fælles gitter: sammenklappelige kategorier og en kompakt tæthed. Indtastet regning som 2*450 virker stadig.
- **Inputenheder.** Trackpad, pen, 3D-mus, controller og MIDI kan styre appene. Se [Navigér i 3D](topic:navigate-3d).
- **Panelet Problemer.** Advarslerne fra de nye kontroller ovenfor vises i samme {{ui:Problems}}-panel som før.
- **Tilslut din AI.** Din egen assistent, tilsluttet via CadCraft Studio, virker med alle otte apps og ser kun det, du tillader. Ét-klik-tilslutning, den hostede connector og din egen API-nøgle i Studio kommer endnu. Se [Brug DetailCraft med en AI-assistent](topic:use-with-ai-assistants).

## Rettet i 0.8.1

- **Sprog i Studio.** Studio og de pakkede udgaver kan skifte sprog under kørsel; før var de kun engelske. Det er endnu ikke testet på alle platforme: sig til, hvis sproget ikke skifter.
- **Markering med krydsvindue.** 0.8.1-installationsprogrammerne har den markering med vindue, der allerede var rigtig i 0.8-webudgaven; et ældre installationsprogram havde den ikke.
- **Tablets i stående format.** Ledig gitterhøjde går til lærredet, og arkopsætningen starter ved 760 px eller mindre.

## Ikke med i denne version endnu

- **Send NC til en maskine** er ikke udgivet.
- **Vindlaster** til beton er ikke bygget, og beton- og fundamentkontrollerne skal gennemgås af en ingeniør.
- **Kodesignering.** Windows-installationsprogrammerne og macOS .dmg-filen er ikke signeret, så Windows kan advare, og macOS beder om et højreklik, derefter Åbn.

Tidligere ændringer findes i [Nyheder i 0.7](topic:whats-new-0-7).
