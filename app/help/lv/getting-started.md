---
title: Darba sākšana ar DetailCraft
summary: Ko DetailCraft dara šobrīd, kā to atvērt un pirmais modelis no režģiem līdz darbnīcas rasējumam desmit minūtēs.
keywords: sākt, pirmais modelis, ievads, tērauda detalizēšana, armatūra, ātrs sākums, apmācība, pārskats
from: 3682c0d8
---

DetailCraft ir tērauda un armatūras detalizēšanas lietotne CadCraft saimē. Jūs veidojat tērauda rāmja 3D modeli uz režģiem un līmeņiem, savienojat to un iegūstat to, kas nepieciešams ražotnei: detaļu un mezglu marķējumus, materiālu sarakstu, atsevišķu detaļu darbnīcas rasējumus, DSTV NC failus, IFC modeli un pamatu stieņu specifikāciju.

Šī ir agrīna versija. Tā veic īsu darbu sarakstu rūpīgi, nevis visu uzreiz. Pirms plānojat īstu darbu, izlasiet [Kas vēl nav izveidots](topic:not-built-yet).

## Ko tā dara šobrīd

- Režģi un līmeņi, ko ievadāt milimetros.
- Kolonnas, sijas, saites un plāksnes no publicētiem profilu katalogiem (AISC W, S, C, L, HSS un Pipe; Eiropas IPE, HEA, HEB un UPN), kā arī jūsu pašu parametriskie profili.
- Divi savienojumi: skrūvēta galaplāksne no sijas līdz kolonnas flanšam un kolonnas balstplāksne ar četriem enkurstieņiem. Katru var kopēt uz katru līdzīgu mezglu.
- Caurumi un izgriezumi, ko ievada pēc pozīcijas.
- Taisnstūra paliktņu pamati ar apakšējo tīklu un sākuma stieņiem.
- Detaļu un mezglu marķējumi, kas pēc katras izmaiņas atjaunojas paši.
- Eksporti: IFC4, DSTV NC faili (I-profili un plāksnes), materiālu saraksts kā CSV, liekšanas specifikācija kā CSV un vienas detaļas darbnīcas rasējums PDF formātā.

## DetailCraft atvēršana

1. Atveriet DetailCraft darbvirsmas pārlūkprogrammā: Chrome, Edge, Firefox vai Safari. Skatiet [Pārlūkprogrammas un datori](common:browsers).
2. Pagaidiet, līdz ekrāns aizpildās. Apakšējā statusa joslā parādās „Gatavs. Atveriet paraugu vai iestatiet režģus un līmeņus un sāciet novietot elementus.”

Modeļa skatam nepieciešama 3D grafika (WebGL). Ja ekrāna vidū parādās „Šī pārlūkprogramma nevarēja palaist 3D grafiku (WebGL)”, skatiet [Problēmu novēršana](topic:troubleshooting#the-3d-view-is-missing).

:::note
Jūsu modeļi paliek jūsu datorā. Modeļa atvēršana nolasa to pārlūkprogrammā, un saglabāšana lejupielādē failu. Nekas netiek augšupielādēts. Saglabāšana mākonī vēl nav pieejama. Skatiet [Kur atrodas jūsu faili](common:your-files). Lai vēlāk izmantotu DetailCraft bez savienojuma, reiz, kamēr esat tiešsaistē, lietotņu joslā izvēlieties {{ui:Saglabāt bezsaistei}}; skatiet [Darbs bezsaistē](common:offline).
:::

:::offline
Jūs esat bezsaistē. DetailCraft darbojas bez savienojuma tikai tad, ja tas vispirms ir saglabāts lietošanai bezsaistē: lietotņu joslas poga {{ui:Saglabāt bezsaistei}} tad rāda {{ui:Gatavs darbam bezsaistē}}. Skatiet [Darbs bezsaistē](common:offline).
:::

## Vispirms apskatiet paraugu

Ātrākais veids, kā redzēt, ko DetailCraft veido, ir paraugrāmis.

1. Rīkjoslas grupā {{ui:Fails}} izvēlieties {{ui:Paraugs}}.
2. Skatā redzams divu laidumu rāmis: sešas kolonnas ar balstplāksnēm, četras sijas ar galaplāksnēm, viena saite un septiņi pamati ar armatūru.
3. Noklikšķiniet uz sijas. Labajā pusē esošais panelis {{ui:Rekvizīti}} parāda tās detaļas marķējumu, griezuma garumu, svaru un caurumus, ko izveidoja galaplāksnes.
4. Atveriet apakšā esošo cilni {{ui:Materiālu saraksts}}, lai redzētu katru detaļas marķējumu ar tā skaitu un svaru.

Pārskatā [Iepazīties ar paraugrāmi](topic:sample-model) tas ir aplūkots detaļu pa detaļai.

## Jūsu pirmais modelis

Jaunam modelim jau ir režģi 1 līdz 3 pa A līdz B ar 6000 mm soli un divi līmeņi: Level 1 pie 0 un Level 2 pie 4000.

1. Izvēlieties {{ui:Jauns}}. Ja pašreizējam modelim ir izmaiņas, DetailCraft vispirms jautā, vai tās saglabāt.
2. Izvēlieties {{ui:Plāns}} virs skata. Blakus esošajā līmeņu sarakstā tiek izvēlēts Level 1.
3. Rīkjoslā izvēlieties {{ui:Kolonna}} vai nospiediet {{key:C}}.
4. Noklikšķiniet uz režģa krustpunkta A/1. No Level 1 līdz Level 2 parādās kolonna W12x50. Statusa joslā norādīts, kur tā tika novietota.
5. Noklikšķiniet uz B/1, A/2 un B/2, lai novietotu vēl trīs.
6. Līmeņu sarakstā izvēlieties Level 2, pēc tam izvēlieties {{ui:Sija}} vai nospiediet {{key:B}}.
7. Noklikšķiniet uz A/1, pēc tam uz A/2. Sija W16x26 savieno abu kolonnu augšējos galus, tērauda augšējā mala atrodas uz līmeņa.
8. Nospiediet {{key:Esc}}, lai atgrieztos pie {{ui:Atlasīt}}, un pēc tam noklikšķiniet uz sijas.
9. Grupā {{ui:Savienot}} izvēlieties {{ui:Galaplāksnes}}. Abiem galiem tiek pievienota skrūvēta galaplāksne, sija tiek apgriezta, lai derētu, un pirmā galaplāksne tagad ir atlasīta.
10. Vēlreiz noklikšķiniet uz sijas.
11. Grupā {{ui:Izvade}} izvēlieties {{ui:Darbnīcas rasējums}}. Atveras sijas darbnīcas rasējuma priekšskatījums. Izvēlieties {{ui:Lejupielādēt PDF}}.
12. Nospiediet {{key:Mod+S}}, lai saglabātu modeli. Pārlūkprogramma lejupielādē `Untitled.detailcraft.json`.

Pirms saglabāšanas pārdēvējiet modeli laukā {{ui:Nosaukums}} augšā pa kreisi, lai fails un katrs eksports nes tā nosaukumu.

## Kur doties tālāk

- [Ekrāna apskats](topic:workspace)
- [Režģu un līmeņu iestatīšana](topic:grids-and-levels)
- [Pārvietošanās 3D skatā](topic:navigate-3d), ar peli, skārienpaliktni vai skārienekrānu
- [Pāreja no citas detalizēšanas programmatūras](topic:coming-from), ja pazīstat kādu lielu detalizēšanas paketi
- [Šīs palīdzības izmantošana](common:help)
