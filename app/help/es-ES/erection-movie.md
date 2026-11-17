---
title: Plan de montaje y película
summary: Introduzca una grúa y su tabla de cargas, vea cada izado comprobado frente a la tabla en orden de fases, y guarde una película de montaje que se reproduce sin conexión en cualquier teléfono.
keywords: montaje, grúa, izado, tabla de cargas, radio, capacidad, eslingado, secuencia, película, animación, teléfono, sin conexión, plan de izado
from: fa7b0133
---

La pestaña {{ui:Montaje}} convierte el modelo en una orden de montaje y comprueba cada izado frente a una grúa que usted describe. Planifica a partir de números que usted escribe. No es un plan de izado: lo hacen el eslingador y el operador de la grúa.

## Describa la grúa

Elija {{ui:Añadir una grúa}} y rellene:

- **Centro de la grúa X e Y:** dónde está la grúa, en milímetros.
- **Gancho más alto:** lo máximo que puede subir el gancho, en milímetros. 0 significa que no se comprueba ningún límite.
- **Bloque de gancho y eslingado no incluidos en la tabla:** kilogramos que se restan de la tabla antes de añadir una carga, cuando su tabla no lo hace ya.
- **Tabla de cargas:** una fila por línea, radio en metros y después la capacidad en kilogramos. Copie las filas de la tabla propia de la grúa.

La tabla se lee como se lee una tabla de cargas: la capacidad indicada para un radio es válida hasta ese radio. Una carga a un radio entre dos filas recibe la capacidad de la fila **más alejada**, nunca un valor intermedio. Dentro de la primera fila, vale la capacidad de la primera fila. Más allá de la última fila, la grúa no puede izar nada. El radio que cuenta para un izado es el mayor entre el radio de recogida y el radio de colocación.

Una segunda grúa se añade de la misma forma. Cada izado va a la primera grúa que pueda asumirlo dentro de su margen.

## Qué hace el plan

- Un izado por conjunto: una viga con sus chapas de testa, un pilar con su placa base, una escalera.
- El orden sigue primero las fases, y después nivel a nivel: pilares, las vigas que cargan, riostras, placas, escaleras. Una pieza nunca se iza antes que lo que la sostiene.
- Cada izado muestra su peso (el peso bruto del modelo, más {{ui:Aparejo añadido a cada peso}}), su radio, la parte de la tabla que usa y el minuto en que empieza.
- {{ui:Máximo de la tabla de cargas que puede usar un izado}} es su margen de seguridad. Un izado por encima de él se marca como **Sobre su margen**; por encima de la tabla, **Sobre la tabla**; más allá del último radio de la tabla, **Fuera de la tabla**; y una pieza más alta que el gancho, **Gancho demasiado bajo**.

No se descuentan del peso los agujeros ni los recortes, y los tornillos quedan cubiertos por el porcentaje de eslingado.

## Problemas

Cada izado que esté sobre, fuera, demasiado alto o programado antes de lo que lo sostiene aparece en el panel {{ui:Problemas}}. Una viga sin una unión que la sostenga figura como que necesita apeo provisional.

## Guardar la película

{{ui:Guardar película}} escribe un único archivo HTML. Ábralo en cualquier navegador, también en un teléfono, sin red y sin cuenta: reproducir y pausar, arrastrar la barra a cualquier minuto, girar el modelo con un dedo, pellizcar para ampliar. El rótulo nombra cada izado, su peso, su radio y su parte de la tabla. El modelo se dibuja como cajas simples: muestra el orden y los izados, no los perfiles reales.

La misma tabla se guarda como CSV con el botón {{ui:CSV}}. La grúa y la tabla se guardan en el archivo del modelo, y cada cambio es un paso de deshacer.
