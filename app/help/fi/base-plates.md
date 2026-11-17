---
title: Lisää pohjalevyt ja ankkuripultit
summary: Aseta hitsattu pohjalevy neljällä ankkuripultilla pilarin alle, määritä sen mitat ja kopioi se kaikkiin samanlaisiin pilareihin.
keywords: pohjalevy, pohjalevyt, ankkuripultti, ankkuripultit, kiinnityspultit, pilarin jalka, perustuspultit, samanlaiset
from: 619ebc64
---

Pohjalevyliitos asettaa levyn pilarin alle, lyhentää pilaria levyn paksuuden verran, hitsaa ne yhteen ja lisää levyn reikien läpi neljä ankkuripulttia.

:::warning
Mitat ovat lähtöarvoja, eivät mitoitusta. DetailCraft ei tarkista kantavuutta, ankkuripultin lujuutta eikä upotussyvyyttä.
:::

## Lisää pohjalevy

1. Napsauta pilaria työkalulla {{ui:Valitse}} ({{key:V}}). Pilarin on oltava pystysuora.
2. Valitse {{ui:Pohjalevy}} ryhmästä {{ui:Liitä}} tai {{ui:Lisää pohjalevy}} paneelista {{ui:Ominaisuudet}}.
3. Tilarivillä lukee ”Pohjalevy lisätty neljällä ankkuripultilla.” Uusi liitos on valittuna.

Pilarilla voi olla yksi pohjalevy. Jos sillä on jo sellainen, tilarivillä lukee ”Tällä pilarilla on jo pohjalevy.”

## Muuta asetuksia

Valitse pohjalevy (napsauta levyä tai ankkuripulttia). Kohdassa {{ui:Levy, pultit ja hitsi (mm)}}:

| Asetus | Oletus | Mitä se tekee |
|---|---|---|
| Levyn paksuus | 25 | Pilaria lyhennetään tämän verran |
| Levyn pituus | 450 | Pilarin syvyyssuunnassa |
| Levyn leveys | 400 | Pilarin poikki |
| Ankkuripultin halkaisija | 20 | Ankkuripultin koko |
| Reiän halkaisija | 33 | Reikä levyssä |
| Pultin laatu | F1554 Gr 36 | Ankkuripultin laatu tekstinä |
| Ankkuripulttien väli (syvyyssuunnassa) | 350 | Pulttien keskipisteiden väli levyn pituussuunnassa |
| Ankkuripulttien väli (poikittain) | 300 | Pulttien keskipisteiden väli poikittain |
| Ankkuripultin ulkonema levyn yläpuolella | 100 | Levyn yläpinnasta pultin yläpäähän |
| Ankkuripultin upotus levyn alapuolella | 450 | Levyn alapinnasta betoniin |
| Kulmahitsin koko | 8 | Koko pilarin jalan ympäri |
| Levyn materiaali | A36 | Teksti |
| Laastiväli | 0 | Väli betonin yläpinnan ja levyn alapinnan välillä |
| Jäykisteet | Ei | Valitse Ei, 2 (uuman suuntaan) tai 4 (myös uumaa vastaan kohtisuoraan); katso alla |
| Jäykisteen paksuus, korkeus | 12, 150 | |
| Leikkausnokan syvyys | 0 | Kuinka pitkälle nokka ulottuu levyn alapuolelle; 0 = ei nokkaa |
| Leikkausnokan paksuus, leveys | 25, 150 | |
| Levyaluslevyt | Ei | Jokaisessa pultissa tai ei yhdessäkään |
| Aluslevyn koko, paksuus | 0, 0 | 0 = AISC Design Guide 1:n pienin arvo pultille |

Pultin pituus = upotus + laastiväli + levyn paksuus + ulkonema. Oletusarvoilla se on 575 mm.

## Pohjan yksityiskohdat: laasti, jäykisteet, leikkausnokka, aluslevyt

