---
title: Armēt taisnstūra betona kolonnu
summary: Darba piemērs taisnstūra betona kolonnas detalizēšanai programmā DetailCraft: novietojiet to, pievienojiet garenstieņus un saites, pārbaudiet rezultātus, pārlaidi virs tās un stieņu marķējumus un uzzīmējiet tās darbnīcas lapu.
keywords: betona kolonna, taisnstūra kolonna, kolonnas stiegrojums, garenstieņi, vertikālie stieņi, saites, cilpas, krustsaites, pārlaide, sākuma stieņi, kolonnas tērauda īpatsvars, 1 procents, 8 procenti, saišu solis, ACI 318-19 25.7.2, EN 1992-1-1 9.5, darbnīcas rasējums, stieņu marķējumi, 8C1, 3C2
from: aee2a3ca
---

Šī tēma no nulles ved līdz vienam kvadrātveida kolonnas detaļas pārbaudītam, uzzīmētam un saraksītam variantam. Vispārīgie noteikumi sijām, pārsegiem un sienām atrodami [Dzelzsbetona detalizēšana](topic:reinforced-concrete); šis ir kolonnas pusē ar skaitļiem, ko varat atkārtot.

:::warning
DetailCraft detalizē stieņus, ko jūs tam sniedzat. Tas tos neprojektē. Zemāk esošie stieņi ir piemēra sākuma vērtības, nevis ieteikums: atbildīgais inženieris izvēlas izmēru, skaitu un soli.
:::

## Kas šeit ir kolonna

Taisnstūra kolonnai ir platums (pa tās lokālo x asi) un dziļums šķērsām (pa lokālo y asi), tīrais aizsargslānis līdz saitēm, garenstieņi uz katras virsmas un slēgtas saites. Pagriežot to, griežas viss; virsmas paliek „platuma virsma” un „dziļuma virsma”.

- Garenstieņi tiek norādīti kā skaits uz platuma virsmas un skaits uz dziļuma virsmas. Stūra stieņi skaitās abās, tāpēc 3 un 3 veido 8 stieņus; 4 un 4 veido 12.
- Saites ir slēgti taisnstūri ar diviem āķiem vienā stūrī, 135° vai 90°. Pirmā saite atrodas noteiktā attālumā virs grīdas (un zem nākamās), galu zonās solis ir mazāks, vidū — lielāks.
- Ko stieņi dara augšā: turpinās un pārlaižas ar stieņiem virs, ieliecas 90° āķiem grīdā vai beidzas zem augšas.

## Darba piemērs: kolonna

Kolonna 400 × 400 mm, 3600 mm starp stāvu virs un stāvu zem, garenstieņi #8, saites #3, tīrais aizsargslānis 40 mm, f'c 28 MPa, fy 420 MPa, ACI 318-19, iekšējā kolonna.

1. Atveriet cilni {{ui:Betons}} un iestatiet režģa līnijas un līmeņus, uz kuriem kolonna stāv (kreisais panelis).
2. Sadaļā {{ui:Pievienot pēc režģa}} izvēlieties {{ui:Betona kolonna}}, norādiet režģa krustpunktu un abus līmeņus, iestatiet {{ui:Platums (mm)}} un {{ui:Dziļums šķērsām (mm)}} uz 400 un izvēlieties {{ui:Pievienot}}.
3. {{ui:Rekvizīti}} panelī iestatiet:
   - {{ui:Tīrais aizsargslānis (mm)}} 40;
   - {{ui:Garenstieņi}} #8, {{ui:Stieņi platuma virsmā}} 3, {{ui:Stieņi dziļuma virsmā}} 3;
   - {{ui:Saites}} #3, {{ui:Āķi}} 135°, {{ui:Solis starp (mm)}} 300, {{ui:Galu zonas garums (mm)}} 600, {{ui:Solis galu zonās (mm)}} 150, {{ui:Pirmā no virsmas (mm)}} 50;
   - {{ui:Stieņi augšā}} {{ui:Turpināt un pārlaist ar stieņiem virs}}.

Katra izmaiņa ir viens atsaukšanas solis.

### Ko jūs iegūstat

