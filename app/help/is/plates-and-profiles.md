---
title: Staðsettu plötur og bættu við sérsniðnum sniðum
summary: Staðsettu lausar plötur eftir þykkt og breidd, og skilgreindu þín eigin I-, rásar-, horn-, rörs- eða flatjárnssnið.
keywords: plata, flatjárn, sérsniðið snið, notendasnið, breytustýrt, hluti, lögun, þversnið, pl
from: c24c3b51
---

## Staðsetja plötu

Plata er staðsett eins og biti: hún liggur milli tveggja skurðpunkta, með breiddina þvert og þykktina upp.

1. Veldu {{ui:Plata}} í hópnum {{ui:Staðsetja}}, eða ýttu á {{key:P}}.
2. Í spjaldinu {{ui:Eiginleikar}} stillir þú {{ui:Þykkt (mm)}} og {{ui:Breidd (mm)}}. Sjálfgefið er 20 x 200 úr A36.
3. Stilltu {{ui:Efni}} og {{ui:Snúningur (°)}} ef þarf. Snúningur upp á 90 stendur plötuna á kant.
4. Smelltu á tvo skurðpunkta, eða notaðu {{ui:Bæta við eftir ás}}-formið.

Heiti sniðs plötunnar er skrifað `PL<thickness>x<width>`, til dæmis PL20x200. Lengd hennar er fjarlægðin milli punktanna tveggja.

Til að breyta stærð staðsettrar plötu, veldu hana og breyttu {{ui:Þykkt (mm)}} eða {{ui:Breidd (mm)}}.

Plötur sem þú staðsetur eru hlutar út af fyrir sig (auðkenni p, samsetning P). Endaplötur og undirplötur sem tengingar búa til eru líka plötur, en þú breytir þeim í gegnum tenginguna sína; sjá [Endaplötur](topic:end-plates).

## Bæta við sérsniðnu sniði

Þegar sniðið sem þú þarft er ekki í skránni, búðu það til út frá málunum. Sérsniðið snið tilheyrir líkaninu og er vistað með því. Til að nota það í hverju nýju líkani, geymdu það í {{ui:Mínir prófílar}}, lýst undir „Geymdu snið fyrir ný líkön“ hér að neðan.

1. Í spjaldinu {{ui:Líkan}} vinstra megin, opnaðu {{ui:Sérsnið}}.
2. Sláðu inn {{ui:Heiti}}, til dæmis `W8x18-custom` eða `RHS 120x80x5`. Það getur ekki verið heiti úr sniðskránni og má ekki líkjast heiti plötu.
3. Veldu {{ui:Lögun}}: {{ui:I-snið}}, {{ui:Rás}}, {{ui:Jafnhliða horn}}, {{ui:Ferhyrnt rör}}, {{ui:Kringlótt rör}} eða {{ui:Flatjárn}}.
4. Fylltu inn málin sem birtast, öll í millimetrum:

| Lögun | Mál |
|---|---|
| I-snið | Hæð d, breidd flans bf, þykkt sálar tw, þykkt flans tf, sveigjuradíus r (má vera 0) |
| Rás | Hæð d, breidd flans bf, þykkt sálar tw, þykkt flans tf (ferkantuð horn) |
| Jafnhliða horn | Breidd b (hvors fótar), þykkt t |
| Ferhyrnt rör | Hæð h, breidd b, þykkt t (ytri hornradíus 2t) |
| Kringlótt rör | Þvermál D, þykkt t |
| Flatjárn | Breidd b, þykkt t |

5. Láttu {{ui:Geyma í Mínum prófílum}} vera hakað til að hafa það í hverju nýju líkani (sjá hér að neðan), eða afhakaðu það til að geyma það aðeins í þessu líkani.
6. Veldu {{ui:Bæta við sniði}}.

Stöðustikan segir: „Snið „…“ bætt við; það er í öllum sniðalistum undir Sérsnið.“ Það birtist í listanum undir eyðublaðinu og aftast í öllum {{ui:Snið}}-listum.

DetailCraft athugar hvort sniðið geti verið til. Þú sérð skilaboð eins og „Sálin og flansarnir passa ekki innan hæðar og breiddar.“, „Sveigjuradíusinn er of stór fyrir flansinn.“ eða „Veggurinn er of þykkur.“ Lagfærðu tölurnar og veldu {{ui:Bæta við sniði}} aftur.

### Hvað sérsniðin snið fá

- Massi á metra út frá flatarmáli × 7850 kg/m³ (stærðir úr skránni nota birta þyngd í staðinn).
- Sérsniðin I-snið taka við götum, úrtökum, endaplötum, NC-skrám og verkstæðisteikningum eins og I-snið úr skránni.
- Sérsniðin flatjárn haga sér eins og plötur.
- Sérsniðnar rásir og rör taka við götum; horn og kringlótt rör gera það ekki enn.

Ekki er hægt að breyta eða fjarlægja sérsniðið snið úr líkani eftir að það er bætt við (notaðu {{key:Mod+Z}} strax ef þú gerðir mistök). Gefðu leiðréttu sniði nýtt heiti.

## Geymdu snið fyrir ný líkön

{{ui:Mínir prófílar}}, undir eyðublaðinu, er þinn eigin listi yfir sérsniðin snið. Hann er geymdur í þessum vafra, á þessari tölvu, ekki í líkanskrá og ekki á aðgangnum þínum.

- Snið sem er bætt við með {{ui:Geyma í Mínum prófílum}} hakað fer á listann. Sérhvert nýtt líkan, þar með talið það sem DetailCraft opnar þegar þú ræsir það, byrjar með þau öll á sniðalistum sínum.
- Snið sem er þegar í líkani en ekki á listanum er með hnappinn {{ui:Geyma}} við hliðina á sér.
- Í líkani sem hefur ekki eitt af sniðunum þínum (eldri skrá, til dæmis), veldu {{ui:Nota hér}} til að bæta því við.
- {{ui:Fjarlægja}} tekur snið af listanum. Líkön sem nota það nú þegar halda sínu eigin afriti.
- Líkan sem þú opnar heldur sniðunum sem vistuð eru í skránni þess. Að opna skrá breytir aldrei listanum þínum.
- Heiti sem er þegar á listanum með öðrum málum er hafnað: gefðu nýja sniðinu annað heiti.
- Ef þú hreinsar gögn vefsvæða vafrans, eða notar annan vafra eða tölvu, byrjar listinn tómur. Einkagluggi getur ekki geymt hann; forritið segir það.
