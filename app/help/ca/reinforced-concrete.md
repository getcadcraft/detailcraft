---
title: Detalla bigues, pilars, lloses i parets de formigó armat
summary: Afegir per graella bigues, pilars, lloses i parets de formigó, definir-hi barres, estreps i lligadures, comprovar solapaments i ancoratges segons ACI 318-19 o EN 1992-1-1, i fer plànols de taller i quadres de doblegat.
keywords: formigó armat, armadura, biga, pilar, llosa, paret, estreps, lligadures, ganxos, solapaments, solapament, longitud d'ancoratge, ld, ldh, lbd, recobriment, espaiat, riostres, obertures, malles, marques de barra, quadre de doblegat, bbs, plànol de taller, ACI 318, EN 1992, Eurocodi 2, IfcReinforcingBar, importació IFC
from: 3835b7ec
---

La pestanya {{ui:Formigó}} que hi ha sota la vista detalla les barres de les bigues, els pilars, les lloses i les parets de formigó. Vosaltres en doneu les mides i les barres; DetailCraft col·loca cada barra, la numera, comprova els solapaments, l'ancoratge, el recobriment i l'espaiat segons la clàusula d'on provenen, i la dibuixa.

:::warning
DetailCraft detalla les barres que li doneu. No les dimensiona. Cada resultat és per a la comprovació d'un enginyer.
:::

## Obrir la pestanya Formigó

Trieu la pestanya {{ui:Formigó}} sota la vista. En una disposició de cinta, {{ui:Formigó}} és a la pestanya {{ui:Modelatge}}, al costat de {{ui:Sabata}}. Amb la línia d'ordres de l'estil de dibuix, escriviu {{cmd:CONCRETE}}.

## Afegir un element per graella

Els elements de formigó es col·loquen sobre les línies de graella i els nivells del model, de manera que primer cal configurar-los (tauler de l'esquerra).

1. A {{ui:Afegeix per quadrícula}}, trieu l'{{ui:Element}}: {{ui:Biga de formigó}}, {{ui:Pilar de formigó}}, {{ui:Llosa}} o {{ui:Paret}}.
2. Trieu les línies de graella i els nivells:
   - una biga va d'una intersecció de graella a una altra, amb la part superior al nivell;
   - un pilar es col·loca en una intersecció, d'un nivell a un altre;
   - una llosa omple el rectangle entre dues línies de graella numerades i dues de lletres, amb la part superior al nivell;
   - una paret va al llarg de la seva línia central d'una intersecció a una altra, d'un nivell a un altre.
3. Indiqueu-ne la mida i trieu {{ui:Afegeix}}. L'element queda seleccionat i els seus camps s'obren al tauler {{ui:Propietats}}.

Cada element comença amb barres que són valors de partida, no de disseny: canvieu-les per les de l'enginyer.

## Canviar les barres

Seleccioneu l'element (a la vista, o pel seu nom a la pestanya {{ui:Formigó}}). El tauler {{ui:Propietats}} mostra:

| Element | Què s'hi defineix |
|---|---|
| Biga | Amplada, profunditat, recobriment net; barres superiors i inferiors (mida, nombre, recta o ganxo de 90° als extrems); barres laterals; estreps (mida, ganxos de 135° o 90°, la distància del primer a la cara del suport, la longitud de la zona d'extrem i el seu espaiat, i l'espaiat de la resta); longituds de suport; longituds de solapament |
| Pilar | Amplada, profunditat, gir, recobriment; barres longitudinals a cada cara; lligadures com els estreps; què fan les barres a la part superior (solapament amb el pilar de sobre, ganxo a la llosa o acabar-se) |
| Llosa | Gruix, mida, superior, recobriments; malla inferior i malla superior en cada direcció (mida i espaiat); barres en U al voltant de les vores; barres de riostra; obertures |
| Paret | Gruix, recobriment, una o dues capes, barres horitzontals i verticals, barres en U als extrems, barres verticals solapades cap amunt o no, barres de riostra, obertures |

Cada canvi és un pas per desfer. Un canvi que no es pot construir es rebutja i la barra d'estat n'explica el motiu, per exemple "L'obertura no hi cap dins de l'element amb el seu recobriment."

Els estreps i les lligadures són tancats, amb els dos ganxos en un mateix cantó. Les barres d'una biga entren en un pilar de formigó als extrems fins a la cara més allunyada del pilar, descomptat el recobriment; on no hi ha pilar, indiqueu la {{ui:Longitud de suport a l'inici (mm)}} i la de l'extrem final.

## Solapaments i ancoratge

Les barres més llargues que la {{ui:Longitud de barra comercial (mm)}} (12000 per començar) es tallen en trossos de la mateixa longitud, solapats. La taula {{ui:Solapaments i ancoratge}} llista cada solapament i cada ancoratge: què cal, la clàusula amb els seus termes, i què té el detall.

- Una longitud de solapament de 0 vol dir "segons calgui": la longitud que dona el codi, arrodonida amunt a 25 mm.
- Escriviu la vostra pròpia longitud de solapament per utilitzar-la en lloc d'aquesta. Si és més curta de la necessària, és un problema (vegeu més avall), i a la taula es marca amb *.
- L'ancoratge es mesura des de la cara del suport fins a l'extrem de la barra dins del suport. Una biga sense suport conegut ho indica en lloc de comprovar-lo.
- Un pilar que es recolza en una sabata solapa amb les barres d'espera de la sabata, i en un altre pilar, amb les barres d'aquest: el seu solapament també es comprova.

