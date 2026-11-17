---
title: Plan de montaje y película
summary: Ingrese una grúa y su tabla de carga, vea cada izaje verificado contra la tabla en orden de fases, y guarde una película de montaje que se reproduce sin conexión en cualquier teléfono.
keywords: montaje, grúa, izaje, tabla de carga, radio, capacidad, aparejo, secuencia, película, animación, teléfono, sin conexión, plan de izaje
from: fa7b0133
---

La pestaña {{ui:Erection}} convierte el modelo en una orden de montaje y verifica cada izaje contra una grúa que usted describe. Planifica a partir de números que usted escribe. No es un plan de izaje: eso lo hacen el aparejador y el operador de la grúa.

## Describir la grúa

Elija {{ui:Add a crane}} y complete:

- **Crane centre X and Y:** dónde está parada la grúa, en milímetros.
- **Highest hook:** lo más que puede subir el gancho, en milímetros. 0 significa que no se verifica límite.
- **Hook block and rigging not in the chart:** kilogramos que se descuentan de la tabla antes de sumar una carga, cuando su tabla no lo hace ya.
- **Load chart:** una fila por línea, radio en metros y después la capacidad en kilogramos. Copie las filas de la tabla propia de la grúa.

La tabla se lee como se lee una tabla de carga: la capacidad indicada para un radio vale hasta ese radio. Una carga con un radio entre dos filas recibe la capacidad de la fila **más lejana**, nunca un valor intermedio. Dentro de la primera fila, vale la capacidad de la primera fila. Más allá de la última fila, la grúa no puede izar nada. El radio que cuenta para un izaje es el mayor entre el radio de recogida y el radio de posición.

Una segunda grúa se agrega de la misma manera. Cada izaje va a la primera grúa que pueda tomarlo dentro de su margen.

## Qué hace el plan

- Un izaje por conjunto: una viga con sus placas de extremo, una columna con su placa base, una escalera.
- El orden sigue primero las fases, y después nivel por nivel: columnas, las vigas que sostienen, riostras, placas, escaleras. Una pieza nunca se iza antes que lo que la sostiene.
- Cada izaje muestra su peso (el peso bruto del modelo, más {{ui:Rigging added to each weight}}), su radio, la parte de la tabla que usa y el minuto en que empieza.
- {{ui:Most of the chart a lift may use}} es su margen de seguridad. Un izaje por encima de él se marca **Over your margin**; por encima de la tabla, **Over the chart**; más allá del último radio de la tabla, **Past the chart**; y una pieza más alta que el gancho, **Hook too low**.

Los agujeros y recortes no se descuentan de los pesos, y los pernos están cubiertos por el porcentaje de aparejo.

## Problemas

Cada izaje que esté por encima, fuera de alcance, demasiado alto o programado antes de lo que lo sostiene aparece en el panel {{ui:Problems}}. Una viga sin conexión que la sostenga figura como que necesita apuntalamiento temporal.

## Guardar la película

{{ui:Save movie}} escribe un solo archivo HTML. Ábralo en cualquier navegador, también en un teléfono, sin red y sin cuenta: reproducir y pausar, arrastrar la barra a cualquier minuto, girar el modelo con el dedo, pellizcar para hacer zoom. El título nombra cada izaje, su peso, radio y parte de la tabla. El modelo se dibuja como cajas simples: muestra el orden y los izajes, no los perfiles reales.

La misma tabla se guarda como CSV con el botón {{ui:CSV}}. La grúa y la tabla se guardan en el archivo del modelo, y cada cambio es un paso de deshacer.
