---
title: Kuanza na DetailCraft
summary: DetailCraft inafanya nini leo, jinsi ya kuifungua, na modeli ya kwanza kuanzia gridi hadi mchoro wa warsha ndani ya dakika kumi.
keywords: anza, modeli ya kwanza, utangulizi, uchoraji wa chuma, chuma cha kuimarisha, mwongozo wa haraka, mafunzo, muhtasari
from: 3682c0d8
---

DetailCraft ni programu ya uchoraji wa kina wa chuma na chuma cha kuimarisha katika familia ya CadCraft. Unajenga modeli ya 3D ya fremu ya chuma kwenye gridi na viwango, unaiunganisha, na unapata kile warsha inachohitaji: alama za sehemu na mikusanyiko, orodha ya vifaa, michoro ya warsha ya sehemu moja moja, faili za DSTV NC, modeli ya IFC, na ratiba ya kupinda kwa misingi.

Hii ni toleo la mapema. Linafanya orodha fupi ya mambo kwa makini badala ya kila kitu mara moja. Soma [Kisichojengwa bado](topic:not-built-yet) kabla ya kupanga kazi halisi kulingana nacho.

## Inachofanya leo

- Gridi na viwango unavyoandika, kwa milimita.
- Nguzo, mihimili, mishikio na bamba kutoka katalogi za wasifu zilizochapishwa (AISC W, S, C, L, HSS na Pipe; IPE, HEA, HEB na UPN za Ulaya), pamoja na wasifu wako wa kiparamita.
- Miunganiko miwili: sahani ya mwisho yenye bolti kutoka boriti hadi flensi ya nguzo, na sahani ya msingi wa nguzo yenye vijiti vinne vya kutia nanga. Kila moja inaweza kunakiliwa kwenye kila kiungo kinachofanana.
- Mashimo na kupunguzwa vinavyoandikwa kwa nafasi.
- Misingi ya pedi ya mstatili yenye mkeka wa chini na baa za kuanzia.
- Alama za sehemu na mikusanyiko zinazojisasisha baada ya kila mabadiliko.
- Hamisho: IFC4, faili za DSTV NC (maumbo-I na bamba), orodha ya vifaa kama CSV, ratiba ya kupinda kama CSV, na PDF ya mchoro wa warsha wa sehemu moja.

## Fungua DetailCraft

1. Fungua DetailCraft kwenye kivinjari cha kompyuta ya mezani: Chrome, Edge, Firefox au Safari. Tazama [Vivinjari na kompyuta](common:browsers).
2. Subiri skrini ijae. Upau wa hali chini unasema "Tayari. Fungua Sampuli, au weka gridi na viwango na uanze kuweka vipengele."

