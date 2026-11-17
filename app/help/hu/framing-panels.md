---
title: Fa és könnyű acél vázpanelek
summary: Fa vagy könnyű hidegen hajlított acél fal-, padló- és tetőpanelek vázolása minden elemmel, vágólistával, gyártmányrajzzal és a megvásárolandó anyaggal.
keywords: szerkezet, váz, fa, fűrészáru, könnyű acél, hidegen hajlított, borda, gerenda, szarufa, áthidaló, főborda, segédborda, rövid borda, vágólista, gyártmányrajz, panel
from: 3e38ffb9
---

A {{ui:Szerkezet}} lap a megadott paneleket vázolja, és megadja mindazt, amit egy szerelőcsapat és egy fűrészárukereskedés kér. A panelek a modellfájlban mentődnek.

:::warning
A méreteket, az osztásközöket és az áthidalókat a tervező határozza meg. A DetailCraft nem ellenőrzi, hogy az adott osztásközű bordaelem elbírja-e az adott falat, vagy hogy az áthidaló áthidalja-e az adott nyílást: ez a szabvány táblázataira és a mérnökre tartozik.
:::

## Panel hozzáadása

Válassza a {{ui:Fal hozzáadása}}, a {{ui:Födém hozzáadása}} vagy a {{ui:Tető hozzáadása}} lehetőséget, majd töltse ki a méreteket milliméterben, az anyagot (fa vagy könnyű acél) és a rúdméretet. A faanyag méretei a névleges nevek a megmunkált méretükkel (2×4 = 38 × 89 mm). Az acélbordákat mélységük és vastagságuk szerint nevezzük el, például `C92-1.2`.

## Falak

A falnak van alsó koszorúja, egy vagy több felső koszorúja (acélnál egy sín), végbordái, borda a megadott osztásközzel, és minden nyílásnál: két főborda, két segédborda, a megadott méretű és rétegszámú áthidaló, valamint rövid bordák az áthidaló fölött (és egy ablak könyöklője alatt). Minden nyílásnak adja meg a bal végétől mért távolságát, szélességét, valamint a padlótól mért nyers felső és alsó magasságát; ajtónál az alsó érték 0.

## Födémek és tetők

A födémnek a szélessége mentén futó gerendái vannak a fesztávja mentén, mindkét végén záró gerendák, és ha bejelöli, középen áthidalások. A tetőpanel oromfal: egy szarufapár a megadott osztásközzel (hosszuk tartalmazza a lejtőn lévő ereszt), és egy gerincfa.

## Az eredmény

Minden panel léptékhelyes rajzon mutatja darabjait, mindegyik jelöléssel, jelölés szerinti vágólistával és végösszeggel. A {{ui:Megvásárolandó anyag}} táblázat az összes panel vágásait szabvány hosszúságú anyagokba rendezi: a legrövidebb hosszúságba, amely befogadja az egyes rudak vágásait. A {{ui:A gyártmányrajz mentése (SVG)}} a rajzot írja ki; a {{ui:CSV}} gomb minden vágólistát és az anyaglistát kiírja.

## Panel elhelyezése a modellben

Minden panel alatt adja meg a helyét (x, y, z milliméterben és a szöget), majd nyomja meg az {{ui:Elhelyezés rúdelemekként}} gombot: minden darab a modell eleme lesz, a megmunkált méretű szelvénnyel és az anyag súlyával (fánál körülbelül 500 kg/m³, az acélbordáknál az acél). A fal a szögnek megfelelően fut a bal alsó végétől, alja a z magasságban; a födém gerendái alsó oldalukkal a z szinten fekszenek; a tető oromfala a szög mentén fut, z a falkoszorú felső síkján. Minden áthidaló-réteg egymás melletti rúdként jelenik meg. Újabb megnyomásakor a korábban elhelyezett rudakat cseréli, az {{ui:Az elhelyezett elemek eltávolítása}} gomb pedig eltávolítja azokat; mindegyik egy visszavonási lépés. Az {{ui:Analízis}} kihagyja ezeket a rudakat: nem acél vázrudak.

## PDF rajzlapok

A {{ui:PDF rajzlapok}} minden panelhez egy A3-as oldalt ment: a panelt léptékhelyesen, minden darab jelölésével, a teljes méretekkel, a vágólistával és egy címsávval.

A {{ui:Problémák}} panelen megjelenő hibák: túl közel lévő nyílás a fal végéhez vagy egy másikhoz, áthidaló, amely nem fér el a felső koszorúk alatt, vagy darab, amely a leghosszabb anyagnál hosszabb.

A {{ui:Problémák}} panel emellett felsorolja a **Illesztések (LOD 350)** tételeket a falpanelekhez és betonfalakhoz: olyan nyílás, amely a fal végén vagy tetején túlnyúlik, két egymást átfedő nyílás, és betonfal nyílása, amely 1000 mm-nél szélesebb, és nincs mellette nyílásszegélyvas. Ezek tanácsok, ugyanazok a szabályok, amelyeket a BimCraft ellenőrzése futtat; a szélesség a CadCraft kezdőértéke, nem szabvány.
