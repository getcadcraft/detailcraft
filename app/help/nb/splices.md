---
title: Skjøter
summary: Skjøt sammen to deler av en bjelke- eller søyleende med boltede dekkplater på flens og steg.
keywords: skjøt, bjelkeskjøt, søyleskjøt, dekkplate, skjøteplate, flensplate, stegplate, boltet skjøt, forbindelse, søylestykke, forbind
from: 97d141c2
---

En boltet skjøt forbinder to deler av én I-profil ende mot ende: en dekkplate utenfor hver flens og en plate på hver side av steget, boltet gjennom begge delene. DetailCraft kutter delene tilbake til gapet, plasserer de fire platene, borer hullene i platene og i begge delene, legger til boltene og varsler om kantavstander, avstander og passform.

## Hvor den fungerer

- To bjelker, eller to søylestykker, av **samme I-profil**, som møtes **ende mot ende på linje**: endene høyst 50 mm fra hverandre, delene parallelle og på én linje (innen 1 mm). Begge delene kan tegnes i begge retninger.
- Nivåbaserte, skrå og vertikale deler fungerer alle.
- To deler med ulik høyde eller flensbredde avvises, det samme gjelder kanaler, vinkeljern og rør.

## Legg til skjøter

1. Tegn de to delene slik at de møtes ende mot ende. For å dele et stav som allerede er tegnet, tegn det på nytt som to deler.
2. Velg én (eller begge) og velg {{ui:Skjøt}} i menyen {{ui:Mer}} i gruppen {{ui:Forbind}}.
3. Hver fri skjøt mellom de valgte delene og en annen del med samme profil får en skjøt. Statuslinjen viser hvor mange.

Velg skjøten (klikk på en av platene) for å endre innstillingene i høyre panel. {{ui:Bruk på lignende (n)}} kopierer den til alle andre frie skjøter mellom deler med samme profil.

## Innstillinger (mm)

| Innstilling | Standard | Hva den gjør |
|---|---|---|
| Gap mellom endene | 10 | Hver del kuttes tilbake med halvparten av den |
| Boltdiameter, hull, kvalitet, lengdetillegg | 20, 22, A325, 30 | Som for endeplater |
| Tykkelse på flensplate | 12 | Platen er like bred som flensen |
| Boltrader på flensen (hver side) | 3 | Rader på tvers av flensen på hver side av skjøten |
| Boltavstand på flens | 75 | Langs stavet |
| Boltlinjeavstand på flens | 0 | Mellom de to boltlinjene; 0 = flensbredde minus 80 |
| Kantavstand på flens | 40 | Fra stavets ende til første bolt, og fra siste bolt til platens ende |
| Tykkelse på stegplate | 8 | Én på hver side av steget |
| Boltrader i steget | 3 | Oppover steget, sentrert |
| Boltkolonner i steget (hver side) | 2 | Langs stavet på hver side av skjøten |
| Boltavstand i steget, oppover steget / langs stavet | 75, 75 | |
| Kantavstand i steget | 40 | Som for flensene |
| Høyde på stegplate | 0 | 0 = det frie steget mellom buene minus 10 øverst og nederst |
| Platemateriale | A36 | Tekst |

Platelengdene følger av boltene: flensplate = gap + 2 × (2 × kantavstand + (rader − 1) × avstand); stegplatene på samme måte med sine kolonner. Med standardverdiene er flensplatene 470 lange.

## Greit å vite

- Platene hører til den **først tegnede delen** av de to (egenskapene kaller den første del): de vises på monteringstegningen og følger med, boltet, ikke sveiset. Monteringstegningen for den andre delen viser bare hullene.
- Flensboltene går gjennom flensen og dens plate; stegboltene går gjennom steget og begge stegplatene. Boltlengdene står oppført separat i egenskapene.
- Advarsler bruker de samme minimumsverdiene i EN 1993-1-8 som de andre forbindelsene (ende- og kantavstand 1.2 × hull, avstand 2.2 × hull langs og 2.4 × hull på tvers), pluss en stegplate som er dypere enn det frie steget, og flensbolter som står for nær steget for buen.
- DetailCraft dimensjonerer ikke skjøten (ingen styrkekontroll), og lager ikke fyllplater for deler med ulik tykkelse.
- Kopiering av begge delene kopierer skjøten; sletting av en av delene sletter den.
