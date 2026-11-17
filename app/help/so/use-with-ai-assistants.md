---
title: Isticmaal DetailCraft kaaliye AI ah
summary: U ogolow kaaliyahaaga AI ama script-kaaga inuu akhriyo moodeelka, qaybahiisa, dhibaatooyinka iyo isku-dhacyada, ku daro xubno iyo xidhiidho, kaydi oo dhoofi (USD sidoo kale): ogolaanshaha, xidhiidhka iyo diiwaanka waxqabadka.
keywords: ai, kaaliye, wakiil, mcp, model context protocol, script, otomaatig, qaybaha, isku-dhac, xidhiidh, ogolaansho, jooji xidhiidhka, waxqabad, ka noqo
from: d624c9a0
---

## Waxa aad baran doontaa

Sida loo ogolaado kaaliye AI (ama script aad qortay) inuu la shaqeeyo DetailCraft, iyo sida loo go'aaminayo waxa uu xor u yahay inuu taabto.

DetailCraft **ma lahan AI** gaar ah, wax meel kalena ma diro. Adigu keenta kaaliyaha: barnaamij kasta oo ku hadla Model Context Protocol (MCP). DetailCraft wuxuu siinayaa qalabyo oo keliya, adna waad dooratay.

## Shid

1. Fur {{ui:Settings}} (giraangiraha bar-ka app-ka, ama {{key:Mod+,}}) oo tag tab-ka {{ui:DetailCraft}}.
2. Hoosta {{ui:Assistants}}, calaamadi **Ogolow kaaliyayaasha AI iyo scripts-ka inay isticmaalaan DetailCraft**. Waa la damiyay ilaa aad sameyso.
3. Dooro waxa ay sameyn karto: **Akhri** waa la calaamadiyay bilowga; calaamadi **Tafatir**, **Kaydi** ama **Dhoofi** kaliya marka aad u baahan tahay.

Qalabyada ka baxsan ogolaanshaha aad calaamadisay looma soo bandhigo kaaliyaha; haddii uu si kastaba u weydiisto, DetailCraft way diidaa oo qoraa diiwaanka waxqabadka. Demintta switch-ka waxay joojisaa dhammaan xidhiidhyada hal mar.

## Xidh kaaliyahaaga

Kaaliyayaashu waxay ku xiriiraan **CadCraft Studio** kombiyuutarkaaga: Studio wuxuu socodsiiyaa server yar oo kombiyuutarkan keliya gaari karo, oo ilaaliya calaamad (token) uu sameeyo mar kasta oo bilaabmo. Studio, dooro {{ui:Connect an assistant}} oo koobiyee cinwaanka iyo token-ka kaaliyahaaga (Studio wuxuu muujinayaa dejinta saxda ah ee la dhejiyo). Ha wadaagin token-ka.

:::note
Tab browser ma furi karo xidhiidh kaaliye: browser-ka apps-ka switch-ku waxba ma beddelayo ilaa aad isticmaasho CadCraft Studio kombiyuutarkaaga.
:::

## Adigu waad maamushaa

- **Isbeddel kasta waa hal tallaabo oo ka noqo**, lagu calaamadiyay sida kaaliyaha (tusaale "Assistant: ku dar biim", "Assistant: ku dar gussets"). {{key:Mod+Z}} wuxuu dib u qaadaa isbeddelka ugu dambeeya ee kaaliyaha oo dhan. `undo` kaaliyaha wuxuu dib u qaadaa tallaabooyinkiisa oo keliya, ma aha kuwaaga, ilaa uu si gaar ah u weydiisto.
- **Wuu sugaa.** Intaad xubin dhigaysid, qaybaha dhaqaajinaysid ama dhajinaysid, DetailCraft wuu diidaa isbeddelada kaaliyaha wuxuuna ku yidhaa inuu mar kale isku dayo.
- **Waad ogaanaysaa marka mid la xiriiray.** Badhanka bar-ka app-ka wuxuu magacaabaa kaaliyaha intuu xidhan yahay; guji si aad u aragto waxa uu sameyn karo, ama si aad u **Disconnect** u jojisid.
- **Waxqabadka.** {{ui:Settings}} › {{ui:DetailCraft}} › {{ui:Assistants}} › {{ui:Activity}} wuxuu liistaa wac kasta: goorta, qalabka, dhammaystiran ama diidan. {{ui:Save the log}} wuxuu hayaa nuqul.

