---
title: Vindur, jarðskjálftasvæði og ASCE 7-samsetningar
summary: Búðu til vindálagstilvik fyrir lokaða, stífa byggingu, reiknaðu jarðskjálftahönnunargildi fyrir svæði og búðu til ASCE 7-samsetningarnar, á flipanum Analysis.
keywords: vindur, vindálag, asce 7, stefnuaðferð, útsetning, lokun, jarðskjálfti, jarðskjálftaflokkur, ss, s1, sds, sd1, usgs, hönnunarsvörun, álagssamsetningar, lrfd, asd, kzt, kd, hviða
from: 676fcbf3
---

Þrír reitir á flipanum {{ui:Analysis}} búa til vind- og jarðskjálftainntök ramma og setja þau saman: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} og {{ui:ASCE 7 load combinations}}. Þetta eru hjálpartæki: **ekki staðlaathugun; verkfræðingurinn þinn yfirfer niðurstöðurnar.**

## Það sem þú gerir

Búðu til vindálagstilvik fyrir lokaða, stífa byggingu, taktu jarðskjálftagildi fyrir svæði, og búðu til samsetningarnar sem nota þau. Líkanið þarf gólf, svo keyrðu greininguna fyrst (sjá [Kraftar, viðbrögð og durðir](topic:frame-analysis)).

## Skref

1. Opnaðu flipann {{ui:Analysis}} og veldu {{ui:Run}}, svo gólfin og stærð byggingarinnar séu þekkt. Ef reitur segir að engin gólf séu til, veldu {{ui:Find floors}} í honum.
2. Í {{ui:Wind loads (ASCE 7 directional procedure)}} velurðu {{ui:Edition}}, skrifar inn {{ui:Basic wind speed V}} af vindkortinu þínu og velur {{ui:Speed unit}}, síðan {{ui:Exposure}} og {{ui:Enclosure}}. Kzt, Kd, G, landhæðin, Cp í læ, sviðsvikið og stefnan eru þar líka.
3. Lestu þrýstinginn á hverju gólfi og kraftinn á hverju gólfi í töflunni, og veldu síðan {{ui:Make wind cases}}. Tilvikin eru +X, -X, +Y og -Y.
4. Í {{ui:Seismic site and system (ASCE 7)}} velurðu útgáfuna og skrifar inn Ss og S1 (SMS, SM1 og S1 fyrir ASCE 7-22), jarðvegsflokk A til D, áhættuflokkinn og jarðskjálftaviðnámskerfið. Eða skrifar inn breiddar- og lengdargráðu og velur {{ui:Look up from USGS (online)}}; það spyr netþjónustuna aðeins þegar þú ýtir á hnappinn.
5. Lestu Fa, Fv, SDS og SD1, R, Cd og Omega0 og hönnunarsvörunina, og veldu síðan {{ui:Use in the Seismic block}}. Ýttu á {{ui:Make seismic cases}} í jarðskjálftareitnum (sjá [Athugaðu steinsteyptar einingar og búðu til jarðskjálftaálag](topic:concrete-and-seismic)).
6. Í {{ui:ASCE 7 load combinations}} velurðu {{ui:Method}} (LRFD eða ASD) og velur {{ui:Make ASCE 7 combinations}}. Keyrðu greininguna aftur.

## Gott að vita

- Vindur: aðeins lokuð, stíf bygging, stefnuaðferðin. Sveigjanleg bygging þarf hviðustuðul úr staðlinum, sem DetailCraft býr ekki til.
- Jarðskjálftaflokkar E og F þurfa jarðvegsrannsókn og eru ekki smíðaðir.
- Heimildalisti neðst í reitunum segir hvaðan hvert gildi kemur og hvað var skilið eftir.
- USGS-uppflettingin var prófuð á staðgengli, ekki á raunverulegri þjónustu.
