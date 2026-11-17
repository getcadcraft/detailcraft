---
title: Útfæra styrkingu í steyptum bitum, súlum, plötum og veggjum
summary: Bættu steyptum bitum, súlum, plötum og veggjum við eftir ás, gefðu þeim stangir, bindingar og stigbyglur, athugaðu skaranir og festingu samkvæmt ACI 318-19 eða EN 1992-1-1, og gerðu verkstæðisteikningar og beygjulista.
keywords: steypustyrking, steypustyrktarstál, bitar, súlur, plötur, veggir, stigbyglur, bindingar, skaranir, skörun, festing, þróunarlengd, ld, ldh, lbd, steypuþekja, bil, jaðarstengur, göt, lagnet, merkingar stanga, beygjulisti, verkstæðisteikning, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, IFC-innflutningur
from: 3835b7ec
---

Flipinn {{ui:Steypa}} undir myndinni sýnir stangir í steyptum bitum, súlum, plötum og veggjum í smáatriðum. Þú gefur stærðirnar og stangirnar; DetailCraft staðsetur hverja stöng, númerar hana, athugar skaranir, festingu, þekju og bil gegn greininni sem þau koma úr, og teiknar hana.

:::warning
DetailCraft útfærir þær stangir sem þú gefur því. Það hannar þær ekki. Sérhver niðurstaða er til yfirferðar hjá verkfræðingi.
:::

## Opnaðu flipann Steypa

Veldu flipann {{ui:Steypa}} undir myndinni. Í borðaskipulagi er {{ui:Steypa}} í flipanum {{ui:Líkanagerð}} við hliðina á {{ui:Undirstaða}}. Með skipanalínu teiknistílsins skrifarðu {{cmd:CONCRETE}}.

## Bættu við frumefni eftir ás

Steypufrumefni eru sett á ásalínur og hæðir líkansins, svo settu þær upp fyrst (vinstra spjald).

1. Í {{ui:Bæta við eftir ás}} veldu {{ui:Frumefni}}: {{ui:Steypubiti}}, {{ui:Steypusúla}}, {{ui:Plata}} eða {{ui:Veggur}}.
2. Veldu ásalínur og hæðir:
   - bitinn liggur frá einum skurðpunkti ristarinnar til annars, efri brún hans í hæðinni;
   - súlan stendur á skurðpunkti, frá einni hæð til annarrar;
   - platan fyllir rétthyrninginn milli tveggja tölusettra og tveggja bókstafa ásalína, efri brún hennar í hæðinni;
   - veggurinn liggur eftir miðlínu sinni frá einum skurðpunkti til annars, frá einni hæð til annarrar.
3. Gefðu upp stærðina og veldu {{ui:Bæta við}}. Frumefnið er valið og reitir þess opnast í {{ui:Eiginleikar}}-spjaldinu.

Hvert frumefni byrjar með stöngum sem eru upphafsgildi, ekki hönnun: breyttu þeim í það sem verkfræðingurinn ákveður.

## Breyttu stöngunum

Veldu frumefnið (í myndinni, eða með nafni þess í flipanum {{ui:Steypa}}). Spjaldið {{ui:Eiginleikar}} sýnir:

| Frumefni | Það sem þú stillir |
|---|---|
| Bitinn | Breidd, dýpt, hrein steypuþekja; efri og neðri stangir (stærð, fjöldi, bein eða 90° krókur á endunum); hliðarstangir; stigbyglur (stærð, 135° eða 90° krókar, fjarlægð fyrstu frá stuðningsfleti, lengd og bil endasvæðis, bilið þar á milli); stuðningslengdir; skaranalengdir |
| Súlan | Breidd, dýpt þvert, snúningur, þekja; lengdarstangir á hverjum fleti; bindingar eins og stigbyglur; hvað stangirnar gera efst (skarast við súluna fyrir ofan, krækjast inn í gólfið eða enda) |
| Platan | Þykkt, stærð, efri brún, þekjur; neðra og efra lagnet í báðar áttir (stærð og bil); U-stangir um brúnirnar; jaðarstengur; göt |
| Veggurinn | Þykkt, þekja, eitt eða tvö lög, láréttar og lóðréttar stangir, U-stangir á endunum, lóðréttar stangir sem skarast upp fyrir eða ekki, jaðarstengur, göt |

