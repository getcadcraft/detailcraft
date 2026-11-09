---
title: Komme i gang med DetailCraft
summary: Hva DetailCraft gjør i dag, hvordan du åpner den, og en første modell fra rutenett til verkstedtegning på ti minutter.
keywords: komme i gang, første modell, innledning, detaljering av stål, armering, hurtigstart, opplæring, oversikt
from: e4f16bbe
---

DetailCraft er appen for detaljering av stål og armering i CadCraft-familien. Du bygger en 3D-modell av en stålramme på rutenett og nivåer, kobler den sammen og får det verkstedet trenger: delemerker og sammenstillingsmerker, en stykkliste, verkstedtegninger for enkeltdeler, DSTV NC-filer, en IFC-modell og en bøyeliste for fundamentene.

Dette er en tidlig versjon. Den gjør en kort liste med ting, og gjør dem nøye, i stedet for alt på en gang. Les [Hva som ikke er bygget ennå](topic:not-built-yet) før du planlegger ekte arbeid rundt den.

## Hva den gjør i dag

- Rutenett og nivåer du skriver inn, i millimeter.
- Søyler, bjelker, avstivninger og plater fra publiserte profilkataloger (AISC W, S, C, L, HSS og Pipe; europeiske IPE, HEA, HEB og UPN; britiske UB, UC, PFC, EA, UEA, SHS, RHS og CHS), pluss dine egne parametriske profiler.
- To forbindelser: en boltet endeplate fra en bjelke til en søylflens, og en søylefotplate med fire ankerstenger. Hver kan kopieres til alle lignende skjøter.
- Hull og utklinkinger skrevet inn etter posisjon.
- Rektangulære punktfundamenter med en nedre armeringsmatte og startjern.
- Delemerker og sammenstillingsmerker som oppdaterer seg selv etter hver endring.
- Eksporter: IFC4, DSTV NC-filer (I-profiler og plater), stykkliste som CSV, bøyeliste som CSV, og en verkstedtegning som PDF for én del.

## Åpne DetailCraft

1. Åpne DetailCraft i en nettleser på datamaskin: Chrome, Edge, Firefox eller Safari. Se [Nettlesere og datamaskiner](common:browsers).
2. Vent til skjermen fylles. Statuslinjen nederst sier «Klar. Åpne {{ui:Eksempel}}, eller angi rutenett og nivåer og begynn å plassere staver.»

Modellvisningen krever 3D-grafikk (WebGL). Hvis midten av skjermen sier «Denne nettleseren kunne ikke starte 3D-grafikk (WebGL)», se [Feilsøking](topic:troubleshooting#the-3d-view-is-missing).

:::note
Modellene dine blir på datamaskinen din. Åpning av en modell leses i nettleseren, og lagring laster ned en fil. Ingenting lastes opp. Skylagring er ikke tilgjengelig ennå. Se [Hvor filene dine havner](common:your-files). For å bruke DetailCraft uten forbindelse senere, velg {{ui:Lagre for frakoblet bruk}} i appfeltet én gang mens du er tilkoblet; se [Arbeide offline](common:offline).
:::

:::offline
Du er frakoblet. DetailCraft fungerer uten forbindelse bare hvis den først ble lagret for bruk offline: knappen {{ui:Lagre for frakoblet bruk}} i appfeltet viser da {{ui:Klar frakoblet}}. Se [Arbeide offline](common:offline).
:::

## Se på eksempelet først

Den raskeste måten å se hva DetailCraft lager, er eksempelrammen.

1. Velg {{ui:Eksempel}} i gruppen {{ui:Fil}} på verktøylinjen.
2. Visningen viser en tofelts ramme: seks søyler med fotplater, fire bjelker med endeplater, én avstivning og sju fundamenter med armeringsjern.
3. Klikk på en bjelke. Panelet {{ui:Egenskaper}} til høyre viser delemerket, kuttlengden, vekten og hullene endeplatene laget.
4. Åpne fanen {{ui:Stykkliste}} nederst for å se hvert delemerke med antall og vekt.

Gjennomgangen [Utforsk eksempelrammen](topic:sample-model) går gjennom den del for del.

## Din første modell

En ny modell har allerede rutenett 1 til 3 med A til B på 6000 mm, og to nivåer: Nivå 1 på 0 og Nivå 2 på 4000.

1. Velg {{ui:Ny}}. Hvis gjeldende modell har endringer, spør DetailCraft om de skal lagres først.
2. Velg {{ui:Plan}} over visningen. Nivålisten ved siden av velger Nivå 1.
3. Velg {{ui:Søyle}} på verktøylinjen, eller trykk {{key:C}}.
4. Klikk på rutenettskrysset A/1. En W12x50-søyle vises fra Nivå 1 til Nivå 2. Statuslinjen sier hvor den ble plassert.
5. Klikk på B/1, A/2 og B/2 for å plassere tre til.
6. Velg Nivå 2 i nivålisten, og velg deretter {{ui:Bjelke}} eller trykk {{key:B}}.
7. Klikk på A/1, og deretter A/2. En W16x26-bjelke forbinder de to søyletoppene, med stålets overkant på nivået.
8. Trykk {{key:Esc}} for å gå tilbake til {{ui:Velg}}, og klikk deretter på bjelken.
9. Velg {{ui:Endeplater}} i gruppen {{ui:Forbind}}. Begge ender får en boltet endeplate, bjelken kuttes tilbake for å passe, og den første endeplaten er nå valgt.
10. Klikk på bjelken igjen.
11. Velg {{ui:Verkstedtegning}} i gruppen {{ui:Utdata}}. En forhåndsvisning av bjelkens verkstedtegning åpnes. Velg {{ui:Last ned PDF}}.
12. Trykk {{key:Mod+S}} for å lagre modellen. Nettleseren laster ned `Untitled.detailcraft.json`.

Gi modellen nytt navn i feltet {{ui:Navn}} øverst til venstre før du lagrer, slik at filen og alle eksporter får navnet.

## Hvor du går videre

- [En omvisning på skjermen](topic:workspace)
- [Sett opp rutenett og nivåer](topic:grids-and-levels)
- [Beveg deg rundt i 3D-visningen](topic:navigate-3d), med mus, styreplate eller berøringsskjerm
- [Kommer fra annen detaljeringsprogramvare](topic:coming-from), hvis du kjenner en stor detaljeringspakke
- [Bruke denne hjelpen](common:help)
