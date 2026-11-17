---
title: ViewCube
summary: Klikk på en flate, kant eller et hjørne av kuben i hjørnet av visningen for å se derfra, dra den for å rotere, snu kompassringen, gå rundt en rettvendt visning og gå hjem.
keywords: view cube, viewcube, kube, kompass, nord, hjemvisning, standardvisninger, topp, foran, høyre, iso, hjørne, kant, rotere, roter visning, aksikon, hjørneindikator, navigering
from: 3666ea8a
---

ViewCube-en sitter øverst til høyre i 3D-visningen, under visningslinjen (bare i {{ui:3D}}: {{ui:Plan}} og {{ui:Fasade}} ser allerede rett på modellen). Den snur seg med visningen, slik at den alltid viser hvilken vei du ser: {{ui:Topp}} er opp, {{ui:Foran}} vender mot sør (siden som rutenettbokstavene sees fra i {{ui:Fasade}}), {{ui:Høyre}} vender mot øst, langs de nummererte rutenettene. Den er gjennomsiktig helt til du peker på den.

## Se fra en side, en kant eller et hjørne

1. Pek på kuben. Delen under pekeren lyser opp: midten av en flate, en kant (den lyser på begge flatene som deler den) eller et hjørne (på alle tre flatene).
2. Klikk på den. Visningen snur seg og ser derfra, med samme midte og zoom.

Det finnes 26 steder å klikke: 6 flater ({{ui:Topp}}, {{ui:Bunn}}, {{ui:Foran}}, {{ui:Bak}}, {{ui:Venstre}}, {{ui:Høyre}}), 12 kanter og 8 hjørner. Et hjørne gir den klassiske tre-kvart-visningen; en kant ser ut omtrent midt mellom to flater.

En flatevisning av kuben er en 3D-visning, ikke {{ui:Plan}} eller {{ui:Fasade}}: ingenting kuttes bort, og modellen kan fortsatt snus.

## Roter ved å dra kuben

Dra kuben for å snu visningen, på samme måte som når du roterer i selve visningen. Et drag regnes aldri som et klikk, så du kan ta tak i kuben hvor som helst.

## Kompassringen

Ringen under kuben har N, Ø, S og V.

- **Dra ringen** for å snu modellen rundt den vertikale aksen, som på en dreieskive. Ringen følger pekeren.
- **Klikk på en bokstav** for å se fra den siden, og beholde hvor bratt du ser ned. I en visning rett ovenfra havner bokstaven du klikker, nederst på skjermen.

## Rettvendte visninger: piler

Når du ser rett på en flate, dukker det opp små piler rundt kuben:

- De fire **trekantene** bringer flaten på den siden fram foran: trekanten over kuben viser flaten som var øverst, og så videre.
- De to **buede pilene** øverst til høyre snur bildet en kvart omdreining med eller mot klokken, uten å endre hvilken flate du ser på. Bruk dem til å snu en plan slik at en lang vegg går tvers over skjermen.

## Hjem

Hus-knappen øverst til venstre på kuben går tilbake til startvisningen tre-kvart og tilpasser hele modellen i visningen, det samme som tilpass-knappen. {{key:Home}} gjør det samme når kuben har tastaturfokus.

## Med tastaturet

{{key:Tab}} til kuben, og deretter:

| Tast | Gjør |
|---|---|
| {{key:left}} / {{key:right}} | velger en side, kant eller et hjørne rundt kuben, i steg på en åttendedel omdreining (skjermlesere sier hvilken) |
| {{key:up}} / {{key:down}} | velger en høyere eller lavere en, opp til {{ui:Topp}} eller ned til {{ui:Bunn}} |
| {{key:Enter}} eller {{key:Space}} | ser fra den valgte |
| {{key:Shift+left}} / {{key:Shift+right}} | snur visningen en kvart omdreining om den vertikale aksen |
| {{key:Home}} | hjemvisningen |
| {{key:Esc}} | forlater kuben |

Taster du trykker på kuben, blir på kuben: de starter ikke DetailCraft-verktøy.

## Aksikon eller ingenting i stedet

Åpne {{ui:Innstillinger}} ({{key:Mod+,}}), fanen {{ui:DetailCraft}}, og sett **Hjørneindikator** til {{ui:ViewCube}} (standard), {{ui:Akseikon}} (et lite X-, Y-, Z-merke nederst til venstre: X rød, Y grønn, Z blå) eller {{ui:Ingen}}. Denne nettleseren husker valget. Se [Innstillinger i DetailCraft](topic:settings#corner-indicator).
