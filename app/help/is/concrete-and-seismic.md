---
title: Athuga steypta hluti og búa til jarðskjálftaálag
summary: Settu upp stálið í steyptum bitum og súlum, athugaðu það samkvæmt ACI 318-19, búðu til jafngildar láréttar kraftar samkvæmt ASCE 7-22 á stífum gólfum, og sjáðu hæðarfærslu. Hjálpargagn fyrir verkfræðing til að yfirfara.
keywords: steypa, járnbent steypa, ACI 318, ACI 318-19, steypustál, biti, súla, skurðkraftur, bindingar, jarðskjálfti, jafngildur láréttur kraftur, ELF, ASCE 7-22, færsla, hæðarfærsla, gólf, stíft þindlag, hæðarþyngd, nýting, nýtingarhlutfall, burðarvirki, verkfræðingur
from: 94d3001d
---

Blokkirnar {{ui:Steypuhlutar}} og {{ui:Jarðskjálftaálag}} í flipanum {{ui:Greining}} athuga járnbentar steypubita og súlur, og búa til láréttu kraftana úr jarðskjálfta á gólfum rammans. Hvort tveggja fylgir keyrslu flipans {{ui:Greining}} og er vistað með líkaninu.

:::warning
Niðurstöðurnar eru **til yfirferðar verkfræðings**: hjálpargagn þar til einhver hefur yfirfarið þær. Steypuathuganir nota kraftar fyrstu röðar, nema að súla í ramma sem þú kallar án hliðrunar er hönnuð fyrir magnaða beygjuna sína, án hliðrunarmögnunar, án hönnunar snúnings, án jarðskjálftaaðferða (ACI kafli 18) og án hönnunar á bindingum. Jarðskjálftaálagið sleppir endurtekningarstuðlinum, lóðrétta jarðskjálftaáhrifunum, snúningsmögnun og P-delta áhrifum. Vindálag er ekki smíðað enn.
:::

## Teiknaðu hlutina

Teiknaðu steypta hluti sem rétthyrninga: {{ui:Plata}}-prófíll eins og `PL400x400` fyrir súlu og `PL300x600` fyrir bita gefur sniðið. Súlur og bitar eru settir eins og aðrir hlutir.

## Settu upp sniðin

Blokkin {{ui:Steypuhlutar}} sýnir öll snið sem hlutirnir nota. Ýttu á {{ui:Setja upp sem steypu…}} á þeim sem eru steypa. DetailCraft les breiddina **b** (eftir y-ási hlutarins sjálfs) og dýptina **h** (eftir z) úr teiknaða prófílnum, og spyr síðan um:

- **þekjuna** að miðju stanganna, og **efri**, **neðri** og **hliðar** stangir (hversu margar og hvaða þvermál) fyrir bita, eða **súlubúr** (stangir eftir b og eftir h, hvaða þvermál, spíralbindingar) fyrir súlu;
- **bindingarnar**: fætur, þvermál og bil;
- hvað hluturinn **virkar sem**: bita, súlu, eða ákveðið út frá kröftum hans (lóðrétt stykki, eða stykki sem ber meira en 0,10 f′c Ag, er súla).

Stilltu f′c, flæðimörk stanganna fy og flæðimörk binda fyrt (mest 420 MPa telst fyrir skurðkraft), K og hvort rammi er með hliðrun eða án hliðrunar fyrir ofan þau. Snið sem er sett upp sem steypa er greint sem steypa: E = 4700 √f′c, 2400 kg/m³, og sjálfgefið með **sprungnum sniðum** (súlur 0,70 Ig, bitar 0,35 Ig; ACI 318-19 tafla 6.6.3.1.1(a)). Veldu {{ui:Heildarsnið}} til að slökkva á því.

## Búðu til samsetningar og athugaðu

Gefðu álagstilvikunum gerð þeirra, og veldu síðan {{ui:Búa til samsetningar}}: ACI 318-19 tekur styrkjasamsetningar ASCE 7 (§5.3.1). Ýttu á {{ui:Athuga steypu}} og sérhver hlutur fær nýtingu, litaða á líkaninu eins og stálathuganirnar: beygja og lágmarksstál (22.2, 9.6.1.2), togstýrð álagsþensla (9.3.3.1), skurðkraftur með bindingunum (22.5, 9.6.3), bil binda, og ásálag með beygju fyrir súlur (22.4, með aðferð Bresler við tvíátta beygju). Hlutur þar sem teiknaða sniðið er frábrugðið b × h sem þú ssláðir inn birtist sem *að hluta athugaður*, eins og grönn súla eða snúningur yfir þröskuldinum: þær eru ekki hannaðar.

Hlutar sem eru yfir burðargetu sinni eru skráðir í {{ui:Vandamál}}; samþykktu einn með ástæðu, eða lagfærðu sniðið.

## Gólf og jarðskjálftaálag

