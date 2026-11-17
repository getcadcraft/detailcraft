---
title: Valitse ikkunalla, siirrä, kierrä, peilaa, muuta useita
summary: Vedä ikkuna valintaa varten, vedä valitut osat siirtääksesi ne, siirrä, kierrä tai peilaa valinta (tai sen kopio), tai muuta monen sauvan profiilia, materiaalia, sijaintia tai kiertoa kerralla.
keywords: lasso, aita, vapaa valinta, vetäminen, vedä ja pudota, siirrä vetämällä, tartunta, ikkuna, leikkaava, laatikkovalinta, vedä valinta, valitse useita, siirrä, kierrä, peilaa, kopioi, muuta useita, useita sauvoja, profiili, materiaali, sijainti, kierto, vaihtelee, akselilinja
from: 50b16f9a
---

Jokainen näistä on yksi kumoamisvaihe: yksi {{key:Mod+Z}} kumoaa kaiken.

## Valitse ikkunalla

- Näkymissä {{ui:Pohjakuva}} ja {{ui:Julkisivu}} vedä vasemmalla painikkeella tyhjästä kohdasta. Näkymässä {{ui:3D}} pidä {{key:Shift}} pohjassa ja vedä (tavallinen veto kääntää mallia).
- Vedä **oikealle** ikkunaa varten: se ottaa mukaan kaiken, mikä on kokonaan sisällä; piirretään yhtenäisenä reunana.
- Vedä **vasemmalle** leikkaavaa ikkunaa varten: se ottaa kaiken, mihin se koskettaa; piirretään katkoviivalla.
- Pidä {{key:Shift}} pohjassa, kun aloitat vedon, niin lisäät valintaan korvaamisen sijaan.
- Pohjakuva tai julkisivu tarjoaa vain sen, mitä se näyttää: osia, jotka on leikattu pois pohjakuvan yläpuolelta, tai yli 1 m:n päässä julkisivun akselilinjasta, ei valita.
- Vetämisen aikana {{key:Esc}} hylkää ikkunan.

### Lasso

Valitse **Lasso** kohdasta {{ui:Valinta vetämällä}} [DetailCraft-asetuksissa](topic:settings), niin sama veto piirtää vapaan viivan suorakulmion sijaan.

- Ensimmäinen sivuttaisliike ratkaisee valintatavan: **oikealle** kaikki, mikä on kokonaan sisällä (yhtenäinen viiva); **vasemmalle** kaikki, mihin se koskettaa (katkoviiva).
- Paina vetämisen aikana {{key:Space}}, niin vaihdat sisällä, koskettaen ja **aita**-tilan välillä: avoin viiva, joka ottaa kaiken, minkä yli se kulkee (pistekatkoviiva, oranssi).
- {{key:Shift}} lisää ja {{key:Esc}} hylkää sen, kuten ikkunassakin.

:::touch
Kosketusnäytössä yksi sormi panoroi pohjakuvaa ja julkisivua kuten ennen; valitse osat napauttamalla niitä.
:::

Näkymissä {{ui:Pohjakuva}} ja {{ui:Julkisivu}} panoroi oikealla tai keskipainikkeella, kun {{ui:Valitse}}-työkalu on päällä.

## Siirrä osia vetämällä

1. Valitse ensin osat (napsauta, {{key:Shift}}+napsautus tai ikkuna).
2. Paina yhtä valittua osaa ja vedä. Koko valinta liikkuu; katkoviiva näyttää, minne se menee.
3. Päästä irti sijoittaaksesi sen. {{key:Esc}} ennen irrotusta palauttaa kaiken.

- Näkymissä {{ui:3D}} ja {{ui:Pohjakuva}} osat liikkuvat tason poikki. Pidä {{key:Mod}} pohjassa, kun aloitat vedon näkymässä {{ui:3D}}, niin ne liikkuvat sen sijaan ylös ja alas.
- Näkymässä {{ui:Julkisivu}} ne liikkuvat julkisivun sisällä: akselilinjaa pitkin sekä ylös ja alas.
- Pitämäsi osa tarttuu akselien leikkauspisteeseen, kun sen pää tulee muutaman pikselin päähän siitä (leikkauspiste syttyy ja tilarivi nimeää sen). Muualla siirto etenee 10 mm:n askelin.
- Painaminen osaa, jota ei ole valittu, kääntää tai panoroi yhä näkymää, joten veto ei koskaan siirrä jotain vahingossa.
- Veto on yksi kumoamisvaihe, kuten {{ui:Siirrä}}. Liitokset seuraavat sauvojaan.

## Muuta ominaisuutta monessa sauvassa

Valitse kaksi tai useampi sauva. Kohdassa **Muuta kaikkia** {{ui:Ominaisuudet}}-paneelissa:

- {{ui:Profiili}}, {{ui:Sijainti}}: niiden palkeille, pilareille ja tukisauvoille.
- {{ui:Levyn paksuus (mm)}} ja {{ui:Levyn leveys (mm)}}: levyille.
- {{ui:Materiaali}} ja {{ui:Kierto (°)}}: kaikille.

Kenttä näyttää **Vaihtelee**, kun sauvat eivät ole samoja. Valitse tai kirjoita arvo, ja jokainen sauva, jolle se pätee, saa sen; tilarivi kertoo, montako muuttui ja montako säilytti oman arvonsa.

Lukukentät {{ui:Ominaisuudet}}-paneelissa hyväksyvät myös laskutoimituksen: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Laskutoimitusta, jota ei voi lukea, ei hyväksytä, ja tilarivi kertoo, missä kohdassa vika on.

## Siirrä, kierrä tai peilaa

Valitse sauvoja ja perustuksia (yksikin käy), ja käytä sitten **Siirrä, kierrä, peilaa** -toimintoa {{ui:Ominaisuudet}}-paneelissa. Liitoksia ei siirretä erikseen: ne seuraavat sauvojaan. Jos siirrät palkin mutta et sen pilaria, tilarivi kertoo, kuinka monta liitosta yhdistää nyt siirretyn sauvan siihen, joka pysyi paikallaan, ja [Ongelmat](topic:troubleshooting) kertoo, jos ne eivät enää sovi yhteen.

- **Siirrä:** kirjoita x, y ja z millimetreinä ja valitse {{ui:Siirrä}}. Tai valitse {{ui:Valitse kaksi pistettä}} (tai paina {{key:M}}): napsauta akselien leikkauspistettä, josta lähdetään, sitten sitä, mihin mennään. Katkoviiva seuraa osoitinta.
- **Kierrä pohjakuvassa:** kirjoita kulma (vastapäivään, ylhäältä katsottuna) ja valitse, mistä kohdasta kierretään: valinnan keskikohdasta tai akselien leikkauspisteestä. Pilarit kääntyvät kehikon mukana.
- **Peilaa:** valitse akselilinja. Peilikuva on sama profiili käännettynä toisin päin: I-profiilin laipat säilyvät, U-profiili osoittaa toiseen suuntaan (sen ylä- ja alapinta vaihtuvat), ja reiät sekä lovet menevät osan mukana.
- Valitse ruutu **Säilytä alkuperäinen (tee kopio)**, niin valinta jää paikalleen ja siirrät, kierrät tai peilaat kopion. Sen liitokset tulevat mukaan, kun {{ui:Kopioi päätylevyt ja pohjalevyt sauvojensa mukana}} on päällä [DetailCraft-asetuksissa](topic:settings).

Kierto tapahtuu pystysuoran akselin ympäri ja peilaus pystytasossa, joten tasot pysyvät vaakasuorina ja perustukset pystyssä.
