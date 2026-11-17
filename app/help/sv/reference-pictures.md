---
title: Klistra in ett kopierat område som referensbild
summary: Kopiera en del av ett PDF-blad i MarkupCraft och klistra in den i DetailCraft i verklig storlek, liggande på en nivå under stålet, för att modellera över den.
keywords: bild, referensbild, underlag, bakgrund, kopiera område, markupcraft, pdf, spåra, verklig storlek, skala, opacitet, överlägg
from: 0c48445f
---

Verktyget Kopiera område i MarkupCraft kopierar en del av ett blad som en bild som vet hur stor den är. Klistra in den i DetailCraft så ligger den plant på en nivå, i verklig storlek, under rutnätet och stålet, så att du kan placera stänger över en plan från ritningarna.

## Klistra in den

1. I MarkupCraft kopierar du området med {{ui:Mer}} › {{ui:Kopiera ett område på sidan…}}, och sedan {{ui:Kopiera}} (eller {{ui:Kopiera som överlägg}}, som gör papperet genomskinligt).
2. I DetailCraft (samma webbläsare) trycker du på {{key:Mod+V}} eller väljer {{ui:Klistra in}}.

Bilden hamnar mitt i rutnätet på nivån som visas i {{ui:Planritning}} (i 3D eller en fasad, på den lägsta nivån) och är markerad. Statusfältet anger hur stor den är.

- **Verklig storlek:** när bladet hade en ritningsskala ritas en pixel som den längd den visar på ritningen.
- **Pappersstorlek:** när bladet saknade skala är bilden lika stor som området var på papperet, och statusfältet anger det. Skriv en ny **mm per pixel** i {{ui:Egenskaper}} för att skala den.

Ett område som kopierats som överlägg startar med den opacitet det kopierades med.

{{key:Mod+V}} klistrar in det du kopierade senast: området från MarkupCraft, eller stänger och plintar kopierade i DetailCraft. Om en annan bild kopierades till urklippet efter området (från ett annat program) klistras inget in; kopiera området igen.

## Flytta, ändra och ta bort den

- Klicka på bilden för att markera den (det som ligger framför den väljs först). En blå kontur visar att den är markerad.
- Dra den för att flytta den över nivån. Dess mitt och hörn fäster vid rutnätets skärningspunkter.
- I {{ui:Egenskaper}} skriver du var dess mitt ska ligga (x, y) och nivån den ligger på (z), dess **mm per pixel** och dess **opacitet**.
- {{key:Delete}} eller {{ui:Ta bort}} tar bort den.

Varje inklistring, flyttning, ändring och borttagning är ett steg: {{key:Mod+Z}} ångrar det.

Bilden sparas i modellfilen, så den öppnas med modellen. Den är endast en referens: den finns inte med i ritningar, exporter, stycklistan eller en kopia.
