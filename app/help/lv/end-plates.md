---
title: Sijas savienošana ar kolonnām, izmantojot galaplāksnes
summary: Pievienojiet skrūvētas galaplāksnes, kur sija satiek kolonnas atloku vai sieniņu, iestatiet plāksni, skrūves un metinājumu un kopējiet savienojumu uz katru līdzīgu mezglu.
keywords: galaplāksne, galaplāksnes, momentsavienojums, skrūvēts savienojums, mezgls, skrūves, metinājums, pagarināta galaplāksne, līdzena, līdzīgs, kopēt savienojumu, komponents
from: 21e028b2
---

Galaplāksnes savienojums pie sijas gala metina plāksni un skrūvē to pie kolonnas atloka vai sieniņas. DetailCraft novieto plāksni, apgriež sijas galu, izurbj atbilstošus caurumus plāksnē un kolonnas atlokā, pievieno skrūves un metinājumu un pārbauda malu attālumus un soļus.

:::warning
DetailCraft neprojektē savienojumus. Iestatījumi ir sākumvērtības, ko jūs mainiet; nekas nepārbauda izturību. Malu un soļu brīdinājumi izmanto EN 1993-1-8 3.3 tabulas minimālās vērtības, kas var atšķirties no noteikumiem, pēc kuriem jūs strādājat.
:::

## Ko tas var savienot

- **Līmeņa** sija (abi gali vienā augstumā), vertikāla (pagrieziens 0), ar I profilu.
- Vertikālas I profila kolonnas **atloka** vai **sieniņas**, taisni pret to.
- Sijas galam jāatrodas uz kolonnas līnijas, starp kolonnas apakšējo un augšējo malu.

Slīpas vai nogāzes sijas un ne-I šķērsgriezumi tiek noraidīti ar iemeslu: šādiem izmantojiet [bīdes cilpas](topic:shear-tabs). Uz sieniņas plāksnei un sijas atlokiem jāietilpst starp kolonnas atlokiem; DetailCraft brīdina, ja tie neietilpst.

:::tip
Pie pagrieziena 0 kolonnas atloki vērsti pa numurēto režģa virzienu (x). Sija, kas iet no A uz B, satiek sieniņu un saņem galaplāksni uz sieniņas.
:::

## Pievienot galaplāksnes sijai

1. Izvēlieties {{ui:Atlasīt}} ({{key:V}}) un noklikšķiniet uz sijas.
2. Izvēlieties {{ui:Galaplāksnes}} grupā {{ui:Savienot}} vai {{ui:Pievienot galaplāksnes}} panelī {{ui:Rekvizīti}}.
3. Katrs sijas brīvais gals, kas taisni satiek kolonnas atloku vai sieniņu, saņem plāksni. Statusa joslā rakstīts: "2 galaplāksnes pievienotas. Atlasiet vienu, lai mainītu tās plāksni, skrūves un metinājumu; Līdzīgs kopē to līdzīgiem savienojumiem."
4. Pirmā jaunā galaplāksne tiek atlasīta, un tās iestatījumi ir panelī {{ui:Rekvizīti}}.

Ja nekas nenotiek, izlasiet statusa joslu:

- "Šī sija nebeidzas uz kolonnas līnijas. Galaplāksnes tiek novietotas tur, kur sijas gals satiek vertikālu kolonnu."
- "Šī sija satiek kolonnu leņķī vai ir slīpa: galaplāksnes tiek veidotas taisniem, līmeņa mezgliem. Izmantojiet Bīdes cilpas."
- "Abiem galiem jau ir savienojumi."

## Mainīt plāksni, skrūves un metinājumu

Noklikšķiniet uz galaplāksnes (vai uz vienas no tās skrūvēm), lai atlasītu savienojumu. Zem {{ui:Plāksne, skrūves un metinājums (mm)}}:

