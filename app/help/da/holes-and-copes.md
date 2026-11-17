---
title: Tilføj huller og udskæringer
summary: Skriv huller ind i krop, flanger og plader, og udskær flangerne ved en bjælkeende, målt fra emnets skærende ende.
keywords: hul, huller, boltehul, udskæring, udsparing, skæring, cope, bore, stans, hul i krop, hul i flange
from: 33d12398
---

Huller og udskæringer skrives ind efter position. De hører til elementet og flytter sig med det.

Huller, der er lavet af forbindelser (endeplader, fodplader), tilføjes for dig; du skriver dem ikke selv. De står som »… huller fra forbindelser (rediger forbindelsen)«.

## Hvor positioner måles fra

- **x** løber langs emnet fra dets **skærestart**: starten efter at en forbindelse har skåret det tilbage. Så x = 0 er stålets rigtige ende, ikke gitterpunktet.
- **y** måles hen over fladen fra profilets centrum:
   - på **krop**: op (positiv) eller ned fra midthøjden;
   - på en **flange** eller en **plade**: på tværs af bredden fra centerlinjen.
- Elementets start er det første punkt, du klikkede på, da du placerede det. Rækkerne {{ui:Ender (x, y, z mm)}} viser, hvilken ende der er hvilken.

## Tilføj et hul

1. Vælg elementet.
2. I boksen {{ui:Huller}} i panelet {{ui:Egenskaber}} vælger du {{ui:Flade}}: {{ui:Krop}}, {{ui:Overflange}} eller {{ui:Underflange}} (for en I-profil, U-profil eller rektangulært rør) eller {{ui:Pladeflade}} (for en plade).
3. Skriv {{ui:x langs (mm)}}, {{ui:y på tværs (mm)}} og {{ui:Diameter (mm)}}. Formularen starter med x 100, y 0, diameter 22.
4. Vælg {{ui:Tilføj hul}}.

Statuslinjen siger »Hul tilføjet. x er fra skærestarten; y fra profilets centrum (krop: op, flange/plade: på tværs).« Hullet vises på listen og i visningen som en mørk prop gennem fladen.

Vil du fjerne et hul, vælges × ved siden af det på listen.

Vinkelprofiler og runde rør kan endnu ikke få huller: deres boks {{ui:Huller}} siger det.

:::note
I 3D-visningen tegnes huller som mørke proppe, ikke som skåret gennem stålet. De er rigtige huller i NC-filerne, værkstedstegningerne og IFC-eksporten.
:::

Et hul, hvis x ligger ud over en af enderne af emnet, vises i fanen {{ui:Problemer}} som »et hul er uden for enden af emnet«.

## Tilføj en udskæring

Udskæringer er til I-profiler: de skærer den øverste eller nederste flange (og den dybde af krop) væk i den ene ende, så bjælken går fri af et andet element.

1. Vælg et I-profilelement.
2. I boksen {{ui:Udskæringer}} vælger du {{ui:End}} ({{ui:Start}} eller {{ui:Slut}}) og {{ui:Side}} ({{ui:Top}} eller {{ui:Bund}}).
3. Skriv {{ui:Længde (mm)}} (langs bjælken fra den ende) og {{ui:Dybde (mm)}} (ned fra toppen, eller op fra bunden). Formularen starter med 100 x 40.
4. Vælg {{ui:Tilføj udskæring}}.

Visningen viser udskæringen skåret ud af stålet. Listen læser f.eks. »Top ved starten: 100 x 40«. Fjern den med dens ×.

Udskæringer er firkantede: der er endnu ingen radius i det indvendige hjørne.

## Hvordan huller og udskæringer påvirker mærker

To dele får kun det samme positionsnummer, hvis deres huller og udskæringer stemmer overens inden for 1 mm, idet der tages højde for, at delen er vendt. Tilføjes et hul til én bjælke i en gruppe, får den et nyt positionsnummer. Se [Regler for positionsnummer](topic:mark-rules).
