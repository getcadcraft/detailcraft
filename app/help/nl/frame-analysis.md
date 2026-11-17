---
title: Het skelet analyseren
summary: Krachten, reactiekrachten en doorbuigingen van de balken, kolommen en verbanden zoals getekend, onder belastinggevallen en combinaties die u instelt. Een hulpmiddel voor de analyse, geen normcontrole; de ontwerpcontroles zijn een aparte stap.
keywords: analyse, constructieve analyse, skeletanalyse, stijfheidsmethode, belastingen, belastinggeval, combinatie, permanente belasting, veranderlijke belasting, eigen gewicht, reacties, buigend moment, dwarskracht, normaalkracht, doorbuiging, vervormde vorm, oplegging, scharnierend, ingeklemd, vrijgave, rapport, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Het tabblad {{ui:Analyse}} onderaan berekent de krachten in elke balk, kolom en elk verband van het model, de reactiekrachten aan de kolomvoeten en hoe ver de staven doorbuigen, voor de belastingen die u ingeeft.

:::warning
Dit is een **hulpmiddel voor de analyse, geen normcontrole**. De analyse past geen ontwerpnorm toe: ze dimensioneert geen staven, controleert geen capaciteiten of verbindingen en kiest geen belastingfactoren. Een constructeur controleert het model, de belastingen en de opleggingen en bepaalt wat de getallen betekenen. Voor staafcontroles volgens ASCE 7 / AISC 360 of EN 1990 / EN 1993-1-1 zie [Staven van staal controleren aan een ontwerpnorm](topic:design-checks); dat is een aparte stap, ook een hulpmiddel.
:::

## Uitvoeren

1. Open het tabblad {{ui:Analyse}}.
2. Selecteer een of meer staven in de weergave, kies een {{ui:Geval}}, een {{ui:Belasting}} en een {{ui:Richting}}, typ de waarde en druk op {{ui:Belasting toevoegen}}. Een belasting die over een staaf is verdeeld, is in kN/m; een puntlast in kN. {{ui:Omlaag (zwaartekracht)}} is de gebruikelijke.
3. Druk op {{ui:Analyse uitvoeren}}.

De tabel toont voor elke staaf de grootste normaalkracht N, de dwarskrachten Vz en Vy, de buigende momenten My en Mz, de torsie T en de doorbuiging, met het grootste moment eerst; klik op de naam van een staaf om hem te selecteren. Daaronder staan de reactiekrachten in elke oplegging. {{ui:Op het model}} tekent de vervormde vorm, of één werking als diagram naast elke staaf met de grootste waarde op zijn plaats geschreven. De resultaten zijn verouderd zodra het model verandert: voer de analyse opnieuw uit.

Elke belasting, elk geval en elke instelling is één stap die u ongedaan kunt maken ({{key:Mod+Z}}) en wordt opgeslagen in het modelbestand.

## Belastinggevallen en combinaties

De analyse begint met drie: **Permanent** (het eigen gewicht van de staven, uit hun getekende profielen en 7850 kg/m³), **Veranderlijk** (leeg) en **Permanent + veranderlijk**. Voeg eigen gevallen toe (wind, sneeuw …) en combinaties: een combinatie telt de gevallen op met de factoren die u typt. De analyse is lineair, dus elk geval wordt één keer opgelost en combinaties zijn sommen. Typ de factoren zelf, of kies een ontwerpnorm en laat {{ui:Combinaties maken}} de combinaties van die norm schrijven ([Staven van staal controleren aan een ontwerpnorm](topic:design-checks)).

## Waaruit het skelet bestaat

- Balken, kolommen en verbanden, elk op de werklijn (de lijn die u tekende), met de werkelijke eigenschappen van de doorsnede berekend uit de omtrek. Platen, trappen, funderingen en bouten maken geen deel uit van het skelet.
- Een staaf wordt gesplitst waar het uiteinde van een andere staaf erop uitkomt, zodat een balk die halverwege de hoogte op een kolom aansluit, daar aan de kolom vastzit.
- **Kolomvoeten**: ingeklemd (het begin) of scharnierend (vastgehouden in de plaats en tegen wringen, vrij om te draaien). Een voetplaat maakt altijd een oplegging.
- **Balkuiteinden**: een eindplaat is stijf, een schuifplaat is scharnierend. {{ui:Liggeruiteinden zonder verbinding}} stelt de rest in. **Verbanden** zijn aan beide uiteinden scharnierend.
- Selecteer één staaf om de uiteinden, of de voet van een kolom, een eigen regel te geven.
- Overal staal: E = 200 GPa, G = 77 GPa.

