---
title: Näppäin- ja hiirentoiminnot
summary: Jokainen pikanäppäin sekä hiiren, kosketuslevyn ja kosketusnäytön toiminto DetailCraftissa, koodista.
keywords: näppäimistö, pikanäppäimet, pikanäppäin, näppäimet, hiiri, kosketuslevy, kosketus, ctrl, command, pikaohje
from: 05a2dea0
---

Näppäinten kirjoitustapa tässä ohjeessa: [Näppäimet, hiiret ja kosketuslevyt](common:keys). Macissa {{key:Mod}} on Command-näppäin, muualla se on Ctrl.

## Työkalut

Nämä toimivat, kun kohdistin ei ole teksti- tai numerokentässä.

| Näppäin | Tekee |
|---|---|
| {{key:V}} | {{ui:Valitse}} |
| {{key:B}} | {{ui:Palkki}} |
| {{key:C}} | {{ui:Pilari}} |
| {{key:R}} | {{ui:Tukisauva}} |
| {{key:P}} | {{ui:Levy}} |
| {{key:F}} | {{ui:Anturaperustus}} |
| {{key:S}} | {{ui:Portaat}} |
| {{key:M}} | Siirrä valinta valitsemalla kaksi ruudukon leikkauspistettä ([Valitse ikkunalla, siirrä, kierrä, peilaa ja muuta useita](topic:select-and-change)) |
| {{key:Esc}} | Pudota vedettävä valinta-ikkuna tai palauta vedetyt osat; peruuta siirto, palkin, tukisauvan tai levyn ensimmäinen piste tai liittäminen; paina uudelleen palataksesi {{ui:Valitse}}-toimintoon; {{ui:Valitse}}-toiminnossa tyhjennä valinta. Kun {{ui:Lisää}}-valikko on auki, sulje se |
| {{key:Delete}} tai {{key:Backspace}} | Poista valinta (kaikki valitut yhdellä kumoa-vaiheella) |

## Tiedosto ja muokkaus

| Näppäin | Tekee |
|---|---|
| {{key:Mod+S}} | Tallenna malli (lataus). Toimii myös kenttään kirjoitettaessa |
| {{key:Mod+O}} | Avaa malli. Toimii myös kenttään kirjoitettaessa |
| {{key:Mod+Z}} | Kumoa (tekstikenttien ulkopuolella; tekstikentässä kumoaa kirjoituksesi) |
| {{key:Mod+Y}} tai {{key:Mod+Shift+Z}} | Tee uudelleen |

## Kopiointi ja liittäminen

Nämä toimivat, kun kohdistin ei ole teksti- tai numerokentässä (siellä ne kopioivat, liittävät ja valitsevat tekstisi tavalliseen tapaan). Jokainen liittäminen, leikkaus, monistus tai poisto on yksi kumoa-vaihe. Lisätietoja: [Kopioi, liitä ja monista](topic:copy-paste).

| Näppäin | Tekee |
|---|---|
| {{key:Mod+C}} | {{ui:Kopioi}} valitut sauvat ja anturaperustukset (niiden reikineen, loveuksineen ja liitoksineen) |
| {{key:Mod+X}} | {{ui:Leikkaa}}: kopioi valinta ja poista se sitten |
| {{key:Mod+V}} | {{ui:Liitä}}: kopio seuraa osoitinta; napsauta ruudukon leikkauspistettä sen kohdalle |
| {{key:Mod+Shift+V}} | {{ui:Liitä samaan paikkaan}}: kopioidusta kohdasta samoissa koordinaateissa |
| {{key:Mod+D}} | {{ui:Monista}}: heti kopio, siirrettynä [DetailCraftin asetuksissa](topic:settings) määritetyllä siirtymällä |
| {{key:Mod+A}} | {{ui:Valitse kaikki}}: kaikki sauvat, liitokset ja anturaperustukset |
| {{key:Esc}} | {{ui:Poista valinta}} |

Jos olet valinnut sivulta tekstiä (esimerkiksi raporttitaulukosta) etkä mitään mallista, {{key:Mod+C}} kopioi tekstin tavalliseen tapaan.

{{ui:Uusi}}-, {{ui:Esimerkki}}-toiminnot ja viennit eivät ole näppäimiin sidottuja; käytä työkaluriviä.

Mikään näistä näppäimistä ei toimi, kun valintaikkuna (työpiirustuksen esikatselu tai kysymys) on auki.

## Kentät ja paneelit

| Näppäin | Tekee |
|---|---|
| {{key:Enter}} tai {{key:Tab}} | Käytä kirjoitettua arvoa (jokainen muutos on yksi kumoa-vaihe) |
| {{key:Enter}} kentässä {{ui:Ruudukot}}, {{ui:Tasot}}, {{ui:Oma profiili}}, reikä- tai lovikentässä | Sama kuin kyseisen lomakkeen painikkeen valinta |
| {{key:Left}} {{key:Right}} | Siirry välilehtien {{ui:Ongelmat}}, {{ui:Osaluettelo}} ja {{ui:Taivutusluettelo}} välillä, kun välilehti on kohdistettuna |
| {{key:Esc}} | Sulje työpiirustuksen esikatselu tai kysymysvalintaikkuna (sama kuin {{ui:Peruuta}}) |

