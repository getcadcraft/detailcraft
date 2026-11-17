---
title: DetailCraft postavke
summary: Nove elemente pokrenite kao američke ili europske profile, odredite koliko daleko Dupliciraj pomiče kopiju, odaberite hoće li kopije nositi svoje spojeve te prikažite ili sakrijte vijke u 3D prikazu.
keywords: postavke, preferencije, veličina lista, veličina papira, crteži, opcije, čelik, aisc, en, europski profili, američki profili, metrički profili, zadani profil, kvaliteta, s355, a992, pomak duplikata, pomak lijepljenja, kopiraj spojeve, vijci, sidreni vijci, sakrij vijke, vrati zadano
from: e46cea57
---

Otvorite {{ui:Postavke}} zupčanikom u traci aplikacije ili pomoću {{key:Mod+,}}. Prva kartica, {{ui:DetailCraft}}, sadrži postavke koje pripadaju ovoj aplikaciji; {{ui:Općenito}} sadrži one koje dijele sve aplikacije CadCrafta (tema, alatna traka, ploče). Postavke DetailCrafta postoje samo u aplikaciji: mijenjate ih ovdje, odmah stupaju na snagu, a ovaj preglednik ih pamti. Ne spremaju se u vašu datoteku modela.

## Novi elementi

Koje profile i kvalitete alati za postavljanje na početku koriste:

| Alat | Američki profili (AISC), A992 | Europski profili (EN), S355 |
|---|---|---|
| {{ui:Greda}} | W16x26, A992 | IPE300, S355 |
| {{ui:Stup}} | W12x50, A992 | HEB200, S355 |
| {{ui:Spreg}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Ploča}} | A36 | S355 |

Američki profili su početni izbor. Europski izbor za sprege koristi HEA160 jer DetailCraftov EN katalog još nema šuplje presjeke ([Katalog profila](topic:profile-catalog)). I dalje možete odabrati bilo koji profil i kvalitetu za sljedeći dio na ploči {{ui:Svojstva}} dok je alat za postavljanje uključen. Elementi koji su već u modelu zadržavaju svoj profil i kvalitetu.

## Dupliciranje i lijepljenje

- **Pomak (mm)**: x, y i z. {{ui:Dupliciraj}} ({{key:Mod+D}}) stavlja kopiju ovoliko daleko od izvornika, a obrazac {{ui:Zalijepi s pomakom (mm, od originala)}} počinje s njim. Počinje s 6000, 0, 0: jedno polje od 6 m duž numeriranih mreža. Postavite ga na razmak svojih polja ili na visinu razine u z da kopirate kat gore.
- **{{ui:Kopiraj čeone i podložne ploče sa svojim štapovima}}** (uključeno na početku): spoj ide s kopijom samo kada su svi elementi koje spaja kopirani. Isključite da kopirate elemente i temelje bez njihovih spojeva, primjerice da na kopiji isprobate drugi spoj.

Vidi [Kopiraj, zalijepi i dupliciraj](topic:copy-paste).

## 3D prikaz

**Prikaži vijke i sidrene vijke** (uključeno na početku). Isključite da ih sakrijete u prikazu i vidite rupe i ploče zauzetog spoja. Skriveni vijci se ne mogu kliknuti; kliknite ploču da odaberete spoj. {{ui:Sastavnica}}, crteži i svi izvozi i dalje uključuju svaki vijak i sidreni vijak.

## Indikator u kutu

Što se prikazuje u kutu 3D prikaza: **ViewCube** (početni; gore desno: kliknite lice, rub ili kut da gledate odatle, povucite ga za kruženje, povucite njegov prsten kompasa da okrenete model), **Ikona osi** (mala oznaka X, Y, Z u donjem lijevom kutu koja se okreće s pogledom: X crveno, Y zeleno, Z plavo) ili **Ništa**. Samo u {{ui:3D}}; {{ui:Tlocrt}} i {{ui:Pročelje}} ne prikazuju ni jedno ni drugo. Vidi [ViewCube](topic:view-cube).

## Vrati zadano

{{ui:Vrati zadano DetailCraft postavke}} na dnu dijaloškog okvira vraća ovo na početak (američki profili, pomak 6000, 0, 0, spojevi kopirani, vijci prikazani), zajedno s postavkama {{ui:Općenito}}.

## Crteži

**Veličina lista**: listovi crteža i radionički crteži izrađuju se u vodoravnoj orijentaciji: A4, A3 (početno), A2, A1, ANSI B, ANSI C ili ANSI D. Prozori {{ui:Crteži}} i radionički crteži imaju isti popis. Vidi [Crteži općeg rasporeda i sklopova](topic:drawings).

## Armatura

- **ASTM nazivi šipki**: #3 do #11, ili meki metrički #10 do #36 za iste šipke.
- **Kodovi oblika plana savijanja**: DetailCraftovi S, L, U; tipovi ACI 315; ili kodovi oblika BS 8666. Vidi [Referenca armature](topic:rebar-reference).

## Povlačenje za odabir

**Pravokutnik** (kao prije) ili **{{ui:Laso}}**: slobodna linija, a {{key:Space}} tijekom povlačenja prebacuje između unutra, dotiče i ograde. Vidi [Odabir prozorom](topic:select-and-change#select-with-a-window).
