---
title: Schodiská
summary: Umiestnite priame oceľové schodisko podľa výstupnej výšky, nášľapnej hĺbky a šírky: dve bočnice a plechové stupne, jedna zváraná zostava.
keywords: schodisko, schody, schodište, bočnica, stupeň, výstupná výška, hrana stupňa, rameno, oceľové schodisko, ibc 1011, blondel
from: 62fa3845
---

Priame oceľové schodisko: dve bočnice (U-profily s pätami dovnútra alebo ploché tyče na hrane) a plechový stupeň pri každom výstupe, zvarené medzi nimi. DetailCraft vypočíta počet výstupných výšok zo stúpania, skontroluje ich voči limitom stavebného predpisu a schodisko urobí ako jednu zostavu v dielni.

## Umiestnenie schodiska

1. Zvoľte {{ui:Stair}} v skupine {{ui:Place}}, alebo stlačte {{key:S}}.
2. Nastavte schodisko vpravo: **smer stúpania** (0° stúpa pozdĺž +x, 90° pozdĺž +y), **výšku** (0 = až po ďalšiu úroveň), **nášľapnú hĺbku**, **čistú šírku** medzi bočnicami, **najvyššiu povolenú výstupnú výšku**, **bočnicu**, **hrúbku plechu stupňa**, **previs hrany** a materiál.
3. Kliknite na priesečník mriežky: to je päta prvej výstupnej výšky, na osi schodiska.

Stavový riadok uvedie, koľko výstupných výšok vytvoril. Vyberte schodisko (kliknite na bočnicu alebo stupeň), ak chcete zmeniť ľubovoľné jeho nastavenie, jeho polohu alebo fázu; vlastnosti zobrazujú aj výstupné výšky, stupne, pôdorysný priemet, sklon a 2 × výstupná výška + nášľapná hĺbka.

## Čo DetailCraft vypočíta

- **Výstupné výšky.** Čo najmenej, aby každá zostala na najvyššej povolenej alebo pod ňou: výška 3000 mm pri 178 mm alebo menej dá 17 výstupných výšok po 176.5 mm. Stupňov je o jeden menej než výstupných výšok (horné podlažie je posledný krok).
- **Stupne.** Plech hlbký nášľapnú hĺbku + previs (280 + 25 = PL6x305 predvolene) a dlhý ako čistá šírka, jeho horná hrana na výške každej výstupnej výšky, jeho predná hrana (hrana stupňa) pred čiarou výstupnej výšky.
- **Bočnice.** Pri sklone schodiska, od miesta, kde sa stretávajú s nižším podlažím, po miesto, kde sa stretávajú s vyšším podlažím, tesne mimo čistej šírky; ich horná hrana 50 mm nad čiarou hrán stupňov. Päty U-profilu smerujú dovnútra schodiska; ploché tyče ako PL12x250 stoja na hrane.
- **Zvary.** Každý stupeň k obom bočniciam. Stupne a pravá bočnica sú zvarené k ľavej bočnici, takže schodisko dostane jednu značku zostavy (ST1) a vlastný zostavový výkres; bočnice dostanú značky dielcov st…, stupne p….
- **Kontroly.** Upozornenia, keď je výstupná výška mimo 4 až 7 palcov (102 až 178 mm) alebo nášľapná hĺbka pod 11 palcov (279 mm), to sú limity IBC 2021, oddiel 1011.5.2; keď je 2 × výstupná výška + nášľapná hĺbka mimo 600 až 650 mm (bežné pravidlo pohodlia), a keď je bočnica príliš plytká na únosnosť stupňov. Neznámy profil bočnice zastaví vytvorenie schodiska.

## Dobré vedieť

- Presun, otočenie, zrkadlenie, kopírovanie, vloženie, zmazanie a fázy fungujú na schodisku ako na prvku. Otočenie otáča stúpanie; zrkadlenie ho pošle zrkadlovo.
- Bočnice sa exportujú do IFC ako IfcMember a stupne ako IfcPlate; obe idú do súborov NC a do kusovníka. Kontrola kolízií necháva vlastné dielce schodiska bez zásahu (sú spolu zvarené).
- Toto jednoduché schodisko je jeden beh s plechovými stupňami. Pre podesty, zábradlia s tyčkami, stupne z ohnutého plechu alebo roštu, zvolené pravidlá, rezací zoznam a výkresy otvorov v bočniciach zaškrtnite {{ui:Use the steel stair generator}} v nástroji Schodisko (pozri Generátor oceľového schodiska).
- Bočnice sú rezané kolmo: ich koncové rezy voči podlahám sa nevytvárajú.
- DetailCraft schodisko nenavrhuje: bočnice a stupne sa neoverujú na pevnosť ani prehyb.
