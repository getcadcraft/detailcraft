---
title: Lähetä NC-tiedostot verstaalle
summary: Vie DSTV NC -tiedostot jokaiselle osamerkille (I-profiilit, U-profiilit, kulmateräkset, HSS-profiilit ja levyt) zip-pakettina ja tarkista ne ennen kuin ne päätyvät koneelle.
keywords: nc, nc1, dstv, cnc, kone, palkkilinja, reikälinja, levyleikkaus, vienti, valmistus, zip
from: 598b6091
---

DetailCraft kirjoittaa yhden DSTV NC -tiedoston (`.nc1`) jokaiselle osamerkille I-profiileille, U-profiileille, kulmateräksille, suorakaide- ja pyöreille HSS-profiileille sekä levyille, ja pakkaa ne yhteen zip-tiedostoon. Palkkilinjat ja levykoneet lukevat näitä tiedostoja sahaukseen, poraukseen ja leikkaukseen.

## Vienti

1. Tyhjennä ensin {{ui:Ongelmat}}-välilehti: liitos, jota ei voitu rakentaa, ei lisää yhtään reikää.
2. Tallenna malli ({{key:Mod+S}}), jotta NC-tiedostot vastaavat tallennettua mallia.
3. Valitse {{ui:NC-tiedostot}} ryhmästä {{ui:Tuloste}}.
4. Selain lataa tiedoston `<name> NC.zip`. Tilarivi kertoo, montako tiedostoa paketissa on, ja luettelee osamerkit, joille tiedostoa ei kirjoitettu (kulmateräs tai pyöreä putki, jossa on lovi).

Zip-tiedoston sisällä jokainen tiedosto on nimetty osamerkkinsä mukaan: `b1.nc1`, `c1.nc1`, `p1.nc1` … Zip-tiedosto on pakkaamaton ja aukeaa millä tahansa zip-työkalulla.

Jos mallissa ei ole osia, tilarivi kertoo siitä.

## Mitä kukin tiedosto sisältää

- **Otsikko (ST):** mallin nimi tilauksena, osamerkki piirustuksena ja kappaleena, vaihe 1 tai osan oma vaihe, teräslaatu, määrä, profiili ja sen mitat, massa metriä kohti sekä maalauspinta-ala metriä kohti. Sahaukset ovat suoria.
- **Ulkoreunat (AK):** uuman ääriviiva, josta lovet on leikattu pois, ja jokainen laippaääriviiva lyhennettynä siltä päältä, jossa lovi poistaa laipan.
- **Reiät (BO):** jokainen reikä pinnallaan, sijainnillaan ja halkaisijallaan, myös päätylevyjen ja pohjalevyjen tekemät reiät.

Kenttä kerrallaan sekä pintojen ja koordinaattien säännöt: [NC-tiedoston kentät](topic:nc1-fields).

## Mitä ei kirjoiteta

- Kulmateräkset ja pyöreät putket, joissa on lovi: ei NC-tiedostoa. Niiden osamerkit luetellaan tilarivillä.
- Pyöreiden putkien reiät (DetailCraft ei tee niitä).
- Viisteet, sisäreunat, osien merkinnät (scribing) ja muut kuin suorat sahauskulmat.
- Pitkäreiät (DetailCraft tekee vain pyöreitä reikiä).

## Tarkista ennen työstöä

DetailCraftin NC-tiedostot luetaan takaisin sen omalla testijoukolla, mutta niitä ei ole ajettu verstaasi koneilla.

1. Avaa tiedostot verstaasi NC-katseluohjelmassa tai koneen ohjelmistossa ja vertaa niitä verstaspiirustuksiin.
2. Tarkista yksi osa kutakin tyyppiä koneella ennen erän ajamista.
3. Tarkista, miten ohjelmistosi lukee laippojen y-koordinaatit ja U-profiilien pinnat: DetailCraft mittaa laipan y-arvon takareunasta ja asettaa U-profiilit selälleen, kuten standardi ne piirtää (ks. [NC-tiedoston kentät](topic:nc1-fields#faces-and-coordinates)).
