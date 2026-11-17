---
title: Idetalye ang reinforced concrete na beam, column, slab at wall
summary: Magdagdag ng concrete beam, column, slab at wall ayon sa grid, bigyan ang mga ito ng bar, stirrup at tie, i-check ang lap at anchorage laban sa ACI 318-19 o EN 1992-1-1, at gumawa ng shop drawing at bar-bending sheet.
keywords: reinforced concrete, rebar, reinforcement, beam, column, slab, wall, stirrups, ties, links, hooks, laps, lap splice, anchorage, development length, ld, ldh, lbd, cover, spacing, trimmers, openings, mats, bar marks, bending schedule, bar bending schedule, bbs, shop drawing, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, IFC import
from: 3835b7ec
---

Dinedetalye ng tab na {{ui:Kongkreto}} sa ibaba ng view ang mga bar ng concrete beam, column, slab at wall. Ikaw ang nagbibigay ng mga sukat at ng mga bar; inilalagay ng DetailCraft ang bawat bar, nilalagyan ito ng numero, chinecheck ang mga lap, ang anchorage, ang cover at ang spacing laban sa clause na pinagmulan ng mga ito, at iginuguhit ito.

:::warning
Dinedetalye ng DetailCraft ang mga bar na ibibigay mo. Hindi nito dinidisenyo ang mga ito. Ang bawat resulta ay para sa pagche-check ng isang engineer.
:::

## Buksan ang tab na Kongkreto

Piliin ang tab na {{ui:Kongkreto}} sa ibaba ng view. Sa ribbon layout, nasa tab na {{ui:Modeling}} sa tabi ng {{ui:Footing}} ang {{ui:Kongkreto}}. Gamit ang command line ng drafting style, i-type ang {{cmd:CONCRETE}}.

## Magdagdag ng element ayon sa grid

Inilalagay ang mga concrete element sa mga grid line at level ng model, kaya i-set up muna ang mga iyon (kaliwang panel).

1. Sa {{ui:Idagdag ayon sa grid}}, piliin ang {{ui:Elemento}}: {{ui:Concrete beam}}, {{ui:Concrete column}}, {{ui:Slab}} o {{ui:Wall}}.
2. Pumili ng mga grid line at level:
   - ang beam ay tumatakbo mula sa isang intersection ng grid papunta sa isa pa, nasa level ang tuktok nito;
   - ang column ay nakatayo sa isang intersection, mula sa isang level papunta sa isa pa;
   - pinupuno ng slab ang parihaba sa pagitan ng dalawang grid line na may numero at dalawang grid line na may letra, nasa level ang tuktok nito;
   - ang wall ay tumatakbo sa kahabaan ng center line nito mula sa isang intersection papunta sa isa pa, mula sa isang level papunta sa isa pa.
3. Ibigay ang sukat at piliin ang {{ui:Idagdag}}. Napipili ang element at bumubukas ang mga field nito sa panel na {{ui:Properties}}.

Nagsisimula ang bawat element sa mga bar na paunang halaga, hindi disenyo: palitan ang mga ito ng sa engineer.

## Baguhin ang mga bar

Piliin ang element (sa view, o ang pangalan nito sa tab na {{ui:Kongkreto}}). Ipinapakita ng panel na {{ui:Properties}}:

| Element | Ano ang itinatakda mo |
|---|---|
| Beam | Lapad, lalim, malinaw na cover; itaas at ibabang bar (laki, bilang, tuwid o 90° na hook sa mga dulo); side bar; stirrup (laki, 135° o 90° na hook, distansya ng una mula sa mukha ng suporta, haba at spacing ng end zone, spacing sa pagitan); haba ng suporta; haba ng lap |
| Column | Lapad, lalim sa kabuuan, rotation, cover; longitudinal bar sa bawat mukha; tie gaya ng stirrup; ano ang gagawin ng mga bar sa itaas (lap sa column sa itaas, hook papasok sa sahig, o huminto) |
| Slab | Kapal, laki, top, cover; bottom mat at top mat sa bawat direksyon (laki at spacing); U-bar sa paligid ng mga gilid; trimmer bar; opening |
| Wall | Kapal, cover, isa o dalawang layer, pahalang at patayong bar, U-bar sa mga dulo, patayong bar na naka-lap sa itaas o hindi, trimmer bar, opening |