Sérhver breyting er eitt afturkallsskref. Breyting sem ekki er hægt að byggja er hafnað og stöðustikan segir af hverju, til dæmis „Gatið passar ekki innan frumefnisins með þekjunni.“

Stigbyglur og bindingar eru lokaðar, með báða króka á sama horni. Stangir bita ganga inn í steypusúlu við endana að fjarlægari fleti súlunnar, að frádreginni þekju; þar sem engin súla er skaltu gefa upp {{ui:Lengd stuðnings við upphaf (mm)}} og við endann.

## Skaranir og festing

Stangir lengri en {{ui:Lengd lagerstangar (mm)}} (12000 til að byrja með) eru skornar í bita af jafnri lengd og skarast. Taflan {{ui:Skaranir og festing}} listar hverja skörun og hverja festingu: hvað þarf, með greininni og skilmálum hennar, og hvað útfærslan hefur.

- Skarunarlengd 0 merkir „eftir þörfum“: lengdin sem staðallinn gefur, námunduð upp í 25 mm.
- Sláðu inn þína eigin skarunarlengd til að nota hana í staðinn. Ef hún er styttri en þörf krefur er hún vandamál (sjá hér að neðan) og er merkt * í töflunni.
- Festing er mæld frá stuðningsfleti að enda stangarinnar inni í stuðningnum. Bitar án þekkts stuðnings segja það í stað þess að vera athugaðir.
- Súla sem stendur á undirstöðu skarast við tengistangir undirstöðunnar, og á annarri súlu við stangir þeirrar súlu: skörunin þar er líka athuguð.

**ACI 318-19** (SI): beinar stangir í togi 25.4.2.3 (taflan, með ψt, ψe, ψg, λ), staðlaðir krókar 25.4.3.1 (ψr 1.6 og ψo 1.25 teknir nema annað sé vitað), stangir í þrýstingi 25.4.9.2, togskaranir 25.5.2.1 (flokkur B, eða flokkur A í stillingunum), þrýstiskarana 25.5.5.1.

**EN 1992-1-1**: festing 8.4.4 með fbd úr 8.4.2 (góð eða léleg tenging), skarana 8.7.3 með α6 fyrir hverja stöng sem skarast á sama þversniði. γc, γs og αct byrja á ráðlögðum gildum; stilltu gildin í þjóðarviðauka þínum.

## Athuganirnar

Sérhver athugun sem fellur er í spjaldinu Vandamál í skelinni (uppruni {{ui:Styrkingarathuganir}}) og í listanum {{ui:Athuganir}} frumefnisins:

| Athugun | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Þekja | Tafla 20.5.1.3.1, eftir umhverfisálagi | Lágmark tengingar, tafla 4.2 (endingarþekjuna gefur þú sjálf) |
| Hrein bil milli stanga | 25.2.1 (bitar, plötur, veggir), 25.2.3 (súlur) | 8.2 (2) |
| Bil stigbygla | 9.7.6.2.2 | 9.2.2 (6) |
| Lágmarksstál í bitum | 9.6.1.2 | 9.2.1.1 (1) |
| Hliðarstangir bita dýpri en 900 mm | 9.7.2.3 | ekki athugað |
| Stálhlutfall súlu, fjöldi stanga | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Bindingar: bil, stærð, þverbindingar | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Bil í plötu, lágmarksstál | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Bil í vegg, lágmarksstál, tvö lög | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Skaranir, festing | eins og að ofan | eins og að ofan |

