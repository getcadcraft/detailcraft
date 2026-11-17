---
title: Solución de problemas
summary: Qué significan los mensajes de DetailCraft y qué hacer, desde una vista 3D que no aparece hasta conexiones que no se construyen.
keywords: problema, error, no funciona, ayuda, solución, mensaje, rechazado, webgl, en blanco, advertencia, no puede, incidencia
from: f8c3b2b1
---

La mayoría de los rechazos se explican en la barra de estado de la parte inferior de la pantalla, o en la pestaña {{ui:Problemas}}. Lea primero esos mensajes. Los mensajes siguientes se citan tal como los muestra DetailCraft.

## Falta la vista 3D

**"Este navegador no pudo iniciar los gráficos 3D (WebGL). El modelo, los reportes y las exportaciones siguen funcionando."**

El navegador no pudo iniciar WebGL, los gráficos 3D con los que dibuja DetailCraft.

1. Actualice el navegador a su versión más reciente.
2. Active la aceleración por hardware y reinicie el navegador (vea abajo).
3. Actualice el controlador de gráficos o pruebe otro navegador. Los escritorios remotos y las máquinas virtuales suelen no tener WebGL.
4. Mientras tanto puede seguir trabajando: coloque miembros con el formulario {{ui:Agregar por ejes}}, lea los reportes y exporte. Solo hacer clic en la vista necesita WebGL.

:::chromium
Para activar la aceleración por hardware, abra **Configuración, Sistema** y active **Usar aceleración de gráficos cuando esté disponible**; luego reinicie.
:::

:::firefox
Para activar la aceleración por hardware, abra **Configuración, General, Rendimiento**, desmarque **Usar la configuración de rendimiento recomendada** y marque **Usar aceleración por hardware cuando esté disponible**. Reinicie Firefox.
:::

:::safari
Safari tiene WebGL activado de forma predeterminada. Actualice macOS si la vista sigue sin iniciarse, y revise que ninguna extensión lo bloquee.
:::

Más en [Navegadores y equipos](common:browsers).

## Hacer clic en la vista no hace nada

- **No hay intersección cerca del clic.** Las herramientas de colocación solo se ajustan a intersecciones de la rejilla. Un clic lejos de todos los puntos no hace nada. Acérquese hasta que el punto se ilumine.
- **La herramienta es {{ui:Seleccionar}} y hizo clic en un espacio vacío.** Eso borra la selección.
- **Arrastró.** Si el botón se presiona y se suelta a más de unos pocos píxeles de distancia, es un arrastre: gira o desplaza la vista.
- **La pieza está cortada.** En {{ui:Planta}} y {{ui:Elevación}}, el acero fuera del corte se oculta y no se puede hacer clic en él. Cambie a {{ui:3D}}.
- **La intersección está en otro nivel.** En {{ui:3D}}, las intersecciones de varios niveles pueden encimarse en pantalla; el clic toma la más cercana. Use {{ui:Planta}} o {{ui:Elevación}}.

## Mensajes al colocar

| Mensaje | Qué hacer |
|---|---|
| No hay nivel por encima de Nivel 2 al que llegue la columna. Agregue primero un nivel. | Agregue un nivel en {{ui:Niveles}}, o haga clic en un nivel inferior |
| Elija otra intersección para el otro extremo. | Hizo clic dos veces en el mismo punto |
| Los dos extremos son el mismo punto. | En {{ui:Agregar por ejes}}, los puntos "Desde" y "Hasta" son iguales |
| Agregue líneas de eje a la izquierda para colocar miembros. | El modelo no tiene líneas de eje en una dirección |
| Perfil desconocido "…" | El perfil no está en el catálogo ni en los perfiles personalizados del modelo. Elija uno de la lista |
| Escriba un número. | Un campo numérico quedó vacío o tiene texto |

## Las conexiones no se construyen

### "Esta viga no termina en una línea de columna."

Las placas de extremo necesitan que el extremo de la viga esté exactamente sobre la línea de una columna vertical, entre su base y su parte superior (dentro de 1 mm). Revise los {{ui:Extremos (x, y, z mm)}} de la viga y la posición de la columna.

