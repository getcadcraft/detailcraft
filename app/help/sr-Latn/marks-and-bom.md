---
title: Provera oznaka i spiska materijala
summary: Pročitaj oznake delova i sklopova koje DetailCraft daje svakom komadu, proveri spisak materijala i preuzmi ga kao CSV.
keywords: oznake, numerisanje, oznaka dela, oznaka sklopa, oznaka komada, bom, spisak materijala, težine, spisak zavrtnjeva, csv
from: caa2ee80
---

DetailCraft sam označava model. Nema komande za numerisanje i ništa se ne pokreće: posle svake promene izračunava koji su delovi isti komad čelika i daje im jednu oznaku.

## Gde se oznake prikazuju

- Spisak {{ui:Oznake delova}} na panelu {{ui:Model}}: svaka oznaka sa svojim profilom, dužinom i brojem. Klikni na jednu da izabereš prvi deo sa tom oznakom.
- Panel {{ui:Svojstva}} izabranog elementa (i spisak **Oznake delova** na levom panelu): {{ui:Oznaka dela}} i {{ui:Sklop}}. Naslov panela takođe nosi oznaku, na primer „Greda b1“.
- Kartica {{ui:Spisak materijala}}, CSV, nazivi NC datoteka, radionički crteži i IFC izvoz (kao oznaka svakog elementa).

## Kako se delovi označavaju

- **Oznake delova:** c za stubove, b za grede, br za dijagonale, st za kosnike stepeništa, p za limove (uključujući krajnje i bazne limove). Zatim broj: c1, c2, b1, p1 … Kada delovi pripadaju većoj fazi, broj faze ide prvi, na primer 2-b1.
- **Oznake sklopova:** C, B, BR ili P. Sklop je glavni element i limovi zavareni za njega, na primer greda sa dva krajnja lima ili stub sa baznim limom.
- Dva dela dele oznaku kada imaju isti profil, materijal i dužinu sečenja, iste rupe i useke, sve u okviru 1 mm, čak i ako je jedan okrenut s kraja na kraj ili naopako u odnosu na drugi.
- Numerisanje ide prvo po stubovima, pa gredama, dijagonalama i limovima; unutar svakog, po nazivu profila, pa od najdužeg.

Puna pravila, uključujući koja okretanja se računaju za U-profile i uglovnike: [Pravila oznaka](topic:mark-rules).

:::warning
Oznake se računaju iznova posle svake promene, pa mogu da se preoznače. Dodavanje dela, promena profila ili dodavanje rupe može da pomeri b3 u b4. Oznake smatraj konačnima tek kada je model završen i izradi spisak materijala, NC datoteke i radioničke crteže iz istog sačuvanog modela.
:::

## Čitanje spiska materijala

Otvori karticu {{ui:Spisak materijala}} pri dnu. Ima tri tabele.

**Delovi**, sa ukupnom težinom čelika u naslovu:

| Kolona | Značenje |
|---|---|
| Oznaka dela | Klikni da izabereš prvi deo sa ovom oznakom |
| Tip | greda, stub, dijagonala, kosnik ili lim |
| Profil | Na primer W16x26 ili PL20x180 |
| Materijal | Klasa koju si podesio |
| Dužina (mm) | Dužina sečenja, posle veza |
| Količina | Koliko |
| Jedinična težina (kg) | Masa profila po metru × dužina |
| Ukupna težina (kg) | Jedinična težina × količina |

Poslednji red daje ukupnu količinu i težinu.

**Sklopovi:** svaka oznaka sklopa, njegov glavni deo, svi njegovi delovi (na primer „b1 + p1 + p1“), količina, jedinična težina i ukupna težina.

**Zavrtnji i ankerne šipke:** grupisani po vrsti, prečniku, dužini i klasi, sa brojem.

:::note
Težine su bruto: rupe i useci se ne oduzimaju. Zavrtnji, matice, podloške i varovi nisu u težini čelika.
:::

## Preuzimanje

Izaberi {{ui:Preuzmi CSV}} u kartici ili {{ui:BOM}} u grupi {{ui:Izlaz}}. Datoteka `<name> BOM.csv` sadrži tri tabele jednu za drugom, svaka ispod svog naslova, sa praznim redom između. Otvara se u bilo kom programu za tabele.

## Proveri pre slanja

1. Otvori karticu {{ui:Problemi}} i ukloni svaki red. Veza koja se nije mogla izgraditi ne dodaje lim, rupe ni zavrtnje, pa bi spisak materijala bio kratak.
2. Traži oznake koje nisi očekivao. Dve grede za koje misliš da su iste, a imaju različite oznake, obično se razlikuju po rupi, usecima ili dužini sečenja; izaberi svaku i uporedi.
3. Sačuvaj model, pa radi svaki izvoz iz tog sačuvanog stanja.
