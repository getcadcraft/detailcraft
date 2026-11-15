---
title: Bermula dengan DetailCraft
summary: Perkara yang DetailCraft lakukan hari ini, cara membukanya, dan model pertama daripada grid hingga lukisan bengkel dalam sepuluh minit.
keywords: mula, model pertama, pengenalan, pemerincian keluli, tetulang, mula pantas, tutorial, gambaran keseluruhan
from: e4f16bbe
---

DetailCraft ialah aplikasi pemerincian keluli dan tetulang dalam keluarga CadCraft. Anda membina model 3D bingkai keluli di atas grid dan aras, menyambungkannya, dan mendapatkan apa yang diperlukan bengkel: tanda bahagian dan himpunan, senarai bahan, lukisan bengkel bagi setiap bahagian, fail NC DSTV, model IFC, dan jadual lenturan bagi asas tapak.

Ini ialah binaan awal. Ia melakukan senarai kecil perkara dengan teliti dan bukannya segalanya sekaligus. Baca [Apa yang belum dibina](topic:not-built-yet) sebelum anda merancang kerja sebenar dengannya.

## Apa yang dilakukannya hari ini

- Grid dan aras yang anda taip, dalam milimeter.
- Tiang, rasuk, tupang dan plat daripada katalog profil yang diterbitkan (AISC W, S, C, L, HSS dan Pipe; IPE, HEA, HEB dan UPN Eropah; UB, UC, PFC, EA, UEA, SHS, RHS dan CHS UK), serta profil parametrik anda sendiri.
- Dua sambungan: sambungan plat hujung berbolt dari rasuk ke sayap tiang, dan plat tapak tiang dengan empat rod sauh. Setiap satu boleh disalin ke setiap sambungan yang serupa.
- Lubang dan potongan hujung yang ditaip mengikut kedudukan.
- Asas tapak pad segi empat tepat dengan tikar bawah dan bar permulaan.
- Tanda bahagian dan himpunan yang dikemas kini sendiri selepas setiap perubahan.
- Eksport: IFC4, fail NC DSTV (bentuk-I dan plat), senarai bahan sebagai CSV, jadual lenturan sebagai CSV, dan lukisan bengkel PDF bagi satu bahagian.

## Buka DetailCraft

1. Buka DetailCraft dalam pelayar desktop: Chrome, Edge, Firefox atau Safari. Lihat [Pelayar dan komputer](common:browsers).
2. Tunggu sehingga skrin penuh. Bar status di bawah memaparkan "Ready. Open the Sample, or set grids and levels and start placing members."

Paparan model memerlukan grafik 3D (WebGL). Jika bahagian tengah skrin memaparkan "This browser could not start 3D graphics (WebGL)", lihat [Penyelesaian masalah](topic:troubleshooting#the-3d-view-is-missing).

:::note
Model anda kekal dalam komputer anda. Membuka model membacanya dalam pelayar, dan menyimpan memuat turun fail. Tiada apa-apa dimuat naik. Simpanan awan belum tersedia. Lihat [Di mana fail anda disimpan](common:your-files). Untuk menggunakan DetailCraft tanpa sambungan kemudian, pilih {{ui:Save for offline}} dalam bar aplikasi sekali semasa dalam talian; lihat [Bekerja secara luar talian](common:offline).
:::

:::offline
Anda sedang luar talian. DetailCraft berfungsi tanpa sambungan hanya jika ia telah disimpan untuk kegunaan luar talian dahulu: butang {{ui:Save for offline}} dalam bar aplikasi kemudian memaparkan {{ui:Offline ready}}. Lihat [Bekerja secara luar talian](common:offline).
:::

## Lihat sampel dahulu

Cara terpantas untuk melihat apa yang DetailCraft hasilkan ialah bingkai sampel.

1. Pilih {{ui:Sample}} dalam kumpulan {{ui:File}} bar alat.
2. Paparan menunjukkan bingkai dua bay: enam tiang dengan plat tapak, empat rasuk dengan plat hujung, satu tupang dan tujuh asas tapak dengan tetulang.
3. Klik satu rasuk. Panel {{ui:Properties}} di sebelah kanan menunjukkan tanda bahagiannya, panjang potongan, berat dan lubang yang dibuat oleh plat hujung.
4. Buka tab {{ui:Bill of materials}} di bahagian bawah untuk melihat setiap tanda bahagian dengan bilangan dan beratnya.

Panduan langkah demi langkah [Terokai bingkai sampel](topic:sample-model) menerangkannya bahagian demi bahagian.

## Model pertama anda

Model baharu sudah mempunyai grid 1 hingga 3 mengikut A hingga B pada 6000 mm dan dua aras, Level 1 pada 0 dan Level 2 pada 4000.

1. Pilih {{ui:New}}. Jika model semasa mempunyai perubahan, DetailCraft bertanya sama ada hendak menyimpannya dahulu.
2. Pilih {{ui:Plan}} di atas paparan. Senarai aras di sebelahnya memilih Level 1.
3. Pilih {{ui:Column}} dalam bar alat, atau tekan {{key:C}}.
4. Klik persilangan grid A/1. Tiang W12x50 muncul dari Level 1 hingga Level 2. Bar status memaklumkan di mana ia diletakkan.
5. Klik B/1, A/2 dan B/2 untuk meletakkan tiga lagi.
6. Pilih Level 2 dalam senarai aras, kemudian pilih {{ui:Beam}} atau tekan {{key:B}}.
7. Klik A/1, kemudian A/2. Rasuk W16x26 menyambungkan dua hujung tiang, dengan bahagian atas keluli pada aras.
8. Tekan {{key:Esc}} untuk kembali ke {{ui:Select}}, kemudian klik rasuk itu.
9. Pilih {{ui:End plates}} dalam kumpulan {{ui:Connect}}. Kedua-dua hujung mendapat plat hujung berbolt, rasuk dipotong semula untuk muat, dan plat hujung pertama kini dipilih.
10. Klik rasuk itu sekali lagi.
11. Pilih {{ui:Shop drawing}} dalam kumpulan {{ui:Output}}. Pratonton lukisan bengkel rasuk dibuka. Pilih {{ui:Download PDF}}.
12. Tekan {{key:Mod+S}} untuk menyimpan model. Pelayar memuat turun `Untitled.detailcraft.json`.

Namakan semula model dalam medan {{ui:Name}} di bahagian atas kiri sebelum anda menyimpan, supaya fail dan setiap eksport membawa namanya.

## Ke mana seterusnya

- [Lawatan skrin](topic:workspace)
- [Sediakan grid dan aras](topic:grids-and-levels)
- [Bergerak dalam paparan 3D](topic:navigate-3d), dengan tetikus, pad sentuh atau skrin sentuh
- [Datang daripada perisian pemerincian lain](topic:coming-from), jika anda biasa dengan pakej pemerincian besar
- [Menggunakan bantuan ini](common:help)
