---
title: Markera med fönster, flytta, rotera, spegla, ändra många
summary: Dra ett fönster för att markera, dra markerade delar för att flytta dem, flytta, rotera eller spegla markeringen (eller en kopia av den), eller ändra profil, material, position eller rotation för många stänger samtidigt.
keywords: lasso, staket, fri markering, dra, dra och släpp, flytta genom dragning, fångst, fönster, korsande, rutmarkering, dra-markering, markera många, flytta, rotera, spegla, vänd, kopiera, ändra många, flera stänger, profil, material, position, rotation, varierar, rutnätslinje
from: 50b16f9a
---

Var och en av dessa är ett enda ångra-steg: ett {{key:Mod+Z}} tar tillbaka allt.

## Markera med ett fönster

- I {{ui:Planritning}} och {{ui:Fasad}} drar du med vänster knapp från en tom plats. I {{ui:3D}} håller du {{key:Shift}} och drar (en vanlig dragning vrider modellen).
- Dra **åt höger** för ett fönster: det tar det som ligger helt inuti, ritat med en heldragen kant.
- Dra **åt vänster** för ett korsande fönster: det tar allt det nuddar, ritat streckat.
- Håll {{key:Shift}} när du startar dragningen för att lägga till i markeringen i stället för att ersätta den.
- En planritning eller fasad erbjuder bara det den visar: delar som skurits bort ovanför planen, eller mer än 1 m från fasadens rutnätslinje, kan inte markeras.
- {{key:Esc}} under dragningen släpper fönstret.

### Lasso

Välj **Lasso** under {{ui:Dra för att markera}} i [DetailCraft-inställningar](topic:settings) och samma dragning ritar en frihandslinje i stället för en rektangel.

- Dess första rörelse åt sidan avgör hur den markerar: **åt höger**, det som ligger helt inuti (heldragen linje); **åt vänster**, det som nuddas (streckad).
- Tryck {{key:Space}} under dragningen för att växla mellan inuti, nuddande och **staket**: en öppen linje som tar allt den korsar (prickad, orange).
- {{key:Shift}} för att lägga till och {{key:Esc}} för att släppa fungerar som för fönstret.

:::touch
På en pekskärm panorerar ett finger planritningen och fasaden som förut; markera delar genom att trycka på dem.
:::

I {{ui:Planritning}} och {{ui:Fasad}} panorerar du med höger eller mellersta knappen medan verktyget {{ui:Markera}} är på.

## Dra delar för att flytta dem

1. Markera delarna först (klicka, {{key:Shift}}+klick eller ett fönster).
2. Tryck på en av de markerade delarna och dra. Hela markeringen flyttas; en streckad kontur visar var den hamnar.
3. Släpp för att placera den. {{key:Esc}} innan du släpper lägger tillbaka allt.

- I {{ui:3D}} och {{ui:Planritning}} flyttas delarna över planet. Håll {{key:Mod}} när du startar dragningen i {{ui:3D}} för att flytta dem upp och ned i stället.
- I {{ui:Fasad}} flyttas de inom fasaden: längs rutnätslinjen och upp och ned.
- Delen du håller fastnar på en rutnätsskärning när dess ände kommer inom några bildpunkter från en (skärningen lyser upp och statusfältet anger den). Annars går flyttningen i steg om 10 mm.
- Att trycka på en del som inte är markerad vrider eller panorerar i stället vyn, så en dragning flyttar aldrig något av misstag.
- Dragningen är ett ångra-steg, precis som {{ui:Flytta}}. Förbindelser följer sina stänger.

## Ändra en egenskap på många stänger

Markera två eller fler stänger. Under **Ändra på alla** i panelen {{ui:Egenskaper}}:

- {{ui:Profil}}, {{ui:Position}}: för balkarna, pelarna och stagen bland dem.
- {{ui:Plåttjocklek (mm)}} och {{ui:Plåtbredd (mm)}}: för plåtarna.
- {{ui:Material}} och {{ui:Rotation (°)}}: för alla.

Ett fält visar **Varierar** när stängerna inte är överens. Välj eller skriv ett värde, så tar varje stång som det gäller det; statusfältet säger hur många som ändrades och hur många som behöll sitt eget.

Talfält i panelen {{ui:Egenskaper}} tar också en beräkning: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. En beräkning som inte kan läsas avvisas, och statusfältet säger var det gick fel.

## Flytta, rotera eller spegla

Markera stänger och plintar (en enda går också) och använd sedan **Flytta, rotera, spegla** i panelen {{ui:Egenskaper}}. Förbindelser flyttas inte för sig: de följer sina stänger. Om du flyttar en balk men inte dess pelare säger statusfältet hur många förbindelser som nu förenar en flyttad del med en som stod kvar, och [Problem](topic:troubleshooting) säger om de inte längre passar.

- **Flytta:** skriv x, y och z i millimeter och välj {{ui:Flytta}}. Eller välj {{ui:Välj två punkter}} (eller tryck {{key:M}}): klicka på rutnätsskärningen att flytta från, sedan den att flytta till. En streckad kontur följer pekaren.
- **Rotera i planen:** skriv vinkeln (moturs, sett uppifrån) och välj vad som ska vridas kring: markeringens mitt, eller en rutnätsskärning. Pelare vrids med ramverket.
- **Spegla:** välj en rutnätslinje. Spegelbilden är samma profil vänd åt andra hållet: en I-profil behåller sina flänsar, en U-profil vänder åt andra hållet (dess över- och undersida byter plats), och hål och urtag följer med delen.
- Bocka i **Behåll originalet (gör en kopia)** för att låta markeringen stå kvar och flytta, rotera eller spegla en kopia. Dess förbindelser följer med när {{ui:Kopiera ändplattor och fotplåtar med sina stänger}} är på i [DetailCraft-inställningar](topic:settings).

Rotation sker kring en lodrät linje och spegling sker i ett lodrätt plan, så våningar förblir plana och plintar förblir upprätta.
