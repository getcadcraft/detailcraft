---
title: Jiiriliitokset
summary: Liitä kaksi I-profiilista sauvaa, jotka kohtaavat kulmassa: molemmat päät leikataan kulman puolittavalle tasolle, ja halutessasi mukaan päätylevyt, pultit ja jäykisteet.
keywords: jiiri, jiiriliitos, mitre, miter, polvi, kulmalaajennus, portaalikehä, harja, kulma, kulmaleikkaus, vinoleikkaus, päätylevy, pultattu päätylevy, jäykiste, liitä
from: cd8380d4
---

Jiiri liittää kaksi I-profiilista sauvaa, joiden päät kohtaavat kulmassa, kuten portaalikehän polven, harjan tai kaksi palkkia, jotka kääntyvät kulmaa pohjakuvassa. DetailCraft leikkaa molemmat päät kulman puolittavalle tasolle, joten kaksi leikkauspintaa sopivat yhteen. Halutessasi se lisää jokaiseen leikkauspäähän päätylevyn, pultittaa kaksi levyä yhteen ja asettaa kuhunkin sauvaan parin uumajäykisteitä.

## Missä se toimii

- Kaksi **I-profiilia** (IPE, HEA, HEB, W ja vastaavat), joiden **päät kohtaavat samassa solmussa**. Kumpi tahansa sauva voidaan piirtää kumpaan suuntaan tahansa.
- Sauvojen välisen kulman on oltava vähintään 15°. Suoraan jatkuvat sauvat hylätään: käytä [jatkosta](topic:splices).
- Pelkkä leikkaus (ilman levyjä) toimii, miten sauvat tahansa kohtaavat. **Päätylevyt** vaativat, että kaksi sauvaa kohtaa uumiensa tasossa, kuten portaalikehän polvessa tai harjassa. Kaksi pohjakuvassa kulmaa kääntävää palkkia kohtaa laippojensa tasossa, joten niille tulee vain pelkkä leikkaus.
- Eri kokoiset sauvat liitetään, mutta varoituksella: niiden leikkauspinnat eivät täsmää.

## Lisää jiiri

1. Valitse kaksi sauvaa: napsauta yhtä, sitten {{key:Shift}}+napsauta toista.
2. Valitse {{ui:Liitä}}-ryhmän {{ui:Lisää}}-valikosta {{ui:Jiiri}}. {{ui:Jiiri-ikkuna esikatselulla}} avautuu.
3. Aseta numeroidut kentät. Niiden vieressä oleva piirros muodostuu numeroistasi kirjoittaessasi, ja sen numeroidut ympyrät näyttävät, mitä kukin kenttä asettaa.
4. Valitse {{ui:Lisää jiiri}}. Jos valitsit enemmän kuin kaksi sauvaa, jokaiseen niiden väliseen vapaaseen liitokseen tulee sama jiiri.

Myöhemmin jiiriä muutetaan valitsemalla se (napsauta jotakin sen levyistä) ja valitsemalla oikealla paneelissa {{ui:Jiiri-ikkuna esikatselulla}}, tai muuttamalla sen asetuksia suoraan siellä. Pelkällä leikkauksella ei ole levyjä, joihin napsauttaa: valitse sen kaksi sauvaa ja valitse {{ui:Jiiri}} uudelleen, jolloin Jiiri-ikkuna avautuu kyseisen jiirin kohdalle. {{ui:Käytä samankaltaisiin (n)}} kopioi sen jokaiseen vapaaseen liitokseen samojen kahden profiilin sauvojen välillä samassa kulmassa.

## Numeroidut kentät (mm)

