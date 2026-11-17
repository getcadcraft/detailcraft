---
title: Wapen 'n reghoekige betonkolom
summary: 'n Uitgewerkte voorbeeld van die detaillering van 'n reghoekige betonkolom in DetailCraft: plaas dit, gee dit lengtestawe en bande, lees die kontroles, die oorlapping daarbo en die staafmerke, en teken sy werkswinkelblad.
keywords: betonkolom, reghoekige kolom, kolomwapening, lengtestawe, vertikale stawe, bande, hoepels, dwarsbande, oorlapsplitsing, splitsing, beginstawe, kolomstaalverhouding, 1 persent, 8 persent, bandafstand, ACI 318-19 25.7.2, EN 1992-1-1 9.5, werkswinkeltekening, staafmerke, 8C1, 3C2
from: aee2a3ca
---

Hierdie onderwerp neem een vierkantige kolom van niks tot 'n gekontroleerde, getekende en gerangskikte detail. Die algemene reëls vir balke, plate en mure is in [Detailleer gewapende beton](topic:reinforced-concrete); dit is die kolom se kant daarvan, met getalle wat jy kan herhaal.

:::warning
DetailCraft detailleer die stawe wat jy dit gee. Dit ontwerp hulle nie. Die stawe hieronder is beginwaardes vir die voorbeeld, nie 'n aanbeveling nie: die ontwerpende ingenieur kies die grootte, die aantal en die afstand.
:::

## Wat 'n kolom hier is

'n Reghoekige kolom het 'n breedte (langs sy plaaslike x) en 'n diepte dwars (langs sy plaaslike y), 'n vrye dekking tot die bande, lengtestawe op elke vlak en geslote bande. Die draai van die kolom draai die hele ding; die vlakke bly "breedtevlak" en "dieptevlak".

- Die lengtestawe word gegee as die aantal op 'n breedtevlak en die aantal op 'n dieptevlak. Die hoekstawe tel op albei, so 3 en 3 maak 8 stawe; 4 en 4 maak 12.
- Die bande is geslote reghoeke met twee haakies by een hoek, 135° of 90°. Die eerste band is 'n vaste afstand bo die vloer (en onder die volgende), die eindsones het 'n nouer afstand, die middel een 'n wyer.
- Wat die stawe bo doen: loop deur en oorlap met die stawe daarbo, buig met 90°-haakies in die vloer in, of stop onder die bo.

## Die uitgewerkte kolom

'n 400 × 400 mm kolom, 3600 mm tussen die vloer daarbo en die vloer daaronder, #8 lengtestawe, #3 bande, 40 mm vrye dekking, f'c 28 MPa, fy 420 MPa, ACI 318-19, binnekant.

1. Maak die {{ui:Beton}}-oortjie oop en stel die roosterlyne en vlakke waarop die kolom staan op (linkerpaneel).
2. In {{ui:Voeg by rooster}}, kies {{ui:Betonkolom}}, kies die roosterkruising en die twee vlakke, stel {{ui:Breedte (mm)}} en {{ui:Diepte oor (mm)}} op 400 en kies {{ui:Voeg by}}.
3. In die {{ui:Eienskappe}}-paneel stel:
   - {{ui:Vrye dekking (mm)}} 40;
   - {{ui:Lengtestawe}} #8, {{ui:Stawe op 'n breedtevlak}} 3, {{ui:Stawe op 'n dieptevlak}} 3;
   - {{ui:Bande}} #3, {{ui:Haakse}} 135°, {{ui:Afstand tussen (mm)}} 300, {{ui:Lengte van eindsone (mm)}} 600, {{ui:Afstand in die eindsones (mm)}} 150, {{ui:Eerste een vanaf die vlak (mm)}} 50;
   - {{ui:Stawe bo}} {{ui:Loop deur en oorlap met die stawe daarbo}}.

Elke verandering is een ontdoen-stap.

### Wat jy kry

