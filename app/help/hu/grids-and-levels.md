---
title: Rácsok és szintek beállítása
summary: Adja meg a rácsvonalakat, a köztük lévő távolságokat és azokat a szinteket, amelyekre minden elem elhelyezésre kerül.
keywords: rács, rácsok, tengelyek, rácsvonalak, szintek, magasságok, emeletek, födémek, távolság, beállítás
from: 9cad233c
---

A DetailCraftban minden rúd egy rácsmetszéspontra kerül, egy szinten. Először a rácsokat és a szinteket állítsa be; később módosíthatja őket.

## Hogyan működnek itt a rácsok

- A **számozott vonalak** az egyik irányban, a **betűzött vonalak** a másikban futnak. A nevek csak megszokásból vannak: a felirat bármilyen, legfeljebb 8 karakteres szöveg lehet (1, 2, 3 vagy A1, A2, vagy 10, 20).
- A feliratokat és a köztük lévő távolságokat írja be, nem koordinátákat. Minden sorozat első vonala a 0-ban van.
- A számozott vonalak állandó x-ű vonalak; a betűzött vonalak állandó y-jú vonalak. Így az 1-es rácstól a 2-esig tartó gerenda x irányban fut, az A-tól a B-ig tartó pedig y irányban.
- Minden érték milliméterben van.

Az új modell számozott vonalakkal indul: 1, 2, 3 a 6000 6000 távolságokkal, betűzött vonalakkal: A, B a 6000 távolsággal, és két szinttel.

## A rácsok beállítása

1. A bal oldali {{ui:Modell}} panelen nyissa meg a {{ui:Rácsok}} részt, ha össze van csukva.
2. A {{ui:Számozott vonalak}} mezőbe írja be a feliratokat szóközzel elválasztva, például `1 2 3 4 5`.
3. Az alatta lévő {{ui:Távolságok}} mezőbe minden réshez írjon be egy távolságot, például `6000 6000 7500 6000`. Öt vonalhoz négy rés tartozik.
4. Ugyanezt tegye a {{ui:Betűzött vonalak}} és a hozzájuk tartozó {{ui:Távolságok}} mezőben, például `A B C` és `8000 8000`.
5. Válassza a {{ui:Rácsok alkalmazása}} gombot.

Az állapotsor ezt írja: „A rácsok frissítve.”, a nézet pedig az új rácsra nagyít. Vesszők is elválasztóként működnek.

Ha valami nem stimmel, semmi sem változik, és az állapotsor megmondja az okát, például: „Számozott rácsok: adjon meg egy távolságot a vonalpárok között (4).” További ellenőrzések: a távolságok pozitív milliméterek legyenek, a feliratoknak különbözniük kell, és irányonként legfeljebb 60 vonal lehet.

:::note
Az elemek megtartják koordinátáikat, ha a rács mozog. Ha acél elhelyezése után módosít egy távolságot, az acél a helyén marad, és többé nem lesz a rácson. Előbb a rácsot módosítsa, vagy a rudakat úgy mozgassa, hogy a végpontjaik koordinátáit szerkeszti.
:::

## A szintek beállítása

1. Nyissa meg a {{ui:Szintek}} részt a {{ui:Modell}} panelen.
2. Minden sorban van egy szintnév és annak magassága milliméterben. Tetszés szerint szerkessze őket.
3. Válassza a {{ui:Szint hozzáadása}} gombot újabb sorhoz. Neve „3. szint” lesz (és így tovább), és a legmagasabb szint fölé 4000 mm-rel kerül; szükség esetén mindkettőt módosítsa.
4. Szint eltávolításához válassza a sor végén lévő × gombot.
5. Válassza a {{ui:Szintek alkalmazása}} gombot.

Semmi sem változik, amíg a {{ui:Szintek alkalmazása}} gombot nem választja ki. Alkalmazáskor a szintek magasság szerint rendeződnek. Minden szintnek kell nevet adni, két szint nem viselhet azonos nevet, és legalább egy szintet meg kell tartani.

A szintek lehetnek nulla alatt (például egy pince `-3500`), és nem kell egyenletes távolságban lenniük.

## A szintek használata

- Egy szinten elhelyezett oszlop a következő szintig tart, vagy a {{ui:Eddig}} mezőben kiválasztott szintig.
- A gerendák és lemezek két metszéspont között kerülnek elhelyezésre, a kattintott szinten.
- Az alapok felső síkja a kattintott szintre kerül.
- Az {{ui:Alaprajz}} egyszerre egy szintet mutat felülről.
- Az IFC-export szintenként egy épületemeletet hoz létre.

## Visszavonás

A rács- és szintmódosítások ugyanúgy szerkesztések, mint a többi: a {{key:Mod+Z}} visszaállítja az előző rácsot.

## Tovább

[Oszlopok, gerendák és merevítők elhelyezése](topic:place-members)
