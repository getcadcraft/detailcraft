---
title: Nytt i 0.9 (tidligere)
summary: UK-stålstørrelser fra Blue Book og ulikbeinte vinkeljern, verkstedtegninger for hver del i ett PDF-sett, Mine profiler for egendefinerte profiler, P-Delta og egenfrekvenser, ASCE 7-vindlaster, seismisk sted og kombinasjoner, og live-markører med Følg.
keywords: nytt i 0.9, tidligere utgivelse, hva er nytt, what's new, utgivelsesmerknader, endringslogg, 0.9, britisk stål, blue book, ub, uc, pfc, shs, rhs, chs, ulikbeint vinkeljern, verkstedtegning, verkstedtegninger, arkesett, delnummer, pdf, mine profiler, egendefinert profil, p-delta, annenorden, egenfrekvens, endelige elementer, vindlast, asce 7, seismisk, grunnforhold, usgs, lastkombinasjoner, lrfd, asd, live, markører, følg, personer, verktøytips, endringer, 0.8, 0.8.1, versjon, nye funksjoner, montasje, kran, lastdiagram, film, autopilot, forbindelser, armering, trengsel, fundament, plate-fundament, setning, bindingsverk, tømmer, lettvegg, kappeliste, byggbarhet, sveiseadkomst, leverandør, lager, leveringstid, hva svikter først, betong, seismisk, plate, språk, assistent
from: ab0c7f05
---

Dette er hva som endret seg i DetailCraft 0.9, sammenlignet med 0.8.1. 0.9 gir deg UK-stålstørrelser, en verkstedtegning for hver del på én gang, en større {{ui:Analyse}}-fane for rammer, og en visning av hverandres markører når dere jobber sammen.

## Nytt

### UK-stål og verkstedtegninger

- **UK-stålstørrelser.** Profillistene har nå 976 størrelser fra Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS og RHS, med de kaldformede hule profilene holdt adskilt (navnene deres begynner med CF). Navnene skrives familie først, som UB305x165x40 eller SHS100x100x5.0. Du kan også skrive dem slik tegningene gjør: 305x165x40 UB, L100x100x10, SHS100x5. Se [Profilkatalog](topic:profile-catalog).
- **Ulikbeinte vinkeljern.** UEA-vinkeljern beholder begge bein gjennom IFC inn og ut og gjennom NC-filer, og en speiling snur delen ende for ende.
- **Alle verkstedtegninger på én gang.** Velg {{ui:Verkstedtegning}} i {{ui:Utdata}}-gruppen uten at noe er valgt. Vinduet lister alle delnumre, forhåndsviser hvilket som helst av dem, og {{ui:Last ned alle}} lagrer ett PDF-dokument med en side per delnummer, hver med tittelen «Ark 3 av 42». {{ui:Last ned PDF}} lagrer arket du ser på. Kanaler, vinkeljern og hule profiler får nå også ark. Se [Lag verkstedtegninger](topic:shop-drawings).
- **Mine profiler.** En egendefinert profil kan nå beholdes for hver ny modell. I skjemaet for egendefinert profil lar du {{ui:Behold i Mine profiler}} stå avkrysset. Listen {{ui:Mine profiler}} under den har {{ui:Behold}}, {{ui:Bruk her}} og {{ui:Fjern}}. Listen lagres i denne nettleseren (opptil 200), ikke på kontoen din. Se [Plater og profiler](topic:plates-and-profiles).

### Analyse

- **Annenorden (P-Delta).** Kryss av {{ui:Annenorden (P-Delta)}} ved siden av Kjør i {{ui:Analyse}}-fanen, så virker aksialkreftene på den deformerte rammen. Plater og stive dekker forblir førsteordens, med en advarsel. Se [Krefter, reaksjoner og nedbøyninger](topic:frame-analysis).
- **Egenfrekvenser.** Blokken {{ui:Endelige elementer: egenfrekvenser}} under resultatene finner de laveste svingemodene for den samme modellen, med periode og effektiv modal masse, og viser en mode på modellen. Se [Krefter, reaksjoner og nedbøyninger](topic:frame-analysis).
- **Vindlaster og seismisk sted.** Tre nye blokker i {{ui:Analyse}}-fanen: {{ui:Vindlaster (ASCE 7, retningsprosedyre)}}, {{ui:Jordskjelv: sted og system (ASCE 7)}} og {{ui:ASCE 7-lastkombinasjoner}}. Se [Vind, seismisk sted og ASCE 7-kombinasjoner](topic:wind-seismic-combinations).

### Arbeide sammen

- **Markører og navn.** I en Live-økt tegnes hver persons peker i modellen med navnet og fargen deres, og det de har valgt, får en boks.
- **Følg en person.** Åpne {{ui:Personer}} i økten og velg {{ui:Følg}} ved et navn; visningen din flytter seg med deres. Verten kan velge {{ui:Be alle om å følge meg}}. Se [Følg en person i en Live-økt](topic:follow-in-live).

