---
title: Nyheder i 0.9 (tidligere)
summary: UK Blue Book-stålstørrelser og ulige vinkelprofiler, værkstedstegninger for hver del i ét PDF-sæt, Mine profiler til specialtværsnit, P-Delta og egenfrekvenser, ASCE 7-vindlaster, jordskælvssted og kombinationer, samt live-markører med Følg.
keywords: nyheder 0.9, tidligere udgivelse, nyheder, hvad er nyt, udgivelsesnoter, ændringslog, 0.9, uk-stål, blue book, ub, uc, pfc, shs, rhs, chs, ulige vinkelprofil, værkstedstegning, værkstedstegninger, tegningssæt, positionsnummer, pdf, mine profiler, specialprofil, p-delta, andenorden, egenfrekvens, endelige elementer, modalmasse, vindlast, asce 7, jordskælv, undergrund, usgs, lastkombinationer, lrfd, asd, live, markører, følg, personer, tooltips, 0.8, 0.8.1, version, nye funktioner, montage, kran, lastdiagram, film, autopilot, forbindelser, armering, trængsel, fundering, fundamentsplade, punktfundament, sætning, konstruktion, træ, letprofil, tilskæringsliste, udførbarhed, svejseadgang, leverandør, lager, leveringstid, hvad svigter først, beton, jordskælv, dæk, sprog, assistent
from: ab0c7f05
---

Dette er ændringerne i DetailCraft 0.9 sammenlignet med 0.8.1. 0.9 bringer de britiske stålstørrelser, en værkstedstegning for hver del på én gang, en større fane {{ui:Analyse}} til rammer og en visning af hinandens markører, når I arbejder sammen.

## Nyt

### Britisk stål og værkstedstegninger

- **Britiske stålstørrelser.** Profillisterne har nu 976 størrelser fra Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS og RHS, hvor de koldformede hule profiler holdes adskilt (deres navne starter med CF). Navnene skrives med familien først, fx UB305x165x40 eller SHS100x100x5.0, og det virker også at skrive det, som tegninger siger det: 305x165x40 UB, L100x100x10, SHS100x5. Se [Profilkatalog](topic:profile-catalog).
- **Ulige vinkelprofiler.** UEA-vinkler bevarer begge ben gennem IFC ind og ud og gennem NC-filer, og en spejling vender stykket ende for ende.
- **Alle værkstedstegninger på én gang.** Vælg {{ui:Værkstedstegning}} i gruppen {{ui:Uddata}} uden at have valgt noget. Vinduet viser alle positionsnumre, viser forhåndsvisning af hvilket som helst af dem, og {{ui:Download alle}} gemmer ét PDF med en side pr. positionsnummer, hver med titlen "Ark 3 af 42". {{ui:Download PDF}} gemmer det ark, du kigger på. Kanalprofiler, vinkelprofiler og hule profiler får nu også ark. Se [Lav værkstedstegninger](topic:shop-drawings).
- **Mine profiler.** En specialprofil kan nu beholdes til hver ny model. I formularen for specialprofil lader du {{ui:Behold i Mine profiler}} være afkrydset; listen {{ui:Mine profiler}} under den har {{ui:Behold}}, {{ui:Brug her}} og {{ui:Fjern}}. Listen gemmes i denne browser (op til 200), ikke på din konto. Se [Plader og profiler](topic:plates-and-profiles).

### Analyse

- **Andenorden (P-Delta).** Afkryds {{ui:Andenorden (P-Delta)}} ved siden af Kør i fanen {{ui:Analyse}}, og normalkræfterne virker på den deformerede ramme. Plader og stive dæk forbliver førsteordens med en advarsel. Se [Kræfter, reaktioner og nedbøjninger](topic:frame-analysis).
- **Egenfrekvenser.** Blokken {{ui:Endelige elementer: egenfrekvenser}} under resultaterne finder de laveste svingningsformer for den samme model, med periode og effektiv modalmasse, og viser en svingningsform på modellen. Se [Kræfter, reaktioner og nedbøjninger](topic:frame-analysis).
- **Vindlaster og jordskælvssted.** Tre nye blokke i fanen {{ui:Analyse}}: {{ui:Vindlaster (ASCE 7, retningsbestemt metode)}}, {{ui:Jordskælv: sted og system (ASCE 7)}} og {{ui:ASCE 7-lastkombinationer}}. Se [Vind, jordskælvssted og ASCE 7-kombinationer](topic:wind-seismic-combinations).

### Sammen om arbejdet

- **Markører og navne.** I en Live-session tegnes hver persons markør i modellen med deres navn og farve, og det, de har valgt, får en boks.
- **Følg en person.** Åbn {{ui:Personer}} i sessionen og vælg {{ui:Følg}} ved et navn; din visning flytter sig med deres. Værten kan vælge {{ui:Bed alle om at følge mig}}. Se [Følg en person i en Live-session](topic:follow-in-live).

