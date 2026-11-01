---
title: Kas jauns versijā 0.7
summary: Tērauda I-profilu projektēšanas pārbaudes ar slodžu kombinācijām pēc ASCE 7 vai EN 1990 un elementu pārbaudes pēc AISC 360 vai EN 1993-1-1, tērauda modeļa eksports kā USD, USD palīgrīks, Tērauda lente ar lielām un mazām pogām, paneļi, kas paslēpjas, un dialogi, ko var pārvietot.
keywords: kas jauns, versijas piezīmes, izmaiņu žurnāls, izmaiņas, 0.7, versija, jaunas funkcijas, projektēšanas pārbaudes, tērauda projektēšana, noslodze, slodžu kombinācijas, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eirokods, valsts pielikums, jumta lietderīgā slodze, novirzes robeža, usd, usda, usdc, usdz, openusd, asistents, mcp, tērauda lente, lente, dalītā poga, vienības, kompakts, paneļi, dialogi, portugāļu valoda
from: 17d1e0bb
---

Šīs ir izmaiņas DetailCraft 0.7 versijā salīdzinājumā ar 0.6. 0.6 versijas rāmja aprēķinam tagad ir otrs solis: tērauda elementu pārbaude pēc projektēšanas normas.

## Jaunumi

### Šķautņu savienojumi (0.7.1)

- **Divi I-profili, kas saskaras leņķī**, piemēram, portāla celis vai kore: atlasiet abus, izvēlieties {{ui:Šķautņu savienojums}} grupas {{ui:Savienot}} izvēlnē {{ui:Vairāk}}, un abi gali tiek nogriezti plaknē, kas dala leņķi uz pusēm. Kopā skrūvētas galaplāksnes un sieniņu stingrinātāji ir atzīmējamas rūtiņas jaunajā dialogā {{ui:Šķautņu savienojums}}; tā numurētie lauki atbilst jūsu savienojuma zīmējumam, kas tiek veidots, kamēr rakstāt. Šķautne seko elementiem, kad tie tiek pārvietoti, un tiek pārnesta uz rasējumiem, NC failiem (slīpi griezumi), IFC un materiālu sarakstu. Skatiet [Šķautņu savienojumi](topic:mitres).

### Projektēšanas pārbaudes

