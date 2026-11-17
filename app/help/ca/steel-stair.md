---
title: Generador d'escales metàl·liques
summary: Una escala metàl·lica a partir de l'alçada de planta a planta, el recorregut i l'amplada: el desnivell i la fondària de petjada segons un joc de regles que trieu, replans, passamans i barrots, plànols de taller i llista de talls amb pesos.
keywords: escala metàl·lica, generador d'escales, limó, petjada, planxa estriada, reixa, safata plegada, replà, passamà, barrots, desnivell, fondària de petjada, osha, ibc, approved document k, llista de talls, pesos, plànol de taller
from: a4f0a985
---

El generador d'escales fa una escala metàl·lica sencera a partir de pocs valors: els limons, les petjades, els replans quan el tram és massa alt, els passamans amb muntants i barrots, els forats de fixació als limons, una llista de talls amb pesos i els plànols de taller. Parteix de l'eina {{ui:Escala}}, igual que l'escala senzilla (vegeu Escales), amb un interruptor més.

## Col·loca una escala metàl·lica

1. Trieu {{ui:Escala}} al grup {{ui:Col·loca}}, o premeu {{key:S}}.
2. A la dreta, marqueu {{ui:Usa el generador d'escales metàl·liques}}.
3. Trieu el **joc de regles** per al lloc on es construeix l'escala, el **desnivell** (de planta a planta; 0 = fins al següent nivell), el **recorregut disponible** (0 = deixa que decideixi la regla), l'**amplada lliure** i el **tipus de petjada**: planxa estriada, reixa o safata de planxa plegada.
4. Definiu la secció del limó, els replans (segons la regla, o un nombre), els passamans (a banda i banda, a una banda, o cap), l'alçada del passamà i la separació dels barrots.
5. Feu clic en una intersecció de la quadrícula: és el peu de la primera contrapetjada.

Seleccioneu l'escala (feu clic en un limó, una petjada o un passamà) per canviar qualsevol paràmetre; les propietats mostren les contrapetjades, la fondària de petjada, la inclinació, els trams i els replans, l'acer que hi ha, la llista de talls i les fonts del joc de regles.

## Els jocs de regles

El joc de regles limita la forma de l'escala: el desnivell i la fondària de petjada, 2 × contrapetjada + fondària de petjada, la inclinació, el replà, l'alçada del passamà i l'obertura més gran. DetailCraft n'ofereix els que hi ha a continuació; la regió és un paràmetre, no una suposició. Obriu **D'on surten els números d'aquest joc de regles** a les propietats: cada número indica la seva font i diu com de bé s'ha comprovat.

- **International Building Code 2021**: contrapetjada de 4 a 7 in., petjada d'almenys 11 in., passamans de 34 a 38 in. El límit de 12 ft entre replans es mostra com a *no llegit*, i els números dels passamans com a llegits en documents que citen el codi: confirmeu-los abans de confiar-hi.
- **OSHA 29 CFR 1910.25 i 1910.29** (escales industrials normalitzades): de 30° a 50°, contrapetjada com a màxim 9.5 in., petjada d'almenys 9.5 in., d'almenys 22 in. d'amplada, replans tan amples com l'escala i 30 in. de fondària, un passamà superior usat com a passamà de 36 a 38 in. Es van llegir al mateix reglament.
- **Approved Document K 2013, Anglaterra** (escales generals d'accés i d'ús): els rangs de desnivell i de fondària de petjada, i 2 × contrapetjada + fondària de petjada de 550 a 700 mm, llegits a l'informe encarregat pel govern que els tabula. El document no dona a DetailCraft cap alçada de passamà, de manera que s'usa l'alçada que definiu i la llista de Problemes ho diu.

Un joc de regles que no és aquí no s'endevina: l'escala segueix aleshores la regla de confort simple de 600 a 650 mm i diu que no té cap regla.

## Què calcula

- **Contrapetjades i fondària de petjada.** Les mínimes contrapetjades amb què 2 × contrapetjada + fondària de petjada cau al mig del rang de la regla, sense que la fondària de petjada baixi del mínim de la regla. Amb un recorregut donat, la fondària de petjada és el recorregut entre les petjades, i es diu qualsevol cosa que quedi fora de la regla.
- **Trams i replans.** Un tram més alt del que permet la regla es parteix amb un replà tan ample com l'escala i no menys que el mínim de la regla; també podeu demanar replans. Un replà és un marc de dues bigues laterals i dues cantoneres transversals sota una coberta, sobre dos muntants.
- **Petjades.** La planxa estriada és una placa soldada (6 mm per defecte; el dibuix no s'afegeix al pes). Una safata de planxa plegada té un retorn al morro i es cargola a través de l'ànima del limó: dos forats 2 mm més grans que el cargol a 0.3 i 0.7 de la fondària. La reixa es dibuixa com la placa de pes equivalent (fondària de la barra portant × gruix ÷ pas); les barres transversals i les bandes no es compten i la llista de talls ho diu.
- **Passamans.** Un passamà superior de tub sobre muntants al llarg de cada tram i de cada replà, amb una separació de barrots per la qual no passi cap esfera més gran que l'obertura de la regla (100 mm com a màxim per defecte).

## Plànols, llista de talls, exportació

- El tram és un conjunt; els passamans són un altre (els dos costats són el mateix conjunt, fet dues vegades). Cadascun té el seu plànol de conjunt, i el plànol del limó mostra els seus forats.
- El **full de l'escala** (ST-…) mostra el limó de cada tram recte, amb les estacions dels forats escrites des de l'extrem inferior, i el detall de la petjada: secció, morro, retorn i l'ala d'extrem amb els seus forats.
- {{ui:Llista de talls i pesos}} a les propietats enumera cada secció i llargada amb quantitats i quilograms; {{ui:Baixa la llista de talls (CSV)}} la desa.
- Tot va a la llista de materials, als fitxers NC i a IFC com a peces normals (IfcMember, IfcColumn, IfcPlate).

## Coses a tenir en compte

- Això és un punt de partida, no un disseny. Res no es comprova per resistència ni per flexió; el joc de regles només limita la forma.
- Els extrems dels limons contra els forjats es tallen a escaire i no es detallen; els muntants dels replans reposen sobre el forjat inferior i no tenen plaques de base.
- Col·locar l'escala com a un sol element a BimCraft encara no està implementat.
