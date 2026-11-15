---
title: Novedades en 0.8 ha 0.8.1
summary: Grúa carga tabla-gui montaje película, piloto automático de conexiones, mapa de congestión de armadura, chequeos de cimentación, paneles de madera y liviano entramado, chequeos de constructabilidad y acceso de soldadura, stock de proveedor, primero qué se rompe, recálculo en vivo, más chequeos de concreto y arreglos de 0.8.1.
keywords: novedades, notas de versión, changelog, cambios, 0.8, 0.8.1, versión, nuevas funciones, montaje, grúa, tabla de carga, película, piloto automático, conexiones, armadura, congestión, cimentación, zapata, mat, asentamiento, entramado, madera, liviano, lista de corte, constructabilidad, acceso soldadura, proveedor, stock, plazo de entrega, primero que se rompe, en vivo, concreto, sísmico, losa, idiomas, asistente
from: 6e33e052
---

Ko'ã mba'e ojevy DetailCraft 0.8 (1 de noviembre de 2026) ha 0.8.1 (2 de noviembre de 2026) pe, 0.7 ndive comparado. 0.7 acero miembros chequeáva; 0.8 izaje planifica, conexiones propone, zapatas ha armadura chequea, ha madera ha liviano paredes, pisos ha techos entramado ojapo.

## Pyahu

### Montaje

- **Plan de montaje y película.** {{ui:Montaje}} pestaña-pe grúa describí (dónde oĩ, ijyvy gancho ha tabla-pe ndaipóri rigging) ha tipeá grúa tabla filas. DetailCraft modelo peteĩ conjunto jeyhápe izaja, fase orden ha nivel nivel rupi, ha cada izaje tabla-gui radio-pe ha ejeprefiri margen-pe chequea. {{ui:Guardar película}} peteĩ HTML archivo ojapo, sin conexión ojeporu jeyhápe navegador-pe, teléfono-pe avei. Tabla-gui oĩva, ndaporãiva térã alto izajes {{ui:Problemas}}-pe ohechauka. Ha'e tipeá número rehe plan, izaje plan ndaha'éi. Ver [Plan de montaje y película](topic:erection-movie).

### Conexiones

- **Piloto automático de conexiones.** {{ui:Piloto automático}} pestaña ohecha opavave unión conexión ndaipóri, formas rehe propone: placas base, placas de corte, placas de extremo viga momento-pe ejemarka, empalmes ha cartelas. Carga uniforme térã peteĩ extremo corte ome'ẽ jave, perno cantidad perno diseño resistencia-pe oguahẽ. {{ui:Agregar todas}} propuestas peteĩ deshacer paso-pe agrega. Ha'e punto de partida revisa haguã; ndaha'éi conexión diseño.
- **Chequeos de constructabilidad.** {{ui:Problemas}}-pe llave ndoikuaáiva perno, socket-pe ohasa perno, filete soldadura tamaño límite rupi ndaporãiva ha agua oguahẽ hueco perfiles. Soldadura acceso pyahu: opavave ruedo filete soldadura soplete ndoikuaáiva ohecha jave, pieza ohechauka ha afectado soldadura porcentaje. Ver [Chequeos de constructabilidad](topic:constructability).

### Cimentación y armadura

- **Chequeos de cimentación.** {{ui:Cimentación}} pestaña zapatas, zapatas combinadas ha mat-kuéra chequea suelo describí-gui: soporte, deslizamiento ha volcamiento servicio cargas; flexión, cortante, punzonado, desarrollo ha mínimo acero cargas factorizadas-gui (ACI 318-19). Columna borde térã esquina-pe ohechauka zapata borde ojekuaáva sección ndive. Asentamiento suelo módulo-gui, mat flexible resorte-pe módulo subrasante-gui solve; pilotes grupos ha muros de contención panel propio. Columna cargas tipeáva térã {{ui:Análisis}}-gui ojeiko. Ver [Chequeos de cimentación](topic:foundation-checks).
- **Mapa de congestión de armadura.** {{ui:Congestión}} pestaña cada zapata mapa de calor ohechauka arriba-gui ehechaháicha: barras hoy hasagua hembiapo-pe ndaipóri espacio concreto ho'a haguã, espaciado libre regla ndive ha agregado máximo áridos ha vibrador cabeza ome'ẽ jave. Ver [Mapa de congestión de armadura](topic:rebar-congestion).

### Entramado y suministro

