---
title: Suriin ang mga clash
summary: Hanapin ang mga member, plato at footing na nagpapasok sa isa't isa, hindi isinasama ang mga bahaging sadyang dapat magtagpo sa connection, at pumunta sa bawat clash.
keywords: clash, clash check, collision, interference, overlap, intersect, hard clash, coordination, check model, pagsusuri ng clash
from: 04d72d3b
---

Buksan ang tab na {{ui:Clashes}} sa ilalim ng view at piliin ang {{ui:Suriin ngayon}}. Tinitingnan ng DetailCraft ang bawat pares ng piyesa sa mga phase na ipinapakita: steel sa steel, at steel sa footing. Inililista ng tab ang bawat clash, ang pinakamalalim muna, kasama ang:

- ang dalawang piyesa, ayon sa part mark (o footing mark) at profile;
- **Overlap (mm)**: gaano kalalim ang isang punto ng isang piyesa sa loob ng isa pa, hanggang sa pinakamalapit na mukha;
- **Near**: ang intersection ng grid at level kung saan ito naroon, o ang mga coordinate nito;
- {{ui:Ipakita}}: pinipili ang dalawang piyesa at dinadala ang lugar sa gitna ng view.

Ipinapakita sa pamagat ng tab kung ilang clash ang nahanap ng huling pagsusuri. Hindi ito tumatakbo nang mag-isa: pagkatapos mong baguhin ang model, sasabihin ito ng listahan, at muling tatakbo ang {{ui:Suriin ngayon}}.

## Ano ang hindi clash

- Mga piyesang nagdidikit lang: plato na nakadikit sa flange, base plate sa footing nito, dalawang member na dulo sa dulo. Itinatakda ng **Tolerance (mm)** kung gaano kalayo maaaring magpasok ang dalawang piyesa sa isa't isa bago ito mabilang (1 mm sa simula; hanggang 50).
- Mga piyesang pinagdudugtong ng connection: isang end plate sa beam nito at sa column flange kung saan ito naka-bolt, ang beam at column ng joint na iyon, base plate sa column nito, mga plato ng splice sa dalawang piyesa, brace sa gusset nito (hindi pinuputol sa modelo ang slot ng tube). Sinadya ng connection na magtagpo ang mga ito.
- Ang shear lug ng base plate sa footing sa ilalim nito (nasa grout pocket ito).
- Mga bolt at anchor rod (dumadaan sa mga butas) at rebar.
- Mga piyesa sa nakatagong phase. Tingnan ang [Mga phase](topic:phases).

Ang brace o beam na pumapasok sa column na walang connection sa pagitan nila **ay** clash: kailangan pa rin ng connection ang joint na iyon. Ipinapakita ito ng brace ng sample frame: wala itong gusset. Piliin ito at piliin ang {{ui:Gusset}} ([Mga brace gusset](topic:brace-gussets)) at mawawala ang mga clash nito.

## Mabuting malaman

- Sinusukat ng overlap ang lalim sa loob ng materyal, kaya ang member na pumasok sa manipis na web o flange ng column ay nagpapakita lang ng ilang milimetro kahit malayo ang pagpasok nito.
- Sinusuri ang mga piyesa ayon sa hugis ng pagputol nito: isinasaalang-alang ang cope at ang putol-pabalik ng beam sa end plate nito. Hindi isinasaalang-alang ang mga butas.
