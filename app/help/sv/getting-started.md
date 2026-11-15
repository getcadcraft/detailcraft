---
title: Komma igång med DetailCraft
summary: Vad DetailCraft gör idag, hur du öppnar det och en första modell från rutnät till verkstadsritning på tio minuter.
keywords: komma igång, första modell, introduktion, stålkonstruktion, armering, snabbstart, handledning, översikt
from: e4f16bbe
---

DetailCraft är appen för detaljering av stål och armering i CadCraft-familjen. Du bygger en 3D-modell av en stålram på rutnät och nivåer, förbinder den och får det verkstaden behöver: del- och monteringsmärken, en stycklista, verkstadsritningar för enskilda delar, DSTV NC-filer, en IFC-modell och en bockningsförteckning för plintarna.

Det här är en tidig version. Den gör en kort lista saker noggrant i stället för allt på en gång. Läs [Vad som inte finns ännu](topic:not-built-yet) innan du planerar riktigt arbete kring den.

## Vad den gör idag

- Rutnät och nivåer som du skriver in, i millimeter.
- Pelare, balkar, stag och plåtar från publicerade profilkataloger (AISC W, S, C, L, HSS och Pipe; europeiska IPE, HEA, HEB och UPN; brittiska UB, UC, PFC, EA, UEA, SHS, RHS och CHS), samt dina egna parametriska profiler.
- Två förbindelser: en bultad ändplatta från en balk till en pelarfläns, och en pelarfotplåt med fyra ankarstänger. Var och en kan kopieras till varje liknande skarv.
- Hål och urtag som du skriver in efter position.
- Rektangulära plattplintar med en undre armeringsmatta och startjärn.
- Del- och monteringsmärken som uppdateras av sig själva efter varje ändring.
- Exporter: IFC4, DSTV NC-filer (I-profiler och plåtar), stycklista som CSV, bockningsförteckning som CSV och en verkstadsritning i PDF för en del.

## Öppna DetailCraft

1. Öppna DetailCraft i en webbläsare på datorn: Chrome, Edge, Firefox eller Safari. Se [Webbläsare och datorer](common:browsers).
2. Vänta tills skärmen fyller fönstret. Statusfältet längst ned säger "Klar. Öppna Exempel, eller ange rutnät och nivåer och börja placera element."

Modellvyn behöver 3D-grafik (WebGL). Om mitten av skärmen säger "Webbläsaren kunde inte starta 3D-grafik (WebGL)", se [Felsökning](topic:troubleshooting#the-3d-view-is-missing).

:::note
Dina modeller stannar på din dator. Att öppna en modell läser den i webbläsaren, och att spara laddar ner en fil. Inget laddas upp. Molnsparning finns inte ännu. Se [Var dina filer hamnar](common:your-files). För att använda DetailCraft utan anslutning senare väljer du {{ui:Spara för offline}} i appfältet en gång medan du är online; se [Arbeta offline](common:offline).
:::

:::offline
Du är offline. DetailCraft fungerar utan anslutning bara om det sparats för offlineanvändning först: knappen {{ui:Spara för offline}} i appfältet visar då {{ui:Redo för offline}}. Se [Arbeta offline](common:offline).
:::

## Titta på exemplet först

Det snabbaste sättet att se vad DetailCraft gör är exempelramen.

1. Välj {{ui:Exempel}} i gruppen {{ui:Fil}} i verktygsfältet.
2. Vyn visar en ram med två fack: sex pelare med fotplåtar, fyra balkar med ändplattor, ett stag och sju plintar med armering.
3. Klicka på en balk. Panelen {{ui:Egenskaper}} till höger visar dess delmärke, kapad längd, vikt och hålen som ändplattorna gjorde.
4. Öppna fliken {{ui:Stycklista}} längst ned för att se varje delmärke med antal och vikt.

Genomgången [Utforska exempelramen](topic:sample-model) går igenom den bit för bit.

## Din första modell

En ny modell har redan rutnät 1 till 3 med A till B på 6000 mm och två nivåer: Nivå 1 på 0 och Nivå 2 på 4000.

1. Välj {{ui:Ny}}. Om den aktuella modellen har ändringar frågar DetailCraft om de ska sparas först.
2. Välj {{ui:Planritning}} ovanför vyn. Nivålistan bredvid väljer Nivå 1.
3. Välj {{ui:Pelare}} i verktygsfältet, eller tryck på {{key:C}}.
4. Klicka på rutnätsskärningen A/1. En pelare W12x50 visas från Nivå 1 till Nivå 2. Statusfältet säger var den hamnade.
5. Klicka på B/1, A/2 och B/2 för att placera tre till.
6. Välj Nivå 2 i nivålistan, och välj sedan {{ui:Balk}} eller tryck på {{key:B}}.
7. Klicka på A/1 och sedan på A/2. En balk W16x26 förbinder de två pelartopparna, med stålets överkant på nivån.
8. Tryck på {{key:Esc}} för att gå tillbaka till {{ui:Markera}}, och klicka sedan på balken.
9. Välj {{ui:Ändplattor}} i gruppen {{ui:Förbind}}. Båda ändarna får en bultad ändplatta, balken kapas för att passa, och den första ändplattan är nu markerad.
10. Klicka på balken igen.
11. Välj {{ui:Verkstadsritning}} i gruppen {{ui:Utdata}}. En förhandsvisning av balkens verkstadsritning öppnas. Välj {{ui:Ladda ner PDF}}.
12. Tryck på {{key:Mod+S}} för att spara modellen. Webbläsaren laddar ner `Untitled.detailcraft.json`.

Byt namn på modellen i fältet {{ui:Namn}} längst upp till vänster innan du sparar, så att filen och varje export får dess namn.

## Vart du går härnäst

- [En rundtur i skärmbilden](topic:workspace)
- [Ställ in rutnät och nivåer](topic:grids-and-levels)
- [Rör dig i 3D-vyn](topic:navigate-3d), med mus, pekplatta eller pekskärm
- [Om du kommer från annan detaljeringsprogramvara](topic:coming-from)
- [Använda hjälpen](common:help)
