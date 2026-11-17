---
title: Generator tangga baja
summary: Tangga baja dari tinggi lantai ke lantai, panjang langkah, dan lebar: tanjakan dan langkah menurut set aturan yang Anda pilih, bordes, pegangan dan baluster, gambar kerja, serta daftar potong dengan berat.
keywords: tangga baja, generator tangga, ibu tangga, injakan, pelat anti-slip, kisi-kisi, pan berlipat, bordes, pegangan, baluster, tanjakan, langkah, osha, ibc, approved document k, daftar potong, berat, gambar kerja
from: a4f0a985
---

Generator tangga membuat seluruh tangga baja dari beberapa angka: ibu tangga, injakan, bordes saat lari terlalu tinggi, pegangan dengan tiang dan baluster, lubang pemasangan di ibu tangga, daftar potong dengan berat, dan gambar kerja. Ia dimulai dari alat {{ui:Stair}}, seperti tangga biasa (lihat Tangga), dengan satu sakelar tambahan.

## Letakkan tangga baja

1. Pilih {{ui:Stair}} di grup {{ui:Place}}, atau tekan {{key:S}}.
2. Di sisi kanan, centang {{ui:Use the steel stair generator}}.
3. Pilih **set aturan** untuk tempat tangga dibangun, **tinggi naik** (dari lantai ke lantai; 0 = sampai ke level berikutnya), **panjang tersedia** (0 = biarkan aturan menentukan), **lebar bersih**, dan **jenis injakan**: pelat anti-slip, kisi-kisi, atau pelat pan berlipat.
4. Atur profil ibu tangga, bordes (menurut aturan, atau dengan angka), pegangan (kedua sisi, satu sisi, atau tidak ada), tinggi pegangan, dan celah baluster.
5. Klik perpotongan grid: itu adalah kaki tanjakan pertama.

Pilih tangga (klik ibu tangga, injakan, atau pegangan) untuk mengubah pengaturan apa pun; properti menampilkan tanjakan, langkah, pitch, lari dan bordes, baja yang dipakai di dalamnya, daftar potong, dan sumber set aturan.

## Set aturan

Set aturan membatasi bentuk tangga: tinggi naik dan langkah, 2 × tanjakan + langkah, pitch, bordes, tinggi pegangan, dan bukaan terbesar. DetailCraft menawarkan yang di bawah ini; wilayahnya adalah pengaturan, bukan tebakan. Buka **Dari mana angka aturan set ini berasal** di properti: setiap angka menyebutkan sumbernya dan menyatakan seberapa baik ia diperiksa.

- **International Building Code 2021**: tanjakan 4 sampai 7 in., injakan minimal 11 in., pegangan 34 sampai 38 in. Batas 12 ft antar bordes ditampilkan sebagai *tidak terbaca*, dan angka pegangan sebagai terbaca dalam pamflet yang mengutip kode; konfirmasikan sebelum mengandalkannya.
- **OSHA 29 CFR 1910.25 dan 1910.29** (tangga standar industri): 30° sampai 50°, tanjakan paling tinggi 9.5 in., injakan minimal 9.5 in., lebar minimal 22 in., bordes selebar tangga dan 30 in. dalamnya, pegangan atas yang dipakai sebagai pegangan tangan 36 sampai 38 in. Ini dibaca dari peraturannya sendiri.
- **Approved Document K 2013, Inggris** (tangga akses umum dan utilitas): rentang tanjakan dan langkah serta 2 × tanjakan + langkah 550 sampai 700 mm, dibaca dari laporan yang ditugaskan pemerintah dan menyajikannya dalam tabel. Dokumen ini tidak memberi DetailCraft tinggi pegangan, jadi tinggi yang Anda atur dipakai dan daftar Masalah menyatakannya.

Set aturan yang tidak tercantum di sini tidak ditebak: tangga kemudian mengikuti aturan kenyamanan biasa 600 sampai 650 mm dan menyatakan bahwa ia tidak memiliki aturan.

## Yang dihitung

- **Tanjakan dan langkah.** Jumlah tanjakan paling sedikit yang 2 × tanjakan + langkahnya berada di tengah rentang aturan, tanpa langkah yang jatuh di bawah minimum aturan. Dengan lari yang diberikan, langkah adalah lari dibagi injakan, dan apa pun di luar aturan dinyatakan.
- **Lari dan bordes.** Lari yang lebih tinggi daripada yang diizinkan aturan dibagi dengan bordes selebar tangga dan tidak kurang dari minimum aturan; Anda juga dapat meminta bordes. Bordes adalah bingkai dari dua balok samping dan dua siku melintang di bawah penutup, berdiri di atas dua tiang.
- **Injakan.** Pelat anti-slip adalah pelat yang dilas (6 mm secara default; polanya tidak ditambahkan ke berat). Pelat pan berlipat memiliki lipatan di nosing dan dibaut melalui badan ibu tangga: dua lubang 2 mm lebih besar dari baut pada 0.3 dan 0.7 dari kedalaman. Kisi-kisi digambar sebagai pelat dengan berat yang sama (kedalaman batang pemikul × tebal ÷ pitch); batang silang dan pita tidak dihitung, dan daftar potong menyatakannya.
- **Pegangan.** Pegangan atas pipa pada tiang sepanjang setiap lari dan setiap bordes, dengan celah baluster yang tidak dapat dilewati bola lebih besar dari bukaan aturan (paling besar 100 mm secara default).

## Gambar, daftar potong, ekspor

- Lari adalah satu rakitan; pegangan adalah rakitan lain (kedua sisi adalah rakitan yang sama, dibuat dua kali). Masing-masing memiliki gambar rakitannya, dan gambar ibu tangga menunjukkan lubangnya.
- **Lembar tangga** (ST-…) menampilkan setiap ibu tangga lari secara lurus, dengan stasiun lubang ditulis dari ujung bawah, serta detail injakan: potongan, nosing, lipatan, dan flens ujung dengan lubangnya.
- {{ui:Cut list and weights}} di properti mendaftar setiap potongan dan panjang dengan jumlah dan kilogram; {{ui:Download the cut list (CSV)}} menyimpannya.
- Semuanya masuk ke daftar material, berkas NC, dan IFC sebagai part biasa (IfcMember, IfcColumn, IfcPlate).

## Baik diketahui

- Ini adalah titik awal, bukan desain. Tidak ada yang diperiksa kekuatan atau lendutannya; set aturan hanya membatasi bentuknya.
- Ujung ibu tangga terhadap lantai dipotong tegak lurus dan tidak dirinci; tiang bordes berdiri ke lantai di bawahnya dan tidak memiliki pelat dasar.
- Menempatkan tangga sebagai satu elemen di BimCraft belum terhubung.
