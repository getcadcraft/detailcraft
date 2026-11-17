---
title: Yang baru di 0.9
summary: Ukuran baja UK dari Blue Book dan siku tidak sama, gambar kerja untuk setiap part dalam satu set PDF, Profil saya untuk penampang kustom, P-Delta dan frekuensi alami, beban angin ASCE 7, lokasi seismik dan kombinasinya, serta kursor langsung dengan Ikuti.
keywords: yang baru, catatan rilis, changelog, 0.9, baja UK, blue book, ub, uc, pfc, shs, rhs, chs, siku tidak sama, gambar kerja, set lembar, tanda part, pdf, profil saya, profil kustom, p-delta, orde kedua, frekuensi alami, elemen hingga, massa modal, beban angin, asce 7, seismik, kelas situs, usgs, kombinasi beban, lrfd, asd, live, kursor, ikuti, orang, tooltip, perubahan, 0.8, 0.8.1, versi, fitur baru, ereksi, crane, grafik beban, film, autopilot, sambungan, tulangan, kepadatan, fondasi, footing, mat, penurunan, rangka, kayu, light-gauge, daftar potong, kemudahan konstruksi, akses las, pemasok, stok, waktu tunggu, apa yang rusak lebih dulu, beton, slab, bahasa, asisten
from: 4c95a2de
---

Ini yang berubah di DetailCraft 0.9, dibandingkan dengan 0.8.1. 0.9 menghadirkan ukuran baja UK, gambar kerja untuk setiap part sekaligus, tab {{ui:Analisis}} yang lebih besar untuk rangka, dan tampilan kursor satu sama lain saat Anda bekerja bersama.

## Baru

### Baja UK dan gambar kerja

- **Ukuran baja UK.** Daftar profil kini memuat 976 ukuran dari Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS dan RHS, dengan penampang berongga dingin dipisahkan (namanya diawali CF). Nama ditulis dengan keluarganya lebih dulu, seperti UB305x165x40 atau SHS100x100x5.0, dan mengetiknya seperti yang tertulis di gambar juga berfungsi: 305x165x40 UB, L100x100x10, SHS100x5. Lihat [Katalog profil](topic:profile-catalog).
- **Siku tidak sama.** Siku UEA mempertahankan kedua kakinya melalui IFC masuk dan keluar serta melalui file NC, dan cerminkan membalik potongan dari ujung ke ujung.
- **Semua gambar kerja sekaligus.** Pilih {{ui:Gambar kerja}} di grup {{ui:Keluaran}} tanpa ada yang dipilih. Jendela menampilkan setiap tanda part, dapat mempratinjau salah satunya, dan {{ui:Unduh semua}} menyimpan satu PDF dengan satu halaman per tanda, masing-masing berjudul "Lembar 3 dari 42". {{ui:Unduh PDF}} menyimpan lembar yang sedang Anda lihat. Kanal, siku dan penampang berongga kini juga mendapat lembar. Lihat [Membuat gambar kerja](topic:shop-drawings).
- **Profil saya.** Profil kustom kini dapat disimpan untuk setiap model baru. Di formulir Profil kustom, biarkan {{ui:Simpan di Profil saya}} dicentang; daftar {{ui:Profil saya}} di bawahnya memiliki {{ui:Simpan}}, {{ui:Gunakan di sini}} dan {{ui:Keluarkan}}. Daftar disimpan di peramban ini (hingga 200), bukan di akun Anda. Lihat [Pelat dan profil](topic:plates-and-profiles).

### Analisis

- **Orde kedua (P-Delta).** Centang {{ui:Orde kedua (P-Delta)}} di sebelah {{ui:Jalankan}} pada tab {{ui:Analisis}}, dan gaya aksial bekerja pada rangka yang melendut. Pelat dan lantai kaku tetap orde pertama, dengan peringatan. Lihat [Gaya, reaksi dan lendutan](topic:frame-analysis).
- **Frekuensi alami.** Blok {{ui:Elemen hingga: frekuensi alami}} di bawah hasil menemukan mode terendah dari model yang sama, dengan periode dan massa modal efektif, serta menampilkan satu mode pada model. Lihat [Gaya, reaksi dan lendutan](topic:frame-analysis).
- **Beban angin dan lokasi seismik.** Tiga blok baru di tab {{ui:Analisis}}: {{ui:Beban angin (prosedur arah ASCE 7)}}, {{ui:Lokasi dan sistem seismik (ASCE 7)}} dan {{ui:Kombinasi beban ASCE 7}}. Lihat [Angin, lokasi seismik dan kombinasi ASCE 7](topic:wind-seismic-combinations).

### Bekerja bersama

- **Kursor dan nama.** Dalam sesi Live, penunjuk setiap orang digambar di model bersama nama dan warnanya, dan apa yang mereka pilih mendapat kotak.
- **Ikuti seseorang.** Buka {{ui:Orang}} dalam sesi dan pilih {{ui:Ikuti}} pada sebuah nama; tampilan Anda bergerak mengikuti tampilan mereka. Host dapat memilih {{ui:Minta semua orang mengikuti saya}}. Lihat [Ikuti seseorang dalam sesi Live](topic:follow-in-live).

