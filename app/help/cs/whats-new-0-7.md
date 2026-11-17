---
title: Co je nového ve verzi 0.7 (dříve)
summary: Kontroly návrhu ocelových profilů I s kombinacemi zatížení podle ASCE 7 nebo EN 1990 a kontroly prutů podle AISC 360 nebo EN 1993-1-1, export USD ocelového modelu, nástroj asistenta pro USD, ocelová karta s velkými a malými tlačítky, panely, které se dají schovat, a dialogy, které se dají přesouvat.
keywords: co je nového 0.7, dřívější vydání, poznámky k vydání, changelog, změny, 0.7, verze, nové funkce, kontroly návrhu, navrhování oceli, vytížení, kombinace zatížení, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurokód, národní příloha, zatížení sněhem na střeše, mezní průhyb, usd, usda, usdc, usdz, openusd, asistent, mcp, ocelová karta, karta, rozdělené tlačítko, jednotky, kompaktní, panely, dialogy, portugalština
from: 54a7a8f0
---

Toto se změnilo ve verzi DetailCraft 0.7 oproti verzi 0.6. Analýza rámu z verze 0.6 má nyní druhý krok: kontrolu ocelových prutů podle návrhové normy.

## Nové

### Pokosové spoje (0.7.1)

- **Dva profily I, které se stýkají pod úhlem**, například rámový roh nebo hřeben: vyberte oba, zvolte {{ui:Mitre}} v nabídce {{ui:More}} skupiny {{ui:Connect}} a oba konce se seřežou v rovině, která půlí úhel. Čelní desky spojené šrouby a výztuhy stojiny jsou zaškrtávací pole v novém dialogu Pokos. Číslovaná pole odpovídají výkresu vašeho spoje, který se vytváří při psaní. Pokos se po přesunu prutů řídí jimi a přenáší se do výkresů, souborů NC (šikmé řezy), IFC a kusovníku. Viz [Pokosové spoje](topic:mitres).

### Kontroly návrhu

