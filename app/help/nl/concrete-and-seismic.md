---
title: Betonnen staven controleren en seismische belastingen maken
summary: Stel de wapening van betonnen liggers en kolommen in, controleer ze volgens ACI 318-19, maak equivalente horizontale krachten volgens ASCE 7-22 op stijve vloeren, en bekijk de drift per verdieping. Een hulpmiddel voor een ingenieur om na te kijken.
keywords: beton, gewapend beton, ACI 318, ACI 318-19, wapening, ligger, kolom, dwarskracht, beugels, seismisch, aardbeving, equivalente horizontale kracht, ELF, ASCE 7-22, drift, verdiepingsdrift, vloeren, stijve schijf, verdiepingsgewicht, benutting, utilisation, constructief, ingenieur
from: 94d3001d
---

De blokken {{ui:Betonnen staven}} en {{ui:Seismische belastingen}} in het tabblad {{ui:Analyse}} controleren gewapende betonliggers en -kolommen, en maken de zijwaartse krachten van een aardbeving op de vloeren van een frame. Beide volgen de run van het tabblad {{ui:Analyse}} en worden met het model opgeslagen.

:::warning
De resultaten zijn **voor controle door een ingenieur**: een hulpmiddel totdat iemand het heeft nagekeken. Betoncontroles gebruiken krachten van de eerste orde, behalve dat een kolom in een frame dat u niet-zijdelings noemt, wordt ontworpen voor het vergrote moment, zonder zijdelingse vergroting, zonder torsieontwerp, zonder seismische detaillering (ACI hoofdstuk 18) en zonder beugeldetaillering. De seismische belastingen laten de redundantiefactor, het verticale seismische effect, de torsieversterking en P-delta-effecten weg. Windbelastingen zijn nog niet beschikbaar.
:::

## Teken de onderdelen

Teken betonnen onderdelen als rechthoeken: een {{ui:Plaat}}-profiel zoals `PL400x400` voor een kolom en `PL300x600` voor een ligger geeft de doorsnede. Kolommen en liggers worden geplaatst zoals elk ander onderdeel.

## Stel de doorsneden in

Het blok {{ui:Betonnen staven}} toont elke doorsnede die de onderdelen gebruiken. Druk op {{ui:Als beton instellen…}} bij de betonnen. DetailCraft leest de breedte **b** (langs de eigen y-as van het onderdeel) en de diepte **h** (langs z) uit het getekende profiel, en vraagt daarna om:

- de **dekking** tot het midden van de staven, en de **boven-**, **onder-** en **zijstaven** (hoeveel en welke diameter) voor een ligger, of een **kolomkooi** (staven langs b en langs h, welke diameter, spiraalbeugels) voor een kolom;
- de **beugels**: poten, diameter en hart-op-hartafstand;
- wat het onderdeel **doet**: een ligger, een kolom, of bepaald uit de krachten (een verticaal onderdeel, of een onderdeel dat meer dan 0.10 f′c Ag draagt, is een kolom).

Stel daarboven f′c, de vloeigrens van de staven fy en de vloeigrens van de beugels fyt in (tot 420 MPa telt voor dwarskracht), K en of het frame zijdelings of niet-zijdelings is. Een doorsnede die als beton is ingesteld, wordt als beton geanalyseerd: E = 4700 √f′c, 2400 kg/m³, en standaard met **gescheurde doorsneden** (kolommen 0.70 Ig, liggers 0.35 Ig; ACI 318-19 tabel 6.6.3.1.1(a)). Kies {{ui:Bruto doorsneden}} om dat uit te zetten.

## Maak combinaties en controleer

Geef de belastinggevallen hun soort, en kies dan {{ui:Combinaties maken}}: ACI 318-19 neemt de sterktecombinaties van ASCE 7 over (§5.3.1). Druk op {{ui:Beton controleren}} en elk onderdeel krijgt een benutting, gekleurd op het model zoals de staalcontroles: buiging en minimale wapening (22.2, 9.6.1.2), trekgecontroleerde rek (9.3.3.1), dwarskracht met de beugels (22.5, 9.6.3), beugelafstand, en normaalkracht met moment voor kolommen (22.4, met de methode van Bresler voor tweerichtingsbuiging). Een onderdeel waarvan de getekende doorsnede afwijkt van de b × h die u typte, staat als *gedeeltelijk gecontroleerd*, net als een slanke kolom of torsie boven de drempel: die worden niet ontworpen.

Onderdelen die boven hun capaciteit zitten, staan in {{ui:Problemen}}; accepteer er één met een reden, of los de doorsnede op.

## Verdiepingen en seismische belastingen

