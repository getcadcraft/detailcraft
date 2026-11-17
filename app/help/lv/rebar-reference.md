---
title: Stiegrojuma atsauce
summary: Stieņu izmēri, āķu izmēri, formas kodi, griešanas garumi un liekšanas specifikācijas kolonnas, ko DetailCraft izmanto.
keywords: stiegrojums, stieņu izmēri, āķi, liekuma diametrs, formas kodi, griešanas garums, liekšanas specifikācija, stieņu saraksts, ASTM A615, ACI 318
from: 1583535e
---

## Stieņu izmēri

No ASTM A615/A615M 1. tabulas (collu designācijas). Milimetri un kg/m ir precīzas pārrēķinu vērtības no publicētajām collu un lb/ft vērtībām. Sarakstos katrs izmērs parādīts kā, piemēram, "#5 (15.9 mm)".

| Stienis | Diametrs (mm) | Masa (kg/m) | Laukums (mm²) | Iekšējais liekuma diametrs | 90° āķa kāja, ārpuses līdz ārpusei (mm) |
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

[DetailCraft iestatījumos](topic:settings) ({{ui:Stiegrojums}}) **ASTM stieņu nosaukumi** var rādīt šos stieņus to mīkstajos metriskajos A615M nosaukumos: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (tie paši stieņi; ACI 315-99 1. tabulā ir abi nosaukumi).

### Metriskie stieņi (BS 4449)

| Stienis | Diametrs (mm) | kg/m | Min. liekuma rādiuss r (mm) | Āķa kāja = gala izvirzījums P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Masa ir nominālais šķērsgriezums, reizināts ar 7850 kg/m³. Rādiuss un gala izvirzījums ir BS 8666:2020 minimālās vērtības (tās minimālo izmēru tabula; agrākais diametrs ir 2r). Pamatiem ar BS stieņiem āķu kājas ir P, un griešanas garumi tiek aprēķināti pēc zemāk esošajām BS 8666 formulām. Iestatījumos izvēloties Eiropas tēraudu, jauni pamati tiek sākti ar H16 tīkliem un H20 sākuma stieņiem C30/37 betonā.

## Āķi

ASTM stieņi: standarta 90° āķi pēc ACI 318-19 25.3.1. tabulas: iekšējais liekuma diametrs 6 db stieņiem no #3 līdz #8 un 8 db stieņiem no #9 līdz #11, ar taisnu pagarinājumu 12 db aiz liekuma. Āķa kāja, mērot ārpuses līdz ārpusei, ir puse no liekuma diametra + db + 12 db.

Ja tīkla stieņa āķis neiekļaujas pamata dziļumā aiz aizsargslāņa, DetailCraft saīsina kāju, lai tā ietilptu, un parāda brīdinājumu.

## Formas

DetailCraft glabā trīs formas. Liekšanas specifikācijā tās tiek drukātas kā DetailCraft kodi, kā ACI 315 tipi vai kā BS 8666 formas kodi: iestatījumos [DetailCraft iestatījumi](topic:settings) ({{ui:Stiegrojums}}) izvēlieties **Liekšanas specifikācijas formas kodi**.

| Kods | Forma | Izmēri |
|---|---|---|
| S | Taisns | A = garums |
| L | Viens 90° liekums | A = pamatkāja, B = āķa kāja, abas ārpuses līdz ārpusei |
| U | Divi 90° liekumi vienā pusē | A = vidus, B un C = abas kājas, ārpuses līdz ārpusei |

Tīkla stieņi ar ieslēgtiem {{ui:Gala āķi}} ir U; bez tiem — S. Sākuma stieņi ar ieslēgtu {{ui:Āķis apakšā}} ir L; bez tā — S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Fig. 10) |
|---|---|---|
| S | 00, L = A | nav tipa numura |
| L | 11, L = A + B − 0.5r − d | nav tipa numura: attēlā nav stieņa ar vienu āķi |
| U | 21, A un C ir kājas, B ir vidus: L = A + B + C − r − 2d | 2. tips, āķi A un G, taisns B |

Ar BS 8666 vai ACI 315 kodiem specifikācijas kolonnas A, B un C seko šī standarta apzīmējumiem (U vidus ir B).

## Griešanas garums

BS 4449 stieņiem griešanas garums ir BS 8666 formula stieņa formas kodam (augstāk). ASTM stieņiem tas ir precīzs stieņa centrālās līnijas garums: taisnās daļas plus liekumi kā loki ar rādiusu, kas vienāds ar pusi no liekuma diametra plus pusi no stieņa diametra. To neaprēķina no liekuma atskaitījumu tabulas, tāpēc tas var atšķirties par dažiem milimetriem no specifikācijas, kas izmanto šādu tabulu.

## Izkārtojums

- Apakšējais tīkls: stieņi gar L veido apakšējo kārtu, stieņi gar B atrodas uz tiem. Katrs komplekts vienmērīgi izvietots pa pamatu aiz aizsargslāņa ar soli, ko norādāt, vai mazāku, vismaz divi stieņi.
- Sākuma stieņi: režģis no stieņiem gar L un gar B ar norādītajiem soļiem, centrēts uz pamata, balstās uz tīkla un izvirzās virs augšas par norādīto izvirzījumu. Katrs āķis vērsts uz āru.

## Pārbaudes

| Pārbaude | Noteikums | Rezultāts |
|---|---|---|
| Stieņiem pietiek vietas | Aizsargslāņi abās pusēs atstāj vietu stieņiem | Noraidīts, ja nav |
| Dziļums divām kārtām | Dziļums mīnus divi aizsargslāņi ietver abas tīkla kārtas | Noraidīts, ja nav |
| Sākuma stieņi ietilpst | Sākuma režģis ietilpst aiz aizsargslāņa | Noraidīts, ja nav |
| Brīvais solis | Vismaz lielākais no 25.4 mm un db (ACI 318-19 25.2.1; piedevu izmērs netiek pārbaudīts) | Brīdinājums |
| Āķa dziļums | Āķa kāja ietilpst dziļumā aiz aizsargslāņa | Brīdinājums, kāja saīsināta |
| Sākuma āķi | Āķi neiziet ārpus aizsargslāņa | Brīdinājums |

## Liekšanas specifikācijas kolonnas

Cilnē {{ui:Liekšanas specifikācija}} un tās CSV ir šādas kolonnas: Stieņa zīme, Izmērs, Forma, A (mm), B (mm), C (mm), Skaits, Griešanas garums (mm), Kopējais garums (m), kg/m, Svars katrs (kg), Kopējais svars (kg), Izmantojums. Pēdējā rindā ir skaita, garuma un svara kopsummas.
