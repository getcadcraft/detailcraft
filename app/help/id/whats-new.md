---
title: Yang baru di 0.8 dan 0.8.1
summary: Film ereksi dari tabel beban derek, autopilot sambungan, peta kepadatan tulangan, pemeriksaan fondasi, panel rangka kayu dan baja ringan, pemeriksaan kemudahan konstruksi dan akses las, stok pemasok, apa yang rusak lebih dulu, penyelesaian ulang langsung, pemeriksaan beton yang lebih lanjut, perbaikan 0.8.1.
keywords: yang baru, apa yang baru, catatan rilis, changelog, perubahan, 0.8, 0.8.1, versi, fitur baru, ereksi, derek, tabel beban, film, autopilot, sambungan, tulangan, kepadatan, fondasi, tikar, penurunan, rangka, kayu, baja ringan, daftar potong, kemudahan konstruksi, akses las, pemasok, stok, waktu tunggu, apa yang rusak dulu, langsung, beton, seismik, pelat, bahasa, asisten
from: 6e33e052
---

Ini adalah yang berubah di DetailCraft 0.8 (1 November 2026) dan 0.8.1 (2 November 2026), dibandingkan dengan 0.7. 0.7 memeriksa batang baja; 0.8 merencanakan pengangkatan, mengusulkan sambungan, memeriksa fondasi dan tulangan, serta membingkai dinding, lantai, dan atap kayu serta baja ringan.

## Baru

### Ereksi

- **Rencana ereksi dan film.** Di tab {{ui:Ereksi}}, jelaskan derek (di mana ia berdiri, kait tertingginya, dan rigging yang tidak ada di tabel), lalu ketik baris-baris tabel beban deleknya. DetailCraft mengangkat model satu rakitan pada satu waktu, sesuai urutan fase dan tingkat demi tingkat, lalu memeriksa setiap pengangkatan terhadap tabel pada radiusnya serta terhadap margin yang Anda atur. {{ui:Simpan film}} menulis satu file HTML yang dapat diputar luring di peramban mana pun, termasuk di ponsel. Pengangkatan yang melebihi tabel, melewatinya, atau terlalu tinggi dicantumkan di {{ui:Masalah}}. Ini adalah rencana berdasarkan angka Anda, bukan rencana pengangkatan. Lihat [Rencana ereksi dan film](topic:erection-movie).

### Sambungan

- **Autopilot sambungan.** Tab {{ui:Autopilot}} memeriksa setiap sambungan yang belum memiliki sambungan dan mengusulkannya dari bentuknya: pelat dasar, pelat geser, pelat ujung untuk balok yang Anda tandai sebagai balok momen, sambungan lewatan, dan pelat buhul. Berikan beban merata atau gaya geser satu ujung, dan jumlah baut mengikuti kekuatan desain baut. {{ui:Tambahkan semuanya}} menambahkan usulan sebagai satu langkah urungkan. Itu adalah nilai awal untuk ditinjau, bukan desain sambungan.
- **Pemeriksaan kemudahan konstruksi.** {{ui:Masalah}} untuk baut yang tidak dapat dijangkau kunci, baut yang terlalu rapat untuk soket, las sudut di luar batas ukurannya, dan penampang berongga yang menampung air. Akses las baru: las sudut keliling yang tidak dapat dijangkau obor las dicantumkan beserta bagian yang menghalangi dan bagian las yang terdampak. Lihat [Pemeriksaan kemudahan konstruksi](topic:constructability).

### Fondasi dan tulangan

- **Pemeriksaan fondasi.** Tab {{ui:Fondasi}} memeriksa fondasi telapak, fondasi gabungan, dan tikar pada tanah yang Anda jelaskan: daya dukung, geser, dan guling dari beban layan; lentur, geser, penembusan, panjang penyaluran, dan tulangan minimum dari beban terfaktor (ACI 318-19). Kolom dekat tepi atau sudut diperiksa dengan penampang yang terpotong oleh tepi fondasi. Penurunan dihitung dari modulus tanah, tikar lentur diselesaikan pada pegas dari modulus reaksi tanah dasar, dan kelompok tiang serta dinding penahan memiliki panel sendiri. Beban kolom dapat diketik atau diambil dari {{ui:Analisis}}. Lihat [Pemeriksaan fondasi](topic:foundation-checks).
- **Peta kepadatan tulangan.** Tab {{ui:Kepadatan}} menggambar peta panas setiap fondasi dari atas: di mana batang menyisakan terlalu sedikit ruang bagi beton untuk masuk ke bawah, dibandingkan dengan aturan jarak bersih dan, jika Anda memberikannya, agregat terbesar dan kepala penggetar. Lihat [Peta kepadatan tulangan](topic:rebar-congestion).

### Rangka dan pasokan

