---
title: Athuga stálstangir eftir hönnunarstaðli
summary: Búa til álagssamsetningar úr ASCE 7 eða EN 1990, athuga hvert stál-I-snið gegn AISC 360 eða EN 1993-1-1 og sjá hversu stóran hluta burðargetu hverrar stangar hún nýtir. Hjálpartæki þar til verkfræðingur hefur yfirfarið það.
keywords: hönnun, hönnunarathugun, stálhönnun, nýting, nýtingarhlutfall, burðargeta, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, álagssamsetningar, LRFD, landsviðauki, knésbeyging, hliðar-snúningsbeyging, skurður, beyging, samspil, burðarvirki, nemendur, verkfræðingur
from: 15685c4e
---

Eftir að þú keyrir greininguna breytir reiturinn {{ui:Design checks}} í flipanum {{ui:Analysis}} kröftunum í niðurstöðu fyrir hverja stálstöng: hversu stóran hluta burðargetu hennar versta samsetningin nýtir.

:::warning
Þetta er **hjálpartæki þar til verkfræðingur hefur yfirfarið það**. Það notar eingöngu krafta fyrstu gráðu (engin áhrif annarrar gráðu), athugar ekki snúning, grannir hlutar (flokkur 4) eru ekki athugaðir, engin soðin snið og engar tengingar, og sleppir því sem það getur ekki athugað og segir frá því. Það kemur ekki í staðinn fyrir athugun verkfræðings og niðurstöður þess eru ekki stimpill.
:::

## Veldu staðal

{{ui:Design code}} er vistaður með líkaninu; veldu aðra af tveimur fjölskyldum:

- **ASCE 7 + AISC 360** (US, LRFD): álagssamsetningar ASCE 7-16 §2.3.1 og stangaathuganir ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): samsetningarnar í EN 1990 (jafna 6.10, eða 6.10a og 6.10b) og stangaathuganir EN 1993-1-1.

Veldu síðan {{ui:Steel grade}} (A992, A36 og aðra; eða S235 til S450, með lægri flotmörk yfir 40 mm).

## Búðu til samsetningarnar

Gefðu hverju álagstilviki sína **gerð** (eiginþungi, breytilegt álag, breytilegt þakálag, snjóálag, vindálag, jarðskjálftaálag) í listanum yfir tilvik og ýttu síðan á {{ui:Make combinations}}. DetailCraft skrifar staðalsamsetningar sem samsetningar af tilvikum þínum: allar burðarsamsetningar sem staðallinn telur upp fyrir þær gerðir sem þú hefur, og nothæfissamsetningar fyrir durgun. Þær sem þú slóst inn sjálfur haldast; þær eru ekki athugaðar gegn staðlinum. Tilvik af gerðinni {{ui:Other}} er ekki sett saman.

Fyrir Eurocode eru stuðlarnir **ráðlögð gildi** úr viðauka A1 í EN 1990 (γG 1,35, γQ 1,5, ψ-gildi fyrir hagnýtt álag, snjó- og vindálag) og EN 1993-1-1 (γM0 = γM1 = 1,0). Landsviðauki landsins þíns breytir sumum þeirra: opnaðu {{ui:National Annex values}}, sláðu inn þín gildi og búðu til samsetningarnar aftur. Þau eru vistuð í líkaninu.

## Athugaðu stangirnar

Ýttu á {{ui:Check members}}. Fyrir hvert stál-I-snið sýnir taflan **nýtingu** þess (álag yfir burðargetu: 100 % eru mörkin), hvort það stenst, hvaða athugun ræður og hvaða samsetning. Stangirnar eru litaðar í líkaninu: blátt lítið nýttar, grænt um helmingur, okurgult nálægt mörkum, rautt yfir þeim, grátt ekki athugað. Smelltu á heiti stangar til að velja hana.

Athuganirnar, ásamt grein sem hver þeirra fylgir (þær eru taldar upp í skýrslunni):

- tog, þrýstingur með beygju- og snúningsknésbeygju, beyging um báða ása með hliðar-snúningsbeygju, skurður og beyging með ásálagi;
- durgun nothæfissamsetninga miðað við {{ui:Deflection limit}} sem þú stillir (L/360 sem upphafsgildi; verkefnisgildi, ekki staðalgildi).

**Lengdir.** Stoðaða lengdin er hlutfall af hverjum greindum hluta (1 = óstoðað); stoðir eru taldar jafnt dreifðar frá upphafi. K-stuðlar margfalda lengdina fyrir knésbeygingu. Tengipunktur þar sem önnur stöng endar skiptir stönginni, og hver hluti er athugaður út frá eigin lengd, eins og hann sé stoðaður þar.

## Hvað er ekki athugað

Stöng sýnir **ekki athugað**, ásamt ástæðu, í stað tölu þegar snið hennar er ekki lögun sem athuganirnar þekkja (hornjárn, rásjárn; rétthyrnd og kringlótt rör eru athuguð þegar veggir þeirra eru þéttir), þegar það er sérsmíðað (soðið) form, eða þegar hluti er grannur (AISC) eða flokkur 4 (Eurocode) í beygju. Grannur hluti í þrýstingi tekur þrýstiathuganirnar út og stöngin birtist sem *stenst, að hluta athugað*. Suðurnar í tengipunktunum hafa [sína eigin athugun](topic:weld-checks). Einnig er ekki smíðað: áhrif annarrar gráðu, snúningur, skurðknésbeyging ásamt beygju, boltaðar tengingar, þreyta, eldur og jarðskjálftaútfærsla. Steypustangir og jarðskjálftaálag hafa [sínar eigin athuganir](topic:concrete-and-seismic). Sjá [Ekki smíðað enn](topic:not-built-yet).

## Skýrslan

{{ui:Report (PDF)}} og {{ui:Report (CSV)}} fá hönnunartöflurnar þegar þú hefur athugað: útgáfur staðlanna, stillingarnar og gildi landsviðauka, nýtingu eftir stöngum, allar greinar sem notaðar eru, og fyrir hverja stöng álag, burðargetu og nýtingu hverrar athugunar í ráðandi samsetningu hennar.
