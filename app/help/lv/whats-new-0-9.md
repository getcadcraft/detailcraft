---
title: Jaunumi 0.9 versijā (iepriekšējā)
summary: Lielbritānijas Blue Book tērauda izmēri un nevienādi leņķi, darbnīcas rasējumi katrai detaļai vienā PDF kopā, Mani profili pielāgotiem šķērsgriezumiem, P-Delta un dabiskās frekvences, ASCE 7 vēja slodzes, seismiskā vieta un kombinācijas, kā arī tiešraides kursori un Sekot.
keywords: jaunumi 0.9, iepriekšējais laidiens, jaunumi, izlaiduma piezīmes, izmaiņu žurnāls, 0.9, Lielbritānijas tērauds, Blue Book, ub, uc, pfc, shs, rhs, chs, nevienāds leņķis, darbnīcas rasējums, rasējumu kopa, detaļas marķējums, pdf, mani profili, pielāgots profils, P-Delta, otrā kārta, dabiskā frekvence, galīgie elementi, modālā masa, vēja slodze, asce 7, seismiskais, seismiskā vieta, USGS, slodžu kombinācijas, LRFD, ASD, tiešraide, kursori, sekot, dalībnieki, rīka padomi, jaunumi, izlaiduma piezīmes, izmaiņas, 0.8, 0.8.1, versija, jaunas funkcijas, montāža, celtnis, slodžu diagramma, filma, autopilots, savienojumi, armatūra, blīvums, pamats, pēdas, plātne, sēšanās, karkass, koks, vieglais tērauds, griezumu saraksts, būvējamība, metinājuma piekļuve, piegādātājs, krājums, piegādes termiņš, kas pirmais salūst, betons, seismisks, pārsegums, valodas, palīgs
from: ab0c7f05
---

Šis ir tas, kas mainījies DetailCraft 0.9 versijā, salīdzinot ar 0.8.1. 0.9 versijā ir Lielbritānijas tērauda izmēri, darbnīcas rasējums katrai detaļai vienā reizē, lielāka {{ui:Aprēķins}} cilne rāmjiem un skats uz citu dalībnieku kursoriem, kad strādājat kopā.

## Jauns

### Lielbritānijas tērauds un darbnīcas rasējumi

- **Lielbritānijas tērauda izmēri.** Profilu sarakstos tagad ir 976 izmēri no Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS un RHS; aukstajā veidošanā izgatavotie dobie šķērsgriezumi ir nodalīti (to nosaukumi sākas ar CF). Nosaukumi ir rakstīti pēc saimes, piemēram, UB305x165x40 vai SHS100x100x5.0, un darbojas arī tad, ja rakstāt tā, kā to raksta rasējumi: 305x165x40 UB, L100x100x10, SHS100x5. Skatiet [Profilu katalogs](topic:profile-catalog).
- **Nevienādi leņķi.** UEA leņķi saglabā abas malas caur IFC ievadi un izvadi un caur NC failiem, un spogulis apgriež detaļu no gala uz galu.
- **Visi darbnīcas rasējumi uzreiz.** Izvēlieties {{ui:Darbnīcas rasējums}} grupā {{ui:Izvade}}, neko neatlasot. Logā ir uzskaitīta katra detaļas marķējuma zīme, var priekšskatīt jebkuru no tām, un {{ui:Lejupielādēt visu}} saglabā vienu PDF ar lappusi katrai zīmei; katras lappuses virsraksts ir "Lapa 3 no 42". {{ui:Lejupielādēt PDF}} saglabā to, ko skatāt. Kanāliem, leņķiem un dobajiem šķērsgriezumiem tagad ir arī lapas. Skatiet [Darbnīcas rasējumu izveide](topic:shop-drawings).
- **Mani profili.** Pielāgotu profilu tagad var saglabāt katram jaunam modelim. Pielāgotā profila formā atstājiet atzīmētu {{ui:Saglabāt sadaļā Mani profili}}; zem tā esošajā sarakstā {{ui:Mani profili}} ir {{ui:Saglabāt}}, {{ui:Izmantot šeit}} un {{ui:Noņemt}}. Saraksts tiek glabāts šajā pārlūkprogrammā (līdz 200), nevis jūsu kontā. Skatiet [Plāksnes un profili](topic:plates-and-profiles).

### Aprēķins

