---
title: Co je nového ve verzích 0.8 a 0.8.1
summary: Montážní film z diagramu nosnosti jeřábu, autopilot spojů, mapa přeplněné výztuže, kontroly základů, panely dřevěné a lehké ocelové konstrukce, kontroly zhotovitelnosti a přístupu ke svarům, zásoby dodavatele, co se porouchá jako první, živý přepočet, další kontroly betonu a opravy verze 0.8.1.
keywords: co je nového, novinky, poznámky k vydání, changelog, změny, 0.8, 0.8.1, verze, nové funkce, montáž, jeřáb, diagram nosnosti, film, autopilot, spoje, výztuž, přeplněnost, základy, patka, plošná výztuž, sedání, rámování, dřevo, lehká ocel, seznam řezů, zhotovitelnost, přístup ke svaru, dodavatel, zásoby, dodací lhůta, co se porouchá jako první, živě, beton, seismicita, deska, jazyky, asistent
from: 6e33e052
---

Toto se změnilo ve verzi DetailCraft 0.8 (1. listopadu 2026) a 0.8.1 (2. listopadu 2026), ve srovnání s verzí 0.7. Verze 0.7 kontrolovala ocelové pruty; verze 0.8 plánuje zdvihy, navrhuje spoje, kontroluje základy a výztuž a rámuje dřevěné a lehké ocelové stěny, podlahy a střechy.

## Nové

### Montáž

- **Plán montáže a film.** Na kartě {{ui:Montáž}} popište jeřáb (kde stojí, jeho nejvyšší háček, závěsné vybavení, které není v diagramu) a zadejte řádky jeho diagramu nosnosti. DetailCraft zvedá model po jedné sestavě, v pořadí fází a patro po patře, a kontroluje každé zvednutí podle diagramu při jeho vyložení a podle rezervy, kterou nastavíte. {{ui:Uložit film}} zapíše jeden soubor HTML, který se přehraje offline v jakémkoli prohlížeči, i v telefonu. Zvednutí nad diagramem, za ním nebo příliš vysoko jsou v {{ui:Problémy}}. Je to plán z vašich čísel, ne plán zdvihu. Viz [Plán montáže a film](topic:erection-movie).

### Spoje

- **Autopilot spojů.** Karta {{ui:Autopilot}} prohlédne každý styk, který nemá spoj, a navrhne ho podle tvarů: patní plechy, smykové plechy, čelní desky pro nosníky, které označíte jako momentové, spojky a styčníky. Zadejte rovnoměrné zatížení nebo jednu posouvající sílu na konci a počet šroubů se řídí návrhovou pevností šroubu. {{ui:Přidat všechny}} přidá návrhy jako jeden krok zpět. Jsou to výchozí hodnoty k prohlédnutí, ne návrh spoje.
- **Kontroly zhotovitelnosti.** {{ui:Problémy}} hlídají šroub, na který klíč nedosáhne, šrouby příliš blízko u sebe pro nástrčný klíč, koutové svary mimo jejich mezní velikosti a dutých profilů, které zadržují vodu. Přístup ke svaru je nový: obvodový koutový svar, na který nedosáhne hořák svářeče, je uveden s dílem, který překáží, a podílem dotčeného svaru. Viz [Kontroly zhotovitelnosti](topic:constructability).

### Základy a výztuž

- **Kontroly základů.** Karta {{ui:Základy}} kontroluje patky, spojené patky a plošné základy na zemině, kterou popíšete: únosnost, posun a překlopení od provozních zatížení; ohyb, smyk, průraz, zakotvení a minimální výztuž z návrhových zatížení (ACI 318-19). Sloup blízko okraje nebo rohu se kontroluje s průřezem oříznutým hranou patky. Sedání vychází z modulu zeminy, pružný plošný základ se řeší na pružinách z modulu podloží a skupiny pilot a opěrné zdi mají vlastní panely. Zatížení sloupů lze zadat ručně, nebo vzít z {{ui:Analýza}}. Viz [Kontroly základů](topic:foundation-checks).
- **Mapa přeplněné výztuže.** Karta {{ui:Hustota výztuže}} kreslí tepelnou mapu každé patky při pohledu shora: kde pruty ponechávají příliš málo místa, aby se beton dostal dolů, proti pravidlu čisté vzdálenosti a, pokud je zadáte, největšímu kamenivu a hlavici vibrátoru. Viz [Mapa přeplněné výztuže](topic:rebar-congestion).

### Rámování a zásoby

