---
title: Saker, revisjoner og endringslogg for tegninger
summary: Hold én sakshistorikk sammen med arkitektens modell: les inn sakene, før byggeinstrukser, verkstedtegninger og koblede modeller mot en sak, og les endringsloggen for tegninger.
keywords: sak, revisjon, revisjoner, endringslogg, tegningens endringslogg, tegningsregister, byggeinstruks, verkstedtegning, koblet modell, anbud, konstruksjon, sakshistorikk, verkstedtegninger, produksjon
from: 4b9a1b7b
---

## Hva du gjør

Arbeid fra samme sakshistorikk som resten av teamet. Se hvilke ark som er sendt ut i hvilken revisjon, og før det som skjer på byggeplassen mot saken det hører til.

## Steg

1. Åpne **Saker og revisjoner**.
2. Velg **Les inn en sakshistorikk** og velg `.issues.json`-filen som er lagret fra BimCraft eller et annet program. Sakene og postene legges til. Ingenting erstattes.
3. Velg **Legg til en post** for en byggeinstruks, en verkstedtegning, et markeringssett, en koblet modell eller et notat. Velg saken den gjelder, og statusen. En fil du velger registreres med navn, størrelse og SHA-256; filen blir liggende der den er.
4. **Tegningens endringslogg** viser én rad for hvert ark og én kolonne for hver sak. En revisjon i parentes er utstedt på nytt uten endringer.
5. **Last ned endringsloggen (CSV)** lagrer sakene, arktabellen og postene. **Lagre sakshistorikken** skriver en fil som de andre appene leser.

## Greit å vite

- Ark utstedes fortsatt fra Tegninger, ark for ark. Disse utstedelsene vises her: ark som er utstedt samme dato med ett notat, er én sak.
- Poster og saker som er lest inn, lagres i modellfilen. Hver endring er ett Angre-steg.
- Å lese samme fil to ganger legger ikke til noe to ganger. Når to kopier har samme post, beholdes den nyeste.
