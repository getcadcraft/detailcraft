---
title: Solución de problemas
summary: Qué significan los mensajes de DetailCraft y qué hacer, desde una vista 3D que no aparece hasta conexiones que no se construyen.
keywords: problema, error, no funciona, ayuda, solución, mensaje, rechazado, webgl, en blanco, aviso, no se puede, incidencia
from: f8c3b2b1
---

La mayoría de los rechazos se explican en la barra de estado de la parte inferior de la pantalla, o en la pestaña {{ui:Problems}}. Lea primero esos mensajes. Los mensajes siguientes se citan tal como los muestra DetailCraft.

## Falta la vista 3D

**"Este navegador no pudo iniciar los gráficos 3D (WebGL). El modelo, los informes y las exportaciones siguen funcionando."**

El navegador no pudo iniciar WebGL, que es la tecnología de gráficos 3D con la que dibuja DetailCraft.

1. Actualice el navegador a su versión más reciente.
2. Active la aceleración por hardware y vuelva a abrir el navegador (véase más abajo).
3. Actualice el controlador de gráficos o pruebe con otro navegador. Los escritorios remotos y las máquinas virtuales suelen no tener WebGL.
4. Mientras tanto puede seguir trabajando: coloque piezas con el formulario {{ui:Add by grid}}, lea los informes y exporte. Solo hacer clic en la vista necesita WebGL.

:::chromium
Para activar la aceleración por hardware, abra **Configuración, Sistema** y active **Usar la aceleración de gráficos cuando esté disponible**, y después vuelva a abrir el navegador.
:::

:::firefox
Para activar la aceleración por hardware, abra **Ajustes, General, Rendimiento**, desmarque **Usar la configuración de rendimiento recomendada** y marque **Usar la aceleración por hardware cuando esté disponible**. Reinicie Firefox.
:::

:::safari
Safari tiene WebGL activado de forma predeterminada. Actualice macOS si la vista sigue sin iniciarse y compruebe que ninguna extensión lo bloquea.
:::

Más información en [Navegadores y ordenadores](common:browsers).

## Al hacer clic en la vista no pasa nada

- **No hay ninguna intersección cerca del clic.** Las herramientas de colocación solo se ajustan a las intersecciones de la rejilla. Un clic lejos de todos los puntos no hace nada. Acérquese hasta que el punto se ilumine.
- **La herramienta es {{ui:Select}} y hizo clic en un espacio vacío.** Eso borra la selección.
- **Arrastró.** Si pulsa y suelta a más de unos píxeles de distancia, es un arrastre: gira o desplaza la vista.
- **La pieza está cortada.** En {{ui:Plan}} y {{ui:Elevation}}, el acero fuera del corte se oculta y no puede seleccionarse. Cambie a {{ui:3D}}.
- **La intersección está a otro nivel.** En {{ui:3D}}, las intersecciones de varios niveles pueden superponerse en pantalla; el clic toma la más cercana. Use {{ui:Plan}} o {{ui:Elevation}}.

## Mensajes al colocar

| Mensaje | Qué hacer |
|---|---|
| No hay ningún nivel por encima del Nivel 2 al que llegue el pilar. Añada primero un nivel. | Añada un nivel en {{ui:Levels}}, o haga clic en un nivel inferior |
| Elija otra intersección para el otro extremo. | Hizo clic dos veces en el mismo punto |
| Los dos extremos son el mismo punto. | En {{ui:Add by grid}}, los puntos "Desde" y "Hasta" son iguales |
| Añada líneas de rejilla en la parte izquierda para colocar piezas. | El modelo no tiene líneas de rejilla en una dirección |
| Perfil desconocido "…" | El perfil no está en el catálogo ni en los perfiles propios del modelo. Elija uno de la lista |
| Escriba un número. | Un campo numérico quedó vacío o tiene texto |

## Las conexiones no se construyen

### "Esta viga no termina en una línea de pilar."

Las placas de testa necesitan que el extremo de la viga esté exactamente sobre la línea de un pilar vertical, entre su base y su parte superior (con una tolerancia de 1 mm). Compruebe los {{ui:Ends (x, y, z mm)}} de la viga y la posición del pilar.

