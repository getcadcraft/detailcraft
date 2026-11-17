---
title: Hubi xubnaha birta ee code-ka naqshadda
summary: Samee isku-darka culeyska ee ASCE 7 ama EN 1990, hubi profile kasta oo birta ah oo I ah AISC 360 ama EN 1993-1-1, oo arag inta awoodda kasta xubin isticmaasho. Caawin ilaa injineer uu eegay.
keywords: naqshad, hubinta naqshadda, naqshadda birta, isticmaal, awood, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, isku-darka culeyska, LRFD, Annex-ka qaranka, buckling, gooyn, bending, isdhexgal, qaab-dhismeed, ardayda, injineer
from: 66b6d545
---

Ka dib markii aad socodsiiso falanqaynta, bloogga {{ui:Hubinta naqshadda}} ee tabka {{ui:Falanqayn}} wuxuu qiimo ka dhigaa xubin kasta oo birta ah: inta awoodda ay isticmaasho isku-darka ugu xun.

:::warning
Waa **caawin ilaa injineer uu eegay**. Wuxuu isticmaalaa xoogagga heerka koowaad oo keliya (ma jiro saameyn heerka labaad), ma eego jiifka, qaybaha dhuuban (heerka 4), shakhsiyada la alxanay, ama isku xirka, wuxuuna ka tagaa waxa uusan hubin karin oo sheegaa. Ma beddelo hubinta injineerka, natiijooyinkana ma aha shati ansax.
:::

## Dooro code

{{ui:Code-ka naqshadda}} waa la kaydiyaa moodeelka; dooro mid ka mid ah laba qoys:

- **ASCE 7 + AISC 360** (Mareykanka, LRFD): isku-darka culeyska ee ASCE 7-16 §2.3.1 iyo hubinta xubnaha ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): isku-darka EN 1990 (Eq. 6.10, ama 6.10a iyo 6.10b) iyo hubinta xubnaha EN 1993-1-1.

Kadibna dooro {{ui:Darajada birta}} (A992, A36 iyo kuwa kale; ama S235 ilaa S450, oo xadka hoose ee xooga bilaabidda ka sarreeya 40 mm).

## Samee isku-darka

Bixi nooca culeyska kasta **nooc** (joogto, nool, saqafka nool, barafka, dabaysha, dhaqdhaqaaqa dhulka) liiska kiisaska, kadibna riix {{ui:Samee isku-darka}}. DetailCraft wuxuu u qoraa isku-darrada code-ku sheegay sida isku-darro kiisaskaaga: isku-darka xoog kasta oo code-ku liistay oo nooca aad leedahay, iyo isku-darrada adeegga ee foosha. Kuwii aad adigu ku qortay way ku sii jiraan; lama hubiyo code-ka. Kiis nooc {{ui:Kale}} ah lama isku daro.

Eurocode-ka, factor-yada waa **qiyamaha la talinayo** ee EN 1990 Annex A1 (γG 1.35, γQ 1.5, qiyamaha ψ ee culeyska la soo saaray, barafka iyo dabaysha) iyo EN 1993-1-1 (γM0 = γM1 = 1.0). Annex-ka qaranka ee waddankaaga qaarkood ayaa beddela: fur {{ui:Qiyamaha Annex-ka Qaranka}}, qor kaaga, kadibna mar kale samee isku-darka. Waa la kaydiyaa moodeelka.

## Hubi xubnaha

Riix {{ui:Hubi xubnaha}}. Profile I ah oo birta ah kasta, miiska wuxuu muujinayaa **isticmaalkeeda** (culeyska ka qaybsan awoodda: 100 % waa xadka), haddii ay gudbay, qodobka hubinta ee xukuma, iyo isku-darka. Xubnaha moodeelka ayaa midab la siiyaa: buluug haddii aad yar isticmaasho, cagaar qiyaastii badh, jaalle xadka u dhow, casaan ka sarreeya, iyo shabeel haddii aan la hubin. Guji magaca xubin si aad u doorato.

Hubinta, iyo qodobka mid kasta raacayo (waxay ku jiraan warbixinta):

- xoog-jiidasho; cadaadis oo leh buckling-ka dabacsanaanta iyo kan torsional; qallafsanaan labada tiir oo leh lateral-torsional buckling; shear; iyo qallafsanaan oo leh xoog toosan;
- hoos u dhaca isku-darrada adeegga marka loo eego {{ui:Xadka hoos u dhaca}} aad dejisay (L/360 marka hore; qiimo mashruuc, ma aha qiimo code).

**Dhererka.** Dhererka la xidhay waa qayb ka mid ah qayb kasta oo la falanqeeyay (1 = aan la xidhin); xidhka waxaa loo qaatay isku-fogaan siman laga bilaabo bilowga. Factor-yada K waxay dherer ku dhufanayaan buckling-ka. Isku-xirka xubin kale ku dhacda wuxuu qaybiyaa xubinta, qaybna mid ahaan ayaa lagu hubiyaa dherkeeda, sida halkaas la xidhay.

## Waxa aan la hubin

Xubin waxay muujinaysaa **aan la hubin**, iyo sababta, halkii lambar marka qaybteeda aanay ahayn I oo ay hubintu aqoon (tuubooyin, xagaaleyaal, kanaalo), ama marka ay tahay shakhsi la alxanay oo gaar ah, ama marka qayb ka mid ah ay dhuuban tahay (AISC) ama heerka 4 (Eurocode) jiifka. Qayb dhuuban oo cadaadis ku jirta waxay ka saartaa hubinta cadaadiska, xubinta waxaa lagu akhriyaa *waa la gudbay, qayb qayb ah ayaa la hubiyay*. Sidoo kale lama dhisin: saameynta heerka labaad, torsion-ka, shear buckling oo la jaro jiifka, isku xirka, daalka, dabka iyo faahfaahinta dhulgariirka. Xubnaha kontaretiga iyo culeyska dhulgariirku waxay leeyihiin [hubinteeda](topic:concrete-and-seismic) gaar ah. Eeg [Weli lama dhisin](topic:not-built-yet).

## Warbixinta

{{ui:Warbixin (PDF)}} iyo {{ui:Warbixin (CSV)}} waxay helaan miisaska naqshadda marka aad hubisid: nooca code-ka, dejinta iyo qiimaha Annex-ka qaranka, isticmaalka xubin kasta, qodob kasta oo la isticmaalay, iyo xubin kasta: culeyska, awoodda iyo isticmaalka hubin kasta oo isku-darka xukuma.