- **Slodžu kombinācijas pēc normas.** Cilnē {{ui:Aprēķins}} jaunajam blokam {{ui:Projektēšanas pārbaudes}} ir {{ui:Projektēšanas norma}}: ASCE 7 + AISC 360 (ASV, LRFD) vai EN 1990 + EN 1993-1-1 (Eirokods). Katrai slodzes gadījumam norādiet tā veidu (pastāvīgā, lietderīgā, jaunā jumta lietderīgā, sniega, vēja, seismiskā), nospiediet {{ui:Izveidot kombinācijas}}, un DetailCraft ieraksta normas stiprības un ekspluatācijas kombinācijas jūsu gadījumiem. Kombinācijas, ko esat ievadījis pats, paliek. Skatiet [Kombināciju izveide](topic:design-checks#make-the-combinations).
- **Valsts pielikuma vērtības.** Eirokodam koeficienti sākas ar ieteiktajām vērtībām; {{ui:Nacionālā pielikuma vērtības}} ļauj ievadīt jūsu valsts vērtības, un tās tiek saglabātas modelī. Skatiet [Kombināciju izveide](topic:design-checks#make-the-combinations).
- **Elementu pārbaude.** {{ui:Pārbaudīt elementus}} pārbauda katru tērauda I-profilu attiecībā uz stiepi, spiedi ar izliekšanos, liekšanu ar sānu-vērpes izliekšanos, bīdi, liekšanu ar aksiālo spēku un novirzi, salīdzinot ar jūsu iestatīto {{ui:Novirzes robeža}}. Tabulā redzama katra elementa noslodze, noteicošā pārbaude un tās kombinācija, un elementi modelī ir iekrāsoti (zili, zaļi, ohra, sarkani, pelēki — nav pārbaudīti). Skatiet [Elementu pārbaude](topic:design-checks#check-the-members).
- **Atskaitē.** {{ui:Atskaite (PDF)}} un {{ui:Atskaite (CSV)}} pievieno normu izdevumus, iestatījumus, noslodzi pa elementiem un katru izmantoto punktu. Skatiet [Atskaite](topic:design-checks#the-report).
- **Palīgs, līdz to pārskatījis inženieris.** Tas izmanto tikai pirmās kārtas spēkus. Caurules, leņķi, kanāli, metinātas formas un tievas vai 4. klases daļas tiek atzīmētas kā „nav pārbaudīts” ar iemeslu; vērpe, savienojumi un betons nav pārbaudīti. Skatiet [Kas netiek pārbaudīts](topic:design-checks#what-is-not-checked).

### USD

- **Tērauda modeļa eksportēšana kā USD.** Grupā {{ui:Izvade}} {{ui:USD}} raksta modeli kā {{ui:Teksts (.usda)}}, {{ui:Binārs (.usdc)}} vai {{ui:Pakotne (.usdz)}} renderēšanas programmām un ainas salikšanai: katrs mezgls satur savas detaļas, katra detaļa ir savs šķērsgriezums gar garumu ar izgriezumiem, un katrai ir sava detaļas marķējums, profils, tērauda kvalitāte, garums un svars. Skrūvju caurumi, skrūves, metinājumi un pamati USD tīklos nav iekļauti. Skatiet [Tērauda modeļa eksportēšana kā USD](topic:usd).

### MI asistenti

- **USD asistentiem.** Jūsu pašu asistents, kas savienots ar CadCraft Studio, var eksportēt modeli kā USD (`usd_export`), un Studio to var ierakstīt mapē, kuru esat atļāvis. Skatiet [Ko asistents var pieprasīt](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Mainīts

- **Tērauda lentei** ir lielas un mazas pogas: liela {{ui:Sija}} blakus mazajām {{ui:Kolonna}}, {{ui:Saite}} un {{ui:Plāksne}} cilnē {{ui:Modelēšana}} › {{ui:Elementi}}; liela {{ui:Galaplāksnes}} cilnē {{ui:Detalizēšana}} › {{ui:Savienojumi}}, ar {{ui:Savienojums}} un {{ui:Fasonplāksne}} kopīgu dalīto pogu; liela {{ui:Ielīmēt}} cilnē {{ui:Rediģēt}} › {{ui:Starpliktuve}}, ar {{ui:Ielīmēt vietā}} un {{ui:Dublēt}} aiz grupas bultiņas. {{ui:Ražošana}} › {{ui:Apmaiņa}} ir {{ui:Eksportēt USD}} blakus IFC. Pārējie izvēlņu stili izskatās kā agrāk. Skatiet [Izvēlnes, taustiņi un pele](topic:menus-keys-and-mouse#the-three-styles).
- [Rāmja aprēķins](topic:frame-analysis) tagad norāda uz projektēšanas pārbaudēm, un tā kombinācijas var izveidot pēc normas.

## Visās lietotnēs

- **Vienības.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Vienības}} katram garumam, laukumam, tilpumam, leņķim un slīpumam ir savs saraksts ar precīziem izmēriem, kādus dod vienību definīcijas (ASV topogrāfiskā pēda ir atsevišķa vienība). Izslēdziet vienības, ko nekad neizmantojat, un tās izies no vienību sarakstiem; atzīmējiet vienu ar zvaigznīti, un jauns darbs sākas tajā. Fails vienmēr saglabā savu vienību. DetailCraft savām ievades lodziņām vēl neseko sarakstiem: tā garumi joprojām tiek ievadīti milimetros. Skatiet [Vienības, ievadītās vērtības un vienību saraksti](common:unit-lists).
- **Blīvāks izkārtojums un paneļi, kas paslēpjas.** {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Izkārtojuma blīvums}} › {{ui:Kompakts}} ietilpina ekrānā vairāk (skārienekrāni un tālruņi saglabā savas lielās pogas). Katram sānu panelim ir šaura virsrakstjosla: velciet to, lai piestiprinātu vai atbrīvotu paneli, nometiet uz cita paneļa joslas, lai dalītu vienu rāmi kā cilnes, piespraudiet, lai tas paslēptos līdz malai, vai paslēpiet to un atgrieziet no malas. Skatiet [Paneļu izkārtošana](common:arrange-panels#make-the-layout-denser).
- **Dialogus var pārvietot.** Velciet dialogu aiz tā virsrakstjoslas prom no rasējuma; tas atgriežas tur, kur to atstājāt. Divreiz noklikšķiniet uz virsrakstjoslas, lai to atkal centrētu. Skatiet [Dialoga pārvietošana](common:arrange-panels#move-a-dialog).
- **Receptes MI asistentiem.** Desmit izstrādāti pieprasījumi jūsu pašu asistentam (sakārtot rasējumu, izdrukāt komplektu, pārbaudīt rasējumus, uzdot jautājumus par modeli, aprēķināt apjomu kopsummu, izmēģināt detaļas variantu…), katrs ar rīkiem, ko tas izsauc, un atļaujām, kas tam vajadzīgas; katrs tiek atkārtots mūsu testos. Lietotnēs nav MI. Skatiet [Receptes MI asistentiem](common:assistants-recipes).
- **Valodas.** **Português (Portugal)** ir jauns {{ui:Iestatījumi}} › {{ui:Vispārīgi}} › {{ui:Valoda}} sarakstā. Tā, **Português (Brasil)**, **Español (México)** un **Bahasa Indonesia** tagad ir visi lietotņu vārdi kā melnraksti, ko dzimtā valodā runātājs vēl nav pārskatījis. Palīdzības temati ir angļu valodā.
- **CadCraft Studio** norāda, kāpēc atjauninājumu pārbaude neizdevās (jūsu sistēmai vēl nav faila, nav tīkla, paraksts nav derīgs), nevis tikai „Gatavs”, un neatgriež kartīti „Kas jauns”, ko aizvērāt, līdz ir jaunāka versija.

## Šajā versijā vēl nav

- **0.7 nav parakstīta ar kodu.** Parakstīšana un Microsoft Store pakotne pārcelta uz 0.8, jo sertifikāta validācija vēl nav saņemta. Pārbaudiet SHA-256 blakus katram failam vietnē getcadcraft.com/download. Operētājsistēmā Windows, ja SmartScreen aptur instalētāju, izvēlieties {{ui:Papildinformācija}}, pēc tam {{ui:Palaist tik un tā}}. Mac datorā pirmajā reizē noklikšķiniet ar peles labo pogu uz CadCraft Studio un izvēlieties {{ui:Atvērt}}. CadCraft Studio vēl nav lietotņu veikalā, un iPad vai iPhone versijas vēl nav.
- Leņķu un slīpumu saraksti {{ui:Vienības}} tiek saglabāti, bet neviens ievades lodziņš tos vēl nenolasa.
- **Projektēšanas pārbaudes vēl nav pārskatījis inženieris.** Mūsu testi tās salīdzina ar drukātām tabulu vērtībām un ar roku aprēķinātām formulām, bet vēl ne ar projektēšanas ceļvežu piemēriem. Līdz pārskatīšanai tās ir palīgs: svarīgus elementus pārbaudiet ar roku.
- Projektēšanas pārbaudēs izmantoti pirmās kārtas spēki (bez otrās kārtas efektiem), un pārbauda tikai I-profilus. Nav izveidots: caurules, leņķi, kanāli, metinātas formas, tievas (AISC) vai 4. klases (Eirokods) daļas liekšanā, vērpe, bīdes izliekšanās kopā ar liekšanu, savienojumi, nogurums, ugunsdrošība, seismiskā detalizēšana un betons. Tievas daļas spiedē spiedes pārbaudes netiek iekļautas, un elements tiek atzīmēts kā „izturē, daļēji pārbaudīts”.
- Rāmja aprēķins joprojām ir pirmās kārtas un lineārs, un inženieris to vēl nav izmēģinājis reālā darbā.
- Skrūvju caurumi, skrūves, metinājumi un pamati USD eksportā nav iekļauti.

Pārējais ir aprakstīts [Kas vēl nav izveidots](topic:not-built-yet).
