---
title: Provjeri zavare tamo gdje se elementi spajaju
summary: Nakon provjere projekta, ispitaj ugaone i sučeone zavare oko svakog elementa tamo gdje se spaja s drugim elementom ili osloncem, prema AISC 360-16 poglavlju J ili EN 1993-1-8, i vidi koja grupa zavara je najviše iskorištena i pod kojom kombinacijom. Pomoćno sredstvo dok ga ne pregleda inženjer.
keywords: zavar, zavari, provjera zavara, ugaoni zavar, sučeoni zavar, potpuno provarivanje, AISC 360, EN 1993-1-8, grupa zavara, iskorištenost, iskorištenje, nosivost, spoj, veza, konstrukcija, inženjer
from: e8eebbe6
---

Blok {{ui:Provjere varova}} u kartici {{ui:Analiza}}, pod {{ui:Provjere projekta}}, uzima sile posljednjeg riješenog okvira i kombinacije nosivosti koje ste napravili, i ispituje zavar oko cijelog svakog elementa na svakom spoju: gdje se element spaja s drugim elementom ili stoji na osloncu.

:::warning
To je **pomoćno sredstvo dok ga ne pregleda inženjer**. Provjerava zavar nacrtan oko cijelog presjeka, kao jednu grupu, iz vlastitih krajnjih sila okvira. Ne čita veličinu niti dužinu zavara koje ste nacrtali u radioničkim crtežima, i ne provjerava vijke, ploče, ležanje, blok smicanje ni izvlačenje. Njeni rezultati nisu ovjera.
:::

## Pokreni

1. Riješite okvir u kartici {{ui:Analiza}}, izaberite {{ui:Projektni normativ}} u {{ui:Provjere projekta}}, zatim pritisnite {{ui:Napravi kombinacije}} (provjera zavara treba iste kombinacije nosivosti).
2. U {{ui:Provjere varova}} postavite {{ui:Krak ugaonog vara (mm, 0 = zid, najviše 8)}}. 0 znači da krak prati tanji zid presjeka, do 8 mm. Prema AISC normativu, {{ui:Čvrstoća metala vara F_EXX (MPa)}} je čvrstoća metala zavara (482.6 MPa je E70 elektroda). Prema EN 1993 klasa čelika daje čvrstoću metala zavara i faktor korelacije.
3. Pritisnite {{ui:Provjeri varove}}.

Svaki red tabele je jedna grupa zavara (kraj spoja elementa). Brojevi: **iskorištenost** merodavne provjere, stanje (prolazi ili pada), i koja provjera i klauzula su bile merodavne pod kojom kombinacijom. Grupa koju provjera ne može ocijeniti kaže zašto (nema klase čelika, nema faktora korelacije za klasu u EN 1993-1-8 Tabela 4.1, nema zavara na tom presjeku), umjesto da prikaže broj.

Promjena kraka ili metala zavara, ili izmjena modela, briše tabelu: ona je bila za stare vrijednosti. Ponovo pritisnite {{ui:Provjeri varove}}.

## Šta se provjerava

- **ASCE 7 + AISC 360:** metal ugaonog zavara (ugao opterećenja prema zavaru se računa, J2.4), smično pucanje osnovnog metala (J4.2) i sučeoni zavari s potpunim provarivanjem (Tabela J2.5).
- **EN 1990 + EN 1993:** ugaoni zavari pojednostavljenom metodom EN 1993-1-8 4.5.3.3 i sučeoni zavari iz 4.7.1.
- Upozorenja o detaljima prema minimalnom i maksimalnom kraku i minimalnoj dužini, uz vrijednost s kojom su upoređeni.

Grupa zavara se tretira kao linijski presjek i opterećuje elastičnom metodom vektora: svaki dio zavara preuzima silu iz aksijalne sile elementa, obje sile smicanja, torziju i oba momenta savijanja, zbrojene kao vektori.

## Šta nije provjereno

Zavari s djelimičnim provarivanjem, kosi ugaoni zavari, zavari u rupi i žlijebu, isprekidani zavari, metoda trenutnog centra, EN metoda smjera, zamor i blok smicanje osnovnog metala nisu izgrađeni. Neke konstante normi su zapisane iz normi i još nisu upoređene sa štampanim primjerkom; izvještaj navodi odakle dolazi svaki broj ({{ui:Izvještaj (PDF)}} dobija tabele zavara kada provjerite). Vidi [Provjeri čelične elemente](topic:design-checks) i [Još nije izgrađeno](topic:not-built-yet).
