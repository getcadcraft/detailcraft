---
title: Armeringsreferens
summary: Järndimensioner, hakmått, formkoder, kapade längder och kolumnerna i bockningsförteckningen som DetailCraft använder.
keywords: armering, järnstorlekar, hakar, böjdiameter, formkoder, kapad längd, bockningsförteckning, järnlista, astm a615, aci 318
from: 1583535e
---

## Armeringsdimensioner

Från ASTM A615/A615M tabell 1 (tumbeteckningar). Millimeter och kg/m är exakta omräkningar av de publicerade värdena i tum och lb/ft. Listorna visar varje dimension, till exempel "#5 (15.9 mm)".

| Järn | Diameter (mm) | Massa (kg/m) | Area (mm²) | Innerdiameter vid böj | 90°-haklängd, utsida till utsida (mm) |
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

I [DetailCraft-inställningar](topic:settings) ({{ui:Armering}}) kan **ASTM-järnnamn** visa dessa järn med sina mjuka metriska A615M-namn i stället: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (samma järn; ACI 315-99 tabell 1 listar båda).

### Metriska järn (BS 4449)

| Järn | Diameter (mm) | kg/m | Minsta böjradie r (mm) | Haklängd = ändutsprång P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Massan är nominellt tvärsnitt gånger 7850 kg/m³. Radien och ändutsprånget är minimivärdena i BS 8666:2020 (dess tabell över minimimått; den tidigare diametern är 2r). Plintar med BS-järn får haklängder på P och kapade längder enligt BS 8666-formlerna nedan. Om du väljer europeiskt stål i inställningarna startar nya plintar med H16-mattor och H20-startjärn i C30/37-betong.

## Hakar

ASTM-järn: standardhakar på 90° enligt ACI 318-19 tabell 25.3.1: innerdiameter vid böj 6 db för #3 till #8 och 8 db för #9 till #11, med en rak förlängning på 12 db efter böjen. Haklängden, mätt utsida till utsida, är halva böjdiametern + db + 12 db.

Om hakan på ett mattjärn inte ryms i plintens djup innanför täckskiktet kortar DetailCraft benet så att det ryms och visar en varning.

## Former

DetailCraft lagrar tre former. Bockningsförteckningen skriver ut dem som DetailCrafts koder, som ACI 315-typer eller som BS 8666-formkoder: välj **Formkoder i bockningsförteckningen** i [DetailCraft-inställningar](topic:settings) ({{ui:Armering}}).

| Kod | Form | Mått |
|---|---|---|
| S | Rak | A = längd |
| L | En böj på 90° | A = huvudben, B = haklängd, båda utsida till utsida |
| U | Två böjar på 90° åt samma sida | A = mitten, B och C = de två benen, utsida till utsida |

Mattjärn med {{ui:Ändhakar}} på är U, annars S. Startjärn med {{ui:Hake i botten}} på är L, annars S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Fig. 10) |
|---|---|---|
| S | 00, L = A | inget typnummer |
| L | 11, L = A + B − 0.5r − d | inget typnummer: figuren har inget järn med en krok |
| U | 21, A och C benen, B mitten: L = A + B + C − r − 2d | Typ 2, hakar A och G, rak B |

Med BS 8666- eller ACI 315-koder följer förteckningens kolumner A, B och C respektive standards beteckningar (mitten på en U är B).

## Kapad längd

För BS 4449-järn är den kapade längden BS 8666-formeln för järnets formkod (ovan). För ASTM-järn är den den exakta längden på järnets mittlinje: de raka delarna plus böjarna som bågar med radien halva böjdiametern plus halva järndiametern. Den räknas inte fram ur en tabell över böjavdrag, så den kan skilja sig några millimeter från en förteckning som använder en sådan.

## Layout

- Nedre matta: järn längs L bildar det nedre lagret, järn längs B ligger på dem. Varje uppsättning sprids jämnt över plinten innanför täckskiktet, med det avstånd du anger eller tätare, med minst två järn.
- Startjärn: ett rutnät av järn längs L och längs B med de avstånd du anger, centrerat på plinten, stående på mattan och sticker upp över ovansidan med det utsprång du anger. Varje haka pekar utåt.

## Kontroller

| Kontroll | Regel | Resultat |
|---|---|---|
| Plats för järn | Täckskikt på båda sidor ger utrymme för järnen | Vägras om inte |
| Djup för två lager | Djupet minus två täckskikt rymmer båda mattlagren | Vägras om inte |
| Startjärnen ryms | Startrutnätet ryms innanför täckskiktet | Vägras om inte |
| Fritt avstånd | Minst det största av 25.4 mm och db (ACI 318-19 25.2.1; ballastens storlek kontrolleras inte) | Varning |
| Krokdjup | Haklängden ryms i djupet innanför täckskiktet | Varning, benet kortas |
| Startjärnens hakar | Hakarna stannar utanför täckskiktet | Varning |

## Kolumner i bockningsförteckningen

Fliken {{ui:Bockningsförteckning}} och dess CSV har dessa kolumner: Postnummer, Dimension, Form, A (mm), B (mm), C (mm), Antal, Kapad längd (mm), Total längd (m), kg/m, Vikt per styck (kg), Total vikt (kg), Används för. Sista raden summerar antal, längd och vikt.
