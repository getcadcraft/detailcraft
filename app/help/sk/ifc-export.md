---
title: Export IFC na koordináciu
summary: Zapíšte súbor IFC4 celého modelu, vrátane ocele, skrutiek, pätiek a výstuže, na zdieľanie s architektmi, inžiniermi a iným softvérom.
keywords: ifc, ifc4, ifc2x3, bim, export, import, import ifc, otvory, skrutky, voľné skrutky, vyrezania, spojovacie prvky, koordinácia, výmena modelu, step, openbim, kolízia, prehliadač
from: cfcb0cd6
---

Export IFC zapíše celý model ako jeden súbor IFC4, ktorý môže otvoriť BIM softvér a prehliadače IFC.

## Export

1. Zvoľte {{ui:IFC}} v skupine {{ui:Output}}.
2. Prehliadač stiahne `<name>.ifc`. Stavový riadok uvedie, čo sa do súboru dostalo, napríklad „IFC4 exportované: 25 dielcov, 88 spojovacích prvkov, 7 pätiek, 132 výstužných prútov.“

Ak model nemá dielce, pätky ani výstužné prúty, stavový riadok hlási: „Zatiaľ nie je nič na export.“

## Čo je v súbore

| V DetailCraft | V súbore IFC |
|---|---|
| Každá úroveň | Podlažie budovy (IfcBuildingStorey), pod jedným projektom, areálom a budovou |
| Osi | IfcGrid s osami a označeniami |
| Stĺpy, nosníky, diagonály | IfcColumn, IfcBeam, IfcMember (diagonála), každý ako vytlačenie štandardného tvaru profilu so skutočnými rozmermi |
| Dosky, čelné dosky, pätné dosky | IfcPlate |
| Otvory a vyrezania | Otvory (IfcOpeningElement) vyrezané z dielca |
| Prvok a jeho zvarené dosky | Zostava (IfcElementAssembly) označená značkou zostavy |
| Skrutky a kotevné tyče | IfcMechanicalFastener s priemerom a dĺžkou |
| Pätky | IfcFooting (plošná pätka), s betónom ako materiálom |
| Každý prút | IfcReinforcingBar s označením, priemerom, plochou a dĺžkou, prevedený po skutočnej stredovej osi so skutočnými oblúkmi v ohyboch |

Označenie každého dielca je jeho značka dielca. Každý prvok nesie aj sadu vlastností „DetailCraft“ so svojimi značkami, profilom a hmotnosťou. Každý prvok leží v najvyššom podlaží na alebo pod svojím najnižším bodom. Materiály sú zoskupené podľa triedy.

## Stabilné identifikátory pri opätovnom exporte

Každý identifikátor prvku IFC (GlobalId) sa odvodí z názvu modelu a z vlastného identifikátora prvku v modeli. Exportujte ten istý model dvakrát a identifikátory sa zhodujú, takže softvér porovnávajúci verzie vie, čo sa zmenilo.

:::warning
Premenovanie modelu zmení každý identifikátor. Počas vydaní projektu nechajte názov modelu rovnaký.
:::

## Overenie

Súbory IFC z DetailCraft číta späť nezávislý čítač IFC v jeho testovacej sade. Programy sa líšia v čítaní IFC, preto súbor pred spoliehaním otvorte v softvéri, ktorý váš tím používa. Aplikácia BimCraft od CadCraft otvára súbory IFC tiež.

## Zatiaľ nie

- Načítanie spojov, pätiek a výstuže zo súboru IFC. {{ui:Import IFC}} načíta nosníky, stĺpy, diagonály, dosky, osi, úrovne, otvory, vyrezania a skrutky a uvedie, čo nechal.
- Analytické dáta alebo dáta štrukturálnej analýzy.
- Čokoľvek iné než referenčný pohľad IFC4.

## Import

{{ui:Import IFC}} v skupine {{ui:File}} (alebo pretiahnutie súboru `.ifc` do pohľadu) vytvorí nový model zo súboru IFC2X3 alebo IFC4:

- **Nosníky, stĺpy, diagonály a dosky** s telom tvoreným jedným vytlačeným profilom, ktorý DetailCraft pozná, priradené ku katalógu alebo zachované ako vlastný profil; **osi** a **úrovne** zo mriežky a podlaží súboru.
- **Otvory:** každý okrúhly otvor (IfcOpeningElement, ktorý prerušuje dielec, čo sa načítal), kolmý na jednu z plôch dielca: stojina alebo príruby I-profilu či U-profilu, steny rúrky, doska, ramená uholníka. Otvor cez obe steny rúrky sa načíta raz.
- **Vyrezania:** obdĺžnikový otvor, ktorý zaberá celú šírku I-profilu alebo U-profilu od jedného konca, zhora dole alebo zdola nahor.
- **Skrutky:** každý IfcMechanicalFastener alebo IfcFastener, s priemerom, dĺžkou, triedou a druhom (skrutka alebo kotevná tyč), ako **voľná skrutka**. Voľné skrutky sa zobrazujú v pohľade, kusovníku a exporte IFC a zostávajú na mieste, keď presúvate prvky. Panel {{ui:Properties}}, keď nie je nič vybrané, ich spočíta a má {{ui:Remove loose bolts}} pre prípad, keď namiesto nich pridávate spoje.

Správa uvádza všetko ostatné podľa triedy s dôvodom, prečo to bolo vynechané: steny a stropy, pätky a výstužné prúty, drážkované otvory, otvory v okrúhlych rúrkach a spoje (súbor IFC nesie ich dosky a skrutky, nie pravidlo, ktoré ich vytvorilo).
