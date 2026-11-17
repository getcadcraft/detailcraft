---
title: Fázisok
summary: Ossza a modellt fázisokra (összeszerelési sorrendek vagy szállítmányok), jelenítse meg vagy rejtse el az egyes fázisokat, helyezzen alkatrészeket fázisba, és fázisonként számozza a jeleket.
keywords: fázis, fázisok, fáziskezelő, összeszerelési sorrend, szállítmány, tétel, sorrend, fázis elrejtése, fázis megjelenítése, szűrő, számozás, jelelőtag, fázisonként
from: bae506f5
---

A fázis olyan alkatrészek csoportja, amelyeket együtt gyártanak, szállítanak vagy szerelnek be: összeszerelési sorrend, szállítmány, tétel. Minden elem és alap egy fázisban van. Egy csomópont annak a főelemnek a fázisában van, amelyhez tartozik: a véglemez a gerendájáéban, a talpalemez az oszlopáéban. Az új modellben egy fázis van.

## A Fázisok panel

A {{ui:Modell}} panel {{ui:Fázisok}} szakasza minden fázist felsorol:

- a jelölőnégyzet megjeleníti vagy elrejti a fázist a nézetben;
- a szám, és egy név, amelyet beírhat (üresen: „Fázis 2” és így tovább);
- hogy hány alkatrész van benne;
- a {{ui:×}} gomb eltávolít egy fázist. Csak üres fázis törölhető: előbb tegye át az alkatrészeit egy másik fázisba.

A {{ui:Fázis hozzáadása}} a következő számot adja, és azt teszi az új alkatrészek fázisává.

## Alkatrészek fázisba helyezése

- **Új alkatrészek:** az {{ui:Az új alkatrészek ide kerülnek}} beállítás azt a fázist választja ki, amelybe mostantól minden elhelyezett elem és alap kerül.
- **Egy alkatrész:** jelölje ki, és módosítsa a {{ui:Tulajdonságok}} panel {{ui:Fázis}} mezőjét.
- **Több alkatrész:** jelölje ki őket (ablakkal, {{key:Shift}}+kattintással, {{key:Mod+A}}), és módosítsa a {{ui:Fázis}} mezőt a {{ui:Tulajdonságok}} panel tetején. Ha különböző fázisban vannak, **Vegyes** jelenik meg. Egy módosítás egy visszavonási lépés.

A másolatok megtartják annak az alkatrésznek a fázisát, amelyről másolták, akkor is, ha egy másik modellbe illesztik be (a fázis ott hozzáadódik).

## Fázisok megjelenítése és elrejtése

Az elrejtett fázist a nézet nem rajzolja ki, nem lehet rákattintani, és egy kijelölőablak sem fogja meg, a {{key:Mod+A}} pedig kihagyja. Továbbra is szerepel az anyagjegyzékben, a jelentésekben, a rajzokon és minden exportban. Az elrejtés csak a nézetre vonatkozik: nem mentődik el, és nincs visszavonása.

## Jelölések fázisonként

Ha a **Jelölések számozása fázisonként** be van kapcsolva (alapból be van), és az alkatrészek több fázisban vannak, minden fázis saját számozást kap, és a jelek a fázisszámmal kezdődnek: alkatrészjelek 1-b1, 2-b1, összeállítási jelek 2-B1, alapok 2-F1. Két azonos gerenda különböző fázisban ekkor különböző jelet kap, mert különböző időpontban gyártják és szállítják őket. Ha csak egy fázis van használatban, a jelek nem kapnak előtagot. Kikapcsolva az egész modell egyben számozódik, így az azonos darabok a fázisuktól függetlenül azonos jelet kapnak.

A fázis bekerül az IFC-exportba (tulajdonságkészlet: DetailCraft, Fázis).

:::note
A fázisokat tartalmazó modellek a DetailCraft 2-es fájlformátumában mentődnek. A DetailCraft 0.3-as kiadása nem tudja megnyitni ezeket; ez a verzió megnyitja a régebbi fájlokat is, minden alkatrészt az 1. fázisba téve.
:::
