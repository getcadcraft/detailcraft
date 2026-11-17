---
title: Kas nauja 0.9 versijoje
summary: JK plieno dydžiai pagal Blue Book ir nelygūs kampuočiai, dirbtuvių brėžiniai kiekvienai detalei viename PDF rinkinyje, Mano profiliai pasirinktiniams profiliams, P-Delta ir natūralieji dažniai, ASCE 7 vėjo apkrovos, seisminė vieta ir deriniai bei gyvi žymekliai su Sekti.
keywords: kas nauja, ką naujo, versijų pastabos, pakeitimų žurnalas, 0.9, JK plienas, blue book, ub, uc, pfc, shs, rhs, chs, nelygus kampuotis, dirbtuvių brėžinys, dirbtuvių brėžiniai, lapų rinkinys, detalės žymė, pdf, mano profiliai, pasirinktinis profilis, p-delta, antroji eilė, natūralusis dažnis, baigtiniai elementai, modalinė masė, vėjo apkrova, asce 7, seisminis, vietos klasė, usgs, apkrovų deriniai, lrfd, asd, gyvi, žymekliai, follow, žmonės, įrankių patarimai, pakeitimai, 0.8, 0.8.1, versija, naujos funkcijos, montavimas, kranas, apkrovos diagrama, filmas, autopilotas, jungtys, armatūra, tankumas, pamatas, plokštė, pamatai, karkasas, medis, lengvasis plienas, tiekimas, atsargos, pristatymo laikas, kas pirmiausia sugenda, betonas, kalbos, asistentas
from: 4c95a2de
---

Tai, kas pakeista DetailCraft 0.9 versijoje, palyginti su 0.8.1. 0.9 versijoje atsiranda JK plieno dydžiai, dirbtuvių brėžinys kiekvienai detalei vienu veiksmu, didesnis {{ui:Analizė}} skirtukas rėmams ir kitų žymeklių rodinys, kai dirbate kartu.

## Naujovės

### JK plienas ir dirbtuvių brėžiniai

- **JK plieno dydžiai.** Profilių sąrašuose dabar yra 976 dydžiai iš Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS ir RHS, o šaltai formuoti tuščiaviduriai profiliai laikomi atskirai (jų pavadinimai prasideda CF). Pavadinimai rašomi pirmiausia šeima, pavyzdžiui UB305x165x40 arba SHS100x100x5.0, o įvesti taip, kaip rašoma brėžiniuose, taip pat veikia: 305x165x40 UB, L100x100x10, SHS100x5. Žr. [Profilių katalogas](topic:profile-catalog).
- **Nelygūs kampuočiai.** UEA kampuočiai per IFC įvedimą ir išvedimą bei per NC failus išlaiko abi kojeles, o atspindys apverčia detalę iš galo į galą.
- **Visi dirbtuvių brėžiniai vienu metu.** Nieko nepažymėję, grupėje {{ui:Išvestis}} pasirinkite {{ui:Dirbtuvių brėžinys}}. Lange išvardijamos visos detalių žymos, bet kurią galima peržiūrėti, o {{ui:Atsisiųsti visus}} įrašo vieną PDF su puslapiu kiekvienai žymai, kiekvienas pavadintas „Lapas 3 iš 42“. {{ui:Atsisiųsti PDF}} įrašo lapą, kurį žiūrite. Kanalai, kampuočiai ir tuščiaviduriai profiliai dabar taip pat gauna lapus. Žr. [Dirbtuvių brėžinių kūrimas](topic:shop-drawings).
- **Mano profiliai.** Pasirinktinį profilį dabar galima išsaugoti kiekvienam naujam modeliui. Pasirinktinio profilio formoje palikite pažymėtą {{ui:Įtraukti į mano profilius}}; po ja esantis sąrašas {{ui:Mano profiliai}} turi {{ui:Laikyti}}, {{ui:Naudoti čia}} ir {{ui:Pašalinti}}. Sąrašas saugomas šioje naršyklėje (iki 200), o ne jūsų paskyroje. Žr. [Plokštės ir profiliai](topic:plates-and-profiles).

### Analizė

