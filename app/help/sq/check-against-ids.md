---
title: Kontrollo eksportin IFC sipas IDS të klientit
summary: Ngarko skedarin .ids që të është dhënë dhe shiko te Problemet çdo pjesë të eksportuar që nuk e plotëson, përpara se të dërgosh IFC.
keywords: ids, specifikim i dorëzimit të informacionit, buildingsmart, kërkesa, dorëzim, kontroll, vlerësim, qa, eksport ifc, veti, material, prokurim
from: 50d0f785
---

## Çfarë do të bësh

Një IDS (Information Delivery Specification, standard i buildingSMART) është lista e asaj që duhet të përmbajë një IFC. DetailCraft e kontrollon IFC-në që do të eksportonte (i njëjti skedar që shkruan {{ui:IFC}}) sipas IDS-së që të është dhënë, dhe liston çdo pjesë që nuk e plotëson.

## Hapat

1. Hap ose vizato modelin tënd.
2. Kliko {{ui:Kontrollo sipas IDS…}} te grupi {{ui:Dalja}} i shiritit.
3. Kliko {{ui:Ngarko një skedar .ids…}} dhe zgjidh skedarin. Asgjë nuk ngarkohet.
4. Lexo rezultatin: çdo specifikim me {{ui:Kalon}} ose {{ui:Dështon}} dhe sa elemente aplikohen.
5. Hap {{ui:Problemet}} ({{key:Ctrl+Shift+M}}) dhe kliko një dështim: anëtari, lidhja, shkalla ose themeli nga vjen zgjidhet dhe pamja zmadhohet deri te ai.

## Çfarë duhet të shohësh

- Një paralajmërim për çdo element të eksportuar dhe kërkesë që nuk e plotëson, me emrin e specifikimit, atë që kërkon IDS-ja dhe atë që ka eksporti.
- Raporti i kontrollit (te Problemet) fillon me IDS-në: titullin, versionin, autorin dhe numërimet e çdo specifikimi.

## Mirë për t'u ditur

- IDS-ja ruhet në skedarin e modelit, kështu kontrollohet sërish kur e hap modelin. Ngarkimi ose harrimi i saj është një hap që mund ta zhbësh.
- Çdo ndryshim kontrollohet sërish pak më vonë; te një model i madh kontrolli pret pak më shumë midis ekzekutimeve.
- GlobalIds e eksportit vijnë nga emri i modelit dhe numrat e pjesëve brenda DetailCraft, kështu mbeten të njëjta nga një kontroll te tjetri. Riemërtimi i modelit i jep çdo elementi GlobalIds të reja.
- Numrat krahasohen në njësi SI (eksporti është në milimetra; gjatësitë shndërrohen fillimisht në metra).

- Modelet në IDS lexohen si vlera e plotë. Një `^` në fillim dhe një `$` në fund merren gjithashtu si "vlera e plotë", ashtu siç i kuptojnë shumicën e skedarëve IDS.

## Më pas

- [Eksporto IFC](topic:ifc-export)
