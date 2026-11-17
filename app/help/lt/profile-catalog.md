---
title: Profilių katalogas
summary: Visi įmontuoti plieno dydžiai, kaip rašomi profilių pavadinimai, iš kur paimami matmenys ir kaip pavadinami plokštės bei pasirinktiniai pjūviai.
keywords: profiliai, pjūviai, katalogas, dydžiai, W formos, plačiadiržis, S formos, kanalas, kampuotinis, hss, vamzdis, pipe, ipe, hea, heb, upn, uk, britų, ub, uc, pfc, ea, uea, nelygiašonis kampuotinis, shs, rhs, chs, šaltai formuotas, karštai apdirbtas, mėlynoji knyga, plokštė, aisc, en 10365, pavadinimas
from: cd9b2bc3
---

DetailCraft turi 2,311 įmontuotų dydžių, kiekvienas nukopijuotas iš paskelbtos lentelės ir patikrintas programos testais: iš matmenų apskaičiuotas plotas turi sutapti su paskelbtu plotu, o paskelbta masė – su tuo plotu, padaugintu iš plieno tankio. Plokštės ir pasirinktiniai profiliai sudaromi pagal savo matmenis.

## Pavadinimai

- **JAV formos** rašomos taip, kaip jas spausdina AISC žinynas, su mažąja x: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Rašant didžiųjų ir mažųjų raidžių skirtumo nėra.
- **Vamzdžiai** rašomi kaip AISC duomenų bazėje: Pipe4STD, Pipe4XS, Pipe4XXS (standartinis, stiprus, labai stiprus).
- **Europos formos** rašomos kaip EN 10365: IPE200, HEA240, HEB300, UPN200 (be tarpo).
- **JK formos** rašomos pirmiausia šeima, tada Mėlynosios knygos dydis: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Šaltai formuoti tuščiavidurių pjūvių profiliai prasideda CF: CFSHS100x100x5.0. Rašymas taip, kaip brėžiniuose dažnai nurodoma, taip pat veikia: 305x165x40 UB, L100x100x10, SHS100x5.
- **Plokštės** rašomos `PL<thickness>x<width>` milimetrais: PL20x200 yra 20 mm storio ir 200 mm pločio. Veikia bet koks dydis iš įrankio {{ui:Plokštė}}.
- **Pasirinktiniai profiliai** turi bet kokį jūsų suteiktą pavadinimą, jei jis nėra katalogo pavadinimas ir neatrodo kaip plokštės pavadinimas.

{{ui:Profilis}} sąrašuose kiekvienos grupės antraštė nurodo jos šaltinį, pavyzdžiui „W formos — AISC Shapes Database v16.0“.

## Šaltiniai

| Grupė | Šaltinis | Pastabos |
|---|---|---|
| W formos, S formos, kanalai (C), kampuotiniai (L), HSS, vamzdis | AISC Shapes Database v16.0 | Matmenys tiksliai perskaičiuoti iš colių į milimetrus; masė metrui – pagal paskelbtus lb/ft |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Milimetrai ir kg/m, kaip paskelbta |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), lentelė v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Milimetrai ir kg/m, kaip paskelbta |
| Plokštės | Parametrinis | Masė pagal plotą × 7850 kg/m³ |
| Pasirinktiniai | Jūsų matmenys | Masė pagal plotą × 7850 kg/m³ |

Kaip braižomos formos:

- **W formos:** AISC duomenų bazėje nepateiktas suapvalinimo spindulys, todėl DetailCraft suapvalinimą braižo kaip r = kdes − tf.
- **S formos ir kanalai (C, UPN):** lygiagretūs diržai su paskelbtu vidutiniu storiu, statūs kampai (tikras diržas nuožulnus).
- **Kampuotiniai:** statūs kampai.
- **Stačiakampis HSS:** projektinis sienelės storis (0.93 × nominalus, kaip leidžia AISC 360-22 B4.2), o išorinio kampo spindulys – dvigubas jo.
- **Apvalus HSS ir vamzdis:** projektinis sienelės storis (0.93 × nominalus).
- **IPE, HEA, HEB, UB, UC:** paskelbtas šaknies spindulys.
- **PFC, EA, UEA:** statūs kampai (paskelbta masė ir plotas vis dar apima spindulius).
- **SHS, RHS, CHS:** nominali sienelė. Karštai apdirbti kampai: išorinis 1.5 t, vidinis t. Šaltai formuoti kampai: išorinis 2 t, vidinis t iki 6 mm; 2.5 t ir 1.5 t iki 10 mm; 3 t ir 2 t virš 10 mm.

