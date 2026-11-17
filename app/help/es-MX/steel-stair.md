---
title: Generador de escaleras de acero
summary: Una escalera de acero a partir de la altura de piso a piso, el recorrido y el ancho: desnivel y huella según un conjunto de reglas que usted elige, descansos, barandales y balaustres, planos de taller y una lista de corte con pesos.
keywords: escalera de acero, generador de escaleras, zanca, peldaño, placa antiderrapante, rejilla de piso, charola doblada, descanso, pasamanos, balaustres, desnivel, huella, osha, ibc, approved document k, lista de corte, pesos, plano de taller
from: a4f0a985
---

El generador de escaleras crea una escalera de acero completa a partir de unos cuantos números: las zancas, los peldaños, los descansos cuando el tramo es demasiado alto, los pasamanos con postes y balaustres, los agujeros de fijación en las zancas, una lista de corte con pesos y los planos de taller. Parte de la herramienta {{ui:Escalera}}, como la escalera sencilla (ver Escaleras), con un interruptor adicional.

## Colocar una escalera de acero

1. Elija {{ui:Escalera}} en el grupo {{ui:Colocar}}, o presione {{key:S}}.
2. A la derecha, marque {{ui:Usar el generador de escaleras de acero}}.
3. Elija el **conjunto de reglas** para el lugar donde se construye la escalera, el **desnivel** (de piso a piso; 0 = hasta el siguiente nivel), el **recorrido disponible** (0 = que lo decida la regla), el **ancho libre** y el **tipo de peldaño**: placa antiderrapante, rejilla de piso o charola de placa doblada.
4. Defina la sección de la zanca, los descansos (según la regla, o un número), los pasamanos (ambos lados, uno, ninguno), la altura del barandal y la separación de balaustres.
5. Haga clic en una intersección de rejilla: ese es el pie de la primera contrahuella.

Seleccione la escalera (haga clic en una zanca, peldaño o barandal) para cambiar cualquier ajuste; las propiedades muestran las contrahuellas, la huella, la inclinación, los tramos y descansos, el acero que contiene, la lista de corte y las fuentes del conjunto de reglas.

## Los conjuntos de reglas

El conjunto de reglas limita la forma de la escalera: el desnivel y la huella, 2 × contrahuella + huella, la inclinación, el descanso, la altura del barandal y la abertura más grande. DetailCraft ofrece los siguientes; la región es un ajuste, no una suposición. Abra **De dónde salen los números de este conjunto de reglas** en las propiedades: cada número indica su fuente y dice qué tan bien se verificó.

- **International Building Code 2021**: contrahuella de 4 a 7 in., peldaño de al menos 11 in., barandales de 34 a 38 in. El límite de 12 ft entre descansos se muestra como *no leído*, y los números de barandal como leídos en material de apoyo que cita el código: confírmelos antes de usarlos.
- **OSHA 29 CFR 1910.25 y 1910.29** (escaleras industriales estándar): de 30° a 50°, contrahuella de 9.5 in. como máximo, peldaño de al menos 9.5 in., al menos 22 in. de ancho, descansos tan anchos como la escalera y 30 in. de profundidad, y un pasamanos superior usado como barandal de 36 a 38 in. Estos datos se leyeron en el propio reglamento.
- **Approved Document K 2013, Inglaterra** (escaleras de acceso general y de servicio): los rangos de desnivel y huella, y 2 × contrahuella + huella de 550 a 700 mm, leídos en el informe encargado por el gobierno que los tabula. El documento no da a DetailCraft una altura de barandal, así que se usa la altura que usted defina y la lista de Problemas lo indica.

Un conjunto de reglas que no aparece aquí no se supone: la escalera sigue entonces la regla de confort sencilla de 600 a 650 mm e indica que no tiene regla.

## Lo que calcula

- **Contrahuellas y huella.** Las mínimas contrahuellas cuya 2 × contrahuella + huella quede en el centro del rango de la regla, sin que la huella baje del mínimo de la regla. Si se da un recorrido, la huella es el recorrido entre los peldaños y se indica cualquier valor fuera de la regla.
- **Tramos y descansos.** Un tramo más alto de lo que permite la regla se divide con un descanso tan ancho como la escalera y no menor que el mínimo de la regla; también puede pedir descansos. Un descanso es un marco de dos vigas laterales y dos ángulos transversales bajo una cubierta, sobre dos postes.
- **Peldaños.** La placa antiderrapante es una placa soldada (6 mm por defecto; el patrón en relieve no se suma al peso). Una charola de placa doblada tiene un retorno en la nariz y se atornilla a través del alma de la zanca: dos agujeros 2 mm mayores que el perno, a 0.3 y 0.7 de la altura. La rejilla de piso se dibuja como una placa del mismo peso (profundidad de la barra portante × espesor ÷ separación); las barras transversales y el fleje no se cuentan, y la lista de corte lo indica.
- **Barandales.** Un pasamanos superior de tubo sobre postes a lo largo de cada tramo y cada descanso, con una separación de balaustres por la que no pase una esfera mayor que la abertura de la regla (100 mm como máximo por defecto).

## Planos, lista de corte y exportación

- El tramo es un solo ensamble; los barandales son otro (ambos lados son el mismo ensamble, hecho dos veces). Cada uno tiene su plano de ensamble, y el plano de la zanca muestra sus agujeros.
- La **hoja de la escalera** (ST-…) muestra la zanca de cada tramo en línea recta, con las estaciones de agujeros anotadas desde el extremo inferior, y el detalle del peldaño: sección, nariz, retorno y la brida de extremo con sus agujeros.
- {{ui:Lista de corte y pesos}} en las propiedades enumera cada sección y longitud con cantidades y kilogramos; {{ui:Descargar la lista de corte (CSV)}} la guarda.
- Todo va a la lista de materiales, a los archivos NC y a IFC como piezas ordinarias (IfcMember, IfcColumn, IfcPlate).

## Conviene saber

- Esto es un punto de partida, no un diseño. Nada se verifica por resistencia ni por deflexión; el conjunto de reglas solo limita la forma.
- Los extremos de las zancas contra los pisos se cortan a escuadra y no se detallan; los postes de descanso llegan hasta el piso inferior y no tienen placas base.
- Colocar la escalera como un solo elemento en BimCraft todavía no está conectado.
