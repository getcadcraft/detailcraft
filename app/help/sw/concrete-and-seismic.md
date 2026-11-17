---
title: Kagua vipengele vya zege na utengeneze mizigo ya tetemeko
summary: Weka nondo za boriti na nguzo za zege, zikague kwa ACI 318-19, tengeneza nguvu sawa za upande kwa ASCE 7-22 kwenye sakafu ngumu, na uone mteremko wa ghorofa. Msaada kwa mhandisi kukagua.
keywords: zege, zege iliyoimarishwa, ACI 318, ACI 318-19, nondo, boriti, nguzo, shear, mafungo, tetemeko, tetemeko la ardhi, nguvu sawa ya upande, ELF, ASCE 7-22, mteremko, mteremko wa ghorofa, sakafu, diaphragm ngumu, uzito wa ghorofa, utilisation, utilization, miundo, mhandisi
from: 94d3001d
---

Vizuizi vya {{ui:Vipengele vya zege}} na {{ui:Mizigo ya tetemeko}} kwenye kichupo cha {{ui:Uchanganuzi}} vinakagua boriti na nguzo za zege iliyoimarishwa, na kutengeneza nguvu za kando za tetemeko la ardhi kwenye sakafu za fremu. Zote mbili hufuata uendeshaji wa kichupo cha {{ui:Uchanganuzi}} na huhifadhiwa pamoja na modeli.

:::warning
Matokeo ni **kwa ajili ya mhandisi kukagua**: msaada hadi mtu mmoja aupitie. Ukaguzi wa zege hutumia nguvu za mpangilio wa kwanza, isipokuwa kwamba nguzo kwenye fremu unayoita isiyoyumba (non-sway) inasanifiwa kwa momenti yake iliyokuzwa, bila ukuzaji wa kuyumba, bila usanifu wa torsion, bila maelezo ya tetemeko (ACI sura ya 18) na bila maelezo ya mafungo. Mizigo ya tetemeko inaacha nje kipengele cha urudufu, athari ya wima ya tetemeko, ukuzaji wa torsion na athari za P-delta. Mizigo ya upepo bado haijatengenezwa.
:::

## Chora vipengele

Chora vipengele vya zege kama mistatili: wasifu wa {{ui:Bamba}} kama `PL400x400` kwa nguzo na `PL300x600` kwa boriti hutoa sehemu. Nguzo na boriti huwekwa kama kipengele kingine chochote.

## Weka sehemu

Kizuizi cha {{ui:Vipengele vya zege}} kinaorodhesha kila sehemu ambayo vipengele vinatumia. Bonyeza {{ui:Weka kama zege…}} kwenye zile ambazo ni zege. DetailCraft inasoma upana **b** (kando ya mhimili y wa kipengele chenyewe) na kina **h** (kando ya z) kutoka wasifu uliochorwa, kisha inauliza:

- **kifuniko** hadi katikati ya nondo, na nondo za **juu**, **chini** na **pembeni** (ngapi na kipenyo gani) kwa boriti, au **kikapu cha nguzo** (nondo kando ya b na kando ya h, kipenyo gani, mafungo ya ond) kwa nguzo;
- **mafungo**: miguu, kipenyo na nafasi;
- kipengele kinafanya kazi **kama**: boriti, nguzo, au kinaamuliwa kwa nguvu zake (kipengele wima, au kinachobeba zaidi ya 0.10 f′c Ag, ni nguzo).

Weka f′c, mavuno ya nondo fy na mavuno ya mafungo fyt (MPa 420 kiwango cha juu kinahesabiwa kwa shear), K, na kama fremu inayoyumba au isiyoyumba juu yake. Sehemu iliyowekwa kama zege inachambuliwa kama zege: E = 4700 √f′c, 2400 kg/m³, na kwa chaguo-msingi kwa **sehemu zilizopasuka** (nguzo 0.70 Ig, boriti 0.35 Ig; ACI 318-19 Jedwali 6.6.3.1.1(a)). Chagua {{ui:Sehemu kamili}} ili kuzima hilo.

## Tengeneza michanganyiko na ukague

Weka aina ya kila kesi ya mzigo, kisha {{ui:Tengeneza michanganyiko}}: ACI 318-19 inachukua michanganyiko ya nguvu ya ASCE 7 (§5.3.1). Bonyeza {{ui:Kagua zege}} na kila kipengele kinapata matumizi, kinachopakwa rangi kwenye modeli kama ukaguzi wa chuma: kunyumbulika na chuma cha chini kabisa (22.2, 9.6.1.2), mkazo unaodhibitiwa na mvutano (9.3.3.1), shear pamoja na mafungo (22.5, 9.6.3), nafasi ya mafungo, na mzigo wa axial pamoja na momenti kwa nguzo (22.4, pamoja na mbinu ya Bresler kwa kupinda pande mbili). Kipengele ambacho sehemu iliyochorwa inatofautiana na b × h uliyoandika kinasomeka *kimekaguliwa kwa sehemu*, na vivyo hivyo nguzo nyembamba au torsion iliyo juu ya kizingiti: hizo hazijasanifiwa.

Vipengele vilivyozidi uwezo wake vimeorodheshwa kwenye {{ui:Matatizo}}; kubali kimoja kwa sababu, au rekebisha sehemu.

## Sakafu na mizigo ya tetemeko

