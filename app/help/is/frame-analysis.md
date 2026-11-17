---
title: Greinið rammann
summary: Kraftar, viðbrögð og beygjur bita, súlna og spelkna eins og þær eru teiknaðar, undir álagstilvikum og samsetningum sem þú setur. Hjálpartæki við greiningu, ekki kóðaathugun; hönnunarathuganir eru sérstakt skref.
keywords: greining, burðargreining, greining ramma, stífnisaðferð, álag, álagstilvik, samsetning, eigin þyngd, sjálfsþyngd, viðbrögð, beygjumoment, skurðkraftur, ásálag, durður, beygð lögun, stuðningar, lamaður, fastur, losun, skýrsla, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Flipinn {{ui:Greining}} neðst finnur kraftana í hverjum bita, súlu og spelku líkansins, viðbrögð við súlufætur og hversu mikið stangirnar beygjast, fyrir álögin sem þú gefur.

:::warning
Þetta er **hjálpartæki við greiningu, ekki kóðaathugun**. Greiningin beitir engum hönnunarstaðli: hún ákvarðar ekki stærðir stanga, athugar ekki burðargetu eða tengingar, og velur ekki álagsstuðla. Verkfræðingur yfirfer líkanið, álögin og stuðningana og ákveður hvað tölurnar þýða. Fyrir athuganir á stöngum samkvæmt ASCE 7 / AISC 360 eða EN 1990 / EN 1993-1-1 sjá [Athugið stálstangir samkvæmt hönnunarstaðli](topic:design-checks), sérstakt skref sem er líka hjálpartæki.
:::

## Keyrið greininguna

1. Opnaðu flipann {{ui:Greining}}.
2. Veldu eina eða fleiri stangir í sýninni, veldu {{ui:Tilvik}}, {{ui:Álag}} og {{ui:Stefna}}, sláðu inn gildið og ýttu á {{ui:Bæta við álagi}}. Álag sem dreifist eftir stöng er í kN/m, punktálag í kN. {{ui:Niður (þyngdarkraftur)}} er algengast.
3. Ýttu á {{ui:Keyra greiningu}}.

Taflan sýnir mesta ásálag N, skurðkraftana Vz og Vy, beygjumomentin My og Mz, snúning T og durð hverrar stangar, með mesta momentið fyrst; smelltu á heiti stangar til að velja hana. Fyrir neðan eru viðbrögð við hverjum stuðningi. {{ui:Á líkaninu}} teiknar beygðu lögunina, eða einn af snitkröftunum sem skýringarmynd við hlið hverrar stangar með mesta gildi skrifað á sinn stað. Niðurstöðurnar verða úreltar um leið og líkanið breytist: keyrðu greininguna aftur.

Sérhvert álag, tilvik og stilling er eitt skref í afturköllun ({{key:Mod+Z}}) og er vistað í líkanaskránni.

## Álagstilvik og samsetningar

Greiningin byrjar með þremur: **Eiginþyngd** (eigin þyngd stanganna, út frá teiknuðu sniði þeirra og 7850 kg/m³), **Breytilegt** (tómt) og **Eiginþyngd + breytilegt**. Bættu við eigin tilvikum (vindur, snjór …) og samsetningum: samsetning leggur tilvikin saman með stuðlunum sem þú slærð inn. Greiningin er línuleg, svo hvert tilvik er leyst einu sinni og samsetningar eru summur. Sláðu inn stuðlana sjálf/ur, eða veldu hönnunarstaðal og láttu {{ui:Búa til samsetningar}} skrifa samsetningar staðalsins ([Athugið stálstangir samkvæmt hönnunarstaðli](topic:design-checks)).

## Úr hverju rammin er gerður

- Bitar, súlur og spelkur, hver á sinni vinnulínu (línunni sem þú teiknaðir), með raunverulegum eiginleikum sniðsins reiknuðum út frá útlínu þess. Plötur, stigar, undirstöður og boltar eru ekki hluti af rammanum.
- Stöng er klofin þar sem endi annarrar stangar lendir á henni, þannig að bitinn sem tengist súlu í miðhæð tengist súlunni þar.
- **Súlufætur**: fastur (upphafið) eða lamaður (haldið á sínum stað og gegn snúningi, frjáls til að snúast). Undirstöðuplata býr alltaf til stuðning.
- **Endar bita**: endaplata er stíf, skurðarflipi er lamaður. {{ui:Endar bita án tengingar}} stillir hitt. **Spelkur** eru lamaðar í báða enda.
- Veldu eina stöng til að gefa endum hennar, eða súlufæti, sína eigin reglu.
- Stál alls staðar: E = 200 GPa, G = 77 GPa.

