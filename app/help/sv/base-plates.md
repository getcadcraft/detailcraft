---
title: Lägg till fotplåtar och ankarbultar
summary: Placera en svetsad fotplåt med fyra ankarbultar under en pelare, ange dess mått och kopiera den till alla liknande pelare.
keywords: fotplåt, fotplåtar, baseplate, ankarbultar, förankringsbultar, uppspänningsbultar, pelarfot, grundbultar, liknande
from: 619ebc64
---

En fotplåtsförbindelse placerar en plåt under pelaren, kortar pelaren med plåtens tjocklek, svetsar ihop de två och lägger till fyra ankarbultar genom hål i plåten.

:::warning
Måtten är utgångsvärden, inte en konstruktion. DetailCraft kontrollerar inte bärighet, bultarnas hållfasthet eller förankringslängd.
:::

## Lägg till en fotplåt

1. Välj {{ui:Markera}} ({{key:V}}) och klicka på en pelare. Den måste vara vertikal.
2. Välj {{ui:Fotplåt}} i gruppen {{ui:Förbind}}, eller {{ui:Lägg till fotplåt}} i panelen {{ui:Egenskaper}}.
3. Statusfältet säger ”Fotplåt tillagd med fyra ankarbultar.” Den nya förbindelsen är markerad.

En pelare kan ha en fotplåt. Om den redan har en säger statusfältet ”Pelaren har redan en fotplåt.”

## Ändra den

Markera fotplåten (klicka på plåten eller en bult). Under {{ui:Plåt, bultar och svets (mm)}}:

| Inställning | Standard | Vad den gör |
|---|---|---|
| Plåttjocklek | 25 | Pelaren kortas med så mycket |
| Plåtlängd | 450 | Längs pelarens djup |
| Plåtbredd | 400 | Tvärs pelaren |
| Ankarbultens diameter | 20 | Storlek på ankarbulten |
| Hål­diameter | 33 | Hål i plåten |
| Bultkvalitet | F1554 Gr 36 | Ankarbultens kvalitet, som text |
| Ankarbultarnas avstånd (längs djupet) | 350 | Mellan bultcentrum, längs plåtens längd |
| Ankarbultarnas avstånd (tvärs) | 300 | Mellan bultcentrum, tvärs |
| Ankarbultens utstick ovanför plåten | 100 | Från plåtens ovansida till bultens överkant |
| Ankarbultens förankring under plåten | 450 | Från plåtens undersida ned i betongen |
| Filetsvets, storlek | 8 | Runt hela pelarfoten |
| Plåtmaterial | A36 | Text |
| Injekteringsspalt | 0 | Mellan betongens överkant och plåtens undersida |
| Avstyvningar | Ingen | Välj Ingen, 2 (i linje med livet) eller 4 (även vinkelrätt mot det); se nedan |
| Avstyvningens tjocklek, höjd | 12, 150 | |
| Skjuvlugg, djup | 0 | Hur långt luggen når under plåten; 0 = ingen lugg |
| Skjuvlugg, tjocklek, bredd | 25, 150 | |
| Plattbrickor | Ingen | På varje ankarbult, eller ingen |
| Brickans storlek, tjocklek | 0, 0 | 0 = minimum enligt AISC Design Guide 1 för ankarbulten |

Ankarbultens längd = förankring + injekteringsspalt + plåttjocklek + utstick. Med standardvärdena blir det 575 mm.

## Detaljer för basen: injektering, avstyvningar, skjuvlugg, brickor

Alla fyra är avstängda på en ny fotplåt, och på fotplåtar från modeller gjorda före DetailCraft 0.4.

- **Injekteringsspalt.** Plåten sitter så här långt över betongens överkant, och ankarbultarna blir längre med samma mått. AISC Design Guide 1 (2.10) föreslår 1 in. på ett färdigt golv och 1½ till 2 in. på en grund eller pelare; mer för stora plåtar och plåtar med skjuvlugg.
- **Avstyvningar.** Vertikala plåtar svetsade till pelaren och plåten, från pelarens yta ut till plåtens kant, som rektanglar (ingen avfasning eller avsmalning ännu). **2** står i linje med livet, bortom varje fläns; **4** lägger till två vinkelrätt mot livet, mellan flänsarna, ut till plåtens sidor. På ett rörprofilerat pelare står de mitt på varje yta. Varje är svetsad till pelaren och plåten på båda sidor.
- **Skjuvlugg.** En plåt svetsad runt hela sin omkrets under fotplåten, i linje med pelarens djup och centrerad. DetailCraft varnar om den inte är djupare än injekteringsspalten. Den skär inte ut fickan i plinten; [kollisionskontrollen](topic:clash-check) lämnar därför luggen och plinten utanför.
- **Plattbrickor.** En kvadratisk plattbricka på varje ankarbult, placerad på fotplåten och listad i pelarens sammanställning som lös (levereras med pelaren, inte svetsad: Design Guide 1, 2.6). Med storlek och tjocklek 0 tar DetailCraft minimibrickan från AISC Design Guide 1, 2:a uppl., tabell 2.3 för ankarbulten; en metrisk ankarbult får nästa tumstorlek upp (en M20 får raden för 7/8 in., 2½ in. × 5/16 in.). Egenskapspanelen visar den använda storleken. Brickans hål är ankarbultens diameter + 1/16 in.: det är DetailCraft:s val, eftersom tabellen inte anger något. DetailCraft varnar när ankarbultarna kanske inte sticker ut tillräckligt för brickan och en mutter (utstick mindre än brickans tjocklek + ankarbultens diameter).

Design Guide 1, tabell 2.3, anger också hålet i plåten för ankarbulten: 1-5/16 in. för en ¾ in. bult, 1-9/16 in. för ⅞ in., 1-13/16 in. för 1 in. DetailCraft ändrar inte ditt hålmått.

Varningar visas också när ankarbultshålen ligger närmare plåtens kant än 1.2 × hålets diameter, när bultarna hamnar innanför pelarens kontur eller när plåten är mindre än pelaren.

## Kopiera till liknande pelare

1. Markera fotplåten.
2. Välj {{ui:Använd på liknande (n)}}, eller {{ui:Liknande}} i menyn {{ui:Mer}} i gruppen {{ui:Förbind}}.
3. Varje vertikal pelare med samma profil som saknar fotplåt och inte står på en annan pelare får en kopia.

## Fotplåtar och plintar

En fotplåt behöver ingen plint, och en plint vet inget om fotplåten ovanför: ankarbultarna är inte bundna till plintens armering. Placera plintar med {{ui:Plint}}; se [Placera plintar med armering](topic:footings-and-rebar).
