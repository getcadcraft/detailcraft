---
title: Provjera betonskih štapova i izrada potresnih opterećenja
summary: Postavite armaturu betonskih greda i stupova, provjerite ih prema ACI 318-19, izradite ekvivalentne horizontalne sile prema ASCE 7-22 na krutim etažama i pogledajte međukatni pomak. Pomoć inženjeru za provjeru.
keywords: beton, armirani beton, ACI 318, ACI 318-19, armatura, greda, stup, posmik, vezice, potres, ekvivalentna horizontalna sila, ELF, ASCE 7-22, pomak, međukatni pomak, etaže, kruta dijafragma, težina etaže, iskorištenost, utilisation, utilization, konstrukcija, inženjer
from: 94d3001d
---

Blokovi {{ui:Betonski štapovi}} i {{ui:Potresna opterećenja}} na kartici {{ui:Analiza}} provjeravaju armiranobetonske grede i stupove te izrađuju bočne sile potresa na etažama okvira. Oba slijede pokretanje kartice {{ui:Analiza}} i spremaju se s modelom.

:::warning
Rezultati su **za provjeru od strane inženjera**: pomoć dok je ne pregleda. Provjere betona koriste sile prvog reda, osim što se stup u okviru koji nazivate nepomičnim proračunava za svoj uvećani moment, bez uvećanja zbog pomaka, bez proračuna uvijanja, bez potresnog detaljiranja (ACI poglavlje 18) i bez detaljiranja vezica. Potresna opterećenja izostavljaju faktor redundancije, vertikalni potresni učinak, pojačanje uslijed uvijanja i P-delta učinke. Opterećenja vjetrom još nisu izrađena.
:::

## Nacrtajte štapove

Betonske štapove crtajte kao pravokutnike: profil {{ui:Ploča}} poput `PL400x400` za stup i `PL300x600` za gredu daje presjek. Stupovi i grede postavljaju se kao i svaki drugi štap.

## Postavite presjeke

Blok {{ui:Betonski štapovi}} navodi svaki presjek koji štapovi koriste. Pritisnite {{ui:Postavi kao beton…}} na onima koji su betonski. DetailCraft iz nacrtanog profila čita širinu **b** (duž vlastite y osi štapa) i visinu **h** (duž z), a zatim traži:

- **zaštitni sloj** do središta šipki, te **gornje**, **donje** i **bočne** šipke (koliko i koji promjer) za gredu, ili **kavez stupa** (šipke duž b i duž h, koji promjer, spiralne vezice) za stup;
- **vezice**: krakove, promjer i razmak;
- čime štap **djeluje**: gredom, stupom, ili se odlučuje iz sila (okomiti štap, ili onaj koji nosi više od 0.10 f′c Ag, je stup).

Iznad toga postavite f′c, granicu tečenja šipki fy i granicu tečenja vezica fyt (do 420 MPa računa se za posmik), K te je li okvir bočno pomičan ili nepomičan. Presjek postavljen kao beton analizira se kao beton: E = 4700 √f′c, 2400 kg/m³, i zadano s **ispucalim presjecima** (stupovi 0.70 Ig, grede 0.35 Ig; ACI 318-19 Tablica 6.6.3.1.1(a)). Odaberite {{ui:Bruto presjeci}} da to isključite.

## Izradite kombinacije i provjerite

Dajte slučajevima opterećenja njihovu vrstu, zatim {{ui:Izradi kombinacije}}: ACI 318-19 preuzima kombinacije nosivosti iz ASCE 7 (§5.3.1). Pritisnite {{ui:Provjeri beton}} i svaki štap dobiva iskorištenost, obojanu na modelu kao i čelične provjere: savijanje i minimalni čelik (22.2, 9.6.1.2), deformacija kontrolirana vlakom (9.3.3.1), posmik s vezicama (22.5, 9.6.3), razmak vezica i aksijalna sila s momentom za stupove (22.4, s Breslerovom metodom za dvosmerno savijanje). Štap kod kojeg se nacrtani presjek razlikuje od b × h koji ste upisali čita se kao *djelomično provjeren*, kao i vitki stup ili uvijanje iznad praga: oni se ne proračunavaju.

Štapovi iznad svoje nosivosti navode se u {{ui:Problemi}}; prihvatite jedan uz razlog ili popravite presjek.

## Etaže i potresna opterećenja

