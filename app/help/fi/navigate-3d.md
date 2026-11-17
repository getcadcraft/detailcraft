---
title: Liiku 3D-näkymässä
summary: Käännä, panoroi ja zoomaa hiirellä, kosketuslevyllä tai kosketusnäytöllä, ja milloin käyttää pohjakuvaa ja julkisivua sen sijaan.
keywords: kiertää, kierrä, panoroi, zoomaa, navigoi, näkymä, kamera, kosketuslevy, kosketus, pohjakuva, julkisivu, sovita, hiiri
from: 02c9c7b9
---

Näkymällä on kolme tilaa, jotka valitaan sen yläpuolella olevalta näkymäpalkilta: {{ui:3D}}, {{ui:Pohjakuva}} ja {{ui:Julkisivu}}. Hiiren painikkeet tekevät eri asioita 3D-näkymässä kuin pohjakuvassa ja julkisivussa, joten lue molemmat taulukot.

## 3D-näkymässä

:::mouse
| Tee | Toimi näin |
|---|---|
| Kierrä mallin ympäri | Vedä vasemmalla painikkeella |
| Panoroi | Vedä oikealla painikkeella, tai pidä {{key:Shift}} pohjassa ja vedä vasemmalla painikkeella |
| Zoomaa | Käännä rullaa, tai vedä ylös ja alas keskipainikkeella (rulla painettuna) |
| Valitse osa | Napsauta sitä (napsautus, jossa osoitin liikkuu vain muutaman pikselin) |
| Näytä koko malli | Sovita-painike näkymäpalkin oikeassa päässä |
:::

:::touch
| Tee | Toimi näin |
|---|---|
| Kierrä mallin ympäri | Vedä yhdellä sormella |
| Panoroi | Vedä kahdella sormella |
| Zoomaa | Nipistä kahdella sormella |
| Valitse osa | Napauta sitä |
| Näytä koko malli | Sovita-painike näkymäpalkin oikeassa päässä |
:::

Näkymäkuutio oikeassa yläkulmassa (näkymäpalkin alla) kiertyy mallin mukana: napsauta pintaa, reunaa tai kulmaa katsoaksesi sieltä, vedä sitä kääntääksesi tai napsauta sen talopainiketta palataksesi alkuun. Katso [Näkymäkuutio](topic:view-cube).

Malli kiertyy näkymän keskikohdan ympäri, ja rulla zoomaa kohti näkymän keskikohtaa, ei osoitinta. Kun haluat katsoa yhtä kulmaa tarkasti, panoroi se ensin keskelle ja zoomaa sitten.

## Pohjakuvassa ja julkisivussa

Nämä näkymät katsovat suoraan malliin eivätkä ole kierrettävissä.

:::mouse
| Tee | Toimi näin |
|---|---|
| Panoroi | Vedä vasemmalla tai oikealla painikkeella |
| Zoomaa | Käännä rullaa, tai vedä ylös ja alas keskipainikkeella |
| Valitse osa | Napsauta sitä |
:::

:::touch
| Tee | Toimi näin |
|---|---|
| Panoroi | Vedä yhdellä sormella |
| Zoomaa | Nipistä kahdella sormella (kahden sormen vetäminen panoroi myös) |
| Valitse osa | Napauta sitä |
:::

## Macin kosketuslevyllä

:::mac
- **Zoomaus:** pyyhkäise kahdella sormella ylös tai alas, tai nipistä. Molemmat välittyvät näkymään zoomauksena.
- **Kierto (3D):** paina kosketuslevyä ja vedä yhdellä sormella. Jos käytät napauttamalla napsauttamista, kaksoisnapautus ja veto toimii myös, kun vetäminen on otettu käyttöön kohdassa **Järjestelmäasetukset, Esteettömyys, Osoittimen ohjaus, Kosketuslevyn asetukset**.
- **Panorointi (3D):** pidä {{key:Shift}} pohjassa ja vedä. Myös {{key:Ctrl}}- tai {{key:Mod}}-näppäin vetämisen aikana panoroi. Kahden sormen napsautus on oikea napsautus, mutta sillä vetäminen on kankeaa kosketuslevyllä.
- **Panorointi (pohjakuva ja julkisivu):** vain vedä.
- Magic Mousessa ei ole keskipainiketta: panoroi {{key:Shift}}-vedolla ja zoomaa pyyhkäisemällä sen pintaa.
:::

