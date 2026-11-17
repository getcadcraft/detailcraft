---
title: Bendrieji išdėstymo ir surinkimo brėžiniai
summary: Sudarykite iš modelio planus, fasadus ir po vieną surinkimo brėžinį kiekvienam surinkimo žymeniui A4–A1 arba ANSI B–D lapuose, išleiskite juos su revizijų raidėmis ir atsisiųskite kaip PDF, DWG arba DXF.
keywords: paslėptos linijos, paslėptų linijų šalinimas, punktyras, revizijos debesis, debesys, revizijos trikampis, pamato varžtų planas, inkaro strypai, strypų žiniaraštis, pagrindo plokštių žiniaraštis, ašių išdėstymas, išleidimas, revizija, rev, revizijų lentelė, pakartotinis išleidimas, išleidimo žurnalas, perdavimo lapas, dwg, dxf, CAD failas, eksportuoti brėžinius, brėžiniai, bendrasis išdėstymas, planas, fasadas, surinkimo brėžinys, lapo dydis, popieriaus dydis, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, spausdinti, mastelis, antraštės blokas, modelio nuoroda
from: 709f8604
---

Pasirinkite {{ui:Brėžiniai}} grupėje {{ui:Išvestis}}. DetailCraft sudaro visą rinkinį iš dabartinio modelio. Nieko neįrašoma: pakeiskite modelį, vėl atverkite {{ui:Brėžiniai}}, ir rinkinys sudaromas iš naujo.

## Kas yra rinkinyje

- **Planai** – vienas kiekvienam aukštui, kuriame yra ką nors, žiūrint iš viršaus.
- **Fasadai** – vienas kiekvienai ašiai, prie kurios yra elementų ne toliau kaip 1 m.
- **Pamato varžtų planas**, kai modelyje yra pagrindo plokščių: kiekviena pagrindo plokštė, matoma iš viršaus, su savo kolona ir inkaro strypais, ašys su matmenimis, tipinė kiekvieno strypų išdėstymo detalė (BP1, BP2 …) su strypų tarpais ir kraštų atstumais bei du žiniaraščiai: inkaro strypai pagal žymenį (R1, R2 …: kiekis, skersmuo, ilgis, išsikišimas virš plokštės, įleidimas, markė) ir pagrindo plokštės pagal ašį (kolona, išdėstymas, plokštė, strypai, plokštės viršus). Kolona, nesančioje ašyje, nurodoma koordinatėmis.
- **Surinkimo brėžiniai** – po vieną kiekvienam surinkimo žymeniui: priekinis, viršutinis ir galinis vaizdai, grandininiai matmenys iki skylių ir plokščių kraštų, detalių sąrašas, laisvi varžtai ir strypai bei suvirinimo ir skylių pastabos. Kiekviena suvirinta plokštė priekiniame vaizde turi kampinio suvirinimo simbolį (AWS A2.4): rodyklė nukreipta į sandūrą, trikampis po nuorodos linija reiškia rodyklės pusę, skaičius kairėje yra suvirinimo dydis mm, o apskritimas, kur rodyklė susitinka su linija, reiškia suvirinimą aplinkui.

**Paslėptos linijos.** Planuose ir fasaduose nepaisoma elemento linijų, kurias visiškai priekyje esantis elementas uždengia (sija, matoma iš galo už kolonos). Surinkimo brėžiniuose plokštė rodoma punktyrine linija ten, kur ją uždengia pagrindinis elementas: už sienelės priekiniame vaizde (žiūrint iš elemento −u pusės) ir po viršutiniu flanšu viršutiniame vaizde. Elementai, esantys tame pačiame gylyje arba persidengiantys gylyje, rodomi visi.

Kiekvienas lapas turi antraštės bloką su brėžinio numeriu, masteliu, modelio pavadinimu, data, lapo numeriu su lapo dydžiu ir modelio nuoroda: iš įrašyto modelio sudarytu kodu, kad išspausdintą brėžinį būtų galima susieti su modeliu, iš kurio jis gautas.

## Pasirinkite lapo dydį

