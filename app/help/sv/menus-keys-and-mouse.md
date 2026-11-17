---
title: Menyer, tangenter och mus
summary: Välj en menystil som passar ditt sätt att arbeta, ge valfritt kommando en egen tangent, flytta kommandon mellan menyflikar och bestäm vad hjulet och musknapparna gör.
keywords: menystil, menyer, meny, verktygsfält, kommandorad, tangentbordsgenvägar, snabbtangenter, tangenter, anpassa, ändra tangent, mus, hjul, invertera, zoomriktning, mittenknapp, högerknapp, panorera, rotera, exportera, importera, byta, bekant, ritprogram klassisk, stålmeny
from: 4132c6e5
---

DetailCraft:s kommandon är desamma oavsett hur du når dem. En **menystil** bestämmer bara var de sitter på skärmen, vad de heter där och vilka tangenter som kör dem. Välj en i {{ui:Settings}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menus, keys and mouse}}; ändringen gäller direkt, och den här webbläsaren kommer ihåg den.

## De tre stilarna

| Stil | Vad du får |
|---|---|
| {{ui:DetailCraft}} | DetailCraft:s egna verktygsfält (File, Place, Connect, Edit, Output) och dess tangenter med en bokstav: {{key:V}} markera, {{key:B}} balk, {{key:C}} pelare, {{key:R}} stag, {{key:P}} plåt, {{key:F}} plint, {{key:S}} trappa. Utgångsläget. |
| {{ui:Drafting classic}} | För dem som skriver kommandon: en liten meny ({{ui:Home}}, {{ui:View}}, {{ui:Output}}) och en kommandorad. Skriv BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (ångra), ZOOM, PLAN, 3D, DRAWINGS, NC eller HELP och tryck {{key:Enter}}; {{key:Enter}} på ingenting upprepar det senaste kommandot, {{key:Esc}} rensar det. Börja skriva var som helst så går bokstäverna till kommandoraden. Mittenknappen panorerar; i 3D gör {{key:Shift}} och mittenknappen en kretsrörelse. |
| {{ui:Steel ribbon}} | Flikar så som stålkonstruktionsprogram ordnar dem: {{ui:Modeling}} (delar, betong, trappor), {{ui:Detailing}} (förbindelser), {{ui:Edit}}, {{ui:Drawings}} (ritningar och rapporter), {{ui:Fabrication}} (NC-filer, IFC) och {{ui:View}}, med menyn {{ui:File}} och snabbknappar till höger. Tangenterna med en bokstav finns kvar. Mittenknappen panorerar; i 3D kretsar vänster knapp. |

Alla stilar behåller {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} och {{key:Mod+A}}. Menyflikarna innehåller också vyraden {{ui:3D}}, {{ui:Plan}}, {{ui:Elevation}} och {{ui:Fit}}.

:::tip
En tangent som hör till DetailCraft:s egen layout men som din stil gav ett annat kommando gör ingenting, och statusraden säger var dess kommando tog vägen ("I Min stålmeny är Column Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} och piltangenterna behåller alltid sin betydelse, och medan en del är halvt placerad eller en kopia följer pekaren, hör bokstäverna till DetailCraft.
:::

## Gör den till din egen

1. Välj den stil som ligger närmast det du vill ha, och klicka sedan på {{ui:Customize…}}.
2. Under {{ui:Keys and menus}} hittar du ett kommando (sökrutan hjälper). Klicka på {{ui:Add a key}} och tryck tangenten, eller två tangenter i följd för en tvåbokstavstangent. Klicka på en tangent för att ta bort den.
3. Med en menyrad flyttar {{ui:Where it sits}} kommandot till en annan flik och panel, till menyn {{ui:File}}, eller till {{ui:Keys only}}.
4. Under {{ui:Mouse}} ställer du in hjulet, de knappar som panorerar plan och fasad, och vad varje knapp gör i 3D-vyn.
5. Ge den ett namn och klicka på {{ui:Save}}.

Om du sparar en inbyggd stil får du en egen kopia ("Min stålmeny"); den inbyggda ändras aldrig. En tangent som är tilldelad två kommandon visas i rött och måste åtgärdas innan du kan spara.

## Mus

- **Mushjul**: {{ui:Scroll up zooms in}} (utgångsläget) eller {{ui:Scroll up zooms out}}, och hur snabbt. Nypning på en pekplatta zoomar alltid åt det håll fingrarna rör sig.
- **Panorera plan och fasad med**: mittenknappen, högerknappen eller båda. Med verktyget Select ritar vänster knapp alltid ett markeringsfönster.
- **Dra i 3D-vyn**: {{ui:Each view's own}} behåller DetailCraft:s knappar (vänster kretsar, mitten zoomar, höger panorerar). Eller ställ in varje knapp till kretsa, panorera, zooma eller ingenting; {{key:Shift}} med en knapp som kretsar eller panorerar byter de två.

## Ta med dig den

{{ui:Export}} sparar stilen i bruk som en liten `.ccinput.json`-fil; {{ui:Import…}} lägger till en, från en annan dator eller en kollega. En importerad fil kan bara peka på DetailCraft:s egna kommandon: allt annat i den utelämnas och räknas i statusraden. {{ui:Delete this style}} tar bort en av dina egna.

:::note
Inställningarna stannar i den här webbläsaren. {{ui:Use this style in every app}} under stilkorten gör att varje app öppnas i sin motsvarande stil (sitt eget verktygsfält, en meny eller Ritprogram klassisk), med de ändringar du gjort i varje app. DetailCraft har ingen menyradsstil: när en annan apps menyrad väljs för alla appar behåller DetailCraft sitt eget verktygsfält.
:::

Relaterat: [Tangentbord och mus](topic:keyboard) · [DetailCraft-inställningar](topic:settings) · [Kommer från annan detaljeringsprogramvara](topic:coming-from)
