---
title: Export souboru KISS pro výrobní software
summary: Odešlete kusovník do programu pro řízení výroby (MIS) jako soubor KISS 1.1: sestavy, díly, fáze jako sekvence, otvory, výřezy a svary.
keywords: kiss, kss, mis, řízení výroby, plánování výroby, kalkulace, kusovník, bom, export, fabtrol, sekvence
from: 30cf3951
---

V skupině {{ui:Výstup}} otevřete {{ui:Více}} a zvolte {{ui:Soubor KISS pro výrobní software}}. DetailCraft stáhne `<name>.kss`, soubor KISS („Keep It Simple, Steel“, verze 1.1), textový formát, ze kterého většina programů pro řízení výroby importuje kusovník.

## Co je v něm

- Hlavička: číslo zakázky (prvních osm písmen a číslic názvu modelu), název modelu, datum a čas a zda jsou rozměry metrické.
- Pro každé označení sestavy: její hlavní díl (množství = kolik sestav), řádek výkresu (A-B1 atd., číslo výkresu sestavy), řádek sestavy (název, typ, hmotnost, celková délka, hloubka a šířka), jeden řádek sekvence pro každou [fázi](topic:phases), ve které je sestava, a řádky práce: otvory (kolik, průměr, tloušťka průchozí), výřezy a svary.
- Pak každý díl připojený k ní s **celkovým** množstvím (na sestavu × sestavy), jak to norma vyžaduje.
- Volné šrouby a kotevní tyče na výkresu BOLTS, sestava FIELD.
- Každý řádek uvádí typ (W, C, L, HSS, PL, nebo MI pro vlastní průřez), rozměr, jakost, délku řezu v milimetrech, název dílu a hmotnost.

## Palce nebo metry

V [nastavení DetailCraftu](topic:settings) volba **Velikosti v souboru KISS** určuje:

- **Automaticky** (výchozí): palcové, když jsou všechny pruty tvary AISC, jinak metrické.
- **Palcové**: tvary podle označení AISC (W 16X26, HSS 4X4X.250); plechy a šrouby, které DetailCraft drží v milimetrech, na nejbližší 1/16 palce; hmotnosti v librách.
- **Metrické**: evropské tvary podle názvu (IPE300), plechy jako tloušťka X šířka v milimetrech; hmotnosti v kilogramech.

Délky jsou vždy v milimetrech se dvěma desetinnými místy, bez ohledu na nastavení: norma KISS to vyžaduje a přijímající program je převede.

:::note
Jakosti se zkracují na osm znaků normy: A572 Gr 50 se stane A572-50. Čárky v názvech se mění na mezery (formát nemá uvozovky). Před spoléháním si ověřte jeden import ve svém programu: soubory KISS z DetailCraftu jsou zde ověřeny podle normy, zatím ne ve výrobním programu.
:::
