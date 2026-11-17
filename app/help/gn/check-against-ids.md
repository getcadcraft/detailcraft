---
title: Chequear IFC exportación IDS cliente-pe
summary: Cargá .ids archivo oguahẽva ha ehecha opavave exportado parte ndoikóiva Problems-pe, IFC omondo mboyve.
keywords: ids, information delivery specification, buildingsmart, requisitos, entrega, chequeo, validación, qa, exportación ifc, propiedad, material, compras
from: 50d0f785
---

## Mba'épa rejapóta

IDS (Information Delivery Specification, buildingSMART estándar) ha'e lista mba'épa IFC oikotevẽ. DetailCraft chequea IFC oexportaráva ({{ui:IFC}} omoañete archivo) IDS nde oguahẽvape, ha omombe'u opavave parte ndoikóiva.

## Pasos

1. Abrí térã dibujá nde modelo.
2. Clic {{ui:Check against IDS…}} herramienta barra {{ui:Output}} grupo guýpe.
3. Clic {{ui:Load an .ids file…}} ha eiporu archivo. Ndaipóri carga.
4. Ehecha resultado: cada especificación {{ui:Pass}} térã {{ui:Fail}} ha mba'e elemento-pe aplica.
5. Eike Problems ({{key:Ctrl+Shift+M}}) ha clic falla: miembro, conexión, escalera térã zapata ojehechakuaa oñemarka ha vista oñemboguejy upégui.

## Mba'e ehecha

- Aviso peteĩ elemento exportado ha requisito ndoikóiva-pe, especificación réra, IDS ojerure ha exportación oguerekóva.
- Chequeo informe (Problems-pe) oñepyrũ IDS-gui: título, versión, autor ha cada especificación cuenta.

## Ojehechakuaa avei

- IDS oñeñongatu modelo archivo-pe, upévare oñemoñare jey modelo oprimi. Carga térã oheja peteĩ paso ha'e, ojundo.
- Cada cambio ojeñemoñare mbyjaite; modelo tuichave-pe chequeo oúta mboyve cada corrida.
- Exportación GlobalIds oñeme modelo réra ha DetailCraft parte número-gui, upévare oikokatu cada chequeo. Modelo réra mbohapy elemento GlobalIds-kuéra oguerekóta.
- Número compara SI unidad-pe (exportación milímetro-pe; longitud metro-pe oñemoambue ántes).

- Patrón IDS-pe ojehechakuaa valor entero. `^` punta ha `$` punta avei "valor entero" ha'e, IDS archivo-kuéra oikuaáva upeichaite.

## Upe'ỹ

- [Exportar IFC](topic:ifc-export)
