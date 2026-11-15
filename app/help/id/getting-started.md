---
title: Mulai menggunakan DetailCraft
summary: Apa yang dilakukan DetailCraft saat ini, cara membukanya, dan model pertama dari grid sampai gambar kerja dalam sepuluh menit.
keywords: mulai, model pertama, pengantar, detailing baja, tulangan, mulai cepat, tutorial, ikhtisar
from: e4f16bbe
---

DetailCraft adalah aplikasi detailing baja dan tulangan dalam keluarga CadCraft. Anda membangun model 3D rangka baja di atas grid dan level, menyambungkannya, lalu mendapatkan apa yang dibutuhkan bengkel: tanda part dan rakitan, daftar material, gambar kerja satu part, file NC DSTV, model IFC, dan daftar pembengkokan untuk fondasi.

Ini adalah build awal. Aplikasi ini melakukan sejumlah kecil hal dengan cermat, bukan semuanya sekaligus. Baca [Yang belum dibuat](topic:not-built-yet) sebelum Anda merencanakan pekerjaan nyata dengannya.

## Yang dilakukannya saat ini

- Grid dan level yang Anda ketik, dalam milimeter.
- Kolom, balok, bresing, dan pelat dari katalog profil yang diterbitkan (AISC W, S, C, L, HSS dan Pipe; IPE, HEA, HEB dan UPN Eropa; UB, UC, PFC, EA, UEA, SHS, RHS dan CHS Inggris), ditambah profil parametrik Anda sendiri.
- Dua sambungan: pelat ujung baut dari balok ke flens kolom, dan pelat dasar kolom dengan empat batang angkur. Keduanya dapat disalin ke setiap sambungan serupa.
- Lubang dan coak yang diketik berdasarkan posisi.
- Fondasi telapak persegi panjang dengan tikar bawah dan batang stek.
- Tanda part dan rakitan yang diperbarui sendiri setelah setiap perubahan.
- Ekspor: IFC4, file NC DSTV (profil I dan pelat), daftar material sebagai CSV, daftar pembengkokan sebagai CSV, dan PDF gambar kerja satu part.

## Buka DetailCraft

1. Buka DetailCraft di peramban desktop: Chrome, Edge, Firefox, atau Safari. Lihat [Peramban dan komputer](common:browsers).
2. Tunggu hingga layar terisi. Bilah status di bagian bawah menampilkan "Siap. Buka Contoh, atau atur grid dan level lalu mulai menempatkan batang."

Tampilan model memerlukan grafis 3D (WebGL). Jika bagian tengah layar menampilkan "Peramban ini tidak dapat memulai grafis 3D (WebGL)", lihat [Pemecahan masalah](topic:troubleshooting#the-3d-view-is-missing).

:::note
Model Anda tetap berada di komputer Anda. Membuka model membaca file di peramban, dan menyimpan mengunduh file. Tidak ada yang diunggah. Penyimpanan cloud belum tersedia. Lihat [Di mana file Anda disimpan](common:your-files). Untuk memakai DetailCraft tanpa koneksi nanti, pilih {{ui:Simpan untuk offline}} di bilah aplikasi sekali saat daring; lihat [Bekerja luring](common:offline).
:::

:::offline
Anda sedang luring. DetailCraft berfungsi tanpa koneksi hanya jika sudah disimpan untuk penggunaan luring terlebih dahulu: tombol {{ui:Simpan untuk offline}} di bilah aplikasi kemudian menampilkan {{ui:Siap offline}}. Lihat [Bekerja luring](common:offline).
:::

## Lihat contoh terlebih dahulu

Cara tercepat untuk melihat apa yang dibuat DetailCraft adalah rangka contoh.

1. Pilih {{ui:Contoh}} di grup {{ui:File}} pada bilah alat.
2. Tampilan menunjukkan rangka dua bentang: enam kolom dengan pelat dasar, empat balok dengan pelat ujung, satu bresing, dan tujuh fondasi dengan tulangan.
3. Klik sebuah balok. Panel {{ui:Properti}} di kanan menampilkan tanda part, panjang potong, berat, dan lubang yang dibuat pelat ujung.
4. Buka tab {{ui:Daftar material}} di bagian bawah untuk melihat setiap tanda part beserta jumlah dan beratnya.

Panduan [Jelajahi rangka contoh](topic:sample-model) membahasnya bagian demi bagian.

## Model pertama Anda

Model baru sudah memiliki grid 1 sampai 3 menurut A sampai B pada 6000 mm dan dua level, Level 1 pada 0 dan Level 2 pada 4000.

1. Pilih {{ui:Baru}}. Jika model saat ini memiliki perubahan, DetailCraft menanyakan apakah Anda ingin menyimpannya terlebih dahulu.
2. Pilih {{ui:Denah}} di atas tampilan. Daftar level di sebelahnya memilih Level 1.
3. Pilih {{ui:Kolom}} di bilah alat, atau tekan {{key:C}}.
4. Klik perpotongan grid A/1. Kolom W12x50 muncul dari Level 1 ke Level 2. Bilah status menyebutkan lokasinya.
5. Klik B/1, A/2, dan B/2 untuk menempatkan tiga kolom lagi.
6. Pilih Level 2 di daftar level, lalu pilih {{ui:Balok}} atau tekan {{key:B}}.
7. Klik A/1, lalu A/2. Balok W16x26 menghubungkan kedua puncak kolom, dengan puncak baja pada level.
8. Tekan {{key:Esc}} untuk kembali ke {{ui:Pilih}}, lalu klik balok.
9. Pilih {{ui:Pelat ujung}} di grup {{ui:Sambung}}. Kedua ujung mendapat pelat ujung baut, balok dipotong agar pas, dan pelat ujung pertama kini terpilih.
10. Klik balok sekali lagi.
11. Pilih {{ui:Gambar kerja}} di grup {{ui:Keluaran}}. Pratinjau gambar kerja balok terbuka. Pilih {{ui:Unduh PDF}}.
12. Tekan {{key:Mod+S}} untuk menyimpan model. Peramban mengunduh `Untitled.detailcraft.json`.

Ganti nama model di kolom {{ui:Nama}} di kiri atas sebelum Anda menyimpan, agar file dan setiap ekspor membawa namanya.

## Langkah berikutnya

- [Tur layar](topic:workspace)
- [Atur grid dan level](topic:grids-and-levels)
- [Bergerak di tampilan 3D](topic:navigate-3d), dengan mouse, trackpad, atau layar sentuh
- [Dari perangkat lunak detailing lain](topic:coming-from), jika Anda sudah mengenal paket detailing besar
- [Cara memakai bantuan ini](common:help)
