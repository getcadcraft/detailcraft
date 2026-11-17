---
title: Kontrola oceľových prvkov podľa návrhovej normy
summary: Vytvorte kombinácie zaťažení podľa ASCE 7 alebo EN 1990, skontrolujte každý oceľový I-profil podľa AISC 360 alebo EN 1993-1-1 a zistite, koľko únosnosti každý prvok využíva. Pomôcka, kým prvok nezkontroluje inžinier.
keywords: návrh, kontrola návrhu, oceľový návrh, využitie, únosnosť, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurokód, kombinácie zaťažení, LRFD, národná príloha, vzperná stabilita, bočno-klopná stabilita, šmyk, ohyb, interakcia, konštrukcia, študenti, inžinier
from: 66b6d545
---

Po spustení analýzy blok {{ui:Kontroly návrhu}} na karte {{ui:Analýza}} premení jej sily na verdikt pre každý oceľový prvok: koľko únosnosti využíva najhoršia kombinácia.

:::warning
Je to **pomôcka, kým prvok nezkontroluje inžinier**. Používa iba sily prvého rádu (bez účinkov druhého rádu), nekontroluje krút, štíhle časti (trieda 4), zvárané tvary ani spoje a to, čo nedokáže skontrolovať, vynecháva a hovorí to. Nenahrádza kontrolu inžiniera a jej výsledky nie sú pečiatka.
:::

## Výber normy

{{ui:Návrhová norma}} sa ukladá s modelom; vyberte jednu z dvoch rodín:

- **ASCE 7 + AISC 360** (USA, LRFD): kombinácie zaťažení z ASCE 7-16 §2.3.1 a kontroly prvkov z ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurokód): kombinácie z EN 1990 (rov. 6.10, alebo 6.10a a 6.10b) a kontroly prvkov z EN 1993-1-1.

Potom vyberte {{ui:Trieda ocele}} (A992, A36 a ďalšie; alebo S235 až S450, pri ktorých je nižšia medza klzu nad 40 mm).

## Vytvorenie kombinácií

Každému zaťažovaciemu prípadu dajte jeho **druh** (stále, úžitkové, strešné úžitkové, sneh, vietor, seizmické) v zozname prípadov a stlačte {{ui:Vytvoriť kombinácie}}. DetailCraft zapíše kombinácie normy ako kombinácie vašich prípadov: každú kombináciu únosnosti, ktorú norma uvádza pre druhy, ktoré máte, a kombinácie prevádzkovej spôsobilosti pre priehyb. Kombinácie, ktoré ste zadali sami, zostávajú; podľa normy sa nekontrolujú. Prípad druhu {{ui:Iné}} sa nekombinuje.

Pre Eurokód sú súčinitele **odporúčané hodnoty** z EN 1990, príloha A1 (γG 1.35, γQ 1.5, hodnoty ψ pre úžitkové, snehové a veterné zaťaženia) a EN 1993-1-1 (γM0 = γM1 = 1.0). Vaša národná príloha niektoré z nich mení: otvorte {{ui:Hodnoty národnej prílohy}}, zadajte svoje a vytvorte kombinácie znova. Uložia sa do modelu.

## Kontrola prvkov

Stlačte {{ui:Skontrolovať prvky}}. Pre každý oceľový I-profil tabuľka ukáže jeho **využitie** (požiadavka voči únosnosti: 100 % je hranica), či prejde, ktorá kontrola rozhoduje a ktorá kombinácia. Prvky sú na modeli farebne rozlíšené: modrá málo využitý, zelená asi polovica, okrová pri hranici, červená nad ňou, sivá nekontrolovaný. Kliknutím na názov prvku ho vyberiete.

Kontroly, s článkom, ktorý každá nasleduje (sú uvedené v správe):

- ťah, tlak s ohybovou a krútiacou vzperou, ohyb okolo oboch osí s bočno-klopnou stabilitou, šmyk a ohyb s normálovou silou;
- priehyb kombinácií prevádzkovej spôsobilosti voči {{ui:Limit priehybu}}, ktorý nastavíte (spočiatku L/360; ide o projektovú hodnotu, nie hodnotu normy).

**Dĺžky.** Podopretá dĺžka je podiel každého analyzovaného kusu (1 = nepodopretý); podpery sú rozložené rovnomerne od začiatku. Súčinitele K násobia dĺžku pre vzperu. Spoj, kde končí iný prvok, rozdelí prvok a každý kus sa kontroluje na vlastnej dĺžke, ako tam podopretý.

## Čo sa nekontroluje

Prvok ukáže **nekontrolované** s dôvodom namiesto čísla, keď jeho prierez nie je I-profil, ktorý kontroly poznajú (trubky, uholníky, U-profily), keď je to vlastný (zváraný) tvar, alebo keď je časť v ohybe štíhla (AISC) alebo trieda 4 (Eurokód). Štíhla časť v tlaku vynechá kontroly tlaku a prvok sa zobrazí ako *prejde, čiastočne kontrolované*. Tiež nie sú hotové: účinky druhého rádu, krút, šmyková vzpera spolu s ohybom, spoje, únava, požiar a detailovanie pre seizmiku. Betónové prvky a seizmické zaťaženia majú [vlastné kontroly](topic:concrete-and-seismic). Pozri [Ešte nie je hotové](topic:not-built-yet).

## Správa

{{ui:Správa (PDF)}} a {{ui:Správa (CSV)}} získajú tabuľky návrhu, keď ste skontrolovali: verzie noriem, nastavenia a hodnoty národnej prílohy, využitie podľa prvku, každý použitý článok a pre každý prvok požiadavku, únosnosť a využitie každej kontroly v jej rozhodujúcej kombinácii.