### I alle apps

- Tooltips er Bootstrap-tooltips, startens tipkort har en lukkeknap, fanelinjerne ruller sidelæns, når de ikke passer, og browserfanen viser navnet på det åbne dokument efterfulgt af DetailCraft og CadCraft.

## Rettet

- En specialprofil gik tabt, når du startede en ny model.
- Kanalprofiler, vinkelprofiler og hule profiler manglede i værkstedstegningssættet.

## Ærlige begrænsninger

- Vind-, jordskælvs- og endelige elementblokkene er kontrolhjælpemidler. Din ingeniør gennemgår resultaterne; de er ikke en normkontrol. USGS-opslaget er testet på en erstatning, ikke på den kørende tjeneste.
- Endelige elementer og P-Delta er kontrolleret mod håndregning og lukkede løsninger, ikke mod en rigtig bygning. Knækanalyse er ikke lavet endnu.
- Ingen britisk stålvirksomhed har endnu afprøvet de britiske størrelser, og NC-filer for ulige vinkelprofiler er ikke kørt på en maskine.
- Værkstedstegningssættet findes kun som PDF.
- Sprog ud over engelsk er maskinkladder.
- Windows-installationsprogrammerne er ikke kodesignerede (Flere oplysninger, derefter Kør alligevel); macOS-diskbilledet er ikke notariseret (højreklik, derefter Åbn).

Tidligere ændringer findes i noterne for 0.8 og 0.8.1 længere nede på siden.

## Tidligere: 0.8 og 0.8.1

Dette er ændringerne i DetailCraft 0.8 (1. november 2026) og 0.8.1 (2. november 2026) sammenlignet med 0.7. 0.7 kontrollerede stålprofiler; 0.8 planlægger løft, foreslår forbindelser, kontrollerer fundamenter og armering og konstruerer træ- og letprofilvægge, dæk og tage.

### Nyt

**Montage**

- **Montageplan og film.** I fanen {{ui:Montage}} beskriver du en kran (hvor den står, dens højeste krog, det rigning der ikke står i diagrammet) og skriver rækkerne i dens lastdiagram. DetailCraft løfter modellen én samling ad gangen, i fasernes rækkefølge og lag for lag, og kontrollerer hvert løft mod diagrammet ved dens radius og mod den margin, du har angivet. {{ui:Gem film}} skriver én HTML-fil, der spiller offline i enhver browser, også på en telefon. Løft, der er over diagrammet, ud over det eller for højt, står i {{ui:Problemer}}. Det er en plan ud fra dine tal, ikke en løfteplan. Se [Montageplan og film](topic:erection-movie).

**Forbindelser**

- **Autopilot for forbindelser.** Fanen {{ui:Autopilot}} gennemgår hver samling, der ikke har en forbindelse, og foreslår en ud fra profilerne: fodplader, forskydningsplader, endeplader for de bjælker, du markerer som momentbjælker, stød og samleplader. Angiv en jævnt fordelt last eller én endeforskydning, og boltantallet følger boltens dimensionerende styrke. {{ui:Tilføj dem alle}} tilføjer forslagene som ét fortrydelsestrin. Det er startværdier at gennemgå, ikke en forbindelsesdimensionering.
- **Udførbarhedskontrol.** {{ui:Problemer}} for en bolt, som en nøgle ikke kan nå, bolte, der er for tæt på til topnøglen, kilesvejsninger uden for deres størrelsesgrænser og hule profiler, der samler vand. Svejseadgang er nyt: en rundtgående kilesvejsning, som svejserens brænder ikke kan nå, står på listen med den del, der er i vejen, og den andel af svejsningen, der berøres. Se [Udførbarhedskontrol](topic:constructability).

**Fundering og armering**

- **Fundamentskontrol.** Fanen {{ui:Fundering}} kontrollerer punktfundamenter, kombinerede fundamenter og fundamentsplader på den jord, du beskriver: bæreevne, glidning og væltning fra brugslaster; bøjning, forskydning, gennemstansning, forankring og minimumsarmering fra dimensionerende laster (ACI 318-19). En søjle nær en kant eller et hjørne kontrolleres med det tværsnit, der er skåret af fundamentets kant. Sætning kommer fra jordens modul, en fleksibel fundamentsplade løses på fjedre ud fra et undergrundsmodul, og pælegrupper og støttevægge har egne paneler. Søjlelaster kan skrives ind eller hentes fra {{ui:Analyse}}. Se [Fundamentskontrol](topic:foundation-checks).
- **Kort over armeringstrængsel.** Fanen {{ui:Trængsel}} tegner et varmekort over hvert fundament set ovenfra: hvor armeringsjernene efterlader for lidt plads til, at betonen kan komme ned, mod reglen om fri afstand og, hvis du angiver dem, den største tilslag og vibratorhovedet. Se [Kort over armeringstrængsel](topic:rebar-congestion).

