---
title: Tuuli, seisminen paikka ja ASCE 7 -yhdistelmät
summary: Tee tuulikuormatapaukset suljetulle jäykälle rakennukselle, laske paikan seismiset mitoitusarvot ja tee ASCE 7 -yhdistelmät Analyysi-välilehdellä.
keywords: tuuli, tuulikuorma, asce 7, suunnattu menetelmä, maastoluokka, sulkeutuneisuus, seisminen, paikkaluokka, ss, s1, sds, sd1, usgs, suunnittelun spektri, kuormitusyhdistelmät, lrfd, asd, kzt, kd, puuska
from: 676fcbf3
---

Kolme lohkoa {{ui:Analyysi}}-välilehdellä tekevät kehän tuuli- ja seismiset lähtöarvot ja yhdistävät ne: {{ui:Tuulikuormat (ASCE 7 suunnattu menetelmä)}}, {{ui:Seisminen paikka ja järjestelmä (ASCE 7)}} ja {{ui:ASCE 7 kuormitusyhdistelmät}}. Ne ovat apuvälineitä: **eivät ole mitoitustarkistus; insinööri tarkistaa tulokset.**

## Mitä teet

Teet tuulikuormatapaukset suljetulle, jäykälle rakennukselle, otat paikan seismiset arvot ja teet yhdistelmät, jotka käyttävät niitä. Mallissa täytyy olla lattiat, joten suorita analyysi ensin (katso [Voimat, reaktiot ja taipumat](topic:frame-analysis)).

## Vaiheet

1. Avaa {{ui:Analyysi}}-välilehti ja valitse {{ui:Suorita}}, jotta lattiat ja rakennuksen koko tunnetaan. Jos lohko sanoo, ettei lattioita ole, valitse siinä {{ui:Etsi kerrokset}}.
2. Kohdassa {{ui:Tuulikuormat (ASCE 7 suunnattu menetelmä)}} valitse {{ui:Painos}}, kirjoita {{ui:Perustuulennopeus V}} tuulikartastasi ja valitse {{ui:Nopeusyksikkö}}, sitten {{ui:Maastoluokka}} ja {{ui:Sulkeutuneisuus}}. Kzt, Kd, G, maanpinnan korkeus, suojaisan puolen Cp, eksentrisyys ja suunta ovat myös siellä.
3. Lue jokaisen lattian paine ja voima kullekin lattialle taulukosta, valitse sitten {{ui:Luo tuulitapaukset}}. Tapaukset ovat +X, -X, +Y ja -Y.
4. Kohdassa {{ui:Seisminen paikka ja järjestelmä (ASCE 7)}} valitse painos ja kirjoita Ss ja S1 (SMS, SM1 ja S1 ASCE 7-22:lle), paikkaluokka A–D, riskiluokka ja seisminen voimaa kestävä järjestelmä. Tai kirjoita leveys- ja pituusaste ja valitse {{ui:Hae USGS:stä (verkossa)}}; se kysyy verkkopalvelulta vasta, kun painat sitä.
5. Lue Fa, Fv, SDS ja SD1, R, Cd ja Omega0 sekä suunnittelun spektri, valitse sitten {{ui:Käytä seismisessä lohkossa}}. Paina seismisessä lohkossa {{ui:Tee seismiset tapaukset}} (katso [Tarkista betonirakenteet ja tee seismiset kuormat](topic:concrete-and-seismic)).
6. Kohdassa {{ui:ASCE 7 kuormitusyhdistelmät}} valitse {{ui:Menetelmä}} (LRFD tai ASD) ja valitse {{ui:Tee ASCE 7 -yhdistelmät}}. Suorita analyysi uudelleen.

## Hyvä tietää

- Tuuli: vain suljetulle jäykälle rakennukselle, suunnattu menetelmä. Joustava rakennus tarvitsee standardista puuskakertoimen, jota DetailCraft ei tee.
- Paikkaluokat E ja F vaativat paikkatutkimuksen eikä niitä ole toteutettu.
- Lohkojen alareunassa oleva lähdeluettelo kertoo, mistä kukin luku on peräisin ja mitä jätettiin pois.
- USGS-haku testattiin korvaavalla palvelulla, ei oikealla palvelulla.
