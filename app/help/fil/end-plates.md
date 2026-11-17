---
title: Ikonekta ang mga beam sa column gamit ang end plate
summary: Magdagdag ng bolted na end plate kung saan nagtatagpo ang beam at ang flange o web ng column, itakda ang plato, bolt at weld, at kopyahin ang connection sa bawat katulad na joint.
keywords: end plate, endplate, moment connection, bolted connection, joint, bolts, weld, extended end plate, flush, katulad, kopyahin ang connection, component
from: 21e028b2
---

Nagwe-weld ang end plate connection ng isang plato sa dulo ng beam at binobolt ito sa flange o web ng column. Inilalagay ng DetailCraft ang plato, pinuputol pabalik ang beam, binabarena ang magkatapat na butas sa plato at sa flange ng column, idinadagdag ang mga bolt at weld, at tinitingnan ang edge distance at spacing.

:::warning
Hindi nagdidisenyo ng mga connection ang DetailCraft. Mga panimulang halaga ang mga setting para baguhin mo; walang tumitingin sa lakas. Ang mga babala sa edge at spacing ay gumagamit ng pinakamababang halaga ng EN 1993-1-8 Table 3.3, na maaaring iba sa mga patakarang sinusunod mo.
:::

## Ano ang kaya nitong ikonekta

- Isang **level** na beam (magkapantay ang taas ng dalawang dulo), tuwid (rotation 0), na may I-shape na profile.
- Papasok sa **flange** o **web** ng isang **patayong** I-shape column, patayo rito.
- Ang dulo ng beam ay dapat nasa linya ng column, nasa pagitan ng ilalim at tuktok ng column.

Tinatanggihan ang mga skewed o sloped na beam at ang mga seksyong hindi I, na may dahilan: gamitin ang [shear tab](topic:shear-tabs) para sa mga iyon. Sa web, dapat magkasya ang plato at ang flange ng beam sa pagitan ng mga flange ng column; binabalaan ka ng DetailCraft kapag hindi.

:::tip
Sa rotation 0, nakaharap ang mga flange ng column sa direksyon ng numerong grid (x). Ang beam na tumatakbo mula A papuntang B ay tumatama sa web, at bibigyan ito ng end plate sa web.
:::

## Magdagdag ng end plate sa beam

1. Piliin ang {{ui:Select}} ({{key:V}}) at i-click ang beam.
2. Piliin ang {{ui:End plates}} sa pangkat na {{ui:Connect}}, o ang {{ui:Add end plates}} sa panel na {{ui:Properties}}.
3. Bawat malayang dulo ng beam na tumatama nang patayo sa flange o web ng column ay binibigyan ng plato. Sinasabi ng status bar ang "2 end plates added. Select one to change its plate, bolts and weld; Similar copies it to joints like it."
4. Ang unang bagong end plate ay napipili, at nasa panel na {{ui:Properties}} ang mga setting nito.

Kung walang mangyari, basahin ang status bar:

- "This beam does not end on a column line. End plates go where a beam end meets a vertical column." (Hindi nagtatapos ang beam na ito sa linya ng column. Inilalagay ang end plate kung saan nagtatagpo ang dulo ng beam at ang patayong column.)
- "This beam meets a column at an angle or slopes: end plates are built for square, level joints. Use Shear tabs." (Tumatama ang beam na ito sa column nang pahilis o may slope: ginawa ang end plate para sa patayo at pantay na joint. Gamitin ang Shear tabs.)
- "Both ends already have connections." (May connection na ang dalawang dulo.)

## Baguhin ang plato, bolt at weld

I-click ang end plate (o isa sa mga bolt nito) para piliin ang connection. Sa ilalim ng {{ui:Plate, bolts and weld (mm)}}:

