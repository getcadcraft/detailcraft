---
title: Puu- ja kevytteräsrunkoelementit
summary: Rakenna seinä-, lattia- ja kattoelementit puusta tai kevytteräksestä, ja saa jokainen kappale, sahausluettelo, valmistuspiirustus ja ostettava varasto.
keywords: runko, puu, puutavara, kevytteräs, kylmämuovattu, tolppa, lattiapalkki, parras, aukkopalkki, kuningastolppa, jakkitolppa, lyhytolppa, sahausluettelo, valmistuspiirustus, elementti
from: 3e38ffb9
---

{{ui:Runko}}-välilehti rakentaa kuvaamistasi elementeistä ne tiedot, joita runkotyön ryhmä ja puutavarakauppa tarvitsevat. Elementit tallennetaan mallitiedostoon.

:::warning
Mitat, välit ja aukkopalkit ovat sinun päätettävissäsi. DetailCraft ei tarkista, kantaako tolppa tietyllä välillä tätä seinää tai ylittääkö aukkopalkki tämän aukon: se kuuluu rakennusmääräysten taulukoille ja insinöörillesi.
:::

## Lisää elementti

Valitse {{ui:Lisää seinä}}, {{ui:Lisää välipohja}} tai {{ui:Lisää katto}} ja täytä sitten mitat millimetreinä, materiaali (puu tai kevytteräs) ja sauvan koko. Puutavaran koot ovat nimelliskokoja, joilla on hiottu mitta (2×4 on 38 × 89 mm). Teräsrunkotolpat nimetään syvyyden ja paksuuden mukaan, esimerkiksi `C92-1.2`.

## Seinät

Seinässä on alapuomi, yksi tai useampi yläpuomi (teräksessä yksi ura), päätytolpat, tolpat annetulla välillä ja jokaista aukkoa kohti: kaksi kuningastolppaa, kaksi jakkitolppaa, aukkopalkki valitulla koolla ja levyillä sekä lyhytolppia aukkopalkin yläpuolella (ja ikkunan alapuomin alapuolella). Anna jokaiselle aukolle etäisyys vasemmasta päästä, leveys sekä aukon karkea yläreuna ja alareuna mitattuna aluslattiasta; ovella alareuna on 0.

## Välipohjat ja katot

Välipohjassa on lattiapalkit leveyden yli jänteen suuntaan, reunapalkit molemmissa päissä ja, jos valitset sen, tukipalat jänteen keskellä. Kattoelementti on harjakatto: pari parrasta annetulla välillä (niiden pituus sisältää räystäsulokkeen rinteen suuntaan) ja harjalauta.

## Mitä saat

Jokainen elementti näyttää osansa mittakaavapiirroksessa, jossa jokainen kappale on merkitty, merkinnän mukaan jaotellun sahausluettelon sekä yhteissumman. Taulukko {{ui:Ostettava varasto}} sijoittaa kaikkien elementtien leikkaukset varastopituuksiin: lyhimpään pituuteen, johon kunkin tangon leikkaukset mahtuvat. {{ui:Tallenna valmistuspiirustus (SVG)}} kirjoittaa piirustuksen; {{ui:Download CSV}}-painike kirjoittaa kaikki sahausluettelot ja varastoluettelon.

## Sijoita elementti malliin

Anna kunkin elementin alla, mihin se menee (x, y, z millimetreinä ja kulma), ja paina {{ui:Aseta sauvoiksi}}: jokaisesta kappaleesta tulee mallin sauva, jolla on koon hiottu poikkileikkaus ja materiaalin paino (noin 500 kg/m³ puulle, teräs runkotolpille). Seinä kulkee kulman suuntaisesti alapäästään vasemmalta, alareuna z-korkeudella; välipohjan lattiapalkit ovat alapinta z-korkeudella; katon päätykolmion julkisivu kulkee kulman suuntaisesti z:n ollessa seinäpuomien yläreunassa. Jokainen aukkopalkin levy on oma sauva vierekkäin. Painamalla uudelleen aiemmin sijoitetut sauvat korvataan, ja {{ui:Poista sijoitetut sauvat}} poistaa ne; kumpikin on yksi kumoamisaskel. Analyysi jättää nämä sauvat pois: ne eivät ole teräsrungon sauvoja.

## PDF-arkit

{{ui:PDF-arkit}} tallentaa yhden A3-sivun kustakin elementistä: elementti mittakaavassa, jokainen kappale merkittynä, kokonaismitat, sahausluettelo ja otsikkonauha.

{{ui:Ongelmat}}-paneelin ongelmat: aukko liian lähellä seinän päätä tai toista aukkoa, aukkopalkki, joka ei mahdu yläpuomien alle, kappale, joka on pidempi kuin pisin varasto.

{{ui:Ongelmat}}-paneeli listaa myös seinäelementeille ja betoniseinille **Rajapinnat (LOD 350)**: aukko, joka ulottuu seinän pään tai yläreunan yli, kaksi päällekkäistä aukkoa ja betoniseinän aukko, joka on leveämpi kuin 1000 mm ilman reunaraudoitusta. Ne ovat neuvoja, samat säännöt, joita BimCraft-tarkastus ajaa; leveys on CadCraft-aloitusarvo, ei standardi.
