---
title: Diagonaaltoe sõlmeplaadid
summary: Ühenda diagonaaltoe ots posti või talaga sõlmeplaadi abil: nurkraud ja lame riba poltides, toru pesatud ja keevitatud.
keywords: sõlmeplaat, gusset, diagonaal, diagonaaltugi, vertikaalne diagonaaltugi, nurkraud, lame riba, rihm, HSS-diagonaal, noateraplaat, pesatud toru, ühenda
from: 22f6598d
---

Diagonaaltoe sõlmeplaat on tehases keevitatud plaat posti (või tala) küljes, millele diagonaal toetub, diagonaali tasandis. DetailCraft lühendab diagonaali nii, et see ei puutu ühenduses millegagi, asetab sõlmeplaadi ja määrab selle mõõdud ning ühendab diagonaali sellega: **nurkraud** või **lame riba** ühe poltirea abil, või **toru** (ruut-, ristkülik- või ümar-HSS), mis on sõlmeplaadi peale pesatud ja keevitatud.

## Kus see töötab

- Diagonaali ots asub posti või tala joonel (1 mm täpsusega) ning diagonaal ei ole sellele joonele peaaegu paralleelne. Kui on post, on toeks post; muidu tala.
- Sõlmeplaat asub diagonaali ja toe joone tasandis. **Nurkraua** üks tiib peab olema selles tasandis ja **lame riba** oma pinnaga: pööra diagonaali (selle {{ui:Pööre (°)}}), kuni see nii on. Kui nurkraua tiivad on tasandi suhtes 45°, teatab DetailCraft sellest ega ehita midagi.
- I-profiile ja U-profiile diagonaalina ei ühendata.

## Sõlmeplaatide lisamine

1. Vali üks või mitu diagonaali.
2. Vali rühma {{ui:Ühenda}} menüüst {{ui:Veel}} käsk {{ui:Sõlmeplaat}}.
3. Iga valitud diagonaali ots, mis toetub postile või talale ja millel ei ole sõlmeplaati, saab sõlmeplaadi.

Sõlmeplaadi seadete muutmiseks vali see (klõpsa plaadil). {{ui:Rakenda sarnastele (n)}} kopeerib selle igale vabale diagonaaliotsale, millel on sama diagonaali- ja toeprofiil.

## Mida DetailCraft arvutab

- **Lühendamine.** Diagonaali lühendatakse selles otsas, kuni tema nurgad on vabad: {{ui:Diagonaaltoe vaba ruum}} (25) ulatuses kõigist ühenduse elementidest (kõrvalt või, kui element selles lõpeb, selle otsast) ja posti all olevast aluseplaadist.
- **Poldid (nurkraud, lame riba).** {{ui:Poldid}} (3) ühel real mööda diagonaali, esimene {{ui:Poltide otsakaugus}} (40) lõigatud otsast, {{ui:Poltide samm}} (75) kaugusel. Nurkraua korral läbivad need tiiba, mis on sõlmeplaadi tasandis, {{ui:Poltide vahe}} kaugusel kannast (0 = tiiva keskel); lame riba korral on need selle keskjoonel (või sellest vahe võrra kõrvale nihutatud). Poldi haardepikkus = tiib või lame riba + sõlmeplaat.
- **Sõlmeplaat.** Ristkülik: toe pinnalt välja, üle viimase polti otsakauguse võrra, ja mööda toetist niipalju, kui poltidel vaja on. See asetub nurkraua tiiva taha (või lame riba pinnale). Toru korral läheb see toru keskelt läbi, {{ui:Toru ülekate ühendusplaadil}} (200) ulatuses toru sees, koos keevisõmbluste ruumiga.
- **Ühendused.** Posti aluses viiakse sõlmeplaat alla aluseplaadile. Kui ühenduses ristub tala (diagonaal üles tala ja posti nurka), jääb sõlmeplaat tala alla või peale. Kui see jätab poldid või ülekatte ilma otsakauguseta, hoiatab DetailCraft.
- **Keevised.** Sõlmeplaat toetisele mõlemalt poolt. Toru sõlmeplaadile, neli joont mööda ülekatet.

## Hea teada

- Sõlmeplaat kuulub toe koostesse (tehases keevitatud). Diagonaal tuleb tarnele aukudega puuritult ja läheb oma NC-faili.
- Toru pesa ei lõigata mudelisse; [kokkupõrkekontroll](topic:clash-check) jätab diagonaali ja selle sõlmeplaadi kõrvale.
- Sõlmeplaati ei keevitata tala külge, millega see puutub, ning nurgasõlmeplaate, mis on keevitatud nii talale kui postile, faasitud nurki ega Uniform Force Method ühenduse tööpunkti paigutust ei tehta veel.
- DetailCraft ei projekteeri sõlmeplaati ega polte (tugevust ei kontrollita); hoiatused puudutavad vahesid ja sobivust.
