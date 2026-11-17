---
title: Ja nākat no citas detalizēšanas programmatūras
summary: Kā pilnas detalizēšanas programmatūras paradumi atbilst DetailCraft un atšķirības, kas pārsteidz pieredzējušus detalizētājus.
keywords: pāriešana, migrēšana, pazīstams, darbplūsma, salīdzinājums, atšķirības, numerācija, komponenti, katalogs, rasējumi, paradumi
from: 39639a5d
---

Ja detalizējat programmā Tekla Structures, lielākā daļa DetailCraft izskatīsies pazīstama: režģi, līmeņi, profili no kataloga, detaļas un mezgli, savienojumi, numerācija, NC faili, IFC. Mērogs ir ļoti atšķirīgs: Tekla Structures ir pilnvērtīga ražošanas sistēma, bet DetailCraft ir maza, agrīnas stadijas pārlūkprogrammas lietotne, kas veic dažus uzdevumus no sākuma līdz galam. Šajā lapā ir norādīts, kur jūsu paradumi saglabājas un kur nē.

:::tip
Ja jūsu rokas pazīst Tekla Structures lentu, izvēlieties izvēlnes stilu {{ui:Tērauda lente}} sadaļā {{ui:Iestatījumi}} › {{ui:DetailCraft}} › {{ui:Izvēlnes, taustiņi un pele}}: cilnes Modelēšana, Detalizēšana, Rediģēšana, Rasējumi, Izgatavošana un Skats, un vidējā poga panoramē. Ja nākat no AutoCAD un patīk rakstīt komandas, {{ui:Klasiskais zīmēšanas stils}} pievieno komandrindu (BEAM, COLUMN, ENDPLATE, ZOOM …). Skatiet [Izvēlnes, taustiņi un pele](topic:menus-keys-and-mouse).
:::

## Ātrā karte

| Jums ierasts | DetailCraft |
|---|---|
| Režģu veidošana ar koordinātēm režģa dialogā | {{ui:Režģi}} kreisajā panelī: uzraksti un attālumi starp līnijām, nevis absolūtās koordinātes. Numurētās līnijas iet vienā virzienā, burtiem apzīmētās — otrā |
| Līmeņi kā režģa Z koordinātes | Atsevišķs {{ui:Līmeņi}} saraksts, katrā rindā nosaukums un augstums, lietots ar {{ui:Lietot līmeņus}} |
| Punktu atlase jebkur ar piesaisti | Klikšķi piesaistās tikai režģa krustpunktiem. Punkti ārpus režģa tiek ierakstīti elementa {{ui:Gali (x, y, z mm)}} |
| Kolonnas, sijas un plāksnes komandas | {{ui:Kolonna}} ({{key:C}}), {{ui:Sija}} ({{key:B}}), {{ui:Saite}} ({{key:R}}), {{ui:Plāksne}} ({{key:P}}), {{ui:Pamats}} ({{key:F}}) |
| Detaļas rekvizītu dialogs (divreiz noklikšķiniet uz detaļas) | Viens klikšķis: labajā pusē esošais {{ui:Rekvizīti}} panelis vienmēr ir aktīvs; dialoga nav, nav arī pogu Mainīt vai Lietot |
| Novietojums plaknē, pagrieziens un dziļuma iestatījumi | {{ui:Pozīcija}} (tērauda augša, centrēts vai apakša uz līnijas) un {{ui:Pagrieziens (°)}}. Atsevišķu horizontālo nobīžu nav |
| Profilu katalogs | Fiksēts saraksts ar 2,311 publicētiem izmēriem (AISC W, S, C, L, HSS, Pipe; Eiropas IPE, HEA, HEB, UPN; Lielbritānijas UB, UC, PFC, EA, UEA, SHS, RHS, CHS un aukstā veidotie dobie profili), kā arī parametriskas plāksnes un jūsu pašu {{ui:Pielāgots profils}} šķērsgriezumi |
| Materiālu katalogs | Septiņas markas sarakstā: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Savienojuma komponenta pielietošana un tā dialogs | Atlasiet siju, izvēlieties {{ui:Galaplāksnes}}. Iestatījumi parādās {{ui:Rekvizīti}} panelī. Ir tikai divi savienojumi (galaplāksne pie kolonnas flanšas, pamatplāksne) |
| Automātiskais savienojums vai mezgla kopēšana līdzīgiem mezgliem | Atlasiet savienojumu, izvēlieties {{ui:Lietot līdzīgajām (n)}} |
| Numerācija ar sērijām un sākuma numuriem | Komandas nav: marķējumi atjaunojas paši pēc katras izmaiņas, ar fiksētiem priekšvārdiem c, b, br, p un C, B, BR, P |
| Skrūvju un caurumu dialogi | Caurumi tiek ierakstīti pēc virsmas un novietojuma. Skrūves rodas tikai no savienojumiem |
| Griešanas, pielāgošanas un daudzstūra griešanas rīki | Izgriezumi (augšā vai apakšā, abos galos) tikai I profiliem. Savienojumu nogriešana notiek automātiski |
| Atskaites un veidnes | Trīs fiksētas atskaites cilnēs apakšā un CSV lejupielādes |
| Rasējumu izveide un rasējumu saraksts | Viens darbnīcas rasējums katram detaļas marķējumam, visi izveidoti vienlaikus, priekšskatīti un lejupielādēti kā viens PDF vai lapa pa lapai. Nekas netiek saglabāts vai rediģēts |
| NC failu eksports | {{ui:NC faili}}: viens DSTV fails katram detaļas marķējumam, tikai I profili un plāksnes, arhivēts zip |
| IFC eksports | {{ui:IFC}}: IFC4 visam modelim, ar stiegrojumu |
| Stiegrojums jebkurā betona detaļā | Stiegrojums tikai taisnstūra plātņveida pamatos, ASV stieņu izmēri, ar apakšējo tīklu un sākuma stieņiem |
| Modelis saglabāts projekta mapē, vairāklietotāju režīms | Viens `.detailcraft.json` fails, ko lejupielādējat. Viens lietotājs, jūsu datorā |
| Atsaukšanas vēsture | {{key:Mod+Z}} un {{key:Mod+Y}}, līdz 200 soļiem, saglabājas, līdz atverat vai sākat citu modeli |

