---
title: Darbnīcas rasējumu izveide
summary: Viena lapa katram detaļas marķējumam, izveidotas visas reizē. Priekšskatīt jebkuru no tām un lejupielādēt vienu lapu vai visu komplektu kā PDF formātā A4 līdz A1 vai ANSI B līdz D, ar caurumiem, izgriezumiem, izmēriem un titula bloku.
keywords: darbnīcas rasējums, darbnīcas rasējumi, visas detaļas, partija, viss komplekts, viena detaļa, izgatavošanas rasējums, pdf, detaļas rasējums, drukāt
from: d25fe035
---

DetailCraft izveido vienu lapu katram detaļas marķējumam visām modeļa sijām, kolonnām, saitēm un plāksnēm uzreiz: nav vajadzīgs tās atlasīt pa vienai. Identiskas detaļas dalās vienā marķējumā, tātad arī vienā lapā. Lapas tiek veidotas uzreiz no modeļa; tās netiek glabātas un nav rediģējamas.

## Visa komplekta izveide

1. Izvēlieties {{ui:Darbnīcas rasējums}} grupā {{ui:Izvade}}. Nekas nav jāatlasa. Ja detaļa ir atlasīta, logs atveras šīs detaļas lapā. Panelī {{ui:Rekvizīti}} tā pati poga saucas {{ui:Darbnīcas rasējums}} elementiem un {{ui:Plāksnes rasējums}} savienojumiem.
2. Atveras priekšskatījums ar detaļas marķējumu virsrakstā, piemēram, "Darbnīcas rasējums b1". Pirmajā sarakstā blakus virsrakstam ir katrs detaļas marķējums ar savu profilu, garumu un daudzumu: izvēlieties vienu, lai redzētu tā lapu. Otrais saraksts maina lapas izmēru; viss komplekts tiek izveidots no jauna šajā izmērā (skatiet [Vispārējā izkārtojuma un mezglu rasējumi](topic:drawings#choose-the-sheet-size)).
3. Izvēlieties {{ui:Lejupielādēt visu}} (poga rāda lapu skaitu), lai iegūtu vienu PDF ar lappusi katram detaļas marķējumam, `<name> Shop drawings.pdf`. Katrā lapā titula blokā ir teksts "Sheet 3 of 42". Vai izvēlieties {{ui:Lejupielādēt PDF}} skatāmajai lapai, `<name> <mark>.pdf`.
4. Aizveriet priekšskatījumu ar × vai {{key:Esc}}.

Ja {{ui:Darbnīcas rasējums}} ir pelēks, modelī vēl nav detaļu.

## Kas ir uz lapas

I-veida profilam:

- **Fasāde**, skatoties uz sienu: detaļa ar izgriezumiem, sienas caurumi kā apļi un flanšu caurumi kā paslēptas (strīpotas) līnijas.
- **Augšējā flanša plāns**, skatot no augšas, ja kādam flanšam ir caurumi. Apakšējā flanša caurumi rādīti strīpoti.
- **Griezums** caur profilu.
- **Izmēri:** ķēdē savienotas caurumu pozīcijas gar detaļu un kopējais garums, sienas caurumu augstumi, līnijas attālums un izgriezumu izmēri.
- **Caurumu saraksts:** katra caurumu grupa, piemēram, "8 x Ø22 in the top flange".
- **Metinājums**, ja detaļai ir metinātas plāksnes.
- **Titula bloks:** detaļas marķējums, mezgla marķējums, profils, materiāls, garums, daudzums, katras detaļas svars un kopējais svars, modeļa nosaukums un datums.

Kanālam, leņķim vai dobajam profilam lapa ir tāda pati, skatoties uz sienu vai sānu: caurules sienas ir paslēptas (strīpotas) līnijas, griezums rāda sienas biezumu.

Plāksnei: plāksnes virsma ar caurumiem un tās mala kā griezums.

## Mērogi

Mērogs tiek izvēlēts no saraksta (no 1:1 līdz 1:200), lai detaļa ietilptu lapā. Garai, plānai detaļai vienā mērogā būtu par šauru, lai to varētu izlasīt, tāpēc, ja dziļums uz papīra būtu mazāks par 30 mm, dziļums tiek zīmēts lielākā mērogā nekā garums. Skata virsraksts to norāda, piemēram, "length 1:20, depth 1:5 (not to one scale; dimensions govern)". Izmērus vienmēr nolasiet no izmēriem, nevis mērot lapu.

## Lietderīga informācija

- Daudzums ir detaļu skaits ar šo marķējumu modelī. Marķējumi pēc izmaiņas var tikt pārnumurēti; skatiet [Pārbaudīt marķējumus un materiālu sarakstu](topic:marks-and-bom).
- Katra lapa ir viena detaļa atsevišķi, bez metinājumu simboliem; mezglu rasējumi (ar metinājumu simboliem) un vispārējā izkārtojuma rasējumi ir [Rasējumi](topic:drawings). Lapu DetailCraft nevar rediģēt vai anotēt. Lai to atzīmētu, atveriet PDF failu PDF anotēšanas lietotnē, piemēram, MarkupCraft.
- Titula blokā ir teksts "DetailCraft lab build — millimeters".
- Teksts izmanto standarta PDF fontu Helvetica. Rakstzīmes ārpus Rietumeiropas kopas tiek drukātas kā "?", un statusa josla tās saskaita.

## Drukāšana

Atveriet lejupielādēto PDF savā PDF skatītājā un drukājiet 100% (bez „Pielāgot lapai”) uz papīra izvēlētajā izmērā, ja vēlaties, lai norādītie mērogi saglabātos. Mazākā lapā samaziniet to un paļaujieties uz izmēriem.
