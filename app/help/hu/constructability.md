---
title: Kivitelezhetőségi ellenőrzések
summary: Problémák azokra a dolgokra, amelyeket a tervező szemmel észrevesz: olyan csavar, amelyet kulcs nem ér el, dugókulcshoz túl közeli csavarok, sarokhegesztések a méretkorlátjukon kívül, olyan hegesztések, amelyeket a pisztoly nem ér el, és vizet tartó csövek.
keywords: kivitelezhetőség, kulcs, dugókulcs, csavar hozzáférés, meghúzás, hegesztés mérete, sarokhegesztés, minimális hegesztés, maximális hegesztés, víz, szellőzőnyílás, lecsapolónyílás, horganyzás, üreges szelvény, problémák
from: 72315151
---

A DetailCraft négyféle olyan hibát keres, amelyet egyetlen szilárdsági ellenőrzés sem talál meg, és ezeket a {{ui:Problémák}} panelen sorolja fel. Ezek figyelmeztetések és figyelendő megjegyzések, nem hibák: a modell akkor is elkészül.

## Olyan csavar, amelyet a kulcs nem ér el

Minden csavarhoz a DetailCraft egy dugókulcsot tesz a fej és az anyacsavar fölé. A dugókulcs egy henger, amelynek szélessége az anyacsavar átlós mérete plusz 4 mm-es fal, hossza 60 mm. Ha egy gerincelem, öv, lemez vagy merevítő áll ebbe a hengerbe, a probléma megnevezi a csomópontot, a csavarok számát, az akadályozó alkatrészt és a csavartól mért távolságát.

A dugókulcs tipikus ütvecsavarozó dugókulcs. Egy villáskulcshoz kevesebb hely kell, egy nagyobb szerszámhoz több. Kérje meg a csatlakoztatott asszisztenst, hogy futtassa a `constructability_check` parancsot más `socketLength` értékkel, és nézze meg, hogyan változik a válasz.

## Túl közeli csavarok a dugókulcsnak

Egy csavar fölé helyezett dugókulcs nem érhet a következő csavar fejéhez. Egy csatlakozás azon csavarai, amelyek egymáshoz a dugókulcs szélességénél és a szomszédos fej méreténél közelebb vannak, a talált és a szükséges távolsággal együtt szerepelnek a listában.

## Sarokhegesztések mérete

Az AISC 360-16 J2.4 táblázata a legkisebb sarokhegesztést a vékonyabb rész vastagsága szerint adja meg (3 mm 6,35 mm vastagságig, 5 mm 12,7 mm-ig, 6 mm 19,05 mm-ig, 8 mm felette). A J2.2b pontja pedig a legnagyobbat az anyag élén: ha az anyag 6,35 mm-nél vékonyabb, nem lehet nagyobb az anyag vastagságánál; egyébként 1,6 mm-rel kisebb annál. Az azonos vastagságú részeken azonos méretű hegesztések egy problémaként szerepelnek.

A használt vastagság a hegesztés által megnevezett legvékonyabb rész, így egy 6,35 mm-es gerincű gerenda köré futó 8 mm-es hegesztés listába kerül.

## Víz és szellőzés

- Egy üreges szelvény **nyitott felső vége**, amely függőlegesen áll vagy 10°-nál nagyobb szögben lejt, esővizet enged be.
- Egy üreges szelvény, **mindkét végén zárva**, szellőzőnyílást és lecsapolónyílást igényel; a forrómártásos horganyzás és a melegített levegő nyomása is ezt követeli meg.

## Eléri-e a hegesztő

A sarokhegesztést a két összekötött felület között félúton tartott pisztollyal készítik. Minden körbefutó sarokhegesztéshez (homloklemez, talplemez, gérlemez) az ellenőrzés veszi a tag szelvényének körvonalát a lemeznél, és 20 mm-enként 45°-ban kifutó pisztolyútvonalat vesz fel, attól a ponttól kezdve, ahol a fúvóka (kezdetben 10 mm sugarú) először elhagyja mindkét felületet, további 30 mm-re. Ha az útvonal a gerenda saját övébe vagy egy másik alkatrészbe ütközik, a hegesztés ez a része az alkatrésszel és a távolsággal együtt listába kerül. Ezek a számok tipikusak, nem valamely szabvány értékei: kérje ki a gyártótól az eljárást és a fúvókát. A két élen futó hegesztéseket (nyírólemez) nem helyezi el, és nem ellenőrzi.
