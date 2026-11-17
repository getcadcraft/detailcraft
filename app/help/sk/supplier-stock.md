---
title: Zásoby dodávateľa a dodacie lehoty
summary: Skontrolujte tyče, ktoré váš rezný plán kupuje, podľa zoznamu zásob dodávateľa, teda či ich je dosť a ako dlho sa čaká?
keywords: dodávateľ, zásoby, dodacia lehota, oceliareň, valcovňa, dostupnosť, nedoplnené, tyče, nákup, dodávky
from: 1373f5a3
---

Karta {{ui:Dodávky}} vyhľadá každý profil, ktorý {{ui:Rezný plán}} kupuje, v zozname zásob dodávateľa. Súbor zostáva v modeli; nič sa nikam neposiela.

## Pridanie súboru dodávateľa

Stlačte {{ui:Pridať súbor dodávateľa}} a vyberte CSV od svojho dodávateľa (oddelené čiarkou, bodkočiarkou alebo tabulátorom). Potrebuje stĺpec pre položku alebo profil (Item, Name, Description, Section, SKU) a jeden pre zásoby (In stock, Quantity, On hand) alebo pre dodaciu lehotu. Jednotka (each, metres, kilograms, tonnes), cena, dodávateľ a dátum doplnenia sa načítajú, ak pre ne existuje stĺpec. Rozumejú sa aj slová „Out of stock“, „In stock“, „2-3 weeks“, „backorder“. Môže sa uchovať až päť súborov; pridanie súboru s rovnakým názvom ho nahradí.

## Čo vidíte

Pri každom profile, ktorý rezný plán kupuje, tabuľka ukazuje, čo model potrebuje, čo je na sklade, dodaciu lehotu, dodávateľa a výsledok:

- **Pokryté:** na sklade je dosť.
- **Chýba:** zásob je menej, než je potreba. Ak je zásob menej než potreba a nastavíte najdlhšie čakanie, dodacia lehota ukáže, ako dlho trvá zvyšok.
- **Príliš neskoro:** údaj o zásobách chýba a dodacia lehota je dlhšia než čakanie, ktoré prijímate.
- **Bez údaja o zásobách:** súbor ho neuvádza.
- **Iná jednotka:** dodávateľ uvádza profil v jednotke, ktorú model nedokáže vyjadriť.

Potreba modelu je uvedená v tyčiach (z vnoreného rezného plánu s vašimi dĺžkami zásob), v metroch kúpenej tyče a v kilogramoch (hmotnosť profilu na meter); použije sa jednotka samotného súboru. Profil sa páruje podľa názvu („W16 X 26“ a „w16x26“ sú rovnaké). Profily, ktoré nie sú v súbore, sa vypíšu.

Chýbajúce a neskoro dodané profily sú v paneli {{ui:Problémy}}. Tu sa nič neobjednáva.

## Obmedzenia

Údaje o zásobách a dodacie lehoty sú zo súboru, platné ku dňu jeho vytvorenia. Plechy sa nerozmiestňujú, takže sa nevyhľadávajú. Súbor sa iba číta: každý pokyn v ňom je len text.
