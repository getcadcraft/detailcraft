---
title: Mis on uut versioonis 0.7
summary: Terasest I-profiilide projekteerimiskontrollid koormuskombinatsioonidega ASCE 7 või EN 1990 järgi ning elementide kontrollid normidega AISC 360 või EN 1993-1-1 järgi, terasmudeli eksport USD-na, USD-abivahend, Teras-lint suurte ja väikeste nuppudega, paneelid, mis end ära peidavad, ja dialoogid, mida saab liigutada.
keywords: mis on uut, väljalaske märkmed, muudatuste logi, muudatused, 0.7, versioon, uued funktsioonid, projekteerimiskontrollid, terasprojekteerimine, kasutusaste, koormuskombinatsioonid, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, rahvuslik lisa, katuse muutuv koormus, läbipainde piirang, usd, usda, usdc, usdz, openusd, assistent, mcp, teraslint, lint, jagatud nupp, ühikud, tihe, paneelid, dialoogid, portugali keel
from: 17d1e0bb
---

Siin on, mis muutus versioonis DetailCraft 0.7 võrreldes versiooniga 0.6. Versiooni 0.6 raamanalüüsil on nüüd teine samm: terasest elementide kontroll projekteerimisnormi järgi.

## Uus

### Nurkliited (0.7.1)

- **Kaks I-profiili, mis kohtuvad nurga all**, nagu portaalnurk või harjajoon: vali mõlemad, vali rühmas {{ui:Ühenda}} menüüst {{ui:Veel}} {{ui:Vältliide}}, ja mõlemad otsad lõigatakse tasandil, mis poolitab nurga. Poltidega kokku ühendatud otsaplaadid ja ribijäigendid on uues dialoogis {{ui:Vältliide}} märkeruudud; selle nummerdatud väljad vastavad sinu liite joonisele, mis koostatakse sisestamise ajal. Vältliide järgib elemente, kui need liiguvad, ning kandub joonistele, NC-failidesse (kaldlõiked), IFC-sse ja materjalinimekirja. Vt [Vältliited](topic:mitres).

### Projekteerimiskontrollid

