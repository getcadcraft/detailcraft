---
title: Sebenzisa i-DetailCraft nomsizi we-AI
summary: Vumela umsizi wakho we-AI noma umbhalo ufunde imodeli, izingxenye, izinkinga nokungqubuzana, engeze izinzwane nezixhumi, alondoloze futhi ahlengeze (i-USD nayo): izimvume, ukuxhuma nge-CadCraft Studio, nogwembe lwesenzo.
keywords: ai, umsizi, ajenti, mcp, model context protocol, umbhalo, ukuzenzakalela, izingxenye, ukungqubuzana, uxhumo, izimvume, ukunqamula uxhumo, isenzo, ukuhlehlisa
from: d624c9a0
---

## Okuzofunda

Ukuthi ungavumela kanjani umsizi we-AI (noma umbhalo owubhalile) ukusebenza ne-DetailCraft, nokuthi unquma kanjani okungathintwa yiwo.

I-DetailCraft **ayinayo i-AI yayo** futhi ayithumeli lutho noma kuphi. Wena uletha umsizi: noma yiluphi uhlelo olukhuluma i-Model Context Protocol (MCP). I-DetailCraft inika kuphela amathuluzi, nawe uyakhetha ukuthi yiphi.

## Vula

1. Vula {{ui:Izilungiselelo}} (igiya ebhareni lesicelo, noma {{key:Mod+,}}) bese uya kuthebhu ye-{{ui:DetailCraft}}.
2. Ngaphansi kwe-{{ui:Abasizi}}, thikha **Vumela abasizi be-AI nemibhalo ukusebenzisa i-DetailCraft**. Ivaliwe kuze kube yilapho uyivula.
3. Khetha ukuthi ingenzani: **Funda** ikhethiwe ukuqala; thikha **Hlela**, **Londoloza** noma **Hlengeza** kuphela lapho udinga kuwo.

Amathuluzi angaphandle kwezimvume ozikhethile akatholakali komsizi, futhi uma ecela enye, i-DetailCraft iyawenqaba ibhale kugwembe lwesenzo. Ukucima iswishi kuvala wonke amaxhumo ngesikhathi esisodwa.

## Xhuma umsizi wakho

Abasizi baxhuma nge-**CadCraft Studio** kukhompyutha yakho: i-Studio isebenzisa iseva encane okuyiyo kuphela le khompyutha engayifinyelela, evikelwe ngethokheni eyenza njalo lapho iqala. Ku-Studio, khetha {{ui:Xhuma umsizi}} bese ukopisha ikheli nethokheni ku-assistant yakho (i-Studio ikhombisa izilungiselelo ezifanele ukuzinamathisela). Ungalabelani ithokheni.

:::note
Ithebhu yesiphequluli ayikwazi ukuvula uxhumo lomsizi: ezinhlelweni zesiphequluli iswishi ayinamthelela ize usebenzise i-CadCraft Studio kukhompyutha yakho.
:::

## Ulawula wena

- **Ushintsho ngalunye kusinyathelo esisodwa sokuhlehlisa**, olubhalwe ngokuthi lowo msizi (isibonelo "Assistant: add beam", "Assistant: add gussets"). {{key:Mod+Z}} ibuyisa ushintsho lokugcina lomsizi ngokuphelele. Umyalo womsizi `undo` ubuyisa izinyathelo zakhe kuphela, hhayi ezakho, ngaphandle uma ekucela ngokusobala.
- **Uyalinda kuwe.** Lapho ubeka izakhiwo, uhambisa izingxenye noma unamathisela, i-DetailCraft iwenqaba ushintsho lomsizi futhi imtshela ukuthi azame futhi.
- **Uyazi lapho kuxhunyiwe okunye.** Inkinobho ebhareni lesicelo ibiza umsizi lapho exhunyiwe; yichofoze ukuze ubone ayenzelwe yona, noma **Nqamula** ixhumo.
- **Umsebenzi.** {{ui:Izilungiselelo}} › {{ui:DetailCraft}} › {{ui:Abasizi}} › {{ui:Umsebenzi}} ibala yonke imibizo: nini, yithuluzi liphi, yenziwe noma yenqatshiwe. {{ui:Londoloza irekhodi}} igcina ikhophi.

## Okungacelwa umsizi

Zonke izinde zisemamilimitha, amaphoyinti `[x, y, z]` ne-z iphezulu, njengakumodeli.

| Ithuluzi | Imvume | Okwenzayo |
|---|---|---|
| `app_info`, `model_describe` | Funda | Imodeli evulekile: amagridi, amazinga, izigaba, izakhiwo ngohlobo nangephrofayili, izixhumi, izisekelo, izitebhisi, izingxenye, isisindo sensimbi, izinkinga |
| `parts_list` | Funda | Izimpawu zezingxenye nephrofayili, izinto, ubude besikiwe, inani, isisindo, isigaba nezimpawu zenhlanganisela; ngohlobo, ephrofayili, esimpawini noma esigabeni |
| `problems_list` | Funda | Okudweba ithebhu {{ui:Izinkinga}}, ngayinye nokuthi imayelana nani |
| `clash_check` | Funda | [Ukuhlolwa kokungqubuzana](topic:clash-check), nobubanzi bayo namasigaba |
| `selection_get` | Funda | Okukhethiwe kwakho |
| `selection_set` | Hlela | Ikhetha izakhiwo, izixhumi, izisekelo noma izitebhisi (nge-id noma ngesimpawu sengxenye) ukuze zikubonise; ayishintshi lutho |
| `member_add` | Hlela | Ibhimu, insika, ukubamba noma ipuleti phakathi kwamaphoyinti amabili |
| `connection_add` | Hlela | Amapuleti okuphela, amathebhu okugoqa, amapuleti wesisekelo, ukuhlanganisa noma izinsimbi zokuqinisa lapho izakhiwo ezinikeziwe zihlangana, njengoba izinkinobho ze-{{ui:Xhuma}} zenza |
| `undo` | Hlela | Ibuyisa izinyathelo zokugcina zomsizi |
| `model_save` | Londoloza | Ukulondoloza kwe-DetailCraft |
| `model_export` | Hlengeza | IFC, amafayela e-NC, i-BOM, uhlu lokugoba, ifayela le-KISS noma uhlu lokusika, njengoba izinkinobho ze-{{ui:Okukhiphayo}} zizenza |
| `usd_export` | Hlengeza | Imodeli yensimbi njenge-USD (.usda, .usdc noma .usdz), njengoba {{ui:Okukhiphayo}} › {{ui:USD}} ikubhala (bheka [Hlengeza imodeli yensimbi njenge-USD](topic:usd)); ku-Studio ingabhala ifayela efolidini olivumele |

## Uma kukhona okungasebenzi

- **Umsizi awuboni amathuluzi e-DetailCraft:** hlola ukuthi iswishi ivuliwe kule windi, nokuthi iwindi livulekile ku-Studio.
- **"idinga imvume yokuhlela"** (noma yokulondoloza, noma yokuhlengeza): thikha kwi-{{ui:Abasizi}}, bese ubuza futhi.
- **"Umuntu ubeka ibhimu":** qeda okwenzayo (noma cindezela {{key:Esc}}), bese uvumela umsizi azame futhi.
- **Iphutha le-"401" noma "token":** ithokheni ishintshile (i-Studio iqale kabusha, noma {{ui:Ithokheni entsha}}). Kopisha eyintsha ezilungiselelweni zomsizi.

## Bona nokuthi

- [Iresiphi zabasizi be-AI](common:assistants-recipes): izibonelo ezisebenzayo, ngayinye nethuluzi elibizwayo.
