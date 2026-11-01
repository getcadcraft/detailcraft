---
title: Prehliadka obrazovky
summary: Každá lišta, panel a karta v DetailCraft pod názvom na obrazovke a na čo slúži.
keywords: obrazovka, rozloženie, panel nástrojov, panely, vlastnosti, riadok stavu, správy, rozhranie, ui, karty
from: 454f74fd
---

DetailCraft vyplní okno prehliadača pod lištou aplikácie. Zhora nadol: panel nástrojov, potom tri stĺpce (panel {{ui:Model}}, pohľad, panel {{ui:Vlastnosti}}), potom karty správ a nakoniec riadok stavu.

## Lišta aplikácie

Úzka lišta úplne hore patrí stránke CadCraft, nie modelu. Zobrazuje názov aplikácie a verziu, odkaz na {{ui:O aplikácii DetailCraft}}, {{ui:Pomocník}} (alebo {{key:F1}}) pre tohto pomocníka, {{ui:Uložiť na offline použitie}}, tlačidlo režimu obrazovky a prepínač {{ui:Papier}} / {{ui:Model}}.

- {{ui:Uložiť na offline použitie}} uchová DetailCraft, jeho 3D pohľad a tohto pomocníka vo vašom prehliadači, aby sa otvoril bez pripojenia. Po uložení znie {{ui:Pripravené offline}}; kliknutím naň dostanete {{ui:Uložiť znova (získať najnovšiu verziu)}} alebo {{ui:Odstrániť offline kópiu}}. Pozrite [Práca offline](common:offline).
- {{ui:Papier}} dáva svetlú obrazovku a {{ui:Model}} tmavú. 3D pohľad ju hneď nasleduje; nič v modeli sa nemení.
- Tlačidlo režimu obrazovky a {{key:Ctrl+Shift+F}} prepínajú normálny režim, celú obrazovku a celú obrazovku so skrytými lištami. {{key:Ctrl+Shift+F}} používa kláves Control na každom počítači, vrátane Macu. Pri skrytých lištách ich vrátite ukázaním na horný okraj obrazovky (alebo ťuknutím naň). {{key:Esc}} opustí celú obrazovku.

## Panel nástrojov

Panel nástrojov má päť skupín. Po podržaní ukazovateľa nad tlačidlom sa zobrazí, čo robí, a jeho kláves.

| Skupina | Tlačidlá | Čo robia |
|---|---|---|
| {{ui:Súbor}} | {{ui:Nový}}, {{ui:Otvoriť}}, {{ui:Importovať IFC}}, {{ui:Uložiť}}, {{ui:Ukážka}} | Začať model, otvoriť uložený `.detailcraft.json` alebo súbor IFC, uložiť model alebo otvoriť ukážkový rám |
| {{ui:Umiestnenie}} | {{ui:Vybrať}}, {{ui:Nosník}}, {{ui:Stĺp}}, {{ui:Diagonála}}, {{ui:Doska}}, {{ui:Pätka}}, {{ui:Schodisko}} | Nástroj, ktorý použije nasledujúce kliknutie v pohľade |
| {{ui:Spoje}} | {{ui:Čelné dosky}}, {{ui:Pätná doska}} a vo {{ui:Viac}}: {{ui:Šmykové plechy}}, {{ui:Styk}}, {{ui:Styčníkový plech}}, {{ui:Podobné}} | Pridať spoj k vybranému nosníku, stĺpu alebo diagonále, alebo skopírovať vybraný spoj na každý podobný styk |
| {{ui:Úpravy}} | {{ui:Späť}}, {{ui:Znova}}, {{ui:Kopírovať}}, {{ui:Prilepiť}}, {{ui:Viac}} | Krok späť a vpred cez úpravy; skopírovať výber a prilepiť ho. {{ui:Viac}} otvorí ponuku s {{ui:Vystrihnúť}}, {{ui:Kopírovať}}, {{ui:Prilepiť}}, {{ui:Prilepiť na rovnaké miesto}}, {{ui:Duplikovať}}, {{ui:Zmazať}}, {{ui:Vybrať všetko}} a {{ui:Zrušiť výber}}, každá s klávesom |
| {{ui:Výstup}} | {{ui:IFC}}, {{ui:Súbory NC}}, {{ui:Kusovník}}, {{ui:Dielenský výkres}}, {{ui:Výkresy}} a vo {{ui:Viac}}: {{ui:Ohýbanie}}, {{ui:Správa o hmotnosti podľa fáz}}, {{ui:Súbor KISS pre softvér na výrobu}} | Stiahnuť export alebo otvoriť listy výkresov |