- **Entramado de madera y liviano.** {{ui:Entramado}} pestaña paneles pared, piso ha techo cada pieza, corte lista, comprar stock ha escala plano shop drawing-pe. {{ui:Colocar como miembros}} piezas modelo-pe omoĩ, ha {{ui:Planos PDF}} cada panel peteĩ hoja oñeguardá. Tamaños, espaciamiento ha cabeceras nde-icha; DetailCraft carga soporta chequea ndaipóri. Ver [Paneles de entramado de madera y liviano](topic:framing-panels).
- **Stock de proveedor y plazos.** {{ui:Proveedor}} pestaña proveedor stock lista (CSV) oiko, corte lista compra cada sección-pe stock suficiente ha espera cuánto oguereko ohechauka. Faltantes ha atrasadas secciones {{ui:Problemas}}-pe. Pedido ndaipóri. Ver [Stock de proveedor y plazos](topic:supplier-stock).

### Análisis y diseño

- **¿Mba'e primero oñembyai?** {{ui:Análisis}} pestaña, botón gobernante fuerza combinación, más débil miembro, primer miembro límite-pe ojuhúva cargas mboyve ohupytýta, ha más débil placa de extremo o corte placa pernos corte resistencia oikuaáva-pe ojuhu. Combinaciones ha diseño código primero ojerure. Soporte, bloque de corte, soldaduras ha palanca ndaikuaái. Conectáva asistente avei ojerure.
- **En vivo.** {{ui:En vivo: resolver de nuevo después de cada cambio}} tikitá, cada cambio rire marco nuevamente ojejapo.
- **Concreto, más.** Non-sway marco columna esbelta ojejapo magnificado momento-pe (ACI 318-19 6.6.4.5). Período sísmico análisis-gui oñeikuaa Rayleigh método-pe. Placas-gui ojapo losa cada capa ojeikuaa acero momentos-gui ha cortante una vía. Ver [Chequear elementos de concreto y crear cargas sísmicas](topic:concrete-and-seismic).
- **Ingeniero chequea haguã.** Cimentación, concreto ha ¿mba'e primero oñembyai? resultados ayuda ojehai. Cargas de viento ndaipóri.

### En cada aplicación

- **Idiomas.** Ayuda 54 idioma-pe. Inglés mboyve ojapo máquina borrador, hablante nativo ojeikuaa peve; diez pyahu: lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili, uzbeko.
- **Filas de la barra.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra}} envoltura, 2 filas térã 1 fila elige. Barra ojuhúva ndojejuhu; ambue ñuguyáme ojepyta.
- **Cuadrícula de propiedades.** Zapata campos compartido cuadrícula ojeporu: colapsables categorías ha densidad compacta. 2*450 tipeado aritmética oñemba'apo.
- **Dispositivos de entrada.** Trackpad, lápiz, mouse 3D, control ha MIDI apps ojeguia ikatu. Ver [Navegar en 3D](topic:navigate-3d).
- **Panel de problemas.** Pyahu chequeos advertencias {{ui:Problemas}} panel-pe ohechauka, ymaite ramo.
- **Conecta tu IA.** Tu asistente, CadCraft Studio rupi conectáva, ocho apps ndive oñemba'apo ha ejeporavo nde ojejuhu jave ohechauka. Peteĩ tecla conexión, hospedado conector ha Studio-pe tu propio API clave aún oúva. Ver [Usar DetailCraft con asistente de IA](topic:use-with-ai-assistants).

## Arreglado en 0.8.1

- **Idiomas en Studio.** Studio ha paquete ediciones ejecución-pe idioma ojecambia ikatu; ymaite inglés gui. Opavave plataforma-pe aún ndojeporavai: idioma ndojecambia jave, eñe'ẽ.
- **Selección por ventana cruzada.** 0.8.1 instaladores ojeporu 0.8 web versión-pe ojejuhúva ventana selección; mboyve instalador ndo.
- **Tabletas vertical-pe.** Grilla altura sobrante lienzo-pe ohechauka, ha hoja diseño 760 px térã michĩvéva ojepyrũ.

## Ko versión-pe aún ndaipóri

- **Enviar NC a máquina** ndaipóri liberado.
- **Cargas de viento** concreto-pe ndaipóri ojapo, ha concreto ha cimentación chequeos ingeniero chequea haguã.
- **Firma de código.** Windows instaladores ha macOS .dmg ndaipóri firmados, upévare Windows advertencia ohecha ha macOS clic derecho upéi Abrir ojerure.

Ambue cambio: [Novedades en 0.7](topic:whats-new-0-7).
