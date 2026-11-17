---
title: Izvezi IFC za koordinaciju
summary: Zapiši IFC4 datoteku cijelog modela, čelika, vijaka, temelja i armature, za dijeljenje s arhitektima, inženjerima i drugim softverom.
keywords: ifc, ifc4, ifc2x3, bim, izvoz, uvoz, uvezi ifc, rupe, vijci, slobodni vijci, otvori, spojni elementi, koordinacija, razmjena modela, step, openbim, sudar, pregledač
from: cfcb0cd6
---

Izvoz IFC zapisuje cijeli model kao jednu IFC4 datoteku koju BIM softver i IFC pregledači mogu otvoriti.

## Izvoz

1. Izaberi {{ui:IFC}} u grupi {{ui:Izlaz}}.
2. Pregledač preuzima `<name>.ifc`. Statusna traka kaže šta je ušlo, na primjer „IFC4 izvezen: 25 dijelova, 88 spojnih elemenata, 7 temelja, 132 armaturne šipke.“

Ako model nema dijelova, temelja ni šipki, statusna traka kaže „Još nema šta izvesti.“

## Šta je u datoteci

| U DetailCraftu | U IFC datoteci |
|---|---|
| Svaki nivo | Etaža zgrade (IfcBuildingStorey), pod jednim projektom, lokacijom i zgradom |
| Mreže | IfcGrid sa osama i oznakama |
| Stubovi, grede, dijagonale | IfcColumn, IfcBeam, IfcMember (dijagonala), svaki kao ekstruzija standardnog oblika profila sa stvarnim dimenzijama |
| Limovi, čeone ploče, temeljne ploče | IfcPlate |
| Rupe i useci | Otvori (IfcOpeningElement) isječeni iz dijela |
| Element i njegovi zavareni limovi | Sklop (IfcElementAssembly) označen oznakom sklopa |
| Vijci i sidrene šipke | IfcMechanicalFastener sa prečnikom i dužinom |
| Temelji | IfcFooting (temelj samac), sa tekstom betona kao materijalom |
| Svaka šipka | IfcReinforcingBar sa oznakom šipke, prečnikom, površinom i dužinom, provučen duž njene stvarne središnje linije sa pravim lukovima na savijanjima |

Oznaka svakog dijela je njegova oznaka dijela. Svaki element nosi i skup svojstava „DetailCraft“ sa svojim oznakama, profilom i težinom. Svaki element stoji na najvišoj etaži na istoj visini ili ispod njegove najniže tačke. Materijali su grupisani po klasi.

## Stabilni ID-jevi za ponovne izvoze

IFC ID svakog elementa (GlobalId) izračunava se iz naziva modela i ID-a samog elementa u modelu. Ako izvezete isti model dva puta, ID-jevi se poklapaju, pa softver koji upoređuje verzije može da vidi šta se promijenilo.

:::warning
Preimenovanje modela mijenja svaki ID. Zadrži isti naziv modela između izdanja projekta.
:::

## Provjeri

DetailCraft-ove IFC datoteke u svom skupu testova čita nezavisni IFC čitač. Programi se razlikuju u tome kako čitaju IFC, pa otvori datoteku u softveru koji tvoj tim koristi prije nego što se na nju oslonis. Aplikacija BimCraft iz CadCraft-a takođe otvara IFC datoteke.

## Još nije

- Uvoz veza, temelja i armature iz IFC datoteke. {{ui:Uvezi IFC}} uvozi grede, stubove, elemente, limove, mreže, nivoe, rupe, useke i vijke, i navodi šta je izostavio.
- Analitički ili podaci za statičku analizu.
- Sve osim IFC4 referentnog pogleda.

## Uvoz

{{ui:Uvezi IFC}} u grupi {{ui:Datoteka}} (ili prevlačenjem `.ifc` datoteke na prikaz) pravi novi model iz IFC2X3 ili IFC4 datoteke:

- **Grede, stubovi, elementi (dijagonale) i limovi** čije je tijelo jedan ekstrudirani profil koji DetailCraft poznaje, usklađeni s katalogom ili zadržani kao prilagođeni profil; **mreže** i **nivoi** iz mreže i etaža datoteke.
- **Rupe:** svaki kružni otvor (IfcOpeningElement koji stvara prazninu u dijelu koji je ušao) upravan na jednu od strana dijela: hrbat ili pojasnice I-profila ili U-profila, zidovi cijevi, lim, kraci uglovnika. Rupa kroz oba zida cijevi uvozi se jednom.
- **Useci:** pravougaoni otvor koji zauzima punu širinu I-profila ili U-profila od jednog kraja, odozgo nadolje ili odozdo nagore.
- **Vijci:** svaki IfcMechanicalFastener ili IfcFastener, sa prečnikom, dužinom, klasom i vrstom (vijak ili sidrena šipka), kao **slobodan vijak**. Slobodni vijci se prikazuju u pogledu, spisku materijala i IFC izvozu, i ostaju na mjestu kad pomjeraš elemente. Panel {{ui:Svojstva}}, kad ništa nije odabrano, ih broji i ima {{ui:Ukloni slobodne vijke}} za kad umjesto toga dodaješ veze.

Izvještaj navodi sve ostalo po klasi, uz razlog zašto je izostavljeno: zidovi i ploče, temelji i šipke, izdužene rupe, rupe u okruglim cijevima, veze (IFC datoteka nosi njihove limove i vijke, a ne pravilo koje ih je napravilo).
