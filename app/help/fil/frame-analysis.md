---
title: I-analyze ang frame
summary: Mga puwersa, reactions at deflections ng beams, columns at braces ayon sa pagkakaguhit, sa ilalim ng load cases at combinations na itinakda mo. Tulong sa analysis, hindi code check; hiwalay na hakbang ang design checks.
keywords: analysis, structural analysis, frame analysis, stiffness method, loads, load case, combination, dead load, live load, self weight, own weight, reactions, bending moment, shear, axial force, deflection, deflected shape, supports, pinned, fixed, release, report, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Hinahanap ng tab na {{ui:Analysis}} sa ibaba ang mga puwersa sa bawat beam, column at brace ng model, ang reactions sa mga base ng column, at kung gaano kalaki ang baluktot ng mga member, para sa mga load na ibibigay mo.

:::warning
Ito ay **tulong sa analysis, hindi code check**. Walang design code na ginagamit ang analysis: hindi nito sinusukat ang members, hindi tinitingnan ang capacities o connections, at hindi pumipili ng load factors. Sinusuri ng engineer ang model, mga load at supports nito, at nagpapasya kung ano ang ibig sabihin ng mga numero. Para sa member checks ayon sa ASCE 7 / AISC 360 o EN 1990 / EN 1993-1-1, tingnan ang [Suriin ang steel members ayon sa design code](topic:design-checks), isang hiwalay na hakbang na tulong din.
:::

## Patakbuhin ito

1. Buksan ang tab na {{ui:Analysis}}.
2. Pumili ng isa o higit pang member sa view, pumili ng {{ui:Case}}, {{ui:Load}} at {{ui:Direction}}, i-type ang halaga at pindutin ang {{ui:Magdagdag ng load}}. Ang load na nakalatag sa kahabaan ng member ay nasa kN/m, ang point load ay nasa kN. Ang {{ui:Pababa (gravity)}} ang karaniwang pinipili.
3. Pindutin ang {{ui:Patakbuhin ang analysis}}.

Ipinapakita ng table ang pinakamalaking axial force N ng bawat member, shears Vz at Vy, bending moments My at Mz, torsion T at deflection nito, na may pinakamalaking moment muna; i-click ang pangalan ng member para piliin ito. Sa ibaba ang reactions sa bawat support. Ginuguhit ng {{ui:Sa model}} ang deflected shape, o isang aksyon bilang diagram sa tabi ng bawat member na may nakasulat na pinakamalaking halaga sa lugar nito. Nagiging luma ang mga resulta sa sandaling magbago ang model: patakbuhin ulit.

Ang bawat load, case at setting ay isang undo step ({{key:Mod+Z}}) at sine-save sa model file.

## Load cases at combinations

Tatlo ang nagsisimula sa analysis: **Dead** (sariling bigat ng members, galing sa iginuhit nilang section at 7850 kg/m³), **Live** (walang laman) at **Dead + live**. Magdagdag ng sarili mong cases (hangin, snow …) at combinations: pinagsasama ng combination ang cases gamit ang factors na tina-type mo. Linear ang analysis, kaya nilulutas ang bawat case nang isang beses at ang combinations ay sums. I-type mo ang factors, o pumili ng design code at hayaang isulat ng {{ui:Gumawa ng combination}} ang sa code ([Suriin ang steel members ayon sa design code](topic:design-checks)).

## Ano ang binubuo ng frame

- Beams, columns at braces, bawat isa sa work line nito (ang linyang iginuhit mo), na may totoong properties ng section na kinuha mula sa outline nito. Hindi bahagi ng frame ang plates, stairs, footings at bolts.
- Hinahati ang member kung saan lumalapat ang dulo ng ibang member dito, kaya ang beam na nakakabit sa column sa kalagitnaan ng taas nito ay sumasali sa column doon.
- **Column bases**: fixed (ang simula) o pinned (nakahawak sa lugar at laban sa pag-ikot, malayang umikot). Laging gumagawa ng support ang base plate.
- **Beam ends**: rigid ang end plate, pinned ang shear tab. Itinatakda ng {{ui:Dulo ng beam na walang koneksyon}} ang iba. **Pinned sa magkabilang dulo ang braces.**
- Pumili ng isang member para bigyan ng sariling panuntunan ang mga dulo nito, o ang base ng column.
- Steel lahat: E = 200 GPa, G = 77 GPa.

