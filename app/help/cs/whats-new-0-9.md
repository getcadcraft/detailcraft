---
title: Co je nového ve verzi 0.9
summary: Britské ocelové profily podle Blue Book a nerovnoramenné úhelníky, výkresy dílny pro každý díl v jedné sadě PDF, Moje profily pro vlastní průřezy, P-Delta a vlastní frekvence, zatížení větrem podle ASCE 7, seizmická lokalita a kombinace, a živé kurzory se sledováním.
keywords: co je nového, poznámky k vydání, changelog, 0.9, britská ocel, blue book, ub, uc, pfc, shs, rhs, chs, nerovnoramenný úhelník, výkres dílny, výkresy dílny, sada listů, označení dílu, pdf, moje profily, vlastní profil, p-delta, druhý řád, vlastní frekvence, konečné prvky, modální hmotnost, zatížení větrem, asce 7, seizmické, třída lokality, usgs, kombinace zatížení, lrfd, asd, živě, kurzory, sledování, lidé, popisky, změny, 0.8, 0.8.1, verze, nové funkce, montáž, jeřáb, diagram nosnosti, film, autopilot, spoje, výztuž, hustota výztuže, základy, patka, deska, sedání, rámování, dřevo, lehké ocelové konstrukce, seznam řezů, stavitelnost, přístup ke svaru, dodavatel, sklad, dodací lhůta, co selže první, beton, deska, jazyky, asistent
from: 4c95a2de
---

Toto se změnilo ve verzi DetailCraft 0.9 oproti verzi 0.8.1. Verze 0.9 přináší britské ocelové profily, výkres dílny pro každý díl najednou, větší kartu {{ui:Analýza}} pro rámy a pohled na kurzory ostatních, když pracujete společně.

## Nové

### Britská ocel a výkresy dílny

- **Britské ocelové profily.** Seznamy profilů nyní obsahují 976 velikostí z Blue Book Steel for Life: UB, UC, PFC, EA, UEA, CHS, SHS a RHS, přičemž tenkostěnné za studena tvarované duté profily jsou odděleny (jejich názvy začínají CF). Názvy se píší nejprve podle řady, například UB305x165x40 nebo SHS100x100x5.0, a psaní tak, jak je uvádějí výkresy, funguje také: 305x165x40 UB, L100x100x10, SHS100x5. Viz [Katalog profilů](topic:profile-catalog).
- **Nerovnoramenné úhelníky.** Úhelníky UEA si zachovají obě ramena při importu a exportu IFC i v souborech NC a zrcadlení otočí kus z konce na konec.
- **Všechny výkresy dílny najednou.** Při nevybraných prvcích zvolte {{ui:Dílenský výkres}} ve skupině {{ui:Výstup}}. Okno vypíše každé označení dílu, zobrazí náhled kteréhokoli z nich a {{ui:Stáhnout vše}} uloží jedno PDF se stránkou pro každé označení, každá nadepsaná „List 3 z 42“. {{ui:Stáhnout PDF}} uloží list, který právě vidíte. Žlaby, úhelníky a duté profily nyní také dostanou listy. Viz [Vytváření výkresů dílny](topic:shop-drawings).
- **Moje profily.** Vlastní profil lze nyní ponechat pro každý nový model. Ve formuláři Vlastní profil nechte zaškrtnuté {{ui:Ponechat v Mých profilech}}; seznam {{ui:Moje profily}} pod ním má {{ui:Ponechat}}, {{ui:Použít zde}} a {{ui:Odebrat}}. Seznam je uložen v tomto prohlížeči (až 200 položek), nikoli ve vašem účtu. Viz [Plechy a profily](topic:plates-and-profiles).

### Analýza

- **Druhý řád (P-Delta).** Zaškrtněte {{ui:Druhý řád (P-Delta)}} vedle {{ui:Spustit}} na kartě {{ui:Analýza}} a normálové síly budou působit na deformovaný rám. Plechy a tuhé podlahy zůstanou v prvním řádu s varováním. Viz [Síly, reakce a průhyby](topic:frame-analysis).
- **Vlastní frekvence.** Blok {{ui:Konečné prvky: vlastní frekvence}} pod výsledky najde nejnižší tvary stejného modelu s periodou a efektivní modální hmotností a ukáže tvar na modelu. Viz [Síly, reakce a průhyby](topic:frame-analysis).
- **Zatížení větrem a seizmická lokalita.** Tři nové bloky na kartě {{ui:Analýza}}: {{ui:Zatížení větrem (směrová metoda ASCE 7)}}, {{ui:Seizmická lokalita a systém (ASCE 7)}} a {{ui:Kombinace zatížení podle ASCE 7}}. Viz [Vítr, seizmická lokalita a kombinace podle ASCE 7](topic:wind-seismic-combinations).

### Společná práce

