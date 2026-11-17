---
title: Stillið netlínur og kóta
summary: Sláðu inn netlínurnar, bil þeirra og kótana sem hvert stykki er sett á.
keywords: netlína, netlínur, ásar, línur, kótar, kóti, hæðarkótar, hæðir, gólf, bil, uppsetning
from: 9cad233c
---

Sérhver stöng í DetailCraft er sett á skurðpunkt netlína í kóta. Stillið netlínurnar og kótana fyrst; þú getur breytt þeim síðar.

## Hvernig netlínur virka hér

- **Tölusettar línur** liggja í aðra átt, **línur með bókstöfum** í hina. Heitin eru aðeins venja: merki getur verið hvaða texti sem er að 8 stöfum (1, 2, 3 eða A1, A2, eða 10, 20).
- Þú slærð inn merkin og bilin á milli þeirra, ekki hnit. Fyrsta lína hvers flokks er í 0.
- Tölusettar línur eru línur með fasta x; línur með bókstöfum eru línur með fasta y. Bitinn frá netlínu 1 að netlínu 2 liggur því eftir x, og bitinn frá A að B liggur eftir y.
- Öll gildi eru í millimetrum.

Nýtt líkan byrjar með tölusettu línunum 1 2 3 með bilunum 6000 6000, línunum A B með bilinu 6000, og tveimur kótum.

## Stillið netlínurnar

1. Í glugganum {{ui:Líkan}} vinstra megin, opnaðu {{ui:Netlínur}} ef hann er felldur saman.
2. Sláðu inn í {{ui:Tölusettar línur}} merkin aðskilin með bilum, til dæmis `1 2 3 4 5`.
3. Sláðu inn í reitinn {{ui:Bil}} fyrir neðan það eitt bil fyrir hvert bil á milli lína, til dæmis `6000 6000 7500 6000`. Fjögur bil fyrir fimm línur.
4. Gerðu það sama í {{ui:Línur með bókstöfum}} og {{ui:Bil}} þeirra, til dæmis `A B C` og `8000 8000`.
5. Veldu {{ui:Beita netlínum}}.

Stöðustikan segir "Netlínur uppfærðar." og sýnin aðdrættist að nýja netinu. Kommur virka líka sem skiljur.

Ef eitthvað gengur ekki upp breytist ekkert og stöðustikan segir hvers vegna, til dæmis "Tölusettar netlínur: gefðu upp eitt bil á milli hvers pars af línum (4)." Aðrar athuganir: bilin verða að vera jákvæðir millimetrar, merkin verða að vera ólík, og mest 60 línur í hvora átt.

:::note
Stangir halda hnitunum sínum þegar netlínurnar færast. Ef þú breytir bili eftir að stál hefur verið sett, verður stálið kyrrt þar sem það var og er ekki lengur á netinu. Breyttu netinu fyrst, eða færðu stangir með því að breyta hnitum enda þeirra.
:::

## Stillið kótana

1. Opnaðu {{ui:Kótar}} í glugganum {{ui:Líkan}}.
2. Hver röð hefur heiti kóta og hæð hans í millimetrum. Breyttu þeim að vild.
3. Veldu {{ui:Bæta við kóta}} fyrir aðra röð. Hún fær heitið "Kóti 3" (og svo framvegis) og er sett 4000 mm fyrir ofan hæsta kótann; breyttu hvoru tveggja ef þörf er á.
4. Til að eyða kóta, veldu ×-hnappinn aftast í röðinni.
5. Veldu {{ui:Beita kótum}}.

Ekkert breytist fyrr en þú velur {{ui:Beita kótum}}. Kótar eru raðaðir eftir hæð þegar þeir eru settir í gildi. Sérhver kóti þarf heiti, tveir kótar geta ekki deilt heiti, og þú verður að halda að minnsta kosti einum kóta.

Kótar geta verið undir núlli (kjallari við `-3500`) og þurfa ekki að vera jafnt bil á milli.

## Hvernig kótar eru notaðir

- Súla sem er sett á kóta nær upp að næsta kóta, eða að þeim kóta sem þú velur í {{ui:Upp að}}.
- Bitar og plötur eru settar á milli tveggja skurðpunkta í kótanum sem þú smellir á.
- Undirstöður eru settar með efri brún sína í kótanum sem þú smellir á.
- {{ui:Grunnmynd}} horfir niður á einn kóta í einu.
- IFC-útflutningurinn býr til eina byggingarhæð fyrir hvern kóta.

## Afturköllun

Breytingar á netlínum og kótum eru breytingar eins og allar aðrar: {{key:Mod+Z}} setur fyrra netið aftur.

## Næst

[Setjið súlur, bita og spelkur](topic:place-members)
