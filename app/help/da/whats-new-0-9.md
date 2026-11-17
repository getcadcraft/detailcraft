---
title: Nyheder i 0.9
summary: UK Blue Book-stålstørrelser og ulige vinkeljern, værkstedstegninger for hver del i ét PDF-sæt, Mine profiler til brugerdefinerede tværsnit, P-Delta og egenfrekvenser, ASCE 7-vindlaster, jordskælvssted og kombinationer, samt live-markører og Følg.
keywords: nyheder, hvad er nyt, udgivelsesnoter, changelog, 0.9, uk-stål, blue book, ub, uc, pfc, shs, rhs, chs, ulige vinkeljern, værkstedstegning, værkstedstegninger, arksæt, positionsnummer, pdf, mine profiler, brugerdefineret profil, p-delta, anden orden, egenfrekvens, endelige elementer, modalmasse, vindlast, asce 7, jordskælv, stedklasse, usgs, lastkombinationer, lrfd, asd, live, markører, følg, personer, værktøjstips, nyheder, release notes, changelog, ændringer, 0.8, 0.8.1, version, nye funktioner, montage, kran, lastdiagram, film, autopilot, forbindelser, armering, trængsel, fundament, fodring, plade, sætning, rammer, træ, let stål, skæreliste, konstruerbarhed, svejseadgang, leverandør, lager, leveringstid, hvad går først i stykker, live, beton, jordskælv, dæk, sprog, assistent
from: 4c95a2de
---

Dette er ændringerne i DetailCraft 0.9 sammenlignet med 0.8.1. 0.9 bringer UK-stålstørrelserne, en værkstedstegning for hver del på én gang, en større fane {{ui:Analyse}} til rammer og en visning af hinandens markører, når I arbejder sammen.

## Nyt

### UK-stål og værkstedstegninger

- **UK-stålstørrelser.** Profillisterne indeholder nu 976 størrelser fra Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS og RHS, hvor de koldformede hule profiler holdes adskilt (deres navne starter med CF). Navnene skrives med familien først, fx UB305x165x40 eller SHS100x100x5.0, og det virker også at skrive dem, som tegninger gør: 305x165x40 UB, L100x100x10, SHS100x5. Se [Profilkatalog](topic:profile-catalog).
- **Ulige vinkeljern.** UEA-vinkeljern beholder begge ben gennem IFC ind og ud og gennem NC-filer, og en spejling vender emnet ende for ende.
- **Alle værkstedstegninger på én gang.** Vælg {{ui:Værkstedstegning}} i gruppen {{ui:Uddata}}, uden at noget er valgt. Vinduet lister hver positionsnummer, viser en forhåndsvisning af enhver af dem, og {{ui:Download alle}} gemmer ét PDF med en side for hvert nummer, hver med titlen »Ark 3 af 42«. {{ui:Download PDF}} gemmer den, du kigger på. Kanaler, vinkeljern og hule profiler får nu også ark. Se [Lav værkstedstegninger](topic:shop-drawings).
- **Mine profiler.** En brugerdefineret profil kan nu gemmes til hver ny model. I formularen Brugerdefineret profil lader du {{ui:Behold i Mine profiler}} være markeret; listen {{ui:Mine profiler}} under den har {{ui:Behold}}, {{ui:Brug her}} og {{ui:Fjern}}. Listen gemmes i denne browser (op til 200), ikke på din konto. Se [Plader og profiler](topic:plates-and-profiles).

### Analyse

- **Anden orden (P-Delta).** Sæt flueben ved {{ui:Anden orden (P-Delta)}} ved siden af {{ui:Kør}} i fanen {{ui:Analyse}}, og aksialkræfterne virker på den deformerede ramme. Plader og stive dæk forbliver førsteordens, med en advarsel. Se [Kræfter, reaktioner og nedbøjninger](topic:frame-analysis).
- **Egenfrekvenser.** Blokken {{ui:Endelige elementer: egenfrekvenser}} under resultaterne finder de laveste svingningsformer for den samme model, med periode og effektiv modalmasse, og viser en svingningsform på modellen. Se [Kræfter, reaktioner og nedbøjninger](topic:frame-analysis).
- **Vindlaster og jordskælvssted.** Tre nye blokke i fanen {{ui:Analyse}}: {{ui:Vindlaster (ASCE 7, retningsbestemt metode)}}, {{ui:Jordskælv: sted og system (ASCE 7)}} og {{ui:ASCE 7-lastkombinationer}}. Se [Vind, jordskælvssted og ASCE 7-kombinationer](topic:wind-seismic-combinations).

### Arbejde sammen

- **Markører og navne.** I en Live-session tegnes hver persons markør i modellen med deres navn og farve, og det de har valgt, får en kasse.
- **Følg en person.** Åbn {{ui:Personer}} i sessionen og vælg {{ui:Følg}} ved et navn; din visning flytter sig med deres. Værten kan vælge {{ui:Bed alle om at følge mig}}. Se [Følg en person i en Live-session](topic:follow-in-live).

