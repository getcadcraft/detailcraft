---
title: Exportar IFC para la coordinación
summary: Escriba un archivo IFC4 de todo el modelo (acero, tornillos, zapatas y armadura) para compartirlo con arquitectos, ingenieros y otro software.
keywords: ifc, ifc4, ifc2x3, bim, exportar, importar, importar ifc, agujeros, tornillos, tornillos sueltos, huecos, fijaciones, coordinación, intercambio de modelos, step, openbim, interferencias, visor
from: cfcb0cd6
---

La exportación IFC escribe todo el modelo como un único archivo IFC4 que pueden abrir el software BIM y los visores de IFC.

## Exportar

1. Elija {{ui:IFC}} en el grupo {{ui:Salida}}.
2. El navegador descarga `<name>.ifc`. La barra de estado indica lo que se incluyó, por ejemplo "IFC4 exportado: 25 piezas, 88 fijaciones, 7 zapatas, 132 barras."

Si el modelo no tiene piezas, zapatas ni barras, la barra de estado indica "Todavía no hay nada que exportar."

## Qué contiene el archivo

| En DetailCraft | En el archivo IFC |
|---|---|
| Cada nivel | Una planta del edificio (IfcBuildingStorey), bajo un proyecto, un emplazamiento y un edificio |
| Ejes | Un IfcGrid con sus ejes y etiquetas |
| Pilares, vigas, diagonales | IfcColumn, IfcBeam, IfcMember (diagonal), cada uno una extrusión de una forma de perfil estándar con sus dimensiones reales |
| Placas, placas de testa, placas de base | IfcPlate |
| Agujeros y rebajes | Huecos (IfcOpeningElement) recortados en la pieza |
| Un elemento y sus placas soldadas | Un conjunto (IfcElementAssembly) etiquetado con su marca de conjunto |
| Tornillos y barras de anclaje | IfcMechanicalFastener con diámetro y longitud |
| Zapatas | IfcFooting (zapata aislada), con el texto del hormigón como material |
| Cada barra | IfcReinforcingBar con su marca, diámetro, área y longitud, barrida a lo largo de su eje real con arcos reales en los dobleces |

La etiqueta de cada pieza es su marca de pieza. Cada elemento lleva además un conjunto de propiedades "DetailCraft" con sus marcas, perfil y peso. Cada elemento se sitúa en la planta más alta que esté a su altura más baja o por debajo de ella. Los materiales se agrupan por grado.

## Identificadores estables para las re-exportaciones

El identificador IFC de cada elemento (GlobalId) se calcula a partir del nombre del modelo y del identificador propio del elemento en el modelo. Si exporta el mismo modelo dos veces, los identificadores coinciden, de modo que el software que compara versiones puede saber qué ha cambiado.

:::warning
Cambiar el nombre del modelo cambia todos los identificadores. Mantenga el mismo nombre de modelo entre emisiones de un proyecto.
:::

## Compruébelo

Los archivos IFC de DetailCraft se leen de nuevo con un lector IFC independiente de su batería de pruebas. Los programas difieren en cómo leen IFC, así que abra el archivo en el software que usa su equipo antes de confiar en él. La aplicación BimCraft de CadCraft también abre archivos IFC.

## Pendiente

- Traer al modelo uniones, zapatas y armadura desde un archivo IFC. {{ui:Importar IFC}} trae vigas, pilares, diagonales, placas, ejes, niveles, agujeros, rebajes y tornillos, y enumera lo que deja fuera.
- Datos analíticos o de cálculo estructural.
- Cualquier cosa distinta de la vista de referencia IFC4.

## Importar

{{ui:Importar IFC}} en el grupo {{ui:Archivo}} (o arrastrar un archivo `.ifc` a la vista) crea un modelo nuevo a partir de un archivo IFC2X3 o IFC4:

- **Vigas, pilares, diagonales y placas** cuyo cuerpo sea una extrusión de un perfil que DetailCraft conoce, asociados al catálogo o conservados como perfil personalizado; **ejes** y **niveles** a partir de la malla y las plantas del archivo.
- **Agujeros:** todo hueco circular (IfcOpeningElement que vacía una pieza importada) perpendicular a una de las caras de la pieza: el alma o las alas de un perfil en I o en U, las paredes de un tubo, una placa, las alas de un angular. Un agujero que atraviesa ambas paredes de un tubo se importa una sola vez.
- **Rebajes:** un hueco rectangular que ocupa todo el ancho de un perfil en I o en U desde un extremo, hacia abajo desde arriba o hacia arriba desde abajo.
- **Tornillos:** todo IfcMechanicalFastener o IfcFastener, con su diámetro, longitud, grado y tipo (tornillo o barra de anclaje), como **tornillo suelto**. Los tornillos sueltos se ven en la vista, en la lista de materiales y en la exportación IFC, y permanecen en su sitio cuando mueve elementos. El panel {{ui:Propiedades}}, sin nada seleccionado, los cuenta y tiene {{ui:Quitar tornillos sueltos}} para cuando añada uniones en su lugar.

El informe enumera todo lo demás por clase, con el motivo por el que se dejó fuera: muros y forjados, zapatas y barras, agujeros ranurados, agujeros en tubos redondos, uniones (un archivo IFC contiene sus placas y tornillos, pero no la regla que los generó).
