---
title: Profielcatalogus
summary: Elke ingebouwde staalmaat, hoe profielnamen worden geschreven, waar de afmetingen vandaan komen, en hoe platen en eigen doorsneden worden benoemd.
keywords: profielen, doorsneden, catalogus, maten, w-profielen, brede flens, s-profielen, U-profiel, hoekstaal, hss, buis, pijp, ipe, hea, heb, upn, uk, brits, ub, uc, pfc, ea, uea, ongelijkbenig hoekstaal, shs, rhs, chs, koud gevormd, warm afgewerkt, blue book, plaat, aisc, en 10365, naamgeving
from: cd9b2bc3
---

DetailCraft heeft 2,311 ingebouwde maten, elk overgenomen uit een gepubliceerde tabel en gecontroleerd door de tests van de app: de oppervlakte berekend uit de afmetingen moet overeenkomen met de gepubliceerde oppervlakte, en het gepubliceerde gewicht moet overeenkomen met die oppervlakte maal de dichtheid van staal. Platen en eigen profielen worden gemaakt uit hun afmetingen.

## Naamgeving

- **Amerikaanse profielen** worden geschreven zoals het AISC-handboek ze afdrukt, met een kleine x: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Typen is niet hoofdlettergevoelig.
- **Pijp** wordt geschreven zoals in de AISC-database: Pipe4STD, Pipe4XS, Pipe4XXS (standaard, extra sterk, dubbel extra sterk).
- **Europese profielen** worden geschreven zoals in EN 10365: IPE200, HEA240, HEB300, UPN200 (zonder spatie).
- **Britse profielen** worden geschreven met eerst de familie, dan de maat uit de Blue Book: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Koud gevormde holle profielen beginnen met CF: CFSHS100x100x5.0. Typen zoals tekeningen het vaak noemen werkt ook: 305x165x40 UB, L100x100x10, SHS100x5.
- **Platen** zijn `PL<dikte>x<breedte>` in millimeters: PL20x200 is 20 mm dik en 200 mm breed. Elke maat uit het gereedschap {{ui:Plaat}} werkt.
- **Eigen profielen** hebben de naam die u ze geeft, zolang die geen catalogusnaam is en niet op een plaatnaam lijkt.

In de lijsten {{ui:Profiel}} noemt de kop van elke groep de bron, bijvoorbeeld "W-profielen — AISC Shapes Database v16.0".

## Bronnen

| Groep | Bron | Opmerkingen |
|---|---|---|
| W-profielen, S-profielen, U-profielen (C), hoekstaal (L), HSS, Pijp | AISC Shapes Database v16.0 | Afmetingen exact van inches naar millimeters omgerekend; massa per meter uit de gepubliceerde lb/ft |
| IPE, HEA, HEB, UPN | EN 10365:2017 | In millimeters en kg/m zoals gepubliceerd |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), tabel v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | In millimeters en kg/m zoals gepubliceerd |
| Platen | Parametrisch | Massa uit oppervlakte × 7850 kg/m³ |
| Eigen | Uw afmetingen | Massa uit oppervlakte × 7850 kg/m³ |

Hoe profielen worden getekend:

- **W-profielen:** de AISC-database geeft geen overgangsradius, dus DetailCraft tekent de overgang als r = kdes − tf.
- **S-profielen en U-profielen (C, UPN):** evenwijdige flenzen met de gepubliceerde gemiddelde dikte, hoeken recht (de echte flens is schuin).
- **Hoekstaal:** rechte hoeken.
- **Rechthoekige HSS:** de ontwerpwanddikte (0.93 × nominaal, zoals AISC 360-22 B4.2 toestaat) met een buitenhoekradius van het dubbele daarvan.
- **Ronde HSS en Pijp:** ontwerpwanddikte (0.93 × nominaal).
- **IPE, HEA, HEB, UB, UC:** de gepubliceerde wortelradius.
- **PFC, EA, UEA:** rechte hoeken (de gepubliceerde massa en oppervlakte bevatten nog steeds de radii).
- **SHS, RHS, CHS:** de nominale wand. Warm afgewerkte hoeken: buiten 1.5 t, binnen t. Koud gevormd: buiten 2 t, binnen t tot 6 mm; 2.5 t en 1.5 t tot 10 mm; 3 t en 2 t daarboven.

