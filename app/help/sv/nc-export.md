---
title: Skicka NC-filer till verkstaden
summary: Exportera DSTV NC-filer för varje delmärke (I-balkar, U-profiler, vinkelstål, HSS, plåtar), zippade, och kontrollera dem innan de når en maskin.
keywords: nc, nc1, dstv, cnc, maskin, balklinje, borrlinje, plåtskärning, export, tillverkning, zip
from: 598b6091
---

DetailCraft skriver en DSTV NC-fil (`.nc1`) per delmärke, för I-balkar, U-profiler, vinkelstål, rektangulär och rund HSS samt plåtar, och zippar dem tillsammans. Balklinjer och plåtmaskiner läser dessa filer för att såga, borra och kapa.

## Export

1. Rensa fliken {{ui:Problems}} först: en förbindelse som inte kunde byggas lägger inte till några hål.
2. Spara modellen ({{key:Mod+S}}), så att NC-filerna stämmer med en sparad modell.
3. Välj {{ui:NC files}} i gruppen {{ui:Output}}.
4. Webbläsaren laddar ner `<name> NC.zip`. Statusfältet visar hur många filer den innehåller och listar eventuella delmärken som den inte skrev (ett vinkelstål eller ett runt rör med urtag).

Inuti zip-filen heter varje fil efter sitt delmärke: `b1.nc1`, `c1.nc1`, `p1.nc1` … Zip-filen är okomprimerad och öppnas med vilket zip-verktyg som helst.

Om modellen saknar delar står det i statusfältet.

## Vad varje fil innehåller

- **Header (ST):** modellnamnet som order, delmärket som ritning och styck, etapp 1, materialkvaliteten, antalet, profilen och dess mått, massa per meter och målad yta per meter. Sågsnitten är räta.
- **Outer contours (AK):** livets kontur med eventuella urtag utskurna, och varje flänskontur förkortad där ett urtag tar bort den.
- **Holes (BO):** varje hål med sin yta, position och diameter, inklusive hålen som gjorts av ändplattor och fotplåtar.

Fält för fält, med reglerna för ytor och koordinater: [NC-filens fält](topic:nc1-fields).

## Vad som inte skrivs

- Vinkelstål och runda rör med urtag: ingen NC-fil. Deras delmärken listas i statusfältet.
- Hål i runda rör (DetailCraft gör inga).
- Fasningar, innerkonturer, delmärkning (ritsning) och sågvinklar som inte är räta.
- Långhål (DetailCraft har bara runda hål).

## Kontrollera före bearbetning

DetailCraft:s NC-filer läses tillbaka av den egna testsviten, men de har inte körts på verkstadens maskiner.

1. Öppna filerna i verkstadens NC-visare eller maskinprogramvaran och jämför dem med verkstadsritningarna.
2. Kontrollera en del av varje typ på maskinen innan du kör en batch.
3. Kontrollera hur din maskinprogramvara läser flänsarnas y-koordinater och ytorna på U-profiler: DetailCraft mäter fläns-y från den bakre kanten och lägger U-profiler på ryggen som standarden ritar dem (se [NC-filens fält](topic:nc1-fields#faces-and-coordinates)).
