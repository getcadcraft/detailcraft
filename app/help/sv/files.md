---
title: Öppna, spara och exportera filer
summary: DetailCraft-modellfilen, varje export den skriver, var filerna hamnar och vad som skiljer sig mellan webbläsare och anslutning.
keywords: öppna, spara, exportera, ladda ner, fil, json, ifc, nc1, dstv, csv, pdf, zip, format, importera
from: 6fbc8e8f
---

DetailCraft har en egen fil, modellen, och fem exporter. Varje sparning och varje export är en nedladdning. Inget laddas upp och inget sparas på en server.

## Modellfilen

En DetailCraft-modell sparas som `<name>.detailcraft.json`, där `<name>` är modellens namn i panelen {{ui:Modell}}. Den innehåller rutnät, nivåer, element (med sina hål och urtag), förbindelser och deras inställningar, plintar och dina egna profiler.

Delar, märkningar, bultar, svetsar och armeringsstänger sparas inte: DetailCraft räknar ut dem på nytt från modellen varje gång den öppnas. Därför är en modellfil liten.

### Spara

1. Skriv ett namn i fältet {{ui:Namn}} överst i panelen {{ui:Modell}}.
2. Välj {{ui:Spara}} i gruppen {{ui:Fil}} eller tryck på {{key:Mod+S}}.
3. Webbläsaren laddar ner `<name>.detailcraft.json`. Statusfältet säger "Sparad … (nedladdad)", och pricken i början av webbläsarfliken försvinner.

Varje sparning är en ny nedladdning. Webbläsaren skriver inte över filen du öppnade; beroende på sina inställningar lägger den till ett nummer i namnet, till exempel `Frame (1).detailcraft.json`, eller frågar var filen ska sparas. Behåll egna versioner genom att byta namn på nedladdningarna.

:::chromium
Chrome och Edge sparar i mappen Hämtade filer, om **Fråga var varje fil ska sparas innan den hämtas** inte är aktiverat i webbläsarens inställningar för nedladdning. Aktivera det om du vill välja mapp och filnamn varje gång.
:::

:::firefox
Firefox sparar i mappen Hämtade filer, eller frågar varje gång om **Fråga alltid var filer ska sparas** är aktiverat i inställningarna.
:::

:::safari
Safari sparar i mappen Hämtade filer. Om du vill byta mapp öppnar du **Safari, Inställningar, Allmänt, Plats för filhämtningar**.
:::

### Öppna

1. Välj {{ui:Öppna}} i gruppen {{ui:Fil}} eller tryck på {{key:Mod+O}}.
2. Välj en `.detailcraft.json`-fil.

Eller dra filen från {{pick:mac=Finder|windows=Utforskaren|linux=din filhanterare}} och släpp den på vyn. Vyn säger "Släpp en DetailCraft-modell för att öppna den" medan du drar.

Om den öppna modellen har osparade ändringar frågar DetailCraft först: {{ui:Avbryt}}, {{ui:Kassera ändringar}} eller {{ui:Spara först}}.

DetailCraft kontrollerar varje fält i en fil innan det används. Det som inte går att använda utelämnas, och statusfältet säger vad, till exempel "2 element var ogiltiga och utelämnades." En modell som sparats av en nyare DetailCraft avvisas med ett meddelande i stället för att öppnas halvt fel.

### Vad som öppnas

