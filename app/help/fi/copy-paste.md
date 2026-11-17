---
title: Kopioi, liitä ja monista
summary: Valitse useita osia, kopioi ne reikineen, leikkauksineen ja liitoksineen ja liitä ne ruudukon leikkauspisteeseen, siirtymällä, samaan paikkaan tai toiseen välilehteen. Leikkaa, monista, poista ja valitse kaikki.
keywords: kopioi, liitä, leikkaa, monista, leikepöytä, liitä samaan paikkaan, valitse kaikki, poista valinta, monivalinta, vaihto-napsautus, useita, toista kenttä, kopioi kehikko, siirtymä, poista useita, muokkaus-valikko, lisää-valikko
from: f25f1829
---

{{ui:Edit}}-ryhmässä työkalurivillä on {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}} ja {{ui:Paste}}. Sen {{ui:More}}-valikossa on loput: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} ja {{ui:Select none}}, kukin pikanäppäimineen. Painike tai valikkokohta, jota ei voi juuri nyt käyttää, on harmaana; vie osoitin sen päälle ja lue syy (esimerkiksi ”ei vielä mitään kopioitu”).

Jokainen liittäminen, leikkaus, monistus ja poisto on yksi vaihe: yksi {{key:Mod+Z}} kumoaa kaiken.

## Valitse useita osia

- Valitse osa napsauttamalla. Pidä {{key:Shift}} (tai {{key:Ctrl}}, tai {{key:Mod}}) pohjassa ja napsauta lisää osia niiden lisäämiseksi; poista valinta napsauttamalla valittua samalla tavalla.
- {{key:Mod+A}} tai {{ui:Select all}} valitsee kaikki sauvat, liitokset ja perustukset.
- {{key:Esc}} tai {{ui:Select none}} tyhjentää valinnan.

Kun useita kohteita on valittu, {{ui:Properties}}-paneelin otsikko on ”4 valittu” (tai niin monta kuin on) ja se luettelee sauvat tyypeittäin, liitokset, perustukset ja teräksen bruttopainon. Siinä on painikkeet {{ui:Copy}}, {{ui:Duplicate}} ja {{ui:Delete}}.

## Kopioi

1. Valitse haluamasi sauvat ja perustukset.
2. Valitse {{ui:Copy}} tai paina {{key:Mod+C}}.

Mukaan tulee:

- Jokainen sauva kokonaisena: profiili, materiaali, päät, sijainti, kierto, nimi, reiät ja leikkaukset. Käytetty mukautettu profiili kopioidaan myös.
- Jokainen perustus kokonaisena: koko, betoni, pohjateräkset ja odotusteräkset.
- Päätylevyt ja pohjalevyt, mutta vain kun jokainen liitosta yhdistävä sauva kopioidaan: palkin päätylevy tarvitsee palkin ja sen pilarin. Tilarivi kertoo, montako liitosta jäi pois. Jos haluat jättää liitokset pois tarkoituksella, poista valinta kohdasta **Kopioi päätylevyt ja pohjalevyt sauvoineen** [DetailCraft-asetuksissa](topic:settings).

