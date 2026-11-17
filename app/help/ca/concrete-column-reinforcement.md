---
title: Armadura d'un pilar de formigó rectangular
summary: Un exemple resolt de detallat d'un pilar de formigó rectangular a DetailCraft: col·locar-lo, donar-li barres longitudinals i cèrcols, llegir les comprovacions, la solapa de sobre i les marques de les barres, i dibuixar-ne el full de taller.
keywords: pilar de formigó, pilar rectangular, armadura de pilar, barres longitudinals, barres verticals, cèrcols, estreps, cèrcols transversals, solapa, empalmament, barres d'arrencada, quantia d'acer del pilar, 1 per cent, 8 per cent, separació de cèrcols, ACI 318-19 25.7.2, EN 1992-1-1 9.5, plànol de taller, marques de barra, 8C1, 3C2
from: aee2a3ca
---

Aquest tema porta un pilar quadrat des de zero fins a un detall comprovat, dibuixat i amb la seva planificació. Les regles generals per a bigues, llosses i murs són a [Detallat de formigó armat](topic:reinforced-concrete); això és la part del pilar, amb números que podeu reproduir.

:::warning
DetailCraft detalla les barres que li doneu. No les dimensiona. Les barres de sota són valors inicials per a l'exemple, no una recomanació: l'enginyer responsable escull la mida, el nombre i la separació.
:::

## Què és un pilar aquí

Un pilar rectangular té una amplada (al llarg de la seva x local) i una fondària transversal (al llarg de la seva y local), un recobriment net fins als cèrcols, barres longitudinals a cada cara i cèrcols tancats. En girar-lo es gira tot; les cares es mantenen com a "cara d'amplada" i "cara de fondària".

- Les barres longitudinals es donen com el nombre a una cara d'amplada i el nombre a una cara de fondària. Les barres de cantonada compten a totes dues, així que 3 i 3 fan 8 barres; 4 i 4 en fan 12.
- Els cèrcols són rectangles tancats amb dos ganxos en una cantonada, de 135° o 90°. El primer cèrcol és a una distància fixada per sobre del forjat (i per sota del següent), les zones d'extrem tenen una separació més estreta, i el mig en té una de més ampla.
- Què fan les barres a dalt: continuar i solapar amb les barres de sobre, girar cap endins amb ganxos de 90° dins del forjat, o aturar-se sota la part superior.

## El pilar resolt

Un pilar de 400 × 400 mm, 3600 mm entre el forjat de sobre i el de sota, barres longitudinals #8, cèrcols #3, recobriment net de 40 mm, f'c 28 MPa, fy 420 MPa, ACI 318-19, interior.

1. Obriu la pestanya {{ui:Formigó}} i configureu les línies de quadrícula i els nivells on es recolza el pilar (tauler de l'esquerra).
2. A {{ui:Afegeix per quadrícula}}, trieu {{ui:Pilar de formigó}}, trieu la intersecció de quadrícula i els dos nivells, definiu {{ui:Amplada (mm)}} i {{ui:Profunditat transversal (mm)}} a 400 i trieu {{ui:Afegeix}}.
3. Al tauler {{ui:Propietats}} definiu:
   - {{ui:Recobriment net (mm)}} 40;
   - {{ui:Barres longitudinals}} #8, {{ui:Barres en una cara d'amplada}} 3, {{ui:Barres en una cara de profunditat}} 3;
   - {{ui:Cèrcols}} #3, {{ui:Ganxos}} 135°, {{ui:Espaiament entre (mm)}} 300, {{ui:Longitud de la zona d'extrem (mm)}} 600, {{ui:Espaiament a les zones d'extrem (mm)}} 150, {{ui:Primer des de la cara (mm)}} 50;
   - {{ui:Barres a dalt}} {{ui:Continuar i solapar amb les barres de sobre}}.

Cada canvi és un pas per desfer.

### El que obteniu

| Element | Resultat |
|---|---|
| Barres longitudinals | 8 barres #8 (un anell de 3 × 3), cadascuna de 4375 mm: el pilar de 3600 mm més una solapa de 775 mm per sobre |
| Solapa | 757 mm necessaris per a una solapa a compressió (ACI 318-19 25.5.5.1, fy 420), 775 mm donats: la necessitat arrodonida al següent múltiple de 25 mm |
| Cèrcols | 17 cèrcols #3, cadascun amb una longitud de tall d'uns 1359 mm, separats 150 mm en les dues zones d'extrem de 600 mm i 300 mm entre elles |
| Quantia d'acer | 2.5 % de la secció bruta (límits d'1 % a 8 %, ACI 318-19 10.6.1.1) |
| Separació lliure de les barres | 112 mm (en calen almenys 40 mm, ACI 318-19 25.2.3) |
| Separació de cèrcols | 300 mm (permesos 400 mm: el menor de 16 diàmetres de barra, 48 diàmetres de cèrcol i la cara més petita, ACI 318-19 25.7.2.1) |
| Mida del cèrcol | #3 (permesa fins a 9.5 mm, ACI 318-19 25.7.2.2) |

