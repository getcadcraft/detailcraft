---
title: Raudoituksen ahtauskartta
summary: Näe, kuinka tiukasti raudoitus jättää kunkin perustuksen betonin laskeutumiseen, antamasi kiviaineksen ja tärylaitteen mukaan.
keywords: raudoitus, ahtaus, väli, puhdas väli, betonin valu, kiviaines, tärylaite, aloitustangot, koukut, perustus, matto
from: 40d029e6
---

{{ui:Ahtaus}}-välilehti piirtää lämpökartan kustakin perustuksesta sen ollessa katsottuna ylhäältä. Vaaleansininen on avointa; keltainen ja oranssi tarkoittavat, että tila kapenee; punainen on ahtaampi kuin tangot edellyttävät. Tummat solut ovat itse tankoja.

## Mitä kartta mittaa

Betoni valuu teräksen läpi kerros kerrallaan ja voi liikkua sivusuunnassa kerrosten välillä. Joten kussakin pisteessä kartta ottaa kapeimman vapaan välin missä tahansa yhdessä kerroksessa: alimman matan tankojen väliltä, seuraavan tankokerroksen väliltä ja ylhäällä aloitustankojen koukkujen jalkojen väliltä. Aloitustangot ulottuvat kaikkien näiden kerrosten läpi.

## Mikä lasketaan tiukaksi

Tarve on suurempi kuin 25 mm ja tangon halkaisija (ACI 318-19 25.2.1), tai BS 4449 -tangoilla suurempi kuin tangon halkaisija ja 20 mm (EN 1992-1-1 8.2). Kaksi ruutua nostavat tarvetta:

- {{ui:Suurin kiviaines}}: tarve muuttuu 4/3 kiviaineksen koosta (ACI) tai kiviaineksen koosta plus 5 mm (EN).
- {{ui:Tärypää}}: tarve on vähintään tärypään halkaisija.

Molemmat alkavat arvosta 0, mikä tarkoittaa tuntematonta: DetailCraft ei tiedä betonisi koostumusta tai pumppuasi.

## Ongelmat

Perustus, jossa jossain kohdassa on tiukempi kuin tarve, luetellaan {{ui:Ongelmat}}-paneelissa, ja siinä kerrotaan löydetty aukko ja tarvittava aukko. {{ui:Valitse}} karttan vieressä valitsee perustuksen.

Kartta ei näe sidontalankoja, liitoskappaleita, putkituksia tai pilarin omia tankoja.
