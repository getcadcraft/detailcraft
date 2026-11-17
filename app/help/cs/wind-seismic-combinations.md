---
title: Vítr, seizmická lokalita a kombinace podle ASCE 7
summary: Vytvoření větrných zatěžovacích případů pro uzavřenou tuhou budovu, výpočet seizmických návrhových hodnot pro lokalitu a vytvoření kombinací podle ASCE 7 na kartě Analýza.
keywords: vítr, zatížení větrem, asce 7, směrová metoda, expozice, uzavření, seizmické, třída lokality, ss, s1, sds, sd1, usgs, návrhové spektrum, kombinace zatížení, lrfd, asd, kzt, kd, poryv
from: 676fcbf3
---

Tři bloky na kartě {{ui:Analýza}} připraví větrné a seizmické vstupy rámu a zkombinují je: {{ui:Zatížení větrem (směrová metoda ASCE 7)}}, {{ui:Seizmická lokalita a systém (ASCE 7)}} a {{ui:Kombinace zatížení podle ASCE 7}}. Jsou to pomůcky: **nejde o kontrolu podle normy; výsledky schvaluje váš inženýr.**

## Co uděláte

Vytvoříte větrné zatěžovací případy pro uzavřenou tuhou budovu, převezmete seizmické hodnoty pro lokalitu a vytvoříte kombinace, které je používají. Model potřebuje podlaží, takže nejprve spusťte analýzu (viz [Síly, reakce a průhyby](topic:frame-analysis)).

## Postup

1. Otevřete kartu {{ui:Analýza}} a zvolte {{ui:Spustit}}, aby byla známa podlaží a velikost budovy. Pokud blok hlásí, že nejsou podlaží, zvolte v něm {{ui:Najít podlaží}}.
2. V {{ui:Zatížení větrem (směrová metoda ASCE 7)}} vyberte {{ui:Vydání}}, zadejte {{ui:Základní rychlost větru V}} z vaší mapy větru a zvolte její {{ui:Jednotka rychlosti}}, pak {{ui:Expozici}} a {{ui:Uzavření}}. Jsou tu také Kzt, Kd, G, výška terénu, Cp v závětří, excentricita a směr.
3. V tabulce si přečtěte tlak na každém podlaží a sílu na každém podlaží, pak zvolte {{ui:Vytvořit větrné případy}}. Případy jsou +X, -X, +Y a -Y.
4. V {{ui:Seizmická lokalita a systém (ASCE 7)}} vyberte vydání a zadejte Ss a S1 (SMS, SM1 a S1 pro ASCE 7-22), třídu lokality A až D, kategorii rizika a seizmický systém přenášející síly. Nebo zadejte zeměpisnou šířku a délku a zvolte {{ui:Vyhledat v USGS (online)}}; online služba se dotazuje, až když to stisknete.
5. Přečtěte si Fa, Fv, SDS a SD1, R, Cd a Omega0 a návrhové spektrum, pak zvolte {{ui:Použít v seizmickém bloku}}. V seizmickém bloku stiskněte {{ui:Vytvořit seismické případy}} (viz [Kontrola betonových prvků a tvorba seizmických zatížení](topic:concrete-and-seismic)).
6. V {{ui:Kombinace zatížení podle ASCE 7}} vyberte {{ui:Metoda}} (LRFD nebo ASD) a zvolte {{ui:Vytvořit kombinace ASCE 7}}. Spusťte analýzu znovu.

## Co je dobré vědět

- Vítr: pouze uzavřená tuhá budova, směrová metoda. Pružná budova potřebuje součinitel poryvu z normy, který DetailCraft nevytváří.
- Třídy lokality E a F vyžadují průzkum lokality a nejsou hotové.
- Zdrojový seznam na konci bloků říká, odkud pochází každé číslo a co bylo vynecháno.
- Vyhledávání USGS bylo testováno na náhradní službě, ne na živé službě.
