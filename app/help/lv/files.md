---
title: Failu atvēršana, saglabāšana un eksportēšana
summary: DetailCraft modeļa fails, katrs tā rakstītais eksports, kur faili tiek saglabāti un kas atšķiras atkarībā no pārlūkprogrammas un savienojuma.
keywords: atvērt, saglabāt, eksportēt, lejupielādēt, fails, json, ifc, nc1, dstv, csv, pdf, zip, formāti, importēt
from: bd715ea3
---

DetailCraft ir savs viens fails, modelis, un pieci eksporti. Katra saglabāšana un katrs eksports ir lejupielāde. Nekas netiek augšupielādēts, un nekas netiek glabāts serverī.

## Modeļa fails

DetailCraft modelis tiek saglabāts kā `<name>.detailcraft.json`, kur `<name>` ir modeļa nosaukums panelī {{ui:Modelis}}. Tajā ir režģi, līmeņi, elementi (ar to caurumiem un izgriezumiem), savienojumi un to iestatījumi, pamati un jūsu pielāgotie profili.

Detaļas, marķējumi, skrūves, metinājumi un stieņi netiek saglabāti: DetailCraft tos katru reizi, kad modelis tiek atvērts, aprēķina no jauna. Tāpēc modeļa fails ir mazs.

### Saglabāšana

1. Ierakstiet nosaukumu laukā {{ui:Nosaukums}} panelī {{ui:Modelis}} augšā.
2. Grupā {{ui:Fails}} izvēlieties {{ui:Saglabāt}} vai nospiediet {{key:Mod+S}}.
3. Pārlūkprogramma lejupielādē `<name>.detailcraft.json`. Statusa joslā parādās „Saglabāts … (lejupielādēts)”, un punkts pārlūka cilnes nosaukuma sākumā pazūd.

Katra saglabāšana ir jauna lejupielāde. Pārlūkprogramma nepārraksta atvērto failu; atkarībā no tās iestatījumiem tā pievieno nosaukumam numuru, piemēram, `Frame (1).detailcraft.json`, vai jautā, kur saglabāt. Lai paturētu savas versijas, pārdēvējiet lejupielādētos failus.

:::chromium
Chrome un Edge saglabā failus mapē Lejupielādes, ja pārlūka lejupielādes iestatījumos nav ieslēgta opcija **Jautāt, kur saglabāt katru failu pirms lejupielādes**. Ieslēdziet to, ja katru reizi vēlaties izvēlēties mapi un faila nosaukumu.
:::

:::firefox
Firefox saglabā failus mapē Lejupielādes vai jautā katru reizi, ja iestatījumos ir ieslēgta opcija **Vienmēr jautāt, kur saglabāt failus**.
:::

:::safari
Safari saglabā failus mapē Lejupielādes. Lai mainītu mapi, atveriet **Safari, Iestatījumi, Vispārīgi, Failu lejupielādes vieta**.
:::

### Atvēršana

1. Grupā {{ui:Fails}} izvēlieties {{ui:Atvērt}} vai nospiediet {{key:Mod+O}}.
2. Izvēlieties `.detailcraft.json` failu.

Vai velciet failu no {{pick:mac=Finder|windows=Failu pārlūks|linux=jūsu failu pārvaldnieks}} un nometiet to skatā. Kamēr velkat, skatā parādās teksts „Nometiet DetailCraft modeli, lai to atvērtu”.

Ja atvērtajam modelim ir nesaglabātas izmaiņas, DetailCraft vispirms jautā: {{ui:Atcelt}}, {{ui:Atmest izmaiņas}} vai {{ui:Vispirms saglabāt}}.

DetailCraft pārbauda katru faila lauku, pirms to izmanto. Viss, ko tas nevar izmantot, tiek izlaists, un statusa joslā norādīts, kas tas bija, piemēram: „2 elementi nebija derīgi un tika izlaisti.” Modeli, kas saglabāts jaunākā DetailCraft versijā, DetailCraft atsaka ar ziņojumu, nevis atver to daļēji nepareizi.

### Ko tas atver

