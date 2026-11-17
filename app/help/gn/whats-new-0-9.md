---
title: Mba'e pyahu 0.9
summary: Tamaños de acero UK del Blue Book y ángulos desiguales, planos de taller de cada pieza en un solo conjunto PDF, Mis perfiles para secciones personalizadas, P-Delta y frecuencias naturales, cargas de viento ASCE 7, sitio sísmico y combinaciones, y cursores en vivo con Seguir.
keywords: mba'e pyahu, novedades, notas de versión, registro de cambios, 0.9, acero UK, blue book, ub, uc, pfc, shs, rhs, chs, ángulo desigual, plano de taller, planos de taller, conjunto de planos, marca de pieza, pdf, mis perfiles, perfil personalizado, p-delta, segundo orden, frecuencia natural, elementos finitos, masa modal, carga de viento, asce 7, sísmico, clase de sitio, usgs, combinaciones de carga, lrfd, asd, en vivo, cursores, seguir, personas, descripciones emergentes, cambios, 0.8, 0.8.1, versión, funciones nuevas, montaje, grúa, tabla de cargas, película, piloto automático, conexiones, armadura, congestión, cimentación, zapata, losa de fundación, asentamiento, entramado, madera, chapa delgada, lista de corte, constructibilidad, acceso de soldadura, proveedor, stock, plazo de entrega, qué falla primero, hormigón, sísmico, losa, idiomas, asistente
from: 4c95a2de
---

Kóva ha'e mba'e ojecambia DetailCraft 0.9-pe, 0.8.1 rehe jehechakuaápe. 0.9-pe oguereko tamaños de acero UK, peteĩ plano de taller cada pieza peteĩ jeýpe, pestaña {{ui:Análisis}} tuichaveʼỹ marco rehe ha ojehecha ambue ndive kursor ojehechápe jaʼatyhápe.

## Pyahu

### Acero UK y planos de taller

- **Tamaños de acero UK.** Listas de perfil oguereko 976 tamaño Steel for Life Blue Book-gui: UB, UC, PFC, EA, UEA, CHS, SHS ha RHS, sección hueca conformada en frío ojapytyvõ (sus nombres oñepyrũ CF). Nombres ojeikuaa familia primero, ejemplo UB305x165x40 térã SHS100x100x5.0, ha ejehai ko'ẽrõ ojeporu planos-pe ohechaukáva (305x165x40 UB, L100x100x10, SHS100x5) oiko avei. Ehecha [Catálogo de perfiles](topic:profile-catalog).
- **Ángulos desiguales.** Ángulos UEA oguereko ambos lados IFC entrada ha salida rupi ha archivos NC rupi, ha espejo ohechauka pieza punta a punta.
- **Todos los planos de taller de una vez.** Eheja {{ui:Plano de taller}} grupo {{ui:Salida}}-pe ndaipóri nada eiporu. Ventana ohechauka cada marca de pieza, ohecha cualquiera, ha {{ui:Descargar todo}} oñongatu peteĩ PDF cada marca ndive página, cada uno título "Hoja 3 de 42". {{ui:Descargar esta hoja}} oñongatu eñeʼẽva hoja. Canales, ángulos ha secciones huecas avei oguereko hojas. Ehecha [Hacer planos de taller](topic:shop-drawings).
- **Mis perfiles.** Perfil personalizado ikatu ojeñongatu cada modelo nuevo-pe. Formulario Perfil personalizado-pe, eheja {{ui:Guardar en Mis perfiles}}; lista {{ui:Mis perfiles}} oguereko {{ui:Guardar}}, {{ui:Usar aquí}} ha {{ui:Quitar}}. Lista oñongatu ko navegadór-pe (hasta 200), ndaha'éi tu cuenta-pe. Ehecha [Placas y perfiles](topic:plates-and-profiles).

### Análisis

- **Segundo orden (P-Delta).** Eheja {{ui:Segundo orden (P-Delta)}} Ejecutar rembiapo-pe pestaña {{ui:Análisis}}-pe, ha fuerzas axiales oñeʼẽ marco desplazado-pe. Placas ha pisos rígidos oguereko primer orden, aviso ndive. Ehecha [Fuerzas, reacciones y deformaciones](topic:frame-analysis).
- **Frecuencias naturales.** Bloque {{ui:Elementos finitos: frecuencias naturales}} resultados rembe oheka modos más bajos del mismo modelo, período ha masa modal efectiva, ha ohechauka peteĩ modo modelo-pe. Ehecha [Fuerzas, reacciones y deformaciones](topic:frame-analysis).
- **Cargas de viento y sitio sísmico.** Mbohapy bloque pyahu pestaña {{ui:Análisis}}-pe: {{ui:Cargas de viento (procedimiento direccional ASCE 7)}}, {{ui:Sitio y sistema sísmico (ASCE 7)}} ha {{ui:Combinaciones de carga ASCE 7}}. Ehecha [Viento, sitio sísmico y combinaciones ASCE 7](topic:wind-seismic-combinations).

### Trabajo conjunto

