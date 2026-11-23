---
title: Provjeri čelične elemente prema projektnom normativu
summary: Napravi kombinacije opterećenja prema ASCE 7 ili EN 1990, provjeri svaki čelični I-profil prema AISC 360 ili EN 1993-1-1 i vidi koliki dio nosivosti svaki element koristi. Pomoćno sredstvo dok ga ne pregleda inženjer.
keywords: projekt, provjera projekta, projektovanje čelika, iskorištenost, iskorištenje, nosivost, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, kombinacije opterećenja, LRFD, Nacionalni aneks, izvijanje, bočno-torziono izvijanje, smicanje, savijanje, interakcija, konstrukcija, studenti, inženjer
from: 15685c4e
---

Nakon što pokrenete analizu, blok {{ui:Provjere projekta}} na kartici {{ui:Analiza}} pretvara njene sile u ocjenu za svaki čelični element: koliki dio njegove nosivosti koristi najnepovoljnija kombinacija.

:::warning
To je **pomoćno sredstvo dok ga ne pregleda inženjer**. Koristi samo sile prvog reda (bez efekata drugog reda), ne provjerava torziju, vitke (klase 4) dijelove, zavarene profile ni spojeve, i ostavlja van ono što ne može provjeriti, i to kaže. Ne zamjenjuje provjeru inženjera, a njeni rezultati nisu ovjera.
:::

## Izaberite normativ

{{ui:Projektni normativ}} se čuva uz model; izaberite jednu od dvije porodice:

- **ASCE 7 + AISC 360** (SAD, LRFD): kombinacije opterećenja iz ASCE 7-16 §2.3.1 i provjere elemenata iz ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): kombinacije iz EN 1990 (izraz 6.10, ili 6.10a i 6.10b) i provjere elemenata iz EN 1993-1-1.

Zatim izaberite {{ui:Klasa čelika}} (A992, A36 i druge; ili S235 do S450, uz nižu granicu tečenja iznad 40 mm).

## Napravi kombinacije

Zadajte svakom slučaju opterećenja njegovu **vrstu** (stalno, korisno, korisno na krovu, snijeg, vjetar, seizmika) u listi slučajeva, zatim pritisnite {{ui:Napravi kombinacije}}. DetailCraft zapisuje kombinacije normativa kao kombinacije vaših slučajeva: svaku kombinaciju nosivosti koju normativ navodi za vrste koje imate, i kombinacije za upotrebljivost za progib. Kombinacije koje ste sami upisali ostaju; ne provjeravaju se prema normativu. Slučaj vrste {{ui:Ostalo}} se ne kombinuje.

Za Eurocode su faktori **preporučene vrijednosti** iz EN 1990 Aneks A1 (γG 1.35, γQ 1.5, vrijednosti ψ za zadana opterećenja, snijeg i vjetar) i EN 1993-1-1 (γM0 = γM1 = 1.0). Nacionalni aneks vaše zemlje mijenja neke od njih: otvorite {{ui:Vrijednosti nacionalnog aneksa}}, upišite svoje vrijednosti i ponovo napravite kombinacije. Čuvaju se u modelu.

## Provjeri elemente

Pritisnite {{ui:Provjeri elemente}}. Za svaki čelični I-profil tabela prikazuje njegovu **iskorištenost** (zahtjev u odnosu na nosivost: 100 % je granica), da li prolazi, koja provjera je merodavna i koja kombinacija. Elementi su obojeni na modelu: plavo za malo iskorišteno, zeleno za oko polovine, okerom blizu granice, crveno za iznad nje, sivo za nije provjereno. Kliknite na naziv elementa da ga izaberete.

Provjere, uz klauzulu koju slijede (navedene su u izvještaju):

- zatezanje, pritisak sa savojnim i torzionim izvijanjem, savijanje oko obje ose sa bočno-torzionim izvijanjem, smicanje i savijanje sa aksijalnom silom;
- progib kombinacija za upotrebljivost prema {{ui:Granica progiba}} koju ste postavili (L/360 za početak; projektna vrijednost, a ne vrijednost normativa).

**Dužine.** Pridržana dužina je udio svakog analiziranog dijela (1 = bez pridržanja); pridržanja su uzeta ravnomjerno raspoređena od početka. K faktori množe dužinu za izvijanje. Spoj na koji se priključuje drugi element dijeli element, i svaki dio se provjerava na svojoj dužini, kao pridržan na tom mjestu.

## Šta nije provjereno

Element prikazuje **nije provjereno**, uz razlog, umjesto broja kada njegov presjek nije oblik koji provjere poznaju (uglovi, U-profili; pravougaone i okrugle cijevi se provjeravaju kada su zidovi kompaktni), kada je to prilagođeni (zavareni) oblik, ili kada je dio vitak (AISC) ili klase 4 (Eurocode) pri savijanju. Vitki dio pri pritisku isključuje provjere pritiska, a element se prikazuje kao *prolazi, djelimično provjereno*. Zavari u spojevima imaju [svoju provjeru](topic:weld-checks). Također nisu izgrađeni: efekti drugog reda, torzija, smicanje uz izvijanje zajedno sa savijanjem, vijčani spojevi, zamor, požar i seizmička detaljizacija. Betonski elementi i seizmička opterećenja imaju [svoje provjere](topic:concrete-and-seismic). Vidi [Još nije izgrađeno](topic:not-built-yet).

## Izvještaj

{{ui:Izvještaj (PDF)}} i {{ui:Izvještaj (CSV)}} dobijaju tabele projekta kada provjerite: izdanja normativa, postavke i vrijednosti nacionalnog aneksa, iskorištenost po elementu, svaku korištenu klauzulu i, za svaki element, zahtjev, nosivost i iskorištenost svake provjere u njenoj merodavnoj kombinaciji.
