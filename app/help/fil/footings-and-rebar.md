---
title: Maglagay ng footings na may rebar
summary: Maglagay ng rectangular pad footings na may bottom mat at starter bars, suriin ang mga ito, at i-download ang bending schedule.
keywords: footing, pad footing, foundation, rebar, reinforcement, bars, mat, starters, dowels, bending schedule, bar list, kongkreto, hooks, cover
from: 41a048be
---

Ang paksang ito ay tungkol sa rectangular pad footings. Nasa [Detalyehin ang reinforced concrete](topic:reinforced-concrete) ang beams, columns, slabs at walls. Bawat footing ay may bottom mat sa dalawang direksyon at, kung gusto mo, starter bars na nakausli paitaas mula rito. Ang bars ay US sizes #3 hanggang #11.

## Maglagay ng footing

1. Piliin ang {{ui:Plan}} at piliin ang level ng itaas ng footing.
2. Piliin ang {{ui:Footing}} sa grupong {{ui:Ilagay}}, o pindutin ang {{key:F}}.
3. Itakda ang footing sa panel na {{ui:Properties}} (tingnan sa ibaba), o iwanan ang mga default.
4. I-click ang intersection ng grid. Nakasentro rito ang footing at nasa level ang itaas nito. Halimbawa, sinasabi ng status bar: "Footing 2000 x 2000 x 600 sa ilalim ng A/1."

Maaari mo ring gamitin ang form na {{ui:Idagdag ayon sa grid}} sa ibaba ng panel.

Nakaguhit na transparent ang footing para makita mo ang mga bar nito, na nakaguhit bilang solid na tubes.

## Settings ng footing

| Field | Default | Mga tala |
|---|---|---|
| Length L (mm) | 2000 | Kasama ang x; 300 hanggang 50000 |
| Width B (mm) | 2000 | Kasama ang y; 300 hanggang 50000 |
| Depth H (mm) | 600 | 150 hanggang 10000 |
| Concrete | 4000 psi | Teksto, nakalimbag sa IFC export |

**Bottom mat**

| Field | Default | Mga tala |
|---|---|---|
| Long bars | #5 | Mga bar na tumatakbo kasama ang L, ang mas mababang layer |
| Spacing (mm) | 250 | Ang pinakamalaking spacing na pinapayagan; pantay na ikinakalat ang mga bar sa spacing na ito o mas malapit |
| Short bars | #5 | Mga bar na tumatakbo kasama ang B, nakalatag sa ibabaw ng long bars |
| Spacing (mm) | 250 | Gaya ng nasa itaas |
| Cover (mm) | 75 | Malinis na cover sa bawat mukha |
| End hooks | On | Pinapaliko ang magkabilang dulo ng bawat mat bar paitaas sa standard na 90° hook (shape U); ang Off ay nagbibigay ng straight bars (shape S) |

**Starter bars**

| Field | Default | Mga tala |
|---|---|---|
| Starter bars | On | Patayin para sa footing na walang starters |
| Bar | #6 | |
| Bars along L / Bars along B | 2 / 2 | Isang grid ng bars, nakasentro sa footing |
| Spacing along L / Spacing along B | 250 / 250 | Sa pagitan ng bar centers |
| Projection above top | 600 | Gaano kataas nakatayo ang bars sa itaas ng footing |
| Hook at the bottom | On | 90° hook na nakaturo palabas, nakapatong sa mat (shape L) |

Sa ilalim ng mga field, ipinapakita ng DetailCraft ang hook leg para sa long bars, halimbawa "Hook leg for #5: 254 mm out to out."

## Baguhin ang inilagay na footing

Piliin ang footing (i-click ang concrete nito na malayo sa anumang column, o isa sa mga bar nito). Makukuha mo ang parehong field kasama ang {{ui:Center x}}, {{ui:Center y}}, {{ui:Top z}} at {{ui:Pag-ikot (°)}}. Sa ilalim ng mga ito, may table na naglilista ng bars ng footing na ito kasama ang kanilang marks, bilang at haba, at ang concrete volume sa cubic meters.

Bawat pagbabago ay sinusuri bago ito panatilihin. Ang pagbabagong hindi maitatayo ay tinatanggihan at sinasabi ng status bar kung bakit, halimbawa "Walang natitirang espasyo para sa bars sa footing na ito dahil sa cover.", "Masyadong mababaw ang footing para sa dalawang layer ng bars sa loob ng cover." o "Hindi kasya ang starter bars sa loob ng footing na may 75 mm cover."

Ang mga pagbabagong maitatayo pero kailangang tingnan ay nakalista sa ilalim ng footing at sa tab na {{ui:Mga problema}}:

- "Ang #11 bars sa 59.6 mm ay nag-iiwan ng mas mababa sa 35.8 mm na malinis na puwang (ACI 318-19 25.2.1)." Ang malinis na puwang sa pagitan ng bars ay dapat hindi bababa sa diameter ng bar at hindi bababa sa 25.4 mm.
- "Kailangan ng #5 hooks ng 254 mm na lalim; 150 mm lang ang kasya sa loob ng cover." Pinuputol nang mas maikli ang hook legs para kasya, kaya hindi na sila standard hooks.
- "Pumapasok ang starter hooks sa cover."
- "Mas malapit ang starter bars kaysa sa minimum na malinis na spacing."

## Bar marks at bending schedule

Ang magkakaparehong bars (parehong size, shape at dimensions hanggang millimeter) ay nagbabahagi ng bar mark sa lahat ng footings. Isinusulat ang marks bilang `<bar number>F<n>`: 5F1, 5F2 para sa #5 bars, 6F1 para sa unang #6 bar, at iba pa. Ang mga footing na may parehong size, concrete, mat at starters ay nagbabahagi ng footing mark: F1, F2 …

1. Buksan ang tab na {{ui:Bending schedule}} sa ibaba. Bawat row ay isang bar mark: size, shape, dimensions A, B at C, bilang, cut length, total length, mass per meter, bigat ng bawat isa, total weight, at kung saan ginagamit ang bar.
2. Piliin ang {{ui:I-download ang CSV}} sa tab, o ang {{ui:Bending}} sa menu na {{ui:Higit pa}} ng grupong {{ui:Output}}, para sa `<name> bending schedule.csv`.

Ang shapes ay sariling code ng DetailCraft, hindi ng anumang standard: S straight, L isang bend, U dalawang bend. Ang dimensions ay out to out; ang cut length ay eksaktong haba ng centerline sa mga bend. Tingnan ang [Rebar reference](topic:rebar-reference).

## Ang hindi sinusuri ng DetailCraft

- Development at lap lengths, at kung sapat ang haba ng starter bars para sa column sa itaas.
- Ang bahagi ng aggregate-size sa panuntunan ng malinis na spacing (hindi nito alam ang mix).
- Anumang tungkol sa column o base plate sa itaas: magkahiwalay ang footings at steel.

Tingnan din ang [Mga hindi pa nagagawa](topic:not-built-yet).
