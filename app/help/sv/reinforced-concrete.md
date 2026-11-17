---
title: Detaljera armerade betongbalkar, pelare, plattor och väggar
summary: Lägg till betongbalkar, pelare, plattor och väggar efter rutnät, ge dem armering, bygel och bindrar, kontrollera skarvar och förankring mot ACI 318-19 eller EN 1992-1-1, och skapa verkstadsritningar och bockningsförteckningar.
keywords: armerad betong, armering, armering, balk, pelare, platta, vägg, bygel, bindrar, ligaturer, hakar, skarvar, skarv, förankring, förankringslängd, ld, ldh, lbd, täckskikt, avstånd, kantarmering, öppningar, mattor, postnummer, bockningsförteckning, bbs, verkstadsritning, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, IFC-import
from: 3835b7ec
---

Fliken {{ui:Betong}} under vyn beskriver järnen i betongbalkar, pelare, plattor och väggar. Du anger dimensioner och järnen; DetailCraft placerar varje järn, numrerar det, kontrollerar skarvarna, förankringen, täckskiktet och avståndet mot den paragraf de kommer från, och ritar det.

:::warning
DetailCraft detaljerar de järn du anger. Det dimensionerar dem inte. Varje resultat är avsett för kontroll av en ingenjör.
:::

## Öppna fliken Betong

Välj fliken {{ui:Betong}} under vyn. I ett menyfliksläge finns {{ui:Betong}} på fliken {{ui:Modellering}} bredvid {{ui:Plint}}. Med ritstilens kommandorad skriver du {{cmd:CONCRETE}}.

## Lägg till ett element efter rutnät

Betongelement placeras på modellens rutnätslinjer och nivåer, så ställ in dem först (vänster panel).

1. I {{ui:Lägg till efter rutnät}} väljer du {{ui:Element}}: {{ui:Betongbalk}}, {{ui:Betongpelare}}, {{ui:Platta}} eller {{ui:Vägg}}.
2. Välj rutnätslinjer och nivåer:
   - en balk går från en rutnätsskärning till en annan, med sin överkant på nivån;
   - en pelare står vid en skärning, från en nivå till en annan;
   - en platta fyller rektangeln mellan två numrerade och två bokstavsmärkta rutnätslinjer, med sin överkant på nivån;
   - en vägg går längs sin mittlinje från en skärning till en annan, från en nivå till en annan.
3. Ange dimensionen och välj {{ui:Lägg till}}. Elementet markeras och dess fält öppnas i panelen {{ui:Egenskaper}}.

Varje element startar med järn som är startvärden, inte dimensionering: ändra dem till ingenjörens.

## Ändra järnen

Markera elementet (i vyn eller dess namn i fliken {{ui:Betong}}). Panelen {{ui:Egenskaper}} visar:

| Element | Vad du anger |
|---|---|
| Balk | Bredd, djup, täckskikt; överst och nederst järn (dimension, antal, raka eller 90°-hakar i ändarna); sidojärn; byglar (dimension, 135°- eller 90°-hakar, avståndet för den första från stödytan, längden och avståndet för ändzonen, avståndet emellan); stödlängder; skarvlängder |
| Pelare | Bredd, djup tvärs, rotation, täckskikt; längsgående järn på varje sida; bindrar som för bygel; vad järnen gör upptill (skarv med pelaren ovanför, haka i golvet eller sluta) |
| Platta | Tjocklek, storlek, överkant, täckskikt; nedre och övre matta åt båda håll (dimension och avstånd); U-järn runt kanterna; kantarmering; öppningar |
| Vägg | Tjocklek, täckskikt, ett eller två lager, horisontella och vertikala järn, U-järn i ändarna, vertikala järn med eller utan skarv upptill, kantarmering, öppningar |

Varje ändring är ett ångringssteg. En ändring som inte kan byggas vägras och statusfältet anger varför, till exempel ”Öppningen ryms inte i elementet med dess täckskikt.”

Bygel och bindrar är slutna, med båda hakarna i ett hörn. En balks järn går i ändarna in i en betongpelare till pelarens bortre yta minus täckskikt; där ingen pelare finns, ange {{ui:Stödlängd i början (mm)}} och stödlängden i slutet.

## Skarvar och förankring

Järn längre än {{ui:Standardlängd på armeringsjärn (mm)}} (från start 12000) delas i bitar av lika längd, som skarvas. Tabellen {{ui:Skarvar och förankring}} listar varje skarv och varje förankring: vad som krävs, med paragrafen och dess villkor, och vad detaljen har.

- Skarvlängd 0 betyder "efter behov": längden som normen anger, avrundad uppåt till 25 mm.
- Skriv in en egen skarvlängd för att använda den i stället. Om den är kortare än nödvändigt är det ett problem (se nedan) och den markeras med * i tabellen.
- Förankring mäts från stödytan till järnets ände inne i stödet. En balk utan känt stöd anger det i stället för att kontrollera den.
- En pelare på en plint skarvas med plintens startjärn, och på en annan pelare med den pelarens järn; deras skarv kontrolleras också.

