---
title: Postavljanje temelja s armaturom
summary: Postavi pravougaone temelje samce s donjom mrežom i polaznim šipkama, provjeri ih i preuzmi spisak savijanja.
keywords: temelj, temelj samac, temelji, armatura, armiranje, šipke, mreža, polazne šipke, trnovi, spisak savijanja, lista šipki, beton, kuke, zaštitni sloj
from: 41a048be
---

Tema se odnosi na pravougaone temelje samce. Grede, stubovi, ploče i zidovi su u [Detaljni armirani beton](topic:reinforced-concrete). Svaki temelj dobija donju mrežu u oba pravca i, ako ih želite, polazne šipke koje izlaze iz njega. Šipke su US veličine #3 do #11.

## Postavljanje temelja

1. Odaberi {{ui:Osnova}} i izaberi nivo gornje ivice temelja.
2. Odaberi {{ui:Temelj}} u grupi {{ui:Postavljanje}} ili pritisni {{key:F}}.
3. Podesi temelj u panelu {{ui:Svojstva}} (vidi dolje) ili zadrži zadane vrijednosti.
4. Klikni na presjek mreže. Temelj je centriran na njemu, s gornjom ivicom na nivou. Statusna traka kaže, na primjer, "Temelj 2000 x 2000 x 600 ispod A/1."

Možete koristiti i obrazac {{ui:Dodaj po mreži}} pri dnu panela.

Temelj je nacrtan prozirno da vidite njegove šipke, koje su prikazane kao pune cijevi.

## Postavke temelja

| Polje | Zadano | Napomena |
|---|---|---|
| Dužina L (mm) | 2000 | Duž x; 300 do 50000 |
| Širina B (mm) | 2000 | Duž y; 300 do 50000 |
| Dubina H (mm) | 600 | 150 do 10000 |
| Beton | 4000 psi | Tekst, ispisuje se u IFC izvozu |

**Donja mreža**

| Polje | Zadano | Napomena |
|---|---|---|
| Duge šipke | #5 | Šipke duž L, donji sloj |
| Razmak (mm) | 250 | Najveći dozvoljeni razmak; šipke su raspoređene ravnomjerno na ovom ili manjem razmaku |
| Kratke šipke | #5 | Šipke duž B, postavljene na duge šipke |
| Razmak (mm) | 250 | Kao gore |
| Zaštitni sloj (mm) | 75 | Slobodni zaštitni sloj na svakoj strani |
| Krajnje kuke | Uključeno | Savija oba kraja svake šipke mreže u standardnu kuku od 90° (oblik U); isključeno daje ravne šipke (oblik S) |

**Polazne šipke**

| Polje | Zadano | Napomena |
|---|---|---|
| Polazne šipke | Uključeno | Isključi za temelj bez polaznih šipki |
| Šipka | #6 | |
| Šipke duž L / Šipke duž B | 2 / 2 | Mreža šipki, centrirana na temelju |
| Razmak duž L / Razmak duž B | 250 / 250 | Između središta šipki |
| Istak iznad vrha | 600 | Koliko šipke izlaze iznad gornje ivice temelja |
| Kuka na dnu | Uključeno | Kuka od 90° okrenuta prema van, leži na mreži (oblik L) |

Ispod polja DetailCraft prikazuje krak kuke za duge šipke, na primjer "Krak kuke za #5: 254 mm od vanjske do vanjske strane."

## Promjena postavljenog temelja

Odaberi temelj (klikni na njegov beton dalje od bilo kojeg stuba, ili na jednu od njegovih šipki). Dobijaš ista polja plus {{ui:Centar x}}, {{ui:Centar y}}, {{ui:Vrh z}} i {{ui:Rotacija (°)}}. Ispod njih tabela navodi šipke ovog temelja s njihovim oznakama, količinama i dužinama, te zapreminu betona u kubnim metrima.

Svaka promjena se provjerava prije nego što se sačuva. Promjena koja se ne može izvesti se odbija, a statusna traka kaže zašto, na primjer "Zaštitni sloj ne ostavlja mjesta za šipke u ovom temelju.", "Temelj je pretanak za dva sloja šipki unutar zaštitnog sloja." ili "Polazne šipke ne stanu u temelj uz zaštitni sloj od 75 mm."

Promjene koje se mogu izvesti, ali traže pregled, navedene su ispod temelja i na kartici {{ui:Problemi}}:

- "Šipke #11 na 59.6 mm ostavljaju manje od 35.8 mm slobodnog prostora (ACI 318-19 25.2.1)." Slobodni razmak između šipki mora biti najmanje prečnik šipke i najmanje 25.4 mm.
- "Kuke #5 traže 254 mm dubine; unutar zaštitnog sloja staje samo 150 mm." Kraci kuka se tada skraćuju da stanu, pa više nisu standardne kuke.
- "Kuke polaznih šipki ulaze u zaštitni sloj."
- "Polazne šipke su bliže od minimalnog slobodnog razmaka."

## Oznake šipki i spisak savijanja

Identične šipke (ista veličina, oblik i dimenzije do milimetra) dijele istu oznaku šipke na svim temeljima. Oznake se pišu `<bar number>F<n>`: 5F1, 5F2 za šipke #5, 6F1 za prvu šipku #6, i tako dalje. Temelji iste veličine, betona, mreže i polaznih šipki dijele oznaku temelja: F1, F2 …

1. Otvori karticu {{ui:Spisak savijanja}} na dnu. Svaki red je jedna oznaka šipke: veličina, oblik, dimenzije A, B i C, količina, dužina reza, ukupna dužina, masa po metru, težina svake, ukupna težina i za šta se šipka koristi.
2. Odaberi {{ui:Preuzmi CSV}} na kartici, ili {{ui:Savijanje}} u meniju {{ui:Više}} grupe {{ui:Izlaz}}, za `<name> bending schedule.csv`.

Oblici su DetailCraft-ove vlastite oznake, a ne oznake standarda: S ravna, L jedan savoj, U dva savoja. Dimenzije su od vanjske do vanjske strane; dužina reza je tačna dužina osne linije kroz savoje. Vidi [Referenca armature](topic:rebar-reference).

## Šta DetailCraft ne provjerava

- Dužine razvoja i preklopa, i da li su polazne šipke dovoljno duge za stub iznad.
- Dio pravila o slobodnom razmaku koji se odnosi na veličinu agregata (ne poznaje mješavinu).
- Sve što se tiče stuba ili osnovne ploče iznad: temelji i čelik su odvojeni.

Vidi također [Šta još nije izgrađeno](topic:not-built-yet).