| Daļa | Rezultāts |
|---|---|
| Garenstieņi | 8 stieņi #8 (3 × 3 gredzens), katrs 4375 mm garš: 3600 mm kolonna plus 775 mm pārlaide virs tās |
| Pārlaide | 757 mm nepieciešami spiedes pārlaidei (ACI 318-19 25.5.5.1, fy 420), 775 mm nodrošināti: vajadzība noapaļota uz augšu līdz nākamajiem 25 mm |
| Saites | 17 saites #3, katra griezuma garums ap 1359 mm, ar soli 150 mm divās 600 mm galu zonās un 300 mm starp tām |
| Tērauda īpatsvars | 2.5 % no bruto šķērsgriezuma (robežas 1 % līdz 8 %, ACI 318-19 10.6.1.1) |
| Stieņu tīrais attālums | 112 mm (vajadzīgi vismaz 40 mm, ACI 318-19 25.2.3) |
| Saišu solis | 300 mm (atļauti 400 mm: mazākais no 16 stieņu diametriem, 48 saišu diametriem un mazākās malas, ACI 318-19 25.7.2.1) |
| Saišu izmērs | #3 (atļauts līdz 9.5 mm, ACI 318-19 25.7.2.2) |

Visi šie ir elementa sarakstā {{ui:Pārbaudes}}; pārlaide ir arī {{ui:Pārlaides un enkurojums}}.

## Krustsaites

Ar vienu perimetra saiti tiek turēti tikai stūra stieņi. ACI 318-19 25.7.2.3 ļauj vidējam virsmas stienim palikt bez atbalsta, ja tas atrodas 150 mm tīrā attālumā no stūra stieņa. Ar 3 stieņiem uz virsmas, kā iepriekš, tas ir izpildīts. Ar 4 vai vairāk stieņiem uz virsmas tas nav izpildīts, un DetailCraft par to brīdina ({{ui:Pārbaudes}} un Problēmas): nepieciešamas „krustsaites”. **Krustsaites vēl nav uzzīmētas**: pievienojiet tās rasējumā ar roku vai izvēlieties uz virsmas mazāk stieņu.

EN 1992-1-1 gadījumā DetailCraft pārbauda stieņa izmēru (vismaz 8 mm), stieņu skaitu (vismaz 4), tērauda laukumu (0.2 % līdz 4 % no šķērsgriezuma), tīro attālumu un saišu soli (9.5.2 un 9.5.3).

## Pārlaide, pamats un kolonna zem

- Ja **modeļa pamats atrodas zem kolonnas**, kolonna pārlaižas ar pamata sākuma stieņiem, un arī to pārlaide tiek pārbaudīta.
- Ja **modeļa cita kolonna atrodas zem tās**, tā pārlaižas ar tās kolonnas stieņiem.
- Lai pārrakstītu, norādiet savu {{ui:Pārlaides garums (mm, 0 = pēc vajadzības)}}; īsāka par nepieciešamo ir problēma un tabulā atzīmēta ar *.
- Pēc noklusējuma tiek izmantotas spiedes pārlaides ({{ui:Spiedes pārlaide}} iestatījumos); izvēlieties {{ui:Stiepes pārlaide}}, kad kolonna var būt stiepē.

## Marķējumi, specifikācija un darbnīcas lapa

Identiski stieņi dalās vienā marķējumā: augstāk esošās kolonnas garenstieņi ir 8C1, tās saites 17C2 (vispirms skaitlis, tad veida burts C kolonnai un kārtas numurs). Tie parādās cilnē {{ui:Liekšanas specifikācija}} ar griezuma garumu un svaru, kā arī CSV failā no {{ui:Izvade}} › {{ui:Vairāk}} › {{ui:Liekšana}}.

Izvēlieties {{ui:Darbnīcas rasējums}} blakus kolonnai, lai iegūtu lapu ar kolonnu fasādē (katrs stienis, tā marķējums, saišu zonas un pārlaide ar izmēriem) un šķērsgriezumu vidū, kam seko stieņu liekšanas lapa. Saglabājiet {{ui:Šī lapa kā PDF}}.

## Ko šis neveic

- Apaļās kolonnas un spirāles, kā arī kolonnas, kas nav taisnstūrveida: vēl nav izveidotas.
- Stūra un krustsaites šķērsgriezuma iekšpusē un seismiskā detalizēšana (ACI 318-19 18. nodaļa): vēl nav izveidotas.
- Pārlaides izvēlētās vietās vai pārmaiņus izvietotas: visi stieņi pārlaižas vienā griezumā.
- Vai stieņi pietiek slodzei: tā ir inženiera projektēšana.
