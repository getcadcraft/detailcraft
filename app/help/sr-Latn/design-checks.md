---
title: Proveri čelične elemente prema projektnom propisu
summary: Napravi kombinacije opterećenja prema ASCE 7 ili EN 1990, proveri svaki čelični I-profil prema AISC 360 ili EN 1993-1-1 i vidi koliki deo nosivosti svaki element koristi. Pomoćno sredstvo dok inženjer ne pregleda.
keywords: projektovanje, provera, projektovanje čelika, iskorišćenje, nosivost, kapacitet, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurokod, kombinacije opterećenja, LRFD, nacionalni aneks, izvijanje, bočno-torziono izvijanje, smicanje, savijanje, interakcija, konstrukcija, studenti, inženjer
from: 66b6d545
---

Posle analize, blok {{ui:Proračunske provere}} na kartici {{ui:Analiza}} pretvara njene sile u ocenu za svaki čelični element: koliki deo nosivosti koristi najgora kombinacija.

:::warning
To je **pomoćno sredstvo dok inženjer ne pregleda**. Koristi samo sile prvog reda (bez efekata drugog reda), ne proverava torziju, vitke delove (klasa 4), zavarene oblike ni veze, a ono što ne može da proveri izostavlja i to kaže. Ne zamenjuje proveru inženjera, a njeni rezultati nisu overa.
:::

## Izaberi propis

{{ui:Projektni propis}} se čuva sa modelom; izaberi jednu od dve porodice:

- **ASCE 7 + AISC 360** (SAD, LRFD): kombinacije ASCE 7-16 §2.3.1 i provere elemenata ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurokod): kombinacije EN 1990 (izraz 6.10, ili 6.10a i 6.10b) i provere elemenata EN 1993-1-1.

Zatim izaberi {{ui:Klasa čelika}} (A992, A36 i druge; ili S235 do S450, sa donjom granicom tečenja iznad 40 mm).

## Napravi kombinacije

Svakom slučaju opterećenja daj **vrstu** (stalno, korisno, korisno na krovu, sneg, vetar, seizmika) u listi slučajeva, pa pritisni {{ui:Napravi kombinacije}}. DetailCraft piše kombinacije propisa kao kombinacije tvojih slučajeva: svaku kombinaciju nosivosti koju propis navodi za vrste koje imaš, i kombinacije upotrebljivosti za progib. Kombinacije koje si sam upisao ostaju; ne proveravaju se prema propisu. Slučaj vrste {{ui:Ostalo}} se ne kombinuje.

Za Eurokod su faktori **preporučene vrednosti** EN 1990 Aneks A1 (γG 1.35, γQ 1.5, ψ vrednosti za korisno opterećenje, sneg i vetar) i EN 1993-1-1 (γM0 = γM1 = 1.0). Nacionalni aneks tvoje zemlje menja neke od njih: otvori {{ui:Vrednosti nacionalnog aneksa}}, upiši svoje i ponovo napravi kombinacije. Čuvaju se u modelu.

## Proveri elemente

Pritisni {{ui:Proveri elemente}}. Za svaki čelični I-profil tabela pokazuje njegovo **iskorišćenje** (zahtev prema nosivosti: 100 % je granica), da li prolazi, koja provera je merodavna i koja kombinacija. Elementi se boje na modelu: plavo malo iskorišćeni, zeleno oko polovine, okerasto blizu granice, crveno preko nje, sivo nije proveren. Klikni naziv elementa da ga izabereš.

Provere, uz klauzulu koju prate (navedene su u izveštaju):

- zatezanje, pritisak sa savojnim i torzionim izvijanjem, savijanje oko obe ose sa bočno-torzionim izvijanjem, smicanje i savijanje sa aksijalnom silom;
- progib kombinacija upotrebljivosti prema {{ui:Granica progiba}} koju podesiš (L/360 u početku; projektna vrednost, a ne vrednost propisa).

**Dužine.** Pridržana dužina je udeo svakog analiziranog dela (1 = nepridržano); pridržanja su uzeta ravnomerno raspoređena od početka. K faktori množe dužinu za izvijanje. Spoj u kome se spaja drugi element deli element, i svaki deo se proverava na svojoj dužini, kao pridržan tamo.

## Šta se ne proverava

Element pokazuje **nije proveren**, sa razlogom, umesto broja kada njegov presek nije I-profil koji provere poznaju (cevi, uglovnici, U-profili), kada je prilagođeni (zavareni) oblik, ili kada je deo vitak (AISC) ili klase 4 (Eurokod) pri savijanju. Vitki deo na pritisku izostavlja provere pritiska, a element glasi *prolazi, delimično proveren*. Takođe nisu urađeni: efekti drugog reda, torzija, izvijanje smicanjem zajedno sa savijanjem, veze, zamor, požar i seizmička detaljna pravila. Betonski elementi i seizmička opterećenja imaju [sopstvene provere](topic:concrete-and-seismic). Vidi [Još nije urađeno](topic:not-built-yet).

## Izveštaj

{{ui:Izveštaj (PDF)}} i {{ui:Izveštaj (CSV)}} dobijaju tabele projektovanja kad si proveru uradio: izdanja propisa, podešavanja i vrednosti nacionalnog aneksa, iskorišćenje po elementima, svaku korišćenu klauzulu i, za svaki element, opterećenje, nosivost i iskorišćenje svake provere u njenoj merodavnoj kombinaciji.
