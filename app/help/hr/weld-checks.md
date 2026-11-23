---
title: Provjera zavara na mjestima spajanja štapova
summary: Nakon provjere projekta ispitajte kutne i sučeone zavare oko svakog štapa tamo gdje se spaja s drugim štapom ili osloncem, prema AISC 360-16 poglavlju J ili EN 1993-1-8, i pogledajte koja je skupina zavara najviše iskorištena i pod kojom kombinacijom. Pomoćno sredstvo dok inženjer ne pregleda rezultate.
keywords: zavar, zavari, provjera zavara, kutni zavar, sučeoni zavar, potpuni provar, AISC 360, EN 1993-1-8, skupina zavara, iskorištenost, nosivost, spoj, veza, konstrukcija, inženjer
from: e8eebbe6
---

Blok {{ui:Provjere zavara}} na kartici {{ui:Analiza}}, ispod {{ui:Proračunske provjere}}, uzima sile zadnje riješene konstrukcije i kombinacije nosivosti koje ste izradili te provjerava zavar oko svakog štapa na svakom spoju: gdje štap spaja drugi štap ili stoji na osloncu.

:::warning
**Pomoćno je sredstvo dok inženjer ne pregleda rezultate.** Provjerava zavar izveden oko cijelog presjeka, kao jednu skupinu, iz vlastitih krajnjih sila konstrukcije. Ne čita veličinu ni duljinu zavara koje ste nacrtali u radioničkim crtežima i ne provjerava vijke, ploče, ležaj, posmično kidanje bloka ni odizanje. Njegovi rezultati nisu ovjera.
:::

## Pokrenite je

1. Riješite konstrukciju na kartici {{ui:Analiza}} i odaberite {{ui:Projektni propis}} u {{ui:Proračunske provjere}}, zatim pritisnite {{ui:Izradi kombinacije}} (provjera zavara treba iste kombinacije nosivosti).
2. U {{ui:Provjere zavara}} postavite {{ui:Kateta kutnog zavara (mm, 0 = stijenka, najviše 8)}}. 0 znači da kateta prati tanju stijenku presjeka, do 8 mm. Prema AISC propisu, {{ui:Čvrstoća materijala zavara F_EXX (MPa)}} je čvrstoća materijala zavara (482.6 MPa je elektroda E70). Prema EN 1993 klasa čelika određuje čvrstoću materijala zavara i faktor korelacije.
3. Pritisnite {{ui:Provjeri zavare}}.

Svaki redak tablice jedna je skupina zavara (kraj spoja štapa). Brojevi: **iskorištenost** njezine mjerodavne provjere, stanje (prolazi ili ne prolazi) te koja provjera i članak su bili mjerodavni u kojoj kombinaciji. Skupina koju provjera ne može ocijeniti navodi razlog (nema klase čelika, nema faktora korelacije za tu klasu u EN 1993-1-8 tablici 4.1, nema zavara na tom presjeku) umjesto broja.

Promjena katete ili materijala zavara ili izmjena modela briše tablicu: ona je vrijedila za stare vrijednosti. Ponovno pritisnite {{ui:Provjeri zavare}}.

## Što se provjerava

- **ASCE 7 + AISC 360:** metal kutnog zavara (kut opterećenja prema zavaru se računa, J2.4), posmično kidanje osnovnog materijala (J4.2) i sučeoni zavari s potpunim provarom (tablica J2.5).
- **EN 1990 + EN 1993:** kutni zavari pojednostavljenom metodom EN 1993-1-8 4.5.3.3 i sučeoni zavari iz 4.7.1.
- Upozorenja o detaljiranju u odnosu na najmanju i najveću katetu te najmanju duljinu, uz vrijednost s kojom su uspoređeni.

Skupina zavara tretira se kao linijski presjek i opterećuje metodom elastičnih vektora: svaki dio zavara preuzima silu iz uzdužne sile štapa, obje poprečne sile, uvijanje i oba momenta savijanja, zbrojene kao vektori.

## Što nije provjereno

Zavari s djelomičnim provarom, kosi kutni zavari, zavari u rupi i utoru, isprekidani zavari, metoda trenutačnog središta, EN smjerna metoda, zamor materijala i posmično kidanje osnovnog materijala još nisu izrađeni. Neke konstante propisa zapisane su iz samih propisa i još nisu uspoređene s tiskanim primjerkom; izvješće navodi odakle dolazi svaka vrijednost ({{ui:Izvješće (PDF)}} dobiva tablice zavara nakon provjere). Vidi [Provjera čeličnih štapova](topic:design-checks) i [Još nije izrađeno](topic:not-built-yet).
