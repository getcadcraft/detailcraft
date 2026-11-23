---
title: Čo je nové vo verzii 0.9 (staršie)
summary: Veľkosti ocele podľa UK Blue Book a nerovnoramenné uholníky, dielenské výkresy pre každú časť v jednej sade PDF, Moje profily pre vlastné prierezy, P-Delta a vlastné frekvencie, zaťaženie vetrom podľa ASCE 7, seizmická lokalita a kombinácie a živé kurzory so Sledovať.
keywords: čo je nové 0.9, staršie vydanie, čo je nové, poznámky k vydaniu, zoznam zmien, 0.9, oceľ UK, blue book, ub, uc, pfc, shs, rhs, chs, nerovnoramenný uholník, dielenský výkres, dielenské výkresy, sada listov, značka časti, pdf, moje profily, vlastný profil, p-delta, druhý rád, vlastná frekvencia, konečné prvky, modálna hmotnosť, zaťaženie vetrom, asce 7, seizmické, trieda lokality, usgs, kombinácie zaťažení, lrfd, asd, naživo, kurzory, sledovať, ľudia, popisky, čo je nové, poznámky k vydaniu, zoznam zmien, zmeny, 0.8, 0.8.1, verzia, nové funkcie, montáž, žeriav, diagram nosnosti, video, autopilot, spoje, výstuž, zahustenie, základy, pätka, plošný základ, sadnutie, rámovanie, drevo, tenkostenná oceľ, rezný zoznam, konštruovateľnosť, prístup ku zvaru, dodávateľ, zásoby, dodacia lehota, čo sa zlomí ako prvé, naživo, betón, seizmické, doska, jazyky, asistent
from: ab0c7f05
---

Toto sa zmenilo v DetailCraft 0.9 oproti 0.8.1. Verzia 0.9 prináša veľkosti ocele podľa UK, dielenský výkres pre každú časť naraz, väčšiu kartu {{ui:Analýza}} pre rámy a zobrazenie kurzorov ostatných pri spoločnej práci.

## Nové

### Oceľ podľa UK a dielenské výkresy

- **Veľkosti ocele podľa UK.** Zoznamy profilov teraz obsahujú 976 veľkostí zo Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS a RHS; za studena tvarované duté profily sú oddelené (ich názvy začínajú CF). Názvy sa píšu najprv rodina, napríklad UB305x165x40 alebo SHS100x100x5.0, a funguje aj zadanie tak, ako to uvádzajú výkresy: 305x165x40 UB, L100x100x10, SHS100x5. Pozri [Katalóg profilov](topic:profile-catalog).
- **Nerovnoramenné uholníky.** Uholníky UEA si zachovajú obe ramená pri importe a exporte IFC aj v súboroch NC a zrkadlenie otočí kus z konca na koniec.
- **Všetky dielenské výkresy naraz.** Vyberte {{ui:Dielenský výkres}} v skupine {{ui:Výstup}}, keď nie je nič vybrané. Okno vypíše každú značku časti, zobrazí náhľad ktorejkoľvek z nich a {{ui:Stiahnuť všetko}} uloží jeden PDF súbor so stranou pre každú značku, pričom každá je označená "List 3 z 42". {{ui:Stiahnuť PDF}} uloží iba ten, ktorý práve vidíte. Kanály, uholníky a duté profily teraz dostanú listy tiež. Pozri [Vytvorenie dielenských výkresov](topic:shop-drawings).
- **Moje profily.** Vlastný profil sa dá teraz uchovať pre každý nový model. Vo formulári Vlastný profil nechajte zaškrtnuté {{ui:Ponechať v Moje profily}}; zoznam {{ui:Moje profily}} pod ním má {{ui:Uložiť}}, {{ui:Použiť tu}} a {{ui:Odstrániť}}. Zoznam sa uchováva v tomto prehliadači (najviac 200), nie vo vašom účte. Pozri [Dosky a profily](topic:plates-and-profiles).

### Analýza

