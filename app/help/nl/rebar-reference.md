---
title: Wapeningsreferentie
summary: Staafmaten, haakafmetingen, vormcodes, snijlengten en de kolommen van de buigstaat die DetailCraft gebruikt.
keywords: wapening, staafmaten, haken, buigdiameter, vormcodes, snijlengte, buigstaat, staflijst, astm a615, aci 318
from: 1583535e
---

## Staafmaten

Volgens ASTM A615/A615M tabel 1 (aanduidingen in inch-pound). Millimeters en kg/m zijn exacte omrekeningen van de gepubliceerde inch- en lb/ft-waarden. De lijsten tonen elke maat als bijvoorbeeld "#5 (15.9 mm)".

| Staaf | Diameter (mm) | Massa (kg/m) | Oppervlakte (mm²) | Binnendiameter van de buiging | Haakbeen 90°, buiten-op-buiten (mm) |
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

In [DetailCraft-instellingen](topic:settings) ({{ui:Wapening}}) kunnen **ASTM-staafnamen** deze staven tonen met hun zachte metrische A615M-namen: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (dezelfde staven; ACI 315-99 tabel 1 geeft beide).

### Metrische staven (BS 4449)

| Staaf | Diameter (mm) | kg/m | Min. buigradius r (mm) | Haakbeen = eindoverstek P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

De massa is de nominale doorsnede maal 7850 kg/m³. De radius en het eindoverstek zijn de minimumwaarden van BS 8666:2020 (de tabel met minimumafmetingen; de vroegere diameter is 2r). Funderingen met BS-staven krijgen haakbenen van P en snijlengten volgens de BS 8666-formules hieronder. Kiest u Europees staal in de instellingen, dan starten nieuwe funderingen met H16-matten en H20-aansluitstaven in C30/37-beton.

## Haken

ASTM-staven: standaard 90°-haken volgens ACI 318-19 tabel 25.3.1: binnendiameter van de buiging 6 db voor #3 tot #8 en 8 db voor #9 tot #11, met een rechte verlenging van 12 db voorbij de buiging. Het haakbeen, gemeten buiten-op-buiten, is de halve buigdiameter + db + 12 db.

Past de haak van een matstaaf niet in de funderingsdiepte binnen de dekking, dan verkort DetailCraft het been zodat het past en toont het een waarschuwing.

## Vormen

DetailCraft slaat drie vormen op. De buigstaat drukt ze af als DetailCraft-codes, als ACI 315-typen of als BS 8666-vormcodes: kies **Vormcodes van de buigstaat** in [DetailCraft-instellingen](topic:settings) ({{ui:Wapening}}).

| Code | Vorm | Afmetingen |
|---|---|---|
| S | Recht | A = lengte |
| L | Eén buiging van 90° | A = hoofdbeen, B = haakbeen, beide buiten-op-buiten |
| U | Twee buigingen van 90° aan dezelfde kant | A = midden, B en C = de twee benen, buiten-op-buiten |

Matstaven met {{ui:Eindhaken}} aan zijn U; zonder aan zijn S. Aansluitstaven met {{ui:Haak onderaan}} aan zijn L; zonder aan zijn S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Fig. 10) |
|---|---|---|
| S | 00, L = A | geen typenummer |
| L | 11, L = A + B − 0.5r − d | geen typenummer: de figuur heeft geen staaf met één haak |
| U | 21, A en C de benen, B het midden: L = A + B + C − r − 2d | Type 2, haken A en G, recht B |

Met BS 8666- of ACI 315-codes volgen de kolommen A, B en C van de buigstaat de lettering van die norm (het midden van een U is B).

## Snijlengte

Voor BS 4449-staven is de snijlengte de BS 8666-formule van de vormcode van de staaf (hierboven). Voor ASTM-staven is het de exacte lengte van de hartlijn van de staaf: de rechte delen plus de buigingen als bogen met een straal van de halve buigdiameter plus de halve staafdiameter. Die wordt niet berekend uit een tabel met buigaftrekken, dus ze kan een paar millimeter afwijken van een buigstaat die er wel een gebruikt.

## Indeling

- Onderste mat: staven langs L vormen de onderste laag, staven langs B liggen erop. Elke set is gelijkmatig verdeeld over de fundering binnen de dekking, op de opgegeven afstand of dichter, met minstens twee staven.
- Aansluitstaven: een raster van staven langs L en langs B op de opgegeven afstanden, gecentreerd op de fundering, op de mat staand en boven de bovenkant uitstekend met het opgegeven uitsteeksel. Elke haak wijst naar buiten.

## Controles

| Controle | Regel | Resultaat |
|---|---|---|
| Ruimte voor staven | De dekking aan beide zijden laat ruimte voor de staven | Geweigerd als dat niet zo is |
| Diepte voor twee lagen | De diepte minus twee dekkingen houdt beide matlagen | Geweigerd als dat niet zo is |
| Aansluitstaven passen | Het raster van aansluitstaven past binnen de dekking | Geweigerd als dat niet zo is |
| Vrije afstand | Minstens het grootste van 25.4 mm en db (ACI 318-19 25.2.1; aggregaatgrootte niet gecontroleerd) | Waarschuwing |
| Haakdiepte | Het haakbeen past in de diepte binnen de dekking | Waarschuwing, been verkort |
| Haken aansluitstaven | De haken blijven buiten de dekking | Waarschuwing |

## Kolommen van de buigstaat

Het tabblad {{ui:Buigstaat}} en de CSV ervan hebben deze kolommen: Staafmerk, Maat, Vorm, A (mm), B (mm), C (mm), Aantal, Snijlengte (mm), Totale lengte (m), kg/m, Gewicht per stuk (kg), Totaal gewicht (kg), Gebruikt voor. De laatste rij telt het aantal, de lengte en het gewicht op.
