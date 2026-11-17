---
title: Imithwalo yomoya, indawo yokuzamazama komhlaba nezinhlanganiso ze-ASCE 7
summary: Yenza amacala emithwalo yomoya for isakhiwo esivaliwe nesiqinile, bala amanani edizayini yokuzamazama komhlaba endaweni, futhi wenze izinhlanganiso ze-ASCE 7, ethebhini yokuhlaziya.
keywords: umoya, umthwalo womoya, asce 7, inqubo equondile, ukuveza, ukuvalwa, ukuzamazama komhlaba, isigaba sendawo, ss, s1, sds, sd1, usgs, isipekthramu yedizayini, izinhlanganiso zemithwalo, lrfd, asd, kzt, kd, isiphepho
from: 676fcbf3
---

Izingxenye ezintathu ethebhini ye-{{ui:Analysis}} zenza amagalelo omoya nokuzamazama komhlaba efreyimini bese ziwahlanganisa: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} kanye ne-{{ui:ASCE 7 load combinations}}. Ziyizisekelo: **akuwona ukuhlolwa kwekhodi; unjiniyela wakho ubuyekeza imiphumela.**

## Lokho ozokwenza

Yenza amacala emithwalo yomoya for isakhiwo esivaliwe nesiqinile, thatha amanani okuzamazama komhlaba endaweni, bese wenza izinhlanganiso ezisebenzisa lawo. Imodeli idinga amaphansi, ngakho qala ukuhlaziywa kuqala (bona [Amandla, ukusabela nokukhubazeka](topic:frame-analysis)).

## Izinyathelo

1. Vula ethebhini ye-{{ui:Analysis}} bese ukhetha {{ui:Run}}, ukuze kwaziwe amaphansi kanye nobukhulu besakhiwo. Uma ibhlokhi ithi azikho amaphansi, khetha {{ui:Find floors}} kuyo.
2. Ebhokisini {{ui:Wind loads (ASCE 7 directional procedure)}}, khetha {{ui:Edition}}, uthayipha {{ui:Basic wind speed V}} evela emaphini akho omoya bese ukhetha {{ui:Speed unit}} yawo, bese {{ui:Exposure}} ne-{{ui:Enclosure}}. Kzt, Kd, G, ukuphakama komhlaba, i-Cp ye-leeward, ukuphambuka kwesenta nesiqondiso nakho kukhona.
3. Funda ingcindezi kuwo wonke amaphansi nomthwalo wemoya kuwo wonke amaphansi ethebhulini, bese ukhetha {{ui:Make wind cases}}. Amacala ayi +X, -X, +Y no -Y.
4. Ebhokisini {{ui:Seismic site and system (ASCE 7)}}, khetha uhlelo bese uthayipha Ss no S1 (SMS, SM1 no S1 ye-ASCE 7-22), isigaba sendawo A kuya ku-D, isigaba sengozi nohlelo lokumelana nemandla okuzamazama komhlaba. Noma uthayipha ububanzi bomhlaba nobude bomhlaba bese ukhetha {{ui:Look up from USGS (online)}}; isevisi ye-inthanethi ibuzwa kuphela uma uyicindezela.
5. Funda i-Fa, i-Fv, i-SDS no-SD1, i-R, i-Cd no-Omega0 nesipekthramu yedizayini, bese ukhetha {{ui:Use in the Seismic block}}. Cindezela {{ui:Make seismic cases}} ebhokisini lokuzamazama komhlaba (bona [Hlola izakhiwo zekhonkrithi nokwenza imithwalo yokuzamazama komhlaba](topic:concrete-and-seismic)).
6. Ebhokisini {{ui:ASCE 7 load combinations}}, khetha {{ui:Method}} (LRFD noma ASD) bese ukhetha {{ui:Make ASCE 7 combinations}}. Qalisa ukuhlaziywa futhi.

## Okufanele ukwazi

- Umoya: isakhiwo esivaliwe nesiqinile kuphela, inqubo equondile. Isakhiwo esiguquguqukayo sidinga isici sesiphepho esivela ezindinganisweni, esingakenzi i-DetailCraft.
- Isigaba sendawo E no-F sidinga ucwaningo lwendawo futhi asikakhiwa.
- Uhlu lwemithombo ngaphansi kwamabhokisi lutshela ukuthi inombolo ngayinye yavela kuphi nokuthi yini eyashiywa.
- Ukusesha kwe-USGS kuvivinywe kusevisi yokufaka, hhayi kusevisi ephilayo.