- **Druhý rád (P-Delta).** Zaškrtnite {{ui:Druhý rád (P-Delta)}} vedľa tlačidla Spustiť na karte {{ui:Analýza}} a normálové sily pôsobia na deformovaný rám. Dosky a tuhé podlažia zostávajú prvého rádu s upozornením. Pozri [Sily, reakcie a priehyby](topic:frame-analysis).
- **Vlastné frekvencie.** Blok {{ui:Konečné prvky: vlastné frekvencie}} pod výsledkami nájde najnižšie tvary toho istého modelu s periódou a efektívnou modálnou hmotnosťou a zobrazí tvar na modeli. Pozri [Sily, reakcie a priehyby](topic:frame-analysis).
- **Zaťaženie vetrom a seizmická lokalita.** Tri nové bloky na karte {{ui:Analýza}}: {{ui:Zaťaženie vetrom (smerová metóda ASCE 7)}}, {{ui:Seizmická lokalita a systém (ASCE 7)}} a {{ui:Kombinácie zaťažení ASCE 7}}. Pozri [Vietor, seizmická lokalita a kombinácie ASCE 7](topic:wind-seismic-combinations).

### Spolupráca

- **Kurzory a mená.** V relácii Live sa ukazovateľ každej osoby kreslí na modeli s jej menom a farbou a to, čo si vybrala, dostane rámik.
- **Sledovať osobu.** Otvorte {{ui:Ľudia}} v relácii a pri mene zvoľte {{ui:Sledovať}}; váš pohľad sa pohybuje spolu s jej pohľadom. Hostiteľ môže zvoliť {{ui:Požiadať všetkých, aby ma sledovali}}. Pozri [Sledovanie osoby v relácii Live](topic:follow-in-live).

### Vo všetkých aplikáciách

- Nápovedy po najazdení myšou sú Bootstrap nápovedy, karta spustenia má tlačidlo zatvorenia, pásy kariet sa posúvajú do strán, keď sa nezmestia, a názov karty prehliadača uvádza otvorený dokument, za ním DetailCraft a CadCraft.

## Opravené

- Vlastný profil sa stratil, keď ste začali nový model.
- Kanály, uholníky a duté profily chýbali v sade dielenských výkresov.

## Známe obmedzenia

- Bloky vetra, seizmiky a konečných prvkov sú pomôcky na kontrolu. Výsledky kontroluje váš inžinier; nie sú to kontroly podľa normy. Vyhľadávanie USGS bolo testované na náhradnej službe, nie na živej službe.
- Konečné prvky a P-Delta boli overené voči ručným a uzavretým riešeniam, nie na skutočnej budove. Analýza vzperu nie je hotová.
- Zatiaľ žiaden britský výrobca neskúšal veľkosti UK a súbory NC pre nerovnoramenné uholníky sa na stroji nespúšťali.
- Sada dielenských výkresov je iba v PDF.
- Jazyky okrem angličtiny sú strojové koncepty.
- Inštalátory pre Windows nie sú podpísané kódom (Viac informácií, potom Spustiť aj tak); obraz disku pre macOS nie je notarizovaný (kliknite pravým tlačidlom, potom Otvoriť).

Staršie zmeny sú v poznámkach k 0.8 a 0.8.1 nižšie na tejto stránke.

## Staršie: 0.8 a 0.8.1

Toto sa zmenilo v DetailCraft 0.8 (1. novembra 2026) a 0.8.1 (2. novembra 2026) oproti 0.7. Verzia 0.7 kontrolovala oceľové prvky; 0.8 plánuje zdvihy, navrhuje spoje, kontroluje základy a výstuž a rámuje drevené a tenkostenné steny, podlahy a strechy.

### Nové

**Montáž**

