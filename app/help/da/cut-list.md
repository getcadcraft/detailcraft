---
title: Tilskæringsliste
summary: Nest bjælker, søjler, afstivninger og trappevanger i lagerlængder med savsnit, og se hvor mange stænger du skal købe og hvor meget der bliver spild.
keywords: tilskæringsliste, nesting, lagerlængde, stang, savsnit, sav, rest, afskær, spild, kombination, indkøb, flere
from: 81d06ce5
---

Fanen {{ui:Tilskæringsliste}} under visningen regner ud, hvordan modellens lineære dele skæres af lagerstænger: hvor mange stænger af hver længde du skal købe til hver profil og hvert materiale, hvad der kommer på hver stang, og spildet.

## Angiv lageret

Øverst på fanen:

- **Lagerlængder (mm):** de længder du kan købe, adskilt af mellemrum, for eksempel `6000 12000`, eller 20 ft- og 40 ft-stænger som `6096 12192`. Op til otte.
- **Savsnit (mm):** hvor meget hvert snit tager (3 til at begynde med).
- **Endetrim (mm):** skær enden af hver stang af, før første stykke (0 til at begynde med).
- **Gem rester fra (mm):** en rest, der mindst er så lang, går tilbage til lageret; kortere er skrot (500 til at begynde med).

Disse gemmes i denne browser, ligesom de andre [indstillinger](topic:settings).

## Sådan nestes det

- Hver bjælke, søjle, afstivning og trappevange, efter positionsnummer og antal. Plader skæres af plademateriale og nestes ikke her.
- Hver profil og hvert materiale for sig.
- Længste stykker først, hvert i den første stang, det passer i; en ny stang starter som den længste lagerlængde. Derefter købes hver stang som den korteste lagerlængde, der stadig kan rumme dens snit.
- Hvert snit tager savsnittet (ingen efter et snit, der slutter præcis ved stangens ende); hver stang mister endetrimmen.
- Et stykke, der er længere end alle lagerlængder, listes under **Længere end alt lager**, ikke nestet: skarv det (se [Skarvninger](topic:splices)) eller tilføj en længere lagerlængde.

## Læs den

- **Oversigt:** pr. profil og materiale: stykkerne, stængerne at købe (for eksempel »2 × 12000, 1 × 6000«), de meter, der er købt og brugt, og spildet.
- **Stænger og deres snit:** hver stang, dens lagerlængde, dens snit som positionsnummer og længde, og resten, enten gemt eller skrot.

{{ui:Download CSV}} gemmer begge tabeller som `<navn> tilskæringsliste.csv`.

DetailCraft nesterer ikke plader ind i plader og blander ikke profiler eller materialer på en stang.