### Di setiap aplikasi

- Tooltip adalah tooltip Bootstrap, kartu tips awal memiliki tombol tutup, deret tab bergulir ke samping saat tidak muat, dan tab peramban menampilkan nama dokumen yang terbuka, diikuti DetailCraft dan CadCraft.

## Diperbaiki

- Profil kustom hilang saat Anda memulai model baru.
- Kanal, siku dan penampang berongga tidak ada dalam set gambar kerja.

## Batasan yang jujur

- Blok angin, seismik dan elemen hingga adalah alat bantu pemeriksaan. Insinyur Anda meninjau hasilnya; blok ini bukan pemeriksaan standar. Pencarian USGS diuji dengan pengganti, bukan dengan layanan yang sedang berjalan.
- Elemen hingga dan P-Delta diperiksa terhadap perhitungan manual dan jawaban bentuk tertutup, bukan gedung nyata. Analisis tekuk belum dibuat.
- Belum ada fabrikator UK yang mencoba ukuran UK, dan file NC untuk siku tidak sama belum pernah dijalankan di mesin.
- Set gambar kerja hanya berformat PDF.
- Bahasa selain Inggris adalah draf mesin.
- Installer Windows tidak ditandatangani kodenya (Info lainnya, lalu Tetap jalankan); image disk macOS belum dinotarisasi (klik kanan, lalu Buka).

Perubahan sebelumnya ada di catatan 0.8 dan 0.8.1 di bagian bawah halaman ini.

## Sebelumnya: 0.8 dan 0.8.1

Ini yang berubah di DetailCraft 0.8 (1 November 2026) dan 0.8.1 (2 November 2026), dibandingkan dengan 0.7. 0.7 memeriksa batang baja; 0.8 merencanakan pengangkatan, mengusulkan sambungan, memeriksa fondasi dan tulangan, serta membingkai dinding, lantai dan atap kayu serta light-gauge.

### Baru

**Ereksi**

- **Rencana ereksi dan film.** Di tab {{ui:Ereksi}}, jelaskan crane (di mana ia berdiri, kaitnya yang tertinggi, rigging yang tidak ada di grafik) dan ketik baris-baris grafik beban miliknya. DetailCraft mengangkat model satu rakitan per waktu, sesuai urutan fase dan tingkat demi tingkat, dan memeriksa setiap pengangkatan terhadap grafik pada radiusnya serta margin yang Anda atur. {{ui:Simpan film}} menulis satu file HTML yang dapat diputar secara luring di peramban apa pun, termasuk di ponsel. Pengangkatan yang melebihi grafik, melewatinya, atau terlalu tinggi tercantum di {{ui:Masalah}}. Ini adalah rencana dari angka Anda, bukan rencana pengangkatan. Lihat [Rencana ereksi dan film](topic:erection-movie).

**Sambungan**

- **Autopilot sambungan.** Tab {{ui:Autopilot}} memeriksa setiap sambungan yang belum memiliki sambungan dan mengusulkan satu dari bentuknya: pelat dasar, pelat geser (shear tab), pelat ujung untuk balok yang Anda tandai sebagai balok momen, sambungan lewatan dan pelat buhul. Berikan beban merata atau satu gaya geser ujung, dan jumlah baut mengikuti kekuatan desain baut. {{ui:Tambahkan semuanya}} menambahkan usulan sebagai satu langkah urungkan. Itu adalah nilai awal untuk ditinjau, bukan desain sambungan.
- **Pemeriksaan kemudahan konstruksi.** {{ui:Masalah}} untuk baut yang tidak terjangkau kunci pas, baut yang terlalu dekat untuk soket, las fillet di luar batas ukurannya, dan penampang berongga yang menampung air. Akses las adalah hal baru: las fillet keliling yang tidak dapat dijangkau obor las dicantumkan beserta part yang menghalangi dan bagian las yang terdampak. Lihat [Pemeriksaan kemudahan konstruksi](topic:constructability).

**Fondasi dan tulangan**

- **Pemeriksaan fondasi.** Tab {{ui:Fondasi}} memeriksa fondasi telapak, fondasi telapak gabungan, dan pelat fondasi pada tanah yang Anda jelaskan: daya dukung, geser dan guling dari beban layan; lentur, geser, geser pons, panjang penyaluran dan tulangan minimum dari beban terfaktor (ACI 318-19). Kolom dekat tepi atau sudut diperiksa dengan penampang yang terpotong oleh tepi fondasi. Penurunan berasal dari modulus tanah, pelat fleksibel diselesaikan pada pegas dari modulus dasar, dan kelompok tiang serta dinding penahan memiliki panelnya sendiri. Beban kolom dapat diketik atau diambil dari {{ui:Analisis}}. Lihat [Pemeriksaan fondasi](topic:foundation-checks).
- **Peta kepadatan tulangan.** Tab {{ui:Kepadatan}} menggambar peta panas setiap fondasi telapak dari atas: di mana batang tulangan menyisakan terlalu sedikit ruang bagi beton untuk turun, terhadap aturan jarak bersih dan, jika Anda memberikannya, agregat terbesar dan kepala vibrator. Lihat [Peta kepadatan tulangan](topic:rebar-congestion).

