---
title: Förflytta dig i 3D-vyn
summary: Vrid, panorera och zooma med mus, pekplatta eller pekskärm, och när du i stället ska använda planvy och fasadvy.
keywords: kretsa, vrida, panorera, zooma, navigera, vy, kamera, pekplatta, touch, plan, fasad, anpassa, mus
from: 02c9c7b9
---

Vyn har tre lägen, som väljs i vyraden ovanför den: {{ui:3D}}, {{ui:Plan}} och {{ui:Elevation}}. Musknapparna gör olika saker i 3D än i plan och fasad, så läs båda tabellerna.

## I 3D

:::mouse
| För att | Gör så här |
|---|---|
| Vrida runt modellen | Dra med vänster knapp |
| Panorera | Dra med höger knapp, eller håll {{key:Shift}} och dra med vänster knapp |
| Zooma | Vrid hjulet, eller dra upp och ner med mittenknappen (hjulet nedtryckt) |
| Markera en del | Klicka på den (ett klick som flyttar sig mindre än några pixlar) |
| Se hela modellen | Anpassa-knappen längst till höger i vyraden |
:::

:::touch
| För att | Gör så här |
|---|---|
| Vrida runt modellen | Dra med ett finger |
| Panorera | Dra med två fingrar |
| Zooma | Nyp med två fingrar |
| Markera en del | Tryck på den |
| Se hela modellen | Anpassa-knappen längst till höger i vyraden |
:::

ViewCube uppe till höger (under vyraden) vrids med modellen: klicka på en yta, kant eller ett hörn för att se därifrån, dra för att vrida, eller klicka på dess hus-knapp för att gå tillbaka till utgångsläget. Se [ViewCube](topic:view-cube).

Modellen vrids kring vyns mitt, och hjulet zoomar mot vyns mitt, inte mot pekaren. För att titta nära på ett hörn, panorera det till mitten först och zooma sedan.

## I plan och fasad

Dessa vyer tittar rakt på modellen och kan inte vridas.

:::mouse
| För att | Gör så här |
|---|---|
| Panorera | Dra med vänster eller höger knapp |
| Zooma | Vrid hjulet, eller dra upp och ner med mittenknappen |
| Markera en del | Klicka på den |
:::

:::touch
| För att | Gör så här |
|---|---|
| Panorera | Dra med ett finger |
| Zooma | Nyp med två fingrar (att dra med två fingrar panorerar också) |
| Markera en del | Tryck på den |
:::

## På en Mac-pekplatta

:::mac
- **Zooma:** svep uppåt eller nedåt med två fingrar, eller nyp. Båda når vyn som zoom.
- **Vrid (3D):** tryck på pekplattan och dra med ett finger. Om du använder tryck för att klicka fungerar dubbeltryck och dra också när dra är påslaget i **System Settings, Accessibility, Pointer Control, Trackpad Options**.
- **Panorera (3D):** håll {{key:Shift}} och dra. Att hålla {{key:Ctrl}} eller {{key:Mod}} medan du drar panorerar också. Ett klick med två fingrar är ett högerklick, men att dra med det är besvärligt på en pekplatta.
- **Panorera (plan och fasad):** dra bara.
- En Magic Mouse har ingen mittenknapp: använd {{key:Shift}}-dra för att panorera och ett svep på dess yta för att zooma.
:::

Mer om högerklick och panorering utan mus: [Tangenter, möss och pekplattor](common:keys).

## Plan och fasad gör placering enkel

I {{ui:3D}} kan skärningar på olika nivåer ligga ovanpå varandra på skärmen, och ett klick går till den närmaste punkten. I {{ui:Plan}} och {{ui:Elevation}} kan bara punkterna på nivån eller rutnätslinjen du tittar på väljas.

1. Välj {{ui:Plan}}, och välj sedan en nivå i listan bredvid knapparna. Vyn tittar ner på den nivån; allt mer än 1,5 m ovanför den klipps bort.
2. Eller välj {{ui:Elevation}}, och välj sedan en bokstavsrutnätslinje ("Grid A", "Grid B" …). Vyn tittar rakt på den linjen; bara stål inom 1 m från den visas.

Fasader finns bara på bokstavsrutnätslinjer. För att arbeta på en linje med sifferrutnät (en ram från A till B), använd {{ui:3D}}, eller placera genom att skriva i formuläret {{ui:Add by grid}}. Se [Placera pelare, balkar och stag](topic:place-members#place-by-grid-without-clicking).

## Markera

- Klicka på en del för att markera den. Den får markeringsfärgen och panelen {{ui:Properties}} visar den.
- Klicka på tomt utrymme, eller tryck {{key:Esc}}, för att rensa markeringen.
- Stål går före betong: ett klick på en pelare inne i en genomskinlig plint markerar pelaren. Klicka på plinten bort från pelaren, eller på ett av dess armeringsjärn, för att markera plinten.
- Att klicka på en bult eller en ändplatta markerar dess förbindelse.
- I plan och fasad kan delar som klipps bort inte klickas på.
- Håll {{key:Shift}} (eller {{key:Ctrl}}, eller {{key:Mod}}) och klicka för att lägga till en del i markeringen eller ta bort den; {{key:Mod+A}} markerar allt. Det finns ännu inget fönstermarkering (dra en ruta). Vad du kan göra med flera: [Kopiera, klistra in och duplicera](topic:copy-paste).

Du kan också markera från listor: klicka på en märkning i {{ui:Part marks}} till vänster, en delmärkning i fliken {{ui:Bill of materials}}, eller {{ui:Select}} bredvid en rad i {{ui:Problems}}.

## Om vyn ser fel ut

- Tappat modellen? Välj anpassa-knappen.
- Vyn är tom eller grå med ett meddelande om WebGL: se [Felsökning](topic:troubleshooting#the-3d-view-is-missing).
- Allt fungerar fortfarande utan 3D-vyn, förutom klick i den: paneler, rapporter och exporter körs alla, och {{ui:Add by grid}} placerar delar genom att skriva.
