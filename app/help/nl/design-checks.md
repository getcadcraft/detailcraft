---
title: Stalen staven controleren volgens een ontwerpnorm
summary: Maak belastingcombinaties volgens ASCE 7 of EN 1990, controleer elk stalen I-profiel tegen AISC 360 of EN 1993-1-1, en zie hoeveel van de capaciteit elke staaf benut. Een hulpmiddel totdat een ingenieur het heeft gecontroleerd.
keywords: ontwerp, ontwerpcontrole, staalontwerp, benutting, utilisatie, capaciteit, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, belastingcombinaties, LRFD, Nationale Bijlage, knik, zijdelings-torsieknik, dwarskracht, buiging, interactie, constructief, studenten, ingenieur
from: 15685c4e
---

Nadat u de analyse hebt uitgevoerd, zet het blok {{ui:Ontwerpcontroles}} in het tabblad {{ui:Analyse}} de krachten om in een oordeel voor elke stalen staaf: hoeveel van de capaciteit de zwaarste combinatie benut.

:::warning
Het is een **hulpmiddel totdat een ingenieur het heeft gecontroleerd**. Het gebruikt alleen krachten van de eerste orde (geen effecten van de tweede orde), controleert geen torsie, geen slanke delen (klasse 4), geen gelaste profielen en geen verbindingen, en laat weg wat het niet kan controleren en zegt dat ook. Het vervangt de controle van een ingenieur niet, en de resultaten zijn geen goedkeuringsstempel.
:::

## Een norm kiezen

{{ui:Ontwerpnorm}} wordt samen met het model opgeslagen; kies een van twee families:

- **ASCE 7 + AISC 360** (VS, LRFD): de belastingcombinaties van ASCE 7-16 §2.3.1 en de staafcontroles van ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): de combinaties van EN 1990 (vgl. 6.10, of 6.10a en 6.10b) en de staafcontroles van EN 1993-1-1.

Kies daarna de {{ui:Staalkwaliteit}} (A992, A36 en andere; of S235 tot S450, waarbij de lagere vloeigrens boven 40 mm geldt).

## De combinaties maken

Geef elk belastinggeval zijn **soort** (dood, levend, dakbelasting levend, sneeuw, wind, seismisch) in de lijst met belastinggevallen en druk daarna op {{ui:Combinaties maken}}. DetailCraft schrijft de combinaties van de norm als combinaties van uw belastinggevallen: elke sterktecombinatie die de norm voor de soorten die u hebt vermeldt, en bruikbaarheidscombinaties voor doorbuiging. De combinaties die u zelf hebt ingetypt blijven staan; die worden niet aan de norm getoetst. Een geval van soort {{ui:Overig}} wordt niet gecombineerd.

Voor de Eurocode zijn de factoren de **aanbevolen waarden** van EN 1990 bijlage A1 (γG 1.35, γQ 1.5, de ψ-waarden van opgelegde, sneeuw- en windbelastingen) en EN 1993-1-1 (γM0 = γM1 = 1.0). De Nationale Bijlage van uw land wijzigt sommige ervan: open {{ui:Waarden van de Nationale Bijlage}}, vul de uwe in en maak de combinaties opnieuw. Ze worden in het model opgeslagen.

## De staven controleren

Druk op {{ui:Staven controleren}}. Voor elk stalen I-profiel toont de tabel de **benutting** (vraag gedeeld door capaciteit: 100 % is de grens), of het voldoet, welke controle bepalend is en welke combinatie. Staven worden in het model gekleurd: blauw weinig benut, groen ongeveer half, okergeel nabij de grens, rood erboven, grijs niet gecontroleerd. Klik op de naam van een staaf om hem te selecteren.

De controles, met het artikel dat elke controle volgt (ze staan in het rapport):

- trek, druk met knik door buiging en torsie, buiging om beide assen met zijdelings-torsieknik, dwarskracht, en buiging met normaalkracht;
- doorbuiging van de bruikbaarheidscombinaties tegen de {{ui:Doorbuigingslimiet}} die u instelt (L/360 als start; een projectwaarde, geen normwaarde).

**Lengten.** De geschoorde lengte is een deel van elk geanalyseerd stuk (1 = niet geschoord); de schoren worden vanaf het begin gelijkmatig verdeeld aangenomen. K-factoren vermenigvuldigen de lengte voor knik. Een knooppunt waar een andere staaf aansluit, splitst een staaf, en elk stuk wordt op zijn eigen lengte gecontroleerd, alsof daar een schoor zit.

## Wat niet wordt gecontroleerd

Een staaf toont **niet gecontroleerd**, met de reden, in plaats van een getal wanneer de doorsnede geen profiel is dat de controles kennen (hoekprofielen, U-profielen; rechthoekige en ronde buizen worden gecontroleerd wanneer de wanden compact zijn), wanneer het een eigen (gelast) profiel is, of wanneer een deel in buiging slank is (AISC) of klasse 4 (Eurocode). Een slank deel in druk laat de drukcontroles weg en de staaf staat dan op *voldoet, deels gecontroleerd*. De lassen in de knooppunten hebben een [eigen controle](topic:weld-checks). Ook nog niet beschikbaar: effecten van de tweede orde, torsie, dwarskrachtknik samen met buiging, boutverbindingen, vermoeiing, brand en seismische detaillering. Betonnen staven en seismische belastingen hebben [eigen controles](topic:concrete-and-seismic). Zie [Nog niet beschikbaar](topic:not-built-yet).

## Het rapport

{{ui:Rapport (PDF)}} en {{ui:Rapport (CSV)}} krijgen de ontwerptabellen zodra u hebt gecontroleerd: de normedities, de instellingen en waarden van de Nationale Bijlage, de benutting per staaf, elke gebruikte clausule, en voor elke staaf de vraag, capaciteit en benutting van elke controle in de bepalende combinatie.
