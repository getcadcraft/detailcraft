---
title: Öppna, spara och exportera filer
summary: DetailCrafts modellfil, varje export den skriver, vart filerna tar vägen och vad som skiljer beroende på webbläsare och uppkoppling.
keywords: öppna, spara, exportera, nedladdning, fil, json, ifc, nc1, dstv, csv, pdf, zip, format, importera
from: bd715ea3
---

DetailCraft har en egen fil, modellen, och fem exporter. Varje sparning och varje export är en nedladdning. Ingenting laddas upp och ingenting lagras på en server.

## Modellfilen

En DetailCraft-modell sparas som `<name>.detailcraft.json`, där `<name>` är modellnamnet i panelen {{ui:Modell}}. Den innehåller rutnät, nivåer, stänger (med hål och urtag), förbindelser och deras inställningar, plintar och dina egna profiler.

Delar, märken, bultar, svetsar och armeringsjärn lagras inte: DetailCraft räknar fram dem på nytt från modellen varje gång den öppnas. Därför är en modellfil liten.

### Spara

1. Skriv ett namn i fältet {{ui:Namn}} högst upp i panelen {{ui:Modell}}.
2. Välj {{ui:Spara}} i gruppen {{ui:Fil}} eller tryck på {{key:Mod+S}}.
3. Webbläsaren laddar ner `<name>.detailcraft.json`. Statusfältet säger "Saved … (downloaded)" och punkten i början av webbläsarflikens titel försvinner.

Varje sparning är en ny nedladdning. Webbläsaren skriver inte över filen du öppnade; beroende på inställningarna lägger den till ett nummer i namnet, till exempel `Frame (1).detailcraft.json`, eller frågar var filen ska sparas. Behåll dina egna versioner genom att byta namn på nedladdningarna.

:::chromium
Chrome och Edge sparar i mappen Hämtade filer om inte **Fråga var varje fil ska sparas innan den hämtas** är på i webbläsarens nedladdningsinställningar. Slå på det om du vill välja mapp och filnamn varje gång.
:::

:::firefox
Firefox sparar i mappen Hämtade filer, eller frågar varje gång om **Fråga alltid var filer ska sparas** är på i inställningarna.
:::

:::safari
Safari sparar i mappen Hämtade filer. Om du vill ändra mappen öppnar du **Safari, Inställningar, Allmänt, Plats för hämtade filer**.
:::

### Öppna

1. Välj {{ui:Öppna}} i gruppen {{ui:Fil}} eller tryck på {{key:Mod+O}}.
2. Välj en `.detailcraft.json`-fil.

Eller dra filen från {{pick:mac=Finder|windows=Utforskaren|linux=din filhanterare}} och släpp den på vyn. Vyn säger "Drop a DetailCraft model to open it" medan du drar.

Om den öppna modellen har osparade ändringar frågar DetailCraft först: {{ui:Avbryt}}, {{ui:Kassera ändringar}} eller {{ui:Spara först}}.

DetailCraft kontrollerar varje fält i en fil innan den används. Allt som inte går att använda utelämnas och statusfältet säger vad, till exempel "2 members were not valid and left out." En modell som sparats av en nyare DetailCraft avvisas med ett meddelande i stället för att öppnas halvrätt.

### Vad den öppnar