- **Kurzory a jména.** V živé relaci je ukazatel každého člověka vykreslen v modelu s jeho jménem a barvou a to, co vybral, je označeno rámečkem.
- **Sledování člověka.** Otevřete {{ui:Lidé}} v relaci a u jména zvolte {{ui:Sledovat}}; váš pohled se posouvá spolu s jeho. Hostitel může zvolit {{ui:Požádat všechny, aby mě sledovali}}. Viz [Sledování člověka v živé relaci](topic:follow-in-live).

### Ve všech aplikacích

- Popisky jsou Bootstrap tooltips, karta úvodního tipu má tlačítko zavřít, lišty karet se posouvají do stran, když se nevejdou, a název karty prohlížeče uvádí otevřený dokument, za ním DetailCraft a CadCraft.

## Opraveno

- Vlastní profil se ztratil, když jste začali nový model.
- Žlaby, úhelníky a duté profily chyběly v sadě výkresů dílny.

## Upřímně o omezeních

- Bloky pro vítr, seizmiku a konečné prvky jsou pomůcky pro kontrolu. Výsledky schvaluje váš inženýr; nejsou to kontrola podle normy. Vyhledávání USGS bylo testováno na náhradní službě, ne na živé službě.
- Konečné prvky a P-Delta byly ověřeny proti ručním a uzavřeným řešením, ne proti skutečné budově. Analýza vzpěrné stability není hotová.
- Žádná britská výrobna zatím profily UK nevyzkoušela a soubory NC pro nerovnoramenné úhelníky zatím nebyly spuštěny na stroji.
- Sada výkresů dílny je pouze ve formátu PDF.
- Jazyky jiné než angličtina jsou strojové koncepty.
- Instalátory pro Windows nejsou podepsané kódem (Více informací, pak Spustit přesto); disková kopie pro macOS není notarizovaná (pravé tlačítko, pak Otevřít).

Dřívější změny jsou v poznámkách k verzím 0.8 a 0.8.1 níže na této stránce.

## Dříve: 0.8 a 0.8.1

Toto se změnilo ve verzi DetailCraft 0.8 (1. listopadu 2026) a 0.8.1 (2. listopadu 2026) oproti verzi 0.7. Verze 0.7 kontrolovala ocelové pruty; verze 0.8 plánuje zdvihy, navrhuje spoje, kontroluje základy a výztuž a sestavuje dřevěné a lehké stěny, stropy a střechy.

### Nové

**Montáž**

- **Plán montáže a film.** Na kartě {{ui:Montáž}} popište jeřáb (kde stojí, jeho nejvyšší háček, úvazky, které nejsou v diagramu) a zadejte řádky jeho diagramu nosnosti. DetailCraft zvedá model po jedné sestavě, podle fází a po patrech, a každý zdvih kontroluje proti diagramu při jeho vyložení a proti rezervě, kterou nastavíte. {{ui:Uložit film}} zapíše jeden soubor HTML, který se přehraje offline v jakémkoli prohlížeči, i v telefonu. Zdvihy nad diagramem, za ním nebo příliš vysoko jsou v {{ui:Problémy}}. Jde o plán z vašich čísel, ne o plán zdvihu. Viz [Plán montáže a film](topic:erection-movie).

**Spoje**

- **Autopilot spojů.** Karta {{ui:Autopilot}} prohlédne každý styk bez spoje a navrhne jej podle tvarů: patní plechy, smykové plechy, čelní desky pro nosníky, které označíte jako momentové, spojky a styčníky. Zadejte rovnoměrné zatížení nebo jednu koncovou smykovou sílu a počet šroubů se řídí návrhovou pevností šroubu. {{ui:Přidat všechny}} přidá návrhy jako jeden krok zpět. Jsou to výchozí hodnoty k posouzení, ne návrh spoje.
- **Kontroly stavitelnosti.** {{ui:Problémy}} pro šroub, na který nedosáhne klíč, šrouby příliš blízko u hlavy nástrčného klíče, koutové svary mimo jejich limity velikosti a duté profily, které zadržují vodu. Přístup ke svaru je nový: obvodový koutový svar, na který nedosáhne hořák svářeče, je uveden s dílem v cestě a podílem dotčeného svaru. Viz [Kontroly stavitelnosti](topic:constructability).

**Základy a výztuž**

- **Kontroly základů.** Karta {{ui:Základy}} kontroluje patky, spojené patky a desky na půdě, kterou popíšete: únosnost, posun a překlopení od provozních zatížení; ohyb, smyk, protlačení, kotvení a minimální výztuž z návrhových zatížení (ACI 318-19). Sloup blízko okraje nebo rohu se kontroluje s průřezem oříznutým hranou patky. Sedání vychází z modulu půdy, pružná deska se řeší na pružinách z modulu podloží a skupiny pilot a opěrné zdi mají vlastní panely. Sloupová zatížení lze zadat ručně nebo převzít z {{ui:Analýza}}. Viz [Kontroly základů](topic:foundation-checks).
- **Mapa zahuštění výztuže.** Karta {{ui:Hustota výztuže}} vykreslí tepelnou mapu každé patky shora: kde prut nenechává dost místa, aby beton prošel dolů, proti pravidlu čisté vzdálenosti a případně proti největšímu kamenivu a hlavici vibrátoru, pokud je zadáte. Viz [Mapa hustoty výztuže](topic:rebar-congestion).

