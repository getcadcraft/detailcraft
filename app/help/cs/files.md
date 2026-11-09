---
title: Otevírání, ukládání a export souborů
summary: Soubor modelu DetailCraftu, každý export, který zapisuje, kam soubory jdou a v čem se liší prohlížeče a připojení.
keywords: otevřít, uložit, export, stáhnout, soubor, json, ifc, nc1, dstv, csv, pdf, zip, formáty, import
from: 6fbc8e8f
---

DetailCraft má vlastní soubor, model, a pět exportů. Každé uložení i každý export je stažení. Nic se nenahrává a nic se nedrží na serveru.

## Soubor modelu

Model DetailCraftu se ukládá jako `<name>.detailcraft.json`, kde `<name>` je název modelu v panelu {{ui:Model}}. Obsahuje osy, úrovně, pruty (s jejich otvory a výřezy), spoje a jejich nastavení, patky a vaše vlastní průřezy.

Díly, označení, šrouby, svary a pruty výztuže se neukládají: DetailCraft je při každém otevření znovu spočítá z modelu. Proto je soubor modelu malý.

### Uložení

1. Napište název do pole {{ui:Název}} nahoře v panelu {{ui:Model}}.
2. Zvolte {{ui:Uložit}} ve skupině {{ui:Soubor}}, nebo stiskněte {{key:Mod+S}}.
3. Prohlížeč stáhne `<name>.detailcraft.json`. Stavový řádek hlásí „Uloženo … (staženo)“ a tečka na začátku názvu karty prohlížeče zmizí.

Každé uložení je nové stažení. Prohlížeč nepřepisuje soubor, který jste otevřeli; podle nastavení k názvu přidá číslo, například `Rám (1).detailcraft.json`, nebo se zeptá, kam uložit. Vlastní verze si uchovejte přejmenováním stažených souborů.

:::chromium
Chrome a Edge ukládají do složky Stažené, pokud v nastavení stahování prohlížeče není zapnuta volba **Zeptat se, kam uložit každý soubor před stažením**. Zapněte ji, pokud chcete pokaždé vybrat složku a název souboru.
:::

:::firefox
Firefox ukládá do složky Stažené, nebo se zeptá pokaždé, pokud je v jeho nastavení zapnuta volba **Vždy se zeptat, kam ukládat soubory**.
:::

:::safari
Safari ukládá do složky Stažené. Složku změníte tak, že otevřete **Safari, Nastavení, Obecné, Umístění stahování souborů**.
:::

### Otevření

1. Zvolte {{ui:Otevřít}} ve skupině {{ui:Soubor}}, nebo stiskněte {{key:Mod+O}}.
2. Vyberte soubor `.detailcraft.json`.

Nebo přetáhněte soubor z {{pick:mac=Finder|windows=Průzkumník souborů|linux=váš správce souborů}} a pusťte ho na pohled. Zatímco táhnete, pohled hlásí „Přetažením modelu DetailCraft sem jej otevřete“.

Pokud má otevřený model neuložené změny, DetailCraft se nejdřív zeptá: {{ui:Zrušit}}, {{ui:Zahodit změny}} nebo {{ui:Nejdřív uložit}}.

DetailCraft zkontroluje každé pole souboru, než ho použije. Co nelze použít, se vynechá a stavový řádek řekne co, například „2 pruty nebyly platné a byly vynechány.“ Model uložený novější verzí DetailCraftu se odmítne se zprávou, místo aby se otevřel napůl správně.

### Co se otevře

