---
title: Skurðarlisti
summary: Raðaðu bitum, súlum, skástífum og stigabitum í lagerlengdir með sagarrauf, og sjáðu hversu margar stangir á að kaupa og úrganginn.
keywords: skurðarlisti, röðun, lagerlengd, stöng, sagarrauf, sög, afgangur, afskurður, úrgangur, sameining, innkaup, margar
from: 81d06ce5
---

Flipinn {{ui:Skurðarlisti}}, undir sýninni, reiknar út hvernig best er að skera línulega hluta líkansins úr lagerstöngum: hversu margar stangir af hverri lengd á að kaupa fyrir hvern prófíl og efni, hvað fer á hverja stöng, og úrganginn.

## Stilla lagerinn

Efst á flipanum:

- **Lagerlengdir (mm):** lengdirnar sem hægt er að kaupa, aðskildar með bilum, til dæmis `6000 12000`, eða 20 feta og 40 feta stangir sem `6096 12192`. Allt að átta.
- **Sagarrauf (mm):** það sem hver skurður tekur (3 til að byrja með).
- **Endaklipping (mm):** klippt af enda hverrar stangar áður en fyrsti bitinn kemur (0 til að byrja með).
- **Halda afgöngum frá (mm):** afgangur sem er að minnsta kosti þetta langur fer aftur á lager; styttri er rusl (500 til að byrja með).

Þetta er geymt í þessum vafra, eins og aðrar [stillingar](topic:settings).

## Hvernig raðað er

- Sérhver bita, súla, skástífa og stigabiti, eftir hlutamerki og fjölda; plötur eru skornar úr plötu og eru ekki raðaðar hér.
- Hver prófíll og efni fyrir sig.
- Lengstu bitar fyrst, hver í fyrstu stöng sem hann passar í; ný stöng byrjar sem lengsta lagerlengdin. Síðan er hver stöng keypt sem stysta lagerlengd sem enn rúmar skurðina hennar.
- Hver skurður tekur sagarraufina (engin eftir skurð sem endar nákvæmlega við enda stangarinnar); hver stöng missir endaklippinguna.
- Bita sem er lengri en allar lagerlengdir er skráður undir **Lengri en nokkur lager**, ekki raðaður: tengdu hann saman (sjá [Samskeyti](topic:splices)) eða bættu við lengri lagerlengd.

## Lesa úr

- **Samantekt:** eftir prófíl og efni, bitana, stangirnar sem á að kaupa (til dæmis „2 × 12000, 1 × 6000“), metrana sem keyptir eru og notaðir, og úrganginn.
- **Stangir og skurðir þeirra:** sérhver stöng, lagerlengd hennar, skurðir hennar sem hlutamerki og lengd, og afgangurinn, geymdur eða rusl.

{{ui:Sækja CSV}} vistar báðar töflurnar sem `<name> cut list.csv`.

DetailCraft raðar ekki plötum í blöð og blandar ekki prófílum eða efnum á sömu stöng.
