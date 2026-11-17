---
title: Pārbaudīt marķējumus un materiālu sarakstu
summary: Izlasīt katrai detaļai un mezglam doto detaļas vai mezgla marķējumu, pārbaudīt materiālu sarakstu un lejupielādēt to kā CSV.
keywords: marķējumi, numerācija, detaļu marķējums, mezglu marķējums, bom, materiālu saraksts, svari, skrūvju saraksts, csv
from: caa2ee80
---

DetailCraft pats marķē modeli. Numerācijas komandas nav, un nekas nav jāpalaiž: pēc katras izmaiņas tas nosaka, kuras detaļas ir viens un tas pats tērauda gabals, un tām piešķir vienu marķējumu.

## Kur redzami marķējumi

- Saraksts {{ui:Detaļu marķējumi}} panelī {{ui:Modelis}}: katrs marķējums ar savu profilu, garumu un skaitu. Noklikšķiniet uz viena, lai atlasītu pirmo detaļu ar šo marķējumu.
- Atlasītā elementa panelis {{ui:Rekvizīti}} (un **Detaļu marķējumi** saraksts kreisajā panelī): {{ui:Detaļas zīme}} un {{ui:Mezgls}}. Paneļa virsrakstā ir arī marķējums, piemēram, "Sija b1".
- Cilne {{ui:Materiālu saraksts}}, CSV, NC failu nosaukumi, darbnīcas rasējumi un IFC eksports (kā katra elementa birka).

## Kā detaļas tiek marķētas

- **Detaļu marķējumi:** c kolonnām, b sijām, br saitēm, st kāpņu sānsijām, p plāksnēm (tostarp galaplāksnēm un balstplāksnēm). Pēc tam numurs: c1, c2, b1, p1 … Ja detaļas atrodas vairākās fāzēs, fāzes numurs ir pirmais, piemēram, 2-b1.
- **Mezglu marķējumi:** C, B, BR vai P. Mezgls ir galvenais elements un tam metinātās plāksnes, piemēram, sija ar abām galaplāksnēm vai kolonna ar balstplāksni.
- Divām detaļām ir vienāds marķējums, ja tām ir tāds pats profils, materiāls un griešanas garums, kā arī tādi paši caurumi un izgriezumi, visi līdz 1 mm precizitātē, pat ja viena ir pagriezta galu galā vai otrādi attiecībā pret otru.
- Numerācija sākas ar kolonnām, tad sijām, saitēm un plāksnēm; katrā grupā – pēc profila nosaukuma, tad garākās pirmās.

Pilni noteikumi, tostarp, kuri pagriezieni skaitās kanāliem un leņķiem: [Marķējuma noteikumi](topic:mark-rules).

:::warning
Marķējumi tiek pārrēķināti pēc katras izmaiņas, tāpēc tie var tikt pārnumurēti. Detaļas pievienošana, profila maiņa vai cauruma pievienošana var pārvietot b3 uz b4. Uzskatiet marķējumus par galīgiem tikai tad, kad modelis ir pabeigts, un izveidojiet materiālu sarakstu, NC failus un darbnīcas rasējumus no tā paša saglabātā modeļa.
:::

## Materiālu saraksta lasīšana

Atveriet cilni {{ui:Materiālu saraksts}} apakšā. Tajā ir trīs tabulas.

**Detaļas**, virsrakstā ar kopējo tērauda svaru:

| Kolonna | Nozīme |
|---|---|
| Detaļas zīme | Noklikšķiniet, lai atlasītu pirmo detaļu ar šo marķējumu |
| Tips | sija, kolonna, saite, sānsija vai plāksne |
| Profils | Piemēram, W16x26 vai PL20x180 |
| Materiāls | Jūsu iestatītā klase |
| Garums (mm) | Griešanas garums pēc savienojumiem |
| Skaits | Cik |
| Vienības svars (kg) | Profila masa uz metru × garums |
| Kopējais svars (kg) | Vienības svars × skaits |

Pēdējā rindā ir kopējais skaits un svars.

**Mezgli:** katrs mezgla marķējums, tā galvenā detaļa, visas tā detaļas (piemēram, "b1 + p1 + p1"), skaits, vienības svars un kopējais svars.

**Skrūves un enkurstieņi:** grupēti pēc veida, diametra, garuma un klases, ar skaitu.

:::note
Svari ir bruto: caurumi un izgriezumi nav atskaitīti. Skrūves, uzgriežņi, paplāksnes un metinājumi tērauda svarā nav iekļauti.
:::

## Lejupielāde

Izvēlieties {{ui:Lejupielādēt CSV}} cilnē vai {{ui:BOM}} grupā {{ui:Izvade}}. Fails `<name> BOM.csv` satur trīs tabulas vienu aiz otras, katru zem sava virsraksta, starp tām tukša rindiņa. To var atvērt jebkurā izklājlapu programmā.

## Pārbaudiet pirms sūtīšanas

1. Atveriet cilni {{ui:Problēmas}} un notīriet katru rindu. Savienojums, ko nevarēja izveidot, nepievieno plāksni, caurumus vai skrūves, tāpēc materiālu saraksts būtu nepilnīgs.
2. Meklējiet marķējumus, kurus neesat gaidījis. Divas sijas, kuras uzskatāt par vienādām, bet ar dažādiem marķējumiem, parasti atšķiras ar caurumu, izgriezumu vai griešanas garumu; atlasiet katru un salīdziniet.
3. Saglabājiet modeli un pēc tam veiciet visus eksportus no šī saglabātā stāvokļa.
