---
title: Podešavanja DetailCraft-a
summary: Pokrenite nove elemente kao američke ili evropske profile, podesite koliko je daleko Dupliraj pomera kopiju, izaberite da li kopije nose svoje veze, i prikažite ili sakrijte zavrtnje u 3D prikazu.
keywords: podešavanja, postavke, veličina lista, veličina papira, crteži, opcije, čelik, aisc, en, evropski profili, američki profili, metrički profili, podrazumevani profil, kvalitet, s355, a992, pomeraj dupliranja, pomeraj nalepljivanja, kopiraj veze, zavrtnji, sidreni štapovi, sakrij zavrtnje, vrati
from: e46cea57
---

Otvorite {{ui:Podešavanja}} preko zupčanika na traci aplikacije ili pomoću {{key:Mod+,}}. Prva kartica, {{ui:DetailCraft}}, sadrži podešavanja koja pripadaju ovoj aplikaciji; {{ui:Opšte}} sadrži ona koja dele sve CadCraft aplikacije (tema, traka alata, paneli). Podešavanja DetailCraft-a postoje samo u aplikaciji: menjate ih ovde, odmah važe, a ovaj pregledač ih pamti. Ne čuvaju se u datoteci modela.

## Novi elementi

Koje profile i kvalitete alatke za postavljanje početno koriste:

| Alatka | Američki profili (AISC), A992 | Evropski profili (EN), S355 |
|---|---|---|
| {{ui:Greda}} | W16x26, A992 | IPE300, S355 |
| {{ui:Stub}} | W12x50, A992 | HEB200, S355 |
| {{ui:Dijagonala}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Lim}} | A36 | S355 |

Američki profili su polazni izbor. Evropski izbor koristi HEA160 za dijagonale, jer DetailCraft-ov EN katalog još nema šuplje preseke ([Katalog profila](topic:profile-catalog)). I dalje možete izabrati bilo koji profil i kvalitet za sledeći komad u panelu {{ui:Svojstva}} dok je alatka za postavljanje uključena. Elementi koji su već u modelu zadržavaju svoj profil i kvalitet.

## Dupliranje i nalepljivanje

- **Pomeraj (mm)**: x, y i z. {{ui:Dupliraj}} ({{key:Mod+D}}) stavlja kopiju ovoliko daleko od originala, a obrazac {{ui:Nalepi pomerajem (mm, od originala)}} počinje sa njim. Počinje od 6000, 0, 0: jedan raspon od 6 m duž numerisanih mreža. Postavite ga na razmak vaših raspona, ili na visinu nivoa u z da kopirate sprat naviše.
- **Kopiraj čeone i bazne limove zajedno sa elementima** (uključeno na početku): veza ide uz kopiju samo kada se svaki element koji spaja kopira. Isključite da kopirate elemente i temelje bez njihovih veza, na primer da isprobate drugačiju vezu na kopiji.

Pogledajte [Kopiranje, nalepljivanje i dupliranje](topic:copy-paste).

## 3D prikaz

**Prikaži zavrtnje i sidrene štapove** (uključeno na početku). Isključite da ih sakrijete u prikazu i vidite rupe i limove zauzetog spoja. Skriveni zavrtnji se ne mogu kliknuti; kliknite lim da izaberete vezu. Spisak materijala, crteži i svi izvozi i dalje uključuju svaki zavrtanj i štap.

## Indikator ugla

Šta se prikazuje u uglu 3D prikaza: **Kocka pogleda** (početno; gore desno: kliknite stranu, ivicu ili ugao da pogledate odatle, prevucite da zaokrenete pogled, prevucite njen kompas da okrećete model), **Ikona osa** (mali X, Y, Z marker dole levo koji se okreće sa pogledom: X crveno, Y zeleno, Z plavo) ili **Nijedan**. Samo u {{ui:3D}}; {{ui:Osnova}} i {{ui:Izgled}} ne prikazuju nijedno. Pogledajte [Kocka pogleda](topic:view-cube).

## Vraćanje

{{ui:Vrati DetailCraft podešavanja}} na dnu dijaloga vraća ih na početne vrednosti (američki profili, pomeraj 6000, 0, 0, veze se kopiraju, zavrtnji prikazani), zajedno sa onima iz {{ui:Opšte}}.

## Crteži

**Veličina lista**: listovi crteža i radionički crteži rade se na listu položenom u pejzažnoj orijentaciji: A4, A3 (početno), A2, A1, ANSI B, ANSI C ili ANSI D. Prozori {{ui:Crteži}} i radioničkog crteža imaju istu listu. Pogledajte [Crteži opšteg rasporeda i sklopa](topic:drawings).

## Armatura

- **Nazivi šipki po ASTM**: #3 do #11, ili meko-metrički #10 do #36 za iste šipke.
- **Kodovi oblika u rasporedu savijanja**: DetailCraft-ovi S, L, U; tipovi ACI 315; ili kodovi oblika BS 8666. Pogledajte [Referenca armature](topic:rebar-reference).

## Prevlačenje za izbor

**Pravougaonik** (kao ranije) ili **Omča**: slobodna linija, sa {{key:Space}} koji prebacuje između unutra, dodira i ograde dok prevlačite. Pogledajte [Izbor prozorom](topic:select-and-change#select-with-a-window).
