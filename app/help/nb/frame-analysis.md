---
title: Analyser rammen
summary: Krefter, reaksjoner og utbøyninger i bjelker, søyler og avstivninger slik de er tegnet, under lasttilfeller og kombinasjoner du velger. Et analysehjelpemiddel, ikke en normkontroll; dimensjoneringskontrollene er et eget trinn.
keywords: analyse, konstruksjonsanalyse, rammeanalyse, stivhetsmetoden, laster, lasttilfelle, kombinasjon, egenlast, nyttelast, egenvekt, reaksjoner, bøyemoment, skjærkraft, normalkraft, utbøyning, utbøyd form, opplager, ledd, innspent, frigjøring, rapport, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Fanen {{ui:Analyse}} nederst finner kreftene i hver bjelke, søyle og avstivning i modellen, reaksjonene under søylefotene og hvor mye stavene bøyer seg, for lastene som er oppgitt.

:::warning
Det er et **analysehjelpemiddel, ikke en normkontroll**. Analysen bruker ingen dimensjoneringsnorm: den dimensjonerer ikke staver, kontrollerer ikke kapasiteter eller forbindelser, og velger ikke lastfaktorer. En ingeniør kontrollerer modellen, lastene og opplagrene, og avgjør hva tallene betyr. For kontroll av staver etter ASCE 7 / AISC 360 eller EN 1990 / EN 1993-1-1, se [Kontroller stålstaver etter en dimensjoneringsnorm](topic:design-checks), et eget trinn som også er et hjelpemiddel.
:::

## Kjør den

1. Åpne fanen {{ui:Analyse}}.
2. Velg ett eller flere elementer i visningen, velg et {{ui:Tilfelle}}, en {{ui:Last}} og en {{ui:Retning}}, skriv inn verdien og trykk {{ui:Legg til last}}. En last fordelt langs en stav er i kN/m, en punktlast i kN. {{ui:Ned (tyngdekraft)}} er den vanlige.
3. Trykk {{ui:Kjør analyse}}.

Tabellen lister for hver stav den største normalkraften N, skjærkreftene Vz og Vy, bøyemomentene My og Mz, torsjon T og dens utbøyning, med største moment først. Klikk på navnet til en stav for å velge den. Under er reaksjonene i hvert opplager. {{ui:Vis på modellen}} tegner den utbøyde formen, eller én størrelse som diagram ved siden av hver stav, med største verdi skrevet på plassen sin. Resultatene er utdatert så snart modellen endres: kjør analysen på nytt.

Hver last, hvert tilfelle og hver innstilling er ett angretrinn ({{key:Mod+Z}}) og lagres i modellfilen.

## Lasttilfeller og kombinasjoner

Analysen starter med tre: **Egenlast** (stavenes egen vekt, fra de tegnede profilene og 7850 kg/m³), **Nyttelast** (tom) og **Egenlast + nyttelast**. Legg til egne tilfeller (vind, snø …) og kombinasjoner: en kombinasjon legger tilfellene sammen med faktorene som skrives inn. Analysen er lineær, så hvert tilfelle løses én gang, og kombinasjoner er summer. Skriv inn faktorene selv, eller velg en dimensjoneringsnorm og la {{ui:Lag kombinasjoner}} skrive normens faktorer ([Kontroller stålstaver etter en dimensjoneringsnorm](topic:design-checks)).

## Hva rammen består av

- Bjelker, søyler og avstivninger, hver på sin arbeidslinje (linjen som ble tegnet), med profilens reelle egenskaper beregnet fra konturen. Plater, trapper, fundamenter og bolter er ikke del av rammen.
- En stav deles der enden til en annen stav treffer den, slik at en bjelke som kobler seg til en søyle midt i høyden, forbindes der.
- **Søylefot**: innspent (starten) eller leddet (holdt på plass og mot vridning, fri til å dreie). En fotplate gir alltid et opplager.
- **Bjelkeender**: en endeplate er stiv, en skjærtunge er leddet. {{ui:Bjelkeender uten forbindelse}} setter resten. **Avstivninger** er leddet i begge ender.
- Velg én stav for å gi dens ender, eller en søylefot, en egen regel.
- Stål overalt: E = 200 GPa, G = 77 GPa.

Hvis rammen kan bevege seg uten å bøye noe (en mekanisme, for eksempel leddede fundamenter uten avstivning i én retning), stopper kjøringen og sier hvor og i hvilken retning. Hold den der med et opplager, en stiv forbindelse eller en avstivning.

## Fortegn

N > 0 er strekk. My > 0 gir strekk på stavens lokale −z-side: en bjelke som bøyer seg ned under tyngdekraften har My > 0. Mz > 0 gir strekk på lokal −y-side. Utbøyning måles fra den rette linjen mellom stavens ender. Stavens lokale z peker opp (for en søyle: langs X); de lokale aksene dreies med stavens rotasjon.

## Rapporten

{{ui:Rapport (PDF)}} og {{ui:Rapport (CSV)}} inneholder alt: forutsetningene rammen er bygget på, profiler, tilfeller og kombinasjoner, og deretter for hvert tilfelle og hver kombinasjon reaksjonene (med summene av laster og reaksjoner, som balanserer), stavkreftene og forskyvningene, og en omhyllingskurve for alle tilfeller. {{ui:Eksporter som CraftScript}} skriver den samme rammen som et skript for PartCrafts arbeidsområde for skript, der biblioteksfunksjonen `frame3d` løser den steg for steg i lesbar kode.

## Metode

