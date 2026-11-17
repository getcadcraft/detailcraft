---
title: Kopírování, vkládání a duplikování
summary: Vyberte několik dílů, zkopírujte je i s otvory, výřezy a spoji a vložte je na průsečík os, s odsazením, na stejné místo nebo na jinou kartu. Vyjměte, duplikujte, smažte a vyberte vše.
keywords: kopírovat, vložit, vyjmout, duplikovat, schránka, vložit na stejné místo, vybrat vše, zrušit výběr, výběr více prvků, shift klik, několik, opakovat pole, kopírovat rám, odsazení, smazat několik, nabídka úpravy, nabídka více
from: f25f1829
---

Skupina {{ui:Edit}} na panelu nástrojů obsahuje {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}} a {{ui:Paste}}. Její nabídka {{ui:More}} obsahuje zbytek: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} a {{ui:Select none}}, každou s její klávesovou zkratkou. Tlačítko nebo položka nabídky, která teď nemůže fungovat, je zešedlá; najetím na ni zjistíte proč (například „zatím nic zkopírováno“).

Každé vložení, vyjmutí, duplikování a smazání je jeden krok: jedním {{key:Mod+Z}} se vše vrátí zpět.

## Výběr více dílů

- Klikněte na díl a vyberte jej. Podržte {{key:Shift}} (nebo {{key:Ctrl}}, nebo {{key:Mod}}) a klikněte na další díly, které chcete přidat; vybraný díl odeberete stejným kliknutím.
- {{key:Mod+A}} nebo {{ui:Select all}} vybere každý prvek, spoj a základovou patku.
- {{key:Esc}} nebo {{ui:Select none}} zruší výběr.

Když je vybráno více věcí, panel {{ui:Properties}} má nadpis „4 vybráno“ (nebo kolik jich je) a vypisuje prvky podle typu, spoje, základové patky a celkovou hmotnost oceli, s tlačítky {{ui:Copy}}, {{ui:Duplicate}} a {{ui:Delete}}.

## Kopírování

1. Vyberte prvky a základové patky, které chcete.
2. Zvolte {{ui:Copy}} nebo stiskněte {{key:Mod+C}}.

Co se zkopíruje:

- Každý prvek celý: profil, materiál, konce, poloha, otočení, název, otvory a výřezy. Vlastní profil, který používá, se zkopíruje také.
- Každá základová patka celá: rozměry, beton, spodní síť a vyčkávací výztuž.
- Čelní desky a patní plechy, ale jen když jsou zkopírovány všechny prvky, které spoj spojuje: čelní deska nosníku potřebuje nosník i jeho sloup. Stavový řádek říká, kolik spojů zůstalo vynecháno. Chcete-li spoje záměrně vynechat, zrušte v [nastavení DetailCraft](topic:settings) zaškrtnutí u **Kopírovat čelní desky a patní plechy spolu s jejich prvky**.

Spoj samostatně zkopírovat nelze; vyberte místo něj jeho prvky. Chcete-li ostatním spojům dát stejný spoj, použijte {{ui:Similar}} (viz [Čelní desky](topic:end-plates#copy-it-to-every-similar-joint)).

Kopie zůstane v tomto prohlížeči, dokud nezkopírujete něco jiného. Jiná karta nebo okno DetailCraft ve stejném prohlížeči ji může vložit, takže můžete zkopírovat rám z jednoho modelu a vložit jej do druhého.

## Vložení na průsečík os

1. Zvolte {{ui:Paste}} nebo stiskněte {{key:Mod+V}}.
2. Přesuňte ukazatel nad pohled. Čárkovaný obrys kopie sleduje průsečík os nejblíž ukazateli.
3. Klikněte na průsečík. Základní bod kopie (její nejnižší roh: nejmenší x, y a z ze všeho, co se zkopírovalo) se umístí tam.

Vložené díly jsou potom vybrány, takže můžete vložit znovu jinde nebo je upravit. {{key:Esc}} vkládání zruší; kopie zůstane ve schránce. {{ui:Plan}} a {{ui:Elevation}} usnadní trefení správného průsečíku.

:::tip
Chcete-li opakovat pole, vyberte prvky pole (nebo vše pomocí {{key:Mod+A}}), zkopírujte je, vložte a klikněte na průsečík o jedno pole dál, než byl nejnižší roh kopie.
:::

## Vložení z klávesnice

Během vkládání panel {{ui:Properties}} ukazuje, co je ve schránce, a dva formuláře:

- {{ui:Paste by offset (mm, from the original)}}: zadejte x, y a z a zvolte {{ui:Paste at this offset}}. Začíná s odsazením z [nastavení DetailCraft](topic:settings).
- {{ui:Paste onto a grid intersection}}: vyberte osu s písmenem, osu s číslem a úroveň a zvolte {{ui:Paste here}}. Základní bod se umístí tam.

## Vložení na stejné místo

{{ui:Paste in place}} ({{key:Mod+Shift+V}}) umístí kopii přesně do souřadnic, ze kterých byla zkopírována. Použijte ji po {{ui:Cut}} nebo k přenesení dílů z jiného modelu na stejné místo. Pokud originály ještě existují, kopie leží na nich a stavový řádek vás upozorní: přesuňte kopie za jejich {{ui:Start}} a {{ui:End}} v {{ui:Properties}}, nebo použijte zpět.

## Duplikování

{{ui:Duplicate}} ({{key:Mod+D}}) zkopíruje výběr a ihned jej vloží, posunutý o odsazení z [nastavení DetailCraft](topic:settings) (zpočátku 6000 mm podél osy x). Nemění, co je ve schránce. Kopie jsou potom vybrány, takže stisknutí {{key:Mod+D}} znovu vytvoří další kopii z nich.

## Vyjmutí a smazání

- {{ui:Cut}} ({{key:Mod+X}}) zkopíruje výběr a potom jej smaže. Vložte jej tam, kam patří.
- {{ui:Delete}} ({{key:Delete}} nebo {{key:Backspace}}) smaže výběr. Smazáním prvku se smažou i jeho spoje.

## Značky po vložení

Označení dílů a montážních celků se nikdy neukládají; DetailCraft je po každé změně znovu přečísluje z modelu ([Jak se značky přidělují](topic:mark-rules)). Proto:

- Kopie, která je stejným kusem jako originál (stejný profil, jakost, délka řezu, otvory a výřezy), sdílí značku originálu a počet v {{ui:Part marks}} a v kusovníku se zvýší.
- Kopie, která je jiná, dostane vlastní značku. Nosník vložený bez svých čelních desek se například neřeže zpět, takže je jiným kusem. Značky se přečíslují v celém modelu, takže se mohou změnit i čísla jiných dílů.

Každý vložený prvek, otvor, výřez, spoj a základová patka dostane nové id, takže nic v modelu není nikdy sdíleno mezi kopií a originálem.

## Když je schránka odmítnuta

Obsah schránky se kontroluje stejně pečlivě jako model, který otevíráte: cokoli, co není platným dílem DetailCraft, se vyřadí a stavový řádek řekne co. Schránka naplněná novějším DetailCraftem nebo něčím jiným je odmítnuta se zprávou a nic se nevloží. Pokud soukromé okno nemůže uchovat kopii v úložišti prohlížeče, kopie funguje dál v této kartě.
