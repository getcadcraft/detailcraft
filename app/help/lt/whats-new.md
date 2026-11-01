---
title: Kas naujo 0.7 versijoje
summary: Plieninių I formos profilių projektavimo patikrinimai su apkrovų deriniais pagal ASCE 7 arba EN 1990 ir elementų tikrinimas pagal AISC 360 arba EN 1993-1-1, plieninio modelio eksportas į USD, įrankis USD asistentams, Plieno juosta su didelių ir mažų mygtukų dalimis, skydeliai, kurie susitvarko, ir dialogai, kuriuos galima perkelti.
keywords: kas naujo, release notes, pakeitimų žurnalas, pakeitimai, 0.7, versija, naujos funkcijos, projektavimo patikrinimai, plieno projektavimas, naudojimas, utilisation, apkrovų deriniai, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurokodas, Nacionalinis priedas, stogo kintamoji apkrova, strėlės riba, usd, usda, usdc, usdz, openusd, asistentas, mcp, plieno juosta, juosta, padalytas mygtukas, vienetai, kompaktiškas, skydeliai, dialogai, portugalų
from: 17d1e0bb
---

Tai, kas pasikeitė DetailCraft 0.7 versijoje, palyginti su 0.6. 0.6 versijos karkaso analizė dabar turi antrą žingsnį: plieninių elementų tikrinimą pagal projektavimo normą.

## Nauja

### Įstrižiniai sujungimai (0.7.1)

- **Du I formos profiliai, susijungiantys kampu**, pavyzdžiui portalo mazgas arba kalnagalis: pažymėkite abu, pasirinkite {{ui:Įstrižinis sujungimas}} grupėje {{ui:Jungti}}, meniu {{ui:Daugiau}}, ir abu galai bus nupjauti plokštumoje, dalijančioje kampą pusiau. Varžtais sujungtos galinės plokštės ir sienelės standikliai yra žymimi langeliais naujame Įstrižinio sujungimo dialoge; jo numeruoti laukai atitinka jūsų jungties brėžinį, kuris formuojasi rašant. Įstrižinis sujungimas seka elementus, kai jie juda, ir tęsiasi į brėžinius, NC failus (įstrižinius pjūvius), IFC ir medžiagų sąrašą. Žr. [Įstrižiniai sujungimai](topic:mitres).

### Projektavimo patikrinimai

