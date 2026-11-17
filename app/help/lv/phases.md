---
title: Fāzes
summary: Sadaliet modeli fāzēs (montāžas secībās vai piegādēs), rādiet vai slēpiet katru fāzi, ievietojiet detaļas fāzē un numurējiet marķējumus pa fāzēm.
keywords: fāze, fāzes, fāžu pārvaldnieks, montāžas secība, piegāde, partija, secība, slēpt fāzi, rādīt fāzi, filtrs, numurēšana, marķējuma prefikss, pa fāzēm
from: bae506f5
---

Fāze ir detaļu grupa, kas tiek izgatavota, piegādāta vai montēta kopā: montāžas secība, piegāde, partija. Katrs elements un pamats ir vienā fāzē. Savienojums ir tās galvenā elementa fāzē: sijas galu plāksnes, pamatnes plāksnes kolonnas. Jauns modelis sākas ar vienu fāzi.

## Fāžu panelis

Sadaļa {{ui:Fāzes}} paneļa {{ui:Modelis}} sarakstā ir visas fāzes:

- izvēles rūtiņa rāda vai slēpj fāzi skatā;
- numurs un nosaukums, ko var ierakstīt (tukšs = "Fāze 2" un tā tālāk);
- cik detaļu tajā ir;
- poga {{ui:×}} noņem fāzi. Noņemt var tikai tukšu fāzi: vispirms pārvietojiet tās detaļas citā fāzē.

{{ui:Pievienot fāzi}} pievieno nākamo numuru un padara to par fāzi, kurā ievietotas jaunās detaļas.

## Ievietot detaļas fāzē

- **Jaunās detaļas:** {{ui:Jaunās detaļas tiek ievietotas}} izvēlas fāzi, kurā ietilps katrs elements un pamats, ko novietosiet no šā brīža.
- **Viena detaļa:** atlasiet to un mainiet {{ui:Fāze}} panelī {{ui:Rekvizīti}}.
- **Daudzas detaļas:** atlasiet tās (logs, {{key:Shift}}+klikšķis, {{key:Mod+A}}) un mainiet {{ui:Fāze}} panelī {{ui:Rekvizīti}} augšā. Tur rādās **Dažādas**, ja tās ir dažādās fāzēs. Viena izmaiņa ir viens atsaukšanas solis.

Kopijas saglabā to fāzi, no kuras tās tika kopētas, arī tad, kad tās ielīmētas citā modelī (fāze tiek pievienota tur).

## Rādīt un slēpt fāzes

Paslēpta fāze netiek zīmēta skatā, to nevar noklikšķināt vai notvert ar atlases logu, un {{key:Mod+A}} to neiekļauj. Tā joprojām ir materiālu sarakstā, pārskatos, rasējumos un katrā eksportā. Slēpšana attiecas tikai uz skatu: tā netiek saglabāta un to nevar atsaukt.

## Marķējumi pa fāzēm

Ar ieslēgtu **Numurēt marķējumus pa fāzēm** (sākotnēji ieslēgts) un detaļām vairāk nekā vienā fāzē katra fāze tiek numurēta atsevišķi, un tās marķējumi sākas ar fāzes numuru: detaļu zīmes 1-b1, 2-b1, montāžas zīmes 2-B1, pamati 2-F1. Divas vienādas sijas dažādās fāzēs tad ir ar dažādām zīmēm, jo tās tiek izgatavotas un nosūtītas dažādos laikos. Ja lietota viena fāze, zīmēm nav prefiksa. Izslēdziet to, lai numurētu visu modeli kā vienu, tā ka identiskas detaļas dalās vienā zīmē neatkarīgi no fāzes.

Fāze tiek ierakstīta IFC eksportā (īpašumu kopa DetailCraft, Phase).

:::note
Modeļi ar fāzēm tiek saglabāti DetailCraft failu formātā 2. DetailCraft 0.3 versija tos nevar atvērt; šī versija atver vecākos failus, ar visām detaļām fāzē 1.
:::
