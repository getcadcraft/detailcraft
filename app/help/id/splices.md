---
title: Sambungan lewatan
summary: Sambung dua potongan balok atau ujung kolom secara ujung-ke-ujung dengan pelat penutup flens dan badan yang dibaut.
keywords: sambungan lewatan, sambungan lewatan balok, sambungan lewatan kolom, pelat penutup, pelat sambungan, pelat flens, pelat badan, sambungan baut, sambungan, segmen, sambung
from: 97d141c2
---

Sambungan lewatan baut menyambung dua potongan dari satu ujung profil I secara ujung-ke-ujung: satu pelat penutup di luar setiap flens dan satu pelat di setiap sisi badan, dibaut menembus kedua potongan. DetailCraft memotong potongan kembali sesuai celah, menempatkan keempat pelat, membor lubang di pelat dan di kedua potongan, menambahkan baut, dan memberi peringatan tentang jarak tepi, jarak antar baut, serta kesesuaian.

## Tempat berfungsi

- Dua balok, atau dua segmen kolom, dengan **profil I yang sama**, bertemu **ujung-ke-ujung segaris**: ujung-ujungnya berjarak tidak lebih dari 50 mm, potongannya sejajar dan berada pada satu garis (dalam 1 mm). Kedua potongan boleh digambar ke arah mana pun.
- Potongan datar, miring, maupun vertikal semuanya dapat digunakan.
- Dua potongan dengan kedalaman atau lebar flens yang berbeda ditolak, begitu juga kanal, siku, dan pipa.

## Tambahkan sambungan lewatan

1. Gambar kedua potongan agar bertemu ujung-ke-ujung. Untuk membagi elemen yang sudah digambar, gambar ulang sebagai dua potongan.
2. Pilih salah satu (atau keduanya), lalu pilih {{ui:Sambungan lewatan}} di menu {{ui:Lainnya}} dalam grup {{ui:Sambung}}.
3. Setiap sambungan bebas dari potongan yang dipilih dengan potongan lain berprofil sama akan mendapat sambungan lewatan. Bilah status menyebutkan jumlahnya.

Pilih sambungan lewatan (klik salah satu pelatnya) untuk mengubah pengaturannya di panel kanan. {{ui:Terapkan ke serupa (n)}} menyalin sambungan ini ke setiap sambungan bebas lain antara potongan dengan profil yang sama.

## Pengaturan (mm)

| Pengaturan | Default | Fungsinya |
|---|---|---|
| Celah antar ujung | 10 | Setiap potongan dipotong kembali sebesar separuhnya |
| Diameter baut, lubang, kelas, kelonggaran panjang | 20, 22, A325, 30 | Sama seperti pada pelat ujung |
| Tebal pelat flens | 12 | Pelat selebar flens |
| Baris baut flens (tiap sisi) | 3 | Baris melintang flens di setiap sisi sambungan |
| Jarak baut flens (pitch) | 75 | Sepanjang batang |
| Gauge baut flens | 0 | Antara dua garis baut; 0 = lebar flens dikurangi 80 |
| Jarak ujung flens | 40 | Dari ujung batang ke baut pertama, dan dari baut terakhir ke ujung pelat |
| Tebal pelat badan | 8 | Satu di setiap sisi badan |
| Baris baut badan | 3 | Ke atas badan, di tengah |
| Kolom baut badan (tiap sisi) | 2 | Sepanjang batang di setiap sisi sambungan |
| Jarak baut badan, ke atas badan / sepanjang batang | 75, 75 | |
| Jarak ujung badan | 40 | Sama seperti untuk flens |
| Tinggi pelat badan | 0 | 0 = badan bersih di antara fillet, dikurangi 10 di atas dan di bawah |
| Material pelat | A36 | Teks |

Panjang pelat mengikuti jumlah baut: pelat flens = celah + 2 × (2 × jarak ujung + (baris − 1) × pitch); pelat badan juga demikian dengan kolomnya. Dengan default, pelat flens berpanjang 470.

## Yang perlu diketahui

- Pelat menjadi milik **potongan yang digambar pertama** dari keduanya (propertinya menyebutnya potongan pertama): pelat tampil di gambar rakitannya dan dikirim bersamanya, dibaut, bukan dilas. Gambar rakitan potongan kedua hanya menampilkan lubangnya.
- Baut flens menjepit flens dan pelatnya; baut badan menjepit badan dan kedua pelat badan. Panjang baut dicantumkan terpisah di properti.
- Peringatan memakai minimum EN 1993-1-8 yang sama seperti sambungan lainnya (jarak ujung dan tepi 1.2 × lubang, pitch 2.2 × lubang searah batang dan 2.4 × lubang melintang), ditambah pelat badan yang lebih dalam dari badan bersih dan baut flens yang terlalu dekat dengan badan untuk fillet.
- DetailCraft tidak merancang sambungan lewatan (tidak ada pemeriksaan kekuatan), dan tidak membuat pelat pengisi untuk potongan dengan tebal berbeda.
- Menyalin kedua potongan juga menyalin sambungannya; menghapus salah satu potongan akan menghapusnya.
