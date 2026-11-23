---
title: Yang baru di 0.9 (sebelumnya)
summary: Ukuran baja Inggris dari Blue Book dan siku tak sama kaki, gambar kerja untuk setiap part dalam satu set PDF, Profil saya untuk penampang kustom, P-Delta dan frekuensi alami, beban angin ASCE 7, lokasi dan kombinasi seismik, serta kursor langsung dengan Ikuti.
keywords: yang baru 0.9, rilis sebelumnya, yang baru, catatan rilis, changelog, 0.9, baja Inggris, uk steel, blue book, ub, uc, pfc, shs, rhs, chs, siku tak sama kaki, unequal angle, gambar kerja, shop drawing, lembar, tanda part, part mark, pdf, profil saya, my profiles, profil kustom, custom profile, p-delta, orde kedua, second order, frekuensi alami, natural frequency, elemen hingga, finite elements, massa modal, modal mass, beban angin, wind load, asce 7, seismik, seismic, kelas situs, usgs, kombinasi beban, load combinations, lrfd, asd, live, kursor, cursors, ikuti, follow, orang, people, tooltip, yang baru, changelog, perubahan, 0.8, 0.8.1, versi, fitur baru, ereksi, erection, crane, bagan beban, load chart, film, movie, autopilot, sambungan, connections, tulangan, rebar, kepadatan, congestion, fondasi, foundation, footing, mat, penurunan, settlement, rangka, framing, kayu, timber, light-gauge, daftar potong, cut list, kemudahan konstruksi, constructability, akses las, weld access, pemasok, supplier, stok, stock, waktu tunggu, lead time, apa yang rusak lebih dulu, what breaks first, beton, concrete, slab, bahasa, languages, asisten, assistant
from: ab0c7f05
---

Ini adalah perubahan di DetailCraft 0.9 dibandingkan dengan 0.8.1. 0.9 menghadirkan ukuran baja Inggris, gambar kerja untuk setiap part sekaligus, tab {{ui:Analisis}} yang lebih besar untuk rangka, dan tampilan kursor satu sama lain saat Anda bekerja bersama.

## Baru

### Baja Inggris dan gambar kerja

- **Ukuran baja Inggris.** Daftar profil kini memuat 976 ukuran dari Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS, dan RHS, dengan penampang berongga dingin dipisahkan (namanya diawali CF). Nama ditulis dimulai dari keluarganya, seperti UB305x165x40 atau SHS100x100x5.0, dan mengetik seperti yang tertulis di gambar juga berfungsi: 305x165x40 UB, L100x100x10, SHS100x5. Lihat [Katalog profil](topic:profile-catalog).
- **Siku tak sama kaki.** Siku UEA mempertahankan kedua kakinya melalui IFC masuk dan keluar serta melalui file NC, dan pencerminan membalik potongan dari ujung ke ujung.
- **Semua gambar kerja sekaligus.** Pilih {{ui:Gambar kerja}} di grup {{ui:Keluaran}} tanpa ada yang dipilih. Jendela ini mendaftar setiap tanda part, menampilkan pratinjau dari salah satunya, dan {{ui:Unduh semua}} menyimpan satu PDF dengan satu halaman per tanda, masing-masing berjudul "Lembar 3 dari 42". {{ui:Unduh PDF}} menyimpan lembar yang sedang Anda lihat. Kanal, siku, dan penampang berongga kini juga mendapat lembar. Lihat [Buat gambar kerja](topic:shop-drawings).
- **Profil saya.** Profil kustom kini dapat disimpan untuk setiap model baru. Di formulir profil kustom, biarkan {{ui:Simpan di Profil saya}} dicentang; daftar {{ui:Profil saya}} di bawahnya memiliki {{ui:Simpan}}, {{ui:Gunakan di sini}}, dan {{ui:Keluarkan}}. Daftar disimpan di peramban ini (hingga 200), bukan di akun Anda. Lihat [Pelat dan profil](topic:plates-and-profiles).

### Analisis

