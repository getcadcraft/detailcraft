---
title: Flytja út KISS-skrá fyrir smíðahugbúnað
summary: Sendu efnislistann til stjórnunarhugbúnaðar smíði (MIS) sem KISS 1.1-skrá: samsetningar, hluta, áfanga sem raðir, göt, úrtök og suðu.
keywords: kiss, kss, mis, stjórnun smíði, framleiðslustýring, kostnaðaráætlun, efnislisti, bom, útflutningur, fabtrol, röð
from: 30cf3951
---

Í hópnum {{ui:Útkoma}} opnarðu {{ui:Meira}} og velur {{ui:KISS-skrá fyrir smíðahugbúnað}}. DetailCraft sækir `<name>.kss`, KISS-skrá („Keep It Simple, Steel“, útgáfa 1.1), venjulegt textasnið sem flest stjórnunarforrit smíði flytja efnislista inn úr.

## Hvað er í henni

- Hausinn: verknúmer (fyrstu átta stafir og tölustafir heiti líkansins), heiti líkansins, dagsetning og tími, og hvort stærðir eru metrískar.
- Fyrir hvert samsetningarmerki: aðalhluti þess (magn = hversu margir af samsetningunni), teikningarlína (A-B1 og svo framvegis, númer samsetningarteikningarinnar), samsetningarlína (heiti, gerð, þyngd, heildarlengd, dýpt og breidd), ein röðlína fyrir hvern [áfanga](topic:phases) sem samsetningin er í, og vinnulínur: göt (hversu mörg, þvermál, þykkt í gegn), úrtök og suður.
- Síðan hver hluti tengdur henni, með **heildarmagni** (á samsetningu × samsetningar), eins og staðallinn krefst.
- Lausir boltar og akkerisstangir á teikningu BOLTS, samsetningu FIELD.
- Hver lína gefur gerðina (W, C, L, HSS, PL, eða MI fyrir sérsnið), stærð, gæðaflokk, skurðarlengd í millimetrum, heiti hluta og þyngd.

## Enskar einingar eða metrar

Í [DetailCraft-stillingum](topic:settings) velur **Stærðir KISS-skráar**:

- **Sjálfvirkt** (upphafsstilling): Imperial þegar hver hluti er AISC-prófíll, annars metrar.
- **Imperial**: prófílar eftir AISC-heiti (W 16X26, HSS 4X4X.250); plötur og boltar, sem DetailCraft geymir í millimetrum, að næsta 1/16 tommu; þyngd í pundum.
- **Metrar**: evrópskir prófílar eftir heiti sínu (IPE300), plötur sem þykkt X breidd í millimetrum; þyngd í kílógrömmum.

Lengdir eru alltaf í millimetrum með tveimur aukastöfum, sama hvaða stilling er: KISS-staðallinn krefst þess og móttökuforritið breytir þeim.

:::note
Gæðaflokkar eru styttir í átta stafi staðalsins: A572 Gr 50 verður A572-50. Kommur í heitum verða bil (sniðið hefur enga tilvitnun). Athugaðu einn innflutning í forritinu þínu áður en þú treystir á hann: KISS-skrár DetailCraft eru prófaðar gegn staðlinum hér, ekki enn í smíðaforriti.
:::
