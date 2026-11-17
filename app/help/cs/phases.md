---
title: Fáze
summary: Rozdělte model do fází (montážních posloupností nebo dodávek), zobrazujte nebo skrývejte každou fázi, zařazujte díly do fází a číslujte označení podle fáze.
keywords: fáze, správce fází, montážní posloupnost, dodávka, dávka, posloupnost, skrytí fáze, zobrazení fáze, filtr, číslování, předpona označení, podle fáze
from: bae506f5
---

Fáze je skupina dílů, které se vyrábějí, dodávají nebo montují společně: montážní posloupnost, dodávka, dávka. Každý prvek a každý základ je v jedné fázi. Spoj patří do fáze svého hlavního prvku: koncový plech do fáze nosníku, patní plech do fáze sloupu. Nový model má jednu fázi.

## Panel Fáze

Sekce {{ui:Fáze}} panelu {{ui:Model}} vypisuje všechny fáze:

- zaškrtávací políčko fázi ve pohledu zobrazí nebo skryje;
- číslo a název, který můžete napsat (prázdný název = "Fáze 2" a tak dále);
- kolik dílů v ní je;
- tlačítko {{ui:×}} fázi odebere. Odejít může jen prázdná fáze: nejdřív přesuňte její díly do jiné fáze.

{{ui:Přidat fázi}} přidá další číslo a nastaví ji jako fázi, do které se zařazují nové díly.

## Zařazení dílů do fáze

- **Nové díly:** {{ui:Nové díly patří do}} vybere fázi, do které se zařadí každý prvek a každý základ, který od teď umístíte.
- **Jeden díl:** vyberte ho a změňte {{ui:Fáze}} na panelu {{ui:Vlastnosti}}.
- **Více dílů:** vyberte je (oknem, {{key:Shift}}+klik, {{key:Mod+A}}) a změňte {{ui:Fáze}} nahoře na panelu {{ui:Vlastnosti}}. Pokud jsou ve více fázích, zobrazí se **Různé**. Jedna změna je jeden krok zpět.

Kopie si zachovají fázi dílu, ze kterého byly zkopírovány, i když se vloží do jiného modelu (fáze se tam přidá).

## Zobrazení a skrývání fází

Skrytá fáze se ve pohledu nekreslí, nedá se na ni kliknout ani ji zachytit výběrovým oknem a {{key:Mod+A}} ji vynechá. Je stále v kusovníku, reportech, výkresech a všech exportech. Skrývání platí jen pro pohled: neukládá se a nelze ho vrátit zpět.

## Označení podle fází

Při zapnutém **Číslovat označení podle fáze** (výchozí stav je zapnuto) a dílech ve více fázích se každá fáze číslí zvlášť a její označení začíná číslem fáze: označení dílů 1-b1, 2-b1, označení sestav 2-B1, základy 2-F1. Dva stejné nosníky v různých fázích tak mají různá označení, protože se vyrábějí a expedují v různou dobu. Pokud je používána jen jedna fáze, označení nemají předponu. Vypněte to, pokud chcete číslovat celý model jako jeden celek, aby stejné kusy sdílely označení bez ohledu na fázi.

Fáze se zapisuje do exportu IFC (sada vlastností DetailCraft, Phase).

:::note
Modely s fázemi se ukládají ve formátu souborů DetailCraft 2. Verze 0.3 DetailCraft je neotevře; tato verze otevírá i starší soubory, přičemž všechny díly patří do fáze 1.
:::