Tlačidlá a položky ponuky, ktoré práve nemôžu konať, sú sivé a po podržaní ukazovateľa nad nimi sa zobrazí prečo. {{ui:Čelné dosky}} potrebujú vybraný nosník, {{ui:Pätná doska}} vybraný stĺp, {{ui:Podobné}} vybraný spoj, {{ui:Dielenský výkres}} vybraný dielec profilu I alebo dosku, {{ui:Kopírovať}} vybraný prvok alebo pätku a {{ui:Prilepiť}} niečo skopírované. Pozrite [Kopírovanie, prilepenie a duplikovanie](topic:copy-paste).

## Panel Model (vľavo)

- {{ui:Model}}: {{ui:Názov}} modelu. Pomenúva každý súbor, ktorý uložíte alebo exportujete.
- {{ui:Mriežky}}: čiary mriežky a ich rozstupy a {{ui:Použiť mriežky}}. Pozrite [Nastavenie mriežok a úrovní](topic:grids-and-levels).
- {{ui:Úrovne}}: jeden riadok na úroveň (názov a výška v mm), {{ui:Pridať úroveň}} a {{ui:Použiť úrovne}}.
- {{ui:Vlastný profil}}: vytvorte si vlastný parametrický prierez. Zatvorené, kým ho neotvoríte.
- {{ui:Značky dielcov}}: každá značka dielca v modeli s jej profilom, dĺžkou a počtom. Kliknutím na značku vyberiete prvý dielec s ňou.

{{ui:Mriežky}}, {{ui:Úrovne}} a {{ui:Vlastný profil}} sa dajú zbaliť: kliknite na ich nadpisy.

## Pohľad (v strede)

Pohľad zobrazuje model v 3D. Nad ním má lišta pohľadu tri tlačidlá a zoznam:

- {{ui:3D}}: voľne otáčať model.
- {{ui:Pôdorys}}: pozrieť sa priamo zhora na jednu úroveň. Vedľa tlačidiel sa objaví zoznam úrovní. Všetko, čo je viac než 1,5 m nad úrovňou, sa odreže, aby ste úroveň jasne videli a mohli na ňu klikať.
- {{ui:Pohľad}}: pozrieť sa priamo na jednu označenú čiaru mriežky (Mriežka A, Mriežka B …). Objaví sa zoznam označených mriežok. Zobrazí sa iba oceľ do 1 m od tejto čiary.
- Tlačidlo prispôsobenia na pravom konci lišty pohľadu mení zväčšenie tak, aby bol vidieť celý model.

Malé bodky označujú každý priesečník mriežok na každej úrovni. Kým je zapnutý umiestňovací nástroj, rozsvieti sa bodka najbližšia k ukazovateľu a riadok stavu ju pomenuje, napríklad „A/2 na Level 1“. Farby odlišujú druhy prvkov: stĺpy, nosníky, diagonály a dosky majú každé vlastnú farbu, skrutky a tyče inú, pätky sú priehľadné a výstuž je nakreslená ako rúrky. Otvory sa zobrazujú ako tmavé zátky; vyrezania sú vyrezané.

Ako otáčať, posúvať a meniť zväčšenie: [Pohyb v 3D pohľade](topic:navigate-3d).

