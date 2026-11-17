---
title: Export IFC pro koordinaci
summary: Zapište soubor IFC4 celého modelu, oceli, šroubů, patek a výztuže, pro sdílení s architekty, inženýry a jiným softwarem.
keywords: ifc, ifc4, ifc2x3, bim, export, import, import ifc, otvory, šrouby, volné šrouby, otvory v prvcích, spojovací prvky, koordinace, výměna modelu, step, openbim, kolize, prohlížeč
from: cfcb0cd6
---

Export IFC zapíše celý model jako jeden soubor IFC4, který otevře BIM software a prohlížeče IFC.

## Export

1. Zvolte {{ui:IFC}} ve skupině {{ui:Výstup}}.
2. Prohlížeč stáhne soubor `<name>.ifc`. Stavový řádek uvede, co se do něj dostalo, například „IFC4 exportováno: 25 dílů, 88 spojovacích prvků, 7 patek, 132 výztužných prutů.“

Pokud model nemá žádné díly, patky ani pruty výztuže, stavový řádek hlásí „Zatím není co exportovat.“

## Co je v souboru

| V DetailCraft | V souboru IFC |
|---|---|
| Každé podlaží | Stavební podlaží (IfcBuildingStorey), pod jedním projektem, pozemkem a budovou |
| Osy | IfcGrid s jeho osami a popisky |
| Sloupce, nosníky, ztužidla | IfcColumn, IfcBeam, IfcMember (ztužidlo), každý jako extruze standardního tvaru profilu se skutečnými rozměry |
| Plechy, čelní desky, patní plechy | IfcPlate |
| Otvory a výřezy | Otvory (IfcOpeningElement) vyříznuté z dílu |
| Prut a jeho svařené plechy | Sestava (IfcElementAssembly) označená značkou sestavy |
| Šrouby a kotevní tyče | IfcMechanicalFastener s průměrem a délkou |
| Patky | IfcFooting (plošná patka), s betonem jako materiálem |
| Každý prut výztuže | IfcReinforcingBar s označením, průměrem, plochou a délkou, vedený po skutečné ose s oblouky v ohybech |

Označení každého dílu je jeho značka dílu. Každý prvek má také sadu vlastností „DetailCraft“ se svými označeními, profilem a hmotností. Každý prvek leží v nejvyšším podlaží na nebo pod svým nejnižším bodem. Materiály jsou seskupeny podle třídy.

## Stálá id pro opakované exporty

Id IFC každého prvku (GlobalId) se vypočítá z názvu modelu a vlastního id prvku v modelu. Exportujete-li stejný model dvakrát, id se shodují, takže software porovnávající verze pozná, co se změnilo.

:::warning
Přejmenování modelu změní každé id. Název modelu ponechte stejný mezi vydáními projektu.
:::

## Kontrola

Soubory IFC od DetailCraft čte nezávislý čtenář IFC v jeho testovací sadě. Programy se liší v tom, jak IFC čtou, proto soubor před použitím otevřete v softwaru vašeho týmu. Aplikace BimCraft od CadCraft také otevírá soubory IFC.

## Zatím ne

- Načítání styčníků, patek a výztuže ze souboru IFC. {{ui:Import IFC}} načte nosníky, sloupce, pruty, plechy, osy, úrovně, otvory, výřezy a šrouby a vypíše, co vynechal.
- Analytická nebo konstrukční data pro analýzu.
- Cokoli jiného než referenční pohled IFC4.

## Import

{{ui:Import IFC}} ve skupině {{ui:Soubor}} (nebo přetažení souboru `.ifc` do pohledu) vytvoří nový model ze souboru IFC2X3 nebo IFC4:

- **Nosníky, sloupce, pruty (ztužidla) a plechy**, jejichž těleso je jeden vytažený profil, který DetailCraft zná, přiřazený ke katalogu nebo zachovaný jako vlastní profil; **osy** a **úrovně** ze souboru os a podlaží.
- **Otvory:** každý kruhový otvor (IfcOpeningElement, který vytváří dutinu v načteném dílu) kolmo na některou plochu dílu: stojinu nebo pásnice profilu I nebo U, stěny trubky, plech, rameno úhelníku. Otvor procházející oběma stěnami trubky se načte jednou.
- **Výřezy:** obdélníkový výřez přes celou šířku profilu I nebo U od jednoho konce, shora dolů nebo zdola nahoru.
- **Šrouby:** každý IfcMechanicalFastener nebo IfcFastener s průměrem, délkou, třídou a druhem (šroub nebo kotevní tyč) jako **volný šroub**. Volné šrouby se zobrazují v pohledu, kusovníku a exportu IFC a zůstávají na místě, když posouváte pruty. Panel {{ui:Vlastnosti}}, když nic není vybráno, je počítá a má {{ui:Odebrat volné šrouby}} pro případ, kdy místo nich přidáváte spoje.

Protokol uvede vše ostatní podle třídy s důvodem, proč bylo vynecháno: stěny a desky, patky a pruty výztuže, prodloužené otvory, otvory v kulatých trubkách, spoje (soubor IFC nese jejich plechy a šrouby, nikoli pravidlo, které je vytvořilo).