Mwonekano wa modeli unahitaji picha za 3D (WebGL). Ikiwa katikati ya skrini inasema "Kivinjari hiki hakikuweza kuanzisha picha za 3D (WebGL)", tazama [Utatuzi wa matatizo](topic:troubleshooting#the-3d-view-is-missing).

:::note
Modeli zako zinabaki kwenye kompyuta yako. Kufungua modeli kunaisoma kwenye kivinjari, na kuhifadhi kunapakua faili. Hakuna kinachopakiwa. Kuhifadhi kwenye wingu bado hakupatikani. Tazama [Faili zako zinakwenda wapi](common:your-files). Ili kutumia DetailCraft bila muunganisho baadaye, chagua {{ui:Hifadhi kwa matumizi ya nje ya mtandao}} kwenye upau wa programu mara moja ukiwa mtandaoni; tazama [Kufanya kazi nje ya mtandao](common:offline).
:::

:::offline
Uko nje ya mtandao. DetailCraft inafanya kazi bila muunganisho tu ikiwa ilihifadhiwa kwa matumizi ya nje ya mtandao kwanza: kitufe cha {{ui:Hifadhi kwa matumizi ya nje ya mtandao}} kwenye upau wa programu kisha kinasoma {{ui:Tayari kwa matumizi ya nje ya mtandao}}. Tazama [Kufanya kazi nje ya mtandao](common:offline).
:::

## Angalia sampuli kwanza

Njia ya haraka zaidi ya kuona DetailCraft inachotengeneza ni fremu ya sampuli.

1. Chagua {{ui:Sampuli}} kwenye kundi la {{ui:Faili}} la upau wa zana.
2. Mwonekano unaonyesha fremu ya span mbili: nguzo sita zenye sahani za msingi, mihimili minne yenye sahani za mwisho, mshikio mmoja na misingi saba yenye chuma cha kuimarisha.
3. Bofya boriti. Kidirisha cha {{ui:Sifa}} upande wa kulia kinaonyesha alama yake ya sehemu, urefu wa kukata, uzito na mashimo ambayo sahani za mwisho zilitengeneza.
4. Fungua kichupo cha {{ui:Orodha ya vifaa}} chini ili kuona kila alama ya sehemu pamoja na idadi yake na uzito.

Mwongozo [Chunguza fremu ya sampuli](topic:sample-model) unaipitia kipande kwa kipande.

## Modeli yako ya kwanza

Modeli mpya tayari ina gridi 1 hadi 3 kwa A hadi B kwa 6000 mm na viwango viwili, Level 1 kwenye 0 na Level 2 kwenye 4000.

1. Chagua {{ui:Mpya}}. Ikiwa modeli ya sasa ina mabadiliko, DetailCraft inauliza kama uyahifadhi kwanza.
2. Chagua {{ui:Mpango}} juu ya mwonekano. Orodha ya viwango kando yake inachagua Level 1.
3. Chagua {{ui:Nguzo}} kwenye upau wa zana, au bonyeza {{key:C}}.
4. Bofya makutano ya gridi A/1. Nguzo ya W12x50 inaonekana kutoka Level 1 hadi Level 2. Upau wa hali unasema ilipoenda.
5. Bofya B/1, A/2 na B/2 kuweka nyingine tatu.
6. Chagua Level 2 kwenye orodha ya viwango, kisha chagua {{ui:Boriti}} au bonyeza {{key:B}}.
7. Bofya A/1, kisha A/2. Boriti ya W16x26 inaunganisha juu ya nguzo mbili, juu ya chuma chake kwenye kiwango.
8. Bonyeza {{key:Esc}} kurudi kwenye {{ui:Chagua}}, kisha bofya boriti.
9. Chagua {{ui:Sahani za mwisho}} kwenye kundi la {{ui:Unganisha}}. Ncha zote mbili zinapata sahani ya mwisho yenye bolti, boriti inapunguzwa ili itoshe, na sahani ya kwanza ya mwisho sasa imechaguliwa.
10. Bofya boriti tena.
11. Chagua {{ui:Mchoro wa warsha}} kwenye kundi la {{ui:Matokeo}}. Onyesho la kuchungulia la mchoro wa warsha wa boriti linafunguka. Chagua {{ui:Pakua PDF}}.
12. Bonyeza {{key:Mod+S}} kuhifadhi modeli. Kivinjari kinapakua `Untitled.detailcraft.json`.

Badilisha jina la modeli kwenye sehemu ya {{ui:Jina}} juu kushoto kabla ya kuhifadhi, ili faili na kila hamisho libebe jina lake.

## Pa kwenda baadaye

- [Ziara ya skrini](topic:workspace)
- [Weka gridi na viwango](topic:grids-and-levels)
- [Sogeza kwenye mwonekano wa 3D](topic:navigate-3d), kwa kipanya, trackpad au skrini ya kugusa
- [Kutoka programu nyingine za uchoraji wa kina](topic:coming-from), ikiwa unajua kifurushi kikubwa cha uchoraji wa kina
- [Kutumia msaada huu](common:help)
