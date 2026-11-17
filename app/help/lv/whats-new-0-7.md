---
title: Jaunumi 0.7 versijā (iepriekš)
summary: Tērauda I profilu projektēšanas pārbaudes ar slodžu kombinācijām pēc ASCE 7 vai EN 1990 un elementu pārbaudes pēc AISC 360 vai EN 1993-1-1, tērauda modeļa eksports USD formātā, palīgrīks USD darbam, tērauda lente ar lielām un mazām pogām, paneļi, kas tiek sakārtoti, un dialogi, ko var pārvietot.
keywords: jaunumi 0.7, iepriekšējais laidiens, laidiena piezīmes, izmaiņu žurnāls, izmaiņas, 0.7, versija, jaunas funkcijas, projektēšanas pārbaudes, tērauda projektēšana, noslodze, slodžu kombinācijas, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurokods, Nacionālais pielikums, jumta lietderīgā slodze, pārvietojuma robeža, usd, usda, usdc, usdz, openusd, palīgs, mcp, tērauda lente, lente, sadalītā poga, vienības, kompakts, paneļi, dialogi, portugāļu
from: 54a7a8f0
---

Šeit ir izmaiņas DetailCraft 0.7 versijā salīdzinājumā ar 0.6. Rāmja aprēķinam, kas bija 0.6 versijā, tagad ir otrs solis: tērauda elementu pārbaude pēc projektēšanas normas.

## Jauns

### Šķautņu savienojumi (0.7.1)

- **Divi I profili, kas saskaras leņķī**, piemēram, portāla stūris vai kore: atlasiet abus, izvēlnē {{ui:Vairāk}} grupā {{ui:Savienot}} izvēlieties {{ui:Šķautņu savienojums}}, un abi gali tiek nogriezti plaknē, kas dala leņķi uz pusēm. Galaplāksnes, kas savienotas ar skrūvēm, un šķautnes ribas ir atzīmējamas izvēles rūtiņas jaunajā dialogā Šķautņu savienojums, kura numurētie lauki atbilst jūsu savienojuma zīmējumam, kas tiek veidots, kamēr ierakstāt. Šķautne seko elementiem, kad tie tiek pārvietoti, un tiek pārnesta uz rasējumiem, NC failiem (šķībi griezumi), IFC un materiālu sarakstu. Skatiet [Šķautņu savienojumi](topic:mitres).

### Projektēšanas pārbaudes

