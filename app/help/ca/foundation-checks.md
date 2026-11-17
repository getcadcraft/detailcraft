---
title: Comprovacions de la fonamentació
summary: Comproveu sabates, sabates combinades i lloses sobre el terreny que descriviu, l'assentament, una llosa flexible sobre molles, grups de pilots i murs de contenció. Una ajuda perquè un enginyer ho revisi.
keywords: fonamentació, sabata, sabata combinada, llosa, assentament, mòdul de reacció del terreny, molles, pilar de borda, pilar de cantonada, pressió sobre el terreny, lliscament, bolcament, punxonament, tallant unidireccional, flexió, ancoratge, armadura mínima, grup de pilots, mur de contenció, ACI 318-19
from: 6961ad52
---

:::warning
Són comprovacions de primer ordre perquè les revisi un enginyer, no una aprovació de projecte. La pressió admissible sobre el terreny i el coeficient de fregament les decideix vostè: DetailCraft no coneix el vostre terreny.
:::

La pestanya {{ui:Foundation}} comprova les sabates del model amb les càrregues dels pilars que els indiqueu.

## Descriure el terreny

Escriviu {{ui:Allowable bearing pressure}} i {{ui:Base friction coefficient}}. Tots dos comencen a 0, que vol dir "sense introduir": la comprovació llavors mostra la pressió com a nota i no diu que compleixi. Per a l'assentament, escriviu el mòdul del terreny {{ui:Es}} (MPa), el seu coeficient de Poisson i l'assentament permès (25 mm per començar). Per a una llosa flexible, escriviu un mòdul de reacció del terreny {{ui:ks}}. També hi són el terraplè sobre la sabata, el pes específic del terreny, els coeficients de seguretat per a lliscament i bolcament (1.5 per començar) i la resistència a fluència de les barres.

## Donar les càrregues

Cada sabata té una llista de càrregues de pilar. Useu {{ui:Add a column load}} i ompliu la fila de servei (per a pressió sobre el terreny, lliscament i bolcament) i la fila majorada (per a les comprovacions de resistència): la càrrega vertical P cap avall, les forces horitzontals Vx i Vy a la part superior de la sabata, els moments Mx i My, la posició del pilar sobre la sabata i la seva mida.

O bé obriu la pestanya {{ui:Analysis}} i premeu {{ui:Take column loads from the Analysis}}: cada suport que es recolza sobre una sabata es converteix en una càrrega de pilar, a partir dels conjunts de servei i majorats que trieu. Un My positiu carrega més el costat +x de la sabata; un Mx positiu carrega més el costat −y.

## Què es comprova

A partir de les càrregues de servei, amb el pes propi de la sabata i el terraplè afegit:

- **Pressió sobre el terreny:** la pressió sota una sabata rígida. Dins del terç central tota la base és en contacte; fora d'ell, una part de la base s'aixeca i el pic és més alt. Una resultant fora de la base falla.
- **Lliscament:** el fregament multiplicat per la càrrega vertical, contra la força horitzontal.
- **Bolcament:** la distància de la resultant a la vora.
- **Assentament:** l'assentament elàstic de la pressió mitjana sobre un semiespai amb el mòdul que heu donat, al centre i en una cantonada (solució de Timoshenko i Goodier per a un rectangle flexible), comparat amb el límit. És una fita superior per a una sabata rígida i deixa de banda una capa de terreny de profunditat limitada, l'alleujament pel terreny excavat i la consolidació. Sense mòdul, mostra la pressió com a nota.

A partir només de les càrregues majorades de pilar (ACI 318-19):

- **Flexió** a la cara del pilar, amb l'armadura mínima (0.0018 per a barres de 420 MPa) i les barres que heu dibuixat.
- **Tallant unidireccional** a una distància d de la cara.
- **Punxonament** a d/2 al voltant de cada pilar, amb el moment del pilar. Per a un pilar prop d'una vora, la secció crítica es talla per la vora de la sabata (tres costats a una vora, dos en una cantonada, ACI 318-19 22.6.4.1 i el αs més petit de la Taula 22.6.5.2), i el moment respecte al centre de la pròpia secció inclou el desplaçament de la càrrega.
- **Ancoratge** de les barres més enllà de la cara del pilar, rectes o amb els seus ganxos.
- **Cantell** per sobre de les barres inferiors (150 mm).

Una sabata combinada o una llosa es considera rígida, i el tallant i el moment surten de l'estàtica en seccions que travessen tot l'ample.

## Una llosa flexible sobre molles

Activeu {{ui:Analyse this footing as a flexible mat on springs}} quan la sabata porti moltes columnes i la sabata rígida sigui massa grollera. La sabata es converteix en una placa d'elements de quatre nodes sobre un llit de molles (el {{ui:ks}} que heu escrit, concentrat als nodes), i la càrrega de cada pilar es reparteix entre els nodes de la seva pròpia petjada. Una segona taula dona la màxima pressió del terreny i l'assentament (i la diferència entre el més gran i el més petit), el moment flector en cada direcció amb l'acer que necessita, la tracció a la part superior comparada amb la resistència del formigó sense armar (una sabata no té barres superiors), el tallant unidireccional a d des dels pilars i el punxonament sobre la pressió de les pròpies molles. La malla es refina fins que un pilar té tres elements d'ample; una llosa gran triga uns quants segons. El pes propi de la llosa i el terreny que hi ha a sobre es cancel·len i es deixen de banda.

Totes les comprovacions que fallen són al tauler {{ui:Problems}} amb la seva clàusula.

## Grups de pilots i murs de contenció

{{ui:Add a pile group}} posa una quadrícula de pilots sota un encepat rígid: escriviu la càrrega i els moments, i la càrrega que pot suportar un pilot a compressió i a tracció (els valors del disseny de pilotatge, no d'aquesta pestanya). La reacció de cada pilot és P/n més la seva part dels moments (mètode elàstic), i es comproven la compressió màxima i qualsevol tracció.

{{ui:Add a retaining wall}} comprova un mur de consola sobre un rebliment de nivell horitzontal, per metre: pressió activa de Rankine, bolcament respecte al peu, lliscament i pressió a la base. La pressió passiva davant del peu es deixa de banda. El vostre assistent pot fer les mateixes comprovacions amb `pile_group_check` i `retaining_wall_check`.

Els grups de pilots, els murs i la comutació de la llosa flexible es desen al fitxer del model, i una comprovació fallida és a {{ui:Problems}}.