Isang undo na hakbang ang bawat pagbabago. Tinatanggihan ang pagbabagong hindi mabubuo at sinasabi ng status bar kung bakit, halimbawa "Hindi kasya ang opening sa loob ng element kasama ang cover nito."

Sarado ang mga stirrup at tie, na may dalawang hook sa iisang sulok. Ang mga bar ng beam ay pumapasok sa concrete column sa mga dulo nito hanggang sa malayong mukha ng column na minus cover; kung walang column doon, ibigay ang {{ui:Haba ng suporta sa simula (mm)}} at sa dulo.

## Lap at anchorage

Ang mga bar na mas mahaba sa {{ui:Haba ng stock bar (mm)}} (12000 sa simula) ay pinuputol sa mga piraso ng magkakapantay na haba, na naka-lap. Nakalista sa talahanayang {{ui:Laps at anchorage}} ang bawat lap at bawat anchorage: kung ano ang kailangan, kasama ang clause at mga tuntunin nito, at kung ano ang mayroon ang detalye.

- Ang haba ng lap na 0 ay nangangahulugang "ayon sa kailangan": ang haba na ibinibigay ng code, na ni-round up sa 25 mm.
- I-type ang sarili mong haba ng lap para ito ang gamitin. Kung mas maikli ito kaysa kailangan, isa itong problema (tingnan sa ibaba), at minarkahan ito ng * sa talahanayan.
- Sinusukat ang anchorage mula sa mukha ng suporta hanggang sa dulo ng bar sa loob ng suporta. Sinasabi ng beam na walang kilalang suporta ito sa halip na i-check ito.
- Ang column na nakatayo sa footing ay naka-lap sa starter bar ng footing, at sa isa pang column sa mga bar ng column na iyon: chinecheck din ang lap nila.

**ACI 318-19** (SI): tuwid na bar sa tension 25.4.2.3 (ang talahanayan, na may ψt, ψe, ψg, λ), karaniwang hook 25.4.3.1 (ψr 1.6 at ψo 1.25 ang ginagamit maliban kung may alam na iba), bar sa compression 25.4.9.2, tension lap 25.5.2.1 (Class B, o Class A sa mga setting), compression lap 25.5.5.1.

**EN 1992-1-1**: anchorage 8.4.4 na may fbd mula sa 8.4.2 (mahusay o mahinang bond), lap 8.7.3 na may α6 para sa bawat bar na naka-lap sa iisang seksyon. Nagsisimula ang γc, γs at αct sa mga inirekomendang halaga; itakda ang sa iyong national annex.

## Mga check

Nasa panel na Problema ng shell ang bawat check na pumalya (source {{ui:Mga pagsusuri sa reinforcement}}), at nasa listahan ng element na {{ui:Mga check}}:

| Check | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Cover | Table 20.5.1.3.1, ayon sa exposure | Pinakamababang bond, Table 4.2 (ikaw ang magbibigay ng durability cover) |
| Malinaw na spacing ng bar | 25.2.1 (beam, slab, wall), 25.2.3 (column) | 8.2 (2) |
| Spacing ng stirrup | 9.7.6.2.2 | 9.2.2 (6) |
| Pinakamababang steel ng beam | 9.6.1.2 | 9.2.1.1 (1) |
| Side bar ng beam na higit 900 mm ang lalim | 9.7.2.3 | hindi chinecheck |
| Ratio ng steel ng column, bilang ng bar | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Tie: spacing, laki, cross-tie | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Spacing ng slab, pinakamababang steel | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Spacing ng wall, pinakamababang steel, dalawang layer | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Lap, anchorage | gaya sa itaas | gaya sa itaas |

Hindi alam ang laki ng aggregate, kaya chinecheck ang malinaw na spacing nang wala ito.

