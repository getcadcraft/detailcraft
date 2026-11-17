---
title: Provjera čeličnih štapova prema projektnom propisu
summary: Izradite kombinacije opterećenja prema ASCE 7 ili EN 1990, provjerite svaki čelični I-profil prema AISC 360 ili EN 1993-1-1 i vidite koliki dio nosivosti svaki štap koristi. Pomoćno sredstvo dok ga inženjer ne pregleda.
keywords: projektiranje, provjera projekta, čelično projektiranje, iskorištenost, nosivost, kapacitet, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurokod, kombinacije opterećenja, LRFD, nacionalni dodatak, izvijanje, bočno-torzijsko izvijanje, smik, savijanje, interakcija, konstrukcija, studenti, inženjer
from: 66b6d545
---

Nakon pokretanja analize, blok {{ui:Proračunske provjere}} u kartici {{ui:Analiza}} pretvara njezine sile u ocjenu za svaki čelični štap: koliki dio nosivosti koristi najnepovoljnija kombinacija.

:::warning
Ovo je **pomoćno sredstvo dok ga inženjer ne pregleda**. Koristi samo sile prvog reda (bez efekata drugog reda), ne provjerava torziju, vitke dijelove (klasa 4), zavarene oblike ni spojeve te izostavlja ono što ne može provjeriti i to kaže. Ne zamjenjuje proračun inženjera, a njegovi rezultati nisu inženjerski pečat.
:::

## Odaberite propis

{{ui:Projektni propis}} sprema se s modelom; odaberite jednu od dviju obitelji:

- **ASCE 7 + AISC 360** (SAD, LRFD): kombinacije ASCE 7-16 §2.3.1 i provjere štapova prema ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurokod): kombinacije EN 1990 (izraz 6.10, ili 6.10a i 6.10b) i provjere štapova prema EN 1993-1-1.

Zatim odaberite {{ui:Klasa čelika}} (A992, A36 i druge; ili S235 do S450, s donjom granicom popuštanja iznad 40 mm).

## Izradite kombinacije

Svakom slučaju opterećenja dajte njegovu **vrstu** (stalno, promjenjivo, promjenjivo na krovu, snijeg, vjetar, potresno) u popisu slučajeva, zatim pritisnite {{ui:Izradi kombinacije}}. DetailCraft zapisuje kombinacije propisa kao kombinacije vaših slučajeva: svaku kombinaciju za nosivost koju propis navodi za vrste koje imate te kombinacije za uporabljivost za progib. Kombinacije koje ste sami upisali ostaju; propisu se ne provjeravaju. Slučaj vrste {{ui:Ostalo}} se ne kombinira.

Za Eurokod su faktori **preporučene vrijednosti** iz EN 1990 Dodatak A1 (γG 1.35, γQ 1.5, ψ vrijednosti za korisno, snježno i vjetrom opterećenje) i EN 1993-1-1 (γM0 = γM1 = 1.0). Nacionalni dodatak vaše zemlje mijenja neke od njih: otvorite {{ui:Vrijednosti nacionalnog dodatka}}, upišite svoje i ponovno izradite kombinacije. Spremaju se u model.

## Provjerite štapove

Pritisnite {{ui:Provjeri štapove}}. Za svaki čelični I-profil tablica prikazuje njegovu **iskorištenost** (zahtjev prema nosivosti: 100 % je granica), je li zadovoljen, koja provjera upravlja i koja kombinacija. Štapovi su obojeni na modelu: plavo malo iskorišteno, zeleno oko pola, oker blizu granice, crveno preko nje, sivo nije provjereno. Kliknite naziv štapa da ga odaberete.

Provjere, s klauzulom koju slijede (navedene su u izvješću):

- vlak, tlak s savojnim i torzijskim izvijanjem, savijanje oko obiju osi s bočno-torzijskim izvijanjem, smik i savijanje s uzdužnom silom;
- progib kombinacija za uporabljivost prema {{ui:Granica progiba}} koju postavite (L/360 na početku; projektna vrijednost, ne vrijednost propisa).

**Duljine.** Pridržana duljina je udio svakog analiziranog komada (1 = nepridržano); pridržanja su uzeta jednako razmaknuta od početka. K faktori množe duljinu za izvijanje. Spoj na kojem završava drugi štap dijeli štap, a svaki komad provjerava se na vlastitoj duljini, kao pridržan na tom mjestu.

## Što se ne provjerava

Štap prikazuje **nije provjereno**, s razlogom, umjesto broja kad njegov presjek nije I-profil koji provjere poznaju (cijevi, kutnici, U-profili), kad je prilagođeni (zavareni) oblik ili kad je dio vitak (AISC) ili klase 4 (Eurokod) u savijanju. Vitki dio u tlaku isključuje provjere tlaka, a štap tada glasi *prolazi, djelomično provjereno*. Također još nije izrađeno: efekti drugog reda, torzija, smično izvijanje zajedno sa savijanjem, spojevi, zamor, požar i potresno detaljiranje. Betonski štapovi i potresna opterećenja imaju [vlastite provjere](topic:concrete-and-seismic). Vidi [Još nije izrađeno](topic:not-built-yet).

## Izvješće

{{ui:Izvješće (PDF)}} i {{ui:Izvješće (CSV)}} dobivaju tablice proračuna nakon što provjerite: izdanja propisa, postavke i vrijednosti nacionalnog dodatka, iskorištenost po štapu, svaku korištenu klauzulu te za svaki štap zahtjev, nosivost i iskorištenost svake provjere u njezinoj najnepovoljnijoj kombinaciji.