**Rámování a dodávky**

- **Dřevěné a lehké rámování.** Karta {{ui:Rámování}} rámuje stěnové, podlahové a střešní panely se všemi kusy, seznamem řezů, zásobou ke koupi a výkresem dílny v měřítku. {{ui:Umístit jako pruty}} vloží kusy do modelu a {{ui:Listy PDF}} uloží jeden list pro každý panel. Velikosti, rozteče a průvlaky určujete vy: DetailCraft nekontroluje, že unesou zatížení. Viz [Panely dřevěného a lehkého rámování](topic:framing-panels).
- **Sklad dodavatele a dodací lhůty.** Karta {{ui:Dodávky}} načte seznam skladu dodavatele (CSV) a pro každý průřez v seznamu řezů ukáže, zda je dost na skladě a jak dlouho se čeká. Nedostatky a opožděné průřezy jsou v {{ui:Problémy}}. Nic se neobjednává. Viz [Sklad dodavatele a dodací lhůty](topic:supplier-stock).

**Analýza a návrh**

- **Co selže jako první?** Na kartě {{ui:Analýza}} tlačítko najde rozhodující pevnostní kombinaci, nejslabší prut, o kolik lze zatížení zvýšit, než první prut dosáhne svého limitu, a nejslabší čelní desku nebo smykový plech, kde je známa smyková pevnost jejich šroubů. Nejprve potřebuje kombinace a návrhovou normu. Otlačení, smyk bloku, svary a páčení se nekontrolují. Váš připojený asistent může totéž požádat.
- **Živě.** Zaškrtněte {{ui:Živě: po každé úpravě řešit znovu}} a rám se po každé úpravě znovu vyřeší.
- **Beton, více.** Štíhlý sloup v rámu bez posunu se navrhuje na zvětšený moment (ACI 318-19 6.6.4.5). Seizmickou periodu lze převzít z analýzy Rayleighovou metodou. Deska z plechů dostane výztuž, kterou každá vrstva potřebuje z jejích momentů, a jednosměrný smyk. Viz [Kontrola betonových prvků a tvorba seizmických zatížení](topic:concrete-and-seismic).
- **K posouzení inženýrem.** Výsledky základů, betonu a Co selže jako první jsou pomůcky. Zatížení větrem není hotové.

**Ve všech aplikacích**

- **Jazyky.** Nápověda je ve 54 jazycích. Ty jiné než angličtina jsou strojové koncepty, dokud je nepřečte rodilý mluvčí; deset je nových (litevština, lotyština, bosenština, maráthí, telugština, albánština, afrikánština, filipínština, svahilština, uzbečtina).
- **Řádky panelu nástrojů.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Řádky panelu nástrojů}} volí zalamování, 2 řádky nebo 1 řádek. Lišta, která se již vejde, zůstane beze změny; ostatní se posouvají do stran.
- **Mřížka vlastností.** Pole patky používají sdílenou mřížku: sbalitelné kategorie a kompaktní hustota. Zadané aritmetické výrazy jako 2*450 stále fungují.
- **Vstupní zařízení.** Touchpad, pero, 3D myš, ovladač a MIDI mohou aplikace ovládat. Viz [Pohyb ve 3D](topic:navigate-3d).
- **Panel Problémy.** Upozornění nových kontrol výše se objevují ve stejném panelu {{ui:Problémy}} jako dříve.
- **Připojte svou AI.** Váš vlastní asistent připojený přes CadCraft Studio funguje se všemi osmi aplikacemi a vidí jen to, co povolíte. Připojení jedním kliknutím, hostovaný konektor a váš vlastní klíč API ve Studiu jsou ještě v přípravě. Viz [Použití DetailCraft s AI asistentem](topic:use-with-ai-assistants).

### Opraveno ve verzi 0.8.1

- **Jazyky ve Studiu.** Studio a zabalená vydání mohou přepínat jazyk za běhu; dříve byla pouze v angličtině. Ještě nebylo otestováno na každé platformě: dejte nám vědět, pokud se jazyk nezmění.
- **Výběr oknem.** Instalátory verze 0.8.1 již nesou správné chování výběru oknem z webového sestavení 0.8; starší instalátor ho neměl.
- **Tablety na výšku.** Volná výška mřížky připadne plátnu a rozložení listu začíná při 760 px nebo méně.

### Zatím není v této verzi

- **Odeslání NC na stroj** není vydáno.
- **Zatížení větrem** pro beton není hotové a betonové a základové kontroly jsou k posouzení inženýrem.
- **Podepisování kódem.** Instalátory pro Windows a soubor .dmg pro macOS nejsou podepsané, takže Windows může varovat a macOS žádá pravé tlačítko, pak Otevřít.

Dřívější změny jsou v [Co je nového ve verzi 0.7](topic:whats-new-0-7).
