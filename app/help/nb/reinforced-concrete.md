---
title: Detaljer for armerte betongbjelker, søyler, dekker og vegger
summary: Legg til betongbjelker, søyler, dekker og vegger etter rutenett, gi dem staver, bøyler og bånd, kontroller skjøter og forankring mot ACI 318-19 eller EN 1992-1-1, og lag verkstedtegninger og bøyelister.
keywords: armert betong, armering, armeringsdetaljer, bjelke, søyle, dekke, vegg, bøyler, bånd, kroker, skjøter, skjøtelengde, forankring, utviklingslengde, ld, ldh, lbd, overdekning, avstand, åpningsarmering, matter, posisjonsnummer, bøyeliste, bøyelister, bbs, verkstedtegning, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, IFC-import
from: 3835b7ec
---

Fanen {{ui:Betong}} under visningen detaljerer stavene i betongbjelker, søyler, dekker og vegger. Man oppgir dimensjonene og stavene; DetailCraft plasserer hver stav, nummererer den, kontrollerer skjøtene, forankringen, overdekningen og avstanden mot paragrafen de kommer fra, og tegner den.

:::warning
DetailCraft detaljerer stavene som er gitt. Den dimensjonerer dem ikke. Alle resultater skal kontrolleres av en ingeniør.
:::

## Åpne betongfanen

Velg fanen {{ui:Betong}} under visningen. I båndoppsettet ligger {{ui:Betong}} i fanen {{ui:Modellering}} ved siden av {{ui:Fundament}}. Med kommandolinjen i tegnestilen skriver du {{cmd:CONCRETE}}.

## Legg til et element etter rutenett

Betongelementer plasseres på modellens rutenettlinjer og nivåer, så sett dem opp først (venstre panel).

1. I {{ui:Legg til etter rutenett}} velges {{ui:Element}}: {{ui:Betongbjelke}}, {{ui:Betongsøyle}}, {{ui:Dekke}} eller {{ui:Vegg}}.
2. Velg rutenettlinjene og nivåene:
   - en bjelke går fra ett rutenettskryss til et annet, med toppen på nivået;
   - en søyle står i et skjæringspunkt, fra ett nivå til et annet;
   - et dekke fyller rektangelet mellom to nummererte og to bokstavede rutenettlinjer, med toppen på nivået;
   - en vegg går langs senterlinjen fra ett skjæringspunkt til et annet, fra ett nivå til et annet.
3. Angi størrelsen og velg {{ui:Legg til}}. Elementet blir valgt, og feltene åpnes i {{ui:Egenskaper}}-panelet.

Hvert element starter med staver som er utgangsverdier, ikke dimensjonering: endre dem til ingeniørens verdier.

## Endre stavene

Velg elementet (i visningen, eller navnet i fanen {{ui:Betong}}). {{ui:Egenskaper}}-panelet viser:

| Element | Det som angis |
|---|---|
| Bjelke | Bredde, høyde, fri overdekning; øvre og nedre staver (dimensjon, antall, rett eller 90°-krok i endene); sidestaver; bøyler (dimensjon, 135°- eller 90°-kroker, avstanden fra opplagerflaten til den første, lengden og avstanden i sonen ved enden, avstanden imellom); opplagerlengder; skjøtelengder |
| Søyle | Bredde, dybde på tvers, rotasjon, overdekning; lengdestaver på hver flate; bånd som bøyler; hva stavene gjør øverst (skjøt med søylen over, krok inn i gulvet, eller stopp) |
| Dekke | Tykkelse, størrelse, øvre, overdekninger; nedre matte og øvre matte i hver retning (dimensjon og avstand); U-staver rundt kantene; åpningsarmering; åpninger |
| Vegg | Tykkelse, overdekning, ett eller to lag, horisontale og vertikale staver, U-staver i endene, vertikale staver skjøtet over eller ikke, åpningsarmering, åpninger |

Hver endring er ett angrestrinn. En endring som ikke kan bygges, avvises, og statuslinjen sier hvorfor, for eksempel «Åpningen får ikke plass inne i elementet med overdekningen.»

Bøyler og bånd er lukket, med begge krokene i samme hjørne. Stavene i en bjelke går inn i en betongsøyle i endene, til søylens fjerne flate minus overdekning; der det ikke finnes søyle, angis {{ui:Opplagslengde i start (mm)}} og i enden.

## Skjøter og forankring

Staver lengre enn {{ui:Lengde på lagerjern (mm)}} (12000 til å begynne med) kuttes i biter av lik lengde og skjøtes. Tabellen {{ui:Skjøter og forankring}} lister hver skjøt og hver forankring: hva som trengs, med paragrafen og dens vilkår, og hva detaljen har.

- En skjøtelengde på 0 betyr «etter behov»: lengden normen gir, avrundet opp til 25 mm.
- Skriv inn en egen skjøtelengde for å bruke den i stedet. Hvis den er kortere enn nødvendig, er det et problem (se under), og den merkes med * i tabellen.
- Forankring måles fra opplagerflaten til stavens ende inne i opplageret. En bjelke uten kjent opplager sier fra om det i stedet for å kontrollere det.
- En søyle som står på et fundament skjøtes med fundamentets startstaver, og en søyle på en annen søyle med den søylens staver: skjøten kontrolleres også.