### "Esta viga llega al alma de un pilar o en ángulo"

O en {{ui:Problems}}: "Las vigas que llegan al alma de un pilar todavía no se construyen: gire el pilar 90° o use otra conexión."

La viga llega al alma del pilar. Seleccione el pilar y ponga {{ui:Rotation (°)}} en 90, y después vuelva a intentarlo. Las uniones oblicuas todavía no se construyen.

### "Las placas de testa solo se construyen para vigas horizontales (esta viga tiene pendiente)."

Ambos extremos de la viga deben estar a la misma altura.

### "Las placas de testa necesitan la viga vertical (giro 0)."

Vuelva a poner el {{ui:Rotation (°)}} de la viga en 0.

### "Las placas de testa necesitan una viga de perfil en I." / "Las placas de testa necesitan un pilar de perfil en I."

Solo los perfiles en I (W, IPE, HEA, HEB o un perfil en I personalizado) admiten placas de testa.

### "El extremo de la viga ya no está en la línea del pilar."

Movió la viga o el pilar después de añadir la conexión. Devuélvalo a su posición, o borre la conexión.

### "Las conexiones reducen esta pieza a nada."

Las conexiones de ambos extremos recortan la pieza más de lo que mide, por ejemplo una viga muy corta entre dos pilares de gran canto. Compruebe los extremos de la pieza y el espesor de la placa.

### "No hay otras uniones como esta … sin conexión."

{{ui:Similar}} copia solo a las uniones con el mismo perfil de viga, el mismo perfil de pilar y el mismo tipo de conexión (viga contra un ala) que todavía no tienen conexión.

### "Ambos extremos ya tienen conexiones." / "Este pilar ya tiene una placa de base."

Seleccione la conexión existente para cambiarla, o bórrela primero.

## Avisos en la pestaña Problemas

Los avisos no impiden construir una conexión ni una zapata; le piden que la compruebe. Los avisos de distancia al borde y de separación usan los mínimos de la tabla 3.3 de EN 1993-1-8 (borde 1.2 × agujero, paso 2.2 × agujero, gramil 2.4 × agujero). Si su proyecto usa otras reglas, el aviso puede no aplicar: DetailCraft no diseña conexiones.

"un agujero está fuera del extremo de la pieza" significa que la x de un agujero es menor que 0 o mayor que la longitud de corte. Recuerde que x se mide desde el inicio del corte, después de que las conexiones recorten la pieza.

## Los cambios en zapatas se rechazan

| Mensaje | Qué hacer |
|---|---|
| El recubrimiento no deja espacio para barras en esta zapata. | Haga la zapata más grande o el recubrimiento más pequeño |
| La zapata es demasiado poco profunda para dos capas de barras dentro del recubrimiento. | Hágala más profunda o reduzca el recubrimiento |
| Las barras de arranque no caben dentro de la zapata con 75 mm de recubrimiento. | Menos arranques, separación menor o una zapata más grande |
| La separación de las barras debe estar entre 50–1000 mm. | Escriba una separación dentro de ese rango |
| La longitud debe estar entre 300–50000 mm. | Las zapatas tienen límites de tamaño: longitud y anchura de 300 a 50000, profundidad de 150 a 10000 |

## Las rejillas y los niveles se rechazan

| Mensaje | Qué hacer |
|---|---|
| Rejillas numeradas: indique una separación entre cada par de líneas (4). | Cuente sus huecos: cinco líneas necesitan cuatro separaciones |
| Rejillas con letras: las separaciones deben ser milímetros positivos. | Ni ceros, ni negativos, ni texto |
| Rejillas numeradas: las etiquetas de rejilla deben ser distintas. | Dos líneas tienen la misma etiqueta |
| Como máximo 60 líneas de rejilla en cada dirección. | Divida el modelo |
| Mantenga al menos un nivel. | Ha borrado todas las filas de nivel |
| Cada nivel necesita un nombre. / Dos niveles se llaman "…". | Dé a cada nivel un nombre distinto |

## Abrir un archivo falla

