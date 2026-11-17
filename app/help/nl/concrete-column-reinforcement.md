---
title: Een rechthoekige betonkolom wapenen
summary: Een uitgewerkt voorbeeld van het detailleren van een rechthoekige betonkolom in DetailCraft: plaats hem, geef hem langsstaven en beugels, lees de controles, de stooklengte erboven en de staafmerken, en teken zijn werkplaatsblad.
keywords: betonkolom, rechthoekige kolom, kolomwapening, langsstaven, verticale staven, beugels, hoepels, dwarsbeugels, stooklengte, overlappingsverbinding, startstaven, staalpercentage kolom, 1 procent, 8 procent, beugelafstand, ACI 318-19 25.7.2, EN 1992-1-1 9.5, werkplaatstekening, staafmerken, 8C1, 3C2
from: aee2a3ca
---

Dit onderwerp neemt één vierkante kolom van niets tot een gecontroleerd, getekend en opgeschreven detail. De algemene regels voor liggers, vloeren en wanden staan in [Gewapend beton detailleren](topic:reinforced-concrete); dit is de kant van de kolom, met getallen die u kunt nabouwen.

:::warning
DetailCraft detailleert de staven die u het geeft. Het ontwerpt ze niet. De staven hieronder zijn startwaarden voor het voorbeeld, geen aanbeveling: de verantwoordelijke ingenieur kiest de maat, het aantal en de afstand.
:::

## Wat een kolom hier is

Een rechthoekige kolom heeft een breedte (langs de lokale x) en een diepte dwars (langs de lokale y), een vrije dekking tot de beugels, langsstaven op elk vlak en gesloten beugels. Draaien draait het geheel; de vlakken blijven "breedtevlak" en "dieptevlak".

- De langsstaven worden opgegeven als het aantal op een breedtevlak en het aantal op een dieptevlak. De hoekstaven tellen mee voor beide, dus 3 en 3 maken 8 staven; 4 en 4 maken 12.
- De beugels zijn gesloten rechthoeken met twee haken bij één hoek, 135° of 90°. De eerste beugel staat een vaste afstand boven de vloer (en onder de volgende), de eindzones hebben een dichtere afstand, het midden een ruimere.
- Wat de staven bovenaan doen: doorlopen en overlappen met de staven erboven, omhaken met 90°-haken in de vloer, of stoppen onder de bovenkant.

## De uitgewerkte kolom

Een kolom van 400 × 400 mm, 3600 mm tussen de vloer erboven en de vloer eronder, #8 langsstaven, #3 beugels, 40 mm vrije dekking, f'c 28 MPa, fy 420 MPa, ACI 318-19, binnenkolom.

1. Open het tabblad {{ui:Beton}} en stel de rasterlijnen en niveaus in waarop de kolom staat (linker paneel).
2. Kies in {{ui:Toevoegen via raster}} {{ui:Betonkolom}}, kies het rasterkruispunt en de twee niveaus, zet {{ui:Breedte (mm)}} en {{ui:Diepte (mm)}} op 400 en kies {{ui:Toevoegen}}.
3. Stel in het paneel {{ui:Eigenschappen}} in:
   - {{ui:Vrije dekking (mm)}} 40;
   - {{ui:Langsstaven}} #8, {{ui:Staven op een breedtevlak}} 3, {{ui:Staven op een dieptevlak}} 3;
   - {{ui:Bindingen}} #3, {{ui:Haken}} 135°, {{ui:Hart-op-hartafstand tussen (mm)}} 300, {{ui:Lengte eindzone (mm)}} 600, {{ui:Hart-op-hartafstand in de eindzones (mm)}} 150, {{ui:Eerste vanaf het vlak (mm)}} 50;
   - {{ui:Staven aan de bovenkant}} {{ui:Doorlopen en overlappen met de staven erboven}}.

Elke wijziging is één stap ongedaan te maken.

### Wat u krijgt