Egna modellfiler (`.json`, upp till 50 MB) och IFC-filer (`.ifc`, IFC2X3 eller IFC4, upp till 200 MB). En IFC-fil, öppnad eller importerad med {{ui:Importera IFC}}, blir en ny modell med sina balkar, pelare, element, plåtar, rutnät och nivåer, med hål och urtag skurna i dem och dess bultar som lösa bultar; en rapport visar vad som utelämnades. Se [IFC-export](topic:ifc-export#import). Den öppnar ännu inte DWG, DXF eller någon annan detaljeringsmodell från ett annat program; försök visar "DetailCraft öppnar sina egna modeller (.detailcraft.json) och IFC-filer (.ifc)."

## Förlorat arbete, senaste filer, skrivbordsappen

- Medan modellen har ändringar som du inte har sparat, behåller DetailCraft en kopia i den här webbläsaren. Om fliken eller webbläsaren stannar innan du sparar, frågar DetailCraft nästa gång du öppnar den **Återställ ditt arbete?**: återställ kopian eller släpp den. Se [Återställ ditt arbete](common:recover).
- Modeller du öppnat nyligen visas på startskärmen när webbläsaren tillåter DetailCraft att öppna dem igen; klicka på en för att öppna den igen.
- I skrivbordsappen skriver {{ui:Spara}} modellen tillbaka till filen du öppnade (i webbläsaren laddas en kopia ner), och dubbelklick på en DetailCraft-modell eller IFC-fil öppnar den i DetailCraft.

## Exporter

Alla exporter använder modellens namn. Välj dem i gruppen {{ui:Utdata}}.

| Knapp | Fil | Vad som finns i den |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: nivåer, rutnät, varje ståldel som en profilextrudering med sina hål och urtag, sammanställningar, bultar och ankarstänger, plintar och varje armeringsstång. Se [Exportera IFC](topic:ifc-export). |
| {{ui:NC-filer}} | `<name> NC.zip` | En DSTV-fil `.nc1` per delmärke. Se [Skicka NC-filer till verkstaden](topic:nc-export). |
| {{ui:Stycklista}} | `<name> BOM.csv` | Tre tabeller i en fil: delar, sammanställningar samt bultar och ankarstänger. Se [Märken och stycklistan](topic:marks-and-bom). |
| {{ui:Bockning}} | `<name> bending schedule.csv` | Varje stångmärke i plintarna. Se [Plintar och armering](topic:footings-and-rebar). |
| {{ui:Verkstadsritning}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` innehåller ett blad per delmärke; {{ui:Ladda ner PDF}} ger det som visas (A3 om du inte valt en annan storlek). Se [Gör verkstadsritningar](topic:shop-drawings). |
| {{ui:Ritningar}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` eller `.dxf`, flera i `<name> drawings DWG.zip` (eller `DXF.zip`) | Planritningarna, fasaderna och monteringsritningarna på det bladformat du valt; DWG och DXF i full storlek, 1 enhet = 1 mm på papperet. Se [Översiktsritningar och monteringsritningar](topic:drawings). |

### Anmärkningar om CSV-filerna

- De börjar med en byte-order mark, så att kalkylprogram läser accenttecken rätt.
- En cell som börjar med `=`, `+`, `-` eller `@` (och inte är ett vanligt tal) får ett inledande apostrof, så att ett kalkylblad aldrig kör den som en formel.
- Längder är i millimeter och vikter i kilogram.

### Anmärkningar om PDF:en

Text i PDF:en använder standardtypsnittet Helvetica. Tecken som det saknar (utanför den västeuropeiska teckenuppsättningen) skrivs ut som "?", och statusfältet säger hur många.

## Enheter

DetailCraft arbetar i millimeter genomgående: rutnät, nivåer, koordinater, profiler, hål och varje export. Profilnamn behåller sin publicerade form (W12x50 är en amerikansk beteckning, även om dess dimensioner visas i mm). Det finns ännu ingen inmatning i tum.

## Online och offline

Öppning, sparning och export sker alla i din webbläsare, så de fungerar likadant med eller utan anslutning när DetailCraft väl har laddats.

För att använda DetailCraft utan anslutning senare väljer du {{ui:Spara för offline}} i appfältet medan du är online. Knappen räknar upp ("Sparar 3 av 20") och visar sedan {{ui:Redo för offline}}. Den sparade kopian innehåller 3D-grafikbiblioteket (cirka 2,6 MB) och den här hjälpen, så när den är sparad fungerar 3D-vyn, varje export och hjälpen offline. Detaljer, och vad som fortfarande kräver en anslutning: [Arbeta offline](common:offline).

:::offline
Du är offline. Om appfältet visar {{ui:Redo för offline}} fungerar öppning, sparning och export som vanligt. Om det inte gör det, håll fliken öppen, ladda inte om den förrän du är online igen, och spara modellen nu.
:::

Molnsparning finns inte ännu, och det finns inga skrivbordsversioner ännu. Säkerhetskopiera dina `.detailcraft.json`-filer på samma sätt som du säkerhetskopierar andra arbetsfiler. Mer i [Var dina filer hamnar](common:your-files).

## Osparat arbete

DetailCraft behåller modellen bara i den öppna fliken. Om du stänger eller laddar om fliken med osparade ändringar, frågar webbläsaren om du vill lämna sidan; formuleringen är webbläsarens egen. Spara ofta med {{key:Mod+S}}.
