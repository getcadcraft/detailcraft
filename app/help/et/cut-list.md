---
title: Lõikenimekiri
summary: Paiguta talad, postid, diagonaalid ja trepikaared standardpikkustesse tükkidesse arvestusega saepilu järgi ning vaata, mitu varrast tuleb osta ja kui palju jääb praagiks.
keywords: lõikenimekiri, paigutamine, standardpikkus, varras, saepilu, saag, tükijääk, praak, jääk, kokkupanek, ost, mitu
from: 81d06ce5
---

Vaate all olev kaart {{ui:Lõikenimekiri}} arvutab, kuidas lõigata mudeli lineaarsed detailid standardvarrastest: mitu varrast igast pikkusest igale profiilile ja materjalile tuleb osta, mis läheb igale vardale ja kui palju praaki jääb.

## Seadista laoarvestus

Kaardi ülaosas:

- **Standardpikkused (mm):** pikkused, mida saab osta, tühikutega eraldatult, näiteks `6000 12000`, või 20 jala ja 40 jala varrased kujul `6096 12192`. Kuni kaheksa.
- **Saepilu (mm):** iga lõike laius (algselt 3).
- **Otsa lõikamine (mm):** lõigatakse iga varda otsast maha enne esimest tükki (algselt 0).
- **Jäta jäägid alates (mm):** vähemalt nii pikk jääk läheb tagasi lattu; lühem on praak (algselt 500).

Need jäävad sellesse brauserisse, nagu teisedki [sätted](topic:settings).

## Kuidas paigutamine käib

- Iga talad, post, diagonaal ja trepikaar detailimärgise ja koguse järgi; plaate lõigatakse lehtmaterjalist ja neid siin ei paigutata.
- Iga profiil ja materjal eraldi.
- Pikemad tükid esimesena, igaüks esimesse varrasse, kuhu ta mahub; uus varras algab pikima standardpikkusega. Seejärel osteakse iga varras lühima standardpikkusena, mis veel mahutab selle lõiked.
- Iga lõige võtab saepilu (lõppu ei arvestata, kui lõige lõpeb täpselt varda otsas); iga varras kaotab otsa lõikamise.
- Tükk, mis on pikem kui ükski standardpikkus, kantakse jaotisse **Pikem kui ükski standardpikkus**, mitte ei paigutata: ühenda see (vt [Liitmikud](topic:splices)) või lisa pikem standardpikkus.

## Loe tulemust

- **Kokkuvõte:** profiili ja materjali kaupa tükid, ostetavad varrased (näiteks „2 × 12000, 1 × 6000"), ostetud ja kasutatud meetrid ning praak.
- **Varrased ja nende lõiked:** iga varras, selle standardpikkus, selle lõiked detailimärgise ja pikkuse järgi ning jääk, kas alles hoitud või praak.

{{ui:Laadi alla CSV}} salvestab mõlemad tabelid failina `<nimi> cut list.csv`.

DetailCraft ei paiguta plaate lehtedesse ega sega profiile ega materjale ühele vardale.
