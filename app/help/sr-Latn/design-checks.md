---
title: Proveri čelične elemente prema projektnom propisu
summary: Napravi kombinacije opterećenja prema ASCE 7 ili EN 1990, proveri svaki čelični I-profil prema AISC 360 ili EN 1993-1-1 i vidi koliko nosivosti svaki element koristi. Pomoćno sredstvo dok inženjer ne pregleda.
keywords: projektovanje, provera projekta, projektovanje čelika, iskorišćenost, utilizacija, nosivost, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurokod, kombinacije opterećenja, LRFD, nacionalni aneks, izvijanje, bočno-torziono izvijanje, smicanje, savijanje, interakcija, konstruktivno, studenti, inženjer
from: 15685c4e
---

Kad pokrenete analizu, blok {{ui:Proračunske provere}} na kartici {{ui:Analiza}} pretvara njene sile u ocenu za svaki čelični element: koliko nosivosti koristi najnepovoljnija kombinacija.

:::warning
To je **pomoćno sredstvo dok inženjer ne pregleda**. Koristi samo sile prvog reda (bez efekata drugog reda), ne proverava uvijanje, vitke delove (klasa 4), zavarene preseke ni veze, i izostavlja ono što ne može da proveri, a to kaže. Ne zamenjuje proveru inženjera, a njegovi rezultati nisu overa.
:::

## Izbor propisa

{{ui:Projektni propis}} se čuva uz model; izaberite jednu od dve porodice:

- **ASCE 7 + AISC 360** (SAD, LRFD): kombinacije opterećenja iz ASCE 7-16 §2.3.1 i provere elemenata iz ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurokod): kombinacije iz EN 1990 (izraz 6.10, ili 6.10a i 6.10b) i provere elemenata iz EN 1993-1-1.

Zatim izaberite {{ui:Klasa čelika}} (A992, A36 i druge; ili S235 do S450, pri čemu se niža granica tečenja primenjuje iznad 40 mm).

## Pravljenje kombinacija

Svakom slučaju opterećenja dodelite **vrstu** (stalno, korisno, korisno na krovu, sneg, vetar, seizmičko) u listi slučajeva, pa pritisnite {{ui:Napravi kombinacije}}. DetailCraft upisuje kombinacije propisa kao kombinacije vaših slučajeva: svaku kombinaciju nosivosti koju propis navodi za vrste koje imate i kombinacije upotrebljivosti za progib. Kombinacije koje ste sami upisali ostaju; one se ne proveravaju prema propisu. Slučaj vrste {{ui:Ostalo}} se ne kombinuje.

Za Eurokod faktori su **preporučene vrednosti** iz EN 1990 Aneks A1 (γG 1.35, γQ 1.5, ψ vrednosti za korisno, sneg i vetar) i EN 1993-1-1 (γM0 = γM1 = 1.0). Vaš nacionalni aneks menja neke od njih: otvorite {{ui:Vrednosti nacionalnog aneksa}}, upišite svoje i ponovo napravite kombinacije. Čuvaju se u modelu.

## Provera elemenata

Pritisnite {{ui:Proveri elemente}}. Za svaki čelični I-profil tabela prikazuje njegovu **iskorišćenost** (odnos dejstva i nosivosti: 100 % je granica), da li prolazi, koja provera je merodavna i koja kombinacija. Elementi se na modelu boje: plavo slabo iskorišćeni, zeleno oko polovine, okerno blizu granice, crveno iznad nje, sivo nije provereno. Kliknite na ime elementa da ga izaberete.

Provere, uz klauzulu koju svaka prati (navedene su u izveštaju):

- zatezanje, pritisak sa savojnim i torzionim izvijanjem, savijanje oko obe ose sa bočno-torzionim izvijanjem, smicanje i savijanje sa aksijalnom silom;
- progib kombinacija upotrebljivosti prema {{ui:Granica progiba}} koju postavite (L/360 za početak; to je projektna vrednost, a ne vrednost propisa).

**Dužine.** Ukrućena dužina je udeo svakog analiziranog dela (1 = neukrućeno); ukrute se uzimaju ravnomerno raspoređene od početka. K faktori množe dužinu za izvijanje. Mesto na kom se spaja drugi element deli element, a svaki deo se proverava po sopstvenoj dužini, kao ukrućen na tom mestu.

## Šta nije provereno

Element se prikazuje kao **nije provereno**, uz razlog, umesto broja kad njegov presek nije oblik koji provere poznaju (uglovi, U-profili; pravougaone i okrugle cevi se proveravaju kad su zidovi kompaktni), kad je to prilagođen (zavaren) oblik ili kad je deo vitak (AISC) ili klase 4 (Eurokod) pri savijanju. Vitak deo u pritisku isključuje provere pritiska, pa element dobija oznaku *prolazi, delimično provereno*. Varovi na spojevima imaju [sopstvenu proveru](topic:weld-checks). Takođe nije napravljeno: efekti drugog reda, uvijanje, smicanje zajedno sa savijanjem, izvijanje smicanjem, zavrtanjske veze, zamor, požar i seizmičko detaljisanje. Armirano-betonski elementi i seizmička opterećenja imaju [sopstvene provere](topic:concrete-and-seismic). Vidi [Još nije urađeno](topic:not-built-yet).

## Izveštaj

{{ui:Izveštaj (PDF)}} i {{ui:Izveštaj (CSV)}} dobijaju tabele proračuna kad proverite: izdanja propisa, podešavanja i vrednosti nacionalnog aneksa, iskorišćenost po elementu, svaku korišćenu klauzulu i, za svaki element, dejstvo, nosivost i iskorišćenost svake provere u njenoj merodavnoj kombinaciji.