- **Rámování ze dřeva a lehké oceli.** Karta {{ui:Rámování}} rámuje panely stěn, podlah a střech se všemi kusy, seznamem řezů, zásobami k nákupu a dílenským výkresem v měřítku. {{ui:Umístit jako pruty}} vloží kusy do modelu a {{ui:Listy PDF}} uloží jeden list pro každý panel. Rozměry, rozteče a záhlaví určujete vy: DetailCraft nekontroluje, že nesou zatížení. Viz [Panely rámování ze dřeva a lehké oceli](topic:framing-panels).
- **Zásoby dodavatele a dodací lhůty.** Karta {{ui:Dodávky}} načte seznam zásob dodavatele (CSV) a u každého profilu, který seznam řezů kupuje, ukáže, zda je dost na skladě a jak dlouho se čeká. Nedostatky a opožděné profily jsou v {{ui:Problémy}}. Nic se neobjednává. Viz [Zásoby dodavatele a dodací lhůty](topic:supplier-stock).

### Analýza a návrh

- **Co se porouchá jako první?** Na kartě {{ui:Analýza}} tlačítko najde rozhodující kombinaci pevnosti, nejslabší prut, o kolik lze zatížení zvýšit, než první prut dosáhne svého limitu, a nejslabší čelní desku nebo smykový plech, pokud je známa smyková pevnost jejich šroubů. Nejdřív potřebuje kombinace a návrhový předpis. Únosnost v otlačení, smyk bloku, svary a páčení se nekontrolují. Váš připojený asistent může totéž zadat také.
- **Živě.** Zaškrtněte {{ui:Živě: po každé úpravě řešit znovu}} a rám se po každé úpravě přepočítá.
- **Beton a další.** Štíhlý sloup v rámu bez posunu se navrhuje na svůj zvětšený moment (ACI 318-19 6.6.4.5). Seismickou periodu lze vzít z analýzy Rayleighovou metodou. Deska z plechů dostane výztuž, kterou každá vrstva potřebuje, podle svých momentů, a také jednosměrný smyk. Viz [Kontroly betonových prvků a seismická zatížení](topic:concrete-and-seismic).
- **Pro inženýra ke kontrole.** Výsledky kontroly základů, betonu a funkce Co se porouchá jako první jsou pomůcky. Větrná zatížení nejsou zatím zabudována.

### Ve všech aplikacích

- **Jazyky.** Nápověda je ve 54 jazycích. Ty kromě angličtiny jsou strojové koncepty, dokud je nepřečte rodilý mluvčí; deset je nových (litevština, lotyština, bosenština, maráthí, telugu, albánština, afrikánština, filipínština, svahilština, uzbečtina).
- **Řádky panelu nástrojů.** {{ui:Nastavení}} › {{ui:Obecné}} › {{ui:Řádky panelu nástrojů}} volí zalamování, 2 řádky nebo 1 řádek. Panel, který se již vejde, zůstane beze změny; zbytek se posouvá do stran.
- **Mřížka vlastností.** Pole patky používají společnou mřížku: sbalitelné kategorie a kompaktní hustota. Zadané výpočty jako 2*450 stále fungují.
- **Vstupní zařízení.** Touchpad, pero, 3D myš, ovladač a MIDI mohou ovládat aplikace. Viz [Pohyb ve 3D](topic:navigate-3d).
- **Panel Problémy.** Upozornění nových kontrol výše se objevují ve stejném panelu {{ui:Problémy}} jako dříve.
- **Připojte svou AI.** Váš vlastní asistent, připojený přes CadCraft Studio, funguje se všemi osmi aplikacemi a vidí jen to, co povolíte. Připojení jedním kliknutím, hostovaný konektor a váš vlastní API klíč ve Studiu teprve přijdou. Viz [Použití DetailCraftu s asistentem AI](topic:use-with-ai-assistants).

## Opraveno ve verzi 0.8.1

- **Jazyky ve Studiu.** Studio a balíčkované verze mohou přepínat jazyk za běhu; dříve byly jen v angličtině. Zatím nebylo otestováno na každé platformě: dejte nám vědět, pokud se jazyk nemění.
- **Výběr oknem.** Instalátory 0.8.1 obsahují chování výběru oknem, které už bylo správně ve webovém sestavení 0.8; starší instalátor ho neměl.
- **Tablety na výšku.** Volná výška mřížky připadá plátnu a rozložení listu začíná při 760 px nebo méně.

## Zatím není v této verzi

- **Odeslání NC na stroj** není vydáno.
- **Větrná zatížení** pro beton nejsou zabudována a kontroly betonu a základů jsou pro inženýra k posouzení.
- **Podepisování kódu.** Instalátory pro Windows a soubor .dmg pro macOS nejsou podepsány, takže Windows může varovat a macOS vyžaduje kliknutí pravým tlačítkem, pak Otevřít.

Dřívější změny jsou v [Co je nového ve verzi 0.7](topic:whats-new-0-7).
