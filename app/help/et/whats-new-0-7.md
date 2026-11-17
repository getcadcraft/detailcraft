---
title: Mis on uut versioonis 0.7 (varasem)
summary: Terasest I-profiilide projekteerimiskontrollid koormuskombinatsioonidega ASCE 7 või EN 1990 järgi ning elementide kontrollid AISC 360 või EN 1993-1-1 järgi, terasmudeli eksport USD-vormingus, USD-tööriist abilisele, terasriba suurte ja väikeste nuppudega, paneelid, mis end kokku peidavad, ning dialoogid, mida saab liigutada.
keywords: mis on uut 0.7, varasem väljalase, väljalaskemärkmed, muudatusloend, muudatused, 0.7, versioon, uued funktsioonid, projekteerimiskontrollid, terasprojekteerimine, kasutusaste, koormuskombinatsioonid, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, rahvuslik lisa, katuse kasuskoormus, läbipainde piir, usd, usda, usdc, usdz, openusd, abiline, mcp, terasriba, riba, jagatud nupp, ühikud, tihe, paneelid, dialoogid, portugali keel
from: 54a7a8f0
---

Siin on, mis muutus DetailCraft 0.7-s võrreldes versiooniga 0.6. Versiooni 0.6 raamanalüüsil on nüüd teine samm: terasest elementide kontroll projekteerimisnormi järgi.

## Uus

### Vältliited (0.7.1)

- **Kaks nurga all kokku jooksvat I-profiili**, näiteks portaalraami nurk või harja: vali mõlemad, vali rühma {{ui:Connect}} menüüst {{ui:More}} {{ui:Mitre}} ning mõlemad otsad lõigatakse nurga poolitava tasandi järgi. Omavahel poltidega kinnitatud {{ui:End plates}} ja liivajäigastid on uues dialoogis {{ui:Mitre}} märkeruudud, mille nummerdatud väljad vastavad sinu sõlme joonisele, mis koostatakse sisestamise ajal. Vältliide liigub koos elementidega, kandub joonistele, NC-failidele (kaldlõiked), IFC-sse ja materjalinimekirja. Vaata [Vältliited](topic:mitres).

### Projekteerimiskontrollid

