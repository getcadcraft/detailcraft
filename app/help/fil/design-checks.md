---
title: Suriin ang steel member ayon sa design code
summary: Gumawa ng load combination mula sa ASCE 7 o EN 1990, suriin ang bawat steel I-shape ayon sa AISC 360 o EN 1993-1-1, at tingnan kung gaano karaming kapasidad ng bawat member ang ginagamit nito. Isa itong tulong lamang hangga't hindi ito nire-review ng isang engineer.
keywords: design, design check, steel design, utilisation, utilization, kapasidad, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, load combinations, LRFD, National Annex, buckling, lateral-torsional buckling, shear, bending, interaction, istruktura, mga estudyante, engineer
from: 66b6d545
---

Pagkatapos mong patakbuhin ang analysis, ginagawang hatol ng block na {{ui:Design checks}} sa tab na {{ui:Analysis}} ang mga puwersa nito para sa bawat steel member: gaano karaming kapasidad nito ang ginagamit ng pinakamasamang combination.

:::warning
Isa itong **tulong hangga't hindi ito nire-review ng isang engineer**. Mga first-order na puwersa lamang ang ginagamit nito (walang second-order effect), hindi nito sinusuri ang torsion, mga slender (class 4) na bahagi, mga welded na hugis at mga connection, at inilalampas nito ang hindi nito kayang suriin at sinasabi ito. Hindi nito pinapalitan ang pagsusuri ng isang engineer, at ang mga resulta nito ay hindi selyo.
:::

## Pumili ng code

Naka-save kasama ng model ang {{ui:Design code}}; pumili ng isa sa dalawang pamilya:

- **ASCE 7 + AISC 360** (US, LRFD): ang mga load combination ng ASCE 7-16 §2.3.1 at ang mga member check ng ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): ang mga combination ng EN 1990 (Eq. 6.10, o 6.10a at 6.10b) at ang mga member check ng EN 1993-1-1.

Pagkatapos, piliin ang {{ui:Steel grade}} (A992, A36 at iba pa; o S235 hanggang S450, kung saan ang mas mababang yield strength ay nasa itaas ng 40 mm).

## Gumawa ng mga combination

Bigyan ang bawat load case ng **kind** nito (dead, live, roof live, snow, wind, seismic) sa listahan ng case, saka pindutin ang {{ui:Make combinations}}. Isinusulat ng DetailCraft ang mga combination ng code bilang mga combination ng iyong mga case: bawat strength combination na nakalista ng code para sa mga kind na mayroon ka, at mga serviceability combination para sa deflection. Nananatili ang mga combination na ikaw mismo ang nag-type; hindi ito sinusuri laban sa code. Ang case na may kind na {{ui:Other}} ay hindi kinokombina.

Para sa Eurocode, ang mga factor ay ang **recommended values** ng EN 1990 Annex A1 (γG 1.35, γQ 1.5, ang mga ψ value ng imposed, snow at wind load) at ng EN 1993-1-1 (γM0 = γM1 = 1.0). Binabago ng National Annex ng iyong bansa ang ilan sa mga ito: buksan ang {{ui:National Annex values}}, i-type ang sa iyo, at gawin ulit ang mga combination. Naka-save ang mga ito sa model.

## Suriin ang mga member

Pindutin ang {{ui:Check members}}. Para sa bawat steel I-shape, ipinapakita ng talahanayan ang **utilisation** nito (demand kumpara sa kapasidad: 100 % ang limitasyon), kung pumapasa ito, aling check ang nangingibabaw, at aling combination. Kinukulayan ang mga member sa model: asul kapag kaunti ang ginamit, berde kapag mga kalahati, ochre kapag malapit sa limitasyon, pula kapag lampas, kulay abo kapag hindi sinuri. I-click ang pangalan ng member para piliin ito.

Ang mga check, kasama ang clause na sinusundan ng bawat isa (nakalista ang mga ito sa report):

- tension, compression na may flexural at torsional buckling, bending sa magkabilang axis na may lateral-torsional buckling, shear, at bending na may axial force;
- deflection ng mga serviceability combination laban sa {{ui:Deflection limit}} na itinakda mo (L/360 sa simula; project value ito, hindi code value).

**Mga haba.** Ang braced length ay bahagi ng bawat sinuring piraso (1 = unbraced); ang mga brace ay ipinapalagay na magkakapantay ang pagitan mula sa simula. Pinaparami ang K factor sa haba para sa buckling. Ang joint kung saan may ibang member na tumatama ay humahati sa member, at bawat piraso ay sinusuri sa sarili nitong haba, bilang nakakabit doon.

## Ano ang hindi sinusuri

Ipinapakita ng member ang **not checked**, kasama ang dahilan, sa halip na numero kapag ang seksyon nito ay hindi I-shape na alam ng mga check (tube, angle, channel), kapag ito ay custom (welded) na hugis, o kapag may bahaging slender (AISC) o class 4 (Eurocode) sa bending. Ang slender na bahagi sa compression ay nag-aalis ng mga compression check, at ang member ay lalabas na *passes, partly checked*. Hindi pa rin naitatayo: second-order effect, torsion, shear buckling kasabay ng bending, connection, fatigue, sunog at seismic detailing. May [sarili nilang check](topic:concrete-and-seismic) ang concrete member at seismic load. Tingnan ang [Not built yet](topic:not-built-yet).

## Ang report

Nakukuha ng {{ui:Report (PDF)}} at {{ui:Report (CSV)}} ang mga design table kapag nasuri mo na: ang mga edition ng code, ang mga setting at halaga ng National Annex, ang utilisation ayon sa member, bawat clause na ginamit, at para sa bawat member ang demand, kapasidad at utilisation ng bawat check sa nangingibabaw nitong combination.
