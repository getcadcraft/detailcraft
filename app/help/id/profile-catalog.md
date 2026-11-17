---
title: Katalog profil
summary: Setiap ukuran baja bawaan, cara penamaan profil, asal dimensinya, dan cara pelat serta potongan kustom diberi nama.
keywords: profil, potongan, katalog, ukuran, bentuk w, wide flange, bentuk s, kanal, siku, hss, tabung, pipa, ipe, hea, heb, upn, uk, british, ub, uc, pfc, ea, uea, siku kaki tidak sama, shs, rhs, chs, dibentuk dingin, canai panas, blue book, pelat, aisc, en 10365, penamaan
from: cd9b2bc3
---

DetailCraft memiliki 2,311 ukuran bawaan, masing-masing disalin dari tabel yang diterbitkan dan diperiksa oleh pengujian aplikasi: luas yang dihitung dari dimensi harus sesuai dengan luas yang diterbitkan, dan berat yang diterbitkan harus sesuai dengan luas itu dikali kerapatan baja. Pelat dan profil kustom dibuat dari dimensinya.

## Penamaan

- **Bentuk US** ditulis seperti cara AISC Manual mencetaknya, dengan x huruf kecil: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Pengetikan tidak peka huruf besar-kecil.
- **Pipa** ditulis seperti di basis data AISC: Pipe4STD, Pipe4XS, Pipe4XXS (standard, extra strong, double extra strong).
- **Bentuk Eropa** ditulis seperti di EN 10365: IPE200, HEA240, HEB300, UPN200 (tanpa spasi).
- **Bentuk UK** ditulis dengan keluarganya dulu, lalu ukuran dari Blue Book: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Penampang berongga dibentuk dingin diawali CF: CFSHS100x100x5.0. Mengetik seperti yang sering tertulis di gambar juga berfungsi: 305x165x40 UB, L100x100x10, SHS100x5.
- **Pelat** adalah `PL<tebal>x<lebar>` dalam milimeter: PL20x200 tebalnya 20 mm dan lebarnya 200 mm. Ukuran apa pun dari alat {{ui:Pelat}} berfungsi.
- **Profil kustom** memiliki nama apa pun yang Anda beri, asalkan bukan nama katalog dan tidak menyerupai nama pelat.

Dalam daftar {{ui:Profil}}, judul setiap grup menyebutkan sumbernya, misalnya "Bentuk W — AISC Shapes Database v16.0".

## Sumber

| Grup | Sumber | Catatan |
|---|---|---|
| Bentuk W, bentuk S, Kanal (C), Siku (L), HSS, Pipa | AISC Shapes Database v16.0 | Dimensi dikonversi dari inci ke milimeter secara tepat; massa per meter dari lb/ft yang diterbitkan |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Milimeter dan kg/m seperti yang diterbitkan |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), table v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Milimeter dan kg/m seperti yang diterbitkan |
| Pelat | Parametrik | Massa dari luas × 7850 kg/m³ |
| Kustom | Dimensi Anda | Massa dari luas × 7850 kg/m³ |

Cara bentuk digambar:

- **Bentuk W:** basis data AISC tidak memberikan radius fillet, jadi DetailCraft menggambar fillet sebagai r = kdes − tf.
- **Bentuk S dan kanal (C, UPN):** flens sejajar dengan tebal rata-rata yang diterbitkan, sudut persegi (flens yang sebenarnya miring).
- **Siku:** sudut persegi.
- **HSS persegi:** tebal dinding desain (0.93 × nominal, sebagaimana AISC 360-22 B4.2 izinkan) dengan radius sudut luar dua kali tebal itu.
- **HSS bundar dan Pipa:** tebal dinding desain (0.93 × nominal).
- **IPE, HEA, HEB, UB, UC:** radius akar yang diterbitkan.
- **PFC, EA, UEA:** sudut persegi (massa dan luas yang diterbitkan masih mencakup radius).
- **SHS, RHS, CHS:** dinding nominal. Sudut canai panas: luar 1.5 t, dalam t. Dibentuk dingin: luar 2 t, dalam t hingga 6 mm; 2.5 t dan 1.5 t hingga 10 mm; 3 t dan 2 t di atas itu.

