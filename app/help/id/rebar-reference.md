---
title: Referensi tulangan
summary: Ukuran batang, dimensi kait, kode bentuk, panjang potong dan kolom daftar pembengkokan yang digunakan DetailCraft.
keywords: tulangan, ukuran batang, kait, diameter tekukan, kode bentuk, panjang potong, daftar pembengkokan, daftar batang, astm a615, aci 318
from: 1583535e
---

## Ukuran batang

Dari ASTM A615/A615M Tabel 1 (penamaan inci-pound). Milimeter dan kg/m adalah konversi pasti dari nilai inci dan lb/ft yang dipublikasikan. Daftar menampilkan setiap ukuran sebagai, misalnya, "#5 (15.9 mm)".

| Batang | Diameter (mm) | Massa (kg/m) | Luas (mm²) | Diameter tekukan dalam | Kaki kait 90°, luar ke luar (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

Di [Pengaturan DetailCraft](topic:settings) ({{ui:Tulangan}}), **nama batang ASTM** dapat menampilkan batang ini dengan nama metrik lunak A615M: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (batang yang sama; ACI 315-99 Tabel 1 mencantumkan keduanya).

### Batang metrik (BS 4449)

| Batang | Diameter (mm) | kg/m | Jari-jari tekuk minimum r (mm) | Kaki kait = proyeksi ujung P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Massa adalah luas penampang nominal dikali 7850 kg/m³. Jari-jari dan proyeksi ujung adalah nilai minimum BS 8666:2020 (tabel dimensi minimumnya; diameter lama adalah 2r). Fondasi dengan batang BS mendapat kaki kait sebesar P dan panjang potong menurut rumus BS 8666 di bawah. Memilih baja Eropa di pengaturan memulai fondasi baru dengan anyaman H16 dan besi stek H20 pada beton C30/37.

## Kait

Batang ASTM: kait 90° standar dari ACI 318-19 Tabel 25.3.1: diameter tekukan dalam 6 db untuk #3 sampai #8 dan 8 db untuk #9 sampai #11, dengan perpanjangan lurus 12 db melewati tekukan. Kaki kait, diukur luar ke luar, adalah setengah diameter tekukan + db + 12 db.

Jika kait batang anyaman tidak muat di kedalaman fondasi dalam selimut beton, DetailCraft memendekkan kaki agar muat dan menampilkan peringatan.

## Bentuk

DetailCraft menyimpan tiga bentuk. Daftar pembengkokan mencetaknya sebagai kode DetailCraft, sebagai tipe ACI 315, atau sebagai kode bentuk BS 8666: pilih **Kode bentuk daftar pembengkokan** di [Pengaturan DetailCraft](topic:settings) ({{ui:Tulangan}}).

| Kode | Bentuk | Dimensi |
|---|---|---|
| S | Lurus | A = panjang |
| L | Satu tekukan 90° | A = kaki utama, B = kaki kait, keduanya luar ke luar |
| U | Dua tekukan 90° di sisi yang sama | A = tengah, B dan C = dua kaki, luar ke luar |

Batang anyaman dengan {{ui:Kait ujung}} aktif adalah U; tanpa itu, S. Besi stek dengan {{ui:Kait di bawah}} aktif adalah L; tanpa itu, S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Gambar 10) |
|---|---|---|
| S | 00, L = A | tanpa nomor tipe |
| L | 11, L = A + B − 0.5r − d | tanpa nomor tipe: gambar tidak memuat batang dengan satu kait |
| U | 21, A dan C kakinya, B tengahnya: L = A + B + C − r − 2d | Tipe 2, kait A dan G, B lurus |

Dengan kode BS 8666 atau ACI 315, kolom A, B dan C pada daftar mengikuti penomoran standar tersebut (tengah U adalah B).

## Panjang potong

Untuk batang BS 4449, panjang potong adalah rumus BS 8666 dari kode bentuk batang (di atas). Untuk batang ASTM, panjangnya adalah panjang tepat sumbu batang: bagian lurus ditambah tekukan sebagai busur dengan jari-jari setengah diameter tekukan ditambah setengah diameter batang. Ini tidak dihitung dari tabel pengurangan tekukan, sehingga bisa berbeda beberapa milimeter dari daftar yang memakai tabel tersebut.

## Tata letak

- Anyaman bawah: batang sepanjang L membentuk lapis bawah, batang sepanjang B berada di atasnya. Setiap set disebar merata di dalam fondasi dalam selimut beton, pada jarak yang Anda berikan atau lebih rapat, dengan minimal dua batang.
- Besi stek: kisi batang sepanjang L dan sepanjang B pada jarak yang Anda berikan, berpusat di fondasi, berdiri di atas anyaman dan menjulur di atas bagian atas sebesar proyeksi yang Anda berikan. Setiap kait mengarah ke luar.

## Pemeriksaan

| Pemeriksaan | Aturan | Hasil |
|---|---|---|
| Ruang untuk batang | Selimut beton di kedua sisi menyisakan ruang untuk batang | Ditolak jika tidak |
| Kedalaman untuk dua lapis | Kedalaman dikurangi dua selimut beton memuat kedua lapis anyaman | Ditolak jika tidak |
| Besi stek muat | Kisi besi stek muat di dalam selimut beton | Ditolak jika tidak |
| Jarak bersih | Minimal yang lebih besar dari 25.4 mm dan db (ACI 318-19 25.2.1; ukuran agregat tidak diperiksa) | Peringatan |
| Kedalaman kait | Kaki kait muat di kedalaman dalam selimut beton | Peringatan, kaki dipendekkan |
| Kait besi stek | Kait tetap di luar selimut beton | Peringatan |

## Kolom daftar pembengkokan

Tab {{ui:Daftar pembengkokan}} dan CSV-nya memiliki kolom ini: Tanda tulangan, Ukuran, Bentuk, A (mm), B (mm), C (mm), Jumlah, Panjang potong (mm), Panjang total (m), kg/m, Berat per batang (kg), Berat total (kg), Dipakai untuk. Baris terakhir menjumlahkan jumlah, panjang dan berat.