Pasirinkite dydį sąraše {{ui:Brėžiniai}} lango viršuje: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) arba {{ui:ANSI D}} (22 × 34 in). Visi lapai yra horizontalūs. Rinkinys iš karto sudaromas iš naujo naujam dydžiui, ir tas pats dydis naudojamas gamybiniams brėžiniams. Jis taip pat yra [DetailCraft parametruose](topic:settings#drawings), ir ši naršyklė jį prisimena.

- Didesnis lapas piešiamas didesniu mastelių. Mastelis visada standartinis (1:10, 1:20, 1:25, 1:50, 1:100 ir t. t.).
- Tekstas kiekviename lape yra tokio pat dydžio, todėl jis lieka įskaitomas išspausdinus.
- Mažame lape ilgas, plonas surinkimas gali turėti didesnį mastelį pagal gylį nei pagal ilgį. Vaizdo pavadinime tada rodomi abu mastelių, ir galioja matmenys.

## Išleiskite brėžinius ir revizijas

Eilutė virš peržiūros nurodo, kokioje būsenoje yra rodomas lapas: **Dar neišleista**, **rev. B, išleista ...; nepakitus nuo tada** arba raudonai **Pakeista nuo rev. B: reikia išleisti iš naujo**. Lapų sąraše išleisti lapai pažymimi revizija, o lapai, kuriems reikia pakartotinio išleidimo, – atskirai.

- Įveskite, kam skirtas išleidimas (iš pradžių įrašoma „Išleista gamybai“), ir pasirinkite {{ui:Išleisti šį lapą}} arba {{ui:Išleisti pakeistus lapus}} – visiems naujiems lapams arba tiems, kurie pakeisti nuo paskutinio išleidimo.
- Pirmasis lapo išleidimas yra revizija A, po to B, C ir t. t. (I ir O praleidžiamos).
- Antraštės blokas rodo brėžinio numerį su jo revizija („A-B1  rev. B“), o šalia jo revizijų lentelė rodo naujausius išleidimus: revizija, data ir aprašymas. Mažame lape rodoma tiek, kiek telpa.
- Lapas „pasikeičia“, kai pakinta tai, kas jame nubraižyta: perkeltas elementas, nauja skylė, pervardytas žymuo. Data, lapų skaičius ir pati revizijų lentelė nelaikomi pakeitimu. Pakeitus lapo dydį, pasikeičia visi lapai.
- Išleidimo žurnalas įrašomas modelio faile, o išleidimas yra vienas atšaukiamas žingsnis. [KISS failas](topic:kiss-export) perduoda kiekvieno brėžinio naujausią reviziją.

### Revizijų debesys

Nuo antrojo lapo išleidimo kiekvienas pakeistas elementas ar pamatas braižomas revizijos debesyje su revizijos trikampiu, kuriame yra raidė.

- Kol lapas pakeistas nuo paskutinio išleidimo, debesys rodo pakeitimus nuo to laiko, o trikampyje – artėjanti revizija (rev. B išleista ir pakeista: trikampiuose C).
- Išleidus, debesys lieka tos revizijos lape, kaip ir išspausdintame rinkinyje, kol lapas vėl pasikeis.
- Kiekvienas lapas debesimis apibrėžia tik jame rodomus pakeitimus. Planuose ir fasaduose skylės ir išpjovos nerodomos, todėl jie apibrėžia elementą, kuris buvo perkeltas, pasuktas ar pakeistas arba kurio žymuo pasikeitė. Surinkimo brėžiniuose ir pamato varžtų plane debesimis apibrėžiamos ir naujos ar perkeltos skylės bei išpjovos.
- Pervardytas žymuo taip pat skaičiuojamas: kai pakeitimas sijai suteikia naują surinkimą, sijos, kurių žymuo pakito (B1 į B2), planuose ir fasaduose apibrėžiamos debesimis.
- Ištrinta detalė nieko neapibrėžia.
- Lapai, išleisti prieš atsirandant revizijų debesims (DetailCraft 0.4), debesis pradeda rodyti nuo kito išleidimo.
- Debesys rodomi PDF, DXF ir DWG atsisiuntimuose ir patys niekada nelaikomi pakeitimu.

## Atsisiuntimas

Pasirinkite formatą sąraše šalia mygtukų, tada {{ui:Šis lapas}} – rodomam lapui arba {{ui:Visi lapai}} – visam rinkiniui.

- **PDF**: spausdinti arba siųsti. {{ui:Visi lapai}} sukuria vieną PDF, kurio kiekvienas puslapis yra vienas lapas, kiekvienas pasirinkto dydžio.
- **DWG**, 2018, 2013, 2010, 2007, 2004 arba 2000 formatu: lapams atverti CAD programoje. Senesnei programai pasirinkite senesnį formatą.
- **DXF (R12)**: versija, kurią atveria beveik kiekviena CAD programa.

DWG ar DXF lapas nubraižomas pilnu dydžiu: vienas brėžinio vienetas popieriuje yra vienas milimetras, todėl jis spausdinamas 1:1 ir kiekvienas vaizdas išlaiko savo pavadinime nurodytą mastelį. Kiekvienas pieštukas yra atskiras sluoksnis: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID ir t. t., su savo linijos storiu (DWG) ir brūkšniais. Žodžiai yra tekstas DetailCraft teksto stiliumi (Arial). Matmenys yra linijos ir skaičiai, kuriuos matote, o ne matmenų objektai. {{ui:Visi lapai}} sudeda DWG ar DXF failus į vieną zip archyvą, po vieną failą kiekvienam lapui.

:::note
DXF R12 neturi linijų storių ir užpildų: sluoksniai išlaiko savo pavadinimus, todėl spausdinant pieštukus nustatykite pagal sluoksnį, o užpildytos figūros praleidžiamos (būsenos juosta praneša, kiek jų).
:::

Spausdinkite 100 % (be „pritaikyti prie puslapio“) to paties dydžio popieriuje, jei norite, kad nurodyti mastelių galiotų.
