---
title: Profielkatalogus
summary: Elke ingeboude staalgrootte, hoe profielname geskryf word, waar die afmetings vandaan kom, en hoe plate en pasgemaakte snitte benoem word.
keywords: profiele, snitte, katalogus, groottes, w-vorms, breë flens, s-vorms, kanaal, hoek, hss, buis, pyp, ipe, hea, heb, upn, uk, brits, ub, uc, pfc, ea, uea, ongelyke hoek, shs, rhs, chs, koudgevorm, warmafgewerk, blou boek, plaat, aisc, en 10365, benoeming
from: cd9b2bc3
---

DetailCraft het 2,311 ingeboude groottes, elk gekopieer uit 'n gepubliseerde tabel en deur die program se toetse nagegaan: die oppervlakte wat uit die afmetings uitgewerk word, moet by die gepubliseerde oppervlakte pas, en die gepubliseerde gewig moet by daardie oppervlakte maal die digtheid van staal pas. Plate en pasgemaakte profiele word uit hul afmetings gemaak.

## Benoeming

- **VS-vorms** word geskryf soos die AISC Manual dit druk, met 'n kleinletter x: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Tik is nie hoofletter-gevoelig nie.
- **Pyp** word geskryf soos in die AISC-databasis: Pipe4STD, Pipe4XS, Pipe4XXS (standaard, ekstra sterk, dubbel ekstra sterk).
- **Europese vorms** word geskryf soos in EN 10365: IPE200, HEA240, HEB300, UPN200 (sonder spasie).
- **VK-vorms** word geskryf met die familie eerste, dan die Blue Book se grootte: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Koudgevormde holle snitte begin met CF: CFSHS100x100x5.0. Tik dit soos tekeninge dit dikwels sê, werk ook: 305x165x40 UB, L100x100x10, SHS100x5.
- **Plate** is `PL<dikte>x<wydte>` in millimeter: PL20x200 is 20 mm dik en 200 mm breed. Enige grootte uit die {{ui:Plaat}}-gereedskap werk.
- **Pasgemaakte profiele** het die naam wat jy aan hulle gee, solank dit nie 'n katalogusnaam is nie en nie soos 'n plaatnaam lyk nie.

In die {{ui:Profiel}}-lyste noem elke groep se opskrif sy bron, byvoorbeeld "W-vorms — AISC Shapes Database v16.0".

## Bronne

| Groep | Bron | Notas |
|---|---|---|
| W-vorms, S-vorms, Kanale (C), Hoeke (L), HSS, Pyp | AISC Shapes Database v16.0 | Afmetings presies van duim na millimeter omgeskakel; massa per meter uit die gepubliseerde lb/ft |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Millimeter en kg/m soos gepubliseer |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), tabel v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Millimeter en kg/m soos gepubliseer |
| Plate | Parametries | Massa uit oppervlakte × 7850 kg/m³ |
| Pasgemaakte | Jou afmetings | Massa uit oppervlakte × 7850 kg/m³ |

Hoe vorms geteken word:

- **W-vorms:** die AISC-databasis gee geen vulradius nie, so DetailCraft teken die vulling as r = kdes − tf.
- **S-vorms en kanale (C, UPN):** ewe-wydte flense van die gepubliseerde gemiddelde dikte, vierkantige hoeke (die werklike flens is skuins).
- **Hoeke:** vierkantige hoeke.
- **Reghoekige HSS:** die ontwerpwanddikte (0.93 × nominaal, soos AISC 360-22 B4.2 toelaat) met 'n buitehoekradius van twee keer dit.
- **Ronde HSS en Pyp:** ontwerpwanddikte (0.93 × nominaal).
- **IPE, HEA, HEB, UB, UC:** die gepubliseerde wortelradius.
- **PFC, EA, UEA:** vierkantige hoeke (die gepubliseerde massa en oppervlakte sluit steeds die radiusse in).
- **SHS, RHS, CHS:** die nominale wand. Warmafgewerkte hoeke: buite 1.5 t, binne t. Koudgevorm: buite 2 t, binne t tot 6 mm; 2.5 t en 1.5 t tot 10 mm; 3 t en 2 t bo dit.

