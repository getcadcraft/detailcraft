---
title: Prohlídka obrazovky
summary: Každá lišta, panel a karta v DetailCraftu podle názvu na obrazovce a k čemu která slouží.
keywords: obrazovka, rozvržení, panel nástrojů, panely, vlastnosti, stavový řádek, přehledy, rozhraní, uživatelské rozhraní, karty
from: 454f74fd
---

DetailCraft vyplňuje okno prohlížeče pod lištou aplikace. Shora dolů: panel nástrojů, potom tři sloupce (panel {{ui:Model}}, pohled, panel {{ui:Vlastnosti}}), potom karty přehledů a stavový řádek.

## Lišta aplikace

Štíhlá lišta úplně nahoře patří webu CadCraft, ne modelu. Zobrazuje název aplikace a verzi, odkaz {{ui:O aplikaci DetailCraft}}, {{ui:Nápověda}} (nebo {{key:F1}}) pro tuto nápovědu, {{ui:Uložit pro offline}}, tlačítko režimu obrazovky a přepínač {{ui:Papír}} / {{ui:Model}}.

- {{ui:Uložit pro offline}} uchová DetailCraft, jeho 3D pohled a tuto nápovědu v prohlížeči, aby se otevřel bez připojení. Po uložení zobrazuje {{ui:Připraveno offline}}; kliknutím na něj pak získáte {{ui:Uložit znovu (získat nejnovější verzi)}} nebo {{ui:Odebrat offline kopii}}. Viz [Práce offline](common:offline).
- {{ui:Papír}} dává světlou obrazovku a {{ui:Model}} tmavou. 3D pohled ji okamžitě následuje; na modelu se nic nemění.
- Tlačítko režimu obrazovky a {{key:Ctrl+Shift+F}} přepínají normální, celou obrazovku a celou obrazovku se skrytými lištami. {{key:Ctrl+Shift+F}} používá klávesu Control na každém počítači, i na Macu. Při skrytých lištách je vrátíte namířením na horní okraj obrazovky (nebo klepnutím na něj). {{key:Esc}} opustí celou obrazovku.

## Panel nástrojů

Panel nástrojů má pět skupin. Najetím na tlačítko zobrazíte, co dělá, a jeho klávesu.

| Skupina | Tlačítka | Co dělají |
|---|---|---|
| {{ui:Soubor}} | {{ui:Nový}}, {{ui:Otevřít}}, {{ui:Import IFC}}, {{ui:Uložit}}, {{ui:Ukázka}} | Začít model, otevřít uložený `.detailcraft.json` nebo soubor IFC, uložit jej, nebo otevřít ukázkový rám |
| {{ui:Umístit}} | {{ui:Vybrat}}, {{ui:Nosník}}, {{ui:Sloup}}, {{ui:Ztužidlo}}, {{ui:Plech}}, {{ui:Patka}}, {{ui:Schodiště}} | Nástroj, který použije další kliknutí v pohledu |
| {{ui:Spojit}} | {{ui:Čelní desky}}, {{ui:Patní plech}} a v {{ui:Více}}: {{ui:Smykové plechy}}, {{ui:Spojka}}, {{ui:Styčník}}, {{ui:Podobné}} | Přidat spoj k vybranému nosníku, sloupu nebo ztužidlu, nebo zkopírovat vybraný spoj na všechny podobné styky |
| {{ui:Úpravy}} | {{ui:Zpět}}, {{ui:Znovu}}, {{ui:Kopírovat}}, {{ui:Vložit}}, {{ui:Více}} | Krok zpět a vpřed v úpravách; kopírovat výběr a vložit jej. {{ui:Více}} otevře nabídku s {{ui:Vyjmout}}, {{ui:Kopírovat}}, {{ui:Vložit}}, {{ui:Vložit na stejné místo}}, {{ui:Duplikovat}}, {{ui:Smazat}}, {{ui:Vybrat vše}} a {{ui:Zrušit výběr}}, každá se svou klávesou |
| {{ui:Výstup}} | {{ui:IFC}}, {{ui:Soubory NC}}, {{ui:Kusovník}}, {{ui:Dílenský výkres}}, {{ui:Výkresy}} a v {{ui:Více}}: {{ui:Ohýbání}}, {{ui:Zpráva o hmotnosti podle fází}}, {{ui:Soubor KISS pro výrobní software}} | Stáhnout export, nebo otevřít listy výkresů |

Tlačítka a položky nabídky, které právě nemohou působit, jsou zašedlé a najetí na ně říká proč. {{ui:Čelní desky}} potřebují vybraný nosník, {{ui:Patní plech}} vybraný sloup, {{ui:Podobné}} vybraný spoj, {{ui:Dílenský výkres}} vybraný I-profil nebo plech, {{ui:Kopírovat}} vybraný prut nebo patku a {{ui:Vložit}} něco zkopírovaného. Viz [Kopírování, vkládání a duplikování](topic:copy-paste).

## Panel Model (vlevo)

- {{ui:Model}}: {{ui:Název}} modelu. Pojmenuje každý soubor, který uložíte nebo exportujete.
- {{ui:Osy}}: osy a jejich rozestupy a {{ui:Použít osy}}. Viz [Nastavení os a úrovní](topic:grids-and-levels).
- {{ui:Úrovně}}: jeden řádek na úroveň (název a výška v mm), {{ui:Přidat úroveň}} a {{ui:Použít úrovně}}.
- {{ui:Vlastní průřez}}: vytvořte si vlastní parametrický průřez. Zavřeno, dokud jej neotevřete.
- {{ui:Označení dílů}}: každé označení dílu v modelu s jeho profilem, délkou a počtem. Kliknutím na označení vyberete první díl s ním.

