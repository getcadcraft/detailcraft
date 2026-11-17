---
title: Hangin, seismic site at ASCE 7 combination
summary: Gumawa ng wind load case para sa isang enclosed at rigid na gusali, kuhanin ang seismic design value para sa isang site, at gumawa ng ASCE 7 combination, sa tab na Analysis.
keywords: hangin, wind, wind load, asce 7, directional procedure, exposure, enclosure, seismic, site class, ss, s1, sds, sd1, usgs, design spectrum, load combinations, lrfd, asd, kzt, kd, gust
from: 676fcbf3
---

Tatlong block sa tab na {{ui:Analysis}} ang gumagawa ng input ng hangin at lindol para sa isang frame at pinagsasama ang mga ito: {{ui:Wind load (ASCE 7 directional procedure)}}, {{ui:Seismic site at system (ASCE 7)}} at {{ui:ASCE 7 load combination}}. Gabay lamang ang mga ito: **hindi ito code check; sinusuri ng iyong engineer ang mga resulta.**

## Ang gagawin mo

Gumawa ng wind load case para sa isang enclosed at rigid na gusali, kunin ang seismic value para sa isang site, at gawin ang mga combination na gumagamit ng mga ito. Kailangan ng model ng mga floor, kaya patakbuhin muna ang analysis (tingnan ang [Mga force, reaksyon at deflection](topic:frame-analysis)).

## Mga hakbang

1. Buksan ang tab na {{ui:Analysis}} at piliin ang {{ui:Run}}, para malaman ang mga floor at ang laki ng gusali. Kung sinasabi ng isang block na walang floor, piliin ang {{ui:Hanapin ang mga palapag}} dito.
2. Sa {{ui:Wind load (ASCE 7 directional procedure)}}, piliin ang {{ui:Edition}}, i-type ang {{ui:Basic wind speed V}} mula sa iyong wind map at piliin ang {{ui:Speed unit}} nito, pagkatapos ang {{ui:Exposure}} at ang {{ui:Enclosure}}. Nandoon din ang Kzt, Kd, G, ang ground elevation, ang leeward Cp, ang eccentricity at ang direksyon.
3. Basahin ang presyon sa bawat floor at ang puwersa sa bawat floor sa table, pagkatapos piliin ang {{ui:Gumawa ng wind case}}. Ang mga case ay +X, -X, +Y at -Y.
4. Sa {{ui:Seismic site at system (ASCE 7)}}, piliin ang edition at i-type ang Ss at S1 (SMS, SM1 at S1 para sa ASCE 7-22), ang site class na A hanggang D, ang risk category at ang seismic force-resisting system. O i-type ang latitude at longitude at piliin ang {{ui:Hanapin sa USGS (online)}}; tatanong lang ang online service kapag pinindot mo ito.
5. Basahin ang Fa, Fv, SDS at SD1, R, Cd at Omega0 at ang design spectrum, pagkatapos piliin ang {{ui:Gamitin sa Seismic block}}. Pindutin ang {{ui:Gumawa ng seismic case}} sa seismic block (tingnan ang [I-check ang mga concrete member at gumawa ng seismic load](topic:concrete-and-seismic)).
6. Sa {{ui:ASCE 7 load combination}}, piliin ang {{ui:Method}} (LRFD o ASD) at piliin ang {{ui:Gumawa ng ASCE 7 combination}}. Patakbuhin muli ang analysis.

## Mga dapat malaman

- Hangin: enclosed at rigid na gusali lamang, gamit ang directional procedure. Ang flexible na gusali ay nangangailangan ng gust factor mula sa standard, na hindi ginagawa ng DetailCraft.
- Ang site class E at F ay nangangailangan ng site study at hindi pa nagagawa.
- Nasa ibaba ng mga block ang listahan ng pinagmulan na nagsasabi kung saan galing ang bawat numero at ano ang hindi isinama.
- Ang paghahanap sa USGS ay sinubukan gamit ang panggagaya, hindi ang aktwal na serbisyo.
