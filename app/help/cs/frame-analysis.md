---
title: Analýza rámu
summary: Síly, reakce a průhyby trámů, sloupů a ztužidel tak, jak jsou nakresleny, při zatěžovacích stavech a kombinacích, které nastavíte. Pomůcka pro analýzu, ne kontrola podle normy; návrhové kontroly jsou samostatný krok.
keywords: analýza, konstrukční analýza, analýza rámu, metoda tuhosti, zatížení, zatěžovací stav, kombinace, stálé zatížení, užitné zatížení, vlastní tíha, vlastní váha, reakce, ohybový moment, smyková síla, normálová síla, průhyb, deformovaný tvar, podpory, kloubová, vetknutá, uvolnění, zpráva, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Záložka {{ui:Analýza}} ve spodní části najde síly v každém trámu, sloupu a ztužidle modelu, reakce v patách sloupů a to, jak moc se prvky prohýbají, pro zatížení, která zadáte.

:::warning
Je to **pomůcka pro analýzu, ne kontrola podle normy**. Analýza nepoužívá žádnou normu návrhu: neurčuje rozměry prvků, neověřuje únosnosti ani spoje a nevybírá zatěžovací součinitele. Model, jeho zatížení a podpory kontroluje inženýr a rozhoduje, co čísla znamenají. Kontroly prvků podle ASCE 7 / AISC 360 nebo EN 1990 / EN 1993-1-1 viz [Kontrola ocelových prvků podle návrhové normy](topic:design-checks), což je samostatný krok a také pomůcka.
:::

## Spuštění

1. Otevřete záložku {{ui:Analýza}} ve spodní části.
2. Vyberte jeden nebo více prvků v pohledu, zvolte {{ui:Případ}}, {{ui:Zatížení}} a {{ui:Směr}}, zadejte hodnotu a stiskněte {{ui:Přidat zatížení}}. Zatížení rozložené podél prvku je v kN/m, bodové zatížení v kN. {{ui:Dolů (tíže)}} je obvyklé.
3. Stiskněte {{ui:Spustit analýzu}}.

Tabulka uvádí největší normálovou sílu N, smykové síly Vz a Vy, ohybové momenty My a Mz, krut T a jeho průhyb u každého prvku, největší moment první; kliknutím na název prvku jej vyberete. Níže jsou reakce v každé podpoře. {{ui:Na modelu}} vykreslí deformovaný tvar, nebo jednu veličinu jako diagram vedle každého prvku s největší hodnotou zapsanou na jeho místě. Výsledky zastarají, jakmile se model změní: spusťte analýzu znovu.

Každé zatížení, případ a nastavení je jeden krok zpět ({{key:Mod+Z}}) a ukládá se do souboru modelu.

## Zatěžovací stavy a kombinace

Analýza začíná se třemi: **Stálé** (vlastní tíha prvků z jejich nakreslených průřezů a 7850 kg/m³), **Užitné** (prázdné) a **Stálé + užitné**. Přidejte vlastní stavy (vítr, sníh …) a kombinace: kombinace sčítá stavy s činiteli, které napíšete. Analýza je lineární, takže každý stav se řeší jednou a kombinace jsou součty. Činitele zadejte sami, nebo zvolte návrhovou normu a nechte {{ui:Vytvořit kombinace}} zapsat její kombinace ([Kontrola ocelových prvků podle návrhové normy](topic:design-checks)).

## Z čeho se rám skládá

- Trámy, sloupy a ztužidla, každý na své pracovní čáře (čáře, kterou jste nakreslili), se skutečnými vlastnostmi průřezu vypočtenými z jeho obrysu. Desky, schodiště, patky a šrouby nejsou součástí rámu.
- Prvek se rozdělí tam, kde na něj dosedá konec jiného prvku, takže trám napojený na sloup v polovině výšky se k němu připojí právě tam.
- **Paty sloupů**: vetknuté (začátek) nebo kloubové (držené na místě a proti kroucení, volné v natočení). Patní plech vždy tvoří podporu.
- **Konce trámů**: čelní plech je tuhý, smykový úhelník je kloubový. {{ui:Konce trámů bez spoje}} nastaví zbytek. **Ztužidla** jsou na obou koncích kloubová.
- Vyberte jeden prvek, abyste jeho koncům nebo patě sloupu dali vlastní pravidlo.
- Ocel všude: E = 200 GPa, G = 77 GPa.

