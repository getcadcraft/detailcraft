---
title: Pumili sa pamamagitan ng window, ilipat, i-rotate, i-mirror, baguhin ang marami
summary: Mag-drag ng window para pumili, mag-drag ng napiling part para ilipat ang mga ito, ilipat, i-rotate o i-mirror ang pinili (o ang kopya nito), o baguhin ang profile, materyal, posisyon o rotation ng maraming member nang sabay.
keywords: lasso, fence, freehand selection, drag, drag and drop, ilipat sa pag-drag, snap, window, crossing, box select, drag select, pumili ng marami, move, rotate, mirror, flip, copy, baguhin ang marami, ilang member, profile, material, position, rotation, varies, grid line
from: 50b16f9a
---

Bawat isa sa mga ito ay iisang undo step: isang {{key:Mod+Z}} lang ang bumabawi sa lahat.

## Pumili gamit ang window

- Sa {{ui:Plan}} at {{ui:Elevation}}, mag-drag gamit ang kaliwang button mula sa walang laman na lugar. Sa {{ui:3D}}, pindutin nang matagal ang {{key:Shift}} at mag-drag (ang simpleng drag ay umiikot sa model).
- Mag-drag **pakanan** para sa window: kinukuha nito ang lahat ng nasa loob nang buo, iginuguhit na may solid na gilid.
- Mag-drag **pakaliwa** para sa crossing window: kinukuha nito ang lahat ng hinahawakan nito, iginuguhit na may dashed na gilid.
- Pindutin ang {{key:Shift}} habang sinisimulan ang drag para idagdag sa pinili sa halip na palitan ito.
- Ang plan o elevation ay nag-aalok lamang ng ipinapakita nito: ang mga part na naputol sa itaas ng plan, o higit sa 1 m mula sa grid line ng elevation, ay hindi napipili.
- Binibitawan ng {{key:Esc}} habang nagda-drag ang window.

### Lasso

Piliin ang **Lasso** sa ilalim ng {{ui:Pag-drag para pumili}} sa [mga setting ng DetailCraft](topic:settings), at ang parehong drag ay gumuguhit ng freehand na linya sa halip na parihaba.

- Ang unang galaw nito pagilid ang nagpapasya kung paano ito pumipili: **pakanan**, kung ano ang nasa loob nang buo (solid na linya); **pakaliwa**, kung ano ang hinahawakan nito (dashed).
- Pindutin ang {{key:Space}} habang nagda-drag para lumipat sa pagitan ng loob, paghawak, at **fence**: isang bukas na linya na kumukuha ng anumang tinatawid nito (dotted, orange).
- Gumagana ang {{key:Shift}} para magdagdag at ang {{key:Esc}} para bitawan, gaya ng sa window.

:::touch
Sa touch screen, isang daliri ang nagpa-pan sa plan at elevation gaya ng dati; pumili ng part sa pamamagitan ng pag-tap sa mga ito.
:::

Sa {{ui:Plan}} at {{ui:Elevation}}, mag-pan gamit ang kanan o gitnang button habang nakabukas ang tool na {{ui:Piliin}}.

## I-drag ang mga part para ilipat ang mga ito

1. Piliin muna ang mga part (click, {{key:Shift}}+click o window).
2. Pindutin ang isa sa mga napiling part at mag-drag. Ililipat ang buong pinili; ipinapakita ng dashed na outline kung saan ito pupunta.
3. Bitawan para ilagay. Ibinabalik ng {{key:Esc}} bago mo bitawan ang lahat.

- Sa {{ui:3D}} at {{ui:Plan}}, gumagalaw ang mga part sa kabila ng level. Pindutin nang matagal ang {{key:Mod}} habang sinisimulan ang drag sa {{ui:3D}} para ilipat ang mga ito pataas at pababa.
- Sa {{ui:Elevation}}, gumagalaw sila sa loob ng elevation: sa kahabaan ng grid line at pataas at pababa.
- Dumidikit ang part na hawak mo sa intersection ng grid kapag nasa loob ng ilang pixel ang dulo nito mula rito (umiilaw ang intersection at binabanggit ito ng status bar). Sa iba, ang galaw ay nasa 10 mm na hakbang.
- Ang pagpindot sa part na hindi napili ay umiikot o nagpa-pan pa rin sa view, kaya hindi kailanman aksidenteng nagagalaw ang isang bagay sa pag-drag.
- Iisang undo step ang drag, gaya ng {{ui:Ilipat}}. Sumusunod ang mga connection sa kanilang member.

## Baguhin ang property ng maraming member

Pumili ng dalawa o higit pang member. Sa ilalim ng **Baguhin sa lahat ng ito** sa panel na {{ui:Properties}}:

- {{ui:Profile}}, {{ui:Posisyon}}: para sa mga biga, column at brace sa kanila.
- {{ui:Kapal ng plato (mm)}} at {{ui:Lapad ng plato (mm)}}: para sa mga plato.
- {{ui:Materyal}} at {{ui:Pag-ikot (°)}}: para sa lahat.

Nagpapakita ng **Nag-iiba** ang field kapag hindi magkasundo ang mga member. Pumili o mag-type ng halaga at kukunin ito ng bawat member na sakop nito; sinasabi ng status bar kung ilan ang nabago at ilan ang nanatili sa sarili nilang halaga.

Tumatanggap din ng kalkulasyon ang mga number field sa panel na {{ui:Properties}}: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Tinatanggihan ang kalkulasyong hindi mabasa, at sinasabi ng status bar kung saan ito nagkamali.

## Ilipat, i-rotate o i-mirror

Pumili ng member at footing (gagana rin ang isa lang), pagkatapos gamitin ang **Ilipat, i-rotate, i-mirror** sa panel na {{ui:Properties}}. Hindi inililipat nang mag-isa ang mga connection: sumusunod sila sa kanilang member. Kung ililipat mo ang biga pero hindi ang column nito, sinasabi ng status bar kung ilang connection na ang nagdurugtong sa gumalaw na member sa isang nanatili, at sinasabi ng [Mga problema](topic:troubleshooting) kung hindi na sila magkasya.

- **Ilipat:** i-type ang x, y at z sa milimetro at piliin ang {{ui:Ilipat}}. O piliin ang {{ui:Pumili ng dalawang punto}} (o pindutin ang {{key:M}}): i-click ang intersection ng grid na pagmumulan, pagkatapos ang patutunguhan. Sinusundan ng dashed na outline ang pointer.
- **I-rotate sa plan:** i-type ang anggulo (counter-clockwise, tingnan mula sa itaas) at piliin kung paikutin sa paligid ng: gitna ng pinili, o intersection ng grid. Umiikot ang column kasama ng frame.
- **Mirror:** pumili ng grid line. Ang mirror image ay ang parehong profile na nakabaligtad: pinananatili ng I-shape ang mga flange nito, ang channel ay humaharap sa kabilang direksyon (nagpapalitan ang itaas at ibaba nito), at kasama ng part ang mga butas at copes.
- Lagyan ng tsek ang **Panatilihin ang orihinal (gumawa ng kopya)** para iwan ang pinili sa lugar nito at ilipat, i-rotate o i-mirror ang kopya. Kasama ang mga connection nito kapag naka-on ang {{ui:Kopyahin ang end plates at base plates kasama ng kanilang member}} sa [mga setting ng DetailCraft](topic:settings).

Umiikot ang rotation sa paligid ng patayong linya at nasa patayong eroplano ang mirroring, kaya nananatiling pahalang ang mga level at nakatayo nang tuwid ang mga footing.
