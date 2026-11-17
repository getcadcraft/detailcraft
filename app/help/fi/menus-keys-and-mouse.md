---
title: Valikot, näppäimet ja hiiri
summary: Valitse valikkotyyli, joka vastaa jo käyttämääsi tapaa, anna mille tahansa komennolle oma näppäin, siirrä komentoja valintanauhan välilehtien välillä ja määritä, mitä rulla ja hiiren painikkeet tekevät.
keywords: valikkotyyli, valikot, valintanauha, työkalurivi, komentorivi, pikanäppäimet, näppäimet, mukauta, uudelleenmääritä, hiiri, rulla, zoomauksen suunta, keskipainike, oikea painike, panoroi, kiertää, vienti, tuonti, vaihtaminen, tuttu, piirustusklassikko, terästyönauha
from: 4132c6e5
---

DetailCraftin komennot ovat samat, miten niihin päästäänkin. **Valikkotyyli** määrää vain, missä ne sijaitsevat näytöllä, mikä niiden nimi siinä on ja millä näppäimillä ne suoritetaan. Valitse tyyli kohdasta {{ui:Asetukset}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Valikot, näppäimet ja hiiri}}; muutos tulee heti voimaan, ja tämä selain muistaa sen.

## Kolme tyyliä

| Tyyli | Mitä saat |
|---|---|
| {{ui:DetailCraft}} | DetailCraftin oma työkalurivi (Tiedosto, Sijoita, Liitä, Muokkaus, Tuloste) ja sen yhden kirjaimen näppäimet: {{key:V}} valitse, {{key:B}} palkki, {{key:C}} pilari, {{key:R}} tukisauva, {{key:P}} levy, {{key:F}} anturaperustus, {{key:S}} portaat. Oletus. |
| {{ui:Piirustusklassikko}} | Komentoja kirjoittaville: pieni valintanauha ({{ui:Koti}}, {{ui:Näkymä}}, {{ui:Tuloste}}) ja komentorivi. Kirjoita BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (kumoa), ZOOM, PLAN, 3D, DRAWINGS, NC tai HELP ja paina {{key:Enter}}; {{key:Enter}} ilman mitään toistaa viimeisen komennon, {{key:Esc}} tyhjentää sen. Kun alat kirjoittaa mihin tahansa, kirjaimet menevät komentoriville. Keskipainike panoroi; 3D-näkymässä {{key:Shift}} ja keskipainike kiertävät. |
| {{ui:Terästyönauha}} | Välilehdet siinä järjestyksessä kuin teräsdetaljointiohjelmat ne järjestävät: {{ui:Mallinnus}} (sauvat, betoni, portaat), {{ui:Detaljointi}} (liitokset), {{ui:Muokkaus}}, {{ui:Piirustukset}} (piirustukset ja raportit), {{ui:Valmistus}} (NC-tiedostot, IFC) ja {{ui:Näkymä}}, lisäksi {{ui:Tiedosto}}-valikko ja pikapainikkeet oikealla. Yhden kirjaimen näppäimet säilyvät. Keskipainike panoroi; 3D-näkymässä vasen painike kiertää. |

Jokainen tyyli säilyttää {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} ja {{key:Mod+A}}. Valintanauhoissa ovat myös näkymäpalkin {{ui:3D}}, {{ui:Pohjakuva}}, {{ui:Julkisivu}} ja {{ui:Sovita}}.

:::tip
Näppäin, joka kuuluu DetailCraftin omaan asetteluun mutta jonka tyylisi on antanut toiselle komennolle, ei tee mitään, ja tilarivi kertoo, minne sen komento siirtyi (”Omassa Terästyönauhassa Pilari on Ctrl+Alt+C”). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} ja nuolinäppäimet säilyttävät aina merkityksensä. Kun sauva on puolisijoitettu tai kopio seuraa osoitinta, kirjaimet kuuluvat DetailCraftille.
:::

## Tee siitä omasi

1. Valitse lähimpänä haluamaasi tyyliä ja napsauta {{ui:Mukauta…}}.
2. Kohdassa {{ui:Näppäimet ja valikot}} etsi komento (hakukentästä on apua). Napsauta {{ui:Lisää näppäin}} ja paina näppäintä, tai kahta peräkkäistä näppäintä kaksikirjaimista näppäintä varten. Napsauta näppäintä poistaaksesi sen.
3. Valintanauhan kanssa {{ui:Sijainti}} siirtää komennon toiseen välilehteen ja paneeliin, {{ui:Tiedosto}}-valikkoon tai kohtaan {{ui:Vain näppäimet}}.
4. Kohdassa {{ui:Hiiri}} määritä rulla, painikkeet, jotka panoroivat pohjakuvaa ja julkisivuja, sekä mitä kukin painike tekee 3D-näkymässä.
5. Anna sille nimi ja napsauta {{ui:Tallenna}}.

Sisäänrakennetun tyylin tallentaminen tekee siitä oman kopiosi (”Oma terästyönauha”); sisäänrakennettu tyyli ei koskaan muutu. Näppäin, joka on annettu kahdelle komennolle, näkyy punaisena, ja se on korjattava ennen tallentamista.

## Hiiri

- **Hiiren rulla**: {{ui:Vieritys ylös lähentää}} (oletus) tai {{ui:Vieritys ylös loitontaa}}, ja kuinka nopeasti. Kosketuslevyn nipistys zoomaa aina sormien liikkeen suuntaan.
- **Panoroi pohjakuvaa ja julkisivuja**: keskipainikkeella, oikealla painikkeella tai molemmilla. Valitse-työkalulla vasen painike piirtää aina valinta-ikkunan.
- **Vetäminen 3D-näkymässä**: {{ui:Kunkin näkymän oma}} säilyttää DetailCraftin painikkeet (vasen kiertää, keskimmäinen zoomaa, oikea panoroi). Tai aseta kukin painike kiertämään, panoroimaan, zoomaamaan tai ei mitään; {{key:Shift}} painikkeen kanssa, joka kiertää tai panoroi, vaihtaa nämä kaksi keskenään.

## Vie se mukanasi

{{ui:Vie}} tallentaa käytössä olevan tyylin pieneksi `.ccinput.json`-tiedostoksi; {{ui:Tuo…}} lisää sellaisen toiselta tietokoneelta tai kollegalta. Tuotu tiedosto voi viitata vain DetailCraftin omiin komentoihin: muu siinä oleva jätetään pois, ja siitä ilmoitetaan tilarivillä. {{ui:Poista tämä tyyli}} poistaa yhden omistasi.

:::note
Nämä asetukset pysyvät tässä selaimessa. {{ui:Käytä tätä tyyliä jokaisessa sovelluksessa}} tyylikorttien alla saa jokaisen sovelluksen avautumaan vastaavassa tyylissä (oma työkalurivi, valintanauha tai {{ui:Piirustusklassikko}}), ja mukana ovat kussakin sovelluksessa tekemäsi muutokset. DetailCraftissa ei ole valikkopalkkityyliä: kun jonkin muun sovelluksen valikkopalkki valitaan kaikille sovelluksille, DetailCraft säilyttää oman työkalurivinsä.
:::

Aiheeseen liittyvää: [Näppäimistö ja hiiri](topic:keyboard) · [DetailCraftin asetukset](topic:settings) · [Siirtyminen muusta detaljointiohjelmasta](topic:coming-from)