- **Orde kedua (P-Delta).** Centang {{ui:Orde kedua (P-Delta)}} di samping Jalankan di tab {{ui:Analisis}}, dan gaya aksial bekerja pada rangka yang melendut. Pelat dan lantai kaku tetap orde pertama, disertai peringatan. Lihat [Gaya, reaksi, dan lendutan](topic:frame-analysis).
- **Frekuensi alami.** Blok {{ui:Elemen hingga: frekuensi alami}} di bawah hasil menemukan mode terendah dari model yang sama, beserta periode dan massa modal efektif, dan menampilkan satu mode pada model. Lihat [Gaya, reaksi, dan lendutan](topic:frame-analysis).
- **Beban angin dan lokasi seismik.** Tiga blok baru di tab {{ui:Analisis}}: {{ui:Beban angin (prosedur arah ASCE 7)}}, {{ui:Lokasi dan sistem seismik (ASCE 7)}}, dan {{ui:Kombinasi beban ASCE 7}}. Lihat [Angin, lokasi seismik, dan kombinasi ASCE 7](topic:wind-seismic-combinations).

### Bekerja bersama

- **Kursor dan nama.** Dalam sesi Live, penunjuk setiap orang digambar di model bersama nama dan warnanya, dan apa yang mereka pilih mendapat kotak.
- **Ikuti seseorang.** Buka {{ui:Orang}} di sesi dan pilih {{ui:Ikuti}} pada sebuah nama; tampilan Anda bergerak mengikuti mereka. Host dapat memilih {{ui:Minta semua orang mengikuti saya}}. Lihat [Ikuti seseorang dalam sesi Live](topic:follow-in-live).

### Di setiap aplikasi

- Tooltip adalah tooltip Bootstrap, kartu tips awal memiliki tombol tutup, deretan tab bergulir ke samping saat tidak muat, dan tab peramban menampilkan nama dokumen yang terbuka diikuti DetailCraft dan CadCraft.

## Diperbaiki

- Profil kustom hilang saat Anda memulai model baru.
- Kanal, siku, dan penampang berongga tidak ada dalam set gambar kerja.

## Batasan yang jujur

- Blok angin, seismik, dan elemen hingga adalah bantuan pemeriksaan. Insinyur Anda meninjau hasilnya; itu bukan pemeriksaan standar. Pencarian USGS diuji dengan pengganti, bukan dengan layanan langsung.
- Elemen hingga dan P-Delta diperiksa terhadap hitungan manual dan jawaban bentuk tertutup, bukan terhadap bangunan sungguhan. Analisis tekuk belum dibuat.
- Belum ada fabrikator Inggris yang mencoba ukuran baja Inggris, dan file NC untuk siku tak sama kaki belum dijalankan di mesin.
- Set gambar kerja hanya PDF.
- Bahasa selain Inggris adalah draf mesin.
- Installer Windows tidak ditandatangani kodenya (Info selengkapnya, lalu Tetap jalankan); image disk macOS tidak dinotarisasi (klik kanan, lalu Buka).

Perubahan sebelumnya ada di catatan 0.8 dan 0.8.1 di bawah halaman ini.

## Sebelumnya: 0.8 dan 0.8.1

Ini adalah perubahan di DetailCraft 0.8 (1 November 2026) dan 0.8.1 (2 November 2026), dibandingkan dengan 0.7. 0.7 memeriksa batang baja; 0.8 merencanakan pengangkatan, mengusulkan sambungan, memeriksa fondasi dan tulangan, serta membuat rangka dinding, lantai, dan atap dari kayu dan light-gauge.

### Baru

**Ereksi**