| Nro | Asetus | Oletus | Mitä tekee |
|---|---|---|---|
| 1 | Väli levyjen (tai leikkauspäiden) välillä | 0 | Vapaa väli liitoksessa. Kumpikin puoli pitää puolet siitä |
| 2 | Päätylevyt, levyn paksuus | päällä, 20 | Päätylevy hitsataan kokonaan ympäri kuhunkin leikkauspäähän. Poista rasti pelkkää leikkausta varten |
| 3 | Pulttirivit, rivivälys, pulttiväli, ulkorivi | 4, 0, 0, pois | Rivivälys 0 jakaa rivit tasaisesti laippojen väliin. Pulttiväli 0 = puolet levyn leveydestä, vähintään 2.4 × reikä. Ulkorivi menee levyn jatkeeseen ulkolaipan ulkopuolelle |
| 4 | Levy ulkolaipan ohi | 0 | Kuinka pitkälle levyt ulottuvat ulkolaipan ohi leikkauksen suuntaisesti |
| 5 | Levy sisälaipan ohi | 0 | Sama sisäpuolella |
| 6 | Uumajäykisteet, etäisyys leikkauksen ohi | pois, 50 | Pari kussakin sauvassa, uuman molemmin puolin, kohtisuoraan sauvaan nähden, tämän matkan päässä sen leikkauksen kaukaisesta päästä |
| 7 | Jäykisteen paksuus | 10 | |

Kohdassa {{ui:Pultit}}: pultin halkaisija, reikä, laatu ja pituusvara (20, 22, A325, 30), kuten päätylevyissä. Kohdassa {{ui:Levyt ja hitsit}}: levyn leveys (0 = laipan leveys), kulmahitsin koko (8) ja levyn materiaali (A36).

## Mitä saat

- **Leikkaukset.** Kunkin sauvan pää leikataan sen tasolle. Sen pituus luetteloissa, piirustuksissa ja NC-tiedostoissa on **kokonaispituus**, suorasta päästä leikkauksen kaukaisimpaan pisteeseen.
- **Levyt** kuuluvat omaan sauvaansa: kunkin sauvan kokoonpano on sauva, sen päätylevy ja jäykisteet. Pultit ovat liitoksen työmaapultteja: osaluettelo laskee ne kerran, ja kunkin sauvan kokoonpanopiirustus luettelee ne irrallisina pultteina.
- **Piirustuksissa** näkyvät vinot päät ja levyt; jiiritetyn sauvan työpiirustus merkitsee kunkin leikkauksen kulman suorasta.
- **NC-tiedostot** (DSTV) kantavat vinoleikkauskulmat otsikossaan, kuten standardi vaatii, ja leikkauksen mukaiset ääriviivat. Tarkista ne oman verstaasi NC-katselimessa ennen leikkausta, kuten kaikkien NC-tiedostojen kohdalla.
- **IFC** leikkaa kunkin sauvan ekstruusion sen leikkaustasolla, jotta muut ohjelmat näyttävät todellisen leikkauksen.
- **Merkit:** jiiritetty sauva on eri kappale kuin samanpituinen suoraan leikattu sauva. Kaksi samoin leikattua sauvaa saa saman merkin, kuten harjan kaksi parrua.

## Hyvä tietää

- Jiiri pysyy elävänä. Siirrä tai muuta kumman tahansa sauvan kokoa, ja leikkaus, levyt ja pultit seuraavat. Poista kumpi tahansa sauva, ja jiiri poistuu ja toisen sauvan pää on jälleen suora.
- Varoitukset käyttävät samoja EN 1993-1-8 -vähimmäisarvoja kuin muut liitokset (pää- ja reunaetäisyys 1.2 × reikä, väli 2.2 × reikä, pulttiväli 2.4 × reikä), sekä pulttirivit, jotka ovat liian lähellä laippaa, levyt, jotka ovat laippoja kapeampia, ja jäykisteet, joille ei ole tilaa.
- Arvot ovat lähtöarvoja, eivät mitoitusta. DetailCraft ei tarkista liitoksen lujuutta, eikä se tee kulmalaajennusta, päittäishitsillä hitsattua jiiriä eikä jäykisteitä, jotka ovat toisen sauvan laippojen kanssa samalla linjalla.
