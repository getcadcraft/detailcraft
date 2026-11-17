---
title: Ställ in rutnät och nivåer
summary: Skriv in rutnätslinjerna, deras avstånd och de nivåer som varje element placeras på.
keywords: rutnät, axlar, rutnätslinjer, nivåer, höjder, våningsplan, golv, avstånd, inställning
from: 9cad233c
---

Varje element i DetailCraft placeras i en rutnätsskärning på en nivå. Ställ in rutnäten och nivåerna först; du kan ändra dem senare.

## Så fungerar rutnäten här

- **Numrerade linjer** går åt ena hållet, **bokstavslinjer** åt det andra. Namnen är bara vana: en etikett kan vara vilken text som helst på upp till 8 tecken (1, 2, 3 eller A1, A2, eller 10, 20).
- Du skriver in etiketterna och avstånden mellan dem, inte koordinater. Den första linjen i varje uppsättning ligger på 0.
- Numrerade linjer är linjer med konstant x; bokstavslinjer är linjer med konstant y. En balk från rutnät 1 till 2 går alltså längs x, och en balk från A till B går längs y.
- Alla värden är i millimeter.

En ny modell startar med numrerade linjer 1 2 3 med avstånden 6000 6000, bokstavslinjer A B med avståndet 6000, och två nivåer.

## Ställ in rutnäten

1. I panelen {{ui:Modell}} till vänster, öppna {{ui:Rutnät}} om den är hopfälld.
2. I {{ui:Numrerade linjer}}, skriv etiketterna åtskilda av mellanslag, till exempel `1 2 3 4 5`.
3. I fältet {{ui:Avstånd}} nedanför, skriv ett avstånd för varje mellanrum, till exempel `6000 6000 7500 6000`. Fyra mellanrum för fem linjer.
4. Gör likadant i {{ui:Bokstavslinjer}} och dess {{ui:Avstånd}}, till exempel `A B C` och `8000 8000`.
5. Välj {{ui:Verkställ rutnät}}.

Statusfältet visar ”Rutnäten uppdaterades.” och vyn zoomar till det nya rutnätet. Kommatecken fungerar också som avskiljare.

Om något inte stämmer ändras ingenting och statusfältet anger varför, till exempel ”Numrerade rutnät: ange ett avstånd mellan varje par av linjer (4).” Övriga kontroller: avstånden måste vara positiva millimeter, etiketterna måste skilja sig åt, och det får vara högst 60 linjer åt vardera hållet.

:::note
Element behåller sina koordinater när rutnäten flyttas. Om du ändrar ett avstånd efter att du placerat stål, står stålet kvar där det var och är inte längre på rutnätet. Ändra rutnätet först, eller flytta element genom att redigera deras ändkoordinater.
:::

## Ställ in nivåerna

1. Öppna {{ui:Nivåer}} i panelen {{ui:Modell}}.
2. Varje rad har ett nivånamn och dess höjd i millimeter. Redigera dem som du vill.
3. Välj {{ui:Lägg till nivå}} för en ny rad. Den får namnet ”Nivå 3” (och så vidare) och placeras 4000 mm över den högsta nivån; ändra båda om du behöver.
4. För att ta bort en nivå, välj knappen × i slutet av dess rad.
5. Välj {{ui:Verkställ nivåer}}.

Ingenting ändras förrän du väljer {{ui:Verkställ nivåer}}. Nivåerna sorteras efter höjd när de verkställs. Varje nivå behöver ett namn, två nivåer kan inte ha samma namn, och du måste behålla minst en nivå.

Nivåer kan ligga under noll (en källarplan på `-3500`) och behöver inte vara jämnt fördelade.

## Så används nivåerna

- En pelare som placeras på en nivå går upp till nästa nivå, eller till den nivå du väljer i {{ui:Upp till}}.
- Balkar och plåtar placeras mellan två skärningar på den nivå du klickar på.
- Plintar placeras med sin överkant på den nivå du klickar på.
- {{ui:Planritning}} tittar ner på en nivå i taget.
- IFC-exporten skapar ett byggnadsplan per nivå.

## Ångra

Ändringar av rutnät och nivåer är redigeringar som alla andra: {{key:Mod+Z}} återställer föregående rutnät.

## Nästa

[Placera pelare, balkar och stag](topic:place-members)
