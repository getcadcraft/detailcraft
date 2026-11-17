---
title: IFC-export koordinációhoz
summary: IFC4-fájl írása a teljes modellről: acél, csavarok, alapok és vasalás, megosztáshoz építészekkel, mérnökökkel és más szoftverekkel.
keywords: ifc, ifc4, ifc2x3, bim, export, importálás, ifc importálása, furatok, csavarok, különálló csavarok, nyílások, rögzítőelemek, koordináció, modellcsere, step, openbim, ütközés, megjelenítő
from: cfcb0cd6
---

Az IFC-export a teljes modellt egyetlen IFC4-fájlba írja, amelyet BIM-szoftverek és IFC-megjelenítők megnyithatnak.

## Exportálás

1. Válassza az {{ui:IFC}} lehetőséget a {{ui:Kimenet}} csoportban.
2. A böngésző letölti a `<name>.ifc` fájlt. Az állapotsor megmondja, mi került bele, például: „IFC4 exportálva: 25 alkatrész, 88 rögzítőelem, 7 alap, 132 vasalórúd.”

Ha a modellben nincs alkatrész, alap vagy vasalórúd, az állapotsor ezt írja: „Még nincs mit exportálni.”

## A fájl tartalma

| A DetailCraftban | Az IFC-fájlban |
|---|---|
| Minden szint | Egy épületszint (IfcBuildingStorey), egy projekt, telek és épület alatt |
| Tengelyek | Egy IfcGrid a tengelyeivel és feliratokkal |
| Pillérek, gerendák, merevítések | IfcColumn, IfcBeam, IfcMember (merevítés), mindegyik egy szabványos szelvényalak extrudálása a valódi méreteivel |
| Lemezek, véglemezek, talplemezek | IfcPlate |
| Furatok és kivágások | Nyílások (IfcOpeningElement), kivágva az alkatrészből |
| Egy elem és a hozzá hegesztett lemezek | Összeállítás (IfcElementAssembly), az összeállítási jellel |
| Csavarok és horgonyrudak | IfcMechanicalFastener átmérővel és hosszal |
| Alapok | IfcFooting (pontalap), a beton szöveggel mint anyag |
| Minden vasalórúd | IfcReinforcingBar a rúdjelével, átmérővel, keresztmetszettel és hosszal, a valódi középvonala mentén, a hajlításoknál valódi ívekkel |

Minden alkatrész címkéje az alkatrészjele. Minden elem tartalmaz egy „DetailCraft” tulajdonságkészletet a jelöléseivel, szelvényével és súlyával. Minden elem a legmagasabb olyan szintbe kerül, amely a legalsó pontjánál alacsonyabb vagy azzal egyenlő. Az anyagok minőség szerint csoportosulnak.

## Stabil azonosítók az újraexportáláshoz

Minden elem IFC-azonosítóját (GlobalId) a modell nevéből és az elem saját azonosítójából számítjuk ki. Ugyanazt a modellt kétszer exportálva az azonosítók egyeznek, így a verziókat összehasonlító szoftver meg tudja mondani, mi változott.

:::warning
A modell átnevezése minden azonosítót megváltoztat. A modell nevét tartsa meg ugyanúgy a projekt kiadásai között.
:::

## Ellenőrzés

A DetailCraft IFC-fájljait a tesztcsomagjában egy független IFC-olvasó is visszaolvassa. A programok eltérően olvassák az IFC-t, ezért mielőtt ráhagyatkozna, nyissa meg a fájlt abban a szoftverben, amelyet a csapata használ. A CadCraft BimCraft alkalmazása is megnyitja az IFC-fájlokat.

## Még nincs elkészítve

- Csatlakozások, alapok és vasalás beolvasása IFC-fájlból. Az {{ui:IFC importálása}} gerendákat, pilléreket, elemeket (merevítéseket), lemezeket, tengelyeket, szinteket, furatokat, kivágásokat és csavarokat hoz be, és felsorolja, amit kihagyott.
- Elemzési vagy szerkezetszámítási adatok.
- Az IFC4 referencianézeten kívül más.

## Importálás

Az {{ui:IFC importálása}} a {{ui:Fájl}} csoportban (vagy egy `.ifc` fájl a nézetre húzása) új modellt hoz létre IFC2X3 vagy IFC4 fájlból:

- **Gerendák, pillérek, elemek (merevítések) és lemezek**, amelyek teste egyetlen, a DetailCraft által ismert extrudált szelvény, a katalógushoz illesztve vagy egyedi szelvényként megtartva; **tengelyek** és **szintek** a fájl tengelyeiből és szintjeiből.
- **Furatok:** minden kör alakú nyílás (IfcOpeningElement), amely egy beolvasott alkatrészt átfúr, az alkatrész egyik lapjára merőlegesen: I- vagy U-szelvény gerincén vagy övein, cső falain, lemezen, szögacél szárain. A csövön átmenő furat egyszer kerül be.
- **Kivágások:** téglalap alakú nyílás, amely egy I- vagy U-szelvényt annak egyik végétől teljes szélességében érint, fentről lefelé vagy lentről felfelé.
- **Csavarok:** minden IfcMechanicalFastener vagy IfcFastener, átmérővel, hosszal, minőséggel és fajtával (csavar vagy horgonyrúd), **különálló csavarként**. A különálló csavarok megjelennek a nézetben, az anyagjegyzékben és az IFC-exportban, és az elemek mozgatásakor helyükön maradnak. A {{ui:Tulajdonságok}} panel, ha semmi nincs kijelölve, megszámolja őket, és van rajta egy {{ui:Különálló csavarok eltávolítása}} gomb arra az esetre, ha ehelyett csatlakozásokat ad hozzá.

A jelentés minden mást osztályonként felsorol, és megadja, miért maradt ki: falak és födémek, alapok és vasalórudak, hosszú lyukak, kör keresztmetszetű csövek furatai, csatlakozások (egy IFC-fájl a lemezeiket és csavaraikat tartalmazza, de nem azt a szabályt, amely létrehozta őket).
