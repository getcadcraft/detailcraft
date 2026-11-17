---
title: Solución de problemas
summary: Qué significan los mensajes de DetailCraft y qué hacer, desde una vista 3D que no aparece hasta conexiones que no se pueden construir.
keywords: problema, error, no funciona, ayuda, arreglar, mensaje, rechazado, webgl, en blanco, aviso, no se puede, incidencia
from: f8c3b2b1
---

La mayoría de los rechazos se explican en la barra de estado de abajo de la pantalla, o en la pestaña {{ui:Problemas}}. Leé eso primero. Los mensajes de abajo están citados tal como los muestra DetailCraft.

## Falta la vista 3D

**"Este navegador no pudo iniciar los gráficos 3D (WebGL). El modelo, los informes y las exportaciones siguen funcionando."**

El navegador no pudo iniciar WebGL, que es el sistema de gráficos 3D con el que dibuja DetailCraft.

1. Actualizá el navegador a su última versión.
2. Activá la aceleración por hardware y reiniciá el navegador (ver abajo).
3. Actualizá el controlador de gráficos, o probá otro navegador. Los escritorios remotos y las máquinas virtuales muchas veces no tienen WebGL.
4. Mientras tanto podés seguir trabajando: colocá miembros con el formulario {{ui:Agregar por grilla}}, leé los informes y exportá. Solo hacer clic en la vista necesita WebGL.

:::chromium
Para activar la aceleración por hardware, abrí **Configuración, Sistema** y activá **Usar aceleración de gráficos cuando esté disponible**, y después reiniciá.
:::

:::firefox
Para activar la aceleración por hardware, abrí **Configuración, General, Rendimiento**, desmarcá **Usar la configuración de rendimiento recomendada** y marcá **Usar aceleración por hardware cuando esté disponible**. Reiniciá Firefox.
:::

:::safari
Safari tiene WebGL activado por defecto. Actualizá macOS si la vista sigue sin iniciarse, y revisá que ninguna extensión lo bloquee.
:::

Más en [Navegadores y computadoras](common:browsers).

## Hacer clic en la vista no hace nada

- **No hay intersección cerca del clic.** Las herramientas de colocación se ajustan solo a intersecciones de la grilla. Un clic lejos de todos los puntos no hace nada. Acercate hasta que el punto se ilumine.
- **La herramienta es {{ui:Seleccionar}} y hiciste clic en un espacio vacío.** Eso quita la selección.
- **Arrastraste.** Si presionás y soltás a más de unos pocos píxeles de distancia, es un arrastre: gira o desplaza la vista.
- **La pieza está recortada.** En {{ui:Planta}} y {{ui:Elevación}}, el acero fuera del corte queda oculto y no se puede hacer clic en él. Cambiá a {{ui:3D}}.
- **La intersección está en otro nivel.** En {{ui:3D}}, las intersecciones de varios niveles pueden superponerse en pantalla; el clic toma la más cercana. Usá {{ui:Planta}} o {{ui:Elevación}}.

## Mensajes al colocar

| Mensaje | Qué hacer |
|---|---|
| No hay un nivel por encima de Nivel 2 al que llegue la columna. Agregá un nivel primero. | Agregá un nivel en {{ui:Niveles}}, o hacé clic en un nivel inferior |
| Elegí otra intersección para el otro extremo. | Hiciste clic dos veces en el mismo punto |
| Los dos extremos son el mismo punto. | En {{ui:Agregar por grilla}}, los puntos "Desde" y "Hasta" son iguales |
| Agregá líneas de grilla a la izquierda para colocar miembros. | El modelo no tiene líneas de grilla en una dirección |
| Perfil desconocido "…" | El perfil no está en el catálogo ni en los perfiles propios del modelo. Elegí uno de la lista |
| Escribí un número. | Un campo numérico quedó vacío o tiene texto |

## Las conexiones no se construyen

### "Esta viga no termina en una línea de columna."

Las placas de extremo necesitan que el extremo de la viga esté exactamente sobre la línea de una columna vertical, entre su base y su parte superior (dentro de 1 mm). Revisá los {{ui:Extremos (x, y, z mm)}} de la viga y la posición de la columna.

