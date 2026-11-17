---
title: Rješavanje problema
summary: Što znače poruke programa DetailCraft i što učiniti, od nedostajućeg 3D prikaza do spojeva koji se ne mogu izraditi.
keywords: problem, pogreška, ne radi, pomoć, popravak, poruka, odbijeno, webgl, prazno, upozorenje, ne može, problem
from: f8c3b2b1
---

Većina odbijanja objašnjena je u statusnoj traci pri dnu zaslona ili na kartici {{ui:Problemi}}. Pročitajte ih prvo. Poruke u nastavku navedene su onako kako ih DetailCraft prikazuje.

## 3D prikaz nedostaje

**"Ovaj preglednik nije mogao pokrenuti 3D grafiku (WebGL). Model, izvješća i izvozi i dalje rade."**

Preglednik nije mogao pokrenuti WebGL, 3D grafiku kojom DetailCraft crta.

1. Ažurirajte preglednik na najnoviju verziju.
2. Uključite hardversko ubrzanje i ponovno pokrenite preglednik (vidi dolje).
3. Ažurirajte upravljački program za grafiku ili isprobajte drugi preglednik. Udaljene radne površine i virtualni strojevi često nemaju WebGL.
4. U međuvremenu možete raditi: postavite elemente obrascem {{ui:Dodaj po mreži}}, čitajte izvješća i izvozite. Samo klikanje u prikazu treba WebGL.

:::chromium
Za uključivanje hardverskog ubrzanja otvorite **Postavke, Sustav** i uključite **Koristi ubrzanje grafike kad je dostupno**, zatim ponovno pokrenite preglednik.
:::

:::firefox
Za uključivanje hardverskog ubrzanja otvorite **Postavke, Općenito, Performanse**, isključite **Koristi preporučene postavke performansi** i označite **Koristi hardversko ubrzanje kad je dostupno**. Ponovno pokrenite Firefox.
:::

:::safari
Safari ima WebGL uključen prema zadanim postavkama. Ažurirajte macOS ako se prikaz i dalje ne pokreće i provjerite da ga nijedno proširenje ne blokira.
:::

Više u [Preglednici i računala](common:browsers).

## Klik u prikazu ne radi ništa

- **Nema sjecišta blizu klika.** Alati za postavljanje hvataju se samo na sjecišta mreže. Klik podalje od svih točkica ne radi ništa. Približite se dok se točkica ne upali.
- **Alat je {{ui:Odaberi}} i kliknuli ste prazan prostor.** To poništava odabir.
- **Povukli ste.** Pritisak i otpuštanje više od nekoliko piksela udaljeni su povlačenje: zakreće ili pomiče prikaz.
- **Dio je odrezan.** U {{ui:Tlocrt}} i {{ui:Pročelje}} čelik izvan presjeka je skriven i ne može se kliknuti. Prebacite se na {{ui:3D}}.
- **Sjecište je na pogrešnoj razini.** U {{ui:3D}} sjecišta na više razina mogu se preklapati na zaslonu; klik uzima najbliže. Koristite {{ui:Tlocrt}} ili {{ui:Pročelje}}.

## Poruke pri postavljanju

| Poruka | Što učiniti |
|---|---|
| Iznad Razine 2 nema razine do koje stup može doseći. Prvo dodajte razinu. | Dodajte razinu u {{ui:Razine}} ili kliknite nižu razinu |
| Odaberite drugo sjecište za drugi kraj. | Kliknuli ste dvaput istu točku |
| Dva kraja su ista točka. | U {{ui:Dodaj po mreži}} odabiri "Od" i "Do" su isti |
| Dodajte linije mreže s lijeve strane za postavljanje elemenata. | Model nema linija mreže u jednom smjeru |
| Nepoznat profil "…" | Profil nije u katalogu ni u prilagođenim profilima modela. Odaberite jedan s popisa |
| Upišite broj. | Polje za broj je prazno ili sadrži tekst |

## Spojevi se ne mogu izraditi

### "Ova greda ne završava na liniji stupa."

Čeone ploče trebaju da kraj grede bude točno na liniji okomitog stupa, između njegovog dna i vrha (unutar 1 mm). Provjerite {{ui:Krajevi (x, y, z mm)}} grede i položaj stupa.

