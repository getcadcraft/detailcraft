---
title: Portaat
summary: Aseta suora teräsportaikko nousun, kulun ja leveyden mukaan: kaksi reunapalkkia ja levyaskelmat, yksi hitsattu kokoonpano.
keywords: portaat, porras, portaikko, reunapalkki, askelma, nousu, kulku, nosing, porrassuora, teräsportaat, ibc 1011, blondel
from: 62fa3845
---

Suora teräsportaikko: kaksi reunapalkkia (U-profiileja varpaat sisäänpäin tai tasoteräksiä pystyssä) ja levyaskelma jokaisella askelmalla, hitsattuna niiden väliin. DetailCraft laskee nousujen määrän nousun perusteella, tarkistaa ne rakennusmääräysten rajoja vastaan ja tekee portaista yhden tehtaan kokoonpanon.

## Aseta portaat

1. Valitse {{ui:Portaat}} ryhmästä {{ui:Aseta}} tai paina {{key:S}}.
2. Määritä portaat oikealla: **noususuunta** (0° nousee x-akselia pitkin, 90° y-akselia pitkin), **nousu** (0 = seuraavaan tasoon asti), **kulku**, **vapaa leveys** reunapalkkien välillä, **suurin sallittu nousu**, **reunapalkki**, **askelmalevyn paksuus**, **nosing** ja materiaali.
3. Napsauta akselien leikkauspistettä: se on ensimmäisen nousun juuri portaan keskiviivalla.

Tilarivi kertoo, kuinka monta nousua tehtiin. Valitse portaat (napsauta reunapalkkia tai askelmaa), jos haluat muuttaa jotain asetuksista, sijaintia tai vaihetta; ominaisuuksissa näkyvät myös nousut, askelmat, porrassuoran pituus, kaltevuus ja 2 × nousu + kulku.

## Mitä DetailCraft laskee

- **Nousut.** Mahdollisimman vähän, joilla jokainen nousu pysyy suurimman sallitun tai sen alle: 3000 mm:n nousu 178 mm:llä tai vähemmällä antaa 17 nousua, joista kukin on 176.5 mm. Askelmia on yksi vähemmän kuin nousuja (yläkerros on viimeinen askel).
- **Askelmat.** Levy, jonka syvyys on kulku + nosing (oletuksena 280 + 25 = PL6x305) ja pituus vapaa leveys; sen yläpinta on kunkin nousun korkeudella ja etureuna (nosing) on nousulinjan edessä.
- **Reunapalkit.** Portaiden kaltevuudessa, alemmasta kerroksesta ylempään, juuri vapaan leveyden ulkopuolella; niiden yläreuna 50 mm nosingien linjan yläpuolella. U-profiilin varpaat osoittavat portaan sisään; tasoteräs kuten PL12x250 on pystyssä.
- **Hitsit.** Jokainen askelma molempiin reunapalkkeihin. Askelmat ja oikea reunapalkki on hitsattu vasempaan reunapalkkiin, joten portaat saavat yhden kokoonpanomerkin (ST1) ja oman kokoonpanopiirustuksen; reunapalkit saavat osamerkit st…, askelmat p….
- **Tarkistukset.** Varoitukset, kun nousu on alle 4 in. (102 mm) tai yli 7 in. (178 mm), tai kulku on alle 11 in. (279 mm) (IBC 2021:n kohdan 1011.5.2 rajat); kun 2 × nousu + kulku on 600–650 mm:n ulkopuolella (yleinen mukavuussääntö); ja kun reunapalkki on liian matala kantamaan askelmia. Tuntematon reunapalkkiprofiili estää portaiden rakentamisen.

## Hyvä tietää

- Siirrä, kierrä, peilaa, kopioi, liitä, poista ja vaiheet toimivat portaissa kuten sauvassa. Kierto kääntää nousun; peilaus vie sen peilikuvan suuntaan.
- Reunapalkit menevät IFC-vientiin IfcMember-elementteinä ja askelmat IfcPlate-elementteinä; molemmat menevät NC-tiedostoihin ja osaluetteloon. Törmäystarkistus jättää portaiden omat osat rauhaan (ne on hitsattu yhteen).
- Tämä tavallinen porras on yksi porrassuora levyaskelmin. Välitasoille, käsijohteille tolppineen, taitetuille levyaskelmille tai ritiläaskelmille, valitsemallesi sääntöjoukolle, sahausluettelolle ja reunapalkin reikäpiirustuksille valitse {{ui:Käytä teräsportaiden generaattoria}} Portaat-työkalussa (katso Teräsportaiden generaattori).
- Reunapalkit leikataan suoriksi: niiden päätyleikkauksia lattioita vasten ei tehdä.
- DetailCraft ei mitoita portaita: reunapalkkeja ja askelmia ei tarkisteta lujuuden tai taipuman osalta.