| Setting | Default | Ano ang ginagawa nito |
|---|---|---|
| Plate thickness | 20 | Kapal ng plato; gaano rin kalayo pabalik naputol ang beam lampas sa flange |
| Plate width | 180 | Sa kabuuan ng joint |
| Extension above beam | 0 | Sa itaas ng top flange; ang higit sa 0 ay gumagawa ng extended end plate |
| Extension below beam | 0 | Sa ibaba ng bottom flange |
| Bolt diameter | 20 | Nominal na laki ng bolt |
| Hole diameter | 22 | Iyong clearance hole sa plato at sa flange ng column |
| Bolt grade | A325 | Text; nakalimbag sa bill of materials |
| Bolt rows | 4 | Mga hanay ng dalawang bolt, nakasentro sa taas ng plato |
| Row pitch | 75 | Patayong pagitan ng mga hanay |
| Gauge | 100 | Pahalang na pagitan ng dalawang bolt sa isang hanay |
| Bolt length allowance | 30 | Idinadagdag sa grip para sa nut, washer at thread; tingnan sa ibaba |
| Fillet weld size | 8 | Sa paligid ng dulo ng beam |
| Plate material | A36 | Text |

I-type ang bagong halaga at pindutin ang {{key:Enter}} o {{key:Tab}}. Agad na nag-a-update ang plato, mga butas, bolt at haba ng cut ng beam. Bawat pagbabago ay isang undo step.

Sa ilalim ng mga setting, makikita mo ang nagagawa ng connection:

- {{ui:Bolts}}: halimbawa "8 × 20 × 70 A325 (grip 36.2)".
- {{ui:Weld}}: laki, saan, at haba nito.
- {{ui:Plate}}: laki nito at part mark nito.

### Paano kinukuwenta ang mga numero

- Pinuputol pabalik ang beam ng kalahati ng lalim ng column (sa web: kalahati ng kapal ng web) kasama ang kapal ng plato, para nakapatong ang plato sa mukha.
- Ang taas ng plato ay ang lalim ng beam kasama ang dalawang extension.
- Haba ng bolt = grip (kapal ng plato + kapal ng flange o web ng column) + allowance, binilog pataas sa susunod na 5 mm.
- Ang ipinapakitang haba ng weld ay ang perimeter ng seksyon ng beam.

### Mga babala

Nabubuo pa rin ang connection, pero lumalabas ang mga babalang ito sa ilalim nito at sa tab na {{ui:Problems}}:

- Mga hanay ng bolt o bolt na mas malapit sa gilid ng plato kaysa 1.2 × diameter ng butas.
- Row pitch na mas mababa sa 2.2 × diameter ng butas, o gauge na mas mababa sa 2.4 × diameter ng butas.
- Mga butas na tumatama sa web ng column o sa fillet nito, o lumalampas sa flange ng column.
- Plato na mas malapad sa flange ng column, o (sa web) mas malapad sa espasyo sa pagitan ng mga flange; mga flange ng beam na hindi magkasya sa pagitan nila.
- Hanay ng bolt na napakalapit sa flange ng beam, o gauge na masyadong masikip para sa web ng beam at sa weld nito.

## Kopyahin sa bawat katulad na joint

1. Piliin ang connection na naitakda mo na.
2. Piliin ang {{ui:Apply to similar (n)}} sa panel na {{ui:Properties}}, o ang {{ui:Similar}} sa menu na {{ui:More}} ng pangkat na {{ui:Connect}}. Ang numero sa loob ng bracket ay kung ilang joint ang makakakuha nito.
3. Bawat joint na may parehong profile ng beam at profile ng column, beam na pumapasok sa parehong uri ng mukha, at wala pang connection, ay makakakuha ng kopyang may parehong setting. Sinasabi ng status bar kung ilan.

Independent ang mga kopya: ang pagbabago sa isa pagkatapos ay hindi nagbabago sa iba. Hindi ginagalaw ang mga joint na mayroon nang connection; burahin muna ang mga iyon kung gusto mong palitan.

## Paggalaw at pagbura

Muling ginagawa ang mga connection mula sa kanilang setting sa tuwing nagbabago ang model, kaya ang paggalaw o pagbabago ng laki ng beam o column ay dinadala ang kanilang end plate. Kapag ang pagbabago ay nangangahulugang hindi na akma ang joint, nananatili ang connection sa model at sinasabi ng tab na {{ui:Problems}} kung bakit, halimbawa "The beam end is not on the column line any more."

Para burahin ang connection, piliin ito at pindutin ang {{key:Delete}}. Kapag binura ang beam o column, nabubura rin ang mga connection nito.

Susunod: [Magdagdag ng base plate at anchor rod](topic:base-plates).
