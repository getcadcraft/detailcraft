---
title: Revisar miembros de concreto y generar cargas sísmicas
summary: Defina el refuerzo de vigas y columnas de concreto, revíselos según ACI 318-19, genere fuerzas laterales equivalentes según ASCE 7-22 en diafragmas rígidos y vea la deriva de entrepiso. Una ayuda para que un ingeniero lo revise.
keywords: concreto, concreto reforzado, ACI 318, ACI 318-19, varilla, viga, columna, cortante, amarres, sísmico, sismo, fuerza lateral equivalente, ELF, ASCE 7-22, deriva, deriva de entrepiso, pisos, diafragma rígido, peso de entrepiso, utilización, estructural, ingeniero
from: 94d3001d
---

Los bloques {{ui:Miembros de concreto}} y {{ui:Cargas sísmicas}} de la pestaña {{ui:Análisis}} revisan vigas y columnas de concreto reforzado, y generan las fuerzas laterales de un sismo sobre los pisos de un marco. Ambos siguen la ejecución de la pestaña {{ui:Análisis}} y se guardan con el modelo.

:::warning
Los resultados son **para la revisión de un ingeniero**: una ayuda hasta que alguien la haya revisado. Las revisiones de concreto usan fuerzas de primer orden, excepto que una columna en un marco que usted llama sin desplazamiento se diseña para su momento amplificado, sin amplificación por desplazamiento, sin diseño a torsión, sin detallado sísmico (capítulo 18 de ACI) y sin detallado de amarres. Las cargas sísmicas excluyen el factor de redundancia, el efecto sísmico vertical, la amplificación torsional y los efectos P-delta. Las cargas de viento todavía no están construidas.
:::

## Dibuje los miembros

Dibuje los miembros de concreto como rectángulos: un perfil de {{ui:Placa}} como `PL400x400` para una columna y `PL300x600` para una viga da la sección. Las columnas y vigas se colocan como cualquier otro miembro.

## Defina las secciones

El bloque {{ui:Miembros de concreto}} lista cada sección que usan los miembros. Presione {{ui:Preparar como concreto…}} en las que son de concreto. DetailCraft lee el ancho **b** (a lo largo del eje y propio del miembro) y el peralte **h** (a lo largo de z) del perfil dibujado, y luego pide:

- el **recubrimiento** hasta el centro de las varillas, y las varillas **superiores**, **inferiores** y **laterales** (cuántas y de qué diámetro) para una viga, o una **jaula de columna** (varillas a lo largo de b y a lo largo de h, qué diámetro, amarres en espiral) para una columna;
- los **amarres**: ramas, diámetro y separación;
- lo que el miembro **actúa como**: una viga, una columna, o se decide según sus fuerzas (un miembro vertical, o uno que lleve más de 0.10 f′c Ag, es una columna).

Defina f′c, el límite de fluencia de las varillas fy y el de los amarres fyt (420 MPa como máximo cuenta para cortante), K, y si el marco es con desplazamiento o sin desplazamiento arriba de ellos. Una sección configurada como concreto se analiza como concreto: E = 4700 √f′c, 2400 kg/m³, y por defecto con **secciones agrietadas** (columnas 0.70 Ig, vigas 0.35 Ig; ACI 318-19 Tabla 6.6.3.1.1(a)). Elija {{ui:Secciones brutas}} para desactivarlo.

## Haga las combinaciones y revise

Asigne a cada caso de carga su tipo, luego {{ui:Generar combinaciones}}: ACI 318-19 toma las combinaciones de resistencia de ASCE 7 (§5.3.1). Presione {{ui:Revisar concreto}} y cada miembro recibe una utilización, coloreada en el modelo como las revisiones de acero: flexión y acero mínimo (22.2, 9.6.1.2), deformación controlada por tensión (9.3.3.1), cortante con los amarres (22.5, 9.6.3), separación de amarres, y carga axial con momento para columnas (22.4, con el método de Bresler para flexión biaxial). Un miembro donde la sección dibujada difiere de la b × h que escribió aparece como *revisado parcialmente*, igual que una columna esbelta o una torsión por encima del umbral: esos no se diseñan.

Los miembros que superan su capacidad se listan en {{ui:Problemas}}; acepte uno con una razón, o corrija la sección.

