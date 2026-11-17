---
title: Liitä kopioitu alue viitekuvana
summary: Kopioi osa PDF-arkista MarkupCraftissa ja liitä se DetailCraftiin oikeassa koossa, tasaisesti teräsrakenteen alle, ja mallinna sen päälle.
keywords: kuva, viitekuva, pohjakuva, tausta, kopioi alue, markupcraft, pdf, jäljitys, oikea koko, mittakaava, peittävyys, päällekkäiskuva
from: 0c48445f
---

MarkupCraftin Kopioi alue -työkalu kopioi osan arkista kuvana, joka tietää oman kokonsa. Kun liität sen DetailCraftiin, se asettuu tasaisesti tasolle oikeassa koossa ruudukon ja teräsrakenteen alle, jolloin voit sijoittaa sauvat piirustusten pohjakuvan päälle.

## Liitä kuva

1. MarkupCraftissa kopioi alue valitsemalla {{ui:Lisää}} › {{ui:Kopioi sivun alue…}} ja sitten {{ui:Kopioi}} (tai {{ui:Kopioi läpinäkyvänä}}, joka tekee paperista läpikuultavan).
2. DetailCraftissa (samassa selaimessa) paina {{key:Mod+V}} tai valitse {{ui:Liitä}}.

Kuva asettuu ruudukon keskelle pohjakuvassa näkyvälle tasolle (3D-näkymässä tai julkisivussa alimmalle tasolle) ja jää valituksi. Tilarivi kertoo sen koon.

- **Oikea koko:** kun arkissa oli piirustusmittakaava, yksi pikseli piirretään sen pituisena kuin piirustus sen näyttää.
- **Paperikoko:** kun arkissa ei ollut mittakaavaa, kuva on yhtä suuri kuin alue oli paperilla, ja tilarivi kertoo sen. Kirjoita uusi **mm per pikseli** kohtaan {{ui:Ominaisuudet}} skaalataksesi sen.

Läpinäkyvänä kopioitu alue alkaa samalla peittävyydellä, jolla se kopioitiin.

{{key:Mod+V}} liittää viimeksi kopioimasi: alueen MarkupCraftista tai DetailCraftissa kopioidut sauvat ja anturat. Jos leikepöydälle on kopioitu alueen jälkeen toinen kuva (toisesta ohjelmasta), mitään ei liitetä; kopioi alue uudelleen.

## Siirrä, muuta ja poista

- Napsauta kuvaa valitaksesi sen (sen edessä oleva kohde valitaan ensin). Sininen ääriviiva näyttää, että se on valittu.
- Vedä se siirtääksesi sen tason yli. Sen keskikohta ja kulmat tarttuvat ruudukon leikkauspisteisiin.
- Kohdassa {{ui:Ominaisuudet}} kirjoita, mihin sen keskikohta menee (x, y) ja millä tasolla se on (z), sekä sen **mm per pikseli** ja **peittävyys**.
- {{key:Delete}} tai {{ui:Poista}} poistaa sen.

Jokainen liittäminen, siirto, muutos ja poisto on yksi vaihe: {{key:Mod+Z}} kumoaa sen.

Kuva tallennetaan mallitiedostoon, joten se avautuu mallin mukana. Se on pelkkä viite: se ei ole piirustuksissa, vienneissä, osaluettelossa eikä kopiossa.