Den direkte stivhetsmetoden, lineær og førsteordens med mindre Annenordens (P-Delta) er avkrysset: to-noders bjelke-søyler med aksial-, torsjons- og to bøyestivheter (ingen skjærdeformasjon, ingen vridning), endefrigjøringer ved statisk kondensering, og laster langs staver via stavenes egne formfunksjoner. Svarene kontrolleres mot klassiske lærebokfall (utkragere, enkle, innspente og kontinuerlige bjelker, en portalramme, et rutenett i torsjon, et fagverk).

**Annenordens (P-Delta).** Kryss av for *Annenordens (P-Delta)* ved siden av Kjør: hver kombinasjon løses på nytt med stavenes aksialkrefter som virker på den utbøyde rammen (hver stav deles i 4 deler, slik at bøyningen av en stav mellom endene også telles), til aksialkreftene stabiliserer seg. Resultatlinjen gir antall gjennomganger og hvor mye sideforskyvningen økte. Momentene, utbøyningene, dimensjoneringskontrollene og rapporten bruker så disse resultatene. Over rammens elastiske knekklast stopper kjøringen og sier det. Den er elastisk med små rotasjoner, bare bøying, uten stivhetsreduksjon eller fiktive laster (ikke AISCs metode for direkte analyse alene). Dekker, vegger og stive gulv forblir førsteordens.

**Egenfrekvenser (elementmetoden).** Blokken {{ui:Endelige elementer: egenfrekvenser}} under resultatene finner de laveste svingeformene for den samme modellen med elementmetodemotoren: bjelker med sine endefrigjøringer, dekker og vegger som flate firenodeskall, stive gulv og opplager. Velg hvor mange former (3, 6, 10 eller 20) og dekkelementet (firenodeskallet for tykke eller tynne dekker, eller det tynne dekkelementet), og trykk {{ui:Finn frekvensene}}. Tabellen gir hver forms frekvens i Hz, perioden i sekunder og den effektive modalmassen langs X, Y og Z som andel av massen som kan bevege seg. {{ui:Vis på modellen}} tegner en valgt form på samme måte som den utbøyde formen. Massen er materialets tetthet ganger volumet: laster gir ingen masse, og et materiale uten tetthet har ingen masse. Rapporten (PDF, CSV) inneholder tabellen. Den er elastisk og gjelder bare små bevegelser, og det lages ingen jordskjelv- eller vindlast etter norm her. Ikke en normkontroll; ingeniøren gjennomgår resultatene.

**Responsspekter, tidshistorie og pushover.** Tre blokker til sitter under frekvensene og bruker den samme elementmodellen. Massen for alle er materialets tetthet pluss de nedadrettede lastene i tilfellene som er avkrysset, hver ganget med en faktor som skrives inn (for eksempel Egenlast til 1 og Nyttelast til den andelen som regnes som masse).

{{ui:Responsspekter}} leser av hver form fra et spekter som oppgis (en tabell med periode og akselerasjon, eller ASCE 7-formen fra SDS, SD1 og TL; knappen {{ui:Bruk verdiene fra seismikkblokken}} kopierer dem fra seismikkblokken). Formene kombineres med CQC, SRSS, ti-prosent-regelen eller en absoluttsum, og X-, Y- og Z-retningene settes sammen (100 % + 30 % eller SRSS). Den gir grunnskjærkraft, etasjeforskyvninger, stavendekrefter og en formtabell som varsler når de brukte formene bærer mindre enn 90 % av massen. Resultatene kan skaleres med en faktor eller opp til en grunnskjærkraft som skrives inn; blokken beregner aldri den grunnskjærkraften selv. Resultatene har ingen fortegn.

{{ui:Tidshistorie}} kjører en bakkeakselerasjon ved modal superposisjon (eksakt for opptakets rette linjer mellom punkter) eller ved direkte integrasjon (Newmarks gjennomsnittlige akselerasjon med Rayleigh-demping). Inndata er en oppdiktet sinus eller puls (alltid merket som syntetisk), et opptak som limes inn, eller en tekstfil som åpnes (tid og akselerasjon, én akselerasjon per linje med et steg, eller en PEER-lignende fil med en DT=-topptekst; i g eller m/s²). Den gir takforskyvningen og grunnskjærkraften mot tid, forskyvningen av hvert nivå og omhyllingskurven for stavendekreftene. Modeller med et svært langt opptak beholder det bare for økten.

{{ui:Pushover}} skyver taket sideveis i små steg (mønster som første form, eller jevnt), med plastiske ledd i endene av staver som har I-form. Et ledd gir etter ved det plastiske momentet, som synker når aksialkraften vokser (beregnet fra den tegnede formen, filet ignorert). Herding er valgfri, P-delta er valgfri, og en tyngdekraftkombinasjon kan brukes først. Den gir kapasitetskurven (grunnskjærkraft mot takforskyvning), det første leddet, og tilstanden og den plastiske rotasjonen til hvert ledd. {{ui:Kjør den ikke-lineære tidshistorien}} kjører de samme leddene under opptaket fra tidshistorieblokken på små modeller. Ledd dannes bare i stavendene (sett en node der et ledd skal dannes inne i et spenn). En stav frigjort i begge ender får ingen. Flyt og knekking av avstivninger modelleres ikke, dekker og vegger forblir elastiske, og det gis ingen akseptkriterier. Ikke en normkontroll; ingeniøren gjennomgår resultatene. Innstillingene lagres med modellen, og rapporten inneholder tabellene.

Ikke bygget ennå: knekkanalyse, en korreksjon for manglende masse i responsspekteret, skalering av opptak, akseptkriterier for ledd (dynamisk respons finnes, over), areal- og vindlaster laget automatisk (jordskjelvkrefter på dekker finnes i [Kontroller betongstaver og lag seismiske laster](topic:concrete-and-seismic)), stavforskyvninger, og avstivninger som bare tar strekk. Se [Ikke bygget ennå](topic:not-built-yet).
