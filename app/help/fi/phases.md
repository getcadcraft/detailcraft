---
title: Vaiheet
summary: Jaa malli vaiheisiin (pystytysjärjestyksiin tai toimituksiin), näytä tai piilota kukin vaihe, sijoita osat vaiheisiin ja numeroi osamerkit vaiheittain.
keywords: vaihe, vaiheet, vaihehallinta, pystytysjärjestys, toimitus, erä, järjestys, piilota vaihe, näytä vaihe, suodatin, numerointi, merkkiprefiksi, vaiheittain
from: bae506f5
---

Vaihe on ryhmä osia, jotka valmistetaan, toimitetaan tai pystytetään yhdessä: pystytysjärjestys, toimitus tai erä. Jokainen sauva ja perustus kuuluu yhteen vaiheeseen. Liitos kuuluu pääsauvansa vaiheeseen: päätylevyn palkin, pohjalevyn pilarin. Uudessa mallissa on yksi vaihe.

## Vaiheet-paneeli

{{ui:Vaiheet}}-osio {{ui:Malli}}-paneelissa luettelee kaikki vaiheet:

- valintaruutu näyttää tai piilottaa vaiheen näkymässä;
- numero ja nimi, jonka voit kirjoittaa (tyhjä = "Vaihe 2" ja niin edelleen);
- kuinka monta osaa siinä on;
- {{ui:×}}-painike poistaa vaiheen. Vain tyhjän vaiheen voi poistaa: siirrä sen osat ensin toiseen vaiheeseen.

{{ui:Lisää vaihe}} lisää seuraavan numeron ja asettaa sen vaiheeksi, johon uudet osat menevät.

## Sijoita osat vaiheeseen

- **Uudet osat:** {{ui:Uudet osat menevät vaiheeseen}} valitsee vaiheen, johon jokainen sauva ja perustus menee, jonka asetat tästä eteenpäin.
- **Yksi osa:** valitse se ja vaihda {{ui:Vaihe}} {{ui:Ominaisuudet}}-paneelissa.
- **Monta osaa:** valitse ne (ikkuna, {{key:Shift}}+napsautus, {{key:Mod+A}}) ja vaihda {{ui:Vaihe}} {{ui:Ominaisuudet}}-paneelin yläosassa. Siinä lukee **Vaihtelee**, jos ne ovat eri vaiheissa. Yksi muutos on yksi kumoamisvaihe.

Kopiot säilyttävät sen vaiheen, josta ne kopioitiin, myös silloin kun ne liitetään toiseen malliin (vaihe lisätään siellä).

## Näytä ja piilota vaiheet

Piilotettua vaihetta ei piirretä näkymään, sitä ei voi napsauttaa eikä ottaa mukaan ikkunavalinnalla, ja {{key:Mod+A}} jättää sen pois. Se on yhä osaluettelossa, raporteissa, piirustuksissa ja jokaisessa viennissä. Piilottaminen koskee vain näkymää: sitä ei tallenneta eikä sitä voi kumota.

## Osamerkit vaiheittain

Kun **Numeroi osamerkit vaiheittain** on päällä (se on oletuksena päällä) ja osia on useammassa kuin yhdessä vaiheessa, jokainen vaihe numeroidaan itsenäisesti ja sen osamerkit alkavat vaiheen numerolla: osamerkit 1-b1, 2-b1, kokoonpanomerkit 2-B1, perustukset 2-F1. Kaksi samanlaista palkkia eri vaiheissa saa silloin eri merkit, koska ne valmistetaan ja toimitetaan eri aikaan. Kun vain yksi vaihe on käytössä, merkeissä ei ole etuliitettä. Kytke asetus pois, jos haluat numeroida koko mallin yhtenä, jolloin samanlaiset osat saavat saman merkin vaiheestaan riippumatta.

Vaihe kirjoitetaan IFC-vientiin ominaisuusjoukkoon DetailCraft, kenttään Phase.

:::note
Vaiheita sisältävät mallit tallennetaan DetailCraftin tiedostomuodossa 2. DetailCraftin 0.3-julkaisu ei voi avata niitä; tämä versio avaa vanhemmat tiedostot, joissa jokainen osa on vaiheessa 1.
:::
