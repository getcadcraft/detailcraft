---
title: Kontrollera IFC-exporten mot en kunds IDS
summary: Läs in .ids-filen du fick och se varje exporterad del som inte uppfyller den i Problem, innan du skickar IFC-filen.
keywords: ids, information delivery specification, buildingsmart, krav, leverans, kontroll, validering, kvalitetssäkring, ifc-export, egenskap, material, upphandling
from: 50d0f785
---

## Vad du ska göra

En IDS (Information Delivery Specification, en buildingSMART-standard) är listan över vad en IFC-fil måste innehålla. DetailCraft kontrollerar den IFC-fil den skulle exportera (samma fil som {{ui:IFC}} skriver) mot IDS:en du fick, och listar varje del som inte uppfyller den.

## Steg

1. Öppna eller rita din modell.
2. Klicka på {{ui:Kontrollera mot IDS…}} i gruppen {{ui:Utdata}} på verktygsfältet.
3. Klicka på {{ui:Läs in en .ids-fil…}} och välj filen. Inget laddas upp.
4. Läs resultatet: varje specifikation med {{ui:Klarar}} eller {{ui:Underkänd}} och hur många element den gäller för.
5. Öppna Problem ({{key:Ctrl+Shift+M}}) och klicka på ett fel: delen, anslutningen, trappan eller plinten det kommer från markeras, och vyn zoomar till den.

## Vad du bör se

- En varning per exporterat element och krav det missar, med specifikationens namn, vad IDS:en kräver och vad exporten har.
- Kontrollrapporten (i Problem) börjar med IDS:en: dess titel, version, författare och varje specifikations antal.

## Bra att veta

- IDS:en sparas i modellfilen, så den kontrolleras igen när du öppnar modellen. Att läsa in eller glömma den är ett steg som kan ångras.
- Varje ändring kontrolleras igen en stund senare; på en stor modell väntar kontrollen lite längre mellan körningarna.
- Exportens GlobalId:n kommer från modellnamnet och delnumren inne i DetailCraft, så de är desamma från en kontroll till nästa. Om du byter namn på modellen får varje element nya GlobalId:n.
- Tal jämförs i SI-enheter (exporten är i millimeter; längder omvandlas först till meter).
- Mönster i IDS:en läses som hela värdet. Ett `^` i början och ett `$` i slutet tas också som "hela värdet", så som de flesta IDS-filer menar dem.

## Nästa

- [Exportera IFC](topic:ifc-export)