Savus modeļa failus (`.json`, līdz 50 MB) un IFC failus (`.ifc`, IFC2X3 vai IFC4, līdz 200 MB). IFC fails, kas atvērts vai ievietots ar {{ui:Importēt IFC}}, kļūst par jaunu modeli ar savām sijām, kolonnām, elementiem, plāksnēm, režģiem un līmeņiem; caurumi un izgriezumi tajos tiek izgriezti, un skrūves kļūst par brīvām skrūvēm. Atskaitē uzskaitīts, kas tika izlaists. Skatiet [IFC eksports](topic:ifc-export#import). DWG, DXF vai cita detalizēšanas programmas modeli DetailCraft vēl neatver; mēģinot, parādās ziņojums „DetailCraft atver savus modeļus (.detailcraft.json) un IFC failus (.ifc).”

## Zaudētais darbs, pēdējie faili, darbvirsmas lietotne

- Kamēr modelim ir nesaglabātas izmaiņas, DetailCraft glabā kopiju šajā pārlūkprogrammā. Ja cilne vai pārlūkprogramma apstājas pirms saglabāšanas, nākamreiz, atverot DetailCraft, tas jautā **Atjaunot jūsu darbu?**: atjaunot kopiju vai to atmest. Skatiet [Jūsu darba atjaunošana](common:recover).
- Nesen atvērtie modeļi ir uzskaitīti sākuma ekrānā, ja pārlūkprogramma ļauj DetailCraft tos atkal atvērt; noklikšķiniet uz viena, lai to atvērtu atkārtoti.
- Darbvirsmas lietotnē {{ui:Saglabāt}} ieraksta modeli atpakaļ atvērtajā failā (pārlūkprogrammā tas lejupielādē kopiju), un divreiz noklikšķinot uz DetailCraft modeļa vai IFC faila, tas tiek atvērts DetailCraft.

## Eksporti

Visi eksporti izmanto modeļa nosaukumu. Izvēlieties tos grupā {{ui:Izvade}}.

| Poga | Fails | Kas tajā ir |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: stāvi, režģi, katra tērauda detaļa kā profila ekstrūzija ar caurumiem un izgriezumiem, mezgli, skrūves un enkurstieņi, pamati un katrs stienis. Skatiet [Eksportēt IFC](topic:ifc-export). |
| {{ui:NC faili}} | `<name> NC.zip` | Viens DSTV `.nc1` fails katram detaļas marķējumam. Skatiet [NC failu nosūtīšana ražotnei](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Trīs tabulas vienā failā: detaļas, mezgli, skrūves un enkurstieņi. Skatiet [Marķējumi un materiālu saraksts](topic:marks-and-bom). |
| {{ui:Liekšana}} | `<name> bending schedule.csv` | Katrs stieņa marķējums pamatos. Skatiet [Pamati un armatūra](topic:footings-and-rebar). |
| {{ui:Darbnīcas rasējums}} | `<name> <mark>.pdf` | Viena lapa (A3, ja neesat izvēlējies citu izmēru) atlasītajai detaļai (I-profiliem un plāksnēm). Skatiet [Darbnīcas rasējuma izveide](topic:shop-drawings). |
| {{ui:Rasējumi}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` vai `.dxf`, vairāki `<name> drawings DWG.zip` (vai `DXF.zip`) | Plāni, fasādes un mezglu rasējumi izvēlētajā lapas izmērā; DWG un DXF pilnā izmērā, 1 vienība = 1 mm uz papīra. Skatiet [Vispārējā izkārtojuma un mezglu rasējumi](topic:drawings). |

### Piezīmes par CSV failiem

- Tie sākas ar baitu secības zīmi, lai izklājlapu programmas pareizi nolasītu burtus ar diakritiskajām zīmēm.
- Šūnai, kas sākas ar `=`, `+`, `-` vai `@` (un nav vienkāršs skaitlis), tiek pievienots vadošais apostrofs, lai izklājlapa to nekad neizpildītu kā formulu.
- Garumi ir milimetros, svars kilogramos.

### Piezīmes par PDF

PDF tekstā tiek izmantots standarta fonts Helvetica. Rakstzīmes, kuru tajā nav (ārpus Rietumeiropas kopas), tiek drukātas kā „?”, un statusa josla parāda, cik to ir.

## Vienības

DetailCraft visur strādā milimetros: režģi, līmeņi, koordinātas, profili, caurumi un katrs eksports. Profilu nosaukumi saglabā publicēto formu (W12x50 ir ASV apzīmējums, lai gan tā izmēri ir rādīti mm). Angļu mērvienību ievades vēl nav.

## Tiešsaistē un bezsaistē

Atvēršana, saglabāšana un eksportēšana notiek jūsu pārlūkprogrammā, tāpēc, kad DetailCraft ir ielādēts, tās darbojas vienādi ar savienojumu vai bez tā.

Lai vēlāk izmantotu DetailCraft bez savienojuma, kamēr esat tiešsaistē, lietotņu joslā izvēlieties {{ui:Saglabāt bezsaistei}}. Poga skaita uz augšu („Saglabā 3 no 20”) un pēc tam rāda {{ui:Gatavs darbam bezsaistē}}. Saglabātajā kopijā ir iekļauta 3D grafikas bibliotēka (apmēram 2.6 MB) un šī palīdzība, tāpēc, kad tā ir saglabāta, 3D skats, katrs eksports un palīdzība darbojas bezsaistē. Sīkāk un par to, kam joprojām vajadzīgs savienojums: [Darbs bezsaistē](common:offline).

:::offline
Jūs esat bezsaistē. Ja lietotņu joslā redzams {{ui:Gatavs darbam bezsaistē}}, atvēršana, saglabāšana un eksportēšana darbojas kā parasti. Ja nē, neaizveriet šo cilni, neatjaunojiet to, kamēr neesat atkal tiešsaistē, un tagad saglabājiet savu modeli.
:::

Saglabāšana mākonī vēl nav pieejama, un darbvirsmas versiju vēl nav. Dublējiet savus `.detailcraft.json` failus tāpat kā jebkuru citu darba failu. Vairāk: [Kur atrodas jūsu faili](common:your-files).

## Nesaglabātais darbs

DetailCraft modeli glabā tikai atvērtajā cilnē. Ja aizverat vai pārlādējat cilni ar nesaglabātām izmaiņām, pārlūkprogramma jautā, vai atstāt lapu; tās formulējums ir pārlūkprogrammas pašas. Bieži saglabājiet ar {{key:Mod+S}}.
