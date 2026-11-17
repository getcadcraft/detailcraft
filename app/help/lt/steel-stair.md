---
title: Plieninių laiptų generatorius
summary: Plieniniai laiptai pagal aukštį tarp grindų, ilgį ir plotį – pakilimas ir pakopos gylis pagal jūsų pasirinktą taisyklių rinkinį, aikštelės, turėklai ir balustrai, dirbtuvių brėžiniai ir pjovimo sąrašas su svoriais.
keywords: plieniniai laiptai, laiptų generatorius, stringeris, pakopa, rifliuota plokštė, grotelės, lenkta plokštė, aikštelė, turėklas, balustrai, pakilimas, pakopos gylis, osha, ibc, approved document k, pjovimo sąrašas, svoriai, dirbtuvių brėžinys
from: a4f0a985
---

Laiptų generatorius sukuria visus plieninius laiptus iš kelių skaičių: stringerius, pakopas, aikšteles, kai ruožas per aukštas, turėklus su stulpeliais ir balustrais, fiksavimo skyles stringeriuose, pjovimo sąrašą su svoriais ir dirbtuvių brėžinius. Pradedama nuo įrankio {{ui:Laiptai}}, kaip ir paprastų laiptų atveju (žr. Laiptai), su vienu papildomu jungikliu.

## Įdėkite plieninius laiptus

1. Pasirinkite {{ui:Laiptai}} grupėje {{ui:Įdėti}} arba paspauskite {{key:S}}.
2. Dešinėje pažymėkite {{ui:Naudoti plieninių laiptų generatorių}}.
3. Pasirinkite **taisyklių rinkinį** pagal tai, kur statomi laiptai, **pakilimą** (nuo grindų iki grindų; 0 = iki kito lygio), **turimą ilgį** (0 = leisti taisyklei nuspręsti), **švarų plotį** ir **pakopos tipą**: rifliuota plokštė, grotelės arba lenkta plokštė.
4. Nustatykite stringerio pjūvį, aikšteles (pagal taisyklę arba skaičiumi), turėklus (abiejose pusėse, vienoje pusėje arba jokių), turėklo aukštį ir balustrų tarpą.
5. Spustelėkite tinklelio sankirtą: tai pirmosios pakylos pėda.

Pasirinkite laiptus (spustelėkite stringerį, pakopą ar turėklą), kad pakeistumėte bet kurį nustatymą; savybėse rodomos pakylos, pakopos gylis, nuolydis, ruožai ir aikštelės, juose esantis plienas, pjovimo sąrašas ir taisyklių rinkinio šaltiniai.

## Taisyklių rinkiniai

Taisyklių rinkinys riboja laiptų formą: pakilimą ir pakopos gylį, 2 × pakyla + pakopos gylis, nuolydį, aikštelę, turėklo aukštį ir didžiausią angą. DetailCraft siūlo žemiau nurodytus; regionas yra nustatymas, o ne spėjimas. Savybėse atidarykite **Iš kur šio taisyklių rinkinio skaičiai**: kiekvienas skaičius nurodo savo šaltinį ir sako, kaip gerai jis patikrintas.

- **Tarptautinis statybos kodeksas 2021**: pakylos 4–7 in., pakopa bent 11 in., turėklai 34–38 in. 12 pėdų riba tarp aikštelių rodoma kaip *neperskaityta*, o turėklų skaičiai – kaip perskaityti informaciniuose lapeliuose, cituojančiuose kodeksą: prieš juos pasikliaudami patikrinkite.
- **OSHA 29 CFR 1910.25 ir 1910.29** (pramoniniai standartiniai laiptai): 30°–50°, pakyla ne daugiau kaip 9.5 in., pakopa bent 9.5 in., bent 22 in. pločio, aikštelės tokio pločio kaip laiptai ir 30 in. gylio, viršutinis turėklas, naudojamas kaip rankena, 36–38 in. Šie duomenys perskaityti pačiame reglamente.
- **Approved Document K 2013, Anglija** (bendrieji prieigos ir pagalbiniai laiptai): pakilimo ir pakopos gylio intervalai bei 2 × pakyla + pakopos gylis 550–700 mm, perskaityti vyriausybės užsakytoje ataskaitoje, kurioje jie surašyti. Dokumentas DetailCraft neduoda turėklo aukščio, todėl naudojamas jūsų nustatytas aukštis, o Problemų sąraše tai nurodoma.

Taisyklių rinkinys, kurio čia nėra, nespėliojamas: laiptai tada seka įprastą 600–650 mm patogumo taisyklę ir praneša, kad taisyklės nėra.

## Ką apskaičiuoja

- **Pakylos ir pakopos gylis.** Mažiausias pakylų skaičius, kurio 2 × pakyla + pakopos gylis yra taisyklės intervalo viduryje, nenukrentant pakopos gyliui žemiau taisyklės minimumo. Kai nurodytas ilgis, pakopos gylis yra ilgis, padalytas iš pakopų, ir viskas, kas už taisyklės ribų, nurodoma.
- **Ruožai ir aikštelės.** Ruožas, aukštesnis nei leidžia taisyklė, dalijamas aikštele, kuri yra tokio pat pločio kaip laiptai ir ne mažesnė nei taisyklės minimumas; galite prašyti ir aikštelių. Aikštelė – rėmas iš dviejų šoninių sijų ir dviejų skersinių kampų po danga, ant dviejų stulpų.
- **Pakopos.** Rifliuota plokštė – suvirinta plokštė (pagal numatytuosius 6 mm; raštas prie svorio neprideda). Lenkta plokštė turi atlenkimą briaunoje ir prisukama per stringerio sienelę: dvi skylės, 2 mm didesnės už varžtą, esant 0.3 ir 0.7 gylio. Grotelės braižomos kaip plokštė lygiu svoriu (atramos strypo gylis × storis ÷ žingsnis); skersiniai strypai ir juostos neskaičiuojami, ir pjovimo sąraše tai nurodoma.
- **Turėklai.** Vamzdinis viršutinis turėklas ant stulpų išilgai kiekvieno ruožo ir kiekvienos aikštelės; balustrų tarpas, pro kurį nepraeina joks rutulys didesnis už taisyklės angą (pagal numatytuosius ne daugiau kaip 100 mm).

## Brėžiniai, pjovimo sąrašas, eksportas

- Ruožas yra vienas surinkimas; turėklai – kitas (abi pusės yra tas pats surinkimas, pagamintas du kartus). Kiekvienas turi savo surinkimo brėžinį, o stringerio brėžinyje matomos jo skylės.
- **Laiptų lapas** (ST-…) rodo kiekvieno ruožo stringerį tiesiai, skylių padėtys surašytos nuo apatinio galo, ir pakopos detalę: pjūvį, briauną, atlenkimą ir galinį flanšą su skylėmis.
- {{ui:Pjovimo sąrašas ir svoriai}} savybėse surašo kiekvieną profilį ir ilgį su kiekiais ir kilogramais; {{ui:Atsisiųsti pjovimo sąrašą (CSV)}} jį išsaugo.
- Viskas patenka į medžiagų sąrašą, NC failus ir IFC kaip įprastos detalės (IfcMember, IfcColumn, IfcPlate).

## Verta žinoti

- Tai pradinis taškas, o ne projektas. Niekas netikrinama dėl stiprumo ar linkio; taisyklių rinkinys tik riboja formą.
- Stringerių galai prie aukštų nupjaunami statmenai ir nedetalizuojami; aikštelių stulpai stovi ant apatinio aukšto ir neturi pagrindo plokščių.
- Laiptų įdėjimas kaip vieno elemento programoje BimCraft dar neįgyvendintas.
