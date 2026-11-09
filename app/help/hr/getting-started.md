---
title: Početak rada s DetailCraftom
summary: Što DetailCraft danas radi, kako ga otvoriti i prvi model od mreža do radioničkog crteža za deset minuta.
keywords: početak, prvi model, uvod, detaljiranje čelika, armatura, brzi početak, vodič, pregled
from: e4f16bbe
---

DetailCraft je aplikacija za detaljiranje čelika i armature iz obitelji CadCraft. Izrađujete 3D model čeličnog okvira na mrežama i razinama, povezujete ga i dobivate ono što radionica treba: oznake dijelova i sklopova, sastavnicu, radioničke crteže pojedinih dijelova, NC datoteke DSTV, IFC model i plan savijanja za temelje.

Ovo je rana verzija. Radi kratak popis stvari, pažljivo, umjesto svega odjednom. Pročitajte [Što još nije izrađeno](topic:not-built-yet) prije nego planirate stvarni rad s njom.

## Što radi danas

- Mreže i razine koje upisujete, u milimetrima.
- Stupovi, grede, spregovi i ploče iz objavljenih kataloga profila (AISC W, S, C, L, HSS i Pipe; europski IPE, HEA, HEB i UPN; britanski UB, UC, PFC, EA, UEA, SHS, RHS i CHS), uz vaše vlastite parametarske profile.
- Dva spoja: vijčana čeona ploča od grede do pojasnice stupa te podložna ploča stupa s četiri sidrena vijka. Svaki se može kopirati na svaki sličan spoj.
- Provrti i izrezi upisani po položaju.
- Pravokutni temelji samci s donjom mrežom i početnim šipkama.
- Oznake dijelova i sklopova koje se same ažuriraju nakon svake izmjene.
- Izvozi: IFC4, DSTV NC datoteke (I-profili i ploče), sastavnica kao CSV, plan savijanja kao CSV i radionički crtež jednog dijela kao PDF.

## Otvorite DetailCraft

1. Otvorite DetailCraft u stolnom pregledniku: Chrome, Edge, Firefox ili Safari. Vidi [Preglednici i računala](common:browsers).
2. Pričekajte da zaslon ispuni prostor. Statusna traka pri dnu kaže „Spremno. Otvorite primjer ili postavite mreže i razine te počnite postavljati štapove.”

Prikaz modela treba 3D grafiku (WebGL). Ako sredina zaslona kaže „Ovaj preglednik nije mogao pokrenuti 3D grafiku (WebGL)”, vidi [Rješavanje problema](topic:troubleshooting#the-3d-view-is-missing).

:::note
Vaši modeli ostaju na vašem računalu. Otvaranje modela čita ga preglednik, a spremanje preuzima datoteku. Ništa se ne učitava. Spremanje u oblak još nije dostupno. Vidi [Gdje se čuvaju vaše datoteke](common:your-files). Da kasnije koristite DetailCraft bez veze, jednom dok ste na mreži odaberite {{ui:Spremi za offline}} u traci aplikacije; vidi [Rad offline](common:offline).
:::

:::offline
Niste na mreži. DetailCraft radi bez veze samo ako je prethodno spremljen za rad offline: gumb {{ui:Spremi za offline}} u traci aplikacije tada pokazuje {{ui:Spremno za offline}}. Vidi [Rad offline](common:offline).
:::

## Prvo pogledajte primjer

Najbrži način da vidite što DetailCraft izrađuje jest primjer okvira.

1. Odaberite {{ui:Primjer}} u grupi {{ui:Datoteka}} alatne trake.
2. Prikaz pokazuje okvir s dva raspona: šest stupova s podložnim pločama, četiri grede s čeonim pločama, jedan spreg i sedam temelja s armaturom.
3. Kliknite gredu. Panel {{ui:Svojstva}} s desne strane pokazuje njezinu oznaku dijela, duljinu za rezanje, masu i provrte koje su napravile čeone ploče.
4. Otvorite karticu {{ui:Sastavnica}} pri dnu da vidite svaku oznaku dijela s brojem komada i masom.

Vodič [Istražite primjer okvira](topic:sample-model) prolazi kroz njega dio po dio.

## Vaš prvi model

Novi model već ima mreže 1 do 3 po A do B na 6000 mm i dvije razine: Razina 1 na 0 i Razina 2 na 4000.

1. Odaberite {{ui:Novo}}. Ako trenutni model ima promjene, DetailCraft pita želite li ih prvo spremiti.
2. Odaberite {{ui:Tlocrt}} iznad prikaza. Popis razina pored njega odabire Razinu 1.
3. Odaberite {{ui:Stup}} u alatnoj traci ili pritisnite {{key:C}}.
4. Kliknite presjecište mreža A/1. Pojavljuje se stup W12x50 od Razine 1 do Razine 2. Statusna traka kaže gdje je postavljen.
5. Kliknite B/1, A/2 i B/2 da postavite još tri.
6. Odaberite Razinu 2 u popisu razina, zatim odaberite {{ui:Greda}} ili pritisnite {{key:B}}.
7. Kliknite A/1, zatim A/2. Greda W16x26 spaja vrhove dvaju stupova, a gornji rub čelika je na razini.
8. Pritisnite {{key:Esc}} da se vratite na {{ui:Odaberi}}, zatim kliknite gredu.
9. Odaberite {{ui:Čeone ploče}} u grupi {{ui:Povezivanje}}. Oba kraja dobivaju vijčanu čeonu ploču, greda se skraćuje da stane, a prva čeona ploča sada je odabrana.
10. Ponovno kliknite gredu.
11. Odaberite {{ui:Radionički crtež}} u grupi {{ui:Izlaz}}. Otvara se pregled radioničkog crteža grede. Odaberite {{ui:Preuzmi PDF}}.
12. Pritisnite {{key:Mod+S}} da spremite model. Preglednik preuzima `Untitled.detailcraft.json`.

Prije spremanja preimenujte model u polju {{ui:Naziv}} u gornjem lijevom kutu, da datoteka i svaki izvoz nose njegov naziv.

## Gdje dalje

- [Pregled zaslona](topic:workspace)
- [Postavljanje mreža i razina](topic:grids-and-levels)
- [Kretanje po 3D prikazu](topic:navigate-3d), mišem, dodirnom podlogom ili dodirnim zaslonom
- [Prelazak iz drugih programa za detaljiranje](topic:coming-from), ako poznajete neki veliki paket za detaljiranje
- [Korištenje ove pomoći](common:help)
