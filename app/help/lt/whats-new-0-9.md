---
title: Naujovės 0.9 versijoje (ankstesnė)
summary: JK plieno dydžiai ir nelygūs kampai, dirbtuvių brėžiniai kiekvienai detalei viename PDF rinkinyje, Mano profiliai pasirinktiniams profiliams, P-Delta ir natūralieji dažniai, ASCE 7 vėjo apkrovos, seisminė vieta ir deriniai bei gyvi žymekliai su Sekti.
keywords: naujovės 0.9, ankstesnė versija, naujovės, ką naujo, versijos pastabos, pakeitimų žurnalas, 0.9, JK plienas, Blue Book, ub, uc, pfc, shs, rhs, chs, nelygus kampas, dirbtuvių brėžinys, dirbtuvių brėžiniai, lapų rinkinys, detalės žymuo, pdf, mano profiliai, pasirinktinis profilis, P-Delta, antra eilė, natūralusis dažnis, baigtiniai elementai, modalinė masė, vėjo apkrova, ASCE 7, seisminis, vietos klasė, USGS, apkrovų deriniai, LRFD, ASD, gyvai, žymekliai, sekti, dalyviai, įrankių patarimai, 0.8, 0.8.1, versija, nauji funkcijos, montavimas, kranas, apkrovų lentelė, filmas, autopilotas, jungtys, armatūra, armatūros tankumas, pamatai, pamatų plokštė, plokštinis pamatas, nusėdimas, karkasas, mediena, plonasienis, pjovimo sąrašas, statybinis įgyvendinamumas, suvirinimo prieinamumas, tiekėjas, atsargos, pristatymo laikas, kas pirmiausia nepavyks, betonas, seismika, perdanga, kalbos, asistentas
from: ab0c7f05
---

Tai, kas pasikeitė DetailCraft 0.9 versijoje, palyginti su 0.8.1. 0.9 versijoje atsirado JK plieno profilių dydžiai, dirbtuvių brėžinys kiekvienai detalei vienu veiksmu, didesnė skirtuke „{{ui:Analizė}}“ rėmams ir kitų dalyvių žymeklių matymas bendrai dirbant.

## Nauja

### JK plienas ir dirbtuvių brėžiniai

- **JK plieno dydžiai.** Profilių sąrašuose dabar yra 976 dydžiai iš „Steel for Life Blue Book“: UB, UC, PFC, EA, UEA, CHS, SHS ir RHS, o šaltai formuoti tušti profiliai laikomi atskirai (jų pavadinimai prasideda CF). Pavadinimai rašomi pirma šeimos žymuo, pavyzdžiui, UB305x165x40 arba SHS100x100x5.0, o rašyti taip, kaip nurodoma brėžiniuose, taip pat galima: 305x165x40 UB, L100x100x10, SHS100x5. Žr. [Profilių katalogas](topic:profile-catalog).
- **Nelygūs kampai.** UEA kampai išlaiko abu sparnus per IFC įvedimą ir išvedimą bei per NC failus, o veidrodis apverčia detalę galu į galą.
- **Visi dirbtuvių brėžiniai vienu metu.** Kai nieko nepažymėta, grupėje „{{ui:Išvestis}}“ pasirinkite „{{ui:Dirbtuvių brėžinys}}“. Lange išvardytos visos detalių žymos, galima peržiūrėti bet kurią iš jų, o „{{ui:Atsisiųsti visus}}“ įrašo vieną PDF su puslapiu kiekvienai žymai, pavadintu „Sheet 3 of 42“ tipo antrašte. „{{ui:Atsisiųsti PDF}}“ įrašo tą, kurį žiūrite. Kanalams, kampams ir tušti profiliai dabar taip pat sukuriami lapai. Žr. [Dirbtuvių brėžinių kūrimas](topic:shop-drawings).
- **Mano profiliai.** Pasirinktinis profilis dabar gali būti išsaugomas kiekvienam naujam modeliui. Pasirinktinio profilio formoje palikite pažymėtą „{{ui:Laikyti Mano profiliuose}}“; sąraše „{{ui:Mano profiliai}}“ po juo yra „{{ui:Laikyti}}“, „{{ui:Naudoti čia}}“ ir „{{ui:Pašalinti}}“. Sąrašas įrašomas šioje naršyklėje (iki 200), o ne jūsų paskyroje. Žr. [Plokštės ir profiliai](topic:plates-and-profiles).

### Analizė