- **Plán montáže a video.** Na karte {{ui:Montáž}} opíšte žeriav (kde stojí, jeho najvyšší háčik, úchyty, ktoré nie sú v tabuľke nosnosti) a zadajte riadky jeho tabuľky nosnosti. DetailCraft zdvíha model po jednej zostave, v poradí fáz a vrstvu po vrstve, a kontroluje každý zdvih voči tabuľke pri jeho dosahu a voči rezerve, ktorú nastavíte. {{ui:Uložiť video}} zapíše jeden HTML súbor, ktorý sa prehrá offline v ktoromkoľvek prehliadači, aj v telefóne. Zdvihy, ktoré sú nad tabuľkou, za jej hranicou alebo príliš vysoko, sú v {{ui:Problémy}}. Je to plán podľa vašich čísel, nie plán zdvihu. Pozri [Plán montáže a video](topic:erection-movie).

**Spoje**

- **Autopilot spojov.** Karta {{ui:Autopilot}} prezrie každý spoj bez spojovacieho prvku a navrhne ho podľa tvarov: pätné dosky, šmykové lišty, čelné dosky pre nosníky, ktoré označíte ako momentové, nadstavce a výstuhy. Zadajte rovnomerné zaťaženie alebo jednu koncovú šmykovú silu a počet skrutiek sa riadi návrhovou pevnosťou skrutky. {{ui:Pridať všetky}} pridá návrhy ako jeden krok späť. Sú to východiskové hodnoty na kontrolu, nie návrh spoja.
- **Kontroly realizovateľnosti.** {{ui:Problémy}} pre skrutku, ku ktorej sa kľúčom nedostanete, skrutky príliš blízko pre nástrčný kľúč, rohové zvary mimo svojich limitov veľkosti a duté profily, ktoré zadržiavajú vodu. Prístup ku zvaru je nový: obvodový rohový zvar, ku ktorému sa horák zvárača nedostane, je uvedený spolu s časťou v ceste a podielom ovplyvneného zvaru. Pozri [Kontroly realizovateľnosti](topic:constructability).

**Základy a výstuž**

- **Kontroly základov.** Karta {{ui:Základy}} kontroluje základové pätky, spojené pätky a plošné základy na podloží, ktoré opíšete: únosnosť, posun a prevrátenie od provozných zaťažení; ohyb, šmyk, priebojový šmyk, kotvenie a minimálnu výstuž z návrhových zaťažení (ACI 318-19). Stĺp pri okraji alebo rohu sa kontroluje s prierezom orezaným hranou základu. Sadnutie vychádza z modulu podložia, pružný plošný základ sa rieši na pružinách z modulu podložia a skupiny pilót a oporné múry majú vlastné panely. Zaťaženia stĺpov sa dajú zadať alebo prevziať z {{ui:Analýza}}. Pozri [Kontroly základov](topic:foundation-checks).
- **Mapa zahustenia výstuže.** Karta {{ui:Zahustenie}} kreslí tepelnú mapu každej pätky zhora: kde prúty nechávajú príliš málo miesta, aby betón prešiel dole, voči pravidlu čistej vzdialenosti a, ak ho zadáte, najväčšiemu kamenivu a hlave vibrátora. Pozri [Mapa zahustenia výstuže](topic:rebar-congestion).

**Rámovanie a dodávky**

- **Drevené a tenkostenné rámovanie.** Karta {{ui:Rámovanie}} rámuje panely stien, podláh a striech so všetkými kusmi, rezným zoznamom, materiálom na nákup a dielenským výkresom v mierke. {{ui:Umiestniť ako prvky}} vloží kusy do modelu a {{ui:Listy PDF}} uloží jeden list pre každý panel. Rozmery, rozstupy a nadpražia určujete vy: DetailCraft nekontroluje, či unesú zaťaženie. Pozri [Panely dreveného a tenkostenného rámovania](topic:framing-panels).
- **Zásoby dodávateľa a dodacie lehoty.** Karta {{ui:Dodávky}} načíta zoznam zásob dodávateľa (CSV) a pre každý prierez, ktorý rezný zoznam kupuje, ukáže, či je na sklade dosť a ako dlho sa čaká. Nedostatky a oneskorené prierezy sú v {{ui:Problémy}}. Nič sa neobjednáva. Pozri [Zásoby dodávateľa a dodacie lehoty](topic:supplier-stock).

**Analýza a návrh**

