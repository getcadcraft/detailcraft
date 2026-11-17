---
title: Utforska exempelramen
summary: Öppna den inbyggda tvåfackiga ramen och använd den för att lära dig vad DetailCraft tillverkar, från märken till NC-filer.
keywords: exempel, exempelram, demo, ram, lär dig, rundtur, prova
from: 5c5944dd
---

Exempelramen är en liten, komplett modell: varje typ av sak som DetailCraft bygger förekommer minst en gång. Det är det snabbaste sättet att lära känna appen och att testa en export innan du förlitar dig på den.

## Öppna den

1. Välj {{ui:Exempel}} i gruppen {{ui:Fil}}.
2. Om din nuvarande modell har osparade ändringar väljer du {{ui:Spara först}} eller {{ui:Kassera ändringar}}.
3. Statusfältet säger ”Exempelram: 6 pelare med fotplåtar, 4 balkar med ändplattor, ett stag, 7 plintar med armering.”

Exemplet öppnas som en ny modell som heter ”Exempelram”. Det ändrar inget annat, och det finns inget att ångra.

## Vad den innehåller

- **Rutnät** 1, 2, 3 vid 6000 mm och A, B vid 7000 mm. **Nivåer** Nivå 1 vid 0 och Nivå 2 vid 4000.
- **Sex pelare**, W12x50, från Nivå 1 till Nivå 2 vid varje skärning, var och en på en 25 mm fotplåt med fyra ankarbultar.
- **Fyra balkar**, W16x26, på Nivå 2 längs rutnätslinjerna A och B, stålets överkant på nivån, med en jämnt anslutande bultad ändplatta i båda ändar (åtta totalt).
- **Ett stag**, HSS4x4x1/4, från A/1 på Nivå 1 upp till A/2 på Nivå 2.
- **Sex plintar**, 2000 x 2000 x 600, en under varje pelare, med en krokad nedre matta åt båda håll.
- **En plint till** bredvid ramen, 2400 x 1800 x 600, med sex krokade startjärn som står upp för en betongpelare.

## Saker att prova

1. Klicka på en balk. Läs av dess {{ui:Delmärke}}, {{ui:Sammanställning}}, {{ui:Kapad längd}} och {{ui:Avkortning}}: den kapade längden är kortare än rutnätsavståndet på 6000 mm eftersom varje ändplatta kapar tillbaka balken med halva pelardjupet plus plåttjockleken.
2. Klicka på en pelare. Under {{ui:Hål}} listas hålen som ändplattorna gjort i dess fläns ("8 hål från förbindelser"; mittenpelarna har 16, en uppsättning i varje fläns).
3. I listan {{ui:Delmärken}} till vänster ser du att alla fyra balkarna delar ett märke: de är samma stålstycke. Hörnpelarna delar också ett märke, trots att hålen vetter åt motsatta håll, eftersom en pelare som vänds ände mot ände är samma stycke. Mittenpelarna, med hål i båda flänsarna, får ett annat märke.
4. Klicka på en ändplatta (eller en av dess bultar). Panelen {{ui:Egenskaper}} visar plåt-, bult- och svetsinställningarna, de bultar den skapar (med deras längd beräknad från greppet) och eventuella varningar om kantavstånd.
5. Öppna fliken {{ui:Stycklista}}. Delar, sammanställningar (en balk med sina två ändplattor är en sammanställning) samt bultar och ankarbultar listas med vikter. Du bör se sex delmärken: c1 (de två mittenpelarna) och c2 (de fyra hörnpelarna), båda W12x50 vid 3975 mm; b1, fyra W16x26-balkar vid 5650 mm; br1, staget; p1, åtta PL20x180-ändplattor; och p2, sex PL25x400-fotplåtar. Infästningarna är 64 bultar 20 x 70 A325 och 24 ankarbultar 20 x 575.
6. Öppna fliken {{ui:Bockningsförteckning}}. De sex identiska plintarna delar postnummer; pelarplinten lägger till egna.
7. Klicka på staget och titta i gruppen {{ui:Utdata}}: {{ui:Verkstadsritning}} är nedtonad, eftersom verkstadsritningar hittills bara omfattar I-profiler och plåtar.
8. Välj {{ui:NC-filer}}. Zip-filen innehåller en fil för varje I-profils- och plåtmärke; statusfältet anger att staget inte skrevs.
9. Välj {{ui:IFC}} och öppna filen i valfri IFC-visare för att kontrollera hur din andra programvara läser den.

## Använd den som utgångspunkt

Exemplet är en vanlig modell. Ändra den och döp sedan om den i fältet {{ui:Namn}} och spara den under sitt nya namn med {{key:Mod+S}}.
