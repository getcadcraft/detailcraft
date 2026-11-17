---
title: Istražite primjer okvira
summary: Otvorite ugrađeni dvotravni okvir i njime saznajte što DetailCraft izrađuje, od oznaka do NC datoteka.
keywords: primjer, demo, okvir, učenje, obilazak, isprobaj
from: 5c5944dd
---

Primjer okvira je mali, potpun model: svaka vrsta stvari koju DetailCraft izrađuje pojavljuje se barem jednom. To je najbrži način da naučite program i isprobate izvoz prije nego se oslonite na njega.

## Otvorite ga

1. Odaberite {{ui:Primjer}} u grupi {{ui:Datoteka}}.
2. Ako vaš trenutni model ima nespremljene promjene, odaberite {{ui:Prvo spremi}} ili {{ui:Odbaci promjene}}.
3. Statusna traka kaže: „Primjer okvira: 6 stupova s temeljnim pločama, 4 grede s čeonim pločama, spreg, 7 temelja s armaturom.“

Primjer se otvara kao novi model pod nazivom „Primjer okvira“. Ne mijenja ništa drugo i nema što poništiti.

## Što je u njemu

- **Mreže** 1, 2, 3 na 6000 mm te A, B na 7000 mm. **Razine**: Razina 1 na 0 i Razina 2 na 4000.
- **Šest stupova**, W12x50, od Razine 1 do Razine 2 na svakom sjecištu, svaki na temeljnoj ploči od 25 mm s četiri sidrena vijka.
- **Četiri grede**, W16x26, na Razini 2 duž linija mreže A i B, gornja strana čelika na razini, s ravnom vijčanom čeonom pločom na oba kraja (ukupno osam).
- **Jedan spreg**, HSS4x4x1/4, od A/1 na Razini 1 do A/2 na Razini 2.
- **Šest temelja samaca**, 2000 x 2000 x 600, po jedan pod svakim stupom, s donjom mrežom s kukama u oba smjera.
- **Još jedan temelj** pored okvira, 2400 x 1800 x 600, sa šest početnih šipki s kukama koje stoje uspravno za betonski stup.

## Isprobajte

1. Kliknite gredu. Pročitajte njezinu {{ui:Oznaku pozicije}}, {{ui:Sklop}}, {{ui:Duljinu rezanja}} i {{ui:Skraćeno}}: duljina rezanja kraća je od razmaka mreže od 6000 mm jer svaka čeona ploča reže gredu unazad za polovicu dubine stupa plus debljinu ploče.
2. Kliknite stup. Pod {{ui:Rupe}} navedene su rupe koje su čeone ploče napravile u njegovoj pojasnici („8 rupa iz spojeva“; srednji stupovi imaju 16, po jedan skup u svakoj pojasnici).
3. Na popisu {{ui:Oznake pozicija}} lijevo vidite da sve četiri grede dijele jednu oznaku: to je isti komad čelika. Rubni stupovi također dijele oznaku, iako su im rupe okrenute u suprotnim smjerovima, jer je stup okrenut naopako isti komad. Srednji stupovi, s rupama u obje pojasnice, dobivaju drugu oznaku.
4. Kliknite čeonu ploču (ili jedan od njezinih vijaka). Ploča {{ui:Svojstva}} prikazuje postavke ploče, vijaka i zavara, vijke koje ona izrađuje (s duljinom izračunatom iz stezanja) te upozorenja o razmaku od ruba.
5. Otvorite karticu {{ui:Sastavnica}}. Dijelovi, sklopovi (greda sa svoje dvije čeone ploče jedan je sklop) te vijci i sidreni vijci navedeni su s težinama. Trebali biste vidjeti šest oznaka pozicija: c1 (dva srednja stupa) i c2 (četiri rubna stupa), oba W12x50 na 3975 mm; b1, četiri grede W16x26 na 5650 mm; br1, spreg; p1, osam čeonih ploča PL20x180; i p2, šest temeljnih ploča PL25x400. Spojna sredstva su 64 vijka 20 x 70 A325 i 24 sidrena vijka 20 x 575.
6. Otvorite karticu {{ui:Plan savijanja}}. Šest identičnih temelja dijeli oznake šipki; temelj s betonskim stupom dodaje svoje.
7. Kliknite spreg i pogledajte grupu {{ui:Izlaz}}: {{ui:Radionički crtež}} je zasivljen jer radionički crteži za sada pokrivaju samo I-profile i ploče.
8. Odaberite {{ui:NC datoteke}}. Zip sadrži datoteku za svaku oznaku I-profila i ploče; statusna traka navodi da oznaka sprega nije zapisana.
9. Odaberite {{ui:IFC}} i otvorite datoteku u bilo kojem IFC pregledniku da provjerite kako je čita vaš drugi softver.

## Koristite ga kao polazište

Primjer je običan model. Promijenite ga, zatim ga preimenujte u polju {{ui:Naziv}} i spremite pod novim nazivom pomoću {{key:Mod+S}}.
