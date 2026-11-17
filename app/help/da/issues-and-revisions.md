---
title: Emner, revisioner og tegningsændringslog
summary: Hold én emnehistorik sammen med arkitektens model: læs emnerne ind, registrér instrukser på byggepladsen, værkstedstegninger og linkede modeller mod et emne, og læs tegningsændringsloggen.
keywords: emne, revision, revisioner, ændringslog, tegningsændringslog, tegningsregister, instruks på byggeplads, værkstedstegning, linket model, udbud, byggeri, emnehistorik, værkstedstegninger, fremstilling
from: 4b9a1b7b
---

## Hvad du skal gøre

Arbejd ud fra den samme emnehistorik som resten af teamet. Se hvilke ark der er udsendt i hvilken revision, og hold det der sker på byggepladsen op imod det emne, det hører til.

## Trin

1. Åbn **Emner og revisioner**.
2. Vælg **Læs en emnehistorik** og vælg den `.issues.json`-fil, der er gemt fra BimCraft eller et andet program. Dens emner og registreringer føjes til dine. Intet erstattes.
3. Vælg **Tilføj en registrering** for en instruks på byggepladsen, en værkstedstegning, et markeringssæt, en linket model eller et notat. Vælg det emne den hører til, og dens status. En fil du vælger, registreres med navn, størrelse og SHA-256; filen bliver, hvor den er.
4. **Tegningsændringslog** viser én række for hvert ark og én kolonne for hvert emne. En revision i parentes er udstedt igen uden ændringer.
5. **Download ændringsloggen (CSV)** gemmer emnerne, arketabellen og registreringerne. **Gem emnehistorikken** skriver en fil, som de andre apps kan læse.

## Godt at vide

- Ark udstedes stadig fra Tegninger, ark for ark. Disse udstedelser vises her: ark udstedt på samme dato med ét notat er ét emne.
- Registreringer og emner, du læser ind, gemmes i modelfilen. Hver ændring er ét Fortryd.
- At læse den samme fil to gange tilføjer ingenting to gange. Når to kopier indeholder den samme registrering, beholdes den nyeste.
