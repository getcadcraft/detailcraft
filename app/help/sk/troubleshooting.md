---
title: Riešenie problémov
summary: Čo znamenajú správy DetailCraft a čo robiť, od chýbajúceho 3D zobrazenia po spoje, ktoré sa nedajú vytvoriť.
keywords: problém, chyba, nefunguje, pomoc, oprava, správa, odmietnuté, webgl, prázdne, upozornenie, nedá sa, nedostatok
from: f8c3b2b1
---

Väčšinu odmietnutí vysvetľuje stavový riadok v dolnej časti obrazovky alebo karta {{ui:Problémy}}. Prečítajte si ich najskôr. Správy nižšie sú citované tak, ako ich zobrazuje DetailCraft.

## Chýba 3D zobrazenie

**„Tento prehliadač nedokázal spustiť 3D grafiku (WebGL). Model, správy a exporty stále fungujú.“**

Prehliadač nedokázal spustiť WebGL, 3D grafiku, ktorou DetailCraft kreslí.

1. Aktualizujte prehliadač na najnovšiu verziu.
2. Zapnite hardvérovú akceleráciu a reštartujte prehliadač (pozri nižšie).
3. Aktualizujte ovládač grafiky alebo vyskúšajte iný prehliadač. Vzdialené plochy a virtuálne stroje WebGL zvyčajne nemajú.
4. Medzitým môžete pracovať ďalej: umiestňujte prvky cez formulár {{ui:Pridať podľa mriežky}}, čítajte správy a exportujte. Len klikanie v zobrazení vyžaduje WebGL.

:::chromium
Ak chcete zapnúť hardvérovú akceleráciu, otvorte **Nastavenia, Systém** a zapnite **Použiť hardvérovú akceleráciu, ak je k dispozícii**, potom prehliadač spustite znova.
:::

:::firefox
Ak chcete zapnúť hardvérovú akceleráciu, otvorte **Nastavenia, Všeobecné, Výkon**, odznačte **Použiť odporúčané nastavenia výkonu** a označte **Použiť hardvérovú akceleráciu, ak je k dispozícii**. Reštartujte Firefox.
:::

:::safari
Safari má WebGL predvolene zapnutý. Ak sa zobrazenie stále nespustí, aktualizujte macOS a skontrolujte, či WebGL nebráni žiadne rozšírenie.
:::

Viac v [Prehliadače a počítače](common:browsers).

## Klikanie v zobrazení nič neurobí

- **Žiadny priesečník pri kliknutí.** Nástroje umiestňovania sa prichytávajú len na priesečníky mriežky. Klik mimo každej bodky nič neurobí. Priblížte sa, kým sa bodka nerozsvieti.
- **Nástroj je {{ui:Vybrať}} a kliknuli ste na prázdny priestor.** To zruší výber.
- **Potiahli ste.** Stlačenie a uvoľnenie viac než pár pixelov od seba je ťah: otočí alebo posunie zobrazenie.
- **Časť je odrezaná.** V {{ui:Pôdorys}} a {{ui:Pohľad}} je oceľ mimo rezu skrytá a nedá sa na ňu kliknúť. Prepnite na {{ui:3D}}.
- **Priesečník je na zlej úrovni.** V {{ui:3D}} sa priesečníky na viacerých úrovniach môžu na obrazovke prekrývať; klik vezme najbližší. Použite {{ui:Pôdorys}} alebo {{ui:Pohľad}}.

## Správy pri umiestňovaní

| Správa | Čo robiť |
|---|---|
| Pre stĺpec nie je nad Level 2 žiadna úroveň, ktorú by dosiahol. Najskôr pridajte úroveň. | Pridajte úroveň v {{ui:Úrovne}} alebo kliknite na nižšiu úroveň |
| Vyberte iný priesečník pre druhý koniec. | Klikli ste na ten istý bod dvakrát |
| Dva konce sú ten istý bod. | V {{ui:Pridať podľa mriežky}} sú výbery „Od“ a „Do“ rovnaké |
| Pridajte mriežkové osi vľavo, aby ste mohli umiestniť prvky. | Model nemá mriežkové osi v jednom smere |
| Neznámy profil „…“ | Profil nie je v katalógu ani v užívateľských profiloch modelu. Vyberte jeden zo zoznamu |
| Zadajte číslo. | Číselné pole zostalo prázdne alebo obsahuje text |

## Spoje sa nedajú vytvoriť

### „Tento nosník nekončí na osi stĺpa.“