{{ui:Osy}}, {{ui:Úrovně}} a {{ui:Vlastní průřez}} se sbalují: klikněte na jejich nadpisy.

## Pohled (uprostřed)

Pohled ukazuje model ve 3D. Nad ním má lišta pohledu tři tlačítka a seznam:

- {{ui:3D}}: libovolně otáčejte modelem.
- {{ui:Půdorys}}: pohled přímo shora na jedno podlaží. Vedle tlačítek se objeví seznam úrovní. Vše výše než 1,5 m nad úrovní se odřízne, abyste úroveň viděli a mohli na ni jasně klikat.
- {{ui:Pohled}}: pohled přímo na jednu písmennou osu (Osa A, Osa B …). Objeví se seznam písmenných os. Zobrazí se jen ocel do 1 m od té osy.
- Tlačítko přizpůsobení na pravém konci lišty pohledu přiblíží celý model.

Malé tečky označují každý průsečík os na každé úrovni. Dokud je zapnutý umísťovací nástroj, tečka nejblíže ukazateli se rozsvítí a stavový řádek ji pojmenuje, například „A/2 na Level 1“. Barvy rozlišují druhy prutů: sloupy, nosníky, ztužidla a plechy mají každý vlastní barvu, šrouby a tyče jinou, patky jsou průhledné a výztuž se kreslí jako trubky. Otvory se zobrazují jako tmavé zátky; výřezy jsou vyříznuty.

Jak otáčet, posouvat a přibližovat: [Pohyb v 3D pohledu](topic:navigate-3d).

Když je model prázdný, pohled zobrazí krátký seznam „Začněte model“. Uložený soubor modelu můžete také pustit kamkoli na pohled a otevřít jej.

## Panel Vlastnosti (vpravo)

Co panel zobrazuje, závisí na tom, co děláte, a jeho nadpis říká co: „Model“, „Umístit nosník“, „Nosník b2“, „Spoj s čelní deskou“, „Patní plech“, „Patka F1“, „Vybráno 3“ nebo „Vložit“.

- **Nic nevybráno:** souhrn modelu (pruty, spoje, patky, díly, označení, šrouby, hmotnost oceli a výztuže, osy, úrovně).
- **Zapnutý umísťovací nástroj:** volby pro další díl (profil, materiál, poloha, natočení a u sloupů {{ui:Až do}}), souhrn zvoleného profilu a formulář {{ui:Přidat podle os}} pro umístění bez klikání v pohledu.
- **Vybraný prut:** jeho název, profil, materiál, poloha, natočení, souřadnice jeho dvou konců, jeho označení, délka řezu a hmotnost, jeho otvory a výřezy a tlačítka pro spoje, jeho dílenský výkres a {{ui:Smazat}}.
- **Vybraný spoj:** každé nastavení plechu, šroubu a svaru, šrouby a svar, které vytváří, jeho varování a {{ui:Použít na podobné}}.
- **Vybraná patka:** její poloha a velikost, spodní síť, startovací pruty a označení prutů, která používá.
- **Vybráno několik věcí:** kolik prutů každého typu, spojů a patek, jejich hmotnost oceli a {{ui:Kopírovat}}, {{ui:Duplikovat}} a {{ui:Smazat}}.
- **Vkládání:** co je ve schránce, a formuláře pro vložení zadaným odsazením nebo na průsečík os, který zvolíte ze seznamů.

Číselná pole se projeví po stisku {{key:Enter}} nebo opuštění pole. Každá změna je jeden krok, který lze vrátit.

## Karty přehledů (dole)

- {{ui:Problémy}}: vše, co DetailCraft nemohl vytvořit nebo chce, abyste zkontrolovali, s tlačítkem {{ui:Vybrat}} na každém řádku. Karta ukazuje počet v závorce.
- {{ui:Kusovník}}: díly, sestavy a šrouby a kotevní tyče, s hmotnostmi a odkazem {{ui:Stáhnout CSV}}. Kliknutím na označení dílu tento díl vyberete.
- {{ui:Výkaz ohybů}}: každé označení prutu v každé patce, s odkazem {{ui:Stáhnout CSV}}.

S aktivní kartou se {{key:Left}} a {{key:Right}} pohybujete mezi kartami.

## Stavový řádek

Řádek podél spodního okraje má tři části: průsečík os pod ukazatelem při umísťování, poslední zprávu (co se právě stalo, nebo proč bylo něco odmítnuto) a průběžné součty dílů, šroubů, hmotnosti oceli a hmotnosti výztuže. Když se zdá, že akce nic nedělá, přečtěte si nejdřív zprávu zde.

Název karty prohlížeče začíná tečkou (•), dokud má model změny, které jste neuložili.

## Na úzké obrazovce

Pod šířkou asi 760 pixelů se sloupce naskládají: panel nástrojů, pohled, stavový řádek, {{ui:Vlastnosti}}, karty přehledů a nakonec panel {{ui:Model}}. K nim se dostanete posouváním stránky. DetailCraft je rozvržen pro obrazovku počítače nebo notebooku; telefon funguje k prohlížení, ne k detailování.