### I alle apps

- Værktøjstips er Bootstrap-tips, startkortet med tips har en lukkeknap, faneliste ruller sidelæns, når de ikke passer, og browserfanen viser navnet på det åbne dokument efterfulgt af DetailCraft og CadCraft.

## Rettet

- En brugerdefineret profil gik tabt, når du startede en ny model.
- Kanaler, vinkeljern og hule profiler manglede i værkstedstegningssættet.

## Ærlige begrænsninger

- Vind-, jordskælvs- og endelige elementblokkene er hjælpemidler til kontrol. Din ingeniør gennemgår resultaterne; de er ikke en normkontrol. USGS-opslaget er testet på en stedfortræder, ikke på den rigtige tjeneste.
- Endelige elementer og P-Delta er kontrolleret mod håndregnede og lukkede løsninger, ikke mod en rigtig bygning. Knækanalyse er ikke lavet.
- Ingen britisk stålfabrikant har endnu prøvet UK-størrelserne, og NC-filer til ulige vinkeljern er ikke kørt på en maskine.
- Værkstedstegningssættet findes kun som PDF.
- Sprog ud over engelsk er maskinelle udkast.
- Windows-installationsprogrammerne er ikke kodesignerede (Flere oplysninger, derefter Kør alligevel); macOS-diskbilledet er ikke notariseret (højreklik, derefter Åbn).

Tidligere ændringer findes i noterne for 0.8 og 0.8.1 længere nede på denne side.

## Tidligere: 0.8 og 0.8.1

Dette er ændringerne i DetailCraft 0.8 (1. november 2026) og 0.8.1 (2. november 2026) sammenlignet med 0.7. 0.7 kontrollerede stålprofiler; 0.8 planlægger løftene, foreslår forbindelserne, kontrollerer fundamenterne og armeringen og opbygger rammer til træ- og letstålsvægge, -dæk og -tage.

### Nyt

**Montage**

- **Monteringsplan og film.** I fanen {{ui:Montage}} beskriver du en kran (hvor den står, dens højeste krog, den løftegrej der ikke står i lastdiagrammet) og skriver rækkerne i dens lastdiagram. DetailCraft løfter modellen én samling ad gangen, i fasernes rækkefølge og lag for lag, og kontrollerer hvert løft mod diagrammet ved dets radius og mod den margin, du har angivet. {{ui:Gem film}} skriver én HTML-fil, der afspilles offline i enhver browser, også på en telefon. Løft, der er over diagrammet, forbi det eller for høje, står i {{ui:Problemer}}. Det er en plan ud fra dine tal, ikke en løftplan. Se [Monteringsplan og film](topic:erection-movie).

**Forbindelser**

- **Forbindelsesautopilot.** Fanen {{ui:Autopilot}} ser på hver samling, der ikke har en forbindelse, og foreslår en ud fra profilerne: fodplader, forskydningsflige, endeplader for de bjælker, du markerer som momentbjælker, stød og samleplader. Giv en jævnt fordelt last eller én endeforskydning, og antallet af bolte følger boltens dimensioneringsstyrke. {{ui:Tilføj dem alle}} tilføjer forslagene som ét fortrydelsestrin. De er startværdier at gennemgå, ikke en forbindelsesdimensionering.
- **Konstruerbarhedskontrol.** {{ui:Problemer}} for en bolt, en skruenøgle ikke kan nå, bolte for tæt på til nøglen, kehlsvejsninger uden for deres størrelsesgrænser og hule profiler, der holder vand. Svejseadgang er ny: en rundtgående kehlsvejsning, som svejserens brænder ikke kan nå, listes med den del, der er i vejen, og den andel af svejsningen, der berøres. Se [Konstruerbarhedskontrol](topic:constructability).

**Fundamenter og armering**

- **Fundamentkontrol.** Fanen {{ui:Fundering}} kontrollerer fundamenter, kombinerede fundamenter og plader på den jord, du beskriver: bæreevne, glidning og væltning fra anvendelseslaster; bøjning, forskydning, gennemstansning, forankring og minimumsarmering fra dimensionerende laster (ACI 318-19). En søjle tæt på en kant eller et hjørne kontrolleres med tværsnittet afskåret af fundamentets kant. Sætning beregnes ud fra jordens elasticitetsmodul, en fleksibel plade løses på fjedre ud fra en undergrundsmodul, og pælegrupper og støttemure har egne paneler. Søjlelaster kan skrives ind eller hentes fra {{ui:Analyse}}. Se [Fundamentkontrol](topic:foundation-checks).
- **Kort over armeringstrængsel.** Fanen {{ui:Trængsel}} tegner et varmekort over hvert fundament set oppefra: hvor armeringen efterlader for lidt plads til, at betonen kan komme ned, sammenlignet med reglen for fri afstand og, hvis du angiver dem, den største tilslag og vibratorhovedet. Se [Kort over armeringstrængsel](topic:rebar-congestion).