### "Ova greda dodiruje hrbat stupa ili je pod kutom"

Ili na kartici {{ui:Problemi}}: "Grede koje ulaze u hrbat stupa još nisu izrađene: zakrenite stup za 90° ili upotrijebite drugi spoj."

Greda ulazi u hrbat stupa. Odaberite stup i postavite {{ui:Zakretanje (°)}} na 90, zatim pokušajte ponovno. Kosi spojevi se još ne izrađuju.

### "Čeone ploče se izrađuju samo za vodoravne grede (ova greda je nagnuta)."

Oba kraja grede moraju biti na istoj visini.

### "Čeone ploče trebaju gredu uspravno (zakretanje 0)."

Vratite {{ui:Zakretanje (°)}} grede na 0.

### "Čeone ploče trebaju I-profil grede." / "Čeone ploče trebaju I-profil stupa."

Samo I-profili (W, IPE, HEA, HEB ili prilagođeni I) primaju čeone ploče.

### "Kraj grede više nije na liniji stupa."

Pomaknuli ste gredu ili stup nakon dodavanja spoja. Vratite ga ili obrišite spoj.

### "Spojevi su ovaj element skratili na nulu."

Spojevi na oba kraja skratili su element više nego što je njegova duljina, npr. vrlo kratka greda između dva visoka stupa. Provjerite krajeve elementa i debljinu ploče.

### "Nema drugih sličnih spojeva … bez spoja."

{{ui:Slično}} kopira samo na spojeve s istim profilom grede, istim profilom stupa i istom vrstom spoja (greda u pojasnicu), koji još nemaju spoj.

### "Oba kraja već imaju spojeve." / "Ovaj stup već ima temeljnu ploču."

Odaberite postojeći spoj da biste ga promijenili ili ga prvo obrišite.

## Upozorenja na kartici Problemi

Upozorenja ne zaustavljaju izradu spoja ili temelja; traže da ih provjerite. Upozorenja o rubovima i razmacima koriste najmanje vrijednosti iz EN 1993-1-8, tablica 3.3 (rub 1.2 × rupa, korak 2.2 × rupa, razmak 2.4 × rupa). Ako vaš projekt koristi druga pravila, upozorenje možda ne vrijedi; DetailCraft ne projektira spojeve.

"rupa je izvan kraja dijela" znači da je x rupe manji od 0 ili veći od duljine reza. Zapamtite da je x mjeren od početka reza, nakon što spojevi skrate dio.

## Promjene temelja su odbijene

| Poruka | Što učiniti |
|---|---|
| Zaštitni sloj ne ostavlja mjesta za šipke u ovom temelju. | Povećajte temelj ili smanjite zaštitni sloj |
| Temelj je preplitak za dva sloja šipki unutar zaštitnog sloja. | Učinite ga dubljim ili smanjite zaštitni sloj |
| Ispusti armature ne stanu u temelj uz 75 mm zaštitnog sloja. | Manje ispusta, gušći razmak ili veći temelj |
| Razmak šipki mora biti 50–1000 mm. | Upišite razmak u tom rasponu |
| Duljina mora biti 300–50000 mm. | Dimenzije temelja imaju ograničenja: duljina i širina 300 do 50000, dubina 150 do 10000 |

## Mreže i razine su odbijene

| Poruka | Što učiniti |
|---|---|
| Numerirane mreže: unesite jedan razmak između svakog para linija (4). | Prebrojite razmake: pet linija znači četiri razmaka |
| Slovne mreže: razmaci moraju biti pozitivni milimetri. | Bez nula, negativnih vrijednosti ili teksta |
| Numerirane mreže: oznake mreža moraju biti različite. | Dvije linije imaju istu oznaku |
| Najviše 60 linija mreže u svakom smjeru. | Podijelite model |
| Ostavite barem jednu razinu. | Uklonili ste svaki redak razine |
| Svaka razina mora imati ime. / Dvije razine nose ime "…". | Dajte svakoj razini različito ime |

## Otvaranje datoteke ne uspijeva

