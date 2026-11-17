---
title: Postavljanje ploča i dodavanje prilagođenih profila
summary: Postavite slobodne ploče prema debljini i širini te definirajte vlastite I, U, kutne, cijevne ili plosnate presjeke.
keywords: ploča, prilagođeni profil, korisnički profil, parametarski, presjek, oblik, poprečni presjek, PL
from: c24c3b51
---

## Postavljanje ploče

Ploča se postavlja kao greda: ide između dva sjecišta, sa širinom poprijeko i debljinom prema gore.

1. Odaberite {{ui:Ploča}} u grupi {{ui:Postavljanje}} ili pritisnite {{key:P}}.
2. Na ploči {{ui:Svojstva}} postavite {{ui:Debljina (mm)}} i {{ui:Širina (mm)}}. Zadano je 20 x 200 u A36.
3. Po potrebi postavite {{ui:Materijal}} i {{ui:Zakretanje (°)}}. Zakretanje od 90 stavlja ploču na rub.
4. Kliknite dva sjecišta ili upotrijebite obrazac {{ui:Dodaj po mreži}}.

Naziv profila ploče zapisuje se kao `PL<thickness>x<width>`, na primjer PL20x200. Njezina duljina je udaljenost između dviju točaka.

Za promjenu veličine postavljene ploče odaberite je i promijenite {{ui:Debljina (mm)}} ili {{ui:Širina (mm)}}.

Ploče koje postavite su zasebni dijelovi (oznaka p, sklop P). Čeone i podložne ploče koje izrađuju veze također su ploče, ali mijenjate ih kroz njihovu vezu; vidi [Čeone ploče](topic:end-plates).

## Dodavanje prilagođenog profila

Kad presjeka koji trebate nema u katalogu, napravite ga iz dimenzija. Prilagođeni profil pripada modelu i sprema se s njim. Da biste ga koristili u svakom novom modelu, držite ga u {{ui:Moji profili}}, opisano pod „Zadrži profil za nove modele“ u nastavku.

1. Na ploči {{ui:Model}} lijevo otvorite {{ui:Prilagođeni profil}}.
2. Upišite {{ui:Naziv}}, na primjer `W8x18-custom` ili `RHS 120x80x5`. Ne smije biti naziv iz kataloga niti izgledati kao naziv ploče.
3. Odaberite {{ui:Oblik}}: {{ui:I-profil}}, {{ui:U-profil}}, {{ui:Jednakokračni kutnik}}, {{ui:Pravokutna cijev}}, {{ui:Okrugla cijev}} ili {{ui:Plosnati čelik}}.
4. Upišite dimenzije koje se pojave, sve u milimetrima:

| Oblik | Dimenzije |
|---|---|
| I-profil | Visina d, širina pojasa bf, debljina hrpta tw, debljina pojasa tf, polumjer zaobljenja r (može biti 0) |
| U-profil | Visina d, širina pojasa bf, debljina hrpta tw, debljina pojasa tf (oštri kutovi) |
| Jednakokračni kutnik | Širina b (svaki krak), debljina t |
| Pravokutna cijev | Visina h, širina b, debljina t (vanjski polumjer kuta 2t) |
| Okrugla cijev | Promjer D, debljina t |
| Plosnati čelik | Širina b, debljina t |

5. Ostavite označeno {{ui:Zadrži u mojim profilima}} da bude u svakom novom modelu (vidi dolje), ili ga odznačite da ostane samo u ovom modelu.
6. Odaberite {{ui:Dodaj profil}}.

Statusna traka kaže „Profil „…“ dodan; nalazi se na svakom popisu profila pod „Prilagođeni profil“.“ Pojavljuje se na popisu ispod obrasca i na kraju svakog popisa {{ui:Profil}}.

DetailCraft provjerava može li oblik postojati. Vidjet ćete poruke poput „Hrbat i pojasevi ne stanu u visinu i širinu.“, „Polumjer zaobljenja je prevelik za pojas.“ ili „Stijenka je predebela.“ Ispravite brojeve i ponovno odaberite {{ui:Dodaj profil}}.

### Što dobivaju prilagođeni profili

- Masa po metru iz površine × 7850 kg/m³ (dimenzije iz kataloga koriste objavljenu masu).
- Prilagođeni I-profili imaju provrte, izreze, čeone ploče, NC datoteke i radioničke crteže kao I-profili iz kataloga.
- Prilagođeni plosnati čelici ponašaju se kao ploče.
- Prilagođeni U-profili i cijevi imaju provrte; kutnici i okrugle cijevi još ne.

Prilagođeni profil se iz modela ne može uređivati ni ukloniti nakon dodavanja (ako ste pogriješili, odmah upotrijebite {{key:Mod+Z}}). Ispravljeni profil nazovite novim nazivom.

## Zadrži profil za nove modele

{{ui:Moji profili}}, ispod obrasca, vaš je vlastiti popis prilagođenih profila. Čuva se u ovom pregledniku, na ovom računalu, a ne u datoteci modela niti na vašem računu.

- Profil dodan uz označeno {{ui:Zadrži u mojim profilima}} ide na popis. Svaki novi model, uključujući onaj koji DetailCraft otvara kad ga pokrenete, počinje sa svima njima na popisima profila.
- Profil koji već postoji u modelu, ali nije na popisu, ima gumb {{ui:Zadrži}} pored sebe.
- U modelu koji nema jedan od vaših profila (na primjer starija datoteka), odaberite {{ui:Koristi ovdje}} da ga dodate.
- {{ui:Ukloni}} izvlači profil s popisa. Modeli koji ga već koriste zadržavaju vlastitu kopiju.
- Model koji otvorite zadržava profile spremljene u svojoj datoteci. Otvaranje datoteke nikad ne mijenja vaš popis.
- Naziv koji je već na popisu s drugim dimenzijama se odbija: dajte novome drugi naziv.
- Brisanjem podataka web-mjesta u pregledniku ili korištenjem drugog preglednika ili računala počinje se s praznim popisom. Privatni prozor ga ne može zadržati; aplikacija to navodi.
