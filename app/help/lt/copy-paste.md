---
title: Kopijuoti, įklijuoti ir dubliuoti
summary: Pasirinkite kelias detales, nukopijuokite jas su jų skylėmis, išpjovomis ir jungtimis ir įklijuokite ašių susikirtime, poslinkiu, vietoje arba kitame skirtuke. Iškirpkite, dubliuokite, naikinkite ir pasirinkite viską.
keywords: kopijuoti, įklijuoti, iškirpti, dubliuoti, iškarpinė, įklijuoti vietoje, pasirinkti viską, nieko nepasirinkti, kelių pasirinkimas, Shift spustelėjimas, keli, kartoti laukelį, kopijuoti rėmą, poslinkis, naikinti kelis, meniu Redaguoti, meniu Daugiau
from: f25f1829
---

Juostos grupėje {{ui:Redaguoti}} yra {{ui:Anuliuoti}}, {{ui:Perdaryti}}, {{ui:Kopijuoti}} ir {{ui:Įklijuoti}}. Jos meniu {{ui:Daugiau}} yra likusios komandos: {{ui:Iškirpti}}, {{ui:Kopijuoti}}, {{ui:Įklijuoti}}, {{ui:Įklijuoti vietoje}}, {{ui:Dubliuoti}}, {{ui:Naikinti}}, {{ui:Pasirinkti viską}} ir {{ui:Nieko nepasirinkti}}, kiekviena su savo klavišu. Mygtukas ar meniu punktas, kurio šiuo metu negalima naudoti, yra pilkas; užveskite ant jo pelės žymeklį, kad perskaitytumėte priežastį (pavyzdžiui, „dar nieko nenukopijuota“).

Kiekvienas įklijavimas, iškirpimas, dubliavimas ir naikinimas yra vienas žingsnis: vienas {{key:Mod+Z}} viską atšaukia.

## Pasirinkti kelias detales

- Spustelėkite detalę, kad ją pasirinktumėte. Laikydami {{key:Shift}} (arba {{key:Ctrl}}, arba {{key:Mod}}) spustelėkite daugiau detalių, kad jas pridėtumėte; tokiu pat būdu spustelėkite jau pasirinktą, kad ją atšauktumėte.
- {{key:Mod+A}} arba {{ui:Pasirinkti viską}} pasirenka visus elementus, jungtis ir pamatus.
- {{key:Esc}} arba {{ui:Nieko nepasirinkti}} panaikina pasirinkimą.

Kai pasirinkta kelios detalės, skydelio {{ui:Savybės}} antraštėje rašoma „4 pasirinkta“ (arba kiek yra), o toliau išvardijami elementai pagal tipą, jungtys, pamatai ir bendras plieno svoris, taip pat mygtukai {{ui:Kopijuoti}}, {{ui:Dubliuoti}} ir {{ui:Naikinti}}.

## Kopijuoti

1. Pasirinkite norimus elementus ir pamatus.
2. Pasirinkite {{ui:Kopijuoti}} arba paspauskite {{key:Mod+C}}.

Kas nukopijuojama:

- Kiekvienas elementas visas: profilis, medžiaga, galai, padėtis, pasukimas, pavadinimas, skylės ir išpjovos. Pasirinktinis profilis, kurį jis naudoja, nukopijuojamas kartu.
- Kiekvienas pamatas visas: dydis, betonas, apatinis tinklas ir jungiamieji strypai.
- Galinės plokštės ir pagrindo plokštės, bet tik tada, kai nukopijuojami visi elementai, kuriuos jungtis sujungia: sijos galinei plokštei reikia sijos ir jos kolonos. Būsenos juostoje rašoma, kiek jungčių liko nenukopijuota. Norėdami sąmoningai palikti jungtis, išjunkite **Kopijuoti galines plokštes ir pagrindo plokštes kartu su jų elementais** [DetailCraft parametruose](topic:settings).

