---
title: Připojení nosníků ke sloupům čelními deskami
summary: Přidejte šroubované čelní desky tam, kde se nosník stýká s přírubou nebo stojinou sloupu, nastavte desku, šrouby a svar a zkopírujte spoj na každý podobný spoj.
keywords: čelní deska, koncová deska, momentový spoj, šroubovaný spoj, spoj, šrouby, svar, prodloužená čelní deska, zapuštěná, podobný, kopírovat spoj, komponenta
from: 21e028b2
---

Čelní deska spojí přivařeným plechem konec nosníku a přišroubuje jej k přírubě nebo stojině sloupu. DetailCraft umístí desku, zkrátí nosník, vyvrtá odpovídající otvory v desce i v přírubě sloupu, přidá šrouby a svar a zkontroluje vzdálenosti od okrajů a rozteče.

:::warning
DetailCraft nenavrhuje spoje. Nastavení jsou výchozí hodnoty, které měníte; nic nekontroluje pevnost. Varování o okrajových vzdálenostech a roztečích používají minima z EN 1993-1-8, tabulka 3.3, která se mohou lišit od pravidel, se kterými pracujete.
:::

## Co může spojit

- **Vodorovný** nosník (oba konce ve stejné výšce), svislý (rotace 0), s profilem I.
- Do **příruby** nebo **stojiny** **svislého** sloupu z profilu I, kolmo k němu.
- Konec nosníku musí ležet na ose sloupu, mezi spodní a horní hranou sloupu.

Šikmé nebo skloněné nosníky a průřezy jiné než I se odmítnou s důvodem: pro ně použijte [smykové plechy](topic:shear-tabs). Na stojině se deska a pásnice nosníku musí vejít mezi pásnice sloupu; DetailCraft varuje, když se nevejdou.

:::tip
Při rotaci 0 směřují pásnice sloupu podél číslované osy (x). Nosník vedoucí od A k B se stýká se stojinou a dostane čelní desku na stojině.
:::

## Přidání čelních desek k nosníku

1. Zvolte {{ui:Select}} ({{key:V}}) a klikněte na nosník.
2. Zvolte {{ui:End plates}} ve skupině {{ui:Connect}}, nebo {{ui:Add end plates}} v panelu {{ui:Properties}}.
3. Každý volný konec nosníku, který se kolmo stýká s přírubou nebo stojinou sloupu, dostane desku. Stavový řádek říká „Přidány 2 čelní desky. Vyberte jednu a změňte její desku, šrouby a svar; Podobné ji zkopíruje na spoje, které jsou jí podobné.“
4. První nová čelní deska je vybrána a její nastavení je v panelu {{ui:Properties}}.

Pokud se nic nestane, přečtěte stavový řádek:

- „Tento nosník nekončí na ose sloupu. Čelní desky se umísťují tam, kde konec nosníku narazí na svislý sloup.“
- „Tento nosník se stýká se sloupem pod úhlem nebo je skloněný: čelní desky se navrhují pro kolmé vodorovné spoje. Použijte Smykové plechy.“
- „Oba konce už mají spoje.“

## Změna desky, šroubů a svaru

Klikněte na čelní desku (nebo na jeden z jejích šroubů) a vyberte spoj. Pod {{ui:Plate, bolts and weld (mm)}}:

| Nastavení | Výchozí | Co dělá |
|---|---|---|
| Tloušťka desky | 20 | Tloušťka desky; také jak daleko je nosník zkrácen za přírubu |
| Šířka desky | 180 | Napříč spojem |
| Prodloužení nad nosníkem | 0 | Nad horní pásnicí; nad 0 vznikne prodloužená čelní deska |
| Prodloužení pod nosníkem | 0 | Pod spodní pásnicí |
| Průměr šroubu | 20 | Jmenovitá velikost šroubu |
| Průměr otvoru | 22 | Vaše vůle v desce a v přírubě sloupu |
| Jakost šroubu | A325 | Text; vytiskne se v kusovníku |
| Řady šroubů | 4 | Řady po dvou šroubech, vycentrované na výšku desky |
| Rozteč řad | 75 | Svislá rozteč mezi řadami |
| Rozchod | 100 | Vodorovná rozteč mezi dvěma šrouby v řadě |
| Přídavek délky šroubu | 30 | Přidáno k sevření pro matici, podložku a závit; viz níže |
| Velikost koutového svaru | 8 | Všude kolem konce nosníku |
| Materiál desky | A36 | Text |

Zadejte novou hodnotu a stiskněte {{key:Enter}} nebo {{key:Tab}}. Deska, otvory, šrouby a řezná délka nosníku se aktualizují okamžitě. Každá změna je jeden krok zpět.

Pod nastavením vidíte, co spoj vytváří:

- {{ui:Bolts}}: například „8 × 20 × 70 A325 (sevření 36.2)“.
- {{ui:Weld}}: velikost, kde a jeho délka.
- {{ui:Plate}}: jeho rozměr a značka dílu.

### Jak se čísla počítají

- Nosník se zkrátí o polovinu hloubky sloupu (na stojině o polovinu tloušťky stojiny) plus tloušťku desky, aby deska ležela na líci.
- Výška desky je hloubka nosníku plus obě prodloužení.
- Délka šroubu = sevření (tloušťka desky + tloušťka příruby nebo stojiny sloupu) + přídavek, zaokrouhleno nahoru na nejbližších 5 mm.
- Zobrazená délka svaru je obvod průřezu nosníku.

### Varování

Spoj se stále vytvoří, ale tato se objeví pod ním a v kartě {{ui:Problems}}:

- Řady šroubů nebo šrouby blíž k okraji desky než 1.2 × průměr otvoru.
- Rozteč řad menší než 2.2 × průměr otvoru, nebo rozchod menší než 2.4 × průměr otvoru.
- Otvory zasahující do stojiny sloupu nebo jejího zaoblení, nebo mimo přírubu sloupu.
- Deska širší než příruba sloupu, nebo (na stojině) širší než prostor mezi pásnicemi; pásnice nosníku, které se mezi nimi nevejdou.
- Řada šroubů příliš blízko pásnice nosníku, nebo rozchod příliš těsný pro stojinu nosníku a jeho svar.

## Zkopírování na každý podobný spoj

1. Vyberte spoj, který jste nastavili.
2. Zvolte {{ui:Apply to similar (n)}} v panelu {{ui:Properties}}, nebo {{ui:Similar}} v nabídce {{ui:More}} skupiny {{ui:Connect}}. Číslo v závorce je počet spojů, které ji dostanou.
3. Každý spoj se stejným profilem nosníku a sloupu, s nosníkem napojeným na stejný druh plochy, který ještě nemá spoj, dostane kopii se stejným nastavením. Stavový řádek řekne, kolik jich je.

Kopie jsou nezávislé: změna jedné později neovlivní ostatní. Spoje, které už spoj mají, zůstanou beze změny; chcete-li je nahradit, nejprve je smažte.

## Přesouvání a mazání

Spoje se po každé změně modelu znovu vytvoří z jejich nastavení, takže přesun nebo změna velikosti nosníku nebo sloupu přenese i jeho čelní desky. Pokud změna způsobí, že spoj už nesedí, zůstane v modelu a karta {{ui:Problems}} řekne proč, například „Konec nosníku už neleží na ose sloupu.“

Chcete-li spoj smazat, vyberte jej a stiskněte {{key:Delete}}. Smazání nosníku nebo sloupu smaže i jeho spoje.

Dále: [Přidání patních plechů a kotevních tyčí](topic:base-plates).