## De maten

Elke maat die de tabellen in deze groepen noemen, van klein naar groot:

| Groep | Maten |
|---|---|
| W-profielen (289) | W4x13 tot W44x408 |
| S-profielen (28) | S3x5.7 tot S24x121 |
| U-profielen (32) | C3x3.5 tot C15x50 |
| Hoekstaal, gelijke benen (61) | L2x2x1/8 tot L12x12x1-3/8 |
| HSS, rechthoekig en vierkant (525) | HSS1-1/2x1-1/2x1/8 tot HSS34x10x1 |
| HSS, rond (189) | HSS1.660x0.140 tot HSS28.000x1.000 |
| Pijp (51) | Pipe1/2STD tot Pipe26XS |
| IPE (18) | IPE80 tot IPE600 |
| HEA (24) | HEA100 tot HEA1000 |
| HEB (24) | HEB100 tot HEB1000 |
| UPN (18) | UPN50 tot UPN400 |
| Hoekstaal, ongelijke benen (76) | L2-1/2x1-1/2x3/16 tot L8x6x1 |
| UB (107) | UB127x76x13 tot UB1016x305x584 |
| UC (46) | UC152x152x23 tot UC356x406x1299 |
| PFC (16) | PFC100x50x10 tot PFC430x100x64 |
| EA (42) | EA20x20x3.0 tot EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 tot UEA200x150x18.0 |
| SHS, warm afgewerkt (123) | SHS40x40x3.2 tot SHS400x400x17.5 |
| RHS, warm afgewerkt (161) | RHS50x30x3.2 tot RHS500x300x17.5 |
| CHS, warm afgewerkt (103) | CHS42.4x3.2 tot CHS508.0x17.5 |
| CFSHS, koud gevormd (96) | CFSHS25x25x2.0 tot CFSHS400x400x12.5 |
| CFRHS, koud gevormd (137) | CFRHS50x25x2.0 tot CFRHS500x300x12.5 |
| CFCHS, koud gevormd (106) | CFCHS33.7x3.0 tot CFCHS508.0x16.0 |

Een gespiegeld ongelijkbenig hoekstaal is hetzelfde stuk, van uiteinde naar uiteinde gedraaid, zoals een werkplaats de tegenovergestelde uitvoering maakt: de gaten, copings en knoopplaat gaan mee.

Kies een plaatsgereedschap en een maat om de diepte, flensbreedte, lijf- en flensdikte, overgangsradius, oppervlakte (cm²), massa (kg/m) en bron te zien in het vak {{ui:Profiel}} van het paneel {{ui:Eigenschappen}}.

## Wat elke doorsnede kan

| Vorm | Gaten | Copings | Kopplaten en voetplaten | NC-bestand | Werkplaatstekening |
|---|---|---|---|---|---|
| I-profielen (W, S, IPE, HEA, HEB, UB, UC, eigen I) | Lijf, bovenflens, onderflens | Ja | Kopplaten: ligger en kolom. Voetplaten: ja | Ja | Ja |
| U-profielen (C, UPN, PFC) | Lijf, bovenflens, onderflens | Nee | Alleen voetplaten | Ja | Ja |
| Rechthoekige HSS, SHS, RHS | Zijwand (lijf), boven, onder | Nee | Alleen voetplaten | Ja | Ja |
| Ronde HSS, Pijp, CHS | Nog niet | Nee | Alleen voetplaten | Ja | Ja |
| Hoekstaal (L, EA, UEA) | Nog niet | Nee | Alleen voetplaten | Ja | Ja |
| Platen en eigen plat staal | Plaatvlak | Nee | Nee | Ja | Ja |

Voor een rechthoekige buis gaat een gat op het vlak "lijf" door beide zijwanden. Wat elk NC-bestand bevat, staat in [NC-bestandsvelden](topic:nc1-fields).

## Een andere maat nodig?

Voeg die toe als een [eigen profiel](topic:plates-and-profiles#add-a-custom-profile). De ingebouwde lijst kan vanuit de app nog niet worden bewerkt.
