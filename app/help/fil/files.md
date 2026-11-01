---
title: Buksan, i-save at i-export ang mga file
summary: Ang DetailCraft model file, bawat export na isinusulat nito, kung saan napupunta ang mga file, at kung ano ang nagkakaiba ayon sa browser at koneksyon.
keywords: buksan, i-save, export, download, file, json, ifc, nc1, dstv, csv, pdf, zip, mga format, import
from: bd715ea3
---

May sarili itong isang file ang DetailCraft, ang model, at limang export. Ang bawat save at bawat export ay isang download. Walangina-upload, at walang itinatago sa server.

## Ang model file

Sine-save ang DetailCraft model bilang `<name>.detailcraft.json`, kung saan ang `<name>` ay ang model name sa {{ui:Model}} panel. Kasama rito ang mga grid, level, member (kasama ang mga butas at cope nito), connection at ang mga setting nito, footing, at ang mga custom profile mo.

Hindi naka-store ang mga piyesa, mark, bolt, weld at bar: kinukuwenta ulit ng DetailCraft ang mga ito mula sa model sa bawat pagbukas. Kaya maliit ang model file.

### Save

1. I-type ang pangalan sa {{ui:Name}} field sa itaas ng {{ui:Model}} panel.
2. Piliin ang {{ui:Save}} sa {{ui:File}} group, o pindutin ang {{key:Mod+S}}.
3. Dina-download ng browser ang `<name>.detailcraft.json`. Sinasabi ng status bar ang "Na-save … (na-download)", at nawawala ang tuldok sa simula ng title ng browser tab.

Bawat save ay bagong download. Hindi ino-overwrite ng browser ang file na binuksan mo; depende sa setting nito, nagdaragdag ito ng numero sa pangalan, halimbawa `Frame (1).detailcraft.json`, o nagtatanong kung saan i-save. Itago ang sarili mong bersyon sa pamamagitan ng pagpapalit ng pangalan ng mga download.

:::chromium
Sa Downloads folder mo nise-save ang Chrome at Edge, maliban kung naka-on ang **Ask where to save each file before downloading** sa download settings ng browser. I-on ito kung gusto mong pumili ng folder at pangalan ng file sa bawat pagkakataon.
:::

:::firefox
Sa Downloads folder mo sine-save ang Firefox, o nagtatanong ito sa bawat pagkakataon kung naka-on ang **Always ask you where to save files** sa settings nito.
:::

:::safari
Sa Downloads folder mo sine-save ang Safari. Para baguhin ang folder, buksan ang **Safari, Settings, General, File download location**.
:::

### Open

1. Piliin ang {{ui:Open}} sa {{ui:File}} group, o pindutin ang {{key:Mod+O}}.
2. Pumili ng `.detailcraft.json` na file.

O i-drag ang file mula sa {{pick:mac=Finder|windows=File Explorer|linux=ang file manager mo}} at i-drop ito sa view. Sinasabi ng view ang "I-drop ang DetailCraft model para buksan ito" habang nagdi-drag ka.

Kung may hindi pa na-save na pagbabago ang bukas na model, unang nagtatanong ang DetailCraft: {{ui:Cancel}}, {{ui:Discard changes}} o {{ui:Save first}}.

Sinusuri ng DetailCraft ang bawat field ng file bago ito gamitin. Anumang hindi nito magamit ay inaalis, at sinasabi ng status bar kung ano, halimbawa "2 member ang hindi valid at inalis." Tinatanggihan ng mensahe ang model na na-save ng mas bagong DetailCraft sa halip na buksan itong kalahating tama.

### Ano ang nabubuksan

