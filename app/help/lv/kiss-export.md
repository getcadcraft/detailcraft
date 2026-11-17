---
title: Eksportēt KISS failu ražošanas programmatūrai
summary: Nosūtiet materiālu sarakstu ražošanas vadības (MIS) programmai kā KISS 1.1 failu: mezgli, detaļas, posmi kā secības, caurumi, izgriezumi un metinājumi.
keywords: kiss, kss, mis, ražošanas vadība, ražošanas kontrole, tāmēšana, materiālu saraksts, bom, eksports, fabtrol, secība
from: 30cf3951
---

Grupā {{ui:Izvade}} atveriet {{ui:Vairāk}} un izvēlieties {{ui:KISS fails ražošanas programmatūrai}}. DetailCraft lejupielādē `<name>.kss`, KISS failu (“Keep It Simple, Steel”, versija 1.1) — vienkāršu teksta formātu, no kura vairums ražošanas vadības programmu importē materiālu sarakstu.

## Kas tajā ir

- Galvene: darba numurs (modeļa nosaukuma pirmie astoņi burti un cipari), modeļa nosaukums, datums un laiks un tas, vai izmēri ir metriskie.
- Katrai mezgla zīmei: tās galvenā detaļa (daudzums = cik mezglu), rasējuma rinda (A-B1 un tā tālāk, mezgla rasējuma numurs), mezgla rinda (nosaukums, tips, svars, kopējais garums, dziļums un platums), viena secības rinda katram [posmam](topic:phases), kurā mezgls atrodas, un darba rindas: caurumi (cik, diametrs, biezums cauri), izgriezumi un metinājumi.
- Pēc tam katra tam piestiprinātā detaļa ar **kopējo** daudzumu (uz mezglu × mezgli), kā to prasa standarts.
- Brīvās skrūves un enkurstieņi rasējumā BOLTS, mezglā FIELD.
- Katrā rindā norādīts tips (W, C, L, HSS, PL vai MI pielāgotam profilam), izmērs, kvalitātes klase, griešanas garums milimetros, detaļas nosaukums un svars.

## Collu vai metriskā sistēma

[DetailCraft iestatījumos](topic:settings) **KISS failu izmēri** izvēlas:

- **Automātiski** (sākumā): collu sistēma, ja katrs elements ir AISC profils, citādi metriskā.
- **Collu sistēma**: profili pēc to AISC apzīmējuma (W 16X26, HSS 4X4X.250); plāksnes un skrūves, ko DetailCraft glabā milimetros, līdz tuvākajai 1/16 in; svars mārciņās.
- **Metriskā sistēma**: Eiropas profili pēc to nosaukuma (IPE300), plāksnes kā biezums X platums milimetros; svars kilogramos.

Garumi vienmēr ir milimetros ar diviem decimālskaitļa cipariem neatkarīgi no iestatījuma: to prasa KISS standarts, un saņemošā programma tos pārvērš.

:::note
Kvalitātes klases tiek saīsinātas līdz standarta astoņām rakstzīmēm: A572 Gr 50 kļūst par A572-50. Komati nosaukumos kļūst par atstarpēm (formātam nav pēdiņu). Pirms paļaušanās pārbaudiet vienu importu savā programmā: DetailCraft KISS faili šeit ir pārbaudīti pret standartu, bet vēl ne ražošanas programmā.
:::
