---
title: Generelle oppstillings- og monteringstegninger
summary: Lag planer, fasader og én monteringstegning per sammenstillingsmerke fra modellen, på ark fra A4 til A1 eller ANSI B til D, utgi dem med revisjonsbokstaver, og last dem ned som PDF, DWG eller DXF.
keywords: skjulte linjer, fjerning av skjulte linjer, stiplet, revisjonssky, skyer, revisjonstrekant, ankerboltplan, ankerstenger, stangtabell, fotplatetabell, utsetting, utgivelse, revisjon, rev, revisjonstabell, ny utgivelse, utgivelseslogg, oversending, dwg, dxf, cad-fil, eksporter tegninger, tegninger, generell oppstilling, ga, plan, fasade, monteringstegning, arkstørrelse, papirstørrelse, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, utskrift, målestokk, tegningshode, modellreferanse
from: 709f8604
---

Velg {{ui:Tegninger}} i gruppen {{ui:Utdata}}. DetailCraft lager hele settet fra modellen slik den er nå. Ingenting lagres: endrer du modellen og åpner {{ui:Tegninger}} på nytt, lages settet på nytt.

## Hva settet inneholder

- **Planer**, én per etasje som har noe på seg, sett ovenfra.
- **Fasader**, én per rutenettlinje med staver innen 1 m fra den.
- **Ankerboltplanen**, når modellen har fotplater: hver fotplate sett ovenfra med søylen og ankerstengene, rutenettene med sine mål, en typisk detalj av hvert stangmønster (BP1, BP2 …) med stangavstand og kantavstander, og to tabeller: ankerstengene etter merke (R1, R2 …: antall, diameter, lengde, utstikk over platen, innstøpingsdybde, kvalitet) og fotplatene etter rutenett (søyle, mønster, plate, stenger, platens overkant). En søyle utenfor rutenettet plasseres etter sine koordinater.
- **Monteringstegninger**, én per sammenstillingsmerke: forside-, topp- og endevisninger, kjedede mål til hull og platekanter, delelisten, løse bolter og stenger, og merknader om sveis og hull. Hver sveiset plate har et filetsveisymbol i forsidevisningen (AWS A2.4): pilen peker på skjøten, trekanten under referanselinjen betyr pilsiden, tallet til venstre er sveisestørrelsen i mm, og en sirkel der pilen møter linjen betyr rundt hele.

**Skjulte linjer.** Planer og fasader utelater linjene til en del der en del som ligger helt foran den dekker den (en bjelke sett rett forfra bak en søyle). Monteringstegninger tegner en plate stiplet der hoveddelen dekker den: bak livet i forsidevisningen (sett fra delens −u-side), under overflensen i toppvisningen. Deler som ligger i samme dybde, eller overlapper i dybden, tegnes begge helt opp.

Hvert ark har en tegningshode med tegningsnummer, målestokk, modellnavn, dato, arknummer med arkstørrelse, og modellreferansen: en kode laget fra den lagrede modellen, slik at en utskrift kan knyttes til modellen den kom fra.

## Velg arkstørrelse

