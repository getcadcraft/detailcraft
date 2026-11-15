---
title: Začíname s DetailCraft
summary: Čo DetailCraft dnes robí, ako ho otvoriť a prvý model od mriežok po dielenský výkres za desať minút.
keywords: začíname, prvý model, úvod, detailovanie ocele, výstuž, rýchly štart, návod, prehľad
from: e4f16bbe
---

DetailCraft je aplikácia na detailovanie ocele a výstuže v rodine CadCraft. Vytvoríte 3D model oceľovej rámovej konštrukcie na mriežkach a úrovniach, spojíte ju a získate to, čo dielňa potrebuje: značky súčiastok a zostáv, kusovník, dielenské výkresy jednotlivých súčiastok, súbory NC DSTV, model IFC a výkaz ohýbania pre pätky.

Toto je skorá verzia. Robí krátky zoznam vecí dôsledne namiesto všetkého naraz. Pred plánovaním skutočnej práce si prečítajte [Čo ešte nie je hotové](topic:not-built-yet).

## Čo robí dnes

- Mriežky a úrovne, ktoré zadáte v milimetroch.
- Stĺpy, nosníky, diagonály a dosky z publikovaných katalógov profilov (AISC W, S, C, L, HSS a Pipe; európske IPE, HEA, HEB a UPN; britské UB, UC, PFC, EA, UEA, SHS, RHS a CHS), plus vaše vlastné parametrické profily.
- Dva spoje: skrutkovaná čelná doska od nosníka k prírube stĺpa a pätná doska stĺpa so štyrmi kotevnými tyčami. Každý možno skopírovať na každý podobný spoj.
- Otvory a výrezy zadané podľa polohy.
- Pravouhlé pätky s dolnou sieťou a začínajúcimi prútmi.
- Značky súčiastok a zostáv, ktoré sa po každej zmene aktualizujú samy.
- Exporty: IFC4, súbory NC DSTV (I-profily a plechy), kusovník ako CSV, výkaz ohýbania ako CSV a PDF dielenského výkresu jednej súčiastky.

## Otvorenie DetailCraft

1. Otvorte DetailCraft v prehliadači na počítači: Chrome, Edge, Firefox alebo Safari. Pozri [Prehliadače a počítače](common:browsers).
2. Počkajte, kým sa obrazovka zaplní. Stavový riadok dole hovorí: "Pripravené. Otvorte Ukážku, alebo nastavte mriežky a úrovne a začnite umiestňovať prvky."

Zobrazenie modelu potrebuje 3D grafiku (WebGL). Ak stred obrazovky hlási "Tento prehliadač nedokázal spustiť 3D grafiku (WebGL)", pozri [Riešenie problémov](topic:troubleshooting#the-3d-view-is-missing).

:::note
Vaše modely zostávajú vo vašom počítači. Otvorenie modelu ho prečíta v prehliadači a uloženie stiahne súbor. Nič sa nenahráva. Ukladanie do cloudu zatiaľ nie je k dispozícii. Pozri [Kam smerujú vaše súbory](common:your-files). Ak chcete DetailCraft neskôr používať bez pripojenia, vyberte raz, keď ste online, {{ui:Uložiť na offline použitie}} na lište aplikácie; pozri [Práca offline](common:offline).
:::

:::offline
Ste offline. DetailCraft funguje bez pripojenia, iba ak bol najskôr uložený na offline použitie: tlačidlo {{ui:Uložiť na offline použitie}} na lište aplikácie potom zobrazí {{ui:Pripravené offline}}. Pozri [Práca offline](common:offline).
:::

## Najprv si pozrite ukážku

Najrýchlejší spôsob, ako vidieť, čo DetailCraft vytvára, je ukážková rámová konštrukcia.

1. Vyberte {{ui:Ukážka}} v skupine {{ui:Súbor}} na paneli nástrojov.
2. Zobrazenie ukazuje dvojpoľovú rámovú konštrukciu: šesť stĺpov s pätnými doskami, štyri nosníky s čelnými doskami, jednu diagonálu a sedem pätiek s výstužou.
3. Kliknite na nosník. Panel {{ui:Vlastnosti}} vpravo ukazuje jeho značku, rezanú dĺžku, hmotnosť a otvory, ktoré vytvorili čelné dosky.
4. Otvorte kartu {{ui:Kusovník}} dole a uvidíte každú značku súčiastky s jej počtom a hmotnosťou.

Sprievodca [Preskúmajte ukážkovú rámovú konštrukciu](topic:sample-model) prejde ju po jednotlivých častiach.

## Váš prvý model

Nový model už má mriežky 1 až 3 podľa A až B po 6000 mm a dve úrovne: Úroveň 1 na 0 a Úroveň 2 na 4000.

1. Vyberte {{ui:Nový}}. Ak aktuálny model má zmeny, DetailCraft sa najskôr opýta, či ich chcete uložiť.
2. Vyberte {{ui:Pôdorys}} nad zobrazením. Zoznam úrovní vedľa neho vyberie Úroveň 1.
3. Vyberte {{ui:Stĺp}} na paneli nástrojov, alebo stlačte {{key:C}}.
4. Kliknite na priesečník mriežok A/1. Objaví sa stĺp W12x50 od Úrovne 1 po Úroveň 2. Stavový riadok hovorí, kam išiel.
5. Kliknite na B/1, A/2 a B/2 a umiestnite ďalšie tri.
6. Vyberte Úroveň 2 v zozname úrovní, potom vyberte {{ui:Nosník}} alebo stlačte {{key:B}}.
7. Kliknite na A/1, potom na A/2. Nosník W16x26 spojí dva vrcholy stĺpov, jeho horná hrana ocele leží na úrovni.
8. Stlačte {{key:Esc}}, aby ste sa vrátili na {{ui:Vybrať}}, potom kliknite na nosník.
9. Vyberte {{ui:Čelné dosky}} v skupine {{ui:Spoje}}. Oba konce dostanú skrutkovanú čelnú dosku, nosník sa skráti, aby sedel, a prvá čelná doska je teraz vybraná.
10. Kliknite znova na nosník.
11. Vyberte {{ui:Dielenský výkres}} v skupine {{ui:Výstup}}. Otvorí sa náhľad dielenského výkresu nosníka. Vyberte {{ui:Stiahnuť PDF}}.
12. Stlačte {{key:Mod+S}} na uloženie modelu. Prehliadač stiahne `Untitled.detailcraft.json`.

Pred uložením premenujte model v poli {{ui:Názov}} v ľavom hornom rohu, aby súbor a každý export niesli jeho názov.

## Kam ďalej

- [Prehliadka obrazovky](topic:workspace)
- [Nastavenie mriežok a úrovní](topic:grids-and-levels)
- [Pohyb v 3D zobrazení](topic:navigate-3d), s myšou, touchpadom alebo dotykovou obrazovkou
- [Prechod z iného softvéru na detailovanie](topic:coming-from), ak poznáte veľký balík na detailovanie
- [Používanie tejto pomoci](common:help)