| Poruka | Uzrok |
|---|---|
| DetailCraft otvara vlastite modele (.detailcraft.json). Uvoz IFC-a još nije izrađen. | Datoteka nije `.json` datoteka |
| Ovo nije DetailCraft model (nije JSON). | Datoteka je oštećena ili je neki drugi JSON |
| Ovo nije DetailCraft model. | JSON datoteka iz drugog programa |
| Ovaj model spremio je noviji DetailCraft (format 2). | Otvorite ga u novijem DetailCraftu koji ga je spremio |
| Ta datoteka je prevelika za DetailCraft model. | Preko 50 MB |

Kada se datoteka otvori s upozorenjima poput "2 elementa nisu ispravna i izostavljena su.", ostatak modela je u redu. Ne spremajte preko izvorne datoteke dok ne provjerite što je izostavljeno.

## Izvoz

| Poruka | Uzrok |
|---|---|
| Još nema ničega za izvoz. | {{ui:IFC}} s praznim modelom |
| Nema I-profila ni ploča za pisanje NC datoteka. | Model sadrži samo U-profile, kutnike ili cijevi |
| Nije zapisano (za sada samo I-profili i ploče): … | Te oznake nisu I-profili ni ploče; ostali su zapisani |
| Nema temelja, pa nema šipki za raspored. | {{ui:Plan savijanja}} bez temelja |
| … znak(ova) izvan PDF fonta ispisano je kao "?". | Naziv modela ili razred sadrži znakove koje PDF font nema |

{{ui:Radionički crtež}} je sivo: model još nema dijelova.

## Preuzimanja se ne pojavljuju

Svako spremanje i izvoz je preuzimanje preglednika. Provjerite popis preuzimanja u pregledniku. Ako preglednik pita prije preuzimanja nekoliko datoteka ili blokira preuzimanja s ove stranice, dopustite ih. U Safariju provjerite gumb preuzimanja na alatnoj traci.

## Tipke ne rade ništa

- Kursor je u polju za tekst ili broj: tipke alata i {{key:Delete}} se tamo ignoriraju kako biste mogli tipkati. Pritisnite {{key:Tab}} ili kliknite prikaz.
- Otvoren je dijaloški okvir: prvo ga zatvorite.
- Preglednik ima tipkovnicu (npr. adresnu traku): kliknite unutar DetailCrafta.
- {{key:Ctrl+Shift+F}} koristi Control čak i na Macu.

## Problemi s radom izvan mreže

Gumb {{ui:Spremi za offline}} u traci aplikacije pokazuje stanje offline kopije. Kako spremanje radi: [Rad izvan mreže](common:offline).

| Gumb prikazuje | Što znači | Što učiniti |
|---|---|---|
| {{ui:Spremi za offline}} | Još nema offline kopije u ovom pregledniku | Odaberite dok ste na mreži |
| Spremanje 5 od 20 | Spremanje je u tijeku | Pričekajte {{ui:Spremno za offline}}; ostavite karticu otvorenu |
| {{ui:Spremno za offline}} | DetailCraft, njegov 3D prikaz, svi izvozi i ova pomoć rade bez veze | Ništa. Kliknite za {{ui:Spremi ponovno (preuzmi najnoviju verziju)}} ili {{ui:Ukloni offline kopiju}} |
| {{ui:Spremanje nije uspjelo}} | Neke datoteke nisu preuzete | Provjerite vezu i kliknite za ponovni pokušaj |
| {{ui:Offline nije dostupan}} | Ovaj prozor ne može čuvati offline kopiju: privatni prozori i neka upravljana računala to blokiraju | Upotrijebite običan prozor ili radite na mreži |

Ako ste izvan mreže i gumb ne piše {{ui:Spremno za offline}}, nemojte ponovno učitavati ni zatvarati karticu: ono što je učitano nastavlja raditi. Spremite model s {{key:Mod+S}} i pričekajte dok ponovno niste na mreži.

## Nespremljene promjene

Ako preglednik pita želite li napustiti stranicu, DetailCraft ima nespremljene promjene. Odaberite ostanak, zatim pritisnite {{key:Mod+S}}. DetailCraft ne može oporaviti model nakon što je kartica zatvorena.

## Još uvijek nije riješeno

Zapišite što ste učinili i točnu poruku te nam javite preko [stranice za podršku](https://getcadcraft.com/support).
