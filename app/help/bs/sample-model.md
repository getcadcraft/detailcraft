---
title: Istražite primjer okvira
summary: Otvorite ugrađeni okvir s dva polja i koristite ga da naučite šta DetailCraft pravi, od oznaka do NC datoteka.
keywords: primjer, uzorak, demo, okvir, učenje, obilazak, isprobaj
from: 5c5944dd
---

Primjer okvira je mali, potpun model: svaka vrsta stvari koju DetailCraft pravi pojavljuje se bar jednom. To je najbrži način da naučite aplikaciju i isprobate izvoz prije nego se na njega oslonite.

## Otvorite ga

1. Izaberite {{ui:Primjer}} u grupi {{ui:Datoteka}}.
2. Ako vaš trenutni model ima nesačuvane promjene, izaberite {{ui:Prvo spasi}} ili {{ui:Odbaci promjene}}.
3. Statusna traka kaže: „Primjer okvira: 6 stubova s temeljnim pločama, 4 grede s čeonim pločama, jedna dijagonala, 7 temelja s armaturom.“

Primjer se otvara kao novi model pod nazivom „Primjer okvira“. Ne mijenja ništa drugo i nema šta poništiti.

## Šta je u njemu

- **Mreže** 1, 2, 3 na 6000 mm i A, B na 7000 mm. **Nivoi** Nivo 1 na 0 i Nivo 2 na 4000.
- **Šest stubova**, W12x50, od Nivoa 1 do Nivoa 2 na svakom presjeku, svaki na temeljnoj ploči 25 mm sa četiri sidrene šipke.
- **Četiri grede**, W16x26, na Nivou 2 duž linija mreže A i B, vrh čelika na nivou, sa ravnom zavrnutom čeonom pločom na oba kraja (ukupno osam).
- **Jedna dijagonala**, HSS4x4x1/4, od A/1 na Nivou 1 do A/2 na Nivou 2.
- **Šest plitkih temelja**, 2000 x 2000 x 600, po jedan ispod svakog stuba, sa donjom mrežom s kukama u oba smjera.
- **Još jedan temelj** pored okvira, 2400 x 1800 x 600, sa šest polaznih šipki s kukama koje stoje uspravno za betonski stup.

## Šta isprobati

1. Kliknite gredu. Pročitajte njenu {{ui:Oznaka dijela}}, {{ui:Sklop}}, {{ui:Dužina reza}} i {{ui:Skraćenje}}: dužina reza je kraća od razmaka mreže od 6000 mm jer svaka čeona ploča skraćuje gredu za polovinu dubine stuba plus debljinu ploče.
2. Kliknite stub. Pod {{ui:Rupe}} navedene su rupe koje su čeone ploče napravile u njegovoj pojasnici („8 rupa iz veza“; srednji stubovi imaju 16, po jedan skup u svakoj pojasnici).
3. U listi {{ui:Oznake dijelova}} s lijeve strane vidite da sve četiri grede dijele jednu oznaku: to je isti komad čelika. Ugaoni stubovi također dijele oznaku, iako su im rupe okrenute u suprotnim smjerovima, jer je stub okrenut s kraja na kraj isti komad. Srednji stubovi, s rupama u obje pojasnice, dobijaju drugu oznaku.
4. Kliknite čeonu ploču (ili jedan od njenih vijaka). Panel {{ui:Svojstva}} prikazuje postavke ploče, vijka i zavara, vijke koje pravi (sa njihovom dužinom izračunatom iz stezanja) i sva upozorenja o rastojanju od ivice.
5. Otvorite karticu {{ui:Spisak materijala}}. Dijelovi, sklopovi (greda sa svoje dvije čeone ploče je jedan sklop), te vijci i sidrene šipke navedeni su s težinama. Trebalo bi da vidite šest oznaka dijelova: c1 (dva srednja stuba) i c2 (četiri ugaona stuba), oba W12x50 na 3975 mm; b1, četiri grede W16x26 na 5650 mm; br1, dijagonala; p1, osam čeonih ploča PL20x180; i p2, šest temeljnih ploča PL25x400. Pričvrsni elementi su 64 vijka 20 x 70 A325 i 24 sidrene šipke 20 x 575.
6. Otvorite karticu {{ui:Spisak savijanja}}. Šest identičnih temelja dijele oznake šipki; temelj stupa dodaje svoju.
7. Kliknite dijagonalu i pogledajte grupu {{ui:Izlaz}}: {{ui:Radionički crtež}} je zasivljen, jer radionički crteži za sada pokrivaju samo I-profile i ploče.
8. Izaberite {{ui:NC datoteke}}. Zip sadrži datoteku za svaku oznaku I-profila i ploče; statusna traka navodi oznaku dijagonale kao nenapisanu.
9. Izaberite {{ui:IFC}} i otvorite datoteku u bilo kojem IFC pregledniku da provjerite kako je čita vaš drugi softver.

## Koristite ga kao polaznu tačku

Primjer je običan model. Promijenite ga, zatim ga preimenujte u polju {{ui:Naziv}} i sačuvajte pod novim nazivom s {{key:Mod+S}}.