Kapag nakagalaw ang frame nang hindi bumabaluktot ang anuman (isang mechanism, gaya ng pinned bases na walang bracing sa isang direksyon), humihinto ang run at sinasabi kung saan at aling direksyon; pigilan ito gamit ang support, rigid joint o brace.

## Mga sign

N > 0 ay tension. My > 0 ay naglalagay ng local −z side ng member sa tension: ang beam na lumulubog sa ilalim ng gravity ay may My > 0. Mz > 0 ay naglalagay ng local −y side sa tension. Ang deflection ay sinusukat mula sa tuwid na linya sa pagitan ng mga dulo ng member. Ang local z ng member ay pataas (para sa column: kasama ang X); umiikot ang local axes nito kasabay ng pag-ikot ng member.

## Ang report

{{ui:Ulat (PDF)}} at {{ui:Ulat (CSV)}} ay naglalaman ng lahat: ang mga assumption kung saan binuo ang frame, sections, cases at combinations, pagkatapos para sa bawat case at combination ang reactions (kasama ang sums ng loads at reactions, na nagbabalanse), ang member forces at displacements, at isang envelope ng bawat case. Isinusulat ng {{ui:I-export bilang CraftScript}} ang parehong frame bilang script para sa Script workspace ng PartCraft, kung saan nilulutas ito ng library function na `frame3d` nang hakbang-hakbang sa madaling basahing code.

## Paraan

Direct stiffness method, linear at first order maliban kung lagyan mo ng check ang Second order (P-Delta): two-node beam-columns na may axial, torsion at dalawang bending stiffnesses (walang shear deformation, walang warping), end releases sa pamamagitan ng static condensation, at ang mga load sa kahabaan ng member gamit ang sariling shape functions ng members. Tinitingnan ang mga sagot laban sa klasikong textbook cases (cantilevers, simple, fixed at continuous beams, portal frame, grid sa torsion, truss).

**Second order (P-Delta).** Lagyan ng check ang *Second order (P-Delta)* sa tabi ng Patakbuhin: muling nilulutas ang bawat combination na ang axial forces ng members ay kumikilos sa deflected frame (bawat member ay hinahati sa 4 na piraso, para mabilang din ang baluktot ng member sa pagitan ng mga dulo), hanggang tumatag ang axial forces. Ipinapakita ng result line ang bilang ng passes at kung gaano lumaki ang sway; ang moments, deflections, design checks at report ay gumagamit na ng mga resultang ito. Sa itaas ng elastic critical load ng frame, humihinto ang run at sinasabi ito. Elastic ito na may maliliit na rotation, flexural lang, walang stiffness reduction o notional loads (hindi ang AISC direct analysis method mismo); ang slabs, walls at rigid floors ay nananatiling first order.

**Natural frequencies (finite elements).** Hinahanap ng block na {{ui:Finite elements: natural frequency}} sa ilalim ng mga resulta ang pinakamababang modes ng parehong model gamit ang finite element engine: beams na may end releases, slabs at walls bilang flat four-node shells, rigid floors, supports. Piliin kung ilang modes (3, 6, 10 o 20) at ang slab element (ang four-node shell para sa makapal o manipis na slabs, o ang thin-slab), at pindutin ang {{ui:Hanapin ang mga frequency}}. Ibinibigay ng table ang frequency ng bawat mode sa Hz, ang period nito sa segundo at ang effective modal mass nito sa X, Y at Z bilang bahagi ng mass na maaaring gumalaw; ginuguhit ng {{ui:Ipakita sa model}} ang alinmang mode gaya ng pagguhit ng deflected shape. Mass ay material density na beses volume: hindi nagdaragdag ng mass ang loads, at ang materyal na walang density ay walang mass. Kasama ng report (PDF, CSV) ang table. Elastic at maliit na galaw lang ito, at walang seismic o wind load na ginagawa mula sa code dito. Hindi ito code check; sinusuri ng iyong engineer ang mga resulta.

