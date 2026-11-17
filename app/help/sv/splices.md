---
title: Skarvar
summary: Förbind två delar av en balk- eller pelarände ände mot ände med bultade fläns- och livtäckplattor.
keywords: skarv, balkskarv, pelarskarv, täckplatta, skarvplatta, flänsplatta, livplatta, bultad skarv, led, lyft, förbind
from: 97d141c2
---

En bultad skarv förbinder två delar av samma I-profilände mot ände: en täckplatta utanpå varje fläns och en platta på varje sida av livet, bultade genom båda delarna. DetailCraft kapar delarna tillbaka till gapet, placerar de fyra plattorna, borrar hålen i plattorna och i båda delarna, lägger till bultarna och varnar för kantavstånd, bultavstånd och passning.

## Var den fungerar

- Två balkar, eller två pelarlyft, med **samma I-profil**, som möts **ände mot ände i linje**: ändarna högst 50 mm från varandra, delarna parallella och på en linje (inom 1 mm). Vilken del som helst kan ritas i vilken riktning som helst.
- Nivå-, lutande och vertikala delar fungerar alla.
- Två delar med olika höjd eller flänsbredd nekas, liksom kanalprofiler, vinkelprofiler och rör.

## Lägg till skarvar

1. Rita de två delarna så att de möts ände mot ände. För att dela en stång som redan är ritad, rita den igen som två delar.
2. Markera en (eller båda) och välj {{ui:Skarv}} i menyn {{ui:Mer}} i gruppen {{ui:Förbind}}.
3. Varje fri led hos de markerade delarna med en annan del av samma profil får en skarv. Statusfältet visar hur många.

Markera skarven (klicka på en av dess plattor) för att ändra dess inställningar i den högra panelen. {{ui:Använd på liknande (n)}} kopierar den till varje annan fri led mellan delar av samma profil.

## Inställningar (mm)

| Inställning | Standard | Vad den gör |
|---|---|---|
| Gap mellan ändarna | 10 | Varje del kapas tillbaka med hälften av gapet |
| Bultdiameter, hål, hållfasthetsklass, längdtillägg | 20, 22, A325, 30 | Som för ändplattor |
| Flänsplattans tjocklek | 12 | Plattan är lika bred som flänsen |
| Flänsbultrader (på varje sida) | 3 | Rader över flänsen på varje sida av leden |
| Flänsbultavstånd | 75 | Längs med delen |
| Flänsbultmått | 0 | Mellan de två bultlinjerna; 0 = flänsbredd minus 80 |
| Flänsens ändavstånd | 40 | Delens ände till första bulten, och sista bulten till plattans ände |
| Livplattans tjocklek | 8 | En på varje sida av livet |
| Livbultrader | 3 | Uppför livet, centrerade |
| Livbultkolumner (på varje sida) | 2 | Längs med delen på varje sida av leden |
| Livbultavstånd, uppför livet / längs med delen | 75, 75 | |
| Livets ändavstånd | 40 | Som för flänsarna |
| Livplattans höjd | 0 | 0 = det fria livet mellan radierna minus 10 upptill och nedtill |
| Plattmaterial | A36 | Text |

Plattlängderna följer av bultarna: flänsplatta = gap + 2 × (2 × ändavstånd + (rader − 1) × avstånd); livplattorna på samma sätt med sina kolumner. Med standardvärdena är flänsplattorna 470 långa.

## Bra att veta

- Plattorna tillhör den **först ritade** av de två delarna (dess egenskaper kallar den första delen): de visas på dess monteringsritning och levereras med den, bultade, inte svetsade. Monteringsritningen för den andra delen visar bara dess hål.
- Flänsbultarna greppar flänsen och dess platta; livbultarna greppar livet och båda livplattorna. Bultlängderna anges separat i egenskaperna.
- Varningarna använder samma minimivärden enligt EN 1993-1-8 som de andra förbanden (ände- och kantavstånd 1.2 × hål, bultavstånd 2.2 × hål längs och 2.4 × hål tvärs), plus en livplatta som är djupare än det fria livet och flänsbultar som ligger för nära livet för radien.
- DetailCraft dimensionerar inte skarven (ingen hållfasthetskontroll) och gör inte fyllningsplattor för delar med olika tjocklek.
- Om du kopierar båda delarna kopieras deras skarv; om du tar bort någon av delarna tas skarven bort.
