---
title: Pelat geser
summary: Baut badan balok ke pelat yang dilas di bengkel ke flens atau badan kolom, juga saat balok bertemu kolom dengan sudut di denah atau miring.
keywords: pelat geser, pelat tunggal, pelat sirip, sambungan sederhana, sambungan badan, miring, skew, lereng, balok bersudut, dibaut, sambung
from: 18afc8ab
---

Pelat geser (pelat tunggal, pelat sirip) adalah pelat yang dilas ke kolom di bengkel; di lapangan, badan balok dibaut ke pelat itu dengan satu baris vertikal baut. DetailCraft menempatkan pelat, memotong balok mundur agar tidak menyentuh kolom, mengebor lubang pada pelat dan badan balok, menambahkan baut dan las, serta memberi peringatan tentang jarak tepi dan kesesuaian.

## Tempat ia berfungsi

- Balok (profil I atau kanal) yang ujungnya terletak pada garis kolom profil I **vertikal**, bertemu di **flens** atau **badannya**.
- **Persegi, miring di denah, atau bersudut**: pelat mengikuti badan balok dan balok dipotong mundur sehingga sudut terdekatnya tetap menjaga celah ke kolom. Balok yang naik atau turun lebih dari 60° ditolak.

## Tambah pelat geser

1. Pilih balok.
2. Di grup {{ui:Sambung}}, buka {{ui:Lainnya}} dan pilih {{ui:Pelat geser}} (atau pilih {{ui:Tambah pelat geser}} di panel {{ui:Properti}}).
3. Setiap ujung bebas balok yang bertemu kolom mendapat satu pelat. Setiap ujung balok menerima satu sambungan: pelat geser atau pelat ujung.

Pilih pelat (klik, atau bautnya) untuk melihat dan mengubah pengaturannya. {{ui:Terapkan ke yang serupa}} menyalinnya, sebagai pelat geser, ke setiap sambungan serupa yang belum memiliki sambungan.

## Pengaturan (mm)

| Pengaturan | Mulai dari | Arti |
|---|---|---|
| Tebal pelat | 10 | Tebal pelat |
| Lebar pelat | 115 | Seberapa jauh pelat menjorok dari muka kolom, sepanjang balok |
| Diameter baut, Diameter lubang, Mutu baut | 20, 22, A325 | Seperti pada pelat ujung |
| Baris baut, Jarak antarbaris | 3, 75 | Baut dalam baris vertikal |
| Jarak tepi (baut atas dan bawah) | 38 | Dari baut atas dan bawah ke ujung pelat; pelat berkedalaman baris × jarak + 2 × nilai ini |
| Kelompok baut dinaikkan sebesar | 0 | 0 memusatkan baut pada kedalaman balok |
| Celah ke kolom | 13 | Celah bersih antara kolom dan sudut terdekat balok |
| Garis baut dari muka kolom | 65 | Sepanjang balok, dari muka kolom ke baut |
| Tambahan panjang baut | 30 | Ditambahkan ke cengkeraman (pelat + badan balok), dibulatkan ke atas ke 5 mm |
| Ukuran las sudut | 6 | Kedua sisi pelat ke kolom |

## Perlu diketahui

- Pelat adalah bagian dari rakitan kolom (dilas di bengkel); rakitan balok hanya memiliki lubangnya.
- Balok miring atau bersudut dipotong lebih jauh mundur dibanding balok persegi agar sudut terdekatnya tetap menjaga celah. DetailCraft memotong balok secara persegi: fabrikator memotong ujungnya sesuai. Tepi pelat di kolom juga digambar persegi.
- DetailCraft tidak memeriksa kekuatan. Peringatan memakai nilai minimum EN 1993-1-8 Tabel 3.3 untuk jarak tepi dan jarak, dan menyatakan saat pelat lebih dalam dari badan balok di antara fillet-nya, atau saat baut terlalu dekat dengan ujung potong balok.
- [Pemeriksaan benturan](topic:clash-check) membiarkan pelat dan batang yang dihubungkannya keluar: mereka memang dimaksudkan untuk bertemu.
