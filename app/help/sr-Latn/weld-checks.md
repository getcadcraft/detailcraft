---
title: Proveri varove na mestu spajanja elemenata
summary: Posle provere prema projektnom propisu, proveri ugaone i čeone varove oko svakog elementa na mestu gde se spaja sa drugim elementom ili osloncem, prema AISC 360-16 poglavlju J ili EN 1993-1-8, i vidi koja grupa varova je najviše iskorišćena i pod kojom kombinacijom. Pomoćno sredstvo dok inženjer ne pregleda.
keywords: var, varovi, provera varova, ugaoni var, čeoni var, potpuni provar, AISC 360, EN 1993-1-8, grupa varova, iskorišćenost, utilizacija, nosivost, spoj, veza, konstruktivno, inženjer
from: e8eebbe6
---

Blok {{ui:Provere šavova}} na kartici {{ui:Analiza}}, pod {{ui:Proračunske provere}}, uzima sile poslednjeg rešenog okvira i kombinacije nosivosti koje ste napravili, pa proverava var oko svakog elementa u svakom spoju: tamo gde se element spaja sa drugim elementom ili stoji na osloncu.

:::warning
To je **pomoćno sredstvo dok inženjer ne pregleda**. Proverava var nacrtan oko celog preseka, kao jednu grupu, iz sopstvenih krajnjih sila okvira. Ne čita veličinu ni dužinu varova koje ste nacrtali u radioničkim crtežima, a ne proverava zavrtnje, ploče, pritisak na rupu, smicanje bloka ni poluženje. Njeni rezultati nisu overa.
:::

## Pokretanje

1. Rešite okvir na kartici {{ui:Analiza}} i izaberite {{ui:Projektni propis}} u {{ui:Proračunske provere}}, pa pritisnite {{ui:Napravi kombinacije}} (provera varova zahteva iste kombinacije nosivosti).
2. U {{ui:Provere šavova}} postavite {{ui:Kateta ugaonog šava (mm, 0 = zid, najviše 8)}}. Vrednost 0 znači da kateta prati tanji zid preseka, do 8 mm. Po AISC propisu, {{ui:Nosivost metala šava F_EXX (MPa)}} je nosivost metala vara (482.6 MPa je E70 elektroda). Po EN 1993, klasa čelika daje nosivost metala vara i faktor korelacije.
3. Pritisnite {{ui:Proveri šavove}}.

Svaki red tabele je jedna grupa varova (kraj spoja jednog elementa). Brojevi su: **iskorišćenost** merodavne provere, stanje (prolazi ili ne prolazi) i koja provera i klauzula su merodavne pod kojom kombinacijom. Grupa koju provera ne može da oceni navodi zašto (nema klase čelika, nema faktora korelacije za tu klasu u EN 1993-1-8 tabeli 4.1, nema vara na tom preseku), umesto da prikaže broj.

Promena katete ili metala vara, ili izmena modela, briše tabelu jer je važila za stare vrednosti. Pritisnite {{ui:Proveri šavove}} ponovo.

## Šta se proverava

- **ASCE 7 + AISC 360:** nosivost metala ugaonog vara (ugao opterećenja prema varu se računa, J2.4), smičući lom osnovnog metala (J4.2) i čeoni varovi sa potpunim provarom (tabela J2.5).
- **EN 1990 + EN 1993:** ugaoni varovi pojednostavljenom metodom iz EN 1993-1-8 4.5.3.3 i čeoni varovi iz 4.7.1.
- Upozorenja o detaljima u odnosu na najmanju i najveću katetu i najmanju dužinu, uz vrednost sa kojom su upoređeni.

Grupa vara se tretira kao linijski presek i opterećuje elastičnom vektorskom metodom: svaki deo vara preuzima silu iz aksijalne sile elementa, obe smičuće sile, uvijanje i oba momenta savijanja, sabrane kao vektori.

## Šta nije provereno

Varovi sa delimičnim provarom, kosi ugaoni varovi, zavari u rupi i žlebu, isprekidani varovi, metod trenutnog centra, EN usmereni metod, zamor i smicanje bloka osnovnog metala nisu napravljeni. Neke konstante standarda zapisane su iz standarda i još nisu upoređene sa štampanim primerkom; izveštaj navodi odakle dolazi svaki broj ({{ui:Izveštaj (PDF)}} dobija tabele varova kad proverite). Vidi [Proveri čelične elemente prema projektnom propisu](topic:design-checks) i [Još nije urađeno](topic:not-built-yet).
