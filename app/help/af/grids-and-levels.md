---
title: Stel roosters en vlakke op
summary: Tik die roosterlyne, hul afstande en die vlakke waarop elke lid geplaas word.
keywords: rooster, roosters, asse, roosterlyne, vlakke, hoogtes, verdiepings, vloere, afstand, opstelling
from: 9cad233c
---

Elke lid in DetailCraft word op 'n roosterkruising op 'n vlak geplaas. Stel die roosters en vlakke eerste; jy kan dit later verander.

## Hoe roosters hier werk

- **Genommerde lyne** loop een rigting, **lyne met letters** die ander. Die name is net gewoonte: 'n etiket kan enige teks tot 8 karakters wees (1, 2, 3 of A1, A2, of 10, 20).
- Jy tik die etikette en die afstande tussen hulle, nie koördinate nie. Die eerste lyn van elke stel is by 0.
- Genommerde lyne is lyne van konstante x; lyne met letters is lyne van konstante y. Dus loop 'n balk vanaf rooster 1 na rooster 2 langs x, en 'n balk vanaf A na B loop langs y.
- Alle waardes is in millimeter.

'n Nuwe model begin met genommerde lyne 1 2 3 op 6000 6000, lyne met letters A B op 6000, en twee vlakke.

## Stel die roosters

1. In die paneel {{ui:Model}} links, maak {{ui:Roosters}} oop as dit toegevou is.
2. In {{ui:Genommerde lyne}}, tik die etikette geskei deur spasies, byvoorbeeld `1 2 3 4 5`.
3. In die veld {{ui:Afstande}} daaronder, tik een afstand vir elke gaping, byvoorbeeld `6000 6000 7500 6000`. Vier gapings vir vyf lyne.
4. Doen dieselfde in {{ui:Lyne met letters}} en sy {{ui:Afstande}}, byvoorbeeld `A B C` en `8000 8000`.
5. Kies {{ui:Pas roosters toe}}.

Die statusbalk sê "Roosters opgedateer." en die aansig zoem na die nuwe rooster. Kommas werk ook as skeiers.

As iets nie optel nie, verander niks nie, en die statusbalk sê hoekom, byvoorbeeld "Genommerde roosters: gee een afstand tussen elke paar lyne (4)." Ander kontroles: afstande moet positiewe millimeter wees, etikette moet verskil, en daar kan hoogstens 60 lyne elke kant toe wees.

:::note
Lede behou hul koördinate wanneer roosters beweeg. As jy 'n afstand verander nadat staal geplaas is, bly die staal waar dit was en is dit nie meer op die rooster nie. Verander eers die rooster, of skuif lede deur hul eindkoördinate te wysig.
:::

## Stel die vlakke

1. Open {{ui:Vlakke}} in die paneel {{ui:Model}}.
2. Elke ry het 'n vlaknaam en sy hoogte in millimeter. Wysig hulle soos jy wil.
3. Kies {{ui:Voeg vlak by}} vir 'n ander ry. Dit word "Vlak 3" (en so meer) genoem en 4000 mm bo die hoogste vlak geplaas; verander albei as jy dit nodig het.
4. Om 'n vlak te verwyder, kies die × knoppie aan die einde van sy ry.
5. Kies {{ui:Pas vlakke toe}}.

Niks verander totdat jy {{ui:Pas vlakke toe}} kies nie. Vlakke word by toepassing volgens hoogte gesorteer. Elke vlak het 'n naam nodig, twee vlakke kan nie 'n naam deel nie, en jy moet ten minste een vlak hou.

Vlakke kan onder nul wees (’n kelder by `-3500`) en hoef nie gelyk gespasieer te wees nie.

## Hoe vlakke gebruik word

- 'n Kolom wat op 'n vlak geplaas is, loop op tot die volgende vlak, of tot die vlak wat jy in {{ui:Tot}} kies.
- Balke en plate word tussen twee kruisings op die vlak geplaas wat jy klik.
- Fondasies word geplaas met hul bopunt op die vlak wat jy klik.
- {{ui:Plan}} kyk af na een vlak op 'n slag.
- Die IFC-uitvoer maak een gebouverdieping per vlak.

## Ontdoen

Rooster- en vlakveranderinge is wysigings soos enige ander: {{key:Mod+Z}} sit die vorige rooster terug.

## Volgende

[Plaas kolomme, balke en verbande](topic:place-members)
