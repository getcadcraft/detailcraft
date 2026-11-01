---
title: Prvi koraci s DetailCraftom
summary: Što DetailCraft danas radi, kako ga otvoriti i prvi model od mreža do radioničkog crteža za deset minuta.
keywords: početak, prvi model, uvod, detaljiranje čelika, armatura, brzi početak, vodič, pregled
from: 3682c0d8
---

DetailCraft je aplikacija za detaljiranje čelika i armature iz obitelji CadCraft. Gradite 3D model čelične okvirne konstrukcije na mrežama i razinama, povezujete ga i dobivate ono što treba radionici: oznake dijelova i sklopova, sastavnicu, radioničke crteže pojedinačnih dijelova, DSTV NC datoteke, IFC model i plan savijanja za temelje.

Ovo je rana verzija. Pažljivo radi kratak popis stvari umjesto svega odjednom. Pročitajte [Što još nije izrađeno](topic:not-built-yet) prije nego oko nje planirate pravi posao.

## Što radi danas

- Mreže i razine koje upisujete, u milimetrima.
- Stupove, grede, spregove i ploče iz objavljenih kataloga profila (AISC W, S, C, L, HSS i Pipe; europski IPE, HEA, HEB i UPN), uz vaše vlastite parametarske profile.
- Dva spoja: vijčani spoj čeonom pločom od grede na pojasnicu stupa i podložna ploča stupa s četiri sidrena vijka. Svaki se može kopirati na svaki sličan spoj.
- Provrte i izreze upisane prema položaju.
- Pravokutne temelje samce s donjom mrežom i ispustima armature.
- Oznake dijelova i sklopova koje se same ažuriraju nakon svake promjene.
- Izvoze: IFC4, DSTV NC datoteke (I-profili i ploče), sastavnicu kao CSV, plan savijanja kao CSV i PDF radioničkog crteža jednog dijela.

## Otvaranje DetailCrafta

1. Otvorite DetailCraft u pregledniku za računalo: Chrome, Edge, Firefox ili Safari. Vidi [Preglednici i računala](common:browsers).
2. Pričekajte da se zaslon popuni. Statusna traka pri dnu kaže „Spremno. Otvorite Primjer ili zadajte mreže i razine i počnite postavljati štapove.“

Prikaz modela treba 3D grafiku (WebGL). Ako sredina zaslona kaže „Ovaj preglednik nije mogao pokrenuti 3D grafiku (WebGL)“, vidi [Rješavanje problema](topic:troubleshooting#the-3d-view-is-missing).

:::note
Vaši modeli ostaju na vašem računalu. Otvaranje modela čita ga u pregledniku, a spremanje preuzima datoteku. Ništa se ne učitava. Spremanje u oblaku još nije dostupno. Vidi [Kamo idu vaše datoteke](common:your-files). Da DetailCraft kasnije koristite bez veze, jednom dok ste online odaberite {{ui:Spremi za offline}} na traci aplikacije; vidi [Rad offline](common:offline).
:::

:::offline
Offline ste. DetailCraft radi bez veze samo ako je prije toga spremljen za offline uporabu: gumb {{ui:Spremi za offline}} na traci aplikacije tada glasi {{ui:Spremno za offline}}. Vidi [Rad offline](common:offline).
:::

## Prvo pogledajte primjer

Najbrži način da vidite što DetailCraft izrađuje je primjer okvira.

1. Odaberite {{ui:Primjer}} u skupini {{ui:Datoteka}} na alatnoj traci.
2. Prikaz pokazuje okvir s dva polja: šest stupova s podložnim pločama, četiri grede s čeonim pločama, jedan spreg i sedam temelja s armaturom.
3. Kliknite gredu. Ploča {{ui:Svojstva}} desno prikazuje njezinu oznaku dijela, duljinu rezanja, masu i provrte koje su napravile čeone ploče.
4. Otvorite karticu {{ui:Sastavnica}} pri dnu da vidite svaku oznaku dijela s brojem komada i masom.

Vodič [Razgledavanje primjera okvira](topic:sample-model) prolazi kroz njega dio po dio.

## Vaš prvi model

Novi model već ima mreže 1 do 3 sa A do B na 6000 mm i dvije razine, Razinu 1 na 0 i Razinu 2 na 4000.

1. Odaberite {{ui:Novo}}. Ako trenutni model ima promjena, DetailCraft pita želite li ih prvo spremiti.
2. Odaberite {{ui:Tlocrt}} iznad prikaza. Popis razina pored njega bira Razinu 1.
3. Odaberite {{ui:Stup}} na alatnoj traci ili pritisnite {{key:C}}.
4. Kliknite sjecište mreža A/1. Pojavljuje se stup W12x50 od Razine 1 do Razine 2. Statusna traka kaže kamo je otišao.
5. Kliknite B/1, A/2 i B/2 da postavite još tri.
6. Odaberite Razinu 2 na popisu razina, zatim odaberite {{ui:Greda}} ili pritisnite {{key:B}}.
7. Kliknite A/1, zatim A/2. Greda W16x26 spaja vrhove dvaju stupova, a gornji rub čelika je na razini.
8. Pritisnite {{key:Esc}} da se vratite na {{ui:Odaberi}}, zatim kliknite gredu.
9. Odaberite {{ui:Čeone ploče}} u skupini {{ui:Povezivanje}}. Oba kraja dobivaju vijčanu čeonu ploču, greda se skraćuje da stane, a prva čeona ploča sada je odabrana.
10. Ponovno kliknite gredu.
11. Odaberite {{ui:Radionički crtež}} u skupini {{ui:Izlaz}}. Otvara se pregled radioničkog crteža grede. Odaberite {{ui:Preuzmi PDF}}.
12. Pritisnite {{key:Mod+S}} da spremite model. Preglednik preuzima `Untitled.detailcraft.json`.

Preimenujte model u polju {{ui:Naziv}} gore lijevo prije spremanja, pa datoteka i svaki izvoz nose njegov naziv.

## Kamo dalje

- [Obilazak zaslona](topic:workspace)
- [Postavljanje mreža i razina](topic:grids-and-levels)
- [Kretanje 3D prikazom](topic:navigate-3d), mišem, trackpadom ili zaslonom osjetljivim na dodir
- [Dolazite iz drugog softvera za detaljiranje](topic:coming-from), ako poznajete veliki paket za detaljiranje
- [Korištenje ove pomoći](common:help)