| Onderdeel | Resultaat |
|---|---|
| Langsstaven | 8 staven #8 (een ring van 3 × 3), elk 4375 mm lang: de kolom van 3600 mm plus een stooklengte van 775 mm erboven |
| Stooklengte | 757 mm nodig voor een drukstooklengte (ACI 318-19 25.5.5.1, fy 420), 775 mm aanwezig: de behoefte naar boven afgerond op de volgende 25 mm |
| Beugels | 17 beugels #3, elk met een snijlengte van ongeveer 1359 mm, op 150 mm hart-op-hart in de twee eindzones van 600 mm en 300 mm daartussen |
| Staalpercentage | 2.5 % van de bruto doorsnede (grenzen 1 % tot 8 %, ACI 318-19 10.6.1.1) |
| Vrije afstand tussen de staven | 112 mm (minstens 40 mm nodig, ACI 318-19 25.2.3) |
| Beugelafstand | 300 mm (400 mm toegestaan: het kleinste van 16 staafdiameters, 48 beugeldiameters en de kleinere zijde, ACI 318-19 25.7.2.1) |
| Beugelmaat | #3 (toegestaan tot 9.5 mm, ACI 318-19 25.7.2.2) |

Alle hiervan staan in de lijst {{ui:Controles}} van het element; de stooklengte staat ook in {{ui:Stooklengten en verankering}}.

## Dwarsbeugels

Met één omtrekbeugel worden alleen de hoekstaven vastgehouden. ACI 318-19 25.7.2.3 staat toe dat een middenstaaf op een vlak zonder steun blijft als hij binnen 150 mm vrij van een hoekstaaf ligt. Met 3 staven op een vlak, zoals hierboven, is dat voldaan. Met 4 of meer staven op een vlak niet, en DetailCraft meldt dat als waarschuwing ({{ui:Controles}} en Problemen): "dwarsbeugels" zijn nodig. **Dwarsbeugels worden nog niet getekend**: voeg ze met de hand toe in de tekening, of kies minder staven op het vlak.

Voor EN 1992-1-1 controleert DetailCraft de staafmaat (minstens 8 mm), het aantal staven (minstens 4), het staaloppervlak (0.2 % tot 4 % van de doorsnede), de vrije afstand en de beugelafstand (9.5.2 en 9.5.3).

## De stooklengte, de fundering en de kolom eronder

- Waar **een fundering van het model onder de kolom staat**, wordt de kolom via een stooklengte verbonden met de startstaven van de fundering, en die stooklengte wordt ook gecontroleerd.
- Waar **een andere kolom van het model eronder staat**, stooklengt hij met de staven van die kolom.
- Geef uw eigen {{ui:Stooklengte (mm, 0 = naar behoefte)}} om dat te overschrijven; een die korter is dan nodig is een probleem en wordt in de tabel met * gemarkeerd.
- Drukstooklengten worden standaard gebruikt ({{ui:Druk-stooklengte}} in de instellingen); kies {{ui:Trek-stooklengte}} wanneer de kolom op trek kan worden belast.

## Merken, staat en werkplaatsblad

Identieke staven delen één merk: de langsstaven van de kolom erboven zijn 8C1, de beugels 17C2 (eerst het getal, dan de soortletter C voor kolom en het doorlopende nummer). Ze verschijnen op het tabblad {{ui:Buigstaat}}, met de snijlengte en het gewicht, en in het CSV-bestand van {{ui:Uitvoer}} › {{ui:Meer}} › {{ui:Buigen}}.

Kies {{ui:Werkplaatstekening}} naast de kolom voor een blad met de kolom in aanzicht (elke staaf, zijn merk, de beugelzones en de stooklengte bemaat) en een doorsnede in het midden, gevolgd door het buigblad voor de staven. Sla {{ui:Dit blad als PDF}} op.

## Wat dit niet doet

- Ronde kolommen en spiralen, en kolommen die niet rechthoekig zijn: nog niet beschikbaar.
- Hoek- en dwarsbeugels binnen de doorsnede, en seismische detaillering (ACI 318-19 hoofdstuk 18): nog niet beschikbaar.
- Stooklengten op posities die u kiest, of gestaffeld: alle staven stooklengen op één doorsnede.
- Of de staven genoeg zijn voor de belasting: dat is het ontwerp van de ingenieur.
