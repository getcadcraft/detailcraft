---
title: Začíname s DetailCraft
summary: Čo DetailCraft robí dnes, ako ho otvoriť a prvý model od mriežok po dielenský výkres za desať minút.
keywords: začiatok, prvý model, úvod, detailing ocele, výstuž, rýchly štart, návod, prehľad
from: 3682c0d8
---

DetailCraft je aplikácia rodiny CadCraft na vypracovanie oceľových konštrukcií a výstuže. Vytvoríte 3D model oceľového rámu na mriežkach a úrovniach, pospájate ho a dostanete, čo potrebuje dielňa: značky dielcov a zostáv, kusovník, dielenské výkresy jednotlivých dielcov, súbory DSTV NC, model IFC a výkaz ohýbania pre pätky.

Je to skoré zostavenie. Robí krátky zoznam vecí starostlivo namiesto všetkého naraz. Prv než okolo neho naplánujete skutočnú prácu, prečítajte si [Čo ešte nie je vytvorené](topic:not-built-yet).

## Čo robí dnes

- Mriežky a úrovne, ktoré zadáte, v milimetroch.
- Stĺpy, nosníky, diagonály a dosky z uverejnených katalógov profilov (AISC W, S, C, L, HSS a Pipe; európske IPE, HEA, HEB a UPN) plus vaše vlastné parametrické profily.
- Dva spoje: skrutkovaná čelná doska od nosníka k pásnici stĺpa a pätná doska stĺpa so štyrmi kotviacimi tyčami. Každý sa dá skopírovať na každý podobný styk.
- Otvory a vyrezania zadané polohou.
- Obdĺžnikové pätky so spodnou sieťou a štartovacími prútmi.
- Značky dielcov a zostáv, ktoré sa po každej zmene aktualizujú samy.
- Exporty: IFC4, súbory DSTV NC (profily I a dosky), kusovník ako CSV, výkaz ohýbania ako CSV a dielenský výkres PDF jedného dielca.

## Otvorenie DetailCraft

1. Otvorte DetailCraft v prehliadači pre počítač: Chrome, Edge, Firefox alebo Safari. Pozrite [Prehliadače a počítače](common:browsers).
2. Počkajte, kým sa obrazovka zaplní. Riadok stavu dole hovorí „Pripravené. Otvorte Ukážku alebo nastavte mriežky a úrovne a začnite umiestňovať prvky.“

Pohľad na model potrebuje 3D grafiku (WebGL). Ak stred obrazovky hovorí „Tento prehliadač nevedel spustiť 3D grafiku (WebGL)“, pozrite [Riešenie problémov](topic:troubleshooting#the-3d-view-is-missing).

:::note
Vaše modely zostávajú na vašom počítači. Otvorenie modelu ho číta v prehliadači a uloženie stiahne súbor. Nič sa nenahráva. Ukladanie do cloudu zatiaľ nie je k dispozícii. Pozrite [Kam idú vaše súbory](common:your-files). Ak chcete DetailCraft neskôr používať bez pripojenia, raz, kým ste online, zvoľte na lište aplikácie {{ui:Uložiť na offline použitie}}; pozrite [Práca offline](common:offline).
:::

:::offline
Ste offline. DetailCraft funguje bez pripojenia, iba ak bol najprv uložený na offline použitie: tlačidlo {{ui:Uložiť na offline použitie}} na lište aplikácie potom znie {{ui:Pripravené offline}}. Pozrite [Práca offline](common:offline).
:::

## Najprv si pozrite ukážku

Najrýchlejší spôsob, ako zistiť, čo DetailCraft vytvára, je ukážkový rám.

1. V skupine {{ui:Súbor}} panela nástrojov zvoľte {{ui:Ukážka}}.
2. Pohľad zobrazí dvojpoľový rám: šesť stĺpov s pätnými doskami, štyri nosníky s čelnými doskami, jednu diagonálu a sedem pätiek s výstužou.
3. Kliknite na nosník. Panel {{ui:Vlastnosti}} vpravo zobrazuje značku jeho dielca, dĺžku rezu, hmotnosť a otvory, ktoré urobili čelné dosky.
4. Otvorte kartu {{ui:Kusovník}} dole a uvidíte každú značku dielca s počtom a hmotnosťou.

Návod [Preskúmanie ukážkového rámu](topic:sample-model) prechádza všetkým kus po kuse.

## Váš prvý model

Nový model už má mriežky 1 až 3 krát A až B po 6000 mm a dve úrovne, Level 1 na 0 a Level 2 na 4000.

1. Zvoľte {{ui:Nový}}. Ak má súčasný model zmeny, DetailCraft sa najprv opýta, či ich uložiť.
2. Nad pohľadom zvoľte {{ui:Pôdorys}}. Zoznam úrovní vedľa neho vyberie Level 1.
3. Na paneli nástrojov zvoľte {{ui:Stĺp}} alebo stlačte {{key:C}}.
4. Kliknite na priesečník mriežok A/1. Objaví sa stĺp W12x50 od Level 1 po Level 2. Riadok stavu hovorí, kam sa dostal.
5. Kliknutím na B/1, A/2 a B/2 umiestnite ďalšie tri.
6. V zozname úrovní vyberte Level 2 a potom zvoľte {{ui:Nosník}} alebo stlačte {{key:B}}.
7. Kliknite na A/1 a potom na A/2. Nosník W16x26 spojí oba vrcholy stĺpov, jeho horná hrana ocele je na úrovni.
8. Stlačením klávesu {{key:Esc}} sa vrátite k {{ui:Vybrať}} a potom kliknite na nosník.
9. V skupine {{ui:Spoje}} zvoľte {{ui:Čelné dosky}}. Oba konce dostanú skrutkovanú čelnú dosku, nosník sa skráti, aby sedel, a prvá čelná doska je teraz vybraná.
10. Znova kliknite na nosník.
11. V skupine {{ui:Výstup}} zvoľte {{ui:Dielenský výkres}}. Otvorí sa náhľad dielenského výkresu nosníka. Zvoľte {{ui:Stiahnuť PDF}}.
12. Stlačením klávesu {{key:Mod+S}} uložte model. Prehliadač stiahne `Untitled.detailcraft.json`.

Pred uložením premenujte model v poli {{ui:Názov}} vľavo hore, aby súbor a každý export nesli jeho názov.

## Kam ďalej

- [Prehliadka obrazovky](topic:workspace)
- [Nastavenie mriežok a úrovní](topic:grids-and-levels)
- [Pohyb v 3D pohľade](topic:navigate-3d), myšou, touchpadom alebo dotykovou obrazovkou
- [Ak prichádzate z iného softvéru na vypracovanie](topic:coming-from), ak poznáte veľký balík na vypracovanie
- [Používanie tohto pomocníka](common:help)
