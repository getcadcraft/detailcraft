---
title: Pag-troubleshoot
summary: Ano ang ibig sabihin ng mga mensahe ng DetailCraft at ano ang gagawin, mula sa nawawalang 3D view hanggang sa mga connection na hindi mabuo.
keywords: problema, error, hindi gumagana, tulong, ayos, mensahe, tinanggihan, webgl, blangko, babala, hindi kaya, isyu
from: f8c3b2b1
---

Karamihan sa mga pagtanggi ay ipinaliliwanag sa status bar sa ibaba ng screen, o sa tab na {{ui:Problems}}. Basahin muna ang mga iyon. Ang mga mensaheng nasa ibaba ay sinipi gaya ng ipinapakita ng DetailCraft.

## Nawawala ang 3D view

**"Hindi nakapagsimula ng 3D graphics (WebGL) ang browser na ito. Gumagana pa rin ang model, mga ulat, at mga export."**

Hindi nakapagsimula ng WebGL ang browser, ang 3D graphics na ginagamit ng DetailCraft sa pagguhit.

1. I-update ang browser sa pinakabagong bersyon.
2. I-on ang hardware acceleration at i-restart ang browser (tingnan sa ibaba).
3. I-update ang graphics driver mo, o subukan ang ibang browser. Madalas walang WebGL ang remote desktop at virtual machine.
4. Sa ngayon, maaari ka pa ring magtrabaho: maglagay ng member gamit ang form na {{ui:Add by grid}}, basahin ang mga ulat, at mag-export. Ang pag-click sa view lamang ang nangangailangan ng WebGL.

:::chromium
Para i-on ang hardware acceleration, buksan ang **Settings, System** at i-on ang **Use graphics acceleration when available**, saka i-relaunch.
:::

:::firefox
Para i-on ang hardware acceleration, buksan ang **Settings, General, Performance**, alisin ang check sa **Use recommended performance settings**, at lagyan ng check ang **Use hardware acceleration when available**. I-restart ang Firefox.
:::

:::safari
Naka-on ang WebGL sa Safari bilang default. I-update ang macOS kung hindi pa rin magsisimula ang view, at tingnan kung walang extension na humaharang dito.
:::

Higit pa sa [Browsers and computers](common:browsers).

## Hindi tumutugon ang pag-click sa view

- **Walang intersection malapit sa pag-click.** Ang mga placing tool ay kumakapit lamang sa grid intersection. Ang pag-click na malayo sa lahat ng tuldok ay walang epekto. Lumapit hanggang sa sumindi ang tuldok.
- **Ang tool ay {{ui:Select}} at nag-click ka sa bakanteng espasyo.** Inaalis nito ang pagpili.
- **Nag-drag ka.** Ang pagpindot at pagbitaw na mas malayo nang ilang pixel ay drag: iniikot o ina-pan nito ang view.
- **Naputol ang bahagi.** Sa {{ui:Plan}} at {{ui:Elevation}}, nakatago at hindi ma-click ang steel na nasa labas ng cut. Lumipat sa {{ui:3D}}.
- **Mali ang level ng intersection.** Sa {{ui:3D}}, maaaring mag-overlap sa screen ang mga intersection ng ilang level; kinukuha ng pag-click ang pinakamalapit. Gamitin ang {{ui:Plan}} o {{ui:Elevation}}.

## Mga mensahe sa paglalagay

| Mensahe | Ano ang gagawin |
|---|---|
| Walang level sa itaas ng Level 2 na aabutin ng column. Magdagdag muna ng level. | Magdagdag ng level sa {{ui:Levels}}, o i-click ang mas mababang level |
| Pumili ng ibang intersection para sa kabilang dulo. | Dalawang beses mong na-click ang parehong punto |
| Magkapareho ang dalawang dulo. | Sa {{ui:Add by grid}}, parehong punto ang "From" at "To" |
| Magdagdag ng grid line sa kaliwa para makapaglagay ng member. | Walang grid line ang model sa isang direksyon |
| Hindi kilalang profile "…" | Wala ang profile sa catalog o sa custom profiles ng model. Pumili mula sa listahan |
| Mag-type ng numero. | Iniwang walang laman ang isang number field o may teksto ito |

## Hindi nabubuo ang mga connection

### "Hindi nagtatapos ang beam na ito sa column line."

Kailangang eksaktong nasa linya ng vertical column ang dulo ng beam, sa pagitan ng ibaba at itaas nito (sa loob ng 1 mm). Suriin ang {{ui:Ends (x, y, z mm)}} ng beam at ang posisyon ng column.

