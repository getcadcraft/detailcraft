---
title: Talplemezek és horgonyrudak hozzáadása
summary: Hegesztett talplemez négy horgonyrúddal egy pillér alá, a méretek beállítása, és másolása minden hasonló pillérre.
keywords: talplemez, horgonyrúd, horgonycsavar, lehorgonyzócsavar, pillértalp, alapcsavar, hasonló
from: 619ebc64
---

A talplemezes csomópont lemezt helyez a pillér alá, a pillért a lemez vastagságával lerövidíti, a kettőt összehegeszi, és a lemez furatain át négy horgonyrudat ad hozzá.

:::warning
A méretek kiindulási értékek, nem tervezés. A DetailCraft nem ellenőrzi a felfekvést, a rúd szilárdságát és a beágyazást.
:::

## Talplemez hozzáadása

1. Válassza a {{ui:Kijelölés}} ({{key:V}}) eszközt, majd kattintson egy pillérre. Annak függőlegesnek kell lennie.
2. Válassza a {{ui:Talplemez}} lehetőséget a {{ui:Kapcsolás}} csoportban, vagy a {{ui:Talplemez hozzáadása}} lehetőséget a {{ui:Tulajdonságok}} panelen.
3. Az állapotsor ezt írja: „Talplemez hozzáadva négy horgonyrúddal.” Az új csomópont lesz kijelölve.

Egy pillérhez egy talplemez tartozhat. Ha már van rajta, az állapotsor ezt írja: „Ehhez a pillérhez már tartozik talplemez.”

## Módosítás

Jelölje ki a talplemezt (kattintson a lemezre vagy egy rúdra). A {{ui:Lemez, csavarok és varrat (mm)}} alatt:

| Beállítás | Alapérték | Mit csinál |
|---|---|---|
| Lemezvastagság | 25 | A pillér ennyivel rövidül |
| Lemezhossz | 450 | A pillér mélységének irányában |
| Lemezszélesség | 400 | A pillérre merőlegesen |
| Rúdátmérő | 20 | A horgonyrúd mérete |
| Furatátmérő | 33 | A lemezben lévő furat |
| Csavarminőség | F1554 Gr 36 | A rúd minősége, szövegként |
| Rúdtávolság (mélységben) | 350 | A rúdközéppontok távolsága a lemez hosszában |
| Rúdtávolság (keresztirányban) | 300 | A rúdközéppontok távolsága keresztben |
| Rúd kiállása a lemez felett | 100 | A lemez felső széléről a rúd tetejéig |
| Rúd beágyazása a lemez alatt | 450 | A lemez alsó oldalától lefelé a betonba |
| Sarokvarrat mérete | 8 | A pillér talpa körül, mindenhol |
| Lemez anyaga | A36 | Szöveg |
| Habarcsrés | 0 | A beton felső széle és a lemez alsó oldala közötti távolság |
| Merevítők | Nincs | Válassza a Nincs, a 2 (a gerinccel egy vonalban) vagy a 4 (a gerincre merőlegesen is) lehetőséget; lásd lent |
| Merevítő vastagsága, magassága | 12, 150 | |
| Nyírókulcs mélysége | 0 | Mennyire nyúlik a kulcs a lemez alá; 0 = nincs kulcs |
| Nyírókulcs vastagsága, szélessége | 25, 150 | |
| Lemezalátétek | Nincs | Minden rúdon, vagy egyiken sem |
| Alátét mérete, vastagsága | 0, 0 | 0 = a rúdhoz tartozó minimum az AISC Design Guide 1 szerint |

Rúdhossz = beágyazás + habarcsrés + lemezvastagság + kiállás. Az alapértékekkel ez 575 mm.

## Talplemez részletei: habarcs, merevítők, nyírókulcs, alátétek

Mind a négy ki van kapcsolva új talplemezen, és a DetailCraft 0.4 előtt készült modellek talplemezein.

- **Habarcsrés.** A lemez ennyivel a beton felső széle fölött ül, a rudak pedig ennyivel hosszabbak lesznek. Az AISC Design Guide 1 (2.10) szerint kész padló esetén 1 in., alapon vagy pilléren 1½–2 in. javasolt; nagy lemezeknél és nyírókulccsal rendelkezőknél ennél több.
- **Merevítők.** A pillérhez és a lemezhez hegesztett függőleges lemezek, a pillér felületétől a lemez széléig, téglalapként (még nincs letörés vagy kúposítás). A **2** a gerinccel egy vonalban áll, minden öv után; a **4** még kettőt ad, a gerincre merőlegesen, az övek között, a lemez oldaláig. Csőpillérnél minden oldal közepén állnak. Mindegyiket mindkét oldalon hegesztik a pillérhez és a lemezhez.
- **Nyírókulcs.** A talplemez alá, a pillér mélységének irányában, középre igazítva hegesztett lemez. A DetailCraft figyelmeztet, ha nem mélyebb a habarcsrésnél. Nem vágja ki a zsebet az alapban; ezért az [ütközésellenőrzés](topic:clash-check) nem veszi figyelembe a kulcsot és az alapot.
- **Lemezalátétek.** Minden rúdon egy négyzet alakú lemezalátét, a talplemezen fekve, a pillér összeállításában lazaként szerepel (a pillérrel együtt szállítva, nem hegesztve: Design Guide 1, 2.6). Ha a méret és a vastagság 0, a DetailCraft az AISC Design Guide 1, 2. kiadás, 2.3. táblázatából veszi a rúdhoz tartozó minimális alátétet; metrikus rúd esetén a következő nagyobb collméretet (egy M20-as rúd a 7/8 in.-es sort kapja: 2½ in. × 5/16 in.). A tulajdonságok panel mutatja a használt méretet. Az alátét furata a rúdátmérő + 1/16 in.: ez a DetailCraft választása, a táblázat nem ad meg furatot. A DetailCraft figyelmeztet, ha a rudak nem állnak ki eléggé az alátét és az anya számára (a kiállás kisebb, mint az alátét vastagsága + a rúdátmérő).

Az AISC Design Guide 1, 2.3. táblázata a lemezbeli rúdfuratot is ajánlja: 1-5/16 in. egy ¾ in.-es rúdhoz, 1-9/16 in. egy ⅞ in.-eshez, 1-13/16 in. egy 1 in.-eshez. A DetailCraft nem módosítja a furatméretet.

Figyelmeztetések akkor is megjelennek, ha a rúdfuratok a lemez szélétől 1,2-szeres furatátmérőnél közelebb esnek, ha a rudak a pillér körvonalán belül vannak, vagy ha a lemez kisebb a pillérnél.

## Másolás hasonló pillérekre

1. Jelölje ki a talplemezt.
2. Válassza az {{ui:Alkalmazás hasonlókra (N)}} gombot, vagy a {{ui:Kapcsolás}} csoport {{ui:Továbbiak}} menüjének {{ui:Hasonló}} pontját.
3. Minden függőleges pillér, amelynek ugyanaz a szelvénye, nincs rajta talplemez, és nem másik pillér alatt áll, másolatot kap.

## Talplemezek és alapok

A talplemezhez nincs szükség alapra, az alap pedig nem tud a fölötte lévő talplemezről: a horgonyrudak nincsenek összekötve az alap vasalásával. Alapokat a {{ui:Alap}} eszközzel helyezhet el; lásd: [Alapok elhelyezése vasalással](topic:footings-and-rebar).