**ACI 318-19** (SI): rette staver i strekk 25.4.2.3 (tabellen, med ψt, ψe, ψg, λ), standardkroker 25.4.3.1 (ψr 1.6 og ψo 1.25 brukes med mindre annet er kjent), staver i trykk 25.4.9.2, strekkskjøter 25.5.2.1 (klasse B, eller klasse A i innstillingene), trykkskjøter 25.5.5.1.

**EN 1992-1-1**: forankring 8.4.4 med fbd fra 8.4.2 (god eller dårlig heft), skjøter 8.7.3 med α6 for hver stav skjøtet i ett snitt. γc, γs og αct starter på de anbefalte verdiene; sett verdiene i det nasjonale tillegget.

## Kontrollene

Hver kontroll som ikke består, står i panelet {{ui:Problemer}} i skallet (kilde {{ui:Armeringskontroller}}), og i elementets liste {{ui:Kontroller}}:

| Kontroll | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Overdekning | Tabell 20.5.1.3.1, etter eksponering | Minimum for heft, tabell 4.2 (durabilitetsoverdekning angis av deg) |
| Fri avstand mellom staver | 25.2.1 (bjelker, dekker, vegger), 25.2.3 (søyler) | 8.2 (2) |
| Avstand mellom bøyler | 9.7.6.2.2 | 9.2.2 (6) |
| Minimum stål i bjelke | 9.6.1.2 | 9.2.1.1 (1) |
| Sidestaver i bjelke over 900 mm dyp | 9.7.2.3 | ikke kontrollert |
| Stålandel i søyle, antall staver | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Bånd: avstand, dimensjon, tverrbånd | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Dekke: avstand, minimum stål | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Vegg: avstand, minimum stål, to lag | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Skjøter, forankring | som over | som over |

Tilslagsstørrelsen er ikke kjent, så den frie avstanden kontrolleres uten den.

## Åpninger, åpningsarmering og kantstaver

Velg {{ui:Legg til en åpning}} under et valgt dekke eller en valgt vegg, og angi hvor den er og hvor stor den er. Staver den krysser, stopper med overdekning fra kanten av åpningen. Åpningsarmering legges til på hver side, i samme lag, og tar halvparten av arealet til de kuttede stavene, med én forankringslengde forbi åpningen. Dette er DetailCraft sin startregel, ikke en paragraf i en norm: endre {{ui:Åpningsarmering}} til ingeniørens verdier. Hjørnestaver legges ikke til.

U-staver rundt et dekkes frie kanter og i endene av en vegg har lange ben, hver på én skjøtelengde.

## Posisjonsnummer og bøyelisten

Identiske staver deler ett posisjonsnummer: fundamenter beholder F-nummer (5F1), bjelker får B, søyler C, dekker S og vegger W (7B1, 8C1, 4S2). Fanen {{ui:Bøyeliste}} og CSV-filen lister nå hver stav i konstruksjonen, fundamenter først. {{ui:Utdata}} › {{ui:Mer}} › {{ui:Bøying}} laster den ned.

## Verkstedtegninger

Velg {{ui:Utdata}} › {{ui:Mer}} › {{ui:Armeringstegninger}}, {{ui:Armeringstegninger}} i fanen {{ui:Betong}}, eller {{ui:Verkstedtegning}} ved siden av ett element. Hvert element får et ark med en fasade (en plan for et dekke) som viser hver stav og dens posisjonsnummer, bøyle- og båndsonene og skjøtene med mål, og et snitt midt i. Deretter lister bøyearkene hvert posisjonsnummer med en skisse av formen, dimensjonene, antallet, kappelengden og vekten.

Arkene lages av modellen hver gang, og på nytt etter hver endring mens vinduet er åpent: tittelfeltet bærer modellreferansen. Lagre {{ui:Dette arket som PDF}} eller {{ui:Alle ark som PDF}}.

## Staver fra en IFC-fil

{{ui:Fil}} › {{ui:Importer IFC}} leser nå IfcReinforcingBar: den feide skiven langs senterlinjen kommer tilbake som rette ben og bøyer, med diameter, posisjonsnummer og elementet som holder den. Stavene beholdes slik de ble lest (de gjøres ikke om til en bjelkes eller et dekkes regler), vises i visningen, listes i bøyelisten og skrives ut igjen med IFC-eksporten. Importrapporten sier hvor mange staver som ble lest, av hvilke dimensjoner, i hvor mange elementer, og hva som ble utelatt og hvorfor.

En bjelke, søyle, dekke eller vegg i den filen som har staver, eller hvis materiale er betong, tas ikke for stål; rapporten sier det. DetailCraft sin egen IFC-eksport tar med hvert betongelements definisjon, så det kommer tilbake som seg selv, og stavene lages på nytt fra den.

:::note
Å lese et konstruksjonsprogram sine egne filer (ikke IFC) er ikke bygget ennå: eksporter IFC fra det.
:::

## IFC-eksporten

Betongbjelker, søyler, dekker (med åpninger) og vegger eksporteres som IfcBeam, IfcColumn, IfcSlab og IfcWall, hver med sine staver som IfcReinforcingBar (hovedstaver, bøyler og bånd som ligaturer, kantstaver) aggregert til seg. Hver stav er en feid skive langs senterlinjen, med ekte buer i bøyene, og med sitt posisjonsnummer og sin kappelengde.
