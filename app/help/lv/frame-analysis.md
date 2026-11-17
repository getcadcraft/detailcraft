---
title: Rāmja aprēķins
summary: Spēki, reakcijas un pārvietojumi sijām, kolonnām un saitēm tā, kā tās zīmētas, pie jūsu noteiktajiem slodžu gadījumiem un kombinācijām. Aprēķina palīglīdzeklis, nevis normu pārbaude; konstrukciju pārbaudes ir atsevišķs solis.
keywords: aprēķins, konstrukcijas aprēķins, rāmja aprēķins, stingrības metode, slodzes, slodžu gadījums, kombinācija, pastāvīgā slodze, lietderīgā slodze, pašsvars, reakcijas, lieces moments, bīde, normālspēks, pārvietojums, deformētā forma, balsti, šarnīrs, iestiprinājums, atbrīvošana, atskaite, PDF, CSV, CraftScript, frame3d
from: ba0081bc
---

Cilne {{ui:Analysis}} apakšā atrod spēkus katrā modeļa sijā, kolonnā un saitē, reakcijas kolonnu pamatos un to, cik stipri elementi lokās, jūsu ievadītajām slodzēm.

:::warning
Tas ir **aprēķina palīglīdzeklis, nevis normu pārbaude**. Aprēķins nepiemēro projektēšanas normu: tas neizmēro elementus, nepārbauda izturību vai savienojumus un neizvēlas slodžu koeficientus. Inženieris pārbauda modeli, tā slodzes un balstus un nosaka, ko skaitļi nozīmē. Elementu pārbaudēm pēc ASCE 7 / AISC 360 vai EN 1990 / EN 1993-1-1 skatiet [Tērauda elementu pārbaude pēc projektēšanas normas](topic:design-checks), atsevišķu soli, kas arī ir palīglīdzeklis.
:::

## Palaišana

1. Atveriet cilni {{ui:Analysis}}.
2. Atlasiet vienu vai vairākus elementus skatā, izvēlieties {{ui:Case}}, {{ui:Load}} un {{ui:Direction}}, ierakstiet vērtību un nospiediet {{ui:Add load}}. Slodze, kas sadalīta pa elementu, ir kN/m, punktveida slodze — kN. {{ui:Down (gravity)}} ir parastākā.
3. Nospiediet {{ui:Run analysis}}.

Tabulā katra elementa lielākais aksiālais spēks N, bīdes Vz un Vy, lieces momenti My un Mz, griezes moments T un tā pārvietojums, sākot ar lielāko momentu; noklikšķiniet uz elementa nosaukuma, lai to atlasītu. Zemāk ir reakcijas katrā balstā. {{ui:On the model}} zīmē deformēto formu vai vienu darbību kā diagrammu blakus katram elementam, ar lielāko vērtību pie tā. Rezultāti novecojas, tiklīdz modelis mainās: palaidiet vēlreiz.

Katra slodze, gadījums un iestatījums ir viens atsaukšanas solis ({{key:Mod+Z}}) un tiek saglabāts modeļa failā.

## Slodžu gadījumi un kombinācijas

Aprēķins sākas ar trim: **Pastāvīgā** (elementu pašsvars no to zīmētajiem šķērsgriezumiem un 7850 kg/m³), **Lietderīgā** (tukša) un **Pastāvīgā + lietderīgā**. Pievienojiet savus gadījumus (vējš, sniegs …) un kombinācijas: kombinācija saskaita gadījumus ar jūsu ievadītajiem koeficientiem. Aprēķins ir lineārs, tāpēc katrs gadījums tiek atrisināts vienreiz, un kombinācijas ir summas. Koeficientus ievadiet paši vai izvēlieties projektēšanas normu un ļaujiet {{ui:Make combinations}} uzrakstīt tās normas ([Tērauda elementu pārbaude pēc projektēšanas normas](topic:design-checks)).

## Ko rāmis sastāv

- Sijas, kolonnas un saites, katra uz savas darba līnijas (līnijas, ko jūs zīmējāt), ar šķērsgriezuma reālajām īpašībām, aprēķinātām no tā kontūras. Plāksnes, kāpnes, pamati un skrūves nav rāmja daļa.
- Elements tiek sadalīts vietā, kur cita elementa gals balstās uz tā, tāpēc sija, kas pieslēdzas kolonnai vidējā augstumā, tur savienojas ar kolonnu.
- **Kolonnu pamati**: iestiprināti (sākums) vai šarnīrsaistīti (fiksēti vietā un pret griešanos, brīvi pagriežas). Balstplāksne vienmēr veido balstu.
- **Sijas gali**: galu plāksne ir stingra, bīdes saite ir šarnīrsaistīta. {{ui:Beam ends with no connection}} iestata pārējos. **Saites** ir šarnīrsaistītas abos galos.
- Atlasiet vienu elementu, lai dotu tā galiem vai kolonnas pamatam savu noteikumu.
- Viss tērauds: E = 200 GPa, G = 77 GPa.

