---
title: Staaltrapgenerator
summary: 'n Staaltrap vanaf die vloer-tot-vloer-hoogte, die loop en die breedte: die stighoogte en aantrede volgens 'n reëlstel wat jy kies, bordes, leuning en baluste, werkswinkeltekeninge en 'n snylys met gewigte.
keywords: staaltrap, trapgenerator, trapboom, trede, geruite plaat, rooster, gevoude pan, bordes, handrel, baluste, stighoogte, aantrede, osha, ibc, approved document k, snylys, gewigte, werkswinkeltekening
from: a4f0a985
---

Die trapgenerator maak 'n hele staaltrap uit 'n paar getalle: die trapbome, die trede, bordes wanneer die vlug te hoog is, handrelings met palings en baluste, die bevestigingsgate in die trapbome, 'n snylys met gewigte, en die werkswinkeltekeninge. Dit begin vanaf die {{ui:Stair}}-instrument, soos die gewone trap (sien Trappe), met een skakelaar bygevoeg.

## Plaas 'n staaltrap

1. Kies {{ui:Stair}} in die {{ui:Place}}-groep, of druk {{key:S}}.
2. Aan die regterkant, merk {{ui:Use the steel stair generator}}.
3. Kies die **reëlstel** vir waar die trap gebou word, die **stighoogte** (vloer tot vloer; 0 = op tot die volgende vlak), die **beskikbare loop** (0 = laat die reël besluit), die **vrye breedte** en die **tredetipe**: geruite plaat, rooster of gevoude plaatpan.
4. Stel die trapboomprofiel, die bordes (volgens die reël, of 'n getal), die handrelings (aan albei kante, aan een kant, of geen), die hoogte van die leuning en die spasie van die baluste.
5. Klik op 'n rasterkruising: dit is die voet van die eerste optrede.

Kies die trap (klik op 'n trapboom, trede of leuning) om enige instelling te verander; die eienskappe wys die optrede, aantrede, helling, vlugte en bordes, die staal daarin, die snylys en die reëlstel se bronne.

## Die reëlstelle

Die reëlstel beperk die vorm van die trap: die stighoogte en aantrede, 2 × optrede + aantrede, die helling, die bordes, die hoogte van die leuning en die grootste opening. DetailCraft bied die onderstaandes aan; die streek is 'n instelling, nie 'n raaiskoot nie. Maak **Waar hierdie reëlstel se getalle vandaan kom** oop in die eienskappe: elke getal noem sy bron en sê hoe goed dit nagegaan is.

- **International Building Code 2021**: optrede 4 tot 7 in., trede minstens 11 in., leunings 34 tot 38 in. Die 12 vt-limiet tussen bordes word as *nie gelees nie* gewys, en die leuningsgetalle as gelees uit handleidings wat die kode aanhaal: bevestig hulle voor jy daarop staatmaak.
- **OSHA 29 CFR 1910.25 en 1910.29** (industriële standaardtrappe): 30° tot 50°, optrede hoogstens 9,5 in., trede minstens 9,5 in., minstens 22 in. wyd, bordes so wyd as die trap en 30 in. diep, 'n boonleuning wat as die handleuning gebruik word 36 tot 38 in. Hierdie is in die regulasie self gelees.
- **Approved Document K 2013, Engeland** (algemene toegang- en nutstrappe): die stighoogte- en aantredeverskeidenhede en 2 × optrede + aantrede 550 tot 700 mm, gelees uit die regeringsverslag wat dit tabelleer. Die dokument gee DetailCraft geen leuninghoogte nie, dus word die hoogte wat jy stel gebruik en die Probleme-lys sê so.

'n Reëlstel wat nie hier is nie, word nie geraai nie: die trap volg dan die gewone 600 tot 650 mm-gemaksreël en sê dit het geen reël nie.

## Wat dit uitwerk

- **Optrede en aantrede.** Die minste optrede waarvan 2 × optrede + aantrede in die middel van die reël se verskeidenheid val, sonder dat die aantrede onder die reël se minimum val. Met 'n loop gegee, is die aantrede die loop oor die trede, en enigiets buite die reël word gesê.
- **Vlugte en bordes.** 'n Vlug hoër as wat die reël toelaat, word met 'n bordes so wyd as die trap en nie minder as die reël se minimum verdeel; jy kan ook vir bordes vra. 'n Bordes is 'n raam van twee sybalke en twee dwarshoeke onder 'n dekking, op twee palings.
- **Trede.** Geruite plaat is 'n gesweisde plaat (standaard 6 mm; die patroon word nie by die gewig gereken nie). 'n Gevoude plaatpan het 'n omslag by die neus en word deur die trapboom se lyf geboute: twee gate 2 mm groter as die bout op 0,3 en 0,7 van die diepte. Rooster word as die plaat van gelyke gewig geteken (draagstaafdiepte × dikte ÷ afstand); die dwarsstawe en bande word nie gereken nie, en die snylys sê so.
- **Leunings.** 'n Pyp-boonleuning op palings langs elke vlug en elke bordes, en 'n baluskloof waardeur geen bol groter as die reël se opening kan gaan nie (hoogstens 100 mm by verstek).

## Tekeninge, snylys, uitvoer

- Die vlug is een samestelling; die leunings is nog een (albei kante is dieselfde samestelling, twee keer gemaak). Elk het sy samestellingstekening, en die trapboom se tekening wys sy gate.
- Die **trapblad** (ST-…) wys elke vlug se trapboom reguit met die gatstasies vanaf die onderste ent geskryf, en die trededetail: snit, neus, omslag en die eindflens met sy gate.
- {{ui:Cut list and weights}} in die eienskappe lys elke profiel en lengte met hoeveelhede en kilogram; {{ui:Download the cut list (CSV)}} stoor dit.
- Alles gaan na die materiaallys, NC-lêers en IFC as gewone onderdele (IfcMember, IfcColumn, IfcPlate).

## Goed om te weet

- Dit is 'n beginpunt, nie 'n ontwerp nie. Niks word vir sterkte of deurbuiging gekontroleer nie; die reëlstel beperk net die vorm.
- Trapboomente teen die vloere word vierkant gesny en nie gedetailleer nie; paalpale van bordes staan op die vloer onder en het geen basisplate nie.
- Die trap as een element in BimCraft plaas is nog nie gekoppel nie.
