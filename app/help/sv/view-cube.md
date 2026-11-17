---
title: ViewCube
summary: Klicka på en yta, kant eller ett hörn på kuben i vyns hörn för att se därifrån, dra den för att rotera vyn, vrid kompassringen, gå runt en vy rakt framifrån och gå tillbaka hem.
keywords: view cube, viewcube, kub, kompass, norr, startvy, standardvyer, ovansida, framsida, höger, iso, hörn, kant, rotera, rotera vy, axelikon, hörnindikator, navigering
from: 3666ea8a
---

ViewCube sitter uppe till höger i 3D-vyn, under vyfältet (endast i {{ui:3D}}: {{ui:Planritning}} och {{ui:Fasad}} tittar redan rakt på modellen). Den vrids med vyn, så den visar alltid åt vilket håll du tittar: {{ui:Ovansida}} är uppåt, {{ui:Framsida}} vetter mot söder (den sida som bokstavsrutnäten syns från i {{ui:Fasad}}), {{ui:Höger}} vetter mot öster, längs sifferrutnäten. Den förblir genomskinlig tills du pekar på den.

## Titta från en sida, en kant eller ett hörn

1. Peka på kuben. Den del som ligger under pekaren lyser: mitten av en yta, en kant (den lyser på båda ytorna som delar den) eller ett hörn (på alla tre ytorna).
2. Klicka på den. Vyn vrids så att du tittar därifrån, och behåller samma mitt och zoom.

Det finns 26 platser att klicka på: 6 ytor ({{ui:Ovansida}}, {{ui:Undersida}}, {{ui:Framsida}}, {{ui:Baksida}}, {{ui:Vänster}}, {{ui:Höger}}), 12 kanter och 8 hörn. Ett hörn ger den klassiska trekvartsvyn; en kant ser ut halvvägs mellan två ytor.

En ytvy av kuben är en 3D-vy, inte {{ui:Planritning}} eller {{ui:Fasad}}: inget är bortskuret, och modellen kan fortfarande vridas.

## Rotera vyn genom att dra i kuben

Dra kuben för att vrida vyn, samma som att rotera i själva vyn. Ett drag räknas aldrig som ett klick, så du kan ta tag i kuben var som helst.

## Kompassringen

Ringen under kuben har N, Ö, S och V.

- **Dra i ringen** för att vrida modellen kring den vertikala axeln, som om den stod på en skivspelare. Ringen följer pekaren.
- **Klicka på en bokstav** för att titta från den sidan, och behåll hur brant du tittar nedåt. I en vy rakt uppifrån hamnar bokstaven du klickar på längst ned på skärmen.

## Vyer rakt mot en yta: pilar

När du tittar rakt mot en yta visas små pilar runt kuben:

- De fyra **trianglarna** tar ytan på den sidan till framsidan: triangeln ovanför kuben visar ytan som var överst, och så vidare.
- De två **böjda pilarna** uppe till höger vrider bilden en kvarts varv medurs eller moturs, utan att ändra vilken yta du tittar på. Använd dem för att vrida en planritning så att en lång vägg går tvärs över skärmen.

## Hem

Hus-knappen längst upp till vänster på kuben går tillbaka till startvyn i trekvart och passar in hela modellen, samma som passa-knappen. {{key:Home}} gör detsamma när kuben har tangentbordsfokus.

## Med tangentbordet

{{key:Tab}} till kuben, sedan:

| Tangent | Gör |
|---|---|
| {{key:left}} / {{key:right}} | väljer en sida, kant eller hörn runt kuben, i steg om en åttondel av ett varv (skärmläsare säger vilket) |
| {{key:up}} / {{key:down}} | väljer ett högre eller lägre, upp till {{ui:Ovansida}} eller ned till {{ui:Undersida}} |
| {{key:Enter}} eller {{key:Space}} | tittar från det valda |
| {{key:Shift+left}} / {{key:Shift+right}} | vrider vyn ett kvarts varv kring den vertikala axeln |
| {{key:Home}} | startvyn |
| {{key:Esc}} | lämnar kuben |

Tangenttryckningar på kuben stannar i kuben: de startar inte DetailCraft-verktyg.

## Axelikon eller inget i stället

Öppna {{ui:Inställningar}} ({{key:Mod+,}}), fliken {{ui:DetailCraft}}, och ställ in **Hörnindikator** till {{ui:ViewCube}} (startvärdet), {{ui:Axelikon}} (en liten X-, Y- och Z-markör nere till vänster: X röd, Y grön, Z blå) eller {{ui:Ingen}}. Den här webbläsaren kommer ihåg valet. Se [DetailCraft-inställningar](topic:settings#corner-indicator).
