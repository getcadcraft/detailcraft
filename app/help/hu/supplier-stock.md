---
title: Beszállítói készlet és szállítási idők
summary: Ellenőrizze, hogy a vágási listában szereplő rudakból van-e elegendő a beszállító készletlistája szerint, és mennyit kell várni.
keywords: beszállító, készlet, szállítási idő, acélraktár, hengermű, elérhetőség, visszarendelés, rudak, beszerzés, ellátás
from: 1373f5a3
---

A {{ui:Supply}} lap minden olyan szelvényt megkeres a beszállító készletlistájában, amelyet a {{ui:Cut list}} vásárol. A fájl a modellben marad; semmi sem kerül elküldésre.

## Beszállítói fájl hozzáadása

Nyomja meg a {{ui:Add a supplier file}} gombot, és válasszon egy CSV-fájlt a beszállítótól (vesszővel, pontosvesszővel vagy tabulátorral elválasztva). Kell egy oszlop a tételhez vagy a szelvényhez (Item, Name, Description, Section, SKU), és egy a készlethez (In stock, Quantity, On hand) vagy a szállítási időhöz. A mértékegység (each, metres, kilograms, tonnes), az ár, a beszállító és a visszarendelés dátuma akkor olvasható ki, ha van hozzájuk oszlop. A szöveges megjegyzéseket is felismeri, például „Out of stock”, „In stock”, „2-3 weeks”, „backorder”. Legfeljebb öt fájl tartható meg; azonos nevű fájl hozzáadása felülírja a meglévőt.

## Amit lát

Minden szelvényhez, amelyet a vágási lista vásárol, a táblázat megmutatja, mennyi kell a modellből, mennyi van készleten, a szállítási időt, a beszállítót és az eredményt:

- **Fedezett:** elegendő van készleten.
- **Hiány:** a készlet kevesebb az igénynél. Ha a készlet kevesebb az igénynél, és megad egy leghosszabb várakozási időt, a szállítási idő megmondja, mennyi ideig tart a többi.
- **Túl későn:** nincs készletadat, és a szállítási idő hosszabb, mint az elfogadott várakozás.
- **Nincs készletadat:** a fájl nem mondja meg.
- **Más mértékegység:** a beszállító a szelvényt olyan mértékegységben adja meg, amelyet a modell nem tud kiszámítani.

Az igény a modellből rudakban van megadva (az optimalizált vágási listából, a készleti hosszakkal), megvásárolt rúd méterében és kilogrammban (a szelvény tömege méterenként), a fájl saját mértékegysége szerint. A szelvényt a neve alapján párosítja („W16 X 26” és „w16x26” ugyanaz). A fájlban nem szereplő szelvények fel vannak sorolva.

A hiányok és a túl későn érkező szelvények a {{ui:Problems}} panelen láthatók. Ez a lap nem rendel semmit.

## Korlátok

A készletadatok és a szállítási idők a fájl készítésének napjáig érvényesek. A lemezeket nem optimalizáljuk, ezért nem keressük őket. A fájlt csak olvassuk: benne lévő utasítások pusztán szöveget jelentenek.
