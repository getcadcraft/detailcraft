---
title: Anyag- és tömegjelentés fázisonként
summary: Vágási hosszak, darabszámok, tömegek és festési felületek fázisonként, a csavarokkal és a betonacéllal együtt, táblázatként, CSV-ben vagy PDF-ben.
keywords: jelentés, tömeg, tonna, kg, festés, festési felület, felület, bevonat, vágási hossz, anyaglista, fázis, anyagjegyzék, csv, pdf
from: 337d6d92
---

A {{ui:Output}} csoportban nyissa meg a {{ui:More}} menüt, és válassza a {{ui:Weight report by phase}} lehetőséget, vagy nyissa meg a nézet alatti {{ui:By phase}} lapot. Ez mutatja:

- **Összesítés fázisonként**: minden fázisra a darabok száma, az acéltömeg, a festési felület, a csavarok és a horgonyrudak, valamint a betonacél; utána az összegek.
- **Egy táblázat fázisonként**: minden alkatrészjel a típusával, profiljával, anyagával, vágási hosszával, darabszámával, darabonkénti tömegével, tömegével és festési felületével; utána a csavarai és horgonyrudai.

A {{ui:Download CSV}} ugyanezeket a táblázatokat egyetlen CSV-fájlba menti (`<name> weight report.csv`). A {{ui:Download PDF}} jelentést készít a [DetailCraft beállításaiban](topic:settings#drawings) megadott lapmérettel: elöl az összesítés, utána minden fázis, a hosszú táblázatok a következő oldalra folytatódnak, és minden oldal számozott.

## Hogyan számolódnak a számok

- **Tömegek** bruttó értékek, ahogy az anyagjegyzékben: a szelvény tömege méterenként, szorozva a vágási hosszal. A furatokat és a kivágásokat nem vonják le.
- **Festési felület** a szelvény külső felülete a vágási hossz mentén: I-szelvénynél az övek és a gerinc minden felülete, lemeznél mindkét oldal és az élek, csőnél csak a külső oldal. A végeket és a furatokat nem számolják.
- **Betonacél** a fázis alapjaiban lévő rudak tömege, a [hajlítási kimutatásból](topic:footings-and-rebar).
- Egy kapcsolat lemezei és csavarai a fő tartójának fázisában számítanak. Lásd: [Fázisok](topic:phases).

Ha a [fázisonkénti jelek](topic:phases#marks-per-phase) be vannak kapcsolva, minden fázisnak saját jelei vannak (1-b1, 2-b1). Ha ki vannak kapcsolva, egy jel több fázisban is megjelenhet: minden fázis felsorolja a nála lévő darabokat.
