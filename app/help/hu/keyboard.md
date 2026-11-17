---
title: Billentyűk és egér műveletei
summary: Minden billentyűparancs, egér-, érintőpad- és érintőképernyős művelet a DetailCraftban, a kódból.
keywords: billentyűzet, billentyűparancsok, gyorsbillentyűk, billentyűk, egér, érintőpad, érintés, ctrl, parancs, puskalap
from: 05a2dea0
---

A billentyűk írásmódja ebben a súgóban: [Billentyűk, egerek és érintőpadok](common:keys). Macen a {{key:Mod}} a Command billentyű; máshol a Ctrl.

## Eszközök

Ezek akkor működnek, ha a kurzor nincs szöveg- vagy számmezőben.

| Billentyű | Művelet |
|---|---|
| {{key:V}} | {{ui:Kijelölés}} |
| {{key:B}} | {{ui:Gerenda}} |
| {{key:C}} | {{ui:Oszlop}} |
| {{key:R}} | {{ui:Merevítő}} |
| {{key:P}} | {{ui:Lemez}} |
| {{key:F}} | {{ui:Alap}} |
| {{key:S}} | {{ui:Lépcső}} |
| {{key:M}} | A kijelölés mozgatása két rácsmetszéspont kiválasztásával ([Kijelölés ablakkal, mozgatás, forgatás, tükrözés, sok elem módosítása](topic:select-and-change)) |
| {{key:Esc}} | Húzás alatt lévő kijelölőablak megszakítása, vagy a húzott alkatrészek visszahelyezése; mozgatás, a gerenda, merevítő vagy lemez első pontjának, vagy beillesztés megszakítása; újbóli megnyomásra visszatér a {{ui:Kijelölés}} eszközre; a {{ui:Kijelölés}} eszközben törli a kijelölést. Ha a {{ui:Továbbiak}} menü nyitva van, bezárja |
| {{key:Delete}} vagy {{key:Backspace}} | A kijelölés törlése (a kijelöltek egy visszavonási lépésben) |

## Fájl és szerkesztés

| Billentyű | Művelet |
|---|---|
| {{key:Mod+S}} | A modell mentése (letöltés). Mezőben gépelés közben is működik |
| {{key:Mod+O}} | Modell megnyitása. Mezőben gépelés közben is működik |
| {{key:Mod+Z}} | Visszavonás (szöveges mezőn kívül; szöveges mezőben a begépelést vonja vissza) |
| {{key:Mod+Y}} vagy {{key:Mod+Shift+Z}} | Ismétlés |

## Másolás és beillesztés

Ezek akkor működnek, ha a kurzor nincs szöveg- vagy számmezőben (ott a szöveg másolása, beillesztése és kijelölése a szokásos módon történik). Minden beillesztés, kivágás, kettőzés vagy törlés egy visszavonási lépés. Részletek: [Másolás, beillesztés és kettőzés](topic:copy-paste).

| Billentyű | Művelet |
|---|---|
| {{key:Mod+C}} | {{ui:Másolás}}: a kijelölt elemek és alapok másolása (a furataikkal, kivágásaikkal és kapcsolataikkal együtt) |
| {{key:Mod+X}} | {{ui:Kivágás}}: a kijelölés másolása, majd törlése |
| {{key:Mod+V}} | {{ui:Beillesztés}}: a másolat a mutatót követi; az elhelyezéshez kattintson egy rácsmetszéspontra |
| {{key:Mod+Shift+V}} | {{ui:Beillesztés helyben}}: a másolás helyének koordinátáira |
| {{key:Mod+D}} | {{ui:Kettőzés}}: azonnali másolat, a [DetailCraft beállításaiban](topic:settings) megadott eltolással |
| {{key:Mod+A}} | {{ui:Összes kijelölése}}: minden elem, kapcsolat és alap |
| {{key:Esc}} | {{ui:Kijelölés megszüntetése}} |

Ha a lapon szöveget jelölt ki (például egy jelentéstáblában), a modellben pedig semmit, a {{key:Mod+C}} a szokásos módon a szöveget másolja.

Az {{ui:Új}}, a {{ui:Minta}} és az exportok nem rendelkeznek billentyűparancsokkal; használja az eszköztárat.

Amíg párbeszédpanel (a gyártmányterv-előnézet vagy egy kérdés) van nyitva, ezek a billentyűk nem működnek.

## Mezők és panelek

| Billentyű | Művelet |
|---|---|
| {{key:Enter}} vagy {{key:Tab}} | Begépelt érték alkalmazása (minden változtatás egy visszavonási lépés) |
| {{key:Enter}} a {{ui:Rácsok}}, {{ui:Szintek}}, {{ui:Egyéni szelvény}}, furat- vagy kivágásmezőben | Ugyanaz, mint az adott űrlap gombjának kiválasztása |
| {{key:Left}} {{key:Right}} | Váltás a {{ui:Problémák}}, {{ui:Anyagjegyzék}} és {{ui:Hajlítási kimutatás}} lapok között, ha egy lap fókuszban van |
| {{key:Esc}} | A gyártmányterv-előnézet vagy egy kérdést tartalmazó párbeszédpanel bezárása (ugyanaz, mint a {{ui:Mégse}}) |

