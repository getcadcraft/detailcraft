---
title: Atėję iš kitos detalizavimo programinės įrangos
summary: Kaip pilno detalizavimo paketo įpročiai atitinka DetailCraft ir kokie skirtumai pagauna patyrusius detalizuotojus.
keywords: perjungimas, perkėlimas, įprastas, darbo eiga, palyginimas, skirtumai, numeravimas, komponentai, katalogas, brėžiniai, įpročiai
from: 39639a5d
---

Jei detalizuojate Tekla Structures, didžioji DetailCraft dalis atrodys pažįstama: tinkleliai, lygiai, katalogo profiliai, detalės ir surinkimai, jungtys, numeravimas, NC failai, IFC. Mastelis labai skirtingas: Tekla Structures yra pilna gamybos sistema, o DetailCraft – maža, ankstyvos stadijos naršyklės programa, kuri atlieka keletą darbų nuo pradžios iki pabaigos. Šis puslapis parodo, kur jūsų įpročiai tinka, o kur ne.

:::tip
Jei jūsų rankos pažįsta Tekla Structures juostą, pasirinkite meniu stilių {{ui:Plieno juosta}} nustatymuose {{ui:Parametrai}} › {{ui:DetailCraft}} › {{ui:Meniu, klavišai ir pelė}}: skirtukai Modeling, Detailing, Edit, Drawings, Fabrication ir View, o vidurinis mygtukas slenka vaizdą. Jei ateinate iš AutoCAD ir mėgstate rašyti komandas, {{ui:Klasikinis braižymas}} prideda komandų eilutę (BEAM, COLUMN, ENDPLATE, ZOOM …). Žr. [Meniu, klavišai ir pelė](topic:menus-keys-and-mouse).
:::

## Greita atitiktis

| Įprasta jums | DetailCraft |
|---|---|
| Tinklelių kūrimas su koordinatėmis tinklelio dialoge | {{ui:Tinkleliai}} kairiajame skydelyje: linijų žymos ir tarpai tarp linijų, o ne absoliučios koordinatės. Numeruotos linijos eina viena kryptimi, raidinės – kita |
| Lygiai kaip tinklelio Z koordinatės | Atskiras {{ui:Lygiai}} sąrašas: pavadinimas ir aukštis kiekvienoje eilutėje, taikomas su {{ui:Taikyti lygius}} |
| Taškų pasirinkimas bet kur su prisegimais | Spustelėjimai prisega tik prie tinklelio sankirtų. Taškai, esantys ne ant tinklelio, įvedami į elemento {{ui:Galai (x, y, z mm)}} |
| Kolonos, sijos ir plokštės komandos | {{ui:Kolona}} ({{key:C}}), {{ui:Sija}} ({{key:B}}), {{ui:Įstrižainė}} ({{key:R}}), {{ui:Plokštė}} ({{key:P}}), {{ui:Pamatas}} ({{key:F}}) |
| Detalės savybių dialogas (dukart spustelėkite detalę) | Vienas spustelėjimas: dešinėje esantis skydelis {{ui:Savybės}} visada aktyvus; dialogo nėra, nėra mygtukų Keisti ar Taikyti |
| Padėtis plokštumoje, pasukimas ir gylio nustatymai | {{ui:Padėtis}} (plieno viršus, centras arba apačia linijoje) ir {{ui:Pasukimas (°)}}. Atskirų horizontalių poslinkių nėra |
| Profilių katalogas | Fiksuotas 2,311 paskelbtų dydžių sąrašas (AISC W, S, C, L, HSS, Pipe; Europos IPE, HEA, HEB, UPN; UK UB, UC, PFC, EA, UEA, SHS, RHS, CHS ir šaltai formuoti tuščiaviduriai profiliai), taip pat parametrinės plokštės ir jūsų pačių {{ui:Pasirinktinis profilis}} pjūviai |
| Medžiagų katalogas | Septynios markės sąraše: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Jungties komponento taikymas ir jo dialogas | Pažymėkite sijas, pasirinkite {{ui:Galinės plokštės}}. Nustatymai rodomi skydelyje {{ui:Savybės}}. Egzistuoja tik dvi jungtys (galinė plokštė prie kolonos flanšo, pagrindo plokštė) |
| Automatinė jungtis arba jungties kopijavimas į panašias jungtis | Pažymėkite jungtį, pasirinkite {{ui:Taikyti panašiems (n)}} |
| Numeravimas su serijomis ir pradiniais numeriais | Komandos nėra: žymos atsinaujina savaime po kiekvieno pakeitimo, su fiksuotais priešdėliais c, b, br, p ir C, B, BR, P |
| Varžtų ir skylių dialogai | Skylės įvedamos pagal paviršių ir padėtį. Varžtai atsiranda tik iš jungčių |
| Pjovimo, pritaikymo ir daugiakampio pjovimo įrankiai | Įpjovos (viršuje arba apačioje, abiejuose galuose) tik dvitavriams profiliams. Jungčių nukirtimai atliekami automatiškai |
| Ataskaitos ir šablonai | Trys fiksuotos ataskaitos skirtukuose apačioje ir CSV atsisiuntimai |
| Brėžinių kūrimas ir brėžinių sąrašas | Vienas dirbtuvių brėžinys kiekvienai detalės žymai, visi kuriami vienu metu, peržiūrimi, tada atsisiunčiami kaip vienas PDF arba lapas po lapo. Nieko neišsaugoma ir nekeičiama |
| NC failų eksportas | {{ui:NC failai}}: vienas DSTV failas kiekvienai detalės žymai, tik dvitavriai ir plokštės, suglaudinti archyve |
| IFC eksportas | {{ui:IFC}}: IFC4 visam modeliui, su armatūra |
| Armatūra bet kurioje betoninėje detalėje | Armatūra tik stačiakampiuose plokščiuose pamatuose, JAV strypų dydžiai, su apatiniu tinklu ir paleidimo strypais |
| Modelis išsaugomas projekto aplanke, kelių naudotojų | Vienas `.detailcraft.json` failas, kurį atsisiunčiate. Vienas naudotojas, jūsų kompiuteryje |
| Veiksmų istorija | {{key:Mod+Z}} ir {{key:Mod+Y}}, iki 200 žingsnių, saugoma, kol atidarote ar pradedate kitą modelį |

