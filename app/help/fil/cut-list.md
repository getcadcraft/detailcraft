---
title: Cut list
summary: I-nest ang mga beam, column, brace at stringer sa mga haba ng stock kasama ang saw kerf, at tingnan kung ilang bar ang bibilhin at ang basura.
keywords: cut list, nesting, haba ng stock, bar, kerf, saw, drop, offcut, basura, pagsasama-sama, pagbili, marami
from: 81d06ce5
---

Ang tab na {{ui:Cut list}}, sa ilalim ng view, ay kinukuwenta kung paano puputulin ang mga linear na piyesa ng model mula sa stock bar: ilang bar ng bawat haba ang bibilhin para sa bawat profile at materyal, ano ang mapupunta sa bawat bar, at ang basura.

## Itakda ang stock

Sa itaas ng tab:

- **Mga haba ng stock (mm):** ang mga haba na maaari mong bilhin, pinaghihiwalay ng espasyo, halimbawa `6000 12000`, o 20 ft at 40 ft na bar bilang `6096 12192`. Hanggang walo.
- **Saw kerf (mm):** ang nawawala sa bawat hiwa (3 sa simula).
- **End trim (mm):** puputulin ang dulo ng bawat bar bago ang unang piyesa (0 sa simula).
- **Itabi ang drop mula sa (mm):** ang drop na kasing-haba nito o mas mahaba pa ay ibabalik sa stock; ang mas maikli ay basura (500 sa simula).

Nakatago ang mga ito sa browser na ito, tulad ng iba pang [setting](topic:settings).

## Paano ito nag-nest

- Bawat beam, column, brace at stair stringer, ayon sa part mark at bilang; ang mga plato ay pinuputol mula sa sheet at hindi dito ni-nest.
- Bawat profile at materyal ay hiwalay.
- Ang pinakamahabang piyesa ang una, bawat isa sa unang bar na kasya rito; ang bagong bar ay nagsisimula sa pinakamahabang haba ng stock. Pagkatapos, bawat bar ay binibili sa pinakamaikling haba ng stock na kasya pa rin sa mga hiwa nito.
- Bawat hiwa ay kumukuha ng kerf (walang kerf pagkatapos ng hiwang nagtatapos eksakto sa dulo ng bar); bawat bar ay nawawalan ng end trim.
- Ang piyesang mas mahaba sa lahat ng haba ng stock ay nakalista sa ilalim ng **Mas mahaba sa anumang stock**, hindi ni-nest: i-splice ito (tingnan ang [Splices](topic:splices)) o magdagdag ng mas mahabang haba ng stock.

## Basahin ito

- **Buod:** bawat profile at materyal, ang mga piyesa, ang mga bar na bibilhin (halimbawa "2 × 12000, 1 × 6000"), ang metrong binili at ginamit, at ang basura.
- **Mga bar at ang kanilang hiwa:** bawat bar, ang haba ng stock nito, ang mga hiwa nito bilang part mark at haba, at ang drop, itinabi o basura.

Isinasave ng {{ui:Download CSV}} ang parehong talahanayan bilang `<name> cut list.csv`.

Hindi nina-nest ng DetailCraft ang mga plato sa mga sheet, at hindi ito naghahalo ng mga profile o materyal sa isang bar.
