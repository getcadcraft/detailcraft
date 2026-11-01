---
title: Memulai DetailCraft
summary: Apa yang dilakukan DetailCraft saat ini, cara membukanya, dan model pertama dari grid sampai gambar kerja dalam sepuluh menit.
keywords: mulai, model pertama, pengantar, detailing baja, tulangan, panduan cepat, tutorial, ikhtisar
from: 3682c0d8
---

DetailCraft adalah aplikasi detailing baja dan tulangan dalam keluarga CadCraft. Anda membangun model 3D rangka baja pada grid dan level, menyambungnya, dan mendapatkan apa yang diperlukan bengkel: tanda part dan rakitan, daftar material, gambar kerja per part, file NC DSTV, model IFC, dan daftar pembengkokan untuk fondasi.

Ini adalah build awal. Build ini mengerjakan daftar pendek dengan cermat, bukan semuanya sekaligus. Baca [Apa yang belum dibuat](topic:not-built-yet) sebelum Anda merencanakan pekerjaan nyata di sekitarnya.

## Yang dilakukannya saat ini

- Grid dan level yang Anda ketik, dalam milimeter.
- Kolom, balok, bresing, dan pelat dari katalog profil terbitan (AISC W, S, C, L, HSS, dan Pipe; IPE, HEA, HEB, dan UPN Eropa), ditambah profil parametrik buatan Anda sendiri.
- Dua sambungan: pelat ujung berbaut dari balok ke flens kolom, dan pelat dasar kolom dengan empat baut angkur. Masing-masing dapat disalin ke setiap sambungan serupa.
- Lubang dan coak yang diketik menurut posisi.
- Fondasi telapak persegi panjang dengan tulangan bawah dan besi stek.
- Tanda part dan rakitan yang diperbarui sendiri setelah setiap perubahan.
- Ekspor: IFC4, file NC DSTV (profil I dan pelat), daftar material sebagai CSV, daftar pembengkokan sebagai CSV, dan PDF gambar kerja satu part.

## Membuka DetailCraft

1. Buka DetailCraft di peramban desktop: Chrome, Edge, Firefox, atau Safari. Lihat [Peramban dan komputer](common:browsers).
2. Tunggu layar terisi. Bilah status di bagian bawah menyatakan "Siap. Buka Contoh, atau atur grid dan level lalu mulai menempatkan batang."

Tampilan model memerlukan grafis 3D (WebGL). Jika bagian tengah layar menyatakan "Peramban ini tidak dapat memulai grafis 3D (WebGL)", lihat [Pemecahan masalah](topic:troubleshooting#the-3d-view-is-missing).

:::note
Model Anda tetap berada di komputer Anda. Membuka model membacanya di peramban, dan menyimpan mengunduh sebuah file. Tidak ada yang diunggah. Penyimpanan cloud belum tersedia. Lihat [Ke mana file Anda pergi](common:your-files). Untuk memakai DetailCraft tanpa koneksi nanti, pilih {{ui:Simpan untuk offline}} di bilah aplikasi sekali saat online; lihat [Bekerja offline](common:offline).
:::

:::offline
Anda sedang offline. DetailCraft berfungsi tanpa koneksi hanya jika sudah disimpan untuk penggunaan offline lebih dulu: tombol {{ui:Simpan untuk offline}} di bilah aplikasi lalu bertuliskan {{ui:Siap offline}}. Lihat [Bekerja offline](common:offline).
:::

## Lihat contohnya dahulu

Cara tercepat untuk melihat apa yang dihasilkan DetailCraft adalah rangka contoh.

1. Pilih {{ui:Contoh}} di grup {{ui:File}} pada bilah alat.
2. Tampilan menunjukkan rangka dua bentang: enam kolom dengan pelat dasar, empat balok dengan pelat ujung, satu bresing, dan tujuh fondasi dengan tulangan.
3. Klik sebuah balok. Panel {{ui:Properti}} di kanan menampilkan tanda part, panjang potong, berat, dan lubang yang dibuat oleh pelat ujung.
4. Buka tab {{ui:Daftar material}} di bagian bawah untuk melihat setiap tanda part beserta jumlah dan beratnya.

Panduan [Menjelajahi rangka contoh](topic:sample-model) menelusurinya bagian demi bagian.

## Model pertama Anda

Model baru sudah memiliki grid 1 sampai 3 kali A sampai B pada 6000 mm dan dua level, Level 1 pada 0 dan Level 2 pada 4000.

1. Pilih {{ui:Baru}}. Jika model saat ini memiliki perubahan, DetailCraft bertanya apakah akan menyimpannya lebih dulu.
2. Pilih {{ui:Denah}} di atas tampilan. Daftar level di sampingnya memilih Level 1.
3. Pilih {{ui:Kolom}} di bilah alat, atau tekan {{key:C}}.
4. Klik perpotongan grid A/1. Kolom W12x50 muncul dari Level 1 sampai Level 2. Bilah status menyatakan di mana kolom itu berada.
5. Klik B/1, A/2, dan B/2 untuk menempatkan tiga lagi.
6. Pilih Level 2 di daftar level, lalu pilih {{ui:Balok}} atau tekan {{key:B}}.
7. Klik A/1, lalu A/2. Balok W16x26 menyambung dua puncak kolom, dengan puncak baja tepat pada level.
8. Tekan {{key:Esc}} untuk kembali ke {{ui:Pilih}}, lalu klik balok.
9. Pilih {{ui:Pelat ujung}} di grup {{ui:Sambung}}. Kedua ujung mendapat pelat ujung berbaut, balok dipotong mundur agar pas, dan pelat ujung pertama kini terpilih.
10. Klik balok lagi.
11. Pilih {{ui:Gambar kerja}} di grup {{ui:Keluaran}}. Pratinjau gambar kerja balok terbuka. Pilih {{ui:Unduh PDF}}.
12. Tekan {{key:Mod+S}} untuk menyimpan model. Peramban mengunduh `Untitled.detailcraft.json`.

Ganti nama model di kolom {{ui:Nama}} di kiri atas sebelum menyimpan, agar file dan setiap ekspor membawa namanya.

## Langkah selanjutnya

- [Tur layar](topic:workspace)
- [Menyiapkan grid dan level](topic:grids-and-levels)
- [Bergerak di tampilan 3D](topic:navigate-3d), dengan mouse, trackpad, atau layar sentuh
- [Jika Anda berasal dari perangkat lunak detailing lain](topic:coming-from), jika Anda mengenal paket detailing besar
- [Memakai bantuan ini](common:help)
