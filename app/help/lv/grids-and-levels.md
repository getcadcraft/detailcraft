---
title: Režģu un līmeņu iestatīšana
summary: Ierakstiet režģa līnijas, to soļus un līmeņus, uz kuriem tiek novietots katrs elements.
keywords: režģis, režģi, asis, režģa līnijas, līmeņi, augstumi, stāvi, grīdas, solis, iestatīšana
from: 9cad233c
---

Katrs DetailCraft elements tiek novietots režģa krustpunktā noteiktā līmenī. Vispirms iestatiet režģus un līmeņus; vēlāk tos varat mainīt.

## Kā šeit darbojas režģi

- **Numurētas līnijas** iet vienā virzienā, **burtiem apzīmētas līnijas** otrā. Nosaukumi ir tikai paradums: etiķete var būt jebkurš teksts līdz 8 rakstzīmēm (1, 2, 3 vai A1, A2, vai 10, 20).
- Jūs ierakstāt etiķetes un soļus starp tām, nevis koordinātes. Katras kopas pirmā līnija ir 0.
- Numurētas līnijas ir nemainīga x līnijas; burtiem apzīmētas līnijas ir nemainīga y līnijas. Tātad sija no 1 līdz 2 iet pa x, un sija no A līdz B iet pa y.
- Visas vērtības ir milimetros.

Jauns modelis sākas ar numurētām līnijām 1 2 3 pie 6000 6000, burtiem apzīmētām līnijām A B pie 6000 un diviem līmeņiem.

## Režģu iestatīšana

1. Modeļa panelī pa kreisi atveriet {{ui:Grids}}, ja tas ir salocīts.
2. Laukā {{ui:Numbered lines}} ierakstiet etiķetes, atdalītas ar atstarpēm, piemēram, `1 2 3 4 5`.
3. Laukā {{ui:Spacings}} zemāk ierakstiet vienu soli katram intervālam, piemēram, `6000 6000 7500 6000`. Četri intervāli pieciem līnijām.
4. Tāpat darbojieties ar {{ui:Lettered lines}} un tā {{ui:Spacings}}, piemēram, `A B C` un `8000 8000`.
5. Izvēlieties {{ui:Apply grids}}.

Statusa joslā parādās "Režģi atjaunināti." un skats pietuvinās jaunajam režģim. Komats darbojas arī kā atdalītājs.

Ja kaut kas nesakrīt, nekas nemainās, un statusa joslā norādīts iemesls, piemēram, "Numurētie režģi: norādiet vienu soli starp katru līniju pāri (4)." Citas pārbaudes: soļiem jābūt pozitīviem milimetriem, etiķetēm jāatšķiras un katrā virzienā var būt ne vairāk kā 60 līnijas.

:::note
Elementi saglabā savas koordinātes, kad režģi pārvietojas. Ja pēc tērauda novietošanas mainīsiet soli, tērauds paliek savā vietā un vairs nav uz režģa. Vispirms mainiet režģi vai pārvietojiet elementus, rediģējot to galu koordinātes.
:::

## Līmeņu iestatīšana

1. Modeļa panelī {{ui:Model}} atveriet {{ui:Levels}}.
2. Katrā rindā ir līmeņa nosaukums un tā augstums milimetros. Rediģējiet tos pēc vajadzības.
3. Izvēlieties {{ui:Add level}} citai rindai. Tā tiek nosaukta "Līmenis 3" (un tā tālāk) un novietota 4000 mm virs augstākā līmeņa; mainiet abus, ja vajag.
4. Lai noņemtu līmeni, izvēlieties × pogu rindas beigās.
5. Izvēlieties {{ui:Apply levels}}.

Nekas nemainās, līdz izvēlaties {{ui:Apply levels}}. Līmeņi tiek kārtoti pēc augstuma, kad tie tiek piemēroti. Katram līmenim jābūt nosaukumam, diviem līmeņiem nevar būt viens nosaukums, un jāpaliek vismaz vienam līmenim.

Līmeņi var būt zem nulles (pagrabs pie `-3500`) un nav jābūt vienādi izvietoti.

## Kā līmeņi tiek izmantoti

- Kolonna, kas novietota līmenī, iet līdz nākamajam līmenim vai līdz tam, ko izvēlaties laukā {{ui:Up to}}.
- Sijas un plāksnes tiek novietotas starp diviem krustpunktiem līmenī, uz kura noklikšķināt.
- Pamati tiek novietoti ar augšu līmenī, uz kura noklikšķināt.
- {{ui:Plan}} skatās uz vienu līmeni vienlaikus.
- IFC eksports izveido vienu ēkas stāvu katram līmenim.

## Atsaukt

Režģu un līmeņu izmaiņas ir rediģēšana kā jebkura cita: {{key:Mod+Z}} atjauno iepriekšējo režģi.

## Tālāk

[Novietot kolonnas, sijas un saites](topic:place-members)
