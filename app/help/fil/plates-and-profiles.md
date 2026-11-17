---
title: Maglagay ng plato at magdagdag ng custom profile
summary: Maglagay ng hiwalay na plato ayon sa kapal at lapad, at tukuyin ang sarili mong I, channel, angle, tube, o flat bar section.
keywords: plato, flat, custom profile, user profile, parametric, section, hugis, cross section, pl
from: c24c3b51
---

## Maglagay ng plato

Inilalagay ang plato gaya ng beam: tumatakbo ito sa pagitan ng dalawang intersection, na ang lapad ay nakahalang at ang kapal ay pataas.

1. Piliin ang {{ui:Plate}} sa grupong {{ui:Ilagay}}, o pindutin ang {{key:P}}.
2. Sa panel na {{ui:Properties}}, itakda ang {{ui:Kapal (mm)}} at {{ui:Lapad (mm)}}. Ang default ay 20 x 200 sa A36.
3. Itakda ang {{ui:Materyal}} at {{ui:Pag-ikot (°)}} kung kailangan. Ang rotation na 90 ay itinatayo ang plato nang nakatayo sa gilid.
4. I-click ang dalawang intersection, o gamitin ang form na {{ui:Idagdag ayon sa grid}}.

Isinusulat ang pangalan ng profile ng plato bilang `PL<thickness>x<width>`, halimbawa PL20x200. Ang haba nito ay ang distansya ng dalawang punto.

Para baguhin ang laki ng nailagay na plato, piliin ito at baguhin ang {{ui:Kapal (mm)}} o {{ui:Lapad (mm)}}.

Sarili nilang part ang mga plato na ilalagay mo (marka p, assembly P). Plato rin ang mga end plate at base plate na ginawa ng mga connection, pero binabago mo ang mga ito sa pamamagitan ng connection nila; tingnan ang [Mga end plate](topic:end-plates).

## Magdagdag ng custom profile

Kapag wala sa catalog ang section na kailangan mo, gawin ito mula sa mga dimensyon nito. Kabilang ang custom profile sa model at naka-save kasama nito. Para magamit ito sa bawat bagong model, itago ito sa My profiles, na inilalarawan sa ilalim ng "Ilagay ang profile para sa mga bagong model" sa ibaba.

1. Sa panel na {{ui:Model}} sa kaliwa, buksan ang {{ui:Custom profile}}.
2. I-type ang {{ui:Pangalan}}, halimbawa `W8x18-custom` o `RHS 120x80x5`. Hindi ito maaaring catalog name o magmukhang pangalan ng plato.
3. Pumili ng {{ui:Hugis}}: {{ui:I-shape}}, {{ui:Channel}}, {{ui:Equal angle}}, {{ui:Rectangular tube}}, {{ui:Round tube}} o {{ui:Flat bar}}.
4. Punan ang mga dimensyong lumilitaw, lahat sa millimeters:

| Hugis | Mga dimensyon |
|---|---|
| I-shape | Lalim d, lapad ng flange bf, web tw, flange tf, fillet radius r (maaaring 0) |
| Channel | Lalim d, lapad ng flange bf, web tw, flange tf (square na sulok) |
| Equal angle | Lapad b (bawat leg), kapal t |
| Rectangular tube | Taas h, lapad b, kapal t (outer corner radius 2t) |
| Round tube | Diameter D, kapal t |
| Flat bar | Lapad b, kapal t |

5. Iwanang naka-tick ang {{ui:Ilagay sa My profiles}} para mapunta ito sa bawat bagong model (tingnan sa ibaba), o i-untick para sa model na ito lang.
6. Piliin ang {{ui:Magdagdag ng profile}}.

Sinasabi ng status bar: "Naidagdag ang profile "…"; nasa ilalim ng Custom sa bawat listahan ng profile." Lumalabas ito sa listahan sa ilalim ng form at sa dulo ng bawat listahan ng {{ui:Profile}}.

Sinusuri ng DetailCraft kung maaaring umiral ang hugis. Makakakita ka ng mga mensahe gaya ng "Hindi kasya sa lalim at lapad ang web at mga flange.", "Masyadong malaki ang fillet radius para sa flange." o "Masyadong makapal ang wall." Itama ang mga numero at piliin muli ang {{ui:Magdagdag ng profile}}.

### Ano ang nakukuha ng custom profile

- Mass bawat metro mula sa area × 7850 kg/m³ (ang mga sukat sa catalog ay gumagamit ng nakalathalang timbang).
- Tumatanggap ang custom na I-shape ng mga butas, cope, end plate, NC file, at shop drawing, gaya ng I-shape sa catalog.
- Kumikilos na parang plato ang custom na flat bar.
- Tumatanggap ng butas ang custom na channel at tube; hindi pa ang angle at round tube.

Hindi mo maaaring i-edit o alisin ang custom profile sa model kapag naidagdag na ito (gamitin agad ang {{key:Mod+Z}} kung nagkamali ka). Bigyan ng bagong pangalan ang naitamang profile.

## Ilagay ang profile para sa mga bagong model

Ang {{ui:My profiles}}, sa ilalim ng form, ay sarili mong listahan ng custom profiles. Nakalagay ito sa browser na ito, sa computer na ito, hindi sa model file at hindi sa account mo.

- Ang profile na idinagdag na naka-tick ang {{ui:Ilagay sa My profiles}} ay mapupunta sa listahan. Ang bawat bagong model, kasama ang model na binubuksan ng DetailCraft sa pagsisimula, ay magsisimula na kasama ang lahat ng ito sa mga listahan ng profile nito.
- Ang profile na nasa model pero wala sa listahan ay may button na {{ui:Ilagay}} sa tabi nito.
- Sa model na walang isa sa mga profile mo (halimbawa, mas lumang file), piliin ang {{ui:Gamitin dito}} para idagdag ito.
- Inaalis ng {{ui:Alisin}} ang profile sa listahan. Pinananatili ng mga model na gumagamit na nito ang sarili nilang kopya.
- Pinananatili ng model na binubuksan mo ang mga profile na naka-save sa file nito. Hindi kailanman nababago ng pagbubukas ng file ang listahan mo.
- Hindi tinatanggap ang pangalang nasa listahan na may ibang dimensyon: bigyan ng ibang pangalan ang bago.
- Ang pag-clear ng site data ng browser, o paggamit ng ibang browser o computer, ay magsisimula sa walang laman na listahan. Hindi ito kayang panatilihin ng private window; sinasabi ito ng app.