Een verdieping is een niveau waar het frame bijeen wordt gehouden door een stijve plaat (een **stijve schijf**). Druk in het blok {{ui:Seismische belastingen}} op {{ui:Verdiepingen zoeken}}: het neemt de niveaus waar twee of meer liggers samenkomen. Geef daarna elke verdieping haar **seismische gewicht**, getypt of ingelezen: {{ui:Gewichten overnemen uit gevallen}} telt de verticale belastingen op van de gevallen die u een factor geeft (het eigen gewichtgeval is 1; tel 0.25 op bij een opslagvariabele belasting of sneeuw op een plat dak, zoals ASCE 7-22 12.7.2 vraagt). De verticale belasting van elk knooppunt gaat naar de verdieping op of boven het knooppunt, dus een kolom tussen twee verdiepingen geeft de helft van haar gewicht aan elk.

Vul de ontwerpwaarden in: SDS, SD1, S1, R, Ie, Cd, TL, het constructief systeem (voor de periode) en de risicocategorie. {{ui:Seismische gevallen maken}} berekent dan de periode uit de gebouwhoogte (12.8.2.1), de basisschuifkracht V = Cs W (12.8.1), verdeelt die over de verdiepingen naar boven (12.8.3) en schrijft vier belastinggevallen, in X en Y, elk met de 5 % ongewilde torsie in die richting (12.8.4.2). De krachten per verdieping en de controle op drift per verdieping (12.8.6, tabel 12.12-1, de drift Cd δxe / Ie tegen 0.020 hsx) verschijnen na een run; een drift boven de grens is ook een probleem. Druk opnieuw op {{ui:Combinaties maken}} om de seismische gevallen in de combinaties op te nemen.

**De periode uit de analyse.** De benaderde periode Ta komt uit de gebouwhoogte. Wanneer u de analyse met de seismische gevallen hebt gedraaid, leest {{ui:De periode uit de analyse overnemen}} hoeveel elke verdieping onder de krachten is verplaatst en berekent de periode met de methode van Rayleigh, T = 2π √(Σ w δ² / (g Σ f δ)), één keer voor X en één keer voor Y; de seismische gevallen worden daarna opnieuw gemaakt. De gebruikte periode is nooit groter dan Cu·Ta (ASCE 7-22 12.8.2), zodat een slap model de basisschuifkracht niet onder dat niveau kan brengen. Neem de periode opnieuw over na de tweede run: hij stabiliseert in een of twee stappen. Haal het vinkje weg bij {{ui:Periode uit de analyse}} om terug te gaan naar Ta.

**Slanke kolommen (ACI 318-19 6.6.4.5).** Voor een frame dat u niet-zijdelings noemt, wordt een kolom waarvan k·ℓu/r boven 34 + 12·M1/M2 ligt (maximaal 40) ontworpen voor het vergrote moment Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² met (EI)eff = 0.4 Ec Ig / (1 + βdns), en het minimummoment Pu (15 + 0.03 h). βdns (0.6 om mee te beginnen) is het deel van de gefactoreerde normaalkracht dat langdurig is: typ uw eigen waarde. Een kolom waarvan Pu 0.75 Pc bereikt, faalt met een eigen controle. Het rapport toont de getallen van elke slanke kolom. In een **zijdelings** frame blijft een slanke kolom "gedeeltelijk gecontroleerd": de vergroting ervan vraagt een analyse van de tweede orde, die nog niet beschikbaar is.

**Vloerplaten.** Wanneer het model platen heeft, neemt een blok {{ui:Plaatwapening}} de plaatmomenten van elke sterktecombinatie en berekent, met de regel van Wood–Armer (buiging en torsie samen), de wapening die elke laag per meter nodig heeft: onder en boven, in x en in y. U geeft de dikte, de dekking en de staven; de tabel toont nodig tegenover aanwezig en de één-richtings-dwarskracht tegenover φVc, en een laag die tekortschiet is een probleem met zijn clausule. Doorbuiging, doorponsing bij kolommen en omlijsting van openingen worden niet behandeld, en een moment boven een steun convergeert traag bij vierknooppuntsplaten.

Elke vloer die u opneemt, wordt een stijve schijf in de analyse: de liggers ervan dragen geen normaalkracht door de beweging van de vloer. De CraftScript-export is niet gemaakt voor een model met vloeren.

## Het rapport

{{ui:Rapport (PDF)}} en {{ui:Rapport (CSV)}} krijgen de betontabellen (aannames, benutting per onderdeel, elke clausule), de seismische parameters en de basisschuifkracht, de krachten op de vloeren en de driftteabel.
