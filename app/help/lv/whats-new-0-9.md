---
title: Jaunumi 0.9 versijā
summary: Lielbritānijas Blue Book tērauda izmēri un nevienādi leņķi, darbnīcas rasējumi katrai detaļai vienā PDF komplektā, Mani profili pielāgotiem profiliem, P-Delta un dabiskās frekvences, ASCE 7 vēja slodzes, seismiskā vieta un kombinācijas, kā arī dzīvie kursori un Sekot.
keywords: jaunumi, ko jauns, laidiena piezīmes, izmaiņu žurnāls, 0.9, britu tērauds, blue book, ub, uc, pfc, shs, rhs, chs, nevienāds leņķis, darbnīcas rasējums, darbnīcas rasējumi, lapu komplekts, detaļas marķējums, pdf, mani profili, pielāgots profils, p-delta, otrā kārtas, dabiskā frekvence, galīgie elementi, modālā masa, vēja slodze, asce 7, seismisks, vietas klase, usgs, slodžu kombinācijas, lrfd, asd, dzīvs, kursori, sekot, cilvēki, rīkjoslas padomi, jaunumi, laidiena piezīmes, izmaiņu žurnāls, izmaiņas, 0.8, 0.8.1, versija, jaunas funkcijas, montāža, celtnis, slodžu tabula, filma, autopilots, savienojumi, armatūra, blīvums, pamats, pamatne, plātne, nosēšanās, karkass, koks, vieglais tērauds, griešanas saraksts, konstruējamība, metināšanas piekļuve, piegādātājs, krājums, piegādes laiks, kas pirmais lūzīs, dzīvs, betons, seismisks, pārsegums, valodas, palīgs
from: 4c95a2de
---

Šeit ir izmaiņas DetailCraft 0.9 versijā salīdzinājumā ar 0.8.1. 0.9 versijā ir Lielbritānijas tērauda izmēri, darbnīcas rasējums katrai detaļai vienā reizē, lielāka cilne {{ui:Aprēķins}} rāmjiem un kopīgs skats uz citu dalībnieku kursoriem, kad strādājat kopā.

## Jauns

### Britu tērauds un darbnīcas rasējumi

- **Britu tērauda izmēri.** Profilu sarakstos tagad ir 976 izmēri no Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS un RHS, auksti formētie dobie profili ir atsevišķi (to nosaukumi sākas ar CF). Nosaukumi ir rakstīti ģimenes vārdu priekšā, piemēram, UB305x165x40 vai SHS100x100x5.0, un ierakstīt tos tā, kā rasējumos teikts, arī darbojas: 305x165x40 UB, L100x100x10, SHS100x5. Skatiet [Profilu katalogs](topic:profile-catalog).
- **Nevienādi leņķi.** UEA leņķi saglabā abas malas caur IFC ievadi un izvadi un caur NC failiem, un spogulis apgriež detaļu no gala līdz galam.
- **Visi darbnīcas rasējumi uzreiz.** Ja nav atlasīts nekas, grupā {{ui:Izvade}} izvēlieties {{ui:Darbnīcas rasējums}}. Logā ir uzskaitītas visas detaļu marķējumi, var priekšskatīt jebkuru no tiem, un {{ui:Lejupielādēt visu}} saglabā vienu PDF ar lapu katram marķējumam, kas virsrakstā nosaukta „Lapa 3 no 42”. {{ui:Lejupielādēt PDF}} saglabā to, ko tieši skatāties. Kanāliem, leņķiem un dobajiem profiliem tagad ir arī lapas. Skatiet [Darbnīcas rasējumu izveide](topic:shop-drawings).
- **Mani profili.** Pielāgotu profilu tagad var saglabāt katram jaunam modelim. Pielāgotā profila formā atstājiet atzīmētu {{ui:Saglabāt sadaļā Mani profili}}; saraksts {{ui:Mani profili}} zem tā ir ar {{ui:Saglabāt}}, {{ui:Izmantot šeit}} un {{ui:Noņemt}}. Saraksts tiek glabāts šajā pārlūkprogrammā (līdz 200), nevis jūsu kontā. Skatiet [Plāksnes un profili](topic:plates-and-profiles).

### Aprēķins