Vlastní soubory modelů (`.json`, až 50 MB) a soubory IFC (`.ifc`, IFC2X3 nebo IFC4, až 200 MB). Soubor IFC, který otevřete nebo přinesete tlačítkem {{ui:Import IFC}}, se stane novým modelem svých nosníků, sloupů, prutů, plechů, os a úrovní, s otvory a výřezy vytvořenými v nich a se svými šrouby jako volnými šrouby; hlášení uvádí, co bylo vynecháno. Viz [Export IFC](topic:ifc-export#import). Zatím neotevírá DWG, DXF ani model žádného jiného výkresového programu; pokus zobrazí „DetailCraft otevírá vlastní modely (.detailcraft.json) a soubory IFC (.ifc).“

## Ztracená práce, poslední soubory, desktopová aplikace

- Dokud má model neuložené změny, DetailCraft drží jeho kopii v tomto prohlížeči. Pokud se karta nebo prohlížeč zavře dřív, než uložíte, při příštím otevření DetailCraftu se zeptá **Obnovit práci?**: obnovit kopii, nebo ji zahodit. Viz [Obnovit práci](common:recover).
- Modely, které jste nedávno otevřeli, jsou uvedeny na úvodní obrazovce, pokud je prohlížeč DetailCraftu znovu povolí otevřít; kliknutím na jeden ho znovu otevřete.
- V desktopové aplikaci {{ui:Uložit}} zapíše model zpět do souboru, který jste otevřeli (v prohlížeči stáhne kopii), a dvojklik na model DetailCraftu nebo soubor IFC ho otevře v DetailCraftu.

## Exporty

Všechny exporty používají název modelu. Vyberte je ve skupině {{ui:Výstup}}.

| Tlačítko | Soubor | Co je v něm |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: úrovně, osy, každý ocelový díl jako profilová extruze s otvory a výřezy, sestavy, šrouby a kotevní tyče, patky a každý prut. Viz [Export IFC](topic:ifc-export). |
| {{ui:Soubory NC}} | `<name> NC.zip` | Jeden soubor DSTV `.nc1` na každé označení dílu. Viz [Odeslání souborů NC do dílny](topic:nc-export). |
| {{ui:Kusovník}} | `<name> BOM.csv` | Tři tabulky v jednom souboru: díly, sestavy a šrouby a kotevní tyče. Viz [Označení a kusovník](topic:marks-and-bom). |
| {{ui:Ohýbání}} | `<name> bending schedule.csv` | Každá značka výztuže v patkách. Viz [Patky a výztuž](topic:footings-and-rebar). |
| {{ui:Dílenský výkres}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` obsahuje list na každé označení dílu; {{ui:Stáhnout PDF}} stáhne ten zobrazený (A3, pokud jste nezvolili jinou velikost). Viz [Tvorba dílenských výkresů](topic:shop-drawings). |
| {{ui:Výkresy}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` nebo `.dxf`, několik v `<name> drawings DWG.zip` (nebo `DXF.zip`) | Půdorysy, pohledy a sestavové výkresy na velikosti listu, kterou jste zvolili; DWG a DXF v plné velikosti, 1 jednotka = 1 mm na papíře. Viz [Výkresy celkového uspořádání a sestav](topic:drawings). |

### Poznámky k souborům CSV

- Začínají značkou pořadí bajtů, aby tabulkové programy správně četly znaky s diakritikou.
- Buňka, která začíná `=`, `+`, `-` nebo `@` (a není to prosté číslo), dostane úvodní apostrof, aby ji tabulkový program nikdy nespustil jako vzorec.
- Délky jsou v milimetrech a hmotnosti v kilogramech.

### Poznámky k PDF

Text v PDF používá standardní písmo Helvetica. Znaky, které nemá (mimo západoevropskou sadu), se vytisknou jako „?“ a stavový řádek řekne, kolik jich bylo.

## Jednotky

DetailCraft pracuje všude v milimetrech: osy, úrovně, souřadnice, profily, otvory a každý export. Názvy profilů zůstávají ve své zveřejněné podobě (W12x50 je americké označení, i když jeho rozměry jsou ukázány v mm). Zadávání v palcích zatím není k dispozici.

## Online a offline

Otevírání, ukládání a exporty probíhají ve vašem prohlížeči, takže fungují stejně s připojením i bez něj, jakmile se DetailCraft načte.

Chcete-li DetailCraft později používat bez připojení, zvolte, když jste online, v liště aplikace {{ui:Uložit pro offline}}. Tlačítko počítá nahoru („Ukládání 3 z 20“) a pak ukazuje {{ui:Připraveno offline}}. Uložená kopie zahrnuje knihovnu 3D grafiky (asi 2.6 MB) a tuto nápovědu, takže po uložení fungují 3D pohled, všechny exporty i nápověda offline. Podrobnosti a to, co ještě potřebuje připojení: [Práce offline](common:offline).

:::offline
Jste offline. Pokud lišta aplikace ukazuje {{ui:Připraveno offline}}, otevírání, ukládání a exporty fungují obvyklým způsobem. Pokud ne, nechte tuto kartu otevřenou, neobnovujte ji, dokud nebudete zase online, a model uložte hned.
:::

Ukládání do cloudu zatím není k dispozici a desktopové verze zatím nejsou. Zálohujte soubory `.detailcraft.json` stejně jako jiné pracovní soubory. Více v [Kde jsou vaše soubory](common:your-files).

## Neuložená práce

DetailCraft drží model jen v otevřené kartě. Pokud kartu s neuloženými změnami zavřete nebo znovu načtete, prohlížeč se zeptá, zda chcete stránku opustit; jeho znění je vlastní prohlížeči. Ukládejte často pomocí {{key:Mod+S}}.
