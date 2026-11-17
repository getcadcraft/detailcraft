---
title: Másolt terület beillesztése referenciaképként
summary: Másoljon ki egy részt egy PDF-lapból a MarkupCraftban, és illessze be a DetailCraftba valós méretben, egy szinten, az acél alatt, hogy fölé modellezhessen.
keywords: kép, referenciakép, alátét, háttér, terület másolása, MarkupCraft, pdf, követés, valós méret, méretarány, átlátszatlanság, fedvény
from: 0c48445f
---

A MarkupCraft Terület másolása eszköze a lap egy részét olyan képként másolja ki, amely tudja, mekkora. Illessze be a DetailCraftba, és a kép a rács és az acél alatt, egy szinten, valós méretben fekszik, így a rajzok alaprajzára helyezheti a tartóelemeket.

## Beillesztés

1. A MarkupCraftban másolja ki a területet a {{ui:Továbbiak}} › {{ui:Oldalterület másolása…}} paranccsal, majd a {{ui:Másolás}} gombbal (vagy a {{ui:Másolás fedvényként}} gombbal, amely átlátszóvá teszi a papírt).
2. A DetailCraftban (ugyanabban a böngészőben) nyomja meg a {{key:Mod+V}} billentyűkombinációt, vagy válassza a {{ui:Beillesztés}} lehetőséget.

A kép a rács közepére kerül, a Alaprajz nézetben látható szinten (3D-ben vagy homlokzaton a legalsó szinten), és kijelölődik. Az állapotsor kiírja a méretét.

- **Valós méret:** ha a lapnak volt méretaránya, egy pixel a rajzon mutatott hosszúságként jelenik meg.
- **Papírméret:** ha a lapnak nem volt méretaránya, a kép akkora, mint a terület volt a papíron, és az állapotsor ezt jelzi. Írjon be új **mm pixelenként** értéket a {{ui:Tulajdonságok}} panelen a méretezéshez.

A fedvényként másolt terület a másoláskor beállított átlátszatlansággal indul.

A {{key:Mod+V}} azt illeszti be, amelyet utoljára másolt: a MarkupCraftból származó területet, vagy a DetailCraftban másolt tartóelemeket és alapokat. Ha a vágólapra a terület után egy másik kép került (másik programból), semmi sem kerül beillesztésre; másolja ki újra a területet.

## Áthelyezés, módosítás és törlés

- Kattintson a képre a kijelöléséhez (a előtte lévő elem van előbb kiválasztva). Kék körvonal jelzi, hogy ki van jelölve.
- Húzza az áthelyezéséhez a szinten. Középpontja és sarkai a rácsmetszéspontokra illeszkednek.
- A {{ui:Tulajdonságok}} panelen adja meg, hova kerüljön a középpontja (x, y), melyik szinten legyen (z), a **mm pixelenként** értékét és az **átlátszatlanságát**.
- A {{key:Delete}} billentyűvel vagy a {{ui:Törlés}} lehetőséggel eltávolíthatja.

Minden beillesztés, áthelyezés, módosítás és törlés egy lépés: a {{key:Mod+Z}} billentyűkombináció visszavonja.

A kép a modellfájlban mentődik, így a modellel együtt nyílik meg. Csak referencia: nem szerepel a rajzokban, az exportokban, az anyagjegyzékben vagy a másolatokban.
