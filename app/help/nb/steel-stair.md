---
title: Ståltrapp-generator
summary: En ståltrapp fra etasjehøyden, løpet og bredden: opptrinn og inntrinn etter et regelsett du velger, repos, rekkverk og spiler, verkstedtegninger og en kappeliste med vekter.
keywords: ståltrapp, trappegenerator, vange, trinn, rutemønstret plate, gitterrist, repos, rekkverk, spiler, opptrinn, inntrinn, osha, ibc, approved document k, kappeliste, vekter, verkstedtegning
from: a4f0a985
---

Trappegeneratoren lager en hel ståltrapp fra noen få tall: vangene, trinnene, repos når løpet er for høyt, rekkverk med stolper og spiler, festehullene i vangene, en kappeliste med vekter og verkstedtegningene. Den starter fra verktøyet {{ui:Trapp}}, som den enkle trappen (se Trapper), med én bryter lagt til.

## Plasser en ståltrapp

1. Velg {{ui:Trapp}} i gruppen {{ui:Plasser}}, eller trykk {{key:S}}.
2. Hak av {{ui:Bruk generatoren for ståltrapp}} på høyre side.
3. Velg **regelsettet** for hvor trappen bygges, **opptrinnshøyden** (fra gulv til gulv; 0 = opp til neste etasje), **tilgjengelig løp** (0 = la regelen avgjøre), **fri bredde** og **trinntypen**: rutemønstret plate, gitterrist eller falset platetrinn.
4. Sett vangeprofilen, repos (etter regelen, eller et tall), rekkverkene (begge sider, én, ingen), rekkverkshøyden og spilegapet.
5. Klikk på et aksekryss: det er foten av det første opptrinnet.

Velg trappen (klikk på en vange, et trinn eller et rekkverk) for å endre en innstilling. Egenskapene viser opptrinnene, inntrinnet, stigningen, løpene og repos, stålet i den, kappelisten og regelsettets kilder.

## Regelsettene

Regelsettet begrenser trappens form: opptrinn og inntrinn, 2 × opptrinn + inntrinn, stigningen, reposet, rekkverkshøyden og største åpning. DetailCraft tilbyr dem under; regionen er en innstilling, ikke en gjetning. Åpne **Hvor tallene i dette regelsettet kommer fra** i egenskapene: hvert tall nevner sin kilde og sier hvor godt det er kontrollert.

- **International Building Code 2021**: opptrinn 4 til 7 in., trinn minst 11 in., rekkverk 34 til 38 in. Den 12 ft store grensen mellom repos vises som *ikke lest*, og rekkverkstallene som lest i veiledninger som siterer koden: bekreft dem før du stoler på dem.
- **OSHA 29 CFR 1910.25 og 1910.29** (industrielle standardtrapper): 30° til 50°, opptrinn på høyst 9.5 in., trinn minst 9.5 in., minst 22 in. bred, repos like brede som trappen og 30 in. dype, og et øvre rekkverk brukt som håndlist 36 til 38 in. Disse ble lest i selve forskriften.
- **Approved Document K 2013, England** (generelle adkomst- og bruksstiger): områdene for opptrinn og inntrinn, og 2 × opptrinn + inntrinn 550 til 700 mm, lest i rapporten fra myndighetene som tabellerer dem. Dokumentet gir DetailCraft ingen rekkverkshøyde, så høyden du setter, brukes, og problemlisten sier det.

Et regelsett som ikke står her, blir ikke gjettet: trappen følger da den enkle komfortregelen 600 til 650 mm og sier at den ikke har en regel.

## Hva den finner ut

- **Opptrinn og inntrinn.** Færrest mulig opptrinn der 2 × opptrinn + inntrinn ligger midt i regelens område, uten at inntrinnet faller under regelens minimum. Med gitt løp er inntrinnet løpet delt på trinnene, og alt utenfor regelen sies fra om.
- **Løp og repos.** Et løp høyere enn regelen tillater, deles med et repos like bredt som trappen og ikke smalere enn regelens minimum; du kan også be om repos. Et repos er en ramme av to sidebjelker og to tverrvinkeljern under et dekke, på to stolper.
- **Trinn.** Rutemønstret plate er en sveiset plate (6 mm som standard; mønsteret legges ikke til vekten). Et falset platetrinn har en oppbøy ved trinnkanten og er boltet gjennom vangelivet: to hull 2 mm større enn bolten, ved 0.3 og 0.7 av dybden. Gitterrist tegnes som en plate med samme vekt (bærestavens dybde × tykkelse ÷ avstand); tverrstavene og båndene telles ikke, og kappelisten sier det.
- **Rekkverk.** Et rør-øvre-rekkverk på stolper langs hvert løp og hvert repos, og et spilegap som ingen kule større enn regelens åpning kan gå gjennom (høyst 100 mm som standard).

## Tegninger, kappeliste, eksport

- Løpet er én sammenstilling; rekkverkene er en annen (begge sidene er samme sammenstilling, laget to ganger). Hver har sin sammenstillingstegning, og vangetegningen viser hullene sine.
- **Trappearket** (ST-…) viser hvert løps vange rett, med hullstasjonene skrevet fra nedre ende, og trinndetaljen: snitt, trinnkant, oppbøy og endeflensen med hullene sine.
- {{ui:Kappeliste og vekter}} i egenskapene lister hver profil og lengde med antall og kilogram; {{ui:Last ned kappelisten (CSV)}} lagrer den.
- Alt går til stykklisten, NC-filene og IFC som vanlige deler (IfcMember, IfcColumn, IfcPlate).

## Godt å vite

- Dette er et utgangspunkt, ikke en dimensjonering. Ingenting kontrolleres for styrke eller nedbøyning; regelsettet begrenser bare formen.
- Vangeendene mot gulvene kappes vinkelrett og detaljeres ikke; repospstolpene står til gulvet under og har ingen fotplater.
- Å plassere trappen som ett element i BimCraft er ikke koblet opp ennå.
