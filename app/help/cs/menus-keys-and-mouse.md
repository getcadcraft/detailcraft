---
title: Nabídky, klávesy a myš
summary: Vyberte styl nabídek, který odpovídá tomu, jak už pracujete, přiřaďte libovolnému příkazu vlastní klávesu, přesuňte příkazy mezi kartami pásu a nastavte, co dělá kolečko a tlačítka myši.
keywords: styl nabídek, nabídky, pás karet, panel nástrojů, řádek příkazů, klávesové zkratky, zkratky, klávesy, přizpůsobit, přemapovat, přepřiřadit, myš, kolečko, obrátit, směr zoomu, prostřední tlačítko, pravé tlačítko, posun, obíhání, export, import, přepínání, známý, klasický kreslicí, ocelářský pás
from: 4132c6e5
---

Příkazy DetailCraftu jsou stejné bez ohledu na to, jak se k nim dostanete. **Styl nabídek** určuje jen to, kde jsou na obrazovce, jak se tam jmenují a které klávesy je spouštějí. Zvolte jej v {{ui:Nastavení}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Nabídky, klávesy a myš}}; změna je okamžitá a tento prohlížeč si ji pamatuje.

## Tři styly

| Styl | Co dostanete |
|---|---|
| {{ui:DetailCraft}} | Vlastní panel nástrojů DetailCraftu ({{ui:Soubor}}, Umístit, {{ui:Spojit}}, {{ui:Upravit}}, {{ui:Výstup}}) a jeho jednopísmenné klávesy: {{key:V}} výběr, {{key:B}} nosník, {{key:C}} sloup, {{key:R}} ztužidlo, {{key:P}} plech, {{key:F}} patka, {{key:S}} schodiště. Výchozí. |
| {{ui:Klasický kreslicí}} | Pro lidi, kteří píší příkazy: malý pás ({{ui:Domů}}, {{ui:Pohled}}, {{ui:Výstup}}) a řádek příkazů. Napište BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, zpět (U), ZOOM, PLAN, 3D, DRAWINGS, NC nebo HELP a stiskněte {{key:Enter}}; {{key:Enter}} na prázdném řádku opakuje poslední příkaz, {{key:Esc}} jej vymaže. Začněte psát kdekoli a písmena se pošlou na řádek příkazů. Prostřední tlačítko posouvá; ve 3D {{key:Shift}} a prostřední tlačítko obíhají. |
| {{ui:Ocelářský pás}} | Karty tak, jak je uspořádají programy pro detailing oceli: {{ui:Modelování}} (prvky, beton, schodiště), {{ui:Detailing}} (spoje), {{ui:Upravit}}, {{ui:Výkresy}} (výkresy a sestavy), {{ui:Výroba}} (soubory NC, IFC) a {{ui:Pohled}}, s nabídkou {{ui:Soubor}} a rychlými tlačítky vpravo. Jednopísmenné klávesy zůstávají. Prostřední tlačítko posouvá; ve 3D levé tlačítko obíhá. |

Každý styl zachovává {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} a {{key:Mod+A}}. Pásy také nesou {{ui:3D}}, {{ui:Půdorys}}, {{ui:Pohled}} a {{ui:Přizpůsobit}} z lišty pohledu.

:::tip
Klávesa, která patří do vlastního rozložení DetailCraftu, ale váš styl ji přiřadil jinému příkazu, nic neudělá a stavový řádek uvede, kam její příkaz přešel („V Mém ocelářském pásu je Sloup Ctrl+Alt+C“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} a šipky si vždy zachovají svůj význam a zatímco je prvek napůl umístěn nebo kopie následuje ukazatel, písmena patří DetailCraftu.
:::

## Přizpůsobte si to

1. Vyberte styl nejblíže tomu, co chcete, a klikněte na {{ui:Přizpůsobit…}}.
2. Na {{ui:Klávesy a nabídky}} najděte příkaz (pomůže vyhledávací pole). Klikněte na {{ui:Přidat klávesu}} a stiskněte klávesu, nebo dvě klávesy za sebou pro dvoupísmenou klávesu. Kliknutím na klávesu ji odeberete.
3. U pásu {{ui:Kde je}} přesune příkaz na jinou kartu a panel, do nabídky {{ui:Soubor}}, nebo na {{ui:Jen klávesy}}.
4. Na {{ui:Myš}} nastavte kolečko, tlačítka, která posouvají půdorysy a pohledy, a co dělá každé tlačítko v 3D pohledu.
5. Pojmenujte jej a klikněte na {{ui:Uložit}}.

Uložení vestavěného stylu vytvoří vaši vlastní kopii („Můj ocelářský pás“); vestavěný se nikdy nemění. Klávesa přiřazená dvěma příkazům se zobrazí červeně a před uložením ji je třeba opravit.

## Myš

- **Kolečko myši**: {{ui:Posun kolečkem nahoru přibližuje}} (výchozí), nebo {{ui:Posun kolečkem nahoru oddaluje}}, a jak rychle. Stažení nebo roztažení prstů na touchpadu vždy zoomuje podle pohybu prstů.
- **Posun půdorysů a pohledů pomocí**: prostředního tlačítka, pravého tlačítka, nebo obou. S nástrojem Vybrat levé tlačítko vždy kreslí výběrové okno.
- **Tažení v 3D pohledu**: {{ui:Vlastní pro každý pohled}} ponechá tlačítka DetailCraftu (levé obíhá, prostřední zoomuje, pravé posouvá). Nebo nastavte každé tlačítko na obíhání, posun, zoom nebo nic; {{key:Shift}} s tlačítkem, které obíhá nebo posouvá, obě funkce prohodí.

## Vezměte si to s sebou

{{ui:Export}} uloží používaný styl jako malý soubor `.ccinput.json`; {{ui:Import…}} jej přidá, třeba z jiného počítače nebo od kolegy. Importovaný soubor může ukazovat jen na příkazy DetailCraftu: cokoli jiného v něm se vynechá a započítá se ve stavovém řádku. {{ui:Smazat tento styl}} odstraní některý z vašich vlastních.

:::note
Tato nastavení zůstávají v tomto prohlížeči. {{ui:Používat tento styl ve všech aplikacích}} pod kartami stylů způsobí, že se každá aplikace otevře ve svém odpovídajícím stylu (vlastní panel nástrojů, pás nebo Klasický kreslicí), se změnami, které jste v každé provedli. DetailCraft nemá styl s lištou nabídek: když je pro všechny aplikace zvolena lišta nabídek jiné aplikace, DetailCraft si ponechá vlastní panel nástrojů.
:::

Související: [Klávesy a akce myší](topic:keyboard) · [Nastavení DetailCraftu](topic:settings) · [Přechod z jiného softwaru pro detailing](topic:coming-from)
