---
title: Lemezek elhelyezése és egyéni szelvények hozzáadása
summary: Helyezzen el szabad lemezeket vastagság és szélesség szerint, és definiálja saját I-, U-, szögacél-, cső- vagy laposacél szelvényeit.
keywords: lemez, lapos, egyéni szelvény, felhasználói szelvény, paraméteres, szelvény, keresztmetszet, pl
from: c24c3b51
---

## Lemez elhelyezése

A lemez úgy kerül elhelyezésre, mint a gerenda: két metszéspont között fut, szélessége keresztben, vastagsága felfelé.

1. Válassza a {{ui:Lemez}} elemet az {{ui:Elhelyezés}} csoportban, vagy nyomja meg a {{key:P}} billentyűt.
2. A {{ui:Tulajdonságok}} panelban állítsa be a {{ui:Vastagság (mm)}} és a {{ui:Szélesség (mm)}} értéket. Az alapérték 20 x 200, A36 anyagban.
3. Szükség esetén állítsa be a {{ui:Anyag}} és az {{ui:Elforgatás (°)}} értéket. A 90-es elforgatás a lemezt élére állítja.
4. Kattintson két metszéspontra, vagy használja a {{ui:Hozzáadás rács szerint}} űrlapot.

A lemez szelvénynevét `PL<thickness>x<width>` alakban írjuk, például PL20x200. Hossza a két pont közötti távolság.

Elhelyezett lemez átméretezéséhez jelölje ki, és módosítsa a {{ui:Vastagság (mm)}} vagy a {{ui:Szélesség (mm)}} értéket.

Az Ön által elhelyezett lemezek önálló alkatrészek (jel: p, összeállítás: P). A csomópontok által készített véglemezek és talpalemezek szintén lemezek, de ezeket a csomópontjukon keresztül módosítja; lásd: [Véglemezek](topic:end-plates).

## Egyéni szelvény hozzáadása

Ha a szükséges szelvény nincs a katalógusban, készítse el a méretei alapján. Az egyéni szelvény a modellhez tartozik, és azzal együtt mentődik. Ha minden új modellben használni szeretné, tartsa meg a Saját profilok között, amelyet lentebb, a „Profil megtartása új modellekhez” részben ismertetünk.

1. A bal oldali {{ui:Modell}} panelben nyissa meg az {{ui:Egyéni szelvény}} részt.
2. Írja be a {{ui:Név}} mezőbe, például `W8x18-custom` vagy `RHS 120x80x5`. Nem lehet katalógusnév, és nem nézhet ki lemeznévnek.
3. Válassza az {{ui:Alak}} értéket: {{ui:I-szelvény}}, {{ui:U-szelvény}}, {{ui:Egyenlő szárú szögacél}}, {{ui:Négyszög keresztmetszetű cső}}, {{ui:Kör keresztmetszetű cső}} vagy {{ui:Laposacél}}.
4. Töltse ki a megjelenő méreteket, mind milliméterben:

| Alak | Méretek |
|---|---|
| I-szelvény | Mélység d, övszélesség bf, gerincvastagság tw, övvastagság tf, kerekítési sugár r (lehet 0) |
| U-szelvény | Mélység d, övszélesség bf, gerincvastagság tw, övvastagság tf (derékszögű sarkok) |
| Egyenlő szárú szögacél | Szárszélesség b (mindkét szár), vastagság t |
| Négyszög keresztmetszetű cső | Magasság h, szélesség b, vastagság t (külső sarokkerekítés sugara 2t) |
| Kör keresztmetszetű cső | Átmérő D, vastagság t |
| Laposacél | Szélesség b, vastagság t |

5. Hagyja bejelölve a {{ui:Megtartás a Saját profilokban}} jelölőnégyzetet, hogy minden új modellben elérhető legyen (lásd lentebb), vagy törölje a jelölést, ha csak ebben a modellben kell.
6. Válassza a {{ui:Szelvény hozzáadása}} gombot.

Az állapotsor ezt írja: „Szelvény „…” hozzáadva; minden szelvénylistában az Egyéni alatt található.” Megjelenik az űrlap alatti listában, és minden {{ui:Szelvény}} lista végén.

A DetailCraft ellenőrzi, hogy a szelvény létezhet-e. Olyan üzeneteket lát, mint „A gerinc és az övek nem férnek el a mélységen és szélességen belül.”, „A kerekítési sugár túl nagy az övhöz.” vagy „A fal túl vastag.” Javítsa a számokat, és válassza újra a {{ui:Szelvény hozzáadása}} gombot.

### Mit kapnak az egyéni szelvények

- Méterenkénti tömeg a terület × 7850 kg/m³ alapján (a katalógusméretek a közzétett tömeget használják).
- Az egyéni I-szelvények ugyanúgy kapnak lyukakat, kivágásokat, véglemezeket, NC-fájlokat és gyártmányrajzokat, mint a katalógus I-szelvények.
- Az egyéni laposacélok lemezként viselkednek.
- Az egyéni U-szelvények és csövek kapnak lyukakat; a szögacélok és kör keresztmetszetű csövek egyelőre nem.

Az egyéni szelvényt a modellből a hozzáadás után nem lehet szerkeszteni vagy eltávolítani (ha hibázott, azonnal használja a {{key:Mod+Z}} billentyűt). Javított változatnak adjon új nevet.

## Profil megtartása új modellekhez

A {{ui:Saját profilok}} az űrlap alatt az Ön egyéni szelvényeinek listája. Ez a böngészőben, ezen a számítógépen tárolódik, nem a modellfájlban és nem a fiókjában.

- Ha a {{ui:Megtartás a Saját profilokban}} jelölőnégyzet be van jelölve, a szelvény bekerül a listába. Minden új modell, beleértve azt is, amelyet a DetailCraft indításkor nyit meg, az összes listaelemmel kezdődik a szelvénylistákban.
- A modellben már használt, de a listán nem szereplő szelvény mellett van egy {{ui:Megtartás}} gomb.
- Olyan modellben, amelyben nincs meg az egyik szelvénye (például régebbi fájl), válassza a {{ui:Használat itt}} gombot a hozzáadáshoz.
- A {{ui:Eltávolítás}} kiveszi a szelvényt a listából. Az azt már használó modellek megtartják a saját példányukat.
- A megnyitott modell a fájljában mentett szelvényeket tartja meg. Fájl megnyitása sosem változtatja meg a listáját.
- Ha a listában már van egy név más méretekkel, az elutasításra kerül: adjon az újnak másik nevet.
- A böngésző webhelyadatainak törlése, vagy másik böngésző vagy számítógép használata üres listával indul. Privát ablakban nem tartható meg; az alkalmazás ezt jelzi.