- **Cursores y nombres.** Sesión en vivo-pe, puntero de cada persona ojedibujáva modelo-pe ndive sy nombre ha color, ha lo ojeselecciona oguereko caja.
- **Seguir a una persona.** Eheja {{ui:Personas}} sesión-pe ha eheja {{ui:Seguir}} peteĩ nombre-pe; tu vista oho ipuére. Anfitrión ikatu eheja {{ui:Pedir a todos que me sigan}}. Ehecha [Seguir a una persona en una sesión en vivo](topic:follow-in-live).

### En todas las apps

- Descripciones emergentes oguereko Bootstrap, tarjeta de consejo inicial oguereko botón cerrar, barras de pestañas ojeguejy sãmbyhy ojeporu ndojeguerekoiva, ha nombre de pestaña navegadór ohechauka documento abierto seguido de DetailCraft ha CadCraft.

## Corregido

- Perfil personalizado se perdía al empezar un modelo nuevo.
- Faltaban canales, ángulos y secciones huecas en el conjunto de planos de taller.

## Límites sinceros

- Los bloques de viento, sísmico y elementos finitos son ayudas de verificación. Tu ingeniero revisa los resultados; no son una verificación de código. La consulta a USGS se probó con un sustituto, no con el servicio en vivo.
- Elementos finitos y P-Delta se verificaron con respuestas a mano y cerradas, no con un edificio real. El análisis de pandeo no está hecho.
- Ningún fabricante británico ha probado aún los tamaños UK, y los archivos NC para ángulos desiguales no se han ejecutado en una máquina.
- El conjunto de planos de taller es solo PDF.
- Los idiomas más allá del inglés son borradores de máquina.
- Los instaladores de Windows no están firmados por código ({{ui:Más información}}, luego {{ui:Ejecutar igual}}); la imagen de disco de macOS no está notarizada (clic derecho, luego {{ui:Abrir}}).

Los cambios anteriores están en las notas 0.8 y 0.8.1 más abajo en esta página.

## Anteriores: 0.8 y 0.8.1

Kóva ha'e mba'e ojecambia DetailCraft 0.8-pe (1 de noviembre de 2026) ha 0.8.1-pe (2 de noviembre de 2026), 0.7 rehe. 0.7-pe piezas de acero ojeverifica; 0.8-pe ojeplanifica izas, ojeproponen conexiones, ojeverifica cimentaciones ha armadura, ha ojeentramar paredes, pisos ha techos de madera ha chapa delgada.

### Pyahu

**Montaje**

- **Plan de montaje y película.** Pestaña {{ui:Montaje}}-pe, emoñe grúa (dóndee oĩ, gancho más alto, aparejo ndaipóri tabla rehe) ha eme'ẽ filas tabla de carga. DetailCraft eleva modelo peteĩ conjunto jey, orden de fase ha nivel nivel, ha verifica cada izada tabla-pe radio ndive ha margen eikuaauka ndive. {{ui:Guardar película}} oñongatu peteĩ archivo HTML ojeporúva sin conexión cualquier navegadór-pe, teléfono-pe avei. Izadas ojeguasu tabla, ojeguejy térã alto {{ui:Problemas}}-pe. Ha'e plan eñeʼẽva ne números-gui, ndaha'éi plan de izada. Ehecha [Plan de montaje y película](topic:erection-movie).

**Conexiones**

- **Piloto automático de conexiones.** Pestaña {{ui:Piloto automático}} oma'ẽ cada junta ndaiporiva conexión ha ohai proposición formas-gui: placas base, chapas de corte, placas de extremo para vigas marcadas como momento, empalmes ha cartelas. Carga uniforme térã corte de un extremo, cantidad de pernos sigue resistencia de diseño del perno. {{ui:Agregar todas}} ohasa propuestas peteĩ paso de deshacer. Ha'e valores iniciales ojehechakuaa, ndaha'éi diseño de conexión.
- **Verificaciones de constructibilidad.** {{ui:Problemas}}-pe perno ndaikatúi llave alcanza, pernos ojeguejy socket-gui, soldaduras de filete fuera de límite de tamaño ha secciones huecas ojeguerekóva agua. Acceso de soldadura pyahu: soldadura de filete ndaikatúi soplete de soldador alcanza ojeikuaa pieza ojehasa haʼéva ha porcentaje de soldadura afectada. Ehecha [Verificaciones de constructibilidad](topic:constructability).

**Cimentaciones y armadura**

- **Verificaciones de cimentación.** Pestaña {{ui:Cimentación}} verifica zapatas, zapatas combinadas ha losas de fundación sobre suelo descripto: apoyo, deslizamiento ha vuelco por cargas de servicio; flexión, cizalla, punzonamiento, desarrollo ha armadura mínima por cargas mayoradas (ACI 318-19). Columna cerca de borde o esquina ojeverifica con sección cortada por borde de zapata. Asentamiento sale del módulo del suelo, losa flexible resuélvese sobre resortes de módulo de subrasante, ha grupos de pilotes ha muros de contención oguereko paneles propios. Cargas de columna ikatu eme'ẽ térã ojeguejy {{ui:Análisis}}-gui. Ehecha [Verificaciones de cimentación](topic:foundation-checks).
- **Mapa de congestión de armadura.** Pestaña {{ui:Congestión}} ohecha mapa de calor de cada zapata vista desde arriba: dónde barras ndejeri lugar suficiente para que hormigón baje, contra regla de separación libre y, si emoñe, árido más grande y cabeza de vibrador. Ehecha [Mapa de congestión de armadura](topic:rebar-congestion).

