---
title: Maglagay ng column, beam at brace
summary: Pumili ng profile, materyal at posisyon, saka i-click ang mga intersection ng grid o i-type ang mga ito para maglagay ng steel member.
keywords: column, beam, brace, member, ilagay, profile, materyal, rotation, posisyon, offset, insert, idagdag ayon sa grid
from: d6db0dc1
---

Inilalagay ang mga member sa mga intersection ng grid: column sa isa, beam o brace sa pagitan ng dalawa. Itakda muna ang [mga grid at level](topic:grids-and-levels).

## Pumili ng tool at mga opsyon

1. Piliin ang {{ui:Column}} ({{key:C}}), {{ui:Beam}} ({{key:B}}) o {{ui:Brace}} ({{key:R}}) sa grupong {{ui:Ilagay}}.
2. Nagiging "Maglagay ng column" (o beam, o brace) ang panel na {{ui:Properties}} sa kanan, at ipinapakita nito ang mga opsyon para sa susunod na member:
   - {{ui:Profile}}: pumili mula sa listahan. Nakapangkat ayon sa catalog ang mga sukat (W shapes, Channels, Angles, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS, at ang sarili mong Custom profiles). Tingnan ang [Katalogo ng profile](topic:profile-catalog).
   - {{ui:Materyal}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 o S355.
   - {{ui:Posisyon}}: kung nasaan ang section sa linya sa pagitan ng dalawang punto: {{ui:Itaas ng steel sa linya}}, {{ui:Nakasentro sa linya}} o {{ui:Ibaba sa linya}}.
   - {{ui:Pag-ikot (°)}}: iniikot ang section sa sarili nitong axis ng member.
   - {{ui:Hanggang}} (column lang): {{ui:Ang susunod na level sa itaas}}, o pangalan ng level.
3. Sa ilalim ng mga opsyon, ipinapakita ng kahon na {{ui:Profile}} ang mga dimensyon, area, mass bawat metro ng napiling section, at ang catalog kung saan ito galing.

Ang mga default ay W12x50 sa A992 para sa column (nakasentro), W16x26 sa A992 para sa beam (itaas ng steel sa linya), at HSS6x6x1/4 sa A500 Gr C para sa brace (nakasentro). Mananatili ang mga opsyon hanggang baguhin mo ang mga ito.

## Maglagay sa pamamagitan ng pag-click

### Column

1. Piliin ang {{ui:Plan}} at piliin ang level kung saan magsisimula ang column.
2. Piliin ang {{ui:Column}}.
3. Ilapit ang pointer sa isang intersection. Nagliliwanag ang pinakamalapit na tuldok at pinangalanan ito ng status bar.
4. I-click. Tumatakbo ang column mula sa level na iyon hanggang sa susunod na level sa itaas (o sa level na {{ui:Hanggang}}). Halimbawa, sinasabi ng status bar ang "Column W12x50 sa A/1, Level 1 hanggang Level 2."
5. Magpatuloy sa pag-click para maglagay pa. Pindutin ang {{key:Esc}} kapag tapos ka na.

Kung walang level sa itaas ng na-click mo, sinasabi ng status bar: "Walang level sa itaas ng Level 2 na aabutin ng column. Magdagdag muna ng level."

### Beam

1. Piliin ang {{ui:Plan}} at piliin ang level ng beam.
2. Piliin ang {{ui:Beam}}.
3. I-click ang unang intersection. Sinasabi ng status bar: "Mula sa A/1 sa Level 2. I-click na ang kabilang dulo (kinakansela ng Esc)." May dashed na linyang sumusunod sa pointer.
4. I-click ang ikalawang intersection. Lumilitaw ang beam.
5. I-click muli para simulan ang susunod na beam, o pindutin ang {{key:Esc}}.

Ang {{key:Esc}} pagkatapos ng unang click ay kinakansela lang ang puntong iyon; ang pangalawang {{key:Esc}} ay itinatabi ang tool.

### Brace

Tumatakbo ang brace sa pagitan ng dalawang intersection sa magkaibang level, kaya pinakamadali ito sa {{ui:Elevation}}.

1. Piliin ang {{ui:Elevation}} at piliin ang letrang grid line kung nasaan ang brace.
2. Piliin ang {{ui:Brace}}.
3. I-click ang ibabang dulo, saka ang itaas na dulo.

Mayroong elevation ang mga letrang grid line lang. Para sa brace sa frame sa kahabaan ng numbered line (mula A hanggang B), gamitin ang {{ui:3D}} o ang form na {{ui:Idagdag ayon sa grid}} sa ibaba.

:::touch
Sa touch screen, i-tap malapit sa intersection: pinipili ng tap ang pinakamalapit na tuldok sa maikling distansya, at walang mangyayari kung walang tuldok sa malapit. Walang highlight bago ka mag-tap, kaya suriin ang mensahe sa status bar pagkatapos ng bawat tap. Ang one-finger drag ay umiikot o nagpa-pan sa view sa halip na maglagay.
:::

## Maglagay gamit ang grid, nang walang pag-click

Bawat tool sa paglalagay ay may form na {{ui:Idagdag ayon sa grid}} sa ibaba ng panel na {{ui:Properties}}. Gumagana ito gamit lang ang keyboard at hindi kailangan ang 3D view.

1. Piliin ang tool, halimbawa {{ui:Beam}}.
2. Sa {{ui:Idagdag ayon sa grid}}, piliin ang {{ui:Mula sa grid (letra)}}, {{ui:Mula sa grid (numero)}} at {{ui:Mula sa level}}.
3. Piliin ang {{ui:Hanggang sa grid (letra)}}, {{ui:Hanggang sa grid (numero)}} at {{ui:Hanggang sa level}}.
4. Piliin ang {{ui:Idagdag}}.

Para sa column o footing, iisang punto lang ang form: {{ui:Grid (letra)}}, {{ui:Grid (numero)}} at {{ui:Level}}.

## Baguhin ang member pagkatapos ilagay

1. Pindutin ang {{key:Esc}} (o piliin ang {{ui:Piliin}}, {{key:V}}) at i-click ang member.
2. Sa panel na {{ui:Properties}}, baguhin ang {{ui:Pangalan}}, {{ui:Profile}}, {{ui:Materyal}}, {{ui:Posisyon}} o {{ui:Pag-ikot (°)}}.
3. Para ilipat ito, i-edit ang x, y at z ng {{ui:Simula}} o {{ui:Dulo}} sa ilalim ng {{ui:Mga dulo (x, y, z mm)}}. Makikita sa ilalim ng bawat dulo ang pangalan ng grid nito, o ang mga coordinate nito kapag wala ito sa grid.

Isang undo step ang bawat pagbabago. Sa ilalim ng mga field, makikita mo ang {{ui:Marka ng part}}, {{ui:Assembly}}, {{ui:Haba ng putol}}, {{ui:Timbang}} ng member (gross: hindi ibinabawas ang mga butas at cope) at kung aling catalog galing ang profile.

Hindi pa maaaring i-drag o i-array ang mga member. Para gumawa ng katulad na member, kopyahin at i-paste ito, o i-duplicate ({{key:Mod+D}}): tingnan ang [Kopyahin, i-paste at i-duplicate](topic:copy-paste).

## Burahin ang member

Piliin ito at pindutin ang {{key:Delete}} o {{key:Backspace}}, o piliin ang {{ui:Burahin}}. Mabubura rin ang mga connection nito. Ibabalik ng {{key:Mod+Z}} ang lahat.

## Mga dapat malaman

- **Aling direksyon nakaharap ang column.** Sa {{ui:Pag-ikot (°)}} 0, nakaharap sa x ang mga flange ng column, papunta sa mga katabing numbered grid line. Ang beam mula grid 1 hanggang grid 2 ay nakakabit sa flange; ang beam mula A hanggang B ay nakakabit sa web. Nakalalagay lang ang end plates sa flanges, kaya kung tumatakbo ang beams mo mula A hanggang B, bigyan ng rotation na 90 ang mga column na iyon.
- **Nakabitin sa ibaba ng level ang mga beam** sa default na {{ui:Itaas ng steel sa linya}}. Piliin ang {{ui:Nakasentro sa linya}} kung ang mga level mo ay centerline ng member.
- **Level hanggang level tumatakbo ang mga column.** Para sa column na dumadaan sa dalawang palapag, itakda ang {{ui:Hanggang}} sa mas mataas na level.
- **Pinapayagan ang sloped na beams** (pumili ng dulo sa magkaibang level), pero hindi pa nagagawa ang end plates sa mga ito.

Susunod: [Ikonekta ang mga beam sa column gamit ang end plates](topic:end-plates).
