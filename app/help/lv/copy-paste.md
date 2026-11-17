---
title: Kopēšana, ielīmēšana un dublēšana
summary: Atlasiet vairākas detaļas, kopējiet tās kopā ar caurumiem, izgriezumiem un savienojumiem un ielīmējiet režģa krustpunktā, ar nobīdi, vietā vai citā cilnē. Izgriezt, dublēt, dzēst un atlasīt visu.
keywords: kopēt, ielīmēt, izgriezt, dublēt, starpliktuve, ielīmēt vietā, atlasīt visu, noņemt atlasi, vairākkārtēja atlase, Shift klikšķis, vairāki, atkārtot lauku, kopēt rāmi, nobīde, dzēst vairākus, rediģēšanas izvēlne, izvēlne Vairāk
from: f25f1829
---

Grupā {{ui:Rediģēt}} rīkjoslā ir {{ui:Atsaukt}}, {{ui:Atkārtot}}, {{ui:Kopēt}} un {{ui:Ielīmēt}}. Tās izvēlnē {{ui:Vairāk}} ir pārējās komandas: {{ui:Izgriezt}}, {{ui:Kopēt}}, {{ui:Ielīmēt}}, {{ui:Ielīmēt vietā}}, {{ui:Dublēt}}, {{ui:Dzēst}}, {{ui:Atlasīt visu}} un {{ui:Noņemt atlasi}}, katrai ir sava taustiņkombinācija. Poga vai izvēlnes vienums, kas pašlaik nevar darboties, ir pelēks; novietojiet virs tā kursoru, lai izlasītu iemeslu (piemēram, "vēl nekas nav nokopēts").

Katra ielīmēšana, izgriešana, dublēšana un dzēšana ir viens solis: viens {{key:Mod+Z}} atsauc visu.

## Atlasīt vairākas detaļas

- Noklikšķiniet uz detaļas, lai to atlasītu. Turiet {{key:Shift}} (vai {{key:Ctrl}}, vai {{key:Mod}}) un noklikšķiniet uz citām detaļām, lai tās pievienotu; līdzīgi noklikšķiniet uz jau atlasītas detaļas, lai to noņemtu.
- {{key:Mod+A}} vai {{ui:Atlasīt visu}} atlasa katru elementu, savienojumu un pamatni.
- {{key:Esc}} vai {{ui:Noņemt atlasi}} notīra atlasi.

Ar vairākiem atlasītiem objektiem panelis {{ui:Rekvizīti}} virsrakstā rāda "4 atlasīti" (vai cik ir), uzskaita elementus pēc tipa, savienojumus, pamatnes un bruto tērauda svaru, un tajā ir pogas {{ui:Kopēt}}, {{ui:Dublēt}} un {{ui:Dzēst}}.

## Kopēt

1. Atlasiet vajadzīgos elementus un pamatnes.
2. Izvēlieties {{ui:Kopēt}} vai nospiediet {{key:Mod+C}}.

Kopā ar tiem tiek pārnests:

- Katrs elements pilnībā: profils, materiāls, gali, pozīcija, pagrieziens, nosaukums, caurumi un izgriezumi. Arī izmantotais pielāgotais profils tiek nokopēts.
- Katra pamatne pilnībā: izmērs, betons, apakšējais tīkls un sākuma stieņi.
- Galaplāksnes un bāzes plāksnes, bet tikai tad, ja tiek kopēts katrs elements, ko savieno savienojums: sijas galaplāksnei vajadzīga sija un tās kolonna. Statusa joslā norādīts, cik savienojumi palika ārpus kopijas. Lai apzināti atstātu savienojumus ārpusē, notīriet **Kopēt galaplāksnes un bāzes plāksnes kopā ar to elementiem** [DetailCraft iestatījumos](topic:settings).