Ja rāmis var kustēties, neko nelokot — mehānisms, piemēram, šarnīrsaistīti pamati bez saitēm vienā virzienā — izpilde apstājas un norāda, kur un kurā virzienā; turiet to ar balstu, stingru mezglu vai saiti.

## Zīmes

N > 0 ir stiepe. My > 0 liek elementa lokālajai −z pusei stiepties: sija, kas zem gravitācijas nolaižas, ir My > 0. Mz > 0 liek lokālajai −y pusei stiepties. Pārvietojums tiek mērīts no taisnās līnijas starp elementa galiem. Elementa lokālā z ass ir vērsta uz augšu (kolonnai: pa X); tā lokālās asis pagriežas kopā ar elementa rotāciju.

## Atskaite

{{ui:Report (PDF)}} un {{ui:Report (CSV)}} satur visu: pieņēmumus, uz kā rāmis tika veidots, šķērsgriezumus, gadījumus un kombinācijas, tad katram gadījumam un kombinācijai reakcijas (ar slodžu un reakciju summām, kas sabalansējas), elementu spēkus un pārvietojumus un apvalku (envelope) no visiem gadījumiem. {{ui:Export as CraftScript}} saglabā to pašu rāmi kā skriptu PartCraft Script darbvietai, kur bibliotēkas funkcija `frame3d` to atrisina soli pa solim lasāmā kodā.

## Metode

Tiešās stingrības metode: lineāra un pirmās kārtas, ja vien neatzīmējat Otrās kārtas (P-Delta). Tie ir divmezglu sija-kolonnu elementi ar aksiālo, griezes un divām lieces stingrībām (bez bīdes deformācijas, bez izliekuma); galu atbrīvojumi ar statisko kondensāciju; slodzes pa elementiem caur to pašu formas funkcijām. Tās atbildes pārbaudītas pret klasiskiem mācību gadījumiem (konsoles, vienkāršas, iestiprinātas un nepārtrauktas sijas, portāla rāmis, režģis griezē, sijveida ferma).

**Otrā kārta (P-Delta).** Atzīmējiet *Otrā kārta (P-Delta)* blakus Palaist: katra kombinācija tiek atrisināta vēlreiz, ar elementu aksiālajiem spēkiem, kas iedarbojas uz deformēto rāmi (katrs elements sadalīts 4 daļās, tāpēc lieces starp elementa galiem arī tiek ieskaitītas), līdz aksiālie spēki nostabilizējas. Rezultātu rindā norādīts pāreju skaits un tas, cik daudz pieauga nobīde; momenti, pārvietojumi, projektēšanas pārbaudes un atskaite tad izmanto šos rezultātus. Virs rāmja elastīgās kritiskās slodzes izpilde apstājas un par to paziņo. Tā ir elastīga ar mazām rotācijām, tikai lieces, bez stingrības samazinājuma vai nominālām slodzēm (pati par sevi nav AISC tiešās analīzes metode); plāksnes, sienas un stingrās grīdas paliek pirmās kārtas.

**Dabiskās frekvences (galīgie elementi).** Bloks {{ui:Finite elements: natural frequencies}} zem rezultātiem atrod zemākos modus tam pašam modelim ar galīgo elementu dzinēju: sijas ar to galu atbrīvojumiem, plāksnes un sienas kā plakanus četrmezglu čaulas elementus, stingras grīdas, balstus. Izvēlieties modu skaitu (3, 6, 10 vai 20) un plāksnes elementu (četrmezglu čaula biezām vai plānām plāksnēm vai plānās plāksnes elements) un nospiediet {{ui:Find the frequencies}}. Tabulā katra moda frekvence Hz, periods sekundēs un tā efektīvā modālā masa pa X, Y un Z kā daļa no masas, kas var kustēties; {{ui:Show on the model}} zīmē jebkuru modu tāpat kā deformēto formu. Masa ir materiāla blīvuma reizinājums ar tilpumu: slodzes masu nepievieno, un materiālam bez blīvuma masas nav. Atskaite (PDF, CSV) satur tabulu. Tā ir elastīga un tikai mazām kustībām, un šeit seismiskā vai vēja slodze no normas netiek veidota. Tā nav normu pārbaude; jūsu inženieris pārskata rezultātus.

