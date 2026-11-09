---
title: Kuanza na DetailCraft
summary: DetailCraft inafanya nini leo, jinsi ya kuifungua, na modeli ya kwanza kutoka gridi hadi mchoro wa warsha ndani ya dakika kumi.
keywords: anza, modeli ya kwanza, utangulizi, uundaji wa chuma, nondo, mwongozo wa haraka, somo, muhtasari
from: e4f16bbe
---

DetailCraft ni programu ya uundaji wa chuma na nondo katika familia ya CadCraft. Unajenga modeli ya 3D ya fremu ya chuma kwenye gridi na viwango, unaiunganisha, na unapata kile warsha inachohitaji: alama za sehemu na mikusanyiko, orodha ya vifaa, michoro ya warsha ya sehemu moja, faili za NC za DSTV, modeli ya IFC, na ratiba ya kupinda kwa misingi.

Hii ni toleo la awali. Inafanya orodha fupi ya mambo kwa makini badala ya kila kitu kwa wakati mmoja. Soma [Bado haijajengwa](topic:not-built-yet) kabla ya kupanga kazi halisi kulizunguka.

## Inachofanya leo

- Gridi na viwango unavyoandika, kwa milimita.
- Nguzo, mihimili, mishikio na bamba kutoka katalogi za wasifu zilizochapishwa (AISC W, S, C, L, HSS na Pipe; IPE, HEA, HEB na UPN za Ulaya; UB, UC, PFC, EA, UEA, SHS, RHS na CHS za Uingereza), pamoja na wasifu wako wa kiparamentri.
- Miunganisho miwili: sahani ya mwisho iliyofungwa kwa bolti kutoka boriti hadi flensi ya nguzo, na sahani ya msingi ya nguzo yenye vijiti vinne vya nanga. Kila moja inaweza kunakiliwa kwa kila kiungio kinachofanana.
- Matundu na mikato iliyoandikwa kwa nafasi yake.
- Misingi ya pedi ya mstatili yenye mkeka wa chini na nondo za kuanzia.
- Alama za sehemu na mikusanyiko zinazojisasisha baada ya kila mabadiliko.
- Uhamishaji nje: IFC4, faili za NC za DSTV (maumbo ya I na bamba), orodha ya vifaa kama CSV, ratiba ya kupinda kama CSV, na PDF ya mchoro wa warsha wa sehemu moja.

## Fungua DetailCraft

1. Fungua DetailCraft kwenye kivinjari cha kompyuta ya mezani: Chrome, Edge, Firefox au Safari. Angalia [Vivinjari na kompyuta](common:browsers).
2. Subiri skrini ijae. Upau wa hali chini unasema "Tayari. Fungua Sampuli, au weka gridi na viwango kisha uanze kuweka vipengele."

Mwonekano wa modeli unahitaji michoro ya 3D (WebGL). Ikiwa katikati ya skrini inasema "Kivinjari hiki hakikuweza kuanzisha michoro ya 3D (WebGL)", angalia [Utatuzi wa matatizo](topic:troubleshooting#the-3d-view-is-missing).

:::note
Modeli zako zinakaa kwenye kompyuta yako. Kufungua modeli kunasoma kwenye kivinjari, na kuhifadhi kunapakua faili. Hakuna kinachopakiwa. Kuhifadhi kwenye wingu bado hakupatikani. Angalia [Faili zako zinaenda wapi](common:your-files). Ili kutumia DetailCraft bila muunganisho baadaye, chagua {{ui:Save for offline}} kwenye upau wa programu mara moja ukiwa mtandaoni; angalia [Kufanya kazi nje ya mtandao](common:offline).
:::

:::offline
Uko nje ya mtandao. DetailCraft inafanya kazi bila muunganisho pekee ikiwa ilihifadhiwa kwa matumizi ya nje ya mtandao kwanza: kitufe cha {{ui:Save for offline}} kwenye upau wa programu kisha kinasoma {{ui:Offline ready}}. Angalia [Kufanya kazi nje ya mtandao](common:offline).
:::

## Kwanza tazama sampuli

Njia ya haraka zaidi ya kuona DetailCraft inachotengeneza ni fremu ya sampuli.

1. Chagua {{ui:Sample}} kwenye kundi la {{ui:File}} la upau wa zana.
2. Mwonekano unaonyesha fremu ya nafasi mbili: nguzo sita zenye sahani za msingi, mihimili minne yenye sahani za mwisho, mshikio mmoja, na misingi saba yenye nondo.
3. Bofya boriti. Paneli ya {{ui:Properties}} upande wa kulia inaonyesha alama yake ya sehemu, urefu wa kukata, uzito na matundu ambayo sahani za mwisho zimetengeneza.
4. Fungua kichupo cha {{ui:Bill of materials}} chini ili kuona kila alama ya sehemu pamoja na idadi yake na uzito.

Mwongozo [Chunguza fremu ya sampuli](topic:sample-model) unapitia kipande kwa kipande.

## Modeli yako ya kwanza

Modeli mpya tayari ina gridi 1 hadi 3 kwa A hadi B kwa 6000 mm, na viwango viwili: Kiwango 1 kwenye 0 na Kiwango 2 kwenye 4000.

1. Chagua {{ui:New}}. Ikiwa modeli ya sasa ina mabadiliko, DetailCraft inauliza kama uzihifadhi kwanza.
2. Chagua {{ui:Plan}} juu ya mwonekano. Orodha ya viwango kando yake inachagua Kiwango 1.
3. Chagua {{ui:Column}} kwenye upau wa zana, au bonyeza {{key:C}}.
4. Bofya makutano ya gridi A/1. Nguzo ya W12x50 inaonekana kutoka Kiwango 1 hadi Kiwango 2. Upau wa hali unasema ilipoenda.
5. Bofya B/1, A/2 na B/2 kuweka tatu zaidi.
6. Chagua Kiwango 2 kwenye orodha ya viwango, kisha chagua {{ui:Beam}} au bonyeza {{key:B}}.
7. Bofya A/1, kisha A/2. Boriti ya W16x26 inaunganisha juu za nguzo mbili, juu ya chuma ikiwa kwenye kiwango.
8. Bonyeza {{key:Esc}} kurudi kwenye {{ui:Select}}, kisha bofya boriti.
9. Chagua {{ui:End plates}} kwenye kundi la {{ui:Connect}}. Ncha zote mbili zinapata sahani ya mwisho iliyofungwa kwa bolti, boriti inakatwa ili itoshee, na sahani ya kwanza ya mwisho sasa imechaguliwa.
10. Bofya boriti tena.
11. Chagua {{ui:Shop drawing}} kwenye kundi la {{ui:Output}}. Hakiki ya mchoro wa warsha wa boriti inafunguka. Chagua {{ui:Download PDF}}.
12. Bonyeza {{key:Mod+S}} kuhifadhi modeli. Kivinjari kinapakua `Untitled.detailcraft.json`.

Badilisha jina la modeli kwenye sehemu ya {{ui:Name}} juu kushoto kabla ya kuhifadhi, ili faili na kila uhamishaji nje ubebe jina lake.

## Pa kwenda baadaye

- [Ziara ya skrini](topic:workspace)
- [Weka gridi na viwango](topic:grids-and-levels)
- [Zunguka kwenye mwonekano wa 3D](topic:navigate-3d), kwa kipanya, trackpad au skrini ya kugusa
- [Kutoka programu nyingine za uundaji](topic:coming-from), ukijua kifurushi kikubwa cha uundaji
- [Kutumia msaada huu](common:help)
