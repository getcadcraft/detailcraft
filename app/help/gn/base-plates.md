---
title: Agregar placas base y barras de anclaje
summary: Oñemoĩ placa base soldada ha cuatro barras de anclaje debajo de columna, oñemoĩ hetaiterei medida, ha oñemboguru opavave columna similarpe.
keywords: placa base, baseplate, barras de anclaje, pernos de anclaje, pernos de sujeción, base de columna, pernos de cimiento, similar
from: 619ebc64
---

Conexión de placa base oñemoĩ placa debajo de columna, oñeacorta columna espesor de placa rupi, ojunta mokõi soldadura rupi ha oñembohasa cuatro barra de anclaje placa agujero rupi.

:::warning
Umi medida ha'e punto de partida, ndaha'éi diseño. DetailCraft ndokontrolái apoyo, resistencia de barra ni empotramiento.
:::

## Agregar placa base

1. Eiporavo {{ui:Select}} ({{key:V}}) ha eklika columna. Ha'e tiene que ser vertical.
2. Eiporavo {{ui:Base plate}} grupo {{ui:Connect}} pe, térã {{ui:Add base plate}} panel {{ui:Properties}} pe.
3. Barra de estado he'i "Placa base agregada con cuatro barras de anclaje." Conexión pyahu oñeiporavo.

Columna oñeiporúva peteĩ placa base. Ojapo jepe, barra de estado he'i "Esta columna ya tiene una placa base."

## Cambiar

Eiporavo placa base (eklika placa térã barra). {{ui:Plate, bolts and weld (mm)}} rupi:

| Ajuste | Predeterminado | Mba'épa ojapo |
|---|---|---|
| Espesor de placa | 25 | Columna oñeacorta esa cantidad rupi |
| Longitud de placa | 450 | Columna profundidad rupi |
| Ancho de placa | 400 | Columna ryepýpe |
| Diámetro de barra | 20 | Barra de anclaje tamaño |
| Diámetro de agujero | 33 | Agujero placa pe |
| Grado de perno | F1554 Gr 36 | Barra grado, texto rupi |
| Separación de barras (según profundidad) | 350 | Barra centro ndive, placa longitud rupi |
| Separación de barras (transversal) | 300 | Barra centro ndive, ryepýpe |
| Saliente de barra sobre placa | 100 | Placa tuichaite gotyo barra tuichaite peve |
| Empotramiento de barra bajo placa | 450 | Placa ruguépe hormigón ryepýpe |
| Tamaño de soldadura de filete | 8 | Columna base opavave ryepý |
| Material de placa | A36 | Texto |
| Espacio de mortero | 0 | Hormigón tuichaite ha placa ruguépe ryepý |
| Rigidizadores | None | Eiporavo None, 2 (ojoavo web ndive) térã 4 (ojoavo web ryepýpe jepe); pe ojehecha |
| Espesor, altura de rigidizador | 12, 150 | |
| Profundidad de lug de corte | 0 | Lug mboja'o mba'e tuichaite placa ruguépe; 0 = lug ndaiporãi |
| Espesor, ancho de lug de corte | 25, 150 | |
| Arandelas de placa | None | Opavave barra pe, térã ndaipóri |
| Tamaño, espesor de arandela | 0, 0 | 0 = AISC Design Guide 1 rupi barra-pe minimo |

Longitud de barra = empotramiento + espacio de mortero + espesor de placa + saliente. Predeterminado rupi ha'e 575 mm.

## Detalles de base: mortero, rigidizadores, lug de corte, arandelas

Opavave mokõiva ndaipóri placa base pyahu, ha placa base umi modelo rupi ojapo DetailCraft 0.4 ndive mboyve.

- **Espacio de mortero.** Placa ohasa ko tuichaite hormigón tuichaite gotyo, ha barra ohasa ipahaite upe rupi. AISC Design Guide 1 (2.10) he'i 1 in. piso terminado pe ha 1½ a 2 in. zapata térã pilar pe; placa tuichaite térã lug de corte ndive hetave.
- **Rigidizadores.** Placa vertical oñesoldá columna ha placa pe, columna ryepýgui placa borde peve, rectángulo rupi (chaflán térã conicidad ndaipóri). **2** oñemoĩ web ndive ojoavo, flange opavave gotyo; **4** oñemboguru mokõi web ryepýpe ojoavo, flange mbytépe, placa costado peve. Columna tubo rupi, cara opavave ryepýpe oñemoĩ. Peteĩ-peteĩ oñesoldá columna ha placa pe mokõi tenda.
- **Lug de corte.** Placa oñesoldá opavave gotyo placa base ruguépe, columna profundidad ndive ojoavo, ryepýpe. DetailCraft ohendu ojere jepe lug ha espacio de mortero hasy mboyve ndaha'éi tuichaitérõ. Ndojapói zapata pozo; upévare [chequeo de interferencias](topic:clash-check) lug ha zapata ndoikóiva.
- **Arandelas de placa.** Arandela cuadrada peteĩ-peteĩ barra pe, placa base pe ikatu, columna conjunto-pe ojehechava suelta (columna ndive oñeguerahaukáva, ndaha'éi soldada: Design Guide 1, 2.6). Tamaño ha espesor 0 rupi, DetailCraft ojagarra mínimo arandela AISC Design Guide 1, 2da ed., Tabla 2.3 barra-pe; barra métrica ha'e inch tamaño tuichaitépe (M20 barra ojagarra 7/8 in. fila: 2½ in. × 5/16 in.). Propiedades panel ohechauka tamaño oñeporandúva. Arandela agujero = barra diámetro + 1/16 in.: ko DetailCraft ojeporavo, tabla ndohomeái. DetailCraft ohendu barra saliente ndojehasa porã arandela ha tuerca pe (saliente menor que espesor de arandela + diámetro de barra).

Design Guide 1, Tabla 2.3, omombe avei barra agujero placa pe: 1-5/16 in. ¾ in. barra-pe, 1-9/16 in. ⅞ in.-pe, 1-13/16 in. 1 in.-pe. DetailCraft ndoporomudái nde agujero tamaño.

Ohendu jepe advertencia barra agujero placa borde peve 1,2 × agujero diámetro mboyve, barra columna contorno ryepýpe, térã placa columna mboyve.

## Copiar a columnas similares

1. Eiporavo placa base.
2. Eiporavo {{ui:Apply to similar (n)}}, térã {{ui:Similar}} grupo {{ui:Connect}} ndive {{ui:More}} menú pe.
3. Opavave columna vertical mismo perfil ndive, placa base ndaiporãi ha ndaha'éi otro columna pe ojoavo, oguerekova kopia.

## Placas base ha zapatas

Placa base ndoikotevéi zapata, ha zapata ndoikuaáí placa base ojoayva: barra de anclaje ndojoaporã zapata armadura ndive. Oñemoĩ zapatas {{ui:Footing}} rupi; ehecha [Colocar zapatas con armadura](topic:footings-and-rebar).