## Opening, trimmer at edge bar

Piliin ang {{ui:Magdagdag ng opening}} sa ilalim ng napiling slab o wall at itakda kung nasaan ito at ang laki nito. Humihinto sa cover mula sa gilid nito ang mga bar na tumatawid dito. Idinadagdag ang trimmer bar sa bawat gilid, sa iisang layer, na may dalang kalahati ng area ng mga bar na pinutol, na may isang haba ng anchorage lampas sa opening. Iyon ang panimulang tuntunin ng DetailCraft, hindi clause ng code: palitan ang {{ui:Trimmer bar}} ng sa engineer. Hindi idinadagdag ang corner bar.

Ang U-bar sa paligid ng malayang gilid ng slab at sa mga dulo ng wall ay may mga binting kasing haba ng isang lap.

## Bar mark at ang bending schedule

Iisang mark ang pinagsasaluhan ng magkakatulad na bar: pinapanatili ng footing ang F mark (5F1), nakukuha ng beam ang B, column ang C, slab ang S at wall ang W (7B1, 8C1, 4S2). Inililista ng tab na {{ui:Bending schedule}} at ng CSV nito ang bawat bar ng istruktura, na nauuna ang mga footing. Ang {{ui:Output}} › {{ui:More}} › {{ui:Bending}} ang nagda-download nito.

## Shop drawing

Piliin ang {{ui:Output}} › {{ui:More}} › {{ui:Mga reinforcement drawing}}, ang {{ui:Mga reinforcement drawing}} sa tab na {{ui:Kongkreto}}, o ang {{ui:Shop drawing}} sa tabi ng isang element. May sheet ang bawat element na may elevation (plano para sa slab) na nagpapakita ng bawat bar at ng mark nito, ng mga zone ng stirrup o tie, at ng mga lap na may dimensyon, at isang section sa gitna; pagkatapos, inililista ng mga bar-bending sheet ang bawat mark kasama ang sketch ng hugis nito, mga dimensyon, bilang, cut length at timbang.

Ginagawa ang mga sheet mula sa model sa bawat pagkakataon, at muli pagkatapos ng bawat pagbabago habang bukas ang window: dala ng title block ang model ref. I-save ang {{ui:Ang sheet na ito bilang PDF}} o {{ui:Lahat ng sheet bilang PDF}}.

## Mga bar mula sa IFC file

{{ui:File}} › {{ui:Import IFC}} ay binabasa na ngayon ang IfcReinforcingBar: ang swept disk sa kahabaan ng centre line nito ay bumabalik bilang tuwid na binti at yuko, kasama ang diameter nito, ang mark nito at ang element na nagdadala nito. Pinananatili ang mga bar gaya ng pagkakabasa sa mga ito (hindi ginagawang panuntunan ng beam o slab ang mga ito), ipinapakita sa view, nakalista sa bending schedule at muling isinusulat sa IFC export. Sinasabi ng import report kung ilang bar ang nabasa, ng anong mga laki, sa ilang element, at kung ano ang naiwan at bakit.

Ang beam, column, slab o wall ng file na iyon na may hawak na bar, o ang materyal ay kongkreto, ay hindi itinuturing na steel; sinasabi ito ng report. Dala ng sariling IFC export ng DetailCraft ang kahulugan ng bawat concrete element, kaya bumabalik ito bilang sarili nito, at muling ginagawa mula rito ang mga bar nito.

:::note
Hindi pa kayang basahin ang sariling file ng isang structural design program (hindi IFC): mag-export ng IFC mula rito.
:::

## Ang IFC export

Lumalabas bilang IfcBeam, IfcColumn, IfcSlab at IfcWall ang concrete beam, column, slab (kasama ang mga opening) at wall, bawat isa ay may mga bar nito bilang IfcReinforcingBar (pangunahing bar, ligature para sa stirrup at tie, edge bar) na pinagsama-sama rito; bawat bar ay swept disk sa kahabaan ng centre line nito, may totoong arko sa mga yuko, at dala ang mark at cut length nito.