### "Esta viga llega al alma de una columna o en ángulo"

O en {{ui:Problemas}}: "Las vigas que llegan al alma de una columna aún no se construyen: gire la columna 90° o use otra conexión."

La viga llega al alma de la columna. Seleccione la columna, ponga {{ui:Rotación (°)}} en 90 y vuelva a intentar. Las uniones sesgadas no se construyen.

### "Las placas de extremo solo se construyen para vigas horizontales (esta viga tiene pendiente)."

Ambos extremos de la viga deben estar a la misma altura.

### "Las placas de extremo necesitan la viga vertical (rotación 0)."

Regrese la {{ui:Rotación (°)}} de la viga a 0.

### "Las placas de extremo necesitan una viga de perfil en I." / "Las placas de extremo necesitan una columna de perfil en I."

Solo los perfiles en I (W, IPE, HEA, HEB o un perfil I personalizado) admiten placas de extremo.

### "El extremo de la viga ya no está en la línea de la columna."

Movió la viga o la columna después de agregar la conexión. Regrésela o borre la conexión.

### "Las conexiones redujeron este miembro a nada."

Las conexiones de ambos extremos recortan el miembro más de lo que mide, por ejemplo una viga muy corta entre dos columnas profundas. Revise los extremos del miembro y el espesor de la placa.

### "No hay otras uniones como esta … sin conexión."

{{ui:Similares}} solo copia a uniones con el mismo perfil de viga, el mismo perfil de columna y el mismo tipo de conexión (viga a un patín) que aún no tengan conexión.

### "Ambos extremos ya tienen conexiones." / "Esta columna ya tiene una placa base."

Seleccione la conexión existente para cambiarla, o bórrela primero.

## Advertencias en la pestaña Problemas

Las advertencias no impiden construir una conexión o una zapata; piden que la revise. Las de borde y espaciamiento usan los mínimos de la tabla 3.3 de EN 1993-1-8 (borde 1.2 × agujero, paso 2.2 × agujero, gramil 2.4 × agujero). Si su proyecto usa otras reglas, la advertencia puede no aplicar; DetailCraft no diseña conexiones.

"un agujero está fuera del extremo de la pieza" significa que la x de un agujero es menor que 0 o mayor que la longitud de corte. Recuerde que x se mide desde el inicio del corte, después de que las conexiones recortan la pieza.

## Se rechazan los cambios en zapatas

| Mensaje | Qué hacer |
|---|---|
| El recubrimiento no deja espacio para varillas en esta zapata. | Haga la zapata más grande o el recubrimiento más pequeño |
| La zapata es demasiado poco profunda para dos capas de varillas dentro del recubrimiento. | Hágala más profunda o reduzca el recubrimiento |
| Las varillas de arranque no caben dentro de la zapata con 75 mm de recubrimiento. | Menos arranques, separación más cerrada o una zapata más grande |
| La separación de varillas debe estar entre 50–1000 mm. | Escriba una separación dentro de ese rango |
| La longitud debe estar entre 300 y 50000 mm. | Las zapatas tienen límites de tamaño: longitud y ancho de 300 a 50000, profundidad de 150 a 10000 |

## Se rechazan ejes y niveles

| Mensaje | Qué hacer |
|---|---|
| Ejes numerados: indique una separación entre cada par de líneas (4). | Cuente sus espacios: cinco líneas necesitan cuatro separaciones |
| Ejes con letras: las separaciones deben ser milímetros positivos. | Sin ceros, negativos ni texto |
| Ejes numerados: las etiquetas de eje deben ser distintas. | Dos líneas tienen la misma etiqueta |
| Máximo 60 líneas de eje en cada dirección. | Divida el modelo |
| Conserve al menos un nivel. | Quitó todas las filas de nivel |
| Cada nivel necesita un nombre. / Dos niveles se llaman "…". | Dé a cada nivel un nombre distinto |

## Falla la apertura de un archivo

