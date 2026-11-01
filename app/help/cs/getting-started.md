---
title: Začínáme s DetailCraftem
summary: Co DetailCraft dnes umí, jak jej otevřít a první model od os po dílenský výkres za deset minut.
keywords: start, první model, úvod, detailování oceli, výztuž, rychlý start, návod, přehled
from: 3682c0d8
---

DetailCraft je aplikace rodiny CadCraft pro detailování oceli a výztuže. Postavíte 3D model ocelového rámu na osách a úrovních, spojíte jej a získáte, co potřebuje dílna: označení dílů a sestav, kusovník, dílenské výkresy jednotlivých dílů, soubory DSTV NC, model IFC a výkaz ohybů pro patky.

Toto je raná verze. Dělá pečlivě krátký seznam věcí místo všeho najednou. Než kolem ní naplánujete skutečnou práci, přečtěte si [Co ještě není hotovo](topic:not-built-yet).

## Co dnes umí

- Osy a úrovně, které zadáte v milimetrech.
- Sloupy, nosníky, ztužidla a plechy z publikovaných katalogů profilů (AISC W, S, C, L, HSS a Pipe; evropské IPE, HEA, HEB a UPN) plus Vaše vlastní parametrické průřezy.
- Dva spoje: šroubovaná čelní deska od nosníku k pásnici sloupu a patní plech sloupu se čtyřmi kotevními tyčemi. Každý lze zkopírovat na všechny podobné spoje.
- Otvory a výřezy zadané polohou.
- Obdélníkové patky se spodní sítí a startovacími pruty.
- Označení dílů a sestav, která se po každé změně aktualizují sama.
- Exporty: IFC4, soubory DSTV NC (I-profily a plechy), kusovník jako CSV, výkaz ohybů jako CSV a dílenský výkres jednoho dílu jako PDF.

## Otevření DetailCraftu

1. Otevřete DetailCraft v prohlížeči pro počítač: Chrome, Edge, Firefox nebo Safari. Viz [Prohlížeče a počítače](common:browsers).
2. Počkejte, až se obrazovka naplní. Stavový řádek dole říká „Připraveno. Otevřete Ukázku, nebo nastavte osy a úrovně a začněte umisťovat pruty.“

Pohled na model vyžaduje 3D grafiku (WebGL). Pokud střed obrazovky říká „Tento prohlížeč nemohl spustit 3D grafiku (WebGL)“, viz [Řešení potíží](topic:troubleshooting#the-3d-view-is-missing).

:::note
Vaše modely zůstávají na Vašem počítači. Otevření modelu jej čte v prohlížeči a uložení stahuje soubor. Nic se nenahrává. Ukládání do cloudu zatím není k dispozici. Viz [Kam Vaše soubory putují](common:your-files). Chcete-li DetailCraft později používat bez připojení, zvolte jednou při připojení {{ui:Uložit pro offline}} v liště aplikace; viz [Práce offline](common:offline).
:::

:::offline
Jste offline. DetailCraft funguje bez připojení, jen pokud byl předtím uložen pro použití offline: tlačítko {{ui:Uložit pro offline}} v liště aplikace pak zobrazuje {{ui:Připraveno offline}}. Viz [Práce offline](common:offline).
:::

## Nejdřív se podívejte na ukázku

Nejrychlejší způsob, jak zjistit, co DetailCraft vytváří, je ukázkový rám.

1. Zvolte {{ui:Ukázka}} ve skupině {{ui:Soubor}} panelu nástrojů.
2. Pohled zobrazí dvoupolový rám: šest sloupů s patními plechy, čtyři nosníky s čelními deskami, jedno ztužidlo a sedm patek s výztuží.
3. Klikněte na nosník. Panel {{ui:Vlastnosti}} vpravo ukáže jeho označení dílu, délku řezu, hmotnost a otvory, které vytvořily čelní desky.
4. Otevřete dole kartu {{ui:Kusovník}}, kde uvidíte každé označení dílu s počtem a hmotností.

Postup [Prozkoumání ukázkového rámu](topic:sample-model) projde ukázku kus po kuse.

## Váš první model

Nový model již má osy 1 až 3 krát A až B po 6000 mm a dvě úrovně, Level 1 na 0 a Level 2 na 4000.

1. Zvolte {{ui:Nový}}. Má-li stávající model změny, DetailCraft se zeptá, zda je nejdřív uložit.
2. Zvolte {{ui:Půdorys}} nad pohledem. Seznam úrovní vedle něj vybere Level 1.
3. Zvolte {{ui:Sloup}} na panelu nástrojů, nebo stiskněte {{key:C}}.
4. Klikněte na průsečík os A/1. Sloup W12x50 se objeví od Level 1 do Level 2. Stavový řádek říká, kam šel.
5. Kliknutím na B/1, A/2 a B/2 umístíte další tři.
6. Vyberte Level 2 v seznamu úrovní a potom zvolte {{ui:Nosník}} nebo stiskněte {{key:B}}.
7. Klikněte na A/1 a potom na A/2. Nosník W16x26 spojí horní konce dvou sloupů, jeho horní hrana oceli je na úrovni.
8. Stiskem {{key:Esc}} se vraťte k {{ui:Vybrat}} a potom klikněte na nosník.
9. Zvolte {{ui:Čelní desky}} ve skupině {{ui:Spojit}}. Oba konce dostanou šroubovanou čelní desku, nosník se zkrátí, aby seděl, a první čelní deska je nyní vybrána.
10. Klikněte na nosník znovu.
11. Zvolte {{ui:Dílenský výkres}} ve skupině {{ui:Výstup}}. Otevře se náhled dílenského výkresu nosníku. Zvolte {{ui:Stáhnout PDF}}.
12. Stiskněte {{key:Mod+S}} pro uložení modelu. Prohlížeč stáhne `Untitled.detailcraft.json`.

Před uložením přejmenujte model v poli {{ui:Název}} vlevo nahoře, aby soubor i každý export nesly jeho název.

## Kam dál

- [Prohlídka obrazovky](topic:workspace)
- [Nastavení os a úrovní](topic:grids-and-levels)
- [Pohyb v 3D pohledu](topic:navigate-3d), myší, trackpadem nebo dotykovou obrazovkou
- [Pokud přicházíte z jiného detailovacího softwaru](topic:coming-from), pokud znáte velký detailovací balík
- [Používání této nápovědy](common:help)
