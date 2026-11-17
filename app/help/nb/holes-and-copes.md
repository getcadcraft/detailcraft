---
title: Legg til hull og utklinkninger
summary: Skriv inn hull i liv, flenser og plater, og klink ut flensene ved en bjelkeende, målt fra delens kuttede ende.
keywords: hull, bolthull, utklinkning, utklinkninger, hakk, kutt, utklinking, bore, stanse, hull i liv, hull i flens
from: 33d12398
---

Hull og utklinkninger skrives inn etter posisjon. De hører til staven og flytter seg med den.

Hull laget av forbindelser (endeplater, fotplater) legges til automatisk; de skrives ikke inn for hånd. De listes som «… hull fra forbindelser (rediger forbindelsen)».

## Hvor posisjoner måles fra

- **x** løper langs delen fra sin **kuttstart**: startenden etter at en forbindelse har kuttet den tilbake. Så x = 0 er den virkelige enden av stålet, ikke rutenettpunktet.
- **y** måles over flaten fra seksjonens senter:
  - på **livet**: opp (positiv) eller ned fra midthøyden;
  - på en **flens** eller en **plate**: over bredden, fra midtlinjen.
- Stavens start er det første punktet som ble klikket da den ble plassert. Radene {{ui:Ender (x, y, z mm)}} viser hvilken ende som er hvilken.

## Legg til et hull

1. Velg staven.
2. I boksen {{ui:Hull}} i panelet {{ui:Egenskaper}} velges {{ui:Flate}}: {{ui:Liv}}, {{ui:Overflens}} eller {{ui:Underflens}} (for en I-profil, kanal eller rektangulært rør), eller {{ui:Plateflate}} (for en plate).
3. Skriv inn {{ui:x langs (mm)}}, {{ui:y på tvers (mm)}} og {{ui:Diameter (mm)}}. Skjemaet starter med x 100, y 0, diameter 22.
4. Velg {{ui:Legg til hull}}.

Statuslinjen sier «Hull lagt til. x er fra kuttstarten; y fra seksjonens senter (liv: opp, flens/plate: på tvers).» Hullet vises i listen, og i visningen som en mørk plugg gjennom flaten.

For å fjerne et hull, velg × ved siden av det i listen.

Vinkler og runde rør tar ikke hull ennå. Boksen {{ui:Hull}} sier det.

:::note
I 3D-visningen tegnes hull som mørke plugger, ikke som kuttet gjennom stålet. De er virkelige hull i NC-filene, verkstedtegningene og IFC-eksporten.
:::

Et hull der x ligger utenfor en av endene av delen, vises i fanen {{ui:Problemer}} som «et hull er utenfor enden av delen».

## Legg til en utklinkning

Utklinkninger gjelder I-profiler: de kutter bort øvre eller nedre flens (og den dybden av livet) ved én ende, slik at bjelken går klar av en annen stav.

1. Velg en I-profilstav.
2. I boksen {{ui:Utklinkninger}} velges {{ui:Slutt}} ({{ui:Start}} eller {{ui:Slutt}}) og {{ui:Side}} ({{ui:Topp}} eller {{ui:Bunn}}).
3. Skriv inn {{ui:Lengde (mm)}} (langs bjelken fra den enden) og {{ui:Dybde (mm)}} (ned fra toppen, eller opp fra bunnen). Skjemaet starter med 100 x 40.
4. Velg {{ui:Legg til utklinkning}}.

Visningen viser utklinkningen kuttet ut av stålet. Listen leser for eksempel «Topp ved starten: 100 x 40». Fjern den med ×.

Utklinkninger er kvadratiske: det finnes ingen radius i innerhjørnet ennå.

## Hvordan hull og utklinkninger påvirker merkene

To deler får bare samme delemerke hvis hullene og utklinkningene deres stemmer overens innen 1 mm, med tillegg for at delen er snudd. Å legge til et hull i én bjelke i en gruppe gir den et nytt merke. Se [Merkeregler](topic:mark-rules).
