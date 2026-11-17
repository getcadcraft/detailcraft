---
title: Izdevumi, revīzijas un rasējumu izmaiņu žurnāls
summary: Glabājiet vienu izdevumu vēsturi kopā ar arhitekta modeli: ielasiet izdevumus, reģistrējiet būvlaukuma norādījumus, darbnīcas rasējumus un saistītos modeļus pie izdevuma un lasiet rasējumu izmaiņu žurnālu.
keywords: izdevums, revīzija, revīzijas, izmaiņu žurnāls, rasējumu izmaiņu žurnāls, rasējumu reģistrs, būvlaukuma norādījums, darbnīcas rasējums, saistītais modelis, iepirkums, būvniecība, izdevumu vēsture, darbnīcas rasējumi, ražošana
from: 4b9a1b7b
---

## Ko jūs darīsiet

Strādājiet ar to pašu izdevumu vēsturi, kas pieejama pārējai komandai. Redziet, kuras lapas tika izsniegtas kurā revīzijā, un pierakstiet, kas notiek būvlaukumā, pie izdevuma, kam tas pieder.

## Soļi

1. Atveriet **Izdevumi un revīzijas**.
2. Izvēlieties **Ielasīt izdevumu vēsturi** un atlasiet `.issues.json` failu, kas saglabāts no BimCraft vai citas lietotnes. Tā izdevumi un ieraksti tiek pievienoti jūsu vēsturei. Nekas netiek aizstāts.
3. Izvēlieties **Pievienot ierakstu** būvlaukuma norādījumam, darbnīcas rasējumam, atzīmju kopai, saistītajam modelim vai piezīmei. Atlasiet izdevumu, kam tas attiecas, un tā statusu. Izvēlētais fails tiek reģistrēts pēc sava nosaukuma, izmēra un SHA-256; fails paliek savā vietā.
4. **Rasējumu izmaiņu žurnāls** rāda vienu rindu katrai lapai un vienu kolonnu katram izdevumam. Revīzija iekavās tika izsniegta atkārtoti bez izmaiņām.
5. **Lejupielādēt izmaiņu žurnālu (CSV)** saglabā izdevumus, lapu tabulu un ierakstus. **Saglabāt izdevumu vēsturi** ieraksta failu, ko lasa citas lietotnes.

## Kas jāzina

- Lapas joprojām tiek izsniegtas no {{ui:Rasējumi}}, lapa pa lapai. Šeit parādās tie izdevumi: lapas, kas izsniegtas vienā datumā ar vienu piezīmi, ir viens izdevums.
- Ieraksti un izdevumi, ko ielasāt, tiek saglabāti modeļa failā. Katra izmaiņa ir viens Atsaukt solis.
- Ja to pašu failu ielasa divreiz, nekas netiek pievienots divreiz. Ja divos eksemplāros ir tas pats ieraksts, tiek paturēts jaunākais.
