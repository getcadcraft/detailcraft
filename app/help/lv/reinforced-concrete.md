---
title: Detalizēt dzelzsbetona sijas, kolonnas, pārsegumus un sienas
summary: Pievienojiet betona sijas, kolonnas, pārsegumus un sienas pēc režģa, nododiet tiem stieņus, skavas un saites, pārbaudiet pārlaides un enkurojumu pēc ACI 318-19 vai EN 1992-1-1 un izveidojiet darbnīcas rasējumus un liekšanas lapas.
keywords: dzelzsbetons, stiegrojums, armēšana, sija, kolonna, pārsegums, siena, skavas, saites, āķi, pārlaides, pārlaide, enkurojums, attīstības garums, ld, ldh, lbd, aizsargslānis, solis, malu stieņi, atveres, tīkli, stieņu zīmes, liekšanas specifikācija, liekšanas lapa, bbs, darbnīcas rasējums, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, IFC imports
from: 3835b7ec
---

Cilne {{ui:Betons}} zem skata sīkāk apraksta betona sijų, kolonnu, pārsegumu un sienu stieņus. Jūs norādāt izmērus un stieņus; DetailCraft novieto katru stieni, numurē to, pārbauda pārlaides, enkurojumu, aizsargslāni un soli pret punktu, no kura tie izriet, un to zīmē.

:::warning
DetailCraft detalizē stieņus, ko jūs tam norādāt. Tas tos neprojektē. Katrs rezultāts ir paredzēts inženiera pārbaudei.
:::

## Atvērt cilni Betons

Izvēlieties cilni {{ui:Betons}} zem skata. Lentes izkārtojumā {{ui:Betons}} atrodas cilnē {{ui:Modelēšana}} blakus {{ui:Pamats}}. Ar rasēšanas stila komandrindu ierakstiet {{cmd:CONCRETE}}.

## Elementa pievienošana pēc režģa

Betona elementi tiek novietoti uz modeļa režģa līnijām un līmeņiem, tāpēc vispirms tos sagatavojiet (kreisajā panelī).

1. {{ui:Pievienot pēc režģa}} izvēlieties {{ui:Elements}}: {{ui:Betona sija}}, {{ui:Betona kolonna}}, {{ui:Pārsegums}} vai {{ui:Siena}}.
2. Norādiet režģa līnijas un līmeņus:
   - sija iet no viena režģa krustpunkta līdz otram, tās augša ir līmenī;
   - kolonna stāv krustpunktā, no viena līmeņa līdz otram;
   - pārsegums aizpilda taisnstūri starp divām numurētām un divām burtiem apzīmētām režģa līnijām, tā augša ir līmenī;
   - siena iet pa savu centrālo līniju no viena krustpunkta līdz otram, no viena līmeņa līdz otram.
3. Norādiet izmēru un izvēlieties {{ui:Pievienot}}. Elements tiek atlasīts, un tā lauki atveras panelī {{ui:Rekvizīti}}.

Katrs elements sākas ar stieņiem, kas ir sākuma vērtības, nevis projektējums: mainiet tos uz inženiera vērtībām.

## Stieņu maiņa

Atlasiet elementu (skatā vai tā nosaukumu cilnē {{ui:Betons}}). Panelis {{ui:Rekvizīti}} rāda:

| Elements | Ko iestatāt |
|---|---|
| Sija | Platums, dziļums, tīrais aizsargslānis; augšējie un apakšējie stieņi (izmērs, skaits, taisns vai 90° āķis galos); sānu stieņi; skavas (izmērs, 135° vai 90° āķi, pirmās attālums no balsta virsmas, gala zonas garums un solis, soli starp tām); balsta garumi; pārlaides garumi |
| Kolonna | Platums, dziļums šķērsvirzienā, pagrieziens, aizsargslānis; garenstieņi katrā malā; saites kā skavām; ko stieņi dara augšā (pārlaide ar kolonnu virs, āķis grīdā vai apstāšanās) |
| Pārsegums | Biezums, izmērs, augšdaļa, aizsargslāņi; apakšējais un augšējais tīkls katrā virzienā (izmērs un solis); U-veida stieņi ap malām; malu stieņi; atveres |
| Siena | Biezums, aizsargslānis, viena vai divas kārtas, horizontālie un vertikālie stieņi, U-veida stieņi galos, vertikālie stieņi ar pārlaidi augšā vai bez, malu stieņi, atveres |

