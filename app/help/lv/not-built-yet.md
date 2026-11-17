---
title: Kas vēl nav izveidots
summary: Ko šī agrīnā DetailCraft versija nevar darīt un ko šodien darīt tā vietā.
keywords: ierobežojumi, trūkst, ceļvedis, nav atbalstīts, nāk, plānots, risinājums, todo
from: ea411885
---

DetailCraft ir agrīna versija. Šajā lapā uzskaitīts, ko tā vēl nedara, lai varētu plānot ap to. Nekas šeit nav solījums par datumu.

## Modelēšana

| Vēl nav | Tā vietā šodien |
|---|---|
| Elementa viena gala vilkšana (stiepšana) | Rediģējiet {{ui:Sākums}} vai {{ui:Gals}} zem {{ui:Gali (x, y, z mm)}} panelī {{ui:Rekvizīti}} |
| Atlases filtrs (tikai sijas, tikai viens profils) | Velciet logu, tad {{key:Shift}}+klikšķis, lai izņemtu detaļas |
| Atlases masīvs; pagriešana ap slīpu asi; spoguļošana slīpā plaknē | Kopējiet un ielīmējiet ar nobīdi vai {{ui:Dublēt}} to; pagriešana un spoguļošana darbojas plānā ([Atlasīt ar logu, pārvietot, pagriezt, spoguļot un mainīt daudzus](topic:select-and-change)) |
| Punkti ārpus režģa, klikšķinot | Novietojiet režģī un pēc tam ierakstiet galu koordinātas |
| Fasādes gar numurētām režģa līnijām; saglabāti skati; darba plaknes | Izmantojiet {{ui:3D}} vai {{ui:Pievienot pēc režģa}} |
| Caurumi, kas 3D skatā zīmēti kā īsti griezumi | Caurumi redzami kā tumši aizbāžņi; tie ir īsti katrā eksportā |
| Noapaļoti vai slīpi izgriezumi, citi griezumi un savienojumu detaļas | Tikai taisni izgriezumi uz I profiliem |
| Caurumi, ko pievienojat leņķiem un apaļām caurulēm | Leņķu caurumi nāk tikai no [fasējuma plāksnēm](topic:brace-gussets) |
| Collu ievade | Ievadiet milimetrus (25.4 uz collu) |
| Pielāgota profila rediģēšana vai noņemšana | Pievienojiet labotu profilu ar jaunu nosaukumu |

## Kāpnes

| Vēl nav | Tā vietā šodien |
|---|---|
| Margas, laukumi, kāju plāksnes, režģa pakāpieni, spirālveida un dog-leg kāpnes | Tikai taisnas kāpņu daļas; skatiet [Kāpnes](topic:stairs) |
| Kāpņu balstu galu griezumi pret grīdām | Balsti ar taisniem galiem; griezt tos ceha programmatūrā |

## Savienojumi

DetailCraft izveido sešus savienojumus: fasējuma plāksni (skatiet [Fasējuma plāksnes](topic:brace-gussets)); skrūvētu savienojumu starp divām viena I profila daļām (skatiet [Savienojumi](topic:splices)); stūra savienojumu starp diviem I profiliem, kas saskaras leņķī, tikai griezts vai ar skrūvētām galu plāksnēm (skatiet [Stūra savienojumi](topic:mitres)); līdzenu vai izstieptu skrūvētu galu plāksni no līmeņa, vertikālas I profila sijas pie I profila kolonnas flanša vai stīpas; šķēru plāksni no sijas (taisnas, šķības vai slīpas) pie kolonnas flanša vai stīpas; un kolonnas pamatnes plāksni ar četrām enkurskrūvēm.

