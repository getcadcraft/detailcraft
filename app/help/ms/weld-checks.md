---
title: Semak kimpalan di tempat anggota bertemu
summary: Selepas semakan reka bentuk, uji kimpalan fillet dan butt di sekeliling setiap anggota di tempat ia bertemu anggota lain atau penyokong, mengikut AISC 360-16 Bab J atau EN 1993-1-8, dan lihat kumpulan kimpalan yang paling banyak digunakan serta di bawah kombinasi yang mana. Bantuan sehingga jurutera telah menyemaknya.
keywords: kimpalan, semakan kimpalan, kimpalan fillet, kimpalan butt, penembusan penuh, AISC 360, EN 1993-1-8, kumpulan kimpalan, penggunaan, utilisation, utilization, kapasiti, sambungan, struktur, jurutera
from: e8eebbe6
---

Blok {{ui:Semakan kimpalan}} dalam tab {{ui:Analisis}}, di bawah {{ui:Semakan reka bentuk}}, mengambil daya bagi rangka yang terakhir diselesaikan dan kombinasi kekuatan yang anda buat, dan menguji kimpalan di sekeliling setiap anggota pada setiap sambungan: di tempat anggota bertemu anggota lain, atau berdiri di atas penyokong.

:::warning
Ia ialah **bantuan sehingga jurutera telah menyemaknya**. Ia menyemak kimpalan yang dilukis di sekeliling keratan, sebagai satu kumpulan, daripada daya hujung rangka itu sendiri. Ia tidak membaca saiz atau panjang kimpalan yang anda lukis dalam lukisan bengkel, dan tidak menyemak bolt, plat, galas, ricihan blok atau pengungkitan (prying). Keputusannya bukan cop pengesahan.
:::

## Jalankan

1. Selesaikan rangka dalam tab {{ui:Analisis}} dan pilih {{ui:Kod reka bentuk}} dalam {{ui:Semakan reka bentuk}}, kemudian tekan {{ui:Buat kombinasi}} (semakan kimpalan memerlukan kombinasi kekuatan yang sama).
2. Dalam {{ui:Semakan kimpalan}}, tetapkan {{ui:Kaki fillet (mm, 0 = dinding, paling banyak 8)}}. 0 bermaksud kaki mengikut dinding terkecil keratan, sehingga 8 mm. Di bawah kod AISC, {{ui:Kekuatan logam kimpalan F_EXX (MPa)}} ialah kekuatan logam kimpalan (482.6 MPa ialah elektrod E70). Di bawah EN 1993, gred keluli memberikan kekuatan logam kimpalan dan faktor korelasi.
3. Tekan {{ui:Semak kimpalan}}.

Setiap baris jadual ialah satu kumpulan kimpalan (satu hujung sambungan bagi anggota). Nombornya: **penggunaan** semakan yang menentukan, keadaan (lulus atau gagal), dan semakan serta klausa mana yang menentukan di bawah kombinasi yang mana. Kumpulan yang tidak dapat dinilai oleh semakan menyatakan sebabnya (tiada gred keluli, tiada faktor korelasi bagi gred itu dalam EN 1993-1-8 Jadual 4.1, tiada kimpalan pada keratan itu) dan bukannya menunjukkan nombor.

Menukar kaki atau logam kimpalan, atau menyunting model, mengosongkan jadual: ia untuk nilai lama. Tekan {{ui:Semak kimpalan}} sekali lagi.

## Apa yang disemak

- **ASCE 7 + AISC 360:** logam kimpalan fillet (sudut beban ke kimpalan dikira, J2.4), ricihan keruntuhan logam asas (J4.2), dan kimpalan butt penembusan penuh (Jadual J2.5).
- **EN 1990 + EN 1993:** kimpalan fillet mengikut kaedah ringkas EN 1993-1-8 4.5.3.3 dan kimpalan butt daripada 4.7.1.
- Amaran perincian terhadap kaki minimum dan maksimum serta panjang minimum, dengan nilai yang dibandingkan.

Kumpulan kimpalan dianggap sebagai keratan garisan dan dibebani dengan kaedah vektor elastik: setiap bahagian kimpalan mengambil daya daripada daya paksi anggota, kedua-dua ricihan, kilasan dan kedua-dua momen lentur, ditambah sebagai vektor.

## Apa yang tidak disemak

Kimpalan penembusan separa, fillet senget, kimpalan palam dan slot, kimpalan berselang-seli, kaedah pusat seketika, kaedah arah EN, lesu dan ricihan blok logam asas belum dibina. Sebahagian pemalar piawaian ditulis daripada piawaian dan belum dibandingkan dengan salinan bercetak; laporan menyenaraikan dari mana setiap nombor datang ({{ui:Laporan (PDF)}} mendapat jadual kimpalan selepas anda membuat semakan). Lihat [Semak anggota keluli](topic:design-checks) dan [Belum dibina](topic:not-built-yet).