Liitosta ei voi kopioida yksinään; valitse sen sauvat. Jos haluat antaa muille liitoksille saman liitoksen, käytä {{ui:Similar}}-toimintoa (katso [Päätylevyt](topic:end-plates#copy-it-to-every-similar-joint)).

Kopio pysyy tässä selaimessa, kunnes kopioit jotain muuta. Toinen DetailCraft-välilehti tai -ikkuna samassa selaimessa voi liittää sen, joten voit kopioida kehikon yhdestä mallista ja liittää sen toiseen.

## Liitä ruudukon leikkauspisteeseen

1. Valitse {{ui:Paste}} tai paina {{key:Mod+V}}.
2. Vie osoitin näkymän päälle. Kopion katkoviivainen ääriviiva seuraa lähintä ruudukon leikkauspistettä osoittimen kohdalla.
3. Napsauta leikkauspistettä. Kopion peruspiste (sen alin kulma: kaikkien kopioitujen kohteiden pienin x, y ja z) asettuu sinne.

Liitetyt osat ovat liittämisen jälkeen valittuina, joten voit liittää ne uudelleen toiseen paikkaan tai muokata niitä. {{key:Esc}} peruuttaa liittämisen; kopio pysyy leikepöydällä. {{ui:Plan}} ja {{ui:Elevation}} helpottavat oikean leikkauspisteen osumista.

:::tip
Toistaaksesi kentän valitse kentän sauvat (tai kaikki painamalla {{key:Mod+A}}), kopioi, liitä ja napsauta leikkauspistettä yhden kentän päässä siitä, missä kopion alin kulma oli.
:::

## Liitä näppäimistöllä

Liittämisen aikana {{ui:Properties}}-paneeli näyttää, mitä leikepöydällä on, ja kaksi lomaketta:

- {{ui:Paste by offset (mm, from the original)}}: kirjoita x, y ja z ja valitse {{ui:Paste at this offset}}. Se alkaa [DetailCraft-asetuksista](topic:settings) tulevalla siirtymällä.
- {{ui:Paste onto a grid intersection}}: valitse kirjaimellinen ruudukko, numeroitu ruudukko ja taso ja valitse {{ui:Paste here}}. Peruspiste menee sinne.

## Liitä samaan paikkaan

{{ui:Paste in place}} ({{key:Mod+Shift+V}}) asettaa kopion täsmälleen niihin koordinaatteihin, joista se kopioitiin. Käytä sitä {{ui:Cut}}-toiminnon jälkeen tai tuodaksesi osia toisesta mallista samaan paikkaan. Jos alkuperäiset ovat yhä paikallaan, kopio on niiden päällä ja tilarivi varoittaa: siirrä kopiot niiden {{ui:Start}}- ja {{ui:End}}-arvoilla {{ui:Properties}}-paneelissa tai kumoa.

## Monista

{{ui:Duplicate}} ({{key:Mod+D}}) kopioi valinnan ja liittää sen heti, siirrettynä [DetailCraft-asetuksien](topic:settings) siirtymällä (aluksi 6000 mm x-suunnassa). Se ei muuta leikepöydän sisältöä. Kopiot ovat valittuina jälkeenpäin, joten {{key:Mod+D}} painettuna uudelleen tekee seuraavan kopion niistä.

## Leikkaa ja poista

- {{ui:Cut}} ({{key:Mod+X}}) kopioi valinnan ja poistaa sen. Liitä se sinne, minne se kuuluu.
- {{ui:Delete}} ({{key:Delete}} tai {{key:Backspace}}) poistaa valinnan. Sauvan poistaminen poistaa myös sen liitokset.

## Merkinnät liittämisen jälkeen

Osamerkkejä ja kokoonpanomerkkejä ei tallenneta; DetailCraft numeroi ne uudelleen mallista jokaisen muutoksen jälkeen ([Miten merkinnät annetaan](topic:mark-rules)). Siis:

- Kopio, joka on sama kappale kuin alkuperäinen (sama profiili, laatu, leikkauspituus, reiät ja leikkaukset), jakaa alkuperäisen merkinnän, ja {{ui:Part marks}}-luettelon ja materiaaliluettelon määrä kasvaa.
- Kopio, joka on lopulta erilainen, saa oman merkinnän. Esimerkiksi palkki, joka liitettiin ilman päätylevyjään, ei leikkaannu takaisin, joten se on eri kappale. Merkinnät numeroidaan uudelleen koko mallissa, joten muidenkin osien numerot voivat muuttua.

Jokainen liitetty sauva, reikä, leikkaus, liitos ja perustus saa uuden tunnuksen, joten mallissa mikään ei ole koskaan yhteinen kopion ja alkuperäisen välillä.

## Jos leikepöytä hylätään

Leikepöydän sisältö tarkistetaan yhtä huolellisesti kuin avattava mallitiedosto: kaikki, mikä ei ole kelvollinen DetailCraft-osa, pudotetaan, ja tilarivi kertoo mitä. Uudemman DetailCraftin tai muun ohjelman tallentama leikepöytä hylätään viestillä, eikä mitään liitetä. Jos yksityisikkuna ei voi säilyttää kopiota selaimen tallennustilassa, kopio toimii silti siinä välilehdessä.
