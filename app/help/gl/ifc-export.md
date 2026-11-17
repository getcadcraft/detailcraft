---
title: Exportar IFC para a coordinación
summary: Escribir un ficheiro IFC4 de todo o modelo, aceiro, parafusos, zapatas e armadura, para compartir con arquitectos, enxeñeiros e outro software.
keywords: ifc, ifc4, ifc2x3, bim, exportar, importar, importar ifc, furos, parafusos, parafusos soltos, aberturas, elementos de fixación, coordinación, intercambio de modelos, step, openbim, interferencias, visor
from: cfcb0cd6
---

A exportación IFC escribe todo o modelo como un único ficheiro IFC4 que o software BIM e os visores IFC poden abrir.

## Exportar

1. Escolla {{ui:IFC}} no grupo {{ui:Saída}}.
2. O navegador descarga `<name>.ifc`. A barra de estado indica o que se incluíu, por exemplo "IFC4 exportado: 25 pezas, 88 elementos de fixación, 7 zapatas, 132 barras."

Se o modelo non ten pezas, zapatas nin barras, a barra de estado indica "Aínda non hai nada que exportar."

## Que hai no ficheiro

| En DetailCraft | No ficheiro IFC |
|---|---|
| Cada nivel | Un piso do edificio (IfcBuildingStorey), baixo un proxecto, un emprazamento e un edificio |
| Cuadrículas | Un IfcGrid cos seus eixos e etiquetas |
| Piares, vigas, riostras | IfcColumn, IfcBeam, IfcMember (riostra), cada un unha extrusión dunha forma de perfil estándar coas súas dimensións reais |
| Placas, placas de extremo, placas base | IfcPlate |
| Furos e recortes | Aberturas (IfcOpeningElement) cortadas da peza |
| Unha peza e as súas placas soldadas | Un conxunto (IfcElementAssembly) etiquetado coa marca do conxunto |
| Parafusos e varillas de anclaxe | IfcMechanicalFastener con diámetro e lonxitude |
| Zapatas | IfcFooting (zapata aillada), co texto do formigón como material |
| Cada barra | IfcReinforcingBar con marca, diámetro, área e lonxitude, barrida ao longo da súa liña central real con arcos reais nas dobras |

A etiqueta de cada peza é a súa marca da peza. Cada elemento leva tamén un conxunto de propiedades "DetailCraft" coas súas marcas, perfil e peso. Cada elemento sitúase no piso máis alto igual ou por debaixo do seu punto máis baixo. Os materiais agrúpanse por calidade.

## IDs estables para reexportacións

O ID IFC de cada elemento (GlobalId) calcúlase a partir do nome do modelo e do ID propio do elemento no modelo. Se exporta o mesmo modelo dúas veces, os IDs coinciden, para que o software que compara versións poida ver o que cambiou.

:::warning
Cambiar o nome do modelo cambia todos os IDs. Manteña o mesmo nome do modelo entre emisións dun proxecto.
:::

## Comprobación

Os ficheiros IFC de DetailCraft son lidos de novo por un lector IFC independente no seu conxunto de probas. Os programas difiren en como len IFC, así que abra o ficheiro no software que usa o seu equipo antes de confiar nel. A aplicación BimCraft de CadCraft tamén abre ficheiros IFC.

## Aínda non

- Traer conexións, zapatas e armadura desde un ficheiro IFC. {{ui:Importar IFC}} trae vigas, piares, riostras, placas, cuadrículas, niveis, furos, recortes e parafusos, e enumera o que deixou fóra.
- Datos analíticos ou de cálculo de estruturas.
- Calquera cousa distinta da vista de referencia IFC4.

## Importar

{{ui:Importar IFC}} no grupo {{ui:Ficheiro}} (ou soltar un ficheiro `.ifc` na vista) crea un modelo novo a partir dun ficheiro IFC2X3 ou IFC4:

- **Vigas, piares, riostras e placas** cuxo corpo é un único perfil extruído que DetailCraft coñece, asociado ao catálogo ou mantido como perfil personalizado; **cuadrículas** e **niveis** tomados das cuadrículas e pisos do ficheiro.
- **Furos:** cada abertura redonda (IfcOpeningElement que vacía unha peza importada) en ángulo recto a unha das caras da peza: a alma ou as alas dun perfil en I ou en U, as paredes dun tubo, unha placa, as abas dunha cantoneira. Un furo que atravesa as dúas paredes dun tubo entra unha soa vez.
- **Recortes:** unha abertura rectangular que ocupa toda a largura dun perfil en I ou en U desde un extremo, desde arriba ou desde abaixo.
- **Parafusos:** cada IfcMechanicalFastener ou IfcFastener, coa súa diámetro, lonxitude, calidade e tipo (parafuso ou varilla de anclaxe), como **parafuso solto**. Os parafusos soltos aparecen na vista, na lista de materiais e na exportación IFC, e quedan onde están cando move os elementos. O panel {{ui:Propiedades}}, sen nada seleccionado, cóntaos e ten {{ui:Eliminar parafusos soltos}} para cando engade conexións.

O informe enumera todo o demais por clase co motivo de que quedou fóra: muros e forxados, zapatas e barras, furos ranurados, furos en tubos redondos, conexións (un ficheiro IFC leva as súas placas e parafusos, non a regra que os creou).
