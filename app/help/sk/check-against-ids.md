---
title: Kontrola IFC exportu voči IDS klienta
summary: Načítajte súbor .ids, ktorý ste dostali, a pred odoslaním IFC uvidíte v Problémoch každú exportovanú časť, ktorá mu nevyhovuje.
keywords: ids, information delivery specification, buildingsmart, požiadavky, dodávka, kontrola, validácia, qa, export ifc, vlastnosť, materiál, obstarávanie
from: 50d0f785
---

## Čo urobíte

IDS (Information Delivery Specification, norma buildingSMART) je zoznam toho, čo musí IFC obsahovať. DetailCraft skontroluje IFC, ktoré by exportoval (ten istý súbor, ktorý zapisuje {{ui:IFC}}), voči IDS, ktoré ste dostali, a vypíše každú časť, ktorá nevyhovuje.

## Postup

1. Otvorte alebo nakreslite model.
2. Kliknite na {{ui:Skontrolovať podľa IDS…}} v skupine {{ui:Výstup}} panela nástrojov.
3. Kliknite na {{ui:Načítať súbor .ids…}} a vyberte súbor. Nič sa neodosiela.
4. Prečítajte výsledok: každú špecifikáciu s {{ui:Vyhovuje}} alebo {{ui:Nevyhovuje}} a počtom prvkov, na ktoré sa vzťahuje.
5. Otvorte {{ui:Problémy}} ({{key:Ctrl+Shift+M}}) a kliknite na nesplnenie: časť, spoj, schodisko alebo pätka, z ktorých pochádza, sa vyberie a pohľad sa k nej priblíži.

## Čo by ste mali vidieť

- Jedno upozornenie na každý exportovaný prvok a každú požiadavku, ktorú nespĺňa, s názvom špecifikácie, tým, čo IDS požaduje, a tým, čo export obsahuje.
- Správa o kontrole (v Problémoch) začína IDS: jeho názvom, verziou, autorom a počtami každej špecifikácie.

## Dobré vedieť

- IDS sa uloží do súboru modelu, takže sa pri každom otvorení modelu kontroluje znova. Načítanie alebo zabudnutie je jeden krok, ktorý možno vrátiť späť.
- Každá zmena sa skontroluje znova o chvíľu; pri veľkom modeli kontrola medzi jednotlivými behmi čaká dlhšie.
- GlobalId exportu vychádzajú z názvu modelu a čísel častí v DetailCraft, takže zostávajú rovnaké pri každej kontrole. Premenovanie modelu dá každému prvku nové GlobalId.
- Čísla sa porovnávajú v jednotkách SI (export je v milimetroch; dĺžky sa najprv prevedú na metre).

- Vzory v IDS sa čítajú ako celá hodnota. Znak `^` na začiatku a `$` na konci sa tiež berú ako "celá hodnota", ako to väčšina súborov IDS myslí.

## Ďalej

- [Export IFC](topic:ifc-export)