## Skirtumai, dėl kurių žmonės klysta

### Žymos keičiasi savaime

Numeravimo žingsnio nėra. Žymos perskaičiuojamos po kiekvieno pakeitimo, todėl visada aktualios, bet jos taip pat gali persinumeruoti: pridėkite koloną, ir vakar buvusi c3 dabar gali būti c4. Senoms žymoms išsaugoti „numeravimo istorijos“ nėra. Baikite modelį, tada išduokite BOM, NC failus ir dirbtuvių brėžinius kartu iš vieno išsaugoto failo.

### Vidurinis pelės mygtukas priartina, o neslenka

3D vaizde: vilkimas kairiuoju – sukimas, vilkimas dešiniuoju – slinkimas, ratukas – priartinimas, o vilkimas vidurio mygtuku taip pat priartina. Laikant {{key:Shift}} ir vilkiant kairiuoju, slenkama taip pat. Ratukas priartina prie vaizdo vidurio, o ne prie žymeklio. Sukimo centro pasirinkimo nėra: modelis sukasi aplink vaizdo vidurį. Žr. [Judėjimas 3D vaizde](topic:navigate-3d).

### Kolonos pagal numatytuosius nustatymus orientuotos viena kryptimi

Esant 0° pasukimui, kolonos flanšai nukreipti išilgai numeruotų tinklelio krypties. Sijos, einančios tarp raidinių tinklelio linijų, įsiremia į sienelę, o galinės plokštės ten atmetamos („Beams framing into a column web are not built yet“). Pasukite tas kolonas 90° prieš pridedant jungtis.

### Fasadai tik raidinėse linijose

{{ui:Fasadas}} žiūri tik išilgai raidinių tinklelio linijų. Nėra žiūrų išilgai numeruotų linijų, nėra išsaugotų vaizdų ir darbo plokštumų. Naudokite {{ui:3D}} arba {{ui:Pridėti pagal ašis}} rėmams ant numeruotų linijų.

### Pažymėjimas, kopijavimas ir perkėlimas

Pažymėkite kelias dalis su {{key:Shift}}+spustelėjimu arba {{key:Mod+A}}, tada kopijuokite, iškirpkite, įklijuokite (ant tinklelio sankirtos, įvestu poslinkiu arba vietoje) ir dubliuokite jas kartu su jungtimis ([Kopijuoti, įklijuoti ir dubliuoti](topic:copy-paste)). Nėra lango pažymėjimo, pažymėjimo filtro, perkėlimo, veidrodinio atspindžio ar masyvo, o savybės keičiamos po vieną elementą skydelyje {{ui:Savybės}}.

### Tinkleliai neperkelia elementų

Elementai išlaiko savo koordinates, kai keičiate tinklelio tarpus; niekas nejuda kartu su tinklelio linijomis. Pakeiskite tinklelį prieš dėdami plieną arba vėliau redaguokite kiekvieno elemento galų koordinates.

### Jungtys nesuprojektuotos

Dvi jungtys deda plokštes, skyles, varžtus ir suvirinimus pagal jūsų įvestus skaičius. Jokio projekto tikrinimo nėra, tik krašto ir atstumų įspėjimai (pagal EN 1993-1-8 3.3 lentelę).

### Skylės 3D vaizde nepjaunamos

Skylės rodomos kaip tamsūs kištukai. Jos yra tikros skylės NC failuose, dirbtuvių brėžiniuose ir IFC faile. Įpjovos vaizde išpjaunamos.

### Svoriai bruto

Plieno svoris neatima skylių ar įpjovų, o varžtų svoris neįskaičiuojamas.

### Tik milimetrai

Viskas įvedama ir rodoma milimetrais, net AISC profiliams. Profilių pavadinimai išlaiko paskelbtą formą (W12x50, HSS6x6x1/4).

### Brėžinių valdyti nereikia

Brėžinių sąrašo, brėžinių redaktoriaus, bendrųjų planų ar surinkimo brėžinių nėra. Dirbtuvių brėžinys sukuriamas, kai to paprašote, ir atsisiunčiamas; jei norite jį pakeisti, pakeiskite modelį ir sukurkite iš naujo.

### Veikia naršyklėje

Išsaugojimas atsisiunčia failą. Klaviatūros trumpiniai, kuriuos naršyklė pasilieka sau, negali būti naudojami. Jūsų modeliai niekada nepalieka jūsų kompiuterio: žr. [Kur keliauja jūsų failai](common:your-files).

## Ką toliau daryti dabartinėje programinėje įrangoje

Šiuo metu DetailCraft tinka mažiems rėmams, idėjos patikrinimui, mokymui arba NC failams ir dirbtuvių brėžiniams paprastiems sijų ir kolonų darbams. Sudėtingas jungtis, bendruosius planus, montavimo brėžinius, kelių naudotojų projektus ir viską, kas išvardyta [Kas dar nepadaryta](topic:not-built-yet), palikite programinėje įrangoje, kurią naudojate dabar.
