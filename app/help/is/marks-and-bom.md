---
title: Athugaðu merkingar og efnislista
summary: Lestu hluta- og samsetningarmerkingar sem DetailCraft gefur hverju stykki, athugaðu efnislistann og sæktu hann sem CSV.
keywords: merkingar, númerun, merking hluta, samsetningarmerki, stykkjamerki, bom, efnislisti, lista yfir efni, þyngdir, boltalisti, csv
from: caa2ee80
---

DetailCraft merkir líkanið sjálft. Engin númerunarskipun er til og ekkert að keyra: eftir sérhverja breytingu reiknar það út hvaða hlutar eru sama stálstykkið og gefur þeim eina merkingu.

## Hvar merkingar birtast

- Listinn {{ui:Merkingar hluta}} í {{ui:Líkan}}-glugganum: hver merking með sniði sínu, lengd og fjölda. Smelltu á eina til að velja fyrsta hlutann með þeirri merkingu.
- Eiginleikagluggi {{ui:Eiginleikar}} valins liðs (og listinn **Merkingar hluta** í vinstri glugganum): {{ui:Auðkenni hlutar}} og {{ui:Samsetning}}. Fyrirsögn gluggans ber líka merkinguna, til dæmis „Bitinn b1“.
- Flipinn {{ui:Efnislisti}}, CSV-skráin, NC-skráarheitin, verkstæðisteikningarnar og IFC-útflutningurinn (sem merki hvers frumefnis).

## Hvernig hlutar eru merktir

- **Merkingar hluta:** c fyrir súlur, b fyrir bita, br fyrir skástífur, st fyrir stigabita, p fyrir plötur (þar með taldar endaplötur og undirplötur). Síðan tala: c1, c2, b1, p1 … Þegar hlutar eru í fleiri en einum áfanga kemur áfangatalan fyrst, til dæmis 2-b1.
- **Samsetningarmerkingar:** C, B, BR eða P. Samsetning er aðalliður og plöturnar soðnar við hann, til dæmis bitinn með báðum endaplötunum, eða súlan með undirplötu sinni.
- Tveir hlutar fá sömu merkingu þegar þeir hafa sama snið, efni og skurðlengd, og sömu göt og úrtökur, allt innan 1 mm, jafnvel þótt annar sé snúinn við endann á eða á hvolf miðað við hinn.
- Númerun gengur fyrst yfir súlur, síðan bita, skástífur og plötur; innan hvers flokks, eftir heiti sniðs, síðan lengstu fyrst.

Allar reglurnar, þar með talið hvaða snúningar telja fyrir U-prófíla og hornjárn: [Reglur um merkingar](topic:mark-rules).

:::warning
Merkingar eru reiknaðar upp á nýtt eftir sérhverja breytingu, svo þær geta endurnúmerast. Að bæta við hlut, breyta sniði eða bæta við gati getur fært b3 yfir í b4. Teldu merkingar endanlegar aðeins þegar líkaninu er lokið, og gerðu efnislistann, NC-skrár og verkstæðisteikningar úr sama vistaða líkani.
:::

## Lestu efnislistann

Opnaðu flipann {{ui:Efnislisti}} neðst. Hann hefur þrjár töflur.

**Hlutar**, með heildarþyngd stálsins í fyrirsögninni:

| Dálkur | Merking |
|---|---|
| Merking hluta | Smelltu til að velja fyrsta hlutann með þessari merkingu |
| Tegund | bitar, súla, skástífa, stigabiti eða plata |
| Snið | Til dæmis W16x26 eða PL20x180 |
| Efni | Gæðaflokkurinn sem þú stilltir |
| Lengd (mm) | Skurðlengd, eftir tengingar |
| Fjöldi | Hversu margir |
| Einingarþyngd (kg) | Massi sniðs á metra × lengd |
| Heildarþyngd (kg) | Einingarþyngd × fjöldi |

Síðasta línan gefur heildarfjölda og þyngd.

**Samsetningar:** hvert samsetningarmerki, aðalhlutinn, allir hlutar þess (til dæmis „b1 + p1 + p1“), fjöldi, einingarþyngd og heildarþyngd.

**Boltar og akkerisstangir:** flokkuð eftir tegund, þvermáli, lengd og gæðaflokki, með fjölda.

:::note
Þyngdir eru brúttó: göt og úrtökur eru ekki dregin frá. Boltar, rær, skífur og suður eru ekki í stálþyngdinni.
:::

## Sækja hann

Veldu {{ui:Sækja CSV}} í flipanum, eða {{ui:Efnislisti}} í hópnum {{ui:Útkoma}}. Skráin `<name> BOM.csv` geymir allar þrjár töflurnar hverja á eftir annarri, hverja undir sínum titli, með auðri línu á milli. Hana má opna í hvaða töflureikni sem er.

## Athugaðu áður en þú sendir

1. Opnaðu flipann {{ui:Vandamál}} og hreinsaðu hverja línu. Tenging sem ekki náðist að smíða bætir engri plötu, götum eða boltum við, þannig að efnislistinn yrði ófullkominn.
2. Leitaðu að merkingum sem þú bjóst ekki við. Tveir bitar sem þú heldur að séu eins en með mismunandi merkingar eru yfirleitt ólíkir í gati, úrtöku eða skurðlengd; veldu hvorn og berðu þá saman.
3. Vistaðu líkanið og gerðu síðan alla útflutninga úr því vistaða ástandi.