Velg størrelsen i listen øverst i vinduet {{ui:Tegninger}}: A4, A3, A2, A1, ANSI B (11 × 17 in), ANSI C (17 × 22 in) eller ANSI D (22 × 34 in). Alle ark er liggende. Settet lages på nytt i den nye størrelsen med en gang, og samme størrelse brukes for verkstedtegninger. Den finnes også i [DetailCraft-innstillingene](topic:settings#drawings), og denne nettleseren husker den.

- Et større ark tegnes i større målestokk. Målestokkene er alltid standard (1:10, 1:20, 1:25, 1:50, 1:100 og så videre).
- Teksten har samme størrelse på alle ark, så den er lesbar når den skrives ut.
- På et lite ark kan en lang, tynn monteringsdel få en større målestokk på tvers enn på langs. Visningstittelen sier da begge målestokkene, og målene styrer.

## Utgi tegninger og revisjoner

Linjen over forhåndsvisningen sier hvor arket som vises står: **Ikke utgitt ennå**, **Rev. B, utgitt …; uendret siden**, eller, i rødt, **Endret siden rev. B: må utgis på nytt**. Arklisten merker utgitte ark med revisjonen sin, og de som må utgis på nytt.

- Skriv hva utgivelsen er for (den starter som «Utgitt for produksjon») og velg {{ui:Utgi dette arket}}, eller {{ui:Utgi endrede ark}} for hvert ark som er nytt eller har endret seg siden det sist ble utgitt.
- Første utgivelse av et ark er revisjon A, deretter B, C og så videre (I og O hoppes over).
- Tegningshodet viser tegningsnummeret med revisjonen («A-B1  rev B»), og en revisjonstabell ved siden av lister de siste utgivelsene: revisjon, dato og beskrivelse. På et lite ark vises så mange som får plass.
- Et ark «endrer seg» når det som er tegnet på det endres: en flyttet del, et nytt hull, et renummerert merke. Datoen, antallet ark og selve revisjonstabellen teller ikke. Endring av arkstørrelse endrer alle ark.
- Utgivelseslogget lagres i modellfilen, og utgivelse er ett angrertrinn. [KISS-filen](topic:kiss-export) bærer hver tegnings siste revisjon.

### Revisjonsskyer

Fra andre utgivelse av et ark og utover tegnes hver del eller fundament som har endret seg, inne i en revisjonssky med en revisjonstrekant som bærer bokstaven.

- Mens et ark har endret seg siden det sist ble utgitt, viser skyene hva som har endret seg siden da, med den kommende revisjonen i trekanten (rev. B utgitt og endret: trekantene sier C).
- Når du har utgitt det, blir skyene på den revisjonens ark, som på et utskrevet sett, til arket endrer seg igjen.
- Hvert ark skyer bare endringer som det viser. Planer og fasader tegner ingen hull eller utklinkninger, så de skyer en del som er flyttet, snudd eller endret størrelse, eller hvis merke er endret. Monteringstegninger og ankerboltplanen skyer også nye eller flyttede hull og utklinkninger.
- Et renummerert merke teller: når en endring gjør en bjelke til en ny sammenstilling, skyes bjelkene som fikk nytt merke (B1 til B2) på planer og fasader.
- En del som er slettet etterlater ingenting å sky.
- Ark utgitt før revisjonsskyer kom (DetailCraft 0.4) begynner å skye fra neste utgivelse.
- Skyene er med i PDF-, DXF- og DWG-nedlastingene, og teller aldri som en endring i seg selv.

## Last ned

Velg formatet i listen ved siden av knappene, og velg deretter {{ui:Dette arket}} for arket som vises, eller {{ui:Alle ark}} for hele settet.

- **PDF**: for utskrift eller sending. {{ui:Alle ark}} lager én PDF, én side per ark, hver side i valgt størrelse.
- **DWG**, i formatene 2018, 2013, 2010, 2007, 2004 eller 2000: for å åpne arkene i et CAD-program. Velg et eldre format for et eldre program.
- **DXF (R12)**: versjonen nesten alle CAD-programmer åpner.

Et DWG- eller DXF-ark tegnes i full størrelse: én tegningsenhet er én millimeter på papiret, så det skrives ut i 1:1, og hver visning beholder målestokken tittelen sier. Hver penn er sitt eget lag: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID og så videre, med sin linjevekt (DWG) og sine streker. Ord er tekst i DetailCraft-tekststilen (Arial). Mål er linjene og tallene du ser, ikke måleobjekter. {{ui:Alle ark}} legger DWG- eller DXF-filene i én zip-fil, én fil per ark.

:::note
DXF R12 har ingen linjevekter og ingen fyll: lagene beholder navnene sine, så sett pennene etter lag når du plotter, og fylte former utelates (statuslinjen sier hvor mange).
:::

Skriv ut i 100 % (ikke «tilpass til side») på papir av samme størrelse, hvis de angitte målestokkene skal stemme.