- **Antroji eilė (P-Delta).** Pažymėkite {{ui:Antroji eilė (P-Delta)}} šalia {{ui:Vykdyti}} skirtuke {{ui:Analizė}}, ir ašinės jėgos veikia deformuotą rėmą. Plokštės ir standieji perdangos lieka pirmosios eilės, su įspėjimu. Žr. [Jėgos, reakcijos ir deformacijos](topic:frame-analysis).
- **Natūralieji dažniai.** Blokas {{ui:Baigtiniai elementai: natūralieji dažniai}} po rezultatais suranda žemiausius to paties modelio modus su periodu ir efektyvia modaline mase bei rodo modą modelyje. Žr. [Jėgos, reakcijos ir deformacijos](topic:frame-analysis).
- **Vėjo apkrovos ir seisminė vieta.** Trys nauji blokai skirtuke {{ui:Analizė}}: {{ui:Vėjo apkrovos (ASCE 7 krypties procedūra)}}, {{ui:Seisminė vieta ir sistema (ASCE 7)}} ir {{ui:ASCE 7 apkrovų deriniai}}. Žr. [Vėjas, seisminė vieta ir ASCE 7 deriniai](topic:wind-seismic-combinations).

### Darbas kartu

- **Žymekliai ir vardai.** Gyvoje sesijoje kiekvieno asmens žymeklis piešiamas modelyje su jo vardu ir spalva, o tai, ką jis pažymėjo, gauna rėmelį.
- **Sekti asmenį.** Sesijoje atidarykite {{ui:Dalyviai}} ir prie vardo pasirinkite {{ui:Sekti}}; jūsų vaizdas juda kartu su jų. Vedėjas gali pasirinkti {{ui:Prašyti visų sekti mane}}. Žr. [Sekti asmenį gyvoje sesijoje](topic:follow-in-live).

### Visose programose

- Patarimai yra Bootstrap patarimai, pradžios patarimo kortelė turi uždarymo mygtuką, skirtukų juostos slenka į šoną, kai netelpa, o naršyklės skirtukas rodo atidarytą dokumentą, po kurio nurodoma DetailCraft ir CadCraft.

## Ištaisyta

- Pasirinktinis profilis dingdavo, kai pradėdavote naują modelį.
- Kanalų, kampuočių ir tuščiavidurių profilių nebuvo dirbtuvių brėžinių rinkinyje.

## Sąžiningos ribos

- Vėjo, seisminiai ir baigtinių elementų blokai yra patikros priemonės. Rezultatus peržiūri jūsų inžinierius; tai nėra normos patikra. USGS paieška išbandyta su pakaitine paslauga, o ne su tikra gyva paslauga.
- Baigtiniai elementai ir P-Delta patikrinti lyginant su rankiniais ir uždaros formos atsakymais, o ne su tikru pastatu. Stabilumo analizė nepadaryta.
- Nė vienas JK gamintojas dar nebandė JK dydžių, o nelygių kampuočių NC failai dar nebuvo paleisti mašinoje.
- Dirbtuvių brėžinių rinkinys tik PDF formatu.
- Kalbos, išskyrus anglų, yra mašininiai juodraščiai.
- Windows diegimo programos nepasirašytos kodu ({{ui:Daugiau informacijos}}, tada {{ui:Vis tiek paleisti}}); macOS disko atvaizdas nenotarizuotas (dešinysis spustelėjimas, tada {{ui:Atidaryti}}).

Ankstesni pakeitimai yra 0.8 ir 0.8.1 pastabose žemiau šiame puslapyje.

## Ankstesnė: 0.8 ir 0.8.1

Tai, kas pakeista DetailCraft 0.8 (2026 m. lapkričio 1 d.) ir 0.8.1 (2026 m. lapkričio 2 d.) versijose, palyginti su 0.7. 0.7 tikrino plieninius elementus; 0.8 planuoja kėlimus, siūlo jungtis, tikrina pamatus ir armatūrą bei sudaro medinių ir lengvųjų plienų sienų, perdangų ir stogų karkasus.

### Naujovės

**Montavimas**

- **Montavimo planas ir filmas.** Skirtuke {{ui:Montavimas}} aprašykite kraną (kur jis stovi, jo aukščiausią kabliuką, įrangą, kurios nėra apkrovos diagramoje) ir įveskite jo apkrovos diagramos eilutes. DetailCraft kelia modelį po vieną surinkimą, pagal fazių eiliškumą ir aukštis po aukščio, ir tikrina kiekvieną kėlimą pagal diagramą prie jo spindulio bei pagal jūsų nustatytą atsargą. {{ui:Įrašyti filmą}} įrašo vieną HTML failą, kuris veikia neprisijungus bet kurioje naršyklėje, net telefone. Kėlimai, viršijantys diagramą, už jos ribų ar per aukšti, yra {{ui:Problemos}}. Tai planas pagal jūsų skaičius, o ne kėlimo planas. Žr. [Montavimo planas ir filmas](topic:erection-movie).