Čelné dosky vyžadujú, aby koniec nosníka bol presne na zvislej osi stĺpa, medzi jeho spodnou a hornou hranou (do 1 mm). Skontrolujte {{ui:Konce (x, y, z mm)}} nosníka a polohu stĺpa.

### „Tento nosník sa napája na stojinu stĺpa alebo pod uhlom“

Alebo v {{ui:Problémy}}: „Nosníky napojené na stojinu stĺpa zatiaľ nie sú vytvorené: otočte stĺpec o 90° alebo použite iný spoj.“

Nosník sa napája do stojiny stĺpa. Vyberte stĺpec, nastavte {{ui:Otočenie (°)}} na 90 a skúste znova. Šikmé spoje zatiaľ nie sú vytvorené.

### „Čelné dosky sa vytvárajú iba pre vodorovné nosníky (tento nosník je sklonený).“

Oba konce nosníka musia byť v rovnakej výške.

### „Čelné dosky vyžadujú nosník vzpriamene (otočenie 0).“

Nastavte {{ui:Otočenie (°)}} nosníka späť na 0.

### „Čelné dosky vyžadujú nosník I.“ / „Čelné dosky vyžadujú stĺpec I.“

Čelné dosky majú len profily I (W, IPE, HEA, HEB alebo vlastný I).

### „Koniec nosníka už nie je na osi stĺpa.“

Po pridaní spoja ste posunuli nosník alebo stĺpec. Posuňte ho späť alebo vymažte spoj.

### „Spoje orezali tento prvok na nulu.“

Spoje na oboch koncoch prvok orezali viac, než je jeho dĺžka, napríklad veľmi krátky nosník medzi dvoma hlbokými profilmi stĺpov. Skontrolujte konce prvku a hrúbku plechu.

### „Žiadne iné podobné spoje … bez spoja.“

{{ui:Podobné}} kopíruje len do spojov s rovnakým profilom nosníka, rovnakým profilom stĺpa a rovnakým typom spoja (nosník do pásnice), ktoré ešte nemajú spoj.

### „Oba konce už majú spoje.“ / „Tento stĺpec už má pätný plech.“

Vyberte existujúci spoj, aby ste ho zmenili, alebo ho najskôr vymažte.

## Upozornenia na karte Problémy

Upozornenia nezastavia vytvorenie spoja ani základu; vyzývajú vás, aby ste ich skontrolovali. Upozornenia na okraj a rozstup používajú minimá EN 1993-1-8 Tabuľka 3.3 (okraj 1.2 × otvor, rozstup 2.2 × otvor, rozchod 2.4 × otvor). Ak váš projekt používa iné pravidlá, upozornenie nemusí platiť; DetailCraft spoje nenavrhuje.

Správa „otvor je mimo konca dielu“ znamená, že x otvoru je menšie než 0 alebo väčšie než dĺžka rezu. Pamätajte, že x sa meria od začiatku rezu, po tom, čo spoje diel skrátili.

## Zmeny základov sa odmietnu

| Správa | Čo robiť |
|---|---|
| Krytie nenechá v tomto základe miesto pre pruty. | Zväčšite základ alebo zmenšite krytie |
| Základ je na dve vrstvy prútov vnútri krytia príliš plytký. | Urobte ho hlbší alebo zmenšite krytie |
| Čakacie pruty sa s krytím 75 mm do základu nezmestia. | Menej čakacích prútov, menší rozstup alebo väčší základ |
| Rozstup prútov musí byť 50–1000 mm. | Zadajte rozstup v tomto rozsahu |
| Dĺžka musí byť 300–50000 mm. | Rozmery základov majú limity: dĺžka a šírka 300 až 50000, hĺbka 150 až 10000 |

## Mriežky a úrovne sa odmietnu

| Správa | Čo robiť |
|---|---|
| Číslované mriežky: zadajte jeden rozstup medzi každou dvojicou osí (4). | Spočítajte medzery: päť osí potrebuje štyri rozstupy |
| Písmenové mriežky: rozstupy musia byť kladné milimetre. | Žiadne nuly, záporné hodnoty ani text |
| Číslované mriežky: označenia musia byť rôzne. | Dve osi majú rovnaké označenie |
| Najviac 60 mriežkových osí v každom smere. | Rozdeľte model |
| Ponechajte aspoň jednu úroveň. | Odstránili ste všetky riadky úrovní |
| Každá úroveň potrebuje názov. / Dve úrovne sa volajú „…“. | Dajte každej úrovni iný názov |

## Otvorenie súboru zlyhá

