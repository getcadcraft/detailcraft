---
title: Novinky vo verziách 0.8 a 0.8.1
summary: Montážny film z nosnostnej tabuľky žeriavu, autopilot spojov, mapa zahustenia výstuže, kontroly základov, panely drevených a tenkostenných rámov, kontroly konštruovateľnosti a prístupu k zvarom, zásoby dodávateľa, čo sa rozbije ako prvé, živé prepočítanie, ďalšie kontroly betónu a opravy verzie 0.8.1.
keywords: novinky, čo je nové, poznámky k vydaniu, zoznam zmien, zmeny, 0.8, 0.8.1, verzia, nové funkcie, montáž, žeriav, nosnostná tabuľka, film, autopilot, spoje, výstuž, zahustenie, základy, pätka, plošný základ, sadanie, rámovanie, drevo, tenkostenný, rezný zoznam, konštruovateľnosť, prístup zvárania, dodávateľ, zásoby, dodacia lehota, čo sa rozbije ako prvé, naživo, betón, seizmický, doska, jazyky, asistent
from: 6e33e052
---

Toto sa zmenilo v DetailCraft 0.8 (1. novembra 2026) a 0.8.1 (2. novembra 2026) oproti verzii 0.7. Verzia 0.7 kontrolovala oceľové prvky; verzia 0.8 plánuje zdvihy, navrhuje spoje, kontroluje základy a výstuž a rámuje drevené a tenkostenné steny, podlahy a strechy.

## Nové

### Montáž

- **Plán montáže a film.** Na karte {{ui:Montáž}} opíšte žeriav (kde stojí, jeho najvyšší háčok, výstroj, ktorá nie je v tabuľke) a zadajte riadky jeho nosnostnej tabuľky. DetailCraft zdvíha model po jednej zostave, v poradí fáz a po vrstvách, a každý zdvih kontroluje voči tabuľke pri jeho dosahu a voči rezerve, ktorú nastavíte. {{ui:Uložiť video}} zapíše jeden súbor HTML, ktorý sa prehrá offline v ľubovoľnom prehliadači, aj v telefóne. Zdvihy, ktoré sú nad tabuľkou, za ňou alebo príliš vysoko, sú v {{ui:Problémy}}. Je to plán z vašich čísel, nie plán zdvihu. Pozri [Plán montáže a film](topic:erection-movie).

### Spoje

- **Autopilot spojov.** Karta {{ui:Autopilot}} prezrie každý spoj bez spojenia a navrhne ho podľa tvarov: pätné plechy, šmykové plechy, čelné dosky pre nosníky, ktoré označíte ako momentové, styky a styčníkové plechy. Zadajte rovnomerné zaťaženie alebo koncovú šmykovú silu jedného konca a počet skrutiek sa odvodí z návrhovej pevnosti skrutky. {{ui:Pridať všetky}} pridá návrhy ako jeden krok späť. Sú to východiskové hodnoty na preverenie, nie návrh spoja.
- **Kontroly konštruovateľnosti.** {{ui:Problémy}} upozorní na skrutku, ktorú kľúč nedosiahne, skrutky príliš blízko k nástrčnému kľúču, kútové zvary mimo ich veľkostných limitov a duté profily, v ktorých zostáva voda. Prístup k zvaru je nový: kútový zvar po celom obvode, ktorý horák zvárača nedosiahne, je uvedený s dielcom, ktorý prekáža, a s podielom dotknutého zvaru. Pozri [Kontroly konštruovateľnosti](topic:constructability).

### Základy a výstuž

- **Kontroly základov.** Karta {{ui:Základy}} kontroluje pätky, kombinované pätky a plošné základy na pôde, ktorú opíšete: únosnosť, posun a prevrátenie z prevádzkových zaťažení; ohyb, šmyk, priebojový šmyk, vyvinutie a minimálnu výstuž z návrhových zaťažení (ACI 318-19). Stĺp blízko okraja alebo rohu sa kontroluje s prierezom, ktorý odrezáva okraj pätky. Sadanie vychádza z modulu pôdy, pružný plošný základ sa rieši na pružinách z modulu podložia a skupiny pilót a oporné steny majú vlastné panely. Zaťaženia stĺpov možno zadať alebo prevziať z {{ui:Analýza}}. Pozri [Kontroly základov](topic:foundation-checks).
- **Mapa zahustenia výstuže.** Karta {{ui:Zahustenie}} nakreslí tepelnú mapu každej pätky zhora: kde výstuž necháva príliš málo miesta, aby sa betón dostal dole, oproti pravidlu čistej vzdialenosti a, ak ich zadáte, najväčšiemu kamenivu a hlave vibrátora. Pozri [Mapa zahustenia výstuže](topic:rebar-congestion).

### Rámovanie a dodávky

