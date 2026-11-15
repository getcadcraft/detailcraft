---
title: Ekrāna apskate
summary: Katra josla, panelis un cilne DetailCraft ar tās nosaukumu ekrānā un tās funkciju.
keywords: ekrāns, izkārtojums, rīkjosla, paneļi, rekvizīti, statusa josla, atskaites, saskarne, ui, cilnes
from: 94f81073
---

DetailCraft aizpilda pārlūka logu zem lietotnes joslas. No augšas uz leju: rīkjosla, pēc tam trīs kolonnas (panelis {{ui:Modelis}}, skats un panelis {{ui:Rekvizīti}}), pēc tam atskaišu cilnes un statusa josla.

## Lietotnes josla

Šaurā josla pašā augšā pieder CadCraft vietnei, nevis modelim. Tajā ir lietotnes nosaukums un versija, saite uz {{ui:Par DetailCraft}}, {{ui:Palīdzība}} (vai {{key:F1}}) šai palīdzībai, {{ui:Saglabāt bezsaistei}}, ekrāna režīma poga un pārslēgs {{ui:Papīrs}} / {{ui:Modelis}}.

- {{ui:Saglabāt bezsaistei}} saglabā DetailCraft, tā 3D skatu un šo palīdzību jūsu pārlūkā, lai tā atvērtos bez savienojuma. Pēc saglabāšanas tā rāda {{ui:Gatavs darbam bezsaistē}}; tad uz tās noklikšķiniet, lai izvēlētos {{ui:Saglabāt vēlreiz (iegūt jaunāko versiju)}} vai {{ui:Noņemt bezsaistes kopiju}}. Skatiet [Darbs bezsaistē](common:offline).
- {{ui:Papīrs}} dod gaišu ekrānu, bet {{ui:Modelis}} – tumšu. 3D skats uzreiz seko; nekas jūsu modelī nemainās.
- Ekrāna režīma poga un {{key:Ctrl+Shift+F}} cikliski pārslēdz starp parasto, pilnekrāna režīmu un pilnekrāna režīmu ar paslēptām joslām. {{key:Ctrl+Shift+F}} visos datoros izmanto Control taustiņu, arī Mac. Ar paslēptām joslām novietojiet rādītāju ekrāna augšmalā (vai pieskarieties tai), lai tās atkal parādītu. {{key:Esc}} iziet no pilnekrāna režīma.

## Rīkjosla

Rīkjoslā ir pieci grupas. Uzvirziet kursoru pār pogu, lai redzētu, ko tā dara un kāds ir tās taustiņš.

| Grupa | Pogas | Ko tās dara |
|---|---|---|
| {{ui:Fails}} | {{ui:Jauns}}, {{ui:Atvērt}}, {{ui:Importēt IFC}}, {{ui:Saglabāt}}, {{ui:Paraugs}} | Sāk modeli, atver saglabātu `.detailcraft.json` vai IFC failu, saglabā modeli vai atver parauga karkasu |
| {{ui:Novietot}} | {{ui:Atlasīt}}, {{ui:Sija}}, {{ui:Kolonna}}, {{ui:Saite}}, {{ui:Plāksne}}, {{ui:Pamats}}, {{ui:Kāpnes}} | Rīks, ko nākamais klikšķis skatā izmanto |
| {{ui:Savienot}} | {{ui:Galaplāksnes}}, {{ui:Balstplāksne}}, un {{ui:Vairāk}}: {{ui:Šķērsplāksnes}}, {{ui:Savienojums}}, {{ui:Fasonplāksne}}, {{ui:Līdzīgs}} | Pievieno savienojumu atlasītajai sijai, kolonnai vai saitei vai kopē atlasīto savienojumu uz katru līdzīgu mezglu |
| {{ui:Rediģēt}} | {{ui:Atsaukt}}, {{ui:Atkārtot}}, {{ui:Kopēt}}, {{ui:Ielīmēt}}, {{ui:Vairāk}} | Soļi atpakaļ un uz priekšu starp labojumiem; kopē atlasi un ielīmē to. {{ui:Vairāk}} atver izvēlni ar {{ui:Izgriezt}}, {{ui:Kopēt}}, {{ui:Ielīmēt}}, {{ui:Ielīmēt vietā}}, {{ui:Dublēt}}, {{ui:Dzēst}}, {{ui:Atlasīt visu}} un {{ui:Noņemt atlasi}}, katrs ar savu taustiņu |
| {{ui:Izvade}} | {{ui:IFC}}, {{ui:NC faili}}, {{ui:BOM}}, {{ui:Darbnīcas rasējums}}, {{ui:Rasējumi}}, un {{ui:Vairāk}}: {{ui:Liekšana}}, {{ui:Svara atskaite pa fāzēm}}, {{ui:KISS fails ražošanas programmatūrai}} | Lejupielādē eksportu vai atver rasējumu lapas |