- **Rencana ereksi dan film.** Di tab {{ui:Ereksi}}, jelaskan sebuah crane (di mana ia berdiri, kait tertingginya, perlengkapan angkat yang tidak ada di bagan), lalu ketik baris-baris bagan bebannya. DetailCraft mengangkat model satu rakitan sekali waktu, berurutan sesuai fase dan tingkat demi tingkat, dan memeriksa setiap pengangkatan terhadap bagan pada radiusnya serta terhadap margin yang Anda atur. {{ui:Simpan film}} menulis satu file HTML yang dapat diputar secara offline di peramban mana pun, termasuk di ponsel. Pengangkatan yang melebihi bagan, di luar jangkauannya, atau terlalu tinggi tercantum di {{ui:Masalah}}. Ini adalah rencana dari angka Anda, bukan rencana pengangkatan. Lihat [Rencana ereksi dan film](topic:erection-movie).

**Sambungan**

- **Autopilot sambungan.** Tab {{ui:Autopilot}} memeriksa setiap sambungan yang belum punya sambungan dan mengusulkan satu dari bentuknya: pelat dasar, pelat geser, pelat ujung untuk balok yang Anda tandai sebagai balok momen, sambungan lewatan, dan pelat buhul. Beri beban merata atau satu geser ujung, dan jumlah baut mengikuti kekuatan desain bautnya. {{ui:Tambahkan semuanya}} menambahkan usulan sebagai satu langkah urungkan. Itu adalah nilai awal untuk ditinjau, bukan desain sambungan.
- **Pemeriksaan kemudahan konstruksi.** {{ui:Masalah}} untuk baut yang tidak dapat dijangkau kunci, baut yang terlalu dekat untuk soket, las fillet di luar batas ukurannya, dan penampang berongga yang menampung air. Akses las adalah hal baru: las fillet keliling yang tidak dapat dijangkau obor las tercantum beserta bagian yang menghalangi dan proporsi las yang terdampak. Lihat [Pemeriksaan kemudahan konstruksi](topic:constructability).

**Fondasi dan tulangan**

- **Pemeriksaan fondasi.** Tab {{ui:Fondasi}} memeriksa pondasi telapak, pondasi telapak gabungan, dan pelat fondasi (mat) pada tanah yang Anda deskripsikan: daya dukung, geser, dan guling akibat beban layan; lentur, geser, punching, panjang penyaluran, dan tulangan minimum dari beban terfaktor (ACI 318-19). Kolom dekat tepi atau sudut diperiksa dengan penampang yang terpotong oleh tepi pondasi. Penurunan berasal dari modulus tanah, pelat fleksibel diselesaikan di atas pegas dari modulus subgrade, dan kelompok tiang serta dinding penahan tanah memiliki panel sendiri. Beban kolom dapat diketik atau diambil dari {{ui:Analisis}}. Lihat [Pemeriksaan fondasi](topic:foundation-checks).
- **Peta kepadatan tulangan.** Tab {{ui:Kepadatan}} menggambar peta panas setiap pondasi dilihat dari atas: di mana batang tulangan menyisakan ruang terlalu sedikit bagi beton untuk turun, dibandingkan dengan aturan jarak bersih dan, jika Anda memasukkannya, agregat terbesar dan kepala vibrator. Lihat [Peta kepadatan tulangan](topic:rebar-congestion).

**Rangka dan pasokan**

- **Rangka kayu dan light-gauge.** Tab {{ui:Rangka}} membuat rangka panel dinding, lantai, dan atap dengan setiap potongan, daftar potong, stok yang harus dibeli, dan gambar kerja berskala. {{ui:Tempatkan sebagai batang}} memasukkan potongan-potongan ke dalam model, dan {{ui:Lembar PDF}} menyimpan satu lembar untuk setiap panel. Ukuran, jarak, dan header ditentukan oleh Anda: DetailCraft tidak memeriksa bahwa semuanya memikul beban. Lihat [Panel rangka kayu dan light-gauge](topic:framing-panels).
- **Stok pemasok dan waktu tunggu.** Tab {{ui:Pasokan}} membaca daftar stok pemasok (CSV) dan menampilkan, untuk setiap profil yang dibeli daftar potong, apakah stoknya cukup dan berapa lama tunggunya. Kekurangan dan profil yang terlambat tercantum di {{ui:Masalah}}. Tidak ada yang dipesan. Lihat [Stok pemasok dan waktu tunggu](topic:supplier-stock).

