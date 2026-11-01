---
title: Ekrāna apskats
summary: Katra josla, panelis un cilne DetailCraft ar tās ekrāna nosaukumu un tās nozīmi.
keywords: ekrāns, izkārtojums, rīkjosla, paneļi, rekvizīti, statusa josla, atskaites, saskarne, ui, cilnes
from: 454f74fd
---

DetailCraft aizpilda pārlūka logu zem lietotņu joslas. No augšas uz leju: rīkjosla, pēc tam trīs kolonnas (panelis {{ui:Modelis}}, skats, panelis {{ui:Rekvizīti}}), pēc tam atskaišu cilnes un statusa josla.

## Lietotņu josla

Šaurā josla augšā pieder CadCraft vietnei, nevis modelim. Tā rāda lietotnes nosaukumu un versiju, saiti uz {{ui:Par DetailCraft}}, {{ui:Palīdzība}} (vai {{key:F1}}) šai palīdzībai, {{ui:Saglabāt bezsaistei}}, ekrāna režīma pogu un slēdzi {{ui:Papīrs}} / {{ui:Modelis}}.

- {{ui:Saglabāt bezsaistei}} saglabā DetailCraft, tā 3D skatu un šo palīdzību jūsu pārlūkprogrammā, lai tā atvērtos bez savienojuma. Pēc saglabāšanas tā rāda {{ui:Gatavs darbam bezsaistē}}; tad uz tās noklikšķiniet, lai izvēlētos {{ui:Saglabāt vēlreiz (iegūt jaunāko versiju)}} vai {{ui:Noņemt bezsaistes kopiju}}. Skatiet [Darbs bezsaistē](common:offline).
- {{ui:Papīrs}} dod gaišu ekrānu, bet {{ui:Modelis}} – tumšu. 3D skats uzreiz seko; nekas modelī nemainās.
- Ekrāna režīma poga un {{key:Ctrl+Shift+F}} pārslēdz starp parasto režīmu, pilnekrāna režīmu un pilnekrāna režīmu ar paslēptām joslām. {{key:Ctrl+Shift+F}} visos datoros, arī Mac, izmanto taustiņu Control. Ja joslas ir paslēptas, norādiet uz ekrāna augšējo malu (vai pieskarieties tai), lai tās atgrieztu. {{key:Esc}} iziet no pilnekrāna režīma.

## Rīkjosla

Rīkjoslā ir pieci grupas. Novietojiet kursoru virs pogas, lai redzētu, ko tā dara un kāds ir tās taustiņš.

| Grupa | Pogas | Ko tās dara |
|---|---|---|
| {{ui:Fails}} | {{ui:Jauns}}, {{ui:Atvērt}}, {{ui:Importēt IFC}}, {{ui:Saglabāt}}, {{ui:Paraugs}} | Sāk modeli, atver saglabātu `.detailcraft.json` vai IFC failu, saglabā modeli vai atver paraugrāmi |
| {{ui:Novietot}} | {{ui:Atlasīt}}, {{ui:Sija}}, {{ui:Kolonna}}, {{ui:Saite}}, {{ui:Plāksne}}, {{ui:Pamats}}, {{ui:Kāpnes}} | Rīks, ko izmantos nākamais klikšķis skatā |
| {{ui:Savienot}} | {{ui:Galaplāksnes}}, {{ui:Balstplāksne}} un izvēlnē {{ui:Vairāk}}: {{ui:Šķērsplāksnes}}, {{ui:Savienojums}}, {{ui:Fasonplāksne}}, {{ui:Līdzīgs}} | Pievieno savienojumu atlasītajai sijai, kolonnai vai saitei vai kopē atlasīto savienojumu uz katru līdzīgu mezglu |
| {{ui:Rediģēt}} | {{ui:Atsaukt}}, {{ui:Atkārtot}}, {{ui:Kopēt}}, {{ui:Ielīmēt}}, {{ui:Vairāk}} | Soli atpakaļ un uz priekšu pa labojumiem; kopē atlasi un ielīmē to. {{ui:Vairāk}} atver izvēlni ar {{ui:Izgriezt}}, {{ui:Kopēt}}, {{ui:Ielīmēt}}, {{ui:Ielīmēt vietā}}, {{ui:Dublēt}}, {{ui:Dzēst}}, {{ui:Atlasīt visu}} un {{ui:Noņemt atlasi}}, katrai ar savu taustiņu |
| {{ui:Izvade}} | {{ui:IFC}}, {{ui:NC faili}}, {{ui:BOM}}, {{ui:Darbnīcas rasējums}}, {{ui:Rasējumi}} un izvēlnē {{ui:Vairāk}}: {{ui:Liekšana}}, {{ui:Svara atskaite pa fāzēm}}, {{ui:KISS fails ražošanas programmatūrai}} | Lejupielādē eksportu vai atver rasējumu lapas |

