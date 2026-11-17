---
title: Hva er nytt i 0.9
summary: Britiske stålprofiler (UK Blue Book) og vinkeljern med ulike ben, verkstedtegninger for alle deler i ett PDF-sett, Mine profiler for egendefinerte profiler, P-Delta og egenfrekvenser, vindlaster etter ASCE 7, jordskjelvsted og kombinasjoner, samt markører for alle i en Live-økt og Følg.
keywords: hva er nytt, endringer, utgivelsesnotater, endringslogg, 0.9, britisk stål, blue book, ub, uc, pfc, shs, rhs, chs, vinkeljern med ulike ben, verkstedtegning, verkstedtegninger, arksett, delenummer, pdf, mine profiler, egendefinert profil, p-delta, andre orden, egenfrekvens, endelige elementer, modal masse, vindlast, asce 7, jordskjelv, grunnklasse, usgs, lastkombinasjoner, lrfd, asd, live, markører, følg, personer, verktøytips, 0.8, 0.8.1, versjon, nye funksjoner, montasje, kran, lastdiagram, film, autopilot, forbindelser, armering, trengsel, fundament, setning, bindingsverk, lettbygg, kutteliste, konstruerbarhet, sveiseadkomst, leverandør, lager, leveringstid, hva går først i stykker, betong, seismisk, språk, assistent
from: 4c95a2de
---

Dette er endringene i DetailCraft 0.9, sammenlignet med 0.8.1. 0.9 gir de britiske stålstørrelsene, en verkstedtegning for hver del i ett og samme trekk, en større fane {{ui:Analyse}} for rammer, og en visning av hverandres markører når dere jobber sammen.

## Nytt

### Britisk stål og verkstedtegninger

- **Britiske stålstørrelser.** Profillistene har nå 976 størrelser fra Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS og RHS. De kaldformede hulprofilene holdes adskilt (navnene deres starter med CF). Navnene skrives med familien først, for eksempel UB305x165x40 eller SHS100x100x5.0. Det går også å skrive dem slik tegningene sier det: 305x165x40 UB, L100x100x10, SHS100x5. Se [Profilkatalog](topic:profile-catalog).
- **Vinkeljern med ulike ben.** UEA-vinkeljern beholder begge bena gjennom IFC inn og ut og gjennom NC-filer, og et {{ui:Speil}} snur delen fra ende til ende.
- **Alle verkstedtegninger på én gang.** Velg {{ui:Verkstedtegning}} i gruppen {{ui:Utdata}} uten at noe er valgt. Vinduet lister opp alle delenumrene og viser en forhåndsvisning av hvilket som helst av dem. {{ui:Last ned alle}} lagrer ett PDF-dokument med en side per delenummer, hver med tittelen «Ark 3 av 42». {{ui:Last ned PDF}} lagrer arket du ser på. U-profiler, vinkeljern og hulprofiler får nå ark også. Se [Lag verkstedtegninger](topic:shop-drawings).
- **Mine profiler.** En egendefinert profil kan nå beholdes for hver ny modell. I skjemaet for egendefinert profil lar du {{ui:Behold i Mine profiler}} stå avkrysset. Listen {{ui:Mine profiler}} under den har {{ui:Behold}}, {{ui:Bruk her}} og {{ui:Fjern}}. Listen lagres i denne nettleseren (opptil 200), ikke på kontoen din. Se [Plater og profiler](topic:plates-and-profiles).

### Analyse

- **Andre orden (P-Delta).** Kryss av for {{ui:Andre orden (P-Delta)}} ved siden av {{ui:Kjør}} i fanen {{ui:Analyse}}, så virker aksialkreftene på den deformerte rammen. Plater og stive dekker forblir førsteorden, med en advarsel. Se [Krefter, reaksjoner og nedbøyninger](topic:frame-analysis).
- **Egenfrekvenser.** Blokken {{ui:Endelige elementer: egenfrekvenser}} under resultatene finner de laveste egenformene for samme modell, med periode og effektiv modal masse, og viser en egenform på modellen. Se [Krefter, reaksjoner og nedbøyninger](topic:frame-analysis).
- **Vindlaster og jordskjelvsted.** Tre nye blokker i fanen {{ui:Analyse}}: {{ui:Vindlaster (ASCE 7, retningsprosedyre)}}, {{ui:Jordskjelv: sted og system (ASCE 7)}} og {{ui:ASCE 7-lastkombinasjoner}}. Se [Vind, jordskjelvsted og ASCE 7-kombinasjoner](topic:wind-seismic-combinations).

### Sammen

- **Markører og navn.** I en Live-økt tegnes hver persons peker inn i modellen med navn og farge, og det de har valgt, får en boks.
- **Følg en person.** Åpne {{ui:Personer}} i økten og velg {{ui:Følg}} ved et navn. Visningen din beveger seg med deres. Verten kan velge {{ui:Be alle om å følge meg}}. Se [Følg en person i en Live-økt](topic:follow-in-live).

