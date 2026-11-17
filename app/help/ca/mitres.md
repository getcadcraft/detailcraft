---
title: Unions a inglet
summary: Uneix dues barres de perfil en I que es troben en un angle: les dues testes tallades sobre el pla que divideix l'angle per la meitat, amb plaques d'extrem, cargols i rigiditzadors si els voleu.
keywords: inglet, miter, unió a inglet, genoll, encaix, pòrtic, carener, cantonada, tall angular, tall oblic, placa d'extrem, placa d'extrem cargolada, rigiditzador, connecta
from: cd8380d4
---

Un inglet uneix dues barres de perfil en I les testes de les quals es troben en un angle, com el genoll d'un pòrtic, un carener, o dues bigues que giren una cantonada en planta. DetailCraft talla les dues testes sobre el pla que divideix en dues parts iguals l'angle entre elles, de manera que les dues cares tallades coincideixen. Si ho voleu, hi afegeix una placa d'extrem a cada tall, uneix les dues plaques amb cargols i col·loca un parell de rigiditzadors d'ànima a cada barra.

## On funciona

- Dos **perfils en I** (IPE, HEA, HEB, W i similars) les testes dels quals **coincideixen al mateix node**. Qualsevol de les barres es pot dibuixar en qualsevol sentit.
- L'angle entre les barres ha de ser com a mínim de 15°. Les barres alineades no s'admeten: useu un [empalmament](topic:splices).
- El tall simple (sense plaques) funciona sigui quina sigui la manera com es troben les barres. Les **plaques d'extrem** necessiten que les dues barres es trobin en el pla de les seves ànimes, com en un genoll de pòrtic o un carener. Dues bigues que giren una cantonada en planta es troben en el pla de les seves ales, així que només tenen el tall simple.
- Es poden unir barres de mides diferents, però amb un avís: les cares tallades no coincideixen.

## Afegeix un inglet

1. Seleccioneu les dues barres: cliqueu-ne una i després **Shift** + clic a l'altra.
2. Trieu {{ui:Inglet}} al menú {{ui:Més}} del grup {{ui:Connecta}}. S'obre el diàleg d'inglet.
3. Definiu els camps numerats. El dibuix al costat es fa amb els vostres números mentre escriviu, i els cercles numerats mostren què defineix cada camp.
4. Trieu {{ui:Afegeix l'inglet}}. Si heu seleccionat més de dues barres, cada unió lliure entre elles rebrà el mateix inglet.

Per canviar un inglet més endavant, seleccioneu-lo (cliqueu una de les seves plaques) i trieu {{ui:Diàleg d'inglet amb previsualització}} al panell de la dreta, o canvieu-ne els paràmetres directament allà. Un tall simple no té plaques per clicar: seleccioneu les dues barres i torneu a triar {{ui:Inglet}}, i el diàleg s'obre en aquest inglet. {{ui:Aplica a similars (n)}} el copia a cada unió lliure entre barres dels mateixos dos perfils amb el mateix angle.

## Els camps numerats (mm)

| Núm. | Paràmetre | Per defecte | Què fa |
|---|---|---|---|
| 1 | Separació entre les plaques (o les testes tallades) | 0 | Separació lliure a la unió. Cada costat en conserva la meitat |
| 2 | Plaques d'extrem, gruix de la placa | activat, 20 | Una placa d'extrem soldada tot al voltant de cada tall. Desmarqueu-la per a un tall simple |
| 3 | Files de cargols, pas entre files, gàlib, fila exterior | 4, 0, 0, desactivat | El pas 0 reparteix les files de manera uniforme entre les ales. Gàlib 0 = la meitat de l'amplada de la placa, com a mínim 2,4 × el forat. La fila exterior va a l'extensió de la placa més enllà de l'ala exterior |
| 4 | Placa més enllà de l'ala exterior | 0 | Fins a on arriben les plaques més enllà de l'ala exterior, al llarg del tall |
| 5 | Placa més enllà de l'ala interior | 0 | Igual, per a la cara interior |
| 6 | Rigiditzadors d'ànima, distància més enllà del tall | desactivats, 50 | Un parell a cada barra, a les dues cares de l'ànima, perpendicular a la barra, a aquesta distància més enllà de l'extrem llunyà del seu tall |
| 7 | Gruix del rigiditzador | 10 | |

Sota {{ui:Cargols}}: diàmetre del cargol, forat, qualitat i marge de longitud (20, 22, A325, 30), igual que per a les plaques d'extrem. Sota {{ui:Plaques i soldadures}}: amplada de la placa (0 = l'amplada de l'ala), mida del cordó de soldadura (8) i material de la placa (A36).

## Què obteniu

- **Els talls.** Cada extrem de barra es talla sobre el seu pla. La seva longitud a llistes, plànols i fitxers NC és la **longitud total**, des del seu extrem quadrat fins al punt més llunyà del tall.
- **Les plaques** pertanyen a la seva pròpia barra: el conjunt de cada barra és la barra, la seva placa d'extrem i els seus rigiditzadors. Els cargols són cargols de muntatge de la unió: la llista de materials els compta una sola vegada, i el plànol de conjunt de cada barra els llista com a cargols solts.
- **Els plànols** mostren les testes inclinades i les plaques; el plànol de taller d'una barra amb inglet indica l'angle de cada tall respecte de l'escaire.
- **Els fitxers NC** (DSTV) porten a la capçalera els angles del tall oblic, tal com demana l'estàndard, i contorns que segueixen el tall. Comproveu-los amb el visor NC del vostre taller abans de tallar, com per a qualsevol fitxer NC.
- **IFC** retalla l'extrusió de cada barra pel seu pla de tall, perquè altres programes mostrin el tall real.
- **Marques:** una barra amb inglet és una peça diferent d'una de tall quadrat de la mateixa longitud. Dues barres amb els mateixos talls comparteixen marca, com les dues ferres d'un carener.

## Cal saber-ho

- L'inglet continua actiu. Mogueu o redimensioneu qualsevol de les barres i el tall, les plaques i els cargols el segueixen. Si suprimiu una barra, l'inglet desapareix i l'extrem de l'altra barra torna a ser quadrat.
- Els avisos usen els mínims d'EN 1993-1-8 de les altres connexions (distància a l'extrem i a la vora 1,2 × forat, pas 2,2 × forat, gàlib 2,4 × forat), a més de files de cargols massa a prop d'una ala, plaques més estretes que les ales i rigiditzadors sense espai.
- Els valors són valors inicials, no un càlcul. DetailCraft no comprova la resistència de la connexió, i no fa cap encaix (haunch), cap inglet soldat a topall, ni cap rigiditzador alineat amb les ales de l'altra barra.
