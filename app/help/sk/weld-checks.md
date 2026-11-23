---
title: Skontrolujte zvary v miestach stretnutia prvkov
summary: Po kontrole návrhu otestujte rohové a tupé zvary po obvode každého prvku v mieste, kde sa stretáva s iným prvkom alebo podperou, podľa AISC 360-16 kapitola J alebo EN 1993-1-8, a zistite, ktorá skupina zvarov je najviac využitá a pri akej kombinácii. Pomôcka, kým výsledky neskontroluje inžinier.
keywords: zvar, zvary, kontrola zvarov, rohový zvar, tupý zvar, úplné prievarenie, AISC 360, EN 1993-1-8, skupina zvarov, využitie, využívanie, únosnosť, spoj, pripojenie, konštrukcia, inžinier
from: e8eebbe6
---

Blok {{ui:Kontroly zvarov}} na karte {{ui:Analýza}}, pod {{ui:Kontroly návrhu}}, prevezme sily z posledného vyriešeného rámu a kombinácie na únosnosť, ktoré ste vytvorili, a overí zvar po obvode každého prvku v každom uzle: kde sa prvok stretáva s iným prvkom alebo stojí na podpore.

:::warning
Je to **pomôcka, kým výsledky neskontroluje inžinier**. Kontroluje zvar nakreslený po obvode prierezu ako jednu skupinu z vlastných koncových síl rámu. Nečíta veľkosť ani dĺžku zvarov, ktoré ste nakreslili vo výrobných výkresoch, a nekontroluje skrutky, plechy, oporu v tlaku, blokový šmyk ani vyklápanie. Jej výsledky nie sú pečiatkou.
:::

## Spustenie

1. Vyriešte rám na karte {{ui:Analýza}}, vyberte {{ui:Návrhová norma}} v {{ui:Kontroly návrhu}} a potom stlačte {{ui:Vytvoriť kombinácie}} (kontrola zvarov potrebuje tie isté kombinácie na únosnosť).
2. V {{ui:Kontroly zvarov}} nastavte {{ui:Rameno kútového zvaru (mm, 0 = stena, najviac 8)}}. 0 znamená, že rameno sleduje tenšiu stenu prierezu, najviac 8 mm. Podľa normy AISC je {{ui:Pevnosť zvarového kovu F_EXX (MPa)}} pevnosť zvarového kovu (482.6 MPa zodpovedá elektróde E70). Podľa EN 1993 pevnosť zvarového kovu a korelačný súčiniteľ určuje trieda ocele.
3. Stlačte {{ui:Skontrolovať zvary}}.

Každý riadok tabuľky je jedna skupina zvarov (koniec prvku v uzle). Čísla: **využitie** jej rozhodujúcej kontroly, stav (vyhovuje alebo nevyhovuje) a ktorá kontrola a klauzula rozhodla pri akej kombinácii. Skupina, ktorú kontrola nedokáže posúdiť, uvedie dôvod (chýba trieda ocele, chýba korelačný súčiniteľ pre triedu v EN 1993-1-8 tabuľka 4.1, na tomto prierezu nie je zvar) namiesto čísla.

Zmena ramena alebo zvarového kovu, alebo úprava modelu, tabuľku vymaže: platila pre staré hodnoty. Znova stlačte {{ui:Skontrolovať zvary}}.

## Čo sa kontroluje

- **ASCE 7 + AISC 360:** pevnosť kútového zvaru (uhol zaťaženia voči zvaru sa počíta, J2.4), pretrhnutie šmykom základného materiálu (J4.2) a tupé zvary s úplným prievarom (tabuľka J2.5).
- **EN 1990 + EN 1993:** kútové zvary zjednodušenou metódou EN 1993-1-8 4.5.3.3 a tupé zvary podľa 4.7.1.
- Upozornenia na detaily voči minimálnemu a maximálnemu ramenu a minimálnej dĺžke, s hodnotou, voči ktorej sa porovnávali.

Skupina zvarov sa berie ako čiarový prierez a zaťažuje sa elastickou vektorovou metódou: každá časť zvaru prevezme silu z normálovej sily prvku, oboch šmykových síl, krútenia a oboch ohybových momentov, sčítaných ako vektory.

## Čo sa nekontroluje

Zvary s čiastočným prievarom, šikmé kútové zvary, zátkové a štrbinové zvary, prerušované zvary, metóda okamžitého stredu, smerová metóda EN, únava a blokový šmyk základného materiálu nie sú vytvorené. Niektoré konštanty noriem boli zapísané podľa noriem a ešte neboli porovnané s tlačenou kópiou; správa uvádza, odkiaľ každé číslo pochádza ({{ui:Správa (PDF)}} získa tabuľky zvarov po kontrole). Pozri [Kontrola oceľových prvkov](topic:design-checks) a [Ešte nie je hotové](topic:not-built-yet).
