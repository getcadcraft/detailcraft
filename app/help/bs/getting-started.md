---
title: Početak rada s DetailCraft
summary: Šta DetailCraft danas radi, kako ga otvoriti i prvi model od mreža do radioničkog crteža za deset minuta.
keywords: početak, prvi model, uvod, detaljisanje čelika, armatura, brzi početak, vodič, pregled
from: 3682c0d8
---

DetailCraft je aplikacija za detaljisanje čelika i armature iz porodice CadCraft. Pravite 3D model čeličnog okvira na mrežama i nivoima, povezujete ga i dobijate ono što radionica treba: oznake dijelova i sklopova, spisak materijala, radioničke crteže pojedinačnih dijelova, DSTV NC datoteke, IFC model i spisak savijanja za temelje.

Ovo je rana verzija. Radi kratak spisak stvari pažljivo, a ne sve odjednom. Pročitajte [Šta još nije izrađeno](topic:not-built-yet) prije nego planirate stvarni rad oko toga.

## Šta danas radi

- Mreže i nivoi koje unosite, u milimetrima.
- Stubovi, grede, dijagonale i limovi iz objavljenih kataloga profila (AISC W, S, C, L, HSS i Pipe; evropski IPE, HEA, HEB i UPN), plus vaši vlastiti parametarski profili.
- Dvije veze: čeona ploča zavrtnjima pričvršćena za gredu i pojasnicu stuba, i temeljna ploča stuba s četiri sidrene šipke. Svaka se može kopirati na svaki sličan spoj.
- Rupe i izrezi unijeti po položaju.
- Pravougaoni plošni temelji s donjom mrežom i početnim šipkama.
- Oznake dijelova i sklopova koje se same ažuriraju nakon svake promjene.
- Izvozi: IFC4, DSTV NC datoteke (I-profili i limovi), spisak materijala kao CSV, spisak savijanja kao CSV i PDF radioničkog crteža jednog dijela.

## Otvorite DetailCraft

1. Otvorite DetailCraft u desktop pregledaču: Chrome, Edge, Firefox ili Safari. Vidi [Pregledači i računari](common:browsers).
2. Sačekajte da se ekran popuni. Statusna traka na dnu kaže "Spremno. Otvorite primjer ili postavite mreže i nivoe, pa počnite postavljati elemente."

Prikaz modela treba 3D grafiku (WebGL). Ako sredina ekrana kaže "Ovaj pregledač ne može pokrenuti 3D grafiku (WebGL)", vidi [Rješavanje problema](topic:troubleshooting#the-3d-view-is-missing).

:::note
Vaši modeli ostaju na vašem računaru. Otvaranje modela čita ga u pregledaču, a spašavanje preuzima datoteku. Ništa se ne otprema. Spremanje u oblak još nije dostupno. Vidi [Gdje idu vaše datoteke](common:your-files). Da kasnije koristite DetailCraft bez veze, jednom dok ste na mreži izaberite {{ui:Spasi za rad van mreže}} u traci aplikacije; vidi [Rad van mreže](common:offline).
:::

:::offline
Niste na mreži. DetailCraft radi bez veze samo ako je prvo spašen za rad van mreže: dugme {{ui:Spasi za rad van mreže}} u traci aplikacije tada piše {{ui:Spremno za rad van mreže}}. Vidi [Rad van mreže](common:offline).
:::

## Prvo pogledajte primjer

Najbrži način da vidite šta DetailCraft pravi je primjer okvira.

1. Odaberite {{ui:Primjer}} u grupi {{ui:Datoteka}} na traci s alatima.
2. Prikaz pokazuje okvir s dva polja: šest stubova s temeljnim pločama, četiri grede s čeonim pločama, jednu dijagonalu i sedam temelja s armaturom.
3. Kliknite gredu. Panel {{ui:Svojstva}} s desne strane pokazuje njenu oznaku dijela, dužinu reza, težinu i rupe koje su napravile čeone ploče.
4. Otvorite karticu {{ui:Spisak materijala}} na dnu da vidite svaku oznaku dijela s brojem i težinom.

Vodič [Istražite primjer okvira](topic:sample-model) prolazi kroz njega dio po dio.

## Vaš prvi model

Novi model već ima mreže 1 do 3 po A do B na 6000 mm i dva nivoa: Nivo 1 na 0 i Nivo 2 na 4000.

1. Odaberite {{ui:Novi}}. Ako trenutni model ima promjene, DetailCraft pita želite li ih prvo spasiti.
2. Odaberite {{ui:Osnova}} iznad prikaza. Lista nivoa pored nje bira Nivo 1.
3. Odaberite {{ui:Stub}} na traci s alatima ili pritisnite {{key:C}}.
4. Kliknite presjek mreže A/1. Stub W12x50 se pojavi od Nivoa 1 do Nivoa 2. Statusna traka kaže gdje je postavljen.
5. Kliknite B/1, A/2 i B/2 da postavite još tri.
6. Izaberite Nivo 2 u listi nivoa, zatim odaberite {{ui:Greda}} ili pritisnite {{key:B}}.
7. Kliknite A/1, zatim A/2. Greda W16x26 spaja vrhove dva stuba, a njen gornji nivo čelika leži na nivou.
8. Pritisnite {{key:Esc}} da se vratite na {{ui:Odaberi}}, zatim kliknite gredu.
9. Odaberite {{ui:Čeone ploče}} u grupi {{ui:Povezivanje}}. Oba kraja dobijaju čeonu ploču pričvršćenu zavrtnjima, greda se skraćuje da stane, a prva čeona ploča je sada izabrana.
10. Ponovo kliknite gredu.
11. Odaberite {{ui:Radionički crtež}} u grupi {{ui:Izlaz}}. Otvara se pregled radioničkog crteža grede. Odaberite {{ui:Preuzmi PDF}}.
12. Pritisnite {{key:Mod+S}} da spasite model. Pregledač preuzima `Untitled.detailcraft.json`.

Preimenujte model u polju {{ui:Naziv}} u gornjem lijevom uglu prije spašavanja, da datoteka i svaki izvoz nose njegov naziv.

## Gdje dalje

- [Pregled ekrana](topic:workspace)
- [Postavite mreže i nivoe](topic:grids-and-levels)
- [Krećite se po 3D prikazu](topic:navigate-3d), mišem, touchpadom ili ekranom osjetljivim na dodir
- [Dolazak iz drugog softvera za detaljisanje](topic:coming-from), ako poznajete neki veliki paket za detaljisanje
- [Korištenje ove pomoći](common:help)
