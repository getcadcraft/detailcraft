---
title: Använd DetailCraft med en AI-assistent
summary: Låt din egen AI-assistent eller ditt skript läsa modellen, dess delar, problem och kollisioner, lägga till stänger och förband, spara och exportera (även USD): behörigheter, anslutning via CadCraft Studio och aktivitetsloggen.
keywords: ai, assistent, agent, mcp, model context protocol, skript, automatisering, delar, kollisioner, förband, behörigheter, koppla från, aktivitet, ångra
from: d624c9a0
---

## Vad du lär dig

Hur du låter en AI-assistent (eller ett skript du skrivit) arbeta med DetailCraft, och hur du bestämmer vad den får röra.

DetailCraft har **ingen egen AI** och skickar ingenting någonstans. Du tar med assistenten: vilket program som helst som talar Model Context Protocol (MCP). DetailCraft ger den bara verktyg, och du väljer vilka.

## Slå på det

1. Öppna {{ui:Inställningar}} (kugghjulet i appfältet, eller {{key:Mod+,}}) och gå till fliken {{ui:DetailCraft}}.
2. Under {{ui:Assistenter}} markerar du **Låt AI-assistenter och skript använda DetailCraft**. Det är avstängt tills du gör det.
3. Välj vad den får göra: **Läs** är markerat från början; markera **Redigera**, **Spara** eller **Exportera** först när du behöver dem.

Verktyg utanför de behörigheter du markerat erbjuds inte assistenten, och om den ändå begär ett sådant nekar DetailCraft och skriver det i aktivitetsloggen. Om du stänger av omkopplaren avslutas alla anslutningar på en gång.

## Anslut din assistent

Assistenter ansluts via **CadCraft Studio** på din dator: Studio kör en liten server som bara den här datorn kan nå, skyddad av en token som den skapar varje gång den startar. I Studio väljer du {{ui:Anslut en assistent}} och kopierar adressen och token till din assistent (Studio visar exakt vilka inställningar som ska klistras in). Dela aldrig token.

:::note
En webbläsarflik kan inte öppna en anslutning för en assistent: i webbläsarappar har omkopplaren ingen effekt förrän du använder CadCraft Studio på din dator.
:::

## Du har kontrollen

- **Varje ändring är ett enda ångra-steg**, märkt som assistentens (till exempel "Assistent: lägg till balk", "Assistent: lägg till knutplåtar"). {{key:Mod+Z}} tar tillbaka assistentens senaste ändring som helhet. Assistentens egna `undo` tar bara tillbaka sina egna steg, aldrig dina, om den inte uttryckligen begär det.
- **Den väntar på dig.** Medan du placerar en stång, flyttar delar eller klistrar in nekar DetailCraft assistentens ändringar och ber den försöka igen.
- **Du vet när en är ansluten.** En knapp i appfältet visar assistentens namn medan den är ansluten; klicka på den för att se vad den får göra, eller för att **Koppla från** den.
- **Aktivitet.** {{ui:Inställningar}} › {{ui:DetailCraft}} › {{ui:Assistenter}} › {{ui:Aktivitet}} listar varje anrop: när, vilket verktyg och om det utfördes eller nekades. {{ui:Spara loggen}} sparar en kopia.

## Vad en assistent kan begära

Alla längder är i millimeter, punkter `[x, y, z]` med z uppåt, som i modellen.

| Verktyg | Behörighet | Vad det gör |
|---|---|---|
| `app_info`, `model_describe` | Läs | Den öppna modellen: rutnät, nivåer, etapper, stänger efter typ och profil, förband, grunder, trappor, delar, stålvikt, problem |
| `parts_list` | Läs | Delmärken med profil, material, kapad längd, antal, vikt, etapp och monteringsmärken; efter typ, profil, märke eller etapp |
| `problems_list` | Läs | Det som fliken {{ui:Problem}} listar, var och en med vad den gäller |
| `clash_check` | Läs | [Kollisionskontrollen](topic:clash-check), med dess tolerans och etapper |
| `selection_get` | Läs | Det du har markerat |
| `selection_set` | Redigera | Markerar stänger, förband, grunder eller trappor (efter id eller delmärke) för att visa dem för dig; ändrar ingenting |
| `member_add` | Redigera | En balk, pelare, stag eller platta mellan två punkter |
| `connection_add` | Redigera | Ändplattor, skjuvflikar, fotplattor, skarvar eller knutplåtar där de givna stängerna möts, som knapparna under {{ui:Förbind}} gör |
| `undo` | Redigera | Tar tillbaka assistentens senaste steg |
| `model_save` | Spara | DetailCraft:s egen Spara |
| `model_export` | Exportera | IFC, NC-filer, stycklista, bockningsförteckning, KISS-fil eller kapplista, som knapparna under {{ui:Utdata}} skapar dem |
| `usd_export` | Exportera | Stålmodellen som USD (.usda, .usdc eller .usdz), som {{ui:Utdata}} › {{ui:USD}} skriver den (se [Exportera stålmodellen som USD](topic:usd)); i Studio kan den skriva filen till en mapp du tillåtit |

## Om något inte fungerar

- **Assistenten ser inga DetailCraft-verktyg:** kontrollera att omkopplaren är på i det här fönstret, och att fönstret är öppet i Studio.
- **"kräver redigeringsbehörigheten"** (eller spara, exportera): markera den under {{ui:Assistenter}} och fråga sedan igen.
- **"Användaren placerar en stång":** avsluta det du gör (eller tryck på {{key:Esc}}) och låt sedan assistenten försöka igen.
- **Fel "401" eller "token":** token har ändrats (Studio startades om, eller {{ui:Ny token}}). Kopiera den nya till assistentens inställningar.

## Se även

- [Recept för AI-assistenter](common:assistants-recipes): genomarbetade exempel, vart och ett med de verktyg det anropar.
