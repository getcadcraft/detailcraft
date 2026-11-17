---
title: Mga field ng NC file
summary: Ang laman ng bawat DSTV NC file na isinusulat ng DetailCraft, field kada field, at kung paano sinusukat ang face at coordinate.
keywords: nc1, dstv, nc file, st block, ak, bo, header, mga face, mga coordinate, cnc, format
from: 1b676fc1
---

Naglalarawan ang bawat `.nc1` file ng isang marka ng part. Nagtatapos sa CR LF ang mga linya. Plain ASCII ang laman ng mga text field; nagiging "?" ang ibang karakter. Ang ikalawang linya ay komento, `** DetailCraft <mark>.nc1`.

## Header (ST)

| Field | I-shape, channel | Angle | Rectangular HSS | Round HSS | Plate |
|---|---|---|---|---|---|
| Order | Ang pangalan ng model | ← | ← | ← | ← |
| Drawing, piece | Marka ng part | ← | ← | ← | ← |
| Phase | Phase ng part, o 1 | ← | ← | ← | ← |
| Steel quality | Grade ng materyal | ← | ← | ← | ← |
| Quantity | Bilang ng part na may ganitong marka | ← | ← | ← | ← |
| Profile | Pangalan ng profile, halimbawa W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Profile code | I o U (channel) | L | M | RO | B |
| Length | Haba ng putol | ← | ← | ← | Haba |
| Height | Lalim d | Leg | Taas | Diameter | Lapad ng plato |
| Flange width | bf | Leg | Lapad | Diameter | 0 |
| Flange thickness | tf | t | Kapal ng wall t | Kapal ng wall t | 0 |
| Web thickness | tw | t | Kapal ng wall t | Kapal ng wall t | Kapal ng plato |
| Radius | Fillet radius (0 para sa AISC channels) | 0 | Radius ng panlabas na sulok | 0 | 0 |
| Weight per meter | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Paint surface per meter | Panlabas na perimeter, m²/m | ← | ← | ← | 2 (magkabilang face, m²/m²) |
| Saw angles (4 fields) | 0 (square) | ← | ← | ← | ← |
| Text fields (4) | `-` | ← | ← | ← | ← |

Sumusunod ang plates sa column ng standard na "for the sheets". Walang column ang standard para sa round tube: isinusulat ng DetailCraft ang diameter bilang height at flange width, at ang wall bilang parehong kapal.

## Outer contours (AK)

- **I-shapes at channels:** ang web (v), na may rectangular notch para sa bawat cope; bawat flange (o at u), pinaikli sa dulo kung saan ang cope ay kasing lalim ng flange o mas malalim pa.
- **Rectangular HSS:** parehong side wall (v at h), naka-notch para sa mga cope, at ang top at bottom wall (o at u).
- **Angles:** isang rectangle bawat leg (v at u). Hindi naisusulat ang mga cope sa angles: nakalista bilang hindi naisulat ang ganoong part. Ang angle brace na naka-bolt sa isang [gusset](topic:brace-gussets) ay may mga butas sa leg na naka-bolt: v para sa leg na nasa kahabaan ng u ng part, u para sa leg na nasa kahabaan ng v nito.
- **Round HSS:** isang rectangle sa v, ang tube na nakikita mula sa harap (haba × diameter).
- **Plates:** isang rectangle sa face v.

Sarado ang bawat contour (inuulit ang unang punto sa dulo) at tumatakbo nang counter-clockwise.

## Holes (BO)

Isang linya bawat butas: face, x, y, diameter, depth 0 (through). Kasama ang lahat ng butas, ang mga inilagay mo at ang mga ginawa ng connection. Ang butas na dumadaan sa side walls ng rectangular HSS ay isinusulat nang dalawang beses, isang beses sa v at isang beses sa h.

## Mga face at coordinate

Inilalagay ang bawat profile ayon sa pagguhit ng standard ng posisyon ng profile (DSTV 1998, p. 7): x sa kahabaan ng part, Y sa kabuuan, Z pataas mula sa likod na face, at ang zero point ay nasa panlabas na sulok. Hindi kailanman binabaligtad ng DetailCraft ang part para tumugma sa pagguhit.

| Face | I-shape | Channel | Angle | Rectangular HSS | Plate |
|---|---|---|---|---|---|
| v | Web, harap | Web, tanaw mula sa gilid ng toe | Ang leg sa kahabaan ng u ng part | Side wall sa −u | Ang face ng plato |
| h | | | | Side wall sa +u | |
| o | Itaas na flange | **Ibabang** flange | | Itaas na wall | |
| u | Ibabang flange | **Itaas** na flange | Ang leg sa kahabaan ng v ng part | Ibabang wall | |

- **x** ay tumatakbo sa kahabaan ng part mula sa simula ng putol nito.
- **I-shapes at rectangular HSS:** y sa web o side walls mula sa ilalim ng profile; y sa flange o sa top at bottom walls mula sa gilid nito sa likod na bahagi (ang +u side ng part).
- **Channels** ay nakahiga nang nakatihaya at nakataas ang mga toe, gaya ng pagguhit ng standard. Kaya ang y sa web ay tumatakbo mula sa labas ng itaas na flange pababa, ang itaas na flange ay face u at ang ibabang flange ay face o, at ang y sa flange ay tumatakbo mula sa likod ng web papunta sa toe.
- **Angles:** y sa bawat leg mula sa heel.
- **Plates:** y mula sa −u edge ng plato.

Suriin muna kung paano binabasa ng software ng makina mo ang channel faces bago putulin: may ilang programang binabaliktad ang channel.

## Hindi naisusulat

Bevels, inner contours, markings (SI), saw angles maliban sa square, slotted holes, butas sa round tubes (walang ginagawa ang DetailCraft), at copes sa angles at round tubes.
