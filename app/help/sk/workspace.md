---
title: Prehliadka obrazovky
summary: Každý pruh, panel a karta v DetailCraft podľa názvu na obrazovke a na čo slúži.
keywords: obrazovka, rozloženie, panel nástrojov, panely, vlastnosti, stavový riadok, výkazy, rozhranie, ui, karty
from: 94f81073
---

DetailCraft vypĺňa okno prehliadača pod lištou aplikácie. Zhora nadol: panel nástrojov, potom tri stĺpce ({{ui:Model}} panel, zobrazenie, panel {{ui:Vlastnosti}}), potom karty výkazov, potom stavový riadok.

## Lišta aplikácie

Štíhla lišta úplne hore patrí stránke CadCraft, nie modelu. Zobrazuje názov a verziu aplikácie, odkaz na {{ui:O aplikácii DetailCraft}}, {{ui:Pomocník}} (alebo {{key:F1}}) pre túto pomoc, {{ui:Uložiť na offline použitie}}, tlačidlo režimu obrazovky a prepínač {{ui:Papier}} / {{ui:Model}}.

- {{ui:Uložiť na offline použitie}} ponechá DetailCraft, jeho 3D zobrazenie a túto pomoc vo vašom prehliadači, takže sa otvorí bez pripojenia. Po uložení zobrazí {{ui:Pripravené offline}}; potom naň kliknite pre {{ui:Uložiť znova (získať najnovšiu verziu)}} alebo {{ui:Odstrániť offline kópiu}}. Pozri [Práca offline](common:offline).
- {{ui:Papier}} dáva svetlú obrazovku a {{ui:Model}} tmavú. 3D zobrazenie sa hneď prispôsobí; nič vo vašom modeli sa nemení.
- Tlačidlo režimu obrazovky a {{key:Ctrl+Shift+F}} prepínajú medzi normálnym režimom, celou obrazovkou a celou obrazovkou so skrytými lištami. {{key:Ctrl+Shift+F}} používa kláves Control na každom počítači vrátane Macu. Keď sú lišty skryté, ukážte na horný okraj obrazovky (alebo ho klepnite), aby sa vrátili. {{key:Esc}} ukončí celú obrazovku.

## Panel nástrojov

Panel nástrojov má päť skupín. Ukážte na tlačidlo, aby sa zobrazilo, čo robí, a jeho kláves.

| Skupina | Tlačidlá | Čo robia |
|---|---|---|
| {{ui:Súbor}} | {{ui:Nový}}, {{ui:Otvoriť}}, {{ui:Importovať IFC}}, {{ui:Uložiť}}, {{ui:Ukážka}} | Začnú model, otvoria uložený `.detailcraft.json` alebo súbor IFC, uložia model alebo otvoria ukážkovú rámovú konštrukciu |
| {{ui:Umiestnenie}} | {{ui:Vybrať}}, {{ui:Nosník}}, {{ui:Stĺp}}, {{ui:Diagonála}}, {{ui:Doska}}, {{ui:Pätka}}, {{ui:Schodisko}} | Nástroj, ktorý použije ďalšie kliknutie v zobrazení |
| {{ui:Spoje}} | {{ui:Čelné dosky}}, {{ui:Pätná doska}}, a v {{ui:Viac}}: {{ui:Šmykové plechy}}, {{ui:Styk}}, {{ui:Styčníkový plech}}, {{ui:Podobné}} | Pridajú spoj k vybranému nosníku, stĺpu alebo diagonále, alebo skopírujú vybraný spoj na každý podobný uzol |
| {{ui:Úpravy}} | {{ui:Späť}}, {{ui:Znova}}, {{ui:Kopírovať}}, {{ui:Prilepiť}}, {{ui:Viac}} | Krok späť a dopredu v úpravách; skopírujte výber a vložte ho. {{ui:Viac}} otvorí ponuku s {{ui:Vystrihnúť}}, {{ui:Kopírovať}}, {{ui:Prilepiť}}, {{ui:Prilepiť na rovnaké miesto}}, {{ui:Duplikovať}}, {{ui:Zmazať}}, {{ui:Vybrať všetko}} a {{ui:Zrušiť výber}}, každé s klávesom |
| {{ui:Výstup}} | {{ui:IFC}}, {{ui:Súbory NC}}, {{ui:Kusovník}}, {{ui:Dielenský výkres}}, {{ui:Výkresy}}, a v {{ui:Viac}}: {{ui:Ohýbanie}}, {{ui:Správa o hmotnosti podľa fáz}}, {{ui:Súbor KISS pre softvér na výrobu}} | Stiahnu export alebo otvoria listy výkresov |

