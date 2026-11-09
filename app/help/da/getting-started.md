---
title: Kom i gang med DetailCraft
summary: Hvad DetailCraft kan i dag, hvordan du åbner det, og en første model fra gitre til værkstedstegning på ti minutter.
keywords: kom i gang, første model, introduktion, ståldetaljering, armering, hurtig start, vejledning, oversigt
from: e4f16bbe
---

DetailCraft er appen til stål- og armeringsdetaljering i CadCraft-familien. Du bygger en 3D-model af en stålramme på gitre og niveauer, forbinder den og får det, værkstedet har brug for: positionsnumre og samlingsmærker, en stykliste, værkstedstegninger af enkelte dele, DSTV NC-filer, en IFC-model og en bukkeliste for punktfundamenterne.

Dette er en tidlig version. Den gør en kort liste af ting omhyggeligt i stedet for alt på én gang. Læs [Hvad der endnu ikke er bygget](topic:not-built-yet), før du planlægger rigtigt arbejde med den.

## Hvad den gør i dag

- Gitre og niveauer, som du skriver ind, i millimeter.
- Søjler, bjælker, afstivninger og plader fra publicerede profilkataloger (AISC W, S, C, L, HSS og Pipe; europæiske IPE, HEA, HEB og UPN; britiske UB, UC, PFC, EA, UEA, SHS, RHS og CHS), samt dine egne parametriske profiler.
- To forbindelser: en boltet endeplade fra en bjælke til en søjleflange og en fodplade under en søjle med fire ankerbolte. Hver kan kopieres til alle lignende samlinger.
- Huller og udskæringer, indtastet efter position.
- Rektangulære punktfundamenter med en bundarmering og startjern.
- Positionsnumre og samlingsmærker, der opdaterer sig selv efter hver ændring.
- Eksporter: IFC4, DSTV NC-filer (I-profiler og plader), stykliste som CSV, bukkeliste som CSV og en værkstedstegning som PDF af én del.

## Åbn DetailCraft

1. Åbn DetailCraft i en desktopbrowser: Chrome, Edge, Firefox eller Safari. Se [Browsere og computere](common:browsers).
2. Vent, til skærmen er fyldt. Statuslinjen nederst siger "Klar. Åbn eksemplet, eller angiv gitre og niveauer, og begynd at placere dele."

Modelvisningen kræver 3D-grafik (WebGL). Hvis midten af skærmen siger "Denne browser kunne ikke starte 3D-grafik (WebGL)", se [Fejlfinding](topic:troubleshooting#the-3d-view-is-missing).

:::note
Dine modeller bliver på din computer. Åbning af en model læser den i browseren, og gemning downloader en fil. Intet bliver uploadet. Gem i skyen er endnu ikke tilgængeligt. Se [Hvor dine filer ligger](common:your-files). Hvis du senere vil bruge DetailCraft uden forbindelse, skal du én gang, mens du er online, vælge {{ui:Gem til offline brug}} i appbaren; se [Arbejd offline](common:offline).
:::

:::offline
Du er offline. DetailCraft virker uden forbindelse kun, hvis det først er gemt til offlinebrug: knappen {{ui:Gem til offline brug}} i appbaren viser så {{ui:Klar offline}}. Se [Arbejd offline](common:offline).
:::

## Se eksemplet først

Den hurtigste måde at se, hvad DetailCraft laver, er eksempelrammen.

1. Vælg {{ui:Sample}} i gruppen {{ui:File}} på værktøjslinjen.
2. Visningen viser en todelt ramme: seks søjler med fodplader, fire bjælker med endeplader, én afstivning og syv punktfundamenter med armering.
3. Klik på en bjælke. Panelet {{ui:Properties}} til højre viser dens positionsnummer, skærelængde, vægt og de huller, endepladerne har lavet.
4. Åbn fanen {{ui:Bill of materials}} nederst for at se hvert positionsnummer med antal og vægt.

Gennemgangen [Udforsk eksempelrammen](topic:sample-model) går igennem den del for del.

## Din første model

En ny model har allerede gitre 1 til 3 og A til B med 6000 mm imellem, samt to niveauer: Niveau 1 på 0 og Niveau 2 på 4000.

1. Vælg {{ui:New}}. Hvis den aktuelle model har ændringer, spørger DetailCraft først, om de skal gemmes.
2. Vælg {{ui:Plan}} over visningen. Niveaulisten ved siden af vælger Niveau 1.
3. Vælg {{ui:Column}} i værktøjslinjen, eller tryk {{key:C}}.
4. Klik på gitterkrydset A/1. En W12x50-søjle vises fra Niveau 1 til Niveau 2. Statuslinjen siger, hvor den blev placeret.
5. Klik på B/1, A/2 og B/2 for at placere tre mere.
6. Vælg Niveau 2 i niveaulisten, og vælg derefter {{ui:Beam}} eller tryk {{key:B}}.
7. Klik på A/1 og derefter A/2. En W16x26-bjælke forbinder de to søjletoppe, med stålets overkant på niveauet.
8. Tryk {{key:Esc}} for at gå tilbage til {{ui:Select}}, og klik derefter på bjælken.
9. Vælg {{ui:End plates}} i gruppen {{ui:Connect}}. Begge ender får en boltet endeplade, bjælken skæres til, og den første endeplade er nu valgt.
10. Klik på bjælken igen.
11. Vælg {{ui:Shop drawing}} i gruppen {{ui:Output}}. En forhåndsvisning af bjælkens værkstedstegning åbnes. Vælg {{ui:Download PDF}}.
12. Tryk {{key:Mod+S}} for at gemme modellen. Browseren downloader `Untitled.detailcraft.json`.

Giv modellen et navn i feltet {{ui:Name}} øverst til venstre, før du gemmer, så filen og alle eksporter får dets navn.

## Hvad du kan gå videre til

- [En rundtur på skærmen](topic:workspace)
- [Opsæt gitre og niveauer](topic:grids-and-levels)
- [Bevæg dig rundt i 3D-visningen](topic:navigate-3d), med mus, trackpad eller touchskærm
- [Kommer fra andet detaljeringssoftware](topic:coming-from), hvis du kender en stor detaljeringspakke
- [Brug denne hjælp](common:help)
