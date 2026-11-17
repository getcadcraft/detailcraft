---
title: Kas nauja 0.7 versijoje (ankstesnė)
summary: Plieninių dvitavrių profilių projektavimo patikrinimai pagal apkrovų derinius iš ASCE 7 ar EN 1990 ir elementų patikrinimai pagal AISC 360 ar EN 1993-1-1, plieninio modelio eksportas į USD, pagalbinė priemonė USD, plieno juosta su didelius ir mažus mygtukus, skydeliai, kurie susitvarko, ir judantys dialogai.
keywords: kas nauja 0.7, ankstesnė versija, versijos pastabos, pakeitimų žurnalas, pakeitimai, 0.7, versija, naujos funkcijos, projektavimo patikrinimai, plieno projektavimas, panaudojimas, naudojimo koeficientas, apkrovų deriniai, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurokodas, Nacionalinis priedas, stoginė kintama apkrova, deformacijos riba, usd, usda, usdc, usdz, openusd, asistentas, mcp, plieno juosta, juosta, skaidomasis mygtukas, vienetai, kompaktiškas, skydeliai, dialogai, portugalų
from: 54a7a8f0
---

Tai, kas pakeista DetailCraft 0.7 versijoje, palyginti su 0.6. 0.6 versijos rėmo analizė dabar turi antrą žingsnį: plieninių elementų patikrinimą pagal projektavimo normą.

## Naujovės

### Įstrižiniai sujungimai (0.7.1)

- **Du dvitavriai profiliai, susitinkantys kampu**, pavyzdžiui rėmo kelio mazge ar kraigo linijoje: pasirinkite abu, grupės {{ui:Jungti}} meniu {{ui:Daugiau}} pasirinkite {{ui:Įstrižinis sujungimas}}, ir abu galai nupjaunami plokštumoje, dalijančioje kampą pusiau. Galinės plokštės, sujungtos varžtais, ir briaunos standikliai yra žymimieji langeliai naujame įstrižinio sujungimo dialoge, kurio numeruoti laukeliai atitinka jūsų mazgo brėžinį, sudaromą rašant. Įstrižinė seka elementus, kai jie perkeliami, ir perkeliama į brėžinius, NC failus (įstrižinis pjovimas), IFC ir medžiagų sąrašą. Žr. [Įstrižiniai sujungimai](topic:mitres).

### Projektavimo patikrinimai

