---
title: Exportar IFC para coordinación
summary: Escriba un archivo IFC4 de todo el modelo, con acero, pernos, zapatas y varillas, para compartirlo con arquitectos, ingenieros y otro software.
keywords: ifc, ifc4, ifc2x3, bim, exportar, importar, importar ifc, agujeros, pernos, pernos sueltos, aberturas, sujetadores, coordinación, intercambio de modelos, step, openbim, interferencias, visor
from: cfcb0cd6
---

La exportación a IFC escribe todo el modelo como un solo archivo IFC4 que pueden abrir el software BIM y los visores IFC.

## Exportar

1. Elija {{ui:IFC}} en el grupo {{ui:Salida}}.
2. El navegador descarga `<name>.ifc`. La barra de estado indica lo que se incluyó, por ejemplo «IFC4 exportado: 25 piezas, 88 sujetadores, 7 zapatas, 132 varillas».

Si el modelo no tiene piezas, zapatas ni varillas, la barra de estado dice «Todavía no hay nada que exportar».

## Qué contiene el archivo

| En DetailCraft | En el archivo IFC |
|---|---|
| Cada nivel | Un nivel de edificio (IfcBuildingStorey), bajo un proyecto, un predio y un edificio |
| Rejillas | Un IfcGrid con sus ejes y etiquetas |
| Columnas, vigas, contraventeos | IfcColumn, IfcBeam, IfcMember (contraviento), cada uno como extrusión de una forma de perfil estándar con sus dimensiones reales |
| Placas, placas de extremo, placas base | IfcPlate |
| Agujeros y recortes | Aberturas (IfcOpeningElement) cortadas de la pieza |
| Un miembro y sus placas soldadas | Un ensamble (IfcElementAssembly) etiquetado con su marca de ensamble |
| Pernos y varillas de anclaje | IfcMechanicalFastener con diámetro y longitud |
| Zapatas | IfcFooting (zapata aislada), con la descripción del concreto como material |
| Cada varilla | IfcReinforcingBar con su marca, diámetro, área y longitud, barrida sobre su eje real, con curvas verdaderas en los dobleces |

La etiqueta de cada pieza es su marca de pieza. Cada elemento también lleva un conjunto de propiedades «DetailCraft» con sus marcas, perfil y peso. Cada elemento se ubica en el nivel más alto que esté a la altura de su punto más bajo o por debajo de él. Los materiales se agrupan por grado.

## Identificadores estables para reexportar

El identificador IFC de cada elemento (GlobalId) se calcula a partir del nombre del modelo y del identificador propio del elemento en el modelo. Si exporta dos veces el mismo modelo, los identificadores coinciden, de modo que el software que compara versiones puede detectar qué cambió.

:::warning
Cambiar el nombre del modelo cambia todos los identificadores. Conserve el mismo nombre del modelo entre emisiones de un proyecto.
:::

## Verifíquelo

Los archivos IFC de DetailCraft se vuelven a leer con un lector IFC independiente en su suite de pruebas. Los programas difieren en cómo leen IFC, así que abra el archivo en el software que usa su equipo antes de confiar en él. La aplicación BimCraft de CadCraft también abre archivos IFC.

## Todavía no disponible

- Traer conexiones, zapatas y varillas desde un archivo IFC. {{ui:Importar IFC}} trae vigas, columnas, miembros, placas, rejillas, niveles, agujeros, recortes y pernos, y enumera lo que dejó fuera.
- Datos analíticos o de análisis estructural.
- Cualquier vista distinta de la vista de referencia IFC4.

## Importar

{{ui:Importar IFC}} en el grupo {{ui:Archivo}} (o arrastrando un archivo `.ifc` a la vista) crea un modelo nuevo a partir de un archivo IFC2X3 o IFC4:

- **Vigas, columnas, miembros (contraventeos) y placas** cuyo cuerpo sea un solo perfil extruido que DetailCraft conoce, emparejado con el catálogo o conservado como perfil personalizado; **rejillas** y **niveles** tomados de la rejilla y de los niveles del archivo.
- **Agujeros:** cada abertura circular (IfcOpeningElement que vacía una pieza importada) perpendicular a una de las caras de la pieza: alma o patines de un perfil I o de un canal, paredes de un tubo, una placa o las alas de un ángulo. Un agujero que atraviesa ambas paredes de un tubo se importa una sola vez.
- **Recortes:** una abertura rectangular que ocupa todo el ancho de un perfil I o de un canal desde un extremo, hacia abajo desde arriba o hacia arriba desde abajo.
- **Pernos:** cada IfcMechanicalFastener o IfcFastener, con su diámetro, longitud, grado y tipo (perno o varilla de anclaje), como **perno suelto**. Los pernos sueltos se muestran en la vista, en la lista de materiales y en la exportación IFC, y permanecen en su lugar cuando mueve los miembros. Con nada seleccionado, el panel {{ui:Propiedades}} los cuenta y tiene {{ui:Quitar pernos sueltos}} para usarlo cuando agregue conexiones en su lugar.

El informe enumera por clase todo lo demás, con el motivo por el que se dejó fuera: muros y losas, zapatas y varillas, agujeros ranurados, agujeros en tubos redondos y conexiones (un archivo IFC lleva sus placas y pernos, no la regla que los generó).
