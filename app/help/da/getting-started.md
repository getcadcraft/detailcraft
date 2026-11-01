---
title: Kom i gang med DetailCraft
summary: Hvad DetailCraft gør i dag, hvordan du åbner den, og en første model fra gitre til en værkstedstegning på ti minutter.
keywords: start, første model, introduktion, ståldetaljering, armering, hurtig start, vejledning, overblik
from: 3682c0d8
---

DetailCraft er appen til detaljering af stål og armering i CadCraft-familien. Du bygger en 3D-model af en stålramme på gitre og niveauer, forbinder den og får det, værkstedet har brug for: positions- og samlingsnumre, en stykliste, værkstedstegninger af enkeltdele, DSTV NC-filer, en IFC-model og en bukkeliste til fundamenterne.

Det er en tidlig build. Den gør en kort liste af ting omhyggeligt i stedet for alt på én gang. Læs [Hvad der ikke er bygget endnu](topic:not-built-yet), før du planlægger rigtigt arbejde omkring den.

## Hvad den gør i dag

- Gitre og niveauer, som du skriver ind, i millimeter.
- Søjler, bjælker, afstivninger og plader fra offentliggjorte profilkataloger (AISC W, S, C, L, HSS og Pipe; europæiske IPE, HEA, HEB og UPN) samt dine egne parametriske profiler.
- To forbindelser: en boltet endeplade fra en bjælke til en søjleflange og en fodplade under en søjle med fire ankerbolte. Hver kan kopieres til alle lignende samlinger.
- Huller og udskæringer, som du skriver ind efter position.
- Rektangulære punktfundamenter med en bundmåtte og studsarmering.
- Positions- og samlingsnumre, der opdaterer sig selv efter hver ændring.
- Eksporter: IFC4, DSTV NC-filer (I-profiler og plader), stykliste som CSV, bukkeliste som CSV og en værkstedstegning som PDF af én del.

## Åbn DetailCraft

1. Åbn DetailCraft i en browser på computer: Chrome, Edge, Firefox eller Safari. Se [Browsere og computere](common:browsers).
2. Vent på, at skærmen fyldes. Statuslinjen nederst siger "Klar. Åbn Eksempel, eller angiv gitre og niveauer og begynd at placere stålprofiler."

Modelvisningen kræver 3D-grafik (WebGL). Hvis midten af skærmen siger "This browser could not start 3D graphics (WebGL)", så se [Fejlfinding](topic:troubleshooting#the-3d-view-is-missing).

:::note
Dine modeller bliver på din computer. At åbne en model læser den i browseren, og at gemme downloader en fil. Der uploades ikke noget. Gemning i skyen er der ikke endnu. Se [Hvor dine filer havner](common:your-files). For at bruge DetailCraft uden forbindelse senere vælger du {{ui:Gem til offline brug}} i appfeltet én gang, mens du er online; se [Arbejd offline](common:offline).
:::

:::offline
Du er offline. DetailCraft virker uden forbindelse kun, hvis den først er gemt til offline brug: knappen {{ui:Gem til offline brug}} i appfeltet siger så {{ui:Klar offline}}. Se [Arbejd offline](common:offline).
:::

## Se først på eksemplet

Den hurtigste måde at se, hvad DetailCraft laver, er eksempelrammen.

1. Vælg {{ui:Eksempel}} i gruppen {{ui:Fil}} på værktøjslinjen.
2. Visningen viser en ramme med to fag: seks søjler med fodplader, fire bjælker med endeplader, én afstivning og syv fundamenter med armering.
3. Klik på en bjælke. Panelet {{ui:Egenskaber}} til højre viser dens positionsnummer, tilskåret længde, vægt og de huller, endepladerne lavede.
4. Åbn fanen {{ui:Stykliste}} nederst for at se hvert positionsnummer med dets antal og vægt.

Gennemgangen [Udforsk eksempelrammen](topic:sample-model) går den igennem stykke for stykke.

## Din første model

En ny model har allerede gitre 1 til 3 gange A til B ved 6000 mm og to niveauer, Level 1 ved 0 og Level 2 ved 4000.

1. Vælg {{ui:Ny}}. Hvis den nuværende model har ændringer, spørger DetailCraft, om de skal gemmes først.
2. Vælg {{ui:Plan}} over visningen. Niveaulisten ved siden af vælger Level 1.
3. Vælg {{ui:Søjle}} på værktøjslinjen, eller tryk på {{key:C}}.
4. Klik på gitterskæringen A/1. En W12x50-søjle dukker op fra Level 1 til Level 2. Statuslinjen siger, hvor den havnede.
5. Klik på B/1, A/2 og B/2 for at placere tre mere.
6. Vælg Level 2 i niveaulisten, og vælg derefter {{ui:Bjælke}}, eller tryk på {{key:B}}.
7. Klik på A/1 og derefter A/2. En W16x26-bjælke forbinder de to søjletoppe med overkanten af stålet på niveauet.
8. Tryk på {{key:Esc}} for at gå tilbage til {{ui:Vælg}}, og klik derefter på bjælken.
9. Vælg {{ui:Endeplader}} i gruppen {{ui:Forbind}}. Begge ender får en boltet endeplade, bjælken skæres tilbage, så den passer, og den første endeplade er nu markeret.
10. Klik på bjælken igen.
11. Vælg {{ui:Værkstedstegning}} i gruppen {{ui:Uddata}}. Et eksempel på bjælkens værkstedstegning åbner. Vælg {{ui:Download PDF}}.
12. Tryk på {{key:Mod+S}} for at gemme modellen. Browseren downloader `Untitled.detailcraft.json`.

Omdøb modellen i feltet {{ui:Navn}} øverst til venstre, før du gemmer, så filen og hver eksport bærer dens navn.

## Hvor du kan gå videre

- [En rundvisning på skærmen](topic:workspace)
- [Sæt gitre og niveauer op](topic:grids-and-levels)
- [Bevæg dig rundt i 3D-visningen](topic:navigate-3d), med en mus, en pegeplade eller en touchskærm
- [Hvis du kommer fra anden detaljeringssoftware](topic:coming-from), hvis du kender en stor detaljeringspakke
- [Brug denne hjælp](common:help)
