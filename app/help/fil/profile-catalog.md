---
title: Katalogo ng profile
summary: Bawat built-in na sukat ng steel, paano isinusulat ang mga pangalan ng profile, saan galing ang mga dimensyon, at paano pinangalanan ang mga plato at custom section.
keywords: profiles, sections, catalog, sizes, w shapes, wide flange, s shapes, channel, angle, hss, tube, pipe, ipe, hea, heb, upn, uk, british, ub, uc, pfc, ea, uea, unequal angle, shs, rhs, chs, cold formed, hot finished, blue book, plato, aisc, en 10365, pagpapangalan
from: cd9b2bc3
---

May 2,311 na built-in na sukat ang DetailCraft, bawat isa ay kinopya mula sa nakalathalang table at sinuri ng mga test ng app: ang area na kinuwenta mula sa mga dimensyon ay dapat tumugma sa nakalathalang area, at ang nakalathalang timbang ay dapat tumugma sa area na iyon na pinarami ng density ng steel. Mula sa mga dimensyon nila ginagawa ang mga plato at custom profiles.

## Pagpapangalan

- **US shapes** ay isinusulat gaya ng pag-print ng AISC Manual, na may maliit na x: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Hindi case-sensitive ang pag-type.
- **Pipe** ay isinusulat gaya sa AISC database: Pipe4STD, Pipe4XS, Pipe4XXS (standard, extra strong, double extra strong).
- **European shapes** ay isinusulat gaya sa EN 10365: IPE200, HEA240, HEB300, UPN200 (walang space).
- **UK shapes** ay isinusulat na nauuna ang pamilya, saka ang sukat ayon sa Blue Book: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Nagsisimula sa CF ang cold-formed hollow sections: CFSHS100x100x5.0. Gumagana rin ang pag-type gaya ng madalas sabihin sa mga drawing: 305x165x40 UB, L100x100x10, SHS100x5.
- **Plates** ay `PL<thickness>x<width>` sa millimeters: ang PL20x200 ay 20 mm ang kapal at 200 mm ang lapad. Gumagana ang anumang sukat mula sa tool na {{ui:Plate}}.
- **Custom profiles** ay may anumang pangalang ibigay mo, basta't hindi ito catalog name at hindi ito mukhang pangalan ng plato.

Sa mga listahan ng {{ui:Profile}}, pinangalanan ng heading ng bawat grupo ang pinagmulan nito, halimbawa "W shapes — AISC Shapes Database v16.0".

## Mga pinagmulan

| Grupo | Pinagmulan | Mga tala |
|---|---|---|
| W shapes, S shapes, Channels (C), Angles (L), HSS, Pipe | AISC Shapes Database v16.0 | Na-convert nang eksakto ang mga dimensyon mula inches papuntang millimeters; mass bawat metro mula sa nakalathalang lb/ft |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Millimeters at kg/m gaya ng nakalathala |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), table v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Millimeters at kg/m gaya ng nakalathala |
| Plates | Parametric | Mass mula sa area × 7850 kg/m³ |
| Custom | Sarili mong mga dimensyon | Mass mula sa area × 7850 kg/m³ |

Paano iginuguhit ang mga hugis:

- **W shapes:** walang fillet radius ang AISC database, kaya iginuguhit ng DetailCraft ang fillet bilang r = kdes − tf.
- **S shapes at channels (C, UPN):** magkatapat na flanges ng nakalathalang average na kapal, square na sulok (nakahilig ang totoong flange).
- **Angles:** square na sulok.
- **Rectangular HSS:** ang design wall thickness (0.93 × nominal, gaya ng pinapahintulutan ng AISC 360-22 B4.2) na may outer corner radius na doble nito.
- **Round HSS at Pipe:** design wall thickness (0.93 × nominal).
- **IPE, HEA, HEB, UB, UC:** ang nakalathalang root radius.
- **PFC, EA, UEA:** square na sulok (kasama pa rin sa nakalathalang mass at area ang mga radius).
- **SHS, RHS, CHS:** ang nominal na wall. Hot finished na sulok: outer 1.5 t, inner t. Cold formed: outer 2 t, inner t hanggang 6 mm; 2.5 t at 1.5 t hanggang 10 mm; 3 t at 2 t kapag higit pa.

