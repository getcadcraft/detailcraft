---
title: Athuga stálbita samkvæmt hönnunarstaðli
summary: Búðu til álagssamsetningar samkvæmt ASCE 7 eða EN 1990, athugaðu hvern stálbita í I-lögun samkvæmt AISC 360 eða EN 1993-1-1, og sjáðu hversu stóran hluta burðargetu hans hver bita notar. Hjálpartæki þar til verkfræðingur hefur yfirfarið það.
keywords: hönnun, hönnunarathugun, stálhönnun, nýting, burðargeta, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, álagssamsetningar, LRFD, landsviðauki, hnjask, hliðarhnjask, skúrkraftur, beygja, víxlverkun, burðarvirki, nemendur, verkfræðingur
from: 66b6d545
---

Eftir að þú keyrir greininguna breytir reiturinn {{ui:Hönnunarathuganir}} í flipanum {{ui:Greining}} kröftunum í niðurstöðu fyrir hvern stálbita: hversu stóran hluta burðargetu hans versta samsetningin notar.

:::warning
Það er **hjálpartæki þar til verkfræðingur hefur yfirfarið það**. Það notar aðeins fyrsta stigs krafta (engin annars stigs áhrif), athugar ekkert snúningsálag, engar grannar (flokkur 4) einingar, engar soðnar lögun og engar tengingar, og sleppir því sem það getur ekki athugað og segir frá því. Það kemur ekki í stað athugunar verkfræðings og niðurstöður þess eru ekki staðfesting.
:::

## Veldu staðal

{{ui:Hönnunarstaðall}} er vistaður með líkaninu; veldu eina af tveimur fjölskyldum:

- **ASCE 7 + AISC 360** (Bandaríkin, LRFD): álagssamsetningar ASCE 7-16 §2.3.1 og bitaathuganir ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): samsetningar EN 1990 (jafna 6.10, eða 6.10a og 6.10b) og bitaathuganir EN 1993-1-1.

Veldu síðan {{ui:Stálgæði}} (A992, A36 og fleiri; eða S235 til S450, með lægri flæðimörk fyrir ofan 40 mm).

## Búa til samsetningarnar

Gefðu hverju álagstilviki **tegund** (fast, lifandi, þakálag lifandi, snjór, vindur, jarðskjálfti) í listanum yfir tilvik, og ýttu síðan á {{ui:Búa til samsetningar}}. DetailCraft skrifar samsetningar staðalsins sem samsetningar af tilvikum þínum: allar burðarþolssamsetningar sem staðallinn gefur fyrir þær tegundir sem þú hefur, og notkunarsamsetningar fyrir durð. Þær sem þú slóst inn sjálfur haldast; þær eru ekki athugaðar gegn staðlinum. Tilvik af tegundinni {{ui:Annað}} er ekki sett saman.

Fyrir Eurocode eru stuðlarnir **ráðlögð gildi** úr EN 1990 viðauka A1 (γG 1.35, γQ 1.5, ψ-gildin fyrir notaálag, snjóálag og vindálag) og EN 1993-1-1 (γM0 = γM1 = 1.0). Landsviðauki lands þíns breytir sumum þeirra: opnaðu {{ui:Gildi úr landsviðauka}}, sláðu inn þín og búðu til samsetningarnar aftur. Þau eru vistuð í líkaninu.

## Athuga bitana

Ýttu á {{ui:Athuga bita}}. Fyrir hvern stálbita í I-lögun sýnir taflan **nýtingu** hans (álag á móti burðargetu: 100 % eru mörkin), hvort hann stenst, hvaða athugun ræður, og hvaða samsetning. Bitar eru litaðir á líkaninu: blár lítið notaður, grænn um það bil hálfur, gulbrúnn nálægt mörkum, rauður yfir þeim, grár ekki athugaður. Smelltu á heiti bita til að velja hann.

Athuganirnar, með þeirri grein sem hver fylgir (þær eru taldar upp í skýrslunni):

- tog, þrýstingur með beygju- og snúningshnjaski, beygja um báða ása með hliðarhnjaski og snúningshnjaski, skúrkraftur, og beygja með ásþrýstingi;
- durð notkunarsamsetninga miðað við {{ui:Durðarmörk}} sem þú stillir (L/360 til að byrja með; verkefnisgildi, ekki staðalsgildi).

**Lengdir.** Hliðarstuddu lengdin er hlutdeild af hverjum greindum hluta (1 = óstudd); stuðningar eru teknir jafnt dreifðir frá upphafi. K-stuðlar margfalda lengdina fyrir hnjask. Samskeyti þar sem annar bita lendir skiptir bita, og hver hluti er athugaður á eigin lengd, eins og hann sé studdur þar.

## Það sem er ekki athugað

Bita sýnir **ekki athugaður**, með ástæðunni, í stað tölu þegar hluti hans er ekki I-lögun sem athuganirnar þekkja (rör, hornjárn, rásir), þegar hann er sérsniðin (soðin) lögun, eða þegar hluti er grannur (AISC) eða flokkur 4 (Eurocode) í beygju. Grannur hluti í þrýstingi tekur þrýstiathuganirnar út og bitinn sýnir *stenst, að hluta athugaður*. Einnig er ekki smíðað: annars stigs áhrif, snúningur, skúrhnjask samhliða beygju, tengingar, þreyta, eldur og jarðskjálftafrágangur. Steypubitar og jarðskjálftaálag hafa [sínar eigin athuganir](topic:concrete-and-seismic). Sjá [Ekki smíðað enn](topic:not-built-yet).

## Skýrslan

{{ui:Skýrsla (PDF)}} og {{ui:Skýrsla (CSV)}} fá hönnunartöflurnar þegar þú hefur athugað: útgáfur staðlanna, stillingarnar og gildi landsviðauka, nýtingu eftir bita, allar greinar sem notaðar eru, og fyrir hvern bita eftirspurn, burðargetu og nýtingu hverrar athugunar í ráðandi samsetningu hans.