### "Sumasalpak ang beam na ito sa web ng column o nasa anggulo"

O sa {{ui:Problems}}: "Hindi pa naitatayo ang mga beam na sumasalpak sa web ng column: ikiling ang column ng 90° o gumamit ng ibang connection."

Sumasalpak ang beam sa web ng column. Piliin ang column at itakda ang {{ui:Rotation (°)}} sa 90, saka subukan muli. Hindi pa naitatayo ang mga skewed na joint.

### "Ginagawa ang end plate para sa level na beam lamang (nakahilig ang beam na ito)."

Dapat magkapareho ang taas ng magkabilang dulo ng beam.

### "Kailangang nakatayo ang beam para sa end plate (rotation 0)."

Ibalik ang {{ui:Rotation (°)}} ng beam sa 0.

### "Kailangan ng end plate ng I-shape na beam." / "Kailangan ng end plate ng I-shape na column."

Ang mga I-shape lamang (W, IPE, HEA, HEB, o custom na I) ang tumatanggap ng end plate.

### "Wala na sa column line ang dulo ng beam."

Inilipat mo ang beam o column pagkatapos idagdag ang connection. Ibalik ito, o burahin ang connection.

### "Pinutol ng mga connection ang member na ito hanggang sa wala."

Mas pinutol ng mga connection sa magkabilang dulo ang member kaysa sa haba nito, halimbawa, isang napakaikling beam sa pagitan ng dalawang malalim na column. Suriin ang mga dulo ng member at ang kapal ng plate.

### "Walang ibang joint na ganito … na walang connection."

{{ui:Similar}} ay kumokopya lamang sa mga joint na may parehong beam profile, column profile, at uri ng connection (beam papasok sa isang flange), na wala pang connection.

### "May connection na ang magkabilang dulo." / "May base plate na ang column na ito."

Piliin ang umiiral na connection para baguhin ito, o burahin muna ito.

## Mga babala sa tab na Problems

Hindi pinipigilan ng mga babala ang pagbuo ng connection o footing; hinihiling lamang nila na suriin mo ito. Ginagamit ng mga babala sa edge at spacing ang pinakamababang halaga ng EN 1993-1-8 Table 3.3 (edge 1.2 × hole, pitch 2.2 × hole, gauge 2.4 × hole). Kung iba ang panuntunan ng proyekto mo, maaaring hindi naaangkop ang babala; hindi dinidisenyo ng DetailCraft ang mga connection.

"may butas na nasa labas ng dulo ng piyesa" ibig sabihin ay mas mababa sa 0 ang x ng butas, o mas malaki sa cut length. Tandaan na ang x ay mula sa simula ng cut, pagkatapos putulin ng mga connection ang piyesa pabalik.

## Nabigo ang mga pagbabago sa footing

| Mensahe | Ano ang gagawin |
|---|---|
| Walang espasyo ang cover para sa mga bar sa footing na ito. | Gawing mas malaki ang footing o mas maliit ang cover |
| Masyadong mababaw ang footing para sa dalawang layer ng bar sa loob ng cover. | Gawing mas malalim o bawasan ang cover |
| Hindi kasya sa loob ng footing ang starter bars na may 75 mm cover. | Mas kaunting starter, mas malapit na spacing, o mas malaking footing |
| Dapat 50–1000 mm ang bar spacing. | Mag-type ng spacing sa saklaw na iyon |
| Dapat 300–50000 mm ang haba. | May limitasyon ang laki ng footing: haba at lapad na 300 hanggang 50000, lalim na 150 hanggang 10000 |

## Nabigo ang mga grid at level

| Mensahe | Ano ang gagawin |
|---|---|
| Mga numbered grid: magbigay ng isang spacing sa bawat pares ng linya (4). | Bilangin ang iyong mga agwat: ang limang linya ay nangangailangan ng apat na spacing |
| Mga lettered grid: dapat positibong millimeter ang mga spacing. | Walang zero, negatibo, o teksto |
| Mga numbered grid: dapat magkakaiba ang mga grid label. | Dalawang linya ang may parehong label |
| Hanggang 60 grid line sa bawat direksyon lamang. | Hatiin ang model |
| Panatilihin ang kahit isang level. | Binura mo ang lahat ng row ng level |
| Kailangan ng pangalan ang bawat level. / Dalawang level ang may pangalang "…". | Bigyan ang bawat level ng ibang pangalan |