Tlačidlá a položky ponuky, ktoré teraz nemôžu fungovať, sú sivé a nabehnutím kurzora na ne sa zobrazí dôvod. {{ui:Čelné dosky}} vyžaduje vybraný nosník, {{ui:Pätná doska}} vybraný stĺp, {{ui:Podobné}} vybraný spoj, {{ui:Dielenský výkres}} model s dielmi, {{ui:Kopírovať}} vybraný prvok alebo pätku a {{ui:Prilepiť}} niečo skopírované. Pozri [Kopírovanie, prilepenie a duplikovanie](topic:copy-paste).

## Panel Model (vľavo)

- {{ui:Model}}: {{ui:Názov}} modelu. Pomenúva každý súbor, ktorý uložíte alebo exportujete.
- {{ui:Mriežky}}: mriežkové línie a ich rozstupy, a {{ui:Použiť mriežky}}. Pozri [Nastavenie mriežok a úrovní](topic:grids-and-levels).
- {{ui:Úrovne}}: jeden riadok na úroveň (názov a výška v mm), {{ui:Pridať úroveň}} a {{ui:Použiť úrovne}}.
- {{ui:Vlastný profil}}: vytvorte si vlastný parametrický prierez. Zatvorený, kým ho neotvoríte.
- {{ui:Značky dielcov}}: každá značka dielca v modeli s jeho profilom, dĺžkou a počtom. Kliknutím na značku vyberiete prvý dielec s ňou.

{{ui:Mriežky}}, {{ui:Úrovne}} a {{ui:Vlastný profil}} sa dajú zbaliť: kliknite na ich nadpisy.

## Zobrazenie (v strede)

Zobrazenie ukazuje model v 3D. Nad ním má lišta zobrazenia tri tlačidlá a zoznam:

- {{ui:3D}}: voľne sa otáčajte okolo modelu.
- {{ui:Pôdorys}}: pozrite priamo zhora na jednu úroveň. Vedľa tlačidiel sa objaví zoznam úrovní. Všetko viac ako 1.5 m nad úrovňou je odrezané, aby ste úroveň videli a dali sa na ňu jasne kliknúť.
- {{ui:Pohľad}}: pozrite priamo na jednu písmenovú mriežkovú líniu (Mriežka A, Mriežka B …). Objaví sa zoznam písmenových mriežok. Zobrazí sa len oceľ do 1 m od tejto línie.
- Tlačidlo prispôsobenia na pravom konci lišty zobrazenia priblíži tak, aby bol vidieť celý model.

Malé bodky označujú každý priesečník mriežok na každej úrovni. Keď je zapnutý nástroj na umiestňovanie, bodka najbližšie ku kurzoru sa rozsvieti a stavový riadok ju pomenuje, napríklad "A/2 na úrovni 1". Farby rozlišujú typy prvkov: stĺpy, nosníky, diagonály a dosky majú každý svoju farbu, skrutky a tyče inú, pätky sú priehľadné a výstuž je nakreslená ako trubice. Otvory sa zobrazujú ako tmavé zátky; výrezy sú vyrezané.

Ako otáčať, posúvať a priblížiť: [Pohyb v 3D zobrazení](topic:navigate-3d).

