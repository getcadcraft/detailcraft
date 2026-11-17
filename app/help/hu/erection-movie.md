---
title: Szerelési terv és film
summary: Vigyen be egy darut és a teherbírási diagramját, nézze meg, hogy minden emelés a fázissorrendben a diagram szerint van-e ellenőrizve, és mentsen egy szerelési filmet, amely bármely telefonon offline is lejátszható.
keywords: szerelés, daru, emelés, teherbírási diagram, sugár, teherbírás, kötözés, sorrend, film, animáció, telefon, offline, emelési terv
from: fa7b0133
---

A {{ui:Szerelés}} lap a modellt szerelési sorrenddé alakítja, és minden emelést ellenőriz az Ön által megadott daruhoz képest. A megadott számokból tervez. Nem emelési terv: azt a kötöző és a darukezelő készíti el.

## A daru leírása

Válassza az {{ui:Daru hozzáadása}} gombot, majd töltse ki:

- **Daru középpontja X és Y:** ahol a daru áll, milliméterben.
- **Legmagasabb horog:** legfeljebb milyen magasra emelkedhet a horog, milliméterben. 0 esetén nincs korlát ellenőrizve.
- **Horogblokk és kötözés, amely nincs a diagramban:** kilogramm, amelyet a teherbírási diagramról a teher hozzáadása előtt levonnak, ha a diagram ezt még nem teszi meg.
- **Teherbírási diagram:** soronként egy sor, a sugár méterben, majd a teherbírás kilogrammban. Másolja a sorokat a daru saját diagramjából.

A diagramot úgy olvassa, ahogy egy teherbírási diagramot szokás: egy sugárhoz megadott teherbírás addig a sugárig érvényes. Két sor közötti sugárnál a **távolabbi** sor teherbírása érvényes, sosem egy köztes érték. Az első soron belül az első sor teherbírása érvényes. Az utolsó sor után a daru egyáltalán nem tud emelni. Az emeléshez számított sugár a felvételi és a beállítási sugár közül a nagyobb.

Második daru ugyanígy adható hozzá. Minden emelés az első olyan darura megy, amely a megadott tartalékkal el tudja végezni.

## Mit csinál a terv

- Egy emelés összeállításonként: egy gerenda a végleméveivel, egy oszlop a talplemezével, egy lépcső.
- A sorrend először a fázisokat követi, majd szintről szintre: oszlopok, a rájuk támaszkodó gerendák, merevítők, lemezek, lépcsők. Egy alkatrészt sosem emelnek meg az őt tartó elem előtt.
- Minden emelés mutatja a súlyát (a modell bruttó súlya, plusz a {{ui:Függesztőeszköz minden tömeghez hozzáadva}}), a sugarát, a diagram használt részét és azt a percet, amikor kezdődik.
- A {{ui:A diagram legnagyobb kihasználtsága emelésenként}} a biztonsági tartalék. A fölötte lévő emelés **Meghaladja a tartalékot** jelzést kap; a diagramon felül **Meghaladja a diagramot**; a diagram utolsó sugarán túl **Túl a diagramon**; a horognál magasabb alkatrész pedig **Horog túl alacsony**.

A lyukak és kivágások nem csökkentik a súlyt, a csavarokat a kötözési százalék fedezi.

## Problémák

Minden olyan emelés, amely a tartalékot meghaladja, a diagramon kívül esik, túl magas, vagy amelyet a tartó elem előtt állítottak be, megjelenik a {{ui:Problémák}} panelen. Az olyan gerenda, amelyet nem tart kapcsolat, ideiglenes alátámasztást igényel jelzéssel szerepel.

## Szerelési film mentése

A {{ui:Videó mentése}} egyetlen HTML-fájlt ír. Nyissa meg bármely böngészőben, telefonon is, hálózat és fiók nélkül: lejátszás és szünet, a sáv húzásával bármely percre ugorhat, az ujjával forgathatja a modellt, csippentéssel nagyíthat. A felirat minden emelést megnevez, a súlyával, a sugarával és a diagram részesedésével együtt. A modell egyszerű dobozokként van rajzolva: a sorrendet és az emeléseket mutatja, nem a valódi szelvényeket.

Ugyanez a táblázat CSV-ként is menthető a {{ui:CSV}} gombbal. A daru és a diagram a modellfájlban mentődik, és minden módosítás egy visszavonási lépés.
