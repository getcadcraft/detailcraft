---
title: Analysoi runko
summary: Sauvojen, palkkien, pilarien ja tukisauvojen voimat, reaktiot ja taipumat piirrettyinä, asettamillasi kuormitustapauksilla ja yhdistelmillä. Analyysiapu, ei normitarkistus; mitoitustarkistukset ovat erillinen vaihe.
keywords: analyysi, rakenneanalyysi, runkoanalyysi, jäykkyysmenetelmä, kuormat, kuormitustapaus, yhdistelmä, pysyvä kuorma, hyötykuorma, omapaino, reaktiot, taivutusmomentti, leikkausvoima, normaalivoima, taipuma, taipumamuoto, tuet, nivelellinen, jäykkä, vapautus, raportti, pdf, csv, CraftScript, frame3d
from: ba0081bc
---

{{ui:Analyysi}}-välilehti alareunassa löytää mallin jokaisen palkin, pilarin ja tukisauvan voimat, pilarien jalkojen reaktiot ja sauvojen taipumat antamillesi kuormille.

:::warning
Se on **analyysiapu, ei normitarkistus**. Analyysi ei sovella mitään suunnitteluohjetta: se ei mitoita sauvoja, tarkista kantokykyjä tai liitoksia eikä valitse kuormakertoimia. Insinööri tarkistaa mallin, sen kuormat ja tuet sekä päättää, mitä luvut merkitsevät. Sauvojen tarkistuksia ASCE 7 / AISC 360 tai EN 1990 / EN 1993-1-1 mukaan katso [Tarkista terässauvat suunnitteluohjeen mukaan](topic:design-checks), erillinen vaihe, joka on myös apu.
:::

## Aja analyysi

1. Avaa {{ui:Analyysi}}-välilehti.
2. Valitse yksi tai useampi sauva näkymästä, valitse {{ui:Case}}, {{ui:Load}} ja {{ui:Direction}}, kirjoita arvo ja paina {{ui:Add load}}. Sauvalle jakautunut kuorma annetaan kN/m-yksikössä, pistekuorma kN-yksikössä. {{ui:Down (gravity)}} on tavallisin.
3. Paina {{ui:Run analysis}}.

Taulukko luettelee kunkin sauvan suurimman normaalivoiman N, leikkausvoimat Vz ja Vy, taivutusmomentit My ja Mz, vääntömomentin T ja sen taipuman; suurin momentti ensin. Valitse sauvan nimi valitaksesi sen. Alla ovat reaktiot kussakin tuessa. {{ui:On the model}} piirtää taipumamuodon tai yhden suureen kaavion kunkin sauvan viereen, ja sen suurin arvo kirjoitetaan sen kohdalle. Tulokset vanhentuvat heti, kun malli muuttuu: aja analyysi uudelleen.

Jokainen kuorma, tapaus ja asetus on yksi kumoamisaskel ({{key:Mod+Z}}) ja se tallennetaan mallitiedostoon.

## Kuormitustapaukset ja yhdistelmät

Analyysi alkaa kolmella: **Pysyvä** (sauvojen oma paino piirretyistä poikkileikkauksista ja 7850 kg/m³), **Hyöty** (tyhjä) ja **Pysyvä + hyöty**. Lisää omia tapauksia (tuuli, lumi …) ja yhdistelmiä: yhdistelmä laskee tapaukset yhteen kirjoittamillasi kertoimilla. Analyysi on lineaarinen, joten kukin tapaus ratkaistaan kerran ja yhdistelmät ovat summia. Kirjoita kertoimet itse tai valitse suunnitteluohje ja anna {{ui:Make combinations}} kirjoittaa ohjeen yhdistelmät ([Tarkista terässauvat suunnitteluohjeen mukaan](topic:design-checks)).

## Mistä runko koostuu

- Palkit, pilarit ja tukisauvat, kukin omalla työlinjallaan (piirtämäsi viiva), ja poikkileikkauksen todelliset ominaisuudet lasketaan sen ulkoviivasta. Levyt, portaat, anturat ja pultit eivät kuulu runkoon.
- Sauva jaetaan kohdasta, johon toisen sauvan pää osuu, joten keskikorkeudella pilariin liittyvä palkki liittyy pilariin siinä kohdassa.
- **Pilarien jalat**: jäykkä (alku) tai nivelellinen (paikallaan ja estetty kiertymästä, vapaa kääntymään). Jalkalevy muodostaa aina tuen.
- **Palkin päät**: päälevy on jäykkä, leikkauskorva on nivelellinen. {{ui:Beam ends with no connection}} asettaa loput. **Tukisauvat** ovat nivelellisiä molemmista päistä.
- Valitse yksi sauva antaaksesi sen päille tai pilarin jalalle oman säännön.
- Teräs kaikkialla: E = 200 GPa, G = 77 GPa.

