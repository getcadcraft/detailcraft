---
title: Montāžas plāns un filma
summary: Ievadiet celtni un tās kravas diagrammu, redziet katru pacelšanu, pārbaudītu pret diagrammu fāzu secībā, un saglabājiet montāžas filmu, kas bezsaistē atskaņojas jebkurā tālrunī.
keywords: montāža, celtnis, pacelšana, kravas diagramma, rādiuss, kapacitāte, stropošana, secība, filma, animācija, tālrunis, bezsaistē, pacelšanas plāns
from: fa7b0133
---

Cilne {{ui:Montāža}} pārvērš modeli par montāžas pasūtījumu un pārbauda katru pacelšanu pret celtni, ko jūs aprakstāt. Tā plāno pēc skaitļiem, ko ierakstāt. Tas nav pacelšanas plāns: to izstrādā stropotājs un celtņa operators.

## Aprakstiet celtni

Izvēlieties {{ui:Pievienot celtni}} un aizpildiet:

- **Celtņa centrs X un Y:** kur celtnis stāv, milimetros.
- **Augstākais āķis:** cik augstu āķis var pacelties, milimetros. 0 nozīmē, ka ierobežojums netiek pārbaudīts.
- **Āķa bloks un stropošana, kas nav diagrammā:** kilogrami, kas tiek atņemti no diagrammas, pirms tiek pievienota krava, ja jūsu diagramma to jau nedara.
- **Kravas diagramma:** viena rinda vienā līnijā; rādiuss metros un tad kapacitāte kilogramos. Kopējiet rindas no celtņa pašas diagrammas.

Diagramma tiek lasīta tā, kā lasa kravas diagrammu: rādiusam uzskaitītā kapacitāte attiecas līdz šim rādiusam. Krava starp divām rindām rādiusā saņem **tālākās** rindas kapacitāti, nekad starpvērtību. Pirmās rindas iekšienē spēkā paliek pirmās rindas kapacitāte. Aiz pēdējās rindas celtnis nevar pacelt vispār. Pacelšanai svarīgais rādiuss ir lielākais no paņemšanas rādiusa un novietošanas rādiusa.

Otrs celtnis tiek pievienots tādā pašā veidā. Katra pacelšana tiek nodota pirmajam celtnim, kas to var paņemt jūsu robežās.

## Ko dara plāns

- Viena pacelšana katrai montāžai: sija ar tās galaplāksnēm, kolonna ar tās bāzes plāksni, kāpnes.
- Secība seko fāzēm vispirms, tad pa līmeņiem: kolonnas, sijas, ko tās nes, sastiprinājumi, plāksnes, kāpnes. Detaļa nekad netiek pacelta pirms tā, kas to nes.
- Katra pacelšana rāda savu svaru (modeļa bruto svars, plus {{ui:Stropošana, pievienota katram svaram}}), savu rādiusu, daļu no diagrammas, ko tā izmanto, un minūti, kad tā sākas.
- {{ui:Lielākā atļautā diagrammas daļa pacelšanai}} ir jūsu drošības rezerve. Pacelšana virs tās ir atzīmēta kā **Virs jūsu rezerves**; virs diagrammas — **Virs diagrammas**; aiz diagrammas pēdējā rādiusa — **Aiz diagrammas**; un detaļa augstāk par āķi — **Āķis pārāk zems**.

Caurumi un izgriezumi netiek atskaitīti no svariem, un skrūves ir iekļautas stropošanas procentā.

## Problēmas

Katra pacelšana, kas ir virs, aiz, pārāk augsta vai notiek pirms tās, ko nes, parādās panelī {{ui:Problēmas}}. Sija bez savienojuma, kas to nes, tiek uzskaitīta kā tāda, kam nepieciešams pagaidu balsts.

## Saglabājiet filmu

{{ui:Saglabāt filmu}} saraksta vienu HTML failu. Atveriet to jebkurā pārlūkprogrammā, arī tālrunī, bez tīkla un konta: atskaņojiet un pauzējiet, velciet joslu līdz jebkurai minūtei, pagrieziet modeli ar pirkstu, izmantojiet izspiešanas žestu, lai tuvinātu. Paraksts nosauc katru pacelšanu, tās svaru, rādiusu un daļu no diagrammas. Modelis ir zīmēts kā vienkārši kubi: tas parāda secību un pacelšanas, nevis patiesos profilus.

Tā pati tabula tiek saglabāta kā CSV ar pogu {{ui:CSV}}. Celtnis un diagramma tiek saglabāti modeļa failā, un katra izmaiņa ir viens atsaukšanas solis.