- **Antra eilė (P-Delta).** Skirtuke „{{ui:Analizė}}“ šalia Paleisti pažymėkite „{{ui:Antros eilės (P-Delta)}}“, ir ašinės jėgos veikia deformuotą rėmą. Plokštės ir standūs perdangos lieka pirmos eilės, o rodomas įspėjimas. Žr. [Jėgos, reakcijos ir deformacijos](topic:frame-analysis).
- **Natūralieji dažniai.** Blokas „{{ui:Baigtiniai elementai: natūralieji dažniai}}“ po rezultatais suranda žemiausius to paties modelio modus su periodu ir efektyviąja modaline mase bei rodo modą modelyje. Žr. [Jėgos, reakcijos ir deformacijos](topic:frame-analysis).
- **Vėjo apkrovos ir seisminė vieta.** Trys nauji blokai skirtuke „{{ui:Analizė}}“: „{{ui:Vėjo apkrovos (ASCE 7 krypties procedūra)}}“, „{{ui:Seisminė vieta ir sistema (ASCE 7)}}“ ir „{{ui:ASCE 7 apkrovų deriniai}}“. Žr. [Vėjas, seisminė vieta ir ASCE 7 deriniai](topic:wind-seismic-combinations).

### Bendras darbas

- **Žymekliai ir vardai.** Gyvoje sesijoje kiekvieno asmens žymeklis piešiamas ant modelio su jo vardu ir spalva, o tai, ką jis pasirinko, pažymima rėmeliu.
- **Sekti asmenį.** Sesijoje atidarykite „{{ui:Dalyviai}}“ ir prie vardo pasirinkite „{{ui:Sekti}}“; jūsų vaizdas juda kartu su jų. Vedėjas gali pasirinkti „{{ui:Prašyti visų sekti mane}}“. Žr. [Sekti asmenį gyvoje sesijoje](topic:follow-in-live).

### Visose programose

- Įrankių patarimai yra Bootstrap patarimai, pradžios patarimo kortelė turi uždarymo mygtuką, skirtukų juostos slenka į šonus, kai netelpa, o naršyklės skirtuko pavadinime rodomas atidarytas dokumentas, po kurio nurodoma DetailCraft ir CadCraft.

## Ištaisyta

- Pasirinktinis profilis dingdavo, kai pradėdavote naują modelį.
- Kanalų, kampų ir tuščiavidurių profilių nebuvo dirbtuvių brėžinių rinkinyje.

## Sąžiningi apribojimai

- Vėjo, seisminiai ir baigtinių elementų blokai yra patikrinimo pagalba. Inžinierius peržiūri rezultatus; tai nėra normos patikrinimas. USGS paieška buvo išbandyta su pakaitiniu, o ne su tikru tarnybos įrenginiu.
- Baigtiniai elementai ir P-Delta patikrinti lyginant su rankiniais ir uždarosios formos atsakymais, o ne su tikru pastatu. Išsilenkimo analizė dar neįgyvendinta.
- Nė viena JK gamykla dar nebandė JK dydžių, o NC failai nelygiems kampams dar nebuvo paleisti kompiuteryje.
- Dirbtuvių brėžinių rinkinys tik PDF formatu.
- Kalbos, išskyrus anglų, yra mašininiai juodraščiai.
- Windows diegimo programos nepasirašytos kodu („Daugiau informacijos“, tada „Vis tiek paleisti“); macOS disko vaizdas nėra notarizuotas (dešiniuoju pelės mygtuku, tada „Atidaryti“).

Ankstesni pakeitimai pateikti žemiau esančiose 0.8 ir 0.8.1 pastabose.

## Ankstesnės: 0.8 ir 0.8.1

Tai, kas pasikeitė DetailCraft 0.8 (2026 m. lapkričio 1 d.) ir 0.8.1 (2026 m. lapkričio 2 d.) versijose, palyginti su 0.7. 0.7 tikrino plieninius elementus; 0.8 planuoja kėlimus, siūlo jungtis, tikrina pamatus ir armatūrą bei kuria medinių ir plonasienių sienų, perdangų ir stogų karkasus.

### Naujovės

**Montavimas**

- **Montavimo planas ir filmas.** Skirtuke „{{ui:Montavimas}}“ aprašykite kraną (kur jis stovi, aukščiausią kabliuką, takelažą, kurio nėra apkrovų lentelėje) ir įveskite jo apkrovų lentelės eilutes. DetailCraft kelia modelį po vieną surinkimą, pagal fazių tvarką ir pakopomis, ir kiekvieną kėlimą tikrina pagal lentelę jo spinduliu bei pagal jūsų nustatytą atsargą. „{{ui:Įrašyti filmą}}“ įrašo vieną HTML failą, kuris veikia neprisijungus bet kurioje naršyklėje, net telefone. Kėlimai, viršijantys lentelę, už jos ribų ar per aukšti, rodomi skiltyje „{{ui:Problemos}}“. Tai planas pagal jūsų skaičius, o ne kėlimo planas. Žr. [Montavimo planas ir filmas](topic:erection-movie).