- **Drevené a tenkostenné rámovanie.** Karta {{ui:Rámovanie}} rámuje panely stien, podláh a striech so všetkými kusmi, rezným zoznamom, zásobami na nákup a výkresom v mierke. {{ui:Umiestniť ako prvky}} vloží kusy do modelu a {{ui:Listy PDF}} uloží jeden list pre každý panel. Rozmery, rozstupy a nadprožia určujete vy: DetailCraft neoveruje, že unesú zaťaženie. Pozri [Panely drevených a tenkostenných rámov](topic:framing-panels).
- **Zásoby dodávateľa a dodacie lehoty.** Karta {{ui:Dodávky}} načíta zoznam zásob dodávateľa (CSV) a pri každom prierezi, ktorý rezný zoznam kupuje, ukáže, či je na sklade dosť a ako dlho sa čaká. Nedostatky a oneskorené prierezy sú v {{ui:Problémy}}. Nič sa neobjedná. Pozri [Zásoby dodávateľa a dodacie lehoty](topic:supplier-stock).

### Analýza a návrh

- **Čo sa rozbije ako prvé?** Na karte {{ui:Analýza}} tlačidlo nájde rozhodujúcu kombináciu pevnosti, najslabší prvok, o koľko sa zaťaženia môžu zvýšiť, kým prvý prvok dosiahne svoj limit, a najslabšiu čelnú dosku alebo šmykový plech, ak je známa šmyková pevnosť ich skrutiek. Vyžaduje najskôr kombinácie a návrhový predpis. Otlačenie, blokový šmyk, zvary a páčivý účinok sa nekontrolujú. Váš pripojený asistent môže pýtať to isté.
- **Naživo.** Zaškrtnite {{ui:Naživo: riešiť znova po každej úprave}} a rám sa po každej úprave znova vyrieši.
- **Betón a ďalšie.** Štíhly stĺp v ráme bez posunu sa navrhuje na zväčšený moment (ACI 318-19 6.6.4.5). Seizmická perióda sa môže prevziať z analýzy Rayleighovou metódou. Doska tvorená plochami dostane výstuž, ktorú každá vrstva potrebuje, z jej momentov, a jednosmerný šmyk. Pozri [Kontrola betónových prvkov a seizmické zaťaženia](topic:concrete-and-seismic).
- **Na kontrolu inžinierom.** Výsledky základov, betónu a nástroja Čo sa rozbije ako prvé sú pomôcky. Zaťaženia vetrom nie sú vytvorené.

### Vo všetkých aplikáciách

- **Jazyky.** Pomoc je v 54 jazykoch. Tie okrem angličtiny sú strojové koncepty, kým ich neprečíta rodený hovoriaci; desať je nových (litovčina, lotyština, bosniančina, maráthčina, telugčina, albánčina, afrikánčina, filipínčina, svahilčina, uzbečtina).
- **Riadky panela nástrojov.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Riadky panela nástrojov}} vyberá zalomenie, 2 riadky alebo 1 riadok. Panel, ktorý sa už zmestí, zostane taký, aký je; ostatné sa posúvajú do strán.
- **Mriežka vlastností.** Polia pätky používajú spoločnú mriežku: zbaliteľné kategórie a kompaktnú hustotu. Zadané aritmetické výrazy ako 2*450 stále fungujú.
- **Vstupné zariadenia.** Touchpad, pero, 3D myš, ovládač a MIDI môžu ovládať aplikácie. Pozri [Pohyb v 3D](topic:navigate-3d).
- **Panel Problémy.** Upozornenia nových kontrol vyššie sa zobrazujú v rovnakom paneli {{ui:Problémy}} ako predtým.
- **Pripojte svojho AI asistenta.** Váš vlastný asistent, pripojený cez CadCraft Studio, funguje so všetkými ôsmimi aplikáciami a vidí len to, čo povolíte. Pripojenie jedným kliknutím, hostovaný konektor a váš vlastný API kľúč v Studiu sú ešte len pripravované. Pozri [Používanie DetailCraft s AI asistentom](topic:use-with-ai-assistants).

## Opravené vo verzii 0.8.1

- **Jazyky v Studiu.** Studio a balené vydania môžu prepínať jazyk za behu; predtým boli len v angličtine. Ešte nie je otestované na všetkých platformách: dajte nám vedieť, ak sa jazyk nemení.
- **Výber prekríženým oknom.** Inštalátory 0.8.1 už obsahujú správanie výberu prekríženým oknom, ktoré bolo správne už vo webovom zostavení 0.8; starší inštalátor ho nemal.
- **Tablety na výšku.** Voľná výška mriežky ide na plátno a rozloženie listu začína pri 760 px alebo menej.

## Ešte nie je v tejto verzii

- **Odoslanie NC na stroj** nie je vydané.
- **Zaťaženia vetrom** pre betón nie sú vytvorené a kontroly betónu a základov má posúdiť inžinier.
- **Podpisovanie kódom.** Inštalátory pre Windows a súbory .dmg pre macOS nie sú podpísané, takže Windows môže zobraziť upozornenie a macOS vyžaduje kliknutie pravým tlačidlom, potom Otvoriť.

Staršie zmeny sú v [Novinky vo verzii 0.7](topic:whats-new-0-7).
