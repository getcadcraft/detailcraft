---
title: Provjera čeličnih elemenata prema projektnom normativu
summary: Napravi kombinacije opterećenja prema ASCE 7 ili EN 1990, provjeri svaki čelični I-profil prema AISC 360 ili EN 1993-1-1 i vidi koliko njegove nosivosti svaki element koristi. Pomoć dok ga inženjer ne pregleda.
keywords: projektovanje, provjera projekta, projektovanje čelika, iskorištenost, nosivost, kapacitet, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurokod, kombinacije opterećenja, LRFD, nacionalni aneks, izvijanje, bočno-torziono izvijanje, smicanje, savijanje, interakcija, konstrukcija, studenti, inženjer
from: 66b6d545
---

Nakon što pokreneš analizu, blok {{ui:Provjere projekta}} u kartici {{ui:Analiza}} pretvara njene sile u ocjenu za svaki čelični element: koliki dio nosivosti koristi najgora kombinacija.

:::warning
To je **pomoć dok inženjer ne pregleda**. Koristi samo sile prvog reda (bez efekata drugog reda), ne provjerava torziju, vitke dijelove (klasa 4), zavarene profile ni veze, i izostavlja ono što ne može provjeriti i to kaže. Ne zamjenjuje proračun inženjera, a njeni rezultati nisu ovjera.
:::

## Odaberi normativ

{{ui:Projektni normativ}} se čuva uz model; izaberi jednu od dvije porodice:

- **ASCE 7 + AISC 360** (SAD, LRFD): kombinacije opterećenja iz ASCE 7-16 §2.3.1 i provjere elemenata iz ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurokod): kombinacije iz EN 1990 (jedn. 6.10, ili 6.10a i 6.10b) i provjere elemenata iz EN 1993-1-1.

Zatim izaberi {{ui:Klasa čelika}} (A992, A36 i druge; ili S235 do S450, s donjom granicom tečenja iznad 40 mm).

## Napravi kombinacije

Svakom slučaju opterećenja dodijeli **vrstu** (stalno, korisno, krovno korisno, snijeg, vjetar, seizmika) u listi slučajeva, pa pritisni {{ui:Napravi kombinacije}}. DetailCraft upisuje kombinacije normativa kao kombinacije tvojih slučajeva: svaku kombinaciju nosivosti koju normativ navodi za vrste koje imaš, i kombinacije za granično stanje upotrebljivosti za progib. Kombinacije koje si sam upisao ostaju; ne provjeravaju se prema normativu. Slučaj vrste {{ui:Ostalo}} se ne kombinuje.

Za Eurokod su faktori **preporučene vrijednosti** iz EN 1990 Aneks A1 (γG 1,35, γQ 1,5, ψ vrijednosti za korisna, snježna i vjetrovna opterećenja) i EN 1993-1-1 (γM0 = γM1 = 1,0). Nacionalni aneks tvoje zemlje mijenja neke od njih: otvori {{ui:Vrijednosti nacionalnog aneksa}}, upiši svoje i ponovo napravi kombinacije. Čuvaju se u modelu.

## Provjeri elemente

Pritisni {{ui:Provjeri elemente}}. Za svaki čelični I-profil tabela prikazuje njegovu **iskorištenost** (potražnja prema nosivosti: 100 % je granica), da li prolazi, koja provjera je mjerodavna i koja kombinacija. Elementi su obojeni na modelu: plavo slabo iskorišteno, zeleno oko polovine, oker blizu granice, crveno iznad nje, sivo nije provjereno. Klikni naziv elementa da ga odabereš.

Provjere, uz klauzulu koju slijede (navedene su u izvještaju):

- zatezanje, pritisak s izvijanjem savijanja i torzije, savijanje oko obje ose s bočno-torzionim izvijanjem, smicanje i savijanje s aksijalnom silom;
- progib kombinacija za granično stanje upotrebljivosti prema {{ui:Granica progiba}} koju postaviš (u početku L/360; projektna vrijednost, ne vrijednost normativa).

**Dužine.** Ukrućena dužina je udio svakog analiziranog dijela (1 = neukrućeno); ukrute se uzimaju jednako razmaknute od početka. K faktori množe dužinu za izvijanje. Spoj na koji se oslanja drugi element dijeli element, pa se svaki dio provjerava na svojoj dužini, kao ukrućen na tom mjestu.

## Šta nije provjereno

Element prikazuje **nije provjereno**, uz razlog, umjesto broja kada njegov presjek nije I-profil koji provjere poznaju (cijevi, uglovi, U-profili), kada je prilagođeni (zavareni) oblik, ili kada je dio vitak (AISC) ili klase 4 (Eurokod) pri savijanju. Vitak dio u pritisku isključuje provjere pritiska, pa element piše *prolazi, djelimično provjereno*. Također nisu urađeni: efekti drugog reda, torzija, izvijanje pri smicanju zajedno sa savijanjem, veze, zamor, požar i seizmička detaljnost. Betonski elementi i seizmička opterećenja imaju [svoje provjere](topic:concrete-and-seismic). Vidi [Još nije urađeno](topic:not-built-yet).

## Izvještaj

{{ui:Izvještaj (PDF)}} i {{ui:Izvještaj (CSV)}} dobijaju tabele provjera nakon što provjeriš: izdanja normativa, postavke i vrijednosti nacionalnog aneksa, iskorištenost po elementu, svaku korištenu klauzulu i, za svaki element, potražnju, nosivost i iskorištenost svake provjere u njenoj mjerodavnoj kombinaciji.
