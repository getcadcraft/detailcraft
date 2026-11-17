---
title: Rješavanje problema
summary: Šta znače poruke DetailCraft-a i šta raditi, od nedostajućeg 3D prikaza do spojeva koji se ne mogu izgraditi.
keywords: problem, greška, ne radi, pomoć, popravka, poruka, odbijeno, webgl, prazno, upozorenje, ne može, pitanje
from: f8c3b2b1
---

Većina odbijanja je objašnjena u statusnoj traci pri dnu ekrana ili na kartici {{ui:Problemi}}. Prvo pročitajte to. Poruke ispod su navedene onako kako ih DetailCraft prikazuje.

## Nedostaje 3D prikaz

**"Ovaj pretraživač nije mogao pokrenuti 3D grafiku (WebGL). Model, izvještaji i izvozi i dalje rade."**

Pretraživač nije mogao pokrenuti WebGL, 3D grafiku koju DetailCraft crta.

1. Ažurirajte pretraživač na najnoviju verziju.
2. Uključite hardversko ubrzanje i ponovo pokrenite pretraživač (vidi dolje).
3. Ažurirajte upravljački program za grafiku ili probajte drugi pretraživač. Udaljene radne površine i virtuelne mašine često nemaju WebGL.
4. U međuvremenu možete i dalje raditi: postavljajte elemente pomoću obrasca {{ui:Dodaj po mreži}}, čitajte izvještaje i izvozite. Samo klik u prikazu zahtijeva WebGL.

:::chromium
Da uključite hardversko ubrzanje, otvorite **Postavke, Sistem** i uključite **Koristi ubrzanje grafike kada je dostupno**, pa ponovo pokrenite.
:::

:::firefox
Da uključite hardversko ubrzanje, otvorite **Postavke, Opće, Performanse**, isključite **Koristi preporučene postavke performansi** i označite **Koristi hardversko ubrzanje kada je dostupno**. Ponovo pokrenite Firefox.
:::

:::safari
Safari ima WebGL uključen po zadanom. Ažurirajte macOS ako se prikaz i dalje ne pokreće i provjerite da neka ekstenzija to ne blokira.
:::

Više u [Pretraživači i računari](common:browsers).

## Klik u prikazu ne radi ništa

- **Nema presjeka blizu klika.** Alati za postavljanje se hvataju samo za presjeke mreže. Klik dalje od svih tačkica ne radi ništa. Približite se dok se tačkica ne upali.
- **Alat je {{ui:Odaberi}} a kliknuli ste prazan prostor.** To briše izbor.
- **Vukli ste.** Pritisak i otpuštanje više od nekoliko piksela udaljeni su prevlačenje: ono okreće ili pomjera prikaz.
- **Dio je odsječen.** U {{ui:Osnova}} i {{ui:Izgled}}, čelik izvan reza je skriven i ne može se kliknuti. Prebacite se na {{ui:3D}}.
- **Presjek je na pogrešnom nivou.** U {{ui:3D}}, presjeci na više nivoa mogu se preklapati na ekranu; klik uzima najbliži. Koristite {{ui:Osnova}} ili {{ui:Izgled}}.

## Poruke pri postavljanju

| Poruka | Šta uraditi |
|---|---|
| Iznad Nivoa 2 nema nivoa do kojeg stub može doći. Prvo dodajte nivo. | Dodajte nivo u {{ui:Nivoi}}, ili kliknite niži nivo |
| Odaberite drugi presjek za drugi kraj. | Kliknuli ste istu tačku dvaput |
| Dva kraja su ista tačka. | U {{ui:Dodaj po mreži}}, izbori "Od" i "Do" su isti |
| Dodajte linije mreže lijevo da postavite elemente. | Model nema linije mreže u jednom smjeru |
| Nepoznat profil "…" | Profil nije u katalogu ili u prilagođenim profilima modela. Izaberite jedan sa liste |
| Unesite broj. | Polje za broj je ostalo prazno ili ima tekst |

## Spojevi se ne mogu izgraditi

### "Ova greda ne završava na liniji stuba."

Krajnje ploče zahtijevaju da kraj grede bude tačno na liniji vertikalnog stuba, između njegovog dna i vrha (unutar 1 mm). Provjerite {{ui:Krajevi (x, y, z mm)}} grede i položaj stuba.

