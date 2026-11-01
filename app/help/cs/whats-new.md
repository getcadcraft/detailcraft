---
title: Novinky v 0.7
summary: Návrhové kontroly ocelových I-profilů s kombinacemi zatížení podle ASCE 7 nebo EN 1990 a kontrolami prutů podle AISC 360 nebo EN 1993-1-1, export USD ocelového modelu, nástroj asistenta pro USD, ocelářský pás s velkými a malými tlačítky, panely, které se uklidí, a dialogy, které se přesouvají.
keywords: novinky, co je nového, poznámky k vydání, seznam změn, změny, 0.7, verze, nové funkce, návrhové kontroly, návrh oceli, využití, kombinace zatížení, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurokód, národní příloha, užitné zatížení střechy, mezní průhyb, usd, usda, usdc, usdz, openusd, asistent, mcp, ocelářský pás, pás karet, rozdělené tlačítko, jednotky, kompaktní, panely, dialogy, portugalština
from: 17d1e0bb
---

Zde je přehled změn v DetailCraftu 0.7 oproti 0.6. Analýza rámu z 0.6 má nyní druhý krok: kontrolu ocelových prutů podle návrhové normy.

## Nové

### Pokosové spoje (0.7.1)

- **Dva I-profily setkávající se pod úhlem**, například rámový roh nebo hřeben: vyberte oba, zvolte {{ui:Pokos}} v nabídce {{ui:Více}} skupiny {{ui:Spojit}} a oba konce se seříznou v rovině, která půlí úhel. Čelní desky sešroubované k sobě a výztuhy stojiny jsou zaškrtávací pole v novém dialogu Pokos, jehož číslovaná pole odpovídají výkresu Vašeho spoje vytvářenému při psaní. Pokos sleduje pruty, když se pohybují, a přenáší se do výkresů, souborů NC (šikmé řezy), IFC a kusovníku. Viz [Pokosové spoje](topic:mitres).

### Návrhové kontroly

