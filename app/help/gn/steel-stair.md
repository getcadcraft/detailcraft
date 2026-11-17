---
title: Generador de escaleras de acero
summary: Peteĩ escalera de acero piso-piso altura, recorrido ha ancho-gui: contrahuella ha huella regla ojeporavo-gui, descansos, barandas y balaustres, planos de taller ha lista de corte peso ndive.
keywords: escalera de acero, generador de escaleras, zanca, peldaño, placa antideslizante, rejilla, bandeja plegada, descanso, baranda, balaustres, contrahuella, huella, osha, ibc, approved document k, lista de corte, pesos, plano de taller
from: a4f0a985
---

Generador de escaleras peteĩ escalera de acero entero ojapo mbohapy número-gui: zancas, peldaños, descansos altura ojapo, barandas poste ha balaustre ndive, zanca agujeros fijación, lista de corte peso ndive, planos de taller. {{ui:Stair}} herramienta-gui oñepyrũ, escalera sencilla-icha (ehecha Escaleras), peteĩ conmutador ojerovia.

## Oñemoĩ escalera de acero

1. Eiporavo {{ui:Stair}} grupo {{ui:Place}} pe, térã {{key:S}} apretá.
2. Derecha-pe, {{ui:Use the steel stair generator}} eklika.
3. Eligi **conjunto de reglas** escalera ojapo tenonderã-pe, **altura** (piso a piso; 0 = siguiente nivel peve), **recorrido disponible** (0 = regla ohechakuaa), **ancho libre** ha **tipo de peldaño**: placa antideslizante, rejilla térã bandeja plegada.
4. Zanca perfil, descansos (regla rupi térã número), barandas (mokõi costado, peteĩ, ndaipóri), baranda altura ha balaustre espacio ajuste.
5. Grilla intersección eklika: primer contrahuella pie.

Escalera eligi (zanca, peldaño térã baranda eklika) ajuste cambiá vaerã; propiedades-pe contrahuellas, huella, pendiente, tramos ha descansos, acero, lista de corte ha conjunto de reglas fuentes ohechauka.

## Conjuntos de reglas

Conjunto de reglas escalera forma límite: altura y huella, 2 × contrahuella + huella, pendiente, descanso, baranda altura ha abertura mayor. DetailCraft ko abajo ojehechauka; región ajuste ha'e, adivinanza ndaha'éi. **Dónde vienen los números de este conjunto de reglas** propiedades-pe eklika: número cada uno fuente ohechauka ha ojehecha mba'éichapa oñemoĩ.

- **Código Internacional de la Edificación 2021**: contrahuella 4 a 7 in., peldaño 11 in. mboyve, barandas 34 a 38 in. Descansos entre 12 ft límite *no leído* ohechauka, barandas número folletos-pe leído: confirmá antes de confiar.
- **OSHA 29 CFR 1910.25 ha 1910.29** (escalera industrial estándar): 30° a 50°, contrahuella 9,5 in. peve, peldaño 9,5 in. mboyve, 22 in. ancho mboyve, descanso escalera ancho ha 30 in. profundidad, baranda superior 36 a 38 in. baranda-pe ojeporu. Reglamento-pe ojehecha.
- **Approved Document K 2013, Inglaterra** (escaleras de acceso y uso general): contrahuella y huella rango, 2 × contrahuella + huella 550 a 700 mm, informe gubernamental-pe ojehecha. Documento DetailCraft-pe baranda altura omombe'ỹ, upévare ajustado altura oñeporu ha Problemas lista omombe.

Conjunto de reglas ndaipóri ndojeguejýi: escalera 600 a 650 mm comodidad regla ojeporu ha regla ndaipóri omombe.

## Mba'e ojapo

- **Contrahuellas y huella.** Contrahuella 2 × contrahuella + huella rango medio-pe ndive, regla mínimo huella ndojeitéi, cantidad mboyve. Recorrido ome'ẽramo, huella ha'e recorrido peldaños rupi, regla rupi ndaporãi oñemboguru.
- **Tramos y descansos.** Regla máxima altura tramo ojeporavo, descanso escalera ancho ha regla mínimo ndive ojapo; descanso pe ikatu. Descanso ha'e marco mokõi viga costado ha mokõi ángulo travesaño, tapa ruguépe, mokõi poste ndive.
- **Peldaños.** Placa antideslizante soldada placa (6 mm predeterminado, dibujo peso-pe ndojeikói). Bandeja plegada nariz-pe retorno oguerekova ha zanca web ndive pernos: mokõi agujero perno 2 mm hasýiva 0,3 ha 0,7 profundidad-pe. Rejilla placa peso mboyeguáicha (soporte barra profundidad × espesor ÷ paso); travesaños ha bandas ndojeikói, lista de corte he'i.
- **Barandas.** Tubo pasamanos poste rupi tramo ha descanso peteĩ-peteĩ rupi; balaustre espacio esfera mayor regla abertura ndojehasái (predeterminado 100 mm ndaipóri).

## Planos, lista de corte, exportación

- Tramo peteĩ conjunto; barandas otro (mokõi costado mismo conjunto, mokõi jey ojapo). Peteĩ-peteĩ conjunto plano oguerekova, zanca plano agujeros ohechauka.
- **Hoja de escalera** (ST-…) cada tramo zanca recta agujero estaciones inferior punta-gui ohechauka, peldaño detalle: corte, nariz, retorno ha extremo brida agujeros ndive.
- {{ui:Cut list and weights}} propiedades-pe opavave sección ha longitud cantidad ha kilogramo ohechauka; {{ui:Download the cut list (CSV)}} omboguru.
- Opavave lista de materiales, NC archivo ha IFC-pe pieza común-icha (IfcMember, IfcColumn, IfcPlate) oñemboguru.

## Ohendu porã

- Peteĩ punto de partida, diseño ndaha'éi. Resistencia ni deflexión control ndaipói; conjunto de reglas forma-pe ndojehai.
- Zanca extremos piso-pe corte cuadrado, detalle ndojapói; descanso poste piso ryepýgui ojeikóva, placa base ndaipói.
- Escalera peteĩ elemento BimCraft-pe oñemoĩ ndaipóri vía.
