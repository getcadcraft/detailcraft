---
title: Tangenter och musåtgärder
summary: Varje tangentbordsgenväg samt mus-, pekplatte- och touchåtgärder i DetailCraft, direkt från källkoden.
keywords: tangentbord, genvägar, snabbtangenter, tangenter, mus, pekplatta, touch, ctrl, command, snabbguide
from: 05a2dea0
---

Så skrivs tangenter i den här hjälpen: [Tangenter, möss och pekplattor](common:keys). På Mac är {{key:Mod}} Cmd-tangenten; annars är det Ctrl.

## Verktyg

Dessa fungerar när markören inte står i ett text- eller sifferfält.

| Tangent | Gör |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:B}} | {{ui:Beam}} |
| {{key:C}} | {{ui:Column}} |
| {{key:R}} | {{ui:Brace}} |
| {{key:P}} | {{ui:Plate}} |
| {{key:F}} | {{ui:Footing}} |
| {{key:S}} | {{ui:Stair}} |
| {{key:M}} | Flytta markeringen genom att välja två rutnätsskärningar ([Markera med fönster, flytta, rotera, spegla, ändra flera](topic:select-and-change)) |
| {{key:Esc}} | Släpp ett markeringsfönster som dras, eller lägg tillbaka dragna delar; avbryt en flyttning, första punkten för en balk, ett stag eller en plåt, eller en inklistring; tryck igen för att gå tillbaka till {{ui:Select}}; i {{ui:Select}} rensas markeringen. Med menyn {{ui:More}} öppen stängs den |
| {{key:Delete}} eller {{key:Backspace}} | Ta bort markeringen (allt markerat, i ett steg i Ångra) |

## Fil och redigering

| Tangent | Gör |
|---|---|
| {{key:Mod+S}} | Spara modellen (laddar ner). Fungerar även när du skriver i ett fält |
| {{key:Mod+O}} | Öppna en modell. Fungerar även när du skriver i ett fält |
| {{key:Mod+Z}} | Ångra (utanför textfält; i ett textfält ångras din inskrivning) |
| {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} | Gör om |

## Kopiera och klistra in

Dessa fungerar när markören inte står i ett text- eller sifferfält (där kopieras, klistras in och markeras din text som vanligt). Varje inklistring, klippning, duplicering eller borttagning är ett steg i Ångra. Mer: [Kopiera, klistra in och duplicera](topic:copy-paste).

| Tangent | Gör |
|---|---|
| {{key:Mod+C}} | {{ui:Copy}} de markerade balkarna, staven och plintarna (med deras hål, urtag och förbindelser) |
| {{key:Mod+X}} | {{ui:Cut}}: kopiera markeringen och ta sedan bort den |
| {{key:Mod+V}} | {{ui:Paste}}: kopian följer pekaren; klicka på en rutnätsskärning för att placera den |
| {{key:Mod+Shift+V}} | {{ui:Paste in place}}: på de koordinater den kopierades från |
| {{key:Mod+D}} | {{ui:Duplicate}}: en kopia direkt, förskjuten med avståndet i [DetailCraft-inställningar](topic:settings) |
| {{key:Mod+A}} | {{ui:Select all}}: alla balkar, förbindelser och plintar |
| {{key:Esc}} | {{ui:Select none}} |

Om du har markerat text på sidan (i en rapporttabell till exempel) och inget i modellen, kopierar {{key:Mod+C}} texten som vanligt.

{{ui:New}}, {{ui:Sample}} och exporterna har inga tangenter; använd verktygsfältet.

Ingen av dessa tangenter gör något medan en dialogruta (förhandsvisningen av verkstadsritningen eller en fråga) är öppen.

## Fält och paneler

| Tangent | Gör |
|---|---|
| {{key:Enter}} eller {{key:Tab}} | Tillämpa ett inskrivet värde (varje ändring är ett steg i Ångra) |
| {{key:Enter}} i ett fält för {{ui:Grids}}, {{ui:Levels}}, {{ui:Custom profile}}, hål eller urtag | Samma som att välja den formens knapp |
| {{key:Left}} {{key:Right}} | Flytta mellan flikarna {{ui:Problems}}, {{ui:Bill of materials}} och {{ui:Bending schedule}} när en flik har fokus |
| {{key:Esc}} | Stäng förhandsvisningen av verkstadsritningen eller en frågedialog (samma som {{ui:Cancel}}) |