- **Slodžu kombinācijas pēc normas.** Cilnē {{ui:Aprēķins}} jaunajā blokā {{ui:Projektēšanas pārbaudes}} ir {{ui:Projektēšanas norma}}: ASCE 7 + AISC 360 (ASV, LRFD) vai EN 1990 + EN 1993-1-1 (Eurokods). Katram slodzes gadījumam norādiet tā veidu (pastāvīgā, lietderīgā, jaunā jumta lietderīgā, sniega, vēja, seismiskā), nospiediet {{ui:Izveidot kombinācijas}}, un DetailCraft uzraksta normas stiprības un lietojamības kombinācijas jūsu gadījumiem. Pašu ierakstītās kombinācijas paliek. Skatiet [Izveidot kombinācijas](topic:design-checks#make-the-combinations).
- **Nacionālā pielikuma vērtības.** Eurokodam koeficienti sākas no ieteicamajām vērtībām. {{ui:Nacionālā pielikuma vērtības}} ļauj ierakstīt savas valsts vērtības, un tās tiek saglabātas modelī. Skatiet [Izveidot kombinācijas](topic:design-checks#make-the-combinations).
- **Pārbaudīt elementus.** {{ui:Pārbaudīt elementus}} pārbauda katru tērauda I profilu spiedienam, stiepei, saliecei ar izliekšanos un sānu vērpi, bīdei, saliecei kopā ar normālspēku un pārvietojumam pret jūsu iestatīto {{ui:Pārvietojuma robeža}}. Tabulā redzama katra elementa noslodze, noteicošā pārbaude un tās kombinācija, un elementi modelī tiek krāsoti (zila, zaļa, okera, sarkana, pelēka – nav pārbaudīts). Skatiet [Pārbaudīt elementus](topic:design-checks#check-the-members).
- **Atskaitē.** {{ui:Atskaite (PDF)}} un {{ui:Atskaite (CSV)}} pievieno normu izdevumus, iestatījumus, noslodzi pa elementiem un katru izmantoto punktu. Skatiet [Atskaite](topic:design-checks#the-report).
- **Palīgs, līdz inženieris to ir pārskatījis.** Tiek izmantoti tikai pirmās kārtas spēki. Caurules, leņķi, kanāli, metinātas formas un tievas vai 4. klases daļas tiek atzīmētas kā „nav pārbaudīts” ar iemeslu; vērpe, savienojumi un betons netiek pārbaudīti. Skatiet [Kas netiek pārbaudīts](topic:design-checks#what-is-not-checked).

### USD

- **Tērauda modeļa eksports USD formātā.** {{ui:USD}} grupā {{ui:Izvade}} raksta modeli kā {{ui:Teksts (.usda)}}, {{ui:Binārs (.usdc)}} vai {{ui:Pakotne (.usdz)}} renderēšanas programmām un ainas salikšanai: katrs mezgls satur savas detaļas, katra detaļa ir savs profils, kas stiepjas pa visu garumu ar izgrieztiem galiem, un katrai ir sava detaļas marķējums, profils, marka, garums un svars. Skrūvju caurumi, skrūves, metinājumi un pamati USD tīklos nav iekļauti. Skatiet [Tērauda modeļa eksports USD formātā](topic:usd).

### AI palīgi

- **USD palīgiem.** Jūsu pašu palīgs, kas savienots ar CadCraft Studio, var eksportēt modeli USD formātā (`usd_export`), un Studio var to ierakstīt mapē, kuru esat atļāvis. Skatiet [Ko palīgs var pieprasīt](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Mainīts

- **Tērauda lente** ir ar lielām un mazām pogām: liela {{ui:Sija}} blakus mazām {{ui:Kolonna}}, {{ui:Saite}} un {{ui:Plāksne}} cilnē {{ui:Modelēšana}} › {{ui:Elementi}}; liela {{ui:Galaplāksnes}} cilnē {{ui:Detalizēšana}} › {{ui:Savienojumi}}, un {{ui:Savienojums}} ar {{ui:Fasonplāksne}} izmanto vienu sadalītu pogu; liela {{ui:Ielīmēt}} cilnē {{ui:Rediģēt}} › {{ui:Starpliktuve}}, bet {{ui:Ielīmēt vietā}} un {{ui:Dublēt}} ir aiz grupas bultiņas. {{ui:Ražošana}} › {{ui:Apmaiņa}} satur {{ui:Eksportēt USD}} blakus IFC. Citi izvēlņu stili izskatās kā agrāk. Skatiet [Izvēlnes, taustiņi un pele](topic:menus-keys-and-mouse#the-three-styles).
- [Analizēt rāmi](topic:frame-analysis) tagad norāda uz projektēšanas pārbaudēm, un tā kombinācijas var izveidot pēc normas.

## Visās lietotnēs

- **Vienības.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Vienības}} ir pa vienam sarakstam garumam, laukumam, tilpumam, leņķim un slīpumam ar precīziem izmēriem, ko dod vienību definīcijas (ASV pēdas mērījumu vienība ir atsevišķa vienība). Izslēdziet vienības, ko nekad neizmantojat, un tās pazūd no vienību sarakstiem; atzīmējiet vienu ar zvaigznīti, un jauns darbs sākas tajā. Fails vienmēr saglabā savu vienību. DetailCraft savi lauki vēl neseko sarakstiem: tā garumi joprojām tiek ierakstīti milimetros. Skatiet [Vienības, ierakstītās vērtības un vienību saraksti](common:unit-lists).
- **Blīvāks izkārtojums un paneļi, kas sakārtojas paši.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Izkārtojuma blīvums}} › {{ui:Kompakts}} ekrānā iekļauj vairāk (skārienekrāni un tālruņi saglabā lielās pogas). Katram sānu panelim ir šaura virsraksta josla: velciet to, lai piestiprinātu vai atbrīvotu paneli, nometiet uz cita paneļa joslas, lai dalītos ar vienu rāmi kā ar cilnēm, piespraudiet, lai tas paslīd uz malu, vai paslēpiet un atgrieziet no malas. Skatiet [Panelu sakārtošana](common:arrange-panels#make-the-layout-denser).
- **Dialogi tiek pārvietoti.** Velciet dialogu aiz virsraksta joslas, lai tas nenostātos ceļā zīmējumam; tas atgriežas vietā, kur to atstājāt. Veiciet dubultklikšķi uz virsraksta joslas, lai to atkal centrētu. Skatiet [Dialoga pārvietošana](common:arrange-panels#move-a-dialog).
- **Piemēri AI palīgiem.** Desmit sagatavoti pieprasījumi jūsu pašu palīgam (sakārtot zīmējumu, izdrukāt komplektu, pārbaudīt zīmējumus, uzdot modelim jautājumus, saskaitīt apjomu aprēķinu, izmēģināt detaļas variantu…), katrs ar rīkiem, ko tas izsauc, un atļaujām, kas tam nepieciešamas, un katrs tiek pārbaudīts ar mūsu testiem. Lietotnēs nav AI. Skatiet [Piemēri AI palīgiem](common:assistants-recipes).
- **Valodas.** **Português (Portugal)** ir jauns sadaļā {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Valoda}}. Tā, **Português (Brasil)**, **Español (México)** un **Bahasa Indonesia** tagad ir ar visiem lietotņu vārdiem, kā melnraksti, ko vēl nav pārskatījis dzimtās valodas runātājs. Palīdzības tēmas ir angļu valodā.
- **CadCraft Studio** pasaka, kāpēc atjauninājumu pārbaude neizdevās (vēl nav faila jūsu sistēmai, nav tīkla, nederīgs paraksts), nevis tikai „Gatavs”, un pārstāj atkal parādīt kartīti Jaunumi, ko esat aizvēris, kamēr nav jaunāka laidiena.

## Vēl nav šajā versijā

- **0.7 nav parakstīta ar koda parakstu.** Parakstīšana un Microsoft Store pakotne tiek pārceltas uz 0.8, jo sertifikāta pārbaude vēl nav pabeigta. Pārbaudiet SHA-256 katram failam blakus getcadcraft.com/download. Windows sistēmā, ja SmartScreen aptur instalētāju, izvēlieties {{ui:Papildinformācija}} un pēc tam {{ui:Palaist tik un tā}}. Mac datorā pirmajā reizē ar peles labo pogu noklikšķiniet uz CadCraft Studio un izvēlieties {{ui:Atvērt}}. CadCraft Studio vēl nav lietotņu veikalā, un vēl nav iPad vai iPhone versijas.
- Sarakstus leņķim un slīpumam sadaļā {{ui:Vienības}} saglabā, bet neviens lauks tos vēl nenolasa.
- **Projektēšanas pārbaudes vēl nav pārskatījis inženieris.** Mūsu testi tos salīdzina ar drukātām tabulu vērtībām un ar roku veiktiem aprēķiniem, bet vēl ne ar projektēšanas rokasgrāmatas atrisinātiem piemēriem. Līdz pārskatīšanai tās ir palīgs: svarīgus elementus pārbaudiet ar roku.
- Projektēšanas pārbaudēs izmanto pirmās kārtas spēkus (bez otrās kārtas efektiem), un pārbauda tikai I profilus. Nav izveidotas: caurules, leņķi, kanāli, metinātas formas, tievas (AISC) vai 4. klases (Eurokods) daļas liecē, vērpe, bīdes izliekšanās kopā ar liecci, savienojumi, nogurums, ugunsdrošība, seismiskā detalizēšana un betons. Tievas daļas spiedienā izslēdz spiediena pārbaudes, un elements tiek atzīmēts kā „iztur, daļēji pārbaudīts”.
- Rāmja aprēķins joprojām ir pirmās kārtas un lineārs, un to inženieris vēl nav izmēģinājis reālā darbā.
- Skrūvju caurumi, skrūves, metinājumi un pamati nav iekļauti USD eksportā.

Viss pārējais ir sadaļā [Kas vēl nav izveidots](topic:not-built-yet).