- **Otrā kārta (P-Delta).** Atzīmējiet {{ui:Otrās kārtas (P-Delta)}} blakus {{ui:Palaist}} cilnē {{ui:Aprēķins}}, un aksiālie spēki darbojas uz deformētā rāmja. Plāksnes un stingrās grīdas paliek pirmās kārtas, ar brīdinājumu. Skatiet [Spēki, reakcijas un pārvietojumi](topic:frame-analysis).
- **Dabiskās frekvences.** Bloks {{ui:Galīgie elementi: dabiskās frekvences}} zem rezultātiem atrod tā paša modeļa zemākos režīmus, ar periodu un efektīvo modālo masu, un parāda režīmu modelī. Skatiet [Spēki, reakcijas un pārvietojumi](topic:frame-analysis).
- **Vēja slodzes un seismiskā vieta.** Cilnē {{ui:Aprēķins}} ir trīs jauni bloki: {{ui:Vēja slodzes (ASCE 7 virziena procedūra)}}, {{ui:Seismiskā vieta un sistēma (ASCE 7)}} un {{ui:ASCE 7 slodžu kombinācijas}}. Skatiet [Vējs, seismiskā vieta un ASCE 7 kombinācijas](topic:wind-seismic-combinations).

### Kopīgs darbs

- **Kursori un vārdi.** Tiešraides sesijā katras personas kursors tiek zīmēts modelī kopā ar viņa vārdu un krāsu, un tas, ko viņa atlasījusi, saņem rāmi.
- **Sekot dalībniekam.** Atveriet sesijā {{ui:Dalībnieki}} un izvēlieties {{ui:Sekot}} pie vārda; jūsu skats pārvietojas līdzi viņa skatam. Saimnieks var izvēlēties {{ui:Lūgt visiem sekot man}}. Skatiet [Sekot dalībniekam tiešraides sesijā](topic:follow-in-live).

### Visās lietotnēs

- Rīka padomi ir Bootstrap rīka padomi, sākuma padomu kartītei ir aizvēršanas poga, cilņu rindas ritina sāniski, ja tās nesaiet, un pārlūkprogrammas cilnes nosaukumā ir atvērtā dokumenta nosaukums, kam seko DetailCraft un CadCraft.

## Labots

- Pielāgotais profils tika zaudēts, kad sākāt jaunu modeli.
- Kanāli, leņķi un dobie šķērsgriezumi nebija darbnīcas rasējumu kopā.

## Patiesie ierobežojumi

- Vēja, seismiskie un galīgo elementu bloki ir pārbaudes palīglīdzekļi. Jūsu inženieris pārskata rezultātus; tā nav normas pārbaude. USGS meklēšana tika pārbaudīta uz aizstājēja, nevis uz tiešā dzīvā pakalpojuma.
- Galīgie elementi un P-Delta tika pārbaudīti pret manuāliem un slēgtas formas atrisinājumiem, nevis pret īstu ēku. Izliekšanās aprēķins nav izveidots.
- Neviens Lielbritānijas izgatavotājs vēl nav izmēģinājis Lielbritānijas izmērus, un NC faili nevienādiem leņķiem vēl nav pārbaudīti uz mašīnas.
- Darbnīcas rasējumu kopa ir tikai PDF formātā.
- Valodas, izņemot angļu, ir mašīntulkojumi.
- Windows instalētāji nav koda parakstīti (Papildu informācija, pēc tam Palaist tik un tā); macOS diska attēls nav notarizēts (ar peles labo pogu, pēc tam Atvērt).

Iepriekšējās izmaiņas ir 0.8 un 0.8.1 piezīmēs tālāk šajā lapā.

## Iepriekšējās: 0.8 un 0.8.1

Šis ir tas, kas mainījies DetailCraft 0.8 (2026. gada 1. novembris) un 0.8.1 (2026. gada 2. novembris) versijā, salīdzinot ar 0.7. 0.7 pārbaudīja tērauda elementus; 0.8 plāno celšanu, ierosina savienojumus, pārbauda pamatus un armatūru un veido koka un vieglo sienu, grīdu un jumtu karkasus.

### Jauns

**Montāža**

