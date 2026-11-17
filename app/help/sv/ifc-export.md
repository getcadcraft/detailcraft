---
title: Exportera IFC för samordning
summary: Skriv en IFC4-fil av hela modellen, stål, bultar, plintar och armering, för att dela med arkitekter, konstruktörer och annan programvara.
keywords: ifc, ifc4, ifc2x3, bim, export, import, importera ifc, hål, bultar, lösa bultar, öppningar, fästelement, samordning, modellutbyte, step, openbim, kollision, visare
from: cfcb0cd6
---

IFC-exporten skriver hela modellen som en IFC4-fil som BIM-program och IFC-visare kan öppna.

## Export

1. Välj {{ui:IFC}} i gruppen {{ui:Utdata}}.
2. Webbläsaren laddar ner `<name>.ifc`. Statusfältet säger vad som ingick, till exempel ”IFC4 exporterad: 25 delar, 88 fästelement, 7 plintar, 132 armeringsjärn.”

Om modellen saknar delar, plintar och armeringsjärn säger statusfältet ”Inget att exportera ännu.”

## Vad som finns i filen

| I DetailCraft | I IFC-filen |
|---|---|
| Varje våning | En byggnadsvåning (IfcBuildingStorey), under ett projekt, en tomt och en byggnad |
| Rutnät | En IfcGrid med sina axlar och beteckningar |
| Pelare, balkar, stag | IfcColumn, IfcBeam, IfcMember (stag), var och en en extrudering av en standardprofil med sina verkliga mått |
| Plåtar, ändplattor, fotplåtar | IfcPlate |
| Hål och urtag | Öppningar (IfcOpeningElement) skurna ur delen |
| En stång och dess svetsade plåtar | En sammanställning (IfcElementAssembly) märkt med sammanställningsmärket |
| Bultar och ankarbultar | IfcMechanicalFastener med diameter och längd |
| Plintar | IfcFooting (fotplint), med betongen som material |
| Varje armeringsjärn | IfcReinforcingBar med sin armeringsmärkning, diameter, area och längd, svept längs sin verkliga mittlinje med verkliga bågar vid böjarna |

Varje delss etikett är dess delmärke. Varje element har dessutom en egenskapsuppsättning ”DetailCraft” med sina märken, profil och vikt. Varje element placeras i den högsta våningen vid eller under dess lägsta punkt. Material grupperas efter kvalitet.

## Stabila id:n vid nya exporter

Varje elements IFC-id (GlobalId) räknas ut från modellens namn och elementets eget id i modellen. Exporterar du samma modell två gånger stämmer id:na, så att programvara som jämför versioner kan se vad som ändrats.

:::warning
Om du byter namn på modellen ändras varje id. Behåll modellnamnet oförändrat mellan utgåvor av ett projekt.
:::

## Kontrollera den

DetailCraft:s IFC-filer läses tillbaka av en oberoende IFC-läsare i dess testsvit. Program skiljer sig åt i hur de läser IFC, så öppna filen i den programvara ditt team använder innan du litar på den. CadCraft:s BimCraft-app öppnar också IFC-filer.

## Finns inte ännu

- Att ta in förbindelser, plintar och armering från en IFC-fil. {{ui:Importera IFC}} tar in balkar, pelare, stag, plåtar, rutnät, våningar, hål, urtag och bultar, och listar vad den lämnade utanför.
- Analytiska eller konstruktionsdata för analys.
- Allt annat än IFC4-referensvyn.

## Import

{{ui:Importera IFC}} i gruppen {{ui:Fil}} (eller släpp en `.ifc`-fil i vyn) skapar en ny modell från en IFC2X3- eller IFC4-fil:

- **Balkar, pelare, stag och plåtar** vars kropp är en extruderad profil som DetailCraft känner igen, matchad mot katalogen eller behållen som en egen profil; **rutnät** och **våningar** från filens rutnät och våningsplan.
- **Hål:** varje rund öppning (IfcOpeningElement som urholkar en del som kommit in) vinkelrät mot någon av delens ytor: en I-profils eller U-profils liv eller flänsar, ett rörs väggar, en plåt, ett vinkeljärns ben. Ett hål genom båda väggarna i ett rör kommer in en gång.
- **Urtag:** en rektangulär öppning som tar hela bredden på en I- eller U-profil från ena änden, uppifrån eller nedifrån.
- **Bultar:** varje IfcMechanicalFastener eller IfcFastener, med sin diameter, längd, kvalitet och typ (bult eller ankarbult), som en **lös bult**. Lösa bultar visas i vyn, stycklistan och IFC-exporten och står kvar där de är när du flyttar stag. Egenskapspanelen, när inget är markerat, räknar dem och har {{ui:Ta bort lösa bultar}} för när du i stället lägger till förbindelser.

Rapporten listar allt annat efter klass med skälet till att det lämnades utanför: väggar och bjälklag, plintar och armering, spårhål, hål i runda rör, förbindelser (en IFC-fil bär deras plåtar och bultar, inte regeln som skapade dem).
