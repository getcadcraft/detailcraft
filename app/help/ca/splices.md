---
title: Empalmaments
summary: Uneix dues peces d'una biga o d'un pilar d'extrem a extrem amb platabandes de cobertura cargolades a les ales i a l'ànima.
keywords: empalmament, empalmament de biga, empalmament de pilar, platabanda de cobertura, placa d'empalmament, placa d'ala, placa d'ànima, empalmament cargolat, unió, tram, connecta
from: 97d141c2
---

Un empalmament cargolat uneix dues peces d'un mateix perfil en I d'extrem a extrem: una platabanda de cobertura fora de cada ala i una placa a cada costat de l'ànima, cargolades a través de les dues peces. DetailCraft retalla les peces fins a la separació, col·loca les quatre plaques, fa els forats a les plaques i a les dues peces, afegeix els cargols i avisa de les distàncies al cantell, de l'espaiat i de l'ajust.

## On funciona

- Dues bigues, o dos trams de pilar, del **mateix perfil en I**, que es troben **d'extrem a extrem en línia**: els extrems a no més de 50 mm, les peces paral·leles i en una mateixa línia (dins de 1 mm). Qualsevol de les peces es pot dibuixar en qualsevol sentit.
- Funcionen peces horitzontals, inclinades o verticals.
- Es rebutgen dues peces d'alçada o amplada d'ala diferents, i també els perfils en U, els angles i els tubs.

## Afegeix empalmaments

1. Dibuixeu les dues peces de manera que es trobin d'extrem a extrem. Per partir una barra ja dibuixada, torneu-la a dibuixar com a dues peces.
2. Seleccioneu una (o totes dues) i trieu {{ui:Empalmament}} al menú {{ui:Més}} del grup {{ui:Connecta}}.
3. Cada unió lliure de les peces seleccionades amb una altra peça del mateix perfil rep un empalmament. La barra d'estat indica quants n'ha afegit.

Seleccioneu l'empalmament (feu clic en una de les seves plaques) per canviar-ne la configuració al tauler de la dreta. {{ui:Aplica a similars (n)}} el copia a totes les altres unions lliures entre peces del mateix perfil.

## Configuració (mm)

| Paràmetre | Per defecte | Què fa |
|---|---|---|
| Separació entre els extrems | 10 | Cada peça es retalla la meitat d'aquesta separació |
| Diàmetre del cargol, forat, qualitat, marge de longitud | 20, 22, A325, 30 | Igual que per a les plaques d'extrem |
| Gruix de la platabanda d'ala | 12 | La placa és tan ampla com l'ala |
| Files de cargols a l'ala (a cada costat) | 3 | Files de cargols a través de l'ala a cada costat de la unió |
| Pas dels cargols de l'ala | 75 | Al llarg de la barra |
| Entreeix dels cargols de l'ala | 0 | Entre les dues línies de cargols; 0 = amplada de l'ala menys 80 |
| Distància de l'extrem de l'ala | 40 | Des de l'extrem de la barra fins al primer cargol, i de l'últim cargol fins a l'extrem de la placa |
| Gruix de la placa d'ànima | 8 | Una a cada costat de l'ànima |
| Files de cargols de l'ànima | 3 | Amunt per l'ànima, centrades |
| Columnes de cargols de l'ànima (a cada costat) | 2 | Al llarg de la barra a cada costat de la unió |
| Pas dels cargols de l'ànima, amunt per l'ànima / al llarg de la barra | 75, 75 | |
| Distància de l'extrem de l'ànima | 40 | Igual que per a les ales |
| Alçada de la placa d'ànima | 0 | 0 = l'ànima lliure entre els acords menys 10 a dalt i a baix |
| Material de la placa | A36 | Text lliure |

Les longituds de les plaques surten dels cargols: platabanda d'ala = separació + 2 × (2 × distància a l'extrem + (files − 1) × pas); les plaques d'ànima igual, amb les seves columnes. Amb els valors per defecte, les platabandes d'ala fan 470 de llarg.

## Cal saber-ho

- Les plaques pertanyen a la **primera peça dibuixada** de les dues (a les seves propietats s'anomena primera peça): es mostren al seu plànol de conjunt i es lliuren amb ella, cargolades, no soldades. El plànol de conjunt de la segona peça només mostra els seus forats.
- Els cargols de l'ala subjecten l'ala i la seva platabanda; els cargols de l'ànima subjecten l'ànima i les dues plaques d'ànima. Les longituds dels cargols apareixen per separat a les propietats.
- Els avisos fan servir els mateixos mínims de l'EN 1993-1-8 que les altres connexions (distància a l'extrem i al cantell 1.2 × forat, pas 2.2 × forat en la direcció de la barra i 2.4 × forat en la transversal), a més d'una placa d'ànima més alta que l'ànima lliure i dels cargols de l'ala massa propers a l'ànima per a l'acord.
- DetailCraft no dimensiona l'empalmament (no fa cap comprovació de resistència) i no fa plaques de reblert per a peces de diferent gruix.
- Copiar les dues peces copia el seu empalmament; suprimir una de les peces suprimeix l'empalmament.