Gólf er hæð þar sem rammanum er haldið saman af stífri plötu (**stífu þindlagi**). Í blokkinni {{ui:Jarðskjálftaálag}} ýttu á {{ui:Finna gólf}}: það tekur hæðirnar þar sem tveir eða fleiri bitar mætast. Gefðu síðan hverju gólfi **jarðskjálftaþyngd** sína, slegna inn eða lesna: {{ui:Taka þyngdir úr tilvikum}} leggur saman lóðrétt álag þeirra tilvika sem þú gefur stuðul (fasta álagið er 1; bættu við 0,25 á lifandi álagstilvik í geymslu eða snjó á flötu þaki eins og ASCE 7-22 12.7.2 krefst). Lóðrétt álag hvers hnúts fer til gólfsins í eða fyrir ofan hann, þannig að súla milli tveggja gólfa gefur helming þyngdar sinnar til hvors.

Fylltu inn hönnunargildin: SDS, SD1, S1, R, Ie, Cd, TL, burðarkerfið (fyrir sveiflutímann) og áhættuflokkinn. {{ui:Búa til jarðskjálftatilvik}} reiknar síðan sveiflutímann út frá hæð byggingarinnar (12.8.2.1), grunnskurðkraftinn V = Cs W (12.8.1), dreifir honum upp á gólfin (12.8.3) og skrifar fjögur álagstilvik, í X og Y með 5 % tilviljunarkenndu snúningsálagi í hvora átt (12.8.4.2). Hæðarkraftarnir og athugun á hæðarfærslu (12.8.6, tafla 12.12-1, færslan Cd δxe / Ie gegn 0,020 hsx) birtast eftir keyrslu; færsla yfir mörkunum er líka vandamál. Ýttu aftur á {{ui:Búa til samsetningar}} til að setja jarðskjálftatilvikin inn í samsetningarnar.

**Sveiflutíminn úr greiningunni.** Nálgaður sveiflutími Ta kemur úr hæð byggingarinnar. Þegar þú hefur keyrt greininguna með jarðskjálftatilvikunum les {{ui:Sækja tímabilið úr greiningunni}} hversu langt hvert gólf hreyfðist undir kröftunum og reiknar tímann út með aðferð Rayleighs, T = 2π √(Σ w δ² / (g Σ f δ)), einu sinni fyrir X og einu sinni fyrir Y; jarðskjálftatilvikin eru búin til aftur með honum. Tímabilið sem notað er er aldrei meira en Cu·Ta (ASCE 7-22 12.8.2), þannig að mjúkt líkan getur ekki lækkað grunnskurðkraftinn undir því. Sæktu tímann aftur eftir aðra keyrslu: hann stillist á einu eða tveimur skrefum. Afhakaðu {{ui:Sveiflutími úr greiningunni}} til að fara aftur í Ta.

**Grannar súlur (ACI 318-19 6.6.4.5).** Fyrir ramma sem þú kallar án hliðrunar er súla þar sem k·ℓu/r er yfir 34 + 12·M1/M2 (mest 40) hönnuð fyrir magnaða beygjuna Mc = δns · M2: δns = Cm / (1 − Pu / 0,75 Pc), Pc = π² (EI)eff / (k ℓu)² með (EI)eff = 0,4 Ec Ig / (1 + βdns), og lágmarksbeygjuna Pu (15 + 0,03 h). βdns (0,6 til að byrja með) er hlutdeild þess ásálags sem er varanlegt: sláðu inn þitt eigið gildi. Súla þar sem Pu nær 0,75 Pc fellur á eigin athugun. Skýrslan skráir tölurnar fyrir hverja granna súlu. Í rammi **með hliðrun** er grönn súla enn „að hluta athuguð“: magnun hennar krefst annarrar röðar greiningar, sem er ekki smíðuð.

**Plötur.** Þegar líkanið hefur plötur tekur blokkin {{ui:Steypustál í plötum}} plötubeygjurnar úr öllum styrkjasamsetningum og reiknar út, með Wood–Armer reglunni (beygja og snúningur saman), stálið sem hvert lag þarf á metra: neðst og efst, í x og í y. Þú gefur þykktina, þekjuna og stangirnar; taflan sýnir þörf gegn gefnu, og einátta skurðkraftinn gegn φVc, og lag sem fellur undir er vandamál með sinni grein. Durgur, gatskurður við súlur og jaðarstangir við op eru ekki þakin, og beygja yfir stuðningi konverterar hægt með fjórhyrndum plötum.

Sérhvert gólf sem þú skráir verður stíft þindlag í greiningunni: bitar þess bera engan ásakraft vegna hreyfingar gólfsins. Útflutningur CraftScript er ekki gerður fyrir líkan með gólfum.

## Skýrslan

{{ui:Skýrsla (PDF)}} og {{ui:Skýrsla (CSV)}} fá við steyputöflurnar (forsendur, nýting eftir hlutum, hverja grein), jarðskjálftabreyturnar og grunnskurðkraftinn, kraftana á gólfunum og töflu um hæðarfærslu.
