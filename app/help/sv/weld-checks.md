---
title: Kontrollera svetsarna där stänger möts
summary: Efter dimensioneringskontrollen, testa käl- och stumsvetsarna runt varje stång där den möter en annan stång eller ett stöd, enligt AISC 360-16 kapitel J eller EN 1993-1-8, och se vilken svetsgrupp som är mest utnyttjad och under vilken kombination. Ett hjälpmedel tills en ingenjör har granskat det.
keywords: svets, svetsar, svetskontroll, kälsvets, stumsvets, fullgenomsvetsning, AISC 360, EN 1993-1-8, svetsgrupp, utnyttjande, kapacitet, led, förband, konstruktion, ingenjör
from: e8eebbe6
---

Blocket {{ui:Svetskontroller}} på fliken {{ui:Analys}}, under {{ui:Dimensioneringskontroller}}, tar krafterna från den senast lösta ramen och kombinationerna för hållfasthet som du skapat, och testar svetsen runt varje stång i varje knut: där en stång möter en annan stång, eller står på ett stöd.

:::warning
Det är ett **hjälpmedel tills en ingenjör har granskat det**. Det kontrollerar en svets som är ritad runt hela tvärsnittet, som en grupp, utifrån ramens egna ändkrafter. Det läser inte storleken eller längden på de svetsar du ritat i verkstadsritningarna, och det kontrollerar inte bultar, plåtar, bärighet, blockskjuvning eller hävning. Dess resultat är inte en godkännandestämpel.
:::

## Kör den

1. Lös ramen på fliken {{ui:Analys}} och välj en {{ui:Dimensioneringsnorm}} under {{ui:Dimensioneringskontroller}}, tryck sedan på {{ui:Skapa kombinationer}} (svetskontrollen behöver samma hållfasthetskombinationer).
2. I {{ui:Svetskontroller}}, ange {{ui:Kälsvetsben (mm, 0 = väggen, högst 8)}}. 0 innebär att benet följer den tunnare väggen i tvärsnittet, upp till 8 mm. Under AISC-normen är {{ui:Svetsmetallens hållfasthet F_EXX (MPa)}} svetsmetallens hållfasthet (482,6 MPa är en E70-elektrod). Under EN 1993 ger stålkvaliteten svetsmetallens hållfasthet och korrelationsfaktorn.
3. Tryck på {{ui:Kontrollera svetsar}}.

Varje rad i tabellen är en svetsgrupp (en stångs ände i en knut). Siffrorna: **utnyttjandet** för dess styrande kontroll, status (godkänd eller underkänd), och vilken kontroll och punkt som styrde under vilken kombination. En grupp som kontrollen inte kan bedöma anger varför (ingen stålkvalitet, ingen korrelationsfaktor för kvaliteten i EN 1993-1-8 tabell 4.1, ingen svets på det tvärsnittet) i stället för att visa ett tal.

Ändrar du benet eller svetsmetallen, eller redigerar modellen, rensas tabellen: den gällde de gamla värdena. Tryck på {{ui:Kontrollera svetsar}} igen.

## Vad som kontrolleras

- **ASCE 7 + AISC 360:** svetsmetall för kälsvetsar (lastens vinkel mot svetsen räknas, J2.4), brott i grundmaterialets skjuvning (J4.2) och fullgenomsvetsade stumsvetsar (tabell J2.5).
- **EN 1990 + EN 1993:** kälsvetsar enligt den förenklade metoden i EN 1993-1-8 4.5.3.3 och stumsvetsar från 4.7.1.
- Varningar för detaljering mot minsta och största ben och minsta längd, med värdet de jämfördes med.

Svetsgruppen behandlas som ett linjärt snitt och belastas med den elastiska vektormetoden: varje del av svetsen tar krafterna från stångens normalkraft, båda skjuvkrafterna, vridningen och båda böjmomenten, adderade som vektorer.

## Vad som inte kontrolleras

Delgenomsvetsar, sneda kälsvetsar, plug- och slitsvetsar, intermittenta svetsar, metoden med momentancentrum, EN:s riktningsmetod, utmattning och grundmaterialets blockskjuvning är inte byggda. Vissa av standarders konstanter har skrivits av standarderna och har ännu inte jämförts med ett tryckt exemplar; rapporten anger varifrån varje värde kommer ({{ui:Rapport (PDF)}} får svettabellerna när du har kontrollerat). Se [Kontrollera stålstänger](topic:design-checks) och [Finns inte ännu](topic:not-built-yet).
