---
title: Referenca armature
summary: Veličine šipki, dimenzije kuka, kodovi oblika, duljine rezanja i stupci plana savijanja koje DetailCraft koristi.
keywords: armatura, veličine šipki, kuke, promjer savijanja, kodovi oblika, duljina rezanja, plan savijanja, popis šipki, astm a615, aci 318
from: 1583535e
---

## Veličine šipki

Prema ASTM A615/A615M tablici 1 (oznake u inčima). Milimetri i kg/m su točne pretvorbe objavljenih vrijednosti u inčima i lb/ft. Popisi prikazuju svaku veličinu kao, na primjer, "#5 (15.9 mm)".

| Šipka | Promjer (mm) | Masa (kg/m) | Površina (mm²) | Unutarnji promjer savijanja | Krak kuke od 90°, vanjski-vanjski (mm) |
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

U [DetailCraft postavkama](topic:settings) ({{ui:Armatura}}), **ASTM nazivi šipki** mogu prikazati ove šipke pod njihovim mekim metričkim nazivima A615M: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (iste šipke; ACI 315-99 tablica 1 navodi oba).

### Metričke šipke (BS 4449)

| Šipka | Promjer (mm) | kg/m | Najmanji polumjer savijanja r (mm) | Krak kuke = krajnja izbočina P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Masa je nazivni presjek pomnožen s 7850 kg/m³. Polumjer i krajnja izbočina su najmanje vrijednosti iz BS 8666:2020 (njegove tablice najmanjih dimenzija; ranije promjer je 2r). Temelji s BS šipkama dobivaju krakove kuka duljine P, a duljine rezanja računaju se formulama BS 8666 u nastavku. Odabir europskog čelika u postavkama pokreće nove temelje s mrežama H16 i početnim šipkama H20 u betonu C30/37.

## Kuke

ASTM šipke: standardne kuke od 90° prema ACI 318-19 tablici 25.3.1: unutarnji promjer savijanja 6 db za #3 do #8 i 8 db za #9 do #11, uz ravni produžetak od 12 db iza savijanja. Krak kuke, mjeren vanjski-vanjski, jednak je polovici promjera savijanja + db + 12 db.

Ako kuka šipke mreže ne stane u dubinu temelja unutar zaštitnog sloja, DetailCraft skraćuje krak da stane i prikazuje upozorenje.

## Oblici

DetailCraft pohranjuje tri oblika. Plan savijanja ih ispisuje kao DetailCraftove kodove, kao tipove ACI 315 ili kao kodove oblika BS 8666: odaberite **Kodovi oblika plana savijanja** u [DetailCraft postavkama](topic:settings) ({{ui:Armatura}}).

| Kod | Oblik | Dimenzije |
|---|---|---|
| S | Ravna | A = duljina |
| L | Jedno savijanje od 90° | A = glavni krak, B = krak kuke, oba vanjski-vanjski |
| U | Dva savijanja od 90° na istoj strani | A = srednji, B i C = dva kraka, vanjski-vanjski |

Šipke mreže s uključenim {{ui:Kuke na krajevima}} su U; bez njih S. Početne šipke s uključenom {{ui:Kuka na dnu}} su L; bez nje S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (sl. 10) |
|---|---|---|
| S | 00, L = A | bez broja tipa |
| L | 11, L = A + B − 0.5r − d | bez broja tipa: slika nema šipku s jednom kukom |
| U | 21, A i C kraci, B srednji: L = A + B + C − r − 2d | Tip 2, kuke A i G, ravni B |

Uz kodove BS 8666 ili ACI 315 stupci A, B i C u planu savijanja slijede oznake te norme (srednji dio U je B).

## Duljina rezanja

Za BS 4449 šipke duljina rezanja je formula BS 8666 za kod oblika šipke (gore). Za ASTM šipke to je točna duljina središnje linije šipke: ravni dijelovi plus savijanja kao lukovi polumjera jednakog polovici promjera savijanja uvećanom za polovicu promjera šipke. Ne računa se iz tablice odbitaka za savijanje, pa se može razlikovati za nekoliko milimetara od plana koji takvu tablicu koristi.

## Raspored

- Donja mreža: šipke uz L čine donji sloj, a šipke uz B leže na njima. Svaki skup ravnomjerno je raspoređen po temelju unutar zaštitnog sloja, na razmaku koji zadate ili manjem, s najmanje dvije šipke.
- Početne šipke: mreža šipki uz L i uz B na razmacima koje zadate, centrirana na temelju, stoji na mreži i izbočuje iznad gornje strane za izbočinu koju zadate. Svaka kuka je okrenuta prema van.

## Provjere

| Provjera | Pravilo | Rezultat |
|---|---|---|
| Prostor za šipke | Zaštitni sloj s obje strane ostavlja mjesta za šipke | Odbijeno ako nije |
| Dubina za dva sloja | Dubina minus dva zaštitna sloja drži oba sloja mreže | Odbijeno ako nije |
| Početne šipke stanu | Mreža početnih šipki stane unutar zaštitnog sloja | Odbijeno ako nije |
| Razmak u svjetlu | Najmanje veći od 25.4 mm i db (ACI 318-19 25.2.1; veličina agregata se ne provjerava) | Upozorenje |
| Dubina kuke | Krak kuke stane u dubinu unutar zaštitnog sloja | Upozorenje, krak skraćen |
| Kuke početnih šipki | Kuke ostaju izvan zaštitnog sloja | Upozorenje |

## Stupci plana savijanja

Kartica {{ui:Plan savijanja}} i njezin CSV imaju ove stupce: Oznaka šipke, Veličina, Oblik, A (mm), B (mm), C (mm), Broj, Duljina rezanja (mm), Ukupna duljina (m), kg/m, Težina komada (kg), Ukupna težina (kg), Namjena. Posljednji redak zbraja broj, duljinu i težinu.
