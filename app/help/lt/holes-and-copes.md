---
title: Skylių ir išpjovų pridėjimas
summary: Įveskite skyles į sienutes, flanšus ir plokštes, o sijos gale išpjaukite flanšus, matuojant nuo detalės pjūvio galo.
keywords: skylė, skylės, varžtų skylė, išpjova, išpjovos, pjūvis, išpjovimas, gręžti, pramušti, sienutės skylė, flanšo skylė
from: 33d12398
---

Skylės ir išpjovos įvedamos pagal padėtį. Jos priklauso elementui ir juda kartu su juo.

Skylės, padarytos jungtimis (galinėmis plokštėmis, pagrindo plokštėmis), pridedamos automatiškai; jų neįvedate. Jos išvardytos kaip „… skylės nuo jungčių (redaguokite jungtį)“.

## Nuo ko matuojamos padėtys

- **x** eina išilgai detalės nuo jos **pjūvio pradžios**: pradžios galo, po to kai jungtis ją nupjovė. Taigi x = 0 yra tikras plieno galas, o ne tinklelio taškas.
- **y** matuojama per paviršių nuo pjūvio centro:
  - ant **sienutės**: aukštyn (teigiamai) arba žemyn nuo vidurio aukščio;
  - ant **flanšo** ar **plokštės**: per plotį nuo centrinės linijos.
- Elemento pradžia – pirmas taškas, kurį spustelėjote įdėdami. Eilutės {{ui:Galai (x, y, z mm)}} rodo, kuris galas yra kuris.

## Skylės pridėjimas

1. Pasirinkti elementą.
2. Skydelio {{ui:Savybės}} lauke {{ui:Skylės}} pasirinkite {{ui:Paviršius}}: {{ui:Sienelė}}, {{ui:Viršutinis flanšas}} arba {{ui:Apatinis flanšas}} (dvitėsiui, kanalui ar stačiakampiam vamzdžiui) arba {{ui:Plokštės paviršius}} (plokštei).
3. Įveskite {{ui:x išilgai (mm)}}, {{ui:y skersai (mm)}} ir {{ui:Skersmuo (mm)}}. Forma prasideda nuo x 100, y 0, skersmens 22.
4. Pasirinkti {{ui:Pridėti skylę}}.

Būsenos juostoje rodoma „Skylė pridėta. x matuojamas nuo pjūvio pradžios; y – nuo pjūvio centro (sienelė: aukštyn, flanšas/plokštė: per plotį).“ Skylė atsiranda sąraše, o vaizde – kaip tamsus kištukas per paviršių.

Norėdami pašalinti skylę, pasirinkite × šalia jos sąraše.

Kampuočiai ir apvalūs vamzdžiai skylių dar nepriima: jų lauke {{ui:Skylės}} tai nurodyta.

:::note
3D vaizde skylės braižomos kaip tamsūs kištukai, o ne išpjaunamos per plieną. Jos yra tikros skylės NC failuose, dirbtuvių brėžiniuose ir IFC eksporte.
:::

Skylė, kurios x yra už bet kurio detalės galo, skirtuke {{ui:Problemos}} rodoma kaip „skylė yra už detalės galo“.

## Išpjovos pridėjimas

Išpjovos skirtos dvitėsiams profiliams: jos nupjauna viršutinį arba apatinį flanšą (ir tokio gylio sienutę) viename gale, kad sija netrukdytų kitam elementui.

1. Pasirinkti dvitėsį elementą.
2. {{ui:Išpjovos}} lauke pasirinkite {{ui:Galas}} ({{ui:Pradžia}} arba {{ui:Galas}}) ir {{ui:Pusė}} ({{ui:Viršus}} arba {{ui:Apačia}}).
3. Įveskite {{ui:Ilgis (mm)}} (išilgai sijos nuo to galo) ir {{ui:Gylis (mm)}} (žemyn nuo viršaus arba aukštyn nuo apačios). Forma prasideda nuo 100 x 40.
4. Pasirinkti {{ui:Pridėti išpjovą}}.

Vaizde matoma išpjova, iškirpta iš plieno. Sąraše rašoma, pavyzdžiui, „Viršus pradžioje: 100 x 40“ – pašalinkite ją su jos ×.

Išpjovos stačiakampės: vidinio kampo spindulio dar nėra.

## Kaip skylės ir išpjovos veikia žymes

Dvi detalės gauna tą pačią detalės žymę tik tada, jei jų skylės ir išpjovos sutampa per 1 mm, atsižvelgiant į tai, kad detalė galbūt apversta. Pridėjus skylę vienai grupės sijai, ji gauna naują žymę. Žr. [Mark rules](topic:mark-rules).
