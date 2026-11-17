---
title: Perustuksen tarkistukset
summary: Tarkista anturat, yhdistetyt anturat ja laatat kuvaamasi maapohjan perusteella, painuma, jousilla tuettu joustava laatta, paaluryhmät ja tukimuurit. Apuväline insinöörin tarkistukseen.
keywords: perustus, antura, yhdistetty antura, laatta, painuma, alustan kimmokerroin, jouset, reunapilari, kulmapilari, kantavuus, liukuminen, kaatuminen, lävistyskuormitus, yksisuuntainen leikkaus, taivutus, ankkurointi, vähimmäisraudoitus, paaluryhmä, tukimuuri, ACI 318-19
from: 6961ad52
---

:::warning
Nämä ovat ensimmäisen asteen tarkistuksia, jotka insinööri käy läpi; ne eivät ole suunnittelun hyväksyntä. Sallittu maapohjan kantopaine ja kitkakerroin ovat sinun määritettäviäsi: DetailCraft ei tunne maapohjaasi.
:::

{{ui:Perustus}}-välilehti tarkistaa mallin anturat antamiesi pilarikuormien perusteella.

## Kuvaa maapohja

Kirjoita {{ui:Sallittu kantopaine}} ja {{ui:Pohjan kitkakerroin}}. Molemmat ovat aluksi 0, mikä tarkoittaa, ettei arvoa ole annettu: tarkistus näyttää paineen huomautuksena eikä ilmoita sen täyttyvän.
Painumaa varten kirjoita maapohjan muodonmuutosmoduli {{ui:Es}} (MPa), sen Poissonin luku ja sallittu painuma (aluksi 25 mm).
Joustavaa laattaa varten kirjoita alustan kimmokerroin {{ui:ks}}.
Samoin ovat mukana anturan päällä oleva täyttö, maapohjan tilavuuspaino, liukumisen ja kaatumisen varmuuskertoimet (aluksi 1.5) sekä tankojen myötölujuus.

## Anna kuormat

Jokaisella anturalla on luettelo pilarikuormista. Käytä {{ui:Lisää pilarikuorma}}-painiketta ja täytä käyttörivi (kantavuutta, liukumista ja kaatumista varten) sekä mitoitusrivi (lujuustarkistuksia varten): pystykuorma P alaspäin, vaakavoimat Vx ja Vy anturan yläpinnalla, momentit Mx ja My, pilarin paikka anturalla ja sen koko.

Tai avaa {{ui:Analyysi}}-välilehti ja paina {{ui:Ota pilarikuormat Analyysistä}}: jokaisesta anturalla olevasta tuesta tulee pilarikuorma valitsemistasi käyttö- ja mitoitusjoukoista. Positiivinen My kuormittaa anturan +x-puolta enemmän; positiivinen Mx kuormittaa −y-puolta enemmän.

## Mitä tarkistetaan

Käyttökuormista, joihin on lisätty anturan oma paino ja täyttö:

- **Kantavuus:** paine jäykän anturan alla. Keskikolmanneksen sisällä koko pohja on kosketuksissa; sen ulkopuolella osa pohjasta nousee irti ja huippupaine on suurempi. Resultantti pohjan ulkopuolella ei täytä vaatimusta.
- **Liukuminen:** kitka kerrottuna pystykuormalla verrattuna vaakavoimaan.
- **Kaatuminen:** resultantin etäisyys reunasta.
- **Painuma:** keskimääräisen paineen kimmoinen painuma puoliavaruudessa annetulla muodonmuutosmoduulilla keskikohdassa ja kulmassa (Timoshenkon ja Goodierin ratkaisu joustavalle suorakulmiolle) verrattuna rajaan. Se on jäykän anturan yläraja ja jättää pois rajoitetun paksuisen maakerroksen, kaivetun maan keventävän vaikutuksen ja konsolidaation. Ilman moduulia se näyttää paineen huomautuksena.

Pelkistä mitoituspilarikuormista (ACI 318-19):

- **Taivutus** pilarin pinnassa vähimmäisteräksellä (0.0018 420 MPa:n tangoille) ja piirtämilläsi tangoilla.
- **Yksisuuntainen leikkaus** etäisyydellä d pinnasta.
- **Lävistyskuormitus** etäisyydellä d/2 kunkin pilarin ympärillä pilarin momentin kanssa. Reunan lähellä olevalla pilarilla kriittistä leikkausta rajaa anturan reuna (reunalla kolme sivua, kulmassa kaksi; ACI 318-19 22.6.4.1 ja pienempi αs taulukosta 22.6.5.2), ja leikkauksen oman keskikohdan ympärillä oleva momentti sisältää kuorman siirtymän.
- **Ankkurointi** tankojen pilarin pinnan ohi, suorina tai koukkujen kanssa.
- **Syvyys** alapuolisten tankojen yläpuolella (150 mm).

Yhdistetty antura tai laatta käsitellään jäykkänä, ja leikkaus sekä momentti saadaan statiikasta koko leveyden poikkileikkauksilla.

## Joustava laatta jousilla

Valitse {{ui:Analysoi tämä antura joustavana laattana jousilla}}, kun anturalla on monta pilaria ja jäykkä antura on liian karkea. Antura muuttuu nelisolmuisista elementeistä koostuvaksi levyksi, joka lepää jousien varassa ({{ui:ks}}, jonka kirjoitit, kohdistettuna solmuihin), ja jokaisen pilarin kuorma jakautuu oman alansa solmuille. Toinen taulukko antaa suurimman maapohjapaineen ja painuman (sekä niiden erotuksen suurimman ja pienimmän välillä), taivutusmomentin kummassakin suunnassa tarvittavine teräksineen, vedon yläpinnassa verrattuna tavallisen betonin lujuuteen (anturalla ei ole yläpuolisia tankoja), yksisuuntaisen leikkauksen etäisyydellä d pilareista sekä lävistyskuormituksen jousten omaa painetta vasten. Verkkoa tihennetään, kunnes pilari on kolme elementtiä leveä; suuri laatta vie muutaman sekunnin. Laatan oma paino ja sen yllä oleva maa kumoavat toisensa, eikä niitä oteta huomioon.

Jokainen epäonnistunut tarkistus on {{ui:Ongelmat}}-paneelissa kohtineen.

## Paaluryhmät ja tukimuurit

{{ui:Lisää paaluryhmä}} asettaa paaluruudukon jäykän paalulaatan alle: kirjoita kuorma ja momentit sekä se, mitä yksi paalu saa kantaa puristuksessa ja vedossa (paalusuunnittelun luvut, ei tämän välilehden). Kunkin paalun reaktio on P/n lisättynä sen osuudella momenteista (kimmoinen menetelmä), ja suurin puristus sekä mahdollinen veto tarkistetaan.

{{ui:Lisää tukimuuri}} tarkistaa konsolimuurin vaakatasoisen täytön päällä metriä kohti: Rankinen aktiivipaine, kaatuminen varpaan ympäri, liukuminen ja pohjapaine. Varpaan edessä oleva passiivipaine jätetään pois. Avustajasi voi suorittaa samat tarkistukset komennoilla `pile_group_check` ja `retaining_wall_check`.

Paaluryhmät, muurit ja laattakytkin tallennetaan mallitiedostoon, ja epäonnistunut tarkistus näkyy kohdassa {{ui:Ongelmat}}.
