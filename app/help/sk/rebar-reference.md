---
title: Referencia výstuže
summary: Veľkosti prútov, rozmery háčikov, kódy tvarov, rezné dĺžky a stĺpce výkazu ohýbania, ktoré DetailCraft používa.
keywords: výstuž, veľkosti prútov, háky, priemer ohybu, kódy tvarov, rezná dĺžka, výkaz ohýbania, zoznam prútov, astm a615, aci 318
from: 1583535e
---

## Veľkosti prútov

Podľa ASTM A615/A615M, tabuľka 1 (označenia v palcovej sústave). Milimetre a kg/m sú presné prepočty publikovaných hodnôt v palcoch a lb/ft. Zoznamy uvádzajú každú veľkosť napríklad ako "#5 (15.9 mm)".

| Prút | Priemer (mm) | Hmotnosť (kg/m) | Plocha (mm²) | Vnútorný priemer ohybu | Rameno 90° háku, vonkajší rozmer (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

V [nastaveniach DetailCraft](topic:settings) ({{ui:Výstuž}}) môžu **názvy prútov podľa ASTM** zobrazovať tieto prúty namiesto toho pod ich mäkkými metrickými názvami A615M: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (ide o rovnaké prúty; ACI 315-99, tabuľka 1, uvádza obe).

### Metrické prúty (BS 4449)

| Prút | Priemer (mm) | kg/m | Min. polomer ohybu r (mm) | Rameno háku = previsnutie konca P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Hmotnosť je menovitý prierez násobený 7850 kg/m³. Polomer a previsnutie konca sú minimá podľa BS 8666:2020 (jej tabuľka minimálnych rozmerov; dovtedajší priemer je 2r). Pätky z prútov BS dostanú ramená háku P a rezné dĺžky podľa vzorcov BS 8666 uvedených nižšie. Voľba európskej ocele v nastaveniach spustí nové pätky s výstužnými sieťami H16 a čakacími prútmi H20 v betóne C30/37.

## Háky

Prúty podľa ASTM: štandardné 90° háky podľa ACI 318-19, tabuľka 25.3.1: vnútorný priemer ohybu 6 db pre #3 až #8 a 8 db pre #9 až #11, s rovným predĺžením 12 db za ohybom. Rameno háku, merané vonkajším rozmerom, je polovica priemeru ohybu + db + 12 db.

Ak háčik prúta výstužnej siete nevojde do hĺbky pätky vnútri krytia, DetailCraft skráti rameno tak, aby sa zmestilo, a uvedie upozornenie.

## Tvary

DetailCraft ukladá tri tvary. Výkaz ohýbania ich vypíše ako kódy DetailCraft, ako typy podľa ACI 315 alebo ako tvarové kódy podľa BS 8666: vyberte **Kódy tvarov výkazu ohýbania** v [nastaveniach DetailCraft](topic:settings) ({{ui:Výstuž}}).

| Kód | Tvar | Rozmery |
|---|---|---|
| S | Rovný | A = dĺžka |
| L | Jeden 90° ohyb | A = hlavné rameno, B = rameno háku, obe vonkajším rozmerom |
| U | Dva 90° ohyby na tej istej strane | A = stred, B a C = dve ramená, vonkajším rozmerom |

Prúty výstužnej siete so zapnutým {{ui:Háky na koncoch}} sú U; bez nich S. Čakacie prúty so zapnutým {{ui:Hák dole}} sú L; bez neho S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (obr. 10) |
|---|---|---|
| S | 00, L = A | bez čísla typu |
| L | 11, L = A + B − 0.5r − d | bez čísla typu: obrázok nemá prút s jedným háčikom |
| U | 21, A a C ramená, B stred: L = A + B + C − r − 2d | Typ 2, háky A a G, rovný B |

Pri kódoch BS 8666 alebo ACI 315 stĺpce A, B a C vo výkaze nasledujú označenie danej normy (stred U je B).

## Rezná dĺžka

Pri prútoch BS 4449 je rezná dĺžka vzorec BS 8666 podľa tvarového kódu prúta (vyššie). Pri prútoch ASTM je to presná dĺžka osi prúta: rovné časti plus ohyby ako oblúky s polomerom rovným polovici priemeru ohybu plus polovici priemeru prúta. Nevypočíta sa z tabuľky odpočtov pre ohyby, preto sa môže od výkazu, ktorý takú tabuľku používa, líšiť o niekoľko milimetrov.

## Rozmiestnenie

- Spodná sieť: prúty pozdĺž L tvoria spodnú vrstvu, prúty pozdĺž B ležia na nich. Každá sada je rovnomerne rozložená po pätke vnútri krytia, s roztečou, ktorú zadáte, alebo menšou, a najmenej dva prúty.
- Čakacie prúty: mriežka prútov pozdĺž L a pozdĺž B s roztečami, ktoré zadáte, vycentrovaná na pätke, stojaca na sieti a presahujúca nad hornú hranu o previsnutie, ktoré zadáte. Každý háčik smeruje von.

## Kontroly

| Kontrola | Pravidlo | Výsledok |
|---|---|---|
| Miesto pre prúty | Krytie na oboch stranách nechá miesto pre prúty | Odmietnuté, ak nie |
| Hĺbka pre dve vrstvy | Hĺbka mínus dve krytia pojme obe vrstvy sietí | Odmietnuté, ak nie |
| Čakacie prúty sa zmestia | Mriežka čakacích prútov sa zmestí vnútri krytia | Odmietnuté, ak nie |
| Voľná vzdialenosť | Najmenej väčšia z hodnôt 25.4 mm a db (ACI 318-19, 25.2.1; veľkosť kameniva sa nekontroluje) | Upozornenie |
| Hĺbka háku | Rameno háku sa zmestí do hĺbky vnútri krytia | Upozornenie, rameno skrátené |
| Háky čakacích prútov | Háky zostanú mimo krytia | Upozornenie |

## Stĺpce výkazu ohýbania

Karta {{ui:Výkaz ohýbania}} a jej CSV majú tieto stĺpce: Značka prúta, Veľkosť, Tvar, A (mm), B (mm), C (mm), Počet, Rezná dĺžka (mm), Celková dĺžka (m), kg/m, Hmotnosť kusu (kg), Celková hmotnosť (kg), Použitie. Posledný riadok sčítava počet, dĺžku a hmotnosť.