| Vēl nav | Tā vietā šodien |
|---|---|
| Šķības vai slīpas galu plāksnes | Izmantojiet [šķēru plāksnes](topic:shear-tabs), kas ņem vērā šķības un slīpas sijas |
| Stiprinājuma leņķi; savienojumu aizpildes plāksnes un savienojumi starp dažādiem izmēriem; stūra fasējuma plāksnes, kas metinātas pie sijas un kolonnas; nošķeltas fasējuma plāksnes | Detalizējiet tos citā programmatūrā vai pievienojiet plāksnes un caurumus ar roku kā atsevišķas detaļas; skatiet [Savienojumi](topic:splices), [Fasējuma plāksnes](topic:brace-gussets) |
| Nošķeltas vai konusveida pamatnes stiprinājumi; injekcijas caurumi; pamatu kabata šķēru ķepai | Taisni stiprinājumi; skatiet [Pamatnes plāksnes](topic:base-plates) |
| Pastiprinājumi (haunches); metinātie stūra savienojumi ar sitiena metinājumu; stiprinājumi līnijā ar otra elementa flanšiem | [Stūra savienojums](topic:mitres) ar galu plāksnēm un stīpu stiprinātājiem vai vienkāršs stūra griezums; pievienojiet citas plāksnes ar roku kā atsevišķas detaļas |
| Savienojumu projektēšanas pārbaudes (izturība) | Pārbaudiet savienojumus ar inženiera aprēķiniem; DetailCraft brīdina tikai par malas attālumu un atstarpi |
| Garenie caurumi | Tikai apaļi caurumi |

## Aprēķins

| Vēl nav | Tā vietā šodien |
|---|---|
| Projektēšanas pārbaudes ārpus tērauda I profiliem: caurules, leņķi, kanāli, metinātas formas, tievas vai 4. klases detaļas, vērpe, savienojumi; betons: nobīdes tievums, vērpe, seismiskā detalizācija, pārsegi un sienas | Cilne {{ui:Aprēķins}} pārbauda tērauda I profilus pēc AISC 360 vai EN 1993-1-1 ([Pārbaudīt tērauda elementus pēc projektēšanas normas](topic:design-checks)); pārējo tā atzīmē kā "not checked"; visu pārskata inženieris |
| Izliekuma analīze, vibrācija | Otrās kārtas ir tikai P-Delta (elastīgi); izliekuma analīzes nav (modālā, atsauces spektra, laika vēstures un pārspiedes analīze ir cilnē {{ui:Aprēķins}}) |
| Projektēšanas pārbaudes, ko inženieris ir pārskatījis | Līdz tam tās ir palīglīdzeklis: pārbaudiet divus vai trīs elementus ar roku vai inženiera programmatūrā, pirms paļaujaties uz tām |
| Stāvu, vēja un sniega slodzes, kas izveidotas no laukumiem | Ievietojiet slodzes uz elementiem ar roku, kN/m vai kN |
| Elementu nobīdes, ekscentriskas savienojumi, tikai spiedes saites, plāksnes un pamati rāmī | Elementi tiek analizēti pēc to darba līnijām; saites nes gan stiepi, gan spiedi |

## Armatūra

