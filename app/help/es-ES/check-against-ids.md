---
title: Comprobar la exportación IFC con el IDS de un cliente
summary: Cargue el archivo .ids que le han entregado y vea en Problemas cada pieza exportada que no lo cumple, antes de enviar el IFC.
keywords: ids, especificación de entrega de información, buildingsmart, requisitos, entrega, comprobación, validación, control de calidad, exportación ifc, propiedad, material, aprovisionamiento
from: 50d0f785
---

## Lo que hará

Un IDS (Information Delivery Specification, estándar de buildingSMART) es la lista de lo que debe contener un IFC. DetailCraft comprueba el IFC que exportaría (el mismo archivo que escribe {{ui:IFC}}) frente al IDS que le han entregado, y enumera cada pieza que no llega.

## Pasos

1. Abra o dibuje su modelo.
2. Haga clic en {{ui:Comprobar con IDS…}} en el grupo {{ui:Salida}} de la barra de herramientas.
3. Haga clic en {{ui:Cargar un archivo .ids…}} y elija el archivo. No se sube nada.
4. Lea el resultado: cada especificación con {{ui:Cumple}} o {{ui:No cumple}} y a cuántos elementos se aplica.
5. Abra Problemas ({{key:Ctrl+Shift+M}}) y haga clic en un fallo: el miembro, la unión, la escalera o la zapata de origen queda seleccionado y la vista se acerca a él.

## Lo que debe ver

- Un aviso por cada elemento exportado y cada requisito que no cumple, con el nombre de la especificación, lo que pide el IDS y lo que contiene la exportación.
- El informe de comprobación (en Problemas) empieza por el IDS: su título, versión, autor y el recuento de cada especificación.

## Conviene saber

- El IDS se guarda en el archivo del modelo, así que se vuelve a comprobar al abrir el modelo. Cargarlo o quitarlo es un paso que puede deshacer.
- Cada cambio se vuelve a comprobar poco después; en un modelo grande, la comprobación tarda un poco más entre pasadas.
- Los GlobalId de la exportación proceden del nombre del modelo y de los números de pieza de DetailCraft, así que se mantienen de una comprobación a otra. Si cambia el nombre del modelo, cada elemento recibe nuevos GlobalId.
- Los valores numéricos se comparan en unidades SI (la exportación está en milímetros; las longitudes se convierten antes a metros).

- Los patrones del IDS se leen como valor completo. Un `^` al principio y un `$` al final también se toman como "valor completo", tal como los entienden la mayoría de archivos IDS.

## Siguiente

- [Exportar IFC](topic:ifc-export)
