---
title: Funderingscontroles
summary: Controleer funderingen, gecombineerde funderingen en funderingsplaten op de grond die u beschrijft, zetting, een flexibele plaat op veren, paalgroepen en keerwanden. Een hulpmiddel voor een constructeur om na te kijken.
keywords: fundering, gecombineerde fundering, funderingsplaat, ondergrondmodulus, zetting, veren, randkolom, hoekkolom, draagvermogen, schuiven, kantelen, doorponsing, afschuiving in één richting, buiging, verankering, minimale wapening, paalgroep, keerwand, ACI 318-19
from: 6961ad52
---

:::warning
Dit zijn eerstegraads controles om door een constructeur na te laten kijken, geen ontwerpgoedkeuring. De toelaatbare draagspanning en de wrijvingscoëfficiënt zijn aan u: DetailCraft kent uw grond niet.
:::

Het tabblad {{ui:Fundering}} controleert de funderingen in het model tegen de kolombelastingen die u ze geeft.

## De grond beschrijven

Typ de {{ui:Toelaatbare draagspanning}} en de {{ui:Wrijvingscoëfficiënt basis}}. Beide beginnen op 0, wat betekent dat ze niet zijn ingevuld: de controle toont dan de spanning als opmerking en zegt niet dat ze voldoet. Voor zetting typt u de grondmodulus {{ui:Es}} (MPa), het dwarscontractiegetal (Poisson) van de grond en de zetting die u toelaat (eerst 25 mm). Voor een flexibele funderingsplaat typt u een ondergrondmodulus {{ui:ks}}. Ook de ophoging boven de fundering, het volumegewicht van de grond, de veiligheidsfactoren voor schuiven en kantelen (eerst 1.5) en de vloeigrens van de staven staan erin.

## De belastingen opgeven

Elke fundering heeft een lijst met kolombelastingen. Gebruik {{ui:Een kolombelasting toevoegen}} en vul de rij gebruiksbelasting (voor draagvermogen, schuiven en kantelen) en de rij met belastingfactoren (voor de sterktecontroles) in: de verticale belasting P naar beneden, de horizontale krachten Vx en Vy op de bovenkant van de fundering, de momenten Mx en My, de plaats van de kolom op de fundering en de afmeting ervan.

Of open het tabblad {{ui:Analyse}} en druk op {{ui:Kolombelastingen overnemen uit de Analyse}}: elke oplegging op een fundering wordt een kolombelasting, uit de gebruiks- en de factorenreeksen die u kiest. Een positief My belast de +x-zijde van de fundering zwaarder; een positief Mx belast de −y-zijde zwaarder.

## Wat er wordt gecontroleerd

Op basis van de gebruiksbelastingen, met het eigen gewicht van de fundering en de ophoging erbij:

- **Draagvermogen:** de spanning onder een stijve fundering. Binnen het middelste derde deel staat de hele basis op de grond; daarbuiten komt een deel van de basis los en is de piek hoger. Een resultante buiten de basis voldoet niet.
- **Schuiven:** wrijving maal de verticale belasting tegen de horizontale kracht.
- **Kantelen:** de afstand van de resultante tot de rand.
- **Zetting:** de elastische zetting van de gemiddelde spanning op een halfruimte met de modulus die u gaf, in het midden en in een hoek (oplossing van Timoshenko en Goodier voor een flexibele rechthoek), tegen de grenswaarde. Het is een bovengrens voor een stijve fundering en laat een grondlaag met beperkte diepte, ontlasting door de uitgegraven grond en consolidatie weg. Zonder modulus toont het de spanning als opmerking.

Alleen op basis van de factorbelastingen van de kolommen (ACI 318-19):

- **Buiging** aan het kolomvlak, met de minimale wapening (0.0018 voor staven van 420 MPa) en de staven die u tekende.
- **Afschuiving in één richting** op afstand d van het vlak.
- **Doorponsing** op afstand d/2 rond elke kolom, met het moment van de kolom. Voor een kolom nabij een rand wordt de kritieke doorsnede afgesneden door de rand van de fundering (drie zijden bij een rand, twee bij een hoek, ACI 318-19 22.6.4.1 en de kleinere αs uit tabel 22.6.5.2), en het moment om het eigen middelpunt van de doorsnede bevat de verschuiving van de belasting.
- **Verankering** van de staven voorbij het kolomvlak, recht of met hun haken.
- **Dikte** boven de onderste staven (150 mm).

Een gecombineerde fundering of een funderingsplaat wordt als stijf beschouwd; afschuiving en moment volgen uit de statica op snedes over de volle breedte.

## Een flexibele funderingsplaat op veren

Vink {{ui:Deze fundering analyseren als flexibele plaat op veren}} aan wanneer de fundering veel kolommen draagt en de stijve fundering te grof is. De fundering wordt een plaat van vierknoopselementen op een bed van veren (de {{ui:ks}} die u typte, geconcentreerd in de knopen), en de belasting van elke kolom wordt verdeeld over de knopen van de eigen voetafdruk. Een tweede tabel geeft de grootste grondspanning en zetting (en het verschil tussen de grootste en de kleinste), het buigend moment in elke richting met de wapening die nodig is, trek aan de bovenkant tegen de sterkte van het ongewapende beton (een fundering heeft geen bovenwapening), afschuiving in één richting op afstand d van de kolommen, en doorponsing op de eigen spanning van de veren. Het rooster wordt verfijnd tot een kolom drie elementen breed is; een grote plaat duurt enkele seconden. Het eigen gewicht van de plaat en de grond erboven heffen elkaar op en worden weggelaten.

Elke niet-voldane controle staat in het paneel {{ui:Problemen}} met het artikel erbij.

## Paalgroepen en keerwanden

{{ui:Een paalgroep toevoegen}} plaatst een rooster van palen onder een stijve paalkop: typ de belasting en de momenten en wat één paal in druk en in trek mag dragen (de getallen van het paalontwerp, niet die van dit tabblad). De reactie van elke paal is P/n plus zijn aandeel in de momenten (de elastische methode), en de grootste druk en eventuele trek worden gecontroleerd.

{{ui:Een keerwand toevoegen}} controleert een consoolkeerwand op een horizontale achtervulling, per meter: actieve druk volgens Rankine, kantelen om de teen, schuiven en de spanning onder de basis. Passieve druk voor de teen blijft buiten beschouwing. Uw assistent kan dezelfde controles uitvoeren met `pile_group_check` en `retaining_wall_check`.

Paalgroepen, keerwanden en de schakelaar voor de plaat worden opgeslagen in het modelbestand, en een niet-voldane controle staat in {{ui:Problemen}}.
