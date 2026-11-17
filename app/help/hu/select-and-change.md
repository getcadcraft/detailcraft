---
title: Kijelölés ablakkal, mozgatás, forgatás, tükrözés, több elem módosítása
summary: Húzzon ablakot a kijelöléshez, húzza a kijelölt alkatrészeket a mozgatáshoz, mozgassa, forgassa vagy tükrözze a kijelölést (vagy annak másolatát), vagy több elem szelvényét, anyagát, helyzetét vagy elforgatását egyszerre módosítsa.
keywords: lasszó, kerítés, szabadkézi kijelölés, húzás, húzással mozgatás, fogás, ablak, keresztező ablak, dobozos kijelölés, húzásos kijelölés, sok kijelölése, mozgatás, forgatás, tükrözés, átfordítás, másolás, sok módosítása, több elem, szelvény, anyag, helyzet, elforgatás, változó, rácsvonal
from: 50b16f9a
---

Mindegyik művelet egy visszavonási lépés: egyetlen {{key:Mod+Z}} mindet visszavonja.

## Kijelölés ablakkal

- Az {{ui:Alaprajz}} és a {{ui:Homlokzat}} nézetben húzzon a bal gombbal egy üres helyről. A {{ui:3D}} nézetben tartsa lenyomva a {{key:Shift}} billentyűt, és húzzon (sima húzás elforgatja a modellt).
- **Jobbra** húzva ablakot kap: az teljesen a területen belül lévőket veszi ki, tömör szegéllyel rajzolva.
- **Balra** húzva keresztező ablakot kap: mindent kijelöl, amit érint, szaggatott vonallal rajzolva.
- A {{key:Shift}} billentyűt a húzás kezdésekor tartsa lenyomva, hogy a meglévő kijelöléshez adjon hozzá, ahelyett, hogy lecserélné.
- Az alaprajz vagy a homlokzat csak azt kínálja, amit mutat: az alaprajz fölött levágott alkatrészek, vagy a homlokzat rácsvonalától 1 m-nél messzebb lévők nem választhatók ki.
- Húzás közben a {{key:Esc}} eldobja az ablakot.

### Lasszó

Válassza a **Lasszó** lehetőséget a {{ui:Kijelölés húzással}} alatt a [DetailCraft beállításai](topic:settings) részben, és ugyanaz a húzás szabadkézi vonalat rajzol téglalap helyett.

- Az első oldalirányú mozgása dönti el a kijelölés módját: **jobbra** az, ami teljesen belül van (tömör vonal); **balra** az, amit érint (szaggatott).
- Húzás közben nyomja meg a {{key:Space}} billentyűt, hogy váltson a belső, az érintett és a **kerítés** között: ez egy nyitott vonal, amely mindent kijelöl, amit keresztez (pontozott, narancssárga).
- A {{key:Shift}} a hozzáadáshoz és a {{key:Esc}} az eldobáshoz ugyanúgy működik, mint az ablaknál.

:::touch
Érintőképernyőn egy ujjal az alaprajzot és a homlokzatot továbbra is el lehet tolni; az alkatrészeket koppintással jelölje ki.
:::

Az {{ui:Alaprajz}} és a {{ui:Homlokzat}} nézetben a jobb vagy a középső gombbal tolhat el, miközben a {{ui:Kijelölés}} eszköz be van kapcsolva.

## Alkatrészek húzása a mozgatáshoz

1. Először jelölje ki az alkatrészeket (kattintással, a {{key:Shift}}+kattintással vagy ablakkal).
2. Nyomjon egy kijelölt alkatrészre, és húzza. Az egész kijelölés mozog; szaggatott körvonal mutatja, hová kerül.
3. Engedje el az elhelyezéshez. Az {{key:Esc}} még az elengedés előtt mindent visszateszi.

