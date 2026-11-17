---
title: Karta över armeringens trängsel
summary: Se hur trångt armeringen lämnar varje plint för att betongen ska komma ner, med den ballast och vibrator du anger.
keywords: armering, trängsel, avstånd, fritt avstånd, betonggjutning, ballast, vibrator, startjärn, krokar, plint, matta
from: 40d029e6
---

Fliken {{ui:Congestion}} ritar en värmekarta över varje plint sedd uppifrån. Ljusblått är öppet; gult och orange blir trångt; rött är trängre än vad armeringsjärnen kräver. Mörka rutor är själva armeringsjärnen.

## Vad kartan mäter

Betongen sjunker ner genom stålet lager för lager och kan flöda i sidled mellan lagren. Därför tar kartan i varje punkt det smalaste fria gapet i ett av lagren: mellan järnen i bottenmattan, mellan nästa lager av järn, och mellan startjärnens krokben upptill. Startjärnen går genom alla dem.

## Vad som räknas som trångt

Kravet är det större av 25 mm och järndiametern (ACI 318-19 25.2.1), eller, för BS 4449-järn, det större av järndiametern och 20 mm (EN 1992-1-1 8.2). Två rutor höjer det:

- {{ui:Largest aggregate}}: kravet blir 4/3 av ballastkornets storlek (ACI) eller ballasten plus 5 mm (EN).
- {{ui:Vibrator head}}: kravet är minst vibratorhuvudets diameter.

Båda börjar på 0, vilket betyder okänt: DetailCraft känner inte till din blandning eller din pump.

## Problem

En plint med en plats som är trängre än kravet listas i panelen {{ui:Problems}} med den öppning som hittades och den öppning som krävs. {{ui:Select}} bredvid en karta markerar plinten.

Kartan ser inte bindningar, kopplingar, kanaler eller pelarens egna järn.
