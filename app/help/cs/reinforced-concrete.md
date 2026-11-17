---
title: Detailování železobetonových trámů, sloupů, desek a stěn
summary: Přidejte betonové trámy, sloupy, desky a stěny podle os, doplňte jim pruty, třmínky a svorky, zkontrolujte přesahy a kotvení podle ACI 318-19 nebo EN 1992-1-1 a vytvořte dílenské výkresy a výkazy ohybů.
keywords: železobeton, výztuž, armování, trám, sloup, deska, stěna, třmínky, spony, svorky, háky, přesahy, přesah, kotvení, délka kotvení, ld, ldh, lbd, krytí, rozteč, doplňující pruty, otvory, sítě, označení výztuže, výkaz ohybů, bbs, dílenský výkres, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, import IFC
from: 3835b7ec
---

Karta {{ui:Beton}} pod pohledem podrobně popisuje pruty betonových trámů, sloupů, desek a stěn. Zadáte rozměry a pruty; DetailCraft umístí každý prut, očísluje jej, zkontroluje přesahy, kotvení, krytí a rozteče proti článku, ze kterého pochází, a vykreslí jej.

:::warning
DetailCraft zpracovává pruty, které mu zadáte. Nenavrhuje je. Každý výsledek je určen ke kontrole inženýrem.
:::

## Otevření karty Beton

Zvolte kartu {{ui:Beton}} pod pohledem. V pásovém rozložení je {{ui:Beton}} v kartě {{ui:Modelování}} vedle {{ui:Patka}}. S příkazovou řádkou stylu kreslení napište {{cmd:CONCRETE}}.

## Přidání prvku podle os

Betonové prvky se umisťují na osy a úrovně modelu, takže je nejdřív nastavte (levý panel).

1. V {{ui:Přidat podle os}} zvolte {{ui:Prvek}}: {{ui:Betonový trám}}, {{ui:Betonový sloup}}, {{ui:Deska}} nebo {{ui:Stěna}}.
2. Vyberte osy a úrovně:
   - trám vede od jednoho průsečíku os k druhému, jeho horní hrana je na úrovni;
   - sloup stojí v průsečíku, od jedné úrovně k druhé;
   - deska vyplní obdélník mezi dvěma číselnými a dvěma písmennými osami, její horní hrana je na úrovni;
   - stěna vede podél své střední osy od jednoho průsečíku k druhému, od jedné úrovně k druhé.
3. Zadejte rozměr a zvolte {{ui:Přidat}}. Prvek se vybere a jeho pole se otevřou v panelu {{ui:Vlastnosti}}.

Každý prvek začíná s pruty, které jsou výchozími hodnotami, nikoli návrhem: nahraďte je hodnotami od inženýra.

## Změna prutů

Vyberte prvek (v pohledu, nebo jeho název na kartě {{ui:Beton}}). Panel {{ui:Vlastnosti}} zobrazuje:

| Prvek | Co nastavíte |
|---|---|
| Trám | Šířka, výška, čisté krytí; horní a spodní pruty (průměr, počet, přímý nebo 90° háček na koncích); boční pruty; třmínky (průměr, háčky 135° nebo 90°, vzdálenost prvního od líce podpory, délka a rozteč koncové zóny, rozteč mezi nimi); délky podepření; délky přesahů |
| Sloup | Šířka, hloubka napříč, natočení, krytí; podélné pruty na každé stěně; svorky stejně jako třmínky; co pruty dělají nahoře (přesah se sloupem nad ním, háček do podlahy, nebo konec) |
| Deska | Tloušťka, velikost, horní vrstva, krytí; spodní a horní síť v každém směru (průměr a rozteč); U-pruty kolem hran; doplňující pruty; otvory |
| Stěna | Tloušťka, krytí, jedna nebo dvě vrstvy, vodorovné a svislé pruty, U-pruty na koncích, svislé pruty přesahující nahoru nebo ne, doplňující pruty, otvory |

Každá změna je jeden krok zpět. Změna, kterou nelze provést, se odmítne a stavový řádek uvede proč, například „Otvor se nevejde do prvku i s krytím."

Třmínky a svorky jsou uzavřené, oba háčky jsou v jednom rohu. Pruty trámu se na koncích napojují na betonový sloup až k jeho vzdálené straně mínus krytí; kde sloup není, zadejte {{ui:Délka podepření na začátku (mm)}} a na konci.

## Přesahy a kotvení

Pruty delší než {{ui:Délka skladových prutů (mm)}} (zpočátku 12000) se rozřežou na kusy stejné délky a přesahují se. Tabulka {{ui:Přesahy a kotvení}} vypisuje každý přesah a každé kotvení: co je potřeba, s článkem a jeho podmínkami, a co má detail.

- Délka přesahu 0 znamená „podle potřeby": délka, kterou předepisuje norma, zaokrouhlená nahoru na 25 mm.
- Zadejte vlastní délku přesahu a použije se. Pokud je kratší, než je potřeba, je to problém (viz níže) a v tabulce je označena *.
- Kotvení se měří od líce podpory ke konci prutu uvnitř podpory. Trám bez známé podpory to uvede místo kontroly.
- Sloup stojící na patce se přesahuje se startovacími pruty patky a na jiném sloupu s pruty toho sloupu; i tyto přesahy se kontrolují.