- **Apkrovų deriniai pagal normą.** Skirtuke {{ui:Analizė}} naujasis blokas {{ui:Projektavimo patikrinimai}} turi {{ui:Projektavimo norma}}: ASCE 7 + AISC 360 (JAV, LRFD) arba EN 1990 + EN 1993-1-1 (Eurokodas). Kiekvienam apkrovos atvejui nurodykite jo rūšį (nuolatinė, naudinga, naujoji stogo naudinga, sniegas, vėjas, seisminė), paspauskite {{ui:Sudaryti derinius}}, ir DetailCraft įrašys normos stiprumo ir eksploatacinių būsenų derinius iš jūsų atvejų. Patys įvesti deriniai išlieka. Žr. [Sudaryti derinius](topic:design-checks#make-the-combinations).
- **Nacionalinio priedo reikšmės.** Eurokodui koeficientai pradedami nuo rekomenduojamų reikšmių; {{ui:Nacionalinio priedo reikšmės}} leidžia įvesti savo šalies reikšmes, ir jos išsaugomos modelyje. Žr. [Sudaryti derinius](topic:design-checks#make-the-combinations).
- **Patikrinti elementus.** {{ui:Patikrinti elementus}} tikrina kiekvieną plieninį dvitavrį profilį: tempimą, gniuždymą su išlinkimu, lenkimą su šoniniu sukamuoju išlinkimu, šlytį, lenkimą su ašine jėga ir deformaciją pagal nustatytą {{ui:Deformacijos riba}}. Lentelėje rodomas kiekvieno elemento panaudojimas, lemiantis patikrinimas ir jo derinys, o elementai modelyje nuspalvinami (mėlyna, žalia, ochros, raudona, pilka – nepatikrinta). Žr. [Patikrinti elementus](topic:design-checks#check-the-members).
- **Ataskaitoje.** {{ui:Ataskaita (PDF)}} ir {{ui:Ataskaita (CSV)}} prideda normų leidimus, nustatymus, panaudojimą pagal elementus ir kiekvieną naudotą punktą. Žr. [Ataskaita](topic:design-checks#the-report).
- **Pagalbinė priemonė, kol ją patikrins inžinierius.** Ji naudoja tik pirmosios eilės jėgas. Vamzdiniai, kampuočiai, kanalai, suvirinti profiliai ir lieknos ar 4 klasės dalys rodo „nepatikrinta“ su priežastimi; sukimas, jungtys ir betonas nepatikrinami. Žr. [Kas nepatikrinama](topic:design-checks#what-is-not-checked).

### USD

- **Plieninio modelio eksportas kaip USD.** Grupėje {{ui:Išvestis}} esantis {{ui:USD}} įrašo modelį kaip {{ui:Tekstas (.usda)}}, {{ui:Dvejetainis (.usdc)}} arba {{ui:Paketas (.usdz)}} vaizdo atvaizdavimo programoms ir scenų surinkimui: kiekvienas surinkimas turi savo detales, kiekviena detalė yra savo profilis, nutiestas išilgai ilgio su iškirptomis išpjovomis, ir kiekviena turi savo detalės žymą, profilį, markę, ilgį ir svorį. Varžtų skylių, varžtų, suvirinimų ir pamatų USD tinkluose nėra. Žr. [Plieninio modelio eksportas kaip USD](topic:usd).

### DI asistentai

- **USD asistentams.** Jūsų pačių asistentas, prijungtas per CadCraft Studio, gali eksportuoti modelį kaip USD (`usd_export`), o Studio jį įrašyti į aplanką, kurį leidote. Žr. [Ką asistentas gali prašyti](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Pakeista

- **Plieno juosta** turi didelius ir mažus mygtukus: didelis {{ui:Sija}} šalia mažų {{ui:Kolona}}, {{ui:Įstrižainė}} ir {{ui:Plokštė}} skirtuke {{ui:Modeliavimas}} › {{ui:Elementai}}; didelis {{ui:Galinės plokštės}} skirtuke {{ui:Detalizavimas}} › {{ui:Jungtys}}, o {{ui:Sujungimas}} ir {{ui:Jungiamoji plokštė}} naudoja vieną skaidomąjį mygtuką; didelis {{ui:Įklijuoti}} skirtuke {{ui:Redaguoti}} › {{ui:Iškarpinė}}, o {{ui:Įklijuoti vietoje}} ir {{ui:Dubliuoti}} yra už grupės rodyklės. {{ui:Gamyba}} › {{ui:Mainai}} turi {{ui:Eksportuoti USD}} šalia IFC. Kiti meniu stiliai atrodo kaip anksčiau. Žr. [Meniu, klavišai ir pelė](topic:menus-keys-and-mouse#the-three-styles).
- [Analizuoti rėmą](topic:frame-analysis) dabar nukreipia į projektavimo patikrinimus, o jo deriniai gali būti sudaromi pagal normą.

## Visose programose

- **Vienetai.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Vienetai}} turi po vieną sąrašą ilgiui, plotui, tūriui, kampui ir nuolydžiui, su tiksliais dydžiais pagal vienetų apibrėžtis (JAV geodezinė pėda yra atskiras vienetas). Išjunkite vienetus, kurių niekada nenaudojate, ir jie išnyksta iš vienetų sąrašų; pažymėję vieną žvaigždute, nauji darbai prasidės juo. Failas visada išlaiko savo vienetą. DetailCraft langeliai dar nesekia sąrašų: jų ilgiai vis dar įvedami milimetrais. Žr. [Vienetai, įvedamos reikšmės ir vienetų sąrašai](common:unit-lists).
- **Tankesnis išdėstymas ir skydeliai, kurie susitvarko.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Išdėstymo tankis}} › {{ui:Kompaktiškas}} telpa daugiau ekrane (jutikliniai ekranai ir telefonai išlaiko didelius mygtukus). Kiekvienas šoninis skydelis turi siaurą pavadinimo juostą: nutempkite, kad prisegtumėte arba atplėštumėte skydelį, numeskite ant kito skydelio juostos, kad dalytųsi vienu rėmu kaip skirtukais, prisekite, kad jis paslystų į kraštą, arba paslėpkite ir grąžinkite iš krašto. Žr. [Skydelių išdėstymas](common:arrange-panels#make-the-layout-denser).
- **Dialogai juda.** Nutempkite dialogą už pavadinimo juostos iš brėžinio kelio; jis grįš ten, kur paliksite. Dukart spustelėkite pavadinimo juostą, kad jį vėl centruotumėte. Žr. [Perkelti dialogą](common:arrange-panels#move-a-dialog).
- **Receptai DI asistentams.** Dešimt pavyzdinių užklausų jūsų asistentui (sutvarkyti brėžinį, išspausdinti rinkinį, patikrinti brėžinius, užduoti klausimus apie modelį, susumuoti kiekių skaičiavimą, išbandyti detalės variantą…), kiekviena su įrankiais, kuriuos ji iškviečia, ir reikalingais leidimais, ir kiekviena pakartota mūsų testais. Programose DI nėra. Žr. [Receptai DI asistentams](common:assistants-recipes).
- **Kalbos.** **Português (Portugal)** yra nauja {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Kalba}} pasirinkimuose. Ji, **Português (Brasil)**, **Español (México)** ir **Bahasa Indonesia** dabar turi visus programų žodžius kaip juodraščius, dar neperžiūrėtus gimtosios kalbos specialisto. Žinyno temos yra anglų kalba.
- **CadCraft Studio** nurodo, kodėl atnaujinimo patikrinimas nepavyko (dar nėra failo jūsų sistemai, nėra tinklo, neteisingas parašas), o ne tik „Atlikta“, ir nebeberodo uždarytos „Kas nauja“ kortelės, kol nėra naujesnės versijos.

## Dar neįtraukta į šią versiją

- **0.7 nepasirašyta kodu.** Parašas ir Microsoft Store paketas perkelti į 0.8, nes sertifikato patvirtinimas dar negautas. Patikrinkite SHA-256 šalia kiekvieno failo getcadcraft.com/download. Windows sistemoje, jei SmartScreen sustabdo diegimo programą, pasirinkite {{ui:Daugiau informacijos}}, tada {{ui:Vis tiek paleisti}}. Mac kompiuteryje pirmą kartą dešiniuoju pelės klavišu spustelėkite CadCraft Studio ir pasirinkite {{ui:Atidaryti}}. CadCraft Studio dar nėra programų parduotuvėje, o iPad ar iPhone versijos dar nėra.
- Kampų ir nuolydžių sąrašai {{ui:Vienetai}} išsaugomi, bet kol kas jų nenaudoja joks langelis.
- **Projektavimo patikrinimų dar nėra patikrinęs inžinierius.** Mūsų testai lygina juos su spausdintomis lentelių reikšmėmis ir rankiniu būdu atliktais skaičiavimais, bet dar ne su projektavimo vadovo pavyzdžiais. Kol nebus peržiūros, tai pagalbinė priemonė: svarbius elementus tikrinkite rankiniu būdu.
- Projektavimo patikrinimai naudoja pirmosios eilės jėgas (be antrosios eilės poveikio) ir tikrina tik dvitavrius profilius. Dar nepadaryta: vamzdiniai, kampuočiai, kanalai, suvirinti profiliai, lieknos (AISC) ar 4 klasės (Eurokodas) dalys lenkiant, sukimas, šlyties išlinkimas kartu su lenkimu, jungtys, nuovargis, gaisras, seisminis detalizavimas ir betonas. Lieknas gniuždomas elementas palieka gniuždymo patikrinimus nepatikrintus, ir elementas rodomas kaip „išlaiko, iš dalies patikrinta“.
- Rėmo analizė vis dar pirmosios eilės ir tiesinė, o inžinierius jos dar nebandė tikroje statybos darbo vietoje.
- Varžtų skylių, varžtų, suvirinimų ir pamatų nėra USD eksporte.

Visa kita yra [Kas dar nepadaryta](topic:not-built-yet).