Sakafu ni ngazi ambapo fremu inashikiliwa pamoja na slab ngumu (**diaphragm ngumu**). Kwenye {{ui:Mizigo ya tetemeko}} bonyeza {{ui:Tafuta ghorofa}}: inachukua viwango ambapo boriti mbili au zaidi hukutana. Kisha kila sakafu ipewe **uzito wake wa tetemeko**, ulioandikwa au kusomwa: {{ui:Chukua uzito kutoka kesi}} hujumlisha mizigo ya wima ya kesi unazopa kigezo (kesi ya kufa ni 1; ongeza 0.25 kwenye kesi ya mzigo hai wa hifadhi au theluji kwenye paa tambarare kama ASCE 7-22 12.7.2 inavyotaka). Mzigo wima wa kila nodi unaenda kwenye sakafu iliyo juu yake au sawa nayo, hivyo nguzo iliyo kati ya sakafu mbili hutoa nusu ya uzito wake kwa kila moja.

Jaza thamani za usanifu: SDS, SD1, S1, R, Ie, Cd, TL, mfumo wa muundo (kwa kipindi) na kundi la hatari. {{ui:Tengeneza kesi za tetemeko}} kisha huhesabu kipindi kutoka urefu wa jengo (12.8.2.1), nguvu ya msingi V = Cs W (12.8.1), kuisambaza juu ya sakafu (12.8.3) na kuandika kesi nne za mzigo, kwa X na Y pamoja na torsion ya ajali ya 5 % kila upande (12.8.4.2). Nguvu za ghorofa na ukaguzi wa mteremko wa ghorofa (12.8.6, Jedwali 12.12-1, mteremko Cd δxe / Ie dhidi ya 0.020 hsx) huonekana baada ya uendeshaji; mteremko unaozidi kikomo chake pia ni tatizo. Bonyeza tena {{ui:Tengeneza michanganyiko}} ili kuleta kesi za tetemeko kwenye michanganyiko.

**Kipindi kutoka kwenye uchambuzi.** Kipindi cha takriban Ta kinatokana na urefu wa jengo. Ukiwa umeendesha uchambuzi pamoja na kesi za tetemeko, {{ui:Chukua kipindi kutoka kwenye uchambuzi}} husoma umbali ambao kila sakafu ilihama chini ya nguvu, na kuhesabu kipindi kwa mbinu ya Rayleigh, T = 2π √(Σ w δ² / (g Σ f δ)), mara moja kwa X na mara moja kwa Y; kesi za tetemeko zinatengenezwa tena nacho. Kipindi kinachotumika hakizidi kamwe Cu·Ta (ASCE 7-22 12.8.2), hivyo modeli laini haiwezi kupunguza nguvu ya msingi chini ya hapo. Chukua kipindi tena baada ya uendeshaji wa pili: hutulia kwa hatua moja au mbili. Ondoa tiki ya {{ui:Kipindi kutoka kwenye uchambuzi}} ili kurudi kwenye Ta.

**Nguzo nyembamba (ACI 318-19 6.6.4.5).** Kwa fremu unayoita isiyoyumba, nguzo ambayo k·ℓu/r iko juu ya 34 + 12·M1/M2 (si zaidi ya 40) inasanifiwa kwa momenti iliyokuzwa Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)², ambapo (EI)eff = 0.4 Ec Ig / (1 + βdns), na momenti ya chini Pu (15 + 0.03 h). βdns (0.6 mwanzoni) ni sehemu ya mzigo wa axial uliokokotolewa unaodumu: andika yako mwenyewe. Nguzo ambayo Pu inafikia 0.75 Pc inashindwa kwa ukaguzi wake. Ripoti inaorodhesha namba za kila nguzo nyembamba. Kwenye fremu **inayoyumba** nguzo nyembamba bado ni "kimekaguliwa kwa sehemu": ukuzaji wake unahitaji uchambuzi wa mpangilio wa pili, ambao haujatengenezwa.

**Bamba za sakafu.** Modeli ikiwa na mabamba, kizuizi cha {{ui:Uimarishaji wa bamba}} kinachukua momenti za bamba za kila mchanganyiko wa nguvu na, kwa kanuni ya Wood–Armer (kupinda na kupinda kwa pamoja), huhesabu chuma ambacho kila safu inahitaji kwa mita: chini na juu, kwa x na kwa y. Unatoa unene, kifuniko na nondo; jedwali linaonyesha kinachohitajika dhidi ya kilichotolewa na shear ya njia moja dhidi ya φVc, na safu inayopungukiwa ni tatizo lenye kifungu chake. Mteremko wa kupinda, kupasua karibu na nguzo na nondo za kuzunguka matundu hazifunikwi, na momenti juu ya tegemeo hukaribia polepole na mabamba ya nodi nne.

Kila sakafu unayoorodhesha inakuwa diaphragm ngumu katika uchambuzi: boriti zake hazibebi nguvu ya axial kutokana na mwendo wa sakafu. Usafirishaji wa CraftScript haujatengenezwa kwa modeli yenye sakafu.

## Ripoti

{{ui:Ripoti (PDF)}} na {{ui:Ripoti (CSV)}} zinapata jedwali za zege (dhana, matumizi kwa kila kipengele, kila kifungu), vigezo vya tetemeko na nguvu ya msingi, nguvu kwenye sakafu, na jedwali la mteremko.
