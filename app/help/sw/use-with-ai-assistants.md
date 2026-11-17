---
title: Tumia DetailCraft na msaidizi wa AI
summary: Ruhusu msaidizi wako wa AI au hati ikisome modeli, sehemu zake, matatizo na migongano, iongeze vipengele na miunganisho, ihifadhi na kuhamisha (pamoja na USD): ruhusa, kuunganisha kupitia CadCraft Studio, na kumbukumbu ya shughuli.
keywords: ai, msaidizi, wakala, mcp, itifaki ya muktadha wa modeli, hati, otomatiki, sehemu, migongano, miunganisho, ruhusa, kukatisha, shughuli, tendua
from: d624c9a0
---

## Utajifunza nini

Jinsi ya kuruhusu msaidizi wa AI (au hati uliyoandika) kufanya kazi na DetailCraft, na jinsi ya kuamua anachoruhusiwa kugusa.

DetailCraft **haina AI yake yenyewe** na haituma chochote popote. Wewe ndiye unaleta msaidizi: programu yoyote inayozungumza Model Context Protocol (MCP). DetailCraft inampa zana tu, na wewe unachagua zipi.

## Iwashe

1. Fungua {{ui:Mipangilio}} (gia kwenye upau wa programu, au {{key:Mod+,}}) kisha nenda kwenye kichupo cha {{ui:DetailCraft}}.
2. Chini ya {{ui:Wasaidizi}}, weka tiki kwenye **Ruhusu wasaidizi wa AI na hati kutumia DetailCraft**. Imezimwa hadi ufanye hivyo.
3. Chagua kile kinachoruhusiwa: **Soma** imewekwa tiki mwanzoni; weka tiki **Hariri**, **Hifadhi** au **Hamisha nje** pale tu unapozihitaji.

Zana zilizo nje ya ruhusa ulizoweka tiki hazitolewi kwa msaidizi, na akiomba moja hata hivyo, DetailCraft inakataa na kuandika kwenye kumbukumbu ya shughuli. Kuzima swichi kunakatisha miunganisho yote mara moja.

## Unganisha msaidizi wako

Wasaidizi huunganishwa kupitia **CadCraft Studio** kwenye kompyuta yako: Studio huendesha seva ndogo ambayo kompyuta hii pekee inaweza kuifikia, ikilindwa na tokeni ambayo huitengeneza kila inapoanza. Katika Studio, chagua {{ui:Unganisha msaidizi}} kisha nakili anwani na tokeni kwenye msaidizi wako (Studio inaonyesha mipangilio kamili ya kubandika). Usiwahi kushiriki tokeni.

:::note
Kichupo cha kivinjari hakiwezi kufungua muunganisho kwa msaidizi: katika programu za kivinjari swichi haina athari hadi utumie CadCraft Studio kwenye kompyuta yako.
:::

## Wewe ndiye unayesimamia

- **Kila mabadiliko ni hatua moja ya kutendua**, yenye lebo ya msaidizi (kwa mfano "Msaidizi: ongeza boriti", "Msaidizi: ongeza gusseti"). {{key:Mod+Z}} hurejesha mabadiliko ya mwisho ya msaidizi kwa ujumla. `undo` ya msaidizi hurejesha hatua zake tu, si zako, isipokuwa aombe hilo waziwazi.
- **Inakusubiri wewe.** Wakati unaweka kipengele, unahamisha sehemu au unabandika, DetailCraft inakataa mabadiliko ya msaidizi na inamwambia ajaribu tena.
- **Unajua wakati mmoja umeunganishwa.** Kitufe kwenye upau wa programu kinataja msaidizi wakati umeunganishwa; bofya ili uone anachoruhusiwa kufanya, au ili **Ukatishe**.
- **Shughuli.** {{ui:Mipangilio}} › {{ui:DetailCraft}} › {{ui:Wasaidizi}} › {{ui:Shughuli}} inaorodhesha kila wito: lini, zana gani, imekamilika au imekataliwa. {{ui:Hifadhi kumbukumbu}} huweka nakala.

## Msaidizi anaweza kuomba nini

Urefu wote ni milimita, pointi `[x, y, z]` ikiwa z juu, kama ilivyo kwenye modeli.

| Zana | Ruhusa | Kazi yake |
|---|---|---|
| `app_info`, `model_describe` | Soma | Modeli iliyofunguliwa: gridi, viwango, awamu, vipengele kwa aina na wasifu, miunganisho, misingi, ngazi, sehemu, uzito wa chuma, matatizo |
| `parts_list` | Soma | Alama za sehemu zenye wasifu, nyenzo, urefu wa kukata, idadi, uzito, awamu na alama za mkusanyiko; kwa aina, wasifu, alama au awamu |
| `problems_list` | Soma | Kile kichupo cha {{ui:Matatizo}} kinachoorodhesha, kila kimoja pamoja na kinachohusu |
| `clash_check` | Soma | [Ukaguzi wa migongano](topic:clash-check), pamoja na uvumilivu wake na awamu |
| `selection_get` | Soma | Kile ulichochagua |
| `selection_set` | Hariri | Huchagua vipengele, miunganisho, misingi au ngazi (kwa kitambulisho au alama ya sehemu) ili kukuonyesha; haibadilishi chochote |
| `member_add` | Hariri | Boriti, nguzo, brasi au sahani kati ya nukta mbili |
| `connection_add` | Hariri | Sahani za ncha, vichupo vya kukata, sahani za msingi, viunganishi au gusseti pale vipengele vilivyotolewa vinapokutana, kama vitufe vya {{ui:Unganisha}} vinavyofanya |
| `undo` | Hariri | Hurejesha hatua za mwisho za msaidizi |
| `model_save` | Hifadhi | Hifadhi ya DetailCraft yenyewe |
| `model_export` | Hamisha nje | IFC, faili za NC, BOM, ratiba ya kupinda, faili ya KISS au orodha ya kukata, kama vitufe vya {{ui:Matokeo}} vinavyozitengeneza |
| `usd_export` | Hamisha nje | Modeli ya chuma kama USD (.usda, .usdc au .usdz), kama {{ui:Matokeo}} › {{ui:USD}} inavyoiandika (angalia [Hamisha modeli ya chuma kama USD](topic:usd)); kwenye Studio inaweza kuandika faili kwenye folda uliyoruhusu |

## Kama jambo halifanyi kazi

- **Msaidizi haoni zana za DetailCraft:** hakikisha swichi imewashwa kwenye dirisha hili, na kwamba dirisha liko wazi kwenye Studio.
- **"inahitaji ruhusa ya kuhariri"** (au hifadhi, hamisha nje): weka tiki chini ya {{ui:Wasaidizi}}, kisha uulize tena.
- **"Mtu anaweka kipengele":** maliza kile unachofanya (au bonyeza {{key:Esc}}), kisha mruhusu msaidizi ajaribu tena.
- **Makosa ya "401" au "token":** tokeni imebadilika (Studio imeanzishwa upya, au {{ui:Tokeni mpya}}). Nakili mpya kwenye mipangilio ya msaidizi.

## Angalia pia

- [Mapishi kwa wasaidizi wa AI](common:assistants-recipes): mifano iliyotekelezwa, kila moja pamoja na zana inazoita.
