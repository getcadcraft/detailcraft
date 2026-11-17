---
title: Koka un plānsienu tērauda karkasa paneļi
summary: Veidojiet sienu, grīdu un jumta paneļus no koka vai plānsienu tērauda, ar katru detaļu, griezumu sarakstu, darbnīcas rasējumu un pērkamajiem materiāliem.
keywords: karkass, koks, kokmateriāls, plānsienu tērauds, aukstā formēšana, stenderis, grīdas sija, spāre, pārsedze, galvenais stenderis, palīgstenderis, īsais stenderis, griezumu saraksts, darbnīcas rasējums, panelis
from: 3e38ffb9
---

Cilne {{ui:Framing}} veido jūsu aprakstītos paneļus un dod to, ko prasa karkasa brigāde un kokmateriālu noliktava. Paneļi tiek saglabāti modeļa failā.

:::warning
Izmērus, soli un pārsedzes nosakāt jūs. DetailCraft nepārbauda, vai stenderis ar šādu soli nes šo sienu vai vai pārsedze pārklāj šo atvērumu: to izlemj jūsu normas tabulas un jūsu inženieris.
:::

## Paneļa pievienošana

Izvēlieties {{ui:Add a wall}}, {{ui:Add a floor}} vai {{ui:Add a roof}}, tad aizpildiet izmērus milimetros, materiālu (koks vai plānsienu tērauds) un elementa izmēru. Koka izmēri ir nominālie nosaukumi kopā ar apstrādātajiem izmēriem (2×4 ir 38 × 89 mm). Tērauda stenderi nosaukti pēc dziļuma un biezuma, piemēram, `C92-1.2`.

## Sienas

Sienai ir apakšējā plāksne, viena vai vairākas augšējās plāksnes (tērauda gadījumā viena sliede), gala stenderi, stenderi ar jūsu norādīto soli un katram atvērumam: divi galvenie stenderi, divi palīgstenderi, pārsedze ar izmēru un kārtām, ko izvēlaties, un īsie stenderi virs pārsedzes (un zem loga palodzes). Katram atvērumam norādiet attālumu no kreisā gala, tā platumu un tā rupjā atvēruma augšu un apakšu, mērot no apakšgrīdas; durvīm apakša ir 0.

## Grīdas un jumti

Grīdai ir sijas pāri tās platumam gar tās atstarpi, malas sijas abos galos un, ja atzīmējat, bloķējumi vidējā atstarpē. Jumta panelis ir frontons: spāru pāris ar jūsu norādīto soli (to garums ietver nokares izvirzījumu pa nogāzi) un kores dēlis.

## Ko jūs saņemat

Katrs panelis rāda savas detaļas uz rasējuma mērogā, ar katru detaļu atzīmētu, griezumu sarakstu pēc marķējuma un kopsummu. Tabula {{ui:Pērkamie materiāli}} ieliek visus paneļu griezumus standarta garumos — īsākajos, kas ietilpst katrā stieņa griezumā. {{ui:Saglabāt rasējumu (SVG)}} saglabā rasējumu; poga {{ui:CSV}} saglabā visus griezumu sarakstus un materiālu sarakstu.

## Paneļa novietošana modelī

Zem katra paneļa norādiet, kur tas atrodas (x, y, z milimetros un leņķis), un nospiediet {{ui:Novietot kā elementus}}: katra detaļa kļūst par modeļa elementu ar apstrādātā izmēra šķērsgriezumu un materiāla svaru (apmēram 500 kg/m³ kokam, tērauds stenderiem). Siena iet pa leņķi no savas apakšējās kreisās malas, ar apakšu z; grīdas sijas guļ ar apakšpusi z; jumta frontona skats iet pa leņķi, ar z pie sienas plākšņu augšas. Katra pārsedzes kārta ir elements, kas novietots blakus citam. Nospiežot vēlreiz, iepriekš novietotie elementi tiek aizstāti, un {{ui:Noņemt novietotos elementus}} tos izņem; katrs ir viens atsaukšanas solis. Aprēķins šos elementus izlaiž: tie nav tērauda karkasa elementi.

## PDF lapas

{{ui:PDF lapas}} saglabā vienu A3 lapu katram panelim: panelis mērogā ar katru detaļu atzīmētu, kopējie izmēri, griezumu saraksts un virsraksta josla.

{{ui:Problems}} panelī: atvērums pārāk tuvu sienas galam vai citam atvērumam, pārsedze, kas neietilpst zem augšējām plāksnēm, detaļa, kas garāka par garāko standarta garumu.

Cilnē {{ui:Problems}} ir arī **Saskarnes (LOD 350)** sienu paneļiem un betona sienām: atvērums, kas iet pāri sienas galam vai augšai, divi atvērumi, kas pārklājas, un betona sienas atvērums, kas platāks par 1000 mm bez apmales stieņa. Tie ir ieteikumi, tie paši noteikumi, ko palaiž BimCraft audits; platums ir CadCraft sākuma vērtība, nevis standarts.