Jos runko voi liikkua taivuttamatta mitään — mekanismi, esimerkiksi nivelelliset jalat ilman jäykistystä yhteen suuntaan — ajo pysähtyy ja kertoo, missä ja mihin suuntaan; pidä se paikallaan tuella, jäykällä liitoksella tai tukisauvalla.

## Etumerkit

N > 0 on veto. My > 0 asettaa sauvan paikallisen −z-puolen vetoon: painovoiman alla notkahtava palkki on My > 0. Mz > 0 asettaa paikallisen −y-puolen vetoon. Taipuma mitataan sauvan päiden välisestä suorasta. Sauvan paikallinen z osoittaa ylös (pilarille: X-suuntaan); sen paikalliset akselit kääntyvät sauvan kiertymän mukana.

## Raportti

{{ui:Report (PDF)}} ja {{ui:Report (CSV)}} sisältävät kaiken: rungon perustana olevat oletukset, poikkileikkaukset, tapaukset ja yhdistelmät, sitten kunkin tapauksen ja yhdistelmän reaktiot (kuormien ja reaktioiden summat, jotka tasapainottavat), sauvavoimat ja siirtymät sekä kaikkien tapausten verhokäyrän. {{ui:Export as CraftScript}} kirjoittaa saman rungon komentosarjaksi PartCraft Script-työtilaan, jossa kirjastofunktio `frame3d` ratkaisee sen vaihe vaiheelta luettavassa koodissa.

## Menetelmä

Suora jäykkyysmenetelmä, lineaarinen ja ensimmäisen kertaluvun, ellet valitse *Toisen kertaluvun (P-Delta)*: kaksisolmuiset palkki-pilarit, joilla on normaali-, vääntö- ja kaksi taivutusjäykkyyttä (ei leikkausmuodonmuutosta, ei kaareutumista), päävapautukset staattisella kondensoinnilla, kuormat sauvoja pitkin sauvojen omien muotofunktioiden kautta. Sen vastaukset on tarkistettu klassisia oppikirjatapauksia vasten (konsolit, yksinkertaiset, jäykät ja jatkuvat palkit, portaalirunko, vääntöön kuormitettu ruudukko, ristikko).

**Toisen kertaluvun (P-Delta).** Valitse *Toisen kertaluvun (P-Delta)* Aja-painikkeen vierestä: jokainen yhdistelmä ratkaistaan uudelleen siten, että sauvojen normaalivoimat vaikuttavat taipuneeseen runkoon (jokainen sauva jaetaan 4 osaan, jotta sauvan taipuminen päiden välillä otetaan huomioon), kunnes normaalivoimat tasaantuvat. Tulosrivi antaa kierrosten määrän ja sen, kuinka paljon heilahdus kasvoi; momentit, taipumat, mitoitustarkistukset ja raportti käyttävät sitten näitä tuloksia. Rungon kimmoisen kriittisen kuorman yläpuolella ajo pysähtyy ja ilmoittaa siitä. Se on kimmoinen pienillä kiertymillä, vain taivutus, ilman jäykkyyden pienennystä tai nimelliskuormia (ei sellaisenaan AISC:n suora analyysimenetelmä); laatat, seinät ja jäykät välipohjat pysyvät ensimmäisen kertaluvun mukaisina.

**Luonnontaajuudet (elementtimenetelmä).** Tulosten alla oleva {{ui:Elementtimenetelmä: luonnontaajuudet}}-lohko etsii saman mallin alimmat muodot elementtimenetelmän laskentamoottorilla: palkit vapautuksineen, laatat ja seinät tasaisina nelisolmuisina kuorina, jäykät välipohjat ja tuet. Valitse muotojen määrä (3, 6, 10 tai 20) ja laattaelementti (nelisolmuinen kuori paksuille tai ohuille laatoille, tai ohut laattaelementti) ja paina {{ui:Find the frequencies}}-painiketta. Taulukko antaa kunkin muodon taajuuden hertseinä, jaksonajan sekunneissa ja tehollisen modaalimassan X-, Y- ja Z-suunnassa osuutena liikkuvasta massasta; {{ui:Show on the model}} piirtää minkä tahansa muodon samalla tavalla kuin taipumamuodon. Massa on materiaalin tiheys kerrottuna tilavuudella: kuormat eivät lisää massaa, eikä materiaali ilman tiheyttä ole massaa. Raportti (PDF, CSV) sisältää taulukon. Se on kimmoinen ja koskee vain pieniä liikkeitä, eikä seismistä tai tuulikuormaa tehdä täällä minkään ohjeen mukaan. Ei normitarkistus; insinöörisi tarkistaa tulokset.