**Entramado y suministro**

- **Entramado de madera y chapa delgada.** Pestaña {{ui:Entramado}} entrama paneles de pared, piso y techo con cada pieza, lista de corte, stock a comprar y plano de taller a escala. {{ui:Colocar como miembros}} pone piezas en el modelo, y {{ui:Planos PDF}} oñongatu peteĩ hoja por panel. Tamaños, separaciones y dinteles son tuyos: DetailCraft ndoverifica que sostenga la carga. Ehecha [Paneles de entramado de madera y chapa delgada](topic:framing-panels).
- **Stock de proveedor y plazos.** Pestaña {{ui:Proveedor}} lee lista de stock de proveedor (CSV) ha ohechauka, por cada sección que lista de corte compra, si hay suficiente en stock y cuánto dura la espera. Faltantes y secciones atrasadas oĩ {{ui:Problemas}}-pe. Nada se pide. Ehecha [Stock de proveedor y plazos](topic:supplier-stock).

**Análisis y diseño**

- **¿Qué falla primero?** Pestaña {{ui:Análisis}}-pe, botón encuentra combinación de resistencia que manda, pieza más débil, cuánto puede crecer cargas antes que primer pieza llegue a límite, y placa de extremo o chapa de corte más débil donde resistencia al corte de sus pernos es conocida. Necesita combinaciones y código de diseño antes. Apoyo, desgarro en bloque, soldaduras y palanqueo no se verifican. Tu asistente conectado puede pedir lo mismo.
- **En vivo.** Eheja {{ui:En vivo: resolver de nuevo después de cada cambio}} y marco se resuelve de nuevo tras cada cambio.
- **Hormigón, más.** Columna esbelta en marco sin desplazamiento se diseña por su momento amplificado (ACI 318-19 6.6.4.5). Período sísmico puede tomarse del análisis por método de Rayleigh. Losa hecha de placas recibe acero que cada capa necesita de sus momentos, y cizalla en una dirección. Ehecha [Verificar piezas de hormigón y hacer cargas sísmicas](topic:concrete-and-seismic).
- **Para que un ingeniero verifique.** Resultados de cimentación, hormigón y ¿Qué falla primero? son ayudas. Cargas de viento no están hechas.

**En todas las apps**

- **Idiomas.** La ayuda está en 54 idiomas. Los que van más allá del inglés son borradores de máquina hasta que un hablante nativo los lea; diez son nuevos (lituano, letón, bosnio, marathi, telugu, albanés, afrikáans, filipino, suajili, uzbeko).
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra}} elige ajuste, 2 filas o 1 fila. Barra que ya entra queda igual; lo demás se desplaza de lado.
- **Cuadrícula de propiedades.** Campos de zapata usan cuadrícula compartida: categorías plegables y densidad compacta. Aritmética escrita como 2*450 sigue funcionando.
- **Dispositivos de entrada.** Trackpad, lápiz, mouse 3D, control y MIDI pueden manejar las apps. Ehecha [Navegar en 3D](topic:navigate-3d).
- **Panel de Problemas.** Advertencias de nuevas verificaciones aparecen en mismo panel {{ui:Problemas}} de antes.
- **Conecta tu IA.** Tu asistente conectado vía CadCraft Studio funciona con las ocho apps y ve solo lo que permites. Conexión de un clic, conector alojado y tu propia clave API en Studio aún vienen. Ehecha [Usar DetailCraft con un asistente de IA](topic:use-with-ai-assistants).

### Corregido en 0.8.1

- **Idiomas en Studio.** Studio y ediciones empaquetadas pueden cambiar idioma en ejecución; antes solo inglés. Aún no probado en todas las plataformas: avisanos si el idioma no cambia.
- **Selección por ventana cruzada.** Instaladores 0.8.1 traen comportamiento de selección por ventana ya correcto en versión web 0.8; un instalador anterior no.
- **Tablets en vertical.** Altura de cuadrícula sobrante va al lienzo, y el diseño de hoja empieza en 760 px o menos.

### Ndaha'éi ko versión-pe

- **Enviar NC a una máquina** no está publicado.
- **Cargas de viento** para hormigón no están hechas, y las verificaciones de hormigón y cimentación son para revisión de un ingeniero.
- **Firma de código.** Instaladores de Windows y .dmg de macOS no están firmados: Windows puede advertir y macOS pide clic derecho, luego Abrir.

Otros cambios están en [Novedades en 0.7](topic:whats-new-0-7).
