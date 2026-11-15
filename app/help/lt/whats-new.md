---
title: Kas nauja 0.8 ir 0.8.1 versijose
summary: Montavimo filmas pagal kranos apkrovų lentelę, jungčių autopilotas, armatūros tankio žemėlapis, pamatų patikros, medienos ir plonasienių karkasų skydai, konstrukcijų tinkamumo ir suvirinimo prieigos patikros, tiekėjo atsargos, kas lūžta pirmiausia, gyvas perskaičiavimas, daugiau betono patikrų ir 0.8.1 pataisos.
keywords: kas nauja, naujienos, išleidimo pastabos, pakeitimai, 0.8, 0.8.1, versija, naujos funkcijos, montavimas, kranas, apkrovų lentelė, filmas, autopilotas, jungtys, armatūra, tankis, pamatas, plokštė, sumažėjimas, karkasas, mediena, plonasienis, pjovimo sąrašas, tinkamumas, suvirinimo prieiga, tiekėjas, atsargos, tiekimo laikas, kas lūžta pirmiausia, gyvas, betonas, seisminis, perdanga, kalbos, asistentas
from: 6e33e052
---

Tai, kas pasikeitė DetailCraft 0.8 (2026 m. lapkričio 1 d.) ir 0.8.1 (2026 m. lapkričio 2 d.) versijose, palyginti su 0.7. 0.7 tikrino plieninius elementus; 0.8 planuoja kėlimus, siūlo jungtis, tikrina pamatus ir armatūrą bei sukuria medienos ir plonasienių sienų, perdangų ir stogų karkasus.

## Nauja

### Montavimas

- **Montavimo planas ir filmas.** Skirtuke {{ui:Montavimas}} aprašykite kraną (kur jis stovi, aukščiausią kabliuko padėtį, įrangą, kurios nėra apkrovų lentelėje) ir įveskite jo apkrovų lentelės eilutes. DetailCraft kelia modelį po vieną surinkimą, pagal fazių eilę ir aukštis po aukščio, ir kiekvieną kėlimą tikrina pagal lentelę jo spinduliu bei pagal nustatytą atsargą. {{ui:Įrašyti filmą}} sukuria vieną HTML failą, kuris groja be ryšio bet kurioje naršyklėje, net telefone. Kėlimai, viršijantys lentelę, už jos ribų ar per aukšti, rodomi {{ui:Problemos}} skiltyje. Tai plėtinys pagal jūsų skaičius, o ne kėlimo planas. Žr. [Montavimo planas ir filmas](topic:erection-movie).

### Jungtys

- **Jungčių autopilotas.** Skirtukas {{ui:Autopilotas}} apžiūri kiekvieną sujungimo vietą be jungties ir pagal formas siūlo jungtį: pagrindo plokštes, šlyties plokštes, galines plokštes sijoms, kurias pažymėjote kaip momentines sijas, sujungimus ir jungiamąsias plokštes. Įvedus tolygiai pasiskirstytą apkrovą arba vieną galo šlyties jėgą, varžtų skaičius priklauso nuo varžto projektinio stiprio. {{ui:Pridėti visus}} prideda pasiūlymus kaip vieną atšaukimo veiksmą. Tai pradinės reikšmės, kurias reikia peržiūrėti; tai nėra jungties projektavimas.
- **Konstrukcijų tinkamumo patikros.** {{ui:Problemos}} skiltyje – varžtas, kurio negalima pasiekti veržliarakčiu, varžtai per arti lizdo, kampinės suvirinimo siūlės už savo dydžio ribų ir tuščiaviduriai profiliai, kuriuose kaupiasi vanduo. Suvirinimo prieiga yra nauja: visa apvali kampinė siūlė, kurios nepasiekia suvirintojo degiklis, nurodoma kartu su kliūtimi ir paveiktos siūlės dalimi. Žr. [Konstrukcijų tinkamumo patikros](topic:constructability).

### Pamatai ir armatūra

- **Pamatų patikros.** Skirtukas {{ui:Pamatai}} tikrina pamatus, sujungtus pamatus ir plokštes pagal jūsų aprašytą gruntą: gniuždymą, slydimą ir apvirtimą nuo eksploatacinių apkrovų; lenkimą, šlyti, prasiskverbimą, įtvirtinimo ilgį ir mažiausią armatūrą nuo apskaičiuotų apkrovų (ACI 318-19). Kolona arti krašto ar kampo tikrinama su pjūviu, nukirptu pamato krašto. Sėdimas apskaičiuojamas iš grunto moduliu, lanksti plokštė sprendžiama ant atramų pagal pagrindo moduliu, o polių grupėms ir atraminėms sienoms yra atskiri skydeliai. Kolonų apkrovas galima įvesti arba paimti iš {{ui:Analizė}}. Žr. [Pamatų patikros](topic:foundation-checks).
- **Armatūros tankio žemėlapis.** Skirtukas {{ui:Armatūros tankumas}} piešia kiekvieno pamato šilumos žemėlapį, matomą iš viršaus: kur strypai palieka per mažai vietos betonui nusileisti, palyginti su švaraus tarpo taisykle ir, jei nurodote, didžiausiu užpildo skersmeniu bei vibratoriaus galvute. Žr. [Armatūros tankio žemėlapis](topic:rebar-congestion).

### Karkasai ir tiekimas

