---
title: Placera plåtar och lägg till egna profiler
summary: Placera lösa plåtar efter tjocklek och bredd, och definiera egna I-, U-, vinkel-, rör- eller plattstångssektioner.
keywords: plåt, platt, egen profil, användarprofil, parametrisk, sektion, form, tvärsnitt, pl
from: c24c3b51
---

## Placera en plåt

En plåt placeras som en balk: den går mellan två skärningar, med sin bredd tvärs och sin tjocklek uppåt.

1. Välj {{ui:Plate}} i gruppen {{ui:Place}}, eller tryck på {{key:P}}.
2. I panelen {{ui:Properties}} anger du {{ui:Thickness (mm)}} och {{ui:Width (mm)}}. Standardvärdet är 20 x 200 i A36.
3. Ange {{ui:Material}} och {{ui:Rotation (°)}} vid behov. En rotation på 90 ställer plåten på kant.
4. Klicka på två skärningar, eller använd formuläret {{ui:Add by grid}}.

Plåtens profilnamn skrivs `PL<tjocklek>x<bredd>`, till exempel PL20x200. Dess längd är avståndet mellan de två punkterna.

För att ändra storleken på en placerad plåt, markera den och ändra {{ui:Thickness (mm)}} eller {{ui:Width (mm)}}.

Plåtar du placerar är egna delar (märke p, sammanställning P). Ändplattor och fotplåtar som skapas av förbindelser är också plåtar, men du ändrar dem via deras förbindelse; se [Ändplattor](topic:end-plates).

## Lägg till en egen profil

När sektionen du behöver inte finns i katalogen, skapa den från dess mått. En egen profil hör till modellen och sparas med den. För att använda den i varje ny modell, behåll den i Mina profiler, beskrivet under ”Behåll en profil för nya modeller” nedan.

1. I panelen {{ui:Model}} till vänster öppnar du {{ui:Custom profile}}.
2. Skriv ett {{ui:Name}}, till exempel `W8x18-custom` eller `RHS 120x80x5`. Det kan inte vara ett katalognamn eller likna ett plåtnamn.
3. Välj en {{ui:Shape}}: {{ui:I-shape}}, {{ui:Channel}}, {{ui:Equal angle}}, {{ui:Rectangular tube}}, {{ui:Round tube}} eller {{ui:Flat bar}}.
4. Fyll i måtten som visas, alla i millimeter:

| Form | Mått |
|---|---|
| I-balk | Djup d, Flänsbredd bf, Liv tw, Fläns tf, Filéradie r (kan vara 0) |
| U-profil | Djup d, Flänsbredd bf, Liv tw, Fläns tf (raka hörn) |
| Likbent vinkelstål | Bredd b (varje ben), Tjocklek t |
| Kvadrat-/rektangelrör | Höjd h, Bredd b, Tjocklek t (yttre hörnradie 2t) |
| Runt rör | Diameter D, Tjocklek t |
| Plattstång | Bredd b, Tjocklek t |

5. Låt {{ui:Keep in My profiles}} vara ikryssad för att ha den i varje ny modell (se nedan), eller avmarkera den för att behålla den bara i denna modell.
6. Välj {{ui:Add profile}}.

Statusfältet säger ”Profil ’…’ tillagd; den finns i varje profillista under Egen.” Den visas i listan under formuläret och sist i varje {{ui:Profile}}-lista.

DetailCraft kontrollerar att formen kan finnas. Du ser meddelanden som ”Liv och flänsar ryms inte inom djupet och bredden.”, ”Filéradien är för stor för flänsen.” eller ”Väggen är för tjock.” Rätta siffrorna och välj {{ui:Add profile}} igen.

### Vad egna profiler får

- Massa per meter från arean × 7850 kg/m³ (katalogstorlekar använder i stället den publicerade vikten).
- Egna I-balkar får hål, urtag, ändplattor, NC-filer och verkstadsritningar, precis som katalogens I-balkar.
- Egna plattstänger beter sig som plåtar.
- Egna U-profiler och rör får hål; vinkelstål och runda rör gör det inte ännu.

Du kan inte redigera eller ta bort en egen profil från en modell när den har lagts till (använd {{key:Mod+Z}} direkt om du gjort fel). Ge en rättad profil ett nytt namn.

## Behåll en profil för nya modeller

{{ui:My profiles}}, under formuläret, är din egen lista över egna profiler. Den sparas i den här webbläsaren, på den här datorn, inte i en modellfil och inte på ditt konto.

- En profil som läggs till med {{ui:Keep in My profiles}} ikryssad hamnar i listan. Varje ny modell, inklusive den DetailCraft öppnar när du startar det, börjar med alla dem i sina profillistor.
- En profil som redan finns i en modell men inte i listan har en knapp {{ui:Keep}} bredvid sig.
- I en modell som saknar en av dina profiler (till exempel en äldre fil), välj {{ui:Use here}} för att lägga till den.
- {{ui:Remove}} tar bort en profil ur listan. Modeller som redan använder den behåller sin egen kopia.
- En modell du öppnar behåller de profiler som är sparade i dess fil. Att öppna en fil ändrar aldrig din lista.
- Ett namn som redan finns i listan med andra mått avvisas: ge den nya ett annat namn.
- Rensar du webbläsarens webbplatsdata, eller använder en annan webbläsare eller dator, börjar du med en tom lista. Ett privat fönster kan inte behålla den; appen säger det.
