---
title: Hubi xubnaha birta sida code-ka naqshadda
summary: Samee isku-darka culeysyada ASCE 7 ama EN 1990, hubi tiir kasta oo I-shape birta ah oo AISC 360 ama EN 1993-1-1, oo eeg inta awoodda ah ee xubin kasta isticmaasho. Caawiye ilaa injineer uu dib u eego.
keywords: naqshadda, hubinta naqshadda, naqshadda birta, utilisation, utilization, awood, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, isku-darka culeysyada, LRFD, National Annex, buckling, lateral-torsional buckling, shear, bending, interaction, qaab-dhismeed, ardayda, injineer
from: 15685c4e
---

Marka aad orodsiiso falanqaynta, block-ka {{ui:Hubinta naqshadda}} ee tab-ka {{ui:Falanqayn}} xoogagiisa wuxuu u beddelaa go'aan xubin kasta oo birta ah: inta awoodda ah ee ugu xun isku-darku isticmaalo.

:::warning
Waa **caawiye ilaa injineer uu dib u eego**. Waxay isticmaashaa xoogag heer-koowaad oo keliya (aan saamayn dalab labaad lahayn), ma hubiso wareegga, ma hubiso qaybaha slender (class 4), ma hubiso qaybaha la alxaamay ama xidhiidhka, wixii aan hubin karin waa ka sheegtaa. Ma beddelayo hubinta injineerka, natiijooyinkeeduna ma aha ansax rasmi ah.
:::

## Dooro code

{{ui:Code-ka naqshadda}} waa la kaydiyaa moodeelka; dooro mid ka mid ah labo qoys:

- **ASCE 7 + AISC 360** (US, LRFD): isku-darka culeysyada ASCE 7-16 §2.3.1 iyo hubinta xubnaha ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): isku-darka EN 1990 (Eq. 6.10, ama 6.10a iyo 6.10b) iyo hubinta xubnaha EN 1993-1-1.

Kadibna dooro {{ui:Darajada birta}} (A992, A36 iyo kuwa kale; ama S235 ilaa S450, oo xoogga wax-soo-saarka ee hoose ka weyn 40 mm).

## Samee isku-darka

Siiso load case kasta **nooc** (joogto, kala-guur, saqaf kala-guur, barafka, dabayshaha, dhulgariirka) liiska load case-ka, kadibna riix {{ui:Samee isku-darka}}. DetailCraft wuxuu u qoraa code-ka isku-darkiisa sida isku-darka load case-yadaada: xoog kasta oo code-ku liisteeyo noocyada aad leedahay, iyo isku-darka adeegga ee hoos-u-dhaca. Kuwa aad qortay adiga ayay sii joogaan, lama hubinayo code-ka. Load case oo nooc {{ui:Kale}} ah lama isku daro.

Code-ka Eurocode-ka, factors-ka waa **qiyamaha la taliyay** ee EN 1990 Annex A1 (γG 1.35, γQ 1.5, qiyamaha ψ ee culeysyada la saaray, barafka iyo dabaysha) iyo EN 1993-1-1 (γM0 = γM1 = 1.0). Annex-ka qaranka ee dalkaaga ayaa qaarkood beddela: fur {{ui:Qiyamaha Annex-ka Qaranka}}, qor kuwaaga, kadibna mar kale samee isku-darka. Waa la kaydiyaa moodeelka.

## Hubi xubnaha

Riix {{ui:Hubi xubnaha}}. Mid kasta oo I-shape birta ah, miiska wuxuu muujinayaa **isticmaalkeeda** (baahida marka loo qiyaaso awoodda: 100 % waa xadka), haddii ay gudbeyso ama ay fashilanto, hubinta xukuma, iyo isku-darka. Xubnaha moodeelka ayaa midab la siiyaa: buluug yar la isticmaalay, cagaar qiyaastii badh, dhaxaan xadka u dhow, casaan ka dhaafsan, cawl aan la hubin. Guji magaca xubin si aad u doorato.

Hubinta, iyo cutubka code-ka ee ay raacayaan (waa lagu soo sheegay warbixinta):

- xoog-jiidasho, cadaadis oo leh buckling-ka xoogga iyo wareegga, foorarsashada labada tiir oo leh lateral-torsional buckling, shear, iyo foorarsashada oo leh xoog tiir;
- hoos-u-dhaca isku-darka adeegga marka loo barbardhigo {{ui:Xadka hoos-u-dhaca}} aad dejiso (L/360 marka hore; qiimaha mashruuca, ma aha qiimaha code-ka).

**Dhererka.** Dhererka la xidhay waa qayb ka mid ah qayb kasta oo la falanqeeyay (1 = aan la xidhin); xidhitaanka waxaa loo qaadaa iyaga oo u dhexeeya siman bilowga. Factors K waxay dhererka ku dhufanayaan buckling-ka. Meel xubin kale ku degto xubin ayay kala qaybisaa, qayb kasta waa la hubiyaa dhererkeeda, sida lagu xidhay meeshaas.

## Waxa aan la hubin

Xubin wuxuu muujinayaa **aan la hubin**, sababta oo la sheegayo, halkii lambar lagu muujin lahaa marka qaabkeeda aan hubinta la garanayn (xagaxyo, kanaalyo; tuubooyin afar-geesood iyo wareeg ah waa la hubiyaa marka darbigoodu compact yahay), marka ay tahay qaab la alxaamay (welded), ama marka qayb ka mid ah ay slender (AISC) ama class 4 (Eurocode) tahay foorarsashada. Qayb slender ah oo cadaadis ku jirta ayaa ka saarta hubinta cadaadiska, xubinta waxaa lagu akhrin doonaa *passes, partly checked* (gudbay, qayb ahaan la hubiyay). Alxaamadda meelaha isku-xidhka waxay leedahay [hubintooda gaarka ah](topic:weld-checks). Sidoo kale lama dhisin: saamaynta dalabka labaad, wareegga (torsion), shear buckling oo wehelinaya foorarsasho, xidhiidhka boolt-ka, daallinta (fatigue), dabka iyo faahfaahinta dhulgariirka. Kaadhka iyo culeysyada dhulgariirku waxay leeyihiin [hubintooda gaarka ah](topic:concrete-and-seismic). Eeg [Wali lama dhisin](topic:not-built-yet).

## Warbixinta

{{ui:Warbixin (PDF)}} iyo {{ui:Warbixin (CSV)}} waxay helayaan miisaska naqshadda marka aad hubisid: noocyada code-ka, dejinta iyo qiyamaha National Annex, isticmaalka xubin kasta, dhammaan clause-yada la isticmaalay, iyo xubin kasta baahida, awoodda iyo isticmaalka hubin kasta oo isku-darkeeda xukuma.
