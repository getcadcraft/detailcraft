---
title: Postavljanje stupova, greda i spregova
summary: Odaberite profil, materijal i položaj, zatim kliknite sjecišta mreže ili ih upišite za postavljanje čeličnih štapova.
keywords: stup, greda, spreg, štap, postavljanje, profil, materijal, zakretanje, položaj, pomak, umetanje, dodaj po mreži
from: d6db0dc1
---

Štapovi se postavljaju na sjecišta mreže: stup na jednom, greda ili spreg između dva. Najprije postavite [mreže i razine](topic:grids-and-levels).

## Odabir alata i njegovih opcija

1. Odaberite {{ui:Stup}} ({{key:C}}), {{ui:Greda}} ({{key:B}}) ili {{ui:Spreg}} ({{key:R}}) u grupi {{ui:Postavljanje}}.
2. Ploča {{ui:Svojstva}} s desne strane postaje „Postavi stup“ (ili greda, ili spreg) i prikazuje opcije za sljedeći štap:
   - {{ui:Profil}}: odaberite s popisa. Dimenzije su grupirane prema katalogu (W profili, U-profili, kutnici, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS i vaši prilagođeni profili). Vidi [Katalog profila](topic:profile-catalog).
   - {{ui:Materijal}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 ili S355.
   - {{ui:Položaj}}: gdje presjek leži na liniji između dviju točaka: {{ui:Vrh čelika na liniji}}, {{ui:Centrirano na liniji}} ili {{ui:Dno na liniji}}.
   - {{ui:Zakretanje (°)}}: zakreće presjek oko vlastite osi štapa.
   - {{ui:Do}} (samo za stupove): {{ui:Sljedeća razina iznad}} ili naziv razine.
3. Ispod opcija okvir {{ui:Profil}} navodi dimenzije odabranog presjeka, površinu, masu po metru i katalog iz kojeg dolazi.

Zadane vrijednosti su W12x50 u A992 za stupove (centrirano), W16x26 u A992 za grede (vrh čelika na liniji) i HSS6x6x1/4 u A500 Gr C za spregove (centrirano). Opcije ostaju postavljene dok ih ne promijenite.

## Postavljanje klikom

### Stup

1. Odaberite {{ui:Tlocrt}} i odaberite razinu na kojoj stup počinje.
2. Odaberite {{ui:Stup}}.
3. Pomaknite pokazivač blizu sjecišta. Najbliža točka se osvijetli, a statusna traka je imenuje.
4. Kliknite. Stup ide od te razine do sljedeće razine iznad (ili do razine {{ui:Do}}). Statusna traka kaže, na primjer, „Stup W12x50 na A/1, od Razine 1 do Razine 2.“
5. Nastavite klikati za postavljanje dalje. Kad završite, pritisnite {{key:Esc}}.

Ako nema razine iznad one na koju ste kliknuli, statusna traka kaže „Nema razine iznad Razine 2 do koje bi stup mogao doseći. Najprije dodajte razinu.“

### Greda

1. Odaberite {{ui:Tlocrt}} i odaberite razinu grede.
2. Odaberite {{ui:Greda}}.
3. Kliknite prvo sjecište. Statusna traka kaže „Od A/1 na Razini 2. Sada kliknite drugi kraj (Esc poništava).“ Iscrtana linija prati pokazivač.
4. Kliknite drugo sjecište. Greda se pojavljuje.
5. Ponovno kliknite za početak sljedeće grede ili pritisnite {{key:Esc}}.

{{key:Esc}} nakon prvog klika poništava samo tu točku; drugi {{key:Esc}} odlaže alat.

### Spreg

Spreg ide između dva sjecišta na različitim razinama, pa je najlakše u {{ui:Pročelje}}.

1. Odaberite {{ui:Pročelje}} i odaberite slovnu os mreže na kojoj je spreg.
2. Odaberite {{ui:Spreg}}.
3. Kliknite donji kraj, zatim gornji kraj.

Pročelja postoje samo za slovne osi mreže. Za spreg u okviru uz brojčanu os (od A do B) upotrijebite {{ui:3D}} ili obrazac {{ui:Dodaj po mreži}} u nastavku.

:::touch
Na zaslonu osjetljivom na dodir dodirnite blizu sjecišta: dodir odabire najbližu točku unutar kratke udaljenosti i ne čini ništa ako nijedna nije blizu. Prije dodira nema isticanja, pa nakon svakog dodira provjerite poruku u statusnoj traci. Povlačenja jednim prstom zakreću ili pomiču prikaz umjesto postavljanja.
:::

## Postavljanje po mreži, bez klikanja

Svaki alat za postavljanje ima obrazac {{ui:Dodaj po mreži}} pri dnu ploče {{ui:Svojstva}}. Radi samo s tipkovnicom i ne treba mu 3D prikaz.

1. Odaberite alat, na primjer {{ui:Greda}}.
2. U {{ui:Dodaj po mreži}} odaberite {{ui:Od mreže (slovo)}}, {{ui:Od mreže (broj)}} i {{ui:Od razine}}.
3. Odaberite {{ui:Do mreže (slovo)}}, {{ui:Do mreže (broj)}} i {{ui:Do razine}}.
4. Odaberite {{ui:Dodaj}}.

Za stup ili temelj obrazac ima samo jednu točku: {{ui:Mreža (slovo)}}, {{ui:Mreža (broj)}} i {{ui:Razina}}.

## Promjena štapa nakon postavljanja

1. Pritisnite {{key:Esc}} (ili odaberite {{ui:Odaberi}}, {{key:V}}) i kliknite štap.
2. Na ploči {{ui:Svojstva}} promijenite {{ui:Naziv}}, {{ui:Profil}}, {{ui:Materijal}}, {{ui:Položaj}} ili {{ui:Zakretanje (°)}}.
3. Za pomicanje uredite x, y i z za {{ui:Početak}} ili {{ui:Kraj}} pod {{ui:Krajevi (x, y, z mm)}}. Naziv mreže svakog kraja prikazuje se ispod, ili njegove koordinate kad je izvan mreže.

Svaka promjena je jedan korak poništavanja. Ispod polja vidite {{ui:Oznaka pozicije}}, {{ui:Sklop}}, {{ui:Duljina rezanja}}, {{ui:Masa}} štapa (bruto: provrti i izrezi se ne oduzimaju) i iz kojeg kataloga dolazi profil.

Štapovi se još ne mogu povlačiti ni umnožavati u nizu. Za izradu sličnog štapa kopirajte i zalijepite ga ili ga dupliciraj ({{key:Mod+D}}): vidi [Kopiraj, zalijepi i dupliciraj](topic:copy-paste).

## Brisanje štapa

Odaberite ga i pritisnite {{key:Delete}} ili {{key:Backspace}}, ili odaberite {{ui:Izbriši}}. Veze na njemu također se brišu. {{key:Mod+Z}} vraća sve.

## Što treba znati

- **Kuda stup gleda.** Pri {{ui:Zakretanje (°)}} 0, pojasevi stupa gledaju duž x, prema susjednim brojčanim osima mreže. Greda od mreže 1 do mreže 2 spaja se u pojas; greda od A do B spaja se u hrbat. Čeone ploče se izrađuju samo u pojasevima, pa ako vaše grede idu od A do B, dajte tim stupovima zakretanje 90.
- **Grede na razini vise ispod nje** uz zadani {{ui:Vrh čelika na liniji}}. Odaberite {{ui:Centrirano na liniji}} ako su vaše razine osi štapova.
- **Stupovi idu od razine do razine.** Za stup kroz dvije etaže postavite {{ui:Do}} na višu razinu.
- **Nagnute grede** su dopuštene (odaberite krajeve na različitim razinama), ali na njima se još ne izrađuju čeone ploče.

Sljedeće: [Spajanje greda na stupove čeonim pločama](topic:end-plates).
