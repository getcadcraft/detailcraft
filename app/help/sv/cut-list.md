---
title: Kapplista
summary: Nästla balkar, pelare, stag och trappvangor i lagerlängder med sågspår, och se hur många stänger som ska köpas och hur mycket spill det blir.
keywords: kapplista, nesting, lagerlängd, stång, sågspår, såg, restbit, spill, kombinering, inköp, flera
from: 81d06ce5
---

Fliken {{ui:Kapplista}}, under vyn, räknar ut hur modellens linjära delar ska kapas från lagerstänger: hur många stänger av varje längd som ska köpas för varje profil och material, vad som ska ligga på varje stång, och spillet.

## Ange lagret

Överst på fliken:

- **Lagerlängder (mm):** de längder du kan köpa, åtskilda av mellanslag, till exempel `6000 12000`, eller 20 ft och 40 ft stänger som `6096 12192`. Upp till åtta.
- **Sågspår (mm):** hur mycket varje snitt tar (3 till en början).
- **Ändtrim (mm):** kapa av ändan på varje stång före den första biten (0 till en början).
- **Behåll restbitar från (mm):** en restbit som är minst så lång går tillbaka till lagret; kortare är skrot (500 till en början).

Dessa sparas i den här webbläsaren, precis som de andra [inställningarna](topic:settings).

## Så nästlas det

- Varje balk, pelare, stag och trappvange, efter delmärkning och antal; plåtar kapas från skiva och nästlas inte här.
- Varje profil och material för sig.
- Längsta bitarna först, var och en i den första stången den får plats i; en ny stång börjar som den längsta lagerlängden. Sedan köps varje stång som den kortaste lagerlängden som ändå rymmer dess snitt.
- Varje snitt tar sågspåret (inget efter ett snitt som slutar exakt vid stångens ände); varje stång förlorar ändtrimmet.
- En bit som är längre än alla lagerlängder listas under **Längre än något lager**, och nästlas inte: skarva den (se [Skarvar](topic:splices)) eller lägg till en längre lagerlängd.

## Läs den

- **Sammanfattning:** per profil och material: bitarna, stängerna som ska köpas (till exempel ”2 × 12000, 1 × 6000”), meter köpta och använda, och spillet.
- **Stänger och deras snitt:** varje stång, dess lagerlängd, dess snitt som delmärkning och längd, och resten, behållen eller skrot.

{{ui:Ladda ner CSV}} sparar båda tabellerna som `<namn> kapplista.csv`.

DetailCraft nästlar inte plåtar i skivor och blandar inte profiler eller material på en stång.