Pogas un izvēlnes vienumi, kas pašlaik nevar darboties, ir pelēki, un, uzvirzot kursoru, tiek paskaidrots iemesls. {{ui:Galaplāksnes}} nepieciešama atlasīta sija, {{ui:Balstplāksne}} – atlasīta kolonna, {{ui:Līdzīgs}} – atlasīts savienojums, {{ui:Darbnīcas rasējums}} – modelis ar detaļām, {{ui:Kopēt}} – atlasīts elements vai pamats, un {{ui:Ielīmēt}} – kaut kas nokopēts. Skatiet [Kopēšana, ielīmēšana un dublēšana](topic:copy-paste).

## Modeļa panelis (pa kreisi)

- {{ui:Modelis}}: modeļa {{ui:Nosaukums}}. Tas nosauc katru saglabāto vai eksportēto failu.
- {{ui:Režģi}}: režģa līnijas un to attālumi, un {{ui:Lietot režģus}}. Skatiet [Režģu un līmeņu iestatīšana](topic:grids-and-levels).
- {{ui:Līmeņi}}: viena rinda katram līmenim (nosaukums un augstums mm), {{ui:Pievienot līmeni}} un {{ui:Lietot līmeņus}}.
- {{ui:Pielāgots profils}}: izveidojiet savu parametrisko šķērsgriezumu. Aizvērts, līdz to atverat.
- {{ui:Detaļu marķējumi}}: katrs detaļas marķējums modelī ar tā profilu, garumu un skaitu. Noklikšķiniet uz marķējuma, lai atlasītu pirmo ar to marķēto detaļu.

{{ui:Režģi}}, {{ui:Līmeņi}} un {{ui:Pielāgots profils}} sakļaujas: noklikšķiniet uz to virsrakstiem.

## Skats (vidū)

Skats rāda modeli 3D. Virs tā skata joslā ir trīs pogas un saraksts:

- {{ui:3D}}: brīvi pagrieziet modeli.
- {{ui:Plāns}}: skatiet taisni uz leju uz vienu līmeni. Blakus pogām parādās līmeņu saraksts. Viss, kas ir augstāk par 1.5 m virs līmeņa, tiek nogriezts, lai līmenis būtu skaidri redzams un pieejams klikšķināšanai.
- {{ui:Fasāde}}: skatiet taisni uz vienu burtisko režģa līniju (Režģis A, Režģis B …). Parādās burtisko režģu saraksts. Tiek rādīts tikai tērauds līdz 1 m attālumā no šīs līnijas.
- Skata joslas labajā galā esošā pielāgošanas poga tuvina, lai parādītu visu modeli.

Mazi punktiņi atzīmē katru režģa krustpunktu katrā līmenī. Kamēr ir ieslēgts novietošanas rīks, punktiņš, kas atrodas tuvāk rādītājam, iedegas, un statusa joslā tiek nosaukts, piemēram, "A/2 uz līmeņa 1". Krāsas atšķir elementu tipus: kolonnas, sijas, saites un plāksnes katrai ir sava krāsa, skrūvēm un enkurstieņiem – cita, pamati ir caurspīdīgi, un armatūra attēlota kā caurules. Caurumi rādās kā tumši aizbāžņi; izgriezumi ir izgriezti.

Kā pagriezt, panoramēt un tuvināt: [Pārvietošanās 3D](topic:navigate-3d).

