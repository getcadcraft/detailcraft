---
title: Začínáme s DetailCraftem
summary: Co DetailCraft dnes umí, jak ho otevřít a první model od os po dílenský výkres za deset minut.
keywords: začínáme, první model, úvod, ocelová konstrukce, výztuž, rychlý start, návod, přehled
from: e4f16bbe
---

DetailCraft je aplikace pro detailing oceli a výztuže z rodiny CadCraft. Vytvoříte 3D model ocelového rámu na osách a úrovních, spojíte ho a dostanete to, co dílna potřebuje: označení dílů a sestav, kusovník, dílenské výkresy jednotlivých dílů, soubory NC DSTV, model IFC a výkaz ohybů pro patky.

Toto je raná verze. Dělá krátký seznam věcí pečlivě, místo aby dělal všechno najednou. Než podle ní začnete plánovat skutečnou práci, přečtěte si [Co zatím není hotovo](topic:not-built-yet).

## Co dnes umí

- Osy a úrovně, které zadáte, v milimetrech.
- Sloupy, nosníky, ztužidla a plechy z publikovaných katalogů profilů (AISC W, S, C, L, HSS a Pipe; evropské IPE, HEA, HEB a UPN; britské UB, UC, PFC, EA, UEA, SHS, RHS a CHS), plus vaše vlastní parametrické profily.
- Dva spoje: šroubovaná čelní deska od nosníku k přírubě sloupu a patní plech sloupu se čtyřmi kotevními tyčemi. Každý lze zkopírovat na všechny podobné styky.
- Otvory a výřezy zadané podle polohy.
- Obdélníkové patky s dolní výztuží a startovacími pruty.
- Označení dílů a sestav, která se po každé změně aktualizují sama.
- Exporty: IFC4, soubory NC DSTV (I-profily a plechy), kusovník jako CSV, výkaz ohybů jako CSV a dílenský výkres jednoho dílu jako PDF.

## Otevření DetailCraftu

1. Otevřete DetailCraft v desktopovém prohlížeči: Chrome, Edge, Firefox nebo Safari. Viz [Prohlížeče a počítače](common:browsers).
2. Počkejte, až se obrazovka zaplní. Stavový řádek dole říká „Připraveno. Otevřete Ukázku, nebo nastavte osy a úrovně a začněte umisťovat pruty.“

Pohled na model potřebuje 3D grafiku (WebGL). Pokud uprostřed obrazovky stojí „Tento prohlížeč nemohl spustit 3D grafiku (WebGL)“, podívejte se do [Řešení potíží](topic:troubleshooting#the-3d-view-is-missing).

:::note
Vaše modely zůstávají ve vašem počítači. Otevření modelu ho přečte v prohlížeči a uložení stáhne soubor. Nic se nenahrává. Ukládání do cloudu zatím není k dispozici. Viz [Kde jsou vaše soubory](common:your-files). Chcete-li DetailCraft později používat bez připojení, zvolte jednou, když jste online, v liště aplikace {{ui:Uložit pro offline}}; viz [Práce offline](common:offline).
:::

:::offline
Jste offline. DetailCraft funguje bez připojení, jen pokud byl dříve uložen pro použití offline: tlačítko {{ui:Uložit pro offline}} v liště aplikace pak ukazuje {{ui:Připraveno offline}}. Viz [Práce offline](common:offline).
:::

## Nejdřív se podívejte na ukázku

Nejrychlejší způsob, jak uvidět, co DetailCraft vytváří, je ukázkový rám.

1. Zvolte {{ui:Ukázka}} ve skupině {{ui:Soubor}} na panelu nástrojů.
2. Pohled ukazuje dvoupolový rám: šest sloupů s patními plechy, čtyři nosníky s čelními deskami, jedno ztužidlo a sedm patek s výztuží.
3. Klikněte na nosník. Panel {{ui:Vlastnosti}} vpravo ukáže jeho označení dílu, délku řezu, hmotnost a otvory, které vytvořily čelní desky.
4. Otevřete kartu {{ui:Kusovník}} dole a uvidíte každé označení dílu s počtem a hmotností.

Průvodce [Prohlídka ukázkového rámu](topic:sample-model) projde vše díl po dílu.

## Váš první model

Nový model už má osy 1 až 3 podle A až B po 6000 mm a dvě úrovně: Úroveň 1 na kótě 0 a Úroveň 2 na kótě 4000.

1. Zvolte {{ui:Nový}}. Pokud má aktuální model změny, DetailCraft se nejdřív zeptá, zda je uložit.
2. Zvolte {{ui:Půdorys}} nad pohledem. Seznam úrovní vedle něj vybere Úroveň 1.
3. Zvolte {{ui:Sloup}} na panelu nástrojů, nebo stiskněte {{key:C}}.
4. Klikněte na průsečík os A/1. Sloup W12x50 se objeví od Úrovně 1 po Úroveň 2. Stavový řádek ukáže, kam se umístil.
5. Klikněte na B/1, A/2 a B/2 a umístěte tři další.
6. Vyberte Úroveň 2 v seznamu úrovní a potom zvolte {{ui:Nosník}}, nebo stiskněte {{key:B}}.
7. Klikněte na A/1 a potom na A/2. Nosník W16x26 spojí horní konce sloupů, jeho horní hrana oceli je na úrovni.
8. Stiskněte {{key:Esc}}, aby se vrátil {{ui:Vybrat}}, a potom klikněte na nosník.
9. Zvolte {{ui:Čelní desky}} ve skupině {{ui:Spojit}}. Oba konce dostanou šroubovanou čelní desku, nosník se podle ní zkrátí a první čelní deska je nyní vybrána.
10. Klikněte na nosník znovu.
11. Zvolte {{ui:Dílenský výkres}} ve skupině {{ui:Výstup}}. Otevře se náhled dílenského výkresu nosníku. Zvolte {{ui:Stáhnout PDF}}.
12. Stiskněte {{key:Mod+S}}, aby se model uložil. Prohlížeč stáhne `Untitled.detailcraft.json`.

Před uložením přejmenujte model v poli {{ui:Název}} vlevo nahoře, aby soubor i každý export nesly jeho jméno.

## Kam dál

- [Prohlídka obrazovky](topic:workspace)
- [Nastavení os a úrovní](topic:grids-and-levels)
- [Pohyb ve 3D pohledu](topic:navigate-3d), myší, touchpadem nebo dotykovou obrazovkou
- [Přechod z jiného softwaru pro detailing](topic:coming-from), pokud znáte velký balík pro detailing
- [Práce s touto nápovědou](common:help)