### "Esta viga llega al alma de una columna o en ángulo"

O en {{ui:Problemas}}: "Las vigas que llegan al alma de una columna todavía no se construyen: girá la columna 90° o usá otra conexión".

La viga llega al alma de la columna. Seleccioná la columna, poné {{ui:Rotación (°)}} en 90 e intentá de nuevo. Las uniones oblicuas todavía no se construyen.

### "Las placas de extremo se construyen solo para vigas niveladas (esta viga está inclinada)."

Los dos extremos de la viga tienen que estar a la misma altura.

### "Las placas de extremo necesitan la viga vertical (rotación 0)."

Poné la {{ui:Rotación (°)}} de la viga otra vez en 0.

### "Las placas de extremo necesitan una viga de perfil I." / "Las placas de extremo necesitan una columna de perfil I."

Solo los perfiles I (W, IPE, HEA, HEB o un I propio) aceptan placas de extremo.

### "El extremo de la viga ya no está sobre la línea de la columna."

Moviste la viga o la columna después de agregar la conexión. Volvela a su lugar, o eliminá la conexión.

### "Las conexiones recortaron este miembro hasta nada."

Las conexiones de los dos extremos recortan el miembro más de lo que mide, por ejemplo una viga muy corta entre dos columnas altas. Revisá los extremos del miembro y el espesor de la placa.

### "No hay otras uniones como esta … sin conexión."

{{ui:Similar}} copia solo a las uniones con el mismo perfil de viga, el mismo perfil de columna y el mismo tipo de conexión (viga en un ala) que todavía no tienen conexión.

### "Ambos extremos ya tienen conexiones." / "Esta columna ya tiene una placa base."

Seleccioná la conexión existente para cambiarla, o eliminala primero.

## Avisos en la pestaña Problemas

Los avisos no impiden que una conexión o una zapata se construya; te piden que la revises. Los de borde y separación usan los mínimos de EN 1993-1-8 Tabla 3.3 (borde 1,2 × agujero, paso 2,2 × agujero, calibre 2,4 × agujero). Si tu proyecto usa otras reglas, el aviso puede no aplicar; DetailCraft no diseña conexiones.

"un agujero está fuera del extremo de la pieza" significa que la x de un agujero es menor que 0 o mayor que el largo de corte. Recordá que x se mide desde el inicio del corte, después de que las conexiones recortan la pieza.

## Los cambios de zapata se rechazan

| Mensaje | Qué hacer |
|---|---|
| El recubrimiento no deja lugar para barras en esta zapata. | Hacé la zapata más grande o el recubrimiento más chico |
| La zapata es demasiado baja para dos capas de barras dentro del recubrimiento. | Hacela más profunda o reducí el recubrimiento |
| Las barras de arranque no entran dentro de la zapata con 75 mm de recubrimiento. | Menos arranques, separación más cerrada, o una zapata más grande |
| La separación entre barras debe ser de 50–1000 mm. | Escribí una separación dentro de ese rango |
| El largo debe ser de 300–50000 mm. | Las zapatas tienen límites de medida: largo y ancho de 300 a 50000, profundidad de 150 a 10000 |

## Las grillas y los niveles se rechazan

| Mensaje | Qué hacer |
|---|---|
| Grillas numeradas: indicá una separación entre cada par de líneas (4). | Contá tus espacios: cinco líneas necesitan cuatro separaciones |
| Grillas con letras: las separaciones deben ser milímetros positivos. | Sin ceros, negativos ni texto |
| Grillas numeradas: las etiquetas de grilla deben ser distintas. | Dos líneas tienen la misma etiqueta |
| Como máximo 60 líneas de grilla en cada dirección. | Dividí el modelo |
| Conservá al menos un nivel. | Quitaste todas las filas de nivel |
| Cada nivel necesita un nombre. / Dos niveles se llaman "…". | Dales a cada nivel un nombre distinto |

## Falla la apertura de un archivo

