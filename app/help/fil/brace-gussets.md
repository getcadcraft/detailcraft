---
title: Mga brace gusset
summary: Ikonekta ang dulo ng brace sa column o biga gamit ang gusset plate: mga angle at flat bar na naka-bolt, mga tube na may slot at dinikitan.
keywords: gusset, gusset plate, brace, bracing, patayong bracing, angle brace, flat bar, strap, hss brace, knife plate, tube na may slot, connect
from: 22f6598d
---

Ang brace gusset ay isang plato na shop-welded sa column (o biga) na pinagkakapitan ng brace, nasa eroplano ng brace. Pinuputol ng DetailCraft ang brace pabalik para malinis ito sa lahat ng nasa joint, inilalagay at sinusukat ang gusset, at ikinokonekta ang brace dito: isang **angle** o isang **flat bar** na may isang linya ng bolt, o isang **tube** (square, rectangular o round HSS) na isinusubsob sa ibabaw ng gusset at dinikitan.

## Saan ito gumagana

- Ang dulo ng brace ay nasa linya ng column o biga (sa loob ng 1 mm), at hindi halos parallel ang brace sa linyang iyon. Ang column ang suporta kung mayroon; kung wala, ang biga.
- Nasa eroplano ng brace at linya ng suporta ang gusset. Kailangang may isang leg ng **angle** sa eroplanong iyon, at ang mukha ng **flat bar**: iikutin ang brace (ang {{ui:Pag-ikot (°)}} nito) hanggang mangyari iyon. Kapag 45° sa eroplano ang mga leg ng angle, sinasabi ito ng DetailCraft at walang ginagawa.
- Hindi nakakonekta ang I-shape at channel bilang brace.

## Magdagdag ng gusset

1. Pumili ng isa o higit pang brace.
2. Piliin ang {{ui:Gusset}} sa menu na {{ui:Higit pa}} ng grupong {{ui:Connect}}.
3. Bawat dulo ng mga napiling brace na nakalapag sa column o biga at walang gusset ay makakakuha ng isa.

Piliin ang gusset (i-click ang plato) para baguhin ang mga setting nito. Kinokopya ng {{ui:Ilapat sa katulad (n)}} ito sa bawat libreng dulo ng brace na may parehong profile ng brace at suporta.

## Ano ang kinakalkula ng DetailCraft

- **Putol pabalik.** Pinaiikli ang brace sa dulong iyon hanggang malinis ang mga sulok nito, ayon sa {{ui:Brace clearance}} (25), bawat member sa joint (sa tabi nito, o lampas sa dulo nito kapag doon nagtatapos ang member) at isang base plate sa ilalim ng column.
- **Bolt (angle, flat).** {{ui:Mga bolt}} (3) sa isang linya sa kahabaan ng brace, ang una ay {{ui:Distansya ng bolt sa dulo}} (40) mula sa pinutol na dulo, sa {{ui:Pitch ng bolt}} (75). Sa angle, dumaraan sila sa leg sa eroplano ng gusset, {{ui:Gauge ng bolt}} mula sa heel (0 = gitna ng leg); sa flat bar, nasa center line nito (o nakalihis dito ayon sa gauge). Grip ng bolt = ang leg o flat + ang gusset.
- **Ang gusset.** Isang parihaba: mula sa mukha ng suporta palabas, lampas sa huling bolt ng end distance, at kasabay ng suporta hangga't kailangan ng mga bolt. Nakadikit ito sa likod ng leg ng angle (o sa mukha ng flat). Para sa tube, dumadaan ito sa gitna ng tube, sa ilalim ng {{ui:Tube lap sa gusset}} (200) ng tube, na may espasyo para sa mga weld.
- **Joints.** Sa base ng column, ibinababa ang gusset papunta sa base plate. Kapag may biga na tumatawid sa joint (brace paakyat sa sulok ng biga at column), nananatili ang gusset sa ilalim o sa itaas ng biga. Kapag nawala roon ang end distance ng mga bolt o ang lap, nagbababala ang DetailCraft.
- **Mga weld.** Ang gusset sa suporta nito, sa magkabilang gilid. Ang tube sa gusset, apat na linya sa kahabaan ng lap.

## Mabuting malaman

- Kabilang ang gusset sa assembly ng suporta (shop-welded). Dumarating ang brace na may nabutas nang mga butas, at napupunta sa sarili nitong NC file.
- Hindi pinuputol sa model ang slot ng tube; iniiwan ng [pagsusuri ng clash](topic:clash-check) ang brace at ang gusset nito.
- Hindi dinidikitan ang gusset sa biga na nadadaanan nito. Hindi pa ginagawa ang corner gusset na dinikitan sa biga at column, ang chamfered na sulok, at ang work-point layout ng Uniform Force Method connection.
- Hindi dinidisenyo ng DetailCraft ang gusset o ang mga bolt (walang strength check); ang mga babala ay tungkol sa spacing at fit.
