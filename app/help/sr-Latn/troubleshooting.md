---
title: Rešavanje problema
summary: Šta znače poruke DetailCraft-a i šta da uradite, od nedostajućeg 3D prikaza do veza koje ne mogu da se naprave.
keywords: problem, greška, ne radi, pomoć, popravka, poruka, odbijeno, webgl, prazno, upozorenje, ne može, pitanje
from: f8c3b2b1
---

Većina odbijanja je objašnjena u statusnoj traci na dnu ekrana ili na kartici {{ui:Problemi}}. Najpre ih pročitajte. Poruke ispod su navedene onako kako ih DetailCraft prikazuje.

## Nedostaje 3D prikaz

**"Ovaj pregledač nije mogao da pokrene 3D grafiku (WebGL). Model, izveštaji i izvozi i dalje rade."**

Pregledač nije mogao da pokrene WebGL, 3D grafiku kojom DetailCraft crta.

1. Ažurirajte pregledač na najnoviju verziju.
2. Uključite hardversko ubrzanje i ponovo pokrenite pregledač (vidi dole).
3. Ažurirajte upravljački program za grafiku ili probajte drugi pregledač. Udaljene radne površine i virtuelne mašine često nemaju WebGL.
4. Za to vreme možete i dalje da radite: postavljate elemente preko forme {{ui:Dodaj prema mreži}}, čitate izveštaje i izvozite. Samo klik u prikazu zahteva WebGL.

:::chromium
Da uključite hardversko ubrzanje, otvorite **Podešavanja, Sistem** i uključite **Koristi ubrzanje grafike kad je dostupno**, pa ponovo pokrenite pregledač.
:::

:::firefox
Da uključite hardversko ubrzanje, otvorite **Podešavanja, Opšte, Performanse**, isključite **Koristi preporučena podešavanja performansi** i označite **Koristi hardversko ubrzanje kad je dostupno**. Ponovo pokrenite Firefox.
:::

:::safari
Safari ima WebGL uključen podrazumevano. Ažurirajte macOS ako prikaz i dalje ne počinje i proverite da li neka ekstenzija to blokira.
:::

Više u [Pregledači i računari](common:browsers).

## Klik u prikazu ne radi ništa

- **Nema preseka blizu klika.** Alati za postavljanje se hvataju samo za preseke mreže. Klik daleko od svih tačaka ne radi ništa. Približite se dok se tačka ne osvetli.
- **Alat je {{ui:Izaberi}} i kliknuli ste prazan prostor.** To poništava izbor.
- **Prevukli ste.** Pritisak i otpuštanje udaljeni više od nekoliko piksela je prevlačenje: okreće ili pomera prikaz.
- **Deo je presečen.** U {{ui:Osnova}} i {{ui:Izgled}}, čelik van preseka je skriven i ne može se kliknuti. Pređite na {{ui:3D}}.
- **Presek je na pogrešnom nivou.** U {{ui:3D}}, preseci na više nivoa mogu da se preklapaju na ekranu; klik uzima najbliži. Koristite {{ui:Osnova}} ili {{ui:Izgled}}.

## Poruke pri postavljanju

| Poruka | Šta uraditi |
|---|---|
| Nema nivoa iznad Nivo 2 do kog stub može da dođe. Najpre dodajte nivo. | Dodajte nivo u {{ui:Nivoi}} ili kliknite niži nivo |
| Izaberite drugi presek za drugi kraj. | Kliknuli ste istu tačku dva puta |
| Dva kraja su ista tačka. | U {{ui:Dodaj prema mreži}}, izbori "From" i "To" su isti |
| Dodajte linije mreže sleva da biste postavili elemente. | Model nema linije mreže u jednom pravcu |
| Nepoznat profil "…" | Profil nije u katalogu ni u prilagođenim profilima modela. Izaberite jedan sa spiska |
| Unesite broj. | Polje za broj je ostalo prazno ili ima tekst |

## Veze se ne mogu napraviti

### "Ova greda se ne završava na liniji stuba."

Krajnji limovi zahtevaju da kraj grede bude tačno na liniji vertikalnog stuba, između njegovog dna i vrha (u okviru 1 mm). Proverite {{ui:Krajevi (x, y, z mm)}} grede i položaj stuba.

