---
title: Plaas fondasies met wapening
summary: Plaas reghoekige blokfondasies met 'n onderste mat en beginstawe, kontroleer hulle en laai die buigskedule af.
keywords: fondasie, blokfondasie, wapening, versterking, stawe, mat, beginstawe, penne, buigskedule, staaflys, beton, haakies, dekking
from: 41a048be
---

Hierdie onderwerp handel oor reghoekige blokfondasies. Balke, kolomme, plate en mure is in [Detailleer gewapende beton](topic:reinforced-concrete). Elke fondasie kry 'n onderste mat in albei rigtings en, as jy wil, beginstawe wat daaruit opstaan. Stawe is VSA-groottes #3 tot #11.

## Plaas 'n fondasie

1. Kies {{ui:Plan}} en kies die vlak van die fondasie se bopunt.
2. Kies {{ui:Fondasie}} in die groep {{ui:Plaas}}, of druk {{key:F}}.
3. Stel die fondasie in die paneel {{ui:Eienskappe}} (sien hieronder), of hou die verstek.
4. Klik op 'n roosterkruising. Die fondasie word op die kruising gesentreer met sy bopunt op die vlak. Die statusbalk sê byvoorbeeld "Fondasie 2000 x 2000 x 600 onder A/1."

Jy kan ook die vorm {{ui:Voeg by rooster}} onderaan die paneel gebruik.

Die fondasie word deursigtig geteken sodat jy sy stawe kan sien, wat as soliede buise geteken word.

## Fondasie-instellings

| Veld | Verstek | Notas |
|---|---|---|
| Lengte L (mm) | 2000 | Langs x; 300 tot 50000 |
| Breedte B (mm) | 2000 | Langs y; 300 tot 50000 |
| Diepte H (mm) | 600 | 150 tot 10000 |
| Beton | 4000 psi | Teks, gedruk in die IFC-uitvoer |

**Onderste mat**

| Veld | Verstek | Notas |
|---|---|---|
| Lang stawe | #5 | Stawe langs L, die onderste laag |
| Afstand (mm) | 250 | Die grootste toegelate afstand; stawe word gelyk versprei op hierdie afstand of nouer |
| Kort stawe | #5 | Stawe langs B, op die lang stawe gelê |
| Afstand (mm) | 250 | Soos hierbo |
| Dekking (mm) | 75 | Vrye dekking op elke vlak |
| Eindhaakies | Aan | Draai albei punte van elke matstaaf op in 'n standaard 90°-haak (vorm U); af gee reguit stawe (vorm S) |

**Beginstawe**

| Veld | Verstek | Notas |
|---|---|---|
| Beginstawe | Aan | Skakel dit af vir 'n fondasie sonder beginstawe |
| Staaf | #6 | |
| Stawe langs L / Stawe langs B | 2 / 2 | 'n Rooster van stawe, gesentreer op die fondasie |
| Afstand langs L / Afstand langs B | 250 / 250 | Tussen stafsentrums |
| Uitsteek bo bopunt | 600 | Hoe ver die stawe bo die fondasie se bopunt uitsteek |
| Haak onder | Aan | 'n 90°-haak wat na buite wys en op die mat rus (vorm L) |

Onder die velde wys DetailCraft die haakpoot vir die lang stawe, byvoorbeeld "Haakpoot vir #5: 254 mm buite tot buite."

## Verander 'n geplaasde fondasie

Kies die fondasie (klik op sy beton weg van enige kolom, of op een van sy stawe). Jy kry dieselfde velde plus {{ui:Middelpunt x}}, {{ui:Middelpunt y}}, {{ui:Bokant z}} en {{ui:Rotasie (°)}}. Onder hulle wys 'n tabel die stawe van hierdie fondasie met hul merke, tellings en lengtes, en die betonvolume in kubieke meter.

Elke verandering word nagegaan voordat dit behou word. 'n Verandering wat nie gebou kan word nie, word geweier, en die statusbalk sê hoekom, byvoorbeeld "Die dekking laat geen ruimte vir stawe in hierdie fondasie nie.", "Die fondasie is te vlak vir twee lae stawe binne die dekking." of "Die beginstawe pas nie binne die fondasie met 75 mm dekking nie."

Veranderinge wat gebou kan word maar 'n tweede kyk nodig het, word onder die fondasie gelys en in die oortjie {{ui:Probleme}}:

- "#11-stawe by 59.6 mm laat minder as 35.8 mm vry. (ACI 318-19 25.2.1)." Die vry gaping tussen stawe moet ten minste die staafdeursnee en ten minste 25.4 mm wees.
- "#5-haakies benodig 254 mm diepte; slegs 150 mm pas binne die dekking." Die haakpote word dan kort gesny om te pas, so hulle is nie meer standaardhaakies nie.
- "Die beginhaakies steek in die dekking in."
- "Beginstawe is nader as die minimum vry afstand."

## Staafmerke en die buigskedule

Identiese stawe (dieselfde grootte, vorm en afmetings tot die millimeter) deel 'n staafmerk oor alle fondasies. Merke word geskryf as `<staafnommer>F<n>`: 5F1, 5F2 vir #5-stawe, 6F1 vir die eerste #6-staaf, en so meer. Fondasies met dieselfde grootte, beton, mat en beginstawe deel 'n fondasiemerk: F1, F2 …

1. Open die oortjie {{ui:Buigskedule}} onderaan. Elke ry is een staafmerk: grootte, vorm, afmetings A, B en C, telling, snylengte, totale lengte, massa per meter, gewig elk, totale gewig, en waarvoor die staaf gebruik word.
2. Kies {{ui:Laai CSV af}} in die oortjie, of {{ui:Buig}} in die {{ui:Uitvoer}}-groep se {{ui:Meer}}-kieslys, vir `<naam> bending schedule.csv`.

Vorms is DetailCraft se eie kodes, nie van 'n standaard nie: S reguit, L een buiging, U twee buigings. Afmetings is buite tot buite; die snylengte is die presiese middellynlengte deur die buigings. Sien [Wapeningsverwysing](topic:rebar-reference).

## Wat DetailCraft nie nagaan nie

- Ontwikkelings- en oorvleuelengtes, en of die beginstawe lank genoeg is vir die kolom daarbo.
- Die aggregaatgrootte-deel van die reël vir vry afstand (dit ken nie die mengsel nie).
- Enigiets oor die kolom of voetplaat daarbo: fondasies en staal is afsonderlik.

Sien ook [Wat nog nie gebou is nie](topic:not-built-yet).
