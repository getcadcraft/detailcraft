---
title: Čo je nové vo verzii 0.7
summary: Kontroly návrhu oceľových profilov I s kombináciami zaťažení podľa ASCE 7 alebo EN 1990 a kontrolami prvkov podľa AISC 360 alebo EN 1993-1-1, export USD oceľového modelu, nástroj asistenta pre USD, pás Oceľ s veľkými a malými tlačidlami, panely, ktoré sa dajú odložiť, a dialógové okná, ktoré sa presúvajú.
keywords: čo je nové, novinky, poznámky k vydaniu, zoznam zmien, zmeny, 0.7, verzia, nové funkcie, kontroly návrhu, návrh ocele, využitie, kombinácie zaťažení, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurokód, národná príloha, zaťaženie strechy, limit priehybu, usd, usda, usdc, usdz, openusd, asistent, mcp, pás oceľ, pás kariet, rozdelené tlačidlo, jednotky, kompaktné, panely, dialógové okná, portugalčina
from: 17d1e0bb
---

Toto sa zmenilo v DetailCraft 0.7 v porovnaní s 0.6. Rámová analýza z 0.6 má teraz druhý krok: kontrolu oceľových prvkov podľa návrhovej normy.

## Nové

### Spoje na pokos (0.7.1)

- **Dva profily I stretávajúce sa pod uhlom**, napríklad rámový roh alebo hrebeň: vyberte oba, v ponuke {{ui:Viac}} skupiny {{ui:Spoje}} zvoľte {{ui:Pokos}} a oba konce sa rozrežú v rovine, ktorá polí uhol. Čelné dosky zoskrutkované k sebe a výstuhy stojiny sú v novom dialógovom okne Pokos zaškrtávacie polia, ktorého číslované polia zodpovedajú výkresu vášho spoja, ktorý sa vytvára pri písaní. Pokos nasleduje prvky, keď sa pohnú, a prenáša sa do výkresov, súborov NC (šikmé rezy), IFC a kusovníka. Pozrite [Spoje na pokos](topic:mitres).

### Kontroly návrhu