- A {{ui:3D}} és az {{ui:Alaprajz}} nézetben az alkatrészek a szinten át mozognak. A {{key:Mod}} billentyűt a húzás kezdésekor tartsa lenyomva a {{ui:3D}} nézetben, hogy fel-le mozgassa őket.
- A {{ui:Homlokzat}} nézetben a homlokzaton belül mozognak: a rácsvonal mentén, és fel-le.
- A húzott alkatrész egy rácsmetszéshez illeszkedik, ha a vége néhány képpontnyira kerül tőle (a metszéspont kigyullad, és az állapotsor megnevezi). Máshol a mozgás 10 mm-es lépésekben történik.
- Egy ki nem jelölt alkatrészen nyomva a nézet csak elforgatódik vagy eltolódik, így húzás soha nem mozgat véletlenül semmit.
- A húzás egy visszavonási lépés, mint a {{ui:Mozgatás}}. A csatlakozások követik az elemeiket.

## Tulajdonság módosítása sok elemen

Jelöljön ki két vagy több elemet. A {{ui:Tulajdonságok}} panelen, a **Módosítás mindegyiken** alatt:

- {{ui:Szelvény}}, {{ui:Pozíció}}: a köztük lévő gerendákra, pillérekre és merevítésekre.
- {{ui:Lemezvastagság (mm)}} és {{ui:Lemezszélesség (mm)}}: a lemezekre.
- {{ui:Anyag}} és {{ui:Elforgatás (°)}}: mindegyikre.

Ha az elemek nem egyeznek, a mező **Változó** feliratot mutat. Válasszon vagy írjon be egy értéket, és minden elem, amelyre vonatkozik, megkapja; az állapotsor megmondja, hányan változtak meg, és hányan tartották meg a sajátjukat.

A {{ui:Tulajdonságok}} panel számmezői számítást is elfogadnak: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. A nem értelmezhető számítást a program elutasítja, és az állapotsor megmondja, hol van a hiba.

## Mozgatás, forgatás vagy tükrözés

Jelöljön ki elemeket és alapokat (egy is elég), majd használja a **Mozgatás, forgatás, tükrözés** lehetőséget a {{ui:Tulajdonságok}} panelen. A csatlakozások önmagukban nem mozognak: követik az elemeiket. Ha egy gerendát mozgat, de a pillérét nem, az állapotsor megmondja, hány csatlakozás köti most a mozgatott elemet a helyén maradthoz, és a [Problémák](topic:troubleshooting) megmondja, ha már nem illeszkednek.

- **Mozgatás:** adja meg az x, y és z értéket milliméterben, és válassza a {{ui:Mozgatás}} lehetőséget. Vagy válassza a {{ui:Két pont megadása}} lehetőséget (vagy nyomja meg az {{key:M}} billentyűt): kattintson arra a rácsmetszetre, ahonnan mozgat, majd arra, ahová. Szaggatott körvonal követi a mutatót.
- **Forgatás alaprajzban:** adja meg a szöget (az óramutató járásával ellentétes irányban, felülnézetből), és válassza ki, mi körül forduljon: a kijelölés közepe vagy egy rácsmetszet. A pillérek a kerettel együtt fordulnak.
- **Tükrözés:** válasszon egy rácsvonalat. A tükörkép ugyanaz a szelvény, csak másképp fordítva: az I-szelvény megtartja az övét, az U-szelvény a másik irányba néz (felső és alsó széle felcserélődik), a furatok és kivágások pedig az alkatrésszel együtt tükröződnek.
- Jelölje be a **Megtartás eredetiként (másolat készítése)** lehetőséget, hogy a kijelölés helyben maradjon, és a másolatot mozgassa, forgassa vagy tükrözze. A csatlakozásai akkor jönnek vele, ha a {{ui:Homloklemezek és talplemezek másolása a rúdelemeikkel}} be van kapcsolva a [DetailCraft beállításai](topic:settings) részben.

A forgatás függőleges tengely körül történik, a tükrözés pedig függőleges síkban, így a szintek vízszintesek maradnak, az alapok pedig függőlegesek.
