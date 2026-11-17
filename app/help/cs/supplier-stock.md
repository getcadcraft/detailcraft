---
title: Zásoby dodavatele a dodací lhůty
summary: Porovnejte tyče, které váš řezný plán kupuje, se skladovým seznamem dodavatele: je jich dost a jak dlouho se čeká?
keywords: dodavatel, zásoby, dodací lhůta, ocelový sklad, hutě, dostupnost, zpožděná dodávka, tyče, nákup, dodávky
from: 1373f5a3
---

Karta {{ui:Dodávky}} vyhledá každý profil, který {{ui:Řezný plán}} kupuje, v skladovém seznamu dodavatele. Soubor zůstává v modelu; nikam se neodesílá.

## Přidání souboru dodavatele

Stiskněte {{ui:Přidat soubor dodavatele}} a vyberte CSV od dodavatele (oddělené čárkou, středníkem nebo tabulátorem). Potřebuje sloupec pro položku nebo profil (Item, Name, Description, Section, SKU) a jeden pro skladové množství (In stock, Quantity, On hand) nebo pro dodací lhůtu. Jednotka (each, metres, kilograms, tonnes), cena, dodavatel a datum doplnění se načtou, pokud pro ně existuje sloupec. Rozumí se i těmto hodnotám: "Out of stock", "In stock", "2-3 weeks", "backorder". Lze uchovat až pět souborů; přidání souboru se stejným názvem jej nahradí.

## Co uvidíte

U každého profilu, který řezný plán kupuje, tabulka ukazuje, co model potřebuje, co je skladem, dodací lhůtu, dodavatele a výsledek:

- **Kryto:** skladem je dost.
- **Nedostatek:** skladem je méně, než je potřeba. Pokud je skladem méně, než je potřeba, a nastavíte nejdelší čekání, dodací lhůta vám řekne, jak dlouho potrvá zbytek.
- **Pozdě:** údaj o skladu chybí a dodací lhůta je delší než čekání, které přijmete.
- **Bez údaje o skladu:** soubor to neuvádí.
- **Jiná jednotka:** dodavatel uvádí profil v jednotce, kterou model nedokáže vypočítat.

Potřeba modelu se udává v tyčích (z vnořeného řezného plánu s vašimi délkami tyčí), v metrech nakoupené tyče a v kilogramech (hmotnost profilu na metr); používá se jednotka samotného souboru. Profil se páruje podle názvu ("W16 X 26" a "w16x26" jsou totéž). Profily, které v souboru nejsou, se vypíší.

Nedostatky a pozdní profily jsou v panelu {{ui:Problémy}}. Zde se nic neobjednává.

## Omezení

Údaje o skladu a dodací lhůty jsou ze souboru, platné k datu jeho vytvoření. Plechy se nerozmísťují, proto se nevyhledávají. Soubor se pouze čte: jakýkoli pokyn v něm je jen text.
