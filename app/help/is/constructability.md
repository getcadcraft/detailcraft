---
title: Smíðanleikaathuganir
summary: Vandamál fyrir það sem smiður sér með augunum: bolti sem skiptilykill nær ekki til, boltar of nærri hvor öðrum fyrir toppinn, hornsuður utan stærðarmarka þeirra, suður sem kyndill nær ekki til, og rör sem halda vatni.
keywords: smíðanleiki, skiptilykill, toppur, aðgengi að bolta, herðing, stærð suðu, hornsuða, lágmarkssuða, hámarkssuða, vatn, loftgat, frárennslisgat, heitgalvanhúðun, holprófíll, vandamál
from: 72315151
---

DetailCraft leitar að fjórum tegundum vandræða sem engin styrkuathugun finnur, og skráir þau í spjaldið {{ui:Vandamál}}. Þetta eru viðvaranir og athugasemdir til að líta á, ekki villur: líkanið er samt smíðað.

## Bolti sem skiptilykill nær ekki til

Fyrir sérhvern bolta setur DetailCraft topp yfir hausinn og yfir róna. Toppurinn er sylinder jafnbreiður og rónan er þvert yfir hornin að viðbættum 4 mm vegg, 60 mm langur. Ef vefur bita, flans, plata eða skástífa stendur inni í þeim sylinder, nefnir vandamálið tengingu, hversu marga bolta, hvaða hlutur er í veginum og hversu langt hann er frá boltanum.

Toppurinn er dæmigerður höggtoppur. Lykill þarf minna rými og stærra verkfæri meira. Biddu tengda aðstoðarmanninn þinn að keyra `constructability_check` með annarri `socketLength` til að sjá hvernig svarið breytist.

## Boltar of nærri fyrir toppinn

Toppur yfir einum bolta má ekki snerta haus þess næsta. Boltar í tengingu sem eru nær hvor öðrum en breidd toppsins plús haus nágrannans eru skráðir með fundnu bili og nauðsynlegu bili.

## Stærðir hornsuða

AISC 360-16 tafla J2.4 ákveður minnstu hornsuðu eftir þykkt þynnri hlutans (3 mm upp í 6,35 mm þykkt, 5 mm upp í 12,7, 6 mm upp í 19,05, 8 mm yfir því), og J2.2b þá stærstu eftir kanti efnisins: ekki stærri en efnið þegar það er þynnra en 6,35 mm, annars 1,6 mm minni. Tengingar með sömu stærð á sömu þykkt eru skráðar sem eitt vandamál.

Þykktin sem notuð er er þynnsti hlutinn sem suðan nefnir, þannig að 8 mm suða allan hringinn um bita með 6,35 mm sál er skráð.

## Vatn og loftgöt

- **Opinn efri endi** holprófíls sem stendur lóðrétt eða hallar um meira en 10° hleypir inn rigningu.
- Holprófíl **lokað í báða enda** þarf loftgat og frárennslisgat; heitgalvanhúðun og þrýstingur af hituðu lofti krefjast þess bæði.

## Getur suðumaðurinn náð til þess

Hornsuða er gerð með kyndlinum á miðri leið milli tveggja flatanna sem hún tengir. Fyrir sérhverja hornsuðu allan hringinn (endaplötu, undirplötu, skáplötu) tekur athugunin útlínu sniðs hlutarins við plötuna og, á 20 mm fresti, keyrir kyndilslóð út í 45° frá þeim stað þar sem stútur hans (10 mm radíus til að byrja með) fer fyrst framhjá báðum flötunum, í 30 mm í viðbót. Ef slóðin rekst á eigin flans bitans eða annan hlut, er sá hluti suðunnar skráður með hlutnum og fjarlægðinni. Þessar tölur eru dæmigerðar, ekki staðall: spurðu verkstæðið þitt um aðferðina og stútinn. Suður eftir tveimur köntum (skástykki) eru ekki staðsettar og ekki athugaðar.
