---
title: Magdagdag ng base plate at anchor rod
summary: Maglagay ng welded na base plate na may apat na anchor rod sa ilalim ng column, itakda ang mga sukat nito, at kopyahin ito sa bawat katulad na column.
keywords: base plate, baseplate, anchor rods, anchor bolts, holding down bolts, base ng column, foundation bolts, katulad
from: 619ebc64
---

Naglalagay ang base plate connection ng plato sa ilalim ng column, pinuputol ang column nang mas maikli ng kapal ng plato, dinidikitan ang dalawa, at nagdaragdag ng apat na anchor rod na dumadaan sa mga butas ng plato.

:::warning
Ang mga sukat ay mga panimulang halaga, hindi design. Hindi sinusuri ng DetailCraft ang bearing, lakas ng rod o embedment.
:::

## Magdagdag ng base plate

1. Piliin ang tool na {{ui:Piliin}} ({{key:V}}) at i-click ang isang column. Dapat itong patayo.
2. Piliin ang {{ui:Base plate}} sa grupong {{ui:Connect}}, o ang {{ui:Magdagdag ng base plate}} sa panel na {{ui:Properties}}.
3. Sinasabi ng status bar: "Naidagdag ang base plate na may apat na anchor rod." Napili na ang bagong connection.

Isang base plate lang ang maaaring mayroon ang column. Kung mayroon na, sinasabi ng status bar: "May base plate na ang column na ito."

## Baguhin ito

Piliin ang base plate (i-click ang plato o isang rod). Sa ilalim ng {{ui:Plato, bolts and weld (mm)}}:

| Setting | Default | Ano ang ginagawa |
|---|---|---|
| Plate thickness | 25 | Pinaiikli nito ang column ng ganito kalaki |
| Plate length | 450 | Kasama ang lalim ng column |
| Plate width | 400 | Kabila ng column |
| Rod diameter | 20 | Laki ng anchor rod |
| Hole diameter | 33 | Butas sa plato |
| Bolt grade | F1554 Gr 36 | Grade ng rod, bilang teksto |
| Rod spacing (along depth) | 350 | Pagitan ng gitna ng mga rod, kasama ang haba ng plato |
| Rod spacing (across) | 300 | Pagitan ng gitna ng mga rod, kabila |
| Rod projection above plate | 100 | Mula sa itaas ng plato hanggang sa itaas ng rod |
| Rod embedment below plate | 450 | Mula sa ilalim ng plato pababa sa kongkreto |
| Fillet weld size | 8 | Sa paligid ng base ng column |
| Plate material | A36 | Teksto |
| Grout gap | 0 | Pagitan ng itaas ng kongkreto at ilalim ng plato |
| Stiffeners | None | Piliin ang None, 2 (kasabay ng web) o 4 (kasama rin ang kabila); tingnan sa ibaba |
| Stiffener thickness, height | 12, 150 | |
| Shear lug depth | 0 | Gaano kalayo bumababa ang lug sa ilalim ng plato; 0 = walang lug |
| Shear lug thickness, width | 25, 150 | |
| Plate washers | None | Sa bawat rod, o wala |
| Washer size, thickness | 0, 0 | 0 = ang pinakamaliit mula sa AISC Design Guide 1 para sa rod |

Haba ng rod = embedment + grout gap + kapal ng plato + projection. Sa mga default, 575 mm iyon.

## Mga detalye ng base: grout, stiffeners, shear lug, washers

Naka-off ang lahat ng apat sa bagong base plate, at sa mga base plate mula sa model na ginawa bago ang DetailCraft 0.4.

- **Grout gap.** Nakalagay ang plato nang ganitong layo sa itaas ng kongkreto, at humahaba ang mga rod nang ganoon din. Iminumungkahi ng AISC Design Guide 1 (2.10) ang 1 in. sa finished floor at 1½ hanggang 2 in. sa footing o pier; mas malaki para sa malalaking plato at sa mga plato na may shear lug.
- **Stiffeners.** Mga patayong plato na dinikitan sa column at sa plato, mula sa mukha ng column palabas hanggang sa gilid ng plato, bilang mga parihaba (wala pang chamfer o taper). Nakatayo ang **2** kasabay ng web, lampas sa bawat flange; dinadagdagan ng **4** ng dalawa na patayo sa web, sa pagitan ng mga flange, palabas hanggang sa gilid ng plato. Sa tube column, nakatayo sila sa gitna ng bawat mukha. Bawat isa ay dinidikitan sa column at sa plato sa magkabilang gilid.
- **Shear lug.** Plato na dinidikitan sa buong paligid, nasa ilalim ng base plate, nakasentro, kasabay ng lalim ng column. Nagbababala ang DetailCraft kung hindi ito mas malalim kaysa sa grout gap. Hindi nito pinuputol ang puwang sa footing; kaya iniiwan ng [pagsusuri ng clash](topic:clash-check) ang lug at footing sa labas.
- **Plate washers.** Isang parisukat na plate washer sa bawat rod, nakapatong sa base plate, nakalista sa assembly ng column bilang maluwag (ipinapadala kasama ng column, hindi dinidikitan: Design Guide 1, 2.6). Kapag 0 ang laki at kapal, kinukuha ng DetailCraft ang pinakamaliit na washer mula sa AISC Design Guide 1, 2nd ed., Table 2.3 para sa rod; ang metric rod ay kumukuha ng susunod na laki sa inch (ang M20 rod ay nakakakuha ng 7/8 in. na hanay: 2½ in. × 5/16 in.). Ipinapakita ng properties panel ang sukat na ginamit. Ang butas ng washer ay diameter ng rod + 1/16 in.: pagpili ito ng DetailCraft, hindi ibinibigay ng table. Nagbababala ang DetailCraft kapag maaaring hindi lumabas nang sapat ang mga rod para sa washer at nut (projection na mas maliit sa kapal ng washer + diameter ng rod).

Inirerekomenda rin ng Design Guide 1, Table 2.3 ang butas ng rod sa plato: 1-5/16 in. para sa rod na ¾ in., 1-9/16 in. para sa ⅞ in., 1-13/16 in. para sa 1 in. Hindi binabago ng DetailCraft ang laki ng iyong butas.

Lumalabas din ang mga babala kapag mas malapit sa 1.2 × diameter ng butas ang mga butas ng rod sa gilid ng plato, kapag nasa loob ng outline ng column ang mga rod, o kapag mas maliit sa column ang plato.

## Kopyahin sa mga katulad na column

1. Piliin ang base plate.
2. Piliin ang {{ui:Ilapat sa katulad (n)}}, o ang {{ui:Katulad}} sa menu na {{ui:Higit pa}} ng grupong {{ui:Connect}}.
3. Bawat patayong column na may parehong profile, walang base plate, at hindi nakatayo sa ibang column ay makakakuha ng kopya.

## Base plate at mga footing

Hindi kailangan ng base plate ng footing, at hindi alam ng footing ang base plate sa ibabaw nito: hindi nakatali ang mga anchor rod sa mga bar ng footing. Maglagay ng footing gamit ang {{ui:Footing}}; tingnan ang [Maglagay ng footing na may rebar](topic:footings-and-rebar).
