---
title: Konstruktionskontroller
summary: Problemer for det, en detaljeringsingeniør opdager med øjet: en bolt en skruenøgle ikke kan nå, bolte for tæt på til topnøglen, hjørnesvejsninger uden for deres størrelsesgrænser, svejsninger en brænder ikke kan nå, og rør der kan samle vand.
keywords: konstruktion, skruenøgle, topnøgle, boltadgang, spænding, svejsestørrelse, hjørnesvejsning, mindste svejsning, største svejsning, vand, udluftningshul, dræningshul, varmforzinkning, hulprofil, problemer
from: 72315151
---

DetailCraft leder efter fire slags problemer, som ingen styrkekontrol finder, og lister dem i panelet {{ui:Problemer}}. De er advarsler og noter, du skal kigge på, ikke fejl: modellen bygges stadig.

## En bolt en skruenøgle ikke kan nå

For hver bolt sætter DetailCraft en topnøgle over hovedet og over møtrikken. Topnøglen er en cylinder, lige så bred som møtrikken over hjørnerne plus en 4 mm væg, 60 mm lang. Står en krop af en bjælke, en flange, en plade eller en afstivning inde i den cylinder, nævner problemet forbindelsen, hvor mange bolte, hvilken del der er i vejen, og hvor langt fra bolten den er.

Topnøglen er en typisk slagtopnøgle. En almindelig skruenøgle kræver mindre plads, og et større værktøj mere. Bed din tilsluttede assistent køre `constructability_check` med en anden `socketLength` for at se, hvordan svaret ændrer sig.

## Bolte for tæt på til topnøglen

En topnøgle over én bolt må ikke røre hovedet på den næste. Boltene i en forbindelse, der ligger tættere end topnøglens bredde plus naboens hoved, listes med den fundne afstand og den nødvendige afstand.

## Hjørnesvejsningens størrelser

AISC 360-16 tabel J2.4 sætter den mindste hjørnesvejsning efter tykkelsen af den tyndeste del (3 mm op til 6.35 mm tykt, 5 mm til 12.7, 6 mm til 19.05, 8 mm over), og J2.2b den største langs en materialekant: ikke større end materialet, når det er tyndere end 6.35 mm, ellers 1.6 mm mindre. Forbindelser med samme størrelse på samme tykkelse listes som ét problem.

Den tykkelse, der bruges, er den tyndeste del, svejsningen nævner, så en 8 mm svejsning hele vejen rundt om en bjælke med 6.35 mm steg listes.

## Vand og udluftning

- En **åben øverste ende** af et hulprofil, der står lodret eller hælder mere end 10°, lader regnvand ind.
- Et hulprofil **lukket i begge ender** behøver et udluftnings- og et dræningshul; varmforzinkning og trykket fra opvarmet luft kræver begge et.

## Kan svejseren nå den

En hjørnesvejsning udføres med brænderen halvvejs mellem de to flader, den forbinder. For hver hjørnesvejsning rundt om hele samlingen (en endeplade, en fodplade, en geringsplade) tager kontrollen profilets omrids ved pladen, og hvert 20 mm kører den en brænderbane ud i 45° fra det sted, hvor dens dyse (10 mm radius til at starte med) først er fri af begge flader, i yderligere 30 mm. Rammer banen bjælkens egen flange eller en anden del, listes den andel af svejsningen med delen og afstanden. Disse tal er typiske, ikke en standards: spørg dit værksted om processen og dysen. Svejsninger langs to kanter (en forskydningsflig) lokaliseres ikke og kontrolleres ikke.
