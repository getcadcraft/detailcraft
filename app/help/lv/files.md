---
title: Failu atvēršana, saglabāšana un eksportēšana
summary: DetailCraft modeļa fails, katrs eksportētais fails, kur faili tiek saglabāti un kas atšķiras atkarībā no pārlūka un savienojuma.
keywords: atvērt, saglabāt, eksportēt, lejupielādēt, fails, json, ifc, nc1, dstv, csv, pdf, zip, formāti, importēt
from: 6fbc8e8f
---

DetailCraft ir viens pats savs fails, modelis, un pieci eksporti. Katra saglabāšana un katrs eksports ir lejupielāde. Nekas netiek augšupielādēts, un serverī nekas netiek glabāts.

## Modeļa fails

DetailCraft modelis tiek saglabāts kā `<name>.detailcraft.json`, kur `<name>` ir modeļa nosaukums panelī {{ui:Modelis}}. Tajā ir režģi, līmeņi, elementi (ar to caurumiem un izgriezumiem), savienojumi un to iestatījumi, pamati un jūsu pielāgotie profili.

Detaļas, marķējumi, skrūves, metinājumi un armatūras stieņi netiek saglabāti: DetailCraft tos katru reizi, kad modeli atver, aprēķina no jauna. Tāpēc modeļa fails ir mazs.

### Saglabāt

1. Paneļa {{ui:Modelis}} augšdaļā ierakstiet nosaukumu laukā {{ui:Nosaukums}}.
2. Izvēlieties {{ui:Saglabāt}} grupā {{ui:Fails}} vai nospiediet {{key:Mod+S}}.
3. Pārlūks lejupielādē `<name>.detailcraft.json`. Statusa joslā parādās "Saglabāts … (lejupielādēts)", un punkts pārlūka cilnes nosaukuma sākumā pazūd.

Katra saglabāšana ir jauna lejupielāde. Pārlūks neuzraksta atvērto failu; atkarībā no iestatījumiem tas pievieno nosaukumam numuru, piemēram, `Frame (1).detailcraft.json`, vai jautā, kur saglabāt. Lai paturētu savas versijas, pārdēvējiet lejupielādētos failus.

:::chromium
Chrome un Edge saglabā failus mapē Lejupielādes, ja pārlūka lejupielādes iestatījumos nav ieslēgta opcija **Ask where to save each file before downloading**. Ieslēdziet to, ja katru reizi vēlaties izvēlēties mapi un faila nosaukumu.
:::

:::firefox
Firefox saglabā failus mapē Lejupielādes vai jautā katru reizi, ja iestatījumos ir ieslēgta opcija **Always ask you where to save files**.
:::

:::safari
Safari saglabā failus mapē Lejupielādes. Lai mainītu mapi, atveriet **Safari, Iestatījumi, Vispārīgi, Lejupielāžu atrašanās vieta**.
:::

### Atvērt

1. Izvēlieties {{ui:Atvērt}} grupā {{ui:Fails}} vai nospiediet {{key:Mod+O}}.
2. Izvēlieties `.detailcraft.json` failu.

Vai velciet failu no {{pick:mac=Finder|windows=File Explorer|linux=jūsu failu pārvaldnieka}} un nometiet to uz skata. Kamēr velkat, skatā tiek rādīts "Nometiet DetailCraft modeli, lai to atvērtu".

Ja atvērtajam modelim ir nesaglabātas izmaiņas, DetailCraft vispirms jautā: {{ui:Atcelt}}, {{ui:Atmest izmaiņas}} vai {{ui:Vispirms saglabāt}}.

DetailCraft pārbauda katru faila lauku, pirms to izmanto. Viss, ko nevar izmantot, tiek izlaists, un statusa joslā tiek norādīts, kas tieši, piemēram, "2 elementi nebija derīgi un tika izlaisti." Modelis, kas saglabāts jaunākā DetailCraft versijā, tiek noraidīts ar ziņojumu, nevis atvērts daļēji pareizi.

### Ko tas atver

