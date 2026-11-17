---
title: Weka gridi na viwango
summary: Andika mistari ya gridi, nafasi zao na viwango ambavyo kila kipengele kinawekwa.
keywords: gridi, shoka, mistari ya gridi, viwango, mwinuko, ghorofa, sakafu, nafasi, uwekaji
from: 9cad233c
---

Kila kipengele katika DetailCraft kinawekwa kwenye makutano ya gridi kwenye kiwango. Weka gridi na viwango kwanza; unaweza kuvibadilisha baadaye.

## Jinsi gridi zinavyofanya kazi hapa

- **Mistari yenye namba** inakwenda upande mmoja, **mistari yenye herufi** upande mwingine. Majina ni mazoea tu: lebo inaweza kuwa maandishi yoyote hadi herufi 8 (1, 2, 3 au A1, A2, au 10, 20).
- Unaandika lebo na nafasi kati yake, si viwianishi. Mstari wa kwanza wa kila seti uko kwenye 0.
- Mistari yenye namba ni mistari ya x isiyobadilika; mistari yenye herufi ni mistari ya y isiyobadilika. Kwa hiyo boriti kutoka gridi 1 hadi 2 inakwenda kando ya x, na boriti kutoka A hadi B inakwenda kando ya y.
- Thamani zote ni milimita.

Modeli mpya huanza na mistari yenye namba 1 2 3 kwa 6000 6000, mistari yenye herufi A B kwa 6000, na viwango viwili.

## Weka gridi

1. Kwenye paneli ya {{ui:Modeli}} upande wa kushoto, fungua {{ui:Gridi}} ikiwa imekunjwa.
2. Katika {{ui:Mistari yenye namba}}, andika lebo zikitenganishwa na nafasi, kwa mfano `1 2 3 4 5`.
3. Katika sehemu ya {{ui:Nafasi}} chini yake, andika nafasi moja kwa kila pengo, kwa mfano `6000 6000 7500 6000`. Mapengo manne kwa mistari mitano.
4. Fanya vivyo hivyo kwenye {{ui:Mistari yenye herufi}} na {{ui:Nafasi}} zake, kwa mfano `A B C` na `8000 8000`.
5. Chagua {{ui:Tumia gridi}}.

Upau wa hali unasema "Gridi imesasishwa." na mwonekano unakuza hadi gridi mpya. Koma pia hufanya kazi kama vitenganishi.

Ikiwa kitu hakiongezeki, hakuna kinachobadilika na upau wa hali unaeleza kwa nini, kwa mfano "Gridi za namba: toa nafasi moja kati ya kila jozi ya mistari (4)." Ukaguzi mwingine: nafasi lazima ziwe milimita chanya, lebo lazima ziwe tofauti, na kunaweza kuwa na mistari 60 kwa kila upande kwa kiwango cha juu.

:::note
Vipengele vinahifadhi viwianishi vyake gridi zinapohama. Ukibadilisha nafasi baada ya kuweka chuma, chuma kinabaki pale kilipo na hakipo tena kwenye gridi. Badilisha gridi kwanza, au sogeza vipengele kwa kuhariri viwianishi vya ncha zao.
:::

## Weka viwango

1. Fungua {{ui:Viwango}} kwenye paneli ya {{ui:Modeli}}.
2. Kila safu ina jina la kiwango na mwinuko wake kwa milimita. Zihariri upendavyo.
3. Chagua {{ui:Ongeza kiwango}} kwa safu nyingine. Inaitwa "Kiwango 3" (na kadhalika) na inawekwa 4000 mm juu ya kiwango cha juu zaidi; badilisha vyote viwili ukihitaji.
4. Ili kuondoa kiwango, chagua kitufe cha × mwishoni mwa safu yake.
5. Chagua {{ui:Tumia viwango}}.

Hakuna kinachobadilika hadi uchague {{ui:Tumia viwango}}. Viwango vinapangwa kwa mwinuko vinapotumika. Kila kiwango kinahitaji jina, viwango viwili haviwezi kushiriki jina, na lazima ubaki na angalau kiwango kimoja.

Viwango vinaweza kuwa chini ya sifuri (basement kwa `-3500`) na havihitaji kuwa na nafasi sawa.

## Viwango vinavyotumikaje

- Nguzo iliyowekwa kwenye kiwango inakwenda juu hadi kiwango kinachofuata, au hadi kiwango unachochagua kwenye {{ui:Hadi}}.
- Mihimili na bamba zinawekwa kati ya makutano mawili kwenye kiwango unachobofya.
- Misingi inawekwa na ncha yake ya juu kwenye kiwango unachobofya.
- {{ui:Mpango}} inaangalia kiwango kimoja kwa wakati.
- Usafirishaji wa IFC unatengeneza ghorofa moja ya jengo kwa kila kiwango.

## Tendua

Mabadiliko ya gridi na viwango ni uhariri kama mengine: {{key:Mod+Z}} inarejesha gridi iliyotangulia.

## Inayofuata

[Weka nguzo, mihimili na viimarisho](topic:place-members)
