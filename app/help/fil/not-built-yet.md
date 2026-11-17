---
title: Ano ang hindi pa nagagawa
summary: Ano ang hindi pa kayang gawin ng early build na ito ng DetailCraft, at ano ang gagawin ngayon.
keywords: limitasyon, limitations, kulang, roadmap, hindi suportado, paparating, planado, workaround, todo
from: ea411885
---

Early build ang DetailCraft. Nakalista sa pahinang ito ang mga hindi pa nito kayang gawin, para makapagplano ka. Walang pangakong petsa dito.

## Pagmomodelo

| Hindi pa | Sa ngayon, gawin ito |
|---|---|
| Pag-drag sa isang dulo ng member (pag-unat dito) | I-edit ang {{ui:Simula}} o {{ui:Dulo}} sa ilalim ng {{ui:Mga dulo (x, y, z mm)}} sa panel na {{ui:Properties}} |
| Filter sa pagpili (beam lang, isang profile lang) | I-drag ang window, saka {{key:Shift}}+click para alisin ang mga part |
| Mag-array ng pinili; pag-ikot sa sloped na axis; pag-mirror sa sloped na plane | Kopyahin at i-paste sa offset, o {{ui:Duplicate}} ito; gumagana ang pag-ikot at pag-mirror sa plan ([Pumili gamit ang window, ilipat, ikutin, i-mirror, baguhin nang marami](topic:select-and-change)) |
| Mga punto sa labas ng grid habang nagki-click | Ilagay sa grid, saka i-type ang end coordinates |
| Elevation sa kahabaan ng numbered grid lines; naka-save na views; work planes | Gamitin ang {{ui:3D}}, o {{ui:Idagdag ayon sa grid}} |
| Mga butas na iginuhit bilang totoong putol sa 3D view | Lumalabas ang mga butas bilang madilim na plug; totoo ang mga ito sa bawat export |
| Bilog o anggulong cope, iba pang putol at fitting | Square na cope sa I-shapes lang |
| Mga butas na idinadagdag mo sa angles at round tubes | Ang butas sa angle ay galing lang sa [brace gusset](topic:brace-gussets) |
| Imperial na input | I-type sa millimeters (25.4 bawat inch) |
| Pag-edit o pag-alis ng custom profile | Magdagdag ng naitamang profile sa bagong pangalan |

## Hagdan

| Hindi pa | Sa ngayon, gawin ito |
|---|---|
| Handrails, landings, toe plates, grating treads, spiral at dog-leg na hagdan | Tuwid na flight lang; tingnan ang [Hagdan](topic:stairs) |
| Mga putol sa dulo ng stringer laban sa mga sahig | Square-cut na stringers; putulin ang mga ito sa software ng shop mo |

## Mga connection

Anim na connection ang ginagawa ng DetailCraft: brace gusset (tingnan ang [Mga brace gusset](topic:brace-gussets)); bolted splice sa pagitan ng dalawang piraso ng iisang I-shape (tingnan ang [Mga splice](topic:splices)); mitre sa pagitan ng dalawang I-shape na nagtatagpo sa anggulo, putol lang o may bolted end plates (tingnan ang [Mga mitre joint](topic:mitres)); flush o extended na bolted end plate mula sa level, tuwid na I-shape beam papunta sa flange o web ng I-shape column; shear tab mula sa beam (square, skewed o sloped) papunta sa flange o web ng column; at column base plate na may apat na anchor rod.

| Hindi pa | Sa ngayon, gawin ito |
|---|---|
| Skewed o sloped na end plates | Gamitin ang [mga shear tab](topic:shear-tabs), na tumatanggap ng skewed at sloped na beams |
| Clip angles; splice fill plates at splices sa magkaibang sukat; corner gussets na welded sa beam at column, chamfered gussets | I-detail ang mga ito sa ibang software, o magdagdag ng plates at butas nang manual bilang loose parts; tingnan ang [Mga splice](topic:splices), [Mga brace gusset](topic:brace-gussets) |
| Chamfered o tapered na base stiffeners; grout holes; ang footing pocket para sa shear lug | Rectangular stiffeners; tingnan ang [Mga base plate](topic:base-plates) |
| Haunches; welded mitres na may butt weld; stiffeners na nakahanay sa flanges ng kabilang member | Isang [mitre](topic:mitres) na may end plates at web stiffeners, o simpleng mitre cut; magdagdag ng ibang plates nang manual bilang loose parts |
| Pagsusuri sa disenyo ng connection (lakas) | Suriin ang mga connection gamit ang kuwenta ng engineer mo; nagbababala lang ang DetailCraft tungkol sa edge distance at spacing |
| Slotted holes | Round holes lang |

## Analysis

| Hindi pa | Sa ngayon, gawin ito |
|---|---|
| Mga design check na lampas sa steel I-shapes: tubes, angles, channels, welded shapes, slender o class 4 na parts, torsion, connections; concrete: sway slenderness, torsion, seismic detailing, slabs at walls | Sinusuri ng tab na {{ui:Analysis}} ang steel I-shapes ayon sa AISC 360 o EN 1993-1-1 ([Suriin ang mga steel member ayon sa design code](topic:design-checks)); ang iba ay iniiwan nitong may markang "not checked"; sinusuri ng engineer ang lahat ng ito |
| Buckling analysis, vibration | Second order ay P-Delta lang (elastic); walang buckling analysis (nasa tab na Analysis ang modal, response spectrum, time history at pushover) |
| Mga design check na nasuri na ng engineer | Panandaliang tulong lang ang mga ito: suriin ang dalawa o tatlong member nang manual o sa sariling software ng engineer mo bago mo ito pagkatiwalaan |
| Floor, wind at snow loads na awtomatikong ginagawa mula sa lugar | Maglagay ng loads sa members nang manual, sa kN/m o kN |
| Member offsets, eccentric joints, tension-only braces, plates at footings sa frame | Sinusuri ang mga member sa kanilang work line; tension at compression ang dinadala ng brace |

