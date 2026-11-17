---
title: DetailCraft-inställningar
summary: Starta nya stänger som amerikanska eller europeiska profiler, ange hur långt Duplicera flyttar en kopia, välj om kopior tar med sina förbindelser, och visa eller dölj bultar i 3D-vyn.
keywords: inställningar, val, bladstorlek, pappersstorlek, ritningar, alternativ, stål, aisc, en, europeiska, amerikanska profiler, metriska profiler, standardprofil, kvalitet, s355, a992, förskjutning vid duplicering, förskjutning vid inklistring, kopiera förbindelser, bultar, ankarbultar, dölj bultar, återställ
from: e46cea57
---

Öppna {{ui:Inställningar}} med kugghjulet i appfältet eller {{key:Mod+,}}. Den första fliken, {{ui:DetailCraft}}, innehåller inställningarna som hör till denna app; {{ui:Allmänt}} innehåller dem som alla CadCraft-appar delar (tema, verktygsfält, paneler). DetailCraft-inställningarna finns bara i appen: du ändrar dem här, de gäller direkt och denna webbläsare minns dem. De sparas inte i din modellfil.

## Nya stänger

Vilka profiler och stålkvaliteter placeringsverktygen startar med:

| Verktyg | Amerikanska profiler (AISC), A992 | Europeiska profiler (EN), S355 |
|---|---|---|
| {{ui:Balk}} | W16x26, A992 | IPE300, S355 |
| {{ui:Pelare}} | W12x50, A992 | HEB200, S355 |
| {{ui:Stag}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Plåt}} | A36 | S355 |

Amerikanska profiler är startvärdet. Det europeiska valet använder en HEA160 för stag, eftersom DetailCraft:s EN-katalog ännu saknar slutna profiler ([Profilkatalog](topic:profile-catalog)). Du kan ändå välja valfri profil och kvalitet för nästa del i panelen {{ui:Egenskaper}} medan ett placeringsverktyg är på. Stänger som redan finns i modellen behåller sin egen profil och kvalitet.

## Duplicera och klistra in

- **Förskjutning (mm)**: x, y och z. {{ui:Duplicera}} ({{key:Mod+D}}) placerar kopian så långt från originalet, och formuläret {{ui:Klistra in med förskjutning (mm, från originalet)}} börjar med den. Den startar på 6000, 0, 0: ett 6 m-fack längs de numrerade rutnäten. Ställ in den på ditt facksavstånd, eller på en våningshöjd i z för att kopiera ett golv uppåt.
- **Kopiera ändplattor och fotplåtar med sina stänger** (på från start): en förbindelse följer med en kopia endast när varje stång den förbinder kopieras. Avmarkera för att kopiera stänger och plintar utan deras förbindelser, till exempel för att prova en annan förbindelse på kopian.

Se [Kopiera, klistra in och duplicera](topic:copy-paste).

## 3D-vy

**Visa bultar och ankarbultar** (på från start). Avmarkera för att dölja dem i vyn och se hålen och plåtarna i en trång knut. Dolda bultar kan inte klickas; klicka på plåten för att markera förbindelsen. Stycklistan, ritningarna och varje export innehåller fortfarande alla bultar och ankarbultar.

## Hörnindikator

Vad som visas i hörnet på 3D-vyn: **ViewCube** (startvärdet; uppe till höger — klicka på en sida, kant eller ett hörn för att se därifrån, dra för att kretsa runt, dra dess kompassring för att vrida modellen), **Axelikon** (en liten X-, Y-, Z-markör nere till vänster som vrids med vyn: X röd, Y grön, Z blå) eller **Ingen**. Endast i {{ui:3D}}; {{ui:Planritning}} och {{ui:Fasad}} visar ingetdera. Se [ViewCube](topic:view-cube).

## Återställ

{{ui:Återställ DetailCraft-inställningar}} längst ned i dialogrutan återställer dessa till startvärdena (amerikanska profiler, förskjutning 6000, 0, 0, förbindelser kopierade, bultar visade), tillsammans med {{ui:Allmänt}}-inställningarna.

## Ritningar

**Bladstorlek**: bladritningarna och verkstadsritningarna görs på liggande: A4, A3 (startvärdet), A2, A1, ANSI B, ANSI C eller ANSI D. Fönstren {{ui:Ritningar}} och verkstadsritningar har samma lista. Se [Översiktsritningar och monteringsritningar](topic:drawings).

## Armering

- **ASTM-järnnamn**: #3 till #11, eller de mjuka metriska #10 till #36 för samma järn.
- **Formkoder i bockningsförteckningen**: DetailCrafts S, L, U; ACI 315-typer; eller BS 8666-formkoder. Se [Armeringsreferens](topic:rebar-reference).

## Dra för att markera

**Rektangel** (som tidigare) eller **Lasso**: en frihandslinje, med {{key:Space}} som växlar mellan inuti, berörande och staket medan du drar. Se [Markera med fönster](topic:select-and-change#select-with-a-window).
