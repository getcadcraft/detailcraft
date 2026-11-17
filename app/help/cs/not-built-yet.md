---
title: Co ještě není hotovo
summary: Co tato raná verze DetailCraft zatím neumí a co místo toho udělat hned.
keywords: omezení, limity, chybějící, plán vývoje, nepodporováno, připravujeme, plánováno, obejití, úkoly
from: ea411885
---

DetailCraft je rané sestavení. Tato stránka uvádí, co zatím neumí, abyste se mohli přizpůsobit. Žádná z těchto položek nemá slíbený termín.

## Modelování

| Zatím ne | Místo toho dnes |
|---|---|
| Tažení jednoho konce prvku (roztažení) | Upravte {{ui:Začátek}} nebo {{ui:Konec}} v poli {{ui:Konce (x, y, z mm)}} na panelu {{ui:Vlastnosti}} |
| Filtr výběru (jen nosníky, jen jeden profil) | Natáhněte okno, pak {{key:Shift}}+klik pro vyjmutí dílů |
| Vytvoření pole z výběru; otáčení kolem šikmé osy; zrcadlení v šikmé rovině | Zkopírujte a vložte s odsazením, nebo použijte {{ui:Duplikovat}}; otáčení a zrcadlení fungují v půdorysu ([Výběr oknem, přesun, otočení, zrcadlení a změna mnoha prvků](topic:select-and-change)) |
| Body mimo mřížku při klikání | Umístěte na mřížku a pak zadejte souřadnice konců |
| Pohledy podél číslovaných os; uložené pohledy; pracovní roviny | Použijte {{ui:3D}}, nebo {{ui:Přidat podle os}} |
| Otvory nakreslené jako skutečné řezy ve 3D pohledu | Otvory se zobrazují jako tmavé zátky; ve všech exportech jsou skutečné |
| Zaoblená nebo šikmá vybrání, jiné řezy a tvarovky | Jen čtvercová vybrání na I-profilech |
| Otvory, které přidáte do úhelníků a kruhových trubek | Otvory u úhelníků pocházejí jen z [ztužidlových plechů](topic:brace-gussets) |
| Zadání v imperiálních jednotkách | Zadejte milimetry (25.4 na palec) |
| Úprava nebo odebrání vlastního profilu | Přidejte opravený profil pod novým názvem |

## Schodiště

| Zatím ne | Místo toho dnes |
|---|---|
| Madla, podesty, lemy stupňů, mřížové stupně, točitá a dvouramenná schodiště | Jen přímá ramena; viz [Schodiště](topic:stairs) |
| Koncové řezy schodnic u podlaží | Schodnice s kolmými řezy; upravte je ve vašem softwaru pro dílnu |

## Spoje

DetailCraft vytváří šest spojů: ztužidlový plech (viz [Ztužidlové plechy](topic:brace-gussets)); šroubovaný spoj mezi dvěma kusy jednoho I-profilu (viz [Spoje](topic:splices)); pokos mezi dvěma I-profily stýkajícími se pod úhlem, jen řezaný nebo se šroubovanými koncovými plechy (viz [Pokosové spoje](topic:mitres)); přírubový nebo prodloužený šroubovaný koncový plech od vodorovného, svisle postaveného I-nosníku k přírubě nebo stojině I-sloupu; smykový plát z nosníku (kolmý, šikmý nebo ve sklonu) k přírubě nebo stojině sloupu; a patní plech sloupu se čtyřmi kotevními tyčemi.

| Zatím ne | Místo toho dnes |
|---|---|
| Šikmé nebo skloněné koncové plechy | Použijte [smykové plechy](topic:shear-tabs), které zvládnou šikmé a skloněné nosníky |
| Úhlové příložky; výplňové plechy spojů a spoje různých velikostí; rohové plechy svařené k nosníku a sloupu, zkosené plechy | Detailujte je v jiném softwaru, nebo přidejte plechy a otvory ručně jako volné díly; viz [Spoje](topic:splices), [Ztužidlové plechy](topic:brace-gussets) |
| Zkosené nebo zúžené patní výztuhy; otvory pro maltu; kapsa v základu pro smykový čep | Obdélníkové výztuhy; viz [Patní plechy](topic:base-plates) |
| Vuty; svařované pokosy s tupým svarem; výztuhy v jedné rovině s pásnicemi druhého prvku | [Pokos](topic:mitres) s koncovými plechy a žebry stojiny, nebo prostý pokosový řez; ostatní plechy přidejte ručně jako volné díly |
| Pevnostní kontrola spojů (návrhová) | Kontrolujte spoje výpočty vašeho statika; DetailCraft jen upozorňuje na vzdálenost od okraje a rozteč |
| Podlouhlé otvory | Jen kulaté otvory |

## Analýza

| Zatím ne | Místo toho dnes |
|---|---|
| Návrhové kontroly nad rámec ocelových I-profilů: trubky, úhelníky, U-profily, svařované tvary, štíhlé prvky nebo třídy 4, krut, spoje; beton: štíhlost při výchylce, krut, seismické detaily, desky a stěny | Karta {{ui:Analýza}} kontroluje ocelové I-profily podle AISC 360 nebo EN 1993-1-1 ([Kontrola ocelových prvků podle normy](topic:design-checks)); ostatní ponechá označené jako "nezkontrolováno"; vše zkontroluje statik |
| Vzpěrná analýza, vibrace | Analýza druhého řádu je jen P-Delta (pružná); vzpěrná analýza není (modální, spektrální, časová analýza a pushover jsou na kartě {{ui:Analýza}}) |
| Návrhové kontroly, které statik ještě neověřil | Jsou jen pomůckou: zkontrolujte dva nebo tři prvky ručně nebo ve vlastním softwaru statika, než se na ně spolehnete |
| Zatížení od podlah, větru a sněhu vytvořená za vás z ploch | Zatížení zadejte na prvky ručně, v kN/m nebo kN |
| Odsazení prvků, excentrické spoje, ztužidla pouze v tahu, plechy a základy v rámu | Prvky se posuzují na svých pracovních osách; ztužidla přenášejí tah i tlak |

