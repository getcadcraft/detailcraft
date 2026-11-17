---
title: Zemljevid zgostitve armature
summary: Preverite, kako tesno armatura pušča prostor, skozi katerega beton pride do vsake temeljne stope, z agregatom in vibratorjem, ki ju vnesete.
keywords: armatura, zgostitev, razmik, prosti razmik, polaganje betona, agregat, vibrator, štrleče palice, kavlji, temeljna stopa, mreža
from: 40d029e6
---

Zavihek {{ui:Zgostitev}} nariše toplotni zemljevid vsake temeljne stope, gledano od zgoraj. Svetlo modra pomeni odprto; rumena in oranžna pomenita, da je tesno; rdeča je tesnejša, kot zahtevajo palice. Temne celice so same palice.

## Kaj zemljevid meri

Beton gre skozi jeklo plast za plastjo in se lahko med plastmi premika vstran. Zato zemljevid na vsaki točki vzame najožjo prosto režo v katerikoli plasti: med palicami spodnje mreže, med naslednjo plastjo palic in med kavlji štrlečih palic na vrhu. Štrleče palice stojijo skozi vse njih.

## Kaj šteje kot tesno

Potrebna vrednost je večja od 25 mm in premera palice (ACI 318-19 25.2.1), ali pri palicah BS 4449 večja od premera palice in 20 mm (EN 1992-1-1 8.2). Dve polji jo dvigneta:

- {{ui:Največji agregat}}: potreba postane 4/3 velikosti agregata (ACI) ali agregat plus 5 mm (EN).
- {{ui:Glava vibratorja}}: potreba je vsaj premer glave.

Oba začneta pri 0, kar pomeni neznano: DetailCraft ne pozna vaše mešanice ali vaše črpalke.

## Težave

Temeljna stopa, na kateri je mesto, ožje od potrebnega, je navedena na podoknu {{ui:Težave}} z najdeno in potrebno odprtino. {{ui:Izberi}} poleg zemljevida izbere temeljno stopo.

Zemljevid ne vidi vezi, spojk, instalacijskih kanalov ali lastnih palic stebra.