Pokud se rám může pohnout, aniž by něco ohýbal — mechanismus, například kloubové paty bez ztužení v jednom směru — běh se zastaví a řekne, kde a kterým směrem; zadržte jej podporou, tuhým uzlem nebo ztužidlem.

## Znaménka

N > 0 je tah. My > 0 dává tah na místní záporné straně −z prvku: trám prohnutý tíhou má My > 0. Mz > 0 dává tah na místní záporné straně −y. Průhyb se měří od přímky mezi konci prvku. Místní osa z prvku směřuje nahoru (u sloupu: ve směru X); jeho místní osy se otáčejí s natočením prvku.

## Zpráva

{{ui:Zpráva (PDF)}} a {{ui:Zpráva (CSV)}} obsahují vše: předpoklady, na kterých byl rám postaven, průřezy, stavy a kombinace, pak pro každý stav a kombinaci reakce (se součty zatížení a reakcí, které se vyrovnávají), síly v prvcích a posuny, a obálku všech stavů. {{ui:Exportovat jako CraftScript}} zapíše týž rám jako skript pro pracovní prostor Skript v PartCraftu, kde knihovní funkce `frame3d` řeší rám krok za krokem v čitelném kódu.

## Metoda

Metoda přímé tuhosti, lineární a prvního řádu, pokud nezaškrtnete Druhý řád (P-Delta): prvky se dvěma uzly jako nosníky-sloupy s osovou, krutovou a dvěma ohybovými tuhostmi (bez deformace smykem a bez deplanace), uvolnění konců statickou kondenzací, zatížení podél prvků přes jejich vlastní tvarové funkce. Výsledky jsou ověřeny proti klasickým učebnicovým případům (konzoly, prosté, vetknuté a spojité nosníky, portálový rám, rošt v krutu, příhradový vazník).

**Druhý řád (P-Delta).** Zaškrtněte *Druhý řád (P-Delta)* vedle Spustit: každá kombinace se řeší znovu s osovými silami prvků působícími na deformovaný rám (každý prvek rozdělen na 4 části, takže se počítá i ohyb prvku mezi konci), dokud se osové síly neustálí. Řádek výsledku uvádí počet průchodů a o kolik vzrostl posun; momenty, průhyby, návrhové kontroly a zpráva pak používají tyto výsledky. Nad elastickou kritickou silou rámu se běh zastaví a řekne to. Je to pružné s malým natočením, pouze ohybové, bez redukce tuhosti a bez fiktivních zatížení (samo o sobě ne metoda přímé analýzy AISC); desky, stěny a tuhé podlahy zůstávají prvního řádu.

**Vlastní frekvence (konečné prvky).** Blok {{ui:Konečné prvky: vlastní frekvence}} pod výsledky najde nejnižší tvary téhož modelu pomocí výpočtového jádra konečných prvků: trámy s jejich uvolněními konců, desky a stěny jako ploché čtyřuzlové skořepiny, tuhé podlahy, podpory. Zvolte počet tvarů (3, 6, 10 nebo 20) a prvek desky (čtyřuzlovou skořepinu pro tlusté nebo tenké desky, nebo prvek pro tenkou desku) a stiskněte {{ui:Najít frekvence}}. Tabulka uvádí frekvenci každého tvaru v Hz, jeho periodu v sekundách a jeho efektivní modální hmotnost ve směrech X, Y a Z jako podíl hmotnosti, která se může pohybovat. {{ui:Zobrazit na modelu}} vykreslí libovolný tvar stejně jako deformovaný tvar. Hmotnost je měrná hmotnost materiálu krát objem: zatížení hmotnost nepřidávají a materiál bez hustoty ji nemá. Zpráva (PDF, CSV) tabulku obsahuje. Je to pružné a jen pro malé pohyby a zde se nevytváří žádné seismické ani větrné zatížení podle normy. Není to kontrola podle normy; výsledky kontroluje váš inženýr.

