---
title: Weka bamba na ongeza wasifu maalum
summary: Weka bamba huru kwa unene na upana, na ufafanue sehemu zako mwenyewe za I, chaneli, pembe, mrija au upau bapa.
keywords: bamba, bapa, wasifu maalum, wasifu wa mtumiaji, parametriki, umbo, sehemu-mtambuka, pl
from: c24c3b51
---

## Weka bamba

Bamba huwekwa kama boriti: linaenda kati ya makutano mawili, likiwa na upana kuvuka na unene kwenda juu.

1. Chagua {{ui:Bamba}} katika kundi la {{ui:Mahali}}, au bonyeza {{key:P}}.
2. Katika paneli ya {{ui:Sifa}}, weka {{ui:Unene (mm)}} na {{ui:Upana (mm)}}. Chaguo-msingi ni 20 x 200 katika A36.
3. Weka {{ui:Nyenzo}} na {{ui:Mzunguko (°)}} ikihitajika. Mzunguko wa 90 unasimamisha bamba kwa ukingo wake.
4. Bofya makutano mawili, au tumia fomu ya {{ui:Ongeza kwa gridi}}.

Jina la wasifu wa bamba huandikwa `PL<unene>x<upana>`, kwa mfano PL20x200. Urefu wake ni umbali kati ya nukta mbili.

Ili kubadilisha ukubwa wa bamba lililowekwa, lichague kisha ubadilishe {{ui:Unene (mm)}} au {{ui:Upana (mm)}}.

Bamba unazoweka ni sehemu zao wenyewe (alama p, mkusanyiko P). Bamba za ncha na bamba za msingi zinazotengenezwa na miunganisho pia ni bamba, lakini unazibadilisha kupitia muunganisho wake; angalia [Bamba za ncha](topic:end-plates).

## Ongeza wasifu maalum

Sehemu unayohitaji isipokuwa katika katalogi, itengeneze kwa vipimo vyake. Wasifu maalum ni wa modeli na unahifadhiwa nayo. Ili kuutumia kwenye kila modeli mpya, uweke katika {{ui:Wasifu Wangu}}, kama inavyoelezwa chini ya "Hifadhi wasifu kwa modeli mpya".

1. Katika paneli ya {{ui:Modeli}} upande wa kushoto, fungua {{ui:Wasifu maalum}}.
2. Andika {{ui:Jina}}, kwa mfano `W8x18-custom` au `RHS 120x80x5`. Haliwezi kuwa jina la katalogi wala kufanana na jina la bamba.
3. Chagua {{ui:Umbo}}: {{ui:Umbo la I}}, {{ui:Chaneli}}, {{ui:Pembe sawa}}, {{ui:Mrija wa mstatili}}, {{ui:Mrija wa duara}} au {{ui:Upau bapa}}.
4. Jaza vipimo vinavyoonekana, vyote kwa milimita:

| Umbo | Vipimo |
|---|---|
| Umbo la I | Kina d, Upana wa flensi bf, Ukuta tw, Flensi tf, Radius ya kona ya ndani r (inaweza kuwa 0) |
| Chaneli | Kina d, Upana wa flensi bf, Ukuta tw, Flensi tf (kona za mraba) |
| Pembe sawa | Upana b (kila mguu), Unene t |
| Mrija wa mstatili | Kimo h, Upana b, Unene t (radius ya kona ya nje 2t) |
| Mrija wa duara | Kipenyo D, Unene t |
| Upau bapa | Upana b, Unene t |

5. Acha {{ui:Hifadhi katika Wasifu Wangu}} imetiwa alama ili uwe nao kila modeli mpya (angalia hapa chini), au uiondoe alama ili uwe katika modeli hii pekee.
6. Chagua {{ui:Ongeza wasifu}}.

Upau wa hali unasema "Wasifu "…" umeongezwa; uko kwenye kila orodha ya wasifu chini ya Maalum." Unaonekana kwenye orodha chini ya fomu na mwishoni mwa kila orodha ya {{ui:Wasifu}}.

DetailCraft hukagua kama umbo linaweza kuwepo. Utaona ujumbe kama "Ukuta na flensi hazitoshi ndani ya kina na upana.", "Radius ya kona ya ndani ni kubwa mno kwa flensi." au "Ukuta ni mnene mno." Rekebisha namba kisha uchague {{ui:Ongeza wasifu}} tena.

### Wasifu maalum unapata nini

- Uzito kwa mita kutoka eneo × 7850 kg/m³ (ukubwa wa katalogi hutumia uzito uliochapishwa).
- I-shapes maalum huchukua matundu, mikato, bamba za ncha, faili za NC na michoro ya warsha kama I-shapes za katalogi.
- Upau bapa maalum hufanya kazi kama bamba.
- Chaneli na mirija maalum huchukua matundu; pembe na mirija ya duara bado hazichukui.

Huwezi kuhariri wala kuondoa wasifu maalum kutoka modeli mara tu unapoongezwa (tumia {{key:Mod+Z}} mara moja ukifanya kosa). Mpe jina jipya lile lililosahihishwa.

## Hifadhi wasifu kwa modeli mpya

{{ui:Wasifu Wangu}}, chini ya fomu, ni orodha yako binafsi ya wasifu maalum. Inahifadhiwa kwenye kivinjari hiki, kwenye kompyuta hii, si kwenye faili la modeli wala kwenye akaunti yako.

- Wasifu uliongezwa ukiwa na {{ui:Hifadhi katika Wasifu Wangu}} umetiwa alama unaingia kwenye orodha. Kila modeli mpya, ikiwemo ile DetailCraft inayofungua unapoianzisha, huanza na wasifu wote hizo katika orodha zake za wasifu.
- Wasifu uliomo tayari kwenye modeli lakini usio kwenye orodha una kitufe cha {{ui:Hifadhi}} kando yake.
- Katika modeli isiyokuwa na mojawapo ya wasifu wako (faili la zamani, kwa mfano), chagua {{ui:Tumia hapa}} ili kuuongeza.
- {{ui:Ondoa}} huondoa wasifu kwenye orodha. Modeli zinazoutumia tayari zinaweka nakala yao.
- Modeli unayoifungua inashikilia wasifu uliohifadhiwa kwenye faili lake. Kufungua faili hakubadilishi orodha yako kamwe.
- Jina lililopo kwenye orodha lenye vipimo tofauti linakataliwa: mpe jina jipya lingine.
- Kufuta data ya tovuti ya kivinjari, au kutumia kivinjari au kompyuta nyingine, huanza na orodha tupu. Dirisha la faragha haliwezi kuhifadhi; programu inasema hivyo.
