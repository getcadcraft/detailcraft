---
title: Buksan, i-save at i-export ang mga file
summary: Ang model file ng DetailCraft, bawat export nito, kung saan napupunta ang mga file, at kung ano ang nagkakaiba ayon sa browser at koneksyon.
keywords: buksan, i-save, export, i-download, file, json, ifc, nc1, dstv, csv, pdf, zip, format, import
from: 6fbc8e8f
---

Ang DetailCraft ay may sariling isang file, ang model, at limang export. Bawat save at bawat export ay isang download. Walang ina-upload, at walang itinatago sa server.

## Ang model file

Sine-save ang DetailCraft model bilang `<name>.detailcraft.json`, kung saan ang `<name>` ay ang pangalan ng model sa {{ui:Model}} panel. Naglalaman ito ng mga grid, level, member (kasama ang kanilang mga butas at cope), mga connection at ang kanilang mga setting, mga footing, at ang iyong mga custom profile.

Hindi naka-store ang mga piyesa, mark, bolt, weld at bar: muling kinukuwenta ng DetailCraft ang mga ito mula sa model sa tuwing magbubukas ito. Kaya maliit ang model file.

### Save

1. Mag-type ng pangalan sa {{ui:Name}} field sa itaas ng {{ui:Model}} panel.
2. Piliin ang {{ui:Save}} sa {{ui:File}} group, o pindutin ang {{key:Mod+S}}.
3. Dina-download ng browser ang `<name>.detailcraft.json`. Sinasabi ng status bar na "Na-save … (na-download)", at nawawala ang tuldok sa simula ng pamagat ng browser tab.

Bawat save ay bagong download. Hindi ina-overwrite ng browser ang file na binuksan mo; depende sa settings nito, nagdadagdag ito ng numero sa pangalan, gaya ng `Frame (1).detailcraft.json`, o nagtatanong kung saan ise-save. Panatilihin ang sarili mong mga bersyon sa pamamagitan ng pagpapalit ng pangalan ng mga download.

:::chromium
Sa Downloads folder napupunta ang mga file sa Chrome at Edge, maliban kung naka-on ang **Ask where to save each file before downloading** sa download settings ng browser. I-on ito kung gusto mong pumili ng folder at pangalan ng file sa bawat pagkakataon.
:::

:::firefox
Sa Downloads folder napupunta ang mga file sa Firefox, o nagtatanong ito sa bawat pagkakataon kapag naka-on ang **Always ask you where to save files** sa settings nito.
:::

:::safari
Sa Downloads folder napupunta ang mga file sa Safari. Para baguhin ang folder, buksan ang **Safari, Settings, General, File download location**.
:::

### Buksan

1. Piliin ang {{ui:Open}} sa {{ui:File}} group, o pindutin ang {{key:Mod+O}}.
2. Pumili ng `.detailcraft.json` na file.

O i-drag ang file mula sa {{pick:mac=Finder|windows=File Explorer|linux=ang file manager mo}} at i-drop ito sa view. Habang dini-drag mo, sinasabi ng view na "Drop a DetailCraft model to open it".

Kung may hindi pa nai-save na pagbabago ang bukas na model, unang nagtatanong ang DetailCraft: {{ui:Cancel}}, {{ui:Discard changes}} o {{ui:Save first}}.

Sinusuri ng DetailCraft ang bawat field ng file bago ito gamitin. Anumang hindi nito magamit ay inaalis, at sinasabi ng status bar kung ano, halimbawa "2 member ang hindi valid at inalis." Hindi bubuksan nang kalahating tama ang model na na-save ng mas bagong DetailCraft; tatanggihan ito na may mensahe.

### Ano ang nabubuksan

