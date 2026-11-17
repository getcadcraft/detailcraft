---
title: Eksportēt IFC koordinācijai
summary: Pierakstīt visa modeļa IFC4 failu, tostarp tēraudu, skrūves, pamatus un armatūru, kopīgošanai ar arhitektiem, inženieriem un citu programmatūru.
keywords: ifc, ifc4, ifc2x3, bim, eksportēt, importēt, importēt ifc, caurumi, skrūves, brīvās skrūves, atvērumi, savienotāji, koordinācija, modeļa apmaiņa, step, openbim, sadursme, skatītājs
from: cfcb0cd6
---

IFC eksportēšana pieraksta visu modeli kā vienu IFC4 failu, ko var atvērt BIM programmatūra un IFC skatītāji.

## Eksportēšana

1. Izvēlieties {{ui:IFC}} grupā {{ui:Izvade}}.
2. Pārlūkprogramma lejupielādē `<name>.ifc`. Statusa joslā rakstīts, kas iekļauts, piemēram: "IFC4 eksportēts: 25 detaļas, 88 savienotāji, 7 pamati, 132 stieņi."

Ja modelī nav detaļu, pamatu vai stieņu, statusa joslā rakstīts: "Vēl nav ko eksportēt."

## Kas ir failā

| DetailCraft | IFC failā |
|---|---|
| Katrs līmenis | Ēkas stāvs (IfcBuildingStorey), zem viena projekta, zemesgabala un ēkas |
| Režģi | IfcGrid ar asīm un nosaukumiem |
| Kolonnas, sijas, saites | IfcColumn, IfcBeam, IfcMember (saite), katrs kā standarta profila formas ekstrūzija ar tiem pašiem izmēriem |
| Plāksnes, galaplāksnes, balstplāksnes | IfcPlate |
| Caurumi un izgriezumi | Atvērumi (IfcOpeningElement), izgriezti no detaļas |
| Elements un tā metinātās plāksnes | Mezgls (IfcElementAssembly) ar mezgla marķējumu |
| Skrūves un enkurstieņi | IfcMechanicalFastener ar diametru un garumu |
| Pamati | IfcFooting (plātnes pamats), ar betona tekstu kā materiālu |
| Katrs armatūras stienis | IfcReinforcingBar ar stieņa marķējumu, diametru, laukumu un garumu, izvilkts pa patieso centra līniju ar īstiem lokiem līkumos |

Katras detaļas birka ir tās detaļas marķējums. Katram elementam ir arī rekvizītu kopa "DetailCraft" ar tā marķējumiem, profilu un svaru. Katrs elements atrodas augstākajā stāvā, kas atrodas tā zemākajam punktam vai zemāk par to. Materiāli grupēti pēc klases.

## Pastāvīgi ID atkārtotai eksportēšanai

Katra elementa IFC ID (GlobalId) tiek aprēķināts no modeļa nosaukuma un paša elementa ID modelī. Ja vienu un to pašu modeli eksportē divreiz, ID sakrīt, tāpēc programmatūra, kas salīdzina versijas, var redzēt, kas mainījies.

:::warning
Modeļa pārdēvēšana maina visus ID. Starp projekta izdevumiem saglabājiet vienādu modeļa nosaukumu.
:::

## Pārbaudiet

DetailCraft IFC failus pārbauda ar neatkarīgu IFC lasītāju savā testu komplektā. Programmas IFC nolasa dažādi, tāpēc pirms paļaušanās atveriet failu programmatūrā, ko izmanto jūsu komanda. Arī CadCraft lietotne BimCraft atver IFC failus.

## Vēl nav

- Savienojumu, pamatu un armatūras ielasīšana no IFC faila. {{ui:Importēt IFC}} ielasa sijas, kolonnas, elementus, plāksnes, režģus, līmeņus, caurumus, izgriezumus un skrūves un uzskaita to, ko izlaida.
- Analītiskie vai konstrukciju aprēķinu dati.
- Viss, kas nav IFC4 atsauces skats.

## Importēšana

{{ui:Importēt IFC}} grupā {{ui:Fails}} (vai velkot `.ifc` failu uz skata) izveido jaunu modeli no IFC2X3 vai IFC4 faila:

- **Sijas, kolonnas, elementi (saites) un plāksnes**, kuru korpuss ir viens ekstrudēts DetailCraft pazīstams profils, saskaņots ar katalogu vai saglabāts kā pielāgots profils; **režģi** un **līmeņi** no faila režģa un stāviem.
- **Caurumi:** katrs apaļais atvērums (IfcOpeningElement, kas izdobj ienākošo detaļu), taisns pret vienu no detaļas virsmām: I-veida profila vai kanāla sienas vai flanši, caurules sienas, plāksne, leņķa malas. Caurums caur abām caurules sienām tiek ielasīts vienreiz.
- **Izgriezumi:** taisnstūrveida atvērums, kas aizņem I-veida profila vai kanāla pilno platumu no viena gala, lejup no augšas vai augšup no apakšas.
- **Skrūves:** katrs IfcMechanicalFastener vai IfcFastener ar tā diametru, garumu, klasi un veidu (skrūve vai enkurstienis) kā **brīva skrūve**. Brīvās skrūves redzamas skatā, materiālu sarakstā un IFC eksportā un paliek savā vietā, kad pārvietojat elementus. Panelis {{ui:Rekvizīti}}, kad nekas nav atlasīts, tās saskaita un piedāvā {{ui:Noņemt brīvās skrūves}}, ja savienojumus pievienojat tā vietā.

Pārskatā viss pārējais uzskaitīts pēc klases ar iemeslu, kāpēc tas izlaists: sienas un pārsegi, pamati un stieņi, iegarenie caurumi, caurumi apaļās caurulēs, savienojumi (IFC failā ir to plāksnes un skrūves, bet nav noteikuma, kas tos izveidoja).
