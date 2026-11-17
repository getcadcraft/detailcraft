---
title: Kontrollér for kollisioner
summary: Find dele, plader og fundamenter, der trænger ind i hinanden, undtagen de dele en forbindelse skal mødes, og gå til hver kollision.
keywords: kollision, kollisionskontrol, kollidere, interferens, overlapning, skæring, hård kollision, koordinering, kontrollér model
from: 04d72d3b
---

Åbn fanen {{ui:Kollisioner}} under visningen, og vælg {{ui:Kontrollér nu}}. DetailCraft ser på hvert par af dele i de faser, der vises: stål mod stål og stål mod et fundament. Fanen lister hver kollision, den dybeste først, med:

- de to dele, efter positionsnummer (eller fundamentets positionsnummer) og profil;
- **Overlapning (mm)**: hvor langt et punkt i den ene del er inde i den anden, op til nærmeste flade;
- **Nær**: skæringspunktet i gitteret og niveauet, den er ved, eller dens koordinater;
- {{ui:Vis}}: vælger begge dele og bringer stedet til midten af visningen.

Fanens titel viser, hvor mange kollisioner den sidste kontrol fandt. Kontrollen kører ikke af sig selv: efter at du har ændret modellen, siger listen det, og {{ui:Kontrollér nu}} kører den igen.

## Hvad der ikke er en kollision

- Dele, der kun rører hinanden: en plade mod en flange, en fodplade på dens fundament, to elementer ende mod ende. **Tolerance (mm)** angiver, hvor langt to dele må trænge ind i hinanden, før det tæller (1 mm til at starte med; op til 50).
- Dele, en forbindelse forbinder: en endeplade med dens bjælke og med søjleflangen, den er boltet til, bjælken og søjlen i samlingen, en fodplade med sin søjle, et stødets plader med begge stykker, en afstivning med dens samleplade (et rørs slids skæres ikke i modellen). Forbindelsen mener, at de skal mødes.
- En fodpladeforskydningsnøgle i fundamentet under den (den sidder i en mørtellomme).
- Bolte og ankerbolte (de går gennem huller) og armering.
- Dele i skjulte faser. Se [Faser](topic:phases).

En afstivning eller bjælke, der løber ind i en søjle uden forbindelse imellem dem, **er** en kollision: samlingen mangler stadig en forbindelse. Eksempelrammens afstivning viser det: den har ingen samleplade. Vælg den og vælg {{ui:Gusset}} ([Samleplader til afstivninger](topic:brace-gussets)), så forsvinder dens kollisioner.

## Godt at vide

- Overlapning måler dybden ind i materialet, så en del, der løber ind i en søjles tynde steg eller flange, kun viser få millimeter, selv når den løber langt ind.
- Dele kontrolleres, som de er skåret: udskæringer og afskæringen af en bjælke ved dens endeplader tages med i betragtning. Huller tages ikke med.
