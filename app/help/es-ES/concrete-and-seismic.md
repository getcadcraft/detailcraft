---
title: Comprobar miembros de hormigón y generar cargas sísmicas
summary: Defina las armaduras de vigas y pilares de hormigón, compruébelos según ACI 318-19, genere las fuerzas horizontales equivalentes de ASCE 7-22 sobre forjados rígidos y vea la deriva por planta. Una ayuda para que la revise un ingeniero.
keywords: hormigón, hormigón armado, ACI 318, ACI 318-19, armadura, viga, pilar, cortante, cercos, sísmico, terremoto, fuerza lateral equivalente, ELF, ASCE 7-22, deriva, deriva de planta, forjados, diafragma rígido, peso de planta, aprovechamiento, utilización, estructural, ingeniero
from: 94d3001d
---

Los bloques {{ui:Miembros de hormigón}} y {{ui:Cargas sísmicas}} de la pestaña {{ui:Análisis}} comprueban vigas y pilares de hormigón armado, y generan las fuerzas horizontales de un terremoto sobre los forjados de un pórtico. Ambos siguen la ejecución de la pestaña {{ui:Análisis}} y se guardan con el modelo.

:::warning
Los resultados son **para que los compruebe un ingeniero**: una ayuda hasta que alguien los haya revisado. Las comprobaciones de hormigón usan fuerzas de primer orden, salvo que un pilar de un pórtico que usted llame no desplazable se calcula para su momento amplificado; no hay amplificación por desplazamiento, ni cálculo de torsión, ni detallado sísmico (capítulo 18 de ACI), ni detallado de cercos. Las cargas sísmicas no tienen en cuenta el factor de redundancia, el efecto sísmico vertical, la amplificación torsional ni los efectos P-delta. Las cargas de viento todavía no están construidas.
:::

## Dibujar los miembros

Dibuje los miembros de hormigón como rectángulos: un perfil {{ui:Placa}} como `PL400x400` para un pilar y `PL300x600` para una viga da la sección. Los pilares y las vigas se colocan como cualquier otro miembro.

## Definir las secciones

El bloque {{ui:Miembros de hormigón}} enumera cada sección que usan los miembros. Pulse {{ui:Definir como hormigón…}} en las que son de hormigón. DetailCraft lee el ancho **b** (a lo largo del eje y propio del miembro) y el canto **h** (a lo largo de z) del perfil dibujado, y luego pide:

- el **recubrimiento** hasta el centro de las barras, y las barras **superiores**, **inferiores** y **laterales** (cuántas y de qué diámetro) para una viga, o una **jaula de pilar** (barras a lo largo de b y de h, diámetro, cercos en espiral) para un pilar;
- los **cercos**: ramas, diámetro y separación;
- cómo **actúa** el miembro: como viga, como pilar, o según sus fuerzas (un miembro vertical, o uno que lleve más de 0.10 f′c Ag, es un pilar).

Defina f′c, el límite elástico de las barras fy y el del cerco fyt (como máximo 420 MPa cuentan para cortante), K y si el pórtico es desplazable o no desplazable sobre ellos. Una sección definida como hormigón se analiza como hormigón: E = 4700 √f′c, 2400 kg/m³, y por defecto con **secciones fisuradas** (pilares 0.70 Ig, vigas 0.35 Ig; ACI 318-19 tabla 6.6.3.1.1(a)). Elija {{ui:Secciones brutas}} para desactivarlo.

## Crear combinaciones y comprobar

Asigne a los casos de carga su tipo, y luego {{ui:Generar combinaciones}}: ACI 318-19 toma las combinaciones de resistencia de ASCE 7 (§5.3.1). Pulse {{ui:Comprobar hormigón}} y cada miembro recibe un aprovechamiento, coloreado en el modelo como las comprobaciones de acero: flexión y armadura mínima (22.2, 9.6.1.2), deformación de tracción controlada (9.3.3.1), cortante con los cercos (22.5, 9.6.3), separación de cercos, y carga axial con momento para pilares (22.4, con el método de Bresler para flexión biaxial). Un miembro cuya sección dibujada difiere de la b × h que escribió aparece como *comprobado en parte*, igual que un pilar esbelto o una torsión por encima del umbral: esos no se diseñan.

Los miembros que superan su capacidad aparecen en {{ui:Problemas}}; acéptelos con un motivo, o corrija la sección.

