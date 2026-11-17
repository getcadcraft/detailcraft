---
title: Tambah pelat dasar dan baut angkur
summary: Pasang pelat dasar yang dilas dengan empat baut angkur di bawah kolom, atur ukurannya, dan salin ke setiap kolom yang serupa.
keywords: pelat dasar, baseplate, baut angkur, baut jangkar, baut penahan, dasar kolom, baut fondasi, serupa
from: 619ebc64
---

Sambungan pelat dasar menempatkan pelat di bawah kolom, memotong kolom lebih pendek sebesar tebal pelat, mengelas keduanya, dan menambahkan empat baut angkur melalui lubang pada pelat.

:::warning
Ukuran hanyalah nilai awal, bukan desain. DetailCraft tidak memeriksa daya dukung, kekuatan baut angkur, atau kedalaman penanaman.
:::

## Tambah pelat dasar

1. Gunakan alat {{ui:Select}} ({{key:V}}) lalu klik sebuah kolom. Kolom harus vertikal.
2. Pilih {{ui:Base plate}} di grup {{ui:Connect}}, atau {{ui:Add base plate}} di panel {{ui:Properties}}.
3. Bilah status menampilkan "Pelat dasar ditambahkan dengan empat baut angkur." Sambungan baru dipilih.

Satu kolom hanya dapat memiliki satu pelat dasar. Jika kolom sudah memilikinya, bilah status menampilkan "Kolom ini sudah memiliki pelat dasar."

## Ubah

Pilih pelat dasar (klik pelatnya atau salah satu baut angkurnya). Di bawah {{ui:Plate, bolts and weld (mm)}}:

| Pengaturan | Bawaan | Fungsinya |
|---|---|---|
| Tebal pelat | 25 | Kolom dipotong sepanjang nilai ini |
| Panjang pelat | 450 | Sepanjang kedalaman kolom |
| Lebar pelat | 400 | Melintang kolom |
| Diameter baut angkur | 20 | Ukuran baut angkur |
| Diameter lubang | 33 | Lubang pada pelat |
| Grade baut | F1554 Gr 36 | Grade baut angkur, sebagai teks |
| Jarak baut angkur (sepanjang kedalaman) | 350 | Antara pusat baut angkur, sepanjang panjang pelat |
| Jarak baut angkur (melintang) | 300 | Antara pusat baut angkur, melintang |
| Proyeksi baut angkur di atas pelat | 100 | Dari atas pelat sampai ujung atas baut angkur |
| Penanaman baut angkur di bawah pelat | 450 | Dari bawah pelat masuk ke beton |
| Ukuran las fillet | 8 | Mengelilingi dasar kolom |
| Material pelat | A36 | Teks |
| Celah grout | 0 | Ruang antara atas beton dan bawah pelat |
| Pengaku | Tidak ada | Pilih Tidak ada, 2 (sejajar badan) atau 4 (juga tegak lurus badan); lihat di bawah |
| Tebal, tinggi pengaku | 12, 150 | |
| Kedalaman shear lug | 0 | Seberapa jauh shear lug menjorok di bawah pelat; 0 = tanpa shear lug |
| Tebal, lebar shear lug | 25, 150 | |
| Ring pelat | Tidak ada | Pada setiap baut angkur, atau tidak ada |
| Ukuran, tebal ring | 0, 0 | 0 = minimum dari AISC Design Guide 1 untuk baut angkur |

Panjang baut angkur = penanaman + celah grout + tebal pelat + proyeksi. Dengan nilai bawaan, panjangnya 575 mm.

## Detail dasar: grout, pengaku, shear lug, ring

Keempatnya nonaktif pada pelat dasar baru, dan pada pelat dasar dari model yang dibuat sebelum DetailCraft 0.4.

- **Celah grout.** Pelat berada sejauh ini di atas permukaan beton, dan baut angkur menjadi lebih panjang sebesar nilai tersebut. AISC Design Guide 1 (2.10) menyarankan 1 in. pada lantai jadi dan 1½ sampai 2 in. pada fondasi atau pilar; lebih besar untuk pelat yang besar dan pelat dengan shear lug.
- **Pengaku.** Pelat vertikal yang dilas ke kolom dan pelat, dari muka kolom ke tepi pelat, berbentuk persegi panjang (belum ada pemotongan sudut atau tirus). **2** berada sejajar badan, di luar setiap sayap; **4** menambah dua yang tegak lurus badan, di antara sayap, sampai ke sisi pelat. Pada kolom tabung, pengaku berada di tengah setiap muka. Setiap pengaku dilas ke kolom dan pelat di kedua sisinya.
- **Shear lug.** Pelat yang dilas keliling di bawah pelat dasar, sejajar kedalaman kolom, di tengah. DetailCraft memberi peringatan jika kedalamannya tidak lebih dari celah grout. Ia tidak memotong kantong pada fondasi; [pemeriksaan benturan](topic:clash-check) membiarkan shear lug dan fondasi di luar pemeriksaan karena alasan ini.
- **Ring pelat.** Ring pelat persegi pada setiap baut angkur, duduk di atas pelat dasar, dicantumkan dalam rakitan kolom sebagai lepas (dikirim bersama kolom, tidak dilas: Design Guide 1, 2.6). Dengan ukuran dan tebal 0, DetailCraft mengambil ring minimum dari AISC Design Guide 1, edisi ke-2, Tabel 2.3 untuk baut angkur tersebut; baut angkur metrik mengambil ukuran inci berikutnya yang lebih besar (baut angkur M20 memakai baris 7/8 in.: 2½ in. × 5/16 in.). Panel properti menampilkan ukuran yang dipakai. Lubang ring adalah diameter baut angkur + 1/16 in.: itu pilihan DetailCraft, karena tabel tidak memberikannya. DetailCraft memberi peringatan jika baut angkur mungkin tidak menjulur cukup jauh untuk ring dan mur (proyeksi kurang dari tebal ring + diameter baut angkur).

Design Guide 1, Tabel 2.3, juga merekomendasikan lubang baut angkur pada pelat: 1-5/16 in. untuk baut angkur ¾ in., 1-9/16 in. untuk ⅞ in., 1-13/16 in. untuk 1 in. DetailCraft tidak mengubah ukuran lubang Anda.

Peringatan juga muncul jika lubang baut angkur lebih dekat dari 1.2 × diameter lubang ke tepi pelat, jika baut angkur berada di dalam garis luar kolom, atau jika pelat lebih kecil dari kolom.

## Salin ke kolom serupa

1. Pilih pelat dasar.
2. Pilih {{ui:Apply to similar (n)}}, atau {{ui:Similar}} di menu {{ui:More}} pada grup {{ui:Connect}}.
3. Setiap kolom vertikal dengan profil yang sama, yang belum memiliki pelat dasar dan tidak berdiri di atas kolom lain, mendapat salinan.

## Pelat dasar dan fondasi

Pelat dasar tidak memerlukan fondasi, dan fondasi tidak mengetahui pelat dasar di atasnya: baut angkur tidak diikat ke tulangan fondasi. Letakkan fondasi dengan {{ui:Footing}}; lihat [Letakkan fondasi dengan tulangan](topic:footings-and-rebar).