| Mensaje | Causa |
|---|---|
| DetailCraft abre sus propios modelos (.detailcraft.json). La importación de IFC todavía no está disponible. | El archivo no es un archivo `.json` |
| Este no es un modelo de DetailCraft (no es JSON). | El archivo está dañado o es otro JSON |
| Este no es un modelo de DetailCraft. | Un archivo JSON de otro programa |
| Este modelo lo guardó un DetailCraft más reciente (formato 2). | Ábralo con el DetailCraft más reciente que lo guardó |
| Ese archivo es demasiado grande para ser un modelo de DetailCraft. | Más de 50 MB |

Cuando un archivo se abre con avisos como "2 piezas no eran válidas y se han dejado fuera.", el resto del modelo está bien. No sobrescriba el original hasta haber comprobado qué se dejó fuera.

## Exportaciones

| Mensaje | Causa |
|---|---|
| Todavía no hay nada que exportar. | {{ui:IFC}} con un modelo vacío |
| No hay piezas de perfil en I ni chapas para escribir archivos NC. | Solo canales, cantoneras o tubos en el modelo |
| No se escribió (por ahora solo perfiles en I y chapas): … | Esas marcas no son perfiles en I ni chapas; el resto sí se escribió |
| No hay zapatas, así que no hay barras que programar. | {{ui:Bending}} sin zapatas |
| … carácter(es) fuera de la fuente del PDF se imprimen como "?". | El nombre del modelo o una calidad tiene caracteres que la fuente del PDF no tiene |

{{ui:Shop drawing}} aparece desactivado: el modelo todavía no tiene piezas.

## Las descargas no aparecen

Cada guardado y cada exportación es una descarga del navegador. Compruebe la lista de descargas de su navegador. Si el navegador pregunta antes de descargar varios archivos, o bloquea las descargas desde este sitio, permítalas. En Safari, compruebe el botón de descargas de la barra de herramientas.

## Las teclas no hacen nada

- El cursor está en un campo de texto o numérico: las teclas de herramientas y {{key:Delete}} se ignoran allí para que pueda escribir. Pulse {{key:Tab}} o haga clic en la vista.
- Hay un cuadro de diálogo abierto: ciérrelo primero.
- El navegador tiene el teclado (por ejemplo, la barra de direcciones): haga clic dentro de DetailCraft.
- {{key:Ctrl+Shift+F}} usa la tecla Ctrl incluso en un Mac.

## Problemas sin conexión

El botón {{ui:Save for offline}} de la barra de aplicaciones muestra en qué estado está la copia sin conexión. Cómo funciona el guardado: [Trabajar sin conexión](common:offline).

| El botón muestra | Qué significa | Qué hacer |
|---|---|---|
| {{ui:Save for offline}} | Todavía no hay copia sin conexión en este navegador | Elíjalo con conexión |
| Guardando 5 de 20 | El guardado está en curso | Espere a {{ui:Offline ready}}; mantenga la pestaña abierta |
| {{ui:Offline ready}} | DetailCraft, su vista 3D, todas las exportaciones y esta ayuda funcionan sin conexión | Nada. Haga clic para {{ui:Save again (get the newest version)}} o {{ui:Remove the offline copy}} |
| {{ui:Could not save}} | Algunos archivos no se descargaron | Compruebe su conexión y haga clic para volver a intentarlo |
| {{ui:Offline not available}} | Esta ventana no puede guardar una copia sin conexión: las ventanas privadas y algunos equipos administrados lo impiden | Use una ventana normal o trabaje en línea |

Si no tiene conexión y el botón no muestra {{ui:Offline ready}}, no recargue ni cierre la pestaña: lo que ya se ha cargado sigue funcionando. Guarde su modelo con {{key:Mod+S}} y espere a tener conexión de nuevo.

## Trabajo sin guardar

Si el navegador pregunta si quiere salir de la página, DetailCraft tiene cambios sin guardar. Elija quedarse y después pulse {{key:Mod+S}}. DetailCraft no puede recuperar un modelo después de cerrar la pestaña.

## Sigue sin funcionar

Anote lo que hizo y el mensaje exacto, y comuníquelo a través de la [página de soporte](https://getcadcraft.com/support).
