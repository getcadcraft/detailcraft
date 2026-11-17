---
title: Trapper
summary: Plasser en rett ståltrapp fra opptrinnshøyden, inntrinnet og bredden: to vanger og trinnplater, én sveiset sammenstilling.
keywords: trapp, trapper, trappeløp, vange, trinn, opptrinn, inntrinn, trinnkant, løp, ståltrapp, ibc 1011, blondel
from: 62fa3845
---

En rett ståltrapp: to vanger (kanaler med tærne innover, eller flatjern stående på kant) og en trinnplate for hvert trinn, sveiset mellom dem. DetailCraft finner antall opptrinn ut fra opptrinnshøyden, kontrollerer dem mot byggeforskriftens grenser, og gjør trappen til én sammenstilling i verkstedet.

## Plasser en trapp

1. Velg {{ui:Trapp}} i gruppen {{ui:Plasser}}, eller trykk {{key:S}}.
2. Sett trappen på høyre side: **stigeretningen** (0° stiger langs +x, 90° langs +y), **opptrinnshøyden** (0 = opp til neste etasje), **inntrinnet**, **fri bredde** mellom vangene, **høyeste tillatte opptrinn**, **vangen**, **tykkelsen på trinnplaten**, **trinnkanten** og materialet.
3. Klikk på et aksekryss: det er foten av det første opptrinnet, på trappens senterlinje.

Statuslinjen sier hvor mange opptrinn den laget. Velg trappen (klikk på en vange eller et trinn) for å endre noen av innstillingene, posisjonen eller fasen. Egenskapene viser også opptrinnene, trinnene, løpet, stigningen og 2 × opptrinn + inntrinn.

## Hva DetailCraft finner ut

- **Opptrinn.** Så få som holder hvert opptrinn på eller under den høyeste tillatte: en opptrinnshøyde på 3000 mm med 178 mm eller mindre gir 17 opptrinn på 176.5 mm. Det er ett trinn færre enn opptrinn (øverste etasje er siste steg).
- **Trinn.** En plate som er inntrinn + trinnkant dyp (280 + 25 = PL6x305 som standard) og så lang som den frie bredden, med toppen i hver opptrinnshøyde og den fremre kanten (trinnkanten) foran opptrinnslinjen.
- **Vanger.** I stigningen til trappen, fra der de møter nedre etasjegulv til der de møter øvre etasjegulv, like utenfor den frie bredden, med toppkanten 50 mm over linjen til trinnkantene. En U-profils tær vender inn mot trappen; et flatjern som PL12x250 står på kant.
- **Sveiser.** Hvert trinn til begge vanger. Trinnene og høyre vange sveises til venstre vange, så trappen får ett sammenstillingsmerke (ST1) og sin egen sammenstillingstegning. Vangene får delenumre st…, trinnene p….
- **Kontroller.** Advarsler når et opptrinn er utenfor 4 til 7 in. (102 til 178 mm) eller inntrinnet er under 11 in. (279 mm), grensene i IBC 2021 seksjon 1011.5.2; når 2 × opptrinn + inntrinn er utenfor 600 til 650 mm (en vanlig komfortregel); og når vangen er for grunn til å bære trinnene. En ukjent vangeprofil gjør at trappen ikke kan bygges.

## Godt å vite

- Flytt, roter, speil, kopier, lim inn, slett og faser fungerer på en trapp som på en stav. En rotasjon dreier stigeretningen; et speil sender den den speilede veien.
- Vanger eksporteres til IFC som IfcMember og trinn som IfcPlate; begge går til NC-filer og stykklisten. Kollisjonskontrollen lar trappens egne deler være (de er sveiset sammen).
- Denne enkle trappen er ett løp med trinnplater. For repos, rekkverk med spiler, falsede platetrinn eller gitterrist-trinn, et regelsett du velger, kappeliste og hulltegninger for vangene: hak av {{ui:Bruk generatoren for ståltrapp}} i verktøyet Trapp (se Ståltrapp-generator).
- Vangene kappes vinkelrett. Endekuttene mot etasjegulvene lages ikke.
- DetailCraft dimensjonerer ikke trappen: vanger og trinn kontrolleres ikke for styrke eller nedbøyning.
