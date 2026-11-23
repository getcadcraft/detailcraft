---
title: Lassen controleren waar staven samenkomen
summary: Na de ontwerpcontrole de hoek- en stomplassen rondom elke staaf controleren waar die aansluit op een andere staaf of op een steun, volgens AISC 360-16 hoofdstuk J of EN 1993-1-8, en zien welke lasgroep het meest wordt benut en onder welke combinatie. Een hulpmiddel totdat een ingenieur het heeft gecontroleerd.
keywords: las, lassen, lascontrole, hoeklas, stomplas, volledige doorlassing, AISC 360, EN 1993-1-8, lasgroep, benutting, utilisatie, capaciteit, knooppunt, verbinding, constructief, ingenieur
from: e8eebbe6
---

Het blok {{ui:Lascontroles}} in het tabblad {{ui:Analyse}}, onder {{ui:Ontwerpcontroles}}, neemt de krachten van het laatst opgeloste frame en de sterktecombinaties die u hebt gemaakt, en toetst de rondom lassen van elke staaf bij elk knooppunt: waar een staaf op een andere staaf aansluit, of op een steun staat.

:::warning
Het is een **hulpmiddel totdat een ingenieur het heeft gecontroleerd**. Het controleert een las die rondom de doorsnede loopt, als één groep, op basis van de eindkrachten van het frame zelf. Het leest de maat of lengte van de lassen die u in de werkplaatstekeningen hebt getekend niet uit, en het controleert geen bouten, platen, oplegging, blokafschuiving of hefboomwerking. De resultaten zijn geen goedkeuringsstempel.
:::

## Uitvoeren

1. Los het frame op in het tabblad {{ui:Analyse}} en kies een {{ui:Ontwerpnorm}} in {{ui:Ontwerpcontroles}}, en druk daarna op {{ui:Combinaties maken}} (de lascontrole heeft dezelfde sterktecombinaties nodig).
2. Stel in {{ui:Lascontroles}} het {{ui:Hoeklasbeen (mm, 0 = de wand, maximaal 8)}} in. 0 betekent dat het been de dunnere wand van de doorsnede volgt, tot 8 mm. Onder de AISC-norm is {{ui:Sterkte van lasmetaal F_EXX (MPa)}} de sterkte van het lasmetaal (482.6 MPa is een E70-elektrode). Onder EN 1993 geeft de staalkwaliteit de sterkte van het lasmetaal en de correlatiefactor.
3. Druk op {{ui:Lassen controleren}}.

Elke regel van de tabel is één lasgroep (een uiteinde van een staaf bij een knooppunt). De getallen: de **benutting** van de bepalende controle, de toestand (voldoet of voldoet niet), en welke controle en welk artikel bepalend waren onder welke combinatie. Een groep die de controle niet kan beoordelen, zegt waarom (geen staalkwaliteit, geen correlatiefactor voor de kwaliteit in EN 1993-1-8 tabel 4.1, geen las op die doorsnede) in plaats van een getal te tonen.

Het wijzigen van het been of het lasmetaal, of het bewerken van het model, leegt de tabel: die was voor de oude waarden. Druk opnieuw op {{ui:Lassen controleren}}.

## Wat wordt gecontroleerd

- **ASCE 7 + AISC 360:** hoeklasmetaal (de hoek van de belasting ten opzichte van de las telt mee, J2.4), afschuifbreuk van het basismetaal (J4.2), en stomplassen met volledige doorlassing (tabel J2.5).
- **EN 1990 + EN 1993:** hoeklassen volgens de vereenvoudigde methode van EN 1993-1-8 4.5.3.3 en stomplassen vanaf 4.7.1.
- Waarschuwingen voor de detaillering tegen het minimale en maximale been en de minimale lengte, met de waarde waarmee ze werden vergeleken.

De lasgroep wordt behandeld als een lijnvormige doorsnede en belast met de elastische vectormethode: elk deel van de las neemt de kracht op uit de normaalkracht van de staaf, beide dwarskrachten, torsie en beide buigmomenten, opgeteld als vectoren.

## Wat niet wordt gecontroleerd

Gedeeltelijke doorlassingen, scheve hoeklassen, proplassen en sleufkassen, onderbroken lassen, de methode van het momentane middelpunt, de richtingsmethode van EN, vermoeiing en blokafschuiving van het basismetaal zijn nog niet beschikbaar. Sommige constanten van de normen zijn overgenomen uit de normen en nog niet vergeleken met een gedrukt exemplaar; het rapport vermeldt waar elk getal vandaan komt ({{ui:Rapport (PDF)}} krijgt de lastabellen zodra u hebt gecontroleerd). Zie [Stalen staven controleren](topic:design-checks) en [Nog niet beschikbaar](topic:not-built-yet).
