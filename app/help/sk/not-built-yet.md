---
title: Čo ešte nie je hotové
summary: Čo táto skorá verzia DetailCraft ešte nedokáže a čo mať dnes namiesto toho.
keywords: obmedzenia, limity, chýbajúce, plán vývoja, nepodporované, pripravujeme, náhradné riešenie, plánované, todo
from: ea411885
---

DetailCraft je skorá verzia. Táto stránka uvádza, čo zatiaľ nerobí, aby ste si práce mohli naplánovať. Nič tu nie je prísľubom termínu.

## Modelovanie

| Zatiaľ nie | Namiesto toho dnes |
|---|---|
| Ťahanie jedného konca prvku (natiahnutie) | Upravte {{ui:Začiatok}} alebo {{ui:Koniec}} v časti {{ui:Konce (x, y, z mm)}} na paneli {{ui:Vlastnosti}} |
| Filter výberu (iba nosníky, iba jeden profil) | Vytvorte ťahom okno výberu a potom s {{key:Shift}}+klikom vyraďte dielce z výberu |
| Vytvoriť pole z výberu; otáčanie okolo šikmej osi; zrkadlenie v šikmej rovine | Skopírujte a prilepte ho s posunom, alebo ho {{ui:Duplikovať}}; otáčanie a zrkadlenie fungujú v pôdoryse ([Výber oknom, presun, otočenie, zrkadlenie, zmena viacerých](topic:select-and-change)) |
| Body mimo mriežky pri klikaní | Umiestnite na mriežku a potom zadajte koncové súradnice |
| Pohľady pozdĺž číslovaných osí; uložené pohľady; pracovné roviny | Použite {{ui:3D}} alebo {{ui:Pridať podľa mriežky}} |
| Otvory zobrazené ako skutočné rezy v 3D pohľade | Otvory sa zobrazujú ako tmavé zátky; v každom exporte sú skutočné |
| Zaoblené alebo šikmé výrezy, iné rezy a tvarovky | Kolmé výrezy iba na profiloch I |
| Otvory, ktoré pridáte na uholníky a kruhové rúrky | Otvory na uholníkoch vznikajú iba z [uzlových plechov diagonál](topic:brace-gussets) |
| Zadávanie v palcoch | Zadávajte milimetre (25.4 na palec) |
| Úprava alebo odstránenie vlastného profilu | Pridajte opravený profil pod novým názvom |

## Schody

| Zatiaľ nie | Namiesto toho dnes |
|---|---|
| Madlá, podesty, soklové plechy, roštové stupne, točité a dvojramenné schody | Iba priame ramená; pozri [Schody](topic:stairs) |
| Koncové rezy schodníc pri podlažiach | Schodnice s kolmým rezom; zrežte ich v softvéri vašej dielne |

## Spoje

DetailCraft vytvára šesť druhov spojov: uzlový plech diagonály (pozri [Uzlové plechy diagonál](topic:brace-gussets)); skrutkovaný nadstavec medzi dvomi kusmi jedného profilu I (pozri [Nadstavce](topic:splices)); zrezanie na pokos medzi dvomi profilmi I, zvierajúcimi uhol, iba rezom alebo so skrutkovanými čelnými doskami (pozri [Pokosové spoje](topic:mitres)); zarovnanú alebo predĺženú skrutkovanú čelnú dosku z vodorovného nosníka I stojacej stojinou k pásnici alebo stojine stĺpu I; smykovú lištu z nosníka (kolmú, šikmú alebo so sklonom) k pásnici alebo stojine stĺpu; a pätnú dosku stĺpa so štyrmi kotevnými tyčami.

