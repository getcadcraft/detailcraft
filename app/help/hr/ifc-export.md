---
title: Izvoz IFC-a za koordinaciju
summary: Zapišite IFC4 datoteku cijelog modela, čelika, vijaka, temelja i armature, za dijeljenje s arhitektima, inženjerima i drugim programima.
keywords: ifc, ifc4, ifc2x3, bim, izvoz, uvoz, uvezi ifc, rupe, vijci, slobodni vijci, otvori, pričvrsni elementi, koordinacija, razmjena modela, step, openbim, sudar, preglednik
from: cfcb0cd6
---

IFC izvoz zapisuje cijeli model kao jednu IFC4 datoteku koju BIM programi i IFC preglednici mogu otvoriti.

## Izvoz

1. Odaberite {{ui:IFC}} u grupi {{ui:Izlaz}}.
2. Preglednik preuzima `<name>.ifc`. Statusna traka kaže što je ušlo, na primjer: „IFC4 izvezen: 25 dijelova, 88 pričvrsnih elemenata, 7 temelja, 132 šipke.“

Ako model nema dijelova, temelja ni šipki, statusna traka kaže „Još nema ničega za izvoz.“

## Što je u datoteci

| U DetailCraft-u | U IFC datoteci |
|---|---|
| Svaka etaža | Građevinska etaža (IfcBuildingStorey), pod jednim projektom, lokacijom i zgradom |
| Mreže | IfcGrid s osima i oznakama |
| Stupovi, grede, spregovi | IfcColumn, IfcBeam, IfcMember (sprega), svaki kao ekstruzija standardnog oblika profila sa stvarnim dimenzijama |
| Ploče, čeone ploče, podložne ploče | IfcPlate |
| Rupe i izrezi | Otvori (IfcOpeningElement) izrezani iz dijela |
| Štap i njegove zavarene ploče | Sklop (IfcElementAssembly) označen oznakom sklopa |
| Vijci i sidreni vijci | IfcMechanicalFastener s promjerom i duljinom |
| Temelji | IfcFooting (temelj samac), s betonom kao materijalom |
| Svaka šipka | IfcReinforcingBar s oznakom, promjerom, površinom i duljinom, provučena duž stvarne središnje linije sa stvarnim lukovima na savijanjima |

Oznaka svakog dijela je njegova oznaka pozicije. Svaki element nosi i skup svojstava „DetailCraft“ s oznakama, profilom i težinom. Svaki element smješta se u najvišu etažu koja je na ili ispod njegove najniže točke. Materijali su grupirani po razredu.

## Stabilni ID-ovi za ponovne izvoze

Svaki IFC ID elementa (GlobalId) izračunava se iz naziva modela i vlastitog ID-a elementa u modelu. Izvezete li isti model dvaput, ID-ovi se podudaraju, pa programi koji uspoređuju verzije mogu vidjeti što se promijenilo.

:::warning
Preimenovanje modela mijenja svaki ID. Zadržite isti naziv modela između izdanja projekta.
:::

## Provjerite

Sustav testiranja DetailCraft-a čita IFC datoteke natrag neovisnim IFC čitačem. Programi se razlikuju u tome kako čitaju IFC, zato datoteku otvorite u programu koji koristi vaš tim prije nego što joj se počnete oslanjati. Aplikacija CadCraft BimCraft također otvara IFC datoteke.

## Još nije

- Uvoz spojeva, temelja i armature iz IFC datoteke. {{ui:Uvezi IFC}} uvodi grede, stupove, štapove, ploče, mreže, etaže, rupe, izreze i vijke, i navodi što je ostavio.
- Analitički podaci ili podaci za statičku analizu.
- Sve osim IFC4 referentnog prikaza.

## Uvoz

{{ui:Uvezi IFC}} u grupi {{ui:Datoteka}} (ili povlačenje `.ifc` datoteke na prikaz) stvara novi model iz IFC2X3 ili IFC4 datoteke:

- **Grede, stupovi, štapovi (spregovi) i ploče** čije je tijelo jedan ekstrudirani profil koji DetailCraft poznaje, usklađen s katalogom ili zadržan kao prilagođeni profil; **mreže** i **etaže** iz mreže i etaža datoteke.
- **Rupe:** svaki okrugli otvor (IfcOpeningElement koji buši dio koji je ušao) okomit na jedno lice dijela: hrbat ili pojasnicu I-profila ili U-profila, stijenke cijevi, ploču ili krilo kutnika. Rupa kroz obje stijenke cijevi ulazi samo jednom.
- **Izrezi:** pravokutni otvor koji zauzima punu širinu I-profila ili U-profila s jednog kraja, dolje s vrha ili gore s dna.
- **Vijci:** svaki IfcMechanicalFastener ili IfcFastener, s promjerom, duljinom, razredom i vrstom (vijak ili sidreni vijak), kao **slobodni vijak**. Slobodni vijci prikazuju se u pogledu, sastavnici i IFC izvozu te ostaju gdje jesu kad pomičete štapove. Panel {{ui:Svojstva}}, kad ništa nije odabrano, ih broji i ima {{ui:Ukloni slobodne vijke}} za slučaj da umjesto toga dodajete spojeve.

Izvješće navodi sve ostalo po klasi, s razlogom zbog kojeg je izostavljeno: zidovi i stropne ploče, temelji i šipke, izduženi otvori, rupe u okruglim cijevima i spojevi (IFC datoteka nosi njihove ploče i vijke, ne pravilo koje ih je stvorilo).
