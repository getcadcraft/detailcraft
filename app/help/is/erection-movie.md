---
title: Uppsetningaráætlun og myndband
summary: Settu inn krana og álagstöflu hans, sjáðu hverja lyftingu athugaða gegn töflunni í fasaröð, og vistaðu uppsetningarmyndband sem spilast án nettengingar í hvaða síma sem er.
keywords: uppsetning, krani, lyfting, álagstafla, radíus, burðargeta, festibúnaður, röð, myndband, hreyfimynd, sími, án nettengingar, lyftiáætlun
from: fa7b0133
---

Flipinn {{ui:Uppsetning}} breytir líkaninu í uppsetningarskipun og athugar hverja lyftingu gegn krana sem þú lýsir. Hann reiknar út frá tölum sem þú slærð inn. Þetta er ekki lyftiáætlun: stroffumaðurinn og kranastjórinn gera hana.

## Lýstu krananum

Veldu {{ui:Bæta við krana}}, og fylltu síðan inn:

- **Miðja krana X og Y:** hvar krananum stendur, í millimetrum.
- **Hæsti krókur:** það hæsta sem krókurinn getur risið, í millimetrum. 0 þýðir að engin mörk eru athuguð.
- **Krókablokk og festibúnaður ekki í töflunni:** kílógrömm dregin af töflunni áður en álagi er bætt við, þegar taflan þín gerir það ekki nú þegar.
- **Álagstafla:** ein röð í hverri línu, radíus í metrum og síðan burðargetan í kílógrömmum. Afritaðu raðirnar úr töflu krana sjálfs.

Taflan er lesin eins og álagstafla er lesin: burðargetan sem gefin er upp fyrir radíus gildir út að þeim radíus. Álag á radíus á milli tveggja raða fær burðargetu **fjarlægari** raðarinnar, aldrei gildi þar á milli. Innan fyrstu raðar gildir burðargeta fyrstu raðar. Handan síðustu raðar getur krani alls ekki lyft. Radíusinn sem telur fyrir lyftingu er sá stærri af upptökuradíus og setradíus.

Annar krani er bættur við á sama hátt. Hver lyfting fer til fyrsta krana sem getur tekið hana innan framlegðar þinnar.

## Hvað áætlunin gerir

- Ein lyfting fyrir hverja samsetningu: bita með endaplötum sínum, súlu með undirstöðuplötu sinni, stiga.
- Röðin fylgir fösunum fyrst, og síðan lag fyrir lag: súlur, bitarnir sem þær bera, skástífur, plötur, stigar. Hluti er aldrei lyft áður en það sem ber hann.
- Hver lyfting sýnir þyngd sína (heildarþyngd líkansins, auk {{ui:Búnaður bætt við hverja þyngd}}), radíus hennar, hlutdeild töflunnar sem hún notar og mínútuna sem hún hefst.
- {{ui:Mest af töflunni sem lyfting má nota}} er öryggisfrávik þitt. Lyfting yfir því er merkt **Yfir framlegð þinni**; yfir töflunni, **Yfir töflunni**; handan síðasta radíuss töflunnar, **Handan töflunnar**; og hluti sem er hærri en krókurinn, **Krókur of lágur**.

Göt og útskurðir eru ekki dregin frá þyngdunum, og boltar eru þaktir af búnaðarprósentunni.

## Vandamál

Sérhver lyfting sem er yfir, handan, of há eða sett á undan því sem ber hana birtist í spjaldinu {{ui:Vandamál}}. Bita án tengingar sem ber hann er skráður sem þurfandi tímabundins stuðnings.

## Vista myndbandið

{{ui:Vista myndband}} skrifar eina HTML-skrá. Opnaðu hana í hvaða vafra sem er, líka í síma, án nettengingar og án aðgangs: spilaðu og gerðu hlé, dragðu stikuna á hvaða mínútu sem er, snúðu líkaninu með fingri, klíptu til að þysja. Textinn undir myndinni nefnir hverja lyftingu, þyngd hennar, radíus og hlutdeild í töflunni. Líkanið er teiknað sem einfaldir kassar: það sýnir röðina og lyfturnar, ekki raunverulega prófíla.

Sama tafla vistast sem CSV með hnappinum {{ui:CSV}}. Krani og tafla eru vistuð í líkanaskránni, og sérhver breyting er eitt skref í afturköllun.