## Ukuran

Setiap ukuran yang tercantum di tabel untuk grup ini, dari yang terkecil:

| Grup | Ukuran |
|---|---|
| Bentuk W (289) | W4x13 sampai W44x408 |
| Bentuk S (28) | S3x5.7 sampai S24x121 |
| Kanal (32) | C3x3.5 sampai C15x50 |
| Siku, kaki sama (61) | L2x2x1/8 sampai L12x12x1-3/8 |
| HSS, persegi dan bujursangkar (525) | HSS1-1/2x1-1/2x1/8 sampai HSS34x10x1 |
| HSS, bundar (189) | HSS1.660x0.140 sampai HSS28.000x1.000 |
| Pipa (51) | Pipe1/2STD sampai Pipe26XS |
| IPE (18) | IPE80 sampai IPE600 |
| HEA (24) | HEA100 sampai HEA1000 |
| HEB (24) | HEB100 sampai HEB1000 |
| UPN (18) | UPN50 sampai UPN400 |
| Siku, kaki tidak sama (76) | L2-1/2x1-1/2x3/16 sampai L8x6x1 |
| UB (107) | UB127x76x13 sampai UB1016x305x584 |
| UC (46) | UC152x152x23 sampai UC356x406x1299 |
| PFC (16) | PFC100x50x10 sampai PFC430x100x64 |
| EA (42) | EA20x20x3.0 sampai EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 sampai UEA200x150x18.0 |
| SHS, canai panas (123) | SHS40x40x3.2 sampai SHS400x400x17.5 |
| RHS, canai panas (161) | RHS50x30x3.2 sampai RHS500x300x17.5 |
| CHS, canai panas (103) | CHS42.4x3.2 sampai CHS508.0x17.5 |
| CFSHS, dibentuk dingin (96) | CFSHS25x25x2.0 sampai CFSHS400x400x12.5 |
| CFRHS, dibentuk dingin (137) | CFRHS50x25x2.0 sampai CFRHS500x300x12.5 |
| CFCHS, dibentuk dingin (106) | CFCHS33.7x3.0 sampai CFCHS508.0x16.0 |

Siku kaki tidak sama yang dicerminkan adalah potongan yang sama yang diputar ujung ke ujung, seperti cara bengkel membuat arah sebaliknya: lubang, coak, dan pelat buhulnya ikut berpindah.

Pilih alat peletakan dan sebuah ukuran untuk melihat tinggi, lebar flens, tebal badan dan flens, radius fillet, luas (cm²), massa (kg/m), dan sumbernya di kotak {{ui:Profil}} pada panel {{ui:Properti}}.

## Kemampuan tiap bentuk

| Bentuk | Lubang | Coak | Pelat ujung dan pelat dasar | File NC | Gambar kerja |
|---|---|---|---|---|---|
| Bentuk I (W, S, IPE, HEA, HEB, UB, UC, I kustom) | Badan, flens atas, flens bawah | Ya | Pelat ujung: balok dan kolom. Pelat dasar: ya | Ya | Ya |
| Kanal (C, UPN, PFC) | Badan, flens atas, flens bawah | Tidak | Pelat dasar saja | Ya | Ya |
| HSS persegi, SHS, RHS | Dinding samping (badan), atas, bawah | Tidak | Pelat dasar saja | Ya | Ya |
| HSS bundar, Pipa, CHS | Belum | Tidak | Pelat dasar saja | Ya | Ya |
| Siku (L, EA, UEA) | Belum | Tidak | Pelat dasar saja | Ya | Ya |
| Pelat dan batang pipih kustom | Muka pelat | Tidak | Tidak | Ya | Ya |

Untuk pipa persegi, lubang pada muka "badan" menembus kedua dinding samping. Isi tiap file NC ada di [Isian file NC](topic:nc1-fields).

## Butuh ukuran lain?

Tambahkan sebagai [profil kustom](topic:plates-and-profiles#add-a-custom-profile). Daftar bawaan belum dapat diedit dari aplikasi.