**Vastespektri, aikahistoria ja työntökoe.** Kolme muuta lohkoa on taajuuksien alla, ja ne käyttävät samaa elementtimallia. Massa on kaikille niille materiaalin tiheys ja valitsemiesi tapausten alaspäin suuntautuvat kuormat, kukin kerrottuna kirjoittamallasi kertoimella (esimerkiksi Pysyvä kertoimella 1 ja Hyöty sillä osuudella, jonka laskit massaksi).

{{ui:Response spectrum}} lukee jokaisen muodon antamastasi spektristä (taulukko jaksonajasta ja kiihtyvyydestä tai ASCE 7 -muoto arvoista SDS, SD1 ja TL; painike {{ui:Käytä seismisen lohkon arvoja}} kopioi ne seismiseltä lohkolta) ja yhdistää muodot CQC-, SRSS-, kymmenen prosentin säännöllä tai itseisarvojen summalla, minkä jälkeen X-, Y- ja Z-suunnat yhdistetään (100 % + 30 % tai SRSS). Se antaa pohjaleikkausvoiman, kerrosten siirtymät, sauvojen päävoimat ja muototaulukon, joka varoittaa, jos käytetyt muodot kantavat alle 90 % massasta. Tuloksia voi skaalata kertoimella tai kirjoitettuun pohjaleikkausvoimaan; lohko ei laske sitä pohjaleikkausvoimaa itse. Tuloksilla ei ole etumerkkiä.

{{ui:Time history}} ajaa maan kiihtyvyyden modaalisella superpositiolla (tarkka tallenteen suorille viivoille pisteiden välillä) tai suoralla integroinnilla (Newmarkin keskimääräinen kiihtyvyys ja Rayleigh-vaimennus). Syöte on keinotekoinen siniaalto tai pulssi (aina merkitty synteettiseksi), liittämäsi tallenne tai avaamasi tekstitiedosto (aika ja kiihtyvyys, yksi kiihtyvyys per rivi askeleella, tai PEER-tyylinen tiedosto DT=-otsikolla; g:nä tai m/s²). Se antaa katon siirtymän ja pohjaleikkausvoiman ajan funktiona, kunkin tason siirtymän sekä sauvojen päävoimien verhokäyrän. Hyvin pitkän tallenteen mallit säilyttävät sen vain istunnon ajan.

{{ui:Pushover}} työntää kattoa sivusuunnassa pienin askelin (muoto kuten ensimmäinen muoto tai tasainen), ja plastiset nivelet ovat I-muotoisten sauvojen päissä. Nivel myötää plastisella momentilla, joka pienenee normaalivoiman kasvaessa (lasketaan piirretystä muodosta, pyöristyksiä ei huomioida); kovettuminen on valinnainen, P-delta on valinnainen, ja painovoimayhdistelmä voidaan soveltaa ensin. Se antaa kapasiteettikäyrän (pohjaleikkausvoima kattosiirtymää vastaan), ensimmäisen nivelen sekä kunkin nivelen tilan ja plastisen kiertymän. {{ui:Run the nonlinear time history}} ajaa samat nivelet aikahistorialohkon tallenteella pienissä malleissa. Nivelet muodostuvat vain sauvojen päihin (aseta solmu sinne, missä niveleen pitäisi muodostua jänteen sisällä); sauva, joka on vapautettu molemmista päistä, ei saa niveliä; tukisauvojen myötäämistä ja nurjahtamista ei mallinneta; laatat ja seinät pysyvät kimmoisina; nivelille ei anneta hyväksymiskriteerejä. Ei normitarkistus; insinöörisi tarkistaa tulokset. Asetukset tallennetaan mallin mukana, ja raportti sisältää taulukot.

Ei vielä toteutettu: nurjahdusanalyysi, massakorjaus vastespektrille, tallenteiden skaalaus, hyväksymiskriteerit niveliin (dynaaminen vaste on mukana, yllä), pinta- ja tuulikuormat tehtynä puolestasi (maanjäristysvoimat kerroksissa ovat kohdassa [Tarkista betonisauvat ja tee seisminen kuormat](topic:concrete-and-seismic)), sauvojen poikkeamat (offset), vain vetävät tukisauvat. Katso [Ei vielä toteutettu](topic:not-built-yet).
