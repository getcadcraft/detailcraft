---
title: Emisiones, revisiones y registro de cambios de planos
summary: Mantené un solo historial de emisiones con el modelo del arquitecto: leé las emisiones, anotá instrucciones de obra, planos de taller y modelos vinculados contra una emisión, y leé el registro de cambios de planos.
keywords: emisión, revisión, revisiones, registro de cambios, registro de cambios de planos, registro de planos, instrucción de obra, plano de taller, modelo vinculado, licitación, construcción, historial de emisiones, planos de taller, fabricación
from: 4b9a1b7b
---

## Lo que vas a hacer

Trabajá con el mismo historial de emisiones que el resto del equipo. Vé qué hojas salieron en qué revisión, y guardá lo que pasa en obra contra la emisión a la que pertenece.

## Pasos

1. Abrí **Emisiones y revisiones**.
2. Elegí **Leer un historial de emisiones** y seleccioná el archivo `.issues.json` guardado desde BimCraft u otra aplicación. Sus emisiones y registros se agregan a los tuyos. No se reemplaza nada.
3. Elegí **Agregar un registro** para una instrucción de obra, un plano de taller, un juego de anotaciones, un modelo vinculado o una nota. Seleccioná la emisión a la que corresponde y su estado. Un archivo que elegís se registra por su nombre, tamaño y SHA-256; el archivo queda donde está.
4. **Registro de cambios de planos** muestra una fila por cada hoja y una columna por cada emisión. Una revisión entre corchetes se volvió a emitir sin cambios.
5. **Descargar el registro de cambios (CSV)** guarda las emisiones, la tabla de hojas y los registros. **Guardar el historial de emisiones** escribe un archivo que leen las otras aplicaciones.

## Bueno saberlo

- Las hojas siguen emitiéndose desde Planos, hoja por hoja. Esas emisiones aparecen acá: las hojas emitidas en una misma fecha con una misma nota forman una sola emisión.
- Los registros y emisiones que leés se guardan en el archivo del modelo. Cada cambio es un Deshacer.
- Leer dos veces el mismo archivo no agrega nada por duplicado. Cuando dos copias tienen el mismo registro, se conserva la más nueva.