## Atšķirības, kas pārsteidz cilvēkus

### Marķējumi mainās paši

Numerācijas soļa nav. Marķējumi tiek pārrēķināti pēc katras izmaiņas, tāpēc tie vienmēr ir aktuāli, taču tie var arī pārnumurēties: pievienojiet kolonnu, un vakardienas c3 tagad var būt c4. Vecu marķējumu saglabāšanai nav „numerācijas vēstures”. Pabeidziet modeli un tad izsniedziet BOM, NC failus un darbnīcas rasējumus kopā no viena saglabāta faila.

### Vidējā peles poga tuvina, nepanoramē

3D skatā: vilkšana ar kreiso pogu pagriež, vilkšana ar labo pogu panoramē, ritenītis tuvina, un vilkšana ar vidējo pogu arī tuvina. Turot {{key:Shift}} un velkot ar kreiso pogu, arī panoramē. Ritenītis tuvina uz skata vidu, nevis uz rādītāju. Rotācijas centra izvēles nav: modelis griežas ap skata vidu. Skatiet [Pārvietošanās 3D skatā](topic:navigate-3d).

### Kolonnas pēc noklusējuma ir vērstas vienā virzienā

Ar pagriezienu 0 kolonnas flanšas ir vērstas pa numurēto režģa virzienu. Sijas, kas iet starp burtiem apzīmētām režģa līnijām, piestiprinās pie sienas, un galaplāksnes tur netiek pieņemtas („Sijas, kas piestiprinās pie kolonnas sienas, vēl nav izveidotas”). Pirms savienojumu pievienošanas pagrieziet šīs kolonnas par 90°.

### Fasādes tikai burtiem apzīmētās līnijās

{{ui:Fasāde}} skatās tikai gar burtiem apzīmētām režģa līnijām. Gar numurētām līnijām skatu nav, nav saglabātu skatu un darba plakņu. Rāmjiem uz numurētām līnijām izmantojiet {{ui:3D}} vai {{ui:Pievienot pēc režģa}}.

### Atlase, kopēšana un pārvietošana

Atlasiet vairākas detaļas ar {{key:Shift}}+klikšķi vai {{key:Mod+A}}, pēc tam kopējiet, izgrieziet, ielīmējiet (režģa krustpunktā, ierakstītā nobīdē vai vietā) un dublējiet tās, ieskaitot savienojumus ([Kopēt, ielīmēt un dublēt](topic:copy-paste)). Logu atlases, atlases filtra, pārvietošanas, spoguļošanas vai masīva nav, un rekvizīti tiek mainīti pa vienam elementam {{ui:Rekvizīti}} panelī.

### Režģis nevelk līdzi elementus

Elementi saglabā savas koordinātes, mainot režģa attālumus; nekas nepārvietojas kopā ar režģa līnijām. Mainiet režģi, pirms novietojat tēraudu, vai vēlāk rediģējiet katra elementa galu koordinātes.

### Savienojumi netiek projektēti

Abi savienojumi novieto plāksnes, caurumus, skrūves un metinājumus pēc jūsu ievadītajiem skaitļiem. Nekādas projektēšanas pārbaudes nav, tikai malu un attālumu brīdinājumi (no EN 1993-1-8 3.3. tabulas).

### Caurumi 3D skatā netiek izgriezti

Caurumi redzami kā tumši aizbāžņi. Tie ir īsti caurumi NC failos, darbnīcas rasējumos un IFC failā. Izgriezumi skatā tiek izgriezti.

### Svari ir bruto

Tērauda svars neatskaita caurumus vai izgriezumus, un skrūvju svars nav iekļauts.

### Tikai milimetri

Viss tiek ierakstīts un rādīts milimetros, pat AISC profiliem. Profilu nosaukumi saglabā publicēto formu (W12x50, HSS6x6x1/4).

### Nav rasējumu, ko pārvaldīt

Nav rasējumu saraksta, rasējumu redaktora, vispārējā izkārtojuma vai mezglu rasējumu. Darbnīcas rasējums tiek izveidots, kad to pieprasāt, un lejupielādēts; lai to mainītu, mainiet modeli un izveidojiet to no jauna.

### Darbojas pārlūkprogrammā

Saglabāšana lejupielādē failu. Taustiņu kombinācijas, ko pārlūkprogramma patur sev, nevar izmantot. Jūsu modeļi nekad neatstāj jūsu datoru: skatiet [Kur tiek glabāti jūsu faili](common:your-files).

## Ko turpināt darīt pašreizējā programmatūrā

Šobrīd DetailCraft der mazām konstrukcijām, idejas pārbaudei, mācībām vai NC failu un darbnīcas rasējumu izveidei vienkāršiem sijas un kolonnas darbiem. Sarežģītus savienojumus, vispārējos izkārtojuma rasējumus, montāžas rasējumus, vairāklietotāju projektus un visu, kas uzskaitīts sadaļā [Kas vēl nav izveidots](topic:not-built-yet), turiet programmā, ko izmantojat tagad.
