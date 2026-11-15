---
title: Početak rada sa DetailCraft
summary: Šta DetailCraft danas radi, kako ga otvoriti i prvi model od mreža do radioničkog crteža za deset minuta.
keywords: početak, prvi model, uvod, detaljisanje čelika, armatura, brzi početak, vodič, pregled
from: e4f16bbe
---

DetailCraft je aplikacija za detaljisanje čelika i armature iz porodice CadCraft. Pravite 3D model čeličnog okvira na mrežama i nivoima, povezujete ga i dobijate ono što radionica treba: oznake dijelova i sklopova, spisak materijala, pojedinačne radioničke crteže, DSTV NC datoteke, IFC model i spisak savijanja za temelje.

Ovo je rana verzija. Radi kratak spisak stvari pažljivo, umjesto svega odjednom. Pročitajte [Šta još nije izrađeno](topic:not-built-yet) prije nego planirate pravi posao oko toga.

## Šta danas radi

- Mreže i nivoe koje upisujete, u milimetrima.
- Stubove, grede, dijagonale i ploče iz objavljenih kataloga profila (AISC W, S, C, L, HSS i Pipe; evropski IPE, HEA, HEB i UPN; britanski UB, UC, PFC, EA, UEA, SHS, RHS i CHS), plus vaše vlastite parametarske profile.
- Dvije veze: zavrtnjima pričvršćena čeona ploča od grede do pojasa stuba i temeljna ploča stuba sa četiri sidrene šipke. Svaka se može kopirati na svaki sličan spoj.
- Rupe i izrezi uneseni po položaju.
- Pravougaoni temelji sa donjom mrežom i polaznim šipkama.
- Oznake dijelova i sklopova koje se same ažuriraju nakon svake izmjene.
- Izvozi: IFC4, DSTV NC datoteke (I-profili i ploče), spisak materijala kao CSV, spisak savijanja kao CSV i radionički crtež jednog dijela kao PDF.

## Otvorite DetailCraft

1. Otvorite DetailCraft u desktop pregledniku: Chrome, Edge, Firefox ili Safari. Vidi [Preglednici i računari](common:browsers).
2. Sačekajte da ekran bude popunjen. Statusna traka na dnu kaže "Spremno. Otvorite Primjer, ili postavite mreže i nivoe i počnite postavljati elemente."

Prikaz modela treba 3D grafiku (WebGL). Ako sredina ekrana kaže "Ovaj preglednik nije mogao pokrenuti 3D grafiku (WebGL)", pogledajte [Rješavanje problema](topic:troubleshooting#the-3d-view-is-missing).

:::note
Vaši modeli ostaju na vašem računaru. Otvaranje modela čita ga u pregledniku, a spašavanje preuzima datoteku. Ništa se ne prenosi. Spremanje u oblak još nije dostupno. Vidi [Gdje idu vaše datoteke](common:your-files). Da biste kasnije koristili DetailCraft bez veze, jednom dok ste na mreži u traci aplikacije odaberite {{ui:Spasi za rad van mreže}}; vidi [Rad van mreže](common:offline).
:::

:::offline
Van ste mreže. DetailCraft radi bez veze samo ako je prethodno spašen za rad van mreže: dugme {{ui:Spasi za rad van mreže}} u traci aplikacije tada piše {{ui:Spremno za rad van mreže}}. Vidi [Rad van mreže](common:offline).
:::

## Prvo pogledajte primjer

Najbrži način da vidite šta DetailCraft pravi je primjer okvira.

1. Odaberite {{ui:Primjer}} u grupi {{ui:Datoteka}} na traci sa alatima.
2. Prikaz pokazuje okvir sa dva polja: šest stubova sa temeljnim pločama, četiri grede sa čeonim pločama, jednu dijagonalu i sedam temelja sa armaturom.
3. Kliknite na gredu. Panel {{ui:Svojstva}} s desne strane pokazuje njenu oznaku dijela, dužinu reza, težinu i rupe koje su napravile čeone ploče.
4. Otvorite karticu {{ui:Spisak materijala}} na dnu da vidite svaku oznaku dijela sa njenom količinom i težinom.

Vodič [Istražite primjer okvira](topic:sample-model) prolazi kroz njega dio po dio.

## Vaš prvi model

Novi model već ima mreže 1 do 3 po A do B na 6000 mm i dva nivoa, Nivo 1 na 0 i Nivo 2 na 4000.

1. Odaberite {{ui:Novi}}. Ako trenutni model ima izmjene, DetailCraft pita želite li ih prvo spasiti.
2. Odaberite {{ui:Osnova}} iznad prikaza. Lista nivoa pored nje bira Nivo 1.
3. Odaberite {{ui:Stub}} na traci sa alatima ili pritisnite {{key:C}}.
4. Kliknite na presjek mreža A/1. Pojavljuje se stub W12x50 od Nivoa 1 do Nivoa 2. Statusna traka kaže gdje je postavljen.
5. Kliknite na B/1, A/2 i B/2 da postavite još tri.
6. Izaberite Nivo 2 u listi nivoa, zatim odaberite {{ui:Greda}} ili pritisnite {{key:B}}.
7. Kliknite na A/1, zatim na A/2. Greda W16x26 spaja vrhove dva stuba, a njen gornji nivo čelika je na nivou.
8. Pritisnite {{key:Esc}} da se vratite na {{ui:Odaberi}}, zatim kliknite na gredu.
9. Odaberite {{ui:Čeone ploče}} u grupi {{ui:Povezivanje}}. Oba kraja dobijaju zavrtnjima pričvršćenu čeonu ploču, greda se skraćuje da stane, a prva čeona ploča je sada izabrana.
10. Ponovo kliknite na gredu.
11. Odaberite {{ui:Radionički crtež}} u grupi {{ui:Izlaz}}. Otvara se pregled radioničkog crteža grede. Odaberite {{ui:Preuzmi PDF}}.
12. Pritisnite {{key:Mod+S}} da spasite model. Preglednik preuzima `Untitled.detailcraft.json`.

Preimenujte model u polju {{ui:Naziv}} u gornjem lijevom uglu prije spašavanja, da datoteka i svi izvozi nose njegov naziv.

## Gdje dalje

- [Obilazak ekrana](topic:workspace)
- [Postavljanje mreža i nivoa](topic:grids-and-levels)
- [Kretanje po 3D prikazu](topic:navigate-3d), mišem, pločicom osjetljivom na dodir ili ekranom na dodir
- [Prelazak sa drugog softvera za detaljisanje](topic:coming-from), ako poznajete neki veliki paket za detaljisanje
- [Korištenje ove pomoći](common:help)
