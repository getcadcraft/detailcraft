---
title: Vältliited
summary: Ühenda kaks nurga all kohtuvat I-profiili liiget: mõlemad otsad on lõigatud tasandil, mis poolitab nurga, koos otsaplaatide, poltide ja jäikendusribidega, kui soovid.
keywords: vältliide, nurgaühendus, vältliite, põlv, sarikas, portaalraam, hari, nurk, nurklõige, kaldlõige, otsaplaat, poldiga otsaplaat, jäikendusribi, ühenda
from: cd8380d4
---

Vältliide ühendab kaks I-profiili liiget, mille otsad kohtuvad nurga all, näiteks portaalraami põlve, hari või kaks tala, mis pööravad nurga plaanil. DetailCraft lõikab mõlemad otsad tasandil, mis poolitab nende vahelise nurga, nii et kaks lõikepinda sobivad kokku. Kui soovid, lisab ta iga lõigatud otsa külge otsaplaadi, ühendab kaks plaati poltidega ja paneb kummagi liikme sisse paari jäikendusribisid.

## Kus see töötab

- Kaks **I-profiili** (IPE, HEA, HEB, W jms), mille **otsad kohtuvad samal sõlmel**. Kumbki liige võib olla joonistatud kummaski suunas.
- Liikmete vaheline nurk peab olema vähemalt 15°. Ühel sirgel olevad liikmed lükatakse tagasi: kasuta [liitekohta](topic:splices).
- Lihtne lõige (ilma plaatideta) töötab sõltumata sellest, kuidas liikmed kohtuvad. **Otsaplaadid** nõuavad, et kaks liiget kohtuksid oma võrkude tasandil, nagu portaalpõlves või harjas. Kaks tala, mis pööravad plaanil nurga, kohtuvad oma ääriste tasandil, seega saavad nad ainult lihtsa lõike.
- Erineva suurusega liikmeid ühendatakse, kuid hoiatusega: nende lõikepinnad ei sobi kokku.

## Vältliite lisamine

1. Vali kaks liiget: klõpsa ühele, seejärel {{key:Shift}}+klõps teisele.
2. Vali grupi {{ui:Ühenda}} menüüst {{ui:Veel}} {{ui:Vältliide}}. Avaneb Vältliide-dialoog.
3. Määra nummerdatud väljad. Joonis nende kõrval tehakse sinu numbritest, kui tipid, ja selle nummerdatud ringid näitavad, mida iga väli seab.
4. Vali {{ui:Lisa nurgaühendus}}. Kui valisid rohkem kui kaks liiget, saab iga vaba liitekoht nende vahel sama vältliite.

Vältliidet saad hiljem muuta: vali see (klõpsa ühele selle plaadile) ja vali parempoolsel paneelil {{ui:Nurgaühenduse dialoog eelvaatega}}, või muuda seadeid seal otse. Lihtsal lõikel plaate ei ole, mida klõpsata: vali selle kaks liiget ja vali {{ui:Vältliide}} uuesti, siis avaneb dialoog just selle vältliitega. {{ui:Rakenda sarnastele (n)}} kopeerib selle igale vabale liitekohale kahe sama profiili ja sama nurga all olevate liikmete vahel.

## Nummerdatud väljad (mm)

| Nr | Seade | Vaikimisi | Mida teeb |
|---|---|---|---|
| 1 | Vahe plaatide vahel (või lõigatud otste vahel) | 0 | Selge vahe liitekohal. Iga pool jätab sellest poole |
| 2 | Otsaplaadid, plaadi paksus | sees, 20 | Otsaplaat, mis on keevitatud kogu ümbert igale lõigatud otsale. Lihtsa lõike jaoks eemalda linnuke |
| 3 | Poldirida, rea samm, rööpvahe, välimine rida | 4, 0, 0, väljas | Samm 0 jaotab read ühtlaselt ääriste vahel. Rööpvahe 0 = poole plaadi laiusest, vähemalt 2,4 × auk. Välimine rida läheb plaadi pikendusse välimise äärise taha |
| 4 | Plaat välimise äärise taha | 0 | Kui kaugele plaadid ulatuvad välimise äärise taha, mööda lõiget |
| 5 | Plaat sisemise äärise taha | 0 | Sama sisemisel küljel |
| 6 | Võrgu jäikendusribid, kaugus lõike taha | väljas, 50 | Paar kummaski liikmes, võrgu mõlemal küljel, liikmega ristuvalt, nii kaugel tema lõike kaugemast otsast |
| 7 | Jäikendusribi paksus | 10 | |

Jaotises {{ui:Poldid}}: poldi läbimõõt, auk, klass ja pikkusvaru (20, 22, A325, 30), nagu otsaplaatide puhul. Jaotises {{ui:Plaadid ja keevised}}: plaadi laius (0 = äärise laius), nurkkeevise suurus (8) ja plaadi materjal (A36).

## Mida saad

- **Lõiked.** Iga liikme ots lõigatakse tema tasandil. Selle pikkus nimekirjades, jooniseil ja NC-failides on **üldpikkus**, ristkülikukujulisest otsast kõige kaugema lõike punktini.
- **Plaadid** kuuluvad oma liikmele: iga liikme koost on liige, selle otsaplaat ja jäikendusribid. Poldid on liitekoha ehituspoldid: materjalinimekiri loeb need üks kord ja iga liikme koostejoonis loetleb need lahtiste poltidena.
- **Joonised** näitavad kaldus otsi ja plaate; vältliitega liikme tootmisjoonis märgib iga lõike nurga ruudust kõrvalekaldena.
- **NC-failid** (DSTV) kannavad lõike nurki päises, nagu standard nõuab, ja kontuure, mis järgivad lõiget. Kontrolli neid oma töökoja NC-vaaturis enne lõikamist, nagu iga NC-faili puhul.
- **IFC** lõikab iga liikme ekstrusiooni tema lõiketasandiga, nii et teised programmid näitavad tõelist lõiget.
- **Märgised:** vältliitega liige on teistsugune tükk kui samapikkune ruudu lõikega liige. Kaks liiget samade lõigetega jagavad märgist, nagu harja kaks sarikat.

## Hea teada

- Vältliide jääb elavaks. Liiguta või muuda kumbagi liiget ja lõige, plaadid ning poldid järgnevad. Kustuta kumbki liige ja vältliide kaob, teise liikme ots on jälle ruudus.
- Hoiatused kasutavad samu EN 1993-1-8 miinimume nagu teised liitmikud (ots- ja servakaugus 1,2 × auk, samm 2,2 × auk, rööpvahe 2,4 × auk), lisaks poldiread, mis on äärisele liiga lähedal, plaadid, mis on äärisest kitsamad, ja jäikendusribid, millel pole ruumi.
- Väärtused on algväärtused, mitte projekt. DetailCraft ei kontrolli liitmiku tugevust, ei tee põlveõlgu, ei tee keevitatud vältliidet otsvuugiga ega jäikendusribe, mis on joondatud teise liikme äärisega.