- **Apkrovų deriniai pagal normą.** Skirtuke {{ui:Analizė}} naujas blokas {{ui:Projektavimo patikrinimai}} turi {{ui:Projektavimo norma}}: ASCE 7 + AISC 360 (JAV, LRFD) arba EN 1990 + EN 1993-1-1 (Eurokodas). Kiekvienam apkrovos atvejui nurodykite jo tipą (nuolatinė, kintamoji, naujoji stogo kintamoji, sniego, vėjo, seisminė), paspauskite {{ui:Sudaryti derinius}}, ir DetailCraft užrašo normos stiprio ir eksploatacinių būklių derinius jūsų atvejams. Derinius, kuriuos įvedėte patys, lieka. Žr. [Sudaryti derinius](topic:design-checks#make-the-combinations).
- **Nacionalinio priedo reikšmės.** Eurokodui koeficientai pradedami nuo rekomenduojamų verčių; {{ui:Nacionalinio priedo reikšmės}} leidžia įvesti savo šalies reikšmes, ir jos išsaugomos modelyje. Žr. [Sudaryti derinius](topic:design-checks#make-the-combinations).
- **Elementų tikrinimas.** {{ui:Patikrinti elementus}} tikrina kiekvieną plieninį I formos profilį dėl tempimo, gniuždymo su išklupimu, lenkimo su šoniniu-sukamuoju išklupimu, šlyties, lenkimo kartu su ašine jėga ir strėlės pagal jūsų nustatytą {{ui:Strėlės riba}}. Lentelėje rodomas kiekvieno elemento išnaudojimas, lemiantis patikrinimas ir jo derinys, o elementai modelyje nuspalvinami (mėlyna, žalia, ochra, raudona, pilka – nepatikrinta). Žr. [Elementų tikrinimas](topic:design-checks#check-the-members).
- **Ataskaitoje.** {{ui:Ataskaita (PDF)}} ir {{ui:Ataskaita (CSV)}} prideda normų leidimus, nustatymus, išnaudojimą pagal elementą ir kiekvieną panaudotą straipsnį. Žr. [Ataskaita](topic:design-checks#the-report).
- **Pagalba, kol inžinierius jos neperžiūrėjo.** Ji naudoja tik pirmosios eilės jėgas. Vamzdžiai, kampuočiai, kanalai, suvirinti profiliai ir lieknos arba 4 klasės dalys rodomos kaip „nepatikrinta“ su priežastimi; sukimas, jungtys ir betonas netikrinami. Žr. [Kas nepatikrinama](topic:design-checks#what-is-not-checked).

### USD

- **Plieninio modelio eksportas į USD.** Grupėje {{ui:Išvestis}} {{ui:USD}} įrašo modelį kaip {{ui:Tekstas (.usda)}}, {{ui:Dvejetainis (.usdc)}} arba {{ui:Paketas (.usdz)}} atvaizdavimo programoms ir scenų surinkimui: kiekvienas surinkimas turi savo detales, kiekviena detalė yra savo skerspjūvis, nutiestas per visą ilgį su iškirpimais, ir kiekviena turi savo žymenį, profilį, markę, ilgį ir svorį. Varžtų skylės, varžtai, suvirinimai ir pamatai į USD tinklus neįtraukti. Žr. [Plieninio modelio eksportas į USD](topic:usd).

### DI asistentai

- **USD asistentams.** Jūsų pačių asistentas, prijungtas per CadCraft Studio, gali eksportuoti modelį į USD (`usd_export`), o Studio – jį įrašyti į aplanką, kurį leidote. Žr. [Ko gali prašyti asistentas](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Pakeista

- **Plieno juosta** turi didelius ir mažus mygtukus: didelis {{ui:Sija}} šalia mažų {{ui:Kolona}}, {{ui:Įstrižainė}} ir {{ui:Plokštė}} grupėje {{ui:Modeliavimas}} › {{ui:Elementai}}; didelis {{ui:Galinės plokštės}} grupėje {{ui:Detalizavimas}} › {{ui:Jungtys}}, o {{ui:Sujungimas}} ir {{ui:Jungiamoji plokštė}} dalijasi vienu padalytu mygtuku; didelis {{ui:Įklijuoti}} grupėje {{ui:Redaguoti}} › {{ui:Iškarpinė}}, o {{ui:Įklijuoti vietoje}} ir {{ui:Dubliuoti}} yra už grupės rodyklės. {{ui:Gamyba}} › {{ui:Mainai}} turi {{ui:Eksportuoti USD}} šalia IFC. Kitų meniu stiliai atrodo kaip anksčiau. Žr. [Meniu, klavišai ir pelė](topic:menus-keys-and-mouse#the-three-styles).
- [Analizuoti karkasą](topic:frame-analysis) dabar nukreipia į projektavimo patikrinimus, o jo deriniai gali būti sudaromi pagal normą.

## Visose programose

- **Vienetai.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Vienetai}} turi po vieną sąrašą ilgiui, plotui, tūriui, kampui ir nuolydžiui, su tiksliais dydžiais, kuriuos nurodo vienetų apibrėžimai (JAV pėda yra atskiras vienetas). Išjunkite nenaudojamus vienetus – jie išeina iš vienetų sąrašų; pažymėkite vieną žvaigždute – ir naujas darbas prasideda juo. Failas visada išlaiko savo vienetą. DetailCraft savi langeliai dar nepaklūsta sąrašams: jo ilgiai vis dar įvedami milimetrais. Žr. [Vienetai, įvedamos reikšmės ir vienetų sąrašai](common:unit-lists).
- **Tankesnis išdėstymas ir skydeliai, kurie susitvarko.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Išdėstymo tankis}} › {{ui:Kompaktiškas}} telpa daugiau ekrane (jutikliniai ekranai ir telefonai išlaiko didelius mygtukus). Kiekvienas šoninis skydelis turi ploną antraštės juostą: nutempkite ją, kad skydelis prisitvirtintų arba plūduriuotų; paleiskite ant kito skydelio juostos, kad dalintumėtės vienu rėmu kaip skirtukais; prisekite, kad jis slystų iki krašto; arba paslėpkite ir grąžinkite iš krašto. Žr. [Skydelių išdėstymas](common:arrange-panels#make-the-layout-denser).
- **Dialogai juda.** Nutempkite dialogą už antraštės juostos iš kelio brėžiniui; jis grįš ten, kur paliksite. Dukart spustelėkite antraštės juostą, kad jį vėl centruotumėte. Žr. [Dialogo perkėlimas](common:arrange-panels#move-a-dialog).
- **Receptai DI asistentams.** Dešimt pavyzdinių užklausų jūsų pačių asistentui (sutvarkyti brėžinį, sudaryti rinkinį, patikrinti brėžinius, uždavinėti klausimus apie modelį, sudėti kiekių skaičiavimą, išbandyti detalės variantą…), kiekviena su įrankiais, kuriuos ji kviečia, ir leidimais, kurių jai reikia, ir kiekviena pakartota mūsų testais. Programose DI nėra. Žr. [Receptai DI asistentams](common:assistants-recipes).
- **Kalbos.** **Português (Portugal)** naujai pasirenkama {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Kalba}}. Ji, **Português (Brasil)**, **Español (México)** ir **Bahasa Indonesia** dabar turi visus programų žodžius kaip juodraščius, kurių dar neperžiūrėjo gimtoji kalba. Žinyno temos pateiktos anglų kalba.
- **CadCraft Studio** nurodo, kodėl nepavyko patikrinti atnaujinimo (dar nėra failo jūsų sistemai, nėra tinklo, neteisingas parašas), o ne tiesiog „Atlikta“, ir nustoja rodyti uždarytą „Kas naujo“ kortelę, kol nėra naujesnės versijos.

## Dar nėra šioje versijoje

- **0.7 nėra pasirašyta kodu.** Pasirašymas ir Microsoft Store paketas perkelti į 0.8, nes sertifikato patvirtinimas dar negautas. Patikrinkite SHA-256 šalia kiekvieno failo adresu getcadcraft.com/download. Windows sistemoje, jei SmartScreen sustabdo diegimo programą, pasirinkite {{ui:Daugiau informacijos}}, tada {{ui:Vis tiek paleisti}}. Mac sistemoje pirmą kartą dešiniuoju pelės klavišu spustelėkite CadCraft Studio ir pasirinkite {{ui:Atidaryti}}. CadCraft Studio dar nėra programų parduotuvėje, o iPad ar iPhone versijos dar nėra.
- Kampo ir nuolydžio sąrašai {{ui:Vienetai}} yra išsaugomi, bet nė vienas langelis jų dar nenaudoja.
- **Projektavimo patikrinimai dar nebuvo peržiūrėti inžinieriaus.** Mūsų testai juos lygina su spausdintomis lentelių reikšmėmis ir ranka atliktais skaičiavimais, o ne dar su projektavimo vadovo darbo pavyzdžiais. Iki peržiūros jie yra pagalba: svarbius elementus patikrinkite rankiniu būdu.
- Projektavimo patikrinimai naudoja pirmosios eilės jėgas (be antrosios eilės poveikių) ir tikrina tik I formos profilius. Dar neįgyvendinta: vamzdžiai, kampuočiai, kanalai, suvirinti profiliai, lieknos (AISC) arba 4 klasės (Eurokodas) dalys lenkiant, sukimas, šlyties išklupimas kartu su lenkimu, jungtys, nuovargis, gaisras, seisminis detalizavimas ir betonas. Lieknas gniuždomas elementas palieka gniuždymo patikrinimus nuošalyje, ir elementas rodomas kaip „praeina, iš dalies patikrinta“.
- Karkaso analizė vis dar pirmosios eilės ir tiesinė, ir inžinierius jos dar nebandė tikrame darbe.
- Varžtų skylės, varžtai, suvirinimai ir pamatai nėra USD eksporte.

Viskas kita yra [Kas dar neįgyvendinta](topic:not-built-yet).
