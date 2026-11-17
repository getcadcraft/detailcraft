---
title: A DetailCraft használata AI-asszisztenssel
summary: Hagyja, hogy a saját AI-asszisztense vagy szkriptje olvassa a modellt, az alkatrészeit, problémáit és ütközéseit, adjon hozzá elemeket és kapcsolatokat, mentsen és exportáljon (az USD is): jogosultságok, csatlakozás a CadCraft Studio-n keresztül és a tevékenységnapló.
keywords: ai, asszisztens, ügynök, mcp, model context protocol, szkript, automatizálás, alkatrészek, ütközések, kapcsolatok, jogosultságok, leválasztás, tevékenység, visszavonás
from: d624c9a0
---

## Mit fog megtudni

Hogyan engedhet AI-asszisztensnek (vagy egy saját írt szkriptnek) dolgozni a DetailCraft-tal, és hogyan döntheti el, mihez nyúlhat.

A DetailCraft **nem rendelkezik saját AI-val**, és semmit nem küld sehová. Ön hozza az asszisztenst: bármely olyan programot, amely beszéli a Model Context Protocol (MCP) nyelvet. A DetailCraft csak eszközöket ad neki, és Ön választja ki, melyeket.

## Bekapcsolás

1. Nyissa meg a {{ui:Settings}} menüt (a fogaskerék az alkalmazássávban, vagy a {{key:Mod+,}}), és lépjen a {{ui:DetailCraft}} fülre.
2. Az {{ui:Assistants}} alatt jelölje be: **Az AI-asszisztensek és szkriptek használhatják a DetailCraftot**. Alapból ki van kapcsolva.
3. Válassza ki, mit tehet: az **Olvasás** alapból be van jelölve; a **Szerkesztés**, a **Mentés** vagy az **Exportálás** lehetőséget csak akkor jelölje be, ha szükséges.

A bejelölt jogosultságokon kívül eső eszközök nem kerülnek felajánlásra az asszisztensnek; ha mégis kér egyet, a DetailCraft elutasítja, és bejegyzi a tevékenységnaplóba. A kapcsoló kikapcsolása azonnal megszakít minden kapcsolatot.

## Asszisztens csatlakoztatása

Az asszisztensek a számítógépén futó **CadCraft Studio**-n keresztül kapcsolódnak: a Studio egy kis szervert futtat, amelyet csak ez a számítógép ér el, és amelyet minden indításkor új token véd. A Studio-ban válassza az {{ui:Connect an assistant}} lehetőséget, és másolja a címet és a tokent az asszisztensbe (a Studio megmutatja a beillesztendő pontos beállításokat). Soha ne ossza meg a tokent.

:::note
Böngészőlap nem tud kapcsolatot nyitni asszisztensnek: a böngészős alkalmazásokban a kapcsoló nincs hatással, amíg nem használja a számítógépén futó CadCraft Studio-t.
:::

## Ön irányít

- **Minden módosítás egy visszavonási lépés**, és az asszisztensé jelzi (például „Asszisztens: gerenda hozzáadása”, „Asszisztens: merevítőlemezek hozzáadása”). A {{key:Mod+Z}} az asszisztens utolsó módosítását egészében visszavonja. Az asszisztens saját `undo` lépése csak a saját lépéseit vonja vissza, a más lépéseit soha, hacsak kifejezetten nem kéri ezt.
- **Megvárja Önt.** Amíg elem elhelyezése, alkatrészek mozgatása vagy beillesztés van folyamatban, a DetailCraft elutasítja az asszisztens módosításait, és újrapróbálkozásra szólítja fel.
- **Tudja, ha van csatlakozott asszisztens.** Az alkalmazássávban lévő gomb megnevezi az asszisztenst, amíg csatlakozik; kattintson rá, hogy lássa, mit tehet, vagy hogy **Leválasztás** műveletet végezzen.
- **Tevékenység.** A {{ui:Settings}} › {{ui:DetailCraft}} › {{ui:Assistants}} › {{ui:Activity}} listázza az összes hívást: mikor, melyik eszköz, kész vagy elutasított. A {{ui:Save the log}} gombbal másolatot menthet.

## Milyen kéréseket tehet egy asszisztens

Minden hossz milliméterben van, a pontok `[x, y, z]` alakban (z felfelé), ahogy a modellben is.

| Eszköz | Jogosultság | Mit csinál |
|---|---|---|
| `app_info`, `model_describe` | Olvasás | A megnyitott modell: rácsok, szintek, fázisok, elemek típus és profil szerint, kapcsolatok, alapok, lépcsők, alkatrészek, acéltömeg, problémák |
| `parts_list` | Olvasás | Alkatrészjelek profillal, anyaggal, vágási hosszal, darabszámmal, tömeggel, fázissal és összeállítási jelekkel; típus, profil, jel vagy fázis szerint |
| `problems_list` | Olvasás | Amit a {{ui:Problems}} lap felsorol, mindegyik a témájával együtt |
| `clash_check` | Olvasás | Az [ütközésellenőrzés](topic:clash-check), a tűrésével és fázisaival |
| `selection_get` | Olvasás | A kijelölés tartalma |
| `selection_set` | Szerkesztés | Elemeket, kapcsolatokat, alapokat vagy lépcsőket jelöl ki (azonosító vagy alkatrészjel alapján), hogy megjelenítse őket; nem változtat semmit |
| `member_add` | Szerkesztés | Gerenda, oszlop, merevítő vagy lemez két pont között |
| `connection_add` | Szerkesztés | Véglemezek, nyírólemezek, talplemezek, toldások vagy merevítőlemezek ott, ahol a megadott elemek találkoznak, ahogy a {{ui:Connect}} csoport gombjai teszik |
| `undo` | Szerkesztés | Visszavonja az asszisztens utolsó lépéseit |
| `model_save` | Mentés | A DetailCraft saját mentése |
| `model_export` | Exportálás | IFC, NC-fájlok, anyagjegyzék, hajlítási kimutatás, KISS-fájl vagy vágási lista, ahogy a {{ui:Output}} csoport gombjai készítik |
| `usd_export` | Exportálás | Az acélmodell USD-ként (.usda, .usdc vagy .usdz), ahogy a {{ui:Output}} › {{ui:USD}} írja (lásd [Az acélmodell exportálása USD formátumban](topic:usd)); a Studio-ban a fájlt egy engedélyezett mappába írhatja |

## Ha valami nem működik

- **Az asszisztens nem lát DetailCraft-eszközöket:** ellenőrizze, hogy a kapcsoló be van-e kapcsolva ebben az ablakban, és hogy az ablak nyitva van-e a Studio-ban.
- **„A szerkesztési jogosultság szükséges”** (vagy mentési, exportálási): jelölje be az {{ui:Assistants}} alatt, majd kérje újra.
- **„Elem elhelyezése folyamatban”:** fejezze be a folyamatban lévő műveletet (vagy nyomja meg az {{key:Esc}} billentyűt), majd engedje újra próbálkozni az asszisztenst.
- **„401” vagy „token” hibák:** a token megváltozott (a Studio újraindult, vagy létrejött egy {{ui:New token}}). Másolja az új tokent az asszisztens beállításaiba.

## Lásd még

- [Receptek AI-asszisztenseknek](common:assistants-recipes): kidolgozott példák, mindegyik a hívott eszközökkel.
