---
title: Skjuvlaskar
summary: Bulta ett balkliv mot en plåt som svetsats i verkstaden på en pelarfläns eller ett pelarliv, även där balken möter pelaren i vinkel i planen eller lutar.
keywords: skjuvlask, enkel plåt, finplåt, enkel förbindelse, livförbindelse, snedställd, snedställning, lutande, vinklad balk, bultad, förbind
from: 18afc8ab
---

Ett skjuvlasket (enkel plåt, finplåt) är en plåt som svetsas fast vid pelaren i verkstaden; på byggplatsen bultas balkens liv fast i den med en vertikal rad bultar. DetailCraft placerar lasket, kapar tillbaka balken fri från pelaren, borrar hålen i lasket och balklivet, lägger till bultarna och svetsen, och varnar för kantavstånd och passning.

## Var det fungerar

- En balk (I-profil eller U-profil) vars ände ligger på linjen för en **vertikal** I-profilpelare, och möter dess **fläns** eller dess **liv**.
- **Rät, snedställd i planen eller lutande**: lasket följer balkens liv och balken kapas tillbaka så att dess närmaste hörn behåller avståndet till pelaren. En balk som stiger eller faller med mer än 60° vägras.

## Lägg till skjuvlaskar

1. Markera balken.
2. I gruppen {{ui:Förbind}} öppnar du {{ui:Mer}} och väljer {{ui:Skjuvlaskar}} (eller väljer {{ui:Lägg till skjuvlaskar}} i panelen {{ui:Egenskaper}}).
3. Varje fri ände på balken som möter en pelare får ett lask. Varje balkände tar en förbindelse: ett skjuvlasket eller en ändplatta.

Markera ett lask (klicka på det eller en bult) för att se och ändra dess inställningar. {{ui:Verkställ på liknande}} kopierar det, som ett skjuvlasket, till varje liknande knut som ännu inte har någon förbindelse.

## Inställningar (mm)

| Inställning | Startvärde | Betydelse |
|---|---|---|
| Plåttjocklek | 10 | Lasketets tjocklek |
| Plåtbredd | 115 | Hur långt lasket sträcker sig ut från pelarytan, längs balken |
| Bultdiameter, Håldiameter, Bultkvalitet | 20, 22, A325 | Som för ändplattor |
| Bultrader, Radavstånd | 3, 75 | Bultarna i den vertikala raden |
| Kantavstånd (övre och nedre bultar) | 38 | Från de övre och nedre bultarna till lasketsändarna; lasket är rader × radavstånd + 2 × detta djupt |
| Bultgrupp höjd med | 0 | 0 centrerar bultarna på balkens djup |
| Avstånd till pelaren | 13 | Fri lucka mellan pelaren och balkens närmaste hörn |
| Bultlinje från pelarytan | 65 | Längs balken, från pelarytan till bultarna |
| Tillägg för bultlängd | 30 | Läggs till greppet (lask + balkliv), avrundat uppåt till 5 mm |
| Hörnsvets storlek | 6 | Båda sidor av lasket mot pelaren |

## Bra att veta

- Lasket ingår i pelarens sammanställning (svetsat i verkstaden); balkens sammanställning har bara sina hål.
- En snedställd eller lutande balk kapas längre tillbaka än en rät så att dess närmaste hörn behåller avståndet. DetailCraft kapar balkar rätvinkligt: tillverkaren kapar änden efter behov. Lasketskant vid pelaren ritas också rätvinkligt.
- DetailCraft kontrollerar inte hållfasthet. Varningar använder EN 1993-1-8 tabell 3.3:s minimivärden för kantavstånd och avstånd, och anger när lasket är djupare än balklivet mellan dess rundningar, eller när bultarna sitter för nära balkens kapade ände.
- [Kollisionskontrollen](topic:clash-check) utelämnar ett lask och de stänger det förbinder: de är tänkta att mötas.
