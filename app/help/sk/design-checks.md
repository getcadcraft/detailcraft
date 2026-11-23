---
title: Skontrolovať oceľové prvky podľa návrhovej normy
summary: Vytvorte kombinácie zaťažení podľa ASCE 7 alebo EN 1990, skontrolujte každý oceľový I-profil podľa AISC 360 alebo EN 1993-1-1 a zistite, koľko jeho únosnosti každý prvok využíva. Pomôcka, kým prvok neskontroluje inžinier.
keywords: návrh, kontrola návrhu, návrh ocele, využitie, využívanie, únosnosť, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, kombinácie zaťažení, LRFD, národná príloha, vzperá, klopenie, šmyk, ohyb, interakcia, konštrukcia, študenti, inžinier
from: 15685c4e
---

Po spustení analýzy blok {{ui:Kontroly návrhu}} na karte {{ui:Analýza}} premení jej sily na posúdenie každého oceľového prvku: koľko jeho únosnosti využíva najnepriaznivejšia kombinácia.

:::warning
Je to **pomôcka, kým prvok neskontroluje inžinier**. Používa iba sily prvého rádu (bez účinkov druhého rádu), neskúma krútenie, štíhle časti (trieda 4), zvárané prierezy ani spoje a to, čo nedokáže skontrolovať, vynecháva a hovorí to. Nenahrádza kontrolu inžiniera a jej výsledky nie sú pečiatkou.
:::

## Výber normy

{{ui:Návrhová norma}} sa ukladá spolu s modelom; vyberte jednu z dvoch rodín:

- **ASCE 7 + AISC 360** (USA, LRFD): kombinácie zaťažení podľa ASCE 7-16 §2.3.1 a kontroly prvkov podľa ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): kombinácie podľa EN 1990 (rov. 6.10, alebo 6.10a a 6.10b) a kontroly prvkov podľa EN 1993-1-1.

Potom vyberte {{ui:Trieda ocele}} (A992, A36 a ďalšie; alebo S235 až S450, pri nižšej medzi klzu nad 40 mm).

## Vytvorenie kombinácií

Každému zaťažovaciemu prípadu priraďte jeho **druh** (stále, úžitkové, úžitkové na streche, sneh, vietor, seizmické) v zozname prípadov a potom stlačte {{ui:Vytvoriť kombinácie}}. DetailCraft zapíše kombinácie normy ako kombinácie vašich prípadov: všetky kombinácie na únosnosť, ktoré norma uvádza pre druhy, ktoré máte, a kombinácie pre použiteľnosť na priehyb. Kombinácie, ktoré ste zadali sami, zostanú; podľa normy sa nekontrolujú. Prípad druhu {{ui:Iné}} sa nekombinuje.

Pri Eurocode sú faktory **odporúčané hodnoty** z EN 1990 prílohy A1 (γG 1.35, γQ 1.5, hodnoty ψ pre úžitkové, snehové a veterné zaťaženia) a EN 1993-1-1 (γM0 = γM1 = 1.0). Vaša národná príloha niektoré z nich mení: otvorte {{ui:Hodnoty národnej prílohy}}, zadajte svoje a kombinácie vytvorte znova. Ukladajú sa do modelu.

## Kontrola prvkov

Stlačte {{ui:Skontrolovať prvky}}. Pre každý oceľový I-profil tabuľka ukazuje jeho **využitie** (požiadavka ku únosnosti: 100 % je medza), či vyhovuje, ktorá kontrola rozhoduje a ktorá kombinácia. Prvky sú na modeli zafarbené: modrá málo využitý, zelená približne polovica, okrová blízko medze, červená nad medzou, sivá nekontrolovaný. Kliknutím na názov prvku ho vyberiete.

Kontroly, s klauzulou, ktorú každá nasleduje (sú uvedené v správe):

- ťah, tlak s ohybovou a krútiacou vzperou, ohyb okolo oboch osí s klopením, šmyk a ohyb s normálovou silou;
- priehyb kombinácií pre použiteľnosť voči {{ui:Limit priehybu}}, ktorý nastavíte (L/360 na začiatok; ide o projektovú hodnotu, nie hodnotu normy).

**Dĺžky.** Vzopretá dĺžka je podiel každého analyzovaného úseku (1 = nevzopretý); podpery sa rátajú rovnomerne rozmiestnené od začiatku. Súčinitele K násobia dĺžku pri vzpere. Uzol, v ktorom končí iný prvok, rozdelí prvok a každý úsek sa kontroluje na vlastnej dĺžke, ako keby bol v tom mieste podopretý.

## Čo sa nekontroluje

Prvok zobrazí **nekontrolované** s dôvodom namiesto čísla, ak jeho prierez nie je tvar, ktorý kontroly poznajú (uholníky, U-profily; obdĺžnikové a kruhové duté profily sa kontrolujú, keď sú steny kompaktné), ak ide o zvarený prierez na mieru, alebo ak je časť v ohybe štíhla (AISC) alebo trieda 4 (Eurocode). Štíhla časť v tlaku vynechá kontroly tlaku a prvok je označený *vyhovuje, čiastočne kontrolované*. Zvary v uzloch majú [vlastnú kontrolu](topic:weld-checks). Ešte nie je hotové: účinky druhého rádu, krútenie, vzperu pri šmyku spolu s ohybom, skrutkové spoje, únavu, požiarne a seizmické detailovanie. Betónové prvky a seizmické zaťaženia majú [vlastné kontroly](topic:concrete-and-seismic). Pozri [Ešte nie je hotové](topic:not-built-yet).

## Správa

{{ui:Správa (PDF)}} a {{ui:Správa (CSV)}} získajú po kontrole tabuľky návrhu: verzie normy, nastavenia a hodnoty národnej prílohy, využitie podľa prvkov, každú použitú klauzulu a pre každý prvok požiadavku, kapacitu a využitie každej kontroly v rozhodujúcej kombinácii.
