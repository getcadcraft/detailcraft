---
title: Erection plan at movie
summary: Magpasok ng crane at ng load chart nito, tingnan ang bawat lift na sinusuri laban sa chart ayon sa pagkakasunod ng phase, at mag-save ng erection movie na napapanood offline sa anumang telepono.
keywords: erection, crane, lift, load chart, radius, kapasidad, rigging, pagkakasunod-sunod, movie, animation, telepono, offline, lift plan
from: fa7b0133
---

Ginagawang erection order ng tab na {{ui:Erection}} ang model at sinusuri ang bawat lift laban sa crane na iyong inilarawan. Nagpaplano ito mula sa mga numerong iyong tinype. Hindi ito lift plan: ang rigger at ang crane operator ang gumagawa niyon.

## Ilarawan ang crane

Piliin ang {{ui:Add a crane}}, saka punan:

- **Crane centre X and Y:** kung saan nakatayo ang crane, sa milimetro.
- **Highest hook:** ang pinakamataas na maaaring umangat ang hook, sa milimetro. Ang 0 ay nangangahulugang walang limitasyong sinusuri.
- **Hook block and rigging not in the chart:** mga kilogramong ibinabawas sa chart bago idagdag ang load, kapag hindi pa ito ginagawa ng iyong chart.
- **Load chart:** isang hanay bawat linya, radius sa metro at pagkatapos ang kapasidad sa kilogramo. Kopyahin ang mga hanay mula sa sariling chart ng crane.

Binabasa ang chart sa paraan ng pagbasa ng load chart: ang kapasidad na nakalista para sa isang radius ay umaabot hanggang sa radius na iyon. Ang load sa radius na nasa pagitan ng dalawang hanay ay nakakakuha ng kapasidad ng **mas malayong** hanay, hindi kailanman halagang nasa pagitan nila. Sa loob ng unang hanay, nananatili ang kapasidad ng unang hanay. Lampas sa huling hanay, hindi na talaga makaangat ang crane. Ang radius na binibilang para sa isang lift ay ang mas malaki sa pick-up radius at set radius.

Idinadagdag ang pangalawang crane sa parehong paraan. Ang bawat lift ay napupunta sa unang crane na kayang kumuha nito sa loob ng iyong margin.

## Ano ang ginagawa ng plano

- Isang lift bawat assembly: isang beam kasama ang mga end plate nito, isang column kasama ang base plate nito, isang hagdan.
- Sumusunod ang pagkakasunod sa mga phase muna, saka tier ayon sa tier: mga column, ang mga beam na dala nila, brace, plato, hagdan. Hindi kailanman inaangat ang isang piyesa bago ang kung ano ang nagdadala nito.
- Ipinapakita ng bawat lift ang bigat nito (gross weight ng model, kasama ang {{ui:Rigging added to each weight}}), radius nito, ang bahagi ng chart na ginagamit nito at ang minutong nagsisimula ito.
- Ang {{ui:Most of the chart a lift may use}} ang iyong safety margin. Ang lift na lampas dito ay minamarkahang **Over your margin**; lampas sa chart, **Over the chart**; lampas sa huling radius ng chart, **Past the chart**; at ang piyesang mas mataas sa hook, **Hook too low**.

Hindi ibinabawas ang mga butas at cope sa mga timbang, at saklaw ng porsyento ng rigging ang mga bolt.

## Mga problema

Bawat lift na lampas, lampas sa radius, masyadong mataas o nakatakda bago ang nagdadala nito ay lumalabas sa panel na {{ui:Problems}}. Ang beam na walang connection na magdadala rito ay nakalistang nangangailangan ng pansamantalang suporta.

## I-save ang movie

Ang {{ui:Save movie}} ay sumusulat ng isang HTML file. Buksan ito sa anumang browser, pati sa telepono, nang walang network at walang account: i-play at i-pause, i-drag ang bar sa anumang minuto, paikutin ang model gamit ang daliri, i-pinch para mag-zoom. Pinangalanan ng caption ang bawat lift, ang bigat nito, radius at bahagi ng chart. Iginuguhit ang model bilang simpleng kahon: ipinapakita nito ang pagkakasunod at mga lift, hindi ang totoong profile.

Ang parehong talahanayan ay nase-save bilang CSV gamit ang {{ui:CSV}} na button. Naka-save sa model file ang crane at chart, at bawat pagbabago ay isang undo step.
