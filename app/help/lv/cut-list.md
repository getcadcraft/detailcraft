---
title: Griezumu saraksts
summary: Sakārtojiet sijas, kolonnas, diagonāles un kāpņu sānsijas krājuma garumos, ņemot vērā zāģēšanas platumu, un redziet, cik stieņus vajag nopirkt un cik ir atlikums.
keywords: griezumu saraksts, sakārtošana, krājuma garums, stienis, zāģēšanas platums, zāģis, atlikums, atgriezums, atkritumi, apvienošana, iegāde, vairāki
from: 81d06ce5
---

Cilne {{ui:Griezumu saraksts}} zem skata aprēķina, kā modeļa lineārās detaļas griezt no krājuma stieņiem: cik stieņu katra garuma vajag nopirkt katram profilam un materiālam, kas ietilpst katrā stienī, un atlikumu.

## Iestatiet krājumu

Cilnes augšdaļā:

- **Krājuma garumi (mm):** garumi, ko var nopirkt, atdalīti ar atstarpēm, piemēram, `6000 12000` vai 20 pēdu un 40 pēdu stieņi kā `6096 12192`. Līdz astoņiem.
- **Zāģēšanas platums (mm):** cik daudz pieņem katrs griezums (sākumā 3).
- **Gala apgriešana (mm):** nogriež katra stieņa galu pirms pirmā gabala (sākumā 0).
- **Paturēt atlikumus no (mm):** atlikums, kas ir vismaz tik garš, tiek atgriezts krājumā; īsāks ir lūžņi (sākumā 500).

Tie tiek saglabāti šajā pārlūkprogrammā, tāpat kā citi [iestatījumi](topic:settings).

## Kā tiek sakārtots

- Katra sija, kolonna, diagonāle un kāpņu sānsija pēc detaļas marķējuma un skaita; plāksnes tiek grieztas no loksnes un šeit netiek sakārtotas.
- Katrs profils un materiāls atsevišķi.
- Garākie gabali pirmie, katrs tajā pirmajā stienī, kurā tas ietilpst; jauns stienis sākas kā garākais krājuma garums. Pēc tam katrs stienis tiek nopirkts kā īsākais krājuma garums, kas vēl ietilpina tā griezumus.
- Katrs griezums paņem zāģēšanas platumu (nekas pēc griezuma, kas beidzas tieši stieņa galā); katrs stienis zaudē gala apgriešanu.
- Gabals, kas garāks par visiem krājuma garumiem, tiek uzskaitīts zem **Garāks par jebkuru krājumu** un netiek sakārtots: salieciet to (skatiet [Savienojumi](topic:splices)) vai pievienojiet garāku krājuma garumu.

## Lasiet to

- **Kopsavilkums:** katram profilam un materiālam — gabali, stieņi, kas jānopērk (piemēram, "2 × 12000, 1 × 6000"), nopirktie un izmantotie metri un atlikums.
- **Stieņi un to griezumi:** katrs stienis, tā krājuma garums, tā griezumi kā detaļas marķējums un garums, un atlikums — paturēts vai lūžņi.

{{ui:Lejupielādēt CSV}} saglabā abas tabulas kā `<name> cut list.csv`.

DetailCraft neizvieto plāksnes lokšņu pa tām un nesajauc profilus vai materiālus vienā stienī.
