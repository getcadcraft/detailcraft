---
title: Postavitev temeljnih stop z armaturo
summary: Postavite pravokotne temeljne stope s spodnjo armaturno mrežo in izhodnimi palicami, jih preverite in prenesite armaturni izvleček.
keywords: temelj, temeljna stopa, pravokotna temeljna stopa, temeljenje, armatura, palice, mreža, izhodne palice, sidrne palice, armaturni izvleček, seznam palic, beton, kavlji, zaščitni sloj
from: 41a048be
---

Ta tema obravnava pravokotne temeljne stope. Grede, stebri, plošče in stene so v [Podrobno armiranobetonske konstrukcije](topic:reinforced-concrete). Vsaka temeljna stopa dobi spodnjo armaturno mrežo v obeh smereh in, če želite, izhodne palice, ki iz nje štrlijo navzgor. Palice so velikosti US od #3 do #11.

## Postavitev temeljne stope

1. Izberite {{ui:Tloris}} in določite nivo zgornjega roba temeljne stope.
2. Izberite {{ui:Temeljna stopa}} v skupini {{ui:Postavi}} ali pritisnite {{key:F}}.
3. Nastavite temeljno stopo v podoknu {{ui:Lastnosti}} (glejte spodaj) ali pustite privzete vrednosti.
4. Kliknite presečišče mreže. Temeljna stopa je središčena na njem, njen zgornji rob pa je na nivoju. Vrstica stanja npr. izpiše: „Temeljna stopa 2000 x 2000 x 600 pod A/1.“

Lahko uporabite tudi obrazec {{ui:Dodaj po mreži}} na dnu podokna.

Temeljna stopa je prikazana prosojno, da vidite njene palice, ki so prikazane kot polne cevi.

## Nastavitve temeljne stope

| Polje | Privzeto | Opombe |
|---|---|---|
| Dolžina L (mm) | 2000 | Vzdolž x; od 300 do 50000 |
| Širina B (mm) | 2000 | Vzdolž y; od 300 do 50000 |
| Višina H (mm) | 600 | Od 150 do 10000 |
| Beton | 4000 psi | Besedilo, izpisano v izvozu IFC |

**Spodnja armaturna mreža**

| Polje | Privzeto | Opombe |
|---|---|---|
| Dolge palice | #5 | Palice vzdolž L, spodnja plast |
| Razmik (mm) | 250 | Največji dovoljeni razmik; palice so enakomerno razporejene na tem razmiku ali manjšem |
| Kratke palice | #5 | Palice vzdolž B, položene na dolge palice |
| Razmik (mm) | 250 | Enako kot zgoraj |
| Zaščitni sloj (mm) | 75 | Prosti zaščitni sloj betona na vsaki strani |
| Kavlji na koncih | Vklopljeno | Obe konca vsake palice mreže zavihata v standardni 90° kavelj (oblika U); izklopljeno pomeni ravne palice (oblika S) |

**Izhodne palice**

| Polje | Privzeto | Opombe |
|---|---|---|
| Izhodne palice | Vklopljeno | Izklopite za temeljno stopo brez izhodnih palic |
| Palica | #6 | |
| Palice vzdolž L / Palice vzdolž B | 2 / 2 | Mreža palic, središčena na temeljni stopi |
| Razmik vzdolž L / Razmik vzdolž B | 250 / 250 | Med središči palic |
| Izstop nad vrhom | 600 | Koliko palice štrlijo nad zgornjim robom temeljne stope |
| Kavelj na dnu | Vklopljeno | 90° kavelj, obrnjen navzven, leži na mreži (oblika L) |

Pod polji program DetailCraft prikaže dolžino kavlja za dolge palice, npr. „Dolžina kavlja za #5: 254 mm od zunanjega do zunanjega roba.“

## Sprememba postavljene temeljne stope

Izberite temeljno stopo (kliknite njen beton stran od stebra ali eno od njenih palic). Dobite enaka polja ter še {{ui:Središče x}}, {{ui:Središče y}}, {{ui:Vrh z}} in {{ui:Zasuk (°)}}. Pod njimi tabela našteje palice te temeljne stope z njihovimi oznakami, števili in dolžinami ter prostornino betona v kubičnih metrih.

Vsaka sprememba se preveri, preden se ohrani. Sprememba, ki je ni mogoče izdelati, se zavrne, vrstica stanja pa pove razlog, npr. „Zaščitni sloj ne pusti prostora za palice v tej temeljni stopi.“, „Temeljna stopa je preplitva za dve plasti palic znotraj zaščitnega sloja.“ ali „Izhodne palice se ne prilegajo v temeljno stopo z zaščitnim slojem 75 mm.“

Spremembe, ki jih je mogoče izdelati, a potrebujejo pregled, so naštete pod temeljno stopo in na zavihku {{ui:Težave}}:

- „Palice #11 na razmiku 59.6 mm pustijo manj kot 35.8 mm prostega razmika (ACI 318-19 25.2.1).“ Prosti razmik med palicami mora biti vsaj premer palice in vsaj 25.4 mm.
- „Kavlji #5 potrebujejo globino 254 mm; znotraj zaščitnega sloja jih je le 150 mm.“ Dolžine kavljev se zato skrajšajo, da se prilegajo, zato niso več standardni kavlji.
- „Izhodni kavlji segajo v zaščitni sloj.“
- „Izhodne palice so bližje, kot dovoljuje najmanjši prosti razmik.“

## Oznake palic in armaturni izvleček

Enake palice (enaka velikost, oblika in mere do milimetra) imajo skupno oznako palice pri vseh temeljnih stopah. Oznake so zapisane kot `<bar number>F<n>`: 5F1, 5F2 za palice #5, 6F1 za prvo palico #6 in tako naprej. Temeljne stope z enako velikostjo, betonom, mrežo in izhodnimi palicami imajo skupno oznako stope: F1, F2 …

1. Odprite zavihek {{ui:Armaturni izvleček}} na dnu. Vsaka vrstica je ena oznaka palice: velikost, oblika, mere A, B in C, število, dolžina reza, skupna dolžina, masa na meter, teža posamezne palice, skupna teža in namen palice.
2. Izberite {{ui:Prenesi CSV}} v zavihku ali {{ui:Krivljenje}} v meniju {{ui:Več}} skupine {{ui:Izhod}}, da dobite datoteko `<name> bending schedule.csv`.

Oblike so lastne kode programa DetailCraft, niso standardne: S ravna, L en zavoj, U dva zavoja. Mere so od zunanjega do zunanjega roba; dolžina reza je točna dolžina osi skozi zavoje. Glejte [Sklic na armaturo](topic:rebar-reference).

## Česa program DetailCraft ne preverja

- Dolžine za sidranje in preklope ter to, ali so izhodne palice dovolj dolge za steber nad njimi.
- Del pravila o prostem razmiku, ki se nanaša na velikost zrn agregata (program ne pozna recepture betona).
- Vse o stebru ali podložni plošči nad temelji: temeljne stope in jeklo so ločeni.

Glejte tudi [Kaj še ni izdelano](topic:not-built-yet).
