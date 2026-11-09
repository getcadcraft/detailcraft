---
title: Početak rada sa DetailCraft
summary: Šta DetailCraft danas radi, kako se otvara i prvi model od mreža do radioničkog crteža za deset minuta.
keywords: početak, prvi model, uvod, čelično detaljisanje, armatura, brzi početak, vodič, pregled
from: e4f16bbe
---

DetailCraft je aplikacija za detaljisanje čelika i armature iz porodice CadCraft. Pravite 3D model čeličnog okvira na mrežama i nivoima, povezujete ga i dobijate ono što radionica treba: oznake delova i sklopova, spisak materijala, radioničke crteže pojedinačnih delova, NC datoteke DSTV, IFC model i raspored savijanja za temelje.

Ovo je rana verzija. Radi kratak spisak stvari pažljivo, a ne sve odjednom. Pročitajte [Šta još nije izgrađeno](topic:not-built-yet) pre nego što planirate stvarni rad oko toga.

## Šta radi danas

- Mreže i nivoi koje unosite, u milimetrima.
- Stubovi, grede, dijagonale i limovi iz objavljenih kataloga profila (AISC W, S, C, L, HSS i Pipe; evropski IPE, HEA, HEB i UPN; britanski UB, UC, PFC, EA, UEA, SHS, RHS i CHS), plus vaši sopstveni parametarski profili.
- Dve veze: zavrtnjeni čeoni lim od grede do pojasnice stuba, i bazni lim stuba sa četiri sidrene šipke. Svaka može da se kopira na svaki sličan spoj.
- Rupe i izrezi uneti po položaju.
- Pravougaoni plitki temelji sa donjom mrežom i početnim šipkama.
- Oznake delova i sklopova koje se same ažuriraju posle svake izmene.
- Izvozi: IFC4, NC datoteke DSTV (I-preseci i limovi), spisak materijala kao CSV, raspored savijanja kao CSV i PDF radioničkog crteža jednog dela.

## Otvorite DetailCraft

1. Otvorite DetailCraft u računarskom pregledaču: Chrome, Edge, Firefox ili Safari. Pogledajte [Pregledači i računari](common:browsers).
2. Sačekajte da ekran dobije sadržaj. Statusna traka na dnu kaže „Spremno. Otvorite Primer ili postavite mreže i nivoe i počnite da postavljate štapove.”

Prikaz modela zahteva 3D grafiku (WebGL). Ako sredina ekrana kaže „Ovaj pregledač ne može da pokrene 3D grafiku (WebGL)”, pogledajte [Rešavanje problema](topic:troubleshooting#the-3d-view-is-missing).

:::note
Vaši modeli ostaju na vašem računaru. Otvaranje modela čita ga u pregledaču, a čuvanje preuzima datoteku. Ništa se ne otprema. Čuvanje u oblaku još nije dostupno. Pogledajte [Gde idu vaše datoteke](common:your-files). Da biste kasnije koristili DetailCraft bez veze, jednom dok ste na mreži izaberite {{ui:Sačuvaj za rad van mreže}} u traci aplikacije; pogledajte [Rad van mreže](common:offline).
:::

:::offline
Niste na mreži. DetailCraft radi bez veze samo ako je prethodno sačuvan za rad van mreže: dugme {{ui:Sačuvaj za rad van mreže}} u traci aplikacije tada prikazuje {{ui:Spremno za rad van mreže}}. Pogledajte [Rad van mreže](common:offline).
:::

## Prvo pogledajte primer

Najbrži način da vidite šta DetailCraft pravi je primer okvira.

1. Izaberite {{ui:Primer}} u grupi {{ui:Datoteka}} na traci sa alatkama.
2. Prikaz pokazuje okvir sa dva polja: šest stubova sa baznim limovima, četiri grede sa čeonim limovima, jednu dijagonalu i sedam temelja sa armaturom.
3. Kliknite na gredu. Panel {{ui:Svojstva}} desno pokazuje njenu oznaku dela, dužinu sečenja, težinu i rupe koje su napravili čeoni limovi.
4. Otvorite karticu {{ui:Spisak materijala}} na dnu da vidite svaku oznaku dela sa brojem i težinom.

Vodič [Istražite primer okvira](topic:sample-model) prolazi kroz njega deo po deo.

## Vaš prvi model

Novi model već ima mreže 1 do 3 po A do B na 6000 mm i dva nivoa, Nivo 1 na 0 i Nivo 2 na 4000.

1. Izaberite {{ui:Novi}}. Ako trenutni model ima izmene, DetailCraft pita da li da ih prvo sačuva.
2. Izaberite {{ui:Osnova}} iznad prikaza. Lista nivoa pored njega bira Nivo 1.
3. Izaberite {{ui:Stub}} na traci sa alatkama ili pritisnite {{key:C}}.
4. Kliknite na presek mreže A/1. Stub W12x50 se pojavljuje od Nivoa 1 do Nivoa 2. Statusna traka kaže gde je otišao.
5. Kliknite na B/1, A/2 i B/2 da postavite još tri.
6. Izaberite Nivo 2 u listi nivoa, zatim izaberite {{ui:Greda}} ili pritisnite {{key:B}}.
7. Kliknite na A/1, pa na A/2. Greda W16x26 spaja dva vrha stuba, a gornja ivica čelika je na nivou.
8. Pritisnite {{key:Esc}} da se vratite na {{ui:Izaberi}}, zatim kliknite na gredu.
9. Izaberite {{ui:Čeoni limovi}} u grupi {{ui:Poveži}}. Oba kraja dobijaju zavrtnjeni čeoni lim, greda se skraćuje da stane, a prvi čeoni lim je sada izabran.
10. Ponovo kliknite na gredu.
11. Izaberite {{ui:Radionički crtež}} u grupi {{ui:Izlaz}}. Otvara se pregled radioničkog crteža grede. Izaberite {{ui:Preuzmi PDF}}.
12. Pritisnite {{key:Mod+S}} da sačuvate model. Pregledač preuzima `Untitled.detailcraft.json`.

Preimenujte model u polju {{ui:Naziv}} u gornjem levom uglu pre čuvanja, da datoteka i svaki izvoz nose njegov naziv.

## Gde dalje

- [Obilazak ekrana](topic:workspace)
- [Postavljanje mreža i nivoa](topic:grids-and-levels)
- [Kretanje po 3D prikazu](topic:navigate-3d), mišem, tačpadom ili ekranom osetljivim na dodir
- [Prelazak sa drugog softvera za detaljisanje](topic:coming-from), ako poznajete neki veliki paket za detaljisanje
- [Korišćenje ove pomoći](common:help)