| Mensaje | Causa |
|---|---|
| DetailCraft abre sus propios modelos (.detailcraft.json). La importación de IFC todavía no está construida. | El archivo no es un archivo `.json` |
| Este no es un modelo de DetailCraft (no es JSON). | El archivo está dañado o es otro JSON |
| Este no es un modelo de DetailCraft. | Un archivo JSON de otro programa |
| Este modelo fue guardado por un DetailCraft más nuevo (formato 2). | Abrilo en el DetailCraft más nuevo que lo guardó |
| Ese archivo es demasiado grande para ser un modelo de DetailCraft. | Más de 50 MB |

Cuando un archivo se abre con avisos como "2 miembros no eran válidos y se dejaron afuera.", el resto del modelo está bien. No guardes encima del original hasta haber revisado qué quedó afuera.

## Exportaciones

| Mensaje | Causa |
|---|---|
| Todavía no hay nada para exportar. | {{ui:IFC}} con un modelo vacío |
| No hay piezas de perfil I ni de placa para escribir archivos NC. | Solo hay canales, ángulos o tubos en el modelo |
| No se escribió (por ahora solo perfiles I y placas): … | Esas marcas no son perfiles I ni placas; el resto sí se escribió |
| No hay zapatas, así que no hay barras que programar. | {{ui:Doblado}} sin zapatas |
| … carácter(es) fuera de la fuente del PDF se imprimieron como "?". | El nombre del modelo o un grado tiene caracteres que la fuente del PDF no tiene |

{{ui:Plano de taller}} aparece en gris: el modelo todavía no tiene piezas.

## Las descargas no aparecen

Cada guardado y cada exportación es una descarga del navegador. Revisá la lista de descargas de tu navegador. Si el navegador pregunta antes de descargar varios archivos, o bloquea las descargas de este sitio, permítelas. En Safari, revisá el botón de descargas de la barra de herramientas.

## Las teclas no hacen nada

- El cursor está en un campo de texto o de número: las teclas de herramienta y {{key:Delete}} se ignoran ahí para que puedas escribir. Presioná {{key:Tab}} o hacé clic en la vista.
- Hay un cuadro de diálogo abierto: ciérralo primero.
- El navegador tiene el teclado (por ejemplo la barra de direcciones): hacé clic dentro de DetailCraft.
- {{key:Ctrl+Shift+F}} usa Control incluso en una Mac.

## Problemas sin conexión

El botón {{ui:Guardar para usar sin conexión}} de la barra de la aplicación muestra en qué estado está la copia sin conexión. Cómo funciona el guardado: [Trabajar sin conexión](common:offline).

| El botón dice | Qué significa | Qué hacer |
|---|---|---|
| {{ui:Guardar para usar sin conexión}} | Todavía no hay copia sin conexión en este navegador | Elegilo cuando tengas conexión |
| Guardando 5 de 20 | El guardado está en curso | Esperá a {{ui:Listo para usar sin conexión}}; dejá la pestaña abierta |
| {{ui:Listo para usar sin conexión}} | DetailCraft, su vista 3D, todas las exportaciones y esta ayuda funcionan sin conexión | Nada. Hacé clic para {{ui:Guardar otra vez (obtener la versión más nueva)}} o {{ui:Quitar la copia sin conexión}} |
| {{ui:No se pudo guardar}} | Algunos archivos no se descargaron | Revisá tu conexión y hacé clic para intentar de nuevo |
| {{ui:Uso sin conexión no disponible}} | Esta ventana no puede guardar una copia sin conexión: las ventanas privadas y algunas computadoras administradas lo bloquean | Usá una ventana normal, o trabajá en línea |

Si estás sin conexión y el botón no dice {{ui:Listo para usar sin conexión}}, no recargues ni cierres la pestaña: lo que ya se cargó sigue funcionando. Guardá tu modelo con {{key:Mod+S}} y esperá hasta volver a tener conexión.

## Trabajo sin guardar

Si el navegador pregunta si querés salir de la página, DetailCraft tiene cambios sin guardar. Elegí quedarte y después presioná {{key:Mod+S}}. DetailCraft no puede recuperar un modelo después de cerrar la pestaña.

## Todavía no se resuelve

Anotá lo que hiciste y el mensaje exacto, y avisanos por la [página de soporte](https://getcadcraft.com/support).
