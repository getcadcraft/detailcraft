---
title: Generador de escaleras de acero
summary: Una escalera de acero a partir de la altura entre plantas, la longitud y el ancho: el desnivel y la huella según un conjunto de normas que elija, descansillos, barandillas y balaustres, planos de taller y una lista de corte con pesos.
keywords: escalera de acero, generador de escaleras, zanca, peldaño, chapa estriada, rejilla, bandeja plegada, descansillo, pasamanos, balaustres, desnivel, huella, osha, ibc, approved document k, lista de corte, pesos, plano de taller
from: a4f0a985
---

El generador de escaleras crea una escalera de acero completa a partir de unos pocos datos: las zancas, los peldaños, descansillos cuando el tramo es demasiado alto, pasamanos con postes y balaustres, los agujeros de fijación en las zancas, una lista de corte con pesos y los planos de taller. Parte de la herramienta {{ui:Escalera}}, como la escalera sencilla (véase Escaleras), con un interruptor más.

## Colocar una escalera de acero

1. Elija {{ui:Escalera}} en el grupo {{ui:Colocar}}, o pulse {{key:S}}.
2. A la derecha, marque {{ui:Usar el generador de escaleras de acero}}.
3. Elija el **conjunto de normas** para el lugar donde se construye la escalera, el **desnivel** (de planta a planta; 0 = hasta el siguiente nivel), la **longitud disponible** (0 = que lo decida la norma), el **ancho libre** y el **tipo de peldaño**: chapa estriada, rejilla o bandeja de chapa plegada.
4. Defina la sección de la zanca, los descansillos (según la norma, o un número), los pasamanos (a ambos lados, a uno, ninguno), la altura de la barandilla y la separación de los balaustres.
5. Haga clic en una intersección de ejes: ese es el pie de la primera contrahuella.

Seleccione la escalera (haga clic en una zanca, un peldaño o una barandilla) para cambiar cualquier ajuste. Las propiedades muestran las contrahuellas, la huella, la inclinación, los tramos y descansillos, el acero que lleva, la lista de corte y las fuentes del conjunto de normas.

## Los conjuntos de normas

El conjunto de normas limita la forma de la escalera: el desnivel y la huella, 2 × contrahuella + huella, la inclinación, el descansillo, la altura de la barandilla y la mayor abertura. DetailCraft ofrece los siguientes; la región es un ajuste, no una suposición. Abra **De dónde salen los números de este conjunto de normas** en las propiedades: cada número indica su fuente y dice cuánto se ha comprobado.

- **International Building Code 2021**: contrahuella de 4 a 7 in., peldaño de al menos 11 in., barandillas de 34 a 38 in. El límite de 12 ft entre descansillos se muestra como *no leído*, y las cifras de barandilla como leídas en documentos que citan el código: confírmelas antes de fiarse de ellas.
- **OSHA 29 CFR 1910.25 y 1910.29** (escaleras industriales estándar): de 30° a 50°, contrahuella como máximo de 9.5 in., peldaño de al menos 9.5 in., al menos 22 in. de ancho, descansillos tan anchos como la escalera y 30 in. de fondo, y un pasamanos superior usado como barandilla de 36 a 38 in. Estas cifras se leyeron en la propia norma.
- **Approved Document K 2013, Inglaterra** (escaleras de acceso general y de servicio): los rangos de desnivel y huella, y 2 × contrahuella + huella de 550 a 700 mm, leídos en el informe encargado por el gobierno que los tabula. El documento no da a DetailCraft una altura de barandilla, así que se usa la altura que usted defina y la lista de Problemas lo indica.

Un conjunto de normas que no esté aquí no se adivina: la escalera entonces sigue la regla de confort plana de 600 a 650 mm y dice que no tiene norma.

## Lo que calcula

- **Contrahuellas y huella.** Las menos contrahuellas cuya 2 × contrahuella + huella queda en el centro del rango de la norma, sin que la huella baje del mínimo de la norma. Con una longitud dada, la huella es la longitud entre los peldaños, y cualquier valor fuera de la norma se indica.
- **Tramos y descansillos.** Un tramo más alto de lo que permite la norma se divide con un descansillo tan ancho como la escalera y no menor que el mínimo de la norma; también puede pedir descansillos. Un descansillo es un marco de dos vigas laterales y dos angulares transversales bajo una cubierta, sobre dos postes.
- **Peldaños.** La chapa estriada es una placa soldada (6 mm por defecto; el estriado no suma al peso). Una bandeja de chapa plegada tiene un retorno en el narizal y se atornilla al alma de la zanca: dos agujeros 2 mm mayores que el tornillo, a 0.3 y 0.7 de la profundidad. La rejilla se dibuja como una placa de igual peso (profundidad de la barra portante × espesor ÷ paso); las barras transversales y las bandas no se cuentan, y la lista de corte lo indica.
- **Barandillas.** Un pasamanos superior de tubo sobre postes a lo largo de cada tramo y cada descansillo, con una separación de balaustres que ninguna esfera mayor que la abertura de la norma atraviesa (100 mm como máximo por defecto).

## Planos, lista de corte y exportación

- El tramo es un conjunto; las barandillas son otro (ambos lados son el mismo conjunto, hecho dos veces). Cada uno tiene su plano de conjunto, y el plano de la zanca muestra sus agujeros.
- La **hoja de escalera** (ST-…) muestra cada zanca del tramo recta, con las estaciones de agujeros anotadas desde el extremo inferior, y el detalle del peldaño: sección, narizal, retorno y la brida de extremo con sus agujeros.
- {{ui:Lista de corte y pesos}} en las propiedades enumera cada perfil y longitud con sus cantidades y kilogramos; {{ui:Descargar la lista de corte (CSV)}} la guarda.
- Todo va a la lista de materiales, a los archivos NC y a IFC como piezas normales (IfcMember, IfcColumn, IfcPlate).

## Conviene saber

- Es un punto de partida, no un diseño. Nada se comprueba a resistencia ni a flecha; el conjunto de normas solo limita la forma.
- Los extremos de las zancas contra los forjados se cortan a escuadra y no se detallan; los postes de descansillo se apoyan en el forjado inferior y no tienen placas de base.
- Colocar la escalera como un único elemento en BimCraft todavía no está conectado.
