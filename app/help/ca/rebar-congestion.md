---
title: Mapa de congestió de l'armadura
summary: Veure com de justa deixa l'armadura a cada sabata perquè el formigó hi pugui arribar, amb l'àrid i el vibrador que indiqueu.
keywords: armadura, congestió, espaiat, espaiat lliure, col·locació del formigó, àrid, vibrador, barres d'espera, ganxos, sabata, malla
from: 40d029e6
---

La pestanya {{ui:Congestió}} dibuixa un mapa de calor de cada sabata vista des de dalt. El blau clar és lliure; el groc i el taronja s'estan estretint; el vermell és més estret del que demanen les barres. Les cel·les fosques són les mateixes barres.

## Què mesura el mapa

El formigó baixa a través de l'acer capa a capa i pot moure's lateralment entre les capes. Per això, a cada punt, el mapa pren l'escletxa lliure més estreta de qualsevol capa: entre les barres de la malla inferior, entre la capa de barres següent, i entre les cames dels ganxos de les barres d'espera a la part superior. Les barres d'espera travessen totes aquestes capes.

## Què compta com a estret

La necessitat és el més gran entre 25 mm i el diàmetre de la barra (ACI 318-19 25.2.1), o, per a barres BS 4449, el més gran entre el diàmetre de la barra i 20 mm (EN 1992-1-1 8.2). Hi ha dues caselles que la fan pujar:

- {{ui:Àrid més gran}}: la necessitat passa a ser 4/3 de la mida de l'àrid (ACI) o l'àrid més 5 mm (EN).
- {{ui:Capçal del vibrador}}: la necessitat és com a mínim el diàmetre del capçal.

Totes dues comencen a 0, que vol dir desconegut: DetailCraft no coneix la vostra dosificació ni la vostra bomba.

## Problemes

Una sabata amb un punt més estret que la necessitat apareix al tauler {{ui:Problemes}} amb l'obertura trobada i l'obertura necessària. {{ui:Selecciona}} al costat d'un mapa selecciona la sabata.

El mapa no veu els estreps, els acoblaments, els conductes ni les barres del propi pilar.