Katra izmaiņa ir viens atsaukšanas solis. Izmaiņa, ko nevar izveidot, tiek noraidīta, un statusa josla norāda iemeslu, piemēram: "Atvere neietilpst elementā kopā ar tā aizsargslāni."

Skavas un saites ir slēgtas, abi āķi ir vienā stūrī. Sijas stieņi galos iet betona kolonnā līdz kolonnas tālākajai malai, atskaitot aizsargslāni; ja kolonnas nav, norādiet {{ui:Balsta garums sākumā (mm)}} un galā.

## Pārlaides un enkurojums

Stieņi, kas ir garāki par {{ui:Stieņa standarta garums (mm)}} (sākumā 12000), tiek sagriezti vienāda garuma gabalos un pārlaisti. Tabulā {{ui:Pārlaides un enkurojums}} ir uzskaitīta katra pārlaide un katrs enkurojums: kas nepieciešams, ar punktu un tā nosacījumiem, un kas ir detaļā.

- Pārlaides garums 0 nozīmē "pēc vajadzības": standarts dotais garums, noapaļots uz augšu līdz 25 mm.
- Ierakstiet savu pārlaides garumu, lai izmantotu to. Ja tas ir īsāks par nepieciešamo, tā ir problēma (skatiet zemāk), un tabulā tas ir atzīmēts ar *.
- Enkurojums tiek mērīts no balsta virsmas līdz stieņa galam balstā. Sija bez zināma balsta to norāda, nevis pārbauda.
- Kolonna, kas stāv uz pamata, pārlaiž ar pamata sākuma stieņiem, bet uz citas kolonnas — ar tās kolonnas stieņiem: arī to pārlaide tiek pārbaudīta.

**ACI 318-19** (SI): taisni stieņi stiepē 25.4.2.3 (tabula, ar ψt, ψe, ψg, λ), standarta āķi 25.4.3.1 (ψr 1.6 un ψo 1.25 tiek ņemti, ja nav zināms citādi), stieņi spiedē 25.4.9.2, pārlaides stiepē 25.5.2.1 (B klase vai A klase iestatījumos), pārlaides spiedē 25.5.5.1.

**EN 1992-1-1**: enkurojums 8.4.4 ar fbd no 8.4.2 (labas vai sliktas saķeres apstākļi), pārlaides 8.7.3 ar α6 katram stienim, kas pārlaists vienā šķērsgriezumā. γc, γs un αct sākas ar ieteicamajām vērtībām; iestatiet savu valsts pielikumu.

## Pārbaudes

Katra neizdevusies pārbaude ir lietotnes panelī Problēmas (avots {{ui:Armēšanas pārbaudes}}) un elementa sarakstā {{ui:Pārbaudes}}:

| Pārbaude | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Aizsargslānis | 20.5.1.3.1. tabula, atkarībā no iedarbības | Saķeres minimums, 4.2. tabula (ilgizturības aizsargslāni nosakāt jūs) |
| Brīvais stieņu solis | 25.2.1 (sijas, pārsegumi, sienas), 25.2.3 (kolonnas) | 8.2 (2) |
| Skavu solis | 9.7.6.2.2 | 9.2.2 (6) |
| Sijas minimālais tērauds | 9.6.1.2 | 9.2.1.1 (1) |
| Sijas sānu stieņi, ja dziļums virs 900 mm | 9.7.2.3 | nav pārbaudīts |
| Kolonnas tērauda attiecība, stieņu skaits | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Saites: solis, izmērs, šķērssaites | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Pārseguma solis, minimālais tērauds | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Sienas solis, minimālais tērauds, divas kārtas | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Pārlaides, enkurojums | kā augstāk | kā augstāk |

