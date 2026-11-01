---
title: Otevření, uložení a export souborů
summary: Soubor modelu DetailCraftu, každý export, který zapisuje, kam soubory putují a co se liší podle prohlížeče a připojení.
keywords: otevřít, uložit, export, stáhnout, soubor, json, ifc, nc1, dstv, csv, pdf, zip, formáty, import
from: bd715ea3
---

DetailCraft má jeden vlastní soubor, model, a pět exportů. Každé uložení a každý export je stažení. Nic se nenahrává a nic se neuchovává na serveru.

## Soubor modelu

Model DetailCraftu se ukládá jako `<název>.detailcraft.json`, kde `<název>` je název modelu v panelu {{ui:Model}}. Obsahuje osy, úrovně, pruty (s jejich otvory a výřezy), spoje a jejich nastavení, patky a Vaše vlastní průřezy.

Díly, označení, šrouby, svary a pruty výztuže se neukládají: DetailCraft je při každém otevření vypočítá z modelu znovu. Proto je soubor modelu malý.

### Uložení

1. Napište název do pole {{ui:Název}} nahoře v panelu {{ui:Model}}.
2. Zvolte {{ui:Uložit}} ve skupině {{ui:Soubor}}, nebo stiskněte {{key:Mod+S}}.
3. Prohlížeč stáhne `<název>.detailcraft.json`. Stavový řádek říká „Uloženo … (staženo)“ a tečka na začátku názvu karty prohlížeče zmizí.

Každé uložení je nové stažení. Prohlížeč soubor, který jste otevřeli, nepřepisuje; podle svého nastavení přidá k názvu číslo, například `Frame (1).detailcraft.json`, nebo se zeptá, kam uložit. Vlastní verze si uchovejte přejmenováním stažených souborů.

:::chromium
Chrome a Edge ukládají do složky Stažené soubory, pokud není v nastavení stahování prohlížeče zapnuto **Před stažením se vždy zeptat, kam soubor uložit**. Zapněte to, chcete-li pokaždé vybírat složku a název souboru.
:::

:::firefox
Firefox ukládá do složky Stažené soubory, nebo se pokaždé zeptá, je-li v jeho nastavení zapnuto **Vždy se zeptat, kam ukládat soubory**.
:::

:::safari
Safari ukládá do složky Stažené. Chcete-li složku změnit, otevřete **Safari, Nastavení, Obecné, Umístění stahovaných souborů**.
:::

### Otevření

1. Zvolte {{ui:Otevřít}} ve skupině {{ui:Soubor}}, nebo stiskněte {{key:Mod+O}}.
2. Vyberte soubor `.detailcraft.json`.

Nebo soubor přetáhněte z {{pick:mac=Finderu|windows=Průzkumníku souborů|linux=správce souborů}} a pusťte na pohled. Během přetahování pohled říká „Pusťte model DetailCraftu k otevření“.

Má-li otevřený model neuložené změny, DetailCraft se nejdřív zeptá: {{ui:Zrušit}}, {{ui:Zahodit změny}} nebo {{ui:Nejdřív uložit}}.

DetailCraft před použitím zkontroluje každé pole souboru. Cokoli, co nelze použít, se vynechá a stavový řádek řekne co, například „2 pruty nebyly platné a byly vynechány.“ Model uložený novějším DetailCraftem se odmítne se zprávou místo toho, aby se otevřel napůl správně.

### Co otevírá

