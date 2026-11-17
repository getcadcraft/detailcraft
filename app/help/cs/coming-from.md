---
title: Přechod z jiného softwaru pro detailing
summary: Jak návyky z plnohodnotného detailingového balíku odpovídají DetailCraftu a rozdíly, na kterých se zkušení detailéři chytí.
keywords: přechod, migrace, známé, pracovní postup, srovnání, rozdíly, číslování, komponenty, katalog, výkresy, návyky
from: 39639a5d
---

Pokud detailujete v Tekla Structures, většina DetailCraftu vám bude připadat povědomě: osy, úrovně, profily z katalogu, díly a sestavy, spoje, číslování, soubory NC, IFC. Měřítko je ale velmi odlišné: Tekla Structures je plnohodnotný výrobní systém, zatímco DetailCraft je malá, raná aplikace v prohlížeči, která zvládne několik úloh od začátku do konce. Tato stránka ukazuje, kde se vaše návyky přenesou a kde ne.

:::tip
Pokud máte v rukou pás nástrojů Tekla Structures, vyberte v {{ui:Settings}} › {{ui:DetailCraft}} › {{ui:Menus, keys and mouse}} styl nabídky {{ui:Steel ribbon}}: karty Modeling, Detailing, Edit, Drawings, Fabrication a View a prostřední tlačítko posouvá. Pokud přicházíte z AutoCADu a rádi píšete příkazy, {{ui:Drafting classic}} přidá řádek příkazů (BEAM, COLUMN, ENDPLATE, ZOOM …). Viz [Nabídky, klávesy a myš](topic:menus-keys-and-mouse).
:::

## Rychlý přehled

| Na co jste zvyklí | V DetailCraftu |
|---|---|
| Vytváření os se souřadnicemi v dialogu os | {{ui:Grids}} v levém panelu: popisky a rozestupy mezi čarami, ne absolutní souřadnice. Číslované čáry běží jedním směrem, písmenné čáry druhým |
| Úrovně jako souřadnice Z os | Samostatný seznam {{ui:Levels}}: název a kóta na každém řádku, použije se {{ui:Apply levels}} |
| Výběr bodů kdekoli pomocí uchopení | Kliknutí se přichytí jen na průsečíky os. Body mimo osy se zadávají do pole {{ui:Ends (x, y, z mm)}} členu |
| Příkazy pro sloup, nosník a plech | {{ui:Column}} ({{key:C}}), {{ui:Beam}} ({{key:B}}), {{ui:Brace}} ({{key:R}}), {{ui:Plate}} ({{key:P}}), {{ui:Footing}} ({{key:F}}) |
| Dialog vlastností dílu (dvojklik na díl) | Stačí jeden klik: panel {{ui:Properties}} vpravo je vždy aktivní; dialog není a není tlačítko Upravit ani Použít |
| Poloha v rovině, natočení a nastavení hloubky | {{ui:Position}} (horní hrana oceli, na střed, nebo dolní hrana na ose) a {{ui:Rotation (°)}}. Žádná samostatná vodorovná odsazení |
| Katalog profilů | Pevný seznam 2,311 publikovaných rozměrů (AISC W, S, C, L, HSS, Pipe; evropské IPE, HEA, HEB, UPN; britské UB, UC, PFC, EA, UEA, SHS, RHS, CHS a tenkostěnné duté profily), plus parametrické plechy a vaše vlastní průřezy {{ui:Custom profile}} |
| Katalog materiálů | Sedm jakostí v seznamu: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Použití komponenty spoje a jejího dialogu | Vyberte nosník a zvolte {{ui:End plates}}. Nastavení se objeví na panelu {{ui:Properties}}. Existují jen dva spoje (čelní deska na přírubu sloupu, patní plech) |
| Automatické spojení, nebo kopírování styku na podobné styky | Vyberte spoj a zvolte {{ui:Apply to similar (n)}} |
| Číslování s řadami a počátečními čísly | Žádný příkaz: označení se aktualizují samy po každé změně, s pevnými předponami c, b, br, p a C, B, BR, P |
| Dialogy šroubů a otvorů | Otvory se zadávají podle plochy a polohy. Šrouby vznikají jen ze spojů |
| Nástroje pro řez, přizpůsobení a řez mnohoúhelníkem | Výřezy (nahoře nebo dole, na kterémkoli konci) jen u I-profilů. Zkrácení ve spojích je automatické |
| Zprávy a šablony | Tři pevné zprávy v kartách dole a stahování CSV |
| Vytváření výkresů a seznam výkresů | Jeden dílenský výkres na označení dílu, všechny naráz, nejprve náhled, pak stažení jako jeden PDF nebo list po listu. Nic se neukládá ani neupravuje |
| Export souborů NC | {{ui:NC files}}: jeden soubor DSTV na označení dílu, jen I-profily a plechy, zabalený do ZIP |
| Export IFC | {{ui:IFC}}: IFC4 celého modelu, včetně výztuže |
| Výztuž v libovolném betonovém dílu | Výztuž jen v obdélníkových plošných patkách, americké průměry prutů, se spodní sítí a začínacími pruty |
| Model uložený ve složce projektu, více uživatelů | Jeden soubor `.detailcraft.json`, který si stáhnete. Jeden uživatel, na vašem počítači |
| Historie zpět | {{key:Mod+Z}} a {{key:Mod+Y}}, až 200 kroků, uchované, dokud neotevřete nebo nezačnete jiný model |

