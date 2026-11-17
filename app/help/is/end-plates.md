---
title: Tengja bita við súlur með endaplötum
summary: Bættu boltuðum endaplötum við þar sem bitinn mætir flans eða vef súlu, stilltu plötuna, boltana og suðuna, og afritaðu tenginguna í öll svipuð samskeyti.
keywords: endaplata, endaplötur, stíf tenging, boltuð tenging, samskeyti, boltar, suða, framlengd endaplata, í sléttu, svipuð, afrita tengingu, íhlutur
from: 21e028b2
---

Endaplötutenging suðar plötu við enda bitans og boltar hana við súluflans eða vef. DetailCraft staðsetur plötuna, sker bitann til baka, borar samsvarandi göt í plötuna og súluflansinn, bætir við boltunum og suðunni, og athugar fjarlægð að brúnum og bil.

:::warning
DetailCraft hannar ekki tengingar. Stillingarnar eru upphafsgildi sem þú breytir; ekkert athugar styrk. Viðvaranir um brúnir og bil nota lágmörkin úr EN 1993-1-8 töflu 3.3, sem geta verið frábrugðin reglunum sem þú vinnur eftir.
:::

## Hvað hún getur tengt

- Láréttan bita (báðir endar í sömu hæð), uppréttan (snúningur 0), með I-lögunarprófíl.
- Inn í **flans** eða **vef** á **lóðréttri** I-lögunarsúlu, hornrétt á hana.
- Endi bitans verður að liggja á línu súlunnar, milli botns og topps súlunnar.

Skáir eða hallandi bitar og hlutar sem eru ekki I-lögun er hafnað með ástæðu: notaðu [skerflipa](topic:shear-tabs) fyrir þá. Á vef verða plata og bitaflansar að passa milli súluflansanna; DetailCraft varar þig við ef þeir gera það ekki.

:::tip
Við snúning 0 snúa flansar súlu meðfram tölusetta ásnum (x). Bitinn sem liggur frá A til B mætir vefnum og fær endaplötu á vefinn.
:::

## Bæta endaplötum við bita

1. Veldu {{ui:Velja}} ({{key:V}}) og smelltu á bitann.
2. Veldu {{ui:Endaplötur}} í hópnum {{ui:Tengja}}, eða {{ui:Bæta við endaplötum}} í spjaldinu {{ui:Eiginleikar}}.
3. Sérhver laus endi bitans sem mætir súluflans eða vef hornrétt fær plötu. Stöðustikan segir „2 endaplötum bætt við. Veldu eina til að breyta plötu, boltum og suðu hennar; {{ui:Svipað}} afritar hana í svipuð samskeyti.“
4. Fyrsta nýja endaplatan er valin og stillingar hennar eru í spjaldinu {{ui:Eiginleikar}}.

Ef ekkert gerist, lestu stöðustikuna:

- „Þessi bita endar ekki á súlulínu. Endaplötur fara þar sem endi bita mætir lóðréttri súlu.“
- „Þessi bita mætir súlu í horni eða hallar: endaplötur eru gerðar fyrir hornrétt, lárétt samskeyti. Notaðu Skerflipa.“
- „Báðir endar hafa þegar tengingar.“

## Breyta plötu, boltum og suðu

Smelltu á endaplötuna (eða einn af boltum hennar) til að velja tenginguna. Undir {{ui:Plata, boltar og suða (mm)}}:

| Stilling | Sjálfgefið | Hvað hún gerir |
|---|---|---|
| Þykkt plötu | 20 | Þykkt plötunnar; einnig hversu langt bitinn er skorinn til baka framhjá flansinum |
| Breidd plötu | 180 | Þvert yfir samskeytin |
| Framlenging fyrir ofan bita | 0 | Fyrir ofan efri flansinn; yfir 0 gerir framlengda endaplötu |
| Framlenging fyrir neðan bita | 0 | Fyrir neðan neðri flansinn |
| Þvermál bolta | 20 | Nafnstærð bolta |
| Þvermál gats | 22 | Þitt hreinsibil í plötunni og súluflansinum |
| Gæði bolta | A325 | Texti; prentaður í efnislistanum |
| Raðir bolta | 4 | Raðir af tveimur boltum, miðjaðar á hæð plötunnar |
| Bil milli raða | 75 | Lóðrétt bil milli raða |
| Bil í röð | 100 | Lárétt bil milli boltanna tveggja í röð |
| Aukarými fyrir bolta | 30 | Bætt við gripið fyrir róna, skífu og gengju; sjá að neðan |
| Stærð hornsuðu | 8 | Allan hringinn um endann á bitanum |
| Efni plötu | A36 | Texti |

Sláðu inn nýtt gildi og ýttu á {{key:Enter}} eða {{key:Tab}}. Platan, götin, boltarnir og skurðarlengd bitans uppfærast strax. Hver breyting er eitt skref í afturköllun.

Undir stillingunum sérðu hvað tengingin býr til:

- {{ui:Boltar}}: til dæmis „8 × 20 × 70 A325 (grip 36.2)“.
- {{ui:Suða}}: stærð, staðsetning og lengd hennar.
- {{ui:Plata}}: stærð hennar og hlutamerki.

### Hvernig tölurnar eru reiknaðar

- Bitinn er skorinn til baka um hálfa dýpt súlunnar (á vef: hálfa þykkt vefsins) auk þykktar plötunnar, svo platan sitji á yfirborðinu.
- Hæð plötunnar er dýpt bitans auk framlenginganna tveggja.
- Lengd bolta = grip (þykkt plötu + þykkt súluflans eða vefs) + aukarými, námundað upp í næsta 5 mm.
- Sýnd suðulengd er ummál bitahlutans.

### Viðvaranir

Tengingin er samt smíðuð, en þessar birtast undir henni og í flipanum {{ui:Vandamál}}:

- Raðir bolta eða boltar nær brún plötunnar en 1.2 × þvermál gats.
- Bil milli raða undir 2.2 × þvermál gats, eða bil í röð undir 2.4 × þvermál gats.
- Göt sem ganga inn í súluvefinn eða radíus hans, eða út af súluflansinum.
- Plata breiðari en súluflansinn, eða (á vef) breiðari en bilið milli flansanna; bitaflansar sem passa ekki milli þeirra.
- Boltaröð of nálægt bitaflans, eða bil í röð of þétt fyrir bitavefinn og suðu hans.

## Afrita í öll svipuð samskeyti

1. Veldu tenginguna sem þú hefur stillt.
2. Veldu {{ui:Nota á svipaða (n)}} í spjaldinu {{ui:Eiginleikar}}, eða {{ui:Svipað}} í valmyndinni {{ui:Meira}} í hópnum {{ui:Tengja}}. Talan í svigunum er hversu mörg samskeyti fá hana.
3. Sérhvert samskeyti með sama bitaprófíl og súluprófíl, bita inn í sömu tegund flatar, sem hefur enga tengingu, fær afrit með sömu stillingum. Stöðustikan segir hversu mörg.

Afritin eru óháð: að breyta einu seinna breytir ekki hinum. Samskeyti sem hafa þegar tengingu eru látin í friði; eyddu þeim fyrst ef þú vilt skipta þeim út.

## Færa og eyða

Tengingar eru endurgerðar úr stillingum sínum í hvert skipti sem líkanið breytist, þannig að færsla eða stærðarbreyting á bita eða súlu tekur endaplöturnar með sér. Ef breyting gerir það að verkum að samskeytið passar ekki lengur, verður tengingin eftir í líkaninu og flipinn {{ui:Vandamál}} segir af hverju, til dæmis „Endi bitans er ekki lengur á súlulínunni.“

Til að eyða tengingu, veldu hana og ýttu á {{key:Delete}}. Með því að eyða bitanum eða súlunni eyðast tengingar hans líka.

Næst: [Bæta við undirstöðuplötum og akkerisstöngum](topic:base-plates).