- **Rangka kayu dan baja ringan.** Tab {{ui:Rangka}} membingkai panel dinding, lantai, dan atap dengan setiap potongannya, daftar potong, stok yang harus dibeli, dan gambar kerja berskala. {{ui:Tempatkan sebagai batang}} memasukkan potongan ke dalam model, dan {{ui:Lembar PDF}} menyimpan satu lembar untuk setiap panel. Ukuran, jarak, dan header sepenuhnya menjadi tanggung jawab Anda: DetailCraft tidak memeriksa apakah itu menahan beban. Lihat [Panel rangka kayu dan baja ringan](topic:framing-panels).
- **Stok pemasok dan waktu tunggu.** Tab {{ui:Pasokan}} membaca daftar stok pemasok (CSV) dan menampilkan, untuk setiap penampang yang dibeli daftar potong, apakah stoknya cukup dan berapa lama waktu tunggunya. Kekurangan dan penampang yang terlambat ada di {{ui:Masalah}}. Tidak ada yang dipesan. Lihat [Stok pemasok dan waktu tunggu](topic:supplier-stock).

### Analisis dan desain

- **Apa yang rusak lebih dulu?** Di tab {{ui:Analisis}}, tombol ini mencari kombinasi kekuatan yang menentukan, batang terlemah, seberapa jauh beban dapat bertambah sebelum batang pertama mencapai batasnya, dan pelat ujung atau pelat geser terlemah jika kekuatan geser bautnya diketahui. Itu memerlukan kombinasi dan kode desain terlebih dahulu. Daya dukung, geser blok, las, dan pengungkitan (prying) tidak diperiksa. Asisten terhubung Anda dapat menanyakan hal yang sama.
- **Langsung.** Centang {{ui:Live: selesaikan ulang setelah setiap pengeditan}} dan rangka diselesaikan ulang setelah setiap pengeditan.
- **Beton dan lainnya.** Kolom langsing pada rangka tanpa goyangan dirancang untuk momen yang diperbesar (ACI 318-19 6.6.4.5). Periode seismik dapat diambil dari analisis dengan metode Rayleigh. Pelat yang dibuat dari pelat-pelat mendapat baja yang dibutuhkan setiap lapisan dari momennya, serta geser satu arahnya. Lihat [Periksa komponen beton dan buat beban seismik](topic:concrete-and-seismic).
- **Untuk diperiksa insinyur.** Hasil fondasi, beton, dan Apa yang rusak lebih dulu adalah alat bantu. Beban angin belum dibuat.

### Di setiap aplikasi

- **Bahasa.** Bantuan tersedia dalam 54 bahasa. Yang selain bahasa Inggris adalah draf mesin sampai penutur asli membacanya; sepuluh di antaranya baru (Lituania, Latvia, Bosnia, Marathi, Telugu, Albania, Afrikaans, Filipino, Swahili, Uzbek).
- **Baris bilah alat.** {{ui:Pengaturan}} › {{ui:Umum}} › {{ui:Baris bilah alat}} memilih bungkus, 2 baris, atau 1 baris. Bilah yang sudah muat tetap seperti semula; sisanya digulir ke samping.
- **Kisi properti.** Kolom isian fondasi menggunakan kisi bersama: kategori yang dapat diciutkan dan kepadatan kompak. Aritmetika yang diketik seperti 2*450 tetap berfungsi.
- **Perangkat masukan.** Trackpad, pena, mouse 3D, pengontrol, dan MIDI dapat mengendalikan aplikasi. Lihat [Navigasi di 3D](topic:navigate-3d).
- **Panel masalah.** Peringatan dari pemeriksaan baru di atas muncul di panel {{ui:Masalah}} yang sama seperti sebelumnya.
- **Hubungkan AI Anda.** Asisten Anda sendiri, terhubung melalui CadCraft Studio, bekerja dengan kedelapan aplikasi dan hanya melihat apa yang Anda izinkan. Hubungkan dengan satu klik, konektor yang di-host, dan kunci API Anda sendiri di Studio masih akan datang. Lihat [Memakai DetailCraft dengan asisten AI](topic:use-with-ai-assistants).

## Diperbaiki di 0.8.1

- **Bahasa di Studio.** Studio dan edisi paket dapat mengganti bahasa saat dijalankan; sebelumnya hanya bahasa Inggris. Belum diuji di setiap platform: beri tahu kami jika bahasanya tidak berubah.
- **Pilih dengan jendela silang.** Penginstal 0.8.1 sudah membawa perilaku pilih-dengan-jendela yang benar dari build web 0.8; penginstal lama tidak.
- **Tablet dalam potret.** Ruang grid yang tersisa diberikan ke kanvas, dan tata letak lembar dimulai pada 760 px atau kurang.

## Belum ada di versi ini

- **Kirim NC ke mesin** belum dirilis.
- **Beban angin** untuk beton belum dibuat, dan pemeriksaan beton serta fondasi perlu ditinjau oleh insinyur.
- **Penandatanganan kode.** Penginstal Windows dan .dmg macOS belum ditandatangani, sehingga Windows mungkin memberi peringatan dan macOS meminta klik kanan, lalu Buka.

Perubahan sebelumnya ada di [Yang baru di 0.7](topic:whats-new-0-7).
