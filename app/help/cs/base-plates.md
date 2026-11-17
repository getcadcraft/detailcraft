---
title: Přidání patních plechů a kotevních tyčí
summary: Umístěte svařený patní plech se čtyřmi kotevními tyčemi pod sloupec, nastavte jeho rozměry a zkopírujte jej na každý podobný sloupec.
keywords: patní plech, patní plech, kotevní tyče, kotevní šrouby, přichycovací šrouby, pata sloupu, základové šrouby, podobné
from: 619ebc64
---

Spoj patním plechem umístí plech pod sloupec, zkrátí sloupec o tloušťku plechu, oba díly svaří a přidá čtyři kotevní tyče procházející otvory v plechu.

:::warning
Velikosti jsou výchozí hodnoty, nejde o návrh. DetailCraft nekontroluje otlačení, pevnost tyčí ani zakotvení.
:::

## Přidání patního plechu

1. Zvolte {{ui:Vybrat}} ({{key:V}}) a klikněte na sloupec. Musí být svislý.
2. Zvolte {{ui:Patní plech}} ve skupině {{ui:Spojit}}, nebo {{ui:Přidat patní plech}} v panelu {{ui:Vlastnosti}}.
3. Stavový řádek hlásí „Patní plech byl přidán se čtyřmi kotevními tyčemi.“ Nové spojení je vybráno.

Sloupec může mít jeden patní plech. Pokud ho již má, stavový řádek hlásí „Tento sloupec již má patní plech.“

## Úprava

Vyberte patní plech (klikněte na plech nebo tyč). V části {{ui:Plech, šrouby a svar (mm)}}:

| Nastavení | Výchozí | Co dělá |
|---|---|---|
| Tloušťka plechu | 25 | O tuto hodnotu se sloupec zkrátí |
| Délka plechu | 450 | Podél hloubky sloupce |
| Šířka plechu | 400 | Napříč sloupcem |
| Průměr kotevní tyče | 20 | Velikost kotevní tyče |
| Průměr otvoru | 33 | Otvor v plechu |
| Třída šroubu | F1554 Gr 36 | Třída tyče, jako text |
| Rozteč tyčí (podél hloubky) | 350 | Mezi středy tyčí, podél délky plechu |
| Rozteč tyčí (napříč) | 300 | Mezi středy tyčí, napříč |
| Přesah tyče nad plechem | 100 | Od horní hrany plechu po horní konec tyče |
| Zapuštění tyče pod plechem | 450 | Od spodní strany plechu dolů do betonu |
| Velikost koutového svaru | 8 | Kolem celé paty sloupce |
| Materiál plechu | A36 | Text |
| Mezera pro zálivku | 0 | Mezera mezi horní hranou betonu a spodní stranou plechu |
| Výztuhy | Žádné | Vyberte Žádné, 2 (v ose stojiny) nebo 4 (navíc kolmo k ní); viz níže |
| Tloušťka, výška výztuhy | 12, 150 | |
| Hloubka smykového zubu | 0 | Jak daleko zub sahá pod plech; 0 = bez zubu |
| Tloušťka, šířka smykového zubu | 25, 150 | |
| Plechové podložky | Žádné | Na každé tyči, nebo žádné |
| Velikost, tloušťka podložky | 0, 0 | 0 = minimum podle AISC Design Guide 1 pro tyč |

Délka tyče = zapuštění + mezera pro zálivku + tloušťka plechu + přesah. S výchozími hodnotami je to 575 mm.

## Podrobnosti paty: zálivka, výztuhy, smykový zub, podložky

Všechny čtyři jsou u nového patního plechu vypnuté, stejně jako u patních plechů z modelů vytvořených před DetailCraft 0.4.

- **Mezera pro zálivku.** Plech je o tuto vzdálenost nad horní hranou betonu a tyče se o ni prodlouží. AISC Design Guide 1 (2.10) doporučuje 1 in. na hotové podlaze a 1½ až 2 in. na patce nebo pilíři; u velkých plechů a plechů se smykovým zubem více.
- **Výztuhy.** Svislé plechy svařené se sloupcem a plechem, od líce sloupce k okraji plechu, jako obdélníky (zatím bez zkosení nebo zúžení). **2** stojí v ose stojiny, za každou pásnicí; **4** přidá dva kolmo ke stojině, mezi pásnice, až k bokům plechu. U trubkového sloupce stojí uprostřed každé stěny. Každá je svařena se sloupcem a plechem na obou stranách.
- **Smykový zub.** Plech svařený celým obvodem pod patním plechem, v ose hloubky sloupce, uprostřed. DetailCraft varuje, pokud není hlubší než mezera pro zálivku. Nevytváří kapsu v patce, proto [kontrola kolizí](topic:clash-check) z tohoto důvodu zub a patku nevyhodnocuje.
- **Plechové podložky.** Čtvercová plechová podložka na každé tyči, ležící na patním plechu, zapsaná v sestavě sloupce jako volná (dodaná se sloupcem, nesvařená; Design Guide 1, 2.6). Při velikosti a tloušťce 0 vezme DetailCraft minimální podložku z AISC Design Guide 1, 2. vyd., tabulka 2.3 pro danou tyč; metrická tyč dostane nejbližší vyšší palcovou velikost (tyč M20 dostane řádek 7/8 in.: 2½ in. × 5/16 in.). Panel vlastností ukazuje použitou velikost. Otvor podložky je průměr tyče + 1/16 in.: to je volba DetailCraft, tabulka ji neuvádí. DetailCraft varuje, když tyče nemusí přečnívat dost daleko pro podložku a matici (přesah menší než tloušťka podložky + průměr tyče).

Design Guide 1, tabulka 2.3, také doporučuje otvor pro tyč v plechu: 1-5/16 in. pro tyč ¾ in., 1-9/16 in. pro ⅞ in., 1-13/16 in. pro 1 in. DetailCraft nemění velikost vašeho otvoru.

Varování se zobrazí také, když jsou otvory pro tyče blíž než 1.2 × průměr otvoru od okraje plechu, když tyče leží uvnitř obrysu sloupce, nebo když je plech menší než sloupec.

## Kopírování na podobné sloupce

1. Vyberte patní plech.
2. Zvolte {{ui:Použít na podobné (n)}}, nebo {{ui:Podobné}} v nabídce {{ui:Více}} skupiny {{ui:Spojit}}.
3. Každý svislý sloupec se stejným profilem, který nemá patní plech a nestojí na jiném sloupci, dostane kopii.

## Patní plechy a patky

Patní plech nepotřebuje patku a patka nezná patní plech nad sebou: kotevní tyče nejsou svázány s výztuží patky. Patky umístěte pomocí {{ui:Patka}}; viz [Umístění patek s výztuží](topic:footings-and-rebar).
