---
title: Nytt i 0.8 og 0.8.1
summary: En montasjefilm fra en krans lasttabell, en autopilot for forbindelser, et kart over armeringstrengsel, fundamentkontroller, rammepaneler for trevirke og lettbygg, kontroller for konstruerbarhet og sveisetilgang, leverandørlager, hva som svikter først, live omregning, flere betongkontroller og rettelsene i 0.8.1.
keywords: nytt, hva er nytt, versjonsmerknader, endringslogg, endringer, 0.8, 0.8.1, versjon, nye funksjoner, montasje, kran, lasttabell, film, autopilot, forbindelser, armering, trengsel, fundament, fot, setning, bindingsverk, trevirke, lettbygg, kuttliste, konstruerbarhet, sveisetilgang, leverandør, lager, leveringstid, hva svikter først, live, betong, seismisk, dekke, språk, assistent
from: 6e33e052
---

Dette er endringene i DetailCraft 0.8 (1. november 2026) og 0.8.1 (2. november 2026), sammenlignet med 0.7. 0.7 kontrollerte stålstaver. 0.8 planlegger løftene, foreslår forbindelsene, kontrollerer fundamentene og armeringen, og rammer inn vegg-, gulv- og takpaneler i trevirke og lettbygg.

## Nytt

### Montasje

- **Montasjeplan og film.** I fanen {{ui:Montasje}} beskriver du en kran (hvor den står, høyeste krok og riggingen som ikke står i tabellen), og skriver inn radene i kranens lasttabell. DetailCraft løfter modellen én monteringsenhet om gangen, i faserekkefølge og lag for lag, og kontrollerer hvert løft mot tabellen ved sin radius og mot marginen du har satt. {{ui:Lagre film}} skriver én HTML-fil som spilles av uten forbindelse i en hvilken som helst nettleser, også på mobil. Løft som er over tabellen, forbi den eller for høye, står i {{ui:Problemer}}. Det er en plan fra tallene dine, ikke en løfteplan. Se [Montasjeplan og film](topic:erection-movie).

### Forbindelser

- **Autopilot for forbindelser.** Fanen {{ui:Autopilot}} ser på hver skjøt som ikke har en forbindelse, og foreslår en ut fra formene: fotplater, skjærlasker, endeplater for bjelkene du merker som momentbjelker, skjøter og knutepunktsplater. Oppgi en jevnt fordelt last eller én endeskjærkraft, så følger antall bolter boltens dimensjonerende styrke. {{ui:Legg til alle}} legger til forslagene som ett trinn å angre. De er startverdier å gjennomgå, ikke en forbindelsesdimensjonering.
- **Konstruerbarhetskontroller.** {{ui:Problemer}} for en bolt en skiftenøkkel ikke når, bolter for tett for en hylsenøkkel, kilsveiser utenfor størrelsesgrensene og hule profiler som holder vann. Sveisetilgang er nytt: en rundtgående kilsveis som ikke kan nås med sveiserens brenner, står i listen med delen som er i veien og andelen av sveisen som berøres. Se [Konstruerbarhetskontroller](topic:constructability).

### Fundamenter og armering

- **Fundamentkontroller.** Fanen {{ui:Fundament}} kontrollerer punktfundamenter, kombinerte fundamenter og matter på grunnen du beskriver: bæreevne, glidning og velting fra bruksbelastninger; bøyning, skjærkraft, gjennomstansing, forankring og minimumsarmering fra dimensjonerende laster (ACI 318-19). En søyle nær en kant eller et hjørne kontrolleres med snittet som er kuttet av fundamentets kant. Setning beregnes fra jordens modul, en fleksibel matte løses på fjærer ut fra en underlagsmodul, og pelegrupper og støttemurer har egne paneler. Søylelaster kan skrives inn eller hentes fra {{ui:Analyse}}. Se [Fundamentkontroller](topic:foundation-checks).
- **Kart over armeringstrengsel.** Fanen {{ui:Trengsel}} tegner et varmekart over hvert fundament sett ovenfra: der armeringen etterlater for lite plass til at betongen kommer ned, mot regelen for fri avstand og, hvis du oppgir dem, største tilslag og vibratorhodet. Se [Kart over armeringstrengsel](topic:rebar-congestion).

### Rammer og levering

