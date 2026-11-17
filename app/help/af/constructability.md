---
title: Konstrueerbaarheidskontroles
summary: Probleme vir die dinge wat 'n detailleerder met die oog vang: 'n bout wat 'n skroefsleutel nie kan bereik nie, bolte te naby vir die dop, hoeklasse buite hul groottegrense, lasse wat 'n brander nie kan bereik nie, en buise wat water hou.
keywords: konstrueerbaarheid, skroefsleutel, dop, boutbereik, aandraai, lasgrootte, hoeklas, minimum las, maksimum las, water, ontluchtingsgat, dreineergat, galvanisering, holprofiel, probleme
from: 72315151
---

DetailCraft soek na vier soorte moeilikheid wat geen sterktekontrole vind nie, en lys hulle in die {{ui:Probleme}}-paneel. Dit is waarskuwings en notas om na te kyk, nie foute nie: die model bou steeds.

## 'n Bout wat 'n skroefsleutel nie kan bereik nie

Vir elke bout sit DetailCraft 'n dop oor die kop en oor die moer. Die dop is 'n silinder so breed soos die moer oor sy hoeke plus 'n wand van 4 mm, 60 mm lank. As 'n balklyf, 'n flens, 'n plaat of 'n skoor binne daardie silinder staan, noem die probleem die verbinding, hoeveel bolte, watter onderdeel in die pad is en hoe ver dit van die bout af is.

Die dop is 'n tipiese slagdop. 'n Spanner benodig minder ruimte en 'n groter stuk gereedskap meer. Vra jou gekoppelde assistent om `constructability_check` met 'n ander `socketLength` te laat loop om te sien hoe die antwoord verander.

## Bolte te naby vir die dop

'n Dop oor een bout mag nie die kop van die volgende aanraak nie. Die bolte van 'n verbinding wat nader as die dop se breedte plus die buurman se kop is, word gelys met die gevonde afstand en die benodigde afstand.

## Hoeklasgroottes

AISC 360-16 Tabel J2.4 stel die kleinste hoeklas volgens die dikte van die dunste deel (3 mm tot 6.35 mm dik, 5 mm tot 12.7, 6 mm tot 19.05, 8 mm bo dit), en J2.2b die grootste langs 'n rand van materiaal: nie groter as die materiaal wanneer dit dunner as 6.35 mm is nie, anders 1.6 mm minder. Verbindings met dieselfde grootte op dieselfde dikte word as een probleem gelys.

Die dikte wat gebruik word, is die dunste deel wat deur die las genoem word, so 'n 8 mm-las rondom 'n balk met 'n 6.35 mm-lyf word gelys.

## Water en ontlugting

- 'n **oop boonste einde** van 'n holprofiel wat regop staan of met meer as 10° skuins is, laat reën in.
- 'n Holprofiel wat **aan albei punte toe** is, benodig 'n ontluchtings- en 'n dreineergat; warm-dompel-galvanisering en die druk van verhitte lug vra albei om een.

## Kan die lasser dit bereik

'n Hoeklas word gemaak met die brander halfpad tussen die twee vlakke wat dit verbind. Vir elke rondomlopende hoeklas ('n eindplaat, 'n basisplaat, 'n miterplaat) neem die kontrole die lid se deursnitomtrek by die plaat en, elke 20 mm, loop 'n brander-pad 45° uit vanaf waar sy neus (10 mm radius om mee te begin) albei vlakke eers vrymaak, vir nog 30 mm. As die pad die balk se eie flens of 'n ander onderdeel tref, word daardie deel van die las gelys met die onderdeel en die afstand. Hierdie getalle is tipies, nie 'n standaard se getalle nie: vra jou vervaardiger vir die proses en neus. Lasse langs twee rande ('n skuiflipplaat) word nie geplaas nie en nie gekontroleer nie.
