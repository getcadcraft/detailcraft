---
title: Montavimo planas ir filmas
summary: Įveskite kraną ir jo apkrovos lentelę, matykite kiekvieną kėlimą, patikrintą pagal lentelę fazių tvarka, ir įrašykite montavimo filmą, kuris veikia be ryšio bet kuriame telefone.
keywords: montavimas, kranas, kėlimas, apkrovos lentelė, spindulys, talpa, įtaisai, seka, filmas, animacija, telefonas, be ryšio, kėlimo planas
from: fa7b0133
---

Skirtukas {{ui:Montavimas}} paverčia modelį montavimo tvarka ir tikrina kiekvieną kėlimą pagal kraną, kurį aprašote. Planas sudaromas iš skaičių, kuriuos įvedate. Tai nėra kėlimo planas: jį daro kėlimo specialistas ir krano operatorius.

## Aprašykite kraną

Pasirinkite {{ui:Pridėti kraną}}, tada užpildykite:

- **Krano centras X ir Y:** kur stovi kranas, milimetrais.
- **Aukščiausias kablys:** kiek aukštai gali pakilti kablys, milimetrais. 0 reiškia, kad ribos netikrinamos.
- **Kablio blokas ir įtaisai, nesantys lentelėje:** kilogramais, nuskaičiuojami nuo lentelės prieš pridedant apkrovą, kai jūsų lentelėje to dar nėra.
- **Apkrovos lentelė:** viena eilutė vienai eilutei: spindulys metrais, o po jo talpa kilogramais. Eilutes nukopijuokite iš paties krano lentelės.

Lentelė skaitoma taip, kaip skaitoma apkrovos lentelė: talpa, nurodyta spinduliui, galioja iki to spindulio. Apkrova tarp dviejų eilučių gauna **tolimesnės** eilutės talpą, niekada reikšmę tarp jų. Pirmosios eilutės viduje galioja pirmosios eilutės talpa. Už paskutinės eilutės kranas visai nebepakelia. Kėlimui svarbus spindulys yra didesnis iš paėmimo spindulio ir nustatymo spindulio.

Antras kranas pridedamas tuo pačiu būdu. Kiekvienas kėlimas skiriamas pirmajam kranui, kuris jį gali pakelti jūsų rezervo ribose.

## Ką daro planas

- Vienas kėlimas kiekvienam surinkimui: sija su savo galinėmis plokštėmis, kolona su pagrindo plokšte, laiptai.
- Tvarka seka fazes, paskui aukštį po aukščio: kolonos, jų laikomos sijos, įstrižinės sijos, plokštės, laiptai. Detalė niekada nekeliama anksčiau nei tai, kas ją laiko.
- Kiekvienas kėlimas rodo savo svorį (bendrą modelio svorį ir {{ui:Kėlimo įranga, pridedama prie kiekvieno svorio}}), spindulį, lentelės dalį, kurią jis naudoja, ir minutę, kai jis prasideda.
- {{ui:Didžiausia apkrovos lentelės dalis, kurią gali naudoti kėlimas}} yra jūsų saugos rezervas. Kėlimas, viršijantis jį, pažymimas **Viršija jūsų ribą**; viršijantis lentelę – **Viršija lentelę**; už paskutinio lentelės spindulio – **Už lentelės ribų**; o detalė, aukštesnė už kablį – **Kablys per žemas**.

Skylės ir išpjovos iš svorių neatimamos, o varžtai padengiami kabinimo procentu.

## Problemos

Kiekvienas kėlimas, kuris viršija, yra už ribų, per aukštas arba nustatytas prieš tai, ką jis laiko, rodomas skydelyje {{ui:Problemos}}. Sija be jungties, kuri ją laikytų, įrašoma kaip reikalaujanti laikinos atramos.

## Įrašykite filmą

{{ui:Įrašyti filmą}} sukuria vieną HTML failą. Atidarykite jį bet kurioje naršyklėje, taip pat telefone, be tinklo ir paskyros: paleiskite ir sustabdykite, vilkite juostą iki bet kurios minutės, sukite modelį pirštu, didinkite suspaudžiant. Antraštėje nurodomas kiekvienas kėlimas, jo svoris, spindulys ir lentelės dalis. Modelis nupieštas paprastomis dėžėmis: jis rodo tvarką ir kėlimus, o ne tikrus profilius.

Ta pati lentelė įrašoma kaip CSV mygtuku {{ui:CSV}}. Kranas ir lentelė įrašomi modelio faile, o kiekvienas pakeitimas yra vienas atšaukiamas žingsnis.