**Jungtys**

- **Jungčių autopilotas.** Skirtuke {{ui:Autopilotas}} tikrinamas kiekvienas mazgas be jungties ir pagal profilius siūloma viena: pagrindų plokštės, šlyties skydeliai, galinės plokštės sijoms, kurias pažymite kaip momentines sijas, sujungimai ir jungiamosios plokštės. Nurodykite tolygiai pasiskirstytą apkrovą arba vieną galo šlyties jėgą, o varžtų skaičius seka varžto projektinį stiprumą. {{ui:Pridėti visus}} prideda pasiūlymus kaip vieną atšaukimo žingsnį. Tai pradinės reikšmės, kurias reikia peržiūrėti, o ne jungties projektas.
- **Tinkamumo gaminti patikrinimai.** {{ui:Problemos}} rodo varžtą, kurio neįmanoma pasiekti raktu, varžtus per arti lizdui, kampinius suvirinimus, išeinančius už dydžio ribų, ir tuščiavidurius profilius, kuriuose kaupiasi vanduo. Suvirinimo prieigos patikrinimas yra naujas: aplinkinis kampinis suvirinimas, kurio nepasiekia suvirintojo degiklis, įrašomas su kliūtimi ir paveikta suvirinimo dalimi. Žr. [Tinkamumo gaminti patikrinimai](topic:constructability).

**Pamatai ir armatūra**

- **Pamatų patikrinimai.** Skirtuke {{ui:Pamatai}} tikrinami pamatai, sujungti pamatai ir plokštiniai pamatai pagal jūsų aprašytą gruntą: laikomoji galia, slydimas ir apvirtimas nuo eksploatacinių apkrovų; lenkimas, šlytis, prebadymas, įtvirtinimas ir mažiausias plienas nuo apskaičiuotų apkrovų (ACI 318-19). Kolona arti krašto ar kampo tikrinama su pjūviu, nukirstu pagal pamato kraštą. Nusėdimas apskaičiuojamas pagal grunto modulį, lanksti plokštė sprendžiama ant spyruoklių pagal pagrindo modulį, o polių grupėms ir atraminėms sienoms yra savi skydai. Kolonų apkrovas galima įvesti arba paimti iš {{ui:Analizė}}. Žr. [Pamatų patikrinimai](topic:foundation-checks).
- **Armatūros tankumo žemėlapis.** Skirtuke {{ui:Armatūros tankumas}} kiekvieno pamato vaizdas iš viršaus rodomas šilumos žemėlapiu: ten, kur strypai palieka per mažai vietos, kad betonas nusileistų, palyginus su švaraus tarpo taisykle ir, jei nurodote, didžiausiu užpildo dydžiu bei vibratoriaus galva. Žr. [Armatūros tankumo žemėlapis](topic:rebar-congestion).

**Karkasai ir tiekimas**

- **Medinis ir lengvasis plieninis karkasas.** Skirtuke {{ui:Karkasas}} sienų, perdangų ir stogų skydai sudaromi su kiekvienu gabalu, pjovimo sąrašu, pirktinomis medžiagomis ir dirbtuvių brėžiniu mastelyje. {{ui:Įstatyti kaip elementus}} įdeda gabalus į modelį, o {{ui:PDF lapai}} įrašo po vieną lapą kiekvienam skydui. Dydžius, žingsnį ir angų sijas nustatote jūs: DetailCraft nepatikrina, ar jie laiko apkrovą. Žr. [Medinių ir lengvųjų karkasų skydai](topic:framing-panels).
- **Tiekėjo atsargos ir pristatymo terminai.** Skirtuke {{ui:Tiekimas}} nuskaitomas tiekėjo atsargų sąrašas (CSV) ir kiekvienam pjovimo sąrašo profiliui rodoma, ar atsargų pakanka ir kiek laukti. Trūkumai ir vėluojantys profiliai yra {{ui:Problemos}}. Nieko neužsakoma. Žr. [Tiekėjo atsargos ir pristatymo terminai](topic:supplier-stock).

**Analizė ir projektavimas**