**Analisis dan desain**

- **Apa yang rusak lebih dulu?** Di tab {{ui:Analisis}}, tombol ini menemukan kombinasi kekuatan yang menentukan, batang terlemah, seberapa jauh beban dapat bertambah sebelum batang pertama mencapai batasnya, dan pelat ujung atau pelat geser terlemah jika kekuatan geser bautnya diketahui. Ini memerlukan kombinasi dan standar desain terlebih dahulu. Tumpu, geser blok, las, dan prying tidak diperiksa. Asisten AI yang terhubung dengan Anda juga dapat menanyakan hal yang sama.
- **Live.** Centang {{ui:Live: selesaikan ulang setelah setiap pengeditan}} dan rangka akan diselesaikan ulang setelah setiap pengeditan.
- **Beton, dan lainnya.** Kolom langsing pada rangka tanpa goyangan didesain untuk momen yang diperbesar (ACI 318-19 6.6.4.5). Periode seismik dapat diambil dari analisis dengan metode Rayleigh. Pelat yang dibuat dari pelat-pelat mendapat tulangan yang dibutuhkan tiap lapisan dari momennya, serta geser satu arah. Lihat [Periksa batang beton dan buat beban seismik](topic:concrete-and-seismic).
- **Untuk diperiksa insinyur.** Hasil fondasi, beton, dan Apa yang rusak lebih dulu adalah bantuan. Beban angin belum dibuat.

**Di setiap aplikasi**

- **Bahasa.** Bantuan tersedia dalam 54 bahasa. Yang selain Inggris adalah draf mesin sampai penutur asli membacanya; sepuluh bahasa baru (Lituania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipina, Swahili, Uzbek).
- **Baris bilah alat.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Baris bilah alat}} memilih bungkus (wrap), 2 baris, atau 1 baris. Bilah yang sudah muat tetap seperti semula; yang lain bergulir ke samping.
- **Kisi properti.** Kolom isian pondasi memakai kisi bersama: kategori yang dapat diciutkan dan kepadatan ringkas. Hitungan yang diketik seperti 2*450 tetap berfungsi.
- **Perangkat input.** Trackpad, pena, mouse 3D, pengendali, dan MIDI dapat mengendalikan aplikasi. Lihat [Navigasi di 3D](topic:navigate-3d).
- **Panel masalah.** Peringatan dari pemeriksaan baru di atas muncul di panel {{ui:Masalah}} yang sama seperti sebelumnya.
- **Hubungkan AI Anda.** Asisten Anda sendiri, yang terhubung melalui CadCraft Studio, bekerja dengan kedelapan aplikasi dan hanya melihat apa yang Anda izinkan. Hubungkan dengan satu klik, konektor yang dihosting, dan API key Anda sendiri di Studio masih belum tersedia. Lihat [Gunakan DetailCraft dengan asisten AI](topic:use-with-ai-assistants).

### Diperbaiki di 0.8.1

- **Bahasa di Studio.** Studio dan edisi kemasan dapat berganti bahasa saat dijalankan; sebelumnya hanya bahasa Inggris. Ini belum diuji di setiap platform: beri tahu kami jika bahasanya tidak berubah.
- **Pilih dengan jendela silang.** Installer 0.8.1 sudah membawa perilaku pilih-dengan-jendela yang benar seperti di build web 0.8; installer yang lebih lama tidak.
- **Tablet dalam potret.** Sisa tinggi kisi diberikan ke kanvas, dan tata letak lembar mulai pada 760 px atau kurang.

### Belum ada di versi ini

- **Kirim NC ke mesin** belum dirilis.
- **Beban angin** untuk beton belum dibuat, dan pemeriksaan beton serta fondasi perlu ditinjau insinyur.
- **Penandatanganan kode.** Installer Windows dan .dmg macOS tidak ditandatangani, sehingga Windows mungkin memberi peringatan dan macOS meminta klik kanan, lalu Buka.

Perubahan sebelumnya ada di [Yang baru di 0.7](topic:whats-new-0-7).