## Pisos y cargas sísmicas

Un piso es un nivel donde el marco está unido por una losa rígida (un **diafragma rígido**). En el bloque {{ui:Cargas sísmicas}} presione {{ui:Buscar pisos}}: toma los niveles donde se unen dos o más vigas. Luego asigne a cada piso su **peso sísmico**, escrito o leído: {{ui:Tomar pesos de los casos}} suma las cargas verticales de los casos a los que dé un factor (el caso muerto es 1; agregue 0.25 en un caso vivo de almacenamiento o nieve en un techo plano, como pide ASCE 7-22 12.7.2). La carga vertical de cada nodo va al piso en o sobre él, así que una columna entre dos pisos da la mitad de su peso a cada uno.

Complete los valores de diseño: SDS, SD1, S1, R, Ie, Cd, TL, el sistema estructural (para el periodo) y la categoría de riesgo. {{ui:Hacer casos sísmicos}} calcula luego el periodo a partir de la altura del edificio (12.8.2.1), el cortante basal V = Cs W (12.8.1), lo reparte hacia arriba entre los pisos (12.8.3) y escribe cuatro casos de carga, en X y en Y, con la torsión accidental de 5 % en cada dirección (12.8.4.2). Las fuerzas por nivel y la revisión de deriva de entrepiso (12.8.6, Tabla 12.12-1, la deriva Cd δxe / Ie contra 0.020 hsx) aparecen después de una ejecución; una deriva por encima de su límite también es un problema. Presione {{ui:Generar combinaciones}} de nuevo para incluir los casos sísmicos en las combinaciones.

**El periodo del análisis.** El periodo aproximado Ta sale de la altura del edificio. Cuando haya ejecutado el análisis con los casos sísmicos, {{ui:Tomar el periodo del análisis}} lee cuánto se movió cada piso bajo las fuerzas y calcula el periodo por el método de Rayleigh, T = 2π √(Σ w δ² / (g Σ f δ)), una vez para X y otra para Y; los casos sísmicos se generan de nuevo con él. El periodo usado nunca es mayor que Cu·Ta (ASCE 7-22 12.8.2), así que un modelo flexible no puede bajar el cortante basal por debajo de ese valor. Tome el periodo de nuevo después de la segunda ejecución: se estabiliza en uno o dos pasos. Desmarque {{ui:Periodo del análisis}} para volver a Ta.

**Columnas esbeltas (ACI 318-19 6.6.4.5).** Para un marco que usted llama sin desplazamiento, una columna cuyo k·ℓu/r sea mayor que 34 + 12·M1/M2 (como máximo 40) se diseña para el momento amplificado Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² con (EI)eff = 0.4 Ec Ig / (1 + βdns), y el momento mínimo de Pu (15 + 0.03 h). βdns (0.6 al inicio) es la parte de la carga axial mayorada que es sostenida: escríbala usted. Una columna cuyo Pu alcance 0.75 Pc falla con su propia revisión. El informe enumera los números de cada columna esbelta. En un marco con **desplazamiento**, una columna esbelta sigue *revisada parcialmente*: su amplificación necesita un análisis de segundo orden, que no está construido.

**Losas.** Cuando el modelo tiene placas, un bloque {{ui:Refuerzo de losa}} toma los momentos de placa de cada combinación de resistencia y, con la regla de Wood–Armer (flexión y torsión juntas), calcula el acero que necesita cada capa por metro: inferior y superior, en x y en y. Usted da el espesor, el recubrimiento y las varillas; la tabla muestra lo necesario contra lo dado, y el cortante unidireccional contra φVc, y una capa que quede corta es un problema con su cláusula. La deflexión, el punzonamiento en columnas y las varillas de refuerzo de borde en aberturas no están cubiertos, y un momento sobre un apoyo converge lentamente con placas de cuatro nodos.

Cada piso que enumere se vuelve un diafragma rígido en el análisis: sus vigas no llevan fuerza axial por el movimiento del piso. La exportación de CraftScript no se hace para un modelo con pisos.

## El informe

{{ui:Informe (PDF)}} e {{ui:Informe (CSV)}} agregan las tablas de concreto (supuestos, utilización por miembro, cada cláusula), los parámetros sísmicos y el cortante basal, las fuerzas en los pisos y la tabla de deriva.