Sariling model file nito (`.json`, hanggang 50 MB) at mga IFC file (`.ifc`, IFC2X3 o IFC4, hanggang 200 MB). Ang IFC file, binuksan man o dinala sa pamamagitan ng {{ui:Import IFC}}, ay nagiging bagong model ng mga beam, column, member, plato, grid at level nito, may mga butas at cope na naputol, at ang mga bolt nito ay nagiging maluwag na bolt; may ulat na naglilista kung ano ang naiwan. Tingnan ang [IFC export](topic:ifc-export#import). Hindi pa nito binubuksan ang DWG, DXF o modelo ng anumang ibang detailing program; kapag sinubukan, lalabas ang "DetailCraft opens its own models (.detailcraft.json) and IFC files (.ifc)."

## Nawalang trabaho, mga kamakailang file, ang desktop app

- Habang may pagbabagong hindi mo pa na-save ang model, nagtatabi ang DetailCraft ng kopya sa browser na ito. Kung magsara ang tab o ang browser bago ka mag-save, sa susunod mong pagbukas ng DetailCraft ay magtatanong ito ng **Ibalik ang iyong trabaho?**: ibalik ang kopya, o pabayaan. Tingnan ang [Ibalik ang iyong trabaho](common:recover).
- Nakalista sa start screen ang mga model na kamakailan mong binuksan kapag pinapayagan ng browser na muling buksan ng DetailCraft ang mga ito; i-click ang isa para muling buksan.
- Sa desktop app, isinusulat ng {{ui:Save}} ang model pabalik sa file na binuksan mo (sa browser, nagda-download ito ng kopya), at ang pag-double-click sa DetailCraft model o IFC file ay binubuksan ito sa DetailCraft.

## Mga export

Lahat ng export ay gumagamit ng pangalan ng model. Piliin ang mga ito sa {{ui:Output}} group.

| Button | File | Laman |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: mga storey, grid, bawat steel na piyesa bilang profile extrusion kasama ang mga butas at cope nito, mga assembly, bolt at anchor rod, mga footing at bawat bar. Tingnan ang [I-export ang IFC](topic:ifc-export). |
| {{ui:NC files}} | `<name> NC.zip` | Isang DSTV `.nc1` na file bawat part mark. Tingnan ang [Ipadala ang NC file sa shop](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Tatlong table sa iisang file: mga piyesa, assembly, at bolt at anchor rod. Tingnan ang [Mga mark at bill of materials](topic:marks-and-bom). |
| {{ui:Bending}} | `<name> bending schedule.csv` | Bawat bar mark sa mga footing. Tingnan ang [Mga footing at rebar](topic:footings-and-rebar). |
| {{ui:Shop drawing}} | `<name> <mark>.pdf` | Ang `<name> Shop drawings.pdf` ay may sheet bawat part mark; ibinibigay ng {{ui:Download this sheet}} ang ipinapakitang isa (A3 maliban kung pumili ka ng ibang laki). Tingnan ang [Gumawa ng shop drawing](topic:shop-drawings). |
| {{ui:Drawings}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` o `.dxf`, ilan sa `<name> drawings DWG.zip` (o `DXF.zip`) | Ang mga plano, elevation at assembly drawing sa sheet size na pinili mo; DWG at DXF sa buong laki, 1 unit = 1 mm sa papel. Tingnan ang [General-arrangement at assembly drawing](topic:drawings). |

### Mga tala sa CSV file

- Nagsisimula ang mga ito sa byte-order mark para mabasa nang tama ng mga spreadsheet program ang mga karakter na may tuldik.
- Ang cell na nagsisimula sa `=`, `+`, `-` o `@` (at hindi simpleng numero) ay binibigyan ng nangungunang apostrophe, para hindi ito patakbuhin ng spreadsheet bilang formula.
- Millimeter ang mga haba at kilogram ang mga timbang.

### Mga tala sa PDF

Gumagamit ang text sa PDF ng karaniwang Helvetica font. Ang mga karakter na wala rito (labas sa Western European set) ay ililimbag bilang "?", at sinasabi ng status bar kung ilan.

## Mga unit

Gumagamit ang DetailCraft ng millimeter sa kabuuan: mga grid, level, coordinate, profile, butas at bawat export. Pinapanatili ng mga pangalan ng profile ang inilathalang anyo nila (ang W12x50 ay US designation kahit ipinapakita ang mga sukat nito sa mm). Wala pang imperial input.

## Online at offline

Ang pagbubukas, pag-save at pag-export ay nangyayari lahat sa browser mo, kaya pareho ang kilos nila na may o walang koneksyon kapag na-load na ang DetailCraft.

Para magamit ang DetailCraft nang walang koneksyon sa susunod, piliin ang {{ui:Save for offline}} sa app bar habang online ka. Nagbibilang ang button ("Saving 3 of 20") at saka magbabasa ng {{ui:Offline ready}}. Kasama sa naka-save na kopya ang 3D graphics library (mga 2.6 MB) at ang help na ito, kaya kapag na-save na, gumagana offline ang 3D view, bawat export at ang help. Mga detalye, at kung ano pa ang nangangailangan ng koneksyon: [Pagtatrabaho offline](common:offline).

:::offline
Offline ka. Kung nakalagay sa app bar ang {{ui:Offline ready}}, gumagana ang pagbubukas, pag-save at pag-export gaya ng dati. Kung hindi, panatilihing bukas ang tab na ito, huwag i-reload hanggang bumalik ang koneksyon, at i-save ang model mo ngayon.
:::

Hindi pa available ang cloud saving, at wala pang desktop build. I-back up ang iyong mga `.detailcraft.json` file gaya ng pag-back up mo sa anumang iba pang work file. Higit pa sa [Saan napupunta ang mga file mo](common:your-files).

## Hindi pa nai-save na trabaho

Iniingatan lang ng DetailCraft ang model sa bukas na tab. Kung isasara o ire-reload mo ang tab na may hindi pa nai-save na pagbabago, tatanungin ka ng browser kung aalis sa page; ang salita nito ay galing sa browser mismo. I-save nang madalas gamit ang {{key:Mod+S}}.
