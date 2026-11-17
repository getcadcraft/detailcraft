---
title: Konstruktionskontroller
summary: Problem för sådant en detaljkonstruktör upptäcker med blicken: en bult som en nyckel inte når, bultar för tätt för hylsan, filsvetsar utanför deras storleksgränser, svetsar som en brännare inte når, och rör som håller vatten.
keywords: konstruktionskontroll, nyckel, hylsa, bultåtkomst, åtdragning, svetsstorlek, filsvets, minsta svets, största svets, vatten, ventilationshål, dräneringshål, varmgalvanisering, ihålig profil, problem
from: 72315151
---

DetailCraft letar efter fyra slags problem som ingen hållfasthetskontroll hittar, och listar dem i panelen {{ui:Problem}}. De är varningar och noteringar att titta på, inte fel: modellen byggs ändå.

## En bult som en nyckel inte når

För varje bult lägger DetailCraft en hylsa över huvudet och över muttern. Hylsan är en cylinder lika bred som muttern över sina hörn plus en vägg på 4 mm, 60 mm lång. Om ett balkliv, en fläns, en plåt eller ett stag står inne i den cylindern, anger problemet förbindelsen, hur många bultar, vilken del som är i vägen och hur långt från bulten den är.

Hylsan är en typisk slaghylsa. En ringnyckel behöver mindre utrymme och ett större verktyg mer. Be den anslutna assistenten köra `constructability_check` med en annan `socketLength` för att se hur svaret ändras.

## Bultar för tätt för hylsan

En hylsa över en bult får inte röra huvudet på nästa. Bultarna i en anslutning som ligger närmare än hylsans bredd plus grannens huvud listas med det funna avståndet och det behövda avståndet.

## Storlekar på filsvetsar

AISC 360-16 tabell J2.4 anger den minsta filsvetsen efter tjockleken på den tunnare delen (3 mm upp till 6.35 mm tjock, 5 mm till 12.7, 6 mm till 19.05, 8 mm över det), och J2.2b den största längs en materialkant: inte större än materialet när det är tunnare än 6.35 mm, annars 1.6 mm mindre. Anslutningar med samma storlek på samma tjocklek listas som ett problem.

Tjockleken som används är den tunnaste delen som svetsen anger, så en 8 mm svets runt hela en balk med 6.35 mm liv listas.

## Vatten och ventilation

- En **öppen övre ände** på ett ihåligt profil som står upprätt eller lutar mer än 10° släpper in regn.
- Ett ihåligt profil **stängt i båda ändar** behöver ett ventilations- och ett dräneringshål; varmgalvanisering och trycket från upphettad luft kräver båda.

## Kan svetsaren nå den

En filsvets görs med brännaren halvvägs mellan de två ytor den förbinder. För varje runtsvetsad filsvets (en ändplatta, en fotplåt, en geringsplåt) tar kontrollen delens tvärsnittskontur vid plåten, och var 20 mm kör en brännarbana ut i 45° från där dess munstycke (10 mm radie till att börja med) först klarar båda ytorna, i ytterligare 30 mm. Om banan träffar balkens egen fläns eller en annan del listas den andelen av svetsen med delen och avståndet. Dessa tal är typiska, inte en standards: fråga din tillverkare om process och munstycke. Svetsar längs två kanter (en skjuvflik) placeras inte och kontrolleras inte.
