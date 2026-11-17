---
title: Emisiones, revisiones y registro de cambios de planos
summary: Mantenga un solo historial de emisiones con el modelo del arquitecto: lea las emisiones, registre instrucciones de obra, planos de taller y modelos vinculados contra una emisión, y consulte el registro de cambios de planos.
keywords: emisión, revisión, revisiones, registro de cambios, registro de cambios de planos, registro de planos, instrucción de obra, plano de taller, modelo vinculado, licitación, construcción, historial de emisiones, planos de taller, fabricación
from: 4b9a1b7b
---

## Qué hará

Trabaje con el mismo historial de emisiones que el resto del equipo. Vea qué hojas salieron en cada revisión, y registre lo que ocurre en obra contra la emisión a la que pertenece.

## Pasos

1. Abra **Emisiones y revisiones**.
2. Elija **Leer un historial de emisiones** y seleccione el archivo `.issues.json` guardado desde BimCraft u otra app. Sus emisiones y registros se agregan a los suyos. No se reemplaza nada.
3. Elija **Agregar un registro** para una instrucción de obra, un plano de taller, un juego de marcas de revisión, un modelo vinculado o una nota. Seleccione la emisión a la que corresponde y su estado. Un archivo que elija se registra por su nombre, tamaño y SHA-256; el archivo permanece donde está.
4. **Registro de cambios de planos** muestra una fila por cada hoja y una columna por cada emisión. Una revisión entre corchetes se volvió a emitir sin cambios.
5. **Descargar el registro de cambios (CSV)** guarda las emisiones, la tabla de hojas y los registros. **Guardar el historial de emisiones** escribe un archivo que leen las otras apps.

## Puntos útiles

- Las hojas se siguen emitiendo desde **Planos**, hoja por hoja. Esas emisiones aparecen aquí: las hojas emitidas en una misma fecha con una misma nota forman una sola emisión.
- Los registros y las emisiones que lea se guardan en el archivo del modelo. Cada cambio es un paso de Deshacer.
- Leer dos veces el mismo archivo no duplica nada. Cuando dos copias contienen el mismo registro, se conserva la más reciente.