Savienojumu nevar nokopēt atsevišķi; atlasiet tā elementus. Lai citiem mezgliem piešķirtu tādu pašu savienojumu, izmantojiet {{ui:Līdzīgs}} (skatiet [Galaplāksnes](topic:end-plates#copy-it-to-every-similar-joint)).

Kopija paliek šajā pārlūkprogrammā, līdz nokopējat ko citu. Cita DetailCraft cilne vai logs tajā pašā pārlūkprogrammā var to ielīmēt, tāpēc varat nokopēt rāmi no viena modeļa un ielīmēt to citā.

## Ielīmēt režģa krustpunktā

1. Izvēlieties {{ui:Ielīmēt}} vai nospiediet {{key:Mod+V}}.
2. Pārvietojiet kursoru pāri skatam. Kopijas kontūra ar punktētu līniju seko tuvākajam režģa krustpunktam.
3. Noklikšķiniet uz krustpunkta. Kopijas bāzes punkts (tās apakšējais stūris: mazākās x, y un z vērtības no visa kopētā) tiek novietots tur.

Ielīmētās detaļas pēc tam paliek atlasītas, tāpēc varat ielīmēt vēlreiz citur vai tās mainīt. {{key:Esc}} atceļ ielīmēšanu; kopija paliek starpliktuvē. {{ui:Plāns}} un {{ui:Fasāde}} atvieglo pareizā krustpunkta atrašanu.

:::tip
Lai atkārtotu lauku, atlasiet lauka elementus (vai visu ar {{key:Mod+A}}), kopējiet, ielīmējiet un noklikšķiniet uz krustpunkta, kas atrodas vienu lauku tālāk no vietas, kur bija kopijas apakšējais stūris.
:::

## Ielīmēt no tastatūras

Ielīmēšanas laikā panelī {{ui:Rekvizīti}} redzams, kas ir starpliktuvē, un divas formas:

- {{ui:Ielīmēt ar nobīdi (mm, no oriģināla)}}: ierakstiet x, y un z un izvēlieties {{ui:Ielīmēt ar šo nobīdi}}. Sākumā tiek izmantota nobīde no [DetailCraft iestatījumiem](topic:settings).
- {{ui:Ielīmēt režģa krustpunktā}}: izvēlieties burtu režģa līniju, numurētu režģa līniju un līmeni un izvēlieties {{ui:Ielīmēt šeit}}. Bāzes punkts tiks novietots tur.

## Ielīmēt vietā

{{ui:Ielīmēt vietā}} ({{key:Mod+Shift+V}}) novieto kopiju tieši tajās koordinātēs, no kurām tā tika nokopēta. Izmantojiet to pēc {{ui:Izgriezt}} vai, lai ielīmētu detaļas no cita modeļa tajā pašā vietā. Ja oriģināli joprojām ir vietā, kopija atrodas tiem virsū un statusa josla brīdina: pārvietojiet kopijas ar to {{ui:Sākums}} un {{ui:Gals}} panelī {{ui:Rekvizīti}} vai atsauciet darbību.

## Dublēt

{{ui:Dublēt}} ({{key:Mod+D}}) nokopē atlasi un uzreiz ielīmē to, pārvietotu par nobīdi no [DetailCraft iestatījumiem] (sākumā 6000 mm pa x asi). Tas nemaina starpliktuves saturu. Kopijas paliek atlasītas, tāpēc, nospiežot {{key:Mod+D}} vēlreiz, tiek izveidota nākamā kopija no tām.

## Izgriezt un dzēst

- {{ui:Izgriezt}} ({{key:Mod+X}}) nokopē atlasi un pēc tam to dzēš. Ielīmējiet to tur, kur tai jābūt.
- {{ui:Dzēst}} ({{key:Delete}} vai {{key:Backspace}}) dzēš atlasi. Elementa dzēšana dzēš arī tā savienojumus.

## Marķējumi pēc ielīmēšanas

Detaļu un mezglu marķējumi nekad netiek saglabāti; DetailCraft tos pārnumurē no modeļa pēc katras izmaiņas ([Kā tiek piešķirti marķējumi](topic:mark-rules)). Tātad:

- Kopija, kas ir tāda pati detaļa kā oriģināls (tāds pats profils, klase, griezuma garums, caurumi un izgriezumi), dalās ar oriģināla marķējumu, un skaits {{ui:Detaļu marķējumi}} un materiālu sarakstā palielinās.
- Kopija, kas kļūst citāda, saņem savu marķējumu. Piemēram, sija, kas ielīmēta bez galaplāksnēm, netiek apgriezta, tāpēc tā ir cita detaļa. Marķējumi tiek pārnumurēti visā modelī, tāpēc arī citu detaļu numuri var mainīties.

Katrs ielīmētais elements, caurums, izgriezums, savienojums un pamatne saņem jaunu identifikatoru, tāpēc nekas modelī netiek koplietots starp kopiju un oriģinālu.

## Ja starpliktuve tiek noraidīta

Starpliktuves saturs tiek pārbaudīts tikpat rūpīgi kā atvērts modeļa fails: viss, kas nav derīga DetailCraft detaļa, tiek izmests, un statusa josla pasaka, kas noticis. Starpliktuve, ko ir aizpildījis jaunāks DetailCraft vai kaut kas cits, tiek noraidīta ar ziņojumu, un nekas netiek ielīmēts. Ja privātais logs nevar saglabāt kopiju pārlūkprogrammas krātuvē, kopija joprojām darbojas šajā cilnē.
