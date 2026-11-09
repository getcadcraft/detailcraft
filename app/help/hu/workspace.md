---
title: A képernyő bemutatása
summary: A DetailCraft minden sávja, panelje és lapja a képernyőn látható nevén, és az, hogy mire való.
keywords: képernyő, elrendezés, eszköztár, panelek, tulajdonságok, állapotsor, jelentések, felület, ui, lapok
from: 94f81073
---

A DetailCraft az alkalmazássáv alatt kitölti a böngészőablakot. Felülről lefelé: az eszköztár, majd három oszlop ({{ui:Modell}} panel, a nézet, a {{ui:Tulajdonságok}} panel), utána a jelentéslapok, végül az állapotsor.

## Az alkalmazássáv

A legfelső vékony sáv a CadCraft webhelyhez tartozik, nem a modellhez. Megmutatja az alkalmazás nevét és verzióját, a {{ui:A DetailCraft névjegye}} hivatkozást, a {{ui:Súgó}} gombot (vagy a {{key:F1}} billentyűt) a súgóhoz, a {{ui:Mentés offline használatra}} gombot, a képernyőmód gombot és a {{ui:Papír}} / {{ui:Modell}} kapcsolót.

- A {{ui:Mentés offline használatra}} gomb a DetailCraftot, a 3D-nézetét és ezt a súgót a böngészőben tartja, így kapcsolat nélkül is megnyílik. Mentés után a {{ui:Offline használatra kész}} feliratot mutatja; ekkor kattintson rá a {{ui:Mentés újra (a legújabb verzió beszerzése)}} vagy az {{ui:Az offline másolat eltávolítása}} lehetőségért. Lásd: [Munka offline](common:offline).
- A {{ui:Papír}} világos, a {{ui:Modell}} sötét képernyőt ad. A 3D-nézet azonnal követi; a modellben semmi nem változik.
- A képernyőmód gomb és a {{key:Ctrl+Shift+F}} billentyűkombináció normál, teljes képernyős és sávok nélküli teljes képernyős mód között vált. A {{key:Ctrl+Shift+F}} minden számítógépen a Ctrl billentyűt használja, a Mac-et is beleértve. A sávok elrejtése esetén vigye az egérmutatót a képernyő felső szélére (vagy érintse meg), hogy visszajöjjenek. Az {{key:Esc}} billentyű kilép a teljes képernyőből.

## Az eszköztár

Az eszköztárnak öt csoportja van. Vigye az egeret egy gomb fölé, hogy lássa, mit csinál, és mi a billentyűje.

| Csoport | Gombok | Mit csinálnak |
|---|---|---|
| {{ui:Fájl}} | {{ui:Új}}, {{ui:Megnyitás}}, {{ui:IFC importálása}}, {{ui:Mentés}}, {{ui:Minta}} | Új modellt kezd, megnyit egy mentett `.detailcraft.json` vagy IFC-fájlt, ment egyet, vagy megnyitja a mintavázat |
| {{ui:Elhelyezés}} | {{ui:Kijelölés}}, {{ui:Gerenda}}, {{ui:Oszlop}}, {{ui:Merevítő}}, {{ui:Lemez}}, {{ui:Alap}}, {{ui:Lépcső}} | Az eszköz, amelyet a nézetben a következő kattintás használ |
| {{ui:Kapcsolás}} | {{ui:Homloklemezek}}, {{ui:Talplemez}}, és a {{ui:Továbbiak}} alatt: {{ui:Nyírólemezek}}, {{ui:Toldás}}, {{ui:Csomólemez}}, {{ui:Hasonló}} | Kapcsolatot ad a kijelölt gerendához, oszlophoz vagy merevítőhöz, vagy a kijelölt kapcsolatot minden hozzá hasonló csomópontra másolja |
| {{ui:Szerkesztés}} | {{ui:Visszavonás}}, {{ui:Ismétlés}}, {{ui:Másolás}}, {{ui:Beillesztés}}, {{ui:Továbbiak}} | Visszalépés és előre lépés a szerkesztések között; a kijelölés másolása és beillesztése. A {{ui:Továbbiak}} menüben megnyílik: {{ui:Kivágás}}, {{ui:Másolás}}, {{ui:Beillesztés}}, {{ui:Beillesztés helyben}}, {{ui:Kettőzés}}, {{ui:Törlés}}, {{ui:Összes kijelölése}} és {{ui:Kijelölés megszüntetése}}, mindegyik a billentyűjével |
| {{ui:Kimenet}} | {{ui:IFC}}, {{ui:NC-fájlok}}, {{ui:Anyagjegyzék}}, {{ui:Gyártmányrajz}}, {{ui:Rajzok}}, és a {{ui:Továbbiak}} alatt: {{ui:Hajlítás}}, {{ui:Tömegjelentés fázisonként}}, {{ui:KISS-fájl gyártásszervező szoftverhez}} | Exportot tölt le, vagy megnyitja a rajzlapokat |

