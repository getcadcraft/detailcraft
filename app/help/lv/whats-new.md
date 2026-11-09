---
title: Jaunumi 0.8 un 0.8.1 versijā
summary: Montāžas filma no celtņa slodžu diagrammas, savienojumu autopilots, armatūras blīvuma karte, pamatu pārbaudes, koka un vieglā tērauda karkasa paneļi, izbūvējamības un metinājumu piekļuves pārbaudes, piegādātāju krājumi, kas pirmais pārtrūks, tiešraides atkārtota atrisināšana, papildu betona pārbaudes un 0.8.1 labojumi.
keywords: jaunumi, kas ir jauns, izlaiduma piezīmes, izmaiņu žurnāls, izmaiņas, 0.8, 0.8.1, versija, jaunas funkcijas, montāža, celtnis, slodžu diagramma, filma, autopilots, savienojumi, armatūra, blīvums, pamats, nosēšanās, karkass, koks, tērauds, griezuma saraksts, izbūvējamība, metinājuma piekļuve, piegādātājs, krājums, piegādes laiks, kas pirmais pārtrūks, tiešraide, betons, seismika, pārsegums, valodas, asistents
from: 6e33e052
---

Šīs ir izmaiņas DetailCraft 0.8 (2026. gada 1. novembris) un 0.8.1 (2026. gada 2. novembris) versijā salīdzinājumā ar 0.7. 0.7 pārbaudīja tērauda elementus; 0.8 plāno celšanu, piedāvā savienojumus, pārbauda pamatus un armatūru un veido koka un vieglā tērauda sienu, grīdu un jumtu karkasus.

## Jauns

### Montāža

- **Montāžas plāns un filma.** Cilnē {{ui:Montāža}} aprakstiet celtni (kur tas stāv, tā augstāko āķi, takelāžu, kas nav iekļauta diagrammā) un ierakstiet tā slodžu diagrammas rindas. DetailCraft paceļ modeli pa vienam mezglam, fāzes secībā un kārtu pa kārtai, un pārbauda katru celšanu pret diagrammu tās attālumā un pret jūsu iestatīto rezervi. {{ui:Saglabāt filmu}} ieraksta vienu HTML failu, kas atskaņojas bezsaistē jebkurā pārlūkā, pat tālrunī. Celšanas, kas pārsniedz diagrammu, iziet ārpus tās vai ir pārāk augstas, ir uzskaitītas {{ui:Problēmas}}. Tas ir plāns no jūsu skaitļiem, nevis celšanas plāns. Skatiet [Montāžas plāns un filma](topic:erection-movie).

### Savienojumi

- **Savienojumu autopilots.** Cilne {{ui:Autopilots}} apskata katru mezglu bez savienojuma un piedāvā savienojumu pēc formām: balstplāksnes, šķērsplāksnes, galaplāksnes sijām, kuras atzīmējat kā momentsijas, lāpījumus un fasonplāksnes. Norādiet vienmērīgu slodzi vai vienu gala šķērsspēku, un skrūvju skaits seko skrūves projektētajai izturībai. {{ui:Pievienot visus}} pievieno piedāvājumus kā vienu atsaukšanas soli. Tās ir sākuma vērtības, ko pārskatīt, nevis savienojuma projektēšana.
- **Izbūvējamības pārbaudes.** {{ui:Problēmas}} atrod skrūvi, ko nevar sasniegt ar uzgriežņatslēgu, skrūves, kas ir pārāk tuvu uzgriežņgalvai, stūra metinājumus ārpus to izmēra robežām un dobus profilus, kuros uzkrājas ūdens. Metinājumu piekļuve ir jauna: visapkārtējs stūra metinājums, kuram metinātāja degļa uzgalis nevar piekļūt, ir uzskaitīts kopā ar traucējošo detaļu un skartās metinājuma daļas īpatsvaru. Skatiet [Izbūvējamības pārbaudes](topic:constructability).

### Pamati un armatūra

- **Pamatu pārbaudes.** Cilne {{ui:Pamats}} pārbauda pamatus, kombinētos pamatus un plāksnes uz augsnes, ko jūs aprakstāt: nesspēju, slīdēšanu un apgāšanos no ekspluatācijas slodzēm; lieci, šķērsspēku, caurduršanu, enkurošanu un minimālo tēraudu no faktorētām slodzēm (ACI 318-19). Kolonna pie malas vai stūra tiek pārbaudīta ar griezumu, kas nogriezts pēc pamata malas. Nosēšanās tiek aprēķināta no augsnes moduļa, elastīga plāksne tiek atrisināta uz atsperēm no pamatnes moduļa, un pāļu grupām un atbalstsienām ir savi paneļi. Kolonnu slodzes var ievadīt vai ņemt no {{ui:Aprēķins}}. Skatiet [Pamatu pārbaudes](topic:foundation-checks).
- **Armatūras blīvuma karte.** Cilne {{ui:Blīvums}} zīmē katra pamata karsto karti tā, kā tas redzams no augšas: kur stieņi atstāj pārāk maz vietas betonam, lai tas nokļūtu lejā, salīdzinot ar brīvā attāluma noteikumu un, ja jūs to norādāt, ar lielāko agregātu un vibratora galviņu. Skatiet [Armatūras blīvuma karte](topic:rebar-congestion).

### Karkass un piegāde

