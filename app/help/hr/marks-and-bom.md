---
title: Provjera oznaka i sastavnice
summary: Pročitajte oznake dijelova i sklopova koje DetailCraft daje svakom komadu, provjerite sastavnicu i preuzmite je kao CSV.
keywords: oznake, numeriranje, oznaka pozicije, oznaka sklopa, oznaka komada, bom, sastavnica, popis materijala, težine, popis vijaka, csv
from: caa2ee80
---

DetailCraft sam označuje model. Nema naredbe za numeriranje i ništa se ne pokreće: nakon svake promjene izračuna koji su dijelovi isti komad čelika i daje im jednu oznaku.

## Gdje se oznake prikazuju

- Popis {{ui:Oznake pozicija}} na panelu {{ui:Model}}: svaka oznaka s profilom, duljinom i količinom. Kliknite jednu da odaberete prvi dio s tom oznakom.
- Panel {{ui:Svojstva}} odabranog štapa (i popis **Oznake pozicija** u lijevom panelu): {{ui:Oznaka pozicije}} i {{ui:Sklop}}. Naslov panela također nosi oznaku, na primjer „Greda b1“.
- Kartica {{ui:Sastavnica}}, CSV, nazivi NC datoteka, radionički crteži i IFC izvoz (kao oznaka svakog elementa).

## Kako se dijelovi označuju

- **Oznake pozicija:** c za stupove, b za grede, br za sprege, st za tetive stubišta, p za ploče (uključujući čeone i podložne ploče). Zatim broj: c1, c2, b1, p1 … Kad dijelovi stoje u više faza, prvo ide broj faze, na primjer 2-b1.
- **Oznake sklopova:** C, B, BR ili P. Sklop je glavni štap i ploče zavarene na njega, na primjer greda s dvije čeone ploče ili stup s podložnom pločom.
- Dva dijela imaju istu oznaku ako imaju isti profil, materijal i duljinu reza te iste rupe i izreze, sve unutar 1 mm, čak i ako je jedan okrenut naopako ili naopačke u odnosu na drugi.
- Numeriranje ide prvo stupovi, zatim grede, sprege i ploče; unutar svake grupe po nazivu profila, pa od najduljeg.

Potpuna pravila, uključujući to koji se okreti broje za U-profile i kutnike: [Pravila označavanja](topic:mark-rules).

:::warning
Oznake se izračunavaju iznova nakon svake promjene, pa se mogu preračunati. Dodavanje dijela, promjena profila ili dodavanje rupe može pomaknuti b3 u b4. Oznake smatrajte konačnima tek kad je model gotov, a sastavnicu, NC datoteke i radioničke crteže izradite iz istog spremljenog modela.
:::

## Čitanje sastavnice

Otvorite karticu {{ui:Sastavnica}} na dnu. Ima tri tablice.

**Dijelovi**, s ukupnom težinom čelika u zaglavlju:

| Stupac | Značenje |
|---|---|
| Oznaka pozicije | Kliknite da odaberete prvi dio s tom oznakom |
| Vrsta | greda, stup, sprega, tetiva ili ploča |
| Profil | Na primjer W16x26 ili PL20x180 |
| Materijal | Razred koji ste postavili |
| Duljina (mm) | Duljina reza, nakon spojeva |
| Količina | Koliko komada |
| Jedinična težina (kg) | Masa profila po metru × duljina |
| Ukupna težina (kg) | Jedinična težina × količina |

Zadnji redak daje ukupnu količinu i težinu.

**Sklopovi:** svaka oznaka sklopa, njegov glavni dio, svi njegovi dijelovi (na primjer „b1 + p1 + p1“), količina, jedinična težina i ukupna težina.

**Vijci i sidreni vijci:** grupirani po vrsti, promjeru, duljini i razredu, s količinom.

:::note
Težine su bruto: rupe i izrezi se ne odbijaju. Vijci, matice, podloške i zavari nisu u težini čelika.
:::

## Preuzimanje

Odaberite {{ui:Preuzmi CSV}} na kartici ili {{ui:BOM}} u grupi {{ui:Izlaz}}. Datoteka `<name> BOM.csv` sadrži tri tablice jednu za drugom, svaka pod svojim naslovom, s praznim retkom između. Otvara se u svakom programu za tablične proračune.

## Provjerite prije slanja

1. Otvorite karticu {{ui:Problemi}} i riješite svaki redak. Spoj koji se nije mogao izraditi ne dodaje ploču, rupe ni vijke, pa bi sastavnica bila manjkava.
2. Potražite oznake koje niste očekivali. Dvije grede za koje mislite da su iste, a imaju različite oznake, obično se razlikuju po rupi, izrezu ili duljini reza; odaberite svaku i usporedite.
3. Spremite model, zatim izvezite sve iz tog spremljenog stanja.
