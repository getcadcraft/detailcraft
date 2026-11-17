---
title: Comprova les barres d'acer segons un codi de disseny
summary: Genereu combinacions de càrregues segons ASCE 7 o EN 1990, comproveu cada perfil d'acer en doble T segons AISC 360 o EN 1993-1-1, i vegeu quina part de la capacitat utilitza cada barra. És una ajuda fins que un enginyer l'hagi revisada.
keywords: disseny, comprovació de disseny, disseny d'acer, utilització, capacitat, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocodi, combinacions de càrregues, LRFD, Annex Nacional, vinclament, vinclament lateral-torsional, tall, flexió, interacció, estructural, estudiants, enginyer
from: 66b6d545
---

Després d'executar l'anàlisi, el bloc {{ui:Design checks}} de la pestanya {{ui:Analysis}} converteix les seves forces en un veredicte per a cada barra d'acer: quina part de la capacitat utilitza la combinació més desfavorable.

:::warning
És una **ajuda fins que un enginyer l'hagi revisada**. Només utilitza forces de primer ordre (sense efectes de segon ordre), no comprova la torsió, ni les parts esveltes (classe 4), ni les formes soldades, ni les connexions, i deixa fora el que no pot comprovar i ho indica. No substitueix la comprovació d'un enginyer, i els seus resultats no són un segell.
:::

## Trieu un codi

{{ui:Design code}} es desa amb el model; trieu una de dues famílies:

- **ASCE 7 + AISC 360** (EUA, LRFD): les combinacions de càrregues de l'ASCE 7-16 §2.3.1 i les comprovacions de barres de l'ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocodi): les combinacions de l'EN 1990 (equació 6.10, o 6.10a i 6.10b) i les comprovacions de barres de l'EN 1993-1-1.

Després, trieu la {{ui:Steel grade}} (A992, A36 i altres; o S235 a S450, amb el límit elàstic inferior per sobre de 40 mm).

## Genereu les combinacions

Doneu a cada cas de càrrega el seu **tipus** (permanent, sobrecàrrega d'ús, sobrecàrrega de coberta, neu, vent, sísmica) a la llista de casos, i després premeu {{ui:Make combinations}}. DetailCraft escriu les combinacions del codi com a combinacions dels vostres casos: totes les combinacions de resistència que el codi indica per als tipus que teniu, i les combinacions de servei per a la fletxa. Les que heu escrit vosaltres es mantenen; no es comproven amb el codi. Un cas de tipus {{ui:Other}} no es combina.

Per a l'Eurocodi, els factors són els **valors recomanats** de l'annex A1 de l'EN 1990 (γG 1.35, γQ 1.5, els valors ψ de les càrregues d'ús, neu i vent) i de l'EN 1993-1-1 (γM0 = γM1 = 1.0). L'Annex Nacional del vostre país en modifica alguns: obriu {{ui:National Annex values}}, escriviu els vostres i torneu a generar les combinacions. Es desen al model.

## Comproveu les barres

Premeu {{ui:Check members}}. Per a cada perfil en doble T d'acer, la taula mostra la seva **utilització** (demanda sobre capacitat: 100 % és el límit), si passa, quina comprovació és la determinant i quina combinació. Les barres es pinten al model: blau si és poc utilitzada, verd cap a la meitat, ocre a prop del límit, vermell per sobre i gris si no està comprovada. Feu clic al nom d'una barra per seleccionar-la.

Les comprovacions, amb l'article que segueix cadascuna (apareixen a l'{{ui:Report (PDF)}}):

- tracció, compressió amb vinclament per flexió i per torsió, flexió al voltant dels dos eixos amb vinclament lateral-torsional, tall, i flexió amb força axial;
- fletxa de les combinacions de servei enfront del {{ui:Límit de fletxa}} que establiu (L/360 per començar; un valor del projecte, no un valor del codi).

**Longituds.** La longitud arriostrada és una part de cada tram analitzat (1 = sense arriostrar); els arriostraments es consideren equidistants a partir de l'inici. Els factors K multipliquen la longitud per al vinclament. Un nus on arriba una altra barra divideix una barra, i cada tram es comprova amb la seva pròpia longitud, com a arriostrada en aquell punt.

## Què no es comprova

Una barra mostra **no comprovada**, amb el motiu, en lloc d'un número, quan la seva secció no és un perfil en doble T que les comprovacions coneixen (tubs, cantoneres, UPN), quan és una forma personalitzada (soldada), o quan una part és esvelta (AISC) o de classe 4 (Eurocodi) a flexió. Una part esvelta a compressió deixa fora les comprovacions de compressió, i la barra apareix com *passa, parcialment comprovada*. Tampoc no està implementat: efectes de segon ordre, torsió, vinclament per tall combinat amb flexió, connexions, fatiga, incendi i detallat sísmic. Els elements de formigó i les càrregues sísmiques tenen [les seves pròpies comprovacions](topic:concrete-and-seismic). Vegeu [Encara no implementat](topic:not-built-yet).

## L'informe

{{ui:Report (PDF)}} i {{ui:Report (CSV)}} incorporen les taules de disseny quan ja heu fet la comprovació: les edicions dels codis, la configuració i els valors de l'Annex Nacional, la utilització per barra, cada article utilitzat, i, per a cada barra, la demanda, la capacitat i la utilització de cada comprovació en la seva combinació determinant.