- **Koka un vieglā tērauda karkasa paneļi.** Cilne {{ui:Karkass}} karkasē sienu, grīdu un jumta paneļus ar katru gabalu, griezuma sarakstu, materiālu, kas jāpērk, un mērogotu darbnīcas rasējumu. {{ui:Novietot kā elementus}} ievieto gabalus modelī, un {{ui:PDF lapas}} saglabā vienu lapu katram panelim. Izmēri, atstatumi un pārsedzes ir jūsu: DetailCraft nepārbauda, vai tās nes slodzi. Skatiet [Koka un vieglā tērauda karkasa paneļi](topic:framing-panels).
- **Piegādātāju krājumi un piegādes laiki.** Cilne {{ui:Piegāde}} nolasa piegādātāja krājumu sarakstu (CSV) un katram griezuma saraksta profilam parāda, vai krājumā ir pietiekami daudz un cik ilgi jāgaida. Trūkumi un novēlotie profili ir {{ui:Problēmas}}. Nekas netiek pasūtīts. Skatiet [Piegādātāju krājumi un piegādes laiki](topic:supplier-stock).

### Analīze un projektēšana

- **Kas pirmais pārtrūks?** Cilnē {{ui:Aprēķins}} poga atrod noteicošo izturības kombināciju, vājāko elementu, to, cik tālu slodzes var pieaugt, pirms pirmais elements sasniedz savu robežu, un vājāko galaplāksni vai šķērsplāksni, ja ir zināma tās skrūvju šķērsizturība. Vispirms nepieciešamas kombinācijas un projektēšanas kods. Balstspiediens, bloka bīde, metinājumi un prying efekts netiek pārbaudīti. Jūsu pievienotais asistents var to pašu pajautāt.
- **Tiešraide.** Atzīmējiet {{ui:Tiešraide: atrisināt no jauna pēc katra labojuma}}, un rāmis tiek atkal atrisināts pēc katra labojuma.
- **Betons un vairāk.** Tieva kolonna nebīdāmā rāmī tiek projektēta pēc tās palielinātā momenta (ACI 318-19 6.6.4.5). Seismisko periodu var ņemt no analīzes ar Reilija metodi. Pārsegums, kas veidots no plāksnēm, katram slānim saņem nepieciešamo tēraudu no tā momentiem un vienvirziena šķērsspēka. Skatiet [Betona elementu pārbaude un seismiskās slodzes](topic:concrete-and-seismic).
- **Inženierim pārbaudei.** Pamatu, betona un „Kas pirmais pārtrūks?” rezultāti ir palīglīdzekļi. Vēja slodzes nav ieviestas.

### Visās lietotnēs

- **Valodas.** Palīdzība ir 54 valodās. Visas, izņemot angļu valodu, ir mašīntulkojuma melnraksti, līdz tos izlasa dzimtā valoda runājošs cilvēks; desmit ir jaunas (lietuviešu, latviešu, bosniešu, maratu, telugu, albāņu, afrikāņu, filipīniešu, svahili, uzbeku).
- **Rīkjoslas rindas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Rīkjoslas rindas}} izvēlas ietīt, 2 rindas vai 1 rindu. Josla, kas jau ietilpst, paliek kāda ir; pārējās ritina sāniski.
- **Rekvizītu režģis.** Pamata lauki izmanto kopīgo režģi: sakļaujamas kategorijas un kompakts blīvums. Ievadītā aritmētika, piemēram, 2*450, joprojām darbojas.
- **Ievades ierīces.** Skārienpaliktnis, pildspalva, 3D pele, vadības ierīce un MIDI var vadīt lietotnes. Skatiet [Pārvietošanās 3D](topic:navigate-3d).
- **Problēmu panelis.** Iepriekš minēto jauno pārbaužu brīdinājumi parādās tajā pašā {{ui:Problēmas}} panelī kā agrāk.
- **Savienojiet savu MI.** Jūsu pašu asistents, savienots caur CadCraft Studio, darbojas ar visām astoņām lietotnēm un redz tikai to, ko atļaujat. Savienošana ar vienu klikšķi, mitinātais savienotājs un jūsu pašu API atslēgas iestatīšana Studio vēl ir plānota. Skatiet [Lietot DetailCraft ar AI asistentu](topic:use-with-ai-assistants).

## Labots 0.8.1 versijā

- **Valodas Studio.** Studio un iepakotie izdevumi var mainīt valodu darbības laikā; iepriekš bija tikai angļu valoda. Tas vēl nav pārbaudīts uz visām platformām: paziņojiet, ja valoda nemainās.
- **Atlase ar šķērsojošu logu.** 0.8.1 instalētājos ir jau 0.8 tīmekļa versijā pareizi iestatītā atlase ar logu; vecākais instalētājs to nedarīja.
- **Planšetes portreta režīmā.** Brīvais režģa augstums tiek atdots zīmēšanas laukumam, un lapas izkārtojums sākas pie 760 px vai mazāk.

## Vēl nav šajā versijā

- **Nosūtīt NC uz mašīnu** vēl nav izlaists.
- **Vēja slodzes** betonam vēl nav ieviestas, un betona un pamatu pārbaudes ir paredzētas inženierim pārskatīšanai.
- **Koda parakstīšana.** Windows instalētāji un macOS .dmg nav parakstīti, tāpēc Windows var parādīt brīdinājumu, bet macOS prasa noklikšķināt ar peles labo pogu un izvēlēties Atvērt.

Iepriekšējās izmaiņas ir aprakstītas [Jaunumi 0.7 versijā](topic:whats-new-0-7).
