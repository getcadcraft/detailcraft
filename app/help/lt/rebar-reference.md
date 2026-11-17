---
title: Armatūros žinynas
summary: Strypų dydžiai, kablių matmenys, formų kodai, pjovimo ilgiai ir lenkimo žiniaraščio stulpeliai, kuriuos DetailCraft naudoja.
keywords: armatūra, strypų dydžiai, kabliukai, lenkimo skersmuo, formų kodai, pjovimo ilgis, lenkimo žiniaraštis, strypų sąrašas, astm a615, aci 318
from: 1583535e
---

## Strypų dydžiai

Pagal ASTM A615/A615M 1 lentelę (colio-svaro žymėjimas). Milimetrai ir kg/m yra tikslūs paskelbtų colių ir svarų ir pėdos verčių perskaičiavimai. Sąrašuose kiekvienas dydis rodomas, pavyzdžiui, kaip „#5 (15.9 mm)“.

| Strypas | Skersmuo (mm) | Masė (kg/m) | Plotas (mm²) | Vidinis lenkimo skersmuo | 90° kablio kojelė, išorė–išorė (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

[DetailCraft parametruose](topic:settings) ({{ui:Armatūra}}) **ASTM strypų pavadinimai** gali rodyti šiuos strypus pagal jų minkštojo metrinio A615M pavadinimus: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (tie patys strypai; ACI 315-99 1 lentelėje pateikiami abu).

### Metriniai strypai (BS 4449)

| Strypas | Skersmuo (mm) | kg/m | Mažiausias lenkimo spindulys r (mm) | Kabliuko kojelė = galo išsikišimas P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Masė yra nominalus skerspjūvis, padaugintas iš 7850 kg/m³. Spindulys ir galo išsikišimas yra BS 8666:2020 mažiausi dydžiai (jos mažiausių matmenų lentelė; buvęs skersmuo yra 2r). Pamatams su BS strypais kabliukų kojelės yra P, o pjovimo ilgiai skaičiuojami pagal toliau pateiktas BS 8666 formules. Pasirinkus europinį plieną parametruose, nauji pamatai pradedami su H16 tinklais ir H20 išsikišančiais strypais betone C30/37.

## Kabliukai

ASTM strypai: standartiniai 90° kabliukai pagal ACI 318-19 25.3.1 lentelę: vidinis lenkimo skersmuo 6 db, kai #3–#8, ir 8 db, kai #9–#11, su tiesiu 12 db ilgio tęsiniu už lenkimo. Kabliuko kojelė, matuojama išorė–išorė, yra pusė lenkimo skersmens + db + 12 db.

Jei tinklo strypo kabliukas netelpa pamato gylyje apsauginio sluoksnio viduje, DetailCraft sutrumpina kojelę, kad tilptų, ir įrašo įspėjimą.

## Formos

DetailCraft saugo tris formas. Lenkimo žiniaraštis jas spausdina kaip DetailCraft kodus, kaip ACI 315 tipus arba kaip BS 8666 formų kodus: [DetailCraft parametruose](topic:settings) ({{ui:Armatūra}}) pasirinkite **Lenkimo žiniaraščio formos kodai**.

| Kodas | Forma | Matmenys |
|---|---|---|
| S | Tiesus | A = ilgis |
| L | Vienas 90° lenkimas | A = pagrindinė kojelė, B = kabliuko kojelė, abi išorė–išorė |
| U | Du 90° lenkimai į tą pačią pusę | A = vidurys, B ir C = dvi kojelės, išorė–išorė |

Tinklo strypai su įjungtu {{ui:End hooks}} yra U, be jo – S. Išsikišantys strypai su įjungtu {{ui:Hook at the bottom}} yra L, be jo – S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (pav. 10) |
|---|---|---|
| S | 00, L = A | be tipo numerio |
| L | 11, L = A + B − 0.5r − d | be tipo numerio: paveikslėlyje nėra strypo su vienu kabliuku |
| U | 21, A ir C – kojelės, B – vidurys: L = A + B + C − r − 2d | 2 tipas, kabliukai A ir G, tiesus B |

Naudojant BS 8666 ar ACI 315 kodus, žiniaraščio stulpeliai A, B ir C atitinka to standarto žymėjimą (U vidurys yra B).

## Pjovimo ilgis

BS 4449 strypams pjovimo ilgis yra BS 8666 formulė pagal strypo formos kodą (aukščiau). ASTM strypams tai tikslus strypo ašies ilgis: tiesios dalys ir lenkimai kaip lankai, kurių spindulys lygus pusei lenkimo skersmens plius pusei strypo skersmens. Jis neskaičiuojamas pagal lenkimo atimčių lentelę, todėl gali skirtis keliais milimetrais nuo žiniaraščio, kuris tokią lentelę naudoja.

## Išdėstymas

- Apatinis tinklas: strypai išilgai L sudaro apatinį sluoksnį, strypai išilgai B guli ant jų. Kiekviena grupė tolygiai paskirstoma per pamatą apsauginio sluoksnio viduje, pagal jūsų nurodytą žingsnį arba tankiau, bet ne mažiau kaip du strypai.
- Išsikišantys strypai: tinklelis iš strypų išilgai L ir išilgai B pagal jūsų nurodytus žingsnius, centruotas pamate, stovintis ant tinklo ir išsikišantis virš viršaus per jūsų nurodytą išsikišimą. Kiekvienas kabliukas nukreiptas į išorę.

## Patikrinimai

| Patikrinimas | Taisyklė | Rezultatas |
|---|---|---|
| Vieta strypams | Apsauginis sluoksnis abiejose pusėse palieka vietos strypams | Atmesta, jei nėra |
| Gylis dviem sluoksniams | Gylis minus du apsauginiai sluoksniai talpina abu tinklo sluoksnius | Atmesta, jei nėra |
| Išsikišantys strypai telpa | Išsikišančių strypų tinklelis telpa apsauginio sluoksnio viduje | Atmesta, jei nėra |
| Laisvas tarpas | Bent didesnis iš 25.4 mm ir db (ACI 318-19 25.2.1; užpildo dydis netikrinamas) | Įspėjimas |
| Kabliuko gylis | Kabliuko kojelė telpa apsauginio sluoksnio viduje esančiame gylyje | Įspėjimas, kojelė sutrumpinta |
| Išsikišančių strypų kabliukai | Kabliukai neįeina į apsauginį sluoksnį | Įspėjimas |

## Lenkimo žiniaraščio stulpeliai

Skirtuke {{ui:Lenkimo žiniaraštis}} ir jos CSV yra šie stulpeliai: Strypo žymė, Dydis, Forma, A (mm), B (mm), C (mm), Kiekis, Pjovimo ilgis (mm), Bendras ilgis (m), kg/m, Vieno svoris (kg), Bendras svoris (kg), Paskirtis. Paskutinėje eilutėje sudedami kiekis, ilgis ir svoris.
