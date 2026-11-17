---
title: Tuul, seismiline asukoht ja ASCE 7 kombinatsioonid
summary: Koosta tuulekoormusjuhud suletud jäigale hoonele, arvuta asukoha seismilised projekteerimisväärtused ja koosta ASCE 7 kombinatsioonid vahekaardil Analysis.
keywords: tuul, tuulekoormus, asce 7, suunatud meetod, ekspositsioon, suletus, seismiline, asukohaklass, ss, s1, sds, sd1, usgs, projekteerimisspekter, koormuskombinatsioonid, lrfd, asd, kzt, kd, puhang
from: 676fcbf3
---

Kolm plokki vahekaardil {{ui:Analysis}} koostavad raami tuule- ja seismilised sisendid ning kombineerivad need: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} ja {{ui:ASCE 7 load combinations}}. Need on abivahendid: **mitte normikontroll; sinu insener vaatab tulemused üle.**

## Mida sa teed

Koosta tuulekoormusjuhud suletud, jäigale hoonele, võta seismilised väärtused asukoha jaoks ning koosta kombinatsioonid, mis neid kasutavad. Mudelis peavad olema põrandad, seega käivita esmalt analüüs (vt [Jõud, reaktsioonid ja läbipainded](topic:frame-analysis)).

## Sammud

1. Ava vahekaart {{ui:Analysis}} ja vali {{ui:Run}}, et põrandad ja hoone suurus oleksid teada. Kui plokk ütleb, et põrandaid pole, vali selles {{ui:Find floors}}.
2. Plokis {{ui:Wind loads (ASCE 7 directional procedure)}} vali {{ui:Edition}}, sisesta oma tuulekaardilt {{ui:Basic wind speed V}} ja vali selle {{ui:Speed unit}}, seejärel {{ui:Exposure}} ja {{ui:Enclosure}}. Kzt, Kd, G, maapinna kõrgus, tuulealuse poole Cp, ekstsentrilisus ja suund on samuti seal.
3. Loe iga põranda rõhku ja iga põranda jõudu tabelist ning vali {{ui:Make wind cases}}. Juhud on +X, -X, +Y ja -Y.
4. Plokis {{ui:Seismic site and system (ASCE 7)}} vali väljaanne ja sisesta Ss ja S1 (ASCE 7-22 puhul SMS, SM1 ja S1), asukohaklass A kuni D, riskikategooria ning jõudu kandev süsteem. Või sisesta laiuskraad ja pikkuskraad ning vali {{ui:Look up from USGS (online)}}; see pöördub veebiteenuse poole alles siis, kui vajutad.
5. Loe Fa, Fv, SDS ja SD1, R, Cd ja Omega0 ning projekteerimisspektrit ning vali {{ui:Use in the Seismic block}}. Vajuta seismilises plokis {{ui:Make seismic cases}} (vt [Betoonelementide kontroll ja seismilised koormused](topic:concrete-and-seismic)).
6. Plokis {{ui:ASCE 7 load combinations}} vali {{ui:Method}} (LRFD või ASD) ja vali {{ui:Make ASCE 7 combinations}}. Käivita analüüs uuesti.

## Mida tasub teada

- Tuul: ainult suletud jäik hoone, suunatud meetod. Paindlik hoone vajab standardist puhangutegurit, mida DetailCraft ei arvuta.
- Asukohaklass E ja F vajavad asukohauuringut ja pole valmis.
- Plokkide all olev allikaloend ütleb, kust iga arv pärineb ja mis jäeti välja.
- USGS-i otsing katsetati asendajal, mitte reaalsel teenusel.
