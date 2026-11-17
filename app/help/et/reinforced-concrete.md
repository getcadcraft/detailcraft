---
title: Armeeritud betoontalade, postide, plaatide ja seinte armatuuri detailid
summary: Lisa betoontalad, postid, plaadid ja seinad ruudustiku järgi, anna neile varrased, vöötrauad ja sidemed, kontrolli ülekatteid ja ankurdust ACI 318-19 või EN 1992-1-1 järgi ning koosta tööjoonised ja painutusloendid.
keywords: armeeritud betoon, armatuur, armeerimine, tala, post, plaat, sein, vöötrauad, sidemed, ülekatted, ankurdus, ankurdusepikkus, ld, ldh, lbd, kate, samm, äärerauad, avad, võrgud, varraste märgised, painutusloend, varrasepainutusloend, tööjoonis, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, IFC import
from: 3835b7ec
---

Vaate all olev vahekaart {{ui:Betoon}} detailiseerib betoontalade, postide, plaatide ja seinte varrased. Sina annad mõõdud ja varrased; DetailCraft paigutab iga varda, nummerdab selle, kontrollib ülekatteid, ankurdust, katet ja sammu vastava punkti järgi, millest need pärinevad, ning joonistab selle.

:::warning
DetailCraft detailiseerib sisestatud varrased. Ta ei projekteeri neid. Iga tulemus on insenerile kontrollimiseks.
:::

## Ava vahekaart Betoon

Vali vaate all vahekaart {{ui:Betoon}}. Lindiga paigutuses on {{ui:Betoon}} vahekaardil {{ui:Modelleerimine}} kõrval {{ui:Vundament}}. Joonistusstiili käsurealt sisesta {{cmd:CONCRETE}}.

## Lisa element ruudustiku järgi

Betoonelemendid paigutatakse mudeli ruudustiku joontele ja tasanditele, seega seadista need esmalt (vasak paneel).

1. Valikus {{ui:Lisa ruudustiku järgi}} vali {{ui:Element}}: {{ui:Betoontala}}, {{ui:Betoonpost}}, {{ui:Plaat}} või {{ui:Sein}}.
2. Määra ruudustiku jooned ja tasandid:
   - talad ulatuvad ühest ruudustiku ristumiskohast teiseni, nende ülaosa on tasandil;
   - post seisab ristumiskohas, ühelt tasandilt teisele;
   - plaat täidab ristküliku kahe numbriga ja kahe tähega ruudustiku joone vahel, selle ülaosa on tasandil;
   - sein kulgeb mööda oma keskjoont ühest ristumiskohast teiseni, ühelt tasandilt teisele.
3. Sisesta mõõt ja vali {{ui:Lisa}}. Element valitakse ja selle väljad avanevad {{ui:Omadused}} paneelis.

Iga element algab varrastega, mis on algväärtused, mitte projekt: muuda need insenerile sobivaks.

## Muuda varrasid

Vali element (vaates või selle nime järgi vahekaardil {{ui:Betoon}}). {{ui:Omadused}} paneel näitab:

| Element | Mida seadistad |
|---|---|
| Tala | Laius, sügavus, vaba kate; ülemised ja alumised varrased (suurus, arv, sirge või 90° konks otstes); külgvarrased; vöötrauad (suurus, 135° või 90° konksud, esimese kauguse toe servast, otsatsooni pikkus ja samm, vahesamm); toetuspikkused; ülekatte pikkused |
| Post | Laius, sügavus üle, pööre, kate; pikivarrased igal küljel; sidemed nagu vöötrauad; mida varrastega ülaosas tehakse (ülekate kohal oleva postiga, konks põrandasse või lõpetamine) |
| Plaat | Paksus, mõõt, ülaosa, katted; alumine ja ülemine võrk mõlemas suunas (suurus ja samm); U-varrad servade ümber; äärerauad; avad |
| Sein | Paksus, kate, üks või kaks kihti, horisontaalsed ja vertikaalsed varrased, U-varrad otstes, vertikaalvarrad ülekattega ülal või mitte, äärerauad, avad |

Iga muudatus on üks tagasivõtmise samm. Muudatust, mida ei saa ehitada, ei võeta vastu ja olekuriba ütleb, miks, näiteks „Ava ei mahu elementi koos katetega.“

Vöötrauad ja sidemed on suletud, mõlemad konksud ühes nurgas. Talade varrased ulatuvad otstes betoonposti sisse kuni posti kaugema pinnani, miinus kate; kui posti pole, anna {{ui:Toetuse pikkus algusel (mm)}} ja lõpus.

## Ülekatted ja ankurdus

Varrased, mis on pikemad kui {{ui:Varraste standardpikkus (mm)}} (algselt 12000), lõigatakse võrdse pikkusega tükkideks, mis ülekatuvad. Tabel {{ui:Ülekatted ja ankurdus}} loetleb iga ülekatte ja iga ankurduse: mida on vaja, koos punkti ja selle tingimustega, ning mida detailil on.

- Ülekatte pikkus 0 tähendab „vajalik“: pikkus, mille norm annab, ümardatuna üles 25 mm-ni.
- Sisesta oma ülekatte pikkus, et seda hoopis kasutada. Kui see on vajalikust lühem, on see probleem (vt allpool) ja tabelis on see märgitud *-ga.
- Ankurdust mõõdetakse toe pinnast varda otsani toe sees. Tala, mille toetust pole teada, ütleb seda ega kontrolli seda.
- Vundamendil seisev post ülekattub vundamendi ootevarrastega ja teise postiga selle posti varrastega: ka nende ülekatet kontrollitakse.