| Iestatījums | Noklusējums | Ko tas dara |
|---|---|---|
| Plāksnes biezums | 20 | Plāksnes biezums; arī cik tālu sija tiek apgriezta aiz atloka |
| Plāksnes platums | 180 | Pāri savienojumam |
| Paplašinājums virs sijas | 0 | Virs augšējā atloka; virs 0 padara pagarinātu galaplāksni |
| Paplašinājums zem sijas | 0 | Zem apakšējā atloka |
| Skrūves diametrs | 20 | Nominālais skrūves izmērs |
| Cauruma diametrs | 22 | Jūsu brīvais caurums plāksnē un kolonnas atlokā |
| Skrūves klase | A325 | Teksts; tiek drukāts materiālu sarakstā |
| Skrūvju rindas | 4 | Divu skrūvju rindas, centrētas pēc plāksnes augstuma |
| Rindu solis | 75 | Vertikālais attālums starp rindām |
| Atstarpe | 100 | Horizontālais attālums starp divām skrūvēm vienā rindā |
| Skrūves garuma pielaide | 30 | Pievienota satveršanai, uzgrieznim, paplātei un vītnei; skatiet tālāk |
| Stūra metinājuma izmērs | 8 | Visapkārt sijas galam |
| Plāksnes materiāls | A36 | Teksts |

Ievadiet jaunu vērtību un nospiediet {{key:Enter}} vai {{key:Tab}}. Plāksne, caurumi, skrūves un sijas griezuma garums uzreiz atjaunojas. Katra izmaiņa ir viens atsaukšanas solis.

Zem iestatījumiem redzams, ko savienojums veido:

- {{ui:Skrūves}}: piemēram, "8 × 20 × 70 A325 (satveršana 36.2)".
- {{ui:Metinājums}}: izmērs, vieta un garums.
- {{ui:Plāksne}}: tās izmērs un detaļas marķējums.

### Kā tiek aprēķināti skaitļi

- Sija tiek apgriezta par pusi no kolonnas dziļuma (sieniņai: par pusi no sieniņas biezuma) plus plāksnes biezums, lai plāksne atrastos uz sejas.
- Plāksnes augstums ir sijas dziļums plus abi paplašinājumi.
- Skrūves garums = satveršana (plāksnes biezums + kolonnas atloka vai sieniņas biezums) + pielaide, noapaļota uz augšu līdz nākamajiem 5 mm.
- Parādītais metinājuma garums ir sijas šķērsgriezuma perimetrs.

### Brīdinājumi

Savienojums tomēr tiek veidots, bet zem tā un cilnē {{ui:Problēmas}} parādās:

- Skrūvju rindas vai skrūves tuvāk plāksnes malai nekā 1.2 × cauruma diametrs.
- Rindu solis mazāks par 2.2 × cauruma diametru vai atstarpe mazāka par 2.4 × cauruma diametru.
- Caurumi, kas iet kolonnas sieniņā vai tās noapaļojumā, vai ārpus kolonnas atloka.
- Plāksne platāka par kolonnas atloku vai (uz sieniņas) platāka par atstarpi starp atlokiem; sijas atloki, kas neietilpst starp tiem.
- Skrūvju rinda pārāk tuvu sijas atlokam vai atstarpe pārāk šaura sijas sieniņai un tās metinājumam.

## Kopējiet uz katru līdzīgu mezglu

1. Atlasiet savienojumu, ko esat iestatījis.
2. Izvēlieties {{ui:Piemērot līdzīgiem (n)}} panelī {{ui:Rekvizīti}} vai {{ui:Līdzīgs}} grupas {{ui:Savienot}} izvēlnē {{ui:Vairāk}}. Skaitlis iekavās ir tas, cik mezgliem tas tiks piemērots.
3. Katrs mezgls ar tādu pašu sijas profilu un kolonnas profilu, kur sija pieslēgta tādai pašai virsmai un kuram vēl nav savienojuma, saņem kopiju ar tādiem pašiem iestatījumiem. Statusa joslā norādīts, cik.

Kopijas ir neatkarīgas: vēlāk mainot vienu, pārējās nemainās. Mezgli, kam jau ir savienojums, paliek nemainīti; vispirms izdzēsiet tos, ja vēlaties tos aizstāt.

## Pārvietošana un dzēšana

Savienojumi tiek pārveidoti no saviem iestatījumiem katru reizi, kad modelis mainās, tāpēc sijas vai kolonnas pārvietošana vai izmēra maiņa pārvieto arī tās galaplāksnes. Ja izmaiņa padara mezglu neatbilstošu, savienojums paliek modelī un cilne {{ui:Problēmas}} pasaka iemeslu, piemēram, "Sijas gals vairs neatrodas uz kolonnas līnijas."

Lai izdzēstu savienojumu, atlasiet to un nospiediet {{key:Delete}}. Sijas vai kolonnas dzēšana dzēš arī tās savienojumus.

Tālāk: [Pievienot pamatnes un enkurstieņus](topic:base-plates).