## Képernyő és súgó

| Billentyű | Művelet |
|---|---|
| {{key:Ctrl+Shift+F}} | Váltás normál, teljes képernyő és sávok nélküli teljes képernyő között. Minden számítógépen Ctrl, a Mac-et is beleértve |
| {{key:Mod+,}} | A {{ui:Beállítások}} megnyitása ([DetailCraft beállításai](topic:settings)) |
| {{key:Esc}} | Kilépés a teljes képernyőből |
| {{key:F1}} | Ez a súgó megnyitása |

## Egér

| Művelet | 3D-ben | Alaprajzban és homlokzatban |
|---|---|---|
| Kattintás | Alkatrész kijelölése, vagy elhelyezés a legközelebbi metszéspontban, ha elhelyező eszköz van bekapcsolva (vagy beillesztés ugyanitt beillesztés közben) | Ugyanaz |
| {{key:Shift}}, {{key:Ctrl}} vagy {{key:Mod}} és kattintás | Alkatrész hozzáadása a kijelöléshez, vagy eltávolítása belőle | Ugyanaz |
| Lenyomás egy kijelölt alkatrészen, majd húzás | A kijelölés mozgatása a szint mentén; a {{key:Mod}} lenyomva tartásával fel és le | A kijelölés mozgatása (homlokzatban: a homlokzat mentén, illetve fel és le) |
| Húzás a bal gombbal | A modell forgatása | {{ui:Kijelölés}} eszközzel: kijelölőablak (jobbra: teljesen belül; balra: érintve). Elhelyezés közben: eltolás |
| {{key:Shift}} és húzás a bal gombbal | {{ui:Kijelölés}} eszközzel: kijelölőablak, a kijelöléshez adva. Elhelyezés közben: eltolás | {{ui:Kijelölés}} eszközzel: kijelölőablak, a kijelöléshez adva |
| {{key:Ctrl}} vagy {{key:Mod}} és húzás a bal gombbal | Eltolás | Nincs |
| Húzás a jobb gombbal | Eltolás | Eltolás |
| Görgő | Nagyítás a nézet közepe felé | Nagyítás |
| Húzás a középső gombbal | Nagyítás | {{ui:Kijelölés}} eszközzel: eltolás. Egyébként nagyítás |
| Egy `.detailcraft.json` fájl húzása az alkalmazásra | Megnyitás | Megnyitás |

Kattintásnak csak akkor számít, ha a mutató a lenyomás és a felengedés között nagyjából 5 pixelnél kevesebbet mozdul; ennél hosszabb elmozdulás húzásnak számít.

## Érintőpad

| Művelet | Funkció |
|---|---|
| Két ujjal felfelé vagy lefelé húzás, illetve csippentés | Nagyítás |
| Lenyomás és húzás | Forgatás (3D) vagy eltolás (alaprajz és homlokzat) |
| {{key:Shift}} és lenyomás és húzás | Eltolás 3D-ben |
| Két ujjas kattintás | Jobb gombos kattintás (a nézetben nincs menü) |

## Érintés

Táblagépen vagy érintőképernyőn:

| Művelet | Funkció |
|---|---|
| Koppintás | Alkatrész kijelölése, vagy elhelyezés a legközelebbi rácsmetszéspontban, ha elhelyező eszköz van bekapcsolva (a rácsmetszésponttól kb. egy ujjnyi távolságon belüli koppintás is számít) |
| Hosszú nyomás egy alkatrészen | Alkatrész hozzáadása a kijelöléshez, vagy eltávolítása belőle (az egérrel a {{key:Shift}}+kattintás) |
| Egy ujj egy kijelölt alkatrészen, majd húzás | A kijelölés mozgatása, rácsmetszéspontokra illesztve |
| Egy ujj máshol | A modell forgatása (3D) vagy eltolás (alaprajz és homlokzat) |
| Két ujj | Csippentés nagyításhoz, együttes mozgatás eltoláshoz |

Ha a képernyő csak érintésre működik, a gombok, listák és mezők nagyobbak. A kijelölőablakokhoz egér kell; ujjal koppintson és hosszan nyomjon.

## Billentyűk, amelyeket a böngésző megtart

Egyes gyorsbillentyűk a böngészőé, és egyetlen oldal sem használhatja őket, például a {{key:Mod+W}} (lap bezárása), a {{key:Mod+T}} (új lap) és a {{key:Mod+N}} (új ablak). Ha a {{key:Mod+Y}} az ismétlés helyett a böngésző előzményeit nyitja meg, használja a {{key:Mod+Shift+Z}} billentyűt.

A gyorsbillentyűket a DetailCraft csak akkor kapja meg, ha az oldal fókuszban van. Ha egy billentyű nem tesz semmit, vagy a böngésző hajt végre rajta valamit, először kattintson a DetailCraft ablakának egy üres részére (például miután a címsorba gépelt).

## Hol található a mozgatás

Nincs külön mozgatás parancs: jelöljön ki egy alkatrészt, és húzza a szint mentén (a {{key:Mod}} lenyomva tartásával fel és le húzhat), vagy szerkessze a {{ui:Kezdet}} és a {{ui:Vég}} mezőt a {{ui:Tulajdonságok}} panelen.
