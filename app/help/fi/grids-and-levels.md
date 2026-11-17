---
title: Ruudukoiden ja tasojen asetus
summary: Kirjoita ruudukkoviivat, niiden välit ja tasot, joille jokainen sauva sijoitetaan.
keywords: ruudukko, ruudukot, akselit, ruudukkoviivat, tasot, korkotasot, kerrokset, lattiat, väli, asetus
from: 9cad233c
---

Jokainen DetailCraftin sauva sijoitetaan ruudukon leikkauspisteeseen tietyllä tasolla. Aseta ruudukot ja tasot ensin; voit muuttaa niitä myöhemmin.

## Miten ruudukot toimivat

- **Numeroidut viivat** kulkevat yhteen suuntaan, **kirjaimilla merkityt viivat** toiseen. Nimet ovat vain tapa: nimike voi olla mikä tahansa enintään 8 merkin teksti (1, 2, 3 tai A1, A2 tai 10, 20).
- Kirjoitat nimet ja niiden välit, et koordinaatteja. Kunkin sarjan ensimmäinen viiva on kohdassa 0.
- Numeroidut viivat ovat vakio-x-viivoja; kirjaimilla merkityt viivat vakio-y-viivoja. Palkki ruudukosta 1 ruudukkoon 2 kulkee siis x-suuntaan, ja palkki A:sta B:hen kulkee y-suuntaan.
- Kaikki arvot ovat millimetrejä.

Uusi malli alkaa numeroiduilla viivoilla 1 2 3 välein 6000 6000, kirjaimilla merkityillä viivoilla A B välein 6000 ja kahdella tasolla.

## Aseta ruudukot

1. Avaa vasemmalla olevassa {{ui:Malli}}-paneelissa {{ui:Ruudukot}}, jos se on taitettu.
2. Kirjoita {{ui:Numeroidut viivat}}-kenttään nimet välilyönnillä erotettuina, esimerkiksi `1 2 3 4 5`.
3. Kirjoita sen alla olevaan kenttään {{ui:Välit}} yksi väli kutakin väliä kohden, esimerkiksi `6000 6000 7500 6000`. Neljä väliä viidelle viivalle.
4. Tee sama kohdissa {{ui:Kirjaimilla merkityt viivat}} ja sen {{ui:Välit}}, esimerkiksi `A B C` ja `8000 8000`.
5. Valitse {{ui:Käytä ruudukkoja}}.

Tilarivi kertoo ”Ruudukot päivitetty.” ja näkymä zoomaa uuteen ruudukkoon. Pilkut käyvät myös erottimina.

Jos jokin ei täsmää, mitään ei muuteta ja tilarivi kertoo syyn, esimerkiksi ”Numeroidut ruudukot: anna yksi väli kunkin viivaparin välille (4).” Muut tarkistukset: välien on oltava positiivisia millimetrejä, nimikkeiden on oltava erilaisia, ja viivoja voi olla enintään 60 kumpaankin suuntaan.

:::note
Sauvat säilyttävät koordinaattinsa, kun ruudukot siirtyvät. Jos muutat väliä teräksen sijoittamisen jälkeen, teräs pysyy paikallaan eikä ole enää ruudukolla. Muuta ruudukkoa ensin tai siirrä sauvoja muokkaamalla niiden päiden koordinaatteja.
:::

## Aseta tasot

1. Avaa {{ui:Tasot}} {{ui:Malli}}-paneelista.
2. Jokaisella rivillä on tason nimi ja sen korkeus millimetreinä. Muokkaa niitä haluamallasi tavalla.
3. Valitse {{ui:Lisää taso}} lisätäksesi rivin. Se saa nimen ”Taso 3” (ja niin edelleen) ja sijoittuu 4000 mm korkeimman tason yläpuolelle; muuta molempia tarvittaessa.
4. Poistaaksesi tason, valitse rivin lopussa oleva ×-painike.
5. Valitse {{ui:Käytä tasoja}}.

Mikään ei muutu ennen kuin valitset {{ui:Käytä tasoja}}. Tasot lajitellaan korkeuden mukaan käytettäessä. Jokaisella tasolla on oltava nimi, kaksi tasoa ei voi jakaa nimeä, ja tasoja on oltava vähintään yksi.

Tasot voivat olla nollan alapuolella (kellari arvossa `-3500`), eivätkä ne tarvitse tasavälejä.

## Miten tasoja käytetään

- Tasolle sijoitettu pilari ulottuu seuraavaan tasoon tai tasoon, jonka valitset kohdasta {{ui:Ylös asti}}.
- Palkit ja levyt sijoitetaan kahden leikkauspisteen väliin klikkaamallasi tasolla.
- Anturat sijoitetaan siten, että niiden yläpinta on klikkaamallasi tasolla.
- {{ui:Pohjakuva}} katsoo alas yhdelle tasolle kerrallaan.
- IFC-vienti tekee yhden rakennuskerroksen per taso.

## Kumoa

Ruudukko- ja tasomuutokset ovat muokkauksia kuten muutkin: {{key:Mod+Z}} palauttaa edellisen ruudukon.

## Seuraavaksi

[Sijoita pilarit, palkit ja tukisauvat](topic:place-members)