**ACI 318-19** (SI): barres rectes en tracció 25.4.2.3 (la taula, amb ψt, ψe, ψg, λ), ganxos normalitzats 25.4.3.1 (ψr 1.6 i ψo 1.25 si no se'n coneix el valor), barres en compressió 25.4.9.2, solapaments en tracció 25.5.2.1 (classe B, o classe A a la configuració), solapaments en compressió 25.5.5.1.

**EN 1992-1-1**: ancoratge 8.4.4 amb fbd de 8.4.2 (adherència bona o dolenta), solapaments 8.7.3 amb α6 per a cada barra solapada en una mateixa secció. γc, γs i αct comencen amb els valors recomanats; definiu-hi els de l'annex nacional.

## Les comprovacions

Cada comprovació que falla apareix al tauler de Problemes (font {{ui:Comprovacions de l'armadura}}), i a la llista {{ui:Comprovacions}} de l'element:

| Comprovació | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Recobriment | Taula 20.5.1.3.1, segons l'exposició | Recobriment mínim d'adherència, Taula 4.2 (el recobriment de durabilitat l'heu de donar vosaltres) |
| Espai lliure entre barres | 25.2.1 (bigues, lloses, parets), 25.2.3 (pilars) | 8.2 (2) |
| Espaiat dels estreps | 9.7.6.2.2 | 9.2.2 (6) |
| Armadura mínima de biga | 9.6.1.2 | 9.2.1.1 (1) |
| Barres laterals de biga de més de 900 mm de profunditat | 9.7.2.3 | no es comprova |
| Quantia d'acer del pilar, nombre de barres | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Lligadures: espaiat, mida, travesses | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Espaiat de llosa, armadura mínima | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Espaiat de paret, armadura mínima, dues capes | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Solapaments, ancoratge | com més amunt | com més amunt |

La mida de l'àrid no es coneix, de manera que l'espai lliure es comprova sense tenir-la en compte.

## Obertures, riostres i barres de vora

Trieu {{ui:Afegeix una obertura}} sota una llosa o paret seleccionada i indiqueu-ne la posició i la mida. Les barres que l'obertura creua s'aturen a una distància de recobriment de la seva vora. Les barres de riostra s'afegeixen a cada costat, a la mateixa capa, amb la meitat de l'àrea de les barres tallades, i una longitud d'ancoratge més enllà de l'obertura. Aquesta és la regla inicial de DetailCraft, no una clàusula de cap norma: canvieu les {{ui:Riostres}} per les de l'enginyer. No s'hi afegeixen barres de cantonada.

Les barres en U al voltant de les vores lliures d'una llosa i als extrems d'una paret tenen cames d'una longitud de solapament.

## Marques de barra i quadre de doblegat

Les barres idèntiques comparteixen una marca: les sabates conserven les marques F (5F1), les bigues tenen B, els pilars C, les lloses S i les parets W (7B1, 8C1, 4S2). La pestanya {{ui:Quadre de doblegat}} i el seu CSV ara llisten cada barra de l'estructura, primer les de les sabates. {{ui:Sortida}} › {{ui:Més}} › {{ui:Doblegat}} el descarrega.

## Plànols de taller

Trieu {{ui:Sortida}} › {{ui:Més}} › {{ui:Plànols d'armat}}, {{ui:Plànols d'armat}} a la pestanya {{ui:Formigó}}, o {{ui:Plànol de taller}} al costat d'un element. Cada element té un full amb un alçat (una planta, per a una llosa) que mostra cada barra i la seva marca, les zones d'estreps o lligadures i els solapaments acotats, i una secció al mig. Després, els fulls de doblegat de barres enumeren cada marca amb un croquis de la seva forma, les seves dimensions, la quantitat, la longitud de tall i el pes.

Els fulls es fan a partir del model cada vegada, i de nou després de cada canvi mentre la finestra és oberta: el bloc del títol porta la referència del model. Deseu {{ui:Aquest full en PDF}} o {{ui:Tots els fulls en PDF}}.

## Barres d'un fitxer IFC

{{ui:Fitxer}} › {{ui:Importa IFC}} ara llegeix IfcReinforcingBar: el disc que recorre el seu eix central torna com a cames rectes i doblegs, amb el seu diàmetre, la seva marca i l'element que la conté. Les barres es guarden tal com s'han llegit (no es converteixen en regles d'una biga o d'una llosa), es mostren a la vista, apareixen al quadre de doblegat i es tornen a escriure amb l'exportació IFC. L'informe d'importació indica quantes barres s'han llegit, de quines mides, en quants elements, i què s'ha deixat fora i per què.

Una biga, un pilar, una llosa o una paret d'aquest fitxer que tingui barres, o el material de la qual sigui formigó, no es considera acer; l'informe ho indica. L'exportació IFC de DetailCraft porta la definició de cada element de formigó, de manera que torna com a ell mateix, i les seves barres es tornen a fer a partir d'ella.

:::note
La lectura dels fitxers propis d'un programa de disseny d'estructures (que no siguin IFC) encara no està implementada: exporteu-los en IFC des d'aquell programa.
:::

## L'exportació IFC

Les bigues, els pilars, les lloses de formigó (amb obertures) i les parets surten com a IfcBeam, IfcColumn, IfcSlab i IfcWall, cadascun amb les seves barres com a IfcReinforcingBar (barres principals, lligadures per als estreps i per als cèrcols, barres de vora) agregades a ell. Cada barra és un disc que recorre el seu eix central, amb arcs reals als doblegs, i porta la seva marca i la seva longitud de tall.
