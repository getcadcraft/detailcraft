---
title: Armatuuri andmik
summary: Varraste suurused, konksumõõtmed, kujukoodid, lõikepikkused ja painutusloendi veerud, mida DetailCraft kasutab.
keywords: armatuur, varraste suurused, konksud, painutusläbimõõt, kujukoodid, lõikepikkus, painutusloend, varraste loend, astm a615, aci 318
from: 1583535e
---

## Varraste suurused

ASTM A615/A615M tabelist 1 (tolli-naela tähised). Millimeetrid ja kg/m on avaldatud tolli- ja lb/ft-väärtuste täpsed teisendused. Loendites on iga suurus kujul näiteks „#5 (15.9 mm)“.

| Varras | Läbimõõt (mm) | Mass (kg/m) | Pindala (mm²) | Sisemine painutusläbimõõt | 90° konksu haar, välisest välisservani (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

[DetailCraft'i sätetes](topic:settings) ({{ui:Armatuur}}) saab **ASTM-varraste nimed** näidata neid varraseid nende pehmete meetermõõdu A615M nimedega: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (samad varrased; ACI 315-99 tabel 1 loetleb mõlemad).

### Meetrilised varrased (BS 4449)

| Varras | Läbimõõt (mm) | kg/m | Min. painutusraadius r (mm) | Konksu haar = otsa ulatus P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Mass on nimilõige korrutatud 7850 kg/m³-ga. Raadius ja otsa ulatus on BS 8666:2020 miinimumid (selle miinimummõõtude tabel; varasem läbimõõt on 2r). BS-varrastest vundamentidel on konksu haarad P-ga ja lõikepikkused allpool toodud BS 8666 valemite järgi. Euroopa terase valimine sätetes alustab uusi vundamente H16 võrkude ja H20 ootevarrastega C30/37 betoonis.

## Konksud

ASTM-varrased: standardsed 90° konksud ACI 318-19 tabelist 25.3.1: sisemine painutusläbimõõt 6 db suurustele #3 kuni #8 ja 8 db suurustele #9 kuni #11, painde taga sirge pikendus 12 db. Konksu haar, mõõdetuna välisest välisservani, on pool painutusläbimõõdust + db + 12 db.

Kui võrguvarda konks ei mahu katteala sees oleva vundamendi sügavusse, lühendab DetailCraft haart nii, et see mahub, ja loetleb hoiatuse.

## Kujud

DetailCraft salvestab kolm kuju. Painutusloend prindib need kas DetailCraft'i koodidena, ACI 315 tüüpidena või BS 8666 kujukoodidena: vali [DetailCraft'i sätetes](topic:settings) ({{ui:Armatuur}}) **Painutusloendi kujukoodid**.

| Kood | Kuju | Mõõtmed |
|---|---|---|
| S | Sirge | A = pikkus |
| L | Üks 90° painne | A = põhihaar, B = konksu haar, mõlemad välisest välisservani |
| U | Kaks 90° painet samal pool | A = keskmine, B ja C = kaks haara, välisest välisservani |

Võrguvarrad, millel on {{ui:Otsakonksud}} sees, on U; ilma selleta S. Ootevarrad, millel on {{ui:Konks all}} sees, on L; ilma selleta S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (joon. 10) |
|---|---|---|
| S | 00, L = A | ilma tüübinumbrita |
| L | 11, L = A + B − 0.5r − d | ilma tüübinumbrita: joonisel ei ole varrast ühe konksuga |
| U | 21, A ja C on haarad, B keskmine: L = A + B + C − r − 2d | 2. tüüp, konksud A ja G, sirge B |

BS 8666 või ACI 315 koodide puhul järgivad loendi veerud A, B ja C selle standardi tähistust (U keskmine on B).

## Lõikepikkus

BS 4449 varraste puhul on lõikepikkus varda kujukoodi BS 8666 valem (ülal). ASTM-varraste puhul on see varda keskjoone täpne pikkus: sirged osad ning painded kaartena, mille raadius on pool painutusläbimõõtu pluss pool varda läbimõõtu. Seda ei arvutata painutusvahetuste tabelist, seega võib see erineda mõne millimeetri võrra loendist, mis neid kasutab.

## Paigutus

- Alumine võrk: L-suunalised varrad moodustavad alumise kihi, B-suunalised toetuvad neile. Iga komplekt jaotatakse ühtlaselt üle vundamendi katteala sees, antud sammuga või tihedamalt, vähemalt kahe varrasega.
- Ootevarrad: ruudustik L- ja B-suunalisi varrasid antud sammudega, keskendatud vundamendile, seisab võrgul ja ulatub pealt üle antud ulatuse. Iga konks on suunatud väljapoole.

## Kontrollid

| Kontroll | Reegel | Tulemus |
|---|---|---|
| Ruum varrastele | Katted mõlemal pool jätavad varrastele ruumi | Keeldutakse, kui ruumi pole |
| Sügavus kahe kihi jaoks | Sügavus miinus kaks katet mahutab mõlemad võrgukihid | Keeldutakse, kui ei mahu |
| Ootevarrad mahuvad | Ootevarraste ruudustik mahub katteala sisse | Keeldutakse, kui ei mahu |
| Vaba vahe | Vähemalt suurem 25.4 mm ja db-st (ACI 318-19 25.2.1; killustiku suurust ei kontrollita) | Hoiatus |
| Konksu sügavus | Konksu haar mahub katteala sees olevasse sügavusse | Hoiatus, haar lühendatud |
| Ootevarraste konksud | Konksud ei ulatu katteala sisse | Hoiatus |

## Painutusloendi veerud

Vahekaardil {{ui:Painutusloend}} ja selle CSV-s on need veerud: Varda märgis, Suurus, Kuju, A (mm), B (mm), C (mm), Arv, Lõikepikkus (mm), Kogupikkus (m), kg/m, Kaal tükki (kg), Kogukaal (kg), Kasutuskoht. Viimane rida summeerib arvu, pikkuse ja kaalu.
