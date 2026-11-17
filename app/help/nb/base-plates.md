---
title: Legg til fotplater og ankerstenger
summary: Legg en sveiset fotplate med fire ankerstenger under en søyle, sett størrelsene og kopier den til alle lignende søyler.
keywords: fotplate, fotplater, ankerstenger, ankerbolter, forankringsbolter, søylefot, fundamentbolter, lignende
from: 619ebc64
---

En fotplateforbindelse legger en plate under søylen, kapper søylen kortere med platetykkelsen, sveiser de to sammen og legger til fire ankerstenger gjennom hull i platen.

:::warning
Størrelsene er startverdier, ikke en dimensjonering. DetailCraft kontrollerer ikke opplagring, stangstyrke eller innstøpningsdybde.
:::

## Legg til en fotplate

1. Aktiver {{ui:Velg}} ({{key:V}}) og klikk på en søyle. Den må være vertikal.
2. Velg {{ui:Fotplate}} i gruppen {{ui:Forbind}}, eller {{ui:Legg til fotplate}} i panelet {{ui:Egenskaper}}.
3. Statuslinjen sier «Fotplate lagt til med fire ankerstenger.» Den nye forbindelsen er valgt.

En søyle kan ha én fotplate. Har den allerede en, sier statuslinjen «Denne søylen har allerede en fotplate.»

## Endre den

Velg fotplaten (klikk på platen eller en stang). Under {{ui:Plate, bolts and weld (mm)}}:

| Innstilling | Standard | Hva den gjør |
|---|---|---|
| Platetykkelse | 25 | Søylen kortes med så mye |
| Platelengde | 450 | Langs søylens dybde |
| Platebredde | 400 | Tvers over søylen |
| Stangdiameter | 20 | Størrelse på ankerstangen |
| Hulldiameter | 33 | Hull i platen |
| Boltkvalitet | F1554 Gr 36 | Kvaliteten på stangen, som tekst |
| Stangavstand (langs dybden) | 350 | Mellom stangsentrene, langs platelengden |
| Stangavstand (tvers) | 300 | Mellom stangsentrene, tvers over |
| Stangutstikk over plate | 100 | Fra platens overside til stangtoppen |
| Stanginnstøping under plate | 450 | Fra platens underside og ned i betongen |
| Hjørnesveis | 8 | Rundt hele søylefoten |
| Platemateriale | A36 | Tekst |
| Mørtelfuge | 0 | Avstand mellom betongtoppen og platens underside |
| Avstivere | Ingen | Velg Ingen, 2 (på linje med livet) eller 4 (også vinkelrett på det); se nedenfor |
| Avstivertykkelse, høyde | 12, 150 | |
| Skjærlapp dybde | 0 | Hvor langt lappen går under platen; 0 = ingen lapp |
| Skjærlapp tykkelse, bredde | 25, 150 | |
| Platskiver | Ingen | På hver stang, eller ingen |
| Skivestørrelse, tykkelse | 0, 0 | 0 = minimum fra AISC Design Guide 1 for stangen |

Stanglengde = innstøping + mørtelfuge + platetykkelse + utstikk. Med standardverdiene er den 575 mm.

## Fotdetaljer: mørtel, avstivere, skjærlapp, skiver

Alle fire er av på en ny fotplate, og på fotplater fra modeller laget før DetailCraft 0.4.

- **Mørtelfuge.** Platen sitter så langt over betongtoppen, og stengene blir lengre med samme mål. AISC Design Guide 1 (2.10) foreslår 1 in. på et ferdig gulv og 1½ til 2 in. på et fundament eller en pilar; mer for store plater og plater med skjærlapp.
- **Avstivere.** Vertikale plater sveiset til søylen og platen, fra søylens flate ut til platekanten, som rektangler (ingen avfasing eller avsmalning ennå). **2** står på linje med livet, utenfor hver flens; **4** legger til to vinkelrett på livet, mellom flensene, ut til platesidene. På et rørprofil står de midt på hver flate. Hver sveises til søylen og platen på begge sider.
- **Skjærlapp.** En plate sveiset rundt hele, under fotplaten, på linje med søylens dybde og sentrert. DetailCraft advarer hvis den ikke er dypere enn mørtelfugen. Den kutter ikke lommen i fundamentet; [kollisjonskontrollen](topic:clash-check) utelater derfor lappen og fundamentet.
- **Platskiver.** En kvadratisk platskive på hver stang, som ligger på fotplaten og står i søylens sammenstilling som løs (levert med søylen, ikke sveiset: Design Guide 1, 2.6). Med størrelse og tykkelse 0 tar DetailCraft minimumskiven fra AISC Design Guide 1, 2. utg., tabell 2.3 for stangen; en metrisk stang tar neste tommestørrelse opp (en M20-stang får raden for 7/8 in.: 2½ in. × 5/16 in.). Egenskapspanelet viser størrelsen som brukes. Skivens hull er stangdiameter + 1/16 in.: det er DetailCraft sitt valg, tabellen gir ikke ett. DetailCraft advarer når stengene kanskje ikke stikker langt nok ut for skiven og en mutter (utstikk mindre enn skivetykkelse + stangdiameter).

Design Guide 1, tabell 2.3, anbefaler også stanghullet i platen: 1-5/16 in. for en ¾ in.-stang, 1-9/16 in. for ⅞ in., 1-13/16 in. for 1 in. DetailCraft endrer ikke hullstørrelsen din.

Advarsler vises også når stanghullene er nærmere platekanten enn 1.2 × hulldiameteren, når stengene faller innenfor søylens omriss, eller når platen er mindre enn søylen.

## Kopier til lignende søyler

1. Velg fotplaten.
2. Velg {{ui:Bruk på lignende (n)}}, eller {{ui:Lignende}} i menyen {{ui:Mer}} i gruppen {{ui:Forbind}}.
3. Hver vertikal søyle med samme profil som ikke har en fotplate, og som ikke står på en annen søyle, får en kopi.

## Fotplater og fundamenter

En fotplate trenger ikke et fundament, og et fundament vet ikke om fotplaten over seg: ankerstengene er ikke bundet inn i fundamentets armering. Plasser fundamenter med {{ui:Fundament}}; se [Plasser fundamenter med armering](topic:footings-and-rebar).
