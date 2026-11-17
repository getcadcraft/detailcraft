---
title: Näkymäkuutio
summary: Napsauta kuution pintaa, reunaa tai kulmaa näkymän kulmassa katsoaksesi sieltä, vedä sitä kiertääksesi näkymää, käännä kompassirengasta, liiku suoran näkymän ympärillä ja palaa kotinäkymään.
keywords: näkymäkuutio, viewcube, kuutio, kompassi, pohjoinen, kotinäkymä, vakionäkymät, ylä, etu, oikea, isometrinen, kulma, reuna, kiertää, akselikuvake, kulmaindikaattori, navigointi
from: 3666ea8a
---

Näkymäkuutio on 3D-näkymän oikeassa yläkulmassa, näkymäpalkin alla (vain {{ui:3D}}-näkymässä: {{ui:Pohjakuva}} ja {{ui:Julkisivu}} katsovat jo suoraan malliin). Se kääntyy näkymän mukana, joten se näyttää aina, mihin suuntaan katsot: {{ui:Ylä}} on ylhäällä, {{ui:Etu}} osoittaa etelään (sivulle, jolta kirjaimilla merkityt ruudukot näkyvät {{ui:Julkisivu}}-näkymässä), ja {{ui:Oikea}} osoittaa itään, numeroitujen ruudukoiden suuntaan. Se pysyy läpinäkyvänä, kunnes osoitat siihen.

## Katso sivulta, reunalta tai kulmasta

1. Osoita kuutioon. Osa osoittimen alla syttyy: pinnan keskikohta, reuna (se syttyy molemmilla pinnoilla, jotka sitä jakavat) tai kulma (kaikilla kolmella pinnalla).
2. Napsauta. Näkymä kääntyy katsomaan sieltä ja säilyttää saman keskikohdan ja zoomin.

Napsautuspaikkoja on 26: 6 pintaa ({{ui:Ylä}}, {{ui:Ala}}, {{ui:Etu}}, {{ui:Taka}}, {{ui:Vasen}}, {{ui:Oikea}}), 12 reunaa ja 8 kulmaa. Kulma antaa klassisen kolmen neljänneksen näkymän, ja reuna näyttää puolivälin kahden pinnan välissä.

Kuution pintanäkymä on 3D-näkymä, ei {{ui:Pohjakuva}} tai {{ui:Julkisivu}}: mitään ei leikata pois, ja mallia voi yhä kääntää.

## Kierrä vetämällä kuutiota

Vedä kuutiota kääntääksesi näkymää, samoin kuin kiertäisit näkymää itse. Vetoa ei koskaan tulkita napsautukseksi, joten kuutiosta voi tarttua mistä kohtaa tahansa.

## Kompassirengas

Kuution alla oleva rengas kantaa merkit P, I, E ja L.

- **Vedä rengasta** kääntääksesi mallia pystyakselin ympäri, kuin pyörivällä alustalla. Rengas seuraa osoitinta.
- **Napsauta kirjainta** katsoaksesi siltä puolelta, säilyttäen kuinka jyrkästi katsot alas. Kun katsot suoraan ylhäältä, napsauttamasi kirjain menee näytön alareunaan.

## Suoran näkymän nuolet

Kun katsot suoraan pintaa kohti, kuution ympärille ilmestyy pieniä nuolia:

- Neljä **kolmiota** tuo sillä puolella olevan pinnan eteen. Kuution yläpuolella oleva kolmio näyttää pinnan, joka oli ylhäällä, ja niin edelleen.
- Kaksi **kaarinuolta** oikeassa yläkulmassa kääntävät kuvan neljänneksen kierrosta myötäpäivään tai vastapäivään muuttamatta sitä, mihin pintaan katsot. Käytä niitä, jotta pohjakuva kääntyy niin, että pitkä seinä kulkee poikki näytön.

## Koti

Kuution vasemman yläkulman talopainike palaa aloituksen kolmen neljänneksen näkymään ja sovittaa koko mallin näkyviin, kuten Sovita-painike. {{key:Home}} tekee saman, kun kuutiolla on näppäimistöfokus.

## Näppäimistöllä

{{key:Tab}} kuutioon, sitten:

| Näppäin | Tekee |
|---|---|
| {{key:left}} / {{key:right}} | valitsee sivun, reunan tai kulman kuution ympäriltä kahdeksasosakierroksen askelin (ruudunlukijat kertovat, mikä valittiin) |
| {{key:up}} / {{key:down}} | valitsee korkeamman tai matalamman kohdan, ylös asti {{ui:Ylä}} tai alas asti {{ui:Ala}} |
| {{key:Enter}} tai {{key:Space}} | katsoo valitusta kohdasta |
| {{key:Shift+left}} / {{key:Shift+right}} | kääntää näkymää neljänneksen kierroksen pystyakselin ympäri |
| {{key:Home}} | kotinäkymä |
| {{key:Esc}} | poistuu kuutiosta |

Kuutiossa painetut näppäimet pysyvät kuutiossa: ne eivät käynnistä DetailCraft-työkaluja.

## Akselikuvake tai ei mitään

Avaa {{ui:Asetukset}} ({{key:Mod+,}}), {{ui:DetailCraft}}-välilehti, ja aseta **Kulmaindikaattori** arvoon {{ui:Näkymäkuutio}} (oletus), {{ui:Akselikuvake}} (pieni X-, Y- ja Z-merkki vasemmassa alakulmassa: X punainen, Y vihreä, Z sininen) tai {{ui:Ei mitään}}. Tämä selain muistaa valinnan. Katso [DetailCraft-asetukset](topic:settings#corner-indicator).
