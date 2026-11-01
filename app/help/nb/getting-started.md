---
title: Kom i gang med DetailCraft
summary: Hva DetailCraft gjør i dag, hvordan du åpner den, og en første modell fra rutenett til en verkstedtegning på ti minutter.
keywords: start, første modell, innføring, ståldetaljering, armering, hurtigstart, veiledning, oversikt
from: 3682c0d8
---

DetailCraft er appen for detaljering av stål og armering i CadCraft-familien. Du bygger en 3D-modell av en stålramme på rutenett og nivåer, kobler den sammen, og får det verkstedet trenger: del- og sammenstillingsnumre, en stykkliste, verkstedtegninger av enkeltdeler, DSTV NC-filer, en IFC-modell og en bøyeliste for fundamentene.

Dette er et tidlig bygg. Det gjør en kort liste ting nøye i stedet for alt på en gang. Les [Hva som ikke er bygget ennå](topic:not-built-yet) før du planlegger virkelig arbeid rundt det.

## Dette gjør den i dag

- Rutenett og nivåer du skriver inn, i millimeter.
- Søyler, bjelker, avstivninger og plater fra publiserte profilkataloger (AISC W, S, C, L, HSS og Pipe; europeiske IPE, HEA, HEB og UPN), pluss dine egne parametriske profiler.
- To forbindelser: en boltet endeplate fra en bjelke til en søyleflens, og en søylefotplate med fire ankerstenger. Hver kan kopieres til hver lignende skjøt.
- Hull og utklinkninger skrevet inn etter posisjon.
- Rektangulære putefundamenter med bunnmatte og støpeskjøtearmering.
- Del- og sammenstillingsnumre som oppdateres av seg selv etter hver endring.
- Eksporter: IFC4, DSTV NC-filer (I-profiler og plater), stykkliste som CSV, bøyeliste som CSV og en verkstedtegning som PDF av én del.

## Åpne DetailCraft

1. Åpne DetailCraft i en nettleser på datamaskin: Chrome, Edge, Firefox eller Safari. Se [Nettlesere og datamaskiner](common:browsers).
2. Vent til skjermen fylles. Statuslinjen nederst sier «Klar. Åpne eksempelet, eller sett rutenett og nivåer og begynn å plassere staver.»

Modellvisningen trenger 3D-grafikk (WebGL). Hvis midten av skjermen sier «Denne nettleseren kunne ikke starte 3D-grafikk (WebGL)», se [Feilsøking](topic:troubleshooting#the-3d-view-is-missing).

:::note
Modellene dine blir på datamaskinen din. Å åpne en modell leser den i nettleseren, og lagring laster ned en fil. Ingenting lastes opp. Skylagring finnes ikke ennå. Se [Hvor filene dine havner](common:your-files). For å bruke DetailCraft uten forbindelse senere velger du {{ui:Lagre for frakoblet bruk}} i appfeltet én gang mens du er tilkoblet; se [Arbeide frakoblet](common:offline).
:::

:::offline
Du er frakoblet. DetailCraft fungerer uten forbindelse bare hvis den først ble lagret for frakoblet bruk: knappen {{ui:Lagre for frakoblet bruk}} i appfeltet sier da {{ui:Klar frakoblet}}. Se [Arbeide frakoblet](common:offline).
:::

## Se på eksempelet først

Den raskeste måten å se hva DetailCraft lager på er eksempelrammen.

1. Velg {{ui:Eksempel}} i gruppen {{ui:Fil}} på verktøylinjen.
2. Visningen viser en ramme med to spenn: seks søyler med fotplater, fire bjelker med endeplater, én avstivning og sju fundamenter med armering.
3. Klikk en bjelke. Panelet {{ui:Egenskaper}} til høyre viser delenummeret, kappelengden, vekten og hullene endeplatene lagde.
4. Åpne fanen {{ui:Stykkliste}} nederst for å se hvert delenummer med antall og vekt.

Gjennomgangen [Utforsk eksempelrammen](topic:sample-model) går gjennom det del for del.

## Din første modell

En ny modell har allerede rutenett 1 til 3 ganger A til B på 6000 mm og to nivåer, Nivå 1 på 0 og Nivå 2 på 4000.

1. Velg {{ui:Ny}}. Hvis den gjeldende modellen har endringer, spør DetailCraft om de skal lagres først.
2. Velg {{ui:Plan}} over visningen. Nivålisten ved siden av velger Nivå 1.
3. Velg {{ui:Søyle}} på verktøylinjen, eller trykk {{key:C}}.
4. Klikk rutenettkrysset A/1. En W12x50-søyle dukker opp fra Nivå 1 til Nivå 2. Statuslinjen sier hvor den havnet.
5. Klikk B/1, A/2 og B/2 for å plassere tre til.
6. Velg Nivå 2 i nivålisten, og velg deretter {{ui:Bjelke}} eller trykk {{key:B}}.
7. Klikk A/1, deretter A/2. En W16x26-bjelke forbinder de to søyletoppene, med overkant stål på nivået.
8. Trykk {{key:Esc}} for å gå tilbake til {{ui:Velg}}, og klikk deretter bjelken.
9. Velg {{ui:Endeplater}} i gruppen {{ui:Forbind}}. Begge endene får en boltet endeplate, bjelken kappes tilbake for å passe, og den første endeplaten er nå valgt.
10. Klikk bjelken igjen.
11. Velg {{ui:Verkstedtegning}} i gruppen {{ui:Utdata}}. En forhåndsvisning av bjelkens verkstedtegning åpnes. Velg {{ui:Last ned PDF}}.
12. Trykk {{key:Mod+S}} for å lagre modellen. Nettleseren laster ned `Untitled.detailcraft.json`.

Gi modellen nytt navn i feltet {{ui:Navn}} øverst til venstre før du lagrer, så filen og hver eksport bærer navnet.

## Veien videre

- [En omvisning i skjermen](topic:workspace)
- [Sett opp rutenett og nivåer](topic:grids-and-levels)
- [Beveg deg i 3D-visningen](topic:navigate-3d), med mus, styreflate eller berøringsskjerm
- [Hvis du kommer fra annen detaljeringsprogramvare](topic:coming-from), hvis du kjenner en stor detaljeringspakke
- [Bruke denne hjelpen](common:help)
