---
title: Bæta við undirplötum og akkerisstöngum
summary: Setja soðna undirplötu með fjórum akkerisstöngum undir súlu, stilla stærðir hennar og afrita hana á allar svipaðar súlur.
keywords: undirplata, baseplate, akkerisstangir, akkerisboltar, niðurfestingarboltar, súlufótur, undirstöðubolar, svipað
from: 619ebc64
---

Undirplötutenging setur plötu undir súluna, styttir súluna um þykkt plötunnar, sýður þetta tvennt saman og bætir fjórum akkerisstöngum við í götum á plötunni.

:::warning
Stærðirnar eru upphafsgildi, ekki hönnun. DetailCraft athugar ekki burðarþol, styrk stanga né innfestingu.
:::

## Bæta við undirplötu

1. Veldu {{ui:Velja}} ({{key:V}}) og smelltu á súlu. Hún verður að vera lóðrétt.
2. Veldu {{ui:Undirplata}} í hópnum {{ui:Tengja}}, eða {{ui:Bæta við undirstöðuplötu}} í glugganum {{ui:Eiginleikar}}.
3. Stöðustikan segir „Undirplata bætt við með fjórum akkerisstöngum.“ Nýja tengingin er valin.

Súla getur haft eina undirplötu. Ef hún er þegar með eina segir stöðustikan „Þessi súla er þegar með undirplötu.“

## Breyta henni

Veldu undirplötuna (smelltu á plötuna eða stöng). Undir {{ui:Plata, boltar og suða (mm)}}:

| Stilling | Sjálfgefið | Hvað það gerir |
|---|---|---|
| Þykkt plötu | 25 | Súlan styttist um þetta |
| Lengd plötu | 450 | Eftir dýpt súlunnar |
| Breidd plötu | 400 | Þvert á súluna |
| Þvermál stangar | 20 | Stærð akkerisstangar |
| Þvermál göts | 33 | Gat á plötunni |
| Gæðaflokkur bolta | F1554 Gr 36 | Gæðaflokkur stangarinnar, sem texti |
| Bil stanga (eftir dýpt) | 350 | Á milli miðja stanga, eftir lengd plötunnar |
| Bil stanga (þvert) | 300 | Á milli miðja stanga, þvert |
| Útstandandi stöng ofan plötu | 100 | Frá efri hlið plötu að efri enda stangar |
| Innfesting stangar undir plötu | 450 | Frá neðri hlið plötu niður í steypuna |
| Stærð hornsuðu | 8 | Allan hringinn við fót súlunnar |
| Efni plötu | A36 | Texti |
| Bil fyrir fyllingu | 0 | Bil á milli efri hliðar steypu og neðri hliðar plötu |
| Stífur | Engar | Veldu Engar, 2 (í línu við sálina) eða 4 (líka þvert á hana); sjá hér að neðan |
| Þykkt, hæð stífu | 12, 150 | |
| Dýpt skerfestingar | 0 | Hve langt skerfestingin nær undir plötuna; 0 = engin skerfesting |
| Þykkt, breidd skerfestingar | 25, 150 | |
| Plötuskífur | Engar | Á hverri stöng, eða engar |
| Stærð, þykkt skífu | 0, 0 | 0 = lágmarkið úr AISC Design Guide 1 fyrir stöngina |

Lengd stangar = innfesting + bil fyrir fyllingu + þykkt plötu + útstandandi hluti. Með sjálfgefnum gildum er hún 575 mm.

## Nánar um undirplötu: fylling, stífur, skerfesting, skífur

Öll fjögur eru óvirk á nýrri undirplötu og á undirplötum úr líkönum sem gerð voru áður en DetailCraft 0.4 kom út.

- **Bil fyrir fyllingu.** Platan situr þetta hátt yfir efri hlið steypu og stangirnar lengjast um það. AISC Design Guide 1 (2.10) mælir með 1 in. á fullgerðu gólfi og 1½ til 2 in. á undirstöðu eða stólpa; meira fyrir stórar plötur og plötur með skerfestingu.
- **Stífur.** Lóðréttar plötur soðnar við súluna og plötuna, frá yfirborði súlunnar út að brún plötunnar, sem rétthyrningar (engin skábrún eða mjókkun enn sem komið er). **2** standa í línu við sálina, utan við hvorn flans; **4** bæta við tveimur þvert á sálina, á milli flansanna, út að hliðum plötunnar. Á rörsúlu standa þær á miðju hverrar hliðar. Hver er soðin við súluna og plötuna báðum megin.
- **Skerfesting.** Plata soðin allan hringinn undir undirplötunni, í línu við dýpt súlunnar, miðjuð. DetailCraft varar við ef hún er ekki dýpri en bil fyrir fyllingu. Hún sker ekki vasann í undirstöðunni; af þeirri ástæðu sleppir [árekstrarprófuninni](topic:clash-check) skerfestingunni og undirstöðunni.
- **Plötuskífur.** Ferhyrnd plötuskífa á hverri stöng, situr á undirplötunni, skráð í samsetningu súlunnar sem laus (fylgir súlunni, ekki soðin: Design Guide 1, 2.6). Með stærð og þykkt 0 tekur DetailCraft lágmarksskífuna úr AISC Design Guide 1, 2. útgáfu, töflu 2.3 fyrir stöngina; metrísk stöng fær næstu tommustærð upp (M20 stöng fær röðina 7/8 in.: 2½ in. × 5/16 in.). Eiginleikagluggi sýnir stærðina sem notuð er. Gat skífunnar er þvermál stangar + 1/16 in.: það er val DetailCraft, taflan gefur ekki gildi. DetailCraft varar við þegar stangirnar kunna ekki að standa nógu langt út fyrir skífuna og rær (útstandandi hluti minni en þykkt skífu + þvermál stangar).

Tafla 2.3 í Design Guide 1 mælir einnig með gatinu fyrir stöngina í plötunni: 1-5/16 in. fyrir ¾ in. stöng, 1-9/16 in. fyrir ⅞ in., 1-13/16 in. fyrir 1 in. DetailCraft breytir ekki stærð gatsins hjá þér.

Viðvaranir birtast líka þegar stangagöt eru nær brún plötunnar en 1.2 × þvermál göts, þegar stangirnar lenda innan útlínu súlunnar eða þegar platan er minni en súlan.

## Afrita á svipaðar súlur

1. Veldu undirplötuna.
2. Veldu {{ui:Beita á svipaðar (n)}}, eða {{ui:Svipað}} í valmyndinni {{ui:Meira}} í hópnum {{ui:Tengja}}.
3. Sérhver lóðrétt súla með sama snið sem hefur enga undirplötu og stendur ekki ofan á annarri súlu fær afrit.

## Undirplötur og undirstöður

Undirplata þarf ekki undirstöðu, og undirstaða veit ekki af undirplötunni fyrir ofan: akkerisstangirnar eru ekki tengdar við járn undirstöðunnar. Settu undirstöður með {{ui:Undirstaða}}; sjá [Staðsetja undirstöður með steypustyrktarjárni](topic:footings-and-rebar).