**Jungtys**

- **Jungčių autopilotas.** Skirtuke „{{ui:Autopilotas}}“ žiūrima į kiekvieną mazgą, kuriame nėra jungties, ir pagal profilius siūloma jungtis: pamatų plokštės, pjūvio skydeliai, galinės plokštės sijoms, kurias pažymite kaip momentines sijas, sujungimai ir sustiprinimai. Nurodykite tolygiai pasiskirstančią apkrovą arba vieną galo jėgą, o varžtų skaičius priklauso nuo varžto projektinio stiprumo. „{{ui:Pridėti visus}}“ prideda pasiūlymus kaip vieną atšaukimo veiksmą. Tai pradinės reikšmės, kurias reikia peržiūrėti, o ne jungties projektavimas.
- **Statybinio įgyvendinamumo patikrinimai.** „{{ui:Problemos}}“ nurodo varžtą, kurio neprieinate veržliarakčiu, varžtus, per arti lizdo, kampines siūles, viršijančias savo dydžio ribas, ir tuščiavidurius profilius, kuriuose kaupiasi vanduo. Suvirinimo prieinamumas – naujas dalykas: visapusė kampinė siūlė, kurios suvirintojo degiklis nepasiekia, nurodoma kartu su detale, kuri trukdo, ir pažeistos siūlės dalimi. Žr. [Statybinio įgyvendinamumo patikrinimai](topic:constructability).

**Pamatai ir armatūra**

- **Pamatų patikrinimai.** Skirtuke „{{ui:Pamatai}}“ tikrinami pamatai, sujungti pamatai ir plokštiniai pamatai pagal jūsų aprašytą gruntą: laikomoji geba, slinkimas ir apvirtimas nuo eksploatacinių apkrovų; lenkimas, šlytis, prebadymas, įtvirtinimo ilgis ir mažiausias plienas nuo apskaičiuotų apkrovų (ACI 318-19). Kolona arti krašto ar kampo tikrinama su pjūviu, nukirstu pamato krašto. Nusėdimas apskaičiuojamas pagal grunto modulį, lanksti plokštė sprendžiama ant spyruoklių pagal pagrindo modulį, o polių grupės ir atraminės sienos turi savo skyrius. Kolonų apkrovas galima įvesti arba paimti iš „{{ui:Analizė}}“. Žr. [Pamatų patikrinimai](topic:foundation-checks).
- **Armatūros tankumo žemėlapis.** Skirtuke „{{ui:Armatūros tankumas}}“ kiekvieno pamato šiluminis žemėlapis, matomas iš viršaus: kur strypai palieka per mažai vietos betonui nusileisti, palyginti su laisvo tarpo taisykle, o jei nurodote, su didžiausiu užpildu ir vibratoriaus galvute. Žr. [Armatūros tankumo žemėlapis](topic:rebar-congestion).

**Karkasai ir tiekimas**

- **Mediniai ir plonasieniai karkasai.** Skirtuke „{{ui:Karkasas}}“ sudaromi sienų, perdangų ir stogų skydai su kiekviena detale, pjovimo sąrašas, pirktinos atsargos ir dirbtuvių brėžinys masteliu. „{{ui:Įstatyti kaip elementus}}“ įdeda detales į modelį, o „{{ui:PDF lapai}}“ įrašo po vieną lapą kiekvienam skydui. Dydžius, žingsnius ir perkraščius nustatote jūs: DetailCraft netikrina, ar jie laiko apkrovą. Žr. [Mediniai ir plonasieniai karkasų skydai](topic:framing-panels).
- **Tiekėjo atsargos ir pristatymo laikas.** Skirtuke „{{ui:Tiekimas}}“ nuskaitomas tiekėjo atsargų sąrašas (CSV), ir kiekvienam pjovimo sąrašo perkamam profiliui rodoma, ar atsargų pakanka ir kiek laukti. Trūkumai ir vėluojantys profiliai nurodyti skiltyje „{{ui:Problemos}}“. Nieko neužsakoma. Žr. [Tiekėjo atsargos ir pristatymo laikas](topic:supplier-stock).