## Výztuž

| Zatím ne | Místo toho dnes |
|---|---|
| Kruhové sloupy, spirály, šikmé nebo zakřivené nosníky, desky jiné než obdélníkové, stěny, které nejsou rovné | Obdélníkové nosníky, sloupy, desky a stěny ([Detail železobetonu](topic:reinforced-concrete)) |
| Pruty ohnuté do přesahu, vystřídané přesahy, přesahy na místech, která zvolíte | Přesahy v rovnoměrných krocích, každý prut přesahuje v jednom řezu (ACI třída B, EN α6 = 1.5) |
| Rohové pruty u otvorů, střižná výztuž v průbojích, seismické detaily (ACI 318-19 kapitola 18) | Obrubní pruty na každé straně otvoru; zbytek zkontrolujte sami |
| Čtení souborů vlastního statického softwaru | Exportujte IFC: jeho IfcReinforcingBar se načtou jako pruty ([Pruty ze souboru IFC](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Tvarové kódy nad rámec přímého, jednoho ohybu a tvaru U; typy ACI 315 pro přímé a jednohákové pruty | Tři tvary se tisknou jako BS 8666 00, 11, 21 nebo ACI Typ 2; viz [Referenční přehled výztuže](topic:rebar-reference) |
| Metrické pruty jiné než BS 4449 H8–H40 (např. CSA 10M–35M) | Názvy ASTM soft-metric #10–#36, nebo pruty BS |

## Výkresy a exporty

| Zatím ne | Místo toho dnes |
|---|---|
| Listy na výšku, A0 a listy vlastního formátu; pohledy na sestavu na šikmých mřížkách | Na šířku A4 až A1 a ANSI B až D ([Výkresy sestavení a montáže](topic:drawings)); pro tisk na jiný formát upravte měřítko PDF |
| Značky svarů na výrobních výkresech jednotlivých dílů; značky jiné než koutové svary | Výkresy sestavení mají značky koutových svarů; výrobní výkres uvádí svar textem |
| Úprava výkresu v aplikaci | Změňte model a výkres vytvořte znovu; poznámky do PDF doplňte v PDF aplikaci, například MarkupCraft |
| Výkresy jako DWG s kótovacími objekty, nebo model v plné velikosti v prostoru modelu s listy jako rozvržení | Každý list je DWG nebo DXF v plné velikosti papíru, kóty jako čáry a číslice ([Výkresy sestavení a montáže](topic:drawings#download)) |
| Otvory pro NC v kruhových trubkách, vybrání na úhelnících a kruhových trubkách v souborech NC | Nezapisují se; viz [Pole souboru NC](topic:nc1-fields) |
| Zkosení, značení a vnitřní obrysy v souborech NC | Zatím žádné |
| Šroubové otvory, šrouby, svary a základy v exportu USD | Jsou ve výstupech IFC, NC a kusovníku; viz [Export ocelového modelu do USD](topic:usd) |
| Přenos spojů, základů, podlouhlých nebo obdélníkových otvorů a otvorů v kruhových trubkách ze souboru IFC | {{ui:Import IFC}} přenese nosníky, sloupy, prvky, plechy, osy, úrovně, kulaté otvory, vybrání, šrouby a výztužné pruty a jeho protokol uvádí, co vynechal |
| Vlastní rozvržení reportů | Tři soubory CSV |

## Panely

| Zatím ne | Místo toho dnes |
|---|---|
| Přesouvání reportů dole ({{ui:Problémy}}, {{ui:Kusovník}}, {{ui:Výkaz ohybů}}) | Přesunout lze jen panely {{ui:Model}} a {{ui:Vlastnosti}}. Viz [Uspořádání panelů](common:arrange-panels) |

## Spolupráce a ukládání

| Zatím ne | Místo toho dnes |
|---|---|
| Cloudové ukládání a synchronizace mezi počítači | Ukládejte soubory `.detailcraft.json` a sdílejte je jako jakékoli jiné soubory. Cloudové ukládání zatím není k dispozici |
| Kurzory ostatních a štítky "upravuje" v relaci Live TeamWork; mřížky, úrovně a fáze slučované po jednotlivých položkách | Úpravy se stále slučují (mřížky, úrovně a fáze se přenášejí celé, platí pozdější změna); viz [Společně detailujte jednu konstrukci, živě](topic:work-live) |
| Pozvánkové odkazy do relace Live TeamWork přes internet | Připojte se krátkým kódem ve stejné síti |

## Platformy

- DetailCraft je určen pro obrazovku stolního počítače, notebooku nebo tabletu. Funguje i na telefonu: model zůstává na obrazovce a panely a výkazy se otevírají jako listy z lišty dole, ale pro panely je tam málo místa.
- Práce offline vyžaduje nejdřív DetailCraft uložený pro offline použití: tlačítkem {{ui:Uložit pro offline}} v liště aplikace. Jakmile se zobrazí {{ui:Připraveno offline}}, všechno v této verzi funguje bez připojení. Viz [Práce offline](common:offline).

Pokud vám některá z těchto mezer brání v práci, napište nám přes [stránku podpory](https://getcadcraft.com/support); pomůže nám to rozhodnout, co vyvíjet dál.
