---
title: Comprova les barres d'acer segons un codi de disseny
summary: Fes les combinacions de càrregues segons ASCE 7 o EN 1990, comprova cada perfil en I d'acer segons AISC 360 o EN 1993-1-1, i veu quanta capacitat utilitza cada barra. Una ajuda fins que un enginyer l'hagi revisat.
keywords: disseny, comprovació de disseny, disseny d'acer, utilització, aprofitament, capacitat, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocodi, combinacions de càrregues, LRFD, Annex Nacional, vinclament, vinclament lateral-torsional, tallant, flexió, interacció, estructural, estudiants, enginyer
from: 15685c4e
---

Després d'executar l'anàlisi, el bloc {{ui:Comprovacions de disseny}} de la pestanya {{ui:Anàlisi}} converteix els seus esforços en un veredicte per a cada barra d'acer: quanta capacitat utilitza la combinació més desfavorable.

:::warning
És una **ajuda fins que un enginyer l'hagi revisat**. Fa servir només esforços de primer ordre (sense efectes de segon ordre), no comprova la torsió, les parts esbeltes (classe 4), els perfils soldats ni les connexions, i deixa fora el que no pot comprovar i ho diu. No substitueix la comprovació d'un enginyer, i els seus resultats no són un segell.
:::

## Trieu un codi

{{ui:Codi de disseny}} es desa amb el model; trieu una de les dues famílies:

- **ASCE 7 + AISC 360** (EUA, LRFD): les combinacions de càrregues de l'ASCE 7-16 §2.3.1 i les comprovacions de barres de l'ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocodi): les combinacions de l'EN 1990 (Eq. 6.10, o 6.10a i 6.10b) i les comprovacions de barres de l'EN 1993-1-1.

Després trieu la {{ui:Qualitat de l'acer}} (A992, A36 i altres; o S235 a S450, amb el límit elàstic inferior per sobre de 40 mm).

## Fer les combinacions

Assigneu a cada cas de càrrega el seu **tipus** (permanent, variable, sobrecàrrega d'ús de coberta, neu, vent, sísmic) a la llista de casos, i després premeu {{ui:Fes les combinacions}}. DetailCraft escriu les combinacions del codi com a combinacions dels vostres casos: totes les combinacions de resistència que el codi enumera per als tipus que teniu, i les combinacions de servei per a la fletxa. Les que hàgiu escrit vosaltres es mantenen; no es comproven amb el codi. Un cas de tipus {{ui:Altres}} no es combina.

Per a l'Eurocodi, els factors són els **valors recomanats** de l'annex A1 de l'EN 1990 (γG 1.35, γQ 1.5, els valors ψ de les càrregues d'ús, de neu i de vent) i de l'EN 1993-1-1 (γM0 = γM1 = 1.0). L'Annex Nacional del vostre país canvia alguns: obriu {{ui:Valors de l'Annex Nacional}}, escriviu els vostres i torneu a fer les combinacions. Es desen al model.

## Comprovar les barres

Premeu {{ui:Comprova les barres}}. Per a cada perfil en I d'acer, la taula mostra la seva **utilització** (demanda dividida per la capacitat: el 100 % és el límit), si compleix, quina comprovació regeix i quina combinació. Les barres es pinten al model: blau (poc utilitzada), verd (aproximadament la meitat), ocre (prop del límit), vermell (per sobre del límit), gris (no comprovada). Feu clic al nom d'una barra per seleccionar-la.

Les comprovacions, amb l'article que segueix cadascuna (són a l'informe):

- tracció; compressió amb vinclament per flexió i per torsió; flexió en els dos eixos amb vinclament lateral-torsional; tallant; i flexió amb esforç axial;
- la fletxa de les combinacions de servei comparada amb el {{ui:Límit de fletxa}} que definiu (L/360 com a punt de partida; és un valor del projecte, no del codi).

**Longituds.** La longitud arriostrada és una fracció de cada tram analitzat (1 = sense arriostrar); els arriostraments se suposen equidistants a partir de l'inici. Els factors K multipliquen la longitud per al vinclament. Una unió on arriba una altra barra divideix una barra, i cada tram es comprova per la seva pròpia longitud, com si estigués arriostrat en aquell punt.

## Què no es comprova

Una barra apareix **no comprovada**, amb el motiu, en lloc d'un número quan la seva secció no és una forma que les comprovacions coneguin (cantoneres, perfils en U; els tubs rectangulars i circulars es comproven quan les parets són compactes), quan és una forma a mida (soldada), o quan una part és esbelta (AISC) o de classe 4 (Eurocodi) a flexió. Una part esbelta a compressió deixa fora les comprovacions de compressió i la barra apareix com a *compleix, en part comprovada*. Les soldadures de les unions tenen [la seva pròpia comprovació](topic:weld-checks). Encara no implementat: efectes de segon ordre, torsió, vinclament per tallant combinat amb flexió, connexions cargolades, fatiga, foc i detallat sísmic. Les barres de formigó i les càrregues sísmiques tenen [les seves pròpies comprovacions](topic:concrete-and-seismic). Vegeu [Encara no implementat](topic:not-built-yet).

## L'informe

{{ui:Informe (PDF)}} i {{ui:Informe (CSV)}} incorporen les taules de disseny quan ja n'heu fet la comprovació: les edicions del codi, la configuració i els valors de l'Annex Nacional, la utilització per barra, cada article emprat, i per a cada barra la demanda, la capacitat i la utilització de cada comprovació en la seva combinació que regeix.
