---
title: Másolás, beillesztés és kettőzés
summary: Jelöljön ki több alkatrészt, és másolja őket a lyukakkal, kivágásokkal és kapcsolatokkal együtt. Illessze be rácsmetszéspontra, eltolással, helyben vagy egy másik lapon. Kivágás, kettőzés, törlés és összes kijelölése.
keywords: másolás, beillesztés, kivágás, kettőzés, vágólap, beillesztés helyben, összes kijelölése, kijelölés megszüntetése, többszörös kijelölés, Shift-kattintás, több, mező ismétlése, keret másolása, eltolás, több törlése, Szerkesztés menü, További menü
from: f25f1829
---

Az eszköztár {{ui:Szerkesztés}} csoportjában ott van a {{ui:Visszavonás}}, az {{ui:Ismétlés}}, a {{ui:Másolás}} és a {{ui:Beillesztés}} gomb. A {{ui:Továbbiak}} menü tartalmazza a többit: {{ui:Kivágás}}, {{ui:Másolás}}, {{ui:Beillesztés}}, {{ui:Beillesztés helyben}}, {{ui:Kettőzés}}, {{ui:Törlés}}, {{ui:Összes kijelölése}} és {{ui:Kijelölés megszüntetése}}, mindegyik a billentyűparancsával. Az a gomb vagy menüpont, amely most nem használható, halvány; vigye rá a mutatót, és olvassa el, miért (például „még nincs másolt elem").

Minden beillesztés, kivágás, kettőzés és törlés egy lépés: egyetlen {{key:Mod+Z}} mindet visszavonja.

## Több alkatrész kijelölése

- Kattintson egy alkatrészre a kijelöléséhez. Tartsa lenyomva a {{key:Shift}} billentyűt (vagy a {{key:Ctrl}}, vagy a {{key:Mod}} billentyűt), és kattintson további alkatrészekre a hozzáadásukhoz; a kijelöltet ugyanígy kattintással veheti ki a kijelölésből.
- A {{key:Mod+A}} vagy az {{ui:Összes kijelölése}} minden rúdelemet, kapcsolatot és alapot kijelöl.
- Az {{key:Esc}} vagy a {{ui:Kijelölés megszüntetése}} törli a kijelölést.

Ha több elem van kijelölve, a {{ui:Tulajdonságok}} panel fejlécében a „4 kijelölve" felirat látszik (vagy a tényleges szám), és listázza a rúdelemeket típus szerint, a kapcsolatokat, az alapokat és az acél bruttó tömegét, a {{ui:Másolás}}, {{ui:Kettőzés}} és {{ui:Törlés}} gombokkal.

## Másolás

1. Jelölje ki a kívánt rúdelemeket és alapokat.
2. Válassza a {{ui:Másolás}} gombot, vagy nyomja meg a {{key:Mod+C}} billentyűkombinációt.

Ezek kerülnek át:

- Minden rúdelem teljes egészében: szelvény, anyag, végek, helyzet, elforgatás, név, lyukak és kivágások. A felhasznált egyéni szelvény is átmásolódik.
- Minden alap teljes egészében: méret, beton, alsó hálózás és indítóvasalás.
- Végelemek és talplemezek csak akkor kerülnek át, ha a kapcsolatot összefogó összes rúdelem át van másolva: a gerenda végleméhez a gerenda és az oszlopa kell. Az állapotsor jelzi, hány kapcsolat maradt ki. Ha szándékosan szeretné kihagyni a kapcsolatokat, törölje a jelölést ezen: **Végelemek és talplemezek másolása a rúdelemekkel együtt** a [DetailCraft-beállításokban](topic:settings).

Önmagában kapcsolat nem másolható; jelölje ki helyette a rúdelemeit. Ha más csomópontoknak ugyanaz a kapcsolat kell, használja a {{ui:Hasonló}} gombot (lásd: [Homloklemezek](topic:end-plates#copy-it-to-every-similar-joint)).

A másolat mindaddig ebben a böngészőben marad, amíg mást nem másol. Ugyanebben a böngészőben egy másik DetailCraft-lap vagy -ablak is be tudja illeszteni, így egy keretet az egyik modellből másolhat, és a másikba illeszthet be.

## Beillesztés rácsmetszéspontra

1. Válassza a {{ui:Beillesztés}} gombot, vagy nyomja meg a {{key:Mod+V}} billentyűkombinációt.
2. Vigye a mutatót a nézetre. A másolat szaggatott körvonala a mutatóhoz legközelebbi rácsmetszéspontot követi.
3. Kattintson egy metszéspontra. A másolat alappontja (a legalsó sarka: a másolt elemek legkisebb x, y és z értéke) oda kerül.

A beillesztett elemek utána ki vannak jelölve, így máshol újra beillesztheti őket, vagy módosíthatja. Az {{key:Esc}} megszakítja a beillesztést; a másolat a vágólapon marad. Az {{ui:Alaprajz}} és a {{ui:Homlokzat}} megkönnyíti a megfelelő metszéspont eltalálását.

:::tip
Mező ismétléséhez jelölje ki a mező rúdelemeit (vagy mindent a {{key:Mod+A}} billentyűkombinációval), másolja, illessze be, majd kattintson arra a metszéspontra, amely egy mezőnyire van attól, ahol a másolat legalsó sarka volt.
:::

## Beillesztés billentyűzetről

Beillesztés közben a {{ui:Tulajdonságok}} panel mutatja, mi van a vágólapon, valamint két űrlapot:

- {{ui:Beillesztés eltolással (mm, az eredetitől)}}: írja be az x, y és z értéket, és válassza a {{ui:Beillesztés ezzel az eltolással}} gombot. Az eltolás a [DetailCraft-beállításokból](topic:settings) indul.
- {{ui:Beillesztés rácsmetszéspontra}}: válasszon egy betűjelű rácsvonalat, egy számozott rácsvonalat és egy szintet, majd a {{ui:Beillesztés ide}} gombot. Az alappont oda kerül.

## Beillesztés helyben

A {{ui:Beillesztés helyben}} ({{key:Mod+Shift+V}}) pontosan abba a koordinátába illeszti a másolatot, ahonnan másolták. Használja a {{ui:Kivágás}} után, vagy ha más modellből ugyanarra a helyre szeretne alkatrészeket hozni. Ha az eredeti elemek még ott vannak, a másolat rájuk kerül, és az állapotsor figyelmeztet: mozgassa a másolatokat a {{ui:Tulajdonságok}} panelen lévő {{ui:Kezdet}} és {{ui:Vég}} értékükkel, vagy vonja vissza.

## Kettőzés

A {{ui:Kettőzés}} ({{key:Mod+D}}) lemásolja a kijelölést, és azonnal be is illeszti, a [DetailCraft-beállításokban](topic:settings) megadott eltolással (kezdetben 6000 mm az x irányban). A vágólap tartalmát nem változtatja meg. A másolatok utána ki vannak jelölve, így a {{key:Mod+D}} újbóli megnyomása ezekből készíti a következőt.

## Kivágás és törlés

- A {{ui:Kivágás}} ({{key:Mod+X}}) lemásolja a kijelölést, majd törli. A megfelelő helyen illessze be.
- A {{ui:Törlés}} ({{key:Delete}} vagy {{key:Backspace}}) törli a kijelölést. Rúdelem törlésekor a hozzá tartozó kapcsolatok is törlődnek.

## Jelölések beillesztés után

Az alkatrészjeleket és az összeállítási jeleket nem tárolja a rendszer; a DetailCraft minden módosítás után újra számozza őket a modellből ([Hogyan kapnak jelet](topic:mark-rules)). Ezért:

- Az a másolat, amely ugyanaz a darab, mint az eredetije (ugyanaz a szelvény, minőség, vágási hossz, lyukak és kivágások), megkapja az eredeti jelét, és a {{ui:Alkatrészjelek}} darabszáma és az anyagjegyzék nő.
- Ha a másolat más lesz, saját jelet kap. Például egy gerenda, amelyet a végleme nélkül illesztettek be, nincs visszavágva, így más darab. A jelek az egész modellben újra számozódnak, ezért más alkatrészek számai is változhatnak.

Minden beillesztett rúdelem, lyuk, kivágás, kapcsolat és alap új azonosítót kap, így a modellben semmi sem osztozik a másolat és az eredetije között.

## Ha a vágólapot elutasítja

A vágólap tartalmát ugyanolyan gondosan ellenőrzik, mint a megnyitott modellfájlt: minden, ami nem érvényes DetailCraft-alkatrész, eldobásra kerül, és az állapotsor megmondja, mit. Az újabb DetailCraft által vagy más forrásból származó vágólapot üzenettel elutasítja, és semmi sem kerül beillesztésre. Ha egy privát ablak nem tudja a másolatot a böngésző tárolójában megtartani, a másolat abban a lapban továbbra is működik.
