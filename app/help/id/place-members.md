---
title: Letakkan kolom, balok, dan bresing
summary: Pilih profil, material, dan posisi, lalu klik perpotongan grid atau ketik koordinatnya untuk meletakkan batang baja.
keywords: kolom, balok, bresing, batang, letakkan, profil, material, rotasi, posisi, offset, sisipkan, tambah berdasarkan grid
from: d6db0dc1
---

Batang diletakkan pada perpotongan grid: kolom di satu titik, balok atau bresing di antara dua titik. Atur [grid dan level](topic:grids-and-levels) terlebih dahulu.

## Pilih alat dan opsinya

1. Pilih {{ui:Kolom}} ({{key:C}}), {{ui:Balok}} ({{key:B}}) atau {{ui:Bresing}} ({{key:R}}) di grup {{ui:Letakkan}}.
2. Panel {{ui:Properti}} di sebelah kanan berubah menjadi "Letakkan kolom" (atau balok, atau bresing) dan menampilkan opsi untuk batang berikutnya:
   - {{ui:Profil}}: pilih dari daftar. Ukuran dikelompokkan menurut katalog (bentuk W, Kanal, Siku, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS, dan profil kustom Anda). Lihat [Katalog profil](topic:profile-catalog).
   - {{ui:Material}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 atau S355.
   - {{ui:Posisi}}: di mana potongan berada pada garis di antara kedua titik: {{ui:Muka atas baja pada garis}}, {{ui:Berpusat pada garis}} atau {{ui:Muka bawah pada garis}}.
   - {{ui:Rotasi (°)}}: memutar potongan pada sumbu batang itu sendiri.
   - {{ui:Hingga}} (hanya kolom): {{ui:Level berikutnya di atas}}, atau nama level.
3. Di bawah opsi, kotak {{ui:Profil}} mencantumkan dimensi, luas, massa per meter, dan katalog potongan yang dipilih.

Defaultnya adalah W12x50 dalam A992 untuk kolom (berpusat), W16x26 dalam A992 untuk balok ({{ui:Muka atas baja pada garis}}), dan HSS6x6x1/4 dalam A500 Gr C untuk bresing (berpusat). Opsi tetap diatur sampai Anda mengubahnya.

## Letakkan dengan mengklik

### Kolom

1. Pilih {{ui:Denah}} dan pilih level tempat kolom dimulai.
2. Pilih {{ui:Kolom}}.
3. Gerakkan penunjuk di dekat perpotongan. Titik terdekat menyala dan bilah status menyebutkannya.
4. Klik. Kolom membentang dari level itu ke level berikutnya di atas (atau ke level {{ui:Hingga}}). Bilah status menyebutkan, misalnya, "Kolom W12x50 di A/1, Level 1 ke Level 2."
5. Terus klik untuk meletakkan lebih banyak. Tekan {{key:Esc}} jika sudah selesai.

Jika tidak ada level di atas level yang Anda klik, bilah status menyebutkan "Tidak ada level di atas Level 2 yang dapat dijangkau kolom. Tambahkan level terlebih dahulu."

### Balok

1. Pilih {{ui:Denah}} dan pilih level balok.
2. Pilih {{ui:Balok}}.
3. Klik perpotongan pertama. Bilah status menyebutkan "Dari A/1 di Level 2. Sekarang klik ujung lainnya (Esc membatalkan)." Garis putus-putus mengikuti penunjuk.
4. Klik perpotongan kedua. Balok muncul.
5. Klik lagi untuk memulai balok berikutnya, atau tekan {{key:Esc}}.

{{key:Esc}} setelah klik pertama hanya membatalkan titik itu; {{key:Esc}} kedua menyimpan alat.

### Bresing

Bresing membentang di antara dua perpotongan pada level berbeda, jadi paling mudah di {{ui:Tampak}}.

1. Pilih {{ui:Tampak}} dan pilih garis grid huruf tempat bresing berada.
2. Pilih {{ui:Bresing}}.
3. Klik ujung bawah, lalu ujung atas.

Tampak hanya ada untuk garis grid huruf. Untuk bresing di rangka sepanjang garis bernomor (dari A ke B), gunakan {{ui:3D}} atau formulir {{ui:Tambah berdasarkan grid}} di bawah.

:::touch
Pada layar sentuh, ketuk dekat perpotongan: ketukan memilih titik terdekat dalam jarak pendek dan tidak melakukan apa-apa jika tidak ada titik di dekatnya. Tidak ada sorotan sebelum Anda mengetuk, jadi periksa pesan bilah status setelah setiap ketukan. Seretan satu jari memutar atau menggeser tampilan, bukan meletakkan.
:::

## Letakkan dengan grid, tanpa mengklik

Setiap alat peletakan memiliki formulir {{ui:Tambah berdasarkan grid}} di bagian bawah panel {{ui:Properti}}. Formulir ini bekerja hanya dengan keyboard dan tidak memerlukan tampilan 3D.

1. Pilih alatnya, misalnya {{ui:Balok}}.
2. Di {{ui:Tambah berdasarkan grid}}, pilih {{ui:Dari grid (huruf)}}, {{ui:Dari grid (angka)}} dan {{ui:Dari level}}.
3. Pilih {{ui:Ke grid (huruf)}}, {{ui:Ke grid (angka)}} dan {{ui:Ke level}}.
4. Pilih {{ui:Tambah}}.

Untuk kolom atau fondasi, formulir hanya memiliki satu titik: {{ui:Grid (huruf)}}, {{ui:Grid (angka)}} dan {{ui:Level}}.

## Ubah batang setelah diletakkan

1. Tekan {{key:Esc}} (atau pilih {{ui:Pilih}}, {{key:V}}) lalu klik batangnya.
2. Di panel {{ui:Properti}}, ubah {{ui:Nama}}, {{ui:Profil}}, {{ui:Material}}, {{ui:Posisi}} atau {{ui:Rotasi (°)}}.
3. Untuk memindahkannya, edit x, y, dan z dari {{ui:Awal}} atau {{ui:Akhir}} di bawah {{ui:Ujung (x, y, z mm)}}. Nama grid setiap ujung tampak di bawahnya, atau koordinatnya jika berada di luar grid.

Setiap perubahan adalah satu langkah urungkan. Di bawah isian, Anda melihat {{ui:Tanda part}}, {{ui:Rakitan}}, {{ui:Panjang potong}}, {{ui:Berat}} (kotor: lubang dan coak tidak dikurangkan) batang, dan katalog asal profilnya.

Batang belum dapat diseret atau diarray. Untuk membuat batang lain yang serupa, salin dan tempel, atau duplikat ({{key:Mod+D}}): lihat [Salin, tempel, dan duplikat](topic:copy-paste).

## Hapus batang

Pilih batang dan tekan {{key:Delete}} atau {{key:Backspace}}, atau pilih {{ui:Hapus}}. Sambungan pada batang itu ikut terhapus. {{key:Mod+Z}} mengembalikan semuanya.

## Hal yang perlu diketahui

- **Arah kolom menghadap.** Pada {{ui:Rotasi (°)}} 0, flens kolom menghadap sepanjang x, ke arah garis grid bernomor di sebelahnya. Balok dari grid 1 ke grid 2 terpasang ke flens; balok dari A ke B terpasang ke badan. Pelat ujung hanya dipasang pada flens, jadi jika balok Anda membentang dari A ke B, beri kolom tersebut rotasi 90.
- **Balok pada suatu level menggantung di bawahnya** dengan {{ui:Muka atas baja pada garis}} bawaan. Pilih {{ui:Berpusat pada garis}} jika level Anda adalah sumbu batang.
- **Kolom membentang dari level ke level.** Untuk kolom yang melewati dua lantai, atur {{ui:Hingga}} ke level yang lebih tinggi.
- **Balok miring** diizinkan (pilih ujung di level berbeda), tetapi pelat ujung belum dibuat pada balok itu.

Berikutnya: [Hubungkan balok ke kolom dengan pelat ujung](topic:end-plates).