### "Ova greda upada u rebro stuba ili je pod uglom"

Ili u {{ui:Problemi}}: "Grede koje upadaju u rebro stuba još nisu urađene: okrenite stub za 90° ili upotrebite drugu vezu."

Greda upada u rebro stuba. Izaberite stub i postavite {{ui:Obrtanje (°)}} na 90, pa probajte ponovo. Kosi spojevi još nisu urađeni.

### "Krajnji limovi se prave samo za vodoravne grede (ova greda je nagnuta)."

Oba kraja grede moraju biti na istoj visini.

### "Krajnji limovi zahtevaju da greda stoji uspravno (obrtanje 0)."

Vratite {{ui:Obrtanje (°)}} grede na 0.

### "Krajnji limovi zahtevaju I-profil grede." / "Krajnji limovi zahtevaju I-profil stuba."

Krajnje limove primaju samo I-profili (W, IPE, HEA, HEB ili prilagođeni I).

### "Kraj grede više nije na liniji stuba."

Pomerili ste gredu ili stub posle dodavanja veze. Vratite je nazad ili obrišite vezu.

### "Veze su ovaj element svele na nulu."

Veze na oba kraja seku element unazad više nego što mu je dužina, na primer vrlo kratka greda između dva visoka stuba. Proverite krajeve elementa i debljinu lima.

### "Nema drugih sličnih spojeva … bez veze."

{{ui:Slično}} kopira samo na spojeve sa istim profilom grede, istim profilom stuba i istom vrstom veze, greda u pojas, koji još nemaju vezu.

### "Oba kraja već imaju veze." / "Ovaj stub već ima temeljnu ploču."

Izaberite postojeću vezu da je promenite ili je prvo obrišite.

## Upozorenja na kartici Problemi

Upozorenja ne zaustavljaju izradu veze ili temelja; traže da ih proverite. Upozorenja o ivicama i razmacima koriste najmanje vrednosti iz EN 1993-1-8, tabela 3.3 (ivica 1,2 × rupa, korak 2,2 × rupa, razmak linija 2,4 × rupa). Ako vaš projekat koristi druga pravila, upozorenje možda ne važi; DetailCraft ne projektuje veze.

"deo rupe je van kraja dela" znači da je x rupe manji od 0 ili veći od dužine seckanja. Imajte na umu da je x od početka sečenja, posle što veze skrate deo.

## Izmene temelja se odbijaju

| Poruka | Šta uraditi |
|---|---|
| Zaštitni sloj ne ostavlja mesta za šipke u ovom temelju. | Napravite temelj većim ili zaštitni sloj manjim |
| Temelj je prepliitak za dva sloja šipki unutar zaštitnog sloja. | Napravite ga dublji ili smanjite zaštitni sloj |
| Početne šipke ne staju u temelj sa zaštitnim slojem od 75 mm. | Manje početnih šipki, gušći razmak ili veći temelj |
| Razmak šipki mora biti 50–1000 mm. | Unesite razmak u tom opsegu |
| Dužina mora biti 300–50000 mm. | Dimenzije temelja imaju ograničenja: dužina i širina 300 do 50000, dubina 150 do 10000 |

## Mreže i nivoi se odbijaju

| Poruka | Šta uraditi |
|---|---|
| Numerisane mreže: unesite jedan razmak između svakog para linija (4). | Prebrojte razmake: pet linija znači četiri razmaka |
| Mreže sa slovima: razmaci moraju biti pozitivni milimetri. | Bez nula, negativnih vrednosti ili teksta |
| Numerisane mreže: oznake mreže moraju biti različite. | Dve linije imaju istu oznaku |
| Najviše 60 linija mreže u svakom pravcu. | Podelite model |
| Zadržite bar jedan nivo. | Uklonili ste sve redove nivoa |
| Svaki nivo mora imati naziv. / Dva nivoa se zovu "…". | Dajte svakom nivou drugi naziv |

## Otvaranje datoteke ne uspeva