Sina egna modellfiler (`.json`, upp till 50 MB) och IFC-filer (`.ifc`, IFC2X3 eller IFC4, upp till 200 MB). En IFC-fil, öppnad eller inläst med {{ui:Importera IFC}}, blir en ny modell av sina balkar, pelare, stänger, plåtar, rutnät och nivåer, med hål och urtag utskurna i dem och sina bultar som lösa bultar; en rapport listar vad som utelämnades. Se [IFC-export](topic:ifc-export#import). Den öppnar inte DWG, DXF eller någon annan detaljeringsprograms modell ännu; om du försöker visas "DetailCraft opens its own models (.detailcraft.json) and IFC files (.ifc)."

## Förlorat arbete, senaste filer, skrivbordsappen

- Medan modellen har ändringar som du inte har sparat behåller DetailCraft en kopia i den här webbläsaren. Om fliken eller webbläsaren stoppar innan du sparar frågar DetailCraft nästa gång du öppnar det **Recover your work?**: återställ kopian eller släpp den. Se [Återställ ditt arbete](common:recover).
- Modeller du nyligen öppnat listas på startskärmen när webbläsaren låter DetailCraft öppna dem igen; klicka på en för att öppna den på nytt.
- I skrivbordsappen skriver {{ui:Spara}} tillbaka modellen till filen du öppnade (i webbläsaren laddas en kopia ner), och ett dubbelklick på en DetailCraft-modell eller en IFC-fil öppnar den i DetailCraft.

## Exporter

Alla exporter använder modellnamnet. Välj dem i gruppen {{ui:Utdata}}.

| Knapp | Fil | Vad den innehåller |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: våningsplan, rutnät, varje ståldel som en profilextrusion med sina hål och urtag, sammanställningar, bultar och ankarbultar, plintar och varje armeringsjärn. Se [Exportera IFC](topic:ifc-export). |
| {{ui:NC-filer}} | `<name> NC.zip` | En DSTV-`.nc1`-fil per delmärke. Se [Skicka NC-filer till verkstaden](topic:nc-export). |
| {{ui:Stycklista}} | `<name> BOM.csv` | Tre tabeller i en fil: delar, sammanställningar samt bultar och ankarbultar. Se [Märken och stycklistan](topic:marks-and-bom). |
| {{ui:Bockning}} | `<name> bending schedule.csv` | Varje armeringsmärke i plintarna. Se [Plintar och armering](topic:footings-and-rebar). |
| {{ui:Verkstadsritning}} | `<name> <mark>.pdf` | Ett blad (A3 om du inte valde en annan storlek) för den markerade delen (I-profiler och plåtar). Se [Gör en verkstadsritning](topic:shop-drawings). |
| {{ui:Ritningar}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` eller `.dxf`, flera i `<name> drawings DWG.zip` (eller `DXF.zip`) | Planritningar, fasader och sammanställningsritningar på den bladstorlek du valde; DWG och DXF i full skala, 1 enhet = 1 mm på pappret. Se [Huvudritningar och sammanställningsritningar](topic:drawings). |

### Anmärkningar om CSV-filerna

- De börjar med en byte-order-markering så att kalkylprogram läser tecken med accenter rätt.
- En cell som börjar med `=`, `+`, `-` eller `@` (och inte är ett vanligt tal) får ett inledande apostrof, så att ett kalkylprogram aldrig kör den som en formel.
- Längder anges i millimeter och vikter i kilogram.

### Anmärkningar om PDF-filen

Text i PDF-filen använder standardteckensnittet Helvetica. Tecken som den saknar (utanför den västeuropeiska uppsättningen) skrivs ut som "?", och statusfältet berättar hur många.

## Enheter

DetailCraft arbetar i millimeter genomgående: rutnät, nivåer, koordinater, profiler, hål och varje export. Profilnamn behåller sin publicerade form (W12x50 är en amerikansk beteckning även om måtten visas i mm). Det finns ingen imperial inmatning ännu.

## Online och offline

Att öppna, spara och exportera sker allt i webbläsaren, så det fungerar likadant med eller utan uppkoppling när DetailCraft väl har laddats.

Om du vill använda DetailCraft utan uppkoppling senare väljer du {{ui:Spara för offline}} i appfältet medan du är uppkopplad. Knappen räknar upp ("Saving 3 of 20") och visar sedan {{ui:Redo för offline}}. Den sparade kopian innehåller 3D-grafikbiblioteket (cirka 2,6 MB) och den här hjälpen, så när den är sparad fungerar 3D-vyn, varje export och hjälpen offline. Detaljer, och vad som fortfarande kräver uppkoppling: [Arbeta offline](common:offline).

:::offline
Du är offline. Om appfältet visar {{ui:Redo för offline}} fungerar öppna, spara och exportera som vanligt. Om det inte gör det, håll den här fliken öppen, ladda inte om den förrän du är uppkopplad igen och spara din modell nu.
:::

Molnlagring finns inte ännu, och det finns inga skrivbordsversioner ännu. Säkerhetskopiera dina `.detailcraft.json`-filer på samma sätt som andra arbetsfiler. Mer i [Vart dina filer tar vägen](common:your-files).

## Osparat arbete

DetailCraft håller modellen bara i den öppna fliken. Om du stänger eller laddar om fliken med osparade ändringar frågar webbläsaren om du vill lämna sidan; ordalydelsen är webbläsarens egen. Spara ofta med {{key:Mod+S}}.
