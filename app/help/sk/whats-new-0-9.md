---
title: Čo je nové vo verzii 0.9
summary: Veľkosti UK ocele, nerovnoramenné uholníky podľa Blue Book, dielenské výkresy všetkých dielov v jednej sade PDF, Moje profily pre vlastné profily, P-Delta a vlastné frekvencie, zaťaženie vetrom podľa ASCE 7, seizmická lokalita a kombinácie a živé kurzory so sledovaním.
keywords: čo je nové, poznámky k vydaniu, changelog, zmeny, 0.9, oceľ UK, blue book, ub, uc, pfc, shs, rhs, chs, nerovnoramenný uholník, dielenský výkres, dielenské výkresy, sada listov, značka dielu, pdf, moje profily, vlastný profil, p-delta, druhý rád, vlastná frekvencia, konečné prvky, modálna hmotnosť, zaťaženie vetrom, asce 7, seizmické, trieda lokality, usgs, kombinácie zaťažení, lrfd, asd, naživo, kurzory, sledovanie, ľudia, popisky, 0.8, 0.8.1, verzia, nové funkcie, montáž, žeriav, tabuľka nosnosti, video, autopilot, spoje, výstuž, zahustenie, základy, pätka, mat, sadanie, rámovanie, drevo, tenkostenná oceľ, zoznam rezov, konštruovateľnosť, prístup k zvaru, dodávateľ, zásoby, dodacia lehota, betón, seizmické, doska, jazyky, asistent
from: 4c95a2de
---

Toto je zmena v DetailCraft 0.9 oproti 0.8.1. Verzia 0.9 prináša veľkosti UK ocele, dielenský výkres pre každý diel naraz, väčšiu kartu {{ui:Analýza}} pre rámy a zobrazenie kurzorov ostatných, keď spolupracujete.

## Novinky

### Oceľ UK a dielenské výkresy

- **Veľkosti UK ocele.** Zoznamy profilov teraz obsahujú 976 veľkostí z Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS a RHS, pričom studené tvarované duté profily sú oddelené (ich názvy začínajú CF). Názvy sa píšu najprv podľa rodiny, napríklad UB305x165x40 alebo SHS100x100x5.0, a funguje aj písanie tak, ako to uvádzajú výkresy: 305x165x40 UB, L100x100x10, SHS100x5. Pozri [Katalóg profilov](topic:profile-catalog).
- **Nerovnoramenné uholníky.** Uholníky UEA si zachovajú obe ramená pri importe a exporte IFC a v súboroch NC a zrkadlenie otočí kus z konca na koniec.
- **Všetky dielenské výkresy naraz.** Zvoľte {{ui:Dielenský výkres}} v skupine {{ui:Výstup}} bez výberu. Okno zobrazí zoznam všetkých značiek dielov, zobrazí ukážku ktorejkoľvek z nich a {{ui:Stiahnuť všetko}} uloží jeden PDF súbor so stranou pre každú značku, každá s nadpisom "List 3 z 42". {{ui:Stiahnuť PDF}} uloží ten, na ktorý sa práve pozeráte. U-profily, uholníky a duté profily teraz dostanú listy tiež. Pozri [Tvorba dielenských výkresov](topic:shop-drawings).
- **Moje profily.** Vlastný profil sa dá teraz uchovať pre každý nový model. Vo formulári Vlastný profil nechajte zaškrtnuté {{ui:Uložiť do Mojich profilov}}; zoznam {{ui:Moje profily}} pod ním má {{ui:Uložiť}}, {{ui:Použiť tu}} a {{ui:Odstrániť}}. Zoznam sa uchováva v tomto prehliadači (až 200 položiek), nie vo vašom účte. Pozri [Plechy a profily](topic:plates-and-profiles).

### Analýza

