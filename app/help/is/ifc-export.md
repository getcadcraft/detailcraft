---
title: Flytja út IFC til samhæfingar
summary: Skrifa IFC4-skrá af öllu líkaninu, stáli, boltum, undirstöðum og járni, til deilingar með arkitektum, verkfræðingum og öðrum hugbúnaði.
keywords: ifc, ifc4, ifc2x3, bim, útflutningur, innflutningur, flytja inn ifc, göt, boltar, lausir boltar, op, festingar, samhæfing, líkanaskipti, step, openbim, árekstur, skoðari
from: cfcb0cd6
---

IFC-útflutningur skrifar allt líkanið sem eina IFC4-skrá sem BIM-hugbúnaður og IFC-skoðarar geta opnað.

## Flytja út

1. Veldu {{ui:IFC}} í hópnum {{ui:Útkoma}}.
2. Vafrinn sækir `<name>.ifc`. Stöðustikan segir hvað fór inn, til dæmis „IFC4 flutt út: 25 hlutir, 88 festingar, 7 undirstöður, 132 stangir.“

Ef líkanið hefur engna hluti, undirstöður eða stangir segir stöðustikan „Ekkert til útflutnings enn.“

## Hvað er í skránni

| Í DetailCraft | Í IFC-skránni |
|---|---|
| Hver kóti | Byggingarhæð (IfcBuildingStorey), undir einu verkefni, lóð og byggingu |
| Ásar | IfcGrid með ásum sínum og merkingum |
| Súlur, bitar, skástífur | IfcColumn, IfcBeam, IfcMember (skástífa), hvert sem útpressun á stöðluðu prófílsniði með raunverulegum málum |
| Plötur, endaplötur, undirplötur | IfcPlate |
| Göt og úrtökur | Op (IfcOpeningElement) skorin úr hlutanum |
| Liður og soðnar plötur hans | Samsetning (IfcElementAssembly) merkt með samsetningarmerkinu |
| Boltar og akkerisstangir | IfcMechanicalFastener með þvermáli og lengd |
| Undirstöður | IfcFooting (plötuundirstaða), með steyputextanum sem efni |
| Hver stöng | IfcReinforcingBar með stangarmerki, þvermáli, flatarmáli og lengd, dregin eftir réttri miðlínu með raunverulegum bogum í beygjunum |

Merki hvers hlutar er merkingin hans. Sérhvert frumefni ber líka eiginleikasafnið „DetailCraft“ með merkingum sínum, sniði og þyngd. Sérhvert frumefni situr í hæsta kóta sem er við eða undir lægsta punkti þess. Efni eru flokkuð eftir gæðaflokki.

## Stöðug auðkenni við endurútflutning

IFC-auðkenni (GlobalId) hvers frumefnis er reiknað út frá heiti líkansins og eigin auðkenni frumefnisins í líkaninu. Ef sama líkani er flutt út tvisvar passa auðkennin, þannig að hugbúnaður sem ber saman útgáfur getur séð hvað breyttist.

:::warning
Ef líkaninu er endurnefnt breytast öll auðkennin. Haltu sama heiti líkansins milli útgáfna verkefnis.
:::

## Athugaðu það

IFC-skrár DetailCraft eru lesnar til baka af óháðum IFC-lesara í prófunarsvítunni. Forrit lesa IFC mismunandi, svo opnaðu skrána í hugbúnaðinum sem teymið notar áður en þú treystir henni. Forritið BimCraft frá CadCraft opnar líka IFC-skrár.

## Ekki enn

- Flutningur tenginga, undirstaða og járna inn úr IFC-skrá. {{ui:Flytja inn IFC}} flytur inn bita, súlur, liði, plötur, ása, kóta, göt, úrtökur og bolta, og sýnir lista yfir það sem var skilið eftir.
- Greiningargögn eða burðargreiningargögn.
- Allt annað en IFC4-tilvísunarsýnin.

## Innflutningur

{{ui:Flytja inn IFC}} í hópnum {{ui:Skrá}} (eða með því að sleppa `.ifc`-skrá á sýnina) býr til nýtt líkan úr IFC2X3- eða IFC4-skrá:

- **Bitar, súlur, liðir (skástífur) og plötur** sem eru úr einu útpressuðu sniði sem DetailCraft þekkir, paraðar við skrána eða geymd sem sérsnið; **ásar** og **kótar** úr ásum og hæðum skrárinnar.
- **Göt:** hvert kringlótt op (IfcOpeningElement sem gerir hluta sem kom inn að holu) hornrétt á einn af fleti hlutarins: sál eða flansa I-prófíls eða U-prófíls, veggi rörs, plötu, leggi hornjárns. Gat í gegnum báða veggi rörs kemur inn einu sinni.
- **Úrtökur:** ferhyrnt op sem tekur alla breidd I-prófíls eða U-prófíls frá öðrum enda, niður frá efri hlið eða upp frá neðri hlið.
- **Boltar:** sérhver IfcMechanicalFastener eða IfcFastener, með þvermáli, lengd, gæðaflokki og tegund (bolti eða akkerisstöng), sem **laus bolti**. Lausir boltar birtast í sýninni, efnislistanum og IFC-útflutningnum og haldast þar sem þeir eru þegar liðum er fært. Eiginleikagluggi {{ui:Eiginleikar}}, þegar ekkert er valið, telur þá og hefur {{ui:Fjarlægja lausa bolta}} fyrir þegar þú bætir við tengingum í staðinn.

Skýrslan telur upp allt annað eftir flokki ásamt ástæðu þess að það var skilið eftir: veggi og gólfplötur, undirstöður og stangir, rifin göt, göt í kringlótt rör, tengingar (IFC-skrá geymir plötur þeirra og bolta, ekki regluna sem bjó þær til).