- **Koormuskombinatsioonid normist.** Vahekaardil {{ui:Analüüs}} on uus plokk {{ui:Projekteerimiskontrollid}}, millel on {{ui:Projekteerimisnorm}}: ASCE 7 + AISC 360 (USA, LRFD) või EN 1990 + EN 1993-1-1 (Eurocode). Anna igale koormusjuhule liik (alaline, muutuv, uus katuse muutuv koormus, lumi, tuul, seismiline), vajuta {{ui:Koosta kombinatsioonid}} ja DetailCraft kirjutab normi tugevus- ja kasutuspiirseisundi kombinatsioonid sinu koormusjuhtude põhjal. Kombinatsioonid, mille ise sisestasid, jäävad alles. Vt [Kombinatsioonide koostamine](topic:design-checks#make-the-combinations).
- **Rahvusliku lisa väärtused.** Eurocode puhul alustavad tegurid soovitatud väärtustest; {{ui:Rahvusliku lisa väärtused}} lubab sisestada oma riigi väärtused ning need salvestatakse mudelisse. Vt [Kombinatsioonide koostamine](topic:design-checks#make-the-combinations).
- **Kontrolli elemente.** {{ui:Kontrolli elemendid}} kontrollib iga terasest I-profiili pingele, survele koos väänduvusega, paindele koos külgmise väändega, nihkele, paindele koos normaaljõuga ja läbipainde järgi, võrreldes sinu seatud {{ui:Läbipainde piirang}}ga. Tabel näitab iga elemendi kasutusastet, määravat kontrolli ja selle kombinatsiooni ning elemendid on mudelil värvitud (sinine, roheline, oker, punane, hall kontrollimata). Vt [Elementide kontrollimine](topic:design-checks#check-the-members).
- **Aruandes.** {{ui:Aruanne (PDF)}} ja {{ui:Aruanne (CSV)}} lisavad normide väljaanded, seaded, kasutusastme elemendi kaupa ja iga kasutatud punkti. Vt [Aruanne](topic:design-checks#the-report).
- **Abivahend, kuni inseneri ülevaatus.** See kasutab ainult esimese järgu jõude. Torud, nurkprofiilid, kanalid, keevitatud kujud ning karksed või 4. klassi osad on „kontrollimata“ koos põhjusega; vääne, ühendused ja betoon ei ole kontrollitud. Vt [Mida ei kontrollita](topic:design-checks#what-is-not-checked).

### USD

- **Terasmudeli eksport USD-na.** {{ui:USD}} rühmas {{ui:Väljund}} kirjutab mudeli vormingutena {{ui:Tekst (.usda)}}, {{ui:Binaarne (.usdc)}} või {{ui:Pakett (.usdz)}} renderdusprogrammidele ja stseenide kokkupanekuks: iga koost hoiab oma detaile, iga detail on profiil, mis kulgeb piki oma pikkust koos väljalõigetega, ning igal on oma detailimärgis, profiil, teraseklass, pikkus ja kaal. Poldiaugud, poldid, keevised ja vundamendid ei ole USD-võrkudes. Vt [Terasmudeli eksport USD-na](topic:usd).

### Tehisintellekti assistendid

- **USD assistentidele.** Sinu enda assistent, mis on ühendatud CadCraft Studio kaudu, saab mudelit USD-na eksportida (`usd_export`) ning Studios kirjutada selle kausta, mille lubasid. Vt [Mida assistent võib paluda](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Muudetud

- **Teras-lint** on suurte ja väikeste nuppudega: suur {{ui:Tala}} koos väikeste {{ui:Post}}, {{ui:Diagonaal}} ja {{ui:Plaat}} rühmas {{ui:Modelleerimine}} › {{ui:Elemendid}}; suur {{ui:Otsaplaadid}} rühmas {{ui:Detailimine}} › {{ui:Ühendused}}, kusjuures {{ui:Skarv}} ja {{ui:Sõlmeplaat}} jagavad ühte jagatud nuppu; suur {{ui:Kleebi}} rühmas {{ui:Muuda}} › {{ui:Lõikelaud}}, kusjuures {{ui:Kleebi samasse kohta}} ja {{ui:Dubleeri}} on grupi noole taga. {{ui:Valmistus}} › {{ui:Vahetus}} sisaldab {{ui:Ekspordi USD}} IFC kõrval. Teised menüüstiilid näevad välja nagu varem. Vt [Menüüd, klahvid ja hiir](topic:menus-keys-and-mouse#the-three-styles).
- [Analüüsi raami](topic:frame-analysis) jaotis suunab nüüd projekteerimiskontrollidele ja selle kombinatsioonid saab koostada normi järgi.

## Kõigis rakendustes

- **Ühikud.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Ühikud}} sisaldab iga pikkuse, pindala, mahu, nurga ja kalde jaoks ühte loendit, täpsete suurustega, mille ühikute definitsioonid annavad (USA mõõdistusjalg on oma ühik). Lülita välja ühikud, mida ei kasuta, ja need kaovad ühikute loenditest; märgi üks tärniga ja uus töö algab sellest. Fail hoiab alati oma ühikut. DetailCraft-i enda väljad ei järgi veel loendeid: selle pikkused sisestatakse endiselt mm-des. Vt [Ühikud, sisestatud väärtused ja ühikute loendid](common:unit-lists).
- **Tihedam paigutus ja paneelid, mis end ära peidavad.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Paigutuse tihedus}} › {{ui:Tihe}} mahutab ekraanile rohkem (puuteekraanid ja telefonid säilitavad oma suured nupud). Igal külgpaneelil on kitsas pealkirjariba: lohista see, et paneel dokkida või ujuvaks teha; lase see teise paneeli ribale, et jagada üks raam vahekaartidena; kinnita see, et see libiseks servale ära; või peida see ja too servast tagasi. Vt [Paneelide paigutamine](common:arrange-panels#make-the-layout-denser).
- **Dialoogid liiguvad.** Lohista dialoogi selle pealkirjaribast joonise eest eemale; see tuleb tagasi sinna, kust lahkusid. Topeltklõps pealkirjaribal tsentreerib selle uuesti. Vt [Dialoogi liigutamine](common:arrange-panels#move-a-dialog).
- **Retseptid tehisintellekti assistentidele.** Kümme läbitöötatud päringut sinu enda assistendile (korrasta joonis, joonista komplekt, kontrolli jooniseid, küsi mudelilt küsimusi, summeeri koguste arvestus, proovi detaili varianti…), igaüks koos tööriistadega, mida ta kutsub, ja õigustega, mida ta vajab; iga üks on meie testidega uuesti läbi mängitud. Rakendused ei sisalda tehisintellekti. Vt [Retseptid tehisintellekti assistentidele](common:assistants-recipes).
- **Keeled.** **Português (Portugal)** on uus valik {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Keel}} all. See, **Português (Brasil)**, **Español (México)** ja **Bahasa Indonesia** on nüüd kõigi rakenduste sõnadega, mustanditena, mida emakeelne kasutaja pole veel üle vaadanud. Abi teemad on inglise keeles.
- **CadCraft Studio** ütleb, miks värskenduse kontroll ebaõnnestus (failid sinu süsteemi jaoks pole veel valmis, võrk puudub, allkiri on vale), mitte lihtsalt „Valmis“, ning ei too enam tagasi kaarti Mis on uut, mille suleti, kuni on uuem versioon.

## Pole selles versioonis veel

- **0.7 ei ole koodiga allkirjastatud.** Allkirjastamine ja Microsoft Store'i pakk liikusid versioonile 0.8, sest sertifikaadi kinnitus ei ole veel tulnud. Kontrolli iga faili kõrval olevat SHA-256 lehel getcadcraft.com/download. Windowsis, kui SmartScreen peatab paigaldaja, vali {{ui:Rohkem infot}}, siis {{ui:Käivita siiski}}. Macis vali esimesel korral CadCraft Studio paremklõpsuga ja {{ui:Ava}}. CadCraft Studio ei ole veel rakenduste poes ning iPadi ega iPhone'i versiooni ei ole veel.
- Nurga ja kalde loendid vahekaardil {{ui:Ühikud}} salvestatakse, aga ükski väli neid veel ei loe.
- **Projekteerimiskontrollid ei ole veel insener üle vaadanud.** Meie testid võrdlevad neid trükitud tabeliväärtuste ja käsitsi arvutatud valemitega, mitte veel projekteerimisjuhendi töötatud näidetega. Kuni ülevaatuseni on need abivahendid: kontrolli käsitsi olulisi elemente.
- Projekteerimiskontrollid kasutavad esimese järgu jõude (ilma teise järgu mõjudeta) ning kontrollivad ainult I-profiile. Ei ole tehtud: torud, nurkprofiilid, kanalid, keevitatud kujud, karksed (AISC) või 4. klassi (Eurocode) osad paindel, väändel, nihkel koos paindega, ühendused, väsimus, tulekindlus, seismiline detailimine ja betoon. Karge osa survel jätab survekontrollid välja ja element näidatakse „läbib, osaliselt kontrollitud“.
- Raamanalüüs on endiselt esimese järgu ja lineaarne ning insener pole seda veel päris töös proovinud.
- Poldiaugud, poldid, keevised ja vundamendid ei ole USD-ekspordis.

Kõik muu on jaotises [Mida veel ei ole](topic:not-built-yet).
