---
title: Vind, jordskjelvsted og ASCE 7-kombinasjoner
summary: Lag vindlasttilfeller for en lukket, stiv bygning, beregn de seismiske dimensjonerende verdiene for et sted, og lag ASCE 7-kombinasjonene, i fanen Analyse.
keywords: vind, vindlast, asce 7, retningsprosedyre, eksponering, innhylling, jordskjelv, grunnklasse, ss, s1, sds, sd1, usgs, dimensjoneringsspekter, lastkombinasjoner, lrfd, asd, kzt, kd, vindkast
from: 676fcbf3
---

Tre blokker i fanen {{ui:Analyse}} lager vind- og jordskjelvinndata for en ramme og kombinerer dem: {{ui:Vindlaster (ASCE 7, retningsprosedyre)}}, {{ui:Jordskjelv: sted og system (ASCE 7)}} og {{ui:ASCE 7-lastkombinasjoner}}. De er hjelpemidler: **ikke en normkontroll; ingeniøren din gjennomgår resultatene.**

## Hva du skal gjøre

Lag vindlasttilfeller for en lukket, stiv bygning, hent de seismiske verdiene for et sted, og lag kombinasjonene som bruker dem. Modellen trenger etasjer, så kjør analysen først (se [Krefter, reaksjoner og nedbøyninger](topic:frame-analysis)).

## Trinn

1. Åpne fanen {{ui:Analyse}} og velg {{ui:Kjør}}, slik at etasjene og størrelsen på bygningen er kjent. Hvis en blokk sier at det ikke finnes etasjer, velg {{ui:Finn etasjer}} i den.
2. I {{ui:Vindlaster (ASCE 7, retningsprosedyre)}} velger du {{ui:Utgave}}, skriver inn {{ui:Basisvindhastighet V}} fra vindkartet ditt og velger {{ui:Hastighetsenhet}}, deretter {{ui:Eksponering}} og {{ui:Innhylling}}. Kzt, Kd, G, terrengkoten, Cp på lesiden, eksentrisiteten og retningen er der også.
3. Les trykket på hver etasje og kraften på hver etasje i tabellen, og velg {{ui:Lag vindlasttilfeller}}. Tilfellene er +X, -X, +Y og -Y.
4. I {{ui:Jordskjelv: sted og system (ASCE 7)}} velger du utgaven og skriver inn Ss og S1 (SMS, SM1 og S1 for ASCE 7-22), grunnklassen A til D, risikokategorien og det seismisk lastbærende systemet. Eller skriv inn breddegrad og lengdegrad og velg {{ui:Slå opp i USGS (på nett)}}. Den spør nettjenesten bare når du velger den.
5. Les Fa, Fv, SDS og SD1, R, Cd og Omega0 og dimensjoneringsspekteret, og velg {{ui:Bruk i jordskjelvblokken}}. Velg {{ui:Lag seismiske tilfeller}} i jordskjelvblokken (se [Kontroller betongelementer og lag seismiske laster](topic:concrete-and-seismic)).
6. I {{ui:ASCE 7-lastkombinasjoner}} velger du {{ui:Metode}} (LRFD eller ASD) og velger {{ui:Lag ASCE 7-kombinasjoner}}. Kjør analysen på nytt.

## Greit å vite

- Vind: bare en lukket, stiv bygning, med retningsprosedyren. En fleksibel bygning trenger en vindkastfaktor fra standarden, som DetailCraft ikke lager.
- Grunnklasse E og F krever en grunnundersøkelse og er ikke bygget ennå.
- En kildeliste nederst i blokkene sier hvor hvert tall kommer fra, og hva som er utelatt.
- USGS-oppslaget ble testet mot en erstatningstjeneste, ikke den virkelige tjenesten.
