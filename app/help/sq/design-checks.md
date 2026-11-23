---
title: Kontrollo elementët e çelikut sipas një kodi projektimi
summary: Bëj kombinimet e ngarkesave sipas ASCE 7 ose EN 1990, kontrollo çdo profil I çeliku sipas AISC 360 ose EN 1993-1-1 dhe shiko sa nga kapaciteti i tij përdor çdo element. Një ndihmës derisa një inxhinier ta shqyrtojë.
keywords: projektim, kontroll projektimi, projektim çeliku, shfrytëzim, kapacitet, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurokod, kombinime ngarkesash, LRFD, Shtojca Kombëtare, humbje stabiliteti, humbje stabiliteti anësore-torsionale, prerje, përkulje, ndërveprim, strukturor, studentë, inxhinier
from: 15685c4e
---

Pasi ekzekutoni analizën, blloku {{ui:Kontrollet e projektimit}} në skedën {{ui:Analiza}} i kthen forcat e tij në një vendim për çdo element çeliku: sa nga kapaciteti i tij përdor kombinimi më i rëndë.

:::warning
Është një **ndihmës derisa një inxhinier ta ketë shqyrtuar**. Përdor vetëm forca të rendit të parë (pa efekte të rendit të dytë), nuk kontrollon torsionin, pjesë të holla (klasa 4), profile të salduara as lidhje, dhe e lë jashtë atë që nuk mund ta kontrollojë, duke e thënë këtë. Nuk zëvendëson kontrollin e një inxhinieri, dhe rezultatet e tij nuk janë vulë.
:::

## Zgjidh një kod

{{ui:Kodi i projektimit}} ruhet bashkë me modelin; zgjidh njërën nga dy familjet:

- **ASCE 7 + AISC 360** (SHBA, LRFD): kombinimet e ngarkesave të ASCE 7-16 §2.3.1 dhe kontrollet e elementeve të ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurokod): kombinimet e EN 1990 (Ek. 6.10, ose 6.10a dhe 6.10b) dhe kontrollet e elementeve të EN 1993-1-1.

Pastaj zgjidh {{ui:Klasa e çelikut}} (A992, A36 e të tjera; ose S235 deri S450, me kufirin e rrjedhjes më të ulët mbi 40 mm).

## Bëj kombinimet

Jepi çdo rasti ngarkese **llojin** e vet (vdekur, e gjallë, e gjallë në çati, borë, erë, sizmike) në listën e rasteve, pastaj shtyp {{ui:Bëj kombinimet}}. DetailCraft shkruan kombinimet e kodit si kombinime të rasteve të tua: çdo kombinim qëndrueshmërie që kodi jep për llojet që ke, dhe kombinimet e shërbimit për deformimin. Ato që ke shkruar vetë mbeten; nuk kontrollohen sipas kodit. Një rast i llojit {{ui:Tjetër}} nuk kombinohet.

Për Eurokodin, faktorët janë **vlerat e rekomanduara** të EN 1990 Shtojca A1 (γG 1.35, γQ 1.5, vlerat ψ të ngarkesave të vendosura, borës dhe erës) dhe EN 1993-1-1 (γM0 = γM1 = 1.0). Shtojca Kombëtare e vendit tënd ndryshon disa prej tyre: hap {{ui:Vlerat e Shtojcës Kombëtare}}, shkruaj vlerat e tua dhe bëj përsëri kombinimet. Ato ruhen bashkë me modelin.

## Kontrollo elementët

Shtyp {{ui:Kontrollo elementët}}. Për çdo profil I çeliku, tabela tregon **shfrytëzimin** (kërkesa mbi kapacitet: 100 % është kufiri), nëse kalon, cili kontroll është i rëndësishëm dhe cili kombinim. Elementët ngjyrosen në model: blu për shfrytëzim të ulët, jeshil rreth gjysmës, ocër afër kufirit, kuq mbi të, gri për ata që nuk janë kontrolluar. Kliko emrin e një elementi për ta përzgjedhur.

Kontrollet, me klauzolën që ndjekin (listohen në raport):

- tensioni, shtypja me humbje stabiliteti përkulëse dhe torsionale, përkulja rreth të dy boshteve me humbje stabiliteti anësore-torsionale, prerja, dhe përkulja me forcë aksiale;
- deformimi i kombinimeve të shërbimit kundrejt {{ui:Kufiri i deformimit}} që vendose (L/360 për fillim; vlerë projekti, jo vlerë kodi).

**Gjatësitë.** Gjatësia e mbajtur është një pjesë e çdo pjese të analizuar (1 = e pambajtur); mbajtjet merren të barabarta në distancë nga fillimi. Faktorët K shumëzojnë gjatësinë për humbjen e stabilitetit. Një nyje ku mbërrin një element tjetër e ndan elementin, dhe çdo pjesë kontrollohet në gjatësinë e vet, si e mbajtur aty.

## Çfarë nuk kontrollohet

Një element shfaq **nuk kontrollohet**, me arsyen, në vend të një numri, kur profili i tij nuk është formë që kontrollet e njohin (këndore, kanale; tubat drejtkëndëshe dhe rrethore kontrollohen kur muret e tyre janë kompakte), kur është profil i personalizuar (i salduar), ose kur një pjesë është e hollë (AISC) ose klasa 4 (Eurokod) në përkulje. Një pjesë e hollë në shtypje heq kontrollet e shtypjes dhe elementi lexohet *kalon, pjesërisht i kontrolluar*. Saldimet te nyjet kanë [kontrollin e tyre](topic:weld-checks). Gjithashtu nuk janë ndërtuar: efektet e rendit të dytë, torsioni, humbja e stabilitetit në prerje së bashku me përkuljen, lidhjet me bulona, lodhja, zjarri dhe detajimi sizmik. Elementët e betonit dhe ngarkesat sizmike kanë [kontrollet e tyre](topic:concrete-and-seismic). Shih [Ende nuk është bërë](topic:not-built-yet).

## Raporti

{{ui:Raporti (PDF)}} dhe {{ui:Raporti (CSV)}} fitojnë tabelat e projektimit pasi ke kontrolluar: versionet e kodeve, cilësimet dhe vlerat e Shtojcës Kombëtare, shfrytëzimin sipas elementit, çdo klauzolë e përdorur, dhe për çdo element kërkesën, kapacitetin dhe shfrytëzimin e çdo kontrolli në kombinimin e tij të rëndësishëm.