Kad modelis ir tukšs, skats rāda īsu sarakstu "Sākt modeli". Varat arī atvērt saglabātu modeļa failu, nometot to jebkur skatā.

## Rekvizītu panelis (pa labi)

Ko rāda šis panelis, ir atkarīgs no tā, ko darāt, un tā virsraksts norāda, ko: "Modelis", "Sijas novietošana", "Sija b2", "Galaplāksnes savienojums", "Balstplāksne", "Pamats F1", "Atlasīti: 3" vai "Ielīmēt".

- **Nekas nav atlasīts:** modeļa kopsavilkums (elementi, savienojumi, pamati, detaļas, marķējumi, skrūves, tērauda un armatūras svars, režģi, līmeņi).
- **Ieslēgts novietošanas rīks:** iespējas nākamajam elementam (profils, materiāls, pozīcija, rotācija un kolonnām – {{ui:Līdz}}), izvēlētā profila kopsavilkums un forma {{ui:Pievienot pēc režģa}}, lai novietotu bez klikšķiem skatā.
- **Atlasīts elements:** tā nosaukums, profils, materiāls, pozīcija, rotācija, abu galu koordinātas, tā marķējumi, griezuma garums un svars, tā caurumi un izgriezumi, pogas savienojumiem, tā darbnīcas rasējums un {{ui:Dzēst}}.
- **Atlasīts savienojums:** katrs plāksnes, skrūves un metinājuma iestatījums, skrūves un metinājums, ko tas veido, tā brīdinājumi un {{ui:Lietot līdzīgiem}}.
- **Atlasīts pamats:** tā pozīcija un izmērs, apakšējais tīkls, sākuma stieņi un armatūras marķējumi, ko tas izmanto.
- **Vairāki atlasīti:** cik elementu katra tipa, savienojumu un pamatu, to tērauda svars un {{ui:Kopēt}}, {{ui:Dublēt}} un {{ui:Dzēst}}.
- **Ielīmēšana:** kas ir starpliktuvē un formas, lai ielīmētu ar ievadītu nobīdi vai uz režģa krustpunkta, ko izvēlaties no sarakstiem.

Skaitļu lauki stājas spēkā, kad nospiežat {{key:Enter}} vai pārejat ārpus lauka. Katra izmaiņa ir viens solis, ko var atsaukt.

## Atskaišu cilnes (apakšā)

- {{ui:Problēmas}}: viss, ko DetailCraft nevarēja izveidot vai ko vajadzētu pārbaudīt, ar pogu {{ui:Atlasīt}} katrā rindā. Cilne rāda skaitu iekavās.
- {{ui:Materiālu saraksts}}: detaļas, mezgli, skrūves un enkurstieņi ar svariem un saiti {{ui:Lejupielādēt CSV}}. Noklikšķiniet uz detaļas marķējuma, lai atlasītu šo detaļu.
- {{ui:Liekšanas specifikācija}}: katrs armatūras stieņa marķējums katrā pamatā, ar saiti {{ui:Lejupielādēt CSV}}.

Kad cilne ir fokusēta, {{key:Left}} un {{key:Right}} pārvieto starp cilnēm.

## Statusa josla

Josla apakšā ir trīs daļas: režģa krustpunkts zem rādītāja novietošanas laikā, jaunākais ziņojums (kas tikko notika vai kāpēc kaut kas tika noraidīts) un pašreizējās kopsummas: detaļas, skrūves, tērauda svars un armatūras svars. Kad darbība šķiet, ka neko nedara, vispirms izlasiet ziņojumu šeit.

Pārlūka cilnes nosaukums sākas ar punktu (•), kamēr modelim ir nesaglabātas izmaiņas.

## Šaurs ekrāns

Zem aptuveni 760 pikseļu platuma kolonnas tiek sakrautas: rīkjosla, skats, statusa josla, {{ui:Rekvizīti}}, atskaišu cilnes un panelis {{ui:Modelis}} pēdējais. Ritiniet lapu, lai tos sasniegtu. DetailCraft ir veidots darbvirsmas vai klēpjdatora ekrānam; tālrunis ir piemērots skatīšanai, nevis detalizēšanai.