Jungties atskirai nukopijuoti negalima; pasirinkite jos elementus. Kad kitos sandūros gautų tą pačią jungtį, naudokite {{ui:Panašūs}} (žr. [Galinės plokštės](topic:end-plates#copy-it-to-every-similar-joint)).

Nukopijuota lieka šioje naršyklėje, kol nenukopijuosite ko nors kito. Kitas DetailCraft skirtukas ar langas toje pačioje naršyklėje gali ją įklijuoti, todėl rėmą galite nukopijuoti iš vieno modelio ir įklijuoti į kitą.

## Įklijuoti ašių susikirtime

1. Pasirinkite {{ui:Įklijuoti}} arba paspauskite {{key:Mod+V}}.
2. Perkelkite žymeklį ant vaizdo. Punktyrinis nukopijuoto objekto kontūras seka ašių susikirtimą, artimiausią žymekliui.
3. Spustelėkite susikirtimą. Nukopijuoto objekto bazinis taškas (jo apatinis kampas: mažiausios x, y ir z reikšmės visko, kas nukopijuota) nusileidžia ten.

Įklijuotos detalės lieka pasirinktos, todėl galite įklijuoti dar kur nors arba jas pakeisti. {{key:Esc}} atšaukia įklijavimą; nukopijuota lieka iškarpinėje. {{ui:Planas}} ir {{ui:Fasadas}} padeda lengviau pataikyti į reikiamą susikirtimą.

:::tip
Norėdami pakartoti laukelį, pasirinkite jo elementus (arba viską su {{key:Mod+A}}), nukopijuokite, įklijuokite ir spustelėkite susikirtimą, esantį vienu laukeliu toliau nuo to, kur buvo kopijos apatinis kampas.
:::

## Įklijuoti iš klaviatūros

Įklijavimo metu skydelyje {{ui:Savybės}} rodoma, kas yra iškarpinėje, ir dvi formos:

- {{ui:Įklijuoti poslinkiu (mm, nuo originalo)}}: įveskite x, y ir z ir pasirinkite {{ui:Įklijuoti šiuo poslinkiu}}. Pradinis poslinkis imamas iš [DetailCraft parametrų](topic:settings).
- {{ui:Įklijuoti į ašių susikirtimą}}: pasirinkite raidinę ašį, skaitinę ašį ir lygį bei pasirinkite {{ui:Įklijuoti čia}}. Bazinis taškas nukeliamas ten.

## Įklijuoti vietoje

{{ui:Įklijuoti vietoje}} ({{key:Mod+Shift+V}}) padeda kopiją tiksliai ten, kur ji buvo nukopijuota. Naudokite po {{ui:Iškirpti}} arba norėdami perkelti detales iš kito modelio į tą pačią vietą. Jei originalai dar yra, kopija atsiduria ant jų ir būsenos juosta įspėja: perkelkite kopijas pagal jų {{ui:Pradžia}} ir {{ui:Galas}} skydelyje {{ui:Savybės}} arba atšaukite.

## Dubliuoti

{{ui:Dubliuoti}} ({{key:Mod+D}}) nukopijuoja pasirinkimą ir iškart jį įklijuoja, perkeltą pagal poslinkį iš [DetailCraft parametrų](topic:settings) (pradžioje 6000 mm pagal x). Iškarpinės turinys nekeičiamas. Kopijos lieka pasirinktos, todėl dar kartą paspaudus {{key:Mod+D}} iš jų padaromas kitas.

## Iškirpti ir naikinti

- {{ui:Iškirpti}} ({{key:Mod+X}}) nukopijuoja pasirinkimą ir tada jį ištrina. Įklijuokite jį ten, kur jis turi būti.
- {{ui:Naikinti}} ({{key:Delete}} arba {{key:Backspace}}) ištrina pasirinkimą. Ištrinus elementą, ištrinamos ir jo jungtys.

## Žymenys po įklijavimo

Elementų ir surinkimų žymenys niekada nesaugomi; DetailCraft juos vėl sunumeruoja iš modelio po kiekvieno pakeitimo ([kaip suteikiami žymenys](topic:mark-rules)). Todėl:

- Kopija, kuri yra ta pati detalė kaip originalas (tas pats profilis, markė, pjovimo ilgis, skylės ir išpjovos), dalijasi originalo žymeniu, o skaičius lentelėje {{ui:Elementų žymenys}} ir medžiagų sąraše padidėja.
- Kopija, kuri pasirodo kitokia, gauna savo žymenį. Pavyzdžiui, sija, įklijuota be galinių plokščių, nėra nukirpta atgal, todėl yra kitokia detalė. Žymenys sunumeruojami iš naujo visame modelyje, todėl ir kitų detalių numeriai gali pasikeisti.

Kiekvienas įklijuotas elementas, skylė, išpjova, jungtis ir pamatas gauna naują identifikatorių, todėl niekas modelyje nėra bendras tarp kopijos ir originalo.

## Jei iškarpinė atmetama

Iškarpinės turinys tikrinamas taip pat kruopščiai kaip atidaromas modelio failas: kas nėra tinkama DetailCraft detalė, pašalinama, o būsenos juosta praneša, kas tai buvo. Iškarpinė, kurią užpildė naujesnis DetailCraft ar kitas šaltinis, atmetama su pranešimu ir nieko neįklijuojama. Jei privatus langas negali išsaugoti kopijos naršyklės saugykloje, kopija vis tiek veikia tame skirtuke.
