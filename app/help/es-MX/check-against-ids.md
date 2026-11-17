---
title: Revisar la exportación IFC contra el IDS de un cliente
summary: Cargue el archivo .ids que le entregaron y vea en Problemas cada pieza exportada que no lo cumpla, antes de enviar el IFC.
keywords: ids, especificación de entrega de información, buildingsmart, requisitos, entrega, revisión, validación, control de calidad, exportación ifc, propiedad, material, adquisiciones
from: 50d0f785
---

## Qué hará

Un IDS (Information Delivery Specification, un estándar de buildingSMART) es la lista de lo que debe contener un IFC. DetailCraft revisa el IFC que exportaría (el mismo archivo que escribe {{ui:IFC}}) contra el IDS que le entregaron, y lista cada pieza que no cumple.

## Pasos

1. Abra o dibuje su modelo.
2. Haga clic en {{ui:Comprobar con IDS…}} en el grupo {{ui:Salida}} de la barra de herramientas.
3. Haga clic en {{ui:Cargar un archivo .ids…}} y elija el archivo. No se sube nada.
4. Lea el resultado: cada especificación con {{ui:Cumple}} o {{ui:Falla}} y a cuántos elementos aplica.
5. Abra Problemas ({{key:Ctrl+Shift+M}}) y haga clic en una falla: el miembro, la conexión, la escalera o la zapata de la que proviene queda seleccionado y la vista hace zoom hasta él.

## Qué debe ver

- Una advertencia por cada elemento exportado y cada requisito que no cumple, con el nombre de la especificación, lo que pide el IDS y lo que tiene la exportación.
- El informe de revisión (en Problemas) empieza con el IDS: su título, versión, autor y el conteo de cada especificación.

## Bueno saber

- El IDS se guarda en el archivo del modelo, así que se vuelve a revisar al abrir el modelo. Cargarlo u olvidarlo es un paso que puede deshacer.
- Cada cambio se revisa de nuevo un momento después; en un modelo grande, la revisión espera un poco más entre ejecuciones.
- Los GlobalId de la exportación salen del nombre del modelo y de los números de pieza dentro de DetailCraft, así que se mantienen iguales de una revisión a otra. Renombrar el modelo da a cada elemento GlobalId nuevos.
- Los números se comparan en unidades SI (la exportación está en milímetros; las longitudes se convierten primero a metros).

- Los patrones del IDS se leen como el valor completo. Un `^` al inicio y un `$` al final también se toman como "el valor completo", como lo entienden la mayoría de los archivos IDS.

## Siguiente

- [Exportar IFC](topic:ifc-export)