Etaža je razina na kojoj okvir drži kruta ploča (**kruta dijafragma**). U bloku {{ui:Potresna opterećenja}} pritisnite {{ui:Pronađi etaže}}: uzima razine na kojima se sastaju dvije ili više greda. Zatim dajte svakoj etaži njezinu **potresnu težinu**, upisanu ili pročitanu. {{ui:Preuzmi težine iz slučajeva}} zbraja okomita opterećenja slučajeva kojima dajete faktor (stalno opterećenje je 1; dodajte 0.25 za skladišno korisno opterećenje ili snijeg na ravnom krovu, kao što ASCE 7-22 12.7.2 traži). Okomito opterećenje svakog čvora ide na etažu na njegovoj razini ili iznad nje, pa stup između dviju etaža daje polovicu svoje težine svakoj.

Upišite projektne vrijednosti: SDS, SD1, S1, R, Ie, Cd, TL, konstrukcijski sustav (za period) i kategoriju rizika. {{ui:Izradi potresne slučajeve}} zatim računa period iz visine zgrade (12.8.2.1), osnovnu posmičnu silu V = Cs W (12.8.1), raspoređuje je po etažama (12.8.3) i zapisuje četiri slučaja opterećenja, u X i Y, sa 5 % slučajnim uvijanjem u svakom smjeru (12.8.4.2). Sile po etažama i provjera međukatnog pomaka (12.8.6, Tablica 12.12-1, pomak Cd δxe / Ie prema 0.020 hsx) pojavljuju se nakon pokretanja; pomak iznad dopuštenog je također problem. Ponovno pritisnite {{ui:Izradi kombinacije}} da uključite potresne slučajeve u kombinacije.

**Period iz analize.** Približni period Ta dolazi iz visine zgrade. Kada ste pokrenuli analizu s potresnim slučajevima, {{ui:Uzmi period iz analize}} čita koliko se svaka etaža pomaknula pod silama i računa period Rayleighovom metodom, T = 2π √(Σ w δ² / (g Σ f δ)), jednom za X i jednom za Y; potresni slučajevi se ponovno izrađuju s njime. Korišteni period nikada nije veći od Cu·Ta (ASCE 7-22 12.8.2), pa mekani model ne može spustiti osnovnu posmičnu silu ispod toga. Uzmite period ponovno nakon drugog pokretanja: ustali se u jednom ili dva koraka. Uklonite oznaku s {{ui:Period iz analize}} da se vratite na Ta.

**Vitki stupovi (ACI 318-19 6.6.4.5).** Za okvir koji nazivate nepomičnim, stup čiji je k·ℓu/r veći od 34 + 12·M1/M2 (najviše 40) proračunava se za uvećani moment Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² s (EI)eff = 0.4 Ec Ig / (1 + βdns), i najmanji moment Pu (15 + 0.03 h). βdns (0.6 na početku) je udio faktoriziranog aksijalnog opterećenja koji je trajan: upišite svoju vrijednost. Stup kod kojeg Pu dosegne 0.75 Pc ne prolazi vlastitu provjeru. Izvješće navodi brojeve za svaki vitki stup. U **bočno pomičnom** okviru vitki stup je i dalje „djelomično provjeren“: njegovo uvećanje traži analizu drugog reda, koja nije izrađena.

**Ploče.** Kada model ima ploče, blok {{ui:Armatura ploče}} uzima momente ploča iz svake kombinacije nosivosti i, prema Wood–Armerovu pravilu (savijanje i uvijanje zajedno), računa čelik koji svaki sloj treba po metru: donji i gornji, u x i y. Vi zadajete debljinu, zaštitni sloj i šipke; tablica prikazuje potrebno naspram zadanog i jednosmjerni posmik naspram φVc, a sloj koji ne zadovoljava je problem s odgovarajućom klauzulom. Progib, proboj kod stupova i pojasne šipke na otvorima nisu obuhvaćeni, a moment iznad oslonca sporo konvergira kod četveročvornih ploča.

Svaka etaža koju navedete postaje krutom dijafragmom u analizi: njezine grede ne nose aksijalnu silu od pomaka etaže. Izvoz CraftScript nije izrađen za model s etažama.

## Izvješće

{{ui:Izvješće (PDF)}} i {{ui:Izvješće (CSV)}} dobivaju tablice betona (pretpostavke, iskorištenost po štapu, svaka klauzula), potresne parametre i posmičnu silu baze, sile na etažama i tablicu pomaka.
