---
title: Mga check sa foundation
summary: Suriin ang footings, combined footings at mats sa lupang inilalarawan mo, settlement, flexible mat sa springs, pile groups at retaining walls. Tulong para sa engineer na susuri.
keywords: foundation, footing, combined footing, mat, settlement, subgrade modulus, springs, edge column, corner column, bearing, sliding, overturning, punching, one-way shear, flexure, development, minimum steel, pile group, retaining wall, ACI 318-19
from: 6961ad52
---

:::warning
Mga unang antas na check ito para sa engineer na susuri, hindi sign-off ng design. Ang pinapayagang bearing pressure at friction coefficient ay sa iyo: hindi alam ng DetailCraft ang iyong lupa.
:::

Sinusuri ng tab na {{ui:Foundation}} ang footings sa model laban sa column loads na ibinigay mo sa mga ito.

## Ilarawan ang lupa

I-type ang {{ui:Pinapayagang bearing pressure}} at ang {{ui:Koepisyente ng base friction}}. Pareho silang nagsisimula sa 0, ibig sabihin hindi pa nailalagay: ipapakita ng check ang pressure bilang tala at hindi sasabihing pumasa. Para sa settlement, i-type ang modulus ng lupa na {{ui:Es}} (MPa), ang Poisson's ratio nito at ang settlement na pinapayagan mo (25 mm bilang panimula). Para sa flexible mat, i-type ang subgrade modulus na {{ui:ks}}. Nandoon din ang fill sa ibabaw ng footing, ang unit weight ng lupa, ang factors of safety para sa sliding at overturning (1.5 bilang panimula) at ang yield strength ng bar.

## Ibigay ang mga load

Bawat footing ay may listahan ng column loads. Gamitin ang {{ui:Magdagdag ng column load}} at punan ang service row (para sa bearing, sliding at overturning) at ang factored row (para sa strength checks): ang vertical load P pababa, ang horizontal forces Vx at Vy sa itaas ng footing, ang moments Mx at My, ang lugar ng column sa footing at ang laki nito.

O patakbuhin ang tab na {{ui:Analysis}} at pindutin ang {{ui:Kunin ang column load mula sa Analysis}}: bawat support na nasa footing ay magiging column load, mula sa service at factored sets na pipiliin mo. Ang positibong My ay nagdadagdag ng load sa +x side ng footing; ang positibong Mx ay nagdadagdag ng load sa −y side.

## Ano ang sinusuri

Mula sa service loads, kasama ang sariling bigat ng footing at ang fill:

- **Bearing:** ang pressure sa ilalim ng rigid footing. Sa loob ng middle third, nakadikit ang buong base; sa labas nito, bahagi ng base ay umaangat at mas mataas ang peak. Pumapalya ang resultant na nasa labas ng base.
- **Sliding:** friction na pinarami sa vertical load laban sa horizontal force.
- **Overturning:** ang distansya ng resultant mula sa gilid.
- **Settlement:** ang elastic settlement ng average pressure sa half-space gamit ang modulus na ibinigay mo, sa gitna at sa isang sulok (solusyon nina Timoshenko at Goodier para sa flexible rectangle), laban sa limit. Ito ay upper bound para sa stiff footing at hindi kasama ang soil layer na limitado ang lalim, relief ng hinukay na lupa, at consolidation. Kapag walang modulus, ipinapakita nitong pressure bilang tala.

Mula sa factored column loads lamang (ACI 318-19):

- **Flexure** sa mukha ng column, may minimum steel (0.0018 para sa 420 MPa bars) at ang mga bar na iginuhit mo.
- **One-way shear** sa d mula sa mukha.
- **Punching shear** sa d/2 sa paligid ng bawat column, kasama ang moment ng column. Para sa column malapit sa gilid, pinuputol ang critical section ng gilid ng footing (tatlong gilid sa gilid, dalawa sa sulok; ACI 318-19 22.6.4.1 at ang mas maliit na αs sa Table 22.6.5.2), at kasama sa moment sa sentro ng section ang paglilipat ng load.
- **Development** ng bars lampas sa mukha ng column, tuwid man o may hooks.
- **Lalim** sa itaas ng bottom bars (150 mm).

Ang combined footing o mat ay itinuturing na rigid, at ang shear at moment ay galing sa statics sa mga cut sa buong lapad.

## Flexible mat sa springs

Lagyan ng check ang {{ui:Suriin ang footing na ito bilang flexible mat sa springs}} kapag maraming columns ang dinadala ng footing at masyadong magaspang ang rigid footing. Nagiging plate ng four-node elements ang footing sa ibabaw ng springs (ang {{ui:ks}} na itinype mo, nakalagay sa mga node), at ikinakalat ang load ng bawat column sa mga node ng sarili nitong footprint. Ang ikalawang table ay nagbibigay ng pinakamalaking soil pressure at settlement (at ang pagkakaiba ng pinakamalaki at pinakamaliit), ang bending moment sa bawat direksyon kasama ang steel na kailangan nito, tension sa itaas laban sa lakas ng plain concrete (walang top bars ang footing), one-way shear sa d mula sa mga column, at punching sa sariling pressure ng springs. Pinipino ang mesh hanggang tatlong element ang lapad ng isang column; ang malaking mat ay tumatagal ng ilang segundo. Ang sariling bigat ng mat at ang lupang nasa ibabaw nito ay nagkakansela at hindi isinasama.

Ang bawat nabigong check ay nasa panel na {{ui:Mga problema}} kasama ang clause nito.

## Pile groups at retaining walls

{{ui:Magdagdag ng pile group}} ay naglalagay ng grid ng piles sa ilalim ng rigid cap: i-type ang load at moments at kung ano ang kayang dalhin ng isang pile sa compression at tension (mga numero ng pile design, hindi ng tab na ito). Ang reaction ng bawat pile ay P/n kasama ang bahagi nito sa moments (elastic method), at sinusuri ang pinakamalaking compression at anumang tension.

{{ui:Magdagdag ng retaining wall}} ay nagche-check ng cantilever wall sa level na backfill, bawat metro: Rankine active pressure, overturning sa paligid ng toe, sliding at base pressure. Hindi kasama ang passive pressure sa harap ng toe. Kayang patakbuhin ng iyong assistant ang parehong check gamit ang `pile_group_check` at `retaining_wall_check`.

Ang pile groups, walls at ang mat switch ay sine-save sa model file, at ang nabigong check ay nasa {{ui:Mga problema}}.
