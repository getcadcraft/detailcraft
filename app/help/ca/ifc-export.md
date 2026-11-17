---
title: Exporta IFC per a la coordinació
summary: Escriu un fitxer IFC4 de tot el model, acer, cargols, sabates i armadura, per compartir-lo amb arquitectes, enginyers i altres programes.
keywords: ifc, ifc4, ifc2x3, bim, exporta, importa, importa ifc, forats, cargols, cargols solts, obertures, fixacions, coordinació, intercanvi de models, step, openbim, col·lisió, visor
from: cfcb0cd6
---

L'exportació IFC escriu tot el model en un únic fitxer IFC4 que el programari BIM i els visors d'IFC poden obrir.

## Exporta

1. Trieu {{ui:IFC}} al grup {{ui:Sortida}}.
2. El navegador baixa `<name>.ifc`. La barra d'estat diu què s'ha inclòs, per exemple "IFC4 exportat: 25 peces, 88 fixacions, 7 sabates, 132 barres."

Si el model no té peces, sabates ni barres, la barra d'estat diu "Encara no hi ha res per exportar."

## Què hi ha al fitxer

| A DetailCraft | Al fitxer IFC |
|---|---|
| Cada nivell | Una planta de l'edifici (IfcBuildingStorey), sota un únic projecte, solar i edifici |
| Les quadrícules | Un IfcGrid amb els seus eixos i etiquetes |
| Columnes, bigues, reforços | IfcColumn, IfcBeam, IfcMember (reforç), cadascun una extrusió d'un perfil estàndard amb les seves dimensions reals |
| Plaques, plaques d'extrem, plaques de base | IfcPlate |
| Forats i entalladures | Obertures (IfcOpeningElement) tallades de la peça |
| Una barra i les seves plaques soldades | Un conjunt (IfcElementAssembly) etiquetat amb la marca de conjunt |
| Cargols i ancoratges | IfcMechanicalFastener amb diàmetre i longitud |
| Sabates | IfcFooting (sabata aïllada), amb el text del formigó com a material |
| Cada barra | IfcReinforcingBar amb la seva marca de barra, diàmetre, àrea i longitud, recorreguda per la seva línia central real amb arcs reals als doblecs |

L'etiqueta de cada peça és la seva marca de peça. Cada element porta també un conjunt de propietats "DetailCraft" amb les seves marques, perfil i pes. Cada element es col·loca a la planta més alta que sigui igual o inferior al seu punt més baix. Els materials s'agrupen per qualitat.

## Identificadors estables per a les reexportacions

L'identificador IFC (GlobalId) de cada element es calcula a partir del nom del model i de l'identificador propi de l'element al model. Si exporteu el mateix model dues vegades, els identificadors coincideixen, de manera que el programari que compara versions pot dir què ha canviat.

:::warning
Canviar el nom del model canvia tots els identificadors. Mantingueu el mateix nom de model entre les emissions d'un projecte.
:::

## Comproveu-ho

Els fitxers IFC de DetailCraft es tornen a llegir amb un lector d'IFC independent, en el conjunt de proves. Els programes llegeixen l'IFC de manera diferent, així que obriu el fitxer amb el programari que usa el vostre equip abans de confiar-hi. L'aplicació BimCraft de CadCraft també obre fitxers IFC.

## Encara no

- Importar connexions, sabates i armadura des d'un fitxer IFC. {{ui:Importa IFC}} importa bigues, columnes, barres, plaques, quadrícules, nivells, forats, entalladures i cargols, i fa una llista del que deixa fora.
- Dades analítiques o d'anàlisi estructural.
- Qualsevol cosa que no sigui la vista de referència IFC4.

## Importa

{{ui:Importa IFC}} al grup {{ui:Fitxer}} (o en deixar anar un fitxer `.ifc` sobre la vista) crea un model nou a partir d'un fitxer IFC2X3 o IFC4:

- **Bigues, columnes, barres (reforços) i plaques** el cos de les quals és un únic perfil extruït que DetailCraft coneix, emparellat amb el catàleg o conservat com a perfil personalitzat; **quadrícules** i **nivells** de la quadrícula i les plantes del fitxer.
- **Forats:** cada obertura circular (IfcOpeningElement que buida una peça importada) perpendicular a una de les cares de la peça: l'ànima o les ales d'un perfil en I o en U, les parets d'un tub, una placa, les aletes d'una cantonera. Un forat que travessa les dues parets d'un tub s'importa una sola vegada.
- **Entalladures:** una obertura rectangular que ocupa tota l'amplada d'un perfil en I o en U des d'un extrem, cap avall des de dalt o cap amunt des de baix.
- **Cargols:** cada IfcMechanicalFastener o IfcFastener, amb el seu diàmetre, longitud, qualitat i tipus (cargol o ancoratge), com a **cargol solt**. Els cargols solts es mostren a la vista, a la llista de materials i a l'exportació IFC, i es queden on són quan moveu les barres. El tauler {{ui:Propietats}}, sense res seleccionat, els compta i té {{ui:Suprimeix els cargols solts}} per als casos en què afegiu connexions.

L'informe enumera la resta per classe amb el motiu pel qual s'ha deixat fora: murs i forjats, sabates i barres, forats amb ranura, forats en tubs circulars, connexions (un fitxer IFC porta les seves plaques i cargols, però no la regla que els va crear).