Als het skelet kan bewegen zonder iets te buigen — een mechanisme, zoals scharnierende voeten zonder verband in één richting — stopt de berekening en meldt waar en in welke richting; houd het daar vast met een oplegging, een stijve verbinding of een verband.

## Tekens

N > 0 is trek. My > 0 zet de lokale −z-zijde van de staaf onder trek: een balk die onder de zwaartekracht doorzakt, heeft My > 0. Mz > 0 zet de lokale −y-zijde onder trek. De doorbuiging wordt gemeten vanaf de rechte lijn tussen de uiteinden van de staaf. De lokale z van een staaf wijst omhoog (voor een kolom: langs X); de lokale assen draaien mee met de rotatie van de staaf.

## Het rapport

{{ui:Rapport (PDF)}} en {{ui:Rapport (CSV)}} bevatten alles: de aannames waarop het skelet is gebouwd, doorsneden, gevallen en combinaties, daarna voor elk geval en elke combinatie de reactiekrachten (met de sommen van belastingen en reacties, die in evenwicht zijn), de staafkrachten en de verplaatsingen, en een omhullende van elk geval. {{ui:Exporteren als CraftScript}} schrijft hetzelfde skelet als script voor de werkomgeving Script van PartCraft, waar de bibliotheekfunctie `frame3d` het stap voor stap oplost in leesbare code.

## Methode

De directe stijfheidsmethode, lineair en eerste orde tenzij u *Tweede orde (P-Delta)* aanvinkt: balk-kolommen met twee knopen met normaal-, torsie- en twee buigstijfheden (geen schuifvervorming, geen welving), eindvrijgaven door statische condensatie, belastingen langs staven via de eigen vormfuncties van de staven. De antwoorden zijn gecontroleerd tegen de klassieke leerboekgevallen (kragliggers, eenvoudige, ingeklemde en doorlopende balken, een portaalraam, een rooster in torsie, een vakwerk).

**Tweede orde (P-Delta).** Vink *Tweede orde (P-Delta)* aan naast de knop Analyse uitvoeren: elke combinatie wordt opnieuw opgelost met de normaalkrachten van de staven die op het vervormde skelet werken (elke staaf is in 4 stukken verdeeld, zodat ook het buigen van een staaf tussen zijn uiteinden meetelt), totdat de normaalkrachten stabiliseren. De resultaatregel geeft het aantal doorlopen en hoeveel de zijdelingse uitwijking is toegenomen; de momenten, doorbuigingen, ontwerpcontroles en het rapport gebruiken daarna deze resultaten. Boven de elastische kritieke belasting van het skelet stopt de berekening en meldt dat. Het is elastisch met kleine rotaties, alleen buigend, zonder stijfheidsreductie of fictieve belastingen (op zichzelf niet de AISC-methode van directe analyse); vloeren, wanden en stijve vloeren blijven van de eerste orde.

**Eigenfrequenties (eindige elementen).** Het blok {{ui:Eindige elementen: eigenfrequenties}} onder de resultaten zoekt de laagste eigenvormen van hetzelfde model met de eindige-elementenengine: balken met hun eindvrijgaven, vloeren en wanden als vlakke vierknoopsschalen, stijve vloeren, opleggingen. Kies hoeveel eigenvormen (3, 6, 10 of 20) en het vloerelement (de vierknoopsschaal voor dikke of dunne vloeren, of het dunne-vloerelement) en druk op {{ui:Eigenfrequenties zoeken}}. De tabel geeft de frequentie van elke eigenvorm in Hz, de periode in seconden en de effectieve modale massa langs X, Y en Z als aandeel van de massa die kan bewegen; {{ui:Tonen op het model}} tekent elke eigenvorm zoals de vervormde vorm wordt getekend. Massa is de dichtheid van het materiaal maal het volume: belastingen voegen geen massa toe, en een materiaal zonder dichtheid heeft er geen. Het rapport (PDF, CSV) bevat de tabel. Het is alleen elastisch en voor kleine bewegingen, en er wordt hier geen seismische of windbelasting uit een norm gemaakt. Geen normcontrole; uw constructeur beoordeelt de resultaten.

