---
title: Postavljanje temelja s armaturom
summary: Postavite pravokutne temelje samce s donjom mrežom armature i ispustima, provjerite ih i preuzmite plan savijanja.
keywords: temelj, temelj samac, temelji, armatura, šipke, mreža, ispusti, veze, plan savijanja, popis šipki, beton, kuke, zaštitni sloj
from: 41a048be
---

Ova tema govori o pravokutnim temeljima samcima. Grede, stupovi, ploče i zidovi opisani su u [Detaljno armirani beton](topic:reinforced-concrete). Svaki temelj dobiva donju mrežu armature u oba smjera i, ako želite, ispuste armature koji izlaze iz nje prema gore. Šipke su američkih veličina #3 do #11.

## Postavljanje temelja

1. Odaberite {{ui:Tlocrt}} i odredite razinu gornje plohe temelja.
2. Odaberite {{ui:Temelj}} u grupi {{ui:Postavljanje}} ili pritisnite {{key:F}}.
3. Postavite temelj u panelu {{ui:Svojstva}} (vidi dolje) ili ostavite zadane vrijednosti.
4. Kliknite na presjecište mreža. Temelj se centrira na njemu, a gornja ploha je na razini. Statusna traka kaže, na primjer, „Temelj 2000 x 2000 x 600 pod A/1.“

Također možete upotrijebiti obrazac {{ui:Dodaj po mreži}} pri dnu panela.

Temelj je prikazan prozirno da vidite njegove šipke, koje su prikazane kao pune cijevi.

## Postavke temelja

| Polje | Zadano | Napomene |
|---|---|---|
| Duljina L (mm) | 2000 | Duž x; 300 do 50000 |
| Širina B (mm) | 2000 | Duž y; 300 do 50000 |
| Dubina H (mm) | 600 | 150 do 10000 |
| Beton | 4000 psi | Tekst, ispisuje se u IFC izvozu |

**Donja mreža**

| Polje | Zadano | Napomene |
|---|---|---|
| Dugačke šipke | #5 | Šipke duž L, donji sloj |
| Razmak (mm) | 250 | Najveći dopušteni razmak; šipke su raspoređene ravnomjerno na tom razmaku ili manjem |
| Kratke šipke | #5 | Šipke duž B, položene na dugačke šipke |
| Razmak (mm) | 250 | Kao gore |
| Zaštitni sloj (mm) | 75 | Čisti zaštitni sloj na svakoj plohi |
| Kuke na krajevima | Uključeno | Savija oba kraja svake šipke mreže u standardnu kuku od 90° (oblik U); isključeno daje ravne šipke (oblik S) |

**Ispusti armature**

| Polje | Zadano | Napomene |
|---|---|---|
| Ispusti armature | Uključeno | Isključite za temelj bez ispusta |
| Šipka | #6 | |
| Šipke duž L / Šipke duž B | 2 / 2 | Mreža šipki, centrirana na temelju |
| Razmak duž L / Razmak duž B | 250 / 250 | Između središta šipki |
| Istak iznad vrha | 600 | Koliko šipke izlaze iznad gornje plohe temelja |
| Kuka na dnu | Uključeno | Kuka od 90° okrenuta prema van, leži na mreži (oblik L) |

Ispod polja DetailCraft prikazuje krak kuke za dugačke šipke, na primjer „Krak kuke za #5: 254 mm od vanjske do vanjske strane.“

## Promjena postavljenog temelja

Odaberite temelj (kliknite njegov beton daleko od stupova ili jednu od njegovih šipki). Dobit ćete ista polja uz {{ui:Središte x}}, {{ui:Središte y}}, {{ui:Vrh z}} i {{ui:Zakretanje (°)}}. Ispod njih tablica navodi šipke ovog temelja s njihovim oznakama, brojem i duljinama, te volumen betona u kubnim metrima.

Svaka promjena se provjerava prije spremanja. Promjena koja se ne može izvesti se odbija, a statusna traka kaže zašto, na primjer „Zaštitni sloj ne ostavlja mjesta za šipke u ovom temelju.“, „Temelj je preplitak za dva sloja šipki unutar zaštitnog sloja.“ ili „Ispusti armature ne stanu u temelj uz zaštitni sloj od 75 mm.“

Promjene koje se mogu izvesti, ali traže pregled, navedene su ispod temelja i na kartici {{ui:Problemi}}:

- „Šipke #11 na 59.6 mm ostavljaju manje od 35.8 mm slobodnog razmaka (ACI 318-19 25.2.1).“ Slobodni razmak između šipki mora biti najmanje promjer šipke i najmanje 25.4 mm.
- „Kuke #5 trebaju 254 mm dubine; unutar zaštitnog sloja stane samo 150 mm.“ Kraci kuka se tada skraćuju da stanu, pa više nisu standardne kuke.
- „Kuke ispusta ulaze u zaštitni sloj.“
- „Ispusti armature su bliži od minimalnog slobodnog razmaka.“

## Oznake šipki i plan savijanja

Istovjetne šipke (iste veličine, oblika i dimenzija do milimetra) dijele oznaku šipke na svim temeljima. Oznake se pišu kao `<broj šipke>F<n>`: 5F1, 5F2 za šipke #5, 6F1 za prvu šipku #6, i tako dalje. Temelji iste veličine, betona, mreže i ispusta dijele oznaku temelja: F1, F2 …

1. Otvorite karticu {{ui:Plan savijanja}} pri dnu. Svaki redak je jedna oznaka šipke: veličina, oblik, dimenzije A, B i C, broj, duljina reza, ukupna duljina, masa po metru, težina svake, ukupna težina i za što se šipka koristi.
2. Odaberite {{ui:Preuzmi CSV}} na kartici ili {{ui:Savijanje}} u izborniku {{ui:Više}} grupe {{ui:Izlaz}} za `<naziv> bending schedule.csv`.

Oblici su DetailCraftovi vlastiti kodovi, a ne standard: S ravna, L jedno savijanje, U dva savijanja. Dimenzije su od vanjske do vanjske strane; duljina reza je točna duljina osi kroz savoje. Vidi [Referenca armature](topic:rebar-reference).

## Što DetailCraft ne provjerava

- Duljine razvijanja i preklapanja te jesu li ispusti armature dovoljno dugi za stup iznad.
- Dio pravila o slobodnom razmaku koji ovisi o veličini zrna agregata (ne zna recepturu betona).
- Sve što se tiče stupa ili podložne ploče iznad: temelji i čelik su odvojeni.

Vidi također [Što još nije izrađeno](topic:not-built-yet).
