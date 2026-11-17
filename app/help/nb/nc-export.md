---
title: Send NC-filer til verkstedet
summary: Eksporter DSTV NC-filer for hvert delenummer (I-profiler, U-profiler, vinkelstål, HSS, plater), zippet, og kontroller dem før de når en maskin.
keywords: nc, nc1, dstv, cnc, maskin, bjelkelinje, borelinje, platekutting, eksport, produksjon, zip
from: 598b6091
---

DetailCraft skriver én DSTV NC-fil (`.nc1`) per delenummer, for I-profiler, U-profiler, vinkelstål, rektangulære og runde HSS-profiler og plater, og zipper dem sammen. Bjelkelinjer og platemaskiner leser disse filene for å sage, bore og kutte.

## Eksport

1. Tøm fanen {{ui:Problemer}} først: en forbindelse som ikke kunne bygges, legger til ingen hull.
2. Lagre modellen ({{key:Mod+S}}), slik at NC-filene samsvarer med en lagret modell.
3. Velg {{ui:NC-filer}} i gruppen {{ui:Utdata}}.
4. Nettleseren laster ned `<name> NC.zip`. Statuslinjen sier hvor mange filer den inneholder, og lister opp alle delenumre den ikke skrev (en vinkel eller et rundt rør med utklinkning).

Inne i zip-filen er hver fil navngitt etter delenummeret: `b1.nc1`, `c1.nc1`, `p1.nc1` … Zip-filen er ukomprimert og åpnes med hvilket som helst zip-verktøy.

Hvis modellen ikke har noen deler, sier statuslinjen fra det.

## Hva hver fil inneholder

- **Hode (ST):** modellnavnet som ordre, delenummeret som tegning og stykke, fase 1, materialkvaliteten, antallet, profilen og dens mål, masse per meter og malt flate per meter. Sagkutt er vinkelrett.
- **Ytre konturer (AK):** stegets omriss med eventuelle utklinkninger kuttet ut, og hver flens' omriss forkortet der en utklinkning fjerner den.
- **Hull (BO):** hvert hull med sin flate, posisjon og diameter, inkludert hullene laget av endeplater og fotplater.

Felt for felt, med regler for flate og koordinater: [NC-filfelter](topic:nc1-fields).

## Hva som ikke skrives

- Vinkelstål og runde rør med utklinkning: ingen NC-fil. Delenumrene deres står i statuslinjen.
- Hull i runde rør (DetailCraft lager ingen).
- Avfasinger, indre konturer, merking (risting) og sagvinkler annet enn vinkelrett.
- Langhull (DetailCraft har bare runde hull).

## Kontroller før maskinbearbeiding

DetailCraft sine NC-filer leses tilbake av programmets egen testpakke, men de er ikke kjørt på verkstedets maskiner.

1. Åpne filene i verkstedets NC-viewer eller maskinprogramvaren, og sammenlign dem med verkstedtegningene.
2. Kontroller én del av hver type på maskinen før du kjører en serie.
3. Kontroller hvordan programvaren leser flens-y-koordinatene og flatene på U-profiler: DetailCraft måler flens-y fra bakkanten, og legger U-profiler på ryggen slik standarden tegner dem (se [NC-filfelter](topic:nc1-fields#faces-and-coordinates)).
