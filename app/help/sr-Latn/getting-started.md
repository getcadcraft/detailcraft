---
title: Početak rada u DetailCraft
summary: Šta DetailCraft danas radi, kako ga otvoriti i prvi model od mreža do radioničkog crteža za deset minuta.
keywords: početak, prvi model, uvod, detaljisanje čelika, armatura, brzi početak, vodič, pregled
from: 3682c0d8
---

DetailCraft je aplikacija za detaljisanje čeličnih i armaturnih konstrukcija iz porodice CadCraft. Pravite 3D model čeličnog okvira na mrežama i nivoima, povezujete ga i dobijate ono što radionici treba: oznake delova i sklopova, spisak materijala, radioničke crteže pojedinačnih delova, DSTV NC datoteke, IFC model i raspored savijanja za temelje.

Ovo je rana verzija. Radi kratak spisak stvari pažljivo, umesto svega odjednom. Pročitajte [Šta još nije izgrađeno](topic:not-built-yet) pre nego što planirate pravi rad oko toga.

## Šta radi danas

- Mreže i nivoi koje unosite, u milimetrima.
- Stubovi, grede, dijagonale i limovi iz objavljenih katalog profila (AISC W, S, C, L, HSS i Pipe; evropski IPE, HEA, HEB i UPN), plus vaši sopstveni parametarski profili.
- Dve veze: zavrnuti čeoni lim od grede do pojasa stuba i bazni lim stuba sa četiri sidrena štapa. Svaka može da se kopira na svaki sličan spoj.
- Rupe i izrezi uneseni prema položaju.
- Pravougaoni temelji sa donjom mrežom i početnim šipkama.
- Oznake delova i sklopova koje se same ažuriraju posle svake izmene.
- Izvozi: IFC4, DSTV NC datoteke (I-profili i limovi), spisak materijala kao CSV, raspored savijanja kao CSV i PDF radioničkog crteža jednog dela.

## Otvorite DetailCraft

1. Otvorite DetailCraft u desktop pregledaču: Chrome, Edge, Firefox ili Safari. Pogledajte [Pregledači i računari](common:browsers).
2. Sačekajte da se ekran popuni. Statusna traka na dnu kaže „Spremno. Otvorite Primer ili postavite mreže i nivoe i počnite da postavljate elemente.”

Prikaz modela treba 3D grafiku (WebGL). Ako sredina ekrana kaže „Ovaj pregledač ne može da pokrene 3D grafiku (WebGL)”, pogledajte [Rešavanje problema](topic:troubleshooting#the-3d-view-is-missing).

:::note
Vaši modeli ostaju na vašem računaru. Otvaranje modela ga čita u pregledaču, a čuvanje preuzima datoteku. Ništa se ne otprema. Čuvanje u oblaku još nije dostupno. Pogledajte [Gde idu vaše datoteke](common:your-files). Da biste kasnije koristili DetailCraft bez veze, izaberite {{ui:Sačuvaj za rad van mreže}} na traci aplikacije jednom dok ste na mreži; pogledajte [Rad van mreže](common:offline).
:::

:::offline
Niste na mreži. DetailCraft radi bez veze samo ako je prethodno sačuvan za rad van mreže: dugme {{ui:Sačuvaj za rad van mreže}} na traci aplikacije tada prikazuje {{ui:Spremno za rad van mreže}}. Pogledajte [Rad van mreže](common:offline).
:::

## Prvo pogledajte primer

Najbrži način da vidite šta DetailCraft pravi je primer okvira.

1. Izaberite {{ui:Primer}} u grupi {{ui:Datoteka}} na traci sa alatkama.
2. Prikaz pokazuje okvir sa dva polja: šest stubova sa baznim limovima, četiri grede sa čeonim limovima, jednu dijagonalu i sedam temelja sa armaturom.
3. Kliknite gredu. Panel {{ui:Svojstva}} desno pokazuje njenu oznaku dela, dužinu sečenja, težinu i rupe koje su napravili čeoni limovi.
4. Otvorite karticu {{ui:Spisak materijala}} na dnu da vidite svaku oznaku dela sa brojem i težinom.

Vodič [Istražite primer okvira](topic:sample-model) prolazi kroz njega deo po deo.

## Vaš prvi model

Novi model već ima mreže 1 do 3 po A do B na 6000 mm i dva nivoa: Nivo 1 na 0 i Nivo 2 na 4000.

1. Izaberite {{ui:Novi}}. Ako trenutni model ima izmene, DetailCraft pita da li ih prvo želite sačuvati.
2. Izaberite {{ui:Osnova}} iznad prikaza. Lista nivoa pored nje bira Nivo 1.
3. Izaberite {{ui:Stub}} na traci sa alatkama ili pritisnite {{key:C}}.
4. Kliknite presek mreže A/1. Pojavljuje se stub W12x50 od Nivo 1 do Nivo 2. Statusna traka kaže gde je postavljen.
5. Kliknite B/1, A/2 i B/2 da postavite još tri.
6. Izaberite Nivo 2 u listi nivoa, zatim izaberite {{ui:Greda}} ili pritisnite {{key:B}}.
7. Kliknite A/1, pa A/2. Greda W16x26 spaja vrhove dva stuba, a njena gornja kota čelika je na nivou.
8. Pritisnite {{key:Esc}} da se vratite na {{ui:Izaberi}}, zatim kliknite gredu.
9. Izaberite {{ui:Čeoni limovi}} u grupi {{ui:Poveži}}. Oba kraja dobijaju zavrnuti čeoni lim, greda se skraćuje da stane, i prvi čeoni lim je sada izabran.
10. Ponovo kliknite gredu.
11. Izaberite {{ui:Radionički crtež}} u grupi {{ui:Izlaz}}. Otvara se pregled radioničkog crteža grede. Izaberite {{ui:Preuzmi PDF}}.
12. Pritisnite {{key:Mod+S}} da sačuvate model. Pregledač preuzima `Untitled.detailcraft.json`.

Pre čuvanja preimenujte model u polju {{ui:Naziv}} u gornjem levom uglu, tako da datoteka i svaki izvoz nose njegov naziv.

## Gde dalje

- [Obilazak ekrana](topic:workspace)
- [Podesite mreže i nivoe](topic:grids-and-levels)
- [Krećite se po 3D prikazu](topic:navigate-3d), mišem, touchpad-om ili ekranom osetljivim na dodir
- [Dolazak iz drugog softvera za detaljisanje](topic:coming-from), ako poznajete neki veliki paket za detaljisanje
- [Korišćenje ove pomoći](common:help)
