---
title: Yleisjärjestely- ja kokoonpanopiirustukset
summary: Tee mallista pohjakuvat, julkisivut ja yksi kokoonpanopiirustus kokoonpanomerkkiä kohti A4–A1- tai ANSI B–D-arkeille, julkaise ne revisiokirjaimilla ja lataa ne PDF-, DWG- tai DXF-muodossa.
keywords: piiloviivat, piilaviivojen poisto, katkoviiva, revisiopilvi, pilvet, revisiokolmio, ankkuripulttikuvio, ankkurisauvat, sauvaluettelo, pohjalevyluettelo, pisteytys, julkaisu, revisio, rev, revisiotaulukko, uudelleen julkaisu, julkaisuloki, siirtolista, dwg, dxf, cad-tiedosto, vie piirustukset, piirustukset, yleisjärjestely, ga, pohjakuva, julkisivu, kokoonpanopiirustus, arkkikoko, paperikoko, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, tulostus, mittakaava, piirustusotsikko, mallin viite
from: 709f8604
---

Valitse {{ui:Drawings}} {{ui:Output}}-ryhmästä. DetailCraft tekee koko sarjan mallista sellaisena kuin se nyt on. Mitään ei tallenneta: muuta mallia, avaa {{ui:Drawings}} uudelleen, ja sarja tehdään uudelleen.

## Mitä sarjassa on

- **Pohjakuvat**, yksi jokaista tasoa kohti, jolla on jotakin, katsottuna ylhäältä.
- **Julkisivut**, yksi jokaista ruudukkoviivaa kohti, jonka 1 m:n etäisyydellä on sauvoja.
- **Ankkuripulttikuvio**, kun mallissa on pohjalevyjä: jokainen pohjalevy ylhäältä nähtynä pilarinsa ja ankkurisauvoineen, ruudukot mittoineen, jokaisen sauvakuvion tyypillinen detalji (BP1, BP2 …) sauvavälin ja reunaetäisyyksien kanssa, sekä kaksi luetteloa: ankkurisauvat merkinnän mukaan (R1, R2 …: määrä, halkaisija, pituus, ulkonema levyn päältä, upotus, laatu) ja pohjalevyt ruudukon mukaan (pilari, kuvio, levy, sauvat, levyn yläpinta). Ruudukon ulkopuolella oleva pilari paikannetaan koordinaateillaan.
- **Kokoonpanopiirustukset**, yksi jokaista kokoonpanomerkkiä kohti: etu-, päänäkymä ja päätynäkymä, ketjutetut mitat reikiin ja levyn reunoihin, osaluettelo, irralliset pultit ja sauvat sekä hitsi- ja reikämerkinnät. Jokaisella hitsatulla levyllä on etunäkymässä kulmahitsin symboli (AWS A2.4): nuoli osoittaa liitokseen, viivan alapuolella oleva kolmio tarkoittaa nuolen puolta, sen vasemmalla puolella oleva luku on hitsin koko mm:nä, ja ympyrä siinä, missä nuoli kohtaa viivan, tarkoittaa ympäri kulkevaa hitsiä.

**Piiloviivat.** Pohja- ja julkisivupiirustukset jättävät pois osan viivat, jos sen edessä kokonaan oleva osa peittää ne (palkki nähtynä päästä päin pilarin takana). Kokoonpanopiirustuksissa levy piirretään katkoviivalla siinä kohdassa, missä pääosa peittää sen: etunäkymässä uuman takana (katsottuna osan −u-puolelta), päänäkymässä yläpaarteen alla. Osat, jotka ovat samalla syvyydellä tai joiden syvyys menee päällekkäin, piirretään molemmat kokonaisina.

Jokaisessa arkissa on piirustusotsikko, jossa ovat piirustusnumero, mittakaava, mallin nimi, päivämäärä, arkkinumero ja arkkikoko sekä mallin viite: tallennetusta mallista tehty koodi, jotta tuloste voidaan yhdistää malliin, josta se tuli.

## Valitse arkkikoko