## Näyttö ja ohje

| Näppäin | Tekee |
|---|---|
| {{key:Ctrl+Shift+F}} | Vaihtaa tilasta toiseen: normaali, koko näyttö, koko näyttö piilotetuin palkein. Ctrl joka tietokoneella, myös Macissa |
| {{key:Mod+,}} | Avaa {{ui:Asetukset}} ([DetailCraftin asetukset](topic:settings)) |
| {{key:Esc}} | Poistu koko näytöstä |
| {{key:F1}} | Avaa tämä ohje |

## Hiiri

| Toiminto | 3D-näkymässä | Pohjakuvassa ja julkisivussa |
|---|---|---|
| Napsautus | Valitse osa, tai sijoita lähimpään leikkauspisteeseen, kun sijoitustyökalu on päällä (tai liitä sinne liittäessäsi) | Sama |
| {{key:Shift}}, {{key:Ctrl}} tai {{key:Mod}} ja napsautus | Lisää osa valintaan tai poista se | Sama |
| Paina valittua osaa ja vedä | Siirrä valinta tason yli; kun {{key:Mod}} on pohjassa, ylös ja alas | Siirrä valinta (julkisivussa sen suuntaisesti sekä ylös ja alas) |
| Vedä vasemmalla painikkeella | Kierrä mallia | {{ui:Valitse}}-työkalulla: valinta-ikkuna (oikealle: kokonaan sisällä; vasemmalle: koskettaen). Sijoitettaessa: panoroi |
| {{key:Shift}} ja vedä vasemmalla painikkeella | {{ui:Valitse}}-työkalulla: valinta-ikkuna, lisätään valintaan. Sijoitettaessa: panoroi | {{ui:Valitse}}-työkalulla: valinta-ikkuna, lisätään valintaan |
| {{key:Ctrl}} tai {{key:Mod}} ja vedä vasemmalla painikkeella | Panoroi | Ei mitään |
| Vedä oikealla painikkeella | Panoroi | Panoroi |
| Rulla | Zoomaa kohti näkymän keskikohtaa | Zoomaa |
| Vedä keskipainikkeella | Zoomaa | {{ui:Valitse}}-työkalulla: panoroi. Muulloin zoomaa |
| Pudota `.detailcraft.json`-tiedosto sovellukseen | Avaa se | Avaa se |

Napsautus lasketaan vain, jos osoitin liikkuu painalluksen ja vapautuksen välillä alle noin 5 pikseliä; pidempi liike on vetäminen.

## Kosketuslevy

| Toiminto | Tekee |
|---|---|
| Kaksi sormea ylös tai alas pyyhkäisemällä, tai nipistys | Zoomaa |
| Paina ja vedä | Kierrä (3D) tai panoroi (pohjakuva ja julkisivu) |
| {{key:Shift}} ja paina ja vedä | Panoroi 3D-näkymässä |
| Kahden sormen napsautus | Hiiren oikea painike (näkymässä ei ole valikkoa) |

## Kosketus

Tabletilla tai kosketusnäytöllä:

| Toiminto | Tekee |
|---|---|
| Napauttaminen | Valitse osa, tai sijoita lähimpään ruudukon leikkauspisteeseen, kun sijoitustyökalu on päällä (napautus noin sormen leveyden säteellä siitä lasketaan) |
| Pitkä painallus osaan | Lisää se valintaan tai poista se (sama, mitä {{key:Shift}}+napsautus tekee hiirellä) |
| Yksi sormi valitulla osalla ja vedä | Siirrä valinta, kiinnittyen ruudukon leikkauspisteisiin |
| Yksi sormi muualla | Kierrä mallia (3D) tai panoroi (pohjakuva ja julkisivu) |
| Kaksi sormea | Nipistä zoomataksesi, liikuta yhdessä panoroidaksesi |

Painikkeet, luettelot ja kentät ovat suurempia, kun näyttö on pelkkä kosketusnäyttö. Valinta-ikkunat tarvitsevat hiiren; sormilla napauta ja pidä painettuna.

## Selaimen pidättämät näppäimet

Osa pikanäppäimistä kuuluu selaimelle, eikä mikään sivu voi käyttää niitä, esimerkiksi {{key:Mod+W}} (sulje välilehti), {{key:Mod+T}} (uusi välilehti) ja {{key:Mod+N}} (uusi ikkuna). Jos {{key:Mod+Y}} avaa selaimen historian eikä tee uudelleen, käytä {{key:Mod+Shift+Z}}.

Pikanäppäimet tavoittavat DetailCraftin vain, kun sivulla on näppäimistön hallinta. Jos näppäin ei tee mitään tai selain toimii sen sijaan, napsauta ensin DetailCraft-ikkunan tyhjää kohtaa (esimerkiksi kun olet kirjoittanut osoiteriville).

## Missä siirto on

Erillistä siirtokomentoa ei ole: valitse osa ja vedä se tason yli (pidä {{key:Mod}} pohjassa vetääksesi ylös ja alas), tai muokkaa sen {{ui:Alku}}- ja {{ui:Loppu}}-arvoja kohdassa {{ui:Ominaisuudet}}.
