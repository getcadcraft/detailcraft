---
title: DetailCraftin aloitusopas
summary: Mitä DetailCraft tekee nyt, miten sen avaa ja ensimmäinen malli ruudukoista valmistuspiirustukseen kymmenessä minuutissa.
keywords: aloitus, ensimmäinen malli, johdanto, teräksen detaljointi, raudoitus, pikaopas, opas, yleiskatsaus
from: 3682c0d8
---

DetailCraft on CadCraft-perheen teräs- ja raudoitusdetaljointisovellus. Rakennat teräsrungosta 3D-mallin ruudukoille ja tasoille, liität osat toisiinsa ja saat sen, mitä konepaja tarvitsee: osa- ja kokoonpanotunnukset, osaluettelon, yksittäisten osien valmistuspiirustukset, DSTV NC -tiedostot, IFC-mallin ja anturoiden taivutusluettelon.

Tämä on varhainen versio. Se tekee lyhyen luettelon asioita huolellisesti sen sijaan, että tekisi kaiken kerralla. Lue [Mitä ei ole vielä rakennettu](topic:not-built-yet) ennen kuin suunnittelet oikeaa työtä sen varaan.

## Mitä se tekee nyt

- Ruudukot ja tasot, jotka kirjoitat itse, millimetreinä.
- Pilarit, palkit, tukisauvat ja levyt julkaistuista profiilikatalogeista (AISC W, S, C, L, HSS ja Pipe; eurooppalaiset IPE, HEA, HEB ja UPN) sekä omat parametriset profiilisi.
- Kaksi liitosta: pultattu päätylevy palkista pilarin laippaan ja pilarin pohjalevy neljällä ankkuripultilla. Kumpikin voidaan kopioida jokaiseen samanlaiseen liitokseen.
- Reiät ja loveukset, jotka kirjoitetaan sijainnin mukaan.
- Suorakulmaiset anturaperustukset alamatolla ja aloitusterästen kanssa.
- Osa- ja kokoonpanotunnukset, jotka päivittyvät itsestään jokaisen muutoksen jälkeen.
- Viennit: IFC4, DSTV NC -tiedostot (I-profiilit ja levyt), osaluettelo CSV:nä, taivutusluettelo CSV:nä ja yhden osan valmistuspiirustus PDF:nä.

## Avaa DetailCraft

1. Avaa DetailCraft työpöytäselaimessa: Chrome, Edge, Firefox tai Safari. Katso [Selaimet ja tietokoneet](common:browsers).
2. Odota, että näyttö täyttyy. Alareunan tilarivillä lukee "Valmis. Avaa Esimerkki tai aseta ruudukot ja tasot ja aloita sauvojen asettaminen."

Mallinäkymä tarvitsee 3D-grafiikan (WebGL). Jos näytön keskellä lukee "Tämä selain ei voinut käynnistää 3D-grafiikkaa (WebGL)", katso [Vianmääritys](topic:troubleshooting#the-3d-view-is-missing).

:::note
Mallisi pysyvät tietokoneellasi. Mallin avaaminen lukee sen selaimessa, ja tallennus lataa tiedoston. Mitään ei lähetetä. Pilvitallennus ei ole vielä käytettävissä. Katso [Minne tiedostosi menevät](common:your-files). Jos haluat käyttää DetailCraftia myöhemmin ilman yhteyttä, valitse kerran online-tilassa sovelluspalkista {{ui:Tallenna offline-käyttöön}}; katso [Työskentely offline-tilassa](common:offline).
:::

:::offline
Olet offline-tilassa. DetailCraft toimii ilman yhteyttä vain, jos se tallennettiin ensin offline-käyttöön: sovelluspalkin {{ui:Tallenna offline-käyttöön}} -painikkeessa lukee silloin {{ui:Offline valmis}}. Katso [Työskentely offline-tilassa](common:offline).
:::

## Katso ensin esimerkkiä

Nopein tapa nähdä, mitä DetailCraft tekee, on esimerkkirunko.

1. Valitse työkalurivin {{ui:Tiedosto}}-ryhmästä {{ui:Esimerkki}}.
2. Näkymä näyttää kaksivälisen rungon: kuusi pilaria pohjalevyineen, neljä palkkia päätylevyineen, yhden tukisauvan ja seitsemän anturaperustusta raudoituksineen.
3. Napsauta palkkia. Oikealla oleva {{ui:Ominaisuudet}}-paneeli näyttää sen osatunnuksen, leikkauspituuden, painon ja reiät, jotka päätylevyt tekivät.
4. Avaa alareunan {{ui:Osaluettelo}}-välilehti nähdäksesi jokaisen osatunnuksen määrineen ja painoineen.

Läpikäynti [Tutustu esimerkkirunkoon](topic:sample-model) käy sen läpi kappale kappaleelta.

## Ensimmäinen mallisi

Uudessa mallissa on jo ruudukot 1-3 ja A-B 6000 mm:n välein sekä kaksi tasoa, Taso 1 korossa 0 ja Taso 2 korossa 4000.

1. Valitse {{ui:Uusi}}. Jos nykyisessä mallissa on muutoksia, DetailCraft kysyy, tallennetaanko ne ensin.
2. Valitse näkymän yläpuolelta {{ui:Pohjakuva}}. Sen vieressä oleva tasoluettelo valitsee Tason 1.
3. Valitse työkaluriviltä {{ui:Pilari}} tai paina {{key:C}}.
4. Napsauta ruudukon leikkauspistettä A/1. W12x50-pilari ilmestyy Tasolta 1 Tasolle 2. Tilarivi kertoo, minne se meni.
5. Napsauta B/1, A/2 ja B/2 sijoittaaksesi kolme lisää.
6. Valitse tasoluettelosta Taso 2 ja valitse sitten {{ui:Palkki}} tai paina {{key:B}}.
7. Napsauta A/1 ja sitten A/2. W16x26-palkki liittää kaksi pilarin yläpäätä, sen teräksen yläpinta tasolla.
8. Paina {{key:Esc}} palataksesi {{ui:Valitse}}-työkaluun ja napsauta sitten palkkia.
9. Valitse {{ui:Liitä}}-ryhmästä {{ui:Päätylevyt}}. Kumpaankin päähän tulee pultattu päätylevy, palkki lyhennetään sopimaan, ja ensimmäinen päätylevy on nyt valittuna.
10. Napsauta palkkia uudelleen.
11. Valitse {{ui:Tuloste}}-ryhmästä {{ui:Valmistuspiirustus}}. Palkin valmistuspiirustuksen esikatselu avautuu. Valitse {{ui:Lataa PDF}}.
12. Paina {{key:Mod+S}} tallentaaksesi mallin. Selain lataa tiedoston `Untitled.detailcraft.json`.

Nimeä malli uudelleen vasemmassa yläkulmassa olevassa {{ui:Nimi}}-kentässä ennen tallennusta, jotta tiedosto ja jokainen vienti kantaa sen nimeä.

## Mihin seuraavaksi

- [Kierros näyttöön](topic:workspace)
- [Aseta ruudukot ja tasot](topic:grids-and-levels)
- [Liiku 3D-näkymässä](topic:navigate-3d) hiirellä, ohjauslevyllä tai kosketusnäytöllä
- [Tulossa muista detaljointiohjelmista](topic:coming-from), jos tunnet jonkin ison detaljointipaketin
- [Tämän ohjeen käyttö](common:help)
