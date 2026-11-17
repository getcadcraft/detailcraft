---
title: Čo je nové vo verzii 0.7 (staršie)
summary: Kontroly návrhu oceľových I-profilov s kombináciami zaťažení podľa ASCE 7 alebo EN 1990 a kontrola prvkov podľa AISC 360 alebo EN 1993-1-1, export USD oceľového modelu, pomôcka asistenta pre USD, pás Steel s veľkými a malými tlačidlami, panely, ktoré sa dajú ukryť, a dialógové okná, ktoré sa dajú presúvať.
keywords: čo je nové 0.7, staršie vydanie, poznámky k vydaniu, changelog, zmeny, 0.7, verzia, nové funkcie, kontroly návrhu, navrhovanie ocele, využitie, utilisation, utilization, kombinácie zaťažení, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurokód, národná príloha, živé zaťaženie strechy, limit priehybu, usd, usda, usdc, usdz, openusd, asistent, mcp, pás Steel, pás, rozdeľované tlačidlo, jednotky, kompaktný, panely, dialógové okná, portugalčina
from: 54a7a8f0
---

Toto je zmena v DetailCraft 0.7 oproti 0.6. Analýza rámu z verzie 0.6 má teraz druhý krok: kontrolu oceľových prvkov podľa návrhovej normy.

## Novinky

### Pokosové spoje (0.7.1)

- **Dva I-profily stretávajúce sa pod uhlom**, napríklad rámový roh alebo hrebeň: vyberte oba, zvoľte {{ui:Pokos}} v ponuke {{ui:Viac}} skupiny {{ui:Spoje}} a oba konce sa prerežú v rovine, ktorá rozpoľuje uhol. Čelné dosky spojené skrutkami a výstuhy stojiny sú zaškrtávacie polia v novom dialógovom okne Pokos, ktorého očíslované polia sa zhodujú s výkresom vášho spoja, vytváraným počas písania. Pokos sleduje prvky, keď sa pohybujú, a prenáša sa do výkresov, súborov NC (šikmé rezy), IFC a kusovníka. Pozri [Pokosové spoje](topic:mitres).

### Kontroly návrhu

