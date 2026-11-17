---
title: Postavljanje stubova, greda i dijagonala
summary: Odaberi profil, materijal i položaj, zatim klikni na presjeke mreže ili ih unesi da postaviš čelične elemente.
keywords: stub, greda, dijagonala, element, postavljanje, profil, materijal, rotacija, položaj, odmak, umetanje, dodaj po mreži
from: d6db0dc1
---

Elementi se postavljaju na presjecima mreže: stub na jednom, greda ili dijagonala između dva. Prvo postavi [mreže i nivoe](topic:grids-and-levels).

## Odaberi alat i njegove opcije

1. Odaberi {{ui:Column}} ({{key:C}}), {{ui:Beam}} ({{key:B}}) ili {{ui:Brace}} ({{key:R}}) u grupi {{ui:Place}}.
2. Panel {{ui:Properties}} s desne strane postaje "Postavi stub" (ili gredu, ili dijagonalu) i prikazuje opcije za sljedeći element:
   - {{ui:Profile}}: odaberi s liste. Veličine su grupisane po katalogu (W profili, kanali, uglovi, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS i tvoji prilagođeni profili). Vidi [Katalog profila](topic:profile-catalog).
   - {{ui:Material}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 ili S355.
   - {{ui:Position}}: gdje presjek leži na liniji između dvije tačke: {{ui:Top of steel on the line}}, {{ui:Centered on the line}} ili {{ui:Bottom on the line}}.
   - {{ui:Rotation (°)}}: okreće presjek oko sopstvene ose elementa.
   - {{ui:Up to}} (samo stubovi): {{ui:The next level up}} ili naziv nivoa.
3. Ispod opcija, polje {{ui:Profile}} navodi dimenzije odabranog presjeka, površinu, masu po metru i katalog iz kojeg potiče.

Zadane vrijednosti su W12x50 u A992 za stubove (centrirano), W16x26 u A992 za grede (gornja strana čelika na liniji) i HSS6x6x1/4 u A500 Gr C za dijagonale (centrirano). Opcije ostaju postavljene dok ih ne promijeniš.

## Postavljanje klikom

### Stub

1. Odaberi {{ui:Plan}} i izaberi nivo na kojem stub počinje.
2. Odaberi {{ui:Column}}.
3. Pomjeri pokazivač blizu presjeka. Najbliža tačka se osvijetli, a statusna traka je imenuje.
4. Klikni. Stub ide od tog nivoa do sljedećeg višeg (ili do nivoa {{ui:Up to}}). Statusna traka kaže, na primjer, "Stub W12x50 na A/1, Nivo 1 do Nivo 2."
5. Nastavi klikati da postaviš još. Pritisni {{key:Esc}} kad završiš.

Ako nema nivoa iznad onog na koji si kliknuo, statusna traka kaže "Nema nivoa iznad Nivo 2 do kojeg stub može da dođe. Prvo dodaj nivo."

### Greda

1. Odaberi {{ui:Plan}} i izaberi nivo grede.
2. Odaberi {{ui:Beam}}.
3. Klikni prvi presjek. Statusna traka kaže "Od A/1 na Nivou 2. Sad klikni drugi kraj ({{key:Esc}} poništava)." Isprekidana linija prati pokazivač.
4. Klikni drugi presjek. Greda se pojavljuje.
5. Klikni ponovo da počneš sljedeću gredu, ili pritisni {{key:Esc}}.

{{key:Esc}} nakon prvog klika poništava samo tu tačku; drugi {{key:Esc}} odlaže alat.

### Dijagonala

Dijagonala ide između dva presjeka na različitim nivoima, pa je najlakše u {{ui:Elevation}}.

1. Odaberi {{ui:Elevation}} i izaberi slovnu osovinu na kojoj je dijagonala.
2. Odaberi {{ui:Brace}}.
3. Klikni donji kraj, pa gornji.

Izgledi postoje samo za slovne osovine. Za dijagonalu u okviru duž numerisane linije (od A do B), koristi {{ui:3D}} ili obrazac {{ui:Add by grid}} ispod.

:::touch
Na ekranu osjetljivom na dodir, dodirni blizu presjeka: dodir bira najbližu tačku u kratkoj udaljenosti i ne radi ništa ako nijedna nije blizu. Prije dodira nema isticanja, pa provjeri poruku u statusnoj traci nakon svakog dodira. Prevlačenje jednim prstom okreće ili pomjera prikaz umjesto postavljanja.
:::

## Postavljanje po mreži, bez klikanja

Svaki alat za postavljanje ima obrazac {{ui:Add by grid}} pri dnu panela {{ui:Properties}}. Radi samo sa tastaturom i ne treba mu 3D prikaz.

1. Odaberi alat, na primjer {{ui:Beam}}.
2. U {{ui:Add by grid}} izaberi {{ui:From grid (letter)}}, {{ui:From grid (number)}} i {{ui:From level}}.
3. Izaberi {{ui:To grid (letter)}}, {{ui:To grid (number)}} i {{ui:To level}}.
4. Odaberi {{ui:Add}}.

Za stub ili temelj obrazac ima samo jednu tačku: {{ui:Grid (letter)}}, {{ui:Grid (number)}} i {{ui:Level}}.

## Promjena elementa nakon postavljanja

1. Pritisni {{key:Esc}} (ili odaberi {{ui:Select}}, {{key:V}}) i klikni element.
2. U panelu {{ui:Properties}} promijeni {{ui:Name}}, {{ui:Profile}}, {{ui:Material}}, {{ui:Position}} ili {{ui:Rotation (°)}}.
3. Da ga pomjeriš, uredi x, y i z za {{ui:Start}} ili {{ui:End}} pod {{ui:Ends (x, y, z mm)}}. Naziv mreže svakog kraja se prikazuje ispod, ili njegove koordinate kad je van mreže.

Svaka promjena je jedan korak poništavanja. Ispod polja vidiš {{ui:Part mark}}, {{ui:Assembly}}, {{ui:Cut length}}, {{ui:Weight}} (bruto: rupe i izrezi se ne oduzimaju) i iz kojeg kataloga dolazi profil.

Elementi se još ne mogu prevlačiti ili nizati. Da napraviš sličan element, kopiraj i zalijepi ga, ili ga dupliraj ({{key:Mod+D}}): vidi [Kopiranje, lijepljenje i dupliranje](topic:copy-paste).

## Brisanje elementa

Odaberi ga i pritisni {{key:Delete}} ili {{key:Backspace}}, ili odaberi {{ui:Delete}}. Veze na njemu idu s njim. {{key:Mod+Z}} vraća sve.

## Važne stvari

- **Kuda stub gleda.** Pri {{ui:Rotation (°)}} 0, pojasnice stuba gledaju duž x, prema susjednim brojevnim osovinama. Greda od mreže 1 do mreže 2 se spaja u pojasnicu; greda od A do B se spaja u rebro. Krajnje ploče se postavljaju samo na pojasnice, pa ako grede idu od A do B, daj tim stubovima rotaciju 90.
- **Grede na nivou vise ispod njega** uz zadano {{ui:Top of steel on the line}}. Izaberi {{ui:Centered on the line}} ako su tvoji nivoi osovine elemenata.
- **Stubovi idu nivo po nivo.** Za stub kroz dva sprata postavi {{ui:Up to}} na viši nivo.
- **Kose grede** su dozvoljene (izaberi krajeve na različitim nivoima), ali krajnje ploče se na njima još ne prave.

Sljedeće: [Poveži grede sa stubovima krajnjim pločama](topic:end-plates).
