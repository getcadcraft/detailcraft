---
title: Mula sa ibang detailing software
summary: Paano tumutugma ang mga gawi ng isang kumpletong detailing package sa DetailCraft, at ang mga pagkakaiba na nakakalito sa mga bihasang detailer.
keywords: paglipat, switching, migrate, pamilyar, familiar, workflow, paghahambing, comparison, pagkakaiba, differences, numbering, components, catalog, drawings, gawi, habits
from: 39639a5d
---

Kung nagde-detail ka sa Tekla Structures, maraming bahagi ng DetailCraft ang magmumukhang pamilyar: grid, level, profile mula sa catalog, piyesa at assembly, connection, numbering, NC file, IFC. Malaki ang pagkakaiba ng sukat: ang Tekla Structures ay isang buong production system, at ang DetailCraft ay maliit at maagang browser app na gumagawa ng ilang trabaho mula simula hanggang dulo. Sinasabi ng pahinang ito kung saan nagpapatuloy ang iyong mga gawi at kung saan hindi.

:::tip
Kung kabisado ng iyong mga kamay ang ribbon ng Tekla Structures, piliin ang menu style na {{ui:Steel ribbon}} sa {{ui:Mga setting}} › {{ui:DetailCraft}} › {{ui:Mga menu, keys at mouse}}: mga tab na Modeling, Detailing, Edit, Drawings, Fabrication at View, at nagpa-pan ang gitnang button. Kung galing ka sa AutoCAD at gusto mong mag-type ng command, nagdaragdag ang {{ui:Drafting classic}} ng command line (BEAM, COLUMN, ENDPLATE, ZOOM …). Tingnan ang [Mga menu, keys at mouse](topic:menus-keys-and-mouse).
:::

## Mabilis na mapa

| Ang nakasanayan mo | Sa DetailCraft |
|---|---|
| Paggawa ng grid na may coordinate sa grid dialog | {{ui:Grids}} sa kaliwang panel: mga label at ang spacing sa pagitan ng mga linya, hindi absolute na coordinate. Ang mga linyang may numero ay tumatakbo sa isang direksiyon, ang mga linyang may titik sa kabila |
| Level bilang Z coordinate ng grid | Hiwalay na listahang {{ui:Levels}}, pangalan at elevation sa bawat hanay, ilalapat gamit ang {{ui:Ilapat ang levels}} |
| Pagpili ng punto kahit saan gamit ang snap | Sa intersection ng grid lang sumusunod ang mga click. Ang mga punto sa labas ng grid ay tina-type sa {{ui:Mga dulo (x, y, z mm)}} ng member |
| Mga command ng column, beam at plato | {{ui:Column}} ({{key:C}}), {{ui:Beam}} ({{key:B}}), {{ui:Brace}} ({{key:R}}), {{ui:Plato}} ({{key:P}}), {{ui:Footing}} ({{key:F}}) |
| Dialog ng properties ng piyesa (double-click sa piyesa) | I-click nang isang beses: laging aktibo ang {{ui:Properties}} panel sa kanan; walang dialog at walang button na Modify o Ilapat |
| Posisyon sa eroplano, pag-ikot at mga setting ng lalim | {{ui:Posisyon}} (tuktok ng steel, nasa gitna o ilalim sa linya) at {{ui:Pag-ikot (°)}}. Walang hiwalay na pahalang na offset |
| Catalog ng profile | Nakapirming listahan ng 2,311 na nailathalang sukat (AISC W, S, C, L, HSS, Pipe; European IPE, HEA, HEB, UPN; UK UB, UC, PFC, EA, UEA, SHS, RHS, CHS at cold-formed hollow sections), kasama ang parametric na plato at sarili mong seksyong {{ui:Custom profile}} |
| Catalog ng materyal | Pitong grado sa listahan: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Paglalapat ng connection component at dialog nito | Piliin ang beam, piliin ang {{ui:End plates}}. Lumalabas ang mga setting sa {{ui:Properties}} panel. Dalawa lang ang connection (end plate sa column flange, base plate) |
| Auto-connection, o pagkopya ng joint sa mga katulad na joint | Piliin ang connection, piliin ang {{ui:Ilapat sa katulad (n)}} |
| Numbering na may series at panimulang numero | Walang command: kusang nag-a-update ang mga mark pagkatapos ng bawat pagbabago, na may nakapirming prefix na c, b, br, p at C, B, BR, P |
| Mga dialog ng bolt at butas | Ang mga butas ay tina-type ayon sa mukha at posisyon. Ang mga bolt ay galing lang sa connection |
| Mga tool sa cut, fit at polygon cut | Cope (sa itaas o ilalim, sa alinmang dulo) sa I-shape lang. Awtomatiko ang mga putol-pabalik ng connection |
| Mga ulat at template | Tatlong nakapirming ulat sa mga tab sa ibaba, at mga CSV download |
| Paggawa ng drawing at listahan ng drawing | Isang shop drawing bawat part mark, lahat ay ginagawa nang sabay, sinisilip muna, saka dina-download bilang isang PDF o sheet-sheet. Walang nasasave o nae-edit |
| NC file export | {{ui:NC files}}: isang DSTV file bawat part mark, I-shape at plato lang, naka-zip |
| IFC export | {{ui:IFC}}: IFC4 ng buong model, kasama ang rebar |
| Rebar sa anumang concrete na piyesa | Rebar lang sa rectangular na pad footing, US bar sizes, may bottom mat at starter bar |
| Model na naka-save sa project folder, maraming user | Isang file na `.detailcraft.json` na dina-download mo. Isang user lang, sa iyong computer |
| Kasaysayan ng undo | {{key:Mod+Z}} at {{key:Mod+Y}}, hanggang 200 hakbang, itinatago hanggang magbukas o magsimula ka ng ibang model |

