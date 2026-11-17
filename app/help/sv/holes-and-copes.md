---
title: Lägg till hål och urtag
summary: Skriv in hål i liv, flänsar och plåtar, och urta flänsarna vid en balkände, mätt från delens kapade ände.
keywords: hål, bulthål, urtag, skåra, kapning, urtagning, borra, stansa, hål i liv, hål i fläns
from: 33d12398
---

Hål och urtag skrivs in med position. De hör till elementet och flyttar med det.

Hål som görs av förbindelser (ändplattor, fotplåtar) läggs till åt dig; du skriver inte in dem. De listas som ”… hål från förbindelser (redigera förbindelsen)”.

## Var positionerna mäts från

- **x** går längs delen från dess **kapade början**: startänden efter att en förbindelse har kapat tillbaka den. Alltså är x = 0 stålets verkliga ände, inte rutnätspunkten.
- **y** mäts tvärs över ytan från profilens centrum:
   - på **livet**: uppåt (positivt) eller nedåt från mitten av höjden;
   - på en **fläns** eller en **plåt**: tvärs över bredden, från mittlinjen.
- Elementets början är den första punkt du klickade när du placerade det. Raderna {{ui:Ändar (x, y, z mm)}} visar vilken ände som är vilken.

## Lägg till ett hål

1. Markera elementet.
2. I rutan {{ui:Hål}} i panelen {{ui:Egenskaper}}, välj {{ui:Yta}}: {{ui:Liv}}, {{ui:Överfläns}} eller {{ui:Underfläns}} (för en I-profil, U-profil eller rektangulärt rör), eller {{ui:Plåtyta}} (för en plåt).
3. Skriv in {{ui:x längs (mm)}}, {{ui:y tvärs (mm)}} och {{ui:Diameter (mm)}}. Formuläret startar på x 100, y 0, diameter 22.
4. Välj {{ui:Lägg till hål}}.

Statusfältet visar ”Hål tillagt. x mäts från den kapade början; y från profilens centrum (liv: uppåt, fläns/plåt: tvärs).” Hålet visas i listan, och i vyn som en mörk propp genom ytan.

För att ta bort ett hål, välj × bredvid det i listan.

Vinkeljärn och runda rör tar inte hål ännu: deras ruta {{ui:Hål}} säger det.

:::note
I 3D-vyn ritas hål som mörka proppar, inte skurna genom stålet. De är riktiga hål i NC-filerna, verkstadsritningarna och IFC-exporten.
:::

Ett hål vars x ligger bortom någon ände av delen visas på fliken {{ui:Problem}} som ”ett hål ligger utanför delens ände”.

## Lägg till ett urtag

Urtag är till för I-profiler: de skär bort övre eller undre fläns (och så mycket av livet) i ena änden, så att balken går fri från ett annat element.

1. Markera ett element med I-profil.
2. I rutan {{ui:Urtag}}, välj {{ui:Slutet}} ({{ui:Början}} eller {{ui:Slutet}}) och {{ui:Sida}} ({{ui:Ovansida}} eller {{ui:Undersida}}).
3. Skriv in {{ui:Längd (mm)}} (längs balken från den änden) och {{ui:Djup (mm)}} (nedåt från ovansidan, eller uppåt från undersidan). Formuläret startar på 100 x 40.
4. Välj {{ui:Lägg till urtag}}.

Vyn visar urtaget utskuret ur stålet. Listan läser till exempel ”Ovansida vid början: 100 x 40”. Ta bort det med dess ×.

Urtag är kvadratiska: det finns ännu ingen radie i innerhörnet.

## Hur hål och urtag påverkar märkning

Två delar får bara samma delmärkning om deras hål och urtag stämmer överens inom 1 mm, med hänsyn till att delen vänds. Om du lägger till ett hål i en balk i en grupp får den en ny märkning. Se [Märkningsregler](topic:mark-rules).
