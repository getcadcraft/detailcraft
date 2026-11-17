---
title: Placera plintar med armering
summary: Placera rektangulära plintar med ett nedre armeringsnät och startjärn, kontrollera dem och ladda ner bockningsförteckningen.
keywords: plint, plintgrund, grund, armering, järn, nät, startjärn, dymlingar, bockningsförteckning, järnlista, betong, krokar, täckskikt
from: 41a048be
---

Det här ämnet handlar om rektangulära plintar. Balkar, pelare, bjälklag och väggar finns i [Detaljera armerad betong](topic:reinforced-concrete). Varje plint får ett nedre armeringsnät i båda riktningarna och, om du vill, startjärn som sticker upp ur den. Järnen finns i US-dimensionerna #3 till #11.

## Placera en plint

1. Välj {{ui:Planritning}} och markera nivån för plintens överkant.
2. Välj {{ui:Plint}} i gruppen {{ui:Placera}}, eller tryck på {{key:F}}.
3. Ställ in plinten i panelen {{ui:Egenskaper}} (se nedan), eller behåll standardvärdena.
4. Klicka på en rutnätsskärning. Plinten centreras på den med överkanten i nivån. Statusfältet visar till exempel ”Plint 2000 x 2000 x 600 under A/1.”

Du kan också använda formuläret {{ui:Lägg till efter rutnät}} längst ner i panelen.

Plinten ritas genomskinlig så att du ser dess järn, som ritas som solida rör.

## Plintinställningar

| Fält | Standard | Anmärkningar |
|---|---|---|
| Längd L (mm) | 2000 | Längs x; 300 till 50000 |
| Bredd B (mm) | 2000 | Längs y; 300 till 50000 |
| Djup H (mm) | 600 | 150 till 10000 |
| Betong | 4000 psi | Text, skrivs ut i IFC-exporten |

**Nedre armeringsnät**

| Fält | Standard | Anmärkningar |
|---|---|---|
| Långa järn | #5 | Järn som löper längs L, nedre lagret |
| Avstånd (mm) | 250 | Största tillåtna avstånd; järnen fördelas jämnt med detta avstånd eller tätare |
| Korta järn | #5 | Järn som löper längs B, läggs ovanpå de långa järnen |
| Avstånd (mm) | 250 | Som ovan |
| Täckskikt (mm) | 75 | Fritt täckskikt på alla ytor |
| Ändkrokar | På | Böjer båda ändarna på varje nätjärn uppåt i en standardkrok på 90° (form U); av ger raka järn (form S) |

**Startjärn**

| Fält | Standard | Anmärkningar |
|---|---|---|
| Startjärn | På | Stäng av för en plint utan startjärn |
| Järn | #6 | |
| Järn längs L / Järn längs B | 2 / 2 | Ett rutnät av järn, centrerat på plinten |
| Avstånd längs L / Avstånd längs B | 250 / 250 | Mellan järnens centrum |
| Utstick ovanför överkant | 600 | Hur långt järnen sticker upp över plintens överkant |
| Krok i botten | På | En 90°-krok som pekar utåt och vilar på nätet (form L) |

Under fälten visar DetailCraft krokbenet för de långa järnen, till exempel ”Krokben för #5: 254 mm yttermått.”

## Ändra en placerad plint

Markera plinten (klicka på dess betong, långt från pelare, eller på ett av dess järn). Du får samma fält plus {{ui:Centrum x}}, {{ui:Centrum y}}, {{ui:Överkant z}} och {{ui:Rotation (°)}}. Under dem visar en tabell plintens järn med deras märkning, antal och längder, samt betongvolymen i kubikmeter.

Varje ändring kontrolleras innan den sparas. En ändring som inte kan byggas avvisas, och statusfältet anger varför, till exempel ”Täckskiktet lämnar inget utrymme för järn i den här plinten.”, ”Plinten är för grund för två lager järn inom täckskiktet.” eller ”Startjärnen ryms inte i plinten med 75 mm täckskikt.”

Ändringar som kan byggas men som behöver ses över listas under plinten och på fliken {{ui:Problem}}:

- ”#11-järn med 59.6 mm avstånd lämnar mindre än 35.8 mm fritt (ACI 318-19 25.2.1).” Det fria avståndet mellan järnen ska vara minst järnets diameter och minst 25.4 mm.
- ”#5-krokar behöver 254 mm djup; endast 150 mm ryms inom täckskiktet.” Krokbenen kortas då för att passa, så de är inte längre standardkrokar.
- ”Startkrokarna går in i täckskiktet.”
- ”Startjärnen står tätare än minsta fria avstånd.”

## Järnmärkning och bockningsförteckning

Identiska järn (samma dimension, form och mått ned till millimetern) delar en järnmärkning över alla plintar. Märkningarna skrivs `<järnnummer>F<n>`: 5F1, 5F2 för #5-järn, 6F1 för det första #6-järnet, och så vidare. Plintar med samma storlek, betong, nät och startjärn delar en plintmärkning: F1, F2 …

1. Öppna fliken {{ui:Bockningsförteckning}} längst ned. Varje rad är en järnmärkning: dimension, form, måtten A, B och C, antal, kapad längd, total längd, massa per meter, vikt per styck, total vikt och vad järnet används till.
2. Välj {{ui:Ladda ner CSV}} i fliken, eller {{ui:Bockning}} i menyn {{ui:Mer}} i gruppen {{ui:Utdata}}, för `<name> bending schedule.csv`.

Formerna är DetailCrafts egna koder, inte en standards: S rak, L en böj, U två böjar. Måtten är yttermått; kapad längd är den exakta mittlinjelängden genom böjarna. Se [Armeringsreferens](topic:rebar-reference).

## Vad DetailCraft inte kontrollerar

- Förankrings- och skarvlängder, och om startjärnen är tillräckligt långa för pelaren ovanför.
- Delen av regeln för fritt avstånd som gäller ballastens storlek (programmet känner inte till blandningen).
- Allt som gäller pelaren eller fotplåten ovanför: plintar och stål hanteras var för sig.

Se även [Vad som finns inte ännu](topic:not-built-yet).
