---
title: Postavljanje stubova, greda i dijagonala
summary: Izaberi profil, materijal i položaj, pa klikni na presečne tačke mreže ili ih ukucaj da postaviš čelične elemente.
keywords: stub, greda, dijagonala, element, postavljanje, profil, materijal, obrtanje, položaj, pomak, umetanje, dodaj prema mreži
from: d6db0dc1
---

Elementi se postavljaju na presečne tačke mreže: stub na jednu, a greda ili dijagonala između dve. Najpre postavi [mreže i nivoe](topic:grids-and-levels).

## Izaberi alat i njegove opcije

1. Izaberi {{ui:Stub}} ({{key:C}}), {{ui:Greda}} ({{key:B}}) ili {{ui:Dijagonala}} ({{key:R}}) u grupi {{ui:Postavi}}.
2. Panel {{ui:Svojstva}} desno postaje „Postavi stub“ (ili gredu, ili dijagonalu) i prikazuje opcije za sledeći element:
   - {{ui:Profil}}: izaberi sa liste. Veličine su grupisane po katalogu (W profili, U-profili, uglovi, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS i tvoji prilagođeni profili). Vidi [Katalog profila](topic:profile-catalog).
   - {{ui:Materijal}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 ili S355.
   - {{ui:Položaj}}: gde presek leži na liniji između dve tačke: {{ui:Gornja ivica čelika na liniji}}, {{ui:Centrirano na liniji}} ili {{ui:Donja ivica na liniji}}.
   - {{ui:Obrtanje (°)}}: okreće presek oko sopstvene ose elementa.
   - {{ui:Do}} (samo za stubove): {{ui:Sledeći nivo iznad}}, ili naziv nivoa.
3. Ispod opcija, polje {{ui:Profil}} navodi dimenzije izabranog preseka, površinu, masu po metru i katalog iz kog potiče.

Podrazumevane vrednosti su W12x50 u A992 za stubove (centrirano), W16x26 u A992 za grede (gornja ivica čelika na liniji) i HSS6x6x1/4 u A500 Gr C za dijagonale (centrirano). Opcije ostaju podešene dok ih ne promeniš.

## Postavljanje klikom

### Stub

1. Izaberi {{ui:Osnova}} i izaberi nivo na kom stub počinje.
2. Izaberi {{ui:Stub}}.
3. Pomeri pokazivač blizu presečne tačke. Najbliža tačka se osvetli, a statusna traka je imenuje.
4. Klikni. Stub ide od tog nivoa do sledećeg višeg nivoa (ili do nivoa iz {{ui:Do}}). Statusna traka kaže, na primer, „Stub W12x50 na A/1, Nivo 1 do Nivo 2.“
5. Nastavi klikanjem da postaviš još. Pritisni {{key:Esc}} kada završiš.

Ako nema nivoa iznad onog na kom si kliknuo, statusna traka kaže: „Nema nivoa iznad Nivo 2 do kog stub može da dopre. Najpre dodaj nivo.“

### Greda

1. Izaberi {{ui:Osnova}} i izaberi nivo grede.
2. Izaberi {{ui:Greda}}.
3. Klikni prvu presečnu tačku. Statusna traka kaže: „Od A/1 na Nivo 2. Sada klikni drugi kraj (Esc otkazuje).“ Isprekidana linija prati pokazivač.
4. Klikni drugu presečnu tačku. Greda se pojavi.
5. Ponovo klikni da započneš sledeću gredu, ili pritisni {{key:Esc}}.

{{key:Esc}} posle prvog klika otkazuje samo tu tačku; drugi {{key:Esc}} sklanja alat.

### Dijagonala

Dijagonala ide između dve presečne tačke na različitim nivoima, pa je najlakše u {{ui:Izgled}}.

1. Izaberi {{ui:Izgled}} i izaberi slovnu liniju mreže na kojoj je dijagonala.
2. Izaberi {{ui:Dijagonala}}.
3. Klikni donji kraj, pa gornji kraj.

Izgledi postoje samo za slovne linije mreže. Za dijagonalu u ramu duž brojčane linije (od A do B) koristi {{ui:3D}} ili formu {{ui:Dodaj prema mreži}} ispod.

:::touch
Na ekranu osetljivom na dodir, dodirni blizu presečne tačke: dodir bira najbližu tačku na kratkoj razdaljini i ne radi ništa ako nijedna nije blizu. Pre dodira nema isticanja, pa proveri poruku u statusnoj traci posle svakog dodira. Prevlačenje jednim prstom okreće ili pomera pogled umesto postavljanja.
:::

## Postavljanje prema mreži, bez klikanja

Svaki alat za postavljanje ima formu {{ui:Dodaj prema mreži}} na dnu panela {{ui:Svojstva}}. Radi samo sa tastaturom i ne traži 3D prikaz.

1. Izaberi alat, na primer {{ui:Greda}}.
2. U {{ui:Dodaj prema mreži}} izaberi {{ui:Od linije mreže (slovo)}}, {{ui:Od linije mreže (broj)}} i {{ui:Od nivoa}}.
3. Izaberi {{ui:Do linije mreže (slovo)}}, {{ui:Do linije mreže (broj)}} i {{ui:Do nivoa}}.
4. Izaberi {{ui:Dodaj}}.

Za stub ili temelj forma ima samo jednu tačku: {{ui:Linija mreže (slovo)}}, {{ui:Linija mreže (broj)}} i {{ui:Nivo}}.

## Promena elementa posle postavljanja

1. Pritisni {{key:Esc}} (ili izaberi {{ui:Izaberi}}, {{key:V}}) i klikni element.
2. U panelu {{ui:Svojstva}} promeni {{ui:Naziv}}, {{ui:Profil}}, {{ui:Materijal}}, {{ui:Položaj}} ili {{ui:Obrtanje (°)}}.
3. Da ga pomeriš, izmeni x, y i z kod {{ui:Početak}} ili {{ui:Kraj}} pod {{ui:Krajevi (x, y, z mm)}}. Naziv mreže svakog kraja se vidi ispod, ili njegove koordinate kada je van mreže.

Svaka promena je jedan korak opozivanja. Ispod polja vidiš oznaku dela ({{ui:Oznaka dela}}), {{ui:Sklop}}, {{ui:Dužinu sečenja}}, {{ui:Masu}} (bruto: rupe i izrezi se ne oduzimaju) i katalog iz kog profil potiče.

Elementi se još ne mogu prevlačiti ili umnožavati u niz. Da napraviš sličan element, kopiraj i nalepi ga, ili ga dupliraj ({{key:Mod+D}}): vidi [Kopiraj, nalepi i dupliraj](topic:copy-paste).

## Brisanje elementa

Izaberi ga i pritisni {{key:Delete}} ili {{key:Backspace}}, ili izaberi {{ui:Izbriši}}. Veze na njemu odlaze sa njim. {{key:Mod+Z}} vraća sve.

## Šta treba znati

- **Na koju stranu stub gleda.** Pri {{ui:Obrtanje (°)}} 0, pojasevi stuba gledaju duž x, ka susednim brojčanim linijama mreže. Greda od linije 1 do linije 2 se priključuje na pojas; greda od A do B se priključuje na rebro. Krajnji limovi se grade samo na pojasevima, pa ako tvoje grede idu od A do B, daj tim stubovima obrtanje 90.
- **Grede na nivou vise ispod njega** sa podrazumevanom {{ui:Gornja ivica čelika na liniji}}. Izaberi {{ui:Centrirano na liniji}} ako su tvoji nivoi središnje linije elemenata.
- **Stubovi idu od nivoa do nivoa.** Za stub kroz dva sprata podesi {{ui:Do}} na viši nivo.
- **Kose grede** su dozvoljene (izaberi krajeve na različitim nivoima), ali krajnji limovi se na njima još ne grade.

Sledeće: [Poveži grede sa stubovima krajnjim limovima](topic:end-plates).
