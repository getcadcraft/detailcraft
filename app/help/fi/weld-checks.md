---
title: Tarkista hitsit sauvojen liitoskohdissa
summary: Tarkista mitoituksen jälkeen pienahitsit ja tuntoliitoshitsit joka puolelta jokaista sauvaa siellä, missä se liittyy toiseen sauvaan tai tukeen, AISC 360-16 luvun J tai EN 1993-1-8 mukaan, ja katso, mikä hitsiryhmä on eniten käytetty ja millä yhdistelmällä. Apuväline, kunnes insinööri on tarkistanut sen.
keywords: hitsi, hitsit, hitsitarkistus, pienahitsi, tuntoliitoshitsi, täysi läpihitsaus, AISC 360, EN 1993-1-8, hitsiryhmä, käyttöaste, utilisation, kapasiteetti, liitos, rakenteellinen, insinööri
from: e8eebbe6
---

{{ui:Hitsitarkistukset}}-lohko välilehdellä {{ui:Analyysi}} kohdassa {{ui:Mitoitustarkastukset}} ottaa viimeksi ratkaistun rungon voimat ja tekemäsi lujuusyhdistelmät ja tarkistaa sauvan hitsin joka puolelta jokaisessa liitoksessa: siellä, missä sauva liittyy toiseen sauvaan tai seisoo tuen päällä.

:::warning
Se on **apuväline, kunnes insinööri on tarkistanut sen**. Se tarkistaa poikkileikkauksen ympäri piirretyn hitsin yhtenä ryhmänä, rungon omien päävoimien mukaan. Se ei lue valmistuspiirustuksissa piirtämiesi hitsien kokoa tai pituutta, eikä se tarkista pultteja, levyjä, tukipainetta, lohkon leikkausta tai vipuvoimaa. Sen tulokset eivät ole leima.
:::

## Suorita tarkistus

1. Ratkaise runko välilehdellä {{ui:Analyysi}} ja valitse {{ui:Mitoitusstandardi}} kohdassa {{ui:Mitoitustarkastukset}}. Paina sitten {{ui:Tee yhdistelmät}} (hitsitarkistus tarvitsee samat lujuusyhdistelmät).
2. Kohdassa {{ui:Hitsitarkistukset}} aseta {{ui:Pienahitsin kateetti (mm, 0 = seinä, enintään 8)}}. 0 tarkoittaa, että kateetti seuraa poikkileikkauksen ohuempaa seinää, enintään 8 mm. AISC-standardin alla {{ui:Hitsiaineen lujuus F_EXX (MPa)}} on hitsiaineen lujuus (482.6 MPa on E70-elektrodi). EN 1993:n alla teräslaatu antaa hitsiaineen lujuuden ja korrelaatiokertoimen.
3. Paina {{ui:Tarkista hitsit}}.

Taulukon jokainen rivi on yksi hitsiryhmä (sauvan yksi liitospää). Luvut ovat ohjaavan tarkistuksensa **käyttöaste**, tila (hyväksytty tai hylätty) sekä se tarkistus ja lauseke, joka ohjasi, ja mikä yhdistelmä. Ryhmä, jota tarkistus ei pysty arvioimaan, kertoo syyn (ei teräslaatua, ei korrelaatiokerrointa laadulle EN 1993-1-8 taulukossa 4.1, ei hitsiä kyseisessä poikkileikkauksessa) numeron sijaan.

Kun muutat kateettia tai hitsiainetta tai muokkaat mallia, taulukko tyhjenee, koska se koski vanhoja arvoja. Paina {{ui:Tarkista hitsit}} uudelleen.

## Mitä tarkistetaan

- **ASCE 7 + AISC 360:** pienahitsin metalli (kuorman kulma hitsiin lasketaan, J2.4), perusaineen leikkausmurtuma (J4.2) ja täysin läpihitsatut tuntoliitokset (taulukko J2.5).
- **EN 1990 + EN 1993:** pienahitsit EN 1993-1-8 kohdan 4.5.3.3 yksinkertaistetulla menetelmällä ja tuntoliitokset kohdasta 4.7.1.
- Detaljointivaroitukset pienimpää ja suurinta kateettia sekä pienintä pituutta vastaan, vertailuarvo mukana.

Hitsiryhmä käsitellään viivamaisena poikkileikkauksena, ja se kuormitetaan elastisella vektorimenetelmällä: jokainen hitsin kohta ottaa sauvan normaalivoiman, molemmat leikkausvoimat, vääntömomentin ja molemmat taivutusmomentit, lisättynä vektoreina.

## Mitä ei tarkisteta

Osaläpihitsit, vinot pienahitsit, tappi- ja urahitsit, katkonaiset hitsit, hetkellisen keskipisteen menetelmä, EN:n suuntamenetelmä, väsyminen ja perusaineen lohkon leikkaus eivät ole vielä toteutettuja. Joitakin standardien vakioita on kirjoitettu standardeista, eikä niitä ole vielä verrattu painettuun kappaleeseen; raportti kertoo, mistä kukin luku on peräisin ({{ui:Raportti (PDF)}} saa hitsitaulukot, kun olet tehnyt tarkistuksen). Katso [Tarkista terässauvat](topic:design-checks) ja [Ei vielä toteutettu](topic:not-built-yet).
