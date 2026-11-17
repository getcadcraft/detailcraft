---
title: Postavljanje limova i dodavanje prilagođenih profila
summary: Postavi slobodne limove prema debljini i širini, i definiši sopstvene I, U, ugaone, cevne ili ravne preseke.
keywords: lim, ravna traka, prilagođeni profil, korisnički profil, parametarski, presek, oblik, poprečni presek, pl
from: c24c3b51
---

## Postavljanje lima

Lim se postavlja kao greda: ide između dve presečne tačke, sa širinom poprečno i debljinom naviše.

1. Izaberi {{ui:Lim}} u grupi {{ui:Postavi}} ili pritisni {{key:P}}.
2. U panelu {{ui:Svojstva}} podesi {{ui:Debljina (mm)}} i {{ui:Širina (mm)}}. Podrazumevano je 20 x 200 u A36.
3. Po potrebi podesi {{ui:Materijal}} i {{ui:Obrtanje (°)}}. Obrtanje od 90 postavlja lim na ivicu.
4. Klikni dve presečne tačke ili koristi formu {{ui:Dodaj prema mreži}}.

Naziv profila lima se piše `PL<debljina>x<širina>`, na primer PL20x200. Dužina je rastojanje između dve tačke.

Da promeniš veličinu postavljenog lima, izaberi ga i promeni {{ui:Debljina (mm)}} ili {{ui:Širina (mm)}}.

Limovi koje postaviš su sami delovi (oznaka p, sklop P). Krajnji limovi i podložni limovi koje prave veze su takođe limovi, ali ih menjaš kroz vezu; vidi [Krajnji limovi](topic:end-plates).

## Dodavanje prilagođenog profila

Kada presek koji ti treba nije u katalogu, napravi ga od njegovih dimenzija. Prilagođeni profil pripada modelu i čuva se sa njim. Da ga koristiš u svakom novom modelu, čuvaj ga u {{ui:Moji profili}}, opisano u odeljku „Čuvanje profila za nove modele“ ispod.

1. U panelu {{ui:Model}} levo, otvori {{ui:Prilagođeni profil}}.
2. Upiši {{ui:Naziv}}, na primer `W8x18-custom` ili `RHS 120x80x5`. Ne može biti naziv iz kataloga niti ličiti na naziv lima.
3. Izaberi {{ui:Oblik}}: {{ui:I-profil}}, {{ui:U-profil}}, {{ui:Jednakokraki ugao}}, {{ui:Pravougaona cev}}, {{ui:Okrugla cev}} ili {{ui:Ravna traka}}.
4. Popuni dimenzije koje se pojave, sve u milimetrima:

| Oblik | Dimenzije |
|---|---|
| I-profil | Dubina d, širina pojasa bf, rebro tw, pojas tf, poluprečnik zaobljenja r (može biti 0) |
| U-profil | Dubina d, širina pojasa bf, rebro tw, pojas tf (oštri uglovi) |
| Jednakokraki ugao | Širina b (svaki krak), debljina t |
| Pravougaona cev | Visina h, širina b, debljina t (spoljašnji poluprečnik ugla 2t) |
| Okrugla cev | Prečnik D, debljina t |
| Ravna traka | Širina b, debljina t |

5. Ostavi označeno polje {{ui:Zadrži u Mojim profilima}} da bi profil bio u svakom novom modelu (vidi ispod), ili ga odštikliraj da ostane samo u ovom modelu.
6. Izaberi {{ui:Dodaj profil}}.

Statusna traka kaže „Profil „…“ je dodat; nalazi se u svim listama profila pod Prilagođeni.“ Profil se pojavljuje u listi ispod obrasca i na kraju svake liste {{ui:Profil}}.

DetailCraft proverava da li oblik može da postoji. Videćeš poruke kao što su „Rebro i pojasevi ne staju u dubinu i širinu.“, „Poluprečnik zaobljenja je prevelik za pojas.“ ili „Zid je pregust.“ Popravi brojeve i ponovo izaberi {{ui:Dodaj profil}}.

### Šta dobijaju prilagođeni profili

- Masa po metru iz površine × 7850 kg/m³ (katalog veličine koriste objavljenu težinu).
- Prilagođeni I-profili primaju rupe, izreze, krajnje limove, NC datoteke i radioničke crteže kao I-profili iz kataloga.
- Prilagođene ravne trake ponašaju se kao limovi.
- Prilagođeni U-profili i cevi primaju rupe; uglovi i okrugle cevi za sada ne.

Prilagođeni profil ne možeš da menjaš ili uklanjaš iz modela kada je dodat (odmah koristi {{key:Mod+Z}} ako si pogrešio). Ispravljen profil dobija novi naziv.

## Čuvanje profila za nove modele

{{ui:Moji profili}}, ispod obrasca, je tvoja lista prilagođenih profila. Čuva se u ovom pregledaču, na ovom računaru, a ne u datoteci modela i ne na tvom nalogu.

- Profil dodat sa označenim poljem {{ui:Zadrži u Mojim profilima}} ide na listu. Svaki novi model, uključujući onaj koji DetailCraft otvori kada ga pokreneš, počinje sa svim tim profilima u listama profila.
- Profil koji je već u modelu, a nije na listi, ima dugme {{ui:Zadrži}} pored sebe.
- U modelu koji nema neki od tvojih profila (na primer, stariji fajl), izaberi {{ui:Koristi ovde}} da ga dodaš.
- {{ui:Ukloni}} izbacuje profil sa liste. Modeli koji ga već koriste zadržavaju sopstvenu kopiju.
- Model koji otvoriš zadržava profile sačuvane u svojoj datoteci. Otvaranje datoteke nikada ne menja tvoju listu.
- Naziv koji je već na listi sa drugim dimenzijama se odbija: daj novom profilu drugi naziv.
- Brisanje podataka sajta u pregledaču, ili korišćenje drugog pregledača ili računara, počinje sa praznom listom. Privatni prozor ne može da je sačuva; aplikacija to kaže.