Pogas un izvēlņu vienumi, kas pašlaik nevar darboties, ir pelēki, un, novietojot virs tiem kursoru, parādās iemesls. {{ui:Galaplāksnes}} vajag atlasītu sijas, {{ui:Balstplāksne}} – atlasītu kolonnu, {{ui:Līdzīgs}} – atlasītu savienojumu, {{ui:Darbnīcas rasējums}} – atlasītu I-profila vai plāksnes detaļu, {{ui:Kopēt}} – atlasītu elementu vai pamatu, un {{ui:Ielīmēt}} – kaut ko nokopētu. Skatiet [Kopēšana, ielīmēšana un dublēšana](topic:copy-paste).

## Panelis Modelis (pa kreisi)

- {{ui:Modelis}}: modeļa nosaukums ({{ui:Nosaukums}}). Tas nosauc katru saglabāto vai eksportēto failu.
- {{ui:Režģi}}: režģa līnijas un to soļi, un {{ui:Lietot režģus}}. Skatiet [Režģu un līmeņu iestatīšana](topic:grids-and-levels).
- {{ui:Līmeņi}}: viena rinda katram līmenim (nosaukums un augstuma atzīme mm), {{ui:Pievienot līmeni}} un {{ui:Lietot līmeņus}}.
- {{ui:Pielāgots profils}}: izveidojiet savu parametrisko šķērsgriezumu. Paliek aizvērts, līdz to atverat.
- {{ui:Detaļu marķējumi}}: katrs detaļas marķējums modelī ar tā profilu, garumu un skaitu. Noklikšķiniet uz marķējuma, lai atlasītu pirmo ar to marķēto detaļu.

{{ui:Režģi}}, {{ui:Līmeņi}} un {{ui:Pielāgots profils}} sakļaujas: noklikšķiniet uz to virsrakstiem.

## Skats (vidū)

Skats rāda modeli 3D. Virs tā skata joslā ir trīs pogas un saraksts:

- {{ui:3D}}: brīvi pagrieziet modeli.
- {{ui:Plāns}}: skatieties tieši lejup uz vienu līmeni. Blakus pogām parādās līmeņu saraksts. Viss, kas ir vairāk nekā 1.5 m virs līmeņa, tiek nogriezts, lai jūs varētu skaidri redzēt un noklikšķināt uz līmeņa.
- {{ui:Fasāde}}: skatieties tieši uz vienu burtu režģa līniju (Režģis A, Režģis B …). Parādās burtu režģu saraksts. Rādīts ir tikai tērauds 1 m attālumā no šīs līnijas.
- Tuvināšanas poga skata joslas labajā galā parāda visu modeli.

Mazi punktiņi atzīmē katru režģa krustpunktu katrā līmenī. Kamēr ieslēgts novietošanas rīks, punkts, kas atrodas tuvāk kursoram, iedegas, un statusa josla to nosauc, piemēram, „A/2 pie Level 1”. Krāsas atšķir elementu veidus: kolonnām, sijām, saitēm un plāksnēm ir katrai sava krāsa, skrūvēm un stieņiem cita; pamati ir caurspīdīgi, bet armatūra attēlota kā caurules. Caurumi redzami kā tumši aizbāžņi; izgriezumi ir izgriezti.

Kā pagriezt, panoramēt un tuvināt: [Pārvietošanās 3D skatā](topic:navigate-3d).

