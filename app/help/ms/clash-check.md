---
title: Semak pertembungan
summary: Cari anggota, plat dan tapak asas yang saling masuk ke dalam satu sama lain, dengan meninggalkan bahagian yang sepatutnya bertemu dalam sambungan, dan pergi ke setiap pertembungan.
keywords: pertembungan, semak pertembungan, perlanggaran, gangguan, pertindihan, bersilang, pertembungan keras, koordinasi, semak model
from: 04d72d3b
---

Buka tab {{ui:Pertembungan}} di bawah paparan dan pilih {{ui:Semak sekarang}}. DetailCraft melihat setiap pasangan bahagian dalam fasa yang ditunjukkan: keluli ke keluli, dan keluli ke tapak asas. Tab itu menyenaraikan setiap pertembungan, yang paling dalam dahulu, dengan:

- dua bahagian, mengikut tanda bahagian (atau tanda tapak asas) dan profil;
- **Pertindihan (mm)**: sejauh mana satu titik bahagian berada di dalam bahagian yang lain, sehingga muka terdekat;
- **Berhampiran**: persilangan grid dan aras tempat ia berada, atau koordinatnya;
- {{ui:Tunjukkan}}: memilih kedua-dua bahagian dan membawa tempat itu ke tengah paparan.

Tajuk tab menunjukkan berapa banyak pertembungan yang ditemui oleh semakan terakhir. Semakan tidak berjalan dengan sendirinya: selepas anda menukar model, senarai memberitahu anda, dan {{ui:Semak sekarang}} menjalankannya semula.

## Apa yang bukan pertembungan

- Bahagian yang hanya bersentuhan: plat terhadap sayap, plat tapak di atas tapak asasnya, dua anggota hujung ke hujung. **{{ui:Toleransi (mm)}}** menetapkan sejauh mana dua bahagian boleh masuk ke dalam satu sama lain sebelum ia dikira (1 mm untuk permulaan; sehingga 50).
- Bahagian yang disambungkan oleh sambungan: plat hujung dengan rasuknya dan dengan sayap tiang yang dibolt padanya, rasuk dan tiang bagi sambungan itu, plat tapak dengan tiangnya, plat sambung dengan kedua-dua kepingan, tupang dengan gussetnya (alur tiub tidak dipotong dalam model). Sambungan itu bermaksud mereka bertemu.
- Cuping ricih plat tapak dalam tapak asas di bawahnya (ia terletak dalam poket grout).
- Bolt dan bolt sauh (ia melalui lubang) dan tetulang.
- Bahagian dalam fasa tersembunyi. Lihat [Fasa](topic:phases).

Tupang atau rasuk yang masuk ke dalam tiang tanpa sambungan antara keduanya **ialah** pertembungan: sambungan itu masih memerlukan sambungan. Tupang contoh rangka menunjukkan ini: ia tiada gusset. Pilih ia dan pilih {{ui:Gusset}} ([Plat gusset tupang](topic:brace-gussets)) dan pertembungannya hilang.

## Perkara yang perlu diketahui

- Pertindihan mengukur kedalaman ke dalam bahan, jadi anggota yang masuk ke dalam badan atau sayap nipis tiang hanya menunjukkan beberapa milimeter walaupun ia masuk jauh.
- Bahagian disemak seperti yang dipotong: potongan hujung dan potongan ke belakang rasuk di plat hujungnya diambil kira. Lubang tidak.