- **Teória 2. rádu (P-Delta).** Zaškrtnite {{ui:Teória 2. rádu (P-Delta)}} vedľa {{ui:Spustiť}} na karte {{ui:Analýza}} a osové sily budú pôsobiť na deformovaný rám. Platne a tuhé podlahy zostanú v prvom ráde s upozornením. Pozri [Sily, reakcie a priehyby](topic:frame-analysis).
- **Vlastné frekvencie.** Blok {{ui:Konečné prvky: vlastné frekvencie}} pod výsledkami nájde najnižšie tvary kmitania toho istého modelu s periódou a efektívnou modálnou hmotnosťou a zobrazí tvar na modeli. Pozri [Sily, reakcie a priehyby](topic:frame-analysis).
- **Zaťaženie vetrom a seizmická lokalita.** Tri nové bloky na karte {{ui:Analýza}}: {{ui:Zaťaženie vetrom (smerová metóda ASCE 7)}}, {{ui:Seizmická lokalita a systém (ASCE 7)}} a {{ui:Kombinácie zaťažení ASCE 7}}. Pozri [Vietor, seizmická lokalita a kombinácie ASCE 7](topic:wind-seismic-combinations).

### Spolupráca

- **Kurzory a mená.** V relácii Live je ukazovateľ každej osoby nakreslený v modeli s jej menom a farbou a to, čo vybrala, dostane rámik.
- **Sledovanie osoby.** Otvorte {{ui:Ľudia}} v relácii a zvoľte {{ui:Sledovať}} pri mene; váš pohľad sa posúva spolu s jej pohľadom. Hostiteľ môže zvoliť {{ui:Požiadať všetkých, aby ma sledovali}}. Pozri [Sledovanie osoby v relácii Live](topic:follow-in-live).

### Vo všetkých aplikáciách

- Popisky sú Bootstrap popisky, úvodná karta tipu má tlačidlo na zatvorenie, pásy kariet sa posúvajú do strán, keď sa nezmestia, a názov karty prehliadača uvádza otvorený dokument, potom DetailCraft a CadCraft.

## Opravené

- Vlastný profil sa stratil, keď ste začali nový model.
- U-profily, uholníky a duté profily chýbali v sade dielenských výkresov.

## Skutočné obmedzenia

- Bloky vetra, seizmicity a konečných prvkov sú pomôcky na kontrolu. Výsledky overí váš inžinier; nie je to kontrola podľa normy. Vyhľadanie v USGS bolo otestované na náhradnej službe, nie na živej službe.
- Konečné prvky a P-Delta boli overené voči ručným a uzavretým riešeniam, nie na skutočnej budove. Analýza vybočenia ešte nie je hotová.
- Žiadna britská výrobňa zatiaľ neskúšala veľkosti UK a súbory NC pre nerovnoramenné uholníky sa na stroji nespustili.
- Sada dielenských výkresov je iba vo formáte PDF.
- Jazyky okrem angličtiny sú strojové koncepty.
- Inštalátory pre Windows nie sú podpísané kódom ({{ui:Viac informácií}}, potom {{ui:Spustiť aj tak}}); obraz disku pre macOS nie je notarizovaný (pravé tlačidlo, potom {{ui:Otvoriť}}).

Staršie zmeny sú v poznámkach k verziám 0.8 a 0.8.1 nižšie na tejto stránke.

## Staršie: 0.8 a 0.8.1

Toto je zmena v DetailCraft 0.8 (1. novembra 2026) a 0.8.1 (2. novembra 2026) oproti 0.7. Verzia 0.7 kontrolovala oceľové prvky; verzia 0.8 plánuje zdvihy, navrhuje spoje, kontroluje základy a výstuž a tvorí panely drevených a tenkostenných stien, podláh a striech.

### Nové

**Montáž**

- **Plán montáže a video.** Na karte {{ui:Montáž}} opíšte žeriav (kde stojí, jeho najvyšší háčik, výstroj, ktorá nie je v tabuľke nosnosti) a zadajte riadky jeho tabuľky nosnosti. DetailCraft zdvíha model po jednom zostavení, v poradí fáz a vrstvu po vrstve, a kontroluje každý zdvih voči tabuľke pri jeho dosahu a voči rezerve, ktorú nastavíte. {{ui:Uložiť video}} zapíše jeden HTML súbor, ktorý sa prehrá offline v ľubovoľnom prehliadači, aj v telefóne. Zdvihy, ktoré presahujú tabuľku, sú za jej hranicou alebo sú príliš vysoko, sú v {{ui:Problémy}}. Je to plán z vašich čísel, nie plán zdvíhania. Pozri [Plán montáže a video](topic:erection-movie).

