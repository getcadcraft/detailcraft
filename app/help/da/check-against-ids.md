---
title: Kontrollér IFC-eksporten mod en kundes IDS
summary: Indlæs den .ids-fil, du har fået, og se hver eksporteret del, der ikke opfylder den, i Problemer, før du sender IFC'en.
keywords: ids, information delivery specification, buildingsmart, krav, levering, kontrol, validering, kvalitetssikring, ifc-eksport, egenskab, materiale, indkøb
from: 50d0f785
---

## Hvad du skal gøre

En IDS (Information Delivery Specification, en buildingSMART-standard) er listen over, hvad en IFC skal indeholde. DetailCraft kontrollerer den IFC, den ville eksportere (den samme fil som {{ui:IFC}} skriver), mod den IDS du har fået, og lister hver del, der ikke lever op til den.

## Trin

1. Åbn eller tegn din model.
2. Klik på {{ui:Kontrollér mod IDS…}} i gruppen {{ui:Uddata}} på værktøjslinjen.
3. Klik på {{ui:Indlæs en .ids-fil…}} og vælg filen. Intet uploades.
4. Læs resultatet: hver specifikation med {{ui:Bestået}} eller {{ui:Ikke bestået}}, og hvor mange elementer den gælder for.
5. Åbn Problemer ({{key:Ctrl+Shift+M}}) og klik på en fejl: delen, forbindelsen, trappen eller fundamentet, den kommer fra, bliver valgt, og visningen zoomer til den.

## Det skal du se

- En advarsel pr. eksporteret element og krav, det ikke opfylder, med specifikationens navn, hvad IDS'en kræver, og hvad eksporten har.
- Kontrolrapporten (i Problemer) starter med IDS'en: dens titel, version, forfatter og hver specifikations antal.

## Godt at vide

- IDS'en gemmes i modelfilen, så den kontrolleres igen, når du åbner modellen. At indlæse eller glemme den er ét trin, som du kan fortryde.
- Hver ændring kontrolleres igen et øjeblik senere; på en stor model venter kontrollen lidt længere mellem kørslerne.
- Eksportens GlobalIds kommer fra modelnavnet og delnumrene i DetailCraft, så de forbliver de samme fra én kontrol til den næste. Omdøber du modellen, får hvert element nye GlobalIds.
- Tal sammenlignes i SI-enheder (eksporten er i millimeter; længder omregnes først til meter).

- Mønstre i IDS'en læses som hele værdien. Et `^` i starten og et `$` i slutningen tages også som »hele værdien«, sådan som de fleste IDS-filer mener dem.

## Næste

- [Eksportér IFC](topic:ifc-export)