Kaikki neljä ovat uudessa pohjalevyssä pois päältä, samoin pohjalevyissä, jotka on tehty ennen DetailCraft 0.4 -versiota.

- **Laastiväli.** Levy on tämän verran betonin yläpinnan yläpuolella, ja pultit pitenevät saman verran. AISC Design Guide 1 (2.10) suosittelee 1 in. valmiille lattialle ja 1½–2 in. perustukselle tai pilarille; suuremmille levyille ja leikkausnokalla varustetuille levyille enemmän.
- **Jäykisteet.** Pystysuorat levyt, jotka on hitsattu pilariin ja levyyn pilarin pinnasta levyn reunaan saakka suorakaiteina (viisteitä tai kapenemia ei vielä tehdä). **2** asettuu uuman suuntaan, kunkin laipan ulkopuolelle; **4** lisää kaksi uumaa vastaan kohtisuoraa jäykistettä laippojen väliin, levyn sivuille saakka. Putkipilarissa ne ovat kunkin sivun keskellä. Jokainen on hitsattu pilariin ja levyyn molemmin puolin.
- **Leikkausnokka.** Levy, joka on hitsattu kauttaaltaan pohjalevyn alle pilarin syvyyssuuntaan, keskelle. DetailCraft varoittaa, jos nokka ei ole laastiväliä syvempi. Se ei leikkaa koloa perustukseen; [törmäystarkistus](topic:clash-check) jättää nokan ja perustuksen tarkistuksen ulkopuolelle tästä syystä.
- **Levyaluslevyt.** Neliömäinen levyaluslevy jokaisessa pultissa, pohjalevyn päällä. Ne luetellaan pilarin kokoonpanossa irrallisina (toimitetaan pilarin mukana, ei hitsattuina: Design Guide 1, kohta 2.6). Kun koko ja paksuus ovat 0, DetailCraft valitsee pultille AISC Design Guide 1:n 2. painoksen taulukon 2.3 pienimmän aluslevyn; metrinen pultti saa seuraavan tuumakoon (M20-pultti saa 7/8 in. -rivin: 2½ in. × 5/16 in.). Ominaisuuspaneeli näyttää käytetyn koon. Aluslevyn reikä on pultin halkaisija + 1/16 in.: tämän valitsee DetailCraft, taulukko ei anna arvoa. DetailCraft varoittaa, kun pultit eivät ehkä ulotu riittävän pitkälle aluslevylle ja mutterille (ulkonema pienempi kuin aluslevyn paksuus + pultin halkaisija).

Design Guide 1:n taulukko 2.3 suosittelee myös pultin reiän levyyn: 1-5/16 in. ¾ in. pultille, 1-9/16 in. ⅞ in. pultille ja 1-13/16 in. 1 in. pultille. DetailCraft ei muuta reiän kokoa.

Varoituksia tulee myös, kun pulttien reiät ovat levyn reunaan lähempänä kuin 1.2 × reiän halkaisija, kun pultit osuvat pilarin ulkoviivan sisään tai kun levy on pilaria pienempi.

## Kopioi samanlaisiin pilareihin

1. Valitse pohjalevy.
2. Valitse {{ui:Käytä samanlaisiin (n)}} tai {{ui:Samanlaiset}} ryhmän {{ui:Liitä}} valikosta {{ui:Lisää}}.
3. Jokainen samaa profiilia oleva pystysuora pilari, jossa ei ole pohjalevyä eikä joka seisi toisen pilarin päällä, saa kopion.

## Pohjalevyt ja perustukset

Pohjalevy ei tarvitse perustusta, eikä perustus tiedä sen yläpuolella olevasta pohjalevystä: ankkuripultteja ei sidota perustuksen raudoitukseen. Lisää perustukset valinnalla {{ui:Anturaperustus}}; katso [Sijoita perustukset raudoituksella](topic:footings-and-rebar).
