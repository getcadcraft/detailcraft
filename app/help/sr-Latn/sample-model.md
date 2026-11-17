---
title: Istražite primer okvira
summary: Otvorite ugrađeni dvotravejni okvir i upoznajte šta DetailCraft pravi, od oznaka do NC datoteka.
keywords: primer, uzorak, demo, okvir, upoznavanje, obilazak, isprobaj
from: 5c5944dd
---

Primer okvira je mali, potpun model: svaka vrsta stvari koju DetailCraft pravi pojavljuje se bar jednom. To je najbrži način da upoznate aplikaciju i da proverite izvoz pre nego što se na njega oslonite.

## Otvaranje

1. Izaberite {{ui:Primer}} u grupi {{ui:Datoteka}}.
2. Ako vaš trenutni model ima nesačuvane izmene, izaberite {{ui:Prvo sačuvaj}} ili {{ui:Odbaci izmene}}.
3. Statusna traka kaže: „Primer okvira: 6 stubova sa baznim limovima, 4 grede sa čeonim limovima, jedna dijagonala i 7 temelja sa armaturom.“

Primer se otvara kao novi model pod nazivom „Primer okvira“. Ne menja ništa drugo i nema šta da se opozove.

## Šta je u njemu

- **Mreže** 1, 2, 3 na 6000 mm i A, B na 7000 mm. **Nivoi** Nivo 1 na 0 i Nivo 2 na 4000.
- **Šest stubova**, W12x50, od Nivoa 1 do Nivoa 2 na svakom preseku, svaki na baznom limu od 25 mm sa četiri sidrena štapa.
- **Četiri grede**, W16x26, na Nivou 2 duž linija mreže A i B, gornja strana čelika na nivou, sa ravnim zavrtnjenim čeonim limom na oba kraja (ukupno osam).
- **Jedna dijagonala**, HSS4x4x1/4, od A/1 na Nivou 1 do A/2 na Nivou 2.
- **Šest temelja-stopa**, 2000 x 2000 x 600, po jedan ispod svakog stuba, sa donjom mrežom sa kukama u oba pravca.
- **Još jedan temelj** pored okvira, 2400 x 1800 x 600, sa šest startnih šipki sa kukama koje stoje uspravno za betonski stub.

## Šta isprobati

1. Kliknite gredu. Pročitajte njenu {{ui:Oznaka dela}}, {{ui:Sklop}}, {{ui:Dužina sečenja}} i {{ui:Skraćenje}}: dužina sečenja je kraća od razmaka mreže od 6000 mm jer svaki čeoni lim skraćuje gredu za polovinu dubine stuba plus debljinu lima.
2. Kliknite stub. Pod {{ui:Rupe}} navedene su rupe koje su čeoni limovi napravili u njegovim pojasnicama („8 rupa iz veza“; srednji stubovi imaju 16, po jedan skup u svakoj pojasnici).
3. U listi {{ui:Oznake delova}} sa leve strane vidite da sve četiri grede dele jednu oznaku: to su isti komad čelika. Ćoškasti stubovi takođe dele jednu oznaku, iako im rupe gledaju u suprotnim smerovima, jer je stub okrenut za kraj isti komad. Srednji stubovi, sa rupama u obe pojasnice, dobijaju drugu oznaku.
4. Kliknite čeoni lim (ili jedan od njegovih zavrtnjeva). Panel {{ui:Svojstva}} prikazuje podešavanja lima, zavrtnja i zavara, zavrtnje koje pravi (sa njihovom dužinom izvedenom iz stezanja) i sva upozorenja o rastojanju od ivice.
5. Otvorite karticu {{ui:Spisak materijala}}. Delovi, sklopovi (greda sa svoja dva čeona lima je jedan sklop), kao i zavrtnji i sidreni štapovi navedeni su sa težinama. Trebalo bi da vidite šest oznaka delova: c1 (dva srednja stuba) i c2 (četiri ćoškasta stuba), oba W12x50 na 3975 mm; b1, četiri grede W16x26 na 5650 mm; br1, dijagonala; p1, osam čeonih limova PL20x180; i p2, šest baznih limova PL25x400. Veznih sredstava ima 64 zavrtnja 20 x 70 A325 i 24 sidrena štapa 20 x 575.
6. Otvorite karticu {{ui:Raspored savijanja}}. Šest istih temelja dele oznake šipki; temelj pored okvira dodaje svoje.
7. Kliknite dijagonalu i pogledajte grupu {{ui:Izlaz}}: {{ui:Radionički crtež}} je zasivljen, jer radionički crteži za sada pokrivaju samo I-profile i limove.
8. Izaberite {{ui:NC datoteke}}. Zip sadrži datoteku za svaku oznaku I-profila i lima; statusna traka navodi oznaku dijagonale kao nenapisanu.
9. Izaberite {{ui:IFC}} i otvorite datoteku u bilo kom IFC pregledaču da proverite kako je čita vaš drugi softver.

## Koristite ga kao polazište

Primer je običan model. Promenite ga, zatim ga preimenujte u polju {{ui:Naziv}} i sačuvajte pod novim nazivom pomoću {{key:Mod+S}}.