### "Ova greda se spaja na rebro stuba ili pod uglom"

Ili u {{ui:Problemi}}: "Grede koje se spajaju na rebro stuba još nisu napravljene: okrenite stub za 90° ili koristite drugi spoj."

Greda se utiskuje u rebro stuba. Izaberite stub i postavite {{ui:Rotacija (°)}} na 90, pa pokušajte ponovo. Kosi spojevi se ne prave.

### "Krajnje ploče su izgrađene samo za nivelisane grede (ova greda je nagnuta)."

Oba kraja grede moraju biti na istoj visini.

### "Krajnje ploče zahtijevaju gredu uspravno (rotacija 0)."

Vratite {{ui:Rotacija (°)}} grede na 0.

### "Krajnje ploče zahtijevaju I-profil gredu." / "Krajnje ploče zahtijevaju I-profil stub."

Samo I-profili (W, IPE, HEA, HEB ili prilagođeni I) primaju krajnje ploče.

### "Kraj grede više nije na liniji stuba."

Pomjerili ste gredu ili stub nakon dodavanja spoja. Vratite je nazad ili obrišite spoj.

### "Spojevi su ovaj element sveli na ništa."

Spojevi na oba kraja skraćuju element više nego što je njegova dužina, na primjer vrlo kratka greda između dva duboka stuba. Provjerite krajeve elementa i debljinu ploče.

### "Nema drugih sličnih spojeva … bez spoja."

{{ui:Slično}} kopira samo na spojeve sa istim profilom grede, istim profilom stuba i istom vrstom spoja (greda u prirubnicu), koji još nemaju spoj.

### "Oba kraja već imaju spojeve." / "Ovaj stub već ima temeljnu ploču."

Izaberite postojeći spoj da ga promijenite, ili ga prvo obrišite.

## Upozorenja na kartici Problemi

Upozorenja ne zaustavljaju spoj ili temelj; traže da ih provjerite. Upozorenja za ivicu i razmak koriste minimume EN 1993-1-8 Tabela 3.3 (ivica 1.2 × rupa, korak 2.2 × rupa, razmak 2.4 × rupa). Ako vaš projekt koristi druga pravila, upozorenje možda ne važi; DetailCraft ne projektuje spojeve.

"rupa je van kraja dijela" znači da je x rupe manji od 0 ili veći od dužine reza. Zapamtite da je x mjeren od početka reza, nakon što spojevi skrate dio.

## Izmjene temelja su odbijene

| Poruka | Šta uraditi |
|---|---|
| Zaštitni sloj ne ostavlja mjesta za šipke u ovom temelju. | Napravite temelj većim ili zaštitni sloj manjim |
| Temelj je previše plitak za dva sloja šipki unutar zaštitnog sloja. | Napravite ga dubljim ili smanjite zaštitni sloj |
| Čekajuće šipke ne staju u temelj sa zaštitnim slojem od 75 mm. | Manje čekajućih šipki, gušći razmak ili veći temelj |
| Razmak šipki mora biti 50–1000 mm. | Unesite razmak u tom opsegu |
| Dužina mora biti 300–50000 mm. | Dimenzije temelja imaju ograničenja: dužina i širina od 300 do 50000, dubina od 150 do 10000 |

## Mreže i nivoi su odbijeni

| Poruka | Šta uraditi |
|---|---|
| Numerisane mreže: unesite jedan razmak između svakog para linija (4). | Prebrojite razmake: pet linija daje četiri razmaka |
| Slovne mreže: razmaci moraju biti pozitivni milimetri. | Bez nula, negativnih vrijednosti ili teksta |
| Numerisane mreže: oznake mreže moraju biti različite. | Dvije linije imaju istu oznaku |
| Najviše 60 linija mreže u svakom smjeru. | Podijelite model |
| Zadržite bar jedan nivo. | Uklonili ste svaki red nivoa |
| Svaki nivo mora imati ime. / Dva nivoa se zovu "…". | Dajte svakom nivou različito ime |

## Otvaranje datoteke ne uspijeva

