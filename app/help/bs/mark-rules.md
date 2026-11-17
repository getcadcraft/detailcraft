---
title: Pravila oznaka
summary: Tačno kada dva dijela ili dva sklopa dijele oznaku, kako se oznake numerišu i kako rade oznake temelja i šipki.
keywords: oznake, numerisanje, oznaka dijela, oznaka sklopa, oznaka komada, prefiks, tolerancija, identični dijelovi, oznake šipki, oznake temelja
from: ce02c98e
---

DetailCraft ponovo računa svaku oznaku nakon svake promjene. Ništa se ne pohranjuje, pa oznake uvijek opisuju model kakav je sada. Pogledajte [Provjera oznaka i spiska materijala](topic:marks-and-bom) za način korištenja.

## Oznake dijelova

Dva dijela dijele oznaku dijela kada se sve ovo slaže:

1. Tip dijela (greda, stub, dijagonala ili lim).
2. Naziv profila (bez obzira na velika i mala slova).
3. Materijal (bez obzira na velika i mala slova).
4. Dužina reza, unutar 1 mm.
5. Svaka rupa: strana, položaj uzduž i poprijeko, unutar 1 mm, a prečnik unutar 0.1 mm.
6. Svaki izrez: kraj, strana, dužina i dubina, unutar 1 mm.

Naziv elementa ({{ui:Naziv}}) se ne računa. Ne računaju se ni njegov položaj u modelu, rotacija, ni kako je nacrtan, sve dok je sam dio isti.

### Okrenuti dijelovi

Dio se poredi u svakom položaju u kojem se može okrenuti tako da njegov presjek padne sam na sebe. Ako bilo koji od tih položaja učini da se poklopi s drugim dijelom, dijele oznaku.

| Oblik | Okretanja koja se računaju |
|---|---|
| I-profili, pravougaoni HSS, limovi | Kraj za kraj (oko vertikalne ose), kraj za kraj (oko horizontalne ose) i naopako oko vlastite dužine |
| Kanali | Kraj za kraj samo oko horizontalne ose, tako da rebro ostane s iste strane |
| Uglovnici, okrugli HSS | Nijedno: poredi se kako stoji |

Tako greda s rupom blizu lijevog kraja odgovara gredi s istom rupom blizu desnog kraja, a stub s rupama u jednom pojasu odgovara stubu s istim rupama u drugom pojasu.

### Numerisanje

| Tip | Prefiks dijela | Prefiks sklopa |
|---|---|---|
| Stub | c | C |
| Greda | b | B |
| Dijagonala | br | BR |
| Lim (postavljen, krajnji lim ili temeljni lim) | p | P |

Oznake se numerišu od 1 unutar svakog prefiksa. Redoslijed je: stubovi, zatim grede, dijagonale i limovi; unutar tipa, prema nazivu profila u prirodnom redoslijedu (W8x10 prije W12x26); zatim duži dijelovi prvi.

Pošto numerisanje slijedi taj redoslijed, dodavanje ili promjena jednog dijela može pomjeriti brojeve drugih.

## Oznake sklopova

- Svaki dio koji nije zavaren za drugi dio je glavni dio vlastitog sklopa.
- Krajnji limovi su zavareni na svoju gredu, a temeljni limovi na svoj stub, pa pripadaju sklopu tog elementa.
- Dva sklopa dijele oznaku kada njihovi glavni dijelovi dijele oznaku dijela, a njihovi pričvršćeni dijelovi imaju iste oznake na istim mjestima (unutar 1 mm), uz ista dozvoljena okretanja kao za glavni dio.
- Prefiks sklopa prati glavni dio: greda s dva krajnja lima je B sklop.

Limovi koje postavite alatom {{ui:Lim}} nisu zavareni ni za šta, pa je svaki od njih vlastiti P sklop.

## Oznake temelja

Temelji s istom dužinom, širinom, dubinom, tekstom betona, donjom mrežom i početnim šipkama dijele oznaku: F1, F2 … u redoslijedu kojim su postavljeni. Položaj i rotacija se ne računaju.

## Oznake šipki

Šipke iste veličine, oblika i dimenzija A, B i C (zaokružene na milimetar) dijele oznaku kroz sve temelje. Oznaka je broj šipke, F i brojač po veličini šipke: 5F1, 5F2, 6F1. Šipka u dužem smjeru i šipka u kraćem smjeru kvadratnog temelja su ista šipka i dijele oznaku; kolona {{ui:Upotrijebljeno za}} u rasporedu navodi obje upotrebe.
