---
title: Furatok és kivágások hozzáadása
summary: Furatok megadása gerincbe, övlemezbe és lemezbe, valamint az övlemezek kivágása a rúd végén, a vágott végtől mérve.
keywords: furat, furatok, csavarfurat, kivágás, bevágás, vágás, kivágás (cope), fúrás, lyukasztás, gerinc furata, övlemez furata
from: 33d12398
---

A furatokat és kivágásokat helyzet szerint adja meg. A rúdhoz tartoznak, és vele együtt mozognak.

A kapcsolatok (véglemezek, alaplemezek) által készített furatokat a rendszer automatikusan hozzáadja; ezeket nem kell beírnia. A listában így szerepelnek: „… furat a kapcsolatokból (szerkessze a kapcsolatot)”.

## Honnan mérjük a helyzeteket

- **x** a darab mentén fut a **vágott kezdettől**: a kezdő végtől, miután bármelyik kapcsolat visszavágta. Így az x = 0 az acél valódi vége, nem a rácspont.
- **y** a felületen keresztben, a keresztmetszet középpontjától mérjük:
   - a **gerincen**: felfelé (pozitív) vagy lefelé a magasság közepétől;
   - **övlemezen** vagy **lemezen**: a szélesség mentén, a középvonaltól.
- A rúd kezdőpontja az első pont, amelyre az elhelyezéskor kattintott. A {{ui:Végek (x, y, z mm)}} sorai mutatják, melyik vég melyik.

## Furat hozzáadása

1. Jelölje ki a rudat.
2. A {{ui:Tulajdonságok}} panel {{ui:Furatok}} mezőjében válassza ki a {{ui:Lap}} értéket: {{ui:Gerinclemez}}, {{ui:Felső övlemez}} vagy {{ui:Alsó övlemez}} (I-szelvény, U-szelvény vagy téglalap szelvényű cső esetén), vagy {{ui:Lemez lapja}} (lemeznél).
3. Írja be a {{ui:x hosszirányban (mm)}}, {{ui:y keresztirányban (mm)}} és {{ui:Átmérő (mm)}} értékeket. Az űrlap x 100, y 0, átmérő 22 értékkel indul.
4. Válassza a {{ui:Furat hozzáadása}} gombot.

Az állapotsor ezt írja: „Furat hozzáadva. Az x a vágott kezdettől, az y a keresztmetszet középpontjától mérődik (gerinc: felfelé, övlemez/lemez: keresztben).” A furat megjelenik a listában, a nézetben pedig sötét dugóként a felületen át.

Furat eltávolításához válassza a mellette lévő × gombot a listában.

A szögacélok és a kör keresztmetszetű csövek még nem fogadnak furatot: a {{ui:Furatok}} mezőjük ezt jelzi.

:::note
A 3D nézetben a furatok sötét dugóként jelennek meg, nem vágják át az acélt. Valódi furatok az NC-fájlokban, a gyártmányrajzokon és az IFC-exportban.
:::

Az a furat, amelynek x értéke a darab bármelyik végén túl van, a {{ui:Problémák}} lapon így jelenik meg: „a furat a darab végén kívül van”.

## Kivágás hozzáadása

A kivágások I-szelvényekhez valók: az egyik végén levágják a felső vagy alsó övlemezt (és annak mélységében a gerincet), hogy a gerenda átférjen egy másik rúdon.

1. Jelöljön ki egy I-szelvényű rudat.
2. A {{ui:Kivágások}} mezőben válassza ki a {{ui:Vég}} értéket ({{ui:Kezdet}} vagy {{ui:Vég}}) és az {{ui:Oldal}} értéket ({{ui:Felül}} vagy {{ui:Alul}}).
3. Írja be a {{ui:Hossz (mm)}} értéket (a gerenda mentén, abból a végből) és a {{ui:Mélység (mm)}} értéket (lefelé a tetejétől, vagy felfelé az aljától). Az űrlap 100 x 40 értékkel indul.
4. Válassza a {{ui:Kivágás hozzáadása}} gombot.

A nézet az acélból kivágott részt mutatja. A listában például ez olvasható: „Felül a kezdetnél: 100 x 40”. Eltávolításához használja a mellette lévő × gombot.

A kivágások négyszögletesek: a belső sarokban egyelőre nincs lekerekítés.

## Hogyan befolyásolják a furatok és kivágások a jelöléseket

Két darab csak akkor kap azonos darabjelölést, ha furataik és kivágásaik 1 mm-en belül egyeznek, figyelembe véve, hogy a darab meg lehet fordítva. Ha egy csoport egyik gerendájához furatot ad, az új jelölést kap. Lásd: [Jelölési szabályok](topic:mark-rules).
