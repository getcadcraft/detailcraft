---
title: Funderingen met wapening plaatsen
summary: Rechthoekige puntfunderingen met een onderwapeningsmat en aansluitwapening plaatsen, controleren en de buigstaat downloaden.
keywords: fundering, puntfundering, wapening, wapeningsmat, mat, aansluitwapening, aansluitpennen, buigstaat, wapeningslijst, beton, haken, betondekking
from: 41a048be
---

Dit onderwerp gaat over rechthoekige puntfunderingen. Balken, kolommen, vloeren en wanden staan in [Gewapend beton detailleren](topic:reinforced-concrete). Elke fundering krijgt in beide richtingen een onderwapeningsmat en, als u dat wilt, aansluitwapening die omhoog uit de fundering steekt. De staven zijn US-maten #3 tot en met #11.

## Een fundering plaatsen

1. Kies {{ui:Plattegrond}} en kies het niveau van de bovenkant van de fundering.
2. Kies {{ui:Fundering}} in de groep {{ui:Plaatsen}}, of druk op {{key:F}}.
3. Stel de fundering in het paneel {{ui:Eigenschappen}} in (zie hieronder), of houd de standaardwaarden aan.
4. Klik op een rasterkruising. De fundering wordt er gecentreerd op geplaatst, met de bovenkant op het niveau. De statusbalk zegt bijvoorbeeld "Fundering 2000 x 2000 x 600 onder A/1."

U kunt ook het formulier {{ui:Toevoegen via raster}} onderaan het paneel gebruiken.

De fundering wordt doorzichtig getekend, zodat u de staven ziet; die worden als volle buizen getekend.

## Instellingen van de fundering

| Veld | Standaard | Toelichting |
|---|---|---|
| Lengte L (mm) | 2000 | Langs x; 300 tot 50000 |
| Breedte B (mm) | 2000 | Langs y; 300 tot 50000 |
| Hoogte H (mm) | 600 | 150 tot 10000 |
| Beton | 4000 psi | Tekst, wordt afgedrukt in de IFC-export |

**Onderwapeningsmat**

| Veld | Standaard | Toelichting |
|---|---|---|
| Lange staven | #5 | Staven langs L, de onderste laag |
| Afstand (mm) | 250 | De grootste toegestane afstand; de staven worden gelijkmatig op deze afstand of dichter verdeeld |
| Korte staven | #5 | Staven langs B, op de lange staven gelegd |
| Afstand (mm) | 250 | Zoals hierboven |
| Betondekking (mm) | 75 | Vrije betondekking aan elk vlak |
| Haken aan de uiteinden | Aan | Buigt beide uiteinden van elke matstaaf op in een standaard haak van 90° (vorm U); uit geeft rechte staven (vorm S) |

**Aansluitwapening**

| Veld | Standaard | Toelichting |
|---|---|---|
| Aansluitwapening | Aan | Zet die uit voor een fundering zonder aansluitwapening |
| Staaf | #6 | |
| Staven langs L / Staven langs B | 2 / 2 | Een raster van staven, gecentreerd op de fundering |
| Afstand langs L / Afstand langs B | 250 / 250 | Tussen de staafmiddelpunten |
| Uitsteeksel boven bovenkant | 600 | Hoe ver de staven boven de bovenkant van de fundering uitsteken |
| Haak onderaan | Aan | Een haak van 90° naar buiten, die op de mat rust (vorm L) |

Onder de velden toont DetailCraft het haakbeen voor de lange staven, bijvoorbeeld "Haakbeen voor #5: 254 mm buitenmaat tot buitenmaat."

## Een geplaatste fundering wijzigen

Selecteer de fundering (klik op het beton op afstand van een kolom, of op een van de staven). U krijgt dezelfde velden plus {{ui:Middelpunt x}}, {{ui:Middelpunt y}}, {{ui:Bovenkant z}} en {{ui:Draaiing (°)}}. Daaronder staat een tabel met de staven van deze fundering, met hun merken, aantallen en lengten, en het betonvolume in kubieke meter.

Elke wijziging wordt gecontroleerd voordat ze wordt bewaard. Een wijziging die niet kan worden uitgevoerd, wordt geweigerd en de statusbalk zegt waarom, bijvoorbeeld "De betondekking laat geen ruimte voor staven in deze fundering.", "De fundering is te ondiep voor twee lagen staven binnen de betondekking." of "De aansluitwapening past niet binnen de fundering met 75 mm betondekking."

Wijzigingen die wel kunnen worden uitgevoerd maar aandacht nodig hebben, staan onder de fundering en in het tabblad {{ui:Problemen}}:

- "#11-staven op 59.6 mm laten minder dan 35.8 mm vrije ruimte (ACI 318-19 25.2.1)." De vrije ruimte tussen staven moet minstens de staafdiameter zijn en minstens 25.4 mm.
- "#5-haken hebben 254 mm diepte nodig; binnen de betondekking past maar 150 mm." De haakbenen worden dan ingekort om te passen, dus het zijn geen standaardhaken meer.
- "De aansluithaken reiken tot in de betondekking."
- "Aansluitstaven staan dichter op elkaar dan de minimale vrije afstand."

## Staafmerken en de buigstaat

Gelijke staven (zelfde maat, vorm en afmetingen tot op de millimeter) delen één staafmerk over alle funderingen. Merken worden geschreven als `<staafnummer>F<n>`: 5F1, 5F2 voor #5-staven, 6F1 voor de eerste #6-staaf, enzovoort. Funderingen met dezelfde maat, beton, mat en aansluitwapening delen een funderingsmerk: F1, F2 …

1. Open het tabblad {{ui:Buigstaat}} onderaan. Elke rij is één staafmerk: maat, vorm, afmetingen A, B en C, aantal, snijlengte, totale lengte, massa per meter, gewicht per stuk, totaal gewicht, en waarvoor de staaf wordt gebruikt.
2. Kies {{ui:CSV downloaden}} in het tabblad, of {{ui:Buigen}} in het menu {{ui:Meer}} van de groep {{ui:Uitvoer}}, voor `<naam> buigstaat.csv`.

Vormen zijn eigen codes van DetailCraft, geen norm: S recht, L één buiging, U twee buigingen. Afmetingen zijn buitenmaat tot buitenmaat; de snijlengte is de exacte hartlijnlengte door de buigingen. Zie [Referentie wapening](topic:rebar-reference).

## Wat DetailCraft niet controleert

- Verankerings- en overlaplengtes, en of de aansluitwapening lang genoeg is voor de kolom erboven.
- Het deel van de regel voor de vrije afstand dat afhangt van de korrelgrootte van het toeslagmateriaal (DetailCraft kent het mengsel niet).
- Alles over de kolom of voetplaat erboven: funderingen en staal staan los van elkaar.

Zie ook [Nog niet beschikbaar](topic:not-built-yet).
