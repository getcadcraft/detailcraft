---
title: Tarkista IFC-vienti asiakkaan IDS:ää vasten
summary: Lataa saamasi .ids-tiedosto ja näe Ongelmat-kohdassa jokainen viety osa, joka ei sitä täytä, ennen kuin lähetät IFC-tiedoston.
keywords: ids, tietotoimituksen määritys, buildingsmart, vaatimukset, toimitus, tarkistus, laadunvarmistus, ifc-vienti, ominaisuus, materiaali, hankinta
from: 50d0f785
---

## Mitä teet

IDS (Information Delivery Specification, buildingSMART-standardi) on luettelo siitä, mitä IFC-tiedoston on sisällettävä. DetailCraft tarkistaa IFC-tiedoston, jonka se veisi (sama tiedosto kuin {{ui:IFC}} kirjoittaa), saamaasi IDS:ää vasten ja luettelee jokaisen osan, joka jää vajaaksi.

## Vaiheet

1. Avaa tai piirrä malli.
2. Napsauta työkalurivin ryhmässä {{ui:Tuloste}} painiketta {{ui:Tarkista IDS:ää vasten…}}.
3. Napsauta {{ui:Lataa .ids-tiedosto…}} ja valitse tiedosto. Mitään ei lähetetä.
4. Lue tulos: jokainen määritys merkittynä {{ui:Läpäisee}} tai {{ui:Ei läpäise}}, ja kuinka monta elementtiä se koskee.
5. Avaa {{ui:Ongelmat}} ({{key:Ctrl+Shift+M}}) ja napsauta virhettä: sauva, liitos, portaat tai antura, josta se tuli, valitaan ja näkymä zoomataan siihen.

## Mitä näet

- Yksi varoitus jokaisesta viedystä elementistä ja vaatimuksesta, jota se ei täytä. Mukana ovat määrityksen nimi, mitä IDS vaatii ja mitä viennissä on.
- Tarkistusraportti (Ongelmat-paneelissa) alkaa IDS:stä: sen nimi, versio, tekijä ja kunkin määrityksen määrät.

## Hyvä tietää

- IDS tallennetaan mallitiedostoon, joten se tarkistetaan uudelleen, kun avaat mallin. IDS:n lataaminen tai unohtaminen on yksi vaihe, jonka voit kumota.
- Jokainen muutos tarkistetaan hetken kuluttua uudelleen. Suuressa mallissa tarkistus odottaa hieman pidempään ajojen välillä.
- Viennin GlobalId-tunnukset muodostuvat mallin nimestä ja DetailCraftin sisäisistä osanumeroista, joten ne pysyvät samoina tarkistuksesta toiseen. Mallin nimeäminen uudelleen antaa jokaiselle elementille uudet GlobalId-tunnukset.
- Luvut verrataan SI-yksiköissä (vienti on millimetreissä; pituudet muunnetaan ensin metreiksi).

- IDS:n kuviot luetaan koko arvona. Alussa oleva `^` ja lopussa oleva `$` tulkitaan myös "koko arvo" -merkitykseksi, kuten useimmat IDS-tiedostot niitä tarkoittavat.

## Seuraavaksi

- [Vie IFC](topic:ifc-export)