- **Montāžas plāns un filma.** Cilnē {{ui:Montāža}} aprakstiet celtni (kur tā stāv, tās augstāko āķi, takelāžu, kas nav slodžu diagrammā) un ierakstiet tās slodžu diagrammas rindas. DetailCraft ceļ modeli pa vienam komplektam, fāzu secībā un kārtu pēc kārtas, un pārbauda katru celšanu pret diagrammu tās rādiusā un pret jūsu iestatīto rezervi. {{ui:Saglabāt filmu}} saglabā vienu HTML failu, ko var atskaņot bezsaistē jebkurā pārlūkprogrammā, arī tālrunī. Celšanas, kas ir aiz diagrammas, pārsniedz to vai ir pārāk augstas, ir {{ui:Problēmas}}. Tas ir plāns no jūsu skaitļiem, nevis celšanas plāns. Skatiet [Montāžas plāns un filma](topic:erection-movie).

**Savienojumi**

- **Savienojumu autopilots.** Cilne {{ui:Autopilots}} aplūko katru mezglu, kuram nav savienojuma, un piedāvā savienojumu pēc formām: pamatplāksnes, bīdes ausis, galaplāksnes sijām, ko atzīmējat kā momenta sijas, savienojumus un ribas. Dodiet vienmērīgu slodzi vai viena gala bīdi, un bultu skaits seko bultas projektētajai stiprībai. {{ui:Pievienot visus}} pievieno priekšlikumus kā vienu atsaukšanas soli. Tās ir sākuma vērtības pārskatīšanai, nevis savienojuma projektējums.
- **Būvējamības pārbaudes.** {{ui:Problēmas}} bultai, ko uzgriežņu atslēga nevar sasniegt; bultām, kas pārāk tuvu atslēgas ligzdai; stūra metinājumiem ārpus to izmēru robežām un dobajiem šķērsgriezumiem, kas aiztur ūdeni. Metinājumu piekļuve ir jauna: pilnā apkārtmēra stūra metinājums, ko metinātāja degļis nevar sasniegt, tiek uzskaitīts kopā ar detaļu, kas traucē, un metinājuma daļu, ko tas ietekmē. Skatiet [Būvējamības pārbaudes](topic:constructability).

**Pamati un armatūra**

- **Pamatu pārbaudes.** Cilne {{ui:Pamats}} pārbauda pamatus, kombinētos pamatus un plātnes uz augsnes, ko aprakstāt: balstspēju, slīdēšanu un apgāšanos no ekspluatācijas slodzēm; lieci, bīdi, caurdurēšanu, enkurojuma garumu un minimālo tēraudu no faktoru slodzēm (ACI 318-19). Kolonna malas vai stūra tuvumā tiek pārbaudīta ar šķērsgriezumu, kas nogriezts ar pamata malu. Sēšanos nosaka augsnes modulis, elastīga plātne tiek atrisināta uz atsperēm no pamatnes moduļa, un pāļu grupām un atbalstsienām ir savi paneļi. Kolonnu slodzes var ierakstīt vai ņemt no {{ui:Aprēķins}}. Skatiet [Pamatu pārbaudes](topic:foundation-checks).
- **Armatūras blīvuma karte.** Cilne {{ui:Blīvums}} zīmē siltumkarti katram pamatam no augšas: kur stieņi atstāj pārāk maz vietas, lai betons nokļūtu līdz apakšai, pret tīrās atstarpes noteikumu un, ja to norādāt, pret lielāko agregātu un vibratora galviņu. Skatiet [Armatūras blīvuma karte](topic:rebar-congestion).

**Karkass un piegāde**

- **Koka un vieglā tērauda karkass.** Cilne {{ui:Karkass}} sastata sienu, grīdu un jumta paneļus ar katru gabalu, griezumu sarakstu, pērkamo krājumu un mērogā veidotu darbnīcas rasējumu. {{ui:Novietot kā elementus}} ievieto gabalus modelī, un {{ui:PDF lapas}} saglabā vienu lapu katram panelim. Izmērus, attālumus un galvenes nosakāt jūs: DetailCraft nepārbauda, vai tās nes slodzi. Skatiet [Koka un vieglā tērauda karkasa paneļi](topic:framing-panels).
- **Piegādātāja krājumi un piegādes termiņi.** Cilne {{ui:Piegāde}} nolasa piegādātāja krājumu sarakstu (CSV) un katram šķērsgriezumam, ko griezumu saraksts pērk, parāda, vai krājumā ir pietiekami un cik ilgs ir gaidīšanas laiks. Trūkstošie gabali un novēlotie šķērsgriezumi ir {{ui:Problēmas}}. Nekas netiek pasūtīts. Skatiet [Piegādātāja krājumi un piegādes termiņi](topic:supplier-stock).