| Poruka | Uzrok |
|---|---|
| DetailCraft otvara sopstvene modele (.detailcraft.json). Uvoz IFC još nije urađen. | Datoteka nije `.json` datoteka |
| Ovo nije DetailCraft model (nije JSON). | Datoteka je oštećena ili je neki drugi JSON |
| Ovo nije DetailCraft model. | JSON datoteka iz drugog programa |
| Ovaj model je sačuvao noviji DetailCraft (format 2). | Otvorite ga u novijem DetailCraft-u koji ga je sačuvao |
| Ta datoteka je prevelika za DetailCraft model. | Preko 50 MB |

Kada se datoteka otvori uz upozorenja poput "2 elementa nisu bila ispravna i izostavljena su.", ostatak modela je u redu. Ne prepisujte originalnu datoteku dok ne proverite šta je izostavljeno.

## Izvozi

| Poruka | Uzrok |
|---|---|
| Još nema ničega za izvoz. | {{ui:IFC}} sa praznim modelom |
| Nema I-profila ili limova za pisanje NC datoteka. | U modelu su samo kanali, uglovnici ili cevi |
| Nije upisano (za sada samo I-profili i limovi): … | Te oznake nisu I-profili ni limovi; ostali su upisani |
| Nema temelja, pa nema šipki za spisak. | {{ui:Savijanje}} bez temelja |
| … karakter(a) van fonta PDF-a štampano kao "?". | Naziv modela ili kvalitet ima znakove koje PDF font nema |

{{ui:Radionički crtež}} zasivljeno: model još nema delova.

## Preuzimanja se ne pojavljuju

Svako čuvanje i izvoz je preuzimanje u pregledaču. Proverite listu preuzimanja u pregledaču. Ako pregledač pita pre preuzimanja više datoteka ili blokira preuzimanja sa ovog sajta, dozvolite ih. U Safariju proverite dugme za preuzimanja na alatnoj traci.

## Tasteri ne rade

- Kursor je u polju za tekst ili broj: tasteri alata i {{key:Delete}} se tu ignorišu da biste mogli da kucate. Pritisnite {{key:Tab}} ili kliknite prikaz.
- Otvoren je dijalog: prvo ga zatvorite.
- Pregledač ima tastaturu (na primer adresnu traku): kliknite unutar DetailCraft-a.
- {{key:Ctrl+Shift+F}} koristi Control i na Mac-u.

## Problemi van mreže

Dugme {{ui:Sačuvaj za rad van mreže}} na traci aplikacije pokazuje u kakvom je stanju kopija za rad van mreže. Kako čuvanje radi: [Rad van mreže](common:offline).

| Dugme glasi | Šta znači | Šta uraditi |
|---|---|---|
| {{ui:Sačuvaj za rad van mreže}} | Još nema kopije za rad van mreže u ovom pregledaču | Izaberite ga dok ste na mreži |
| Čuvanje 5 od 20 | Čuvanje je u toku | Sačekajte {{ui:Spremno za rad van mreže}}; ostavite karticu otvorenu |
| {{ui:Spremno za rad van mreže}} | DetailCraft, njegov 3D prikaz, svaki izvoz i ova pomoć rade bez veze | Ništa. Kliknite ga za {{ui:Sačuvaj ponovo (preuzmi najnoviju verziju)}} ili {{ui:Ukloni kopiju za rad van mreže}} |
| {{ui:Nije moguće sačuvati}} | Neke datoteke nisu preuzete | Proverite vezu i kliknite ga da pokušate ponovo |
| {{ui:Rad van mreže nije dostupan}} | Ovaj prozor ne može da čuva kopiju za rad van mreže: privatni prozori i neki upravljani računari to blokiraju | Koristite običan prozor ili radite na mreži |

Ako ste van mreže i dugme ne glasi {{ui:Spremno za rad van mreže}}, nemojte osvežavati niti zatvarati karticu: ono što je učitano i dalje radi. Sačuvajte model sa {{key:Mod+S}} i sačekajte dok opet ne budete na mreži.

## Nesačuvan rad

Ako pregledač pita da li želite da napustite stranicu, DetailCraft ima nesačuvane izmene. Izaberite da ostanete, pa pritisnite {{key:Mod+S}}. DetailCraft ne može da povrati model posle zatvaranja kartice.

## I dalje ste zaglavljeni

Zapišite šta ste uradili i tačnu poruku, pa nam javite preko [stranice za podršku](https://getcadcraft.com/support).
