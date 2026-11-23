---
title: Co je nového ve verzi 0.9 (starší)
summary: Rozměry oceli podle Blue Book pro Spojené království a nerovnoramenné úhelníky, dílenské výkresy každé části v jedné sadě PDF, Moje profily pro vlastní průřezy, P-Delta a vlastní frekvence, zatížení větrem podle ASCE 7, seizmická lokalita a kombinace a živé kurzory se sledováním.
keywords: co je nového 0.9, starší verze, co je nového, poznámky k vydání, seznam změn, 0.9, ocel pro Spojené království, blue book, ub, uc, pfc, shs, rhs, chs, nerovnoramenný úhelník, dílenský výkres, sada listů, značka dílu, pdf, moje profily, vlastní profil, p-delta, druhý řád, vlastní frekvence, konečné prvky, modální hmotnost, zatížení větrem, asce 7, seizmické, třída lokality, usgs, kombinace zatížení, lrfd, asd, živě, kurzory, sledování, lidé, popisky, co je nového, poznámky k vydání, změny, 0.8, 0.8.1, verze, nové funkce, montáž, jeřáb, tabulka nosnosti, film, autopilot, spoje, výztuž, hustota výztuže, základy, patka, sedání, rámování, dřevo, lehká tenkostěnná konstrukce, řezný seznam, zhotovitelnost, přístup ke svaru, dodavatel, zásoby, dodací lhůta, co selže jako první, živě, beton, seizmika, deska, jazyky, asistent
from: ab0c7f05
---

Toto se změnilo v DetailCraftu 0.9 oproti verzi 0.8.1. Verze 0.9 přináší rozměry oceli pro Spojené království, dílenský výkres pro každou část najednou, větší kartu {{ui:Analýza}} pro rámy a zobrazení kurzorů ostatních, když pracujete společně.

## Novinky

### Ocel pro Spojené království a dílenské výkresy

- **Rozměry oceli pro Spojené království.** Seznamy profilů nyní obsahují 976 rozměrů z Blue Book (Steel for Life): UB, UC, PFC, EA, UEA, CHS, SHS a RHS; za studena tvarované duté průřezy jsou vedeny odděleně (jejich názvy začínají CF). Názvy se zapisují nejdřív podle řady, například UB305x165x40 nebo SHS100x100x5.0, a funguje i zápis tak, jak je uvádějí výkresy: 305x165x40 UB, L100x100x10, SHS100x5. Viz [Katalog profilů](topic:profile-catalog).
- **Nerovnoramenné úhelníky.** Úhelníky UEA si při importu a exportu IFC i v souborech NC zachovají obě ramena a zrcadlení otočí díl z konce na konec.
- **Všechny dílenské výkresy najednou.** Když nic není vybráno, vyberte {{ui:Dílenský výkres}} ve skupině {{ui:Výstup}}. Okno vypíše každou značku dílu, náhled libovolné z nich a {{ui:Stáhnout vše}} uloží jedno PDF se stránkou pro každou značku, každou s nadpisem "List 3 z 42". {{ui:Stáhnout PDF}} uloží ten, který právě vidíte. Nyní vznikají listy i pro U-profily, úhelníky a duté průřezy. Viz [Vytvoření dílenských výkresů](topic:shop-drawings).
- **Moje profily.** Vlastní profil lze nyní uchovat pro každý nový model. Ve formuláři Vlastní profil nechte zaškrtnuté {{ui:Ponechat v seznamu Moje profily}}; seznam {{ui:Moje profily}} pod ním má {{ui:Ponechat}}, {{ui:Použít zde}} a {{ui:Odebrat}}. Seznam se ukládá v tomto prohlížeči (až 200 položek), ne ve vašem účtu. Viz [Plechy a profily](topic:plates-and-profiles).

### Analýza

- **Účinky druhého řádu (P-Delta).** Zaškrtněte {{ui:Účinky druhého řádu (P-Delta)}} vedle tlačítka Spustit na kartě {{ui:Analýza}} a normálové síly budou působit na deformovaný rám. Plechy a tuhé podlahy zůstávají v prvním řádu, s varováním. Viz [Síly, reakce a průhyby](topic:frame-analysis).
- **Vlastní frekvence.** Blok {{ui:Konečné prvky: vlastní frekvence}} pod výsledky najde nejnižší tvary stejného modelu s periodou a efektivní modální hmotností a zobrazí tvar na modelu. Viz [Síly, reakce a průhyby](topic:frame-analysis).
- **Zatížení větrem a seizmická lokalita.** Tři nové bloky na kartě {{ui:Analýza}}: {{ui:Zatížení větrem (ASCE 7, směrová metoda)}}, {{ui:Seizmická lokalita a systém (ASCE 7)}} a {{ui:Kombinace zatížení podle ASCE 7}}. Viz [Vítr, seizmická lokalita a kombinace podle ASCE 7](topic:wind-seismic-combinations).

### Společná práce

