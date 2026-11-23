---
title: Kontrola ocelových prvků podle návrhové normy
summary: Vytvořte kombinace zatížení podle ASCE 7 nebo EN 1990, zkontrolujte každý ocelový I-profil podle AISC 360 nebo EN 1993-1-1 a zjistěte, jakou část únosnosti každý prvek využívá. Pomůcka, dokud prvky nezkontroluje inženýr.
keywords: návrh, kontrola návrhu, navrhování oceli, vyťaženost, únosnost, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurokód, kombinace zatížení, LRFD, národní příloha, vzpěr, klopení, smyk, ohyb, interakce, konstrukce, studenti, inženýr
from: 15685c4e
---

Po spuštění analýzy přemění blok {{ui:Kontroly návrhu}} na kartě {{ui:Analýza}} působící síly na výsledek pro každý ocelový prvek: jakou část jeho únosnosti využívá nejhorší kombinace.

:::warning
Je to **pomůcka, dokud ji nezkontroluje inženýr**. Pracuje pouze s účinky prvního řádu (bez účinků druhého řádu), nekontroluje kroucení, štíhlé části (třída 4), svařované průřezy ani spoje a to, co nedokáže zkontrolovat, vynechá a řekne to. Nenahrazuje kontrolu inženýra a jeho výsledky nejsou schválením.
:::

## Výběr normy

{{ui:Návrhová norma}} se ukládá spolu s modelem; vyberte jednu ze dvou skupin:

- **ASCE 7 + AISC 360** (USA, LRFD): kombinace zatížení podle ASCE 7-16 §2.3.1 a kontroly prvků podle ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurokód): kombinace podle EN 1990 (rovnice 6.10, nebo 6.10a a 6.10b) a kontroly prvků podle EN 1993-1-1.

Pak vyberte {{ui:Jakost oceli}} (A992, A36 a další; nebo S235 až S450, u něhož se při mezi kluzu nad 40 mm bere nižší hodnota).

## Vytvoření kombinací

V seznamu zatěžovacích stavů nastavte každému stavu jeho **druh** (stálé, užitné, užitné na střeše, sníh, vítr, seizmické) a pak stiskněte {{ui:Vytvořit kombinace}}. DetailCraft zapíše normové kombinace jako kombinace vašich stavů: všechny kombinace únosnosti, které norma uvádí pro druhy, jaké máte, a kombinace použitelnosti pro průhyb. Kombinace, které jste zadali sami, zůstanou; normě se nekontrolují. Stav druhu {{ui:Jiné}} se nekombinuje.

U Eurokódu jsou součinitele **doporučené hodnoty** z přílohy A1 normy EN 1990 (γG 1.35, γQ 1.5, hodnoty ψ pro užitná, sněhová a větrná zatížení) a z EN 1993-1-1 (γM0 = γM1 = 1.0). Národní příloha vaší země některé z nich mění: otevřete {{ui:Hodnoty národní přílohy}}, zadejte své hodnoty a kombinace vytvořte znovu. Ukládají se do modelu.

## Kontrola prvků

Stiskněte {{ui:Zkontrolovat prvky}}. Pro každý ocelový I-profil tabulka ukáže jeho **vyťaženost** (účinek zatížení ku únosnosti: 100 % je limit), zda vyhovuje, která kontrola rozhoduje a která kombinace. Prvky jsou na modelu obarveny: modře málo využité, zeleně zhruba z poloviny, okrově blízko limitu, červeně nad limitem, šedě nekontrolované. Klepnutím na název prvku jej vyberete.

Kontroly s ustanovením, podle kterého postupují (jsou uvedeny ve zprávě):

- tah, tlak s ohybovým a kroutivým vzpěrem, ohyb kolem obou os s klopením, smyk a ohyb s normálovou silou;
- průhyb kombinací použitelnosti oproti {{ui:Limit průhybu}}, který jste nastavili (zpočátku L/360; jde o hodnotu projektu, ne normovou hodnotu).

**Délky.** Délka vyztužení je podíl každé analyzované části (1 = nevyztuženo); výztuhy se berou rovnoměrně rozmístěné od začátku. Součinitele K násobí délku pro vzpěr. Uzel, do kterého přichází jiný prvek, prvek rozdělí a každý úsek se kontroluje na vlastní délce jako vyztužený v tomto místě.

## Co se nekontroluje

Prvek se místo čísla zobrazí jako **nekontrolovaný** s uvedeným důvodem, pokud jeho průřez není tvar, který kontroly znají (úhelníky, U-profily; obdélníkové a kruhové trubky se kontrolují, když jsou jejich stěny kompaktní), pokud jde o vlastní (svařovaný) tvar, nebo pokud je část v ohybu štíhlá (AISC) nebo třídy 4 (Eurokód). Štíhlá část v tlaku vyřadí kontroly tlaku a prvek se zobrazí jako *vyhovuje, částečně kontrolováno*. Svary ve spojích mají [vlastní kontrolu](topic:weld-checks). Dále nejsou zpracovány: účinky druhého řádu, kroucení, smykové boulení spolu s ohybem, šroubované spoje, únava, požární a seizmické detailování. Betonové prvky a seizmická zatížení mají [vlastní kontroly](topic:concrete-and-seismic). Viz [Ještě není hotovo](topic:not-built-yet).

## Zpráva

{{ui:Zpráva (PDF)}} a {{ui:Zpráva (CSV)}} získají tabulky návrhu, jakmile prvky zkontrolujete: vydání norem, nastavení a hodnoty národní přílohy, vyťaženost podle prvků, každé použité ustanovení a u každého prvku působící účinek, únosnost a vyťaženost každé kontroly v rozhodující kombinaci.