| Mensaje | Causa |
|---|---|
| DetailCraft abre sus propios modelos (.detailcraft.json). La importación de IFC todavía no está disponible. | El archivo no es un archivo `.json` |
| Este no es un modelo de DetailCraft (no es JSON). | El archivo está dañado o es otro JSON |
| Este no es un modelo de DetailCraft. | Un archivo JSON de otro programa |
| Este modelo fue guardado por una versión más nueva de DetailCraft (formato 2). | Ábralo en la versión más nueva de DetailCraft que lo guardó |
| Ese archivo es demasiado grande para ser un modelo de DetailCraft. | Más de 50 MB |

Cuando un archivo se abre con advertencias como "2 miembros no eran válidos y se omitieron.", el resto del modelo está bien. No guarde sobre el original hasta haber revisado lo que se omitió.

## Exportaciones

| Mensaje | Causa |
|---|---|
| No hay nada que exportar todavía. | {{ui:IFC}} con un modelo vacío |
| No hay piezas de perfil en I ni de placa para escribir archivos NC. | Solo canales, ángulos o tubos en el modelo |
| No se escribió (por ahora solo perfiles en I y placas): … | Esas marcas no son perfiles en I ni placas; el resto sí se escribió |
| No hay zapatas, así que no hay varillas que programar. | {{ui:Doblado}} sin zapatas |
| … carácter(es) fuera de la fuente del PDF se imprimieron como "?". | El nombre del modelo o un grado tiene caracteres que la fuente del PDF no tiene |

{{ui:Plano de taller}} desactivado: el modelo todavía no tiene piezas.

## No aparecen las descargas

Cada guardado y exportación es una descarga del navegador. Revise la lista de descargas de su navegador. Si el navegador pregunta antes de descargar varios archivos, o bloquea las descargas de este sitio, permítalas. En Safari, revise el botón de descargas de la barra de herramientas.

## Las teclas no hacen nada

- El cursor está en un campo de texto o numérico: las teclas de herramientas y {{key:Delete}} se ignoran ahí para que pueda escribir. Pulse {{key:Tab}} o haga clic en la vista.
- Hay un cuadro de diálogo abierto: ciérrelo primero.
- El navegador tiene el teclado (por ejemplo, la barra de direcciones): haga clic dentro de DetailCraft.
- {{key:Ctrl+Shift+F}} usa Control incluso en una Mac.

## Problemas sin conexión

El botón {{ui:Guardar para usar sin conexión}} de la barra de aplicaciones muestra en qué estado está la copia sin conexión. Cómo funciona el guardado: [Trabajar sin conexión](common:offline).

| El botón dice | Qué significa | Qué hacer |
|---|---|---|
| {{ui:Guardar para usar sin conexión}} | Todavía no hay copia sin conexión en este navegador | Elíjalo con conexión |
| Guardando 5 de 20 | El guardado está en curso | Espere a {{ui:Lista sin conexión}}; mantenga la pestaña abierta |
| {{ui:Lista sin conexión}} | DetailCraft, su vista 3D, todas las exportaciones y esta ayuda funcionan sin conexión | Nada. Haga clic para {{ui:Guardar de nuevo (obtener la versión más reciente)}} o {{ui:Quitar la copia sin conexión}} |
| {{ui:No se pudo guardar}} | Algunos archivos no se descargaron | Revise su conexión y haga clic para intentar de nuevo |
| {{ui:Sin conexión no disponible}} | Esta ventana no puede guardar una copia sin conexión: las ventanas privadas y algunas computadoras administradas lo bloquean | Use una ventana normal o trabaje en línea |

Si está sin conexión y el botón no dice {{ui:Lista sin conexión}}, no recargue ni cierre la pestaña: lo que ya se cargó sigue funcionando. Guarde su modelo con {{key:Mod+S}} y espere hasta volver a tener conexión.

## Trabajo sin guardar

Si el navegador pregunta si desea salir de la página, DetailCraft tiene cambios sin guardar. Elija quedarse en la página y luego pulse {{key:Mod+S}}. DetailCraft no puede recuperar un modelo después de cerrar la pestaña.

## Sigue sin funcionar

Anote lo que hizo y el mensaje exacto, y escríbanos a través de la [página de soporte](https://getcadcraft.com/support).
