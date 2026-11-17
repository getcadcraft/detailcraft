---
title: Märgistusreeglid
summary: Täpselt millal kaks detaili või kaks koostet jagavad sama märgist, kuidas märgiseid nummerdatakse ning kuidas töötavad aluste ja varraste märgised.
keywords: märgised, nummerdamine, detailimärgis, koosteimärgis, tükimärgis, prefiks, toleranss, identsed detailid, varraste märgised, aluste märgised
from: ce02c98e
---

DetailCraft arvutab iga märgise ümber pärast iga muudatust. Midagi ei salvestata, seega märgised kirjeldavad alati mudelit sellisena, nagu ta praegu on. Vt [Märgiste ja materjalinimekirja kontrollimine](topic:marks-and-bom), kuidas neid kasutada.

## Detailimärgised

Kaks detaili saavad sama detailimärgise, kui kõik need klapivad:

1. Detaili tüüp (tala, post, diagonaal või plaat).
2. Profiili nimi (suur- ja väiketähtedel vahet ei ole).
3. Materjal (suur- ja väiketähtedel vahet ei ole).
4. Lõikepikkus 1 mm täpsusega.
5. Iga auk: külg, asend piki ja risti 1 mm täpsusega ning läbimõõt 0,1 mm täpsusega.
6. Iga väljalõige: ots, külg, pikkus ja sügavus 1 mm täpsusega.

Liikme {{ui:Nimi}} ei loe. Ei loe ka tema asukoht mudelis, pööre ega see, kuidas ta joonistati, kui detail ise on sama.

### Ümberpööratud detailid

Detaili võrreldakse kõigis viisides, kuidas teda saab ümber pöörata nii, et tema lõige langeb iseendaga kokku. Kui mõni neist teeb ta teise detailiga sobivaks, jagavad nad märgist.

| Kuju | Arvestatavad pöörded |
|---|---|
| I-profiilid, ristkülikukujulised HSS, plaadid | Ots otsa vastu (vertikaalse telje ümber), ots otsa vastu (horisontaalse telje ümber) ja pea peale oma pikkuse ümber |
| Kanalid | Ots otsa vastu ainult horisontaalse telje ümber, nii et võrk jääb samale poolele |
| Nurkprofiilid, ümmargused HSS | Mitte ükski: võrreldakse nii, nagu on paigutatud |

Nii et tala, millel on auk vasaku otsa lähedal, sobib talaga, kus sama auk on parema otsa lähedal, ja post, mille ühes äärises on augud, sobib postiga, millel on samad augud teises äärises.

### Nummerdamine

| Tüüp | Detaili prefiks | Koosteprefiks |
|---|---|---|
| Post | c | C |
| Tala | b | B |
| Diagonaal | br | BR |
| Plaat (paigutatud, otsaplaat või aluseplaat) | p | P |

Märgised nummerditakse igas prefiksis 1-st. Järjekord on: postid, siis talad, diagonaalid ja plaadid; tüübi sees profiili nime järgi loomuliku järjestuse kohaselt (W8x10 enne W12x26); siis pikemad detailid enne lühemaid.

Kuna nummerdus järgib seda järjekorda, võib ühe detaili lisamine või muutmine nihutada teiste numbreid.

## Koosteimärgised

- Iga detail, mis ei ole teise detailiga keevitatud, on oma koosteühiku põhidetail.
- Otsaplaadid on keevitatud oma talaga ja aluseplaadid oma postiga, nii et kuuluvad selle liikme koostesse.
- Kaks koostet jagavad märgist, kui nende põhidetailidel on sama detailimärgis ja nende külge kinnitatud detailidel on samad märgised samades kohtades (1 mm täpsusega), lubades samu pöördeid, mis põhidetailil.
- Koosteprefiks järgneb põhidetailile: kahe otsaplaadiga tala on B-koost.

{{ui:Plaat}} tööriistaga paigutatud plaadid ei ole millegi külge keevitatud, seega on igaüks oma P-koost.

## Aluste märgised

Sama pikkuse, laiuse, sügavuse, betoonitekstiga, alumise armatuurvõrgu ja algvarrastega alused saavad märgise: F1, F2 … paigutamise järjekorras. Asend ja pööre ei loe.

## Varraste märgised

Varrad, mille suurus, kuju ning mõõdud A, B ja C (ümardatud millimeetrini) on samad, jagavad märgist kõigi aluste vahel. Märgis on varda number, F ja iga varda suuruse loendur: 5F1, 5F2, 6F1. Ruudukujulise aluse pikk ja lühike varras on sama varras ja jagavad märgist; tabeli {{ui:Kasutatakse}} veerus on loetletud mõlemad kasutused.