**Aprēķins un projektēšana**

- **Kas pirmais salūst?** Cilnē {{ui:Aprēķins}} poga atrod noteicošo stiprības kombināciju, vājāko elementu, cik tālu slodzes var pieaugt, līdz pirmais elements sasniedz savu robežu, un vājāko galaplāksni vai bīdes ausi, ja ir zināma tās bultu bīdes stiprība. Vispirms vajag kombinācijas un projektēšanas normu. Balstspēja, bloka bīde, metinājumi un atsvirzīšanās nav pārbaudītas. Jūsu savienotais palīgs var uzdot to pašu jautājumu.
- **Tiešraide.** Atzīmējiet {{ui:Tiešraide: atrisināt no jauna pēc katra labojuma}}, un rāmis tiek atrisināts no jauna pēc katra labojuma.
- **Betons un vairāk.** Tievu kolonnu nebīdāmā rāmī projektē pēc tās palielinātā momenta (ACI 318-19 6.6.4.5). Seismisko periodu var ņemt no aprēķina ar Reilija metodi. Pārsegumam, kas veidots no plāksnēm, tiek noteikts tērauds katram slānim pēc tā momentiem, kā arī vienvirziena bīde. Skatiet [Betona elementu pārbaude un seismisko slodžu izveide](topic:concrete-and-seismic).
- **Inženierim pārbaudei.** Pamatu, betona un rezultāti "Kas pirmais salūst?" ir palīglīdzekļi. Vēja slodzes vēl nav izveidotas.

**Visās lietotnēs**

- **Valodas.** Palīdzība ir 54 valodās. Tās, kas nav angļu, ir mašīntulkojumi, līdz tās izlasa dzimtās valodas runātājs; desmit ir jaunas (lietuviešu, latviešu, bosniešu, maratu, telugu, albāņu, afrikāņu, filipīniešu, svahili, uzbeku).
- **Rīkjoslas rindas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Rīkjoslas rindas}} izvēlas pārnest, 2 rindas vai 1 rindu. Josla, kas jau ietilpst, paliek kā ir; pārējās ritina sāniski.
- **Īpašību režģis.** Pamatu lauki izmanto kopīgo režģi: sakļaujamas kategorijas un kompakts blīvums. Ierakstītā aritmētika, piemēram, 2*450, joprojām darbojas.
- **Ievades ierīces.** Skārienpaliktnis, pildspalva, 3D pele, kontrolieris un MIDI var vadīt lietotnes. Skatiet [Pārvietošanās 3D telpā](topic:navigate-3d).
- **Problēmu panelis.** Iepriekš minēto jauno pārbaužu brīdinājumi parādās tajā pašā {{ui:Problēmas}} panelī kā līdz šim.
- **Savienojiet savu MI palīgu.** Jūsu pašu palīgs, savienots caur CadCraft Studio, darbojas ar visām astoņām lietotnēm un redz tikai to, ko atļaujat. Vienas pieskaršanas savienojums, mitinātais savienotājs un jūsu pašu API atslēga Studio vēl tiks ieviesti. Skatiet [DetailCraft lietošana ar MI palīgu](topic:use-with-ai-assistants).

### Labots 0.8.1 versijā

- **Valodas Studio.** Studio un iepakotie izdevumi var mainīt valodu darbības laikā; iepriekš bija tikai angļu. Tas vēl nav pārbaudīts visās platformās: pastāstiet mums, ja valoda nemainās.
- **Atlase ar šķērsojošo logu.** 0.8.1 instalētāji satur atlasi ar logu, kas jau bija pareiza 0.8 tīmekļa versijā; vecākais instalētājs to nebija.
- **Planšetes portretā.** Brīvais režģa augstums iet audeklam, un lapas izkārtojums sākas no 760 px vai mazāk.

### Vēl nav šajā versijā

- **NC nosūtīšana uz mašīnu** nav izlaista.
- **Vēja slodzes** betonam nav izveidotas, un betona un pamatu pārbaudes ir paredzētas inženiera pārskatīšanai.
- **Koda parakstīšana.** Windows instalētāji un macOS .dmg nav parakstīti, tāpēc Windows var brīdināt, bet macOS prasa ar peles labo pogu noklikšķināt un pēc tam izvēlēties Atvērt.

Iepriekšējās izmaiņas ir aprakstītas [Jaunumi 0.7 versijā](topic:whats-new-0-7).
