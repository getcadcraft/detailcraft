---
title: Provjeri betonske elemente i napravi seizmička opterećenja
summary: Postavi armaturu betonskih greda i stubova, provjeri ih prema ACI 318-19, napravi ekvivalentne bočne sile prema ASCE 7-22 na krutim etažama i vidi pomjeranje sprata. Pomoć inženjeru za provjeru.
keywords: beton, armirani beton, ACI 318, ACI 318-19, armatura, greda, stub, smicanje, vezice, seizmika, zemljotres, ekvivalentna bočna sila, ELF, ASCE 7-22, pomjeranje, pomjeranje sprata, etaže, kruta dijafragma, težina sprata, iskorištenost, konstruktivni, inženjer
from: 94d3001d
---

Blokovi {{ui:Betonski elementi}} i {{ui:Seizmička opterećenja}} na kartici {{ui:Analiza}} provjeravaju armiranobetonske grede i stubove i prave bočne sile zemljotresa na etažama okvira. Oba prate pokretanje kartice {{ui:Analiza}} i čuvaju se uz model.

:::warning
Rezultati su **za provjeru od strane inženjera**: pomoć dok ih neko ne pregleda. Provjere betona koriste sile prvog reda, osim što se stub u okviru koji nazovete nepomjerljivim (non-sway) proračunava za svoj uvećani moment, bez uvećanja zbog pomjeranja, bez proračuna uvijanja, bez seizmičkog detaljisanja (ACI poglavlje 18) i bez detaljisanja vezica. Seizmička opterećenja ne uzimaju u obzir faktor redundanse, vertikalni seizmički efekat, uvećanje od uvijanja i P-delta efekte. Opterećenja vjetrom još nisu urađena.
:::

## Nacrtaj elemente

Nacrtaj betonske elemente kao pravougaonike: profil {{ui:Lim}} kao `PL400x400` za stub i `PL300x600` za gredu daje presjek. Stubovi i grede se postavljaju kao i svaki drugi element.

## Postavi presjeke

Blok {{ui:Betonski elementi}} navodi svaki presjek koji elementi koriste. Pritisni {{ui:Postavi kao beton…}} na onima koji su beton. DetailCraft čita širinu **b** (duž sopstvene y ose elementa) i dubinu **h** (duž z) iz nacrtanog profila, pa traži:

- **zaštitni sloj** do središta šipki, i **gornje**, **donje** i **bočne** šipke (koliko i koji prečnik) za gredu, ili **kavez stuba** (šipke duž b i duž h, koji prečnik, spiralne vezice) za stub;
- **vezice**: krakove, prečnik i razmak;
- šta element **predstavlja**: gredu, stub, ili se odlučuje na osnovu sila (vertikalni element, ili onaj koji nosi više od 0.10 f′c Ag, jeste stub).

Postavi f′c, granicu tečenja šipki fy i granicu tečenja vezica fyt (do 420 MPa računa se za smicanje), K i da li je okvir pomjerljiv ili nepomjerljiv iznad njih. Presjek postavljen kao beton analizira se kao beton: E = 4700 √f′c, 2400 kg/m³, a po zadanom sa **ispucalim presjecima** (stubovi 0.70 Ig, grede 0.35 Ig; ACI 318-19 tabela 6.6.3.1.1(a)). Izaberi {{ui:Bruto presjeci}} da to isključiš.

## Napravi kombinacije i provjeri

Dodijeli slučajevima opterećenja njihovu vrstu, zatim {{ui:Napravi kombinacije}}: ACI 318-19 preuzima kombinacije nosivosti iz ASCE 7 (§5.3.1). Pritisni {{ui:Provjeri beton}} i svaki element dobija iskorištenost, obojenu na modelu kao i provjere čelika: savijanje i minimalni čelik (22.2, 9.6.1.2), deformacija sa kontrolom zatezanja (9.3.3.1), smicanje sa vezicama (22.5, 9.6.3), razmak vezica i aksijalno opterećenje sa momentom za stubove (22.4, sa Breslerovom metodom za dvosmjerno savijanje). Element kod kojeg se nacrtani presjek razlikuje od b × h koji ste upisali glasi *djelimično provjeren*, kao i vitki stub ili uvijanje iznad praga: ti se ne proračunavaju.

Elementi iznad svog kapaciteta navedeni su u {{ui:Problemi}}; prihvati jedan sa razlogom ili popravi presjek.

## Etaže i seizmička opterećenja

