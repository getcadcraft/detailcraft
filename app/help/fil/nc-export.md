---
title: Ipadala ang mga NC file sa shop
summary: I-export ang mga DSTV NC file para sa bawat marka ng part (I-shapes, channels, angles, HSS, plates), naka-zip, at suriin ang mga ito bago makarating sa makina.
keywords: nc, nc1, dstv, cnc, makina, beam line, drill line, plate cutting, export, fabrication, zip
from: 598b6091
---

Sumusulat ang DetailCraft ng isang DSTV NC file (`.nc1`) para sa bawat marka ng part, para sa I-shapes, channels, angles, rectangular at round HSS, at plates, at pinagsasama ang mga ito sa zip. Binabasa ng beam line at plate machine ang mga file na ito para lagarian, i-drill, at putulin.

## I-export

1. Linisin muna ang tab na {{ui:Mga problema}}: ang connection na hindi nabuo ay walang nalilikhang butas.
2. I-save ang model ({{key:Mod+S}}), para tumugma ang mga NC file sa naka-save na model.
3. Piliin ang {{ui:NC files}} sa grupong {{ui:Output}}.
4. Dina-download ng browser ang `<name> NC.zip`. Ipinapakita ng status bar kung ilang file ang laman nito, at inilalista ang anumang marka na hindi nito naisulat (angle o round tube na may cope).

Sa loob ng zip, pinangalanan ang bawat file ayon sa marka ng part nito: `b1.nc1`, `c1.nc1`, `p1.nc1` … Hindi naka-compress ang zip at mabubuksan ng anumang zip tool.

Kung walang part ang model, sinasabi ito ng status bar.

## Ano ang laman ng bawat file

- **Header (ST):** ang pangalan ng model bilang order, ang marka ng part bilang drawing at piece, phase 1, ang grade ng materyal, ang dami, ang profile at mga dimensyon nito, mass bawat metro at paint surface bawat metro. Tuwid (square) ang mga saw cut.
- **Outer contours (AK):** ang outline ng web na may mga cope na naka-notch palabas, at ang bawat outline ng flange na pinaikli kung saan inaalis ito ng cope.
- **Holes (BO):** bawat butas na may face, posisyon, at diameter nito, kasama ang mga butas na ginawa ng end plate at base plate.

Field kada field, kasama ang mga patakaran sa face at coordinate: [Mga field ng NC file](topic:nc1-fields).

## Ano ang hindi naisusulat

- Angles at round tube na may cope: walang NC file. Nakalista sa status bar ang kanilang mga marka.
- Mga butas sa round tube (walang ginagawa ang DetailCraft nito).
- Bevels, inner contours, part markings (scribing), at saw angles na hindi square.
- Slotted holes (round holes lang ang gawa ng DetailCraft).

## Suriin bago i-machine

Muling binabasa ng sarili nitong test suite ang mga NC file ng DetailCraft, pero hindi pa ito napapatakbo sa mga makina ng iyong shop.

1. Buksan ang mga file sa NC viewer ng shop mo o sa software ng makina, at ikumpara ang mga ito sa shop drawings.
2. Suriin ang isang part ng bawat uri sa makina bago magpatakbo ng batch.
3. Suriin kung paano binabasa ng software mo ang flange y-coordinates at ang faces ng channels: sinusukat ng DetailCraft ang flange y mula sa likod na gilid, at inilalatag ang channels nang nakatihaya gaya ng pagguhit ng standard (tingnan ang [Mga field ng NC file](topic:nc1-fields#faces-and-coordinates)).
