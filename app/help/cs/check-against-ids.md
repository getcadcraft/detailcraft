---
title: Kontrola exportu IFC podle IDS klienta
summary: Načtěte soubor .ids, který jste dostali, a v Problémech uvidíte každý exportovaný díl, který mu nevyhovuje, dříve než odešlete IFC.
keywords: ids, information delivery specification, buildingsmart, specifikace předání informací, požadavky, předání, kontrola, validace, qa, export ifc, vlastnost, materiál, nákup
from: 50d0f785
---

## Co uděláte

IDS (Information Delivery Specification, standard buildingSMART) je seznam toho, co musí IFC obsahovat. DetailCraft zkontroluje IFC, které by exportoval (stejný soubor, jaký zapisuje {{ui:IFC}}), proti IDS, které jste dostali, a vypíše každý díl, který nedosahuje.

## Postup

1. Otevřete nebo nakreslete svůj model.
2. Klikněte na {{ui:Check against IDS…}} ve skupině {{ui:Output}} na panelu nástrojů.
3. Klikněte na {{ui:Load an .ids file…}} a vyberte soubor. Nic se nenahrává.
4. Přečtěte výsledek: každou specifikaci s {{ui:Pass}} nebo {{ui:Fail}} a kolik prvků se na ni vztahuje.
5. Otevřete Problémy ({{key:Ctrl+Shift+M}}) a klikněte na chybu: člen, spoj, schodiště nebo patka, odkud pochází, se vybere a pohled se k němu přiblíží.

## Co uvidíte

- Jedno varování na každý exportovaný prvek a požadavek, který nesplňuje, s názvem specifikace, tím, co IDS žádá, a tím, co export obsahuje.
- Zpráva o kontrole (v Problémech) začíná IDS: jeho názvem, verzí, autorem a počty u každé specifikace.

## Dobré vědět

- IDS se uloží do souboru modelu, takže se při každém otevření modelu kontroluje znovu. Načtení nebo zapomenutí IDS je jeden krok, který lze vzít zpět.
- Každá změna se zkontroluje znovu o chvíli později; u velkého modelu čeká kontrola mezi jednotlivými běhy trochu déle.
- GlobalIds exportu vznikají z názvu modelu a čísel dílů uvnitř DetailCraftu, takže zůstávají stejné od jedné kontroly k další. Přejmenování modelu dá každému prvku nové GlobalIds.
- Čísla se porovnávají v jednotkách SI (export je v milimetrech; délky se nejprve převedou na metry).

- Vzory v IDS se čtou jako celá hodnota. Znak `^` na začátku a `$` na konci se také berou jako „celá hodnota“, jak to většina souborů IDS myslí.

## Další

- [Export IFC](topic:ifc-export)
