---
title: Proveri betonske elemente i napravi seizmička opterećenja
summary: Podesi armaturu betonskih greda i stubova, proveri ih prema ACI 318-19, napravi ekvivalentne bočne sile prema ASCE 7-22 na krutim podovima i vidi međuspratni pomak. Pomoć inženjeru za proveru.
keywords: beton, armirani beton, ACI 318, ACI 318-19, armatura, greda, stub, smicanje, veze, seizmika, zemljotres, ekvivalentna bočna sila, ELF, ASCE 7-22, pomak, međuspratni pomak, podovi, kruti diafragma, težina sprata, iskorišćenost, konstrukcija, inženjer
from: 94d3001d
---

Blokovi {{ui:Betonski elementi}} i {{ui:Seizmička opterećenja}} u kartici {{ui:Analiza}} proveravaju armirano-betonske grede i stubove i prave bočne sile zemljotresa na spratovima rama. Oba prate pokretanje kartice {{ui:Analiza}} i čuvaju se uz model.

:::warning
Rezultati su **za proveru od strane inženjera**: pomoć dok je neko ne pregleda. Provere betona koriste sile prvog reda, osim što se stub u ramu koji označiš kao nepomerljiv projektuje za svoj uvećan moment, bez uvećanja zbog pomeranja, bez projektovanja uvijanja, bez seizmičkog detaljisanja (ACI poglavlje 18) i bez detaljisanja veza. Seizmička opterećenja ne uzimaju faktor redundanse, vertikalni seizmički uticaj, uvećanje uvijanja ni P-delta efekte. Opterećenja vetrom još nisu urađena.
:::

## Nacrtaj elemente

Nacrtaj betonske elemente kao pravougaonike: profil {{ui:Lim}} kao `PL400x400` za stub i `PL300x600` za gredu daje presek. Stubovi i grede se postavljaju kao i svaki drugi element.

## Podesi preseke

Blok {{ui:Betonski elementi}} navodi svaki presek koji elementi koriste. Pritisni {{ui:Podesi kao beton…}} na onima koji su beton. DetailCraft čita širinu **b** (duž sopstvene y ose elementa) i dubinu **h** (duž z) iz nacrtanog profila, pa traži:

- **zaštitni sloj** do središta šipki, i **gornje**, **donje** i **bočne** šipke (koliko i koji prečnik) za gredu, ili **kavez stuba** (šipke duž b i duž h, koji prečnik, spiralne veze) za stub;
- **veze**: krakove, prečnik i razmak;
- šta element **predstavlja**: gredu, stub, ili se odlučuje iz njegovih sila (vertikalni element, ili onaj koji nosi više od 0.10 f′c Ag, jeste stub).

Podesi f′c, granicu tečenja šipki fy i granicu tečenja veza fyt (najviše 420 MPa računa se za smicanje), K i da li je ram nepomerljiv ili pomerljiv iznad njih. Presek podešen kao beton analizira se kao beton: E = 4700 √f′c, 2400 kg/m³, i po podrazumevanju sa **ispucalim presecima** (stubovi 0.70 Ig, grede 0.35 Ig; ACI 318-19 Tabela 6.6.3.1.1(a)). Izaberi {{ui:Bruto preseci}} da to isključiš.

## Napravi kombinacije i proveri

Daj slučajevima opterećenja njihovu vrstu, pa izaberi {{ui:Napravi kombinacije}}: ACI 318-19 uzima kombinacije granične nosivosti iz ASCE 7 (§5.3.1). Pritisni {{ui:Proveri beton}} i svaki element dobija iskorišćenje, obojeno na modelu kao i provere čelika: savijanje i minimalni čelik (22.2, 9.6.1.2), deformacija kontrolisana zatezanjem (9.3.3.1), smicanje sa vezama (22.5, 9.6.3), razmak veza i aksijalno opterećenje sa momentom za stubove (22.4, sa Bresler-ovom metodom za dvosmerno savijanje). Element kod kog se nacrtani presek razlikuje od b × h koji si uneo čita se kao *delimično proveren*, kao i vitak stub ili uvijanje iznad praga: oni nisu projektovani.

Elementi iznad svog kapaciteta navedeni su u {{ui:Problemi}}; prihvati jedan uz razlog ili popravi presek.

## Spratovi i seizmička opterećenja

