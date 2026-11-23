---
title: Hubi laxaamadaha meelaha xubnaha isku-xidhan
summary: Ka dib hubinta naqshadda, tijaabi laxaamadaha fillet iyo butt ee wareegga xubin kasta meelaha ay ku xidhan tahay xubin kale ama taageere, oo ka hubi AISC 360-16 Chapter J ama EN 1993-1-8, oo eeg kooxda laxaamadda ee ugu badan isticmaalka iyo isku-darka ay ku jirto. Caawiye ilaa injineer uu dib u eego.
keywords: laxaamad, hubinta laxaamadda, fillet weld, butt weld, full penetration, AISC 360, EN 1993-1-8, kooxda laxaamadda, utilisation, utilization, awood, isku-xidhka, xidhiidh, qaab-dhismeed, injineer
from: e8eebbe6
---

Block-ka {{ui:Hubinta laxaamadda}} ee tab-ka {{ui:Falanqayn}}, hoosta {{ui:Hubinta naqshadda}}, wuxuu qaadaa xoogagga frame-ka ee ugu dambeeya ee la xalliyay iyo isku-darka xoogagga aad samaysay, wuxuuna tijaabinayaa laxaamadda wareegga xubin kasta meel kasta oo isku-xidh ah: meesha xubin kale ay ku xidhan tahay, ama ay ku taagan tahay taageere.

:::warning
Waa **caawiye ilaa injineer uu dib u eego**. Waxay hubisaa laxaamad lagu rido wareegga qaybta oo dhan, oo ah hal kooxi, iyada oo laga qaadayo xoogagga dhamaadka frame-ka. Ma akhrido cabbirka ama dhererka laxaamadaha aad ku qoretay shop drawings-ka, ma hubiso boolt-yada, saxanka, bearing-ka, block shear-ka ama prying-ka. Natiijooyinkeedu ma aha ansax rasmi ah.
:::

## Orodi

1. Xalli frame-ka tab-ka {{ui:Falanqayn}} oo dooro {{ui:Code-ka naqshadda}} ee {{ui:Hubinta naqshadda}}, kadibna riix {{ui:Samee isku-darka}} (hubinta laxaamadda waxay u baahan tahay isla isku-darka xoogagga).
2. Ee {{ui:Hubinta laxaamadda}}, deji {{ui:Lugta fillet-ka (mm, 0 = darbiga, ugu badnaan 8)}}. 0 macnaheedu waa lugta waxay raacaysaa darbiga ka yar ee qaybta, ilaa 8 mm. Code-ka AISC hoostiisa, {{ui:Xoogga birta laxaamadda F_EXX (MPa)}} waa xoogga birta laxaamadda (482.6 MPa waa electrode E70). Hoosta EN 1993, darajada birta ayaa siinaysa xoogga birta laxaamadda iyo factor-ka correlation.
3. Riix {{ui:Hubi laxaamadda}}.

Mid kasta oo ka mid ah miiska waa hal kooxi laxaamad (dhamaadka isku-xidhka xubin). Tirooyinka: **isticmaalka** hubinta xukuma, xaaladdeeda (gudbay ama fashilmay), iyo hubinta iyo clause-ka xukumay, iyo isku-darka hoose. Kooxda hubinta aysan xukumi karin ayaa sheegta sababta (ma jiro darajo birta, ma jiro factor correlation oo darajadaas u jirta EN 1993-1-8 Table 4.1, ma jiro laxaamad qaybtaas) halkii lambar lagu muujin lahaa.

Beddelka lugta ama birta laxaamadda, ama wax-beddelka moodeelka, miiska ayaa tirtira: wuxuu ahaa qiyamaha hore. Mar kale riix {{ui:Hubi laxaamadda}}.

## Waxa la hubiyo

- **ASCE 7 + AISC 360:** birta laxaamadda fillet (xagasha culeyska ee laxaamadda ayaa la tiriyaa, J2.4), jabka shear-ka ee birta aasaasiga ah (J4.2), iyo butt welds-ka full-penetration (Table J2.5).
- **EN 1990 + EN 1993:** laxaamadaha fillet iyada oo la adeegsanayo habka fudud ee EN 1993-1-8 4.5.3.3, iyo butt welds laga bilaabo 4.7.1.
- Digniinta faahfaahinta ee ka hor-yimaadda lugta ugu yar iyo ugu badan iyo dhererka ugu yar, iyada oo la sheegayo qiimaha loo barbardhigay.

Kooxda laxaamadda waxaa loo tixgeliyaa qayb xariiq ah, waxaana lagu culeysiiyaa habka vector-ka dhaqan-kiisa (elastic vector method): qayb kasta oo laxaamadda ah waxay qaadaa xoogga tooska ah ee xubinta, labada shear-ka, wareegga iyo labada bending moments, oo lagu daray vector-yo.

## Waxa aan la hubin

Laxaamadaha partial-penetration, fillet-yada xagga leh, plug iyo slot welds, laxaamadaha dhexdhexaadka ah, habka instantaneous-centre, habka jihada EN, daallinta (fatigue) iyo block shear-ka birta aasaasiga ah lama dhisin. Qaar ka mid ah joogtaha standards-ka waxaa laga qoray standards-ka, weli lama barbardhigin nuqul la daabacay; warbixinta ayaa sheegta meel kasta oo tiro kasta ka timid ({{ui:Warbixin (PDF)}} waxay helaysaa miisaska laxaamadda marka aad hubisid). Eeg [Hubi xubnaha birta](topic:design-checks) iyo [Wali lama dhisin](topic:not-built-yet).