Vlastní soubory modelů (`.json`, do 50 MB) a soubory IFC (`.ifc`, IFC2X3 nebo IFC4, do 200 MB). Soubor IFC, otevřený nebo přinesený pomocí {{ui:Import IFC}}, se stane novým modelem svých nosníků, sloupů, prutů, plechů, os a úrovní, s otvory a výřezy v nich a šrouby jako volnými šrouby; zpráva uvádí, co bylo vynecháno. Viz [Export IFC](topic:ifc-export#import). Zatím neotevírá DWG, DXF ani model jiného detailovacího programu; pokus zobrazí „DetailCraft otevírá vlastní modely (.detailcraft.json) a soubory IFC (.ifc).“

## Ztracená práce, poslední soubory, aplikace pro počítač

- Dokud má model změny, které jste neuložili, DetailCraft uchovává kopii v tomto prohlížeči. Pokud se karta nebo prohlížeč zastaví před uložením, při dalším otevření DetailCraftu se zeptá **Obnovit Vaši práci?**: obnovit kopii, nebo ji nechat být. Viz [Obnovení práce](common:recover).
- Nedávno otevřené modely se uvádějí na úvodní obrazovce, pokud prohlížeč dovolí DetailCraftu je znovu otevřít; kliknutím na jeden jej otevřete znovu.
- V aplikaci pro počítač {{ui:Uložit}} zapíše model zpět do souboru, který jste otevřeli (v prohlížeči stáhne kopii), a dvojité kliknutí na model DetailCraftu nebo soubor IFC jej otevře v DetailCraftu.

## Exporty

Všechny exporty používají název modelu. Zvolte je ve skupině {{ui:Výstup}}.

| Tlačítko | Soubor | Co obsahuje |
|---|---|---|
| {{ui:IFC}} | `<název>.ifc` | IFC4: podlaží, osy, každý ocelový díl jako profilové vytažení s jeho otvory a výřezy, sestavy, šrouby a kotevní tyče, patky a každý prut. Viz [Export IFC](topic:ifc-export). |
| {{ui:Soubory NC}} | `<název> NC.zip` | Jeden soubor DSTV `.nc1` na označení dílu. Viz [Odeslání souborů NC do dílny](topic:nc-export). |
| {{ui:Kusovník}} | `<název> BOM.csv` | Tři tabulky v jednom souboru: díly, sestavy a šrouby a kotevní tyče. Viz [Označení a kusovník](topic:marks-and-bom). |
| {{ui:Ohýbání}} | `<název> bending schedule.csv` | Každé označení prutu v patkách. Viz [Patky a výztuž](topic:footings-and-rebar). |
| {{ui:Dílenský výkres}} | `<název> <označení>.pdf` | Jeden list (A3, pokud jste nezvolili jinou velikost) pro vybraný díl (I-profily a plechy). Viz [Vytvoření dílenského výkresu](topic:shop-drawings). |
| {{ui:Výkresy}} | `<název> drawings.pdf`, `<název> <list>.pdf`; `<název> <list>.dwg` nebo `.dxf`, několik v `<název> drawings DWG.zip` (nebo `DXF.zip`) | Půdorysy, pohledy a výkresy sestav na velikosti listu, kterou jste zvolili; DWG a DXF v plné velikosti, 1 jednotka = 1 mm na papíru. Viz [Výkresy celkového uspořádání a sestav](topic:drawings). |

### Poznámky k souborům CSV

- Začínají znakem pořadí bajtů (BOM), aby tabulkové programy správně četly znaky s diakritikou.
- Buňka začínající `=`, `+`, `-` nebo `@` (a nejde o prosté číslo) dostane na začátek apostrof, aby ji tabulkový program nikdy nespustil jako vzorec.
- Délky jsou v milimetrech a hmotnosti v kilogramech.

### Poznámky k PDF

Text v PDF používá standardní písmo Helvetica. Znaky, které nemá (mimo západoevropskou sadu), se vytisknou jako „?“ a stavový řádek říká kolik.

## Jednotky

DetailCraft pracuje všude v milimetrech: osy, úrovně, souřadnice, průřezy, otvory i každý export. Názvy profilů si zachovávají publikovanou podobu (W12x50 je americké označení, i když jeho rozměry jsou uvedeny v mm). Imperiální zadávání zatím není.

## Online a offline

Otevírání, ukládání i export probíhají ve Vašem prohlížeči, takže po načtení DetailCraftu fungují stejně s připojením i bez něj.

Chcete-li DetailCraft později používat bez připojení, zvolte, dokud jste online, {{ui:Uložit pro offline}} v liště aplikace. Tlačítko počítá nahoru („Ukládání 3 z 20“) a poté zobrazí {{ui:Připraveno offline}}. Uložená kopie obsahuje knihovnu 3D grafiky (asi 2,6 MB) a tuto nápovědu, takže po uložení fungují offline 3D pohled, každý export i nápověda. Podrobnosti a co stále vyžaduje připojení: [Práce offline](common:offline).

:::offline
Jste offline. Pokud lišta aplikace zobrazuje {{ui:Připraveno offline}}, otevírání, ukládání a export fungují jako obvykle. Pokud ne, nechte tuto kartu otevřenou, nenačítejte ji znovu, dokud nebudete online, a model teď uložte.
:::

Ukládání do cloudu zatím není k dispozici a verze pro počítač také ne. Soubory `.detailcraft.json` zálohujte jako jakýkoli jiný pracovní soubor. Více v tématu [Kam Vaše soubory putují](common:your-files).

## Neuložená práce

DetailCraft uchovává model jen v otevřené kartě. Pokud kartu zavřete nebo znovu načtete s neuloženými změnami, prohlížeč se zeptá, zda stránku opustit; jeho znění je vlastní prohlížeče. Ukládejte často pomocí {{key:Mod+S}}.