- **Kombinácie zaťažení podľa normy.** V karte {{ui:Analýza}} má nový blok {{ui:Kontroly návrhu}} voľbu {{ui:Návrhová norma}}: ASCE 7 + AISC 360 (USA, LRFD) alebo EN 1990 + EN 1993-1-1 (Eurokód). Zadajte každému zaťažovaciemu prípadu jeho druh (stále, premenné, nové zaťaženie strechy, sneh, vietor, seizmické), stlačte {{ui:Vytvoriť kombinácie}} a DetailCraft zapíše kombinácie únosnosti a použiteľnosti vašich prípadov podľa normy. Kombinácie, ktoré ste zadali sami, zostanú. Pozrite [Vytvorenie kombinácií](topic:design-checks#make-the-combinations).
- **Hodnoty národnej prílohy.** Pri Eurokóde súčinitele začínajú odporúčanými hodnotami; {{ui:Hodnoty národnej prílohy}} vám umožnia zadať hodnoty vašej krajiny a uložia sa v modeli. Pozrite [Vytvorenie kombinácií](topic:design-checks#make-the-combinations).
- **Kontrola prvkov.** {{ui:Skontrolovať prvky}} skontroluje každý oceľový profil I na ťah, tlak s vybočením, ohyb s klopením, šmyk, ohyb s osovou silou a priehyb voči {{ui:Limit priehybu}}, ktorý nastavíte. Tabuľka zobrazuje využitie každého prvku, rozhodujúcu kontrolu a jej kombináciu a prvky sú na modeli vyfarbené (modrá, zelená, okrová, červená, sivá pre nekontrolované). Pozrite [Kontrola prvkov](topic:design-checks#check-the-members).
- **V správe.** {{ui:Správa (PDF)}} a {{ui:Správa (CSV)}} pridávajú vydania noriem, nastavenia, využitie podľa prvkov a každé použité ustanovenie. Pozrite [Správa](topic:design-checks#the-report).
- **Pomôcka, kým ju nepreskúma inžinier.** Používa iba sily prvého rádu. Rúrky, uholníky, U-profily, zvárané tvary a štíhle časti alebo časti triedy 4 uvádzajú „nekontrolované“ s dôvodom; krútenie, spoje a betón sa nekontrolujú. Pozrite [Čo sa nekontroluje](topic:design-checks#what-is-not-checked).

### USD

- **Export oceľového modelu ako USD.** {{ui:USD}} v skupine {{ui:Výstup}} zapíše model ako {{ui:Text (.usda)}}, {{ui:Binárny (.usdc)}} alebo {{ui:Balík (.usdz)}} pre programy na vykresľovanie a skladanie scén: každá zostava obsahuje svoje dielce, každý dielec je jeho prierez vedený po jeho dĺžke s vyrezanými vyrezaniami a každý nesie značku dielca, profil, akosť, dĺžku a hmotnosť. Otvory pre skrutky, skrutky, zvary a pätky v sieťach USD nie sú. Pozrite [Export oceľového modelu ako USD](topic:usd).

### Asistenti s AI

- **USD pre asistentov.** Váš vlastný asistent, pripojený cez CadCraft Studio, môže exportovať model ako USD (`usd_export`) a v Studiu ho zapísať do priečinka, ktorý ste povolili. Pozrite [O čo môže asistent požiadať](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Zmenené

- **Pás Oceľ** má veľké a malé tlačidlá: veľký {{ui:Nosník}} vedľa malých {{ui:Stĺp}}, {{ui:Diagonála}} a {{ui:Doska}} v {{ui:Modelovanie}} › {{ui:Prvky}}; veľké {{ui:Čelné dosky}} v {{ui:Detailing}} › {{ui:Spoje}}, pričom {{ui:Styk}} a {{ui:Styčníkový plech}} zdieľajú jedno rozdelené tlačidlo; veľké {{ui:Prilepiť}} v {{ui:Úpravy}} › {{ui:Schránka}}, pričom {{ui:Prilepiť na rovnaké miesto}} a {{ui:Duplikovať}} sú za šípkou skupiny. {{ui:Výroba}} › {{ui:Výmena}} má {{ui:Exportovať USD}} vedľa IFC. Ostatné štýly ponuky vyzerajú ako predtým. Pozrite [Ponuky, klávesy a myš](topic:menus-keys-and-mouse#the-three-styles).
- [Analýza rámu](topic:frame-analysis) teraz odkazuje na kontroly návrhu a jej kombinácie sa dajú vytvoriť podľa normy.

## V každej aplikácii

- **Jednotky.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jednotky}} má po jednom zozname pre dĺžku, plochu, objem, uhol a sklon, s presnými veľkosťami podľa definícií jednotiek (americká geodetická stopa je samostatná jednotka). Vypnite jednotky, ktoré nikdy nepoužívate, a zo zoznamov jednotiek zmiznú; jednu označte hviezdičkou a nová práca sa začne v nej. Súbor si vždy ponechá vlastnú jednotku. Vlastné polia DetailCraft zatiaľ zoznamy nesledujú: jeho dĺžky sa stále zadávajú v milimetroch. Pozrite [Jednotky, zadané hodnoty a zoznamy jednotiek](common:unit-lists).
- **Hustejšie rozloženie a panely, ktoré sa dajú odložiť.** {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Hustota rozloženia}} › {{ui:Kompaktná}} sa zmestí viac na obrazovku (dotykové obrazovky a telefóny si ponechajú veľké tlačidlá). Každý bočný panel má úzku lištu záhlavia: potiahnutím ho ukotvíte alebo necháte plávať, pustením na lištu iného panela zdieľate jeden rám ako karty, pripnutím ho necháte zasúvať sa k okraju alebo ho skryjete a vrátite z okraja. Pozrite [Usporiadanie panelov](common:arrange-panels#make-the-layout-denser).
- **Dialógové okná sa presúvajú.** Potiahnite dialógové okno za záhlavie mimo výkresu; vráti sa tam, kde ste ho nechali. Dvojitým kliknutím na záhlavie ho znova vycentrujete. Pozrite [Presunutie dialógového okna](common:arrange-panels#move-a-dialog).
- **Recepty pre asistentov s AI.** Desať prepracovaných požiadaviek pre vášho vlastného asistenta (upratať výkres, vykresliť sadu, skontrolovať výkresy, klásť modelu otázky, spočítať výkaz výmer, vyskúšať variant súčiastky…), každá s nástrojmi, ktoré volá, a oprávneniami, ktoré potrebuje, a každá prehraná našimi testami. Aplikácie neobsahujú žiadnu AI. Pozrite [Recepty pre asistentov s AI](common:assistants-recipes).
- **Jazyky.** **Português (Portugal)** je nový v {{ui:Nastavenia}} › {{ui:Všeobecné}} › {{ui:Jazyk}}. Ten, **Português (Brasil)**, **Español (México)** a **Bahasa Indonesia** majú teraz každé slovo aplikácií, ako koncepty, ktoré ešte neskontroloval rodený hovoriaci. Témy pomocníka sú po anglicky.
- **CadCraft Studio** uvádza, prečo zlyhala kontrola aktualizácie (zatiaľ nie je súbor pre váš systém, nie je sieť, zlý podpis), namiesto len „Hotovo“, a prestane vracať kartu Čo je nové, ktorú ste zatvorili, kým nevyjde novšie vydanie.

## Zatiaľ nie je vo verzii

- **0.7 nie je podpísaná kódovým podpisom.** Podpisovanie a balík pre Microsoft Store sa presunuli do 0.8, pretože overenie certifikátu zatiaľ neprebehlo. Skontrolujte SHA-256 vedľa každého súboru na getcadcraft.com/download. Ak vo Windows inštalátor zastaví SmartScreen, zvoľte {{ui:Ďalšie informácie}} a potom {{ui:Aj tak spustiť}}. Na Macu pri prvom spustení kliknite pravým tlačidlom na CadCraft Studio a zvoľte {{ui:Otvoriť}}. CadCraft Studio zatiaľ nie je v obchode s aplikáciami a zatiaľ neexistuje zostavenie pre iPad ani iPhone.
- Zoznamy uhlov a sklonov v {{ui:Jednotky}} sa ukladajú, ale zatiaľ ich nečíta žiadne pole.
- **Kontroly návrhu zatiaľ nepreskúmal inžinier.** Naše testy ich porovnávajú s vytlačenými hodnotami z tabuliek a ručne vypočítanými vzorcami, zatiaľ nie s vyriešenými príkladmi z návrhovej príručky. Kým ich nikto nepreskúma, sú pomôckou: dôležité prvky skontrolujte ručne.
- Kontroly návrhu používajú sily prvého rádu (bez účinkov druhého rádu) a kontrolujú iba profily I. Nie je vytvorené: rúrky, uholníky, U-profily, zvárané tvary, štíhle časti (AISC) alebo časti triedy 4 (Eurokód) v ohybe, krútenie, vybočenie steny šmykom spolu s ohybom, spoje, únava, požiar, seizmické detaily a betón. Štíhla časť v tlaku vynechá kontroly tlaku a prvok uvádza „vyhovuje, čiastočne skontrolované“.
- Rámová analýza je stále prvého rádu a lineárna a inžinier ju zatiaľ nevyskúšal na skutočnej zákazke.
- Otvory pre skrutky, skrutky, zvary a pätky nie sú v exporte USD.

Všetko ostatné je v [Čo ešte nie je vytvorené](topic:not-built-yet).