**Responsspectrum, tijdgeschiedenis en pushover.** Drie blokken staan onder de eigenfrequenties en gebruiken hetzelfde eindige-elementenmodel. De massa is voor alle drie de dichtheid van het materiaal plus de neerwaartse belastingen van de gevallen die u aanvinkt, elk maal een factor die u typt (bijvoorbeeld Permanent met 1 en Veranderlijk met het aandeel dat u als massa meerekent).

{{ui:Responsspectrum}} leest elke eigenvorm af van een spectrum dat u opgeeft (een tabel van periode en versnelling, of de vorm volgens ASCE 7 uit SDS, SD1 en TL; de knop {{ui:Waarden uit blok Seismisch overnemen}} neemt die over uit het blok Seismisch) en combineert de eigenvormen met CQC, SRSS, de tienprocentregel of een absolute som, en voegt daarna de X-, Y- en Z-richtingen samen (100 % + 30 % of SRSS). Het geeft de basisschuifkracht, de verdiepingsverplaatsingen, de staafeindkrachten en een tabel met eigenvormen die waarschuwt wanneer de gebruikte eigenvormen minder dan 90 % van de massa dragen. U kunt de resultaten schalen met een factor of tot een basisschuifkracht die u typt; het blok berekent die basisschuifkracht zelf nooit. Resultaten hebben geen teken.

{{ui:Tijdgeschiedenis}} past een grondversnelling toe op het model door modale superpositie (exact voor de rechte lijnen tussen de punten van de registratie) of door directe integratie (Newmark-gemiddelde versnelling met Rayleigh-demping). De invoer is een zelf gemaakte sinus of puls (altijd als synthetisch aangeduid), een registratie die u plakt, of een tekstbestand dat u opent (tijd en versnelling, één versnelling per regel met een stap, of een bestand in PEER-stijl met een DT=-kop; in g of m/s²). Het geeft de verplaatsing van het dak en de basisschuifkracht tegen de tijd, de verplaatsing van elke verdieping en de omhullende van de staafeindkrachten. Modellen met een zeer lange registratie bewaren die alleen voor de sessie.

{{ui:Pushover}} duwt het dak zijdelings in kleine stappen (patroon zoals de eerste eigenvorm, of uniform), met plastische scharnieren aan de uiteinden van staven met een I-profiel. Een scharnier vloeit bij het plastische moment, dat daalt naarmate de normaalkracht toeneemt (berekend uit de getekende vorm, afrondingen buiten beschouwing gelaten); verharding is optioneel, P-delta is optioneel, en een combinatie met zwaartekracht kan eerst worden toegepast. Het geeft de capaciteitscurve (basisschuifkracht tegen verplaatsing van het dak), het eerste scharnier, en de toestand en plastische rotatie van elk scharnier. {{ui:De niet-lineaire tijdgeschiedenis uitvoeren}} past dezelfde scharnieren toe op de registratie van het blok Tijdgeschiedenis bij kleine modellen. Scharnieren ontstaan alleen aan de uiteinden van staven (plaats een knoop waar er één binnen een overspanning moet ontstaan); een staaf die aan beide uiteinden is vrijgegeven krijgt er geen, en het vloeien en knikken van verbanden is niet gemodelleerd; vloeren en wanden blijven elastisch; er zijn geen acceptatiecriteria. Geen normcontrole; uw constructeur beoordeelt de resultaten. De instellingen worden met het model opgeslagen en het rapport bevat de tabellen.

Nog niet beschikbaar: knikanalyse, een correctie voor ontbrekende massa voor het responsspectrum, schalen van registraties, acceptatiecriteria voor scharnieren (de dynamische respons is er, hierboven), vlakbelastingen en windbelastingen die voor u worden gemaakt (aardbevingskrachten op vloeren staan in [Betonnen onderdelen controleren en seismische belastingen aanmaken](topic:concrete-and-seismic)), excentriciteiten van staven, verbanden die alleen op trek werken. Zie [Nog niet beschikbaar](topic:not-built-yet).
