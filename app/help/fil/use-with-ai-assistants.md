---
title: Gamitin ang DetailCraft kasama ang AI assistant
summary: Hayaan ang sarili mong AI assistant o script na basahin ang model, mga piyesa, problema, at clash, magdagdag ng member at connection, mag-save at mag-export (pati USD): mga pahintulot, pagkonekta sa pamamagitan ng CadCraft Studio, at activity log.
keywords: ai, assistant, agent, mcp, model context protocol, script, automation, piyesa, clashes, connections, pahintulot, disconnect, activity, undo
from: d624c9a0
---

## Ano ang matututunan mo

Paano payagan ang isang AI assistant (o script na isinulat mo) na gumana sa DetailCraft, at paano magpasya kung ano ang maaari nitong galawin.

Walang **sariling AI** ang DetailCraft at wala itong ipinapadala kahit saan. Ikaw ang magdadala ng assistant: anumang program na nagsasalita ng Model Context Protocol (MCP). Nagbibigay lamang ang DetailCraft dito ng mga tool, at ikaw ang pumipili kung alin.

## I-on ito

1. Buksan ang {{ui:Settings}} (ang gear sa app bar, o {{key:Mod+,}}) at pumunta sa tab na {{ui:DetailCraft}}.
2. Sa ilalim ng {{ui:Assistants}}, lagyan ng check ang **Payagan ang mga AI assistant at script na gumamit ng DetailCraft**. Naka-off ito hanggang gawin mo iyon.
3. Piliin kung ano ang maaari nitong gawin: naka-check ang **Basahin** bilang panimula; lagyan lang ng check ang **I-edit**, **I-save**, o **I-export** kapag kailangan mo ang mga ito.

Ang mga tool na nasa labas ng mga pahintulot na nilagyan mo ng check ay hindi iaalok sa assistant, at kung humingi pa rin ito ng isa, tinatanggihan ito ng DetailCraft at isinusulat sa activity log. Ang pag-off ng switch ay agad na tinatapos ang bawat koneksyon.

## I-connect ang assistant mo

Kumokonekta ang mga assistant sa pamamagitan ng **CadCraft Studio** sa computer mo: nagpapatakbo ang Studio ng maliit na server na tanging ang computer na ito ang maaaring maabot, na pinoprotektahan ng token na ginagawa nito tuwing magsisimula. Sa Studio, piliin ang {{ui:Connect an assistant}} at kopyahin ang address at token sa assistant mo (ipinapakita ng Studio ang eksaktong setting na ipe-paste). Huwag kailanman ibahagi ang token.

:::note
Hindi makakapagbukas ng koneksyon para sa assistant ang browser tab: sa mga browser app, walang epekto ang switch hanggang gamitin mo ang CadCraft Studio sa computer mo.
:::

## Ikaw pa rin ang namamahala

- **Bawat pagbabago ay isang undo step**, may label na nagsasabing sa assistant ito (halimbawa, "Assistant: add beam", "Assistant: add gussets"). Binabawi ng {{key:Mod+Z}} ang huling pagbabago ng assistant bilang kabuuan. Ang sariling `undo` ng assistant ay binabawi lamang ang sarili nitong mga hakbang, hindi ang sa iyo, maliban kung tahasan itong humingi.
- **Naghihintay ito sa iyo.** Habang naglalagay ka ng member, gumagalaw ng piyesa, o nagpe-paste, tinatanggihan ng DetailCraft ang mga pagbabago ng assistant at sinasabihan itong subukan muli.
- **Alam mo kapag may nakakonekta.** May button sa app bar na nagpapangalan sa assistant habang nakakonekta ito; i-click ito para makita kung ano ang maaari nitong gawin, o para **i-disconnect** ito.
- **Activity.** Ang {{ui:Settings}} › {{ui:DetailCraft}} › {{ui:Assistants}} › {{ui:Activity}} ay naglilista ng bawat tawag: kailan, aling tool, tapos o tinanggihan. Itinatago ng {{ui:Save the log}} ang kopya.

## Ano ang maaaring hilingin ng assistant

Lahat ng haba ay nasa millimeter, at ang mga point ay `[x, y, z]` na may z na nakaharap pataas, gaya sa model.

| Tool | Pahintulot | Ano ang ginagawa nito |
|---|---|---|
| `app_info`, `model_describe` | Basahin | Ang model na bukas: grids, levels, phases, members ayon sa uri at profile, connections, footings, stairs, parts, bigat ng steel, problems |
| `parts_list` | Basahin | Mga part mark kasama ang profile, materyal, cut length, bilang, bigat, phase, at assembly mark; ayon sa uri, profile, mark, o phase |
| `problems_list` | Basahin | Ang inililista ng tab na {{ui:Problems}}, bawat isa kasama kung ano ang tungkol dito |
| `clash_check` | Basahin | Ang [clash check](topic:clash-check), kasama ang tolerance at phases nito |
| `selection_get` | Basahin | Ang napili mo |
| `selection_set` | I-edit | Pumipili ng mga member, connection, footing, o stair (ayon sa id o part mark) para ipakita sa iyo; walang binabago |
| `member_add` | I-edit | Isang beam, column, brace, o plate sa pagitan ng dalawang punto |
| `connection_add` | I-edit | End plate, shear tab, base plate, splice, o gusset kung saan nagtatagpo ang mga ibinigay na member, gaya ng ginagawa ng mga button na {{ui:Connect}} |
| `undo` | I-edit | Binabawi ang huling hakbang ng assistant |
| `model_save` | I-save | Ang sariling I-save ng DetailCraft |
| `model_export` | I-export | IFC, NC files, BOM, bending schedule, KISS file, o cut list, gaya ng ginagawa ng mga button na {{ui:Output}} |
| `usd_export` | I-export | Ang steel model bilang USD (.usda, .usdc, o .usdz), gaya ng isinusulat ng {{ui:Output}} › {{ui:USD}} (tingnan ang [I-export ang steel model bilang USD](topic:usd)); sa Studio, maaari nitong isulat ang file sa folder na pinayagan mo |

## Kung may hindi gumana

- **Walang nakikitang DetailCraft tools ang assistant:** tingnan kung naka-on ang switch sa window na ito, at kung bukas ang window sa Studio.
- **"kailangan ng pahintulot sa pag-edit"** (o save, export): lagyan ito ng check sa ilalim ng {{ui:Assistants}}, saka itanong muli.
- **"Naglalagay ng member ang tao":** tapusin ang ginagawa mo (o pindutin ang {{key:Esc}}), saka hayaang subukan muli ng assistant.
- **Mga error na "401" o "token":** nagbago ang token (nag-restart ang Studio, o pinindot ang {{ui:New token}}). Kopyahin ang bago sa settings ng assistant.

## Tingnan din

- [Mga recipe para sa AI assistant](common:assistants-recipes): mga halimbawang may kasamang tool na tinatawag ng bawat isa.
