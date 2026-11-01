---
title: Komma igång med DetailCraft
summary: Vad DetailCraft gör i dag, hur du öppnar det och en första modell från rutnät till verkstadsritning på tio minuter.
keywords: start, första modellen, introduktion, ståldetaljering, armering, snabbstart, handledning, översikt
from: 3682c0d8
---

DetailCraft är appen för stål- och armeringsdetaljering i CadCraft-familjen. Du bygger en 3D-modell av en stålstomme på rutnät och nivåer, förbinder delarna och får det som verkstaden behöver: del- och sammanställningsmärken, en stycklista, verkstadsritningar för enskilda delar, DSTV NC-filer, en IFC-modell och en bockningsförteckning för plintarna.

Det här är en tidig version. Den gör en kort lista saker noggrant i stället för allt på en gång. Läs [Det som inte finns ännu](topic:not-built-yet) innan du planerar riktigt arbete kring den.

## Vad den gör i dag

- Rutnät och nivåer som du skriver in, i millimeter.
- Pelare, balkar, stag och plåtar från publicerade profilkataloger (AISC W, S, C, L, HSS och Pipe; europeiska IPE, HEA, HEB och UPN), plus egna parametriska profiler.
- Två förbindelser: en skruvad ändplatta från en balk till en pelarfläns och en fotplåt med fyra ankarbultar. Varje förbindelse kan kopieras till alla liknande knutar.
- Hål och urtag som du anger efter läge.
- Rektangulära plintar med bottennät och startjärn.
- Delmärken och sammanställningsmärken som uppdateras av sig själva efter varje ändring.
- Export: IFC4, DSTV NC-filer (I-profiler och plåtar), stycklista som CSV, bockningsförteckning som CSV och en verkstadsritning som PDF för en del.

## Öppna DetailCraft

1. Öppna DetailCraft i en webbläsare på en dator: Chrome, Edge, Firefox eller Safari. Se [Webbläsare och datorer](common:browsers).
2. Vänta tills skärmen har fyllts. Statusfältet längst ned säger "Ready. Open the Sample, or set grids and levels and start placing members."

Modellvyn kräver 3D-grafik (WebGL). Om mitten av skärmen säger "This browser could not start 3D graphics (WebGL)", se [Felsökning](topic:troubleshooting#the-3d-view-is-missing).

:::note
Dina modeller stannar på din dator. När du öppnar en modell läses den in i webbläsaren, och när du sparar laddas en fil ner. Ingenting laddas upp. Molnlagring finns inte ännu. Se [Vart dina filer tar vägen](common:your-files). Om du vill använda DetailCraft utan uppkoppling senare väljer du {{ui:Spara för offline}} i appfältet en gång medan du är uppkopplad; se [Arbeta offline](common:offline).
:::

:::offline
Du är offline. DetailCraft fungerar utan uppkoppling bara om det först har sparats för offline: knappen {{ui:Spara för offline}} i appfältet visar då {{ui:Redo för offline}}. Se [Arbeta offline](common:offline).
:::

## Titta på exemplet först

Det snabbaste sättet att se vad DetailCraft gör är exempelstommen.

1. Välj {{ui:Exempel}} i gruppen {{ui:Fil}} i verktygsfältet.
2. Vyn visar en stomme med två fack: sex pelare med fotplåtar, fyra balkar med ändplattor, ett stag och sju plintar med armering.
3. Klicka på en balk. Panelen {{ui:Egenskaper}} till höger visar dess delmärke, kapad längd, vikt och de hål som ändplattorna gjorde.
4. Öppna fliken {{ui:Stycklista}} längst ned för att se varje delmärke med antal och vikt.

Genomgången [Utforska exempelstommen](topic:sample-model) går igenom den bit för bit.

## Din första modell

En ny modell har redan rutnät 1 till 3 gånger A till B på 6000 mm och två nivåer, Nivå 1 på 0 och Nivå 2 på 4000.

1. Välj {{ui:Ny}}. Om den aktuella modellen har ändringar frågar DetailCraft om du vill spara dem först.
2. Välj {{ui:Planritning}} ovanför vyn. Nivålistan bredvid väljer Nivå 1.
3. Välj {{ui:Pelare}} i verktygsfältet eller tryck på {{key:C}}.
4. Klicka på rutnätsskärningen A/1. En W12x50-pelare visas från Nivå 1 till Nivå 2. Statusfältet säger var den hamnade.
5. Klicka på B/1, A/2 och B/2 för att placera tre till.
6. Välj Nivå 2 i nivålistan och välj sedan {{ui:Balk}} eller tryck på {{key:B}}.
7. Klicka på A/1 och sedan på A/2. En W16x26-balk förbinder de två pelartopparna, med överkant stål på nivån.
8. Tryck på {{key:Esc}} för att gå tillbaka till {{ui:Markera}} och klicka sedan på balken.
9. Välj {{ui:Ändplattor}} i gruppen {{ui:Förbind}}. Båda ändarna får en skruvad ändplatta, balken kapas tillbaka så att den passar och den första ändplattan är nu markerad.
10. Klicka på balken igen.
11. Välj {{ui:Verkstadsritning}} i gruppen {{ui:Utdata}}. En förhandsvisning av balkens verkstadsritning öppnas. Välj {{ui:Ladda ner PDF}}.
12. Tryck på {{key:Mod+S}} för att spara modellen. Webbläsaren laddar ner `Untitled.detailcraft.json`.

Byt namn på modellen i fältet {{ui:Namn}} uppe till vänster innan du sparar, så att filen och varje export får det namnet.

## Vart du går härnäst

- [En rundtur på skärmen](topic:workspace)
- [Ställ in rutnät och nivåer](topic:grids-and-levels)
- [Förflytta dig i 3D-vyn](topic:navigate-3d), med mus, styrplatta eller pekskärm
- [Om du kommer från annan detaljeringsprogramvara](topic:coming-from), om du kan ett stort detaljeringspaket
- [Använda den här hjälpen](common:help)