Stærð fyllefnis er ekki þekkt, svo hreint bil er athugað án hennar.

## Göt, jaðarstengur og brúnastangir

Veldu {{ui:Bæta við opnun}} undir valinni plötu eða vegg og stilltu hvar hún er og stærð hennar. Stangir sem hún sker enda við þekju frá brún sinni. Jaðarstengur bætast við hvoru megin, í sama lagi, og bera helming af flatarmáli skornu stanganna, einni festilengd lengra en gatið. Þetta er upphafsregla DetailCraft, ekki grein staðals: breyttu {{ui:Jaðarstengur við göt}} í það sem verkfræðingurinn ákveður. Hornstangir eru ekki bættar við.

U-stangir um frjálsar brúnir plötu og á endum veggs hafa fætur sem eru ein skarunarlengd.

## Merkingar stanga og beygjulistinn

Eins stangir deila einni merkingu: undirstöður halda F-merkingum (5F1), bitar fá B, súlur C, plötur S og veggir W (7B1, 8C1, 4S2). Flipinn {{ui:Beygjulisti}} og CSV-skráin hans sýna nú hverja stöng mannvirkisins, undirstöður fyrst. {{ui:Útkoma}} › {{ui:Meira}} › {{ui:Beygjulisti}} sækir hana.

## Verkstæðisteikningar

Veldu {{ui:Útkoma}} › {{ui:Meira}} › {{ui:Styrkingarteikningar}}, {{ui:Styrkingarteikningar}} í flipanum {{ui:Steypa}}, eða {{ui:Verkstæðisteikning}} við hliðina á einu frumefni. Hvert frumefni fær blað með útliti (grunnmynd fyrir plötu) sem sýnir hverja stöng og merkingu hennar, svæði stigbygla eða binda og skarana með málsetningum, og snið um miðjuna. Síðan lista beygjublöðin hverja merkingu með skissu af lögun hennar, málum, fjölda, skurðarlengd og þyngd.

Blöðin eru gerð úr líkaninu í hvert skipti, og aftur eftir hverja breytingu meðan glugginn er opinn: titilreitur ber tilvísun líkansins. Vistaðu {{ui:Þetta blað sem PDF}} eða {{ui:Öll blöð sem PDF}}.

## Stangir úr IFC-skrá

{{ui:Skrá}} › {{ui:Flytja inn IFC}} les nú IfcReinforcingBar: sópaði diskurinn meðfram miðlínu hans kemur til baka sem beinir fætur og beygjur, með þvermáli sínu, merkingu og frumefninu sem heldur henni. Stangirnar eru geymdar eins og þær voru lesnar (þær eru ekki breytt í reglur bita eða plötu), sýndar í myndinni, skráðar í beygjulistann og skrifaðar út aftur með IFC-útflutningnum. Innflutningsskýrslan segir hversu margar stangir voru lesnar, af hvaða stærðum, í hversu mörgum frumefnum, og hvað var skilið eftir og af hverju.

Bitar, súlur, plötur eða veggir í þeirri skrá sem halda stöngum eða hafa steypu sem efni eru ekki teknir sem stál; skýrslan segir það. Eigin IFC-útflutningur DetailCraft ber skilgreiningu hvers steypufrumefnis, svo það kemur til baka sem það sjálft og stangir þess eru gerðar aftur út frá henni.

:::note
Lestur á eigin skrám burðarvirkishönnunarforrits (ekki IFC) er ekki innbyggður: fluttu út IFC úr því.
:::

## IFC-útflutningurinn

Steyptir bitar, súlur, plötur (með götum) og veggir fara út sem IfcBeam, IfcColumn, IfcSlab og IfcWall, hver með stöngum sínum sem IfcReinforcingBar (aðalstangir, stigbyglur og bindingar, brúnastangir) tengdum við hana. Hver stöng er sópaður diskur meðfram miðlínu sinni með réttum bogum í beygjunum, með merkingu sinni og skurðarlengd.
