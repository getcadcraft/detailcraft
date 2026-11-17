---
title: Stalen staven controleren volgens een ontwerpnorm
summary: Maak belastingcombinaties volgens ASCE 7 of EN 1990, controleer elk stalen I-profiel volgens AISC 360 of EN 1993-1-1 en zie hoeveel van de capaciteit elke staaf gebruikt. Een hulpmiddel totdat een ingenieur het heeft nagekeken.
keywords: ontwerp, ontwerpcontrole, staalontwerp, benutting, utilisatie, utilization, capaciteit, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, belastingcombinaties, LRFD, Nationale Bijlage, knik, zijdelings kipknik, dwarskracht, buiging, interactie, constructief, studenten, ingenieur
from: 66b6d545
---

Na het uitvoeren van de analyse zet het blok {{ui:Design checks}} in het tabblad {{ui:Analysis}} de krachten om in een oordeel voor elke stalen staaf: hoeveel van zijn capaciteit de zwaarste combinatie gebruikt.

:::warning
Het is een **hulpmiddel totdat een ingenieur het heeft nagekeken**. Het gebruikt alleen krachten van de eerste orde (geen effecten van de tweede orde), controleert geen torsie, geen slanke delen (klasse 4), geen gelaste profielen en geen verbindingen, en het laat weg wat het niet kan controleren en zegt dat ook. Het vervangt de controle van een ingenieur niet, en zijn resultaten zijn geen goedkeuringsstempel.
:::

## Kies een norm

{{ui:Design code}} wordt bij het model opgeslagen; kies een van de twee families:

- **ASCE 7 + AISC 360** (VS, LRFD): de belastingcombinaties van ASCE 7-16 §2.3.1 en de staafcontroles van ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): de combinaties van EN 1990 (vgl. 6.10, of 6.10a en 6.10b) en de staafcontroles van EN 1993-1-1.

Kies daarna de {{ui:Steel grade}} (A992, A36 en andere; of S235 tot S450, met de lagere vloeigrens boven 40 mm).

## Maak de combinaties

Geef elk belastinggeval zijn **soort** (permanent, veranderlijk, dakbelasting, sneeuw, wind, seismisch) in de lijst met gevallen, en druk daarna op {{ui:Make combinations}}. DetailCraft schrijft de combinaties van de norm als combinaties van uw gevallen: elke sterktecombinatie die de norm vermeldt voor de soorten die u heeft, en bruikbaarheidscombinaties voor doorbuiging. De combinaties die u zelf hebt getypt blijven staan; die worden niet aan de norm getoetst. Een geval van soort {{ui:Other}} wordt niet gecombineerd.

Voor de Eurocode zijn de factoren de **aanbevolen waarden** van EN 1990 Bijlage A1 (γG 1.35, γQ 1.5, de ψ-waarden van opgelegde, sneeuw- en windbelastingen) en EN 1993-1-1 (γM0 = γM1 = 1.0). De Nationale Bijlage van uw land wijzigt sommige ervan: open {{ui:National Annex values}}, typ de uwe en maak de combinaties opnieuw. Ze worden in het model opgeslagen.

## Controleer de staven

Druk op {{ui:Check members}}. Voor elk stalen I-profiel toont de tabel de **benutting** (vraag over capaciteit: 100 % is de grens), of het voldoet, welke controle bepalend is en welke combinatie. Staven worden op het model gekleurd: blauw weinig benut, groen ongeveer de helft, okergeel dicht bij de grens, rood erboven, grijs niet gecontroleerd. Klik op de naam van een staaf om hem te selecteren.

De controles, met de clausule die elk volgt (ze staan in het rapport):

- trek, druk met knik om de sterke en zwakke as en torsieknik, buiging om beide assen met zijdelingse kipknik, dwarskracht, en buiging met normaalkracht;
- doorbuiging van de bruikbaarheidscombinaties ten opzichte van de {{ui:Deflection limit}} die u instelt (in het begin L/360; een projectwaarde, geen normwaarde).

**Lengten.** De geschoorde lengte is een aandeel van elk geanalyseerd stuk (1 = niet geschoord); schoringen worden gelijkmatig verdeeld vanaf het begin genomen. K-factoren vermenigvuldigen de lengte voor knik. Een knoop waar een andere staaf aansluit, splitst een staaf, en elk stuk wordt op zijn eigen lengte gecontroleerd, alsof het daar geschoord is.

## Wat niet wordt gecontroleerd

Een staaf toont **niet gecontroleerd**, met de reden, in plaats van een getal wanneer zijn doorsnede geen I-profiel is die de controles kennen (buizen, hoekprofielen, U-profielen), wanneer het een eigen (gelast) profiel is, of wanneer een deel bij buiging slank is (AISC) of klasse 4 (Eurocode). Een slank deel bij druk laat de drukcontroles weg en de staaf staat dan op *voldoet, deels gecontroleerd*. Ook nog niet beschikbaar: effecten van de tweede orde, torsie, schuifknik samen met buiging, verbindingen, vermoeiing, brand en seismische detaillering. Betonelementen en seismische belastingen hebben [hun eigen controles](topic:concrete-and-seismic). Zie [Nog niet beschikbaar](topic:not-built-yet).

## Het rapport

{{ui:Report (PDF)}} en {{ui:Report (CSV)}} krijgen de ontwerptabellen zodra u hebt gecontroleerd: de normedities, de instellingen en waarden van de Nationale Bijlage, benutting per staaf, elke gebruikte clausule, en voor elke staaf de vraag, capaciteit en benutting van elke controle in zijn bepalende combinatie.
