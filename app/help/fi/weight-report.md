---
title: Materiaali- ja painoraportti vaiheittain
summary: Leikkauspituudet, määrät, painot ja maalipinta-alat kussakin vaiheessa pulttien ja raudoitteiden kanssa taulukkona, CSV-tiedostona tai PDF:nä.
keywords: raportti, paino, tonnimäärä, kg, maali, maalipinta, pinta-ala, pinnoite, leikkauspituus, materiaaliluettelo, vaihe, osaluettelo, csv, pdf
from: 337d6d92
---

{{ui:Tuloste}}-ryhmässä avaa {{ui:Lisää}}-valikko ja valitse {{ui:Painoraportti vaiheittain}}, tai avaa näkymän alla oleva {{ui:Vaiheittain}}-välilehti. Se näyttää:

- **Yhteenveto vaiheittain**: jokaisesta vaiheesta osien määrän, teräspainon, maalipinta-alan, pultit ja ankkuripultit sekä raudoituksen. Sen jälkeen kokonaissummat.
- **Yksi taulukko vaihetta kohden**: jokaisen osamerkinnän tyyppinsä, profiilinsa, materiaalinsa, leikkauspituutensa, määränsä, painonsa kappaletta kohden, painonsa ja maalipinta-alansa kanssa. Sen jälkeen vaiheen pultit ja ankkuripultit.

{{ui:Lataa CSV}} tallentaa samat taulukot yhteen CSV-tiedostoon (`<name> weight report.csv`). {{ui:Lataa PDF}} tekee raportin [DetailCraft-asetuksista](topic:settings#drawings) valitulle arkkikoolle. Siinä on ensin yhteenveto, sen jälkeen jokainen vaihe. Pitkät taulukot jatkuvat seuraavalla sivulla, ja jokainen sivu on numeroitu.

## Miten luvut lasketaan

- **Painot ovat brutto, kuten osaluettelossa**: profiilin paino metriä kohden kerrottuna leikkauspituudella. Reikiä ja koveroleikkauksia ei vähennetä.
- **Maalipinta-ala on poikkileikkauksen ulkopuoli leikkauspituuden mitalta**: I-profiilissa kaikki laippojen ja uuman pinnat, levyssä molemmat pinnat ja reunat, putkessa pelkkä ulkopuoli. Päitä ja reikiä ei lasketa.
- **Raudoitus on vaiheen perustuksien tankojen paino [taivutusluettelosta](topic:footings-and-rebar).**
- **Liitoksen levyt ja pultit lasketaan sen pääjäsenen vaiheessa.** Katso [Vaiheet](topic:phases).

Kun [merkinnät vaiheittain](topic:phases#marks-per-phase) ovat päällä, jokaisella vaiheella on omat merkinnät (1-b1, 2-b1). Kun ne ovat pois päältä, merkintä voi näkyä useammassa vaiheessa: jokainen vaihe listaa kappaleet, jotka sillä on.
