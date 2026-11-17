---
title: Fundamentkontroller
summary: Kontroller fundamenter, kombinerte fundamenter og fundamentplater mot grunnen du beskriver, setning, en fleksibel plate på fjærer, pelegrupper og støttemurer. Et hjelpemiddel for en ingeniør å kontrollere.
keywords: fundament, kombinert fundament, fundamentplate, setning, undergrunnsmodul, fjærer, randsøyle, hjørnesøyle, bæreevne, glidning, velting, gjennomstansing, ensrettet skjær, bøying, forankring, minimumsarmering, pelegruppe, støttemur, ACI 318-19
from: 6961ad52
---

:::warning
Dette er førstegangskontroller for en ingeniør å gjennomgå, ikke en godkjenning av prosjektering. Tillatt bæretrykk og friksjonskoeffisienten settes av brukeren; DetailCraft kjenner ikke grunnen.
:::

Fanen {{ui:Fundament}} kontrollerer fundamentene i modellen mot søylelastene som er oppgitt for dem.

## Beskriv grunnen

Skriv inn {{ui:Tillatt bæretrykk}} og {{ui:Friksjonskoeffisient under sålen}}. Begge starter på 0, som betyr ikke oppgitt: kontrollen viser da trykket som en merknad, og sier ikke at det består. For setning skrives grunnens modul {{ui:Es}} (MPa), Poissons tall og den setningen som tillates (25 mm til å begynne med) inn. For en fleksibel plate skrives en undergrunnsmodul {{ui:ks}} inn. Fyllingen over fundamentet, grunnens tyngdetetthet, sikkerhetsfaktorene for glidning og velting (1.5 til å begynne med) og flytegrensen for stålet i stengene finnes der også.

## Gi lastene

Hvert fundament har en liste med søylelaster. Velg {{ui:Legg til en søylelast}} og fyll inn bruksraden (for bæreevne, glidning og velting) og den dimensjonerende raden (for styrkekontrollene): den vertikale lasten P nedover, de horisontale kreftene Vx og Vy på fundamentets topp, momentene Mx og My, søylens plassering på fundamentet og dens størrelse.

Eller kjør fanen {{ui:Analyse}} og trykk {{ui:Hent søylelaster fra analysen}}: hvert opplager som står på et fundament, blir til en søylelast, fra bruks- og dimensjoneringssettene som velges. Et positivt My laster +x-siden av fundamentet mer; et positivt Mx laster −y-siden mer.

## Hva som kontrolleres

Fra bruksbelastningene, med fundamentets egen vekt og fyllingen lagt til:

- **Bæretrykk:** trykket under et stivt fundament. Innenfor midtre tredjedel er hele sålen i kontakt; utenfor løftes en del av sålen, og toppverdien blir høyere. En resultant utenfor sålen gir feil.
- **Glidning:** friksjon ganger den vertikale lasten, mot den horisontale kraften.
- **Velting:** resultantens avstand fra kanten.
- **Setning:** den elastiske setningen av gjennomsnittstrykket på et halvrom med modulen som er oppgitt, i midten og i et hjørne (Timoshenko og Goodiers løsning for en fleksibel rektangel), mot grensen. Det er en øvre grense for et stivt fundament, og det ser bort fra et jordlag med begrenset dybde, avlastning av utgravd jord og konsolidering. Uten modul viser det trykket som en merknad.

Fra de dimensjonerende søylelastene alene (ACI 318-19):

- **Bøying** ved søylens flate, med minimumsarmering (0.0018 for 420 MPa-stenger) og stengene som er tegnet.
- **Ensrettet skjær** i avstand d fra flaten.
- **Gjennomstansing** i avstand d/2 rundt hver søyle, med søylens moment. For en søyle nær en kant kuttes det kritiske snittet av fundamentets kant (tre sider ved en kant, to ved et hjørne, ACI 318-19 22.6.4.1 og den mindre αs i tabell 22.6.5.2), og momentet om snittets eget senter inkluderer forskyvningen av lasten.
- **Forankring** av stengene forbi søylens flate, rette eller med kroker.
- **Dybde** over bunnstengene (150 mm).

Et kombinert fundament eller en fundamentplate regnes som stiv, og skjær og moment kommer fra statikk på snitt over hele bredden.

## En fleksibel plate på fjærer

Kryss av for {{ui:Analyser dette fundamentet som en fleksibel plate på fjærer}} når fundamentet bærer mange søyler og det stive fundamentet er for grovt. Fundamentet blir en plate av firenodeelementer på et underlag av fjærer (de {{ui:ks}}-verdiene som er skrevet inn, samlet i nodene), og hver søyles last fordeles på nodene i sitt eget fotavtrykk. En annen tabell gir største jordtrykk og setning (og forskjellen mellom største og minste), bøyemomentet i hver retning med armeringen det trengs, strekk på toppen mot betongens vanlige styrke (et fundament har ingen toppstenger), ensrettet skjær i avstand d fra søylene, og gjennomstansing på fjærenes eget trykk. Nettet forfines til en søyle er tre elementer bred; en stor plate tar noen få sekunder. Platens egen vekt og jorden over den oppheves og utelates.

Hver mislykket kontroll står i panelet {{ui:Problemer}} med tilhørende bestemmelse.

## Pelegrupper og støttemurer

{{ui:Legg til en pelegruppe}} plasserer et rutenett av peler under et stivt pelehode: skriv inn lasten og momentene, og hva én pel kan bære i trykk og i strekk (tallene fra pelerdimensjoneringen, ikke fra denne fanen). Hver pels reaksjon er P/n pluss sin andel av momentene (den elastiske metoden), og den største trykkraften og eventuell strekk kontrolleres.

{{ui:Legg til en støttemur}} kontrollerer en konsollmur på horisontal fylling, per meter: Rankines aktive jordtrykk, velting om tåen, glidning og trykk under sålen. Passivt trykk foran tåen utelates. Assistenten kan kjøre de samme kontrollene med `pile_group_check` og `retaining_wall_check`.

Pelegrupper, murer og bryteren for fleksibel plate lagres i modellfilen, og en mislykket kontroll står i {{ui:Problemer}}.
