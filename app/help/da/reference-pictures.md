---
title: Indsæt et kopieret område som referencebillede
summary: Kopiér en del af et PDF-ark i MarkupCraft og indsæt det i DetailCraft i sin rigtige størrelse, liggende på et niveau under stålet, så du kan modellere over det.
keywords: billede, referencebillede, underlag, baggrund, kopiér område, markupcraft, pdf, aftegning, rigtig størrelse, målestok, opacitet, overlay
from: 0c48445f
---

MarkupCraft's værktøj til at kopiere et område kopierer en del af et ark som et billede, der kender sin størrelse. Indsæt det i DetailCraft, og det ligger fladt på et niveau i sin rigtige størrelse under gitteret og stålet, så du kan placere elementer over en plan fra tegningerne.

## Indsæt det

1. I MarkupCraft kopierer du området med {{ui:Mere}} › {{ui:Kopiér et område af siden…}} og derefter {{ui:Kopiér}} (eller {{ui:Kopiér som overlay}}, som gør papiret gennemsigtigt).
2. I DetailCraft (samme browser) trykker du på {{key:Mod+V}} eller vælger {{ui:Sæt ind}}.

Billedet lander midt i gitteret på det niveau, der vises i Plan (i 3D eller i en facade, på det laveste niveau), og det er valgt. Statuslinjen viser, hvor stort det er.

- **Rigtig størrelse:** når arket havde en tegningsmålestok, tegnes én pixel som den længde, den viser på tegningen.
- **Papirstørrelse:** når arket ikke havde en målestok, er billedet lige så stort, som området var på papiret, og statuslinjen siger det. Skriv en ny **mm pr. pixel** i {{ui:Egenskaber}} for at skalere det.

Et område kopieret som overlay starter med den opacitet, det blev kopieret med.

{{key:Mod+V}} indsætter det, du kopierede sidst: området fra MarkupCraft eller elementer og fundamenter kopieret i DetailCraft. Hvis et andet billede blev lagt på udklipsholderen efter området (fra et andet program), indsættes der intet; kopiér området igen.

## Flyt, ændr og slet det

- Klik på billedet for at vælge det (det, der ligger foran det, vælges først). En blå kontur viser, at det er valgt.
- Træk det for at flytte det hen over niveauet. Dets midte og hjørner snapper til gittersskæringspunkter.
- I {{ui:Egenskaber}} skriver du, hvor dets midte skal ligge (x, y) og på hvilket niveau det ligger (z), dets **mm pr. pixel** og dets **opacitet**.
- {{key:Delete}} eller {{ui:Slet}} fjerner det.

Hver indsætning, flytning, ændring og sletning er ét trin: {{key:Mod+Z}} fortryder det.

Billedet gemmes i modelfilen, så det åbnes sammen med modellen. Det er kun en reference: det er ikke med i tegninger, eksporter, {{ui:Stykliste}} eller en kopi.