- **Čo sa zlomí ako prvé?** Na karte {{ui:Analýza}} tlačidlo nájde rozhodujúcu kombináciu na únosnosť, najslabší prvok, o koľko sa zaťaženia môžu zväčšiť, kým prvý prvok dosiahne svoju medzu, a najslabšiu čelnú dosku alebo šmykovú lištu, ak je známa šmyková pevnosť ich skrutiek. Najprv potrebuje kombinácie a návrhovú normu. Ložisková pevnosť, blokový šmyk, zvary a vyklápanie nie sú kontrolované. Váš pripojený asistent sa môže opýtať na to isté.
- **Naživo.** Zaškrtnite {{ui:Naživo: riešiť znova po každej úprave}} a rám sa po každej úprave prepočíta.
- **Betón a ďalšie.** Štíhly stĺp v ráme bez bočného posunu sa navrhuje na zväčšený moment (ACI 318-19 6.6.4.5). Seizmickú periódu možno prevziať z analýzy Rayleighovou metódou. Doska z dosiek dostane výstuž, ktorú každá vrstva potrebuje z jej momentov, a jednosmerný šmyk. Pozri [Kontrola betónových prvkov a tvorba seizmických zaťažení](topic:concrete-and-seismic).
- **Na kontrolu inžinierom.** Výsledky základov, betónu a Čo sa zlomí ako prvé sú pomôcky. Zaťaženie vetrom nie je hotové.

**V každej aplikácii**

- **Jazyky.** Pomoc je v 54 jazykoch. Okrem angličtiny sú strojové koncepty, kým ich neprečíta rodený hovorca; desať je nových (litovčina, lotyština, bosniančina, maráthčina, telugčina, albánčina, afrikánčina, filipínčina, svahilčina, uzbečtina).
- **Riadky panela nástrojov.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Riadky panela nástrojov}} vyberie zalamovanie, 2 riadky alebo 1 riadok. Lišta, ktorá sa už zmestí, zostane taká, aká je; ostatné sa posúvajú do strán.
- **Mriežka vlastností.** Polia základu používajú spoločnú mriežku: zbaliteľné kategórie a kompaktnú hustotu. Zadané aritmetické výrazy ako 2*450 stále fungujú.
- **Vstupné zariadenia.** Touchpad, pero, 3D myš, ovládač a MIDI môžu ovládať aplikácie. Pozri [Navigácia v 3D](topic:navigate-3d).
- **Panel problémov.** Upozornenia nových kontrol vyššie sa zobrazujú v tom istom paneli {{ui:Problémy}} ako predtým.
- **Pripojte svoju AI.** Váš vlastný asistent, pripojený cez CadCraft Studio, funguje so všetkými ôsmimi aplikáciami a vidí iba to, čo povolíte. Pripojenie jedným kliknutím, hostovaný konektor a váš vlastný kľúč API v Studiu sú ešte len v príprave. Pozri [Používanie DetailCraft s asistentom AI](topic:use-with-ai-assistants).

### Opravené vo verzii 0.8.1

- **Jazyky v Studiu.** Studio a balené vydania môžu prepínať jazyk za behu; predtým boli len v angličtine. Ešte nie je otestované na každej platforme: dajte nám vedieť, ak sa jazyk nemení.
- **Výber prekrížením okna.** Inštalátory 0.8.1 už majú správanie výberu prekrížením okna správne, ako to bolo vo webovom zostavení 0.8; starší inštalátor nie.
- **Tablety na výšku.** Voľná výška mriežky ide plátnu a rozloženie listu začína pri 760 px alebo menej.

### Ešte nie je v tejto verzii

- **Odoslanie NC na stroj** nie je vydané.
- **Zaťaženie vetrom** pre betón nie je hotové; kontroly betónu a základov sú na kontrolu inžinierom.
- **Podpisovanie kódom.** Inštalátory pre Windows a obraz .dmg pre macOS nie sú podpísané, takže Windows môže upozorniť a macOS vyžaduje kliknutie pravým tlačidlom, potom Otvoriť.

Staršie zmeny sú v [Čo je nové vo verzii 0.7](topic:whats-new-0-7).