**Rammer og forsyning**

- **Rammer i træ og let stål.** Fanen {{ui:Konstruktion}} opbygger væg-, dæk- og tagpaneler med hvert stykke, en skæreliste, det lager, der skal købes, og en værkstedstegning i skala. {{ui:Placér som stålprofiler}} sætter stykkerne ind i modellen, og {{ui:PDF-ark}} gemmer ét ark for hvert panel. Dimensioner, afstande og rammer bestemmer du selv: DetailCraft kontrollerer ikke, at de bærer lasten. Se [Rammepaneler i træ og let stål](topic:framing-panels).
- **Leverandørlager og leveringstider.** Fanen {{ui:Forsyning}} læser en leverandørs lagerliste (CSV) og viser for hver profil, som skæreatelieret køber, om der er nok på lager, og hvor lang ventetiden er. Mangler og forsinkede profiler står i {{ui:Problemer}}. Intet bestilles. Se [Leverandørlager og leveringstider](topic:supplier-stock).

**Analyse og dimensionering**

- **Hvad går først i stykker?** I fanen {{ui:Analyse}} finder knappen den styrkekombination, der er bestemmende, den svageste stålprofil, hvor meget lasterne kan vokse, før den første stålprofil når sin grænse, og den svageste endeplade eller forskydningsflige, hvor boltenes forskydningsstyrke er kendt. Den kræver først kombinationerne og en dimensioneringsnorm. Tryk, blokforskydning, svejsninger og prying kontrolleres ikke. Din tilsluttede assistent kan spørge om det samme. 
- **Live.** Sæt flueben ved {{ui:Live: løs igen efter hver redigering}}, og rammen løses igen efter hver redigering.
- **Beton, mere.** En slank søjle i en ramme uden sideudsving dimensioneres for sit forstørrede moment (ACI 318-19 6.6.4.5). Den seismiske periode kan tages fra analysen med Rayleighs metode. En plade lavet af plader får den armering, hvert lag har brug for, ud fra dets momenter, samt den ensrettede forskydning. Se [Kontrollér betonelementer og lav jordskælvslaster](topic:concrete-and-seismic).
- **Til en ingeniør at kontrollere.** Resultaterne for fundament, beton og Hvad går først i stykker er hjælpemidler. Vindlaster er ikke lavet.

**I alle apps**

- **Sprog.** Hjælpen findes på 54 sprog. De, der er ud over engelsk, er maskinelle udkast, indtil en modersmålstaler har læst dem; ti er nye (litauisk, lettisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili, usbekisk).
- **Værktøjslinjens rækker.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Værktøjslinjens rækker}} vælger brydning, 2 rækker eller 1 række. En linje, der allerede passer, forbliver som den er; resten ruller sidelæns.
- **Egenskabsgitteret.** Fundamentets felter bruger det fælles gitter: sammenklappelige kategorier og en kompakt tæthed. Skrevet regnestykker som 2*450 virker stadig.
- **Inputenheder.** Touchpad, pen, 3D-mus, controller og MIDI kan styre appsene. Se [Navigér i 3D](topic:navigate-3d).
- **Panelet Problemer.** Advarslerne fra de nye kontroller ovenfor vises i det samme panel {{ui:Problemer}} som før.
- **Forbind din AI.** Din egen assistent, forbundet via CadCraft Studio, virker med alle otte apps og ser kun det, du tillader. Forbindelse med ét klik, den hostede connector og din egen API-nøgle i Studio kommer endnu. Se [Brug DetailCraft med en AI-assistent](topic:use-with-ai-assistants).

### Rettet i 0.8.1

- **Sprog i Studio.** Studio og de pakkede udgaver kan skifte sprog under kørsel; før var de kun engelske. Det er endnu ikke testet på alle platforme: sig til os, hvis sproget ikke skifter.
- **Vælg med krydsvindue.** 0.8.1-installationsprogrammerne har den vælg-med-vindue-adfærd, der allerede var rigtig i 0.8-webudgaven; et ældre installationsprogram havde den ikke.
- **Tablets i stående format.** Ledig gitterhøjde går til lærredet, og arkelayoutet starter ved 760 px eller mindre.

### Ikke i denne version endnu

- **Send NC til en maskine** er ikke udgivet.
- **Vindlaster** for beton er ikke lavet, og beton- og fundamentkontrollerne skal gennemgås af en ingeniør.
- **Kodesignering.** Windows-installationsprogrammerne og macOS-.dmg-filen er ikke signeret, så Windows kan advare, og macOS beder om højreklik, derefter Åbn.

Tidligere ændringer findes i [Nyheder i 0.7](topic:whats-new-0-7).