**Spoje**

- **Autopilot spojov.** Karta {{ui:Autopilot}} prezrie každý spoj bez spojenia a navrhne ho podľa tvarov: základové dosky, šmykové plechy, čelné dosky pre nosníky, ktoré označíte ako momentové, styky a styčníkové plechy. Zadajte rovnomerné zaťaženie alebo jednu šmykovú silu na jednom konci a počet skrutiek sa riadi návrhovou pevnosťou skrutky. {{ui:Pridať všetky}} pridá návrhy ako jeden krok späť. Sú to počiatočné hodnoty na kontrolu, nie návrh spoja.
- **Kontroly zhotoviteľnosti.** {{ui:Problémy}} pre skrutku, ktorú kľúč nedosiahne, skrutky príliš blízko pre nástrčný kľúč, rohové zvary mimo ich limitov veľkosti a duté profily, ktoré zadržiavajú vodu. Prístup k zvaru je nový: rohový zvar po obvode, ktorý nedosiahne zváračský horák, je uvedený s dielom, ktorý je v ceste, a podielom zasiahnutej dĺžky zvaru. Pozri [Kontroly zhotoviteľnosti](topic:constructability).

**Základy a výstuž**

- **Kontroly základov.** Karta {{ui:Základy}} kontroluje základové pätky, spojené pätky a rošty na pôde, ktorú opíšete: únosnosť, posun a preklopenie z prevádzkových zaťažení; ohyb, šmyk, prerazenie, kotvenie a minimálnu výstuž z návrhových zaťažení (ACI 318-19). Stĺp blízko okraja alebo rohu sa kontroluje s prierezom orezaným hranou pätky. Sadanie vychádza z modulu pôdy, pružný rošt sa rieši na pružinách z modulu podložia a skupiny pilót a oporné steny majú vlastné panely. Zaťaženia stĺpov sa dajú zadať alebo prevziať z {{ui:Analýza}}. Pozri [Kontroly základov](topic:foundation-checks).
- **Mapa zahustenia výstuže.** Karta {{ui:Zahustenie}} nakreslí tepelnú mapu každej pätky pohľadom zhora: kde prúty nechávajú pre betón príliš málo miesta, aby sa dostal dolu, voči pravidlu čistej vzdialenosti a, ak ich zadáte, najväčšiemu kamenivu a hlave vibrátora. Pozri [Mapa zahustenia výstuže](topic:rebar-congestion).

**Rámovanie a zásoby**

- **Panely drevených a tenkostenných konštrukcií.** Karta {{ui:Rámovanie}} tvorí panely stien, podláh a striech so všetkými kusmi, zoznamom rezov, materiálom na nákup a výkresom dielne v mierke. {{ui:Umiestniť ako prvky}} vloží kusy do modelu a {{ui:Listy PDF}} uloží jeden list pre každý panel. Rozmery, rozstupy a nadpražia určujete vy: DetailCraft nekontroluje, či unesú zaťaženie. Pozri [Panely drevených a tenkostenných konštrukcií](topic:framing-panels).
- **Zásoby dodávateľa a dodacie lehoty.** Karta {{ui:Dodávky}} načíta zoznam zásob dodávateľa (CSV) a pre každý prierez, ktorý zoznam rezov nakupuje, ukáže, či je ho na sklade dosť a aká je čakacia doba. Nedostatky a neskoré prierezy sú v {{ui:Problémy}}. Nič sa neobjedná. Pozri [Zásoby dodávateľa a dodacie lehoty](topic:supplier-stock).

**Analýza a návrh**