Valitse koko {{ui:Drawings}}-ikkunan yläosan luettelosta: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) tai {{ui:ANSI D}} (22 × 34 in). Jokainen arkki on vaakasuunnassa. Sarja tehdään uudelleen uudelle koolle heti, ja samaa kokoa käytetään valmistuspiirustuksiin. Se on myös [DetailCraft-asetuksissa](topic:settings#drawings), ja tämä selain muistaa sen.

- Suurempi arkki piirtyy suuremmassa mittakaavassa. Mittakaavat ovat aina vakiomittakaavoja (1:10, 1:20, 1:25, 1:50, 1:100 ja niin edelleen).
- Teksti pysyy samankokoisena jokaisella arkilla, joten se on luettavissa tulostettuna.
- Pienellä arkilla pitkä, ohut kokoonpano voi saada suuremman mittakaavan syvyyssuunnassa kuin pituussuunnassa. Näkymän otsikko kertoo silloin molemmat mittakaavat, ja mitat ratkaisevat.

## Julkaise piirustukset ja revisiot

Esikatselun yläpuolella oleva rivi kertoo, missä tilassa näytetty arkki on: **Ei vielä julkaistu**, **Rev B, julkaistu … ; ei muutoksia sen jälkeen**, tai punaisena **Muuttunut rev B:n jälkeen: vaatii uudelleen julkaisun**. Arkkiluettelo merkitsee julkaistut arkit revisioineen ja ne, jotka vaativat uudelleen julkaisun.

- Kirjoita, mihin julkaisu on tarkoitettu (aluksi ”Julkaistu valmistukseen”), ja valitse {{ui:Issue this sheet}}, tai {{ui:Issue changed sheets}} kaikille arkeille, jotka ovat uusia tai muuttuneet viime julkaisun jälkeen.
- Arkin ensimmäinen julkaisu on revisio A, sitten B, C ja niin edelleen (I ja O ohitetaan).
- Piirustusotsikko näyttää piirustusnumeron revisioineen (”A-B1  rev B”), ja sen vieressä oleva revisiotaulukko luettelee viimeisimmät julkaisut: revisio, päivämäärä ja kuvaus. Pienellä arkilla se näyttää niin monta kuin mahtuu.
- Arkki ”muuttuu”, kun siinä piirretty asia muuttuu: sauva siirtyy, tulee uusi reikä, merkintä numeroidaan uudelleen. Päivämäärä, arkkimäärä ja itse revisiotaulukko eivät lasketa. Arkkikoon muuttaminen muuttaa jokaista arkkia.
- Julkaisuloki tallennetaan mallitiedostoon, ja julkaisu on yksi kumoamisvaihe. [KISS-tiedosto](topic:kiss-export) kantaa kunkin piirustuksen viimeisintä revisiota.

### Revisiopilvet

Arkin toisesta julkaisusta alkaen jokainen osa tai perustus, joka on muuttunut, piirretään revisiopilven sisään, jossa on kirjaimen kantava revisiokolmio.

- Kun arkki on muuttunut viime julkaisun jälkeen, pilvet näyttävät, mitä on muuttunut sen jälkeen, ja kolmiossa on tuleva revisio (rev B julkaistu ja muuttunut: kolmiot sanovat C).
- Kun julkaiset sen, pilvet pysyvät sen revision arkilla, kuten painetussa sarjassa, kunnes arkki muuttuu jälleen.
- Jokainen arkki pilvittää vain siinä näkyvät muutokset. Pohja- ja julkisivupiirustuksissa ei ole reikiä eikä leikkauksia, joten niissä pilvitetään sauva, joka on siirtynyt, käännetty tai muutettu kooltaan, tai jonka merkintä on muuttunut. Kokoonpanopiirustuksissa ja ankkuripulttikuviossa pilvitetään myös uudet tai siirtyneet reiät ja leikkaukset.
- Uudelleen numeroitu merkintä lasketaan: kun muutos tekee palkista uuden kokoonpanon, palkit, joiden merkintä siirtyi ylöspäin (B1:stä B2:ksi), pilvitetään pohja- ja julkisivupiirustuksissa.
- Poistettu osa ei jätä mitään pilvitettävää.
- Ennen revisiopilvien tuloa (DetailCraft 0.4) julkaistut arkit alkavat pilvittää seuraavasta julkaisustaan.
- Pilvet ovat PDF-, DXF- ja DWG-latauksissa, eivätkä ne itse koskaan lasketa muutokseksi.

## Lataa

Valitse muoto painikkeiden vieressä olevasta luettelosta, sitten {{ui:This sheet}} näkyvälle arkille tai {{ui:All sheets}} koko sarjalle.

- **PDF**: tulostamista tai lähettämistä varten. {{ui:All sheets}} tekee yhden PDF:n, yhden sivun arkkia kohti, kukin sivu valitussa koossa.
- **DWG**, versioissa 2018, 2013, 2010, 2007, 2004 tai 2000: arkkien avaamiseen CAD-ohjelmalla. Valitse vanhempi versio vanhemmalle ohjelmalle.
- **DXF (R12)**: versio, jonka lähes jokainen CAD-ohjelma avaa.

DWG- tai DXF-arkki piirretään täydessä koossa: yksi piirustusyksikkö on yksi millimetri paperilla, joten se tulostuu mittakaavassa 1:1 ja jokainen näkymä säilyttää otsikossaan kertomansa mittakaavan. Jokainen kynä on oma tasonsa: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID ja niin edelleen, viivanpaksuudella (DWG) ja katkoilla. Sanat ovat tekstiä DetailCraftin tekstityylissä (Arial). Mitat ovat näkemiäsi viivoja ja lukuja, eivät mittausobjekteja. {{ui:All sheets}} laittaa DWG- tai DXF-tiedostot yhteen zip-tiedostoon, yksi tiedosto arkkia kohti.

:::note
DXF R12:ssa ei ole viivanpaksuuksia eikä täyttöjä: tasot säilyttävät nimensä, joten aseta kynät tasoittain tulostaessa, ja täytetyt muodot jätetään pois (tilarivi kertoo, montako).
:::

Tulosta 100 %:n mittakaavassa (ei ”sovita sivulle”) samankokoiselle paperille, jos haluat ilmoitettujen mittakaavojen pitävän.
