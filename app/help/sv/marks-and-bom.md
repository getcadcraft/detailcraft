---
title: Kontrollera märken och stycklistan
summary: Läs del- och sammanställningsmärkena som DetailCraft ger varje bit, kontrollera stycklistan och ladda ner den som CSV.
keywords: märken, numrering, delmärke, sammanställningsmärke, bitmärke, stycklista, bom, materialförteckning, vikter, bultlista, csv, numrering
from: caa2ee80
---

DetailCraft märker modellen själv. Det finns inget numreringskommando och inget att köra: efter varje ändring räknar den ut vilka delar som är samma stålbit och ger dem ett märke.

## Var märkena visas

- Listan {{ui:Delmärken}} i panelen {{ui:Modell}}: varje märke med sin profil, längd och antal. Klicka på ett för att markera den första delen med märket.
- Panelen {{ui:Egenskaper}} för en markerad stång (och listan **Delmärken** i vänsterpanelen): {{ui:Delmärke}} och {{ui:Sammanställning}}. Panelrubriken visar också märket, till exempel ”Balk b1”.
- Fliken {{ui:Stycklista}}, CSV-filen, NC-filnamnen, verkstadsritningarna och IFC-exporten (som varje elements etikett).

## Så märks delarna

- **Delmärken:** c för pelare, b för balkar, br för stag, st för trappvangar, p för plåtar (inklusive ändplattor och fotplåtar). Sedan ett nummer: c1, c2, b1, p1 … När delar ligger i mer än en fas kommer ett fasnummer först, till exempel 2-b1.
- **Sammanställningsmärken:** C, B, BR eller P. En sammanställning är en huvudstång och de plåtar som svetsats till den, till exempel en balk med sina två ändplattor, eller en pelare med sin fotplåt.
- Två delar delar märke när de har samma profil, material och kaplängd, och samma hål och urtag, alla inom 1 mm, även om den ena är vänd ände mot ände eller upp och ner i förhållande till den andra.
- Numreringen går pelare först, sedan balkar, stag och plåtar; inom varje grupp efter profilnamn, längsta först.

Alla regler, inklusive vilka vridningar som räknas för U-profiler och vinkeljärn: [Märkningsregler](topic:mark-rules).

:::warning
Märken räknas ut på nytt efter varje ändring, så de kan numreras om. Om du lägger till en del, ändrar en profil eller lägger till ett hål kan b3 bli b4. Betrakta märkena som slutgiltiga först när modellen är klar, och gör stycklistan, NC-filerna och verkstadsritningarna från samma sparade modell.
:::

## Läs stycklistan

Öppna fliken {{ui:Stycklista}} längst ned. Den har tre tabeller.

**Delar**, med den totala stålvikten i rubriken:

| Kolumn | Betydelse |
|---|---|
| Delmärke | Klicka för att markera den första delen med detta märke |
| Typ | balk, pelare, stag, trappvange eller plåt |
| Profil | Till exempel W16x26 eller PL20x180 |
| Material | Den kvalitet du angett |
| Längd (mm) | Kapad längd, efter förbindelser |
| Antal | Hur många |
| Enhetsvikt (kg) | Profilens massa per meter × längd |
| Total vikt (kg) | Enhetsvikt × antal |

Sista raden ger totalt antal och total vikt.

**Sammanställningar:** varje sammanställningsmärke, dess huvuddel, alla dess delar (till exempel ”b1 + p1 + p1”), antal, enhetsvikt och total vikt.

**Bultar och ankarbultar:** grupperade efter typ, diameter, längd och kvalitet, med antal.

:::note
Vikterna är brutto: hål och urtag dras inte av. Bultar, muttrar, brickor och svetsar ingår inte i stålvikten.
:::

## Ladda ner den

Välj {{ui:Ladda ner CSV}} i fliken, eller {{ui:Stycklista}} i gruppen {{ui:Utdata}}. Filen `<name> BOM.csv` innehåller de tre tabellerna efter varandra, var och en under sin titel, med en tom rad emellan. Den öppnas i vilket kalkylprogram som helst.

## Kontrollera innan du skickar

1. Öppna fliken {{ui:Problem}} och åtgärda varje rad. En förbindelse som inte kunde byggas lägger inte till någon plåt, några hål eller bultar, så stycklistan blir för kort.
2. Leta efter märken du inte väntade dig. Två balkar du tror är lika men med olika märken skiljer vanligen på ett hål, ett urtag eller en kapad längd; markera var och en och jämför.
3. Spara modellen och gör sedan alla exporter från det sparade läget.