**Atbildes spektrs, laika vēsture un pārspiedes analīze (pushover).** Zem frekvencēm ir vēl trīs bloki, kas izmanto to pašu galīgo elementu modeli. Visiem trim masa ir materiāla blīvums plus atzīmēto gadījumu lejupvērstās slodzes, katra reizināta ar jūsu ievadītu koeficientu (piemēram, Pastāvīgā ar 1 un Lietderīgā ar daļu, ko skaitāt kā masu).

{{ui:Atbildes spektrs}} nolasa katru modu no jūsu ievadītā spektra (periodu un paātrinājuma tabulas vai ASCE 7 formas no SDS, SD1 un TL; poga {{ui:Izmantot seismiskā bloka vērtības}} nokopē tās no seismiskā bloka). Modus apvieno ar CQC, SRSS, desmit procentu noteikumu vai absolūto summu, pēc tam apvieno X, Y un Z virzienus (100 % + 30 % vai SRSS). Tā dod pamata bīdes spēku, stāvu nobīdes, elementu galu spēkus un modu tabulu, kas brīdina, ja izmantotie modi nes mazāk par 90 % masas. Rezultātus var mērogot ar koeficientu vai līdz pamata bīdes spēkam, ko ievadāt; bloks pats šo pamata bīdes spēku nekad neaprēķina. Rezultātiem zīmes nav.

{{ui:Laika vēsture}} veic zemes paātrinājuma aprēķinu ar modālo superpozīciju (precīzi ierakstā starp punktiem taisnām līnijām) vai ar tiešo integrēšanu (Newmark vidējā paātrinājuma metode ar Reilija slāpēšanu). Ievade ir izdomēta sinusoīda vai impulss (vienmēr atzīmēts kā sintētisks), jūsu ielīmēts ieraksts vai atvērts teksta fails (laiks un paātrinājums, viens paātrinājums katrā rindā ar soli, vai PEER tipa fails ar galvenes DT=; g vai m/s²). Tā dod jumta nobīdi un pamata bīdes spēku pret laiku, katra līmeņa nobīdi un elementu galu spēku aploksni. Modeļi ar ļoti garu ierakstu to saglabā tikai sesijai.

{{ui:Pārspiedes analīze (pushover)}} bīda jumtu sānis pa maziem soļiem (forma kā pirmajam modim vai vienmērīga), ar plastiskiem šarnīriem elementu galos, kuriem ir I forma. Šarnīrs sāk tecēt plastiskajā momentā, kas samazinās, kad aksiālais spēks pieaug (aprēķināts no zīmētās formas, noapaļojumi neņemti vērā); sacietēšana ir pēc izvēles, P-delta ir pēc izvēles, un gravitācijas kombināciju var pielietot vispirms. Tā dod kapacitātes līkni (pamata bīdes spēks pret jumta nobīdi), pirmo šarnīru un katra šarnīra stāvokli un plastisko rotāciju. {{ui:Run the nonlinear time history}} palaiž tos pašus šarnīrus zem laika vēstures bloka ieraksta mazos modeļos. Šarnīri veidojas tikai elementu galos (novietojiet mezglu tur, kur tam jāveidojas laidumā); elements, kas atbrīvots abos galos, šarnīru nesaņem, un saišu tecēšana un izliekšanās nav modelēta; plāksnes un sienas paliek elastīgas; pieņemšanas kritēriji nav doti. Nav normu pārbaude; jūsu inženieris pārskata rezultātus. Iestatījumi tiek saglabāti kopā ar modeli, un atskaitē ir tabulas.

## Vēl nav izveidots

Vēl nav izveidots: izliekšanās analīze, trūkstošās masas korekcija atbildes spektram, ierakstu mērogošana, šarnīru pieņemšanas kritēriji (dinamiskā reakcija ir, augstāk), automātiski veidotas laukuma un vēja slodzes (seismiskie spēki uz stāviem ir [Pārbaudīt betona elementus un izveidot seismiskās slodzes](topic:concrete-and-seismic)), elementu nobīdes, saites, kas darbojas tikai ar stiepi. Skatiet [Vēl nav izveidots](topic:not-built-yet).
