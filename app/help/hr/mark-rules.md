---
title: Pravila oznaka
summary: Točno kada dva dijela ili dva sklopa dijele oznaku, kako se oznake numeriraju i kako funkcioniraju oznake temelja i šipki.
keywords: oznake, numeriranje, oznaka pozicije, oznaka sklopa, oznaka komada, prefiks, tolerancija, identični dijelovi, oznake šipki, oznake temelja
from: ce02c98e
---

DetailCraft ponovno izračunava svaku oznaku nakon svake promjene. Ništa se ne pohranjuje, pa oznake uvijek opisuju model kakav jest sada. Pogledajte [Provjera oznaka i sastavnice](topic:marks-and-bom) za način korištenja.

## Oznake pozicija

Dva dijela dijele oznaku pozicije kad se sve ovo podudara:

1. Vrsta dijela (greda, stup, spreg ili ploča).
2. Naziv profila (bez razlike između velikih i malih slova).
3. Materijal (bez razlike između velikih i malih slova).
4. Duljina rezanja, unutar 1 mm.
5. Svaki provrt: strana, položaj uzduž i poprijeko, unutar 1 mm, i promjer unutar 0.1 mm.
6. Svaki izrez: kraj, strana, duljina i dubina, unutar 1 mm.

{{ui:Naziv}} štapa se ne računa. Ne računaju se ni njegov položaj u modelu, rotacija, ni kako je nacrtan, sve dok je sam dio isti.

### Okrenuti dijelovi

Dio se uspoređuje na svaki način na koji se može okrenuti tako da njegov presjek padne sam na sebe. Ako bilo koji od tih načina dio učini podudarnim s drugim dijelom, dijele oznaku.

| Oblik | Okretanja koja se računaju |
|---|---|
| I-profili, pravokutni HSS, ploče | Kraj na kraj (oko vertikalne osi), kraj na kraj (oko horizontalne osi) i naopako oko vlastite duljine |
| U-profili (kanali) | Kraj na kraj samo oko horizontalne osi, pa hrbat ostaje s iste strane |
| Kutnici, okrugli HSS | Nijedno: uspoređuju se kako su postavljeni |

Tako greda s provrtom blizu lijevog kraja odgovara gredi s istim provrtom blizu desnog kraja, a stup s provrtima u jednoj pojasnici odgovara stupu s istim provrtima u drugoj pojasnici.

### Numeriranje

| Vrsta | Prefiks dijela | Prefiks sklopa |
|---|---|---|
| Stup | c | C |
| Greda | b | B |
| Spreg | br | BR |
| Ploča (postavljena, čeona ploča ili podložna ploča) | p | P |

Oznake se numeriraju od 1 unutar svakog prefiksa. Redoslijed je: stupovi, zatim grede, spregovi i ploče; unutar vrste, prema nazivu profila u prirodnom redoslijedu (W8x10 prije W12x26); zatim dulji dijelovi prvi.

Pošto numeriranje slijedi taj redoslijed, dodavanje ili promjena jednog dijela može pomaknuti brojeve drugih.

## Oznake sklopova

- Svaki dio koji nije zavaren za drugi dio glavni je dio vlastitog sklopa.
- Čeone ploče zavarene su za svoju gredu, a podložne ploče za svoj stup, pa pripadaju sklopu tog elementa.
- Dva sklopa dijele oznaku kad njihovi glavni dijelovi dijele oznaku pozicije, a njihovi pridruženi dijelovi imaju iste oznake na istim mjestima (unutar 1 mm), uz dopuštena ista okretanja kao za glavni dio.
- Prefiks sklopa prati glavni dio: greda s dvije čeone ploče je sklop B.

Ploče koje postavite alatom {{ui:Ploča}} nisu zavarene ni za što, pa je svaka vlastiti sklop P.

## Oznake temelja

Temelji iste duljine, širine, dubine, tekstualne oznake betona, donje mreže i početnih šipki dijele oznaku: F1, F2 … po redoslijedu postavljanja. Položaj i rotacija se ne računaju.

## Oznake šipki

Šipke iste veličine, oblika i dimenzija A, B i C (zaokruženo na milimetar) dijele oznaku kroz sve temelje. Oznaka je broj šipke, F, i brojač po veličini šipke: 5F1, 5F2, 6F1. Dugačka i kratka šipka kvadratnog temelja su ista šipka i dijele oznaku; stupac {{ui:Namjena}} u {{ui:Plan savijanja}} navodi obje upotrebe.