Ef rammann getur hreyfst án þess að beygja neitt — kerfi, til dæmis lamaðir súlufætur án spelkunar í einni átt — stöðvast keyrslan og segir hvar og í hvaða átt; haltu honum þar með stuðningi, stífri tengingu eða spelku.

## Formerki

N > 0 er tog. My > 0 setur staðbundnu −z hlið stangarinnar í tog: bitinn sem sígur undir þyngdarkrafti hefur My > 0. Mz > 0 setur staðbundnu −y hliðina í tog. Durð er mæld frá beinni línu milli enda stangarinnar. Staðbundin z-ás stangar vísar upp (fyrir súlu: eftir X); staðbundnir ásar hennar snúast með snúningi stangarinnar.

## Skýrslan

{{ui:Skýrsla (PDF)}} og {{ui:Skýrsla (CSV)}} innihalda allt: forsendurnar sem rammin var byggður á, snið, tilvik og samsetningar, og síðan fyrir hvert tilvik og samsetningu viðbrögðin (með summum álaga og viðbragða, sem jafnast út), kraftana í stöngunum og færslurnar, og umslag allra tilvika. {{ui:Flytja út sem CraftScript}} skrifar sama rammann sem skriftu fyrir skriftuvinnusvæði PartCraft, þar sem safnfallið `frame3d` leysir hann skref fyrir skref í læsilegum kóða.

## Aðferð

Beina stífnisaðferðin, línuleg og fyrsta stigs nema þú hakir við Annars stigs (P-Delta): tveggja hnúta bita-súlur með ás-, snúnings- og tveimur beygjustífnum (engin skurðaraflögun, engin skekking), endalosanir með stöðuþéttingu, álög eftir stöngum í gegnum eigin formföll stanganna. Svör hennar eru borin saman við klassísk kennslubókardæmi (útskaga, einfaldar, fastar og samfelldar bita, gáttarramma, grind í snúningi, fagverk).

**Annars stigs (P-Delta).** Hakaðu við *Annars stigs (P-Delta)* við hliðina á Keyra: hver samsetning er leyst aftur með ásálögum stanganna sem verka á beygðan rammann (hver stöng skorin í 4 hluta, svo beygja stangar milli enda telst líka), þar til ásálögin hætta að breytast. Niðurstöðulínan gefur fjölda umferða og hversu mikið hliðarhreyfingin jókst; momentin, durðirnar, hönnunarathuganir og skýrslan nota þá þessar niðurstöður. Fyrir ofan teygjanlegt gagnrýnt álag rammans stöðvast keyrslan og segir það. Hún er teygjanleg með litlum snúningum, aðeins beygja, án lækkunar á stífni eða hugtakaálaga (ekki AISC-beina greiningaraðferðin ein og sér); plötur, veggir og stíf gólf eru áfram fyrsta stigs.

**Eigintíðnir (endanleg frumefni).** Blokkin {{ui:Endanleg frumefni: eigintíðnir}} undir niðurstöðunum finnur lægstu sveiflumyndirnar á sama líkani með endanlegum frumefnum: bitar með endalosunum sínum, plötur og veggir sem flatar fjögurra hnúta skeljar, stíf gólf, stuðningar. Veldu hversu margar myndir (3, 6, 10 eða 20) og plötufrumefnið (fjögurra hnúta skelin fyrir þykkar eða þunnar plötur, eða þunnplötufrumefnið) og ýttu á {{ui:Finna tíðnirnar}}. Taflan gefur tíðni hverrar myndar í Hz, lotutíma hennar í sekúndum og virkan mótmassa hennar eftir X, Y og Z sem hlutfall af massanum sem getur hreyfst; {{ui:Sýna á líkaninu}} teiknar hvaða mynd sem er á sama hátt og beygða lögunina. Massinn er eðlismassi efnisins margfaldaður með rúmmálinu: álög bæta ekki við massa, og efni án eðlismassa hefur engan. Skýrslan (PDF, CSV) geymir töfluna. Hún er aðeins teygjanleg og fyrir litlar hreyfingar, og engu jarðskjálfta- eða vindálagi er búið til úr staðli hér. Ekki kóðaathugun; verkfræðingurinn yfirfer niðurstöðurnar.