**Spektrum odezvy, časová historie a pushover.** Pod vlastními frekvencemi jsou další tři bloky, které používají tentýž model konečných prvků. Hmotnost pro všechny je měrná hmotnost materiálu plus svislá zatížení zaškrtnutých stavů, každé násobené činitelem, který napíšete (například stálé při 1 a užitné při podílu, který počítáte jako hmotnost).

{{ui:Spektrum odezvy}} načte každý tvar ze spektra, které zadáte (tabulka periody a zrychlení, nebo tvar podle ASCE 7 z SDS, SD1 a TL; tlačítko {{ui:Použít hodnoty ze seismického bloku}} je zkopíruje ze seismického bloku) a kombinuje tvary pomocí CQC, SRSS, pravidla deseti procent nebo absolutního součtu, pak spojí směry X, Y a Z (100 % + 30 % nebo SRSS). Dává smykovou sílu v základně, mezipodlažní posuny, koncové síly prvků a tabulku tvarů, která varuje, když použité tvary nesou méně než 90 % hmotnosti. Výsledky můžete škálovat činitelem nebo na smykovou sílu v základně, kterou zadáte; blok sám tuto sílu nikdy nepočítá. Výsledky nemají znaménko.

{{ui:Časová historie}} spustí zemní zrychlení modální superpozicí (přesně pro přímky záznamu mezi body) nebo přímou integrací (Newmarkova střední zrychlení s Rayleighovým tlumením). Vstupem je vymyšlený sinus nebo impuls (vždy označený jako syntetický), záznam, který vložíte, nebo textový soubor, který otevřete (čas a zrychlení, jedno zrychlení na řádek s krokem, nebo soubor ve stylu PEER s hlavičkou DT=; v g nebo m/s²). Dává výchylku střechy a smykovou sílu v základně v čase, posun každé úrovně a obálku koncových sil prvků. Modely s velmi dlouhým záznamem jej uchovají jen pro relaci.

{{ui:Pushover}} tlačí střechu do strany v malých krocích (tvar jako první tvar, nebo rovnoměrný), s plastickými klouby na koncích prvků, které mají tvar I. Kloub plastizuje při plastickém momentu, který klesá s rostoucí osovou silou (vypočteno z nakresleného tvaru, zaoblení zanedbána); zpevnění je volitelné, P-delta je volitelná a před tím lze použít gravitační kombinaci. Dává křivku kapacity (smyková síla v základně proti výchylce střechy), první kloub a stav a plastické natočení každého kloubu. {{ui:Spustit nelineární časovou historii}} spustí tytéž klouby pod záznamem z bloku Časová historie u malých modelů. Klouby vznikají jen na koncích prvků (uzel umístěte tam, kde má vzniknout uvnitř pole); prvek uvolněný na obou koncích žádný nedostane; plastizace a vzpěr ztužidel se nemodelují; desky a stěny zůstávají pružné; nejsou uvedena kritéria přijatelnosti. Není to kontrola podle normy; výsledky kontroluje váš inženýr. Nastavení se ukládají s modelem a zpráva obsahuje tabulky.

Ještě není hotovo: analýza vzpěru, korekce chybějící hmotnosti pro spektrum odezvy, škálování záznamů, kritéria přijatelnosti pro klouby (dynamická odezva je výše), plošná a větrná zatížení vytvářená za vás (seismické síly na podlažích jsou v [Kontrola betonových prvků a tvorba seismických zatížení](topic:concrete-and-seismic)), excentricity prvků, ztužidla pouze v tahu. Viz [Ještě není hotovo](topic:not-built-yet).