## Waxa kaaliyuhu weydiin karo

Dhammaan dhererka waa millimitir, dhibcaha `[x, y, z]` oo z sare u taagan, sida moodeelka.

| Qalab | Ogolaansho | Waxa uu sameeyo |
|---|---|---|
| `app_info`, `model_describe` | Akhri | Moodeelka furan: grids, levels, phases, xubnaha nooca iyo profile-ka, xidhiidhyada, aasaasyada, jaranjarada, qaybaha, miisaanka birta, dhibaatooyinka |
| `parts_list` | Akhri | Calaamadaha qaybaha oo leh profile, material, dherer goyn, tiro, miisaan, phase iyo calaamadaha isku-dhiska; sida nooca, profile, calaamad ama phase |
| `problems_list` | Akhri | Waxa tab-ka {{ui:Problems}} liistaa, mid kasta oo leh waxa uu ka hadlayo |
| `clash_check` | Akhri | [Hubinta isku-dhaca](topic:clash-check), oo leh dulqaadkeeda iyo phases-ka |
| `selection_get` | Akhri | Waxa aad xulatay |
| `selection_set` | Tafatir | Dooranaya xubnaha, xidhiidhyada, aasaasyada ama jaranjarada (id ama calaamad qayb) si ay kuu muuqdaan; wax ma beddelayo |
| `member_add` | Tafatir | Biim, tiir, brace ama saxan u dhexeeya laba dhibcood |
| `connection_add` | Tafatir | Saxannada dhamaadka, shear tabs, base plates, jiidka ama gussets halka xubnaha la siiyay ay ku kulmaan, sida badhamada {{ui:Connect}} sameeyaan |
| `undo` | Tafatir | Dib u qaadaa tallaabooyinkii ugu dambeeyay ee kaaliyaha |
| `model_save` | Kaydi | Kaydinta DetailCraft ee iyada |
| `model_export` | Dhoofi | IFC, faylalka NC, BOM, jadwalka foorarsashada, faylka KISS ama liiska goynta, sida badhamada {{ui:Output}} sameeyaan |
| `usd_export` | Dhoofi | Moodeelka birta sida USD (.usda, .usdc ama .usdz), sida {{ui:Output}} › {{ui:USD}} u qoraan (eeg [Dhoofinta moodeelka birta ee USD](topic:usd)); Studio-da waxa uu faylka ku qori karaa fooldar aad ogolaatay |

## Haddii wax shaqeynin

- **Kaaliyuhu ma arko qalabyada DetailCraft:** hubi in switch-ku daaqaddan uu shidan yahay, iyo in daaqaddu furan tahay Studio-da.
- **"needs the edit permission"** (ama save, export): calaamadi hoosta {{ui:Assistants}}, kadibna weydii mar kale.
- **"The person is placing a member":** dhamaystir waxa aad sameynayso (ama riix {{key:Esc}}), kadibna u oggolow kaaliyaha inuu mar kale isku dayo.
- **Khaladaadka "401" ama "token":** token-ku wuu isbedelay (Studio wuu dib u bilaabay, ama {{ui:New token}}). Ku koobiyee token-ka cusub dejinta kaaliyaha.

## Eeg sidoo kale

- [Cuntooyinka kaaliyayaasha AI](common:assistants-recipes): tusaalooyin shaqo, mid kasta oo leh qalabyada uu wicayo.
