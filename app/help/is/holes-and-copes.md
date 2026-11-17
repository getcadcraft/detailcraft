---
title: Bætið við götum og úrtökum
summary: Sláðu inn göt í veggi, flansa og plötur, og gerðu úrtök í flansa við enda bita, mæld frá skurðenda hlutarins.
keywords: gat, göt, boltagat, úrtak, skarð, skurður, bora, gata, gat í vegg, gat í flans
from: 33d12398
---

Göt og úrtök eru slegin inn eftir staðsetningu. Þau tilheyra stönginni og færast með henni.

Göt sem tengingar (endaplötur, undirstöðuplötur) búa til eru bætt við fyrir þig; þú slærð þau ekki inn. Þau eru skráð sem "… göt úr tengingum (breyttu tengingunni)".

## Hvaðan staðsetningar eru mældar

- **x** liggur eftir hlutanum frá **skurðupphafi** hans: upphafsendanum eftir að tenging hefur skorið hann til baka. Þannig er x = 0 raunverulegi endi stálsins, ekki skurðpunkturinn á netinu.
- **y** er mælt þvert yfir flötinn frá miðju sniðsins:
   - á **veggnum**: upp (jákvætt) eða niður frá miðri dýpt;
   - á **flans** eða **plötu**: þvert yfir breiddina, frá miðlínu.
- Upphaf stangarinnar er fyrsti punkturinn sem þú smelltir á þegar þú settir hana inn. Línurnar {{ui:Endar (x, y, z mm)}} sýna hvor endinn er hvor.

## Bættu við gati

1. Veldu stöngina.
2. Í reitnum {{ui:Göt}} í glugganum {{ui:Eiginleikar}} veldu {{ui:Flötur}}: {{ui:Liv}}, {{ui:Efri flans}} eða {{ui:Neðri flans}} (fyrir I-lögun, rennu eða ferhyrnt rör), eða {{ui:Plötuflötur}} (fyrir plötu).
3. Sláðu inn {{ui:x eftir (mm)}}, {{ui:y þvert (mm)}} og {{ui:Þvermál (mm)}}. Reiturinn byrjar á x 100, y 0, þvermáli 22.
4. Veldu {{ui:Bæta við gati}}.

Stöðustikan segir "Gat bætt við. x er frá skurðupphafi; y frá miðju sniðsins (veggur: upp, flans/plata: þvert)." Gatið birtist á listanum, og í sýninni sem dökkur tappi í gegnum flötinn.

Til að fjarlægja gat, veldu ×-hnappinn við hlið þess á listanum.

:::note
Í þrívíddarsýninni eru göt teiknuð sem dökkir tappar, ekki skorin í gegnum stálið. Þau eru raunveruleg göt í NC-skránum, verkstæðisteikningunum og IFC-útflutningnum.
:::

Hornjárn og kringlótt rör taka ekki göt enn: reiturinn {{ui:Göt}} segir það.

Gat þar sem x er fyrir utan annan hvorn enda hlutarins birtist á flipanum {{ui:Vandamál}} sem "gat er utan við enda hlutarins".

## Bættu við úrtaki

Úrtök eru fyrir I-lögun: þau skera burt efri eða neðri flansinn (og þá dýpt af veggnum) við öðrum enda, svo bitinn komist framhjá annarri stöng.

1. Veldu I-lögunarstöng.
2. Í reitnum {{ui:Úrtök}} veldu {{ui:Endi}} ({{ui:Upphaf}} eða {{ui:Endi}}) og {{ui:Hlið}} ({{ui:Ofan}} eða {{ui:Neðan}}).
3. Sláðu inn {{ui:Lengd (mm)}} (eftir bitanum frá þeim enda) og {{ui:Dýpt (mm)}} (niður frá efri brún, eða upp frá neðri brún). Reiturinn byrjar á 100 x 40.
4. Veldu {{ui:Bæta við úrtaki}}.

Sýnin sýnir úrtakið skorið úr stálinu. Listinn segir til dæmis "Ofan við upphaf: 100 x 40". Fjarlægðu það með ×-inu þess.

Úrtök eru ferhyrnd: það er engin rundun í innra horninu enn.

## Hvernig göt og úrtök hafa áhrif á merki

Tveir hlutar fá sama hlutmerki aðeins ef göt þeirra og úrtök passa innan 1 mm, að teknu tilliti til þess að hlutinn sé snúinn við. Ef gat er bætt við einn bita í hópi fær hann nýtt merki. Sjá [Reglur um merki](topic:mark-rules).
