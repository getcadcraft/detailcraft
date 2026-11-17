---
title: Anslut balkar till pelare med ändplattor
summary: Lägg till bultade ändplattor där en balk möter en pelarfläns eller ett liv, ställ in plattan, bultarna och svetsen, och kopiera anslutningen till varje liknande knutpunkt.
keywords: ändplatta, endplate, momentanslutning, bultad anslutning, knutpunkt, bultar, svets, utdragen ändplatta, jämn, liknande, kopiera anslutning, komponent
from: 21e028b2
---

En ändplattanslutning svetsar en platta till balkänden och bultar den mot pelarflänsen eller livet. DetailCraft placerar plattan, kapar tillbaka balken, borrar matchande hål i plattan och i pelarflänsen, lägger till bultarna och svetsen, och kontrollerar kantavstånd och avstånd.

:::warning
DetailCraft dimensionerar inte anslutningar. Inställningarna är startvärden som du ska ändra; ingenting kontrollerar hållfastheten. Varningarna för kant- och avstånd använder minimivärdena i EN 1993-1-8 tabell 3.3, som kan skilja sig från de regler du arbetar efter.
:::

## Vad den kan ansluta

- En **plan** balk (båda ändarna på samma höjd), upprätt (rotation 0), med en I-profil.
- In i **flänsen** eller **livet** på en **vertikal** I-profilerad pelare, i rät vinkel mot den.
- Balkänden måste ligga på pelarens linje, mellan pelarens botten och topp.

Snedställda eller lutande balkar och icke-I-profiler avvisas med en anledning: använd [skjuvplåtar](topic:shear-tabs) för dem. På ett liv måste plattan och balkflänsarna få plats mellan pelarflänsarna; DetailCraft varnar när de inte gör det.

:::tip
Vid rotation 0 vetter pelarens flänsar längs det numrerade rutnätets riktning (x). En balk som går från A till B möter livet och får en ändplatta på livet.
:::

## Lägg till ändplattor på en balk

1. Välj {{ui:Markera}} ({{key:V}}) och klicka på balken.
2. Välj {{ui:Ändplattor}} i gruppen {{ui:Förbind}}, eller {{ui:Lägg till ändplattor}} i panelen {{ui:Egenskaper}}.
3. Varje fri ände på balken som möter en pelarfläns eller ett liv i rät vinkel får en platta. Statusfältet säger ”2 ändplattor tillagda. Markera en för att ändra dess platta, bultar och svets; Liknande kopierar den till liknande knutpunkter.”
4. Den första nya ändplattan markeras, och dess inställningar visas i panelen {{ui:Egenskaper}}.

Om inget händer, läs statusfältet:

- ”Den här balken slutar inte på en pelarlinje. Ändplattor placeras där en balkände möter en vertikal pelare.”
- ”Den här balken möter en pelare i en vinkel eller lutar: ändplattor byggs för raka, plana knutpunkter. Använd skjuvplåtar.”
- ”Båda ändarna har redan anslutningar.”

## Ändra plattan, bultarna och svetsen

Klicka på ändplattan (eller på en av dess bultar) för att markera anslutningen. Under {{ui:Platta, bultar och svets (mm)}}:

| Inställning | Standard | Vad den gör |
|---|---|---|
| Plattans tjocklek | 20 | Plattans tjocklek; också hur långt balken kapas tillbaka förbi flänsen |
| Plattans bredd | 180 | Tvärs över fogen |
| Förlängning ovanför balken | 0 | Ovanför överflänsen; över 0 blir det en utdragen ändplatta |
| Förlängning under balken | 0 | Under underflänsen |
| Bultdiameter | 20 | Nominell bultstorlek |
| Håldiameter | 22 | Ditt spelrum i plattan och pelarflänsen |
| Bultkvalitet | A325 | Text; skrivs ut i materialförteckningen |
| Bultrader | 4 | Rader med två bultar, centrerade på plattans höjd |
| Radavstånd | 75 | Vertikalt avstånd mellan raderna |
| Spårvidd | 100 | Horisontellt avstånd mellan de två bultarna i en rad |
| Tillägg för bultlängd | 30 | Läggs till greppet för mutter, bricka och gänga; se nedan |
| Filésvetsens storlek | 8 | Runt hela balkänden |
| Plattans material | A36 | Text |

Skriv ett nytt värde och tryck på {{key:Enter}} eller {{key:Tab}}. Plattan, hålen, bultarna och balkens kaplängd uppdateras direkt. Varje ändring är ett steg att ångra.

Under inställningarna ser du vad anslutningen skapar:

- {{ui:Bultar}}: till exempel ”8 × 20 × 70 A325 (grepp 36.2)”.
- {{ui:Svets}}: storlek, var den sitter och dess längd.
- {{ui:Platta}}: dess storlek och dess delmärkning.

### Så räknas siffrorna ut

- Balken kapas tillbaka med halva pelardjupet (på ett liv: halva livtjockleken) plus plattans tjocklek, så att plattan sitter mot ytan.
- Plattans höjd är balkdjupet plus de två förlängningarna.
- Bultlängd = grepp (plattans tjocklek + pelarflänsens eller livets tjocklek) + tillägg, avrundat uppåt till nästa 5 mm.
- Den visade svetslängden är balktvärsnittets omkrets.

### Varningar

Anslutningen byggs ändå, men dessa visas under den och i fliken {{ui:Problem}}:

- Bultrader eller bultar närmare plattans kant än 1.2 × håldiametern.
- Radavstånd under 2.2 × håldiametern, eller spårvidd under 2.4 × håldiametern.
- Hål som går in i pelarlivet eller dess filé, eller ut från pelarflänsen.
- En platta bredare än pelarflänsen, eller (på ett liv) bredare än utrymmet mellan flänsarna; balkflänsar som inte får plats mellan dem.
- En bultrad för nära en balkfläns, eller en spårvidd för trång för balklivet och dess svets.

## Kopiera den till varje liknande knutpunkt

1. Markera anslutningen du har ställt in.
2. Välj {{ui:Tillämpa på liknande (n)}} i panelen {{ui:Egenskaper}}, eller {{ui:Liknande}} i menyn {{ui:Mer}} i gruppen {{ui:Förbind}}. Siffran inom parentes är hur många knutpunkter som får den.
3. Varje knutpunkt med samma balkprofil och pelarprofil, med balken in i samma sorts yta, som ännu inte har någon anslutning får en kopia med samma inställningar. Statusfältet säger hur många.

Kopiorna är oberoende: att ändra en senare ändrar inte de andra. Knutpunkter som redan har en anslutning lämnas ifred; ta bort dem först om du vill ersätta dem.

## Flytta och ta bort

Anslutningar skapas om från sina inställningar varje gång modellen ändras, så att flytta eller ändra storlek på en balk eller pelare tar med sig dess ändplattor. Om en ändring gör att knutpunkten inte längre passar, ligger anslutningen kvar i modellen och fliken {{ui:Problem}} säger varför, till exempel ”Balkänden ligger inte längre på pelarlinjen.”

För att ta bort en anslutning, markera den och tryck på {{key:Delete}}. Om du tar bort balken eller pelaren tas dess anslutningar bort också.

Nästa: [Lägg till fotplattor och ankarbultar](topic:base-plates).