- **Medienos ir plonasienių karkasų elementai.** Skirtukas {{ui:Karkasas}} sudaro sienų, grindų ir stogo skydus iš visų dalių, pjovimo sąrašo, medžiagos, kurią reikia nusipirkti, ir dirbtuvių brėžinio mastu. {{ui:Įstatyti kaip elementus}} įdeda dalis į modelį, o {{ui:PDF lapai}} išsaugo po vieną lapą kiekvienam skydui. Dydžius, atstumus ir antsparus nustato jūs: DetailCraft netikrina, ar jie atlaiko apkrovą. Žr. [Medienos ir plonasienių karkasų skydai](topic:framing-panels).
- **Tiekėjo atsargos ir tiekimo laikas.** Skirtukas {{ui:Tiekimas}} nuskaito tiekėjo atsargų sąrašą (CSV) ir kiekvienam pjovimo sąrašo pirkiniui rodo, ar jo pakanka sandėlyje ir kiek reikia laukti. Trūkumai ir vėluojantys profiliai rodomi {{ui:Problemos}} skiltyje. Nieko neužsakoma. Žr. [Tiekėjo atsargos ir tiekimo laikas](topic:supplier-stock).

### Analizė ir projektavimas

- **Kas lūžta pirmiausia?** Skirtuke {{ui:Analizė}} mygtukas randa valdančią stiprumo kombinaciją, silpniausią elementą, kiek apkrovos gali augti, kol pirmasis elementas pasiekia ribą, ir silpniausią galinę plokštę ar šlyties plokštę, kai žinomas jos varžtų šlyties stipris. Pirmiausia reikia kombinacijų ir projektavimo normos. Gniuždymas, bloko šlytis, suvirinimai ir svirtinis išlenkimas netikrinami. Prijungtas asistentas gali pateikti tą patį klausimą.
- **Gyvas režimas.** Pažymėkite {{ui:Gyvai: skaičiuoti iš naujo po kiekvieno pakeitimo}}, ir po kiekvieno pakeitimo rėmas skaičiuojamas iš naujo.
- **Betonas ir daugiau.** Plona kolona nepaslankiame rėme projektuojama pagal jos padidintą momentą (ACI 318-19 6.6.4.5). Seisminis periodas gali būti paimtas iš analizės Reilio metodu. Iš plokštelių sudaryta perdanga gauna plieną, kurio reikia kiekvienam sluoksniui pagal jos momentus, ir vienkryptį šlytį. Žr. [Betono elementų tikrinimas ir seisminės apkrovos](topic:concrete-and-seismic).
- **Inžinierius turi patikrinti.** Pamatų, betono ir rezultatai „Kas lūžta pirmiausia?“ yra pagalbinė priemonė. Vėjo apkrovų skaičiavimas dar neįgyvendintas.

### Visose programose

- **Kalbos.** Žinynas pateikiamas 54 kalbomis. Kalbos, išskyrus anglų, yra mašininiai vertimai, kol jų neperskaitys gimtakalbis; dešimt yra naujos (lietuvių, latvių, bosnių, marathi, telugu, albanų, afrikanų, filipiniečių, svahili, uzbekų).
- **Įrankių juostos eilutės.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Įrankių juostos eilutės}} leidžia pasirinkti perkėlimą, 2 eilutes arba 1 eilutę. Juosta, kuri jau telpa, lieka tokia pati; likusios slenka į šoną.
- **Savybių lentelė.** Pamato laukai naudoja bendrą lentelę: sutraukiamas kategorijas ir kompaktišką tankį. Įvedami aritmetiniai veiksmai, pvz., 2*450, vis dar veikia.
- **Įvesties įrenginiai.** Jutikliniu kilimėliu, rašikliu, 3D pele, valdikliu ir MIDI galima valdyti programas. Žr. [Naršymas 3D](topic:navigate-3d).
- **Problemų skydelis.** Aukščiau aprašytų naujų patikrų įspėjimai rodomi tame pačiame {{ui:Problemos}} skydelyje kaip ir anksčiau.
- **Prijunkite DI asistentą.** Jūsų pačių asistentas, prijungtas per CadCraft Studio, veikia visose aštuoniose programose ir mato tik tai, ką leidžiate. Prijungimas vienu paspaudimu, talpinamas jungtis ir jūsų API raktas Studio dar bus. Žr. [Naudoti DetailCraft su DI asistentu](topic:use-with-ai-assistants).

## Ištaisyta 0.8.1

- **Kalbos Studio.** Studio ir supakuoti leidimai gali keisti kalbą veikimo metu; anksčiau buvo tik anglų kalba. Dar neišbandyta visose platformose: praneškite, jei kalba nepasikeičia.
- **Pasirinkimas langu.** 0.8.1 diegimo programos jau turi 0.8 žiniatinklio versijos teisingą pasirinkimo langu elgseną; senesnė diegimo programa jos neturėjo.
- **Planšetės vertikaliai.** Likęs tinklelio aukštis atitenka drobei, o lapo išdėstymas prasideda nuo 760 px ar mažiau.

## Šioje versijoje dar nėra

- **Siųsti NC į mašiną** dar neišleista.
- **Vėjo apkrovos** betono patikroms dar neįgyvendintos, o betono ir pamatų patikras turi peržiūrėti inžinierius.
- **Kodo pasirašymas.** Windows diegimo programos ir macOS .dmg nepasirašyti, todėl Windows gali įspėti, o macOS reikalauja dešiniuoju pelės klavišu spustelėti ir pasirinkti Atidaryti.

Ankstesni pakeitimai – [Kas nauja 0.7 versijoje](topic:whats-new-0-7).