- **Kombinace zatížení podle normy.** Na kartě {{ui:Analýza}} má nový blok {{ui:Kontroly návrhu}} položku {{ui:Návrhová norma}}: ASCE 7 + AISC 360 (USA, LRFD) nebo EN 1990 + EN 1993-1-1 (Eurokód). U každého zatěžovacího případu uveďte jeho druh (stálé, užitné, nové střešní užitné, sníh, vítr, seizmické), stiskněte {{ui:Vytvořit kombinace}} a DetailCraft zapíše pevnostní a provozní kombinace normy z vašich případů. Kombinace, které jste zadali sami, zůstanou. Viz [Vytvoření kombinací](topic:design-checks#make-the-combinations).
- **Hodnoty národní přílohy.** Pro Eurokód začínají součinitele na doporučených hodnotách. {{ui:Hodnoty národní přílohy}} umožňuje zadat hodnoty vaší země, které se uloží do modelu. Viz [Vytvoření kombinací](topic:design-checks#make-the-combinations).
- **Kontrola prutů.** {{ui:Zkontrolovat prvky}} kontroluje každý ocelový profil I na tah, tlak s vzpěrem, ohyb s klopením, smyk, ohyb s normálovou silou a průhyb proti {{ui:Mezní průhyb}}, který nastavíte. Tabulka ukazuje vytížení každého prutu, rozhodující kontrolu a její kombinaci. Pruty jsou v modelu barevně označené (modrá, zelená, okrová, červená, šedá pro nezkontrolované). Viz [Kontrola prutů](topic:design-checks#check-the-members).
- **V zprávě.** {{ui:Zpráva (PDF)}} a {{ui:Zpráva (CSV)}} přidají vydání norem, nastavení, vytížení podle prutů a každé použité ustanovení. Viz [Zpráva](topic:design-checks#the-report).
- **Pomůcka, dokud ji neprojde inženýr.** Používá pouze síly z prvního řádu. Trubky, úhelníky, U-profily, svařované tvary a štíhlé nebo třídy 4 části dostanou stav „nezkontrolováno“ s uvedeným důvodem. Krut, spoje a beton se nekontrolují. Viz [Co se nekontroluje](topic:design-checks#what-is-not-checked).

### USD

- **Export ocelového modelu jako USD.** {{ui:USD}} ve skupině {{ui:Výstup}} zapíše model jako {{ui:Text (.usda)}}, {{ui:Binární (.usdc)}} nebo {{ui:Balíček (.usdz)}} pro renderovací programy a skládání scény. Každá sestava obsahuje své díly, každý díl je svým průřezem vedeným po délce s vyříznutými výřezy a má své označení, profil, jakost, délku a hmotnost. Otvory pro šrouby, šrouby, svary a základy nejsou v sítích USD. Viz [Export ocelového modelu jako USD](topic:usd).

### Asistenti AI

- **USD pro asistenty.** Váš vlastní asistent připojený přes CadCraft Studio může model exportovat jako USD (`usd_export`) a ve Studiu jej zapsat do složky, kterou jste povolili. Viz [Co může asistent požádat](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Změněno

- **Ocelová karta** má velká a malá tlačítka: velký {{ui:Nosník}} vedle malých {{ui:Sloup}}, {{ui:Ztužidlo}} a {{ui:Plech}} na {{ui:Modelování}} › {{ui:Pruty}}; velké {{ui:Čelní desky}} na {{ui:Detailování}} › {{ui:Spoje}}, přičemž {{ui:Spojka}} a {{ui:Styčník}} sdílejí jedno rozdělené tlačítko; velké {{ui:Vložit}} na {{ui:Upravit}} › {{ui:Schránka}}, přičemž {{ui:Vložit na stejné místo}} a {{ui:Duplikovat}} jsou za šipkou skupiny. {{ui:Výroba}} › {{ui:Výměna}} má {{ui:Exportovat USD}} vedle IFC. Ostatní styly nabídek vypadají jako dříve. Viz [Nabídky, klávesy a myš](topic:menus-keys-and-mouse#the-three-styles).
- [Analýza rámu](topic:frame-analysis) nyní odkazuje na kontroly návrhu a její kombinace lze vytvořit podle normy.

## Ve všech aplikacích

- **Jednotky.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jednotky}} má pro délku, plochu, objem, úhel a sklon vždy jeden seznam s přesnými velikostmi, které dávají definice jednotek (US survey foot je vlastní jednotka). Jednotky, které nepoužíváte, vypněte a zmizí ze seznamů; jednu označíte hvězdičkou a nová práce začne v ní. Soubor si vždy drží vlastní jednotku. Vlastní pole DetailCraft seznamy zatím nesledují: délky se stále zadávají v milimetrech. Viz [Jednotky, zadané hodnoty a seznamy jednotek](common:unit-lists).
- **Hustší rozložení a panely, které se schovají.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Hustota rozložení}} › {{ui:Kompaktní}} vejde na obrazovku více prvků (dotykové obrazovky a telefony si ponechají velká tlačítka). Každý boční panel má štíhlý nadpis: přetažením jej ukotvíte nebo oddělíte, pustíte na nadpis jiného panelu a sdílíte jeden rámec jako karty, připnete jej, aby se schoval k okraji, nebo jej skryjete a vyvoláte zpět z okraje. Viz [Uspořádání panelů](common:arrange-panels#make-the-layout-denser).
- **Dialogy se přesouvají.** Dialog přetáhněte za nadpis mimo kresbu; po zavření se vrátí tam, kde jste skončili. Dvojklikem na nadpis jej znovu vycentrujete. Viz [Přesun dialogu](common:arrange-panels#move-a-dialog).
- **Postupy pro AI asistenty.** Deset ukázkových požadavků pro vašeho asistenta (uklidit výkres, vykreslit sadu, zkontrolovat výkresy, položit modelu otázku, sečíst výkaz výměr, vyzkoušet variantu dílu…), každý s nástroji, které volá, a oprávněními, která potřebuje, a každý ověřený našimi testy. Aplikace žádnou AI neobsahují. Viz [Postupy pro AI asistenty](common:assistants-recipes).
- **Jazyky.** **Português (Portugal)** je nový v {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Jazyk}}. Ten, **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia** mají nyní všechna slova aplikací jako koncepty, které zatím nečetl rodilý mluvčí. Témata nápovědy jsou v angličtině.
- **CadCraft Studio** uvede, proč kontrola aktualizace selhala (zatím chybí soubor pro váš systém, není síť, chybný podpis), místo pouhého „Hotovo“, a přestane znovu zobrazovat kartu Co je nového, kterou jste zavřeli, dokud nevyjde novější vydání.

## Zatím není v této verzi

- **Verze 0.7 není podepsaná kódem.** Podepisování a balíček pro Microsoft Store se přesunuly do verze 0.8, protože ověření certifikátu ještě neproběhlo. Zkontrolujte SHA-256 u každého souboru na getcadcraft.com/download. Ve Windows, pokud SmartScreen instalátor zastaví, zvolte {{ui:Více informací}} a pak {{ui:Spustit přesto}}. Na Macu poprvé klikněte pravým tlačítkem na CadCraft Studio a zvolte {{ui:Otevřít}}. CadCraft Studio zatím není v žádném obchodě s aplikacemi a zatím neexistuje sestavení pro iPad ani iPhone.
- Seznamy úhlů a sklonů v {{ui:Jednotky}} se ukládají, ale zatím je žádné pole nečte.
- **Kontroly návrhu zatím neprošel inženýr.** Naše testy je porovnávají s tištěnými hodnotami z tabulek a ručně počítanými vzorci, zatím ne s vypracovanými příklady z příručky. Dokud je neprojde kontrola, jsou pomůckou: důležité pruty kontrolujte ručně.
- Kontroly návrhu používají síly z prvního řádu (bez účinků druhého řádu) a kontrolují pouze profily I. Nejsou hotové: trubky, úhelníky, U-profily, svařované tvary, štíhlé (AISC) nebo třídy 4 (Eurokód) části v ohybu, krut, smykové vzpěrání spolu s ohybem, spoje, únava, požár, seizmické detailování a beton. Štíhlý tlačený díl vynechá kontroly tlaku a prut dostane stav „vyhovuje, částečně zkontrolováno“.
- Analýza rámu je stále lineární a z prvního řádu a inženýr ji zatím na skutečné zakázce nevyzkoušel.
- Otvory pro šrouby, šrouby, svary a základy nejsou v exportu USD.

Vše ostatní je v [Co zatím není hotové](topic:not-built-yet).