**ACI 318-19** (SI): sirged varrased tõmbel 25.4.2.3 (tabel, koos ψt, ψe, ψg, λ), standardsed konksud 25.4.3.1 (ψr 1.6 ja ψo 1.25, kui pole teisiti teada), surutud varrased 25.4.9.2, tõmbeülekatted 25.5.2.1 (klass B või sätetes klass A), surveülekatted 25.5.5.1.

**EN 1992-1-1**: ankurdus 8.4.4, fbd 8.4.2 järgi (hea või halb sidemus), ülekatted 8.7.3, α6 iga varda puhul, mis on ühes lõikes ülekattes. γc, γs ja αct algavad soovitatud väärtustest; sea need oma riigi rahvuslisa järgi.

## Kontrollid

Iga ebaõnnestunud kontroll on rakenduse paneelis Probleemid (allikas {{ui:Armatuuri kontrollid}}) ja elemendi loendis {{ui:Kontrollid}}:

| Kontroll | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Kate | Tabel 20.5.1.3.1, kokkupuute järgi | Sidemiskatte miinimum, tabel 4.2 (vastupidavuse kate anna sina) |
| Varraste vaba vahe | 25.2.1 (talad, plaadid, seinad), 25.2.3 (postid) | 8.2 (2) |
| Vöötraudade samm | 9.7.6.2.2 | 9.2.2 (6) |
| Tala miinimumterasest | 9.6.1.2 | 9.2.1.1 (1) |
| Tala külgvarrased üle 900 mm sügavuse | 9.7.2.3 | ei kontrollita |
| Posti terasprotsent, varraste arv | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Sidemed: samm, suurus, ristsidemed | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Plaadi samm, miinimumterasest | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Seina samm, miinimumterasest, kaks kihti | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Ülekatted, ankurdus | nagu eespool | nagu eespool |

Killustiku suurus pole teada, seega kontrollitakse varraste vaba vahet ilma selleta.

## Avad, äärerauad ja servavarrad

Vali valitud plaadi või seina all {{ui:Lisa ava}} ja määra selle asukoht ja mõõt. Varrased, mida see ava ületab, peatuvad katte kaugusel selle servast. Äärerauad lisatakse igale poole samas kihis; need kannavad poole lõigatud varraste pindalast ja ulatuvad ühe ankurduspikkuse võrra avast kaugemale. See on DetailCraft'i algusreegel, mitte normi punkt: muuda {{ui:Äärerauad}} insenerile sobivaks. Nurgavarrasid ei lisata.

Plaadi vabade servade ümber ja seina otstes olevatel U-vardadel on haarad ühe ülekattepikkuse pikkused.

## Varraste märgised ja painutusloend

Identsed varrad jagavad ühte märgist: vundamendid säilitavad F-märgised (5F1), talad saavad B, postid C, plaadid S ja seinad W (7B1, 8C1, 4S2). Vahekaart {{ui:Painutusloend}} ja selle CSV loetlevad nüüd kõik konstruktsiooni varrased, vundamendid esimesena. {{ui:Väljund}} › {{ui:Veel}} › {{ui:Painutamine}} laadib selle alla.

## Tööjoonised

Vali {{ui:Väljund}} › {{ui:Veel}} › {{ui:Armatuuri joonised}}, {{ui:Armatuuri joonised}} vahekaardil {{ui:Betoon}} või {{ui:Tööjoonis}} ühe elemendi kõrval. Iga element saab lehe vaatega (plaadi puhul plaaniga), mis näitab iga varrast ja selle märgist, vöötraudade või sidemete tsoone ja mõõtudega ülekatteid, ning keskel lõiget. Seejärel loetlevad varrasepainutuslehed iga märgise koos joonisega selle kujust, selle mõõtudega, arvu, lõikepikkuse ja kaaluga.

Lehed koostatakse iga kord mudelist uuesti ja pärast iga muudatust, kui aken on lahti: tiitelplokk kannab mudeli viidet. Salvesta {{ui:See leht PDF-ina}} või {{ui:Kõik lehed PDF-ina}}.

## Varrased IFC-failist

{{ui:Fail}} › {{ui:Impordi IFC}} loeb nüüd IfcReinforcingBar: keskjoont mööda liigutatud ketas tagastatakse sirgete haarade ja painetena, koos läbimõõdu, märgise ja elemendiga, mis seda hoiab. Varrased jäetakse nii, nagu need loeti (neid ei muudeta talade ega plaatide reegliteks), näidatakse vaates, loetletakse painutusloendis ja kirjutatakse uuesti välja IFC-ekspordiga. Impordiaruanne ütleb, mitu varrast loeti, mis suurustes, mitmes elemendis ning mis jäeti välja ja miks.

Selle faili talasid, postid, plaate ja seinu, mis hoiavad varrasid või mille materjal on betoon, ei võeta terasena; aruanne ütleb seda. DetailCraft'i enda IFC-eksport kannab iga betooni elemendi definitsiooni, seega tagastatakse see iseendana ja selle varrased tehakse sellest uuesti.

:::note
Konstruktsiooni projekteerimisprogrammi enda failide (mitte IFC) lugemine ei ole loodud: ekspordi sellest IFC.
:::

## IFC eksport

Betoontalad, postid, plaadid (koos avadega) ja seinad eksporditakse kujul IfcBeam, IfcColumn, IfcSlab ja IfcWall. Igaühel on oma varrased IfcReinforcingBar-ina (põhivarrad, vöötraudade ja sidemete sidumised, servavarrad) sellega koondatud. Iga varras on keskjoont mööda liigutatud ketas, mille painetes on tõelised kaared, ning sellel on oma märgis ja lõikepikkus.
