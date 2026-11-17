---
title: Märgiste kontrollimine ja materjalinimekiri
summary: Loe iga detaili ja koostemärgist, kontrolli materjalinimekirja ning laadi see alla CSV-failina.
keywords: märgised, nummerdamine, detailimärgis, koostemärgis, tükimärgis, bom, materjalinimekiri, kaalud, poltide loend, csv
from: caa2ee80
---

DetailCraft märgistab mudeli ise. Nummerdamiskäsku ei ole ega ole midagi käivitada: iga muudatuse järel arvutab see välja, millised detailid on sama terastükk, ja annab neile ühe märgise.

## Kus märgised kuvatakse

- Loend {{ui:Detailimärgised}} paneelil {{ui:Mudel}}: iga märgis koos profiili, pikkuse ja arvuga. Klõpsa ühel, et valida esimene sellise märgisega detail.
- Valitud elemendi {{ui:Omadused}} paneel (ja vasakpoolse paneeli **Detailimärgised** loend): {{ui:Detailimärgis}} ja {{ui:Koost}}. Paneeli pealkirjas on samuti märgis, näiteks „Tala b1“.
- Vahekaart {{ui:Materjalinimekiri}}, CSV, NC-failide nimed, tööjoonised ja IFC-eksport (elemendi sildina).

## Kuidas detaile märgistatakse

- **Detailimärgised:** c postidele, b taladele, br diagonaalidele, st trepikaartele, p plaatidele (sh otsaplaadid ja aluseplaadid). Seejärel number: c1, c2, b1, p1 … Kui detailid asuvad rohkem kui ühes etapis, tuleb ette etapi number, näiteks 2-b1.
- **Koostemärgised:** C, B, BR või P. Koost on põhielement ja selle külge keevitatud plaadid, näiteks tala koos kahe otsaplaadiga või post koos aluseplaadiga.
- Kaks detaili saavad ühe märgise, kui neil on sama profiil, materjal ja lõikepikkus ning samad avad ja väljalõiked, kõik 1 mm täpsusega, isegi kui üks on teise suhtes otsast otsa või pea alla pööratud.
- Nummerdamine käib kõigepealt postidest, siis taladest, diagonaalidest ja plaatidest; igas rühmas profiili nime järgi, seejärel pikimast.

Täielikud reeglid, sh milliseid pöördeid U-profiilide ja nurkraudade puhul arvestatakse: [Märgiste reeglid](topic:mark-rules).

:::warning
Märgised arvutatakse iga muudatuse järel uuesti, seega võivad need ümber nummerdada. Detaili lisamine, profiili muutmine või ava lisamine võib muuta b3 märgise b4-ks. Pea märgiseid lõplikuks alles siis, kui mudel on valmis, ning tee materjalinimekiri, NC-failid ja tööjoonised samast salvestatud mudelist.
:::

## Materjalinimekirja lugemine

Ava alt vahekaart {{ui:Materjalinimekiri}}. Sellel on kolm tabelit.

**Detailid**, pealkirjas koguterase kaal:

| Veerg | Tähendus |
|---|---|
| Detailimärgis | Klõpsa, et valida esimene sellise märgisega detail |
| Tüüp | tala, post, diagonaal, trepikaar või plaat |
| Profiil | Näiteks W16x26 või PL20x180 |
| Materjal | Sinu määratud klass |
| Pikkus (mm) | Lõikepikkus pärast ühendusi |
| Arv | Mitu |
| Ühikukaal (kg) | Profiili mass meetri kohta × pikkus |
| Kogukaal (kg) | Ühikukaal × arv |

Viimane rida annab koguarvu ja -kaalu.

**Koosted:** iga koostemärgis, selle põhidetail, kõik selle detailid (näiteks „b1 + p1 + p1“), arv, ühikukaal ja kogukaal.

**Poldid ja ankruvardad:** rühmitatud liigi, läbimõõdu, pikkuse ja klassi järgi, koos arvuga.

:::note
Kaalud on brutokaalud: avasid ja väljalõikeid ei arvestata maha. Poldid, mutrid, saibad ja keevised ei ole terase kaalus.
:::

## Laadi alla

Vali vahekaardil {{ui:Laadi alla CSV}} või rühmas {{ui:Väljund}} nupp {{ui:BOM}}. Fail `<name> BOM.csv` sisaldab kolme tabelit järjest, igaüks oma pealkirja all, tühja rea vahel. See avaneb mis tahes tabelarvutusprogrammis.

## Kontrolli enne saatmist

1. Ava vahekaart {{ui:Probleemid}} ja kõrvalda iga rida. Ühendus, mida ei saanud ehitada, ei lisa plaate, avasid ega polte, seega jääks materjalinimekiri puudulikuks.
2. Otsi märgiseid, mida ootasid. Kaks tala, mida pead samaks, aga millel on erinevad märgised, erinevad tavaliselt augu, väljalõike või lõikepikkuse poolest; vali kumbki ja võrdle.
3. Salvesta mudel ja tee kõik eksportid sellest salvestatud olekust.