- **Kombinace zatížení podle normy.** Na kartě {{ui:Analýza}} má nový blok {{ui:Kontroly návrhu}} položku {{ui:Návrhová norma}}: ASCE 7 + AISC 360 (USA, LRFD) nebo EN 1990 + EN 1993-1-1 (Eurokód). Zadejte každému zatěžovacímu stavu jeho druh (stálé, užitné, nově užitné zatížení střechy, sníh, vítr, seismické), stiskněte {{ui:Vytvořit kombinace}} a DetailCraft zapíše kombinace mezního stavu únosnosti a použitelnosti normy pro Vaše stavy. Kombinace, které jste zadali sami, zůstanou. Viz [Vytvoření kombinací](topic:design-checks#make-the-combinations).
- **Hodnoty národní přílohy.** U Eurokódu součinitele začínají u doporučených hodnot; {{ui:Hodnoty národní přílohy}} umožňuje zadat hodnoty Vaší země a ukládají se v modelu. Viz [Vytvoření kombinací](topic:design-checks#make-the-combinations).
- **Kontrola prutů.** {{ui:Zkontrolovat prvky}} zkontroluje každý ocelový I-profil na tah, tlak s vybočením, ohyb s klopením, smyk, ohyb s osovou silou a průhyb proti {{ui:Mezní průhyb}}, který nastavíte. Tabulka ukazuje využití každého prutu, rozhodující kontrolu a její kombinaci a pruty se na modelu obarví (modrá, zelená, okrová, červená, šedá pro nekontrolováno). Viz [Kontrola prutů](topic:design-checks#check-the-members).
- **Ve zprávě.** {{ui:Zpráva (PDF)}} a {{ui:Zpráva (CSV)}} přidávají vydání norem, nastavení, využití podle prutu a každý použitý článek. Viz [Zpráva](topic:design-checks#the-report).
- **Pomůcka, dokud ji statik neprověří.** Používá jen síly prvního řádu. Trubky, úhelníky, profily U, svařované profily a štíhlé části nebo části třídy 4 uvádějí „nekontrolováno“ s důvodem; kroucení, spoje a beton se nekontrolují. Viz [Co se nekontroluje](topic:design-checks#what-is-not-checked).

### USD

- **Export ocelového modelu jako USD.** {{ui:USD}} ve skupině {{ui:Výstup}} zapíše model jako {{ui:Text (.usda)}}, {{ui:Binární (.usdc)}} nebo {{ui:Balíček (.usdz)}} pro vykreslovací programy a sestavování scén: každá sestava obsahuje své díly, každý díl je jeho průřez vedený po délce s vyříznutými výřezy a každý nese své označení dílu, profil, jakost, délku a hmotnost. Otvory pro šrouby, šrouby, svary a patky v sítích USD nejsou. Viz [Export ocelového modelu jako USD](topic:usd).

### Asistenti s umělou inteligencí

- **USD pro asistenty.** Váš vlastní asistent, připojený přes CadCraft Studio, může exportovat model jako USD (`usd_export`) a ve Studiu jej zapsat do složky, kterou jste povolili. Viz [O co může asistent žádat](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Změněno

- **Ocelářský pás** má velká a malá tlačítka: velký {{ui:Nosník}} vedle malých {{ui:Sloup}}, {{ui:Ztužidlo}} a {{ui:Plech}} v {{ui:Modelování}} › {{ui:Pruty}}; velké {{ui:Čelní desky}} v {{ui:Detailování}} › {{ui:Spoje}}, s {{ui:Spojka}} a {{ui:Styčník}} sdílejícími jedno rozdělené tlačítko; velké {{ui:Vložit}} v {{ui:Úpravy}} › {{ui:Schránka}}, s {{ui:Vložit na stejné místo}} a {{ui:Duplikovat}} za šipkou skupiny. {{ui:Výroba}} › {{ui:Výměna}} má {{ui:Exportovat USD}} vedle IFC. Ostatní styly nabídek vypadají jako dříve. Viz [Nabídky, klávesy a myš](topic:menus-keys-and-mouse#the-three-styles).
- Téma [Analýza rámu](topic:frame-analysis) nyní odkazuje na návrhové kontroly a jeho kombinace lze vytvořit podle normy.

## V každé aplikaci

- **Jednotky.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jednotky}} má po jednom seznamu pro délku, plochu, objem, úhel a sklon s přesnými velikostmi podle definic jednotek (americká zeměměřičská stopa je samostatná jednotka). Vypněte jednotky, které nikdy nepoužíváte, a z seznamů jednotek zmizí; označte jednu hvězdičkou a nová práce v ní začne. Soubor si vždy ponechává vlastní jednotku. Vlastní pole DetailCraftu seznamy zatím nesledují: jeho délky se stále zadávají v milimetrech. Viz [Jednotky, zadávané hodnoty a seznamy jednotek](common:unit-lists).
- **Hustší rozvržení a panely, které se uklidí.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Hustota rozložení}} › {{ui:Kompaktní}} vměstná na obrazovku víc (dotykové obrazovky a telefony si ponechávají velká tlačítka). Každý boční panel má štíhlou záhlavní lištu: přetažením panel ukotvíte nebo necháte plovoucí, puštěním na lištu jiného panelu je sloučíte do jednoho rámu jako karty, připnutím jej necháte zasunout k okraji, nebo jej skryjete a vrátíte z okraje. Viz [Uspořádání panelů](common:arrange-panels#make-the-layout-denser).
- **Dialogy se přesouvají.** Přetáhněte dialog za záhlaví z cesty kresbě; vrátí se tam, kde jste jej nechali. Dvojitým kliknutím na záhlaví jej znovu vycentrujete. Viz [Přesunutí dialogu](common:arrange-panels#move-a-dialog).
- **Návody pro asistenty s umělou inteligencí.** Deset ukázkových požadavků pro Vašeho vlastního asistenta (uklidit výkres, vykreslit sadu, zkontrolovat výkresy, ptát se modelu, sečíst výkaz výměr, vyzkoušet variantu dílu…), každý s nástroji, které volá, a oprávněními, která potřebuje, a každý přehraný našimi testy. Aplikace neobsahují žádnou AI. Viz [Návody pro asistenty s umělou inteligencí](common:assistants-recipes).
- **Jazyky.** **Português (Portugal)** je nově v {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jazyk}}. Ten, **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia** mají nyní každé slovo aplikací, jako koncepty dosud nezkontrolované rodilým mluvčím. Témata nápovědy jsou v angličtině.
- **CadCraft Studio** říká, proč kontrola aktualizací selhala (pro Váš systém zatím není soubor, chybí síť, chybný podpis), místo pouhého „Hotovo“, a přestane vracet kartu Novinky, kterou jste zavřeli, dokud nevyjde novější vydání.

## V této verzi ještě není

- **0.7 není podepsáno kódem.** Podepisování a balíček Microsoft Store se přesunuly do 0.8, protože ověření certifikátu zatím neprošlo. Zkontrolujte SHA-256 vedle každého souboru na getcadcraft.com/download. Pokud ve Windows instalátor zastaví SmartScreen, zvolte {{ui:Další informace}} a potom {{ui:Přesto spustit}}. Na Macu poprvé klikněte pravým tlačítkem na CadCraft Studio a zvolte {{ui:Otevřít}}. CadCraft Studio zatím není v žádném obchodě s aplikacemi a verze pro iPad ani iPhone zatím neexistuje.
- Seznamy úhlu a sklonu v {{ui:Jednotky}} se ukládají, ale zatím je nečte žádné pole.
- **Návrhové kontroly zatím neprověřil statik.** Naše testy je porovnávají s tištěnými hodnotami z tabulek a vzorci počítanými ručně, zatím ne s řešenými příklady z návrhových příruček. Do prověření jsou pomůckou: důležité pruty zkontrolujte ručně.
- Návrhové kontroly používají síly prvního řádu (žádné účinky druhého řádu) a kontrolují jen I-profily. Není hotovo: trubky, úhelníky, profily U, svařované profily, štíhlé části (AISC) nebo části třídy 4 (Eurokód) v ohybu, kroucení, boulení smykem spolu s ohybem, spoje, únava, požár, seismické detailování a beton. Štíhlá část v tlaku vynechá kontroly tlaku a prut uvádí „vyhovuje, částečně zkontrolováno“.
- Analýza rámu je stále prvního řádu a lineární a statik ji zatím nevyzkoušel na skutečné zakázce.
- Otvory pro šrouby, šrouby, svary a patky v exportu USD nejsou.

Vše ostatní je v tématu [Co ještě není hotovo](topic:not-built-yet).
