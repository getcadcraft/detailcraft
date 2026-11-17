---
title: Postavljanje temelja sa armaturom
summary: Postavi pravougaone samostojne temelje sa donjom mrežom i izvodnim šipkama, proveri ih i preuzmi raspored savijanja.
keywords: temelj, samostojni temelj, fundiranje, armatura, šipke, mreža, izvodne šipke, spojne šipke, raspored savijanja, lista šipki, beton, kuke, zaštitni sloj
from: 41a048be
---

Ova tema se odnosi na pravougaone samostojne temelje. Grede, stubovi, ploče i zidovi su u [Detail armiranog betona](topic:reinforced-concrete). Svaki temelj dobija donju mrežu u oba pravca i, ako ih želiš, izvodne šipke koje iz njega izlaze. Šipke su u američkim veličinama #3 do #11.

## Postavljanje temelja

1. Izaberi {{ui:Osnova}} i odaberi nivo gornje ivice temelja.
2. Izaberi {{ui:Temelj}} u grupi {{ui:Postavi}} ili pritisni {{key:F}}.
3. Podesi temelj u panelu {{ui:Svojstva}} (vidi dole) ili ostavi podrazumevane vrednosti.
4. Klikni na presek mreže. Temelj se centrira na njemu, a gornja ivica mu je na nivou. Statusna traka kaže, na primer, „Temelj 2000 x 2000 x 600 ispod A/1.“

Možeš i da koristiš obrazac {{ui:Dodaj prema mreži}} na dnu panela.

Temelj je prikazan providno, da vidiš njegove šipke, koje su nacrtane kao pune cevi.

## Podešavanja temelja

| Polje | Podrazumevano | Napomene |
|---|---|---|
| Dužina L (mm) | 2000 | Duž x; 300 do 50000 |
| Širina B (mm) | 2000 | Duž y; 300 do 50000 |
| Dubina H (mm) | 600 | 150 do 10000 |
| Beton | 4000 psi | Tekst, štampa se u IFC izvozu |

**Donja mreža**

| Polje | Podrazumevano | Napomene |
|---|---|---|
| Duge šipke | #5 | Šipke duž L, donji sloj |
| Razmak (mm) | 250 | Najveći dozvoljeni razmak; šipke su ravnomerno raspoređene na ovom ili manjem razmaku |
| Kratke šipke | #5 | Šipke duž B, položene preko dugih |
| Razmak (mm) | 250 | Isto kao gore |
| Zaštitni sloj (mm) | 75 | Slobodan zaštitni sloj sa svake strane |
| Krajnje kuke | Uključeno | Savija oba kraja svake šipke mreže u standardnu kuku od 90° (oblik U); isključeno daje prave šipke (oblik S) |

**Izvodne šipke**

| Polje | Podrazumevano | Napomene |
|---|---|---|
| Izvodne šipke | Uključeno | Isključi ih za temelj bez izvodnih šipki |
| Šipka | #6 | |
| Šipke duž L / Šipke duž B | 2 / 2 | Mreža šipki, centrirana na temelju |
| Razmak duž L / Razmak duž B | 250 / 250 | Između centara šipki |
| Izlazak iznad vrha | 600 | Koliko šipke izlaze iznad gornje ivice temelja |
| Kuka na dnu | Uključeno | Kuka od 90° okrenuta napolje, leži na mreži (oblik L) |

Ispod polja DetailCraft prikazuje krak kuke za duge šipke, na primer „Krak kuke za #5: 254 mm spolja do spolja.“

## Izmena postavljenog temelja

Izaberi temelj (klikni na njegov beton dalje od stuba ili na jednu od njegovih šipki). Dobijaš ista polja, plus {{ui:Centar x}}, {{ui:Centar y}}, {{ui:Gornja kota z}} i {{ui:Obrtanje (°)}}. Ispod njih tabela navodi šipke ovog temelja sa njihovim oznakama, brojem i dužinama, kao i zapreminu betona u kubnim metrima.

Svaka izmena se proverava pre nego što se zadrži. Izmena koja se ne može izvesti se odbija, a statusna traka kaže zašto, na primer: „Zaštitni sloj ne ostavlja mesta za šipke u ovom temelju.“, „Temelj je pre plitak za dva sloja šipki unutar zaštitnog sloja.“ ili „Izvodne šipke ne staju u temelj sa zaštitnim slojem od 75 mm.“

Izmene koje se mogu izvesti, ali traže pažnju, navedene su ispod temelja i na kartici {{ui:Problemi}}:

- „Šipke #11 na 59.6 mm ostavljaju manje od 35.8 mm slobodnog prostora (ACI 318-19 25.2.1).“ Slobodan razmak između šipki mora biti najmanje prečnik šipke i najmanje 25.4 mm.
- „Kuke #5 traže 254 mm dubine; unutar zaštitnog sloja staje samo 150 mm.“ Kraci kuka se tada skraćuju da stanu, pa više nisu standardne kuke.
- „Kuke izvodnih šipki zalaze u zaštitni sloj.“
- „Izvodne šipke su bliže od najmanjeg slobodnog razmaka.“

## Oznake šipki i raspored savijanja

Identične šipke (ista veličina, oblik i dimenzije do milimetra) dele jednu oznaku šipke na svim temeljima. Oznake se pišu `<broj šipke>F<n>`: 5F1, 5F2 za šipke #5, 6F1 za prvu šipku #6, i tako dalje. Temelji iste veličine, betona, mreže i izvodnih šipki dele oznaku temelja: F1, F2 …

1. Otvori karticu {{ui:Raspored savijanja}} na dnu. Svaki red je jedna oznaka šipke: veličina, oblik, dimenzije A, B i C, broj komada, dužina rezanja, ukupna dužina, masa po metru, težina svakog komada, ukupna težina i za šta se šipka koristi.
2. Izaberi {{ui:Preuzmi CSV}} na kartici ili {{ui:Savijanje}} u meniju {{ui:Više}} u grupi {{ui:Izlaz}}, za `<name> bending schedule.csv`.

Oblici su DetailCraft-ove sopstvene oznake, a ne oznake nekog standarda: S prava, L jedno savijanje, U dva savijanja. Dimenzije su spolja do spolja; dužina rezanja je tačna dužina središnje linije kroz savijanja. Vidi [Referenca o armaturi](topic:rebar-reference).

## Šta DetailCraft ne proverava

- Dužine razvijanja i preklapanja, i da li su izvodne šipke dovoljno duge za stub iznad.
- Deo pravila o slobodnom razmaku koji zavisi od veličine agregata (ne zna sastav betona).
- Sve što se tiče stuba ili osnovne ploče iznad: temelji i čelik su odvojeni.

Vidi i [Šta još nije napravljeno](topic:not-built-yet).
