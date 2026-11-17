---
title: Kontrollera kollisioner
summary: Hitta delar, plåtar och plintar som går in i varandra, med undantag för delarna en anslutning avser att mötas, och gå till varje kollision.
keywords: kollision, kollisionskontroll, krock, interferens, överlapp, skärning, hård kollision, samordning, kontrollera modell
from: 04d72d3b
---

Öppna fliken {{ui:Kollisioner}} under vyn och välj {{ui:Kontrollera nu}}. DetailCraft tittar på varje par av delar i de faser som visas: stål mot stål, och stål mot en plint. Fliken listar varje kollision, den djupaste först, med:

- de två delarna, med delmärke (eller plintmärke) och profil;
- **Överlapp (mm)**: hur långt en punkt i den ena delen ligger inne i den andra, till närmaste yta;
- **Nära**: rutnätsskärningen och nivån den ligger vid, eller dess koordinater;
- {{ui:Visa}}: markerar båda delarna och för platsen till mitten av vyn.

Flikens titel visar hur många kollisioner den senaste kontrollen hittade. Kontrollen körs inte av sig själv: efter att du ändrat modellen säger listan det, och {{ui:Kontrollera nu}} kör den igen.

## Vad som inte är en kollision

- Delar som bara vidrör varandra: en plåt mot en fläns, en fotplåt mot sin plint, två balkar ände mot ände. **Tolerans (mm)** anger hur långt två delar får gå in i varandra innan det räknas (1 mm till att börja med; upp till 50).
- Delar som en anslutning förenar: en ändplatta med sin balk och med pelarflänsen den är bultad mot, balken och pelaren i den knutpunkten, en fotplåt med sin pelare, en skarvs plåtar med båda delarna, ett stag med sin knutplåt (ett rörs urtag skärs inte i modellen). Anslutningen menar att de ska mötas.
- En fotplåts skjuvtapp i plinten under den (den sitter i en injekteringsficka).
- Bultar och ankarstänger (de går genom hål) och armering.
- Delar i dolda faser. Se [Faser](topic:phases).

En balk eller ett stag som går in i en pelare utan någon anslutning mellan dem **är** en kollision: den knutpunkten behöver fortfarande en anslutning. Exempelramens stag visar detta: det har ingen knutplåt. Markera det och välj {{ui:Knutplåt}} ([Knutplåtar för stag](topic:brace-gussets)) så försvinner dess kollisioner.

## Bra att veta

- Överlapp mäter djupet in i material, så en balk som går in i en pelares tunna liv eller fläns visar bara några millimeter även när den går långt in.
- Delar kontrolleras som de är skurna: urtag och balkens kapning vid dess ändplåtar tas med. Hål tas inte med.