## Rozdíly, na kterých se lidé chytí

### Označení se mění samo

Žádný krok číslování není. Označení se přepočítají po každé změně, takže jsou vždy aktuální, ale mohou se také přečíslovat: přidáte sloup a včerejší c3 může být nyní c4. Neexistuje „historie číslování“, která by uchovávala staré označení. Dokončete model a pak vydejte kusovník, soubory NC a dílenské výkresy najednou z jednoho uloženého souboru.

### Prostřední tlačítko myši přibližuje, neposouvá

V 3D pohledu: tažení levým tlačítkem otáčí, tažení pravým posouvá, kolečko přibližuje a tažení prostředním tlačítkem také přibližuje. Podržení {{key:Shift}} při tažení levým tlačítkem posouvá také. Kolečko přibližuje ke středu pohledu, ne k ukazateli. Výběr středu otáčení neexistuje: model se otáčí kolem středu pohledu. Viz [Pohyb ve 3D pohledu](topic:navigate-3d).

### Sloupy jsou ve výchozím stavu orientovány jedním směrem

Při natočení 0 směřují pásnice sloupu podél směru číslovaných os. Nosníky vedené mezi písmennými osami se připojují do stojiny a čelní desky tam nejsou povoleny ("Nosníky napojené na stojinu sloupu ještě nejsou hotové"). Před přidáním spojů otočte tyto sloupy o 90°.

### Pohledy jen na písmenných osách

{{ui:Elevation}} se dívá jen podél písmenných os. Pohledy podél číslovaných os, uložené pohledy ani pracovní roviny neexistují. Pro rámy na číslovaných osách použijte {{ui:3D}} nebo {{ui:Add by grid}}.

### Výběr, kopírování a přesun

Několik dílů vyberte {{key:Shift}}+klikem nebo {{key:Mod+A}}, pak je kopírujte, vyjměte, vložte (na průsečík os, na zadané odsazení, nebo na stejné místo) a duplikujte, včetně spojů ([Kopírování, vložení a duplikování](topic:copy-paste)). Výběr oknem, filtr výběru, přesun, zrcadlení ani pole neexistují a vlastnosti se mění po jednom členu na panelu {{ui:Properties}}.

### Osy nestahují členy s sebou

Členy si při změně rozestupů os ponechají své souřadnice; s čarami os se nic nehýbe. Změňte osy dříve, než umístíte ocel, nebo potom upravte souřadnice konců každého členu.

### Spoje se nenavrhují

Dva spoje umísťují plechy, otvory, šrouby a svary podle čísel, která zadáte. Žádná návrhová kontrola neexistuje, jen varování o okrajích a rozestupech (z EN 1993-1-8, tabulka 3.3).

### Otvory se v 3D pohledu nevyřezávají

Otvory se zobrazují jako tmavé zátky. Jsou to skutečné otvory v souborech NC, dílenských výkresech a souboru IFC. Výřezy se v pohledu vyřezávají.

### Hmotnosti jsou hrubé

Hmotnost oceli neodečítá otvory ani výřezy a hmotnost šroubů není zahrnuta.

### Jen milimetry

Vše se zadává a zobrazuje v milimetrech, i u profilů AISC. Názvy profilů zachovávají publikovaný tvar (W12x50, HSS6x6x1/4).

### Žádné výkresy ke správě

Seznam výkresů, editor výkresů ani výkresy celkového uspořádání či sestavy neexistují. Dílenský výkres se vytvoří, když o něj požádáte, a stáhne se; chcete-li jej změnit, změňte model a vytvořte jej znovu.

### Běží v prohlížeči

Uložení stáhne soubor. Klávesové zkratky, které si prohlížeč ponechává pro sebe, nelze použít. Vaše modely nikdy neopustí váš počítač: viz [Kam směřují vaše soubory](common:your-files).

## Co dělat dál ve vašem současném softwaru

Dnes se DetailCraft hodí pro malé rámy, ověření nápadu, výuku, nebo pro výrobu souborů NC a dílenských výkresů u jednoduchých nosníkových a sloupových prací. Složité spoje, výkresy celkového uspořádání, montážní výkresy, víceuživatelské projekty a vše uvedené v [Co ještě není hotovo](topic:not-built-yet) nechte v softwaru, který používáte nyní.
