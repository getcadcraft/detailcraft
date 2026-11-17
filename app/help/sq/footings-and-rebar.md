---
title: Vendos themele me armaturë
summary: Vendos themele bllok drejtkëndore me rrjetë të poshtme dhe shufra nisëse, kontrolloji dhe shkarko tabelën e përkuljes.
keywords: themel, themel bllok, themel, armaturë, armim, shufra, rrjetë, shufra nisëse, kunja, tabela e përkuljes, lista e shufrave, beton, grepa, mbulesë
from: 41a048be
---

Kjo temë flet për themele bllok drejtkëndore. Trarët, kolonat, soletat dhe muret janë në [Detajo betonin e armuar](topic:reinforced-concrete). Çdo themel merr një rrjetë të poshtme në të dy drejtimet dhe, nëse dëshiron, shufra nisëse që dalin lart nga ai. Shufrat janë nga madhësitë US #3 deri #11.

## Vendos një themel

1. Zgjidh {{ui:Planimetria}} dhe zgjidh nivelin e pjesës së sipërme të themelit.
2. Zgjidh {{ui:Themel}} te grupi {{ui:Vendos}}, ose shtyp {{key:F}}.
3. Cakto themelin te paneli {{ui:Vetitë}} (shih më poshtë), ose mbaj vlerat e parazgjedhura.
4. Kliko një kryqëzim rrjeti. Themeli qendrohet mbi kryqëzimin, me pjesën e sipërme në nivel. Shiriti i statusit thotë, për shembull, "Themel 2000 x 2000 x 600 nën A/1."

Mund të përdorësh edhe formularin {{ui:Shto sipas rrjetit}} në fund të panelit.

Themeli vizatohet transparent, që të shihen shufrat e tij, të cilat vizatohen si tuba të ngurtë.

## Cilësimet e themelit

| Fushë | Parazgjedhja | Shënime |
|---|---|---|
| Gjatësia L (mm) | 2000 | Përgjatë x; 300 deri 50000 |
| Gjerësia B (mm) | 2000 | Përgjatë y; 300 deri 50000 |
| Thellësia H (mm) | 600 | 150 deri 10000 |
| Betoni | 4000 psi | Tekst, i shtypur në eksportin IFC |

**Rrjeta e poshtme**

| Fushë | Parazgjedhja | Shënime |
|---|---|---|
| Shufrat gjatë | #5 | Shufra që shkojnë përgjatë L, shtresa e poshtme |
| Distanca (mm) | 250 | Distanca më e madhe e lejuar; shufrat shpërndahen njëtrajtshëm me këtë distancë ose më afër |
| Shufrat tërthor | #5 | Shufra që shkojnë përgjatë B, të vendosura mbi shufrat gjatë |
| Distanca (mm) | 250 | Si më sipër |
| Mbulesa (mm) | 75 | Mbulesë e lirë betoni në çdo faqe |
| Grepat në skaje | Po | Kthen të dy skajet e çdo shufre të rrjetës lart në një grep standard 90° (formë U); Jo jep shufra të drejta (formë S) |

**Shufrat nisëse**

| Fushë | Parazgjedhja | Shënime |
|---|---|---|
| Shufrat nisëse | Po | Çaktivizoje për një themel pa shufra nisëse |
| Shufra | #6 | |
| Shufrat gjatë L / Shufrat gjatë B | 2 / 2 | Një rrjet shufrash, i qendruar mbi themelin |
| Distanca gjatë L / Distanca gjatë B | 250 / 250 | Ndërmjet qendrave të shufrave |
| Dalja mbi sipërfaqe | 600 | Sa dalin shufrat mbi pjesën e sipërme të themelit |
| Grepi në fund | Po | Grep 90° i drejtuar nga jashtë, i ulur mbi rrjetën (formë L) |

Nën fushat, DetailCraft shfaq krahun e grepit për shufrat gjatë, për shembull "Krahu i grepit për #5: 254 mm jashtë për jashtë."

## Ndrysho një themel të vendosur

Zgjidh themelin (kliko betonin e tij larg çdo kolone, ose një nga shufrat e tij). Merr të njëjtat fusha plus {{ui:Qendra x}}, {{ui:Qendra y}}, {{ui:Lartësia e sipërme z}} dhe {{ui:Rrotullimi (°)}}. Nën to një tabelë liston shufrat e këtij themeli me shenjat, numrat dhe gjatësitë e tyre, dhe volumin e betonit në metra kub.

Çdo ndryshim kontrollohet përpara se të ruhet. Një ndryshim që nuk mund të ndërtohet refuzohet dhe shiriti i statusit thotë arsyen, për shembull "Mbulesa nuk lë vend për shufra në këtë themel.", "Themeli është shumë i cekët për dy shtresa shufrash brenda mbulesës." ose "Shufrat nisëse nuk futen brenda themelit me mbulesë 75 mm."

Ndryshimet që mund të ndërtohen, por kërkojnë një shikim, listohen nën themel dhe në skedën {{ui:Problemet}}:

- "Shufrat #11 në 59.6 mm lënë më pak se 35.8 mm të lirë (ACI 318-19 25.2.1)." Hendeku i lirë ndërmjet shufrave duhet të jetë të paktën sa diametri i shufrës dhe të paktën 25.4 mm.
- "Grepat #5 kërkojnë 254 mm thellësi; vetëm 150 mm futen brenda mbulesës." Krahët e grepit preken shkurtohen për t'u futur, kështu që nuk janë më grepa standardë.
- "Grepat nisës depërtojnë në mbulesë."
- "Shufrat nisëse janë më afër se distanca minimale e lirë."

## Shenjat e shufrave dhe tabela e përkuljes

Shufrat identike (e njëjta madhësi, formë dhe përmasa deri në milimetër) ndajnë një shenjë shufre në të gjithë themelet. Shenjat shkruhen `<numri i shufrës>F<n>`: 5F1, 5F2 për shufrat #5, 6F1 për shufrën e parë #6, e kështu me radhë. Themelet me të njëjtën madhësi, beton, rrjetë dhe shufra nisëse ndajnë një shenjë themeli: F1, F2 …

1. Hap skedën {{ui:Tabela e përkuljes}} në fund. Çdo rresht është një shenjë shufre: madhësia, forma, përmasat A, B dhe C, numri, gjatësia e prerjes, gjatësia totale, masa për metër, pesha e secilës, pesha totale dhe për çfarë përdoret shufra.
2. Zgjidh {{ui:Shkarko CSV}} në skedë, ose {{ui:Përkulja}} te menuja {{ui:Më shumë}} e grupit {{ui:Dalja}}, për `<emri> bending schedule.csv`.

Format janë kodet e vetë DetailCraft, jo të një standardi: S e drejtë, L me një përkulje, U me dy përkulje. Përmasat janë jashtë për jashtë; gjatësia e prerjes është gjatësia e saktë e boshtit përgjatë përkuljeve. Shih [Referenca e armaturës](topic:rebar-reference).

## Çfarë nuk kontrollon DetailCraft

- Gjatësitë e ankorimit dhe të mbivendosjes, dhe nëse shufrat nisëse janë mjaft të gjata për kolonën mbi to.
- Pjesa për madhësinë e agregatit të rregullit të distancës së lirë (nuk e njeh përzierjen).
- Çdo gjë për kolonën ose pllakën bazë mbi to: themelet dhe çeliku janë të ndarë.

Shih gjithashtu [Çfarë nuk është ndërtuar ende](topic:not-built-yet).
