---
title: Reforzar columna de hormigón rectangular
summary: Ejemplo trabajado de detallado columna de hormigón rectangular DetailCraft-pe: omoĩ, varilla longitudinal ha ligadura ome'ẽ, chequeo, superior empalme ha varilla marca ehecha, ha taller hoja ejapo.
keywords: columna de hormigón, columna rectangular, refuerzo de columna, varilla longitudinal, varilla vertical, ligaduras, estribos, amarre transversal, empalme, empalme de arranque, varilla de arranque, cuantía de columna, 1 por ciento, 8 por ciento, espaciado de ligadura, ACI 318-19 25.7.2, EN 1992-1-1 9.5, plano de taller, marcas de varilla, 8C1, 3C2
from: aee2a3ca
---

Ko tema peteĩ cuadrado columna cero-gui chequeado, detallado ha programado detalle-pe ojapo. Viga, losa ha muro hormigón regla [Detail reinforced concrete](topic:reinforced-concrete)-pe; ko ha'e columna parte, reproduci ohechauka numero-kuéra.

:::warning
DetailCraft ome'ẽ varilla detalla, ndodiseñái. Ko varilla ejemplo-pe ñepyrũ valor ha'e, ndaha'éi recomendación: ingeniero responsable tamaño, número ha espaciado ohupyty.
:::

## Mba'e ha'e columna ko'ápe

Columna rectángulo ancho (local x rehe) ha profundidad transversal (local y rehe), ligadura-pe recubrimiento libre, cara peteĩteĩ longitudinal varilla ha cerrado ligadura. Rotación rehe opavave rotación; cara "ancho" ha "profundidad" oĩ.

- Longitudinal varilla ancho cara número ha profundidad cara número ome'ẽ. Esquina varilla mokõi cara-pe oñeikuaa, upévare 3 ha 3 = 8 varilla; 4 ha 4 = 12.
- Ligadura cerrado rectángulo, mokõi gancho esquina-pe, 135° térã 90°. Primer ligadura piso-gui distancia (ha próximo ligadura-gui pyte), extremo zona espaciado mbyky, mitad mboyve.
- Varilla superior-pe: superior varilla-kuéra jehe 'empalme' (ajuste), piso-pe 90° gancho, térã superior punta mbytépe.

## Columna trabajada

400 × 400 mm columna, 3600 mm piso superior ha piso inferior mbytépe, #8 longitudinal varilla, #3 ligadura, 40 mm recubrimiento libre, f'c 28 MPa, fy 420 MPa, ACI 318-19, interior.

1. Eiporu {{ui:Concrete}} pestaña ha omoĩ grilla línea ha nivel columna sostén (panel izquierda).
2. {{ui:Add by grid}}-pe eiporu {{ui:Concrete column}}, grilla intersección ha mokõi nivel jeporavo, {{ui:Width (mm)}} ha {{ui:Depth across (mm)}} 400-pe omoĩ ha {{ui:Add}} oprimi.
3. {{ui:Properties}} panel-pe omoĩ:
   - {{ui:Clear cover (mm)}} 40;
   - {{ui:Longitudinal bars}} #8, {{ui:Bars on a width face}} 3, {{ui:Bars on a depth face}} 3;
   - {{ui:Ties}} #3, {{ui:Hooks}} 135°, {{ui:Spacing between (mm)}} 300, {{ui:End zone length (mm)}} 600, {{ui:Spacing in the end zones (mm)}} 150, {{ui:First one from the face (mm)}} 50;
   - {{ui:Bars at the top}} {{ui:Run on and lap with the bars above}}.

Cada cambio peteĩ deshacer paso.

### Mba'e ohupyty

| Parte | Resultado |
|---|---|
| Longitudinal varilla | 8 varilla #8 (3 × 3 anillo), cada 4375 mm largo: 3600 mm columna más 775 mm empalme superior |
| Empalme | 757 mm compresión empalme-pe oikotevẽ (ACI 318-19 25.5.5.1, fy 420), 775 mm ome'ẽ: necesidad 25 mm-pe tuichave ha'e |
| Ligaduras | 17 ligadura #3, cada corte largo 1359 mm rehe, 150 mm 600 mm extremo zona-pe mokõi ha 300 mm mbytépe |
| Cuantía | 2.5 % bruto sección-gui (límites 1 % ha 8 %, ACI 318-19 10.6.1.1) |
| Varilla libre espacio | 112 mm (40 mm mboyve oikotevẽ, ACI 318-19 25.2.3) |
| Ligadura espaciado | 300 mm (400 mm ojerure: 16 varilla diámetro, 48 ligadura diámetro ha menor costado mínimo, ACI 318-19 25.7.2.1) |
| Ligadura tamaño | #3 (9.5 mm peve ojerure, ACI 318-19 25.7.2.2) |

Opavave {{ui:Checks}} lista-pe; empalme {{ui:Laps and anchorage}}-pe avei.

## Amarre transversal

Peteĩ perímetro ligadura-pe, esquina varilla ojoaju. ACI 318-19 25.7.2.3 cara mbytépe varilla ndoguerekói soporte esquina varilla 150 mm libre-pe. 3 varilla cara-pe, upe oike. 4 térã mboyve cara-pe ndoike, DetailCraft aviso (ha {{ui:Checks}} ha Problems): "cross-ties" oikotevẽ. **Amarre transversal ndojapóiva**: taller-pe mano-pe ojapo, térã cara-pe varilla menos eiporu.

EN 1992-1-1-pe DetailCraft varilla tamaño (8 mm mboyve), número (4 mboyve), acero área (sección 0.2 % – 4 %), libre espaciado ha ligadura espaciado (9.5.2 ha 9.5.3) chequea.

## Empalme, zapata ha columna infra

- **Modelo zapata columna infra oĩ**, columna zapata arranque varilla-gui empalme, empalme avei chequeado.
- **Modelo ambue columna columna infra oĩ**, ambue columna varilla-gui empalme.
- {{ui:Lap length (mm, 0 = as needed)}} ome'ẽ: necesidad-gui pyte ha'e problema, tabla * marca.
- {{ui:Compression lap}} predeterminado ajuste-pe ({{ui:Compression lap}}); columna tracción oĩ ramo {{ui:Tension lap}} eiporu.

## Marca, planilla ha taller hoja

Igual varilla peteĩ marca: superior columna longitudinal varilla 8C1, ligadura 17C2 (número primero, C columna letra, número corrido). {{ui:Bending schedule}} pestaña-pe ojehechakuaa, corte largo ha peso, ha CSV {{ui:Output}} › {{ui:More}} › {{ui:Bending}}-pe.

{{ui:Shop drawing}} columna costado: columna elevación hoja (cada varilla, marca, ligadura zona ha empalme dimensión) ha mitad sección, varilla doblado hoja. {{ui:This sheet as PDF}} guardá.

## Ndojapóiva

- Redondo columna ha espiral, columna no rectangular: ndojapói.
- Esquina ha sección barra ligadura, sísmico detalle (ACI 318-19 capítulo 18): ndojapói.
- Empalme eiporu posición-pe térã escalonado: opavave varilla peteĩ sección-pe empalma.
- Carga suficiente varilla: engeniero diseño.