Totes aquestes dades són a la llista {{ui:Comprovacions}} de l'element; la solapa també és a {{ui:Solapaments i ancoratges}}.

## Cèrcols transversals

Amb un sol cèrcol perimetral, només queden subjectes les barres de cantonada. L'ACI 318-19 25.7.2.3 permet que una barra central d'una cara quedi sense subjecció si és a menys de 150 mm lliures d'una barra de cantonada. Amb 3 barres en una cara, com a l'exemple, es compleix. Amb 4 o més barres en una cara no es compleix, i DetailCraft ho diu com a avís ({{ui:Comprovacions}} i Problemes): calen "cèrcols transversals". **Els cèrcols transversals encara no es dibuixen**: afegiu-los al plànol a mà, o trieu menys barres a la cara.

Per a l'EN 1992-1-1, DetailCraft comprova la mida de la barra (almenys 8 mm), el nombre de barres (almenys 4), l'àrea d'acer (de 0.2 % a 4 % de la secció), la separació lliure i la separació d'estreps (9.5.2 i 9.5.3).

## La solapa, la sabata i el pilar de sota

- On **hi ha una sabata del model sota el pilar**, el pilar fa solapa amb les barres d'arrencada de la sabata, i també es comprova aquesta solapa.
- On **hi ha un altre pilar del model sota**, fa solapa amb les barres d'aquell pilar.
- Doneu la vostra {{ui:Longitud de solapament (mm, 0 = segons calgui)}} per substituir-la; una més curta del necessari és un problema i es marca amb * a la taula.
- Per defecte s'usen solapes a compressió ({{ui:Solapament a compressió}} a la configuració); trieu {{ui:Solapament a tracció}} quan el pilar pugui estar a tracció.

## Marques, planificació i el full de taller

Les barres idèntiques comparteixen una marca: les barres longitudinals del pilar de dalt són 8C1, els seus cèrcols 17C2 (primer el número, després la lletra del tipus C per a pilar i el número correlatiu). Apareixen a la pestanya {{ui:Quadre de doblegat}}, amb la longitud de tall i el pes, i al CSV de {{ui:Sortida}} › {{ui:Més}} › {{ui:Doblegat}}.

Trieu {{ui:Plànol de taller}} al costat del pilar per obtenir un full amb el pilar en alçat (cada barra, la seva marca, les zones de cèrcols i la solapa acotades) i una secció al mig, seguit del full de doblegat de barres. Desa {{ui:Aquest full en PDF}}.

## Què no fa

- Pilars rodons i espirals, i pilars que no són rectangulars: encara no implementats.
- Cèrcols de cantonada i transversals dins de la secció, i detallat sísmic (ACI 318-19 capítol 18): encara no implementats.
- Empalmaments en posicions que trieu, o escalonats: totes les barres fan solapa en una mateixa secció.
- Si les barres basten per a la càrrega: això és el disseny de l'enginyer.