Keď je model prázdny, pohľad zobrazuje krátky zoznam „Začnite model“. Uložený súbor modelu môžete tiež pustiť kdekoľvek na pohľad a otvoriť ho.

## Panel Vlastnosti (vpravo)

To, čo tento panel zobrazuje, závisí od toho, čo robíte, a jeho nadpis hovorí čo: „Model“, „Umiestniť nosník“, „Nosník b2“, „Spoj s čelnou doskou“, „Pätná doska“, „Pätka F1“, „Vybrané: 3“ alebo „Prilepiť“.

- **Nič nie je vybrané:** zhrnutie modelu (prvky, spoje, pätky, dielce, značky, skrutky, hmotnosť ocele a výstuže, mriežky, úrovne).
- **Zapnutý umiestňovací nástroj:** voľby pre nasledujúci kus (profil, materiál, poloha, otočenie a pri stĺpoch {{ui:Až do}}), zhrnutie zvoleného profilu a formulár {{ui:Pridať podľa mriežky}} na umiestňovanie bez klikania v pohľade.
- **Vybraný prvok:** jeho názov, profil, materiál, poloha, otočenie, súradnice jeho dvoch koncov, jeho značky, dĺžka rezu a hmotnosť, jeho otvory a vyrezania a tlačidlá pre spoje, jeho dielenský výkres a {{ui:Zmazať}}.
- **Vybraný spoj:** každé nastavenie dosky, skrutiek a zvaru, skrutky a zvar, ktoré vytvára, jeho upozornenia a {{ui:Použiť na podobné}}.
- **Vybraná pätka:** jej poloha a veľkosť, spodná sieť, štartovacie prúty a značky prútov, ktoré používa.
- **Vybraných viac vecí:** koľko prvkov každého druhu, spojov a pätiek, ich hmotnosť ocele a {{ui:Kopírovať}}, {{ui:Duplikovať}} a {{ui:Zmazať}}.
- **Prilepenie:** čo je v schránke, a formuláre na prilepenie so zadaným posunom alebo na priesečník mriežok, ktorý vyberiete zo zoznamov.

Číselné polia sa prejavia po stlačení klávesu {{key:Enter}} alebo po opustení poľa. Každá zmena je jeden krok, ktorý môžete vrátiť.

## Karty správ (dole)

- {{ui:Problémy}}: všetko, čo DetailCraft nemohol vytvoriť alebo chce, aby ste skontrolovali, s tlačidlom {{ui:Vybrať}} na každom riadku. Karta zobrazuje počet v zátvorkách.
- {{ui:Kusovník}}: dielce, zostavy a skrutky a kotviace tyče s hmotnosťami a odkazom {{ui:Stiahnuť CSV}}. Kliknutím na značku dielca ho vyberiete.
- {{ui:Výkaz ohýbania}}: každá značka prúta v každej pätke s odkazom {{ui:Stiahnuť CSV}}.

Pri zameranej karte presúvajú medzi kartami {{key:Left}} a {{key:Right}}.

## Riadok stavu

Lišta pozdĺž spodného okraja má tri časti: priesečník mriežok pod ukazovateľom pri umiestňovaní, poslednú správu (čo sa práve stalo alebo prečo bolo niečo odmietnuté) a priebežné súčty dielcov, skrutiek, hmotnosti ocele a hmotnosti výstuže. Keď sa zdá, že akcia nerobí nič, prečítajte si najprv správu tu.

Názov karty prehliadača začína bodkou (•), kým má model zmeny, ktoré ste neuložili.

## Na úzkej obrazovke

Pod šírkou asi 760 pixelov sa stĺpce skladajú pod seba: panel nástrojov, pohľad, riadok stavu, {{ui:Vlastnosti}}, karty správ a nakoniec panel {{ui:Model}}. Na ne sa dostanete posúvaním stránky. DetailCraft je rozložený pre obrazovku počítača alebo notebooku; telefón funguje na prezeranie, nie na vypracovanie.
