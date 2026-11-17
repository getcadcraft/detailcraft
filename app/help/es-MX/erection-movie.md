---
title: Plan de montaje y película
summary: Ingrese una grúa y su tabla de cargas, vea cada izaje revisado contra la tabla en orden de fases, y guarde una película de montaje que se reproduce sin conexión en cualquier teléfono.
keywords: montaje, grúa, izaje, tabla de cargas, radio, capacidad, eslingado, secuencia, película, animación, teléfono, sin conexión, plan de izaje
from: fa7b0133
---

La pestaña {{ui:Montaje}} convierte el modelo en una orden de montaje y revisa cada izaje contra una grúa que usted describe. Planifica a partir de números que usted escribe. No es un plan de izaje: eso lo hacen el señalero y el operador de la grúa.

## Describir la grúa

Elija {{ui:Agregar una grúa}} y complete:

- **Centro de la grúa X e Y:** dónde está parada la grúa, en milímetros.
- **Gancho más alto:** lo máximo que puede subir el gancho, en milímetros. 0 significa que no se revisa ningún límite.
- **Bloque de gancho y eslingado que no están en la tabla:** kilogramos que se restan de la tabla antes de agregar una carga, cuando su tabla no lo hace ya.
- **Tabla de cargas:** una fila por línea, radio en metros y luego la capacidad en kilogramos. Copie las filas de la tabla propia de la grúa.

La tabla se lee como se lee una tabla de cargas: la capacidad indicada para un radio se mantiene hasta ese radio. Una carga con un radio entre dos filas toma la capacidad de la fila **más lejana**, nunca un valor intermedio. Dentro de la primera fila, vale la capacidad de la primera fila. Más allá de la última fila la grúa no puede izar nada. El radio que cuenta para un izaje es el mayor entre el radio de recogida y el radio de colocación.

Una segunda grúa se agrega de la misma forma. Cada izaje se asigna a la primera grúa que pueda tomarlo dentro de su margen.

## Qué hace el plan

- Un izaje por ensamble: una viga con sus placas de extremo, una columna con su placa base, una escalera.
- El orden sigue primero las fases, y luego nivel por nivel: columnas, las vigas que cargan, contravientos, placas, escaleras. Una pieza nunca se iza antes de lo que la sostiene.
- Cada izaje muestra su peso (el peso bruto del modelo, más {{ui:Eslingado agregado a cada peso}}), su radio, la proporción de la tabla que usa y el minuto en que empieza.
- {{ui:Máximo de la tabla que puede usar un izaje}} es su margen de seguridad. Un izaje por encima de él se marca **Sobre su margen**; por encima de la tabla, **Sobre la tabla**; más allá del último radio de la tabla, **Fuera de la tabla**; y una pieza más alta que el gancho, **Gancho demasiado bajo**.

No se descuentan del peso los agujeros ni los recortes, y los pernos se cubren con el porcentaje de eslingado.

## Problemas

Cada izaje que está sobre, fuera, demasiado alto o programado antes de lo que lo sostiene aparece en el panel {{ui:Problemas}}. Una viga sin conexión que la sostenga aparece como que necesita apoyo temporal.

## Guardar la película

{{ui:Guardar película}} escribe un archivo HTML. Ábralo en cualquier navegador, también en un teléfono, sin red y sin cuenta: reproducir y pausar, arrastrar la barra a cualquier minuto, girar el modelo con el dedo, pellizcar para hacer zoom. El título nombra cada izaje, su peso, su radio y su proporción de la tabla. El modelo se dibuja como cajas simples: muestra el orden y los izajes, no los perfiles reales.

La misma tabla se guarda como CSV con el botón {{ui:CSV}}. La grúa y la tabla se guardan en el archivo del modelo, y cada cambio es un paso de deshacer.