Savus modeļu failus (`.json`, līdz 50 MB) un IFC failus (`.ifc`, IFC2X3 vai IFC4, līdz 200 MB). IFC fails, kas atvērts vai importēts ar {{ui:Importēt IFC}}, kļūst par jaunu modeli ar sijām, kolonnām, elementiem, plāksnēm, režģiem un līmeņiem, ar caurumiem un izgriezumiem, kas tajos izgriezti, un ar skrūvēm kā atsevišķām skrūvēm; atskaitē ir uzskaitīts, kas tika izlaists. Skatiet [IFC eksports](topic:ifc-export#import). DWG, DXF vai cita detalizēšanas programmas modeli tas vēl neatver; mēģinot, tiek rādīts "DetailCraft atver tikai savus modeļus (.detailcraft.json) un IFC failus (.ifc)."

## Zaudētais darbs, nesenie faili, darbvirsmas lietotne

- Kamēr modelim ir nesaglabātas izmaiņas, DetailCraft šajā pārlūkā glabā kopiju. Ja cilne vai pārlūks pārtrauc darbu pirms saglabāšanas, nākamreiz, kad atverat DetailCraft, tas jautā **Atgūt jūsu darbu?**: atjaunot kopiju vai to atmest. Skatiet [Atgūt jūsu darbu](common:recover).
- Modeļi, ko nesen atvērāt, ir uzskaitīti sākuma ekrānā, ja pārlūks ļauj DetailCraft tos atkal atvērt; noklikšķiniet uz viena, lai to atkal atvērtu.
- Darbvirsmas lietotnē {{ui:Saglabāt}} ieraksta modeli atpakaļ failā, ko atvērāt (pārlūkā tas lejupielādē kopiju), un, divreiz noklikšķinot uz DetailCraft modeļa vai IFC faila, tas tiek atvērts programmā DetailCraft.

## Eksporti

Visi eksporti izmanto modeļa nosaukumu. Izvēlieties tos grupā {{ui:Izvade}}.

| Poga | Fails | Kas tajā ir |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: stāvi, režģi, katra tērauda detaļa kā profila ekstrūzija ar tās caurumiem un izgriezumiem, mezgli, skrūves un enkurstieņi, pamati un katrs armatūras stienis. Skatiet [Eksportēt IFC](topic:ifc-export). |
| {{ui:NC faili}} | `<name> NC.zip` | Viens DSTV `.nc1` fails katram detaļas marķējumam. Skatiet [Nosūtīt NC failus darbnīcai](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Trīs tabulas vienā failā: detaļas, mezgli un skrūves ar enkurstieņiem. Skatiet [Marķējumi un materiālu saraksts](topic:marks-and-bom). |
| {{ui:Bending}} | `<name> bending schedule.csv` | Katrs armatūras stieņa marķējums pamatos. Skatiet [Pamati un armatūra](topic:footings-and-rebar). |
| {{ui:Shop drawing}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` satur lapu katram detaļas marķējumam; {{ui:Lejupielādēt PDF}} dod parādīto lapu (A3, ja neesat izvēlējies citu izmēru). Skatiet [Darbnīcas rasējumu izveide](topic:shop-drawings). |
| {{ui:Drawings}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` vai `.dxf`, vairāki `<name> drawings DWG.zip` (vai `DXF.zip`) | Plāni, fasādes un montāžas rasējumi izvēlētajā lapas izmērā; DWG un DXF dabiskā izmērā, 1 vienība = 1 mm uz papīra. Skatiet [Vispārīgā izkārtojuma un montāžas rasējumi](topic:drawings). |

### Piezīmes par CSV failiem

- Tie sākas ar baitu secības zīmi (byte-order mark), lai izklājlapu programmas pareizi nolasītu burtus ar diakritiskajām zīmēm.
- Šūna, kas sākas ar `=`, `+`, `-` vai `@` (un nav vienkāršs skaitlis), iegūst vadošu apostrofu, lai izklājlapa to nekad neizpildītu kā formulu.
- Garumi ir milimetros, bet svars kilogramos.

### Piezīmes par PDF

Teksts PDF failā izmanto standarta Helvetica fontu. Rakstzīmes, kuru fontā nav (ārpus Rietumeiropas kopas), tiek drukātas kā "?", un statusa josla parāda, cik to ir.

## Vienības

DetailCraft visur strādā milimetros: režģi, līmeņi, koordinātas, profili, caurumi un visi eksporti. Profilu nosaukumi saglabā savu publicēto formu (W12x50 ir ASV apzīmējums, lai gan tā izmēri ir rādīti mm). Ievade angļu mērvienībās vēl nav pieejama.

## Tiešsaiste un bezsaistē

Atvēršana, saglabāšana un eksportēšana notiek jūsu pārlūkā, tāpēc tās darbojas vienādi ar savienojumu vai bez tā, kad DetailCraft ir ielādējies.

Lai vēlāk lietotu DetailCraft bez savienojuma, tiešsaistē izvēlieties lietotnes joslā {{ui:Saglabāt bezsaistei}}. Poga skaita uz augšu ("Saglabā 3 no 20") un tad rāda {{ui:Gatavs darbam bezsaistē}}. Saglabātajā kopijā ir iekļauta 3D grafikas bibliotēka (aptuveni 2.6 MB) un šī palīdzība, tāpēc, kad tā ir saglabāta, 3D skats, visi eksporti un palīdzība darbojas bezsaistē. Sīkāka informācija un tas, kam joprojām nepieciešams savienojums: [Darbs bezsaistē](common:offline).

:::offline
Jūs esat bezsaistē. Ja lietotnes joslā redzams {{ui:Gatavs darbam bezsaistē}}, atvēršana, saglabāšana un eksportēšana darbojas kā parasti. Ja nē, paturiet šo cilni atvērtu, neatjaunojiet to, kamēr neesat atkal tiešsaistē, un saglabājiet savu modeli tagad.
:::

Saglabāšana mākonī vēl nav pieejama, un darbvirsmas versiju vēl nav. Dublējiet savus `.detailcraft.json` failus tāpat, kā dublējat jebkuru citu darba failu. Vairāk: [Kur atrodas jūsu faili](common:your-files).

## Nesaglabāts darbs

DetailCraft glabā modeli tikai atvērtajā cilnē. Ja aizverat vai atjaunojat cilni ar nesaglabātām izmaiņām, pārlūks jautā, vai atstāt lapu; tā formulējums ir paša pārlūka. Saglabājiet bieži ar {{key:Mod+S}}.