Sprat je nivo na kom je ram povezan krutom pločom (**kruti diafragma**). U bloku {{ui:Seizmička opterećenja}} pritisni {{ui:Pronađi spratove}}: uzima nivoe na kojima se sastaju dve ili više greda. Zatim svakom spratu daj njegovu **seizmičku težinu**, otkucanu ili očitanu: {{ui:Uzmi težine iz slučajeva}} sabira vertikalna opterećenja slučajeva kojima daš faktor (stalno ima 1; dodaj 0.25 za korisno opterećenje skladišta ili sneg na ravnom krovu, kako ASCE 7-22 12.7.2 traži). Vertikalno opterećenje svakog čvora ide spratu na istom nivou ili iznad njega, pa stub između dva sprata daje polovinu svoje težine svakom.

Upiši projektne vrednosti: SDS, SD1, S1, R, Ie, Cd, TL, konstrukcioni sistem (za period) i kategoriju rizika. {{ui:Napravi seizmičke slučajeve}} zatim računa period iz visine zgrade (12.8.2.1), osnovnu silu smicanja V = Cs W (12.8.1), raspoređuje je po spratovima (12.8.3) i upisuje četiri slučaja opterećenja, u X i Y, sa 5 % slučajnim uvijanjem u svakom pravcu (12.8.4.2). Sile po spratovima i provera međuspratnog pomaka (12.8.6, Tabela 12.12-1, pomak Cd δxe / Ie prema 0.020 hsx) pojavljuju se posle pokretanja; pomak preko granice takođe je problem. Pritisni {{ui:Napravi kombinacije}} ponovo da uključiš seizmičke slučajeve u kombinacije.

**Period iz analize.** Približni period Ta dolazi iz visine zgrade. Kada si pokrenuo analizu sa seizmičkim slučajevima, {{ui:Uzmi period iz analize}} očitava koliko se svaki sprat pomerio pod silama i računa period Rejlijevom metodom, T = 2π √(Σ w δ² / (g Σ f δ)), jednom za X i jednom za Y; seizmički slučajevi se ponovo prave sa njim. Korišćeni period nikad nije veći od Cu·Ta (ASCE 7-22 12.8.2), pa mekani model ne može da spusti osnovnu silu ispod toga. Uzmi period ponovo posle drugog pokretanja: stabilizuje se u korak ili dva. Isključi {{ui:Period iz analize}} da se vratiš na Ta.

**Vitki stubovi (ACI 318-19 6.6.4.5).** Za ram koji označiš kao nepomerljiv, stub čije k·ℓu/r je preko 34 + 12·M1/M2 (najviše 40) projektuje se za uvećan moment Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² sa (EI)eff = 0.4 Ec Ig / (1 + βdns), i najmanji moment Pu (15 + 0.03 h). βdns (0.6 na početku) je deo faktorisane aksijalne sile koji je trajan: unesi svoju vrednost. Stub kod kog Pu dostigne 0.75 Pc ne prolazi sopstvenu proveru. Izveštaj navodi brojeve za svaki vitak stub. U **pomerljivom** ramu vitak stub je i dalje „delimično proveren“: njegovo uvećanje traži analizu drugog reda, koja nije urađena.

**Ploče.** Kada model ima limove, blok {{ui:Armatura ploče}} uzima momente ploče iz svake kombinacije graničnog stanja i, po Wood–Armer pravilu (savijanje i uvijanje zajedno), računa čelik koji svaki sloj treba po metru: dole i gore, u x i u y. Ti daješ debljinu, zaštitni sloj i šipke; tabela prikazuje potrebno naspram datog i jednosmerno smicanje naspram φVc, a sloj koji ne ispunjava je problem sa svojom klauzulom. Progib, probijanje kod stubova i obrubne šipke na otvorima nisu obuhvaćeni, a moment iznad oslonca sporo konvergira kod četvorocvornih ploča.

Svaki sprat koji navedeš postaje krut diafragma u analizi: njegove grede ne nose aksijalnu silu od pomeranja sprata. Izvoz CraftScript-a nije napravljen za model sa spratovima.

## Izveštaj

{{ui:Izveštaj (PDF)}} i {{ui:Izveštaj (CSV)}} dobijaju tabele betona (pretpostavke, iskorišćenje po elementu, svaka klauzula), seizmičke parametre i osnovnu silu smicanja, sile na spratovima i tabelu pomaka.