- **Koormuskombinatsioonid normist.** Vahekaardil {{ui:Analysis}} on uus plokk {{ui:Design checks}} ja selle {{ui:Design code}}: ASCE 7 + AISC 360 (USA, LRFD) või EN 1990 + EN 1993-1-1 (Eurocode). Anna igale koormusjuhule tema liik (alaline, kasuskoormus, uus katuse kasuskoormus, lumi, tuul, seismiline), vajuta {{ui:Make combinations}} ja DetailCraft kirjutab sinu juhtumite normi tugevus- ja kasutuspiirseisundi kombinatsioonid. Kombinatsioonid, mille ise sisestasid, jäävad alles. Vaata [Koosta kombinatsioonid](topic:design-checks#make-the-combinations).
- **Rahvusliku lisa väärtused.** Eurocode'i teguritel on algus soovitatud väärtustes; {{ui:National Annex values}} võimaldab sisestada oma riigi väärtused, mis salvestatakse mudelisse. Vaata [Koosta kombinatsioonid](topic:design-checks#make-the-combinations).
- **Kontrolli elemente.** {{ui:Check members}} kontrollib iga terasest I-profiili pinge, survet koos väänamisega, painutamist koos külgmise kõverdumisega, nihet, painutamist koos telgjõuga ja läbipainet sinu määratud {{ui:Deflection limit}} järgi. Tabelis on iga elemendi kasutusaste, valitsev kontroll ja selle kombinatsioon ning mudelil on elemendid värvitud (sinine, roheline, okre, punane, hall = kontrollimata). Vaata [Kontrolli elemente](topic:design-checks#check-the-members).
- **Aruandes.** {{ui:Report (PDF)}} ja {{ui:Report (CSV)}} lisavad normide väljaanded, sätted, kasutusastme elementide kaupa ja iga kasutatud punkti. Vaata [Aruanne](topic:design-checks#the-report).
- **Abi, kuni insener on üle vaadanud.** See kasutab ainult esimese järgu jõude. Torud, nurgikud, kanalid, keevitatud profiilid ning karcsad või klassi 4 osad loetakse kui „kontrollimata“ koos põhjusega; väänet, ühendusi ja betooni ei kontrollita. Vaata [Mida ei kontrollita](topic:design-checks#what-is-not-checked).

### USD

- **Terasmudeli eksport USD-vormingus.** Rühma {{ui:Output}} nupp {{ui:USD}} kirjutab mudeli vormingus {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} või {{ui:Package (.usdz)}} renderdusprogrammidele ja stseeni kokkupanekuks: iga koost sisaldab oma osi, iga osa on oma ristlõige piki pikkust, lõigatud sisselõigetega, ning igal osal on oma märgis, profiil, mark, pikkus ja kaal. Poltiaugud, poldid, keevised ja vundamendid USD-võrkudes ei ole. Vaata [Ekspordi terasmudel USD-vormingus](topic:usd).

### Tehisintellekti abilised

- **USD abilistele.** Sinu enda abiline, mis on ühendatud CadCraft Studio kaudu, saab mudeli eksportida USD-vormingus (`usd_export`) ja Studios kirjutada selle kausta, mille sa lubasid. Vaata [Mida abiline võib küsida](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Muudetud

- **Terasriba** on suurte ja väikeste nuppudega: suur {{ui:Beam}} koos väikeste {{ui:Column}}, {{ui:Brace}} ja {{ui:Plate}} jaotises {{ui:Modeling}} › {{ui:Members}}; suur {{ui:End plates}} jaotises {{ui:Detailing}} › {{ui:Connections}}, kus {{ui:Splice}} ja {{ui:Gusset}} jagavad ühte jagatud nuppu; suur {{ui:Paste}} jaotises {{ui:Edit}} › {{ui:Clipboard}}, kus {{ui:Paste in place}} ja {{ui:Duplicate}} on rühma noole taga. Jaotises {{ui:Fabrication}} › {{ui:Exchange}} on {{ui:Export USD}} IFC kõrval. Teised menüüstiilid on välimuselt samad. Vaata [Menüüd, klahvid ja hiir](topic:menus-keys-and-mouse#the-three-styles).
- [Raamistiku analüüs](topic:frame-analysis) viitab nüüd projekteerimiskontrollidele ja selle kombinatsioone saab koostada normi järgi.

## Kõigis rakendustes

- **Ühikud.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} annab igale pikkuse, pindala, mahu, nurga ja kalde jaoks oma loendi täpsete suurustega, mis tulevad ühikute definitsioonidest (USA miilijalg on oma ühik). Lülita välja need ühikud, mida ei kasuta, ja need kaovad ühikute loenditest; märgi üks tärniga ja uus töö algab sellega. Fail hoiab alati oma ühikut. DetailCraft'i enda väljad ei järgi loendeid veel: selle pikkused sisestatakse endiselt millimeetrites. Vaata [Ühikud, sisestatud väärtused ja ühikute loendid](common:unit-lists).
- **Tihedam paigutus ja paneelid, mis end kokku peidavad.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} mahutab ekraanile rohkem (puuteekraanid ja telefonid säilitavad oma suured nupud). Igal külgpaneelil on kitsas pealkirjariba: lohista see, et paneel kinnituda või ujuma panna; too see teise paneeli ribale, et jagada üks raam sakkidena; kinnita see, et ta libiseks serva; või peida ja too serva pealt tagasi. Vaata [Paneelide paigutamine](common:arrange-panels#make-the-layout-denser).
- **Dialoogid liiguvad.** Lohista dialoog pealkirjaribast joonise eest eemale; ta tuleb tagasi sinna, kust lahkusid. Topeltklõps pealkirjaribal tsentreerib selle uuesti. Vaata [Dialoogi liigutamine](common:arrange-panels#move-a-dialog).
- **Retseptid tehisintellekti abilistele.** Kümme näidisülesannet sinu enda abilisele (joonise korrastamine, komplekti joonistamine, joonistele ülevaatus, mudelile küsimused, koguste arvestuse kokkuvõte, detaili variandi proovimine …), igaüks koos tööriistadega, mida ta kasutab, ja vajalike õigustega, ning meie testid mängivad need läbi. Rakendused ise ei sisalda tehisintellekti. Vaata [Retseptid tehisintellekti abilistele](common:assistants-recipes).
- **Keeled.** **Português (Portugal)** on uus valik {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. See, **Português (Brasil)**, **Español (México)** ja **Bahasa Indonesia** on nüüd kõigi rakenduse sõnadega, kuid mustanditena, mida emakeelne kasutaja pole veel üle vaadanud. Abiteemad on inglise keeles.
- **CadCraft Studio** ütleb, miks uuenduse kontroll ebaõnnestus (failid sinu süsteemile pole veel saadaval, puudub võrk, vale allkiri), selle asemel et lihtsalt öelda „Valmis“. Samuti ei too ta enam tagasi suletud teavitust „Mis on uut“, kuni on ilmunud uuem väljalase.

## Pole veel selles versioonis

- **0.7 pole koodiga allkirjastatud.** Allkirjastamine ja Microsoft Store'i pakett lükkati versioonile 0.8, sest sertifikaadi kontroll pole veel läbi. Kontrolli iga faili kõrval olevat SHA-256 väärtust aadressil getcadcraft.com/download. Windowsis, kui SmartScreen paigaldaja peatab, vali {{ui:More info}} ja seejärel {{ui:Run anyway}}. Macis vali esimesel korral CadCraft Studio paremklõpsuga ja {{ui:Open}}. CadCraft Studio ei ole veel üheski rakenduste poes ning iPadi ega iPhone'i versiooni ei ole veel.
- Loendid {{ui:Units}} all nurga ja kalde jaoks salvestatakse, aga ükski väli neid veel ei loe.
- **Projekteerimiskontrollid pole insener veel üle vaadanud.** Meie testid võrdlevad neid trükitud tabeliväärtustega ja käsitsi tehtud valemitega, mitte veel projekteerimisjuhendi näidislahendustega. Kuni ülevaatuseni on need abi: kontrolli käsitsi olulisi elemente.
- Projekteerimiskontrollid kasutavad esimese järgu jõude (ilma teise järgu mõjudeta) ning kontrollivad ainult I-profiile. Pole valminud: torud, nurgikud, kanalid, keevitatud profiilid, karcsad (AISC) või klassi 4 osad (Eurocode) painutamisel, väänamine, nihkekõver koos painutamisega, ühendused, väsimus, tulekindlus, seismiline detailimine ja betoon. Karcas osa survel jätab survekontrollid välja ja element loetakse „läbib, osaliselt kontrollitud“.
- Raamanalüüs on endiselt esimese järgu ja lineaarne ning insener ei ole seda veel reaalsel projektil proovinud.
- Poltiaugud, poldid, keevised ja vundamendid ei ole USD-eksporti kaasatud.

Kõik muu on jaotises [Mida pole veel tehtud](topic:not-built-yet).