| Vēl nav | Tā vietā šodien |
|---|---|
| Apaļas kolonnas, spirāles, slīpas vai liektas sijas, pārsegi, kas nav taisnstūri, sienas, kas nav taisnas | Taisnstūra sijas, kolonnas, pārsegi un sienas ([Detalizēt dzelzsbetonu](topic:reinforced-concrete)) |
| Stieņi, kas saliekti pārklājumā, pārklājumi ar nobīdi, pārklājumi tur, kur izvēlaties | Pārklājumi ar vienādiem soļiem, katrs stienis pārklāts vienā šķērsgriezumā (ACI B klase, EN α6 = 1.5) |
| Stūra stieņi atverēs, pārsitēja šķērsarmatūra, seismiskā detalizācija (ACI 318-19 18. nodaļa) | Papildstieņi katrā atveres pusē; pārējo pārbaudiet paši |
| Konstrukciju projektēšanas programmas pašu failu nolasīšana | Eksportējiet IFC no tās: tās IfcReinforcingBar ienāk kā stieņi ([Stieņi no IFC faila](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Formas kodi, kas pārsniedz taisnu, vienu liekumu un U; ACI 315 tipi taisniem un vienam āķim stieņiem | Trīs formas drukājas kā BS 8666 00, 11, 21 vai ACI Type 2; skatiet [Armatūras atsauce](topic:rebar-reference) |
| Metriskie stieņi, kas nav BS 4449 H8–H40 (piem., CSA 10M–35M) | ASTM mīkstā metriskā nosaukumi #10–#36 vai BS stieņi |

## Zīmējumi un eksporti

| Vēl nav | Tā vietā šodien |
|---|---|
| Portreta lapas, A0 un lapas jūsu izmērā; vispārīgā izkārtojuma skati uz šķībiem režģiem | Ainava A4 līdz A1 un ANSI B līdz D ([Vispārīgā izkārtojuma un montāžas rasējumi](topic:drawings)); mērogojiet PDF, lai drukātu citā izmērā |
| Metinājumu simboli vienas detaļas darbnīcas rasējumos; simboli, kas nav stūra metinājumi | Montāžas rasējumos ir stūra metinājumu simboli; darbnīcas rasējums metinājumu dod tekstā |
| Rasējuma rediģēšana lietotnē | Mainiet modeli un izveidojiet rasējumu no jauna; atzīmējiet PDF ar PDF lietotni, piemēram, MarkupCraft |
| Rasējumi kā DWG ar dimensiju objektiem vai modelis pilnā mērogā modeļa telpā ar lapām kā izkārtojumiem | Katra lapa ir pilna izmēra DWG vai DXF no papīra, izmēri kā līnijas un cipari ([Vispārīgā izkārtojuma un montāžas rasējumi](topic:drawings#download)) |
| NC caurumi apaļās caurulēs, izgriezumi uz leņķiem un apaļām caurulēm NC failos | Netiek ierakstīti; skatiet [NC faila lauki](topic:nc1-fields) |
| Slīpumi, marķējumi un iekšējie kontūri NC failos | Pašlaik nav |
| Skrūvju caurumi, skrūves, metinājumi un pamati USD eksportā | Tie ir IFC, NC un BOM izvadē; skatiet [Eksportēt tērauda modeli kā USD](topic:usd) |
| Savienojumu, pamatu, garenu vai taisnstūra caurumu un caurumu apaļās caurulēs ievietošana no IFC faila | {{ui:Importēt IFC}} ievieto sijas, kolonnas, elementus, plāksnes, režģus, līmeņus, apaļus caurumus, izgriezumus, skrūves un armatūras stieņus, un tā pārskatā uzskaitīts, ko tā nav ievietojusi |
| Pielāgoti pārskatu izkārtojumi | Trīs CSV faili |

## Paneļi

| Vēl nav | Tā vietā šodien |
|---|---|
| Apakšā esošo pārskatu ({{ui:Problēmas}}, {{ui:Materiālu saraksts}}, {{ui:Liekšanas specifikācija}}) pārvietošana | Tikai paneļi {{ui:Modelis}} un {{ui:Rekvizīti}} var pārvietoties. Skatiet [Izkārtot paneļus](common:arrange-panels) |

## Kopā darbs un saglabāšana

| Vēl nav | Tā vietā šodien |
|---|---|
| Mākoņu saglabāšana un sinhronizācija starp datoriem | Saglabājiet `.detailcraft.json` failus un kopīgojiet tos kā jebkuru failu. Mākoņu saglabāšana vēl nav pieejama |
| Citu cilvēku kursori un "rediģē" etiķetes Live TeamWork sesijā; režģi, līmeņi un fāzes, kas apvienoti pa vienam vienumam | Rediģēšana joprojām apvienojas (režģi, līmeņi un fāzes tiek apvienoti veselumā, vēlākā izmaiņa uzvar); skatiet [Detalizēt vienu konstrukciju kopā, tiešraidē](topic:work-live) |
| Uzaicinājuma saites uz Live TeamWork sesiju internetā | Pievienojieties ar īsu kodu tajā pašā tīklā |

## Platformas

- DetailCraft ir paredzēts darbvirsmas, klēpjdatora vai planšetdatora ekrānam. Tas darbojas arī tālrunī: modelis saglabā ekrānu un paneļus, un pārskati atveras kā lapas no joslas apakšā, bet paneļiem ir maz vietas.
- Lietošanai bezsaistē vispirms DetailCraft jāsaglabā bezsaistei ar {{ui:Saglabāt bezsaistei}} lietotnes joslā; kad tur parādās {{ui:Gatavs darbam bezsaistē}}, viss šajā versijā darbojas bez savienojuma. Skatiet [Darbs bezsaistē](common:offline).

Ja kāds no šiem trūkumiem bloķē jūsu darbu, paziņojiet mums caur [atbalsta lapu](https://getcadcraft.com/support); tas palīdz nolemt, ko izveidot nākamo.
