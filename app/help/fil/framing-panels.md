---
title: Timber at light-gauge na framing panels
summary: Mag-frame ng wall, floor at roof panels sa timber o light-gauge steel, kasama ang bawat piyesa, cut list, shop drawing at stock na bibilhin.
keywords: framing, timber, lumber, wood, light-gauge steel, cold-formed, stud, joist, rafter, header, king stud, jack stud, cripple, cut list, shop drawing, panel
from: 3e38ffb9
---

Ang tab na {{ui:Framing}} ay nag-f-frame ng mga panel na ilalarawan mo at nagbibigay ng kailangan ng framing crew at lumber yard. Sine-save ang mga panel sa model file.

:::warning
Ang sukat, spacing at headers ay sa iyo. Hindi tinitingnan ng DetailCraft kung kaya ng stud sa spacing na iyon ang wall na iyon, o kung kaya ng header na saklawin ang butas na iyon: para sa tables ng iyong code at sa iyong engineer iyon.
:::

## Magdagdag ng panel

Piliin ang {{ui:Magdagdag ng wall}}, {{ui:Magdagdag ng floor}} o {{ui:Magdagdag ng roof}}, saka punan ang dimensions sa millimeters, ang materyal (timber o light-gauge steel) at ang laki ng member. Ang sukat ng timber ay ang nominal na pangalan kasama ang dressed size nito (2×4 ay 38 × 89 mm). Ang steel studs ay pinangalanan ayon sa lalim at kapal, halimbawa `C92-1.2`.

## Walls

May bottom plate ang wall, isa o higit pang top plates (isang track para sa steel), end studs, studs sa spacing na ibibigay mo, at para sa bawat butas: dalawang king studs, dalawang jack studs, isang header ng sukat at plies na pipiliin mo, at cripples sa ibabaw ng header (at sa ilalim ng sill ng bintana). Ibigay sa bawat butas ang distansya nito mula sa kaliwang dulo, ang lapad nito, at ang itaas at ibaba ng rough opening na sinusukat mula sa subfloor; ang pinto ay may ibaba na 0.

## Floors at roofs

May joists sa kabuuan ng lapad nito sa kahabaan ng span nito ang floor, rim joists sa magkabilang dulo, at kung lagyan mo ng check, blocking sa gitna ng span. Ang roof panel ay gable: isang pares ng rafters sa spacing na ibibigay mo (kasama sa haba nila ang eaves overhang sa dalisdis) at isang ridge board.

## Ang makukuha mo

Ipinapakita ng bawat panel ang mga piyesa nito sa drawing na nasa tamang sukat, na may markang bawat piyesa, cut list ayon sa mark, at kabuuan. Ang table na {{ui:Stock na bibilhin}} ay pinagkakasya ang lahat ng cuts ng mga panel sa stock lengths, ang pinakamaikli na kumukuha sa cuts ng bawat bar. Isinusulat ng {{ui:I-save ang shop drawing (SVG)}} ang drawing; isinusulat ng button na {{ui:CSV}} ang bawat cut list at ang stock list.

## Ilagay ang panel sa model

Sa ilalim ng bawat panel, ibigay kung saan ito pupunta (x, y, z sa millimeters at ang anggulo) at pindutin ang {{ui:Ilagay bilang mga member}}: nagiging member ng model ang bawat piyesa, kasama ang dressed section ng sukat nito at ang bigat ng materyal (mga 500 kg/m³ para sa timber, steel para sa studs). Tumatakbo ang wall sa kahabaan ng anggulo mula sa ibabang kaliwang dulo nito, at ang ibaba nito ay nasa z; ang joists ng floor ay nakahiga na ang ilalim nito ay nasa z; ang gable elevation ng roof ay tumatakbo sa kahabaan ng anggulo na ang z ay nasa itaas ng wall plates. Ang bawat header ply ay isang member na magkatabi. Kapag pinindot itong muli, pinapalitan nito ang mga member na nailagay dati, at inaalis ang mga ito ng {{ui:Alisin ang mga inilagay na member}}; bawat isa ay isang undo step. Hindi isinasama ng Analysis ang mga member na ito: hindi sila steel frame members.

## PDF sheets

Nagse-save ang {{ui:PDF sheets}} ng isang A3 page para sa bawat panel: ang panel sa tamang sukat na may markang bawat piyesa, ang kabuuang dimensions, ang cut list at title strip.

Mga problema sa panel na {{ui:Mga problema}}: butas na masyadong malapit sa dulo ng wall o sa ibang butas, header na hindi kasya sa ilalim ng top plates, piyesang mas mahaba kaysa sa pinakamahabang stock.

Nakalista rin sa panel na {{ui:Mga problema}} ang **Interfaces (LOD 350)** para sa wall panels at concrete walls: butas na lumalampas sa dulo o sa itaas ng wall nito, dalawang butas na nagsasapawan, at butas sa concrete wall na mas malapad sa 1000 mm na walang trimmer bar. Payo ang mga ito, parehong panuntunang tinatakbo ng audit ng BimCraft; ang lapad ay panimulang halaga ng CadCraft, hindi standard.
