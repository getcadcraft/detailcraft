---
title: Koble bjelker til søyler med endeplater
summary: Legg til boltede endeplater der en bjelke møter en søyleflens eller et søyleliv, sett platen, boltene og sveisen, og kopier forbindelsen til alle lignende skjøter.
keywords: endeplate, stiv forbindelse, boltet forbindelse, skjøt, bolter, sveis, utvidet endeplate, flush, lignende, kopier forbindelse, komponent
from: 21e028b2
---

En endeplateforbindelse sveiser en plate til bjelkeenden og bolter den til søyleflensen eller -livet. DetailCraft plasserer platen, kapper bjelken tilbake, borer tilsvarende hull i platen og søyleflensen, legger til boltene og sveisen, og kontrollerer kantavstander og avstander.

:::warning
DetailCraft dimensjonerer ikke forbindelser. Innstillingene er startverdier som du skal endre; ingenting kontrollerer styrken. Kant- og avstandsadvarslene bruker minimumsverdiene i EN 1993-1-8 tabell 3.3, som kan avvike fra reglene du jobber etter.
:::

## Hva den kan koble

- En **horisontal** bjelke (begge ender i samme høyde), rett (rotasjon 0), med en I-profil.
- Inn i **flensen** eller **livet** på en **vertikal** I-profilsøyle, vinkelrett på den.
- Bjelkeenden må ligge på søylens linje, mellom søylens underkant og overkant.

Skrå eller skråstilte bjelker og ikke-I-profiler avvises med en grunn: bruk [skjærflikker](topic:shear-tabs) for dem. På et liv må platen og bjelkeflensene passe mellom søyleflensene; DetailCraft advarer når de ikke gjør det.

:::tip
Ved rotasjon 0 vender søylens flenser langs den nummererte rutenettretningen (x). En bjelke som går fra A til B møter livet, og får en endeplate på livet.
:::

## Legg til endeplater på en bjelke

1. Velg {{ui:Velg}} ({{key:V}}) og klikk på bjelken.
2. Velg {{ui:Endeplater}} i gruppen {{ui:Forbind}}, eller {{ui:Legg til endeplater}} i panelet {{ui:Egenskaper}}.
3. Hver fri ende av bjelken som møter en søyleflens eller et søyleliv vinkelrett, får en plate. Statuslinjen sier «2 endeplater lagt til. Velg én for å endre platen, boltene og sveisen; Lignende kopierer den til lignende skjøter.»
4. Den første nye endeplaten er valgt, og innstillingene dens vises i panelet {{ui:Egenskaper}}.

Hvis ingenting skjer, les statuslinjen:

- «Denne bjelken ender ikke på en søylelinje. Endeplater settes der en bjelkeende møter en vertikal søyle.»
- «Denne bjelken møter en søyle i en vinkel eller skråner: endeplater er laget for vinkelrette, horisontale skjøter. Bruk Skjærflikker.»
- «Begge ender har allerede forbindelser.»

## Endre platen, boltene og sveisen

Klikk på endeplaten (eller en av boltene) for å velge forbindelsen. Under {{ui:Plate, bolter og sveis (mm)}}:

| Innstilling | Standard | Hva den gjør |
|---|---|---|
| Platetykkelse | 20 | Platens tykkelse; også hvor langt bjelken kappes tilbake forbi flensen |
| Platebredde | 180 | Tvers over skjøten |
| Forlengelse over bjelken | 0 | Over overflensen; over 0 gir en utvidet endeplate |
| Forlengelse under bjelken | 0 | Under underflensen |
| Boltdiameter | 20 | Nominell boltstørrelse |
| Hulldiameter | 22 | Ditt klaringshull i platen og søyleflensen |
| Boltkvalitet | A325 | Tekst; skrives ut i materiallisten |
| Boltrader | 4 | Rader med to bolter, sentrert på platehøyden |
| Radavstand | 75 | Vertikal avstand mellom radene |
| Gauge | 100 | Horisontal avstand mellom de to boltene i en rad |
| Tillegg for boltlengde | 30 | Lagt til grepet for mutter, skive og gjenge; se under |
| Filetsveisstørrelse | 8 | Rundt hele bjelkeenden |
| Platemateriale | A36 | Tekst |

Skriv en ny verdi og trykk {{key:Enter}} eller {{key:Tab}}. Platen, hullene, boltene og bjelkens kuttlengde oppdateres med en gang. Hver endring er ett angrertrinn.

Under innstillingene ser du hva forbindelsen lager:

- {{ui:Bolter}}: for eksempel «8 × 20 × 70 A325 (grep 36.2)».
- {{ui:Sveis}}: størrelse, hvor, og lengden.
- {{ui:Plate}}: størrelsen og delenummeret.

### Slik regnes tallene ut

- Bjelken kappes tilbake med halvparten av søyledybden (på et liv: halvparten av livtykkelsen) pluss platetykkelsen, slik at platen ligger på flaten.
- Platehøyden er bjelkedybden pluss de to forlengelsene.
- Boltlengde = grep (platetykkelse + søyleflens- eller livtykkelse) + tillegg, avrundet opp til nærmeste 5 mm.
- Den viste sveiselengden er omkretsen av bjelketverrsnittet.

### Advarsler

Forbindelsen bygges fortsatt, men disse vises under den og i fanen {{ui:Problemer}}:

- Boltrader eller bolter nærmere platekanten enn 1.2 × hulldiameteren.
- Radavstand under 2.2 × hulldiameteren, eller gauge under 2.4 × hulldiameteren.
- Hull som løper inn i søylelivet eller dets fillet, eller ut av søyleflensen.
- En plate bredere enn søyleflensen, eller (på et liv) bredere enn plassen mellom flensene; bjelkeflenser som ikke får plass mellom dem.
- En boltrad for nær en bjelkeflens, eller en gauge for trang for bjelkelivet og sveisen.

## Kopier den til alle lignende skjøter

1. Velg forbindelsen du har satt opp.
2. Velg {{ui:Bruk på lignende (n)}} i panelet {{ui:Egenskaper}}, eller {{ui:Lignende}} i menyen {{ui:Mer}} i gruppen {{ui:Forbind}}. Tallet i parentes er hvor mange skjøter som får den.
3. Hver skjøt med samme bjelkeprofil og søyleprofil, bjelke inn i samme type flate, som ikke har en forbindelse fra før, får en kopi med de samme innstillingene. Statuslinjen sier hvor mange.

Kopiene er uavhengige: endrer du én senere, endres ikke de andre. Skjøter som allerede har en forbindelse, lates være; slett dem først hvis du vil ha dem erstattet.

## Flytte og slette

Forbindelsene lages på nytt fra innstillingene sine hver gang modellen endres, så flytting eller endring av størrelse på en bjelke eller søyle tar endeplatene med seg. Hvis en endring gjør at skjøten ikke lenger passer, blir forbindelsen i modellen, og fanen {{ui:Problemer}} sier hvorfor, for eksempel «Bjelkeenden er ikke lenger på søylelinjen.»

For å slette en forbindelse, velg den og trykk {{key:Delete}}. Sletting av bjelken eller søylen sletter forbindelsene også.

Neste: [Legg til fotplater og ankerstenger](topic:base-plates).
