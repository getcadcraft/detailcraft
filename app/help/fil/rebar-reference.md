---
title: Sanggunian sa rebar
summary: Mga laki ng bar, sukat ng hook, shape code, cut length at mga column ng bending schedule na ginagamit ng DetailCraft.
keywords: rebar, laki ng bar, hooks, bend diameter, shape codes, cut length, bending schedule, bar list, astm a615, aci 318
from: 1583535e
---

## Mga laki ng bar

Mula sa ASTM A615/A615M Table 1 (inch-pound na designation). Ang millimeter at kg/m ay eksaktong conversion ng nakalathalang inch at lb/ft na mga halaga. Ipinapakita ng mga listahan ang bawat laki gaya ng, halimbawa, "#5 (15.9 mm)".

| Bar | Diameter (mm) | Mass (kg/m) | Area (mm²) | Panloob na diameter ng yuko | Binti ng 90° hook, labas-hanggang-labas (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

Sa [Mga setting ng DetailCraft](topic:settings) ({{ui:Rebar}}), maipapakita ng **ASTM bar names** ang mga bar na ito sa kanilang soft-metric na A615M na pangalan: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (parehong mga bar; nakalista ang parehong pangalan sa ACI 315-99 Table 1).

### Metric bar (BS 4449)

| Bar | Diameter (mm) | kg/m | Pinakamaliit na radius ng yuko r (mm) | Binti ng hook = end projection P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Ang masa ay ang nominal na section na pinarami ng 7850 kg/m³. Ang radius at end projection ay ang pinakamaliit na halaga ng BS 8666:2020 (ang talahanayan ng pinakamaliit na dimensyon; ang dating diameter ay 2r). Ang footing na may BS bar ay nakakakuha ng mga binti ng hook na P at cut length ayon sa mga pormula ng BS 8666 sa ibaba. Kapag pinili ang European steel sa mga setting, ang mga bagong footing ay magsisimula sa H16 mat at H20 starter bar sa C30/37 na kongkreto.

## Mga hook

ASTM bar: karaniwang 90° hook mula sa ACI 318-19 Table 25.3.1: panloob na diameter ng yuko na 6 db para sa #3 hanggang #8 at 8 db para sa #9 hanggang #11, na may tuwid na extension na 12 db lampas sa yuko. Ang binti ng hook, sinukat na labas-hanggang-labas, ay kalahati ng diameter ng yuko + db + 12 db.

Kung hindi kasya ang hook ng mat bar sa lalim ng footing sa loob ng cover, pinapaikli ng DetailCraft ang binti para kumasya at naglilista ng babala.

## Mga shape

Tatlong shape ang iniimbak ng DetailCraft. Inilalimbag ng bending schedule ang mga ito bilang mga code ng DetailCraft, bilang mga uri ng ACI 315, o bilang mga BS 8666 shape code: piliin ang **Bending schedule shape codes** sa [Mga setting ng DetailCraft](topic:settings) ({{ui:Rebar}}).

| Code | Shape | Dimensyon |
|---|---|---|
| S | Tuwid | A = haba |
| L | Isang 90° na yuko | A = pangunahing binti, B = binti ng hook, parehong labas-hanggang-labas |
| U | Dalawang 90° na yuko sa iisang gilid | A = gitna, B at C = ang dalawang binti, labas-hanggang-labas |

Ang mat bar na naka-on ang {{ui:End hooks}} ay U; kung hindi, S. Ang starter bar na naka-on ang {{ui:Hook at the bottom}} ay L; kung hindi, S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Fig. 10) |
|---|---|---|
| S | 00, L = A | walang type number |
| L | 11, L = A + B − 0.5r − d | walang type number: walang bar na may isang hook sa figure |
| U | 21, A at C ang mga binti, B ang gitna: L = A + B + C − r − 2d | Type 2, hook A at G, tuwid na B |

Sa mga code ng BS 8666 o ACI 315, sumusunod ang mga column na A, B at C ng schedule sa lettering ng pamantayang iyon (ang gitna ng U ay B).

## Haba ng putol

Para sa mga BS 4449 bar, ang cut length ay ang pormula ng BS 8666 ng shape code ng bar (nasa itaas). Para sa mga ASTM bar, ito ang eksaktong haba ng centerline ng bar: ang mga tuwid na bahagi at ang mga yuko bilang mga arko na may radius na kalahati ng diameter ng yuko kasama ang kalahati ng diameter ng bar. Hindi ito kinukuwenta mula sa talahanayan ng bawas sa yuko, kaya maaaring magkaiba ito ng ilang millimeter sa schedule na gumagamit nito.

## Layout

- Bottom mat: ang mga bar sa kahabaan ng L ang bumubuo sa mas mababang layer; ang mga bar sa kahabaan ng B ay nakapatong sa mga ito. Pantay na nakalatag ang bawat set sa footing sa loob ng cover, sa spacing na ibinigay mo o mas malapit, na may hindi bababa sa dalawang bar.
- Starter bar: isang grid ng mga bar sa kahabaan ng L at B sa mga spacing na ibinigay mo, nakasentro sa footing, nakatayo sa mat at lumalabas sa itaas ng top ayon sa projection na ibinigay mo. Nakaturo palabas ang bawat hook.

## Mga check

| Check | Panuntunan | Resulta |
|---|---|---|
| Espasyo para sa mga bar | Ang cover sa magkabilang gilid ay nag-iiwan ng espasyo para sa mga bar | Tinatanggihan kung hindi |
| Lalim para sa dalawang layer | Ang lalim na minus dalawang cover ay kumakasya sa parehong mat layer | Tinatanggihan kung hindi |
| Kasya ang starter | Kasya ang starter grid sa loob ng cover | Tinatanggihan kung hindi |
| Malinaw na spacing | Kahit man lang ang mas malaki sa 25.4 mm at db (ACI 318-19 25.2.1; hindi chinecheck ang laki ng aggregate) | Babala |
| Lalim ng hook | Kasya ang binti ng hook sa lalim sa loob ng cover | Babala, pinaikli ang binti |
| Hook ng starter | Nananatili sa labas ng cover ang mga hook | Babala |

## Mga column ng bending schedule

Ang tab na {{ui:Bending schedule}} at ang CSV nito ay may mga column na ito: Bar mark, Size, Shape, A (mm), B (mm), C (mm), Count, Cut length (mm), Total length (m), kg/m, Weight each (kg), Total weight (kg), Used for. Ang huling row ang nagbubuod ng count, haba at timbang.