## Mga pagkakaibang nakakalito sa mga tao

### Kusang nagbabago ang mga mark

Walang hakbang sa numbering. Muling kinukuwenta ang mga mark pagkatapos ng bawat pagbabago, kaya laging updated ang mga ito, pero maaari rin silang mag-renumber: magdagdag ng column at maaaring maging c4 na ang kahapong c3. Walang "numbering history" para itago ang mga lumang mark. Tapusin ang model, saka ilabas ang BOM, NC file at shop drawing nang sabay mula sa iisang naka-save na file.

### Nagzo-zoom ang gitnang mouse button; hindi ito nagpa-pan

Sa 3D view: ang left-drag ay umiikot, ang right-drag ay nagpa-pan, nagzo-zoom ang wheel, at nagzo-zoom din ang pag-drag gamit ang gitnang button. Habang hawak ang {{key:Shift}} at left-drag, nagpa-pan din. Nagzo-zoom ang wheel patungo sa gitna ng view, hindi patungo sa pointer. Walang pagpili ng rotation center: umiikot ang model sa gitna ng view. Tingnan ang [Gumalaw sa paligid ng 3D view](topic:navigate-3d).

### Nakaharap sa isang direksiyon ang mga column bilang default

Sa rotation 0, nakaharap ang mga flange ng column sa direksiyon ng grid na may numero. Ang mga beam na tumatakbo sa pagitan ng mga linyang may titik ay pumapasok sa web, at tinatanggihan doon ang end plate ("Hindi pa nagagawa ang mga beam na pumapasok sa web ng column"). Iikutin ang mga column na iyon ng 90° bago ka magdagdag ng connection.

### Mga elevation sa mga linyang may titik lang

Tumitingin ang {{ui:Elevation}} sa kahabaan ng mga linyang may titik lang. Walang view sa kahabaan ng mga linyang may numero, walang naka-save na view at walang work plane. Gamitin ang {{ui:3D}} o {{ui:Idagdag ayon sa grid}} para sa mga frame sa mga linyang may numero.

### Pagpili, kopya at galaw

Pumili ng maraming piyesa gamit ang {{key:Shift}}+click o {{key:Mod+A}}, saka kopyahin, putulin, i-paste (sa intersection ng grid, sa typed na offset, o sa mismong lugar) at i-duplicate ang mga ito, kasama ang mga connection ([Kopyahin, i-paste at i-duplicate](topic:copy-paste)). Walang window selection, walang select filter, walang move, mirror o array, at binabago ang mga property isang member sa bawat pagkakataon sa {{ui:Properties}} panel.

### Hindi nahihila ng grid ang mga member

Pinananatili ng mga member ang kanilang coordinate kapag binago mo ang spacing ng grid; walang gumagalaw kasama ng mga linya ng grid. Baguhin ang grid bago maglagay ng steel, o i-edit ang end coordinate ng bawat member pagkatapos.

### Hindi dinidisenyo ang mga connection

Ang dalawang connection ay naglalagay ng mga plato, butas, bolt at hinang batay sa mga numerong ibinigay mo. Walang anumang design check, tanging babala lang sa gilid at spacing (mula sa EN 1993-1-8 Table 3.3).

### Hindi pinuputol ang mga butas sa 3D view

Lumalabas na madilim na plug ang mga butas. Totoong butas ang mga ito sa NC file, shop drawing at IFC file. Pinuputol sa view ang mga cope.

### Gross ang mga timbang

Hindi ibinabawas sa bigat ng steel ang mga butas o cope, at hindi kasama ang bigat ng bolt.

### Milimetro lang

Lahat ay tina-type at ipinapakita sa milimetro, kahit para sa AISC shape. Nananatili sa nailathalang anyo ang pangalan ng profile (W12x50, HSS6x6x1/4).

### Walang drawing na pamamahalaan

Walang listahan ng drawing, walang drawing editor, walang general arrangement o assembly drawing. Ginagawa ang shop drawing kapag hiniling mo ito at saka dina-download; para baguhin ito, baguhin ang model at gawin muli.

### Tumatakbo sa browser

Ang pag-save ay nagda-download ng file. Hindi magagamit ang mga keyboard shortcut na itinatabi ng browser para sa sarili nito. Hindi kailanman umaalis sa iyong computer ang iyong mga model: tingnan ang [Saan napupunta ang iyong mga file](common:your-files).

## Ano ang ipagpapatuloy mo sa kasalukuyan mong software

Sa ngayon, angkop ang DetailCraft sa maliliit na frame, pagsubok ng ideya, pagtuturo, o paggawa ng NC file at shop drawing para sa simpleng beam at column na trabaho. Ipagpatuloy sa software na kasalukuyan mong ginagamit ang mga kumplikadong connection, general arrangement drawing, erection drawing, multi-user na proyekto, at anumang nakalista sa [Ano ang hindi pa nagagawa](topic:not-built-yet).