- **Čo sa rozbije prvé?** Na karte {{ui:Analýza}} toto tlačidlo nájde rozhodujúcu kombináciu pevnosti, najslabší prvok, o koľko sa môžu zaťaženia zväčšiť, kým prvý prvok dosiahne svoj limit, a najslabšiu čelnú dosku alebo šmykový plech, ak je známa pevnosť ich skrutiek v šmyku. Najprv potrebuje kombinácie a návrhovú normu. Otlačenie, blokový šmyk, zvary a vyklápanie sa nekontrolujú. Váš pripojený asistent môže požiadať o to isté.
- **Naživo.** Zaškrtnite {{ui:Naživo: riešiť znova po každej úprave}} a rám sa vyrieši znova po každej úprave.
- **Betón, viac.** Štíhly stĺp v ráme bez posunu sa navrhuje na zväčšený moment (ACI 318-19 6.6.4.5). Seizmickú periódu možno zobrať z analýzy Rayleighovou metódou. Doska tvorená plochami dostane výstuž, ktorú každá vrstva potrebuje z jej momentov, a jednosmerný šmyk. Pozri [Kontrola betónových prvkov a tvorba seizmických zaťažení](topic:concrete-and-seismic).
- **Pre inžiniera na kontrolu.** Výsledky základov, betónu a Čo sa rozbije prvé sú pomôcky. Zaťaženie vetrom ešte nie je hotové.

**Vo všetkých aplikáciách**

- **Jazyky.** Pomoc je v 54 jazykoch. Ostatné okrem angličtiny sú strojové koncepty, kým ich neprečíta rodený hovoriaci; desať je nových (litovčina, lotyština, bosniančina, maráthčina, telugčina, albánčina, afrikánčina, filipínčina, svahilčina, uzbečtina).
- **Riadky panela nástrojov.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Riadky panela nástrojov}} volí zalamovanie, 2 riadky alebo 1 riadok. Lišta, ktorá sa už zmestí, zostane taká, ako je; ostatné sa posúvajú do strán.
- **Mriežka vlastností.** Polia základu používajú spoločnú mriežku: zbaliteľné kategórie a kompaktnú hustotu. Zadané výrazy ako 2*450 stále fungujú.
- **Vstupné zariadenia.** Touchpad, pero, 3D myš, ovládač a MIDI môžu ovládať aplikácie. Pozri [Navigácia v 3D](topic:navigate-3d).
- **Panel problémov.** Upozornenia nových kontrol vyššie sa objavia v tom istom paneli {{ui:Problémy}} ako predtým.
- **Pripojte svoju AI.** Váš vlastný asistent pripojený cez CadCraft Studio funguje so všetkými ôsmimi aplikáciami a vidí iba to, čo povolíte. Pripojenie jedným kliknutím, hosťovaný konektor a váš vlastný API kľúč v Studiu sú ešte len pripravované. Pozri [Používanie DetailCraft s asistentom AI](topic:use-with-ai-assistants).

### Opravené vo verzii 0.8.1

- **Jazyky v Studiu.** Studio a balíkové vydania môžu prepínať jazyk za behu; predtým boli iba v angličtine. Ešte nie je otestované na každej platforme: dajte nám vedieť, ak sa jazyk nezmení.
- **Výber prekrížením.** Inštalátory 0.8.1 už majú správanie výberu oknom s prekrížením správne z webového zostavenia 0.8; starší inštalátor nie.
- **Tablety na výšku.** Voľná výška mriežky ide na plátno a rozloženie listu začína pri 760 px alebo menej.

### Ešte nie je v tejto verzii

- **Odoslanie NC na stroj** ešte nie je vydané.
- **Zaťaženia vetrom** pre betón ešte nie sú hotové a kontroly betónu a základov má overiť inžinier.
- **Podpisovanie kódom.** Inštalátory pre Windows a súbor .dmg pre macOS nie sú podpísané, takže Windows môže upozorniť a macOS vyžaduje pravé tlačidlo, potom Otvoriť.

Staršie zmeny sú v [Čo je nové vo verzii 0.7](topic:whats-new-0-7).
