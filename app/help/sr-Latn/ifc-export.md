---
title: Izvoz IFC-a za koordinaciju
summary: Napiši IFC4 datoteku celog modela, čelika, zavrtnjeva, temelja i armature, za deljenje sa arhitektima, inženjerima i drugim softverom.
keywords: ifc, ifc4, ifc2x3, bim, izvoz, uvoz, uvoz ifc, rupe, zavrtnji, slobodni zavrtnji, otvori, pričvrsni elementi, koordinacija, razmena modela, step, openbim, sudar, pregledač
from: cfcb0cd6
---

IFC izvoz upisuje ceo model kao jednu IFC4 datoteku koju mogu da otvore BIM softver i IFC pregledači.

## Izvoz

1. Izaberi {{ui:IFC}} u grupi {{ui:Izlaz}}.
2. Pregledač preuzima `<name>.ifc`. Statusna traka kaže šta je ušlo, na primer: „IFC4 izvezen: 25 delova, 88 zavrtnja, 7 temelja, 132 šipke.“

Ako model nema delova, temelja ni šipki, statusna traka kaže: „Još nema šta da se izveze.“

## Šta je u datoteci

| U DetailCraft | U IFC datoteci |
|---|---|
| Svaki nivo | Sprat zgrade (IfcBuildingStorey), pod jednim projektom, lokacijom i zgradom |
| Mreže | IfcGrid sa osama i oznakama |
| Stubovi, grede, dijagonale | IfcColumn, IfcBeam, IfcMember (dijagonala), svaki kao izvlačenje standardnog oblika profila sa stvarnim dimenzijama |
| Limovi, krajnji limovi, bazni limovi | IfcPlate |
| Rupe i useci | Otvori (IfcOpeningElement) isečeni iz dela |
| Element i njegovi zavareni limovi | Sklop (IfcElementAssembly) označen oznakom sklopa |
| Zavrtnji i ankerne šipke | IfcMechanicalFastener sa prečnikom i dužinom |
| Temelji | IfcFooting (samostalni temelj), sa tekstom o betonu kao materijalom |
| Svaka šipka | IfcReinforcingBar sa oznakom šipke, prečnikom, površinom i dužinom, provučen duž prave središnje linije sa pravim lukovima na savijanjima |

Oznaka svakog dela je njegova oznaka dela. Svaki element takođe nosi skup svojstava „DetailCraft“ sa svojim oznakama, profilom i težinom. Svaki element leži u najvišem spratu na ili ispod svoje najniže tačke. Materijali su grupisani po klasi.

## Stabilni ID-ovi za ponovne izvoze

IFC ID (GlobalId) svakog elementa računa se iz naziva modela i sopstvenog ID-a elementa u modelu. Ako izvezeš isti model dva puta, ID-ovi se poklapaju, pa softver koji upoređuje verzije može da vidi šta se promenilo.

:::warning
Promena naziva modela menja svaki ID. Zadrži isti naziv modela između izdanja projekta.
:::

## Proveri

DetailCraft-ove IFC datoteke se u njegovom skupu testova čitaju nezavisnim IFC čitačem. Programi se razlikuju u tome kako čitaju IFC, zato otvori datoteku u softveru koji tvoj tim koristi pre nego što joj veruješ. CadCraft-ova aplikacija BimCraft takođe otvara IFC datoteke.

## Još nije

- Uvođenje veza, temelja i armature iz IFC datoteke. {{ui:Uvoz IFC}} uvodi grede, stubove, elemente, limove, mreže, nivoe, rupe, useke i zavrtnje, i navodi šta je ostavio.
- Analitički podaci ili podaci za strukturnu analizu.
- Sve osim IFC4 referentnog prikaza.

## Uvoz

{{ui:Uvoz IFC}} u grupi {{ui:Datoteka}} (ili prevlačenje `.ifc` datoteke na prikaz) pravi novi model iz IFC2X3 ili IFC4 datoteke:

- **Grede, stubovi, elementi (dijagonale) i limovi** čije je telo jedan izvučeni profil koji DetailCraft poznaje, upareni sa katalogom ili sačuvani kao prilagođeni profil; **mreže** i **nivoi** iz mreže i spratova datoteke.
- **Rupe:** svaki okrugli otvor (IfcOpeningElement koji poništava deo koji je ušao) upravan na jednu od strana dela: hrbat ili pojasevi I-profila ili U-profila, zidovi cevi, lim, kraci uglovnika. Rupa kroz oba zida cevi uvodi se jednom.
- **Useci:** pravougaoni otvor koji zauzima punu širinu I-profila ili U-profila od jednog kraja, odozgo nadole ili odozdo nagore.
- **Zavrtnji:** svaki IfcMechanicalFastener ili IfcFastener, sa prečnikom, dužinom, klasom i vrstom (zavrtanj ili ankerna šipka), kao **slobodan zavrtanj**. Slobodni zavrtnji se prikazuju u prikazu, spisku materijala i IFC izvozu i ostaju na mestu kada pomeraš elemente. Panel {{ui:Svojstva}}, kada ništa nije izabrano, ih broji i ima {{ui:Ukloni slobodne zavrtnje}} za slučaj kada umesto toga dodaješ veze.

Izveštaj navodi sve ostalo po klasi, sa razlogom zbog kojeg je izostavljeno: zidovi i ploče, temelji i šipke, rupe u obliku proreza, rupe u okruglim cevima, veze (IFC datoteka nosi njihove limove i zavrtnje, ne pravilo koje ih je napravilo).
