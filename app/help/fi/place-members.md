---
title: Aseta pilarit, palkit ja diagonaalit
summary: Valitse profiili, materiaali ja sijainti, ja napsauta ruudukon leikkauspisteitä tai kirjoita ne, jotta voit asettaa teräsosat.
keywords: pilari, palkki, tukisauva, sauva, aseta, profiili, materiaali, kierto, sijainti, siirtymä, lisää, lisää ruudukon mukaan
from: d6db0dc1
---

Sauvat asetetaan ruudukon leikkauspisteisiin: pilari yhteen, palkki tai diagonaali kahden pisteen väliin. Aseta ensin [ruudukot ja tasot](topic:grids-and-levels).

## Valitse työkalu ja sen asetukset

1. Valitse {{ui:Pilari}} ({{key:C}}), {{ui:Palkki}} ({{key:B}}) tai {{ui:Tukisauva}} ({{key:R}}) {{ui:Aseta}}-ryhmästä.
2. Oikealla oleva {{ui:Ominaisuudet}}-paneeli muuttuu otsikkoon "Aseta pilari" (tai palkki, tai tukisauva) ja näyttää seuraavan sauvan asetukset:
   - {{ui:Profiili}}: valitse luettelosta. Koot on ryhmitelty luettelon mukaan (W-profiilit, U-profiilit, kulmateräkset, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS ja omat profiilisi). Katso [Profiililuettelo](topic:profile-catalog).
   - {{ui:Materiaali}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 tai S355.
   - {{ui:Sijainti}}: missä kohtaa profiili on linjan kahden pisteen välillä: {{ui:Teräksen yläpinta viivalla}}, {{ui:Keskitetty viivalle}} tai {{ui:Alapinta viivalla}}.
   - {{ui:Kierto (°)}}: kääntää profiilia sauvan oman akselin ympäri.
   - {{ui:Ylös asti}} (vain pilareille): {{ui:Seuraava taso ylöspäin}}, tai tason nimi.
3. Asetusten alapuolella {{ui:Profiili}}-laatikko luettelee valitun profiilin mitat, pinta-alan, massan metriä kohti ja luettelon, josta se tulee.

Oletukset ovat W12x50 materiaalilla A992 pilareille (keskitetty), W16x26 materiaalilla A992 palkeille (teräksen yläpinta viivalla) ja HSS6x6x1/4 materiaalilla A500 Gr C diagonaaleille (keskitetty). Asetukset pysyvät, kunnes vaihdat ne.

## Aseta napsauttamalla

### Pilari

1. Valitse {{ui:Pohjakuva}} ja valitse taso, josta pilari alkaa.
2. Valitse {{ui:Pilari}}.
3. Vie osoitin lähelle leikkauspistettä. Lähin piste syttyy ja tilarivi nimeää sen.
4. Napsauta. Pilari kulkee tältä tasolta seuraavaan ylempään tasoon (tai {{ui:Ylös asti}}-tasoon). Tilarivi kertoo esimerkiksi ”Pilari W12x50 kohdassa A/1, taso 1 – taso 2.”
5. Jatka napsauttamista lisätäksesi lisää. Lopeta painamalla {{key:Esc}}.

Jos napsauttamasi tason yläpuolella ei ole tasoa, johon pilari yltäisi, tilarivillä lukee ”Pilarille ei ole tasoa taso 2:n yläpuolella. Lisää ensin taso.”

### Palkki

1. Valitse {{ui:Pohjakuva}} ja valitse palkin taso.
2. Valitse {{ui:Palkki}}.
3. Napsauta ensimmäistä leikkauspistettä. Tilarivi kertoo ”Alkupiste A/1 tasolla taso 2. Napsauta nyt toista päätä (Esc peruuttaa).” Katkoviiva seuraa osoitinta.
4. Napsauta toista leikkauspistettä. Palkki ilmestyy.
5. Napsauta uudelleen aloittaaksesi seuraavan palkin, tai paina {{key:Esc}}.

{{key:Esc}} ensimmäisen napsautuksen jälkeen peruuttaa vain tämän pisteen; toinen {{key:Esc}} poistaa työkalun käytöstä.

### Diagonaali

Diagonaali kulkee kahden eri tasoissa olevan leikkauspisteen välillä, joten se on helpoin tehdä {{ui:Julkisivu}}-näkymässä.

1. Valitse {{ui:Julkisivu}} ja valitse kirjainruudukkoviiva, jolla diagonaali on.
2. Valitse {{ui:Tukisauva}}.
3. Napsauta alapäätä ja sitten yläpäätä.

Julkisivuja on vain kirjainruudukkoviivoille. Diagonaalille kehässä numeroidun viivan suuntaan (A:sta B:hen) käytä {{ui:3D}}-näkymää tai alla olevaa {{ui:Lisää ruudukon mukaan}} -lomaketta.

:::touch
Kosketusnäytöllä napauta lähelle leikkauspistettä: napautus valitsee lähimmän pisteen lyhyen matkan sisältä eikä tee mitään, jos mikään piste ei ole lähellä. Ennen napautusta ei ole korostusta, joten tarkista tilarivin viesti jokaisen napautuksen jälkeen. Yhden sormen vedot kääntävät tai siirtävät näkymää sen sijaan, että ne asettaisivat.
:::

## Aseta ruudukon mukaan, ilman napsauttamista

Jokaisella asetustyökalulla on {{ui:Lisää ruudukon mukaan}} -lomake {{ui:Ominaisuudet}}-paneelin alareunassa. Se toimii pelkällä näppäimistöllä eikä tarvitse 3D-näkymää.

1. Valitse työkalu, esimerkiksi {{ui:Palkki}}.
2. Valitse {{ui:Lisää ruudukon mukaan}}-lomakkeessa {{ui:Ruudukosta (kirjain)}}, {{ui:Ruudukosta (numero)}} ja {{ui:Tasolta}}.
3. Valitse {{ui:Ruudukkoon (kirjain)}}, {{ui:Ruudukkoon (numero)}} ja {{ui:Tasolle}}.
4. Valitse {{ui:Lisää}}.

Pilarin tai perustuksen lomakkeessa on vain yksi piste: {{ui:Ruudukko (kirjain)}}, {{ui:Ruudukko (numero)}} ja {{ui:Taso}}.

## Muuta sauvaa sijoittamisen jälkeen

1. Paina {{key:Esc}} (tai valitse {{ui:Valitse}}, {{key:V}}) ja napsauta sauvaa.
2. Muuta {{ui:Ominaisuudet}}-paneelissa {{ui:Nimi}}, {{ui:Profiili}}, {{ui:Materiaali}}, {{ui:Sijainti}} tai {{ui:Kierto (°)}}.
3. Siirtääksesi sauvaa muokkaa {{ui:Alku}}- tai {{ui:Loppu}}-pään x-, y- ja z-arvoja kohdassa {{ui:Päät (x, y, z mm)}}. Kunkin pään ruudukkonimi näkyy alapuolella, tai sen koordinaatit, jos pää on ruudukon ulkopuolella.

Jokainen muutos on yksi kumoamisvaihe. Kenttien alapuolella näet sauvan {{ui:Osamerkki}}, {{ui:Kokoonpano}}, {{ui:Katkaisupituus}}, {{ui:Paino}} (bruttopaino: reikiä ja lovia ei vähennetä) ja luettelon, josta profiili tulee.

Sauvoja ei voi vielä vetää tai matriisoida. Jos haluat tehdä siitä samanlaisen sauvan, kopioi ja liitä se tai monista se ({{key:Mod+D}}): katso [Kopioi, liitä ja monista](topic:copy-paste).

## Poista sauva

Valitse se ja paina {{key:Delete}} tai {{key:Backspace}}, tai valitse {{ui:Poista}}. Liitokset, jotka siihen kuuluvat, poistuvat myös. {{key:Mod+Z}} palauttaa kaiken.

## Hyvä tietää

- **Mihin suuntaan pilari on päin.** Kierrolla 0 pilarin laipat osoittavat x-suuntaan, kohti viereisiä numeroituja ruudukkoviivoja. Palkki ruudukolta 1 ruudukolle 2 liittyy laippaan; palkki A:sta B:hen liittyy uumaan. Päätylevyt kiinnitetään vain laippoihin, joten jos palkkisi kulkevat A:sta B:hen, anna noille pilareille kierto 90.
- **Palkit tasolla roikkuvat sen alapuolella** oletusasetuksella {{ui:Teräksen yläpinta viivalla}}. Valitse {{ui:Keskitetty viivalle}}, jos tasosi ovat sauvojen keskilinjoja.
- **Pilarit kulkevat tasolta tasolle.** Kahden kerroksen läpi kulkevalle pilarille aseta {{ui:Ylös asti}} korkeammalle tasolle.
- **Vinot palkit** ovat sallittuja (valitse päät eri tasoilta), mutta päätylevyjä ei vielä rakenneta niihin.

Seuraavaksi: [Liitä palkit pilareihin päätylevyillä](topic:end-plates).