**ACI 318-19** (SI): raka järn i drag 25.4.2.3 (tabellen, med ψt, ψe, ψg, λ), standardhakar 25.4.3.1 (ψr 1.6 och ψo 1.25 används om inget annat är känt), järn i tryck 25.4.9.2, dragskarvar 25.5.2.1 (klass B, eller klass A i inställningarna), tryckskarvar 25.5.5.1.

**EN 1992-1-1**: förankring 8.4.4 med fbd från 8.4.2 (god eller dålig vidhäftning), skarvar 8.7.3 med α6 för varje järn som skarvas i ett snitt. γc, γs och αct startar på de rekommenderade värdena; ange din nationella bilaga.

## Kontrollerna

Varje kontroll som misslyckas finns i skalets problempanel (källa {{ui:Armeringskontroller}}) och i elementets lista {{ui:Kontroller}}:

| Kontroll | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Täckskikt | Tabell 20.5.1.3.1, efter exponering | Minimum för vidhäftning, tabell 4.2 (beständighetstäckskiktet anger du själv) |
| Fritt avstånd mellan järn | 25.2.1 (balkar, plattor, väggar), 25.2.3 (pelare) | 8.2 (2) |
| Byglavstånd | 9.7.6.2.2 | 9.2.2 (6) |
| Minsta armering i balk | 9.6.1.2 | 9.2.1.1 (1) |
| Sidojärn i balk över 900 mm djup | 9.7.2.3 | kontrolleras inte |
| Pelarens armeringsandel, antal järn | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Bindrar: avstånd, dimension, tvärbindrar | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Plattans avstånd, minsta armering | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Väggens avstånd, minsta armering, två lager | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Skarvar, förankring | som ovan | som ovan |

Ballastens storlek är inte känd, så det fria avståndet kontrolleras utan den.

## Öppningar, kantarmering och kantjärn

Välj {{ui:Lägg till en öppning}} under en markerad platta eller vägg och ange var den ligger och dess storlek. Järn som den korsar slutar på täckskiktet från dess kant. Kantarmering läggs till på varje sida, i samma lager, med halva arean av de avskurna järnen, en förankringslängd förbi öppningen. Det är DetailCraft:s startregel, inte en paragraf i normen: ändra {{ui:Kantarmering}} till ingenjörens. Hörnjärn läggs inte till.

U-järn runt en plattas fria kanter och i en väggs ändar har ben lika långa som en skarvlängd.

## Postnummer och bockningsförteckningen

Identiska järn delar ett postnummer: plintar behåller F-nummer (5F1), balkar får B, pelare C, plattor S och väggar W (7B1, 8C1, 4S2). Fliken {{ui:Bockningsförteckning}} och dess CSV listar nu varje järn i konstruktionen, plintar först. {{ui:Utdata}} › {{ui:Mer}} › {{ui:Bockning}} laddar ner den.

## Verkstadsritningar

Välj {{ui:Utdata}} › {{ui:Mer}} › {{ui:Armeringsritningar}}, {{ui:Armeringsritningar}} i fliken {{ui:Betong}}, eller {{ui:Verkstadsritning}} bredvid ett element. Varje element får ett blad med en fasad (en plan för en platta) som visar varje järn och dess postnummer, bygel- eller bindarzonerna och skarvarna måttsatta, samt en sektion i mitten; sedan listar bockningsbladen varje postnummer med en skiss av dess form, dess mått, antal, kapad längd och vikt.

Bladen görs från modellen varje gång, och på nytt efter varje ändring medan fönstret är öppet: ritningshuvudet bär modellreferensen. Spara {{ui:Detta blad som PDF}} eller {{ui:Alla blad som PDF}}.

## Järn från en IFC-fil

{{ui:Fil}} › {{ui:Importera IFC}} läser nu IfcReinforcingBar: den svepta skivan längs dess mittlinje återskapas som raka ben och böjar, med sin diameter, sitt postnummer och elementet som håller den. Järnen behålls som de lästes (de görs inte om till en balks eller plattas regler), visas i vyn, listas i bockningsförteckningen och skrivs ut igen med IFC-exporten. Importrapporten anger hur många järn som lästes, av vilka dimensioner, i hur många element, och vad som lämnades ut och varför.

En balk, pelare, platta eller vägg i den filen som innehåller järn eller vars material är betong tas inte för stål; rapporten anger det. DetailCraft:s egen IFC-export bär varje betongelements definition, så det återkommer som sig självt, och dess järn görs om från den.

:::note
Att läsa ett konstruktionsprogram egna filer (inte IFC) finns inte ännu: exportera IFC från det.
:::

## IFC-exporten

Betongbalkar, pelare, plattor (med öppningar) och väggar exporteras som IfcBeam, IfcColumn, IfcSlab och IfcWall, var och en med sina järn som IfcReinforcingBar (huvudjärn, ligaturer för bygel och bindrar, kantjärn) aggregerade till sig, varje järn en svept skiva längs sin mittlinje med sanna bågar vid böjarna, dess postnummer och dess kapade längd.
