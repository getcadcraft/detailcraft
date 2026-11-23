---
title: Provjera čeličnih štapova prema projektnom propisu
summary: Izradite kombinacije opterećenja prema ASCE 7 ili EN 1990, provjerite svaki čelični I-profil prema AISC 360 ili EN 1993-1-1 i pogledajte koliko svoje nosivosti svaki štap iskorištava. Pomoćno sredstvo dok inženjer ne pregleda rezultate.
keywords: projektiranje, provjera projekta, projektiranje čelika, iskorištenost, nosivost, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurokod, kombinacije opterećenja, LRFD, nacionalni dodatak, izvijanje, bočno-torzijsko izvijanje, posmik, savijanje, interakcija, konstrukcija, studenti, inženjer
from: 15685c4e
---

Nakon što pokrenete analizu, blok {{ui:Proračunske provjere}} na kartici {{ui:Analiza}} pretvara njezine sile u ocjenu za svaki čelični štap: koliko svoje nosivosti koristi najnepovoljnija kombinacija.

:::warning
**Pomoćno je sredstvo dok inženjer ne pregleda rezultate.** Koristi sile prvog reda (bez efekata drugog reda), ne provjerava uvijanje, vitke dijelove (klase 4), zavarene profile ni spojeve, a ono što ne može provjeriti izostavlja i to kaže. Ne zamjenjuje proračun inženjera, a njegovi rezultati nisu ovjera.
:::

## Odaberite propis

{{ui:Projektni propis}} sprema se uz model; odaberite jednu od dviju skupina:

- **ASCE 7 + AISC 360** (SAD, LRFD): kombinacije opterećenja iz ASCE 7-16 §2.3.1 i provjere štapova iz ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurokod): kombinacije iz EN 1990 (izraz 6.10, ili 6.10a i 6.10b) i provjere štapova iz EN 1993-1-1.

Zatim odaberite {{ui:Klasa čelika}} (A992, A36 i drugi; ili S235 do S450, s nižom granicom razvlačenja iznad 40 mm).

## Izradite kombinacije

U popisu slučajeva opterećenja dodijelite svakom slučaju njegovu **vrstu** (stalno, promjenjivo, krovno promjenjivo, snijeg, vjetar, potres), zatim pritisnite {{ui:Izradi kombinacije}}. DetailCraft ispisuje kombinacije propisa kao kombinacije vaših slučajeva: sve kombinacije nosivosti koje propis navodi za vrste koje imate i kombinacije uporabnosti za progib. Kombinacije koje ste sami upisali ostaju; nisu provjerene prema propisu. Slučaj vrste {{ui:Ostalo}} se ne kombinira.

Za Eurokod su faktori **preporučene vrijednosti** iz EN 1990, Dodatak A1 (γG 1.35, γQ 1.5, vrijednosti ψ za korisna, snježna i vjetrom opterećenja) i EN 1993-1-1 (γM0 = γM1 = 1.0). Nacionalni dodatak vaše zemlje mijenja neke od njih: otvorite {{ui:Vrijednosti nacionalnog dodatka}}, upišite svoje i ponovno izradite kombinacije. Spremaju se u model.

## Provjerite štapove

Pritisnite {{ui:Provjeri štapove}}. Za svaki čelični I-profil tablica prikazuje njegovu **iskorištenost** (zahtjev prema nosivosti: 100 % je granica), prolazi li, koja provjera je mjerodavna i koja kombinacija. Štapovi su na modelu obojeni prema iskorištenosti: plava je malo iskorišteno, zelena oko polovice, oker blizu granice, crvena preko granice, a siva nije provjereno. Kliknite naziv štapa da ga odaberete.

Provjere, uz članak koji svaka slijedi (navedene su u izvješću):

- vlak, tlak s izvijanjem savijanjem i torzijskim izvijanjem, savijanje oko obiju osi s bočno-torzijskim izvijanjem, posmik i savijanje s uzdužnom silom;
- progib kombinacija uporabnosti u odnosu na {{ui:Ograničenje progiba}} koje postavite (na početku L/360; projektna vrijednost, a ne vrijednost propisa).

**Duljine.** Pridržana duljina je udio svakog analiziranog dijela (1 = nepridržano); pridržanja se uzimaju jednako razmaknuta od početka. K faktori množe duljinu za izvijanje. Spoj na kojem drugi štap dolazi dijeli štap, a svaki dio provjerava se na vlastitoj duljini, uz pridržanje na tom mjestu.

## Što nije provjereno

Štap prikazuje **nije provjereno**, s razlogom, umjesto broja kada njegov presjek nije oblik koji provjere poznaju (kutnici, U-profili; pravokutne i okrugle cijevi provjeravaju se kad su stijenke kompaktne), kada je to posebni (zavareni) oblik ili kada je dio vitak (AISC) ili klase 4 (Eurokod) pri savijanju. Vitak dio pri tlaku isključuje provjere tlaka, a štap se prikazuje kao *prolazi, djelomično provjereno*. Zavari na spojevima imaju [vlastitu provjeru](topic:weld-checks). Također još nije izrađeno: efekti drugog reda, uvijanje, izvijanje posmikom zajedno sa savijanjem, vijčane veze, zamor materijala, požar i detaljiranje za potres. Betonski elementi i seizmička opterećenja imaju [vlastite provjere](topic:concrete-and-seismic). Vidi [Još nije izrađeno](topic:not-built-yet).

## Izvješće

{{ui:Izvješće (PDF)}} i {{ui:Izvješće (CSV)}} dobivaju tablice projektiranja nakon provjere: izdanja propisa, postavke i vrijednosti nacionalnog dodatka, iskorištenost po štapu, svaki korišteni članak te za svaki štap zahtjev, nosivost i iskorištenost svake provjere u njezinoj mjerodavnoj kombinaciji.