Ja modelis ir tukšs, skatā redzams īss saraksts „Sākt modeli”. Lai atvērtu, saglabātu modeļa failu varat arī nomest jebkur skatā.

## Panelis Rekvizīti (pa labi)

Ko šis panelis rāda, atkarīgs no tā, ko darāt, un tā virsraksts norāda, kas tas ir: „Modelis”, „Novietot siju”, „Sija b2”, „Galaplāksnes savienojums”, „Balstplāksne”, „Pamats F1”, „Atlasīti 3” vai „Ielīmēt”.

- **Nekas nav atlasīts:** modeļa kopsavilkums (elementi, savienojumi, pamati, detaļas, marķējumi, skrūves, tērauda un armatūras svars, režģi, līmeņi).
- **Ieslēgts novietošanas rīks:** nākamās detaļas opcijas (profils, materiāls, pozīcija, rotācija un kolonnām {{ui:Līdz}}), izvēlētā profila kopsavilkums un forma {{ui:Pievienot pēc režģa}} novietošanai bez klikšķināšanas skatā.
- **Atlasīts elements:** tā nosaukums, profils, materiāls, pozīcija, rotācija, abu galu koordinātas, tā marķējumi, griezuma garums un svars, caurumi un izgriezumi, un pogas savienojumiem, tā darbnīcas rasējumam un {{ui:Dzēst}}.
- **Atlasīts savienojums:** katrs plāksnes, skrūves un metinājuma iestatījums, skrūves un metinājums, ko tas veido, tā brīdinājumi un {{ui:Lietot līdzīgiem}}.
- **Atlasīts pamats:** tā pozīcija un izmērs, apakšējais tīkls, sākuma stieņi un stieņu marķējumi, ko tas izmanto.
- **Atlasītas vairākas lietas:** cik elementu katra veida, savienojumu un pamatu, to tērauda svars un {{ui:Kopēt}}, {{ui:Dublēt}} un {{ui:Dzēst}}.
- **Ielīmēšana:** kas atrodas starpliktuvē, un formas ielīmēšanai ar ievadītu nobīdi vai uz režģa krustpunktu, ko izvēlaties no sarakstiem.

Skaitļu lauki stājas spēkā, kad nospiežat {{key:Enter}} vai atstājat lauku. Katra izmaiņa ir viens solis, ko varat atsaukt.

## Atskaišu cilnes (apakšā)

- {{ui:Problēmas}}: viss, ko DetailCraft nevarēja izveidot vai ko vēlas, lai pārbaudāt, ar pogu {{ui:Atlasīt}} katrā rindā. Cilnē skaits rādīts iekavās.
- {{ui:Materiālu saraksts}}: detaļas, mezgli, skrūves un enkurstieņi ar svariem un saiti {{ui:Lejupielādēt CSV}}. Noklikšķiniet uz detaļas marķējuma, lai atlasītu šo detaļu.
- {{ui:Liekšanas specifikācija}}: katrs stieņa marķējums katrā pamatā ar saiti {{ui:Lejupielādēt CSV}}.

Kad cilne ir fokusēta, {{key:Left}} un {{key:Right}} pārvieto starp cilnēm.

## Statusa josla

Josla apakšā sastāv no trim daļām: režģa krustpunkta zem kursora novietošanas laikā, jaunākā ziņojuma (kas tikko notika vai kāpēc kaut kas tika noraidīts) un darbības kopsummām: detaļas, skrūves, tērauda svars un armatūras svars. Ja šķiet, ka darbība neko nedara, vispirms izlasiet šeit redzamo ziņojumu.

Pārlūka cilnes nosaukums sākas ar punktu (•), kamēr modelim ir nesaglabātas izmaiņas.

## Šaurā ekrānā

Ja platums ir mazāks par aptuveni 760 pikseļiem, kolonnas tiek saliktas vienā virknē: rīkjosla, skats, statusa josla, {{ui:Rekvizīti}}, atskaišu cilnes un beigās panelis {{ui:Modelis}}. Ritiniet lapu, lai tiktu pie tiem. DetailCraft ir izkārtots darbvirsmas vai klēpjdatora ekrānam; tālrunis der skatīšanai, nevis detalizēšanai.