## Ang mga sukat

Bawat sukat na nakalista sa mga table ng mga grupong ito, mula sa pinakamaliit:

| Grupo | Mga sukat |
|---|---|
| W shapes (289) | W4x13 hanggang W44x408 |
| S shapes (28) | S3x5.7 hanggang S24x121 |
| Channels (32) | C3x3.5 hanggang C15x50 |
| Angles, pantay na legs (61) | L2x2x1/8 hanggang L12x12x1-3/8 |
| HSS, rectangular at square (525) | HSS1-1/2x1-1/2x1/8 hanggang HSS34x10x1 |
| HSS, bilog (189) | HSS1.660x0.140 hanggang HSS28.000x1.000 |
| Pipe (51) | Pipe1/2STD hanggang Pipe26XS |
| IPE (18) | IPE80 hanggang IPE600 |
| HEA (24) | HEA100 hanggang HEA1000 |
| HEB (24) | HEB100 hanggang HEB1000 |
| UPN (18) | UPN50 hanggang UPN400 |
| Angles, magkakaibang legs (76) | L2-1/2x1-1/2x3/16 hanggang L8x6x1 |
| UB (107) | UB127x76x13 hanggang UB1016x305x584 |
| UC (46) | UC152x152x23 hanggang UC356x406x1299 |
| PFC (16) | PFC100x50x10 hanggang PFC430x100x64 |
| EA (42) | EA20x20x3.0 hanggang EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 hanggang UEA200x150x18.0 |
| SHS, hot finished (123) | SHS40x40x3.2 hanggang SHS400x400x17.5 |
| RHS, hot finished (161) | RHS50x30x3.2 hanggang RHS500x300x17.5 |
| CHS, hot finished (103) | CHS42.4x3.2 hanggang CHS508.0x17.5 |
| CFSHS, cold formed (96) | CFSHS25x25x2.0 hanggang CFSHS400x400x12.5 |
| CFRHS, cold formed (137) | CFRHS50x25x2.0 hanggang CFRHS500x300x12.5 |
| CFCHS, cold formed (106) | CFCHS33.7x3.0 hanggang CFCHS508.0x16.0 |

Ang mirrored na unequal angle ay parehong piyesa na ibinaliktad mula dulo hanggang dulo, gaya ng paggawa ng shop ng kabaligtarang kamay: kasama nitong gumagalaw ang mga butas, cope, at gusset nito.

Pumili ng placing tool at ng sukat para makita ang lalim, lapad ng flange, kapal ng web at flange, fillet radius, area (cm²), mass (kg/m), at pinagmulan sa kahon na {{ui:Profile}} ng panel na {{ui:Properties}}.

## Ano ang kaya ng bawat hugis

| Hugis | Mga butas | Cope | End plates at base plates | NC file | Shop drawing |
|---|---|---|---|---|---|
| I-shapes (W, S, IPE, HEA, HEB, UB, UC, custom I) | Web, itaas na flange, ibabang flange | Oo | End plates: beam at column. Base plates: oo | Oo | Oo |
| Channels (C, UPN, PFC) | Web, itaas na flange, ibabang flange | Hindi | Base plates lang | Oo | Oo |
| Rectangular HSS, SHS, RHS | Side wall (web), itaas, ibaba | Hindi | Base plates lang | Oo | Oo |
| Round HSS, Pipe, CHS | Hindi pa | Hindi | Base plates lang | Oo | Oo |
| Angles (L, EA, UEA) | Hindi pa | Hindi | Base plates lang | Oo | Oo |
| Plates at custom flat bars | Face ng plato | Hindi | Hindi | Oo | Oo |

Para sa rectangular tube, ang butas sa "web" face ay dumadaan sa dalawang side wall. Ang laman ng bawat NC file ay nasa [Mga field ng NC file](topic:nc1-fields).

## Kailangan ng ibang sukat?

Idagdag ito bilang [custom profile](topic:plates-and-profiles#add-a-custom-profile). Hindi pa maaaring i-edit ang built-in na listahan mula sa app.
