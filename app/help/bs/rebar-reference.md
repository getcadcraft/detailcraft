---
title: Referenca armature
summary: Dimenzije šipki, dimenzije kuka, oznake oblika, dužine reza i kolone spiska savijanja koje DetailCraft koristi.
keywords: armatura, dimenzije šipki, kuke, prečnik savijanja, oznake oblika, dužina reza, spisak savijanja, spisak šipki, astm a615, aci 318
from: 1583535e
---

## Dimenzije šipki

Prema ASTM A615/A615M Tabela 1 (oznake u inčima i funtama). Milimetri i kg/m su tačne konverzije objavljenih vrijednosti u inčima i lb/ft. Spiskovi prikazuju svaku dimenziju kao, na primjer, „#5 (15.9 mm)“.

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

U [Postavkama DetailCraft](topic:settings) ({{ui:Armatura}}), **ASTM nazivi šipki** mogu prikazati ove šipke njihovim mekšim metričkim nazivima A615M: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (iste šipke; ACI 315-99 Tabela 1 navodi oboje).

### Metričke šipke (BS 4449)

| Šipka | Prečnik (mm) | kg/m | Min. radijus savijanja r (mm) | Krak kuke = krajnja projekcija P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Masa je nominalni presjek pomnožen sa 7850 kg/m³. Radijus i krajnja projekcija su minimumi iz BS 8666:2020 (njegova tabela minimalnih dimenzija; prečnik na ranijoj oznaci je 2r). Temelji od BS šipki dobijaju krakove kuka P i dužine reza prema formulama BS 8666 ispod. Odabir evropskog čelika u postavkama pravi nove temelje sa mrežama H16 i polaznim šipkama H20 u betonu C30/37.

## Kuke

ASTM šipke: standardne kuke od 90° prema ACI 318-19 Tabela 25.3.1: unutrašnji prečnik savijanja 6 db za #3 do #8 i 8 db za #9 do #11, sa pravim produžetkom od 12 db iza savijanja. Krak kuke, mjeren spolja do spolja, jednak je polovini prečnika savijanja + db + 12 db.

Ako kuka šipke mreže ne staje u dubinu temelja unutar zaštitnog sloja, DetailCraft skraćuje krak da stane i prikazuje upozorenje.

## Oblici

DetailCraft čuva tri oblika. Spisak savijanja ih ispisuje kao DetailCraft-ove oznake, kao tipove ACI 315 ili kao oznake oblika BS 8666: izaberite **Oznake oblika za spisak savijanja** u [Postavkama DetailCraft](topic:settings) ({{ui:Armatura}}).

| Oznaka | Oblik | Dimenzije |
|---|---|---|
| S | Prava | A = dužina |
| L | Jedno savijanje od 90° | A = glavni krak, B = krak kuke, oba spolja do spolja |
| U | Dva savijanja od 90° na istoj strani | A = sredina, B i C = dva kraka, spolja do spolja |

Šipke mreže sa uključenim {{ui:Krajnje kuke}} su U; bez njih, S. Polazne šipke sa uključenim {{ui:Kuka na dnu}} su L; bez njih, S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Sl. 10) |
|---|---|---|
| S | 00, L = A | bez broja tipa |
| L | 11, L = A + B − 0.5r − d | bez broja tipa: slika nema šipku s jednom kukom |
| U | 21, A i C kraci, B sredina: L = A + B + C − r − 2d | Tip 2, kuke A i G, prava B |

Uz oznake BS 8666 ili ACI 315, kolone A, B i C u spisku slijede oznake tog standarda (sredina U je B).

## Dužina reza

Za BS 4449 šipke dužina reza je formula BS 8666 za oznaku oblika šipke (iznad). Za ASTM šipke to je tačna dužina središnje linije šipke: ravni dijelovi plus savijanja kao lukovi, s polumjerom jednakim polovini prečnika savijanja plus polovina prečnika šipke. Ne računa se iz tabele odbitaka za savijanje, pa se može razlikovati za nekoliko milimetara od spiska koji ih koristi.

## Raspored

- Donja mreža: šipke duž L čine donji sloj, šipke duž B leže na njima. Svaki skup se ravnomjerno raspoređuje po temelju unutar zaštitnog sloja, na razmak koji zadate ili manji, s najmanje dvije šipke.
- Polazne šipke: mreža šipki duž L i duž B na razmacima koje zadate, centrirana na temelju, oslonjena na mrežu i izbijaju iznad gornje ivice za projekciju koju zadate. Svaka kuka je okrenuta prema van.

## Provjere

| Provjera | Pravilo | Rezultat |
|---|---|---|
| Prostor za šipke | Zaštitni sloj s obje strane ostavlja mjesta za šipke | Odbijeno ako nije |
| Dubina za dva sloja | Dubina minus dva zaštitna sloja drži oba sloja mreže | Odbijeno ako nije |
| Polazne šipke stanu | Mreža polaznih šipki staje unutar zaštitnog sloja | Odbijeno ako nije |
| Čist razmak | Najmanje veće od 25.4 mm i db (ACI 318-19 25.2.1; veličina agregata se ne provjerava) | Upozorenje |
| Dubina kuke | Krak kuke staje u dubinu unutar zaštitnog sloja | Upozorenje, krak skraćen |
| Kuke polaznih šipki | Kuke ostaju izvan zaštitnog sloja | Upozorenje |

## Kolone spiska savijanja

Kartica {{ui:Spisak savijanja}} i njen CSV imaju ove kolone: Oznaka šipke, Veličina, Oblik, A (mm), B (mm), C (mm), Broj, Dužina reza (mm), Ukupna dužina (m), kg/m, Težina svake (kg), Ukupna težina (kg), Za šta se koristi. Posljednji red zbraja broj, dužinu i težinu.