- **Rammer i trevirke og lettbygg.** Fanen {{ui:Bindingsverk}} rammer inn vegg-, gulv- og takpaneler med hvert stykke, en kuttliste, materialet som skal kjøpes og en verkstedtegning i skala. {{ui:Plasser som staver}} setter stykkene inn i modellen, og {{ui:PDF-ark}} lagrer ett ark for hvert panel. Dimensjonene, avstandene og overliggerne bestemmer du selv: DetailCraft kontrollerer ikke at de bærer lasten. Se [Rammepaneler i trevirke og lettbygg](topic:framing-panels).
- **Leverandørlager og leveringstider.** Fanen {{ui:Levering}} leser en leverandørs lagerliste (CSV) og viser, for hver profil kuttlisten kjøper, om det er nok på lager og hvor lang ventetiden er. Mangler og forsinkede profiler står i {{ui:Problemer}}. Ingenting bestilles. Se [Leverandørlager og leveringstider](topic:supplier-stock).

### Analyse og dimensjonering

- **Hva svikter først?** I fanen {{ui:Analyse}} finner knappen lastkombinasjonen som styrer, den svakeste stavet, hvor langt lastene kan øke før første stav når sin grense, og den svakeste endeplaten eller skjærlasken der boltenes skjærstyrke er kjent. Den trenger kombinasjonene og en dimensjoneringsnorm først. Opplegg, blokkskjærbrudd, sveiser og prying kontrolleres ikke. Din tilkoblede assistent kan spørre om det samme.
- **Live.** Kryss av for {{ui:Live: løs på nytt etter hver redigering}}, så løses rammen på nytt etter hver redigering.
- **Betong, mer.** En slank søyle i en ramme uten sideforskyvning dimensjoneres for sitt forstørrede moment (ACI 318-19 6.6.4.5). Den seismiske perioden kan hentes fra analysen med Rayleighs metode. Et dekke laget av plater får stålet hvert lag trenger ut fra momentene sine, og enveis skjærkraft. Se [Kontroller betongelementer og lag seismiske laster](topic:concrete-and-seismic).
- **For en ingeniør å kontrollere.** Resultatene for fundament, betong og Hva svikter først er hjelpemidler. Vindlaster er ikke bygget.

### I alle apper

- **Språk.** Hjelpen finnes på 54 språk. Språkene utover engelsk er maskinutkast til en morsmålstalende har lest dem; ti er nye (litauisk, lettisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili, usbekisk).
- **Verktøylinjerader.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Verktøylinjerader}} velger bryt, 2 rader eller 1 rad. En linje som allerede passer, forblir som den er; resten ruller sideveis.
- **Egenskapsrutenett.** Fundamentets felter bruker det felles rutenettet: sammenleggbare kategorier og en kompakt tetthet. Skrevet aritmetikk som 2*450 fungerer fortsatt.
- **Inndataenheter.** Styreplate, penn, 3D-mus, kontroller og MIDI kan styre appene. Se [Naviger i 3D](topic:navigate-3d).
- **Problempanelet.** Advarslene fra de nye kontrollene over vises i samme {{ui:Problemer}}-panel som før.
- **Koble til KI-en din.** Din egen assistent, koblet til via CadCraft Studio, fungerer med alle åtte appene og ser bare det du tillater. Tilkobling med ett klikk, den vertsbaserte koblingen og din egen API-nøkkel i Studio kommer fortsatt. Se [Bruk DetailCraft med en KI-assistent](topic:use-with-ai-assistants).

## Rettet i 0.8.1

- **Språk i Studio.** Studio og de pakkede utgavene kan bytte språk mens de kjører; før var det bare engelsk. Det er ikke testet på alle plattformer ennå. Si fra hvis språket ikke endrer seg.
- **Valg med vindu på kryss.** Installasjonene for 0.8.1 har oppførselen for valg med vindu som allerede var riktig i 0.8-nettversjonen; en eldre installasjon hadde den ikke.
- **Nettbrett i stående retning.** Ledig rutenetthøyde går til lerretet, og arkoppsettet starter ved 760 px eller mindre.

## Ikke i denne versjonen ennå

- **Send NC til en maskin** er ikke utgitt.
- **Vindlaster** for betong er ikke bygget, og betong- og fundamentkontrollene skal gjennomgås av en ingeniør.
- **Kodesignering.** Windows-installasjonene og macOS .dmg-filen er ikke signert, så Windows kan gi en advarsel, og macOS ber om høyreklikk, deretter Åpne.

Tidligere endringer står i [Nytt i 0.7](topic:whats-new-0-7).