| Deel | Resultaat |
|---|---|
| Lengtestawe | 8 stawe #8 ('n 3 × 3-ring), elk 4375 mm lank: die 3600 mm kolom plus 'n 775 mm oorlapping daarbo |
| Oorlapping | 757 mm benodig vir 'n drukoorlapping (ACI 318-19 25.5.5.1, fy 420), 775 mm voorsien: die behoefte afgerond na die volgende 25 mm |
| Bande | 17 bande #3, elk met 'n snylengte van ongeveer 1359 mm, 150 mm gespasieer in die twee 600 mm eindsones en 300 mm tussenin |
| Staalverhouding | 2.5 % van die bruto deursnit (perke 1 % tot 8 %, ACI 318-19 10.6.1.1) |
| Vrye afstand van die stawe | 112 mm (benodig ten minste 40 mm, ACI 318-19 25.2.3) |
| Bandafstand | 300 mm (toegelaat 400 mm: die kleinste van 16 staafdeursnee, 48 bandeursnee en die kleiner sy, ACI 318-19 25.7.2.1) |
| Bandgrootte | #3 (toegelaat tot 9.5 mm, ACI 318-19 25.7.2.2) |

Alles hiervan is in die element se {{ui:Kontroles}}-lys; die oorlapping is ook in {{ui:Oorlappings en verankering}}.

## Dwarsbande

Met een omtrekband word net die hoekstawe vasgehou. ACI 318-19 25.7.2.3 laat 'n middelstaaf op 'n vlak sonder steun toe as dit binne 150 mm vry van 'n hoekstaaf is. Met 3 stawe op 'n vlak, soos hierbo, word dit gehaal. Met 4 of meer stawe op 'n vlak nie, en DetailCraft sê dit as 'n waarskuwing ({{ui:Kontroles}} en Probleme): "dwarsbande" is nodig. **Dwarsbande word nog nie geteken nie**: voeg hulle met die hand in die tekening by, of kies minder stawe op die vlak.

Vir EN 1992-1-1 kontroleer DetailCraft die staafgrootte (ten minste 8 mm), die aantal stawe (ten minste 4), die staaloppervlak (0.2 % tot 4 % van die deursnit), die vrye afstand en die bandafstand (9.5.2 en 9.5.3).

## Die oorlapping, die fondasie en die kolom daaronder

- Waar **'n fondasie van die model onder die kolom staan**, oorlap die kolom met die fondasie se beginstawe, en hul oorlapping word ook gekontroleer.
- Waar **'n ander kolom van die model daaronder staan**, oorlap dit met daardie kolom se stawe.
- Gee jou eie {{ui:Oorlappingslengte (mm, 0 = soos nodig)}} om te oorheers; een korter as wat nodig is, is 'n probleem en word met * in die tabel gemerk.
- Drukoorlappings word standaard gebruik ({{ui:Drukoorlapping}} in die instellings); kies {{ui:Trekoorlapping}} wanneer die kolom in trek kan wees.

## Merke, rooster en die werkswinkelblad

Identiese stawe deel een merk: die lengtestawe van die kolom daarbo is 8C1, sy bande 17C2 (die getal eerste, dan die soortletter C vir kolom en die lopende nommer). Hulle verskyn in die {{ui:Buigskedule}}-oortjie, met die snylengte en die gewig, en in die CSV van {{ui:Uitvoer}} › {{ui:Meer}} › {{ui:Buig}}.

Kies {{ui:Werkswinkeltekening}} langs die kolom vir 'n blad met die kolom in aansig (elke staaf, sy merk, die bandsones en die oorlapping gemeet) en 'n snit in die middel, gevolg deur die buigblad. Stoor {{ui:Hierdie blad as PDF}}.

## Wat dit nie doen nie

- Ronde kolomme en spirale, en kolomme wat nie reghoekig is nie: nie gebou nie.
- Hoek- en dwarsbande binne die deursnit, en seismiese detaillering (ACI 318-19 hoofstuk 18): nie gebou nie.
- Splitsings op posisies wat jy kies, of verspring: alle stawe oorlap by een deursnit.
- Of die stawe genoeg is vir die las: dit is die ingenieur se ontwerp.