- **Otrās kārtas (P-Delta).** Cilnē {{ui:Aprēķins}} blakus {{ui:Palaist}} atzīmējiet {{ui:Otrās kārtas (P-Delta)}}, un aksiālie spēki iedarbojas uz deformēto rāmi. Plāksnes un stingrās grīdas paliek pirmās kārtas ar brīdinājumu. Skatiet [Spēki, reakcijas un pārvietojumi](topic:frame-analysis).
- **Dabiskās frekvences.** Bloks {{ui:Galīgie elementi: dabiskās frekvences}} zem rezultātiem atrod zemākos vibrāciju veidus tam pašam modelim, ar periodu un efektīvo modālo masu, un parāda veidu modelī. Skatiet [Spēki, reakcijas un pārvietojumi](topic:frame-analysis).
- **Vēja slodzes un seismiskā vieta.** Trīs jauni bloki cilnē {{ui:Aprēķins}}: {{ui:Vēja slodzes (ASCE 7 virziena procedūra)}}, {{ui:Seismiskā vieta un sistēma (ASCE 7)}} un {{ui:ASCE 7 slodžu kombinācijas}}. Skatiet [Vēja, seismiskās vietas un ASCE 7 kombinācijas](topic:wind-seismic-combinations).

### Kopā strādāšana

- **Kursori un vārdi.** Live sesijā katra persona kursors tiek zīmēts modelī ar viņa vārdu un krāsu, un tas, ko viņi atlasījuši, saņem rāmi.
- **Sekot cilvēkam.** Atveriet {{ui:Dalībnieki}} sesijā un izvēlieties {{ui:Sekot}} pie vārda; jūsu skats pārvietojas kopā ar viņu. Vadītājs var izvēlēties {{ui:Lūgt visiem sekot man}}. Skatiet [Sekot cilvēkam Live sesijā](topic:follow-in-live).

### Visās lietotnēs

- Rīkjoslas padomi ir Bootstrap rīkjoslas padomi, sākuma padomu kartītei ir aizvēršanas poga, cilņu joslas ritina sāniski, ja tās neiekļaujas, un pārlūkprogrammas cilnes nosaukums parāda atvērto dokumentu, kam seko DetailCraft un CadCraft.

## Labots

- Pielāgotais profils tika zaudēts, kad sākāt jaunu modeli.
- Kanāli, leņķi un dobie profili nebija darbnīcas rasējumu komplektā.

## Godīgi par ierobežojumiem

- Vēja, seismiskais un galīgo elementu bloki ir pārbaudes palīgi. Jūsu inženieris pārskata rezultātus; tās nav normas pārbaude. USGS meklēšana tika testēta uz aizvietotāja, nevis uz tiešraides pakalpojuma.
- Galīgie elementi un P-Delta tika pārbaudīti pret rokas un slēgtās formas atbildēm, nevis pret reālu ēku. Izliekšanās aprēķins nav izveidots.
- Neviens Lielbritānijas ražotājs vēl nav izmēģinājis britu izmērus, un NC faili nevienādiem leņķiem vēl nav izpildīti mašīnā.
- Darbnīcas rasējumu komplekts ir tikai PDF formātā.
- Valodas, kas nav angļu, ir mašīntulkoti melnraksti.
- Windows instalētāji nav parakstīti ar koda parakstu (Papildinformācija, pēc tam Palaist tik un tā); macOS diska attēls nav notariāli apstiprināts (ar peles labo pogu, pēc tam Atvērt).

Iepriekšējās izmaiņas ir 0.8 un 0.8.1 piezīmēs šīs lapas apakšā.

## Iepriekš: 0.8 un 0.8.1

Šeit ir izmaiņas DetailCraft 0.8 versijā (2026. gada 1. novembris) un 0.8.1 versijā (2026. gada 2. novembris) salīdzinājumā ar 0.7. 0.7 versijā tika pārbaudīti tērauda elementi; 0.8 versijā tiek plānotas celšanas operācijas, ierosināti savienojumi, pārbaudīti pamati un armatūra, un tiek konstruētas koka un vieglā tērauda sienas, grīdas un jumti.

### Jauns

**Montāža**