### I alle apper

- Verktøytips er Bootstrap-tooltips, startkortet for tips har en lukkeknapp, fanelinjene ruller sideveis når de ikke får plass, og nettleserfanen viser navnet på det åpne dokumentet etterfulgt av DetailCraft og CadCraft.

## Rettet

- En egendefinert profil gikk tapt når du startet en ny modell.
- Kanaler, vinkeljern og hule profiler manglet i verkstedtegningssettet.

## Ærlige begrensninger

- Vind-, jordskjelv- og endelige elementer-blokkene er kontrollhjelpemidler. Ingeniøren din gjennomgår resultatene; de er ikke en standardkontroll. USGS-oppslaget ble testet på en erstatning, ikke på den levende tjenesten.
- Endelige elementer og P-Delta ble kontrollert mot håndregnede og lukkede svar, ikke mot en ekte bygning. Knekkanalyse er ikke bygget.
- Ingen britisk stålbedrift har prøvd UK-størrelsene ennå, og NC-filer for ulikbeinte vinkeljern har ikke kjørt på en maskin.
- Verkstedtegningssettet er bare PDF.
- Språk utover engelsk er maskinutkast.
- Windows-installasjonsprogrammene er ikke kodesignert (Mer info, deretter Kjør likevel). macOS-diskbildet er ikke notarisert (høyreklikk, deretter Åpne).

Tidligere endringer står i 0.8- og 0.8.1-notatene lenger ned på denne siden.

## Tidligere: 0.8 og 0.8.1

Dette er hva som endret seg i DetailCraft 0.8 (1. november 2026) og 0.8.1 (2. november 2026), sammenlignet med 0.7. 0.7 kontrollerte stålstaver. 0.8 planlegger løftene, foreslår forbindelsene, kontrollerer fundamentene og armeringen, og rammer inn tre- og lettveggsvegger, dekker og tak.

### Nytt

**Montasje**

- **Monteringsplan og film.** I {{ui:Montasje}}-fanen beskriver du en kran (hvor den står, den høyeste kroken, riggingen som ikke står i lastdiagrammet), og skriver inn radene i lastdiagrammet. DetailCraft løfter modellen én samling om gangen, i fase-rekkefølge og nivå for nivå, og kontrollerer hvert løft mot diagrammet ved radiusen og mot marginen du satte. {{ui:Lagre film}} skriver én HTML-fil som spilles av frakoblet i hvilken som helst nettleser, også på telefon. Løft som er over diagrammet, forbi det eller for høye, står i {{ui:Problemer}}. Det er en plan ut fra tallene dine, ikke en løfteplan. Se [Monteringsplan og film](topic:erection-movie).

**Forbindelser**

- **Forbindelsesautopilot.** Fanen {{ui:Autopilot}} ser på alle knutepunkter uten forbindelse og foreslår en ut fra profilene: fotplater, skjærlapper, endeplater for bjelkene du merker som momentbjelker, skjøter og knutepunktsplater. Gi en jevnt fordelt last eller én endeskjærkraft, så følger antall bolter boltens dimensjonerende styrke. {{ui:Legg til alle}} legger til forslagene som ett angretrinn. De er startverdier å gjennomgå, ikke en forbindelsesdimensjonering.
- **Byggbarhetskontroller.** {{ui:Problemer}} for en bolt en skiftenøkkel ikke når, bolter for tett for hylsen, kjeveveiser utenfor størrelsesgrensene og hule profiler som holder vann. Sveiseadkomst er ny: en rundtgående kjeveveis som sveiserens brenner ikke når, listes med delen som er i veien og andelen av sveisen som berøres. Se [Byggbarhetskontroller](topic:constructability).

**Fundamenter og armering**

- **Fundamentkontroller.** Fanen {{ui:Fundament}} kontrollerer fundamentsåler, kombinerte fundamentsåler og plate-fundamenter på grunnen du beskriver: bæreevne, glidning og velting fra bruksbelastninger; bøyning, skjær, gjennomstansing, forankring og minimumsarmering fra dimensjonerende laster (ACI 318-19). En søyle nær en kant eller et hjørne kontrolleres med tverrsnittet kuttet av fundamentets kant. Setning kommer fra jordens modulus, en fleksibel plate løses på fjærer fra en undergrunnsmodulus, og pælegrupper og støttemurer har egne paneler. Søylelaster kan skrives inn eller hentes fra {{ui:Analyse}}. Se [Fundamentkontroller](topic:foundation-checks).
- **Armeringstrengselskart.** Fanen {{ui:Trengsel}} tegner et varmekart av hvert fundament sett ovenfra: der stengene etterlater for lite rom for at betongen skal komme ned, mot regelen for fri avstand og, hvis du oppgir dem, største tilslag og vibratorhodet. Se [Armeringstrengselskart](topic:rebar-congestion).

