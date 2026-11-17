---
title: Provjeri oznake i spisak materijala
summary: Pročitaj oznake dijelova i sklopova koje DetailCraft daje svakom komadu, provjeri spisak materijala i preuzmi ga kao CSV.
keywords: oznake, numerisanje, oznaka dijela, oznaka sklopa, oznaka komada, bom, spisak materijala, lista materijala, težine, lista vijaka, csv, numerisanje
from: caa2ee80
---

DetailCraft sam označava model. Nema komande za numerisanje i ništa se ne pokreće: nakon svake promjene izračunava koji su dijelovi isti komad čelika i daje im jednu oznaku.

## Gdje se oznake prikazuju

- Spisak {{ui:Oznake dijelova}} u panelu {{ui:Model}}: svaka oznaka sa svojim profilom, dužinom i brojem. Klikni na jednu da odabereš prvi dio s tom oznakom.
- Panel {{ui:Svojstva}} odabranog elementa (i spisak **Oznake dijelova** u lijevom panelu): {{ui:Oznaka dijela}} i {{ui:Sklop}}. Naslov panela takođe nosi oznaku, na primjer „Greda b1“.
- Kartica {{ui:Spisak materijala}}, CSV, nazivi NC datoteka, radionički crteži i IFC izvoz (kao oznaka svakog elementa).

## Kako se dijelovi označavaju

- **Oznake dijelova:** c za stubove, b za grede, br za dijagonale, st za kosnike stepenica, p za limove (uključujući čeone i temeljne ploče). Zatim broj: c1, c2, b1, p1 … Kad dijelovi pripadaju većem broju faza, prvo ide broj faze, na primjer 2-b1.
- **Oznake sklopova:** C, B, BR ili P. Sklop je glavni element i limovi zavareni za njega, kao što je greda sa svoje dvije čeone ploče, ili stub sa svojom temeljnom pločom.
- Dva dijela dijele oznaku kad imaju isti profil, materijal i dužinu reza, iste rupe i useke, sve unutar 1 mm, čak i ako je jedan okrenut kraj za kraj ili naopako u odnosu na drugi.
- Numerisanje ide prvo stubovi, pa grede, dijagonale i limovi; unutar svake grupe, po nazivu profila, pa od najdužeg.

Puna pravila, uključujući koji okreti se računaju za U-profile i uglovnike: [Pravila označavanja](topic:mark-rules).

:::warning
Oznake se ponovo računaju nakon svake promjene, pa se mogu ponovo numerisati. Dodavanje dijela, promjena profila ili dodavanje rupe može promijeniti b3 u b4. Oznake smatraj konačnima tek kad je model završen, i pravi BOM, NC datoteke i radioničke crteže iz istog sačuvanog modela.
:::

## Čitanje spiska materijala

Otvori karticu {{ui:Spisak materijala}} pri dnu. Ima tri tabele.

**Dijelovi**, sa ukupnom težinom čelika u naslovu:

| Kolona | Značenje |
|---|---|
| Oznaka dijela | Klikni da odabereš prvi dio s ovom oznakom |
| Tip | greda, stub, dijagonala, kosnik ili lim |
| Profil | Na primjer W16x26 ili PL20x180 |
| Materijal | Klasa koju si postavio |
| Dužina (mm) | Dužina reza, nakon veza |
| Broj | Koliko |
| Jedinična težina (kg) | Masa profila po metru × dužina |
| Ukupna težina (kg) | Jedinična težina × broj |

Posljednji red daje ukupan broj i težinu.

**Sklopovi:** svaka oznaka sklopa, njegov glavni dio, svi njegovi dijelovi (na primjer „b1 + p1 + p1“), broj, jedinična težina i ukupna težina.

**Vijci i sidrene šipke:** grupisani po vrsti, prečniku, dužini i klasi, sa brojem.

:::note
Težine su bruto: rupe i useci se ne oduzimaju. Vijci, matice, podloške i varovi nisu u težini čelika.
:::

## Preuzimanje

Izaberi {{ui:Preuzmi CSV}} u kartici ili {{ui:BOM}} u grupi {{ui:Izlaz}}. Datoteka `<name> BOM.csv` sadrži tri tabele jednu za drugom, svaka pod svojim naslovom, s praznim redom između. Otvara se u bilo kojem programu za tabele.

## Provjeri prije slanja

1. Otvori karticu {{ui:Problemi}} i riješi svaki red. Veza koja se nije mogla napraviti ne dodaje ploču, rupe ni vijke, pa bi BOM bio manjkav.
2. Traži oznake koje nisi očekivao. Dvije grede za koje misliš da su iste, a imaju različite oznake, obično se razlikuju po rupi, useku ili dužini reza; odaberi svaku i uporedi.
3. Sačuvaj model, pa izradi sve izvoze iz tog sačuvanog stanja.
