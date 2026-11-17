---
title: Armera en rektangulär betongpelare
summary: Ett genomarbetat exempel på hur en rektangulär betongpelare detaljeras i DetailCraft: placera den, ge den längsgående stänger och ringar, läs kontrollerna, skarven ovanför den och stångmärkena, och rita dess verkstadsblad.
keywords: betongpelare, rektangulär pelare, pelararmering, längsgående stänger, vertikala stänger, ringar, bygel, tvärgående ringar, skarv, skarvning, startjärn, armeringsandel pelare, 1 procent, 8 procent, ringavstånd, ACI 318-19 25.7.2, EN 1992-1-1 9.5, verkstadsritning, stångmärken, 8C1, 3C2
from: aee2a3ca
---

Detta avsnitt tar en kvadratisk pelare från ingenting till en kontrollerad, ritad och förtecknad detalj. De allmänna reglerna för balkar, plattor och väggar finns i [Detaljera armerad betong](topic:reinforced-concrete); det här är pelarens del av dem, med siffror du kan återskapa.

:::warning
DetailCraft detaljerar de stänger du ger den. Den dimensionerar dem inte. Stängerna nedan är startvärden för exemplet, inte en rekommendation: konstruktören av projektet väljer dimension, antal och avstånd.
:::

## Vad en pelare är här

En rektangulär pelare har en bredd (längs dess lokala x) och ett tvärsnittsdjup (längs dess lokala y), en fri täckning till ringarna, längsgående stänger på varje yta och slutna ringar. Om du roterar den vrids hela enheten; ytorna förblir "breddyta" och "djupyta".

- De längsgående stängerna anges som antalet på en breddyta och antalet på en djupyta. Hörnstängerna räknas på båda, så 3 och 3 ger 8 stänger; 4 och 4 ger 12.
- Ringarna är slutna rektanglar med två krokar i ett hörn, 135° eller 90°. Den första ringen ligger ett bestämt avstånd över golvet (och under nästa), ändzonerna har tätare avstånd, mitten ett glesare.
- Vad stängerna gör upptill: fortsätter och skarvas med stängerna ovanför, vänds in med 90°-krokar i bjälklaget, eller slutar under toppen.

## Exempelpelaren

En 400 × 400 mm pelare, 3600 mm mellan bjälklaget ovanför och bjälklaget under, längsgående stänger #8, ringar #3, 40 mm fri täckning, f'c 28 MPa, fy 420 MPa, ACI 318-19, innerpelare.

1. Öppna fliken {{ui:Betong}} och ställ in rutnätslinjerna och nivåerna som pelaren står på (vänstra panelen).
2. I {{ui:Lägg till efter rutnät}}, välj {{ui:Betongpelare}}, välj rutnätsskärningen och de två nivåerna, ange {{ui:Bredd (mm)}} och {{ui:Djup tvärs (mm)}} till 400 och välj {{ui:Lägg till}}.
3. I panelen {{ui:Egenskaper}} ställ in:
   - {{ui:Fri täckning (mm)}} 40;
   - {{ui:Längsgående armering}} #8, {{ui:Armeringsjärn på bredsida}} 3, {{ui:Armeringsjärn på djupsida}} 3;
   - {{ui:Ringar}} #3, {{ui:Krokar}} 135°, {{ui:Avstånd mellan (mm)}} 300, {{ui:Längd på ändzon (mm)}} 600, {{ui:Avstånd i ändzonerna (mm)}} 150, {{ui:Första från ytan (mm)}} 50;
   - {{ui:Armering upptill}} {{ui:Förlöps och skarvas med armeringen ovanför}}.

Varje ändring är ett steg i ångra.

### Vad du får

| Del | Resultat |
|---|---|
| Längsgående stänger | 8 stänger #8 (en 3 × 3-ring), vardera 4375 mm lång: den 3600 mm långa pelaren plus en 775 mm skarv ovanför |
| Skarv | 757 mm behövs för en tryckskarv (ACI 318-19 25.5.5.1, fy 420), 775 mm finns: behovet avrundat uppåt till nästa 25 mm |
| Ringar | 17 ringar #3, vardera med en skärlängd på ungefär 1359 mm, med 150 mm avstånd i de två 600 mm långa ändzonerna och 300 mm mellan |
| Armeringsandel | 2.5 % av bruttotvärsnittet (gränser 1 % till 8 %, ACI 318-19 10.6.1.1) |
| Fritt avstånd mellan stängerna | 112 mm (behöver minst 40 mm, ACI 318-19 25.2.3) |
| Ringavstånd | 300 mm (tillåtet 400 mm: det minsta av 16 stångdiametrar, 48 ringdiametrar och den mindre sidan, ACI 318-19 25.7.2.1) |
| Ringdimension | #3 (tillåts ned till 9.5 mm, ACI 318-19 25.7.2.2) |

Allt detta finns i elementets lista {{ui:Kontroller}}; skarven finns också i {{ui:Skarvar och förankring}}.

## Tvärgående ringar

Med en omkretsring hålls bara hörnstängerna. ACI 318-19 25.7.2.3 tillåter att en mittstång på en yta står utan stöd om den ligger inom 150 mm fritt avstånd från en hörnstång. Med 3 stänger på en yta, som ovan, uppfylls det. Med 4 eller fler stänger på en yta gör den inte det, och DetailCraft säger det som en varning ({{ui:Kontroller}} och Problem): "tvärgående ringar" behövs. **Tvärgående ringar ritas inte ännu**: lägg till dem i ritningen för hand, eller välj färre stänger på ytan.

För EN 1992-1-1 kontrollerar DetailCraft stångdimensionen (minst 8 mm), antalet stänger (minst 4), stålarean (0.2 % till 4 % av tvärsnittet), det fria avståndet och ringavståndet (9.5.2 och 9.5.3).

## Skarven, plinten och pelaren under

- Där **en plint i modellen står under pelaren** skarvas pelaren med plintens startjärn, och deras skarv kontrolleras också.
- Där **en annan pelare i modellen står under den** skarvas den med den pelarens stänger.
- Ange din egen {{ui:Skarvlängd (mm, 0 = efter behov)}} för att åsidosätta; en kortare än vad som behövs är ett problem och markeras med * i tabellen.
- Tryckskarvar används som standard ({{ui:Tryckskarv}} i inställningarna); välj {{ui:Dragskarv}} när pelaren kan vara i drag.

## Märken, förteckning och verkstadsbladet

Identiska stänger delar ett märke: pelarens längsgående stänger ovanför är 8C1, dess ringar 17C2 (talet först, sedan bokstaven C för pelare och löpnumret). De visas i fliken {{ui:Bockningsförteckning}}, med skärlängd och vikt, och i CSV-filen från {{ui:Utdata}} › {{ui:Mer}} › {{ui:Bockning}}.

Välj {{ui:Verkstadsritning}} bredvid pelaren för ett blad med pelaren i fasad (varje stång, dess märke, ringzonerna och skarven måttsatta) och ett snitt vid mitten, följt av bockningsbladet. Spara {{ui:Detta blad som PDF}}.

## Vad detta inte gör

- Runda pelare och spiraler, och pelare som inte är rektangulära: inte byggt.
- Hörn- och tvärringar inom tvärsnittet, och seismisk detaljering (ACI 318-19 kapitel 18): inte byggt.
- Skarvar på positioner du väljer, eller förskjutna: alla stänger skarvas i ett snitt.
- Om stängerna räcker för lasten: det är konstruktörens dimensionering.
