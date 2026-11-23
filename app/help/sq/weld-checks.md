---
title: Kontrollo saldimet aty ku elementët takohen
summary: Pasi bëhet kontrolli i projektimit, testo saldimet këndore dhe ato me skaj rreth çdo elementi aty ku takon një element tjetër ose një mbajtës, sipas AISC 360-16 Kapitulli J ose EN 1993-1-8, dhe shiko cili grup saldimesh përdoret më shumë dhe nën cilin kombinim. Një ndihmës derisa një inxhinier ta shqyrtojë.
keywords: saldim, saldime, kontroll saldimi, saldim këndor, saldim me skaj, penetrim i plotë, AISC 360, EN 1993-1-8, grup saldimi, shfrytëzim, kapacitet, nyje, lidhje, strukturor, inxhinier
from: e8eebbe6
---

Blloku {{ui:Kontrollet e saldimeve}} në skedën {{ui:Analiza}}, nën {{ui:Kontrollet e projektimit}}, merr forcat e kornizës së fundit të zgjidhur dhe kombinimet e forcave që ke bërë, dhe teston saldimin rreth çdo elementi në çdo nyje: aty ku një element takon një element tjetër, ose qëndron mbi një mbajtës.

:::warning
Është një **ndihmës derisa një inxhinier ta ketë shqyrtuar**. Kontrollon një saldim të vizatuar rreth gjithë prerjes, si një grup, nga forcat e skajeve të kornizës. Nuk e lexon madhësinë ose gjatësinë e saldimeve që ke vizatuar në vizatimet e punëtorisë, dhe nuk kontrollon bulonat, pllakat, mbështetjen, prerjen e blloqeve as prying. Rezultatet e tij nuk janë vulë.
:::

## Ekzekuto

1. Zgjidh kornizën në skedën {{ui:Analiza}} dhe zgjidh një {{ui:Kodi i projektimit}} te {{ui:Kontrollet e projektimit}}, pastaj shtyp {{ui:Bëj kombinimet}} (kontrolli i saldimit ka nevojë për të njëjtat kombinime të forcave).
2. Te {{ui:Kontrollet e saldimeve}}, vendos {{ui:Briri i saldimit këndor (mm, 0 = muri, më së shumti 8)}}. 0 do të thotë se briri ndjek murin më të hollë të prerjes, deri në 8 mm. Sipas kodit AISC, {{ui:Forca e metalit të saldimit F_EXX (MPa)}} është forca e metalit të saldimit (482.6 MPa është një elektrodë E70). Sipas EN 1993, klasa e çelikut jep forcën e metalit të saldimit dhe faktorin e korrelacionit.
3. Shtyp {{ui:Kontrollo saldimet}}.

Çdo rresht i tabelës është një grup saldimi (një skaj nyjeje i një elementi). Numrat: **shfrytëzimi** i kontrollit të rëndësishëm, gjendja (kalon ose dështon), dhe cili kontroll dhe klauzolë ishin të rëndësishme nën cilin kombinim. Një grup që kontrolli nuk mund ta gjykojë e thotë arsyen (pa klasë çeliku, pa faktor korrelacioni për klasën në EN 1993-1-8 Tabela 4.1, pa saldim në atë profil), në vend të një numri.

Nëse ndryshon bririn ose metalin e saldimit, ose ndryshon modelin, tabela pastrohet: ishte për vlerat e vjetra. Shtyp {{ui:Kontrollo saldimet}} përsëri.

## Çfarë kontrollohet

- **ASCE 7 + AISC 360:** metali i saldimit këndor (këndi i ngarkesës me saldimin llogaritet, J2.4), prerja e metalit bazë (J4.2), dhe saldimet me skaj të penetrimit të plotë (Tabela J2.5).
- **EN 1990 + EN 1993:** saldimet këndore sipas metodës së thjeshtuar të EN 1993-1-8 4.5.3.3 dhe saldimet me skaj nga 4.7.1.
- Paralajmërime projektimi kundrejt bririt minimal dhe maksimal dhe gjatësisë minimale, me vlerën me të cilën u krahasuan.

Grupi i saldimit trajtohet si prerje vijë dhe ngarkohet me metodën elastike vektoriale: çdo pjesë e saldimit merr forcën nga forca aksiale e elementit, të dyja prerjet, torsioni dhe të dy momentet përkulëse, të mbledhura si vektorë.

## Çfarë nuk kontrollohet

Saldimet me penetrim të pjesshëm, saldimet me kënd të zhdrejtë, saldimet me vrimë dhe me prerje, saldimet e ndërprera, metoda e qendrës së çastit, metoda direktive e EN, lodhja dhe prerja e blloqeve të metalit bazë nuk janë ndërtuar. Disa konstante të standardeve janë shkruar nga standardet dhe nuk janë krahasuar ende me një kopje të shtypur; raporti tregon nga vjen çdo numër ({{ui:Raporti (PDF)}} fiton tabelat e saldimit pasi ke kontrolluar). Shih [Kontrollo elementët e çelikut](topic:design-checks) dhe [Ende nuk është bërë](topic:not-built-yet).
