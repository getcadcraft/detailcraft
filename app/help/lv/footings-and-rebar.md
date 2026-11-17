---
title: Pamatu ievietošana ar armatūru
summary: Ievietojiet taisnstūra plākšņveida pamatus ar apakšējo tīklu un izvirzītajiem stieņiem, pārbaudiet tos un lejupielādējiet liekšanas specifikāciju.
keywords: pamats, plākšņveida pamats, armatūra, stieņi, tīkls, izvirzītie stieņi, sakabes stieņi, liekšanas specifikācija, stieņu saraksts, betons, āķi, aizsargslānis
from: 41a048be
---

Šī tēma attiecas uz taisnstūra plākšņveida pamatiem. Sijas, kolonnas, pārsegumi un sienas ir aprakstīti sadaļā [Detalizēta dzelzsbetona konstrukcija](topic:reinforced-concrete). Katram pamatam ir apakšējais tīkls abos virzienos un, ja vēlaties, izvirzītie stieņi, kas no tā paceļas uz augšu. Stieņi ir ASV izmēri no #3 līdz #11.

## Pamata ievietošana

1. Izvēlieties {{ui:Plan}} un atlasiet pamata augšējās malas līmeni.
2. Izvēlieties {{ui:Footing}} grupā {{ui:Place}} vai nospiediet {{key:F}}.
3. Iestatiet pamatu panelī {{ui:Properties}} (skatiet zemāk) vai atstājiet noklusējumus.
4. Noklikšķiniet uz režģa krustpunkta. Pamats tiek centrēts uz tā, un tā augša ir līmenī. Statusa joslā parādās, piemēram, "Pamats 2000 x 2000 x 600 zem A/1."

Varat arī izmantot formu {{ui:Add by grid}} paneļa apakšā.

Pamats ir attēlots caurspīdīgs, lai redzētu tā stieņus, kas attēloti kā cietas caurules.

## Pamata iestatījumi

| Lauks | Noklusējums | Piezīmes |
|---|---|---|
| Garums L (mm) | 2000 | Pa x; no 300 līdz 50000 |
| Platums B (mm) | 2000 | Pa y; no 300 līdz 50000 |
| Dziļums H (mm) | 600 | No 150 līdz 10000 |
| Betons | 4000 psi | Teksts, tiek drukāts IFC eksportā |

**Apakšējais tīkls**

| Lauks | Noklusējums | Piezīmes |
|---|---|---|
| Gareniskie stieņi | #5 | Stieņi gar L, apakšējais slānis |
| Solis (mm) | 250 | Lielākais pieļaujamais solis; stieņi izvietoti vienmērīgi ar šo soli vai mazāku |
| Šķērsstieņi | #5 | Stieņi gar B, novietoti uz gareniskajiem stieņiem |
| Solis (mm) | 250 | Kā iepriekš |
| Aizsargslānis (mm) | 75 | Brīvs aizsargslānis katrā virsmā |
| Gala āķi | Ieslēgts | Pagriež abus katra tīkla stieņa galus uz augšu standarta 90° āķī (forma U); izslēgts dod taisnus stieņus (forma S) |

**Izvirzītie stieņi**

| Lauks | Noklusējums | Piezīmes |
|---|---|---|
| Izvirzītie stieņi | Ieslēgts | Izslēdziet pamatam bez izvirzītajiem stieņiem |
| Stienis | #6 | |
| Stieņi gar L / Stieņi gar B | 2 / 2 | Stieņu režģis, centrēts uz pamata |
| Solis gar L / Solis gar B | 250 / 250 | Starp stieņu centriem |
| Izvirzījums virs augšas | 600 | Cik augstu stieņi paceļas virs pamata augšas |
| Āķis apakšā | Ieslēgts | 90° āķis, kas vērsts uz āru un balstās uz tīkla (forma L) |

Zem laukiem DetailCraft parāda āķa kāju gareniskajiem stieņiem, piemēram, "Āķa kāja #5: 254 mm no ārpuses līdz ārpusei."

## Ievietota pamata maiņa

Atlasiet pamatu (noklikšķiniet uz tā betona vietās, kas nav blakus kolonnai, vai uz viena no tā stieņiem). Jūs saņemat tos pašus laukus plus {{ui:Center x}}, {{ui:Center y}}, {{ui:Top z}} un {{ui:Rotation (°)}}. Zem tiem tabulā uzskaitīti šī pamata stieņi ar to marķējumiem, skaitu un garumiem, kā arī betona tilpums kubikmetros.

Katra izmaiņa tiek pārbaudīta pirms saglabāšanas. Izmaiņa, ko nevar izveidot, tiek noraidīta, un statusa joslā norādīts iemesls, piemēram, "Aizsargslānis neatstāj vietu stieņiem šajā pamatā.", "Pamats ir pārāk plāns divu stieņu slāņiem aizsargslānī." vai "Izvirzītie stieņi neiekļaujas pamatā ar 75 mm aizsargslāni."

Izmaiņas, ko var izveidot, bet kas prasa pārbaudi, ir uzskaitītas zem pamata un cilnē {{ui:Problems}}:

- "#11 stieņi ar 59.6 mm soli atstāj mazāk par 35.8 mm brīvas vietas (ACI 318-19 25.2.1)." Brīvajam attālumam starp stieņiem jābūt vismaz stieņa diametram un vismaz 25.4 mm.
- "#5 āķiem vajag 254 mm dziļuma; aizsargslānī iekļaujas tikai 150 mm." Āķu kājas tad tiek saīsinātas, lai iekļautos, tāpēc tie vairs nav standarta āķi.
- "Izvirzīto stieņu āķi sniedzas aizsargslānī."
- "Izvirzītie stieņi ir tuvāk par minimālo brīvo soli."

## Stieņu marķējumi un liekšanas specifikācija

Identiskiem stieņiem (tāds pats izmērs, forma un izmēri līdz milimetram) visos pamatos ir kopīgs viens stieņa marķējums. Marķējumi tiek rakstīti kā `<stieņa numurs>F<n>`: 5F1, 5F2 #5 stieņiem, 6F1 pirmajam #6 stienim un tā tālāk. Pamati ar vienādu izmēru, betonu, tīklu un izvirzītajiem stieņiem kopīgi lieto pamata marķējumu: F1, F2 …

1. Atveriet cilni {{ui:Bending schedule}} apakšā. Katra rinda ir viens stieņa marķējums: izmērs, forma, izmēri A, B un C, skaits, griezuma garums, kopējais garums, masa uz metru, svars katram, kopējais svars un kam stienis tiek lietots.
2. Izvēlieties {{ui:Download CSV}} cilnē vai {{ui:Bending}} grupas {{ui:Output}} izvēlnē {{ui:More}}, lai saņemtu failu `<name> bending schedule.csv`.

Formas ir DetailCraft savi kodi, nevis kāda standarta: S taisns, L viens līkums, U divi līkumi. Izmēri ir ārējie, no ārpuses līdz ārpusei; griezuma garums ir precīzs centrālās līnijas garums caur līkumiem. Skatiet [Armatūras uzziņa](topic:rebar-reference).

## Ko DetailCraft nepārbauda

- Attīstības un pārlaidumu garumus un to, vai izvirzītie stieņi ir pietiekami gari kolonnai virs tiem.
- Agregāta izmēra daļu brīvā soļa noteikumā (programma nezina maisījumu).
- Visu par kolonnu vai balstplāksni virs tiem: pamati un tērauds ir atsevišķi.

Skatiet arī [Kas vēl nav izveidots](topic:not-built-yet).
