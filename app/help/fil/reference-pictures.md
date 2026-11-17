---
title: I-paste ang kinopyang area bilang reference picture
summary: Kopyahin ang bahagi ng PDF sheet sa MarkupCraft at i-paste ito sa DetailCraft sa totoong laki, nakalatag sa isang level sa ilalim ng steel, para makapag-model sa ibabaw nito.
keywords: picture, reference picture, underlay, background, kopyahin ang area, markupcraft, pdf, trace, totoong laki, scale, opacity, overlay
from: 0c48445f
---

Kinokopya ng tool na Kopyahin ang area ng MarkupCraft ang bahagi ng sheet bilang isang picture na alam ang sarili nitong laki. I-paste ito sa DetailCraft at nakalatag ito nang patag sa isang level, sa totoong laki, sa ilalim ng grid at ng steel, para makapaglagay ka ng mga member sa ibabaw ng plano mula sa mga drawing.

## I-paste ito

1. Sa MarkupCraft, kopyahin ang area gamit ang {{ui:More}} › {{ui:Kopyahin ang area ng page…}}, pagkatapos ay {{ui:Kopyahin}} (o {{ui:Kopyahin bilang overlay}}, na ginagawang transparent ang papel).
2. Sa DetailCraft (parehong browser), pindutin ang {{key:Mod+V}} o piliin ang {{ui:I-paste}}.

Lumalapag ang picture sa gitna ng grid sa level na nakikita sa {{ui:Plano}} (sa 3D o sa elevation, sa pinakamababang level) at napipili ito. Sinasabi ng status bar kung gaano ito kalaki.

- **Totoong laki:** kapag may drawing scale ang sheet, ang isang pixel ay iginuguhit bilang haba na ipinapakita nito sa drawing.
- **Laki sa papel:** kapag walang scale ang sheet, kasing laki ng area sa papel ang picture, at sinasabi ito ng status bar. I-type ang bagong **mm per pixel** sa {{ui:Properties}} para i-scale ito.

Ang area na kinopya bilang overlay ay nagsisimula sa opacity na kinopyahan nito.

Ang {{key:Mod+V}} ay nagpe-paste ng alin man ang huli mong kinopya: ang area mula sa MarkupCraft, o mga member at footing na kinopya sa DetailCraft. Kung may ibang picture na kinopya sa clipboard pagkatapos ng area (mula sa ibang program), walang mai-paste; kopyahin muli ang area.

## Ilipat, baguhin at burahin ito

- I-click ang picture para piliin ito (ang anumang nasa harap nito ang unang napipili). Ang asul na outline ang nagpapakitang napili ito.
- I-drag ito para ilipat sa ibabaw ng level. Dumidikit ang gitna at mga sulok nito sa mga intersection ng grid.
- Sa {{ui:Properties}}, i-type kung saan pupunta ang gitna nito (x, y) at ang level kung saan ito nakalatag (z), ang **mm per pixel** nito at ang **opacity** nito.
- Inaalis ito ng {{key:Delete}} o {{ui:Delete}}.

Bawat paste, paglipat, pagbabago at pagbura ay isang hakbang: binabawi ito ng {{key:Mod+Z}}.

Naka-save ang picture sa model file, kaya bumubukas ito kasama ng model. Reference lamang ito: wala ito sa mga drawing, export, bill of materials o kopya.
