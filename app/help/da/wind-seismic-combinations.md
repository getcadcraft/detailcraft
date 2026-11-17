---
title: Vind, jordskælvssted og ASCE 7-kombinationer
summary: Lav vindlasttilfælde for en lukket, stiv bygning, find jordskælvsdimensioneringsværdierne for et sted, og lav ASCE 7-kombinationerne i fanen Analyse.
keywords: vind, vindlast, asce 7, retningsbestemt metode, eksponering, indelukning, jordskælv, stedklasse, ss, s1, sds, sd1, usgs, designspektrum, lastkombinationer, lrfd, asd, kzt, kd, vindstød
from: 676fcbf3
---

Tre blokke i fanen {{ui:Analyse}} laver vind- og jordskælvsinput til en ramme og kombinerer dem: {{ui:Vindlaster (ASCE 7, retningsbestemt metode)}}, {{ui:Jordskælv: sted og system (ASCE 7)}} og {{ui:ASCE 7-lastkombinationer}}. De er hjælpemidler: **ikke en normkontrol; din ingeniør gennemgår resultaterne.**

## Hvad du skal gøre

Lav vindlasttilfælde for en lukket, stiv bygning, find jordskælvsværdierne for et sted, og lav de kombinationer, der bruger dem. Modellen skal have etager, så kør analysen først (se [Kræfter, reaktioner og nedbøjninger](topic:frame-analysis)).

## Trin

1. Åbn fanen {{ui:Analyse}} og vælg {{ui:Kør}}, så etagerne og bygningens størrelse er kendt. Hvis en blok siger, at der ikke er etager, så vælg {{ui:Find etager}} i den.
2. I {{ui:Vindlaster (ASCE 7, retningsbestemt metode)}} vælger du {{ui:Udgave}}, skriver {{ui:Grundvindhastighed V}} fra dit vindkort og vælger {{ui:Hastighedsenhed}}, derefter {{ui:Eksponering}} og {{ui:Indelukning}}. Kzt, Kd, G, terrænkoten, Cp på læsiden, excentriciteten og retningen står der også.
3. Læs trykket i hver etage og kraften på hver etage i tabellen, og vælg derefter {{ui:Opret vindcases}}. Tilfældene er +X, -X, +Y og -Y.
4. I {{ui:Jordskælv: sted og system (ASCE 7)}} vælger du udgaven og skriver Ss og S1 (SMS, SM1 og S1 for ASCE 7-22), stedklassen A til D, risikokategorien og det jordskælvsbærende system. Eller skriv breddegrad og længdegrad og vælg {{ui:Slå op hos USGS (online)}}; den spørger kun den online-tjeneste, når du trykker på den.
5. Læs Fa, Fv, SDS og SD1, R, Cd og Omega0 samt designspektret, og vælg derefter {{ui:Brug i jordskælvsblokken}}. Tryk på {{ui:Lav jordskælvstilfælde}} i jordskælvsblokken (se [Kontrollér betonelementer og lav jordskælvslaster](topic:concrete-and-seismic)).
6. Vælg i {{ui:ASCE 7-lastkombinationer}} {{ui:Metode}} (LRFD eller ASD), og vælg {{ui:Opret ASCE 7-kombinationer}}. Kør analysen igen.

## Ting at vide

- Vind: kun en lukket, stiv bygning, retningsbestemt metode. En fleksibel bygning kræver en vindstødsfaktor fra standarden, som DetailCraft ikke laver.
- Stedklasse E og F kræver en stedundersøgelse og er ikke lavet endnu.
- En kildeliste nederst i blokkene angiver, hvor hvert tal stammer fra, og hvad der er udeladt.
- USGS-opslaget er testet på en stedfortræder, ikke på den rigtige tjeneste.
