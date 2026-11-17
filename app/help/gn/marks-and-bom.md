---
title: Revisar marcas y lista de materiales
summary: Ehecha pieza ha conjunto marca DetailCraft opavave pieza-pe ome'ẽva, revisa lista de materiales ha descargá CSV-pe.
keywords: marcas, numeración, marca de pieza, marca de conjunto, marca de pieza, bom, lista de materiales, lista de material, pesos, lista de pernos, csv, numeración
from: caa2ee80
---

DetailCraft modelo marca iñandu. Ndaipóri numeración orden ha ndaipóri mba'e ojapo: cambio opavave rire, DetailCraft ohechakuaa mávape pieza ha peteĩ acero ha omoĩ peteĩ marca.

## Ha'e marcas ohechauka

- Lista {{ui:Part marks}} panel {{ui:Model}} pe: peteĩ-peteĩ marca perfil, longitud ha cantidad ndive. Eklika peteĩ, selectado primer pieza marca ndive.
- {{ui:Properties}} panel miembro selectado pe (ha **Part marks** lista izquierda panel pe): {{ui:Part mark}} ha {{ui:Assembly}}. Panel título avei marca ohechauka, ejemplo "Viga b1".
- {{ui:Bill of materials}} pestaña, CSV, NC archivo nombre, planos de taller ha IFC exportación (elemento etiqueta).

## Mba'éichapa pieza oñemarca

- **Marcas de pieza:** c columnas-pe, b vigas-pe, br arriostres-pe, st escaleras zanca-pe, p placas-pe (placas de extremo ha placas base avei). Upe rire número: c1, c2, b1, p1 … Pieza mokõi fase-pe oguerekóramo, fase número ojeguerúva oñemoĩ, ejemplo 2-b1.
- **Marcas de conjunto:** C, B, BR térã P. Conjunto ha'e miembro principal ha upéi soldada placas, ejemplo viga ndive mokõi placa de extremo, térã columna ndive placa base.
- Mokõi pieza peteĩ marca compartí oguerekóramo mismo perfil, material ha longitud de corte, mismo agujeros ha recortes, opavave 1 mm mboyve, jaha mbytépe ojere térã ipoguy ojeguerúva.
- Numeración columnas primero, upéi vigas, arriostres ha placas; peteĩ-peteĩ grupo mbytépe perfil nombre rupi, longuevá primero.

Reglas completas, kanal ha ángulo giros ndive: [Reglas de marca](topic:mark-rules).

:::warning
Marcas opavave cambio rire pyahu oñemoĩ, upévare renumerarse ikatu. Pieza ohasa, perfil ojapo térã agujero ohasa ikatu b3 ojogua b4 rehe. Marcas tuichaite ojapo tapiaite modelo pa'ũ rire, ha BOM, NC archivo ha planos de taller peteĩ guardado modelo rupi ojapo.
:::

## Ehecha lista de materiales

Eiporavo {{ui:Bill of materials}} pestaña apopeguágui. Mbohapy tabla oguerekova.

**Piezas**, título-pe acero peso total ndive:

| Columna | Mba'épa |
|---|---|
| Marca de pieza | Eklika selectado primer pieza marca ndive |
| Tipo | viga, columna, arriostre, zanca térã placa |
| Perfil | Ejemplo W16x26 térã PL20x180 |
| Material | Ne-ojapo grado |
| Longitud (mm) | Corte longitud, conexión rire |
| Cantidad | Mba'e tapé |
| Peso unitario (kg) | Perfil masa metro × longitud |
| Peso total (kg) | Peso unitario × cantidad |

Última fila total cantidad ha peso ohechauka.

**Conjuntos:** peteĩ-peteĩ conjunto marca, principal pieza, opavave pieza (ejemplo "b1 + p1 + p1"), cantidad, peso unitario ha peso total.

**Pernos y barras de anclaje:** tipo, diámetro, longitud ha grado rupi ojeporogueráva, cantidad ndive.

:::note
Pesos bruto: agujeros ha recortes ndojejaha. Pernos, tuercas, arandelas ha soldaduras acero peso-pe ndoikói.
:::

## Descargar

Eiporavo {{ui:Download CSV}} pestaña-pe térã {{ui:BOM}} grupo {{ui:Output}} pe. Archivo `<name> BOM.csv` mbohapy tabla oguerekova peteĩ upe rire ambue, peteĩ-peteĩ título ndive, línea blanco ndive. Ojeporavo ikatu opavave planilla programa-pe.

## Ehecha ántes de enviar

1. Eiporavo {{ui:Problems}} pestaña ha ejejapo opavave línea. Conexión ojapo ndaikatúi plasa, agujero ni perno ndojapói, upévare BOM ikatu ndakompleto.
2. Ehecha marca ndereñeñandúva. Viga mokõi ndereguerekoháicha ha marca ojogua, ojeporúva agujero, recorte térã longitud de corte rupi; peteĩ-peteĩ selectá ha ehecha.
3. Modelo guardá, upéi opavave exportación guardado estado rupi ojapo.