| Zatiaľ nie | Namiesto toho dnes |
|---|---|
| Šikmé alebo sklonené čelné dosky | Použite [smykové lišty](topic:shear-tabs), ktoré zvládnu šikmé a sklonené nosníky |
| Príložné uholníky; výplňové plechy nadstavcov a nadstavce medzi rôznymi rozmermi; rohové uzlové plechy zvarené k nosníku a stĺpu, skosené uzlové plechy | Detailujte ich v inom softvéri, alebo pridajte plechy a otvory ručne ako voľné dielce; pozri [Nadstavce](topic:splices), [Uzlové plechy diagonál](topic:brace-gussets) |
| Skosené alebo zúžené výstuhy päty; otvory pre podlievaciu maltu; kapsa v základe pre smykový čap | Obdĺžnikové výstuhy; pozri [Pätné dosky](topic:base-plates) |
| Náhlavky; zvarené pokosy s tupým zvarom; výstuhy v línii s pásnicami druhého prvku | [Pokosový spoj](topic:mitres) s čelnými doskami a výstuhami stojiny, alebo obyčajný pokosový rez; ďalšie plechy pridajte ručne ako voľné dielce |
| Návrhové kontroly spojov (pevnosti) | Spoje overte výpočtami vášho statika; DetailCraft upozorňuje iba na vzdialenosť od okraja a rozostup |
| Podlhovasté otvory | Iba okrúhle otvory |

## Analýza

| Zatiaľ nie | Namiesto toho dnes |
|---|---|
| Návrhové kontroly nad rámec oceľových profilov I: rúrky, uholníky, profily U, zvarané tvary, štíhle alebo triedy 4 prvky, krútenie, spoje; betón: štíhlosť vybočenia, krútenie, seizmické detailovanie, dosky a steny | Karta {{ui:Analýza}} kontroluje oceľové profily I podľa AISC 360 alebo EN 1993-1-1 ([Kontrola oceľových prvkov podľa normy](topic:design-checks)); ostatné označí ako "neskontrolované"; všetko posúdi statik |
| Analýza vzpernosti, kmitanie | Analýza druhého rádu je iba P-Delta (pružná); analýza vzpernosti nie je (modálna, spektrum odozvy, časový priebeh a pushover sú na karte {{ui:Analýza}}) |
| Návrhové kontroly overené statikom | Dovtedy sú iba pomôckou: pred ich použitím skontrolujte dva alebo tri prvky ručne alebo v softvéri vášho statika |
| Zaťaženia od podlahy, vetra a snehu vypočítané z plôch za vás | Zaťaženia zadajte na prvky ručne v kN/m alebo kN |
| Odsadenia prvkov, excentrické spoje, diagonály iba v ťahu, dosky a základy v ráme | Prvky sa analyzujú na ich pracovných osiach; diagonály prenášajú ťah aj tlak |

## Výstuž

