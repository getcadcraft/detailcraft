---
title: A képernyő körútja
summary: A DetailCraft minden sávja, panelje és lapja a képernyőn látható nevén, és hogy mire való mindegyik.
keywords: képernyő, elrendezés, eszköztár, panelek, tulajdonságok, állapotsor, jelentések, felület, ui, lapok
from: 454f74fd
---

A DetailCraft kitölti a böngészőablakot az alkalmazássáv alatt. Fentről lefelé: az eszköztár, majd három oszlop (a {{ui:Modell}} panel, a nézet, a {{ui:Tulajdonságok}} panel), majd a jelentéslapok, végül az állapotsor.

## Az alkalmazássáv

A legfelső vékony sáv a CadCraft webhelyhez tartozik, nem a modellhez. Megmutatja az alkalmazás nevét és verzióját, egy hivatkozást a {{ui:A DetailCraft névjegye}} oldalra, a {{ui:Súgó}} gombot (vagy az {{key:F1}}-et) ehhez a súgóhoz, a {{ui:Mentés offline használatra}} gombot, a képernyőmód gombot és a {{ui:Papír}} / {{ui:Modell}} kapcsolót.

- A {{ui:Mentés offline használatra}} a DetailCraftot, a 3D nézetét és ezt a súgót a böngészőben tartja, hogy kapcsolat nélkül is megnyíljon. Mentés után az {{ui:Offline használatra kész}} feliratot mutatja; ekkor kattintson rá a {{ui:Mentés újra (a legújabb verzió beszerzése)}} vagy az {{ui:Az offline másolat eltávolítása}} lehetőségért. Lásd: [Munka offline](common:offline).
- A {{ui:Papír}} világos, a {{ui:Modell}} sötét képernyőt ad. A 3D nézet azonnal követi; a modellben semmi nem változik.
- A képernyőmód gomb és a {{key:Ctrl+Shift+F}} lépked a normál, a teljes képernyő és az elrejtett sávos teljes képernyő között. A {{key:Ctrl+Shift+F}} minden számítógépen a Control billentyűt használja, Macen is. Elrejtett sávoknál a visszahozásukhoz mutasson a képernyő felső szélére (vagy koppintson oda). Az {{key:Esc}} kilép a teljes képernyőből.

## Az eszköztár

Az eszköztárnak öt csoportja van. Vigye az egérmutatót egy gombra, hogy lássa, mit csinál, és melyik a billentyűje.

| Csoport | Gombok | Mit csinálnak |
|---|---|---|
| {{ui:Fájl}} | {{ui:Új}}, {{ui:Megnyitás}}, {{ui:IFC importálása}}, {{ui:Mentés}}, {{ui:Minta}} | Modell indítása, mentett `.detailcraft.json` vagy IFC-fájl megnyitása, modell mentése, vagy a mintakeret megnyitása |
| {{ui:Elhelyezés}} | {{ui:Kijelölés}}, {{ui:Gerenda}}, {{ui:Oszlop}}, {{ui:Merevítő}}, {{ui:Lemez}}, {{ui:Alap}}, {{ui:Lépcső}} | Az eszköz, amelyet a nézetben a következő kattintás használ |
| {{ui:Kapcsolás}} | {{ui:Homloklemezek}}, {{ui:Talplemez}}, és a {{ui:Továbbiak}} alatt: {{ui:Nyírólemezek}}, {{ui:Toldás}}, {{ui:Csomólemez}}, {{ui:Hasonló}} | Kapcsolat hozzáadása a kijelölt gerendához, oszlophoz vagy merevítőhöz, vagy a kijelölt kapcsolat másolása minden hasonló csomópontra |
| {{ui:Szerkesztés}} | {{ui:Visszavonás}}, {{ui:Ismétlés}}, {{ui:Másolás}}, {{ui:Beillesztés}}, {{ui:Továbbiak}} | Lépegetés hátra és előre a szerkesztésekben; a kijelölés másolása és beillesztése. A {{ui:Továbbiak}} menüt nyit a {{ui:Kivágás}}, {{ui:Másolás}}, {{ui:Beillesztés}}, {{ui:Beillesztés helyben}}, {{ui:Kettőzés}}, {{ui:Törlés}}, {{ui:Összes kijelölése}} és {{ui:Kijelölés megszüntetése}} parancsokkal, mindegyik a billentyűjével |
| {{ui:Kimenet}} | {{ui:IFC}}, {{ui:NC-fájlok}}, {{ui:Anyagjegyzék}}, {{ui:Gyártmányrajz}}, {{ui:Rajzok}}, és a {{ui:Továbbiak}} alatt: {{ui:Hajlítás}}, {{ui:Tömegjelentés fázisonként}}, {{ui:KISS-fájl gyártásszervező szoftverhez}} | Export letöltése, vagy a rajzlapok megnyitása |