**Rammer og leveranse**

- **Tre- og lettveggsrammer.** Fanen {{ui:Bindingsverk}} rammer inn vegg-, dekke- og takpaneler med hvert stykke, en kappeliste, lageret som skal kjøpes, og en verkstedtegning i skala. {{ui:Plasser som staver}} setter delene inn i modellen, og {{ui:PDF-ark}} lagrer ett ark for hvert panel. Dimensjonene, avstandene og overliggerne er dine: DetailCraft kontrollerer ikke at de bærer lasten. Se [Tre- og lettveggsrammepaneler](topic:framing-panels).
- **Leverandørlager og leveringstider.** Fanen {{ui:Levering}} leser en leverandørs lagerliste (CSV) og viser, for hver seksjon kappelisten kjøper, om det er nok på lager og hvor lang ventetiden er. Mangler og forsinkede seksjoner står i {{ui:Problemer}}. Ingenting bestilles. Se [Leverandørlager og leveringstider](topic:supplier-stock).

### Analyse og dimensjonering

- **Hva svikter først?** I {{ui:Analyse}}-fanen finner knappen bruddgrensekombinasjonen som styrer, den svakeste staven, hvor langt lastene kan øke før første stav når sin grense, og den svakeste endeplaten eller skjærlappen der boltenes skjærstyrke er kjent. Den trenger kombinasjonene og en dimensjoneringsstandard først. Lagertrykk, blokkskjærbrudd, sveiser og lirkning kontrolleres ikke. Din tilkoblede assistent kan spørre om det samme.
- **Live.** Kryss av {{ui:Live: løs på nytt etter hver redigering}}, så løses rammen på nytt etter hver redigering.
- **Mer betong.** En slank søyle i en rammeforskyvningsfri ramme dimensjoneres for sitt forstørrede moment (ACI 318-19 6.6.4.5). Den seismiske perioden kan hentes fra analysen med Rayleighs metode. En plate laget av plater får stålet hvert lag trenger ut fra momentene, og enveis skjær. Se [Kontroller betongstaver og lag seismiske laster](topic:concrete-and-seismic).
- **For en ingeniør å kontrollere.** Resultatene for fundament, betong og Hva svikter først er hjelpemidler. Vindlaster er ikke bygget.

### I alle apper

- **Språk.** Hjelpen er på 54 språk. De utover engelsk er maskinutkast inntil en morsmålstalende har lest dem. Ti er nye (litauisk, lettisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili, usbekisk).
- **Verktøylinjerader.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Verktøylinjerader}} velger bryting, 2 rader eller 1 rad. En linje som allerede får plass, forblir som den er; resten ruller sideveis.
- **Egenskapsrutenett.** Fundamentets felt bruker det felles rutenettet: sammenleggbare kategorier og en kompakt tetthet. Skrevet aritmetikk som 2*450 virker fortsatt.
- **Inndataenheter.** Styreplate, penn, 3D-mus, kontroller og MIDI kan styre appene. Se [Naviger i 3D](topic:navigate-3d).
- **Problempanelet.** Advarslene fra de nye kontrollene over vises i samme {{ui:Problemer}}-panel som før.
- **Koble til KI-en din.** Din egen assistent, koblet til via CadCraft Studio, fungerer med alle åtte appene og ser bare det du tillater. Ett-klikk-tilkobling, den hostede koblingen og din egen API-nøkkel i Studio kommer fortsatt. Se [Bruk DetailCraft med en KI-assistent](topic:use-with-ai-assistants).

### Rettet i 0.8.1

- **Språk i Studio.** Studio og de pakkede utgavene kan bytte språk under kjøring; før var de bare på engelsk. Det er ikke testet på alle plattformer ennå: si fra hvis språket ikke endrer seg.
- **Vindusvalg på kryss.** 0.8.1-installasjonsprogrammene har med seg oppførselen for valg med vindu som allerede var riktig i 0.8-nettbygget. Et eldre installasjonsprogram hadde den ikke.
- **Nettbrett i stående retning.** Ledig rutenetthøyde går til lerretet, og arkoppsettet starter ved 760 px eller mindre.

### Ikke i denne versjonen ennå

- **Sende NC til en maskin** er ikke utgitt.
- **Vindlaster** for betong er ikke bygget, og betong- og fundamentkontrollene er for en ingeniør å gjennomgå.
- **Kodesignering.** Windows-installasjonsprogrammene og macOS-.dmg-filen er ikke signert, så Windows kan advare, og macOS ber om høyreklikk, deretter Åpne.

Tidligere endringer står i [Nytt i 0.7](topic:whats-new-0-7).