Piedevu izmērs nav zināms, tāpēc brīvais solis tiek pārbaudīts bez tā.

## Atveres, malu stieņi un U-veida stieņi

Atlasītam pārsegumam vai sienai izvēlieties {{ui:Pievienot atveri}} un norādiet tās vietu un izmēru. Stieņi, ko tā šķērso, apstājas aizsargslāņa attālumā no tās malas. Malu stieņi tiek pievienoti katrā pusē, tajā pašā kārtā, nesot pusi no pārgriezto stieņu laukuma, viena enkurojuma garumu aiz atveres. Tas ir DetailCraft sākuma noteikums, nevis standarta punkts: mainiet {{ui:Malu stieņi}} uz inženiera vērtībām. Stūru stieņi netiek pievienoti.

U-veida stieņiem ap pārseguma brīvajām malām un sienas galos kājas ir viena pārlaides garuma garas.

## Stieņu zīmes un liekšanas specifikācija

Identiski stieņi dalās vienā zīmē: pamati saglabā F zīmes (5F1), sijas saņem B, kolonnas C, pārsegumi S un sienas W (7B1, 8C1, 4S2). Cilne {{ui:Liekšanas specifikācija}} un tās CSV tagad uzskaita katru konstrukcijas stieni, vispirms pamatus. {{ui:Izvade}} › {{ui:Vairāk}} › {{ui:Liekšana}} to lejupielādē.

## Darbnīcas rasējumi

Izvēlieties {{ui:Izvade}} › {{ui:Vairāk}} › {{ui:Armēšanas rasējumi}}, {{ui:Armēšanas rasējumi}} cilnē {{ui:Betons}} vai {{ui:Darbnīcas rasējums}} blakus vienam elementam.

Katrs elements saņem lapu ar fasādi (pārsegumam — plānu), kurā redzams katrs stienis un tā zīme, skavu vai saišu zonas un izmērotās pārlaides, un griezumu vidū; pēc tam liekšanas lapās ir uzskaitīta katra zīme ar tās formas skici, izmēriem, skaitu, griešanas garumu un svaru.

Lapas katru reizi tiek veidotas no modeļa un atkārtoti pēc katras izmaiņas, kamēr logs ir atvērts: titula blokā ir modeļa atsauce. Saglabājiet {{ui:Šī lapa kā PDF}} vai {{ui:Visas lapas kā PDF}}.

## Stieņi no IFC faila

{{ui:Fails}} › {{ui:Importēt IFC}} tagad nolasa IfcReinforcingBar: pa stieņa centrālo līniju veidotais disks tiek atgriezts kā taisni posmi un liekumi, ar savu diametru, zīmi un elementu, kas to satur. Stieņi tiek saglabāti tādi, kādi tie tika nolasīti (tie netiek pārvērsti sijas vai pārseguma noteikumos), tiek rādīti skatā, uzskaitīti liekšanas specifikācijā un atkal izvadīti ar IFC eksportu. Importa pārskatā norādīts, cik stieņu tika nolasīti, kādu izmēru, cik elementos, un kas tika izlaists un kāpēc.

Sija, kolonna, pārsegums vai siena no šī faila, kas satur stieņus vai kuras materiāls ir betons, netiek uzskatīta par tēraudu; pārskatā tas tiek norādīts. DetailCraft pašu IFC eksports nes katra betona elementa definīciju, tāpēc tas atgriežas kā pats, un tā stieņi no tās tiek izveidoti no jauna.

:::note
Konstrukciju projektēšanas programmu pašu failu nolasīšana (nevis IFC) nav izveidota: no tās eksportējiet IFC.
:::

## IFC eksports

Betona sijas, kolonnas, pārsegumi (ar atverēm) un sienas tiek eksportētas kā IfcBeam, IfcColumn, IfcSlab un IfcWall, katra ar saviem stieņiem kā IfcReinforcingBar (pamatstieņi, skavu un saišu cilpas, malu stieņi), kas tam apkopoti; katrs stienis ir disks, izvilkts pa centrālo līniju, ar patiesiem lokiem liekumos, ar savu zīmi un griešanas garumu.
