---
title: Wind, seismic site and ASCE 7 combinations
summary: Make wind load cases for an enclosed rigid building, work out the seismic design values for a site, and make the ASCE 7 combinations, in the Analysis tab.
section: tasks
order: 43
keywords: wind, wind load, asce 7, directional procedure, exposure, enclosure, seismic, site class, ss, s1, sds, sd1, usgs, design spectrum, load combinations, lrfd, asd, kzt, kd, gust
---

Three blocks in the {{ui:Analysis}} tab make the wind and seismic inputs of a frame and combine them: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} and {{ui:ASCE 7 load combinations}}. They are aids: **not a code check; your engineer reviews the results.**

## What you'll do

Make wind load cases for an enclosed, rigid building, take the seismic values for a site, and make the combinations that use them. The model needs floors, so run the analysis first (see [Forces, reactions and deflections](topic:frame-analysis)).

## Steps

1. Open the {{ui:Analysis}} tab and choose {{ui:Run}}, so the floors and the size of the building are known. If a block says there are no floors, choose {{ui:Find floors}} in it.
2. In {{ui:Wind loads (ASCE 7 directional procedure)}}, pick the {{ui:Edition}}, type the {{ui:Basic wind speed V}} from your wind map and choose its {{ui:Speed unit}}, then the {{ui:Exposure}} and the {{ui:Enclosure}}. Kzt, Kd, G, the ground elevation, the leeward Cp, the eccentricity and the direction are there too.
3. Read the pressure at every floor and the force on each floor in the table, then choose {{ui:Make wind cases}}. The cases are +X, -X, +Y and -Y.
4. In {{ui:Seismic site and system (ASCE 7)}}, pick the edition and type Ss and S1 (SMS, SM1 and S1 for ASCE 7-22), the site class A to D, the risk category and the seismic force-resisting system. Or type the latitude and longitude and choose {{ui:Look up from USGS (online)}}; it asks the online service only when you press it.
5. Read Fa, Fv, SDS and SD1, R, Cd and Omega0 and the design spectrum, then choose {{ui:Use in the Seismic block}}. Press {{ui:Make seismic cases}} in the seismic block (see [Check concrete members and make seismic loads](topic:concrete-and-seismic)).
6. In {{ui:ASCE 7 load combinations}}, pick the {{ui:Method}} (LRFD or ASD) and choose {{ui:Make ASCE 7 combinations}}. Run the analysis again.

## Things to know

- Wind: an enclosed rigid building only, the directional procedure. A flexible building needs a gust factor from the standard, which DetailCraft does not make.
- Site class E and F need a site study and are not built.
- A source list at the bottom of the blocks says where each number came from and what was left out.
- The USGS lookup was tested on a stand-in, not the live service.
