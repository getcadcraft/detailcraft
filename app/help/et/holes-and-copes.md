---
title: Lisa augud ja väljalõiked
summary: Sisesta augud keltidesse, flantsidesse ja plaatidesse ning lõika tala otsas flantsid välja, mõõdetuna detaili lõigatud otsast.
keywords: auk, augud, poltauk, väljalõige, sälk, lõige, lõikamine, puurimine, torkamine, augu keldis, augu flants
from: 33d12398
---

Augud ja väljalõiked sisestatakse asukoha järgi. Need kuuluvad elemendile ja liiguvad koos sellega.

Liidete (otsaplaatide, alusplaatide) tehtud augud lisatakse sinu eest; neid ei sisesta sa ise. Need on loetletud kui „… ühenduste augud (muuda ühendust)”.

## Millest asukohad mõõdetakse

- **x** kulgeb mööda detaili **lõigatud algusest**: algusotsast pärast seda, kui ühendus on selle tagasi lõiganud. Seega x = 0 on terase tegelik ots, mitte ruudustiku punkt.
- **y** mõõdetakse üle pinna profiili keskpunktist:
   - **keldil**: üles (positiivne) või alla keskkõrguse suhtes;
   - **flantsil** või **plaadil**: laiuses keskjoonest.
- Elemendi algus on esimene punkt, millele klõpsasid selle paigutamisel. Read {{ui:Otspunktid (x, y, z mm)}} näitavad, milline ots on milline.

## Augu lisamine

1. Vali element.
2. Kasti {{ui:Augud}} paneelil {{ui:Omadused}} vali {{ui:Pind}}: {{ui:Keel}}, {{ui:Ülemine flants}} või {{ui:Alumine flants}} (I-profiili, kanali või ristkülikukujulise toru puhul) või {{ui:Plaadi pind}} (plaadi puhul).
3. Sisesta {{ui:x mööda (mm)}}, {{ui:y risti (mm)}} ja {{ui:Läbimõõt (mm)}}. Vorm algab väärtustest x 100, y 0, läbimõõt 22.
4. Vali {{ui:Lisa auk}}.

Olekuribal on „Auk lisatud. x on lõikealgusest; y on profiili keskpunktist (keel: üles, flants/plaat: risti).” Auk ilmub loendisse ning vaates tumeda tulpana läbi pinna.

Augu eemaldamiseks vali loendis selle kõrval ×.

Nurgad ja ümarad torud ei võta veel auke: nende kasti {{ui:Augud}} ütleb seda.

:::note
3D-vaates on augud joonistatud tumedate tulpadena, mitte läbi terase lõigatud. Need on tegelikud augud NC-failides, töökoja joonistel ja IFC-ekspordis.
:::

Auk, mille x on väljaspool detaili kumbagi otsa, ilmub vahekaardil {{ui:Probleemid}} kui „auk on detaili otsast väljas”.

## Väljalõike lisamine

Väljalõiked on mõeldud I-profiilidele: need lõikavad ühest otsast ära ülemise või alumise flantsi (ja selle paksuse keldi), et tala mahuks teise elemendi kõrvale.

1. Vali I-profiili element.
2. Kasti {{ui:Väljalõiked}} vali {{ui:Ots}} ({{ui:Algus}} või {{ui:Lõpp}}) ja {{ui:Pool}} ({{ui:Ülemine}} või {{ui:Alumine}}).
3. Sisesta {{ui:Pikkus (mm)}} (mööda tala sellest otsast) ja {{ui:Sügavus (mm)}} (allapoole ülaosast või ülespoole alaosast). Vorm algab väärtustest 100 x 40.
4. Vali {{ui:Lisa väljalõige}}.

Vaates on väljalõige teraseses välja lõigatud. Loendis on näiteks „Ülemine algusel: 100 x 40”. Eemalda see nupuga ×.

Väljalõiked on ruudukujulised: sisenurgas ei ole veel raadiust.

## Kuidas augud ja väljalõiked märgiseid mõjutavad

Kaks detaili saavad sama detailimärgi ainult siis, kui nende augud ja väljalõiked klapivad 1 mm piires, arvestades detaili ümberpööramist. Augu lisamine ühele grupi talale annab sellele uue märgise. Vt [Märgistusreeglid](topic:mark-rules).
