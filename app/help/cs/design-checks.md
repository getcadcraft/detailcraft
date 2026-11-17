---
title: Kontrola ocelových prvků podle návrhové normy
summary: Vytvořte kombinace zatížení podle ASCE 7 nebo EN 1990, zkontrolujte každý ocelový I-profil podle AISC 360 nebo EN 1993-1-1 a zjistěte, kolik ze své únosnosti každý prvek využívá. Pomůcka, dokud ji nezkontroluje inženýr.
keywords: návrh, kontrola návrhu, navrhování oceli, využití, únosnost, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurokód, kombinace zatížení, LRFD, národní příloha, vzpěr, klopení, smyk, ohyb, interakce, konstrukce, studenti, inženýr
from: 66b6d545
---

Po spuštění analýzy přemění blok {{ui:Design checks}} na kartě {{ui:Analysis}} jeho síly na verdikt pro každý ocelový prvek: kolik ze své únosnosti využívá nejhorší kombinace.

:::warning
Je to **pomůcka, dokud ji nezkontroluje inženýr**. Používá pouze síly prvního řádu (bez účinků druhého řádu), nekontroluje krut, štíhlé části (třída 4), svařované tvary ani spoje a to, co nedokáže zkontrolovat, vynechá a řekne to. Nenahrazuje kontrolu inženýra a její výsledky nejsou razítko.
:::

## Zvolte normu

{{ui:Design code}} se uloží spolu s modelem; vyberte jednu ze dvou skupin:

- **ASCE 7 + AISC 360** (USA, LRFD): kombinace zatížení z ASCE 7-16 §2.3.1 a kontroly prvků podle ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurokód): kombinace z EN 1990 (rovnice 6.10, nebo 6.10a a 6.10b) a kontroly prvků podle EN 1993-1-1.

Potom vyberte {{ui:Steel grade}} (A992, A36 a další; nebo S235 až S450, s nižší mezí kluzu nad 40 mm).

## Vytvoření kombinací

U každého zatěžovacího případu nastavte jeho **druh** (stálé, nahodilé, střešní nahodilé, sníh, vítr, seizmické) v seznamu případů a stiskněte {{ui:Make combinations}}. DetailCraft zapíše kombinace normy jako kombinace vašich případů: každou kombinaci pro mezní stav únosnosti, kterou norma uvádí pro druhy, které máte, a kombinace pro mezní stav použitelnosti pro průhyb. Kombinace, které jste zadali sami, zůstanou; nejsou kontrolovány podle normy. Případ druhu {{ui:Other}} se nekombinuje.

Pro Eurokód jsou součinitele **doporučené hodnoty** z EN 1990 přílohy A1 (γG 1.35, γQ 1.5, hodnoty ψ pro užitná, sněhová a větrná zatížení) a EN 1993-1-1 (γM0 = γM1 = 1.0). Národní příloha vaší země některé z nich mění: otevřete {{ui:National Annex values}}, zadejte své hodnoty a kombinace vytvořte znovu. Uloží se do modelu.

## Kontrola prvků

Stiskněte {{ui:Check members}}. Pro každý ocelový I-profil tabulka ukazuje jeho **využití** (požadavek ku únosnosti: 100 % je mez), zda vyhovuje, která kontrola rozhoduje a která kombinace. Prvky jsou na modelu obarveny: modře málo využité, zeleně asi z poloviny, okrově blízko meze, červeně nad ní, šedě nekontrolované. Kliknutím na název prvku jej vyberete.

Kontroly, s klauzulí, kterou sledují (jsou uvedeny ve zprávě):

- tah, tlak s ohybovým a krutovým vzpěrem, ohyb kolem obou os s klopením, smyk a ohyb s normálovou silou;
- průhyb kombinací pro mezní stav použitelnosti proti {{ui:Deflection limit}}, který nastavíte (zpočátku L/360; jde o projektovou hodnotu, ne hodnotu normy).

**Délky.** Ztužená délka je podíl každého analyzovaného úseku (1 = neztužená); ztužidla se berou rovnoměrně rozložená od začátku. Součinitele K násobí délku pro vzpěr. Spoj, na který přichází jiný prvek, prvek rozdělí a každý kus se kontroluje na své vlastní délce, jako ztužený v tomto místě.

## Co se nekontroluje

Prvek ukáže **nekontrolováno** s důvodem místo čísla, když jeho průřez není I-profilem, který kontroly znají (trubky, úhelníky, U-profily), když je to vlastní (svařovaný) tvar, nebo když je část při ohybu štíhlá (AISC) nebo třídy 4 (Eurokód). Štíhlá část v tlaku vyřadí kontroly tlaku a prvek ukáže *vyhovuje, částečně kontrolováno*. Rovněž ještě není hotovo: účinky druhého řádu, krut, smykové vzpěrání společně s ohybem, spoje, únava, požár a seizmické detailování. Betonové prvky a seizmická zatížení mají [vlastní kontroly](topic:concrete-and-seismic). Viz [Ještě není hotovo](topic:not-built-yet).

## Zpráva

{{ui:Report (PDF)}} a {{ui:Report (CSV)}} získají návrhové tabulky, jakmile zkontrolujete: verze norem, nastavení a hodnoty národní přílohy, využití podle prvků, každou použitou klauzuli a pro každý prvek požadavek, únosnost a využití každé kontroly v její rozhodující kombinaci.
