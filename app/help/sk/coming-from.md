---
title: Prechod z iného softvéru na detailing
summary: Ako zvyky z úplného detailingového balíka zodpovedajú DetailCraft a rozdiely, na ktoré skúsení detailéri narazia.
keywords: prechod, migrácia, známe, pracovný postup, porovnanie, rozdiely, číslovanie, komponenty, katalóg, výkresy, zvyky
from: 39639a5d
---

Ak detailujete v Tekla Structures, väčšina DetailCraft bude vyzerať povedome: mriežky, úrovne, profily z katalógu, časti a zostavy, spoje, číslovanie, súbory NC, IFC. Mierka je iná: Tekla Structures je úplný výrobný systém, DetailCraft je malá a raná aplikácia v prehliadači, ktorá zvláda niekoľko úloh od začiatku do konca. Táto stránka ukazuje, kde sa vaše zvyky zachovajú a kde nie.

:::tip
Ak máte v rukách pás Tekla Structures, vyberte v {{ui:Nastavenia}} › {{ui:DetailCraft}} › {{ui:Ponuky, klávesy a myš}} štýl ponuky {{ui:Pás pre oceľ}}: karty Modelovanie, Detailing, Úprava, Výkresy, Výroba a Zobrazenie, a stredné tlačidlo posúva pohľad. Ak prichádzate z AutoCADu a radi píšete príkazy, {{ui:Klasické kreslenie}} pridá príkazový riadok (BEAM, COLUMN, ENDPLATE, ZOOM …). Pozri [Ponuky, klávesy a myš](topic:menus-keys-and-mouse).
:::

## Rýchla mapa

| Na čo ste zvyknutí | V DetailCraft |
|---|---|
| Vytváranie mriežok so súradnicami v dialógovom okne mriežky | {{ui:Mriežky}} v ľavom paneli: označenia a rozstupy medzi čiarami, nie absolútne súradnice. Číslované čiary idú jedným smerom, písmenové čiary druhým |
| Úrovne ako Z súradnice mriežky | Samostatný zoznam {{ui:Úrovne}}, názov a kóta na riadok, použitý cez {{ui:Použiť úrovne}} |
| Výber bodov kdekoľvek pomocou uchopení | Kliknutia sa uchytávajú len na priesečníky mriežky. Body mimo mriežky sa zadajú do {{ui:Konce (x, y, z mm)}} prvku |
| Príkazy pre stĺp, nosník a dosku | {{ui:Stĺp}} ({{key:C}}), {{ui:Nosník}} ({{key:B}}), {{ui:Diagonála}} ({{key:R}}), {{ui:Doska}} ({{key:P}}), {{ui:Pätka}} ({{key:F}}) |
| Dialógové okno vlastností časti (dvojklik na časť) | Stačí jeden klik: panel {{ui:Vlastnosti}} vpravo je vždy aktívny; nie je tu dialógové okno ani tlačidlo Upraviť či Použiť |
| Poloha v rovine, otočenie a nastavenia hĺbky | {{ui:Poloha}} (horná strana ocele, na stred alebo dole na čiare) a {{ui:Otočenie (°)}}. Žiadne samostatné vodorovné posuny |
| Katalóg profilov | Pevný zoznam 2,311 publikovaných rozmerov (AISC W, S, C, L, HSS, Pipe; európske IPE, HEA, HEB, UPN; britské UB, UC, PFC, EA, UEA, SHS, RHS, CHS a tenkostenné profily za studena), plus parametrické dosky a vaše vlastné {{ui:Vlastný profil}} prierezy |
| Katalóg materiálov | Sedem tried v zozname: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Použitie komponentu spoja a jeho dialógové okno | Vyberte nosník a zvoľte {{ui:Čelné dosky}}. Nastavenia sa zobrazia na paneli {{ui:Vlastnosti}}. Existujú len dva spoje (čelná doska k prírube stĺpa, pätná doska) |
| Automatické spojenie alebo kopírovanie spoja na podobné spoje | Vyberte spoj a zvoľte {{ui:Použiť na podobné (n)}} |
| Číslovanie s radmi a počiatočnými číslami | Žiadny príkaz: značky sa aktualizujú samy po každej zmene, s pevnými predponami c, b, br, p a C, B, BR, P |
| Dialógové okná pre skrutky a otvory | Otvory sa zadávajú podľa plochy a polohy. Skrutky vzniknú len zo spojov |
| Nástroje na rez, prispôsobenie a mnohouholníkový rez | Vyrezania (hore alebo dole, na ktoromkoľvek konci) len na I-profiloch. Skrátenia na spojoch sú automatické |
| Správy a šablóny | Tri pevné správy na kartách dole a sťahovanie CSV |
| Tvorba výkresov a zoznam výkresov | Jeden dielenský výkres na značku časti, všetky naraz, najprv ukážka, potom stiahnutie ako jeden PDF alebo list po liste. Nič sa neukladá ani neupravuje |
| Export súborov NC | {{ui:Súbory NC}}: jeden súbor DSTV na značku časti, len I-profily a dosky, zabalené do archívu |
| Export IFC | {{ui:IFC}}: IFC4 celého modelu, s výstužou |
| Výstuž v ľubovoľnej betónovej časti | Výstuž len v obdĺžnikových plošných pätkách, prúty v amerických veľkostiach, so spodnou sieťou a začínajúcimi prútmi |
| Model uložený v projektovom priečinku, viacužívateľsky | Jeden súbor `.detailcraft.json`, ktorý si stiahnete. Jeden používateľ, na vašom počítači |
| História späť | {{key:Mod+Z}} a {{key:Mod+Y}}, až 200 krokov, uchované, kým neotvoríte alebo nezačnete ďalší model |