## Skärm och hjälp

| Tangent | Gör |
|---|---|
| {{key:Ctrl+Shift+F}} | Växla mellan normal vy, helskärm och helskärm med fälten dolda. Ctrl på alla datorer, även Mac |
| {{key:Mod+,}} | Öppna {{ui:Settings}} ([DetailCraft-inställningar](topic:settings)) |
| {{key:Esc}} | Lämna helskärm |
| {{key:F1}} | Öppna den här hjälpen |

## Mus

| Åtgärd | I 3D | I plan och fasad |
|---|---|---|
| Klicka | Markera en del, eller placera vid närmaste skärning när ett placeringsverktyg är på (eller klistra in där under inklistring) | Samma |
| {{key:Shift}}, {{key:Ctrl}} eller {{key:Mod}} och klicka | Lägg till delen i markeringen, eller ta bort den | Samma |
| Tryck på en markerad del och dra | Flytta markeringen över nivån; med {{key:Mod}} nedtryckt, uppåt och nedåt | Flytta markeringen (i en fasad: längs den och uppåt och nedåt) |
| Dra med vänster knapp | Vrid modellen | Med {{ui:Select}}: ett markeringsfönster (åt höger: helt inuti; åt vänster: som rör vid). Vid placering: panorera |
| {{key:Shift}} och dra med vänster knapp | Med {{ui:Select}}: ett markeringsfönster, läggs till i markeringen. Vid placering: panorera | Med {{ui:Select}}: ett markeringsfönster, läggs till i markeringen |
| {{key:Ctrl}} eller {{key:Mod}} och dra med vänster knapp | Panorera | Inget |
| Dra med höger knapp | Panorera | Panorera |
| Hjul | Zooma mot mitten av vyn | Zooma |
| Dra med mittenknappen | Zooma | Med {{ui:Select}}: panorera. Annars zooma |
| Släpp en `.detailcraft.json`-fil på appen | Öppna den | Öppna den |

Ett klick räknas bara om pekaren rör sig mindre än cirka 5 pixlar mellan tryck och släpp; en längre rörelse är ett drag.

## Pekplatta

| Åtgärd | Gör |
|---|---|
| Svep uppåt eller nedåt med två fingrar, eller nyp | Zooma |
| Tryck och dra | Vrid (3D) eller panorera (plan och fasad) |
| {{key:Shift}} och tryck och dra | Panorera i 3D |
| Klick med två fingrar | Högerklick (det finns ingen meny i vyn) |

## Touch

På en surfplatta eller en pekskärm:

| Åtgärd | Gör |
|---|---|
| Tryck | Markera en del, eller placera vid närmaste rutnätsskärning när ett placeringsverktyg är på (en knacka inom cirka ett fingers bredd räknas) |
| Långt tryck på en del | Lägg till den i markeringen, eller ta bort den (det {{key:Shift}}+klick gör med mus) |
| Ett finger på en markerad del, sedan dra | Flytta markeringen och fäst mot rutnätsskärningar |
| Ett finger någon annanstans | Vrid modellen (3D) eller panorera (plan och fasad) |
| Två fingrar | Nyp för att zooma, flytta tillsammans för att panorera |

Knappar, listor och fält är större när skärmen enbart är touch. Markeringsfönster kräver mus; med fingrar används knack och långt tryck.

## Tangenter som webbläsaren behåller

Vissa genvägar tillhör webbläsaren och ingen sida kan använda dem, till exempel {{key:Mod+W}} (stäng flik), {{key:Mod+T}} (ny flik) och {{key:Mod+N}} (nytt fönster). Om {{key:Mod+Y}} öppnar webbläsarens historik i stället för att göra om, använd {{key:Mod+Shift+Z}}.

Genvägar når DetailCraft bara när sidan har tangentbordet. Om en tangent inte gör något, eller webbläsaren agerar på den i stället, klicka först på en tom del av DetailCraft-fönstret (till exempel efter att du skrivit i adressfältet).

## Var Flytta finns

Det finns inget kommando Flytta: markera en del och dra den över nivån (håll {{key:Mod}} nedtryckt för att dra uppåt och nedåt), eller redigera dess {{ui:Start}} och {{ui:End}} i {{ui:Properties}}.