## Nabibigo ang pagbukas ng file

| Mensahe | Sanhi |
|---|---|
| Binubuksan ng DetailCraft ang sarili nitong model (.detailcraft.json). Hindi pa available ang IFC import. | Hindi `.json` file ang file |
| Hindi ito model ng DetailCraft (hindi JSON). | Sira ang file o ibang JSON ito |
| Hindi ito model ng DetailCraft. | JSON file mula sa ibang program |
| Na-save ang model na ito ng mas bagong DetailCraft (format 2). | Buksan ito sa mas bagong DetailCraft na nag-save nito |
| Masyadong malaki ang file na iyon para maging model ng DetailCraft. | Mahigit 50 MB |

Kapag nagbukas ang file na may mga babala gaya ng "2 member ang hindi balido at naiwan.", maayos ang natitirang bahagi ng model. Huwag i-save sa ibabaw ng orihinal hangga't hindi mo nasusuri kung ano ang naiwan.

## Mga export

| Mensahe | Sanhi |
|---|---|
| Wala pang mai-export. | {{ui:IFC}} na walang laman ang model |
| Walang I-shape o plate na piyesa para isulat ang mga NC file. | Channel, angle, o tube lamang ang nasa model |
| Hindi naisulat (sa ngayon, I-shape at plate lamang): … | Hindi I-shape o plate ang mga mark na iyon; naisulat ang iba |
| Walang footing, kaya walang bar na iiskedyul. | {{ui:Bending}} na walang footing |
| … karakter sa labas ng PDF font ang nai-print bilang "?". | Walang karakter sa PDF font ang pangalan ng model o grade |

Naka-gray out ang {{ui:Shop drawing}}: wala pang piyesa ang model.

## Hindi lumalabas ang mga download

Ang bawat save at export ay browser download. Tingnan ang listahan ng downloads ng browser mo. Kung nagtatanong ang browser bago mag-download ng maraming file, o hinaharangan ang mga download mula sa site na ito, payagan ang mga ito. Sa Safari, tingnan ang downloads button sa toolbar.

## Hindi gumagana ang mga key

- Nasa text o number field ang cursor: hindi pinapansin doon ang mga tool key at {{key:Delete}} para makapag-type ka. Pindutin ang {{key:Tab}} o i-click ang view.
- May bukas na dialog: isara muna ito.
- Hawak ng browser ang keyboard (halimbawa, ang address bar): i-click ang loob ng DetailCraft.
- {{key:Ctrl+Shift+F}} ang gumagamit ng Control, kahit sa Mac.

## Mga problema sa offline

Ipinapakita ng button na {{ui:Save for offline}} sa app bar ang kalagayan ng offline copy. Paano gumagana ang pag-save: [Working offline](common:offline).

| Nakasaad sa button | Ibig sabihin | Ano ang gagawin |
|---|---|---|
| {{ui:Save for offline}} | Wala pang offline copy sa browser na ito | Piliin ito habang online |
| Saving 5 of 20 | Nagse-save na | Hintayin ang {{ui:Offline ready}}; panatilihing bukas ang tab |
| {{ui:Offline ready}} | Gumagana ang DetailCraft, ang 3D view nito, bawat export, at ang help na ito nang walang koneksyon | Wala. I-click ito para sa {{ui:Save again (get the newest version)}} o {{ui:Remove the offline copy}} |
| {{ui:Could not save}} | Hindi nai-download ang ilang file | Suriin ang koneksyon mo at i-click ito para subukan muli |
| {{ui:Offline not available}} | Hindi kayang magtago ng offline copy ang window na ito: hinaharangan ito ng private window at ilang managed computer | Gumamit ng normal na window, o magtrabaho online |

Kung offline ka at hindi nakasaad sa button ang {{ui:Offline ready}}, huwag i-reload o isara ang tab: patuloy na gumagana ang kung ano ang na-load na. I-save ang model mo gamit ang {{key:Mod+S}} at hintayin hanggang makakonekta ka muli.

## Hindi pa nai-save na trabaho

Kung magtanong ang browser kung aalis sa pahina, may hindi pa nai-save na pagbabago ang DetailCraft. Piliin ang manatili, saka pindutin ang {{key:Mod+S}}. Hindi na maibabalik ng DetailCraft ang model pagkatapos maisara ang tab.

## Hindi pa rin malutas

Itala ang ginawa mo at ang eksaktong mensahe, at ipaalam sa amin sa [support page](https://getcadcraft.com/support).
