---
title: Skjærlasker
summary: Bolt en bjelkes steg til en plate som er sveiset i verkstedet på en søyleflens eller et søylesteg, også der bjelken møter søylen i en vinkel i plan eller skrått.
keywords: skjærlask, enkeltplate, finneplate, enkel forbindelse, stegforbindelse, skjev, skjevt, skrå, skrått, vinklet bjelke, boltet, koble
from: 18afc8ab
---

En skjærlask (enkeltplate, finneplate) er en plate som sveises til søylen i verkstedet. På byggeplassen bolter man bjelkens steg til den med én vertikal rad med bolter. DetailCraft plasserer laskene, kutter bjelken tilbake fri for søylen, borer hullene i laskene og i bjelkens steg, legger til boltene og sveisen, og advarer om kantavstander og passform.

## Hvor den virker

- En bjelke (I-profil eller kanal) hvis ende ligger på linjen til en **vertikal** I-profilsøyle, og som møter enten dens **flens** eller dens **steg**.
- **Rett, skjev i plan, eller skrådd**: laskens plate følger bjelkens steg, og bjelken kuttes tilbake slik at hjørnet nærmest holder mellomrommet til søylen. En bjelke som stiger eller faller med mer enn 60°, avvises.

## Legg til skjærlasker

1. Velg bjelken.
2. I gruppen {{ui:Forbind}} åpnes {{ui:Mer}}, og velg {{ui:Skjærlasker}} (eller velg {{ui:Legg til skjærlasker}} i {{ui:Egenskaper}}-panelet).
3. Hver fri ende av bjelken som møter en søyle får en lasker. Hver bjelkeende tar én forbindelse: en skjærlasker eller en endeplate.

Velg en lasker (klikk på den, eller på en bolt) for å se og endre innstillingene. {{ui:Bruk på lignende}} kopierer den, som skjærlasker, til hvert lignende knutepunkt som ikke har en forbindelse ennå.

## Innstillinger (mm)

| Innstilling | Starter på | Betydning |
|---|---|---|
| {{ui:Platetykkelse (mm)}} | 10 | Laskens tykkelse |
| {{ui:Platebredde (mm)}} | 115 | Hvor langt laskene rekker ut fra søylens flate, langs bjelken |
| Bolt-diameter, hulldiameter, boltkvalitet | 20, 22, A325 | Som for endeplater |
| Boltrader, radavstand | 3, 75 | Boltene i den vertikale raden |
| Kantavstand (øverste og nederste bolter) | 38 | Fra de øverste og nederste boltene til laskens ender; laskens dybde er rader × avstand + 2 × denne |
| Boltgruppe hevet med | 0 | 0 sentrerer boltene på bjelkens dybde |
| Mellomrom til søylen | 13 | Fritt mellomrom mellom søylen og bjelkens nærmeste hjørne |
| Boltlinje fra søylens flate | 65 | Langs bjelken, fra søylens flate til boltene |
| Tillegg for boltlengde | 30 | Lagt til grepet (laske + bjelkesteg), rundet opp til 5 mm |
| Filetsveisstørrelse | 6 | Begge sider av laskene til søylen |

## Greit å vite

- Laskene er en del av søylens sammenstilling (sveist i verkstedet); bjelkens sammenstilling har bare sine hull.
- En skjev eller skrådd bjelke kuttes lenger tilbake enn en rett, så hjørnet nærmest holder mellomrommet. DetailCraft kutter bjelker rette: fabrikanten kutter enden etter behov. Laskens kant ved søylen tegnes også rett.
- DetailCraft kontrollerer ikke styrke. Advarslene bruker minimumsverdiene i EN 1993-1-8 tabell 3.3 for kantavstander og avstander, og sier fra når laskene er dypere enn bjelkens steg mellom flensutrundingene, eller når boltene står for nær bjelkens kuttede ende.
- [Kollisjonskontrollen](topic:clash-check) tar ikke med en lasker og elementene den kobler: de skal møtes.
