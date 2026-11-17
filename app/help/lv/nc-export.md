---
title: Nosūtīt NC failus cehā
summary: Eksportēt DSTV NC failus katrai detaļas zīmei (I profili, kanāli, leņķi, HSS, plāksnes), apvienot tos zip arhīvā un pārbaudīt, pirms tie nonāk mašīnā.
keywords: nc, nc1, dstv, cnc, mašīna, sijas līnija, urbšanas līnija, plākšņu griešana, eksports, izgatavošana, zip
from: 598b6091
---

DetailCraft raksta vienu DSTV NC failu (`.nc1`) katrai detaļas zīmei I profiliem, kanāliem, leņķiem, taisnstūra un apaļiem HSS profiliem un plāksnēm, un apvieno tos vienā zip arhīvā. Sijas līnijas un plākšņu griešanas mašīnas nolasa šos failus, lai zāģētu, urbtu un grieztu.

## Eksports

1. Vispirms notīriet cilni {{ui:Problēmas}}: savienojums, ko nevarēja izveidot, neizveido nevienu caurumu.
2. Saglabājiet modeli ({{key:Mod+S}}), lai NC faili atbilstu saglabātam modelim.
3. Izvēlieties {{ui:NC faili}} grupā {{ui:Izvade}}.
4. Pārlūkprogramma lejupielādē `<name> NC.zip`. Statusa josla norāda, cik failu tajā ir, un uzskaita visas detaļu zīmes, kurām tas nav ierakstīts (leņķis vai apaļa caurule ar izgriezumu).

Zip arhīvā katrs fails ir nosaukts pēc savas detaļas zīmes: `b1.nc1`, `c1.nc1`, `p1.nc1` … Zip arhīvs nav saspiests un atveras ar jebkuru zip rīku.

Ja modelī nav detaļu, statusa joslā par to tiek paziņots.

## Ko satur katrs fails

- **Galvene (ST):** modeļa nosaukums kā pasūtījums, detaļas zīme kā rasējums un gabals, fāze 1, materiāla marka, daudzums, profils un tā izmēri, masa uz metru un krāsojamā virsma uz metru. Zāģa griezumi ir taisni.
- **Ārējie kontūri (AK):** profila stīpa ar taisnstūrveida izgriezumu katram izgriezumam, un katrs flanšs (o un u) saīsināts tajā galā, kur izgriezums to noņem.
- **Caurumi (BO):** katrs caurums ar savu virsmu, pozīciju un diametru, ieskaitot caurumus, ko izveido galu plāksnes un pamatnes plāksnes.

Lauks pa laukam, ar virsmu un koordinātu noteikumiem: [NC faila lauki](topic:nc1-fields).

## Kas netiek ierakstīts

- Leņķi un apaļas caurules ar izgriezumu: NC faila nav. To detaļu zīmes ir uzskaitītas statusa joslā.
- Caurumi apaļās caurulēs (DetailCraft tādus neveido).
- Slīpumi, iekšējie kontūri, detaļu marķējumi (scribing) un zāģa leņķi, kas nav taisni.
- Garenie caurumi (DetailCraft ir tikai apaļi caurumi).

## Pārbaudiet pirms apstrādes

DetailCraft NC faili tiek nolasīti atpakaļ ar tā paša testu komplektu, bet tie nav palaisti uz jūsu ceha mašīnām.

1. Atveriet failus sava ceha NC skatītājā vai mašīnas programmatūrā un salīdziniet tos ar darbnīcas rasējumiem.
2. Pirms partijas palaišanas pārbaudiet vienu detaļu katra veida uz mašīnas.
3. Pārbaudiet, kā jūsu programmatūra nolasa flanšu y koordinātes un kanālu virsmas: DetailCraft mēra flanšu y no aizmugurējās malas un guldina kanālus uz muguras, kā to paredz standarts (skatiet [NC faila lauki](topic:nc1-fields#faces-and-coordinates)).