A most nem működő gombok és menüelemek szürkék, és az egérmutatót rájuk víve megmondják, miért. A {{ui:Homloklemezek}} kijelölt gerendát, a {{ui:Talplemez}} kijelölt oszlopot, a {{ui:Hasonló}} kijelölt kapcsolatot, a {{ui:Gyártmányrajz}} kijelölt I-szelvényű vagy lemez alkatrészt, a {{ui:Másolás}} kijelölt rúdelemet vagy alapot, a {{ui:Beillesztés}} pedig valamit, amit másolt, igényel. Lásd: [Másolás, beillesztés és kettőzés](topic:copy-paste).

## A Modell panel (balra)

- {{ui:Modell}}: a modell {{ui:Név}}. Ez nevezi el minden mentett vagy exportált fájlt.
- {{ui:Rácsok}}: a rácsvonalak és osztásaik, valamint az {{ui:Rácsok alkalmazása}}. Lásd: [Rácsok és szintek beállítása](topic:grids-and-levels).
- {{ui:Szintek}}: szintenként egy sor (név és magasság mm-ben), a {{ui:Szint hozzáadása}} és a {{ui:Szintek alkalmazása}}.
- {{ui:Egyéni szelvény}}: saját paraméteres szelvény készítése. Zárva van, amíg ki nem nyitja.
- {{ui:Alkatrészjelek}}: a modell minden alkatrészjele a szelvényével, hosszával és darabszámával. Egy jelre kattintva kijelöli az első alkatrészt, amelynek az a jele.

A {{ui:Rácsok}}, a {{ui:Szintek}} és az {{ui:Egyéni szelvény}} összecsukódik: kattintson a címsorukra.

## A nézet (középen)

A nézet a modellt 3D-ben mutatja. Fölötte a nézetsávon három gomb és egy lista van:

- {{ui:3D}}: szabadon körbeforgathatja a modellt.
- {{ui:Alaprajz}}: egyenesen lefelé néz egy szintre. A gombok mellett megjelenik a szintek listája. Ami több mint 1,5 m-rel van a szint fölött, az el van vágva, hogy a szintet tisztán lássa és kattinthassa.
- {{ui:Homlokzat}}: egyenesen egy betűjelű rácsvonalra néz (A rács, B rács …). Megjelenik a betűjelű rácsok listája. Csak az attól a vonaltól 1 m-en belüli acél látszik.
- A nézetsáv jobb végén lévő illesztés gomb az egész modellt megjeleníti.

Kis pontok jelölik minden szint minden rácsmetszéspontját. Amíg egy elhelyező eszköz be van kapcsolva, az egérmutatóhoz legközelebbi pont kivilágosodik, és az állapotsor megnevezi, például „A/2 itt: Level 1”. A színek különböztetik meg a rúdelemtípusokat: az oszlopoknak, gerendáknak, merevítőknek és lemezeknek saját színük van, a csavaroknak és a száraknak másik, az alapok átlátszók, a vasalás pedig csőként van kirajzolva. A furatok sötét dugóként látszanak; a kivágások ki vannak vágva.

Hogyan forgathat, tolhat el és nagyíthat: [Mozgás a 3D nézetben](topic:navigate-3d).

