---
title: Geringsskarvar
summary: Förbind två I-profiler som möts i en vinkel: båda ändar kapas i planet som halverar vinkeln, med ändplattor, bultar och avstyvningar om du vill ha dem.
keywords: gering, geringsskarv, knut, knutbalk, portalram, nock, hörn, vinkelkapning, snedkapning, ändplatta, bultad ändplatta, avstyvning, förbind
from: cd8380d4
---

En gering förbinder två I-profiler vars ändar möts i en vinkel, till exempel knuten i en portalram, en nock eller två balkar som vänder runt ett hörn i plan. DetailCraft kapar båda ändarna i planet som halverar vinkeln mellan dem, så att de två kapytorna passar. Om du vill lägger den till en ändplatta på varje kapad ände, bultar ihop de två plattorna och lägger ett par livavstyvningar i varje del.

## Var den fungerar

- Två **I-profiler** (IPE, HEA, HEB, W och liknande) vars **ändar möts i samma nod**. Vilken del som helst kan ritas åt vilket håll som helst.
- Vinkeln mellan delarna måste vara minst 15°. Delar i linje nekas: använd en [skarv](topic:splices).
- Den enkla kapningen (utan plattor) fungerar oavsett hur delarna möts. **Ändplattor** kräver att de två delarna möts i planet för sina liv, som i en portalknut eller en nock. Två balkar som vänder runt ett hörn i plan möts i planet för sina flänsar, så de får bara den enkla kapningen.
- Delar av olika storlek förbinds, men med en varning: deras kapytor passar inte.

## Lägg till en gering

1. Markera de två delarna: klicka på den ena, sedan {{key:Shift}}+klick på den andra.
2. Välj {{ui:Mitre}} i menyn {{ui:More}} i gruppen {{ui:Connect}}. Dialogrutan Gering öppnas.
3. Ange de numrerade fälten. Ritningen bredvid görs från dina siffror när du skriver, och dess numrerade cirklar visar vad varje fält styr.
4. Välj {{ui:Add the mitre}}. Om du markerade fler än två delar får varje fri skarv bland dem samma gering.

Om du vill ändra en gering senare markerar du den (klicka på en av dess plattor) och väljer {{ui:Mitre dialog with preview}} i högerpanelen, eller ändrar inställningarna där direkt. En enkel kapning har inga plattor att klicka på: markera dess två delar och välj {{ui:Mitre}} igen, så öppnas dialogrutan på den geringen. {{ui:Apply to similar (n)}} kopierar den till varje fri skarv mellan delar med samma två profiler i samma vinkel.

## De numrerade fälten (mm)

| Nr | Inställning | Standard | Vad den gör |
|---|---|---|---|
| 1 | Glipa mellan plattorna (eller kapytorna) | 0 | Fri glipa i skarven. Varje sida behåller hälften |
| 2 | Ändplattor, plattjocklek | på, 20 | En ändplatta svetsad runt hela varje kapad ände. Avmarkera för en enkel kapning |
| 3 | Bultrader, radavstånd, gjutlinje och yttre rad | 4, 0, 0, av | Avstånd 0 sprider raderna jämnt mellan flänsarna. Gjutlinje 0 = halva plattbredden, minst 2,4 × hålet. Den yttre raden hamnar i plattans förlängning utanför den yttre flänsen |
| 4 | Platta förbi den yttre flänsen | 0 | Hur långt plattorna når förbi den yttre flänsen, längs kapningen |
| 5 | Platta förbi den inre flänsen | 0 | Samma på insidan |
| 6 | Livavstyvningar, avstånd förbi kapningen | av, 50 | Ett par i varje del, på båda sidor om livet, vinkelrätt mot delen, detta långt förbi dess kapning |
| 7 | Avstyvningens tjocklek | 10 | |

Under {{ui:Bolts}}: bultdiameter, hål, kvalitet och längdtillägg (20, 22, A325, 30), som för ändplattor. Under {{ui:Plates and welds}}: plattbredd (0 = flänsens bredd), filsvetsens storlek (8) och plattmaterial (A36).

## Vad du får

- **Kapningarna.** Varje dels ände kapas i sitt plan. Dess längd i listor, ritningar och NC-filer är den **totala längden**, från dess raka ände till den yttersta punkten på kapningen.
- **Plattorna** hör till sin egen del: varje dels sammanställning är delen, dess ändplatta och dess avstyvningar. Bultarna är byggbultar för skarven: stycklistan räknar dem en gång, och varje dels sammanställningsritning listar dem som lösa bultar.
- **Ritningar** visar de snedställda ändarna och plattorna; verkstadsritningen för en gerad del anger varje kapnings vinkel från kvadrat.
- **NC-filer** (DSTV) bär snedkapningsvinklarna i huvudet, som standarden kräver, och konturer som följer kapningen. Kontrollera dem i verkstadens egen NC-visare innan du kapar, precis som för alla NC-filer.
- **IFC** klipper varje dels extrudering efter dess kapningsplan, så att andra program visar den verkliga kapningen.
- **Märkningar:** en gerad del är en annan bit än en rakt kapad av samma längd. Två delar med samma kapningar delar en märkning, som de två takbalkarna i en nock gör.

## Bra att veta

- Geringen är levande. Flytta eller ändra storlek på någon av delarna så följer kapningen, plattorna och bultarna. Tar du bort någon av delarna försvinner geringen, och den andra delens ände blir rak igen.
- Varningar använder samma minimivärden enligt EN 1993-1-8 som de andra förbindelserna (ände- och kantavstånd 1,2 × hålet, rader 2,2 × hålet, gjutlinje 2,4 × hålet), plus bultrader för nära en fläns, plattor smalare än flänsarna och avstyvningar utan plats.
- Värdena är utgångsvärden, inte en dimensionering. DetailCraft kontrollerar inte förbindelsens hållfasthet, och den gör ingen vinkelbalk (knutförstärkning), ingen svetsad gering med stumsvets och inga avstyvningar i linje med den andra delens flänsar.
