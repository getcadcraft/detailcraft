---
title: Kontrollo elementët e çelikut sipas një kodi projektimi
summary: Krijo kombinime ngarkesash sipas ASCE 7 ose EN 1990, kontrollo çdo profil I çeliku sipas AISC 360 ose EN 1993-1-1, dhe shiko sa nga kapaciteti i çdo elementi përdoret. Një ndihmë derisa një inxhinier ta ketë rishikuar.
keywords: projektim, kontroll projektimi, projektim çeliku, shfrytëzim, përdorim, kapacitet, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurokod, kombinime ngarkesash, LRFD, Shtojca Kombëtare, humbje stabiliteti, humbje stabiliteti tërthore-torzionale, prerje, përkulje, ndërveprim, strukturë, studentë, inxhinier
from: 66b6d545
---

Pasi ekzekuton analizën, blloku {{ui:Kontrollet e projektimit}} në skedën {{ui:Analiza}} i kthen forcat e tij në një vendim për çdo element çeliku: sa nga kapaciteti i tij përdor kombinimi më i rëndë.

:::warning
Është një **ndihmë derisa një inxhinier ta ketë rishikuar**. Përdor vetëm forca të rendit të parë (pa efekte të rendit të dytë), nuk kontrollon përdredhjen, pjesët shumë të holla (klasa 4), format e saldueshme dhe lidhjet, dhe lë jashtë atë që nuk mund ta kontrollojë dhe e thotë këtë. Nuk zëvendëson kontrollin e një inxhinieri, dhe rezultatet e tij nuk janë një vulë.
:::

## Zgjidh një kod

{{ui:Kodi i projektimit}} ruhet me modelin; zgjidh njërën nga dy familjet:

- **ASCE 7 + AISC 360** (SHBA, LRFD): kombinimet e ngarkesave të ASCE 7-16 §2.3.1 dhe kontrollet e elementeve të ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurokod): kombinimet e EN 1990 (Ekuacioni 6.10, ose 6.10a dhe 6.10b) dhe kontrollet e elementeve të EN 1993-1-1.

Pastaj zgjidh {{ui:Klasa e çelikut}} (A992, A36 dhe të tjera; ose S235 deri S450, me kufirin e ulët të rrjedhjes mbi 40 mm).

## Bëj kombinimet

Jep çdo rasti ngarkese **llojin** e vet (vdekur, e gjallë, e gjallë në çati, borë, erë, sizmik) në listën e rasteve, pastaj shtyp {{ui:Bëj kombinimet}}. DetailCraft i shkruan kombinimet e kodit si kombinime të rasteve të tua: çdo kombinim forcash që kodi liston për llojet që ke, dhe kombinime shërbimi për lakimin. Ato që shkruan vetë mbeten; nuk kontrollohen sipas kodit. Një rast i llojit {{ui:Tjetër}} nuk kombinohet.

Për Eurokodin, faktorët janë **vlerat e rekomanduara** të EN 1990 Shtojca A1 (γG 1.35, γQ 1.5, vlerat ψ të ngarkesave të vendosura, borës dhe erës) dhe EN 1993-1-1 (γM0 = γM1 = 1.0). Shtojca Kombëtare e vendit tënd ndryshon disa prej tyre: hap {{ui:Vlerat e Shtojcës Kombëtare}}, shkruaj të tuat dhe bëj kombinimet përsëri. Ato ruhen në model.

## Kontrollo elementët

Shtyp {{ui:Kontrollo elementët}}. Për çdo profil I çeliku, tabela tregon **shfrytëzimin** e tij (kërkesa mbi kapacitet: 100 % është kufiri), nëse kalon, cili kontroll mbizotëron, dhe cila kombinim. Elementët ngjyrosen në model: blu pak i përdorur, jeshil rreth gjysmës, ocër afër kufirit, i kuq mbi të, gri i pakontrolluar. Kliko emrin e një elementi për ta përzgjedhur.

Kontrollet, me klauzolën që ndjekin (listohen në raport):

- tensioni, shtypja me humbje stabiliteti përkulëse dhe torzionale, përkulja rreth të dy boshteve me humbje stabiliteti tërthore-torzionale, prerja, dhe përkulja me forcë aksiale;
- lakimi i kombinimeve të shërbimit kundrejt {{ui:Kufiri i lakimit}} që ke vendosur (L/360 në fillim; një vlerë projekti, jo një vlerë kodi).

**Gjatësitë.** Gjatësia e mbajtur është një pjesë e çdo copë të analizuar (1 = e pambajtur); mbajtësit merren të barabartë nga fillimi. Faktorët K shumëzojnë gjatësinë për humbjen e stabilitetit. Një nyje ku hyn një element tjetër ndan një element, dhe çdo copë kontrollohet në gjatësinë e vet, si e mbajtur aty.

## Çfarë nuk kontrollohet

Një element shfaq **nuk kontrollohet**, me arsyen, në vend të një numri kur seksioni i tij nuk është një formë I që kontrollet e njohin (tuba, kënde, kanale), kur është një formë e personalizuar (e saldueshme), ose kur një pjesë është shumë e hollë (AISC) ose klasa 4 (Eurokod) në përkulje. Një pjesë e hollë në shtypje heq kontrollet e shtypjes, dhe elementi lexohet *kalon, pjesërisht i kontrolluar*. Gjithashtu nuk janë ndërtuar: efektet e rendit të dytë, përdredhja, prerja me humbje stabiliteti së bashku me përkuljen, lidhjet, lodhja, zjarri dhe detajimi sizmik. Elementët prej betoni dhe ngarkesat sizmike kanë [kontrollet e tyre](topic:concrete-and-seismic). Shih [Ende të pandërtuara](topic:not-built-yet).

## Raporti

{{ui:Raporti (PDF)}} dhe {{ui:Raporti (CSV)}} fitojnë tabelat e projektimit pasi të kontrollosh: edicionet e kodit, cilësimet dhe vlerat e Shtojcës Kombëtare, shfrytëzimi sipas elementit, çdo klauzolë e përdorur, dhe për çdo element kërkesa, kapaciteti dhe shfrytëzimi i çdo kontrolli në kombinimin e tij mbizotërues.
