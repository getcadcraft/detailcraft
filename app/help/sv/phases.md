---
title: Etapper
summary: Dela upp modellen i etapper (monteringsordningar eller leveranser), visa eller dölj varje etapp, lägg delar i en etapp och numrera märken per etapp.
keywords: etapp, etapper, etapphanterare, monteringsordning, leverans, parti, ordning, dölj etapp, visa etapp, filter, numrering, märkesprefix, per etapp
from: bae506f5
---

En etapp är en grupp delar som tillverkas, levereras eller monteras tillsammans: en monteringsordning, en leverans, ett parti. Varje element och varje plint ligger i en etapp. En förbindelse ligger i etappen för sitt huvudelement: balken för en ändplatta, pelaren för en fotplåt. En ny modell har en etapp.

## Panelen Etapper

Avsnittet {{ui:Phases}} i panelen {{ui:Model}} listar varje etapp:

- kryssrutan visar eller döljer etappen i vyn;
- numret, och ett namn du kan skriva (tomt = "Etapp 2" och så vidare);
- hur många delar den innehåller;
- knappen {{ui:×}} tar bort en etapp. Endast en tom etapp kan tas bort: flytta dess delar till en annan etapp först.

{{ui:Add phase}} lägger till nästa nummer och gör den till etappen nya delar hamnar i.

## Lägg delar i en etapp

- **Nya delar:** {{ui:New parts go in}} väljer etappen som varje element och plint du placerar från och med nu hamnar i.
- **En del:** markera den och ändra {{ui:Phase}} i panelen {{ui:Properties}}.
- **Flera delar:** markera dem (ett fönster, {{key:Shift}}+klick, {{key:Mod+A}}) och ändra {{ui:Phase}} överst i panelen {{ui:Properties}}. Där står **Varierar** när de ligger i olika etapper. Varje ändring är ett steg att ångra.

Kopior behåller etappen för delen de kopierades från, även när de klistras in i en annan modell (etappen läggs till där).

## Visa och dölj etapper

En dold etapp ritas inte i vyn, kan inte klickas på eller fångas av ett urvalsfönster, och {{key:Mod+A}} utelämnar den. Den finns fortfarande i stycklistan, rapporterna, ritningarna och varje export. Döljning gäller endast vyn: den sparas inte och kan inte ångras.

## Märken per etapp

Med **Numrera märken per etapp** på (den är på från start) och delar i fler än en etapp numreras varje etapp för sig och dess märken börjar med etappnumret: delmärken 1-b1, 2-b1, monteringsmärken 2-B1, plintar 2-F1. Två identiska balkar i olika etapper får då olika märken, eftersom de tillverkas och skeppas vid olika tidpunkter. Med bara en etapp i bruk har märkena inget prefix. Stäng av det för att numrera hela modellen som en, så att identiska delar delar märke oavsett etapp.

Etappen skrivs till IFC-exporten (egenskapsuppsättning DetailCraft, Phase).

:::note
Modeller med etapper sparas i DetailCraft:s filformat 2. Version 0.3 av DetailCraft kan inte öppna dem; den här versionen öppnar äldre filer, med alla delar i etapp 1.
:::
