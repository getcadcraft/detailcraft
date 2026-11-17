---
title: Märkningsregler
summary: Exakt när två delar eller två sammanställningar delar en märkning, hur märkningar numreras och hur märkning av plintar och armeringsjärn fungerar.
keywords: märkningar, numrering, delmärke, sammanställningsmärke, styckemärke, prefix, tolerans, identiska delar, armeringsmärken, plintmärken
from: ce02c98e
---

DetailCraft räknar om varje märkning efter varje ändring. Inget sparas, så märkningarna beskriver alltid modellen som den är just nu. Se [Kontrollera märkningar och stycklistan](topic:marks-and-bom) för hur du använder dem.

## Delmärken

Två delar delar ett delmärke när alla dessa stämmer överens:

1. Deltypen (balk, pelare, stag eller plåt).
2. Profilnamnet (skiftlägeskänsligt inte).
3. Materialet (skiftlägeskänsligt inte).
4. Kapningslängden, inom 1 mm.
5. Varje hål: sida, position längs och tvärs, inom 1 mm, och diameter inom 0,1 mm.
6. Varje urtag: ände, sida, längd och djup, inom 1 mm.

Delens {{ui:Name}} räknas inte. Inte heller dess position i modellen, dess rotation eller hur den ritades, så länge själva delen är densamma.

### Omvända delar

En del jämförs på alla sätt den kan vändas så att dess tvärsnitt hamnar på sig självt. Om något av dessa gör att den matchar en annan del delar de ett märke.

| Form | Vändningar som räknas |
|---|---|
| I-profiler, rektangulära HSS, plåtar | Ände för ände (kring den vertikala axeln), ände för ände (kring den horisontella axeln) och upp och ner kring sin egen längd |
| U-profiler | Ände för ände kring den horisontella axeln enbart, så att livet stannar på samma sida |
| Vinkelprofiler, runda HSS | Inga: jämförs som placerade |

Alltså matchar en balk med ett hål nära sin vänstra ände en balk med samma hål nära sin högra ände, och en pelare med hål i ena flänsen matchar en pelare med samma hål i den andra flänsen.

### Numrering

| Typ | Delprefix | Sammanställningsprefix |
|---|---|---|
| Pelare | c | C |
| Balk | b | B |
| Stag | br | BR |
| Plåt (placerad, ändplatta eller fotplåt) | p | P |

Märkningar numreras från 1 inom varje prefix. Ordningen är: pelare, sedan balkar, stag och plåtar; inom en typ, efter profilnamn i naturlig ordning (W8x10 före W12x26); sedan längre delar först.

Eftersom numreringen följer den ordningen kan en ändring av en del flytta numren på andra.

## Sammanställningsmärken

- Varje del som inte är svetsad till en annan del är huvuddelen i sin egen sammanställning.
- Ändplattor är svetsade till sin balk, och fotplåtar till sin pelare, så de hör till den delens sammanställning.
- Två sammanställningar delar en märkning när deras huvuddelar delar ett delmärke och deras tillhörande delar har samma märkningar på samma platser (inom 1 mm), med samma vändningar tillåtna som för huvuddelen.
- Sammanställningsprefixet följer huvuddelen: en balk med två ändplattor är en B-sammanställning.

Plåtar du placerar med verktyget {{ui:Plate}} är inte svetsade till något, så varje är en egen P-sammanställning.

## Plintmärken

Plintar med samma längd, bredd, djup, betongtext, bottenarmering och startjärn delar ett märke: F1, F2 … i den ordning de placerades. Position och rotation räknas inte.

## Armeringsmärken

Armeringsjärn med samma dimension, form och mått A, B och C (avrundade till millimeter) delar ett märke över alla plintar. Märket är järnets nummer, F och en räknare per järndimension: 5F1, 5F2, 6F1. Ett långsgående och ett tvärgående armeringsjärn i en kvadratisk plint är samma järn och delar ett märke; kolumnen {{ui:Used for}} i förteckningen visar båda användningarna.