| Zatiaľ nie | Namiesto toho dnes |
|---|---|
| Okrúhle stĺpy, špirály, šikmé alebo zakrivené nosníky, dosky iné než obdĺžnikové, steny, ktoré nie sú rovné | Obdĺžnikové nosníky, stĺpy, dosky a steny ([Detailovanie železobetónu](topic:reinforced-concrete)) |
| Pruty ohnuté do presahu, posunuté presahy, presahy umiestnené podľa vášho výberu | Presahy v rovnakých krokoch, každý prút presahuje v jednom reze (ACI trieda B, EN α6 = 1.5) |
| Rohové pruty pri otvoroch, výstuž na priebojový šmyk, seizmické detailovanie (ACI 318-19, kapitola 18) | Vyrovnávacie pruty na každej strane otvoru; ostatné skontrolujte sami |
| Čítanie vlastných súborov statického programu | Exportujte z neho IFC: jeho IfcReinforcingBar sa načítajú ako pruty ([Pruty zo súboru IFC](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Tvarové kódy nad rámec rovného, jedného ohybu a tvaru U; typy ACI 315 pre rovné a jednohákové pruty | Tri tvary sa vypisujú ako BS 8666 00, 11, 21 alebo ACI typ 2; pozri [Referencia výstuže](topic:rebar-reference) |
| Metrické pruty iné než BS 4449 H8–H40 (napr. CSA 10M–35M) | Názvy ASTM soft-metric #10–#36 alebo pruty BS |

## Výkresy a exporty

| Zatiaľ nie | Namiesto toho dnes |
|---|---|
| Listy na výšku, A0 a listy vlastného formátu; výkresy celkového usporiadania pri šikmých mriežkach | Na šírku A4 až A1 a ANSI B až D ([Výkresy celkového usporiadania a montáže](topic:drawings)); PDF zmeňte na mierku pre tlač na iný formát |
| Značky zvarov na dielenských výkresoch jednotlivých dielcov; iné značky než koútové zvary | Výkresy montáže nesú značky koútových zvarov; dielenský výkres uvádza zvar textom |
| Úprava výkresu v aplikácii | Zmeňte model a výkres vytvorte znova; PDF označte v aplikácii na PDF, napríklad MarkupCraft |
| Výkresy ako DWG s objektmi kót, alebo model v mierke 1:1 v priestore modelu s listami ako rozloženiami | Každý list je DWG alebo DXF v plnej veľkosti papiera, kóty ako čiary a čísla ([Výkresy celkového usporiadania a montáže](topic:drawings#download)) |
| Otvory v kruhových rúrkach v súboroch NC, výrezy na uholníkoch a kruhových rúrkach v súboroch NC | Nezapisujú sa; pozri [Polia súboru NC](topic:nc1-fields) |
| Skosenia, značenia a vnútorné obrysy v súboroch NC | Dnes žiadne |
| Otvory pre skrutky, skrutky, zvary a základy v exporte USD | Sú vo výstupoch IFC, NC a kusovníka; pozri [Export oceľového modelu do USD](topic:usd) |
| Načítanie spojov, základov, podlhovastých alebo obdĺžnikových otvorov a otvorov v kruhových rúrkach zo súboru IFC | {{ui:Importovať IFC}} načíta nosníky, stĺpy, prvky, plechy, mriežky, úrovne, okrúhle otvory, výrezy, skrutky a výstužné pruty a jeho správa uvádza, čo vynechal |
| Vlastné rozloženia zostáv | Tri súbory CSV |

## Panely

| Zatiaľ nie | Namiesto toho dnes |
|---|---|
| Presúvanie zostáv v spodnej časti ({{ui:Problémy}}, {{ui:Kusovník}}, {{ui:Výkaz ohýbania}}) | Presúvať sa dajú iba panely {{ui:Model}} a {{ui:Vlastnosti}}. Pozri [Usporiadanie panelov](common:arrange-panels) |

## Spolupráca a ukladanie

| Zatiaľ nie | Namiesto toho dnes |
|---|---|
| Ukladanie do cloudu a synchronizácia medzi počítačmi | Ukladajte súbory `.detailcraft.json` a zdieľajte ich ako ľubovoľný súbor. Ukladanie do cloudu zatiaľ nie je k dispozícii |
| Kurzory iných ľudí a štítky "upravuje" v relácii Live TeamWork; mriežky, úrovne a fázy zlúčené položku po položke | Úpravy sa stále zlučujú (mriežky, úrovne a fázy sa zlúčia celé, platí neskoršia zmena); pozri [Spoločné detailovanie jednej konštrukcie naživo](topic:work-live) |
| Pozývacie odkazy na reláciu Live TeamWork cez internet | Pripojte sa krátkym kódom v rovnakej sieti |

## Platformy

- DetailCraft je navrhnutý pre obrazovku počítača, notebooku alebo tabletu. Funguje aj na telefóne: model si zachová obrazovku a panely a zostavy sa otvárajú ako listy z lišty v spodnej časti, ale na panely je málo miesta.
- Práca offline vyžaduje najprv uložiť DetailCraft na offline použitie tlačidlom {{ui:Uložiť na offline použitie}} na lište aplikácie; keď sa zobrazí {{ui:Pripravené offline}}, všetko v tejto verzii funguje bez pripojenia. Pozri [Práca offline](common:offline).

Ak vám niektorá z týchto medzier bráni v práci, dajte nám vedieť cez [stránku podpory](https://getcadcraft.com/support); pomôže nám to rozhodnúť, čo vyvinúť ďalej.