- **Kas pirmiausia sugenda?** Skirtuke {{ui:Analizė}} mygtukas randa lemiantį stiprumo derinį, silpniausią elementą, kiek apkrovos gali augti, kol pirmasis elementas pasieks ribą, ir silpniausią galinę plokštę arba šlyties skydelį, kai žinomas jų varžtų šlyties stiprumas. Pirmiausia reikia derinių ir projektavimo normos. Atrama gniuždymui, bloko šlytis, suvirinimai ir išlenkimas (prying) nėra tikrinami. Jūsų prijungtas asistentas gali paprašyti to paties.
- **Gyvai.** Pažymėkite {{ui:Gyvai: skaičiuoti iš naujo po kiekvieno pakeitimo}}, ir rėmas skaičiuojamas iš naujo po kiekvieno pakeitimo.
- **Betonas, daugiau.** Liekna kolona nepastumiamame rėme projektuojama pagal jos padidintą momentą (ACI 318-19 6.6.4.5). Seisminį periodą galima paimti iš analizės Releigo metodu. Iš plokščių sudaryta perdanga gauna kiekvienam sluoksniui reikalingą plieną pagal jo momentus ir vienakryptę šlytį. Žr. [Patikrinti betoninius elementus ir sudaryti seismines apkrovas](topic:concrete-and-seismic).
- **Inžinierius turi patikrinti.** Pamatų, betono ir „Kas pirmiausia sugenda?“ rezultatai yra pagalbinės priemonės. Vėjo apkrovos nepadarytos.

**Visose programose**

- **Kalbos.** Žinynas yra 54 kalbomis. Kalbos, išskyrus anglų, yra mašininiai juodraščiai, kol jų neperskaito gimtoji kalba; dešimt yra naujos (lietuvių, latvių, bosnių, maratų, telugu, albanų, afrikanų, filipinų, svahilio, uzbekų).
- **Įrankių juostos eilutės.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Įrankių juostos eilutės}} pasirenka perkėlimą į kitą eilutę, 2 eilutes arba 1 eilutę. Juosta, kuri jau telpa, lieka tokia pati; likusios slenka į šoną.
- **Savybių lentelė.** Pamato laukeliai naudoja bendrą lentelę: sklidžiamosios kategorijos ir kompaktiškas tankis. Įvestos aritmetinės išraiškos, pavyzdžiui 2*450, vis dar veikia.
- **Įvesties įrenginiai.** Jutiklinė dalis, rašiklis, 3D pelė, valdiklis ir MIDI gali valdyti programas. Žr. [Naršymas 3D](topic:navigate-3d).
- **Problemų skydelis.** Aukščiau aprašytų naujų patikrinimų įspėjimai rodomi tame pačiame {{ui:Problemos}} skydelyje kaip ir anksčiau.
- **Prijunkite savo DI.** Jūsų pačių asistentas, prijungtas per CadCraft Studio, veikia su visomis aštuoniomis programomis ir mato tik tai, ką leidžiate. Vieno spustelėjimo prijungimas, talpinamas jungtis ir jūsų paties API raktas Studio dar tik ateis. Žr. [Naudoti DetailCraft su DI asistentu](topic:use-with-ai-assistants).

### Ištaisyta 0.8.1

- **Kalbos Studio.** Studio ir supakuotos versijos gali keisti kalbą veikimo metu; anksčiau buvo tik anglų. Dar nėra išbandyta visose platformose: pasakykite mums, jei kalba nepasikeičia.
- **Pasirinkimas kertančiu langu.** 0.8.1 diegimo programos jau turi teisingą pasirinkimo kertančiu langu elgseną, kuri buvo 0.8 interneto versijoje; senesnė diegimo programa jos neturėjo.
- **Planšetės stačiai.** Laisvas tinklelio aukštis atitenka darbo sričiai, o lapo išdėstymas prasideda ties 760 px ar mažiau.

### Dar neįtraukta į šią versiją

- **NC siuntimas į staklę** dar neišleistas.
- **Vėjo apkrovos** betonui dar nepadarytos, o betono ir pamatų patikrinimus turi peržiūrėti inžinierius.
- **Kodo parašas.** Windows diegimo programos ir macOS .dmg nepasirašyti, todėl Windows gali įspėti, o macOS prašo dešiniuoju pelės klavišu spustelėti, tada {{ui:Atidaryti}}.

Ankstesni pakeitimai yra [Kas nauja 0.7](topic:whats-new-0-7).
