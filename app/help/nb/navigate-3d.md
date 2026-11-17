---
title: Bevegelse i 3D-visningen
summary: Snu, panorer og zoom med mus, styreplate eller berøringsskjerm, og når du bruker Plan og Fasade i stedet.
keywords: kretsing, rotere, panorer, zoom, navigere, visning, kamera, styreplate, berøring, plan, fasade, tilpass, mus
from: 02c9c7b9
---

Visningen har tre modi, valgt i visningslinjen over den: {{ui:3D}}, {{ui:Plan}} og {{ui:Fasade}}. Museknappene gjør ulike ting i 3D enn i Plan og Fasade, så les begge tabellene.

## I 3D

:::mouse
| For å | Gjør dette |
|---|---|
| Snu rundt modellen | Dra med venstre knapp |
| Panorere | Dra med høyre knapp, eller hold {{key:Shift}} og dra med venstre knapp |
| Zoome | Snu hjulet, eller dra opp og ned med midtknappen (hjulet trykket inn) |
| Velge en del | Klikk på den (et klikk som flytter seg mindre enn noen få piksler) |
| Se hele modellen | Tilpass-knappen helt til høyre i visningslinjen |
:::

:::touch
| For å | Gjør dette |
|---|---|
| Snu rundt modellen | Dra med ett finger |
| Panorere | Dra med to fingre |
| Zoome | Klyp med to fingre |
| Velge en del | Trykk på den |
| Se hele modellen | Tilpass-knappen helt til høyre i visningslinjen |
:::

Visningskuben øverst til høyre (under visningslinjen) snur seg med modellen: klikk på en flate, kant eller et hjørne for å se derfra, dra den for å snu den, eller klikk på hus-knappen for å gå tilbake til start. Se [Visningskuben](topic:view-cube).

Modellen snur seg rundt midten av visningen, og hjulet zoomer mot midten av visningen, ikke mot pekeren. For å se nærmere på ett hjørne, panorer det først til midten, og zoom deretter.

## I Plan og Fasade

Disse visningene ser rett på modellen og kan ikke snus.

:::mouse
| For å | Gjør dette |
|---|---|
| Panorere | Dra med venstre eller høyre knapp |
| Zoome | Snu hjulet, eller dra opp og ned med midtknappen |
| Velge en del | Klikk på den |
:::

:::touch
| For å | Gjør dette |
|---|---|
| Panorere | Dra med ett finger |
| Zoome | Klyp med to fingre (å dra med to fingre panorerer også) |
| Velge en del | Trykk på den |
:::

## På en Mac-styreplate

:::mac
- **Zoom:** sveip opp eller ned med to fingre, eller klyp. Begge når visningen som zoom.
- **Snu (3D):** trykk på styreplaten og dra med ett finger. Hvis du bruker trykk for å klikke, fungerer dobbelttrykk og dra også når dra er slått på i **Systeminnstillinger, Tilgjengelighet, Pekerkontroll, Alternativer for styreplate**.
- **Panorer (3D):** hold {{key:Shift}} og dra. Å holde {{key:Ctrl}} eller {{key:Mod}} mens du drar, panorerer også. Et klikk med to fingre er et høyreklikk, men å dra med det er tungvint på en styreplate.
- **Panorer (Plan og Fasade):** bare dra.
- En Magic Mouse har ingen midtknapp: bruk {{key:Shift}}-drag for å panorere og et sveip på overflaten for å zoome.
:::

Mer om høyreklikk og panorering uten mus: [Taster, mus og styreplater](common:keys).

## Plan og Fasade gjør plassering enkel

I {{ui:3D}} kan skjæringspunkter på ulike nivåer ligge oppå hverandre på skjermen, og et klikk går til nærmeste prikk. I {{ui:Plan}} og {{ui:Fasade}} kan bare prikkene på nivået eller rutenettlinjen du ser på, velges.

1. Velg {{ui:Plan}}, og velg så et nivå i listen ved siden av knappene. Visningen ser ned på nivået; alt mer enn 1.5 m over det er skåret bort.
2. Eller velg {{ui:Fasade}}, og velg så en bokstavrutenettlinje («Rutenett A», «Rutenett B» …). Visningen ser rett på linjen; bare stål innenfor 1 m vises.

Fasader finnes bare på bokstavrutenettlinjer. For å jobbe med en linje av nummererte rutenett (en ramme fra A til B), bruk {{ui:3D}}, eller plasser ved å skrive i skjemaet {{ui:Legg til etter rutenett}}. Se [Plasser søyler, bjelker og avstivninger](topic:place-members#place-by-grid-without-clicking).

## Velge

- Klikk på en del for å velge den. Den får utheving, og panelet {{ui:Egenskaper}} viser den.
- Klikk på tomt rom, eller trykk {{key:Esc}}, for å fjerne utvalget.
- Stål vinner over betong: et klikk på en søyle inne i et gjennomsiktig fundament velger søylen. Klikk på fundamentet et stykke fra søylen, eller på en av armeringene, for å velge fundamentet.
- Klikk på en bolt eller en endeplate velger forbindelsen.
- I Plan og Fasade kan deler som er skåret bort, ikke klikkes.
- Hold {{key:Shift}} (eller {{key:Ctrl}}, eller {{key:Mod}}) og klikk for å legge en del til utvalget eller ta den ut; {{key:Mod+A}} velger alt. Det finnes ennå ikke valg med vindu (dra en boks). Hva du kan gjøre med flere: [Kopier, lim inn og dupliser](topic:copy-paste).
- Du kan også velge fra lister: klikk et merke i {{ui:Delenumre}} til venstre, et delenummer i fanen {{ui:Stykkliste}}, eller {{ui:Velg}} ved siden av en linje i {{ui:Problemer}}.

## Hvis visningen ser feil ut

- Mistet modellen? Velg Tilpass-knappen.
- Visningen er tom eller grå med en melding om WebGL: se [Feilsøking](topic:troubleshooting#the-3d-view-is-missing).
- Alt fungerer fortsatt uten 3D-visningen, unntatt klikk i den: panelene, rapportene og eksportene kjører alle, og {{ui:Legg til etter rutenett}} plasserer medlemmer ved å skrive.
