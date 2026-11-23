---
title: Kontrola svarů v místech styku prvků
summary: Po kontrole návrhu zkontrolujte koutové a tupé svary po celém obvodu každého prvku v místě styku s jiným prvkem nebo podporou podle AISC 360-16 kapitoly J nebo EN 1993-1-8 a zjistěte, která skupina svarů je nejvíce využita a při které kombinaci. Pomůcka, dokud ji nezkontroluje inženýr.
keywords: svar, svary, kontrola svarů, koutový svar, tupý svar, plný průvar, AISC 360, EN 1993-1-8, skupina svarů, vyťaženost, využití, únosnost, spoj, styk, konstrukce, inženýr
from: e8eebbe6
---

Blok {{ui:Kontrola svarů}} na kartě {{ui:Analýza}} pod {{ui:Kontroly návrhu}} převezme působící síly z posledně vypočteného rámu a kombinace únosnosti, které jste vytvořili, a zkontroluje svar po celém obvodu každého prvku v každém uzlu: tam, kde prvek narází na jiný prvek, nebo stojí na podpoře.

:::warning
Je to **pomůcka, dokud ji nezkontroluje inženýr**. Kontroluje svar nakreslený po celém průřezu jako jednu skupinu z koncových sil samotného rámu. Nečte velikost ani délku svarů, které jste nakreslili v dílenských výkresech, a nekontroluje šrouby, plechy, otlačení, smyk bloku ani páčení. Její výsledky nejsou schválením.
:::

## Spuštění

1. Vypočítejte rám na kartě {{ui:Analýza}}, vyberte {{ui:Návrhová norma}} v {{ui:Kontroly návrhu}} a stiskněte {{ui:Vytvořit kombinace}} (kontrola svarů potřebuje stejné kombinace únosnosti).
2. V {{ui:Kontrola svarů}} nastavte {{ui:Rameno koutového svaru (mm, 0 = stěna, nejvýše 8)}}. 0 znamená, že rameno se řídí tenčí stěnou průřezu, nejvýše 8 mm. Podle normy AISC je {{ui:Pevnost svarového kovu F_EXX (MPa)}} pevností svarového kovu (482.6 MPa odpovídá elektrodě E70). Podle EN 1993 pevnost svarového kovu a korelační součinitel vyplývají z jakosti oceli.
3. Stiskněte {{ui:Zkontrolovat svary}}.

Každý řádek tabulky je jedna skupina svarů (jeden konec prvku v uzlu). Čísla: **vyťaženost** rozhodující kontroly, stav (vyhovuje, nevyhovuje) a která kontrola a které ustanovení rozhodovaly při které kombinaci. Skupina, kterou kontrola nemůže posoudit, uvede důvod (chybí jakost oceli, chybí korelační součinitel pro danou jakost v EN 1993-1-8 tabulce 4.1, na tomto průřezu není svar) místo čísla.

Změna ramene nebo svarového kovu či úprava modelu tabulku vymaže: platila pro staré hodnoty. Stiskněte {{ui:Zkontrolovat svary}} znovu.

## Co se kontroluje

- **ASCE 7 + AISC 360:** svarový kov koutových svarů (úhel zatížení ke svaru se počítá, J2.4), porušení základního kovu smykem (J4.2) a tupé svary s plným průvarem (tabulka J2.5).
- **EN 1990 + EN 1993:** koutové svary zjednodušenou metodou podle EN 1993-1-8, 4.5.3.3, a tupé svary podle 4.7.1.
- Upozornění na konstrukční zásady oproti minimálnímu a maximálnímu ramenu a minimální délce, s hodnotou, s níž byly porovnány.

Skupina svarů se bere jako čárový průřez a zatěžuje se metodou pružných vektorů: každá část svaru přebírá sílu z normálové síly prvku, obou smyků, kroucení a obou ohybových momentů, sčítaných jako vektory.

## Co se nekontroluje

Svary s částečným průvarem, šikmé koutové svary, výplňové a drážkové svary, přerušované svary, metoda okamžitého středu, směrová metoda EN, únava a smyk bloku základního kovu nejsou zpracovány. Některé konstanty norem byly zapsány podle norem a zatím nebyly porovnány s tištěnou verzí; zpráva uvádí, odkud každé číslo pochází ({{ui:Zpráva (PDF)}} získá tabulky svarů, jakmile prvky zkontrolujete). Viz [Kontrola ocelových prvků](topic:design-checks) a [Ještě není hotovo](topic:not-built-yet).
