---
title: Pravila za oznake
summary: Tačno kada dva dela ili dva sklopa dele oznaku, kako se oznake numerišu i kako rade oznake temelja i šipki.
keywords: oznake, numerisanje, oznaka dela, oznaka sklopa, oznaka komada, prefiks, tolerancija, identični delovi, oznake šipki, oznake temelja
from: ce02c98e
---

DetailCraft ponovo računa svaku oznaku posle svake promene. Ništa se ne čuva, pa oznake uvek opisuju model onakav kakav jeste. Pogledajte [Proverite oznake i spisak materijala](topic:marks-and-bom) za to kako ih koristiti.

## Oznake delova

Dva dela dele oznaku delova kada se sva ova podudaraju:

1. Tip dela (greda, stub, dijagonala ili lim).
2. Naziv profila (bez razlike između velikih i malih slova).
3. Materijal (bez razlike između velikih i malih slova).
4. Dužina sečenja, u okviru 1 mm.
5. Svaka rupa: strana, položaj duž i preko, u okviru 1 mm, i prečnik u okviru 0,1 mm.
6. Svaki zasek: kraj, strana, dužina i dubina, u okviru 1 mm.

{{ui:Naziv}} elementa se ne računa. Ne računaju se ni njegov položaj u modelu, rotacija, ni kako je nacrtan, sve dok je sam deo isti.

### Delovi okrenuti naopako

Deo se upoređuje na svaki način na koji može da se okrene tako da njegov presek ostane na sebi. Ako neko od tih okretanja načini da se poklopi sa drugim delom, dele oznaku.

| Oblik | Okretanja koja se računaju |
|---|---|
| I-profili, pravougaoni HSS, ploče | Kraj za kraj (oko vertikalne ose), kraj za kraj (oko horizontalne ose) i naopako oko sopstvene dužine |
| U-profili | Kraj za kraj oko horizontalne ose samo, tako da rebro ostane sa iste strane |
| Uglovnici, okrugli HSS | Nijedno: upoređuje se kako je postavljen |

Tako greda sa rupom blizu levog kraja odgovara gredi sa istom rupom blizu desnog kraja, a stub sa rupama u jednoj prirubnici odgovara stubu sa istim rupama u drugoj prirubnici.

### Numerisanje

| Tip | Prefiks dela | Prefiks sklopa |
|---|---|---|
| {{ui:Stub}} | c | C |
| {{ui:Greda}} | b | B |
| {{ui:Dijagonala}} | br | BR |
| {{ui:Lim}} (postavljen, krajnji ili temeljni lim) | p | P |

Oznake se numerišu od 1 u okviru svakog prefiksa. Redosled je: stubovi, pa grede, dijagonale i ploče; unutar tipa, po nazivu profila u prirodnom redosledu (W8x10 pre W12x26); zatim duži delovi pre kraćih.

Pošto numerisanje prati taj redosled, dodavanje ili promena jednog dela može pomeriti brojeve drugih.

## Oznake sklopova

- Svaki deo koji nije zavaren za drugi deo je glavni deo svog sklopa.
- Krajnje ploče se zavaruju za svoju gredu, a temeljne ploče za svoj stub, pa pripadaju sklopu tog elementa.
- Dva sklopa dele oznaku kada njihovi glavni delovi dele oznaku dela, a njihovi pridruženi delovi imaju iste oznake na istim mestima (u okviru 1 mm), uz ista okretanja kao za glavni deo.
- Prefiks sklopa prati glavni deo: greda sa dve krajnje ploče je sklop B.

Ploče koje postavite alatom {{ui:Lim}} nisu zavarene ni za šta, pa je svaka sopstveni sklop P.

## Oznake temelja

Temelji sa istom dužinom, širinom, dubinom, oznakom betona, donjom mrežom i početnim šipkama dele oznaku: F1, F2 … redom kojim su postavljeni. Položaj i rotacija se ne računaju.

## Oznake šipki

Šipke iste veličine, oblika i dimenzija A, B i C (zaokružene na milimetar) dele oznaku kroz sve temelje. Oznaka je broj šipke, F, i brojač po veličini šipke: 5F1, 5F2, 6F1. Duga i kratka šipka kvadratnog temelja su ista šipka i dele oznaku; kolona {{ui:Namena}} u specifikaciji navodi obe upotrebe.
