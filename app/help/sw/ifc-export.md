---
title: Hamisha IFC kwa uratibu
summary: Andika faili la IFC4 la modeli nzima, chuma, bolti, misingi na nondo, kushiriki na wasanifu, wahandisi na programu nyingine.
keywords: ifc, ifc4, ifc2x3, bim, hamisha, ingiza, ingiza ifc, matundu, bolti, bolti zilizolegea, nafasi wazi, viunganishi, uratibu, ubadilishanaji wa modeli, step, openbim, mgongano, kitazamaji
from: cfcb0cd6
---

Hamisha IFC huandika modeli nzima kama faili moja la IFC4 ambalo programu za BIM na vitazamaji vya IFC vinaweza kulifungua.

## Hamisha

1. Chagua {{ui:IFC}} katika kikundi cha {{ui:Matokeo}}.
2. Kivinjari kinapakua `<name>.ifc`. Upau wa hali unasema kilichoingia, kwa mfano "IFC4 imehamishwa: sehemu 25, viunganishi 88, misingi 7, nondo 132."

Ikiwa modeli haina sehemu, misingi wala nondo, upau wa hali unasema "Bado hakuna cha kuhamisha."

## Kilichomo kwenye faili

| Katika DetailCraft | Katika faili la IFC |
|---|---|
| Kila kiwango | Ghorofa ya jengo (IfcBuildingStorey), chini ya mradi mmoja, eneo na jengo moja |
| Gridi | IfcGrid yenye shoka zake na lebo zake |
| Nguzo, boriti, brace | IfcColumn, IfcBeam, IfcMember (brace), kila moja ikiwa ni utoaji wa umbo la wasifu wa kawaida wenye vipimo vyake halisi |
| Mabamba, mabamba ya mwisho, sahani za msingi | IfcPlate |
| Matundu na vipunguzo | Nafasi wazi (IfcOpeningElement) zilizokatwa kutoka kwenye sehemu |
| Kipengele na mabamba yake yaliyochomelewa | Mkusanyiko (IfcElementAssembly) wenye lebo ya alama ya mkusanyiko |
| Bolti na fimbo za nanga | IfcMechanicalFastener yenye kipenyo na urefu |
| Misingi | IfcFooting (msingi wa pedi), na maandishi ya zege kama nyenzo yake |
| Kila nondo | IfcReinforcingBar yenye alama ya nondo, kipenyo, eneo na urefu, ikipitia katikati yake halisi na mikunjo halisi kwenye pinda |

Lebo ya kila sehemu ni alama yake ya sehemu. Kila kipengele pia kina seti ya sifa "DetailCraft" yenye alama zake, wasifu na uzito. Kila kipengele kinakaa kwenye ghorofa ya juu zaidi iliyo sawa au chini ya sehemu yake ya chini kabisa. Nyenzo zinapangwa kwa daraja.

## Vitambulisho thabiti kwa uhamishaji upya

Kitambulisho cha IFC (GlobalId) cha kila kipengele kinakokotolewa kutoka jina la modeli na kitambulisho cha kipengele chenyewe ndani ya modeli. Hamisha modeli ile ile mara mbili na vitambulisho vinalingana, hivyo programu zinazolinganisha matoleo zinaweza kujua kilichobadilika.

:::warning
Kubadilisha jina la modeli kunabadilisha kila kitambulisho. Weka jina la modeli lile lile kati ya matoleo ya mradi.
:::

## Ikague

Faili za IFC za DetailCraft husomwa tena na kisomaji huru cha IFC katika seti yake ya majaribio. Programu hutofautiana katika jinsi zinavyosoma IFC, kwa hiyo fungua faili kwenye programu ambayo timu yako inatumia kabla ya kulitegemea. Programu ya BimCraft ya CadCraft pia hufungua faili za IFC.

## Bado

- Kuleta miunganisho, misingi na nondo kutoka faili la IFC. {{ui:Ingiza IFC}} huleta boriti, nguzo, vipengele, mabamba, gridi, viwango, matundu, vipunguzo na bolti, na kuorodhesha kile ilichoviacha.
- Data ya kichambuzi au ya uchambuzi wa muundo.
- Chochote isipokuwa mwonekano wa marejeo wa IFC4.

## Ingiza

{{ui:Ingiza IFC}} katika kikundi cha {{ui:Faili}} (au kuangusha faili la `.ifc` kwenye mwonekano) hutengeneza modeli mpya kutoka faili la IFC2X3 au IFC4:

- **Boriti, nguzo, vipengele (brace) na mabamba** ambavyo mwili wake ni wasifu mmoja uliotolewa ambao DetailCraft inaujua, unaolingana na katalogi au kuhifadhiwa kama wasifu maalum; **gridi** na **viwango** kutoka gridi na ghorofa za faili.
- **Matundu:** kila nafasi wazi ya duara (IfcOpeningElement inayotoboa sehemu iliyoingia) iliyo pembe-kulia kwenye mojawapo ya nyuso za sehemu: ubavu au flange za umbo la I au chaneli, kuta za bomba, bamba, au miguu ya pembe. Tundu linalopita kwenye kuta zote mbili za bomba huingia mara moja.
- **Vipunguzo:** nafasi wazi ya mstatili inayochukua upana wote wa umbo la I au chaneli kutoka ncha moja, ikishuka kutoka juu au kupanda kutoka chini.
- **Bolti:** kila IfcMechanicalFastener au IfcFastener, pamoja na kipenyo chake, urefu, daraja na aina yake (bolti au fimbo ya nanga), kama **bolti iliyolegea**. Bolti zilizolegea huonekana kwenye mwonekano, orodha ya vifaa na uhamishaji wa IFC, na hubaki zilipo unapohamisha vipengele. Kidirisha cha {{ui:Sifa}}, pasipo kitu chochote kuchaguliwa, huzihesabu na kina {{ui:Ondoa bolti huru}} kwa wakati unapoongeza miunganisho badala yake.

Ripoti inaorodhesha kila kitu kingine kwa darasa pamoja na sababu ya kuachwa: kuta na slabu, misingi na nondo, matundu yaliyopasuliwa, matundu kwenye mabomba duara, miunganisho (faili la IFC hubeba mabamba na bolti zake, si kanuni iliyoyatengeneza).