**Svörunarróf, tímasaga og ýtigreining (pushover).** Þrjár blokkir til viðbótar eru undir tíðnunum og nota sama líkan með endanlegum frumefnum. Massinn fyrir þær allar er eðlismassi efnisins að viðbættum niðurverkandi álögum þeirra tilvika sem þú hakar við, hvert margfaldað með stuðli sem þú slærð inn (til dæmis Eiginþyngd með 1 og Breytilegt með því hlutfalli sem þú telur sem massa).

{{ui:Svörunarróf}} les úr hverri mynd af rófi sem þú gefur (tafla af lotutíma og hröðun, eða ASCE 7-lögun út frá SDS, SD1 og TL; hnappurinn {{ui:Nota gildin úr jarðskjálftablokkinni}} afritar þau úr jarðskjálftablokkinni) og sameinar myndirnar með CQC, SRSS, tíu prósenta reglunni eða algildissummu, og setur síðan X-, Y- og Z-stefnurnar saman (100 % + 30 % eða SRSS). Hún gefur grunnskurð, hæðarskekkjur, endakrafta stanga og myndatöflu sem varar við þegar notaðar myndir bera minna en 90 % af massanum. Þú getur skalað niðurstöðurnar með stuðli eða upp í grunnskurð sem þú slærð inn; blokkin reiknar aldrei þann grunnskurð sjálf. Niðurstöðurnar hafa ekki formerki.

{{ui:Tímasaga}} keyrir jarðhröðun með mótunarsamlagningu (nákvæm fyrir beinar línur skrárinnar milli punkta) eða beinni heildun (Newmark-meðalhröðun með Rayleigh-deyfingu). Inntakið er tilbúin sínusbylgja eða púls (alltaf merkt sem gervi), skrá sem þú límir inn, eða textaskrá sem þú opnar (tími og hröðun, ein hröðun í línu með skrefi, eða PEER-skrá með DT= haus; í g eða m/s²). Hún gefur færslu þaksins og grunnskurð sem fall af tíma, skekkju hverrar hæðar og umslag endakrafta stanganna. Líkön með mjög langa skrá geyma hana aðeins fyrir lotuna.

{{ui:Ýtigreining (pushover)}} ýtir þakinu til hliðar í litlum skrefum (mynstur eins og fyrsta myndin, eða jafnt), með plastískum liðum á endum stanga sem hafa I-lögun. Liður gefur eftir við plastíska momentið, sem lækkar eftir því sem ásálagið vex (reiknað út frá teiknaðri lögun, rundanir ekki teknar með); herðing er valkvæð, P-delta er valkvætt, og samsetning vegna þyngdarkrafts má beita fyrst. Hún gefur burðarferilinn (grunnskurð gegn færslu þaks), fyrsta liðinn, og stöðu og plastískan snúning hvers liðar. {{ui:Keyra ólínulegu tímasöguna}} keyrir sömu liðina undir skrá tímasögublokkarinnar á litlum líkönum. Liðir myndast aðeins á endum stanga (settu hnút þar sem liður ætti að myndast inni í spönn); stöng sem er losuð í báða enda fær engan, og flotun og knékun spelkna er ekki líkanað; plötur og veggir eru áfram teygjanlegir; engin viðurkenningarviðmið eru gefin. Ekki kóðaathugun; verkfræðingurinn yfirfer niðurstöðurnar. Stillingarnar eru vistaðar með líkaninu og skýrslan geymir töflurnar.

Ekki smíðað enn: knéunargreining, leiðrétting á vantandi massa fyrir svörunarróf, skölun skráa, viðurkenningarviðmið fyrir liði (kraftvirk svörun er til, eins og fyrir ofan), svæða- og vindálög búin til fyrir þig (jarðskjálftakraftar á gólfum eru í [Athugið steypustangir og búið til jarðskjálftaálög](topic:concrete-and-seismic)), tilfærslur stanga, spelkur sem taka aðeins tog. Sjá [Það sem er ekki smíðað enn](topic:not-built-yet).
