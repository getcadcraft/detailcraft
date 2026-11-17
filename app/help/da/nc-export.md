---
title: Send NC-filer til værkstedet
summary: Eksportér DSTV NC-filer for hvert positionsnummer (I-profiler, U-profiler, vinkelstål, HSS, plader), zippet, og kontrollér dem, før de når en maskine.
keywords: nc, nc1, dstv, cnc, maskine, bjælkelinje, boreline, pladeskæring, eksport, fremstilling, zip
from: 598b6091
---

DetailCraft skriver én DSTV NC-fil (`.nc1`) pr. positionsnummer, til I-profiler, U-profiler, vinkelstål, rektangulær og rund HSS samt plader, og samler dem i en zip-fil. Bjælkelinjer og pladeskæremaskiner læser filerne for at save, bore og skære.

## Eksport

1. Ryd først fanen {{ui:Problemer}}: en forbindelse, der ikke kunne bygges, giver ingen huller.
2. Gem modellen ({{key:Mod+S}}), så NC-filerne svarer til en gemt model.
3. Vælg {{ui:NC-filer}} i gruppen {{ui:Uddata}}.
4. Browseren downloader `<name> NC.zip`. Statuslinjen viser, hvor mange filer den indeholder, og lister de positionsnumre, den ikke skrev (et vinkelstål eller et rundt rør med en udskæring).

Inde i zip-filen er hver fil navngivet efter sit positionsnummer: `b1.nc1`, `c1.nc1`, `p1.nc1` … Zip-filen er ukomprimeret og åbnes med et hvilket som helst zip-værktøj.

Hvis modellen ikke har nogen dele, siger statuslinjen det.

## Hvad hver fil indeholder

- **Hoved (ST):** modelnavnet som ordre, positionsnummeret som tegning og stykke, fase 1, materialekvaliteten, antallet, profilen og dens mål, masse pr. meter og malet overflade pr. meter. Savsnit er vinkelrette.
- **Ydre konturer (AK):** stegets omrids med eventuelle udskæringer, og hver flangeomrids forkortet, hvor en udskæring fjerner den.
- **Huller (BO):** hvert hul med sin flade, position og diameter, inklusive hullerne fra endeplader og fodplader.

Felt for felt, med regler for flader og koordinater: [NC-filens felter](topic:nc1-fields).

## Hvad der ikke skrives

- Vinkelstål og runde rør med udskæring: ingen NC-fil. Deres positionsnumre står i statuslinjen.
- Huller i runde rør (DetailCraft laver ingen).
- Affasninger, indre konturer, markeringer (ridsning) og savvinkler, der ikke er vinkelrette.
- Langhuller (DetailCraft har kun runde huller).

## Kontrollér før bearbejdning

DetailCraft's NC-filer læses tilbage af dets egen testpakke, men de er ikke kørt på dit værksteds maskiner.

1. Åbn filerne i dit værksteds NC-viewer eller maskinsoftwaren, og sammenlign dem med værkstedstegningerne.
2. Kontrollér ét stykke af hver type på maskinen, før du kører en serie.
3. Kontrollér, hvordan din software læser flangernes y-koordinater og udskæringernes flader: DetailCraft måler flange-y fra bagkanten og lægger U-profiler på ryggen, som standarden tegner dem (se [NC-filens felter](topic:nc1-fields#faces-and-coordinates)).