- **Kurzory a jména.** V relaci živé spolupráce se ukazatel každého člověka kreslí v modelu se jménem a barvou a to, co vybral, dostane rámeček.
- **Sledování osoby.** V relaci otevřete {{ui:Účastníci}} a u jména zvolte {{ui:Sledovat}}; váš pohled se pohybuje s jejím. Hostitel může zvolit {{ui:Požádat všechny, aby mě sledovali}}. Viz [Sledování osoby v živé spolupráci](topic:follow-in-live).

### Ve všech aplikacích

- Popisky při najetí jsou Bootstrap tooltipy, úvodní karta tipů má tlačítko pro zavření, pruhy karet se posouvají do strany, když se nevejdou, a název karty prohlížeče uvádí otevřený dokument, za nímž následuje DetailCraft a CadCraft.

## Opraveno

- Vlastní profil se ztrácel, když jste začali nový model.
- U-profily, úhelníky a duté průřezy chyběly v sadě dílenských výkresů.

## Otevřeně o omezeních

- Bloky větru, seizmiky a konečných prvků jsou pomůcky pro kontrolu. Výsledky kontroluje váš inženýr; nejde o normovou kontrolu. Vyhledávání USGS bylo ověřeno na náhradním zdroji, ne na živé službě.
- Konečné prvky a P-Delta byly ověřeny proti ručním a uzavřeným řešením, ne proti skutečné budově. Analýza vzpěru není zpracována.
- Zatím žádný britský výrobce nevyzkoušel rozměry pro Spojené království a soubory NC pro nerovnoramenné úhelníky zatím na stroji neběžely.
- Sada dílenských výkresů je pouze ve formátu PDF.
- Jazyky jiné než angličtina jsou strojové koncepty.
- Instalátory pro Windows nejsou podepsány kódem (Další informace, pak Přesto spustit); diskový obraz pro macOS není notarizován (pravým tlačítkem, pak Otevřít).

Starší změny jsou v poznámkách k verzím 0.8 a 0.8.1 níže na této stránce.

## Dříve: 0.8 a 0.8.1

Toto se změnilo v DetailCraftu 0.8 (1. listopadu 2026) a 0.8.1 (2. listopadu 2026) oproti verzi 0.7. Verze 0.7 kontrolovala ocelové prvky; verze 0.8 plánuje zdvihy, navrhuje spoje, kontroluje základy a výztuž a rámuje dřevěné a lehké tenkostěnné stěny, podlahy a střechy.

### Novinky

**Montáž**

- **Plán montáže a film.** Na kartě {{ui:Montáž}} popište jeřáb (kde stojí, jeho nejvyšší háček, závěsné prostředky, které nejsou v tabulce nosnosti) a zapište řádky jeho tabulky nosnosti. DetailCraft zvedá model po jednotlivých sestavách, ve fázovém pořadí a vrstvu po vrstvě, a každý zdvih kontroluje podle tabulky při jeho vyložení a podle rezervy, kterou nastavíte. {{ui:Uložit film}} zapíše jeden soubor HTML, který se přehraje offline v libovolném prohlížeči, i v telefonu. Zdvihy nad tabulkou, za ní nebo příliš vysoko jsou v {{ui:Problémy}}. Jde o plán z vašich čísel, ne o plán zdvihů. Viz [Plán montáže a film](topic:erection-movie).

**Spoje**

- **Autopilot spojů.** Karta {{ui:Autopilot}} prohlédne každý uzel bez spoje a navrhne ho podle průřezů: patní plechy, smykové plechy, čelní desky u nosníků, které označíte jako momentové, spoje nosníků a ztužující plechy. Zadejte rovnoměrné zatížení nebo jednu koncovou posouvající sílu a počet šroubů se řídí návrhovou pevností šroubu. {{ui:Přidat všechny}} přidá návrhy jako jeden krok zpět. Jde o výchozí hodnoty k posouzení, ne o návrh spoje.
- **Kontroly zhotovitelnosti.** {{ui:Problémy}} upozorní na šroub, který klíč nedosáhne, na šrouby příliš blízko u sebe pro nástrčku, na koutové svary mimo jejich mezní velikosti a na duté průřezy, které zadržují vodu. Nový je přístup ke svarům: obvodový koutový svar, ke kterému nedosáhne hořák svářeče, je uveden s překážkou a podílem dotčeného svaru. Viz [Kontroly zhotovitelnosti](topic:constructability).

**Základy a výztuž**

- **Kontroly základů.** Karta {{ui:Základy}} kontroluje patky, spojené patky a plošné základy na zemině, kterou popíšete: únosnost, posun a překlopení od provozních zatížení; ohyb, smyk, protlačení, kotvení a minimální výztuž od návrhových zatížení (ACI 318-19). Sloup u okraje nebo rohu se kontroluje s průřezem oříznutým hranou patky. Sedání vychází z modulu zeminy, pružně uložená deska se řeší na pružinách z modulu podloží a skupiny pilot a opěrné zdi mají vlastní panely. Zatížení sloupů lze zadat ručně nebo převzít z {{ui:Analýza}}. Viz [Kontroly základů](topic:foundation-checks).
- **Mapa zahuštění výztuže.** Karta {{ui:Hustota výztuže}} vykreslí tepelnou mapu každé patky při pohledu shora: kde pruty nechávají příliš málo místa, aby se beton dostal dolů, podle pravidla volné vzdálenosti a případně podle největšího kameniva a hlavice vibrátoru. Viz [Mapa zahuštění výztuže](topic:rebar-congestion).