Keď je model prázdny, zobrazenie ukazuje krátky zoznam "Začať model". Uložený súbor modelu môžete tiež pustiť kamkoľvek na zobrazenie a otvoríte ho.

## Panel Vlastnosti (vpravo)

Čo tento panel ukazuje, závisí od toho, čo robíte, a jeho nadpis to hovorí: "Model", "Umiestniť nosník", "Nosník b2", "Spoj čelnou doskou", "Pätná doska", "Pätka F1", "3 vybrané" alebo "Prilepiť".

- **Nič nie je vybrané:** súhrn modelu (prvky, spoje, pätky, dielce, značky, skrutky, hmotnosť ocele a výstuže, mriežky, úrovne).
- **Nástroj na umiestnenie zapnutý:** možnosti ďalšieho prvku (profil, materiál, poloha, otočenie, a pri stĺpoch {{ui:Až do}}), súhrn zvoleného profilu a formulár {{ui:Pridať podľa mriežky}} na umiestnenie bez klikania v zobrazení.
- **Vybraný prvok:** jeho názov, profil, materiál, poloha, otočenie, súradnice oboch koncov, jeho značky, rezaná dĺžka a hmotnosť, jeho otvory a výrezy, a tlačidlá pre spoje, jeho dielenský výkres a {{ui:Zmazať}}.
- **Vybraný spoj:** každé nastavenie plechu, skrutiek a zvaru, skrutky a zvar, ktoré vytvára, jeho upozornenia a {{ui:Použiť na podobné}}.
- **Vybraná pätka:** jej poloha a veľkosť, spodná sieťka, začínajúce prúty a značky výstuže, ktoré používa.
- **Viacero vybraných vecí:** koľko prvkov každého typu, spojov a pätiek, ich hmotnosť ocele, a {{ui:Kopírovať}}, {{ui:Duplikovať}} a {{ui:Zmazať}}.
- **Prilepovanie:** čo je v schránke, a formuláre na prilepenie podľa zadaného posunu alebo na priesečník mriežok, ktorý vyberiete zo zoznamov.

Číselné polia sa použijú po stlačení {{key:Enter}} alebo po opustení poľa. Každá zmena je jeden krok, ktorý môžete vrátiť späť.

## Karty výkazov (dole)

- {{ui:Problémy}}: všetko, čo DetailCraft nemohol vytvoriť alebo čo chce, aby ste preverili, s tlačidlom {{ui:Vybrať}} na každom riadku. Karta ukazuje počet v zátvorke.
- {{ui:Kusovník}}: súčiastky, zostavy, skrutky a kotvy s hmotnosťami a odkazom {{ui:Stiahnuť CSV}}. Kliknutím na značku dielca ho vyberiete.
- {{ui:Výkaz ohýbania}}: každá značka výstuže v každej pätke, s odkazom {{ui:Stiahnuť CSV}}.

Keď je karta zameraná, {{key:Left}} a {{key:Right}} prechádzajú medzi kartami.

## Stavový riadok

Lišta pozdĺž spodku má tri časti: priesečník mriežok pod kurzorom pri umiestňovaní, posledná správa (čo sa práve stalo alebo prečo bolo čosi odmietnuté) a priebežné súčty súčiastok, skrutiek, hmotnosti ocele a hmotnosti výstuže. Keď sa zdá, že akcia nerobí nič, najprv si prečítajte správu tu.

Názov karty prehliadača sa začína bodkou (•), keď má model zmeny, ktoré ste neuložili.

## Na úzkej obrazovke

Pod šírkou asi 760 pixelov sa stĺpce zoradia pod seba: panel nástrojov, zobrazenie, stavový riadok, {{ui:Vlastnosti}}, karty výkazov a naposledy panel {{ui:Model}}. Posúvajte stránku, aby ste sa k nim dostali. DetailCraft je rozložený pre obrazovku stolného počítača alebo notebooku; telefón sa hodí na prezeranie, nie na detailovanie.
