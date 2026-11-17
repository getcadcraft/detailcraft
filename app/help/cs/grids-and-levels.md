---
title: Nastavení os a úrovní
summary: Zadejte osové čáry, jejich rozestupy a úrovně, na které se umísťuje každý prvek.
keywords: osa, osy, mřížka, osové čáry, úrovně, výšky, podlaží, podlahy, rozteč, nastavení
from: 9cad233c
---

Každý prvek v DetailCraftu je umístěn na průsečíku os v určité úrovni. Nastavte nejdřív osy a úrovně; později je můžete změnit.

## Jak zde osy fungují

- **Číslované osy** běží jedním směrem, **písmenné osy** druhým. Názvy jsou jen zvyk: popisek může být libovolný text až do 8 znaků (1, 2, 3 nebo A1, A2, nebo 10, 20).
- Zadáváte popisky a rozestupy mezi nimi, ne souřadnice. První osa každé sady je na 0.
- Číslované osy jsou čáry konstantního x; písmenné osy jsou čáry konstantního y. Trám z osy 1 do osy 2 tedy běží podél x a trám z A do B běží podél y.
- Všechny hodnoty jsou v milimetrech.

Nový model začíná s číslovanými osami 1 2 3 po 6000 6000, písmennými osami A B po 6000 a dvěma úrovněmi.

## Nastavení os

1. V panelu {{ui:Model}} vlevo otevřete {{ui:Osy}}, pokud je sbalen.
2. Do {{ui:Číslované osy}} napište popisky oddělené mezerami, například `1 2 3 4 5`.
3. Do pole {{ui:Rozestupy}} pod ním napište jeden rozestup pro každou mezeru, například `6000 6000 7500 6000`. Čtyři mezery pro pět os.
4. Totéž udělejte v {{ui:Písmenné osy}} a jeho {{ui:Rozestupy}}, například `A B C` a `8000 8000`.
5. Zvolte {{ui:Použít osy}}.

Stavový řádek hlásí „Osy byly aktualizovány.“ a pohled se přiblíží na novou mřížku. Jako oddělovače fungují i čárky.

Pokud něco nesedí, nic se nezmění a stavový řádek uvede důvod, například „Číslované osy: zadejte jeden rozestup mezi každou dvojicí os (4).“ Další kontroly: rozestupy musí být kladné milimetry, popisky se musí lišit a v každém směru může být nejvýše 60 os.

:::note
Prvky si zachovají své souřadnice, když se osy posunou. Pokud změníte rozestup poté, co jste umístili ocel, ocel zůstane tam, kde byla, a už nebude na mřížce. Změňte nejdřív mřížku, nebo přesuňte prvky úpravou jejich koncových souřadnic.
:::

## Nastavení úrovní

1. Otevřete {{ui:Úrovně}} v panelu {{ui:Model}}.
2. Každý řádek má název úrovně a její výšku v milimetrech. Upravujte je podle potřeby.
3. Zvolte {{ui:Přidat úroveň}} pro další řádek. Dostane název „Úroveň 3“ (a tak dále) a umístí se 4000 mm nad nejvyšší úroveň; pokud potřebujete, změňte obojí.
4. Pro odstranění úrovně zvolte tlačítko × na konci jejího řádku.
5. Zvolte {{ui:Použít úrovně}}.

Nic se nezmění, dokud nezvolíte {{ui:Použít úrovně}}. Úrovně se při použití řadí podle výšky. Každá úroveň potřebuje název, dvě úrovně nesmějí mít stejný název a musíte zachovat alespoň jednu úroveň.

Úrovně mohou být pod nulou (suterén na `-3500`) a nemusí být rovnoměrně rozloženy.

## Jak se úrovně používají

- Sloup umístěný v úrovni vede až k další úrovni, nebo k úrovni, kterou vyberete v {{ui:Až do}}.
- Trámy a desky se umísťují mezi dva průsečíky v úrovni, na kterou kliknete.
- Patky se umísťují s horní hranou v úrovni, na kterou kliknete.
- {{ui:Půdorys}} se dívá dolů na jednu úroveň najednou.
- Export IFC vytvoří jedno podlaží budovy na každou úroveň.

## Zpět

Změny os a úrovní jsou úpravy jako každé jiné: {{key:Mod+Z}} vrátí předchozí mřížku.

## Dále

[Umístění sloupů, trámů a ztužidel](topic:place-members)