## Dydžiai

Visi šių grupių lentelėse nurodyti dydžiai, nuo mažiausio:

| Grupė | Dydžiai |
|---|---|
| W formos (289) | W4x13 iki W44x408 |
| S formos (28) | S3x5.7 iki S24x121 |
| Kanalai (32) | C3x3.5 iki C15x50 |
| Kampuotiniai, lygios briaunos (61) | L2x2x1/8 iki L12x12x1-3/8 |
| HSS, stačiakampiai ir kvadratiniai (525) | HSS1-1/2x1-1/2x1/8 iki HSS34x10x1 |
| HSS, apvalūs (189) | HSS1.660x0.140 iki HSS28.000x1.000 |
| Vamzdis, Pipe (51) | Pipe1/2STD iki Pipe26XS |
| IPE (18) | IPE80 iki IPE600 |
| HEA (24) | HEA100 iki HEA1000 |
| HEB (24) | HEB100 iki HEB1000 |
| UPN (18) | UPN50 iki UPN400 |
| Kampuotiniai, nelygios briaunos (76) | L2-1/2x1-1/2x3/16 iki L8x6x1 |
| UB (107) | UB127x76x13 iki UB1016x305x584 |
| UC (46) | UC152x152x23 iki UC356x406x1299 |
| PFC (16) | PFC100x50x10 iki PFC430x100x64 |
| EA (42) | EA20x20x3.0 iki EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 iki UEA200x150x18.0 |
| SHS, karštai apdirbti (123) | SHS40x40x3.2 iki SHS400x400x17.5 |
| RHS, karštai apdirbti (161) | RHS50x30x3.2 iki RHS500x300x17.5 |
| CHS, karštai apdirbti (103) | CHS42.4x3.2 iki CHS508.0x17.5 |
| CFSHS, šaltai formuoti (96) | CFSHS25x25x2.0 iki CFSHS400x400x12.5 |
| CFRHS, šaltai formuoti (137) | CFRHS50x25x2.0 iki CFRHS500x300x12.5 |
| CFCHS, šaltai formuoti (106) | CFCHS33.7x3.0 iki CFCHS508.0x16.0 |

Veidrodinis nelygiašonis kampuotis yra ta pati detalė, apversta galu į galą, kaip dirbtuvės gamina priešingą variantą: jos skylės, išpjovos ir jungiamoji plokštė keliauja kartu.

Pasirinkite įdėjimo įrankį ir dydį, kad pamatytumėte jo aukštį, diržo plotį, sienelės ir diržo storį, suapvalinimo spindulį, plotą (cm²), masę (kg/m) ir šaltinį {{ui:Profilis}} laukelyje skydelyje {{ui:Savybės}}.

## Ką gali kiekviena forma

| Forma | Skylės | Išpjovos | Galinės ir pagrindo plokštės | NC failas | Gamybinis brėžinys |
|---|---|---|---|---|---|
| I formos (W, S, IPE, HEA, HEB, UB, UC, pasirinktinė I) | Sienelė, viršutinis diržas, apatinis diržas | Taip | Galinės plokštės: sija ir kolona. Pagrindo plokštės: taip | Taip | Taip |
| Kanalai (C, UPN, PFC) | Sienelė, viršutinis diržas, apatinis diržas | Ne | Tik pagrindo plokštės | Taip | Taip |
| Stačiakampis HSS, SHS, RHS | Šoninė sienelė (sienelė), viršus, apačia | Ne | Tik pagrindo plokštės | Taip | Taip |
| Apvalus HSS, vamzdis, CHS | Dar ne | Ne | Tik pagrindo plokštės | Taip | Taip |
| Kampuotiniai (L, EA, UEA) | Dar ne | Ne | Tik pagrindo plokštės | Taip | Taip |
| Plokštės ir pasirinktiniai plokščiasis strypai | Plokštės paviršius | Ne | Ne | Taip | Taip |

Stačiakampiame vamzdyje skylė „sienelės“ paviršiuje praeina per abi šonines sieneles. Ką kiekvienas NC failas talpina, aprašyta [NC failo laukai](topic:nc1-fields).

## Reikia kito dydžio?

Pridėkite jį kaip [pasirinktinį profilį](topic:plates-and-profiles#add-a-custom-profile). Įmontuoto sąrašo programoje dar negalima redaguoti.
