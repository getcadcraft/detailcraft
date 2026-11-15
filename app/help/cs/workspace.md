---
title: Prohlídka obrazovky
summary: Každý panel, lišta a karta v DetailCraftu podle jejich názvu na obrazovce a k čemu slouží.
keywords: obrazovka, rozložení, panel nástrojů, panely, vlastnosti, stavový řádek, přehledy, rozhraní, karty
from: 94f81073
---

DetailCraft vyplní okno prohlížeče pod lištou aplikace. Shora dolů: panel nástrojů, pak tři sloupce ({{ui:Model}}, pohled, {{ui:Vlastnosti}}), pak karty přehledů a nakonec stavový řádek.

## Lišta aplikace

Tenká lišta úplně nahoře patří k webu CadCraft, ne k modelu. Ukazuje název aplikace a verzi, odkaz na {{ui:O DetailCraftu}}, {{ui:Nápověda}} (nebo {{key:F1}}) pro tuto nápovědu, {{ui:Uložit pro offline}}, tlačítko režimu obrazovky a přepínač {{ui:Papír}} / {{ui:Model}}.

- {{ui:Uložit pro offline}} uchová DetailCraft, jeho 3D pohled a tuto nápovědu v prohlížeči, aby se otevřel bez připojení. Po uložení ukazuje {{ui:Připraveno offline}}; pak na něj klikněte pro {{ui:Uložit znovu (získat nejnovější verzi)}} nebo {{ui:Odebrat offline kopii}}. Viz [Práce offline](common:offline).
- {{ui:Papír}} dává světlou obrazovku a {{ui:Model}} tmavou. 3D pohled se přizpůsobí okamžitě; nic ve vašem modelu se nemění.
- Tlačítko režimu obrazovky a {{key:Ctrl+Shift+F}} přepínají mezi normálním zobrazením, celou obrazovkou a celou obrazovkou se skrytými lištami. {{key:Ctrl+Shift+F}} používá klávesu Control na každém počítači, včetně Macu. Při skrytých lištách přejeďte ke hornímu okraji obrazovky (nebo na něj klepněte), aby se objevily. {{key:Esc}} ukončí celou obrazovku.

## Panel nástrojů

Panel nástrojů má pět skupin. Podržte kurzor nad tlačítkem, uvidíte, co dělá, a jeho klávesu.

| Skupina | Tlačítka | Co dělají |
|---|---|---|
| {{ui:Soubor}} | {{ui:Nový}}, {{ui:Otevřít}}, {{ui:Import IFC}}, {{ui:Uložit}}, {{ui:Ukázka}} | Začnou model, otevřou uložený `.detailcraft.json` nebo soubor IFC, uloží jeden, nebo otevřou ukázkový rám |
| {{ui:Umístit}} | {{ui:Vybrat}}, {{ui:Nosník}}, {{ui:Sloup}}, {{ui:Ztužidlo}}, {{ui:Plech}}, {{ui:Patka}}, {{ui:Schodiště}} | Nástroj, který použije další kliknutí v pohledu |
| {{ui:Spojit}} | {{ui:Čelní desky}}, {{ui:Patní plech}}, a v {{ui:Více}}: {{ui:Smykové plechy}}, {{ui:Spojka}}, {{ui:Styčník}}, {{ui:Podobné}} | Přidá spoj k vybranému nosníku, sloupu nebo ztužidlu, nebo zkopíruje vybraný spoj na každý podobný styk |
| {{ui:Upravit}} | {{ui:Zpět}}, {{ui:Znovu}}, {{ui:Kopírovat}}, {{ui:Vložit}}, {{ui:Více}} | Krok zpět a vpřed mezi úpravami; zkopírují výběr a vloží ho. {{ui:Více}} otevře nabídku s {{ui:Vyjmout}}, {{ui:Kopírovat}}, {{ui:Vložit}}, {{ui:Vložit na stejné místo}}, {{ui:Duplikovat}}, {{ui:Smazat}}, {{ui:Vybrat vše}} a {{ui:Zrušit výběr}}, každé s klávesou |
| {{ui:Výstup}} | {{ui:IFC}}, {{ui:Soubory NC}}, {{ui:Kusovník}}, {{ui:Dílenský výkres}}, {{ui:Výkresy}}, a v {{ui:Více}}: {{ui:Ohýbání}}, {{ui:Zpráva o hmotnosti podle fází}}, {{ui:Soubor KISS pro výrobní software}} | Stáhne export, nebo otevře listy výkresů |

Tlačítka a položky nabídky, které teď nemohou fungovat, jsou šedé a najetí na ně řekne proč. {{ui:Čelní desky}} potřebují vybraný nosník, {{ui:Patní plech}} vybraný sloup, {{ui:Podobné}} vybraný spoj, {{ui:Dílenský výkres}} model s díly, {{ui:Kopírovat}} vybraný prut nebo patku a {{ui:Vložit}} něco zkopírovaného. Viz [Kopírování, vkládání a duplikování](topic:copy-paste).

## Panel Model (vlevo)

- {{ui:Model}}: {{ui:Název}} modelu. Pojmenuje každý uložený nebo exportovaný soubor.
- {{ui:Osy}}: osové čáry a jejich rozestupy a {{ui:Použít osy}}. Viz [Nastavení os a úrovní](topic:grids-and-levels).
- {{ui:Úrovně}}: jeden řádek na úroveň (název a kóta v mm), {{ui:Přidat úroveň}} a {{ui:Použít úrovně}}.
- {{ui:Vlastní průřez}}: vytvořte si vlastní parametrický průřez. Zavřený, dokud ho neotevřete.
- {{ui:Označení dílů}}: každé označení dílu v modelu s jeho profilem, délkou a počtem. Kliknutím na označení vyberete první díl s ním.