## Die groottes

Elke grootte wat die tabelle in hierdie groepe lys, kleinste eerste:

| Groep | Groottes |
|---|---|
| W-vorms (289) | W4x13 tot W44x408 |
| S-vorms (28) | S3x5.7 tot S24x121 |
| Kanale (32) | C3x3.5 tot C15x50 |
| Hoeke, gelyke bene (61) | L2x2x1/8 tot L12x12x1-3/8 |
| HSS, reghoekig en vierkant (525) | HSS1-1/2x1-1/2x1/8 tot HSS34x10x1 |
| HSS, rond (189) | HSS1.660x0.140 tot HSS28.000x1.000 |
| Pyp (51) | Pipe1/2STD tot Pipe26XS |
| IPE (18) | IPE80 tot IPE600 |
| HEA (24) | HEA100 tot HEA1000 |
| HEB (24) | HEB100 tot HEB1000 |
| UPN (18) | UPN50 tot UPN400 |
| Hoeke, ongelyke bene (76) | L2-1/2x1-1/2x3/16 tot L8x6x1 |
| UB (107) | UB127x76x13 tot UB1016x305x584 |
| UC (46) | UC152x152x23 tot UC356x406x1299 |
| PFC (16) | PFC100x50x10 tot PFC430x100x64 |
| EA (42) | EA20x20x3.0 tot EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 tot UEA200x150x18.0 |
| SHS, warmafgewerk (123) | SHS40x40x3.2 tot SHS400x400x17.5 |
| RHS, warmafgewerk (161) | RHS50x30x3.2 tot RHS500x300x17.5 |
| CHS, warmafgewerk (103) | CHS42.4x3.2 tot CHS508.0x17.5 |
| CFSHS, koudgevorm (96) | CFSHS25x25x2.0 tot CFSHS400x400x12.5 |
| CFRHS, koudgevorm (137) | CFRHS50x25x2.0 tot CFRHS500x300x12.5 |
| CFCHS, koudgevorm (106) | CFCHS33.7x3.0 tot CFCHS508.0x16.0 |

'n Gespieëlde ongelyke hoek is dieselfde stuk end-tot-end omgedraai, soos 'n werkswinkel die teenoorgestelde hand maak: sy gate, uitsnitte en skoorkopplaat gaan saam.

Kies 'n plaasgereedskap en kies 'n grootte om sy diepte, flenswydte, lyf- en flensdikte, vulradius, oppervlakte (cm²), massa (kg/m) en bron te sien in die {{ui:Profiel}}-blokkie van die {{ui:Eienskappe}}-paneel.

## Wat elke vorm kan doen

| Vorm | Gate | Uitsnitte | Eindplate en basisplate | NC-lêer | Werkswinkeltekening |
|---|---|---|---|---|---|
| I-vorms (W, S, IPE, HEA, HEB, UB, UC, pasgemaakte I) | Lyf, boonste flens, onderste flens | Ja | Eindplate: balk en kolom. Basisplate: ja | Ja | Ja |
| Kanale (C, UPN, PFC) | Lyf, boonste flens, onderste flens | Nee | Net basisplate | Ja | Ja |
| Reghoekige HSS, SHS, RHS | Sydwand (lyf), bo, onder | Nee | Net basisplate | Ja | Ja |
| Ronde HSS, Pyp, CHS | Nog nie | Nee | Net basisplate | Ja | Ja |
| Hoeke (L, EA, UEA) | Nog nie | Nee | Net basisplate | Ja | Ja |
| Plate en pasgemaakte platstaal | Plaatvlak | Nee | Nee | Ja | Ja |

Vir 'n reghoekige buis gaan 'n gat op die "lyf"-vlak deur albei sydwande. Wat elke NC-lêer bevat, is in [NC-lêervelde](topic:nc1-fields).

## Het jy 'n ander grootte nodig?

Voeg dit by as 'n [pasgemaakte profiel](topic:plates-and-profiles#add-a-custom-profile). Die ingeboude lys kan nog nie uit die program verander word nie.