**Response spectrum, time history at pushover.** May tatlo pang block sa ilalim ng frequencies, gamit ang parehong finite element model. Para sa lahat ng ito, ang mass ay material density kasama ang pababang loads ng mga case na tinick mo, bawat isa na beses ng factor na itinype mo (halimbawa Dead sa 1 at Live sa bahaging ibinibilang mo bilang mass).

{{ui:Response spectrum}} ay binabasa ang bawat mode mula sa spectrum na ibibigay mo (table ng period at acceleration, o ang ASCE 7 shape mula sa SDS, SD1 at TL; kinokopya ng {{ui:Gamitin ang mga value ng Seismic block}} na button ang mga iyon mula sa Seismic block), at pinagsasama ang mga mode gamit ang CQC, SRSS, ten percent rule o absolute sum, saka pinagsasama ang X, Y at Z na direksyon (100 % + 30 % o SRSS). Nagbibigay ito ng base shear, drift ng bawat palapag, member end forces at mode table na nagbababala kapag ang mga ginamit na mode ay may dalang mas mababa sa 90 % ng mass. Maaari mong i-scale ang resulta gamit ang factor o hanggang sa base shear na itinype mo; hindi kailanman kinukuwenta ng block ang base shear na iyon mismo. Walang sign ang mga resulta.

{{ui:Time history}} ay nagpapatakbo ng ground acceleration sa pamamagitan ng modal superposition (eksakto para sa mga tuwid na linya ng record sa pagitan ng mga punto) o direct integration (Newmark average acceleration na may Rayleigh damping). Ang input ay gawang-gawang sine o pulse (laging may label na synthetic), record na ipapaste mo, o text file na bubuksan mo (time at acceleration, isang acceleration bawat linya na may step, o file na tulad ng PEER na may DT= header; sa g o m/s²). Ibinibigay nito ang roof displacement at base shear laban sa oras, ang drift ng bawat palapag, at ang envelope ng member end forces. Ang mga model na may napakahabang record ay itinatago lamang ang record sa session.

{{ui:Pushover}} ay itinutulak ang roof sa gilid sa maliliit na hakbang (pattern na tulad ng unang mode, o uniform), na may plastic hinges sa mga dulo ng members na may I shape. Yumayield ang hinge sa plastic moment, na bumababa habang tumataas ang axial force (kinukuwenta mula sa iginuhit na shape, hindi isinasama ang fillets); opsyonal ang hardening, opsyonal ang P-delta, at maaaring ilapat muna ang gravity combination. Nagbibigay ito ng capacity curve (base shear laban sa roof displacement), ang unang hinge, at ang estado at plastic rotation ng bawat hinge. Pinapatakbo ng {{ui:I-run ang nonlinear time history}} ang parehong hinges sa ilalim ng record ng Time history block sa maliliit na model. Nabubuo ang hinges sa mga dulo ng member lang (maglagay ng node kung saan dapat mabuo ang hinge sa loob ng span); ang member na released sa magkabilang dulo ay walang hinge; hindi namomodelo ang pagyield at pagbuckle ng braces; nananatiling elastic ang slabs at walls; walang acceptance criteria na ibinibigay. Hindi ito code check; sinusuri ng iyong engineer ang mga resulta. Sine-save ang mga setting kasama ng model, at kasama sa report ang mga table.

Hindi pa nagagawa: buckling analysis, mass correction para sa response spectrum, record scaling, acceptance criteria para sa hinges (nandoon ang dynamic response, sa itaas), area at wind loads na ginagawa para sa iyo (ang lindol na pwersa sa floors ay nasa [Suriin ang concrete members at gumawa ng seismic loads](topic:concrete-and-seismic)), member offsets, tension-only braces. Tingnan ang [Mga hindi pa nagagawa](topic:not-built-yet).