Azok a gombok és menüpontok, amelyek éppen nem működhetnek, szürkén jelennek meg, és ha föléjük viszi az egeret, megmondja, miért. A {{ui:Homloklemezek}} gombhoz kijelölt gerenda kell, a {{ui:Talplemez}} gombhoz kijelölt oszlop, a {{ui:Hasonló}} gombhoz kijelölt kapcsolat, a {{ui:Gyártmányrajz}} gombhoz alkatrészekkel rendelkező modell, a {{ui:Másolás}} gombhoz kijelölt rúdelem vagy alap, a {{ui:Beillesztés}} gombhoz pedig előzőleg másolt elem kell. Lásd: [Másolás, beillesztés és kettőzés](topic:copy-paste).

## Az A Modell panel (bal oldal)

- {{ui:Modell}}: a modell {{ui:Név}} mezője. Ez nevezi el az összes mentett vagy exportált fájlt.
- {{ui:Rácsok}}: a rácsvonalak és távolságaik, valamint a {{ui:Rácsok alkalmazása}}. Lásd: [Rácsok és szintek beállítása](topic:grids-and-levels).
- {{ui:Szintek}}: szintenként egy sor (név és magasság mm-ben), a {{ui:Szint hozzáadása}} és a {{ui:Szintek alkalmazása}}.
- {{ui:Egyéni szelvény}}: saját paraméteres szelvény készítése. Addig zárva van, amíg meg nem nyitja.
- {{ui:Alkatrészjelek}}: a modell minden alkatrészjele a szelvényével, hosszával és darabszámával. Kattintson egy jelre, hogy kijelölje az első hozzá tartozó alkatrészt.

A {{ui:Rácsok}}, a {{ui:Szintek}} és az {{ui:Egyéni szelvény}} összecsukható: kattintson a fejlécükre.

## A nézet (középen)

A nézet a modellt 3D-ben mutatja. Fölötte a nézetsávban három gomb és egy lista van:

- {{ui:3D}}: szabadon körbeforgathatja a modellt.
- {{ui:Alaprajz}}: egy szintre nézés felülről. A gombok mellett szintlista jelenik meg. A szint fölött 1.5 m-nél magasabban lévő minden elem le van vágva, hogy a szint jól látható és kattintható legyen.
- {{ui:Homlokzat}}: egy betűvel jelölt rácsvonalra nézés egyenesen (A rács, B rács …). Megjelenik a betűs rácsok listája. Csak az attól 1 m-en belüli acél látszik.
- A nézetsáv jobb végén lévő illesztés gomb a teljes modell megjelenítéséhez nagyít.

Apró pontok jelölik minden szinten minden rácsmetszéspontot. Amíg elhelyező eszköz be van kapcsolva, a mutatóhoz legközelebbi pont kigyullad, és az állapotsor megnevezi, például: „A/2 az 1. szinten”. A színek különböztetik meg a rúdelemtípusokat: az oszlopoknak, gerendáknak, merevítőknek és lemezeknek saját színük van, a csavaroknak és rudaknak másik, az alapok áttetszőek, a betétvas csövekként jelenik meg. A furatok sötét dugókként látszanak; a kivágások le vannak vágva.

A forgatás, eltolás és nagyítás módja: [Mozgás a 3D-nézetben](topic:navigate-3d).