**Analizė ir projektavimas**

- **Kas pirmiausia nepavyks?** Skirtuke „{{ui:Analizė}}“ mygtukas suranda lemiantį stiprumo derinį, silpniausią elementą, kiek apkrovos gali augti, kol pirmasis elementas pasieks ribą, ir silpniausią galinę plokštę ar pjūvio skydelį, kur žinomas jų varžtų šlyties stiprumas. Pirmiausia reikia derinių ir projektavimo normos. Atspaudas, bloko šlytis, suvirinimai ir atvertimas nėra tikrinami. Jūsų prijungtas asistentas gali paprašyti to paties.
- **Gyvai.** Pažymėkite „{{ui:Gyvai: skaičiuoti iš naujo po kiekvieno pakeitimo}}“, ir rėmas bus skaičiuojamas iš naujo po kiekvieno pakeitimo.
- **Betonas ir kita.** Lieknas stulpas nejudamame rėme projektuojamas pagal padidintą momentą (ACI 318-19 6.6.4.5). Seisminis periodas gali būti paimtas iš analizės Rayleigh metodu. Iš plokščių sudaryta perdanga gauna plieno kiekį kiekvienam sluoksniui pagal jos momentus ir vienakryptę šlytį. Žr. [Betoninių elementų tikrinimas ir seisminių apkrovų sudarymas](topic:concrete-and-seismic).
- **Inžinieriui peržiūrėti.** Pamatų, betono ir „Kas pirmiausia nepavyks?“ rezultatai yra pagalba. Vėjo apkrovos dar neįgyvendintos.

**Visose programose**

- **Kalbos.** Pagalba pateikiama 54 kalbomis. Kalbos, išskyrus anglų, yra mašininiai juodraščiai, kol jų neperskaito gimtoji kalba; dešimt yra naujos (lietuvių, latvių, bosnių, marathi, telugu, albanų, afrikaansų, filipiniečių, suahilių, uzbekų).
- **Įrankių juostos eilutės.** „{{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Įrankių juostos eilutės}}“ pasirenkama lūžimas, 2 eilutės arba 1 eilutė. Juosta, kuri jau telpa, lieka tokia pat; likusios slenka į šonus.
- **Savybių tinklelis.** Pamato laukai naudoja bendrą tinklelį: sutraukiamos kategorijos ir kompaktiškas tankis. Įvestos aritmetinės išraiškos, pavyzdžiui, 2*450, tebeveikia.
- **Įvesties įrenginiai.** Jutiklinė dalis, rašiklis, 3D pelė, valdiklis ir MIDI gali valdyti programas. Žr. [Naršymas 3D](topic:navigate-3d).
- **Problemų skydelis.** Aukščiau nurodytų naujų patikrinimų įspėjimai rodomi tame pačiame skiltyje „{{ui:Problemos}}“ kaip ir anksčiau.
- **Prijunkite savo DI.** Jūsų asistentas, prijungtas per CadCraft Studio, veikia su visomis aštuoniomis programomis ir mato tik tai, ką leidžiate. Vieno paspaudimo prijungimas, talpinamas jungtis ir jūsų API raktas Studio dar bus. Žr. [Naudoti DetailCraft su DI asistentu](topic:use-with-ai-assistants).

### Ištaisyta 0.8.1 versijoje

- **Kalbos Studio.** Studio ir supakuoti leidimai gali keisti kalbą veikimo metu; anksčiau buvo tik anglų. Dar neišbandyta visose platformose: praneškite, jei kalba nepasikeičia.
- **Pasirinkimas per langą kertant.** 0.8.1 diegimo programos turi pasirinkimo pagal langą elgseną, jau teisingą 0.8 žiniatinklio versijoje; senesnė diegimo programa jos neturėjo.
- **Planšetės vertikaliai.** Laisvas tinklelio aukštis atitenka drobei, o lapo maketas prasideda nuo 760 px ar mažiau.

### Šioje versijoje dar nėra

- **NC siuntimas į staklę** dar neišleistas.
- **Vėjo apkrovos** betonui dar neįgyvendintos, o betono ir pamatų patikrinimai skirti inžinieriaus peržiūrai.
- **Kodo pasirašymas.** Windows diegimo programos ir macOS .dmg nepasirašyti, todėl Windows gali įspėti, o macOS prašo dešiniuoju pelės mygtuku, tada „Atidaryti“.

Ankstesni pakeitimai pateikti [Naujovės 0.7 versijoje](topic:whats-new-0-7).
