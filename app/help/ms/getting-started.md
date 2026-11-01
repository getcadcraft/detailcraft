---
title: Bermula dengan DetailCraft
summary: Apa yang DetailCraft lakukan hari ini, cara membukanya, dan model pertama daripada grid hingga lukisan bengkel dalam sepuluh minit.
keywords: mula, model pertama, pengenalan, perincian keluli, tetulang, mula pantas, tutorial, gambaran keseluruhan
from: 3682c0d8
---

DetailCraft ialah aplikasi perincian keluli dan tetulang dalam keluarga CadCraft. Anda membina model 3D rangka keluli pada grid dan aras, menyambungkannya, dan mendapatkan apa yang diperlukan bengkel: tanda bahagian dan himpunan, senarai bahan, lukisan bengkel bagi satu bahagian, fail NC DSTV, model IFC, dan jadual lenturan untuk tapak asas.

Ini ialah binaan awal. Ia melakukan senarai pendek perkara dengan teliti dan bukannya semua sekaligus. Baca [Apa yang belum dibina](topic:not-built-yet) sebelum anda merancang kerja sebenar berdasarkannya.

## Apa yang dilakukannya hari ini

- Grid dan aras yang anda taip, dalam milimeter.
- Tiang, rasuk, tupang dan plat daripada katalog profil yang diterbitkan (AISC W, S, C, L, HSS dan Pipe; IPE, HEA, HEB dan UPN Eropah), serta profil berparameter anda sendiri.
- Dua sambungan: plat hujung berbolt dari rasuk ke flens tiang, dan plat tapak tiang dengan empat bolt sauh. Setiap satu boleh disalin ke setiap sambungan yang serupa.
- Lubang dan potongan hujung ditaip mengikut kedudukan.
- Tapak asas pad segi empat tepat dengan jejaring bawah dan bar penyambung.
- Tanda bahagian dan himpunan yang dikemas kini sendiri selepas setiap perubahan.
- Eksport: IFC4, fail NC DSTV (bentuk-I dan plat), senarai bahan sebagai CSV, jadual lenturan sebagai CSV, dan PDF lukisan bengkel bagi satu bahagian.

## Buka DetailCraft

1. Buka DetailCraft dalam pelayar desktop: Chrome, Edge, Firefox atau Safari. Lihat [Pelayar dan komputer](common:browsers).
2. Tunggu sehingga skrin penuh. Bar status di bahagian bawah menunjukkan "Sedia. Buka Sampel, atau tetapkan grid dan aras dan mula meletakkan ahli."

Paparan model memerlukan grafik 3D (WebGL). Jika bahagian tengah skrin menunjukkan "Pelayar ini tidak dapat memulakan grafik 3D (WebGL)", lihat [Penyelesaian masalah](topic:troubleshooting#the-3d-view-is-missing).

:::note
Model anda kekal dalam komputer anda. Membuka model membacanya dalam pelayar, dan menyimpan memuat turun fail. Tiada apa-apa dimuat naik. Simpanan awan belum tersedia. Lihat [Di mana fail anda pergi](common:your-files). Untuk menggunakan DetailCraft tanpa sambungan kemudian, pilih {{ui:Simpan untuk luar talian}} dalam bar aplikasi sekali semasa dalam talian; lihat [Bekerja luar talian](common:offline).
:::

:::offline
Anda luar talian. DetailCraft berfungsi tanpa sambungan hanya jika ia disimpan untuk kegunaan luar talian dahulu: butang {{ui:Simpan untuk luar talian}} dalam bar aplikasi kemudian memaparkan {{ui:Sedia untuk luar talian}}. Lihat [Bekerja luar talian](common:offline).
:::

## Lihat sampel dahulu

Cara terpantas untuk melihat apa yang DetailCraft hasilkan ialah rangka sampel.

1. Pilih {{ui:Sampel}} dalam kumpulan {{ui:Fail}} pada bar alat.
2. Paparan menunjukkan rangka dua bay: enam tiang dengan plat tapak, empat rasuk dengan plat hujung, satu tupang dan tujuh tapak asas dengan tetulang.
3. Klik rasuk. Panel {{ui:Sifat}} di sebelah kanan menunjukkan tanda bahagiannya, panjang potongan, berat dan lubang yang dibuat oleh plat hujung.
4. Buka tab {{ui:Senarai bahan}} di bahagian bawah untuk melihat setiap tanda bahagian dengan bilangan dan beratnya.

Panduan langkah demi langkah [Teroka rangka sampel](topic:sample-model) membincangkannya bahagian demi bahagian.

## Model pertama anda

Model baharu sudah mempunyai grid 1 hingga 3 mengikut A hingga B pada 6000 mm dan dua aras, Aras 1 pada 0 dan Aras 2 pada 4000.

1. Pilih {{ui:Baharu}}. Jika model semasa mempunyai perubahan, DetailCraft bertanya sama ada hendak menyimpannya dahulu.
2. Pilih {{ui:Pelan}} di atas paparan. Senarai aras di sebelahnya memilih Aras 1.
3. Pilih {{ui:Tiang}} pada bar alat, atau tekan {{key:C}}.
4. Klik persilangan grid A/1. Tiang W12x50 muncul dari Aras 1 ke Aras 2. Bar status menyatakan ke mana ia pergi.
5. Klik B/1, A/2 dan B/2 untuk meletakkan tiga lagi.
6. Pilih Aras 2 dalam senarai aras, kemudian pilih {{ui:Rasuk}} atau tekan {{key:B}}.
7. Klik A/1, kemudian A/2. Rasuk W16x26 menyambung dua hujung atas tiang, dengan bahagian atas keluli pada aras.
8. Tekan {{key:Esc}} untuk kembali ke {{ui:Pilih}}, kemudian klik rasuk.
9. Pilih {{ui:Plat hujung}} dalam kumpulan {{ui:Sambung}}. Kedua-dua hujung mendapat plat hujung berbolt, rasuk dipotong semula untuk dipadankan, dan plat hujung pertama kini dipilih.
10. Klik rasuk sekali lagi.
11. Pilih {{ui:Lukisan bengkel}} dalam kumpulan {{ui:Output}}. Pratonton lukisan bengkel rasuk dibuka. Pilih {{ui:Muat turun PDF}}.
12. Tekan {{key:Mod+S}} untuk menyimpan model. Pelayar memuat turun `Untitled.detailcraft.json`.

Namakan semula model dalam medan {{ui:Nama}} di bahagian atas kiri sebelum anda menyimpan, supaya fail dan setiap eksport membawa namanya.

## Ke mana seterusnya

- [Lawatan skrin](topic:workspace)
- [Tetapkan grid dan aras](topic:grids-and-levels)
- [Bergerak di sekitar paparan 3D](topic:navigate-3d), dengan tetikus, pad sentuh atau skrin sentuh
- [Datang daripada perisian perincian lain](topic:coming-from), jika anda biasa dengan pakej perincian besar
- [Menggunakan bantuan ini](common:help)
