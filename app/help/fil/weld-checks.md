---
title: I-check ang mga weld kung saan nagtatagpo ang mga member
summary: Pagkatapos ng design check, subukan ang fillet at butt weld sa paligid ng bawat member kung saan ito nagtatagpo sa ibang member o sa support, ayon sa AISC 360-16 Chapter J o EN 1993-1-8, at tingnan kung aling weld group ang pinakagamit at sa ilalim ng aling combination. Isang tulong lamang hanggang may makapag-review na engineer.
keywords: weld, welds, weld check, fillet weld, butt weld, full penetration, AISC 360, EN 1993-1-8, weld group, paggamit, utilization, kapasidad, joint, connection, structural, engineer
from: e8eebbe6
---

Ang {{ui:Mga weld check}} block sa {{ui:Analysis}} tab, sa ilalim ng {{ui:Mga design check}}, ay kumukuha ng mga puwersa ng huling nasolusyunang frame at ng mga strength combination na ginawa mo, at sinusubok ang weld sa paligid ng bawat member sa bawat joint: kung saan nagtatagpo ang isang member sa ibang member, o nakapatong sa support.

:::warning
Isa itong **tulong lamang hanggang may makapag-review na engineer**. Chine-check nito ang weld na iginuhit sa paligid ng section, bilang isang group, mula sa mismong end forces ng frame. Hindi nito binabasa ang laki o haba ng mga weld na iginuhit mo sa shop drawings, at hindi nito chine-check ang mga bolt, plate, bearing, block shear o prying. Hindi ito selyo ng pag-apruba.
:::

## Patakbuhin ito

1. Solusyunan ang frame sa {{ui:Analysis}} tab at pumili ng {{ui:Design code}} sa {{ui:Mga design check}}, pagkatapos pindutin ang {{ui:Gumawa ng combination}} (kailangan ng weld check ang parehong strength combination).
2. Sa {{ui:Mga weld check}}, itakda ang {{ui:Fillet leg (mm, 0 = ang wall, pinakamarami 8)}}. Ang 0 ay nangangahulugang susunod ang leg sa mas manipis na pader ng section, hanggang 8 mm. Sa ilalim ng AISC code, ang {{ui:Lakas ng weld metal F_EXX (MPa)}} ang lakas ng weld metal (ang 482.6 MPa ay isang E70 electrode). Sa ilalim ng EN 1993, ang steel grade ang nagbibigay ng lakas ng weld metal at ng correlation factor.
3. Pindutin ang {{ui:I-check ang weld}}.

Ang bawat linya ng table ay isang weld group (isang dulo ng joint ng isang member). Ang mga numero: ang **utilization** ng nangingibabaw nitong check, ang estado (pumapasa o bumabagsak), at aling check at clause ang nangingibabaw sa aling combination. Kapag hindi mahusgahan ng check ang isang group, sinasabi nito kung bakit (walang steel grade, walang correlation factor para sa grade sa EN 1993-1-8 Table 4.1, walang weld sa section na iyon) sa halip na magpakita ng numero.

Kapag binago ang leg o ang weld metal, o ine-edit ang model, nabubura ang table: para ito sa lumang mga halaga. Pindutin ulit ang {{ui:I-check ang weld}}.

## Ano ang chine-check

- **ASCE 7 + AISC 360:** lakas ng fillet weld metal (isinasaalang-alang ang anggulo ng load sa weld, J2.4), shear rupture ng base metal (J4.2), at full-penetration butt weld (Table J2.5).
- **EN 1990 + EN 1993:** fillet weld sa pamamagitan ng pinasimpleng paraan ng EN 1993-1-8 4.5.3.3 at butt weld mula sa 4.7.1.
- Mga babala sa detalye laban sa minimum at maximum na leg at sa minimum na haba, kasama ang halagang pinaghambingan.

Tinatrato ang weld group bilang line section at nilo-load ito sa pamamagitan ng elastic vector method: bawat bahagi ng weld ay tumatanggap ng puwersa mula sa axial force ng member, sa dalawang shear, torsion at dalawang bending moment, idinadagdag bilang mga vector.

## Ano ang hindi chine-check

Hindi pa nagagawa ang partial-penetration weld, skewed fillet, plug at slot weld, intermittent weld, instantaneous-centre method, EN directional method, fatigue at block shear ng base metal. Ang ilang constant ng mga pamantayan ay isinulat mula sa mga pamantayan at hindi pa naihahambing sa naka-print na kopya; nakalista sa report kung saan galing ang bawat numero ({{ui:Ulat (PDF)}} ay nakakakuha ng mga weld table kapag na-check mo na). Tingnan ang [Check steel members](topic:design-checks) at [Not built yet](topic:not-built-yet).
