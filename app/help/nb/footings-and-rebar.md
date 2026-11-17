---
title: Plasser fundamenter med armering
summary: Plasser rektangulære fundamentputer med bunnarmering og startstenger, kontroller dem, og last ned bøylisten.
keywords: fundament, fundamentpute, armering, stenger, bunnarmering, startstenger, dybler, bøyeliste, stangliste, betong, kroker, overdekning
from: 41a048be
---

Dette emnet handler om rektangulære fundamentputer. Bjelker, søyler, dekker og vegger står i [Detaljer for armert betong](topic:reinforced-concrete). Hver fundamentpute får en bunnarmering i begge retninger og, hvis ønsket, startstenger som står opp av den. Stengene er amerikanske størrelser #3 til #11.

## Plasser et fundament

1. Velg {{ui:Plan}} og velg nivået for fundamentets topp.
2. Velg {{ui:Fundament}} i gruppen {{ui:Plasser}}, eller trykk {{key:F}}.
3. Sett fundamentet i panelet {{ui:Egenskaper}} (se nedenfor), eller behold standardverdiene.
4. Klikk på et rutenettskryss. Fundamentet sentreres på det, med toppen i nivået. Statuslinjen sier for eksempel «Fundament 2000 x 2000 x 600 under A/1».

Skjemaet {{ui:Legg til etter rutenett}} nederst i panelet kan også brukes.

Fundamentet tegnes gjennomsiktig, slik at stengene synes. Stengene tegnes som massive rør.

## Fundamentinnstillinger

| Felt | Standard | Merknader |
|---|---|---|
| Lengde L (mm) | 2000 | Langs x; 300 til 50000 |
| Bredde B (mm) | 2000 | Langs y; 300 til 50000 |
| Dybde H (mm) | 600 | 150 til 10000 |
| Betong | 4000 psi | Tekst, skrives ut i IFC-eksporten |

**Bunnarmering**

| Felt | Standard | Merknader |
|---|---|---|
| Lange stenger | #5 | Stenger langs L, nedre lag |
| Avstand (mm) | 250 | Største tillatte avstand; stengene fordeles jevnt på denne avstanden eller tettere |
| Korte stenger | #5 | Stenger langs B, legges oppå de lange |
| Avstand (mm) | 250 | Som over |
| Overdekning (mm) | 75 | Fri overdekning på alle flater |
| Endekroker | På | Bøyer begge ender av hver nettstang opp i en standard 90° krok (form U); av gir rette stenger (form S) |

**Startstenger**

| Felt | Standard | Merknader |
|---|---|---|
| Startstenger | På | Slå av for et fundament uten startstenger |
| Stang | #6 | |
| Stenger langs L / Stenger langs B | 2 / 2 | Et rutenett av stenger, sentrert på fundamentet |
| Avstand langs L / Avstand langs B | 250 / 250 | Mellom stangsentrene |
| Utstikk over topp | 600 | Hvor langt stengene står over fundamentets topp |
| Krok i bunnen | På | En 90° krok som peker utover og hviler på bunnarmeringen (form L) |

Under feltene viser DetailCraft krokbenet for de lange stengene, for eksempel «Krokben for #5: 254 mm ytterkant til ytterkant.»

## Endre et plassert fundament

Velg fundamentet (klikk på betongen et stykke fra en søyle, eller på en av stengene). Du får de samme feltene, pluss {{ui:Senter x}}, {{ui:Senter y}}, {{ui:Topp z}} og {{ui:Rotasjon (°)}}. Under dem viser en tabell stengene i dette fundamentet med posisjonsnummer, antall og lengder, og betongvolumet i kubikkmeter.

Hver endring kontrolleres før den lagres. En endring som ikke kan bygges, avvises, og statuslinjen sier hvorfor, for eksempel «Overdekningen gir ikke plass til stenger i dette fundamentet.», «Fundamentet er for grunt for to lag med stenger innenfor overdekningen.» eller «Startstengene passer ikke inne i fundamentet med 75 mm overdekning.»

Endringer som kan bygges, men som må sjekkes, listes under fundamentet og i fanen {{ui:Problemer}}:

- «#11-stenger med 59.6 mm gir mindre enn 35.8 mm fri avstand (ACI 318-19 25.2.1).» Den frie avstanden mellom stengene må være minst stangdiameteren og minst 25.4 mm.
- «#5-kroker trenger 254 mm dybde; bare 150 mm får plass innenfor overdekningen.» Krokbenene kortes da slik at de passer, og er derfor ikke standardkroker lenger.
- «Startkrokene går inn i overdekningen.»
- «Startstengene står tettere enn minste frie avstand.»

## Posisjonsnummer og bøyeliste

Like stenger (samme størrelse, form og mål til millimeteren) deler posisjonsnummer på tvers av alle fundamenter. Posisjonsnummer skrives `<stangnummer>F<n>`: 5F1 og 5F2 for #5-stenger, 6F1 for den første #6-stangen, og så videre. Fundamenter med samme størrelse, betong, bunnarmering og startstenger deler fundamentnummer: F1, F2 …

1. Åpne fanen {{ui:Bøyeliste}} nederst. Hver rad er ett posisjonsnummer: størrelse, form, mål A, B og C, antall, kuttlengde, total lengde, masse per meter, vekt per stang, total vekt og hva stangen brukes til.
2. Velg {{ui:Last ned CSV}} i fanen, eller {{ui:Bøying}} i menyen {{ui:Mer}} i gruppen {{ui:Utdata}}, for `<name> bending schedule.csv`.

Formene er DetailCraft sine egne koder, ikke koder fra en standard: S rett, L én bøy, U to bøyer. Målene er ytterkant til ytterkant; kuttlengden er den nøyaktige lengden langs senterlinjen gjennom bøyene. Se [Armeringsreferanse](topic:rebar-reference).

## Hva DetailCraft ikke kontrollerer

- Forankrings- og overlappingslengder, og om startstengene er lange nok for søylen over.
- Delen av regelen for fri avstand som gjelder tilslagsstørrelse (DetailCraft kjenner ikke blandingen).
- Alt om søylen eller fotplaten over: fundamenter og stål er separate.

Se også [Ikke bygget ennå](topic:not-built-yet).