- **Montāžas plāns un filma.** Cilnē {{ui:Montāža}} aprakstiet celtni (kur tas stāv, tā augstāko āķi, takelāžu, kas nav slodžu tabulā) un ierakstiet tā slodžu tabulas rindas. DetailCraft paceļ modeli pa vienam mezglam, fāzu secībā un līmenis pa līmenim, un pārbauda katru celšanu pret tabulu tās rādiusā un pret jūsu iestatīto rezervi. {{ui:Saglabāt filmu}} ieraksta vienu HTML failu, ko var atskaņot bezsaistē jebkurā pārlūkprogrammā, arī tālrunī. Celšanas, kas pārsniedz tabulu, iet tai garām vai ir pārāk augstas, ir sadaļā {{ui:Problēmas}}. Tas ir plāns pēc jūsu skaitļiem, nevis celšanas plāns. Skatiet [Montāžas plāns un filma](topic:erection-movie).

**Savienojumi**

- **Savienojumu autopilots.** Cilne {{ui:Autopilots}} apskata katru savienojumu bez savienojuma un ierosina to pēc formām: balsta plāksnes, bīdes cilnes, galaplāksnes sijām, kuras atzīmējat kā momentsijas, savienojumus un fasonplāksnes. Norādiet vienmērīgu slodzi vai vienu gala bīdi, un skrūvju skaits seko skrūves projektētajai stiprībai. {{ui:Pievienot visus}} pievieno ierosinājumus kā vienu atsaukšanas soli. Tās ir sākumvērtības, ko pārskatīt, nevis savienojuma projektējums.
- **Konstruējamības pārbaudes.** {{ui:Problēmas}} skrūvei, ko atslēga nesasniedz, skrūvēm, kas ir par tuvu ligzdai, stūra metinājumiem ārpus to izmēru robežām un dobiem profiliem, kas tur ūdeni. Metinājumu piekļuve ir jauna: visapkārt esošs stūra metinājums, ko metinātāja deglis nesasniedz, tiek parādīts kopā ar detaļu, kas traucē, un metinājuma daļu, kas ietekmēta. Skatiet [Konstruējamības pārbaudes](topic:constructability).

**Pamati un armatūra**

- **Pamatu pārbaudes.** Cilne {{ui:Pamats}} pārbauda pamatus, kombinētus pamatus un plātnes uz jūsu aprakstītās grunts: balstspēju, slīdēšanu un apgāšanos no ekspluatācijas slodzēm; lieci, bīdi, caursitumu, nostiprinājumu un minimālo tēraudu no aprēķina slodzēm (ACI 318-19). Kolonna pie malas vai stūra tiek pārbaudīta ar šķērsgriezumu, kas nogriezts ar pamata malu. Nosēšanās tiek aprēķināta no grunts moduļa, elastīgā plāksne tiek atrisināta uz atsperēm no pamatnes moduļa, un pāļu grupām un atbalstsienām ir savi paneļi. Kolonnu slodzes var ierakstīt vai ņemt no {{ui:Aprēķins}}. Skatiet [Pamatu pārbaudes](topic:foundation-checks).
- **Armatūras blīvuma karte.** Cilne {{ui:Blīvums}} zīmē siltuma karti katram pamatam no augšas: kur stieņi atstāj pārāk mazu vietu betonam, salīdzinot ar tīrās atstarpes noteikumu un, ja norādāt, lielāko agregātu un vibratora galvu. Skatiet [Armatūras blīvuma karte](topic:rebar-congestion).

**Karkass un piegāde**

- **Koka un vieglā tērauda karkass.** Cilne {{ui:Karkass}} veido sienu, grīdu un jumtu paneļus ar katru gabalu, griešanas sarakstu, krājumu, kas jāpērk, un mērogā veidotu darbnīcas rasējumu. {{ui:Novietot kā elementus}} ieliek gabalus modelī, bet {{ui:PDF lapas}} saglabā vienu lapu katram panelim. Izmēri, atstarpes un virsējās sijas ir jūsu: DetailCraft nepārbauda, vai tās nes slodzi. Skatiet [Koka un vieglā tērauda karkasa paneļi](topic:framing-panels).
- **Piegādātāja krājums un piegādes laiki.** Cilne {{ui:Piegāde}} nolasa piegādātāja krājumu sarakstu (CSV) un katram profilam, ko pērk griešanas saraksts, parāda, vai krājums ir pietiekams un cik ilgs ir gaidīšanas laiks. Trūkumi un novēlotie profili ir sadaļā {{ui:Problēmas}}. Nekas netiek pasūtīts. Skatiet [Piegādātāja krājums un piegādes laiki](topic:supplier-stock).

