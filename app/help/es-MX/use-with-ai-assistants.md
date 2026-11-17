---
title: Usar DetailCraft con un asistente de IA
summary: Deje que su propio asistente de IA o script lea el modelo, sus piezas, problemas e interferencias, agregue miembros y conexiones, guarde y exporte (también USD): permisos, conexión mediante CadCraft Studio y registro de actividad.
keywords: ia, asistente, agente, mcp, model context protocol, script, automatización, piezas, interferencias, conexiones, permisos, desconectar, actividad, deshacer
from: d624c9a0
---

## Qué aprenderá

Cómo dejar que un asistente de IA (o un script que usted escribió) trabaje con DetailCraft, y cómo decidir a qué puede acceder.

DetailCraft **no tiene IA propia** y no envía nada a ningún lugar. Usted aporta el asistente: cualquier programa que hable el Model Context Protocol (MCP). DetailCraft solo le da herramientas, y usted elige cuáles.

## Actívelo

1. Abra {{ui:Configuración}} (el engranaje de la barra de aplicaciones, o {{key:Mod+,}}) y vaya a la pestaña {{ui:DetailCraft}}.
2. En {{ui:Asistentes}}, marque **Permitir que los asistentes de IA y los scripts usen DetailCraft**. Está desactivado hasta que lo haga.
3. Elija lo que puede hacer: **Leer** viene marcado al inicio; marque **Editar**, **Guardar** o **Exportar** solo cuando los necesite.

Las herramientas fuera de los permisos que marcó no se ofrecen al asistente, y si pide una de todos modos, DetailCraft la rechaza y lo anota en el registro de actividad. Apagar el interruptor termina todas las conexiones de inmediato.

## Conecte su asistente

Los asistentes se conectan mediante **CadCraft Studio** en su computadora: Studio ejecuta un pequeño servidor al que solo esta computadora puede acceder, protegido por un token que genera cada vez que se inicia. En Studio, elija {{ui:Conectar un asistente}} y copie la dirección y el token en su asistente (Studio muestra la configuración exacta que debe pegar). Nunca comparta el token.

:::note
Una pestaña del navegador no puede abrir una conexión para un asistente: en las apps del navegador, el interruptor no tiene efecto hasta que use CadCraft Studio en su computadora.
:::

## Usted tiene el control

- **Cada cambio es un solo paso de deshacer**, marcado como del asistente (por ejemplo, "Asistente: agregar viga", "Asistente: agregar cartelas"). {{key:Mod+Z}} revierte el último cambio del asistente completo. El propio `undo` del asistente solo revierte sus propios pasos, nunca los suyos, a menos que lo pida explícitamente.
- **Espera a que usted termine.** Mientras coloca un miembro, mueve piezas o pega, DetailCraft rechaza los cambios del asistente y le indica que lo intente de nuevo.
- **Sabe cuándo hay uno conectado.** Un botón en la barra de aplicaciones muestra el nombre del asistente mientras está conectado; haga clic en él para ver lo que puede hacer, o para **Desconectar** el asistente.
- **Actividad.** {{ui:Configuración}} › {{ui:DetailCraft}} › {{ui:Asistentes}} › {{ui:Actividad}} enumera cada llamada: cuándo, qué herramienta, y si se hizo o se rechazó. {{ui:Guardar el registro}} guarda una copia.

## Lo que puede pedir un asistente

Todas las longitudes están en milímetros; los puntos `[x, y, z]` con z hacia arriba, como en el modelo.

| Herramienta | Permiso | Qué hace |
|---|---|---|
| `app_info`, `model_describe` | Leer | El modelo abierto: ejes, niveles, fases, miembros por tipo y perfil, conexiones, zapatas, escaleras, piezas, peso de acero, problemas |
| `parts_list` | Leer | Marcas de pieza con perfil, material, longitud de corte, cantidad, peso, fase y marcas de ensamblaje; por tipo, perfil, marca o fase |
| `problems_list` | Leer | Lo que lista la pestaña {{ui:Problemas}}, cada una con su tema |
| `clash_check` | Leer | La [verificación de interferencias](topic:clash-check), con su tolerancia y fases |
| `selection_get` | Leer | Lo que usted tiene seleccionado |
| `selection_set` | Editar | Selecciona miembros, conexiones, zapatas o escaleras (por id o marca de pieza) para mostrárselos; no cambia nada |
| `member_add` | Editar | Una viga, columna, contraventeo o placa entre dos puntos |
| `connection_add` | Editar | Placas de extremo, placas de cortante, placas base, empalmes o cartelas donde se encuentran los miembros dados, como lo hacen los botones de {{ui:Conectar}} |
| `undo` | Editar | Revierte los últimos pasos del asistente |
| `model_save` | Guardar | El Guardar propio de DetailCraft |
| `model_export` | Exportar | IFC, archivos NC, BOM, programa de doblado, archivo KISS o lista de corte, como lo hacen los botones de {{ui:Salida}} |
| `usd_export` | Exportar | El modelo de acero como USD (.usda, .usdc o .usdz), como lo escribe {{ui:Salida}} › {{ui:USD}} (vea [Exportar el modelo de acero como USD](topic:usd)); en Studio puede escribir el archivo en una carpeta que usted permitió |

## Si algo no funciona

- **El asistente no ve herramientas de DetailCraft:** revise que el interruptor esté activado en esta ventana, y que la ventana esté abierta en Studio.
- **"necesita el permiso de edición"** (o de guardar, o de exportar): márquelo en {{ui:Asistentes}} y luego vuelva a pedirlo.
- **"La persona está colocando un miembro":** termine lo que está haciendo (o pulse {{key:Esc}}) y luego deje que el asistente lo intente de nuevo.
- **Errores "401" o "token":** el token cambió (Studio se reinició, o usó {{ui:Nuevo token}}). Copie el nuevo token en la configuración del asistente.

## Vea también

- [Recetas para asistentes de IA](common:assistants-recipes): ejemplos resueltos, cada uno con las herramientas que usa.