## Rozdiely, ktoré ľudí zaskočia

### Značky sa menia samy

Krok číslovania neexistuje. Značky sa prepočítajú po každej zmene, takže sú vždy aktuálne, ale môžu sa aj prečíslovať: pridáte stĺp a včerajší c3 môže byť teraz c4. Neexistuje „história číslovania“, ktorá by uchovala staré značky. Dokončite model a potom vydajte kusovník (BOM), súbory NC a dielenské výkresy naraz zo jedného uloženého súboru.

### Stredné tlačidlo myši priblíži; neposúva

V 3D pohľade: ťah ľavým tlačidlom otáča, ťah pravým posúva, koliesko priblíži a ťah stredným tlačidlom tiež priblíži. Podržanie {{key:Shift}} pri ťahu ľavým tlačidlom posúva tiež. Koliesko priblíži k stredu pohľadu, nie k ukazovateľu. Nie je tu výber stredu otáčania: model sa otáča okolo stredu pohľadu. Pozri [Pohyb v 3D pohľade](topic:navigate-3d).

### Stĺpy smerujú predvolene jedným smerom

Pri otočení 0 smerujú príruby stĺpa v smere číslovanej mriežky. Nosníky medzi písmenovými čiarami mriežky sa napájajú do stojiny a čelné dosky sa tam odmietnu („Nosníky napájané do stojiny stĺpa ešte nie sú hotové“). Pred pridaním spojov takéto stĺpy otočte o 90°.

### Pohľady len na písmenových čiarach

{{ui:Pohľad}} sa pozerá len pozdĺž písmenových čiar mriežky. Nie sú tu pohľady pozdĺž číslovaných čiar, uložené pohľady ani pracovné roviny. Na rámy na číslovaných čiarach použite {{ui:3D}} alebo {{ui:Pridať podľa mriežky}}.

### Výber, kopírovanie a posun

Viac častí vyberte pomocou {{key:Shift}}+klik alebo {{key:Mod+A}}, potom ich kopírujte, vystrihnite, prilepte (na priesečník mriežky, na zadaný posun alebo na rovnaké miesto) a duplikujte, vrátane spojov ([Kopírovanie, prilepenie a duplikovanie](topic:copy-paste)). Nie je tu výber oknom, filter výberu, posun, zrkadlenie ani pole; vlastnosti sa menia jeden prvok naraz na paneli {{ui:Vlastnosti}}.

### Mriežky neťahajú prvky so sebou

Prvky si ponechajú svoje súradnice, keď zmeníte rozstup mriežky; nič sa s čiarami mriežky nehýbe. Zmeňte mriežku pred umiestnením ocele alebo potom upravte koncové súradnice každého prvku.

### Spoje sa nenavrhujú

Dva spoje umiestnia dosky, otvory, skrutky a zvary podľa čísel, ktoré zadáte. Žiadna kontrola návrhu nie je, len upozornenia na okraje a rozstupy (z EN 1993-1-8 tabuľka 3.3).

### Otvory sa v 3D pohľade nevyrezávajú

Otvory sa zobrazujú ako tmavé zátky. Sú skutočnými otvormi v súboroch NC, dielenských výkresoch a súbore IFC. Vyrezania sa v pohľade vyrezávajú.

### Hmotnosti sú hrubé

Hmotnosť ocele neodpočítava otvory ani vyrezania a hmotnosť skrutiek nie je zahrnutá.

### Iba milimetre

Všetko sa zadáva a zobrazuje v milimetroch, aj pre profily AISC. Názvy profilov si zachovávajú publikovaný tvar (W12x50, HSS6x6x1/4).

### Žiadne výkresy na správu

Nie je zoznam výkresov, editor výkresov, celkové usporiadanie ani výkresy zostáv. Dielenský výkres sa vytvorí, keď si ho vyžiadate, a stiahne sa; ak ho chcete zmeniť, zmeňte model a vytvorte ho znova.

### Beží v prehliadači

Uloženie stiahne súbor. Klávesové skratky, ktoré si prehliadač necháva pre seba, nemožno použiť. Vaše modely nikdy neopúšťajú váš počítač: pozri [Kam smerujú vaše súbory](common:your-files).

## Čo ďalej robiť v aktuálnom softvéri

Dnes je DetailCraft vhodný na malé rámy, overenie nápadu, výučbu alebo tvorbu súborov NC a dielenských výkresov pre jednoduché práce s nosníkmi a stĺpmi. Zložité spoje, celkové usporiadanie výkresov, montážne výkresy, viacužívateľské projekty a všetko uvedené v [Čo ešte nie je hotové](topic:not-built-yet) nechajte v softvéri, ktorý používate teraz.
