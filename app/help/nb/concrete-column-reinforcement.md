---
title: Armer en rektangulær betongsøyle
summary: Et utarbeidet eksempel på detaljering av en rektangulær betongsøyle i DetailCraft: plasser den, gi den langsgående jern og bøyler, les kontrollene, skjøten over den og jernmerkene, og tegn arkene for verkstedet.
keywords: betongsøyle, rektangulær søyle, søylearmering, langsgående jern, vertikale jern, bøyler, kryssbøyler, skjøt, skjøtejern, startjern, stålandel, 1 prosent, 8 prosent, bøyleavstand, ACI 318-19 25.7.2, EN 1992-1-1 9.5, verkstedtegning, jernmerker, 8C1, 3C2
from: aee2a3ca
---

Dette emnet tar en kvadratisk søyle fra ingenting til en kontrollert, tegnet og oppført detalj. De generelle reglene for bjelker, dekker og vegger står i [Detaljer armert betong](topic:reinforced-concrete); dette er søylens side av det, med tall du kan gjenskape.

:::warning
DetailCraft detaljerer jernene du gir den. Den dimensjonerer dem ikke. Jernene nedenfor er startverdier for eksempelet, ikke en anbefaling: ansvarlig ingeniør velger størrelse, antall og avstand.
:::

## Hva en søyle er her

En rektangulær søyle har en bredde (langs sin lokale x) og en dybde på tvers (langs sin lokale y), en fri overdekning til bøylene, langsgående jern på hver flate og lukkede bøyler. Å rotere den snur hele søylen; flatene forblir «bredde-flate» og «dybde-flate».

- De langsgående jernene oppgis som antallet på en bredde-flate og antallet på en dybde-flate. Hjørnejernene telles på begge, så 3 og 3 gir 8 jern; 4 og 4 gir 12.
- Bøylene er lukkede rektangler med to kroker i ett hjørne, 135° eller 90°. Den første bøylen står en fastsatt avstand over gulvet (og under den neste), endesonene har tettere avstand, og midten har en videre.
- Hva jernene gjør i toppen: føres opp og skjøtes med jernene over, bøyes inn med 90°-kroker i gulvet, eller stoppes under toppen.

## Søylen i eksemplet

En 400 × 400 mm søyle, 3600 mm mellom etasjen over og etasjen under, langsgående jern #8, bøyler #3, 40 mm fri overdekning, f'c 28 MPa, fy 420 MPa, ACI 318-19, innvendig.

1. Åpne fanen {{ui:Betong}} og sett opp rutenettlinjene og nivåene søylen står på (venstre panel).
2. I {{ui:Legg til etter rutenett}} velger du {{ui:Betongsøyle}}, velger rutenettskjæringen og de to nivåene, setter {{ui:Bredde (mm)}} og {{ui:Dybde på tvers (mm)}} til 400 og velger {{ui:Legg til}}.
3. I panelet {{ui:Egenskaper}} setter du:
   - {{ui:Fri overdekning (mm)}} 40;
   - {{ui:Lengdejern}} #8, {{ui:Jern på en bredde-flate}} 3, {{ui:Jern på en dybde-flate}} 3;
   - {{ui:Bindinger}} #3, {{ui:Krok}} 135°, {{ui:Avstand mellom (mm)}} 300, {{ui:Lengde på endesone (mm)}} 600, {{ui:Avstand i endesonene (mm)}} 150, {{ui:Første fra flaten (mm)}} 50;
   - {{ui:Jern på toppen}} {{ui:Føres opp og skjøtes med jernene over}}.

Hver endring er ett angrsteg.

### Hva du får

| Del | Resultat |
|---|---|
| Langsgående jern | 8 jern #8 (en ring på 3 × 3), hvert 4375 mm langt: 3600 mm søyle pluss en 775 mm skjøt over den |
| Skjøt | 757 mm nødvendig for en trykkskjøt (ACI 318-19 25.5.5.1, fy 420), 775 mm gitt: behovet avrundet opp til neste 25 mm |
| Bøyler | 17 bøyler #3, hver med en kuttlengde på ca. 1359 mm, med 150 mm avstand i de to 600 mm endesonene og 300 mm mellom |
| Stålandel | 2,5 % av brutto tverrsnitt (grenser 1 % til 8 %, ACI 318-19 10.6.1.1) |
| Fri avstand mellom jernene | 112 mm (krever minst 40 mm, ACI 318-19 25.2.3) |
| Bøyleavstand | 300 mm (tillatt 400 mm: det minste av 16 jerndiametre, 48 bøylediametre og den mindre siden, ACI 318-19 25.7.2.1) |
| Bøylestørrelse | #3 (tillatt ned til 9,5 mm, ACI 318-19 25.7.2.2) |

Alle disse står i elementets liste {{ui:Kontroller}}; skjøten står også i {{ui:Skjøter og forankring}}.

## Kryssbøyler

Med én omkretsbøyle holdes bare hjørnejernene. ACI 318-19 25.7.2.3 tillater at et midtjern på en flate står uten støtte hvis det er innenfor 150 mm fri avstand til et hjørnejern. Med 3 jern på en flate, som ovenfor, er det oppfylt. Med 4 eller flere jern på en flate er det ikke oppfylt, og DetailCraft sier fra med en advarsel ({{ui:Kontroller}} og Problemer): «kryssbøyler» trengs. **Kryssbøyler er ikke tegnet ennå**: legg dem til i tegningen for hånd, eller velg færre jern på flaten.

For EN 1992-1-1 kontrollerer DetailCraft jerndimensjonen (minst 8 mm), antall jern (minst 4), stålarealet (0,2 % til 4 % av tverrsnittet), fri avstand og bøyleavstand (9.5.2 og 9.5.3).

## Skjøten, fundamentet og søylen under

- Der **et fundament i modellen står under søylen**, skjøtes søylen med fundamentets startjern, og skjøten deres kontrolleres også.
- Der **en annen søyle i modellen står under den**, skjøtes den med jernene til den søylen.
- Oppgi din egen {{ui:Skjøtelengde (mm, 0 = etter behov)}} for å overstyre; en som er kortere enn nødvendig, er et problem og merkes med * i tabellen.
- Trykkskjøter brukes som standard ({{ui:Trykkskjøt}} i innstillingene); velg {{ui:Strekkskjøt}} når søylen kan være i strekk.

## Merker, liste og verkstedarket

Like jern deler ett merke: de langsgående jernene i søylen over er 8C1, bøylene 17C2 (tallet først, deretter typebokstaven C for søyle og løpenummeret). De vises i fanen {{ui:Bøyeliste}}, med kuttlengde og vekt, og i CSV-filen fra {{ui:Utdata}} › {{ui:Mer}} › {{ui:Bøying}}.

Velg {{ui:Verkstedtegning}} ved siden av søylen for et ark med søylen i fasade (hvert jern, merket, bøylesonene og skjøten målsatt) og et snitt på midten, etterfulgt av bøyearket. Lagre {{ui:Dette arket som PDF}}.

## Det dette ikke gjør

- Runde søyler og spiraler, og søyler som ikke er rektangulære: ikke bygget ennå.
- Hjørne- og kryssbøyler inne i tverrsnittet, og seismisk detaljering (ACI 318-19 kapittel 18): ikke bygget ennå.
- Skjøter på posisjoner du velger, eller forskjøvet: alle jern skjøtes i ett snitt.
- Om jernene er nok for lasten: det er ingeniørens dimensjonering.