| Správa | Príčina |
|---|---|
| DetailCraft otvára vlastné modely (.detailcraft.json). Import IFC ešte nie je hotový. | Súbor nie je súbor `.json` |
| Toto nie je model DetailCraft (nie JSON). | Súbor je poškodený alebo ide o iný JSON |
| Toto nie je model DetailCraft. | JSON súbor z iného programu |
| Tento model uložil novší DetailCraft (formát 2). | Otvorte ho v novšom DetailCraft, ktorý ho uložil |
| Tento súbor je príliš veľký na model DetailCraft. | Viac ako 50 MB |

Pri otváraní súboru s upozorneniami, napríklad „2 prvky neboli platné a boli vynechané.“, je zvyšok modelu v poriadku. Kým nekontrolujete, čo bolo vynechané, neukladajte cez pôvodný súbor.

## Exporty

| Správa | Príčina |
|---|---|
| Zatiaľ nie je čo exportovať. | {{ui:IFC}} s prázdnym modelom |
| Nie sú žiadne diely s profilom I alebo plechy, z ktorých by sa vytvorili súbory NC. | V modeli sú len U-profily, uhlové profily alebo rúry |
| Nezapísané (zatiaľ len profily I a plechy): … | Tieto značky nie sú profily I ani plechy; zvyšok bol zapísaný |
| Žiadne základy, takže nie sú výstuže na výkaz. | {{ui:Ohýbanie}} bez základov |
| … znak(y) mimo písma PDF sa vytlačili ako „?“. | Názov modelu alebo trieda obsahuje znaky, ktoré písmo PDF nemá |

{{ui:Dielenský výkres}} je neaktívny: model zatiaľ nemá žiadne diely.

## Stiahnutia sa nezobrazujú

Každé uloženie a export je stiahnutie v prehliadači. Skontrolujte zoznam stiahnutí v prehliadači. Ak prehliadač pred stiahnutím viacerých súborov pýta potvrdenie alebo blokuje stiahnutia z tejto stránky, povoľte ich. V Safari skontrolujte tlačidlo sťahovania na paneli nástrojov.

## Klávesy nefungujú

- Kurzor je v textovom alebo číselnom poli: klávesy nástrojov a {{key:Delete}} sa tam ignorujú, aby ste mohli písať. Stlačte {{key:Tab}} alebo kliknite do zobrazenia.
- Je otvorené dialógové okno: najskôr ho zatvorte.
- Prehliadač má klávesnicu (napríklad adresný riadok): kliknite dovnútra DetailCraft.
- {{key:Ctrl+Shift+F}} používa Control aj na Macu.

## Problémy pri práci offline

Tlačidlo {{ui:Uložiť na offline použitie}} na paneli aplikácie ukazuje, v akom stave je offline kópia. Ako ukladanie funguje: [Práca offline](common:offline).

| Tlačidlo zobrazuje | Čo to znamená | Čo robiť |
|---|---|---|
| {{ui:Uložiť na offline použitie}} | V tomto prehliadači zatiaľ nie je offline kópia | Vyberte to pri pripojení na internet |
| Ukladá sa 5 z 20 | Ukladanie prebieha | Počkajte na {{ui:Pripravené offline}}; nechajte kartu otvorenú |
| {{ui:Pripravené offline}} | DetailCraft, jeho 3D zobrazenie, všetky exporty a táto pomoc fungujú bez pripojenia | Nič. Kliknutím získate {{ui:Uložiť znova (získať najnovšiu verziu)}} alebo {{ui:Odstrániť offline kópiu}} |
| {{ui:Nepodarilo sa uložiť}} | Niektoré súbory sa nestiahli | Skontrolujte pripojenie a kliknutím to skúste znova |
| {{ui:Offline nie je k dispozícii}} | Toto okno nemôže uchovať offline kópiu: súkromné okná a niektoré spravované počítače to blokujú | Použite bežné okno alebo pracujte online |

Ak ste offline a tlačidlo nehovorí {{ui:Pripravené offline}}, nenačítavajte stránku znova ani nezatvárajte kartu: to, čo sa už načítalo, ďalej funguje. Uložte model cez {{key:Mod+S}} a počkajte, kým nebudete znova online.

## Neuložená práca

Ak prehliadač pýta, či chcete opustiť stránku, DetailCraft má neuložené zmeny. Zvoľte zostať a stlačte {{key:Mod+S}}. Po zatvorení karty DetailCraft model nedokáže obnoviť.

## Stále to nejde

Zapíšte si, čo ste urobili, a presnú správu, a napíšte nám cez [stránku podpory](https://getcadcraft.com/support).
