---
title: Darba sākšana ar DetailCraft
summary: Ko DetailCraft dara šobrīd, kā to atvērt un pirmais modelis no režģiem līdz darbnīcas rasējumam desmit minūtēs.
keywords: sākt, pirmais modelis, ievads, tērauda detalizēšana, armatūra, ātrais sākums, apmācība, pārskats
from: e4f16bbe
---

DetailCraft ir tērauda un armatūras detalizēšanas lietotne CadCraft saimē. Jūs veidojat tērauda karkasa 3D modeli uz režģiem un līmeņiem, savienojat to un iegūstat to, kas nepieciešams darbnīcai: detaļu un mezglu marķējumus, materiālu sarakstu, vienas detaļas darbnīcas rasējumus, DSTV NC failus, IFC modeli un liekšanas specifikāciju pamatiem.

Šī ir agrīna versija. Tā rūpīgi veic nelielu uzdevumu sarakstu, nevis visu uzreiz. Pirms plānojat reālu darbu ar to, izlasiet [Kas vēl nav izveidots](topic:not-built-yet).

## Ko tā dara šobrīd

- Režģi un līmeņi, ko ievadāt milimetros.
- Kolonnas, sijas, saites un plāksnes no publicētiem profilu katalogiem (AISC W, S, C, L, HSS un Pipe; Eiropas IPE, HEA, HEB un UPN; Lielbritānijas UB, UC, PFC, EA, UEA, SHS, RHS un CHS), kā arī jūsu pašu parametriskie profili.
- Divi savienojumi: skrūvēta galaplāksne no sijas līdz kolonnas flanšam un kolonnas balstplāksne ar četriem enkurstieņiem. Katru no tiem var kopēt uz katru līdzīgu mezglu.
- Caurumi un izgriezumi, ievadīti pēc pozīcijas.
- Taisnstūrveida plākšņu pamati ar apakšējo armatūras tīklu un sākuma stieņiem.
- Detaļu un mezglu marķējumi, kas atjaunojas paši pēc katras izmaiņas.
- Eksporti: IFC4, DSTV NC faili (I profili un plāksnes), materiālu saraksts CSV formātā, liekšanas specifikācija CSV formātā un vienas detaļas darbnīcas rasējums PDF formātā.

## Atveriet DetailCraft

1. Atveriet DetailCraft darbvirsmas pārlūkā: Chrome, Edge, Firefox vai Safari. Skatiet [Pārlūki un datori](common:browsers).
2. Pagaidiet, līdz ekrāns ir pilns. Statusa josla apakšā saka "Gatavs. Atveriet paraugu vai iestatiet režģus un līmeņus un sāciet novietot elementus."

Modeļa skatam nepieciešama 3D grafika (WebGL). Ja ekrāna vidū ir teikts "Šis pārlūks nevarēja palaist 3D grafiku (WebGL)", skatiet [Problēmu novēršana](topic:troubleshooting#the-3d-view-is-missing).

:::note
Jūsu modeļi paliek jūsu datorā. Modeļa atvēršana nolasa to pārlūkā, un saglabāšana lejupielādē failu. Nekas netiek augšupielādēts. Saglabāšana mākonī vēl nav pieejama. Skatiet [Kur atrodas jūsu faili](common:your-files). Lai vēlāk lietotu DetailCraft bez savienojuma, tiešsaistē vienreiz izvēlieties lietotnes joslā {{ui:Saglabāt bezsaistei}}; skatiet [Darbs bezsaistē](common:offline).
:::

:::offline
Jūs esat bezsaistē. DetailCraft darbojas bez savienojuma tikai tad, ja tas iepriekš tika saglabāts lietošanai bezsaistē: poga {{ui:Saglabāt bezsaistei}} lietotnes joslā tad rāda {{ui:Gatavs darbam bezsaistē}}. Skatiet [Darbs bezsaistē](common:offline).
:::

## Vispirms apskatiet paraugu

Visātrākais veids, kā redzēt, ko DetailCraft veido, ir parauga karkass.

1. Izvēlieties {{ui:Paraugs}} grupā {{ui:Fails}} rīkjoslā.
2. Skats rāda divu laidumu karkasu: sešas kolonnas ar balstplāksnēm, četras sijas ar galaplāksnēm, vienu saiti un septiņus pamatus ar armatūru.
3. Noklikšķiniet uz sijas. Panelis {{ui:Rekvizīti}} pa labi rāda tās detaļas marķējumu, griezuma garumu, svaru un caurumus, ko izveidoja galaplāksnes.
4. Atveriet cilni {{ui:Materiālu saraksts}} apakšā, lai redzētu katru detaļas marķējumu ar tā skaitu un svaru.

Pastaiga [Parauga karkasa apskate](topic:sample-model) iziet cauri tam pa daļām.

## Jūsu pirmais modelis

Jaunam modelim jau ir režģi no 1 līdz 3 un no A līdz B ar 6000 mm soli, kā arī divi līmeņi: Līmenis 1 ar 0 un Līmenis 2 ar 4000.

1. Izvēlieties {{ui:Jauns}}. Ja pašreizējam modelim ir izmaiņas, DetailCraft jautā, vai tās vispirms saglabāt.
2. Izvēlieties {{ui:Plāns}} virs skata. Blakus esošais līmeņu saraksts izvēlas Līmenis 1.
3. Izvēlieties {{ui:Kolonna}} rīkjoslā vai nospiediet {{key:C}}.
4. Noklikšķiniet uz režģa krustpunkta A/1. Parādās W12x50 kolonna no Līmenis 1 līdz Līmenis 2. Statusa josla norāda, kur tā tika novietota.
5. Noklikšķiniet uz B/1, A/2 un B/2, lai novietotu vēl trīs.
6. Izvēlieties Līmenis 2 līmeņu sarakstā, pēc tam izvēlieties {{ui:Sija}} vai nospiediet {{key:B}}.
7. Noklikšķiniet uz A/1, pēc tam uz A/2. W16x26 sija savieno abu kolonnu augšdaļas, un tās tērauda augšējā mala ir uz līmeņa.
8. Nospiediet {{key:Esc}}, lai atgrieztos pie {{ui:Atlasīt}}, pēc tam noklikšķiniet uz sijas.
9. Izvēlieties {{ui:Galaplāksnes}} grupā {{ui:Savienot}}. Abos galos tiek pievienota skrūvēta galaplāksne, sija tiek saīsināta, lai tā atbilstu, un pirmā galaplāksne tagad ir atlasīta.
10. Noklikšķiniet uz sijas vēlreiz.
11. Izvēlieties {{ui:Darbnīcas rasējums}} grupā {{ui:Izvade}}. Atveras sijas darbnīcas rasējuma priekšskatījums. Izvēlieties {{ui:Lejupielādēt PDF}}.
12. Nospiediet {{key:Mod+S}}, lai saglabātu modeli. Pārlūks lejupielādē `Untitled.detailcraft.json`.

Pirms saglabāšanas pārdēvējiet modeli laukā {{ui:Nosaukums}} augšējā kreisajā pusē, lai fails un visi eksporti nes tā nosaukumu.

## Kur doties tālāk

- [Ekrāna apskate](topic:workspace)
- [Režģu un līmeņu iestatīšana](topic:grids-and-levels)
- [Pārvietošanās 3D skatā](topic:navigate-3d), izmantojot peli, skārienpaliktni vai skārienekrānu
- [Pāriešana no citas detalizēšanas programmatūras](topic:coming-from), ja pazīstat kādu lielu detalizēšanas paketi
- [Šīs palīdzības lietošana](common:help)
