---
title: ViewCube
summary: Klik på en flade, kant eller et hjørne af kuben i hjørnet af visningen for at se derfra, træk i den for at kredse, drej kompasringen, skift mellem frontvisninger og gå hjem.
keywords: view cube, viewcube, kube, kompas, nord, hjemvisning, standardvisninger, top, front, højre, iso, hjørne, kant, kredsbevægelse, drej visning, akseikon, hjørneindikator, navigation
from: 3666ea8a
---

ViewCube sidder øverst til højre i 3D-visningen, under visningslinjen (kun i {{ui:3D}}: {{ui:Plan}} og {{ui:Facade}} kigger allerede lige på modellen). Den drejer med visningen, så den altid viser, hvilken vej du ser: {{ui:Top}} er op, {{ui:Front}} vender mod syd (siden, bogstavgitrene ses fra i {{ui:Facade}}), {{ui:Right}} vender mod øst, langs de nummererede gitre. Den er gennemsigtig, indtil du peger på den.

## Se fra en side, en kant eller et hjørne

1. Peg på kuben. Den del, der er under markøren, lyser op: midten af en flade, en kant (den lyser på begge flader, der deler den) eller et hjørne (på alle tre flader).
2. Klik på den. Visningen drejer for at se derfra og bevarer den samme midte og zoom.

Der er 26 steder at klikke: 6 flader ({{ui:Top}}, {{ui:Bottom}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}}, {{ui:Right}}), 12 kanter og 8 hjørner. Et hjørne giver den klassiske tre-fjerdedels visning; en kant ser ud til at ligge midt mellem to flader.

En fladevisning af kuben er en 3D-visning, ikke {{ui:Plan}} eller {{ui:Facade}}: intet er skåret væk, og modellen kan stadig drejes.

## Kredsbevægelse ved at trække i kuben

Træk i kuben for at dreje visningen, ligesom at kredse i selve visningen. Et træk tages aldrig som et klik, så du kan tage fat i kuben hvor som helst.

## Kompasringen

Ringen under kuben har N, Ø, S og V.

- **Træk i ringen** for at dreje modellen om den lodrette akse, som om den stod på en drejeskive. Ringen følger markøren.
- **Klik på et bogstav** for at se fra den side og bevare, hvor stejlt du kigger ned. I en visning lige oppefra går bogstavet, du klikker på, til bunden af skærmen.

## Visninger lige fra siden: pile

Når du kigger lige på en flade, vises små pile rundt om kuben:

- De fire **trekanter** bringer fladen på den side frem foran: trekanten over kuben viser fladen, der var øverst, og så videre.
- De to **buede pile** øverst til højre drejer billedet en kvart omgang med uret eller mod uret, uden at ændre hvilken flade du ser på. Brug dem til at dreje en plan, så en lang væg går hen over skærmen.

## Hjem

Hjemknappen øverst til venstre på kuben går tilbage til startvisningen i tre-fjerdedele og tilpasser hele modellen, ligesom tilpas-knappen. {{key:Home}} gør det samme, når kuben har tastaturfokus.

## Med tastaturet

{{key:Tab}} hen til kuben, og derefter:

| Tast | Gør |
|---|---|
| {{key:left}} / {{key:right}} | vælg en side, kant eller et hjørne rundt om kuben, i ottendedels drejninger (skærmlæsere siger hvilken) |
| {{key:up}} / {{key:down}} | vælg en højere eller lavere, op til {{ui:Top}} eller ned til {{ui:Bottom}} |
| {{key:Enter}} eller {{key:Space}} | se fra den valgte |
| {{key:Shift+left}} / {{key:Shift+right}} | drej visningen en kvart omgang om den lodrette akse |
| {{key:Home}} | startvisningen |
| {{key:Esc}} | forlad kuben |

Taster, du trykker på kuben, bliver ved kuben: de starter ikke DetailCraft-værktøjer.

## Aksedeling eller ingenting i stedet

Åbn {{ui:Indstillinger}} ({{key:Mod+,}}), fanen {{ui:DetailCraft}}, og sæt **Hjørneindikator** til {{ui:ViewCube}} (standard), {{ui:Akseikon}} (et lille X, Y, Z-mærke nederst til venstre: X rød, Y grøn, Z blå) eller {{ui:Ingen}}. Denne browser husker valget. Se [DetailCraft-indstillinger](topic:settings#corner-indicator).
