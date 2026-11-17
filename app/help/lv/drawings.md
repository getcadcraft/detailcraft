---
title: Vispārējā izkārtojuma un montāžas rasējumi
summary: Izveidojiet plānus, fasādes un vienu montāžas rasējumu katram montāžas marķējumam no modeļa uz A4 līdz A1 vai ANSI B līdz D lapām, izdodiet tos ar pārskatījuma burtiem un lejupielādējiet kā PDF, DWG vai DXF.
keywords: slēptās līnijas, slēpto līniju noņemšana, punktēta, pārskatījuma mākonis, mākoņi, pārskatījuma trīsstūris, enkurskrūvju plāns, enkurstieņi, stieņu specifikācija, pamatplākņu specifikācija, izkārtojums, izdot, pārskatījums, rev, pārskatījumu tabula, atkārtota izdošana, izdošanas žurnāls, transmitālis, dwg, dxf, CAD fails, eksportēt rasējumus, rasējumi, vispārējais izkārtojums, plāns, fasāde, montāžas rasējums, lapas izmērs, papīra izmērs, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloīds, 11 x 17, 22 x 34, pdf, drukāt, mērogs, tituls, modeļa atsauce
from: 709f8604
---

Izvēlieties {{ui:Rasējumi}} grupā {{ui:Izvade}}. DetailCraft izveido visu komplektu no modeļa tādu, kāds tas ir tagad. Nekas netiek saglabāts: mainiet modeli, atveriet {{ui:Rasējumi}} vēlreiz, un komplekts tiek izveidots no jauna.

## Kas ir komplektā

- **Plāni**, pa vienam katram līmenim, kurā kaut kas ir, skatot no augšas.
- **Fasādes**, pa vienai katrai režģa līnijai, kur ir elementi 1 m attālumā no tās.
- **Enkurskrūvju plāns**, ja modelim ir bāzes plāksnes: katra bāzes plāksne, skatot no augšas, ar tās kolonnu un enkurstieņiem; režģi ar izmēriem; katra stieņu izvietojuma tipveida detaļa (BP1, BP2 …) ar stieņu soli un malu attālumiem; un divas specifikācijas: enkurstieņi pēc marķējuma (R1, R2 …: daudzums, diametrs, garums, izvirzījums virs plāksnes, iedziļinājums, klase) un bāzes plāksnes pēc režģa (kolonna, izvietojums, plāksne, stieņi, plāksnes augša). Kolonna ārpus režģa tiek atrasta pēc tās koordinātēm.
- **Montāžas rasējumi**, pa vienam katram montāžas marķējumam: priekšskats, skats no augšas un gala skati, ķēdes izmēri līdz caurumiem un plāksnes malām, detaļu saraksts, brīvās skrūves un stieņi, un metinājumu un caurumu piezīmes. Katrai metinātajai plāksnei priekšskatā ir stūra metinājuma simbols (AWS A2.4): bulta rāda uz savienojumu, trīsstūris zem atsauces līnijas nozīmē bultas pusi, cipars tā kreisajā pusē ir metinājuma izmērs mm, un aplis, kur bulta sastopas ar līniju, nozīmē apkārtējo metinājumu.

**Slēptās līnijas.** Plāni un fasādes neattēlo tās daļas līnijas, kur to pilnībā priekšā esoša daļa to pārklāj (sija, kas redzama no gala aiz kolonnas). Montāžas rasējumos plāksne tiek zīmēta punktēti tur, kur to pārklāj galvenā daļa: aiz sieniņas priekšskatā (skatot no daļas −u puses) un zem augšējā atloka skatā no augšas. Daļas, kas atrodas vienā dziļumā vai kuru dziļums pārklājas, tiek zīmētas pilnībā.

Katrai lapai ir tituls ar rasējuma numuru, mērogu, modeļa nosaukumu, datumu, lapas numuru ar lapas izmēru un modeļa atsauci: kodu, kas veidots no saglabātā modeļa, lai izdruku varētu saistīt ar modeli, no kura tā nākusi.

## Izvēlieties lapas izmēru