Ha a modell üres, a nézet egy rövid „Modell indítása” listát mutat. Egy mentett modellfájlt a nézet bármely pontjára ejtve is megnyithat.

## A Tulajdonságok panel (jobbra)

Hogy mit mutat ez a panel, attól függ, mit csinál, és a címsora megmondja: „Modell”, „Gerenda elhelyezése”, „Gerenda b2”, „Homloklemez-kapcsolat”, „Talplemez”, „Alap F1”, „3 kijelölve” vagy „Beillesztés”.

- **Nincs kijelölve semmi:** a modell összefoglalója (rúdelemek, kapcsolatok, alapok, alkatrészek, jelek, csavarok, acél- és vasalástömeg, rácsok, szintek).
- **Elhelyező eszköz be van kapcsolva:** a következő darab beállításai (szelvény, anyag, helyzet, forgatás, oszlopnál {{ui:Eddig}}), a kiválasztott szelvény összefoglalója, valamint egy {{ui:Hozzáadás rács szerint}} űrlap a nézetben kattintás nélküli elhelyezéshez.
- **Rúdelem van kijelölve:** a neve, szelvénye, anyaga, helyzete, forgatása, a két végének koordinátái, a jelei, vágott hossza és tömege, a furatai és kivágásai, valamint gombok a kapcsolatokhoz, a gyártmányrajzához és a {{ui:Törlés}}hez.
- **Kapcsolat van kijelölve:** minden lemez-, csavar- és hegesztésbeállítás, az általa készített csavarok és hegesztés, a figyelmeztetései, és az {{ui:Alkalmazás a hasonlókra}}.
- **Alap van kijelölve:** a helyzete és mérete, az alsó háló, az indítóvasak, és a használt vasjelek.
- **Több dolog van kijelölve:** hány rúdelem típusonként, kapcsolat és alap, az acéltömegük, valamint a {{ui:Másolás}}, a {{ui:Kettőzés}} és a {{ui:Törlés}}.
- **Beillesztés:** mi van a vágólapon, és űrlapok a beillesztéshez beírt eltolással vagy egy listákból választott rácsmetszéspontra.

A számmezők az {{key:Enter}} megnyomásakor vagy a mező elhagyásakor lépnek érvénybe. Minden módosítás egy visszavonható lépés.

## A jelentéslapok (alul)

- {{ui:Problémák}}: minden, amit a DetailCraft nem tudott megépíteni, vagy amit ellenőriznie kell, soronként egy {{ui:Kijelölés}} gombbal. A lap zárójelben mutatja a darabszámot.
- {{ui:Anyagjegyzék}}: alkatrészek, összeállítások, valamint csavarok és horgonyszárak, tömegekkel és egy {{ui:CSV letöltése}} hivatkozással. Egy alkatrészjelre kattintva kijelöli az alkatrészt.
- {{ui:Hajlítási kimutatás}}: minden alap minden vasjele, egy {{ui:CSV letöltése}} hivatkozással.

Fókuszált lapnál a {{key:Left}} és a {{key:Right}} lapok között lép.

## Az állapotsor

Az alul húzódó sávnak három része van: az egérmutató alatti rácsmetszéspont elhelyezés közben, a legutóbbi üzenet (mi történt éppen, vagy miért utasítottak vissza valamit), és az alkatrészek, csavarok, acéltömeg és vasalástömeg futó összegei. Ha egy művelet úgy tűnik, nem csinál semmit, olvassa el előbb az itteni üzenetet.

A böngészőlap címe ponttal (•) kezdődik, amíg a modellben vannak nem mentett módosítások.

## Keskeny képernyőn

Körülbelül 760 képpontnál keskenyebb szélességnél az oszlopok egymás alá kerülnek: eszköztár, nézet, állapotsor, {{ui:Tulajdonságok}}, jelentéslapok, végül a {{ui:Modell}} panel. Az eléréshez görgesse az oldalt. A DetailCraft asztali vagy laptop képernyőre van kialakítva; telefonon nézni lehet, részletezni nem.
