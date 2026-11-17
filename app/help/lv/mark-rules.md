---
title: Marķēšanas noteikumi
summary: Precīzi, kad divas detaļas vai divi mezgli dalās ar vienu zīmi, kā zīmes tiek numurētas un kā darbojas pamatu un stieņu zīmes.
keywords: zīmes, numurēšana, detaļas zīme, mezgla zīme, gabala zīme, prefikss, pielaide, identiskas detaļas, stieņu zīmes, pamatu zīmes
from: ce02c98e
---

DetailCraft pārrēķina katru zīmi pēc katras izmaiņas. Nekas netiek glabāts, tāpēc zīmes vienmēr apraksta modeli tādu, kāds tas ir tieši tagad. Par to, kā tās izmantot, skatiet [Pārbaudīt zīmes un materiālu sarakstu](topic:marks-and-bom).

## Detaļu zīmes

Divas detaļas dalās ar vienu detaļas zīmi, ja sakrīt visi šie:

1. Detaļas tips (sija, kolonna, saite vai plāksne).
2. Profila nosaukums (neatkarīgi no lielajiem un mazajiem burtiem).
3. Materiāls (neatkarīgi no lielajiem un mazajiem burtiem).
4. Griešanas garums, ar 1 mm pielaidi.
5. Katrs caurums: virsma, novietojums garenvirzienā un šķērsvirzienā ar 1 mm pielaidi, un diametrs ar 0.1 mm pielaidi.
6. Katrs izgriezums: gals, puse, garums un dziļums ar 1 mm pielaidi.

Elementa {{ui:Nosaukums}} neskaitās. Arī tā novietojums modelī, pagriezums un tas, kā tas ir zīmēts, neskaitās, ja pati detaļa ir tāda pati.

### Apgrieztas detaļas

Detaļa tiek salīdzināta visos veidos, kā to var apgriezt, lai tās šķērsgriezums pārklātos pats ar sevi. Ja kāds no tiem padara to līdzīgu citai detaļai, tās dalās ar vienu zīmi.

| Forma | Skaitītie apgriezieni |
|---|---|
| I-veida profili, taisnstūra HSS, plāksnes | No gala uz galu (ap vertikālo asi), no gala uz galu (ap horizontālo asi) un apgriezti otrādi ap savu garumu |
| Kanāli | Tikai no gala uz galu ap horizontālo asi, tātad sieniņa paliek tajā pašā pusē |
| Leņķi, apaļais HSS | Nav: salīdzina tā, kā novietots |

Tātad sija ar caurumu netālu no tās kreisā gala atbilst sijai ar tādu pašu caurumu netālu no tās labā gala, un kolonna ar caurumiem vienā flanšā atbilst kolonnai ar tādiem pašiem caurumiem otrā flanšā.

### Numurēšana

| Tips | Detaļas prefikss | Mezgla prefikss |
|---|---|---|
| Kolonna | c | C |
| Sija | b | B |
| Saite | br | BR |
| Plāksne (novietota, gala plāksne vai pamata plāksne) | p | P |

Zīmes tiek numurētas no 1 katrā prefiksā. Secība ir: kolonnas, tad sijas, saites un plāksnes; tipa ietvaros pēc profila nosaukuma dabiskā secībā (W8x10 pirms W12x26); tad vispirms garākās detaļas.

Tā kā numurēšana seko šai secībai, vienas detaļas pievienošana vai maiņa var pārbīdīt citu detaļu numurus.

## Mezglu zīmes

- Katra detaļa, kas nav metināta pie citas detaļas, ir sava mezgla galvenā detaļa.
- Gala plāksnes ir metinātas pie savas sijas, un pamata plāksnes pie savas kolonnas, tāpēc tās pieder šī elementa mezglam.
- Divi mezgli dalās ar vienu zīmi, ja to galvenajām detaļām ir viena detaļas zīme un to piestiprinātajām detaļām ir tādas pašas zīmes tajās pašās vietās (ar 1 mm pielaidi), ļaujot tos pašus apgriezienus kā galvenajai detaļai.
- Mezgla prefikss seko galvenajai detaļai: sija ar divām gala plāksnēm ir B mezgls.

Plāksnes, ko novietojat ar rīku {{ui:Plāksne}}, nav nekur metinātas, tāpēc katra ir savs P mezgls.

## Pamatu zīmes

Pamati ar vienādu garumu, platumu, dziļumu, betona aprakstu, apakšējo tīklu un sākuma stieņiem dalās ar vienu zīmi: F1, F2 … tādā secībā, kādā tie tika novietoti. Novietojums un pagriezums neskaitās.

## Stieņu zīmes

Stieņi ar vienādu izmēru, formu un izmēriem A, B un C (noapaļoti līdz milimetram) dalās ar vienu zīmi visos pamatos. Zīme ir stieņa numurs, F un skaitītājs katram stieņa izmēram: 5F1, 5F2, 6F1. Garenvirziena stienis un īsvirziena stienis kvadrātveida pamatā ir viens un tas pats stienis un dalās ar vienu zīmi; specifikācijas kolonna {{ui:Izmantots}} uzskaita abus lietojumus.