Lisätietoja oikeasta napsautuksesta ja panoroinnista ilman hiirtä: [Näppäimet, hiiret ja kosketuslevyt](common:keys).

## Pohjakuva ja julkisivu helpottavat sijoittamista

{{ui:3D}}-näkymässä eri tasojen leikkauspisteet voivat olla päällekkäin näytöllä, ja napsautus menee lähimpään pisteeseen. {{ui:Pohjakuva}}- ja {{ui:Julkisivu}}-näkymässä voi valita vain sen tason tai ruudukkoviivan pisteet, jota katsot.

1. Valitse {{ui:Pohjakuva}}, ja valitse sitten taso painikkeiden vieressä olevasta luettelosta. Näkymä katsoo alas kyseiselle tasolle; kaikki yli 1.5 m sen yläpuolella on leikattu pois.
2. Tai valitse {{ui:Julkisivu}}, ja valitse sitten kirjaimella merkitty ruudukkoviiva (”Ruudukko A”, ”Ruudukko B” …). Näkymä katsoo suoraan tuota viivaa; näkyviin tulee vain teräs, joka on 1 m:n päässä siitä.

Julkisivut ovat vain kirjaimilla merkityillä ruudukkoviivoilla. Kun haluat työskennellä numeroitujen ruudukoiden viivalla (runko A:sta B:hen), käytä {{ui:3D}}-näkymää tai sijoita kirjoittamalla {{ui:Lisää ruudukon mukaan}}-lomakkeeseen. Katso [Sijoita pilarit, palkit ja tukisauvat](topic:place-members#place-by-grid-without-clicking).

## Valinta

- Valitse osa napsauttamalla sitä. Se muuttuu korostusvärille, ja {{ui:Ominaisuudet}}-paneeli näyttää sen.
- Napsauta tyhjää tilaa tai paina {{key:Esc}}-näppäintä tyhjentääksesi valinnan.
- Teräs voittaa betonin: napsautus pilarin päälle läpinäkyvän anturaperustuksen sisällä valitsee pilarin. Valitse anturaperustus napsauttamalla sitä kaukana pilarista tai jotakin sen tangoista.
- Pultin tai päätylevyn napsauttaminen valitsee sen liitoksen.
- Pohjakuvassa ja julkisivussa leikattuja osia ei voi napsauttaa.
- Pidä {{key:Shift}} (tai {{key:Ctrl}}, tai {{key:Mod}}) pohjassa ja napsauta lisätäksesi osan valintaan tai poistaaksesi sen; {{key:Mod+A}} valitsee kaiken. Valinta-ikkunaa (laatikon vetämistä) ei ole vielä toteutettu. Mitä useammalla voi tehdä: [Kopioi, liitä ja monista](topic:copy-paste).

Voit valita myös luetteloista: napsauta merkkiä vasemmalla olevassa {{ui:Osamerkit}}-luettelossa, osamerkkiä {{ui:Osaluettelo}}-välilehdessä tai {{ui:Valitse}}-painiketta rivin vieressä {{ui:Ongelmat}}-luettelossa.

## Jos näkymä näyttää väärältä

- Kadonnutko malli? Valitse Sovita-painike.
- Näkymä on tyhjä tai harmaa ja siinä on WebGL-viesti: katso [Vianmääritys](topic:troubleshooting#the-3d-view-is-missing).
- Kaikki toimii edelleen ilman 3D-näkymää, paitsi napsauttaminen siinä: paneelit, raportit ja viennit toimivat kaikki, ja {{ui:Lisää ruudukon mukaan}} sijoittaa sauvat kirjoittamalla.