**Rangka dan pasokan**

- **Rangka kayu dan light-gauge.** Tab {{ui:Rangka}} membingkai panel dinding, lantai dan atap dengan setiap potongan, daftar potong, stok yang harus dibeli, dan gambar kerja dalam skala. {{ui:Tempatkan sebagai batang}} menempatkan potongan-potongan ke dalam model, dan {{ui:Lembar PDF}} menyimpan satu lembar untuk setiap panel. Ukuran, jarak dan header ditentukan oleh Anda: DetailCraft tidak memeriksa apakah panel itu memikul beban. Lihat [Panel rangka kayu dan light-gauge](topic:framing-panels).
- **Stok pemasok dan waktu tunggu.** Tab {{ui:Pasokan}} membaca daftar stok pemasok (CSV) dan menampilkan, untuk setiap penampang yang dibeli daftar potong, apakah stoknya cukup dan berapa lama waktu tunggunya. Kekurangan dan penampang yang terlambat tercantum di {{ui:Masalah}}. Tidak ada pesanan yang dibuat. Lihat [Stok pemasok dan waktu tunggu](topic:supplier-stock).

**Analisis dan desain**

- **Apa yang rusak lebih dulu?** Di tab {{ui:Analisis}}, tombol ini menemukan kombinasi kekuatan yang menentukan, batang terlemah, seberapa jauh beban dapat bertambah sebelum batang pertama mencapai batasnya, dan pelat ujung atau pelat geser terlemah jika kekuatan geser bautnya diketahui. Ia memerlukan kombinasi dan standar desain terlebih dahulu. Daya tumpu, geser blok, las dan prying tidak diperiksa. Asisten yang terhubung dapat meminta hal yang sama.
- **Live.** Centang {{ui:Live: selesaikan ulang setelah setiap pengeditan}} dan rangka diselesaikan ulang setelah setiap pengeditan.
- **Beton, lainnya.** Kolom langsing pada rangka tanpa goyangan dirancang untuk momen diperbesarnya (ACI 318-19 6.6.4.5). Periode seismik dapat diambil dari analisis dengan metode Rayleigh. Pelat lantai yang terbuat dari pelat mendapat baja yang dibutuhkan setiap lapisan dari momennya, serta geser satu arah. Lihat [Periksa elemen beton dan buat beban seismik](topic:concrete-and-seismic).
- **Untuk diperiksa insinyur.** Hasil fondasi, beton dan Apa yang rusak lebih dulu adalah alat bantu. Beban angin belum dibuat.

**Di setiap aplikasi**

- **Bahasa.** Bantuan tersedia dalam 54 bahasa. Bahasa selain Inggris adalah draf mesin sampai penutur asli membacanya; sepuluh di antaranya baru (Lituania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili, Uzbek).
- **Baris bilah alat.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Baris bilah alat}} memilih bungkus, 2 baris atau 1 baris. Bilah yang sudah muat tetap seperti semula; yang lain bergulir ke samping.
- **Kisi properti.** Kolom isian fondasi telapak memakai kisi properti bersama: kategori yang dapat diciutkan dan kepadatan padat. Aritmetika yang diketik, seperti 2*450, tetap berfungsi.
- **Perangkat input.** Trackpad, pena, mouse 3D, pengontrol dan MIDI dapat mengoperasikan aplikasi. Lihat [Navigasi di 3D](topic:navigate-3d).
- **Panel Masalah.** Peringatan dari pemeriksaan baru di atas muncul di panel {{ui:Masalah}} yang sama seperti sebelumnya.
- **Hubungkan AI Anda.** Asisten Anda sendiri, yang terhubung melalui CadCraft Studio, bekerja dengan kedelapan aplikasi dan hanya melihat yang Anda izinkan. Sambung dengan satu klik, konektor yang di-hosting, dan kunci API Anda sendiri di Studio masih akan datang. Lihat [Gunakan DetailCraft dengan asisten AI](topic:use-with-ai-assistants).

### Diperbaiki di 0.8.1

- **Bahasa di Studio.** Studio dan edisi kemasan dapat berganti bahasa saat dijalankan; sebelumnya hanya Inggris. Belum diuji di setiap platform: beri tahu kami jika bahasa tidak berubah.
- **Pilih dengan jendela silang.** Installer 0.8.1 membawa perilaku pilih-dengan-jendela yang sudah benar di build web 0.8; installer lama tidak.
- **Tablet dalam potret.** Tinggi kisi yang tersisa diberikan ke kanvas, dan tata letak lembar mulai pada 760 px atau kurang.

### Belum ada di versi ini

- **Kirim NC ke mesin** belum dirilis.
- **Beban angin** untuk beton belum dibuat, dan pemeriksaan beton dan fondasi perlu ditinjau insinyur.
- **Penandatanganan kode.** Installer Windows dan .dmg macOS tidak ditandatangani, sehingga Windows mungkin memberi peringatan dan macOS meminta klik kanan, lalu Buka.

Perubahan sebelumnya ada di [Yang baru di 0.7](topic:whats-new-0-7).