**Aprēķins un projektēšana**

- **Kas pirmais lūzīs?** Cilnē {{ui:Aprēķins}} poga atrod noteicošo stiprības kombināciju, vājāko elementu, cik tālu slodzes var pieaugt, pirms pirmais elements sasniedz savu robežu, un vājāko galaplāksni vai bīdes cilni, ja zināma tās skrūvju bīdes stiprība. Vispirms vajag kombinācijas un projektēšanas normu. Balsta spiedi, bloka bīdi, metinājumus un atsvaru nepārbauda. Jūsu savienotais palīgs var pieprasīt to pašu.
- **Live.** Atzīmējiet {{ui:Live: atrisināt no jauna pēc katra labojuma}}, un rāmis tiek atrisināts no jauna pēc katra labojuma.
- **Betons, vairāk.** Tievu kolonnu nesavelkamā rāmī projektē ar tās palielināto momentu (ACI 318-19 6.6.4.5). Seismisko periodu var ņemt no analīzes ar Reilija metodi. Plātnēm veidota plātne saņem tēraudu, ko katrs slānis vajag no tā momentiem, un vienvirziena bīdi. Skatiet [Betona elementu pārbaude un seismiskās slodzes](topic:concrete-and-seismic).
- **Inženierim pārbaudei.** Pamatu, betona un Kas pirmais lūzīs rezultāti ir palīgi. Vēja slodzes nav izveidotas.

**Visās lietotnēs**

- **Valodas.** Palīdzība ir 54 valodās. Tās, kas nav angļu, ir mašīntulkoti melnraksti, līdz tos izlasa dzimtās valodas runātājs; desmit ir jaunas (lietuviešu, latviešu, bosniešu, marati, telugu, albāņu, afrikāņu, filipīniešu, svahili, uzbeku).
- **Rīkjoslas rindas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Rīkjoslas rindas}} izvēlas pārnesumu, 2 rindas vai 1 rindu. Josla, kas jau iekļaujas, paliek kā ir; pārējās ritina sāniski.
- **Īpašību režģis.** Pamata lauki izmanto kopīgo režģi: sakļaujamas kategorijas un kompakts blīvums. Ierakstītā aritmētika, piemēram, 2*450, joprojām darbojas.
- **Ievadierīces.** Skārienpaliktnis, pildspalva, 3D pele, vadība un MIDI var vadīt lietotnes. Skatiet [Pārvietošanās 3D](topic:navigate-3d).
- **Problēmu panelis.** Iepriekš minēto jauno pārbaužu brīdinājumi parādās tajā pašā {{ui:Problēmas}} panelī kā agrāk.
- **Savienojiet savu AI.** Jūsu pašu palīgs, kas savienots ar CadCraft Studio, darbojas ar visām astoņām lietotnēm un redz tikai to, ko atļaujat. Vienas pieskaršanas savienojums, mitinātais savienotājs un jūsu pašu API atslēga Studio vēl tiek gatavoti. Skatiet [Izmantot DetailCraft ar AI palīgu](topic:use-with-ai-assistants).

### Labots 0.8.1 versijā

- **Valodas Studio.** Studio un iepakotie izdevumi var mainīt valodu darbības laikā; agrāk bija tikai angļu valoda. Tas vēl nav pārbaudīts visās platformās: paziņojiet, ja valoda nemainās.
- **Atlase ar logu.** 0.8.1 instalētāji satur atlases ar logu uzvedību, kas jau bija pareiza 0.8 tīmekļa versijā; vecākais instalētājs to nesatur.
- **Planšetes vertikālā režīmā.** Brīvais režģa augstums tiek atdots audeklam, un lapu izkārtojums sākas ar 760 px vai mazāk.

### Vēl nav šajā versijā

- **NC nosūtīšana uz mašīnu** nav izlaista.
- **Vēja slodzes** betonam nav izveidotas, un betona un pamatu pārbaudes ir inženierim pārskatīšanai.
- **Koda paraksts.** Windows instalētāji un macOS .dmg nav parakstīti, tādēļ Windows var brīdināt, un macOS prasa peles labo pogu, pēc tam Atvērt.

Iepriekšējās izmaiņas ir sadaļā [Kas jauns 0.7 versijā](topic:whats-new-0-7).