Ha a modell üres, a nézet egy rövid „Modell indítása” listát mutat. Egy mentett modellfájlt a nézet bármely pontjára húzva is megnyithat.

## A Tulajdonságok panel (jobb oldal)

Ez a panel attól függően mutat különböző dolgokat, hogy mit csinál, és a fejléce megmondja, melyiket: „Modell”, „Gerenda elhelyezése”, „b2 gerenda”, „Homloklemez-kapcsolat”, „Talplemez”, „F1 alap”, „3 kijelölve” vagy „Beillesztés”.

- **Nincs kijelölés:** a modell összefoglalója (rúdelemek, kapcsolatok, alapok, alkatrészek, jelek, csavarok, acél- és betétvas-tömeg, rácsok, szintek).
- **Elhelyezőeszköz be van kapcsolva:** a következő elem beállításai (szelvény, anyag, helyzet, elforgatás, oszlopoknál a {{ui:Eddig}}), a kiválasztott szelvény összefoglalója, és a {{ui:Hozzáadás rács szerint}} űrlap, amellyel a nézetre kattintás nélkül lehet elhelyezni.
- **Rúdelem kijelölve:** a neve, szelvénye, anyaga, helyzete, elforgatása, két végének koordinátái, jelei, vágási hossza és tömege, furatai és kivágásai, valamint gombok a kapcsolatokhoz, a gyártmányrajzához és a {{ui:Törlés}} gombhoz.
- **Kapcsolat kijelölve:** minden lemez-, csavar- és hegesztésbeállítás, az általa készített csavarok és varrat, a figyelmeztetései, valamint az {{ui:Alkalmazás hasonlókra}}.
- **Alap kijelölve:** a helyzete és mérete, az alsó háló, az indítóvasak, és az általa használt vasjelek.
- **Több elem kijelölve:** típusonként hány rúdelem, kapcsolat és alap van, azok acéltömege, valamint a {{ui:Másolás}}, {{ui:Kettőzés}} és {{ui:Törlés}} gombok.
- **Beillesztés:** a vágólapon lévő elem, és űrlapok a beírt eltolással vagy egy listából kiválasztott rácsmetszéspontra történő beillesztéshez.

A számmezők az {{key:Enter}} megnyomásakor vagy a mezőből való kilépéskor lépnek érvénybe. Minden módosítás egy visszavonható lépés.

## A jelentéslapok (alul)

- {{ui:Problémák}}: minden, amit a DetailCraft nem tudott felépíteni, vagy amit ellenőrizni szeretne, soronként egy {{ui:Kijelölés}} gombbal. A lap zárójelben mutatja a darabszámot.
- {{ui:Anyagjegyzék}}: alkatrészek, összeállítások, valamint csavarok és horgonyrudak, tömegekkel és egy {{ui:CSV letöltése}} hivatkozással. Kattintson egy alkatrészjelre, hogy kijelölje azt az alkatrészt.
- {{ui:Hajlítási kimutatás}}: minden alap minden vasjele, egy {{ui:CSV letöltése}} hivatkozással.

Ha egy lap van fókuszban, a {{key:Left}} és a {{key:Right}} billentyű lapok között léptet.

## Az állapotsor

Az alul futó sáv három részből áll: az elhelyezés közben a mutató alatti rácsmetszéspont, a legutolsó üzenet (mi történt az imént, vagy miért nem fogadtak el valamit), és az alkatrészek, csavarok, acéltömeg és betétvas-tömeg folyamatosan frissülő összesítése. Ha egy művelet nem látszik hatni, előbb ezt az üzenetet olvassa el.

A böngészőlap címe egy ponttal (•) kezdődik, amíg a modellben nem mentett módosítások vannak.

## Keskeny képernyőn

A kb. 760 pixel szélesség alatt az oszlopok egymás alá kerülnek: eszköztár, nézet, állapotsor, {{ui:Tulajdonságok}}, jelentéslapok, majd az utolsónak a {{ui:Modell}} panel. Görgesse az oldalt, hogy elérje őket. A DetailCraft asztali vagy laptop képernyőre készült; telefonon nézelődni lehet, szerkeszteni nem.
