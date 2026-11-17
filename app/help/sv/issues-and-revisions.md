---
title: Ärenden, revisioner och ritningens ändringslogg
summary: Håll en ärendehistorik tillsammans med arkitektens modell: läs in ärenden, registrera arbetsinstruktioner, verkstadsritningar och länkade modeller mot ett ärende och läs ritningens ändringslogg.
keywords: ärende, revision, revisioner, ändringslogg, ritningens ändringslogg, ritningsregister, arbetsinstruktion, verkstadsritning, länkad modell, anbud, byggnation, ärendehistorik, verkstadsritningar, tillverkning
from: 4b9a1b7b
---

## Vad du gör

Arbeta från samma ärendehistorik som resten av teamet. Se vilka blad som gick ut i vilken revision, och håll koll på det som händer på plats mot det ärende det hör till.

## Steg

1. Öppna **Ärenden och revisioner**.
2. Välj **Läs in en ärendehistorik** och välj filen `.issues.json` som sparats från BimCraft eller ett annat program. Dess ärenden och poster läggs till i din. Inget ersätts.
3. Välj **Lägg till en post** för en arbetsinstruktion, en verkstadsritning, en markeringsuppsättning, en länkad modell eller en anteckning. Välj vilket ärende den gäller och dess status. En fil du väljer registreras med sitt namn, sin storlek och sin SHA-256. Filen ligger kvar där den är.
4. **Ritningens ändringslogg** visar en rad för varje blad och en kolumn för varje ärende. En revision inom hakparenteser har utfärdats på nytt utan ändring.
5. **Ladda ner ändringsloggen (CSV)** sparar ärendena, bladtabellen och posterna. **Spara ärendehistoriken** skriver en fil som de andra apparna läser.

## Bra att veta

- Blad utfärdas fortfarande från Ritningar, blad för blad. De utfärdandena visas här: blad som utfärdats samma datum med samma anteckning är ett ärende.
- Poster och ärenden du läser in sparas i modellfilen. Varje ändring är ett steg i Ångra.
- Om du läser in samma fil två gånger läggs inget till två gånger. När två kopior innehåller samma post behålls den nyare.
