---
title: Lim inn et kopiert område som referansebilde
summary: Kopier en del av et PDF-ark i MarkupCraft og lim det inn i DetailCraft i virkelig størrelse, liggende på et nivå under stålet, for å modellere over det.
keywords: bilde, referansebilde, underlag, bakgrunn, kopier område, markupcraft, pdf, spor, virkelig størrelse, målestokk, ugjennomsiktighet, overlegg
from: 0c48445f
---

Verktøyet Kopier område i MarkupCraft kopierer en del av et ark som et bilde som vet hvor stort det er. Lim det inn i DetailCraft, så ligger det flatt på et nivå, i virkelig størrelse, under rutenettet og stålet, og elementer kan plasseres over en plan fra tegningene.

## Lim det inn

1. Kopier området i MarkupCraft med {{ui:Mer}} › {{ui:Kopier et område på siden…}}, og deretter {{ui:Kopier}} (eller {{ui:Kopier som overlegg}}, som gjør papiret gjennomsiktig).
2. I DetailCraft (i samme nettleser): trykk {{key:Mod+V}} eller velg {{ui:Lim inn}}.

Bildet havner midt i rutenettet, på nivået som vises i {{ui:Plan}} (i 3D eller en fasade, på det laveste nivået), og det er valgt. Statuslinjen sier hvor stort det er.

- **Virkelig størrelse:** når arket hadde en tegningsmålestokk, tegnes én piksel som lengden den viser på tegningen.
- **Papirstørrelse:** når arket ikke hadde målestokk, er bildet like stort som området var på papiret, og statuslinjen sier det. Skriv inn en ny **mm per piksel** i {{ui:Egenskaper}} for å skalere det.

Et område kopiert som overlegg starter med den ugjennomsiktigheten det ble kopiert med.

{{key:Mod+V}} limer inn det som sist ble kopiert: området fra MarkupCraft, eller staver og fundamenter kopiert i DetailCraft. Hvis et annet bilde ble kopiert til utklippstavlen etter området (fra et annet program), limes ingenting inn; kopier området på nytt.

## Flytt, endre og slett det

- Klikk på bildet for å velge det (det som ligger foran det, velges først). En blå kontur viser at det er valgt.
- Dra det for å flytte det over nivået. Midten og hjørnene fester seg til rutenettskryss.
- Angi i {{ui:Egenskaper}} hvor midten skal ligge (x, y) og hvilket nivå det ligger på (z), i tillegg til **mm per piksel** og **ugjennomsiktighet**.
- {{key:Delete}} eller {{ui:Slett}} fjerner det.

Hver innliming, flytting, endring og sletting er ett steg: {{key:Mod+Z}} angrer det.

Bildet lagres i modellfilen, så det åpnes sammen med modellen. Det er bare en referanse: det er ikke med i tegninger, eksporter, {{ui:Stykkliste}} eller en kopi.
