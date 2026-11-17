---
title: Byggbarhetskontroller
summary: Problemer for det en detaljerer ser med øyet: en bolt en skiftenøkkel ikke når, bolter for tett for pipenøkkelen, kilsveiser utenfor størrelsesgrensene, sveiser en brenner ikke når, og rør som holder vann.
keywords: byggbarhet, skiftenøkkel, pipenøkkel, boltetilgang, stramming, sveisestørrelse, kilsveis, minste sveis, største sveis, vann, lufthull, drenshull, galvanisering, hult profil, problemer
from: 72315151
---

DetailCraft ser etter fire slags problemer som ingen styrkekontroll finner, og lister dem i panelet {{ui:Problemer}}. De er advarsler og merknader å se på, ikke feil: modellen bygges fortsatt.

## En bolt en skiftenøkkel ikke når

For hver bolt legger DetailCraft en pipenøkkel over hodet og over mutteren. Pipenøkkelen er en sylinder like bred som mutteren over hjørnene pluss en 4 mm vegg, 60 mm lang. Står et bjelkesteg, en flens, en plate eller en avstivning inne i den sylinderen, nevner problemet forbindelsen, hvor mange bolter, hvilken del som er i veien og hvor langt fra bolten den er.

Pipenøkkelen er en vanlig slagpipe. En fastnøkkel trenger mindre plass, og et større verktøy mer. Be den tilkoblede assistenten din kjøre `constructability_check` med en annen `socketLength` for å se hvordan svaret endrer seg.

## Bolter for tett for pipenøkkelen

En pipenøkkel over én bolt må ikke berøre hodet til den neste. Boltene i en forbindelse som står nærmere enn pipenøkkelens bredde pluss naboens hode, listes med avstanden som ble funnet og avstanden som trengs.

## Størrelser på kilsveiser

AISC 360-16 tabell J2.4 setter den minste kilsveisen etter tykkelsen på den tynneste delen (3 mm opp til 6,35 mm tykk, 5 mm til 12,7, 6 mm til 19,05, 8 mm over), og J2.2b den største langs en materialkant: ikke større enn materialet når det er tynnere enn 6,35 mm, ellers 1,6 mm mindre. Forbindelser med samme størrelse på samme tykkelse listes som ett problem.

Tykkelsen som brukes, er den tynneste delen sveisen nevner, så en 8 mm sveis rundt hele en bjelke med 6,35 mm steg listes.

## Vann og lufting

- En **åpen øvre ende** på et hult profil som står vertikalt eller har en helning på mer enn 10°, slipper inn regn.
- Et hult profil **lukket i begge ender** trenger et lufte- og et drenshull; varmforsinkning og trykket fra oppvarmet luft krever begge ett.

## Kommer sveiseren til?

En kilsveis lages med brenneren midt mellom de to flatene den forbinder. For hver rundtgående kilsveis (en endeplate, en fotplate, en gjæringsplate) tar kontrollen snittet av elementets profil ved platen og, hver 20 mm, kjører en brennerbane ut i 45° fra der dysen (10 mm radius til å begynne med) først er fri av begge flatene, i ytterligere 30 mm. Hvis banen møter bjelkens egen flens eller en annen del, listes den andelen av sveisen med delen og avstanden. Disse tallene er typiske, ikke en standards: spør din verkstedsleverandør om prosess og dyse. Sveiser langs to kanter (en skjærflik) er ikke lokalisert og kontrolleres ikke.