Etaža je nivo na kojem okvir drži kruta ploča (**kruta dijafragma**). U bloku {{ui:Seizmička opterećenja}} pritisni {{ui:Pronađi etaže}}: uzima nivoe na kojima se sastaju dvije ili više greda. Zatim svakoj etaži daj njenu **seizmičku težinu**, upisanu ili očitanu. {{ui:Uzmi težine iz slučajeva}} sabira vertikalna opterećenja slučajeva kojima date faktor (stalno opterećenje je 1; dodaj 0.25 za korisno opterećenje skladišta ili snijeg na ravnom krovu, kako ASCE 7-22 12.7.2 traži). Vertikalno opterećenje svakog čvora ide na etažu na njemu ili iznad; stub između dvije etaže daje polovinu svoje težine svakoj.

Unesi projektne vrijednosti: SDS, SD1, S1, R, Ie, Cd, TL, konstrukcijski sistem (za period) i kategoriju rizika. {{ui:Napravi seizmičke slučajeve}} zatim računa period iz visine zgrade (12.8.2.1), osnovnu silu smicanja V = Cs W (12.8.1), raspoređuje je po etažama (12.8.3) i zapisuje četiri slučaja opterećenja, u X i Y, sa po 5 % slučajne torzije u svakom smjeru (12.8.4.2). Sile po spratovima i provjera pomjeranja sprata (12.8.6, tabela 12.12-1, pomak Cd δxe / Ie prema 0.020 hsx) pojavljuju se nakon pokretanja; pomjeranje preko granice je također problem. Pritisni {{ui:Napravi kombinacije}} ponovo da seizmički slučajevi uđu u kombinacije.

**Period iz analize.** Približni period Ta dolazi iz visine zgrade. Kada pokrenete analizu sa seizmičkim slučajevima, {{ui:Preuzmi period iz analize}} očitava koliko se svaka etaža pomjerila pod silama i računa period Rayleigh-ovom metodom, T = 2π √(Σ w δ² / (g Σ f δ)), jednom za X i jednom za Y; seizmički slučajevi se ponovo prave sa njim. Korišteni period nikada nije veći od Cu·Ta (ASCE 7-22 12.8.2), pa mekani model ne može spustiti osnovnu silu ispod toga. Preuzmi period ponovo nakon drugog pokretanja: stabilizuje se u jednom ili dva koraka. Odznači {{ui:Period iz analize}} da se vratiš na Ta.

**Vitki stubovi (ACI 318-19 6.6.4.5).** Za okvir koji nazovete nepomjerljivim, stub čiji je k·ℓu/r veći od 34 + 12·M1/M2 (najviše 40) proračunava se za uvećani moment Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)², sa (EI)eff = 0.4 Ec Ig / (1 + βdns), i minimalni moment Pu (15 + 0.03 h). βdns (0.6 na početku) je udio faktorisane aksijalne sile koji traje: upiši svoju vrijednost. Stub čija Pu dostigne 0.75 Pc ne prolazi sopstvenu provjeru. Izvještaj navodi brojeve za svaki vitki stub. U **pomjerljivom** okviru vitki stub je i dalje "djelimično provjeren": njegovo uvećanje traži analizu drugog reda, koja nije urađena.

**Ploče.** Kada model ima ploče, blok {{ui:Armatura ploče}} uzima momente ploča iz svake kombinacije nosivosti i, po Wood–Armer pravilu (savijanje i uvijanje zajedno), računa čelik koji svaki sloj treba po metru: donji i gornji, u x i u y. Ti unosiš debljinu, zaštitni sloj i šipke; tabela prikazuje potrebno naspram datog i jednosmjerno smicanje naspram φVc, a sloj koji ne ispunjava je problem sa svojom klauzulom. Progib, proboj na stubovima i okvirne šipke oko otvora nisu obuhvaćeni, a moment iznad oslonca sporo konvergira sa četvorougaonim pločama.

Svaka etaža koju navedete postaje kruta dijafragma u analizi: njene grede ne nose aksijalnu silu od pomjeranja etaže. Izvoz CraftScript nije napravljen za model sa etažama.

## Izvještaj

{{ui:Izvještaj (PDF)}} i {{ui:Izvještaj (CSV)}} dobijaju betonske tabele (pretpostavke, iskorištenost po elementu, svaka klauzula), seizmičke parametre i osnovnu silu smicanja, sile na etažama i tabelu pomjeranja.
