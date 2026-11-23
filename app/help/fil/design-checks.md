---
title: I-check ang mga steel member ayon sa design code
summary: Gumawa ng load combination mula sa ASCE 7 o EN 1990, i-check ang bawat steel I-shape ayon sa AISC 360 o EN 1993-1-1, at tingnan kung gaano karami ng kapasidad nito ang ginagamit ng bawat member. Isang tulong lamang hanggang may makapag-review na engineer.
keywords: design, design check, steel design, paggamit, utilization, kapasidad, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, load combination, LRFD, National Annex, buckling, lateral-torsional buckling, shear, bending, interaction, structural, estudyante, engineer
from: 15685c4e
---

Pagkatapos mong patakbuhin ang analysis, ang {{ui:Design checks}} block sa {{ui:Analysis}} tab ay ginagawang hatol ang mga puwersa para sa bawat steel member: kung gaano karami ng kapasidad nito ang ginagamit ng pinakamabigat na combination.

:::warning
Isa itong **tulong lamang hanggang may makapag-review na engineer**. Una-orderng puwersa lamang ang ginagamit nito (walang second-order effects), hindi nito tinitingnan ang torsion, mga slender (class 4) na bahagi, mga welded na shape, at mga connection, at iniiwan nito ang hindi nito kayang i-check at sinasabi ito. Hindi nito pinapalitan ang check ng isang engineer, at hindi ito selyo ng pag-apruba.
:::

## Pumili ng code

Ang {{ui:Design code}} ay sine-save kasama ng model; pumili ng isa sa dalawang pamilya:

- **ASCE 7 + AISC 360** (US, LRFD): ang load combination ng ASCE 7-16 §2.3.1 at ang member check ng ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): ang combination ng EN 1990 (Eq. 6.10, o 6.10a at 6.10b) at ang member check ng EN 1993-1-1.

Pagkatapos, piliin ang {{ui:Grado ng steel}} (A992, A36 at iba pa; o S235 hanggang S450, na may mas mababang yield strength sa itaas ng 40 mm).

## Gumawa ng combination

Bigyan ang bawat load case ng **uri** nito (dead, live, roof live, snow, wind, seismic) sa listahan ng case, pagkatapos pindutin ang {{ui:Gumawa ng combination}}. Isinusulat ng DetailCraft ang mga combination ng code bilang mga combination ng iyong mga case: bawat strength combination na nakalista sa code para sa mga uri na mayroon ka, at mga serviceability combination para sa deflection. Nananatili ang mga combination na ikaw mismo ang nag-type; hindi ito chine-check laban sa code. Ang case na may uri na {{ui:Iba pa}} ay hindi kinokombina.

Para sa Eurocode, ang mga factor ay ang **recommended values** ng EN 1990 Annex A1 (γG 1.35, γQ 1.5, ang ψ values ng imposed, snow at wind loads) at ng EN 1993-1-1 (γM0 = γM1 = 1.0). Binabago ng National Annex ng iyong bansa ang ilan sa mga ito: buksan ang {{ui:Mga halaga ng National Annex}}, i-type ang sa iyo, at gumawa ulit ng mga combination. Sine-save ang mga ito sa model.

## I-check ang mga member

Pindutin ang {{ui:I-check ang mga member}}. Para sa bawat steel I-shape, ipinapakita ng table ang **utilization** nito (demand kumpara sa kapasidad: 100 % ang limitasyon), kung pumapasa ito, aling check ang nangingibabaw, at aling combination. Kinukulayan ang mga member sa model: asul kung kaunti lang ang gamit, berde kung mga kalahati, ochre kung malapit sa limitasyon, pula kung lampas, at kulay abo kung hindi na-check. I-click ang pangalan ng member para piliin ito.

Ang mga check, kasama ang clause na sinusundan ng bawat isa (nakalista ang mga ito sa report):

- tension, compression na may flexural at torsional buckling, bending sa dalawang axis na may lateral-torsional buckling, shear, at bending na may axial force;
- deflection ng mga serviceability combination laban sa {{ui:Limitasyon ng deflection}} na itinakda mo (L/360 bilang panimula; isang halaga ng proyekto, hindi halaga ng code).

**Mga haba.** Ang braced length ay bahagi ng bawat sinuring piyesa (1 = unbraced); pantay ang pagitan ng mga brace mula sa simula. Pinaparami ng K factor ang haba para sa buckling. Ang joint kung saan dumadapo ang ibang member ay naghahati sa isang member, at bawat piraso ay chine-check sa sarili nitong haba, bilang nakakabit doon.

## Ano ang hindi chine-check

Ipinapakita ng member ang **not checked**, kasama ang dahilan, sa halip na numero kapag ang section nito ay hindi shape na alam ng mga check (angles, channels; nasusuri ang rectangular at round tubes kapag compact ang mga pader nila), kapag isa itong custom (welded) shape, o kapag slender (AISC) o class 4 (Eurocode) ang isang bahagi sa bending. Ang slender na bahagi sa compression ay nag-aalis ng mga compression check at ang member ay nagbabasa ng *passes, partly checked*. Ang mga weld sa mga joint ay may [sariling check](topic:weld-checks). Hindi pa rin nagagawa ang second-order effects, torsion, shear buckling kasabay ng bending, bolted connection, fatigue, fire at seismic detailing. Ang concrete member at seismic load ay may [sariling mga check](topic:concrete-and-seismic). Tingnan ang [Not built yet](topic:not-built-yet).

## Ang report

Nakakakuha ang {{ui:Ulat (PDF)}} at {{ui:Ulat (CSV)}} ng mga design table kapag na-check mo na: ang mga edisyon ng code, ang mga setting at National Annex values, ang utilization ayon sa member, bawat clause na ginamit, at para sa bawat member, ang demand, kapasidad at utilization ng bawat check sa nangingibabaw nitong combination.