**Rámování a dodávky**

- **Dřevěné a lehké tenkostěnné rámování.** Karta {{ui:Rámování}} sestaví panely stěn, podlah a střech ze všech dílů, s řezným seznamem, materiálem k nákupu a dílenským výkresem v měřítku. {{ui:Umístit jako pruty}} umístí díly do modelu a {{ui:Listy PDF}} uloží jeden list pro každý panel. Rozměry, rozteče a překlady jsou vaše: DetailCraft nekontroluje, zda unesou zatížení. Viz [Panely dřevěného a lehkého tenkostěnného rámování](topic:framing-panels).
- **Zásoby dodavatele a dodací lhůty.** Karta {{ui:Dodávky}} načte seznam zásob dodavatele (CSV) a u každého průřezu, který řezný seznam kupuje, ukáže, zda je na skladě dost a jak dlouho se čeká. Nedostatky a opožděné průřezy jsou v {{ui:Problémy}}. Nic se neobjednává. Viz [Zásoby dodavatele a dodací lhůty](topic:supplier-stock).

**Analýza a návrh**

- **Co selže jako první?** Na kartě {{ui:Analýza}} tlačítko najde rozhodující kombinaci únosnosti, nejslabší prvek, o kolik mohou zatížení narůst, než první prvek dosáhne svého limitu, a nejslabší čelní nebo smykový plech, je-li známa smyková pevnost jeho šroubů. Nejdřív potřebuje kombinace a návrhovou normu. Otlačení, smyk bloku, svary a páčení se nekontrolují. Připojený asistent se může zeptat na totéž.
- **Živě.** Zaškrtněte {{ui:Živě: po každé úpravě řešit znovu}} a rám se po každé úpravě přepočítá.
- **Více o betonu.** Štíhlý sloup v rámu bez posunu se navrhuje na zvětšený moment (ACI 318-19 6.6.4.5). Seizmickou periodu lze převzít z analýzy Rayleighovou metodou. Deska z plechů dostává výztuž každé vrstvy z jejích momentů a z jednosměrného smyku. Viz [Kontrola betonových prvků a tvorba seizmických zatížení](topic:concrete-and-seismic).
- **K posouzení inženýrem.** Výsledky základů, betonu a Co selže jako první jsou pomůcky. Zatížení větrem není zpracováno.

**Ve všech aplikacích**

- **Jazyky.** Nápověda je ve 54 jazycích. Jazyky jiné než angličtina jsou strojové koncepty, dokud je nepřečte rodilý mluvčí; deset je nových (litevština, lotyština, bosenština, maráthština, telugština, albánština, afrikánština, filipínština, svahilština, uzbečtina).
- **Řádky panelu nástrojů.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Řádky panelu nástrojů}} volí zalomení, 2 řádky nebo 1 řádek. Panel, který se již vejde, zůstane beze změny; ostatní se posouvají do strany.
- **Mřížka vlastností.** Pole patky používají sdílenou mřížku: sbalitelné kategorie a kompaktní hustotu. Zadaný výpočet, například 2*450, funguje dál.
- **Vstupní zařízení.** Touchpad, pero, 3D myš, ovladač a MIDI mohou aplikace ovládat. Viz [Pohyb ve 3D](topic:navigate-3d).
- **Panel problémů.** Varování nových kontrol výše se objevují ve stejném panelu {{ui:Problémy}} jako dříve.
- **Připojte svého asistenta AI.** Váš vlastní asistent připojený přes CadCraft Studio funguje se všemi osmi aplikacemi a vidí jen to, co povolíte. Připojení jedním kliknutím, hostovaný konektor a váš vlastní klíč API ve Studiu ještě nejsou hotové. Viz [Použití DetailCraftu s AI asistentem](topic:use-with-ai-assistants).

### Opraveno ve verzi 0.8.1

- **Jazyky ve Studiu.** Studio a zabalená vydání mohou přepínat jazyk za běhu; dříve byla jen v angličtině. Zatím není otestováno na každé platformě: napište nám, pokud se jazyk nemění.
- **Výběr křížícím oknem.** Instalátory 0.8.1 již mají správné chování výběru oknem z webové verze 0.8; starší instalátor ho neměl.
- **Tablety na výšku.** Volná výška mřížky připadá plátnu a rozvržení listu začíná u 760 px nebo menší.

### Ještě není v této verzi

- **Odeslání NC na stroj** není vydáno.
- **Zatížení větrem** pro beton není zpracováno a kontroly betonu a základů posoudí inženýr.
- **Podepisování kódu.** Instalátory pro Windows a soubor macOS .dmg nejsou podepsány, takže Windows může varovat a macOS žádá o pravé tlačítko, pak Otevřít.

Starší změny jsou v [Co je nového ve verzi 0.7](topic:whats-new-0-7).