**ACI 318-19** (SI): přímé pruty v tahu 25.4.2.3 (tabulka, s ψt, ψe, ψg, λ), standardní háky 25.4.3.1 (ψr 1.6 a ψo 1.25, pokud není známo jinak), pruty v tlaku 25.4.9.2, přesahy v tahu 25.5.2.1 (třída B, nebo třída A v nastavení), přesahy v tlaku 25.5.5.1.

**EN 1992-1-1**: kotvení 8.4.4 s fbd z 8.4.2 (dobrá nebo špatná přilnavost), přesahy 8.7.3 s α6 pro každý prut přesazený v jednom řezu. γc, γs a αct začínají na doporučených hodnotách; nastavte hodnoty vaší národní přílohy.

## Kontroly

Každá kontrola, která selže, je v panelu problémů skořepiny (zdroj {{ui:Kontroly výztuže}}) a v seznamu {{ui:Kontroly}} prvku:

| Kontrola | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Krytí | Tabulka 20.5.1.3.1, podle expozice | Minimum přilnavosti, tabulka 4.2 (krytí z hlediska trvanlivosti zadáváte vy) |
| Volná vzdálenost prutů | 25.2.1 (trámy, desky, stěny), 25.2.3 (sloupy) | 8.2 (2) |
| Rozteč třmínků | 9.7.6.2.2 | 9.2.2 (6) |
| Minimální výztuž trámu | 9.6.1.2 | 9.2.1.1 (1) |
| Boční pruty trámu nad 900 mm hloubky | 9.7.2.3 | nekontroluje se |
| Poměr výztuže sloupu, počet prutů | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Svorky: rozteč, průměr, příčné svorky | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Rozteč desky, minimální výztuž | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Rozteč stěny, minimální výztuž, dvě vrstvy | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Přesahy, kotvení | jak výše | jak výše |

Velikost kameniva není známa, proto se volná vzdálenost kontroluje bez ní.

## Otvory, doplňující pruty a okrajové pruty

Zvolte {{ui:Přidat otvor}} pod vybranou deskou nebo stěnou a nastavte jeho polohu a velikost. Pruty, které otvor protíná, končí v krytí od jeho hrany. Doplňující pruty se přidají na každou stranu ve stejné vrstvě, nesou polovinu plochy přerušených prutů a sahají o jednu délku kotvení za otvor. Je to výchozí pravidlo DetailCraftu, nikoli článek normy: {{ui:Doplňující pruty}} nastavte podle inženýra. Rohové pruty se nepřidávají.

U-pruty kolem volných hran desky a na koncích stěny mají ramena dlouhá jednu délku přesahu.

## Označení výztuže a výkaz ohybů

Stejné pruty sdílejí jedno označení: patky mají označení F (5F1), trámy B, sloupy C, desky S a stěny W (7B1, 8C1, 4S2). Karta {{ui:Výkaz ohybů}} a její CSV nyní vypisují každý prut konstrukce, nejdřív patky. {{ui:Výstup}} › {{ui:Více}} › {{ui:Ohýbání}} jej stáhne.

## Dílenské výkresy

Zvolte {{ui:Výstup}} › {{ui:Více}} › {{ui:Výkresy výztuže}}, {{ui:Výkresy výztuže}} na kartě {{ui:Beton}}, nebo {{ui:Dílenský výkres}} vedle jednoho prvku. Každý prvek dostane list s pohledem (u desky půdorysem), na kterém je vidět každý prut a jeho označení, zóny třmínků nebo svorek a kótované přesahy, a řezem uprostřed. Výkazy ohybů pak vypisují každé označení s náčrtem jeho tvaru, rozměry, počtem, délkou řezu a hmotností.

Listy se vytvářejí z modelu pokaždé znovu a znovu po každé změně, dokud je okno otevřené: razítko nese odkaz na model. Uložte {{ui:Tento list jako PDF}} nebo {{ui:Všechny listy jako PDF}}.

## Pruty z IFC souboru

{{ui:Soubor}} › {{ui:Import IFC}} nyní čte IfcReinforcingBar: tažený kruh podél své osy se vrací jako rovné úseky a ohyby, s průměrem, označením a prvkem, který jej drží. Pruty se zachovají tak, jak byly načteny (nepřevádějí se na pravidla trámu nebo desky), zobrazují se v pohledu, vypisují se ve výkazu ohybů a zapisují se zpět při exportu IFC. Zpráva o importu uvádí, kolik prutů bylo načteno, jakých velikostí, v kolika prvcích, a co bylo vynecháno a proč.

Trám, sloup, deska nebo stěna z toho souboru, která obsahuje pruty nebo jejíž materiál je beton, se nebere jako ocel; zpráva to uvede. Vlastní export IFC z DetailCraftu nese definici každého betonového prvku, takže se vrátí jako on sám a jeho pruty se z ní znovu vytvoří.

:::note
Čtení souborů vlastního statického programu (ne IFC) ještě není hotovo: exportujte z něj IFC.
:::

## Export IFC

Betonové trámy, sloupy, desky (s otvory) a stěny se exportují jako IfcBeam, IfcColumn, IfcSlab a IfcWall, každý se svými pruty jako IfcReinforcingBar (hlavní pruty, třmínky a svorky jako ligatury, okrajové pruty) agregovanými k němu; každý prut je tažený kruh podél své osy se skutečnými oblouky v ohybech, se svým označením a délkou řezu.