### I alle apper

- Verktøytips er Bootstrap-tips, startkortet for tips har en lukkeknapp, fanerekkene ruller sideveis når de ikke får plass, og nettleserfanen viser navnet på det åpne dokumentet etterfulgt av DetailCraft og CadCraft.

## Rettet

- En egendefinert profil gikk tapt når du startet en ny modell.
- U-profiler, vinkeljern og hulprofiler manglet i verkstedtegningssettet.

## Ærlige begrensninger

- Vind-, jordskjelv- og endelige elementer-blokkene er kontrollhjelpemidler. Ingeniøren din gjennomgår resultatene; de er ikke en normkontroll. USGS-oppslaget ble testet mot en erstatningstjeneste, ikke mot den virkelige tjenesten.
- Endelige elementer og P-Delta ble kontrollert mot beregninger for hånd og lukkede løsninger, ikke mot en ekte bygning. Knekkanalyse er ikke bygget ennå.
- Ingen britisk verksted har prøvd de britiske størrelsene ennå, og NC-filer for vinkeljern med ulike ben er ikke kjørt på en maskin.
- Verkstedtegningssettet finnes bare som PDF.
- Språk utover engelsk er maskinutkast.
- Installasjonsprogrammene for Windows er ikke kodesignert (Mer informasjon, og så Kjør likevel). Diskbildet for macOS er ikke notarisert (høyreklikk, og så Åpne).

Tidligere endringer står i notatene for 0.8 og 0.8.1 lenger ned på denne siden.

## Tidligere: 0.8 og 0.8.1

Dette er endringene i DetailCraft 0.8 (1. november 2026) og 0.8.1 (2. november 2026), sammenlignet med 0.7. 0.7 kontrollerte stavene i stål. 0.8 planlegger løftene, foreslår forbindelsene, kontrollerer fundamentene og armeringen, og rammer inn vegger, dekker og tak i tre og lettbygg.

### Nytt

**Montasje**

- **Montasjeplan og film.** I fanen {{ui:Montasje}} beskriver du en kran (hvor den står, den høyeste kroken, løfteutstyret som ikke er med i diagrammet) og skriver inn radene i lastdiagrammet. DetailCraft løfter modellen én sammenstilling om gangen, i fasenes rekkefølge og lag for lag, og kontrollerer hvert løft mot diagrammet ved radiusen og mot margen du har satt. {{ui:Lagre film}} skriver én HTML-fil som spilles av frakoblet i en hvilken som helst nettleser, også på telefon. Løft som er over diagrammet, utenfor det eller for høye, står i {{ui:Problemer}}. Det er en plan basert på tallene dine, ikke en løfteplan. Se [Montasjeplan og film](topic:erection-movie).

**Forbindelser**

- **Autopilot for forbindelser.** Fanen {{ui:Autopilot}} ser på hvert knutepunkt som mangler forbindelse, og foreslår en ut fra profilene: fotplater, skjærlapper, endeplater for bjelkene du merker som momentbjelker, skjøter og knutepunktsplater. Oppgi en jevnt fordelt last eller én skjærkraft i enden, så følger antall bolter boltens dimensjonerende styrke. {{ui:Legg til alle}} legger til forslagene som ett trinn med Angre. De er startverdier å gjennomgå, ikke en forbindelsesdimensjonering.
- **Kontroller for konstruerbarhet.** {{ui:Problemer}} for en bolt en skiftnøkkel ikke når, bolter for tett på nøkkelhylsen, kilsveiser utenfor størrelsesgrensene og hulprofiler som holder vann. Sveisetilgang er ny: en rundtgående kilsveis som sveiserens brenner ikke når, står oppført med delen som er i veien og andelen av sveisen som berøres. Se [Kontroller for konstruerbarhet](topic:constructability).

**Fundamenter og armering**

- **Fundamentkontroller.** Fanen {{ui:Fundament}} kontrollerer fundamenter, sammensatte fundamenter og plater på grunnen du beskriver: bæreevne, glidning og velting fra bruksbelastninger, og bøying, skjær, gjennomstansing, forankring og minimum armering fra dimensjonerende laster (ACI 318-19). En søyle nær en kant eller et hjørne kontrolleres med snittet som er avkuttet av fundamentets kant. Setninger følger av jordens E-modul, en fleksibel plate løses på fjærer fra en undergrunnsmodul, og pælegrupper og støttemurer har egne paneler. Søylelaster kan skrives inn eller hentes fra {{ui:Analyse}}. Se [Fundamentkontroller](topic:foundation-checks).
- **Armeringstrengselskart.** Fanen {{ui:Trengsel}} tegner et varmekart over hvert fundament sett ovenfra: der jernene gir for lite rom til at betongen kommer ned. Kartet sammenligner med regelen for fri avstand og, hvis du oppgir dem, største tilslag og vibratorhodet. Se [Armeringstrengselskart](topic:rebar-congestion).

