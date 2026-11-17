---
title: Vydání, revize a přehled změn výkresů
summary: Veďte jednu historii vydání společně s modelem architekta: načtěte vydání, zapisujte pokyny na stavbě, dílenské výkresy a propojené modely k vydání a čtěte přehled změn výkresů.
keywords: vydání, revize, revizní záznamy, přehled změn, přehled změn výkresů, rejstřík výkresů, pokyn na stavbě, dílenský výkres, propojený model, výběrové řízení, stavba, historie vydání, dílenské výkresy, výroba
from: 4b9a1b7b
---

## Co uděláte

Pracujte ze stejné historie vydání jako zbytek týmu. Zjistěte, které listy byly vydány v jaké revizi, a pokyny na stavbě uchovávejte u vydání, ke kterému patří.

## Postup

1. Otevřete **{{ui:Vydání a revize}}**.
2. Zvolte **Načíst historii vydání** a vyberte soubor `.issues.json` uložený z BimCraftu nebo jiné aplikace. Jeho vydání a záznamy se přidají k vašim. Nic se nenahrazuje.
3. Zvolte **Přidat záznam** pro pokyn na stavbě, dílenský výkres, sadu poznámek, propojený model nebo poznámku. Vyberte vydání, ke kterému patří, a jeho stav. Soubor, který zvolíte, se zapíše podle názvu, velikosti a SHA-256; soubor zůstane tam, kde je.
4. **Přehled změn výkresů** zobrazuje jeden řádek pro každý list a jeden sloupec pro každé vydání. Revize v závorkách byla znovu vydána beze změny.
5. **Stáhnout přehled změn (CSV)** uloží vydání, tabulku listů a záznamy. **Uložit historii vydání** zapíše soubor, který čtou ostatní aplikace.

## Dobré vědět

- Listy se nadále vydávají z Výkresů, list po listu. Tato vydání se zde objeví: listy vydané jedno datum s jednou poznámkou tvoří jedno vydání.
- Záznamy a vydání, která načtete, se uloží do souboru modelu. Každá změna je jeden krok {{ui:Zpět}}.
- Načtení stejného souboru dvakrát nic nepřidá dvakrát. Když dvě kopie obsahují stejný záznam, ponechá se novější.
