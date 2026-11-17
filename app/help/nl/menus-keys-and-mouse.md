---
title: Menu's, toetsen en muis
summary: Kies een menustijl die aansluit op hoe u al werkt, geef elk commando uw eigen toets, verplaats commando's tussen lintstabbladen, en stel in wat het wiel en de muisknoppen doen.
keywords: menustijl, menu's, lint, werkbalk, opdrachtregel, sneltoetsen, toetsen, aanpassen, opnieuw toewijzen, muis, wiel, omkeren, zoomrichting, middelste knop, rechter knop, verschuiven, draaien, exporteren, importeren, wisselen, vertrouwd, klassiek tekenen, staallint
from: 4132c6e5
---

De commando's van DetailCraft zijn hetzelfde, welke weg u ze ook bereikt. Een **menustijl** bepaalt alleen waar ze op het scherm staan, hoe ze daar heten en met welke toetsen ze worden uitgevoerd. Kies er een in {{ui:Instellingen}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menu's, toetsen en muis}}; de wijziging is direct, en deze browser onthoudt haar.

## De drie stijlen

| Stijl | Wat u krijgt |
|---|---|
| {{ui:DetailCraft}} | De eigen werkbalk van DetailCraft (Bestand, Plaatsen, {{ui:Verbinden}}, {{ui:Bewerken}}, {{ui:Uitvoer}}) en de enkeletterssleutels: {{key:V}} selecteren, {{key:B}} ligger, {{key:C}} kolom, {{key:R}} verband, {{key:P}} plaat, {{key:F}} fundering, {{key:S}} trap. Het begin. |
| {{ui:Klassiek tekenen}} | Voor wie commando's typt: een klein lint ({{ui:Start}}, {{ui:Weergave}}, {{ui:Uitvoer}}) en een opdrachtregel. Typ BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (ongedaan maken), ZOOM, PLAN, 3D, DRAWINGS, NC of HELP en druk op {{key:Enter}}; {{key:Enter}} op niets herhaalt het laatste commando, {{key:Esc}} wist het. Begin overal te typen en de letters gaan naar de opdrachtregel. De middelste knop verschuift; in 3D draaien {{key:Shift}} en de middelste knop de weergave. |
| {{ui:Staallint}} | Tabbladen zoals staaldetailleringsprogramma's ze indelen: {{ui:Modelleren}} (staven, beton, trappen), {{ui:Detaillering}} (verbindingen), {{ui:Bewerken}}, {{ui:Tekeningen}} (tekeningen en rapporten), {{ui:Fabricage}} (NC-bestanden, IFC) en {{ui:Weergave}}, met een {{ui:Bestand}}-menu en snelknoppen rechts. De enkeletterssleutels blijven. De middelste knop verschuift; in 3D draait de linkerknop het model. |

Elke stijl behoudt {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} en {{key:Mod+A}}. De linten bevatten ook de weergavebalk met {{ui:3D}}, {{ui:Plattegrond}}, {{ui:Gevel}} en {{ui:Passend}}.

:::tip
Een toets die bij de eigen indeling van DetailCraft hoort, maar die uw stijl aan een ander commando heeft gegeven, doet niets, en de statusregel zegt waar het commando naartoe is gegaan ("In Mijn staallint is Kolom Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} en de pijltjes behouden altijd hun betekenis, en terwijl een onderdeel half geplaatst is of een kopie de aanwijzer volgt, horen letters bij DetailCraft.
:::

## Maak het uw eigen

1. Kies de stijl die het dichtst bij wat u wilt ligt, en klik daarna op {{ui:Aanpassen…}}.
2. Op {{ui:Toetsen en menu's}} zoekt u een commando (het zoekveld helpt). Klik op {{ui:Een toets toevoegen}} en druk op de toets, of op twee toetsen achter elkaar voor een tweeletterige toets. Klik op een toets om hem te verwijderen.
3. Met een lint verplaatst {{ui:Waar het staat}} het commando naar een ander tabblad en paneel, naar het menu {{ui:Bestand}}, of naar {{ui:Alleen toetsen}}.
4. Op {{ui:Muis}} stelt u het wiel in, de knoppen die de plattegrond en gevels verschuiven, en wat elke knop doet in de 3D-weergave.
5. Geef het een naam en klik op {{ui:Opslaan}}.

Een ingebouwde stijl opslaan maakt uw eigen kopie ("Mijn staallint"); de ingebouwde verandert nooit. Een toets die aan twee commando's is toegewezen, wordt rood getoond en moet worden opgelost voordat u kunt opslaan.

## Muis

- **Muiswiel**: {{ui:Omhoog scrollen zoomt in}} (het begin) of {{ui:Omhoog scrollen zoomt uit}}, en hoe snel. Een knijpgebaar op het trackpad zoomt altijd in de richting waarin uw vingers bewegen.
- **Plattegrond en gevels verschuiven met**: de middelste knop, de rechter knop, of beide. Met het gereedschap Selecteren tekent de linkerknop altijd een selectievenster.
- **Slepen in de 3D-weergave**: {{ui:Eigen per weergave}} houdt de knoppen van DetailCraft aan (links draait, midden zoomt, rechts verschuift). Of stel elke knop in op draaien, verschuiven, zoomen of niets; {{key:Shift}} met een knop die draait of verschuift, wisselt de twee om.

## Neem het mee

{{ui:Exporteren}} slaat de gebruikte stijl op als een klein `.ccinput.json`-bestand; {{ui:Importeren…}} voegt er een toe, van een andere computer of een collega. Een geïmporteerd bestand kan alleen naar de eigen commando's van DetailCraft verwijzen: al het andere erin wordt weggelaten en geteld in de statusregel. {{ui:Deze stijl verwijderen}} verwijdert een stijl die u zelf hebt gemaakt.

:::note
Deze instellingen blijven in deze browser. {{ui:Deze stijl in elke app gebruiken}} onder de stijlkaarten zorgt dat elke app opent in de bijbehorende stijl (de eigen werkbalk, een lint of Klassiek tekenen), met de wijzigingen die u in elke app hebt gemaakt. DetailCraft heeft geen menubalkstijl: wanneer de menubalk van een andere app voor elke app is gekozen, behoudt DetailCraft zijn eigen werkbalk.
:::

Gerelateerd: [Toetsenbord en muis](topic:keyboard) · [DetailCraft-instellingen](topic:settings) · [Overstappen van andere detailleersoftware](topic:coming-from)
