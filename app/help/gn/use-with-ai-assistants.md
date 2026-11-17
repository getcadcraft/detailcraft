---
title: Usar DetailCraft con un asistente de IA
summary: Dejá que tu propio asistente de IA o tu script lea el modelo, sus piezas, problemas e interferencias, agregue miembros y conexiones, guarde y exporte (también USD): permisos, conexión a través de CadCraft Studio y el registro de actividad.
keywords: ia, asistente, agente, mcp, model context protocol, script, automatización, piezas, interferencias, conexiones, permisos, desconectar, actividad, deshacer
from: d624c9a0
---

## Lo que vas a aprender

Cómo dejar que un asistente de IA (o un script que escribiste) trabaje con DetailCraft, y cómo decidir qué puede tocar.

DetailCraft **no tiene IA propia** y no envía nada a ningún lado. Vos traés el asistente: cualquier programa que hable el Model Context Protocol (MCP). DetailCraft solo le da herramientas, y vos elegís cuáles.

## Activarlo

1. Abrí {{ui:Configuración}} (el engranaje de la barra de la aplicación, o {{key:Mod+,}}) y andá a la pestaña {{ui:DetailCraft}}.
2. Debajo de {{ui:Asistentes}}, marcá **Permitir que los asistentes de IA y los scripts usen DetailCraft**. Está desactivado hasta que lo hagas.
3. Elegí lo que puede hacer: **Leer** viene marcado por defecto; marcá **Editar**, **Guardar** o **Exportar** solo cuando los necesites.

Las herramientas fuera de los permisos que marcaste no se ofrecen al asistente, y si igual pide una, DetailCraft la rechaza y lo anota en el registro de actividad. Apagar el interruptor termina todas las conexiones de una vez.

## Conectar tu asistente

Los asistentes se conectan a través de **CadCraft Studio** en tu computadora: Studio ejecuta un pequeño servidor que solo esta computadora puede alcanzar, protegido por un token que genera cada vez que se inicia. En Studio, elegí {{ui:Conectar un asistente}} y copiá la dirección y el token en tu asistente (Studio muestra los ajustes exactos para pegar). Nunca compartas el token.

:::note
Una pestaña del navegador no puede abrir una conexión para un asistente: en las aplicaciones del navegador el interruptor no tiene efecto hasta que uses CadCraft Studio en tu computadora.
:::

## Vos tenés el control

- **Cada cambio es un paso de deshacer**, marcado como del asistente (por ejemplo "Asistente: agregar viga", "Asistente: agregar cartelas"). {{key:Mod+Z}} deshace el último cambio del asistente completo. El propio `undo` del asistente solo deshace sus propios pasos, nunca los tuyos, salvo que lo pida explícitamente.
- **Espera por vos.** Mientras estás colocando un miembro, moviendo piezas o pegando, DetailCraft rechaza los cambios del asistente y le indica que pruebe de nuevo.
- **Sabés cuándo hay uno conectado.** Un botón en la barra de la aplicación muestra el nombre del asistente mientras está conectado; hacé clic para ver lo que puede hacer, o para **Desconectarlo**.
- **Actividad.** {{ui:Configuración}} › {{ui:DetailCraft}} › {{ui:Asistentes}} › {{ui:Actividad}} lista cada llamada: cuándo, qué herramienta, hecha o rechazada. {{ui:Guardar el registro}} guarda una copia.

## Lo que puede pedir un asistente

Todas las longitudes están en milímetros, los puntos son `[x, y, z]` con z hacia arriba, como en el modelo.

| Herramienta | Permiso | Qué hace |
|---|---|---|
| `app_info`, `model_describe` | Leer | El modelo abierto: grillas, niveles, fases, miembros por tipo y perfil, conexiones, zapatas, escaleras, piezas, peso del acero, problemas |
| `parts_list` | Leer | Marcas de pieza con perfil, material, largo de corte, cantidad, peso, fase y marcas de conjunto; por tipo, perfil, marca o fase |
| `problems_list` | Leer | Lo que lista la pestaña {{ui:Problemas}}, cada uno con a qué se refiere |
| `clash_check` | Leer | La [verificación de interferencias](topic:clash-check), con su tolerancia y fases |
| `selection_get` | Leer | Lo que tenés seleccionado |
| `selection_set` | Editar | Selecciona miembros, conexiones, zapatas o escaleras (por id o marca de pieza) para mostrártelos; no cambia nada |
| `member_add` | Editar | Una viga, columna, riostra o placa entre dos puntos |
| `connection_add` | Editar | Placas de extremo, lengüetas de corte, placas base, empalmes o cartelas donde se encuentran los miembros indicados, como lo hacen los botones de {{ui:Conectar}} |
| `undo` | Editar | Deshace los últimos pasos del asistente |
| `model_save` | Guardar | El propio Guardar de DetailCraft |
| `model_export` | Exportar | IFC, archivos NC, BOM, programa de doblado, archivo KISS o lista de cortes, como lo generan los botones de {{ui:Salida}} |
| `usd_export` | Exportar | El modelo de acero como USD (.usda, .usdc o .usdz), como lo escribe {{ui:Salida}} › {{ui:USD}} (ver [Exportar el modelo de acero como USD](topic:usd)); en Studio puede escribir el archivo en una carpeta que hayas permitido |

## Si algo no funciona

- **El asistente no ve herramientas de DetailCraft:** revisá que el interruptor esté activado en esta ventana, y que la ventana esté abierta en Studio.
- **"necesita el permiso de edición"** (o de guardar, o de exportar): marcalo en {{ui:Asistentes}} y volvé a pedirlo.
- **"La persona está colocando un miembro":** terminá lo que estás haciendo (o presioná {{key:Esc}}), y después dejá que el asistente pruebe de nuevo.
- **Errores "401" o "token":** el token cambió (Studio se reinició, o {{ui:Nuevo token}}). Copiá el nuevo en los ajustes del asistente.

## Ver también

- [Recetas para asistentes de IA](common:assistants-recipes): ejemplos resueltos, cada uno con las herramientas que llama.