| Poruka | Uzrok |
|---|---|
| DetailCraft otvara svoje modele (.detailcraft.json). Uvoz IFC još nije napravljen. | Datoteka nije `.json` datoteka |
| Ovo nije DetailCraft model (nije JSON). | Datoteka je oštećena ili je neki drugi JSON |
| Ovo nije DetailCraft model. | JSON datoteka iz drugog programa |
| Ovaj model je sačuvao noviji DetailCraft (format 2). | Otvorite ga u novijem DetailCraft-u koji ga je sačuvao |
| Ta datoteka je prevelika da bi bila DetailCraft model. | Preko 50 MB |

Kada se datoteka otvori sa upozorenjima kao "2 members were not valid and left out.", ostatak modela je u redu. Ne spremajte preko originala dok ne provjerite šta je izostavljeno.

## Izvozi

| Poruka | Uzrok |
|---|---|
| Još nema ničega za izvoz. | {{ui:IFC}} sa praznim modelom |
| Nema I-profila ili ploča za pisanje NC datoteka. | Samo kanali, uglovnici ili cijevi u modelu |
| Nije zapisano (za sada samo I-profili i ploče): … | Ove oznake nisu I-profili ili ploče; ostale su zapisane |
| Nema temelja, pa nema šipki za raspored. | {{ui:Savijanje}} bez temelja |
| … znak(ova) izvan PDF fonta ispisano kao "?". | Ime modela ili kvalitet ima znakove koje PDF font nema |

{{ui:Radionički crtež}} je zasivljeno: model još nema dijelova.

## Preuzimanja se ne pojavljuju

Svako spremanje i izvoz je preuzimanje u pretraživaču. Provjerite listu preuzimanja pretraživača. Ako pretraživač pita prije preuzimanja više datoteka ili blokira preuzimanja sa ovog sajta, dozvolite ih. U Safariju provjerite dugme preuzimanja na alatnoj traci.

## Tasteri ne rade ništa

- Kursor je u polju za tekst ili broj: tasteri alata i {{key:Delete}} se tamo ignorišu da biste mogli kucati. Pritisnite {{key:Tab}} ili kliknite prikaz.
- Otvoren je dijalog: prvo ga zatvorite.
- Pretraživač ima tastaturu (na primjer adresnu traku): kliknite unutar DetailCraft-a.
- {{key:Ctrl+Shift+F}} koristi Control čak i na Mac-u.

## Problemi sa radom van mreže

Dugme {{ui:Spasi za rad van mreže}} u traci aplikacije pokazuje u kakvom je stanju kopija za rad van mreže. Kako spremanje radi: [Rad van mreže](common:offline).

| Dugme glasi | Šta znači | Šta uraditi |
|---|---|---|
| {{ui:Spasi za rad van mreže}} | Još nema kopije za rad van mreže u ovom pretraživaču | Izaberite je dok ste na mreži |
| Spašavanje 5 od 20 | Spremanje je u toku | Sačekajte {{ui:Spremno za rad van mreže}}; ostavite karticu otvorenu |
| {{ui:Spremno za rad van mreže}} | DetailCraft, njegov 3D prikaz, svaki izvoz i ova pomoć rade bez veze | Ništa. Kliknite za {{ui:Spasi ponovo (preuzmi najnoviju verziju)}} ili {{ui:Ukloni kopiju za rad van mreže}} |
| {{ui:Nije moguće spasiti}} | Neke datoteke se nisu preuzele | Provjerite vezu i kliknite da pokušate ponovo |
| {{ui:Rad van mreže nije dostupan}} | Ovaj prozor ne može čuvati kopiju za rad van mreže: privatni prozori i neki upravljani računari to blokiraju | Koristite običan prozor ili radite na mreži |

Ako ste van mreže i dugme ne glasi {{ui:Spremno za rad van mreže}}, nemojte ponovo učitavati niti zatvarati karticu: ono što je učitano nastavlja raditi. Spasite model sa {{key:Mod+S}} i sačekajte dok ne budete ponovo na mreži.

## Nespremljen rad

Ako pretraživač pita da li želite napustiti stranicu, DetailCraft ima nespremljene promjene. Izaberite da ostanete, pa pritisnite {{key:Mod+S}}. DetailCraft ne može povratiti model nakon što se kartica zatvori.

## I dalje ne ide

Zabilježite šta ste uradili i tačnu poruku, pa nam javite preko [stranice za podršku](https://getcadcraft.com/support).