Ang sarili nitong model file (`.json`, hanggang 50 MB) at IFC file (`.ifc`, IFC2X3 o IFC4, hanggang 200 MB). Ang IFC file, na binuksan o dinala gamit ang {{ui:Import IFC}}, ay nagiging bagong model ng mga beam, column, member, plato, grid at level nito, kasama ang mga butas at cope na naputol dito, at ang mga bolt nito bilang loose bolts; may report na naglilista ng mga hindi naisama. Tingnan ang [IFC export](topic:ifc-export#import). Hindi pa nito binubuksan ang DWG, DXF o model ng ibang detailing program; kapag sinubukan, lalabas ang "Ang DetailCraft ay nagbubukas ng sarili nitong model (.detailcraft.json) at IFC file (.ifc)."

## Nawalang trabaho, mga kamakailang file, ang desktop app

- Habang may pagbabago sa model na hindi mo pa na-save, nagtatabi ang DetailCraft ng kopya sa browser na ito. Kung huminto ang tab o ang browser bago mo i-save, sa susunod na buksan mo ang DetailCraft, magtatanong ito ng **Ibalik ang trabaho mo?**: ibalik ang kopya, o hayaan itong mawala. Tingnan ang [Ibalik ang trabaho mo](common:recover).
- Nakalista sa start screen ang mga model na kamakailan mong binuksan kapag pinapayagan ng browser ang DetailCraft na buksan ulit ang mga ito; i-click ang isa para buksan ulit.
- Sa desktop app, isinusulat ng {{ui:Save}} ang model pabalik sa file na binuksan mo (sa browser, nagda-download ito ng kopya), at ang pag-double-click sa DetailCraft model o IFC file ay bubuksan ito sa DetailCraft.

## Mga export

Lahat ng export ay gumagamit ng model name. Piliin ang mga ito sa {{ui:Output}} group.

| Button | File | Laman |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: mga palapag, grid, bawat bakal na piyesa bilang profile extrusion kasama ang mga butas at cope nito, mga assembly, bolt at anchor rod, mga footing at bawat bar. Tingnan ang [Export IFC](topic:ifc-export). |
| {{ui:NC files}} | `<name> NC.zip` | Isang DSTV `.nc1` file bawat part mark. Tingnan ang [Ipadala ang NC files sa shop](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Tatlong table sa iisang file: piyesa, assembly, at bolt at anchor rod. Tingnan ang [Mark at bill of materials](topic:marks-and-bom). |
| {{ui:Bending}} | `<name> bending schedule.csv` | Bawat bar mark sa mga footing. Tingnan ang [Footing at rebar](topic:footings-and-rebar). |
| {{ui:Shop drawing}} | `<name> <mark>.pdf` | Isang sheet (A3 maliban kung pumili ka ng ibang laki) para sa napiling piyesa (I-shape at plato). Tingnan ang [Gumawa ng shop drawing](topic:shop-drawings). |
| {{ui:Drawings}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` o `.dxf`, ilan sa `<name> drawings DWG.zip` (o `DXF.zip`) | Ang mga plano, elevation at assembly drawing sa laki ng sheet na pinili mo; DWG at DXF sa buong laki, 1 unit = 1 mm sa papel. Tingnan ang [General arrangement at assembly drawings](topic:drawings). |

### Mga tala sa CSV file

- May byte-order mark sila sa simula para tama nang mabasa ng spreadsheet program ang mga accented na character.
- Ang cell na nagsisimula sa `=`, `+`, `-` o `@` (at hindi simpleng numero) ay nilalagyan ng apostrophe sa unahan, para hindi ito patakbuhin ng spreadsheet bilang formula.
- Millimeter ang haba at kilogram ang timbang.

### Mga tala sa PDF

Ginagamit ng teksto sa PDF ang karaniwang Helvetica font. Ang mga karakter na wala rito (labas sa Western European set) ay lalabas bilang "?", at sinasabi ng status bar kung ilan.

## Mga unit

Millimeter ang gamit ng DetailCraft sa buong paligid: grid, level, coordinate, profile, butas at bawat export. Pinananatili ng mga pangalan ng profile ang nakalathalang anyo (ang W12x50 ay pangalang US kahit ipinapakita ang sukat nito sa mm). Wala pang imperial input.

## Online at offline

Sa browser mo nangyayari ang pagbubukas, pag-save at pag-export, kaya pareho ang takbo ng mga ito may koneksyon man o wala, kapag na-load na ang DetailCraft.

Para magamit ang DetailCraft nang walang koneksyon sa susunod, piliin ang {{ui:Save for offline}} sa app bar habang online ka. Nagbibilang pataas ang button ("Sine-save 3 sa 20") at saka magbabasa ng {{ui:Handa offline}}. Kasama sa na-save na kopya ang 3D graphics library (mga 2.6 MB) at ang help na ito, kaya kapag na-save na, gumagana na offline ang 3D view, bawat export at ang help. Mga detalye, at ano pa ang nangangailangan ng koneksyon: [Pagtatrabaho offline](common:offline).

:::offline
Offline ka. Kung ipinapakita ng app bar ang {{ui:Handa offline}}, gumagana gaya ng dati ang pagbubukas, pag-save at pag-export. Kung hindi, panatilihing bukas ang tab na ito, huwag itong i-reload hanggang bumalik ang koneksyon, at i-save na ngayon ang model mo.
:::

Hindi pa available ang cloud saving, at wala pa ring desktop build. I-back up ang iyong mga `.detailcraft.json` file gaya ng pag-back up mo ng iba pang work file. Karagdagang impormasyon sa [Saan napupunta ang mga file mo](common:your-files).

## Hindi pa na-save na trabaho

Sa bukas na tab lang itinatago ng DetailCraft ang model. Kung isasara o ire-reload mo ang tab na may hindi pa na-save na pagbabago, magtatanong ang browser kung aalis sa pahina; sarili ng browser ang pagkakasulat nito. I-save madalas gamit ang {{key:Mod+S}}.