**Konstruktion og forsyning**

- **Træ- og letprofilkonstruktion.** Fanen {{ui:Konstruktion}} konstruerer vægs-, gulvs- og tagpaneler med alle emner, en tilskæringsliste, lageret der skal købes, og en værkstedstegning i skala. {{ui:Placér som stålprofiler}} sætter emnerne ind i modellen, og {{ui:PDF-ark}} gemmer ét ark for hvert panel. Dimensioner, afstande og overliggere er dine: DetailCraft kontrollerer ikke, at de bærer lasten. Se [Træ- og letprofilpaneler](topic:framing-panels).
- **Leverandørlager og leveringstider.** Fanen {{ui:Forsyning}} læser en leverandørs lagerliste (CSV) og viser for hver profil, tilskæringslisten køber, om der er nok på lager, og hvor lang ventetiden er. Mangler og forsinkede profiler står i {{ui:Problemer}}. Der bestilles intet. Se [Leverandørlager og leveringstider](topic:supplier-stock).

**Analyse og dimensionering**

- **Hvad svigter først?** I fanen {{ui:Analyse}} finder knappen den styrende bæreevnekombination, den svageste stålprofil, hvor meget lasterne kan vokse, før den første stålprofil når sin grænse, og den svageste endeplade eller forskydningsplade, hvor boltenes forskydningsstyrke er kendt. Det kræver først kombinationerne og en dimensioneringsnorm. Understøtningstryk, blokforskydning, svejsninger og prying kontrolleres ikke. Din tilsluttede assistent kan spørge om det samme.
- **Live.** Afkryds {{ui:Live: løs igen efter hver redigering}}, og rammen løses igen efter hver redigering.
- **Mere om beton.** En slank søjle i en uforskydelig ramme dimensioneres for sit forstærkede moment (ACI 318-19 6.6.4.5). Jordskælvsperioden kan hentes fra analysen med Rayleighs metode. Et dæk af plader får den armering, hvert lag har brug for, ud fra dets momenter og forskydningen i én retning. Se [Kontrollér betonelementer og lav jordskælvslaster](topic:concrete-and-seismic).
- **Til ingeniøren at kontrollere.** Resultaterne for fundering, beton og Hvad svigter først er hjælpemidler. Vindlaster er ikke lavet endnu.

**I alle apps**

- **Sprog.** Hjælpen findes på 54 sprog. Dem ud over engelsk er maskinkladder, indtil en indfødt taler har læst dem; ti er nye (litauisk, lettisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili, usbekisk).
- **Værktøjslinjens rækker.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Værktøjslinjens rækker}} vælger omslag, 2 rækker eller 1 række. En linje, der allerede passer, forbliver som den er; de øvrige ruller sidelæns.
- **Egenskabsgitter.** Fundamentets felter bruger det fælles gitter: sammenklappelige kategorier og en kompakt tæthed. Indtastet regning som 2*450 virker stadig.
- **Inputenheder.** Trackpad, pen, 3D-mus, controller og MIDI kan styre appsene. Se [Navigér i 3D](topic:navigate-3d).
- **Problempanel.** Advarslerne fra de nye kontroller ovenfor vises i samme panel {{ui:Problemer}} som før.
- **Forbind din AI.** Din egen assistent, forbundet via CadCraft Studio, virker med alle otte apps og ser kun det, du tillader. Forbindelse med ét klik, den hostede connector og din egen API-nøgle i Studio er endnu ikke klar. Se [Brug DetailCraft med en AI-assistent](topic:use-with-ai-assistants).

### Rettet i 0.8.1

- **Sprog i Studio.** Studio og de pakkede udgaver kan skifte sprog under kørsel; før var de kun engelske. Det er endnu ikke testet på alle platforme: giv os besked, hvis sproget ikke skifter.
- **Valg med krydsvindue.** Installationsprogrammerne til 0.8.1 har allerede den rigtige valgadfærd for valg med vindue i 0.8-webudgaven; et ældre installationsprogram havde den ikke.
- **Tablet i stående format.** Ledig gitterhøjde går til lærredet, og arkopsætningen starter ved 760 px eller mindre.

### Ikke i denne version endnu

- **Send NC til en maskine** er ikke udgivet.
- **Vindlaster** til beton er ikke lavet endnu, og beton- og fundamentskontrollerne er til, at en ingeniør gennemgår dem.
- **Kodesignering.** Windows-installationsprogrammerne og macOS .dmg er ikke signerede, så Windows kan advare, og macOS beder om højreklik, derefter Åbn.

Tidligere ændringer findes i [Nyheder i 0.7](topic:whats-new-0-7).
