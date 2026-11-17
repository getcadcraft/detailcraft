---
title: Exportar IFC para coordinación
summary: Oñemoĩ archivo IFC4 modelo entero-pe, acero, pernos, zapatas ha armadura, compartir hag̃ua arquitectos, ingenieros ha otro software ndive.
keywords: ifc, ifc4, ifc2x3, bim, exportar, importar, importar ifc, agujeros, pernos, pernos sueltos, aberturas, sujetadores, coordinación, intercambio de modelo, step, openbim, interferencia, visor
from: cfcb0cd6
---

Exportación IFC oñemoĩ modelo entero IFC4 archivo peteĩ, BIM software ha visor IFC omoĩ hag̃ua.

## Exportar

1. Eiporavo {{ui:IFC}} grupo {{ui:Output}} pe.
2. Navegador oñemboguru `<name>.ifc`. Barra de estado he'i mba'e oike, ejemplo "IFC4 exportado: 25 piezas, 88 sujetadores, 7 zapatas, 132 barras."

Modelo-pe piezas, zapatas térã barras ndaipóri, barra de estado he'i "Todavía nada para exportar."

## Mba'e archivo IFC-pe

| DetailCraft-pe | Archivo IFC-pe |
|---|---|
| Opavave nivel | Peteĩ edificio piso (IfcBuildingStorey), peteĩ proyecto, sitio ha edificio pe |
| Grillas | IfcGrid ejes ha etiqueta ndive |
| Columnas, vigas, arriostres | IfcColumn, IfcBeam, IfcMember (arriostre), peteĩ-peteĩ perfil estándar forma extrusión tamaño realwa ndive |
| Placas, placas de extremo, placas base | IfcPlate |
| Agujeros y recortes | Aberturas (IfcOpeningElement) pieza-gui ojehasa |
| Miembro ha ipegua placa soldada | Conjunto (IfcElementAssembly) conjunto marca ndive |
| Pernos ha barras de anclaje | IfcMechanicalFastener diámetro ha longitud ndive |
| Zapatas | IfcFooting (zapata aislada), hormigón texto material-pe |
| Peteĩ-peteĩ barra | IfcReinforcingBar barra marca, diámetro, área ha longitud ndive, eje real ha curvas ojapo mbytépe |

Peteĩ-peteĩ pieza etiqueta pieza marca. Opavave elemento oguerekova avei "DetailCraft" conjunto propiedad marca, perfil ha peso ndive. Opavave elemento oikóta piso ryepýpe ipypýva ndive térã ipypýgui. Material grado rupi oñemboguru.

## ID estable reexportación-pe

Opavave elemento IFC id (GlobalId) oñemoĩ modelo réra ha elemento modelo id rupi. Modelo mokõi jey exportado, ids oñemoĩ, upévare versión comparación software ohechauka mba'e oñemoambue.

:::warning
Modelo réra ñemoambue opavave id ñemoambue. Proyecto ñemboguru mbytépe modelo réra joyke'y.
:::

## Ohechá

DetailCraft archivo IFC ojeheka IFC lector independiente test suite-pe. Programas IFC ojehecha ndaipórirõ, archivo ndojapói ere mboyve ne equipo ojeporavóva ndive ejeporavo. CadCraft BimCraft app IFC archivo avei oñemboguru.

## Todavía nada

- Conexiones, zapatas ha armadura IFC archivo-gui oñemboguru. {{ui:Import IFC}} vigas, columnas, miembros, placas, grillas, niveles, agujeros, recortes ha pernos oñemboguru, ha omombe mba'e nopyta.
- Análisis analítico térã análisis estructural dato.
- IFC4 referencia vista ambue mba'e.

## Importar

{{ui:Import IFC}} grupo {{ui:File}} pe (térã `.ifc` archivo vista-pe oheja) ojapo modelo pyahu IFC2X3 térã IFC4 archivo rupi:

- **Vigas, columnas, miembros (arriostres) ha placas** extruido perfil peteĩ DetailCraft oikuaáva, catálogo-pe ojejoa térã perfil propio ramo; **grillas** ha **niveles** archivo grilla ha pisos rupi.
- **Agujeros:** opavave redondo abertura (IfcOpeningElement pieza oikéva ojeguerekóva) pieza cara ryepýpe: viga I térã canal web térã flanges, tubo paredes, placa, ángulo ala. Tubo mokõi pared ojeguahẽva agujero peteĩ jey ojehasa.
- **Recortes:** rectangular abertura viga I térã canal ancho tuichaite peve punta-gui, arriba-gui térã abajo-gui.
- **Pernos:** opavave IfcMechanicalFastener térã IfcFastener, diámetro, longitud, grado ha clase (perno térã barra de anclaje) ndive, **perno suelto** rupi. Pernos suelto vista, lista de materiales ha IFC exportación-pe oñemoĩ, miembros oñemoambue ramo oiko hendápe. {{ui:Properties}} panel, ningún selectado ndive, omoñondive ha tiene {{ui:Remove loose bolts}} conexiones pyahu agregáramo.

Informe ambue mba'e ohecha clase rupi, mba'e rupi ndojejoaporãva: paredes ha losas, zapatas ha barras, ranuras agujeros, redondo tubo agujeros, conexiones (IFC archivo ohechauka placas ha pernos, ndaha'éi regla oñemoĩva).
