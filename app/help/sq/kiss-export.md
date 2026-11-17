---
title: Eksporto një skedar KISS për softuerin e prodhimit
summary: Dërgo listën e materialeve te një program menaxhimi prodhimi (MIS) si skedar KISS 1.1: montime, pjesë, faza si sekuenca, vrima, prerje dhe saldime.
keywords: kiss, kss, mis, menaxhimi i prodhimit, kontrolli i prodhimit, parallogaritje, lista e materialeve, bom, eksport, fabtrol, sekuencë
from: 30cf3951
---

Te grupi {{ui:Dalja}}, hap {{ui:Më shumë}} dhe zgjidh {{ui:Skedari KISS për softuerin e prodhimit}}. DetailCraft shkarkon `<name>.kss`, një skedar KISS ("Keep It Simple, Steel", versioni 1.1), formati me tekst të thjeshtë nga i cili shumica e programeve të menaxhimit të prodhimit importojnë listën e materialeve.

## Çfarë përmban

- Koka: një numër pune (tetë shkronjat dhe shifrat e para të emrit të modelit), emri i modelit, data dhe ora, dhe nëse madhësitë janë metrike.
- Për çdo shenjë montimi: pjesa kryesore (sasia = sa montime janë), një rresht vizatimi (A-B1 e kështu me radhë, numri i vizatimit të montimit), një rresht montimi (emri, lloji, pesha, gjatësia totale, thellësia dhe gjerësia), një rresht sekuence për çdo [fazë](topic:phases) ku ndodhet montimi, dhe rreshta punës: vrimat (sa, diametri, trashësia e kalueshme), prerjet dhe saldimet.
- Pastaj çdo pjesë e lidhur me të, me sasinë **totale** (për montim × montime), siç kërkon standardi.
- Bulonat e lirë dhe shufrat e ankorimit në vizatimin BOLTS, montimi FIELD.
- Çdo rresht jep llojin (W, C, L, HSS, PL, ose MI për profil të personalizuar), madhësinë, klasën, gjatësinë e prerjes në milimetra, emrin e pjesës dhe peshën.

## Imperial ose metrik

Te [Cilësimet e DetailCraft](topic:settings), **Madhësitë e skedarit KISS** zgjedh:

- **Automatik** (fillimi): imperial kur çdo element është formë AISC, përndryshe metrik.
- **Imperial**: format sipas emërtimit AISC (W 16X26, HSS 4X4X.250); pllakat dhe bulonat, që DetailCraft i mban në milimetra, në 1/16 inç më të afërt; peshat në paund.
- **Metrik**: format evropiane sipas emrit të tyre (IPE300), pllakat si trashësi X gjerësi në milimetra; peshat në kilogramë.

Gjatësitë janë gjithmonë në milimetra me dy decimale, pavarësisht nga cilësimi: standardi KISS e kërkon këtë dhe programi marrës i konverton.

:::note
Klasat shkurtohen në tetë karakteret e standardit: A572 Gr 50 bëhet A572-50. Presjet në emra bëhen hapësira (formati nuk ka thonjëza). Kontrollo një import në programin tënd përpara se t'i besosh: skedarët KISS të DetailCraft janë kontrolluar këtu sipas standardit, jo ende në një program prodhimi.
:::
