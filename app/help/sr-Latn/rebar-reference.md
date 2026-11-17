---
title: Referenca armature
summary: Dimenzije šipki, dimenzije kuka, kodovi oblika, dužine sečenja i kolone rasporeda savijanja koje DetailCraft koristi.
keywords: armatura, dimenzije šipki, kuke, prečnik savijanja, kodovi oblika, dužina sečenja, raspored savijanja, spisak šipki, ASTM A615, ACI 318
from: 1583535e
---

## Dimenzije šipki

Prema ASTM A615/A615M, tabela 1 (oznake u inčima i funtama). Milimetri i kg/m su tačne konverzije objavljenih vrednosti u inčima i lb/ft. Spiskovi prikazuju svaku dimenziju kao, na primer, „#5 (15.9 mm)".

| Šipka | Prečnik (mm) | Masa (kg/m) | Površina (mm²) | Unutrašnji prečnik savijanja | Krak kuke od 90°, spolja do spolja (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

U [DetailCraft podešavanjima](topic:settings) ({{ui:Rebar}}), **nazivi šipki po ASTM** mogu da prikažu ove šipke pod njihovim meko-metričkim nazivima A615M: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (iste šipke; ACI 315-99, tabela 1, navodi oba).

### Metričke šipke (BS 4449)

| Šipka | Prečnik (mm) | kg/m | Min. poluprečnik savijanja r (mm) | Krak kuke = krajnji previs P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Masa je nominalni presek pomnožen sa 7850 kg/m³. Poluprečnik i krajnji previs su minimumi iz BS 8666:2020 (njegove tabele minimalnih dimenzija; raniji prečnik je 2r). Temelji sa BS šipkama dobijaju krakove kuka P i dužine sečenja prema formulama BS 8666 ispod. Izbor evropskog čelika u podešavanjima pravi nove temelje sa mrežama od H16 i startnim šipkama H20 u betonu C30/37.

## Kuke

ASTM šipke: standardne kuke od 90° prema ACI 318-19, tabela 25.3.1: unutrašnji prečnik savijanja 6 db za #3 do #8 i 8 db za #9 do #11, sa pravim produžetkom od 12 db iza savijanja. Krak kuke, meren spolja do spolja, jednak je polovini prečnika savijanja + db + 12 db.

Ako kuka šipke mreže ne staje u dubinu temelja unutar zaštitnog sloja, DetailCraft skraćuje krak da stane i prikazuje upozorenje.

## Oblici

DetailCraft čuva tri oblika. Raspored savijanja ih ispisuje kao DetailCraft-ove kodove, kao tipove ACI 315 ili kao kodove oblika BS 8666: izaberite **Kodovi oblika u rasporedu savijanja** u [DetailCraft podešavanjima](topic:settings) ({{ui:Rebar}}).

| Kod | Oblik | Dimenzije |
|---|---|---|
| S | Prava | A = dužina |
| L | Jedno savijanje od 90° | A = glavni krak, B = krak kuke, oba spolja do spolja |
| U | Dva savijanja od 90° na istoj strani | A = sredina, B i C = dva kraka, spolja do spolja |

Mreže šipki sa uključenim {{ui:Krajnje kuke}} su U; bez njih S. Startne šipke sa uključenom {{ui:Kuka na dnu}} su L; bez njih S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (sl. 10) |
|---|---|---|
| S | 00, L = A | bez broja tipa |
| L | 11, L = A + B − 0.5r − d | bez broja tipa: slika nema šipku sa jednom kukom |
| U | 21, A i C kraci, B sredina: L = A + B + C − r − 2d | Tip 2, kuke A i G, prava B |

Sa kodovima BS 8666 ili ACI 315 kolone A, B i C u rasporedu prate oznake tog standarda (sredina kod U je B).

## Dužina sečenja

Za BS 4449 šipke dužina sečenja je formula BS 8666 za kod oblika šipke (iznad). Za ASTM šipke to je tačna dužina centralne linije šipke: pravi delovi plus savijanja kao lukovi poluprečnika jednakog polovini prečnika savijanja plus polovini prečnika šipke. Ne računa se iz tabele umanjenja za savijanje, pa se može razlikovati za nekoliko milimetara od rasporeda koji takvu tabelu koristi.

## Raspored

- Donja mreža: šipke duž L čine donji sloj, a šipke duž B leže na njima. Svaki skup se ravnomerno raspoređuje po temelju unutar zaštitnog sloja, na razmaku koji zadate ili manjem, sa najmanje dve šipke.
- Startne šipke: mreža šipki duž L i duž B na razmacima koje zadate, centrirana na temelju, stoji na mreži i viri iznad vrha za previs koji zadate. Svaka kuka je okrenuta spolja.

## Provere

| Provera | Pravilo | Rezultat |
|---|---|---|
| Prostor za šipke | Zaštitni sloj sa obe strane ostavlja prostor za šipke | Odbijeno ako nije |
| Dubina za dva sloja | Dubina minus dva zaštitna sloja drži oba sloja mreže | Odbijeno ako nije |
| Startne šipke staju | Mreža startnih šipki staje unutar zaštitnog sloja | Odbijeno ako nije |
| Čist razmak | Najmanje veća od 25.4 mm i db (ACI 318-19 25.2.1; veličina agregata se ne proverava) | Upozorenje |
| Dubina kuke | Krak kuke staje u dubinu unutar zaštitnog sloja | Upozorenje, krak skraćen |
| Kuke startnih šipki | Kuke ostaju van zaštitnog sloja | Upozorenje |

## Kolone rasporeda savijanja

Kartica {{ui:Raspored savijanja}} i njen CSV imaju ove kolone: Oznaka šipke, Dimenzija, Oblik, A (mm), B (mm), C (mm), Količina, Dužina sečenja (mm), Ukupna dužina (m), kg/m, Težina po komadu (kg), Ukupna težina (kg), Namena. Poslednji red zbraja količinu, dužinu i težinu.