**Bindingsverk og levering**

- **Tre- og lettbyggbindingsverk.** Fanen {{ui:Bindingsverk}} rammer inn vegg-, gulv- og takpaneler med hvert stykke, en kutteliste, materialene som skal kjøpes og en verkstedtegning i målestokk. {{ui:Plasser som staver}} setter stykkene inn i modellen, og {{ui:PDF-ark}} lagrer ett ark for hvert panel. Dimensjonene, avstandene og overliggerne er dine: DetailCraft kontrollerer ikke at de bærer lasten. Se [Panel for tre- og lettbyggbindingsverk](topic:framing-panels).
- **Leverandørlager og leveringstider.** Fanen {{ui:Levering}} leser en leverandørs lagerliste (CSV) og viser, for hver profil som kutte-listen krever, om det er nok på lager og hvor lang ventetiden er. Mangler og forsinkede profiler står i {{ui:Problemer}}. Ingenting bestilles. Se [Leverandørlager og leveringstider](topic:supplier-stock).

**Analyse og dimensjonering**

- **Hva går først i stykker?** I fanen {{ui:Analyse}} finner knappen kombinasjonen for styrke som styrer, den svakeste staven, hvor langt lastene kan øke før den første staven når sin grense, og den svakeste endeplaten eller skjærlappen der boltenes skjærstyrke er kjent. Den trenger kombinasjonene og en dimensjoneringsstandard først. Opplegging, blokkskjær, sveiser og utbøyning er ikke kontrollert. Din tilkoblede assistent kan be om det samme.
- **Live.** Kryss av for {{ui:Live: løs på nytt etter hver redigering}}, så løses rammen på nytt etter hver redigering.
- **Mer betong.** En slank søyle i en ikke-svaiende ramme dimensjoneres for sitt forstørrede moment (ACI 318-19 6.6.4.5). Seismisk periode kan hentes fra analysen med Rayleighs metode. Et dekke laget av plater får armeringen hvert lag trenger ut fra momentene, og enveisskjæret. Se [Kontroller betongelementer og lag seismiske laster](topic:concrete-and-seismic).
- **Til kontroll av en ingeniør.** Resultatene for fundament, betong og Hva går først i stykker er hjelpemidler. Vindlaster er ikke bygget ennå.

**I alle apper**

- **Språk.** Hjelpen finnes på 54 språk. De utenom engelsk er maskinutkast til en morsmålstalende har lest dem. Ti er nye: litauisk, latvisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili og usbekisk.
- **Verktøylinjerader.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Verktøylinjerader}} velger brytning, 2 rader eller 1 rad. En linje som allerede får plass, forblir slik den er; de andre ruller sideveis.
- **Egenskapsrutenett.** Fundamentets felt bruker det felles rutenettet: sammenleggbare kategorier og kompakt tetthet. Skrevne regnestykker, som 2*450, virker fortsatt.
- **Inndataenheter.** Styreflate, penn, 3D-mus, kontroller og MIDI kan styre appene. Se [Naviger i 3D](topic:navigate-3d).
- **Problempanelet.** Advarslene fra de nye kontrollene over vises i samme {{ui:Problemer}}-panel som før.
- **Koble til KI-en din.** Din egen assistent, koblet til gjennom CadCraft Studio, virker med alle åtte appene og ser bare det du tillater. Tilkobling med ett klikk, den vertsbaserte koblingen og din egen API-nøkkel i Studio kommer fortsatt. Se [Bruk DetailCraft med en KI-assistent](topic:use-with-ai-assistants).

### Rettet i 0.8.1

- **Språk i Studio.** Studio og de pakkede utgavene kan bytte språk mens de kjører; før var de bare på engelsk. Det er ikke testet på alle plattformer ennå: si fra hvis språket ikke endrer seg.
- **Valg med kryssingsvindu.** Installasjonsprogrammene for 0.8.1 har oppførselen for valg med vindu som allerede var riktig i nettversjonen av 0.8. Et eldre installasjonsprogram hadde den ikke.
- **Nettbrett i stående retning.** Ledig rutenettshøyde går til tegneflaten, og arkoppsettet starter ved 760 px eller mindre.

### Ikke i denne versjonen ennå

- **Send NC til en maskin** er ikke utgitt.
- **Vindlaster** for betong er ikke bygget ennå, og kontrollene for betong og fundament er til gjennomgang av en ingeniør.
- **Kodesignering.** Installasjonsprogrammene for Windows og .dmg-filen for macOS er ikke signert. Windows kan derfor advare, og macOS ber om høyreklikk, og så Åpne.

Tidligere endringer står i [Hva er nytt i 0.7](topic:whats-new-0-7).