## Forjados y cargas sísmicas

Un forjado es un nivel donde el pórtico está unido por una losa rígida (un **diafragma rígido**). En el bloque {{ui:Cargas sísmicas}} pulse {{ui:Buscar plantas}}: toma los niveles donde se unen dos o más vigas. Después dé a cada forjado su **peso sísmico**, escrito o leído: {{ui:Tomar los pesos de los casos}} suma las cargas verticales de los casos a los que dé un factor (el caso permanente es 1; añada 0.25 en un caso de sobrecarga de uso de almacenamiento o de nieve en cubierta plana, como pide ASCE 7-22 12.7.2). La carga vertical de cada nudo va al forjado en su nivel o por encima, así que un pilar entre dos forjados da la mitad de su peso a cada uno.

Rellene los valores de diseño: SDS, SD1, S1, R, Ie, Cd, TL, el sistema estructural (para el periodo) y la categoría de riesgo. {{ui:Generar casos sísmicos}} calcula entonces el periodo a partir de la altura del edificio (12.8.2.1), el cortante basal V = Cs W (12.8.1), lo reparte por los forjados (12.8.3) y escribe cuatro casos de carga, en X y en Y, con la torsión accidental del 5 % en cada sentido (12.8.4.2). Las fuerzas por planta y la comprobación de deriva de planta (12.8.6, tabla 12.12-1, la deriva Cd δxe / Ie frente a 0.020 hsx) aparecen tras una ejecución; una deriva que supera su límite también es un problema. Pulse {{ui:Generar combinaciones}} de nuevo para incluir los casos sísmicos en las combinaciones.

**El periodo obtenido del análisis.** El periodo aproximado Ta procede de la altura del edificio. Cuando ha ejecutado el análisis con los casos sísmicos, {{ui:Tomar el periodo del análisis}} lee cuánto se ha desplazado cada forjado bajo las fuerzas y calcula el periodo por el método de Rayleigh, T = 2π √(Σ w δ² / (g Σ f δ)), una vez para X y otra para Y; los casos sísmicos se vuelven a generar con él. El periodo usado nunca supera Cu·Ta (ASCE 7-22 12.8.2), así que un modelo blando no puede bajar el cortante basal por debajo de ese valor. Tome el periodo de nuevo tras la segunda ejecución: se estabiliza en uno o dos pasos. Desmarque {{ui:Periodo obtenido del análisis}} para volver a Ta.

**Pilares esbeltos (ACI 318-19 6.6.4.5).** Para un pórtico que llame no desplazable, un pilar cuyo k·ℓu/r supere 34 + 12·M1/M2 (como máximo 40) se calcula para el momento amplificado Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² con (EI)eff = 0.4 Ec Ig / (1 + βdns), y el momento mínimo Pu (15 + 0.03 h). βdns (0.6 para empezar) es la parte de la carga axial mayorada que es sostenida: escriba la suya. Un pilar cuyo Pu alcance 0.75 Pc falla con su propia comprobación. El informe enumera los números de cada pilar esbelto. En un pórtico **desplazable** un pilar esbelto sigue como "comprobado en parte": su amplificación necesita un análisis de segundo orden, que no está construido.

**Losas.** Cuando el modelo tiene placas, un bloque {{ui:Armadura de losas}} toma los momentos de las placas de cada combinación de resistencia y, por la regla de Wood–Armer (flexión y torsión juntas), calcula el acero que necesita cada capa por metro: inferior y superior, en x y en y. Usted da el espesor, el recubrimiento y las barras; la tabla muestra lo necesario frente a lo dispuesto y el cortante unidireccional frente a φVc, y una capa que no llega es un problema con su cláusula. La flecha, el punzonamiento en pilares y las barras de refuerzo en huecos no están cubiertos, y un momento sobre un apoyo converge despacio con placas de cuatro nodos.

Cada forjado que enumere se convierte en un diafragma rígido en el análisis: sus vigas no soportan fuerza axial por el movimiento del forjado. La exportación CraftScript no se hace para un modelo con forjados.

## El informe

{{ui:Informe (PDF)}} e {{ui:Informe (CSV)}} incorporan las tablas de hormigón (supuestos, aprovechamiento por miembro, cada cláusula), los parámetros sísmicos y el cortante basal, las fuerzas sobre los forjados y la tabla de deriva.