Izvēlieties izmēru sarakstā {{ui:Rasējumi}} loga augšdaļā: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 collas), {{ui:ANSI C}} (17 × 22 collas) vai {{ui:ANSI D}} (22 × 34 collas). Katra lapa ir ainavas orientācijā. Komplekts tiek izveidots no jauna uzreiz pēc jaunā izmēra, un tas pats izmērs tiek izmantots darbnīcas rasējumiem. Tas ir arī [DetailCraft iestatījumos](topic:settings#drawings), un šī pārlūkprogramma to atceras.

- Lielāka lapa zīmē lielākā mērogā. Mērogi vienmēr ir standarta (1:10, 1:20, 1:25, 1:50, 1:100 un tā tālāk).
- Teksts ir vienāda izmēra visās lapās, tāpēc tas paliek lasāms, kad ir izdrukāts.
- Mazā lapā garš, šaurs montāžas rasējums var iegūt lielāku mērogu pa dziļumu nekā pa garumu. Skata nosaukumā tad norādīti abi mērogi, un noteicoši ir izmēri.

## Izdodiet rasējumus un pārskatījumus

Līnija virs priekšskata norāda, kādā stāvoklī ir redzamā lapa: **Vēl nav izdota**, **Rev B, izdota …; nav mainīta kopš tā laika** vai sarkanā krāsā **Mainīta kopš rev B: nepieciešama atkārtota izdošana**. Lapu sarakstā izdotās lapas ir atzīmētas ar savu pārskatījumu, bet tās, kurām vajadzīga atkārtota izdošana, — ar atsevišķu atzīmi.

- Ierakstiet, kādam nolūkam tiek izdots (sākumā "Izdots izgatavošanai") un izvēlieties {{ui:Izdot šo lapu}} vai {{ui:Izdot mainītās lapas}}, lai izdotu katru lapu, kas ir jauna vai mainīta kopš pēdējās izdošanas.
- Lapas pirmā izdošana ir pārskatījums A, pēc tam B, C un tā tālāk (I un O tiek izlaisti).
- Titulā rasējuma numurs parādās kopā ar pārskatījumu ("A-B1  rev B"), un blakus tam pārskatījumu tabula uzskaita jaunākos izdevumus: pārskatījumu, datumu un aprakstu. Mazā lapā tiek rādīts tik, cik var ietilpt.
- Lapa "mainās", kad mainās tajā zīmētais: pārvietots elements, jauns caurums, pārnumurēts marķējums. Datums, lapu skaits un pati pārskatījumu tabula neskaitās. Lapas izmēra maiņa maina katru lapu.
- Izdošanas žurnāls tiek saglabāts modeļa failā, un izdošana ir viens atsaukšanas solis. [KISS fails](topic:kiss-export) satur katra rasējuma jaunāko pārskatījumu.

### Pārskatījumu mākoņi

No lapas otrās izdošanas katrs mainītais elements vai pamatne tiek zīmēts pārskatījuma mākonī ar pārskatījuma trīsstūri, kurā ir burts.

- Kamēr lapa ir mainījusies kopš pēdējās izdošanas, mākoņi rāda, kas mainījies kopš tā laika, un gaidāmais pārskatījums ir trīsstūrī (rev B izdota un mainīta: trīsstūros ir C).
- Kad to izdodat, mākoņi paliek šīs pārskatījuma lapā, kā drukātā komplektā, līdz lapa atkal mainās.
- Katra lapa atzīmē tikai tās parādītās izmaiņas. Plāni un fasādes nezīmē caurumus vai izgriezumus, tāpēc tie atzīmē elementu, kas pārvietots, pagriezts, mainīts izmērā vai kuram mainījies marķējums. Montāžas rasējumi un enkurskrūvju plāns atzīmē arī jaunus vai pārvietotus caurumus un izgriezumus.
- Pārnumurēts marķējums ir izmaiņa: ja izmaiņa padara sijas jaunu montāžu, sijas, kuru marķējums ir pārvietojies uz augšu (B1 uz B2), tiek atzīmētas plānos un fasādēs.
- Izdzēsta detaļa neatstāj neko, ko atzīmēt.
- Lapas, kas izdotas pirms pārskatījumu mākoņiem (DetailCraft 0.4), sāk tos atzīmēt no nākamās izdošanas.
- Mākoņi ir PDF, DXF un DWG lejupielādēs, un paši par sevi nekad neskaitās kā izmaiņa.

## Lejupielāde

Izvēlieties formātu sarakstā blakus pogām, tad {{ui:Šī lapa}} redzamajai lapai vai {{ui:Visas lapas}} visam komplektam.

- **PDF**: drukāšanai vai nosūtīšanai. {{ui:Visas lapas}} izveido vienu PDF, pa vienai lappusei katrai lapai, katra lappuse izvēlētajā izmērā.
- **DWG**, 2018, 2013, 2010, 2007, 2004 vai 2000 formātā: lai atvērtu lapas CAD programmā. Izvēlieties vecāku formātu vecākai programmai.
- **DXF (R12)**: versija, ko gandrīz katra CAD programma atver.

DWG vai DXF lapa tiek zīmēta pilnā izmērā: viena zīmējuma vienība ir viens milimetrs uz papīra, tāpēc tā drukājas 1:1, un katrs skats saglabā mērogu, kas norādīts tā nosaukumā. Katrs zīmēšanas tips ir atsevišķs slānis: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID un tā tālāk, ar savu līnijas biezumu (DWG) un savām līnijām. Vārdi ir teksts DetailCraft teksta stilā (Arial). Izmēri ir līnijas un cipari, ko redzat, nevis izmēru objekti. {{ui:Visas lapas}} ievieto DWG vai DXF failus vienā zip arhīvā, pa vienam failam katrai lapai.

:::note
DXF R12 nesaglabā līniju biezumus un aizpildījumus: slāņi paliek ar saviem nosaukumiem, tāpēc drukājot iestatiet zīmēšanas tipus pēc slāņa, un aizpildītās formas tiek izlaistas (statusa josla norāda, cik).
:::

Drukājiet ar 100 % (bez "pielāgot lapas izmēram"), uz tāda paša izmēra papīra, ja vēlaties, lai norādītie mērogi saglabātos.
