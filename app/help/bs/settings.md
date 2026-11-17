---
title: Postavke DetailCraft
summary: Novi elementi se počinju kao američki ili evropski profili, podesite koliko daleko Dupliraj pomjera kopiju, izaberite da li kopije nose svoje veze, te prikažite ili sakrijte vijke u 3D prikazu.
keywords: postavke, preference, veličina lista, veličina papira, crteži, opcije, čelik, aisc, en, evropski, američki profili, metrički profili, podrazumijevani profil, kvalitet, s355, a992, pomak dupliranja, pomak lijepljenja, kopiraj veze, vijci, sidrene šipke, sakrij vijke, vrati
from: e46cea57
---

Otvorite {{ui:Postavke}} preko zupčanika u traci aplikacije ili {{key:Mod+,}}. Prva kartica, {{ui:DetailCraft}}, sadrži postavke koje pripadaju ovoj aplikaciji; {{ui:Opšte}} sadrži one koje dijele sve CadCraft aplikacije (tema, traka alata, paneli). Postavke DetailCraft postoje samo u aplikaciji: mijenjate ih ovdje, odmah stupaju na snagu, a ovaj pregledač ih pamti. Nisu sačuvane u datoteci modela.

## Novi elementi

Koje profile i kvalitete alati za postavljanje počinju koristiti:

| Alat | Američki profili (AISC), A992 | Evropski profili (EN), S355 |
|---|---|---|
| {{ui:Greda}} | W16x26, A992 | IPE300, S355 |
| {{ui:Stub}} | W12x50, A992 | HEB200, S355 |
| {{ui:Dijagonala}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Lim}} | A36 | S355 |

Američki profili su početni izbor. Evropski izbor koristi HEA160 za dijagonale jer EN katalog DetailCraft-a još nema šuplje presjeke ([Katalog profila](topic:profile-catalog)). I dalje možete izabrati bilo koji profil i kvalitet za sljedeći komad u panelu {{ui:Svojstva}} dok je alat za postavljanje uključen. Elementi koji su već u modelu zadržavaju svoj profil i kvalitet.

## Dupliranje i lijepljenje

- **Pomak (mm)**: x, y i z. {{ui:Dupliraj}} ({{key:Mod+D}}) stavlja kopiju ovoliko daleko od originala, a obrazac {{ui:Zalijepi s pomakom (mm, od originala)}} počinje s njim. Počinje od 6000, 0, 0: jedno polje od 6 m duž numerisanih mreža. Podesite ga na razmak vaših polja ili na visinu nivoa u z da kopirate sprat gore.
- **Kopiraj čeone i temeljne ploče zajedno s elementima** (uključeno na početku): veza ide s kopijom samo kada su svi elementi koje spaja kopirani. Isključite je da kopirate elemente i temelje bez njihovih veza, na primjer da isprobate drugu vezu na kopiji.

Vidi [Kopiranje, lijepljenje i dupliranje](topic:copy-paste).

## 3D prikaz

**Prikaži vijke i sidrene šipke** (uključeno na početku). Isključite da ih sakrijete u prikazu i vidite rupe i ploče zauzetog spoja. Skriveni vijci se ne mogu kliknuti; kliknite ploču da izaberete vezu. Spisak materijala, crteži i svi izvozi i dalje uključuju svaki vijak i šipku.

## Indikator u uglu

Šta se prikazuje u uglu 3D prikaza: **Kocka pogleda** (početno; gore desno — kliknite stranu, ivicu ili ugao da gledate odatle, prevucite je da orbitirate, prevucite njen kompasni prsten da okrenete model), **Ikona osa** (mala oznaka X, Y, Z u donjem lijevom uglu koja se okreće s pogledom: X crveno, Y zeleno, Z plavo) ili **Nijedan**. Samo u {{ui:3D}}; {{ui:Osnova}} i {{ui:Izgled}} ne prikazuju nijedno. Vidi [Kocka pogleda](topic:view-cube).

## Vraćanje

{{ui:Vrati postavke DetailCraft}} na dnu dijaloga vraća ove na početak (američki profili, pomak 6000, 0, 0, veze kopirane, vijci prikazani), zajedno s onima pod {{ui:Opšte}}.

## Crteži

**Veličina lista**: listovi crteža i radionički crteži rade se u pejzažnom položaju: A4, A3 (početno), A2, A1, ANSI B, ANSI C ili ANSI D. Prozori {{ui:Crteži}} i radioničkog crteža imaju istu listu. Vidi [Crteži opšteg rasporeda i sklopa](topic:drawings).

## Armatura

- **ASTM nazivi šipki**: #3 do #11, ili meki metrički #10 do #36 za iste šipke.
- **Oznake oblika za spisak savijanja**: DetailCraft-ovi S, L, U; tipovi ACI 315; ili oznake oblika BS 8666. Vidi [Referencu armature](topic:rebar-reference).

## Prevlačenje za odabir

**Pravougaonik** (kao ranije) ili **Lasso**: slobodna linija, a {{key:Space}} prebacuje između unutra, dodira i ograde dok prevlačite. Vidi [Odabir prozorom](topic:select-and-change#select-with-a-window).
