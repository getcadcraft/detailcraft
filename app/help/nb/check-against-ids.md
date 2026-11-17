---
title: Kontroller IFC-eksporten mot en kundes IDS
summary: Last inn .ids-filen du fikk, og se hvert eksportert element som ikke oppfyller den i Problemer, før du sender IFC-filen.
keywords: ids, information delivery specification, buildingsmart, krav, levering, kontroll, validering, qa, ifc-eksport, egenskap, materiale, innkjøp
from: 50d0f785
---

## Hva du skal gjøre

En IDS (Information Delivery Specification, en buildingSMART-standard) er listen over hva en IFC må inneholde. DetailCraft kontrollerer IFC-filen den ville eksportert (den samme filen som {{ui:IFC}} skriver) mot IDS-en du fikk, og lister hvert element som ikke er godt nok.

## Fremgangsmåte

1. Åpne eller tegn modellen.
2. Klikk på {{ui:Kontroller mot IDS…}} i gruppen {{ui:Utdata}} på verktøylinjen.
3. Klikk på {{ui:Last inn en .ids-fil…}} og velg filen. Ingenting lastes opp.
4. Les resultatet: hver spesifikasjon med {{ui:Består}} eller {{ui:Feiler}} og hvor mange elementer den gjelder.
5. Åpne Problemer ({{key:Ctrl+Shift+M}}) og klikk på en feil: elementet, forbindelsen, trappen eller fundamentet den kom fra, blir valgt, og visningen zoomer til det.

## Det du bør se

- Én advarsel per eksportert element og krav det ikke oppfyller, med spesifikasjonens navn, hva IDS-en krever og hva eksporten har.
- Kontrollrapporten (i Problemer) starter med IDS-en: tittel, versjon, forfatter og antall for hver spesifikasjon.

## Greit å vite

- IDS-en lagres i modellfilen, så den kontrolleres på nytt når du åpner modellen. Å laste den inn eller glemme den er ett steg som kan angres.
- Hver endring kontrolleres på nytt et øyeblikk senere; på en stor modell venter kontrollen litt lenger mellom kjøringene.
- GlobalId-ene i eksporten kommer fra modellnavnet og delenumrene i DetailCraft, så de er de samme fra én kontroll til den neste. Hvis du gir modellen nytt navn, får hvert element nye GlobalId-er.
- Tall sammenlignes i SI-enheter (eksporten er i millimeter; lengder konverteres til meter først).

- Mønstre i IDS-en leses som hele verdien. Et `^` i starten og et `$` på slutten tas også som «hele verdien», slik de fleste IDS-filer mener dem.

## Neste

- [Eksporter IFC](topic:ifc-export)