## Rebar

| Hindi pa | Sa ngayon, gawin ito |
|---|---|
| Round columns, spirals, sloped o curved na beams, slabs na hindi rectangle, walls na hindi tuwid | Rectangular na beams, columns, slabs at walls ([Detalyehin ang reinforced concrete](topic:reinforced-concrete)) |
| Mga bar na binaluktot papunta sa lap, staggered laps, laps na ilalagay mo kung saan mo gusto | Laps sa pantay na hakbang, bawat bar ay naka-lap sa iisang section (ACI Class B, EN α6 = 1.5) |
| Corner bars sa mga opening, punching shear reinforcement, seismic detailing (ACI 318-19 chapter 18) | Trimmers sa magkabilang gilid ng opening; suriin nang ikaw mismo ang iba |
| Pagbasa sa sariling file ng structural design program | I-export ang IFC mula rito: papasok bilang bars ang IfcReinforcingBar nito ([Mga bar mula sa IFC file](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Shape codes na lampas sa tuwid, isang bend, at U; ACI 315 types para sa tuwid at one-hook na bars | Lumalabas ang tatlong shape bilang BS 8666 00, 11, 21 o ACI Type 2; tingnan ang [Sanggunian ng rebar](topic:rebar-reference) |
| Metric na bars maliban sa BS 4449 H8–H40 (hal. CSA 10M–35M) | Mga pangalang ASTM soft-metric #10–#36, o BS bars |

## Mga drawing at export

| Hindi pa | Sa ngayon, gawin ito |
|---|---|
| Portrait na sheets, A0, at sheets na sarili mong sukat; general-arrangement views sa skewed grids | Landscape na A4 hanggang A1 at ANSI B hanggang D ([General-arrangement at assembly drawings](topic:drawings)); i-scale ang PDF para mai-print sa ibang sukat |
| Weld symbols sa single-part na shop drawings; symbols maliban sa fillets | Nagdadala ng fillet weld symbols ang assembly drawings; ang shop drawing ay nagbibigay ng weld bilang teksto |
| Pag-edit ng drawing sa app | Baguhin ang model at gawing muli ang drawing; i-markup ang PDF sa PDF app gaya ng MarkupCraft |
| Mga drawing bilang DWG na may dimension objects, o ang model sa full scale sa model space na may sheets bilang layouts | Ang bawat sheet ay full-size na DWG o DXF ng papel, na may dimensions bilang linya at numero ([General-arrangement at assembly drawings](topic:drawings#download)) |
| Mga butas ng NC sa round tubes, copes sa angles at round tubes sa NC files | Hindi isinusulat; tingnan ang [Mga field ng NC file](topic:nc1-fields) |
| Bevels, markings, at inner contours sa NC files | Wala pa sa ngayon |
| Mga bolt hole, bolts, welds, at footings sa USD export | Nasa IFC, NC, at BOM outputs ang mga ito; tingnan ang [I-export ang steel model bilang USD](topic:usd) |
| Pagdadala ng connections, footings, slotted o rectangular na butas, at butas sa round tubes mula sa IFC file | Dinadala ng {{ui:Import IFC}} ang beams, columns, members, plates, grids, levels, round na butas, copes, bolts, at reinforcing bars, at nakalista sa report nito ang mga naiwan |
| Custom na layout ng report | Ang tatlong CSV file |

## Mga panel

| Hindi pa | Sa ngayon, gawin ito |
|---|---|
| Paglipat ng mga report sa ibaba ({{ui:Mga problema}}, {{ui:Bill of materials}}, {{ui:Bending schedule}}) | Ang panel na {{ui:Model}} at {{ui:Properties}} lang ang nagagalaw. Tingnan ang [Ayusin ang mga panel](common:arrange-panels) |

## Sabayang trabaho at pag-save

| Hindi pa | Sa ngayon, gawin ito |
|---|---|
| Cloud saving at sync sa pagitan ng mga computer | I-save ang mga `.detailcraft.json` file at ibahagi ang mga ito gaya ng anumang file. Hindi pa available ang cloud saving |
| Cursor ng ibang tao at mga label na "is editing" sa Live TeamWork session; grids, levels, at phases na pinagsasama item by item | Pinagsasama pa rin ang mga edit (buo ang grids, levels, at phases, at ang mas huling pagbabago ang masusunod); tingnan ang [Detalyehin ang isang istruktura nang sabay, live](topic:work-live) |
| Invite links sa Live TeamWork session sa internet | Sumali gamit ang maikling code sa parehong network |

## Mga platform

- Ginawa ang DetailCraft para sa screen ng desktop, laptop, o tablet. Gumagana rin ito sa telepono: nananatili ang model sa screen, at ang mga panel at report ay bumubukas bilang sheets mula sa bar sa ibaba, pero kaunti lang ang espasyo para sa mga panel.
- Para gumana offline, kailangan munang i-save ang DetailCraft para sa offline gamit ang {{ui:I-save para sa offline}} sa app bar; kapag nabasa na nito ang {{ui:Handa offline}}, gagana ang lahat sa build na ito nang walang koneksyon. Tingnan ang [Pagtatrabaho offline](common:offline).

Kung may isa sa mga kulang na ito na humaharang sa trabaho mo, sabihin sa amin sa pamamagitan ng [support page](https://getcadcraft.com/support); nakakatulong ito sa amin na magpasya kung ano ang susunod na itatayo.