- **Kombinácie zaťažení podľa normy.** Na karte {{ui:Analýza}} má nový blok {{ui:Kontroly návrhu}} položku {{ui:Návrhová norma}}: ASCE 7 + AISC 360 (US, LRFD) alebo EN 1990 + EN 1993-1-1 (Eurokód). Každému zaťažovaciemu prípadu priraďte jeho druh (stále, úžitkové, nové strešné úžitkové, sneh, vietor, seizmické), stlačte {{ui:Vytvoriť kombinácie}} a DetailCraft zapíše pevnostné a použiteľnostné kombinácie normy z vašich prípadov. Kombinácie, ktoré ste zadali sami, zostanú. Pozri [Tvorba kombinácií](topic:design-checks#make-the-combinations).
- **Hodnoty národnej prílohy.** Pri Eurokóde začínajú faktory odporúčanými hodnotami; {{ui:Hodnoty národnej prílohy}} vám umožní zadať hodnoty vašej krajiny a uložia sa v modeli. Pozri [Tvorba kombinácií](topic:design-checks#make-the-combinations).
- **Kontrola prvkov.** {{ui:Skontrolovať prvky}} overí každý oceľový I-profil na ťah, tlak so vzperou, ohyb s bočným klopením, šmyk, ohyb s normálovou silou a priehyb voči {{ui:Limit priehybu}}, ktorý nastavíte. Tabuľka ukazuje vyťaženie každého prvku, rozhodujúcu kontrolu a jej kombináciu a prvky sú sfarbené na modeli (modrá, zelená, okrová, červená, sivá pre nekontrolované). Pozri [Kontrola prvkov](topic:design-checks#check-the-members).
- **V správe.** {{ui:Správa (PDF)}} a {{ui:Správa (CSV)}} pridávajú edície normy, nastavenia, vyťaženie podľa prvkov a každú použitú klauzulu. Pozri [Správa](topic:design-checks#the-report).
- **Pomôcka, kým ju neskontroluje inžinier.** Používa iba sily z prvého rádu. Rúry, uholníky, U-profily, zvarané profily a štíhle alebo triedy 4 časti sú označené "nekontrolované" s dôvodom; krútenie, spoje a betón sa nekontrolujú. Pozri [Čo sa nekontroluje](topic:design-checks#what-is-not-checked).

### USD

- **Export oceľového modelu do USD.** {{ui:USD}} v skupine {{ui:Výstup}} zapíše model ako {{ui:Text (.usda)}}, {{ui:Binárny (.usdc)}} alebo {{ui:Balík (.usdz)}} pre renderovacie programy a skladanie scény: každá zostava obsahuje svoje časti, každá časť je jej prierez po celej dĺžke s vyrezanými koncami a každá nesie svoju značku, profil, triedu ocele, dĺžku a hmotnosť. Otvory pre skrutky, skrutky, zvary a základy nie sú v sieťach USD. Pozri [Export oceľového modelu do USD](topic:usd).

### Asistenti AI

- **USD pre asistentov.** Váš vlastný asistent pripojený cez CadCraft Studio môže exportovať model ako USD (`usd_export`) a v Studiu ho zapísať do priečinka, ktorý ste povolili. Pozri [Čo môže asistent požadovať](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Zmenené

- **Pás Steel** má veľké a malé tlačidlá: veľký {{ui:Nosník}} vedľa malých {{ui:Stĺp}}, {{ui:Diagonála}} a {{ui:Doska}} na {{ui:Modelovanie}} › {{ui:Prvky}}; veľké {{ui:Čelné dosky}} na {{ui:Detailing}} › {{ui:Spoje}}, pričom {{ui:Styk}} a {{ui:Styčníkový plech}} zdieľajú jedno rozdeľované tlačidlo; veľké {{ui:Prilepiť}} na {{ui:Úpravy}} › {{ui:Schránka}}, pričom {{ui:Prilepiť na rovnaké miesto}} a {{ui:Duplikovať}} sú za šípkou skupiny. {{ui:Výroba}} › {{ui:Výmena}} má {{ui:Exportovať USD}} vedľa IFC. Ostatné štýly ponuky vyzerajú ako predtým. Pozri [Ponuky, klávesy a myš](topic:menus-keys-and-mouse#the-three-styles).
- Analýza rámu teraz odkazuje na kontroly návrhu a jej kombinácie môže vytvoriť norma. Pozri [Analýza rámu](topic:frame-analysis).

## Vo všetkých aplikáciách

- **Jednotky.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jednotky}} má po jednom zozname pre dĺžku, plochu, objem, uhol a sklon, s presnými veľkosťami podľa definícií jednotiek (americká prieskumnícka stopa je vlastná jednotka). Vypnite jednotky, ktoré nepoužívate, a vypadnú zo zoznamov; označte hviezdičkou jednu a nová práca sa začne v nej. Súbor si vždy ponechá svoju jednotku. Polia DetailCraftu zatiaľ tieto zoznamy nenasledujú: jeho dĺžky sa stále zadávajú v milimetroch. Pozri [Jednotky, zadané hodnoty a zoznamy jednotiek](common:unit-lists).
- **Hustejšie rozloženie a panely, ktoré sa dajú ukryť.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Hustota rozloženia}} › {{ui:Kompaktná}} zmestí na obrazovku viac (dotykové obrazovky a telefóny si ponechajú veľké tlačidlá). Každý bočný panel má štíhlu lištu s názvom: potiahnite ju, aby sa panel ukotvil alebo uvoľnil, pustite ju na lištu iného panela, aby zdieľali jeden rám ako karty, pripnite panel, aby sa zasúval k okraju, alebo ho skryte a vráťte z okraja. Pozri [Usporiadanie panelov](common:arrange-panels#make-the-layout-denser).
- **Dialógové okná sa dajú presúvať.** Potiahnite dialógové okno za jeho názvovú lištu mimo kresby; vráti sa tam, kde ste ho nechali. Dvojitým kliknutím na názvovú lištu ho znova vycentrujete. Pozri [Presun dialógového okna](common:arrange-panels#move-a-dialog).
- **Recepty pre asistentov AI.** Desať prepracovaných žiadostí pre vášho vlastného asistenta (upratať výkres, vykresliť sadu, skontrolovať výkresy, klásť modelu otázky, spočítať výkaz výmer, vyskúšať variant súčiastky…), každá s nástrojmi, ktoré volá, a oprávneniami, ktoré potrebuje, a každá zopakovaná v našich testoch. Aplikácie neobsahujú žiadnu AI. Pozri [Recepty pre asistentov AI](common:assistants-recipes).
- **Jazyky.** **Português (Portugal)** je nový v {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jazyk}}. Aj **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia** majú teraz všetky slová aplikácií, ako koncepty, ktoré ešte neprečítal rodený hovoriaci. Témy pomocníka sú v angličtine.
- **CadCraft Studio** uvedie, prečo kontrola aktualizácií zlyhala (pre váš systém zatiaľ nie je súbor, chýba sieť, neplatný podpis), namiesto len "Hotovo", a prestane znova zobrazovať kartu Čo je nové, ktorú ste zavreli, kým nevyjde novšia verzia.

## Ešte nie je v tejto verzii

- **0.7 nie je podpísaný kódom.** Podpisovanie a balík pre Microsoft Store sa presunuli do verzie 0.8, lebo overenie certifikátu ešte neprebehlo. Skontrolujte SHA-256 pri každom súbore na getcadcraft.com/download. Vo Windows, ak SmartScreen zastaví inštalátor, zvoľte {{ui:Viac informácií}}, potom {{ui:Spustiť aj tak}}. Na Macu pri prvom spustení kliknite pravým tlačidlom na CadCraft Studio a zvoľte {{ui:Otvoriť}}. CadCraft Studio zatiaľ nie je v obchode s aplikáciami a zostavenie pre iPad ani iPhone zatiaľ nie je hotové.
- Uhlové a sklonové zoznamy v {{ui:Jednotky}} sa ukladajú, ale zatiaľ ich žiadne pole nečíta.
- **Kontroly návrhu ešte neoveril inžinier.** Naše testy ich porovnávajú s tlačenými tabuľkovými hodnotami a s ručne počítanými vzorcami, zatiaľ nie s prepracovanými príkladmi z návrhovej príručky. Kým neprebehne kontrola, sú to pomôcky: dôležité prvky skontrolujte ručne.
- Kontroly návrhu používajú sily z prvého rádu (bez účinkov druhého rádu) a kontrolujú iba I-profily. Ešte nie je hotové: rúry, uholníky, U-profily, zvarané profily, štíhle (AISC) ani triedy 4 (Eurokód) časti v ohybe, krútenie, vzperu v šmyku spolu s ohybom, spoje, únavu, požiar, seizmické detailovanie a betón. Štíhla časť v tlaku vynecháva kontroly tlaku a prvok sa zobrazí ako "vyhovuje, čiastočne skontrolované".
- Analýza rámu je stále z prvého rádu a lineárna a inžinier ju zatiaľ na skutočnej zákazke nevyskúšal.
- Otvory pre skrutky, skrutky, zvary a základy nie sú v exporte USD.

Všetko ostatné je v [Čo ešte nie je hotové](topic:not-built-yet).
