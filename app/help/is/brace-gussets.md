---
title: Kjálkaplötur fyrir skástífur
summary: Tengja enda skástífu við súlu eða bita með kjálkaplötu: hornjárn og flatjárn boltuð, rör rauf og soðin.
keywords: kjálkaplata, gusset, gusset plate, skástífa, brace, lóðrétt stífing, hornjárn, flatjárn, ól, strap, HSS-skástífa, hnífplata, raufað rör, tengja
from: 22f6598d
---

Kjálkaplata fyrir skástífu er plata sem er soðin í verksmiðju við súluna (eða bitann) sem skástífan lendir á, í plani skástífunnar. DetailCraft sker skástífuna til baka frá öllu í samskeytinu, staðsetur og stærðarákvarðar kjálkaplötuna og tengir skástífuna við hana: **hornjárn** eða **flatjárn** með einni boltaröð, eða **rör** (ferkantað, rétthyrnt eða kringlótt HSS) sem er rennt yfir kjálkaplötuna og soðið.

## Hvar hún virkar

- Endi skástífunnar liggur á línu súlu eða bita (innan 1 mm), og skástífan er ekki nærri samsíða þeirri línu. Súla er stuðningurinn þar sem hún er til staðar; annars bitinn.
- Kjálkaplatan liggur í plani skástífunnar og línu stuðningsins. **Hornjárn** verður að hafa annan legg í þessu plani, og **flatjárn** flötinn sinn: snúðu skástífunni ({{ui:Snúningur (°)}}) þar til það á við. Ef leggir hornjárnsins eru í 45° við planið segir DetailCraft það og smíðar ekkert.
- I-prófílar og U-prófílar sem skástífur eru ekki tengdir.

## Bæta við kjálkaplötum

1. Veldu eina eða fleiri skástífur.
2. Veldu {{ui:Kjálkaplata}} í valmyndinni {{ui:Meira}} í hópnum {{ui:Tengja}}.
3. Sérhver endi valinna skástífa sem lendir á súlu eða bita og hefur enga kjálkaplötu fær eina.

Veldu kjálkaplötu (smelltu á plötuna) til að breyta stillingum hennar. {{ui:Beita á svipaðar (n)}} afritar hana á hvern laus enda skástífu með sömu snið skástífu og stuðnings.

## Það sem DetailCraft reiknar út

- **Skorið til baka.** Skástífan er stytt við þann enda þar til hornin hreinsast, um {{ui:Bil skástífu}} (25), frá hverjum lið í samskeytinu (við hliðina á henni, eða handan enda hennar þegar liðurinn endar þar) og undirplötu undir súlunni.
- **Boltar (hornjárn, flatjárn).** {{ui:Boltar}} (3) í einni röð eftir skástífunni, sá fyrsti {{ui:Fjarlægð bolta að enda}} (40) frá skurðendanum, með {{ui:Bil milli bolta}} (75). Á hornjárni fara þeir í gegnum legginn í plani kjálkaplötunnar, {{ui:Boltabil}} frá hælnum (0 = miðja legginn); á flatjárni á miðlínu þess (eða frá henni um boltabilið). Spennulengd boltans = leggurinn eða flatjárnið + kjálkaplatan.
- **Kjálkaplatan.** Rétthyrningur: frá yfirborði stuðningsins út fyrir síðasta bolta um fjarlægðina að enda, og eftir stuðningnum eins langt og boltarnir þurfa. Hún liggur að baki legg hornjárnsins (eða að fleti flatjárnsins). Fyrir rör gengur hún í gegnum miðju rörsins, undir {{ui:Yfirlögn rörs á kjálkaplötu}} (200) af rörinu, með plássi fyrir suðurnar.
- **Samskeyti.** Við fót súlu er kjálkaplatan dregin niður á undirplötuna. Þar sem bitur þverar samskeytið (skástífa upp í horn bita og súlu) er kjálkaplatan áfram undir eða yfir bitanum. Ef boltarnir eða yfirlögnin missa fjarlægðina að enda við það varar DetailCraft við.
- **Suður.** Kjálkaplatan við stuðninginn, báðum megin. Rör við kjálkaplötuna, fjórar línur eftir yfirlögninni.

## Gott að vita

- Kjálkaplatan tilheyrir samsetningu stuðningsins (soðin í verksmiðju). Skástífan fer frá verksmiðjunni með boruðum götum og fer í sína eigin NC-skrá.
- Rauf rörsins er ekki skorin í líkaninu; [árekstrarprófunin](topic:clash-check) sleppir skástífunni og kjálkaplötunni hennar.
- Kjálkaplatan er ekki soðin við bita sem hún snertir, og hornkjálkaplötur soðnar bæði við bita og súlu, skáskorin horn og vinnupunktaskipan Uniform Force Method-tengingar eru ekki gerð enn.
- DetailCraft hannar ekki kjálkaplötuna né boltana (engar styrkleikaathuganir); viðvaranirnar snúa að bilum og passun.