{{ui:Osy}}, {{ui:Úrovně}} a {{ui:Vlastní průřez}} se sbalí: klikněte na jejich nadpisy.

## Pohled (uprostřed)

Pohled ukazuje model ve 3D. Nad ním je lišta pohledu se třemi tlačítky a seznamem:

- {{ui:3D}}: volně otáčí model kolem.
- {{ui:Půdorys}}: dívá se kolmo dolů na jednu úroveň. Vedle tlačítek se objeví seznam úrovní. Vše více než 1.5 m nad úrovní se odřízne, abyste danou úroveň viděli a mohli na ni jasně kliknout.
- {{ui:Pohled}}: dívá se kolmo na jednu písmennou osu (osa A, osa B …). Objeví se seznam písmenných os. Zobrazí se jen ocel do 1 m od této čáry.
- Tlačítko přizpůsobení na pravém konci lišty pohledu přiblíží, aby se ukázal celý model.

Malé tečky označují každý průsečík os na každé úrovni. Když je zapnutý nástroj pro umísťování, tečka nejblíže kurzoru se rozsvítí a stavový řádek ji pojmenuje, například „A/2 na Úrovni 1“. Barvy odlišují typy prvků: sloupy, nosníky, ztužidla a plechy mají každý svou barvu, šrouby a tyče jinou, patky jsou průhledné a výztuž je kreslena jako trubky. Otvory se ukazují jako tmavé zátky; výřezy jsou odříznuté.

Jak otáčet, posouvat a přibližovat: [Pohyb ve 3D pohledu](topic:navigate-3d).

Když je model prázdný, pohled ukáže krátký seznam „Začít model“. Uložený soubor modelu můžete také přetáhnout kamkoli do pohledu a otevřít ho.

## Panel Vlastnosti (vpravo)

Co panel ukazuje, závisí na tom, co děláte, a nadpis říká, co to je: „Model“, „Umístit nosník“, „Nosník b2“, „Spoj čelní deskou“, „Patní plech“, „Patka F1“, „3 vybrané“ nebo „Vložit“.

- **Nic není vybráno:** shrnutí modelu (pruty, spoje, patky, díly, označení, šrouby, hmotnost oceli a výztuže, osy, úrovně).
- **Nástroj pro umísťování zapnutý:** možnosti pro další prvek (profil, materiál, poloha, natočení a u sloupů {{ui:Až do}}), shrnutí zvoleného profilu a formulář {{ui:Přidat podle os}} pro umísťování bez klikání v pohledu.
- **Prut vybraný:** jeho název, profil, materiál, poloha, natočení, souřadnice obou konců, jeho označení, délka řezu a hmotnost, jeho otvory a výřezy, a tlačítka pro spoje, jeho dílenský výkres a {{ui:Smazat}}.
- **Spoj vybraný:** každé nastavení plechů, šroubů a svarů, šrouby a svar, které vytváří, jeho upozornění a {{ui:Použít na podobné}}.
- **Patka vybraná:** její poloha a velikost, spodní síť, startovací pruty a označení výztuže, které používá.
- **Více věcí vybráno:** kolik prutů každého typu, spojů a patek, jejich hmotnost oceli a tlačítka {{ui:Kopírovat}}, {{ui:Duplikovat}} a {{ui:Smazat}}.
- **Vkládání:** co je ve schránce, a formuláře pro vložení podle zadaného posunu nebo na průsečík os, který vyberete ze seznamů.

Číselná pole se projeví, když stisknete {{key:Enter}} nebo pole opustíte. Každá změna je jeden krok, který lze vrátit zpět.

## Karty přehledů (dole)

- {{ui:Problémy}}: vše, co DetailCraft nemohl sestavit nebo co chce, abyste zkontrolovali, s tlačítkem {{ui:Vybrat}} na každém řádku. Karta ukazuje počet v závorkách.
- {{ui:Kusovník}}: díly, sestavy, šrouby a kotevní tyče s hmotnostmi a odkazem {{ui:Stáhnout CSV}}. Kliknutím na označení dílu vyberete tento díl.
- {{ui:Výkaz ohybů}}: každá značka výztuže v každé patce, s odkazem {{ui:Stáhnout CSV}}.

Když je karta zaostřená, {{key:Left}} a {{key:Right}} přecházejí mezi kartami.

## Stavový řádek

Pruh podél spodního okraje má tři části: průsečík os pod kurzorem při umísťování, poslední zprávu (co se právě stalo, nebo proč bylo něco odmítnuto) a průběžné součty dílů, šroubů, hmotnosti oceli a hmotnosti výztuže. Když se akce zdá, že nic nedělá, nejdřív si přečtěte zprávu tady.

Název karty prohlížeče začíná tečkou (•), dokud má model neuložené změny.

## Na úzké obrazovce

Pod šířkou zhruba 760 pixelů se sloupce skládají pod sebe: panel nástrojů, pohled, stavový řádek, {{ui:Vlastnosti}}, karty přehledů a nakonec panel {{ui:Model}}. Pro přístup k nim posouvejte stránku. DetailCraft je navržen pro stolní počítač nebo notebook; telefon se hodí na prohlížení, ne na detailing.
