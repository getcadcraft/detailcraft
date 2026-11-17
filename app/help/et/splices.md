---
title: Skarvid
summary: Ühenda kaks talla- või postiotsa otsast otsa, kinnitades flensi- ja võrguplaadid poltidega.
keywords: skarv, talaskarv, postiskarv, katteplaat, skarviplaat, flensiplaat, võrguplaat, poltühendus, liide, tõstmine, ühenda
from: 97d141c2
---

Poltidega skarv ühendab kaks ühe I-profiili tükki otsast otsa: iga flensi välisküljel on katteplaat ja võrgu mõlemal küljel plaat, mis on poltidega läbi mõlema tüki kinnitatud. DetailCraft lõikab tükid vahe ulatuses tagasi, paigutab neli plaati, puurib augud plaatidesse ja mõlemasse tükki, lisab poldid ning hoiatab servakauguste, sammu ja sobivuse kohta.

## Kus see toimib

- Kaks talla või kaks postitõstu sama **I-profiiliga**, mis ühinevad otsast otsa **ühel joonel**: otste vahe on kuni 50 mm, tükid on paralleelsed ja ühel joonel (1 mm täpsusega). Kumbki tükk võib olla joonistatud mis tahes suunas.
- Tasased, kaldus ja vertikaalsed tükid kõik sobivad.
- Erineva kõrguse või flensilaiusega tükke ei lubata, samuti ei lubata kanaleid, nurki ja torusid.

## Skarvide lisamine

1. Joonista kaks tükki nii, et need ühinevad otsast otsa. Juba joonistatud elemendi jagamiseks joonista see uuesti kahe tükina.
2. Vali üks (või mõlemad) ja vali rühma {{ui:Ühenda}} menüüst {{ui:Veel}} käsk {{ui:Skarv}}.
3. Iga valitud tükkide vaba liide teise sama profiiliga tükiga saab skarvi. Olekuribal on öeldud, mitu neid on.

Skarvi seadete muutmiseks vali see (klõpsa ühele selle plaatidest) parempoolsel paneelil. {{ui:Rakenda sarnastele (n)}} kopeerib skarvi igale teisele vabale liitekohale sama profiiliga tükkide vahel.

## Seaded (mm)

| Seade | Vaikimisi | Mida see teeb |
|---|---|---|
| Vahe otste vahel | 10 | Iga tükk lõigatakse poole sellest tagasi |
| Poldi läbimõõt, auk, klass, pikkusvaru | 20, 22, A325, 30 | Nagu otsaplaatidel |
| Flensiplaadi paksus | 12 | Plaat on sama lai kui flens |
| Flensipoltide read (kummalgi pool) | 3 | Read üle flensi liite kummalgi pool |
| Flensipoltide samm | 75 | Mööda elementi |
| Flensipoltide vahe | 0 | Kahe poldijoone vahel; 0 = flensi laius miinus 80 |
| Flensi servakaugus | 40 | Elemendi otsast esimese poldini ja viimasest poldist plaadi otsani |
| Võrguplaadi paksus | 8 | Üks võrgu kummalgi pool |
| Võrgupoltide read | 3 | Üles mööda võrku, keskel |
| Võrgupoltide veerud (kummalgi pool) | 2 | Mööda elementi liite kummalgi pool |
| Võrgupoltide samm, üles võrgus / mööda elementi | 75, 75 | |
| Võrgu servakaugus | 40 | Nagu flenssidel |
| Võrguplaadi kõrgus | 0 | 0 = puhas võrk sisemiste ümardustega miinus 10 ülal ja all |
| Plaadi materjal | A36 | Tekst |

Plaatide pikkus tuleneb poltidest: flensiplaat = vahe + 2 × (2 × servakaugus + (read − 1) × samm); võrguplaadid samamoodi oma veergudega. Vaikeseadetega on flensiplaadid 470 pikad.

## Hea teada

- Plaadid kuuluvad **esimesena joonistatud tükile** (selle omadustes nimetatakse seda esimeseks tükiks): need on näidatud selle koostejoonisel ja tarnitakse koos sellega, poltidega, mitte keevitatult. Teise tüki koostejoonisel on näha ainult selle augud.
- Flensipoldid haaravad flensi ja selle plaadi; võrgupoldid haaravad võrku ja mõlemat võrguplaati. Poltide pikkused on omadustes eraldi loetletud.
- Hoiatused kasutavad samu EN 1993-1-8 miinimumtingimusi nagu teised liited (ots ja servakaugus 1,2 × auk, samm 2,2 × auk pikkuses ja 2,4 × auk laiuses), lisaks hoiatus võrguplaadi kohta, mis on sügavam kui vaba võrk, ja flensipoltide kohta, mis on sisemise ümarduse jaoks võrgule liiga lähedal.
- DetailCraft ei projekteeri skarvi (tugevust ei kontrollita) ega tee täiteplaate eri paksusega tükkide jaoks.
- Mõlema tüki kopeerimisel kopeeritakse ka nende skarv; kummagi tüki kustutamisel kustub ka skarv.
